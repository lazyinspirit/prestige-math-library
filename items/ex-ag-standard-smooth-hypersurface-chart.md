---
id: "ex-ag-standard-smooth-hypersurface-chart"
kind: "example"
title: "A cuspidal plane curve is standard smooth away from the cusp"
status: published
origin: "pipeline"
deps: ["def-ag-standard-smooth-algebra", "lem-ag-polynomial-quotient-differentials"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Vakil §22.2.7, pp.575–577"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "Stacks Algebra 10.137.5 (tag 00T6)"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
---

## Example

Let $k$ be a field of characteristic different from two and let
$A=k[x,y]/(y^{2}-x^{3})$, with $y$ denoting the class of the variable. Then
$S=A_{y}$ is a standard smooth $k$-algebra of relative dimension one, presented
by the single equation $y^{2}-x^{3}$ in the variables $y,x$ with the $1\times1$
minor
$$\frac{\partial(y^{2}-x^{3})}{\partial y}=2y,$$
which is a unit of $S$ because $y$ is inverted and $2\ne0$ in $k$. The chart
therefore covers the open set $D(y)$ of the cuspidal curve; at the origin
$\partial_{y}f=2y$ and $\partial_{x}f=-3x^{2}$ both vanish, so this single
equation exhibits no invertible minor there.

## Facts & Assumptions

**Given:** A field $k$ with $2\ne0$, the polynomial ring $k[x,y]$, the element $f=y^{2}-x^{3}$, the quotient $A=k[x,y]/(f)$ and the localisation $S=A_{y}$ at the powers of the class $y$.

[F1] [[def-ag-standard-smooth-algebra]]: a standard smooth presentation of an $R$-algebra $S$ consists of $n\ge c\ge0$, equations $f_1,\dots,f_c\in R[x_1,\dots,x_n]$ and $g$ with $S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ such that some $c\times c$ Jacobian minor has image a unit of $S$; $n-c$ is the relative dimension, and the invertible minor may be assumed to be the leading one in the first $c$ columns.

[F2] [[lem-ag-polynomial-quotient-differentials]]: for $k[x,y]$ the partial derivatives are computed on the monomial basis, $\mathrm df=\partial_xf\,\mathrm dx+\partial_yf\,\mathrm dy$, and $(\partial_xf,\partial_yf)$ is the Jacobian row governing the cokernel presentation of $\Omega_{k[x,y]/(f)/k}$; no injectivity of the conormal map is asserted.

## Verification

1.1 The chart on $D(y)$. Take $R=k$, $n=2$, $c=1$, the ordered variables $(x_1,x_2)=(y,x)$, the equation $f_1=y^{2}-x^{3}$ and $g=y$; then $S=A_{y}\cong(k[x_1,x_2]/(f_1))_{g}$ by construction [F1]. By [F2] the Jacobian row of the single equation is $\bigl(\partial_{y}f,\partial_{x}f\bigr)=(2y,-3x^{2})$, and its first entry is $2y$, a product of the unit $2\in k$ and the unit $y$ of $S=A_{y}$; hence the leading $1\times1$ minor is a unit of $S$ and the presentation is standard smooth of relative dimension $2-1=1$. This proves the claim on the whole open set $D(y)=\{y\ne0\}\subseteq\operatorname{Spec}A$. [F1, F2, algebra]

2.1 Complements. The hypothesis on the characteristic is exactly what the unit computation uses: if $2=0$ in $k$ then $2y=0$ is not a unit of $S$. At the origin both partial derivatives $2y$ and $-3x^{2}$ vanish, so the displayed single equation gives no invertible minor there, and the chart of step 1.1 covers precisely the points with $y\ne0$, not the cusp at the origin. [F2, step 1.1, algebra] ∎
