---
id: ex-catalan-numbers-to-six-computed-two-ways
kind: example
title: "The Catalan numbers through $C_6$, from the recurrence and from the closed formula"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-catalan-recurrence, cor-catalan-closed-formula, def-catalan-number, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
pipeline_run: null
---

## Example

The Catalan numbers through $C_6$ are:

| $n$ | from the recurrence | $\binom{2n}{n}$ | from $(n+1)C_n=\binom{2n}{n}$ |
|---|---:|---:|---:|
| $0$ | $1$ | $1$ | $1$ |
| $1$ | $1$ | $2$ | $1$ |
| $2$ | $2$ | $6$ | $2$ |
| $3$ | $5$ | $20$ | $5$ |
| $4$ | $14$ | $70$ | $14$ |
| $5$ | $42$ | $252$ | $42$ |
| $6$ | $132$ | $924$ | $132$ |

## Facts & Assumptions

**Given:** the Catalan recurrence and the closed formula.

[L1] $C_{n+1}=\sum_{i=0}^{n}C_iC_{n-i}$ with $C_0=1$ ([[thm-catalan-recurrence]]).

[L2] $(n+1)C_n=\binom{2n}{n}$ ([[cor-catalan-closed-formula]]).

## Verification

**Proof technique:** direct.

1.1 Starting from $C_0=1$, the recurrence [L1] gives successively $C_1=1$, $C_2=2$, $C_3=5$, $C_4=14$, $C_5=42$ and $C_6=132$. [L1]

1.2 The central binomial coefficients in the third column are $\binom{0}{0}=1$, $\binom{2}{1}=2$, $\binom{4}{2}=6$, $\binom{6}{3}=20$, $\binom{8}{4}=70$, $\binom{10}{5}=252$ and $\binom{12}{6}=924$. [given]

2.1 Dividing the third column by $n+1$ as [L2] prescribes gives exactly the second column again, so the two routes agree term by term. [L2, step 1.1, step 1.2] ∎

## Remarks

- The table is the finite check behind the three proofs on the A page: every one of them lands on the same sequence before any general theorem is applied.
