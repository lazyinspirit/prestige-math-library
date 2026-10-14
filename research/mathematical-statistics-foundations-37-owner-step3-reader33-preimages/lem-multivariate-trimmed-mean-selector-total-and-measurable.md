---
id: lem-multivariate-trimmed-mean-selector-total-and-measurable
kind: lemma
title: "Totality and measurability of the repaired multivariate trimmed-mean selector"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [alg-multivariate-trimmed-mean, def-euclidean-inner-product, def-euclidean-spheres-and-closed-balls, thm-heine-borel-rn, def-metric-compactness, thm-compactness-under-continuous-maps, thm-cauchy-schwarz-in-an-inner-product-space, thm-compact-iff-finite-intersection-property, thm-heine-cantor-metric, thm-rational-points-and-boxes-in-rn, lem-countable-iff-surjection-from-n, def-borel-sigma-algebra, def-measurable-function-between-measurable-spaces, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, estimator definition and §4"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 15–23; original least-integer selector, good-event nonemptiness, and performance proof."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §3.2"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 6–7; slab intersections and the original adaptive dyadic selector."
---

## Statement

For each fixed admissible $d,N,\varepsilon$ and each observed data tuple in $(\mathbb R^d)^{2N}$, the procedure [[alg-multivariate-trimmed-mean]] returns a unique vector in $\mathbb R^d$. As a function of the observed data tuple it is Borel measurable. The fallback branch covers the case where no dyadic tail intersection is nonempty; the all-scale branch covers the case where every tail intersection is nonempty.

## Facts & Assumptions

**Given:** Integers $d,N\ge1$, fixed $\varepsilon\in(0,1]$, and an arbitrary data tuple in $(\mathbb R^d)^{2N}$.

[F1] The algorithm's directional order statistics, winsorized centers, slabs, tail intersections, and three output branches are as in [[alg-multivariate-trimmed-mean]].

[F2] The Euclidean unit sphere and closed unit ball are compact, and a closed bounded subset of $\mathbb R^d$ is compact ([[def-euclidean-spheres-and-closed-balls]], [[thm-heine-borel-rn]]).

[F3] A continuous real-valued function on a nonempty compact space attains a minimum ([[thm-compactness-under-continuous-maps]]).

[F4] Cauchy–Schwarz holds for the Euclidean inner product; consequently $\|z\|_2=\sup_{v\in S^{d-1}}|\langle z,v\rangle|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-euclidean-inner-product]], [[def-euclidean-spheres-and-closed-balls]]).

[F5] In a compact metric space, every family of closed sets with the finite intersection property has nonempty intersection ([[thm-compact-iff-finite-intersection-property]]).

[F6] Rational $d$-tuples are countable and dense, and a nonempty countable set has an enumeration by $\mathbb N$ ([[thm-rational-points-and-boxes-in-rn]], [[lem-countable-iff-surjection-from-n]]).

[F7] Borel sets form a sigma-algebra, a map is Borel when preimages of Borel sets are Borel, pointwise limits of measurable real functions are measurable, and rational open boxes form a countable basis of $\mathbb R^d$ ([[def-borel-sigma-algebra]], [[def-measurable-function-between-measurable-spaces]], [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]], [[thm-rational-points-and-boxes-in-rn]]).

[F8] A continuous map from a compact metric space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

## Proof

**Proof technique:** direct.

**Given:** Integers $d,N\ge1$, fixed $\varepsilon\in(0,1]$, and an arbitrary data tuple in $(\mathbb R^d)^{2N}$.

1.1 Fix the data tuple $x$ and put $M(x)=\max_i\{\|\widetilde X_i\|_2,\|\widetilde Y_i\|_2\}$. Every projected observation and each order-statistic endpoint lies in $[-M(x),M(x)]$, so $|U_Q(v;x)|\le M(x)+Q$. Hence $z\in\Gamma(Q)$ implies $|\langle z,v\rangle|\le M(x)+(1+2\varepsilon)Q$ for every unit $v$ and $\|z\|_2\le M(x)+(1+2\varepsilon)Q$ by [F4]. Each order statistic of a finite list $a_1,\ldots,a_N$ equals $\min_{|J|=k}\max_{j\in J}a_j$ at rank $k$: every such maximum is at least the $k$th smallest entry, and the first $k$ indices attain it. Thus the directional order statistics, clipping endpoints, and $U_Q(v;x)$ are continuous in $(x,v)$ for fixed $Q$. Each $\Gamma(v,Q)$ is a closed convex slab; intersections preserve these properties. Therefore $\Gamma(Q)$ and every $K_j$ are closed and convex; a nonempty $K_j$ is bounded by the displayed radius at $Q=2^j$, hence compact by [F2]. [F1, F2, F4, algebra]

2.1 Since $K_j\subseteq K_{j+1}$, $S=\{j:K_j\ne\varnothing\}$ is upward closed. If $S$ is nonempty and proper, choose $j_0\in S$ and $j_1\notin S$; upward closure forces $j_1<j_0$, and the least point of the nonempty finite set $S\cap\{j_1+1,\ldots,j_0\}$ is least in $S$. If $S=\mathbb Z$, the nested nonempty compact sets $K_0\supseteq K_{-1}\supseteq K_{-2}\supseteq\cdots$ have the finite-intersection property inside compact $K_0$, so [F5] gives a nonempty compact intersection. This intersection is exactly $\bigcap_{i\in\mathbb Z}\Gamma(2^i)$, since the constraints in $K_{-n}$ range over all $i\ge-n$. Each nonempty branch set (a least-index $K_j$ or the all-scale intersection) is compact and convex, so its norm attains a minimum by [F3]. If distinct $z,w$ both minimize squared norm, then $\|(z+w)/2\|_2^2=(\|z\|_2^2+\|w\|_2^2)/2-\|z-w\|_2^2/4$ is smaller, a contradiction; the minimum-norm point is unique. The empty-$S$ fallback is the defined first-half mean. Thus every branch is total and single-valued. [F1, F2, F3, F5, step 1.1, choose, algebra]

2.2 For fixed $Q>0$, define $g_Q(x,z)=\max_{v\in S^{d-1}}\{|\langle z,v\rangle-U_Q(v;x)|-2\varepsilon Q\}$. It is continuous: the maximand is jointly continuous by step 1.1, the sphere is compact by [F2], and on a compact neighborhood of any $(x,z)$ times the sphere [F8] gives uniform continuity, which bounds the change in the maximum by the supremum change of the maximand. Also, $\Gamma(Q)=\{z:g_Q(x,z)\le0\}$, and $g_Q$ is convex in $z$ as a maximum of absolute affine functions minus constants. Put $g_I(x,z)=\sup_{i\in I}g_{2^i}(x,z)$ for $I=I_j=\{i\in\mathbb Z:i\ge j\}$ or $I=\mathbb Z$. If $Q\ge2M(x)$, no first-half projection is clipped, so $U_Q(v;x)=\langle\bar X,v\rangle$ and $g_Q(x,z)=\|z-\bar X\|_2-2\varepsilon Q$, where $\bar X=N^{-1}\sum_i\widetilde X_i$. On any compact neighborhood of $(x,z)$ this identity makes the high-scale terms tend uniformly to $-\infty$; for $I_j$ they are eventually below $g_{2^j}$, and for $I=\mathbb Z$ eventually below $g_1$. Thus the high-scale supremum is locally a finite maximum. For the all-integer index set, define $g_0$ using clipping to $[\alpha_v,\beta_v]$ and no error allowance. Expanding both clipping endpoints by $Q$ changes each clipped observation by at most $Q$, so $|g_Q-g_0|\le(1+2\varepsilon)Q$ uniformly in $(x,z)$. The supremum over sufficiently small dyadic scales therefore converges uniformly to $g_0$; combining it with finitely many middle scales and the locally finite high-scale maximum proves $g_I$ continuous. Being a supremum of convex functions, $g_I$ is convex in $z$. [F1, F2, F8, step 1.1, algebra]

3.1 For $I=I_j$, every $z\in K_j$ satisfies $\|z\|_2\le R_j(x)=M(x)+(1+2\varepsilon)2^j$ by step 1.1; for $I=\mathbb Z$, every feasible $z$ lies in $\Gamma(1)$ and has norm at most $R_\infty(x)=M(x)+1+2\varepsilon$. These radii are positive and continuous. Since $K_I(x)=\{z:g_I(x,z)\le0\}$, its nonemptiness is equivalent to $m_I(x)\le0$, where $m_I(x)=\min_{\|w\|_2\le1}g_I(x,R_I(x)w)$. The minimum exists by [F2], [F3]. It is continuous in $x$: on a compact neighborhood of any $x$, [F8] makes $(x,w)\mapsto g_I(x,R_I(x)w)$ uniformly continuous in $x$ uniformly over the compact unit ball, and the difference of two minima is bounded by the supremum of the corresponding function differences. Thus each event $\{x:K_I(x)\ne\varnothing\}=\{x:m_I(x)\le0\}$ is Borel. [F2, F3, F8, step 1.1, step 2.2]

4.1 Fix one such branch index set $I$ and write $R=R_I(x)$. By [F6], enumerate a countable dense rational subset $(r_a)$ of $\mathbb Q^d$ and set $d_a=r_a/\max\{1,\|r_a\|_2\}$. The radial map is continuous and is the identity on the unit ball, so $(d_a)$ is dense in that ball. Let $h_I(x,w)=g_I(x,Rw)$ and, for each integer $\lambda\ge1$, minimize $J_{\lambda,I}(x,w)=R^2\|w\|_2^2+\lambda\max\{h_I(x,w),0\}$ over $\|w\|_2\le1$. The function is jointly continuous and strictly convex in $w$: $h_I$ is convex by step 2.2, its positive part is convex, and $R>0$ makes the quadratic strictly convex. Compactness and [F3] give a unique minimizer $w_{\lambda,I}(x)$. The value $b_{\lambda,I}(x)=\inf_aJ_{\lambda,I}(x,d_a)$ is Borel as a countable infimum of continuous functions and equals the minimum by density and continuity. For each integer $s\ge1$, choose the least $a$ with $J_{\lambda,I}(x,d_a)<b_{\lambda,I}(x)+1/s$; such an index exists, and its level sets are Borel because they are the comparison event minus the countable union of earlier comparison events. Thus $x\mapsto d_{a(x,s)}$ is Borel. Strong convexity gives $J_{\lambda,I}(x,y)-J_{\lambda,I}(x,w_{\lambda,I})\ge R^2\|y-w_{\lambda,I}\|_2^2$: apply the quadratic identity $\|(1-t)w+ty\|_2^2=(1-t)\|w\|_2^2+t\|y\|_2^2-t(1-t)\|y-w\|_2^2$, convexity of the penalty, minimality, and let $t\downarrow0$. Hence $\|d_{a(x,s)}-w_{\lambda,I}(x)\|_2<1/(R\sqrt{s})$, so these Borel maps converge pointwise to $w_{\lambda,I}$. By [F7], the limit and $z_{\lambda,I}(x)=R_I(x)w_{\lambda,I}(x)$ are Borel. [F2, F3, F6, F7, step 2.2, step 3.1]

5.1 On the Borel event $E_I=\{x:K_I(x)\ne\varnothing\}$, let $z_*(x)$ be its unique minimum-norm point from step 2.1 and put $w_*=z_*/R$. Comparing the penalized minimum with the feasible $w_*$ gives $\|z_{\lambda,I}(x)\|_2\le\|z_*(x)\|_2$ and $\max\{g_I(x,z_{\lambda,I}(x)),0\}\le\|z_*(x)\|_2^2/\lambda$. The sequence $z_{\lambda,I}(x)$ is bounded by $R(x)$, so every subsequence has a convergent subsubsequence by [F2]. By continuity of $g_I$, each cluster point is feasible; the norm bound makes its norm no greater than $\|z_*(x)\|_2$, so uniqueness in step 2.1 forces every cluster point to equal $z_*(x)$. The full sequence therefore converges to $z_*(x)$: otherwise a subsequence staying a fixed positive distance away would have a different cluster point. The maps $1_{E_I}z_{\lambda,I}$ are Borel and converge everywhere, to $z_*$ on $E_I$ and to $0$ off it; their pointwise limit is Borel by [F7]. [F2, F7, step 2.1, step 2.2, step 3.1, step 4.1]

6.1 The events $S=\varnothing$, $S=\mathbb Z$, and $\min S=j$ are respectively countable intersections or combinations of the Borel nonemptiness events in step 3.1, so they are Borel by [F7]. On each such event the algorithm uses the corresponding Borel branch selector from step 5.1 or the continuous first-half mean. For every open target set, its inverse image under the piecewise map is the countable union of each branch event intersected with that branch map's Borel inverse image; it is Borel. Step 2.1 proves all branches defined and single-valued, so the complete output map is total and Borel. [F1, F7, step 2.1, step 3.1, step 5.1] ∎

