---
id: thm-normalized-quasiconformal-compactness
kind: theorem
title: Compactness of the normalized K-quasiconformal self-maps of the sphere
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 9
deps: [def-geometric-quasiconformal-homeomorphism, def-acl-sobolev-quasiconformal-homeomorphism, thm-geometric-and-analytic-quasiconformality-equivalent, lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality, cor-ascoli-arzela-for-compact-metric-domains, thm-metric-compactness-equivalences, def-chordal-metric-riemann-sphere, thm-chordal-metric-induces-sphere-topology, rem-riemann-sphere-one-point-compactification, def-mobius-transformation, thm-extremal-length-conformal-invariance-and-monotonicity, thm-modulus-rectangle-and-annulus, def-degree-of-a-self-map-of-an-oriented-sphere, def-local-degree-at-an-isolated-preimage, thm-global-sphere-degree-is-the-sum-of-local-degrees, thm-singular-chain-homotopy-formula, def-r-orientation-of-a-topological-manifold, def-countable-choice, def-dependent-choice, def-axiom-of-choice]
axiom_use: The Axiom of Choice is used through the analytic/geometric quasiconformal equivalence and the Arzelà–Ascoli theorem; Countable Choice and Dependent Choice are included for the metric compactness equivalence used to pass from sequential compactness to compactness.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §13.4, Theorem 13.2, printed pp. 191–192: equicontinuity of normalized sphere maps from annular modulus distortion and compactness in the uniform topology. The proof's limit-regularity step is not used here."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes, 146 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §3, Theorems 3.3–3.4, printed pp. 54–55, for modulus-based equicontinuity; Ch. 2 §5, Theorems 5.1–5.2, printed pp. 59–61, for closure under uniform convergence to a homeomorphism and continuity of quadrilateral modulus. The proof of Theorem 5.2 is used through its conformal-parameter and four-corner argument."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Fix $K\ge1$ and let $\widehat{\mathbb C}$ carry its chordal metric $\chi$ ([[def-chordal-metric-riemann-sphere]], [[thm-chordal-metric-induces-sphere-topology]], [[rem-riemann-sphere-one-point-compactification]]). Let $\mathcal F_K$ be the set of orientation-preserving, $K$-quasiconformal homeomorphisms $f:\widehat{\mathbb C}\to\widehat{\mathbb C}$ satisfying $f(0)=0$, $f(1)=1$, and $f(\infty)=\infty$, where quasiconformality is understood in the geometric sense of [[def-geometric-quasiconformal-homeomorphism]] and equivalently in the analytic sense by [[thm-geometric-and-analytic-quasiconformality-equivalent]]. Then:

(i) $\mathcal F_K$ is equicontinuous in $\chi$: for every $\varepsilon>0$ there is $\delta>0$ such that $\chi(f(z),f(w))<\varepsilon$ whenever $\chi(z,w)<\delta$, for every $f\in\mathcal F_K$.

(ii) Every sequence in $\mathcal F_K$ has a subsequence converging uniformly on $\widehat{\mathbb C}$ to an element of $\mathcal F_K$. Thus $\mathcal F_K$ is compact in the uniform topology.

(iii) If $f_n$ are orientation-preserving quasiconformal sphere homeomorphisms, $f_n\to f$ uniformly in $\chi$, and $f$ is a homeomorphism, then its maximal dilatation is lower semicontinuous:
$$K_f\le\liminf_{n\to\infty}K_{f_n}.$$

The normalization is essential: it removes the noncompact Möbius freedom. The compactness and lower-semicontinuity claims apply equally to the equivalent analytic class.

## Facts & Assumptions

**Given:** Choice, a fixed $K\ge1$, and orientation-preserving normalized quasiconformal homeomorphisms of the Riemann sphere.

[F1] The geometric and analytic definitions have the same least dilatation. Hence a geometrically $K$-quasiconformal map is analytically $K$-quasiconformal, and its inverse is also $K$-quasiconformal ([[thm-geometric-and-analytic-quasiconformality-equivalent]], [[def-geometric-quasiconformal-homeomorphism]]).

[F2] The normalized-sphere conclusion of the circular-dilatation/quasisymmetry lemma gives one quasisymmetry control function $\eta_K$ for all maps in $\mathcal F_K$. The inverse of an $\eta_K$-quasisymmetric homeomorphism has the common control $\eta_*(t)=1/\eta_K^{-1}(1/t)$, and the same three normalization points are fixed by the inverse ([[lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality]], part (ii)).

[F3] For every $x\in\widehat{\mathbb C}$, one of $p\in\{0,1,\infty\}$ has $\chi(x,p)\ge \chi(0,1)/2>0$: otherwise the triangle inequality would give $\chi(0,1)<\chi(0,1)$. The same lower bound applies to the distance from $x$ to one of the three fixed points for every normalized inverse.

[F4] An orientation-preserving homeomorphism of the oriented sphere has global degree $+1$: its unique preimage of any point has local degree $+1$, and the global degree is the sum of local degrees ([[def-r-orientation-of-a-topological-manifold]], [[def-local-degree-at-an-isolated-preimage]], [[thm-global-sphere-degree-is-the-sum-of-local-degrees]]). Uniformly close maps into $S^2$ are homotopic when their pointwise chordal distance is everywhere less than $2$, by normalized straight-line interpolation in $\mathbb R^3$; homotopic maps induce the same homology map ([[def-chordal-metric-riemann-sphere]], [[thm-singular-chain-homotopy-formula]]).

[F5] For a Jordan quadrilateral with either pair of opposite marked sides, the reciprocal modulus $\mu$ is finite and positive by conformal rectification to a nondegenerate rectangle ([[thm-modulus-rectangle-and-annulus]], [[thm-extremal-length-conformal-invariance-and-monotonicity]]). Bishop's Theorem 5.2 proves that if homeomorphisms converge uniformly to a homeomorphism, the modulus of each image quadrilateral converges: parameterize the boundaries by the converging maps, use conformal maps of the Jordan domains to the disk, and pass the four corner preimages to their limits; the rectangle modulus is continuous in four distinct marked boundary points.

[F6] Arzelà–Ascoli gives uniform subsequences for equicontinuous maps between compact metric spaces, and the uniform topology here is metrized by the supremum chordal distance; sequential compactness and compactness are equivalent for metric spaces ([[cor-ascoli-arzela-for-compact-metric-domains]], [[thm-metric-compactness-equivalences]]).

## Proof

**Proof technique:** obtain uniform quasisymmetry from the three-point normalization, take simultaneous uniform limits of maps and inverses, preserve orientation by homotopy, and pass geometric dilatation bounds through the continuity of quadrilateral modulus.

1.1 By [F1] and [F2], every $f\in\mathcal F_K$ and its inverse have common quasisymmetry controls, say $\eta_K$ and $\eta_*$. Fix $x$ and choose $p\in\{0,1,\infty\}$ with $\chi(x,p)\ge c:=\chi(0,1)/2$. If $\chi(x,y)<ct$, quasisymmetry gives $\displaystyle \chi(f(x),f(y))\le\eta_K(t)\,\chi(f(x),f(p))\le 2\eta_K(t),$ because the chordal diameter of the sphere is $2$. Since $\eta_K(t)\to0$ as $t\downarrow0$, this proves equicontinuity uniformly in $f$. Repeating the same estimate with $f^{-1}$ and $\eta_*$ proves uniform equicontinuity of the inverses. [F1, F2, F3, given]

2.1 Let $(f_n)$ be a sequence in $\mathcal F_K$. The target sphere is compact, so [F1] and step 1.1 make Arzelà–Ascoli applicable to $(f_n)$ and then to the inverses along the resulting subsequence. Passing to a subsubsequence gives uniform limits $f_n\to f$ and $f_n^{-1}\to g$, with $f,g$ continuous. For each $z$, uniform convergence and continuity give $g(f(z))=\lim_n f_n^{-1}(f_n(z))=z$ and $f(g(z))=z$; thus $f$ is a homeomorphism with inverse $g$. Uniform convergence preserves the three fixed points.[F1, step 1.1, F6, given]

3.1 For all sufficiently large $n$, $\sup_z\chi(f_n(z),f(z))<2$. Under the stereographic identification with the unit sphere, the normalized straight-line interpolation between $f_n(z)$ and $f(z)$ is then defined for every $z$ and gives a homotopy. Each $f_n$ has global degree $+1$ by [F4], so homotopy invariance gives $\deg f=+1$. Since $f$ is a homeomorphism, the global-degree/local-degree formula [F4] makes its local orientation sign $+1$ everywhere. [F4, step 2.1, given]

4.1 Fix any quadrilateral $Q$ and either pair of its opposite marked sides. Choose a source chart containing $Q$, then choose a target point outside the compact set $f(Q)$ and a small neighborhood of $Q$ whose image under $f$ avoids that point. Uniform convergence ensures the same target chart works for $f_n(Q)$ for all sufficiently large $n$. Thus the boundary parameterizations converge uniformly in fixed planar charts, and [F5] gives $\mu(\Gamma(f_n(Q)))\to\mu(\Gamma(f(Q)))$; the limit is finite and positive. The bounds $K^{-1}\mu(\Gamma(Q))\le\mu(\Gamma(f_n(Q)))\le K\mu(\Gamma(Q))$ pass to the limit. This proves that $f$ is geometrically $K$-quasiconformal; step 3.1 gives orientation preservation, and its normalization was proved in step 2.1. Thus $f\in\mathcal F_K$. Arzelà–Ascoli now gives sequential compactness, and the uniform topology is metrized by $d_\infty(f,g)=\sup_z\chi(f(z),g(z))$; the metric compactness equivalence yields compactness.[F4, F5, step 2.1, step 3.1, F6, given]

5.1 Let $L=\liminf_nK_{f_n}$. If $L=+\infty$ the claimed inequality is automatic. Otherwise choose a subsequence with $K_{f_{n_j}}\to L$. Uniform convergence and [F4] preserve the global degree $+1$, so $f$ is orientation-preserving. For each quadrilateral, [F5] passes both geometric bounds to $f$, now with constants $K_{f_{n_j}}\to L$. Since $f$ is a homeomorphism, it is geometrically $L$-quasiconformal, so its least geometric dilatation is at most $L$; the equivalence in [F1] identifies this least constant with $K_f$. Hence $K_f\le L$. [F1, F4, F5, given] ∎
