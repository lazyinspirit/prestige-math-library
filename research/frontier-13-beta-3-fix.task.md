## Batch 3 fix task — `diagonalisation-and-the-minimal-polynomial` (88) · `inner-product-spaces-and-orthogonality` (94)

Alpha verdict: both pairs **insufficient**. No split on either (ruled by name).
The scaffolds are strong; these are specific cheap fixes, not a re-scaffold.

### F3.1 — YOUR SECOND SOURCE IS A DEAD LINK (must fix, highest priority)

`https://www.homepages.ucl.ac.uk/~ucahmki/2201notes.pdf` — Minhyong Kim, Math 2201
Lecture Notes — **returns HTTP 404.** So does the whole `~ucahmki/` directory. The
orchestrator verified both independently with full browser headers. Group B also
found the Wayback Machine has no snapshot of the PDF at any status, and the last
archived copy of that directory (2026-02-11) is a research page with no teaching
notes.

Measured exposure, computed from your own `coverage.json`:

```
diagonalisation-…  Conrad  25 rows | Kim  22 rows  ** DEAD **
inner-product-…    Kim     25 rows  ** DEAD ** | Treil 42 rows
total 114 harvested rows — 47 (41%) rest on the dead source
15 items are backed ONLY by it
```

Those 15 include the spine of page 88: `thm-primary-decomposition-for-an-endomorphism`,
`lem-coprime-kernel-decomposition`, `def-diagonalisable-endomorphism`,
`cor-minimal-polynomial-divides-characteristic-polynomial`, and
`thm-sylvesters-law-of-inertia` on page 94.

**This is not a formatting problem.** The source-depth rule requires each pair to
be backed by at least two independent treatments, at least one with a harvestable
table of contents. With Kim gone, page 88 has **one** live source and page 94 has
**one**. `level-coverage` checks that a URL is *present*, not that it *resolves*,
so this would have shipped 84 items with a dead citation past a green gate.

Nobody is claiming the notes never existed — a search index still carries the
title and Kim did host UCL course notes there. It does not matter: a reader
cannot follow a 404, so the citation cannot stand either way.

**The remedy, both verified live (HTTP 200) by the orchestrator:**

- **Page 88 → Sergei Treil, *Linear Algebra Done Wrong*, Chapter 4.**
- **Page 94 → Sheldon Axler, *Linear Algebra Done Right* 4e** —
  `https://linear.axler.net/LADR4e.pdf`. **You already read it** as a
  supplementary check, so promote it to a primary enumerated source.

Re-harvest the section/named-result headings over the exact ranges you read in the
replacement, give every heading a disposition, and re-anchor all 47 affected rows.
Where a Kim-backed result is genuinely in the replacement, cite it there; where it
is not, say so in the row rather than silently keeping it.

### F3.2 — two standard results are missing, each with a live source

- **The multiplicity criterion for diagonalisability** (Treil Thm 4.2.8):
  diagonalisable iff every eigenvalue's geometric multiplicity equals its
  algebraic multiplicity. It appears in **no** source's contents in your harvest.
  Both ingredients are already published and in your closure.
- **Least squares and the normal equation** (Treil §5.4) — one section inside the
  chapter you already harvested, on a page that develops orthogonal projections
  and the unique-nearest-point theorem.

### F3.3 — a result inside a declared range with no disposition row

**Conrad Cor 5.5** sits inside your stated Conrad range and has no coverage row.
`coverage-checklist.mjs` structurally cannot see this: it checks that every row
you listed is complete, not that you listed every heading in the range. Re-walk
your Conrad range and add any other heading you skipped.

### F3.4 — D3.1 was approved and applied; use the room it bought

The orchestrator added `field-extensions-and-the-complex-numbers` to page 88's
`requires`. Confirm `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors`
actually uses it, and that the **scalar-extension invariance** step of that proof
is stated and proved rather than assumed — invariance of the minimal polynomial
under field extension reads as obvious and is not. Do not edit `plan-spec.json`.

### F3.5 — proof-contract citations

28 of your 72 contracts have an empty `citations` array. Populate them.

### Confirmed — leave alone

Every locator Alpha could open verified (Conrad, Treil). Your linear-first
conjugate-linear-second convention and its Riesz/adjoint/Gram consequences are
recorded correctly. Your spectral-theorem decline stands — but name its licensing
page in the row.
