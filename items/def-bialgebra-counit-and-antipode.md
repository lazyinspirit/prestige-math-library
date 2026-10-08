---
id: def-bialgebra-counit-and-antipode
kind: definition
title: "Bialgebras, counits and antipodes over a commutative ring"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-algebra-over-a-commutative-ring
  - thm-tensor-product-of-algebras-over-a-commutative-ring
aliases: []
dependency_level: 0
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Pavel Etingof and Mykola Semenyakin, A Brief Introduction to Quantum Groups (lecture notes, arXiv:2106.05252v3)"
      url: "https://arxiv.org/pdf/2106.05252v3"
      locator: "§2.1, Definition 2.1 and preceding paragraphs, printed pp. 3–4: Hopf algebra structure maps and axioms; the text allows commutative-ring coefficients and notes that antipode invertibility is not implied."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 3, §3.2.3, printed pp. 27–28: coalgebras, counit and bialgebra compatibility; Ch. 13, §13.1.1, printed p. 297: Hopf algebra and antipode equations."
pipeline_run: frontier-43-complex-representation-15
---

## Definition

Let $R$ be a commutative ring. A **bialgebra over $R$** is a unital associative $R$-algebra $(A,m,\eta)$ ([[def-algebra-over-a-commutative-ring]]) together with $R$-algebra homomorphisms $\Delta:A\to A\otimes_R A$ (the **coproduct**) and $\varepsilon:A\to R$ (the **counit**) such that $\Delta$ is coassociative and the counit axioms hold:

$$(\Delta\otimes\operatorname{id}_A)\Delta=(\operatorname{id}_A\otimes\Delta)\Delta,\qquad (\varepsilon\otimes\operatorname{id}_A)\Delta=\operatorname{id}_A=(\operatorname{id}_A\otimes\varepsilon)\Delta.$$

The counit equations use the canonical identifications $R\otimes_R A\cong A\cong A\otimes_R R$. The target $A\otimes_R A$ has the $R$-algebra structure of [[thm-tensor-product-of-algebras-over-a-commutative-ring]].

A **Hopf algebra over $R$** is a bialgebra $(A,m,\eta,\Delta,\varepsilon)$ together with an $R$-linear **antipode** $S:A\to A$ satisfying both convolution-inverse equations

$$m(S\otimes\operatorname{id}_A)\Delta=\eta\circ\varepsilon=m(\operatorname{id}_A\otimes S)\Delta,$$

where $(\eta\circ\varepsilon)(a)=\varepsilon(a)1_A$. We do not assume that $S$ is invertible, involutive or multiplicative. Throughout, $\Delta$ and $\varepsilon$ are algebra homomorphisms, and the displayed order of the antipode factors is our convention.
