---
id: cex-process-valid-under-one-null-but-not-composite-null
kind: counterexample
title: Validity under one null law does not give a composite-null test supermartingale
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-nonnegative-test-supermartingale
  - def-filtration-and-filtered-probability-space
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
generation:
  role: counterexample
sources:
  references: []
---

## Statement refuted

The claim “a nonnegative process that is a supermartingale under one member of a composite null family is a test supermartingale for the whole family” is false.

## Facts & Assumptions

**Given:** The two Bernoulli laws, filtration, process, and composite null family in the Counterexample. Assume AC for the test-supermartingale convention.

[F1] [[def-nonnegative-test-supermartingale]]: a test supermartingale must satisfy the supermartingale and initial-expectation conditions under every null law.

[A1] [[def-axiom-of-choice]]: AC is inherited by the conditional-expectation convention in F1.

## Counterexample

Let $\Omega=\{0,1\}$, let $P_{1/4}(X=1)=1/4$ and $P_{3/4}(X=1)=3/4$, and take the composite null family $\mathcal P_0=\{P_{1/4},P_{3/4}\}$. Let $\mathcal F_0=\{\varnothing,\Omega\}$ and $\mathcal F_t=2^\Omega$ for $t\ge1$. Set $M_0=1$ and $M_t=2X$ for $t\ge1$.

1.1 Under $P_{1/4}$, $\mathcal F_0$ is trivial, so $\mathbb E_{P_{1/4}}[M_1\mid\mathcal F_0]=\mathbb E_{P_{1/4}}[2X]=1/2\le M_0$. At all later times $M_t$ is constant in time. The process is nonnegative, adapted, integrable, and starts at one, so it is a test supermartingale for the singleton null $\{P_{1/4}\}$. [given, F1, A1, algebra]

1.2 Under $P_{3/4}$, $\mathbb E_{P_{3/4}}[M_1\mid\mathcal F_0]=\mathbb E_{P_{3/4}}[2X]=3/2>M_0=1$, so the supermartingale inequality fails already at time zero. [given, algebra]

2.1 By F1, a test supermartingale for $\mathcal P_0$ must satisfy the supermartingale condition under both laws. Step 1.2 shows failure under $P_{3/4}$, so the proposed process is not a test supermartingale for the composite null. [F1, step 1.2] ∎
