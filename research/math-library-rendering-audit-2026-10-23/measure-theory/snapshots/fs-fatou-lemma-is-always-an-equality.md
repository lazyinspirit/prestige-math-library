---
id: fs-fatou-lemma-is-always-an-equality
kind: false-statement
title: "FALSE: Fatou's lemma is always an equality"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-fatou-lemma]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Fatou's Lemma 2.18"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

For every sequence of nonnegative measurable functions $(f_n)$,
$$\int\liminf_n f_n\,d\mu=\liminf_n\int f_n\,d\mu.$$

## Facts & Assumptions

**Given:** The statement above.

[L1] Fatou's lemma only asserts the inequality $\le$ ([[thm-fatou-lemma]]).

## Refutation

**Proof technique:** direct.

1.1 On $\mathbb R$ with Lebesgue measure, let $f_n:=\chi_{[n,n+1]}$; then $\liminf_n f_n=0$ pointwise. [given, construct]

2.1 Therefore $\int\liminf_n f_n\,d\mu=0$, while $\int f_n\,d\mu=1$ for every $n$. So the equality in the Statement fails, and [L1] is strict here. [step 1.1, L1, algebra] ∎
