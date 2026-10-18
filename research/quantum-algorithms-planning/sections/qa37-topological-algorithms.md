# QA37: topological quantum algorithms and braid compilation

Status: expanded draft scaffold, 2026-10-16. QA37 consumes the QC25–QC27
interfaces and the existing QC12 compiler; QC does not depend on QA. Every
claim below is mathematical and conditional on the exact input/access model.
An anyon model is not an empirical realization.

## Finite algorithm model

An input instance specifies a finite ordered list of simple charge labels, a
fixed total charge, an orthonormal fusion-tree basis, an initial encoded state
or a costed preparation procedure, a finite braid-word alphabet with inverse
letters, a finite fusion-channel measurement, and a classical output relation.
The task has a finite promise set and a specified error threshold. The
procedure returns a classical word or measurement outcome; it does not return
an amplitude table or an unencoded state vector.

The cost contract reports separately: number of anyon labels in the finite
fusion-space instance, braid-generator letters, preparation operations and
ancillas, fusion measurements and classical outcome bits, classical compiler
bit operations, and any Hamiltonian evolution time. A braid generator is one
logical letter; its physical time and error rate are outside that abstract
count. Controlled braid access includes its scalar phase reference. A
projective matrix approximation cannot silently supply a coherently controlled
gate.

For a channel label `c`, let `P_c` be the orthogonal projector onto that fusion
outcome. The mathematical measurement law is
`p(c)=⟨ψ,P_cψ⟩`; if `p(c)>0`, the conditional state is
`P_cψ/√p(c)`, and if `p(c)=0` no normalized conditional state is defined.
For a mixed state use the finite POVM rule from QC04. QA37 proves each
normalization and conditional update from the matrix definitions rather than
from a physical measurement postulate.

## Fibonacci compilation and costs

On the QC26 three-`τ`, total-`τ` qubit, let `B₁,B₂` be the exact Fibonacci
braid matrices and define determinant-one lifts
`\widehat B_j=e^{iπ/10}B_j`. Their inverses are included. QC26 proves the
projective image dense; the finite-center covering `SU(2)→PU(2)` then implies
the generated determinant-one subgroup is dense in `SU(2)`. Fix a finite
base-net certificate for this inverse-closed gate set. Density guarantees
existence of a certificate but does not compute one; it is explicit fixed
compiler data.

For a one-qubit circuit with `G>0` target gates `U_1,…,U_G∈SU(2)` and a
rational total operator-error budget `ε`, set
`δ=min(ε/G,η₀)`, where `η₀` is the certified base-net radius, and compile
each `U_j` to `δ` with the published SU(2) Solovay–Kitaev compiler. The exact
theorem requires a fixed finite inverse-closed dense gate set, a certified
finite base net, a target in `SU(2)`, and a positive rational tolerance no
larger than the base-net radius. The resulting length is
`O(log^{3.97}(1/δ))` per target; total braid length is
`O(G log^{3.97}(1/δ))`. When `ε/G≤η₀`, this is
`O(G log^{3.97}(G/ε))`; otherwise the base-net word has aggregate error at
most `Gη₀<ε`. The finite-precision bit-time theorem additionally requires a
polynomial-time Cauchy name for every target and algebraic gate entries
supplied by exact polynomials and isolating intervals. Without those input
conditions, only the theorem's exact-real/gate-count statement is claimed.
If `G=0`, the algorithm returns the empty braid and uses no compiler calls.

The product error is at most `Σ_j ε/G=ε`: expand the difference between the
ideal and compiled products as a telescoping sum and use unitary invariance of
operator norm. For a fixed initial density operator, the final trace distance
is at most this operator error, and QC06's measurement-variation theorem
bounds the output total-variation distance by the trace distance. The result
therefore gives a complete end-to-end output-distribution guarantee for the
stated one-qubit task.

For the fixed-sector compiler, a word of exponent sum `k` in the
determinant-one lifts `\widehat B_j=e^{iπ/10}B_j` differs from the physical
word by the known scalar `e^{−iπk/10}`. In the six-strand block compiler, the
physical categorical word is `R_1^k` times its normalized word. Each is one
common scalar on the entire fixed-charge fusion space; it leaves uncontrolled
output probabilities and leakage unchanged. If a control register branches
between doing and not doing a braid, or different total-charge sectors are
coherently occupied, it is relative and must be carried or corrected. The
published QC phase supplier gives an explicit control-qubit witness.

## Encoded registers, compilation, and measurement boundaries

QC26 proves that the closure of the normalized simultaneous six-anyon braid
image in `U(5)×U(8)` contains `SU(5)×SU(8)`. The two blocks are the fixed
local total charges `a=1,τ`, with fusion-space dimensions 5 and 8; the claim
uses both exact Lie-rank certificates and the joint subdirect-product proof.
For adjacent triples of Fibonacci `τ` anyons, fix each triple's total charge
to `τ`. Their computational sector is `C⁴` in both local total-charge blocks.
If `U∈U(4)` and `λ=(det U)⁻¹`, then
`T_1=U⊕λ∈SU(5)` and
`T_τ=U⊕diag(λ,1,1,1)∈SU(8)`. The computational bases are identified by the
same ordered pair of three-anyon fusion paths in both blocks. Joint density
therefore gives one normalized braid with operator error at most `δ` in both
blocks. With `P_code` the projector onto the two-triple computational space, identify
its range with `C⁴`. The logical-block error
`||P_codeVP_code|_{C⁴}−U||` and leakage amplitude
`||(I−P_code)VP_code||` are each at most `δ`. For a physical braid, the known common
`R_1^k` scalar is matched in the logical error and has no effect on leakage.
It is global on the full fixed-total-charge space; it becomes relative under
coherent control and must be tracked or corrected.

For `n≥2` triples with total register charge `c`, fusion-tree reassociation
gives the full ambient decomposition
`⊕_{a=1,τ}V(τ⁶→a)⊗V(a⊗τ^(3n−6)→c)`. The second factor retains every physical
spectator path, including the two-dimensional internal multiplicity of each
spectator triple. A local six-strand braid acts as
`⊕_a ρ_a(b)⊗I`. Its ideal extension
`W(U)=⊕_a T_a⊗I_{V(a⊗τ^(3n−6)→c)}` is unitary, preserves the triple code,
and implements `U` on the selected adjacent logical pair and identity on all
spectators. Tensoring with identity and taking orthogonal direct sums preserve
the maximum operator-norm bound, so the actual braid is within `δ` of `W(U)`
on the entire ambient space, including states with previous leakage. Its
logical-block error and leakage amplitude are each at most `δ`. For `n=1`,
the corresponding whole-space decomposition is
`⊕_{a=1,τ}V(τ³→a)⊗V(a⊗τ^(3n−3)→c)`.

Single-qubit compilation requires a separate leakage argument because the
proved one-qubit density statement is on the local total-`τ` sector only. For
a compiled braid on one triple, decompose the full space into local total
charge `b=1,τ`. Define its ideal extension to equal that same determinant-one lifted word
action on the total-1 block `V(τ³→1)⊗V(1⊗τ^(3n−3)→c)`, and to equal the target one-qubit
matrix (with its matched projective phase) tensored with identity on the
spectators in the total-`τ` block. The extension is unitary and preserves the
triple code. The braid and its extension agree on total charge 1, and differ
by at most the certified single-qubit tolerance on total charge `τ`; hence
the same tolerance bounds their operator-norm difference on the entire
ambient fixed-charge space. This makes telescoping valid even after prior
leakage, without asserting density or universality on the one-dimensional
total-1 sector.

A fixed-`n` target in `U(2^n)` has a finite exact decomposition into arbitrary
one-qubit gates and CNOTs by the published QC exact-QSD supplier. Replace each
one-qubit U(2) gate by its SU(2) representative and store the removed scalar;
for an uncontrolled fixed-charge circuit the product scalar is global. Compile
each representative with the finite inverse-closed SU(2) Solovay–Kitaev
compiler and each adjacent two-qubit gate with the dovetailed joint B6
compiler, assigning rational tolerances `δ_j` whose sum is at most `ε`. The CNOT targets can be
conjugated or combined with encoded SWAP targets as needed to place any pair
of wires adjacently; each such target is a `U(4)` target covered by the same
joint-block theorem. Every ideal extension preserves the code and implements
the corresponding QSD gate there. Unitary telescoping bounds the full ambient
operator error by `Σ_jδ_j≤ε`; for every initially encoded unit vector, the
projective logical-vector error and leakage are consequently at most `ε`,
uniformly over the spectator fusion state. Thus every finite `n`-qubit unitary
is arbitrarily accurately braid-approximable in projective norm in the stated
triple encoding. All phase metadata must be retained if the compiled circuit
is used under coherent control.
This is an existence/universality claim, not an efficient scalable compiler.

The exhaustive joint B6 compiler takes rational `δ>0`, targets
`(T_1,T_τ)∈SU(5)×SU(8)` with certified Cauchy names, and exact algebraic
normalized braid matrices. At finite stage `s`, it enumerates every braid
word of length at most `s`, refines all needed entries to certified precision
`2⁻ˢ`, and computes certified upper bounds for both operator-norm distances
(including the propagated entrywise arithmetic error). It returns only when
both bounds are strictly below `δ`. Each stage is finite; joint density gives
a word strictly inside tolerance, so a sufficiently refined stage certifies
and returns it. Dovetailing word length and precision prevents a sequential
search from becoming stuck on one word. This proves termination for
computable targets and algebraic gate data, with no useful word-length or
classical-time bound. The one-qubit SK part retains its certified base-net,
exact target, inverse-closed density, and target-Cauchy-name hypotheses; its
published braid-length bound applies only to those SU(2) gates. The exact QSD
gate-count result has no finite-precision decomposition-time guarantee.
Efficient joint SU(5)×SU(8) compilation and physical braid duration remain
separate cost obligations. No exact leakage-free entangler is assumed.

A measurement-and-feed-forward scheme has its own outcome tree,
zero-probability branches, ancilla preparation, classical processing, and
failure probability; these are counted and proved rather than hidden inside
“topological measurement.” Ising braiding is a counterexample to the blanket
universality claim: its braid-only logical gates normalize the Pauli group and
remain Clifford.

## Gapped adiabatic model versus physical claims

An abstract adiabatic braid input consists of a finite-dimensional Hilbert
space, a `C²` path `H(s)=H(s)^*` for `s∈[0,1]`, a coherently followed
constant-rank `m≥1` spectral projection `P(s)`, a full gap `g(s)>0` to the
complement, and runtime `T>0` in `iU_T′(s)=T H(s)U_T(s)`, `U_T(0)=I`. The
published finite JRS theorem gives

`A_m(s)=T⁻¹[m||H′(0)||/g(0)² + m||H′(s)||/g(s)² + ∫₀ˢ(m||H″(r)||/g(r)² + 7m√m||H′(r)||²/g(r)³)dr]`

and proves `||U_T(s)P(0)U_T(s)^*−P(s)||≤A_m(s)`; for a unit vector in the
initial band, transition probability out of the band is at most `A_m(s)²`.
QA37 requires `A_m(1)≤ε_ad` before using the projector error `ε_ad`, and
uses the squared bound when budgeting transition probability. It then
composes compilation, adiabatic and measurement errors only after converting
them to a common output metric.

A local Hamiltonian model must separately state a finite lattice, an
interaction range, and a uniform bound on the sum of interaction norms at
each site. Even these hypotheses do not establish that a material realizes
the target anyon theory, that the low-energy band has the required fusion
rules, or that its Berry/Wilczek–Zee transport equals the categorical `F/R`
braid matrices. Those identifications are physical/model inputs. A positive
gap and locality are not by themselves a proof of topological protection;
local indistinguishability and stability assumptions must be stated and
proved in the chosen family. No experimental, material-existence, or
temperature-lifetime claim is a logical supplier here.

## Exact QA37 obligations

The proposed A inventory covers the finite task and promise; fusion-tree
input, braid-letter and measurement interfaces; Fibonacci single-qubit
compilation; termination/error/length and finite-precision conditions;
product/output error; controlled-phase tracking; the gapped-path/JRS bound;
the combined error budget; joint two-qubit block search; and arbitrary-size
triple-encoded circuit approximation with spectator-safe logical/leakage
bounds. Efficient joint-block compilation and physical realization remain
separate cost/model obligations. The B page contains a worked Fibonacci
compilation budget, a fusion measurement with positive- and zero-probability
branches, an Ising Clifford limitation, and a controlled global-phase
counterexample. None of the B examples is a supplier.
