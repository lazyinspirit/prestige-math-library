---
id: thm-compensated-counting-process-brackets
kind: theorem
title: "Brackets of a compensated simple counting process"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-counting-process-intensity-and-compensator-contract
  - def-optional-and-predictable-brackets-for-counting-processes
  - lem-continuous-predictable-bracket-uniqueness
  - lem-elementary-counting-integral-preserves-martingales
  - lem-finite-variation-integration-by-parts-for-counting-process-martingales
  - lem-bounded-stopping-preserves-cadlag-square-integrable-martingales
  - thm-doob-lp-maximal-inequality
  - thm-taking-out-what-is-known
  - def-continuous-time-stopping-time
  - thm-dominated-convergence
  - thm-monotone-convergence-for-the-integral
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 9: Some Key Results for Counting Process Martingales, PDF pp. 10–12"
      url: "https://web.stanford.edu/~lutian/coursepdf/martingale2.pdf"
    - title: "Richard F. Bass, SDEs with Jumps, Sections 2.4–2.5, PDF pp. 4–6"
      url: "https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf"
    - title: "P. K. Andersen, Ø. Borgan, R. D. Gill, N. Keiding, Censoring, Truncation and Filtering in Statistical Models Based on Counting Processes, §2, PDF pp. 3–8"
      url: "https://ir.cwi.nl/pub/5993/5993D.pdf"

---

## Statement

Under the finite-horizon contract of
[[def-counting-process-intensity-and-compensator-contract]], the optional
quadratic variation of $M=N-A$ is $[M]_t=N_t$, its continuous predictable
bracket is $\langle M\rangle_t=A_t$, its self-cross predictable bracket is
$\langle M,M\rangle_t=A_t$, and $M_t^2-A_t$ is a martingale on $[0,T]$.

## Facts & Assumptions

**Given:** A simple unit-jump counting process $N$, a continuous predictable increasing compensator $A$ with $A_0=0$ and $\mathbb E A_T<\infty$, and the model contract that $M=N-A$ is a square-integrable martingale.

[F1] The finite-horizon objects, unit jumps, integrability and martingale contract are exactly those of the counting-process model. ([[def-counting-process-intensity-and-compensator-contract]])

[F2] Optional brackets are jump-square sums; the scalar predictable bracket is the unique continuous predictable increasing $B$ with $M^2-B$ a martingale, when it exists. ([[def-optional-and-predictable-brackets-for-counting-processes]])

[F3] A bounded predictable step integral against a square-integrable martingale is a square-integrable martingale. ([[lem-elementary-counting-integral-preserves-martingales]])

[F4] For a finite-variation càdlàg path, squared partition increments converge to its jump-square sum, and the finite-partition square identity holds. ([[lem-finite-variation-integration-by-parts-for-counting-process-martingales]])

[F5] Bounded stopping preserves a càdlàg square-integrable martingale. ([[lem-bounded-stopping-preserves-cadlag-square-integrable-martingales]])

[F6] The sampled discrete-time martingale satisfies Doob's $L^2$ maximal inequality. ([[thm-doob-lp-maximal-inequality]])

[F7] Dominated convergence passes limits through event integrals. ([[thm-dominated-convergence]])

[F8] Increasing nonnegative integrals converge to the integral of the limit. ([[thm-monotone-convergence-for-the-integral]])

[A1] AC is inherited through conditional expectation and the sampled Doob inequality. ([[def-axiom-of-choice]])

## Proof

1.1 Since $A$ is continuous, $\Delta M_s=\Delta N_s$; each jump of $N$ is zero or one, so the jump-square definition gives $[M]_t=\sum_{0<s\le t}(\Delta N_s)^2=N_t$, using $N_0=0$. [F1, F2]

1.2 Let $S=N+A$ and $\tau_n=\inf\{t:S_t\ge n\}\wedge T$ for integers $n\ge1$. The adapted nondecreasing càdlàg process $S$ satisfies $\{\tau_n\le t\}=\{S_t\ge n\}$ for $t<T$, so $\tau_n$ is bounded stopping; at the first crossing, continuity of $A$ and unit jumps of $N$ give $S_{\tau_n}\le n+1$, hence $|M_{t\wedge\tau_n}|\le n+1$. By [F5], $M^{\tau_n}$ is a square-integrable martingale. [F1, F5, given, construct]

2.1 The variables $M_T$ and $A_T$ are integrable, so $N_T=M_T+A_T$ is integrable; since $M$ is a martingale starting at zero, $\mathbb E N_T=\mathbb E A_T<\infty$. The pathwise total variation of $M$ is at most $N_T+A_T$, hence is integrable. [A1, F1, step 1.1]

2.2 Choose nested deterministic partitions $\pi_m=\{0=t_0^m<\cdots<t_{q_m}^m=T\}$ with mesh tending to zero. The coefficients $H_j^{n,m}=M_{t_j^m\wedge\tau_n}$ are $\mathcal F_{t_j^m}$-measurable and bounded by $n+1$, so [F3] makes the step integral against $M^{\tau_n}$ a martingale. The partition identity [F4] gives $(M_{t\wedge\tau_n})^2-\sum_j(M_{t\wedge t_{j+1}^m\wedge\tau_n}-M_{t\wedge t_j^m\wedge\tau_n})^2=2I_t(H^{n,m})$. The stopped process has the same unit jumps as $N^{\tau_n}$, so the squared-increment sum converges to $[M^{\tau_n}]_t=N_{t\wedge\tau_n}$ by [F4] and step 1.1. Also $\operatorname{Var}(M^{\tau_n})_T\le N_{T\wedge\tau_n}+A_{T\wedge\tau_n}\le n+1$, so the terms are bounded by a deterministic constant depending only on $n$; dominated convergence in the martingale event identities proves $(M_{t\wedge\tau_n})^2-N_{t\wedge\tau_n}$ is a martingale. [A1, F1, F3, F4, step 1.1, given]

3.1 Since $S_T=N_T+A_T<\infty$ a.s., $\tau_n=T$ eventually on each path. On nested deterministic grids, [F6] gives $\mathbb E\max_{u\in\pi_m}|M_u|^2\le4\mathbb E|M_T|^2$; right continuity identifies the increasing grid limit with $\sup_{u\le T}|M_u|$, and [F8] gives $\mathbb E\sup_{u\le T}|M_u|^2<\infty$. Thus $R=\sup_{u\le T}|M_u|^2+N_T$ is integrable and dominates every stopped value $|(M_{t\wedge\tau_n})^2-N_{t\wedge\tau_n}|$. For $B\in\mathcal F_s$, [F7] and the event identities from step 2.2 let $n\to\infty$, proving $M^2-N$ is a martingale. [A1, F1, F6, F7, F8, step 2.1, step 2.2]

4.1 Since $N-A=M$ is a martingale, $M^2-A=(M^2-N)+M$ is a martingale by step 3.1 and linearity, so [F2] and [F1] make $A$ a scalar bracket candidate; uniqueness gives $\langle M\rangle=A$. Also $[M,M]=[M]=N$, so $[M,M]-A=N-A=M$ is a martingale, making $A$ a cross-bracket candidate too; uniqueness gives $\langle M,M\rangle=A$. [A1, F1, F2, step 1.1, step 3.1, algebra] ∎

## Source notes

Tian states $[M]=N$ and $\langle M\rangle=A$ for a continuous compensator,
but omits the bracket proof. Bass supplies the jump-square and product-formula
framework; Andersen–Borgan–Gill–Keiding define the counting-process
compensator under an explicit filtration. The stopped-grid and finite-variation
arguments above complete the local proof without assuming a general
compensator-existence theorem.



