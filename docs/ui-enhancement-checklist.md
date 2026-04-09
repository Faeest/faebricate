# UI Enhancement Checklist

Date: 2026-04-08
Project: Faebricate website

## Phase 1 — Visual System Lock (in progress)
- [x] Review current UI stack and existing shadcn-based primitives
- [x] Define direction: industrial-precision, teal + neutral, subtle grid texture
- [ ] Replace hard-coded page colors with semantic tokens
- [ ] Align section backgrounds/text to token palette
- [ ] Normalize card utility classes to token-based variants

## Phase 2 — Component Composition
- [x] Refactor material cards to use `CardHeader`, `CardTitle`, `CardDescription`, `CardFooter`
- [x] Refactor contact cards with consistent heading/body/action layout
- [x] Introduce shared section wrapper utility for spacing and max-width rhythm

## Phase 3 — Content & Media Quality
- [x] Replace placeholder material images with real product shots
- [x] Move image rendering to optimized image component strategy
- [x] Improve CTA text and supporting copy for conversion clarity

## Phase 4 — Motion Discipline
- [ ] Keep one signature hero entrance animation
- [ ] Reduce repeated animation complexity in secondary sections
- [ ] Standardize hover motion speed/easing across interactive cards/buttons

## Phase 5 — Trust & Conversion
- [ ] Add lightweight service flow section (Upload → Confirm → Delivery)
- [ ] Add social proof strip (testimonials/clients/reviews)
- [ ] Add direct fallback contact links above map

## Validation
- [ ] Run lint/type checks after each phase
- [ ] Verify mobile breakpoint readability
- [ ] Verify color contrast and keyboard focus visibility
