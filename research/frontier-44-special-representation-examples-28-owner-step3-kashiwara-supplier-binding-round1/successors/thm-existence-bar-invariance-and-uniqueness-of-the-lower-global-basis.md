---
id: thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis
kind: theorem
title: "Bar invariance, congruence and uniqueness of the lower global basis"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-balanced-triple-and-globalization-map, def-lower-global-basis-of-a-quantum-highest-weight-module, def-the-bar-lattice-and-integral-lattice-of-a-based-module, lem-string-ideal-decomposition-of-the-integral-lattices, lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality, thm-the-highest-weight-crystal-triple-is-balanced]
justified_by: []
aliases: []
landmark: false
dependency_level: 14
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§0, Theorem 7, printed p. 467; §7.5, printed pp. 515–516 (PDF pp. 51–52): (7.5.4)–(7.5.6) and the concluding argument of §7.5."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§9, printed pp. 52–53: Theorem 9.2 and the full proof of Theorem 9.3, including the divided-difference computation."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§§14.2.3–14.2.4 printed118–119/PDF127–128 and §§14.3.1–14.4.12 printed120–124/PDF129–133: signed norm characterization, positive recursion and based quotients; contextual comparison only, integral globalization is proved from Kashiwara91§§6–7."
---

## Statement

For the divided-power integral form $U_A^-$ of [[def-lusztig-divided-power-integral-form]] and for every dominant $\lambda$, let $M_A$ be $U_A^-$ or $V_A(\lambda)=U_A^-v_\lambda$, let $L$ be $\mathcal L(\infty)$ or $\mathcal L(\lambda)$ with bar lattice $L^-=\psi(L)$, and let $\mathcal B$ be $\mathcal B(\infty)$ or $\mathcal B(\lambda)$. Then there is a unique lower global family $G(\mathcal B)\subseteq M_A\cap L\cap L^-$ with the property that the residue class of $G(b)$ in $(M_A\cap L)/(M_A\cap qL)$ is $b$ for every $b\in\mathcal B$, namely the family of [[def-lower-global-basis-of-a-quantum-highest-weight-module]]. It is bar invariant, a genuine $A=\mathbb Z[q,q^{-1}]$ basis of $M_A$, and a basis of both rational chart lattices $L$ and $L^-$ over $A_0$ and $A_\infty$; its $\mathbb Z$-span is the simultaneous balanced intersection $M_A\cap L\cap L^-$ and its field span is the whole module. It is adapted to every divided string-image ideal in the exact sense of the integral balanced theorem, and the same family is obtained with residue $b$ over either chart. No word family is assumed to be a basis, no unitriangular characterization is used, and no lower lattice self-duality is asserted.

## Facts & Assumptions

**Given:** The balanced triple $(M_A,L,L^-)$ over $A_0,A_\infty$ of [[def-balanced-triple-and-globalization-map]], the string-image ideals $I_{(i,n)}^A,J_{(i,n)}^A$ of [[lem-string-ideal-decomposition-of-the-integral-lattices]], the lower global definition of [[def-lower-global-basis-of-a-quantum-highest-weight-module]], and the bar involution $\psi$ with its stability of $U_A^-$ and the divided-power form ([[lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality]]).

[F1] Integral balanced theorem ([[thm-the-highest-weight-crystal-triple-is-balanced]]): the triples $(U_A^-,\mathcal L(\infty),\psi(\mathcal L(\infty)))$ and $(V_A(\lambda),\mathcal L(\lambda),\psi(\mathcal L(\lambda)))$ are integrally balanced componentwise; the balanced $\mathbb Z$-intersection maps isomorphically onto $\mathbb Z\mathcal B$, after rational extension onto the full rational crystal space; there are bar-invariant global lifts $G(b)$ forming an $A$-basis of $M_A$, spanning $L$ over $A_0$ and $L^-$ over $A_\infty$, adapted to every string-image ideal $I_{(i,n)}^A$ and $J_{(i,n)}^A$ with the displayed free decompositions.

[F2] Balancedness and its kernel ([[def-balanced-triple-and-globalization-map]]): the canonical map $E_{\mathbb Z}=M_A\cap L\cap L^-\to(M_A\cap L)/(M_A\cap qL)$ is an isomorphism exactly when the triple is balanced, so in the balanced case an element of $E_{\mathbb Z}$ lies in $M_A\cap qL$ only if it is $0$.

[F3] Bar transport ([[lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality]], [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]]): $\psi$ preserves $U_A^-$, commutes with the projection $\pi_\lambda$, and exchanges $\mathcal L$ and $L^-$, so the balanced intersection $E_{\mathbb Z}$ is stable under $\psi$ and $\psi$ transports the zero-chart residue map to the infinity-chart residue map; the bar-fixed global lifts and their corresponding residue labels are supplied by [F1], not by an action of $q\mapsto q^{-1}$ on the zero-chart quotient.

## Proof

**Proof technique:** direct.

1.1 **Existence.** Apply [F1] degree by degree, and note that the residue target is the free $\mathbb Z$-span of $\mathcal B$ in each finite root or label component. The lift $G(b)$ of residue $b$ exists in $E_{\mathbb Z}$, is bar invariant by [F1], and the direct sums over degrees give a family $G(\mathcal B)$ with the asserted spanning properties over $A$, $A_0$ and $A_\infty$; adaptedness to the string ideals is the corresponding clause of [F1]. [F1, F3]

2.1 **Uniqueness.** Let $g,h\in M_A\cap L\cap L^-$ have the same residue class in $(M_A\cap L)/(M_A\cap qL)$. Then $g-h\in M_A\cap L\cap qL\subseteq E_{\mathbb Z}$ lies in the kernel of the canonical map of [F2], which is injective in the balanced case; hence $g=h$. Applied to $g=G(b)$ and an arbitrary lift of $b$, this is exactly the uniqueness used by later consumers, and it identifies the family defined over either chart. [F2, step 1.1]

3.1 **Conclusion.** Steps 1.1 and 2.1 give existence, the residue normalization, bar invariance, the two chart-basis assertions, the balanced-intersection and field-span descriptions and uniqueness; no word family, unitriangular condition or lower self-duality enters, since the construction is the inverse of the integral globalization map of [F2]. [step 1.1, step 2.1] ∎
