---
id: "ex-ag-projection-submersion-parameters"
kind: "example"
title: "Geometric parameters of a projection of affine spaces"
status: draft
origin: "pipeline"
deps: ["def-ag-standard-smooth-algebra", "lem-ag-polynomial-quotient-differentials", "lem-ag-separable-residue-cotangent-sequence", "cor-dimension-of-a-finite-polynomial-ring-over-a-field", "thm-coproduct-property-of-tensor-products-of-commutative-algebras", "thm-right-exactness-of-tensor-products"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra 10.137.5 (tag 00T6) and 10.140.5 (tag 00TV)"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §26.2.F, pp.690–693"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Example

Let $k$ be a field and let
$\pi\colon\mathbf A_k^{m+n}\to\mathbf A_k^{m}$ be the projection onto the first
$m$ coordinates, with $m,n\ge0$. Write the coordinate ring of the source as
$k[y_1,\dots,y_m,x_1,\dots,x_n]=k[y_1,\dots,y_m][x_1,\dots,x_n]$. Then:

1. $\pi$ is standard smooth in the chart $g=1$ with $c=0$ equations and
   relative dimension $n$, the polynomial extension being its own presentation;
2. at every $k$-rational point $(a,b)$ of the source the pulled-back classes of
   $y_1-a_1,\dots,y_m-a_m$ are $k$-linearly independent in the cotangent space
   $\mathfrak m_{(a,b)}/\mathfrak m_{(a,b)}^{2}$, being the first $m$ elements of
   the coordinate cotangent basis;
3. every fibre of $\pi$ over a $k$-rational point is $\mathbf A_k^{n}$, of
   dimension $n$.

The calculation is an explicit polynomial computation; no form of the Axiom of
Choice is introduced, and the quoted dimension statement carries no Choice
hypothesis.

## Facts & Assumptions

**Given:** A field $k$, integers $m,n\ge0$, the polynomial rings $k[y_1,\dots,y_m]$ and $k[y_1,\dots,y_m,x_1,\dots,x_n]$, and a $k$-rational point $(a,b)=(a_1,\dots,a_m,b_1,\dots,b_n)$ of $\mathbf A_k^{m+n}$.

[F1] [[def-ag-standard-smooth-algebra]]: a standard smooth presentation of an $R$-algebra $S$ consists of $n\ge c\ge0$, equations $f_1,\dots,f_c$ and an element $g$ with $S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ such that some $c\times c$ Jacobian minor is a unit of $S$; the relative dimension is $n-c$, and $c=0$ is allowed, in which case $S$ is a localisation of a polynomial ring over $R$ and no minor condition is imposed.

[F2] [[lem-ag-polynomial-quotient-differentials]]: for $A=k[y_1,\dots,y_m]$ and $P=A[x_1,\dots,x_n]$ the module $\Omega_{P/A}$ is free with basis $\mathrm dx_1,\dots,\mathrm dx_n$; over $k$ the module $\Omega_{k[y,x]/k}$ is free with basis $\mathrm dy_1,\dots,\mathrm dy_m,\mathrm dx_1,\dots,\mathrm dx_n$.

[F3] [[lem-ag-separable-residue-cotangent-sequence]]: for a Noetherian local $k$-algebra $R$ with residue field $\kappa$ finite separable over $k$, the map $\mathfrak m/\mathfrak m^{2}\to\Omega_{R/k}\otimes_R\kappa$ sending the class of $z$ to $\mathrm dz\otimes1$ is an isomorphism; in particular at a $k$-rational point of a polynomial ring the classes of the coordinate differences form a $k$-basis of the cotangent space.

[F4] [[thm-coproduct-property-of-tensor-products-of-commutative-algebras]], [[thm-right-exactness-of-tensor-products]]: $k[y,x]\otimes_{k[y]}\kappa(a)\cong k[x]$ for the quotient $k[y]/(y_1-a_1,\dots,y_m-a_m)\cong k$ presenting the residue field of the $k$-rational point $a$, and base change commutes with quotients.

[F5] [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]: $\dim k[x_1,\dots,x_n]=n$ for $n\ge0$, with $\dim k=0$ when $n=0$.



## Proof

1.1 The standard smooth chart. The source coordinate ring is the polynomial ring $k[y_1,\dots,y_m][x_1,\dots,x_n]$, and the map $k[y_1,\dots,y_m]\to k[y][x]$ is the structure map of the target algebra over itself, presented by $n$ variables, no equations ($c=0$) and $g=1$; by [F1] this is a standard smooth presentation of relative dimension $n-0=n$, so $\pi$ is standard smooth in this single chart, with no minor to check. [F1, algebra]

1.2 The cotangent parameters. At the $k$-rational point $(a,b)$ the residue field is $k$, so [F3] identifies the cotangent space with $\Omega_{k[y,x]/k}\otimes k$, which by [F2] has the $k$-basis $\mathrm dy_1,\dots,\mathrm dy_m,\mathrm dx_1,\dots,\mathrm dx_n$ and hence the classes of the coordinate differences $y_i-a_i$, $x_j-b_j$ as its $k$-basis. The pullback map on cotangent spaces induced by $\pi$ sends the class of $y_i-a_i$ to the class of $\pi^{\#}(y_i-a_i)=y_i-a_i$, that is, it carries the basis $\mathrm dy_1,\dots,\mathrm dy_m$ of the target cotangent space onto the first $m$ elements of a basis of the source cotangent space; in particular these classes are $k$-linearly independent. [F2, F3, algebra]

2.1 The fibres. Let $a\in\mathbf A_k^{m}(k)$ be a $k$-rational point and let $I=(y_1-a_1,\dots,y_m-a_m)\subseteq k[y]$ be its maximal ideal, with $k[y]/I\cong k$. By [F4] the fibre ring is $k[y,x]\otimes_{k[y]}k\cong k[y,x]/I\,k[y,x]\cong k[x_1,\dots,x_n]$, so the fibre over $a$ is $\operatorname{Spec}k[x_1,\dots,x_n]=\mathbf A_k^{n}$ and has dimension $n$ by [F5]; equivalently the fibre of $\pi$ over any $k$-rational point is affine $n$-space. This completes the verification of all three clauses, and the fibre dimension $n$ is exactly the relative dimension of the chart of step 1.1, while the target's $m$ coordinate parameters pull back to independent cotangent classes by step 1.2. [F4, F5, step 1.1, step 1.2, algebra] ∎
