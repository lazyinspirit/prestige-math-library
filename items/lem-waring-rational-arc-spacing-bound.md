---
id: lem-waring-rational-arc-spacing-bound
kind: lemma
title: "A spacing bound near a rational frequency"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-common-divisor-and-gcd
  - def-coprime
  - def-natural-logarithm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, equation (10.6), printed p. 1618; the spacing argument is written out here"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§5.1, Weyl differencing and the spacing reduction used in the circle method, printed pp. 28–30"
---

## Statement

For integers $X,r\ge1$, real numbers $Y\ge1$, $A\ge1$, $\beta,\theta$, and an integer $b$ whose only positive common divisor with $r$ is $1$, assume $|\beta-b/r|\le A/r^2$. Define $\|t\|_{\mathbb T}:=\min_{m\in\mathbb Z}|t-m|$, and interpret $\min(Y,\|t\|_{\mathbb T}^{-1})$ as $Y$ when $\|t\|_{\mathbb T}=0$. Then there is a constant $C_A$ depending only on $A$ such that
$$\sum_{n=1}^{X}\min\!\left(Y,\|n\beta+\theta\|_{\mathbb T}^{-1}\right)\le C_A\left(\frac Xr+1\right)\left(Y+r\log(2r)\right),$$
where $\log$ is the natural logarithm.

## Statement references

[Wooley, §10, equation (10.6)](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §5.1](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** The parameters in the Statement and the torus distance $\|\cdot\|_{\mathbb T}$ defined there.

[F1] The hypothesis that $b$ and $r$ have no positive common divisor other than $1$ makes multiplication by $b$ a permutation of the nonzero residue classes modulo $r$ ([[def-common-divisor-and-gcd]], [[def-coprime]]).

[F2] The natural logarithm is increasing on the positive reals and $\sum_{j=1}^{m}j^{-1}\le1+\log m$ for integers $m\ge1$ ([[def-natural-logarithm]]; the harmonic-sum inequality follows by comparison with $\int_1^m x^{-1}dx$).

## Proof

**Proof technique:** blockwise separation.

1.1 If $r<16(A+1)$, the sum is at most $XY$, while $(X/r+1)(Y+r\log(2r))\ge XY/r>XY/(16(A+1))$. Thus the assertion holds with a constant depending only on $A$ in this case. [given, algebra]

1.2 Suppose $r\ge16(A+1)$ and partition $1,\ldots,X$ into consecutive blocks of length at most $L:=\lfloor r/(8(A+1))\rfloor$. If distinct $n,m$ lie in one block, then $0<|n-m|<r/(8(A+1))$, so $\|(n-m)b/r\|_{\mathbb T}\ge1/r$ by [F1]. The perturbation has size $|(n-m)(\beta-b/r)|\le1/(8r)$, and the triangle inequality for torus distance gives $\|(n-m)\beta\|_{\mathbb T}\ge7/(8r)\ge3/(4r)$. Hence the points $n\beta+\theta$ in each block are pairwise separated by at least $3/(4r)$ on $\mathbb T$. [F1, given, algebra]

2.1 In one such block, each of the two arcs at distances in $[j/r,(j+1)/r)$ from $0\pmod1$ contains at most two points, because its length is $1/r$ and the separation is at least $3/(4r)$. Thus at most four points lie in each distance shell. The shell $j=0$ contributes at most $4Y$; each shell $1\le j\le r/2$ contributes at most $4r/j$. By [F2], the sum over one block is at most $4Y+4r(1+\log r)\ll Y+r\log(2r)$. [F2, step 1.2]

2.2 The number of blocks is at most $X/L+1\le16(A+1)X/r+1$, since $L\ge r/(16(A+1))$. Multiplying the bound from step 2.1 by this number proves the asserted inequality after enlarging the constant depending only on $A$. [step 1.2, step 2.1, algebra] ∎
