---
id: ex-terminating-temporal-point-process-with-terminal-mass
kind: example
title: "A finite-window Poisson process that terminates at time one"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-temporal-point-process-and-conditional-intensity
  - lem-conditional-intensity-interevent-survival-and-density
  - lem-homogeneous-poisson-ordered-event-time-density
  - def-poisson-and-cox-point-process
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - def-progressively-measurable-and-predictable-process
  - def-counting-process-intensity-and-compensator-contract
  - thm-pi-system-criterion-for-independent-sigma-algebras
  - def-axiom-of-choice
  - def-countable-choice
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Joseph G. Rasmussen, Lecture Notes: Temporal Point Processes and the Conditional Intensity Function"
      url: "https://arxiv.org/pdf/1806.00221"
    - title: "Robert E. Kass, Uri T. Eden, and Emery N. Brown, Analysis of Neural Data, Chapter 19: Point Processes"
      url: "https://web.math.ku.dk/~susanne/BSc/Kass2014_Chapter_PointProcesses.pdf"
---

## Example

Let $\eta$ be a supplied Poisson point process on $(0,1]$ with Lebesgue
intensity, and extend it by zero after time $1$. Its counting process is
$N_t=\eta((0,t\wedge1])$. The effective conditional intensity is
$\lambda^*(t)=\mathbf1_{(0,1]}(t)$ and its compensator is
$A_t=t\wedge1$. This is a non-explosive process that has ended by time one,
yet from the empty history the next-event law puts probability $e^{-1}$ on
no event ever.

## Facts & Assumptions

**Given:** A Poisson process $\eta$ on $(0,1]$ with Lebesgue intensity, extended by no points after $1$. Use the event-history filtration $\mathcal H_s=\sigma(\eta(B):B\subseteq(0,s\wedge1]\text{ Borel})$.

[F1] Counts on disjoint Borel sets are independent Poisson variables with means given by the intensity measure. ([[def-poisson-and-cox-point-process]])

[F2] The finite-window Poisson process exists, is simple, and has finite total count; for rate one its ordered event-time density and empty-pattern probability are given by the local construction. ([[lem-homogeneous-poisson-ordered-event-time-density]])

[F3] A Poisson count of finite mean $\lambda$ has mean $\lambda$, second moment $\lambda^2+\lambda$, and zero-count mass $e^{-\lambda}$. ([[def-scalar-poisson-count-law]], [[lem-poisson-count-law-normalization-and-moments]])

[F4] A deterministic Borel function of time is predictable for the predictable sigma-algebra convention. ([[def-progressively-measurable-and-predictable-process]])

[F5] Independence verified on generating pi-systems extends to the sigma-algebras they generate. ([[thm-pi-system-criterion-for-independent-sigma-algebras]])

[F6] The finite-horizon model contract requires a continuous predictable compensator with finite expectation and a square-integrable martingale $N-A$. ([[def-counting-process-intensity-and-compensator-contract]])

[F7] The conditional next-event survivor is the exponential of minus the integrated no-event hazard. ([[lem-conditional-intensity-interevent-survival-and-density]])

[A1] The compensator martingale and conditional-expectation interface uses the Axiom of Choice. ([[def-axiom-of-choice]])

[A2] Countable Choice is used by the finite-window Poisson construction. ([[def-countable-choice]])

## Verification

1.1 The extension by zero has unit jumps only at the simple event times of $\eta$, and $N_t$ is finite because $N_1$ is Poisson with mean $1$. The effective intensity $\lambda^*(t)=\mathbf1_{(0,1]}(t)$ is deterministic Borel and hence predictable by [F4]. Direct integration gives $A_t=\int_0^t\lambda^*(u)\,du=t\wedge1$, so $A$ is continuous, nondecreasing, and bounded by $1$. [F2, F4, construct]

2.1 For $0\le s\le t$, the increment $N_t-N_s$ is the count on $(s,t]\cap(0,1]$, a Poisson variable of mean $\min(t,1)-\min(s,1)$. Refine a finite family of past Borel sets into the disjoint atoms of the finite Boolean algebra they generate. Every atom lies in $(0,s]$, so [F1] gives independence of its count vector from the future increment. These count cylinders generate the natural-history sigma-algebra, and [F5] extends independence to that sigma-algebra. Therefore $\mathbb E[N_t-N_s\mid\mathcal H_s]=\min(t,1)-\min(s,1)=A_t-A_s$. Thus $N-A$ is a martingale. Since $N_t$ has finite second moment by [F3] and $A_t\le1$, this martingale is square-integrable and meets [F6]; $\mathbb E[A_T]\le1$. [A1, A2, F1, F3, F5, F6, step 1.1]

3.1 Given the history at time $s$, future counts in $(s,u]\cap(0,1]$ are independent of that history by the independence proved in step 2.1. Their zero-count probability is $\exp[-(\min(u,1)-\min(s,1))]$, so the conditional hazard is $1$ until time $1$ and $0$ thereafter; for $s\ge1$ the survivor is identically one and the hazard zero. In particular, from the empty history at time $0$, $\Pr(T_1>u)=\exp(-\min(u,1))$, consistent with [F7]. [F1, F3, F7, step 2.1]

4.1 Taking $u\to\infty$ in step 3.1 gives $\Pr(T_1=\infty)=e^{-1}$, also the zero-count probability $\Pr(N_1=0)$ by [F3]. No events occur after time $1$, and $N_1$ is finite almost surely, so the process terminates and is non-explosive. [F2, F3, step 3.1] ∎

## Source notes

Rasmussen's Example 2.5 exhibits a unit-rate Poisson process on a finite interval and identifies its positive terminal no-event mass. The local verification also checks the compensator martingale contract and the finite-count/non-explosion boundary.
