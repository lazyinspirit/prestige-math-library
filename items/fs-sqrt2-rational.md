---
id: fs-sqrt2-rational
kind: false-statement
title: "FALSE: some rational number squares to 2"
status: draft
origin: session
deps: [def-rationals, thm-rat-field]
aliases: []
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

**False claim:** there exists $x \in \mathbb{Q}$ with $x^2 = 2$.

## Facts & Assumptions

**Given:** The rationals as quotients of integer pairs ([[def-rationals]]).

[A1] Every rational can be written $a/b$ in lowest terms, with $a, b$ not both even (cancel common factors of $2$; the process terminates by well-ordering of $\mathbb{N}$).

[A2] Parity in $\mathbb{Z}$: if $k^2$ is even then $k$ is even (an odd $k = 2j+1$ has odd square $4j^2 + 4j + 1$).

## Refutation

**Proof technique:** contradiction.

1.1 Assume, for contradiction, that some $x \in \mathbb{Q}$ has $x^2 = 2$; write $x = a/b$ in lowest terms, $a, b$ not both even. [assume-contra, A1]

2.1 Clearing denominators: $a^2 = 2b^2$. [step 1.1, algebra]

3.1 $a^2$ is even, hence $a$ is even: $a = 2c$. [step 2.1, A2]

4.1 Substituting: $4c^2 = 2b^2$, so $b^2 = 2c^2$ is even, hence $b$ is even. [step 3.1, A2, algebra]

5.1 Both $a$ and $b$ are even, contradicting the lowest-terms choice of step 1.1; the assumption fails: no rational squares to $2$. [step 4.1, step 1.1, discharge-contradiction] ∎
