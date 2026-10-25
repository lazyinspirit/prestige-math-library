---
id: def-plane-harmonic-function
kind: definition
title: "Plane harmonic functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Definition

Let $\Omega\subseteq\mathbb C$ be open, and write $z=x+iy$ for the real
coordinates on $\mathbb C=\mathbb R^2$. A real-valued function
$u:\Omega\to\mathbb R$ is **harmonic** on $\Omega$ when $u$ is of class $C^2$
and satisfies Laplace's equation

$$u_{xx}+u_{yy}=0$$

throughout $\Omega$.

## Remarks

This page is plane-specific: the Laplacian is the two-variable operator
$\partial_x^2+\partial_y^2$, and later pages generalize the theory to higher
dimensions.

The function is real-valued by convention. Complex-valued harmonic maps are
handled componentwise by asking both real coordinates to be harmonic.
