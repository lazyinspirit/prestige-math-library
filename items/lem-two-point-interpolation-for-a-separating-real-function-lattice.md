---
id: lem-two-point-interpolation-for-a-separating-real-function-lattice
kind: lemma
title: "A unital separating real function lattice interpolates arbitrary values at two distinct points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separating-real-function-lattice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, Proposition 21.2.5"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, Lemma 1.27"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact Hausdorff space and let $L\subseteq C(X,\mathbb R)$ be a unital point-separating real vector sublattice ([[def-separating-real-function-lattice]]). If $x,y\in X$ are distinct and $\alpha,\beta\in\mathbb R$, then there is $h\in L$ with
$$h(x)=\alpha\qquad\text{and}\qquad h(y)=\beta.$$

## Facts & Assumptions

**Given:** A unital point-separating real vector sublattice $L\subseteq C(X,\mathbb R)$, distinct points $x,y\in X$, and prescribed values $\alpha,\beta\in\mathbb R$.

[L1] Point separation supplies $g\in L$ with $g(x)\ne g(y)$, while the vector-space and unital clauses keep every affine combination $ag+b$ in $L$ ([[def-separating-real-function-lattice]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose $g\in L$ with $g(x)\ne g(y)$ and put $a:=(\beta-\alpha)/(g(y)-g(x))$ and $b:=\alpha-ag(x)$; the denominator is nonzero because $g$ separates $x$ and $y$. [L1, choose]

2.1 The affine combination $h:=ag+b$ belongs to $L$ by [L1], and substitution gives $h(x)=ag(x)+\alpha-ag(x)=\alpha$ and $h(y)=\alpha+a(g(y)-g(x))=\beta$. [step 1.1, L1, algebra] ∎
