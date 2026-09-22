---
id: prop-central-quotients-correspond-to-intermediate-character-lattices
kind: proposition
title: Central quotients and intermediate character lattices
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group, thm-compact-connected-lie-groups-are-classified-by-root-data, thm-smith-normal-form-existence-over-a-pid, def-axiom-of-choice, prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t, thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group, thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers, prop-weyl-length-equals-positive-root-inversion-number, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice, def-roots-of-a-compact-connected-lie-group, thm-compact-group-weyl-group-is-finite, prop-exponential-map-is-natural-for-lie-group-homomorphisms, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]
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

[L1] The character lattice of the simply connected compact semisimple form is P, its root lattice Q has full rank in P, and the adjoint form has character lattice Q ([[prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]], [[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]).

[L2] Let $M$ be a full-rank sublattice of a torus character lattice $X^*(U)$. Smith normal form gives bases in which $X^*(U)=\mathbb Z^r$ and $M=d_1\mathbb Z\oplus\cdots\oplus d_r\mathbb Z$ with $d_i>0$ ([[thm-smith-normal-form-existence-over-a-pid]]). The corresponding coordinate characters identify $U$ with $(S^1)^r$ by the exponential-lattice description ([[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]]). Thus the common kernel is $\prod_i\mu_{d_i}$, and a character is trivial on it exactly when every coordinate exponent is divisible by $d_i$, namely exactly when it lies in $M$. Compact connected groups themselves are classified by their paired root data ([[thm-compact-connected-lie-groups-are-classified-by-root-data]]).

[L3] The centralizer of $T_{sc}$ is $T_{sc}$. The compact adjoint character decomposition has zero space equal to the complexified toral algebra and nonzero spaces the root spaces: the definition identifies the zero space with the infinitesimal centralizer, while $C_{G_{sc}}(T_{sc})=T_{sc}$. Exponentials are natural and give an identity neighborhood ([[thm-compact-group-weyl-group-is-finite]], [[def-roots-of-a-compact-connected-lie-group]], [[prop-exponential-map-is-natural-for-lie-group-homomorphisms]], [[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]]).

[L4] A quotient by a closed normal subgroup is a Lie group with the quotient Lie algebra ([[thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group]]). The Weyl group acts simply transitively on chambers, hence transitively on bases ([[thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]]), and every Weyl-group element is a product of simple reflections ([[prop-weyl-length-equals-positive-root-inversion-number]]). Simple roots form a basis, and every root has integral coordinates of one sign in that basis ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

## Proof

**Proof technique:** torus annihilators and root-data isomorphisms.

1.1 Every central element of $G_{sc}$ centralizes $T_{sc}$, so belongs to $T_{sc}$ by [L3]. For $t\in T_{sc}$, its adjoint action is the identity on the Cartan space and multiplication by $\alpha(t)$ on each root space. Thus all root characters equal one exactly when $\operatorname{Ad}(t)=I$. In that case naturality makes conjugation by t fix every exponential; these generate connected $G_{sc}$ because an exponential neighborhood generates an open subgroup, whose complement is also open. Hence t is central. We have proved $Z(G_{sc})=\bigcap_{\alpha\in\Phi}\ker\alpha$. Since Q is full rank in P by [L1], [L2] applied to M=Q makes this center finite. This proof avoids any blanket finiteness assertion for centers of groups with a torus factor. [L1, L2, L3]

2.1 Given $C\le Z(G_{sc})$, it is finite and closed by step 1.1. The quotient group and quotient torus exist by [L4]. The torus $T_{sc}/C$ is maximal: its Lie algebra is still the original maximal abelian algebra; a containing torus must have that same Lie algebra and equality follows from exponential charts and connectedness. Pullback injects its character lattice into P and identifies it with $X_C=\{\chi\in P:\chi|_C=1\}$. Indeed, a character trivial on C factors through the topological quotient continuously; conversely a pulled-back character is trivial on C. Every root is trivial on C by step 1.1, giving $Q\subseteq X_C\subseteq P$. Characters of $T_{sc}/C$ separate its points by [L2], so a point of $T_{sc}$ annihilated by all $X_C$ must lie in C. Therefore C is recovered by the stated common-kernel construction. [L1, L2, L3, L4, step 1.1]

3.1 Conversely let $Q\subseteq X\subseteq P$. It has full rank and finite index, since Q does by [L1]. Its common kernel $C_X$ is finite by [L2] and lies in the common root kernel, which is central by step 1.1. The Smith-form duality of [L2] says precisely that $X_{C_X}=X$. Together with step 2.1 this proves both inverse identities. Inclusion reverses because more characters impose more common-kernel conditions (and, in the other direction, a larger subgroup imposes more character-triviality conditions). In particular $C=\{e\}$ corresponds to P and $C=Z(G_{sc})$ to Q. [L1, L2, step 1.1, step 2.1]

3.2 The root datum of $G_{sc}/C$ is the datum on $X_C$ with the original roots and coroot pairings: the finite quotient is a Lie-algebra isomorphism and the pulled-back adjoint characters are the original roots. If two such quotients are isomorphic, [L2] gives an isomorphism $F:X_{C_2}\to X_{C_1}$ of their paired root data. Since both lattices have full rank, F extends uniquely to their real spans. It permutes the fixed root set and the corresponding coroot functionals. Thus it preserves Q and P, the latter being exactly the vectors pairing integrally with every coroot by [L1]. Hence it extends to an automorphism of the fixed simply connected root datum on P carrying $X_{C_2}$ to $X_{C_1}$. Conversely any such automorphism restricts to an isomorphism of the two quotient root data, and [L2] then gives a Lie-group isomorphism. This proves the unmarked classification by root-data automorphism orbits without asserting an unproved lifting property of universal covers. [L1, L2, L4, step 2.1]

4.1 To replace full root-data automorphisms by Dynkin-diagram automorphisms in this orbit description, fix a base. Every full automorphism takes it to another base, so [L4] lets us compose by W to preserve the chosen base. Every intermediate X is W-stable: $s_\alpha x=x-\langle x,\alpha^\vee\rangle\alpha\in X$ since $x\in P$, the pairing is integral, and $\alpha\in Q\subseteq X$; applying the involution gives equality. Therefore this composition does not change the orbit relation on the intermediate lattices. Base-preserving automorphisms are exactly permutations of the simple roots preserving the Cartan integers, namely automorphisms of the Dynkin diagram with its multiplicities and arrows, including permutations of isomorphic components. Conversely such a permutation extends linearly and intertwines the simple reflections. Every positive nonsimple root $\beta=\sum b_i\alpha_i$ has $(\beta,\alpha_i)>0$ for some $i$ with $b_i>0$, since otherwise $(\beta,\beta)=\sum b_i(\beta,\alpha_i)\le0$. The reflected root $s_i\beta$ is positive—its coefficients other than that of $\alpha_i$ are unchanged and some such coefficient is positive unless reducedness makes $\beta=\alpha_i$—and has strictly smaller integral height. Induction therefore carries every root to a simple root by simple reflections. The base permutation consequently preserves all roots and, by its Cartan-matrix compatibility, their coroot functionals and P. It is therefore a based root-data automorphism. This proves clause 2 in its Dynkin-diagram form. If the root system is empty then the connected semisimple group is trivial, P=Q=0 and both correspondences have one member. The full-center quotient is the adjoint group, not generally the trivial group. Choice enters through the cited group and lattice classification interfaces. [A1, L1, L2, L3, L4, step 3.1, step 3.2] ∎
