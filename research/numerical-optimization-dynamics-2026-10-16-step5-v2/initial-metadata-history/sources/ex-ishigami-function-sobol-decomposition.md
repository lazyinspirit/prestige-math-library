---
id: ex-ishigami-function-sobol-decomposition
kind: example
title: The Ishigami function's only possible interaction is X1-X3
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-product-hoeffding-anova-components, thm-product-hoeffding-anova-decomposition, def-first-and-total-sobol-indices, def-independent-random-elements, thm-independent-random-elements-have-product-joint-law, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-moments-variance-and-covariance]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Thierry Klein, Introduction to Sensitivity Analysis: The Statistical Study of Sobol Indices, complete lecture notes, §2"
      url: https://perso.math.univ-toulouse.fr/klein/files/2014/07/cours_AS.pdf
    - title: Art B. Owen, Variance Components and Generalized Sobol' Indices, §2.1
      url: https://arxiv.org/pdf/1205.1774
---

## Example

Let $X_1,X_2,X_3$ be independent uniform random variables on $[-\pi,\pi]$ and
let
$$f(X)=\sin X_1+a\sin^2X_2+bX_3^4\sin X_1,$$
where $a,b\in\mathbb R$. Its only possibly nonzero nonconstant ANOVA components are
$f_{\{1\}}$, $f_{\{2\}}$, and the interaction $f_{\{1,3\}}$. For every
$a,b$, the output variance is positive and
$$V=\frac12+\frac{a^2}{8}+\frac{b\pi^4}{5}+\frac{b^2\pi^8}{18}.$$

## Facts & Assumptions

**Given:** The independent uniform inputs, real parameters $a,b$, and $f$ in the Example.

[F1] [[def-product-hoeffding-anova-components]]: components are finite alternating sums of coordinate averages.

[F2] [[thm-product-hoeffding-anova-decomposition]]: the components reconstruct $f$, are orthogonal, and their squared norms sum to the variance.

[F3] [[def-first-and-total-sobol-indices]]: first-order and total indices divide their variance-component numerators by positive $V$.

[F4] [[def-independent-random-elements]] and [[thm-independent-random-elements-have-product-joint-law]]: the input vector has the product joint law.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: integrable product functions may be integrated coordinatewise.

[F6] [[def-moments-variance-and-covariance]]: variance is the expected squared deviation from the mean.

## Verification

**Given:** The model and product law in the Example.

1.1 The inputs are independent by assumption [F4], so Fubini [F5] factors products of coordinate functions. Symmetry gives $\mathbb E\sin X_1=0$, $\mathbb E\sin^2X_1=1/2$, and $\mathbb E\sin^4X_1=3/8$. Direct integration gives $\mathbb EX_3^4=\pi^4/5$ and $\mathbb EX_3^8=\pi^8/9$. Also $\mathbb E\sin^2X_2=1/2$ and $\operatorname{Var}(\sin^2X_2)=3/8-(1/2)^2=1/8$ by [F6]. [F4, F5, F6, given, algebra]

2.1 Set $m_4=\pi^4/5$. Integrating the defining function over complementary independent coordinates gives $f_{\{1\}}=(1+bm_4)\sin X_1$, $f_{\{2\}}=a(\sin^2X_2-1/2)$, and $f_{\{1,3\}}=b\sin X_1(X_3^4-m_4)$. Integrating any other nonempty subset's alternating projection sum gives zero, since the function is a sum of these three terms and each displayed factor is centered in every coordinate in its support. This is exactly the component convention in [F1]. [F1, step 1.1, given, algebra]

3.1 The component variances are $V_1=(1+bm_4)^2/2$, $V_2=a^2/8$, and $V_{13}=\frac{b^2}{2}(\pi^8/9-\pi^8/25)=8b^2\pi^8/225$ by [F6]. They are mutually orthogonal by [F2]. Adding them yields $V=1/2+a^2/8+b\pi^4/5+b^2\pi^8/18$. This variance is positive: if $b\ne0$ then $V_{13}>0$, and if $b=0$ then $V_1=1/2$; in either case $V_2\ge0$. [F2, F6, step 1.1, step 2.1, algebra]

4.1 By [F3], $S_1=V_1/V$, $S_2=V_2/V$, and $S_3=0$, while $S_{T_1}=(V_1+V_{13})/V$, $S_{T_2}=V_2/V$, and $S_{T_3}=V_{13}/V$. Thus the interaction contributes to the total effects of inputs 1 and 3 but not to either first-order effect. [F2, F3, step 3.1] ∎

