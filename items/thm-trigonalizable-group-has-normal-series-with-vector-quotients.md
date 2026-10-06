---
id: thm-trigonalizable-group-has-normal-series-with-vector-quotients
kind: theorem
title: "Trigonalizable groups have a normal series with a multiplicative quotient and additive subgroup quotients"
dependency_level: 8
deps:
  - def-axiom-of-choice
  - lem-nonaffine-group-image-exact-quotient-properties
  - lem-unipotent-and-diagonalizable-intersection-is-trivial
  - def-affine-scheme
  - def-diagonalizable-group-and-character-module
  - def-group-of-multiplicative-type-and-torus
  - def-group-scheme-over-a-field
  - def-trigonalizable-algebraic-group
  - def-upper-unitriangular-group-scheme
  - lem-trigonalizable-iff-invariant-flags
  - lem-upper-unitriangular-central-series
  - thm-unipotent-group-triangular-criterion
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Theorem 16.21 and Corollary 16.22, printed pp. 330-331
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Section 5.3, Proposition 127 and Lemma 128, pp. 52-53
---
## Statement

Assume the Axiom of Choice inherited from the faithful flag embedding and exact group-quotient suppliers ([[def-axiom-of-choice]]).

Let $k$ be a field and let $G$ be a trigonalizable affine algebraic group over $k$ ([[def-trigonalizable-algebraic-group]], [[def-affine-scheme]], [[def-group-scheme-over-a-field]]). Then there is a normal series
$$G\supseteq G_0\supseteq G_1\supseteq\dots\supseteq G_r=1$$
such that $G_0=G_u$ is the largest normal unipotent subgroup of $G$, the quotient $G/G_u$ is of multiplicative type ([[def-group-of-multiplicative-type-and-torus]]), and for each $i$ the quotient $G_i/G_{i+1}$ embeds $G/G_u$-equivariantly into $\mathbf G_a$ with a linear action of $G/G_u$ (an action through the natural action of $\mathbf G_m$ on $\mathbf G_a$).

## Facts & Assumptions
**Given:** AC, a field $k$ and a trigonalizable affine algebraic group $G$ over $k$.

[F1] By the flag criterion for trigonalizability, $G$ is isomorphic to a closed subgroup scheme of some upper triangular group $T_n=D_n\ltimes U_n$; in particular $G\subseteq T_n$, $G/G_u$ embeds into $D_n$, and $G_u$ will be defined as $G\cap U_n$. ([[lem-trigonalizable-iff-invariant-flags]], [[def-upper-unitriangular-group-scheme]])

[F2] The group $U_n$ has a central series $U_n=U_n^{(0)}\supseteq U_n^{(1)}\supseteq\dots\supseteq U_n^{(m)}=1$ of closed subgroup schemes stable under conjugation by $T_n$, with successive quotients canonically isomorphic to $\mathbf G_a$ and with $D_n$ acting on each quotient through the character $d\mapsto d_id_j^{-1}$. ([[lem-upper-unitriangular-central-series]])

[F3] A closed subgroup of the unipotent group $U_n$ is unipotent; the intersection of a unipotent closed subgroup with the diagonalizable group $D_n$ is trivial, and any normal unipotent closed subgroup $V\subseteq G$ maps into $D_n\cong T_n/U_n$, hence has trivial image and lies in $G\cap U_n$. ([[thm-unipotent-group-triangular-criterion]], [[lem-unipotent-and-diagonalizable-intersection-is-trivial]], [[def-diagonalizable-group-and-character-module]])

[F4] Assume AC. A homomorphism of finite-type group schemes has closed scheme-theoretic image isomorphic to its fppf quotient by the scheme kernel. Thus a trivial kernel makes it a closed immersion, and intersections compute kernels of restricted homomorphisms. ([[lem-nonaffine-group-image-exact-quotient-properties]])

[A1] AC is the axiom of [[def-axiom-of-choice]] and is inherited through the specified suppliers.

## Proof

**Given:** AC, a field $k$ and a trigonalizable affine algebraic group $G$ over $k$.

1.1 By [F1] fix a closed embedding $G\subseteq T_n=D_n\ltimes U_n$ and put $G_u=G\cap U_n$. Then $G_u$ is a closed unipotent subgroup of $G$ by [F3], normal in $G$ because $U_n$ is normal in $T_n$, and the map $G\to D_n\cong T_n/U_n$ has scheme kernel $G_u$, so [F4] identifies $G/G_u$ with its closed image there, hence is diagonalizable and therefore of multiplicative type. If $V\subseteq G$ is any normal unipotent closed subgroup, its image in $G/G_u\subseteq D_n$ is unipotent (as a quotient of a unipotent group) and diagonalizable, hence trivial by [F3], so $V\subseteq G_u$: $G_u$ is the largest normal unipotent subgroup. [F1, F3, F4]

2.1 Intersect the central series of $U_n$ from [F2] with $G$: put $G_i=G\cap U_n^{(i)}$ for $0\le i\le m$. These are closed subgroup schemes of $G$ with $G_0=G\cap U_n$, which is $G_u$, and $G_m=1$; each $G_i$ is normal in $G$ because $U_n^{(i)}$ is stable under $T_n$. The restricted map $G_i\to U_n^{(i)}/U_n^{(i+1)}\cong\mathbf G_a$ has scheme kernel $G_i\cap U_n^{(i+1)}=G_{i+1}$. Thus [F4] identifies $G_i/G_{i+1}$ with its closed scheme-theoretic image in $\mathbf G_a$, and this embedding is equivariant for the action of $G/G_u\subseteq D_n$, which acts on the quotient through the linear character of [F2]. [F2, F4, step 1.1]

3.1 Dropping repeated terms from $G_0\supseteq G_1\supseteq\dots\supseteq G_m=1$ yields the required normal series with $G_0=G_u$, $G/G_u$ of multiplicative type, and each successive quotient $G_i/G_{i+1}$ embedded $G/G_u$-equivariantly into $\mathbf G_a$ with a linear action; the series terminates at $1$ by [step 2.1]. This proves the theorem. [A1, step 1.1, step 2.1] ∎ 