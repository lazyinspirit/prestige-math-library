---
id: ex-poisson-and-cox-count-laws-on-a-finite-window
kind: example
title: "Poisson and Cox counts with the same mean on a finite window"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-random-measure-and-locally-finite-point-process
  - def-poisson-and-cox-point-process
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law
  - def-measure-kernel-and-probability-kernel
  - def-conditional-law-given-a-random-element
  - def-finite-sigma-finite-and-semifinite-measures
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Gunter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 3, Proposition 3.8, printed p. 23 (PDF p. 35), and Chapter 13, Proposition 13.6, printed p. 130 (PDF p. 142): finite mixed-binomial and Cox count laws."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 1, Lemma 1.1 and finite-window simulation construction, PDF pp. 10-12."
verification:
  precheck: pending
---

## Statement

Let $W$ be a compact Borel window in a locally compact, second-countable
Hausdorff space $S$, and let $\mu$ be a finite Borel measure
([[def-finite-sigma-finite-and-semifinite-measures]]) supported on $W$ with
$\mu(W)=1$. A Poisson point process of intensity $\mu$ and the Cox
process directed by $\xi=Z\mu$, where $\mathbb P(Z=0)=\mathbb P(Z=2)=1/2$,
both have mean count one in $W$. Their count variances differ: the Poisson
variance is $1$, whereas the Cox variance is $2$.

## Facts & Assumptions

**Given:** A compact Borel window $W$ and a finite Borel probability measure
$\mu$ supported on $W$.

[F1] For each finite intensity measure $\rho$, a Poisson point process of
intensity $\rho$ exists and has independent counts on disjoint sets, each
count being $\operatorname{Pois}(\rho(B))$. In particular its total count is
$\operatorname{Pois}(\rho(S))$.
([[thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law]],
[[def-poisson-and-cox-point-process]])

[F2] If $N\sim\operatorname{Pois}(a)$, then $\mathbb E N=a$ and
$\operatorname{Var}(N)=a$. ([[def-scalar-poisson-count-law]],
[[lem-poisson-count-law-normalization-and-moments]])

[F3] A supplied measurable probability kernel that is the regular conditional
law of a point process given its directing random measure makes that process
Cox when its conditional laws are Poisson.
([[def-measure-kernel-and-probability-kernel]],
[[def-conditional-law-given-a-random-element]],
[[def-poisson-and-cox-point-process]])

## Proof
**Proof technique:** direct.

1.1 Let $P_0$ be the zero-process law and let $P_{2\mu}$ be the finite-intensity Poisson law of intensity $2\mu$, both supplied by [F1]. On the disjoint union of a $P_0$ branch and a $P_{2\mu}$ branch, assign probability $1/2$ to each branch, set $Z=0$ or $2$ according to the branch, set $\xi=Z\mu$, and use the branch process as $\eta_C$. For a locally finite measure $\rho$, define $K(\rho,\cdot)=P_{2\mu}$ when $\rho(S)=2$ and $K(\rho,\cdot)=P_0$ otherwise. Since $\rho\mapsto\rho(S)$ is an evaluation, this is a measurable probability kernel; on the support $\{0,2\mu\}$ of $\xi$, it is the conditional law of $\eta_C$ and is Poisson with intensity $\xi$. Thus [F3] verifies the Cox property. [given, F1, F3, construct]

2.1 Let $\eta_P$ have the finite-intensity Poisson law of intensity $\mu$ from [F1]. Since $\mathbb E Z=1$, for every Borel $B$, $\mathbb E\xi(B)=\mathbb E[Z]\mu(B)=\mu(B)$, equal to the deterministic intensity measure of $\eta_P$. [given, step 1.1, F1, algebra]

2.2 By [F1]-[F2], $N_P=\eta_P(W)\sim\operatorname{Pois}(1)$, so $\mathbb E N_P=1$ and $\operatorname{Var}(N_P)=1$. Conditional on $Z=z$, $N_C=\eta_C(W)$ is $\operatorname{Pois}(z)$; hence $\mathbb E N_C=\mathbb E Z=1$ and $\mathbb E N_C^2=\mathbb E[Z+Z^2]=\tfrac12(0)+\tfrac12(2+4)=3$. Therefore $\operatorname{Var}(N_C)=3-1^2=2$. [given, step 1.1, F1, F2, algebra]

3.1 The deterministic and directing mean measures agree by step 2.1, while steps 2.2 show equal expected window counts and different count variances. The difference comes from the random intensity $Z$: conditional Poisson variation contributes $\mathbb E Z=1$, and variation in $Z$ contributes $\operatorname{Var}(Z)=1$. [step 2.1, step 2.2, algebra] ∎