---
id: cor-the-loglog-bound-eventually-dominates-the-classical-bound
kind: corollary
title: "For fixed $H$, the log-log scale eventually exceeds every classical scale $2^{c\\sqrt{\\log_2 n}}$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [thm-classical-erdos-hajnal-bound,
       thm-loglog-erdos-hajnal-bound,
       def-logarithm-to-a-base]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Matija Bucić, Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. I. A loglog step towards Erdős-Hajnal"
      url: "https://arxiv.org/html/2301.10147"
---

## Statement

Let $a,b>0$. Then there exists $N\ge2$ such that for every integer $n\ge N$,
$$2^{b\sqrt{\log_2 n\,\log_2\log_2 n}}\ge 2^{a\sqrt{\log_2 n}}.$$
In particular, for each fixed finite graph $H$, the log-log lower bound of
[[thm-loglog-erdos-hajnal-bound]] eventually exceeds every classical scale
$2^{a\sqrt{\log_2 n}}$.

## Facts & Assumptions

**Given:** Positive reals $a,b$.

[L1] For $n>1$, $\log_2 n$ is defined ([[def-logarithm-to-a-base]]).

## Proof

**Proof technique:** direct.

1.1 For every integer $n>2$, one has $\sqrt{\log_2 n\,\log_2\log_2 n}=\sqrt{\log_2\log_2 n}\,\sqrt{\log_2 n}$. [L1, algebra]

2.1 Choose $N\ge4$ so that $b\sqrt{\log_2\log_2 n}\ge a$ whenever $n\ge N$. This is possible because $\log_2\log_2 n$ tends to $+\infty$ with $n$. [step 1.1, choose]

3.1 For every $n\ge N$, step 2.1 gives $b\sqrt{\log_2 n\,\log_2\log_2 n}\ge a\sqrt{\log_2 n}$, and exponentiating base $2$ preserves the inequality. [step 1.1, step 2.1, algebra]

4.1 This proves the displayed eventual inequality, and the final sentence is its application with the constant supplied by [[thm-loglog-erdos-hajnal-bound]]. [step 3.1] ∎
