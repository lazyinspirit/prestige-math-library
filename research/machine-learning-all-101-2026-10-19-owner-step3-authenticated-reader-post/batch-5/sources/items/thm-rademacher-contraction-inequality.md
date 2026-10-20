---
id: thm-rademacher-contraction-inequality
kind: theorem
title: "One-sided coordinate Rademacher contraction"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-one-sided-empirical-rademacher-complexity
  - thm-one-sided-coordinate-rademacher-contraction
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Lemma 5.7"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Peter L. Bartlett and Shahar Mendelson, Rademacher and Gaussian Complexities: Risk Bounds and Structural Results, JMLR 3 (2002), Theorem 12(4)"
      url: "https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf"
---

## Statement

Let $m\ge1$, let $z_1,\ldots,z_m$ be fixed points in a set $\mathcal Z$, and let $\mathcal H$ be a nonempty class of functions $h:\mathcal Z\to\mathbb R$. For each $i$, let $\Phi_i:\mathbb R\to\mathbb R$ be $L$-Lipschitz for one common $L\ge0$. Suppose either that $\mathcal H$ is finite or countable, or that it has a specified nonempty countable subclass $\mathcal H_0$ for which, for every sign vector $\sigma\in\{-1,+1\}^m$, both displayed suprema equal the corresponding suprema over $\mathcal H_0$. Assume the suprema are finite. With independent uniform signs $\sigma_1,\ldots,\sigma_m$ and the one-sided normalization

$$\widehat{\mathfrak R}_S(\mathcal H):=\frac1m\mathbb E_\sigma\sup_{h\in\mathcal H}\sum_{i=1}^m\sigma_i h(z_i),$$

one has

$$\frac1m\mathbb E_\sigma\sup_{h\in\mathcal H}\sum_{i=1}^m\sigma_i\Phi_i(h(z_i))\le L\,\widehat{\mathfrak R}_S(\mathcal H).$$

No condition $\Phi_i(0)=0$ is required.

## Statement references

[[def-one-sided-empirical-rademacher-complexity]]: fixes the nonabsolute sign supremum and $1/m$ normalization.

[[thm-one-sided-coordinate-rademacher-contraction]]: proves this inequality for finite or countable classes, including the no-zero-at-zero case.

[Mohri et al., Lemma 5.7, printed pp. 93–94](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): states the coordinatewise one-sided factor-$L$ contraction under the same normalization.

[Bartlett and Mendelson, Theorem 12(4), printed p. 469](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf): uses a different absolute-value convention, assumes the scalar map vanishes at zero, and has factor $2L$; that convention is not used here.

## Facts & Assumptions

**Given:** A fixed sample, a nonempty real-valued class, common Lipschitz constant $L\ge0$, and finite sign suprema.

[F1] The one-sided empirical Rademacher complexity is $m^{-1}\mathbb E_\sigma\sup_{h\in\mathcal H}\sum_i\sigma_i h(z_i)$, with no absolute value. [[def-one-sided-empirical-rademacher-complexity]]

[F2] For a finite class, or a countable class with finite sign suprema, coordinatewise $L$-Lipschitz maps satisfy
$$\frac1m\mathbb E_\sigma\sup_{h\in\mathcal H}\sum_i\sigma_i\Phi_i(h(z_i))\le L\,\widehat{\mathfrak R}_S(\mathcal H),$$
without requiring $\Phi_i(0)=0$. [[thm-one-sided-coordinate-rademacher-contraction]]

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 If $\mathcal H$ is finite or countable, [F1] identifies the right-hand side with the published supplier's one-sided normalization, and [F2] gives the inequality with exactly the stated common Lipschitz constant and no zero-at-zero assumption. [F1, F2, given]

2.1 Otherwise, use the specified countable subclass $\mathcal H_0$. For every sign vector, its transformed and untransformed suprema equal those over $\mathcal H$ by hypothesis; averaging over the finite sign space therefore gives the same two quantities. Applying step 1.1 to $\mathcal H_0$ proves the displayed inequality for $\mathcal H$. [step 1.1, given, algebra] ∎
