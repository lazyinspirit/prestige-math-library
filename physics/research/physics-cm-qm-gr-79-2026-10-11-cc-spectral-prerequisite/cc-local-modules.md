# CC local spectral modules: proposed research, not acceptance

This document proves the operator-theoretic replacements below under ZF+CC.
It does **not** prove the complete Coulomb radial resolution. The remaining
radial analytic obligation is specified in `findings.md`. No production
supplier, contract, manifest, import, readiness decision or native history is
changed. In particular this research does not spend or reset quantum-owner
review rounds.

## 1. Direct Coulomb self-adjointness, avoiding general Kato–Rellich

Use the explicit Plancherel transform, weak-derivative Fourier multipliers,
the Sobolev Fourier characterization and the three-dimensional Hardy bound.
The maximal real multiplier is self-adjoint: truncation to {|a|≤n} proves
domain density, and testing its adjoint identity on that set identifies the
adjoint vector with a times the original vector. Thus H0=F*|p|²F is
self-adjoint on H² without a general spectral theorem.

For u in H², Hardy and Fourier Cauchy–Schwarz give

    ||u/r||₂ ≤ 2||∇u||₂ ≤ 2 sqrt(||u||₂ ||H0 u||₂).

For μ>0, R0(±iμ)=F*(|p|²∓iμ)^(-1)F is an explicit two-sided inverse,
||R0||≤μ^(-1), and ||H0 R0||≤1. Therefore

    ||γ M R0(±iμ)|| ≤ 2γ/√μ < 1  when μ>4γ².

For C=H0−γM on H² the factorization

    C−z = (I−γMR0(z))(H0−z)

has an invertible first factor, with inverse its norm-convergent Neumann
series. Both C±iμ are onto. C is symmetric and densely defined. If y is
in D(C*), solve (C−iμ)x=(C*−iμ)y; the difference y−x belongs to
ker(C*−iμ)=ran(C+iμ)^perp={0}. Hence C*=C, including domains. This proves
the exact H² operator required by source40. The lower bound follows directly:

    <Cu,u> = ||∇u||²−γ∫|u|²/r ≥ ||∇u||²−2γ||∇u|| ||u|| ≥ −γ²||u||².

This crude bound is sufficient; no optimal hydrogen ground energy is inferred.
CC is spent in Hardy/Sobolev density and Hilbert completion/closure suppliers,
not in choosing arbitrary spectral resolutions. The published
`thm-self-adjointness-range-criterion` itself has a CC contract. The proof above
also supplies its exact instance directly.

## 2. PVM and unitary calculus on a Hilbert space with a fixed dense sequence

Input: a complex Hilbert space H, an explicitly given countable norm-dense
sequence (d_j), and a self-adjoint operator A. Conclusions: a unique regular
PVM E on R representing A with the usual exact square-integrability domain;
bounded Borel calculus; e^{itA} with generator exactly iA; PVM transport by
unitary intertwiners. These are the precise generic spectral conclusions used
by source40 and the radial suppliers. No nonseparable theorem is invoked.

### 2.1 Scalar circle measure for a unitary and a cyclic vector

Let U be unitary and x∈H. For N≥0 put

    q_N(θ) = || Σ_{j=0}^N e^{-ijθ} U^j x ||² / (2π(N+1)),  0≤θ≤2π.

This nonnegative density has mass ||x||², and direct finite expansion gives

    ∫ e^{inθ}q_N(θ)dθ = (1−|n|/(N+1)) <U^n x,x>  for |n|≤N.

There exists a regular positive measure μ_x on the circle with moments
<U^n x,x> for every integer n. Here is a CC construction, rather than an
appeal to general Riesz–Markov with DC. Regard q_N dθ as measures on R
supported in [0,2π]. Their cumulative functions F_N(t) have bounded values.
Diagonal extraction on the fixed enumeration of Q gives a subsequence for
which F_N(q) converges for every rational q. Use a canonical convergent-subsequence operation: bisect a rational interval
containing the bounded sequence, always retain the first closed half with
infinitely many terms, and select least eligible increasing indices. Apply
that specified operation successively to the enumerated rational coordinates
and diagonalize. This unique recursion needs no DC or arbitrary successive
choices. Let G(q) be these limits and set

    F(t)=inf{G(q): q rational, q>t}.

F is nondecreasing and right-continuous, is zero for t<0, and equals ||x||²
for t≥2π. `thm-existence-of-the-lebesgue-stieltjes-measure` supplies its
Borel measure under CC. At every continuity point t of F, rational bounds
above and below show F_N(t)→F(t) along the subsequence. A monotone function
has at most countably many jumps: for each positive rational ε there are
only finitely many jumps of size ≥ε on a bounded interval. Consequently a
finite partition with arbitrarily small mesh can be chosen with all its
interior points continuity points. Upper/lower step approximations and
uniform continuity now show convergence of integrals of every continuous
function on an interval slightly larger than [0,2π]. This proves the moment
identity after pushforward θ↦e^{iθ}. The scalar measure is regular by the
Stieltjes regularity supplier (its countable open approximations require
at most CC) and compact continuous pushforward.

Uniqueness: Fejér means approximate every continuous circle function
uniformly, so equal integer moments give equal continuous integrals. Regular
finite measures with equal continuous integrals agree: approximate indicators
of closed sets from above by the canonical distance cutoffs
max(0,1−n dist(·,K)), and then use regularity. This uniqueness is a theorem of
ZF+CC for this metric compact space. It is not an arbitrary selection of
measures indexed by x.

For a Laurent polynomial p, the map p↦p(U)x satisfies

    ||p(U)x||² = ∫|p(z)|²dμ_x(z).

Laurent polynomials are dense in L²(μ_x): regularity approximates each
indicator by continuous distance cutoffs between compact and open sets,
simple functions are dense by truncation, and Fejér approximates continuous
functions. Hence this isometry extends onto the cyclic closed space
H_x=closure span{U^n x:n∈Z}. Under its inverse, U|H_x is multiplication by z.

### 2.2 Countable cyclic decomposition, with no maximal family

Start with S_0={0}. At stage j let x_j=(I−P_{S_{j−1}})d_j and let
K_j=closure span{U^n x_j:n∈Z}, permitting the zero space. Put
S_j=S_{j−1}⊕K_j. Orthogonal projection onto a closed subspace exists under
CC by `thm-orthogonal-decomposition-by-a-closed-subspace`. Each S_j reduces
U, since each cyclic space includes positive and negative powers; its
orthogonal complement reduces U as well. d_j lies in S_j. Thus the countable
orthogonal sum of the K_j is H. This is a uniquely specified recursion from
the fixed d_j, not successive arbitrary choices needing DC. For x_j=0 use
the zero summand; otherwise use the scalar construction above. Its unique
measure permits assembly by replacement, without further choice.

In this countable multiplication representation define F(B) blockwise as
M_{1_B}. These are orthogonal projections with F(total)=I. Strong countable
additivity follows from scalar dominated convergence and the countable
orthogonal norm sum. For a fixed vector, its scalar measure is a summable
countable sum of regular finite measures; finite initial sums and the small
mass tail prove regularity. The representation gives U=∫z dF and defines
all bounded Borel functions by block multiplication. Uniqueness of F follows
from uniqueness of the scalar measures for each vector (the integer moments
are <U^n y,y>), followed by polarization of operator pairings. This also
proves uniqueness among regular representing PVMs without a Zorn argument.

### 2.3 Cayley transport and the exact unbounded domain

Nonreal resolvents for A require only the published CC
`thm-self-adjoint-resolvent-estimate`, whose proof uses symmetry, closedness,
and double orthogonal complement, not a spectral theorem. Put

    U=(A−i)(A+i)^(-1)=I−2i(A+i)^(-1).

The adjoint resolvent identity verifies U is unitary, ker(I−U)={0}, and
ran(I−U)=D(A). Thus its circle PVM has F({1})=0. In the representation of
2.2, I−U is multiplication by 1−z, and its range is exactly the set of h
with h/(1−z)∈L². Since

    λ(z)=i(1+z)/(1−z),    1/(1−z)=(λ+i)/(2i),

that range equals {h:λh∈L²}. The Cayley identity identifies A with M_λ
on exactly that domain. Transport the circle PVM by the Borel bijection
λ↦(λ−i)/(λ+i). This constructs E on R, all bounded multipliers, all
unbounded multipliers on their square-integrability domains, and proves
uniqueness by circle uniqueness. Regularity follows either by continuous
transport on S¹\{1} with compact truncation, or by the same scalar metric
regularity construction. No scalar Riesz–Markov theorem with DC is used.

### 2.4 Groups and intertwiners

Define e^{itA} as multiplication by e^{itλ}. Group law and unitarity are
pointwise. Dominated convergence gives strong continuity. For h with λh∈L²,
|(e^{itλ}−1)/t|≤|λ| gives derivative iλh by dominated convergence. Conversely
existence of the derivative makes these difference quotients bounded in L²;
Fatou along t=1/n yields ∫λ²|h|²<∞. Thus the generator domain is exactly D(A).

If an isometry Ω intertwines the two groups for every real t, its closed
range reduces the target group. Difference quotients identify the restricted
generator with ΩAΩ*. The range projection commutes with the group, and
hence with its generator/resolvent (take difference quotients and the exact
resolvent inverse); so it reduces the target self-adjoint operator. PVM
uniqueness from 2.3 gives E_B(C)Ω=ΩE_A(C) for every Borel C. This is the
range-inclusion step missing before source40's radial conjugation.

For the concrete L²(R³) and L²(0,∞) spaces take the fixed enumeration of
rational complex linear combinations of rational bounded-box indicators.
Their density follows from Lebesgue regularity and simple approximation.
Closed radial/channel subspaces have fixed dense sequences obtained by
projecting this enumeration. Countably many such choices suffice for all
(l,m); nothing is indexed by an arbitrary family of Hilbert spaces.

## 3. Essential spectrum and negative-subspace closure in this instance

The Coulomb relative-compactness proof can be specialized without general
spectral calculus: R0(z) is its explicit Fourier multiplier m_z∈L², maps
L² into bounded functions with ||R0 f||∞≤||m_z||₂||f||₂, and has convolution
kernel g_z=(2π)^(-3/2) F_p* m_z∈L² in physical-momentum normalization. For any bounded compactly supported χ the kernel
χ(x)g_z(x−y) belongs to product L², by Tonelli. Rational rectangular simple
kernels approximate it in L² and give finite-rank approximants; Cauchy–Schwarz
bounds operator norm by kernel norm. Thus it is compact under CC. For
ε<r<R the truncated multiplier 1/r is bounded and compactly supported.
The omitted near-origin part has operator norm at most
sqrt(4πε)||m_z||₂ and the tail at most R^(-1)|Im z|^(-1). Thus MR0(z) is a
norm limit of compact operators. R_C(z)−R0(z)=γR_C(z)MR0(z) is compact.

For completeness, the needed Weyl inference has a CC proof. A real λ is
essential exactly when every spectral ε-neighborhood has infinite rank.
In that case recursively take a unit vector in E((λ−1/n,λ+1/n))H orthogonal
to the previous vectors, projecting the fixed dense sequence onto the closed
intersection of the spectral range with their orthogonal complement and
selecting its least nonzero member; hence ||(A−λ)u_n||≤1/n. Conversely, if a
unit sequence is weakly null and (A−λ)u_n→0, a finite-rank spectral
ε-neighborhood would imply E_ε u_n→0 while
||(I−E_ε)u_n||≤||(A−λ)u_n||/ε→0, a contradiction.

If K=R_C(z)−R_A(z) is compact and u_n is such a sequence for A, put

    v_n=R_C(z)(A−z)u_n = u_n+K(A−z)u_n.

The bounded sequence (A−z)u_n=(λ−z)u_n+o(1) is weakly null, so its compact
image tends to zero in norm. Hence v_n−u_n→0, and

    (C−λ)v_n=(A−λ)u_n+(z−λ)(v_n−u_n)→0.

Normalize v_n. Reversing roles gives essential-spectrum equality. For H0
the explicit momentum projections have infinite rank near each λ≥0, using
disjoint rational subballs in the momentum shell, and vanish below zero.
Consequently σ_ess(C)=[0,∞).

Below zero, every spectral point has a finite-rank neighborhood. The operator
on that neighborhood is a finite-dimensional self-adjoint matrix, so its
spectral support is a finite set of eigenvalues. Each negative spectral point
is therefore isolated with finite multiplicity. Isolated points are countable
by assigning the least rational interval isolating each point. The negative
PVM is exhausted by these countably many atom projections: all other real
points below zero have a zero-projection neighborhood, and the corresponding
rational subintervals form a countable cover. Thus the negative spectral
space is the closed span of negative eigenspaces. This does not compute the
hydrogen eigenvalues or their n² multiplicities; those still require the
radial regular-solution exhaustion argument.

## 4. Exact consuming steps and limit of this proof

- Integrable-remainder Statement: §1 and §3 replace its AC-bearing named
  self-adjoint/essential-spectrum hypotheses with the same actual conclusions.
  Its repaired Fourier estimate itself needs no Coulomb spectral theorem.
- Completeness existence/intertwining: §§1–2.4 supply the group, graph-domain
  differentiation, exact generator and PVM-uniqueness inputs to the Cook and
  shifted-limit proof in `proposed-dollard-ac-after.md` steps 1.1–1.3.
- Radial forms: Hilbert Riesz representation is already published under CC;
  form-domain truncation follows from §2.3. The countable angular sum does not
  require arbitrary choice. This does not validate its current faulty form
  estimates or polar norm claims.
- Completeness steps 1.1–3.1 still need the *actual exact onto scalar radial
  continuum transform*, its bounded Borel correspondence, the bound-state
  exhaustion and no-zero-eigenvalue result. A separable PVM alone does not
  imply multiplicity one or the Coulomb density. See `findings.md` for the
  precise remaining analytic step and counterchecks. Full CC-only source40
  closure remains unproved in this research packet.
