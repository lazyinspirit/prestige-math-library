---
id: ex-the-loglog-bound-is-still-subpolynomial
kind: example
title: "A lower bound of size $2^{c\\sqrt{\\log_2 n\\,\\log_2\\log_2 n}}$ is still subpolynomial in $n$"
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
sources:
  scraped: []
  references:
    - title: "Matija Bucić, Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. I. A loglog step towards Erdős-Hajnal"
      url: "https://arxiv.org/html/2301.10147"
---

## Example

Fix $c,\varepsilon>0$. Then the function
$2^{c\sqrt{\log_2 n\,\log_2\log_2 n}}$ still grows more slowly than
$n^\varepsilon$.

## Facts & Assumptions

**Given:** Positive reals $c$ and $\varepsilon$.

[L1] For $n>2$, both $\log_2 n$ and $\log_2\log_2 n$ are defined ([[def-logarithm-to-a-base]]).

## Verification

**Proof technique:** direct.

1.1 Write $n=2^L$ with $L:=\log_2 n$. Then $2^{c\sqrt{L\log_2 L}}/n^\varepsilon=2^{c\sqrt{L\log_2 L}-\varepsilon L}$. [L1, algebra]

2.1 For $L\ge16$, one has $\log_2 L\le\sqrt L$, so $\sqrt{L\log_2 L}\le L^{3/4}$. If moreover $L\ge (2c/\varepsilon)^4$, then $cL^{3/4}\le (\varepsilon/2)L$, and therefore $c\sqrt{L\log_2 L}-\varepsilon L\le-(\varepsilon/2)L$. Hence for all sufficiently large $n$, $2^{c\sqrt{\log_2 n\,\log_2\log_2 n}}/n^\varepsilon\le 1/n^{\varepsilon/2}$, which tends to $0$. [step 1.1, algebra]

3.1 Therefore $2^{c\sqrt{\log_2 n\,\log_2\log_2 n}}=o(n^\varepsilon)$. [step 2.1] ∎
