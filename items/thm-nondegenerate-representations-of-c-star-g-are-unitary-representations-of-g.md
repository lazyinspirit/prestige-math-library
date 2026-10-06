---
id: thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
kind: theorem
title: Nondegenerate representations of the full group C star algebra are unitary representations
deps:
  - thm-unitary-representations-and-nondegenerate-l1-star-representations-correspond
  - lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient
  - def-full-group-c-star-algebra
  - lem-integrated-forms-are-nondegenerate-star-representations
  - lem-a-nondegenerate-l1-representation-recovers-a-unitary-group-representation
  - def-nondegenerate-star-representation-of-a-banach-star-algebra
  - def-c-star-algebra
  - lem-c-star-positive-calculus-and-order-estimates
  - def-axiom-of-choice
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the full-norm completion and the L1 correspondence; the density, invariance and irreducibility arguments use no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Proposition 8.B.3 and the preceding paragraph"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: paragraph after Definition F.4.3"
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group. Every strongly continuous
unitary representation of $G$ extends uniquely to a nondegenerate
star-representation of the full group C\*-algebra $C^*(G)$, and every
nondegenerate star-representation of $C^*(G)$ pulls back to a nondegenerate
star-representation along the canonical dense-image map $L^1(G)\to C^*(G)$
([[def-full-group-c-star-algebra]],
[[def-nondegenerate-star-representation-of-a-banach-star-algebra]]).
Consequently the correspondence of
[[thm-unitary-representations-and-nondegenerate-l1-star-representations-correspond]]
upgrades to a bijection between unitary representations of $G$ and
nondegenerate star-representations of $C^*(G)$ that respects unitary
equivalence, and a representation is irreducible on one side exactly when its
counterpart is irreducible on the other.

## Facts & Assumptions

**Given:** AC; an LCH group $G$; the full C\*-algebra $C^*(G)$ with the canonical $\ast$-homomorphism $q:L^1(G)\to C^*(G)$ of dense image; unitary representations of $G$; nondegenerate star-representations of $C^*(G)$ and of $L^1(G)$.

[F1] The integrated form $f\mapsto\pi(f)$ of a unitary representation is a contractive nondegenerate star-representation of $L^1(G)$, and $U(g)\sigma(f)\xi=\sigma(L_gf)\xi$ holds for the reconstructed representation ([[lem-integrated-forms-are-nondegenerate-star-representations]], [[lem-a-nondegenerate-l1-representation-recovers-a-unitary-group-representation]]).

[F2] $\|f\|_{C^*}=\sup_{\pi'}\|\pi'(f)\|\le\|f\|_1$ is a C\*-seminorm, $N=\{f:\|f\|_{C^*}=0\}$ is a closed two-sided $\ast$-ideal, and $C^*(G)$ is the completion of $L^1(G)/N$; the canonical map is a $\ast$-homomorphism with dense image ([[lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient]], [[def-full-group-c-star-algebra]]).

[F3] Unitary representations of $G$ correspond bijectively, up to unitary equivalence, to nondegenerate star-representations of $L^1(G)$, via the integrated form and the reconstruction ([[thm-unitary-representations-and-nondegenerate-l1-star-representations-correspond]]).

[F4] A star-homomorphism between C\*-algebras is contractive, and a bounded linear map on a dense subspace of a Banach space has at most one bounded extension ([[lem-c-star-positive-calculus-and-order-estimates]], [[def-c-star-algebra]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$, a unitary representation $(\pi,H)$ and a nondegenerate star-representation $\rho$ of $C^*(G)$ on a Hilbert space $K$.

1.1 The integrated form of $\pi$ extends uniquely to a nondegenerate star-representation $\pi_{C^*}$ of $C^*(G)$. Since $\|f\|_{C^*}=\sup_{\pi'}\|\pi'(f)\|\ge\|\pi(f)\|$, the map $f\mapsto\pi(f)$ is contractive for the full seminorm, so it kills $N$ and descends to a contractive linear map on the dense subalgebra $L^1(G)/N\subseteq C^*(G)$; by [F4] it has a unique bounded linear extension to $C^*(G)$, which is multiplicative and star-preserving because these identities hold on the dense subalgebra and both sides are continuous, and it is nondegenerate because the closed span of $\{\pi(f)\xi\}$ is $H$ by [F1]. [F1, F2, F4]

1.2 The restriction of $\rho$ to $L^1(G)$ (composed with $q$) is a nondegenerate star-representation of $L^1(G)$: it is complex-linear, multiplicative and star-preserving because $q$ and $\rho$ are, and bounded because $\rho$ is contractive by [F4]; it is nondegenerate because $q(L^1(G))$ is dense in $C^*(G)$ and $\rho$ is bounded: the $\rho$-images of $\{\rho(x)\xi:x\in C^*(G)\}$ are approximated by $\rho(q(f))\xi$ with $q(f)\to x$, so the closed span of $\{\rho(q(f))\xi\}$ equals the closed span of $\rho(C^*(G))K$, which is $K$. [F2, F4]

2.1 The two constructions are mutually inverse. Starting from a unitary representation $\pi$, restricting the extension $\pi_{C^*}$ of step 1.1 to $L^1(G)$ returns the integrated form $\pi(\cdot)$, so [F3] returns $\pi$ itself. Starting from a nondegenerate star-representation $\rho$ of $C^*(G)$, step 1.2 gives a nondegenerate star-representation $\sigma:=\rho\circ q$ of $L^1(G)$, whose reconstructed unitary representation $U$ satisfies $\pi_U(f)=\sigma(f)=\rho(q(f))$ for all $f\in L^1(G)$ by [F3]; hence the extension of $\pi_U$ to $C^*(G)$, which is unique by the argument of step 1.1, coincides with $\rho$ on the dense subalgebra and therefore everywhere by continuity. [F3, step 1.1, step 1.2]

3.1 A closed subspace $M\subseteq K$ is invariant under the unitary representation $U$ corresponding to $\rho$ if and only if it is invariant under $\rho(C^*(G))$; since step 2.1 identifies the two sides of the correspondence, this gives the irreducibility statement. Indeed, if $\rho(x)M\subseteq M$ for all $x\in C^*(G)$, then in particular $\sigma(f)M\subseteq M$ for all $f\in L^1(G)$, and $U(g)\xi=\lim_\lambda\sigma(L_ge_U)\xi\in M$ for $\xi\in M$ by [F1] and closedness of $M$; conversely if $U(g)M\subseteq M$ for all $g$, then for $f\in C_c(G)$ the Bochner integral representing $\sigma(f)\xi$ is a norm limit of finite linear combinations of the vectors $U(g)\xi\in M$, hence lies in the closed subspace $M$; for general $f\in L^1(G)$ the contractivity of the integrated form and density of $C_c(G)$ give $\sigma(f)M\subseteq M$, and then $\rho(C^*(G))M\subseteq M$ by continuity. Hence $M$ is a nontrivial closed invariant subspace for $U$ exactly when it is one for $\rho$, so irreducibility corresponds. [F1, step 2.1]

4.1 Steps 1.1, 1.2 and 2.1 establish the claimed bijection respecting unitary equivalence (an intertwiner of unitary representations intertwines the integrated forms, and conversely by [F3]), and step 3.1 upgrades it to preserve irreducibility. The Axiom of Choice is inherited from the full-norm completion and the $L^1$ correspondence ([[def-axiom-of-choice]]). [F2, F3, step 1.1, step 1.2, step 2.1, step 3.1] ∎ 