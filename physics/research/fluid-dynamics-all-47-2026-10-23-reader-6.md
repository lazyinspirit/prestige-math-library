# Step 3a reader report — batch 6

Run: `fluid-dynamics-all-47-2026-10-23`  
Batch: `6`  
Role: independent reader  
Findings file: `research/fluid-dynamics-all-47-2026-10-23-reader-findings-6.json`

## Reviewed pages

- `fd-x02` — `library/fluid-dynamics-mathematics/fd-x02.md` (A page). The frontmatter inventory matches the batch manifest: `thm-fd-x04`, `thm-fd-x05`, `thm-fd-x06`, `thm-fd-x08`, `thm-fd-x09`, `def-fd-incompressible-euler-system`, and `thm-fd-x13`. Its required pages and `page_layout: compact-v1` are present. The Markdown body is empty.
- `fd-x02-examples` — `library/fluid-dynamics-mathematics/fd-x02-examples.md` (B page). Its six example IDs and companion requirement match the manifest. Its `page_layout: compact-v1` is present and its body is empty.

Dependency-page context opened: draft page `fd-x01` and published mathematics pages `countability-and-uncountability` and `euclidean-surface-measure-divergence-and-green-identities`. The required supplier pages are present and classified as mathematics. Verdict: **pass** for both assigned pages; no page edits or summaries were made.

## Opened item inventory

All 13 assigned items were opened in dependency order and reviewed in their current authored form:

- In-run supplier: `def-fd-x00`.
- Published mathematical suppliers: `def-divergence-and-curl-of-a-c1-vector-field`, `def-laplacian-of-a-c2-function`, `def-jacobian-matrix-and-gradient`, `def-euclidean-inner-product`, `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, `def-oriented-unit-normal-and-flux-of-a-surface-patch`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, and `def-countable-choice`.
- Assigned A-page items: `thm-fd-x04`, `thm-fd-x05`, `thm-fd-x06`, `thm-fd-x08`, `thm-fd-x09`, `def-fd-incompressible-euler-system`, and `thm-fd-x13`.
- Assigned B-page items: `ex-fd-x04-formal-verification`, `ex-fd-x05-formal-verification`, `ex-fd-x06-formal-verification`, `ex-fd-x08-formal-verification`, `ex-fd-x09-formal-verification`, and `ex-fd-x13-formal-verification`.

For public-interface impact review after the `thm-fd-x08` repair, I also opened the direct current-run consumer `pthm-fd-px08-prediction` from batch 13. It remains consistent with the corrected flat-torus lift convention and circulation formula. Two independent defects in that out-of-scope consumer are listed below.

## Mathematical and source review

- `thm-fd-x04`: the channel reduction gives `μv'' = −G`; the pipe reduction gives `(rw')' = −Gr/μ`. Full-disk continuity excludes the logarithmic radial mode, and the polynomial solution extends the pointwise residual across the axis. The flux, shear, uniqueness-within-ansatz and infinite-domain qualifications are correct.
- `thm-fd-x05`: direct Cartesian derivatives give the stated punctured-axis divergence, curl, Laplacian, circulation and pressure balance. The solid-rotation field has fixed radius along each streamline and Bernoulli value `p₀/ρ₀ + Ω₀²r²`, so the stated lack of a common global value is correct.
- `thm-fd-x06`: the displayed field and pressure satisfy the steady Stokes system; the sphere stress with the stated center-outward normal integrates to `6πμaU`. The uniqueness proof uses the published divergence theorem only on bounded smooth annuli under its explicit `ACω` premise; the uniform decay bounds make the outer energy term vanish. The uniqueness class and absence of a finite-Reynolds-number conclusion are preserved.
- `thm-fd-x08`: the Gaussian profile solves the heat/Stokes equation on `t>0,y>0`; its tail estimate follows from `(s+z)² ≥ s²+z²`. The periodic shear solves the lifted Navier–Stokes system, the loop satisfies its material equation, and the circulation computation and `Cα>0` argument are correct. The initial-wall corner remains excluded.
- `thm-fd-x09`: the coordinate identity, enthalpy-gradient calculation, streamline Bernoulli conclusion and closed-loop differentiation have the stated hypotheses and signs. The global Bernoulli conclusion is restricted to irrotational flow on a connected component; the Kelvin conclusion is for the specified smooth barotropic Euler model.
- `thm-fd-x13`: the potential is harmonic on the exterior, its gradient obeys the no-through condition, the pressure balances the steady Euler acceleration, and the pressure-only resultant vanishes by antipodal symmetry. The statement correctly distinguishes slip from no-slip and makes no viscous or empirical claim.
- `def-fd-incompressible-euler-system` states a formal pointwise system with regularity, derivative conventions, pressure stress, and no physical-existence assertion.
- Each B example is an exact parameter substitution of its A supplier. I checked the stated profiles, circulation, pressure, wall values, stress resultants and numerical integrals.

The active source set was opened at the cited sections: Iain W. Stewart, MIT 8.09/8.309, Chapter 6 §§6.4, 6.7 and 6.8; David Tong, *Fluid Mechanics*, Chapters 1 §§2.2.1–2.2.2, 2.3.2 and 2.4.1, and 2 §§3.2.2–3.2.3 and 3.4.1–3.4.2; Shreyas Mandre, *Fluid Dynamics Lecture Notes*, Chapter 3 §§3.2.1–3.2.2 and 3.3.1; and MIT 2.25, *Solution to Stokes First Problem ATP* (all four pages). The sources support the cited model examples and scales; the submitted local proofs supply the stated axis regularity, decay-class uniqueness, exact tail bound and loop calculation. No observations or statistical claims are made by these mathematical items.

All TikZ diagrams in the assigned items were checked against their text: the channel/pipe geometry, punctured-axis vortex orientation, initial periodic ellipse, and potential-flow sphere normal/tangent arrows are consistent. The proofs do not rely on diagrams; no diagram repair or addition was needed.

## Edit and validation

Repaired `items/thm-fd-x08.md` after finding that its first field was a map to `R³` while its wall trace was stated as the scalar `U`, and that its torus loop used circulation without defining the quotient-coordinate convention. The revised statement now gives the half-space domain, the vector limit `(U,0,0)`, the pointwise system, the flat quotient and tangent identification, the periodic lifts, the material condition and the lift circulation integral. Its facts now distinguish the Euclidean loop convention in `def-fd-x00` from the torus convention defined locally. The numerical and PDE claims are unchanged.

Updated the `thm-fd-x08` proof-contract boundary excerpts to match the current Statement. The item had no `verification.judge` record to remove. Final checks after the last item edit:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/thm-fd-x08.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/thm-fd-x08.md` — pass, 1 checked and 0 failing.
- `node tools/physics-support/proof-layout.mjs items/thm-fd-x08.md` — 1 item, 4 steps, 0 defects.

The in-scope consumer `ex-fd-x08-formal-verification` still has the exact tail and circulation evaluations supplied by the repaired theorem. No other assigned source was edited.

## Unedited findings

`pthm-fd-px08-prediction` is an in-flight item owned by batch 13 and cannot be edited in this assignment:

1. Its Statement gives `u` as a vector field and `U∈R`, then says the wall trace is `U`. The precise vector trace is `(U,0,0)` (or the first component has trace `U`). This is a nonfatal type/wording defect because the field formula fixes the intended component.
2. Facts & Assumptions F3 attributes the torus loop integral to `def-fd-x00`, whose loop and circulation definition is on an open Euclidean subset of `R³`. The exact torus lift/integral convention is supplied by `thm-fd-x08`; F2 also records that supplier's result. Thus the formula is available, but F3's source attribution is inaccurate and should cite the torus-specific supplier convention.

Both are included in the findings JSON for owner routing. No other confirmed defects or blockers remain.

## Coverage note

I opened all assigned page and item carriers, the direct logical suppliers needed for the assigned claims, the stated page prerequisites, the cited fluid-mechanics passages, and the one cross-batch direct consumer needed for interface review. I did not re-audit the full transitive proof graphs of the already-published mathematical definition suppliers or the full contents of unrelated required pages beyond their current metadata and relevant listed inventory. No finding is based on those unevaluated transitive proofs.
