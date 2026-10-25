---
id: fs-every-poset-has-an-incidence-algebra
kind: false-statement
title: "False: convolution defines an incidence algebra for every poset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-incidence-algebra-and-convolution, def-poset-interval-and-finiteness-conditions, def-partial-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
    - title: "Y. Guan and Y. Zhang, Additive Biderivations of Incidence Algebras, §2.1"
      url: "https://arxiv.org/abs/2412.18049"
pipeline_run: null
---

## Statement

For every poset $P$ and every commutative ring $R$, the formula

$$(f*g)(x,y)=\sum_{x\le z\le y}f(x,z)g(z,y)$$

defines a convolution operation on all functions on comparable pairs.

## Facts & Assumptions

**Given:** A countably infinite set $M$, two further elements $\bot,\top$, a nonzero commutative ring $R$, and the poset $P:=\{\bot,\top\}\cup M$ in which $\bot<m<\top$ for every $m\in M$ and distinct elements of $M$ are incomparable.

[F1] Incidence convolution is defined by a finite commutative-monoid sum over $[x,y]$, under the hypothesis that the poset is locally finite ([[def-incidence-algebra-and-convolution]]).

[F2] A partial order is reflexive, antisymmetric and transitive, and local finiteness means that every interval $[x,y]$ is finite ([[def-partial-order]], [[def-poset-interval-and-finiteness-conditions]]).

## Refutation

**Proof technique:** direct.

1.1 The displayed relation on $P$ is reflexive, antisymmetric and transitive: the only strict comparisons are from $\bot$ to a middle element, from a middle element to $\top$, and from $\bot$ to $\top$. Thus $P$ is a poset. [given, F2]

1.2 Its interval $[\bot,\top]$ is all of $P$ and contains the countably infinite set $M$, so it is infinite and $P$ is not locally finite. [given, F2]

2.1 Let $f$ and $g$ be the constant-one functions on comparable pairs. At the endpoint, the proposed convolution asks for $\sum_{z\in P}1_R$, an infinite sum that is not supplied by the additive group or ring axioms and is not the finite sum in [F1]. [step 1.2, F1]

3.1 Therefore the formula does not define convolution for every poset; local finiteness is a genuine well-definedness hypothesis. [step 1.2, step 2.1] ∎
