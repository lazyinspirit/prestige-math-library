---
id: op-tgrx-continuum-generalized-entropy
kind: open-problem
title: "Continuum generalized entropy beyond the regulated model"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 6
deps:
  - post-tgrx-semiclassical-equation
  - def-tgrx-hadamard-stress-contract
  - def-tgr-horizon-screen-family
  - def-tgr-regulated-generalized-entropy
  - post-tgrx-regulated-horizon-balance
  - pthm-tgrx-regulated-gsl
dependency_roles:
  post-tgrx-semiclassical-equation: formulation-prerequisite
  def-tgrx-hadamard-stress-contract: formulation-prerequisite
  def-tgr-horizon-screen-family: formulation-prerequisite
  def-tgr-regulated-generalized-entropy: formulation-prerequisite
  post-tgrx-regulated-horizon-balance: formulation-prerequisite
  pthm-tgrx-regulated-gsl: physical-result
justified_by: []
aliases: []
forward_refs: []
physical_scope: >
  A precisely delimited open problem for a selected four-dimensional
  semiclassical Einstein-scalar collapse model, an actually existing smooth
  solution on a stated globally hyperbolic domain, a Hadamard state, and a
  fixed covariant renormalization prescription. It asks for sufficient
  nonperturbative-in-the-scalar-amplitude conditions for finite,
  regulator-independent generalized-entropy differences and their future
  monotonicity. It asserts no solution existence, entropy convergence,
  regulator independence, generalized second law, or empirical result.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices, Physical Review D 85, 104049 (2012), arXiv:1105.3445v6"
      url: "https://arxiv.org/pdf/1105.3445"
      locator: "Complete 44-page article retrieved; §1 and §§2.1–2.8 read in full, especially §2.5, equations (38)–(43), and §2.8, equation (50). Wall proves a conditional result under horizon-algebra and semiclassical hypotheses and states additional renormalized-entropy and commuting-limit assumptions; those are not silently identified with the target model."
    - title: "H. S. Reall, Part III Black Holes, University of Cambridge lecture notes (2024)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
      locator: "Complete 149-page PDF retrieved; §§10.7–10.9 inspected, especially §10.9, printed pp. 146–147, equation (10.113), for the GSL summary and its backreaction qualification."
    - title: "Ted Jacobson, Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect, lecture notes"
      url: "https://physics.umd.edu/grt/taj/776b/lectures.pdf"
      locator: "Complete 40-page PDF retrieved; §§2.2, 3.3.4, and 3.4.4 read for the GSL discussion and its explicit renormalization and proof-status qualifications."
    - title: "Thomas Faulkner and Antony J. Speranza, Gravitational algebras and the generalized second law, arXiv:2405.00847"
      url: "https://arxiv.org/pdf/2405.00847"
      locator: "Complete 83-page PDF retrieved; abstract and §§3.3, 5, and 7 inspected. The crossed-product result concerns specified semiclassical states and Killing-horizon modular flow; it does not establish the full nonstationary collapse interval posed here."
    - title: "Josh Kirklin, Generalised second law beyond the semiclassical regime, arXiv:2412.01903v3"
      url: "https://arxiv.org/pdf/2412.01903"
      locator: "Complete 48-page PDF retrieved; abstract and Introduction, §2.1, §§3.1–3.4, §§4.1–4.3, §§5.2–5.3, and §6 inspected. Sections 4.1–4.3 derive the exact modified inequality for ordered idealized dynamical quantum-reference-frame cuts by relative-entropy monotonicity; §§5.2–5.3 show only an approximate leading-order reduction to the usual semiclassical UV-cutoff GSL under further cut conditions."
    - title: "Jonah Kudler-Flam, Samuel Leutheusser, and Gautam Satishchandran, Generalized black hole entropy is von Neumann entropy, arXiv:2309.15897"
      url: "https://arxiv.org/pdf/2309.15897"
      locator: "Complete 105-page PDF retrieved; abstract, Introduction, and §§9.2–9.3 read. The type-II algebra result is stated for the paper's stationary state and bifurcate Killing-horizon setting."
    - title: "Mohd Ali and Vardarajan Suneeta, A local Generalized second law in crossed product constructions, arXiv:2404.00718"
      url: "https://arxiv.org/pdf/2404.00718"
      locator: "Complete 46-page PDF retrieved; abstract and §I read. The local crossed-product result is for the paper's maximally extended static and Kerr black-hole settings and its gravitational-constraint assumptions."
    - title: "Weizhen Jia, Qiongyu Qi, and Christina Gao, Entanglement entropy and thermodynamics of dynamical black holes, arXiv:2509.05700"
      url: "https://arxiv.org/pdf/2509.05700"
      locator: "Complete 31-page PDF retrieved; abstract, §2.1, and §§4–5 read. The relevant GSL discussion is first-order about stationary backgrounds, uses a generalized apparent horizon, and identifies renormalized generalized entropy only at leading local area-law order."
    - title: "Ahmed Almheiri, Thomas Hartman, Juan Maldacena, Edgar Shaghoulian, and Amirhossein Tajdini, The entropy of Hawking radiation, arXiv:2006.06872"
      url: "https://arxiv.org/pdf/2006.06872"
      locator: "Complete 47-page review retrieved; §11.2 read for the gravitational path-integral contour, saddle, cutoff, and exact-state qualifications relevant to island calculations."
    - title: "Phil Saad, Stephen H. Shenker, and Douglas Stanford, JT gravity as a matrix integral, arXiv:1903.11115"
      url: "https://arxiv.org/pdf/1903.11115"
      locator: "Complete 78-page article retrieved; abstract, Introduction, §5.5, and §6.2 read for the JT disk input, nonunique completion, and ensemble dependence."
empirical_premises: []
---

## Open problem

Fix a fully specified four-dimensional semiclassical Einstein-scalar collapse model: its scalar field equation and couplings with SI units, fixed-coupling semiclassical equation and causal prescription, initial and boundary data, a globally hyperbolic domain, and a covariant renormalization prescription. Here causal curves are piecewise $C^1$ curves with consistently future- or past-directed causal tangent, and $J^\pm(K)$ is the set of points reachable from or reaching a set $K$ along such curves. “Globally hyperbolic” uses the supplied Hadamard-contract convention: strong causality (each point has arbitrarily small neighborhoods met in a connected parameter interval by every causal curve) and compact causal diamonds $J^+(p)\cap J^-(q)$. “Semiclassical” means the metric is treated as a classical field while the quantum scalar state contributes through the adopted effective equation. A covariant prescription here has the supplied local-covariance property: its assigned local data commute with pullback under time-orientation-preserving isometric embeddings with causally convex image. The prescription fixes one scale $\mu$, the local curvature counterterms, and their finite normalization conditions; the same prescription and its prescribed regulator dependence are used at both cuts and for every regulator sequence compared below. The spacetime of the selected solution is a smooth time-oriented Lorentzian four-manifold $(M,g,N)$ of signature $(-,+,+,+)$, with Levi-Civita connection $\nabla$ (the unique torsion-free, metric-compatible connection); $N$ is the supplied smooth future-timelike field fixing the time orientation. Select an actually existing smooth solution $(g,\phi)$ on this domain and a positive normalized Hadamard state $\omega$ for the specified scalar theory. Its two-point distribution $W_\omega$ is a bisolution with $\operatorname{WF}(W_\omega)=\mathcal C_g^+$, where $\mathcal C_g^+$ consists of pairs $(x,\xi;y,-\zeta)$ of nonzero future-null covectors that agree at a coincident point or are the metric-dual tangent covectors, with a common positive scale, along one nonconstant future-directed null geodesic. The supplied Hadamard contract also fixes a state-independent local singular bidistribution $H_\mu$ with $W_\omega-H_\mu$ smooth in each specified convex normal neighborhood; such a neighborhood is an open set on which the exponential map at every point is a diffeomorphism from a star-shaped neighborhood of zero in the tangent space. No existence, uniqueness, or stability of such a solution is assumed or claimed. The model remains the adopted effective theory below its stated cutoff; “nonperturbative in the scalar field” means that the proposed sufficient conditions and argument use no truncation in the scalar-field amplitude or state correlations, not that they construct exact quantum gravity.

The separate fixed-background free-collapse scattering postulate is a Schwarzschild model for a massless minimally coupled free scalar with an incoming ground state, an exponential late-time ray map, and a supplied scattering channel. Its Schwarzschild exterior, state, ray-map, late-time convergence, and transmission assumptions are not imposed on the coupled model in this question unless the selected model independently supplies them.

The fixed-coupling equation is
$$G_{ab}+\Lambda_{\mathrm{cc}}g_{ab}+\alpha_{\mathrm{ct}}H^{(R^2)}_{ab}+\beta_{\mathrm{ct}}H^{(\operatorname{Ric}^2)}_{ab}=\frac{8\pi G}{c^4}T^{\mathrm{ren}}_{ab}[g,\omega]$$
below the supplied effective cutoff. Its scalar-field causal prescription supplies $P=-g^{ab}\nabla_a\nabla_b+V$, with smooth real $V$ of units $\mathrm{m^{-2}}$ in length coordinates, and a retarded map $E_R:C^\infty_0(M)\to C^\infty(M)$ satisfying $PE_Rf=f=E_RPf$ and $\operatorname{supp}(E_Rf)\subseteq J^+(\operatorname{supp}f)$ for every $f\in C^\infty_0(M)$; the initial state data are separate supplied inputs. These are adopted model premises, not a solution-existence theorem.

Select a smooth portion $\mathcal H\subset M$ of the future null horizon in this solution. Here $\mathcal H$ means a smooth embedded three-dimensional submanifold for which the restriction of $g_p$ to $T_p\mathcal H$ has one-dimensional radical
$$L_p:=\{v\in T_p\mathcal H:g_p(v,w)=0\text{ for every }w\in T_p\mathcal H\},$$
and choose a smooth nowhere-zero future-directed field $k$ along $\mathcal H$ with $k_p\in L_p$ and $\nabla_k k=0$. These are the exact smooth-null-hypersurface and affine-generator conditions of the supplied smooth null-screen definition. Its screen spaces $\mathcal S_p:=k_p^\perp/\mathbb R k_p$ form a smooth rank-two bundle with the positive-definite quotient metric induced by $g$; for local screen sections represented by tangent fields $X,Y$, the screen deformation form $B([X],[Y])=g(\nabla_Xk,Y)$ is well defined on this quotient. The expansion and shear are respectively $\theta:=\operatorname{tr}_{\bar g}B$ and $\sigma:=B-\frac12\theta\bar g$; this problem imposes no stationarity, completeness, or restriction on either quantity. If $\mathcal H$ is intended to be an event horizon, the model must additionally supply a conformal completion: $M$ is the interior of a manifold with boundary $\overline M$, a smooth defining function $\Omega$ is positive on $M$ and vanishes with nonzero differential at the boundary, and $\bar g=\Omega^2g$ extends to a smooth nondegenerate metric there. Future null infinity $\mathscr I^+$ is the future null boundary component, where $\bar g^{-1}(d\Omega,d\Omega)=0$; the portion under study is $\partial J^-(\mathscr I^+)\cap M$, where $J^-(\mathscr I^+)$ is the set of points from which a future-directed causal curve reaches $\mathscr I^+$. The local semiclassical equation alone does not supply this global structure.

Use length coordinates $x^0=ct$ and an affine parameter $\lambda$ with units of metres; the model fixes its origin and positive normalization. On the specified common generator patch, supply a nonempty compact boundaryless smooth two-manifold $C$, an open interval $J\subset\mathbb R$, and a smooth embedding $\Psi:J\times C\to\mathcal H$ such that $\partial_\lambda\Psi=k\circ\Psi$ and every map $\Psi_\lambda:C\to\mathcal H$ is an embedding with spacelike image. A cut $\Sigma_i$ is the image of the graph of a smooth function $\lambda_i:C\to J$ under $\Psi$, with positive-definite induced metric; thus it is a nonempty compact smooth spacelike two-surface and meets each generator of this patch exactly once. The cuts $\Sigma_1$ and $\Sigma_2$ are ordered when $\lambda_2(x)>\lambda_1(x)$ for every $x\in C$. This order is preserved by every positive affine reparametrization of the generators.

At each finite ultraviolet regulator $\Lambda_n$, whose type, units, and ultraviolet-limit convention are specified by the model, use the finite generalized-entropy data specified by the selected finite-regulator definition on each cut, with the same model, state, finite local counterterms, and fixed scheme. Each $S_{\mathrm{gen},n}[\Sigma_i]$ is a finite real entropy with units $\mathrm{J\,K^{-1}}$. For a regulator sequence $\mathcal R=(\Lambda_n,\text{finite-regulator data})$, define

$$\Delta_{\mathcal R,n}(\Sigma_1,\Sigma_2):=S_{\mathrm{gen},n}[\Sigma_2]-S_{\mathrm{gen},n}[\Sigma_1].$$

An admissible sequence has $\Lambda_n\to+\infty$, uses finite-regulator data from this same selected solution and state, and applies the one fixed covariant prescription at both cuts. A sufficient criterion must specify a nonempty admissible class containing at least two regulator constructions; regulator independence means that the finite limit of $\Delta_{\mathcal R,n}$ is identical for every sequence in that class. The target does not require the two absolute sequences $S_{\mathrm{gen},n}[\Sigma_i]$ to converge separately.

Determine checkable sufficient conditions on the specified model, solution, state, ordered cuts, and admissible regulator class under which, for every such pair of later cuts,

$$\Delta_{\mathcal R,n}(\Sigma_1,\Sigma_2)\longrightarrow\Delta(\Sigma_1,\Sigma_2)\in\mathbb R,\qquad \Delta(\Sigma_1,\Sigma_2)\ge 0,$$

The finite real value $\Delta$ is expressed in SI entropy units $\mathrm{J\,K^{-1}}$.

The same finite $\Delta$ must be obtained for every admissible regulator sequence. The deduction must not assume a finite modular-geometric balance postulate or any other identity equating a modular-energy change to a gravitational-entropy or area change.

The finite comparison theorem assumes nonzero finite-dimensional Hilbert spaces $H_1=H_2\otimes H_E$, density operators $\rho_i,\sigma_i$ with faithful $\sigma_i$, and $\rho_2=\operatorname{Tr}_E\rho_1$, $\sigma_2=\operatorname{Tr}_E\sigma_1$. With $D(\rho\|\sigma):=\operatorname{tr}(\rho(\log\rho-\log\sigma))$ and $\delta_i:=\operatorname{tr}((\rho_i-\sigma_i)(-\log\sigma_i))$, its adopted balance premise is $a_2-a_1=\delta_1-\delta_2$, and it proves $S_{\mathrm{gen},2}-S_{\mathrm{gen},1}=k_B[D(\rho_1\|\sigma_1)-D(\rho_2\|\sigma_2)]\ge0$. Its limit clause assumes both endpoint entropy sequences already converge finitely in one fixed scheme. This is a comparison point only; it establishes neither continuum convergence, regulator independence, semiclassical backreaction, nor the sufficient conditions requested here.

## Open problem references

[[post-tgrx-semiclassical-equation]] supplies the fixed-coupling effective semiclassical equation, specified state, causal prescription, and explicit non-claim of solution existence, uniqueness, or stability.

[[def-tgrx-hadamard-stress-contract]] supplies the positive Hadamard-state and smooth-subtraction-remainder convention used for the renormalized stress tensor.

[[post-tgrx-free-collapse-scattering]] is the separate fixed-background scattering model described above; its extra assumptions are not premises of this problem.

[[def-tgr-horizon-screen-family]] supplies the exact null-hypersurface, affine-generator, and screen conventions used here.

[[def-tgr-regulated-generalized-entropy]] assigns finite regulated generalized-entropy values and assigns a renormalized value only when the named sequence has a finite limit in its declared scheme; it makes no regulator-independence claim.

[[post-tgrx-regulated-horizon-balance]] adopts, for finite density operators on nested factors with partial-trace consistency, the excluded balance $a_2-a_1=\delta_1-\delta_2$, where $a_i$ are supplied geometric entropy data in nats and $\delta_i=\operatorname{tr}((\rho_i-\sigma_i)(-\log\sigma_i))$. [[pthm-tgrx-regulated-gsl]] proves the finite inequality $S_{\mathrm{gen},2}-S_{\mathrm{gen},1}=k_B[D(\rho_1\|\sigma_1)-D(\rho_2\|\sigma_2)]\ge0$, where $D(\rho\|\sigma)=\operatorname{tr}(\rho(\log\rho-\log\sigma))$ for finite density operators with faithful $\sigma$; its limit clause assumes both endpoint sequences already converge finitely in one fixed scheme.

[Aron C. Wall, *A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices*](https://arxiv.org/pdf/1105.3445)

[H. S. Reall, *Part III Black Holes* lecture notes](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf)

[Ted Jacobson, *Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect* lecture notes](https://physics.umd.edu/grt/taj/776b/lectures.pdf)

[Thomas Faulkner and Antony J. Speranza, *Gravitational algebras and the generalized second law*](https://arxiv.org/pdf/2405.00847)

[Josh Kirklin, *Generalised second law beyond the semiclassical regime*](https://arxiv.org/pdf/2412.01903)

[Jonah Kudler-Flam, Samuel Leutheusser, and Gautam Satishchandran, *Generalized black hole entropy is von Neumann entropy*](https://arxiv.org/pdf/2309.15897)

[Mohd Ali and Vardarajan Suneeta, *A local Generalized second law in crossed product constructions*](https://arxiv.org/pdf/2404.00718)

[Weizhen Jia, Qiongyu Qi, and Christina Gao, *Entanglement entropy and thermodynamics of dynamical black holes*](https://arxiv.org/pdf/2509.05700)

[Ahmed Almheiri et al., *The entropy of Hawking radiation*](https://arxiv.org/pdf/2006.06872)

[Phil Saad, Stephen H. Shenker, and Douglas Stanford, *JT gravity as a matrix integral*](https://arxiv.org/pdf/1903.11115)

## Status

Status checked on 22 October 2026. This is an open problem, not a theorem or an empirical claim. The review is targeted and non-exhaustive. Here the generalized second law (GSL) means nondecrease of the cited source's cut entropy $S_{\mathrm{gen}}=A/(4G_N)+S_{\mathrm{out}}$ in its natural units, where $A$ is cut area and $S_{\mathrm{out}}$ is the entropy of exterior quantum fields. A horizon algebra here is the weakly closed, adjoint-closed algebra of bounded field observables assigned to the exterior of a specified cut, with the nested inclusions required by the source proof. “Semiclassical” means quantum matter on a classical metric with backreaction governed at the stated order by the adopted effective equation. Wall proves a conditional GSL under these horizon-algebra and semiclassical hypotheses, together with compatible renormalized-entropy prescriptions and decomposition/limit conditions; those hypotheses are not silently transferred to the fully specified coupled collapse problem above.

For the cited operator-algebra results, a von Neumann algebra is a unital weak-operator-closed, adjoint-closed algebra of bounded operators on a Hilbert space. A state is a positive normalized linear functional; it is faithful if it vanishes on no nonzero positive operator and normal if it is ultraweakly continuous. For a density operator $\rho$, its von Neumann entropy is $-\operatorname{Tr}(\rho\log\rho)$, with $0\log0:=0$ when the trace is defined; in a Type II algebra the trace is the specified faithful normal semifinite trace.

A closer result is Kirklin's exact modified GSL in perturbative gravity, meaning his specified gravitational degrees of freedom are quantized around a classical background. An ideal dynamical quantum-reference-frame cut is an auxiliary quantum degree of freedom with Hilbert space $L^2(\mathbb R)$ and position operator $\hat v$ specifying the cut's affine location; it is a relationally defined quantum cut, not a fixed classical surface. For the outside-region von Neumann entropies $S(N)$, where $S_{\mathrm{vN}}(\rho)=-\operatorname{Tr}(\rho\log\rho)$ when the state has density operator $\rho$, his exact inequality is
$$S(N_a)\ge S(N_b)+F(S_a\in N_b),\qquad F(S_a\in N_b)=\langle H_{S_a|S_b}\rangle_\Phi-S_{S_a\in N_b}[\Phi].$$
Here $N_a\subset N_b$ are the exterior regions of the later and earlier cuts, $H_{S_a|S_b}$ generates the later cut's boost relative to the earlier cut, and $S_{S_a\in N_b}[\Phi]$ is the entropy of the later-cut degrees of freedom represented in the earlier exterior algebra. A Type II factor means a von Neumann algebra with scalar center, no minimal projections, and a faithful normal semifinite trace; Type II$_\infty$ has infinite trace of its identity. In the UV-cutoff semiclassical regime, Kirklin obtains only an approximate leading-order reduction to generalized entropy, up to a state-independent constant; the ordinary GSL follows only with further cut conditions giving $F\ge0$, for example an unentangled later cut satisfying the null energy condition $T_{ab}\ell^a\ell^b\ge0$ for future null $\ell$. This does not establish regulator independence for the finite-regulator definition here or identify its local fixed-scheme limit with Kirklin's Type II algebra entropy. His ideal cuts are auxiliary, and he leaves other symmetries and more realistic cut models for further work.

Reall and Jacobson give broad GSL discussions while recording backreaction, renormalization, and proof-status limits. A Killing horizon is a smooth null hypersurface on which a nonzero Killing field $\xi$ (a vector field satisfying $\mathcal L_\xi g=0$) is normal and tangent; a bifurcate Killing horizon is a pair of such hypersurfaces meeting at a spacelike codimension-two surface where $\xi=0$. For a faithful normal state $\omega$ on $\mathcal A$, let $(\pi_\omega,\mathcal H_\omega,\Omega_\omega)$ be its GNS representation, let $S_\omega$ be the closure of the antilinear map $\pi_\omega(a)\Omega_\omega\mapsto\pi_\omega(a^*)\Omega_\omega$, and put $\Delta_\omega=S_\omega^*S_\omega$. Its modular automorphism group is defined by $\pi_\omega(\sigma_t^\omega(a))=\Delta_\omega^{it}\pi_\omega(a)\Delta_\omega^{-it}$. The crossed product adjoins unitaries $U(t)$ satisfying $U(t)aU(t)^*=\sigma_t^\omega(a)$; the cited gravitational constructions also include global gravitational charges and their constraints. “Modular flow is geometric on the horizon” means that this automorphism group acts on the horizon-cut observables as the specified geometric flow there. Faulkner–Speranza derive a GSL for arbitrary cuts of a Killing horizon when this condition and their semiclassical state hypotheses hold; they do not establish monotonicity after their second-order entropy corrections. Kudler-Flam–Leutheusser–Satishchandran prove their Type II algebra structure result for a linear Klein–Gordon field, a bifurcate Killing horizon, a stationary state (invariant under the Killing flow, not necessarily thermal), and suitable asymptotic decay. Ali–Suneeta treat maximally extended static and Kerr settings and assume gravitational constraints on each partial Cauchy slice, here an achronal spacelike hypersurface segment that every causal curve meets at most once. Jia–Qi–Gao work to first order around stationary backgrounds. In their $f(R)$ model, where $f$ is the gravitational Lagrangian as a function of scalar curvature $R$, the generalized apparent horizon is foliated by cuts on which $\widetilde\Theta_{\widetilde k}:=\widetilde\theta_{\widetilde k}+\widetilde k^a\nabla_a\log f'(R)=0$, with $\widetilde k$ the chosen outward null normal and $\widetilde\theta_{\widetilde k}$ its fractional area-density rate. Their entropy identification is first order and only the leading local area-law term is identified with renormalized generalized entropy.

In the cited island formula, an island is a disconnected bulk region included with radiation in the semiclassical field entropy; its boundary $X$ is chosen by extremizing and then minimizing $\operatorname{Area}(X)/(4G_N)+S_{\mathrm{semi}}(\Sigma_{\mathrm{Rad}}\cup\Sigma_{\mathrm{Island}})$ in the source's natural units. The replica trick computes $S=-\partial_n\log\operatorname{tr}(\rho^n)|_{n=1}$ from the path integral on $n$ copies. A replica saddle is a stationary (first variation of the action equal to zero), possibly complex, geometry contributing to the chosen replicated gravitational path integral; a replica-wormhole saddle connects interiors of different copies. The cited review leaves the integration contour, included saddles, cutoff treatment, and relation to the exact state unresolved. JT means two-dimensional Jackiw–Teitelboim gravity. The cited matrix integral matches its formal genus expansion, a sum of contributions indexed by the number of handles, through an ensemble (a probability law on matrices whose observables are averaged). A nonperturbative completion means additional exact model data beyond that formal expansion; the completion is not unique, and the disk supplier here specifies only a genus-zero continuous density, not an individual Hamiltonian. The sources reviewed do not establish the exact combined claim posed here; this bounded review does not establish that no other proof exists.
