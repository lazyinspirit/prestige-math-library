---
id: cex-mlmc-no-positive-variance-decay
kind: counterexample
title: "Nondecaying correction variance can force cubic cost"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-mlmc-hierarchy-and-coupled-corrections
  - lem-mlmc-estimator-moments-and-mse
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

Bias order one and per-sample work $O(h_\ell^{-1})$ alone guarantee the logarithmic MLMC work bound $O(\epsilon^{-2}(\log\epsilon^{-1})^2)$.

## Facts & Assumptions

**Given:** The finite MLMC hierarchy, the claimed universal complexity bound above, and the counterexample construction below.

[F1] [[def-mlmc-hierarchy-and-coupled-corrections]]: adjacent-level couplings need only have the correct marginal laws, and level sample blocks are independent.

[F2] [[lem-mlmc-estimator-moments-and-mse]]: the MLMC MSE is squared finest-level bias plus the sum of each correction variance divided by its sample count.

## Counterexample

Let $T=1$, $M=2$, $h_\ell=2^{-\ell}$, target $P=0$, and
$$P_\ell=h_\ell+Z_\ell,$$
where each $Z_\ell$ is Rademacher. At level $\ell\ge1$, couple the fine and coarse marginals independently: use independent Rademacher variables $Z_\ell^{\mathrm f}$ and $Z_{\ell-1}^{\mathrm c}$ and set
$$\Delta_\ell=(h_\ell+Z_\ell^{\mathrm f})-(h_{\ell-1}+Z_{\ell-1}^{\mathrm c}).$$
At level $0$, use $\Delta_0=1+Z_0$. Take the level sample blocks independent and charge $h_\ell^{-1}$ work per draw.

**Given:** Any finite level $L$ and positive integer sample counts for which the estimator has MSE at most $\epsilon^2$.

1.1 Since $\mathbb E P_\ell=h_\ell$, the finest-level bias is $h_L$, so this hierarchy has bias order $\alpha=1$. For $\ell\ge1$, the independent centered Rademacher terms have variance $1+1=2$, hence $\operatorname{Var}(\Delta_\ell)=2$ and no bound $O(h_\ell^\beta)$ holds for any $\beta>0$. The sample cost is exactly $h_\ell^{-1}$. [F1, given, algebra]

2.1 By [F2], the MSE is $h_L^2+\frac1{N_0}+2\sum_{\ell=1}^L\frac1{N_\ell}.$ Thus MSE at most $\epsilon^2$ requires $h_L\le\epsilon$ and $N_L\ge2\epsilon^{-2}$. The finest-level work alone is therefore $N_Lh_L^{-1}\ge2\epsilon^{-3}$. This grows faster than $\epsilon^{-2}(\log\epsilon^{-1})^2$, so the claimed logarithmic bound fails without a positive correction-variance decay rate. [F2, step 1.1, given, algebra] ∎
