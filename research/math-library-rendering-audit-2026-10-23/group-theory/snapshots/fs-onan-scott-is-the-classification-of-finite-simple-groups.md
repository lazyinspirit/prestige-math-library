---
id: fs-onan-scott-is-the-classification-of-finite-simple-groups
kind: false-statement
title: "FALSE: the O'Nan-Scott theorem is the classification of finite simple groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simple-group, def-symmetric-group, def-k-transitive-and-k-homogeneous-actions, prop-doubly-transitive-actions-are-primitive]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Local terminology/refutation repair; no independent judge"
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Liebeck, Praeger and Saxl, On the O'Nan-Scott theorem for finite primitive permutation groups, Introduction and Section 2"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/9286080793AA683DFB749077A44F9305/S144678870003216Xa.pdf/div-class-title-on-the-o-nan-scott-theorem-for-finite-primitive-permutation-groups-div.pdf"
---

## Statement

**False claim:** the O'Nan-Scott theorem is the classification of finite simple
groups.

## Facts & Assumptions

**Given:** The names refer to these two classification questions: O'Nan–Scott asks for the socle and action types of finite primitive permutation groups; the classification of finite simple groups asks for the abstract isomorphism types of all finite simple groups. Comparing the questions does not assume the conclusions or proofs of either classification.

[L1] A simple group is nontrivial and has no proper nontrivial normal subgroup ([[def-simple-group]]).

[L2] The symmetric group consists of all permutations of a set ([[def-symmetric-group]]). A $2$-transitive action moves any ordered pair of distinct points to any other, and is primitive ([[def-k-transitive-and-k-homogeneous-actions]], [[prop-doubly-transitive-actions-are-primitive]]).

## Refutation

**Proof technique:** direct.

1.1 The natural action of $S_3$ on $\{1,2,3\}$ is $2$-transitive: specifying the images of two distinct points determines a permutation by sending the third point to the remaining point. It is therefore primitive by [L2], and lies in the domain of the O'Nan–Scott classification question. [given, L2, algebra]

2.1 The subgroup $A=\{1,(123),(132)\}$ is nontrivial and proper in $S_3$. Conjugating either $3$-cycle by a permutation merely relabels its three entries, so it gives one of these same two $3$-cycles. Thus $A$ is normal and $S_3$ is not simple by [L1]. Consequently the two classification questions have different domains: one includes this action of a nonsimple group, whereas the other classifies simple groups up to abstract isomorphism. Their conclusions also ask for different data, action types versus a list of abstract simple groups. They are not the same theorem. [step 1.1, given, L1, algebra] ∎
