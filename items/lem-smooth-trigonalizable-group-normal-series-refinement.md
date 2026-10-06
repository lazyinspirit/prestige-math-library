---
id: lem-smooth-trigonalizable-group-normal-series-refinement
kind: lemma
title: "Unipotent radicals of smooth connected trigonalizable groups over perfect fields have normal G_a series"
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-affine-scheme
  - lem-derived-subgroup-properties
  - def-group-of-multiplicative-type-and-torus
  - lem-unipotent-and-diagonalizable-intersection-is-trivial
  - def-group-scheme-over-a-field
  - def-smooth-morphism-schemes
  - lem-dimension-one-smooth-connected-group-is-ga-or-gm
  - lem-nonaffine-connected-group-geometrically-connected
  - lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties
  - lem-nonaffine-reduced-neutral-subgroup-over-perfect-field
  - thm-trigonalizable-group-has-normal-series-with-vector-quotients
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
      locator: Theorem16.13(b), Corollary16.15 and Corollary16.22, printed pp.328-329 and331
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Section 5.3, Proposition 127 and Lemma 128, pp. 52-53
---
## Statement

Assume the Axiom of Choice inherited from the cited smoothness, quotient and reduction suppliers ([[def-axiom-of-choice]]).

Let $k$ be a perfect field and let $G$ be a smooth connected trigonalizable affine algebraic group over $k$ ([[def-smooth-morphism-schemes]], [[def-affine-scheme]], [[def-group-scheme-over-a-field]]). Then the series $G\supseteq G_0=G_u\supseteq\cdots\supseteq G_r=1$ of [[thm-trigonalizable-group-has-normal-series-with-vector-quotients]] can be chosen with every indexed term $G_i$ smooth and connected, normal in $G$, and every quotient $G_i/G_{i+1}$ isomorphic to $\mathbf G_a$. The separate quotient $G/G_u$ remains of multiplicative type.

## Facts & Assumptions
**Given:** AC, a perfect field $k$ and a smooth connected trigonalizable affine $k$-group $G$.

[F1] $G$ has a normal series $G\supseteq G_0\supseteq G_1\supseteq\dots\supseteq G_r=1$ with $G_0=G_u$ the largest normal unipotent subgroup of $G$, $G/G_u$ of multiplicative type, and each $G_i/G_{i+1}$ embedded $G/G_u$-equivariantly into $\mathbf G_a$. ([[thm-trigonalizable-group-has-normal-series-with-vector-quotients]])

[F2] Assume AC. For a closed subgroup scheme $H$ of a smooth finite-type group over a perfect field, the identity component of the reduction $(H_{\mathrm{red}})^0$ is a smooth connected closed subgroup with $\dim(H_{\mathrm{red}})^0=\dim H$; it is normal when $H$ is normal. ([[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]])

[F3] Assume AC. In an exact sequence $1\to N\to H\to Q\to1$ of finite-type group schemes over a field, if $H$ is smooth and connected then the image $Q$ is smooth and connected; and a smooth connected group over an algebraically closed field with a proper smooth connected normal subgroup of codimension one has quotient of dimension one. ([[lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]], [[lem-nonaffine-connected-group-geometrically-connected]])

[F4] A smooth connected affine unipotent group of dimension one over a perfect field is $\mathbf G_a$: the one-dimensional classification gives a form split by a finite purely inseparable extension, and a perfect field has no nontrivial such extension. ([[lem-dimension-one-smooth-connected-group-is-ga-or-gm]])

[F5] Over a perfect field, a commutative affine algebraic group has a unique product decomposition into its largest unipotent subgroup and largest subgroup of multiplicative type; both factors are smooth and connected when the group is. This is Milne Theorem 16.13(b) with its proof, and Corollary 16.15, printed pp. 328-329. The derived subgroup of a smooth connected group is smooth connected; a subgroup that is both unipotent and of multiplicative type is trivial. ([[lem-derived-subgroup-properties]], [[lem-unipotent-and-diagonalizable-intersection-is-trivial]], [[def-group-of-multiplicative-type-and-torus]])

[A1] The Axiom of Choice is inherited through the cited suppliers and is the axiom of [[def-axiom-of-choice]].

## Proof

**Given:** AC, a perfect field $k$ and a smooth connected trigonalizable affine $k$-group $G$.

1.1 First prove that $G_u$ is smooth and connected. Put $U_0=(G_{u,\mathrm{red}})^0$, smooth connected and normal in $G$ by [F2], and form $H=G/U_0$. By [F3], $H$ is smooth connected, its kernel $U'=G_u/U_0$ over $D=G/G_u$ is finite unipotent, and $D$ is of multiplicative type. Since $D$ is commutative, $DH\subseteq U'$. But $DH$ is smooth connected by [F5], so, being finite, it is trivial; thus $H$ is commutative. Decompose $H=H_u\times H_s$ by [F5]. Its smooth connected unipotent factor $H_u$ maps trivially into $D$ and therefore lies in finite $U'$, so it is trivial. Hence $H$ is of multiplicative type, and its unipotent subgroup $U'$ is trivial by [F5]. Consequently $G_u=U_0$ is smooth and connected. [F2, F3, F5, F1]

2.1 Take the series $G\supseteq G_0=G_u\supseteq\cdots\supseteq G_r=1$ of [F1], and put $H_i=(G_{i,\mathrm{red}})^0$ for $0\le i\le r$. These subgroups are nested, smooth connected and normal in $G$, with $\dim H_i=\dim G_i$, by [F2]. Step 1.1 gives $H_0=G_u$, and $H_r=1$. Since $G_i/G_{i+1}$ embeds in $\mathbf G_a$, its dimension is at most one, so $\dim H_i-\dim H_{i+1}\le1$. [F1, F2, step 1.1]

3.1 Each quotient $H_i/H_{i+1}$ is affine, smooth and connected by [F3], and unipotent as a quotient of a unipotent group. Its dimension is the difference of the dimensions of its source and kernel, hence at most one by step 2.1. A smooth geometrically connected zero-dimensional group is trivial: its geometric fibre is one reduced point and its identity section descends that identification. In dimension one it is $\mathbf G_a$ by the one-dimensional classification. [F3, F4, step 2.1]

4.1 Delete repetitions in $H_0\supseteq\cdots\supseteq H_r$; step 3.1 shows that every remaining successive quotient is $\mathbf G_a$. Prefixing $G\supseteq H_0=G_u$ retains the multiplicative-type quotient $G/G_u$ from the original theorem; the additive successive quotients are precisely those inside $G_u$. Every indexed term is smooth connected and normal in $G$, as required. [A1, F1, step 2.1, step 3.1] ∎

