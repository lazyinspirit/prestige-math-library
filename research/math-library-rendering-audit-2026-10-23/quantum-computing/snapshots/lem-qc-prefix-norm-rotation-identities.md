---
id: lem-qc-prefix-norm-rotation-identities
kind: lemma
title: QC24 Prefix Norm Rotation Identities
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - alg-qc-state-preparation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
---

## Statement

For a prefix $p$ with $0\le |p|<n$ and $r_p>0$, the angle $\theta_p=2\operatorname{atan2}(r_{p1},r_{p0})$ in [[alg-qc-state-preparation]] satisfies

$$\cos(\theta_p/2)=r_{p0}/r_p,\qquad \sin(\theta_p/2)=r_{p1}/r_p.$$

## Facts & Assumptions

**Given:** A valid normalized amplitude table and a prefix $p$ with $0\le |p|<n$ and $r_p>0$.

[F1] The procedure defines $r_p$ as the square root of the sum of squared amplitudes over strings extending $p$, and uses $\theta_p=2\operatorname{atan2}(r_{p1},r_{p0})$ ([[alg-qc-state-preparation]]).

## Proof

**Given:** As in Facts & Assumptions.

1.1 Every string extending $p$ extends exactly one of $p0$ or $p1$, so splitting the finite sum in the definition of the prefix radii gives $r_p^2=r_{p0}^2+r_{p1}^2$. Both child radii are nonnegative and $r_p>0$, so the pair $(r_{p0},r_{p1})$ is not $(0,0)$. By the declared $\operatorname{atan2}$ convention, $\phi=\operatorname{atan2}(r_{p1},r_{p0})$ lies in $[0,\pi/2]$ and has cosine $r_{p0}/r_p$ and sine $r_{p1}/r_p$. [F1, given, algebra]

2.1 Because $\theta_p/2=\phi$, substituting gives both displayed identities, including the cases where exactly one child radius is zero. [F1, step 1.1, algebra] ∎
