---
id: thm-stationary-point-process-intensity-measure-is-rho-lebesgue
kind: theorem
title: "A stationary point process of finite intensity has mean measure rho times Lebesgue measure"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-stationary-point-process-and-intensity
  - lem-translation-invariant-locally-finite-borel-measure-on-rd
  - lem-mean-measure-and-integrals-of-a-random-point-process
  - def-measure
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 8, §8.1 and proof of Proposition 8.2, PDF pp.81–82: stationarity and the constant-intensity mean measure."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 2, §2.4, PDF pp.35–37: stationary mean and second-moment measures."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume AC and Countable Choice, as carried by the random-point-process supplier. Let $\eta$ be a stationary locally finite point process on $\mathbb R^d$ with $0<\rho:=\mathbb E[\eta(Q)]<\infty$, where $Q=[0,1)^d$. Its mean measure $\nu(B):=\mathbb E[\eta(B)]$ is

$$\nu(B)=\rho\lambda_d(B)$$

for every Borel $B\subseteq\mathbb R^d$.

## Facts & Assumptions

**Given:** AC, Countable Choice, a stationary point process $\eta$, and $0<\rho=\mathbb E[\eta(Q)]<\infty$.

[A1] AC is carried by the transitive point-process supplier dependencies. ([[def-axiom-of-choice]])

[A2] Countable Choice is carried by the transitive point-process supplier dependencies and is used for the Borel Lebesgue measure calculus. ([[def-countable-choice]])

[F1] For a measurable random locally finite Borel measure, $\nu(B)=\mathbb E[\eta(B)]$ is a measure; all evaluations are measurable. ([[lem-mean-measure-and-integrals-of-a-random-point-process]])

[F2] Stationarity means the law is invariant under $\theta_x$, and $\rho=\mathbb E[\eta(Q)]$ for $Q=[0,1)^d$. ([[def-stationary-point-process-and-intensity]])

[F3] Every locally finite translation-invariant Borel measure $m$ on $\mathbb R^d$ satisfies $m(B)=m(Q)\lambda_d(B)$. ([[lem-translation-invariant-locally-finite-borel-measure-on-rd]])

## Proof

**Given:** AC, Countable Choice, a stationary point process $\eta$ with $\rho=\mathbb E\eta(Q)\in(0,\infty)$, and its mean measure $\nu$.

1.1 By [F1], $\nu(B)=\mathbb E[\eta(B)]$ is a Borel measure, and $\nu(Q)=\rho$. [given, F1, F2]

2.1 Let $B$ be bounded Borel. Choose an integer $n$ with $B\subseteq[-n,n)^d$. This cube is a finite disjoint union of translates $Q+k$, $k\in\{-n,\ldots,n-1\}^d$. Stationarity [F2] gives $\nu(Q+k)=\mathbb E[\eta(Q+k)]=\rho$ for every such $k$. Monotonicity and finite additivity therefore give $\nu(B)\le(2n)^d\rho<\infty$. Hence $\nu$ is locally finite. [step 1.1, F2, algebra]

2.2 For any Borel $B$ and translation $x$, the definition of recentering gives $$\nu(B+x)=\mathbb E[\eta(B+x)]=\mathbb E[(\theta_x\eta)(B)]=\mathbb E[\eta(B)]=\nu(B),$$ where the third equality is stationarity [F2]. Thus $\nu$ is translation invariant. [step 1.1, F2]

3.1 Apply [F3] to the locally finite translation-invariant measure $\nu$. Since $\nu(Q)=\rho$ by step 1.1, it follows that $\nu(B)=\rho\lambda_d(B)$ for every Borel $B$. This is the claimed mean-measure formula. [A1, A2, step 1.1, step 2.1, step 2.2, F3] ∎

## Sources

Last and Penrose, Chapter 8, §8.1 and Proposition 8.2; Baddeley, Lecture 2, §2.4. The proof checks the mean-measure hypotheses locally.
