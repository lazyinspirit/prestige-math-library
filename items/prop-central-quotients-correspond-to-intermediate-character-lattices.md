---
id: prop-central-quotients-correspond-to-intermediate-character-lattices
kind: proposition
title: Central quotients and intermediate character lattices
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group, thm-compact-connected-lie-groups-are-classified-by-root-data, def-axiom-of-choice, thm-compact-group-weyl-group-is-finite, prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix V §V.2, central quotients and intermediate lattices"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §7"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Fix a simply connected compact semisimple group
$G_{sc}$ with maximal torus $T_{sc}$ and character lattice $P$, and consider
quotient markings $G_{sc}\to G_{sc}/C$ by central subgroups $C\le Z(G_{sc})$.
Then:

1. central subgroups $C\le Z(G_{sc})$ correspond contravariantly and
   bijectively to lattices $X$ with $Q\subseteq X\subseteq P$, by
   $C\mapsto X=X^*(T_{sc}/C)$ and $X\mapsto C=\bigcap_{\chi\in X}\ker\chi$;
2. if the markings are forgotten, abstract isomorphism classes of the quotients
   are the orbits of the intermediate lattices under the root-datum
   (Dynkin-diagram) automorphisms.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a simply connected compact semisimple group $G_{sc}$ with maximal torus $T_{sc}$, root lattice $Q$ and weight lattice $P=X^*(T_{sc})$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through [L1] and [L3].

[L1] For compact connected semisimple groups, $Q\subseteq X^*(T)\subseteq P$, and the simply connected form has $X^*(T)=P$; central subgroups of a compact connected group are finite and lie in every maximal torus ([[prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]], [[thm-compact-group-weyl-group-is-finite]]).

[L2] Finite abelian group duality: for a finite central subgroup $C$ of a torus $T$, the characters of $T/C$ are exactly the characters of $T$ trivial on $C$, and $C$ is recovered as the common kernel of those characters ([[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]]).

[L3] Isomorphism classes of compact connected Lie groups correspond to isomorphism classes of reduced compact root data, an isomorphism of groups carrying a maximal torus to a conjugate of a chosen one ([[thm-compact-connected-lie-groups-are-classified-by-root-data]]).

## Proof

**Proof technique:** direct.

1.1 Let $C\le Z(G_{sc})$ be central. It is finite by [L1] and contained in $T_{sc}$, and the characters of $T_{sc}/C$ are the characters of $T_{sc}$ trivial on $C$, so $X:=X^*(T_{sc}/C)$ is a subgroup of $P$ containing $Q$: it contains $Q$ because every root character is trivial on the centre and in particular on $C$. Conversely, given $Q\subseteq X\subseteq P$, the intersection $C:=\bigcap_{\chi\in X}\ker\chi$ is a closed subgroup of $T_{sc}$, contained in the kernel of every root character, hence central in $G_{sc}$ (the roots together with the centre generate the characters of $T_{sc}$ in a manner that makes their common kernel central), and finite by [L1]. [L1, L2]

2.1 The two constructions are inverse: characters of $T_{sc}/C$ are exactly the $\chi\in P$ trivial on $C$, which is the annihilator lattice of $C$; conversely the annihilator of the annihilator of a lattice $X$ inside the finite dual pairing $P^\perp\!/Q$ is $X$ itself, by finite abelian group duality [L2] applied to the finite group $T_{sc}/\exp(Q^\perp)$. Inclusion of central subgroups reverses inclusion of their annihilator lattices; so the correspondence is a contravariant bijection as claimed. [L1, L2, step 1.1]

3.1 If $G_{sc}/C_1$ and $G_{sc}/C_2$ are abstractly isomorphic as Lie groups, lift the isomorphism to the simply connected covers, which is unique by the universal property, obtaining an automorphism of $G_{sc}$ carrying $C_1$ to $C_2$; conversely an automorphism of $G_{sc}$ carrying $C_1$ to $C_2$ descends to an isomorphism of the quotients. [L3, step 2.1]

4.1 Inner automorphisms of $G_{sc}$ act trivially on the centre $Z(G_{sc})$ and hence fix every $C$; so only the outer automorphisms act nontrivially, and by [L3] those are exactly the root-datum automorphisms, i.e. the automorphisms of the Dynkin diagram together with the lattice automorphisms of the root datum, acting on the intermediate lattices by transport of structure. Forgetting the markings therefore identifies exactly the quotients whose lattices lie in a common orbit under these automorphisms. [A1, L3, step 2.1, step 3.1]∎
