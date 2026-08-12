---
id: thm-erdos-sum-free-subset-bound
kind: theorem
title: "Every nonempty finite set of $n$ nonzero integers has a sum-free subset of size greater than $n/3$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-free-set-of-integers, lem-arbitrarily-large-primes-congruent-to-two-modulo-three, thm-z-mod-p-is-a-field, lem-finite-set-has-max, def-uniform-finite-probability-space, lem-indicator-expectation-and-products, thm-linearity-of-expectation, thm-expectation-monotonicity-and-bounds]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Bucic, Probabilistic Method, Theorem 2.3"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Statement

Every nonempty finite set $A$ of $n$ nonzero integers contains a sum-free subset of cardinality strictly greater than $n/3$.

## Facts & Assumptions

**Given:** A nonempty finite set $A\subseteq\mathbb Z\setminus\{0\}$ with $|A|=n$.

[L1] Sum-free means no three members, with repeated summands allowed, satisfy $x+y=z$ ([[def-sum-free-set-of-integers]]).

[L2] There are primes $p$ arbitrarily large with $p\equiv2\pmod3$ ([[lem-arbitrarily-large-primes-congruent-to-two-modulo-three]]).

[L3] For prime $p$, nonzero residue classes form the multiplicative group of the field $\mathbb Z/p$ ([[thm-z-mod-p-is-a-field]]).

[L4] A nonempty finite set of real numbers has a maximum ([[lem-finite-set-has-max]]).

[L5] Uniform probabilities are cardinality ratios; indicators count membership, expectation is linear, and some outcome reaches at least the expectation ([[def-uniform-finite-probability-space]], [[lem-indicator-expectation-and-products]], [[thm-linearity-of-expectation]], [[thm-expectation-monotonicity-and-bounds]]).

## Proof

**Proof technique:** constructive.

1.1 Since $A$ is nonempty, $n\ge1$. Choose a prime $p=3r+2$ larger than twice $\max_{a\in A}|a|$. [given, L2, L4, choose, construct]

1.2 Let $I=\{r+1,\ldots,2r+1\}\subset\mathbb Z/p$. This set is sum-free modulo $p$: if representatives $x,y,u\in I$ satisfied $x+y\equiv u\pmod p$, then $x+y-u$ would be a multiple of $p$ lying between $1$ and $3r+1=p-1$, which is impossible. [L1, algebra]

2.1 Choose $z$ uniformly from the nonzero residue classes and put $B_z=\{a\in A:za\bmod p\in I\}$. Reduction modulo $p$ is injective on $A$ by the choice of $p$, and multiplication by each nonzero $a$ permutes the nonzero classes by [L3]. [step 1.1, L3]

3.1 Thus every $a\in A$ belongs to $B_z$ with probability $|I|/(p-1)=(r+1)/(3r+1)>1/3$. Linearity gives $\mathbb E[|B_z|]=n(r+1)/(3r+1)>n/3$. [step 2.1, L5, algebra]

4.1 Some $z$ has $|B_z|$ at least the expectation. If $x+y=u$ in $B_z$, then $zx+zy=zu$ modulo $p$, contradicting sum-freeness of $I$; so $B_z$ is sum-free and has size greater than $n/3$. [step 1.2, step 3.1, L1, L5, discharge-construct] ∎
