---
id: lem-author-9415fc97ee80-contravariant-relative-hom
kind: lemma
title: Contravariant Hom reverses relative cofiber triangles
status: draft
domain: mathematics
deps:
  - math:thm-long-exact-hom-sequences-of-a-distinguished-triangle
dependency_roles:
  math:thm-long-exact-hom-sequences-of-a-distinguished-triangle: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement
Let $A\xrightarrow f B\to Q\to A[1]$ be a specified distinguished triangle in a triangulated category $\mathcal T$. For any coefficient object $E$ and integer $a$, applying contravariant representable Hom gives the exact sequence containing
$$\cdots\to\operatorname{Hom}(A,E[a-1])\to\operatorname{Hom}(Q,E[a])\to\operatorname{Hom}(B,E[a])\to\operatorname{Hom}(A,E[a])\to\operatorname{Hom}(Q,E[a+1])\to\cdots.$$
If additionally a stable enhancement with mapping spectra or derived mapping complexes is supplied and $Q$ is the cofiber of the specified map there, then the induced mapping object satisfies
$$R\operatorname{Hom}(Q,E)\simeq\operatorname{fib}\bigl(R\operatorname{Hom}(B,E)\to R\operatorname{Hom}(A,E)\bigr).$$
Thus for the relative motive of an open inclusion, support cohomology is contravariant: the object with support is paired with the coefficient object, and the restriction map is from the whole scheme to the open. Here $R\operatorname{Hom}$ denotes the supplied mapping object: a spectrum in the mapping-spectrum setting, or a complex when a compatible linear derived enhancement is part of the data. The derived mapping-object conclusion requires the stated enhancement and is not inferred from Hom groups alone.

## Facts & Assumptions

**Given:** The triangle, coefficient object and, only for the second conclusion, the indicated stable enhancement. Hom always means a morphism group in $\mathcal T$.

**Goal:** Establish direction, degree and the precise mapping-fiber premise.

[F1] Representable Hom applied in either variable to a distinguished triangle gives the corresponding long exact sequence. [[math:thm-long-exact-hom-sequences-of-a-distinguished-triangle]]

[F2] In the enhanced case, a cofiber is a homotopy pushout $Q=B\coprod_A0$. Mapping out of a colimit is a limit by its defining universal property.

## Proof

1.1 Apply contravariant Hom with target $E[a]$ to every shift of the given triangle. The part ending in $\operatorname{Hom}(B,E[a])\to\operatorname{Hom}(A,E[a])$ has preceding term $\operatorname{Hom}(Q,E[a])$ and following term $\operatorname{Hom}(Q[-1],E[a])=\operatorname{Hom}(Q,E[a+1])$. Its predecessor is $\operatorname{Hom}(A[1],E[a])=\operatorname{Hom}(A,E[a-1])$. Exactness is [F1], with the connecting maps determined by that triangle's shift/rotation convention. [F1, given]

2.1 Under the additional enhancement premise, [F2] gives $R\operatorname{Hom}(Q,E)$ as the homotopy pullback of $R\operatorname{Hom}(B,E)\to R\operatorname{Hom}(A,E)$ and $R\operatorname{Hom}(0,E)=0\to R\operatorname{Hom}(A,E)$. This is exactly the fiber of restriction. It explains both the contravariance and the fiber rather than cofiber in the cohomological support model. This proves all conclusions with their stated premises. [F2, step 1.1] ∎
