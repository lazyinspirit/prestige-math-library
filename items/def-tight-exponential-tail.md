---
id: def-tight-exponential-tail
kind: definition
title: "Tight exponential tail for a positive loss derivative"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Daniel Soudry et al., The Implicit Bias of Gradient Descent on Separable Data, Definition 2"
      url: "https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf"
---

## Definition

A function $f:\mathbb R\to\mathbb R$ has a **tight exponential tail** if there are positive constants $c,a,\mu_+,\mu_-,u_+,u_->0$ such that

$$f(u)\le c\bigl(1+e^{-\mu_+u}\bigr)e^{-au}\quad(u>u_+),$$

and

$$f(u)\ge c\bigl(1-e^{-\mu_-u}\bigr)e^{-au}\quad(u>u_-).$$

For a differentiable strictly decreasing loss $\ell$, the source applies this definition to $f=-\ell'$, the negative loss derivative.

## Definition references

[Daniel Soudry et al., *The Implicit Bias of Gradient Descent on Separable Data*, Definition 2](https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf)
