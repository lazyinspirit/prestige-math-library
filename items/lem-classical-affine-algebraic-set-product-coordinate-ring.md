---
id: "lem-classical-affine-algebraic-set-product-coordinate-ring"
kind: "lemma"
title: "Products of affine algebraic sets have tensor-product coordinate rings"
status: published
origin: "pipeline"
deps: ["thm-classical-polynomial-functions-equal-coordinate-ring", "def-classical-affine-coordinate-ring"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Michel Brion, Introduction to actions of algebraic groups (2010)", "url": "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf", "locator": "§1.1, Definitions 1.4, 1.6, 1.8, Lemma 1.5, Example 1.7 and Proposition 1.9; printed pp. 3–4"}, {"title": "Philippe Gille, Introduction to reductive group schemes over rings, full notes retrieved 2026-10-02", "url": "https://www.math.ens.psl.eu/~gille/prenotes/reductive.pdf", "locator": "§6, Proposition 6.0.5, pp. 25–27; Proposition 6.2.1, pp. 30–31; Theorem 6.3.1, p. 32"}, {"title": "J. S. Milne, Algebraic Groups (2022)", "url": "https://www.jmilne.org/math/Books/iAG2022.pdf", "locator": "§4(a) Remark 4.1, pp. 83–84; Proposition 4.7 and Corollary 4.8, p. 86; Theorem 12.12 and Remark 12.13, printed pp. 234–235"}]}
proof_strategy: direct
verification: {"precheck": "pass", judge: {model: "gpt-6.1-sol", verdict: pass, date: 2026-10-03}}
---

## Statement

For affine algebraic sets $X\subseteq\mathbb C^m$ and $Y\subseteq\mathbb C^n$, allowing empty or reducible sets, $X\times Y\subseteq\mathbb C^{m+n}$ is affine algebraic and the map $\mathbb C[X]\otimes\mathbb C[Y]\to\mathbb C[X\times Y]$, $f\otimes h\mapsto((x,y)\mapsto f(x)h(y))$, is an isomorphism. Iterating gives the analogous three-factor identification. The argument is choice-free.

## Facts & Assumptions

**Given:** Two affine algebraic sets $X,Y$ over $\mathbb C$.

[F1] Coordinate-ring elements are precisely polynomial functions, with equality tested at all points ([[thm-classical-polynomial-functions-equal-coordinate-ring]]).

[F2] Coordinates generate the coordinate ring ([[def-classical-affine-coordinate-ring]]).

## Proof

1.1 Equations for $X$ in the first $m$ variables and for $Y$ in the last $n$ variables cut out exactly $X\times Y$. Multiplying polynomial functions in separate variables gives the displayed algebra map. Every polynomial in the $m+n$ coordinates is a sum of products of such polynomials, so this map is surjective. [given, F1, F2, algebra]

2.1 For injectivity write a kernel element as $\sum_{i=1}^r f_i\otimes h_i$ with the $h_i$ linearly independent, by eliminating redundant terms in a finite expression. At each $x$, the polynomial function $\sum_i f_i(x)h_i$ on $Y$ is zero. Linear independence in the function space therefore forces every $f_i(x)=0$. By F1 all $f_i$ are zero. If a factor is empty its coordinate ring and that of the product are zero, so the same conclusion holds. Iteration proves the three-factor formula. Only finite expressions and finite-dimensional elimination were used. [step 1.1, F1, algebra] ∎
