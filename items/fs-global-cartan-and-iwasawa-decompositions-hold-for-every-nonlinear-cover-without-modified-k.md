---
id: fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k
kind: false-statement
title: Global cartan and iwasawa decompositions hold for every nonlinear cover without modified k
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, thm-global-iwasawa-decomposition, thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations, def-axiom-of-choice, def-special-linear-lie-algebra-sl-two, thm-cartans-closed-subgroup-theorem, thm-lie-subgroup-lie-subalgebra-correspondence, thm-one-parameter-subgroups-are-exactly-exponentials, prop-exponential-map-is-natural-for-lie-group-homomorphisms, def-cartan-involution-of-a-real-semisimple-lie-algebra, prop-real-cartan-subalgebras-need-not-be-conjugate]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §3, Theorem 6.31 with its finite-center hypothesis, printed pp. 361-368; Chapter VII, §1, the covering and center hypotheses, printed pp. 434-446"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 43, §43.3, the universal cover of SL(2,R) is not linear, printed p. 199"
landmark: false
proof_strategy: counterexample
---

## Statement

Assume the Axiom of Choice. False: the global Cartan and Iwasawa decompositions, as stated for connected
semisimple groups with finite center and compact $K$, hold verbatim for every
nonlinear cover with the same compact $K$, so that no modification of $K$ is
needed.

## Facts & Assumptions

**Given:** The Axiom of Choice; the group $G=\operatorname{SL}_2(\mathbb R)$, its maximal compact subgroup $K=\operatorname{SO}(2)$, the Cartan involution $\theta(X)=-X^{T}$ of $\mathfrak{sl}_2(\mathbb R)$ with $\mathfrak k_0=\mathfrak{so}(2)=\mathbb Rk$, $k=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, and the universal covering homomorphism $\pi\colon\widetilde G\to G$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; in particular it supplies the countable-choice hypothesis of the closed-subgroup and subgroup-correspondence interfaces in [L3].

[L1] For a connected semisimple Lie group with finite center and a global Cartan involution with differential $\theta$, the fixed group $K$ is a closed compact subgroup with Lie algebra $\mathfrak k_0$ and $K\times\mathfrak p_0\to G$, $(k,X)\mapsto k\exp X$, is a diffeomorphism; moreover $G=KAN$ with $A=\exp\mathfrak a$, $N$ the connected subgroup with Lie algebra $\mathfrak n$, and the multiplication map $K\times A\times N\to G$ is a diffeomorphism ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], [[thm-global-iwasawa-decomposition]]).

[L2] Every connected real Lie group $G$ is isomorphic to $\widetilde G/\Gamma$ for its simply connected covering group and a discrete central subgroup $\Gamma$, and a covering homomorphism is a surjective homomorphism and a covering map ([[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]]).

[L3] A closed subgroup of a finite-dimensional real Lie group is an embedded Lie subgroup whose Lie algebra is $\{X:\exp(tX)\in H\text{ for all }t\}$; connected immersed subgroups with the same Lie algebra are uniquely isomorphic by an isomorphism commuting with their inclusions; and every one-parameter subgroup is $t\mapsto\exp(tX)$ for a unique $X$ ([[thm-cartans-closed-subgroup-theorem]], [[thm-lie-subgroup-lie-subalgebra-correspondence]], [[thm-one-parameter-subgroups-are-exactly-exponentials]]).

[L4] The map $\theta(X)=-X^{T}$ is a Cartan involution of $\mathfrak{sl}_2(\mathbb R)$, the group $G=\operatorname{SL}_2(\mathbb R)$ is connected semisimple with finite center $\{\pm I\}$ and Lie algebra $\mathfrak{sl}_2(\mathbb R)$, and the involutive automorphism $\Theta(g)=(g^{-1})^{T}$ of $G$ has differential $\theta$ and fixed group $K=\operatorname{SO}(2)$ ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]], [[def-special-linear-lie-algebra-sl-two]], [[prop-real-cartan-subalgebras-need-not-be-conjugate]]).

[L5] The universal cover $\widetilde G$ of $G$ is connected and simply connected, and every loop in $G$ lifts. The covering homomorphism intertwines exponential maps, so the one-parameter subgroup $t\mapsto\widetilde\exp(tX)$ projects to $t\mapsto\exp(tX)$ ([[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]], [[prop-exponential-map-is-natural-for-lie-group-homomorphisms]], [[thm-one-parameter-subgroups-are-exactly-exponentials]]).

## Refutation

**Proof technique:** counterexample.

1.1 For $G=\operatorname{SL}_2(\mathbb R)$ the Iwasawa decomposition of [L1] reads $G=KAN$ with $K=\operatorname{SO}(2)$, $A=\exp(\mathbb R h)$ and $N=\exp(\mathbb R e)$, so as a manifold $G$ is diffeomorphic to $\operatorname{SO}(2)\times\mathbb R^{2}$; consequently the fundamental group of $G$ is $\pi_1(G)\cong\pi_1(\operatorname{SO}(2))\cong\mathbb Z$. [L1, L4]

1.2 The subgroup $\widetilde K:=\pi^{-1}(K)$ is closed because $K$ is closed and $\pi$ is continuous, hence is an embedded Lie subgroup by [L3]. Its Lie algebra is $\mathfrak k_0=\mathbb Rk$: after identifying the two Lie algebras by the differential of the covering homomorphism, naturality of the exponential map in [L5] shows that $\widetilde\exp(tX)\in\widetilde K$ for every $t$ exactly when $\exp(tX)\in K$ for every $t$, which by [L3] is exactly $X\in\mathfrak k_0$. [L3, L4, L5]

2.1 By [L2] the universal cover $\pi\colon\widetilde G\to G$ satisfies $G\cong\widetilde G/\Gamma$ with $\Gamma$ a discrete central subgroup isomorphic to $\pi_1(G)$, so $\Gamma\cong\mathbb Z$ and the center of $\widetilde G$ contains a copy of $\mathbb Z$; in particular $Z(\widetilde G)$ is infinite and $\widetilde G$ does not have finite center. [L2, step 1.1]

2.2 The group $\widetilde K$ is noncompact and contains a subgroup isomorphic to $\mathbb R$: the one-parameter subgroup $t\mapsto\exp(tk)$ of $G$ is the loop of rotations generating $\pi_1(G)\cong\mathbb Z$ of step 1.1, so its lift $t\mapsto\widetilde\exp(tk)$ to $\widetilde G$ is injective and its image $\widetilde K_0=\widetilde\exp(\mathbb Rk)$ is a subgroup isomorphic to $\mathbb R$; explicitly the loop $t\mapsto\exp(tk)$, $0\le t\le2\pi$, is the standard generator of $\pi_1(\operatorname{SO}(2))$ under the diffeomorphism of step 1.1, hence is not null-homotopic, so the lifted one-parameter subgroup never returns to the identity. [L3, L5, step 1.1, step 1.2]

3.1 No compact subgroup of $\widetilde G$ has Lie algebra $\mathfrak k_0$: if a subgroup $H\subseteq\widetilde G$ had Lie algebra $\mathfrak k_0$, then its identity component would be a connected subgroup with Lie algebra $\mathfrak k_0$, hence by [L3] would coincide with the connected one-dimensional subgroup $\widetilde K_0\cong\mathbb R$ of step 2.2; thus $H$ would contain a subgroup isomorphic to $\mathbb R$ and could not be compact. [L3, step 2.2]

4.1 Now suppose that the global Cartan and Iwasawa decompositions held for the nonlinear cover $\widetilde G$ with the same compact $K$, that is, with a compact subgroup of $\widetilde G$ playing the role of the group $K$ of [L1] and having Lie algebra $\mathfrak k_0$. By step 3.1 no such compact subgroup exists; the natural group to use is the preimage $\widetilde K=\pi^{-1}(K)$, which by step 2.2 contains a subgroup isomorphic to the noncompact group $\mathbb R$ and is not the compact circle. Therefore the decompositions do not automatically hold on $\widetilde G$ with the same compact $K$, and $K$ must be replaced by the noncompact fixed group of the lifted Cartan involution; the finite-center and compactness hypotheses of [L1] cannot be erased. This refutes the statement. [L1, step 1.2, step 2.1, step 3.1] ∎

## Remarks

- The witness is the universal cover of $\operatorname{SL}_2(\mathbb R)$,
  which has infinite center by step 2.1 and is not a linear Lie group: it has
  no faithful finite-dimensional representation (Etingof, Lecture 43, §43.3,
  printed p. 199). The inverse image of the compact group
  $K=\operatorname{SO}(2)$ is the noncompact group $\widetilde K\cong\mathbb R$
  that must replace the compact circle in the Cartan and Iwasawa statements,
  exactly as recorded in the pair's
  [[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]
  and [[thm-global-iwasawa-decomposition]].
