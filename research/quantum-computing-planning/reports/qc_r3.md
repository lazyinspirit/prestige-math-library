# QC3 research report: QC11–QC14 and QC23

Status: draft-planning research. The complete source ledger, local source files, extraction hashes, sequential-read ranges, and fetch-check stamps are recorded in [`qc_r3.json`](../source-ledgers/qc_r3.json) and [`qc_r3-coverage.json`](../sources/qc_r3/qc_r3-coverage.json). No canonical plan, item, page, library, or engine file was edited.

The complete 239-page Ronald de Wolf course PDF was read sequentially from PDF page 1 through page 239. Seven independent full treatments were also retrieved, fully extracted, and read sequentially: Barenco et al.; Dawson–Nielsen; Kliuchnikov–Maslov–Mosca; Ross–Selinger; Shende–Bullock–Markov; Watrous; and van Melkebeek–Watson. All seven are complete source treatments, not selected-paragraph readings. The source-fetch checker stamped 17/17 page-source occurrences for QC11, QC12, QC13, QC14, and QC23.

The source evidence supports exact continuous-gate decompositions and gate counts, approximate compilation with a fixed discrete alphabet, single-qubit Clifford+T synthesis constraints, uniform circuit and promise models, and several model-specific lower bounds. It does not support treating bare density as a uniformly efficient compiler; an explicit base net, finite gate/target encoding, precision algorithm, and output model are part of that interface. It also does not establish a general globally optimal circuit optimizer or a universal quantum time–space tradeoff.

## Supplier audit

The following root mathematical suppliers are already available and can be consumed directly where their statements match the required interface:

- Complex finite-dimensional linear algebra and phase conventions: [`def-real-and-complex-inner-product-space`](../../../items/def-real-and-complex-inner-product-space.md), [`def-adjoint-of-a-linear-map-between-inner-product-spaces`](../../../items/def-adjoint-of-a-linear-map-between-inner-product-spaces.md), [`def-linear-isometry-and-orthogonal-or-unitary-operator`](../../../items/def-linear-isometry-and-orthogonal-or-unitary-operator.md), [`cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`](../../../items/cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases.md), [`cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`](../../../items/cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus.md), [`thm-singular-value-decomposition`](../../../items/thm-singular-value-decomposition.md), [`thm-complex-spectral-theorem-for-normal-endomorphisms`](../../../items/thm-complex-spectral-theorem-for-normal-endomorphisms.md), [`def-operator-norm-on-a-finite-dimensional-inner-product-space`](../../../items/def-operator-norm-on-a-finite-dimensional-inner-product-space.md), and [`cor-operator-norm-submultiplicative-and-t-star-t-identity`](../../../items/cor-operator-norm-submultiplicative-and-t-star-t-identity.md). These support the matrix norm, unitary, and exact finite-dimensional reasoning, but do not state quantum circuit semantics.
- The root scalar and matrix basics include [`thm-complex-exponential-addition-and-real-extension`](../../../items/thm-complex-exponential-addition-and-real-extension.md) and [`def-classical-complex-matrix-lie-algebras`](../../../items/def-classical-complex-matrix-lie-algebras.md). They do not define the special-unitary group (SU(2)), its Euler coordinates, its topology/density interface, or the quantitative near-identity commutator estimates used by Solovay–Kitaev.
- Encoding and complexity interfaces include [`def-effective-binary-encoding-and-decoder`](../../../items/def-effective-binary-encoding-and-decoder.md), [`def-promise-problem`](../../../items/def-promise-problem.md), [`def-logspace-uniform-circuit-family`](../../../items/def-logspace-uniform-circuit-family.md), [`def-circuit-family-and-p-poly`](../../../items/def-circuit-family-and-p-poly.md), [`def-boolean-circuit-size-depth-fanin-and-basis`](../../../items/def-boolean-circuit-size-depth-fanin-and-basis.md), [`def-probabilistic-polynomial-time-machine-interface`](../../../items/def-probabilistic-polynomial-time-machine-interface.md), and [`lem-polynomial-time-computations-have-logspace-uniform-circuits`](../../../items/lem-polynomial-time-computations-have-logspace-uniform-circuits.md). The Boolean logspace-uniform definition is not the quantum polynomial-time full-description generator below; it has a different output syntax and uniformity contract. P/poly is nonuniform and is not a BQP supplier.
- Finite probability suppliers include [`def-finite-probability-space-and-event`](../../../items/def-finite-probability-space-and-event.md), [`lem-chernoff-bound-for-independent-bernoulli-trials`](../../../items/lem-chernoff-bound-for-independent-bernoulli-trials.md), and [`thm-chernoff-bound-for-independent-random-signs`](../../../items/thm-chernoff-bound-for-independent-random-signs.md). The Bernoulli tail bound is the clean supplier for repeated-run amplification once the quantum-output variables have been proved independent by product-register semantics.
- Algebraic-number suppliers include [`def-number-field`](../../../items/def-number-field.md), [`def-integral-element-and-algebraic-integer`](../../../items/def-integral-element-and-algebraic-integer.md), [`def-ring-of-integers-of-a-number-field`](../../../items/def-ring-of-integers-of-a-number-field.md), [`thm-cyclotomic-ring-of-integers`](../../../items/thm-cyclotomic-ring-of-integers.md), [`cor-algebraic-integer-minimal-polynomial-criterion`](../../../items/cor-algebraic-integer-minimal-polynomial-criterion.md), [`cor-rational-algebraic-integers-are-integers`](../../../items/cor-rational-algebraic-integers-are-integers.md), and [`thm-kronecker-root-of-unity-criterion`](../../../items/thm-kronecker-root-of-unity-criterion.md). These can support the local finite-field/cyclotomic arguments below. There is no root item identifying the Clifford+T dyadic cyclotomic ring, proving its unit-modulus elements are exactly eighth roots, or proving the denominator-exponent synthesis descent.

I inspected the relevant existing physics namespace proofs without treating them as logical suppliers. `physics/items/def-nrqm-state-geometry-state-vectors-and-rays.md` and `lem-nrqm-state-geometry-normalization-and-phase-classes.md` give a careful phase-orbit treatment; `lem-nrqm-state-geometry-ray-to-rank-one-projection.md` derives the rank-one projection statements; and `pthm-nrqm-state-geometry-pure-preparation-phase-invariance.md` explicitly adopts the state postulate. `def-nrqm-observables-framework-observable-and-outcome-law.md` and `pthm-nrqm-observables-born-outcome-law-properties.md` define and prove outcome-law statements conditional on the physical P1/P2 postulates. `def-nrqm-measurement-framework-declared-measurements-and-instruments.md` explicitly reads a declared measurement postulate. The phase-orbit mathematics is useful as a convention audit, but no one of these physics items supplies a quantum circuit acceptance law, gate model, circuit family, or BQP statement. Circuit acceptance below is defined as a finite-dimensional mathematical probability distribution from a unit vector and an orthonormal computational basis; no physical postulate is invoked.

## Shared convention and acyclic interfaces

The root inner product is linear in its first argument. Use the agreed conversion throughout: write \(⟨x,y⟩_r\) for the root pairing and define Dirac notation by

\[
\langle x|y\rangle_D := \langle y,x\rangle_r,
\qquad \langle x|:y\mapsto\langle y,x\rangle_r,
\qquad |x\rangle\langle y|:z\mapsto\langle z,y\rangle_r x.
\]

Thus the matrix of \(|x\rangle\langle y|\) is \(xy^\dagger\), and the amplitude \(\langle z|U|\psi\rangle_D\) equals \(\langle U\psi,z\rangle_r\). Do not flip the root pairing convention or silently copy a source's bra/ket convention.

`QC09` must own the earlier reusable resource interface `def-qc-elementary-circuit-resources` (fixed finite gate labels, gate count, depth, qubit width, and clean/dirty ancilla count). QC10, QC11, QC12, and QC13 consume that earlier item. `QC14` may refine it in `def-qc-circuit-cost-model` by adding description-generation time, query count, classical bit cost, and precision cost; QC10–QC13 must not depend on that later refinement. This resolves the cycle risk.

For QC14, consume root `def-promise-problem`; do not create a duplicate promise-problem definition. Use the agreed exact IDs `def-qc-uniform-circuit-family`, `def-qc-promise-computation-model`, `def-qc-quantum-acceptance-probability`, `def-qc-bqp-promise-class`, `def-qc-circuit-cost-model`, `alg-qc-bounded-error-amplification`, and `thm-qc-bounded-error-amplification-correct`. For QC12, reserve `alg-qc-solovay-kitaev-unitary-compiler` and `thm-qc-solovay-kitaev-error-and-resource-bound`.

## QC11: continuous gates, exact one-qubit and two-level synthesis

Exact synthesis here means equality of the full unitary matrix using a continuous one-qubit gate library and CNOT/two-qubit gates. It is not the same as a finite discrete gate compiler. Matrix-level statements retain global phase.

| Proposed ID | Contract and proof route | Dependencies / obligations |
|---|---|---|
| `def-qc-two-level-unitary` | For two distinct computational-basis labels (x,y) and (V\in U(2)), the two-level unitary acts as (V) on \(\operatorname{span}\{|x\rangle,|y\rangle\}\) and as identity on the orthogonal complement. Its definition is an exact matrix, including scalar phase. | QC02 ordered computational basis; root finite-dimensional complex inner-product and adjoint items. |
| `thm-qc-one-qubit-euler-decomposition` | For every (U\in U(2)), (U=e^{i\delta}R_z(\alpha)R_y(\theta)R_z(\beta)) for real parameters; if \(\det U=1\), the scalar is absorbed and the (SU(2)) form remains. Prove by writing the two orthonormal columns of U, parameterizing the first unit vector by two phases and an angle, and using orthogonality to fix the second column. Barenco Lemma 4.1 supplies this proof. | QC07 rotation matrices; root complex conjugation, norm, matrix multiplication. Keep \(e^{i\delta}I\) explicit. |
| `def-qc-global-phase-equivalence` | Define matrix equality up to a scalar \(\lambda U\), \( |\lambda|=1\), separately from ordinary matrix equality. | QC11 matrix semantics. |
| `lem-qc-global-phase-under-control` | For \(C(U)=|0\rangle\langle0|\otimes I+|1\rangle\langle1|\otimes U\), \(C(\lambda U)=(P_\lambda\otimes I)C(U)\), where \(P_\lambda=\operatorname{diag}(1,\lambda)\). Thus an uncontrolled whole-circuit scalar does not change a measurement law, but replacing a target by a phase-congruent matrix inside a control changes a relative phase unless the control phase is restored. Prove by the two control-block matrices. | QC08 controlled-gate definition; QC11 matrix phase convention. |
| `alg-qc-two-level-unitary-elimination` | Input: exact (N\times N) unitary U and a fixed order of rows/columns. Output: a word of two-level Givens factors and a diagonal phase matrix. At each column, if both pivot entries vanish skip; otherwise form a normalized complex Givens rotation that zeros the lower entry. After at most (N(N-1)/2) eliminations the matrix is upper triangular; check the diagonal phases; reverse the operations. | QC02 basis; `def-qc-two-level-unitary`; QC09 exact circuit resource. Exact algebraic/real input representation must be specified if a Turing algorithm is claimed. |
| `thm-qc-two-level-unitary-elimination-correct` | The preceding algorithm terminates after at most (N(N-1)/2) Givens rotations plus at most (N) one-coordinate phases and its matrix product is exactly U. Proof: maintain the left-product invariant, show each Givens step zeros one entry without changing prior columns, then use orthogonality to show a triangular unitary is diagonal. | Previous algorithm plus finite matrix algebra. |
| `alg-qc-two-level-gate-to-elementary-gates` | Move the two selected basis states next to each other along a Gray path using reversible bit flips, apply a multiply-controlled one-qubit (V), and undo the Gray path. Resolve negative controls by X conjugations. Specify whether a clean ancilla is present and returned. | QC08 controls; QC09 resources; two-level definition. |
| `thm-qc-two-level-gate-synthesis-correct` | The Gray-path construction exactly realizes the two-level matrix, with no unintended action on other basis states. State its gate/work-bit count for each chosen controlled-U implementation. | Previous algorithm; Barenco §§5–7 give constructions. A generic matrix decomposition is not a free controlled-U instruction. |
| `thm-qc-exact-arbitrary-unitary-qsd-upper-bound` | Shende–Bullock–Markov's exact Quantum Shannon Decomposition gives a no-ancilla (n)-qubit unitary circuit with at most \( (23/48)4^n-(3/2)2^n+4/3\) CNOTs, plus one-qubit gates. Their construction uses cosine-sine decomposition, multiplexors, and cancellations. This is a gate-count upper bound, not a bound on numerical decomposition time. | QC09 resource model; QC07 one-qubit gates; QC11 exact semantics. Require an explicit branch-safe angle-computation algorithm before asserting a bit-time bound. |
| `lem-qc-generic-cnot-parameter-count` | For a circuit skeleton on n qubits with m CNOTs and arbitrary one-qubit gates, prove that its parameterized image has real dimension at most \(3n+4m+1\): the initial local layer contributes at most \(3n\), each CNOT contributes at most four new parameters by the local stabilizer/coset calculation, and one scalar accounts for global phase. There are finitely many skeletons for fixed n,m, so if \(3n+4m+1<4^n=\dim U(2^n)\), their smooth images have measure zero. This yields the generic lower bound in the following theorem. | QC09 exact circuit resources/semantics; finite-dimensional unitary parameterization and smooth-image measure-zero argument. The cited Shende paper reports the bound but does not prove these steps. |
| `thm-qc-generic-unitary-cnot-lower-bound` | For almost every n-qubit unitary, at least \(\left\lceil(4^n-3n-1)/4\right\rceil\) CNOTs are needed in an exact no-ancilla circuit with arbitrary one-qubit gates. The statement is generic and follows from the preceding parameter-count lemma. | `def-qc-elementary-circuit-resources`; `lem-qc-generic-cnot-parameter-count`. Do not call this a per-instance lower bound. The cited source does not discharge the helper lemma proof. |
| `thm-qc-multicontrolled-ancilla-resource-tradeoff` | Barenco's exact constructions give \(\Theta(m^2)\) basic two-qubit operations for a general m-control (U) without extra workspace and \(\Theta(m)\) for the same m controls when one clean bit is initialized to 0 and returned to 0. The source's corollaries are indexed as \(\Lambda^{n-1}(U)\) with no extra bit and \(\Lambda^{n-2}(U)\) on n wires with a final wire fixed at 0; align m before comparing. | QC08 control semantics; QC09 clean-ancilla resource interface. Prove exact return of the clean bit; do not mix dirty and clean workspace. |

The Givens upper bound from Barenco is \(\Theta(n^3 4^n)\) two-qubit operations without work bits. Shende et al. give the sharper CNOT upper bound above. Their CNOT lower bound is generic, not a promise about every particular U. Any selected exact unitary factorization keeps scalar phases; Barenco explicitly warns that a phase-congruent Toffoli can fail when embedded in a larger nonclassical controlled operation.

## QC12: effective approximate universality and Solovay–Kitaev

Density is an existence statement. A compiler additionally needs a target encoding, exact finite gate labels/matrices, an effective initial net, and a precision-safe algorithm. The source's principal quantitative result is the single-qubit SU(2) recurrence; fixed-k compilation follows from an exact decomposition and a telescoping error budget. With raw finite gate labels the arbitrary fixed-width target guarantee is projective (whole-block/channel) approximation; representative-level operator approximation requires an explicit phase-capable gate contract.

| Proposed ID | Contract and proof route | Dependencies / obligations |
|---|---|---|
| `def-qc-effective-unitary-matrix-input` | A fixed gate set is a finite list of exact matrix labels. A target (U) is supplied by a Cauchy name that, on input (1^b), returns rational real/imaginary entries within (2^{-b}), with a stated time bound. Precision \(\varepsilon\in(0,1/2)\) is a positive rational in binary. | Root effective binary encoding and deterministic time interface. Do not accept an arbitrary real as an algorithmic input. |
| `def-qc-inverse-closed-dense-su2-gate-set` | (G\subset SU(2)) is finite, includes the inverse of every generator, has exact finite labels, and its generated subgroup is dense in operator norm. If a base-net certificate is needed by the compiler, include the finite list and its certified covering radius as part of this fixed gate-set package. | QC11 matrix norm; root complex/matrix algebra. Density alone does not calculate a net. |
| `lem-qc-clifford-t-projective-density` | Show the projective Clifford+T one-qubit subgroup is dense: normalize \(H,T\) into \(h=iH\in SU(2)\) and \(t=e^{-i\pi/8}T\in SU(2)\), take \(V=ht\), and compute \(\operatorname{tr}V=\sqrt2\sin(\pi/8)=x\). The minimal polynomial of x is \(2X^4-4X^2+1\), not monic; prove its degree is four using the norm of \(x^2=1-\sqrt2/2\). Thus x is not an algebraic integer. If an eigenangle of V were rational in units of \(\pi\), the trace would be a sum of roots of unity and hence an algebraic integer, contradiction. Powers of V are dense on one SU(2) torus; conjugation by t gives a nonparallel axis; an explicit two-axis Euler/coordinate lemma yields all SU(2). The normalized matrices are SU(2) lifts of raw H/T labels; translating the resulting word back to raw labels preserves only the projective class unless its scalar is tracked. | Root algebraic-integer minimal-polynomial criterion, ring-of-integers/cyclotomic field and root-of-unity facts; local irrational-rotation and two-axis Euler lemmas. The gate normalization phases are tracked, not deleted under a control. |
| `lem-qc-compact-su2-base-net` | Compactness of the finite-dimensional unitary group and density imply the existence of a finite (\varepsilon_0)-net with gate words of maximum length (L_0), where \(\varepsilon_0,L_0\) are constants for fixed G. Prove compactness as a closed bounded subset of a finite-dimensional matrix space and extract a finite subcover. | Root finite-dimensional normed-space compactness and operator norm. The numerical net/certificate must be given or computed; density alone does not select a finite search cutoff. |
| `lem-qc-su2-near-identity-logarithm` | For \(\|D-I\|<\rho<1\), the convergent power series \(\log D=\sum_{j\ge1}(-1)^{j+1}(D-I)^j/j\) supplies a traceless skew-Hermitian logarithm when (D\in SU(2)); bound its norm by an explicit function of \(\rho\). | Matrix series convergence, operator-norm submultiplicativity, determinant/trace calculation. Supply a local quantitative proof. |
| `lem-qc-su2-balanced-commutator` | For (D\in SU(2)) with \(\|D-I\|\le\eta\), construct (V,W\in SU(2)) with \(\|V-I\|,\|W-I\|\le c_g\sqrt\eta\) and \(\|D-VWV^\dagger W^\dagger\|\le c_1\eta^{3/2}\). Use Pauli coordinates: for (X=i\vec x\cdot\vec\sigma\), choose orthogonal vectors \(\vec a,\vec b\) with \(\|\vec a\|,\|\vec b\|=O(\sqrt{\|X\|})\) and \([i\vec a\cdot\vec\sigma,i\vec b\cdot\vec\sigma]=X\); compare the group commutator exponential series through degree two and bound the cubic tail. State explicit constants and a small-radius threshold in the authored lemma. | Pauli algebra and local matrix exponential estimates. Dawson–Nielsen prove the route but describe constants approximately; their text is not a substitute for the explicit local bound. |
| `lem-qc-commutator-error-cancellation` | If V,W are within \(c_g\sqrt\eta\) of identity and \(\widetilde V,\widetilde W\) are each within \(\eta\), then the group commutator error is at most (c_2\eta^{3/2}), with an explicit (c_2) for the same small-radius regime. This is the cancellation step that makes the recursion improve precision. | Previous commutator lemma; prove by expanding products and grouping first-order errors, not by a generic Lipschitz bound (which would only be O(η)). |
| `alg-qc-solovay-kitaev-unitary-compiler` | Input: fixed G plus certified base net; target Cauchy name (U\in SU(2)); rational \(0<\varepsilon<\varepsilon_0\). At level 0 return a base-net word; at level j compile the residual (U\widetilde U_{j-1}^{\dagger}), use balanced commutator decomposition, recursively compile V,W, and output \(\widetilde V\widetilde W\widetilde V^\dagger\widetilde W^\dagger\widetilde U_{j-1}\). Choose the least j whose certified error bound is ≤ε; inverses reverse the word and use inverse labels. | Prior finite-net, logarithm, and commutator lemmas; QC09 output resource. Exact finite-precision implementation is a separate item/obligation. |
| `thm-qc-solovay-kitaev-error-and-resource-bound` | If \(\eta_{j+1}\le C\eta_j^{3/2}\), \(L_{j+1}\le5L_j\), and \(0<\eta_0<C^{-2}\), then \(\eta_j\le C^{-2}(C^2\eta_0)^{(3/2)^j}\). Taking \(j=\left\lceil\log_{3/2}\frac{\log(1/(C^2\varepsilon))}{\log(1/(C^2\eta_0))}\right\rceil\) yields explicit word length (O(\log^{\log_{3/2}5}(1/\varepsilon))=O(\log^{3.97}(1/\varepsilon))). With a shared recursive DAG and (T_{j+1}\le3T_j+O(1)\), compiler arithmetic time is (O(\log^{\log_{3/2}3}(1/\varepsilon))=O(\log^{2.71}(1/\varepsilon))); printing the expanded word costs at least its length and at most O(length). Constants depend on fixed G and the fixed net. | Prior lemmas and algorithm. Dawson–Nielsen explicitly leave finite-precision arithmetic uncharged; the (2.71) bound is a real/exact-arithmetic pointer model until a bit-stability theorem is supplied. |
| `thm-qc-fixed-arity-unitary-error-budget` | For fixed k, factor an exact target \(U\in U(2^k)\) by QC11 into \(m(k)\) one-qubit \(U(2)\) gates and \(c(k)\) exact CNOTs. Write each one-qubit gate as \(e^{i\phi_j}S_j\), with \(S_j\in SU(2)\), and compile only the \(S_j\) factors by SK. For the resulting fixed-width circuit C, the guaranteed metric is \(\min_{|\lambda|=1}\|U-\lambda C\|_{op}\le\varepsilon\), with at most \(m(k)\) compiler calls at accuracy \(\varepsilon/m(k)\); telescoping gives this whole-circuit projective bound. Its gate count is at most \(c(k)+O(m(k)\log^{\log_{3/2}5}(m(k)/\varepsilon))\), with no ancillas. Consequently every input-state/output-event probability changes by at most \(2\varepsilon\). This is a channel-level guarantee for the entire unconditional block, not operator-norm approximation to a prescribed representative. A strict representative-level bound requires an explicit phase-carrying primitive/decomposition. | QC11 exact factorization, one-qubit SU(2) compiler, root norm inequalities. The CSD angle algorithm's finite input representation and branch handling remain explicit. |
| `thm-qc-controlled-phase-approximation` | Define \(P_\alpha=\operatorname{diag}(1,e^{i\alpha})\), \(R_z(\alpha)=\operatorname{diag}(e^{-i\alpha/2},e^{i\alpha/2})\), so \(P_\alpha=e^{i\alpha/2}R_z(\alpha)\). The exact circuit applying CNOT, \(P_{-\theta/2}\) on the target, CNOT, then \(P_{\theta/2}\) on each wire implements \(CP_\theta=\operatorname{diag}(1,1,1,e^{i\theta})\); verify on four basis states. Replacing the three P gates by Rz gates gives \(e^{-i\theta/4}CP_\theta\); the controlled relative \(e^{i\theta}\) is preserved. This scalar may be ignored only for the entire unconditional two-qubit block. In the continuous phase-gate model, controlling that Rz implementation requires the exact \(P_{\theta/4}\) correction on the outer control. The fixed-arity compiler gives projective operator error at most \(\varepsilon\) for the whole two-qubit \(CP_\theta\) target. For an additional control, apply it to the complete three-qubit controlled-\(CP_\theta\) matrix, preserving that target representative through the decomposition; do not control a phase-minimized approximation to \(CP_\theta\). A finite H/T compilation does not supply arbitrary phase gates exactly, so no exact finite-set phase-restoration or representative-level cost is claimed. | QC08 controlled phase; QC11 CNOT; SU(2) compiler and projective error-budget theorem. Exact continuous identity is proved algebraically; finite-set gate count/bit-time for exact arbitrary phase restoration is not claimed. |
| `thm-qc-solovay-kitaev-bit-complexity` | Candidate statement: with fixed algebraic G, certified net, Cauchy-name target whose precision-k entries are computable in poly(k), and rational ε, give a Turing-machine bit-cost and prove every interval/rounding decision. Dawson–Nielsen explicitly do not do this. Keep this as unresolved unless a full precision schedule proves the stated guarantee; density alone is not an effective compilation result. | Missing proof: bit bounds for each recursion level, certified base-net lookup, branch-safe commutator/logarithm arithmetic, and resulting output representation. |

The single-qubit SK source hypotheses are not optional: \(G\subset SU(2)\) is finite, inverse-closed, and dense in operator norm; the target is in \(SU(2)\) and represented effectively; dimension is fixed. The raw finite H/T/CNOT alphabet does not have operator-norm-dense words at fixed width because its determinants lie in a discrete subgroup. The normalized \(h,t\) lifts above yield projective density; translating them to raw labels proves projective, not representative-level, synthesis. In the displayed algorithm, fixed-net gate length obeys \(L_{j+1}=5L_j\), not a black-box claim that any dense gate set comes with a compiler. The Dawson–Nielsen paper says it ignores finite precision. The van Melkebeek–Watson time–space paper gives a finite-precision argument for its own fixed basis in a particular simulation; it does not discharge a general target-matrix SK compiler interface.

## QC13: Clifford+T exact and approximate synthesis

Use the fixed algebraic gate matrices (H), (T=\operatorname{diag}(1,\omega)), (\omega=e^{i\pi/4}\), and CNOT. The ring in the exact one-qubit theorem is
\[
D[\omega]=\mathbb{Z}[1/\sqrt2,i]=\mathbb{Z}[\omega,1/2]\subset\mathbb{Q}(\zeta_8).
\]
The paper proves the one-qubit theorem only; its analogous multi-qubit ring characterization is a conjecture.

| Proposed ID | Contract and proof route | Dependencies / obligations |
|---|---|---|
| `def-qc-clifford-t-gate-library` | Specify H, T, T†, S=T², Z=T⁴ and CNOT by exact matrices and exact finite labels. State the wire order and no implicit ancilla. | QC02 tensor order; QC09 resources. |
| `def-qc-dyadic-cyclotomic-ring` | Define \(D[\omega]=\mathbb Z[\omega,1/2]\), \(\omega^8=1\), \(\omega^4=-1\), and a canonical coefficient/denominator representation. | Root `thm-cyclotomic-ring-of-integers`; make representation uniqueness and arithmetic costs explicit. |
| `def-qc-denominator-exponent` | Define the least k for which \(2^k x\in\mathbb Z[\omega]\) (or an equivalent √2 convention) and state the chosen convention exactly. | Ring definition. Do not mix the source's sde convention with a new exponent convention. |
| `lem-qc-clifford-t-entry-ring` | Every H/T circuit matrix has entries in (D[\omega]), by closure under multiplication and exact gate entries. | Ring definition and circuit matrix product. |
| `lem-qc-dyadic-cyclotomic-unit-circle` | If \(x\in D[\omega]\) and \(x\bar x=1\), then \(x=\omega^j\). Proof route: express x with least denominator exponent; use the unique prime over 2 in (\mathbb{Z}[\omega]) and \( (2)\sim(1-\omega)^4\) to show any denominator is canceled in x; then x is an algebraic integer, all conjugates have modulus one, and root `thm-kronecker-root-of-unity-criterion` plus the roots of unity in (\mathbb Q(\zeta_8)\) gives an eighth root. The prime/valuation step is missing as a specialized root supplier and must be proved locally. | Root cyclotomic ring of integers, integral ideal factorization, Kronecker criterion, and root-of-unity facts. Local proof must discharge the denominator/valuation and \(\mu(\mathbb Q(\zeta_8))=\mu_8\) steps. |
| `lem-qc-single-qubit-ring-unitary-form` | Use unitarity and the preceding unit-circle lemma to write every 2×2 ring unitary in the source's normal form, retaining its determinant phase. | Prior ring lemmas; KMM §3. |
| `thm-qc-single-qubit-exact-clifford-t-characterization` | A 2×2 unitary is an exact H/T circuit iff all entries lie in (D[\omega]). The forward direction is matrix closure; the converse reduces to preparing the first column and correcting its relative phase. | Root/QC algebra plus explicit denominator-exponent lemmas. The multi-qubit analogue stays conjectural and is not asserted. |
| `alg-qc-exact-single-qubit-clifford-t-synthesis` | Input: a 2×2 unitary with exact (D[\omega]) entries in a canonical representation; output: an H/T word. While the denominator exponent exceeds the finite base threshold, choose k∈{0,1,2,3} so H T^k lowers it; append inverse steps and finish by finite base lookup. Include a failure branch for entries outside the ring. | Exact ring characterization and denominator descent. The base table must be finite and independently checkable. |
| `thm-qc-exact-clifford-t-synthesis-optimality` | State the KMM H- and T-count minimality guarantee for the produced word and its O(n_opt) ring-operation / O(n_opt²) bit-operation costs under the source's encoding. Its Appendix B uses a verified finite base table plus an HT-normal form. Reproduce/check the table rather than citing “computer search” as an opaque proof. | Exact algorithm, finite certificate, bit model for ring elements. |
| `thm-qc-controlled-t-two-qubit-obstruction` | The exact two-qubit controlled-T matrix has determinant \(\omega\). Any two-qubit Clifford+T circuit has determinant a power of (i=\omega^2); multiplying the target by any allowed ring global phase \(\omega^j\) changes determinant by \(\omega^{4j}\), still leaving an odd exponent, so controlled-T is impossible exactly and up to global phase without workspace. | Root determinant multiplicativity and exact gate matrices; ring phase lemma. State “no extra ancilla” precisely. |
| `alg-qc-controlled-t-clean-ancilla-circuit` | Give the explicit three-qubit Clifford+T circuit with the third qubit initialized to \(|0\rangle\) and returned to \(|0\rangle\), implementing controlled-T on the first two wires. Verify the action on all four basis inputs. | QC10 clean ancilla semantics; KMM Fig. 1. This does not assert a general multi-qubit ring theorem. |
| `def-qc-ancilla-free-rz-approximation-problem` | Input θ, ε and access representation; seek an ancilla-free single-qubit Clifford+T word U with \(\|R_z(\theta)-U\|_{op}\le\varepsilon\), minimizing T-count. Define Rz exactly as (e^{-i\theta Z/2}). | QC09 resource vector and operator norm; separate from synthesis up to phase. |
| `alg-qc-rz-clifford-t-approximation` | Ross–Selinger Algorithm 7.6: enumerate candidate algebraic ring points in an ε-region, solve (t^\dagger t=1-u^\dagger u) via the stated number-theoretic subroutine, and synthesize the resulting exact ring unitary. | Exact ring synthesis plus Ross–Selinger grid/factoring algorithm. Input real θ, ε encoding is not specified by the paper; use a computable-real name or leave bit-time unresolved. |
| `thm-qc-rz-clifford-t-tcount` | With a factoring oracle the algorithm is instance-optimal in T-count and expected polylog(1/ε) arithmetic time. Without factoring, the near-optimal result is conditional on Hypothesis 8.3; the expected count is second-optimal plus O(log log(1/ε)). State the source's typical/worst-case bounds with their hypotheses; do not turn experimental typical counts into a theorem. | Prior algorithm and exact named hypothesis. State factoring-oracle access separately from gate count. |
| `thm-qc-rz-synthesis-up-to-phase` | Separate Ross–Selinger §9 problem \(\min_\lambda\|R_z(\theta)-\lambda U\|\). For this Clifford+T problem it suffices to consider \(\lambda\in\{1,e^{i\pi/8}\}\); any use under an outer control must restore the relative phase. | On-the-nose Rz theorem; QC11 controlled-global-phase lemma. |

Exact ring synthesis, approximate Rz synthesis, and synthesis up to phase are separate. T-count, H-count, ancilla count, approximation precision, and classical compilation time are distinct resources. Do not infer a universal exact Clifford+T finite gate set from its approximate universality, or infer a multi-qubit exact ring characterization from KMM's stated conjecture.

## QC14: uniform families, promise model, acceptance, BQP, amplification

Use root `def-promise-problem` directly: a promise problem is a disjoint pair of YES and NO subsets, and off-promise answers are unconstrained. No BQP-vs-BPP separation is claimed.

| Proposed ID | Contract and proof route | Dependencies / obligations |
|---|---|---|
| `def-qc-uniform-circuit-family` | A family has (C_n) with n classical-basis input wires; its full self-delimiting binary gate-list description is emitted by one fixed deterministic Turing machine on input (1^n) in time polynomial in n. The exact finite gate labels are H,T,T†,CNOT; every wire index is binary; output-register and classical-postprocessing descriptors are included. The full description length and gate count are therefore polynomial. | Root effective encoding/time; QC09 elementary circuit resources. This is full-list polynomial-time uniformity, not Boolean logspace uniformity and not P/poly. Do not claim equivalence to indexed-gate uniformity without a conversion proof. |
| `def-qc-promise-computation-model` | Consume a root promise pair ((Y,N)). Input x is represented by the computational-basis state \(|x\rangle\), with a(n) additional \(|0\rangle\) ancillas. A fixed finite gate list acts unitarily, followed by measurement of an explicitly named output register in the computational basis and a deterministic polynomial-time acceptance predicate on x and that output. No intermediate measurements are assumed in the base class model. | Root `def-promise-problem`; QC02 basis order; QC09 circuit semantics and clean ancillas. This definition is mathematical circuit semantics, not an empirical postulate. |
| `def-qc-quantum-acceptance-probability` | For \(\psi_x=U_C|x,0^{a(n)}\rangle\) and accepting output strings \(A_{n,x}\), define \(p_C(x)=\sum_{z\in A_{n,x}}|\langle z|\psi_x\rangle_D|^2\). By the root/Dirac conversion, \(\langle z|\psi\rangle_D=\langle\psi,z\rangle_r\). Prove nonnegativity and sum one by the orthonormal basis identity and unitarity; (p_C(x)\in[0,1]). | Root finite-dimensional inner-product/ONB/unitary suppliers. No Born postulate dependency. |
| `lem-qc-acceptance-probability-phase-invariance` | Replacing the entire unconditional U_C by \(e^{i\phi}U_C\) leaves each squared output amplitude and p_C unchanged. If a target is inside a controlled operation, consume `lem-qc-global-phase-under-control`; the same substitution is not phase-invariant there. | Acceptance definition; QC11 controlled phase lemma. |
| `def-qc-bqp-promise-class` | A promise pair is in BQP if some uniformly generated polynomial-size family has \(p_C(x)\ge2/3\) for x∈Y and \(p_C(x)\le1/3\) for x∈N. Off-promise behavior is unrestricted. The fixed gate matrices lie in \(\mathbb Q(\zeta_8)=\mathbb Q(i,\sqrt2)\), enabling later path-amplitude simulations. | Root promise definition; uniform-family and acceptance definitions. No classical separation claim. |
| `def-qc-circuit-cost-model` | Refine QC09's vector with full-description length, deterministic family-generator time, gate count, depth, width, clean/dirty ancillas, classical postprocessing time/space, query count when a query gate is explicitly part of the model, and target precision/bit cost. Keep oracle query cost separate from gate/bit cost. | QC09 `def-qc-elementary-circuit-resources`; root binary encoding/Turing model. This later item must not be a dependency of QC10–QC13. |
| `lem-qc-uniform-family-size-bound` | A generator running in p(n) steps outputs at most p(n) symbols; with fixed finite arity and labels, the described circuit has at most p(n) gates, at most p(n) wires, and polynomial description length. Full-list generation implies an indexed-gate query procedure by rerunning and scanning the output, but indexed-to-list conversion requires an explicit bounded gate-count enumeration/time proof. | Uniform-family definition; standard deterministic time accounting. Do not state representation equivalence without the conversion. |
| `alg-qc-bounded-error-amplification` | Input a family with YES acceptance ≥a(n), NO acceptance ≤b(n), a,b rational polynomial-time computable and gap \(\gamma(n)=a(n)-b(n)\ge1/p(n)\); target \(0<\delta(n)\le1/2\). Construct r independent parallel copies with \(r=\lceil2\gamma^{-2}\ln(1/\delta)\rceil\) and accept iff the observed output frequency is at least \(\tau=(a+b)/2\). The postprocessing is a specified polynomial-time majority/threshold procedure. Include r-copy clean ancillas and output-bit construction; r is polynomial whenever \(\log(1/\delta)\) and \(1/\gamma\) are polynomially bounded. | Uniform circuit family; finite product-register semantics; Bernoulli tail supplier. The output predicate is part of the family description/cost. |
| `thm-qc-bounded-error-amplification-correct` | The r output indicators are independent Bernoulli variables because the r pre-measurement states are a tensor product on disjoint registers. Hoeffding/Chernoff gives either error ≤ \(\exp(-r\gamma^2/2)\le\delta\). For standard BQP \(a=2/3,b=1/3\), this is \(r\ge18\ln(1/\delta)\) runs with ordinary majority threshold 1/2. The generator emits r copies in polynomial time and the amplified family retains full-list uniformity. | Product-state amplitude factorization, finite probability, root independent-Bernoulli tail bound. Provide the output-size/gate/width costs explicitly. |
| `thm-qc-bqp-error-robustness` | Inverse-polynomial gap and any polynomially small target error leave the class unchanged: amplify to error δ=2^{-q(n)} for any polynomial q, using polynomial r and full-list uniformity. For finite exceptional lengths, hardcode the finite circuits. | Prior amplification correctness; complexity of the uniform generator. |

A standard one-output-qubit model can be recovered by computing the polynomial-time output predicate reversibly using QC10's reversible arithmetic/clean-ancilla interface and measuring one output qubit. If the class definition allows a final output-string predicate, its cost and time must be counted. The fixed H/T/CNOT alphabet is intentionally algebraic and exact; arbitrary continuously parameterized gates are not part of the BQP encoding.

## QC23: optimization, resource tradeoffs, and lower bounds

Use the QC14 cost model only as a later consumer. Every comparison states its gate set, ancilla convention, exact/approximate equality, and objective. An exact synthesis upper bound is not a globally optimal optimizer, and a lower bound for almost all matrices is not a per-instance claim.

| Proposed ID | Contract and proof route | Dependencies / obligations |
|---|---|---|
| `def-qc-circuit-optimization-task` | Input a finite circuit over a fixed exact gate alphabet, a declared equality notion (matrix exact, or whole-circuit global-phase equivalence), ancilla policy, and a cost coordinate (count, depth, T-count, width). Output an equivalent circuit with no larger cost; “globally optimal” means no equivalent circuit in the declared model has smaller cost. | QC09 circuit semantics and QC14 cost refinement. The optimization objective must be one scalar/vector order at a time. |
| `alg-qc-basic-clifford-t-rewrite` | On H,T,T†,CNOT words, repeatedly apply a fixed finite rule list such as H²→I, T⁸→I, TT†→I, and CNOT²→I when adjacent gates act on the same wires. Scan a deterministic left-to-right first match; terminate when no rule applies. | Fixed labels and exact matrices. Each rewrite decreases a nonnegative gate count, so at most the input gate count many rewrites occur. |
| `thm-qc-basic-rewrite-correct-and-terminating` | Each registered rewrite preserves the exact matrix; the procedure terminates and returns a local normal form relative only to the declared finite rewrite set. It is not claimed globally minimal. | Prior algorithm and exact gate identities. |
| `lem-qc-circuit-resource-composition` | Sequential composition adds gate counts/depths and takes max width after wire alignment; parallel tensor composition adds counts/widths and takes max depth; clean ancillas are counted only when initialized and returned to zero by the full composed block. | QC09 elementary resources and matrix/circuit composition. |
| `thm-qc-qsd-cnot-upper-bound` | Reuse QC11 exact QSD: no-ancilla n-qubit U needs at most \( (23/48)4^n-(3/2)2^n+4/3\) CNOTs. Report one-qubit gates separately; a CNOT count alone is not total classical compilation time. | QC11 exact synthesis. |
| `thm-qc-generic-circuit-count-lower-bound` | For a fixed finite gate alphabet with maximum arity three, the number of descriptions with ≤C gates is at most \( (k+1)^C(3C)^{3C}=C^{O(C)}\). Each circuit can compute at most one Boolean function with success ≥2/3 on every input. Since there are \(2^{2^n}\) Boolean functions, at least 99% require \(\Omega(2^n/n)\) gates. This is the de Wolf counting proof, under the stated model. | Fixed finite arity labels and circuit acceptance; elementary counting. The conclusion is “almost all functions,” not every function or a BQP/classical separation. |
| `thm-qc-nearest-neighbor-cnot-overhead` | Shende et al. decompose their multiplexed rotations so nearest-neighbor CNOT routing requires at most nine times the CNOT count of that construction. This is an architecture-specific gate-count overhead, not a depth bound for every layout. | QC11 QSD/multiplexors; linear chain architecture explicitly stated. |
| `thm-qc-clean-ancilla-multicontrolled-tradeoff` | Reuse Barenco's exact \(\Theta(m^2)\)-without-work-bit versus \(\Theta(m)\)-with-one-clean-bit constructions; list total qubits and the return-to-zero condition in both cases. | QC11 tradeoff proof; QC09 clean-ancilla semantics. |
| `def-qc-bqtisp-model` | If the time–space result is included, define the separate VMW random-access quantum Turing model: read-only input uncharged, classical and quantum work tapes, maximum branch time/space, intermediate computational-basis measurements, fixed computable amplitudes, and exact random-access convention. This is not circuit depth. | A self-contained definition and finite transition/circuit encoding are required before the theorem can be consumed. |
| `thm-qc-bqtisp-to-ptisp-simulation` | Van Melkebeek–Watson Lemma 2: for sufficiently constructible (t,s\ge\log n), \(\mathrm{BQTISP}(t,s)\subseteq\mathrm{PTISP}(t\,\mathrm{polylog}(t),s+\mathrm{polylog}(t))\), for their stated model. Their route reduces gates using SK, bounds acceptance error under intermediate measurements, then encodes path amplitudes into a #P difference. | Full local model, their finite-precision argument, #P/GapP and space simulation suppliers. Do not transfer this statement to the uniform circuit model without a model-conversion theorem. |
| `thm-qc-counting-hierarchy-time-space-lower-bound` | The paper's MajSAT/MajMajSAT consequence additionally uses Allender et al.'s unbounded-error counting-hierarchy time–space lower bound as Lemma 1. State VMW's exact alternatives only after that independent supplier is retrieved, read, and proved. That source is not in this cache and remains unresolved. | External Allender et al. paper not retrieved/read. No downstream lower-bound claim is licensed until this is discharged. |

The generic exact no-ancilla CNOT lower bound is supplied once by QC11 `thm-qc-generic-unitary-cnot-lower-bound`; QC23 reuses that result. Its parameter-count proof remains unresolved until QC11’s helper lemma is discharged.
Optimization scope is deliberately bounded: the fixed rewrite algorithm above guarantees local improvement and termination, not global minimality. Shende's QSD supplies an exact synthesis upper bound; Ross–Selinger supplies an instance-optimal T-count only for the specified ancilla-free single-qubit Rz problem and under its factoring-oracle or named-hypothesis conditions. Neither source proves a universal optimal optimizer.

The two time–space examples that are presently source-supported are (i) Barenco's exact multi-control ancilla/gate-count tradeoff and (ii) the VMW simulation theorem under its explicit quantum-Turing model. A general relationship between quantum circuit depth and space is not established; Watrous explicitly says the reverse simulation direction is not known. The VMW MajSAT bound has an unread external proof supplier and is therefore a research lead, not a completed logical dependency.

## Source locators and limitations

- de Wolf, arXiv:1907.09415v6: complete PDF pp. 1–239 read. Gate universality/SK overview: Ch. 2 §2.2, PDF p. 28 onward (printed p. 16); global-phase discussion: Ch. 1, PDF p. 16; circuit-function gate lower bound: Ch. 13 §13.1, PDF p. 121 (printed p. 109); BQP/computational complexity overview: Ch. 13, PDF pp. 121–126 (printed pp. 109–113). It is an overview and exercise source, not a proof of SK or numerical synthesis.
- Barenco et al., arXiv:quant-ph/9503016v1: complete PDF pp. 1–31 read. Lemma 4.1 Euler factorization, PDF p. 8; controlled-U and multi-control constructions, §§5–7 (PDF pp. 10–25); arbitrary unitary construction and phase caution, §8 (PDF pp. 26–31). The dimension lower bound in §8 is presented as a conjectural count, so use Shende's later reported theorem and discharge its proof locally.
- Dawson–Nielsen, arXiv:quant-ph/0505030v2: complete PDF pp. 1–15 read. Finite inverse-closed dense SU(d) assumptions: §2, PDF pp. 2–4; single-qubit commutator recurrence: §§3–4, PDF pp. 5–10; generalization/history: §§5–6. The authors explicitly omit finite-precision arithmetic cost.
- Kliuchnikov–Maslov–Mosca, arXiv:1206.5236v2: complete PDF pp. 1–23 read. Exact single-qubit ring theorem: §2, PDF p. 2; ring normal form and synthesis algorithm: §§3–4 (PDF pp. 4–15); denominator/number-theory proof: Appendix A (PDF pp. 16–21); H/T optimality proof: Appendix B (PDF pp. 22–23). Multi-qubit ring characterization is explicitly a conjecture.
- Ross–Selinger, arXiv:1403.2975v1: complete PDF pp. 1–40 read. On-the-nose Rz problem: §7, PDF pp. 23–27; factoring optimality and Hypothesis 8.3 near-optimality: §8, PDF pp. 27–31; up-to-phase variant: §9, PDF pp. 31–33; technical grid/Diophantine proofs: appendices. Real-input encodings need to be stated for a Turing complexity theorem.
- Shende–Bullock–Markov, arXiv:quant-ph/0406176v5: complete PDF pp. 1–19 read. Euler/multiplexor/state synthesis and QSD: §§2–6, PDF pp. 7–16; CNOT counts and architectural overhead: §6 and Appendix A, PDF pp. 16–18. Their generic CNOT lower bound is cited, not fully proved in this paper.
- Watrous, arXiv:0804.3401v1: complete PDF pp. 1–44 read. Promise problems: §I, PDF pp. 3–5; full-description polynomial-time circuit families, BQP and error reduction: §IV.1–IV.2, PDF pp. 12–14; depth/space limitations: §VII.3, PDF pp. 35–36. Its error-reduction proposition is stated with a short proof sketch; the explicit local Chernoff proof above is required.
- van Melkebeek–Watson, arXiv:0712.2545v1: complete PDF pp. 1–25 read. Time/space model: §2.3, PDF pp. 8–11; SK/finite-universal-gate and BQTISP-to-PTISP simulation: §3, PDF pp. 11–19; intermediate-measurement proof and gate decomposition: Appendices A–B, PDF pp. 21–25. Their final counting-hierarchy lower-bound theorem depends on an Allender et al. paper not read in this assignment.

The full retrieval and reading evidence, exact PDF/extracted-text SHA256 values, byte lengths, and response-header evidence are in the source ledger. The arXiv response header for de Wolf carries an ETag string labeled `sha256:9be7…`, which does not equal the locally computed PDF SHA256 `b797f416…`; the ledger uses the local body hash and does not treat that ETag as its checksum.

## Checker-shaped proposed item rows

The following JSON array repeats the exact proposed IDs and contracts above in the requested inventory fields. It records proposal data only; unresolved proof obligations remain unresolved.

```json
[
  {
    "id": "def-qc-two-level-unitary",
    "kind": "definition",
    "page": "continuous-gate-universality-and-exact-synthesis",
    "deps": [
      "def-qc-register-and-computational-basis",
      "def-qc-ordered-bitstring-encoding",
      "def-qc-tensor-register-and-permutation",
      "def-real-and-complex-inner-product-space",
      "def-adjoint-of-a-linear-map-between-inner-product-spaces",
      "def-linear-isometry-and-orthogonal-or-unitary-operator",
      "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases"
    ],
    "justified_by": [],
    "statement_or_definition": "For two distinct computational-basis labels (x,y) and (V\\in U(2)), the two-level unitary acts as (V) on \\(\\operatorname{span}\\{|x\\rangle,|y\\rangle\\}\\) and as identity on the orthogonal complement. Its definition is an exact matrix, including scalar phase.",
    "proof_obligations": [
      "QC02 ordered computational basis; root finite-dimensional complex inner-product and adjoint items."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9503016",
        "locator": "Euler and exact controlled-unitary synthesis, Lemma 4.1 and §§5–8, PDF pp. 8–31"
      }
    ],
    "unresolved_obligations": [],
    "title": "Two Level Unitary"
  },
  {
    "id": "thm-qc-one-qubit-euler-decomposition",
    "kind": "theorem",
    "page": "continuous-gate-universality-and-exact-synthesis",
    "deps": [
      "def-qc-pauli-matrices",
      "def-qc-one-qubit-gate-alphabet-and-rotations",
      "def-real-and-complex-inner-product-space",
      "def-adjoint-of-a-linear-map-between-inner-product-spaces",
      "def-linear-isometry-and-orthogonal-or-unitary-operator",
      "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases"
    ],
    "justified_by": [],
    "statement_or_definition": "For every (U\\in U(2)), (U=e^{i\\delta}R_z(\\alpha)R_y(\\theta)R_z(\\beta)) for real parameters; if \\(\\det U=1\\), the scalar is absorbed and the (SU(2)) form remains. Prove by writing the two orthonormal columns of U, parameterizing the first unit vector by two phases and an angle, and using orthogonality to fix the second column. Barenco Lemma 4.1 supplies this proof.",
    "proof_obligations": [
      "QC07 rotation matrices; root complex conjugation, norm, matrix multiplication. Keep \\(e^{i\\delta}I\\) explicit."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9503016",
        "locator": "Euler and exact controlled-unitary synthesis, Lemma 4.1 and §§5–8, PDF pp. 8–31"
      }
    ],
    "unresolved_obligations": [],
    "title": "One Qubit Euler Decomposition"
  },
  {
    "id": "def-qc-global-phase-equivalence",
    "kind": "definition",
    "page": "continuous-gate-universality-and-exact-synthesis",
    "deps": [
      "def-qc-circuit-denotational-semantics"
    ],
    "justified_by": [],
    "statement_or_definition": "Define matrix equality up to a scalar \\(\\lambda U\\), \\( |\\lambda|=1\\), separately from ordinary matrix equality.",
    "proof_obligations": [
      "QC11 matrix semantics."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Global-phase discussion, Ch. 1, PDF p. 16"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/9503016",
        "locator": "Phase/control discussion, §8, PDF pp. 26–31"
      }
    ],
    "unresolved_obligations": [],
    "title": "Global Phase Equivalence"
  },
  {
    "id": "lem-qc-global-phase-under-control",
    "kind": "lemma",
    "page": "continuous-gate-universality-and-exact-synthesis",
    "deps": [
      "def-qc-controlled-unitary-access",
      "thm-qc-controlled-global-phase-is-relative-phase"
    ],
    "justified_by": [],
    "statement_or_definition": "For \\(C(U)=|0\\rangle\\langle0|\\otimes I+|1\\rangle\\langle1|\\otimes U\\), \\(C(\\lambda U)=(P_\\lambda\\otimes I)C(U)\\), where \\(P_\\lambda=\\operatorname{diag}(1,\\lambda)\\). Thus an uncontrolled whole-circuit scalar does not change a measurement law, but replacing a target by a phase-congruent matrix inside a control changes a relative phase unless the control phase is restored. Prove by the two control-block matrices.",
    "proof_obligations": [
      "QC08 controlled-gate definition; QC11 matrix phase convention."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Global-phase discussion, Ch. 1, PDF p. 16"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/9503016",
        "locator": "Phase/control discussion, §8, PDF pp. 26–31"
      }
    ],
    "unresolved_obligations": [],
    "title": "Global Phase Under Control"
  },
  {
    "id": "alg-qc-two-level-unitary-elimination",
    "kind": "algorithm",
    "page": "continuous-gate-universality-and-exact-synthesis",
    "deps": [
      "def-qc-two-level-unitary",
      "def-qc-register-and-computational-basis",
      "def-qc-ordered-bitstring-encoding",
      "def-qc-tensor-register-and-permutation",
      "def-qc-elementary-circuit-resources",
      "def-operator-norm-on-a-finite-dimensional-inner-product-space",
      "cor-operator-norm-submultiplicative-and-t-star-t-identity"
    ],
    "justified_by": [],
    "statement_or_definition": "Input: exact (N\\times N) unitary U and a fixed order of rows/columns. Output: a word of two-level Givens factors and a diagonal phase matrix. At each column, if both pivot entries vanish skip; otherwise form a normalized complex Givens rotation that zeros the lower entry. After at most (N(N-1)/2) eliminations the matrix is upper triangular; check the diagonal phases; reverse the operations.",
    "proof_obligations": [
      "QC02 basis; `def-qc-two-level-unitary`; QC09 exact circuit resource. Exact algebraic/real input representation must be specified if a Turing algorithm is claimed."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9503016",
        "locator": "Euler and exact controlled-unitary synthesis, Lemma 4.1 and §§5–8, PDF pp. 8–31"
      }
    ],
    "unresolved_obligations": [
      "Exact algebraic/real input encoding and branch-safe implementation are required before asserting a Turing running-time bound."
    ],
    "title": "Two Level Unitary Elimination"
  },
  {
    "id": "thm-qc-two-level-unitary-elimination-correct",
    "kind": "theorem",
    "page": "continuous-gate-universality-and-exact-synthesis",
    "deps": [
      "alg-qc-two-level-unitary-elimination",
      "def-real-and-complex-inner-product-space",
      "def-adjoint-of-a-linear-map-between-inner-product-spaces",
      "def-linear-isometry-and-orthogonal-or-unitary-operator",
      "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases"
    ],
    "justified_by": [],
    "statement_or_definition": "The preceding algorithm terminates after at most (N(N-1)/2) Givens rotations plus at most (N) one-coordinate phases and its matrix product is exactly U. Proof: maintain the left-product invariant, show each Givens step zeros one entry without changing prior columns, then use orthogonality to show a triangular unitary is diagonal.",
    "proof_obligations": [
      "Previous algorithm plus finite matrix algebra."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9503016",
        "locator": "Euler and exact controlled-unitary synthesis, Lemma 4.1 and §§5–8, PDF pp. 8–31"
      }
    ],
    "unresolved_obligations": [],
    "title": "Two Level Unitary Elimination Correct"
  },
  {
    "id": "alg-qc-two-level-gate-to-elementary-gates",
    "kind": "algorithm",
    "page": "continuous-gate-universality-and-exact-synthesis",
    "deps": [
      "def-qc-two-level-unitary",
      "def-qc-controlled-unitary-access",
      "def-qc-elementary-circuit-resources"
    ],
    "justified_by": [],
    "statement_or_definition": "Move the two selected basis states next to each other along a Gray path using reversible bit flips, apply a multiply-controlled one-qubit (V), and undo the Gray path. Resolve negative controls by X conjugations. Specify whether a clean ancilla is present and returned.",
    "proof_obligations": [
      "QC08 controls; QC09 resources; two-level definition."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9503016",
        "locator": "Euler and exact controlled-unitary synthesis, Lemma 4.1 and §§5–8, PDF pp. 8–31"
      }
    ],
    "unresolved_obligations": [],
    "title": "Two Level Gate To Elementary Gates"
  },
  {
    "id": "thm-qc-two-level-gate-synthesis-correct",
    "kind": "theorem",
    "page": "continuous-gate-universality-and-exact-synthesis",
    "deps": [
      "alg-qc-two-level-gate-to-elementary-gates"
    ],
    "justified_by": [],
    "statement_or_definition": "The Gray-path construction exactly realizes the two-level matrix, with no unintended action on other basis states. State its gate/work-bit count for each chosen controlled-U implementation.",
    "proof_obligations": [
      "Previous algorithm; Barenco §§5–7 give constructions. A generic matrix decomposition is not a free controlled-U instruction."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9503016",
        "locator": "Euler and exact controlled-unitary synthesis, Lemma 4.1 and §§5–8, PDF pp. 8–31"
      }
    ],
    "unresolved_obligations": [],
    "title": "Two Level Gate Synthesis Correct"
  },
  {
    "id": "thm-qc-exact-arbitrary-unitary-qsd-upper-bound",
    "kind": "theorem",
    "page": "continuous-gate-universality-and-exact-synthesis",
    "deps": [
      "def-qc-pauli-matrices",
      "def-qc-one-qubit-gate-alphabet-and-rotations",
      "def-qc-circuit-syntax-and-register-order",
      "def-qc-circuit-denotational-semantics",
      "def-qc-elementary-circuit-resources"
    ],
    "justified_by": [],
    "statement_or_definition": "Shende–Bullock–Markov's exact Quantum Shannon Decomposition gives a no-ancilla (n)-qubit unitary circuit with at most \\( (23/48)4^n-(3/2)2^n+4/3\\) CNOTs, plus one-qubit gates. Their construction uses cosine-sine decomposition, multiplexors, and cancellations. This is a gate-count upper bound, not a bound on numerical decomposition time.",
    "proof_obligations": [
      "QC09 resource model; QC07 one-qubit gates; QC11 exact semantics. Require an explicit branch-safe angle-computation algorithm before asserting a bit-time bound."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0406176",
        "locator": "QSD and CNOT bounds, §§2–6 and Appendix A, PDF pp. 7–18"
      }
    ],
    "unresolved_obligations": [],
    "title": "Exact Arbitrary Unitary QSD Upper Bound"
  },
  {
    "id": "lem-qc-generic-cnot-parameter-count",
    "kind": "lemma",
    "page": "continuous-gate-universality-and-exact-synthesis",
    "deps": [
      "def-qc-elementary-circuit-resources",
      "def-qc-circuit-denotational-semantics",
      "def-classical-complex-matrix-lie-algebras"
    ],
    "justified_by": [],
    "statement_or_definition": "For a circuit skeleton on n qubits with m CNOTs and arbitrary one-qubit gates, prove that its parameterized image has real dimension at most \\(3n+4m+1\\): the initial local layer contributes at most \\(3n\\), each CNOT contributes at most four new parameters by the local stabilizer/coset calculation, and one scalar accounts for global phase. There are finitely many skeletons for fixed n,m, so if \\(3n+4m+1<4^n=\\dim U(2^n)\\), their smooth images have measure zero. This yields the generic lower bound in the following theorem.",
    "proof_obligations": [
      "QC09 exact circuit resources/semantics; finite-dimensional unitary parameterization and smooth-image measure-zero argument. The cited Shende paper reports the bound but does not prove these steps."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0406176",
        "locator": "Generic no-ancilla CNOT lower bound, §6 and Appendix A, PDF pp. 16–18; proof cited, not supplied."
      }
    ],
    "title": "Generic CNOT Parameter Count",
    "unresolved_obligations": [
      "Prove the 3n+4m+1 parameter bound, show each CNOT adds at most four parameters by a local stabilizer/coset calculation, and prove the lower-dimensional smooth image has measure zero."
    ]
  },
  {
    "id": "thm-qc-generic-unitary-cnot-lower-bound",
    "kind": "theorem",
    "page": "continuous-gate-universality-and-exact-synthesis",
    "deps": [
      "def-qc-elementary-circuit-resources",
      "lem-qc-generic-cnot-parameter-count"
    ],
    "justified_by": [],
    "statement_or_definition": "For almost every n-qubit unitary, at least \\(\\left\\lceil(4^n-3n-1)/4\\right\\rceil\\) CNOTs are needed in an exact no-ancilla circuit with arbitrary one-qubit gates. The statement is generic and follows from the preceding parameter-count lemma.",
    "proof_obligations": [
      "def-qc-elementary-circuit-resources; lem-qc-generic-cnot-parameter-count. Do not call this a per-instance lower bound. The cited source does not discharge the helper lemma proof."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0406176",
        "locator": "QSD and CNOT bounds, §§2–6 and Appendix A, PDF pp. 7–18"
      }
    ],
    "unresolved_obligations": [
      "The helper parameter-count proof remains open: prove the 3n+4m+1 dimension bound, the at-most-four increment per CNOT, and measure-zero for the lower-dimensional smooth images."
    ],
    "title": "Generic Unitary CNOT Lower Bound"
  },
  {
    "id": "thm-qc-multicontrolled-ancilla-resource-tradeoff",
    "kind": "theorem",
    "page": "continuous-gate-universality-and-exact-synthesis",
    "deps": [
      "def-qc-controlled-unitary-access",
      "def-qc-elementary-circuit-resources",
      "def-qc-clean-and-dirty-ancillas"
    ],
    "justified_by": [],
    "statement_or_definition": "Barenco's exact constructions give \\(\\Theta(m^2)\\) basic two-qubit operations for a general m-control (U) without extra workspace and \\(\\Theta(m)\\) for the same m controls when one clean bit is initialized to 0 and returned to 0. The source's corollaries are indexed as \\(\\Lambda^{n-1}(U)\\) with no extra bit and \\(\\Lambda^{n-2}(U)\\) on n wires with a final wire fixed at 0; align m before comparing.",
    "proof_obligations": [
      "QC08 control semantics; QC09 clean-ancilla resource interface. Prove exact return of the clean bit; do not mix dirty and clean workspace."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9503016",
        "locator": "Euler and exact controlled-unitary synthesis, Lemma 4.1 and §§5–8, PDF pp. 8–31"
      }
    ],
    "unresolved_obligations": [],
    "title": "Multicontrolled Ancilla Resource Tradeoff"
  },
  {
    "id": "def-qc-effective-unitary-matrix-input",
    "kind": "definition",
    "page": "approximate-universality-and-solovay-kitaev",
    "deps": [
      "def-effective-binary-encoding-and-decoder"
    ],
    "justified_by": [],
    "statement_or_definition": "A fixed gate set is a finite list of exact matrix labels. A target (U) is supplied by a Cauchy name that, on input (1^b), returns rational real/imaginary entries within (2^{-b}), with a stated time bound. Precision \\(\\varepsilon\\in(0,1/2)\\) is a positive rational in binary.",
    "proof_obligations": [
      "Root effective binary encoding and deterministic time interface. Do not accept an arbitrary real as an algorithmic input."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0505030",
        "locator": "Finite inverse-closed dense-set assumptions and SK proof, §§2–4, PDF pp. 2–10"
      }
    ],
    "unresolved_obligations": [],
    "title": "Effective Unitary Matrix Input"
  },
  {
    "id": "def-qc-inverse-closed-dense-su2-gate-set",
    "kind": "definition",
    "page": "approximate-universality-and-solovay-kitaev",
    "deps": [
      "def-qc-pauli-matrices",
      "def-qc-one-qubit-gate-alphabet-and-rotations",
      "def-operator-norm-on-a-finite-dimensional-inner-product-space",
      "cor-operator-norm-submultiplicative-and-t-star-t-identity"
    ],
    "justified_by": [],
    "statement_or_definition": "(G\\subset SU(2)) is finite, includes the inverse of every generator, has exact finite labels, and its generated subgroup is dense in operator norm. If a base-net certificate is needed by the compiler, include the finite list and its certified covering radius as part of this fixed gate-set package.",
    "proof_obligations": [
      "QC11 matrix norm; root complex/matrix algebra. Density alone does not calculate a net."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0505030",
        "locator": "Finite inverse-closed dense-set assumptions and SK proof, §§2–4, PDF pp. 2–10"
      }
    ],
    "unresolved_obligations": [
      "An effective compiler needs a certified finite base net and fixed word-length bound; density alone does not provide them."
    ],
    "title": "Inverse Closed Dense SU(2) Gate Set"
  },
  {
    "id": "lem-qc-clifford-t-projective-density",
    "kind": "lemma",
    "page": "approximate-universality-and-solovay-kitaev",
    "deps": [
      "def-qc-inverse-closed-dense-su2-gate-set",
      "def-qc-pauli-matrices",
      "def-qc-one-qubit-gate-alphabet-and-rotations",
      "def-number-field",
      "def-integral-element-and-algebraic-integer",
      "def-ring-of-integers-of-a-number-field",
      "thm-cyclotomic-ring-of-integers",
      "cor-algebraic-integer-minimal-polynomial-criterion",
      "cor-rational-algebraic-integers-are-integers",
      "thm-kronecker-root-of-unity-criterion"
    ],
    "justified_by": [],
    "statement_or_definition": "Show the projective Clifford+T one-qubit subgroup is dense: normalize \\(H,T\\) into \\(h=iH\\in SU(2)\\) and \\(t=e^{-i\\pi/8}T\\in SU(2)\\), take \\(V=ht\\), and compute \\(\\operatorname{tr}V=\\sqrt2\\sin(\\pi/8)=x\\). The minimal polynomial of x is \\(2X^4-4X^2+1\\), not monic; prove its degree is four using the norm of \\(x^2=1-\\sqrt2/2\\). Thus x is not an algebraic integer. If an eigenangle of V were rational in units of \\(\\pi\\), the trace would be a sum of roots of unity and hence an algebraic integer, contradiction. Powers of V are dense on one SU(2) torus; conjugation by t gives a nonparallel axis; an explicit two-axis Euler/coordinate lemma yields all SU(2). The normalized matrices are SU(2) lifts of raw H/T labels; translating the resulting word back to raw labels preserves only the projective class unless its scalar is tracked.",
    "proof_obligations": [
      "Root algebraic-integer minimal-polynomial criterion, ring-of-integers/cyclotomic field and root-of-unity facts; local irrational-rotation and two-axis Euler lemmas. The gate normalization phases are tracked, not deleted under a control."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Universality overview, Ch. 2 §2.2, PDF p. 28 onward"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0505030",
        "locator": "Dense-set assumptions, §2, PDF pp. 2–4"
      }
    ],
    "unresolved_obligations": [
      "Prove the local irrational-rotation and two-axis closure/Euler lemmas."
    ],
    "title": "Clifford T Projective Density"
  },
  {
    "id": "lem-qc-compact-su2-base-net",
    "kind": "lemma",
    "page": "approximate-universality-and-solovay-kitaev",
    "deps": [
      "def-qc-inverse-closed-dense-su2-gate-set",
      "def-operator-norm-on-a-finite-dimensional-inner-product-space",
      "cor-operator-norm-submultiplicative-and-t-star-t-identity",
      "lem-finite-dimensional-unit-spheres-are-sequentially-compact"
    ],
    "justified_by": [],
    "statement_or_definition": "Compactness of the finite-dimensional unitary group and density imply the existence of a finite (\\varepsilon_0)-net with gate words of maximum length (L_0), where \\(\\varepsilon_0,L_0\\) are constants for fixed G. Prove compactness as a closed bounded subset of a finite-dimensional matrix space and extract a finite subcover.",
    "proof_obligations": [
      "Root finite-dimensional normed-space compactness and operator norm. The numerical net/certificate must be given or computed; density alone does not select a finite search cutoff."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0505030",
        "locator": "Finite inverse-closed dense-set assumptions and SK proof, §§2–4, PDF pp. 2–10"
      }
    ],
    "unresolved_obligations": [
      "Supply or compute an independently checkable finite base-net certificate and covering radius."
    ],
    "title": "Compact SU(2) Base Net"
  },
  {
    "id": "lem-qc-su2-near-identity-logarithm",
    "kind": "lemma",
    "page": "approximate-universality-and-solovay-kitaev",
    "deps": [
      "def-classical-complex-matrix-lie-algebras",
      "thm-complex-exponential-addition-and-real-extension",
      "def-operator-norm-on-a-finite-dimensional-inner-product-space",
      "cor-operator-norm-submultiplicative-and-t-star-t-identity"
    ],
    "justified_by": [],
    "statement_or_definition": "For \\(\\|D-I\\|<\\rho<1\\), the convergent power series \\(\\log D=\\sum_{j\\ge1}(-1)^{j+1}(D-I)^j/j\\) supplies a traceless skew-Hermitian logarithm when (D\\in SU(2)); bound its norm by an explicit function of \\(\\rho\\).",
    "proof_obligations": [
      "Matrix series convergence, operator-norm submultiplicativity, determinant/trace calculation. Supply a local quantitative proof."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0505030",
        "locator": "Finite inverse-closed dense-set assumptions and SK proof, §§2–4, PDF pp. 2–10"
      }
    ],
    "unresolved_obligations": [
      "Give an explicit norm bound and prove the logarithm is traceless skew-Hermitian on the stated SU(2) neighborhood."
    ],
    "title": "SU(2) Near Identity Logarithm"
  },
  {
    "id": "lem-qc-su2-balanced-commutator",
    "kind": "lemma",
    "page": "approximate-universality-and-solovay-kitaev",
    "deps": [
      "lem-qc-su2-near-identity-logarithm",
      "def-qc-pauli-matrices",
      "def-qc-one-qubit-gate-alphabet-and-rotations",
      "def-operator-norm-on-a-finite-dimensional-inner-product-space",
      "cor-operator-norm-submultiplicative-and-t-star-t-identity"
    ],
    "justified_by": [],
    "statement_or_definition": "For (D\\in SU(2)) with \\(\\|D-I\\|\\le\\eta\\), construct (V,W\\in SU(2)) with \\(\\|V-I\\|,\\|W-I\\|\\le c_g\\sqrt\\eta\\) and \\(\\|D-VWV^\\dagger W^\\dagger\\|\\le c_1\\eta^{3/2}\\). Use Pauli coordinates: for (X=i\\vec x\\cdot\\vec\\sigma\\), choose orthogonal vectors \\(\\vec a,\\vec b\\) with \\(\\|\\vec a\\|,\\|\\vec b\\|=O(\\sqrt{\\|X\\|})\\) and \\([i\\vec a\\cdot\\vec\\sigma,i\\vec b\\cdot\\vec\\sigma]=X\\); compare the group commutator exponential series through degree two and bound the cubic tail. State explicit constants and a small-radius threshold in the authored lemma.",
    "proof_obligations": [
      "Pauli algebra and local matrix exponential estimates. Dawson–Nielsen prove the route but describe constants approximately; their text is not a substitute for the explicit local bound."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0505030",
        "locator": "Finite inverse-closed dense-set assumptions and SK proof, §§2–4, PDF pp. 2–10"
      }
    ],
    "unresolved_obligations": [
      "State explicit constants and a small-radius threshold, and bound the cubic remainder."
    ],
    "title": "SU(2) Balanced Commutator"
  },
  {
    "id": "lem-qc-commutator-error-cancellation",
    "kind": "lemma",
    "page": "approximate-universality-and-solovay-kitaev",
    "deps": [
      "lem-qc-su2-balanced-commutator"
    ],
    "justified_by": [],
    "statement_or_definition": "If V,W are within \\(c_g\\sqrt\\eta\\) of identity and \\(\\widetilde V,\\widetilde W\\) are each within \\(\\eta\\), then the group commutator error is at most (c_2\\eta^{3/2}), with an explicit (c_2) for the same small-radius regime. This is the cancellation step that makes the recursion improve precision.",
    "proof_obligations": [
      "Previous commutator lemma; prove by expanding products and grouping first-order errors, not by a generic Lipschitz bound (which would only be O(η))."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0505030",
        "locator": "Finite inverse-closed dense-set assumptions and SK proof, §§2–4, PDF pp. 2–10"
      }
    ],
    "unresolved_obligations": [
      "Give an explicit constant and prove first-order cancellation for approximate commutators."
    ],
    "title": "Commutator Error Cancellation"
  },
  {
    "id": "alg-qc-solovay-kitaev-unitary-compiler",
    "kind": "algorithm",
    "page": "approximate-universality-and-solovay-kitaev",
    "deps": [
      "def-qc-effective-unitary-matrix-input",
      "def-qc-inverse-closed-dense-su2-gate-set",
      "lem-qc-compact-su2-base-net",
      "lem-qc-su2-near-identity-logarithm",
      "lem-qc-su2-balanced-commutator",
      "lem-qc-commutator-error-cancellation"
    ],
    "justified_by": [],
    "statement_or_definition": "Input: fixed G plus certified base net; target Cauchy name (U\\in SU(2)); rational \\(0<\\varepsilon<\\varepsilon_0\\). At level 0 return a base-net word; at level j compile the residual (U\\widetilde U_{j-1}^{\\dagger}), use balanced commutator decomposition, recursively compile V,W, and output \\(\\widetilde V\\widetilde W\\widetilde V^\\dagger\\widetilde W^\\dagger\\widetilde U_{j-1}\\). Choose the least j whose certified error bound is ≤ε; inverses reverse the word and use inverse labels.",
    "proof_obligations": [
      "Prior finite-net, logarithm, and commutator lemmas; QC09 output resource. Exact finite-precision implementation is a separate item/obligation."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0505030",
        "locator": "Finite inverse-closed dense-set assumptions and SK proof, §§2–4, PDF pp. 2–10"
      }
    ],
    "unresolved_obligations": [
      "The general finite-precision bit implementation is unresolved; the source uses exact/real arithmetic and a certified base net."
    ],
    "title": "Solovay Kitaev Unitary Compiler"
  },
  {
    "id": "thm-qc-solovay-kitaev-error-and-resource-bound",
    "kind": "theorem",
    "page": "approximate-universality-and-solovay-kitaev",
    "deps": [
      "alg-qc-solovay-kitaev-unitary-compiler",
      "lem-qc-commutator-error-cancellation"
    ],
    "justified_by": [],
    "statement_or_definition": "If \\(\\eta_{j+1}\\le C\\eta_j^{3/2}\\), \\(L_{j+1}\\le5L_j\\), and \\(0<\\eta_0<C^{-2}\\), then \\(\\eta_j\\le C^{-2}(C^2\\eta_0)^{(3/2)^j}\\). Taking \\(j=\\left\\lceil\\log_{3/2}\\frac{\\log(1/(C^2\\varepsilon))}{\\log(1/(C^2\\eta_0))}\\right\\rceil\\) yields explicit word length (O(\\log^{\\log_{3/2}5}(1/\\varepsilon))=O(\\log^{3.97}(1/\\varepsilon))). With a shared recursive DAG and (T_{j+1}\\le3T_j+O(1)\\), compiler arithmetic time is (O(\\log^{\\log_{3/2}3}(1/\\varepsilon))=O(\\log^{2.71}(1/\\varepsilon))); printing the expanded word costs at least its length and at most O(length). Constants depend on fixed G and the fixed net.",
    "proof_obligations": [
      "Prior lemmas and algorithm. Dawson–Nielsen explicitly leave finite-precision arithmetic uncharged; the (2.71) bound is a real/exact-arithmetic pointer model until a bit-stability theorem is supplied."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0505030",
        "locator": "Finite inverse-closed dense-set assumptions and SK proof, §§2–4, PDF pp. 2–10"
      }
    ],
    "unresolved_obligations": [],
    "title": "Solovay Kitaev Error And Resource Bound"
  },
  {
    "id": "thm-qc-fixed-arity-unitary-error-budget",
    "kind": "theorem",
    "page": "approximate-universality-and-solovay-kitaev",
    "deps": [
      "thm-qc-exact-arbitrary-unitary-qsd-upper-bound",
      "alg-qc-solovay-kitaev-unitary-compiler",
      "def-operator-norm-on-a-finite-dimensional-inner-product-space",
      "cor-operator-norm-submultiplicative-and-t-star-t-identity"
    ],
    "justified_by": [],
    "statement_or_definition": "For fixed k, factor an exact target \\(U\\in U(2^k)\\) by QC11 into \\(m(k)\\) one-qubit \\(U(2)\\) gates and \\(c(k)\\) exact CNOTs. Write each one-qubit gate as \\(e^{i\\phi_j}S_j\\), with \\(S_j\\in SU(2)\\), and compile only the \\(S_j\\) factors by SK. For the resulting fixed-width circuit C, the guaranteed metric is \\(\\min_{|\\lambda|=1}\\|U-\\lambda C\\|_{op}\\le\\varepsilon\\), with at most \\(m(k)\\) compiler calls at accuracy \\(\\varepsilon/m(k)\\); telescoping gives this whole-circuit projective bound. Its gate count is at most \\(c(k)+O(m(k)\\log^{\\log_{3/2}5}(m(k)/\\varepsilon))\\), with no ancillas. Consequently every input-state/output-event probability changes by at most \\(2\\varepsilon\\). This is a channel-level guarantee for the entire unconditional block, not operator-norm approximation to a prescribed representative. A strict representative-level bound requires an explicit phase-carrying primitive/decomposition.",
    "proof_obligations": [
      "QC11 exact factorization, one-qubit SU(2) compiler, root norm inequalities. The CSD angle algorithm's finite input representation and branch handling remain explicit."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0406176",
        "locator": "Exact QSD, §§2–6, PDF pp. 7–16"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0505030",
        "locator": "SK recurrence, §§2–4, PDF pp. 2–10"
      }
    ],
    "unresolved_obligations": [
      "Specify branch-safe finite-input CSD angle extraction before claiming a Turing-time compiler."
    ],
    "title": "Fixed Arity Unitary Error Budget"
  },
  {
    "id": "thm-qc-controlled-phase-approximation",
    "kind": "theorem",
    "page": "approximate-universality-and-solovay-kitaev",
    "deps": [
      "def-qc-controlled-phase-rotation",
      "thm-qc-fixed-arity-unitary-error-budget",
      "lem-qc-global-phase-under-control"
    ],
    "justified_by": [],
    "statement_or_definition": "Define \\(P_\\alpha=\\operatorname{diag}(1,e^{i\\alpha})\\), \\(R_z(\\alpha)=\\operatorname{diag}(e^{-i\\alpha/2},e^{i\\alpha/2})\\), so \\(P_\\alpha=e^{i\\alpha/2}R_z(\\alpha)\\). The exact circuit applying CNOT, \\(P_{-\\theta/2}\\) on the target, CNOT, then \\(P_{\\theta/2}\\) on each wire implements \\(CP_\\theta=\\operatorname{diag}(1,1,1,e^{i\\theta})\\); verify on four basis states. Replacing the three P gates by Rz gates gives \\(e^{-i\\theta/4}CP_\\theta\\); the controlled relative \\(e^{i\\theta}\\) is preserved. This scalar may be ignored only for the entire unconditional two-qubit block. In the continuous phase-gate model, controlling that Rz implementation requires the exact \\(P_{\\theta/4}\\) correction on the outer control. The fixed-arity compiler gives projective operator error at most \\(\\varepsilon\\) for the whole two-qubit \\(CP_\\theta\\) target. For an additional control, apply it to the complete three-qubit controlled-\\(CP_\\theta\\) matrix, preserving that target representative through the decomposition; do not control a phase-minimized approximation to \\(CP_\\theta\\). A finite H/T compilation does not supply arbitrary phase gates exactly, so no exact finite-set phase-restoration or representative-level cost is claimed.",
    "proof_obligations": [
      "QC08 controlled phase; QC11 CNOT; SU(2) compiler and projective error-budget theorem. Exact continuous identity is proved algebraically; finite-set gate count/bit-time for exact arbitrary phase restoration is not claimed."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9503016",
        "locator": "Controlled-gate phase conventions, §§4–7, PDF pp. 8–25"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/0505030",
        "locator": "SK recurrence, §§2–4, PDF pp. 2–10"
      }
    ],
    "unresolved_obligations": [
      "No exact finite-set arbitrary phase-restoration cost is claimed; preserve phase by compiling the complete controlled block."
    ],
    "title": "Controlled Phase Approximation"
  },
  {
    "id": "thm-qc-solovay-kitaev-bit-complexity",
    "kind": "theorem",
    "page": "approximate-universality-and-solovay-kitaev",
    "deps": [
      "def-qc-effective-unitary-matrix-input",
      "alg-qc-solovay-kitaev-unitary-compiler"
    ],
    "justified_by": [],
    "statement_or_definition": "Candidate statement: with fixed algebraic G, certified net, Cauchy-name target whose precision-k entries are computable in poly(k), and rational ε, give a Turing-machine bit-cost and prove every interval/rounding decision. Dawson–Nielsen explicitly do not do this. Keep this as unresolved unless a full precision schedule proves the stated guarantee; density alone is not an effective compilation result.",
    "proof_obligations": [
      "Missing proof: bit bounds for each recursion level, certified base-net lookup, branch-safe commutator/logarithm arithmetic, and resulting output representation."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0505030",
        "locator": "Finite-precision limitation, §4, PDF pp. 8–10"
      }
    ],
    "unresolved_obligations": [
      "Unresolved: bit bounds for recursive arithmetic, certified net lookup, branch decisions and output representation."
    ],
    "title": "Solovay Kitaev Bit Complexity"
  },
  {
    "id": "def-qc-clifford-t-gate-library",
    "kind": "definition",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "def-qc-pauli-matrices",
      "def-qc-one-qubit-gate-alphabet-and-rotations",
      "def-qc-elementary-circuit-resources",
      "def-qc-controlled-unitary-access"
    ],
    "justified_by": [],
    "statement_or_definition": "Specify H, T, T†, S=T², Z=T⁴ and CNOT by exact matrices and exact finite labels. State the wire order and no implicit ancilla.",
    "proof_obligations": [
      "QC02 tensor order; QC09 resources."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1206.5236",
        "locator": "Exact one-qubit ring theorem and synthesis, §§2–4 and Appendix A, PDF pp. 2–21"
      }
    ],
    "unresolved_obligations": [],
    "title": "Clifford T Gate Library"
  },
  {
    "id": "def-qc-dyadic-cyclotomic-ring",
    "kind": "definition",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "def-number-field",
      "thm-cyclotomic-ring-of-integers"
    ],
    "justified_by": [],
    "statement_or_definition": "Define \\(D[\\omega]=\\mathbb Z[\\omega,1/2]\\), \\(\\omega^8=1\\), \\(\\omega^4=-1\\), and a canonical coefficient/denominator representation.",
    "proof_obligations": [
      "Root `thm-cyclotomic-ring-of-integers`; make representation uniqueness and arithmetic costs explicit."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1206.5236",
        "locator": "Exact one-qubit ring theorem and synthesis, §§2–4 and Appendix A, PDF pp. 2–21"
      }
    ],
    "unresolved_obligations": [],
    "title": "Dyadic Cyclotomic Ring"
  },
  {
    "id": "def-qc-denominator-exponent",
    "kind": "definition",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "def-qc-dyadic-cyclotomic-ring"
    ],
    "justified_by": [],
    "statement_or_definition": "Define the least k for which \\(2^k x\\in\\mathbb Z[\\omega]\\) (or an equivalent √2 convention) and state the chosen convention exactly.",
    "proof_obligations": [
      "Ring definition. Do not mix the source's sde convention with a new exponent convention."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1206.5236",
        "locator": "Exact one-qubit ring theorem and synthesis, §§2–4 and Appendix A, PDF pp. 2–21"
      }
    ],
    "unresolved_obligations": [],
    "title": "Denominator Exponent"
  },
  {
    "id": "lem-qc-clifford-t-entry-ring",
    "kind": "lemma",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "def-qc-clifford-t-gate-library",
      "def-qc-dyadic-cyclotomic-ring"
    ],
    "justified_by": [],
    "statement_or_definition": "Every H/T circuit matrix has entries in (D[\\omega]), by closure under multiplication and exact gate entries.",
    "proof_obligations": [
      "Ring definition and circuit matrix product."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1206.5236",
        "locator": "Exact one-qubit ring theorem and synthesis, §§2–4 and Appendix A, PDF pp. 2–21"
      }
    ],
    "unresolved_obligations": [],
    "title": "Clifford T Entry Ring"
  },
  {
    "id": "lem-qc-dyadic-cyclotomic-unit-circle",
    "kind": "lemma",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "def-qc-dyadic-cyclotomic-ring",
      "def-number-field",
      "def-integral-element-and-algebraic-integer",
      "def-ring-of-integers-of-a-number-field",
      "thm-cyclotomic-ring-of-integers",
      "cor-algebraic-integer-minimal-polynomial-criterion",
      "cor-rational-algebraic-integers-are-integers",
      "thm-kronecker-root-of-unity-criterion"
    ],
    "justified_by": [],
    "statement_or_definition": "If \\(x\\in D[\\omega]\\) and \\(x\\bar x=1\\), then \\(x=\\omega^j\\). Proof route: express x with least denominator exponent; use the unique prime over 2 in (\\mathbb{Z}[\\omega]) and \\( (2)\\sim(1-\\omega)^4\\) to show any denominator is canceled in x; then x is an algebraic integer, all conjugates have modulus one, and root `thm-kronecker-root-of-unity-criterion` plus the roots of unity in (\\mathbb Q(\\zeta_8)\\) gives an eighth root. The prime/valuation step is missing as a specialized root supplier and must be proved locally.",
    "proof_obligations": [
      "Root cyclotomic ring of integers, integral ideal factorization, Kronecker criterion, and root-of-unity facts. Local proof must discharge the denominator/valuation and \\(\\mu(\\mathbb Q(\\zeta_8))=\\mu_8\\) steps."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1206.5236",
        "locator": "Exact one-qubit ring theorem and synthesis, §§2–4 and Appendix A, PDF pp. 2–21"
      }
    ],
    "unresolved_obligations": [
      "Prove the unique prime/valuation denominator step and identify all roots of unity in Q(zeta_8)."
    ],
    "title": "Dyadic Cyclotomic Unit Circle"
  },
  {
    "id": "lem-qc-single-qubit-ring-unitary-form",
    "kind": "lemma",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "lem-qc-dyadic-cyclotomic-unit-circle",
      "lem-qc-clifford-t-entry-ring"
    ],
    "justified_by": [],
    "statement_or_definition": "Use unitarity and the preceding unit-circle lemma to write every 2×2 ring unitary in the source's normal form, retaining its determinant phase.",
    "proof_obligations": [
      "Prior ring lemmas; KMM §3."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1206.5236",
        "locator": "Exact one-qubit ring theorem and synthesis, §§2–4 and Appendix A, PDF pp. 2–21"
      }
    ],
    "unresolved_obligations": [],
    "title": "Single Qubit Ring Unitary Form"
  },
  {
    "id": "thm-qc-single-qubit-exact-clifford-t-characterization",
    "kind": "theorem",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "lem-qc-single-qubit-ring-unitary-form",
      "def-qc-denominator-exponent"
    ],
    "justified_by": [],
    "statement_or_definition": "A 2×2 unitary is an exact H/T circuit iff all entries lie in (D[\\omega]). The forward direction is matrix closure; the converse reduces to preparing the first column and correcting its relative phase.",
    "proof_obligations": [
      "Root/QC algebra plus explicit denominator-exponent lemmas. The multi-qubit analogue stays conjectural and is not asserted."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1206.5236",
        "locator": "Exact one-qubit ring theorem and synthesis, §§2–4 and Appendix A, PDF pp. 2–21"
      }
    ],
    "unresolved_obligations": [
      "Discharge the specialized dyadic denominator-exponent descent; the multi-qubit analogue remains conjectural and is excluded."
    ],
    "title": "Single Qubit Exact Clifford T Characterization"
  },
  {
    "id": "alg-qc-exact-single-qubit-clifford-t-synthesis",
    "kind": "algorithm",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "thm-qc-single-qubit-exact-clifford-t-characterization",
      "def-qc-denominator-exponent"
    ],
    "justified_by": [],
    "statement_or_definition": "Input: a 2×2 unitary with exact (D[\\omega]) entries in a canonical representation; output: an H/T word. While the denominator exponent exceeds the finite base threshold, choose k∈{0,1,2,3} so H T^k lowers it; append inverse steps and finish by finite base lookup. Include a failure branch for entries outside the ring.",
    "proof_obligations": [
      "Exact ring characterization and denominator descent. The base table must be finite and independently checkable."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1206.5236",
        "locator": "Exact one-qubit ring theorem and synthesis, §§2–4 and Appendix A, PDF pp. 2–21"
      }
    ],
    "unresolved_obligations": [
      "Provide and verify a finite base table for denominator-exponent termination."
    ],
    "title": "Exact Single Qubit Clifford T Synthesis"
  },
  {
    "id": "thm-qc-exact-clifford-t-synthesis-optimality",
    "kind": "theorem",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "alg-qc-exact-single-qubit-clifford-t-synthesis"
    ],
    "justified_by": [],
    "statement_or_definition": "State the KMM H- and T-count minimality guarantee for the produced word and its O(n_opt) ring-operation / O(n_opt²) bit-operation costs under the source's encoding. Its Appendix B uses a verified finite base table plus an HT-normal form. Reproduce/check the table rather than citing “computer search” as an opaque proof.",
    "proof_obligations": [
      "Exact algorithm, finite certificate, bit model for ring elements."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1206.5236",
        "locator": "H/T count minimality proof, Appendix B, PDF pp. 22–23"
      }
    ],
    "unresolved_obligations": [
      "Reproduce/check the finite base table and HT-normal-form certificate used in the optimality proof."
    ],
    "title": "Exact Clifford T Synthesis Optimality"
  },
  {
    "id": "thm-qc-controlled-t-two-qubit-obstruction",
    "kind": "theorem",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "def-qc-clifford-t-gate-library",
      "lem-qc-dyadic-cyclotomic-unit-circle",
      "cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus"
    ],
    "justified_by": [],
    "statement_or_definition": "The exact two-qubit controlled-T matrix has determinant \\(\\omega\\). Any two-qubit Clifford+T circuit has determinant a power of (i=\\omega^2); multiplying the target by any allowed ring global phase \\(\\omega^j\\) changes determinant by \\(\\omega^{4j}\\), still leaving an odd exponent, so controlled-T is impossible exactly and up to global phase without workspace.",
    "proof_obligations": [
      "Root determinant multiplicativity and exact gate matrices; ring phase lemma. State “no extra ancilla” precisely."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1206.5236",
        "locator": "Controlled-T obstruction and ancilla circuit, §2, PDF pp. 2–4"
      }
    ],
    "unresolved_obligations": [],
    "title": "Controlled T Two Qubit Obstruction"
  },
  {
    "id": "alg-qc-controlled-t-clean-ancilla-circuit",
    "kind": "algorithm",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "def-qc-clifford-t-gate-library",
      "def-qc-clean-and-dirty-ancillas"
    ],
    "justified_by": [],
    "statement_or_definition": "Give the explicit three-qubit Clifford+T circuit with the third qubit initialized to \\(|0\\rangle\\) and returned to \\(|0\\rangle\\), implementing controlled-T on the first two wires. Verify the action on all four basis inputs.",
    "proof_obligations": [
      "QC10 clean ancilla semantics; KMM Fig. 1. This does not assert a general multi-qubit ring theorem."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1206.5236",
        "locator": "Controlled-T obstruction and ancilla circuit, §2, PDF pp. 2–4"
      }
    ],
    "unresolved_obligations": [],
    "title": "Controlled T Clean Ancilla Circuit"
  },
  {
    "id": "def-qc-ancilla-free-rz-approximation-problem",
    "kind": "definition",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "def-qc-clifford-t-gate-library",
      "def-qc-elementary-circuit-resources",
      "def-operator-norm-on-a-finite-dimensional-inner-product-space",
      "cor-operator-norm-submultiplicative-and-t-star-t-identity",
      "def-qc-pauli-matrices",
      "def-qc-one-qubit-gate-alphabet-and-rotations"
    ],
    "justified_by": [],
    "statement_or_definition": "Input θ, ε and access representation; seek an ancilla-free single-qubit Clifford+T word U with \\(\\|R_z(\\theta)-U\\|_{op}\\le\\varepsilon\\), minimizing T-count. Define Rz exactly as (e^{-i\\theta Z/2}).",
    "proof_obligations": [
      "QC09 resource vector and operator norm; separate from synthesis up to phase."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1403.2975",
        "locator": "Rz approximation, §§7–9, PDF pp. 23–33"
      }
    ],
    "unresolved_obligations": [
      "Fix a computable target-angle and precision encoding before making a Turing uniformity claim."
    ],
    "title": "Ancilla Free Rz Approximation Problem"
  },
  {
    "id": "alg-qc-rz-clifford-t-approximation",
    "kind": "algorithm",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "def-qc-ancilla-free-rz-approximation-problem",
      "alg-qc-exact-single-qubit-clifford-t-synthesis"
    ],
    "justified_by": [],
    "statement_or_definition": "Ross–Selinger Algorithm 7.6: enumerate candidate algebraic ring points in an ε-region, solve (t^\\dagger t=1-u^\\dagger u) via the stated number-theoretic subroutine, and synthesize the resulting exact ring unitary.",
    "proof_obligations": [
      "Exact ring synthesis plus Ross–Selinger grid/factoring algorithm. Input real θ, ε encoding is not specified by the paper; use a computable-real name or leave bit-time unresolved."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1403.2975",
        "locator": "Rz approximation, §§7–9, PDF pp. 23–33"
      }
    ],
    "unresolved_obligations": [
      "The source does not fix a Turing encoding for real theta and epsilon; keep bit-time unresolved without an explicit representation."
    ],
    "title": "Rz Clifford T Approximation"
  },
  {
    "id": "thm-qc-rz-clifford-t-tcount",
    "kind": "theorem",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "alg-qc-rz-clifford-t-approximation"
    ],
    "justified_by": [],
    "statement_or_definition": "With a factoring oracle the algorithm is instance-optimal in T-count and expected polylog(1/ε) arithmetic time. Without factoring, the near-optimal result is conditional on Hypothesis 8.3; the expected count is second-optimal plus O(log log(1/ε)). State the source's typical/worst-case bounds with their hypotheses; do not turn experimental typical counts into a theorem.",
    "proof_obligations": [
      "Prior algorithm and exact named hypothesis. State factoring-oracle access separately from gate count."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1403.2975",
        "locator": "Rz approximation, §§7–9, PDF pp. 23–33"
      }
    ],
    "unresolved_obligations": [
      "Unconditional near-optimality without a factoring oracle remains conditional on Ross–Selinger Hypothesis 8.3."
    ],
    "title": "Rz Clifford T T-count"
  },
  {
    "id": "thm-qc-rz-synthesis-up-to-phase",
    "kind": "theorem",
    "page": "clifford-t-exact-and-approximate-synthesis",
    "deps": [
      "thm-qc-rz-clifford-t-tcount",
      "lem-qc-global-phase-under-control"
    ],
    "justified_by": [],
    "statement_or_definition": "Separate Ross–Selinger §9 problem \\(\\min_\\lambda\\|R_z(\\theta)-\\lambda U\\|\\). For this Clifford+T problem it suffices to consider \\(\\lambda\\in\\{1,e^{i\\pi/8}\\}\\); any use under an outer control must restore the relative phase.",
    "proof_obligations": [
      "On-the-nose Rz theorem; QC11 controlled-global-phase lemma."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1403.2975",
        "locator": "Rz approximation, §§7–9, PDF pp. 23–33"
      }
    ],
    "unresolved_obligations": [],
    "title": "Rz Synthesis Up To Phase"
  },
  {
    "id": "def-qc-uniform-circuit-family",
    "kind": "definition",
    "page": "uniform-circuit-families-promise-problems-and-complexity",
    "deps": [
      "def-effective-binary-encoding-and-decoder",
      "def-qc-circuit-syntax-and-register-order",
      "def-qc-circuit-denotational-semantics",
      "def-qc-elementary-circuit-resources",
      "def-qc-clifford-t-gate-library"
    ],
    "justified_by": [],
    "statement_or_definition": "A family has (C_n) with n classical-basis input wires; its full self-delimiting binary gate-list description is emitted by one fixed deterministic Turing machine on input (1^n) in time polynomial in n. The exact finite gate labels are H,T,T†,CNOT; every wire index is binary; output-register and classical-postprocessing descriptors are included. The full description length and gate count are therefore polynomial.",
    "proof_obligations": [
      "Root effective encoding/time; QC09 elementary circuit resources. This is full-list polynomial-time uniformity, not Boolean logspace uniformity and not P/poly. Do not claim equivalence to indexed-gate uniformity without a conversion proof."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/0804.3401",
        "locator": "Promise problem and uniform BQP/error-reduction model, §I and §§IV.1–IV.2, PDF pp. 3–5 and 12–14"
      }
    ],
    "unresolved_obligations": [],
    "title": "Uniform Circuit Family"
  },
  {
    "id": "def-qc-promise-computation-model",
    "kind": "definition",
    "page": "uniform-circuit-families-promise-problems-and-complexity",
    "deps": [
      "def-promise-problem",
      "def-qc-register-and-computational-basis",
      "def-qc-ordered-bitstring-encoding",
      "def-qc-tensor-register-and-permutation",
      "def-qc-circuit-syntax-and-register-order",
      "def-qc-circuit-denotational-semantics",
      "def-qc-elementary-circuit-resources",
      "def-qc-clean-and-dirty-ancillas"
    ],
    "justified_by": [],
    "statement_or_definition": "Consume a root promise pair ((Y,N)). Input x is represented by the computational-basis state \\(|x\\rangle\\), with a(n) additional \\(|0\\rangle\\) ancillas. A fixed finite gate list acts unitarily, followed by measurement of an explicitly named output register in the computational basis and a deterministic polynomial-time acceptance predicate on x and that output. No intermediate measurements are assumed in the base class model.",
    "proof_obligations": [
      "Root `def-promise-problem`; QC02 basis order; QC09 circuit semantics and clean ancillas. This definition is mathematical circuit semantics, not an empirical postulate."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/0804.3401",
        "locator": "Promise problem and uniform BQP/error-reduction model, §I and §§IV.1–IV.2, PDF pp. 3–5 and 12–14"
      }
    ],
    "unresolved_obligations": [],
    "title": "Promise Computation Model"
  },
  {
    "id": "def-qc-quantum-acceptance-probability",
    "kind": "definition",
    "page": "uniform-circuit-families-promise-problems-and-complexity",
    "deps": [
      "def-qc-promise-computation-model",
      "def-real-and-complex-inner-product-space",
      "def-adjoint-of-a-linear-map-between-inner-product-spaces",
      "def-linear-isometry-and-orthogonal-or-unitary-operator",
      "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases",
      "cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus"
    ],
    "justified_by": [],
    "statement_or_definition": "For \\(\\psi_x=U_C|x,0^{a(n)}\\rangle\\) and accepting output strings \\(A_{n,x}\\), define \\(p_C(x)=\\sum_{z\\in A_{n,x}}|\\langle z|\\psi_x\\rangle_D|^2\\). By the root/Dirac conversion, \\(\\langle z|\\psi\\rangle_D=\\langle\\psi,z\\rangle_r\\). Prove nonnegativity and sum one by the orthonormal basis identity and unitarity; (p_C(x)\\in[0,1]).",
    "proof_obligations": [
      "Root finite-dimensional inner-product/ONB/unitary suppliers. No Born postulate dependency."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/0804.3401",
        "locator": "Promise problem and uniform BQP/error-reduction model, §I and §§IV.1–IV.2, PDF pp. 3–5 and 12–14"
      }
    ],
    "unresolved_obligations": [],
    "title": "Quantum Acceptance Probability"
  },
  {
    "id": "lem-qc-acceptance-probability-phase-invariance",
    "kind": "lemma",
    "page": "uniform-circuit-families-promise-problems-and-complexity",
    "deps": [
      "def-qc-quantum-acceptance-probability",
      "lem-qc-global-phase-under-control"
    ],
    "justified_by": [],
    "statement_or_definition": "Replacing the entire unconditional U_C by \\(e^{i\\phi}U_C\\) leaves each squared output amplitude and p_C unchanged. If a target is inside a controlled operation, consume `lem-qc-global-phase-under-control`; the same substitution is not phase-invariant there.",
    "proof_obligations": [
      "Acceptance definition; QC11 controlled phase lemma."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/0804.3401",
        "locator": "Promise problem and uniform BQP/error-reduction model, §I and §§IV.1–IV.2, PDF pp. 3–5 and 12–14"
      }
    ],
    "unresolved_obligations": [],
    "title": "Acceptance Probability Phase Invariance"
  },
  {
    "id": "def-qc-bqp-promise-class",
    "kind": "definition",
    "page": "uniform-circuit-families-promise-problems-and-complexity",
    "deps": [
      "def-promise-problem",
      "def-qc-uniform-circuit-family",
      "def-qc-quantum-acceptance-probability"
    ],
    "justified_by": [],
    "statement_or_definition": "A promise pair is in BQP if some uniformly generated polynomial-size family has \\(p_C(x)\\ge2/3\\) for x∈Y and \\(p_C(x)\\le1/3\\) for x∈N. Off-promise behavior is unrestricted. The fixed gate matrices lie in \\(\\mathbb Q(\\zeta_8)=\\mathbb Q(i,\\sqrt2)\\), enabling later path-amplitude simulations.",
    "proof_obligations": [
      "Root promise definition; uniform-family and acceptance definitions. No classical separation claim."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/0804.3401",
        "locator": "Promise problem and uniform BQP/error-reduction model, §I and §§IV.1–IV.2, PDF pp. 3–5 and 12–14"
      }
    ],
    "unresolved_obligations": [],
    "title": "BQP Promise Class"
  },
  {
    "id": "def-qc-circuit-cost-model",
    "kind": "definition",
    "page": "uniform-circuit-families-promise-problems-and-complexity",
    "deps": [
      "def-qc-circuit-syntax-and-register-order",
      "def-qc-circuit-denotational-semantics",
      "def-qc-elementary-circuit-resources",
      "def-effective-binary-encoding-and-decoder"
    ],
    "justified_by": [],
    "statement_or_definition": "Refine QC09's vector with full-description length, deterministic family-generator time, gate count, depth, width, clean/dirty ancillas, classical postprocessing time/space, query count when a query gate is explicitly part of the model, and target precision/bit cost. Keep oracle query cost separate from gate/bit cost.",
    "proof_obligations": [
      "QC09 `def-qc-elementary-circuit-resources`; root binary encoding/Turing model. This later item must not be a dependency of QC10–QC13."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/0804.3401",
        "locator": "Promise problem and uniform BQP/error-reduction model, §I and §§IV.1–IV.2, PDF pp. 3–5 and 12–14"
      }
    ],
    "unresolved_obligations": [],
    "title": "Circuit Cost Model"
  },
  {
    "id": "lem-qc-uniform-family-size-bound",
    "kind": "lemma",
    "page": "uniform-circuit-families-promise-problems-and-complexity",
    "deps": [
      "def-qc-uniform-circuit-family"
    ],
    "justified_by": [],
    "statement_or_definition": "A generator running in p(n) steps outputs at most p(n) symbols; with fixed finite arity and labels, the described circuit has at most p(n) gates, at most p(n) wires, and polynomial description length. Full-list generation implies an indexed-gate query procedure by rerunning and scanning the output, but indexed-to-list conversion requires an explicit bounded gate-count enumeration/time proof.",
    "proof_obligations": [
      "Uniform-family definition; standard deterministic time accounting. Do not state representation equivalence without the conversion."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/0804.3401",
        "locator": "Promise problem and uniform BQP/error-reduction model, §I and §§IV.1–IV.2, PDF pp. 3–5 and 12–14"
      }
    ],
    "unresolved_obligations": [
      "Do not assert indexed-generator to full-list equivalence without a bounded gate-count/time conversion proof."
    ],
    "title": "Uniform Family Size Bound"
  },
  {
    "id": "alg-qc-bounded-error-amplification",
    "kind": "algorithm",
    "page": "uniform-circuit-families-promise-problems-and-complexity",
    "deps": [
      "def-qc-uniform-circuit-family",
      "def-qc-promise-computation-model",
      "def-qc-quantum-acceptance-probability",
      "def-qc-classical-control-and-measurement-circuit",
      "def-finite-probability-space-and-event",
      "lem-chernoff-bound-for-independent-bernoulli-trials"
    ],
    "justified_by": [],
    "statement_or_definition": "Input a family with YES acceptance ≥a(n), NO acceptance ≤b(n), a,b rational polynomial-time computable and gap \\(\\gamma(n)=a(n)-b(n)\\ge1/p(n)\\); target \\(0<\\delta(n)\\le1/2\\). Construct r independent parallel copies with \\(r=\\lceil2\\gamma^{-2}\\ln(1/\\delta)\\rceil\\) and accept iff the observed output frequency is at least \\(\\tau=(a+b)/2\\). The postprocessing is a specified polynomial-time majority/threshold procedure. Include r-copy clean ancillas and output-bit construction; r is polynomial whenever \\(\\log(1/\\delta)\\) and \\(1/\\gamma\\) are polynomially bounded.",
    "proof_obligations": [
      "Uniform circuit family; finite product-register semantics; Bernoulli tail supplier. The output predicate is part of the family description/cost."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/0804.3401",
        "locator": "Promise problem and uniform BQP/error-reduction model, §I and §§IV.1–IV.2, PDF pp. 3–5 and 12–14"
      }
    ],
    "unresolved_obligations": [],
    "title": "Bounded Error Amplification"
  },
  {
    "id": "thm-qc-bounded-error-amplification-correct",
    "kind": "theorem",
    "page": "uniform-circuit-families-promise-problems-and-complexity",
    "deps": [
      "alg-qc-bounded-error-amplification",
      "def-qc-promise-computation-model",
      "def-finite-probability-space-and-event",
      "lem-chernoff-bound-for-independent-bernoulli-trials"
    ],
    "justified_by": [],
    "statement_or_definition": "The r output indicators are independent Bernoulli variables because the r pre-measurement states are a tensor product on disjoint registers. Hoeffding/Chernoff gives either error ≤ \\(\\exp(-r\\gamma^2/2)\\le\\delta\\). For standard BQP \\(a=2/3,b=1/3\\), this is \\(r\\ge18\\ln(1/\\delta)\\) runs with ordinary majority threshold 1/2. The generator emits r copies in polynomial time and the amplified family retains full-list uniformity.",
    "proof_obligations": [
      "Product-state amplitude factorization, finite probability, root independent-Bernoulli tail bound. Provide the output-size/gate/width costs explicitly."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/0804.3401",
        "locator": "Promise problem and uniform BQP/error-reduction model, §I and §§IV.1–IV.2, PDF pp. 3–5 and 12–14"
      }
    ],
    "unresolved_obligations": [],
    "title": "Bounded Error Amplification Correct"
  },
  {
    "id": "thm-qc-bqp-error-robustness",
    "kind": "theorem",
    "page": "uniform-circuit-families-promise-problems-and-complexity",
    "deps": [
      "thm-qc-bounded-error-amplification-correct",
      "def-qc-bqp-promise-class"
    ],
    "justified_by": [],
    "statement_or_definition": "Inverse-polynomial gap and any polynomially small target error leave the class unchanged: amplify to error δ=2^{-q(n)} for any polynomial q, using polynomial r and full-list uniformity. For finite exceptional lengths, hardcode the finite circuits.",
    "proof_obligations": [
      "Prior amplification correctness; complexity of the uniform generator."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/0804.3401",
        "locator": "Promise problem and uniform BQP/error-reduction model, §I and §§IV.1–IV.2, PDF pp. 3–5 and 12–14"
      }
    ],
    "unresolved_obligations": [],
    "title": "BQP Error Robustness"
  },
  {
    "id": "def-qc-circuit-optimization-task",
    "kind": "definition",
    "page": "circuit-optimization-resource-tradeoffs-and-lower-bounds",
    "deps": [
      "def-qc-circuit-syntax-and-register-order",
      "def-qc-circuit-denotational-semantics",
      "def-qc-elementary-circuit-resources",
      "def-qc-circuit-cost-model"
    ],
    "justified_by": [],
    "statement_or_definition": "Input a finite circuit over a fixed exact gate alphabet, a declared equality notion (matrix exact, or whole-circuit global-phase equivalence), ancilla policy, and a cost coordinate (count, depth, T-count, width). Output an equivalent circuit with no larger cost; “globally optimal” means no equivalent circuit in the declared model has smaller cost.",
    "proof_obligations": [
      "QC09 circuit semantics and QC14 cost refinement. The optimization objective must be one scalar/vector order at a time."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Circuit and complexity overview, Ch. 13, PDF pp. 121–126"
      }
    ],
    "unresolved_obligations": [],
    "title": "Circuit Optimization Task"
  },
  {
    "id": "alg-qc-basic-clifford-t-rewrite",
    "kind": "algorithm",
    "page": "circuit-optimization-resource-tradeoffs-and-lower-bounds",
    "deps": [
      "def-qc-clifford-t-gate-library"
    ],
    "justified_by": [],
    "statement_or_definition": "On H,T,T†,CNOT words, repeatedly apply a fixed finite rule list such as H²→I, T⁸→I, TT†→I, and CNOT²→I when adjacent gates act on the same wires. Scan a deterministic left-to-right first match; terminate when no rule applies.",
    "proof_obligations": [
      "Fixed labels and exact matrices. Each rewrite decreases a nonnegative gate count, so at most the input gate count many rewrites occur."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Circuit and complexity overview, Ch. 13, PDF pp. 121–126"
      }
    ],
    "unresolved_obligations": [],
    "title": "Basic Clifford T Rewrite"
  },
  {
    "id": "thm-qc-basic-rewrite-correct-and-terminating",
    "kind": "theorem",
    "page": "circuit-optimization-resource-tradeoffs-and-lower-bounds",
    "deps": [
      "alg-qc-basic-clifford-t-rewrite"
    ],
    "justified_by": [],
    "statement_or_definition": "Each registered rewrite preserves the exact matrix; the procedure terminates and returns a local normal form relative only to the declared finite rewrite set. It is not claimed globally minimal.",
    "proof_obligations": [
      "Prior algorithm and exact gate identities."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Circuit and complexity overview, Ch. 13, PDF pp. 121–126"
      }
    ],
    "unresolved_obligations": [],
    "title": "Basic Rewrite Correct And Terminating"
  },
  {
    "id": "lem-qc-circuit-resource-composition",
    "kind": "lemma",
    "page": "circuit-optimization-resource-tradeoffs-and-lower-bounds",
    "deps": [
      "def-qc-circuit-syntax-and-register-order",
      "def-qc-circuit-denotational-semantics",
      "def-qc-elementary-circuit-resources"
    ],
    "justified_by": [],
    "statement_or_definition": "Sequential composition adds gate counts/depths and takes max width after wire alignment; parallel tensor composition adds counts/widths and takes max depth; clean ancillas are counted only when initialized and returned to zero by the full composed block.",
    "proof_obligations": [
      "QC09 elementary resources and matrix/circuit composition."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Circuit and complexity overview, Ch. 13, PDF pp. 121–126"
      }
    ],
    "unresolved_obligations": [],
    "title": "Circuit Resource Composition"
  },
  {
    "id": "thm-qc-qsd-cnot-upper-bound",
    "kind": "theorem",
    "page": "circuit-optimization-resource-tradeoffs-and-lower-bounds",
    "deps": [
      "thm-qc-exact-arbitrary-unitary-qsd-upper-bound"
    ],
    "justified_by": [],
    "statement_or_definition": "Reuse QC11 exact QSD: no-ancilla n-qubit U needs at most \\( (23/48)4^n-(3/2)2^n+4/3\\) CNOTs. Report one-qubit gates separately; a CNOT count alone is not total classical compilation time.",
    "proof_obligations": [
      "QC11 exact synthesis."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0406176",
        "locator": "QSD, CNOT bounds, and architecture, §6 and Appendix A, PDF pp. 16–18"
      }
    ],
    "unresolved_obligations": [],
    "title": "QSD CNOT Upper Bound"
  },
  {
    "id": "thm-qc-generic-circuit-count-lower-bound",
    "kind": "theorem",
    "page": "circuit-optimization-resource-tradeoffs-and-lower-bounds",
    "deps": [
      "def-qc-circuit-syntax-and-register-order",
      "def-qc-circuit-denotational-semantics",
      "def-qc-elementary-circuit-resources",
      "def-qc-bqp-promise-class",
      "def-qc-quantum-acceptance-probability"
    ],
    "justified_by": [],
    "statement_or_definition": "For a fixed finite gate alphabet with maximum arity three, the number of descriptions with ≤C gates is at most \\( (k+1)^C(3C)^{3C}=C^{O(C)}\\). Each circuit can compute at most one Boolean function with success ≥2/3 on every input. Since there are \\(2^{2^n}\\) Boolean functions, at least 99% require \\(\\Omega(2^n/n)\\) gates. This is the de Wolf counting proof, under the stated model.",
    "proof_obligations": [
      "Fixed finite arity labels and circuit acceptance; elementary counting. The conclusion is “almost all functions,” not every function or a BQP/classical separation."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Finite-gate circuit counting, Ch. 13 §13.1, PDF p. 121"
      }
    ],
    "unresolved_obligations": [],
    "title": "Generic Circuit Count Lower Bound"
  },
  {
    "id": "thm-qc-nearest-neighbor-cnot-overhead",
    "kind": "theorem",
    "page": "circuit-optimization-resource-tradeoffs-and-lower-bounds",
    "deps": [
      "thm-qc-exact-arbitrary-unitary-qsd-upper-bound"
    ],
    "justified_by": [],
    "statement_or_definition": "Shende et al. decompose their multiplexed rotations so nearest-neighbor CNOT routing requires at most nine times the CNOT count of that construction. This is an architecture-specific gate-count overhead, not a depth bound for every layout.",
    "proof_obligations": [
      "QC11 QSD/multiplexors; linear chain architecture explicitly stated."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/0406176",
        "locator": "QSD, CNOT bounds, and architecture, §6 and Appendix A, PDF pp. 16–18"
      }
    ],
    "unresolved_obligations": [],
    "title": "Nearest Neighbor CNOT Overhead"
  },
  {
    "id": "thm-qc-clean-ancilla-multicontrolled-tradeoff",
    "kind": "theorem",
    "page": "circuit-optimization-resource-tradeoffs-and-lower-bounds",
    "deps": [
      "thm-qc-multicontrolled-ancilla-resource-tradeoff",
      "def-qc-elementary-circuit-resources",
      "def-qc-clean-and-dirty-ancillas"
    ],
    "justified_by": [],
    "statement_or_definition": "Reuse Barenco's exact \\(\\Theta(m^2)\\)-without-work-bit versus \\(\\Theta(m)\\)-with-one-clean-bit constructions; list total qubits and the return-to-zero condition in both cases.",
    "proof_obligations": [
      "QC11 tradeoff proof; QC09 clean-ancilla semantics."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9503016",
        "locator": "Clean/zero-work-bit controlled-U tradeoff, Corollaries 7.6 and 7.12, PDF pp. 20–25"
      }
    ],
    "unresolved_obligations": [],
    "title": "Clean Ancilla Multicontrolled Tradeoff"
  },
  {
    "id": "def-qc-bqtisp-model",
    "kind": "definition",
    "page": "circuit-optimization-resource-tradeoffs-and-lower-bounds",
    "deps": [
      "def-qc-circuit-cost-model",
      "def-effective-binary-encoding-and-decoder"
    ],
    "justified_by": [],
    "statement_or_definition": "If the time–space result is included, define the separate VMW random-access quantum Turing model: read-only input uncharged, classical and quantum work tapes, maximum branch time/space, intermediate computational-basis measurements, fixed computable amplitudes, and exact random-access convention. This is not circuit depth.",
    "proof_obligations": [
      "A self-contained definition and finite transition/circuit encoding are required before the theorem can be consumed."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/0712.2545",
        "locator": "Quantum time-space model and simulation, §§2.3–3 and Appendices A–B, PDF pp. 8–25"
      }
    ],
    "unresolved_obligations": [
      "Give the complete VMW machine configuration, read/write convention and constructibility hypotheses before reuse."
    ],
    "title": "BQTISP Model"
  },
  {
    "id": "thm-qc-bqtisp-to-ptisp-simulation",
    "kind": "theorem",
    "page": "circuit-optimization-resource-tradeoffs-and-lower-bounds",
    "deps": [
      "def-qc-bqtisp-model",
      "thm-qc-solovay-kitaev-error-and-resource-bound",
      "def-probabilistic-polynomial-time-machine-interface"
    ],
    "justified_by": [],
    "statement_or_definition": "Van Melkebeek–Watson Lemma 2: for sufficiently constructible (t,s\\ge\\log n), \\(\\mathrm{BQTISP}(t,s)\\subseteq\\mathrm{PTISP}(t\\,\\mathrm{polylog}(t),s+\\mathrm{polylog}(t))\\), for their stated model. Their route reduces gates using SK, bounds acceptance error under intermediate measurements, then encodes path amplitudes into a #P difference.",
    "proof_obligations": [
      "Full local model, their finite-precision argument, #P/GapP and space simulation suppliers. Do not transfer this statement to the uniform circuit model without a model-conversion theorem."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/0712.2545",
        "locator": "Quantum time-space model and simulation, §§2.3–3 and Appendices A–B, PDF pp. 8–25"
      }
    ],
    "unresolved_obligations": [
      "Use only VMW’s stated intermediate-measurement Turing model; supply its finite-precision and GapP/space simulation details."
    ],
    "title": "BQTISP To PTISP Simulation"
  },
  {
    "id": "thm-qc-counting-hierarchy-time-space-lower-bound",
    "kind": "theorem",
    "page": "circuit-optimization-resource-tradeoffs-and-lower-bounds",
    "deps": [
      "thm-qc-bqtisp-to-ptisp-simulation"
    ],
    "justified_by": [],
    "statement_or_definition": "The paper's MajSAT/MajMajSAT consequence additionally uses Allender et al.'s unbounded-error counting-hierarchy time–space lower bound as Lemma 1. State VMW's exact alternatives only after that independent supplier is retrieved, read, and proved. That source is not in this cache and remains unresolved.",
    "proof_obligations": [
      "External Allender et al. paper not retrieved/read. No downstream lower-bound claim is licensed until this is discharged."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/0712.2545",
        "locator": "Quantum time-space model and simulation, §§2.3–3 and Appendices A–B, PDF pp. 8–25"
      }
    ],
    "unresolved_obligations": [
      "Unresolved: Allender et al. source/proof supplier was not retrieved or read; no downstream lower-bound item is licensed."
    ],
    "title": "Counting Hierarchy Time Space Lower Bound"
  }
]
```

##

## ## Inherited-root-remark-repair-plan

Plan only; no published item or dependency edge was edited. The inherited closure remains on hold.

```json
{
  "plan_id": "Inherited-root-remark-repair-plan",
  "status": "proposal-only",
  "closure_status": "hold",
  "scope": {
    "task": "Plan repairs for the two named inherited remark edges only; inspect only their direct nonremark consumers listed in the supplied edge audit.",
    "edge_audit": "research/quantum-planning-review/inherited-remark-edges.json",
    "closure_audit": "research/quantum-planning-review/root-prerequisite-closure.json",
    "closure_item_count": 1832,
    "target_parents_verified_in_closure": true,
    "published_item_files_changed": false,
    "canonical_inventory_or_engine_changed": false
  },
  "repair_targets": [
    {
      "remark_id": "rem-real-exponents-deferred",
      "remark_path": "items/rem-real-exponents-deferred.md",
      "remark_raw_sha256": "a8f7830b8f4cbf4601bcc398be574738cb2e4262c5d1f5259a91f04c436c0102",
      "direct_nonremark_consumers": [
        {
          "id": "def-p-norms-on-rn",
          "path": "items/def-p-norms-on-rn.md",
          "current_raw_sha256": "b099b1c45ca8319d8ce1c776532c25ec66c7b569839d6c923203cab1bcd8ffcf",
          "current_deps": [
            "def-norm-and-normed-space",
            "def-euclidean-inner-product",
            "def-rational-power",
            "lem-rational-power-well-defined",
            "lem-rational-power-laws",
            "lem-rational-power-monotone",
            "rem-real-exponents-deferred",
            "thm-minkowski-finite",
            "def-finite-sum",
            "lem-finite-sum-laws",
            "lem-finite-set-has-max",
            "def-max-min",
            "lem-metrics-on-rn",
            "def-abs-value",
            "lem-of-abs-value",
            "thm-of-square-roots"
          ],
          "exact_replacement_deps": [
            "def-norm-and-normed-space",
            "def-euclidean-inner-product",
            "def-rational-power",
            "lem-rational-power-well-defined",
            "lem-rational-power-laws",
            "lem-rational-power-monotone",
            "thm-minkowski-finite",
            "def-finite-sum",
            "lem-finite-sum-laws",
            "lem-finite-set-has-max",
            "def-max-min",
            "lem-metrics-on-rn",
            "def-abs-value",
            "lem-of-abs-value",
            "thm-of-square-roots"
          ],
          "statement_semantic_change": false,
          "same_reviewer_downstream_consumer_checks_required": [],
          "body_link_edits": [
            {
              "location": "Definition commentary, “The exponent is a rational, and that is not a matter of taste.”",
              "current_excerpt": "The text says real exponents do not exist at this point in the reading order and points to rem-real-exponents-deferred for why.",
              "remove_links": [
                "rem-real-exponents-deferred"
              ],
              "replacement_text": "This item intentionally states rational p-norms: [[def-rational-power]] supplies the powers used here, and [[thm-minkowski-finite]] supplies their triangle inequality for rational p ≥ 1. Positive-base real powers are separately defined in [[def-real-power]] and obey [[thm-real-power-laws]]. A distinct [[thm-minkowski-finite]]-real-exponents proves the finite-sum inequality for real p > 1; none of these facts changes this item’s rational-p domain.",
              "logic_change": false
            },
            {
              "location": "Practical consequence commentary.",
              "current_excerpt": "The text says these are rational-exponent forms restricted by reading order and that the later real-power page supplies the general versions.",
              "remove_links": [
                "rem-real-exponents-deferred"
              ],
              "replacement_text": "For this item, p is rational and p ≥ 1; for p > 1 its conjugate q = p/(p−1) is rational, so the rational-power and rational Minkowski suppliers apply. The separately published real-power laws define the power operations for positive bases and real exponents; [[thm-minkowski-finite]]-real-exponents separately gives finite Minkowski for real p > 1, while p = 1 is already covered by [[thm-minkowski-finite]]. This item remains the rational-p definition.",
              "logic_change": false
            }
          ],
          "rational_vs_real_scope_audit": {
            "def-rational-power": "For a > 0 and r in Q; additionally 0^r = 0 for rational r > 0. Negative bases are excluded; 0^0 keeps the integer-power convention.",
            "thm-minkowski-finite": "Finite sums, rational p ≥ 1. The p = 1 case is proved by termwise triangle inequality; p > 1 uses rational Holder with q = p/(p−1), which is rational.",
            "def-real-power": "For a > 0 and x in R, a^x = exp(x log a); supplementary 0^x = 0 only for x > 0; 0^0 and 0^x for x < 0 are undefined, and negative bases receive no arbitrary real powers.",
            "thm-real-power-laws": "For positive a,b and real r,s, proves exponent addition, product, quotient and iterated-power laws. These power laws alone are not a norm triangle inequality.",
            "thm-minkowski-finite-real-exponents": "For finite real families and real p > 1; proof uses real Holder, real-power laws, and division by a positive power sum. The p = 1 case is already supplied by thm-minkowski-finite.",
            "supremum_route": "def-real-power-by-rational-supremum gives the rational-supremum construction, and thm-rational-supremum-power-agrees-with-exp proves it equals the exp/log definition; cor-real-power-as-rational-limit records the rational-approximation corollary. The remark’s supremum-recovery claim therefore has a published supplier.",
            "dependency_decision": "Do not add the real-power or real-p Minkowski items to def-p-norms-on-rn dependencies: its definition and proof remain rational-p and are already supplied by the retained dependencies. They may be named in nonlogical scope commentary only."
          },
          "missing_supplier_proposals": [],
          "missing_supplier_rationale": "No mathematical supplier is missing for the current rational-p definition. Real powers and real-p Minkowski already have published definitions/theorems, but are not prerequisites for the unchanged rational-p statement."
        }
      ]
    },
    {
      "remark_id": "rem-heine-criterion-choice-cost",
      "remark_path": "items/rem-heine-criterion-choice-cost.md",
      "remark_raw_sha256": "2f0a967b90c7aea3395ca006b385baf83222cb454cb5488b0c5b2a4b28fda414",
      "direct_nonremark_consumers": [
        {
          "id": "thm-sequential-criterion-for-continuity",
          "path": "items/thm-sequential-criterion-for-continuity.md",
          "current_raw_sha256": "fbdd6f57c8e0318fa46eaa46a23968ded9a52a370f7ba576f2a3607b881be813",
          "current_deps": [
            "def-continuity-real",
            "thm-sequential-criterion-for-function-limits",
            "rem-heine-criterion-choice-cost",
            "def-countable-choice",
            "def-function-limit",
            "def-limit-point-r",
            "def-neighbourhood-r",
            "def-sequence",
            "def-real-limit",
            "lem-rat-embeds-dense",
            "lem-of-abs-value"
          ],
          "exact_replacement_deps": [
            "def-continuity-real",
            "thm-sequential-criterion-for-function-limits",
            "def-countable-choice",
            "def-function-limit",
            "def-limit-point-r",
            "def-neighbourhood-r",
            "def-sequence",
            "def-real-limit",
            "lem-rat-embeds-dense",
            "lem-of-abs-value"
          ],
          "statement_semantic_change": false,
          "same_reviewer_downstream_consumer_checks_required": [],
          "choice_scope_audit": {
            "def-countable-choice": "For every sequence of nonempty sets (X_k) indexed by N there is a function choosing x_k in X_k for every k.",
            "thm-sequential-criterion-for-function-limits": "The limit-to-sequence implication is proved in ZF. Its sequence-to-epsilon-delta converse selects one bad point from each nonempty shrinking set X_k at step 3.2 using AC_omega exactly once.",
            "thm-sequential-criterion-for-continuity": "The 1-to-2 direction is choice-free. Its 2-to-1 direction invokes the function-limit criterion and inherits that proof’s single AC_omega use; the current theorem also directly depends on def-countable-choice.",
            "lem-sequential-characterisation-of-closure-r": "The separate left-to-right construction of a sequence from a closure point uses AC_omega at its step 2.2; the reverse direction is choice-free. This is a related example, not an additional logical dependency of the continuity theorem.",
            "scope_limit": "These are proof-cost statements only. Do not claim AC_omega is necessary, do not infer full AC or dependent choice, and do not silently strengthen the theorem’s choice hypothesis."
          },
          "body_link_edits": [
            {
              "location": "Statement commentary after the direction-specific choice-cost paragraph.",
              "current_excerpt": "What this library does and does not claim about that cost is recorded in rem-heine-criterion-choice-cost.",
              "remove_links": [
                "rem-heine-criterion-choice-cost"
              ],
              "replacement_text": "This is a claim about the proof given here: the 2-to-1 direction inherits the single countable-choice use in the function-limit criterion. It is not a claim that countable choice is necessary.",
              "retain_links": [
                "lem-sequential-characterisation-of-closure-r"
              ],
              "logic_change": false
            },
            {
              "location": "Remarks, “What the choice cost is, and what it is not.”",
              "current_excerpt": "The paragraph links to rem-heine-criterion-choice-cost for its no-necessity qualification and the Sierpiński all-points comparison.",
              "remove_links": [
                "rem-heine-criterion-choice-cost"
              ],
              "replacement_text": "The claim here is proof-specific: step 1.3 uses countable choice through [[thm-sequential-criterion-for-function-limits]]. This theorem does not claim that countable choice is necessary. Sierpiński’s distinct ZF theorem concerns a map R to R sequentially continuous at every point; that all-points statement does not settle the choice cost of this pointwise criterion.",
              "logic_change": false
            }
          ],
          "missing_supplier_proposals": [],
          "missing_supplier_rationale": "The criterion theorem, def-countable-choice, and the consumer proof’s explicit step 1.3 already supply the exact proof-cost account. No necessity theorem is claimed or needed."
        }
      ]
    }
  ],
  "missing_supplier_proposals": [],
  "closure_hold_reason": "This is a review plan only. Both consumer files still contain the published remark dependency and body links; keep the inherited closure on hold until the native owners author the proposed parent repairs, recompute/verify raw hashes and dependencies, and complete their same-reviewer checks if any statement semantics are changed.",
  "reviewer_check_policy": "No statement semantics are proposed to change here, so no same-reviewer downstream checks are triggered by this plan. If an owner broadens the rational-p norm statement or changes either sequential-equivalence claim, enumerate and recheck every same-reviewer consumer before accepting the change."
}
```
