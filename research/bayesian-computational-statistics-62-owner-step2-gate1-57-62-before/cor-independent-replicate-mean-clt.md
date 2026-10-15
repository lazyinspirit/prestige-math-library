---
id: cor-independent-replicate-mean-clt
kind: corollary
title: "CLT for independent computation replicates"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
  - thm-lindeberg-levy-iid-central-limit-theorem
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed and used to invoke the Axiom-of-Choice-dependent Lindeberg–Levy CLT; all finite-sample ledger identities remain choice-free."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.1 and end notes"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Statement

Assume AC. Let $(Z_r)_{r\ge1}$ be IID real computation-replicate outputs with mean $\mu$ and variance $0<\tau^2<\infty$. Then, as $R\to\infty$,
$$\frac{\sqrt R(\overline Z_R-\mu)}{\tau}\Rightarrow N(0,1),\qquad\overline Z_R:=\frac1R\sum_{r=1}^{R}Z_r.$$
This is a limit for the replicate-randomization law under the stated fixed-target setup; it is not a data-sampling confidence statement and does not by itself justify a finite-$R$ Student interval.

## Facts & Assumptions

**Given:** Assume AC. Let $(Z_r)_{r\ge1}$ be IID real random variables with mean $\mu$ and variance $0<\tau^2<\infty$. Prove the standardized replicate-mean convergence.

[F1] IID means the family is independent and identically distributed. ([[def-identically-distributed-and-iid-random-variables]])

[F2] For a real random variable with finite second moment, variance is $\mathbb E[(Z-\mathbb E Z)^2]$. ([[def-moments-variance-and-covariance]])

[F3] Under AC, IID real variables with finite positive variance satisfy the Lindeberg–Levy normalized-sum convergence. ([[thm-lindeberg-levy-iid-central-limit-theorem]])

[A1] AC is the axiom that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

## Proof

1.1 The normalized replicate average is $\sqrt R(\overline Z_R-\mu)/\tau=(\sum_{r=1}^{R}Z_r-R\mu)/(\tau\sqrt R)$, the normalized sum in the Lindeberg–Levy theorem. [given, F1, F2, algebra]

2.1 Under [A1], apply [F3] to the IID sequence in step 1.1 to obtain the asserted convergence in distribution. [given, A1, F3, step 1.1] ∎
