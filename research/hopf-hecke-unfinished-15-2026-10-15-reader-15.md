# Step 3a reader report — batch 15

Run: `hopf-hecke-unfinished-15-2026-10-15`  
Batch: `15`  
Date: 2026-10-15

## Opened inventory

The live autopilot status reported the run as `running` at 2026-10-15 08:00 UTC, with Step 3a reads not yet recorded. The assigned manifest and reader brief were used to establish scope; contracts and cross-batch records were treated as navigation evidence, not mathematical verdicts.

Assigned pages opened:

- `library/hopf-hecke-algebras/hecke-symmetries-and-generic-quantum-schur-weyl-duality.md`
- `library/hopf-hecke-algebras/hecke-symmetries-and-generic-quantum-schur-weyl-duality-examples.md`

All five assigned items opened:

- `def-hh-type-a-quantum-antipode-formula`
- `lem-hh-type-a-quantum-antipode-descends`
- `ex-hh-hecke-operator-rank-two-and-braid-cases`
- `ex-hh-quantum-hecke-commutation-in-rank-two`
- `cex-hh-rank-one-tensor-action-is-not-faithful`

Claim-bearing dependencies and linked page-summary items opened included:

- Tensor and presentation foundations: `def-hh-scalar-and-tensor-conventions`, `lem-hh-tensor-coherence-on-elementary-tensors`, `lem-hh-free-associative-ring-and-relations-descent`, `lem-hh-universal-presentations-and-base-change`, `thm-tensor-product-of-algebras-over-a-commutative-ring`, `thm-unit-isomorphisms-for-module-tensor-products`, and `thm-tensor-product-basis-from-bases`.
- Quantum and Hecke constructions: `def-hh-type-a-quantum-tensor-action-for-centralizers`, `lem-hh-quantum-presentation-and-tensor-action-descent`, `def-hh-hecke-symmetry-and-ordered-basis-operator`, `lem-hh-type-a-tensor-operator-is-a-hecke-symmetry`, `def-hh-universal-coxeter-hecke-parameters-and-presentation`, `thm-hh-generic-coxeter-hecke-standard-basis`, `thm-hh-hecke-symmetry-tensor-power-action`, `lem-hh-commuting-left-right-hecke-length-operators`, and `lem-hh-reduced-word-independence-and-length-multiplication`.
- A-page summary claims: `lem-hh-quantum-and-hecke-tensor-actions-commute`, `lem-hh-classical-tensor-centralizer-by-polarization`, `lem-hh-finite-semisimple-matrix-double-commutant`, `lem-hh-finite-matrix-rank-under-specialization`, `lem-hh-classical-and-generic-tensor-double-centralizer-suppliers`, and `thm-hh-generic-quantum-schur-weyl-mutual-centralizers`.
- Linear-algebra premises used in those checks: `lem-hh-finite-matrix-and-module-preliminaries` and `cor-square-matrix-invertible-iff-determinant-is-a-unit`.

## Item review and edits

- `def-hh-type-a-quantum-antipode-formula`: the operation is explicitly defined on the free associative algebra, fixes coefficients, reverses words, and does not assert quotient well-definedness. The displayed generator formulas match the coproduct convention in the quantum presentation.
- `lem-hh-type-a-quantum-antipode-descends`: checked the Cartan weights, preservation of inverse/commuting/weight relations, mixed commutators, distant commutators, and both quantum Serre families. For adjacent indices the Cartan-weight exponents cancel as stated. The two antipode identities are verified on all generators and inverses, then extended to products using anti-multiplicativity and the algebra-map properties of coproduct and counit. The `N=1` boundary is covered. No silent prerequisite or mathematical gap was found.
- `ex-hh-hecke-operator-rank-two-and-braid-cases`: the displayed matrix, quadratic relation, inverse, all thirteen weak-order triple rows, and the `q=1`/`q=-1` distinction agree with the defining operator and the complete basis cases.
- `ex-hh-quantum-hecke-commutation-in-rank-two`: the `K` eigenvalues, all four basis-pair computations for each of `E_1` and `F_1`, both composition columns, and the Cartan multiset argument check out.
- `cex-hh-rank-one-tensor-action-is-not-faithful`: type `A_1` has standard basis `1,T_1`; on `V_1^{\otimes2}`, `T_1` acts as `q`, so `T_1-q` is a nonzero kernel element. This correctly refutes universal faithfulness while preserving the image-level centralizer result.

No item or page prose was edited. No item contract or judge record needed a change. There were no repaired defects and therefore no reflow, precheck, or proof-layout command was required.

## Page verdicts

- `hecke-symmetries-and-generic-quantum-schur-weyl-duality`: **pass**. The summary accurately distinguishes the abstract Hecke algebra from its image, describes the local Hecke and quantum actions, and states the generic mutual-centralizer and faithfulness ranges with their caveats. The classical polarization, rational double-commutant, and regular-specialization descriptions agree with the linked items.
- `hecke-symmetries-and-generic-quantum-schur-weyl-duality-examples`: **pass**. Its summary accurately describes the rank-two Hecke computation, the quantum/Hecke commutation calculation, and the `N=1,n=2` kernel example.

## Uneditable defects and blocker

No uneditable defect was found in the reviewed assigned claims or their claim-bearing suppliers. No blocker remains.

Coverage was focused on the assigned carriers, the directly used suppliers, and the linked items needed to check the two page summaries. I did not independently audit every transitive background dependency of those suppliers.
