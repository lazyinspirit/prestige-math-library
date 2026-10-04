# Exact companion examples and boundary counterexamples

Every construction is conditional on the registry's physical model, units,
orientation and source/boundary assumptions. These are calculations or hypothetical
examples, not newly performed experiments. The listed proofs reference complete
K/W/R/S/C/B/H/G arguments, not textbook authority alone.

## X1 — source types, units and incompatible continuity

`ex-em-unit-dimensional-checks`: div E has V m⁻², matching ρ/ε0 since
(C m⁻³)/(F m⁻¹)=V m⁻²; curl B is T m⁻¹, matching μ0J and c⁻²E_t;
v×B has V m⁻¹, hence q(E+v×B) has N. ε0E²,B²/μ0 have J m⁻³ and
E×B/μ0 W m⁻². These are direct SI substitutions, not a metrological
measurement of μ0. `ex-em-smooth-and-point-source-types`: a smooth compact
nonnegative bump f with ∫f=1 gives ρ=qf, a smooth charge density, while
qδ_z acts by evaluation and is not a function. Their total charges agree but
only the first belongs to the smooth Cauchy branch; S2/point-current pairing
defines the second weakly. `ex-em-nonconserved-switched-charge`: let
ρ=qH(t)δ0,J=0, q≠0. Against a test, ∂tρ=qδ_(x,t) at zero while divJ=0;
therefore K1 continuity fails and no distributional Maxwell field can have
these sources without an additional current/source term.

## X2 — elementary electrostatic examples

`ex-em-uniform-ball-coulomb`: a sphere radius a with total uniform bulk Q has
ρ=3Q/(4πa³) inside. The selected spherical field is
E=Qx/(4πε0a³) for r<a and E=Qx/(4πε0r³) for r>a.
Its radial divergence is 3Q/(4πε0a³) inside and zero outside; curl is zero,
and normal E is continuous at r=a, so no unlisted sheet delta is present.
A potential continuous across a is Q(3a²−r²)/(8πε0a³) inside and
Q/(4πε0r) outside, decaying at infinity; direct gradients verify both branches.
Integrating ε0E²/2 on the two regions gives U=3Q²/(20πε0a).
The discontinuous bulk density is treated piecewise/weakly at the sphere.

`ex-em-infinite-line-normalization`: for a stationary line λ along z,
E=λ er/(2πε0r),φ=−λlog(r/r0)/(2πε0), r>0, with reference r0>0.
Its divergence/curl vanish off the line; a cylinder flux per length is λ/ε0,
fixing the line source weakly. φ has no zero-at-infinity normalization, and
energy per length over radial cutoffs is λ²log(R/δ)/(4πε0), divergent at
both endpoint limits. It is not a compact-source Coulomb corollary.

`ex-em-grounded-plane-image-force`: K3 checks the image potential and gives
−q²e3/(16πε0a²), excluding the real charge's self-field.
`ex-em-parallel-plate-capacitor`: in the infinite-plane idealization plates ±σ
separated by d have E=σn/ε0 between and zero outside by the sheet jumps and
the specified symmetric exterior condition. V=σd/ε0, Q=σA for a finite
chosen area A, so the no-fringing model C=ε0A/d and U=CV²/2 follow.
A finite real plate pair has fringe corrections; this calculation is expressly
its ideal reduced model. `ex-em-neumann-data-failure`: on a unit ball,
−Δφ=0 and ∂nφ=1 are incompatible, since divergence would give
0=∫Δφ=∫∂B1 1=4π. No solution exists despite smooth data.

`ex-em-two-charge-dipole`: opposite ±q at ±d/2 give Q=0,p=qd by finite summation;
K4/M06 gives the exterior dipole potential and its explicit remainder.
`ex-em-quadrupole-symmetry`: charges +q at ±ae1 and −q at ±ae2 have Q=p=0
and traceless quadrupole diag(6qa²,−6qa²,0), obtained by inserting each point
in 3xixj−r²δij. This is a finite source-moment calculation; self-energy is not
claimed finite.

## X3 — currents, fields and mechanical forces

`ex-em-circular-loop-axis-field`: S2's distributional closed circle limit gives
Bz=μ0Ia²/[2(a²+z²)^(3/2)], from the exact tangent integral and kernel
uniformity away from the wire. `ex-em-infinite-wire-and-solenoid`: the specified
infinite straight wire has B=μ0I eφ/(2πr), from zero curl off source and
Ampère circulation2πrBφ=μ0I. Select no additional homogeneous field.
An infinite cylindrical sheet K eφ at r=a has B=μ0K ez inside and zero
outside; divB=0, bulk curlB=0 and n×[B]=μ0K eφ exactly, verifying the
sheet source and chosen exterior field. These noncompact models are not
finite-energy localized-current theorems.
`ex-em-wire-force-coupling`: for a second parallel wire at distance d, use the
first wire's external B and the adopted wire force I2 dl×B. The magnitude
per length is μ0|I1I2|/(2πd); orientation gives attraction for equal current
directions and repulsion for opposite directions. Self-fields and support
forces of infinitely long wires are excluded from this local external-force
comparison.

## X4 — material examples

`ex-em-dielectric-interface-example`: with a stationary flat interface and no
free sheet source, K5 gives equal tangential E and equal normal D. For scalar
ε1,ε2>0, this means E2t=E1t and E2n=(ε1/ε2)E1n, directly solving the two
relations. A free σ modifies the normal equation as stated rather than being
silently set zero.

`ex-em-dielectric-sphere-example`: a homogeneous sphere radius a, permittivity
εin>0 in εout>0, subject to the prescribed asymptotic uniform E0ez, has
φin=−C E0z and φout=−E0z+d z/r³.
Both are harmonic on their respective domains. Continuity at a and normal D
continuity give C=1−d/(E0a³), εin C=εout[1+2d/(E0a³)].
Thus C=3εout/(εin+2εout) and d=E0a³(εin−εout)/(εin+2εout).
The denominator is positive; for E0=0 all fields vanish by the same linear
system. The difference from the applied uniform field decays; B4/B6 uniqueness
under that condition certifies the checked candidate. Its induced dipole is
p=4πεout d ez; using it as a dynamic wave polarizability requires a separate
quasistatic material/dipole approximation, as P1 explains.

`ex-em-constitutive-unit-counterexample`: the putative E=ε0D fails SI because
ε0D has F C m⁻³ rather than V m⁻¹. The correct algebra is E=(D−P)/ε0.
A frequency-dependent scalar ε(ω) multiplies a Fourier amplitude in its defined
material rest frame; it is not an instantaneous time-domain coefficient without
its convolution law.

## X5 — circuits, topology and gauges

`ex-em-rl-time-response`: constant V and R>0 in K6 yield
I=V/R+(I0−V/R)e^−R(t−t0)/L by evaluating the elementary integral;
direct differentiation verifies the transient and initial value.
`ex-em-transformer-idealization`: a fixed reciprocal L matrix gives terminal
induced voltages −ΣβLαβIβ'. Choosing an ideal common flux Φ and turn counts
N1,N2 gives V1/N1=V2/N2=−Φ' as the explicitly adopted common-linkage
model; a real transformer's leakage/loss/capacitance is not inferred absent.

`ex-em-topological-potential-obstructions`: on R³ minus the z-axis,
F=(−y,x,0)/(x²+y²) is curl-free by coordinate differentiation, but its unit
circle line integral is2π, so it is not a global gradient (K2 work/FTC would
make every closed gradient integral zero). On R³ minus0, B=x/r³ is div-free
but its sphere flux is4π. A global smooth A with curlA=B would make this
closed-sphere flux zero by Stokes on finitely many oriented sphere patches
with internal edge cancellation. Hence no such A exists, even though the
punctured space is simply connected. These are distinct scalar/vector
potential obstructions.
`ex-em-pure-gauge-fields`: A=∇χ,φ=−χ_t with smooth χ gives E=B=0 by K7.
`ex-em-residual-lorenz-example`: χ=Re exp[i(k·x−ωt)] with |k|=ω/c has
Wχ=0 by differentiation, so it changes Lorenz potentials without changing
G or physical fields. Boundary restrictions on χ still apply.

## X6 — polarization, interference, infinite energy and pressure

`ex-em-vacuum-energy-flow-example`: E=E0cos(kz−ωt)e1,
B=(E0/c)cos(kz−ωt)e2, ω=ck, gives S=ε0cE0²cos² e3 and
u=ε0E0²cos². Differentiate to verify ∂tu+∂zS=0 exactly.
`ex-em-polarization-examples`: amplitude e=e1 gives a line; e=e1+ie2 gives
E=e1cosθ−e2sinθ of constant norm; e=e1+2ie2 gives an ellipse with semiaxes1,2.
These transverse examples satisfy the plane-wave amplitude equations after
b=k×e/ω. `ex-em-two-beam-fringes`: equal polarized amplitudes E0 with relative
phase Δ give intensity ∝|1+e^{iΔ}|²=2+2cosΔ=4cos²(Δ/2).
The measured detector histogram additionally needs its declared measurement/
noise/integration model. `ex-em-plane-wave-infinite-energy`: a nonzero plane
wave has strictly positive period-averaged constant energy density, so its
full R³ average total energy diverges with volume. A finite-energy packet
must use square-integrable constrained Cauchy data, as W4 provides.

`texp-em-radiation-pressure-example`: for steady normally incident flux I on an
ideal absorbing or reflecting plane, C5's normal momentum flux is I/c per
incident beam. A perfectly absorbed beam has no outgoing momentum, giving
traction I/c; an ideal equal-flux reflected beam reverses momentum and the
net deposited flux is2I/c. These are adopted apparatus boundary/steady balance
assumptions, not reports of an observed pressure or an arbitrary material law.

## X7 — Fresnel, skin and guide examples

`ex-em-brewster-angle-example`: K8's equal-μ positive-media p-admittance equality
and Snell give tanθB=n2/n1; s reflection generally remains.
`ex-em-evanescent-flux-example`: take kz=iκ,κ>0 in z>0. The field factor
exp(−κz) decays, its TE/TM admittance is imaginary and averaged normal flux
ReY|E|²/2=0. Tangential energy flux may remain; this is not an information-speed
claim. `ex-em-skin-depth-approximation-example`: K8's exact q root with
εω/σ≤δ≪1 gives the stated sqrt2/(μσω) leading depth with bounded Taylor
error Oδ; σ=0 is outside that finite-depth approximation.

`ex-em-te-ten-example`: G1 with m=1,n=0 gives Hz=cos(πx/a),
Ey=iωμa/π sin(πx/a), Hx=−iβa/π sin(πx/a), all multiplied by
exp(iβz−iωt), and no other electric component. G1's exact curls/PEC
verification applies; cutoff ωc=π/(a sqrtεμ).
`ex-em-rectangular-cavity-example`: take a finite box and the tangential-E sine/
normal-even parities in G2. An explicit field
E=e1 sin(πy/b)sin(πz/d) cosωt has divE=0 and n×E=0;
choose B=(1/ω)curlE_spatial sinωt with a **minus** sign from B_t=−curlE,
so B=−curlE_spatial sinωt/ω. Then E_t=(εμ)⁻¹curlB iff
ω²=(εμ)⁻¹[(π/b)²+(π/d)²], by curlcurlE_spatial=−ΔE_spatial.
This verifies a genuine cavity mode including the required magnetic partner.

`ex-em-tem-topology-example`: in a coaxial guide a<r<b, static transverse
φ=V log(b/r)/log(b/a) gives E=V er/[r log(b/a)], harmonic in the annulus
with distinct constant conductor potentials. A traveling profile with β=ωsqrtεμ
and H=(E/Z)eφ satisfies the full first-order equations by direct cylindrical
curl/div differentiation and PEC at r=a,b; its longitudinal components vanish.
Per-length C=2πε/log(b/a), L=μlog(b/a)/(2π), so LC=εμ by direct radial
energy/flux integration. On a simply connected cross-section with one connected
conducting boundary and no bulk charge, constant boundary φ plus Dirichlet
uniqueness instead forces Etransverse=0; this shows why the nontrivial coaxial
TEM example needs its multiple conductor boundary components.

## X8 — radiation, boosts, trajectories and action

`ex-em-dipole-antenna-example`: prescribed p=p0cosωt along e3 gives the A2
pattern ∝sin²θ and average power μ0ω⁴p0²/(12πc). A finite antenna approximates
this only with the explicit source-size/error conditions A2; its current/
material feed is an additional source model.
`ex-em-no-retarded-root-example`: z(s)=(sqrt(c²s²+a²),0,0),a>0, is smooth with
|z'|<c at each finite s. For observation x=0,t=0, a retarded root would require
sqrt(c²s²+a²)=−cs, whose square would imply a²=0. Thus no root exists.
It lacks R1's uniform speed bound, so there is no contradiction with R1.

`ex-em-boosted-fields-example`: start with B=0,E=E0e2; C3 gives
E'=γE0e2, B'=−γvE0e3/c². Directly
B'²−E'²/c²=−E0²/c² and E'·B'=0, verifying invariants and observer mixing.
`ex-em-constant-field-trajectory`: external E=E0e1,B=0, particle initially at
rest, gives p=qE0t e1 from C4. Set h=qE0/(mc), then
v=c ht/sqrt(1+h²t²) and
x=x0+[c/h][sqrt(1+h²t²)−1]e1 for h≠0, with x=x0 for h=0.
Differentiation verifies v,p and work energy; |v|<c at every finite time,
contrary to an unscoped Newtonian constant-acceleration extrapolation.
No radiation self-force is included in this prescribed external test model.

`ex-em-ideal-and-measured-fringes`: the K7 ideal cross term is a prediction.
An actual finite detector record with finite bin width/background and an adopted
sampling model is a different object. Even if an ideal point intensity vanishes,
a finite bin probability is the integral over its nonzero-width response;
background can make that probability positive. No observed histogram is
invented here. `ex-em-apparatus-model-ambiguity`: if the same predicted observed
mean is Gs+b, then parameter pairs (s,b) and (s+δ,b−Gδ) give identical means;
without independent background calibration the mean alone cannot distinguish
them. This elementary nonidentifiability example requires no asserted historical
noise distribution.

`ex-em-compact-variation-example`: smooth source-free A=0 is stationary for
V2; every compact first variation vanishes because both F and j vanish.
`ex-em-stationary-not-minimum`: in physical action coordinates the quadratic
source-free action is ∫(ε0E²−B²/μ0)/2 d³xdt. A compact scalar-potential
variation A=0,φ≠0 produces positive action. A compact vector-potential variation
Atime=η(t)ψ(x)cos(Nx1)e2 has bounded temporal electric norm but spatial curl
norm growing with N, so for large N it gives negative action. The N²sin² term
has a positive spatial integral for nonzero ψ; integrating sin² over a compact
subbox where ψ is bounded below proves the lower bound for large N. Thus both
signs occur arbitrarily close to zero under rescaling, while zero remains
stationary. Stationarity is not a minimum. Sources/boundary conditions of a
different action can change this example's applicability.
