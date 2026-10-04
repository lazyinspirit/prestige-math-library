---
id: "thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module"
kind: "theorem"
title: "Every complex affine algebraic action has a finite-dimensional equivariant closed embedding"
status: published
origin: "pipeline"
deps: ["def-rational-action-on-affine-variety", "thm-coordinate-ring-of-affine-action-is-locally-finite", "def-classical-affine-coordinate-ring", "thm-classical-affine-nullstellensatz-correspondence", "thm-classical-affine-morphisms-coordinate-ring-antiequivalence", "def-axiom-of-choice"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Michel Brion, Introduction to actions of algebraic groups (2010)", "url": "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf", "locator": "§1.1, Definitions 1.4, 1.6, 1.8, Lemma 1.5, Example 1.7 and Proposition 1.9; printed pp. 3–4"}, {"title": "Philippe Gille, Introduction to reductive group schemes over rings, full notes retrieved 2026-10-02", "url": "https://www.math.ens.psl.eu/~gille/prenotes/reductive.pdf", "locator": "§6, Proposition 6.0.5, pp. 25–27; Proposition 6.2.1, pp. 30–31; Theorem 6.3.1, p. 32"}, {"title": "J. S. Milne, Algebraic Groups (2022)", "url": "https://www.jmilne.org/math/Books/iAG2022.pdf", "locator": "§4(a) Remark 4.1, pp. 83–84; Proposition 4.7 and Corollary 4.8, p. 86; Theorem 12.12 and Remark 12.13, printed pp. 234–235"}]}
proof_strategy: direct
verification: {"precheck": "pass", judge: {model: "gpt-6.1-sol", verdict: pass, date: 2026-10-03}}
---

## Statement

Assume AC through the published affine Nullstellensatz and morphism dictionary. Let $G$ be a complex affine algebraic group and $X$ any affine algebraic set with an algebraic $G$-action. There is a finite-dimensional rational $G$-module $W\subseteq\mathbb C[X]$ generating $\mathbb C[X]$ as an algebra, such that evaluation
$$\mathrm{ev}:X\longrightarrow W^*,\qquad \mathrm{ev}(x)(w)=w(x)$$
is an equivariant isomorphism onto a closed invariant algebraic subset. The target has the dual action $(g\lambda)(w)=\lambda(g^{-1}w)$. Neither connectedness, irreducibility, nor reductivity is required; this is an embedding of the action, not merely a faithful representation of $G$.

## Facts & Assumptions

**Given:** $G,X$ and the algebraic action, and AC ([[def-axiom-of-choice]]).

[F1] Coordinates finitely generate $A=\mathbb C[X]$ ([[def-classical-affine-coordinate-ring]]).

[F2] A finite set of functions lies in a finite-dimensional rational stable subspace ([[thm-coordinate-ring-of-affine-action-is-locally-finite]]).

[F3] Affine algebra maps reconstruct morphisms ([[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]]).

[F4] A radical ideal $I$ is exactly $I(V(I))$ ([[thm-classical-affine-nullstellensatz-correspondence]]).

## Proof

1.1 Choose finitely many algebra generators of $A$ by F1 and put them in a finite-dimensional rational submodule $W$ by F2. Then $W$ generates $A$. Choose a finite basis $w_1,\ldots,w_N$ of $W$. Its action has regular matrix entries; the dual action has transpose-inverse matrix, whose entries are regular because inversion $g\mapsto g^{-1}$ is a morphism. Thus $W^*$ is a finite-dimensional rational module. [F1, F2, given, algebra]

2.1 The coordinate map $\pi:\mathbb C[z_1,\ldots,z_N]\to A$, $z_i\mapsto w_i$, is surjective. Its kernel $I$ is radical since $A$ is reduced. F4 identifies $\mathbb C[V(I)]$ with $\mathbb C[z_1,\ldots,z_N]/I$, and $\pi$ identifies that quotient with $A$. F3 gives mutually inverse morphisms $X\leftrightarrow V(I)$ from this algebra isomorphism. The morphism to $W^*\cong\mathbb A^N$ is precisely evaluation because its coordinates are $w_i(x)$; hence evaluation is an isomorphism onto the closed set $V(I)$. If $X$ is empty, $A=0$, and $I$ is the unit ideal so the conclusion still holds. [F3, F4, step 1.1, algebra]

3.1 For $g\in G$, $x\in X$ and $w\in W$, $(g\,\mathrm{ev}(x))(w)=\mathrm{ev}(x)(g^{-1}w)=(g^{-1}w)(x)=w(gx)=\mathrm{ev}(gx)(w)$ by the inverse-pullback action on functions. This proves equivariance and invariance of the image. The only choice beyond finite-dimensional selection is the AC inherited by F3 and F4 in step 2.1; local finiteness itself needs no infinite basis. [F2, step 1.1, step 2.1, given, algebra] ∎
