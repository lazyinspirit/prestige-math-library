---
id: "ex-ag-differentials-polynomial-and-hypersurface"
kind: "example"
title: "Differentials of a polynomial ring and of a cuspidal hypersurface"
status: draft
origin: "pipeline"
deps: ["lem-ag-polynomial-quotient-differentials", "cor-dimension-preserved-by-integral-extensions", "cor-dimension-of-a-finite-polynomial-ring-over-a-field", "def-axiom-of-choice"]
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
    - title: "Vakil §22.2.7, pp.575–577"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "Stacks Algebra 10.131.9–10 and 10.131.14"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the dimension statement
below. Let $k$ be a field and let
$$A=k[x,y]/(y^{2}-x^{3}),\qquad f=y^{2}-x^{3}.$$
Then
$$\Omega_{A/k}\cong\bigl(A\,\mathrm dx\oplus A\,\mathrm dy\bigr)\big/\bigl(2y\,\mathrm dy-3x^{2}\,\mathrm dx\bigr),$$
with the coefficients $2$ and $3$ interpreted in $k$. The curve $A$ has dimension
one, but the fibre of $\Omega_{A/k}$ at the origin has dimension two over $k$:
$$\Omega_{A/k}\otimes_A\kappa\bigl((x,y)\bigr)\cong k^{2}.$$
The computation of $\Omega_{A/k}$ holds in every characteristic. In particular,
even when $2\ne0$ and $3\ne0$, this module is not free of rank one: its fibre
at the origin has dimension two.

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $k[x,y]$, the element $f=y^{2}-x^{3}$, the quotient $A=k[x,y]/(f)$ with class map $\pi\colon k[x,y]\to A$, the origin $\mathfrak m=(x,y)A$, and the Axiom of Choice.

[F1] [[lem-ag-polynomial-quotient-differentials]]: $\Omega_{P/k}$ for $P=k[x,y]$ is free with basis $\mathrm dx,\mathrm dy$, so $\Omega_{P/k}\cong P^{2}$; if $I=(f)$ then $\Omega_{P/I/k}$ is the cokernel of the $P/I$-linear map $(P/I)^{1}\to(P/I)^{2}$ given by the Jacobian matrix $(\partial f/\partial x,\partial f/\partial y)$, that is, $\Omega_{A/k}\cong A^{2}/A\cdot(\partial_xf,\partial_yf)$, and the first map of the conormal sequence need not be injective.

[F2] [[cor-dimension-preserved-by-integral-extensions]]: under the Axiom of Choice, for an injective integral extension $A\subseteq B$ of nonzero commutative rings one has $\dim A=\dim B$.

[F3] [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]: for a field $k$ and $n\ge0$ one has $\dim k[x_1,\dots,x_n]=n$.

[F4] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; it is assumed for the dimension statements [F2] and [F3].



## Proof

1.1 The quotient formula. With $f=y^{2}-x^{3}$ one has $\partial f/\partial x=-3x^{2}$ and $\partial f/\partial y=2y$ on the monomial basis [F1], so the Jacobian matrix of the single equation is the row $(-3x^{2},\,2y)$ and $\Omega_{A/k}\cong A^{2}/A\cdot(-3x^{2},2y)=(A\,\mathrm dx\oplus A\,\mathrm dy)/(2y\,\mathrm dy-3x^{2}\,\mathrm dx)$, exactly as displayed; no injectivity of the conormal map is used or claimed [F1]. [F1, algebra, F4]

1.2 The curve has dimension one. The subring $k[x]\subseteq A$ is a polynomial ring, and $A$ is a finite $k[x]$-module with basis $1,y$ because $y^{2}=x^{3}\in k[x]$, so the extension is integral and injective and $A\ne0$; hence $\dim A=\dim k[x]=1$ by [F2] and [F3]. [F2, F3, algebra]

2.1 The fibre at the origin. The maximal ideal $\mathfrak m=(x,y)A$ corresponds to the origin, with residue field $\kappa(\mathfrak m)=k$ because $A/\mathfrak m=k$; tensoring the presentation of step 1.1 with $A\to k$ gives $\Omega_{A/k}\otimes_Ak\cong k^{2}/k\cdot(0,0)=k^{2}$, as both coefficients $2y$ and $3x^{2}$ vanish at the origin even when $2=0$ or $3=0$ in $k$. Thus the cotangent fibre at the origin has dimension two, equal to the number of variables, while $A$ has dimension one by step 1.2. [F1, step 1.1, step 1.2, algebra] ∎
