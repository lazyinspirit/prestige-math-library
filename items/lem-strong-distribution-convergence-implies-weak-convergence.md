---
id: "lem-strong-distribution-convergence-implies-weak-convergence"
kind: "lemma"
title: "Strong distribution convergence implies weak convergence"
deps: ["def-weak-and-strong-topologies-on-distributions"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

If a net of distributions converges strongly, it converges weakly to the same distribution. In particular this holds for sequences. The implication requires no choice axiom.

## Facts & Assumptions

[F1] Strong convergence is convergence uniformly on every bounded test set; weak convergence is pointwise convergence on tests, and every singleton test set is bounded ([[def-weak-and-strong-topologies-on-distributions]]).

## Proof

**Given:** $u_i\to u$ strongly.

1.1 Fix a test $\varphi$. By F1 the singleton $B=\{\varphi\}$ is bounded and $|u_i(\varphi)-u(\varphi)|=p_B(u_i-u)\to0$. [given, F1]

2.1 The test was arbitrary, so F1 identifies these scalar limits as weak convergence. This uses one given test at a time, without a simultaneous selection. For the zero test the seminorm is zero; on the empty domain the sole distribution is zero. No converse for arbitrary nets is asserted. $\square$ [step 1.1, F1]
