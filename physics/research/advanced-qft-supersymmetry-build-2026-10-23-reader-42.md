# Step 3a reader report — batch 42

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: read-only reader  
Batch: `42`

## Opened inventory

I read the required workspace instructions and content model, the Step 3a reader brief, and `research/advanced-qft-supersymmetry-build-2026-10-23-batch-42.pages.json`. The manifest assigns these pages and items:

| Page | Verdict on page carrier | Items |
|---|---|---|
| `qftx-global-anomalies-inflow` (A) | Pass: frontmatter-only, matching manifest inventory, `page_layout: compact-v1` | `def-aqft-global-anomaly-holonomy`, `def-aqft-anomaly-inflow-relative-theory`, `pthm-aqft-global-anomaly-test` |
| `qftx-global-anomalies-inflow-examples` (B) | Pass: frontmatter-only, matching manifest inventory, `page_layout: compact-v1` | `ex-aqft-anomaly-inflow-example` |

I opened all four assigned item files and the batch proof-contract file. I reviewed the contract citation and derivation rows against the current item sections; the recorded step IDs and supplier citations match those sections. The theorem contract marks the round mathematical benchmark `complete-local-proof`; I treated that record as a navigation aid and independently read the current lemma and proof.

I read the current draft dependency chain in supplier-before-consumer order:

- Batch 36: `def-aqft-topological-defect`.
- Batch 37: `def-aqft-p-form-global-symmetry`.
- Batch 4: `def-qftx-nonabelian-brst-complex`, `lem-qftx-nonabelian-brst-nilpotence`, `def-qftx-local-brst-cohomology`.
- Batch 41: `def-aqft-thooft-anomaly`.
- Batch 2: `def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, `def-qftx-lie-algebra-valued-form-bracket`, `lem-qftx-principal-curvature-cartan-bianchi`, `def-qftx-associated-covariant-derivative`.
- Batch 5: `lem-qftx-two-chart-principal-bundle-gluing`, `lem-qftx-hodge-star-decomposition-four-dimensions`, `def-qftx-instanton-number-and-asd-sector`, `thm-qftx-yang-mills-selfdual-action-bound`, `prop-qftx-su2-bpst-explicit-connection-on-s4`, `lem-qftx-round-s4-spin-twist-index-one`, `lem-qftx-periodic-su2-product-kernel-and-center-line-sign`.

I opened the A-page's six prerequisite page carriers and the B-page's four required page carriers: `qftx-thooft-anomalies`, `qftx-finite-symmetry-gauging`, `qftx-instanton-topology-mathematics`, `qftx-finite-group-bf`, `relations-functions-and-quotients`, and `compact-operators-and-riesz-schauder-theory`. Their IDs resolve and the assigned pages' requirement lists match the manifest. The published mathematics pages were read as prerequisite context; their page prose was outside this batch's assigned page scope.

For the mathematical claims used by the draft supplier proofs, I opened the relevant Definition/Statement sections of the published suppliers: `def-qftx-finite-groupoid-integration`, `def-axiom-of-choice`, `def-countable-choice`, `def-fredholm-operator-cokernel-and-index`, `def-lie-group`, `thm-the-tangent-space-at-the-identity-is-a-lie-algebra`, `def-principal-g-bundle-and-associated-fiber-bundle`, `def-smooth-principal-g-bundle`, `def-finite-dimensional-representation-of-a-group-over-a-field`, `def-associated-bundle-to-a-principal-bundle-and-representation`, `thm-associated-vector-bundle-is-well-defined`, `def-principal-connection-and-vertical-curvature`, `def-exponential-map-of-a-lie-group`, `thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields`, `def-conjugation-and-the-adjoint-representation-of-a-lie-group`, `prop-adjoint-is-a-smooth-lie-group-representation`, `def-differential-of-a-smooth-map`, `thm-chain-rule-for-differentials-of-smooth-maps`, `def-adjoint-representation-of-a-lie-algebra`, `thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism`, `thm-the-differential-of-adjoint-is-ad`, `def-left-maurer-cartan-form`, `def-finite-dimensional-lie-algebra`, `def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative`, `def-wedge-product-of-differential-forms`, `prop-differential-forms-form-a-graded-commutative-algebra`, `thm-the-exterior-derivative-is-a-graded-derivation`, `thm-the-exterior-derivative-commutes-with-pullback`, `thm-the-exterior-derivative-squares-to-zero`, `def-lie-derivative-of-a-tensor-field`, `def-lie-derivative-of-a-differential-form`, `thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket`, `def-lie-bracket-of-smooth-vector-fields`, `def-invariant-polynomial-on-a-matrix-lie-algebra`, `def-evaluation-of-an-invariant-polynomial-on-curvature`, `def-the-chern-weil-homomorphism`, `thm-chern-weil-homomorphism-is-independent-of-connection-and-natural`, `def-chern-pontryagin-and-euler-characteristic-forms`, `thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals`, `def-chern-classes-from-the-projective-bundle-relation`, `def-complex-linear-and-compatible-bundle-connections`, `thm-de-rham-theorem`, `thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology`, `thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition`, `thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity`, `thm-de-rham-cohomology-of-spheres`, `thm-general-stokes-theorem`, `ex-unitary-and-special-unitary-lie-groups`, and `thm-heine-borel-rn`. I also opened `def-given-spin-and-spinc-structures-and-associated-spinor-bundles` to check the exact available spin-group definition.

## Mathematical and diagram review

The BRST nilpotence supplier's finite-jet calculation is valid under its stated Lie-algebra Jacobi and representation hypotheses. The finite-groupoid supplier gives the required reciprocal-automorphism weight.

The round-sphere chain supplies the charge-one connection, the local Hodge intertwiner, and the bounded Fredholm realization. The product-kernel lemma proves the periodic zero-mode parity and the central inverse-determinant sign; its antiperiodic/periodic distinction agrees with its stated total-spinor convention. The assigned theorem's polynomial computation, parity argument, cancellation for the specified loop, and `BC2` normalization follow under the declared analytic and bulk-response premises. The example faithfully specializes that result. The theorem does not turn the characteristic polynomial into a BRST-class calculation, identify the chosen determinant line with the Pfaffian line, or classify other loops.

The TikZ diagram in `def-aqft-anomaly-inflow-relative-theory` has the stated endpoint evaluations, parallel transports, and scalar identity arrow. It expresses the loop cancellation criterion proved in step 2.1; the proof is independent of the diagram. No diagrams in the other assigned items need repair.

The authoritative source checks relevant to uncertainty were focused on the cited passages: [Gaiotto–Kapustin–Seiberg–Willett, *Generalized Global Symmetries*](https://arxiv.org/pdf/1412.5148), §1, PDF pp. 2–3; [Wang–Wen–Witten, *A New SU(2) Anomaly*](https://arxiv.org/pdf/1810.00844v4), §2.2, PDF pp. 6–9; and [Dai–Freed, *Eta-Invariants and Determinant Lines*](https://arxiv.org/pdf/hep-th/9405012), §§2–3 and §5, PDF pp. 11–17 and 31–35. These passages support the cited line convention, instanton zero-mode parity, and periodic product-kernel interpretation. Gaiotto et al. also state that the symmetry group is Abelian for positive form degree, which exposes the batch-37 issue below.

## Findings and needed closure

No source edits were made; this is a read-only assignment. The following uneditable defects are also recorded in the findings JSON.

1. `def-aqft-global-anomaly-holonomy`, `## Definition`, opening setup: the definition uses a smooth principal right `G`-bundle, a unitary representation, the associated complex bundle and induced metric/connection, and the standard `Spin(d)` cover without identifying exact earlier mathematical definitions or listing them in `deps`. In particular, smoothness of the representation and the associated-bundle quotient/connection convention are not supplied in this item's dependency closure. Add the exact mathematical suppliers and state their relevant right-action, quotient, smoothness, and induced-connection content. The available spin supplier is `def-given-spin-and-spinc-structures-and-associated-spinor-bundles`.

2. `def-aqft-global-anomaly-holonomy`, `## Definition`, the paragraph immediately after the displayed chiral Dirac map: “Assume the operator is Fredholm” is not defined or linked to an exact prerequisite in the item's dependencies. The subsequent determinant-line argument uses finite-dimensional kernel and cokernel and closed range. Add `def-fredholm-operator-cokernel-and-index` as a mathematical prerequisite and state its relevant content.

3. `def-aqft-anomaly-inflow-relative-theory`, `## Definition`, opening paragraph: `Spin(d+1)`, the subgroup `Spin(d)` fixing the first frame vector, and its inclusion/identification with the boundary spin group are named but not constructed or linked to an exact supplier. Add the spin-group/covering definition and the exact boundary reduction content needed for the claimed induced spin structure.

4. `def-aqft-p-form-global-symmetry` (batch 37), `## Definition`, group declaration: for every `0 ≤ p < d`, the statement permits a locally compact Hausdorff group `G` with no Abelian condition. Gaiotto et al., [*Generalized Global Symmetries*](https://arxiv.org/pdf/1412.5148), §1, PDF p. 3, state that a `q`-form symmetry group must be Abelian for `q > 0`. Add the Abelian hypothesis for positive form degree, or qualify this as a distinct generalized structure and supply the applicable locality/defect axioms. The assigned SU(2) test uses a zero-form symmetry, so this upstream defect does not alter its specific calculation.

5. `def-aqft-p-form-global-symmetry` (batch 37), `## Definition`, paragraph beginning “Use the preceding topological-defect definition”: the complete Definition contains an inline wikilink to `def-aqft-topological-defect`. Under the uninterrupted-statement rule, move it to the immediately following `## Definition references` section while preserving the content.

6. `def-aqft-thooft-anomaly` (batch 41), `## Definition`, the local anomaly class paragraph: “the model’s admissible … counterterms” is not given a mathematical type or defined set, while the quotient is claimed to be a relative cohomology class using exactly that restriction. A model-specific counterterm collection is not automatically a subspace or an equivalence relation compatible with the stated `s` and `d_H`. Define the admissible counterterm space and boundary equivalence, or state the precise subcomplex/quotient that makes this class well-defined. The assigned theorem only uses this supplier for the infinitesimal-versus-global scope distinction, not for a vanishing-class inference.

## Edit log and validation

No items or pages were edited. Accordingly, I did not run reflow, precheck, or proof-layout. The two task-authorized report artifacts are the only intended writes.

## Blocker

No operational blocker prevented review. The six uneditable findings above remain for their respective owners; the two assigned pages themselves pass the page presentation and inventory checks.

## Coverage note

I read the complete assigned items and their current draft supplier chain. For published mathematics suppliers, I checked the exact Definition/Statement sections used by those draft proofs; I did not re-audit the published proof bodies or the full cited papers. The external source review was limited to the passages and locators listed above. No empirical observation or measured input is used by this batch.
