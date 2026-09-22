---
id: prop-dimension-formula-from-roots
kind: proposition
title: Dimension formula from roots
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system, thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-regular-element-and-rank-of-a-complex-lie-algebra, thm-lie-third-fundamental-theorem, prop-adjoint-is-a-smooth-lie-group-representation, thm-the-differential-of-adjoint-is-ad, cor-every-submersion-is-an-open-map, def-countable-choice, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §4 (dimension count)"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$ with root set $\Phi$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]). Then
$$\dim\mathfrak g=\dim\mathfrak h+|\Phi| .$$
Moreover all Cartan subalgebras of $\mathfrak g$ have the same dimension, so
the right-hand side is independent of the chosen Cartan subalgebra, and this
common dimension is the quantity $\operatorname{rank}\mathfrak g$ of
[[def-regular-element-and-rank-of-a-complex-lie-algebra]].

## Facts & Assumptions

**Given:** The Axiom of Choice and such $\mathfrak g$ and $\mathfrak h$, with root set $\Phi$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]] and supplies the countable choice ([[def-countable-choice]]) used in [L3].

[L1] $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ is a direct sum with $\Phi$ finite and $\dim\mathfrak g_\alpha=1$ for every root ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]]).

[L2] Any two Cartan subalgebras of $\mathfrak g$ are conjugate, hence of the same dimension ([[thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate]]).

[L3] Under countable choice, $\mathfrak g$ viewed as a real Lie algebra integrates to a connected Lie group; its adjoint representation is smooth with differential $\operatorname{ad}$, and a smooth submersion is open ([[thm-lie-third-fundamental-theorem]], [[prop-adjoint-is-a-smooth-lie-group-representation]], [[thm-the-differential-of-adjoint-is-ad]], [[cor-every-submersion-is-an-open-map]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the vector space $\mathfrak g$ is the direct sum of $\mathfrak h$ and one one-dimensional space for each of the $|\Phi|$ roots; dimensions are additive over direct sums, so $\dim\mathfrak g=\dim\mathfrak h+|\Phi|$. [L1, algebra]

1.2 Let $\mathfrak h^\circ$ be the complement in $\mathfrak h$ of the finitely many root hyperplanes $\ker\alpha$. A finite union of proper linear subspaces cannot cover a complex vector space, so $\mathfrak h^\circ$ is nonempty (and equals $\{0\}$ when $\mathfrak g=0$). For $H\in\mathfrak h^\circ$, [L1] gives $\mathfrak g^H=\ker(\operatorname{ad}_H)=\mathfrak h$, because $\operatorname{ad}_H$ acts by the nonzero scalar $\alpha(H)$ on every $\mathfrak g_\alpha$. [L1, algebra]

2.1 Let $G$ be the connected real Lie group supplied by [L3] for the underlying real Lie algebra of $\mathfrak g$, and define $F:G\times\mathfrak h^\circ\longrightarrow\mathfrak g$ by $F(g,H)=\operatorname{Ad}_gH$. At $(e,H)$ its differential is $(Y,K)\mapsto[Y,H]+K$ by [L3]. The root decomposition [L1] and the inequalities $\alpha(H)\ne0$ give $[\mathfrak g,H]=\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$, so this differential is onto. Translation in $G$ and composition with $\operatorname{Ad}_g$ show the same at every $(g,H)$; hence $F$ is a submersion. By [L3] its image $U$ is a nonempty open subset of $\mathfrak g$, and every point of $U$ has centralizer dimension $\dim\mathfrak h$ by step 1.2 and conjugation invariance. [A1, L1, L3, step 1.2, algebra]

3.1 Put $r=\operatorname{rank}\mathfrak g$ and $n=\dim\mathfrak g$. In a fixed basis the entries of $\operatorname{ad}_x$ depend linearly on $x$. Choose $x_0$ with $\dim\ker(\operatorname{ad}_{x_0})=r$ and an $(n-r)\times(n-r)$ minor nonzero at $x_0$. The nonvanishing set of this minor is a nonempty dense open subset $R$ of the complex vector space $\mathfrak g$; at every point of $R$, the adjoint map has rank at least $n-r$, and maximality of $n-r$ forces kernel dimension exactly $r$. Thus $R$ consists of regular elements. Since $R$ is dense and $U$ from step 2.1 is nonempty open, choose $x\in R\cap U$. Then $r=\dim\mathfrak g^x=\dim\mathfrak h$. [L3, step 2.1, algebra]

4.1 By [L2], all Cartan subalgebras have this same dimension; step 3.1 identifies it with $\operatorname{rank}\mathfrak g$. Substituting in step 1.1 yields $\dim\mathfrak g=\operatorname{rank}\mathfrak g+|\Phi|$, including the zero algebra. [L2, step 1.1, step 3.1] ∎
