---
id: lem-author-a44f2061570d-evaluation-homotopy
kind: lemma
title: Evaluation preserves chain homotopies
status: published
domain: mathematics
deps:
  - lem-author-a44f2061570d-evaluation-left-exact
  - def-author-cf6ede58b450-site-plus-data
  - math:def-group
  - math:def-group-homomorphism
  - math:def-functor-and-contravariant-functor
  - math:def-natural-transformation
dependency_roles:
  lem-author-a44f2061570d-evaluation-left-exact: mathematical-premise
  def-author-cf6ede58b450-site-plus-data: mathematical-premise
  math:def-group: mathematical-premise
  math:def-group-homomorphism: mathematical-premise
  math:def-functor-and-contravariant-functor: mathematical-premise
  math:def-natural-transformation: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 8
---

## Statement
For an object $U$ of a small site, evaluation sends complexes of abelian sheaves and chain maps to complexes and chain maps of abelian groups, and sends chain-homotopic maps to chain-homotopic maps. In particular it sends a chain-homotopy equivalence to a chain-homotopy equivalence.

Use the relative-smallness conventions for a small site $(\mathcal C,J)$ specified in Facts & Assumptions. Write $\mathbf{Ab}$ for the category whose objects are abelian groups with underlying sets of the allowed size and whose arrows are group homomorphisms. An abelian sheaf is a contravariant functor $F:\mathcal C\to\mathbf{Ab}$ whose underlying set-valued presheaf satisfies the sheaf condition: every matching family on a covering sieve has a unique amalgamation. A morphism of abelian sheaves is a natural transformation with group-homomorphism components.

A cochain complex is a family $(C^n)_{n\in\mathbb Z}$ of abelian sheaves (or of abelian groups), with morphisms $d_C^n:C^n\to C^{n+1}$ satisfying $d_C^{n+1}d_C^n=0$. A chain map, here using cochain indexing, $f:C^\bullet\to D^\bullet$ is a family of morphisms $f^n:C^n\to D^n$ satisfying $d_D^nf^n=f^{n+1}d_C^n$ for every $n$.

A chain homotopy from $f$ to $g$ is a family of morphisms $h^n:C^n\to D^{n-1}$ satisfying $f^n-g^n=d_D^{n-1}h^n+h^{n+1}d_C^n$ for every $n$, abbreviated $f-g=dh+hd$. A chain-homotopy equivalence is a chain map $f:C^\bullet\to D^\bullet$ admitting a chain map $k:D^\bullet\to C^\bullet$ for which $kf$ and $fk$ are chain-homotopic to the respective identity maps. Evaluation of a complex or family of maps means evaluation in each degree at $U$.

## Statement references
[[def-author-cf6ede58b450-site-plus-data]]

[[math:def-group]]

[[math:def-group-homomorphism]]

[[math:def-functor-and-contravariant-functor]]

[[math:def-natural-transformation]]

[[lem-author-a44f2061570d-evaluation-left-exact]]

## Facts & Assumptions

**Given:** An object $U$ of a small site $(\mathcal C,J)$ and complexes and maps as in the statement. Use the relative-smallness conventions in [F0]; in particular the abelian groups have V-small underlying sets for the universes U in V fixed there. The symbol $U$ for the site object is distinct from the universe U.

**Goal:** Prove preservation of complexes, homotopies and homotopy equivalences.

[F0] Small sites, covering sieves, matching families and unique amalgamation, with the relative-smallness conventions for sites and presheaf values, are as defined in [[def-author-cf6ede58b450-site-plus-data]].

[F1] Evaluation sends $F$ to $F(U)$ and a sheaf morphism $a$ to its component $a_U$. It preserves composition, identities, sums, negatives and zero maps. These are the functoriality and additivity properties established in [[lem-author-a44f2061570d-evaluation-left-exact]]; sums, negatives and zero maps of sheaf morphisms are defined componentwise.

[F2] Abelian groups and group homomorphisms have their usual additive meaning. [[math:def-group]] [[math:def-group-homomorphism]] Contravariant functors and natural transformations, applied to the opposite site category, specify the presheaves and morphisms used above. [[math:def-functor-and-contravariant-functor]] [[math:def-natural-transformation]]

## Proof

**Proof technique:** Evaluate the defining identities.

1.1 Evaluation preserves composition, identities, sums, negatives and zero maps. Thus it carries $d_C^{n+1}d_C^n=0$ and $d_D^nf^n=f^{n+1}d_C^n$ to the corresponding equations of group homomorphisms at $U$. Consequently the evaluated objects are complexes of abelian groups and the evaluated families are chain maps. [F0, F1, F2, given]

2.1 Evaluating $f^n-g^n=d_D^{n-1}h^n+h^{n+1}d_C^n$ gives exactly the homotopy identity for the family $h^n(U)$. If $k$ is an inverse up to homotopy for $f$, evaluate the homotopies from $kf$ and $fk$ to the identity maps. By step 1.1 their evaluated composites and identities are the composites and identities of the evaluated chain maps, so $k(U)$ is an inverse up to homotopy for $f(U)$. [F1, step 1.1] ∎
