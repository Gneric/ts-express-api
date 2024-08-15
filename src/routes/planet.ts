import { Router, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

// Model
import { Planet } from '../model/planet'
// Data
import { planets } from '../data/planets'

const router = Router()

const planetValidationRules = [
    body('name').notEmpty().withMessage('Planet name is required'),
]

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Data Found', data: planets })
});

router.get('/:id', (req: Request, res: Response) => {
    const planet = planets.find((t) => t.id == parseInt(req.params.id))
  
    !planet ? res.status(404).json({ errors: 'Planet ID not found' }) : res.json({ message: 'Data Found', data: planet })
});

router.post('/', planetValidationRules, (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const planet: Planet = {
        id: planets.length + 1,
        ...req.body
    }

    planets.push(planet)
    res.status(201).json({ message: 'Data Inserted Successfully', data: planet })
})

router.put('/:id', planetValidationRules, (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const planetIndex = planets.findIndex((t) => t.id == parseInt(req.params.id))

    if (planetIndex == -1) {
        res.status(404).json({ errors: 'Planet ID not found' })
    } else {
        planets[planetIndex] = {
            ...planets[planetIndex],
            ...req.body
        }
        res.json({ message: 'Data Updated Successfully', data: planets[planetIndex] })
    }
})

router.delete('/:id', (req: Request, res: Response) => {
    const planetIndex = planets.findIndex((t) => t.id == parseInt(req.params.id))

    if (planetIndex == -1) {
        res.status(404).json('Planet ID not found')
    } else {
        planets.splice(planetIndex, 1)
        res.status(204).json({ message: 'Data Deleted Successfully' })
    }
})


export default router