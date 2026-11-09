---
id: lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing
kind: lemma
title: Gluing upper bounds through an actual fiber sequence
status: published
domain: mathematics
deps:
  - math:thm-the-derived-category-inherits-a-triangulated-structure
  - lem-author-b747b28c359f-derived-cohomology
dependency_roles:
  math:thm-the-derived-category-inherits-a-triangulated-structure: mathematical-premise
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement
Let $A\to B\to C$ be a fiber sequence in $D(\mathbb Z)$, and let $N\in\mathbb Z$. If $A$ is supported in cohomological degrees $\leq N$, then $H^N(B)\to H^N(C)$ is surjective and $H^i(B)\to H^i(C)$ is an isomorphism for every $i>N$. If in addition $C$ is supported in degrees $\leq N$, then so is $B$.

## Facts & Assumptions
**Given:** The specified fiber sequence and integer $N$.

**Goal:** Transfer the two outer bounds to the middle term with the exact degree endpoints.

[F1] [[lem-author-b747b28c359f-derived-cohomology]] supplies functorial cohomology on $D(\mathbb Z)$.

[F2] In the standard derived triangulated structure, distinguished triangles are the triangles isomorphic to localized mapping-cone triangles, and each gives the long exact cohomology sequence. Use the usual fixed-universe size convention for complexes of abelian groups. [[math:thm-the-derived-category-inherits-a-triangulated-structure]]

## Proof
1.1 The given fiber sequence extends to its distinguished triangle $A\to B\to C\to A[1]$ in the standard derived structure. Applying [F2] and the cohomology functors [F1], its long exact sequence contains $H^i(A)\to H^i(B)\to H^i(C)\to H^{i+1}(A)$. At $i=N$ the last group is zero, which gives the stated surjectivity. At $i>N$ both outer groups are zero, so the middle arrow is an isomorphism. [F1, F2, given]

2.1 If $H^i(C)=0$ for $i>N$, the isomorphism in step 1.1 gives $H^i(B)=0$ for those same degrees. This proves the middle upper bound without any splitting or identification of unrelated groups. [F1, step 1.1] ∎
