---
id: def-cauchy-principal-value-subtraction
kind: definition
title: Symmetric Cauchy principal value by subtraction
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [lem-c1-divided-difference-extends-continuously, def-higher-derivatives-and-smoothness, def-natural-logarithm]
justified_by: [thm-cauchy-principal-value-subtraction-identity]
axiom_use: None. This is a limit definition; its existence is proved for C1 data.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Lloyd N. Trefethen and J. A. C. Weideman, The Exponentially Convergent Trapezoidal Rule, SIAM Review 56(3), 2014
      url: https://people.maths.ox.ac.uk/trefethen/publication/PDF/2014_149.pdf
      locator: §5.19, the symmetric Cauchy principal value and subtraction of the pole value.
---

## Definition

Let $a<c<b$ and $f\in C^1([a,b])$. The **symmetric Cauchy principal value** of $f(x)/(x-c)$, when the limit exists, is
$$\operatorname{PV}\!\int_a^b\frac{f(x)}{x-c}\,dx:=\lim_{\varepsilon\downarrow0}\left(\int_a^{c-\varepsilon}\frac{f(x)}{x-c}\,dx+\int_{c+\varepsilon}^b\frac{f(x)}{x-c}\,dx\right),$$
where $0<\varepsilon<\min(c-a,b-c)$. [[lem-c1-divided-difference-extends-continuously]] supplies the continuous subtraction remainder; the existence and value of the limit are proved in [[thm-cauchy-principal-value-subtraction-identity]].
