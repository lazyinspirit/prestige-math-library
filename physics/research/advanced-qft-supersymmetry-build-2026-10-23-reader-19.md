# Reader report — batch 19

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: independent reader  
Scope: batch `19`

## Opened inventory

Assigned pages:

- `qftx-nonabelian-yang-mills-model` — A page; draft, `compact-v1`, frontmatter-only, four assigned items in the manifest order.
- `qftx-nonabelian-yang-mills-model-examples` — B page; draft, `compact-v1`, frontmatter-only, three assigned examples in the manifest order.

Assigned items, read in dependency order:

1. `lem-qftx-su2-compact-nonabelian-invariant-form`.
2. `post-qftx-nonabelian-yang-mills-model`.
3. `pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance` and `pthm-qftx-nonabelian-yang-mills-euler-lagrange`.
4. `ex-qftx-su2-noncommuting-yang-mills-action-density`, `ex-qftx-su2-pure-gauge-yang-mills-action`, and `ex-qftx-su2-null-wave-yang-mills-solution`.

Direct item dependencies opened for the assigned claims: `def-countable-choice`, `ex-unitary-and-special-unitary-lie-groups`, `thm-heine-borel-rn`, `def-qft-framework-units`, `def-gauge-group-of-a-smooth-principal-bundle`, `def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, `def-qftx-lie-algebra-valued-form-bracket`, `lem-qftx-principal-curvature-cartan-bianchi`, `def-qftx-associated-covariant-derivative`, `prop-gauge-transformations-act-on-principal-connections`, `lem-sr-compact-variation-and-fundamental-lemma`, `prop-adjoint-is-a-smooth-lie-group-representation`, and `thm-the-differential-of-adjoint-is-ad`.

Relevant geometric and differential-form suppliers opened to check those uses included `def-smooth-principal-g-bundle`, `def-principal-connection-and-vertical-curvature`, `def-lie-group`, `thm-the-tangent-space-at-the-identity-is-a-lie-algebra`, `def-exponential-map-of-a-lie-group`, `thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields`, `def-left-maurer-cartan-form`, `def-differential-of-a-smooth-map`, `thm-chain-rule-for-differentials-of-smooth-maps`, `def-associated-bundle-to-a-principal-bundle-and-representation`, `thm-associated-vector-bundle-is-well-defined`, `def-conjugation-and-the-adjoint-representation-of-a-lie-group`, `def-adjoint-representation-of-a-lie-algebra`, `thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism`, `def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative`, `def-wedge-product-of-differential-forms`, `prop-differential-forms-form-a-graded-commutative-algebra`, `thm-the-exterior-derivative-is-a-graded-derivation`, `thm-the-exterior-derivative-commutes-with-pullback`, `thm-the-exterior-derivative-squares-to-zero`, `def-lie-derivative-of-a-tensor-field`, `def-lie-derivative-of-a-differential-form`, `thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket`, and `def-lie-bracket-of-smooth-vector-fields`.

Page-prerequisite context opened: `qftx-gauge-geometry`, `qft-c01`, `countability-and-uncountability`, `lie-groups-invariant-fields-and-the-exponential-map`, `compactness-in-metric-spaces`, `gauge-groups-and-representation-theory-interfaces`, and `sr-forces-and-continuum`. Their page identities, status/classification where locally presented, and inventories relevant to batch 19 were checked; no page body was authored or repaired.

Current-run consumer contexts reviewed because of the public-interface clarifications below:

- Gauge-invariance theorem, batch 20: `def-qftx-formal-perturbative-yang-mills-data` and `pthm-qftx-perturbative-yang-mills-st-identity`. Both use the unchanged conditional action-invariance result; neither relies on a nontrivial bundle over the fixed base.
- Model postulate, batch 20: the two items above; batch 30: `def-qftx-n1-vector-superfield`, `ex-qftx-n1-su2-fundamental-matter-covariant-derivative`, and `post-qftx-n1-gauge-matter-model`; batch 31: `post-qftx-n2-vector-hypermultiplet-model`, `post-qftx-n4-super-yang-mills-model`, and `ex-qftx-n4-su2-noncommuting-scalar-potential`; batch 33: `post-qftx-n2-pure-su2-ultraviolet-model`. Their inspected uses of the selected bundle, local transitions, curvature normalization, action, and adjoint representation are consistent with the explicit real adjoint-bundle definition.
- `def-qftx-euclidean-yang-mills-sector` has a nonlogical reference to the Lorentzian model stating that it supplies no Euclidean branch; the clarified definition does not add one.

## Repairs and evidence

- `post-qftx-nonabelian-yang-mills-model`: defined the real adjoint bundle as the quotient of `P × su(2)` by `(pg,Z) ~ (p,Ad_g Z)`, gave its local section charts and component transition, and identified the curvature as a section of `Λ²T* M ⊗ ad(P)`. Also defined the Lorentzian Hodge map from the metric-induced form pairing and oriented volume, including its domain, range, and action on Lie-algebra-valued forms. This closes the previously implicit real adjoint-bundle and `*η` constructions while preserving the adopted model. Vákár, §1.1.5, gives the associated-bundle quotient and induced local charts; the item’s current source locator records that section.
- `pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance`: replaced the claim about a “possibly nontrivial” bundle with the correct qualification for the fixed base `M = R⁴`: a global section exists, and after choosing one the gauge transformation has a global `SU(2)`-valued representative. The theorem and proof still use only local representatives and select no global section. Vákár, §1.1.18, states triviality over Minkowski `R⁴`; Husemöller, *Fibre Bundles*, 3rd ed., §9.2 and Chapter 10 Corollary 10.3, gives the general numerable-bundle result and its hypotheses. Added those locators to the item’s source references and moved the additional hyperlink to `Statement references`.
- The same gauge-invariance item’s Facts now distinguish the real adjoint bundle from the complex-representation scope of `def-qftx-associated-covariant-derivative`. The item explicitly passes to the complexified adjoint representation and restricts its induced derivative to the preserved real adjoint subbundle. Its proof contract now records the exact associated-covariant-derivative, adjoint-differential, and postulate facts used in step 4.1.
- `pthm-qftx-nonabelian-yang-mills-euler-lagrange`: clarified that the real adjoint bundle is defined by the model postulate and that the complex associated-covariant-derivative supplier is applied only after complexification. The induced local derivative is then restricted to real forms, with `d(Ad)e = ad` supplied explicitly. Added the corresponding `A5` fact, step tag, proof-contract citation, and step-5.1 derivation input.
- Updated batch 19’s proof contract for the revised postulate formulation and the two theorem fact/derivation records. No `verification.judge` field was present on the repaired draft items, so none was removed; no audit or judge stamp was added.

## Page verdicts

- `qftx-nonabelian-yang-mills-model` — pass. The A-page is compact frontmatter only, its inventory matches the four assigned items, and its listed prerequisites resolve.
- `qftx-nonabelian-yang-mills-model-examples` — pass. The B-page is compact frontmatter only, its examples inventory matches the three assigned examples, and its listed prerequisites resolve.

## Checks

- Reflow and precheck were run on all three changed items. Final precheck results: postulate `PASS (nonproof structure)`; gauge-invariance theorem `PASS (direct)`; Euler–Lagrange theorem `PASS (direct)`.
- Final proof-layout command covered the three changed item paths: `3 items, 11 steps, 0 defects`.
- Scoped `git diff --check` returned no whitespace errors.
- No TikZ or tikzcd diagrams occur in the assigned items.

## Unrepaired defects and blockers

None identified. No blocker remains.

## Coverage limitation

All assigned items and pages, their direct item dependencies, the relevant geometric and variation suppliers, and the current direct/indirect consumer uses described above were opened. I did not independently audit every transitive proof in the broad published foundation and unit-dictionary closures; those were used only for their exact stated definitions/results. The listed Neeb references were not separately retrieved for this review. No claim depends on an uninspected Neeb passage.
