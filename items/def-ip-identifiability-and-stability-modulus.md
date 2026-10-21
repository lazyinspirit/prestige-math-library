---
id: def-ip-identifiability-and-stability-modulus
kind: definition
title: Identifiability and stability moduli
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-forward-map-and-solution-classes
  - def-metric-space
  - lem-metric-nonnegativity
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 3 §§3.1–3.2 and Chapter 4 §4.1"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Tristan van Leeuwen and Christoph Brune, 10 Lectures on Inverse Problems and Imaging, Lecture 1 §§1.2–1.3"
      url: "https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html"
verification:
  precheck: n/a
---

## Definition

Use metric spaces $(X,d_X)$ and $(Y,d_Y)$, a nonempty admissible truth class $U\subseteq X$, a forward map $F:U\to Y$, and a metric solution-class space $(Q,d_Q)$ with class map $q:U\to Q$ as follows: $q$ has image all of $Q$, and $q(x)=q(x')$ exactly when $x$ and $x'$ are equivalent for recovery. The library's metric axioms imply nonnegative metric values.

The forward map $F$ is **identifiable modulo the recovery equivalence on $U$** if

$$x,x'\in U\text{ and }F(x)=F(x')\quad\Longrightarrow\quad q(x)=q(x').$$

It is nonidentifiable modulo that equivalence if some two admissible truths have equal data and distinct target classes.

A **deterministic data-only estimator** is a function $\widehat q:Y\to Q$. It is exact on $U$ if $\widehat q(F(x))=q(x)$ for every $x\in U$. The diagram below commutes exactly under this condition; it states the defining equality of functions and is not a proof device.

```tikzcd
U \arrow[r,"F"] \arrow[dr,"q"'] & Y \arrow[d,"\widehat q"] \\
& Q
```

A **uniform stability modulus on $U$** is a nondecreasing function $\omega:[0,\infty)\to[0,\infty)$, with $\omega(0)=0$ and $\lim_{t\downarrow0}\omega(t)=0$, such that

$$d_Q(q(x),q(x'))\le\omega\bigl(d_Y(F(x),F(x'))\bigr)\qquad(x,x'\in U).$$

Identifiability concerns equality of exact data; the modulus is a separate quantitative bound for all truth pairs. The estimator definition specifies no regularization procedure or convergence guarantee.

## Definition references

[[def-ip-forward-map-and-solution-classes|Inverse-problem model and solution-class interface]]

[[def-metric-space|Metric-space axioms]]

[[lem-metric-nonnegativity|Nonnegative values of metric distances]]

[Christian Clason, Regularization of Inverse Problems, Chapter 3 §§3.1–3.2 and Chapter 4 §4.1](https://arxiv.org/pdf/2001.00617v2)

[Tristan van Leeuwen and Christoph Brune, 10 Lectures on Inverse Problems and Imaging, Lecture 1 §§1.2–1.3](https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html)
