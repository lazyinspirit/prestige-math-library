---
id: cor-spectrum-connected-iff-no-nontrivial-idempotents
kind: corollary
title: "The prime spectrum is connected exactly when the ring has no idempotents other than zero and one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-connected-space, thm-connectedness-characterisations, lem-clopen-subset-gives-idempotent-decomposition, lem-idempotent-gives-clopen-spectrum-partition, cor-nilradical-as-intersection-of-primes]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Lemma 14.2"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Sections 10.21 and 10.22"
      url: "https://stacks.math.columbia.edu/tag/04PP"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Assume the Axiom of Choice.

For a commutative ring $R$, the following are equivalent:

1. $\operatorname{Spec}(R)$ is connected. 2. The ring $R$ has no idempotents other than $0$ and $1$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and the Axiom of Choice.

[L1] A topological space is connected exactly when its only clopen subsets are $\varnothing$ and the whole space ([[thm-connectedness-characterisations]]).

[L2] Every idempotent $e$ partitions the spectrum into the clopen subsets $D(e)$ and $D(1-e)$ ([[lem-idempotent-gives-clopen-spectrum-partition]]).

[L3] Every nonempty proper clopen subset of the spectrum comes from a nontrivial idempotent ([[lem-clopen-subset-gives-idempotent-decomposition]]).

[L4] The nilradical is the intersection of all prime ideals ([[cor-nilradical-as-intersection-of-primes]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\operatorname{Spec}(R)$ is connected. If $e^2=e$, then [L2] gives a clopen partition by $D(e)$ and $D(1-e)$. By [L1], one of these clopen subsets is empty. If $D(e)=\varnothing$, then every prime ideal contains $e$, so [L4] shows that $e\in\operatorname{Nil}(R)$. Thus $e$ is nilpotent, and the idempotent relation $e^2=e$ forces $e=0$. If $D(1-e)=\varnothing$, then every prime ideal contains $1-e$, so [L4] gives $1-e\in\operatorname{Nil}(R)$. Hence $1-e$ is nilpotent, and $(1-e)^2=1-e$ forces $1-e=0$, so $e=1$. Thus there is no nontrivial idempotent. [L1, L2, L4, given, algebra]

1.2 Suppose conversely that $\operatorname{Spec}(R)$ is disconnected. Then [L1] gives a nonempty proper clopen subset $C$. By [L3], there is an idempotent $e\notin\{0,1\}$ whose associated clopen subset is $C$. Thus $R$ has a nontrivial idempotent. [L1, L3, given]

2.1 Step 1.1 proves $(1)\Rightarrow(2)$ and step 1.2 proves its contrapositive reverse direction. Therefore $\operatorname{Spec}(R)$ is connected exactly when $R$ has no idempotents other than $0$ and $1$. [step 1.1, step 1.2] ∎
