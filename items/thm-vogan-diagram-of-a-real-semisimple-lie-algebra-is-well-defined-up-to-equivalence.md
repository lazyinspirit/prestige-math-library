---
id: thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence
kind: theorem
title: Vogan diagram of a real semisimple Lie algebra is well defined up to equivalence
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification, def-vogan-diagram, prop-every-positive-system-is-weyl-conjugate-and-bases-correspond-to-chambers, def-axiom-of-choice, def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-cayley-transform-of-a-theta-stable-cartan-subalgebra, thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, thm-conjugacy-of-maximal-tori, def-torus-and-maximal-torus-in-a-compact-lie-group]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §8, the definition of the Vogan diagram and Theorem 6.74 with its proof, printed pp. 397-402; Proposition 6.61, printed p. 387"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 40, §40.2 and Lecture 41, §41.1, printed pp. 187-191"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g_0$ be a finite-dimensional real
semisimple Lie algebra with Cartan involution $\theta$, and let
$(\mathfrak h_0,\Delta^{+})$ and $(\mathfrak h_0',(\Delta')^{+})$ be two choices
of a maximally compact $\theta$-stable Cartan subalgebra with a compatible
positive system ([[def-vogan-diagram]]). Then the Vogan diagrams of the triples
$(\mathfrak g_0,\mathfrak h_0,\Delta^{+})$ and
$(\mathfrak g_0,\mathfrak h_0',(\Delta')^{+})$ are equivalent abstract Vogan
diagrams in the sense of [[def-vogan-diagram]]. Consequently the Vogan diagram
of a real semisimple Lie algebra with a fixed Cartan involution is well defined
up to the standard equivalence.

## Facts & Assumptions

**Given:** The Axiom of Choice; a real semisimple Lie algebra $\mathfrak g_0$ with Cartan involution $\theta$ and complexification $\mathfrak g$; and two maximally compact $\theta$-stable Cartan subalgebras $\mathfrak h_0,\mathfrak h_0'$ with compatible positive systems $\Delta^{+},(\Delta')^{+}$ and bases $\Delta,\Delta'$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the conjugacy of maximally compact Cartan subalgebras of [L1] and the conjugacy of maximal tori of [L2].

[L1] Maximally compact $\theta$-stable Cartan subalgebras of $\mathfrak g_0$ exist, have no real roots, and any two of them are conjugate by $\operatorname{Ad}(k)$ for some $k\in K$ ([[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]], [[def-theta-stable-cartan-subalgebra-and-compact-split-parts]]).

[L2] For the compact group $K$ of the global Cartan decomposition, $\operatorname{Ad}(K)\subseteq\operatorname{Int}(\mathfrak g_0)$ commutes with $\theta$ on $\mathfrak g_0$ ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], [[thm-conjugacy-of-maximal-tori]], [[def-torus-and-maximal-torus-in-a-compact-lie-group]]).

[L3] Positive systems of a reduced crystallographic root system are permuted simply transitively by the Weyl group, and bases correspond bijectively to positive systems, so for two positive systems there is a unique Weyl group element carrying one to the other ([[prop-every-positive-system-is-weyl-conjugate-and-bases-correspond-to-chambers]]).

[L4] A positive system $\Delta^{+}$ of $(\mathfrak g,\mathfrak h_0)$ is compatible with $(\mathfrak h_0,\theta)$ exactly when its base satisfies $\theta(\Delta)=\Delta$, and then $\theta$ permutes the simple roots; also $\theta(\Delta^{+})=\Delta^{+}$ implies that the Weyl group element carrying one compatible positive system to another commutes with the induced involution ([[def-vogan-diagram]], [[prop-every-positive-system-is-weyl-conjugate-and-bases-correspond-to-chambers]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] there is $k\in K$ with $\operatorname{Ad}_k\mathfrak h_0=\mathfrak h_0'$, and by [L2] the automorphism $\operatorname{Ad}_k$ commutes with $\theta$; hence the induced isometry $\varphi:=\operatorname{Ad}_k^{*}$ of the dual spaces carries the root system $\Phi(\mathfrak g,\mathfrak h_0)$ onto $\Phi(\mathfrak g,\mathfrak h_0')$ and satisfies $\varphi\tau\varphi^{-1}=\tau'$ for the induced involutions of the two root systems, and, because $\operatorname{Ad}_k$ commutes with $\theta$ and preserves $\mathfrak k_0$ and $\mathfrak p_0$, it satisfies $\varepsilon'\circ\varphi=\varepsilon$ for the two markings; moreover $\varphi(\Delta)$ is a base of $\Phi(\mathfrak g,\mathfrak h_0')$ and $\varphi(\Delta^{+})$ is a positive system of it. [L1, L2, L4]

2.1 By [L3] there is a unique element $w$ of the Weyl group of $\Phi(\mathfrak g,\mathfrak h_0')$ with $w\varphi(\Delta^{+})=(\Delta')^{+}$, and then $w\varphi(\Delta)=\Delta'$; since both $\varphi(\Delta^{+})$ and $(\Delta')^{+}$ are $\tau'$-stable, applying $\tau'$ to the relation $w\varphi(\Delta^{+})=(\Delta')^{+}$ and using uniqueness gives $\tau'w=w\tau'$, so $w\varphi(\Delta)$ is a $\tau'$-stable base of the same marked root system $(\Phi(\mathfrak g,\mathfrak h_0'),\tau',\varepsilon')$. [L3, L4, step 1.1]

3.1 The Vogan diagram of $(\mathfrak g_0,\mathfrak h_0,\Delta^{+})$ is carried by the isometry $\varphi$ of step 1.1 to the Vogan diagram attached to the base $\varphi(\Delta)$ of the marked root system $(\Phi(\mathfrak g,\mathfrak h_0'),\tau',\varepsilon')$, namely to the diagram with the same involution $\tau'$ and the painted set $\{\beta\in\varphi(\Delta)^{\tau'}:\varepsilon'(\beta)=-1\}$; this is an isomorphism move of [[def-vogan-diagram]]. The Vogan diagram of $(\mathfrak g_0,\mathfrak h_0',(\Delta')^{+})$ is the diagram attached to the base $\Delta'$ of the same marked root system, and by step 2.1 the bases $\varphi(\Delta)$ and $\Delta'$ are both $\tau'$-stable bases of this one marked root system, so the two diagrams differ by a change-of-base move. [step 1.1, step 2.1, L4]

4.1 Combining steps 3.1 with the transitivity of the equivalence relation of [[def-vogan-diagram]], the Vogan diagram of $(\mathfrak g_0,\mathfrak h_0,\Delta^{+})$ and that of $(\mathfrak g_0,\mathfrak h_0',(\Delta')^{+})$ are equivalent abstract Vogan diagrams. The two choices were arbitrary, so the Vogan diagram of $\mathfrak g_0$ with respect to $\theta$ is well defined up to equivalence. [step 3.1, A1] ∎
