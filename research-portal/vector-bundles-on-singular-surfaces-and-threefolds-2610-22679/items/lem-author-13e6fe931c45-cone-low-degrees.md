---
id: lem-author-13e6fe931c45-cone-low-degrees
kind: lemma
title: Cofiber bounds imply low-degree cohomology isomorphisms
status: published
domain: mathematics
deps:
  - lem-author-b747b28c359f-derived-cohomology
dependency_roles:
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement
Let $f:A\to B$ be a morphism in $D(\mathbb Z)$ and let $C$ be its cofiber, represented by a mapping cone. If $H^j(C)=0$ for every $j\leq n$, then $H^i(f)$ is an isomorphism for every $i\leq n$ and is injective for $i=n+1$. If, in addition, $H^{n+1}(C)=0$, it is an isomorphism also for $i=n+1$.

## Facts & Assumptions

**Given:** A derived-category morphism and a cone with the stated vanishing.

**Goal:** Establish the stated low-degree consequences.

[F1] Cohomology is a functor on $D(\mathbb Z)$ ([[lem-author-b747b28c359f-derived-cohomology]]).

## Proof

1.1 Represent the derived morphism by a chain map after replacing its source by a quasi-isomorphic complex. Its mapping cone fits in a degreewise split short exact sequence of complexes $0\to B\to\operatorname{Cone}(f)\to A[1]\to0$. Taking cycles and boundaries gives the long exact sequence $H^{i-1}(C)\to H^i(A)\to H^i(B)\to H^i(C)$. The result is independent of representatives by [F1]. [F1, construct]

2.1 For $i\leq n$, both adjacent cone groups in step 1.1 vanish, giving an isomorphism. For $i=n+1$, the left group $H^n(C)$ vanishes, giving injectivity; if also $H^{n+1}(C)=0$, the right group vanishes and the map is surjective as well. This proves every claimed range without a condition on $H^{n+2}(C)$. [step 1.1, algebra] ∎
