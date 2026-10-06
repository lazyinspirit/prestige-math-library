---
id: lem-kernel-inclusion-implies-the-norm-inequality
kind: lemma
title: Kernel inclusion implies the norm inequality
deps:
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra
  - lem-c-star-positive-calculus-and-order-estimates
  - def-full-group-c-star-algebra
  - def-axiom-of-choice
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the quotient and representation-correspondence suppliers; the factorization argument uses no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Proposition 8.B.4 and Remark 8.B.5 (norm inequality)"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: Theorem F.4.4(iii)"
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group and let $\pi$ and $\rho$ be
strongly continuous unitary representations of $G$ with extended
representations of $C^*(G)$
([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]],
[[def-full-group-c-star-algebra]]) satisfying
$\ker\rho\subseteq\ker\pi$ as closed two-sided ideals of $C^*(G)$. Then
$$\|\pi(a)\|\le\|\rho(a)\|\qquad(a\in C^*(G)).$$
The zero representation is allowed on either side.

## Facts & Assumptions

**Given:** AC; an LCH group $G$; unitary representations $\pi,\rho$ with extended nondegenerate star-representations of $C^*(G)$ whose kernels satisfy $\ker\rho\subseteq\ker\pi$.

[F1] The quotient $C^*(G)/\ker\rho$ is a C\*-algebra, the induced map $\dot\rho:C^*(G)/\ker\rho\to\mathcal B(K_\rho)$ is an injective star-homomorphism, and every injective star-homomorphism between C\*-algebras is isometric, so $\dot\rho$ is an isometry onto its image $\rho(C^*(G))$ ([[lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra]]).

[F2] Star-homomorphisms between C\*-algebras are contractive ([[lem-c-star-positive-calculus-and-order-estimates]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$, unitary representations $\pi,\rho$ with $\ker\rho\subseteq\ker\pi$, and the extended representations of $C^*(G)$.

1.1 The map $T$ on $\rho(C^*(G))$ defined by $T(\rho(a)):=\pi(a)$ is a well-defined algebraic star-homomorphism: if $\rho(a)=0$ then $a\in\ker\rho\subseteq\ker\pi$, so $\pi(a)=0$; linearity, multiplicativity and star preservation follow from the corresponding properties of the extended representations, and the definition is compatible with sums and products because $\rho$ and $\pi$ are star-homomorphisms. If $\rho=0$, kernel inclusion forces $\pi=0$ and $T=0$ is bounded. Otherwise factor $\pi$ through $C^*(G)/\ker\rho$ using the quotient factorization in [F1]; the induced bounded map $\dot\pi$ satisfies $\|\dot\pi\|\le\|\pi\|$ by taking the infimum over coset representatives. Since $\dot\rho$ is an isometry onto its image, $T=\dot\pi\circ\dot\rho^{-1}$ is bounded. It is therefore a star-homomorphism in the library's bounded sense. [F1]

2.1 The homomorphism $T$ is contractive by [F2], so for every $a\in C^*(G)$ one has $\|\pi(a)\|=\|T(\rho(a))\|\le\|\rho(a)\|$. [F2, step 1.1]

3.1 The Axiom of Choice is inherited from the quotient and representation-correspondence suppliers; the factorization uses no further choice ([[def-axiom-of-choice]]). [given, F1] ∎ 
