# Smooth PEC exterior Maxwell scattering closure

Research arguments, 2026-10-03. Pure mathematical suppliers come first. Scalar
outgoing-source diffraction P3 does not alone supply this vector boundary
problem. The root bounded-potential UCP proof was actually read and checked:
its radial Carleman Fourier multiplier has the stated s²/4 lower bound; the
cutoff-error absorption and finite overlapping-ball propagation apply to H²loc
solutions. Exact source/status is the root research artifact
`audit-expansion-2026-10-03/root-ucp-compact-scattering.md`, not a published item.
All assertions below use AC, inherited measure/Fredholm/trace hypotheses, SI
only in the final physical interpretation, and smooth boundaries/data.

## F1 — outgoing spherical radial functions and exact DtN bounds

For integer l≥0,z>0 set

$$h_l(z)=(-i)^{l+1}\frac{e^{iz}}z\sum_{j=0}^l\frac{i^j(l+j)!}{j!(l-j)!(2z)^j}.$$

Then h_l solves h''+2h'/z+[1−l(l+1)/z²]h=0, is outgoing and never vanishes
on the positive real axis. For k,R>0 define t_l=k h_l'(kR)/h_l(kR).
Then Re t_l≤−1/R, |Re t_l|≤(l+1)/R, and 0<Im t_l≤k.

**Proof.** Substitute h=eiz P(z)/z into the ODE. The coefficient recursion is
b_(j+1)=i(l+j+1)(l−j)b_j/[2(j+1)], b0=1, for P=Σb_jz⁻j;
the last coefficient terminates because l−j=0 at j=l. This is exactly the
factorial formula, proving the ODE. Its outgoing leading term is
(-i)^(l+1)eiz/z and the radial remainder is a finite O(z⁻²) sum.
Let y=zh_l. It solves y''+[1−L/z²]y=0, L=l(l+1).
Because the coefficient is real, Im(conjugate y y') is constant; its large-z
leading exponential gives that constant1. Hence
Im(conjugate h h')=1/z². In particular h cannot vanish.
To prove the real bounds without an unproved large-l asymptotic, put
F=|y|²=|P|². Its finite polynomial in z⁻1 is even: the coefficient b_j
has phase i^j times a real number, so odd cross terms cancel under conjugation.
Differentiating the real ODE gives
F'''+4(1−L/z²)F'+4L F/z³=0.
Writing F=Σa_jz⁻2j, a0=1, coefficient matching yields

a_(j+1)=(2j+1)[L−j(j+1)]a_j/[2(j+1)].
Thus all a_j>0 for0≤j≤l and the next is zero, with
 a_j=(2j)!(l+j)!/[2^(2j)(j!)²(l−j)!].
So |h|²=z⁻2Σa_jz⁻2j≥z⁻2. Half the logarithmic derivative gives
Re[kh'/h]=−R⁻1[1+(Σj a_j z⁻2j)/(Σa_jz⁻2j)], a weighted average of
j∈[0,l]. The Wronskian gives Im[kh'/h]=k/(z²|h|²)∈(0,k]. This proves all
bounds for every l, not just a formal asymptotic.

## F2 — scalar outgoing sphere trace and Dirichlet-to-Neumann map

Use H2's complete normalized harmonics on S_R. Its H^(1/2) boundary norm is
equivalent, for fixed R, to Σ_lm(l+1)|f_lm|². Define
T_R f=Σ_lm t_l f_lmY_lm with F1's coefficients. This is bounded
H^(1/2)(S_R)→H^(−1/2)(S_R), Re⟨T_Rf,f⟩≤0, and
Im⟨T_Rf,f⟩=Σ_lm(Im t_l)|f_lm|²>0 for f≠0.
It is precisely the outgoing scalar Helmholtz normal derivative at r=R.

**Proof of the trace norm and outgoing realization.** For finite harmonic data,
its harmonic **ball** extension Σ(r/R)^l f_lmY_lm has Dirichlet energy
Σ(l/R)|f_lm|² by Green's identity and normal differentiation, and L² ball
norm Σ[R/(2l+3)]|f_lm|² with the sphere-normalized basis. Thus its H¹ norm
is equivalent to Σ(l+1)|f_lm|². B4's bounded trace gives one direction.
For arbitrary H^(1/2) data, B4's right inverse and weak harmonic Dirichlet
solver give a controlled H¹ harmonic extension. The H3 harmonic coefficients
and orthogonality show the finite energy partial sums are bounded by its
energy; hence Σ(l+1)|f_lm|² is controlled by the boundary norm. Conversely,
if the weighted sum is finite the finite harmonic extensions converge in H¹,
and trace continuity gives the other direction. This proves equivalence.
F1's |t_l|≤(l+1)/R+k makes T bounded to the dual weighted space; its real and
imaginary pairings converge, giving all signs with strict positivity because
every Im t_l>0.

For an exterior sphere trace, define coefficients
u_lm(r)=f_lm h_l(kr)/h_l(kR), r≥R. The finite polynomial positive formula
in F1 gives |h_l(kr)/h_l(kR)|≤R/r for r≥R and, on any r≥R+δ,
additional high-l geometric damping. Write A_j=a_j(kR)^(-2j).
F1's recurrence gives A_(j+1)/A_j≥l/(kR)² for every 0≤j<l,
since (l−j)(l+j+1)≥2l and (2j+1)/(2(j+1))≥1/2.
For large l this lower bound exceeds one. Split the positive weighted sum
at j=l/2. Terms with j≥l/2 gain the factor (R/r)^l; the total lower-j
mass relative to A_l is at most (l+1)[(kR)²/l]^(l/2), decaying faster than
any fixed geometric sequence. Consequently the squared radial ratio is at
most (R/r)²[(R/r)^l+(l+1)((kR)²/l)^(l/2)].
This gives uniform exponential-in-l control on each compact r>R
interval. Differentiation of the radial equation/finite polynomials adds finite
powers of l, which preserve summability. Hence the exterior series is smooth
away from the sphere and solves Helmholtz there.
Its normal derivative at R is T_Rf in the weak trace sense, by finite-sum
approximation and the weighted bound. Local annular H¹ control up to R follows
from Green's identity for each mode on [R,R+δ] and the F1 bounds, plus its
L² bound; summing gives C||f||Hhalf². The field is outgoing modewise.
For smooth f the series and derivatives give the ordinary Sommerfeld condition;
for finite-energy trace the outgoing condition is its modal/weak version,
with no unsupported uniform pointwise condition on arbitrary rough traces.

The general radial Helmholtz solutions are multiples of h_l(kr) and its
conjugate incoming partner; their Wronskian is nonzero by F1. Sommerfeld selects
only h_l. Thus any smooth outgoing exterior solution has exactly this DtN map,
by H2 completeness and the scalar radial ODE. The supplied outgoing extension
is unique with its trace and stated class.

## F3 — exterior scalar uniqueness with smooth obstacle

Let O⊂R³ be bounded with smooth boundary and connected exterior D, k>0.
If u is smooth on closure D, solves (Δ+k²)u=0, is outgoing in F2's class,
and u=0 on ∂O, then u=0.

**Proof.** Enclose O in B_R. Green's identity on D∩B_R gives a real volume
integral ∫(|∇u|²−k²|u|²); the inner boundary contributes zero because u=0.
Hence Im⟨T_Ru,u⟩=0 on S_R. F2's strictly positive coefficient sum forces
its sphere trace zero, whence its outgoing exterior series is zero for r>R.
The root mathematical UCP theorem applies to each real/imaginary part with
bounded coefficient −k² and H²loc regularity; it propagates zero over connected
D. No finite experimental observation, physical postulate or unproved analytic
continuation is used. Source-based outgoing far-amplitude uniqueness is the
same argument with F1's Wronskian or the root scalar-source module.

## F4 — smooth exterior vector Helmholtz mixed problem

Let O,D,k be F3's geometry. Prescribe a smooth tangent electric field eT on
∂O. There is a unique outgoing smooth vector E on D satisfying
(Δ+k²)E=0 componentwise, E_tangent=eT and div E=0. The equivalent normal
boundary relation is
∂nE_n+(div n)E_n=−div_∂O eT, with n the outward normal of the truncated
exterior region (pointing into O on the inner boundary). This is the explicit
boundary closure needed for Maxwell, not three unrelated scalar Dirichlet data.

**Proof of existence.** On A=B_R\closure O, take the Hilbert space
X={v∈H¹(A;C³):v_tangent=0 on ∂O}, a closed subspace by B4 trace continuity.
Use the componentwise outer DtN T_R. Set κ=div n on the inner smooth boundary.
With first-variable linearity, define

$$a(E,v)=\int_A(\nabla E:\overline{\nabla v}-k^2E\cdot\overline v)+\int_{\partial O}\kappa E_n\overline{v_n}-\langle T_RE, v\rangle_{S_R}.$$

Its continuity on H¹ follows from the trace norm, F2 and bounded κ.
The negative outer real pairing is nonnegative. The inner collar inequality
proved in G3 bounds its possibly negative curvature contribution by
δ||∇E||²+Cδ||E||². Choose δ to absorb half the gradient and a real
λ>k²+Cδ+1. Then Re[a(E,E)+λ||E||²]≥c||E||H¹².
For completeness the complex coercive solver does not need a citation-only
Lax–Milgram: Hilbert Riesz turns the form into a bounded operator B with
Re(Bx,x)≥α||x||², ||B||≤M. Then
||(I−tB)x||²≤(1−2tα+t²M²)||x||²; choose0<t<2α/M² to get a strict
contraction. Iterating x↦(I−tB)x+t f gives a Cauchy geometric sequence in
the complete Hilbert space, converging to the unique Bx=f. Riesz represents
the bounded antilinear right-hand functional by this f with the given convention.
Thus the shifted form has a bounded inverse.

Let J:X→X* be the L² pairing. G3's finite-cube compactness proof on a smooth
bounded domain makes X→L² compact, so J is compact as X→X* (compose with
the bounded L²→X* pairing). The original form operator is the shifted inverse
composed with I−λK, K=shifted-inverse∘J compact X→X. The actually inspected
`thm-fredholm-alternative-for-identity-minus-compact`, with AC, will give
invertibility once its kernel is zero.

For a homogeneous solution in X, the imaginary part of a(E,E)=0 is exactly
−Im⟨T_RE,E⟩=0: the volume and curvature terms are real. F2 makes all three
outer component traces zero; their outer normal derivatives T_RE are zero.
Extend by the F2 outgoing series outside B_R. Both traces match, so signed
integration by parts gives a global weak componentwise Helmholtz solution on D.
It is H²loc by B7's interior L²-source estimate, and it vanishes outside B_R.
The checked root UCP with coefficient −k² makes every component zero on D.
Hence the kernel is zero. Fredholm gives bounded invertibility.

For the nonzero prescribed smooth eT, construct a smooth collar lift G with
G_tangent=eT (finite graph partition and constant-normal extension as B7).
Solve for u∈X with
 a(u,v)=−a(G,v)−∫∂O(div_∂O eT)overline(v_n).
The trace makes this a bounded functional. Set E=G+u; integration by parts
against compact interior tests gives componentwise Helmholtz, tangential trace
eT is built in, the natural inner relation is the stated Robin equation and
the outer natural relation is ∂rE=T_RE. Thus its F2 extension is outgoing.

**Regularity and the divergence constraint.** At the artificial sphere the
matched traces/normal derivatives make the extended field a weak Helmholtz
solution across the sphere; B7 interior bootstrapping makes it smooth there.
At ∂O choose a smooth orthonormal frame with two tangent components and one
normal component. Rotating E into this frame writes the principal Laplacian
as a uniformly elliptic scalar principal matrix times identity; frame derivatives
supply only smooth lower-order coupling. Its boundary data are two Dirichlet
components and one Robin component. The principal boundary conditions are complementing: in the frozen flat
half-space a decaying principal mode exp(iξ·y−|ξ|t)a has a1=a2=0 from the
two Dirichlet conditions, and −|ξ|a3=0 from the normal Neumann principal
condition. For ξ≠0 this forces all amplitudes zero; curvature and frame
connection terms are lower order. This checks the coupled boundary system,
rather than assuming three independent scalar Dirichlet problems.
The B7 tangential difference-quotient proof
works for this product test space: tangential shifts preserve the two zero
Dirichlet traces, while the normal component permits arbitrary trace. The Robin
curvature terms are bounded by the same collar inequality and absorbed; all
smooth lower-order couplings are bounded by C||E||H¹ times the test gradient/
value and handled by its identical absorption. Each normal second derivative
is recovered from its component equation with positive principal normal
coefficient. B7's explicit higher-order induction applies to the finite frame
couplings, whose coefficient derivatives multiply already controlled lower
orders; smooth lifted data supply the remaining boundary/source terms.
Thus E is smooth to the inner boundary, not merely a formal H¹ solution.

Now q=div E solves (Δ+k²)q=0 in D. The inner Robin relation and the exact
boundary identity div E=∂nE_n+κE_n+divS E_tangent give q=0 on ∂O.
The exterior outgoing component series differentiates to an outgoing q,
as follows from F1's radial polynomial plus smooth coefficient estimates;
its leading derivative is ik times the radial directional component and its
Sommerfeld remainder is still lower order. F3 then yields q=0. This proves
the divergence constraint as a deduction; it was not presumed from independent
component wave equations. Uniqueness of the vector problem was already proved
in the Fredholm kernel argument.

## F5 — `pthm-em-pec-monochromatic-exterior-scattering`

Adopt lossless vacuum Maxwell with ε0μ0c²=1, ω>0,k=ω/c, a smooth bounded
stationary perfect electric conductor O with connected exterior, and a smooth
incident source-free Maxwell phasor near O. Solve F4 with tangential scattered
E_tangent=−Eincident_tangent and set
Hscat=(iωμ0)⁻¹curl Escat, Bscat=μ0Hscat.
Then the total field satisfies PEC n×Etotal=0, and the scattered field is the
unique outgoing source-free Maxwell solution in F4's smooth class.

**Proof.** F4 gives divE=0 and ∆E+k²E=0. Thus
curlH=(iωμ0)⁻¹curlcurlE= (iωμ0)⁻¹k²E=−iωε0E,
and curlE=iωμ0H by definition; divH=0 by divcurl cancellation.
These are exactly the harmonic Maxwell equations with the e^−iωt convention.
The boundary tangent condition cancels the incident trace; normal E is supplied
by the induced conductor charge rather than independently prescribed.
F4's outgoing modal extension gives the Maxwell radiation relation by taking
the leading curl: H=(1/Z0)n×E at infinity, Z0=μ0c.
Any other outgoing Maxwell field has divE=0, component Helmholtz and that
same mixed tangential/normal boundary condition, so F4 uniqueness applies.
This closes a genuine vector exterior boundary/scattering branch. It does not
claim scattering for arbitrary nonsmooth obstacles, arbitrary dispersive/lossy
constitutive tensors, every time-dependent boundary or uncontrolled scalar
aperture approximations.

## F6 — exact boundary representation and scalar aperture disposition

For a smooth bounded scalar Helmholtz domain Ω, a point x∈Ω and a smooth
solution (−Δ−k²)u=f, P3's normalized Gk and Green excision give

$$u(x)=\int_\Omega G_k(x-y)f(y)\,dy+\int_{\partial\Omega}\left[G_k(x-y)\partial_nu(y)-u(y)\partial_{n_y}G_k(x-y)\right]dS_y.$$

**Proof.** Apply the second Green identity on Ω\Bδ(x) to u and Gk.
Their k² terms cancel. The unit inner kernel flux and the continuous u limit
contribute −u(x) to ∫(u∆G−G∆u), while the volume source contributes ∫Gf.
Move the remaining boundary terms to obtain the displayed formula and let δ→0;
the derivative-test inner term is Oδ and the flux times u−u(x) tends to zero
by continuity. The full normalization and outward-hole sign were proved in P3.
For an exterior outgoing solution truncate by a large sphere; F1/F2's outgoing
leading terms make its Wronskian boundary integrand cancel at leading order,
and the remaining compact-observation estimate tends to zero. Thus the same
representation uses the actual inner boundary traces and source terms.

This identity **requires consistent actual traces**. Assigning both aperture
u and ∂nu arbitrarily is not a well-posed exact Maxwell boundary prescription.
An expressly adopted scalar aperture-source model instead uses P3's source
integral, with its proved Fresnel/Fraunhofer errors; polarization/aperture back
reaction and its regime of scalar approximation are separate physical model
assumptions. These dispositions preserve exact boundary theory and useful
optical approximations without promoting an overdetermined Kirchhoff ansatz
into an exact general theorem.
