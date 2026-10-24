---
id: ex-cohen-macaulay-ring-with-zero-divisors
title: A Cohen--Macaulay ring with zero divisors
kind: example
status: published
origin: pipeline
deps: [def-cohen-macaulay-local-module-and-ring, def-depth-with-respect-to-an-ideal, def-regular-sequence-on-a-module]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---
## Example

For a field $k$, the ring $A=k\llbracket x,y\rrbracket/(xy)$ is a
one-dimensional Cohen--Macaulay local ring
with nonzero zero divisors.

## Facts & Assumptions

**Given:** $k$ is a field. A nonzero one-variable formal power series factors as a power of its variable times a unit, by its least nonzero coefficient. In $k\llbracket x,y\rrbracket$, a series with nonzero constant term is invertible by the formal geometric series.

## Verification

**Proof technique:** direct.

1.1 Put $A=k\llbracket x,y\rrbracket/(xy)$ and $\mathfrak m=(x,y)A$. A series is a unit exactly when its constant term is nonzero, so $A$ is local with maximal ideal $\mathfrak m$. The maps setting $y=0$ and $x=0$ identify $A/(y)$ with $k\llbracket x\rrbracket$ and $A/(x)$ with $k\llbracket y\rrbracket$. Every prime of $A$ contains $x$ or $y$ since $xy=0$. In either one-variable quotient the only primes are $(0)$ and the variable ideal: factor a nonzero member by its least-order term, whose remaining factor is a unit. Thus the prime chains of $A$ have length at most one, while $(x)A\subsetneq\mathfrak m$ is such a chain. Hence $\dim A=1$. [given, algebra]

2.1 The map $A\to k\llbracket x\rrbracket\times k\llbracket y\rrbracket$ given by the two branch restrictions is injective: a series divisible by both $x$ and $y$ is divisible by $xy$. The element $x+y$ maps to $(x,y)$, so multiplication by it is injective on both domains and therefore on $A$. The quotient $A/(x+y)\cong k\llbracket x\rrbracket/(x^2)$ is nonzero. Thus $(x+y)$ is an $A$-regular sequence and $\operatorname{depth}A\ge1$. [given, step 1.1, algebra]

3.1 To see that no $A$-regular sequence has length two, let $u\in\mathfrak m$ be any nonzerodivisor. Its two branch restrictions are nonzero; write them $x^a h(x)$ and $y^b g(y)$, with $a,b\ge1$ and $h,g$ units. Since $xu=x^{a+1}h(x)$ and $yu=y^{b+1}g(y)$ in $A$, both $x^{a+1}$ and $y^{b+1}$ lie in $(u)$. Hence a power of $\mathfrak m$ vanishes in the nonzero local ring $A/uA$. Every element of its maximal ideal is nilpotent and therefore cannot be a nonzerodivisor there. By the depth and regular-sequence definitions, $\operatorname{depth}A=1=\dim A$. The classes of $x$ and $y$ are nonzero and have zero product, as claimed. [step 1.1, step 2.1, algebra] ∎
