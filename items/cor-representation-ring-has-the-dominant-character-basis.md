---
id: cor-representation-ring-has-the-dominant-character-basis
kind: corollary
title: Dominant characters form the representation-ring basis
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-highest-weight-classification-for-a-compact-connected-lie-group, thm-weyl-character-formula-for-compact-connected-lie-groups, cor-irreducible-characters-are-orthonormal-class-functions, def-axiom-of-choice, def-matrix-coefficient-and-character-of-a-compact-group-representation]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix Z, representation ring"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3 and Chapter V §8"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact connected Lie group with
maximal torus $T$. The character map embeds the representation ring $R(G)$ into
the Weyl-invariants $\mathbb Z[X^*(T)]^W$ of the group ring of the character
lattice, and the irreducible characters, indexed by the dominant weights in
$X^*(T)$, form a $\mathbb Z$-basis of $R(G)$; multiplication corresponds to the
tensor product of representations.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact connected $G$ with maximal torus $T$ and $W=W(G,T)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through [L1]–[L3].

[L1] Every finite-dimensional representation of $G$ is a direct sum of irreducible ones, and the irreducible ones are classified up to equivalence by dominant elements of $X^*(T)$ ([[thm-highest-weight-classification-for-a-compact-connected-lie-group]]).

[L2] Characters of inequivalent irreducible representations are orthonormal in $L^2(G)$ and depend only on the equivalence class; characters are additive for direct sums and multiplicative for tensor products ([[cor-irreducible-characters-are-orthonormal-class-functions]], [[def-matrix-coefficient-and-character-of-a-compact-group-representation]]).

[L3] For dominant $\lambda$ the character is given by the Weyl character formula, so it restricts to a $W$-invariant element of $\mathbb Z[X^*(T)]$, and distinct dominant weights give distinct characters ([[thm-weyl-character-formula-for-compact-connected-lie-groups]]).

## Proof

**Proof technique:** direct.

1.1 The representation ring $R(G)$ defined by direct sums and tensor products is the Grothendieck ring of the monoid of isomorphism classes of finite-dimensional representations; by [L1] it is the free abelian group on the irreducible classes, and the character map is additive and multiplicative by [L2]. [L1, L2]

1.2 The characters of inequivalent irreducible representations are orthonormal by [L2], hence linearly independent; so the character map is injective, and its image consists of the $W$-invariant elements of $\mathbb Z[X^*(T)]$ because characters are class functions and their restriction to $T$ is $W$-invariant by [L3]. [L2, L3]

2.1 By [L1] the irreducible classes correspond bijectively to the dominant elements of $X^*(T)$, and by [L3] the corresponding characters are distinct; hence the dominant irreducible characters form the asserted $\mathbb Z$-basis, with tensor product corresponding to multiplication of characters and direct sum to addition. [A1, L1, L2, L3, step 1.2]∎
