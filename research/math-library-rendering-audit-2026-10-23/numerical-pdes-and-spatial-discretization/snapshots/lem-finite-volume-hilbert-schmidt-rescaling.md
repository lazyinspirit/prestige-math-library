---
id: lem-finite-volume-hilbert-schmidt-rescaling
kind: lemma
title: Rescaling finite-measure kernel operators to probability spaces
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-completed-product-measure, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, thm-tonelli-and-fubini-for-completed-product-measures, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: "AC is carried only to use completed-product kernel operators with the exact well-definedness interface of the published Hilbert–Schmidt supplier; the scaling algebra itself makes no choice."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Chapter 3, §3.3, printed pp. 60–65; the finite-measure normalization is derived locally."
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, Sommersemester 2015, §5.2.6"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "PDF pp. 79–82, volume-potential setting; the source and target measure scaling is derived locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume AC. Let $(X,\mu)$ and $(Y,\nu)$ be finite measure spaces with masses $0<M_X:=\mu(X)<\infty$ and $0<M_Y:=\nu(Y)<\infty$. Put $d\widehat\mu=d\mu/M_X$ and $d\widehat\nu=d\nu/M_Y$. For $a\in L^2(X\times Y,\mu\times\nu)$, let $T_a:L^2(Y,\nu)\to L^2(X,\mu)$ be its square-integrable-kernel operator and let $\widehat T$ be the operator with kernel $\widehat a:=\sqrt{M_XM_Y}\,a$ against $\widehat\nu$. The maps $U_Xg=\sqrt{M_X}g$ and $U_Yh=\sqrt{M_Y}h$ are unitary and
$$U_XT_aU_Y^{-1}=\widehat T.$$
Moreover $\|\widehat a\|_{L^2(\widehat\mu\times\widehat\nu)}=\|a\|_{L^2(\mu\times\nu)}$, so the operator norms and kernel $L^2$ norms agree. If either mass is zero, the corresponding $L^2$ space and kernel operator are zero.

For $X=Y=D$ with Lebesgue mass $M>0$, the normalized kernel is $\widehat a=Ma$ and the measure is $d\widehat x=dx/M$.

## Facts & Assumptions

**Given:** AC, finite measure spaces $(X,\mu)$ and $(Y,\nu)$, their positive masses, and a square-integrable kernel class $a$.

[F1] The complex $L^2$ norm is the quotient norm induced by $\int |f|^2$; Cauchy–Schwarz and representative independence hold for this norm ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F2] Product integration and section integrals are valid almost everywhere on the completed product under Countable Choice, which AC supplies ([[def-completed-product-measure]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-axiom-of-choice]]).

## Proof

**Given:** AC, the spaces, $M_X,M_Y>0$, and $a\in L^2(\mu\times\nu)$.

1.1 For every $g\in L^2(X,\mu)$, scaling the integral first for nonnegative simple functions and then by the definition of the nonnegative integral gives $\|U_Xg\|_{L^2(\widehat\mu)}^2=\int M_X|g|^2\,d\widehat\mu=\int|g|^2\,d\mu=\|g\|_{L^2(\mu)}^2$. Its inverse is $h\mapsto h/\sqrt{M_X}$, so $U_X$ is unitary; the same calculation proves the assertion for $U_Y$. [given, F1, algebra]

2.1 For $g\in L^2(Y,\widehat\nu)$, $U_Y^{-1}g=g/\sqrt{M_Y}$. Using $d\nu=M_Yd\widehat\nu$ in the integral defining $T_a$ and then multiplying the output by $\sqrt{M_X}$ gives $U_XT_aU_Y^{-1}g=\int_Y\sqrt{M_XM_Y}a(x,y)g(y)\,d\widehat\nu(y)$. The equality holds almost everywhere by [F2], and is independent of representatives by [F1]. [given, F1, F2, step 1.1, algebra]

3.1 Scaling both factors of the product measure gives $\|\widehat a\|_2^2=M_XM_Y\int|a|^2\,d(\widehat\mu\times\widehat\nu)=\int|a|^2\,d(\mu\times\nu)$. Unitary equivalence in step 2.1 therefore preserves the operator norm and the kernel $L^2$ norm. If either mass is zero, every $L^2$ class on that factor is zero, so the integral operator is zero. [F1, F2, step 2.1, algebra] ∎
