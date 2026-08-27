---
id: cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups
kind: corollary
title: "A finite primitive group has at most two minimal normal subgroups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-distinct-minimal-normal-subgroups-centralize-one-another, lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular, thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Statement

Let $G \le \operatorname{Sym}(\Omega)$ be finite and primitive. Then $G$ has at
most two minimal normal subgroups.

## Facts & Assumptions

**Given:** A finite primitive permutation group $G \le \operatorname{Sym}(\Omega)$.

[L1] Any two distinct minimal normal subgroups of $G$ are regular
([[lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular]]).

[L2] Distinct minimal normal subgroups centralize one another
([[lem-distinct-minimal-normal-subgroups-centralize-one-another]]).

[A1] A regular permutation group has exactly one element sending a chosen point
to a chosen point.

## Proof

**Proof technique:** direct.

1.1 Suppose that $M_1,M_2,M_3$ are three distinct minimal normal subgroups of $G$. By [L1], each pair among them is regular. In particular, $M_1$ and $M_2$ are both regular. [given, L1]

2.1 Fix $\alpha \in \Omega$. Because $M_1$ is regular, the map $m \mapsto m\alpha$ identifies $M_1$ with the set $\Omega$, and because $M_2$ is regular there is for each $\beta \in \Omega$ a unique element $n(\beta) \in M_2$ with $n(\beta)\alpha=\beta$ by [A1]. [A1, step 1.1, choose]

3.1 Applying [L2] to the pair $(M_1,M_3)$ shows that $M_3$ centralizes $M_1$. Hence every element of $M_3$ acts on the identified copy of $M_1$ by right translation. But $M_2$ already has that property by step 2.1, and the right-regular subgroup centralizing the left-regular action of $M_1$ is unique. Therefore $M_3=M_2$, contradicting distinctness. So no third minimal normal subgroup exists. [L2, step 2.1, algebra] ∎
