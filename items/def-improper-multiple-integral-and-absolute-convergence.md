---
id: def-improper-multiple-integral-and-absolute-convergence
kind: definition
title: "Improper multiple integrals and absolute convergence on open sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-jordan-exhaustion-of-an-open-set, thm-multidimensional-integral-properties, def-extended-reals, lem-extended-reals-complete]
justified_by: []
aliases: []
landmark: true
short: "Improper multiple integral"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "V. Guillemin, MIT 18.101 Analysis II Lecture Notes, Definitions 3.22 and 3.25"
      url: "https://ocw.mit.edu/courses/18-101-analysis-ii-fall-2005/babd982be745679b6d691f78b1c18f53_lectures.pdf"
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Definition

Let $D\subseteq\mathbb R^n$ be open. A function $f:D\to\mathbb R$ is **locally Riemann integrable** when its restriction to every compact Jordan set $K\subseteq D$ is Riemann integrable.

For nonnegative $f$, its improper integral is the extended-real supremum of its compact Jordan integrals.

$$\int_D f:=\sup\left\{\int_K f:K\subseteq D\text{ is compact and Jordan measurable}\right\}\in[0,+\infty].$$

The supremum exists in $\overline{\mathbb R}$ by [[lem-extended-reals-complete]] and includes the empty compact set, whose integral is $0$.

For a signed locally Riemann-integrable $f$, set $f^+:=(|f|+f)/2$ and $f^-:=(|f|-f)/2$. These functions are locally integrable by the absolute-value and linearity clauses of [[thm-multidimensional-integral-properties]], and $|f|=f^++f^-$. The function $f$ is **absolutely improperly integrable** when $\int_D|f|<+\infty$. A locally Riemann-integrable signed function is improperly integrable precisely when the nonnegative improper integral of its absolute value is finite. In that case define

$$\int_D f:=\int_D f^+-\int_D f^-,$$

a difference of finite real numbers. Thus this exhaustion-independent signed convention has no $+\infty-(+\infty)$ branch.

## Remarks

Conditional one-variable improper integrals use a fixed order of approach to their endpoints. The definition here instead requires independence from compact Jordan exhaustions, so signed integrability is absolute in every dimension.
