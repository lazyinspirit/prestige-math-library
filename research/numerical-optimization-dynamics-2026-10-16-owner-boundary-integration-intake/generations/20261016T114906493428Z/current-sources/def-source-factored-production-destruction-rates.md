---
id: def-source-factored-production-destruction-rates
kind: definition
title: "Source-factored transfer rates for zero compartments"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-finite-conservative-production-destruction-system
  - def-ck-and-multi-index-notation-in-several-variables
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stefan Kopecz and Andreas Meister, On order conditions for modified Patankar-Runge-Kutta schemes, §2"
      url: "https://arxiv.org/pdf/1702.04589"
    - title: "Sergio Blanes, Arieh Iserles, and Shev Macnamara, Positivity-preserving methods for ordinary differential equations, §3.4"
      url: "https://personales.upv.es/serblaza/2022_M2AN.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(p_{ij},d_{ij})$ be the rates of a finite conservative PDS [[def-finite-conservative-production-destruction-system]]. A **source-factored transfer representation** on an open set $U\subseteq\Omega\subseteq\mathbb R^m$ containing a compact set $K\subseteq[0,\infty)^m$ consists of functions $a_{ij}:U\to\mathbb R$, $i\ne j$, such that each $a_{ij}$ is $C^2$ on the open subset $U\subseteq\mathbb R^m$ in the multivariable sense of [[def-ck-and-multi-index-notation-in-several-variables]], is nonnegative on $U\cap[0,\infty)^m$, and, for every $y\in U\cap[0,\infty)^m$,

$$p_{ij}(y)=y_j a_{ij}(y),\qquad d_{ij}(y)=y_i a_{ji}(y),\qquad a_{ii}:=0.$$

Here $a_{ij}$ is the transfer rate from donor $j$ to recipient $i$ per unit of donor quantity. Nonnegativity is required on admissible nonnegative states; the $C^2$ extension to the open neighborhood is used for local analysis and need not be nonnegative at inadmissible states with negative coordinates. The factorization is an additional hypothesis, not a consequence of nonnegative rates and the identity $p_{ij}=d_{ji}$. On strictly positive states the ratio $p_{ij}(y)/y_j$ equals $a_{ij}(y)$; at a zero donor coordinate the factorized coefficient remains defined and avoids the indeterminate expression $0/0$.
