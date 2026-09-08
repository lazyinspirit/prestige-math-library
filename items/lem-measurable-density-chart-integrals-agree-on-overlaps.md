---
id: lem-measurable-density-chart-integrals-agree-on-overlaps
title: "Agreement of Borel overlap integrals"
kind: lemma
status: published
origin: pipeline
deps: ["def-borel-measurable-nonnegative-density-on-a-manifold", "lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness", "thm-borel-sets-are-lebesgue-measurable", "thm-borel-sigma-algebra-of-a-subspace-is-the-trace", "thm-smooth-invariance-of-manifold-boundary", "prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null", "cor-integral-over-a-null-set-vanishes"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed."
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: direct
---

## Statement

For a density $r$ as in [[def-borel-measurable-nonnegative-density-on-a-manifold]], charts $x:U\to x(U)$ and $y:V\to y(V)$, and every Borel $E\subseteq U\cap V$,
$$\int_{x(E)}r_x\,d\lambda_n=\int_{y(E)}r_y\,d\lambda_n\quad\text{in }[0,\infty].$$

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Two supplied charts and Borel E; substitution only on their interiors.

[F1] [[def-borel-measurable-nonnegative-density-on-a-manifold]]: The pointwise transition law has the absolute determinant and permits infinite coefficients.

[F2] [[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]: For a $C^1$ diffeomorphism $T:W\to Z$ of open Euclidean sets and nonnegative Borel $h$, $\int_Zh=\int_W(h\circ T)|\det DT|$.

[F3] [[thm-smooth-invariance-of-manifold-boundary]]: Transitions preserve boundary and interior.

[F4] [[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]]: Subspace Borel sets are traces of ambient Borel sets.

[F5] [[thm-borel-sets-are-lebesgue-measurable]]: Euclidean Borel sets are Lebesgue measurable under countable choice.

[F6] [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]: Coordinate faces are Lebesgue-null for positive dimension.

[F7] [[cor-integral-over-a-null-set-vanishes]]: A nonnegative measurable function has integral zero on a null set, even if infinite there.

## Proof

1.1 For $n\ge1$ put $W=x(U\cap V\cap\operatorname{Int}M)$ and $Z=y(U\cap V\cap\operatorname{Int}M)$. These are open in $\mathbb R^n$. Boundary invariance makes $T=y\circ x^{-1}:W\to Z$ a smooth diffeomorphism. The images of $E\cap\operatorname{Int}M$ are Borel: charts are homeomorphisms and the trace sigma-algebra agrees with relative Borel sets. [F3, F4, F5, given]

2.1 On $Z$ take $h=\mathbf1_{y(E\cap\operatorname{Int}M)}r_y$, with the zero-times-infinity convention. It is nonnegative Borel. For $u\in W$, $h(Tu)|\det DT(u)|=\mathbf1_{x(E\cap\operatorname{Int}M)}(u)r_x(u)$. Applying the Borel substitution formula to these exact domains and this integrand equates the two interior integrals. [F1, F2, step 1.1]

3.1 The remaining coordinate pieces of $E$ lie in the face $u_n=0$, or are empty for an interior chart. Their integrals vanish by nullity, without boundedness of $r_x$ or $r_y$. Adding them back proves the formula for $n\ge1$. [F6, F7, step 2.1]

4.1 For $n=0$ each nonempty chart has one point. Thus $E$ is empty or the common singleton. Both integrals are respectively zero or the same weight, because the transition determinant is one. This proves the formula in every dimension, including zero or infinite weight. [F1, step 3.1] ∎
