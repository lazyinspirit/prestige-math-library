# Electromagnetism: explicit expansion arguments

2026-10-03. Research prose, not production items or independent acceptance. This
file supersedes the older strategy-only records for the **specified statements
below**. It does not discharge stronger unproved branches by implication.
Mathematical statements assume ordinary real/complex calculus and Lebesgue
integration, with Countable Choice carried from the imported measure interfaces.
No mathematical statement assumes a physical postulate.

## W1 — `lem-em-spherical-mean-wave-identity` (mathematics)

Let c>0, f∈C∞(R³), and define M_rf(x)=(4π)⁻¹∫S² f(x+r n)dΩ,
for r≥0, with the outward sphere measure of total area 4π. All assertions are
local in x,r; unbounded f is allowed since each relevant integration set is
compact. Then H_f(x,t)=t M_{ct}f(x), t≥0, satisfies
H_tt=c²ΔH, H(x,0)=0, H_t(x,0)=f(x).

**Proof.** Differentiation on compact parameter sets gives
∂r M_rf=(4π)⁻¹∫S² n·∇f(x+rn)dΩ. For r>0 the divergence theorem on B_r(x)
gives 4πr²∂rM_rf=∫B_r(x)Δf(y)dy. Radial differentiation of the last
integral, by polar coordinates and the one-variable fundamental theorem,
gives ∂r(r²∂rM_rf)=r²M_rΔf=r²ΔM_rf. Thus
∂r²M+2r⁻¹∂rM=ΔM. Differentiating tM_ct twice gives
2c∂rM+c²t∂r²M=c²tΔM. At t=0, M_0=f,
∂rM_0=(4π)⁻¹∇f·∫n dΩ=0 by reflection. The defining compact integral is
smooth for signed t as well; hence the equation extends to zero, H(0)=0,
and H_t(0)=f. This proves every stated identity.

## W2 — `thm-em-wave-cauchy-kirchhoff` (mathematics; completed smooth branch)

Put W=c⁻²∂t²−Δ. Let t0∈R, a,b∈C∞(R³), and h∈C∞(R³×[t0,T]),
where smooth on a closed time interval means extension to an open neighborhood.
Define, s=t−t0≥0,

$$u(x,t)=\partial_s H_a(x,s)+H_b(x,s)+c^2\int_{t_0}^t H_{h(\cdot,v)}(x,t-v)\,dv.$$

This is the unique smooth solution Wu=h with u(t0)=a, u_t(t0)=b.
It depends only on data in the closed backward c-cone. Compact support of a,b
and spatial support of h in one fixed compact set imply compact spatial support
on each bounded time interval. No boundary condition on a finite spatial domain
is included in this theorem.

**Proof.** W1 and commutation of smooth derivatives show the two homogeneous
terms solve W=0. Their initial values are a,0 and 0,b respectively: H_t(0)=a,
H_tt(0)=0 by W1. For the integral, its first endpoint contribution is zero
because H_f(0)=0, and its second derivative has endpoint term c²h(x,t)
because ∂tH_f(0)=f. The remaining second derivative is c² times its Laplacian
by W1. Thus Wu=h and the source contribution has zero initial data. Each
integral is over a compact interval/sphere, so every finite derivative is
justified by uniform bounds on the compact region of arguments; smoothness
follows, including at t=t0.

For uniqueness let w be the difference of two solutions and fix (x*,t*) with
t*>t0. Set R(t)=c(t*−t) and
E(t)=½∫B_R(t)(x*)[w_t²+c²|∇w|²]dx. For t<t*, Reynolds differentiation,
proved directly by polar coordinates, and w_tt=c²Δw give
E'(t)=∫∂B_R[c²w_t∂nw−c(w_t²+c²|∇w|²)/2]dS≤0, since
2c w_t∂nw≤w_t²+c²(∂nw)²≤w_t²+c²|∇w|².
Initially E=0, so w_t and ∇w vanish on every shrinking ball. For the vertical
segment x=x* this gives w_t(x*,t)=0 for t<t*, whence w(x*,t)=0 from zero
initial value; continuity gives w(x*,t*)=0. This is local and requires no
integrability at spatial infinity. The same argument for zero data/source in
a cone proves finite propagation; the displayed formula also shows it directly,
since |y−x|=c(t−v) and all integration times v lie between t0 and t.

## W3 — `lem-em-retarded-wave-kernel` (mathematics)

Define a spacetime distribution K by
K(ψ)=∫R³ ψ(y,|y|/c)/(4π|y|)dy for ψ∈Cc∞(R³×R).
The integral is locally finite at y=0 because ∫0^δ r dr<∞, and its absolute
value on a fixed compact support is bounded by a finite constant times ||ψ||∞;
hence it is a distribution. Its support lies on t=|y|/c≥0. Then WK=δ_(0,0).
For a smooth spacetime compact h,

$$(K*h)(x,t)=\int_{\mathbb R^3}\frac{h(y,t-|x-y|/c)}{4\pi|x-y|}\,dy.$$

**Proof.** Choose t0 below the source support and use W2 with zero initial data.
The source term there is c²∫t0^t (t−v)(4π)⁻¹∫S²h(x+c(t−v)n,v)dΩdv.
Set r=c(t−v); radial Jacobian gives c²(t−v)dv=−r dr.
The result is ∫0^∞r(4π)⁻¹∫S²h(x+rn,t−r/c)dΩdr, the displayed convolution.
Thus W(K*h)=h for every smooth compact h. To deduce WK=δ directly, choose
an even compact smooth approximate identity hε of integral one, supported in
a radius-ε spacetime ball. For any test ψ, Fubini and the fixed compact bounds
in the definition show K*hε→K distributionally, because hε*ψ and all its
finite derivatives converge uniformly to ψ. W is continuous under this
convergence by its signed-test definition. Hence WK=lim hε=δ. This also
justifies the symbolic notation K=δ(t−r/c)/(4πr); no pointwise product of
distributions has been used.

## W4 — `pthm-em-general-wave-ivp` (physics, vacuum smooth Cauchy branch)

Under vacuum Maxwell with ρ=J=0, let E0,B0∈C∞(R³;R³) satisfy div E0=div B0=0.
Set E_t(t0)=c²curl B0 and B_t(t0)=−curl E0, and solve the component wave
problems W2. The resulting smooth fields are the unique Maxwell solution.

**Proof.** Their divergences solve the homogeneous scalar wave equation with
zero initial values and derivatives because div curl=0. W2 uniqueness makes
both zero. Put R=E_t−c²curl B and Q=B_t+curl E. Each component solves the
homogeneous wave equation. Initially R=Q=0. Also
R_t(t0)=c²ΔE0+c²curl curl E0=0 and
Q_t(t0)=c²ΔB0+c²curl curl B0=0, using div-free data.
Again W2 gives R=Q=0. These are precisely the evolution equations and the
already proved constraints are the other two equations. Any Maxwell solution
has these wave equations and initial derivatives, so uniqueness follows.
Causal domains and compact support follow from W2. This argument does not
assert finite-domain PEC existence or completeness.

## W5 — `pthm-em-retarded-potentials` (physics, completed smooth compact branch)

Assume the Maxwell vacuum normalization ε0μ0c²=1 and smooth spacetime compact
ρ,J satisfying ∂tρ+div J=0. Define φ=ε0⁻¹K*ρ and A=μ0K*J.
Then B=curl A, E=−∇φ−∂tA solve Maxwell and have zero fields before the source
starts. Charge conservation here forces zero total charge for such a compact
time source; this branch does not encompass an eternal isolated nonzero charge.

**Proof.** W3 gives Wφ=ρ/ε0 and WA=μ0J. Derivatives commute with these
convolutions: in a test pairing transfer the derivative to the compact source
by integration by parts, with no support-boundary term. Therefore
G=div A+c⁻²φ_t=μ0K*(div J+ρ_t)=0.
Homogeneous Maxwell follows from div curl=0 and curl grad=0.
For Gauss, div E=−Δφ−∂t div A=Wφ−∂tG=ρ/ε0.
For Ampère, curl B−c⁻²E_t=grad G+WA=μ0J.
The definitions and W3's support give zero potentials before the first source
time. Smoothness can also be obtained from W2; convolution differentiations
are not differentiations of a singular kernel as ordinary functions.
Eternal sources need an explicit convergent-history extension, not an inferred
compact-time hypothesis.

## W6 — `lem-em-gauge-wave-reachability` (mathematics)

For smooth G on R³×[t0,T], W2 with a=b=0 solves Wχ=G. For smooth potentials,
A'=A+∇χ, φ'=φ−χ_t preserve E,B and satisfy
G'=div A'+c⁻²φ'_t=G−Wχ=0. Any two such choices differ by a homogeneous
wave solution if their G is the same. Prescribed χ boundary values on a bounded
spatial domain are outside this result; the older global gauge promise remains
unresolved there.

**Proof.** Existence and smoothness are W2. The two field cancellations are
curl grad χ=0 and −∇(φ−χ_t)−(A+∇χ)_t=−∇φ−A_t.
Direct expansion gives the stated G' identity; subtracting two solutions of
Wχ=G gives W(χ1−χ2)=0. Each conclusion has now been checked.

## R1 — `lem-em-global-retarded-root` (mathematics; root portion of M10)

Let z∈C³(R;R³), |z'|≤v*<c on all R, and take x≠z(t).
There is exactly one s<t such that t−s=|x−z(s)|/c. Write
R=x−z(s), r=|R|, n=R/r, β=z'(s)/c, κ=1−n·β>0.
The root is C³ in (x,t) off the worldline, and
∂ts=κ⁻¹, ∇xs=−n/(cκ).

**Proof.** The continuous function f(s)=t−s−|x−z(s)|/c has f(t)<0.
The speed bound gives |z(s)|≤|z(0)|+v*|s|, hence f(s)→+∞ as s→−∞.
For s2>s1, the Lipschitz estimate gives
f(s2)−f(s1)≤−(1−v*/c)(s2−s1)<0, even if x=z(s) somewhere.
Thus IVT and strict decrease give a unique root strictly below t.
At that root r=c(t−s)>0, so the norm is smooth nearby and
∂sf=−κ≤−(1−v*/c)<0. The implicit-function theorem gives C³ regularity.
Differentiating f=0 gives the stated formulas. The inverse denominator is
uniformly bounded by (1−v*/c)⁻¹. This does not prove root existence for a
finite-history trajectory or one whose speed approaches c without a uniform
bound, and does not by itself establish the complete field formula of M10.

## S1 — `lem-em-smooth-newtonian-upgrade` (mathematics)

For f∈Cc∞(R³), Nf(x)=∫f(y)/(4π|x−y|)dy is smooth and −ΔNf=f.
Its spatial derivatives satisfy DαNf=N(Dαf). In particular E=−ε0⁻¹∇Nρ
is smooth for smooth compact ρ. This local argument avoids assuming a smooth
kernel at the pole.

**Proof.** Change variable z=x−y to write Nf=∫Φ(z)f(x−z)dz.
On any compact x-set all derivatives of f(x−z) vanish outside a common bounded
z-set and are bounded there. Since Φ∈L¹loc, every parameter derivative has
an integrable bound C|Φ| on that set. Differentiation under the integral gives
the derivative identity for every α and continuity by the same dominated bound.
The imported distributional kernel argument −ΔΦ=δ is obtained by integration
by parts on an annulus: its inner outward normal is −z/r, yielding unit flux;
the remainder ψ(z)−ψ(0)=O(r) tends to zero after multiplication by the
bounded unit flux. Thus −ΔNf=f distributionally. Since both sides are smooth,
compact nonnegative test localization makes the equality pointwise.

## S2 — `lem-em-thin-current-limit` (mathematics)

For a closed C² embedded curve γ:R/LZ→R³ parameterized by arc length and
constant I, define the vector distribution j(ψ)=I∫0^Lγ'(s)·ψ(γ(s))ds.
Then div j=0. With a nonnegative smooth radial mollifier ηε of integral one
supported in Bε, jε=j*ηε is smooth, compactly supported and divergence-free.
Its Biot–Savart fields converge with every derivative uniformly on any compact
K disjoint from γ to

$$B(x)=\frac{\mu_0 I}{4\pi}\int_0^L\frac{\gamma'(s)\times(x-\gamma(s))}{|x-\gamma(s)|^3}\,ds.$$

**Proof.** The divergence pairing is −I∫d[ψ(γ(s))]/ds ds=0 by periodicity.
Mollification commutes with derivative by compact integration by parts. If
d=dist(K,γ)>0, for ε<d/2 the Biot–Savart kernel and each of its finite
x-derivatives are smooth on the relevant compact difference set, uniformly
continuous there. Subtracting the mollified and unmollified integrals is bounded
by |I|L times that uniform modulus of continuity at ε, times μ0/(4π).
It tends to zero. This proves convergence away from support, including the
circular-loop axis computation; it says nothing about divergent line self-energy.
For a circle radius a, axis z, the tangential numerator integrates to
2πa²e_z and the denominator is (a²+z²)^(3/2), giving
B_z=μ0Ia²/[2(a²+z²)^(3/2)].

## S3 — `lem-em-magnetic-dipole-remainder` (mathematics)

Let J∈Cc∞(R³;R³), div J=0, supp J⊂B_a(0). Put
m=½∫y×J(y)dy. For r=|x|≥2a,
A=μ0 m×x/(4πr³)+O(μ0a²||J||1/r³) and
B=μ0[3n(m·n)−m]/(4πr³)+O(μ0a²||J||1/r⁴), uniformly in n=x/r.

**Proof.** Integrate div(y_iJ)=J_i to obtain ∫J_i=0. Integrate
div(y_i y_jJ)=y_jJ_i+y_iJ_j to obtain the antisymmetry of
M_ij=∫y_jJ_i. The definition of m gives M_ij=−ε_ijkm_k;
therefore Mx=m×x. Taylor-expand |x−y|⁻¹ at y=0:
r⁻¹+(x·y)/r³+remainder. The integral remainder is
∫0¹(1−s)y_jy_k∂j∂k|x−sy|⁻¹ds. Since |x−sy|≥r/2,
the Hessian is O(r⁻³) and its spatial derivative is O(r⁻⁴), with absolute
constants from differentiating this rational radial function. Integrating
against J gives the A estimate and, after curl, its differentiated estimate.
Finally curl(m×x/r³)=3x(m·x)/r⁵−m/r³ by component differentiation.
This establishes both errors, rather than differentiating an unspecified O term.

## C1 — `def-em-covariant-sign-conventions`

On the SR supplier's oriented Minkowski affine space, η=diag(−1,1,1,1),
x⁰=ct, ε0123=+1, and indices μ,ν run 0,…,3 while i,j run 1,…,3.
Raising a temporal index reverses its sign. Define the contravariant potential
A^μ=(φ/c,A), A_μ=η_μνA^ν and the two-form
F_μν=∂_μA_ν−∂_νA_μ when a potential exists; independently F can be a
smooth antisymmetric covariant tensor with
F_0i=−E_i/c, F_ij=ε_ijkB_k. Thus F^0i=E_i/c.
Use j^μ=(cρ,J) and f^μ=F^{μν}j_ν. Maxwell is
∂_μF^{μν}=−μ0j^ν and ∂_[λF_μν]=0. Particle coupling is
m dU^μ/dτ=qF^{μν}U_ν. This one consistent convention reproduces the usual
positive q(E+v×B). It reverses the force sign used with the alternative
F_0i=+E_i/c convention; do not mix them.

F is a section of Λ²T*M: at each event a bilinear alternating map on tangent
vectors, Ck in an inertial chart. j is a vector field, transformed by Λ.
The Hodge dual is (*F)_μν=½ε_μνρσ F^{ρσ}, for the metric-raised volume
form with ε^0123=−1. No constitutive macroscopic excitation is identified with
this vacuum dual without its constitutive law. In SI F has units T in the
x⁰=ct coordinate basis; j has A m⁻²; A^μ has T m.

## C2 — `pthm-em-tensor-maxwell-equivalence` (complete component argument)

Assume C1 fields and the SR geometry/postulates. Then C1's two tensor equations
are equivalent to the four SI vacuum Maxwell equations, and are covariant under
constant proper orthochronous Lorentz changes of inertial chart.

**Proof.** For ν=0, ∂iF^{i0}=−div E/c=−μ0cρ gives Gauss since μ0c²=1/ε0.
For ν=i, ∂0F^{0i}+∂jF^{ji}=E_it/c²−(curl B)_i=−μ0J_i
gives Ampère. The (1,2,3) cyclic derivative is div B=0, while (0,i,j)
gives ε_ijkB_kt+∂iE_j−∂jE_i=0 after multiplication by c,
which is Faraday. These four component statements exhaust the 4 independent
components of the 3-form and the 4 components of the sourced equation.
Under x'=Λx+a, derivative covectors transform by Λ⁻¹ and both upper indices
of F by Λ. Since Λ is constant and ΛᵀηΛ=η, contracted derivative/tensor
indices cancel and the divergence transforms by Λ, just as j does. The cyclic
lower-index expression transforms by three inverse matrices, so zero remains
zero. The relevant SR tensor-transformation supplier gives precisely these
rules; covariance of equations is a conditional deduction, while inertial
physical equivalence and the clock/light interpretation remain SR postulates.

## C3 — `pthm-em-lorentz-field-transform`

For the passive boost x'⁰=γ(x⁰−βx¹), x'¹=γ(x¹−βx⁰), v=βc e1,
0≤β<1, one obtains E'parallel=Eparallel, B'parallel=Bparallel,
E'perp=γ(E+v×B)perp,
B'perp=γ(B−v×E/c²)perp.
The invariant scalars are B²−E²/c² and E·B.

**Proof.** Compute F'^02=γ(F^02−βF^12)=γ(E2/c−βB3),
F'^03=γ(F^03−βF^13)=γ(E3/c+βB2), and F'^01=F^01
because the two-by-two boost determinant is one. Likewise
F'^12=γ(F^12−βF^02)=γ(B3−βE2/c),
F'^13=γ(F^13−βF^03)=γ(−B2−βE3/c), and F'^23=F^23.
Read E',B' from C1 to obtain every component claimed. The contraction
F_μνF^{μν}=2(B²−E²/c²) is a scalar by the SR contraction rule.
For the second invariant, direct substitution of the six displayed components
gives E'·B'=E1B1+γ²(1−β²)(E2B2+E3B3)=E·B.
Spatial proper rotations preserve dot/cross products by their determinant-one
coordinate identities. General proper orthochronous transformations are supplied
by the SR Lorentz algebra contract, not by assuming every one is this boost.

## C4 — `pthm-em-relativistic-lorentz-force`

Take q constant, m>0 an externally supplied rest mass, a future timelike C²
worldline with U=dX/dτ and η(U,U)=−c², and prescribed smooth external F.
Adopt the covariant coupling in C1 and the SR momentum P=mU. It implies
p=γmv, d p/dt=q(E+v×B), d(γmc²)/dt=qE·v and preserves η(U,U).

**Proof.** U^μ=γ(c,v), U_μ=γ(−c,v). For a spatial index,
qF^{iν}U_ν=qγ(E_i+(v×B)_i); for μ=0 it is
qγE·v/c. Divide by d t/dτ=γ to obtain the displayed equations.
Antisymmetry gives U_μF^{μν}U_ν=0, so
(d/dτ)η(U,U)=2q U_μF^{μν}U_ν/m=0.
For |v|/c≤δ<1, γ−1≤(|v|²/c²)/[2(1−δ²)^(3/2)] by the mean value theorem
on (1−s)^−1/2. Hence p=mv+O(m|v|³/c²) and
γmc²=mc²+½mv²+O(mv⁴/c²), with the second bound from Taylor's theorem
on the compact interval [0,δ²]. This is a controlled algebraic low-speed limit;
trajectory approximation over time needs ODE stability, and is not asserted
without that extra proof. Singular self-fields are excluded.

## C5 — `pthm-em-covariant-stress-energy` and coupled angular balance

Define

$$T^{\mu\nu}=\mu_0^{-1}\left(F^{\mu\alpha}F^\nu{}_{\alpha}-\frac14\eta^{\mu\nu}F^{\alpha\beta}F_{\alpha\beta}\right).$$

Then T is symmetric, trace zero and transforms as a rank-two tensor. In the
chosen frame T00=u=(ε0E²+B²/μ0)/2, T0i=S_i/c=cg_i,
S=E×B/μ0, g=S/c², and Tij=−σij, where
σij=ε0(EiEj−δijE²/2)+μ0⁻¹(BiBj−δijB²/2).
Under Maxwell, ∂μT^{μν}=−f^ν, f^ν=F^{νλ}j_λ.
For a separately adopted smooth symmetric matter tensor Tm satisfying
∂μTm^{μν}=f^ν, total stress-energy is conserved. No tensor for matter has
been derived from vacuum Maxwell alone.

**Proof.** Symmetry follows by swapping free indices in the contracted product
and using the symmetric η. Its trace is μ0⁻¹(F²−4F²/4)=0.
Tensor transformation follows from contraction of tensor factors in SR.
The components follow from Σi F^0iF^0i=E²/c²,
ΣjF^0jF^ij=(E×B)i/c, and
Σkε_ikℓε_jkmBℓBm=δijB²−BiBj, with the negative temporal
contraction in the spatial product. This gives all displayed entries.
For the divergence, product differentiation gives the source term
−j^αF^ν_α plus
μ0⁻¹[F^{μα}∂μF^ν_α−¼∂^ν(F²)].
Contract the cyclic identity
∂μFβα+∂βFαμ+∂αFμβ=0 with F^{μα}; the first and third terms coincide
by antisymmetry and renaming μ,α, and the middle term is
−½∂β(F²). Hence F^{μα}∂μFβα=¼∂β(F²), which makes the bracket zero.
The source term −F^{να}j_α is −f^ν, proving the balance.
Adding the matter equation gives ∂μ(T+Tm)^{μν}=0. Symmetry gives
∂λ[x^μ Ttotal^{λν}−x^ν Ttotal^{λμ}]=Ttotal^{μν}−Ttotal^{νμ}=0.
Integrating on a fixed finite spatial domain and using the divergence theorem
yields energy, momentum and angular-momentum balance including its boundary
flux; constancy requires that flux vanish or be included in the system.
Products/distributional identities in this quadratic balance require smooth or
otherwise product-admissible fields; it is not applied to a point self-field.

## V1 — `lem-em-particle-curve-variation` (mathematics)

On a finite parameter interval [a,b], let X be a C² future timelike curve,
A_μ a C² covector on a neighborhood of its image, and consider fixed-endpoint
C² variations h, h(a)=h(b)=0. For m,c>0 and q real define

$$S[X]=-mc\int_a^b\sqrt{-\eta(\dot X,\dot X)}\,ds+q\int_a^b A_\mu(X)\dot X^\mu\,ds.$$

For each fixed h the curve X+εh remains future timelike for sufficiently small
|ε|, because the strict inequalities have positive margins on the compact
interval. Stationarity under all such variations is equivalent to
m dU_ν/dτ=qF_νμ U^μ, where dτ/ds=√(−η(Xdot,Xdot))/c and F=dA.

**Proof.** Compactness permits differentiation of the smooth integrand in ε.
The free variation is ∫mc η(Xdot,hdot)/√(−η(Xdot,Xdot)) ds
=∫m U_ν hdot^ν ds=−∫m(dU_ν/ds)h^ν ds.
The coupling variation is
q∫[(∂νA_μ)h^ν Xdot^μ+A_ν hdot^ν]ds
=q∫(∂νA_μ−∂μA_ν)Xdot^μh^ν ds,
where the endpoint terms vanish. Thus
δS=∫[−m dU_ν/ds+qF_νμ Xdot^μ]h^νds.
The continuous fundamental variation lemma applied componentwise makes every
coefficient zero; conversely those equalities make δS zero. Divide by the
strictly positive dτ/ds to obtain the stated equation. Raising ν gives C4's
positive sign qF^{νμ}U_μ. This is a calculation about a chosen functional;
adopting it as a physical particle action is an additional model assumption,
and it makes no existence claim for coupled singular particles and fields.

## V2 — `pthm-em-action-gauge-source-compatibility`

With C1 conventions and a bounded spacetime domain, a compact smooth variation
of A^μ in S[A]=c⁻¹∫[−F²/(4μ0)+j^μA_μ]d⁴x gives
δS=c⁻¹∫[μ0⁻¹∂μF^{μν}+j^ν]δA_νd⁴x.
The compact fundamental lemma gives ∂μF^{μν}=−μ0j^ν.
For a compact gauge χ, δA_μ=∂μχ, the field term is unchanged and the source
change is c⁻¹∫j^μ∂μχ=−c⁻¹∫(∂μj^μ)χ. Hence invariance under all compact
gauges is equivalent to continuity for smooth j, also distributionally with
its signed-test definition. This completes the original compact field-action
calculation, with the physical stationarity assumption identified separately.

## D1 — `thm-em-causal-dispersive-response` (completed compact-kernel branch)

Let K∈C∞c((0,∞);R^{d×d}). Define response P(t)=∫0∞K(s)E(t−s)ds for
bounded continuous E:R→R^d. This is a bounded linear map with
||P||∞≤||K||L¹||E||∞, and is causal: equal histories through time t give
identical responses through t. With phasors e^−iωt define
χ(z)=∫0∞K(s)e^{izs}ds, Im z≥0. It is holomorphic for Im z>0, continuous
to the real line, χ(−ω)=overline χ(ω), and each scalar entry satisfies

$$\operatorname{Re}\chi(\omega)=\frac1\pi\operatorname{PV}\int_\mathbb R\frac{\operatorname{Im}\chi(\xi)}{\xi-\omega}\,d\xi,\qquad\operatorname{Im}\chi(\omega)=-\frac1\pi\operatorname{PV}\int_\mathbb R\frac{\operatorname{Re}\chi(\xi)}{\xi-\omega}\,d\xi.$$

No sign of dissipation follows merely from causality. For P=ε0χ(ω)E in a
monochromatic material model, period-averaged work E·P_t is
ε0ω Im(e*·χ(ω)e)/2. Nonnegative work for every e is equivalent to positive
semidefiniteness of (χ−χ*)/(2i) for positive ω, an additional passivity
condition. Compact causal kernels are a sufficient proved branch, not a
replacement for the promised subtracted/unbounded-response theorem.

**Proof.** The integral norm bound and causal dependence follow directly from
the displayed convolution. Every complex derivative is ∫(is)^kK(s)e^{izs}ds,
justified by compact support, so χ is holomorphic (indeed entire); the real
kernel gives the reality identity. Integrating twice by parts with vanishing
endpoint values gives |χ(z)|≤||K''||L¹/|z|² uniformly Im z≥0.
For real ω, integrate χ(z)/(z−ω) over the real interval [−R,R], detouring
above ω on a clockwise semicircle of radius δ, and close by the large upper
semicircle. The integrand has no pole in that indented domain; Cauchy's theorem
therefore makes the total contour integral zero. The large arc tends to zero
by the uniform O(R⁻²) bound. The small arc tends to −iπχ(ω), by continuity
and its clockwise angle π. The remaining real integral tends to its principal
value: subtract χ(ω) locally, leaving a continuous divided difference bounded
near ω; at infinity the O(|ξ|⁻²) bound makes it absolutely integrable.
Thus PV∫χ(ξ)/(ξ−ω)dξ=iπχ(ω); separate real/imaginary parts to obtain the
formulas. For the work formula, expand the real phasors and discard the
±2ω exponential terms over a period; the surviving average is
½Re[e*·(−iωε0χ)e]=ε0ω Im(e*χe)/2.
The Hermitian part producing this imaginary quadratic form is (χ−χ*)/(2i),
so its positivity is exactly the stated all-polarizations condition.
Cauchy's theorem is an exact mathematical premise, not a physical assertion.

## A1 — `thm-em-radiation-asymptotic-flux` (smooth compact-source branch)

Take smooth spacetime compact conserved ρ,J supported spatially in B_a,
and their W5 retarded fields. For n∈S² and u in a compact interval let

$$I(n,u)=\int_{B_a}J(y,u+n\cdot y/c)\,dy,\qquad V(n,u)=\partial_u I(n,u).$$

Then, at x=rn, t=u+r/c as r→∞,

$$E=\frac{\mu_0}{4\pi r}n\times(n\times V)+O(r^{-2}),\qquad B=\frac{n\times E_{\rm lead}}c+O(r^{-2}).$$

Errors are uniform in n,u, with constants controlled by a,c and the finitely
many source derivative suprema. The retarded-time outward power limit is

$$\lim_{r\to\infty}\int_{S^2}r^2 n\cdot S(rn,u+r/c)\,d\Omega=\frac{\mu_0}{16\pi^2c}\int_{S^2}|n\times V(n,u)|^2\,d\Omega.$$

This is a limit at fixed retarded time u, not at fixed observation time t.

**Proof.** For |y|≤a and r≥2a,
R=|rn−y|=r−n·y+O(a²/r), 1/R=1/r+O(a/r²), and
N=(rn−y)/R=n+O(a/r), uniformly. These estimates follow from the norm's
first and second derivatives on |rn−sy|≥r/2 and Taylor's integral remainder.
Differentiate the exact retarded integrals before taking the limit. For a
scalar f, ∇[f(y,t−R/c)/R]=−N[f/R²+f_t/(cR)]. Thus
E=ε0⁻¹∫N[ρ/R²+ρ_t/(cR)]/(4π)dy−μ0∫J_t/(4πR)dy,
and B=−μ0∫N×[J/R²+J_t/(cR)]/(4π)dy.
All sources are evaluated at t−R/c; replacing it by u+n·y/c has error
O(a²/r) times a bounded time derivative. Integrating over fixed B_a gives
E_lead=(μ0/4πr)[c n∫ρ_t−V],
B_lead=−μ0 n×V/(4πcr), with O(r⁻²) errors as claimed.
Integrating div_y[J(y,u+n·y/c)] over space gives zero by compact support.
Expanding this total derivative gives ∫div_intrinsic J+(n/c)·V=0;
continuity yields ∫ρ_t=(n/c)·V. Therefore the stated transverse E_lead
and B_lead follow. Since E_lead⊥n, n·(E_lead×B_lead)/μ0
=|E_lead|²/(μ0c). Uniform O(r⁻²) field errors give an O(r⁻¹) error in
r²n·S, bounded uniformly on the finite-area sphere. Its integral tends to zero,
which proves the limit without an unjustified limit/integration exchange.

## A2 — `pthm-em-dipole-radiation` (controlled leading multipole)

Let p(u)=∫yρ(y,u)dy. Continuity and integration by parts give p'=∫J,
so p''=∫J_t. In A1's setting,

$$|V(n,u)-p''(u)|\le\frac ac\int_{B_a}\sup_{|v-u|\le a/c}|J_{tt}(y,v)|\,dy=:D(u).$$

Thus the dipole replacement has an explicit absolute error D, independently of
any assertion that “nonrelativistic” alone implies slow source variation.
Its leading field is μ0n×(n×p'')/(4πr), and leading power is
μ0|p''|²/(6πc). The absolute power error in A1 is bounded by
μ0[2|p''|D+D²]/(4πc).

**Proof.** Integrate div(y_iJ)=J_i+y_i div J over compact support to get
∫J_i=∫y_iρ_t=p_i'. Differentiation is justified by smooth common compact
support. Apply the time mean value bound to J_t(y,u+n·y/c)−J_t(y,u)
to obtain D. The norm difference of the squared transverse vectors is at
most 2|p''|D+D². Integrating over sphere area 4π gives the stated power
error. Finally reflection makes off-diagonal ∫n_in_j zero; rotations give
equal diagonal integrals and Σn_i²=1 gives each 4π/3.
Hence ∫|n×p''|²=(8π/3)|p''|², giving the power coefficient.
For p=p0cosωu, averaging sin² or cos² gives μ0ω⁴|p0|²/(12πc).
This establishes source dipole radiation. Larmor/Liénard for singular moving
particles still requires the full point-source field theorem; it is not
silently deduced from the compact smooth source theorem.

## B1 — `lem-em-zero-boundary-coercivity` (mathematics)

Let Ω⊂(−L,L)³ be bounded open. Define H¹(Ω)=W^{1,2}(Ω;R) as L²
classes with L² weak coordinate derivatives; H¹0 is the H¹ closure of
Cc∞(Ω). Under the imported Sobolev completeness assumption AC, H¹ and its
closed subspace H¹0 are complete; the quadratic integral norm is a Hilbert
norm because its coordinate L² inner products satisfy the parallelogram law.
For v∈H¹0, ||v||2≤2L||∂1v||2≤2L||∇v||2.

**Proof.** For smooth compact v extend it by zero to the box. Along each
coordinate line, v(x1,x2,x3)=∫−L^x1∂1v(s,x2,x3)ds.
Cauchy–Schwarz gives |v|²≤2L∫−L^L|∂1v|²ds.
Integrate the other coordinates and then x1 over length 2L to get
||v||2²≤(2L)²||∂1v||2². H¹ norm approximation passes this bound to
H¹0 by continuity of the L² norm. The gradient norm is therefore equivalent
to the full H¹ norm on H¹0, and is complete. This proof needs neither a
smooth domain nor a general boundary trace theorem.

## B2 — `lem-em-symmetric-coercive-variational-solver` (mathematics)

On a real Hilbert space H, let a be a symmetric bounded bilinear form with
a(v,v)≥α||v||², α>0, and ℓ a bounded linear functional. There is exactly
one u with a(u,v)=ℓ(v) for all v. Moreover ||u||≤||ℓ||/α.

**Proof.** J(v)=a(v,v)/2−ℓ(v) is bounded below by
α||v||²/2−||ℓ||||v||, and tends to infinity as ||v||→∞.
Choose a sequence vn with J(vn)→m=inf J; Countable Choice is supplied by AC.
The parallelogram identity gives
J((vn+vk)/2)=[J(vn)+J(vk)]/2−a(vn−vk,vn−vk)/8.
Since the left side is at least m, α||vn−vk||²/8≤[J(vn)+J(vk)]/2−m→0.
Completeness gives vn→u and continuity gives J(u)=m. For any v, the real
quadratic polynomial J(u+sv) has a minimum at s=0, so its linear coefficient
a(u,v)−ℓ(v) is zero. Conversely such a u has J(u+v)−J(u)=a(v,v)/2≥0.
If u1,u2 solve, test their difference to get α||u1−u2||²≤0.
Testing at u gives α||u||²≤||ℓ||||u||, hence the estimate.
No unproved invocation of Lax–Milgram has occurred.

## B3 — `lem-em-lift-specified-dirichlet-existence` (mathematics)

On bounded Ω as B1, let ε(x) be a measurable symmetric real 3×3 matrix with
α|ξ|²≤ξ·ε(x)ξ≤β|ξ|² a.e., 0<α≤β<∞. Given a specified lift
G∈H¹(Ω) and F∈(H¹0)*, there exists exactly one u∈G+H¹0 satisfying
∫∇v·ε∇u=F(v) for every v∈H¹0. No boundary datum outside the specified
lift class is assumed attainable. For F(v)=∫ρv, ρ∈L², this is a weak
Poisson solution −div(ε∇u)=ρ; the homogeneous trace is represented by
membership of H¹0, not by an unproved classical trace.

**Proof.** On H¹0 with gradient norm, B1 gives completeness. Put
a(w,v)=∫∇v·ε∇w and ℓ(v)=F(v)−a(G,v).
Cauchy–Schwarz and the coefficient bound give boundedness of a and ℓ;
the lower bound gives coercivity. B2 gives unique w; u=G+w is the solution.
Taking compact smooth v gives the stated distributional PDE by the weak
first-derivative identity. For L² ρ, B1 makes |F(v)|≤2L||ρ||2||∇v||2,
so F is a bounded functional. Across finitely many material interfaces the
weak equation encodes flux continuity where one-sided classical traces exist:
integration by parts on each side yields exactly the interface source term.
This proves weak Dirichlet existence for every specified lift. Classical
boundary regularity, general Neumann lifts/compatibility and transmission
regularity remain the broader M12 obligations; they are preserved.

## R2 — `lem-em-point-retarded-potential-and-fields` (mathematics)

In R1's global uniform-subluminal setting and off the worldline, put
C=q/(4πε0), D=κr, φ=C/D, A=βφ/c, where β and its emission-time derivative
βdot=z''(s)/c are evaluated at the unique retarded s. Then

$$E=C\left[\frac{(1-|\beta|^2)(n-\beta)}{\kappa^3r^2}+\frac{n\times((n-\beta)\times\dot\beta)}{c\kappa^3r}\right],\qquad B=\frac{n\times E}{c}.$$

The potentials are the retarded convolution with ρ=qδ_z and J=qz'δ_z,
localized on each compact test set and bounded retarded history. This is a
mathematical model computation; physical use needs the Maxwell coupling and
causal selection, not a self-force postulate.

**Proof.** The source integral against the retarded kernel becomes
C∫δ(t−s−|x−z(s)|/c)/|x−z(s)| ds. Near the unique root the variable
u=t−s−r(s)/c has derivative −κ. Ordinary one-dimensional substitution in
an approximating smooth δ gives ∫δ(u)g(s)ds=g(s*)/κ; convergence follows
from continuity of g(s(u))/κ(s(u)) on a compact root neighborhood.
Outside that neighborhood u is separated from zero on the relevant compact
history, so the approximations vanish there. This proves φ=C/(κr), and the
same substitution for qz' gives A=βφ/c. The global speed bound ensures that
compact observation regions involve bounded retarded times: the root equation
and |z(s)|≤|z(0)|+v*|s| give a bound on −s in terms of bounded x,t and
(1−v*/c)⁻¹. Thus this localization does not discard a hidden infinite-history
contribution. At a spacetime compact test set the point-current distributions
are well-defined by time integration; spatial mollification can be used before
convolution and tends to these formulas away from the curve. The same compact
bounds justify transferring the distributional wave equation to the limit.

To differentiate, R1 gives s_t=κ⁻¹, ∇s=−n/(cκ).
Write N=n·β and d=n·βdot. Then

$$D_t=\frac{c(|\beta|^2-N)-rd}{\kappa},\qquad \nabla D=\frac{1-|\beta|^2+rd/c}{\kappa}n-\beta.$$

Indeed r_t=−cN/κ, R_t=−cβ/κ, and β_t=βdot/κ;
∇r=n/κ, ∂iR=e_i+β n_i/κ, and ∂iβ=−βdot n_i/(cκ).
Subtracting the derivatives of R·β from those of r proves both identities.
Consequently
E=−∇φ−A_t=C D⁻²[∇D+βD_t/c]−Cβdot/(cκD).
The bracket is
[(1−β²)n−κβ+(β²−N)β+(rd/c)(n−β)]/κ
=[(1−β²)(n−β)+(rd/c)(n−β)]/κ.
Subtracting Cβdot/(cκD) changes its second numerator to
r[(n−β)d−κβdot]/c, exactly
r n×((n−β)×βdot)/c by the vector triple-product formula.
This gives the displayed E. Finally
curl(βφ/c)=(∇φ×β)/c+(φ/c)(∇s×βdot).
Substitute ∇φ=−C∇D/D², ∇s=−n/(cκ) to obtain
−C[(1−β²+rd/c)n×β/(κcD²)+n×βdot/(c²κD)].
The same expression follows from n×E/c because n×(n−β)=−n×β
and D=κr. This proves the curl equality without imposing a plane-wave
relation on the near field.

## R3 — `pthm-em-larmor-nonrelativistic` (instantaneous rest statement)

For a prescribed C³ worldline in R2, choose the SR inertial frame momentarily
at rest at an emission event s0, so β(s0)=0. Evaluate the acceleration field
at observations x=z(s0)+rn, t=s0+r/c. R2 gives
E_rad=q n×(n×a)/(4πε0c²r), B_rad=n×E_rad/c,
a=z''(s0). Integrating its radial Poynting flux gives emitted rest-frame power
P=q²|a|²/(6πε0c³). Uniform low-speed radiation at general emission events
has errors controlled by δ in β and κ≥1−δ; this is not an exact
nonrelativistic mechanical evolution law or a proof of orbital collapse.

**Proof.** R2's acceleration numerator at β=0 is n×(n×βdot),
βdot=a/c, with κ=1. The radial Poynting identity and angular integral in
A2 give q²/(16π²ε0c³) times (8π/3)|a|².
The velocity field is O(r⁻²) and its interference contributes O(r⁻¹) to
r²flux, vanishing uniformly in direction. At rest, observation-time and
emission-time infinitesimal increments agree; generally their relation is
dt/ds=κ, so emitted-power formulas must include the corresponding time
Jacobian. For |β|≤δ<1 every denominator and derivative of the acceleration
numerator is bounded on that compact β set, and the mean-value bound gives
O(δ) absolute relative-coefficient correction times q²|a|²/(ε0c³).
If a=0 the acceleration radiation vanishes; this does not force the entire
near field to vanish. Prescribed radiation does not prove a well-posed point
self-force dynamics.

## H1 — `lem-em-convergent-legendre-kernel` (mathematics)

For z∈[−1,1] define the real polynomial
P_l(z)=π⁻¹∫0π[z+i√(1−z²)cosθ]^l dθ. Odd cos moments vanish, so expanding
the finite power gives a real polynomial in z of degree at most l. Its modulus
is ≤1 because |z+i√(1−z²)cosθ|≤1. For |q|<1,

$$(1-2qz+q^2)^{-1/2}=\sum_{l=0}^{\infty}q^lP_l(z).$$

The branch is the analytic square root equal to one at q=0. Thus for |y|≤a<r,

$$\frac1{|rn-y|}=\sum_{l=0}^{\infty}\frac{|y|^l}{r^{l+1}}P_l(n\cdot y/|y|),$$

with y=0 interpreted by zero higher terms. After order N the absolute kernel
error is ≤a^(N+1)/[r^(N+2)(1−a/r)]. Integrating against compact L¹ sources
gives a convergent general exterior multipole expansion with that error times
||ρ||1. This does not itself prove a spherical L² basis or boundary convergence.

**Proof.** For |q|<1 the geometric series inside the defining θ integral
converges uniformly, so the sum equals π⁻¹∫[1−qz−iq√(1−z²)cosθ]⁻¹dθ.
For real a>|b|, tangent substitution u=tan(θ/2) gives
∫0π(a+b cosθ)⁻¹dθ=∫0∞2[(a+b)+(a−b)u²]⁻¹du
=π/√(a²−b²). Both sides are holomorphic in a,b near (1,0), by the
uniform integral bound and the square-root power-series branch. The real
identity extends first in a and then in b by the one-variable identity theorem;
substitute a=1−qz,b=−iq√(1−z²). The resulting equality near q=0
continues throughout |q|<1 since the denominator never vanishes there and
1−2qz+q² has its zeros on the unit circle. This proves the generating formula.
Take q=|y|/r and z=n·y/|y|. The bound |P_l|≤1 gives the geometric tail
and uniform convergence on |y|≤a, justifying integration. For derivatives on
an observation compact set disjoint from B_a, the analytic kernel admits a
slightly larger complex parameter disk, bounded away from its zeros; Cauchy
estimates on a smaller disk bound each fixed spatial derivative of the series
terms by a polynomial in l times (a/r)^l. Those derivative series converge
uniformly by the ratio test. Exact derivative constants require the chosen
observation compact set. The full harmonic-basis theorem is supplied separately in H2, with ball
boundary convergence in H3.

## G1 — `pthm-em-rectangular-mode-candidates` (complete TE/TM verification)

For a lossless homogeneous medium ε,μ>0 in the straight guide
(0,a)×(0,b)×R, phasors use exp(iβz−iωt), ω>0,
kc²=ω²εμ−β²>0. A TE mode has E_z=0 and
H_z=h=cos(mπx/a)cos(nπy/b), integers m,n≥0, (m,n)≠(0,0),
kc²=(mπ/a)²+(nπ/b)². Define
E_t=−iωμ e_z×∇t h/kc² and H_t=iβ∇t h/kc².
A TM mode has H_z=0, E_z=e=sin(mπx/a)sin(nπy/b), m,n≥1,
E_t=iβ∇t e/kc² and H_t=iωε e_z×∇t e/kc².
Then curl E=iωμH, curl H=−iωεE, both divergences vanish, and PEC
n×E=0 on the four walls. Every displayed phasor's real part is a solution.

**Proof.** Both scalars have Δt h=−kc²h or Δt e=−kc²e.
For TE, div E_t=0; div H=iβΔt h/kc²+iβh=0.
The z curl of E is −iωμΔt h/kc²=iωμh; its transverse curl is
iβ e_z×E_t=−ωμβ∇t h/kc²=iωμH_t.
The transverse curl of H is −e_z×∇t h+iβ e_z×H_t
=−(1+β²/kc²)e_z×∇t h=−ω²εμ e_z×∇t h/kc²
=−iωεE_t, and its z curl is zero. Neumann wall data ∂nh=0 makes
E_t's tangential component zero. For TM, div H_t=0,
div E=iβΔt e/kc²+iβe=0. The z curl H is
iωεΔt e/kc²=−iωεe. Its transverse curl is
iβ e_z×H_t=ωεβ∇t e/kc²=−iωεE_t.
The transverse curl E is −e_z×∇t e+iβ e_z×E_t
=−ω²εμ e_z×∇t e/kc²=iωμH_t, and its z curl vanishes.
Dirichlet wall e=0 gives zero longitudinal E and zero tangential derivative
of e, hence the transverse tangential E vanishes. These identities verify
all equations, orientations and index restrictions. Dispersion follows from
the definition kc²; for propagating real β one needs ω²εμ>kc².
At cutoff β=0 the formulas still make sense; below cutoff imaginary β
describes an evanescent separated solution and not a propagating power claim.

## G2 — `lem-em-rectangular-pec-energy-completeness` (mathematics)

Let Q=∏j(0,Lj), ε,μ>0 constant. Define the reflection boundary class by
extending E1 evenly across x1 walls and oddly across x2,x3 walls, and cyclically
for E2,E3; extend B1 oddly across x1 and evenly across x2,x3, cyclically for
B2,B3. Work on the rectangular torus ∏jR/(2LjZ), in L² real fields with
these parities and distributional div E=div B=0. The parity definition is
an explicit weak PEC model, including the zero normal B sector; for smooth
fields it gives n×E=0 and n·B=0. For every such initial datum there is a unique
C(R;L²) weak solution of ∂tE=(εμ)⁻¹curl B and ∂tB=−curl E in the same
class. Finite separated Fourier modes are dense in this solution class at
each time; energy ∫Q(ε|E|²+|B|²/μ)/2 is constant.

**Proof.** The exact one-dimensional imported complete torus character system
and Hilbert Fourier expansion imply rectangular product completeness: if an
L² function is orthogonal to every product, fix two indices and integrate
against those two characters. Fubini/Cauchy–Schwarz make the remaining
one-variable coefficient L². Its character coefficients all vanish, so it is
zero. Repeat in the second and third coordinates, using the countable set of
indices and a single union of exceptional null sets; then the original function
is zero. Orthogonality follows by iterated one-variable integration. Finite
orthogonal projections therefore converge in L², and Parseval follows by
expanding the squared distance to a finite projection and taking the limit.
Reflection parities force sine in odd coordinates and cosine in even coordinates;
the trigonometric product modes are just the paired ±k projections.
For each torus wavevector k_j=πnj/Lj the Fourier ODE is
Ehat_t=i(εμ)⁻¹k×Bhat, Bhat_t=−ik×Ehat, with k·Ehat=k·Bhat=0.
It is a finite-dimensional constant coefficient ODE, solved by its absolutely
convergent matrix exponential. Differentiating
ε|Ehat|²+|Bhat|²/μ gives zero by the scalar triple-product identity and complex
conjugation, so its weighted norm is preserved. The constrained subspace is
preserved since k·(k×v)=0. Curl maps the stated E/B parity patterns into
each other, so reflection constraints are preserved by the ODE.

Solve all coefficients, truncate to finitely many k, and use Parseval. The
weighted tail norm stays exactly its initial value, so the finite solutions
converge uniformly in time in L²; hence the limit is C_tL² and satisfies
Maxwell weakly after testing against a smooth periodic compact-time test, whose
Fourier coefficients and derivatives are summable. The support in time is
compact, so convergence of L² pairings is enough to pass the derivatives onto
the test. Energy conservation passes to the limit in norm. Any C_tL² weak
solution has continuous Fourier coefficients whose distributional derivatives
are the displayed continuous ODE right sides. A scalar continuous function
whose distributional derivative equals continuous g equals a primitive of g
plus a constant (test integration by parts proves the difference has derivative
zero); therefore coefficients solve the ODE classically and uniqueness holds.
This proves every assertion for the precisely defined reflection class. It
supplies neither trace regularity for arbitrary H(curl) fields nor completeness
in lossy/open/nonrectangular guides; those obligations are retained.

## O1 — `pthm-em-observer-field-and-doppler` (physics)

For a future unit observer n from SR S4, set e=F_EM(·,n), b=(*F_EM)(·,n),
both covectors on n⊥. Use its positive rest metric to define measured electric
vector E_n=c e♯ and measured magnetic vector B_n=−b♯. The exact SR S8
reconstruction determines all of F from these six rest components. Its optional
example uses F_SR=−F_EM, so the conversion is explicit. With a null nonzero
plane-wave phase k_μx^μ+θ0, measured angular frequency is −c k(n), and SR S5
supplies exact Doppler and aberration. This observer interpretation additionally
assumes local ideal field/frequency detectors; tensor algebra alone is not an
apparatus calibration theorem.

**Proof.** In the observer rest frame, F_i0=E_i/c and (*F)_i0=−B_i
by C1 and its Hodge formula. Raising within n⊥ is Euclidean, giving the stated
vectors. S8's six-component reconstruction applies to this arbitrary 2-form,
and S2's boost-rotation factorization proves the rest frame is available.
For a vacuum plane wave Maxwell's amplitude equations imply |kspace|=ω/c,
so the raised phase covector is future null when ω>0. On the observer
proper-time curve the phase derivative is k(cn), yielding the stated measured
frequency under the detector interpretation. S5's transformed phase components
then give its exact formulas. No photon energy or quantum supplier is needed.
For accelerated observers this is pointwise; differentiating decompositions
adds derivatives of n and does not preserve the simple inertial component
Maxwell equations without those connection/observer terms.

## B4 — `lem-em-prescribed-fractional-dirichlet-existence` (mathematics)

**New owner authorization:** unpublished root mathematical results with adequate
arguments may be consumed as research suppliers. The root trace files are draft,
not published; that status is retained. Their actual full statements and proofs
were read: sharp trace, half-space trace estimate, mean-zero kernel estimate,
normal-mollification lift, bounded right inverse, kernel of trace and reduction.
Consequently the former lack of a published lift is no longer a blocker for
this precise weak problem.

Let Ω⊂R³ be bounded C¹, AC, ε measurable symmetric uniformly elliptic as B3,
ρ∈L²(Ω), and prescribe g∈H^(1/2)(∂Ω)=W^(1/2,2)(∂Ω). This boundary
space is defined by a finite graph atlas and partition: each localized chart
representative has finite L² norm plus the square root of
∫R²∫R²|g(x)−g(y)|²/|x−y|³dxdy; finite sums define the boundary norm.
Then there is exactly one u∈H¹(Ω) with Tu=g solving
∫∇v·ε∇u=∫ρv for all v∈H¹0. The solution depends continuously on ρ,g.

**Proof.** The actually read root half-space trace estimate extends restriction
from smooth functions to a bounded H¹→L² trace via the normal-line estimate
|u(x',0)|²≤2∫0∞|u||∂tu|dt and smooth density. The sharp fractional bound
uses the normal/tangential increment split at t=h/2 and the proven Hardy
inequality to bound ∫0∞h⁻²||g(·+he_i)−g||²dh by the gradient norm.
The read coordinate-direction seminorm equivalence makes this precisely the
H^(1/2) bound. For the inverse, choose a smooth compact mollifier φ of integral
one and a normal cutoff η=1 near zero. Set R+g(x',t)=η(t)(g*φ_t)(x').
Its tangential and normal derivative kernels have integral zero and are
scale t⁻¹ times compact kernels. Their norm estimate is
∫0²t⁻²||g*K_t||²dt≤C∫||g(·−y)−g||²|y|⁻³dy,
proved by subtracting g(x') under the mean-zero convolution, Cauchy–Schwarz
on its radius-Ct support, then Tonelli and ∫|y|/C∞t⁻⁴dt=C'|y|⁻³.
The value/cutoff term is controlled by Young's inequality. Thus R+ is bounded
H^(1/2)→H¹ and has trace g by smooth approximation and trace continuity.
Pull back these flat lifts in finitely many C¹ boundary graph charts, multiply
by cutoffs equal one on the localized data supports and sum. Bounded chart
Jacobians/first derivatives control the H¹ norms; trace transport gives TRg=g.
This is exactly the read root bounded-right-inverse argument, with its actual
flat estimate exposed rather than a bare citation.

The read zero-trace kernel proof gives ker T=H¹0: for zero flat trace, extend
by zero (the normal boundary term vanishes), shift inward, mollify with radius
less than the inward shift, and pull back finitely many chart pieces. The
C¹ pulled-back compact approximants can themselves be mollified inside Ω;
the interior partition piece has positive distance from the boundary. This
proves approximation by Cc∞(Ω). The reverse inclusion is bounded trace
continuity on test-function approximations. Hence u=Rg+w with w∈H¹0.
Apply B3 to G=Rg to obtain unique u. For two sets of data, B2 estimates
||∇(w1−w2)||2≤α⁻¹[2L||ρ1−ρ2||2+β||∇R(g1−g2)||2].
B1 and bounded R convert this to the H¹ estimate by the data norms. This
proves existence, exact prescribed trace, uniqueness and continuous dependence.
Classical C² boundary regularity is still not inferred from this weak result.

## B5 — `lem-em-mean-zero-coercivity-on-a-c-one-domain` (mathematics)

For a bounded connected C¹ Ω, there is CΩ with
||v−vΩ||L²≤CΩ||∇v||L² for every v∈H¹(Ω),
vΩ=|Ω|⁻¹∫Ωv. This includes the full geometry needed for Neumann solvability.

**Proof.** On a bounded rectangular box R, the one-dimensional FTC and
Cauchy–Schwarz along coordinate segments give
∫R∫R|v(x)−v(y)|²dxdy≤C_R|R|∫R|∇v|²dx:
replace x by y one coordinate at a time, bound the squared finite sum by three
times the sum, and integrate its other coordinates by Fubini. Jensen against
y gives the local mean estimate. The same proof applies to a half-box.
For a C¹ boundary graph chart, flatten to a half-box. Its compact restricted
chart and inverse have bounded Jacobians and first derivatives, bounded away
from zero Jacobian; substitution and chain rule transfer a local estimate to
a patch, initially for smooth functions and then by the read smooth-up-to-boundary
density/coordinate Sobolev interfaces. Interior balls may be replaced by boxes
contained in Ω. Compactness of the boundary and of the residual interior
region gives a finite cover Ω=∪Uj by such connected patches, with each
|Uj|>0. The intersection graph is connected: otherwise the finite disjoint
unions of its graph components would be nonempty relatively open sets
partitioning connected Ω. Every nonempty overlap of two relatively open
patches contains an interior ball and has positive volume.

Let aj be the mean of v on Uj. The local estimates give
||v−aj||L²(Uj)≤Cj||∇v||L²(Uj). On a graph edge with overlap O,
|aj−ak| |O|¹/²≤||v−aj||L²(O)+||v−ak||L²(O)
≤(Cj+Ck)||∇v||L²(Ω). Follow a finite spanning tree from U1 to each Uj;
its finite constants give |aj−a1|≤C||∇v||2. Sum the local squared bounds
and these mean differences over the finite cover to obtain
||v−a1||2≤C'||∇v||2. Since the global mean minimizes ∫|v−a|² over
constants a, ||v−vΩ||2≤||v−a1||2. This proves the stated bound.
The chart/density premises are adequate unpublished mathematical suppliers,
explicitly authorized and recorded; smooth-connected domain alone was not
substituted for this argument.

## B6 — `lem-em-weak-neumann-and-transmission-existence` (mathematics)

Let Ω be bounded connected C¹, AC, ε as B3, ρ∈L², and g∈H^(−1/2)(∂Ω),
the bounded real dual of B4's boundary trace space. Define
ℓ(v)=∫Ωρv+⟨g,Tv⟩ on H¹. A weak Neumann solution satisfies
∫∇v·ε∇u=ℓ(v) for all v∈H¹. It exists iff ℓ(1)=0 and is unique up to
one constant; choosing ∫u=0 makes it unique. On finitely many components
compatibility and normalization are required separately on each component.

**Proof.** B4's trace bound and Hölder give |ℓ(v)|≤C||v||H¹.
Testing v=1 makes ℓ(1)=0 necessary. The mean-zero subspace of H¹ is closed,
and B5 makes its gradient norm equivalent to its complete H¹ norm. B2 solves
the coercive symmetric form there. Every v∈H¹ is its mean-zero part plus
a constant; the latter has zero left side and zero ℓ by compatibility, so
this solves the full problem. The difference of two solutions, tested against
itself, has zero gradient; B5 makes it constant. A finite disjoint component
sum applies the argument individually.

For finitely many smooth stationary interfaces, let ε be uniformly elliptic
piecewise smooth, let bulk ρ∈L² and prescribed sheet charge σ on the
interfaces define a bounded trace functional on H¹ (e.g. σ∈L² of each smooth
compact interface). The same variational argument with its sum of trace
functionals gives weak Dirichlet or compatible Neumann existence. The globally
H¹ potential has identical one-sided trace: in a flat chart the ACL vertical
representative is continuous across the interface for almost every transverse
coordinate, and smooth approximation plus trace continuity identifies both
limits. Where u is classically smooth on each side, integration by parts gives
−n·[ε∇u]=σ, equivalently n·[D]=σ for E=−∇u. Thus the interface signs
and potential continuity follow conditionally, rather than assuming them.
General piecewise classical regularity remains a separate requirement.

## H2 — `lem-em-spherical-harmonic-basis-and-addition` (mathematics)

Let P_l be the real space of homogeneous polynomials of degree l on R³,
H_l=ker(Δ:P_l→P_(l−2)), P_k={0} for k<0, and define spherical harmonics as
restrictions of H_l to S². Use unnormalized dΩ of area 4π. Then
P_l=H_l⊕|x|²P_(l−2), dim H_l=2l+1, harmonics of distinct degree are orthogonal
in L²(S²,dΩ), and their union admits a complete orthonormal basis. For any
real orthonormal basis Y_lm, m=1,…,2l+1, its addition theorem is

$$\sum_mY_{lm}(n)Y_{lm}(n')=\frac{2l+1}{4\pi}P_l(n\cdot n'),$$

where the polynomial on the right is H1's Legendre polynomial (the notation
P_l for the polynomial space versus P_l(z) is distinguished by argument).

**Proof.** For homogeneous Q of degree l−2j, Euler's identity x·∇Q=(l−2j)Q,
obtained by differentiating Q(tx)=t^(l−2j)Q(x), gives
Δ(r^{2j}Q)=2j(2l−2j+1)r^{2j−2}Q+r^{2j}ΔQ.
For P∈P_l put H=Σj a_jr^{2j}Δ^jP, a0=1,
a_j=−a_(j−1)/[2j(2l−2j+1)], j≤floor(l/2).
The displayed identity cancels consecutive coefficients in ΔH; the final
Δ^(floor(l/2)+1)P vanishes by degree. Thus H is harmonic and P−H is divisible
by r², giving existence of decomposition and, recursively, its harmonic-degree
expansion. For homogeneous harmonic H_l,H_m, the ball Green identity gives
0=∫S²(H_l∂nH_m−H_m∂nH_l)=(m−l)∫S²H_lH_m.
Hence distinct degrees are orthogonal. If a harmonic H_l equals r²Q, decompose
Q recursively into harmonics of smaller degrees and restrict to S²; its
orthogonality to all those lower-degree terms gives ∫S²H_l²=0, whence H_l=0
on the sphere by continuity, and everywhere by homogeneity. This proves the
direct sum. The monomial count dim P_l=(l+1)(l+2)/2 gives dim H_l=2l+1.
Restriction is injective by the same homogeneity argument.

For density, continuous functions are dense in L²(S²): take a finite smooth
graph atlas with subordinate smooth cutoffs. Each localized L² function pulled
back to its compact chart support is L² for Euclidean measure because the
surface density is bounded above and below there. Extend by zero to the
coordinate plane and mollify, with a cutoff supported inside the chart. The
read L² translation/approximate-identity interface gives convergence in L²;
the bounded surface density preserves convergence. Pull back and sum the finite
continuous chart functions to obtain continuous approximations. The restricted
real polynomial algebra is unital and separates sphere points (the three
coordinates do), so the actually inspected real Stone–Weierstrass theorem
makes it uniformly dense in C(S²). Its homogeneous-degree decomposition above
puts every restriction in the finite span of spherical harmonics. Uniform
convergence implies L² convergence on the finite-area sphere; together with
continuous density this gives harmonic L² density. Finite Gram–Schmidt applied
to a fixed ordered monomial elimination basis for each H_l produces the bases
without an undefined basis selection. Orthogonality, density and the elementary
projection identity give the complete Fourier expansion/Parseval as in G2.

Define K_l(n,n')=ΣmY_lm(n)Y_lm(n'). Changing an orthonormal basis by an
orthogonal matrix leaves this finite sum unchanged. Proper rotations preserve
harmonic polynomials and sphere measure, hence K_l(Rn,Rn')=K_l(n,n').
For fixed n', K_l is a homogeneous harmonic polynomial in n before restriction,
invariant under the rotations fixing n'. A rotation-invariant homogeneous
polynomial around e3 has form Σj b_j x3^(l−2j)(x1²+x2²)^j.
Applying Δ fixes each b_(j+1) from b_j, since its radial-plane factor has
nonzero coefficient 4(j+1)²; hence the harmonic zonal space has dimension one.
H1's coefficient |y|^lP_l(n'·y/|y|) is such a polynomial and harmonic:
its convergent generating kernel is harmonic in y off its source, and its
finite homogeneous coefficients can be differentiated near y=0, so each
coefficient Laplacian is zero. It equals one at y=n' because P_l(1)=1.
Therefore K_l(n,n')=d_lP_l(n·n'). The diagonal d_l is constant by rotational
invariance, and integrating K_l(n,n) gives Σm||Y_lm||²=2l+1; thus
d_l=(2l+1)/(4π). This proves the addition theorem and completes the basis,
normalization and exact kernel-expansion ingredients missing from M11.

## H3 — `lem-em-ball-poisson-series-boundary-convergence` (mathematics)

For f∈L²(S²), write its harmonic coefficients f_lm. For 0≤r<1 define
u(rn)=Σl,m r^l f_lmY_lm(n), with the constant l=0 value at r=0.
The series and all derivatives converge uniformly on each closed smaller ball;
u is harmonic, u(r·)→f in L² as r↑1, and it is the unique harmonic solution
with finite sup_r||u(r·)||2 and that L² boundary limit.
For continuous f the same function is

$$u(rn)=\int_{S^2}\frac{1-r^2}{4\pi|rn-n'|^3}f(n')\,d\Omega(n'),$$

and extends continuously to the closed ball with boundary f. This is the
stated ball boundary branch, not generic smooth-domain classical regularity.

**Proof.** The addition theorem gives Σm|Y_lm(n)|²=(2l+1)/(4π).
Cauchy–Schwarz over m and then l bounds the absolute tail at fixed r≤r0<1
by ||f||2[Σtail r0^(2l)(2l+1)/(4π)]¹/², tending to zero.
On a smaller closed ball, apply the actually read
`thm-interior-derivative-estimates-for-harmonic-functions` to each harmonic
partial-sum difference on balls of fixed radius contained in an intermediate
ball. Its estimate |Dαv(x)|≤Cα r^(−3−|α|)∫B_r|v| bounds every derivative
uniformly by the already vanishing uniform partial-sum difference. Thus all
derivatives are uniformly Cauchy there. Uniform derivative limits identify
the derivatives of the function limit, inductively by the one-dimensional
fundamental theorem along coordinate segments, and Δu=0. Orthogonal expansion gives
||u(r·)−f||2²=Σl,m(1−r^l)²|f_lm|²→0 by a summable bound 4Σ|f_lm|².
For any smooth harmonic v in the ball, its radial coefficient v_lm(r) satisfies
v_lm''+2r⁻¹v_lm'−l(l+1)r⁻²v_lm=0. This follows from the polar Laplacian
and the homogeneous harmonic identity ΔS²Y_lm=−l(l+1)Y_lm; the polar identity
itself follows by applying divergence to the radial/tangential gradient in
sphere charts. The two ODE solutions are r^l and r^(−l−1); smoothness at zero
excludes the latter. A specified L² boundary limit fixes the former coefficient,
so completeness gives uniqueness at every radius.

Summing the zonal addition kernels with weights r^l gives
(4π)⁻¹Σl(2l+1)r^lP_l(z).
Apply (1+2r∂r) to H1's generating function to obtain
(1−r²)/[4π(1−2rz+r²)^(3/2)], the displayed kernel.
It is positive, and its integral is one because only the normalized constant
harmonic survives integration. For n·n'≤1−δ the denominator is bounded
below uniformly for r near one and the numerator tends to zero, so its mass
outside each fixed spherical neighborhood tends to zero. Uniform continuity
of continuous f on the compact sphere then splits the integral error into
≤ε on a small neighborhood plus a bounded far error tending to zero.
This proves uniform boundary convergence and the claimed continuous extension.
The higher arbitrary-boundary regularity promises still require their own proof.

## D2 — `lem-em-integrable-causal-dispersion` (mathematics)

D1 extends to a real matrix kernel K:[0,∞)→R^(d×d) that is absolutely
continuous locally, K,K'∈L¹(0,∞), and sK(s)∈L¹. No compact support is
required. Its χ(z)=∫0∞K(s)e^{izs}ds is analytic in Im z>0, C¹ on the real
boundary, and the two principal-value dispersion formulas of D1 hold.
An instantaneous real response χ∞ can be added, in which case those formulas
apply to χ−χ∞. This is the explicit constant subtraction. Growing analytic
responses with further subtractions need their stated growth polynomial and
boundary assumptions; causality alone does not supply them.

**Proof.** The L¹ assumption bounds χ on the closed upper half-plane, with
continuity by dominated convergence. For Im z≥δ>0, every s^k e^(−δs)
is bounded, so holomorphic parameter derivatives exist under an L¹ bound;
sK∈L¹ additionally gives a continuous first derivative at real z.
Absolute continuity and K'∈L¹ make K have a finite limit at infinity,
necessarily zero since K∈L¹. Integration by parts gives
χ(z)=−K(0)/(iz)−(iz)⁻¹∫0∞K'(s)e^{izs}ds for z≠0, hence
|χ(z)|≤[|K(0)|+||K'||1]/|z| uniformly in the closed upper half-plane.
The same indented upper-semicircle contour as D1 has large-arc integrand
χ(z)/(z−ω)=O(R⁻²), length πR, tending to zero. C¹ boundary regularity
controls the local divided difference, and O(|ξ|⁻¹) controls the tail divided
by ξ−ω. Thus its principal value exists and equals iπχ(ω), proving the
formulas. Causal bounded response and the passivity quadratic-form condition
follow exactly as D1; they remain separate assertions. For χ∞ add its
instantaneous contribution P∞=ε0χ∞E; subtract it before the contour argument.
A lossless symmetric instantaneous χ∞ stores energy ε0E·χ∞E/2 instead
of contributing irreversible averaged work.

## E1 — `exp-em-induction-report` (faithful primary qualitative account)

**Source and reading.** Michael Faraday, *Experimental Researches in Electricity*,
First Series, read November 24, 1831, collected 1849 second-edition reprint,
paragraphs 1–33 fully read in the Project Gutenberg transcription derived from
BnF/Gallica images. URL, byte hash, actual successful curl retrieval and
encoding are recorded in `faraday-primary-reading.json`. This is an original
report reprint transmitted by a later transcription, not a newly repeated
experiment, and not a claim to have read the whole volume.

**Setup/procedure.** Paragraphs 6–11 describe insulated interleaved copper
helices, one connected to a battery and one to a galvanometer, including making
and breaking the battery circuit while leaving the detector loop complete.
Paragraphs 13–17 use a steel needle in an indicating helix with controlled
insertion/removal order; paragraphs 18–20 move insulated zigzag wire boards
together/apart with a battery current. Paragraphs 27–33 specify the soft-iron
ring, separately insulated helices A/B, battery and galvanometer connections,
and battery-direction/detector-circuit controls. The source gives historical
approximate dimensions and battery plate counts; no modern SI calibration
accuracy is inferred from those descriptions.

**Reported observations.** §§10–11 report small transient deflections at make
and break in opposite directions, with no sustained perceived deflection under
the continued steady battery connection. §§13–17 report needle magnetization,
opposite poles at make versus break and near cancellation if both transients
act on the same inserted needle. §§18–20 report opposite approach/recede
responses returning to the ordinary position when movement ceases.
§§28–33 report stronger iron-ring transients and reversal under battery reversal,
again with no permanent deflection under the continued primary current.
These are Faraday's reported finite-resolution qualitative observations;
“none perceived” is not an exact mathematical zero at all times.

**Calibration/uncertainty.** The read passages identify galvanometer direction,
needle-pole comparison, battery reversal and background-deflection controls,
but supply no calibrated conversion from deflection to current, detector
response transfer function, trial-level dataset, sampling law, uncertainty
interval or formal significance test. Magnetic inertia, switching transients,
insulation/leakage, primary current history and geometric/source changes are
apparatus assumptions in any modern quantitative model. Missing information
is explicitly retained; no error bars, precision or independence are invented.

**Interpretation.** These observations support a transient induction model for
the described apparatus and are qualitatively consistent with conditional
Faraday-flux/circuit predictions under the apparatus assumptions. They do not
prove the universal exact Maxwell law, isolate every auxiliary assumption or
supply quantitative model-comparison mathematics. Empirical support belongs
in a relation to the induction postulate/result. No physics theorem uses an
unqualified observation as an exact premise.

## B7 — `lem-em-smooth-domain-elliptic-regularity` (mathematics)

Let Ω⊂R³ be bounded C∞, ε∈C∞(closure Ω;Sym³) uniformly positive, and
ρ smooth on the closure. In B4 prescribe g∈C∞(∂Ω); in B6 prescribe smooth
outward flux g with its compatibility. Then the weak solution is C∞ on the
closure. For finitely many disjoint closed smooth interfaces strictly inside
Ω, piecewise smooth positive ε, piecewise smooth ρ and smooth sheet σ,
the weak solution is smooth on each closed side. No edges/junctions, reentrant
corners or coefficient loss of regularity are included. The existence claims
are B4–B6; this proves their missing classical upgrade on these declared domains.

**Proof of the local estimate.** For an interior patch or a flattened smooth
boundary/interface patch, write the weak equation in its divergence form
∫aij∂ju∂iv=∫f v+∫Gi∂iv. Smooth coordinate substitution gives
ã=|det DΦ⁻¹|DΦ a DΦᵀ and the corresponding transformed f,G; positive
Jacobian lower/upper bounds and bounds on DΦ and its inverse preserve uniform
ellipticity. For Dirichlet data subtract a smooth lift: in each boundary chart
extend the localized smooth boundary g by g(y)η(t), with a normal cutoff and
finite subordinate smooth partition, then sum. Its trace is g and all its
derivatives are bounded on the compact closure. The remainder has zero trace.
For a smooth Neumann flux choose a smooth collar vector field with G·n=g;
locally take g(y)n(y)η(t) and sum the partition. The divergence theorem makes
∫∂Ωgv=∫Ω(div G)v+G·∇v, so the natural boundary term is converted to smooth
volume f,G. Across an interface the same two-sided collar construction encodes
the prescribed smooth sheet functional, separately on the two sides.

Let δ_h^k u(x)=[u(x+he_k)−u(x)]/h. Use a cutoff η equal one on a smaller
patch, compact inside the larger patch in tangential directions. In an interior
patch take any k; at a flattened boundary/interface take only k=1,2.
Set w=δ_h^ku and test the original weak identity with
v=−δ_(−h)^k(η²w). This is admissible by H¹ approximation: the Dirichlet
trace remains zero under tangential shifts; natural-boundary tests need no
zero trace; interface tests act on the global H¹ function on both sides.
Shifts stay inside the larger patch. Change variables in the compactly supported
increments to get ∫Fδ_-h V=−∫δ_hF V and the product identity
δ_h(a∇u)=a(x+h)∇w+(δ_ha)∇u.
The principal contribution is at least α||η∇w||²2. Expanding
∇(η²w)=η²∇w+2ηw∇η leaves cutoff and coefficient terms bounded by
C||u||H¹[||η∇w||2+||w||2]. Here
||δ_hu||L²(patch)≤||∂ku||L²(larger patch), obtained by integrating the ACL
line identity δ_hu=∫0¹∂ku(x+θhe_k)dθ and Jensen/Fubini; and
||δ_ha||∞≤||∂ka||∞ by FTC. The f term is bounded by
||f||2||δ_-h(η²w)||2≤C||f||2[||η∇w||2+||w||2], using the same
increment estimate on the test. The G term transfers its increment to G,
so is bounded by C||G||H¹[||η∇w||2+||w||2]. Cauchy–Schwarz and
2AB≤(α/2)A²+2B²/α absorb the gradient terms. Thus uniformly for small h,

$$\|\eta\nabla\delta_h^k u\|_2\le C\bigl(\|u\|_{H^1}+\|f\|_2+\|G\|_{H^1}\bigr).$$

Uniform difference-quotient bounds give the weak k-derivative of each ∂ju:
for compact test ψ, ∫δ_h(∂ju)ψ=−∫∂ju δ_-hψ tends to
−∫∂ju∂kψ and is bounded by C||ψ||2. Density extends this bounded
functional to L²; the actually inspected Hilbert Riesz representation gives
an L² representative of the derivative. No unjustified pointwise derivative
or weak subsequence selection is used. Thus all interior second derivatives,
or all boundary/interface second derivatives with at least one tangential
index, are L² on the smaller patch.

At a boundary/interface, the distributional equation in each half-patch reads
−a33∂33u=f−div G+Σ_(i,j)≠(3,3)aij∂iju+Σij(∂iaij)∂ju.
The right side is L² by the just-proved tangential mixed derivatives and smooth
coefficients. Since a33≥α>0, multiplication by its smooth reciprocal gives
∂33u∈L². This proves H² up to each declared side. Cover the compact closure
by finitely many smaller patches to obtain the global H² bounds.

**Completed higher-order induction.** Assume piecewise H^(k+1), k≥1. For
a tangential multi-index α of order k, z=D_t^αu is H¹ and its differentiated
weak equation has the exact coefficient commutator

$$\int a\nabla z\cdot\nabla v=\int D_t^\alpha f\,v+\int\left(D_t^\alpha G-\sum_{0<\beta\le\alpha}{\alpha\choose\beta}(D_t^\beta a)\nabla D_t^{\alpha-\beta}u\right)\cdot\nabla v.$$

The finite commutator vector is H¹: its u-derivative order is at most
|α−β|+2≤k+1, known by the induction assumption; all coefficient derivatives
are bounded. The local estimate above therefore gives second derivatives of
z, i.e. every order-(k+2) derivative with at most two normal indices.
For a derivative with q≥3 normal indices, differentiate the normal-recovery
equation by q−2 normal and k+2−q tangential derivatives. Its highest terms
other than a33D^(k+2)u have q−1 or q−2 normal indices, already controlled
by induction over q; derivatives landing on coefficients multiply u-derivatives
of order ≤k+1. Data and G are smooth. Division by a33 gives the remaining
order-(k+2) derivative in L². This inner induction closes all normal counts.
In an interior patch all directions may be used in the local estimate, so the
same differentiated equation closes without a normal-recovery step.
For Dirichlet, every tangential derivative has zero boundary trace because the
subtracted lift was smooth and the flat boundary restriction is zero; for
natural flux, differentiated tests remain admissible and no such restriction
is needed. At an interface, tangential derivatives retain the equal two-sided
trace and the commutator coefficients have bounded tangential derivatives on
each side; the same two-sided estimate and separate normal recovery apply.
Finite nested-patch localization for each k completes the induction H^m for
every finite m on every closed declared side. This is an induction with the
explicit finite commutators and recovery bounds, not a cited future bootstrap.

**Classical representative.** The actually read smooth-domain Sobolev extension
theorem extends each H^m side class to compactly supported H^m(R³).
The inspected Fourier characterization makes (1+|ξ|²)^(m/2)û∈L².
For m>j+3/2, Cauchy–Schwarz gives
∫|ξ|^j|û|≤||(1+|ξ|²)^(m/2)û||2
[∫|ξ|^(2j)(1+|ξ|²)^(-m)dξ]¹/²<∞;
polar coordinates prove convergence at zero and infinity with exactly this
strict exponent. Fourier inversion as a distribution then supplies a C^j
representative via the absolutely convergent inverse integral and its j
coordinate derivatives, continuous by dominated convergence. The derivative
identities agree with the weak ones by testing/Fubini. For real classes take
the real part. Different representatives for different j agree almost everywhere
and then everywhere on interior by continuity, so these give one smooth
representative on the closure. Taking arbitrarily large m proves C∞.
The continuous trace agrees with the prescribed trace by the read trace
interface. Classical derivatives satisfy the weak equation pointwise by
continuous-test localization; interface integration by parts gives the stated
classical jump. This establishes the complete classical upgrade with its exact
smooth-domain/data/interface hypotheses.

## G3 — `lem-em-smooth-pec-cavity-spectral-closure` (mathematics)

On bounded C∞ Ω⊂R³, define H(curl)={u∈L²³:curl u∈L²³ distributionally}
and H(div)={u∈L²³:div u∈L² distributionally}, with their quadratic graph norms.
Define X as the graph-norm closure of smooth closure fields with n×u=0 in
H(curl)∩H(div). This is an explicit weak PEC boundary class, not an unproved
identification with every possible maximal tangential-trace realization.
Let V={u∈X:div u=0} and H=closure_L² V. Then the curl form on V has a
complete orthonormal L² eigenbasis with nonnegative eigenvalues λj of finite
multiplicity tending to infinity if H is infinite dimensional. The zero
λ eigenspace is finite dimensional and must be retained when topology allows it.
Its eigen equation is curl curl uj=λj uj distributionally with PEC trace.

**Proof of compactness.** For smooth u with n×u=0, component product integration
and divergence theorem give

$$\int_\Omega(|\operatorname{curl}u|^2+|\operatorname{div}u|^2-|\nabla u|^2)=\int_{\partial\Omega}(\operatorname{div}n)|u\cdot n|^2\,dS.$$

To verify the boundary term before simplification, expand the curl square:
|curl u|²=∂iuj∂iuj−∂iuj∂jui. Integrate the second term once in i and the
div square once in j; their interior second derivatives cancel. The remaining
flux is (u·n)divu−ui nj∂iuj. At the boundary u=(u·n)n, and extend n by
signed-distance normals locally so ∂nn=0; divu=∂n(u·n)+(div n)(u·n)
while ui nj∂iuj=(u·n)∂n(u·n). This yields the displayed formula.
The curvature is bounded on the compact smooth boundary. A collar normal-line
FTC, averaged over normal distance h and using 2ab≤δa²+δ⁻¹b², gives
||u||²L²(∂Ω)≤δ||∇u||²2+Cδ||u||²2 for each δ>0.
Indeed write |u(y,0)|²=|u(y,t)|²−∫0^t∂s|u(y,s)|²ds,
use |∂s|u|²|≤2|u||∂su|, average t∈(0,h), and transfer by the bounded
collar Jacobian; take h and the product-splitting parameter small enough to
make the gradient coefficient δ. Finite chart partition supplies the bound.
Absorb the curvature trace term to obtain
||u||H¹≤C(||u||2+||curl u||2+||div u||2).
Conversely the graph norm is bounded by C||u||H¹. The completion definition
therefore embeds X as a closed H¹ subspace, with zero tangential trace by
B4's trace continuity. Its graph norm and H¹ norm are equivalent.

The H¹ inclusion in L² is compact here, with a complete elementary proof:
use the actually read bounded smooth-domain H¹ extension to a fixed larger
box. For a bounded family of extensions, replace each function by its average
on cubes of side h in that box. The rectangular mean estimate from B5 gives
||u−P_hu||2≤Ch||∇u||2 uniformly. P_h has finite dimensional range and
bounded images, so every image has a finite ε-net. Choose h with uniform
error <ε/2 to obtain a finite ε-net for the original bounded family.
Total boundedness in complete L² gives compact closure (construct a Cauchy
subsequence using nested finite nets and then completeness). Thus X→L²,
and V→H, are compact. No abstract “compact resolvent” was assumed.

**Proof of the full shifted solver and divergence preservation.** First on X
solve a(u,v)=∫[curl u·curl v+div u div v+u·v]=∫f·v using B2;
Gaffney makes this form coercive and complete. Denote the solution K0f.
If f is distributionally divergence-free, put q=div K0f. Test with v=∇φ,
φ smooth with zero Dirichlet trace, so n×∇φ=0, curl∇φ=0 and div∇φ=Δφ.
Its weak identity gives ∫q(Δφ−φ)=0, since ∫f·∇φ=0 and
∫K0f·∇φ=−∫qφ. This holds for all φ∈H²∩H¹0: approximate fdata in
(1−Δ)φ=fdata by smooth data, solve with B2 and B7, and the H² estimate in
B7 passes the gradients in X to the limit. For fdata=q, the solution of
(1−Δ)φ=q exists by the same coercive form, is H² by B7's L²-source local
estimate (take its lower-order mass as an L² term), and has zero trace.
Then ∫q(Δφ−φ)=−||q||²2=0. Hence q=0 and K0f∈V.
For f∈H, approximation by V and the distribution test shows divf=0, so the
restricted K=K0|H maps H into V. Its defining identity on V is
∫[curl Kf·curl v+Kf·v]=∫f·v, and the full X identity is retained.

**Spectral argument.** K is bounded H→V and compact H→H by compact inclusion.
For f,g∈H, test its two variational equations with Kg,Kf to get
(f,Kg)=a(Kf,Kg)=(Kf,g), proving self-adjointness. Also
(f,Kf)=||curl Kf||²+||Kf||²>0 for f≠0: if Kf=0, its defining equation
makes f orthogonal to V, dense in H, hence f=0. Thus ker K=0.
The actually inspected compact self-adjoint spectral theorem now yields an
orthonormal eigenbasis of H with positive eigenvalues κj→0 and finite
multiplicities. Substituting K uj=κj uj into the **full** X identity gives
∫curl uj·curl v=(κj⁻¹−1)∫uj·v for every v∈X, since divuj=0.
Taking v=uj gives λj=κj⁻¹−1≥0. Compact test v supplies
curl curl uj=λj uj distributionally, not a projected equation with a hidden
pressure gradient. λ=0 corresponds to κ=1, whose eigenspace is finite
by the spectral theorem; large λ tend to infinity. This proves the complete
stated PEC spectral result, its topology qualification and actual PDE interface.

For the associated second-order wave with initial displacement in V and
velocity in H, coefficients solve aj''+c²λjaj=0. The complete basis and
finite-sum energy ∑[(aj')²+c²λjaj²] show convergence in C_tV/C_tH for
finite-energy data, exactly as G2, retaining the finitely many λ=0 modes
aj(t)=aj(0)+t aj'(0). Compatibility with first-order Maxwell further requires
initial E_t=c²curl B0; it annihilates curl-free electric zero modes when the
curl pairing is admissible. General lossy/open-domain scattering and alternate
maximal trace classes are outside this precise closed PEC theorem.

## P1 — `pthm-em-dipole-scattering-cross-section` (physics)

Adopt a prescribed monochromatic electric dipole p(t)=Re(p0e^(−iωt)) in
vacuum, ω>0, no independent magnetic/higher multipole radiation in this model,
and an incident plane wave Einc=Re(e exp(i k·x−iωt)), e≠0, |k|=ω/c.
Define dσ/dΩ as the period-averaged scattered outward power per solid angle
divided by incident period-averaged energy flux. Then

$$\frac{d\sigma}{d\Omega}=\frac{\omega^4|n\times p_0|^2}{16\pi^2\epsilon_0^2c^4|e|^2}.$$

For adopted p0=αe with scalar polarizability α (F m²), total
σ=ω⁴|α|²/(6πε0²c⁴). These are conditional dipole-model predictions,
not source-backed measured cross sections or a universal exact finite-sphere law.

**Proof.** A2 gives E_rad=μ0n×(n×p'')/(4πr) and B_rad=n×E_rad/c.
For p'', its complex amplitude is −ω²p0, so the period-average transverse
square is ω⁴|n×p0|²/2. Multiply by r²/(μ0c) to obtain scattered intensity
μ0ω⁴|n×p0|²/(32π²c). The incident plane-wave average is
|e|²/(2μ0c)=ε0c|e|²/2, with the same real-field normalization.
Their ratio is the stated formula using μ0ε0c²=1. For α scalar, the angular
identity ∫|n×e|²=(8π/3)|e|² applies separately to real/imaginary amplitudes,
giving the total. More general tensor α uses the displayed directional
formula, with its adopted orientation and material rest-frame response.
A finite-source dipole approximation has A2's explicit additional error D;
no uncontrolled finite-size remainder is silently discarded.

## P2 — `pthm-em-weak-field-thomson-limit` (physics)

Under C4's SR test-particle law with external rest mass m and charge q,
consider a weak incident field ηEinc, ηBinc with a specified differentiable
solution family vη=ηv1+O(η²), no self-field/recoil/material forces and a
periodic first-order response. Its first-order dipole coefficient is
p0=−q²e/(mω²), and P1 gives the leading Thomson-model cross section
q⁴/(6πε0²m²c⁴). This is a controlled **conditional first variation** of SR
external-force dynamics, not a silent exact Newtonian force postulate.

**Proof.** Substitute the family into d(γmv)/dt=qη(E+v×B).
Since γ=1+O(η²), the derivative of γmv at η=0 is m v1'. The magnetic
term is O(η²). Thus mv1'=qEinc along the zero-amplitude resting curve.
The specified periodic displacement solves m z1''=q Re(e e^−iωt), hence
z1=Re[−qe/(mω²)e^−iωt] up to a constant origin; the constant/linear
homogeneous responses are excluded by the specified periodic preparation.
Dipole qz1 has amplitude −q²e/(mω²). Substitution in P1 cancels ω⁴.
The assumed differentiable family and its uniform error are part of this
conditional statement; the proof does not establish such approximation for
an arbitrarily long driven singular self-consistent particle evolution.

## P3 — `lem-em-outgoing-source-helmholtz-and-diffraction` (mathematics)

For k>0 define Gk(x)=exp(ik|x|)/(4π|x|) off zero as a locally integrable
complex function. Then (−Δ−k²)Gk=δ0 distributionally. For a finite complex
measure a supported on a compact aperture/source in B_a, u=Gk*a is smooth
outside that support, solves (Δ+k²)u=0 there and is outgoing. For x=rn,
r≥2a, its Fraunhofer expression and error are

$$u(rn)=\frac{e^{ikr}}{4\pi r}\int e^{-ikn\cdot y}\,da(y)+O\left(\frac{\|a\|_{\rm TV}}r\left[\frac ar+\frac{ka^2}r\right]\right),$$

uniformly in direction. Aperture data are an explicitly specified scalar
source, not asserted to be the unknown exact Maxwell boundary traces.

**Proof.** For radial f(r), Δf=f''+2f'/r follows from ∂ir=xi/r by direct
coordinate differentiation. Inserting f=eikr/(4πr) gives (Δ+k²)f=0 for r>0.
For the distribution identity excise Bδ in a compact test integration. Green's
identity leaves the inner normal flux: Gk=1/(4πδ)+O(1), ∂rGk=−1/(4πδ²)+O(1)
there. The derivative-test boundary term is O(δ), and the leading unit flux
multiplies ψ(0). The k²Gk local integral vanishes with O(δ²). Thus the limit
is exactly δ0 with the displayed negative-Laplacian sign. Local integrability
and every off-support derivative under the compact source integral follow from
the positive separation of compact observation/source sets.

Let R=|rn−y|. Taylor of the norm as A1 gives
|R−r+n·y|≤C a²/r, |r/R−1|≤C a/r.
For real θ, |e^{iθ}−1|≤|θ| by FTC; hence the kernel difference from
r⁻¹eikr e^−ikn·y is bounded by C r⁻¹(a/r+ka²/r).
Integrating against total variation proves the error. Exact differentiation
also gives r(∂ru−iku)=O(r⁻¹) uniformly, since ∂rR=1+O(a²/r²),
R⁻²=O(r⁻²) and the source support is fixed. This is the Sommerfeld outgoing
condition for this source solution. It establishes neither uniqueness/existence
for arbitrary obstacle boundary data nor an unqualified scalar-to-vector EM
approximation.

For a planar aperture y=(y1,y2,0), observation x=(ξ1,ξ2,z), z>0,
|ξ|≤b and a+b≪z, the Fresnel approximation replaces R by
z+|ξ−y|²/(2z) and 1/R by 1/z. Taylor with remainder of √(1+s) on a compact
small s interval bounds the phase error by Ck(a+b)^4/z³ and the relative
amplitude error by C(a+b)²/z². The same exponential bound yields an absolute
u error ≤C||a||TV z⁻¹[(a+b)²/z²+k(a+b)^4/z³].
Thus both the Fresnel and Fraunhofer phase criteria are explicit proved error
conditions; “far” is not left as a purely verbal approximation assumption.

## E2 — `exp-em-wave-propagation-report` (primary historical account)

**Source.** Heinrich Hertz, “On the finite velocity of propagation of
electromagnetic actions,” Berlin Academy February 2, 1888 and *Wiedemann's
Annalen* 34 p.661, in the authorized English *Electric Waves* translation
(D. E. Jones, Macmillan 1893), chapter VII, printed pp.107–123.
The complete chapter's narrative was actually read in Internet Archive's OCR
of `electricwavesbe00hertgoog`; its tables are visibly scrambled in OCR and
have **not** been reconstructed or independently recalculated. Retrieval and
exact file hash are in `hertz-primary-reading.json`. This is primary-report
translation with an OCR limitation, not a modern replication or measured-c
precision source.

**Setup/procedure.** A spark-excited primary conductor with brass end plates
and a central spark gap drove rapid oscillations. Circular or square secondary
conductors with micrometer-adjusted spark gaps served as qualitative detectors.
Hertz compared direct air-path action with waves on a long wire, using tuned
secondary orientations, adjustable additional wire length, different distances
along a defined baseline and observed relative spark strengthening/suppression.
The room was darkened; reflections and nearby fixtures were apparatus concerns.
Wire standing-wave nodes were located by moving the tuned secondary and marking
positions with paper riders. The report expressly treats its inferred absolute
period from circuit theory as doubtful beyond order of magnitude.

**Observed versus inferred.** Hertz reports orientation-dependent sparks,
approximately recurring wire nodes and changing signs of interference as path
length/distance varied. These are the reported observed indicators. Finite
phase delay and a propagation speed of the order of light speed are **his
model-dependent inferences**, requiring the assumed oscillator/resonator,
wire-wave and air-path phase interpretation. His comparison does not directly
measure travel time with synchronized calibrated clocks. He explicitly refuses
to present a circuit-theory-based wire velocity as a new precision measurement;
his air-speed estimate is only order of magnitude. The historical decomposition
into separately propagating electrostatic/electromagnetic components is not
promoted to a modern Lorentz-covariant theorem.

**Calibration/uncertainty.** Spatial lengths, node marking and spark-gap screw
adjustment are operational procedures. The chapter provides no modern calibrated
spark-intensity transfer function, independent absolute period calibration,
trial-level likelihood, sampling-error model or confidence interval. It notes
irregular superposed disturbances, detector sensitivity and limited room range.
The numerical tabular signs cannot be faithfully recovered from the OCR used;
therefore no new quantitative fit, exact speed or uncertainty interval is
claimed here. Hertz's rough author bounds are not assigned a frequentist or
Bayesian confidence level.

**Interpretation.** The described apparatus observations qualitatively support
finite-propagation/wave-interference models under the stated auxiliary assumptions.
They do not deductively prove Maxwell, exactly establish c, or eliminate every
alternative. Agreement is an empirical relation to the wave predictions; no
observed outcome is obtained by proving a Maxwell formula. The source limitations
travel into any downstream historical or empirical conclusion.

## E3 — `exp-em-inverse-square-report` (primary null-experiment account)

**Source.** Henry Cavendish's original manuscripts, edited by J. Clerk Maxwell,
*The Electrical Researches of the Honourable Henry Cavendish*, Cambridge 1879,
“Experimental determination of the law of electric force,” arts.217–235,
printed pp.104–113; detector/electrometer descriptions arts.244–249,
printed pp.119–121. These passages were actually read in Internet Archive's
OCR of `electricalresea00cavegoog`. The original reported apparatus/procedure,
observations and empirical sensitivity check are identifiable; fractions in
its sensitivity/exponent calculation are corrupted by OCR, so no numerical
exponent limit is transcribed or independently recomputed.

**Setup/procedure.** A conducting inner globe supported by insulating glass,
coated with sealing wax, was enclosed by two tinfoil-coated pasteboard
hemispheres forming a larger conducting globe. A removable wire connected
inner and outer conductors during charging from a Leyden jar. A linked
string/frame mechanism disconnected the charging wire, then the inner/outer
connection, then separated the hemispheres without touching the inner globe,
and brought a pith-ball detector to it. The outer shells and charging wire
were discharged after separation to control their action on the detector.
An electrometer monitored repeat charging level, and operation timing was
chosen to reduce leakage from the inner globe.

**Reported observations.** Art.227 reports several repetitions without
perceived pith-ball separation or signs of residual inner charge. Arts.228–229
report the more sensitive precharged-ball comparison: positive and negative
precharge gave equal small residual separations after contacting the globe,
rather than a detectable charge-sign asymmetry. Art.230 describes a deliberate
small-charge comparison using a smaller coated glass element and the same
charging-level indication; the precharged detector visibly distinguished that
small imposed charge. Art.235 reports a corresponding qualitative null with
an enclosed box geometry. These are reported finite-resolution nulls and a
sensitivity control, not proof that the true charge was exactly zero.

**Calibration/uncertainty.** Arts.224–225,230 and244–249 provide actual charge-level
monitoring, precharge comparison, deliberate sensitivity check and pith-ball/
electrometer construction. Insulation leakage, finite separation time, imperfect
spherical geometry, shell holes, accidental contact and outside charges are
apparatus-model/systematic conditions. The OCR cannot faithfully recover all
fractional calibration ratios or the exponent calculation, and no trial-level
sampling model, confidence interval or modern SI calibration traceability is
reported. Therefore the qualitative sensitivity comparison is retained and
no numerical exponent bound, precision, likelihood or certainty is invented.

**Interpretation.** An inverse-square equilibrium conductor model predicts
zero charge in the connected enclosed interior under its idealization. The
observations support that model within the apparatus sensitivity and auxiliary
assumptions, and constrain specified alternative force laws after an explicit
response/sensitivity model. Cavendish's art.232 language that the law “must”
be exactly inverse-square is not promoted to an unconditional modern theorem.
A finite null cannot prove an exact exponent; the quantitative bound would
require the undeciphered calibration and complete declared alternative model.
Empirical support is a nonlogical relation to the static prediction.

## U1 — `lem-em-bounded-error-model-comparison` (mathematics)

Let θ lie in an interval I, f∈C¹(I;R), f(θ0)=0 and f'≥m>0 throughout I.
Let a recorded scalar yhat satisfy |yhat|≤s, s≥0, and a separately specified
calibration-error model bound |y−yhat|≤δ, δ≥0. If a model requires y=f(θ),
then compatible θ satisfy |θ−θ0|≤(s+δ)/m. If a proposed θ violates this
bound, that specific model-plus-error-bound pair is incompatible with those
premises. This is a deterministic conditional theorem, not a fabricated
sampling law or statistical inference from the historical reports.

**Proof.** The triangle inequality gives |y|≤s+δ. For θ≠θ0, the mean-value
theorem yields f(θ)−f(θ0)=f'(ξ)(θ−θ0) at an intermediate ξ, so
|f(θ)|≥m|θ−θ0|. Combine the inequalities. For θ=θ0 it is immediate.
A strict violation contradicts the two simultaneous bounds. No probability
interpretation or exact-zero observation has been used.

## U2 — `pthm-em-specified-model-comparison` (qualified application)

If an explicitly adopted detector/calibration model in a null experiment gives
the bounded-error premises of U1 for a declared monotone alternative prediction
f(θ), its data restrict θ as U1 states. The physical conclusion is conditional
on that detector/model/error bound and retains δ,s. The three historical reports
E1–E3 do not supply numerically adequate premises for this calculation from the
actually inspected carriers, so no numerical application is asserted here.

**Proof.** The stated apparatus identification sends the actual observed
indicator to yhat and the model observable to y=f(θ). Under precisely the
assumed bounds, every hypothesis of U1 holds, and its interval conclusion
applies. Any uncertainty in the apparatus bound/model remains an applicability
qualification of the physical conclusion. Evidence that only tests these
premises is a separate relation, not a logical derivation of an exact premise.

## W7 — `lem-em-smooth-forced-maxwell-cauchy-system` (mathematics)

Let ρ,J be smooth on R³×[t0,T], ρ_t+divJ=0, positive c,ε,μ with εμc²=1,
and smooth initial E0,B0 satisfy divE0=ρ(t0)/ε, divB0=0. The system
E_t=c²curlB−J/ε,B_t=−curlE with these initial values has a unique smooth
solution, obeying both Gauss constraints and the c-cone domain of dependence.
This is a mathematical system with stipulated coefficients/sources, independent
of any physical adoption.

**Proof.** Solve W2 componentwise with
WE=−gradρ/ε−μJ_t, WB=μcurlJ,
E_t(t0)=c²curlB0−J(t0)/ε, B_t(t0)=−curlE0.
For D=divE−ρ/ε, continuity gives
WD=−Δρ/ε−μdivJ_t−(c⁻²ρ_tt−Δρ)/ε=0.
D(t0)=0, D_t(t0)=−(divJ+ρ_t)(t0)/ε=0. The same wave uniqueness makes
D=0. divB solves a homogeneous wave with zero initial data and derivative,
so divB=0. Define R=E_t−c²curlB+J/ε and Q=B_t+curlE.
Using curlcurlJ=graddivJ−ΔJ gives
WR=−grad(ρ_t+divJ)/ε=0 and WQ=μcurlJ_t−μcurlJ_t=0.
R(t0)=Q(t0)=0. Their derivatives are
R_t(t0)=c²grad(divE0−ρ0/ε)=0 and
Q_t(t0)=c²graddivB0+(c²μ−1/ε)curlJ0=0.
Thus W2 uniqueness gives R=Q=0. This proves the first-order evolution and
constraints. Any smooth solution has these exact wave problems and initial
derivatives, giving uniqueness. W2's cone argument applies to all source terms
and their derivatives; source differences supported outside a backward cone
have zero derivatives inside its open interior, giving the same domain of
influence with the boundary obtained by continuity. This is full smooth
all-space forced existence, not only the source-free verification.

## D3 — `lem-em-finitely-subtracted-analytic-dispersion` (mathematics)

Let n≥1 and χ be scalar holomorphic in the upper half-plane, C¹ on its real
boundary away from a real ω0 and holomorphic on a neighborhood of ω0.
Assume |χ(z)|≤C(1+|z|^(n−1)) on Im z≥0 outside a compact set. Put
P(z)=Σj=0^(n−1)χ^(j)(ω0)(z−ω0)^j/j! and
f(z)=[χ(z)−P(z)]/(z−ω0)^n, with the removable value at ω0.
Assume the boundary f is C¹ (the preceding local holomorphy supplies this at
the subtraction point). Then

$$\operatorname{Re}\chi(\omega)=\operatorname{Re}P(\omega)+\frac{(\omega-\omega_0)^n}{\pi}\operatorname{PV}\int_\mathbb R\frac{\operatorname{Im}f(\xi)}{\xi-\omega}\,d\xi,$$

and the imaginary formula has the corresponding minus Hilbert transform of
Re f plus Im P. At ω=ω0 use the stated Taylor value. This is an explicit
n-subtracted analytic theorem, not a claim that arbitrary causal media satisfy
its growth/boundary assumptions or have known subtraction constants.

**Proof.** Taylor's analytic factorization makes f holomorphic through ω0;
elsewhere it is holomorphic in the upper half-plane by the nonzero denominator.
The growth and polynomial degree give f(z)=O(|z|⁻¹) uniformly on the upper
large semicircle. Its C¹ boundary controls the principal-value divided difference;
its tail divided by ξ−ω is integrable. D2's completely proved indented contour
argument applied to f gives Re f=(1/π)PV∫Im f/(ξ−ω) and
Im f=−(1/π)PV∫Re f/(ξ−ω). Multiply by the real number (ω−ω0)^n and
add P to obtain both formulas. At the subtraction point the removable Taylor
identity proves the declared value directly. In particular a complex Taylor
polynomial cannot be silently deleted from the imaginary numerator.

A real finite polynomial in time derivatives plus an integrable causal kernel
is an explicit constitutive response on bounded C^m histories:
Presponse=ε0Σj aj E^(j)+ε0K*E. In the e^−iωt convention its transfer
polynomial is Σj aj(−iω)^j plus D2's χK. Each derivative is local in the
history and the convolution is causal, so their sum is causal; subtraction of
the **declared polynomial** leaves the proved D2 dispersion formulas. General
passivity/storage still requires its own model condition and is not inferred
from analyticity or growing response alone.

## R4 — `pthm-em-lienard-emitted-power` (relativistic radiation expansion)

For R2's prescribed uniformly subluminal C³ point curve, let a=z''(s),
β=z'(s)/c,γ=(1−β²)⁻1/2 at a specified emission event. Define emitted far-zone
power by the outward radiation energy crossing a large sphere whose center
tracks z(s), with observation time t=s+R/c. The moving boundary energy flux
is S·n−(z'·n)u; at leading radiation order u=|S|/c, so it weights the fixed
observer flux by κ=1−n·β. Then

$$P_{\rm em}(s)=\frac{q^2\gamma^6}{6\pi\epsilon_0c^3}\left(|a|^2-|\beta\times a|^2\right)=\frac{q^2}{6\pi\epsilon_0c^3}\eta(A,A),$$

where A=dU/dτ is the SR four-acceleration supplied by S4. This is prescribed
source radiation power, not a point self-force or coordinate-fixed detector
power without its time/boundary correction.

**Proof.** R2 gives the leading radiation E amplitude
q n×((n−β)×a)/(4πε0c²Rκ³), with B=n×E/c. Its fixed-sphere radial flux
is |E|²/(μ0c). The moving boundary identity subtracts (v·n)u, giving κ times
that flux. Equivalently the retarded derivative at a fixed receiver is
dt/ds=κ, yielding the same emitted-time conversion. Velocity near fields are
O(R⁻²); uniform subluminality bounds κ below, so their integrated R²flux
errors vanish. Thus

$$P_{\rm em}=\frac{q^2}{16\pi^2\epsilon_0c^3}\int_{S^2}\frac{|n\times((n-\beta)\times a)|^2}{\kappa^5}\,d\Omega.$$

For b=|β|>0 choose e3 parallel β and resolve a=a_parallel e3+a_perp e1
by a spatial rotation. Put u=cosθ. The vector triple-product numerator is
(n−β)(n·a)−κa; its squared norm is
−(1−b²)(n·a)²+2κb a_parallel(n·a)+κ²|a|².
Average over azimuth: (n·a)² averages to
u²a_parallel²+(1−u²)a_perp²/2 and n·a to u a_parallel.
Hence the parallel coefficient reduces exactly to1−u²; the perpendicular
coefficient is κ²−(1−b²)(1−u²)/2. Direct substitution y=1−bu gives

$$\int_{-1}^1\frac{1-u^2}{(1-bu)^5}du=\frac4{3(1-b^2)^3},\qquad\int_{-1}^1\frac{du}{(1-bu)^3}=\frac2{(1-b^2)^2}.$$

For the first identity an antiderivative after substitution is
b⁻3[(1−b²)y⁻4/4−2y⁻3/3+y⁻2/2] evaluated between1−b and1+b;
combining over (1−b²)³ gives the displayed value. The second is the elementary
power antiderivative. Thus the angular integral is
(8π/3)[γ⁶a_parallel²+γ⁴a_perp²], which gives the claimed power.
For b=0 direct angular integration gives(8π/3)|a|² and the formulas continue.
Finally SR S4's actual differentiation proof gives
η(A,A)=γ⁴|a|²+γ⁶(β·a)²=γ⁶[|a|²−|β×a|²]. This proves the covariant
proper-acceleration expression and reproduces R3 in the instantaneous rest frame.
