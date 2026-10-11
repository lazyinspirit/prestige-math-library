---
id: def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules
kind: definition
title: "The integral residue lattices $L_A(\\infty)$ and $L_A(\\lambda)$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-bar-lattice-and-integral-lattice-of-a-based-module, def-lusztig-divided-power-integral-form, def-kashiwara-lattices-lambda-and-infinity, thm-integrable-quantum-highest-weight-module-exists-and-is-unique, thm-grand-loop-existence-of-highest-weight-crystal-bases, lem-divided-power-and-toral-quantum-binomial-reordering-identities, lem-crystal-operators-commute-with-highest-weight-projection-modulo-q]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
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
      locator: "§6.1, printed pp. 507–509 (PDF pp. 43–45): (6.1.4)–(6.1.7) and (6.1.12)–(6.1.17), where $L_{\\mathbb Z}(\\infty)$, $V_{\\mathbb Z}(\\lambda)$ and $L_{\\mathbb Z}(\\lambda)$ are introduced."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§9, printed p. 51: $U_A^-(\\mathfrak g)$, $V(\\lambda)_A=U_A^-(\\mathfrak g)v_\\lambda$ and the bar (9.2)–(9.3); §10, printed p. 54: $(f_i^nU_q^-)_A$ and $(f_i^nV(\\lambda))_A$."
---

## Definition

Let $A=\mathbb Z[q,q^{-1}]$, with rational discrete valuation rings $A_0$ at $q=0$ and $A_\infty$ at $q=\infty$. Put $M_A=U_A^-$ or $V_A(\lambda)=U_A^-v_\lambda$, $L=\mathcal L(\infty)$ or $\mathcal L(\lambda)$, and $L^-=\psi(L)$, the bar lattice, as in [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]].

The **integral residue lattice** is $L_{\mathbb Z}:=M_A\cap L$, a $\mathbb Z[q]$-module, and its **bar lattice** is $L_{\mathbb Z}^-:=M_A\cap L^-$, a $\mathbb Z[q^{-1}]$-module. The **balanced intersection** is $E_{\mathbb Z}:=M_A\cap L\cap L^-$, a $\mathbb Z$-module. Since $q^{-1}M_A=M_A$, one has $M_A\cap qL=qL_{\mathbb Z}$; consequently the residue map $L_{\mathbb Z}/qL_{\mathbb Z}\to L/qL$ is injective and is $\mathbb Z$-linear. Its image is an integral subgroup of the rational crystal space, not the entire $\mathbb Q$-space. No Laurent-$A$-linearity is asserted on the residue lattice or on the residue map.

The field projection $\pi_\lambda:U_q^-\to V(\lambda)$, $\pi_\lambda(P)=Pv_\lambda$, restricts to an $A$-linear surjection $U_A^-\to V_A(\lambda)$ ([[def-lusztig-divided-power-integral-form]]), and it sends $L_{\mathbb Z}(\infty)$ into $L_{\mathbb Z}(\lambda)$ by the already-proved grand-loop lattice projection ([[thm-grand-loop-existence-of-highest-weight-crystal-bases]]). The module $V_A(\lambda)$ is $U_A$-stable: the divided-power and toral reordering identities of [[lem-divided-power-and-toral-quantum-binomial-reordering-identities]] reduce the action on $v_\lambda$ to negative divided powers and Gaussian scalars in $A$, with all positive generators killing the highest vector except through the unit, and the residue compatibility of the projection is [[lem-crystal-operators-commute-with-highest-weight-projection-modulo-q]]. No global freeness, residue spanning or balancedness is assumed here. The integral residue subgroup for the negative half is proved below to be $\mathbb Z B(\infty)$; the module subgroup $\mathbb Z B(\lambda)$ is a consequence of globalization.

