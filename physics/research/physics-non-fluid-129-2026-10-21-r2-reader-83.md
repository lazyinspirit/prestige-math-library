# Step 3a independent reader report — batch 83

- **Run:** `physics-non-fluid-129-2026-10-21-r2`
- **Role:** read-only reader (`reader-83`)
- **Batch:** `83`
- **Manifest:** `research/physics-non-fluid-129-2026-10-21-r2-batch-83.pages.json`

## Opened inventory

The batch contains two pages and four items. I opened both page carriers and all four item carriers:

- `library/quantum-field-theory-mathematics/qftx-spectral-tube-analyticity.md`
- `library/quantum-field-theory-mathematics/qftx-spectral-tube-analyticity-examples.md`
- `items/def-qftx-joint-spectrum-input.md`
- `items/thm-qftx-spectral-tube-holomorphy.md`
- `items/def-qftx-cpt-spin-statistics-interface.md`
- `items/ex-qftx-positive-frequency-tube.md`

I read the batch manifest, proof contracts, batch notes, coverage record, cross-batch dependency file, and the relevant entries in `research/math-imports.json`. I also opened the three declared page prerequisites: `qft-mc02`, `spectral-measures-and-borel-functional-calculus`, and `cm-math-numerical`.

For the item dependency review I opened the declared suppliers used by the assigned statements and proofs: `def-countable-choice`, `def-real-and-complex-inner-product-space`, `def-hilbert-space`, `def-projection-valued-measure`, `thm-bounded-borel-pvm-integral`, `def-qft-poincare-test-action`, `def-cm-complex-phase-domains-and-holomorphic-maps`, `def-qft-weak-operator-valued-tempered-distribution`, `def-schwartz-space-and-its-seminorms`, `def-tempered-distribution`, and `def-schwartz-topology-and-convergence`. To check the PVM-calculus uses in the tube proof, I additionally opened `lem-simple-pvm-integral-is-representation-independent`, `def-integral-of-a-simple-function-against-a-pvm`, `lem-scalar-and-complex-measures-from-a-pvm`, `thm-bounded-operator-space-is-banach`, `thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation`, `def-integration-against-a-signed-or-complex-measure`, `def-simple-integral-against-a-signed-or-complex-measure`, `prop-simple-integrals-are-bounded-by-total-variation`, `def-total-variation-of-a-signed-or-complex-measure`, `thm-dominated-convergence`, `def-essential-supremum-with-respect-to-a-measure`, `prop-essential-supremum-is-attained-as-the-least-essential-bound`, `def-measurable-function-between-measurable-spaces`, and `def-complex-simple-function`. I opened `lem-qft-poincare-pullback-continuity-on-schwartz` to check the missing covariance prerequisite, `thm-qft-tempered-field-reconstruction` to check the joint-spectrum remark, and `def-qft-involutive-algebra-state` while checking the algebra terminology.

No TikZ or tikzcd diagrams occur in the assigned items or pages.

## Mathematical and source review

The joint-spectrum definition explicitly supplies a strongly continuous translation representation, a normalized PVM with forward-cone support, a bounded Borel integral, and a cyclic vector. The reconstruction theorem on `qft-mc02` states only a matrix-coefficient spectrum condition under additional moment identities and expressly does not assert joint translation generators or a joint PVM. The new joint-PVM input is therefore appropriately treated as additional data, not as a deduction from reconstruction.

The tube-continuation proof is sound under its stated joint-PVM and Countable Choice hypotheses. The forward-cone estimate gives exponential damping on the open future tube; the local operator-norm expansion proves the claimed total complex derivative of bounded-insertion matrix coefficients; spectral truncation supplies strong continuity on the closed tube. The bounded-operator scope is stated accurately. The finite-spectrum example correctly keeps a zero-momentum vacuum mode, proves cyclicity for the chosen algebra, restricts strict decay/growth to the nonzero mode, and leaves the full operator norm equal to one.

The interface definition does not assert a CPT or spin-statistics theorem. Its source use is appropriately limited: Fewster–Rejzner, §5.1, gives the joint PVM/spectrum convention, tube extension, and bounded-insertion analytic route; Mund, §2.1, Theorems 2.8–2.9, states the distributional tube boundary result and edge-of-the-wedge hypotheses while referring out for Theorem 2.8's proof; Álvarez-Gaumé–Vázquez-Mozo, §§4.2–4.3, treats a restricted noncommutative scalar CPT argument and records limitations on spin-statistics. I checked those exact sections in the available texts: [Fewster–Rejzner](https://arxiv.org/html/1904.04051), [Mund](https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf), and [Álvarez-Gaumé–Vázquez-Mozo](https://arxiv.org/abs/hep-th/0305093). The review did not rely on the batch notes' source-reading assertions as verdicts.

## Defects not edited

This assignment is read-only, so I made no item or page repairs.

1. **`def-qftx-joint-spectrum-input`, Definition, paragraph beginning “Fix a translation-invariant unit vector”:** the term “unital *-subalgebra” is used without specifying the inherited algebra operations and closure conditions or citing an exact supplier. The nearby `def-qft-involutive-algebra-state` defines a unital complex *-algebra, but the assigned item does not depend on or cite it and does not state the subalgebra conditions. Add an exact definition/reference and state that the subset of `B(H)` contains the identity and is closed under complex linear combinations, products, and adjoints. **Classification:** `ill-formed`, nonfatal.

2. **`thm-qftx-spectral-tube-holomorphy`, Proof 1.2:** `K` is allowed to be any compact subset of `V_+`, then `min_{b∈K}` is used. For the empty compact set this minimum is undefined. The later application is to a singleton, so the proof is repaired by stating `K` nonempty. **Classification:** `ill-formed`, nonfatal.

3. **`def-qftx-cpt-spin-statistics-interface`, Definition, symmetry and positive-energy paragraphs:** the item separately calls for a representation `U` of `SL(2,C) ⋉ R^4` and the joint-PVM input, whose supplier defines a translation representation `U: R^4 → B(H)`, but does not state that `U((I,a))` is that PVM representation for every translation `a`. Tube analyticity is established for the PVM representation; without this identification the item does not connect it to translations implementing covariance of the field n-point functions. Add the exact restriction identity. **Classification:** missing hypothesis, fatal.

4. **`def-qftx-cpt-spin-statistics-interface`, Definition, field-multiplet and covariance paragraphs:** the interface invokes the Poincaré pullback on Schwartz test functions but omits `lem-qft-poincare-pullback-continuity-on-schwartz` and does not locally require preservation of Schwartz space. The cited `def-qft-poincare-test-action` explicitly says its formula does not assert `T_g f ∈ S`; consequently a covariance identity containing `Φ(T_g f)` is not yet well-defined on the declared field domain. Add the published pullback lemma as a dependency or supply the preservation argument and hypothesis. **Classification:** missing hypothesis, fatal.

5. **`def-qftx-cpt-spin-statistics-interface`, Definition, final spin-statistics paragraph:** the exchange identity is asserted “on `D`”, but the only domain defined in the item is `D_field`. State the intended domain explicitly. **Classification:** ill-formed, nonfatal.

6. **Outside-scope draft dependency page `cm-math-numerical`, page summary, final paragraph:** the summary says “All content is draft and awaits independent workflow review,” while its item list includes `def-cm-complex-phase-domains-and-holomorphic-maps`, whose current item frontmatter says `status: published`. The assigned theorem depends on that item. The page is not one of batch 83's pages and is not in another current-run manifest, so I did not edit it. **Classification:** false claim, nonfatal. It is recorded as a page finding in the findings JSON; it is not relabelled as published or as a current-run dependency.

## Page verdicts

- **`qftx-spectral-tube-analyticity`:** return for repair because the joint-spectrum data definition and CPT/spin-statistics interface have the findings above; the tube theorem's main analytic argument is sound, with the empty-`K` proof-step correction noted.
- **`qftx-spectral-tube-analyticity-examples`:** no independent page or example defect found. The two-mode verification is correct and its qualifications are explicit. It remains downstream of the A-page repairs.

## Edits and validation

- **Edits:** none; the assigned reader role is read-only.
- **Item reflow, precheck, and proof-layout:** not run because no item was changed.
- **Blocker:** none. The outside draft page concern is outside this batch's write scope and is separately identified above.

## Coverage limits

I opened every assigned page and item and the direct suppliers used to check their claims, plus the listed PVM-integral support and cited reconstruction item. I did not re-audit every transitive proof closure of all published foundational mathematics suppliers. Source reading was limited to the cited relevant sections; I did not independently reread the complete source PDFs. The joint-spectrum item was first opened from the manifest for navigation, then its suppliers were inspected before I accepted its claims.
