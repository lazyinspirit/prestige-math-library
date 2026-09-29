---
id: thm-cut-locus-of-a-point-is-closed
kind: theorem
title: The cut locus of a point is closed
status: published
origin: pipeline
deps:
  - cor-inner-product-induces-a-norm
  - def-countable-choice
  - def-cut-point-and-cut-locus-of-a-point
  - def-metric-convergence
  - def-metric-space
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - def-riemannian-metric-and-riemannian-manifold
  - lem-finite-dimensional-unit-spheres-are-sequentially-compact
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - thm-cut-time-is-positive-and-continuous
  - thm-hopf-rinow
  - thm-metric-sequential-closure
  - thm-riemannian-distance-is-a-metric
  - thm-the-riemannian-distance-topology-is-the-manifold-topology
  - thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173-190: the cut locus of a point and its point-set behaviour, including closedness."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 23, sections 23.2-23.3, printed pp.163-172: the cut locus, the cut time, and the continuity of the cut time used here."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume exactly the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$,
carried by the declared exponential-domain, cut-time and sequential-closure
suppliers. Let $(M,g)$ be a complete, connected, boundaryless,
finite-dimensional Riemannian manifold, let $p\in M$, and let
$$\operatorname{Cut}(p)=\{\exp_p(c_p(v)v):v\in S_pM,\ c_p(v)<+\infty\}$$
be the cut locus of $p$ from
[[def-cut-point-and-cut-locus-of-a-point]]. Then $\operatorname{Cut}(p)$ is
closed in the metric space $(M,d_g)$.

In dimension zero $S_pM=\varnothing$, so $\operatorname{Cut}(p)=\varnothing$,
which is closed. No compactness of $M$ is assumed; the only compactness used is
the sequential compactness of the finite-dimensional unit sphere $S_pM$.

## Facts & Assumptions

**Given:** The complete connected boundaryless finite-dimensional Riemannian manifold $(M,g)$, the point $p\in M$, the cut time $c=c_p:S_pM\to(0,+\infty]$, the unit sphere $S_pM$ and the cut locus $\operatorname{Cut}(p)$.

[A1] The choice assumption is $\mathrm{AC}_\omega$ of [[def-countable-choice]], inherited through the declared suppliers and spent in this proof exactly at the two points flagged in steps 1.1 and 5.1; no full Axiom of Choice and no dependent choice is used.

[F1] The cut locus is $\operatorname{Cut}(p)=\{\exp_p(c_p(v)v):v\in S_pM,\ c_p(v)<+\infty\}$, and along the unit-speed radial geodesic in direction $v$ one has $\gamma_v(t)=\exp_p(tv)$ ([[def-cut-point-and-cut-locus-of-a-point]]).

[F2] If the cut time $c_p(v)$ is finite then $c_p(v)\in A_p(v)=\{t\ge0:d_g(p,\gamma(t))=t\}$, that is $d_g(p,\gamma_v(c_p(v)))=c_p(v)$ ([[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]]).

[F3] $d_g$ is a finite metric on the connected Riemannian manifold $M$ ([[thm-riemannian-distance-is-a-metric]]), so it satisfies (M1) separation, (M2) symmetry and (M3) the triangle inequality ([[def-metric-space]]); convergence $x_k\to x$ in $(M,d_g)$ means $d_g(x_k,x)\to0$ in $\mathbb R$ ([[def-metric-convergence]]).

[F4] $S_pM$ is sequentially compact: every sequence of unit tangent vectors at $p$ has a subsequence converging in the norm metric of $T_pM$ to a unit tangent vector at $p$ ([[lem-finite-dimensional-unit-spheres-are-sequentially-compact]]).

[F5] The cut time is positive at every unit vector, and it is continuous in the extended sense: whenever $v_k\to v$ in $S_pM$, if $c(v)<+\infty$ then $c(v_k)\to c(v)$, while if $c(v)=+\infty$ then for every $M_0>0$ there is $k_0$ with $c(v_k)>M_0$ for all $k\ge k_0$ ([[thm-cut-time-is-positive-and-continuous]]).

[F6] On the complete manifold $(M,g)$ the Hopf–Rinow equivalent condition 3 holds: for every point of $M$ the fibre exponential domain is all of the tangent space, so $\mathcal E_p=T_pM$ ([[thm-hopf-rinow]]).

[F7] The exponential map is smooth on its domain, hence continuous; consequently each fibre restriction $\exp_p$ is smooth on the open set $\mathcal E_p$ ([[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]]).
The target manifold topology is the $d_g$ topology
([[thm-the-riemannian-distance-topology-is-the-manifold-topology]]), so this
continuity also gives convergence in $(M,d_g)$.

[F8] On $T_pM$ the Riemannian metric is a positive definite symmetric bilinear form ([[def-riemannian-metric-and-riemannian-manifold]]), the pointwise norm is $|v|_g=\sqrt{g(v,v)}$ ([[def-pointwise-norm-and-angle-from-a-riemannian-metric]]), and the induced inner-product norm satisfies $|\lambda v|_g=|\lambda|\,|v|_g$ and $|u+v|_g\le|u|_g+|v|_g$ ([[cor-inner-product-induces-a-norm]]).

[F9] In a metric space a subset $F$ is closed if and only if it is sequentially closed, that is, if and only if every sequence in $F$ that converges in the ambient space has its limit in $F$ ([[thm-metric-sequential-closure]]).

## Proof

**Proof technique:** sequential closedness, read through the metric-space equivalence between closed and sequentially closed sets: a convergent sequence of cut points has cut times equal to the distances to $p$, hence bounded; compactness of the unit sphere produces a limit direction; continuity of the cut time makes the limiting cut time finite; and continuity of the exponential map realises the limit as the corresponding cut point.

1.1 A convergent sequence of cut points and its cut times. [A1, F1, F2, F3, given]
Let $(q_k)$ be a sequence in $\operatorname{Cut}(p)$ with $q_k\to q$ in $(M,d_g)$. For every $k$ the set $\{v\in S_pM:c_p(v)<+\infty,\ \exp_p(c_p(v)v)=q_k\}$ is nonempty by [F1], and selecting one $v_k$ for each $k\in\mathbb N$ is exactly the countable choice permitted by [A1]; then $c(v_k)<+\infty$ and $q_k=\exp_p(c(v_k)v_k)$ for every $k$. By [F2] a finite cut time is attained, $c(v_k)\in A_p(v_k)$, so $c(v_k)=d_g(p,\gamma_{v_k}(c(v_k)))=d_g(p,\exp_p(c(v_k)v_k))=d_g(p,q_k)$, using $\gamma_v(t)=\exp_p(tv)$ [F1]. Since $d_g$ is a metric [F3], (M2) and (M3) give $|d_g(p,q_k)-d_g(p,q)|\le d_g(q_k,q)$ for every $k$, and $d_g(q_k,q)\to0$ because $q_k\to q$ [F3]; hence $c(v_k)\to d_g(p,q)=:L$ with $L\in[0,+\infty)$, so the real sequence $(c(v_k))$ is bounded. [A1, F1, F2, F3, given]

2.1 A convergent subsequence of directions. [F3, F4, given, step 1.1]
Since $(c(v_k))$ is bounded (step 1.1) and $S_pM$ is sequentially compact [F4], there is a subsequence $v_{k_j}\to v$ with $v\in S_pM$. A subsequence of the convergent sequence $(c(v_k))$ has the same limit $L$ [F3, step 1.1], so $c(v_{k_j})\to L$. Relabelling that subsequence, assume from now on that $v_k\to v$ in $S_pM$ and $c(v_k)\to L$. [F3, F4, given, step 1.1]

3.1 The limiting cut time is finite. [F3, F5, given, step 2.1]
Suppose $c(v)=+\infty$. By the infinite-value clause of the continuity of the cut time [F5], for every $M_0>0$ there is $k_0$ with $c(v_k)>M_0$ for all $k\ge k_0$; taking $M_0=L+1$ contradicts $c(v_k)\to L$ (step 2.1) [F3]. Hence $c(v)<+\infty$, and the finite-value clause of [F5] gives $c(v_k)\to c(v)$. The two limits $c(v)$ and $L$ of the same sequence agree: for every $\varepsilon>0$ both $|c(v_k)-c(v)|<\varepsilon$ and $|c(v_k)-L|<\varepsilon$ hold for all large $k$, whence $|c(v)-L|<2\varepsilon$, and $\varepsilon>0$ was arbitrary. Therefore $c(v)=L<+\infty$. [F3, F5, given, step 2.1]

4.1 The limit point is the corresponding cut point. [F1, F6, F7, F8, given, step 1.1, step 2.1, step 3.1]
Put $w_k:=c(v_k)v_k$ and $w:=c(v)v$. The vectors $w_k$ lie in $\mathcal E_p$ because $\exp_p(w_k)=q_k$ [F1], and by [F6] $\mathcal E_p=T_pM$, so also $w\in\mathcal E_p$. For the convergence $w_k\to w$, the norm estimates of [F8] give, since $|v_k|_g=|v|_g=1$ and $c(v_k)>0$, $$|w_k-w|_g=|c(v_k)v_k-c(v_k)v+c(v_k)v-c(v)v|_g\le c(v_k)\,|v_k-v|_g+|c(v_k)-c(v)|\,|v|_g=c(v_k)|v_k-v|_g+|c(v_k)-c(v)|,$$ and the right-hand side tends to $0$ because $c(v_k)$ is bounded by step 1.1, $v_k\to v$ (step 2.1) and $c(v_k)\to c(v)$ (step 3.1) [F8]. As $\exp_p$ is smooth, hence continuous, on $\mathcal E_p$ [F7], $\exp_p(w_k)\to\exp_p(w)$; but $\exp_p(w_k)=q_k\to q$ (steps 1.1 and 2.1), so $q=\exp_p(w)=\exp_p(c(v)v)=\gamma_v(c(v))$ by $\gamma_v(t)=\exp_p(tv)$ [F1]. [F1, F6, F7, F8, given, step 1.1, step 2.1, step 3.1]

5.1 Conclusion: the cut locus is closed. [F1, F9, given, step 4.1]
Step 4.1 exhibits the limit $q$ as $\exp_p(c(v)v)$ with $v\in S_pM$ a unit vector and $c(v)=L<+\infty$; therefore $q\in\operatorname{Cut}(p)$ by the definition of the cut locus [F1]. Since the convergent sequence $(q_k)$ in $\operatorname{Cut}(p)$ was arbitrary, $\operatorname{Cut}(p)$ is sequentially closed, and by the metric-space equivalence between closedness and sequential closedness [F9] it is closed in $(M,d_g)$. [F1, F9, given, step 4.1]

6.1 Boundary and choice audit. [A1, F1, F4, F5, F6, F9, given, step 1.1, step 3.1, step 4.1, step 5.1]
In dimension zero $T_pM=\{0_p\}$, so $|0_p|_g=0\ne1$ and $S_pM=\varnothing$; hence $\operatorname{Cut}(p)=\varnothing$ by [F1], and the empty set is closed in $(M,d_g)$ [F9], both because its complement $M$ is open and because the sequential criterion holds vacuously. The empty manifold has no point $p$. In dimension one the unit sphere has exactly two points and every step applies verbatim, the sequential compactness [F4] being immediate for a two-point set. Since $c$ takes values in $(0,+\infty]$ [F5], the limiting time $c(v)=L$ of step 3.1 is positive, so the degenerate value $L=0$ (which would force the cut point to be the base point $p$) does not occur, and all directions occurring above are unit vectors, so no constant geodesic arises. Completeness enters only through the global exponential domain [F6] referenced in step 4.1 and through the cut-time continuity theorem [F5]; no compactness of $M$ is assumed, the compactness used being that of the finite-dimensional sphere $S_pM$ [F4]. The choice audit: $\mathrm{AC}_\omega$ of [A1] is spent exactly twice, once in step 1.1, where one direction $v_k$ is selected from each of the countably many nonempty fibres over the $q_k$, and once in step 5.1 through the direction of [F9] that converts sequential closedness into closedness (contrapositively, one point is selected from each of the countably many nonempty sets $B(q,1/(n+1))\cap\operatorname{Cut}(p)$). [A1, F1, F4, F5, F6, F9, given, step 1.1, step 3.1, step 4.1, step 5.1]

$\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.173-190, develops the cut locus of a point; Datar, *Lectures on Riemannian Geometry*, Lecture 23, sections 23.2-23.3, printed pp.163-172, presents the cut locus and the cut time. The closedness of $\operatorname{Cut}(p)$ is proved above as sequential closedness, from the continuity of the cut time and the compactness of the finite-dimensional unit sphere; no source text is quoted.
