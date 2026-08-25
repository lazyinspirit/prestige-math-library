---
id: def-integration-and-index-of-complex-chain
kind: definition
title: "Integration over a complex chain and the index of a chain"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-chain-and-cycle, def-winding-number-closed-complex-contour, def-complex-line-integral-over-a-rectifiable-path, thm-existence-of-complex-line-integrals-on-rectifiable-paths, prop-linearity-of-complex-line-integrals, def-finite-sum-in-a-commutative-monoid, thm-complex-numbers-form-a-field, thm-algebra-of-complex-derivatives, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Definition

Let $\Gamma=\sum_{k<r}m_k\gamma_k$ be a complex chain
([[def-complex-chain-and-cycle]]) with trace $\Gamma^\ast$, and let $f$ be
continuous on $\Gamma^\ast$. The **integral of $f$ over $\Gamma$** is

$$\int_\Gamma f(z)\,dz:=\sum_{\substack{k<r\\ m_k\ne0}}m_k\int_{\gamma_k}f(z)\,dz,$$

a finite sum ([[def-finite-sum-in-a-commutative-monoid]]) of the complex line
integrals of [[def-complex-line-integral-over-a-rectifiable-path]]. Each summand
exists: for $k$ with $m_k\ne0$ the trace $\gamma_k^\ast$ is contained in
$\Gamma^\ast$, so $f$ is continuous on it, and $\gamma_k$ is rectifiable, so
[[thm-existence-of-complex-line-integrals-on-rectifiable-paths]] applies. Terms
with $m_k=0$ are omitted, so no integral of $f$ over a contour outside the trace
is required. The empty chain, and any chain all of whose coefficients vanish,
give $\int_\Gamma f\,dz=0$.

For $p\in\mathbb C\setminus\Gamma^\ast$, the **index of $\Gamma$ about $p$** is

$$n(\Gamma,p):=\frac1{2\pi i}\int_\Gamma\frac{dz}{z-p}.$$

This is defined: $z\mapsto 1/(z-p)$ is complex differentiable, hence continuous,
on $\mathbb C\setminus\{p\}\supseteq\Gamma^\ast$ by
[[thm-algebra-of-complex-derivatives]] and
[[cor-complex-differentiability-implies-continuity]].

## Remarks

**The notation is consistent with the single-contour case.** If $r=1$, $m_0=1$
and $\gamma_0$ is closed, then $\Gamma^\ast=\gamma_0^\ast$, the sum has the one
term $\int_{\gamma_0}f\,dz$, and $n(\Gamma,p)$ is the winding number
$n(\gamma_0,p)$ of [[def-winding-number-closed-complex-contour]] for every
$p\notin\gamma_0^\ast$. So writing $n$ for both costs no ambiguity.

**Linearity in the integrand** is inherited termwise from
[[prop-linearity-of-complex-line-integrals]], finite sums in the additive
commutative monoid of $\mathbb C$ ([[def-finite-sum-in-a-commutative-monoid]]),
and distributivity in the complex field ([[thm-complex-numbers-form-a-field]]): for $f,g$ continuous on
$\Gamma^\ast$ and $\alpha,\beta\in\mathbb C$,
$\int_\Gamma(\alpha f+\beta g)\,dz=\alpha\int_\Gamma f\,dz+\beta\int_\Gamma g\,dz$.

**The index is not defined on the trace.** For $p\in\Gamma^\ast$ the integrand is
undefined at $z=p$, and no value is assigned; every statement about
$n(\Gamma,\cdot)$ below carries the hypothesis $p\notin\Gamma^\ast$.
