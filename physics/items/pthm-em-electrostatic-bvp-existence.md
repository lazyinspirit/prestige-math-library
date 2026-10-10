---
id: pthm-em-electrostatic-bvp-existence
kind: physics-theorem
title: "Existence and regularity for the electrostatic boundary value problem"
status: draft
origin: session
dependency_level: 18
domain: physics
deps: [def-axiom-of-choice, def-bounded-c-k-domain-and-boundary-charts, def-ck-euclidean-maps-and-diffeomorphisms, def-classical-normal-derivative, def-countable-choice, def-em-electrostatic-regime, def-em-fields, def-em-si-conventions, def-em-surface-distribution, def-em-weak-sources, def-laplacian-of-a-c2-function, def-surface-integral-on-a-compact-c-one-hypersurface, lem-em-interface-derivatives, lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain, post-em-distributional-vacuum-maxwell, post-em-electrostatic-conductor-model, pthm-em-conductor-surface-charge, pthm-em-electrostatic-bvp-uniqueness, pthm-em-fixed-vacuum-jumps, thm-em-elliptic-boundary-existence, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-the-curl-of-a-gradient-vanishes, lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain]
dependency_roles:
  thm-the-curl-of-a-gradient-vanishes: mathematical-premise
  lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-classical-normal-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-em-interface-derivatives: mathematical-premise
  lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain: mathematical-premise
  thm-em-elliptic-boundary-existence: mathematical-premise
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-surface-distribution: operational-prerequisite
  def-em-weak-sources: operational-prerequisite
  post-em-distributional-vacuum-maxwell: operational-prerequisite
  post-em-electrostatic-conductor-model: physical-assumption
  pthm-em-conductor-surface-charge: physical-result
  pthm-em-electrostatic-bvp-uniqueness: physical-result
  pthm-em-fixed-vacuum-jumps: physical-result
physical_scope: "Existence and uniqueness of the classical and weak electrostatic boundary value problems on a bounded smooth vacuum region of a named inertial frame: smooth Dirichlet data, compatible smooth Neumann data, and the conductor reading in which constant potentials on compact conductor surfaces together with outer boundary data determine the field and the induced surface charges and total charges. The transmission clause covers finite disjoint smooth interfaces with prescribed sheet charge in vacuum. The statement is conditional on the cited smooth solvability theorem and asserts no existence for prescribed total charges, no nonsmooth geometry, no dielectric material response, no unbounded exterior problem and no empirical claim."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes (Lent Term 2015, 236 PDF pages)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: "Section 2.4.2 printed pp. 33-35 (Dirichlet/Neumann boundary value problems, the uniqueness theorem and the Green-identity uniqueness argument)."
    - title: "John K. Hunter, Notes on Partial Differential Equations (University of California, Davis, 2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§1.10 Definitions 1.34-1.35 and §2.5 Theorems 2.23-2.24 printed pp. 13-16 and p. 32 (bounded C^1 domains, Green identity, classical uniqueness and flux compatibility)."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: "Sections 3.1.5-3.1.6 printed pp. 116-121 (uniqueness theorems and their role in fixing solutions from boundary data)."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice as declared by the cited solvability theorem ([[def-axiom-of-choice]], [[def-countable-choice]]). Let $\Omega_v\subset\mathbb R^3$ be a bounded $C^\infty$ domain in the sense of [[def-bounded-c-k-domain-and-boundary-charts]] with finitely many connected components (the vacuum region of the additional bounded $C^\infty$ ambient branch of [[post-em-electrostatic-conductor-model]] by [[lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain]], or any bounded smooth domain), let $\rho$ be smooth on $\overline{\Omega_v}$ (fixed-time volume source density, C m$^{-3}$ of [[def-em-si-conventions]]) and let $\varepsilon_0>0$ be the framework constant. Then the electrostatic boundary value problems on $\Omega_v$ are solvable in the following exact senses, and the solutions are the fields of the pure electrostatic regime [[def-em-electrostatic-regime]] with volume source $\rho$:

(a) [Dirichlet branch] for every $g\in C^\infty(\partial\Omega_v)$ there is exactly one $\varphi\in C^\infty(\overline{\Omega_v})$ with

$$-\Delta\varphi=\rho/\varepsilon_0\quad\text{on }\Omega_v,\qquad \varphi|_{\partial\Omega_v}=g,$$

with $\Delta$ the Laplacian of [[def-laplacian-of-a-c2-function]];
and it is the unique weak $H^1$ solution with trace $g$ ([[def-ck-euclidean-maps-and-diffeomorphisms]] for the class); the field $E:=-\nabla\varphi$ ([[def-em-fields]]) is $C^\infty$ on $\overline{\Omega_v}$ and $(E,0)$ realises the pure electrostatic regime with source $\rho$ on the vacuum region.

(b) [Neumann branch] for every $g\in C^\infty(\partial\Omega_v)$ with

$$\int_{\Omega_v^{(j)}}\rho\,dx+\varepsilon_0\int_{\partial\Omega_v^{(j)}}g\,dS=0\qquad\text{for every connected component }\Omega_v^{(j)}\text{ of }\Omega_v,$$

there is $\varphi\in C^\infty(\overline{\Omega_v})$ with $-\Delta\varphi=\rho/\varepsilon_0$ and $\partial_\nu\varphi=g$ (outward normal $\nu$, [[def-classical-normal-derivative]]), unique up to one additive constant per connected component; the normalisation $\int_{\Omega_v^{(j)}}\varphi\,dx=0$ for every $j$ selects exactly one. The compatibility is also necessary in the sense of [[pthm-em-electrostatic-bvp-uniqueness]](b).

(c) [Conductor reading and surface-charge realization] for the separated compact-body conductor geometry and zero-interior-volume convention of [[post-em-electrostatic-conductor-model]], additionally assuming $\Omega$ is a bounded $C^\infty$ ambient domain, with outer boundary data $g_0\in C^\infty(\partial\Omega)$ on $\partial\Omega$ and constants $V_j$ on the conductor surfaces $\partial D_j$ (constant functions are smooth on the compact disjoint boundary pieces), the combined datum is a special case of (a); the field $E:=-\nabla\varphi$ on $\Omega_v$ extended by $E:=0$ on the conductor satisfies the adopted distributional vacuum Maxwell equations [[post-em-distributional-vacuum-maxwell]] with the source pair $(\rho_v+\sigma\,\delta_{\partial D},\,0)$, where $\sigma:=\varepsilon_0\,n\cdot E_+\in C^\infty(\partial D)$ is the constructed continuous surface-charge density, agreeing afterwards with [[pthm-em-conductor-surface-charge]] ([[def-em-weak-sources]](c), [[def-em-surface-distribution]], [[lem-em-interface-derivatives]]); the total charges $Q_j=\varepsilon_0\int_{\partial D_j}n\cdot E_+\,dS$ ([[def-surface-integral-on-a-compact-c-one-hypersurface]]) are thereby determined by the data, and $\varphi$ is constant on each $\partial D_j$ with value $V_j$.

(d) [Stationary sheet charge in the vacuum region] for finitely many disjoint closed smooth interfaces $\Gamma$ strictly inside $\Omega_v$, a smooth sheet density $\sigma_\Gamma$ on them, and outer Dirichlet data $g\in C^\infty(\partial\Omega_v)$, there is a weak solution $\varphi\in H^1(\Omega_v)$ which is $C^\infty$ on the closure of each side of every $\Gamma$, unique by [[pthm-em-electrostatic-bvp-uniqueness]](c)(iii), solving the weak equation with right-hand side $\int_{\Omega_v}\rho v+\sum_\Gamma\int_\Gamma\sigma_\Gamma\,Tv$; its flux jump is $n\cdot[\varepsilon_0\nabla\varphi]=-\sigma_\Gamma$, equivalently $n\cdot[E]=\sigma_\Gamma/\varepsilon_0$ in the sign convention of [[pthm-em-fixed-vacuum-jumps]]. This is the vacuum ($\varepsilon=\varepsilon_0$) transmission branch; no dielectric coefficient is introduced.

(e) [Scope] all existence statements are the ones proved in [[thm-em-elliptic-boundary-existence]] for its stated smooth bounded domains, smooth uniformly positive coefficients (here $\varepsilon=\varepsilon_0 I$), smooth data and finitely many disjoint smooth interfaces; the coefficient is the smooth positive constant $\varepsilon_0I$ on every side in the transmission clause. Excluded: nonsmooth boundaries, corners, edges, coefficient loss of regularity, prescribed total charges for conductor bodies (the free equipotential problem), unbounded exterior regions without a stated decay class, dielectric material response (belonging to the material-response page) and any measurement, apparatus or empirical claim. The theorem asserts existence of the potential, not of a physical equilibrium; the ideal conductor is the adopted model of [[post-em-electrostatic-conductor-model]].

## Facts & Assumptions


**Given:** A bounded $C^\infty$ domain $\Omega_v$ with finitely many components, smooth $\rho$ on $\overline{\Omega_v}$, $\varepsilon_0>0$, and the quoted data of clauses (a)-(d).

[F1] The combined elliptic boundary existence theorem: for a bounded $C^\infty$ domain $\Omega$, smooth uniformly positive coefficient $\varepsilon$ and smooth $\rho$, (a) every smooth Dirichlet datum $g$ admits exactly one weak $H^1$ solution with trace $g$, continuous in the data, $C^\infty$ on $\overline\Omega$ and pointwise satisfying $-\operatorname{div}(\varepsilon\nabla u)=\rho$ with the given trace; (b) every smooth conormal datum $g$ with $\int_{\Omega_j}\rho+\int_{\partial\Omega_j}g=0$ on every component admits a weak solution, unique up to componentwise constants, normalised by zero componentwise means, smooth on each closed component; (c) the transmission problem with finitely many disjoint closed smooth interfaces strictly inside $\Omega$, piecewise smooth uniformly positive $\varepsilon$, piecewise smooth $\rho$ and smooth sheet charge $\sigma$ has, with outer Dirichlet data, a unique globally $H^1$ solution that is $C^\infty$ on each closed side with equal one-sided traces, and with outer Neumann data existence exactly under the componentwise compatibility $\int_{\Omega_j}\rho+\sum_{\Gamma\subset\Omega_j}\int_\Gamma\sigma+\int_{\partial\Omega_j}g=0$, uniqueness modulo componentwise constants, smoothness on each closed side, and flux jump $n\cdot[\varepsilon\nabla u]=-\sigma$ ([[thm-em-elliptic-boundary-existence]], [[def-classical-normal-derivative]]).

[F2] The pure electrostatic reduction: with $\varepsilon=\varepsilon_0I$, $-\operatorname{div}(\varepsilon_0\nabla\varphi)=\rho$ is $-\Delta\varphi=\rho/\varepsilon_0$; $E=-\nabla\varphi$ then satisfies $\operatorname{div}E=\rho/\varepsilon_0$ and $\operatorname{curl}E=0$, the fixed-time reduced equations of the regime ([[thm-the-curl-of-a-gradient-vanishes]], [[def-em-electrostatic-regime]](c), [[def-laplacian-of-a-c2-function]], [[def-em-fields]], [[def-em-si-conventions]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F3] The conductor model and its vacuum geometry: in the bounded smooth ambient branch $\Omega_v$ is a bounded $C^\infty$ domain whose boundary pieces are $\partial\Omega$ and the conductor surfaces $\partial D_j$, and the model supplies the zero interior field, the connectedness requirement and the potential convention ([[post-em-electrostatic-conductor-model]], [[lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain]]).

[F4] Surface-charge identities: for a model of [F3] whose field has the joint one-sided $C^1$ regularity, $n\cdot E_+=\sigma/\varepsilon_0$, $n\times E_+=0$, and $Q_j=\int_{\partial D_j}\sigma\,dS=\varepsilon_0\int_{\partial D_j}\partial_\nu\varphi\,dS$ with $\nu=-n$ on $\partial D_j$ ([[pthm-em-conductor-surface-charge]], [[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F5] Interface differentiation: for a compact embedded $C^2$ interface $S$ with unit normal $n$ from $\Omega_-$ to $\Omega_+$ and a field $F$ that is $C^1$ on each side with one-sided $C^1$ traces, the distributional identities $\operatorname{div}F=\{\operatorname{div}F\}_{\text{piecewise}}+n\cdot[F]\delta_S$ and $\operatorname{curl}F=\{\operatorname{curl}F\}_{\text{piecewise}}+n\times[F]\delta_S$ hold, where the bracket term is the locally integrable function equal to the classical operator on each side ([[lem-em-interface-derivatives]], [[def-em-surface-distribution]]).

[F6] The adopted distributional Maxwell equations and the jump theorem's identities: under $\mathrm{AC}_\omega$, the weak equations of [[post-em-distributional-vacuum-maxwell]] are exactly the solution predicate of [[def-em-weak-sources]](e), and the stationary-sheet jump theorem gives $n\cdot[E]=\sigma/\varepsilon_0$, $n\times[E]=0$ under its one-sided regularity hypotheses ([[post-em-distributional-vacuum-maxwell]], [[def-em-weak-sources]], [[pthm-em-fixed-vacuum-jumps]]).

[F7] Uniqueness and compatibility: the classical and weak uniqueness and compatibility statements of [[pthm-em-electrostatic-bvp-uniqueness]] hold for bounded smooth vacuum domains with finitely many components, including the componentwise Neumann compatibility and the transmisson uniqueness clause ([[pthm-em-electrostatic-bvp-uniqueness]]).

[F8] A bounded smooth domain, in particular the vacuum region $\Omega_v$ of [F3], has the boundary-chart presentation of [[def-bounded-c-k-domain-and-boundary-charts]] used by the solvability theorem [F1], with the finite boundary atlas and outward normals of that definition ([[def-bounded-c-k-domain-and-boundary-charts]], [[def-classical-normal-derivative]]).


[F9] The chain rule differentiates a composition in a boundary chart ([[thm-chain-rule-for-total-derivatives]]); a constant function has zero differential ([[thm-algebra-of-derivatives]]).

[F10] Smooth functions whose derivatives extend continuously to the closure of a bounded smooth domain have a smooth ambient extension, componentwise for vector fields; this extension preserves all boundary derivatives ([[lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain]]).

## Proof

**Proof technique:** direct.

1.1 Dirichlet branch. By [F8] the bounded smooth domain $\Omega_v$ carries the boundary-chart presentation required by the solvability theorem [F1]. With $\varepsilon:=\varepsilon_0I$, smooth and uniformly positive on $\overline{\Omega_v}$, and smooth $\rho$, [F1](a) gives exactly one $u\in H^1(\Omega_v)$ with trace $g$, $C^\infty$ on $\overline{\Omega_v}$, satisfying $-\operatorname{div}(\varepsilon_0\nabla u)=\rho$ pointwise and $u|_{\partial\Omega_v}=g$; the weak uniqueness in the $H^1$ class with trace $g$ is part of the same clause. Dividing by $\varepsilon_0>0$ gives $-\Delta u=\rho/\varepsilon_0$ and the equation and trace displayed in (a), so $\varphi:=u$ is the asserted solution and it is unique in the stated class by [F7](a) as well. The field $E:=-\nabla\varphi$ is $C^\infty$ on $\overline{\Omega_v}$ and satisfies $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{curl}E=0$ by [F2], which is the fixed-time reading of the pure electrostatic regime with source $\rho$; hence $(E,0)$ realises that regime on the vacuum region. This is (a). [F1, F2, F7, F8]

1.2 Neumann branch. Let $g\in C^\infty(\partial\Omega_v)$ satisfy the componentwise compatibility of (b); with $\varepsilon=\varepsilon_0I$ the conormal datum of [F1](b) is $\varepsilon_0 g$ and its compatibility $\int_{\Omega^{(j)}}\rho+\int_{\partial\Omega^{(j)}}\varepsilon_0g=0$ is exactly the displayed hypothesis, so [F1](b) gives a weak solution, $C^\infty$ on each closed component, unique up to one constant per component and normalised by zero componentwise means; after division by $\varepsilon_0$ the equation is $-\Delta\varphi=\rho/\varepsilon_0$ and the conormal trace is $\partial_\nu\varphi=g$ by the definition of the conormal derivative and the classical normal derivative [F1, F2]. The necessity of the compatibility is [F7](b), whose flux identity gives $\int_{\Omega^{(j)}}\rho+\varepsilon_0\int_{\partial\Omega^{(j)}}g\,dS=0$ for any classical solution. This is (b). [F1, F2, F7]

1.3 Transmission branch. Let the finitely many disjoint closed smooth interfaces $\Gamma$, sheet density $\sigma_\Gamma$ and outer Dirichlet data $g$ be as in (d); with $\varepsilon=\varepsilon_0I$ on each side, piecewise smooth $\rho$ and smooth $\sigma_\Gamma$, [F1](c) gives a globally $H^1$ weak solution with outer Dirichlet data, $C^\infty$ on the closure of each side, equal one-sided traces, unique by [F7](c)(iii), and flux jump $n\cdot[\varepsilon_0\nabla\varphi]=-\sigma_\Gamma$. Since $E=-\nabla\varphi$ on each side, $[\varepsilon_0\nabla\varphi]=\varepsilon_0[\nabla\varphi]=-\varepsilon_0[E]$, so $n\cdot[E]=\sigma_\Gamma/\varepsilon_0$, the sign convention of [F6]; the weak right-hand side is $\int_{\Omega_v}\rho v+\sum_\Gamma\int_\Gamma\sigma_\Gamma\,Tv$ as stated. No dielectric coefficient is introduced because $\varepsilon=\varepsilon_0I$ on every side. This is (d). [F1, F6, F7]

2.1 Conductor reading. Assume the bounded $C^\infty$ ambient branch with outer data $g_0$ and conductor data $V_j$. The boundary of $\Omega_v$ is the disjoint union of the compact boundary pieces $\partial\Omega,\partial D_1,\dots,\partial D_m$ [F3], and the function equal to $g_0$ on $\partial\Omega$ and to the constant $V_j$ on $\partial D_j$ is smooth on each piece, hence admissible in (a) [step 1.1]; let $\varphi$ be the resulting solution and $E=-\nabla\varphi$ on $\Omega_v$, extended by $E:=0$ on the conductor. Then $\varphi$ is continuous on $\overline{\Omega_v}$ with the constant trace $V_j$ on each $\partial D_j$ [F3], and $E$ has the joint one-sided $C^1$ regularity across $S=\partial D$ because $E$ is $C^\infty$ on $\overline{\Omega_v}$, [F10] supplies its smooth ambient extension, and $0$ is smooth on the conductor side. Define $\sigma:=\varepsilon_0\,n\cdot E_+\in C^\infty(\partial D)$ directly; its pairing is a stationary-sheet source [F6]. In every boundary chart $X$, $\varphi\circ X=V_j$, so the chain rule gives $\nabla\varphi_+\cdot\partial_aX=0$ for both tangent directions, hence $n\times E_+=0$. Also $\nu=-n$ on the conductor boundary, so $\partial_\nu\varphi=\nabla\varphi_+\cdot(-n)=n\cdot E_+$ and $Q_j:=\int_{\partial D_j}\sigma\,dS=\varepsilon_0\int_{\partial D_j}\partial_\nu\varphi\,dS$. For the distributional equations: [F5] applied on the compact embedded interface $S$ with $\Omega_-$ the conductor, $\Omega_+$ the vacuum and the normal $n$ from conductor to vacuum gives $\operatorname{div}E=\{\operatorname{div}E\}_{\text{piecewise}}+(n\cdot[E])\delta_S$ and $\operatorname{curl}E=\{\operatorname{curl}E\}_{\text{piecewise}}+(n\times[E])\delta_S$; the piecewise parts are $\rho_v/\varepsilon_0$ on the vacuum side and $0$ on the conductor side, and $[E]=E_+$ with $n\cdot E_+=\sigma/\varepsilon_0$, $n\times E_+=0$ by the preceding chart calculation, so the identities are exactly the adopted distributional vacuum Maxwell equations with the source pair $(\rho_v+\sigma\,\delta_{\partial D},0)$ [F6]. Extending $\varphi$ by $V_j$ on each body gives the continuous model potential. These verified identities establish the conductor model, so [F4] now applies to it and confirms its surface-charge reading without being used to assume the equations just constructed. This is (c). [F3, F4, F5, F6, F9, F10, step 1.1]

3.1 Scope. All existence and regularity statements above are exactly the clauses of [F1] for the smooth bounded domains of the statement, the constant coefficient $\varepsilon_0I$, smooth data and finitely many disjoint smooth interfaces; the conductor clause additionally uses only the bounded smooth ambient branch of [F3] and the constant data there. No nonsmooth boundary, corner, edge, coefficient irregularity, prescribed-total-charge problem, unbounded exterior region without a decay class, dielectric response, measurement, apparatus or empirical claim is asserted; existence of the potential is not asserted to be a physical equilibrium, which is the adopted model of [[post-em-electrostatic-conductor-model]] [F3]. This is (e). [F1, F3] ∎
