# Step 3a reader report — batch 11

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Batch: `11`

## Inventory opened

Assigned pages:

- `qftx-finite-q-exact-localization` (A page): `library/quantum-field-theory-mathematics/qftx-finite-q-exact-localization.md`.
- `qftx-finite-q-exact-localization-examples` (B page): `library/quantum-field-theory-mathematics/qftx-finite-q-exact-localization-examples.md`.

Assigned items, in declared dependency order:

- `def-finite-dimensional-q-exact-localization-data` (no item dependencies).
- `thm-finite-dimensional-q-exact-deformation-invariance` (depends on the definition and the imported `thm-differentiation-under-the-integral-sign`, `def-derivative`, and `cor-zero-derivative-implies-constant`).
- `ex-finite-q-exact-deformation-on-the-four-torus` (depends on the definition and theorem).

For the theorem's calculus/integration premises, I opened the local supplier proofs for `thm-differentiation-under-the-integral-sign`, `thm-dominated-convergence`, `cor-mean-value-theorem`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, and `lem-rat-embeds-dense`. I also opened `def-derivative`, `cor-zero-derivative-implies-constant`, `thm-cauchy-mean-value`, and `thm-rolle` for the exact derivative and mean-value uses. The selected imported item bytes match their entries in `research/math-imports.json`. The two published prerequisite pages named by the A-page manifest, `the-lebesgue-integral-and-the-convergence-theorems` and `the-derivative-and-mean-value-theorems`, were opened for placement and supplier context.

I also opened batch 11's proof contracts, notes, source-coverage record, cross-batch dependency file, coverage record, author check, and task file as navigation and provenance evidence only. Those records did not replace inspection of current source.

## Mathematics review and repair

### `def-finite-dimensional-q-exact-localization-data`

The definition specifies the graded algebra, Berezin convention, top-degree integral, odd derivation, density-relative divergence, and analytic admissibility conditions. I found one gap in the paragraph defining the integration-by-parts boundary flux: it invoked a graded divergence theorem for manifolds with boundary and noncompact manifolds without stating the precise identity or identifying the additional hypotheses needed for that extension.

I checked Schwarz and Zaboronsky, “Supersymmetry and localization,” §2, PDF p. 3. They give the canonical Berezin volume and the divergence integration identity for the compact, boundaryless supermanifold setup; the paper does not establish the item's unrestricted boundary/noncompact formulation. [Source](https://arxiv.org/pdf/hep-th/9511112).

I repaired the definition by making the precise integration-by-parts identity an explicit part of the chosen integration data, requiring the relevant top-degree coefficients to be integrable, and stating that the identity must be established for the chosen data. The text now asserts no general boundary formula for arbitrary boundary or noncompact cases. The cited source label now identifies its compact boundaryless scope. I updated the definition's boundary-contract evidence and regenerated the assigned theorem's F1 quotation from the current definition. The definition has no `verification.judge` record to remove.

The current batch manifest still contains its pre-repair `statement` snapshot. That manifest was outside this reader's item/A-page write scope and was left unchanged; the owner should reconcile it through the native workflow if a later gate requires a synchronized statement mirror.

### `thm-finite-dimensional-q-exact-deformation-invariance`

The statement's conditional hypotheses supply the exact identity `I(QF)=0`, the condition `(Q^2V)E_t=0`, and compact-parameter `L^1` bounds. The proof correctly differentiates the even finite exterior-algebra exponential, uses the odd Leibniz sign in `Q(OVE_t)`, applies the imported differentiation-under-the-integral theorem on an open interval with compact closure inside `J`, and then applies the real zero-derivative result to the real and imaginary parts. The imported theorem's majorant and differentiability hypotheses match the local statement. I found no remaining proof gap or overstatement; the finite-parameter conclusion does not assert a large-`t` limit or continuum functional-integral identity. No item source edit was needed. Its contract's supplier quotation was refreshed because the referenced definition changed. The theorem has no `verification.judge` record to remove.

### `ex-finite-q-exact-deformation-on-the-four-torus`

The periodic-coordinate calculation verifies `I(QF)=0`; the stated Q-closures and `Q^2V=0` hold; the compact torus gives the required compact-parameter integrable bounds; and `H_t^2=0` gives the displayed top-degree density. The cosine term integrates to zero, yielding `Z(t)=-(2*pi)^4`. The pointwise density does depend on `t`, as stated. I found no defect or missing diagram. No item source edit was needed.

### Cross-batch consumer check

The repaired definition is a formulation prerequisite of `def-qftx-supersymmetry-fluctuation-complex` in batch 48, which is in turn a prerequisite of `pthm-qftx-qexact-localization-ward-identity`. I inspected those current uses and their owning page. The definition still supplies the finite-dimensional regulator conventions; the downstream physics theorem states the integrated Q-invariance and no-boundary conditions as explicit assumptions. The clarification does not change either use, so no consumer repair is indicated. Batch 48's source and metadata were not edited.

## Page verdicts

- `qftx-finite-q-exact-localization`: pass. The draft mathematics A page has only frontmatter, `page_layout: compact-v1`, the definition before its theorem, and the two published mathematics prerequisite pages listed in `requires`.
- `qftx-finite-q-exact-localization-examples`: pass. The draft B page has only frontmatter, `page_layout: compact-v1`, the assigned example in `examples`, and its A-page companion in `requires`.

Both page bodies are empty. The assigned Definition, Statement, and Example sections contain no inline hyperlinks; their references are after the complete sections. No assigned item contains a TikZ/tikzcd diagram, and the exposition does not require one.

## Edits and checks

- Edited only `items/def-finite-dimensional-q-exact-localization-data.md` to state the integration-by-parts identity as an explicit integration-data hypothesis and qualify boundary/noncompact cases.
- Updated `research/advanced-qft-supersymmetry-build-2026-10-23-batch-11.proof-contracts.json`: refreshed the definition boundary-contract evidence and regenerated the theorem's supplier quotation from the current definition.
- Reflow: unchanged. Precheck: 0 proof-like items checked, 0 failures (the edited item is a definition). Final proof-layout: 1 item, 0 steps, 0 defects.
- No `verification.judge` record was present on the edited definition or its assigned consumers.

## Uneditable findings and blocker

No mathematical defect remains in the assigned source after the repair; the findings JSON is empty. The batch manifest's pre-repair statement snapshot remains an owner workflow follow-up as described above. I did not audit the full transitive mathematical-import closure; I checked the exact supplier statements and local proof routes used directly by the assigned theorem, along with their relevant mean-value supports.
