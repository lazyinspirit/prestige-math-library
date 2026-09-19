---
id: thm-highest-weight-classification-for-a-compact-connected-lie-group
kind: theorem
title: Highest weights for compact connected groups
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-complete-reducibility-for-compact-lie-groups, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t, prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group, thm-compact-connected-lie-groups-are-classified-by-root-data, thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §8, Theorems 5.107 and 5.110 (compact highest weights and analytic integrality)"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix V, analytic integrality"
proof_strategy: direct
landmark: true
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact connected Lie group with
maximal torus $T$ and a fixed positive system. Then irreducible
finite-dimensional continuous complex representations of $G$ are classified,
up to equivalence, by the dominant elements of the *actual* character lattice
$X^*(T)$: the highest weight of such a representation is a dominant element of
$X^*(T)$, and every dominant element of $X^*(T)$ is the highest weight of
exactly one irreducible representation.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact connected $G$ with maximal torus $T$ and positive system for the root system $\Phi(G,T)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the covering and integration theory of [L4] and [L5].

[L1] Irreducible finite-dimensional complex representations of the complexified derived algebra $\mathfrak g_{\mathbb C}'$ are classified by dominant integral weights in the abstract weight lattice $P$, with $L(\lambda)$ the simple quotient of the Verma-type module of highest weight $\lambda$ ([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).

[L2] For a compact connected semisimple group, the actual character lattice lies between its root and weight lattices, and its simply connected form has character lattice $P$ ([[prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]]). For an arbitrary torus, characters are precisely the integral functionals on its exponential lattice ([[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]]).

[L3] Every finite-dimensional continuous complex representation of $G$ is a direct sum of irreducible ones; the central torus acts on an irreducible representation by a single character by Schur's lemma; characters of $T$ restricting to the identity on $Z(G)^0$ are exactly the characters of the quotient torus ([[cor-complete-reducibility-for-compact-lie-groups]], [[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]]).

[L4] Multiplication induces a finite central covering $Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}\to G$, whose maximal torus is the product of $Z(G)^0$ with the maximal torus $T_{\mathrm{sc}}$ of $G_{\mathrm{der}}^{\mathrm{sc}}$ ([[thm-compact-connected-lie-groups-are-classified-by-root-data]]).

[L5] The Lie functor from connected simply connected groups to Lie algebras is an equivalence and integration is unique; every connected Lie group is the quotient of its simply connected cover by a discrete central subgroup ([[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]]).

## Proof

**Proof technique:** direct.

1.1 Let $V$ be an irreducible finite-dimensional representation of $G$. Differentiating gives a representation of $\mathfrak g_{\mathbb C}$ on $V$, which is irreducible: a proper nonzero $\mathfrak g_{\mathbb C}$-invariant subspace would be invariant under the connected group $G$ and hence a subrepresentation. The central torus acts by a single character $\mu_0$ of $Z(G)^0$ by [L3], and the derived algebra $\mathfrak g'$ has a highest weight $\lambda'$; the T-weight of the highest-weight line is the character $\lambda\in X^*(T)$ whose restriction to $Z(G)^0$ is $\mu_0$ and whose differential restricts to $\lambda'$ on the semisimple directions. Dominance is inherited from the dominant $\lambda'$ and the description of the positive system. [L1, L3]

1.2 Conversely let $\lambda\in X^*(T)$ be dominant. Under the covering of [L4], its pullback to the maximal torus $Z(G)^0\times T_{\mathrm{sc}}$ is a character and therefore has a central component and a character $\lambda'$ of $T_{\mathrm{sc}}$. Since $G_{\mathrm{der}}^{\mathrm{sc}}$ is semisimple and simply connected, [L2] identifies $X^*(T_{\mathrm{sc}})$ with $P$; dominance of $\lambda$ says that $\lambda'$ is dominant. By [L1] it determines a finite-dimensional irreducible $\mathfrak g'_{\mathbb C}$-module, which integrates by [L5] to a representation of $G_{\mathrm{der}}^{\mathrm{sc}}$. [L1, L2, L4, L5]

2.1 The central component acts on that module by the character of $Z(G)^0$, so the product representation of $Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}$ is irreducible and finite-dimensional; every element of the finite central kernel of the covering acts by the scalar by which the pullback of $\lambda$ acts, and since $\lambda$ is a character of $T$ this scalar is one. Hence the representation descends to a finite-dimensional representation of $G$ with highest weight $\lambda$, and it is irreducible because its restriction to the covering group is. [L4, step 1.2]

3.1 The two constructions are inverse: differentating the descended representation recovers $\lambda$ as in step 1.1, while the extension of a $\mathfrak g_{\mathbb C}$-module to the simply connected cover is unique by [L5] and faithful on intertwiners because $G$ is connected (an intertwiner of $G$-modules is determined by its differential). Hence the maps are mutually inverse bijections between isomorphism classes of irreducible finite-dimensional representations of $G$ and dominant elements of $X^*(T)$. The Axiom of Choice entered only through the cited covering and integration theory. [A1, L1, L3, step 1.1, step 2.1] ∎
