# Remaining core conditional electromagnetic deductions

2026-10-03. Research arguments. Definitions, units, SR assumptions and force
conventions are `definition-contracts.md` and completed arguments C1. All
results are conditional on the named Maxwell/material/circuit postulates.
Regularity and boundary hypotheses are part of every statement below.
Mathematical identities use only mathematical suppliers; no physical premise
is used to establish a mathematical theorem. These explicit proofs replace
strategy-only records for their exact branches.

## K1 — superposition, integral equations, continuity and constraints

`pthm-em-linear-superposition`: on the same region, linear combinations of C¹
Maxwell fields/sources with the same constants solve the equations with the
same combinations of sources. Proof: div,curl and ∂t are linear coordinate
derivatives, so substituting aE1+bE2,aB1+bB2 gives a times each first equation
plus b times the second. Initial/boundary data combine likewise; self-consistent
nonlinear matter constitutive laws are not claimed linear.

`pthm-em-integral-maxwell`: for the exact fixed geometry in the registry,
apply the stated divergence theorem to E,B and the patch Stokes theorem to
E,B. On a fixed compact patch continuous joint time derivatives can be moved
through the flux integral by uniform difference quotients (M01). This gives
all four integral equations in the canonical prose with their actual outward/
boundary orientations. Conversely, subtract the two integrands and localize
on small balls for divergence or coordinate-normal disks for curl: if a
continuous difference is positive at a point, continuity makes its integral
strictly positive on a sufficiently small disk/ball, a contradiction. Apply
to each component and to its negative. Hence validity on every such small
test geometry recovers every differential component. This proves equivalence,
not recovery from one selected test surface.

`pthm-em-charge-continuity`: for C² fields take div of
curl B=μ0J+c⁻²E_t. The left side is zero by paired mixed-partial cancellation;
Gauss makes the right side μ0(div J+ρ_t), since c⁻²/ε0=μ0.
Divide by μ0>0. Distributionally the same cancellation holds because signed
test derivatives commute. `pthm-em-gauss-constraint-propagation`: the evolution
equations give ∂t div B=−div curl E=0 and
∂t(div E−ρ/ε0)=c²div curl B−div J/ε0−ρ_t/ε0=0 by continuity.
Each defect is constant in t, so zero initial defect remains zero; nonzero
initial defect remains and cannot be ignored.

`pthm-em-fixed-vacuum-jumps`: split distribution integration by parts over the
two stationary sides with normal n from minus to plus. Their opposite outward
normals give ∂iFj=piecewise∂iFj+ni[Fj]δS. Sum diagonal indices for div,
antisymmetrize for curl, and note that a fixed interface gives no temporal delta.
Equating Maxwell delta coefficients gives n·[E]=σ/ε0,n·[B]=0,
n×[E]=0,n×[B]=μ0K. This assumes bounded one-sided C¹ traces, no interface
edges/magnetic sheets or moving support. Those cases need their different source
terms. `texp-em-displacement-current-surface-choice`: for two oriented spanning
surfaces, the difference of J+c⁻²μ0⁻¹E_t fluxes is a closed-volume integral
of div J+ρ_t=0. Thus the full Ampère circulation is surface independent;
conduction-only flux need not be. A charging capacitor is a conditional example
of this identity with its specified smooth/source/sheet geometry.

## K2 — electrostatic potential, Coulomb, work and energy

`pthm-em-electrostatic-potential`: on a star-shaped spatial domain and static
C¹ E, curl E=0. The radial scalar construction
φ(x)=−∫0¹E(a+s(x−a))·(x−a)ds has ∇φ=−E: differentiation, symmetry
of the field derivative from curl E=0, and the derivative of sE(a+s(x−a))
combine to its endpoint E(x). Then −Δφ=div E=ρ/ε0.
Global topology restrictions are retained.

`pthm-em-coulomb-solution`: for smooth compact ρ on R³ use S1 to obtain
φ=ε0⁻¹Nρ, E=−∇φ. The equation and φ→0 follow from the normalized kernel
and compact support; curl E=0. For compact L¹ ρ the imported Newtonian
argument gives the weak equation and smoothness only off support. For a point
q, φ=q/(4πε0r), E=q x/(4πε0r³) off zero. Excision against a compact test
has unit normalized inward kernel flux, giving the correct point delta.
Uniqueness with infinity normalization: a harmonic difference h that tends
to zero has zero boundary values at infinity. On a large ball its maximum and
minimum are controlled by its sphere boundary. To prove the required maximum
principle, an attained interior maximum and the harmonic sphere-mean property
force all nearby values equal to that maximum; its maximum locus is open and
closed on the connected domain, hence the function is constant. Apply to h
and −h on truncated domains and let the distant boundary sup tend to zero.
Thus h=0. Without boundary/decay data a harmonic addition is not excluded.

`pthm-em-electrostatic-work`: along a piecewise C¹ prescribed external test
path, the SR coordinate power is qE·v, since the magnetic force is perpendicular
to v (C4). Integration of qE·dz=−q∇φ·dz gives
W=q[φ(start)−φ(end)] by the chain rule and FTC on each path piece.
Endpoint cancellation across the finite partition proves the formula; a static
source model and external test-field interpretation are explicit.

`pthm-em-electrostatic-field-energy`: for smooth compact ρ, Coulomb estimates
give φ=O(r⁻¹),∇φ=O(r⁻²); their ball boundary term
∫∂BRφ∂nφ=O(R⁻¹) vanishes. Green's identity and −Δφ=ρ/ε0 yield
(ε0/2)∫|∇φ|²=(1/2)∫ρφ. All integrals are finite locally by smoothness
and at infinity by r⁻⁴ energy density. The symmetric double kernel counts each
pair twice, giving the factor1/2 for a quasi-static assembly model.
`pthm-em-point-self-energy-divergence`: the same density outside a radius δ
integrates to q²/(8πε0δ); it diverges as δ↓0 for q≠0. This is a field-energy
divergence, not a theorem equating it to an observed particle rest mass.

## K3 — conductors, boundary existence/uniqueness, images and capacitance

`pthm-em-conductor-surface-charge`: under equilibrium Einside=0 and the fixed
vacuum jump, n·Eoutside=σ/ε0; curl-free potential is constant on each
connected conducting interior because its gradient vanishes along any finite
piecewise smooth connecting path. `pthm-em-electrostatic-bvp-uniqueness`:
the difference w of two classical solutions with identical source obeys Δw=0.
Dirichlet w=0 makes Green give ∫|∇w|²=0, hence w=0 by connectivity and trace.
Neumann ∂nw=0 instead makes w constant per component. The original compatibility
−∫ρ/ε0=∫∂Ω∂nφ is obtained by divergence; it is necessary rather than existence.
Weak variants follow from B2/B4/B6's difference test. `pthm-em-electrostatic-bvp-existence`:
B4–B6 construct the actual weak potential for their exact Dirichlet/Neumann/
transmission data; B7 upgrades it to smooth/classical for the stated smooth
domains/coefficient/data and disjoint smooth interfaces. Defining E=−∇φ then
verifies static Maxwell and the stated boundary/jump equations. The potential
exists by those proofs, not by uniqueness alone. Planned broader mathematical
regularity statements may be planning suppliers only with their actual status
and hypotheses, not as already-proved universal results.

`pthm-em-image-method-certificate`: for a positive-half-space point q at height
a>0, place the opposite image below the plane. The sum
q/(4πε0)[|x−ae3|⁻¹−|x+ae3|⁻¹] has exactly the prescribed interior delta,
zero plane trace and decays at infinity. The image singularity is outside the
domain. The maximum argument K2 on punctured/truncated difference domains,
with matching source singularities removed, proves uniqueness in the stated
continuous-boundary/decay class. The image is a checked candidate, not a proof
that every geometry has an image solution. Its external field at the real
charge is −q e3/(16πε0a²), giving test force −q²e3/(16πε0a²).

`pthm-em-capacitance-energy`: suppose the conductor Dirichlet problem exists
with a unit voltage difference and grounded reference. Linearity gives φV=Vφ1,
Q=CV, C=Q1. Green's boundary identity gives ∫ρφ (including surface charge)
=QV, and field energy is U=QV/2. For nonzero voltage the field is not identically
zero, hence ε0∫|E|²>0, so C>0 and U=Q²/(2C)=CV²/2.
For multiple grounded conductors, unit-potential solutions φj define Cij by
boundary charge; Green's symmetric pairing gives Cij=Cji and
VᵀCV=ε0∫|∑Vj∇φj|²≥0, with strict positivity under a fixed ground and
independent nonconstant component potentials. This supplies reciprocity and
energy, without asserting arbitrary-boundary solvability.

## K4 — moments, dipole torque, magnetostatics and loops

`pthm-em-electric-dipole-expansion`: M06's explicit Taylor integral remainder
bounds the potential by Q/(4πε0r)+p·x/(4πε0r³)+error ≤16a²||ρ||1/(4πε0r³)
for r≥2a. H1–H3 give its full harmonic exterior series and sphere boundary
branch, so `pthm-em-electric-general-multipoles` follows by multiplying the
proved kernel expansion by ρ/(4πε0), integrating its uniform bound and reading
the harmonic coefficients. `pthm-em-moment-origin-change`: replace x by x−b
under the integral to obtain pnew=p−Qb exactly.
`pthm-em-electric-dipole-torque`: for compact charge support in B_a and an
external field Eext with Lipschitz bound L, integrate x×ρEext(x).
Its constant term is p×Eext(0); the remainder norm is ≤La²||ρ||1.
For two charges ±q at ±d/2 this gives p=qd and the same restricted small-size
result. No force from an undefined point self-field is used.

`pthm-em-magnetostatic-vector-potential`: for smooth compact div-free J,
A=μ0NJ solves −ΔA=μ0J by S1. Integration by parts transferring the first
kernel derivative to J gives div A=μ0N(div J)=0. Then B=curl A has div B=0
and curl B=grad div A−ΔA=μ0J. `pthm-em-biot-savart`: differentiate the
kernel off source support or use S1's integrable first derivative to get
B=μ0/(4π)∫J(y)×(x−y)/|x−y|³dy. S2 justifies the corresponding closed
thin-loop limit away from support. S3's differentiated Taylor remainder and
current-moment cancellations prove `pthm-em-magnetic-dipole-field` with its
uniform field error, rather than differentiating an uncontrolled O term.

`pthm-em-magnetic-loop-force-torque`: for a closed small loop carrying I in a
prescribed C² external B, force is I∮dl×B and torque I∮x×(dl×B).
A constant B contributes zero force since ∮dl=0. Taylor gives first-order
force ∇(m·B) for div B=0, with m=(I/2)∮x×dl. In components, write
∮xj dxi=−∮xi dxj by integrating d(xixj), identify its antisymmetric matrix
with m, and contract εijk ∂ℓBk∮xℓdxj; the result is
∂i(m·B)−mi div B. The quadratic Taylor error is bounded by
|I|length(loop)a² sup|D²B|/2. For torque in constant B, the same antisymmetric
integrals and triple-product identity give m×B exactly; a Lipschitz variation
adds error ≤|I|length(loop)a² sup|DB|. Mechanical rest-frame wire coupling
is assumed; intrinsic quantum spin is not a loop deduction.

## K5 — averaging, matter, jumps and restricted energy

`pthm-em-macroscopic-maxwell`: insert ρ=ρf−divP and
J=Jf+P_t+curlM into vacuum Maxwell, set D=ε0E+P,H=B/μ0−M.
Gauss becomes div D=ρf; Ampère becomes curl H=Jf+D_t by cancellation.
The homogeneous equations are unchanged. For smooth common convolution kernel
averaging, derivatives commute by differentiating under the compact source
integral or transferring derivatives onto the smooth kernel. This does not
identify a constitutive law from vacuum Maxwell alone.
`pthm-em-material-stationary-jumps`: apply K1's piecewise distribution derivative
to D,H,E,B. Delta coefficients give n·[D]=σf,n·[B]=0,n×[E]=0,n×[H]=Kf.
Stationary interfaces, no dipole layers/magnetic sheets and bounded traces are
part of the conclusion's scope.

`pthm-em-restricted-material-energy`: for constant symmetric positive ε,μ,
D=εE,B=μH gives E·D_t=∂t(E·εE/2) and H·B_t=∂t(H·μH/2).
Dot Ampère with E and Faraday with H and use
 div(E×H)=H·curlE−E·curlH to obtain
∂t[(E·D+H·B)/2]+div(E×H)=−Jf·E.
Ohmic J=σE has loss E·σE≥0 under its positive-semidefinite assumption.
Temporal/spatial nonlocal, nonlinear or hysteretic media do not automatically
have this stored energy. `pthm-em-causal-dispersive-response`: D1/D2's declared
kernel postulate supplies causal response, analytic χ and the exact proved
dispersion formula, while passivity remains the separate quadratic work
condition. Its statement carries the actual integrability/subtraction regime;
broader planned analytical suppliers retain planned proof status.

## K6 — induction and explicit circuit models

`pthm-em-motional-emf`: M02 differentiates the parametrized flux to give
Φ'=∫S B_t·n−∮C(v×B)·dl for divB=0. Fixed-surface Faraday gives
∫S B_t·n=−∮C E·dl. Add the terms to obtain
∮C(E+v×B)·dl=−Φ'. This is a moving-material-circuit deduction with the
exact regularity/no-source-crossing hypotheses, not a reused fixed-loop formula.
For a sliding bar of length l moving at speed v perpendicular to a uniform B,
its rectangular area derivative lv gives |emf|=Blv and orientation fixes the
sign, proving `texp-em-sliding-bar-emf` under that ideal circuit model.

`pthm-em-inductance-reciprocity`: for smooth compact conserved current profiles
jα and J=ΣIαjα, define
Lαβ=μ0/(4π)∫∫jα(x)·jβ(y)/|x−y|dxdy.
The integrable diagonal singularity and compact smooth profiles permit Fubini;
exchange x,y and α,β to get Lαβ=Lβα. Green and div A=0 show
U=(1/2)∫J·A=(1/(2μ0))∫|curl A|², with vanishing infinity boundary term
and ∫|∇A|²=∫|curlA|²+∫|divA|² from coordinate integration by parts.
Thus U=IᵀLI/2≥0. `pthm-em-inductor-energy` also follows by integrating terminal
power I d(LI)/dt for a fixed scalar L, giving LI²/2 plus its chosen energy
reference; a changing geometry needs its mechanical work term. Singular
zero-radius wire self-inductance is not assigned a finite value.

`pthm-em-rl-lc-dynamics`: in the adopted lumped scalar circuit L>0,R≥0,
LI'+RI=V(t), continuous V, the integrating-factor formula
I(t)=exp[−R(t−t0)/L][I0+L⁻¹∫t0^t exp[R(s−t0)/L]V(s)ds]
is verified by product differentiation and has the initial value. Any two
solutions have difference e^−Rt/L times a constant, zero initially, hence
unique. For a lossless LC loop LQ''+Q/C=0, C>0, Ω=(LC)⁻1/2,
Q=Q0cosΩ(t−t0)+(I0/Ω)sinΩ(t−t0) has the exact initial values and equation;
its energy LI²/2+Q²/(2C) has derivative I(LI'+Q/C)=0.
These are consequences of the expressly adopted circuit reduction, not exact
arbitrary Maxwell circuits.

## K7 — potentials, gauge, balance and vacuum waves

`pthm-em-spacetime-potentials`: M05's joint-smooth radial vector construction
on a star-shaped spatial region gives curl A=B. Faraday makes
curl(E+A_t)=0, so the scalar radial construction gives E+A_t=−∇φ.
All time derivatives commute by joint smooth compact parameter integration.
`pthm-em-gauge-invariance`: direct cancellation yields B'=B,E'=E.
`pthm-em-lorenz-gauge-wave-form`: defining G=divA+c⁻²φ_t,
Maxwell becomes Wφ−G_t=ρ/ε0 and WA+gradG=μ0J.
Gauge gives G'=G−Wχ. W6 solves the all-space smooth wave gauge; B4–B7 solve
spatial Coulomb-gauge Poisson with specified admissible boundary data.
Thus `pthm-em-gauge-reachability` holds exactly in those declared all-space or
smooth bounded elliptic branches, with residual Wχ=0/Δχ=0 freedom and no
claim that arbitrary incompatible χ boundary/initial restrictions can be met.

`pthm-em-poynting-balance`: dot Ampère with E/μ0 and Faraday with B/μ0.
Using div(E×B)=B·curlE−E·curlB and ε0μ0c²=1 gives
∂t[(ε0E²+B²/μ0)/2]+div(E×B/μ0)=−J·E directly.
`pthm-em-momentum-balance`: M04's coordinate identity gives
 divσ=ρE−ε0 E×curlE−B×curlB/μ0
=ρE+J×B+ε0(E×B_t+E_t×B)=f+∂t(ε0E×B).
Thus ∂tg−divσ=−f. These complete direct vector arguments use the primitive
postulates and M04, without a forward dependency on the later covariant C5.
`pthm-em-angular-balance`: differentiate x×g and its flux −x×σ;
the derivative of x contributes the antisymmetric contraction of symmetric σ,
zero by paired index cancellation, leaving −x×f.
`pthm-em-coupled-total-conservation`: explicitly assume smooth matter fields
u_m,S_m,g_m,Π_m on the same region with symmetric Π_m and
∂tu_m+divS_m=J·E, ∂tg_m+divΠ_m=f. Add the just-proved field identities
to get zero total sources; symmetry gives the corresponding total angular
identity. Finite-volume divergence includes its boundary flux, so constancy
requires that flux vanish or be included in the chosen system.
C5 supplies the later SR tensor completion consistent with these direct
balances. A prescribed current does not automatically provide the assumed
matter accounting or an isolated closed system.

`pthm-em-vacuum-wave-equation`: differentiate Faraday and curl Ampère in vacuum;
C² curl-curl=grad div−Δ and divE=divB=0 give
E_tt=c²ΔE,B_tt=c²ΔB. W4 proves conversely the correct constrained initial-value
solution, not a claim that unconstrained component wave solutions are Maxwell.
`pthm-em-plane-wave-maxwell`: substitution of Re[e exp i(k·x−ωt)] gives
k·e=k·b=0, k×e=ωb,k×b=−ωe/c². For e≠0, cross the first curl relation
by k and use transversality to obtain |k|²=ω²/c²; b=k×e/ω supplies the
other equations. Conversely these algebraic conditions verify every equation.
`pthm-em-wave-energy-average`: the compact-period exponential calculation gives
⟨Re(ae^−iωt)Re(de^−iωt)⟩=Re(a conjugate d)/2 componentwise;
thus ⟨u⟩=ε0|e|²/2, ⟨S⟩=ε0c|e|² khat/2 and g=S/c².
`pthm-em-classical-interference`: with coherent same-frequency amplitudes e1,e2,
|e1+e2|²=|e1|²+|e2|²+2Re(e1·overline e2), including the declared
spatial phase. Averaging does not erase a fixed phase cross term. Classical
wave interference predicts intensity; a finite detector count distribution
requires its separate measurement/noise model.

## K8 — phase matching, Fresnel and skin depth

`pthm-em-phase-matching`: tangential boundary continuity for all tangential
positions and times makes two nonzero Fourier plane-wave boundary characters
match their tangential wavevector and ω; otherwise their distinct exponential
characters cannot cancel identically (integrate against each character on a
large tangential box or differentiate the equality). Hence common kparallel
and ω, with kj²=εjμjω², gives Snell's relation where propagating angles exist.

`pthm-em-normal-fresnel` and `pthm-em-oblique-fresnel`: define incident, reflected
and transmitted **tangential E** scalar amplitudes along a fixed tangential
polarization. In lossless isotropic media with no free surface source define
TE admittance Ys=kz/(μω), TM admittance Yp=εω/kz, where forward kz>0 for
propagating waves and Im kz>0 for decaying transmitted evanescence.
The reflected wave reverses its normal H-flux sign. The two boundary equations
are Ei+Er=Et and Y1(Ei−Er)=Y2Et. For Y1+Y2≠0 they give
r=(Y1−Y2)/(Y1+Y2),t=2Y1/(Y1+Y2). At normal incidence Yj=1/Zj this is
the usual r=(Z2−Z1)/(Z1+Z2),t=2Z2/(Z1+Z2).
Normal averaged flux is Re(Y)|Etangent|²/2 by the period average. For real
positive Ys/Yp, direct substitution gives |r|²+(Y2/Y1)|t|²=1.
For total internal reflection kz2=iκ, κ>0, Y2 is pure imaginary, so |r|=1
and transmitted normal average flux is zero while its amplitude decays.
For equal μ and positive scalar refractive indices, Yp1=Yp2 together with
Snell gives tanθB=n2/n1 in the allowed propagating interval, proving the
Brewster example under exactly those hypotheses. Polarization sign conventions
for full-vector reflected amplitudes may reverse r relative to this fixed
tangential-E convention; the definition prevents that ambiguity.

`pthm-em-conducting-skin-depth`: in a homogeneous stationary scalar Ohmic medium,
phasor equations give k²=a+ib with a=μεω²,b=μσω≥0. Select k=p+iq,
p,q≥0 in z>0. Then p²−q²=a,2pq=b, so
q=[(sqrt(a²+b²)−a)/2]¹/² and δskin=1/q when σ>0.
For b≫a, factor b inside the square root and Taylor on a/b in a bounded
small interval to obtain δskin=sqrt[2/(μσω)](1+O(εω/σ)), with a
bounded Taylor remainder. For σ=0 there is no attenuation and δ is infinite,
not a division by zero passed off as a finite skin length.

## K9 — guide dispersion, energy and the conditional orbit model

`pthm-em-guide-dispersion-energy`: G1 gives β²=ω²εμ−kc². On its propagating
branch, dω/dβ=β/(εμω)≤1/sqrt(εμ). Cross-section energy/flux from its
explicit profiles use integration by parts ∫|∇h|²=kc²∫|h|² (Neumann) or
∫|∇e|²=kc²∫|e|² (Dirichlet), with zero boundary term.
Insert G1's transverse fields and average real squares; the integrated
Poynting flux divided by integrated energy is β/(εμω), the same value.
This is a lossless separated-guide result, not a bound on arbitrary dispersive
information/group speeds. `pthm-em-guide-completeness`: G2 proves the rectangular
reflection class; G3 proves the stated closed smooth PEC cavity curl spectral
class. They supply complete bases in their exact energy spaces, retaining zero
modes. General open/lossy/exterior scattering remains separately required.

`texp-em-classical-orbit-instability`: adopt a quasistatic circular-orbit
approximation with attractive κ/r potential, rest m, q, low speeds,
Eorb=−κ/(2r), circular acceleration a=κ/(mr²), and imposed energy balance
Eorb' =−q²a²/(6πε0c³). Then dr/dt=−A/r²,
A=q²κ/(3πε0m²c³)>0, so r³=r0³−3A(t−t0) and the radius decreases
while the approximation holds. Direct differentiation verifies both equations.
The reduced ODE has the formal finite-collapse limit r→0 as
 t↑t0+r0³/(3A), directly from its solved cubic; this mathematically valid
reduced-model prediction is retained. The low-speed condition v²=κ/(mr)≪c²
fails at sufficiently small r, so this
is not an exact proof of reaching r=0, measured atom lifetimes or coupled
point-particle self-force. The genuine instability in the declared reduced
model is preserved, with its applicability boundary.

## K10 — uniform Ohmic loss and declared scalar optical model

A homogeneous stationary conductor with constant scalar ε,μ>0,σ≥0 in the
same closed PEC modal class has E_t=(εμ)⁻¹curlB−(σ/ε)E,B_t=−curlE.
For each curl eigenmode of G3 its electric coefficient obeys
aj''+(σ/ε)aj'+(εμ)⁻¹λjaj=0. The roots are
−σ/(2ε)±sqrt[σ²/(4ε²)−λj/(εμ)]; at a repeated root include the solution
te^−σt/(2ε). Direct differentiation verifies the modes and uniqueness of each
finite ODE. Their energy derivative is −σ∫|E|²≤0 by K5; uniform finite-sum
tail energy control as G2/G3 proves convergence and completeness for this
declared constant-Ohmic energy class. It is a genuine proved lossy-cavity
branch, not a theorem for arbitrary nonlocal/hysteretic constitutive tensors.
The rectangular guide's Fourier transform in its infinite longitudinal
coordinate gives the same finite transverse-mode matrix equations for each
real β, with the root Fourier L² inversion and Parseval supplying completeness
of that precise open longitudinal guide class. Its transverse sin/cos basis is
G2's product argument, and the β transform is a purely mathematical supplier.

`post-em-scalar-aperture-model` adopts the P3 scalar compact source integral as
an optical approximation in a specified polarization-insensitive scalar regime;
it does not assert exact vector PEC aperture data. `pthm-em-scalar-aperture-diffraction`
then inherits P3's absolute Fresnel/Fraunhofer remainder and F6's distinction
between actual traces and assigned source data: substitute the adopted source
amplitude into those complete mathematical expressions. `ex-em-rectangular-aperture`
for uniform scalar amplitude A0 on [−a,a]×[−b,b] has Fraunhofer amplitude
4ab A0 sinc(ka n1)sinc(kb n2), sinc z=sin z/z for z≠0 and sinc0=1.
Integrating e^−ikn1y1 and e^−ikn2y2 over the two intervals gives this exact
product; the sinc zero limit is the FTC quotient limit sin z/z→1.
Its squared magnitude is a model intensity pattern with P3's distance/phase
error bounds, not a fabricated measured optical experiment.

`rem-em-radiation-reaction-limits` records that a point self-field is singular,
its energy diverges as K2 proves, and the product needed for its own Lorentz
force is not defined by these distributional Maxwell postulates. No general
self-force well-posedness or electromagnetic derivation of rest mass is claimed.
`rem-em-classical-validity-limits` records the expressly classical continuum,
external-force/material-model regimes, the absence of quantum charge/spin/
measurement assumptions, and qualified empirical support. These are scope
remarks rather than speculative established theorems. General nonlinear,
nonlocal/lossy arbitrary-medium or nonsmooth-scattering extensions are retained
as prospective extensions, not hidden prerequisites of the fully stated
conditional results proved here.
