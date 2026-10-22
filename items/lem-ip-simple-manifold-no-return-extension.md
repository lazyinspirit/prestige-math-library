---
id: lem-ip-simple-manifold-no-return-extension
kind: lemma
title: A complete no-return extension of a strictly convex manifold
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-simple-riemannian-background
  - def-countable-choice
  - thm-collar-neighborhood-theorem
  - thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
  - cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary
  - def-riemannian-metric-and-riemannian-manifold
  - def-levi-civita-connection
  - thm-fundamental-theorem-of-riemannian-geometry
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
  - thm-euclidean-inverse-function-theorem
  - thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold
  - thm-finite-products-of-compact-spaces
  - def-riemannian-distance-on-a-connected-manifold
  - thm-riemannian-distance-is-a-metric
  - lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric
  - thm-compactness-agrees-with-metric-compactness
  - thm-compact-implies-complete-and-totally-bounded
  - thm-hopf-rinow
  - def-riemannian-speed-and-length
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-newton-leibniz-with-interior-derivative
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-compact-implies-the-other-compactness-forms
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Jan Bohr, Stability of the Non-abelian X-ray Transform in Dimension ≥ 3"
      url: "https://d-nb.info/1246268426/34"
      locator: "Lemma 7.1 (No-return extension), Appendix 7.1, PDF pp. 39–40: cylinder attachment, convex end metric, completeness, and escape of outward geodesics. The construction and estimates are reproduced locally."
    - title: "Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions"
      url: "https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf"
      locator: "Chapter 3, §3.7.5, Lemma 3.7.19, printed p. 100: no-return extension statement; the book leaves its construction as Exercise 3.7.20 and cites Bohr (2021)."
proof_strategy: direct
---

## Statement

Assume Countable Choice. Let $n\ge2$ and let $(M,g)$ be a compact, connected, nonempty smooth $n$-dimensional Riemannian manifold with nonempty smooth boundary. Write $\nu_{\mathrm{out}}$ for its outward unit normal and assume strict convexity in the convention $g(\nabla_w\nu_{\mathrm{out}},w)>0$ for every nonzero $w\in T_x\partial M$. Then there are a connected boundaryless Riemannian manifold $(N,G)$ and a smooth isometric embedding $M\hookrightarrow N$ such that $N$ is complete for its Riemannian distance and $N\setminus M$ is diffeomorphic to $(0,\infty)\times\partial M$. Let $s:N\setminus M\to(0,\infty)$ be the first coordinate under this diffeomorphism. A unit-speed geodesic means a smooth curve $\gamma$ satisfying $G(\dot\gamma,\dot\gamma)=1$ and $\nabla_{\dot\gamma}\dot\gamma=0$. For every such geodesic $\gamma:[0,\infty)\to N$ with $\gamma(0)\in\partial M$ and $G(\dot\gamma(0),\nu_{\mathrm{out}})\ge0$, one has $\gamma(t)\notin M$ for every $t>0$, and $s(\gamma(t))\to+\infty$ as $t\to\infty$.

## Statement references

[[def-ip-simple-riemannian-background]]

## Facts & Assumptions

**Given:** Countable Choice; a compact connected nonempty smooth Riemannian manifold with nonempty smooth boundary; and strict convexity in the outward normal convention stated above.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function. The proof uses this assumption only through the global collar and smooth partition-of-unity suppliers [F2] and [F4].

[F1] [[def-ip-simple-riemannian-background]]: the boundary has an outward unit normal, and strict convexity means $g(\nabla_w\nu_{\mathrm{out}},w)>0$ for every nonzero tangent vector $w$ at the boundary.

[F2] [[thm-collar-neighborhood-theorem]]: under Countable Choice, the boundary has a smooth collar.

[F3] [[cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary]]: every smooth tensor field on a manifold with boundary has a smooth local extension across each boundary point in its double.

[F4] [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]: under Countable Choice, an open cover of a smooth manifold with boundary has a subordinate smooth partition of unity.

[F5] [[def-levi-civita-connection]] and [[thm-fundamental-theorem-of-riemannian-geometry]]: the metric has a unique metric-compatible, torsion-free Levi–Civita connection.

[F6] [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]: a smooth vector field has locally unique integral curves depending smoothly on their initial points. Applied on the double to the geodesic vector field, this gives the local normal-geodesic coordinates used below.

[F7] [[def-riemannian-distance-on-a-connected-manifold]]: $d_G(x,y)$ is the infimum of Riemannian lengths of piecewise $C^1$ curves from $x$ to $y$.

[F8] [[def-riemannian-speed-and-length]] and [[def-pointwise-norm-and-angle-from-a-riemannian-metric]]: on each $C^1$ piece, $L_G(\alpha)=\int |\dot\alpha|_G$ and $|v|_G=\sqrt{G(v,v)}$.

[F9] [[lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric]]: on a compact coordinate patch the metric norm is bounded above and below by positive constant multiples of the Euclidean coordinate norm.

[F10] [[thm-riemannian-distance-is-a-metric]]: the infimum-of-lengths distance is a finite metric on a connected Riemannian manifold.

[F11] [[thm-compactness-agrees-with-metric-compactness]]: topological compactness on a metric space with its metric topology is the same as metric compactness, including for subspaces.

[F12] [[thm-compact-implies-complete-and-totally-bounded]]: every compact metric space is complete, without a choice assumption.

[F13] [[thm-hopf-rinow]]: under Countable Choice, a nonempty connected boundaryless Riemannian manifold that is complete for its Riemannian distance is geodesically complete.

[F14] [[thm-newton-leibniz-with-interior-derivative]]: for a continuous function on a closed interval whose derivative exists in the interior and has a Riemann-integrable extension, the integral of that derivative equals the endpoint difference.

[F15] [[thm-euclidean-inverse-function-theorem]]: a smooth map with invertible derivative at a point is a local diffeomorphism there.

[F16] [[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]: the boundary is a closed embedded smooth manifold; thus it is compact when $M$ is compact.

[F17] [[thm-finite-products-of-compact-spaces]]: the product of the compact interval $[0,R]$ and compact $\partial M$ is compact.

[F18] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: for the inner product induced by $G$, $|G(v,w)|\le |v|_G|w|_G$.

[F19] [[thm-closed-subspace-of-a-compact-space-is-compact]]: a closed subset of a compact topological space is compact.


[F20] [[thm-compact-implies-the-other-compactness-forms]]: every compact metric space is sequentially compact, in ZF. Here use the intrinsic metric $d_g$ on the connected $M$ and restrict it to $\partial M$. Its topology is the manifold topology: on a smaller coordinate half-ball, the upper bound in [F9] controls lengths of straight coordinate segments (the half-ball is convex), while the lower bound makes a path leaving the half-ball have a fixed positive length; these are the two neighborhood inclusions. By [F16], [F19], and [F11], the boundary with this restricted metric is compact. Thus every sequence of boundary points has a subsequence converging to a boundary point, with convergence also in manifold coordinates. Applying this twice retains one common subsequence for two boundary-point sequences. No assertion that arbitrary compact topological spaces are sequentially compact is used.

## Proof

1.1 Use [F2] to attach the smooth cylinder $[0,\infty)\times\partial M$ to $M$ along its boundary. By [F3], the metric coefficients extend smoothly across each boundary point to the double. Compactness of $\partial M$ gives a finite such cover; [F4] patches these local extensions by a smooth partition of unity. After shrinking the collar, the patched tensor remains positive definite, since it agrees with $g$ on $M$ and positive definiteness is open. Solve the geodesic ODE for the extended metric from each boundary point in the outward unit-normal direction. At $(x,0)$ the derivative of $(x,s)\mapsto\exp_x(s\nu_{\mathrm{out}}(x))$ sends $(w,a)$ to $w+a\nu_{\mathrm{out}}(x)$, an isomorphism; [F15] therefore gives local inverse charts along the zero section. A finite subcover gives a common domain where this map is a local diffeomorphism. If no uniform collar width made it injective, there would be distinct pairs $(x_j,s_j)$ and $(y_j,t_j)$ with equal images and $0\le s_j,t_j\downarrow0$; [F20], first for $(x_j)$ and then for $(y_j)$ along the resulting subsequence, gives a common subsequence converging to $(x,0)$ and $(y,0)$, equality of the images forces $x=y$, and both pairs then lie in one local inverse chart at $(x,0)$, a contradiction. Thus a uniform outward normal collar exists. [A1, F2, F3, F4, F5, F6, F15, F16, F20, given, construct]

2.1 In this normal collar, use $s$ for outward normal distance and write the extended metric as $ds^2+\widetilde h_s$, where $\widetilde h_s$ is a smooth family of metrics on $\partial M$. The Gauss-lemma orthogonality follows by differentiating $G(\partial_s,J)$ along a variation field $J$ of normal geodesics: $D_s\partial_s=0$, $[\partial_s,J]=0$, and metric compatibility give $\partial_sG(\partial_s,J)=\tfrac12J(G(\partial_s,\partial_s))=0$, while the initial value is zero. Also $G(\partial_s,\partial_s)=1$. For tangent fields $X,Y$ transported along this collar, metric compatibility and torsion freeness yield $\partial_s\widetilde h_s(X,Y)=G(\nabla_X\partial_s,Y)+G(X,\nabla_Y\partial_s)$; hence $\tfrac12\partial_s\widetilde h_s|_{s=0}$ is the second fundamental form for the outward normal. By [F1], $\partial_s\widetilde h_s$ is positive definite at $s=0$, and compactness makes it positive definite for $0\le s<2\varepsilon$ for some $\varepsilon>0$. [F1, F5, F6, step 1.1, algebra]

3.1 Choose smooth nonincreasing $\xi_1:[0,\infty)\to[0,1]$ with $\xi_1=1$ on $[0,\varepsilon]$ and $\xi_1=0$ on $[2\varepsilon,\infty)$, and set $\xi_2=1-\xi_1$. Since the family $\widetilde h_s/s$ is bounded relative to the positive metric $\widetilde h_0$ on the compact transition interval $[\varepsilon,2\varepsilon]\times\partial M$, choose $C>0$ large enough that $sk-\widetilde h_s$ is positive semidefinite there for $k=C\widetilde h_0$. Define $h_s=\xi_1(s)\widetilde h_s+s\xi_2(s)k$. This is positive definite: on $[0,\varepsilon]$ it equals $\widetilde h_s$, on $[2\varepsilon,\infty)$ it equals $sk$, and on the transition both terms are positive semidefinite with positive-definite sum. [F1, step 2.1, construct]

4.1 Differentiate the definition to obtain $\partial_sh_s=\xi_1\partial_s\widetilde h_s+\xi_2k+\xi_2'(sk-\widetilde h_s)$. Each term is positive semidefinite on the transition interval, and at least one of the first two is positive definite at every point; outside the transition, $\partial_sh_s=\partial_s\widetilde h_s>0$ near $s=0$ and $\partial_sh_s=k>0$ for $s\ge2\varepsilon$. Thus $\partial_sh_s$ is positive definite for every $s\ge0$. Gluing $ds^2+h_s$ to $g$ gives a smooth Riemannian metric $G$ on the cylinder attachment, because $h_s=\widetilde h_s$ near $s=0$. [step 2.1, step 3.1, algebra, construct]

5.1 Let $p:N\to\mathbb R$ equal $s$ on the cylinder and be smooth and nonpositive on $M$, agreeing with the collar coordinate near $\partial M$; such an extension is obtained by a smooth one-variable cutoff on the compact interior side of the collar. The sublevel set $\{p\le R\}$ is closed by continuity of $p$ and contained in the union of compact $M$ and $[0,\max(R,0)]\times\partial M$, which is compact by [F16, F17]. Therefore the sublevel set is compact by [F19]. The differential of $p$ has bounded metric norm: it has norm $1$ on the cylinder and is bounded on compact $M$. If $C$ is such a bound, then on each $C^1$ piece of a path $\alpha$, [F18] and the chain rule give $|(p\circ\alpha)'|\le C|\dot\alpha|_G$; integrating by [F14] on each piece and summing gives $|p(\alpha(b))-p(\alpha(a))|\le C L_G(\alpha)$. Taking the infimum over paths in [F7] shows that $p$ is $C$-Lipschitz for $d_G$. Hence every $d_G$-Cauchy sequence has bounded $p$ and lies in one compact sublevel set. The metric topology agrees locally with the manifold topology by [F9]: the upper coordinate bound makes nearby coordinate points close in $d_G$, and the lower bound on a smaller chart ball makes any path leaving that ball have a fixed positive length. Thus the sublevel is compact as a metric subspace by [F11], and complete by [F12]. Every Cauchy sequence in $N$ therefore converges in $N$, so $(N,G)$ is complete. [F7, F8, F9, F10, F11, F12, F14, F16, F17, F18, F19, step 4.1, algebra]

6.1 The manifold $N$ is connected, nonempty, and boundaryless, so [F13] extends every geodesic from its initial data to all $t\in\mathbb R$. Let $\gamma$ start at $\partial M$ with unit outward or tangent velocity, and put $r(t)=s(\gamma(t))$ while it is in the exterior. From $G=ds^2+h_s$, the Levi–Civita formula gives $\operatorname{Hess}_G s(\dot\gamma,\dot\gamma)=\tfrac12(\partial_sh_s)(\dot\gamma_T,\dot\gamma_T)\ge0$, where $\dot\gamma_T$ is the component tangent to the level set $\{s=\mathrm{constant}\}$. Thus $r''(t)\ge0$. If $r'(0)>0$, then $r'(t)\ge r'(0)$ and $r(t)>0$ grows without bound. If $r'(0)=0$, then $\dot\gamma(0)$ is a nonzero boundary-tangent vector and strict convexity gives $r''(0)>0$; continuity makes $r'(t)>0$ for some sufficiently small $t>0$, after which the same convexity estimate keeps $r'$ positive and $r(t)\to\infty$. In either case the geodesic never returns to $M$ and eventually leaves every compact subset of $N$. [F1, F5, F13, step 4.1, step 5.1, algebra] ∎
