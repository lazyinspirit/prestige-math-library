---
id: cex-eulerian-statistic-need-not-be-mahonian
kind: counterexample
title: "The number of excedances is Eulerian but not Mahonian"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-descents-and-excedances-are-equidistributed, cor-major-index-generating-function-is-q-factorial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

The statistic $\operatorname{exc}$ is Eulerian, because it is equidistributed
with descents, but it is not Mahonian: on $S_3$ its distribution is
$1,4,1$, while the inversion distribution is $1,2,2,1$.

## Facts & Assumptions

**Given:** Descents and excedances are equidistributed ([[thm-descents-and-excedances-are-equidistributed]]), while the major-index generating function is $[n]_q!$ and so agrees with the inversion distribution ([[cor-major-index-generating-function-is-q-factorial]]).

## Verification

**Proof technique:** direct.

1.1 On $S_3$, the excedance counts are distributed as $1,4,1$: there is one permutation with $0$ excedances, four with $1$, and one with $2$. [given]

2.1 On $S_3$, the inversion numbers are distributed as $1,2,2,1$ over $0,1,2,3$. Since these two distributions are different, $\operatorname{exc}$ is not Mahonian. [step 1.1, given] ∎
