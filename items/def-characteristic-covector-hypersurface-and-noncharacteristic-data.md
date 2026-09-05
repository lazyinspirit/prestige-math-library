---
id: def-characteristic-covector-hypersurface-and-noncharacteristic-data
kind: definition
title: "Characteristic covectors, hypersurfaces, and noncharacteristic data"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-principal-part-and-principal-symbol-of-a-scalar-pde]
justified_by: [lem-characteristic-hypersurface-is-independent-of-defining-function]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Definition

Let $p_m(x,\xi)$ be the principal symbol of an order-$m$ scalar equation.

A nonzero covector $\xi\in T_x^*\Omega$ is **characteristic at $x$** when

$$p_m(x,\xi)=0.$$

If $\Sigma\subseteq\Omega$ is a $C^1$ hypersurface locally written as
$\Sigma\cap U=\{\phi=0\}$ with $d\phi\neq0$ on $\Sigma\cap U$, then $\Sigma$ is
**characteristic at $x\in\Sigma$** when its conormal $d\phi(x)$ is
characteristic, and **noncharacteristic at $x$** otherwise.

Accordingly, Cauchy data prescribed on $\Sigma$ are **noncharacteristic near
$x$** when the defining conormal is nowhere characteristic there.
