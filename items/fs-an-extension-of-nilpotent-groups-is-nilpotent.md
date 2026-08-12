---
id: fs-an-extension-of-nilpotent-groups-is-nilpotent
kind: false-statement
title: "An extension of nilpotent groups is nilpotent"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nilpotent-group-and-nilpotency-class, thm-upper-and-lower-central-characterizations-of-nilpotence, thm-first-isomorphism-theorem-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

> **False.** If $N\trianglelefteq G$ and both $N$ and $G/N$ are nilpotent, then $G$ is nilpotent.

## Facts & Assumptions

**Given:** The normal subgroup $A_3\trianglelefteq S_3$.

[F1] A nontrivial group has nilpotency class one exactly when it is abelian ([[def-nilpotent-group-and-nilpotency-class]]).

[F2] A group is nilpotent exactly when it has a central series from $1$ to the whole group ([[thm-upper-and-lower-central-characterizations-of-nilpotence]]).

[L2] A surjective homomorphism induces an isomorphism from the quotient by its kernel onto its image ([[thm-first-isomorphism-theorem-groups]]).

## Refutation

**Proof technique:** direct.

1.1 The group $A_3$ is cyclic of order three, and the sign map has kernel $A_3$ and image $C_2$, so [L2] gives $S_3/A_3\cong C_2$. [given, L2, algebra]

1.2 The center of $S_3$ is trivial: no nonidentity permutation commutes with both $(12)$ and $(123)$. If a nontrivial group had a central series, its first nontrivial term would lie in its center; hence [F2] shows that $S_3$ is not nilpotent. [F2, algebra]

2.1 Both $A_3$ and $S_3/A_3$ are nontrivial abelian groups and hence nilpotent by [F1]. [step 1.1, F1]

3.1 Therefore $1\to A_3\to S_3\to C_2\to1$ is an extension of nilpotent groups whose middle group is not nilpotent. [step 1.1, step 2.1, step 1.2] ∎
