# Quantum computing prerequisite audit

Status: integrator working audit, 2026-10-14. This audit identifies actual
root-local mathematical suppliers and distinguishes them from the separate
physics namespace. It is planning evidence, not proof acceptance for any
quantum-computing adaptation. The QC researchers are checking these and other
candidate suppliers against their assigned complete primary texts; their
reports and source ledgers will refine the inventory below.

## Root mathematical suppliers inspected

The linear-algebra library already owns most finite-dimensional scalar and
operator prerequisites. The following published page/item contracts were
inspected and are to be reused by exact root IDs rather than copied into the
QC category:

| Existing page | Exact suppliers and interface | QC use |
|---|---|---|
| `hilbert-space-geometry-and-riesz-representation` | `def-real-and-complex-inner-product-space` | Root's real/complex Hilbert-space pairing is linear in its first argument. This is the controlling mathematical convention for QC. |
| `inner-product-spaces-and-orthogonality` | `def-inner-product-space`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-bessel-inequality-and-finite-parseval-identity`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `prop-adjoint-algebra`, `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`, `thm-self-adjoint-idempotents-are-exactly-orthogonal-projections`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, and `thm-finite-dimensional-isometry-characterisations` | Supplies finite bases, adjoints, orthogonal projections, isometries, and matrix conjugate-transpose rules. QC Dirac notation is defined by translating these root pairings, not by relabeling source formulas. |
| `the-spectral-theorem-and-singular-value-decomposition` | `thm-complex-spectral-theorem-for-normal-endomorphisms`, `def-non-negative-and-positive-operator`, `thm-non-negative-operator-characterisations`, `thm-non-negative-square-root-exists-and-is-unique`, `def-singular-values-of-an-endomorphism`, `thm-singular-value-decomposition`, `thm-polar-decomposition`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `thm-operator-norm-is-the-largest-singular-value`, and `cor-operator-norm-submultiplicative-and-t-star-t-identity` | Finite-dimensional Hermitian/positive spectral theory, square roots, singular values, SVD, polar decomposition, and operator norm. These are the basis for state, channel, error, circuit, and algorithm interfaces. The general C*-algebra `thm-positive-square-root` is not needed where the finite-dimensional theorem suffices. |
| `vector-spaces-and-subspaces` | `def-vector-space`, `def-matrix-space` | Supplies vector-space and matrix-space objects; `def-matrix-space` is homed here under the library's first-page rule. |
| `matrices-and-the-matrix-of-a-linear-map` | `def-matrix-product-and-identity-matrix`, `def-trace-of-a-square-matrix`, `thm-trace-of-ab-equals-trace-of-ba`, and coordinate-basis interfaces | Root matrices are functions with zero-based row/column indices and explicit degenerate shapes. QC register tensor coordinates still need a local explicit ordering and bit-endianness contract. |
| `matrix-norms-condition-numbers-and-numerical-stability` | `def-induced-matrix-p-norm`, `def-frobenius-matrix-norm`, `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison` | Existing norm conventions and finite-dimensional unitary invariance. Trace distance/fidelity and quantum channel contractivity remain QC obligations. |
| `linear-independence-bases-and-dimension` and `vector-spaces-and-subspaces` | finite-dimensional basis, dimension, span, and subspace interfaces | Reuse when proving state-space, code-subspace, and synthesis statements. |
| `algebraic-extensions-degree-and-finite-fields` | `def-finite-field-and-its-order`, `def-prime-subfield`, `thm-characteristic-of-a-field-is-zero-or-prime`, `thm-prime-subfield-classification`, and `thm-finite-fields-have-prime-power-order` | A finite field is a field of finite cardinality; it is not implicitly `Z/qZ`. QC15–20 must specify the binary field and operations used by symplectic/stabilizer and code constructions. |
| `congruences-and-the-chinese-remainder-theorem` | `thm-z-mod-p-is-a-field` | Supplies the concrete field `Z/2Z` when QC needs the binary field, with the prime hypothesis verified. |
| `finite-probability-spaces-and-random-variables` | finite probability space, conditioning, expectation, variance, and elementary tail-bound suppliers | Mathematical outcome and success laws can reuse finite probability. Every adopted QC output law must still be defined locally from a finite measurement/instrument model and its normalization proved. |
| `boolean-circuits-and-nonuniform-complexity` | `def-boolean-circuit-size-depth-fanin-and-basis`, `def-circuit-family-and-p-poly` | Classical Boolean circuit size/depth and circuit families, with the explicit warning that P/poly does not require a procedure generating its circuits. It does not provide reversible circuit semantics or quantum gates. |
| `logarithmic-space-nl-and-reachability`, `boolean-circuits-and-nonuniform-complexity` | `def-logspace-uniform-circuit-family`, `lem-polynomial-time-computations-have-logspace-uniform-circuits`, `prop-polynomial-time-and-space-are-model-invariant` | Classical uniformity and machine-complexity interfaces. These are prerequisite context only; quantum uniformity and quantum class definitions remain QC-local. |
| `randomized-complexity-and-amplification` | BPP/RP/ZPP definitions and classical amplification lemmas | Comparison context only. Quantum bounded-error amplification needs a separate quantum proof with its access and reflection costs. |
| `finite-abelian-characters-for-combinatorics` | finite abelian additive characters and orthogonality | Potential root supplier for Pauli/symplectic and later Fourier interfaces if the researchers verify that its conventions match. |

The inspected root contracts include the finite-dimensional Riesz theorem,
finite-dimensional adjoint existence, the complex spectral theorem for normal
endomorphisms, and the positive-operator characterization. The latter gives a
finite-dimensional route to positivity without importing infinite-dimensional
operator-algebra hypotheses. Root trace suppliers include
`def-trace-of-a-square-matrix` and `thm-trace-of-ab-equals-trace-of-ba`; all
future density/channel trace claims must check their dimension, rectangular
trace, positivity, and normalization hypotheses explicitly.

The title `def-singular-values-of-an-endomorphism` is narrower than its actual
contract: it defines singular values for a linear map between finite-dimensional
inner-product spaces, and `thm-singular-value-decomposition` supplies orthonormal
bases in both its domain and codomain. This already covers rectangular maps
`T:V\to W`, including the zero-singular-value basis completion needed by
purification, Schmidt decomposition, and later singular-subspace interfaces.
The QC proposal should reuse these exact root items rather than add a duplicate
rectangular-SVD supplier. Each use must still translate Dirac formulas through
the root's first-argument-linear inner-product convention recorded above.

The canonical inner product is linear in its first argument. Let its value be
`〈u,v〉_root`. Quantum notation will be translated by the explicit convention
`〈x|y〉_D := 〈y,x〉_root`, with `〈x|` the linear functional
`y ↦ 〈y,x〉_root`. Thus `|x〉〈y|` acts by
`z ↦ 〈z,y〉_root x`, and its coordinate matrix is `x y†`. This convention
must be used in every amplitude, adjoint, trace, vectorization, Choi,
purification and tensor-coordinate proof; it is not enough to copy a textbook
bracket formula and rename its pairing.

The matrix convention is also relevant to register design: root matrices are
functions on zero-based finite index pairs, and finite matrix products use
explicit finite sums (including empty shapes). QC computational bases need
their own ordered product indexing and endian convention; it must not silently
inherit an unspoken array layout. Existing Boolean circuit families define
nonuniform P/poly without an efficient construction procedure, while the
published logspace-uniform circuit supplier is a separate stronger condition.
QC14 must likewise distinguish nonuniform families from the precise uniformity
condition it adopts.

## Missing root-local QC suppliers

An inventory search found no existing root-local quantum state, density
operator, POVM/instrument, quantum channel, fidelity, controlled-gate, quantum
circuit, reversible embedding, stabilizer-code, Knill–Laflamme, or fault-
tolerance item family. Those interfaces must be proposed under `def-qc-`,
`alg-qc-`, `lem-qc-`, `thm-qc-`, and related approved prefixes. A planned
supplier is unresolved until its contract, proof route, hypotheses, and
dependency closure are recorded; a source citation alone does not discharge
that obligation.

The root library has no dedicated general linear-code page, but the published
`gap-amplification-and-assignment-testing` page contains
`def-explicit-constant-rate-constant-distance-code`,
`def-reed-solomon-outer-code-and-binary-linear-inner-code`,
`thm-explicit-code-construction-and-distance`, and their concatenation/inner
code lemmas. These are real reusable binary-code suppliers when QC wants that
explicit family. The first definition includes the unrelated
`def-gap-preserving-csp-reduction` prerequisite, so the QC item audit must
preserve that closure rather than hide it. These specialized construction
items do not define arbitrary finite-field linear codes, parity-check and
syndrome interfaces, correction/decoding guarantees, or quantum code
subspaces. QC18 must own those missing definitions and proved results while
reusing the published family only where its exact hypotheses fit (for
example, as a B-page illustration). QC21 fault-tolerance threshold theory
remains a major authoring obligation: decompose it into model, gadget,
concatenation, and quantitative contraction lemmas, or report the unresolved
authoring dependency precisely.

## Physics-namespace audit boundary

The separate `physics/library/non-relativistic-quantum-mechanics/` and
`physics/library/non-relativistic-quantum-mechanics-mathematics/` collections
contain substantial finite and infinite-dimensional mathematics relevant to
QC. Their page metadata and the contracts of selected state, composition,
measurement, and dynamics items were inspected. Examples include
`lem-nrqm-composites-hilbert-tensor-construction`,
`lem-nrqm-composites-density-and-scalar-spectral-probability`,
`thm-nrqm-composites-finite-partial-trace-and-schmidt`,
`lem-nrqm-composites-finite-effects-and-instruments`,
`lem-nrqm-composites-finite-naimark-compression`, and
`lem-nrqm-composites-finite-ancilla-complete-positivity`,
`prop-nrqm-orbital-and-spin-finite-spin-matrices`, and
`lem-nrqm-driven-dynamics-two-level-rotating-frame`. They establish
useful mathematical conventions and proof patterns inside the physics
workflow, but their `physics/...` IDs are not logical suppliers in this root
mathematics track. When a proof route genuinely transfers, QC must state the
exact finite-dimensional variant, cite its mathematical origin as a source,
and author a complete root-local proof with all adapted hypotheses. Do not
silently resolve these items as root dependencies.

The physics-facing pages also contain framework declarations and physical
postulates, including `post-nrqm-framework-observable-and-probability`,
`post-nrqm-framework-ideal-conditional-measurement`, and the state/composition
postulate. Such items cannot supply any QC definition, fact, or proof step.
Their physical motivations may appear only in an explicit nonlogical remark;
remarks are never `deps` or `justified_by` targets. QC defines finite complex
state spaces, adopted finite outcome laws, density matrices, measurements,
channels, circuit execution, and unitary evolution mathematically and makes no
claim about physical realization.

## Existing-root prerequisite closure hold

The current combined QC/QA proposal check finds the 120-page/896-item proposed
graph structurally valid, with no direct proposal edge to a remark, but its
1,834-item transitive root prerequisite closure reaches ten existing root
items of kind `remark`. The current checker therefore remains `fail`. These
are existing-root source-chain problems, not missing QC theorem contracts or
a new QC mathematical failure. The read-only trace and exact proposed repairs
are now consolidated in
[`prerequisite-repairs.json`](../quantum-planning-review/prerequisite-repairs.json):
18 SHA-bound consumer recipes and 14 proposed typed prerequisite suppliers.
The virtual overlay result in
[`planned-repair-check.json`](../quantum-planning-review/planned-repair-check.json)
is `pass` for 2,729 planned-closure nodes, with no graph errors. That check
models the proposed repairs only; it is not the actual library closure and
does not certify proof validity or acceptance. The repairs have not been
applied. The QC integrator does not edit published root items or alter
closed-run evidence. Keep the pre-authoring hold open until root applies the
repairs and the actual checker passes; do not claim full current prerequisite
closure.

The exact transitive remark IDs are:

- `rem-heine-criterion-choice-cost`
- `rem-sup-conventions`
- `rem-metric-axiom-conventions`
- `rem-real-and-complex-normed-space-convention`
- `rem-real-exponents-deferred`
- `rem-zero-times-infinity-convention-for-pointwise-products`
- `rem-complex-plane-euclidean-dictionary`
- `rem-euclidean-topology-dictionary`
- `rem-complex-contours-as-planar-rectifiable-paths`
- `rem-plane-star-shaped-and-convex-dictionary`

The current combined checker receipt is
[`mechanical-check.json`](../quantum-planning-review/mechanical-check.json).
It still reports the ten inherited remarks. The virtual result is separately
recorded in `planned-repair-check.json`; do not conflate the two statuses.

## Integrated QC supplier and source boundary

The five page researchers' item exports and independent audit have been reconciled into 334 A-page
supplier/proof contracts and 24 B-page worked examples. Exact root item
dependencies are listed on each proposed item; the page graph in `pages.json`
reaches the actual root home page of every direct existing supplier. Root
finite-dimensional inner products, adjoints, projections, traces, positivity,
spectral calculus, SVD, matrix norms, finite fields, probability, Boolean
circuits, and coding results are reused where their inspected contracts fit.
QC-specific finite register, state, outcome, channel, circuit, code and
fault-tolerance claims remain local proposed items. The root SVD theorem covers
rectangular finite-dimensional maps `T:V→W`; no duplicate rectangular-SVD item
is proposed.

The separate physics tree was inspected for mathematical context. No physics
ID, physical postulate, physical theorem, experiment, observation or remark is
a QC logical dependency. The `source-manifest.json` indexes all six researcher
reports and source ledgers with their hashes; `coverage.md` records the exact
full-document and selected-scope receipts. The integrator did not claim
personal sequential reading of those corpora. Preskill Ch.4 remains
author-marked incomplete, the typed Ch.8 is not claimed read, and the
no-broadcasting source limitation remains visible.

The combined proposal is still `draft-planning`: no carrier is registered,
and no proof is authored or accepted here. The scoped combined proposal
checker was refreshed by the root owner after the QC and QA machine inventories
were repaired; its report is a planning consistency check, not a native gate
result. No authored item carriers, readiness marks, acceptance stamps, active
run changes or publication state were created by this audit.

## Independent scaffold repair supplement

Current proposal totals are 358 items, not the original 334, on the same 48 pages. The supplement adds exact finite effects before HJW, finite Naimark compression, unitary conjugation, fidelity comparison suppliers, finite Toffoli/Fredkin and stabilizer procedures, CSD, cyclotomic certificate/norm subroutines, explicit isometry completion and table precision. Actual physics source context and scope are recorded as nonlogical origin metadata; no physics carrier resolves as a root dependency. The prior 1834-root/ten-remark actual hold is not repaired by this QC audit. Root owns its rawhash-bound recipes and current shared checks. No canonical item is created.

Final parent refresh: the combined proposal has 896 items on 120 pages, 1,834 actual root prerequisites; strict actual check FAILS only on the original ten inherited remarks, with a draft Golden–Thompson warning. The conditional virtual check PASSES for 2,729 nodes with 18 recipes and 14 proposed suppliers. This supersedes earlier numeric snapshots and grants no proof acceptance or applied-root-repair claim.
