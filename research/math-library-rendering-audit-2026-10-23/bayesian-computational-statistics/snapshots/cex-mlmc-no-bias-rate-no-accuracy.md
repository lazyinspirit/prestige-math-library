---
id: cex-mlmc-no-bias-rate-no-accuracy
kind: counterexample
title: "Finite correction variance cannot replace bias control"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-mlmc-hierarchy-and-coupled-corrections
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Michael B. Giles, Multilevel Monte Carlo Path Simulation, §3"
      url: "https://people.maths.ox.ac.uk/gilesm/files/opre.pdf"
---

## Statement refuted

Finite correction variances and per-sample work bounds $O(h_\ell^{-1})$ alone guarantee that increasing the number of levels and samples can make the MLMC MSE arbitrarily small for any integrable target.

## Facts & Assumptions

**Given:** The finite MLMC hierarchy, and the universal guarantee stated above, which is to be refuted.

[F1] [[def-mlmc-hierarchy-and-coupled-corrections]]: the estimator is the sum of level sample means, with $\Delta_0=P_0$ and coupled fine-minus-coarse corrections at later levels.

## Counterexample

Take $T=1$, $M=2$, target $P=0$, and $P_\ell=1$ deterministically for every $\ell\ge0$. Use the deterministic coupling $(P_\ell^{\mathrm f},P_{\ell-1}^{\mathrm c})=(1,1)$ at every positive level. Charge one level-$\ell$ sample at cost $h_\ell^{-1}$.

**Given:** Any finite $L\ge0$ and any positive integer sample counts $N_0,\ldots,N_L$.

1.1 By [F1], $\Delta_0=1$ and $\Delta_\ell=0$ for every $\ell\ge1$. All correction variances are zero and all sample costs satisfy the stated work bound. [F1, given, algebra]

2.1 By [F1], every sample mean equals its constant correction, so $\widehat\mu_{L,\mathbf N}=1$ for every $L$ and every sample allocation. The target mean is zero, hence the MSE is exactly $1$ and cannot be made arbitrarily small. The missing hypothesis is convergence of $\mathbb E P_L$ to $\mathbb E P$; here the bias remains $1$. [F1, given, step 1.1, algebra] ∎
