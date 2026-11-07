---
id: thm-geometric-brascamp-lieb-finiteness-criterion
kind: theorem
title: Geometric Brascamp–Lieb Finiteness Criterion
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
- thm-brascamp-lieb-gaussian-exhaustion-and-finiteness
- def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jonathan Bennett, Anthony Carbery, Michael Christ, and Terence Tao, Finite
      bounds for Hölder–Brascamp–Lieb multilinear inequalities
    url: https://webhomes.maths.ed.ac.uk/~carbery/analysis/papers/Carbery/bcct-redface.pdf
    locator: The geometric Brascamp–Lieb finiteness criterion, stated in the discussion
      immediately before BDG Theorem 6.1; full theorem and proof in the source paper.
proof_strategy: direct
axiom_use: Countable Choice is inherited from the Euclidean Lebesgue/Fourier and approximation
  suppliers; no full Axiom of Choice is used.
---

## Statement

Assume Countable Choice. Let $n,m,k$ be positive integers with $1\le k<n$, let $V_1,\ldots,V_m$ be $k$-dimensional linear subspaces of $\mathbb R^n$, and let $\pi_j:\mathbb R^n\to V_j$ be the orthogonal projections. For each $j$, equip $V_j$ with its $k$-dimensional Lebesgue measure. The least constant $C_{\mathrm{BL}}(V_1,\ldots,V_m)$ in
$$\left\|\left(\prod_{j=1}^m|g_j\circ\pi_j|\right)^{1/m}\right\|_{L^{2n/k}(\mathbb R^n)}\le C_{\mathrm{BL}}(V_1,\ldots,V_m)\left(\prod_{j=1}^m\|g_j\|_{L^2(V_j)}\right)^{1/m}$$
required to hold for all measurable $g_j\in L^2(V_j)$, $1\le j\le m$, is finite if and only if every linear subspace $W\subseteq\mathbb R^n$ satisfies
$$\dim W\le\frac{n}{km}\sum_{j=1}^m\dim(\pi_j(W)).$$

## Statement references

[Bennett–Carbery–Christ–Tao, finite-bounds paper](https://webhomes.maths.ed.ac.uk/~carbery/analysis/papers/Carbery/bcct-redface.pdf)

[BDG, Theorem 6.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)




## Facts & Assumptions

**Given:** All hypotheses of the Statement.

[F1] General Gaussian exhaustion and finiteness for surjective maps and exponents in $(0,1]$ are proved locally in [[thm-brascamp-lieb-gaussian-exhaustion-and-finiteness]].

## Proof

1.1 Choose isometries $Q_j:\mathbb R^k\to V_j$ and set $B_j=Q_j^*$, $a=n/(km)$ and $q=2n/k$. Then $\pi_j=Q_jB_j$, and $\dim B_jW=\dim\pi_jW$. Setting $f_j=|g_j\circ Q_j|^2$ and raising the asserted inequality to power $q$ gives exactly the general BL inequality with all exponents $a$. Every nonnegative integrable input is a square of an $L^2$ input, so this is equivalence of optimal constants, including infinite constants. [given, F1, construct, algebra]

2.1 If $a\le1$, scaling $\sum_jak=n$ is automatic and the general finiteness theorem gives the displayed iff dimension criterion. If $a>1$, both sides of that iff fail. For any $i$, put $W=\ker B_i$, of dimension $n-k$. The right side of its dimension inequality is at most $a(m-1)k=n-ak<n-k$. For direct failure of finiteness take $f_i$ to be an indicator of a target ball of radius $\varepsilon$, and all other inputs indicators of fixed large target balls. On a fixed small source box along $\ker B_i$ and a transversal ball of radius $\varepsilon$, the source integral is at least $c\varepsilon^k$, while the target product is at most $C\varepsilon^{ka}$. Their ratio diverges as $\varepsilon\downarrow0$. Thus the criterion covers the full original range of $m$, without using a theorem outside its exponent range. [given, F1, construct, algebra] ∎

