# Ordinary finite Jones index supplies bounded finite module data

**Current carriers:** `proposed-items/` contains the final native KaTeX proposals. Those carriers supersede this first mathematical working note, including its scalar-inner-product convention and order-normality discussion. The final carriers use the repository linear-first scalar convention and bounded-ball WOT normality, with a direct topology proof for the expectation.

Run: `non-ml-math-remaining-81-2026-10-18`. Isolated mathematical proposal;
no canonical file, run state, metadata, history, publication or acceptance edited.
Assume AC throughout. Arbitrary maximal orthogonal families use Zorn's lemma;
all limits below are nets unless a sequence is explicitly indicated. No
separability, irreducibility or extremality hypothesis is used.

## Integration order and exact proposed supplier IDs

1. `lem-tracial-standard-form-and-normal-functional-vectors` (below).
2. `lem-finite-factor-projection-comparison-and-normalized-trace` (below).
3. `lem-tracial-hilbert-module-dimension-and-finite-corners` (below).
4. `lem-finite-index-bounded-vector-pull-down` (below).
5. Replace the existing statement/proof of
   `lem-finite-right-n-module-frame-from-projection-model` by the concluding
   finite-frame theorem below. Its old coordinate identity remains valid but
   is now a consequence of ordinary finite index, not an input.

Definition order: define right normal Hilbert-space modules and their dimension
using the arbitrary amplification model in supplier 3; define ordinary Jones
index by `dim_N L²(M)`. Define a II1 inclusion simply as an inclusion of diffuse
finite factors with their normalized trace; expectation is the unique one
constructed in supplier 1. The complete C*-module model and its bounded
coordinates must be REMOVED from the finite-index hypotheses and supplied by
supplier 5. A new ordinary-index definition may precede the old extremal-data
carrier to avoid a dependency cycle. Suppliers 1–3 need no subfactor-data
carrier. Supplier 4 needs only the new ordinary-index definition and 1–3.

## 1. Standard form, positive normal functionals, expectation

### Statement

For a finite tracial von Neumann algebra `(A,t)`, left and right multiplication
on `L²(A,t)` are faithful normal representations, with `L(A)'=R(A)` and
`R(A)'=L(A)`. A vector `ξ∈L²(A)` defines a bounded map `a↦ξa` on `L²(A)`
if and only if `ξ` is represented by an element of `A`. Every positive normal
functional is `a↦〈ξ,aξ〉` for some `ξ∈L²(A)`. If `D⊂A` is a unital von
Neumann subalgebra, there is a unique normal faithful trace-preserving
conditional expectation `E_D:A→D`; it is the restriction of the orthogonal
projection onto `L²(D)` and is contractive and `D`-bimodular.

### Local proof

We use Hilbert inner products conjugate-linear in the first variable in this
proposal. Translate to the repository's linear-first convention by reversing
the two entries; none of the identities involving `t(x*y)` changes.

**Standard commutants.** Right multiplication satisfies
`||ax||₂≤||x|| ||a||₂`, and left multiplication has the analogous estimate.
Their ranges are von Neumann algebras: for example the unit ball of `L(A)`
is strongly closed: the unit ball of `A` is WOT compact. To obtain this
directly without a predual assumption, apply Banach–Alaoglu to the unit ball
of `B(K)` as bounded sesquilinear forms on its original carrier `K`;
`A` is WOT closed. Every standard-representation coefficient
`a↦t(b*ac)` is normal and therefore WOT continuous on this ball; arbitrary
`L²` coefficients follow uniformly by approximating both vectors by `A`.
Thus the image ball of `L(A)` is WOT compact and hence strongly closed.
The representation is faithful and isometric (the norm can be detected by
nonzero spectral projections of `a*a`). Its range is a norm-closed unital
C*-algebra. The published bounded-density supplier, applied to this range
and its bicommutant, now promotes closedness of its unit ball to
`L(A)=L(A)''`, so the whole range is a von Neumann algebra. This avoids
the invalid inference that every strongly convergent net is uniformly
bounded. The representation is normal by the coefficient calculation; Normality follows first on increasing positive nets
from normality of `t(b*·b)`, then on bounded nets by polarization. Let `LC`
be the bounded operators `L_ξ:a↦ξa` associated with vectors `ξ∈L²(A)`,
and let `RC` be the analogous right convolvers. These operators commute
with each other. Here is the limit argument, to avoid assuming that bounded
vectors belong to `A`: choose `a_n→ξ`, `b_m→η` in `L²` with `a_n,b_m∈A`.
For fixed `c,d∈A`, the coefficients of `a_n c b_m` have a joint limit,
because the trace identity writes them explicitly as
`〈d,a_n c b_m〉=〈a_n* d,c b_m〉`, an inner product of two convergent
Hilbert sequences, where `J(a)=a*`. Taking first the `n` limit or first the `m` limit
therefore gives the same result. If `L_ξ` and `R_η` are bounded, the two
iterated limits are respectively the coefficients of `L_ξR_η(c)` and
`R_ηL_ξ(c)`. Density of `A` proves commutation.

If `T∈R(A)'`, set `ξ=T1`. On `A`, `T(a)=T(R_a1)=R_aξ=ξa`, so `T=L_ξ`.
Thus `LC=R(A)'`; similarly `RC=L(A)'`. The preceding commutation gives
`LC⊂RC'=L(A)''=L(A)` by the bicommutant theorem. The reverse inclusion
is immediate. This proves both commutant identities and the bounded-vector
criterion. Notice that sequences approximate individual Hilbert vectors
regardless of whether `L²(A)` is separable.

**Positive-vector realization; no unproved Radon–Nikodym input.** Here are
functional analytic details underlying the normal-functional approximation
used next. For a concrete von Neumann algebra `Q⊂B(K)`, its normal
functionals form the quotient of the trace-class operators on `K` by the
annihilator of `Q`, with dual `Q`. Indeed the pairing is
`(h,x)↦Tr(hx)`; the dual of trace class is `B(K)` (proved by applying a
bounded functional to rank-one operators and using the resulting bounded
sesquilinear form), and the annihilator theorem identifies the quotient's
dual with the ultraweakly closed space `Q`. A WOT-closed linear space is
ultraweakly closed. For completeness, order-normal positive functionals
are exactly the positive members of this quotient: the usual bounded-ball
WOT continuity characterization gives approximation in norm by finite
matrix coefficients. Explicitly, continuity at zero on the unit ball gives,
for every `ε>0`, finitely many coefficients whose common kernel cuts the
unit ball to a set on which the functional has modulus at most `ε`.
Hahn–Banach, applied to restriction to that kernel, gives distance at most
`ε` from their finite-dimensional span. The converse follows from monotone
convergence of vector coefficients and a norm approximation. This argument
also proves the bounded-ball characterization if normality is taken in that
convention, as in the existing trace definition.

The cone of finite sums of vector positive functionals is norm dense in the
positive normal cone. To see this without assuming a positive extension
lemma, separate a positive normal functional from its norm-closed convex
cone if it were outside. By the quotient-duality just established, a
separating real functional is evaluation at a self-adjoint `x∈Q`.
Nonnegativity on all vector functionals says `x≥0`; positivity of the
functional contradicts the strict separation. This proves the assertion.
Apply this to the standard representation of `A`. Approximate each of the
finitely many vectors in such a finite sum by elements `a_j∈A` in `L²`;
`||ω_ξ-ω_η||≤||ξ-η||₂(||ξ||₂+||η||₂)` controls the error. The sum becomes
`t(b·)`, where `b=Σ a_j a_j*≥0`, and hence the single positive vector
`b^(1/2)∈A` realizes that approximating functional.

We give the needed completeness estimate rather than assuming square-root
continuity for unbounded operators. For `a,b∈A_+`, let `p,q` be the positive
and negative spectral projections of `a-b`; then
`t((a²-b²)p)≥t((a-b)²p)` because the difference is
`2t(b^(1/2)(a-b)p b^(1/2))≥0`. Interchanging `a,b` gives
`t((b²-a²)q)≥t((a-b)²q)`. Addition yields
`||a-b||₂²≤(ω_a-ω_b)(p-q)≤||ω_a-ω_b||`.
Thus positive bounded vectors realizing a norm-Cauchy sequence of positive
normal functionals are Cauchy in `L²`. Their limit `ξ` realizes the desired
functional by the previous upper estimate. This completes the positive
normal functional realization proof. The spectral projections used here
are bounded spectral calculus in `A`, not an unbounded-operator theorem.

**Little dominated Radon–Nikodym lemma.** If `0≤φ≤C t`, Hilbert Riesz
applied to `φ` gives a vector `h∈L²(A)` with `φ(a)=〈h,a〉`; this is bounded
because `|φ(a)|²≤φ(1)φ(a*a)≤Cφ(1)||a||₂²`. The Cauchy–Schwarz
inequality for the positive functional gives
`|φ(ab*)|≤C||a||₂||b||₂`. Consequently the convolution map for `h` has
norm at most `C`: its coefficients on `a,b∈A` are `φ(ab*)`, up to the
adjoint convention. By the bounded-vector criterion, `h∈A`. Positivity of
`φ` and `Ct-φ` implies `0≤h≤C1`: test against positive spectral
projections of the self-adjoint element `h`, with self-adjointness first
following from `φ(a*)=overline{φ(a)}` and faithfulness of the pairing.
Uniqueness follows by testing the difference against its adjoint.

**Expectation.** For `0≤x≤C1` in `A`, the functional `d↦t(xd)` on `D`
is between zero and `Ct|_D`; the dominated lemma yields the unique
`E_D(x)∈D` between zero and `C1` satisfying
`t(E_D(x)d)=t(xd)` for every `d∈D`. Extend linearly using differences of
positives; uniqueness of the pairing makes the extension well-defined.
The pairing identity proves `E_D(d)=d`, bimodularity, and trace preservation.
It also proves that `E_D` is the `L²` orthogonal projection on `A`.
Faithfulness follows from trace preservation. If `x_i↑x`, then
`E_D(x_i)↑y≤E_D(x)` and `t(y)=sup_i t(x_i)=t(x)=t(E_D(x))`, so
faithfulness gives equality; hence `E_D` is normal. For arbitrary `x`, the
projection estimate applied to `E_D(x)*x` gives
`E_D(x)*E_D(x)≤E_D(x*x)`: alternatively expand
`E_D((x-E_D(x))*(x-E_D(x)))≥0`. Thus `||E_D(x)||≤||x||`.
Uniqueness follows from the pairing identity, which every trace-preserving
bimodule projection has. All these arguments work for nonseparable algebras.

## 2. Projection comparison, diffuse corners, unique normalized trace

### Statement and local proof

In a factor `Q`, any two projections `p,q` are comparable by subequivalence.
If `Q` has a faithful normal finite trace `s`, then
`p≲q` if and only if `s(p)≤s(q)`, and equality means equivalence.
Every nonzero corner of a diffuse factor is again a diffuse factor. A diffuse
finite factor has a unique normalized tracial state. Finite matrix
amplifications of a II1 factor and all their nonzero corners are II1 factors.

Use the actually read canonical supplier
`lem-polar-decomposition-and-nonzero-partial-isometries-in-factors`:
nonzero projections in a factor have nonzero equivalent subprojections, and
polar decompositions stay in the algebra. Choose a maximal family of partial
isometries with pairwise orthogonal initial projections under `p` and
pairwise orthogonal final projections under `q`. Their strong sum `v` is a
partial isometry. If both `p-v*v` and `q-vv*` were nonzero, the canonical
supplier supplies another nonzero partial isometry between them, contradicting
maximality. This proves comparison. In the finite-trace situation, if
`s(p)≤s(q)` and comparison gives the reverse embedding, its leftover in
`p` has trace at most zero, and faithfulness kills it. The equality clause
follows identically. Only finite-trace comparisons are needed below; the
false claim that arbitrary infinite-trace projections are equivalent in a
nonseparable semifinite factor is NOT used.

For a corner `pQp`, a nontrivial central projection `r` would have
`rQ(p-r)=r(pQp)(p-r)=0`, contradicting the canonical nonzero-corner supplier.
The center has no nontrivial projections, so spectral calculus makes it
scalar. A minimal projection in `pQp` is also minimal in `Q`, since every
subprojection of it belongs to the corner. This proves diffuseness.
For a matrix amplification, commuting with all matrix units makes its center
scalar when `Q` is a factor. It is diffuse: if it had a minimal projection
`r`, a nonzero corner linking `r` to `e_11` supplies a nonzero subprojection
of `e_11` equivalent to `r`; that would be a minimal projection in
`e_11 M_k(Q)e_11≅Q`, a contradiction. Its matrix trace is faithful and
normal by the finite sum formula.

For uniqueness of trace, first bisect every nonzero projection `p` in a
diffuse factor into equivalent halves. A maximal orthogonal family of pairs
of equivalent nonzero projections under `p` exhausts `p`: a nonzero
remainder splits into two nonzero projections, between which the canonical
supplier supplies another pair. The sums of the first and second members
are equivalent and sum to `p`. Iterate to partition `1` into `2^n`
equivalent projections. Every normalized tracial state takes value `2^-n`
on these. For a projection `q`, comparison with the successive partial sums
traps the value of every tracial state between `k/2^n` and `(k+1)/2^n` for
some `k` (equality at an endpoint causes no difficulty). Let `n→∞` to get
uniqueness on projections. Finite spectral step approximations give norm
density of their linear span in the self-adjoint part; positivity makes
states bounded, so uniqueness holds everywhere. No normality of the second
tracial state is required.

## 3. Ordinary right-Hilbert-module dimension

### Statement

For a finite tracial algebra `(N,t)`, every Hilbert space `H` with a normal
unital right `N` action is right-unitarily isomorphic to
`P(ℓ²(I)⊗L²(N))`, where `I` is an arbitrary set and
`P∈B(ℓ²(I)) bar⊗ N` is a projection. Its bounded right-linear operator
algebra is the corner `P(B(ℓ²(I)) bar⊗N)P`. The formula
`Tr_N(T)=Σ_i t(T_ii)` for positive `T` defines a faithful normal
semifinite trace on the ambient algebra and its corner. Transport to `H`
is independent of the model; its value at the identity defines `dim_N H`.
If `N` is a II1 factor and this dimension is finite, `H` is isomorphic to
`p L²(N)^k` for some finite `k` and `p∈M_k(N)`, with
`dim_N H=(Tr_k⊗t)(p)`.

### Local proof

Choose a maximal orthogonal family of nonzero cyclic right submodules of
`H`, using Zorn; their direct sum exhausts `H`, since its orthogonal
complement is reducing and a nonzero vector there generates another one.
For a cyclic module with generator `η`, its vector functional on `N^op` is
positive normal. Supplier 1 gives a vector `ξ∈L²(N)` with the same
functional. The map `ηn↦ξn` is isometric (the squared norms coincide on
`nn*`), and extends to a right-module unitary onto the closure of `ξN`.
That closure is reducing, so its projection commutes with right `N`; by
supplier 1 it is a projection in left `N`. Taking the direct sum gives a
diagonal projection model over the arbitrary index set `I`.

For an arbitrary projection model, the commutant of the right action is
precisely the corner claimed: each matrix entry commutes with the right
regular action, hence belongs to left `N` by supplier 1; conversely any
bounded matrix with these entries commutes with it. Passing to a reducing
range compresses this commutant. This is also a concrete construction of
the tensor product notation used in the statement.

On positive matrices put `Tr_N(T)=sup_{F⊂I finite} Σ_{i∈F}t(T_ii)`.
Additivity follows by interchanging two directed suprema, faithfulness
because zero diagonal positive entries force zero off-diagonal entries by
positivity of every two-by-two compression, and normality follows by
interchanging the supremum over finite `F` with an increasing operator net.
For a bounded matrix `S`,
`Tr_N(S*S)=Σ_{i,j}t(S_ji*S_ji)=Σ_{i,j}t(S_ji S_ji*)=Tr_N(SS*)`;
strong convergence of finite coordinate sums and normality justify the
nonnegative sums. This establishes the trace property. Semifiniteness:
with coordinate projection `f_F`, the positive elements
`T^(1/2)f_F T^(1/2)≤T` increase strongly to `T` and have finite trace at
most `||T|| |F|`. For a corner, compress these approximants by `P`, or
apply the same calculation to `T∈PAP`; they remain below `T` and have
finite trace. Thus the corner trace is semifinite as well.

If `U` is a right-module unitary between two models, its zero extension to
the two ambient amplifications is a rectangular partial isometry with
entries in `N`. In the amplification by the disjoint union of their index
sets, the trace identity `Tr_N(S*S)=Tr_N(SS*)`, applied to
`S=U T^(1/2)`, shows equality of transported traces for every positive
corner element `T`. This proves independence and also invariance of dimension.
For a bounded right-linear `V:L²(N)→H`, the same rectangular computation
gives `Tr_H(VV*)=t(V*V)`; this identity in particular normalizes the trace
of a standard embedded copy of `L²(N)` to one.

Now suppose `N` is a II1 factor and `Tr_N(P)=λ<∞`. The ambient
amplification is a factor: its commutant's center can be computed with
coordinate matrix units and entries in `N`, exactly as for finite matrices.
Enlarge `I` by finitely many unused coordinates if necessary, and take a
finite coordinate projection `f` of trace `k≥λ` (take `k>λ` to avoid an
endpoint). The same maximal-partial-isometry comparison proof in supplier 2
applies in this semifinite factor. In the case of finite-trace projections,
trace comparison is valid by that proof, without any separability.
Consequently `P≲f`, giving `v*v=P`, `vv*=p≤f`. Multiplication by `v`
is the required right-module unitary and preserves the trace. Since
`fAf≅M_k(N)`, this is the asserted finite model. The case `λ=0` gives
`H=0` by faithfulness. The nonzero corners used here are diffuse factors
by the proof in supplier 2, which applies to this amplification too: a
minimal projection would link to a coordinate corner and contradict the
diffuseness of `N`.

## 4. Finite index gives bounded pull-down

### Statement

Let `N⊂M` be II1 factors and let `H=L²(M,τ)`. Define ordinary Jones
index by `λ=dim_N H<∞` using supplier 3. Let `e` be the orthogonal
projection onto `L²(N)`. Then
`B=(right N)'=W*(M,e)` is a II1 factor with canonical unnormalized trace
`Tr_B(1)=λ`, `Tr_B(e)=1`,
`Tr_B(xey)=τ(yx)`, and `Tr_B|_M=λτ`.
Its normalized trace-preserving expectation `F:B→M` satisfies
`F(xey)=λ^-1 xy`. Every `T∈B` has a unique bounded `x∈M` such that
`Te=xe`; necessarily `x=λF(Te)`. In particular every right-`N` bounded
vector in `H` is represented by an element of `M`.

### Local proof

Supplier 1 produces `E_N`. Orthogonal projection gives
`exe=E_N(x)e` directly on the dense subspace `M`, and `Je=eJ` since
`L²(N)` is invariant under the conjugation `J`. If an element of `M'`
commutes with `e`, supplier 1 writes it as `R_a`, `a∈M`; applying the
commutation equation to `1` says `a=E_N(a)∈N`. Conversely right `N`
commutes with both `M` and `e`. Bicommutants therefore give
`W*(M,e)=(R(N))'=B`. Supplier 3 makes this a finite-trace factor;
it is diffuse because it has the diffuse corner `eBe=N e`, or by its
finite matrix corner model. To verify the corner assertion independently,
restriction of `T∈eBe` to `L²(N)` commutes with right `N`, so is left
multiplication by some `n∈N` by supplier 1. Hence `T=ne`.

Let `V_x:L²(N)→H` be `n↦xn`. Then `V_x V_y*=xey*` and
`V_y*V_x=E_N(y*x)` as a left multiplier on `L²(N)`. The rectangular
trace calculation from supplier 3 gives
`Tr_B(xey)=τ(yx)` by polarization. In particular `Tr_B(e)=1`.
Its normalized restriction `λ^-1 Tr_B|_M` is a tracial state, hence equals
`τ` by supplier 2. Supplier 1 applied to the finite tracial algebra
`(B,λ^-1 Tr_B)` gives the expectation `F`. For `a∈M`,
`λτ(aF(e))=Tr_B(ae)=τ(a)`. Nondegeneracy of the trace pairing gives
`F(e)=λ^-1 1`, and bimodularity gives the displayed formula for `F(xey)`.

The *-algebra `A₀=span MeM` is strongly dense in `B`. One way to see this
with no frame assumption is that its WOT closure is a two-sided ideal of
`B` and contains `e`. Its central support is `1`: the closure of `BeH`
contains `Me1=M`, dense in `H`. Thus the ideal is all of `B`. Equivalently,
one can use `(M∪{e})''=B` and that this ideal has zero annihilator.
The bounded density argument supplied just below gives, for each `T∈B`, a net `a_i∈A₀` converging
strongly to `T` with a common operator bound (apply it first to the
C*-closure of `A₀`, then approximate each resulting bounded element in
norm by `A₀`, allowing a fixed arbitrarily small bound slack). Writing
`a_i=Σ x_rey_r` gives `a_i e=x_i e`, where
`x_i=Σ x_r E_N(y_r)∈M`. The expectation formula shows
`x_i=λF(a_i e)` and `||x_i||≤λ||a_i||`. A bounded subnet has an
ultraweak limit `x∈M`; the matrix coefficients of left multiplication on
`L²(M)` are normal, so `x_i e→xe` weakly. But `a_i e→Te` strongly,
thus `Te=xe`. Applying `F` to this identity gives `x=λF(Te)`;
uniqueness also follows by applying `xe` to `1`. This proof does not
silently pass an unbounded inverse through a weak limit.

**Bounded density argument used above.** If a self-adjoint *-algebra has
strongly dense C*-closure `C` in a von Neumann algebra, the self-adjoint
part is strongly dense in the self-adjoint part: it is WOT dense by
symmetrization, and WOT/SOT closures of convex sets coincide by real
Hahn–Banach (a SOT continuous real functional is a finite sum of matrix
coefficients). For a self-adjoint contraction `x` with `||x||<1`, put
`y=x(1-x²)^(-1/2)` and choose self-adjoint `a_i∈C` converging strongly
to `y`. Resolvent identities give
`(a_i±i)^(-1)→(y±i)^(-1)` strongly; their norms are at most one.
Uniform approximation by polynomials in these resolvents gives strong
convergence for every function in `C_0(R)`. The same holds for every
bounded continuous function: choose a compactly supported cutoff equal to
one on `σ(y)`; its evaluation at `a_i` converges strongly to one and
controls the tails, while the compactly supported part is already covered.
Apply this to `f(t)=t/sqrt(1+t²)` to get contractions
`f(a_i)∈C` converging strongly to `x`. Approximation of boundary
contractions by strict contractions completes the self-adjoint unit ball.
For an arbitrary contraction `T`, apply this self-adjoint result in two-by-
two matrices to `[[0,T],[T*,0]]` and extract the upper right entries; this
works even if the approximating matrix is not off-diagonal. Thus the unit
ball of `C` is strongly dense in that of `B`. Approximating members of
`C` in norm by `A₀` with arbitrarily small slack gives exactly the
uniformly bounded net used above. The argument for nonunital `C` works
because the function `f` producing the actual approximants vanishes at
zero; auxiliary cutoffs may be evaluated in the unitization.

If `ξ` is right-`N` bounded, its bounded map `V_ξ:L²(N)→H` extends by
zero on `L²(N)^⊥` to `T=V_ξ e∈B`. Pull-down gives `T=xe`, so
`ξ=T1=x`. This proves equality of the right-`N` bounded vectors and `M`.

## 5. Finite bounded frame and complete module model (replacement carrier)

### Statement

Under the ordinary finite-index hypotheses of supplier 4 there are a finite
integer `k`, elements `u_1,…,u_k∈M` and a projection `p∈M_k(N)` such that

- `Σ u_j e u_j*=1` on `L²(M)`;
- `x=Σ u_j E_N(u_j*x)` for all `x∈M`;
- `Σ τ(u_j*u_j)=λ` and `Σ u_j u_j*=λ1`;
- `U:M→pN^k`, `U(x)=(E_N(u_j*x))_j`, is an onto right-module unitary
  for the `N`-valued inner product `E_N(x*y)`;
- `p_ij=E_N(u_i*u_j)` and `(Tr_k⊗τ_N)(p)=λ`.

In particular `M` is complete in the norm `||E_N(x*x)||^(1/2)` and the
bounded coordinate representatives are exactly `u_j=U^-1(p ε_j)`.
Furthermore `||x||≤sqrt(λ)||E_N(x*x)||^(1/2)` for `x∈M`.

### Local proof

In the finite factor `B` choose orthogonal projections `q_1,…,q_k` summing
to `1` with `q_j≲e`. This is a finite construction: while the remainder
has trace greater than `1`, comparison lets one remove a projection
equivalent to `e`; after at most `floor(λ)` such removals, the remainder
has trace at most `1` and hence is subequivalent to `e`. If `λ` is an
integer, the final remainder can be zero and is discarded. Since
`Tr_B(e)=1≤Tr_B(1)=λ`, this also proves `λ≥1`.
Choose partial isometries `v_j` with `v_jv_j*=q_j` and
`v_j*v_j≤e`; then `v_j=v_je`. Pull-down writes `v_j=u_j e` with
`u_j∈M`. Thus `Σu_j e u_j*=1`. Applying this to `x∈M` proves the
frame identity. Taking `Tr_B` gives `Στ(u_j*u_j)=λ`; applying `F`
to the same identity gives `Σu_j u_j*=λ1`.

Let `V:L²(N)^k→H` be `V((n_j))=Σu_j n_j`; then
`VV*=1` and `V*V=p=(E_N(u_i*u_j))_ij`. Hence `p=p*=p²` and
`U=V*` is an isometry on Hilbert spaces with image `pL²(N)^k`.
On bounded elements, `U(M)⊂pN^k`, and for each `a∈pN^k`,
`x=Σu_j a_j∈M` satisfies `U(x)=pa=a`, proving bounded-module
surjectivity. Directly,
`〈U(x),U(y)〉_N=Σ E_N(x*u_j)E_N(u_j*y)=E_N(x*y)`
by the frame identity. Thus this is an `N`-valued isometry, not merely
an `L²` isometry. The finite column module `pN^k` is complete: its
norm is the operator norm of its column in the C*-algebra of `(k+1)`-by-
`(k+1)` matrices over `N`, and its range is closed because `p` is a
bounded idempotent. This proves the required completeness. Matrix trace
gives `(Tr_k⊗τ_N)(p)=Στ(u_j*u_j)=λ`, and
`V(p ε_j)=VV*V ε_j=u_j` gives the specified coordinate compatibility.

Finally, `xex*≤||E_N(x*x)||1_B`: its norm is
`||V_xV_x*||=||V_x*V_x||=||E_N(x*x)||`, and it is positive.
Applying positive `F` yields
`λ^-1 xx*≤||E_N(x*x)||1_M`, proving the norm estimate. This also gives
an independent completeness proof by norm equivalence, since
`||E_N(x*x)||^(1/2)≤||x||` and `M` is operator-norm complete.

## Explicit foundational scope and reuse

The only specifically operator-algebraic published local supplier reused is
`lem-polar-decomposition-and-nonzero-partial-isometries-in-factors`, read in
full, including its proof. Standard bounded spectral calculus, Hilbert Riesz,
the bicommutant theorem, Hahn–Banach and Banach–Alaoglu (bounded density is proved above)
must be listed as local prerequisite IDs when these proposals become items;
the new proofs above do not assume Hilbert-module classification, finite
bounded basis existence, noncommutative Radon–Nikodym, trace uniqueness,
expectation, or pull-down as axioms. In particular, the trace-class quotient
paragraph explicitly identifies its functional analytic ingredients instead
of asserting the noncommutative Radon–Nikodym theorem.
