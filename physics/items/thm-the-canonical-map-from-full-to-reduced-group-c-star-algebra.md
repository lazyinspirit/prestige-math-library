---
id: thm-the-canonical-map-from-full-to-reduced-group-c-star-algebra
kind: theorem
title: The canonical map from the full to the reduced group C star algebra
deps:
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - def-reduced-group-c-star-algebra
  - def-full-group-c-star-algebra
  - lem-integrated-forms-are-nondegenerate-star-representations
  - def-left-and-right-regular-unitary-representations
  - thm-regular-representations-are-unitary-and-strongly-continuous
  - lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra
  - lem-c-star-positive-calculus-and-order-estimates
  - def-axiom-of-choice
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the completion and representation-correspondence suppliers; the quotient and density arguments add no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: Example F.4.7, the paragraph defining λG: C*(G) → C*red(G)"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: the paragraph producing the surjective morphism C*max(G) → C*π(G)"
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group and let $\lambda_G$ be its
left regular representation on $L^2(G)$
([[def-left-and-right-regular-unitary-representations]],
[[thm-regular-representations-are-unitary-and-strongly-continuous]]). The
integrated form of $\lambda_G$ extends to a surjective star-homomorphism
$$\lambda_G:C^*(G)\twoheadrightarrow C^*_r(G),$$
sending the canonical image of $f\in L^1(G)$ to $\lambda_G(f)$ ([[def-full-group-c-star-algebra]],
[[def-reduced-group-c-star-algebra]],
[[lem-integrated-forms-are-nondegenerate-star-representations]]). Conversely,
for every unitary representation $\pi$ whose kernel contains the kernel of
$\lambda_G$ on $C^*(G)$, the assignment $\lambda_G(f)\mapsto\pi(f)$ defines a
star-homomorphism $C^*_r(G)\to C^*_\pi(G)$, where $C^*_\pi(G)$ is the norm
closure of $\{\pi(f):f\in L^1(G)\}$ in $\mathcal B(H_\pi)$. In particular
$C^*_r(G)$ is a quotient of $C^*(G)$.

## Facts & Assumptions

**Given:** AC; an LCH group $G$; the full and reduced group C\*-algebras; the integrated form $\lambda_G(f)$ of the left regular representation; the unitary representations of $G$ and their extended representations of $C^*(G)$.

[F1] The left regular representation is a strongly continuous unitary representation, so $f\mapsto\lambda_G(f)$ is a nondegenerate star-representation of $L^1(G)$ ([[thm-regular-representations-are-unitary-and-strongly-continuous]], [[lem-integrated-forms-are-nondegenerate-star-representations]]).

[F2] Every nondegenerate star-representation of $C^*(G)$ restricts to a nondegenerate star-representation of $L^1(G)$ and conversely every unitary representation extends uniquely to $C^*(G)$ ([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]]).

[F3] Star-homomorphisms between C\*-algebras have closed image, and a star-homomorphism factors uniquely through any C\*-quotient by an ideal contained in its kernel; injective star-homomorphisms are isometric ([[lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra]]). Star-homomorphisms are contractive ([[lem-c-star-positive-calculus-and-order-estimates]]).

[F4] $C^*_r(G)$ is by definition the norm closure of $\{\lambda_G(f):f\in L^1(G)\}$ in $\mathcal B(L^2(G))$ ([[def-reduced-group-c-star-algebra]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$, the integrated forms $\lambda_G(f)$ and $\pi(f)$, and the C\*-algebras $C^*(G)$, $C^*_r(G)$, $C^*_\pi(G)$.

1.1 The integrated form of the regular representation extends to a star-homomorphism $\Lambda:C^*(G)\to\mathcal B(L^2(G))$ with $\Lambda(f)=\lambda_G(f)$ on $L^1(G)$, and $\Lambda$ is surjective onto $C^*_r(G)$: the extension exists by the universal property [F2] applied to the unitary representation $\lambda_G$, its image contains $\lambda_G(L^1(G))$ and is closed by [F3], hence contains the norm closure $C^*_r(G)$ by [F4], while by construction the image is contained in $C^*_r(G)$. [F1, F2, F3, F4]

2.1 Let $\pi$ be a unitary representation of $G$ with $\ker\lambda_G\subseteq\ker\pi$ (kernels of the extended representations on $C^*(G)$). The assignment $\lambda_G(f)\mapsto\pi(f)$ for $f\in L^1(G)$ is well defined and linear, multiplicative and star-preserving where defined, because $\lambda_G(f)=\lambda_G(h)$ means $f-h\in\ker\lambda_G\subseteq\ker\pi$; To justify its relative norm bound, factor the bounded extension $\pi$ through $Q=C^*(G)/\ker\lambda_G$. The induced map $\dot\pi$ is bounded because $\|\dot\pi(a+\ker\lambda_G)\|\le\|\pi\|\inf_{k\in\ker\lambda_G}\|a+k\|$. The map $\dot\Lambda:Q\to C^*_r(G)$ induced by step 1.1 is injective, surjective and isometric by [F3]. Hence $T=\dot\pi\circ\dot\Lambda^{-1}$ is a bounded star-homomorphism, and is contractive by the C*-quotient supplier [F3]. Its image lies in $C^*_\pi(G)$ by density of the integrated forms. Its restriction is exactly $\lambda_G(f)\mapsto\pi(f)$, proving the assertion without inferring relative boundedness from two separate $L^1$ bounds. [F2, F3, F4]

3.1 In particular $C^*_r(G)$ is a quotient of $C^*(G)$, namely the quotient by the closed two-sided ideal $\ker\lambda_G$, and the second assertion of the statement is the factorization of any representation whose kernel contains that ideal through this quotient. The Axiom of Choice is inherited from the full-norm completion and the representation correspondence; the quotient and density arguments use no further choice ([[def-axiom-of-choice]]). [F2, F3, step 1.1, step 2.1] ∎
