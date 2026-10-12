---
id: thm-gr-local-geometric-development
kind: theorem
title: "Local geometric development for a fixed covariant Einstein-matter model with complete constrained data"
status: draft
origin: session
domain: mathematics
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-harmonic-gauge-and-reduced-equations, lem-gr-harmonic-initial-data-construction, thm-gr-reduced-einstein-local-existence, thm-gr-harmonic-constraint-propagation, thm-gr-constraint-equations-in-normal-frame, thm-gr-local-geometric-uniqueness, def-gr-spacelike-initial-data-and-constraints, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-conditions-and-global-hyperbolicity, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, lem-gr-local-cauchy-neighborhood, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-globally-hyperbolic-causal-structure, def-embedded-submanifold-and-slice-chart, def-c-r-and-smooth-maps-between-smooth-manifolds, def-countable-choice, def-dependent-choice, lem-gr-reduced-einstein-principal-part, def-gr-periodic-symmetric-hyperbolic-system, thm-gr-periodic-symmetric-hyperbolic-existence, thm-gr-periodic-symmetric-hyperbolic-smooth-persistence, thm-gr-local-geodesics-and-exponential-map, thm-smooth-inverse-function-theorem-on-manifolds, lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it, lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking, thm-smooth-partitions-of-unity-exist-on-manifolds, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, thm-gronwall-integral-inequality]
dependency_roles:
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  lem-gr-harmonic-initial-data-construction: mathematical-premise
  thm-gr-reduced-einstein-local-existence: mathematical-premise
  thm-gr-harmonic-constraint-propagation: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  thm-gr-local-geometric-uniqueness: mathematical-premise
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  lem-gr-local-cauchy-neighborhood: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-smooth-persistence: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it: mathematical-premise
  lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
sources:
  references:
    - title: "Friedrich and Rendall, The Cauchy Problem for the Einstein Equations, sections 3.1-3.2, 5.1-5.2 and 5.4"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]). Fix $\kappa>0$, $\Lambda\in\mathbb R$ and one covariant matter model: specified smooth fields $\Psi$, equations $\mathcal E(g,\Psi)=0$ and stress expression $\mathcal T(g,\Psi)$. Pullback by local diffeomorphisms commutes with these equations and stress expression. Let $\Sigma$ be a smooth three-manifold without boundary, with smooth Riemannian metric $h$, smooth symmetric tensor $K$ and complete smooth matter Cauchy data $d$. The sign convention is $K(V,W)=g(\nabla_Vn,W)$ for the future unit normal. Initial matter tensors involving normal directions are specified on the abstract bundle $\mathcal V=\mathbb RN\oplus T\Sigma$, with metric $g_0(aN+X,bN+Y)=-ab+h(X,Y)$, rather than on a pre-existing spacetime.

Require the following explicit reduction hypotheses on each sufficiently small relatively compact initial coordinate ball with labels $x^i$, flat comparison metric $\bar g=-(dx^0)^2+\sum_i(dx^i)^2$, and finite variables
$$z=(g_{ab},p_{ab}=\partial_0g_{ab},q_{abi}=\partial_ig_{ab},w).$$

1. There are fixed smooth extraction and reconstruction rules and fixed smooth coefficient functions $A^\mu(x,z),B(x,z)$ on an open state set $O$ giving a system
$$A^0(x,z)\partial_0z+\sum_i A^i(x,z)\partial_iz+B(x,z)=0,$$
with symmetric $A^\mu$ and positive definite $A^0$. Its metric equations are exactly the first-order reduction of the reduced Einstein equations of [[def-gr-harmonic-gauge-and-reduced-equations]], with stress $T=\mathcal T(g,\Psi)$. Every smooth physical solution of this fixed model in harmonic coordinates extracts to this same system. Any internal matter gauge is already fixed with its specified equations and complete data; otherwise state the corresponding internal gauge equivalence in the conclusion.
2. Complete data determine a smooth initial value $w=\mathcal I(h,K,d)$, including all auxiliary variables and their compatibility constraints. The initial metric jet displayed in step 1.1 and this value lie in $O$. The reduction propagates its auxiliary compatibility constraints, so the reconstructed fields solve $\mathcal E(g,\Psi)=0$ on the reduced solution, before imposing $H=0$ or the unreduced Einstein equations. The initial reconstruction induces exactly $d$ and the specified initial stress.
3. Whenever the reconstructed metric and fields satisfy those matter equations, their stress obeys $\nabla^a\mathcal T(g,\Psi)_{ab}=0$, independently of the unreduced Einstein equations. In particular this applies to the reduced solution furnished by clause 2. This is stronger than conservation asserted only after the full coupled equations have been proved.

These are concrete PDE, initialization and reconstruction hypotheses; they do not assume existence or geometric uniqueness. Require the constraints of [[thm-gr-constraint-equations-in-normal-frame]] for the stress determined by $(h,K,d)$:
$$S_h+(\operatorname{tr}_hK)^2-|K|_h^2=2\Lambda+2\kappa T_0(N,N),\qquad \operatorname{div}_hK-d\operatorname{tr}_hK=\kappa T_0(N,\cdot).$$

Then the data have a smooth time-oriented local development $(g,\Psi)$ on an open variable-width neighborhood of $\{0\}\times\Sigma$ in the literal manifold $\mathbb R\times\Sigma$, with induced data $(h,K,d)$, solving
$$G(g)+\Lambda g=\kappa\mathcal T(g,\Psi),\qquad\mathcal E(g,\Psi)=0.$$
After restriction to a smaller collar, $\Sigma$ lies in the interior of its intrinsic domain of dependence. The interior of that domain is a globally hyperbolic neighborhood with $\Sigma$ Cauchy. Any two developments of this same model and these complete data are related near the entire initial surface by a data-fixing time-orientation-preserving isometry matching all matter fields. There is no uniform noncompact time width or global-in-time conclusion.

## Facts & Assumptions

**Given:** the choice assumptions, fixed covariant model, three explicit reduction hypotheses, and complete constrained smooth data in the Statement.

[L1] The metric wave reduction is [[lem-gr-reduced-einstein-principal-part]]. The actual compact-state periodic existence and smoothness suppliers are [[def-gr-periodic-symmetric-hyperbolic-system]], [[thm-gr-periodic-symmetric-hyperbolic-existence]] and [[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]].

[L2] With conserved stress on a reduced solution, vanishing initial $H$ and the normal constraint residuals give zero normal derivative of $H$, and the homogeneous subsidiary wave equation forces $H=0$ and the full Einstein equations ([[thm-gr-harmonic-constraint-propagation]], [[thm-gr-constraint-equations-in-normal-frame]]).

[L3] For the same fixed model, complete initialization and coefficient family as here, physical wave-coordinate comparison gives local geometric uniqueness; future isometries fixing the initial patch agree as germs by preservation of its normal geodesics ([[thm-gr-local-geometric-uniqueness]]). Normal geodesic maps and the inverse function theorem are [[thm-gr-local-geodesics-and-exponential-map]] and [[thm-smooth-inverse-function-theorem-on-manifolds]].

[L4] Countable relatively compact coordinate refinements, locally finite shrinkings and smooth subordinate partitions are [[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]], [[lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]] and [[thm-smooth-partitions-of-unity-exist-on-manifolds]].

[L5] The local cone-energy estimate uses [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]] and [[thm-gronwall-integral-inequality]]. A smooth embedded spacelike surface has an intrinsic variable-width temporal collar, whose interior domain of dependence has that surface Cauchy and is globally hyperbolic ([[lem-gr-local-cauchy-neighborhood]] clause (d)).

## Proof

1.1 (Complete harmonic initial value.) On a small initial coordinate ball set $g_{00}=-1$, $g_{0i}=0$, $g_{ij}=h_{ij}$, $p_{ij}=2K_{ij}$ and $q_{abi}=\partial_i g^0_{ab}$. For the flat comparison metric the Christoffel contraction at the surface is $$H^0=\tfrac12p_{00}+\operatorname{tr}_hK,\qquad H^\ell=-h^{\ell i}p_{0i}+h^{jk}\Gamma(h)^\ell{}_{jk}.$$ Thus prescribe $p_{00}=-2\operatorname{tr}_hK$ and $p_{0i}=h_{i\ell}h^{jk}\Gamma(h)^\ell{}_{jk}$, giving $H=0$ initially. The spatial derivative definitions and the initialization $w=\mathcal I(h,K,d)$ supply every remaining initial value and every auxiliary compatibility constraint. In this coordinate gauge $\partial_0=n$ initially, so $K_{ij}=\tfrac12p_{ij}$ and the reconstructed matter data are exactly $d$. The generally nonzero $p_{0i}$ is essential for the flat comparison metric; the special background $-dt^2+h$ instead gives $p_{0i}=0$. [given, L1, algebra]

2.1 (Local coupled reduced existence.) Shrink about each initial point so the initial state values lie in a compact ball strictly inside a convex admissible state ball $O_*\Subset O$. Extend the smooth data to a torus by a spatial cutoff interpolating to a fixed value in $O_*$; convexity keeps all interpolated values admissible. On a smaller initial cylinder extend the coefficient functions by a smooth spatial cutoff, keeping the original functions on the smaller patch and interpolating $A^0$ to the identity, $A^i$ to zero and $B$ to zero outside the larger patch. Symmetry persists and the convex positive-matrix cone preserves positivity. Choose compact sets $C\subset\operatorname{int}C'\Subset O_*$ containing the extended data and a finite $H^s$ norm bound $R$ for one integer $s\ge5$. On the compact time, spatial and state ranges the coefficient derivatives are bounded and $A^0\ge aI$ for some $a>0$. These are the actual hypotheses of [L1]; the periodic existence and smooth persistence theorems give a smooth solution on a nonzero interval. Restrict to the original patch, where it solves the original coupled system. No theorem for a prescribed spacetime tensor $T$ has been substituted for this coupled existence argument. [step 1.1, given, L1, construct]

3.1 (Removal of extensions.) For two smooth solutions of systems agreeing near a smaller initial cone, subtract their equations and put $v=z_1-z_2$. On a smaller compact cylinder their states lie in a common convex admissible compact neighborhood. The coefficient mean-value formula gives $$A^\mu(x,z_1)\partial_\mu v+C(x)v=0,$$ where $C$ includes the bounded terms obtained from coefficient differences multiplying $\partial_\mu z_2$ and from the source difference. Let $b=\sup_{|\xi|=1}\|\sum_i\xi_iA^i(x,z_1)\|$ there and choose $\lambda>b/a$. On the shrinking ball of radius $r-\lambda t$, [L5] gives $$\frac{d}{dt}\int_{B_{r-\lambda t}}v^{\mathsf T}A^0v\le c\int_{B_{r-\lambda t}}v^{\mathsf T}A^0v-\int_{\partial B_{r-\lambda t}}v^{\mathsf T}(\lambda A^0+\nu_iA^i)v\le c\int_{B_{r-\lambda t}}v^{\mathsf T}A^0v.$$ The boundary matrix is positive since $\lambda a>b$. Equal initial values give zero energy by Gronwall. Reverse time for the other half. This proves independence of the extensions on an actual open initial neighborhood, with the combined spatial-symbol bound rather than an incorrect bound on each separate $A^i$. [step 2.1, L5, algebra]

3.2 (Recovery without circularity.) By hypothesis 2, the auxiliary constraints propagate and the reconstructed reduced solution solves the original matter equations, giving the exact initial stress and data. Hypothesis 3 therefore gives $\nabla^aT_{ab}=0$ on this reduced solution before Einstein recovery. Its initial geometric jet gives $H=0$ by step 1.1 and the Gauss-Codazzi constraint equations give $E(n,n)=E(n,e_i)=0$. On a reduced solution one has $E_{ab}=\tfrac12(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla_cH^c)$; since tangential derivatives of $H$ vanish initially, this reads $E_{00}=\tfrac12\nabla_0H_0$ and $E_{0i}=\tfrac12\nabla_0H_i$ in the initial orthogonal frame. Thus $\nabla_nH=0$ initially. Conservation gives the homogeneous subsidiary equation and [L2] forces $H=0$, hence $E=0$, on a smaller neighborhood. The local solution is now a full physical development. [step 1.1, step 2.1, given, L2, algebra]

4.1 (Common normal collar representatives.) For each local full development define $E_i(s,p)=\exp_{j_i(p)}(sn_i(p))$. Its differential at $(0,p)$ is $(c,V)\mapsto cn_i+dj_i(V)$, an isomorphism. The inverse function theorem [L3] gives, after local shrinking, an injective normal collar over a smaller initial ball. Pull its metric and matter fields back to its normal domain in $\mathbb R\times\Sigma$. If two initial balls intersect, [L3] gives a future data-fixing isometry germ on the intersection. Its differential is the identity on the slice tangent directions and sends $n_i$ to $n_j$ by uniqueness of the future unit normal. Preservation and uniqueness of affinely parametrized geodesics give $$\Phi(E_i(s,p))=E_j(s,p)$$ for every sufficiently small segment staying in its domain. Consequently the two pulled-back full fields agree on an open neighborhood of the zero section over the intersection. This uses uniqueness of isometry germs and normal parametrization; fixing the slice alone does not make a general map the identity off it. No geometric uniqueness is used to create the reduced solution or to propagate its constraints. [step 3.2, L3, construct]

5.1 (Locally finite literal patching.) Choose [L4]'s countable locally finite shrinking $\overline{W_i}=K_i\subset V_i\subset\overline{V_i}\subset O_i$, with $O_i$ normal-collar existence patches from step 4.1 and $K_i$ compact. Each $K_i$ meets only finitely many $K_j$, since $(V_j)$ is locally finite and $K_j\subset V_j$. Compactness supplies $t_i>0$ for which the $i$th normal representative exists on $(-t_i,t_i)\times K_i$. On each nonempty compact $K_i\cap K_j$, step 4.1 supplies an open equality neighborhood; a finite subcover gives a symmetric width $t_{ij}=t_{ji}>0$ on which the representatives agree over that compact intersection. Countable Choice selects widths for the countably many indices and pairs. Set $$\delta_i=\tfrac12\min\bigl(\{t_i\}\cup\{t_{ij}:K_i\cap K_j\ne\varnothing\}\bigr)>0.$$ The minimum is finite. The normal representatives agree on every overlap of $(-\delta_i,\delta_i)\times W_i$ and so define single smooth tensor fields on their literal open union $\Omega\subset\mathbb R\times\Sigma$. Ordinary equality supplies the triple-overlap cocycle, with no quotient construction or Hausdorffness issue. For a subordinate locally finite partition $(\rho_i)$ set $\alpha(p)=\tfrac12\sum_i\delta_i\rho_i(p)>0$. At each point the finite weighted average is at most the largest active width, whose $W_i$ contains that point; hence $\{|s|<\alpha(p)\}\subset\Omega$. Restriction gives a smooth positive variable-width collar and the exact full data. No positive uniform lower bound is required. [step 4.1, L4, given, construct]

6.1 (Causal neighborhood and uniqueness.) Apply [L5]'s generic embedded-spacelike clause to the surface $\{0\}\times\Sigma$ in this glued development. It furnishes a further temporal variable-width collar $U$ and an open set $W=\operatorname{int}_U(D^+_U(\Sigma)\cup D^-_U(\Sigma))$ containing the entire initial surface, where $\Sigma$ is Cauchy and $W$ is globally hyperbolic. The domains are intrinsic to $U$; no assertion that the one-sided domain itself is open is needed. Finally the fixed model, same reconstruction and complete data meet all hypotheses of [L3]'s uniqueness theorem. Two full developments are therefore isometric near the whole initial surface, matching all matter fields and future orientation. These are the asserted existence, causal and uniqueness conclusions. [step 5.1, given, L3, L5] ∎

## Remarks

Vacuum is the empty matter-variable instance. A fixed scalar model uses complete data $(\varphi_0,\pi_0)$, a fixed smooth potential and a fixed stress normalization; no potential or mass sign restriction enters local construction. A fixed strict barotropic model uses complete density and arbitrary smooth subluminal tilt, with $\epsilon+p>0$ and $0<p'(\epsilon)<1$ on an open interval. Each must verify initialization and reduced equivalence, not only symbol positivity. The separately proved tilted nonnegative dust theorem uses its actual flow/frame reduction and is not an instance of this harmonic-metric hypothesis unless that additional reduction has independently been proved. It retains prescribed geodesic velocity through empty regions.
