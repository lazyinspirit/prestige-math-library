---
id: def-lower-global-basis-of-a-quantum-highest-weight-module
kind: definition
title: "The lower global basis of $U_q^-$ and of a highest weight module"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-highest-weight-crystal-triple-is-balanced, def-the-bar-lattice-and-integral-lattice-of-a-based-module, lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality]
justified_by: []
aliases: []
landmark: false
dependency_level: 13
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§6.1, printed p. 508 (PDF p. 44): $G(b)$ as the inverse of $L_{\\mathbb Z}(\\infty)/qL_{\\mathbb Z}(\\infty)	o L(\\infty)/qL(\\infty)$; §0, Theorem 6, printed p. 467: the two globalization isomorphisms."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§9, printed pp. 51–53: (9.4), Theorem 9.2 and Definition 9.4 (the global basis), with the bar convention (9.2)–(9.3)."
    - title: "Jonathan Brundan, Dual Canonical Bases and Kazhdan–Lusztig Polynomials, arXiv:math/0509700v2 (Transform. Groups 14 (2009), 535–558)"
      url: "https://arxiv.org/pdf/math/0509700v2"
      locator: "§3, printed pp. 7–9: lower and upper global crystal bases in the type-A based-module dictionary, against [L, 27.3]."
---

## Definition

Let $M_A$ be $U_A^-$ or $V_A(\lambda)=U_A^-v_\lambda$, let $L$ be $\mathcal L(\infty)$ or $\mathcal L(\lambda)$, let $L^-:=\psi(L)$ be the bar lattice, all as in [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]] and [[def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules]], and let $E_{\mathbb Z}:=M_A\cap L\cap L^-$ be the balanced intersection. Let $\mathcal B$ be $\mathcal B(\infty)$ or $\mathcal B(\lambda)$.

By [[thm-the-highest-weight-crystal-triple-is-balanced]] the integral triple $(M_A,L,L^-)$ is balanced componentwise: for every root or label degree the canonical map $E_{\mathbb Z}\to(M_A\cap L)/(M_A\cap qL)$ is an isomorphism onto the free $\mathbb Z$-span $\bigoplus_{b\in\mathcal B}\mathbb Zb$ of the crystal classes of that degree. For $b\in\mathcal B$ define the **lower global lift** $G(b)$ to be the unique element of $E_{\mathbb Z}$ whose residue class in $(M_A\cap L)/(M_A\cap qL)$ is $b$. The family $G(\mathcal B)$ is the **lower global basis** of $M_A$ (of $U_A^-$ or of $V_A(\lambda)$).

With these definitions, the theorem's extensions give the basis assertions: the $A$-span of $G(\mathcal B)$ is $M_A$, its $A_0$-span is $L$, its $A_\infty$-span is $L^-$, and its $\mathbb Z$-span is $E_{\mathbb Z}$, while after tensoring with $\mathbb Q$ the residue classes of the $G(b)$ are the full rational crystal spaces; in particular $G(\mathcal B)$ is an $A$-basis of $M_A$. Each $G(b)$ is bar fixed, $G(0)$ is not defined, and no equality of $E_{\mathbb Z}$ with the whole Laurent module $M_A$ is implied; the identification of the integral residue subgroup with $\mathbb Z\mathcal B(\lambda)$ for highest modules is the corresponding part of the same theorem. The lifts are characterized by the simultaneous balanced intersection, not by an unproved unitriangular word-basis condition, and all definitions apply componentwise on finite root or label components and are extended by their direct sums.

