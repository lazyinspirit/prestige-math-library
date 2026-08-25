---
id: fs-four-square-representations-of-a-prime-are-essentially-unique
kind: false-statement
title: "FALSE: a prime has one four-square representation up to order and signs"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sum-of-four-squares-representation, def-prime]
justified_by: []
aliases: []
landmark: false
short: "FALSE: four-square uniqueness for primes"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Proofs by Descent, §6, Example 6.1"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every prime $p$ ([[def-prime]]), any two representations of
$p$ as a sum of four integer squares ([[def-sum-of-four-squares-representation]])
are equivalent up to signs and order; that is, a prime has exactly one
four-square representation up to permuting the coordinates and changing their
signs.

## Facts & Assumptions

**Given:** The integer $31$ and the quadruples $(5,2,1,1)$ and $(3,3,3,2)$.

[A1] The false claim: for every prime $p$, any two representations of $p$ as a sum of four integer squares are equivalent up to signs and order.

[F1] A representation of a nonnegative integer $n$ as a sum of four squares is an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with $n=a^2+b^2+c^2+d^2$; two representations are equivalent up to signs and order exactly when their multisets of absolute values coincide ([[def-sum-of-four-squares-representation]]).

[F2] An integer $p$ is prime when $p>1$ and $d\mid p$ with $d>0$ force $d=1$ or $d=p$ ([[def-prime]]).

## Refutation

**Proof technique:** direct.

1.1 The integer $31$ is prime: $31>1$, and if $31=de$ with integers $1<d\le e$ then $d^2\le de=31$, so $d\le 5$; but $31=2\cdot 15+1=3\cdot 10+1=4\cdot 7+3=5\cdot 6+1$, so none of $2,3,4,5$ divides $31$, and by [F2] its only positive divisors are $1$ and $31$. [given, F2, algebra]

1.2 Both displays are representations of $31$: $5^2+2^2+1^2+1^2=25+4+1+1=31$ and $3^2+3^2+3^2+2^2=9+9+9+4=31$. [given, F1, algebra]

2.1 The multisets of absolute values are $\{5,2,1,1\}$ and $\{3,3,3,2\}$, which differ — the first contains $5$ and the second does not — so by the criterion in [F1] the two representations of step 1.2 are not equivalent up to signs and order; with step 1.1 this contradicts [A1] at $p=31$, and the claim is false. [step 1.1, step 1.2, A1, F1, algebra] ∎

## Remarks

**Where the claim comes from.** For two squares the corresponding statement is true: [[thm-uniqueness-of-two-square-representation-of-a-prime]] says that a prime congruent to $1$ modulo $4$ has one representation as a sum of two squares up to signs and order. The claim refuted above is that statement with two coordinates replaced by four.

**What survives of the analogy.** Nothing of the two-square proof transfers. It turns on such a prime having a primitive two-square representation whose factorisation is controlled, and with four coordinates the extra room admits genuinely different multisets of absolute values; $31$ is one witness and not a special one.
