---
id: lem-cg-cat-one-short-and-closed-local-geodesics
kind: lemma
title: "Short local geodesics in a CAT(1) space are geodesics, and closed local geodesics have length at least $2\\pi$"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 10
deps: [def-cg-cat-zero-cat-one-and-local-geodesic, lem-cg-comparison-convexity-and-model-spaces, def-geodesic-and-geodesic-metric-space, def-interval, def-metric-space, def-metric-ball, def-metric-bounded-diameter, def-metric-convergence, cor-connected-subsets-of-the-line, thm-heine-borel-rn, thm-lebesgue-number-lemma]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.1.1–I.1.5 (local geodesics), I.1.13 (angles), II.1.4 (unique geodesics for distances $<D_\\kappa$, local geodesics of length $\\le D_\\kappa$ are geodesics, convex balls of radius $<D_\\kappa/2$), II.1.7 (equivalent formulations of the CAT inequality), I.3.15 (closed local geodesics)"
    - title: "B. H. Bowditch, Notes on locally CAT(1) spaces (Aberdeen preprint, 27 scanned sheets)"
      url: "https://www.bhbowditch.com/papers/bhb-catone.pdf"
      locator: "§2, printed pp. 13–19 (local geodesics of length $\\le r$ are global; closed local geodesics have length at least $m$)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2.15–I.2.16, printed pp. 504–505 (the CAT(0)-inequality I.2.15 and local geodesics I.2.16)"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Let $X$ be a CAT(1) space ([[def-cg-cat-zero-cat-one-and-local-geodesic]]). Then:

**(i) Unique short geodesics.** Every two points $p,q\in X$ with $d(p,q)<\pi$ are joined by exactly one geodesic segment up to reparametrization ([[def-geodesic-and-geodesic-metric-space]]); moreover the segment depends continuously on its endpoints: if $p_k\to p$, $q_k\to q$ and $d(p,q)<\pi$, then the linear parametrizations of $[p_k,q_k]$ converge uniformly to the linear parametrization of $[p,q]$ ([[def-metric-convergence]]).

**(ii) Local geodesics of length at most $\pi$ are geodesics.** If $I\subseteq\mathbb R$ is an interval ([[def-interval]]) and $c\colon I\to X$ is a constant-speed local geodesic of speed $\lambda\ge0$ with $L(c)\le\pi$, then $d(c(s),c(t))=\lambda|s-t|$ for all $s,t\in I$. Here, for an arbitrary interval, $L(c)$ means the supremum of the lengths on its nonempty compact subintervals, with value $0$ for an empty interval. Every compact restriction, after translation and arclength reparametrization when $\lambda>0$, is a geodesic segment; speed zero gives a constant map.

**(iii) Closed local geodesics are at least $2\pi$ long.** If $c\colon S^1_\ell\to X$ is a nonconstant closed local geodesic (i.e. it is locally isometric and parametrized by arclength, as in [[def-cg-cat-zero-cat-one-and-local-geodesic]]), then $\ell\ge2\pi$; and the image of $c$ has diameter at least $\pi$. Consequently no nonconstant closed local geodesic is contained in a ball of diameter $<\pi$ ([[def-metric-ball]]).

## Facts & Assumptions

**Given:** A CAT(1) space $X$; for clause (i) points $p,q\in X$ and geodesic segments $[p,q],[p,q]'$; for clause (ii) an interval $I\subseteq\mathbb R$ and a local geodesic $c\colon I\to X$; for clause (iii) a nonconstant closed local geodesic $c\colon S^1_\ell\to X$.

[F1] [[def-cg-cat-zero-cat-one-and-local-geodesic]]: CAT(1) means every pair of points at distance $<\pi$ is joined by a geodesic segment, every geodesic triangle of perimeter $<2\pi$ satisfies $d(x,y)\le d_S(\bar x,\bar y)$ for all points $x,y$ of the triangle, and constant-speed local geodesics satisfy locally $d(c(t'),c(t''))=\lambda|t'-t''|$ for a fixed $\lambda\ge0$, with the unit-speed convention $\lambda=1$; $S^1_\ell$ is the circle of circumference $\ell$.

[F2] [[lem-cg-comparison-convexity-and-model-spaces]]: for side lengths satisfying the triangle inequalities with perimeter $<2\pi$ a comparison triangle in $S^2$ exists and is unique up to isometry; the spherical cosine rule holds: for $A,B,C\in S^2$ with $a=d_S(B,C)$, $b=d_S(C,A)$, $c=d_S(A,B)<\pi$ and vertex angle $\gamma$ at $C$, $\cos c=\cos a\cos b+\sin a\sin b\cos\gamma$.

[F3] [[def-geodesic-and-geodesic-metric-space]]: a geodesic segment from $x$ to $y$ is a path $\gamma$ with $d(\gamma(s),\gamma(t))=|s-t|$; its midpoint is the point at equal distance from $x$ and $y$, and a segment of length $0$ is degenerate with midpoint its point.

[F4] [[def-interval]]: an interval of $\mathbb R$ is a convex subset. Every closed bounded interval is compact by [[thm-heine-borel-rn]] (3), and [[thm-lebesgue-number-lemma]] gives a finite subdivision subordinate to a cover by local-isometry intervals. Each interval is connected by [[cor-connected-subsets-of-the-line]].

[F5] [[def-metric-convergence]]: $x_k\to x$ means $d(x_k,x)\to0$, and uniform convergence of maps is convergence in the supremum metric.

[F6] [[def-metric-ball]]: $B(x,r)=\{y:d(x,y)<r\}$. A nonempty bounded set $A$ has diameter $\sup\{d(a,b):a,b\in A\}$ ([[def-metric-bounded-diameter]]); thus diameter $<\pi$ implies that every pairwise distance is $<\pi$, without asserting the converse.

[F7] [[def-metric-space]]: the triangle inequality $d(x,z)\le d(x,y)+d(y,z)$ holds, and a path parametrized proportionally to arclength whose length equals its endpoint distance gives a geodesic segment after translation and arclength reparametrization.

## Proof

**Proof technique:** direct.

1.1 **Uniqueness of short geodesics.** Let $p,q\in X$ with $d(p,q)<\pi$ and let $g,g'$ be geodesic segments from $p$ to $q$, parametrized linearly on $[0,d(p,q)]$. Fix $t\in[0,d(p,q)]$, put $r=g(t)$ and $r'=g'(t)$, and consider the geodesic triangle with vertices $p,q,r$ whose sides are the segment $g'$ from $p$ to $q$ and the two subarcs of $g$ from $p$ to $r$ and from $r$ to $q$; its side lengths are $d(p,q)$, $d(p,r)=t$ and $d(r,q)=d(p,q)-t$, so its perimeter is $2d(p,q)<2\pi$ and its spherical comparison triangle is degenerate, with $\bar r$ lying on the side $[\bar p,\bar q]$ at distance $t$ from $\bar p$. The comparison point of $r'$ is the point of $[\bar p,\bar q]$ at distance $t$ from $\bar p$, because $r'$ lies on the side $g'$ at that distance from $p$; by degeneracy this comparison point equals $\bar r$. The CAT(1) inequality applied to the pair $(r,r')$ of points of this triangle gives $d(r,r')\le d_S(\bar r,\bar r)=0$, so $r=r'$. Since $t$ was arbitrary, $g=g'$ as linearly parametrized segments; hence geodesics between points at distance $<\pi$ are unique up to reparametrization. [F1, F2, F3, algebra]

1.2 **Hinge estimate for one common initial point.** Fix $p\in X$ and $\ell<\pi$, let $q,q'\in X$ satisfy $d(p,q),d(p,q')\le\ell$ and $\Delta:=d(q,q')<2\pi-2\ell$, and let $c,c'$ be the linear parametrizations of the unique geodesic segments from $p$ to $q$ and to $q'$. If $d(q,q')$ is small enough that $d(p,q),d(p,q'),\Delta$ form an admissible triangle with perimeter $<2\pi$, then the triangle with vertices $p,q,q'$ and sides $c,c'$ and a segment from $q'$ to $q$ is a geodesic triangle of perimeter $\le2\ell+\Delta<2\pi$, and the CAT(1) inequality applied to the pair of its points $c(t),c'(t)$ gives $d(c(t),c'(t))\le d_S(\bar c(t),\bar c'(t))$, where $\bar c(t),\bar c'(t)$ lie on the comparison sides at distances $t\,d(p,q)$ and $t\,d(p,q')$ from $\bar p$. With $\bar\gamma$ the model angle at $\bar p$, the cosine rule [F2] gives $\cos d_S(\bar c(t),\bar c'(t))=\cos(tL)\cos(tL')+\sin(tL)\sin(tL')\cos\bar\gamma$ and $\cos\bar\gamma=(\cos\Delta-\cos L\cos L')/(\sin L\sin L')$, where $L=d(p,q)$, $L'=d(p,q')$; the right-hand side is jointly continuous in $(t,L,L',\Delta)$ on the compact family and equals $1$ when $\Delta=0$ and $L=L'$, while for $L=0$ or $L'=0$ the bound $d(c(t),c'(t))\le t(L+L')$ is immediate; hence $\sup_{t\in[0,1]}d(c(t),c'(t))\to0$ as $(\Delta,L-L')\to0$. [F1, F2, F3, algebra]

2.1 **Continuous dependence of clause (i).** Let $p_k\to p$, $q_k\to q$ with $d(p,q)<\pi$, and let $c_k,c$ be the linear parametrizations of $[p_k,q_k]$, $[p,q]$; for large $k$ all lengths are at most some $\ell<\pi$. Fix such $k$ and let $c_k'$ be the linear parametrization of the unique segment from $p_k$ to $q$, which exists for large $k$ because $d(p_k,q)\le d(p_k,p)+d(p,q)<\pi$. Then $d(c_k(t),c(t))\le d(c_k(t),c_k'(t))+d(c_k'(t),c(t))$ for all $t$: the first term tends to $0$ uniformly by the hinge estimate at the common initial point $p_k$ with endpoint distance $d(q_k,q)\to0$, and the second term tends to $0$ uniformly by the hinge estimate applied to the reversed segments, which have common initial point $q$ and endpoint distance $d(p_k,p)\to0$. Hence the linear parametrizations of $[p_k,q_k]$ converge uniformly to that of $[p,q]$. [step 1.2, F5, F3, algebra]

2.2 **A unit-speed local geodesic minimizes on every short interval.** Assume the speed is $1$ and fix $s<t$ in $I$ with $t-s\le\pi$. A finite subdivision into local isometry intervals shows that $c|_{[s,t]}$ is $1$-Lipschitz and has length $t-s$. Let $S=\{u\in[s,t]:c|_{[s,u]}\text{ is a geodesic}\}$. It contains an initial interval by local isometry, and it is closed: the distance equalities on $[s,u]$ pass to the limit as $u$ increases or decreases to an endpoint. Put $u_0=\sup S\in S$. If $u_0<t$, choose $0<\varepsilon<u_0-s$ with $u_0+\varepsilon<t$, $u_0+\varepsilon-s<\pi$, and $c|_{[u_0-\varepsilon,u_0+\varepsilon]}$ isometric. This is possible since $u_0-s<t-s\le\pi$. The triangle with vertices $c(s),c(u_0),c(u_0+\varepsilon)$ and its two indicated subarcs has perimeter at most $2(u_0+\varepsilon-s)<2\pi$. In its model let $\bar\beta$ be the angle at $\bar c(u_0)$. The local isometry gives $d(c(u_0-\sigma),c(u_0+\tau))=\sigma+\tau$ for small positive $\sigma,\tau<\varepsilon$. Comparison and the cosine rule therefore force $\bar\beta=\pi$: any smaller angle gives a model cross-distance strictly less than $\sigma+\tau$. Thus the opposite side has length $u_0+\varepsilon-s$, and the whole subarc $c|_{[s,u_0+\varepsilon]}$ minimizes. Indeed, a strict shortcut between any two of its points, combined with the remaining subarcs, would make its endpoint distance smaller than its length. This contradicts the definition of $u_0$. Hence $u_0=t$ and $d(c(s),c(t))=t-s$. [F1, F2, F3, F4, F7, step 1.1, algebra]

3.1 **Clause (ii) with arbitrary speed.** If $\lambda=0$, the map is locally constant and therefore constant on the connected interval $I$: the inverse image of each attained value is open and its complement is a union of such open fibers. If $\lambda>0$, set $J=\lambda I$ and $\tilde c(u)=c(u/\lambda)$. This is unit-speed locally; finite partitions show that lengths of corresponding compact restrictions agree. For $s<t$ in $I$, a finite local-isometry subdivision gives $L(c|_{[s,t]})=\lambda(t-s)\le L(c)\le\pi$. Applying step 2.2 to $\tilde c|_{[\lambda s,\lambda t]}$ gives $d(c(s),c(t))=\lambda(t-s)$. Empty and one-point intervals have no unequal pair to test. This proves the distance equality and the stated segment interpretation. [step 2.2, F1, F3, F4, F7, algebra]

4.1 **Clause (iii): $\ell\ge2\pi$.** Suppose a nonconstant closed local geodesic $c\colon S^1_\ell\to X$ had $\ell<2\pi$, and put $p=c(0)$, $q=c(\ell/2)$; the arcs $\alpha(\theta)=c(\theta)$ and $\beta(\theta)=c(\ell-\theta)$, $\theta\in[0,\ell/2]$, are local geodesics of length $\ell/2<\pi$, hence geodesic segments from $p$ to $q$ by step 3.1, and $d(p,q)\le\ell/2<\pi$. Since $d(p,\alpha(\theta))=\theta=d(p,\beta(\theta))$ for all $\theta\in[0,\ell/2]$, step 1.1 (uniqueness) gives $c(\theta)=c(\ell-\theta)$ for every $\theta\in[0,\ell/2]$. But $c$ is locally isometric at $p$, so for small $\theta>0$ with $2\theta<\ell$ one has $d(c(\theta),c(-\theta))=2\theta$, where $c(-\theta):=c(\ell-\theta)$; this contradicts $c(\theta)=c(\ell-\theta)$ and $\theta>0$. Hence $\ell\ge2\pi$. [step 3.1, step 1.1, F1, algebra]

4.2 **Clause (iii): diameter at least $\pi$.** Let $c$ be as in clause (iii) with $\ell\ge2\pi$ and fix $\theta_0$; the restriction of $c$ to $[\theta_0,\theta_0+\pi]$ is a local geodesic of length $\pi$ (its length equals the parameter length by the first paragraph of step 2.2), so step 3.1 gives $d(c(\theta_0),c(\theta_0+\pi))=\pi$. Hence the image of $c$ has diameter at least $\pi$, and by definition of diameter a nonconstant closed local geodesic is never contained in a ball of diameter $<\pi$. [step 3.1, step 2.2, F6, algebra]

5.1 **Conclusion.** Clause (i) is step 2.1; clause (ii) is step 3.1; clause (iii) is steps 4.1 and 4.2. Therefore in a CAT(1) space short geodesics are unique and depend continuously on their endpoints, every constant-speed local geodesic of length at most $\pi$ minimizes between its points, and every nonconstant closed local geodesic has length at least $2\pi$ and diameter at least $\pi$. [step 2.1, step 3.1, step 4.1, step 4.2, F1] ∎
