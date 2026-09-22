---
id: cor-representation-ring-has-the-dominant-character-basis
kind: corollary
title: Dominant characters form the representation-ring basis
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-highest-weight-classification-for-a-compact-connected-lie-group, cor-irreducible-characters-are-orthonormal-class-functions, def-axiom-of-choice, def-matrix-coefficient-and-character-of-a-compact-group-representation, thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable, thm-complex-spectral-theorem-for-normal-endomorphisms, thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms, prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits, cor-complete-reducibility-for-compact-lie-groups]
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

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it supplies the assumptions of the complete-reducibility, classification and integration interfaces below.

[L1] Every finite-dimensional representation of $G$ is a direct sum of irreducible ones, and the irreducible ones are classified up to equivalence by dominant elements of $X^*(T)$ ([[cor-complete-reducibility-for-compact-lie-groups]], [[thm-highest-weight-classification-for-a-compact-connected-lie-group]]).

[L2] Characters of inequivalent irreducible representations are orthonormal in $L^2(G)$ and depend only on the equivalence class; characters are additive for direct sums and multiplicative for tensor products ([[cor-irreducible-characters-are-orthonormal-class-functions]], [[def-matrix-coefficient-and-character-of-a-compact-group-representation]]).

[L3] Every finite-dimensional continuous representation of $G$ can be made unitary; unitary operators are normal and hence diagonalizable, and a commuting family of diagonalizable endomorphisms admits a common eigenbasis ([[thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable]], [[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]).

[L4] Every conjugacy class of $G$ meets $T$, and its intersection with $T$ is a $W$-orbit ([[prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal I$ be the set of irreducible classes, indexed by dominant actual characters by [L1]. Every finite-dimensional representation is a finite direct sum of these by complete reducibility in [L1]. Its multiplicities are unique: unitarize the irreducibles by [L3], take the character of a decomposition using [L2], and integrate against the conjugate character of any fixed irreducible. Orthonormality returns exactly that irreducible's multiplicity. Thus the direct-sum monoid of representation classes is the monoid of finitely supported functions $\mathcal I\to\mathbb Z_{\ge0}$. Its Grothendieck group is the free abelian group of finitely supported functions $\mathcal I\to\mathbb Z$: positive and negative parts realize each integer vector as a difference, and equality of differences is coordinatewise. This is $R(G)$ as an abelian group. Tensor product distributes over direct sums and therefore defines its ring multiplication. Additivity and multiplicativity of trace in [L2] give the character ring homomorphism. [L1, L2, L3]

1.2 Let $\pi$ be a finite-dimensional representation. After choosing the invariant inner product of [L3], the commuting unitary operators $\{\pi(t):t\in T\}$ have a common eigenbasis. Thus $$V=\bigoplus_{\mu}V_\mu,\qquad \pi(t)v=\mu(t)v\quad(v\in V_\mu),$$ where each eigenvalue function $\mu:T\to S^1$ is a continuous homomorphism, hence belongs to $X^*(T)$. It follows that $$\chi_\pi|_T=\sum_\mu(\dim V_\mu)\mu\in\mathbb Z[X^*(T)].$$ If $n\in N_G(T)$, then $\pi(n)$ sends $V_\mu$ isomorphically to the weight space for the conjugate character $t\mapsto\mu(n^{-1}tn)$, so the multiplicities are permuted by $W$. Therefore the restricted character lies in $\mathbb Z[X^*(T)]^W$. [L3]

2.1 The characters of inequivalent irreducible representations are orthonormal by [L2], hence linearly independent as class functions on $G$. If an integral linear combination of their restrictions to $T$ vanishes, the same combination vanishes on every element of $G$ by [L4], because characters are class functions. Its coefficients therefore vanish, so restriction gives an injective character map $R(G)\hookrightarrow\mathbb Z[X^*(T)]^W$. [L2, L4, step 1.2]

3.1 By [L1] the irreducible classes correspond bijectively to the dominant elements of $X^*(T)$, and step 2.1 makes their characters linearly independent; hence the dominant irreducible characters form the asserted $\mathbb Z$-basis, with tensor product corresponding to multiplication of characters and direct sum to addition. [A1, L1, L2, step 1.1, step 2.1]∎
