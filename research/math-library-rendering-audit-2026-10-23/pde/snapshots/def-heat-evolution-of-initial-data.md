---
id: def-heat-evolution-of-initial-data
kind: definition
title: "The heat evolution $H_t$ of initial data"
status: published
origin: pipeline
deps:
  - def-convolution-of-two-functions-on-rn
  - def-countable-choice
  - def-heat-kernel
  - def-l-p-space-as-a-quotient-by-null-functions
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-the-lebesgue-integral-respects-almost-everywhere-equality
  - thm-young-convolution-inequality
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for def-heat-evolution-of-initial-data and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-3; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"775b095baf9637149cad57737444c621ab35f43ec5c09e42ca3537572082bece","evidence":["research/frontier-38-owner-30-reader-3.md","research/frontier-38-owner-30-reader-findings-3.json","research/frontier-38-owner-30-dispatch/reader-reader-3.result.json","research/frontier-38-owner-30-step5-hash-3-post-5a.json","research/frontier-38-owner-30-alpha-batch-3-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-3.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/def-heat-evolution-of-initial-data.md","historical_raw_sha256":"cff6b06bc5354bcbe44beb5ea67be2bdd575317a3628906339a4965d5267b631","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:40:30.387Z"}}
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §5.1, printed pp. 127–131 (the convolution representation and its data classes)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 152, formula (6.37)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "Theorem 3.1.3, printed p. 103, formula (3.1.14)"
---

## Definition

Assume Countable Choice, let $n\ge1$ and $1\le p\le\infty$, and let $\Gamma$ be
the heat kernel of [[def-heat-kernel]], with $\Gamma_t:=\Gamma(\cdot,t)$ the
$L^1$ function of unit norm supplied by
[[lem-heat-kernel-normalisation-scaling-and-derivatives]]. Convolution is that
of [[def-convolution-of-two-functions-on-rn]], and $L^p$ means the class space
of [[def-l-p-space-as-a-quotient-by-null-functions]].

For $t>0$ and $f\in L^p(\mathbb R^n)$ define $H_tf$ to be the $L^p$ class of
the function

$$x\longmapsto\int_{\mathbb R^n}\Gamma(x-y,t)f(y)\,dy.$$

By Young's convolution inequality [[thm-young-convolution-inequality]] applied
with the exponent triple $(p,1,p)$, which satisfies $1/p=1/p+1/1-1$, this
convolution is defined for almost every $x$ and belongs to $L^p$ with
$\|H_tf\|_p\le\|\Gamma_t\|_1\|f\|_p=\|f\|_p$; hence $H_tf$ is a well-defined
element of $L^p$ satisfying the contraction bound. For $p=\infty$ the integral
converges absolutely for every $x$ because
$|\Gamma(x-y,t)f(y)|\le\|f\|_\infty\Gamma(x-y,t)$ almost everywhere in $y$, with
$\int\Gamma(x-y,t)\,dy=1$, so it defines a bounded representative with
$\|H_tf\|_\infty\le\|f\|_\infty$.

The value depends only on the class of $f$: if $f=f'$ almost everywhere then the
null set where they differ is carried by translation to a null set
([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]),
so at every $x$ the two $y$-integrands agree almost everywhere. Their absolute
convergence holds at the same points, and wherever they converge the integrals
agree by [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]. Each
$H_t$ is complex-linear on $L^p$, by linearity of the integral of each
representative.

Set $H_0f:=f$, the identity operator on $L^p$; the singular kernel formula is
never evaluated at $t=0$.
