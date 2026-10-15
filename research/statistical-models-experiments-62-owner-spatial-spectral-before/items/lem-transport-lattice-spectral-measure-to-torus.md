---
id: lem-transport-lattice-spectral-measure-to-torus
kind: lemma
title: "Transport of a lattice spectral measure to torus coordinates"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - lem-dual-of-zd-is-torus
  - lem-unit-circle-is-a-compact-metrizable-topological-group
  - def-radon-measure-on-an-lch-space
  - def-borel-sigma-algebra
  - thm-finite-products-of-compact-spaces
  - lem-products-preserve-t0-t1-and-hausdorff
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-monotone-convergence-for-the-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Oxford Mathematical Institute, Harmonic Analysis lecture notes, characters of Z^d, pp. 17–18"
      url: "https://www.maths.ox.ac.uk/system/files/media/HarmAnLectureNotes.pdf"
---

## Statement

Let $\Psi:\mathbb T^d\to\widehat{\mathbb Z^d}$ be the homeomorphism from
[[lem-dual-of-zd-is-torus]], and let $\mu$ be a finite positive Radon measure
on $\widehat{\mathbb Z^d}$. Define
$$F(B):=\mu(\Psi(B))$$
for every Borel set $B\subseteq\mathbb T^d$. Then $F$ is a finite positive
Radon measure on $\mathbb T^d$, and for every bounded Borel function
$g:\mathbb T^d\to\mathbb C$,
$$\int_{\mathbb T^d}g(\theta)\,F(d\theta) =\int_{\widehat{\mathbb Z^d}}g(\Psi^{-1}(\chi))\,\mu(d\chi).$$

## Facts & Assumptions

**Given:** The homeomorphism $\Psi$ and the finite positive Radon measure $\mu$
from the Statement.

[F1] [[lem-dual-of-zd-is-torus]]: $\Psi$ is a homeomorphism, so it and its
inverse preserve Borel measurability, compactness and openness.

[F2] [[def-radon-measure-on-an-lch-space]]: a Radon measure is finite on
compact sets, outer regular on Borel sets and inner regular on open sets.

[F3] [[thm-linearity-of-the-lebesgue-integral-on-l-one]] and
[[thm-monotone-convergence-for-the-integral]]: integrals of simple functions
are linear, and increasing limits of nonnegative measurable functions pass
through the integral.

[F4] [[lem-unit-circle-is-a-compact-metrizable-topological-group]],
[[thm-finite-products-of-compact-spaces]], and
[[lem-products-preserve-t0-t1-and-hausdorff]]: $\mathbb T^d$ is compact
Hausdorff, hence locally compact Hausdorff.

[F5] [[def-integrable-real-and-complex-functions-and-their-integrals]]:
bounded Borel functions are integrable against the finite measures in the
Statement.

## Proof

**Proof technique:** define the transported measure and extend its integral
identity from indicators.

1.1 If $B_1,B_2,\ldots$ are pairwise disjoint Borel subsets of $\mathbb T^d$, then their images under the bijection $\Psi$ are pairwise disjoint Borel sets by [F1]. Hence $F\!\left(\bigcup_{m\ge1}B_m\right) =\mu\!\left(\bigcup_{m\ge1}\Psi(B_m)\right) =\sum_{m\ge1}\mu(\Psi(B_m)) =\sum_{m\ge1}F(B_m).$ Thus $F$ is a positive measure, and $F(\mathbb T^d)=\mu(\widehat{\mathbb Z^d})<\infty$. [F1, given]

1.2 For Borel $B\subseteq\mathbb T^d$ and $\varepsilon>0$, outer regularity of $\mu$ gives an open $U\supseteq\Psi(B)$ with $\mu(U)<\mu(\Psi(B))+\varepsilon$. Then $\Psi^{-1}(U)$ is open, contains $B$, and $F(\Psi^{-1}(U))=\mu(U)$, proving outer regularity of $F$. If $U$ is open in $\mathbb T^d$, inner regularity of $\mu$ gives compact $C\subseteq\Psi(U)$ with $\mu(C)>\mu(\Psi(U))-\varepsilon$. Then $\Psi^{-1}(C)$ is compact in $U$ and $F(\Psi^{-1}(C))=\mu(C)$, proving inner regularity on open sets. The torus is compact Hausdorff by [F4], so these properties make $F$ Radon as in [F2]. [F1, F2, F4, given]

2.1 For an indicator $g=\mathbf1_B$ of a Borel set, $\int g\,dF=F(B)=\mu(\Psi(B)) =\int \mathbf1_B(\Psi^{-1}(\chi))\,\mu(d\chi).$ Finite linearity [F3] extends this equality to Borel simple functions. For a nonnegative Borel function, choose increasing simple approximations and apply monotone convergence [F3] on both spaces. Splitting the real and imaginary parts of a bounded complex Borel function into positive and negative parts then gives the asserted integral identity by [F5]. [F1, F3, F5, algebra] ∎
