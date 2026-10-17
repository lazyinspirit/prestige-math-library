---
id: thm-emg-local-classical-charged-scalar-development
kind: theorem
title: "Local classical Einstein–Maxwell–charged-scalar development"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 7
proof_strategy: direct
deps:
  - def-emg-trivial-potential-charged-scalar-system
  - lem-emg-temporal-scalar-positive-symmetric-reduction
  - lem-emg-charged-scalar-subsidiary-chain
  - def-emg-periodic-high-sobolev-state
  - thm-emg-symmetric-hyperbolic-research-supplier
  - lem-emg-fixed-smooth-background-harmonic-data
  - lem-emg-fieldstrength-positive-symmetric-reduction
  - lem-emg-coupled-reduced-einstein-evolution
  - thm-gr-local-geometric-development
  - thm-gr-constraint-equations-in-normal-frame
  - def-gr-harmonic-gauge-and-reduced-equations
  - def-gr-periodic-symmetric-hyperbolic-system
  - lem-gr-reduced-einstein-principal-part
  - lem-gr-periodic-sobolev-embedding
  - def-countable-choice
  - def-dependent-choice
  - lem-gr-periodic-sobolev-algebra
dependency_roles:
  def-emg-trivial-potential-charged-scalar-system: mathematical-premise
  lem-emg-temporal-scalar-positive-symmetric-reduction: mathematical-premise
  lem-emg-charged-scalar-subsidiary-chain: mathematical-premise
  def-emg-periodic-high-sobolev-state: mathematical-premise
  thm-emg-symmetric-hyperbolic-research-supplier: mathematical-premise
  lem-emg-fixed-smooth-background-harmonic-data: mathematical-premise
  lem-emg-fieldstrength-positive-symmetric-reduction: mathematical-premise
  lem-emg-coupled-reduced-einstein-evolution: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  lem-gr-periodic-sobolev-algebra: mathematical-premise
sources:
  references:
    - title: "Helmut Friedrich and Alan Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), complete arXiv text"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "Complete 97-page PDF; §§2.4, 3.1 and 5.1, PDF pp. 12–16, 21–31 and 80–83: harmonic reduction, symmetric-hyperbolic local Cauchy theory, and conditional matter coupling. The charged blocks, constraints and subsidiary identities are checked locally here."
    - title: "Mathieu Colin and Tatsuya Watanabe, Cauchy problem for the nonlinear Klein–Gordon equation coupled with the Maxwell equation, Journal of Mathematical Analysis and Applications 443 (2016), full author-hosted PDF"
      url: "https://www.math.u-bordeaux.fr/~mcolin/cauchy_maxKG.pdf"
      locator: "Complete 23-page PDF; §§2 and 4.1–4.2, PDF pp. 3–20: charged-scalar current conventions and a flat-space Coulomb-gauge Cauchy comparison. Its elliptic scalar potential and fixed-background solution are not substituted for this coupled Einstein proof."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, §§4.5.1–4.5.3"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Complete 290-page PDF; §§4.5.1–4.5.3, PDF pp. 187–193 (printed pp. 181–186): curved scalar action, Hilbert tensor and Maxwell tensor conventions. The charged conventions and all local PDE claims are proved or used conditionally here."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ and Dependent Choice $\mathrm{DC}$ ([[def-countable-choice]], [[def-dependent-choice]]). Fix an integer $s\ge5$, constants $c>0$, $G_N>0$, $\mu_0>0$, $K_\varphi>0$, $\lambda,\Lambda\in\mathbb R$, and a real $V\in C^\infty(\mathcal U)$ on an open $\mathcal U\subseteq\mathbb R$ containing the attained values of $|\varphi|^2$. Use the system and units of [[def-emg-trivial-potential-charged-scalar-system]].

For the periodic Cauchy result let $\Sigma=\mathbb T^3_{2\pi}$ and prescribe smooth data $h\in\Gamma(S^2T^*\Sigma)$ positive definite, $K\in\Gamma(S^2T^*\Sigma)$, $e,b\in\Gamma(T\Sigma)$, $A_\Sigma\in\Omega^1(\Sigma)$, $\varphi_0\in C^\infty(\Sigma;\mathbb C)$, and an independent scalar normal derivative $\pi_n\in C^\infty(\Sigma;\mathbb C)$. Let $n$ be the future unit normal and let $(\mathfrak e_1,\mathfrak e_2,\mathfrak e_3)$ be any positively oriented $h$-orthonormal spatial frame. The associated initial two-form $F_\Sigma$ is defined invariantly by

$$F_\Sigma(X,n)=h(e,X),\qquad F_\Sigma(X,Y)=\mathrm{vol}_h(b,X,Y)\quad(X,Y\in T\Sigma).$$

Thus, writing $e_i=h(e,\mathfrak e_i)$ and $b_i=h(b,\mathfrak e_i)$, its frame components are $F_\Sigma(\mathfrak e_i,n)=e_i$ and $F_\Sigma(\mathfrak e_i,\mathfrak e_j)=\epsilon_{ijk}b_k$, with $\epsilon_{123}=+1$. Require $F_\Sigma=d_\Sigma A_\Sigma$, $\pi_i=(D_i\varphi_0)=\partial_i\varphi_0-i\lambda A_{\Sigma,i}\varphi_0$, and $A(n)=0$. Fix a smooth positive reference metric $\gamma$ and the product comparison metric $\bar g=-(dx^0)^2+\gamma$ near the initial slice. The harmonic-gauge vector is $H^a:=g^{bc}(\Gamma(g)^a{}_{bc}-\Gamma(\bar g)^a{}_{bc})$; use the initial jet from [[lem-emg-fixed-smooth-background-harmonic-data]]:

$$g_{ij}=h_{ij},\quad g_{00}=-1,\quad g_{0i}=0,\quad \partial_0g_{ij}=2K_{ij},\quad \partial_0g_{00}=-2\operatorname{tr}_hK,\quad \partial_0g_{0i}=h_{ij}h^{k\ell}(\Gamma(h)^j{}_{k\ell}-\Gamma(\gamma)^j{}_{k\ell}).$$

Let $D$ be the Levi–Civita derivative of $h$, $\tau=\operatorname{tr}_hK$, and $T=T^{\mathrm{EM}}+T^\varphi$ be evaluated on the complete initial data. Define $j^0:=-n_aj^a$ in the normal frame and assume the sourced Maxwell and total-stress Einstein constraints

$$D_i b^i=0,\qquad D_i e^i=\mu_0j^0,\qquad R(h)+\tau^2-|K|_h^2=2\Lambda+2\kappa T(n,n),\qquad D^jK_{ji}-D_i\tau=\kappa T(n,\mathfrak e_i),$$

where $\kappa=8\pi G_N/c^4$ and $K(X,Y)=g(\nabla_Xn,Y)$. On the reduced coordinate domain require $g^{00}<0$ and the inverse spatial block $(g^{ij})$ to be positive definite. The real first-order state consists of the metric variables $(g_{ab},p_{ab},q_{abi})$ relative to a fixed smooth background, the six Maxwell variables $(e_i,b_i)$, the three potential components $A_i$, and the real and imaginary parts of $\varphi,\pi_0,\pi_i$. For fixed reference scales $L_0>0$ metres and $F_0>0$ tesla, scale each first metric derivative and each $\pi_a$ by $L_0$, each $e_i,b_i$ by $F_0$, and each $A_i$ by $L_0F_0$; $g_{ab}$ and $\varphi$ are already dimensionless. These fixed invertible rescalings make the componentwise real Sobolev state dimensionless and add no equations. Let $u_0$ be the resulting state in the sense of [[def-emg-periodic-high-sobolev-state]], and suppose its continuous range is a compact $K_0$ contained in the interior of a compact $K_1$ inside an open admissible state set $O$, with $\|u_0\|_{H^s}\le R$ and $R\ge0$. The coefficient maps are smooth on $O$, the potential range lies in $\mathcal U$, and the combined time matrix is positive definite throughout $O$.

Then there is $T_*>0$ and a local solution on $(-T_*,T_*)\times\mathbb T^3_{2\pi}$ of the full Einstein, sourced Maxwell, and classical charged-scalar equations. Its first-order metric and matter state has the $L^\infty H^s\cap C H^{s-1}$ regularity of [[thm-emg-symmetric-hyperbolic-research-supplier]]; the metric satisfies $g\in L^\infty H^{s+1}\cap C H^s$ and $\partial_0g\in L^\infty H^s\cap C H^{s-1}$, while $F,\pi,A_i\in L^\infty H^s\cap C H^{s-1}$ and $\varphi\in L^\infty H^{s+1}\cap C H^s$. The constraints and first-order metric, scalar, and potential compatibility conditions propagate. Smooth data give a smooth development on the same local interval.

More generally, let $\Sigma$ be any smooth oriented three-manifold without boundary. Prescribe smooth $h$ positive definite, symmetric $K$, spatial vector fields $e,b$, a global one-form $A_\Sigma$, a complex scalar $\varphi_0$, and its independent normal derivative $\pi_n$. Define $F_\Sigma$ by the same $h,e,b$ convention in local positively oriented orthonormal frames, without requiring a global frame. Require $F_\Sigma=d_\Sigma A_\Sigma$, $\pi_i=D_i\varphi_0$, $A(n)=0$, and the sourced Maxwell and total-stress Einstein constraints displayed above at every point of $\Sigma$. Restrict to neighborhoods where $|\varphi|^2\in\mathcal U$. Then the data have a smooth local development near each initial point. Any two developments of this same fixed model and complete data are related near the initial surface by a data-fixing, time-orientation-preserving isometry and a global-potential gauge transformation

$$A\mapsto A+d\chi,\qquad \varphi\mapsto e^{i\lambda\chi}\varphi,$$

for a smooth real $\chi$ with $\chi=0$ on the initial surface; under the formal units of [[def-emg-trivial-potential-charged-scalar-system]], $[\chi]=\mathrm{Wb}$ so $\lambda\chi$ is dimensionless. No nontrivial bundle sector, singular source, global-in-time existence, uniform noncompact time width, or geodesic completeness is asserted.

## Facts & Assumptions

**Given:** The parameters, smooth potential, periodic or general complete data, and compatibility, constraint, and admissible-state hypotheses in the Statement.

[F1] [[def-emg-trivial-potential-charged-scalar-system]] defines the global real-potential system, exact $F=dA$, charged derivative, current, scalar stress, and Maxwell stress; this is a mathematical system, not a physical postulate.

[L1] [[def-emg-periodic-high-sobolev-state]] defines the real componentwise periodic $H^s$ state class $\mathcal S_s(K,R)$ using the Fourier conventions and $\mathrm{AC}_\omega$. Its current carrier is a draft with verification precheck pending; only its stated function-space interface is used.

[L2] [[def-gr-periodic-symmetric-hyperbolic-system]] defines a smooth periodic first-order coefficient family with real symmetric matrices and positive time matrix. Its current published carrier has verification precheck pending.

[L3] [[thm-emg-symmetric-hyperbolic-research-supplier]] gives conditional common-time $H^s$ existence, uniqueness, $H^{s-1}$ stability and smooth persistence for a coefficient family already shown to meet [L2]. Its current carrier is a draft with precheck pending; it does not verify our blocks.

[L4] [[lem-emg-fixed-smooth-background-harmonic-data]] gives the displayed periodic initial metric jet and $H=0$ for a fixed smooth $\gamma$. Its current carrier is a draft with precheck pending.

[L5] [[lem-emg-fieldstrength-positive-symmetric-reduction]] supplies the symmetric Maxwell field-strength principal block; [[lem-emg-coupled-reduced-einstein-evolution]] supplies the harmonic metric block with algebraic stress coupling. Both assigned suppliers are drafts with precheck pending; their exact blocks are used conditionally.

[L6] [[lem-emg-temporal-scalar-positive-symmetric-reduction]] gives the charged scalar block with positive time matrix $\operatorname{diag}(-g^{00},(g^{ij}))$. It is an assigned draft whose proof acceptance remains unresolved.

[L7] [[lem-emg-charged-scalar-subsidiary-chain]] propagates the metric derivative, scalar, potential, Maxwell, and Einstein-gauge constraints and establishes total-stress conservation before Einstein recovery. It is an assigned draft with unresolved dependencies; this application is conditional on its exact statement.

[L8] [[def-gr-harmonic-gauge-and-reduced-equations]] gives the trace-reversed reduced equation and harmonic vector. [[lem-gr-reduced-einstein-principal-part]] states that a smooth algebraic stress map leaves the metric principal matrices unchanged. Both current published carriers have verification precheck pending.

[L9] [[lem-gr-periodic-sobolev-embedding]] gives $H^s\hookrightarrow C^m$ when $s-m>3/2$, and [[lem-gr-periodic-sobolev-algebra]] gives $H^s$ product control for $s\ge4$. The former is published with precheck pending; the latter is published with precheck pass but has no current audited or verified marker. Both are used conditionally.

[L10] [[thm-gr-constraint-equations-in-normal-frame]] gives the stated normal Einstein projections for $K(X,Y)=g(\nabla_Xn,Y)$. Its published carrier has verification precheck pending.

[L11] [[thm-gr-local-geometric-development]] gives a conditional local-development and data-fixing uniqueness result for complete constrained data of a fixed covariant model whose exact first-order reduction propagates all auxiliaries and whose total stress is conserved before Einstein recovery. It assumes $\mathrm{AC}_\omega$ and $\mathrm{DC}$. Its published carrier has verification precheck pending and no current audited or verified marker.

[A1] The periodic state has finite real dimension after splitting complex variables into real and imaginary parts. The admissible open set is chosen so the metric inequalities hold, $|\varphi|^2\in\mathcal U$, and all coefficient maps are smooth with a positive time matrix. No full Axiom of Choice or empirical premise is assumed.

## Proof

**Proof technique:** verify the complete coupled principal block, apply the stated local Sobolev solver conditionally, recover the covariant equations by the subsidiary lemma, then apply the exact generic geometric-development interface to general smooth data.

1.1 The prescribed normal/tangential two-form components determine the unique real two-form on $\mathbb R n\oplus T\Sigma$: $F(n,\mathfrak e_i)=-e_i$ and $F(\mathfrak e_i,\mathfrak e_j)=\epsilon_{ijk}b_k$. Exactness $F_\Sigma=d_\Sigma A_\Sigma$ and $\pi_i=D_i\varphi_0$, together with $\pi_0=\pi_n$ in the initial temporal gauge, make all field and potential entries compatible. The jet in [L4] makes the harmonic vector initially zero. After the fixed invertible rescalings, every component is real and belongs to the stipulated $H^s$ class; the compact range lies in $K_0\Subset K_1\Subset O$. [given, F1, L1, L4, A1, construct]

1.2 On $O$, the metric block has the positive time matrix $\operatorname{diag}(I,-g^{00}I,(g^{ij})I)$ from [L5] and [L8]; the total stress is algebraic in $(g,F,\varphi,\pi)$, so the scalar contribution changes only zero-order terms. The Maxwell block has time matrix $\alpha^{-1}I_6$ and symmetric spatial matrices by [L5]; the sourced current is algebraic in $(g,\varphi,\pi)$ and hence is lower order. The charged scalar block has time matrix $\operatorname{diag}(-g^{00},(g^{ij}))$ on each real and imaginary part by [L6]. The $\varphi$ and $A_i$ transport equations add identity time blocks and zero spatial blocks. These blocks have no off-diagonal derivative couplings, so their direct sum is symmetric with positive time matrix. All coefficient maps are smooth on $O$ by smooth inversion of $g$, smoothness of $V$, and the stipulated open range. [given, F1, L2, L5, L6, L8, A1, algebra]

2.1 Apply [L3] to this verified coefficient family, the state $u_0\in\mathcal S_s(K_0,R)$, and compact sets $K_0\Subset K_1\Subset O$. Conditional on the current draft solver statement, this gives the common interval, values in $K_1$, $L^\infty H^s\cap C H^{s-1}$ state regularity, uniqueness and stability, and smooth persistence for smooth initial data. It asserts only a solution to the reduced first-order system at this step. [given, L1, L2, L3, step 1.1, step 1.2]

3.1 The initial metric, scalar, potential, and Maxwell compatibilities and all Gauss and Einstein constraints are exactly those of [L7]. Applying that conditional subsidiary result recovers $p=\bar\nabla_0g$, $q_i=\bar\nabla_i g$, $\pi=D\varphi$, $F=dA$, both sourced Maxwell equations, total-stress conservation before Einstein recovery, and $H=0$. Therefore the reduced solution is a full solution of the mathematical system in [F1]. [given, F1, L4, L7, step 2.1]

4.1 Since $q_i=\partial_i g$ up to the fixed smooth background connection, the periodic Fourier norm identity gives $\|g\|_{H^{s+1}}\asymp\|g\|_{H^s}+\sum_i\|\partial_i g\|_{H^s}$; similarly $p=\bar\nabla_0g$ gives the stated time-derivative regularity. From $\pi_i=D_i\varphi$, one has $\partial_i\varphi=\pi_i+i\lambda A_i\varphi$. The $H^s$ algebra estimate in [L9] makes $A_i\varphi\in L^\infty H^s$, and the same estimate in $C H^{s-1}$ gives continuity of the spatial derivatives. The Fourier norm identity $\|f\|_{H^{r+1}}\asymp\|f\|_{H^r}+\sum_i\|\partial_i f\|_{H^r}$ then gives $\varphi\in L^\infty H^{s+1}\cap C H^s$. The field-strength, potential, and $\pi$ regularities are the corresponding components of the reduced state. The embedding in [L9] supplies the classical derivatives needed by the equations at $s\ge5$. [given, L7, L9, step 2.1, step 3.1, algebra]

4.2 For general smooth $\Sigma$, regard $\Psi=(A,\operatorname{Re}\varphi,\operatorname{Im}\varphi)$ as the fixed covariant matter fields; $F=dA$, $\pi=D\varphi$, $j$, and $T$ are the fixed equations and tensorial expressions of [F1]. On each relatively compact initial chart choose a flat comparison metric $\bar g=-(dx^0)^2+\delta_{ij}dx^i dx^j$, set $g_{ij}=h_{ij}$, $g_{00}=-1$, $g_{0i}=0$, $\partial_0g_{ij}=2K_{ij}$, $\partial_0g_{00}=-2\tau$, and $\partial_0g_{0i}=h_{ij}h^{k\ell}\Gamma(h)^j{}_{k\ell}$. The Christoffel formula gives $H^0=\tfrac12\partial_0g_{00}+\tau=0$ and $H^i=-h^{ij}\partial_0g_{0j}+h^{k\ell}\Gamma(h)^i{}_{k\ell}=0$ initially. Set $q_{abi}=\bar\nabla_i g_{ab}$, $p_{ab}=\bar\nabla_0g_{ab}$, reconstruct $F$ from $(e,b)$, and use $\pi_i=D_i\varphi_0$, $\pi_0=\pi_n$, and $A_0=0$. Thus the complete data and all initial auxiliary constraints are specified; $A(n)=0$ fixes the initial temporal gauge. The equations and stress are covariant under local diffeomorphisms because $d$, the metric connection, contractions, and the oriented volume form commute with pullback. Steps 1.2 and 3.1 give the exact smooth symmetric-hyperbolic reduction, propagation of every auxiliary constraint, recovery of the matter equations, and $\nabla^aT_{ab}=0$ before Einstein recovery. The initial constraints are precisely the normal projections in [L10]. These are the explicit reduction, initialization, conservation, and constraint hypotheses of [L11], so its conditional theorem gives a local development near each initial point. [given, F1, L5, L6, L7, L8, L10, L11, step 1.2, step 3.1, A1]

5.1 Apply the data-fixing geometric uniqueness clause of [L11] to the fixed covariant model and complete data; the periodic torus is included as a smooth three-manifold without boundary. After pulling one development back by the resulting isometry, if an internal gauge change is needed to compare the chosen representatives and its temporal component is $A'_0$, define on the product collar $\chi(s,x):=-\int_0^s A'_0(\sigma,x)\,d\sigma$. This is smooth, vanishes on $\Sigma$, and makes $A'_0+\partial_s\chi=0$. Under $A'\mapsto A'+d\chi$ and $\varphi'\mapsto e^{i\lambda\chi}\varphi'$, direct differentiation gives $D'\varphi'\mapsto e^{i\lambda\chi}D'\varphi'$ and $F'=dA'$ is unchanged; hence the current, both stress tensors, and all equations are invariant. Since $\chi|_\Sigma=0$, the tangential initial potential, scalar, and covariant normal derivative are unchanged. Thus [L11]'s matching of the complete data yields the stated local isometry and, when needed, the displayed global-potential gauge equivalence; no periodic solver uniqueness is being applied to nonperiodic data. [given, F1, L11, step 4.2, algebra] ∎
