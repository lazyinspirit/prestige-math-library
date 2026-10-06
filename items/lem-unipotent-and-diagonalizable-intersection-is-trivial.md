---
id: lem-unipotent-and-diagonalizable-intersection-is-trivial
kind: lemma
title: A subgroup that is both unipotent and diagonalizable is trivial
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-diagonalizable-group-and-character-module
  - def-morphism-and-closed-subgroup-scheme
  - def-unipotent-algebraic-group
  - def-group-of-multiplicative-type-and-torus
  - thm-multiplicative-type-groups-and-galois-character-modules
  - thm-unipotent-group-triangular-criterion
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Corollaries 14.16-14.17, printed p. 284
---
## Statement

Let $k$ be a field and let $G$ be an algebraic group over $k$. If a closed subgroup scheme $H\subseteq G$ ([[def-morphism-and-closed-subgroup-scheme]]) is both unipotent ([[def-unipotent-algebraic-group]]) and diagonalizable ([[def-diagonalizable-group-and-character-module]]), then $H=1$. Assuming the Axiom of Choice ([[def-axiom-of-choice]]) for the geometric splitting and closed-subgroup conversion, consequently a torus contains no nontrivial unipotent closed subgroup, and the intersection of a unipotent subgroup with a torus is trivial. No smoothness of $H$ is assumed.

## Facts & Assumptions

**Given:** A field $k$, an algebraic group $G$ over $k$, and a closed subgroup scheme $H\subseteq G$ that is both unipotent and diagonalizable.

[F1] A unipotent group is one for which every nonzero rational representation has a nonzero fixed vector, equivalently every simple rational representation is one-dimensional with trivial action. ([[def-unipotent-algebraic-group]])

[F2] A diagonalizable group has coordinate ring $k[M]$; its characters are the distinct basis elements $e_m$, and each character defines a one-dimensional rational representation. ([[def-diagonalizable-group-and-character-module]])

[F3] Assuming AC, a torus splits after a field extension, and a closed subgroup of a split torus is diagonalizable (Milne Theorem 12.9(c), printed pp. 233-234: its quotient coordinate Hopf algebra is spanned by group-like elements, which form a basis after identifying equal images). Unipotence is preserved by field extension and by closed subgroups; triviality of a subgroup scheme descends along a faithfully flat field extension. ([[def-group-of-multiplicative-type-and-torus]], [[thm-multiplicative-type-groups-and-galois-character-modules]], [[thm-unipotent-group-triangular-criterion]])

## Proof

**Given:** A field $k$ and a closed subgroup scheme $H\subseteq G$ that is unipotent and diagonalizable.

1.1 Write $O(H)=k[M]$. For each $m\in M$, its character representation $k_m$ is one-dimensional and nonzero. Unipotence gives a nonzero fixed vector in $k_m$ by [F1], so its character is trivial: $e_m=e_0$ as a function on the group scheme, with equality on every base algebra. Since the elements $e_m$ form a basis of $k[M]$, this equality forces $m=0$. Thus $M=0$, $O(H)=k$, and $H=1$. This tests individual character lines and uses neither arbitrary character-line decompositions nor a faithful-representation existence theorem. [F1, F2, algebra]

2.1 Assume AC for this geometric corollary. If $H$ is a unipotent closed subgroup of an arbitrary torus $T$, pass to a field extension splitting $T$. Then $H$ remains unipotent and is diagonalizable by [F3], hence is trivial by step 1.1. Faithfully flat descent gives $H=1$ over $k$. The intersection of a unipotent subgroup with a torus is a closed unipotent subgroup of that torus, so the same reasoning makes the intersection trivial. This includes nonreduced subgroup schemes and nonsplit tori. [F3, step 1.1] ∎
