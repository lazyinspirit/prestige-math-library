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
  - thm-cauchy-schwarz-and-the-euclidean-norm
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
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
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

[F6] [[thm-rationals-countable]]: $\mathbb Q$ is countably infinite. [[thm-product-of-countable]]: a product of two at most countable sets is at most countable, without choice. [[lem-countable-iff-surjection-from-n]]: every nonempty at most countable set has a surjection from $\mathbb N$, and each nonempty fiber has a least index.

[F7] [[lem-rat-embeds-dense]]: the rationals embed as an ordered subfield of the reals, and every nonempty open real interval contains a rational.

[F8] [[cor-bolzano-weierstrass-in-rn]]: every bounded sequence in $\mathbb R^k$ has a convergent subsequence, and this corollary uses no choice principle.

[F9] [[def-euclidean-inner-product]]: $\mathbb R^k$ consists of functions on $\{0,\ldots,k-1\}$, the Euclidean inner product is $a\cdot b=\sum_{i<k}a(i)b(i)$, and the Euclidean norm is $\|a\|_2=\sqrt{a\cdot a}$.

[F10] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|a\cdot b|\le\|a\|_2\|b\|_2$; the Euclidean norm is a norm, in particular it satisfies the triangle inequality, and for $k\ge1$ its induced metric is the Euclidean metric.

## Proof

**Given:** The finite polytope and boundary point in the Statement.

1.1 Enumerate $X$ as $x_1,\dots,x_m$ and, for $\lambda\in\mathbb R^m$, write $\lambda_j:=\lambda(j-1)$ for $1\le j\le m$. Let $\Delta=\{\lambda\in[0,1]^m:\sum_{j=1}^m\lambda_j=1\}$. The set $\Delta$ is nonempty (take $\lambda_1=1$ and all other coordinates zero) and bounded. Its coordinate maps and sum map are continuous, since each coordinate inequality $|\lambda_j-\lambda'_j|\le\|\lambda-\lambda'\|_2$ follows from the norm formula [F9], while $|\sum_j(\lambda_j-\lambda'_j)|\le m\|\lambda-\lambda'\|_2$ follows from the real triangle inequality; hence $\Delta$, an intersection of their closed inverse images, is closed. By [F1], $\Delta$ is compact. For $\lambda,\lambda'\in\Delta$, the triangle inequality and coordinate bound give
$$\left\|\sum_j\lambda_jT(x_j)-\sum_j\lambda'_jT(x_j)\right\|_2\le\sum_j|\lambda_j-\lambda'_j|\,\|T(x_j)\|_2\le\|\lambda-\lambda'\|_2\sum_j\|T(x_j)\|_2,$$
so the map $\lambda\mapsto\sum_j\lambda_jT(x_j)$ is continuous. Thus [F2] makes its image $K$ compact; [F3] makes $K$ closed. [given, F1, F2, F3, F4, F9, F10, algebra]

1.2 For each natural $r\le k$, define $P_r:=\{f:r\to\mathbb Q\}$. The set $P_0=\{\varnothing\}$ is finite. Restriction and the last coordinate give a bijection $P_{r+1}\to P_r\times\mathbb Q$, namely $f\mapsto(f|_r,f(r))$; its inverse extends $g:r\to\mathbb Q$ by the specified last value. By induction on $r$, the binary-product result [F6] makes every $P_r$ at most countable. Since $P_k$ contains the zero function, [F6] supplies one surjection $q:\mathbb N\to P_k=\mathbb Q^k$. Embed its values coordinatewise in $\mathbb R^k$ using [F7] and write them as $q_j$. These vectors are dense: for $p\in\mathbb R^k$ and $\varepsilon>0$, each interval $(p(i)-\varepsilon/(2k),p(i)+\varepsilon/(2k))$, $i<k$, contains a rational by [F7]. Select these finitely many coordinates by induction on $i<k$, obtaining $a\in P_k$. Then $\|a-p\|_2^2<k(\varepsilon/(2k))^2<\varepsilon^2$ by [F9], so some $q_j=a$ lies in $B(p,\varepsilon)$. Only finite induction and a single enumeration are used; no countable family of selections is made. [given, F6, F7, F9, algebra]

2.1 Fix an integer $n\ge1$. Noninteriority of $\mu$ gives a point $p\notin K$ with $\|p-\mu\|_2<1/(2n)$. Since $K$ is closed, its complement is open, so some ball $B(p,\rho)$ of radius $\rho>0$ lies outside $K$. Set $r=\tfrac12\min\{\rho,1/n-\|p-\mu\|_2\}>0$. Step 1.2 gives a rational vector $q_j\in B(p,r)$; then $q_j\notin K$ and $\|q_j-\mu\|_2<1/n$. Thus $J_n=\{j\in\mathbb N:q_j\notin K,\ \|q_j-\mu\|_2<1/n\}$ is nonempty. This argument proves nonemptiness separately for each $n$ without choosing a sequence of $p,\rho,r$. Let $j_n$ be the least member of $J_n$ and set $y_n=q_{j_n}$. This least-index construction uses no choice and $y_n\to\mu$. [given, F6, F9, F10, step 1.1, step 1.2, algebra]

3.1 For $z,z'\in K$, the triangle inequality gives $\|y_n-z\|_2\le\|y_n-z'\|_2+\|z-z'\|_2$, and exchanging $z,z'$ gives $\bigl|\|y_n-z\|_2-\|y_n-z'\|_2\bigr|\le\|z-z'\|_2$. Hence $z\mapsto\|y_n-z\|_2$ is continuous on $K$ in its Euclidean metric. The nonempty compact set $K$ therefore has a minimizer $z_n\in K$ by [F5]. It is unique: if distinct $z,z'\in K$ both minimize, convexity puts $(z+z')/2$ in $K$ and
$\|y_n-(z+z')/2\|_2^2=(\|y_n-z\|_2^2+\|y_n-z'\|_2^2)/2-\|z-z'\|_2^2/4$
is strictly smaller. For any $v\in K$ and $0<s\le1$, convexity gives $z_n+s(v-z_n)\in K$. Minimality then implies
$\|y_n-z_n\|_2^2\le\|y_n-z_n-s(v-z_n)\|_2^2$;
expanding the inner products, dividing by $s$, and letting $s\downarrow0$ gives
$(y_n-z_n)\cdot(v-z_n)\le0$. [given, F5, F9, F10, step 1.1, step 2.1, algebra]

4.1 Since $\mu\in K$, minimality gives $\|y_n-z_n\|_2\le\|y_n-\mu\|_2$, so the triangle inequality gives $\|z_n-\mu\|_2\le2\|y_n-\mu\|_2\to0$. Put $u_n=(y_n-z_n)/\|y_n-z_n\|_2$; the denominator is positive because $y_n\notin K$, and homogeneity of the norm gives $\|u_n\|_2=1$. Thus $(u_n)$ is bounded in the Euclidean metric; [F8] gives a subsequence $u_{n_j}$ converging to $u$. The reverse triangle inequality, obtained by applying the triangle inequality in both orders, gives $\bigl|\|u_{n_j}\|_2-\|u\|_2\bigr|\le\|u_{n_j}-u\|_2$, hence $\|u\|_2=1$. For every $v\in K$, step 3.1 gives $u_{n_j}\cdot(v-z_{n_j})\le0$. By [F10],
$$|u_{n_j}\cdot(v-z_{n_j})-u\cdot(v-\mu)|\le\|u_{n_j}-u\|_2\,\|v-z_{n_j}\|_2+\|u\|_2\,\|\mu-z_{n_j}\|_2\longrightarrow0,$$
since $z_{n_j}\to\mu$ and hence $(v-z_{n_j})$ is bounded. Passing to the limit gives $u\cdot(v-\mu)\le0$. Taking $v=T(x)\in K$ proves the claimed support inequality. [given, F8, F9, F10, step 2.1, step 3.1, algebra] ∎
