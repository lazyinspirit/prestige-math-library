# Step 3a reader report — batch 63

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: `reader-63`  
Run status at review: active (`running`).

## Opened inventory

Pages:

- `library/knot-theory/fox-colorings-and-quandle-invariants.md`
- `library/knot-theory/fox-colorings-and-quandle-invariants-examples.md`

All thirteen assigned items were opened in dependency order:

- `def-quandle-and-knot-coloring`
- `lem-dihedral-operation-is-a-quandle`
- `thm-quandle-colorings-are-reidemeister-invariant`
- `def-rack-fundamental-quandle-and-adjoint-group`
- `alg-dihedral-fox-colorings`
- `lem-rack-kink-map-is-bijective`
- `alg-finite-rack-quandle-coloring-from-table`
- `thm-dihedral-fox-colorings-terminate-and-are-correct`
- `thm-finite-table-coloring-termination-and-correctness`
- `thm-fundamental-quandle-and-adjoint-group-from-wirtinger`
- `thm-rack-colorings-are-framed-invariants`
- `ex-knot-kt-08-worked-cases`
- `cex-knot-kt-08-boundary-case`

The opened supplier items were `def-countable-choice`, `def-group-presentation`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-regular-oriented-link-diagram`, `def-oriented-reidemeister-moves`, `thm-oriented-reidemeister-equivalence-theorem`, `def-knot-planar-code`, `alg-knot-wirtinger-presentation-from-code`, `thm-knot-wirtinger-presentation-correctness`, `lem-wirtinger-crossing-ball-cover`, `lem-wirtinger-local-meridian-conjugacy`, `lem-knot-group-infinity-collar`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-framed-knot-self-linking-and-seifert-framing`, `thm-blackboard-framing-self-linking-is-writhe`, `alg-oriented-linking-number-from-diagram`, `thm-oriented-linking-number-scan-terminates-and-is-correct`, `lem-framed-knot-push-off-self-linking-well-defined`, `lem-blackboard-push-off-has-two-mixed-crossings-per-crossing`, and `lem-linking-number-even-sum-and-reidemeister-invariance`.

To check consumers of the edited quandle definition, I also read `def-encoded-diagram-size-and-exact-output`, `lem-dihedral-fox-coloring-count-is-reidemeister-invariant`, `ex-knot-kt-48-worked-cases`, `cex-knot-kt-48-boundary-case`, `thm-knot-linking-number-and-fox-coloring-finite-complexity`, and `ex-knot-kt-28-worked-cases`. Their uses of the coloring convention remain valid after the diagram-label correction; the Fox-count consumers do not use the corrected elimination-operation bound.

The run-local batch-63 proof contracts and cross-batch dependency ledger were consulted as evidence, not verdicts. No rendered `reader-63` evidence bundle was present in the active state directory.

## Repairs and evidence

- In `def-quandle-and-knot-coloring`, moved the label `$z=x*y$` off the overarc, where its old position visually assigned `$z$` to that arc. The diagram now leaves `$y$` on the overarc, `$x$` at the source underarc, and `$z$` at the target underarc. Carter's [*A Survey of Quandle Ideas*](https://arxiv.org/pdf/1002.4429), §2.3, printed pp. 8–9, explicitly uses the positive normal of the oriented overarc to determine source and target and the target relation. The trefoil closure diagram in the assigned example was checked separately: its three crossing incidences and arc labels agree with the stated Fox equations.
- In `def-rack-fundamental-quandle-and-adjoint-group`, defined rack colorings by the same positive-normal source/target rule used for quandle colorings and named their set `Col_R(D)`. This supplies the term used by the rack-invariance theorem and the finite-table checker. Removed the circular `justified_by` edge to `thm-fundamental-quandle-and-adjoint-group-from-wirtinger`: that theorem depends on the definition, while the algebraic construction exists independently of the theorem. The theorem remains in the definition's references and proves the stated diagram-independence result.
- In `alg-finite-rack-quandle-coloring-from-table`, changed the impossible `m×m` input type to a finite list of finite integer rows. The procedure now reads the row count and row lengths, returns the malformed-shape witness when needed, and scans entries in row-major order before checking rack or quandle axioms.
- Updated `thm-finite-table-coloring-termination-and-correctness` to cover the actual candidate-table input. For a candidate with `s` rows, shape validation checks the row count and `s` lengths; for shape-valid input the full check bound is `m^3+2m^2+2m+1`, including row shape, entry range, column permutations, triples, and the optional diagonal check. Its proof derives this count and retains the exhaustive `m^a` coloring enumeration bound.
- Corrected `thm-dihedral-fox-colorings-terminate-and-are-correct`'s elimination complexity. A row addition updates up to `a` coefficients, so the old `ca` bound did not count its work. The theorem now states at most `ac` pivot-search entry tests, `ac` row additions, `a^2c` coefficient updates, and `a^2` pivot-normalization divisions, with at most `min(a,c)` pivots. The solution-set and `p^f` arguments are unchanged.
- Updated the affected batch-63 contract quotations and the two revised complexity derivations in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-63.proof-contracts.json`. No edited item had a `verification.judge` record to remove. Existing historical contract review records were retained.

## Page verdicts

- `fox-colorings-and-quandle-invariants`: pass. Its draft inventory and dependencies match the assigned items. The page is YAML frontmatter only, has no summary body, and preserves `page_layout: compact-v1`.
- `fox-colorings-and-quandle-invariants-examples`: pass. Its draft example inventory matches the assigned example and counterexample. The page is YAML frontmatter only, has no summary body, and preserves `page_layout: compact-v1`.

## Unedited defects

None found in the assigned items, pages, or reviewed proof-critical suppliers. The trefoil and unknot counts are correct; the counterexample's `p=5` equality and `p=3` distinction are both verified by the displayed linear systems. The adjoint/Wirtinger group comparison uses the declared positive-normal convention consistently.

## Validation and blockers

For each of the five changed items, reflow reported `unchanged`; precheck reported all clean (the two theorem items passed direct checks, and the three definition/algorithm items had zero failing checks). The single batched proof-layout command reported `5 items, 9 steps, 0 defects`.

There is no blocker for batch 63. The active run status separately reports a `split-30 failed 3x` blocker, outside this batch.

## Coverage note

I read every assigned page and item, the direct dependencies needed for their arguments, and the additional knot-group and framing suppliers listed above. I did not audit the entire recursive foundational dependency closure. The primary passages checked were Carter's [*A Survey of Quandle Ideas*](https://arxiv.org/pdf/1002.4429), §2.1 printed pp. 3–5 and §2.3 pp. 8–9; Nelson's [*Link Invariants from Finite Racks*](https://arxiv.org/pdf/0808.0029), §§2.1–2.2 printed pp. 2–3 and §3 pp. 6–7; and Przytycki's [*3-coloring and Other Elementary Invariants of Knots*](https://arxiv.org/pdf/math/0608172), §1 pp. 2–3 and §2 pp. 10–11. Przytycki states the Fox rule as “the sum of the colors of the undercrossings is equal to twice the color of the overcrossing” and identifies its Reidemeister-invariance result; the assigned proofs provide the local derivations used here.
