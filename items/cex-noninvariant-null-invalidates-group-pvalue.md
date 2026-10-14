---
id: cex-noninvariant-null-invalidates-group-pvalue
kind: counterexample
title: "Without null invariance a group-rank p-value can be anti-conservative"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-finite-group-randomization-test
  - def-orbit-rank-p-value
  - def-finite-probability-space-and-event
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Jesse Hemerik and Jelle Goeman, Exact testing with random permutations, Sections 2–3"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6405018/"
---

## Statement refuted

For every finite group action and every null law, the inclusive group-average upper-tail rank is superuniform, even when the null law is not invariant under the group.

## Facts & Assumptions

**Given:** A two-point finite sample space, a swapping group action, statistic $T(x)=x$, the noninvariant null weights specified below, and an auxiliary $U\sim\operatorname{Unif}[0,1]$ independent of $X$.

[F1] A finite probability space assigns event probabilities by summing outcome weights. [[def-finite-probability-space-and-event]]

[F2] A finite-group setup records the action, statistic, and invariance condition. [[def-finite-group-randomization-test]]

[F3] The inclusive and tie-randomized orbit-rank formulas count transformed statistic values with multiplicity and divide by $|G|$. [[def-orbit-rank-p-value]]

[A1] We evaluate those numeric formulas on the stated action and statistic; this law deliberately falls outside the invariant-null setup of [F2], illustrating why its invariance premise is needed for validity.

## Counterexample

Take $\Omega=\{0,1\}$, $G=\{e,s\}$ with $s$ swapping $0$ and $1$, and let $P(X=1)=9/10$, $P(X=0)=1/10$. This null law is not invariant because $P(s\cdot X=1)=1/10\ne9/10$.

**Given:** The finite model and rank formula above.

1.1 For $x=1$, the transformed statistic values are $T(e\cdot1)=1$ and $T(s\cdot1)=0$, so exactly one of the two group elements has value at least $T(1)$ and $p_0(1)=1/2$. For $x=0$, both transformed values $1,0$ are at least $T(0)=0$, so $p_0(0)=1$. [F1, F2, F3, A1, given, algebra]

2.1 Therefore $\{p_0\le1/2\}=\{X=1\}$ and $P(p_0\le1/2)=9/10>1/2$, contradicting superuniformity. [F1, step 1.1, given, algebra]

3.1 The same example also defeats tie randomization: $p_U(1)=U/2$ and $p_U(0)=(1+U)/2$. Hence $P(p_U\le1/2)=9/10$, since at $X=1$ the event always occurs and at $X=0$ it requires $U=0$, an event of probability zero under the independent uniform law in the Given. [F3, A1, step 1.1, given, algebra] ∎
