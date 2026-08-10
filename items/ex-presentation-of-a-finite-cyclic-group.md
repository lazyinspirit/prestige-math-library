---
id: ex-presentation-of-a-finite-cyclic-group
kind: example
title: '$\langle a\mid a^n\rangle\cong(\mathbb Z/n,+)$ for every $n\geq 1$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-presentation, thm-von-dyck, thm-division-algorithm-in-z, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n, def-group-power, lem-group-power-laws, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John McKernan, Presentations and Groups of Small Order, Lecture 12"
      url: "https://math.mit.edu/~mckernan/Teaching/12-13/Spring/18.703/l_12.pdf"
    - title: "J. Aspnes, Group Theory"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/GroupTheory.html"
pipeline_run: null
---

## Example

For every natural number $n\geq1$,

$$\langle a\mid a^n\rangle\cong(\mathbb Z/n,+),$$

with the generator $a$ corresponding to the residue class $[1]_n$. At $n=1$
both groups are trivial.

## Facts & Assumptions

**Given:** A natural number $n\geq1$ and the presentation $P=\langle a\mid a^n\rangle$.

[L1] For integers $k$ and positive $n$, there are integers $q,r$ with $k=qn+r$ and $0\leq r<n$ ([[thm-division-algorithm-in-z]]).

[L2] Every class in $\mathbb Z/n$ contains exactly one integer $r$ with $0\leq r<n$ ([[thm-standard-representatives-modulo-n]]).

[L3] A map of generators that sends every relator to the identity extends uniquely to a homomorphism from the presented group ([[thm-von-dyck]]).

[L4] Group powers satisfy $g^{m+n}=g^mg^n$ and $(g^m)^q=g^{mq}$ for integer exponents ([[lem-group-power-laws]]).

## Verification

**Proof technique:** constructive.

1.1 In the additive group $\mathbb Z/n$, the $n$-fold multiple of $[1]_n$ is $[n]_n=[0]_n$, so [L3] constructs a homomorphism $\pi:P\to\mathbb Z/n$ with $\pi(a)=[1]_n$. [L3, construct]

1.2 Every word on one generator represents $a^k$ for some $k\in\mathbb Z$; write $k=qn+r$ by [L1]. Since $a^n=e$ in $P$, [L4] gives $a^k=(a^n)^qa^r=a^r$ with $0\leq r<n$. [L1, L4, given]

2.1 The image of $a^r$ is $[r]_n$, and [L2] makes these images distinct and exhaustive for $0\leq r<n$; combined with step 1.2, this proves that $\pi$ is injective and surjective. [L2, step 1.1, step 1.2]

3.1 Hence $\pi$ is the claimed isomorphism; when $n=1$, the sole normal form is $a^0=e$ and the sole residue is $[0]_1$. [step 2.1, discharge-construct] ∎
