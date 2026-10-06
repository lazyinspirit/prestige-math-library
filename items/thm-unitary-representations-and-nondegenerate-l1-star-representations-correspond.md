---
id: thm-unitary-representations-and-nondegenerate-l1-star-representations-correspond
kind: theorem
title: Unitary representations correspond to nondegenerate star representations of L one
deps:
  - lem-integrated-forms-are-nondegenerate-star-representations
  - lem-a-nondegenerate-l1-representation-recovers-a-unitary-group-representation
  - def-nondegenerate-star-representation-of-a-banach-star-algebra
  - def-integrated-form-of-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity
  - def-axiom-of-choice
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the integrated-form and reconstruction suppliers; the identification of a group representation with the reconstructed one uses the approximate identity and strong continuity, with no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: the statement before Proposition 8.B.3 with the quoted references to Dixmier 13.3.4/13.9.3 and Folland §§3.2, 7.2"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: the paragraph 'In this way, we obtain a one-to-one correspondence between unitary representations of G and non-degenerate ∗-representations of the C∗-algebra C∗(G)'"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group. The assignment
$\pi\mapsto\sigma_\pi$, $\sigma_\pi(f):=\pi(f)$, from strongly continuous
unitary representations of $G$ to star-representations of the Banach
$\ast$-algebra $L^1(G)$
([[def-strongly-continuous-unitary-representation]],
[[def-integrated-form-of-a-unitary-representation]],
[[def-nondegenerate-star-representation-of-a-banach-star-algebra]]) is a
bijection, respecting unitary equivalence, between unitary representations of
$G$ up to unitary equivalence and nondegenerate star-representations of
$L^1(G)$ up to equivalence: every unitary representation has a nondegenerate
integrated form, every nondegenerate star-representation is the integrated
form of a unique unitary representation, and a unitary intertwines two
representations if and only if it intertwines their integrated forms.

## Facts & Assumptions

**Given:** AC; an LCH group $G$; strongly continuous unitary representations of $G$; nondegenerate star-representations of $L^1(G)$.

[F1] The integrated form $f\mapsto\pi(f)$ of a unitary representation is a contractive nondegenerate star-representation of $L^1(G)$, and $\pi(f)\xi$ is characterised by $\langle\pi(f)\xi,\eta\rangle=\int_Gf(g)\langle\pi(g)\xi,\eta\rangle\,dg$ ([[lem-integrated-forms-are-nondegenerate-star-representations]], [[def-integrated-form-of-a-unitary-representation]]).

[F2] Conversely, every nondegenerate star-representation $\sigma$ of $L^1(G)$ on a Hilbert space $K$ is the integrated form of a unique unitary representation $U$ of $G$; it satisfies $U(g)\sigma(f)\xi=\sigma(L_gf)\xi$ for all $g,f,\xi$ ([[lem-a-nondegenerate-l1-representation-recovers-a-unitary-group-representation]]).

[F3] $L^1(G)$ has a two-sided approximate unit $(e_U)$ with $\|e_U\|_1\le1$, $e_U\ast f\to f$, $f\ast e_U\to f$ ([[thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity]]).

[F4] $L_gf(x)=f(g^{-1}x)$ defines an isometric linear map of $L^1(G)$ with $L_g(a\ast b)=(L_ga)\ast b$ and $L_gL_h=L_{gh}$ ([[lem-a-nondegenerate-l1-representation-recovers-a-unitary-group-representation]]); moreover $\pi(L_ge_U)\xi\to\pi(g)\xi$ for every unitary representation $\pi$ and every $\xi$, because left invariance gives $\pi(L_ge_U)\xi=\int_Ge_U(y)\pi(gy)\xi\,dy$ and $e_U\ge0$ has total mass one and support shrinking to $\{e\}$, so the norm difference is at most $\sup_{y\in U}\|\pi(gy)\xi-\pi(g)\xi\|$. [F1, F3]

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$, and the integrated-form assignment $\pi\mapsto\sigma_\pi$.

1.1 The assignment is well defined on equivalence classes and preserves equivalence: by [F1] each $\sigma_\pi$ is a nondegenerate star-representation; and if $U:H_\pi\to H_\rho$ is a unitary intertwiner, $U\pi(g)=\rho(g)U$, then the defining weak integrals give $U\sigma_\pi(f)=\sigma_\rho(f)U$ for every $f\in L^1(G)$, since $U$ passes through the integral. Conversely, if $U$ intertwines the integrated forms, it intertwines each $\pi(L_ge_V)$ with $\rho(L_ge_V)$; their strong limits are $\pi(g)$ and $\rho(g)$ by [F4], so $U\pi(g)=\rho(g)U$. Thus a specified unitary intertwines the group representations exactly when it intertwines their integrated forms. [F1, F2, F4]

1.2 For every unitary representation $\pi$, every $g\in G$, $f\in L^1(G)$ and $\xi\in H_\pi$: $\pi(g)\pi(f)\xi=\pi(L_gf)\xi$. Indeed, $L_g(e_U\ast f)=(L_ge_U)\ast f$ by [F4], so $\pi(L_g(e_U\ast f))=\pi(L_ge_U)\pi(f)$ by multiplicativity [F1]; as $L_g(e_U\ast f)\to L_gf$ in $L^1(G)$ and $\pi(L_ge_U)\to\pi(g)$ strongly by [F4], both sides converge to $\pi(L_gf)\xi$ and $\pi(g)\pi(f)\xi$ respectively. [F1, F3, F4]

1.3 Surjectivity: given a nondegenerate star-representation $\sigma$, [F2] produces a unitary representation $U$ with $\pi_U(f)=\sigma(f)$ for all $f$, so every nondegenerate star-representation is an integrated form. [F2]

2.1 Injectivity: suppose unitary representations $\pi$ and $\pi'$ have the same integrated form $\sigma$. By [F2] applied to $\sigma$ there is a unique unitary representation $U$ with $U(g)\sigma(f)\xi=\sigma(L_gf)\xi$; by step 1.2 both $\pi$ and $\pi'$ satisfy this identity, because $\sigma(f)=\pi(f)=\pi'(f)$; hence $\pi=U=\pi'$. Thus the assignment is injective on equivalence classes. [F2, step 1.2]

3.1 Combining steps 1.1, 1.3 and 2.1, the assignment induces a bijection between unitary equivalence classes of unitary representations and equivalence classes of nondegenerate star-representations, and step 1.1 shows exactly that it respects unitary equivalence in both directions. The Axiom of Choice is carried by the integrated-form correspondence of [F1]–[F2] as declared throughout this page ([[def-axiom-of-choice]]). [F1, F2, step 1.1, step 1.3, step 2.1] ∎ 