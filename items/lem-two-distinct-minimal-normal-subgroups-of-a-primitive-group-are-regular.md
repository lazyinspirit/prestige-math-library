---
id: lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular
kind: lemma
title: "Two distinct minimal normal subgroups of a primitive group are regular"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-regular-actions, lem-distinct-minimal-normal-subgroups-centralize-one-another, thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Statement

Let $G \le \operatorname{Sym}(\Omega)$ be finite, faithful, and primitive, and let
$M,N \trianglelefteq G$ be distinct minimal normal subgroups. Then both $M$ and
$N$ act regularly on $\Omega$.

## Facts & Assumptions

**Given:** A finite faithful primitive action of $G$ on $\Omega$ and distinct minimal normal subgroups $M,N \trianglelefteq G$.

[L1] Distinct minimal normal subgroups centralize one another
([[lem-distinct-minimal-normal-subgroups-centralize-one-another]]).

[L2] Every minimal normal subgroup of a finite faithful primitive group is transitive
([[thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], both $M$ and $N$ are transitive on $\Omega$. By [L1], every element of $M$ commutes with every element of $N$. [L1, L2]

2.1 Fix $\alpha \in \Omega$, and let $m \in M_\alpha$. For any $\beta \in \Omega$, choose $n \in N$ with $n\alpha=\beta$; then $m\beta = mn\alpha = nm\alpha = n\alpha = \beta$. Hence every element of $M_\alpha$ fixes every point of $\Omega$, so faithfulness gives $M_\alpha=1$. [step 1.1, choose, algebra]

3.1 The subgroup $M$ is transitive with trivial point stabilizer, so it is regular. By symmetry the same argument applies to $N$. [step 2.1] ∎
