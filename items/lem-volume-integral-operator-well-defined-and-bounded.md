---
id: lem-volume-integral-operator-well-defined-and-bounded
kind: lemma
title: The volume integral operator is well defined and bounded on L2
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-volume-integral-scattering-model, lem-three-dimensional-scattering-kernel-is-square-integrable, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, thm-tonelli-and-fubini-for-completed-product-measures, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-integrable-real-and-complex-functions-and-their-integrals, def-countable-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used by the completed-product Tonelli/Fubini interface. No full Axiom of Choice or compactness claim is used in this boundedness branch."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, Sommersemester 2015, §5.2.6"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "PDF pp. 79–82, volume-potential definition and its integral equation; this L2 well-definedness estimate is proved locally."
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Chapter 3, §3.3, printed pp. 60–65, the integral-operator equation setting; the L2(D) kernel estimate is proved locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $D$ have finite Lebesgue measure. For every product-measurable kernel $a\in L^2(D\times D;\mathbb C)$, the formula $T_av(x)=\int_Da(x,y)v(y)dy$ defines a representative-independent complex-linear map $L^2(D;\mathbb C)\to L^2(D;\mathbb C)$ and $\|T_a\|\le\|a\|_{L^2(D\times D)}$. Consequently, under [[def-volume-integral-scattering-model]] with $0<|D|<\infty$,
$$\|K_k\|_{L^2\to L^2}\le\|G_k(\cdot-\cdot)q(\cdot)\|_{L^2(D\times D)}\le\|q\|_\infty\sqrt{\frac{|D|\,\operatorname{diam}(D)}{4\pi}}.$$
For $|D|=0$ the operator is zero.

## Facts & Assumptions

**Given:** Countable Choice, a finite-measure $D$, a square-integrable product-measurable kernel $a$, and, for the scattering bound, $q,k$ from [[def-volume-integral-scattering-model]].

[F1] The kernel $a(x,y)=G_k(x-y)q(y)$ is a product $L^2$ class with the displayed bound ([[lem-three-dimensional-scattering-kernel-is-square-integrable]]).

[F2] Complex $L^2$ Cauchy–Schwarz is valid and the pairing is representative-independent ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F3] A product $L^1$ function has integrable, measurable sections almost everywhere, and its section integral is measurable ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Given:** The data above and $u\in L^2(D;\mathbb C)$.

1.1 On the product space, Cauchy–Schwarz gives $\int_{D\times D}|a(x,y)u(y)|dxdy\le\|a\|_2\bigl(|D|\int_D|u(y)|^2dy\bigr)^{1/2}<\infty$. Hence the section integral defining $T_au$ exists absolutely for almost every $x$ and is measurable by F3. [F1, F2, F3, given]

2.1 If $u=u'$ almost everywhere, then $a(x,y)(u-u')(y)=0$ for product-almost every $(x,y)$ by Tonelli on $D\times\{u\ne u'\}$; F3 makes their section integrals equal for almost every $x$. Changing $a$ on a product-null set likewise changes only a.e.-zero sections. Thus the output class depends only on the kernel and input classes. Integral linearity on $L^1$ proves complex linearity. [F3, step 1.1, algebra]

3.1 For almost every $x$, Cauchy–Schwarz in $y$ yields $|T_au(x)|^2\le\bigl(\int_D|a(x,y)|^2dy\bigr)\|u\|_2^2$. Integrating this inequality in $x$ with Tonelli gives $\|T_au\|_2^2\le\|a\|_2^2\|u\|_2^2$. Step 2.1 and this estimate prove the general assertion. [F1, F2, F3, step 2.1, algebra]

4.1 Apply step 3.1 to $a(x,y)=G_k(x-y)q(y)$ and then use [[lem-three-dimensional-scattering-kernel-is-square-integrable]] for its explicit square norm. If $|D|=0$, both domain and codomain are the zero $L^2$ space. [F1, step 3.1, algebra] ∎
