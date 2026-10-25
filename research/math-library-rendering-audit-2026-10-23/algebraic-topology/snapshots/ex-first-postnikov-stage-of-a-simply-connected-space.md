---
id: ex-first-postnikov-stage-of-a-simply-connected-space
kind: example
title: First nontrivial Postnikov stage of a simply connected space
status: published
origin: pipeline
deps: ["thm-postnikov-towers-exist-for-connected-cw-complexes", "thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one", "def-eilenberg-maclane-space"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lecture 12, Theorem 12.1 and Postnikov tower, printed pages 37--40
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Section 7.12.1, Theorem 7.40, printed pages 192--193
---

## Claim

Let $X$ be a simply connected CW complex, and let $n\geq2$ be least such that $\pi_n(X)\ne0$. Then

$$ P_nX\simeq K(\pi_nX,n). $$

## Facts & Assumptions

[F1] A Postnikov section $X\to P_nX$ is an isomorphism on $\pi_i$ for $i\leq n$ and has $\pi_i(P_nX)=0$ for $i>n$ ([[thm-postnikov-towers-exist-for-connected-cw-complexes]]).

[F2] Higher homotopy groups are abelian ([[thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one]]).

## Verification

**Given:** $X$ and the least index $n$ in the claim.

1.1 Simple connectedness gives $\pi_1(X)=0$, and minimality gives $\pi_i(X)=0$ for $1<i<n$. By [F1], the same is true for $P_nX$, while $\pi_n(P_nX)\cong\pi_n(X)$ and every group above $n$ vanishes. [F1]

2.1 The surviving group is abelian by [F2]. Since the Postnikov construction supplies a connected CW model, Step 1.1 is exactly the defining homotopy-group condition for $K(\pi_nX,n)$. The hypothesis that a least nonzero group exists excludes the weakly contractible case. $\square$ [F2, step 1.1]
