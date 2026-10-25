---
id: "def-rational-action-on-affine-variety"
kind: "definition"
title: "Classical complex affine algebraic actions and rational modules"
status: published
origin: "pipeline"
deps: ["def-classical-affine-coordinate-ring", "def-classical-affine-variety-morphism", "lem-classical-affine-algebraic-set-product-coordinate-ring"]
provenance: {"statement": "literature-derived", "proof": "not-applicable"}
sources: {"references": [{"title": "Michel Brion, Introduction to actions of algebraic groups (2010)", "url": "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf", "locator": "§1.1, Definitions 1.4, 1.6, 1.8, Lemma 1.5, Example 1.7 and Proposition 1.9; printed pp. 3–4"}, {"title": "Philippe Gille, Introduction to reductive group schemes over rings, full notes retrieved 2026-10-02", "url": "https://www.math.ens.psl.eu/~gille/prenotes/reductive.pdf", "locator": "§6, Proposition 6.0.5, pp. 25–27; Proposition 6.2.1, pp. 30–31; Theorem 6.3.1, p. 32"}, {"title": "J. S. Milne, Algebraic Groups (2022)", "url": "https://www.jmilne.org/math/Books/iAG2022.pdf", "locator": "§4(a) Remark 4.1, pp. 83–84; Proposition 4.7 and Corollary 4.8, p. 86; Theorem 12.12 and Remark 12.13, printed pp. 234–235"}]}
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-23.md"
      - "research/frontier-38-owner-30-alpha-batch-23-5a.md"
      - "research/frontier-38-owner-30-step5-hash-23-post-5a.json"
    content_sha256: "8c16ae77b004a72667585a4ed14272f92da847916f18ab1972dc6502762cca08"
  precheck: pass
  judge: {model: "gpt-6.1-sol", verdict: pass, date: 2026-10-03}
---

## Definition

A **complex affine algebraic group** is a nonempty affine algebraic set $G$ equipped with a group law whose multiplication $G\times G\to G$ and inversion $G\to G$ are morphisms. Write $e$ for its identity. Neither $G$ nor any affine algebraic set below is required to be irreducible. Its coordinate algebra $H=\mathbb C[G]$ has maps $\Delta h(g,h')=h(gh')$, $\varepsilon(h)=h(e)$, and $S(h)(g)=h(g^{-1})$, using [[lem-classical-affine-algebraic-set-product-coordinate-ring]] to identify product rings.

The group identities give $(\Delta\otimes\operatorname{id})\Delta=(\operatorname{id}\otimes\Delta)\Delta$ and $(\varepsilon\otimes\operatorname{id})\Delta=\operatorname{id}=(\operatorname{id}\otimes\varepsilon)\Delta$: evaluate on $(g,h,k)$ and $g$, respectively. Likewise multiplying the two factors of $(S\otimes\operatorname{id})\Delta$ or $(\operatorname{id}\otimes S)\Delta$ evaluates to $h(e)$, so both are $\varepsilon(h)1$. These are identities of coordinate functions by the product-ring lemma and polynomial-function identification, and $S^2=\operatorname{id}$ follows from inversion squared.

An **algebraic (or rational) left action** on an affine algebraic set $X$ is a morphism $a:G\times X\to X$ satisfying $a(e,x)=x$ and $a(g,a(h,x))=a(gh,x)$. Here morphisms and coordinate rings are those of [[def-classical-affine-variety-morphism]] and [[def-classical-affine-coordinate-ring]]. An equivariant morphism $u:X\to Y$ satisfies $u(gx)=g u(x)$.

A **rational $G$-module** is a complex vector space with a linear left action $r$ of $G$ such that every vector belongs to a finite-dimensional stable subspace $W$ on which $r:G\to GL(W)$ is a morphism. The zero subspace is permitted. For a finite-dimensional $W$, regular matrix coefficients and the group law express this condition; $GL(W)$ has coordinate ring $\mathbb C[t_{ij},\det(t_{ij})^{-1}]$.

The left action on functions is always $(r(g)f)(x)=f(g^{-1}x)$. Its right-comodule convention is $c:V\to V\otimes H$ with $(c\otimes\operatorname{id})c=(\operatorname{id}\otimes\Delta)c$ and $(\operatorname{id}\otimes\varepsilon)c=\operatorname{id}$. Evaluation of the second factor at $g$ gives $r(g)$. The direct action pullback instead lands in $H\otimes\mathbb C[X]$ and evaluates to $f(gx)$; these two conventions must be distinguished.
