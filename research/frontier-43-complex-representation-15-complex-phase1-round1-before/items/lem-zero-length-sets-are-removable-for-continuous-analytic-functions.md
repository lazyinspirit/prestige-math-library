---
id: lem-zero-length-sets-are-removable-for-continuous-analytic-functions
kind: lemma
title: "Compact sets of finite length are removable for continuous analytic functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-hausdorff-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-countable-choice
  - def-modulus-of-continuity-and-osgood-condition
  - def-mobius-transformation
  - def-chordal-metric-riemann-sphere
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - rem-riemann-sphere-one-point-compactification
  - cor-cauchy-theorem-convex-domain
  - thm-cauchy-integral-formula-higher-derivatives
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-compact-subset-is-closed-and-bounded
  - cor-compact-domain-maps-are-uniformly-continuous
  - thm-liouville-bounded-entire-function
axiom_use: "Countable Choice is assumed for the countable selections in the finite-length square-covering argument and to use Lebesgue outer measure as a countably subadditive measure in the elementary proof that a planar open disk has infinite one-dimensional Hausdorff measure. No use of full Choice is claimed. The exact foundational strength of the square-covering result is an open source-verification obligation."
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Malik Younsi, On removable sets for holomorphic functions, EMS Surveys in Mathematical Sciences 2 (2015), 219–254"
      url: "https://math.hawaii.edu/~myounsi/Removable.pdf"
      locator: "§3.2, Theorem 3.4 (Besicovitch) and Corollary 3.5, printed pp. 232–233: finite-length compact sets are removable for continuous analytic functions; the displayed proof is explicitly a sketch."
    - title: "John B. Garnett, Analytic Capacity and Measure, Lecture Notes in Mathematics 297, Springer (1972)"
      url: "https://link.springer.com/book/10.1007/BFb0060912"
      locator: "Chapter III, §II, cited by Younsi §3.2 as the complete proof of the finite-length covering argument; the available Springer preview does not expose the chapter text, so this argument remains unverified here."
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

[F2] Under Countable Choice, Lebesgue outer measure on $\mathbb R^2$ is a countably subadditive measure. ([[def-countable-choice]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]])

[F3] The Riemann sphere is compact, and the chordal metric is the Euclidean chord distance under stereographic projection. For finite $z,w$, the stereographic coordinates give
$$\chi(z,w)=\frac{2|z-w|}{\sqrt{(1+|z|^2)(1+|w|^2)}}.$$
Indeed, their unit-sphere dot product is $\bigl(4\operatorname{Re}(z\overline w)+(|z|^2-1)(|w|^2-1)\bigr)/\bigl((1+|z|^2)(1+|w|^2)\bigr)$, so $\|\Sigma(z)-\Sigma(w)\|^2=2-2\Sigma(z)\cdot\Sigma(w)=4|z-w|^2/((1+|z|^2)(1+|w|^2))$. ([[rem-riemann-sphere-one-point-compactification]], [[def-chordal-metric-riemann-sphere]], [[thm-stereographic-projection-riemann-sphere-homeomorphism]])

[F4] **Finite-length square-cover input.** The proof sketch of Younsi's Theorem 3.4 (Besicovitch) uses this covering conclusion: if compact $E$ has finite Euclidean $\mathcal H^1$, then for every square $S$ and $\eta,\rho>0$, $E\cap S$ can be covered by finitely or countably many closed squares $Q_j\subseteq S$ of sides $0<\ell_j<\eta$, with pairwise disjoint interiors and $\sum_j\ell_j\le C(\mathcal H^1(E)+\rho)$ for an absolute constant $C$. For a continuous $f$, taking $\rho=1$ and then $\eta$ small gives $\sum_j\ell_j\omega_f(\sqrt2\ell_j)<\varepsilon$, where $\omega_f$ is its modulus of continuity ([[def-modulus-of-continuity-and-osgood-condition]]). The cover is by closed squares: it does not assert $E\subseteq\bigcup_jQ_j^\circ$, nor that $\partial Q_j$ misses $E$. The Cauchy contour decomposition in the proof sketch uses this closed-square cover. Younsi explicitly gives only a sketch and refers to Garnett, Chapter III, §II for the covering construction and its contour justification. That complete argument and its foundational choice strength have not been verified; this source input remains open.

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

[F11] If $G$ is holomorphic, then $G'$ is holomorphic, by the higher-derivative Cauchy formula ([[thm-cauchy-integral-formula-higher-derivatives]]).

## Proof

**Proof technique:** direct, using the Besicovitch finite-length covering argument.

1.1 A planar square of area $A>0$ has infinite one-dimensional Hausdorff measure: if sets of diameters $d_j\le\delta$ cover it, each lies in a disk of radius $d_j$ and has planar outer area at most $\pi d_j^2\le\pi\delta d_j$. By [F2], $A\le\pi\delta\sum_jd_j$, so the covering sums tend to infinity as $\delta\downarrow0$. A chordal chart contains such a square with comparable distances by [F6]; hence $\mathcal H^1_\chi(\widehat{\mathbb C})=\infty$ and $K\ne\widehat{\mathbb C}$. [F2, F3, F6, algebra]

1.2 Choose $p\in\widehat{\mathbb C}\setminus K$ and let $M$ be the identity if $p=\infty$, and $M(z)=1/(z-p)$ otherwise. Then $K_0:=M(K)$ is compact and avoids $\infty$. By [F5], $M$ is chordally bi-Lipschitz, so [F1] gives $\mathcal H^1_\chi(K_0)<\infty$; since $K_0$ lies in a bounded disk, [F6] gives $\mathcal H^1_{\rm Eucl}(K_0)<\infty$. Put $g=f\circ M^{-1}$. Möbius maps and their inverses are conformal off their poles, so $g$ is continuous on the sphere and holomorphic on $\mathbb C\setminus K_0$. [F1, F3, F5, F6, choose, algebra]

2.1 Let $S$ be any closed square, and put $\omega_g(t)=\sup\{|g(u)-g(v)|:u,v\in S,\ |u-v|\le t\}$. Uniform continuity gives $\omega_g(t)\to0$. For any $\varepsilon>0$, choose $\eta>0$ so small that $C(\mathcal H^1_{\rm Eucl}(K_0)+1)\omega_g(\sqrt2\eta)<\varepsilon$, where $C$ is the constant in [F4]. [F4, F9, step 1.2, choose]

3.1 Apply [F4] to $E=K_0$ and $S$ with $\rho=1$. Discard squares missing $K_0$ and choose $a_j\in K_0\cap Q_j$ for every remaining square. Then $\ell_j<\eta$, $\sum_j\ell_j\le C(\mathcal H^1_{\rm Eucl}(K_0)+1)$, and the closed squares cover $K_0\cap S$; points of $K_0$ may lie on square edges. [F4, step 2.1, choose]

4.1 The open region between $\partial S$ and the covering squares avoids $K_0$. Triangulate it into triangles with closures in the region; each triangle lies in a convex open subset of $\mathbb C\setminus K_0$, so [F7] makes its boundary integral zero and internal edges cancel. Continuity of $g$ up to the boundary gives $\int_{\partial S}g(\zeta)\,d\zeta=\sum_j\int_{\partial Q_j}g(\zeta)\,d\zeta$. For a countable cover the contour exhaustion in [F4] and the finite total perimeter justify the limiting identity; this exact source argument remains unverified. Since $\int_{\partial Q_j}g(a_j)\,d\zeta=0$ and $|g(\zeta)-g(a_j)|\le\omega_g(\sqrt2\ell_j)$ on $\partial Q_j$, we obtain $|\int_{\partial S}g(\zeta)\,d\zeta|\le4\sum_j\ell_j\omega_g(\sqrt2\ell_j)\le4\omega_g(\sqrt2\eta)\sum_j\ell_j<4\varepsilon$. Since $\varepsilon$ is arbitrary, every square contour integral is zero. [F4, F7, step 3.1, choose, algebra]

5.1 By additivity, every axis-parallel rectangle with rational side ratio has zero boundary integral, since it tiles by squares. Approximation and continuity give zero integral around every axis-parallel rectangle. Define $G(z)$ by integrating $g$ first horizontally and then vertically from a fixed base point. Rectangle identities make this path-independent. For $h=a+ib$, $G(z+h)-G(z)=\int_0^a g(z+t)\,dt+i\int_0^b g(z+a+it)\,dt$; subtracting $g(z)h$ leaves $o(|h|)$ by continuity of $g$, so $G'(z)=g(z)$. Thus $G$ is holomorphic, and [F11] makes its derivative $g$ holomorphic on $\mathbb C$. [step 4.1, F9, F11, algebra]

6.1 The function $g$ is entire and continuous on the compact sphere, so [F8] makes its image compact in $\mathbb C$ and bounded. Liouville's theorem [F10] makes $g$ constant. Since $M$ is bijective, $f=g\circ M$ is constant. [F3, F8, F10, step 5.1] ∎
