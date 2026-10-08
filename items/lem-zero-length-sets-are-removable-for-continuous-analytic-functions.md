---
id: lem-zero-length-sets-are-removable-for-continuous-analytic-functions
kind: lemma
title: "Compact sets of finite length are removable for continuous analytic functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-hausdorff-measure
  - thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume
  - def-countable-choice
  - def-modulus-of-continuity-and-osgood-condition
  - def-mobius-transformation
  - def-chordal-metric-riemann-sphere
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - rem-riemann-sphere-one-point-compactification
  - cor-cauchy-theorem-convex-domain
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-compact-subset-is-closed-and-bounded
  - cor-compact-domain-maps-are-uniformly-continuous
  - thm-liouville-bounded-entire-function
axiom_use: "Countable Choice is assumed for the countable selections in the finite-length square-covering argument and to use the countable subadditivity of Lebesgue outer measure in the elementary proof that a planar open disk has infinite one-dimensional Hausdorff measure. No full Choice is used; compactness extracts a finite subcover from each Hausdorff cover."
proof_strategy: direct
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: "Malik Younsi, On removable sets for holomorphic functions, EMS Surveys in Mathematical Sciences 2 (2015), 219–254"
      url: "https://math.hawaii.edu/~myounsi/Removable.pdf"
      locator: "§3.2, Theorem 3.4 (Besicovitch) and Corollary 3.5, printed pp. 232–233: finite-length compact sets are removable for continuous analytic functions; the displayed proof is explicitly a sketch."
    - title: "John B. Garnett, Analytic Capacity and Measure, Lecture Notes in Mathematics 297, Springer (1972)"
      url: "https://link.springer.com/book/10.1007/BFb0060912"
      locator: "Chapter III, §II, cited by Younsi §3.2 as the complete proof of the finite-length covering argument; the available Springer preview does not expose the chapter text, which was not read. The finite-cover polygon-cell proof below is independent of that unread chapter."
    - title: "Lars Ahlfors and Arne Beurling, Conformal invariants and function-theoretic null-sets, Acta Mathematica 83 (1950), 101–129"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5710-11511_2006_Article_BF02392634.pdf"
      locator: "§6, Theorems 11 and 11′, printed pp. 121–122: zero-length removability for linear sets and sets on analytic curves; this corroborates only special zero-length cases and is not used for the general finite-length claim."
---

## Statement

Assume Countable Choice. Let $K\subseteq\widehat{\mathbb C}$ be compact and have finite one-dimensional Hausdorff measure for the chordal metric $\chi$ of [[def-chordal-metric-riemann-sphere]]:
$$\mathcal H^1_\chi(K)<\infty.$$
If $f:\widehat{\mathbb C}\to\mathbb C$ is continuous and holomorphic on $\widehat{\mathbb C}\setminus K$, then $f$ is constant. In particular, the conclusion holds when $\mathcal H^1_\chi(K)=0$.

## Facts & Assumptions

**Given:** The compact set $K$, the continuous function $f$, and the Countable Choice assumption in the statement.

[F1] Hausdorff content is the infimum of the sums of diameters over countable covers by sets of small diameter, and $\mathcal H^1$ is its increasing small-scale limit; it is monotone under inclusion. ([[def-hausdorff-measure]])

[F2] Under Countable Choice, Lebesgue outer measure $\lambda_2^*$ is monotone and countably subadditive on all subsets of $\mathbb R^2$, and agrees with area on half-open rectangles. No measurability of covering sets is required. ([[def-countable-choice]], [[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]])

[F3] The Riemann sphere is compact, and the chordal metric is the Euclidean chord distance under stereographic projection. For finite $z,w$, the stereographic coordinates give
$$\chi(z,w)=\frac{2|z-w|}{\sqrt{(1+|z|^2)(1+|w|^2)}}.$$
Indeed, their unit-sphere dot product is $\bigl(4\operatorname{Re}(z\overline w)+(|z|^2-1)(|w|^2-1)\bigr)/\bigl((1+|z|^2)(1+|w|^2)\bigr)$, so $\|\Sigma(z)-\Sigma(w)\|^2=2-2\Sigma(z)\cdot\Sigma(w)=4|z-w|^2/((1+|z|^2)(1+|w|^2))$. ([[rem-riemann-sphere-one-point-compactification]], [[def-chordal-metric-riemann-sphere]], [[thm-stereographic-projection-riemann-sphere-homeomorphism]])

[F4] A compact planar set of finite $\mathcal H^1$ has, at every sufficiently small scale $\eta$, a finite cover by open axis-parallel squares of sides below $\eta$ with uniformly bounded sum of sides. Indeed, take a Hausdorff cover of diameters below $\eta/4$ and sum at most $\mathcal H^1(E)+1$; enclose each nonempty member meeting $E$ in an open square of side at most three times its diameter plus a positive summable error of total at most $\eta$. Compactness extracts a finite subcover. Squares may overlap; the proof below partitions their union instead of asserting individual boundaries avoid $E$. This follows directly from [F1], without Garnett's inaccessible covering argument.

[F5] For a Möbius map $M(z)=1/(z-p)$ with finite pole $p$, the chordal distance satisfies
$$\chi(Mz,Mw)=\chi(z,w)\,q_p(z)q_p(w),\qquad q_p(z)=\frac{\sqrt{1+|z|^2}}{\sqrt{1+|z-p|^2}},$$
with the formula interpreted continuously at $p$ and $\infty$. Both $q_p$ and $1/q_p$ are bounded on the sphere: $1+|z|^2\le2(1+|p|^2)(1+|z-p|^2)$ and the same inequality with $z$ and $z-p$ interchanged. Thus $M$ is chordally bi-Lipschitz. The formula follows by substituting $Mz=1/(z-p)$ and $Mw=1/(w-p)$ in [F3]. A Lipschitz map sends a finite-Hausdorff-measure set to one of finite Hausdorff measure, directly by mapping the covers in [F1]. ([[def-mobius-transformation]], [[def-chordal-metric-riemann-sphere]], [[thm-stereographic-projection-riemann-sphere-homeomorphism]], [F1])

[F6] On a bounded planar set $B_R=\{|z|\le R\}$, Euclidean and chordal distances obey
$$ 2(1+R^2)^{-1}|z-w|\le\chi(z,w)\le 2|z-w|.$$
Thus finite chordal $\mathcal H^1$ on a compact subset of $B_R$ implies finite Euclidean $\mathcal H^1$. ([[def-chordal-metric-riemann-sphere]], [[thm-stereographic-projection-riemann-sphere-homeomorphism]], [F1])

[F7] The integral of a holomorphic function around every closed rectifiable contour in a convex open domain is zero ([[cor-cauchy-theorem-convex-domain]]).

[F8] The continuous image of a compact space is compact, and compact subsets of a metric space are bounded. ([[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-compact-subset-is-closed-and-bounded]])

[F9] A continuous map from a compact Hausdorff space to a uniform space is uniformly continuous; the chordal topology is the sphere topology, and the formula in [F3] gives $\chi(z,w)\le2|z-w|$ for finite $z,w$. ([[cor-compact-domain-maps-are-uniformly-continuous]], [[def-chordal-metric-riemann-sphere]], [[thm-stereographic-projection-riemann-sphere-homeomorphism]])

[F10] Every bounded entire function is constant. ([[thm-liouville-bounded-entire-function]])

## Proof

**Proof technique:** direct, using the Besicovitch finite-length covering argument.

1.1 A planar square of area $A>0$ has infinite one-dimensional Hausdorff measure: if sets of diameters $d_j\le\delta$ cover it, each nonempty covering set lies in a half-open square of side $2d_j+\epsilon2^{-j}$, where $\epsilon>0$. By [F2] and countable subadditivity, $A\le\sum_j(2d_j+\epsilon2^{-j})^2$; letting $\epsilon\downarrow0$ gives $A\le4\sum_jd_j^2\le4\delta\sum_jd_j$, so the covering sums tend to infinity as $\delta\downarrow0$. A chordal chart contains such a square with comparable distances by [F6]; hence $\mathcal H^1_\chi(\widehat{\mathbb C})=\infty$ and $K\ne\widehat{\mathbb C}$. [F2, F3, F6, algebra]

1.2 If $K=\varnothing$, compactness and Liouville [F8, F10] already make $f$ constant; hence assume $K\ne\varnothing$. Choose $p\in\widehat{\mathbb C}\setminus K$ and let $M$ be the identity if $p=\infty$, and $M(z)=1/(z-p)$ otherwise. Then $K_0:=M(K)$ is compact and avoids $\infty$. By [F5], $M$ is chordally bi-Lipschitz, so [F1] gives $\mathcal H^1_\chi(K_0)<\infty$; since $K_0$ lies in a bounded disk, [F6] gives $\mathcal H^1_{\rm Eucl}(K_0)<\infty$. Put $g=f\circ M^{-1}$. Möbius maps and their inverses are conformal off their poles, so $g$ is continuous on the sphere and holomorphic on $\mathbb C\setminus K_0$. [F1, F3, F5, F6, F8, F10, choose, algebra]

2.1 Choose a closed square $S$ whose interior contains $K_0$. Fix $z\in S^\circ\setminus K_0$ and put $d=\operatorname{dist}(z,K_0)>0$. At scales $\eta_n\downarrow0$, apply [F4] to obtain finite open-square covers of $K_0$, discarding squares missing it. Their side sums are bounded by a constant $B$, their diameters tend to zero, and every square lies within $\sqrt2\eta_n$ of $K_0$. For large $n$ their closures lie in $S^\circ$ and miss $z$ by distance at least $d/2$. Write $O_n$ for their union. Its boundary is polygonal and misses $K_0$, since the open squares cover that compact set. [F1, F4, step 1.2, choose]

3.1 Partition $O_n$ by assigning its points to the first covering square containing them and removing all earlier squares. Subdividing the finitely many remaining pieces gives polygonal cells with disjoint interiors, each inside one original square. Their boundary edges are subsegments of the original square edges; each such edge segment occurs at most twice, once on each side. Thus the total cell perimeter is at most twice the sum of square perimeters, at most $8B$. Coincident edges are consolidated, zero-area pieces omitted, and holes carry the negative orientation. Internal edges cancel in the sum of the oriented cell boundaries. The construction does not require a cell boundary to miss $K_0$, because only continuity is used on those boundaries. [F4, step 2.1, construct, algebra]

4.1 The function $H(\zeta)=g(\zeta)/(\zeta-z)$ is holomorphic on the region between $\partial S$, $\partial O_n$ and a small circle about $z$. Its compact boundary misses $K_0$. Triangulate after deleting that circle and subdividing away from $K_0$; Cauchy's theorem [F7] cancels internal edges. Let the small circle shrink; continuity of $g$ gives its integral tending to $2\pi i g(z)$. Hence $2\pi i g(z)=\int_{\partial S}H\,d\zeta-\int_{\partial O_n}H\,d\zeta$. The last integral equals the sum of the oriented cell integrals by step 3.1. On each cell choose a point $a$; the integral of the constant $H(a)$ around its complete polygonal boundary is zero. Uniform continuity of $H$ on a fixed compact neighborhood of $K_0$ therefore bounds the sum by $8B\omega_H(\sqrt2\eta_n)$, which tends to zero. No holomorphicity inside a covering square or cell is assumed. [F7, F9, step 2.1, step 3.1, choose, algebra]

5.1 It follows that $g(z)=(2\pi i)^{-1}\int_{\partial S}g(\zeta)/(\zeta-z)\,d\zeta$ for every $z\in S^\circ\setminus K_0$. The right-hand side is holomorphic on $S^\circ$: on each compact subset the kernel and its difference quotients converge uniformly on the finite contour, so differentiation under its integral is justified. Finite $\mathcal H^1(K_0)$ implies planar area zero, since a cover of diameter at most $\delta$ and bounded diameter sum has area cost at most $C\delta(\mathcal H^1(K_0)+1)$ by [F2]. Thus its complement is dense, and continuity extends this equality across $K_0$. Hence $g$ is entire. [F1, F2, F9, step 4.1, algebra]

6.1 The function $g$ is entire and continuous on the compact sphere, so [F8] makes its image compact in $\mathbb C$ and bounded. Liouville's theorem [F10] makes $g$ constant. Since $M$ is bijective, $f=g\circ M$ is constant. [F3, F8, F10, step 5.1] ∎
