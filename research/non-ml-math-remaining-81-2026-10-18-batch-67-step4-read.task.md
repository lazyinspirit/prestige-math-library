# Step 4 batch reviewer — batch **67**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **67**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["67"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 67 | `beilinson-bernstein-localization-and-category-o` | A | category-o-klr-and-hecke-categorification-route, affine-reflections-coroot-translations-and-alcoves, projective-git-from-linearized-line-bundles, split-reductive-root-systems-bruhat-cells-and-parabolics, borel-weil-and-borel-weil-bott |
| 67 | `beilinson-bernstein-localization-and-category-o-examples` | B | beilinson-bernstein-localization-and-category-o |

## Your content, in full

### `beilinson-bernstein-localization-and-category-o` — Beilinson–Bernstein Localization and Category O

- `def-pa36-flag-tdo-and-module` · definition — Flag-variety twisted differential operators and their modules
- `lem-pa36-complex-weight-central-character-separation` · lemma — Complex-weight separation of Harish-Chandra characters
- `lem-pa36-module-global-sections-derived-cohomology` · lemma — Global sections on module sheaves have ordinary sheaf cohomology as derived functors
- `lem-pa36-p1-line-bundle-cohomology` · lemma — Cech cohomology of line bundles on the projective line
- `lem-pa36-principal-nilpotent-borel-orbit` · lemma — The principal nilpotent Borel orbit by height elimination
- `lem-pa36-qcoh-filtered-union-and-cech-colimits` · lemma — Quasicoherent modules are filtered unions of coherent subsheaves and cohomology commutes with these colimits
- `lem-pa36-flag-tdo-pbw-and-twist` · lemma — PBW and integral line-bundle twisting for flag TDOs
- `lem-pa36-nilpotent-normality-and-springer-functions` · lemma — Normality of the nilpotent cone and Springer functions
- `lem-pa36-partial-flag-twist-product` · lemma — Partial-flag twist and local product decomposition
- `thm-pa36-global-twisted-differential-operators` · theorem — Global sections of twisted differential operators on the flag variety
- `def-pa36-global-sections-and-localization` · definition — Global sections and localization at a fixed infinitesimal character
- `lem-pa36-ample-translation-splittings` · lemma — Ample translation maps split by central-character separation
- `lem-pa36-localization-adjunction` · lemma — Localization is left adjoint to global sections
- `thm-pa36-flag-d-affinity` · theorem — Antidominant twists are D-affine and regular ones are conservative
- `lem-pa36-global-section-unit` · lemma — The unit V to Gamma Loc_kappa(V) is an isomorphism for antidominant twists
- `thm-pa36-antidominant-singular-serre-quotient` · theorem — The singular antidominant Serre quotient
- `thm-pa36-regular-beilinson-bernstein-localization` · theorem — Regular antidominant Beilinson–Bernstein localization
- `cor-pa36-category-o-localization` · corollary — The integral regular localization equivalence restricts to Category O
- `lem-pa36-relative-p1-singular-kernel` · lemma — Relative rank-one classification of the singular differential kernel
- `lem-pa36-singular-parabolic-kernel` · lemma — The singular simple-parabolic kernel on the flag variety
- `lem-pa36-twisted-associated-bundle-and-parabolic-descent` · lemma — Exact twisted associated bundles and simple-parabolic descent
- `lem-pa36-singular-verma-chain-and-generation` · lemma — A fixed singular Verma chain with globally generated final bundle
- `thm-pa36-singular-parabolic-kernel-filtration` · theorem — Kashiwara's singular parabolic kernel filtration

### `beilinson-bernstein-localization-and-category-o-examples` — Beilinson–Bernstein Localization and Category O: Examples and Counterexamples

- `cex-pa36-positive-twist-global-sections-fail` · counterexample — A positive integral SL2 twist is regular but not D-affine
- `ex-pa36-sl2-twisted-differential-operators` · example — The SL2 flag charts realize the stated rho shift
- `ex-pa36-integral-line-bundle-translation` · example — Integral line-bundle translation changes the infinitesimal character
- `ex-pa36-verma-delta-rho-shift` · example — A point-supported SL2 module gives the shifted Verma module
- `cex-pa36-singular-localization-and-parabolic-kernel` · counterexample — At the singular SL2 twist global sections is not conservative
- `ex-pa36-finite-dimensional-integral-central-character` · example — Finite-dimensional sl2 modules lie in the exact integral central-character part

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `beilinson-bernstein-localization-and-category-o` requires `category-o-klr-and-hecke-categorification-route`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
