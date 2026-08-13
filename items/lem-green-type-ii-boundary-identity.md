---
id: lem-green-type-ii-boundary-identity
kind: lemma
title: "The Type II boundary identity for the Q dy term"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-positive-orientation-for-elementary-region-boundaries, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-line-integrals-under-reversal-and-concatenation, thm-jordan-fubini-by-sections, thm-newton-leibniz-with-interior-derivative, thm-fubini-over-a-region-between-continuous-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 10.6"
      url: "https://www.jirka.org/ra/html/sec_mvgreenstheorem.html"
pipeline_run: null
---

## Statement

Let

$$D=\{(x,y):c\leq y\leq d,\ \lambda(y)\leq x\leq\rho(y)\}$$

be a Type II region, and let $Q$ be $C^1$ on an open neighbourhood of $D$. With the positive boundary orientation,

$$\int_{\partial D}Q\,dy=\iint_D\partial_xQ\,dA.$$

## Facts & Assumptions
**Given:** The region, function, and orientation in the Statement.

[L1] The positive Type II boundary traverses the right graph upward, the top endpoint arc right to left, the left graph downward, and the bottom endpoint arc left to right, omitting zero-length arcs ([[def-positive-orientation-for-elementary-region-boundaries]]).

[L2] The line integral $\int Q\,dy$ is the vector line integral of $(0,Q)$; it adds under concatenation and changes sign under reversal ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]], [[thm-line-integrals-under-reversal-and-concatenation]]).

[L3] Jordan-Fubini has a symmetric assertion for the other coordinate block, and graph-bounded regions with continuous data are Jordan measurable and integrable ([[thm-jordan-fubini-by-sections]], [[thm-fubini-over-a-region-between-continuous-graphs]]).

[L4] The integral of an interior derivative of a continuous function is its endpoint increment ([[thm-newton-leibniz-with-interior-derivative]]).



## Proof

**Proof technique:** direct.

1.1 The horizontal endpoint arcs in [L1] have constant $y$, so their contributions to $\int Q\,dy$ are zero. The right graph contributes $\int_c^dQ(\rho(y),y)\,dy$, and [L2] makes the downward left graph contribute $-\int_c^dQ(\lambda(y),y)\,dy$. [given, L1, L2, algebra]

1.2 For each fixed $y$ with $\lambda(y)<\rho(y)$, [L4] in the $x$ variable gives $$Q(\rho(y),y)-Q(\lambda(y),y) =\int_{\lambda(y)}^{\rho(y)}\partial_xQ(x,y)\,dx.$$ Since $\lambda<\rho$ on $(c,d)$, the only fixed $y$ where this can fail are $y=c$ and $y=d$; there $\lambda(y)=\rho(y)$ makes both sides zero, so the displayed identity holds for every $y\in[c,d]$. [given, L4]

2.1 Hence $$\int_{\partial D}Q\,dy =\int_c^d\bigl(Q(\rho(y),y)-Q(\lambda(y),y)\bigr)\,dy.$$ [step 1.1, algebra]

3.1 The symmetric-coordinate assertion of [L3] turns the iterated integral obtained by substituting step 1.2 into step 2.1 into $\iint_D\partial_xQ\,dA$. [step 2.1, step 1.2, L3]

4.1 Zero-length endpoint arcs and piecewise-$C^1$ joins contribute nothing beyond subdivision, by [L1] and [L2]. [L1, L2, step 1.1] ∎
