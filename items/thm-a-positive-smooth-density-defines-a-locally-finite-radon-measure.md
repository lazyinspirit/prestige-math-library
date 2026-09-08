---
id: thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure
title: "Positive smooth densities give Radon volume"
kind: theorem
status: draft
origin: pipeline
deps: ["thm-density-measure-is-independent-of-the-chart-gluing", "cor-second-countable-lch-locally-finite-borel-measures-are-regular", "prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets", "def-radon-measure-on-an-lch-space", "thm-completion-of-a-measure-space", "prop-topological-manifolds-are-locally-compact-and-locally-path-connected", "def-completion-of-a-measure-space"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Folland Theorem 7.8 and complete proof p.217; \u00a711.4 pp.361\u2013363"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
---

## Statement

If $r$ is a finite-valued positive smooth density, $\mu_r$ is finite on compact sets, locally finite, sigma-finite, and a regular Borel measure, hence Radon. Its completion is denoted $(M,\overline{\mathcal B(M)},\overline\mu_r)$ and is not identified with its Borel domain.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Positive finite smooth coefficients; local boundedness before regularity.

[F1] [[thm-density-measure-is-independent-of-the-chart-gluing]]: Every Borel subset of a chart has measure equal to the integral of its coefficient.

[F2] [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]: Bounded measurable Euclidean sets have finite Lebesgue measure.

[F3] [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]: A compact-finite Borel measure on a second-countable LCH space is regular.

[F4] [[def-radon-measure-on-an-lch-space]]: Radon means compact-finite, outer regular on Borel sets and compact-inner-regular on open sets.

[F5] [[thm-completion-of-a-measure-space]]: Under countable choice the completion is a complete measure extending the original measure.

[F6] [[def-completion-of-a-measure-space]]: A completed set differs from a Borel set only inside a Borel null set.

## Proof

1.1 For each point $p$ in positive dimension, a chart contains a relative closed ball or half-ball $H$ around its coordinate image. Choose it bounded with closure inside the chart image. Its inverse image $K$ is compact and contains a neighborhood $W$ of $p$. The continuous coefficient on $H$ is bounded by a finite $C$, so $\mu_r(W)\le\mu_r(K)=\int_Hr_x\le C\lambda_n(H)<\infty$. For $n=0$ take $W=K=\{p\}$, whose measure is the finite coefficient $r(p)$. [F1, F2]

2.1 The neighborhoods $W$ cover any compact $K_0$ finitely, giving $\mu_r(K_0)\le\sum_{j=1}^m\mu_r(W_j)<\infty$. They also show local finiteness. To get a countable cover, take the members of a countable base that are contained in some such $W$; these cover $M$ and individually have finite measure. Enumerating these basis members proves sigma-finiteness without selecting neighborhoods at every point. [step 1.1]

3.1 The same compact chart neighborhoods show local compactness also at the boundary; Hausdorffness and second countability are standing assumptions. The compact-finite Borel measure therefore satisfies the regularity theorem. Its conclusion includes the outer and open-set inner regularity required by the stated Radon convention. [F3, F4, step 1.1, step 2.1]

4.1 Apply the completion theorem to $(M,\mathcal B(M),\mu_r)$ under the standing countable choice. Explicitly, $E=B\cup N$ with $B,Z$ Borel, $N\subset Z$ and $\mu_r(Z)=0$ has $\overline\mu_r(E)=\mu_r(B)$. Empty $M$ and empty compact sets have mass zero; a singleton in dimension zero has its finite positive weight. No total-mass bound is asserted. [F5, F6, step 3.1] ∎
