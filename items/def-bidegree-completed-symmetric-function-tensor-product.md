---
id: def-bidegree-completed-symmetric-function-tensor-product
kind: definition
title: Bidegree completion of two symmetric-function rings
status: draft
origin: pipeline
deps:
  - def-stable-graded-ring-of-symmetric-functions
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §4
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.9
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Definition

Let $\Lambda(x)$ and $\Lambda(y)$ be two copies of the graded ring
[[def-stable-graded-ring-of-symmetric-functions]], with degree pieces
$\Lambda^a(x)$ and $\Lambda^b(y)$. Define the **bidegree-completed tensor
product** by
$$\Lambda(x)\widehat\otimes\Lambda(y):=\prod_{a,b\ge0}\bigl(\Lambda^a(x)\otimes_{\mathbb Z}\Lambda^b(y)\bigr).$$

Addition is componentwise. If $u=(u_{a,b})$ and $v=(v_{a,b})$, their product
has component
$$ (uv)_{a,b}:=\sum_{i=0}^{a}\sum_{j=0}^{b}u_{i,j}v_{a-i,b-j},$$
where multiplication in each tensor factor is the graded multiplication of
$\Lambda$. This is a finite sum for each fixed $(a,b)$, so it defines a
commutative ring; the unit has component $1\otimes1$ at $(0,0)$ and zero
elsewhere.

The **Cauchy kernel** is the element
$$\Omega(x,y):=\prod_{r,s\ge1}(1-x_r y_s)^{-1}$$
interpreted bidegree by bidegree: its degree-$(d,d)$ component is the stable
degree-$d$ coefficient of the finite products, and all components $(a,b)$ with
$a\ne b$ are zero. Thus $\Omega$ belongs to the diagonal bidegrees of this
completion, not to the finite-support graded ring $\Lambda$ itself.
