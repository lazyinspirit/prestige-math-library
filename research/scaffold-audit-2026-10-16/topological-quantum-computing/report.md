# Quantum Computing and Quantum Algorithms TQC scaffold expansion — 2026-10-16

## Work completed

Expanded the shared QC/QA prose scaffolds and their category-local page and item inventories. The active inventories contain 423 QC proposals and 561 QA proposals, for 984 proposals on 128 pages. The TQC additions are QC25–QC27 (65 items, three A/B pairs, including four joint-density/spectator/arbitrary-register items) and QA-37 (23 items, one A/B pair). All remain draft proposals; no production item/page, run manifest, shared plan specification, publication stamp, test battery, or commit was changed.

The prose is in `research/quantum-computing-planning/sections/tqc-expansion.md` and `research/quantum-algorithms-planning/sections/qa37-topological-algorithms.md`. Machine contracts and prerequisite edges are in each track's `pages.json` and `proposed-items.json`; the pathway and track plans describe the same scope. Published root content remains read-only.

QC25 adds the positive dagger/Hilbert assumptions absent from algebraic fusion categories, multiplicity-aware fusion trees, F/R coordinates, gauge changes, ribbon spin/modularity, and fixed Ising/Fibonacci conventions. It writes the associator pentagon and both braiding hexagons as explicit operator equations and derives their matrix forms by expanding all semisimple labels and multiplicity indices. The finite Fibonacci data are checked in every nontrivial pentagon and hexagon sector by explicit matrices and phase identities; unit-input cases reduce to unit constraints. The Ising claims are restricted to the displayed three-σ sector and an explicit Majorana/parity representation; no all-label Ising table is an unstated premise. QC26 separates phase, encoding, logical block error, and leakage; it proves the Fibonacci one-qubit route and the joint six-anyon result below. QC27 supplies the finite toric-code stabilizer, excitation/string, logical, distance/recovery, local-indistinguishability, gap, and energy-barrier calculations. No finite-lattice result is used to assert thermal lifetime or physical phase stability.

QA-37 defines finite anyon tasks and separate braid, preparation, measurement, classical, failure, and physical-time costs. It applies the published SU(2) compiler only under its base-net, target, and precision hypotheses; proves product/output error and the full finite JRS projector bound; and gives the dovetailed joint-block compiler and arbitrary-size triple-encoded error theorem. The efficient single-qubit braid length applies only to its SU(2) compiler; the joint SU(5)×SU(8) exhaustive search has no useful length or time bound. Physical implementation remains contextual.

## Exact B₆ density argument and certificates

Fix the Fibonacci convention `τ⊗τ=1⊕τ`, `φ=(1+√5)/2`,
`F^{τττ}_τ=[[φ⁻¹,φ⁻¹ᐟ²],[φ⁻¹ᐟ²,−φ⁻¹]]`,
`R_1=e^(−4πi/5)`, `R_τ=e^(3πi/5)`, and
`r=R_τ/R_1=e^(−3πi/5)`. In both six-anyon total-charge sectors, the path
projectors `P_i=E_i/φ` are obtained from the same F matrix: their entries are
zero unless two paths agree except at coordinate i and have equal adjacent
labels, and then `(E_i)_(x,y)=sqrt(d_(x_i)d_(y_i))/d_(x_(i−1))`, with
`d_1=1,d_τ=φ`. The local block is
`[[φ⁻²,φ⁻³ᐟ²],[φ⁻³ᐟ²,φ⁻¹]]` or `[1]`. Direct multiplication proves
`P_i²=P_i`, `P_iP_(i+1)P_i=φ⁻²P_i`, and distant commutation; hence
`B_i=rI+(1−r)P_i` are unitary and satisfy the Artin relations by
`r+r⁻¹=−φ⁻¹`. This is also a direct path/TL construction, so the density
proof does not rely on an unstated all-tree coherence theorem.

For total charge 1, the five paths are
`0101010, 0101110, 0110110, 0111010, 0111110`. This sector contains both the
pair-pair encoding (pairs `(12),(34),(56)`, even-τ strings, with all-τ
one-dimensional complement) and a distinct triple-triple code; they are not
identified. For `C=B_1B_2⁻¹`, the spectrum is `1,e^(iθ),e^(−iθ)`, with the
last eigenvalues each of multiplicity two and `2cosθ=φ⁻²`. The Galois
conjugate `φ²>2` excludes a root of unity, so the powers contain a circle in
the closure. The tangent `X=C−C⁻¹` and the 24 explicit adjoint/commutator
words `Y0,…,Y23` in the QC section lie in `su(5)`. The coefficient ring is
`Z[r,s]`, `s²=φ`, with complete degree-eight tower presentation: `Q(r)` has
real subfield `Q(√5)`, `N(φ)=−1`, and conjugation rules out a square root of φ
in `Q(r)`. The specialization `r↦15`, `r⁻¹↦29`, `φ↦19`, `s↦9` in `F_31`
preserves the defining relations and all nonzero denominators. Conjugation is
performed as `r↦r⁻¹` in the coefficient field before evaluation; the residue
field is not assigned a conjugation. The row-major 24×24 minor is `17 mod31`,
so these matrices span `su(5)` exactly. Since `det B_i=r³`, the determinant
image is finite; Cartan under the published `AC_ω` hypotheses gives a closure
containing `SU(5)`.

For total charge τ, the eight paths are
`0101011,0101101,0101111,0110101,0110111,0111011,0111101,0111111`.
Here `rank(P_i)=3`, `det(B_i)=r⁵`, and the same `C` eigenangle occurs with
multiplicities two for 1 and three for each of `e^(±iθ)`. The exact
`su(8)` word selection is defined wholly modulo 31: start with `Z0=X`, scan
adjoints in current-list/generator order, then commutators in lexicographic
order, appending exactly the rows independent over `F_31`, and stop after a
round adds none. The script `b6-su8-lie-rank-certificate.py` prints the
resulting 63 formal words. Each lifts to a traceless skew-Hermitian exact
Lie word; the selected row-major 63×63 minor is `22 mod31`, proving they span
`su(8)`. The script uses only integer arithmetic and no numerical rank test.

The 5D and 8D selected words lift from the same initial tangent pair into the
joint Lie algebra of the normalized simultaneous image in `U(5)×U(8)`. Both
projections are onto; the determinant image generated by `(r³,r⁵)` is finite,
so the Lie algebra lies in `su(5)⊕su(8)`. The factors are real simple and
nonisomorphic (dimensions 24 and 63). For a subdirect sum, the two projection
kernels are ideals; either a whole factor gives the product, or both vanish
and give an impossible graph isomorphism. Thus the joint Lie algebra is the
full product. Cartan and connectedness imply the joint closure contains
`SU(5)×SU(8)`.

For a two-triple target `U∈U(4)`, identify the same ordered pair of triple
fusion paths in both charge blocks and set `λ=(det U)⁻¹`:
`T_1=U⊕λ∈SU(5)` and
`T_τ=U⊕diag(λ,1,1,1)∈SU(8)`. One normalized braid approximates both at once.
For `n≥2` triples with global charge `c`, the full physical space is
`⊕_{a=1,τ}V(τ⁶→a)⊗V(a⊗τ^(3n−6)→c)`, not a single-charge block with
spectators omitted. The full spectator factor includes all other physical
fusion paths and triple multiplicities; naturality makes a local braid act as
`⊕_aρ_a(b)⊗I`. The target extension `⊕_aT_a⊗I` preserves the code and gives
the same operator error on the entire ambient space. For a one-triple gate,
use the split `⊕_{a=1,τ}V(τ³→a)⊗V(a⊗τ^(3n−3)→c)` and extend its ideal target
by the actual compiled braid on local total charge 1 and the target on charge
τ. This braid-dependent unitary extension agrees on the complement and is
δ-close on the computational block, so prior leakage is covered without
claiming total-1 density. The code is
`(C²)^⊗n⊗V(τ^n→c)`. Exact QSD plus per-gate tolerances summing to ε and unitary
telescoping prove arbitrary-size triple-encoded approximation with logical
error and leakage at most ε. No exact leakage-free entangler is required.

The original categorical word differs from the normalized word by one common
`R_1^k` phase on the entire fixed-charge space. It is harmless for uncontrolled
outputs and must be carried under coherent control. The same Lie-rank argument
applies to the physical categorical closure because scalar rephasing changes
neither `C` nor any adjoint action and leaves finite determinant image. A
dovetailed algorithm searches all words of length at most s while refining
target and algebraic entries at each finite stage; strict certified upper
bounds below δ ensure termination for computable Cauchy-name targets. It gives
no efficient SU(5)×SU(8) word-length or time bound. A fixed-dimensional
Solovay–Kitaev compiler for these blocks is a separate established-result
authoring extension: no local efficiency theorem is claimed here, and this is
not treated as an open mathematical problem or a prerequisite.

## Supplier and consumer map

| Exact existing supplier | Exact clause consumed and hypotheses | New direct consumer |
|---|---|---|
| `def-unordered-configuration-space`, `def-based-loops-and-fundamental-group`, `def-braid-group-from-unordered-configurations` | `B_n^conf=π₁(C_n(D²),[q])` at the declared base configuration. | QC26 `def-qc-tqc-braid-action-from-fusion-data` |
| `thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations` | Geometric braid classes identify with configuration-space π₁, with the source's product reversal/inverse convention retained. | QC26 braid-action definition |
| `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk` | Boundary-fixed mapping classes of the punctured disk give the braid group. | QC26 braid-action definition and topology interpretation |
| `def-braid-group-by-the-artin-presentation` | Invertible generators with adjacent braid relation and far commutation present B_n. | QC26 `thm-qc-tqc-braid-action-unitary-and-artin`; phase exponent-sum lemma |
| `def-tensor-and-multitensor-category`, `def-fusion-and-multifusion-category`, `def-fusion-rules`, `def-braided-monoidal-category`, `def-braiding` | Finite semisimplicity/rigidity and associator are inherited as stated; `def-braiding` supplies both hexagons. None supplies a positive dagger by itself. | QC25 unitary category, fusion-space, F/R, pentagon/hexagon contracts; QC26 braid representation |
| `def-twist-and-ribbon-structure`, `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links`, `cex-a-braiding-alone-does-not-define-a-link-trace` | Twist/duality and full ribbon hypotheses are required for framed colored link evaluation; braiding alone has no licensed trace closure. | QC25 spin/modularity and ribbon-evaluation contracts |
| `thm-a-yang-baxter-operator-gives-braid-group-representations`, `thm-hh-r-matrix-constructs-a-module-braiding`, `thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra`, `def-temperley-lieb-quotient-and-jones-specialization` | Invertible YB/Hopf/Hecke data provide algebraic representations or braidings only; no positive inner product or unitary module structure follows. | QC25 nonunitarity counterexamples and QC26 local positive-unitary path model |
| `lem-averaging-makes-a-finite-dimensional-representation-unitary` | Requires a continuous finite-dimensional representation of a compact Hausdorff group and normalized Haar measure (plus its stated choice premise); B_n is not compact. | QC25 counterexample/boundary row only; not used to unitize braid representations |
| `lem-qc-irrational-rotation-dense-on-circle` | Integer powers of an irrational circle rotation are dense. | QC26 Fibonacci PU(2) proof and B6 spectral-circle step |
| `thm-cartans-closed-subgroup-theorem`, `prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra` | Closed subgroups of finite-dimensional Lie groups are embedded Lie subgroups; tangent space is bracket closed. Both carry the explicit `AC_ω` assumption. | QC26 PU(2), SU(5), SU(8), and joint SU(5)×SU(8) density proofs |
| `ex-su-two-to-so-three-as-a-covering-homomorphism` | SU(2)→SO(3) has kernel {±1}; quotient identifies PU(2) with SO(3). | QC26 single-qubit density and determinant-one lift lemma |
| `thm-qc-exact-arbitrary-unitary-qsd-upper-bound` | Every finite-n unitary has a finite exact decomposition into arbitrary one-qubit gates and CNOTs, with the stated abstract gate-count bound; no target-entry bit-time or finite-precision decomposition cost follows. | QC26/QA-37 arbitrary-size encoded universality and separate cost coordinates |
| `def-qc-inverse-closed-dense-su2-gate-set`, `alg-qc-solovay-kitaev-unitary-compiler`, `thm-qc-solovay-kitaev-error-and-resource-bound`, `thm-qc-solovay-kitaev-bit-complexity` | Fixed finite inverse-closed dense SU(2) set plus certified base net; error/length theorem is SU(2) only; bit-time also requires polynomial-time Cauchy targets and exact algebraic entries. | QA-37 fixed-sector compiler, cost and bit-complexity boundary |
| `thm-qc-standalone-global-phase-invariance`, `thm-qc-controlled-global-phase-is-relative-phase` | Isolated scalar phase preserves uncontrolled output; control turns it into relative phase. | QC26 phase character; QA-37 phase-reference cost and fixed-sector cancellation |
| `def-qc-stabilizer-subgroup`, `def-qc-stabilizer-code-space`, `def-qc-stabilizer-syndrome-and-logical-operators`, `thm-qc-stabilizer-projector-and-dimension`, `thm-qc-stabilizer-distance-detection-and-correction` | Stabilizer binary rank defines the code dimension/syndromes/logicals; distance theorem corrects Pauli weight t when 2t is strictly below distance. | QC27 toric dimension, syndrome/logical, distance and recovery rows |
| `def-qc-square-planar-surface-code`, `thm-qc-square-planar-surface-code-distance-and-path-count` | Existing planar code uses boundary-dependent rough/dual distances, not periodic torus homology. | QC27-B planar/toric distinction counterexample |
| `def-qc-projective-measurement`, `thm-qc-projective-conditional-state`, `thm-qc-zero-probability-branch-has-no-conditioned-state`, `thm-qc-measurement-variation-at-most-trace-distance` | Finite projective measurement and zero branches; finite POVM total-variation distance bounded by trace distance. | QA-37 fusion instrument and end-to-end output error |
| `thm-qa-36-jrs-finite-adiabatic-bound` | Finite-dimensional C² Hermitian path, coherently followed constant-rank isolated band, full positive gap, derivative bounds, slow-time propagator; exact `A_m(s)` formula controls projector error and transition probability. | QA-37 adiabatic input, leakage and common error budget |

The mathematics also uses the root finite-dimensional operator norm/spectral theorem, finite stabilizer/Pauli representation and exact code recovery interfaces. No pure root mathematical claim depends on a physics postulate. The current root library has no separate topological-phase existence/stability theorem used here. The physics source materials serve only as contextual review and physics-side handoff, never as backward dependencies.

## Source reading and remaining obligations

Read `Nayak et al., arXiv:0707.1889` §II.A (PDF pp.3–6) for fusion, F/R, Ising/Fibonacci data; §II.B (pp.7–11) for topological computation, encoding, local/error caveats; §IV.A (pp.31–32) for Ising/Majorana braids; §IV.B.c (pp.53–57) for Fibonacci fusion paths, F/R matrices and braid gates; the universality discussion (pp.58–60); and the physical/existence/temperature limitations (pp.60–63). Read `Freedman–Larsen–Wang, quant-ph/0001108`, Theorem 2.1/2.2 setup and the complete Theorem 4.1 proof (§4, printed pp.17–21); its proof uses 5D/8D Jones blocks plus compact Lie representation classification, and is not a premise of the local certificate. Read `Kitaev, quant-ph/9707021`, §2 (printed pp.2–6) for the toric lattice, checks, gap and string algebra; no perturbative-stability claim was imported.

The two exact finite-field certificates were run: the selected 24×24 SU(5) minor is `17 mod 31`, and the deterministic selected 63×63 SU(8) minor is `22 mod 31`. Focused JSON parsing, new-row direct-dependency resolution, dependency-level, and same-page item-order checks found no issues among the 88 TQC rows; reported missing dependencies inherited from older inventory rows are outside this scope. The certificate scripts use integer arithmetic only. No production tests, broad library batteries, engine controls, hashes or publication gates were run.

The scaffold contains the local mathematical arguments and exact certificate recipes; their proposed production carriers still need authoring and independent review before acceptance. The general multiplicity-aware matrix pentagon/hexagon theorem is conditional only on the stated root associator/braiding axioms, and the finite Fibonacci specialization is directly checked in every nontrivial sector. No all-label Ising F/R table is claimed or used; Ising Clifford restriction is proved in the displayed three-σ sector and the explicitly defined Majorana/parity realization. The exact joint SU(5)×SU(8) density proof does not itself supply an efficient joint-block compiler or useful exhaustive-search word bound. A fixed-dimensional Solovay–Kitaev construction is an established-result authoring extension, not an open problem or premise in this scaffold. The exhaustive compiler terminates only for certified computable target data. Local Hamiltonian gap, locality and adiabatic error do not establish a realized anyon phase, its Berry/F/R identification, perturbation stability, or thermal protection; those remain contextual physical assumptions or a separate physics-side handoff.
