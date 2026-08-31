---
id: fs-l-p-includes-into-l-r-on-every-measure-space-when-p-less-r
kind: false-statement
title: "FALSE: $L^p$ includes into $L^r$ on every measure space when $p < r$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cex-l-one-not-subset-l-two-on-the-line, cex-l-two-not-subset-l-one-on-the-line]
proof_strategy: "Refute with the two power-function counterexamples on the line: one witness lies in L^1 minus L^2 and another lies in L^2 minus L^1."
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem 8.2"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement

For every measure space and every exponents $1\le p<r\le\infty$, one has
$L^p\subseteq L^r$.

## Facts & Assumptions

**Given:** The two power-function counterexamples on $\mathbb R$.

[L1] There is an $L^1$ function on $\mathbb R$ that is not in $L^2$
([[cex-l-one-not-subset-l-two-on-the-line]]).

[L2] There is an $L^2$ function on $\mathbb R$ that is not in $L^1$
([[cex-l-two-not-subset-l-one-on-the-line]]).

## Refutation

**Proof technique:** Refute with the two power-function counterexamples on the
line: one witness lies in $L^1\setminus L^2$ and another lies in
$L^2\setminus L^1$.

1.1 Taking $p=1$ and $r=2$, [L1] already contradicts the claim. [L1]

1.2 The reverse failure [L2] shows why the line supports neither global [L2]
inclusion.

2.1 Hence the displayed universal inclusion statement is false. [step 1.1, step 1.2]
∎
