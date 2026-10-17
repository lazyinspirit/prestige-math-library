---
id: thm-tgr-smooth-null-area
kind: theorem
title: Null focusing and a restricted smooth future area theorem
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-tgr-horizon-screen-family
  - lem-tgr-null-screen-quotient-positive
  - def-gr-smooth-lorentzian-objects
  - def-gr-metric-selected-connection
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-curvature-tensoriality-and-coordinate-formula
  - thm-gr-local-geodesics-and-exponential-map
  - thm-smooth-inverse-function-theorem-on-manifolds
  - def-embedded-submanifold-and-slice-chart
  - def-riemannian-volume-density
  - def-integral-of-a-compactly-supported-smooth-density
  - thm-density-integration-is-defined-without-an-orientation
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - lem-em-parameter-integrals
  - cor-mean-value-theorem
  - def-countable-choice
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
dependency_roles:
  def-tgr-horizon-screen-family: mathematical-premise
  lem-tgr-null-screen-quotient-positive: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-riemannian-volume-density: mathematical-premise
  def-integral-of-a-compactly-supported-smooth-density: mathematical-premise
  thm-density-integration-is-defined-without-an-orientation: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.148)–(7.156), printed pp. 215–216 (PDF pp. 221–222), for the Kerr area and classical mechanics context; the local theorem uses its own explicit smooth-congruence hypotheses."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: "Section 2, PDF pp. 3–5, on null generators, the Raychaudhuri focusing implication and the global predictability hypotheses in the event-horizon area theorem."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 4, equations (4.1)–(4.2), printed pp. 20–21 (PDF pp. 21–22), on horizon area and the separate KN thermodynamic analogy; no source proof is used."
verification:
  precheck: pending
---

## Statement

Let $(\mathcal M,g,N)$, a smooth null hypersurface $H\subset\mathcal M$, its smooth affine future null generator field $k$, screen metric $\bar g$, screen deformation form $B$, expansion $\theta$, and shear $\sigma$ be as in [[def-tgr-horizon-screen-family]]. Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the smooth manifold structures, partition of unity and intrinsic density integrals used below. Let $S_0\subset H$ be a compact smooth embedded spacelike two-dimensional submanifold transverse to $k$, and let $\lambda_0\in\mathbb R$. Suppose there is a smooth map
$$\Phi:[\lambda_0,\infty)\times S_0\to H$$
such that $\Phi(\lambda_0,x)=x$, $\partial_\lambda\Phi(\lambda,x)=k_{\Phi(\lambda,x)}$, and, for each $\lambda\ge\lambda_0$, $\Phi_\lambda:=\Phi(\lambda,\cdot)$ is an embedding with compact spacelike image $S_\lambda$. Thus the same affine parameter runs along each generator for all future values, and the smooth embedded cross-sections persist for the entire half-line. Assume also
$$\operatorname{Ric}_{\Phi(\lambda,x)}(k,k)\ge0\qquad(\lambda\ge\lambda_0,\ x\in S_0).$$
Then $\theta\ge0$ everywhere on every $S_\lambda$. Let $q_\lambda:=\Phi_\lambda^*g$ be the induced Riemannian metric on $S_0$, let $\mu_{q_\lambda}$ be its Riemannian volume density, and define
$$A(\lambda):=\int_{S_0}\mu_{q_\lambda}=\int_{S_\lambda}\mu_{g|_{S_\lambda}},$$
where the second equality is the density change-of-variables formula for the embedding $\Phi_\lambda$. Then for every $\lambda>\lambda_0$,
$$A'(\lambda)=\int_{S_0}\theta(\Phi(\lambda,x))\,\mu_{q_\lambda}(x)=\int_{S_\lambda}\theta\,dA\ge0,$$
and $A(\lambda_2)\ge A(\lambda_1)$ whenever $\lambda_2\ge\lambda_1\ge\lambda_0$.

This is a conditional theorem about a complete smooth affine null congruence with persistent embedded cuts. It does not assert area monotonicity for an arbitrary null surface or an event-horizon theorem.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]); a time-oriented smooth Lorentzian four-manifold $(\mathcal M,g,N)$ with metric-selected connection $\nabla$; a smooth embedded null hypersurface $H$; a smooth nowhere-zero future null field $k$ with $\nabla_k k=0$; a compact spacelike cut $S_0$; its future flow $\Phi$ and embedded spacelike images $S_\lambda$ for all $\lambda\ge\lambda_0$; and $\operatorname{Ric}(k,k)\ge0$ on those images.

[F1] [[def-tgr-horizon-screen-family]] defines a null hypersurface by its one-dimensional radical, defines the screen $\mathcal S=k^\perp/\mathbb Rk$ with its metric $\bar g$, defines $B([X],[Y])=g(\nabla_Xk,Y)$, $\theta=\operatorname{tr}_{\bar g}B$, and $\sigma=B-\frac12\theta\bar g$, and requires the generator field to be smooth, future-directed and affine.

[F8] [[lem-tgr-null-screen-quotient-positive]]: the screen spaces form a smooth rank-two bundle, $\bar g$ is positive definite, and $B$ is well defined on screen classes.

[F2] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] supplies the unique torsion-free metric-compatible connection $\nabla$, its induced derivative on tensors, commutation of that derivative with contractions, and $\nabla g=0$.

[F3] [[def-gr-curvature-tensor-and-derived-tensors]] fixes
$$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z,\quad R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a,\quad \operatorname{Ric}_{bd}=R^a{}_{bad}.$$
[[thm-gr-curvature-tensoriality-and-coordinate-formula]] proves the curvature is a tensor and supplies its coordinate formula with this index order.

[F4] [[thm-gr-local-geodesics-and-exponential-map]] supplies unique local geodesics, smooth dependence on their initial point and tangent, and the local geodesic flow used below; it asserts no global completeness.

[F5] [[thm-smooth-inverse-function-theorem-on-manifolds]]: a smooth map between smooth manifolds whose differential is an isomorphism at a point is a diffeomorphism on sufficiently small neighborhoods of that point.

[F6] [[def-embedded-submanifold-and-slice-chart]]: at each point of an embedded hypersurface there is a smooth chart in which the hypersurface is the coordinate slice $\{x^3=0\}$.

[F7] [[def-gr-smooth-lorentzian-objects]], Facts [F2]: repeated differentiation proves $x^{1/2}$ is smooth on $(0,\infty)$; the chain rule therefore makes $N/\sqrt{-g(N,N)}$ smooth wherever $N$ is timelike.

[F9] Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For a smooth Riemannian metric $q$ on a compact smooth manifold, its volume density has coordinate coefficient $\sqrt{\det(q_{AB})}$ ([[def-riemannian-volume-density]]), and its integral is the compactly supported smooth-density integral ([[def-integral-of-a-compactly-supported-smooth-density]]). That integral is independent of charts and partitions, invariant under diffeomorphisms, linear, and nonnegative on nonnegative densities ([[thm-density-integration-is-defined-without-an-orientation]]); smooth partitions of unity subordinate to chart covers exist under the same axiom ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F10] [[lem-em-parameter-integrals]], set form: if $K\subset\mathbb R^n$ is compact measurable with finite Lebesgue measure and $f,\partial_t f$ are continuous on an open neighborhood of $K\times[a,b]$, then $\frac d{dt}\int_K f(x,t)\,dx=\int_K\partial_t f(x,t)\,dx$ for interior $t\in(a,b)$.

[F11] [[cor-mean-value-theorem]]: a real function continuous on a closed interval and differentiable in its interior has an interior derivative value equal to its secant slope; in particular, if its derivative is nonnegative throughout the interior, it is nondecreasing on the closed interval.

[F12] [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]: a smooth vector field has unique local integral curves, smoothly depending on their initial points.

[A1] Null convergence holds on the full future flow: $\operatorname{Ric}(k,k)\ge0$ at every $\Phi(\lambda,x)$.

[A2] Every $\Phi_\lambda$ exists as a smooth embedding with spacelike image for all $\lambda\ge\lambda_0$; in particular no generator reaches a caustic or endpoint in finite future affine parameter on this domain.

[A3] The Axiom of Countable Choice $\mathrm{AC}_\omega$ is assumed as stated in the Statement and Given; it is the choice premise for the density integral and smooth partition suppliers in [F9] and for the parameter integral supplier in [F10]. [[def-countable-choice]]

## Proof

1.1 For tangent fields $X,Y$ on $H$, $k^\flat(Y)=g(k,Y)=0$, so the pullback of $k^\flat$ to $H$ is the zero one-form and $d(k^\flat)(X,Y)=0$. Torsion freedom and metric compatibility give
$$d(k^\flat)(X,Y)=g(\nabla_Xk,Y)-g(\nabla_Yk,X),$$
hence $B$ is symmetric. By [F8], it is a well-defined symmetric form on each positive two-dimensional screen. In a local $\bar g$-orthonormal screen frame $(e_1,e_2)$ write $B_{AB}=\frac12\theta\delta_{AB}+\sigma_{AB}$, where $\sum_A\sigma_{AA}=0$. Therefore
$$B_{AB}B_{BA}=\frac12\theta^2+\sum_{A,B}\sigma_{AB}^2.$$
[F1, F2, F8, algebra]

1.2 Fix $p\in H$. By [F6], choose slice coordinates with $H=\{x^3=0\}$ and, after a linear change of the tangential coordinates, $k^0(p)\ne0$. The two-dimensional slice $S=\{x^0=x^3=0\}$ lies in $H$, and the three-dimensional slice $\mathcal N_0=\{x^0=0\}$ is transverse to $k$ at $p$. Along $S$, set $n=N/\sqrt{-g(N,N)}$, $\alpha=-g(k,n)>0$, and $u=k/\alpha-n$; then $g(u,n)=0$ and $g(u,u)=1$. Extend $\alpha$ and the coordinate components of $u$ smoothly from $S$ to $\mathcal N_0$ by holding them constant in the slice coordinate $x^3$. Project the extended vector to $n^\perp$ by $w=u+g(u,n)n$; after shrinking the neighborhood $g(w,w)>0$, so $e=w/\sqrt{g(w,w)}$ is smooth and unit spacelike. The field $K_0=\alpha(n+e)$ on $\mathcal N_0$ is null and future-directed, and equals $k$ on $S$. The map $F(t,x)=\gamma_{x,K_0(x)}(t)$ is smooth by [F4]; at $(0,p)$ its differential is $(s,v)\mapsto sk_p+v$ for $v\in T_p\mathcal N_0$, an isomorphism because $k_p\notin T_p\mathcal N_0$. By [F5], after restriction $F$ is a diffeomorphism onto a neighborhood of $p$. Define $K$ there by $K_{F(t,x)}=\partial_tF(t,x)$. Then $K$ is smooth and affinely geodesic. Metric compatibility gives $\partial_t g(K,K)=2g(\nabla_KK,K)=0$, so $K$ remains null. By [F12], the restriction of $k$ to $H$ has a smooth local integral flow $\Psi(t,x)$ for $x$ near $p$ in $S$, and these curves remain in $H$. Since $\nabla_k k=0$, each such curve is an affinely parameterized geodesic with initial velocity $k_x$; uniqueness in [F4] therefore identifies it with $\gamma_{x,k_x}(t)$. Its differential at $(0,p)$ is $(s,v)\mapsto sk_p+v$ from $\mathbb R\times T_pS$ to $T_pH$, which is an isomorphism. Thus [F5] makes $\Psi$ a local diffeomorphism onto a neighborhood of $p$ in $H$. For $x\in S$, the curves defining $\Psi$ and $F|_{\mathbb R\times S}$ have the same initial data, so uniqueness in [F4] makes them agree; hence $K=k$ on this neighborhood in $H$. [F1, F2, F4, F5, F6, F7, F8, F12, construct, algebra]

2.1 At each point of $H$, choose an algebraic null companion $\ell$ with $g(k,\ell)=-1$ and a $\bar g$-orthonormal screen basis $e_1,e_2$, whose existence follows from [F8]. Let $A(X):=\nabla_XK$ for the local extension in step 1.2. Since $K$ is null throughout its neighborhood, metric compatibility gives $g(K,A(X))=0$ for every $X$; since $K$ is affine geodesic, $A(K)=0$. The inverse metric in this null frame is $g^{-1}=-K\otimes\ell-\ell\otimes K+\sum_A e_A\otimes e_A$. These two annihilation identities imply $\nabla_aK^a=\sum_Ag(A(e_A),e_A)=\theta$ and $(\nabla_aK^b)(\nabla_bK^a)=\sum_{A,B}B_{AB}B_{BA}$: $A$ maps into $K^\perp=\operatorname{span}\{K,e_1,e_2\}$, kills $K$, and has no $\ell$ component, so the null-frame trace and the trace of $A^2$ have only the screen block. To commute the derivatives, expand in a coordinate chart and use torsion freedom:
$$(\nabla_a\nabla_bK)^c-(\nabla_b\nabla_aK)^c=\left(\partial_a\Gamma^c{}_{bd}-\partial_b\Gamma^c{}_{ad}+\Gamma^c{}_{ae}\Gamma^e{}_{bd}-\Gamma^c{}_{be}\Gamma^e{}_{ad}\right)K^d=R^c{}_{dab}K^d.$$
The connection terms acting on the derivative index cancel because $\Gamma^e{}_{ab}=\Gamma^e{}_{ba}$. Contracting $c=a$ gives $\nabla_a\nabla_bK^a-\nabla_b\nabla_aK^a=\operatorname{Ric}_{db}K^d$ by [F3]. Since $K$ is geodesic, $0=\nabla_a(K^b\nabla_bK^a)=(\nabla_aK^b)(\nabla_bK^a)+K^b\nabla_a\nabla_bK^a$. Substituting the contracted commutator and restricting to $H$, where $K=k$ and $\nabla_aK^a=\theta$, gives
$$k^b\nabla_b\theta=-B_{AB}B_{BA}-\operatorname{Ric}(k,k)=-\frac12\theta^2-\sum_{A,B}\sigma_{AB}^2-\operatorname{Ric}(k,k).$$
[F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 1.2, construct, algebra]

2.2 Pull the metric on each cut back to $S_0$: in a chart $(U,x^1,x^2)$ on $S_0$, write $X_A=d\Phi_\lambda(\partial_A)$ and $q_{AB}(\lambda,x)=g(X_A,X_B)$. Since $T S_\lambda\subseteq T H\subseteq k^\perp$ and spacelikeness gives $T S_\lambda\cap\mathbb Rk=\{0\}$, the quotient map identifies $T S_\lambda$ with the two-dimensional screen of [F8]; its metric is exactly the induced cut metric. Thus $q^{AB}B_{AB}=\theta$. The map $(\lambda,x)\mapsto\Phi(\lambda,x)$ is smooth, so these coordinate fields are smooth; their coordinate parameter fields commute, $[k,X_A]=0$, along the image of the flow. Torsion freedom therefore gives $\nabla_kX_A=\nabla_{X_A}k$. Differentiating $q_{AB}$ and using metric compatibility yields $\partial_\lambda q_{AB}=B_{AB}+B_{BA}=2B_{AB}$, since $B$ is symmetric by step 1.1. For the positive matrix $(q_{AB})$, the determinant derivative formula gives
$$\partial_\lambda\sqrt{\det q}=\frac12\sqrt{\det q}\,q^{AB}\partial_\lambda q_{AB}=\theta(\Phi(\lambda,x))\sqrt{\det q}.$$
Thus the local coefficient of $\partial_\lambda\mu_{q_\lambda}$ is the coefficient of $\theta(\Phi(\lambda,\cdot))\mu_{q_\lambda}$. [F1, F2, F8, step 1.1, A2, algebra]

3.1 Fix any point $\Phi(\lambda,x)$ and suppose $\theta(\lambda,x)<0$. Along that generator put $y:=-\theta>0$. Since $\partial_\lambda=k$, step 2.1 and [A1] give $y'\ge y^2/2$. Thus $y$ remains positive and
$$\left(\frac1y\right)'=-\frac{y'}{y^2}\le-\frac12.$$
Integrating from $\lambda$ to $\lambda+2/y(\lambda)$ gives $1/y(\lambda+2/y(\lambda))\le0$, impossible because [A2] supplies a smooth embedded cut there and $\theta$ is finite. Hence $\theta\ge0$ at every point on every future cut. [A1, A2, step 2.1, algebra]

3.2 Fix $\lambda_*>\lambda_0$ and a compact interval $[a,b]\subset(\lambda_0,\infty)$ with $\lambda_*\in(a,b)$. Compactness of $S_0$ gives a finite cover by coordinate charts; by the partition theorem in [F9] choose a finite smooth partition of unity $(\rho_i)$ subordinate to it. Each $\operatorname{supp}\rho_i$ is a compact subset of its chart. In chart coordinates let $K_i:=x_i(\operatorname{supp}\rho_i)$ and write $\rho_i\mu_{q_\lambda}=f_i(x,\lambda)|dx^1dx^2|$. The coefficient $f_i$ is smooth on a neighborhood of $K_i\times[a,b]$ and, because $\rho_i$ has compact support inside the chart, its zero extension in $x$ is smooth. The set $K_i$ is compact and has finite Lebesgue measure. The density integral formula in [F9] gives $A(\lambda)=\sum_i\int_{K_i}f_i(x,\lambda)\,dx$. Applying [F10] to each of this finite collection of fixed compact sets and using 2.2 gives
$$A'(\lambda_*)=\sum_i\int_{K_i}\partial_\lambda f_i(x,\lambda_*)\,dx=\sum_i\int_{K_i}\rho_i(x)\theta(\Phi(\lambda_*,x))\,\mu_{q_{\lambda_*}}(x)=\int_{S_0}\theta(\Phi(\lambda_*,x))\,\mu_{q_{\lambda_*}}(x).$$
The last equality is the density integral formula and $\sum_i\rho_i=1$. Diffeomorphism invariance of density integration in [F9] identifies this with $\int_{S_{\lambda_*}}\theta\,dA$. As $\lambda_*$ was arbitrary, the derivative identity holds for every $\lambda>\lambda_0$. [A3, F9, F10, step 2.2, algebra]

4.1 By step 3.1 the integrand in step 3.2 is nonnegative, and the Riemannian volume density is positive, so $A'(\lambda)\ge0$ for $\lambda>\lambda_0$. The same finite chart formula shows $A$ is continuous at $\lambda_0$: on each compact $K_i$, $f_i(x,\lambda)$ converges uniformly to $f_i(x,\lambda_0)$ as $\lambda\downarrow\lambda_0$ by continuity on the compact product, and the finite-measure integral difference is bounded by $\lambda_2(K_i)\sup_{K_i}|f_i(x,\lambda)-f_i(x,\lambda_0)|$. Thus $A$ is continuous on every $[\lambda_1,\lambda_2]$ with $\lambda_0\le\lambda_1<\lambda_2$ and differentiable in its interior; [F11] implies $A(\lambda_2)\ge A(\lambda_1)$. [F9, F11, step 3.1, step 3.2, A2, algebra] ∎

## Remarks

The proof is a local Raychaudhuri calculation followed by an explicit future-completeness argument. It assumes null convergence directly and does not use Einstein's equation, a matter model, asymptotic predictability, or an event-horizon definition.

