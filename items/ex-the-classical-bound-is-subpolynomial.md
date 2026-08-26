---
id: ex-the-classical-bound-is-subpolynomial
kind: example
title: "A lower bound of size $2^{c\\sqrt{\\log_2 n}}$ is still subpolynomial in $n$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-logarithm-to-a-base]
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture: A Survey"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
---

## Example

Fix $c,\varepsilon>0$. Then the function $2^{c\sqrt{\log_2 n}}$ grows more
slowly than $n^\varepsilon$.

## Facts & Assumptions

**Given:** Positive reals $c$ and $\varepsilon$.

[L1] For $n>1$, $\log_2 n$ is defined ([[def-logarithm-to-a-base]]).

## Verification

**Proof technique:** direct.

1.1 Write $n=2^L$ with $L:=\log_2 n$. Then $2^{c\sqrt L}/n^\varepsilon=2^{c\sqrt L-\varepsilon L}$. [L1, algebra]

2.1 If $L\ge(2c/\varepsilon)^2$, then $c\sqrt L\le (\varepsilon/2)L$, so $c\sqrt L-\varepsilon L\le-(\varepsilon/2)L$. Hence for all sufficiently large $n$, $2^{c\sqrt{\log_2 n}}/n^\varepsilon\le 2^{-(\varepsilon/2)\log_2 n}=1/n^{\varepsilon/2}$, which tends to $0$. [step 1.1, algebra]

3.1 Therefore $2^{c\sqrt{\log_2 n}}=o(n^\varepsilon)$. [step 2.1] ∎
