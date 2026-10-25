---
id: def-locally-integrable-function-on-r-n
kind: definition
title: "A locally integrable function on $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-borel-and-lebesgue-measurable-function-on-rn, def-integrable-real-and-complex-functions-and-their-integrals, def-metric-ball]
verification:
  audited: 2026-09-04
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Section 3.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.6.14"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Definition

Let $f:\mathbb{R}^n\to\mathbb{C}$ be a measurable function
([[def-borel-and-lebesgue-measurable-function-on-rn]]). We say that $f$ is
**locally integrable** on $\mathbb{R}^n$ if for every Euclidean ball
$B(x,r)$ with $r>0$ ([[def-metric-ball]]) one has
$$\int_{B(x,r)} |f(y)|\,d\lambda(y)<\infty,$$
so the restriction of $f$ to each ball is integrable in the sense of
[[def-integrable-real-and-complex-functions-and-their-integrals]].

The set of such functions is denoted by $L^1_{\mathrm{loc}}(\mathbb{R}^n)$.
When convenient, the same notation is also used for the corresponding
almost-everywhere equivalence classes.
