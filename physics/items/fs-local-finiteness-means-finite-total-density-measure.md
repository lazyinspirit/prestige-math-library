---
id: fs-local-finiteness-means-finite-total-density-measure
title: "False: locally finite volume has finite total mass"
kind: false-statement
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-density-measure-is-independent-of-the-chart-gluing", "thm-lebesgue-measure-of-a-box-of-every-kind"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Folland, Real Analysis, second edition, \u00a711.4 pp.361\u2013363; Theorems 2.14\u20132.15 pp.50\u201351"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (fs-local-finiteness-means-finite-total-density-measure). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). False assertion: every positive smooth density whose Borel measure is locally finite has finite total mass.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice as in the Statement. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Witness R with unit density; explicit arbitrarily large finite-interval masses.

[F2] [[thm-density-measure-is-independent-of-the-chart-gluing]]: A chart restriction computes its measure by the coordinate integral.

[F3] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: An interval has its length as Lebesgue measure.

## Refutation

1.1 Take $M=\mathbb R$ with its identity chart and $r=|dx|$, coefficient one. For every integer $N\ge1$, $\mu_r([-N,N])=\int_{-N}^N1\,dx=2N$. Every point has a bounded interval neighborhood of finite mass, proving local finiteness directly. Every compact subset of $\mathbb R$ is bounded, hence contained in some $[-N,N]$ and has finite mass. [F2, F3]

2.1 For any finite proposed bound $L$, choose an integer $N>L/2$. Monotonicity gives $\mu_r(\mathbb R)\ge2N>L$, so the total mass is infinite. The empty set and singleton have mass zero by the same length formula, and intervals of length one have mass one; none of these local values bounds the total. [F3, step 1.1] ∎
