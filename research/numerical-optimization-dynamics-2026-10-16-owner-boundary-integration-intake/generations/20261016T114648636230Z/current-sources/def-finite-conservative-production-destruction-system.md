---
id: def-finite-conservative-production-destruction-system
kind: definition
title: "Finite conservative production destruction systems"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stefan Kopecz and Andreas Meister, On order conditions for modified Patankar-Runge-Kutta schemes, §1"
      url: "https://arxiv.org/pdf/1702.04589"
    - title: "Sergio Blanes, Arieh Iserles, and Shev Macnamara, Positivity-preserving methods for ordinary differential equations, §3.4"
      url: "https://personales.upv.es/serblaza/2022_M2AN.pdf"
verification:
  precheck: n/a
---

## Definition

Fix an integer $m\ge1$ and a domain $\Omega\subseteq\mathbb R^m$; its admissible nonnegative states are $\Omega_+:=\Omega\cap[0,\infty)^m$. For every ordered pair $i,j\in\{1,\ldots,m\}$ let $p_{ij},d_{ij}:\Omega\to\mathbb R$ be production and destruction transfer rates that are nonnegative on $\Omega_+$. A **finite conservative production destruction system** (finite conservative PDS) is the autonomous ODE

$$y_i'=F_i(y):=\sum_{j=1}^m\bigl(p_{ij}(y)-d_{ij}(y)\bigr),\qquad i=1,\ldots,m,$$

with internal-transfer identities

$$p_{ij}(y)=d_{ji}(y),\qquad p_{ii}(y)=d_{ii}(y)=0.$$

The index $j$ is the donor/source of $p_{ij}$ and the index $i$ is its recipient/destination; $d_{ji}$ is the same transfer viewed as destruction from $j$. The total mass is $M(y):=\sum_{i=1}^m y_i$. The ODE is considered at states in $\Omega_+$. The definition describes a closed system: external sources and sinks must be specified separately and are not included in the conservation claims on this page. No existence, positivity, or regularity assertion about solutions is part of this definition.
