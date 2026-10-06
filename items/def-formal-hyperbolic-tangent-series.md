---
id: def-formal-hyperbolic-tangent-series
kind: definition
title: "The formal hyperbolic tangent series and the even series $x/\\tanh x$"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 0
deps:
  - def-formal-exponential-logarithm-and-powers
  - thm-formal-exponential-logarithm-identities
  - def-formal-power-series-and-coefficient-extraction
  - def-summable-family-of-formal-series
  - thm-formal-power-series-unit-criterion
  - def-formal-laurent-series-and-residue
justified_by:
  - lem-formal-tangent-and-artanh-series-are-compositional-inverses
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original p. 224: the L-polynomials belong to the power series $1 + t/3 - t^2/45 + \\cdots$"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 35: the power series expansion with coefficients given by Bernoulli numbers"
    - title: "Jacob Lurie, The Hirzebruch Signature Formula (Lecture 25, Harvard Math 287x notes)"
      url: "https://people.math.harvard.edu/~lurie/287xnotes/Lecture25.pdf"
      locator: "Lecture 25, PDF p. 1: the even series $\\tanh(H)/H$ in the rational power series ring"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Work in $\mathbb Q\llbracket x\rrbracket$ with the formal exponential and
logarithm of [[def-formal-exponential-logarithm-and-powers]] and the identities
of [[thm-formal-exponential-logarithm-identities]]. Define the **formal
hyperbolic tangent** and the **formal area hyperbolic tangent** by
$$T(x):=\frac{\exp(x)-\exp(-x)}{\exp(x)+\exp(-x)}\in\mathbb Q\llbracket x\rrbracket,\qquad A(z):=\sum_{j\ge0}\frac{z^{2j+1}}{2j+1}\in\mathbb Q\llbracket z\rrbracket.$$

The denominator $\exp(x)+\exp(-x)$ has constant term $2$, a unit of
$\mathbb Q$, so the quotient is a well-defined power series by
[[thm-formal-power-series-unit-criterion]]; $T(0)=0$ and the linear coefficient
of $T$ is $\tfrac12(1-(-1))/\tfrac12(1+1)=1$. Substituting $-x$ into the
defining quotient replaces the numerator by its negative and fixes the
denominator, so $T(-x)=-T(x)$: $T$ is odd. Hence
$$S(x):=\frac{T(x)}{x}\in\mathbb Q\llbracket x\rrbracket$$
is even with constant term $1$, and
$$Q(x):=\frac{x}{T(x)}=\frac{1}{S(x)}\in\mathbb Q\llbracket x^2\rrbracket,\qquad Q(x)=1+\frac{x^2}{3}-\frac{x^4}{45}+O(x^6).$$
The displayed coefficients of $Q$ are the normalisation recorded here; they are
verified in the inverse-series lemma following on this page, which is the
result named in `justified_by`.

The series $A$ is summable degreewise
([[def-summable-family-of-formal-series]]), $A(0)=0$, and its linear coefficient
is $1$; its coefficients are the evaluation of a family whose $j$-th term has
order $2j+1$, so no convergence question arises. The symbol $x/\tanh x$ used by
the sources denotes exactly the element $Q(x)$; no analytic convergence,
contour, or branch is involved. The residue calculus of
[[def-formal-laurent-series-and-residue]] applies to $T$ because $T=xS$ has
order $1$. No choice principle is used.
