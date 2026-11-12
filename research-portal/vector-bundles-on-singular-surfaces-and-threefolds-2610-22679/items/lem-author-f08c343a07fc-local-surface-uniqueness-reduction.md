---
id: lem-author-f08c343a07fc-local-surface-uniqueness-reduction
kind: lemma
title: Surface uniqueness from the cylinder and cancellation
status: published
domain: mathematics
deps:
  - lem-author-f08c343a07fc-local-cylinder-geometry
  - lem-author-f08c343a07fc-local-stabilized-chern
  - math:def-axiom-of-choice
  - math:def-locally-free-sheaf-finite-rank
  - math:def-module-on-ringed-space
  - math:def-algebraically-closed-field
  - math:def-affine-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-chern-classes-of-a-vector-bundle
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - math:def-pullback-module-ringed-spaces
  - math:lem-pullback-modules-right-exact
  - math:lem-sheaf-section-over-empty-set-terminal
dependency_roles:
  lem-author-f08c343a07fc-local-cylinder-geometry: mathematical-premise
  lem-author-f08c343a07fc-local-stabilized-chern: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-chern-classes-of-a-vector-bundle: mathematical-premise
  math:def-chow-group-of-cycles-mod-rational-equivalence: mathematical-premise
  math:def-pullback-module-ringed-spaces: mathematical-premise
  math:lem-pullback-modules-right-exact: mathematical-premise
  math:lem-sheaf-section-over-empty-set-terminal: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 4
formulation_deps:
  - lem-author-f08c343a07fc-local-cylinder-geometry
  - lem-author-f08c343a07fc-local-stabilized-chern
  - math:def-axiom-of-choice
  - math:def-locally-free-sheaf-finite-rank
  - math:def-module-on-ringed-space
  - math:def-algebraically-closed-field
  - math:def-affine-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-chern-classes-of-a-vector-bundle
  - math:def-chow-group-of-cycles-mod-rational-equivalence
argument_deps:
  - lem-author-f08c343a07fc-local-cylinder-geometry
  - lem-author-f08c343a07fc-local-stabilized-chern
  - math:def-axiom-of-choice
  - math:def-locally-free-sheaf-finite-rank
  - math:def-module-on-ringed-space
  - math:def-affine-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-chern-classes-of-a-vector-bundle
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - math:def-pullback-module-ringed-spaces
  - math:lem-pullback-modules-right-exact
  - math:lem-sheaf-section-over-empty-set-terminal
---

## Statement
Assume AC. Let $k$ be an algebraically closed field, let $X$ be a smooth affine finite-type $k$-scheme of pure dimension two, and put $Y=X\times_k\mathbb A^1_k$. Suppose rank-three bundles on $Y$ with equal ordinary Chow Chern triples are isomorphic. If rank-two bundles on $X$ cancel a common trivial line, then rank-two bundles on $X$ with the same first two Chern classes are isomorphic.

Here a rank-$r$ bundle on a scheme $T$ means a finite locally free $\mathcal O_T$-module of constant rank $r$, and a bundle isomorphism is an invertible morphism of these module sheaves. A common trivial line is the summand $\mathcal O_X$; cancellation means that $E\oplus\mathcal O_X\cong F\oplus\mathcal O_X$ implies $E\cong F$ for every pair of rank-two bundles. A Chern pair or triple is the ordered tuple of the first two or three ordinary Chow Chern classes, with equality componentwise. Pure dimension two means that every irreducible component has dimension two; if this convention admits the empty scheme, it is included in the conclusion.

## Facts & Assumptions

**Given:** AC, $k,X,Y$, the rank-three uniqueness hypothesis and the rank-two cancellation hypothesis in the statement.

**Goal:** Prove that equal Chern pairs of rank-two bundles on $X$ imply an isomorphism.

[F1] If $X$ is nonempty, choose an affine presentation $X=\operatorname{Spec}A$. Put $\mathbb A^1_k=\operatorname{Spec}k[t]$. The cylinder $Y\cong\operatorname{Spec}A[t]$ is smooth affine, finite type and pure of dimension three. Projection $p:Y\to X$ and the zero section $s:X\to Y$ are $k$-morphisms satisfying $p\circ s=\operatorname{id}_X$. For every bundle $G$ on $X$, $s^*p^*G\cong G$ canonically. The supplier's surface convention is dimension two with every irreducible component of dimension two; for nonempty $X$ this is the geometric hypothesis here. [[lem-author-f08c343a07fc-local-cylinder-geometry]]

[F2] On a smooth equidimensional finite-type $k$-scheme, equal Chern pairs of rank-two bundles give equal first three Chern classes after adding one trivial line, with common third class zero. These equalities persist under any $k$-morphism from another smooth equidimensional finite-type scheme. Pullback preserves finite local freeness and the ranks of the pulled bundles. This supplier also treats the empty scheme. [[lem-author-f08c343a07fc-local-stabilized-chern]]

[F3] For a nonempty equidimensional finite-type scheme $T$ of dimension $n$, write $\mathrm{CH}^i(T)=A^i(T)=A_{n-i}(T)$, the cycle group modulo rational equivalence. On smooth such schemes, $c_i(G)$ denotes the ordinary Chow Chern class in the quotient-projective-bundle convention. Pairs and triples here are just finite ordered lists of these classes; no set of all bundle isomorphism classes is constructed. For the empty scheme use the zero Chow groups and Chern convention of [F2]. [[math:def-chow-group-of-cycles-mod-rational-equivalence]], [[math:def-chern-classes-of-a-vector-bundle]], [[lem-author-f08c343a07fc-local-stabilized-chern]]

[F4] A rank-$r$ bundle has local module charts $\mathcal O_T^r$; $\mathcal O_T^r$ is the sheaf of $r$-tuples of functions. Module-sheaf morphisms are restriction-compatible linear maps on sections. The finite direct sum $E\oplus G$ is the sheaf of pairs with componentwise operations and restrictions. Thus on a chart of a rank-two bundle, $E\oplus\mathcal O_X$ is identified with $\mathcal O_X^3$ by concatenating coordinates. These identifications show that stabilization is a rank-three bundle. [[math:def-locally-free-sheaf-finite-rank]], [[math:def-module-on-ringed-space]]

[F5] For $f:T'\to T$, module pullback is $f^*G=\mathcal O_{T'}\otimes_{f^{-1}\mathcal O_T}f^{-1}G$. It is a functor on module sheaves, so it preserves isomorphisms: applying it to a morphism and its inverse gives inverse morphisms. Only this functor assertion of the right-exactness supplier is used; no flatness or exactness of $s^*$ is assumed. [[math:def-pullback-module-ringed-spaces]], [[math:lem-pullback-modules-right-exact]]

[F6] A sheaf has exactly one section over the empty open set. On the empty scheme this is its only open set, so any module sheaf has the singleton zero module there; between any two such module sheaves the unique map is linear and invertible. [[math:lem-sheaf-section-over-empty-set-terminal]], [[math:def-module-on-ringed-space]]

[F7] Algebraically closed means every nonconstant polynomial over $k$ has a root in $k$. Affine means isomorphic to a ring spectrum with its structure sheaf. Smoothness and finite type refer to the structure morphism to $\operatorname{Spec}k$; finite type means locally of finite type and quasi-compact. AC is retained through the geometry and Chern suppliers; the reduction makes no additional infinite choice. [[math:def-algebraically-closed-field]], [[math:def-affine-scheme]], [[math:def-smooth-morphism-schemes]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:def-axiom-of-choice]]

## Proof

1.1 Let $E,F$ be rank-two bundles on $X$ with equal first two Chern classes. If $X$ is empty, [F6] already gives $E\cong F$. Otherwise use $p,s$ from [F1], whose hypotheses hold by the geometric conventions in [F7] and the statement. By [F4], $E\oplus\mathcal O_X$ and $F\oplus\mathcal O_X$ have rank three. Both $X$ and $Y$ are smooth equidimensional and finite type over $k$, and $p$ is a $k$-morphism. Thus [F2], with the ordinary class convention of [F3], makes $p^*(E\oplus\mathcal O_X)$ and $p^*(F\oplus\mathcal O_X)$ rank-three bundles on $Y$ with identical Chern triples. The assumed rank-three uniqueness supplies an isomorphism $\alpha$ between them. [F1, F2, F3, F4, F6, F7, given]

2.1 In the nonempty case [F5] makes $s^*\alpha$ an isomorphism. Apply the canonical isomorphisms of [F1] to the two bundles $E\oplus\mathcal O_X$ and $F\oplus\mathcal O_X$ to obtain $E\oplus\mathcal O_X\cong F\oplus\mathcal O_X$. The assumed cancellation of a common trivial line now gives $E\cong F$. Together with the empty case of step 1.1, this proves the conclusion for every $X$ in the statement. [F1, F4, F5, given, step 1.1] ∎
