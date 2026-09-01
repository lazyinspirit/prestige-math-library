---
id: ex-the-sign-braiding-on-supervector-spaces
kind: example
title: "Supervector spaces with the sign braiding"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-symmetric-monoidal-category]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 8.2.2"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Example

Let $\mathbf{SVect}$ be the category of $\mathbb Z/2$-graded vector spaces.
For homogeneous vectors $v,w$, define

$$c_{V,W}(v\otimes w)=(-1)^{|v||w|}w\otimes v.$$

This is a symmetric braiding.

## Facts & Assumptions

**Given:** $\mathbb Z/2$-graded vector spaces and homogeneous vectors of degrees $|v|,|w|\in\{0,1\}$.

[L1] A symmetric monoidal category is a braided monoidal category with involutive braiding ([[def-symmetric-monoidal-category]]).

## Verification

**Proof technique:** direct.

1.1 The displayed map is natural and invertible: applying it twice multiplies a pure tensor by $(-1)^{|v||w|}(-1)^{|w||v|}=(-1)^{2|v||w|}=1$, so $c_{W,V}\circ c_{V,W}=1_{V\otimes W}$. [given, L1, algebra]

2.1 On a triple tensor $u\otimes v\otimes w$, each route around a braiding hexagon contributes the sign $(-1)^{|u||v|+|u||w|}=(-1)^{|u|(|v|+|w|)}$, because moving $u$ past $v\otimes w$ is the same as moving it past $v$ and then past $w$. Thus both hexagons commute. [step 1.1, algebra]

3.1 By [L1], these two checks show that $\mathbf{SVect}$ carries a symmetric braiding, namely the sign braiding. [L1, step 1.1, step 2.1] ∎
