# Step 3a reader report — batch 31

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Scope: batch `31`

## Opened inventory

Assigned pages:

- `fd-pn02` — `library/fluid-dynamics/fd-pn02.md`.
- `fd-pn02-examples` — `library/fluid-dynamics/fd-pn02-examples.md`.

Both pages have frontmatter only, preserve their inventories and prerequisite metadata, and carry `page_layout: compact-v1`. I also opened the direct prerequisite pages `fd-f02`, `fd-f03`, and `fd-n03`.

Assigned items, read in dependency order:

- `post-fd-ideal-gas-numerical-model`.
- `pthm-fd-conditional-positive-euler-update`.
- `ex-fd-positive-euler-uniform-gas`.

I read the current batch manifest, the three corresponding proof/physics review contracts, batch notes, cross-batch dependency rows, and coverage record as evidence, not as verdicts. Review-relevant item suppliers opened were:

- `def-fd-simple-fluid-state`, `def-fd-quantity-and-frame-conventions`, `def-fd-smooth-motion`, `post-fd-local-equilibrium`, `post-fd-weak-balances`, `def-fd-conservative-weak-form`, and `post-fd-continuum-balances`.
- `def-fd-compressible-numerical-contract` and `prop-fd-euler-llf-admissibility-interface`.
- The positivity proof chain: `thm-pe03-ideal-gas-llf-branch-preserves-positivity`, `lem-pe03-euler-llf-split-state-positive`, `prop-pe03-euler-state-and-margin-domains-are-convex-and-closed`, `lem-pe03-hll-half-cell-riemann-averages`, `thm-pe03-hll-update-preserves-convex-invariant-domain`, and `def-pe03-convex-invariant-domain`.
- Its numerical interfaces: `def-ideal-gas-euler-state-and-pressure`, `def-hll-two-wave-flux`, `def-pe03-first-order-hll-finite-volume-update`, and `thm-hll-flux-is-consistent-and-conservative`.

## Review and repairs

The postulate explicitly identifies its Newtonian chart, field domains and units, adopted calorically perfect closure, derived pressure/temperature/sound-speed maps, inviscid stress convention, weak balance tests, initial-data convention, and separately adopted entropy inequality. Its source passages support the stated constitutive and entropy conventions; the weak entropy inequality is not presented as a consequence of smooth equations or as an experimentally established fact.

The physics theorem's logarithm has a positive dimensionless argument for every state in `G_gamma`. The state-to-entropy substitution gives the adopted pressure and isentropic sound-speed maps. The statement's facewise speed and CFL conditions match the draft local proposition exactly. That proposition's proof applies the published symmetric-branch positivity result, whose split-state, convexity, half-cell-average, and one-step invariant-domain arguments support the conclusion. The conclusion remains a conditional numerical-model deduction and makes no entropy, convergence, exact-wave-enclosure, or empirical claim.

The example's equal neighboring states cancel the dissipative jump term; both periodic face fluxes equal `F(U)`, so the update is exactly unchanged. It correctly says that this symbolic example contains no shock and is not a reported measurement.

The assigned statements are uninterrupted by links, and their references follow the complete statement/example sections. The assigned items contain no TikZ/tikzcd diagrams. I also inspected the shared-face diagram in `def-fd-compressible-numerical-contract`; its labels, rightward orientation, and shared-face convention agree with the definition. Proof steps have separated paragraphs, valid trailing tags, and final QED tags on inspection.

No assigned item or page was edited; no material repair, formatter, or item validator was run.

## Uneditable finding

`thm-hll-flux-is-consistent-and-conservative` is published and outside this batch's write scope. Its Statement, line 43, says `Here $n\ge1$.` without defining or binding `n`. The preceding text quantifies a finite periodic array but never identifies its length with `n`; the symbol does not occur in the displayed update or proof. This is a nonfatal ill-formed statement fragment, since it is not used by the assigned positivity argument. The assigned consumer `pthm-fd-conditional-positive-euler-update` reaches this supplier through `prop-fd-euler-llf-admissibility-interface`, `thm-pe03-ideal-gas-llf-branch-preserves-positivity`, and `lem-pe03-hll-half-cell-riemann-averages`. Owner disposition can remove the fragment or define `n` as the array length. The finding is recorded in `research/fluid-dynamics-all-47-2026-10-23-reader-findings-31.json`.

## Page verdicts

- `fd-pn02`: pass. Its frontmatter-only layout is correct; the two assigned items and three prerequisite pages match the inspected scope. No page-level defect found.
- `fd-pn02-examples`: pass. Its frontmatter-only layout is correct, it requires `fd-pn02`, and its sole example is placed in the examples inventory. No page-level defect found.

## Blocker and coverage limits

No blocker prevents review of the assigned batch. The published supplier finding remains for owner disposition and was not edited.

I checked the relevant passages surfaced at the cited locators rather than independently rereading every page of each cited source or every transitive mathematical foundation. The source checks included Powers, *Lecture Notes on Gas Dynamics*, §§2.3.3.3–2.3.4, §§2.4.6–2.4.7.2, and §§3.2–3.3; Tong, *Fluid Mechanics, Part III: Waves*, §§4.4.1–4.4.4 and §4.6.1; Zhang–Shu, §2; and Ketcheson–LeVeque–del Razo, the Euler approximate-solver chapter's HLLE and positivity sections. Relevant passages confirm the ideal-gas/caloric relations, local-state interpretation, entropy convention, LF split-state condition, and HLL middle-state context. They do not replace the locally proved facewise positivity interface. No empirical observations or full-source rereading are claimed.
