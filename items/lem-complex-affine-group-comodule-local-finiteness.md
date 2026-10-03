---
id: "lem-complex-affine-group-comodule-local-finiteness"
kind: "lemma"
title: "Every affine-group comodule is a union of finite-dimensional rational submodules"
status: "draft"
origin: "pipeline"
deps: ["def-rational-action-on-affine-variety"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Michel Brion, Introduction to actions of algebraic groups (2010)", "url": "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf", "locator": "§1.1, Definitions 1.4, 1.6, 1.8, Lemma 1.5, Example 1.7 and Proposition 1.9; printed pp. 3–4"}, {"title": "Philippe Gille, Introduction to reductive group schemes over rings, full notes retrieved 2026-10-02", "url": "https://www.math.ens.psl.eu/~gille/prenotes/reductive.pdf", "locator": "§6, Proposition 6.0.5, pp. 25–27; Proposition 6.2.1, pp. 30–31; Theorem 6.3.1, p. 32"}, {"title": "J. S. Milne, Algebraic Groups (2022)", "url": "https://www.jmilne.org/math/Books/iAG2022.pdf", "locator": "§4(a) Remark 4.1, pp. 83–84; Proposition 4.7 and Corollary 4.8, p. 86; Theorem 12.12 and Remark 12.13, printed pp. 234–235"}]}
proof_strategy: direct
verification: {"precheck": "pass", judge: {model: "gpt-6.1-sol", verdict: pass, date: 2026-10-03}}
---

## Statement

Let $G$ be a complex affine algebraic group and $c:V\to V\otimes H$, $H=\mathbb C[G]$, a right comodule as in [[def-rational-action-on-affine-variety]]. Every finite subset of $V$ is contained in a finite-dimensional subcomodule $W$. Evaluation of $c$ gives a linear $G$-action, and its restriction to every such $W$ is algebraic; hence $V$ is a rational $G$-module and is the directed union of finite-dimensional rational submodules. This proof is choice-free.

## Facts & Assumptions

**Given:** A right $H$-comodule $c$ and its coassociativity and counit identities; $H$ has the group coordinate maps in [[def-rational-action-on-affine-variety]].

## Proof

1.1 Write $c(v)=\sum_{i=1}^n v_i\otimes h_i$ with the $h_i$ linearly independent, eliminating redundancies from a finite tensor expression, and put $W_v=\operatorname{span}(v_1,\ldots,v_n)$. The counit gives $v=\sum_i\varepsilon(h_i)v_i\in W_v$. With $q:V\to V/W_v$, coassociativity gives $\sum_i c(v_i)\otimes h_i=\sum_i v_i\otimes\Delta(h_i)$. Apply $q$ to the first factor: the right side is zero and independence of the $h_i$ gives $(q\otimes\operatorname{id})c(v_i)=0$. Thus $c(v_i)\in W_v\otimes H$, since the kernel of $q\otimes\operatorname{id}$ is $W_v\otimes H$ over a field. Indeed write any finite tensor expression with independent second-factor coefficients; its image under $q\otimes\operatorname{id}$ is zero exactly when each first-factor coefficient lies in $W_v$. This proves the kernel assertion without an infinite basis. [given, algebra]

2.1 Sums of finitely many $W_v$ are finite-dimensional subcomodules, so they contain any prescribed finite subset; sums of two such subcomodules also show directedness. Evaluating coassociativity at $g,h$ gives $r(g)r(h)=r(gh)$, and evaluating the counit gives $r(e)=\operatorname{id}$, so $r(g^{-1})$ is the inverse of $r(g)$. Choose a finite basis of $W$ and write $c(w_j)=\sum_i w_i\otimes a_{ij}$. The matrix entries $a_{ij}$ are regular functions on $G$, and its determinant is invertible at each point. Its inverse determinant is regular: the inverse matrix is the regular matrix $(S(a_{ij}))$, so determinants multiply to 1 as functions in $H$. Therefore $g\mapsto(a_{ij}(g))$ is a morphism to $GL(W)$, proving rationality. Only finite bases and finite elimination were used. [step 1.1, given, algebra] ∎
