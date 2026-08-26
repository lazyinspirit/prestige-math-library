---
id: ex-lehmer-code-and-q-factorial-for-s-four
kind: example
title: "The Lehmer codes of $S_4$ recover $[4]_q!$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-lehmer-code-is-a-bijection, thm-q-factorial-counts-permutations-by-inversions]
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

## Example

For $S_4$, the Lehmer-code codomain is

$$\{0\}\times\{0,1\}\times\{0,1,2\}\times\{0,1,2,3\}.$$

Grouping these $24$ code vectors by the sum of their coordinates gives

$$1+3q+5q^2+6q^3+5q^4+3q^5+q^6,$$

which is $[4]_q!$.

## Facts & Assumptions

**Given:** The Lehmer code is a bijection $S_4 \to \{0\}\times\{0,1\}\times\{0,1,2\}\times\{0,1,2,3\}$ ([[thm-lehmer-code-is-a-bijection]]).

[L1] The inversion generating function of $S_4$ is $[4]_q!$ ([[thm-q-factorial-counts-permutations-by-inversions]]).

## Verification

**Proof technique:** direct.

1.1 Every code vector has the form $(0,a,b,c)$ with $a\in\{0,1\}$, $b\in\{0,1,2\}$, and $c\in\{0,1,2,3\}$, so there are $24$ of them. Counting by the sum $a+b+c$ gives the coefficient sequence $1,3,5,6,5,3,1$. [given, algebra]

2.1 Therefore $\sum_{\sigma\in S_4}q^{\operatorname{inv}(\sigma)}= 1+3q+5q^2+6q^3+5q^4+3q^5+q^6$, which matches [L1]. [step 1.1, L1] ∎
