---
id: thm-morera-triangle-theorem
kind: theorem
title: "Morera's theorem: vanishing triangle integrals characterize holomorphy among continuous functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-oriented-complex-triangle-and-boundary, prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain, thm-cauchy-integral-formula-higher-derivatives, thm-goursat-triangle-theorem]
justified_by: []
aliases: []
landmark: true
short: "Morera's theorem"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorem 5.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Theorem 2.3.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorem 2.21"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

A continuous function on an open subset of $\mathbb C$ is holomorphic if and only if its integral around the boundary of every filled triangle contained in the open set is zero.

Precisely, if $\Omega\subseteq\mathbb C$ is open and $f:\Omega\to\mathbb C$ is continuous, then

$$f\text{ is holomorphic on }\Omega\quad\Longleftrightarrow\quad\int_{\partial\Delta[a,b,c]}f(z)\,dz=0\text{ whenever }\Delta[a,b,c]\subseteq\Omega.$$

Repeated or collinear vertices are permitted.

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb C$ and a continuous function $f:\Omega\to\mathbb C$.

[L1] A filled triangle $\Delta[a,b,c]$ has positively oriented boundary $\ell_{ab}*\ell_{bc}*\ell_{ca}$, and repeated or collinear vertices are allowed ([[def-oriented-complex-triangle-and-boundary]]).

[L2] On an open set star-shaped with respect to a point, a continuous function whose integral vanishes around every contained filled triangle has a holomorphic primitive $F$ satisfying $F'=f$ ([[prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain]]).

[L3] Every holomorphic function has complex derivatives of every natural order locally ([[thm-cauchy-integral-formula-higher-derivatives]]).

[L4] A holomorphic function has zero integral around every filled triangle contained in its open domain, including degenerate triangles ([[thm-goursat-triangle-theorem]]).

## Proof

**Proof technique:** direct.

1.1 For the vanishing-integrals-to-holomorphy direction, fix $a\in\Omega$ and choose $r>0$ with $\overline D(a,r)\subseteq\Omega$; the disc $D(a,r)$ is star-shaped with respect to $a$, and every filled triangle in it is among the triangles covered by the assumed condition and [L1]. [given, L1]

1.2 For the holomorphy-to-vanishing-integrals direction, if $f$ is holomorphic on $\Omega$, [L4] gives zero integral around every filled triangle of [L1] contained in $\Omega$, including those with repeated or collinear vertices. [L1, L4]

2.1 For the vanishing-integrals-to-holomorphy direction, [L2] applied on $D(a,r)$ supplies a holomorphic function $F$ there with $F'=f$. [step 1.1, L2]

3.1 For the vanishing-integrals-to-holomorphy direction, [L3] makes the derivative $F'$ holomorphic, so $f=F'$ is holomorphic on $D(a,r)$. [step 2.1, L3]

4.1 If $\Omega$ is nonempty, the point in step 1.1 was arbitrary, so step 3.1 proves holomorphy throughout $\Omega$ under the integral condition, while step 1.2 proves the converse; if $\Omega$ is empty, both directions are vacuous. [step 1.1, step 1.2, step 3.1] ∎
