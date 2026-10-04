# Superseded mathematical design history

Current exact statements/proofs are in mathematical-prerequisites.md and the
completed arguments. Earlier open strategies/counts here are historical.

# Current mathematical expansion status

The original M01–M17 specifications below are retained as promised scope.
[completed-expansion-arguments.md](completed-expansion-arguments.md) now supplies
complete W1–W6, R1–R3, S1–S3, C1–C5, V1–V2, D1, A1–A2, B1–B3,
H1, G1–G2 and O1 arguments for the exact statements recorded there. Historical
“no proof supplied” sentences describe the earlier design and are superseded
for those exact branches, never for their stronger unproved generalizations.

M09's smooth all-space Cauchy/retarded branch is W1–W6; M10's uniform
subluminal all-history point-root/potential/field branch is R1–R2; M15's
smooth compact-source far-field/flux branch is A1–A2 and the instantaneous-rest
Larmor statement R3. The magnetic differentiated remainder and thin-wire limit
are now S2–S3. Particle-curve variation is V1. D1 proves compact-kernel causal
dispersion, B1–B3 prove the specified-lift weak Dirichlet branch, H1 the exterior
Legendre kernel series and G2 rectangular PEC reflection-class L² completeness.

H2–H3 now prove the spherical L² basis/addition theorem, exterior kernel series
and ball boundary convergence; B4–B6 now use authorized adequate draft trace
arguments for prescribed-boundary weak Dirichlet/Neumann/transmission.
Still required: M12 classical regularity on the promised smooth domains;
M13 general H(curl) boundary/spectral/exterior scattering; M14 general
subtracted/noncompact response; M16 actual experiment-selected analysis.
These are **not discharged**. Mathematical claims do not consume SR postulates;
only SR's purely mathematical geometry/tensor suppliers enter mathematical
arguments. Exact cross-framework uses are in `sr-to-em-mapping.json`.

# Local mathematical prerequisites for the EM prose design

This is a mathematical development inside a design artifact, not authored library items, an engine manifest, or an acceptance record. All statements here concern functions and geometric objects under mathematical hypotheses; none depends on a physical observation or postulate. Proposed IDs are reserved conceptually only. Existing mathematical suppliers remain canonical and read-only. `LOCAL ARGUMENT` means the argument below has been supplied, not independently audited. `OPEN` means it cannot be used as a closed prerequisite in production. Countable Choice is carried where the published Lebesgue/surface interfaces require it; no new invocation of arbitrary Choice is hidden here.

## M01: parameter calculus and localization

**Proposed `lem-em-parameter-integrals` (LOCAL ARGUMENT).** Let K be a fixed compact measurable subset of R^n with finite measure; let f and its first parameter derivative be continuous on K × [a,b] and extend to a neighborhood there. Then d/dt ∫K f(x,t) dx = ∫K ∂t f(x,t) dx, with relative endpoint derivatives. For surface measure on a fixed compact C1 surface the same conclusion holds. The mean-value theorem represents every difference quotient as an average of ∂t f along the parameter interval. Uniform continuity on the compact product makes these quotients converge uniformly to ∂t f. Their integral error is bounded by the uniform error times the finite volume or area. This proof does not apply to a moving surface or to a singularity crossing K. Dependencies: published mean-value theorem, compactness/uniform continuity and finite-measure integral estimates (audit); no physics.

**Proposed `lem-em-continuous-localization` (LOCAL ARGUMENT).** If continuous g on open U ⊂ R^n has ∫V g = 0 for every ball V compactly contained in U, then g=0. If g(p)>0, continuity gives a ball on which g≥g(p)/2 and its positive measure gives a positive integral; negative g is treated by -g. Vector versions apply componentwise. If continuous F:U→R^3 has zero flux through every sufficiently small planar disk in each of the three coordinate planes, then every component is zero by the same argument on that plane. Disk orientation is the coordinate normal. Dependencies: positive measure of balls/disks, continuity, monotonicity of integrals. This supplies the converse from universal integral Maxwell relations to pointwise equations; one special loop or box is insufficient.

## M02: transport of a parametrized surface

**Proposed `def-em-moving-patch` (definition).** Let D be a compact finite elementary Green region in R^2 with oriented boundary and r:D×I→R^3 extend as a C2 map to a neighborhood; require ru×rv≠0, with embedded images if an actual material sheet is intended. Put v(r(u,v,t),t)=∂t r, requiring a single-valued C1 velocity on a neighborhood of the swept surface. Flux of C1 B is Φ(t)=∫D B(r,t)·(ru×rv) du dv.

**Proposed `lem-em-moving-flux` (LOCAL ARGUMENT).** Under this definition and div B=0, Φ'(t)=∫S(t) ∂t B·n dS - ∮∂S(t) (v×B)·dl. Differentiate the parametrized integral using M01. The area derivative is ∂u v×rv+ru×∂v v. In components, collecting the derivative of B along v and the area terms gives ∂t B + (v·∇)B + B div v -(B·∇)v, dotted with ru×rv. The published identity curl(v×B)=v div B-B div v+(B·∇)v-(v·∇)B turns this into ∂t B + v div B - curl(v×B). Under div B=0, surface Stokes gives the stated boundary term. Every term is continuous; C2 r permits its mixed derivatives to commute. Without div B=0 retain ∫S v(div B)·n. Dependencies: M01, classical patch Stokes, cross-product differential identity, multivariable chain/product rules. This is a mathematical supplier for motional induction; Lorentz-force interpretation is a separate physical premise.

## M03: distributional sheets and moving point support

**Proposed `def-em-surface-distribution` (definition).** For a fixed compact C2 interface S with chosen unit normal n from side minus to side plus, δS(ψ)=∫S ψ dS; density a gives aδS(ψ)=∫S aψ dS. Continuous a on S makes a finite-order continuous functional on tests, since its absolute value is bounded by ∫S |a| times the sup norm. Use compact localization for noncompact S. A piecewise C1 field F=F- on Ω- and F+ on Ω+ has one-sided continuous traces and locally integrable components. Let [F]=F+-F-.

**Proposed `lem-em-interface-derivatives` (LOCAL ARGUMENT).** Away from interface edges, div F equals the piecewise classical divergence plus n·[F] δS; curl F equals piecewise curl plus n×[F] δS. Against a compactly supported test, split -∫F·∇ψ into the two domains and apply divergence to ψF. The outward normal on the minus side is n and on the plus side is -n; the resulting boundary term is (F+-F-)·n ψ. Componentwise integration by parts gives ∂i Fj = piecewise ∂i Fj + ni[Fj]δS, and antisymmetrizing yields the curl formula. Localize away from edges; edge sources need a separate account. Dependencies: distribution derivative, locally integrable embedding, divergence theorem, test cutoffs, M01's finite surface measure convention. A stationary interface makes ∂t F have no δS term; a moving interface does, and the stationary jump formulas cannot silently be reused.

**Proposed `lem-em-point-current-continuity` (LOCAL ARGUMENT).** Let z:I→R3 be C1, q constant, ρ(t)=qδz(t), J(t)=q z'(t)δz(t). Define these spacetime distributions by integration in t against compactly supported spacetime tests. Then ∂tρ+div J=0: its pairing with ψ is -q∫I[∂tψ(z(t),t)+z'(t)·∇ψ(z(t),t)]dt=-q∫I dψ(z(t),t)/dt dt=0 because the test vanishes near the interval endpoints. This proves continuity of prescribed point support, not Maxwell existence or point self-force. Dependencies: test/distribution definitions, chain rule, fundamental theorem and compact support.

## M04: tensor-product differential identity

**Proposed `lem-em-quadratic-stress-identity` (LOCAL ARGUMENT).** For C1 F:U→R3, set Qij=FiFj-δij|F|2/2, and define (div Q)i=Σj∂j Qij. Then div Q = F div F - F×curl F. Product differentiation gives Σj(Fj∂j Fi+Fi∂j Fj-Fj∂i Fj). The last difference is -(F×curl F)i: expand the cross product and cancel its repeated-coordinate terms. No symmetry assumption beyond the displayed Q is needed. Dependencies: cross-product definition, product rule, divergence/curl definitions. Also, for any C1 symmetric tensor Q, εijk Qkj=0 by pairwise cancellation. If ∂t g+div Π=-f and Π is symmetric, differentiating Li=εijk xj gk yields ∂t L+div(x×Π)=-x×f. This proves the local angular-balance identity, with (x×Π)il=εijk xj Πkl. Boundary integrals require the published divergence theorem separately.

## M05: topology and spacetime regularity of potentials

The published scalar and vector Poincaré results give potentials only on star-shaped open sets, with the stated C1 hypotheses. The vector witness A(x)=∫0^1 t B(a+t(x-a))×(x-a)dt has C1 regularity. For B(x,t) of class Ck jointly, repeating the compact parameter proof for every derivative through k shows this radial witness is Ck jointly; thus for smooth B, A is smooth jointly. For Maxwell's homogeneous equations, curl(E+∂t A)=0; the radial scalar witness gives φ with ∇φ=-(E+∂t A). Under smooth hypotheses all terms are justified. This supplies a global potential on Ω×I when Ω is star-shaped; it does not show every divergence-free field has a global potential on an arbitrary Ω.

**Proposed `lem-em-joint-smooth-potentials` (LOCAL ARGUMENT).** The preceding smooth radial construction is the statement; dependencies are both published Poincaré results, parameter differentiation and curl/gradient identities. On a ball the construction is local even if Ω has holes.

Counterexamples must distinguish obstructions: (-y,x,0)/(x2+y2) on R3 minus the z-axis is curl-free but has circulation 2π around a linking unit circle, so it cannot be a single-valued global gradient. The field x/|x|3 on R3 minus {0} is divergence-free, but has sphere flux 4π; a smooth global A would make every closed-surface curl flux zero by surface Stokes and subdivision, so no such A exists. Simply connectedness removes the first type of obstruction, but does not alone remove the second: R3 minus {0} is simply connected. Do not conflate first and second cohomology.

Gauge invariance is the direct calculation A'=A+∇χ, φ'=φ-∂tχ for smooth χ, using curl grad=0 and commuting derivatives. Define W=c^-2∂t2-Δ and G=div A+c^-2∂tφ; G'=G-Wχ. Setting Lorenz gauge therefore requires Wχ=G, not Wχ=-G. Solvability with boundary/initial restrictions remains M09 below; invariance does not prove gauge reachability.

## M06: compact-source electrostatic multipoles

**Proposed `lem-em-coulomb-dipole-remainder` (LOCAL ARGUMENT).** If ρ∈L1 supported in |y|≤a and r=|x|≥2a>0, then ∫ρ(y)/|x-y|dy = Q/r + p·x/r3 + R(x), with Q=∫ρ, p=∫yρ and |R|≤C a2||ρ||1/r3 for an absolute C. For h(s)=|x-sy|^-1, h(0)=r^-1, h'(0)=x·y/r3, and h''(s)=-|y|2/|x-sy|3+3((x-sy)·y)2/|x-sy|5, so |h''|≤4|y|2/(r-a)3≤32|y|2/r3. Twice the fundamental theorem gives h(1)-h(0)-h'(0)=∫0^1(1-s)h''(s)ds, bounded by 16|y|2/r3. Integrate against |ρ|. Thus C=16 is permissible, though not sharp. This does not justify differentiation of the remainder without a derivative estimate; that estimate is a separate proposed extension. Higher spherical harmonics are M11.

## M07: linear plane waves and phasor algebra

**Proposed `def-em-complex-plane-wave` (definition).** For real k∈R3 and ω>0 and complex vectors e,b∈C3, define real fields Re[e exp(i(k·x-ωt))] and Re[b exp(i(k·x-ωt))]. Complex notation is an encoding of real solutions of real linear equations; it is not a complex physical field. Real/imaginary parts and complex conjugation are explicit.

**Proposed `lem-em-period-average` (LOCAL ARGUMENT).** The average over T=2π/ω of Re(a e^-iωt)Re(d e^-iωt) is Re(a conjugate(d))/2. Expand the product into exponentials; oscillatory terms e±2iωt integrate to zero and the remaining two terms sum to the displayed real part. Vector dot and cross versions apply componentwise. This does not license replacing real quadratic expressions by complex quadratic expressions without conjugation. Dependencies: exponential differentiation/integration and finite sums; source maps identify gaps in exact published exponential suppliers if needed.

**Proposed `lem-em-interface-wave-linear-system` (LOCAL ARGUMENT for nonsingular systems).** In homogeneous isotropic media with εj,μj>0, ω>0, normal incident plane waves have impedance Zj=√(μj/εj). Tangential E continuity and tangential H continuity give Ei+Er=Et and (Ei-Er)/Z1=Et/Z2. The determinant is Z1+Z2>0, so Er/Ei=(Z2-Z1)/(Z2+Z1), Et/Ei=2Z2/(Z1+Z2). Using M07, R=|Er/Ei|2 and T=(Z1/Z2)|Et/Ei|2 satisfy R+T=1. All fields here are scalar amplitudes along a fixed common polarization; Ei≠0. Oblique incidence, complex impedance and anisotropy require further systems and branch conventions. Pure mathematics assumes these equations rather than asserting their electromagnetic validity.

## M08: finite-dimensional Minkowski algebra

**Proposed `def-em-minkowski-affine-space` (definition).** An affine four-space has translation space V=R4 with bilinear form η(v,w)=-v0w0+Σi=1^3 viwi, orientation and future cone v0>0 for η(v,v)≤0. A Lorentz linear map L is invertible with L^TηL=η; an orthochronous proper map also has det L=1 and preserves the future timelike cone. A frame consists of an origin and a basis e0,e1,e2,e3 with η(ea,eb)=diag(-1,1,1,1)ab and e0 future-directed. Coordinates x0=ct require a fixed positive scalar c; that choice is separate from mathematical affine space. Covectors transform by inverse transpose, vectors by L, and a two-form by applying inverse L in both arguments. A tensor is an explicitly multilinear map, not an unexplained array.

**Proposed `lem-em-boost-preserves-metric` (LOCAL ARGUMENT).** For 0≤β<1, γ=(1-β2)^-1/2 and boost x'0=γ(x0-βx1), x'1=γ(x1-βx0), x'2=x2, x'3=x3, substitution gives -(x'0)2+(x'1)2=γ2(1-β2)(-(x0)2+(x1)2); the remaining coordinates are unchanged. The determinant of its 0–1 block is γ2(1-β2)=1, and for future timelike v, |v1|<v0 ensures v'0=γ(v0-βv1)>0. Thus this is a proper orthochronous Lorentz map. No empirical relativity principle is proved.

A C1 future timelike curve z:J→R4 satisfies η(z',z')<0 and (z0)'>0; define τ(s)=c^-1∫s0^s √(-η(z',z'))du. Its derivative is positive, so it gives a local parameter and on its range a global strictly increasing parameter; higher differentiability of the inverse follows from the existing one-dimensional inverse theorem if required. Then U=dz/dτ satisfies η(U,U)=-c2. Null curves instead satisfy η(z',z')=0 and are not parametrized by proper time. Straight affine timelike lines describe inertial trajectories in this geometry; force dynamics is an additional physical premise.

**Proposed `lem-em-antisymmetric-tensor-contraction` (LOCAL ARGUMENT).** For antisymmetric Fμν and any vector U, Uμ Fμν Uν=0 because exchanging the two dummy indices negates the same finite sum. Thus a dynamical equation m dUμ/dτ=qFμνUν preserves η(U,U), when Fμν is obtained by raising one index with η. This is a conditional algebra statement, not a proof that this equation governs particles.

## OPEN mathematical obligations: substantial branches

M09, proposed `thm-em-wave-cauchy-kirchhoff`: for smooth compactly supported initial data and smooth spatially compact source on R3×R, existence, uniqueness, finite propagation and the causal wave convolution. Prerequisites: spherical-mean identity, differentiation of spherical means, distribution δ(t-r/c)/(4πr), cone flux calculation, source/initial time integration, energy uniqueness with expanding-ball boundaries, support/control estimates. Strategy: derive Kirchhoff's formula from the Euler–Poisson–Darboux identity, verify initial conditions and inhomogeneous term, prove local energy uniqueness and cone support. No proof supplied here. Critical for retarded-potential existence, gauge reachability with specified data and general wave solutions. Merely naming a Green function is not closure.

M10, proposed `thm-em-retarded-root-and-fields`: for a prescribed C3 subluminal trajectory with a uniform bound |z'|≤vmax<c on relevant history, prove unique retarded root of t-s-|x-z(s)|/c=0 where a root exists; implicit derivatives, delta change of variables with denominator 1-n·β, Liénard–Wiechert potentials, differentiation into velocity and acceleration fields, far-zone uniform remainders. Monotonicity f'(s)=-(1-n·β)<0 gives uniqueness; existence requires past-history coverage and limiting behavior, not monotonicity alone. Point on the worldline is excluded. Strategy: IVT with history endpoints, scalar implicit-function theorem, distribution substitution, explicit chain differentiation and estimates away from support. Only uniqueness sign observation supplied, not the complete result. M09 also needed.

M11, proposed `thm-em-spherical-multipole-basis`: define Legendre polynomials and spherical harmonics, prove orthogonality/completeness in L2(S2), convergent kernel expansion on |y|<|x| with uniform compact remainder bounds, differentiation estimates, Poisson separation and series convergence up to the declared boundary. Prerequisites: Hilbert orthogonality/completeness, integration on sphere, Sturm–Liouville or harmonic homogeneous polynomial construction, compact approximation. Strategy: generating function plus spherical harmonic decomposition; audit exact published suppliers first. No closure asserted; dipole M06 can be used without full M11.

M12, proposed `thm-em-elliptic-boundary-existence`: existence and regularity for electrostatic Dirichlet/Neumann/transmission problems on declared smooth domains with compatibility and uniformly positive ε. Inventory: Sobolev H1 and traces, Poincaré inequality, weak coercive bilinear form, Lax–Milgram, componentwise mean normalization, boundary/interior regularity and transmission trace spaces. Strategy: variational existence then regularity only under adequate data/domain assumptions. Published uniqueness or a Green representation does not prove this. Specific images and separated solutions can be checked without a universal existence claim.

M13, proposed `thm-em-waveguide-spectral-completeness`: rectangular separable modes can be individually verified by elementary sine/cosine differentiation. Completeness for arbitrary initial data, cavity spectral expansions, lossy/open guides and exterior scattering require Sturm–Liouville/spectral theorem, H(curl) traces, coercivity/Fredholm estimates and radiation conditions. Inventory and source treatment needed; no claim of full PDE closure.

M14, proposed `thm-em-causal-dispersive-response`: time convolution with causal kernels, Fourier/Laplace existence, passivity positivity, analytic continuation and dispersion relations with high-frequency growth/subtraction hypotheses. Published Fourier results are candidates; none has been read for this branch here. No Kramers–Kronig theorem supplied.

M15, proposed `thm-em-radiation-asymptotic-flux`: uniform far-field asymptotics for compact time-dependent currents with enough bounded time/spatial derivatives, angular integration and interchange of large-radius limit, time-average/flux, electric and magnetic dipole radiation and controlled multipole errors. Inventory: M06 extensions, M09, dominated convergence on S2, Taylor theorem with remainder, continuity identity integration by parts, angular moments ∫ni nj dΩ=(4π/3)δij. Strategy: derive potentials first, retain retarded time r/c, estimate remainder uniformly in direction, then integrate Poynting flux. No full proof supplied. Larmor's point-particle specialization additionally needs M10 and the nonrelativistic approximation; radiation reaction is a further unclosed branch.

M16, proposed `thm-em-uncertainty-analysis`: exact mathematical procedures depend on the experiment report. Qualitative historical source supports no invented sampling law. For quantitative regression, need a declared likelihood or weighted residual model, correlated calibration errors, estimator and interval properties, propagation of uncertainty and hypothesis-test interpretation. Candidate published probability/statistics suppliers must be read once actual reports determine the analysis; no generic claim that all experimental mathematics is closed.

Every OPEN branch needs mathematical A/B pages before its consumer becomes eligible. Suggested pages: `em-wave-equation-prerequisites` (M09–M10, split if cap threatened), `em-boundary-and-spectral-prerequisites` (M11–M13), `em-causal-response-and-radiation-prerequisites` (M14–M15), `em-experiment-analysis-prerequisites` (M16). These are proposed mathematical pages, not an invented common units category or approved build scope.

## M17: compact field variations (LOCAL ARGUMENT)

**Proposed `lem-em-fundamental-variation-lemma`.** If continuous real g on open U⊂R^n satisfies ∫U gh=0 for all h∈Cc∞(U;R), then g=0. If g(p)>0, choose a closed ball about p in U with g≥g(p)/2. A nonzero nonnegative smooth compact bump h supported in that ball gives ∫gh>0, contradiction. One explicit bump on |x-p|<r is exp[-1/(1-|x-p|²/r²)], extended by zero outside; smoothness at the boundary follows since every derivative is a polynomial in the reciprocal positive distance factor times its exponential, tending to zero. Apply to -g for the negative case. For vectors, choose each component test separately. Dependencies: smooth bump calculus, positivity of ball integral, localization/continuity and elementary exponentials; the exact exponential/smooth-cutoff published supplier is a remaining direct-inspection obligation, not a new physical assumption.

**Proposed `lem-em-compact-field-variation`.** Let U be a bounded open subset of R4, η a constant nondegenerate bilinear form, A:neighborhood(cl U)→R4 smooth, J smooth, and h∈Cc∞(U;R4). Write Aμ=ημνAν, Fμν=∂μAν-∂νAμ with upper F obtained by raising both indices, and L=-FμνFμν/(4κ)+JμAμ for κ>0. Define S[A]=∫U L d4x with finite integral. The derivative at s=0 of S[A+s h] is ∫U[-Fμν∂μhν/κ+Jνhν]. This follows by expanding the quadratic polynomial in s, using antisymmetry to combine its two linear derivative terms; there is no limiting under an uncontrolled integral. Coordinate integration by parts on a rectangle containing supp h, or compact divergence, converts this to ∫U[(∂μFμν)/κ+Jν]hν. The boundary term vanishes because h is compactly supported. M17's fundamental lemma therefore gives stationarity iff ∂μFμν=-κJν, with continuous coefficients. This is a pure mathematical result about the given functional. Identifying κ with μ0, A with an EM potential and the functional with a physical action are later physical model choices. Existence of stationary fields is not proved. General gauge/Noether theorems and particle-curve variation remain separate obligations; compact field variation alone does not supply them.
