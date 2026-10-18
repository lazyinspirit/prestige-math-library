# Non-relativistic quantum mechanics — frontier successor prose scaffold

Research design dated 2026-10-19. Every proposed theorem is an authoring obligation; none is an accepted proof or a production carrier. The inventory describes new pairs only. The baseline retains all 30 earlier A/B pairs, their canonical rows, actual authored page/item bytes, original reservations and repaired successors.

## Retained authority and framework

Retain every original P1–P7, P5a/P6a/R1–R3/R3a model postulate, claim, quantitative qualification and source obligation. Preserve the complete tensor/instrument/spectral/Gaussian, Hermite/spin/spherical, interval/contact, Coulomb bound plus onto-continuum, ordinary plus Dollard scattering, adiabatic/WKB/Airy/tunnelling, finite-N Coulomb/Fock/equilibrium, magnetic/detection and cutoff radiation/emission development. Existing authored repaired carriers govern actual supplier statements; historical prose governs retained promised scope. A historical sentence calling a research argument complete is not current independent acceptance. Optional HVZ/general singular realization/universal dilation/continuum Markov/cutoff removal obligations remain visible; this successor does not silently claim them proved or erase them.

The owner brief authorizes current stable root-frontier mathematical drafts as explicit planning suppliers. This supersedes the older track's 2026-10-11 published-only exclusion for this planning task only. Such draft uses retain their actual draft status, AC hypotheses, dependency closure and future proof review. No root/physics import bytes are edited here.

Use complex separable Hilbert spaces and the first-linear pairing ⟨u,v⟩. Operator products AB have domain {u∈D(B):Bu∈D(A)}. Self-adjointness includes adjoint domain equality. Expectations and variances require the stated spectral moments. PVM strong commutation is not replaced by a zero commutator on an arbitrary core. A unitary ray assignment and the Born/Lüders model remain adopted physical assumptions, not consequences of operator theory. Isolated fixed-number massive matter uses Newtonian time and m>0. No mass-zero Schrödinger photon limit is taken.

SI quantities retain t in s, x in m, p in kg m s⁻¹, energy in J, ℏ in J s, charge in C, vector potential in T m and flux in Wb. Mathematical nondimensional models identify the conversion scales explicitly. Probability, normalized state norms, Berry holonomy and entropy without kB are dimensionless. Statistical IID, apparatus calibration, detector efficiency and background are separate model assumptions. No new experiment item is fabricated. Existing Bach source qualifications and all pending experimental-evidence candidates survive through the retained authority map.

## Exact reading and prerequisite rule

The accompanying suppliers register contains the actual full supplier statement, exact current bytes/status and consumer use. B pages are leaves. No theorem uses a B example as a logical supplier. New mathematical prerequisites are homed in new mathematical A pages; mathematical items never depend on physical postulates/results. Missing local authoring of a known theorem is a planned proof obligation, never an open-problem escape hatch.

[plan-non-relativistic-quantum-mechanics-track.md](/home/lazyinspirit/Projects/prestige-math-library/physics/research/plan-non-relativistic-quantum-mechanics-track.md)

[prose-scaffold.md](/home/lazyinspirit/Projects/prestige-math-library/physics/research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/prose-scaffold.md)

[inventory.json](/home/lazyinspirit/Projects/prestige-math-library/physics/research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json)

[baseline-claim-coverage.json](/home/lazyinspirit/Projects/prestige-math-library/physics/research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/baseline-claim-coverage.json)

[mathematical-prerequisites.md](/home/lazyinspirit/Projects/prestige-math-library/physics/research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/mathematical-prerequisites.md)

[closure-ledger.json](/home/lazyinspirit/Projects/prestige-math-library/physics/research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/closure-ledger.json)

[supplier-map.json](/home/lazyinspirit/Projects/prestige-math-library/physics/research/scaffold-audit-2026-10-11/quantum-mechanics/supplier-map.json)

## nrqmx-operator-realizations — Operator domains, deficiency spaces and boundary realizations

A page `nrqmx-operator-realizations`; B companion `nrqmx-operator-realizations-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.

Prerequisite A/P pages: `unbounded-self-adjoint-operators-and-stones-theorem`, `qm-math-intervals-and-contacts`, `relations-functions-and-quotients`.

Fix the Hilbert pairing linear in the first variable throughout; coordinate matrices still use the ordinary conjugate-transpose adjoint. A differential expression is not an observable until a domain is specified. The minimal interval Laplacian has domain H² functions whose values and first derivatives vanish at both endpoints; the maximal adjoint domain is H²(0,L). Green's identity produces a nondegenerate boundary form on C⁴. Write a=Γ0f and b=ℓΓ1f. The condition (U−I)a+i(U+I)b=0 is equivalent to U(a+ib)=a−ib. A unitary U makes these vectors have equal norm, so the diagonal boundary form vanishes; polarization gives isotropy. Surjective trace and maximal dimension two give the full adjoint domain equality. U=−I gives Dirichlet and U=I gives Neumann. Mixed/Robin/contact conditions from the retained interval page remain, while this pair adds the actual classification and the no-extension obstruction. No physical principle selects U automatically.

### A interfaces

#### def-nrqmx-extension-data — Closed symmetric operators and deficiency data

Kind `definition`; domain `mathematics`.

For a densely defined closed symmetric S on a complex Hilbert space define N±=ker(S*∓iE*) for a chosen reference energy E*>0; deficiency indices are dim N±. The graph core, adjoint domain and chosen boundary trace maps are part of the realization.

References:

[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]

Derivation / proof-authoring route: Define kernels and prove their closedness using closedness of S*; explain E* nondimensionalization.

#### thm-nrqmx-von-neumann-extension — Unitary deficiency parameterization

Kind `theorem`; domain `mathematics`.

A closed densely defined symmetric S has a self-adjoint extension exactly when dim N+=dim N−. For each unitary U:N+→N− the extension has D(S_U)=D(S)⊕{u+Uu:u∈N+} and S_U(f+u+Uu)=Sf+iE*u−iE*Uu.

References:

[[def-nrqmx-extension-data]]

[[def-axiom-of-choice]]

Derivation / proof-authoring route: Use the Cayley partial isometry, orthogonal range decompositions and graph-norm decomposition; check both adjoint inclusions, including infinite deficiency indices.

#### thm-nrqmx-interval-unitary-boundaries — All interval Laplacian boundary conditions

Kind `theorem`; domain `mathematics`.

For L>0 the self-adjoint realizations of −d²/dx² between its minimal and maximal domains in L²(0,L) are parametrized by U∈U(2) through (U−I)Γ0f+iℓ(U+I)Γ1f=0, with Γ0=(f(0),f(L)), Γ1=(f′(0),−f′(L)) and fixed ℓ>0.

References:

[[thm-nrqmx-von-neumann-extension]]

Derivation / proof-authoring route: Integrate by parts for boundary symplectic form, prove trace surjectivity with cubic polynomials, classify maximal isotropic planes by Cayley boundary coordinates.

#### thm-nrqmx-half-line-momentum-obstruction — A symmetric momentum with no self-adjoint extension

Kind `theorem`; domain `mathematics`.

The closure of −i d/dx initially on Cc∞(0,∞) has unequal deficiency indices (1,0), hence has no self-adjoint extension in L²(0,∞).

References:

[[thm-nrqmx-von-neumann-extension]]

Derivation / proof-authoring route: Adjoint is maximal H¹; solve f′=∓f and test L² at infinity; use deficiency parameterization.

### B leaf applications

#### ex-nrqmx-twisted-ring-spectrum — Twisted circle momentum

Kind `example`; domain `mathematics`.

For D(Pθ)={f∈H¹(0,L):f(L)=e^{iθ}f(0)}, Pθ=−iℏf′ has eigenvalues ℏ(2πn+θ)/L with normalized exponential eigenvectors.

References:

[[thm-nrqmx-interval-unitary-boundaries]]

Derivation / proof-authoring route: Fourier shift by e^{iθx/L} gives unitary equivalence to periodic Fourier multiplier.

#### cex-nrqmx-formal-symmetry-insufficient — Formal Hermiticity is insufficient

Kind `counterexample`; domain `mathematics`.

The half-line derivative has a real formal differential expression after multiplying by −i but no self-adjoint extension; integration-by-parts symmetry alone does not produce unitary dynamics.

References:

[[thm-nrqmx-half-line-momentum-obstruction]]

Derivation / proof-authoring route: Use the proved unequal deficiency indices.

Source scope:

[teschl-2009](sources.md#teschl-2009)

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

## nrqmx-form-spectral-methods — Semibounded forms, variational spectra and Birman–Schwinger

A page `nrqmx-form-spectral-methods`; B companion `nrqmx-form-spectral-methods-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.

Prerequisite A/P pages: `nrqmx-operator-realizations`, `qm-math-coulomb`, `spectral-measures-and-borel-functional-calculus`, `analytic-semigroups-and-linear-evolution-equations`, `unbounded-self-adjoint-operators-and-stones-theorem`.

The associated-operator source uses evolution convention A=−H, so every use explicitly reverses that sign. Form boundedness is weaker than operator relative boundedness and is not discharged by Kato–Rellich. If q0[u]≥0 and |v[u]|≤a q0[u]+b||u||², choose C>b+1: (1−a)q0+(C−b)||u||²≤q0+v+C||u||²≤(1+a)q0+(C+b)||u||². These inequalities prove completeness and lower boundedness. For Birman–Schwinger use dimensionless H0=−Δ; restoring ℏ²/(2m) rescales W and κ. Equality at threshold E=0, inverse-square singularities and unbounded negative potentials require separate analysis. Rank-one resolvent identities give an exact soluble spectral model and a later resonance test without pretending finite-rank nonlocal potentials are local atomic Coulomb interactions.

### A interfaces

#### thm-nrqmx-closed-form-representation — Semibounded closed-form representation and perturbation

Kind `theorem`; domain `mathematics`.

A densely defined symmetric closed form q≥−c on a complex Hilbert space determines a unique self-adjoint H≥−c with Q(q)=D((H+c)^(1/2)) and q(u,v)=⟨Hu,v⟩ on D(H)×Q(q). If real v satisfies |v[u]|≤a q0[u]+b||u||² for q0≥0 and a<1, q0+v is closed and semibounded on Q(q0).

References:

[[def-closed-sectorial-form-and-its-associated-operator]]

[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

Derivation / proof-authoring route: Apply Riesz to q+(c+1)⟨.,.⟩ to construct bounded positive injective resolvent; invert on its range and use spectral calculus. Prove shifted form norm equivalence for perturbation.

#### thm-nrqmx-form-min-max — Form min-max below the essential spectrum

Kind `theorem`; domain `mathematics`.

For semibounded self-adjoint H, λk=inf_dim L=k sup_||u||=1,u∈L qH[u], with L⊂Q(H), equals the kth eigenvalue below inf σess(H), counted with multiplicity, or that threshold if fewer exist. Compact form embedding gives a complete discrete eigenbasis.

References:

[[thm-nrqmx-closed-form-representation]]

[[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]

Derivation / proof-authoring route: Prove spectral projection dimension bounds directly from the PVM; compact embedding gives compact shifted resolvent and use compact self-adjoint spectral theorem. Do not apply finite real Courant-Fischer to an unbounded complex operator.

#### thm-nrqmx-birman-schwinger-negative-spectrum — Birman–Schwinger principle for bounded compact potentials

Kind `theorem`; domain `mathematics`.

For real W≥0 bounded and compactly supported on R³ and κ>0, Kκ=W^(1/2)(−Δ+κ²)^(−1)W^(1/2) is compact positive. The multiplicity of eigenvalue −κ² of −Δ−W equals that of 1 for Kκ; the number of eigenvalues below −κ² equals the number of eigenvalues of Kκ above 1.

References:

[[thm-nrqmx-form-min-max]]

[[thm-kato-rellich]]

Derivation / proof-authoring route: Kernel e^(−κ|x−y|)/(4π|x−y|) gives Hilbert-Schmidt compactness; intertwine eigenvectors, then compare negative form subspaces through (−Δ+κ²)^(1/2).

#### thm-nrqmx-rank-one-resolvent — Rank-one resolvent and bound-state equation

Kind `theorem`; domain `mathematics`.

For self-adjoint H0, g∈H and real λ, let Hλ=H0+λ|g⟩⟨g|. With R0(z)=(H0−z)^(−1) and 1+λ⟨R0(z)g,g⟩≠0, Rλ=R0−λ R0|g⟩⟨g|R0/(1+λ⟨R0g,g⟩). Zeros below σ(H0) give bound states when g≠0.

References:

[[thm-kato-rellich]]

Derivation / proof-authoring route: Multiply the proposed inverse on both sides on D(H0); use spectral measure derivative and monotonicity for eigenvalue count.

### B leaf applications

#### ex-nrqmx-attractive-separable-bound-state — Separable attractive model

Kind `example`; domain `mathematics`.

For H0 multiplication by p² in L²(R³), g(p)=C exp(−p²/2) and λ<0, bound states solve 1+λ∫|g(p)|²/(p²+κ²)dp=0 and there is at most one.

References:

[[thm-nrqmx-rank-one-resolvent]]

Derivation / proof-authoring route: Derivative in κ has fixed sign; verify any threshold separately.

#### cex-nrqmx-trial-vector-domain — Trial states need the form domain

Kind `counterexample`; domain `mathematics`.

A normalized L² vector outside Q(H) has no finite variational energy and supplies no Rayleigh–Ritz upper bound.

References:

[[thm-nrqmx-form-min-max]]

Derivation / proof-authoring route: Use free Fourier tail with finite L² norm and divergent weighted second moment.

Source scope:

[teschl-2009](sources.md#teschl-2009)

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

## nrqmx-scattering-interfaces — Scattering channels, stationary resolvents and time delay

A page `nrqmx-scattering-interfaces`; B companion `nrqmx-scattering-interfaces-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.

Prerequisite A/P pages: `nrqmx-form-spectral-methods`, `qm-math-controlled-dynamics`, `unbounded-self-adjoint-operators-and-stones-theorem`.

Retain the existing ordinary and Dollard Coulomb scattering promises in their original homes. This extension never applies short-range Cook estimates to unscreened Coulomb. For Cook, d[e^(itH)e^(−itH0)u]/dt=i e^(itH)V e^(−itH0)u and the integrable norm of the right-hand side makes the trajectory Cauchy. That proves existence, not completeness. Completeness and absence of singular-continuous spectrum use the explicitly registered authored compact-support theorem. Threshold zero, embedded eigenvalues for weaker decay, long-range modifiers, multichannel rearrangement and resonance expansions are separate regimes. An approximate Lorentzian pole line shape is a local approximation after bounding analytic background; it does not prove exact exponential survival at all times. The Wigner–Smith matrix is a finite channel invariant under fixed bases; changing the reference plane introduces propagation delay and must be tracked.

### A interfaces

#### def-nrqmx-scattering-channel-data — Wave, scattering and channel operators

Kind `definition`; domain `mathematics`.

For self-adjoint H0,H on separable Hilbert spaces and bounded identification J, define Ω±=s-lim_t→±∞ e^(itH)J e^(−itH0)Pac(H0) where it exists; completeness means ran Ω±=Hac(H), and S=Ω+*Ω−. Two-space identifications and excluded bound sectors are explicit.

References:

[[thm-canonical-spectral-type-decomposition]]

Derivation / proof-authoring route: Define the limit on a dense set then extend by uniform boundedness; distinguish completeness from isometry.

#### thm-nrqmx-short-range-scattering-completeness — Compact-support short-range scattering closure

Kind `theorem`; domain `mathematics`.

For real bounded compactly supported V on R³, H=−Δ+V on H² has complete Ω± relative to −Δ, no singular continuous spectrum, and S is unitary on free L². Positive-energy stationary scattering agrees with the wave-operator scattering matrix with the retained normalization.

References:

[[thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness]]

[[def-nrqmx-scattering-channel-data]]

Derivation / proof-authoring route: Consume actual repaired compact-support completeness and stationary-dynamical identification carriers; prove compatibility of any changed Fourier convention and restrict all stationary claims to k>0.

#### thm-nrqmx-finite-channel-wigner-smith — Wigner–Smith matrix for differentiable finite channels

Kind `theorem`; domain `mathematics`.

If S(E)∈U(r) is C¹ on an energy interval, Q(E)=−iℏ S(E)*S′(E) is Hermitian, tr Q=−iℏ d log det S/dE, and under energy-independent unitary channel changes Q transforms by conjugacy.

References:

[[def-nrqmx-scattering-channel-data]]

Derivation / proof-authoring route: Differentiate S*S=I and determinant; an energy-dependent basis adds a connection term, which must be retained. This algebraic theorem does not prove an operational arrival-time interpretation.

#### thm-nrqmx-rank-one-resonance-continuation — Resonance poles in an analytic rank-one model

Kind `theorem`; domain `mathematics`.

If the scalar m(z)=⟨(H0−z)^−1g,g⟩ has a specified analytic continuation across an open absolutely continuous interval, noncancelled zeros of 1+λm_cont(z) give poles of the corresponding continued rank-one resolvent matrix elements. These poles are not complex eigenvalues of self-adjoint Hλ.

References:

[[thm-nrqmx-rank-one-resolvent]]

Derivation / proof-authoring route: Use the exact rank-one formula, state test-vector analytic continuation and nonzero numerator at the simple pole; derive residue. Existence of continuation is an explicit model input with Gaussian momentum form factor and an explicit contour.

### B leaf applications

#### ex-nrqmx-single-phase-time-delay — Elastic phase derivative

Kind `example`; domain `mathematics`.

For S(E)=e^(2iδ(E)), Q(E)=2ℏδ′(E) has units seconds.

References:

[[thm-nrqmx-finite-channel-wigner-smith]]

Derivation / proof-authoring route: Differentiate the phase; state differentiable branch and E away from thresholds.

#### cex-nrqmx-cook-not-completeness — Cook existence is not completeness

Kind `counterexample`; domain `mathematics`.

An isometric intertwining wave operator need not have range all Hac(H); adding an uncoupled absolutely continuous summand to the target gives a counterexample.

References:

[[def-nrqmx-scattering-channel-data]]

Derivation / proof-authoring route: Take H=H0⊕H0 and Jf=(f,0).

Source scope:

[teschl-2009](sources.md#teschl-2009)

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

## nrqmx-semiclassical-calculus — Weyl quantization, Wigner functions and finite-time classical limits

A page `nrqmx-semiclassical-calculus`; B companion `nrqmx-semiclassical-calculus-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.

Prerequisite A/P pages: `qm-math-controlled-dynamics`, `schwartz-space-and-the-plancherel-theorem`.

Use dimensionless ε=ℏ/S0 after selecting length L0 and momentum P0, S0=L0P0. Physical coordinates and action are restored before interpretation. The convention gives Op(xj)=Qj and Op(ξj)=−iε∂j; therefore [Qj,Pj]=iε, which fixes the Poisson/Moyal sign. Existing stationary-phase lemmas can support local oscillatory analysis only with their actual compact-support/nondegeneracy hypotheses. The bounded-symbol estimate is an explicit missing prerequisite with its own inventory lemma; the Schwartz Hilbert-Schmidt bound is not uniform enough to replace it. The cubic commutator expansion is obtained by carrying the same Taylor proof one order further; its integral remainder is bounded by the new estimate. Time-dependent symbol a∘Φ_(t−s) then yields error ≤C_T ε² by Duhamel. This is fixed-time control only: no Ehrenfest-scale or caustic uniformity is asserted. Airy connection and tunnelling remainders already promised remain in retained controlled-approximation sources; an asymptotic series alone never proves an error estimate.

### A interfaces

#### def-nrqmx-weyl-symbol-wigner — Schwartz Weyl quantization and Wigner distributions

Kind `definition`; domain `mathematics`.

For a∈S(R^(2d)) and ε>0 define OpεW(a)u(x)=(2πε)^−d∫e^(i(x−y)·ξ/ε)a((x+y)/2,ξ)u(y)dy dξ on Schwartz functions. For normalized u∈S define $W_\varepsilon[u](x,\xi)$=(2πε)^−d∫e^(−iy·ξ/ε)u(x+y/2)overline(u(x−y/2))dy.

References:

[[thm-plancherel]]

Derivation / proof-authoring route: Absolute convergence, kernel Hilbert-Schmidt bound and Fourier inversion give well-definedness; extend the operator to L².

#### thm-nrqmx-wigner-marginals — Wigner pairing and marginals

Kind `theorem`; domain `mathematics`.

For Schwartz symbols and states, ⟨OpεW(a)u,u⟩=∫a $W_\varepsilon[u]$; ∫$W_\varepsilon[u](x,\xi)$dξ=|u(x)|² and the position integral is the ε-Fourier momentum density. Wε is real but need not be nonnegative.

References:

[[def-nrqmx-weyl-symbol-wigner]]

Derivation / proof-authoring route: Fubini and midpoint coordinate change; prove marginals using Schwartz Fourier inversion, not informal δ integration.

#### thm-nrqmx-schwartz-moyal-remainder — Weyl composition with a controlled Schwartz remainder

Kind `theorem`; domain `mathematics`.

For a,b∈S(R^(2d)) and 0<ε≤1, Op(a)Op(b)=Op(ab+(iε/2){a,b})+ε² Op(rε), with ||Op(rε)||≤C from finitely many fixed Schwartz seminorms of a,b. The Poisson bracket is ∂x a·∂ξ b−∂ξ a·∂x b.

References:

[[def-nrqmx-weyl-symbol-wigner]]

Derivation / proof-authoring route: Derive the oscillatory product from two kernels, Taylor expand with integral remainder, integrate by parts until absolute convergence, and prove an L² kernel/Schur bound uniform in ε. Supply the full seminorm count in authoring.

#### lem-nrqmx-bounded-symbol-estimate — Order-zero Weyl L² boundedness

Kind `lemma`; domain `mathematics`.

For each d there are a fixed integer Nd and Cd such that a∈C∞(R^(2d)) with bounded derivatives through Nd gives ||OpεW(a)||≤Cd∑_|α|≤Nd ||∂αa||∞, 0<ε≤1.

References:

[[def-nrqmx-weyl-symbol-wigner]]

Derivation / proof-authoring route: Prove with phase-space cube partition, integration by parts and almost orthogonality; choose Nd=4d+4 as a sufficient nonoptimal index. This is a new local prerequisite, not an already accepted supplier.

#### thm-nrqmx-quadratic-egorov — Exact quadratic Egorov and finite-time smooth extension

Kind `theorem`; domain `mathematics`.

For a real quadratic h and its self-adjoint Weyl realization, Uε(t)*OpεW(a)Uε(t)=OpεW(a∘Φt), a Schwartz, where Uε=e^(−it Op(h)/ε) and Φt is the Hamiltonian flow. For h=|ξ|²/2+V(x), V smooth with all derivatives of order≥2 bounded, compact time intervals and compactly supported smooth a, an operator-norm O(ε²) remainder follows from an explicitly proved order-zero symbol estimate and cubic Moyal commutator remainder.

References:

[[thm-nrqmx-schwartz-moyal-remainder]]

[[lem-nrqmx-bounded-symbol-estimate]]

Derivation / proof-authoring route: Quadratic commutator is exact on S; integrate Heisenberg equation and extend boundedly. The nonquadratic branch requires a NEW local bounded-symbol lemma and cubic remainder, both specified in prose; it is not supplied by measure-theoretic Egorov.

### B leaf applications

#### ex-nrqmx-gaussian-wigner-flow — Gaussian Wigner transport

Kind `example`; domain `mathematics`.

A Gaussian coherent state has positive Gaussian Wigner density with phase-space covariance saturating uncertainty; quadratic dynamics transports it exactly by the symplectic flow.

References:

[[thm-nrqmx-wigner-marginals]]

[[thm-nrqmx-quadratic-egorov]]

Derivation / proof-authoring route: Evaluate Gaussian Fourier integral and use quadratic Egorov.

#### cex-nrqmx-wigner-negative — Wigner negativity

Kind `counterexample`; domain `mathematics`.

The first oscillator excited state has Wigner density proportional to (2(x²+ξ²)/ε−1)e^(−(x²+ξ²)/ε), which is negative near the origin.

References:

[[thm-nrqmx-wigner-marginals]]

Derivation / proof-authoring route: Evaluate Hermite Gaussian integral and normalize with the stated convention.

Source scope:

[teschl-2009](sources.md#teschl-2009)

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

## nrqmx-adiabatic-holonomy — Projector geometry, adiabatic transport and Berry curvature

A page `nrqmx-adiabatic-holonomy`; B companion `nrqmx-adiabatic-holonomy-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.

Prerequisite A/P pages: `qm-math-controlled-dynamics`, `chern-weil-theory-and-characteristic-forms`.

Adiabatic transport, geometric holonomy and physical time evolution are distinct constructions. P d defines an anti-Hermitian connection without assuming a Schrödinger Hamiltonian. For a local unit eigenvector u, A=u*du and the transported coefficient solves c′=−A_s c. Taking u=(cos(θ/2),e^{iφ}sin(θ/2)) gives A=i sin²(θ/2)dφ and dA=(i/2)sinθ dθ∧dφ. Thus the curvature has the factor one half, and the positive eigenline has Chern number −1 in the convention (i/2π)F. The accessed Tong text has a displayed polar curvature missing that factor and inconsistent nearby phase signs; this scaffold fixes the convention by direct differentiation rather than copying it. Degenerate rank-r holonomy uses path ordering, not independent Abelian phases. Non-Abelian topological phases and modular functors are not inferred from a finite matrix Berry connection.

### A interfaces

#### def-nrqmx-smooth-projector-bundle — Smooth spectral bundles and Kato transport

Kind `definition`; domain `mathematics`.

For a C² family of rank-r orthogonal projections P(x) on C^d over a smooth parameter manifold M, E={(x,v):P(x)v=v} has Hermitian fibers and projected connection ∇=P d. Along a C² path P(s), Kato transport solves W′=[P′,P]W, W(0)=I.

References:

[[thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate]]

Derivation / proof-authoring route: Construct local frames by projecting a fixed independent r-tuple and Gram-Schmidt in a neighborhood; finite ODE gives unique transport.

#### thm-nrqmx-berry-projector-curvature — Projector curvature and frame covariance

Kind `theorem`; domain `mathematics`.

For the projected connection of a C² rank-r projector family, F=P(dP∧dP)P. In a local orthonormal frame V with V*V=I, A=V*dV is anti-Hermitian and Fframe=dA+A∧A; under V→Vg, A→g^−1Ag+g^−1dg and F→g^−1Fg. Kato transport is unitary and P(s)W(s)=W(s)P(0).

References:

[[def-nrqmx-smooth-projector-bundle]]

Derivation / proof-authoring route: Differentiate P²=P to obtain PdPP=0; expand ∇² and use the local frame identity. Differentiate W*W and W*PW.

#### thm-nrqmx-rank-one-chern-holonomy — Rank-one holonomy and integral curvature

Kind `theorem`; domain `mathematics`.

For a C² rank-one projector on an oriented closed smooth surface, (i/2π)∫tr F is an integer equal to the first Chern number in this anti-Hermitian connection convention; local geometric phase is exp(−∮A), including transition functions when a path crosses frame patches.

References:

[[thm-nrqmx-berry-projector-curvature]]

[[lem-first-chern-form-agrees-with-the-topological-line-class]]

Derivation / proof-authoring route: Use first Chern form agreement with topological line class; give two-chart clutching derivation using Stokes and winding, fixing orientation.

#### thm-nrqmx-adiabatic-geometric-phase-bound — Physical adiabatic phase with explicit scale

Kind `theorem`; domain `mathematics`.

For C² finite Hermitian H(s) with a coherently followed spectral cluster separated by a uniform energy gap g>0, iℏ∂sUT=T H(s)UT transports the cluster up to leakage ≤ℏ C/T using X solving [H,X]=[P′,P]. For a simple eigenvalue, the comparison evolution factors into exp(−iT∫E ds/ℏ) and Kato geometric transport.

References:

[[thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate]]

[[thm-nrqmx-berry-projector-curvature]]

Derivation / proof-authoring route: Rescale the actual finite adiabatic supplier H→H/ℏ or T→T/ℏ; compute constants with energy units and use its intertwining evolution. Derive scalar phase by projecting the equation.

### B leaf applications

#### ex-nrqmx-spin-half-monopole — Spin-half curvature and a solid angle

Kind `example`; domain `mathematics`.

For P+=(I+n·σ)/2 on the unit sphere, a northern eigenframe gives A=i(1−cosθ)dφ/2 and F=i sinθ dθ∧dφ/2. Holonomy is exp(−iΩ/2) for the positive eigenline and oriented solid angle Ω modulo 4π.

References:

[[thm-nrqmx-rank-one-chern-holonomy]]

Derivation / proof-authoring route: Differentiate normalized spinor (cos(θ/2),e^(iφ)sin(θ/2))ᵀ; integrate F with frame patch bookkeeping.

#### cex-nrqmx-gap-closing-adiabatic — Slow variation alone is insufficient

Kind `counterexample`; domain `mathematics`.

A path through a degeneracy may violate any uniform-gap adiabatic estimate; the constant cannot be held fixed as g→0.

References:

[[thm-nrqmx-adiabatic-geometric-phase-bound]]

Derivation / proof-authoring route: Use H(s)=s σz and a chosen branch whose labeling swaps at s=0; distinguish an actual discontinuous spectral choice from a coherently followed gapped projector.

Source scope:

[tong-aqm](sources.md#tong-aqm)

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

## nrqmx-exchange-representations — Exchange symmetry, Schur–Weyl and Temperley–Lieb spin algebra

A page `nrqmx-exchange-representations`; B companion `nrqmx-exchange-representations-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.

Prerequisite A/P pages: `qm-math-orbital-and-spin`, `qm-math-fock-and-equilibrium`, `the-branching-rule-and-the-young-graph`.

The physical boson/fermion sector postulate remains the original P6; it is not derived from symmetric-group representation theory. Algebra enters through an actual useful finite model: ei=2|s⟩⟨s| with |s⟩=(|01⟩−|10⟩)/√2. On three factors, P12 P23 P12=(1/4)P12, so multiplying by 2³ gives e12 e23 e12=e12. Since swap=I−e, exchange evolution belongs to the represented TL algebra. The q=1 Hecke specialization is the permutation algebra; no generic-q deformation is assumed physical merely because it exists algebraically. This finite-chain bridge is exported to QSM for integrable and many-body models. Two-particle planar topology permits a character e^{iθ}; realizing anyons in a material, braid fusion categories and non-Abelian sectors require QSM/QFT models, not a change to ordinary three-dimensional particle statistics. TikZ plans use time upward, adjacent strands numbered left-to-right, and a cap normalized to the displayed singlet; proofs are the contraction identities.

### A interfaces

#### thm-nrqmx-schur-weyl-exchange-blocks — Unitary exchange blocks for collective spins

Kind `theorem`; domain `mathematics`.

On (C^d)^⊗N the permutation representation and diagonal U(d) action admit an orthogonal decomposition into Specht factors and multiplicity spaces indexed by partitions λ of N with at most d rows. Every permutation operator acts in the Specht factor; every collective U(d) action acts in the multiplicity factor.

References:

[[thm-schur-weyl-decomposition-with-length-cutoff]]

Derivation / proof-authoring route: Start from exact published Schur-Weyl decomposition; choose invariant inner products by finite-group averaging and restrict GL(d) to U(d). Identify the finite commutants; no parastatistics assignment follows.

#### thm-nrqmx-spin-half-temperley-lieb — Singlet projectors form a Temperley–Lieb representation

Kind `theorem`; domain `mathematics`.

For N≥2 spin-half factors define si as adjacent swaps and ei=I−si=2Psinglet_(i,i+1). Then ei²=2ei, ei e_(i±1) ei=ei, and [ei,ej]=0 for |i−j|>1. This is a *-representation of TL_N(2), not a claim of faithfulness at all N.

References:

[[thm-nrqmx-schur-weyl-exchange-blocks]]

Derivation / proof-authoring route: Check swap eigenvalues on singlet/triplet; compute contraction on three spinors using the normalized singlet. Tensor with identity to extend the local identity.

#### thm-nrqmx-heisenberg-exchange-tl — Exchange Hamiltonians in TL and spin blocks

Kind `theorem`; domain `mathematics`.

On a finite spin-half chain with dimensionless σ, Si=ℏσi/2 obeys Si·S_(i+1)=ℏ²(si/2−I/4)=ℏ²(I/4−ei/2). Therefore a finite exchange Hamiltonian ∑Ji Si·S_(i+1)/ℏ² is a Hermitian TL element commuting with global SU(2), with energies obtained independently in finite Schur-Weyl blocks.

References:

[[thm-nrqmx-spin-half-temperley-lieb]]

Derivation / proof-authoring route: Use σaσb=δabI+iεabcσc and evaluate on singlet/triplet; retain Ji in joules and finite chain. The physical identification of exchange is an additional effective model.

#### thm-nrqmx-two-dimensional-exchange-holonomy — Two-particle planar exchange and statistics holonomy

Kind `theorem`; domain `mathematics`.

The unordered configuration space of two distinct points in R² is homeomorphic to R²×(0,∞)×RP¹, hence its fundamental group is Z. Its one-dimensional unitary representations send the elementary exchange to e^(iθ), and a full winding to e^(2iθ). Bosonic/fermionic assignments θ=0,π are selected cases.

References:

[[thm-nrqmx-schur-weyl-exchange-blocks]]

Derivation / proof-authoring route: Use center of mass, relative radius and relative angle modulo π; lift the angle to R and classify loops by winding. The flat line bundle is built from the universal cover quotient with that character.

### B leaf applications

#### ex-nrqmx-three-spin-blocks — Three spin-half decomposition

Kind `example`; domain `mathematics`.

Three spin-half factors decompose as one spin-3/2 multiplet and two spin-1/2 multiplets; nearest-neighbor exchange acts on the two-dimensional multiplicity space.

References:

[[thm-nrqmx-heisenberg-exchange-tl]]

Derivation / proof-authoring route: Compute total spin highest weights and dimension 4+2+2=8; display the singlet-coupled basis and verify one exchange matrix.

#### cex-nrqmx-permutation-invariance-not-bosons — Permutation invariance does not select statistics

Kind `counterexample`; domain `mathematics`.

The identity Hamiltonian on a labeled tensor power commutes with all permutations while retaining every permutation sector. It does not force symmetric or antisymmetric physical states.

References:

[[thm-nrqmx-schur-weyl-exchange-blocks]]

Derivation / proof-authoring route: Take N=2,d=2 and exhibit both singlet and triplet.

Source scope:

[local-algebra-carriers](sources.md#local-algebra-carriers)

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

## nrqmx-weyl-galilei-representations — Regular Weyl systems, projective symmetry and massive particles

A page `nrqmx-weyl-galilei-representations`; B companion `nrqmx-weyl-galilei-representations-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.

Prerequisite A/P pages: `qm-math-composites`, `qm-math-orbital-and-spin`, `regular-weyl-representations-and-stone-von-neumann`.

Weyl relations avoid illegal differentiation of an unbounded commutator on all states. The actual draft Stone–von Neumann theorem has finite phase space and AC, and its current proof dependencies include Mackey imprimitivity and direct integrals. That draft may be used for planning under the owner brief, with no proof acceptance asserted. The mass cocycle is derived explicitly instead of citing a vague Galilei classification. A full classification of all projective Galilei representations would require a new group cohomology and imprimitivity module; it is not implicitly promised here. Spin-cover and superselection statements are exact finite interfaces that the old framework can consume after proof authoring.

### A interfaces

#### thm-nrqmx-finite-weyl-uniqueness-interface — Finite canonical representation interface

Kind `theorem`; domain `mathematics`.

Assuming AC, a nonzero irreducible regular Weyl system on a finite-dimensional real symplectic space with fixed nonzero central parameter is unitarily equivalent to the Schrödinger system. Regularity, finite dimensionality and irreducibility are necessary hypotheses of this planning interface.

References:

[[thm-stone-von-neumann-for-finite-dimensional-weyl-systems]]

Derivation / proof-authoring route: Use actual current draft Stone–von Neumann carrier and its Mackey closure as draft planning suppliers; carry AC and do not infer infinite-mode uniqueness.

#### thm-nrqmx-boost-translation-cocycle — Mass cocycle for translations and boosts

Kind `theorem`; domain `mathematics`.

For m>0 on L²(R^d), T(a)f(x)=f(x−a) and B(v)f(x)=e^(imv·x/ℏ)f(x) satisfy B(v)T(a)=e^(imv·a/ℏ)T(a)B(v). Direct sums with distinct masses have distinct central characters.

References:

[[thm-nrqmx-finite-weyl-uniqueness-interface]]

Derivation / proof-authoring route: Multiply the two explicit unitary maps, prove strong continuity by dense smooth vectors, and identify the commutator scalar.

#### thm-nrqmx-spin-cover-projective-rotations — Spin rotations and projective SO(3)

Kind `theorem`; domain `mathematics`.

A spin-s irreducible unitary SU(2) representation has central element −I acting by (−1)^(2s); its ray action descends to SO(3). Half-integral spin gives a projective SO(3) action and integral spin an ordinary one.

References:

[[thm-nrqm-orbital-and-spin-finite-spin-block-decomposition]]

Derivation / proof-authoring route: Use highest-weight spin basis and the 2π z-rotation eigenvalues e^(−2πim); show all m have the same parity.

#### thm-nrqmx-finite-superselection-algebra — Sector restriction as observable algebra

Kind `theorem`; domain `mathematics`.

For H=⊕_(j=1)^r Hj and allowed bounded observables A=⊕Aj, expectation tr(ρA) equals tr((∑PjρPj)A). Off-diagonal sector coherences are operationally invisible relative to that chosen algebra.

References:

[[lem-nrqm-composites-nuclear-bounded-cyclicity]]

Derivation / proof-authoring route: Block multiplication and trace cyclicity; this is an algebra-relative theorem, not a proof that every mass coherence is forbidden.

### B leaf applications

#### ex-nrqmx-boost-interferometric-phase — Boost-translation loop phase

Kind `example`; domain `mathematics`.

The loop B(v)T(a)B(v)*T(a)* equals e^(imv·a/ℏ)I; relative phases can be observable only in an explicitly controlled path model.

References:

[[thm-nrqmx-boost-translation-cocycle]]

Derivation / proof-authoring route: Use the cocycle and distinguish global phase on a single branch from relative phase.

#### cex-nrqmx-finite-matrix-ccr — Finite matrices cannot satisfy exact CCR

Kind `counterexample`; domain `mathematics`.

No finite d×d matrices obey [Q,P]=iℏI with ℏ>0 because tr[Q,P]=0 but tr(iℏI)=iℏd.

References:

[[thm-nrqmx-finite-weyl-uniqueness-interface]]

Derivation / proof-authoring route: Take trace using cyclicity.

Source scope:

[local-algebra-carriers](sources.md#local-algebra-carriers)

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

## nrqmx-measurement-compatibility — Measurement compatibility, dilation and identifiable tomography

A page `nrqmx-measurement-compatibility`; B companion `nrqmx-measurement-compatibility-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.

Prerequisite A/P pages: `qm-math-composites`, `qsm-dt-channels`.

This module reuses QSM's published finite Choi–Kraus and GKSL foundations rather than creating duplicate mathematical suppliers. The dilation register has one orthogonal basis vector for each Kraus label (a,α); tracing it after projection gives the actual outcome map, not only its effect. Joint measurability of general POVMs need not imply pairwise effect commutation, which is why the sharp hypothesis is essential. Tomography presupposes calibrated effects and IID preparation. For each outcome, nfa is a sum of n Bernoulli indicators even though different outcomes within one trial are dependent; the union bound needs no independence between outcomes. A new elementary Hoeffding proof is explicitly owed if the exact local supplier is absent: E exp(t(X−EX))≤exp(t²/8), Markov inequality, optimize t, apply both tails. Linear inversion is finite matrix arithmetic and terminates; statistically optimal constrained estimation and Bayesian calibration are destinations requiring additional explicit models.

### A interfaces

#### thm-nrqmx-instrument-stinespring-register — Finite instrument dilation with an outcome register

Kind `theorem`; domain `mathematics`.

For finite completely positive maps Ia:M_d→M_e with ∑Ia trace preserving, there is an isometry V:C^d→C^e⊗C^q and mutually orthogonal register projections Qa with ∑Qa=I such that Ia(ρ)=TrE[(I⊗Qa)VρV*(I⊗Qa)].

References:

[[thm-qsm-dt-choi-kraus]]

[[lem-nrqm-composites-finite-effects-and-instruments]]

Derivation / proof-authoring route: Apply existing Choi-Kraus theorem outcome by outcome, attach distinct |a,α⟩ basis vectors and check V*V=I. Do not duplicate the existing general instrument theorem.

#### thm-nrqmx-sharp-joint-measurability — Sharp finite joint measurability forces commutation

Kind `theorem`; domain `mathematics`.

Two finite PVMs {Pi},{Qj} admit a joint POVM {Gij} with marginals Pi,Qj exactly when every Pi commutes with every Qj; then Gij=PiQj.

References:

[[lem-nrqm-composites-finite-effects-and-instruments]]

Derivation / proof-authoring route: From 0≤Gij≤Pi derive Gij=PiGijPi by positive square root and kernel inclusion; sum over j and i to show PiQj=Gij.

#### alg-nrqmx-linear-tomography-procedure — Informationally complete linear tomography

Kind `algorithm`; domain `mathematics`.

Input a finite POVM {Fa} spanning the real Hermitian d×d matrices and frequencies fa≥0 summing to one; compute Gram G_ab=tr(FaFb), its Moore-Penrose inverse, dual Da=∑b(G+)ab Fb and output X=∑a fa Da. X is Hermitian with exact reconstruction for model probabilities; positivity is not imposed.

References:

[[thm-qsm-dt-choi-kraus]]

Derivation / proof-authoring route: Define the finite spectral pseudoinverse and separate correctness from the procedure.

#### lem-nrqmx-bernoulli-hoeffding — IID Bernoulli concentration

Kind `lemma`; domain `mathematics`.

For n independent Bernoulli(p) variables and f their average, P(|f−p|≥t)≤2 exp(−2nt²), t>0.

Derivation / proof-authoring route: Convexity bounds the centered one-variable log moment generating function by s²/8: its second derivative is a Bernoulli variance at most 1/4, and its value and derivative at zero vanish. Sum the bounds, use Markov, optimize s=4t, and apply both tails.

#### thm-nrqmx-tomography-identifiability-stability — Tomography correctness and finite sample stability

Kind `theorem`; domain `mathematics`.

For the spanning POVM procedure, exact probabilities pa=tr(ρFa) recover ρ. A deterministic frequency error gives ||X−ρ||₂≤||D||_(ℓ²→HS)||f−p||₂. For n IID samples and m outcomes, with probability≥1−δ every |fa−pa|≤sqrt(log(2m/δ)/(2n)).

References:

[[alg-nrqmx-linear-tomography-procedure]]

[[lem-nrqmx-bernoulli-hoeffding]]

Derivation / proof-authoring route: Prove frame reconstruction by Gram pseudoinverse on its range; use Hoeffding for each indicator and union bound. IID and the true POVM are declared statistical assumptions.

### B leaf applications

#### ex-nrqmx-pauli-tomography — Pauli six-outcome tomography

Kind `example`; domain `mathematics`.

The qubit POVM F_(j,±)=(I±σj)/6 is informationally complete and recovers ρ=(I+r·σ)/2 from differences rj=3(p_(j,+)−p_(j,−)).

References:

[[thm-nrqmx-tomography-identifiability-stability]]

Derivation / proof-authoring route: Use trace Pauli identities; finite frequencies may give |r|>1, illustrating lack of positivity.

#### cex-nrqmx-same-povm-distinct-disturbance — Outcome probabilities do not fix disturbance

Kind `counterexample`; domain `mathematics`.

The qubit Z PVM has both Lüders instruments and measure-then-prepare instruments with identical probabilities and different unconditional output states.

References:

[[thm-nrqmx-instrument-stinespring-register]]

Derivation / proof-authoring route: Write Ia(ρ)=tr(Paρ)|+⟩⟨+| versus PaρPa; compare input |0⟩.

Source scope:

[watrous-ch2](sources.md#watrous-ch2)

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

## nrqmx-finite-open-dynamics — Finite reduced dynamics, memory and quantum trajectories

A page `nrqmx-finite-open-dynamics`; B companion `nrqmx-finite-open-dynamics-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.

Prerequisite A/P pages: `nrqmx-measurement-compatibility`, `qsm-dt-channels`, `qm-composites-entanglement-and-reduced-states`.

A CP reduced map presupposes a fixed product preparation for every allowed input ρ. Initial correlations require a declared compatibility domain and assignment map; one cannot infer a CPTP map on all input states. A finite bath has recurrence and generally gives memory. The exact dephasing model gives ρ01(t)=cos(2gt)ρ01(0); a zero followed by revival precludes CP-divisibility across that zero, because a channel cannot reconstruct distinguishability erased at the earlier time. Markov rates γ are model parameters with units s⁻¹ and the jump matrices have units s⁻¹/². This module uses the mathematical GKSL theorem supplied by QSM. Weak-coupling/Davies limits, reservoir correlation decay, KMS detailed balance, entropy production and thermodynamic limits remain QSM-owned.

### A interfaces

#### post-nrqmx-finite-open-model — Finite system-environment and Markov model assignments

Kind `postulate`; domain `physics`.

A selected finite system and environment use a product initial state ρ⊗η and declared unitary U(t); reduced dynamics is Φt(ρ)=TrE U(t)(ρ⊗η)U(t)*. A time homogeneous GKSL model is a separately selected approximation with specified rates; it is not automatic from unitary reduction.

References:

[[thm-qsm-dt-choi-kraus]]

Derivation / proof-authoring route: Physical assignment and validity regime, not a proof of Markovianity.

#### pthm-nrqmx-finite-reduction-channel — Product-state reduced evolution is a channel

Kind `physics-theorem`; domain `physics`.

Under the finite product-state environment model, each Φt is CPTP, but the family need not be a semigroup or CP-divisible.

References:

[[post-nrqmx-finite-open-model]]

[[thm-qsm-dt-choi-kraus]]

Derivation / proof-authoring route: Diagonalize η=∑pk|k⟩⟨k| and use Kjk=√pk⟨j|U|k⟩; prove Kraus normalization. Give finite recurrent dephasing counterexample.

#### pthm-nrqmx-amplitude-damping-model — Amplitude damping with operational time units

Kind `physics-theorem`; domain `physics`.

For an adopted qubit GKSL model H=ℏω|1⟩⟨1| and L=√γ|0⟩⟨1|, γ≥0 in s^−1, populations satisfy ρ11(t)=e^−γtρ11(0) and ρ01(t)=e^(iωt−γt/2)ρ01(0).

References:

[[post-nrqmx-finite-open-model]]

[[thm-qsm-dt-gksl-sufficient]]

Derivation / proof-authoring route: Insert matrix units into the existing GKSL generator, solve linear ODEs and use published sufficient theorem for CPTP. No derivation from a vacuum continuum is claimed.

#### pthm-nrqmx-jump-unravelling-finite — Finite jump expansion and ensemble equation

Kind `physics-theorem`; domain `physics`.

For a finite GKSL generator with bounded jump operators, the no-jump contraction K(t)=exp[t(−iH/ℏ−∑L*aLa/2)] and time-ordered jump products define positive trajectory weights whose summed ensemble equals e^(tL)ρ. The expansion converges in trace norm on finite time intervals.

References:

[[thm-qsm-dt-gksl-sufficient]]

[[post-nrqmx-finite-open-model]]

Derivation / proof-authoring route: Duhamel expansion of L=N+J, bound nth term by e^(t||N||)(t||J||)^n/n!, and trace-preserving total mass. This is an ensemble representation, not unique microscopic trajectories.

### B leaf applications

#### ex-nrqmx-finite-environment-recurrence — A finite bath revives coherence

Kind `example`; domain `physics`.

A system qubit coupled by H=ℏg σz⊗σz to an environment |+⟩ yields coherence multiplier cos(2gt); exact revivals contradict irreversible semigroup decay.

References:

[[pthm-nrqmx-finite-reduction-channel]]

Derivation / proof-authoring route: Compute the two conditional environment phases and their overlap.

#### ex-nrqmx-amplitude-damping-jump-law — Single excitation jump law

Kind `example`; domain `physics`.

In the adopted amplitude damping model initially |1⟩, the first jump waiting-time survival is e^−γt and the state after the jump is |0⟩; no further jump occurs without a drive.

References:

[[pthm-nrqmx-jump-unravelling-finite]]

[[pthm-nrqmx-amplitude-damping-model]]

Derivation / proof-authoring route: Use K(t)|1⟩ and L|0⟩=0.

Source scope:

[watrous-ch2](sources.md#watrous-ch2)

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

## nrqmx-finite-mode-gaussian — Finite-mode Fock, Gaussian and Bogoliubov foundations

A page `nrqmx-finite-mode-gaussian`; B companion `nrqmx-finite-mode-gaussian-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.

Prerequisite A/P pages: `nrqmx-weyl-galilei-representations`, `qm-math-oscillator`, `qm-math-fock-and-equilibrium`, `regular-weyl-representations-and-stone-von-neumann`.

All modes here are finitely many oscillator degrees of freedom; finite mode number does not mean finite-dimensional Fock space. A number cutoff destroys exact CCR at the top state. Mathematical representation equivalence follows from the existing draft finite-Weyl theorem after checking its regularity and fixed central parameter. To avoid hiding a metaplectic existence theorem, the inventory includes a new explicit generator construction. A chirp exp(i xᵀCx/(2ℏ)) adds Cx to momentum on its transported domain; a linear coordinate change rescales position and momentum contragrediently; Fourier transform exchanges them. Williamson diagonalization then reduces Gaussian positivity to thermal geometric distributions with νj=ℏ(nj+1/2). The infinite-mode Hilbert-Schmidt implementability criterion is contextual and QFT/QSM-owned; the example records only the finite-N divergence actually calculated.

### A interfaces

#### def-nrqmx-finite-mode-symplectic-data — Finite-mode quadratures and symplectic transformations

Kind `definition`; domain `mathematics`.

For r≥1 use bosonic Fock over C^r, quadratures R=(Q1,P1,…,Qr,Pr) with [Rj,Rk]=iℏJjk on finite Hermite span. A Gaussian state is specified by characteristic function χ(z)=tr ρ exp(i z·R)=exp(i z·d−zᵀVz/2), with real d and real symmetric V; finite second moments are required.

References:

[[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]]

[[thm-stone-von-neumann-for-finite-dimensional-weyl-systems]]

Derivation / proof-authoring route: Use the existing closed ladder domains and oscillator ON basis; define exponentials by the regular Weyl system, not by an unbounded formal series.

#### thm-nrqmx-finite-metaplectic-construction — Finite symplectic implementation by quadratic generators

Kind `theorem`; domain `mathematics`.

For each real S∈Sp(2r,R) there exists a unitary MS on L²(R^r) implementing MS* R MS=S R in the Weyl sense. Implementers are unique up to phase in the irreducible Schrödinger representation; the continuous double-cover choice is metaplectic.

References:

[[def-nrqmx-finite-mode-symplectic-data]]

[[thm-nrqmx-finite-weyl-uniqueness-interface]]

Derivation / proof-authoring route: Decompose S into Fourier rotations, invertible coordinate changes and real quadratic chirps; prove each integral/unitary formula and its Weyl conjugation. Prove the decomposition with Gaussian elimination on Lagrangian blocks, including singular blocks. Use regular irreducibility for phase uniqueness.

#### thm-nrqmx-finite-mode-bogoliubov — Finite Bogoliubov implementability

Kind `theorem`; domain `mathematics`.

For finite r, matrices U,V with UU*−VV*=I and UVᵀ=VUᵀ define a′=Ua+Va† preserving CCR. There exists a unitary implementing this transformation on finite-mode Fock via the corresponding real symplectic matrix; mean number in the transformed vacuum is tr(VV*).

References:

[[thm-nrqmx-finite-metaplectic-construction]]

Derivation / proof-authoring route: Translate between complex ladder and real quadrature coordinates; apply explicit finite symplectic implementation and compute vacuum contraction. Unbounded equality holds on transported domains, while Weyl equality holds everywhere.

#### lem-nrqmx-williamson-normal-form — Positive definite Williamson normal form

Kind `lemma`; domain `mathematics`.

For real symmetric positive definite 2r×2r V there is S symplectic and positive νj such that V=S diag(ν1,ν1,…,νr,νr) Sᵀ. The uncertainty condition is equivalent to every νj≥ℏ/2.

References:

[[def-nrqmx-finite-mode-symplectic-data]]

Derivation / proof-authoring route: Diagonalize the real skew matrix V^(1/2)JV^(1/2) by an orthogonal matrix into νjJ2 blocks; rescale columns and check symplectic identities. Gaussian states satisfying uncertainty are positive definite in finite r, so no singular V branch is silently used.

#### thm-nrqmx-gaussian-covariance-uncertainty — Gaussian covariance and uncertainty

Kind `theorem`; domain `mathematics`.

For any state with finite quadrature second moments, V+iℏJ/2≥0. Under an implemented symplectic transformation, d→Sd and V→SVSᵀ. For finite-mode Gaussian χ, this inequality is also sufficient for existence of a density operator with that characteristic function.

References:

[[thm-nrqmx-finite-mode-bogoliubov]]

[[lem-nrqmx-williamson-normal-form]]

Derivation / proof-authoring route: Necessity follows from ⟨C*C⟩≥0 for C=∑cj(Rj−dj); sufficiency requires the NEW Williamson diagonalization lemma below and product oscillator thermal states.

### B leaf applications

#### ex-nrqmx-single-mode-squeezing — Single-mode squeeze statistics

Kind `example`; domain `mathematics`.

For a′=cosh(s)a+sinh(s)a†, s real, squeezed vacuum has mean number sinh²s and quadrature variances (ℏ/2)e^(±2s), with signs determined by the chosen implementer orientation.

References:

[[thm-nrqmx-gaussian-covariance-uncertainty]]

Derivation / proof-authoring route: Substitute U,V, compute quadratures and verify determinant ℏ²/4.

#### cex-nrqmx-infinite-mode-vacuum-warning — Finite-mode implementability does not extend automatically

Kind `counterexample`; domain `mathematics`.

For a formal infinite collection with identical nonzero squeezing s, the finite-N transformed vacuum has mean number N sinh²s and vacuum overlap (cosh s)^−N/2→0. The finite-dimensional theorem supplies no infinite-Fock implementer.

References:

[[thm-nrqmx-finite-mode-bogoliubov]]

Derivation / proof-authoring route: Compute product expectations and overlap; do not use overlap alone as a full Shale–Stinespring proof.

Source scope:

[local-algebra-carriers](sources.md#local-algebra-carriers)

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

[weedbrook-gaussian](sources.md#weedbrook-gaussian)

## nrqmx-magnetic-geometry — Uniform magnetic fields, flux topology and Pauli coupling

A page `nrqmx-magnetic-geometry`; B companion `nrqmx-magnetic-geometry-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.

Prerequisite A/P pages: `nrqmx-form-spectral-methods`, `nrqmx-adiabatic-holonomy`, `qm-math-magnetic-and-detection`, `qm-math-oscillator`, `nrqmx-operator-realizations`.

The earlier magnetic page assumes A∈W^(1,∞), which excludes the linear Landau gauge. This successor adds the correct form realization, rather than importing that bounded-potential domain unchanged. For smooth real A, closability follows componentwise: if un→0 in L² and Πun→wj in L², integration against compact smooth tests gives wj=0 because A is locally bounded. A lower-bounded V is first handled by its nonnegative multiplication form and common closure. For Landau gauge, the partial Fourier transform turns Πy into ℏk−qBx; shifting x→x−ℏk/(qB) identifies all fibers with the same oscillator. Infinite multiplicity is the L²(k) degeneracy, not a normalizable plane wave. A finite rectangle degeneracy formula based on counting centers is heuristic unless magnetic boundary conditions and integer flux are imposed. No exact count for a hard-wall sample is claimed. QFT owns anomalous magnetic moments and exact photon angular momentum.

### A interfaces

#### post-nrqmx-magnetic-model-extension — Unbounded vector potential and Pauli model

Kind `postulate`; domain `physics`.

For m>0 and charge q, select the closed Friedrichs magnetic form qA[u]=(1/2m)∑||(-iℏ∂j−qAj)u||²+∫V|u|² on the closure of Cc∞ in its form norm, for smooth real A and real V∈L¹loc bounded below. A spin-half Pauli term −g q S·B/(2m) is an additional effective coupling with declared g and a semibounded realization.

References:

[[thm-nrqmx-closed-form-representation]]

Derivation / proof-authoring route: Separate physical minimal-coupling assignment from existence; form closure must be proved under the stated smooth/locally bounded hypotheses before use.

#### pthm-nrqmx-landau-direct-integral — Exact planar Landau spectrum

Kind `physics-theorem`; domain `physics`.

For constant nonzero B, q≠0, A=(0,Bx),V=0 on L²(R²), the Friedrichs magnetic Hamiltonian is unitarily equivalent to ∫⊕ h(k)dk with h(k)=−ℏ²∂x²/(2m)+(ℏk−qBx)²/(2m). Its spectrum is {ℏ|qB| (n+1/2)/m:n≥0}, each with infinite multiplicity and no continuous spectral measure.

References:

[[post-nrqmx-magnetic-model-extension]]

[[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]

Derivation / proof-authoring route: Partial Fourier transform in y followed by k-dependent x translation yields oscillator⊗I. Prove equivalence of forms and maximal coefficient domains; do not use bounded-A H² theorem.

#### pthm-nrqmx-flux-ring-spectrum — Aharonov–Bohm ring holonomy

Kind `physics-theorem`; domain `physics`.

A charge q constrained to a circle radius R with flux Φ uses HΦ=(ℏ²/(2mR²))(−i∂φ−α)² on periodic H², α=qΦ/(2πℏ). Its energies are ℏ²(n−α)²/(2mR²), n∈Z, and Φ→Φ+2πℏk/q is unitarily equivalent.

References:

[[post-nrqmx-magnetic-model-extension]]

[[thm-nrqmx-interval-unitary-boundaries]]

Derivation / proof-authoring route: Fourier diagonalization and gauge multiplication e^(ikφ); noninteger α cannot be removed by a single-valued periodic gauge.

#### pthm-nrqmx-pauli-square-identity — Pauli square and g=2 model identity

Kind `physics-theorem`; domain `physics`.

On Cc∞ spinors for smooth A, (σ·Π)²=Π²−qℏ σ·B with Π=−iℏ∇−qA. Therefore the quadratic Pauli Hamiltonian (σ·Π)²/(2m) gives g=2 at the formal-core level; its closed nonnegative form realization is selected separately.

References:

[[post-nrqmx-magnetic-model-extension]]

Derivation / proof-authoring route: Use [Πi,Πj]=i qℏ εijk Bk and σiσj=δij+iεijkσk. Distinguish the model identity from a derivation of the electron anomalous magnetic moment.

### B leaf applications

#### ex-nrqmx-landau-3d-continuum — Restoring longitudinal free motion

Kind `example`; domain `physics`.

The three-dimensional uniform-field Hamiltonian has bands En+ℏ²kz²/(2m) and absolutely continuous spectrum [ℏ|qB|/(2m),∞), unlike the planar Landau operator.

References:

[[pthm-nrqmx-landau-direct-integral]]

Derivation / proof-authoring route: Tensor planar spectral decomposition with the one-dimensional free momentum multiplier and integrate kz.

#### ex-nrqmx-flux-half-crossing — Half-flux degeneracy

Kind `example`; domain `physics`.

At α=1/2, ring states n=0 and n=1 are degenerate; at α=0 the ground state is unique.

References:

[[pthm-nrqmx-flux-ring-spectrum]]

Derivation / proof-authoring route: Compare the exact quadratic eigenvalue sequence.

Source scope:

[tong-aqm](sources.md#tong-aqm)

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

## nrqmx-bloch-band-geometry — Single-particle Bloch bundles and band topology

A page `nrqmx-bloch-band-geometry`; B companion `nrqmx-bloch-band-geometry-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.

Prerequisite A/P pages: `nrqmx-adiabatic-holonomy`, `nrqmx-form-spectral-methods`, `orthonormal-bases-parseval-and-fourier-series`.

This pair is one-particle finite-range band geometry. It does not prove many-body Hall conductance, interacting topological order or bulk-edge correspondence. The hopping Hilbert space differs from continuum periodic Schrödinger operators; a continuum Bloch transform and compact fiber resolvent are additional closure if later requested. The curvature formula is global at projector level and local at eigenvector level. For a two-band projector, ∂P=±(∂n·σ)/2 and [∂1P,∂2P]=(i/2)(∂1n×∂2n)·σ, hence tr P[∂1P,∂2P]=±(i/2)n·(∂1n×∂2n). Multiplication by i/(2π) gives the displayed opposite sign. Physical semiclassical anomalous velocity is explicitly an effective-model consequence; a mathematical item may define and vary that Lagrangian without claiming its experimental validity. QSM owns filled-band/Kubo/edge and interacting phases.

### A interfaces

#### def-nrqmx-bloch-fiber-model — Lattice Bloch transform and band projectors

Kind `definition`; domain `mathematics`.

For ℓ²(Z^d)⊗C^r and a finite-range translation-invariant Hermitian hopping operator (Hψ)n=∑δ Tδ ψ_(n−δ), T_(−δ)=Tδ*, define Fourier Bloch fibers h(k)=∑δ Tδ e^(−ik·δ), k∈T^d. An isolated group of bands defines the orthogonal spectral projector P(k).

References:

[[thm-parseval-equivalences-for-a-complete-orthonormal-family]]

Derivation / proof-authoring route: Fourier-series Parseval gives a unitary transform and bounded Hermitian matrix fibers; gap plus contour differentiation gives smooth P.

#### thm-nrqmx-bloch-projector-chern — Gapped band curvature and Chern invariance

Kind `theorem`; domain `mathematics`.

For a C² gapped rank-r projector P(k) on the oriented two-torus, C=(i/2π)∫tr P dP∧dP is an integer, invariant under C² deformations preserving a uniform gap. A globally smooth periodic orthonormal frame forces C=0.

References:

[[def-nrqmx-bloch-fiber-model]]

[[thm-nrqmx-rank-one-chern-holonomy]]

Derivation / proof-authoring route: Apply the projector curvature theorem to the determinant line bundle; prove the determinant transition connection and integrate exact transgression under homotopy.

#### thm-nrqmx-two-band-degree-formula — Two-band Chern degree formula

Kind `theorem`; domain `mathematics`.

For smooth h(k)=d0(k)I+d(k)·σ with |d|>0 on T², the eigenprojectors P±=(I±n·σ)/2, n=d/|d|, satisfy C(P±)=∓(1/4π)∫n·(∂1n×∂2n)dk1dk2.

References:

[[thm-nrqmx-bloch-projector-chern]]

Derivation / proof-authoring route: Expand tr(P[∂1P,∂2P]) with Pauli matrices and the fixed i/(2π) convention. Prove integer degree by regular-value/chart winding or invoke the explicitly supplied line-class argument.

#### thm-nrqmx-finite-band-adiabatic-velocity — Conditional band velocity and anomalous term

Kind `theorem`; domain `mathematics`.

For a wave packet in a simple smooth isolated band and an explicitly adopted slow-force single-band approximation, the effective Lagrangian L=ℏk·xdot+ iℏ u(k)*∂k u(k)·kdot−E(k)+q Eext·x gives ℏkdot=qEext and xdot=(1/ℏ)∇kE−kdot×Ω, with Ω the real Berry curvature in the matching convention.

References:

[[thm-nrqmx-two-band-degree-formula]]

Derivation / proof-authoring route: Treat the Lagrangian as an effective model; perform Euler-Lagrange differentiation and match signs. Proving the wave-packet approximation error requires the semiclassical supplier and a new space-adiabatic theorem; this item claims only the conditional finite-dimensional variational consequence.

### B leaf applications

#### ex-nrqmx-two-band-gap-closures — Lattice two-band gap locations

Kind `example`; domain `mathematics`.

For d=(sin kx,sin ky,M+cos kx+cos ky), the band gap closes precisely at M∈{−2,0,2}; on each complementary interval the Chern number is constant.

References:

[[thm-nrqmx-two-band-degree-formula]]

Derivation / proof-authoring route: Set all three components to zero and apply gap-preserving invariance; calculate integer values by degree with the stated orientation during authoring.

#### cex-nrqmx-smooth-frame-obstruction — A nonzero Chern band has no global frame

Kind `counterexample`; domain `mathematics`.

A band with nonzero C has no globally smooth periodic normalized eigenvector even though a smooth projector exists.

References:

[[thm-nrqmx-bloch-projector-chern]]

Derivation / proof-authoring route: Contradict vanishing of the integral of dA on a torus.

Source scope:

[tong-aqm](sources.md#tong-aqm)

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

## nrqmx-floquet-control — Periodic finite dynamics, quasienergy and controlled truncation

A page `nrqmx-floquet-control`; B companion `nrqmx-floquet-control-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.

Prerequisite A/P pages: `qm-math-controlled-dynamics`, `nrqmx-form-spectral-methods`, `unbounded-self-adjoint-operators-and-stones-theorem`.

No Floquet heating or many-body localization claim follows from finite matrix Floquet decomposition. Sambe space is infinite-dimensional even for finite internal d. Finite Fourier sections can exhibit boundary artifacts; the algorithm defines an exact compression and its finite termination only. A convergence theorem requires a specified isolated eigenvalue, regularity and a posteriori residual estimate, supplied by the next module when the residual is evaluated in the full operator domain. A high-frequency Magnus approximation requires its own convergence/error hypotheses; the existence of some logarithm of U(T) does not make a particular truncated expansion accurate.

### A interfaces

#### thm-nrqmx-finite-floquet-normal-form — Finite Floquet unitary normal form

Kind `theorem`; domain `mathematics`.

For continuous T-periodic Hermitian H(t) on C^d, U(t)=P(t)e^(−itHF/ℏ) with a Hermitian HF and T-periodic unitary P(t). HF is defined from a chosen Hermitian logarithm of U(T), and quasienergies are defined modulo 2πℏ/T.

References:

[[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]

Derivation / proof-authoring route: Diagonalize U(T), select eigenphases and set HF; define P(t)=U(t)e^(itHF/ℏ), use periodic propagator composition.

#### thm-nrqmx-floquet-sambe-domain — Finite-level Sambe operator with Fourier domain

Kind `theorem`; domain `mathematics`.

For C¹ periodic finite Hermitian H(t), K=H(t)−iℏ∂t on L²(S¹_T)⊗C^d with periodic H¹ domain is self-adjoint as a bounded perturbation of the Fourier derivative. Its eigenvectors e^(inωt)P(t)vj have eigenvalues εj+nℏω.

References:

[[thm-nrqmx-finite-floquet-normal-form]]

[[thm-kato-rellich]]

Derivation / proof-authoring route: Use the explicit periodic derivative multiplier, Kato–Rellich and the Floquet normal form; verify the conjugating periodic unitary preserves H¹.

#### thm-nrqmx-finite-level-duhamel-error — Finite model truncation with bounded coupling error

Kind `theorem`; domain `mathematics`.

For finite Hermitian H and projection P, let HD=PHP+(I−P)H(I−P), V=H−HD. Then ||e^(−itH/ℏ)−e^(−itHD/ℏ)||≤|t| ||V||/ℏ. Consequently leakage from ran P is bounded by this number.

References:

[[thm-nrqmx-finite-floquet-normal-form]]

Derivation / proof-authoring route: Differentiate e^(−i(t−s)H/ℏ)e^(−isHD/ℏ), integrate and use unitarity. No unbounded coupling estimate follows without domain control.

#### alg-nrqmx-floquet-fourier-galerkin — Floquet Fourier–Galerkin assembly

Kind `algorithm`; domain `mathematics`.

Input d, Fourier coefficients Hm with H_(−m)=Hm*, finite harmonic bandwidth b, ω>0 and cutoff N≥0; output the Hermitian matrix K_nm=H_(n−m)+nℏω δnm I for −N≤n,m≤N. Assemble blocks and diagonalize to requested numerical tolerance with a declared classical eigensolver.

References:

[[thm-nrqmx-floquet-sambe-domain]]

Derivation / proof-authoring route: Finite loops terminate after (2N+1)² block assignments; correctness means exact compression of the Sambe operator, not automatic convergence of all computed quasienergies.

#### thm-nrqmx-floquet-galerkin-correctness — Fourier–Galerkin assembly correctness and termination

Kind `theorem`; domain `mathematics`.

The specified Fourier–Galerkin assembly terminates after finitely many block operations and its exact output matrix is the orthogonal compression of K to harmonics −N,…,N; it is Hermitian. Numerical diagonalization accuracy is a separate residual claim.

References:

[[alg-nrqmx-floquet-fourier-galerkin]]

Derivation / proof-authoring route: Compute each Fourier matrix element of multiplication and derivative, use H_(−m)=Hm*, and count a finite square index set.

### B leaf applications

#### ex-nrqmx-driven-two-level-floquet — Commuting longitudinal drive

Kind `example`; domain `mathematics`.

For H(t)=(E0+A cosωt)σz, U(t)=exp[−i(E0t+(A/ω)sinωt)σz/ℏ]; one Floquet choice is HF=E0σz and P(t)=exp[−iA sinωt σz/(ℏω)].

References:

[[thm-nrqmx-finite-floquet-normal-form]]

Derivation / proof-authoring route: Integrate the commuting family and verify periodicity.

#### cex-nrqmx-quasienergy-no-order — Quasienergy has no canonical ground state

Kind `counterexample`; domain `mathematics`.

Changing the logarithm eigenphase by 2π changes a quasienergy by ℏω without altering the monodromy. A lowest quasienergy is therefore not invariant without a selected branch.

References:

[[thm-nrqmx-finite-floquet-normal-form]]

Derivation / proof-authoring route: Use a one-level time-independent Hamiltonian and add nℏω.

Source scope:

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

[teschl-2009](sources.md#teschl-2009)

## nrqmx-certified-spectral-computation — Variational approximation, residual certificates and propagation errors

A page `nrqmx-certified-spectral-computation`; B companion `nrqmx-certified-spectral-computation-examples`. Category `non-relativistic-quantum-mechanics-mathematics`; library `mathematics`.

Prerequisite A/P pages: `nrqmx-form-spectral-methods`, `nrqmx-floquet-control`, `unbounded-self-adjoint-operators-and-stones-theorem`.

These are classical numerical analysis interfaces, with no quantum-computing session operations or claims. Numerical integration error must be enclosed in A and G before reporting certified Ritz values. A nonconforming grid vector is not automatically in a continuum form domain; a raw discrete residual is not the continuum residual. For a trial v(t), integration of d[e^{itH/ℏ}v(t)]/dt=(1/(iℏ))e^{itH/ℏ}r(t) gives an explicit norm error. This converts an actual residual bound for a WKB, Galerkin or time-stepping ansatz into a rigorous finite-time statement. It does not turn the asymptotic expression itself into a proof.

### A interfaces

#### alg-nrqmx-rayleigh-ritz-procedure — Conforming Rayleigh–Ritz procedure

Kind `algorithm`; domain `mathematics`.

Input a semibounded closed form q, finite independent vectors φj∈Q(q), Gram matrix Gij=⟨φj,φi⟩ and form matrix Aij=q(φj,φi). Output eigenvalues and G-normalized coefficients of Ac=λGc after positive Gram factorization.

References:

[[thm-nrqmx-form-min-max]]

Derivation / proof-authoring route: Define exact arithmetic procedure and required quadrature enclosure if entries are numerical; no hidden assumption that trial vectors lie in D(H).

#### thm-nrqmx-ritz-upper-bounds — Conforming Ritz eigenvalue upper bounds

Kind `theorem`; domain `mathematics`.

Each kth Rayleigh–Ritz value from an n-dimensional conforming form subspace is ≥ the kth min-max spectral value for k≤n, and nested dense form subspaces converge to every isolated eigenvalue below essential spectrum.

References:

[[alg-nrqmx-rayleigh-ritz-procedure]]

[[thm-nrqmx-form-min-max]]

Derivation / proof-authoring route: Restrict the min-max infimum and approximate a finite spectral eigenspace in the form norm; control its Gram matrix and energy uniformly.

#### thm-nrqmx-spectral-residual-certificate — Residual distance and isolated-eigenspace certificate

Kind `theorem`; domain `mathematics`.

For self-adjoint H, normalized u∈D(H), real λ and r=(H−λ)u, dist(λ,σ(H))≤||r||. If all spectrum outside a selected cluster lies at distance≥g>0 from λ, then ||(I−Pcluster)u||≤||r||/g.

References:

[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

Derivation / proof-authoring route: Integrate |x−λ|² against the scalar PVM; a spectral gap lower-bounds the integral off the cluster. A nearby spectral point need not be the intended eigenvalue without counting/gap information.

#### thm-nrqmx-schrodinger-residual-bound — A posteriori Schrödinger propagation bound

Kind `theorem`; domain `mathematics`.

Let H be self-adjoint, v(t) a C¹ H-valued path with v(t)∈D(H), Hv continuous and r=iℏv′−Hv integrable. Then ||v(t)−e^(−itH/ℏ)v(0)||≤ℏ^−1∫0^|t| ||r(s)||ds with the corresponding oriented interval.

References:

[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

Derivation / proof-authoring route: Differentiate the interaction-picture vector using the stated graph regularity, integrate the residual and apply unitarity.

### B leaf applications

#### ex-nrqmx-oscillator-ritz-exact — Hermite Ritz exactness

Kind `example`; domain `mathematics`.

For the oscillator, the span of the first n true Hermite states yields exactly its first n eigenvalues and zero residuals.

References:

[[thm-nrqmx-ritz-upper-bounds]]

Derivation / proof-authoring route: Use the already authored coefficient-domain oscillator theorem.

#### cex-nrqmx-small-residual-no-label — A small residual does not label an eigenvalue

Kind `counterexample`; domain `mathematics`.

For H=diag(0,100), vector (0,1) has zero residual at λ=100 although it is not a ground-state approximation.

References:

[[thm-nrqmx-spectral-residual-certificate]]

Derivation / proof-authoring route: Compute directly; distinguish inclusion from eigenvalue indexing.

Source scope:

[teschl-2009](sources.md#teschl-2009)

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

## nrqmx-quantum-optics-models — Finite-mode light–matter models and detection statistics

A page `nrqmx-quantum-optics-models`; B companion `nrqmx-quantum-optics-models-examples`. Category `non-relativistic-quantum-mechanics`; library `physics`.

Prerequisite A/P pages: `nrqmx-finite-mode-gaussian`, `nrqmx-finite-open-dynamics`, `qm-light-matter-and-spectral-transitions`, `qm-math-fock-and-equilibrium`, `qm-math-composites`.

This pair extends, rather than replaces, the old radiation and light–matter promises, including the existing transverse free radiation and cutoff finite-level emission branch. Finite oscillator modes have no naive photon position/spin tensor decomposition. Exact QED helicity, gauge/canonical/kinetic angular momentum, spin–orbital distinctions and paraxial limits remain QFT-owned. In the Jaynes–Cummings model g and ω have units s⁻¹, H has joules; the rotating-wave hypothesis is |g|sqrt(n+1)≪ω,ω0 in a declared low-excitation range, and it is not uniform over all Fock states. A finite atomic compression must carry its model error separately. Single-mode Rabi revivals do not derive continuum spontaneous emission. A counting g² claim requires a chosen normally ordered detection model; no empirical antibunching dataset is invented.

### A interfaces

#### post-nrqmx-finite-mode-light-matter-model — Finite-mode dipole and detector assignment

Kind `postulate`; domain `physics`.

Select finitely many oscillator modes, a finite atomic Hilbert space and compressed dipole matrices. Specify mode frequencies, coupling constants and photon-count/homodyne POVMs. Long-wavelength, rotating-wave and Markov approximations are separate optional assumptions with named scale regimes.

References:

[[thm-nrqmx-finite-mode-bogoliubov]]

[[post-nrqmx-finite-open-model]]

Derivation / proof-authoring route: State units and physical calibration; the finite-mode model does not establish exact electromagnetic localization or continuum photon spin.

#### pthm-nrqmx-jaynes-cummings-blocks — Jaynes–Cummings invariant blocks and Rabi frequency

Kind `physics-theorem`; domain `physics`.

Under the rotating-wave two-level single-mode assignment H=ℏω a†a+(ℏω0/2)σz+ℏg(aσ++a†σ−), real g, the excitation N=a†a+σ+σ− is conserved on finite-particle core. Each span{|e,n⟩,|g,n+1⟩} has splitting ℏsqrt(Δ²+4g²(n+1)), Δ=ω0−ω. The orthogonal block direct sum defines a self-adjoint Hamiltonian on its squared-block-norm domain.

References:

[[post-nrqmx-finite-mode-light-matter-model]]

[[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]]

Derivation / proof-authoring route: Compute the two-by-two blocks and commutator on core; define self-adjointness by direct sum of finite Hermitian matrices, not bounded-perturbation of a†a without proof.

#### pthm-nrqmx-beam-splitter-count-statistics — Passive beam-splitter photon statistics

Kind `physics-theorem`; domain `physics`.

For a passive two-mode unitary with a1→t a1+r a2, |t|²+|r|²=1 and the full two-by-two matrix unitary, input |n,0⟩ gives output counts Binomial(n,|t|²). Coherent input |α,0⟩ gives a product of coherent outputs with amplitudes determined by that unitary.

References:

[[post-nrqmx-finite-mode-light-matter-model]]

[[thm-nrqmx-finite-mode-bogoliubov]]

Derivation / proof-authoring route: Transform creation polynomials and normalize using factorial ladder norms; use finite-mode implementation and exponential coherent expansion.

#### pthm-nrqmx-finite-mode-loss-channel — Pure loss channel and binomial thinning

Kind `physics-theorem`; domain `physics`.

Mix a single mode with an independent vacuum mode by a passive beam splitter and trace the latter. The resulting CPTP map sends number n to binomial photon statistics and coherent α to coherent sqrt(η)α, 0≤η≤1.

References:

[[pthm-nrqmx-beam-splitter-count-statistics]]

[[lem-nrqm-composites-separable-partial-trace]]

Derivation / proof-authoring route: Use the actual isometric dilation on infinite-dimensional finite-mode Fock; prove trace-norm definition by positive trace-class approximation and partial trace, not finite-dimensional Choi classification.

### B leaf applications

#### ex-nrqmx-jc-vacuum-rabi — Vacuum Rabi oscillation

Kind `example`; domain `physics`.

On resonance and initial |e,0⟩, excitation probability equals cos²(gt) in the ideal Jaynes–Cummings model; it revives and is not irreversible spontaneous decay.

References:

[[pthm-nrqmx-jaynes-cummings-blocks]]

Derivation / proof-authoring route: Exponentiate the n=0 block.

#### ex-nrqmx-single-photon-antibunching — Ideal single-mode factorial moment

Kind `example`; domain `physics`.

For number state |1⟩ and ideal number measurement, ⟨a†a†aa⟩=0 while ⟨a†a⟩=1, so g²(0)=0 in that single-mode normally ordered detector model.

References:

[[pthm-nrqmx-beam-splitter-count-statistics]]

Derivation / proof-authoring route: Evaluate ladder action; separate model prediction from an actual reported experiment and from multimode detection.

Source scope:

[retained-nrqm-authority](sources.md#retained-nrqm-authority)

[watrous-ch2](sources.md#watrous-ch2)

[weedbrook-gaussian](sources.md#weedbrook-gaussian)

