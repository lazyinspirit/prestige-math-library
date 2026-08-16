---
id: thm-maximal-subgroups-of-finite-nilpotent-groups
kind: theorem
title: "Maximal subgroups of finite nilpotent groups are normal of prime index"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-maximal-subgroup-of-a-group, thm-normalizer-condition-for-finite-nilpotent-groups, thm-cauchys-theorem-for-finite-groups, thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Every maximal proper subgroup of a finite nilpotent group is normal and has prime index. See [[def-maximal-subgroup-of-a-group]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A subgroup $M<G$ is maximal proper when there is no subgroup $H$ with $M<H<G$. Equivalently, every subgroup containing $M$ is either $M$ or $G$. The word maximal refers to inclusion among proper subgroups, not to cardinality. ([[def-maximal-subgroup-of-a-group]]).

[L2] Every proper subgroup of a finite nilpotent group is properly contained in its normalizer. ([[thm-normalizer-condition-for-finite-nilpotent-groups]]).

[L3] Let $G$ be a finite group and let $p$ be prime. If $p\mid|G|$, then $G$ contains an element of order $p$. ([[thm-cauchys-theorem-for-finite-groups]]).

[L4] Every subgroup and every quotient of a nilpotent group is nilpotent. Every finite direct product of nilpotent groups is nilpotent; the class of a subgroup or quotient is at most the class of the original group, and the class of a nonempty finite product is at most the maximum of the factor classes. The empty product is the trivial group of class zero. ([[thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]]).

## Proof

**Proof technique:** direct.

1.1 The normalizer condition and maximality force $N_G(M)=G$, hence $M\trianglelefteq G$. [L1, L2, L3, L4, given, algebra]

2.1 The quotient has no nontrivial proper subgroup; Cauchy's theorem then forces its nontrivial order to be prime. [step 1.1, given, algebra]

3.1 A maximal subgroup is proper by definition, so $M\ne G$ and the quotient $G/M$ of step 2.1 is nontrivial; its order is therefore a genuine prime rather than $1$, and step 1.1 has already made $M$ normal. This proves the stated claim. [step 1.1, step 2.1, given, algebra] ∎
