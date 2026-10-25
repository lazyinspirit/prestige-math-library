---
id: thm-three-point-transitivity-mobius-transformations
kind: theorem
title: "A unique Möbius transformation carries any ordered triple of distinct sphere points to any other"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cross-ratio-riemann-sphere, def-mobius-transformation, thm-mobius-group-and-projective-linear-identification, thm-mobius-transformations-biholomorphic-sphere]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Statement

For any ordered triples $(a,b,c)$ and $(a',b',c')$ of distinct points of
$\widehat{\mathbb C}$, there is a unique Möbius transformation $M$ with
$$M(a)=a',\qquad M(b)=b',\qquad M(c)=c'.$$
In particular every ordered triple of distinct sphere points can be normalized to
$(0,1,\infty)$.

## Facts & Assumptions

**Given:** Two ordered triples $(a,b,c)$ and $(a',b',c')$ of distinct sphere points.

[L1] The inverse of a Möbius transformation is again Möbius ([[thm-mobius-transformations-biholomorphic-sphere]], [[thm-mobius-group-and-projective-linear-identification]]).

## Proof

**Proof technique:** direct.

1.1 Define $$N(z):=\begin{cases} \dfrac{(z-b)(c-a)}{(z-a)(c-b)},&a,b,c\in\mathbb C,\\[4pt] \dfrac{z-b}{c-b},&a=\infty,\\[4pt] \dfrac{c-a}{z-a},&b=\infty,\\[4pt] \dfrac{z-b}{z-a},&c=\infty, \end{cases}$$ and define $N'$ by the same formula with $(a,b,c)$ replaced by $(a',b',c')$. In each case the displayed formula is Möbius and direct substitution gives $N(a)=\infty$, $N(b)=0$, $N(c)=1$ and $N'(a')=\infty$, $N'(b')=0$, $N'(c')=1$. [given, algebra]

1.2 The composition $(N')^{-1}\circ N$ is Möbius by [L1] and carries $(a,b,c)$ to $(a',b',c')$, so the required map exists. [L1, given]

2.1 If another Möbius map had the same three values, then composing with $N$ and $N'$ would produce a Möbius map fixing $0$, $1$, and $\infty$; writing it as $(\alpha z+\beta)/(\gamma z+\delta)$ forces $\beta=\gamma=0$ and then $\alpha=\delta$, so it is the identity. Thus the map is unique. [given, algebra] ∎
