---
id: def-continuous-argument-and-holomorphic-logarithm-branches
kind: definition
title: "Continuous logarithms and continuous arguments along a contour"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-contours-reversal-concatenation-and-closedness, def-complex-exponential, def-complex-logarithms-principal-logarithm-and-complex-powers, thm-kernel-and-fibres-of-complex-exponential, def-complex-conjugate-real-imaginary-part-and-modulus, def-complex-differentiability-holomorphic-and-entire]
justified_by: [thm-continuous-logarithms-exist-along-a-contour]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.1"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Definition

Let $\gamma:[a,b]\to\mathbb C$ be a complex contour
([[def-complex-contours-reversal-concatenation-and-closedness]]) with trace
$\gamma^\ast$, and let $p\in\mathbb C$ with $p\notin\gamma^\ast$.

A **continuous logarithm of $\gamma-p$ along $\gamma$** is a continuous function
$\lambda:[a,b]\to\mathbb C$ with

$$\exp(\lambda(t))=\gamma(t)-p\qquad\text{for every }t\in[a,b],$$

the exponential being that of [[def-complex-exponential]]. The associated
**continuous argument of $\gamma-p$ along $\gamma$** is
$\theta:=\operatorname{Im}\lambda:[a,b]\to\mathbb R$
([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

Let $V\subseteq\mathbb C$ be open with $p\notin V$. A **holomorphic logarithm
branch of $z-p$ on $V$** is a holomorphic function $L:V\to\mathbb C$
([[def-complex-differentiability-holomorphic-and-entire]]) with

$$\exp(L(z))=z-p\qquad\text{for every }z\in V.$$

## Remarks

These are two different objects and only the first is unconditional. A
continuous logarithm along $\gamma$ is a function of the **parameter** $t$; it
exists for every complex contour missing $p$, and prescribing the single value
$\lambda(a)$ among the complex numbers whose exponential is $\gamma(a)-p$
determines it, both by [[thm-continuous-logarithms-exist-along-a-contour]]. A
holomorphic logarithm branch is a function on a **plane set**, and for a general
open $V$ missing $p$ there need be none.

Along a contour, whose parameter interval is connected, two continuous
logarithms differ by one additive constant in $2\pi i\mathbb Z$. On a general
open set $V$, two holomorphic branches differ by a locally constant
$2\pi i\mathbb Z$-valued function, hence by one such constant on each connected
component; a single global constant is forced only when $V$ is connected. This
follows from $\ker(\exp)=2\pi i\mathbb Z$
([[thm-kernel-and-fibres-of-complex-exponential]]). For $p=0$ and $V$ the slit
plane, [[def-complex-logarithms-principal-logarithm-and-complex-powers]] names
the principal logarithm; its holomorphy on that domain is proved later on this
page.

A continuous argument $\theta$ carries no normalisation of its own: adding
$2\pi k$ to $\theta$ for a fixed integer $k$ replaces $\lambda$ by
$\lambda+2\pi ik$, which is again a continuous logarithm. What is unambiguous is
the **increment** $\theta(b)-\theta(a)$, since the two choices differ by the same
constant at both endpoints.
