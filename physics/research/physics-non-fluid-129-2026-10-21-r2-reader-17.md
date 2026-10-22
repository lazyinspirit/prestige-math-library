# Step 3a reader report — batch 17

Run: `physics-non-fluid-129-2026-10-21-r2`

Role: read-only reader for batch `17`, except repairs to assigned in-flight items and assigned A-page prose.

## Opened inventory

Assigned pages:

- `emg-fx02` — `library/einstein-maxwell-models-mathematics/emg-fx02.md` (draft A page).
- `emg-fx02-examples` — `library/einstein-maxwell-models-mathematics/emg-fx02-examples.md` (draft B/examples page).

Assigned items, read in supplier-before-consumer order after opening their local suppliers:

- `def-emg-fx-dirichlet-constraint-problem`
- `lem-emg-fx-banach-implicit-constraint`
- `lem-emg-fx-dirichlet-energy-and-trace`
- `lem-emg-fx-newtonian-holder-potential`
- `lem-emg-fx-flat-dirichlet-holder-estimate`
- `lem-emg-fx-global-dirichlet-holder-estimate`
- `lem-emg-fx-dirichlet-holder-inverse`
- `lem-emg-fx-holder-cubic-map`
- `thm-emg-fx-small-dirichlet-data`
- `ex-emg-fx-small-constant-field-ball`

Cross-batch context opened before consumers:

- Batch 16 page `emg-fx01`, with `def-emg-fx-conformal-seed` and `lem-emg-fx-conformal-constraints`.
- Published `def-emg-constrained-electrovacuum-data` and `def-emg-geometric-scaling`, and `thm-gr-constraint-equations-in-normal-frame` for the conformal transformation conventions.

Published mathematical supplier statements opened for the assigned proofs included the Banach-space and Fréchet-calculus definitions and fixed-point theorem; Sobolev-space and zero-boundary definitions, bounded-domain charts, Cauchy–Schwarz, Tonelli, cutoffs, Hilbert structure, Lax–Milgram, weak Dirichlet formulation, maximum principle, smooth weak-solution regularity, mollification, Ascoli–Arzelà and Hölder-space completeness; the Newtonian-potential kernel, polar coordinates, divergence theorem, differentiation and uniform-derivative-limit results, distributional Poisson equation and locally integrable embedding; higher-order boundary regularity, Sobolev embedding/algebra/density and the chain rule; plus the mean-value, extreme-value, Heine–Borel and smooth-bump suppliers. Choice assumptions were checked against the exact Axiom of Choice and Countable Choice definitions.

The companion published page `sobolev-poincare-and-morrey-inequalities` was opened for the examples page prerequisite. Its listed higher-order embedding and Sobolev-algebra suppliers match the statements used by the example.

Relevant source passages checked:

- John K. Hunter, *Notes on Partial Differential Equations*, §2.7.1, Theorem 2.26 and Corollary 2.27 (Newtonian cancellation formula), and §2.7.2, Theorem 2.28 (Hölder estimate): <https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf>.
- Xu-Jia Wang, *Schauder Estimates for Elliptic and Parabolic Equations*, §1, Theorem 1 and the flat-boundary result (Theorem 1′): <https://maths-people.anu.edu.au/~wang/publications/3-Schauder-esti.pdf>.
- Armin Schikorra, *Partial Differential Equations I & II*, §§8.8–8.9, Theorems 8.28 and 8.30: <https://sites.pitt.edu/~armin/pde2022/pde.pdf>.

## Review and edit

The local analytic chain was checked from the Newtonian cancellation estimate through the flat-boundary estimate, finite-chart estimate and weak-to-classical Dirichlet inverse, then through the implicit-function branch and explicit ball example. The Hunter cancellation formula has the same negative boundary-flux term as the local derivation. The flat-boundary proof lifts the possibly nonzero trace of the forcing before odd reflection. The global estimate is used only as an a priori bound; its proof does not assume weak-to-classical regularity. The weak construction, positivity argument, linear coefficient, constraint equations and higher-order smoothness bootstrap in the example are supported by the stated hypotheses and suppliers. No empirical claim occurs in this batch.

Edited `items/lem-emg-fx-global-dirichlet-holder-estimate.md`. Its previous statement named a bounded smooth domain and a full Hölder norm without defining the graph regularity, membership convention or exact norm. The statement now defines the smooth-domain convention, Cartesian multi-indices, the closure classes `C^{0,alpha}` and `C^{2,alpha}`, and the full norm formula. This is the same sum-over-multi-indices convention used by the downstream Dirichlet problem definition, so the inverse lemma, branch theorem and ball example need no change. The proof arguments and six proof-contract derivations were unchanged. `reflow` reported unchanged; `precheck` passed; `proof-layout` reported 1 item, 6 steps, 0 defects.

No other item or page prose was edited. No TikZ/tikzcd diagram occurs in the assigned carriers, and no diagram was needed for the arguments.

## Defect not edited

The proof contract for `lem-emg-fx-holder-cubic-map` has a self-referential input at `research/physics-non-fluid-129-2026-10-21-r2-batch-17.proof-contracts.json#/contracts/lem-emg-fx-holder-cubic-map/derivations/2/inputs`: the derivation for proof step `3.1` lists `step 3.1` as one of its inputs. The item proof itself cites only earlier steps `1.1` and `2.1` plus facts and algebra, so the mathematical argument does not use this self-reference. The defect is confined to proof-contract metadata, outside this reader's authorized item/page prose write scope; it remains for owner disposition. It is reported in the findings JSON as an `ill-formed`, nonfatal contract defect attached to the exact assigned item ID.

## Page verdicts

- `emg-fx02`: pass. The frontmatter places the nine assigned mathematical items on the A page and declares the expected prerequisites. The body is empty, consistent with the run's frontmatter-only page policy.
- `emg-fx02-examples`: pass. The frontmatter places the assigned example on the B page and declares `emg-fx02` and the published Sobolev/Poincaré/Morrey page as prerequisites. The body is empty, consistent with the run policy.

## Coverage and blocker

All assigned pages and all ten assigned items were opened and reviewed, along with the exact supplier statements needed to check their local arguments and the three relevant Schauder/Newtonian source passages listed above. Imported mathematics outside these exact supplier statements was not independently re-proved, and unrelated transitive source material was not audited. No diagrams or empirical/statistical claims were present. The only unresolved issue is the uneditable proof-contract self-reference recorded above; there is no other blocker.
