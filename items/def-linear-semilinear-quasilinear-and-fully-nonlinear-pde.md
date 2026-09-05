---
id: def-linear-semilinear-quasilinear-and-fully-nonlinear-pde
kind: definition
title: "Linear, semilinear, quasilinear, and fully nonlinear partial differential equations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-partial-differential-operator-order-and-solution]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Definition

Consider an order-$m$ scalar PDE on $\Omega$.

It is **linear** when it has the form

$$\sum_{|\alpha|\le m} a_\alpha(x)D^\alpha u(x)=f(x),$$

so every jet variable enters affinely and with coefficients depending only on
$x$.

It is **semilinear** when the top-order derivatives enter linearly with
coefficients depending only on $x$, while lower-order terms may depend
nonlinearly on $(u,Du,\ldots,D^{m-1}u)$.

It is **quasilinear** when the top-order derivatives still enter linearly, but
their coefficients may depend on $(x,u,Du,\ldots,D^{m-1}u)$.

It is **fully nonlinear** when the dependence on the order-$m$ jet is not
affine. Thus semilinear and quasilinear equations are affine in the top-order
variables after the lower jet is fixed, whereas fully nonlinear equations are
not. The classification is by dependence on the highest-order jet, not by how
the equation happens to be typeset.
