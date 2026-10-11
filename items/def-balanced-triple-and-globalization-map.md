---
id: def-balanced-triple-and-globalization-map
kind: definition
title: "Balanced triples over the two charts of $\\mathbb P^1$ and the globalization map"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-bar-lattice-and-integral-lattice-of-a-based-module]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§7.1, printed pp. 509–512 (PDF pp. 45–48): the chart setting and Lemmas 7.1.1–7.1.2; the vector-bundle translation on $\\mathbb P^1$ is the remark after Lemma 7.1.2."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§8, printed pp. 50–51: Definition 8.1 (balanced triple), Theorem 8.2 (equivalent forms), Definition 8.3 (global basis) and Lemma 8.4 (the generation criterion)."
---

## Definition

Let $V$ be a finite-dimensional vector space over $\mathbb Q(q)$, let $M\subseteq V$ be an $A=\mathbb Z[q,q^{-1}]$-submodule spanning $V$, and let $L_0,L_\infty$ be free full rational chart lattices over $A_0,A_\infty$ (as for a based module in [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]]). Put
$$L_{\mathbb Z}:=M\cap L_0,\qquad L_{\mathbb Z}^-:=M\cap L_\infty,\qquad E_{\mathbb Z}:=M\cap L_0\cap L_\infty.$$
The **integral triple** $(M,L_0,L_\infty)$ is **balanced** if the canonical $\mathbb Z$-linear map
$$E_{\mathbb Z}\longrightarrow L_{\mathbb Z}/qL_{\mathbb Z}=(M\cap L_0)/(M\cap qL_0)$$
is an isomorphism. Its inverse is the **integral globalization map** on the integral residue subgroup. **Rational balancedness** is the corresponding isomorphism $\mathbb Q\otimes_{\mathbb Z}E_{\mathbb Z}\to L_0/qL_0$, after extending the integral subgroup by $\mathbb Q$. In the applications of this page the integral subgroup is $\mathbb Z B$ for the lower global family $B$, and its globalization gives the lower lifts $G(b)$.

For a balanced triple, the two-chart lemma of this page proves $M\cong A\otimes_{\mathbb Z}E_{\mathbb Z}$, $L_{\mathbb Z}\cong\mathbb Z[q]\otimes_{\mathbb Z}E_{\mathbb Z}$ and $L_{\mathbb Z}^-\cong\mathbb Z[q^{-1}]\otimes_{\mathbb Z}E_{\mathbb Z}$. If the triple is balanced and $E_{\mathbb Z}$ has a finite $\mathbb Z$-basis $B_E$ whose rational residue classes are a basis of $L_0/qL_0$, these lifts give bases of $M,L_0,L_\infty$ over $A,A_0,A_\infty$ respectively. Thus $A$-freeness of $M$ is a conclusion from integral balancedness together with a proved free integral residue basis; it is not automatic for an arbitrary not-finitely-generated $\mathbb Z$-submodule. All definitions apply componentwise to the finite root or label spaces.

