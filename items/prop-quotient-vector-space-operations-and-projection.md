---
id: prop-quotient-vector-space-operations-and-projection
kind: proposition
title: "Quotient operations are well defined, and the canonical projection is linear with kernel $W$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quotient-vector-space-and-canonical-projection, def-linear-map]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Results 3.101-3.104"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over $F$ and let $W\le V$. The operations on $V/W$ in [[def-quotient-vector-space-and-canonical-projection]] are independent of the chosen representatives and make $V/W$ a vector space over $F$. The canonical projection $\pi:V\to V/W$ is a surjective linear map and
$$\ker\pi=W.$$

## Facts & Assumptions

**Given:** A vector space $V$ over $F$, a linear subspace $W\le V$, and the cosets and operations displayed in [[def-quotient-vector-space-and-canonical-projection]].

[L1] In the quotient set, $v+W=v'+W$ exactly when $v-v'\in W$, and the proposed operations are $(v+W)+(u+W)=(v+u)+W$ and $a(v+W)=av+W$ ([[def-quotient-vector-space-and-canonical-projection]]).

[L2] A map is linear when it preserves all linear combinations: $T(au+bv)=aT(u)+bT(v)$ ([[def-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 If $v+W=v'+W$ and $u+W=u'+W$, then $(v+u)-(v'+u')=(v-v')+(u-u')\in W$, while $a v-a v'=a(v-v')\in W$; hence both quotient operations are independent of representatives. [L1]

2.1 The vector-space identities in $V/W$ follow by applying the corresponding identities in $V$ to representatives, with zero coset $W$ and inverse $-(v+W)=(-v)+W$; moreover $\pi(av+bu)=(av+bu)+W=a\pi(v)+b\pi(u)$, every coset is $\pi(v)$, and $\pi(v)=W$ exactly when $v\in W$, so $\pi$ is linear and surjective with kernel $W$. [step 1.1, L1, L2] ∎
