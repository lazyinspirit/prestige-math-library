---
id: prop-integers-modulo-n-as-a-quotient-ring
kind: proposition
title: 'For every $n\in\mathbb N$, the congruence-class ring $\mathbb Z/n$ is the quotient ring $\mathbb Z/n\mathbb Z$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-canonical-quotient-ring-map, prop-integers-modulo-n-as-a-quotient-group, thm-integers-modulo-n-basic-algebra, def-addition-and-multiplication-modulo-n, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
pipeline_run: null
---

## Statement

For every $n\in\mathbb N$, the congruence-class ring $\mathbb Z/n$ is the quotient ring $\mathbb Z/n\mathbb Z$.

This includes $n=0$ and $n=1$.

## Facts & Assumptions

**Given:** A natural number $n$, viewed as a nonnegative integer.

[L1] The canonical quotient map is a surjective ring homomorphism ([[prop-canonical-quotient-ring-map]]).

[L2] The additive quotient $(\mathbb Z,+)/n\mathbb Z$ is $(\mathbb Z/n,+)$ ([[prop-integers-modulo-n-as-a-quotient-group]]).

[L3] Congruence classes carry the published modular ring operations ([[thm-integers-modulo-n-basic-algebra]]).

[L4] $[a]_n+[b]_n=[a+b]_n$ and $[a]_n[b]_n=[ab]_n$ ([[def-addition-and-multiplication-modulo-n]]).

[L5] $\mathbb Z$ is a commutative ring with identity ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 Map $a+n\mathbb Z$ to $[a]_n$; [L2] makes this an equality of additive quotient sets. [L1, L2, L3, L4, L5, given, construct]

2.1 The quotient product maps to $[ab]_n$, exactly the modular product in [L4], and the identities agree. [step 1.1, L1, L2, L3, L4, L5, given, algebra]

3.1 Therefore the congruence-class ring is literally the quotient ring, including at $n=0,1$. [step 2.1] ∎
