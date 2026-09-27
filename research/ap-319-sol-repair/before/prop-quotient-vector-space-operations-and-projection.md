---
id: prop-quotient-vector-space-operations-and-projection
kind: proposition
title: "Coset equality, well-defined quotient operations, and the canonical projection with kernel $W$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quotient-vector-space-and-canonical-projection, def-linear-subspace, def-linear-map]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Results 3.101-3.104"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over $F$ and let $W\le V$. For $v,v'\in V$ the cosets of [[def-quotient-vector-space-and-canonical-projection]] satisfy
$$v+W=v'+W\quad\text{exactly when}\quad v-v'\in W.$$
The operations on $V/W$ in [[def-quotient-vector-space-and-canonical-projection]] are independent of the chosen representatives and make $V/W$ a vector space over $F$. The canonical projection $\pi:V\to V/W$ is a surjective linear map and
$$\ker\pi=W.$$

## Facts & Assumptions

**Given:** A vector space $V$ over $F$, a linear subspace $W\le V$, and the cosets and operations displayed in [[def-quotient-vector-space-and-canonical-projection]].

[L1] For $v\in V$ the coset of $W$ represented by $v$ is $v+W:=\{v+w:w\in W\}$, and the proposed operations are $(v+W)+(u+W):=(v+u)+W$ and $a(v+W):=(av)+W$ ([[def-quotient-vector-space-and-canonical-projection]]).

[L2] A linear subspace $W$ of $V$ satisfies (W1) $0_V\in W$, (W2) $u,v\in W$ implies $u+v\in W$, and (W3) $\lambda\in F$ and $v\in W$ imply $\lambda v\in W$ ([[def-linear-subspace]]).

[L3] A map is linear when it preserves all linear combinations: $T(au+bv)=aT(u)+bT(v)$ ([[def-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $v+W=v'+W$. By (W1) of [L2] we have $v=v+0_V\in v+W$, so $v\in v'+W$, giving $w\in W$ with $v=v'+w$ and hence $v-v'=w\in W$. Conversely suppose $v-v'\in W$. For $w\in W$, $v+w=v'+\bigl((v-v')+w\bigr)$ and $(v-v')+w\in W$ by (W2), so $v+W\subseteq v'+W$; since $v'-v=(-1)(v-v')\in W$ by (W3), the same argument gives $v'+W\subseteq v+W$. Hence $v+W=v'+W$ exactly when $v-v'\in W$. [L1, L2]

2.1 Let $v+W=v'+W$ and $u+W=u'+W$. By step 1.1, $v-v'\in W$ and $u-u'\in W$, so $(v+u)-(v'+u')=(v-v')+(u-u')\in W$ by (W2) and $av-av'=a(v-v')\in W$ by (W3). Applying step 1.1 in the converse direction gives $(v+u)+W=(v'+u')+W$ and $(av)+W=(av')+W$, so both quotient operations are independent of representatives. [step 1.1, L1, L2]

3.1 The vector-space identities in $V/W$ follow by applying the corresponding identities in $V$ to representatives, with zero coset $W=0_V+W$ and inverse $-(v+W)=(-v)+W$; moreover $\pi(av+bu)=(av+bu)+W=a\pi(v)+b\pi(u)$ by [L1] and [L3], every coset is $\pi(v)$ by definition, and by step 1.1 $\pi(v)=0_V+W$ exactly when $v-0_V=v\in W$, so $\pi$ is linear and surjective with $\ker\pi=W$. [step 1.1, step 2.1, L1, L3] ∎
