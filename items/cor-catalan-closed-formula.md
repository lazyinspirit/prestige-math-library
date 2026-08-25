---
id: cor-catalan-closed-formula
kind: corollary
title: "$(n+1)\\,C_n=\\binom{2n}{n}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-catalan-numbers-by-reflection, thm-binomial-closed-formula, def-factorial-and-falling-factorial, def-binomial-coefficient, lem-nat-mult-cancellative, lem-nat-add-cancellative, def-canonical-natural]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5 Catalan Numbers"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.3'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

For every $n\in\mathbb{N}$, in $\mathbb{N}$,

$$(n+1)\,C_n=\binom{2n}{n}.$$

## Facts & Assumptions

**Given:** a natural number $n$.

[F1] $C_n+\binom{2n}{n+1}=\binom{2n}{n}$ in $\mathbb{N}$ ([[thm-catalan-numbers-by-reflection]]).

[L1] For $m,k\in\mathbb{N}$ with $k\le m$: $\binom{m}{k}\cdot k!\cdot (m-k)! = m!$ in $\mathbb{N}$ ([[thm-binomial-closed-formula]]).

[L2] $m! \ne 0$ for every $m\in\mathbb{N}$, and $\sigma(m)! = m!\cdot\sigma(m)$ ([[def-factorial-and-falling-factorial]]).

[L3] $\binom{m}{k}=0$ for $k>m$, and $\binom{m}{0}=1$ ([[def-binomial-coefficient]]).

[L4] For all $x,y,k\in\mathbb{N}$ with $k\ne 0$: if $x\cdot k=y\cdot k$ then $x=y$ ([[lem-nat-mult-cancellative]]).

[L5] For all $x,y,k\in\mathbb{N}$: if $x + k = y + k$ then $x = y$ ([[lem-nat-add-cancellative]]).

## Proof

**Proof technique:** direct.

1.1 First, $(n+1)\binom{2n}{n+1}=n\binom{2n}{n}$ in $\mathbb{N}$. For $n=0$ both sides are $0$, since $\binom{0}{1}=0$ by [L3]. For $n\ge1$ one has $n+1\le 2n$ and $2n-(n+1)=n-1$, so [L1] gives $\binom{2n}{n+1}\,(n+1)!\,(n-1)!=(2n)!$ and $\binom{2n}{n}\,n!\,n!=(2n)!$; writing $(n+1)!=(n+1)\cdot n!$ and the second factor $n!=n\cdot(n-1)!$ by [L2], the two left sides read $(n+1)\binom{2n}{n+1}\cdot n!\,(n-1)!$ and $n\binom{2n}{n}\cdot n!\,(n-1)!$, and cancelling the nonzero factor $n!\,(n-1)!$ by [L2] and [L4] gives the identity. [L1, L2, L3, L4, algebra]

2.1 Multiply [F1] by $n+1$: $(n+1)C_n+(n+1)\binom{2n}{n+1}=(n+1)\binom{2n}{n}$. By step 1.1 the second summand on the left is $n\binom{2n}{n}$, and the right-hand side is $n\binom{2n}{n}+\binom{2n}{n}$, so cancelling the common summand $n\binom{2n}{n}$ by [L5] gives $(n+1)C_n=\binom{2n}{n}$. At $n=0$ this reads $C_0=\binom{0}{0}=1$. [F1, L3, L5, step 1.1, algebra] ∎

## Remarks

- **The quotient form.** The identity is an identity of natural numbers. Reading
  each natural number as its canonical natural in $\mathbb{R}$
  ([[def-canonical-natural]]) and dividing by the nonzero real $n+1$ turns it into
  the familiar $C_n=\frac{1}{n+1}\binom{2n}{n}$. The multiplicative form is the
  one proved, and it is the form in which no division and no embedding is needed;
  it also says at once that $n+1$ divides the central binomial coefficient, which
  the quotient form presupposes.

- **What the proof actually uses.** Only the reflection identity and factorial
  bookkeeping. The Catalan number is never manipulated as a formula: it enters as
  the count it was defined to be and leaves as a factor of a binomial
  coefficient.
