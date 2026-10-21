---
id: def-ip-forward-map-and-solution-classes
kind: definition
title: Inverse-problem models and solution classes
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-metric-space
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 3, printed pp. 15–27"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Tristan van Leeuwen and Christoph Brune, 10 Lectures on Inverse Problems and Imaging, Lecture 1 §§1.2–1.3"
      url: "https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html"
verification:
  precheck: n/a
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces, called the **parameter space** and the **data space**. Let $U\subseteq X$ be a nonempty set of **admissible truths**, and let $F:U\to Y$ be a **forward map**. For $x\in U$, the datum $F(x)$ is its exact observation. For $y\in Y$, define the exact solution set

$$S_F(y):=\{x\in U:F(x)=y\}.$$

The datum $y$ is exactly solvable on $U$ when $S_F(y)\ne\varnothing$.

Let $\sim$ be an equivalence relation on $U$, meaning it is reflexive, symmetric, and transitive; truths equivalent under $\sim$ represent the same recovery target. A **metric solution-class space** for $(U,\sim)$ consists of a metric space $(Q,d_Q)$ and a function $q:U\to Q$ whose image is all of $Q$ and such that $q(x)=q(x')$ if and only if $x\sim x'$. The loss between two target classes is their metric distance $d_Q$. Exact recovery of the truth itself is the special case $Q=U$, $q(x)=x$, and $d_Q=d_X$ restricted to $U$.

## Definition references

[[def-metric-space|Metric-space axioms]]

[Christian Clason, Regularization of Inverse Problems, Chapter 3](https://arxiv.org/pdf/2001.00617v2)

[Tristan van Leeuwen and Christoph Brune, 10 Lectures on Inverse Problems and Imaging, Lecture 1](https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html)
