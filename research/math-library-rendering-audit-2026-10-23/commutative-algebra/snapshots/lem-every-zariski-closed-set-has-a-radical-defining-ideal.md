---
id: lem-every-zariski-closed-set-has-a-radical-defining-ideal
kind: lemma
title: "Every Zariski-closed subset has a unique radical defining ideal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-spectrum-and-vanishing-sets, thm-radical-as-intersection-of-primes, lem-vanishing-sets-detect-radicals]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 14.4(a)"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
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

Let $R$ be a commutative ring and let $Z\subseteq\operatorname{Spec}(R)$ be Zariski-closed. Then $$ I(Z):=\bigcap_{\mathfrak p\in Z}\mathfrak p $$ is a radical ideal, $Z=V(I(Z))$, and if $Z=V(J)$ for an ideal $J$, then $I(Z)=\sqrt J$. In particular, $Z$ has a unique radical defining ideal.

## Facts & Assumptions

**Given:** A commutative ring $R$, a Zariski-closed subset $Z\subseteq\operatorname{Spec}(R)$, and the Axiom of Choice.

[L1] For every ideal $J$, its radical is the intersection of the prime ideals containing $J$ ([[thm-radical-as-intersection-of-primes]]).

[L2] Two vanishing sets are equal exactly when the radicals of their defining ideals are equal ([[lem-vanishing-sets-detect-radicals]]).

[A1] Because $Z$ is Zariski-closed, there exists an ideal $J\trianglelefteq R$ with $Z=V(J)$.

## Proof

**Proof technique:** direct.

1.1 Choose $J$ with $Z=V(J)$ as in [A1]. Then $I(Z)=\bigcap_{\mathfrak p\in V(J)}\mathfrak p=\sqrt J$ by [L1]. In particular, $I(Z)$ is radical. [L1, A1]

2.1 Since step 1.1 gives $I(Z)=\sqrt J$, fact [L2] yields $V(I(Z))=V(\sqrt J)=V(J)=Z$. [L2, step 1.1, A1]

2.2 If also $Z=V(K)$ for an ideal $K$, then $V(K)=V(J)$, so [L2] gives $\sqrt K=\sqrt J=I(Z)$. Thus any radical ideal defining $Z$ equals $I(Z)$. [L2, step 1.1, A1]

3.1 Therefore every Zariski-closed subset has the unique radical defining ideal $I(Z)$. [step 2.1, step 2.2] ∎
