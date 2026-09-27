---
id: cex-a-smooth-density-can-have-infinite-total-mass
title: "A smooth positive density with infinite mass"
kind: counterexample
status: published
origin: pipeline
deps: ["thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure", "thm-density-measure-is-independent-of-the-chart-gluing", "thm-lebesgue-measure-of-a-box-of-every-kind"]
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
    - title: "Folland, Real Analysis, second edition, \u00a711.4 pp.361\u2013363; Theorems 2.14\u20132.15 pp.50\u201351"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
---

## Statement refuted

The assertion that every positive smooth density measure has finite total mass fails for the density $|dx|$ on $\mathbb R$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Independent B-page witness: compact-finite Euclidean density with total mass infinity.

[F1] [[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]: The measure of a positive finite smooth density is locally finite and compact-finite.

[F2] [[thm-density-measure-is-independent-of-the-chart-gluing]]: The identity-chart density one integrates to Lebesgue measure.

[F3] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: A closed interval has its length as measure.

## Counterexample

1.1 On $\mathbb R$ the coefficient $r_x=1$ is positive and smooth. Its measure is locally finite, and $\mu_r([-N,N])=\int_{-N}^N1\,dx=2N$ for every integer $N\ge1$. Each compact K is bounded, hence contained in some $[-N,N]$ and has finite measure. [F1, F2, F3]

2.1 Given any finite $L>0$, an integer $N>L/2$ yields $\mu_r(\mathbb R)\ge2N>L$, proving infinite total mass. Thus the hypothesis holds and the asserted finite-total-mass conclusion fails. The same chart computation gives $\mu_r(\varnothing)=\mu_r(\{0\})=0$ and $\mu_r([0,1])=1$. [F2, F3, step 1.1] ∎
