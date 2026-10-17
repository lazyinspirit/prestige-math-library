---
id: ex-age-cutoff-versus-outflow-tail-error
kind: example
title: A longer run exposes age-cutoff outflow error
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-age-structured-renewal-transport-problem
  - alg-age-structured-renewal-upwind-finite-volume
  - thm-age-structured-renewal-cutoff-tail-and-outflow-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 2, §2.3, PDF pp. 17–20: finite age truncation and outflow in the upwind renewal discretization."
---

## Example

Let $\mu=\beta=0$, initial density $n_0(a)=e^{-a}$, cutoff $A=4$, and $\Delta a=\Delta t=1$. Compare runs to horizons $T=1,2,3$ using the upwind age scheme.

## Verification

**Given:** The finite-volume shift update and cutoff-tail bound.

[F1] [[def-age-structured-renewal-transport-problem]]: with zero mortality and fertility, the exact characteristic solution is $n(t,a)=e^{-(a-t)}\mathbf1_{a\ge t}$.

[F2] [[alg-age-structured-renewal-upwind-finite-volume]]: when $\lambda=1$ and $\mu=0$, each cell mass shifts one cell to the right per step and the last-cell flux is discarded as outflow.

[F3] [[thm-age-structured-renewal-cutoff-tail-and-outflow-bound]]: for $A>T$, $\sup_{0\le t\le T}\|n(t)-n^A(t)\|_1\le2e^{\beta_\infty T}\int_{A-T}^\infty n_0(a)\,da$, separately from discretization; cumulative outflow is bounded by the same initial tail without the exponential prefactor.

1.1 The exact solution in [F1] has total mass $\int_t^\infty e^{-(a-t)}da=1$ at every $t$. The exact initial cell masses are $M_j^0=e^{-(j-1)}-e^{-j}$ for $1\le j\le4$. [F1, algebra]

2.1 Since $\lambda=1$ and $\mu=0$, [F2] gives $M_1^{k+1}=0$ and $M_j^{k+1}=M_{j-1}^k$ for $2\le j\le4$. After $k$ steps, the retained total is $\sum_{j=1}^{4-k}M_j^0=1-e^{-(4-k)}$, so the error from total mass $1$ is $e^{-(4-k)}$. [F2, step 1.1, algebra]

3.1 For $T=k=1,2,3$, the errors are respectively $e^{-3},e^{-2},e^{-1}$. The cumulative outflow is $\sum_{r=0}^{k-1}M_{4-r}^0=e^{-(4-k)}-e^{-4}$, and the initial mass omitted above $A$ is $e^{-4}$. Their sum equals the exact tail $\int_{4-k}^\infty e^{-a}da=e^{-(4-k)}$ in [F3]. The larger error at the longer horizon is the age-cutoff tail, not a time-discretization defect. [F3, step 2.1, algebra] ∎

