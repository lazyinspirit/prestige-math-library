# Horizon and semiclassical model mathematics

Draft research, 2026-10-04. Constants below are positive real parameters until a separate physical adoption. No physics postulate is a mathematical premise. Complex Hilbert pairing is second-linear, as QFT FF0–FF3. Integrals use the actual Lebesgue/Fourier foundations of those inspected suppliers; their Countable Choice assumptions are inherited. No continuum interacting field or gravitational quantization is constructed.

<a id="HS00"></a>
## HS00 — horizon and state-family data

Let (M,g) be a smooth oriented time-oriented Lorentz four-manifold, signature −+++, with Levi–Civita connection and the GR curvature convention for which timelike focusing has −Ric(u,u). A smooth null hypersurface H has a nowhere-zero future tangent/normal k, extended smoothly locally, with ∇_k k=0 on H. A screen is the positive two-dimensional quotient k⊥/Rk. Along a generator choose a null ℓ with k·ℓ=−1 and an orthonormal screen pair e_A perpendicular to k,ℓ; parallel transport all along k. Metric compatibility preserves these inner products. Such transport is the finite-interval linear-ODE construction of GR G2; only intervals on which the smooth geometry exists are used. A screen cross-section has positive metric q and area density √detq. Completeness/no-caustic assumptions are separate, not definitions of every event horizon.

For a Killing χ nonzero on H define κ by ∇_χχ=κχ. This definition requires that proportionality; it is not a thermal definition. In length coordinates χ is dimensionless and κ has inverse length. Replacing χ by bχ, b>0 constant, gives κ→bκ by bilinearity of the connection. For the inspected subextremal Kerr–Newman family take m>0, a,q real with m²>a²+q², r=m+√(m²−a²−q²), D=r²+a², A=4πD, j=ma, κ=(r−m)/D, Ω=a/D, Φ=qr/D. These are smooth functions on the open parameter domain. The earlier actual X3/X4 metric/ingoing-horizon proofs, not an algebraic label alone, identify this data with that defined Lorentz family.

<a id="HS01"></a>
## HS01 — null Raychaudhuri and a restricted smooth area theorem

Put B_ab=∇_b k_a on H. Differentiating k²=0 along tangent directions gives k^aB_ab=0 for tangent b; affine geodesicity gives B_ab k^b=0. The screen projection B_AB is independent of representatives modulo k. Since locally H={F=0}, dF≠0 and k♭=f dF on H, the screen pullback of d(k♭)=df∧dF is zero. Thus B_AB is symmetric. Write B_AB=(θ/2)δ_AB+σ_AB, σ_AA=0. The full trace ∇_a k^a equals θ on H: in a null frame the kℓ terms vanish by the two preceding contractions. For rigor choose a local two-dimensional cross-section ofH transverse tok and a three-dimensional ambient hypersurface transverse tok containing that cross-section. Extend the section values ofk to a smooth null field on this ambient initial hypersurface (a local Lorentz frame permits arbitrary smooth extensions of the unit spatial direction and positive scale). Solve the geodesic ODE from these initial values. The initial flow-map derivative spans that three-surface andk, so the inverse function theorem in GR G2 gives a small open neighborhood. Norm preservation makes the extension null everywhere and affine; uniqueness makes its restriction toH the original generator near the section. Its transverse norm derivative therefore vanishes too. The same extension allows the following ambient commutation, whose result is intrinsic to H.

Differentiate θ=∇_a k^a along k. The product rule, affine equation and curvature commutator give

k^b∇_bθ=∇_a(k^b∇_b k^a)−(∇_a k^b)(∇_b k^a)−Ric_ab k^a k^b=−B_ab B^ba−Ric(k,k).

The sign is the GR G3 convention. In the null frame all nonscreen quadratic terms vanish because either factor contracts k; hence B_abB^ba=B_ABB_BA=θ²/2+σ_ABσ_AB. Therefore

dθ/dλ=−θ²/2−|σ|²−Ric(k,k).

Here λ is the affine parameter and derivatives exist on every actual smooth generator interval. If Ric(k,k)≥0 and θ(λ0)<0, y=−θ stays positive and y'≥y²/2. Integrating (1/y)'≤−1/2 gives 1/y(λ)≤1/y0−(λ−λ0)/2. Positivity is impossible at λ0+2/y0. Consequently a congruence that stays smooth with finite θ on every future affine interval [λ0,∞), and is future complete, cannot have θ<0. Completeness alone without the stipulated persistence of the smooth embedded congruence is insufficient: a caustic can end this description.

Suppose in addition a compact smooth initial cross-section S is transported to compact embedded spacelike cross-sections S_λ for all relevant λ, with a smooth common affine flow parameter. Lie-transport its tangent coordinates. Then q'_AB=g(∇_A k,e_B)+g(e_A,∇_B k)=2B_AB in a current orthonormal screen frame. The cofactor determinant formula gives (√detq)'=θ√detq. Differentiation under the compact integral yields A'(λ)=∫S_λ θdA≥0 under the preceding future hypotheses. This proves the exact stated smooth-congruence area theorem. It does not establish asymptotic predictability, identify all event horizons, control their C0 nonsmooth sets, or prove cosmic censorship.

<a id="HS02"></a>
## HS02 — complete family first law, Smarr and surface-gravity constancy

The X4 supplier proves that the defined KN ingoing horizon is Killing/null with χ=∂_0+Ω∂_φ, κ=(r−m)/D independent of polar angle, cross-section area4πD and constant potential qr/D in its chosen stationary gauge. Thus constancy here is an actual verified-family conclusion; no unrestricted zeroth-law theorem is invoked.

Differentiating r²−2mr+a²+q²=0 gives (r−m)dr=r dm−a da−q dq. Since dA=8π(r dr+a da) and dj=a dm+m da,

D[κdA/(8π)+Ωdj+Φdq]
=r(r−m)dr+a(r−m)da+a²dm+amda+qr dq
=(r²+a²)dm.

Therefore dm=κdA/(8π)+Ωdj+Φdq on the full open three-parameter family. Also

D[κA/(4π)+2Ωj+Φq]=(r−m)D+2ma²+q²r=mD,

where the last equality follows by substituting q²=2mr−r²−a² and expanding. Hence m=κA/(4π)+2Ωj+Φq. The formulas have finite continuous extremal limits when m²=a²+q²,D>0, but division by κ or a positive-temperature inference is restricted to κ>0. No third-law unattainability theorem follows from taking that limit.

Let c,G,ε0>0 and define M=c²m/G, J=c³j/G, Q=c²√(4πε0/G)q, E=Mc², Ω_phys=cΩ, Φ_SI=Qr/(4πε0D). Multiplying the one-form identity by c⁴/G gives

dE=c⁴κ/(8πG)dA+Ω_phys dJ+Φ_SI dQ,

and E=c⁴κA/(4πG)+2Ω_physJ+Φ_SIQ. Each work term has energy units once parameters receive the SI assignments. This is a family differential, not a dynamical accretion/process theorem. The canonical C2 proves its temperature/entropy product alone leaves calibration and offset free.

<a id="HS03"></a>
## HS03 — a positive chiral derivative field and exponential coordinate model

On ℋ=L²((0,∞),dk) define for f∈C∞_c(R,C)

h_f(k)=√(k/(4π))∫f(U)e^{ikU}dU.

Integration by parts gives arbitrary inverse-power decay at large k, controlled by fixed-support derivative seminorms; near0 the norm integral is bounded by C∫0¹k dk. Thus this is a continuous test-to-Hilbert map. On actual symmetric Fock space from FF1–FF2 define J(f)=a(h_bar f)+a†(h_f) on D_fin. This is a linear operator-valued distribution, D_fin invariant, and J(real f) has the self-adjoint Segal closure and bounded Weyl exponential. Its vacuum covariance is ∫0∞k e^{-ik(U−U')}/(4π)dk as a distribution, positive on conjugate test pairs. Damping e^{-εk} and elementary integration ∫0∞ke^{-zk}dk=z^-2 for Re z>0 give

C(U−U')=−[4π(U−U'−i0)²]^-1.

Existence of the boundary distribution also follows directly from the test Fourier norm and dominated convergence. This derivative-field construction avoids the unsmeared massless1+1 scalar's logarithmic infrared problem.

Fix κ>0, u∈R, U(u)=−κ^-1e^-κu, so U'>0. Define j(g) by J(f_g), where f_g(U)=g(u(U)) on U<0 and zero elsewhere. For compact g its transformed support is a compact subset of (−∞,0), so the extension is smooth compact, and the map is continuous on each fixed compact support. The identity ∫j(u)g(u)du=∫J(U)g(u(U))dU gives j=U'J(U) as a distribution, not an assumed null restriction of a4D field. Damped covariance transforms by an ordinary smooth-test change of variable. The resulting boundary is

C_κ(u−u')=−κ²/(16π)sinh^-2[κ(u−u'−i0)/2].

Indeed U(u)−U(u')=(2/κ)e^{-κ(u+u')/2}sinh[κ(u−u')/2], while U'(u)U'(u')=e^{-κ(u+u')}. The positive prefactor multiplying the damping varies smoothly on compact tests. Such variable positive damping has the same boundary. Locally write δ(v,s)=d0(v)+d1(v)s+s²r(v,s), with d0 bounded positively and smooth coefficients bounded on compact tests. The linearized denominator is (1−iεd1)[s−iεd0/(1−iεd1)]. Its reciprocal square has the usual double-pole boundary because the prefactor tends1, the pole has imaginary part comparable toε and real partO(ε²). This last assertion follows from the simple-pole test identity: subtract the test value near0, use the integrable difference quotient, and integrate the constant by the logarithm; differentiation gives the double-pole identity. The difference from the full denominator is bounded by Cεs²/(s²+ε²)^(3/2) on a fixed small interval, whose integral isO(ε log(1/ε)); it therefore tends0. Away0 ordinary dominated convergence applies. The estimates are uniform in the compact average coordinatev, and prove the principal finite part/delta derivative boundary. This supplies the transformed boundary without an unproved distribution pullback.

<a id="HS04"></a>
## HS04 — thermal rectangle, boundaries and spectral detailed balance

For b,A>0 let C(z)=−A csch²(bz), β=π/b and L=A/b². It is analytic on −β<Im z<0, has period iβ and C(−z)=C(z). Lower and upper boundary distributions satisfy C(s−iβ+i0)=C(−s−i0). Pairing after real compact temporal tests gives analytic strip correlation functions whose exchanged boundary is this identity. All vacuum higher current moments are Wick pairings by FF1; this result asserts the tested two-point thermal boundary and its specified Gaussian correlations. It does not assert that the norm-continuous C*-dynamics required by def-qsm-kms-state has been constructed on a Weyl algebra. Fock implementer continuity and Weyl norm continuity are different properties.

Here is the complete Fourier argument, including pole and orientation. Fix real ω≠0 and0<ε<β, and integrate e^{-iωz}C(z) round the clockwise rectangle with top from−R−iε to R−iε and bottom at−i(β+ε). Choose an open containing horizontal strip slightly larger than this rectangle but lying between−2β and0; it has exactly one pole, z0=−iβ. Its leading coefficient is−L(z−z0)^-2 and no simple-pole term because csch² has an even local expansion. Multiplication by the exponential gives residue iLωe^{-βω}. The vertical sides tend0 asR→∞: |csch²(b(±R+iy))|≤C e^{-2bR} uniformly over this finite y interval, and |e^{-iωz}|≤e^{|ω|(β+ε)}. Bottom translated to the top has factor e^{-βω}; therefore

(1−e^{-βω})I_ε=−2πi(iLωe^{-βω})=2πLωe^{-βω},

where I_ε integrates e^{-iωz}C(z) along the top line. The single-pole residue identity used here has a complete restricted proof: subtract its Laurent principal part, leaving a holomorphic function throughout that strip; subdivide the rectangle into small triangles in discs with holomorphic primitives, cancel common edges, and integrate the principal part using its primitive for order2 and the winding integral for order1. Compactness gives a finite subdivision. No zero-winding pole remains. The broader published residue supplier's proof has a different zero-winding-pole gap; it is not needed for this restricted argument.

Since z=s−iε, the ordinary Fourier integral of C(s−iε) is e^{ωε}I_ε for ω≠0. For each fixed 0<ε<β, the shifted kernel C(s−iε) is an L¹ function: it has no real pole, is bounded on compact s intervals and decays exponentially at both infinities. Its Fourier transform J_ε(ω) is therefore continuous at every real ω by dominated convergence against |C(s−iε)|. The computed expression e^{ωε}2πLω/(e^{βω}−1) has the unique continuous extension 2πL/β at ω=0. Agreement off zero and continuity establish agreement also at zero for each fixed damping. Thus no arbitrary point value or distribution supported at ω=0 is left undetermined. Taking the fully specified transforms to the damping limit gives, as distributions,

S(ω)=∫e^{-iωs}C(s−i0)ds=2πLω/(e^{βω}−1),

with continuous value2πL/β at0. To justify the damping limit, forε≤β/2 this expression is bounded by C(1+|ω|) on negativeω and by C(1+ω)e^{-βω/2} on positiveω. Schwartz pairing is uniformly integrable, so the limit passes by dominated convergence. Fourier inversion on Schwartz tests identifies the boundary distribution; no pointwise Fourier integral at its double pole is asserted. S≥0 and S(−ω)=e^{βω}S(ω). For HS03, L=1/(4π), β=2π/κ, giving S_κ(ω)=ω/[2(e^{2πω/κ}−1)].

<a id="HS05"></a>
## HS05 — actual timelike temporal smearing and uniform acceleration

For the massless4D scalar of FF3 let dν=d³k/((2π)³2|k|) and p∘x=|k|x0−k·x. For a smooth future timelike curve γ parametrized by proper seconds and f∈C∞_c(R), define K_γ f(k)=∫f(τ)e^{ip∘γ(τ)}dτ. This construction is additional to spacetime smearing. On a compact support, γ0'>|γ_spatial'|, hence phase derivative ≥d|k| with d>0. Writing k=rn, repeated integration by parts with [ir(γ0'−n·γ') ]^-1∂_τ proves |K_γf(rn)|≤C_N r^-N forr≥1, uniformly n∈S²; derivatives of the inverse factor have bounds because its denominator is≥d and curve derivatives are bounded. Forr≤1 the trivial bound is ||f||1. With dν radialweight r dr these estimates prove K_γf∈ℋ and continuity on fixed compact tests. Thus Φ_γ(f)=a(K_γbar f)+a†(K_γf) is an actual finite-particle-domain field, with Segal closures for real tests; no sharp-point operator or unconstructed interaction is used.

Its covariance is the test pairing of the damped shell kernel. Angular integration gives

W_ε(Δx)=1/[4π²(|Δx|²+(ε+iΔx0)²)]:

for r=|Δx|>0 the angular factor is4πsin(kr)/(kr), and ∫0∞e^{-(ε+iΔx0)k}sin(kr)dk=r/[(ε+iΔx0)²+r²]; r0 follows by continuity forε>0. Test convergence follows K_γf damping→K_γf in ℋ by dominated shell norms, so the resulting restriction exists independently of a formal substitution.

For a>0 set ℓ=c²/a and γ(τ)=(ℓsinh(aτ/c),ℓcosh(aτ/c),0,0). Direct differentiation gives γ'^2=−c² and γ''^2=a². For s=τ−τ', v=(τ+τ')/2, the null-coordinate differences are2ℓe^{±av/c}sinh(as/(2c)), with the signs appropriate to Δx0±Δx1; their product gives Δx1²−Δx0²=−4ℓ²sinh²(as/(2c)). Both damped factors approach the same future boundary. This can be checked without illegal multiplication of distributions: for positive a1,a2,

[(x−ia1ε)(x−ia2ε)]^-1=∫0¹[x−i((1−t)a1+ta2)ε]^-2dt,

by elementary integration, including a1=a2. On compactv the coefficients are bounded above/below positively; the test Taylor subtraction argument in HS03 proves their common boundary. Smooth sinh is a diffeomorphism near0 and its derivative there is positive; away0 convergence is ordinary. Therefore

W_γ(s)=−a²/(16π²c⁴)csch²[a(s−i0)/(2c)].

HS04 with b=a/(2c),L=1/(4π²c²) gives

S_a(ν)=ν/[2πc²(e^{2πcν/a}−1)], ν∈R,

and S_a(−ν)/S_a(ν)=e^{2πcν/a} forν>0. ν is inverse seconds, unlike the inverse-length frequency in HS03. On an inertial curve γ=(cτ,0), W=−[4π²c²(s−i0)²]^-1. Its shell representation ∫0∞ωe^{-icωs}dω/(4π²) gives zero S(ν) forν>0 and S(−ν)=ν/(2πc²). Thus acceleration-state response is distinct from momentarily sharing an inertial velocity.

<a id="HS06"></a>
## HS06 — defined spectral thermometer and switched coefficient

Given any positive spectral S satisfying S(−ν)=e^{bν}S(ν), ν>0, choose γ_d>0, E>0, ℏ>0 and define r_+=γ_d S(E/ℏ), r_−=γ_d S(−E/ℏ). A two-state continuous-time Markov generator has entries−r_+,r_+ and r_−,−r_− on ground/excited transitions. Solving p'=r_+(1−p)−r_−p gives

p(t)=p_*+(p(0)−p_*)e^{-(r_++r_−)t}, p_*=1/(1+e^{bE/ℏ}).

If the bath thermometric scale is defined by p_*/(1−p_*)=e^{-E/(k_BT)}, it is T=ℏ/(k_B b). This is a complete defined Markov model, not a weak-coupling limit theorem for a point detector. For4D S_a, S has s/m² and γ_d has m²/s², so r have s^-1 and T=ℏa/(2πc k_B). For the chiral length parameter b=2π/κ, energy phaseE u/(ℏc) gives T_K=ℏcκ/(2πk_B).

There is also a precise leading switched-response coefficient before any Markov adoption. For real h∈C∞_c and stationary tested covariance C with spectrum S of HS04/05, define R_T(ν)=∫dt dt' h(t/T)h(t'/T)e^{-iν(t−t')}C(t−t'). Fourier inversion on Schwartz tests yields

R_T(ν)=T²/(2π)∫S(ω)|hat h(T(ν−ω))|²dω,

where hat h(z)=∫h(t)e^{-izt}dt. Dividing by T||h||²2 and changing variable gives a positive approximate identity against S, so R_T/(T||h||²2)→S(ν). Parseval gives ∫|hat h|²/(2π)=||h||²2. For ν in a fixed compact interval, S in HS04/05 is globally Lipschitz (differentiate its smooth formula, derivative bounded at0 and infinity). Consequently the absolute error is≤Lip(S)/(2πT||h||²2)∫|z||hat h(z)|²dz. This is an exact coefficient/rate limit with a quantitative bound. It is not a convergence statement for the all-order detector probability or an exact infinite-time transition probability. If T is seconds this formula uses dimensionless argumentt/T; all frequencies must be proper inverse seconds, and the displayed error carries the corresponding S units.

<a id="HS07"></a>
## HS07 — massless two-polarization box, Planck and entropy-flux integrals

Let L>0 and modes(n,s), n∈Z³\{0}, s∈{1,2}, ε_n=ℏc(2π/L)|n|. On ℓ²(finite occupations) define H=Σε_nN_ns with exact real-multiplier squared-sum domain. M0's occupation-trace proof applies: minε>0 and Σe^{-βε_n}<∞ by integer max-norm shells O(j²) and their exponentially decreasing weights. Thus q*<1, normalized trace-Gibbs density exists for everyβ>0, mean n_n=(e^{βε_n}−1)^-1, and all energy moments are finite by the same polynomial-exponential shell bound. The zero mode is explicitly excluded; an included zero-energy boson mode would give infinite partition trace.

For T=1/(k_Bβ), energy density u_L=2L^-3Σ_n ε_n/(e^{βε_n}−1). Nondimensionalize before the mesh estimates: let ζ=βℏc [length], x=ζk dimensionless and d=2πζ/L the dimensionless mesh. Then ε_n=k_BT|dn| and

u_L=2k_BT/[(2π)³ζ³] d³Σ_(n≠0) f(dn), f(x)=|x|/(e^{|x|}−1).

The function f extends continuously to f(0)=1. On each compact dimensionless x domain the Riemann sums converge by uniform continuity. For large |x|, f(x)≤C(1+|x|)e^{-|x|}. In a cube of side d centered at dn, |dn|≥|x|−√3d/2, so for 0<d≤1 its lattice tail is bounded by a common integrable exponential tail (absorb the polynomial into e^{-|x|/2}); cubes with |dn|>R lie outside |x|>R−√3/2. This tail tends zero as R→∞ uniformly in d. The omitted origin contributes d³f(0)→0. Hence

u=2k_BT/[(2π)³ζ³]∫R³ f(x)d³x
=(k_BT)^4/(π²ℏ³c³)∫0∞x³/(e^x−1)dx.

Positive expansion(e^x−1)^-1=Σ_n≥1e^{-nx}, followed by positive integral limits and four elementary integrations by parts, gives the integral6Σn^-4. To evaluate the latter without a cited unexplained coefficient, use the actually read torus Parseval supplier with functionx² on[−π,π]. Its complex Fourier coefficients are c0=π²/3,c_n=2(−1)^n/n² forn≠0 by twice integrating by parts. Parseval givesπ⁴/5=π⁴/9+8Σn^-4, soΣn^-4=π⁴/90. Therefore u=π²k_B⁴T⁴/(15ℏ³c³).

The actual infinite-mode finite-box entropy follows directly from the normalized diagonal Gibbs law, without a general entropy-continuity assertion. Enumerate the two-polarization modes by j, with q_j=e^{-βε_j}; M0's positive trace product gives log Z=Σ_j[-log(1−q_j)]<∞. Its configuration eigenvalues are p_ω=e^{-βE_ω}/Z>0, with E_ω=Σ_jε_j n_j finite on every basis configuration. The mean energy is finite: positive interchange gives ⟨H⟩=Σ_j ε_j q_j/(1−q_j), bounded by (1−q*)^-1Σ_jε_j e^{-βε_j}; the latter is finite by the O(r²) lattice-shell count and exponential decay. Higher moments, if wanted, follow directly from Z(β/2)<∞ and y^p e^{-βy}≤C_(p,β)e^{-βy/2} for y≥0. Thus the declared energy moments do not depend on formal differentiations of an infinite product.

Since −log p_ω=log Z+βE_ω≥0, summing the nonnegative diagonal entropy terms gives exactly

S_L=−k_BΣ_ωp_ωlog p_ω=k_B(log Z+β⟨H⟩)<∞.

Inserting the two convergent positive mode sums gives S_L=k_BΣ_j[−log(1−q_j)+βε_j q_j/(1−q_j)]. For a geometric mode nbar=(e^x−1)^-1, algebra identifies the bracket with g(nbar)=(1+nbar)log(1+nbar)−nbarlog nbar=x/(e^x−1)−log(1−e^{-x}). This is the entropy of the actual full state, not an inference from trace-norm continuity of entropy under truncation.

Set G(x)=|x|/(e^{|x|}−1)−log(1−e^{-|x|}), x≠0, with x the same dimensionless momentum as above. Then S_L/L³=2k_B/[(2π)³ζ³] d³Σ_(n≠0)G(dn). For |x|≤1, G(x)≤C[1+|log|x||]; its continuum small-ball integral is bounded by Cδ³(1+|log δ|) for 0<δ≤1. The corresponding lattice bound is also uniform: max-norm shell |n|_∞=j has at most Cj² points, and the part with 0<|dn|≤δ is bounded by

d³Σ_(1≤j≤δ/d) Cj²[1+|log(dj)|]≤C'δ³(1+|log δ|).

Every logarithm here is dimensionless. To see the last estimate, group the shell radii dj into (δ2^{-l-1},δ2^{-l}], l≥0. For a nonempty group its point count is at most C(δ2^{-l}/d)³, while 1+|log(dj)|≤1+|log δ|+(l+1)log2. Multiplication by d³ and summing the convergent geometric series Σ_l2^{-3l}(1+l) proves the displayed bound. Empty groups contribute zero, including all groups once their upper radius is below d. On any fixed annulus the function G is continuous, so ordinary Riemann sums apply; at large |x|, G≤C(1+|x|)e^{-|x|}, so the preceding cube comparison gives uniform tails. Splitting into small ball, compact annulus and tail proves the full entropy-density limit. Integrating by parts gives ∫0∞x²[-log(1−e^-x)]dx=(1/3)∫0∞x³/(e^x−1)dx; the boundary x³log(1−e^-x) vanishes at both endpoints. Combining the two entropy contributions therefore gives s=4u/(3T).

For isotropic freely streaming massless rays, outward flux across a plane is speedc times density times ∫hemisphere cosθdΩ/(4π)=c/4, since angular integral isπ. Consequently energy flux F=cu/4=σT⁴ and entropy flux F_S=cs/4=(4/3)F/T, σ=π²k_B⁴/(60ℏ³c²). These are exact integrals in the defined two-polarization occupation/ray model; the physical blackbody/transport adoption is separate. They do not prove greybody transmission, horizon state choice or interacting equilibration.

<a id="HS08"></a>
## HS08 — quasistatic algebra, exact mass ODE and conditional entropy accounting

For M>0 define r=2GM/c², A_H=4πr², κ=c²/(4GM), T_∞=ℏcκ/(2πk_B), S_B=k_Bc³A_H/(4Gℏ)+S0. Write A=A_H and T=T_∞ in the following formulas. The physical interpretation fixes the Schwarzschild Killing generator ξ=∂_(x0) normalized by ξ²→−1 at infinity, its asymptotic energy E_∞=Mc² and asymptotic clock t=t_∞ in seconds. Direct differentiation gives T_∞dS_B=c²dM. Adopt a phenomenological far-field blackbody emission closure: an effective emitting area A_eff=ηA_H, with 0<η≤1 fixed, carries the HS07 outgoing ray flux at the asymptotic temperature T_∞. A_eff is a model area proportional to the horizon area, not a material patch of the null horizon with a proper local temperature equal to T_∞. It may be pictured as the active fraction of an ideal effective emitter; η is not a spectral transmission coefficient multiplying arbitrary occupations. Thus the adopted asymptotic power is

P=ηAσT⁴=ηℏc⁶/(15360πG²M²).

Define α=ηℏc⁴/(15360πG²) and impose the energy-balance ODE dM/dt_∞=-α/M²; a prime below denotes this fixed asymptotic-time derivative. Multiplying by3M² and integrating gives M(t)=[M0³−3αt]^(1/3), the unique positive solution since this smooth right side is locally Lipschitz onM>0 (uniqueness also follows the integrated cubic). For a stipulated lower cutoff0<Mmin<M0 the exact interval is0≤t≤(M0³−Mmin³)/(3α). The algebraic zero endpoint t*=5120πG²M0³/(ηℏc⁴) is not an extension throughM=0 or a quantum-gravity endpoint prediction.

The quasi-static diagnostic is change over a crossing time r/c: ε_qs=|M'|(r/c)/M=2Gα/(c³M²). Thus ε_qs≤ε0 on the interval ifMmin²≥2Gα/(c³ε0). This is an exact dimensionless diagnostic in the adopted ODE, not a proved error estimate between that ODE and an Einstein–quantum backreaction solution; none is constructed. Over any interval Δt with δ=3αΔt/M³≤1/2, the exact ratioM(t+Δt)/M(t)=(1−δ)^(1/3) gives |M(t+Δt)/M(t)−1|≤(2^(2/3)/3)δ by the mean value theorem. This is a genuine quantitative approximation bound internal to the model.

Let S_rad(t_∞)=∫0^t_∞(4/3)P_∞/T_∞ dt' be the coarse entropy exported by the stipulated far-field effective emitter; here P_∞=P and the derivatives below use t_∞. Then S_B'=-P/T and(S_B+S_rad)'=P/(3T)≥0. This proves a defined coarse thermodynamic entropy accounting statement only. No actual outside von Neumann entropy, entanglement subtraction, universal generalized second law, collapse spacetime or Hawking backreaction is inferred. A time-dependent Schwarzschild parameter family equipped with this ODE is not thereby an exact dynamic Einstein metric. Nor is this Stefan closure a reference-independent luminosity theorem: under ξ→bξ, E_ξ→bE_ξ and t_ξ→t_ξ/b, so P_ξ→b²P_ξ, whereas T_ξ⁴→b⁴T_ξ⁴ and the area is unchanged. The numerical closure P_∞=A_effσT_∞⁴ is stipulated only in the fixed asymptotic normalization; a different reference requires transformed model coefficients rather than reusing that formula unchanged.

Units for test constructors: U,u[m],k,κ[m^-1], chiralJ[m^-1], f,g dimensionless give dimensionless J(f), and h_f has m^1/2 components in L²(dk). In the4D temporal constructor Φγ[m^-1], f[m/s] makes ∫Φγ f dτ dimensionless and Kγf[m] has dimensionless L²(dν) norm. Its S_a has s/m²; chiral Sκ has m^-1, and an adopted chiral rate coupling has m/s when rates use physical seconds. θ,σ in HS01 have m^-1 for length-affineλ; Ric(k,k) m^-2 for dimensionlessk. Box ε[J], β[J^-1],u[J/m³],s[J/(K m³)],σ[W/(m²K⁴)],P[W],α[kg³/s],entropy flux[W/(K m²)]. These assignments interpret the positive numerical mathematical parameters only after a physical model is selected.
