---
id: ex-height-theorem-bound-sharp
kind: example
title: "Coordinate ideals show the height bound is sharp"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-dimension-of-a-finite-polynomial-ring-over-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.116: Dimension of finite type algebras over fields, reprise"
      url: "https://stacks.math.columbia.edu/tag/07NB"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-03-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---


## Example

In $A=k[x_1,\ldots,x_n]$, the coordinate ideal
$$ I=(x_1,\ldots,x_n) $$
is maximal, hence minimal over itself, and has height exactly $n$.

## Facts & Assumptions

**Given:** A field $k$ and the polynomial ring $A=k[x_1,\ldots,x_n]$.

[L1] The polynomial ring $A$ has dimension $n$, so every prime height in $A$ is at most $n$ ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]).

[L2] The quotient by $I$ is the field $k$ by direct evaluation.

## Verification

**Proof technique:** direct computation.

1.1 The quotient $A/I\cong k$ is a field, so $I$ is maximal and therefore prime. [L2, given]

2.1 For $n\ge1$, the chain $(0)\subsetneq(x_1)\subsetneq\cdots\subsetneq(x_1,\ldots,x_n)=I$ consists of primes, since each quotient is a polynomial domain over $k$; it gives $\operatorname{ht}(I)\ge n$. Fact [L1] gives the opposite bound. When $n=0$, $A=k$ and $I=(0)$ has height zero. Thus $\operatorname{ht}(I)=n$ in all cases. [L1, L2, step 1.1, algebra]

3.1 Therefore the height bound in Krull's height theorem is sharp. [step 2.1] ∎
