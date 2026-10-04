# Selected collision evolution, entropy and unclosed fluid moments

The collision equation here is a specified homogeneous cutoff Maxwell-type mathematical model. Adopting it as a restricted physical kinetic approximation is distinct from proving a microscopic particle-to-Boltzmann limit. Its full existence/entropy statements below have actual arguments; general hard-sphere and hydrodynamic limits are not claimed.

<a id="D10"></a>

## D10 — elastic reflection measure and gain operator

Let v,w∈R³ and n∈S²={n∈R³:|n|=1}, a dimensionless unit normal. Define normalized sphere area as the pushforward of sinθ dθ dφ/(4π) on [0,π]×[0,2π) under n=(sinθ cosφ,sinθ sinφ,cosθ). The total is one by ∫sinθ dθ=2 and the azimuth integral2π; its boundary seams have zero measure and every relative open sphere patch has positive measure. Write this measure as dn/(4π). Define v'=v-[(v-w)·n]n and w'=w+[(v-w)·n]n. For each n this is a linear orthogonal involution on R⁶: its center velocity is unchanged and relative velocity is reflected in the plane normal to n. Thus it preserves v+w, |v|²+|w|² and absolute six-dimensional Jacobian one. Exchanging v,w preserves the collision measure dv dw dn, and incoming/outgoing interchange uses that involution with the same n. This supplies the exact invariant collision measure needed by the inspected TD L12 H theorem, rather than assuming a formal scattering substitution.

Define G(f,g)(v)=∫_{R³×S²}f(v')g(w')dw dn/(4π). Tonelli and the involution give ∥G(f,g)∥1≤∥f∥1∥g∥1, with equality for nonnegative inputs. For w0(v)=1+|v|²/v0², where v0>0 is a reference speed, energy conservation gives ∥G(f,g)∥_{1,w0}≤2∥f∥_{1,w0}∥g∥_{1,w0}. For nonnegative f of mass one, symmetry of the two output labels gives ∫G(f,f)=1, ∫vG(f,f)=∫vf and ∫|v|²G(f,f)=∫|v|²f. These follow by replacing the v test by the average of v,w, and then using the conserved pair moment/energy after the involution. Finite second moment makes every used integral absolutely convergent.

For λ>0 in s^-1 take the equation ∂tf=λ[G(f,f)-f], f≥0, ∫f dv=1. Velocity probability density has units (m/s)^-3. λ is a prescribed model collision rate, not a measured hard-sphere cross section or a derived microscopic frequency.

<a id="D11"></a>

## D11 — complete global positive finite-energy solution and a smooth entropy class

For f0≥0 of mass one and finite second moment E2, solve the mild equation f_t=e^-λt f0+λ∫_0^t e^-λ(t-s)G(f_s,f_s)ds. Work on continuous curves in weighted L¹ of nonnegative mass-one densities with the same first and second moments as f0. This is closed and complete. For completeness of weighted L¹ itself, a Cauchy sequence has a subsequence with successive norm differences≤2^-j; Tonelli makes their pointwise absolute sum integrable in the weighted measure, so its almost-everywhere sum defines an L¹ limit with norm-tail≤Σ2^-j. The original sequence then converges by Cauchy. Uniformly continuous-curve limits supply completeness of the time-curve space. The gain moment identities show the mild map stays in this closed set. Its norm-Lipschitz bound is at most 4λT(1+E2/v0²) times the curve difference, by bilinearity and D10. For small T this is a contraction; explicit Picard iterates converge uniformly to a unique mild solution. Differentiation of its Banach-valued integral (uniform continuity and difference-quotient averaging) gives a C¹ L¹ solution. Mass, first moment and second moment remain constant, so the same interval length works at every later stage, proving global existence and uniqueness in this finite-energy class. Strictly positive initial density gives f_t≥e^-λt f0>0 almost everywhere. No spatially inhomogeneous rough-boundary PDE is hidden in this theorem.

There are genuine nonstationary smooth solutions satisfying the entropy hypotheses below. Fix a common mean u and 0<a≤b with velocity-squared units. Take f0 a nontrivial mixture of normalized Gaussians N(u,Σ), aI≤Σ≤bI. Here matrix order means z·Az≤z·Bz for every z, and N(u,Σ) has density (2π)^-3/2(detΣ)^-1/2 exp[-(v-u)·Σ^-1(v-u)/2]; the finite self-adjoint spectral theorem reduces its normalization to the checked scalar Gaussian integral by an orthogonal change of variables. A gain term of two such Gaussians is a mixture over n of Gaussians whose covariance is the v-marginal of an orthogonal transform of diag(Σ1,Σ2); its eigenvalues remain in [a,b], and its mean remains u. Convex mixture and the mild weights preserve this class at each Picard iteration. Uniform Gaussian bounds hold for every component and mixture:

(2πb)^-3/2 exp(-|v-u|²/(2a)) ≤ f(v) ≤ (2πa)^-3/2 exp(-|v-u|²/(2b)).

Every spatial derivative is bounded by a fixed polynomial times a Gaussian, uniformly over the compact covariance interval. The weighted-L¹ closure of these mixtures retains smoothness and these bounds: on each compact velocity ball all derivatives are uniformly bounded and the next derivative gives equi-Lipschitzness; diagonal extraction on finite rational grids gives uniform convergence of each derivative. The FTC identifies limits as derivatives, and the L¹ limit identifies the same density uniquely. Gaussian tail bounds extend this to all velocity space. Gain is continuous in L¹; its uniform derivative/tail bounds give the same locally smooth convergence, so the mild equation yields a pointwise C¹-time smooth-velocity solution with |∂tf| bounded by a Gaussian envelope. A mixture with distinct covariance temperatures is not a single Maxwellian, so the equality characterization below shows positive production at least while it remains non-Maxwellian. This closes a nontrivial regular existence branch rather than merely postulating a regular solution class.

<a id="D12"></a>

## D12 — full conditional H identity, equality and its physical qualification

Assume a positive classical solution has differentiable entropy under an integrable envelope, and all collision-log integrals converge absolutely. The Gaussian-mixture class D11 provides these conditions: its positive lower bound bounds |log(f v0³)| by C(1+|v|²), the upper/derivative bounds control differentiation, and collision energy conservation gives Gaussian domination of all four pre/post log terms. Define H[f]=∫f log(fv0³)dv. Since number is conserved, its derivative is ∫log(fv0³)Q(f)dv. Using output-label interchange followed by the incoming/outgoing involution yields for every admitted test φ,

∫φQ(f)dv=(λ/4)∫[f(v)f(w)-f(v')f(w')][φ(v')+φ(w')-φ(v)-φ(w)]dv dw dn/(4π).

With A=f(v)f(w), B=f(v')f(w'), the logarithm reference cancels (log A-log B denotes the dimensionless log(A/B)), giving

H'(t)=-(λ/4)∫(A-B)(log A-log B)dv dw dn/(4π)≤0.

This is the TD L12 proof with its exact collision-measure prerequisites now constructed. Its nonnegative production vanishes exactly when A=B almost everywhere. For positive continuous f the full reflection measure support upgrades this to every collision; reflections realize every direction on a fixed relative-speed sphere. Writing g=log(fv0³), g(c+rω)+g(c-rω) is therefore independent of unit ω. Its second-order expansion gives Hess(g)(c)=α(c)I. In dimension three the off-diagonal derivatives zero imply each first partial depends only on its own coordinate; equality of the diagonal derivatives for independently variable coordinates makes α constant. Integration gives g=A0+B0·v+C0|v|². Integrability forces C0<0, so normalized f is a Maxwellian. Conversely each such Maxwellian has A=B by pair conservation and is stationary in this homogeneous model. In physical parameterization f=(m/(2πk_BT))^3/2 exp[-m|v-u|²/(2k_BT)], with m,T>0; the actual TD M17 Gaussian evaluation supplies normalization. The dimension-one elastic case would not imply this characterization.

If the model is adopted physically, S_B=-k_BH is its one-particle kinetic information entropy, with J/K units and the declared reference speed. Its monotonicity is conditional on the selected kinetic equation and regularity; it is not fine-grained N-particle Gibbs entropy. The irreversible gain/loss model and its initial preparation have been specified explicitly. D7 demonstrates that exact finite-N factorization generally fails, while D9 proves a different, mean-field propagation-of-chaos regime. Neither statement proves incoming hard-sphere molecular chaos or a global Boltzmann–Grad limit. Such a missing microscopic derivation is not converted into a physical postulate; the physical equation is labeled a selected phenomenological kinetic model.

<a id="D13"></a>

## D13 — exact kinetic moments and the closure obstruction

For a smooth number density f(x,v,t)≥0 on periodic space, with uniform rapid velocity bounds on all used derivatives on compact time slabs and finite first three moments, consider ∂tf+v·∇xf+a(x,t)·∇vf=Q, where a is a prescribed acceleration independent of v and Q preserves number, momentum and kinetic energy. Let n=∫f dv>0, ρ=mn, u=n^-1∫vf, Π=m∫(v-u)⊗(v-u)f, e=(1/2)trΠ, and q_heat=(m/2)∫|v-u|²(v-u)f. Units are ρ kg/m³, u m/s, Π Pa, e J/m³, q_heat J/(m² s), and a m/s². Π is positive semidefinite because ξ·Πξ=m∫[ξ·(v-u)]²f≥0. Here Π is the kinetic momentum-flux covariance; the mechanical compressive stress contribution is -Π, so it is not conflated with the opposite sign convention.

Multiply the equation by m,mv,(m/2)|v|² and integrate velocity. Decay removes the integration-by-parts boundary terms and the force term yields respectively zero, -ρa, -ρa·u on the left. Expanding v=u+(v-u) gives exactly

∂tρ+div(ρu)=0,
∂t(ρu)+div(ρu⊗u+Π)=ρa,
∂t[(ρ|u|²/2)+e]+div[((ρ|u|²/2)+e)u+Πu+q_heat]=ρa·u.

The centered first moment is zero; the centered quadratic term produces Πu and its trace e u, while the third gives q_heat. Subtracting the mean-kinetic-energy equation (dot momentum with u and use continuity) gives ∂te+div(eu+q_heat)+Π:∇u=0. These are exact balance identities and define their unresolved fluxes; they are not a hydrodynamic limiting theorem or a constitutive closure.

Even n,u,e do not determine Π. Two centered Gaussian velocity laws of equal mass with covariance diag(a,b,c) and diag(b,a,c), a≠b>0,c>0, have identical n,u=0,e=mn(a+b+c)/2 but different Π. An isotropic Maxwellian gives Π=nk_BT I and q_heat=0 by oddness/Gaussian moments, but invariance of that ansatz under arbitrary kinetic transport has not been proved and is not assumed. This is the same logical distinction as the actual fluid dossier C01–C03 Reynolds identity versus closure; its argument was inspected. No Euler/Navier–Stokes hydrodynamic limit follows solely by taking these velocity moments.
