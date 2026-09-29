---
id: ex-proj-polynomial-ring-projective-space
kind: example
title: "Polynomial Proj charts"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - thm-projective-space-as-proj
  - lem-standard-opens-proj-affine
  - def-relative-projective-space-standard-charts
  - ex-spectrum-field-one-point
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
    - title: "Gao-Zhang, Lectures on Algebraic Geometry, Chapter 5"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and $n\ge0$, and give
$S=k[x_0,\dots,x_n]$ the total-degree grading with $\deg x_i=1$. Then
$$\operatorname{Proj}S=\mathbb P^n_k,$$
the chart $D_+(x_i)$ is $\operatorname{Spec}k[x_0/x_i,\dots,x_n/x_i]$ with the
variable $x_i/x_i$ omitted (it equals $1$), and on the overlap
$D_+(x_ix_j)$ the coordinate change between the $i$-th and $j$-th charts
sends
$$\frac{x_a}{x_j}=\frac{x_a/x_i}{x_j/x_i},$$
so it is the transition formula
$x^{(i)}_a\mapsto x^{(j)}_a/x^{(j)}_i$ of the published charts of
$\mathbb P^n_k$ ([[def-relative-projective-space-standard-charts]]). For $n=0$
the space is the one-point scheme $\operatorname{Spec}k$.

## Facts & Assumptions

**Given:** The Axiom of Choice, A field $k$, an integer $n\ge0$, the graded polynomial ring $S=k[x_0,\dots,x_n]$ with $\deg x_i=1$, and the scheme $\mathbb P^n_k$ with its standard charts.

[F1] $\operatorname{Proj}k[x_0,\dots,x_n]\cong\mathbb P^n_k$ canonically over $\operatorname{Spec}k$, with $D_+(x_i)$ corresponding to the $i$-th standard chart $U_i=\operatorname{Spec}k[x^{(i)}_\ell:\ell\ne i]$ and transition isomorphisms $x^{(i)}_\ell\mapsto x^{(j)}_\ell/x^{(j)}_i$, $x^{(i)}_j\mapsto1/x^{(j)}_i$ on $U_i\cap U_j$. ([[thm-projective-space-as-proj]], [[def-relative-projective-space-standard-charts]])

[F2] For homogeneous $f\in S$ of positive degree the chart map $D_+(f)\to\operatorname{Spec}S_{(f)}$ is an isomorphism of schemes. ([[lem-standard-opens-proj-affine]])

[F3] For a field $k$ the scheme $\operatorname{Spec}k$ has exactly one point, namely $(0)$. ([[ex-spectrum-field-one-point]])

[F4] The assumed Axiom of Choice is the choice-function principle ([[def-axiom-of-choice]]); it licenses the AC-qualified Proj and associated-sheaf suppliers at step 2.1.

## Verification

**Proof technique:** direct: compute the degree-zero localisations of the polynomial ring at the variables and match them with the published charts and transition formulas.

1.1 Chart coordinates. Fix $i$. A degree-zero element of $S[x_i^{-1}]$ has the form $a/x_i^d$ with $a$ homogeneous of degree $d$, and every monomial $x_0^{a_0}\cdots x_n^{a_n}$ of degree $d$ gives $x_0^{a_0}\cdots x_n^{a_n}/x_i^{d}= \prod_{\ell\ne i}(x_\ell/x_i)^{a_\ell}$; hence $$S_{(x_i)}=k\bigl[x_\ell/x_i:\ell\ne i\bigr],$$ the polynomial ring in the $n$ variables $x^{(i)}_\ell:=x_\ell/x_i$. [algebra]
2.1 The charts. Under the assumed AC [F4], by [F2] the chart $D_+(x_i)$ is $\operatorname{Spec}S_{(x_i)}=\operatorname{Spec}k[x_\ell/x_i:\ell\ne i]$, which is exactly the $i$-th standard chart $U_i=\operatorname{Spec}k[x^{(i)}_\ell:\ell\ne i]$ of $\mathbb P^n_k$ under the identification $x^{(i)}_\ell=x_\ell/x_i$ of [F1]. [F1, F2, F4, step 1.1]
2.2 The overlap. On $D_+(x_ix_j)$ both $x_i$ and $x_j$ are invertible, so the relation $$\frac{x_a}{x_j}=\frac{x_a/x_i}{x_j/x_i}$$ is an identity of regular functions in the localised rings; expressed in the coordinates of step 1.1 it reads $x^{(j)}_a=x^{(i)}_a/x^{(i)}_j$, which is exactly the transition formula of the published charts in [F1], together with $x^{(j)}_i=1/x^{(i)}_j$ for $a=i$. Hence the overlapping charts are glued by the same isomorphisms. [F1, step 1.1, algebra]
2.3 The case $n=0$. For $n=0$ we have $S=k[x_0]$ with $S_{(x_0)}=k$ by step 1.1 with $n=0$ variables, so $\operatorname{Proj}k[x_0]=D_+(x_0)=\operatorname{Spec}k$, which is the one-point scheme of [F3]; equivalently $\mathbb P^0_k=\operatorname{Spec}k$ in the published charts. [F1, F3, step 1.1, cases: n=0]
3.1 Conclusion. Steps 2.1 and 2.2 identify the charts and gluing of $\operatorname{Proj}k[x_0,\dots,x_n]$ with those of $\mathbb P^n_k$, in agreement with the canonical isomorphism of [F1], and step 2.3 settles $n=0$; the displayed coordinate change is the transition formula of the published charts. [F1, step 2.1, step 2.2, step 2.3]
\qed
