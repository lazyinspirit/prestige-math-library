---
id: cex-particle-filter-proposal-misses-target-support
kind: counterexample
title: "A particle proposal can miss positive target mass"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-feynman-kac-path-targets-and-normalizers
  - alg-sequential-importance-resampling
proof_strategy: direct
axiom_use: "No choice axiom is used in this finite example; all measures are explicitly specified on finite spaces."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §3.2"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., §11.2"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
---

## Statement refuted

**False claim:** The transition support condition $M_k(x,\cdot)\ll R_k(x,\cdot)$ may be dropped while the same proposal-weighted particle measure still represents the Feynman–Kac target.

## Facts & Assumptions

**Given:** The finite model and proposal in the Counterexample.

[F1] [[def-feynman-kac-path-targets-and-normalizers]]: The unnormalized path law is the initial/transition path law weighted by the product of the specified potentials.

[F2] [[alg-sequential-importance-resampling]]: Particle paths are proposed using $R_k$ and then weighted using the target-to-proposal kernel derivative; the procedure requires the support and derivative hypotheses in its definition.

## Counterexample

1.1 Let $\mathsf X_0=\{*\}$ and $\mathsf X_1=\{a,b\}$. Take $\mu_0=\nu_0=\delta_*$, $M_1(*,\{a\})=M_1(*,\{b\})=1/2$, $R_1(*,\{a\})=1$, $R_1(*,\{b\})=0$, and $G_0=G_1=1$. By [F1], $\gamma_1$ is the transition law itself, $Z_1=1$, and the normalized target assigns mass $1/2$ to $b$. [F1, given, algebra]

2.1 The support premise fails because $M_1(*,\{b\})=1/2$ while $R_1(*,\{b\})=0$. A proposal path drawn from $Q_1=\nu_0R_1$ equals $(*,a)$ with probability one, so every empirical measure formed from such paths assigns mass zero to the event $\{x_1=b\}$. [F2, step 1.1, given]

3.1 If a kernel derivative $r_1$ represented $M_1(*,\cdot)$ with respect to $R_1(*,\cdot)$, then $M_1(*,\{b\})=\int_{\{b\}}r_1(*,y)R_1(*,dy)=0$, contradicting the value $1/2$. Thus the required importance weight does not exist on this target-positive, proposal-null set, and the false claim fails. [step 1.1, step 2.1, algebra] ∎

## Remarks

The example refutes target coverage after support failure; it does not assert that every numerical normalizer estimate must be biased when support fails.
