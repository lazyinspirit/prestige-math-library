---
id: thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms
kind: theorem
title: "Adapted excellent Morse functions exist on compact cobordisms"
status: published
origin: pipeline
dependency_level: 2
deps: ["def-smooth-cobordism-triad-for-morse-theory", "def-morse-function-adapted-to-a-cobordism", "lem-boundary-product-function-on-a-collared-cobordism", "lem-separating-critical-values-far-from-the-boundary", "thm-parametric-transversality", "lem-manifold-bump-for-a-compact-set-inside-an-open-set", "def-a-smooth-map-transverse-to-an-embedded-submanifold", "lem-morse-functions-are-transverse-differentials", "cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points", "thm-morse-lemma", "thm-every-smooth-manifold-admits-a-riemannian-metric", "thm-compactly-supported-vector-fields-are-complete", "def-riemannian-gradient", "def-downward-gradient-like-vector-field", "def-countable-choice"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For every compact collared triad $(W;M_0,M_1)$ there are an adapted excellent Morse function $f:W\to[0,1]$ and an adapted complete downward gradient-like field $X$, both agreeing with the product model on smaller neighborhoods in the fixed collars: $f=t_0/3$ near $M_0$, $f=1-t_1/3$ near $M_1$, and $X$ is its negative Riemannian gradient for a metric that is a product metric there. Here **adapted complete** has the collar-extension meaning of [[def-morse-function-adapted-to-a-cobordism]]: $X$ is the restriction of a complete smooth field on a boundaryless collar extension of $W$; a trajectory is followed in $W$ only until it exits a face.

## Facts & Assumptions

**Given:** A compact collared triad $(W;M_0,M_1)$ with its fixed disjoint collars and $\mathrm{AC}_\omega$.

[F1] [[lem-boundary-product-function-on-a-collared-cobordism]] supplies $h:W\to[0,1]$ with the stated product formulas near the faces, $h^{-1}(0)=M_0$, $h^{-1}(1)=M_1$, and $dh\ne0$ near the boundary, under $\mathrm{AC}_\omega$.

[F2] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] supplies smooth bumps equal to one near a compact set with support in a prescribed open set.

[F3] Under $\mathrm{AC}_\omega$, [[thm-parametric-transversality]] says that if the evaluation of a finite-dimensional smooth family is transverse to an embedded submanifold, the parameters whose slices fail transversality form a null set.

[F4] A smooth function is Morse exactly when its differential section is transverse to the zero section; its critical Hessian is the vertical derivative of that section at a zero ([[lem-morse-functions-are-transverse-differentials]], [[def-a-smooth-map-transverse-to-an-embedded-submanifold]]).

[F5] [[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]] gives finiteness, and [[lem-separating-critical-values-far-from-the-boundary]] separates their values by an arbitrarily small perturbation supported away from the boundary, preserving the critical points and their Hessians.

[F6] Under $\mathrm{AC}_\omega$, [[thm-every-smooth-manifold-admits-a-riemannian-metric]] supplies a background metric; [[thm-morse-lemma]] supplies the coordinates $f=f(p)-|u|^2+|v|^2$ at each critical point; [[def-riemannian-gradient]] defines its metric gradient.

[F7] Under $\mathrm{AC}_\omega$, [[thm-compactly-supported-vector-fields-are-complete]] makes a compactly supported smooth field on a boundaryless manifold complete.

[F8] [[def-downward-gradient-like-vector-field]] requires $df(X)<0$ off the critical set and $X=(2u,-2v)$ in the preceding Morse coordinates. [[def-morse-function-adapted-to-a-cobordism]] adds the boundary directions and collar-extension completeness.

## Proof

1.1 Start with $h$ from [F1]. Choose $\varepsilon>0$ such that $h$ has its product formula on the two closed collar strips $0\le t_i\le4\varepsilon$. Write $B_a$ for the union of the open strips $t_i<a$ and put $K=W\setminus B_{2\varepsilon}$; this is a compact subset of $W^\circ$. Consider all nested relatively compact interior chart neighborhoods $V\Subset U\Subset W^\circ\setminus\overline{B_\varepsilon}$ and bumps $\chi$ supported in $U$ and equal to one near $\overline V$. They cover $K$: each point has such nested chart neighborhoods and a bump by [F2]. Compactness selects finitely many triples $(V_i,U_i,\chi_i)$ covering $K$, without choosing data simultaneously at every point. In coordinates $x_i^1,\ldots,x_i^d$ on $U_i$, extend $\phi_{ij}=\chi_i x_i^j$ by zero to $W$. These are smooth and have compact support away from $\overline{B_\varepsilon}$; on $V_i$ their differentials are the coordinate basis $dx_i^j$. [given, F1, F2, construct]

2.1 For finitely many parameters $a=(a_{ij})\in\mathbb R^N$, set $h_a=h+\sum_{i,j}a_{ij}\phi_{ij}$. The finite union of the supports is a compact subset of the interior, so $h$ has a positive margin from both $0$ and $1$ there. On the compact collar annulus $\overline{B_{2\varepsilon}}\setminus B_\varepsilon$, $dh$ is nonzero. Choose an open parameter ball $S$ about zero so small that every $h_a$ retains the value margin on the supports and has nonzero differential on this annulus; uniform bounds on the finitely many functions and first derivatives give this choice. On $B_\varepsilon$ each perturbation is zero. Thus $h_a$ has no critical point outside $K$, has the original product formula near the faces, and takes its values in $[0,1]$ with endpoint fibers exactly the faces. [F1, step 1.1, construct]

3.1 The evaluation $\mathcal F:W^\circ\times S\to T^*W^\circ$, $\mathcal F(x,a)=d(h_a)_x$, is transverse to the zero section. Indeed at a zero $x\in K$ some $V_i$ contains $x$, and the parameter derivatives $\partial\mathcal F/\partial a_{ij}=d\phi_{ij}=dx_i^j$ span the vertical cotangent fiber. Projection to the normal quotient of the zero section is therefore surjective. There are no zeros outside $K$ by step 2.1. Apply [F3] to this finite-dimensional family; its bad parameters are null, so every sufficiently small open parameter ball contains a good parameter. Choose one and call its slice $g$. By [F4] it is Morse, including at all interior points, and the collar contains no critical point. If $K$ is empty no perturbation is needed; in dimension zero every Hessian is the invertible map of the zero vector space, so $h$ is already Morse and this family step is omitted. [F3, F4, step 1.1, step 2.1, construct]

4.1 By [F5] the critical set of $g$ is finite. Choose a closed boundary collar $C\subset B_\varepsilon$ and apply the value-separation result in [F5] by a perturbation supported in the interior and small enough to retain the positive endpoint margin on its compact support. The result $f$ has the same critical points and Hessians, distinct critical values, and equals $g=h$ near $C$; it still has endpoint fibers exactly $M_0,M_1$. Thus $f$ is adapted excellent. [F1, F5, step 2.1, step 3.1, construct]

5.1 Fix a background metric by [F6]. On smaller face collars use $dt_i^2+g_i$, where $g_i$ is the restriction of the background metric to $M_i$; in disjoint Morse-coordinate neighborhoods of the finitely many critical points use the Euclidean metric. Take cutoffs equal to one on still smaller neighborhoods and supported in these mutually disjoint collars and charts, using explicit collar cutoffs and [F2]. If these cutoffs are $\rho_l$ and their local metrics are $q_l$, the metric $q=(1-\sum_l\rho_l)q_0+\sum_l\rho_lq_l$ is smooth and positive definite, is product near the faces, and is Euclidean near each critical point. Set $X=-\operatorname{grad}_q f$. Off the critical set $df(X)=-\|\operatorname{grad}_q f\|_q^2<0$. In a Morse chart $f=f(p)-|u|^2+|v|^2$ it is $X=(2u,-2v)$, as required by [F8]. On the face collars it is $-\frac13\partial_{t_0}$ and $\frac13\partial_{t_1}$ respectively, hence points outward at $M_0$ and inward at $M_1$. [F2, F6, F8, step 4.1, construct]

6.1 Construct the completeness carrier explicitly. Append to each face its negative collar $M_i\times(-\delta,0)$, identifying $t=0$ with the face and using the fixed collar coordinates for $t\ge0$. Signed-collar charts and the interior charts of $W$ give a boundaryless smooth manifold $\widehat W$ containing $W$; the product transition maps give compatibility, and the finite gluing along compact faces gives a Hausdorff second-countable carrier. Continue the collar fields $-\frac13\partial_{t_0}$ and $\frac13\partial_{t_1}$ into the appended collars. Multiply there by a smooth scalar cutoff equal to one for $t\ge-\delta/3$ and zero for $t\le-2\delta/3$, leaving $X$ unchanged on $W$. The resulting smooth field $\widehat X$ on $\widehat W$ has support contained in the compact set $W\cup\bigcup_i M_i\times[-2\delta/3,0]$, hence is complete by [F7]. Its restriction is $X$; integral curves in $W$ are its ambient curves restricted to the time intervals before a boundary exit, by local flow uniqueness. If the boundary is empty, take $\widehat W=W$ and $\widehat X=X$. [F7, F8, step 5.1, construct]

7.1 The pair $(f,X)$ has all the required Morse, value-separation, descending-model, boundary and collar-extension properties by steps 4.1–6.1. Only $\mathrm{AC}_\omega$ is used: it is inherited from the boundary-product, parametric transversality, metric and complete-field suppliers. The finite chart and bump selection in step 1.1 and the single finite-dimensional parameter choice in step 3.1 use no full Axiom of Choice. [F1, F3, F6, F7, F8, step 4.1, step 5.1, step 6.1] ∎
