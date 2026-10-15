---
id: ex-l2-small-log-density-far-in-hellinger
kind: example
title: "Small L² log-density perturbations can remain far in Hellinger distance"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-hellinger-distance-between-density-laws
  - def-measure-with-density
  - def-probability-measure
  - def-real-exponential-function-and-e
  - thm-exponential-definition-equivalence
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, §3.1"
      url: "https://arxiv.org/pdf/0806.3024"
    - title: "Bas J. K. Kleijn, Aad W. van der Vaart and Harry van Zanten, Lectures on Nonparametric Bayesian Statistics, §12.2"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf"
---

## Statement

For integers $k\ge1$, on $([0,1],\mathcal B,\text{Lebesgue})$ let $p_0(x)=1$, $A_k=[0,k^{-4}]$, $w_k=k\mathbf1_{A_k}$, and $p_k=e^{w_k}/\int_0^1e^{w_k}dx$. Then $\|w_k\|_{L^2}\to0$ but $h(P_k,P_0)\to\sqrt2$. Thus the $L^2$ norm of a log-density perturbation need not control the induced Hellinger distance.

## Facts & Assumptions

**Given:** The stated finite-measure space and functions.

[F1] [[def-hellinger-distance-between-density-laws]]: $h^2(P_k,P_0)=\int_0^1(\sqrt{p_k}-1)^2dx=2-2\int_0^1\sqrt{p_k}\,dx$.

## Verification

1.1 Since $|A_k|=k^{-4}$, $\|w_k\|_2^2=k^2|A_k|=k^{-2}\to0$. The normalizer is $Z_k=1-k^{-4}+e^k k^{-4}$, so $p_k$ is a positive unit-mass density. [given, algebra]

1.2 The Hellinger affinity is $\int_0^1\sqrt{p_k}\,dx=\frac{1-k^{-4}+k^{-4}e^{k/2}}{\sqrt{Z_k}}.$ Since $Z_k\ge e^k/k^4$, this is at most $k^2e^{-k/2}+k^{-2}$. The exponential series gives $e^{k/2}\ge(k/2)^3/3!=k^3/48$, hence $k^2e^{-k/2}\le48/k\to0$. [F1, given, algebra]

2.1 By [F1], $h^2(P_k,P_0)\to2$, and nonnegativity of Hellinger distance gives $h(P_k,P_0)\to\sqrt2$. [F1, step 1.2, algebra] ∎
