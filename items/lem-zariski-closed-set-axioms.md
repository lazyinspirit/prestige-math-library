---
id: lem-zariski-closed-set-axioms
kind: lemma
title: "The vanishing sets define the Zariski topology on the prime spectrum"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-spectrum-and-vanishing-sets, lem-vanishing-set-identities]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 14.1"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Definition 10.17.3"
      url: "https://stacks.math.columbia.edu/tag/00DY"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $R$ be a commutative ring. The subsets $V(I)\subseteq\operatorname{Spec}(R)$, as $I$ ranges over the ideals of $R$, contain $\operatorname{Spec}(R)$ and $\varnothing$, are closed under arbitrary intersections and finite unions, and therefore define a topology on $\operatorname{Spec}(R)$.

## Facts & Assumptions

**Given:** A commutative ring $R$.

[L1] The vanishing sets satisfy $V((0))=\operatorname{Spec}(R)$, $V(R)=\varnothing$, arbitrary intersections, and finite unions ([[lem-vanishing-set-identities]]).

[A1] A family of subsets of a set that contains the whole set and the empty set, is closed under arbitrary intersections, and is closed under finite unions is the family of closed sets of a topology.

## Proof

**Proof technique:** direct.

1.1 Fact [L1] gives exactly the four closed-set properties listed in the statement for the family $\{V(I)\}$ of subsets of $\operatorname{Spec}(R)$. [L1]

2.1 By [A1], any family with those four properties is the family of closed sets of a topology on the underlying set. Therefore the subsets $V(I)$ define a topology on $\operatorname{Spec}(R)$. [A1, step 1.1]

3.1 The vanishing sets are precisely the closed sets of the Zariski topology on $\operatorname{Spec}(R)$. [step 2.1] ∎
