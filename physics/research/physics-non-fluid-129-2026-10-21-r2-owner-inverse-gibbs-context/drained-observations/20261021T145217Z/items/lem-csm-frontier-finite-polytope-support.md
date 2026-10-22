---
id: lem-csm-frontier-finite-polytope-support
kind: lemma
title: Supporting direction at a boundary point of a finite full-dimensional polytope
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-heine-borel-rn
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-compact-subset-is-closed-and-bounded
  - thm-metric-continuity-characterisations
  - thm-extreme-value-metric
  - thm-rationals-countable
  - thm-product-of-countable
  - lem-countable-iff-surjection-from-n
  - lem-rat-embeds-dense
  - cor-bolzano-weierstrass-in-rn
  - def-euclidean-inner-product
dependency_roles:
  thm-heine-borel-rn: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
  thm-compact-subset-is-closed-and-bounded: mathematical-premise
  thm-metric-continuity-characterisations: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-rationals-countable: mathematical-premise
  thm-product-of-countable: mathematical-premise
  lem-countable-iff-surjection-from-n: mathematical-premise
  lem-rat-embeds-dense: mathematical-premise
  cor-bolzano-weierstrass-in-rn: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
axiom_use: No choice principle is used; the rational approximants use least indices in a fixed countable enumeration, and the Bolzano–Weierstrass supplier states that its proof is choice-free.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Martin J. Wainwright and Michael I. Jordan, Graphical Models, Exponential Families, and Variational Inference"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/wainwright-jordan-fnt.pdf"
      locator: "§3.5.2 and Appendix B.1, printed pp. 62–63 and 257–258 / PDF pp. 68–70 and 263–264: finite-dimensional convex-support interiors and supporting-direction proof route."
    - title: "Charles J. Geyer, Stat 8931 (Exponential Families) Lecture Notes: Two Examples of Agresti"
      url: "https://www.stat.umn.edu/geyer/8931expfam/infinity.pdf"
      locator: "§4.6.3, printed pp. 55–56 / PDF pp. 56–57: relative interiors of convex-support faces and finite-parameter MLE locations."
verification:
  precheck: pass
---

## Statement

Let $X=\{x_1,\dots,x_m\}$ be finite and nonempty, let $k\ge1$, and let $T:X\to\mathbb R^k$ have full affine hull, meaning that the affine combinations $\sum_{j=1}^{m}a_jT(x_j)$ with $\sum_ja_j=1$ fill $\mathbb R^k$. Define the finite convex hull
$$K:=\left\{\sum_{j=1}^{m}\lambda_jT(x_j):\lambda_j\ge0,\ \sum_{j=1}^{m}\lambda_j=1\right\}.$$
If $\mu\in K$ is not an interior point of $K$ in $\mathbb R^k$, then there is a Euclidean unit vector $u\in\mathbb R^k$ such that $u\cdot(T(x)-\mu)\le0$ for every $x\in X$.

## Facts & Assumptions

**Given:** The finite set $X$, statistic $T$, full affine hull, finite convex hull $K$, and a point $\mu\in K$ that is not interior to $K$.

[F1] [[thm-heine-borel-rn]]: in $\mathbb R^n$ with its Euclidean metric, a subset is compact exactly when it is closed and bounded; the proof uses no choice principle.

[F2] [[thm-continuous-image-of-a-compact-space-is-compact]]: a continuous image of a compact metric space is compact.

[F3] [[thm-compact-subset-is-closed-and-bounded]]: compact subsets of metric spaces are closed and bounded.

[F4] [[thm-metric-continuity-characterisations]]: a map between metric spaces is continuous exactly when preimages of open sets are open; in particular preimages of closed sets are closed.

[F5] [[thm-extreme-value-metric]]: a continuous real function on a nonempty compact metric space attains its minimum.

[F6] [[thm-rationals-countable]], [[thm-product-of-countable]], and [[lem-countable-iff-surjection-from-n]]: $\mathbb Q^k$ has a fixed surjective enumeration $(q_j)_{j\in\mathbb N}$, with repetitions allowed.

[F7] [[lem-rat-embeds-dense]]: $\mathbb Q^k$ is dense in $\mathbb R^k$; this follows coordinatewise from the density of rational numbers.

[F8] [[cor-bolzano-weierstrass-in-rn]]: every bounded sequence in $\mathbb R^k$ has a convergent subsequence, and this corollary uses no choice principle.

[F9] [[def-euclidean-inner-product]]: the Euclidean inner product is $a\cdot b=\sum_{i=1}^k a_i b_i$ and the associated metric is induced by the Euclidean norm.

## Proof

**Given:** The finite polytope and boundary point in the Statement.

1.1 Enumerate $X$ as $x_1,\dots,x_m$ and let $\Delta=\{\lambda\in[0,1]^m:\sum_j\lambda_j=1\}$. The set $\Delta$ is bounded. Its coordinate maps and the sum map are continuous, since $|\lambda_j-\lambda'_j|\le\|\lambda-\lambda'\|_2$ and $|\sum_j(\lambda_j-\lambda'_j)|\le m\|\lambda-\lambda'\|_2$; hence $\Delta$, an intersection of their closed inverse images, is closed. By [F1], $\Delta$ is compact. The map $\lambda\mapsto\sum_j\lambda_jT(x_j)$ is continuous by the same finite-sum bound, so [F2] makes its image $K$ compact; [F3] makes $K$ closed. [given, F1, F2, F3, F4, F9, algebra]

2.1 For every integer $n\ge1$, noninteriority of $\mu$ gives a point outside $K$ within distance $1/(2n)$. Since $K$ is closed, its complement is open, so a sufficiently small ball around that point remains outside $K$. By density [F7], there is a rational vector $q_j$ outside $K$ with $\|q_j-\mu\|_2<1/n$. Thus $J_n=\{j\in\mathbb N:q_j\notin K,\ \|q_j-\mu\|_2<1/n\}$ is nonempty; let $j_n$ be its least member and set $y_n=q_{j_n}$. This least-index construction uses no choice and $y_n\to\mu$. [given, F6, F7, step 1.1, algebra]

3.1 For each $n$, the continuous function $z\mapsto\|y_n-z\|_2$ on the nonempty compact set $K$ attains a minimum at some $z_n\in K$ by [F5]. It is unique: if distinct $z,z'\in K$ both minimize, convexity puts $(z+z')/2$ in $K$ and
$\|y_n-(z+z')/2\|_2^2=(\|y_n-z\|_2^2+\|y_n-z'\|_2^2)/2-\|z-z'\|_2^2/4$
is strictly smaller. For any $v\in K$ and $0<s\le1$, convexity gives $z_n+s(v-z_n)\in K$. Minimality then implies
$\|y_n-z_n\|_2^2\le\|y_n-z_n-s(v-z_n)\|_2^2$;
expanding, dividing by $s$, and letting $s\downarrow0$ gives
$(y_n-z_n)\cdot(v-z_n)\le0$. [given, F5, F9, step 1.1, step 2.1, algebra]

4.1 Since $\mu\in K$, minimality gives $\|y_n-z_n\|_2\le\|y_n-\mu\|_2$, so $\|z_n-\mu\|_2\le2\|y_n-\mu\|_2\to0$. Put $u_n=(y_n-z_n)/\|y_n-z_n\|_2$; the denominator is positive because $y_n\notin K$, and $\|u_n\|_2=1$. By [F8], a subsequence $u_{n_j}$ converges to $u$; continuity of the norm gives $\|u\|_2=1$. For every $v\in K$, step 3.1 gives $u_{n_j}\cdot(v-z_{n_j})\le0$. Passing to the limit in the finite-coordinate inner product yields $u\cdot(v-\mu)\le0$. Taking $v=T(x)\in K$ proves the claimed support inequality. [given, F8, F9, step 2.1, step 3.1, algebra] ∎
