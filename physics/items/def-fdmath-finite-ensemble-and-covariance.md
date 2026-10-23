---
id: def-fdmath-finite-ensemble-and-covariance
kind: definition
title: Finite weighted ensemble and covariance
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Glenn Flierl and Raffaele Ferrari, MIT OpenCourseWare 12.820, Turbulence in the Ocean and Atmosphere, Chapter 3 (Spring 2006 lecture notes)"
      url: "https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf"
    - title: "Gregory L. Eyink, Johns Hopkins University Turbulence Notes, Chapter VIb, §(B) Reynolds Averaging and kinetic-energy balances, pp. 17–19"
      url: "https://www.ams.jhu.edu/~eyink/Turbulence/notes/ChapterVIb.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Definition

Let $N\ge1$ be an integer and let $a_1,\ldots,a_N\in[0,\infty)$ satisfy $\sum_{j=1}^N a_j=1$. The fixed tuple $(a_1,\ldots,a_N)$ is a finite ensemble of weights. For integers $m,n\ge1$, let $X=(X_1,\ldots,X_N)\in(\mathbb R^m)^N$ and $Y=(Y_1,\ldots,Y_N)\in(\mathbb R^n)^N$. Define the weighted mean of $X$ and its $j$th fluctuation by

$$\bar X:=\sum_{j=1}^N a_jX_j,\qquad X'_j:=X_j-\bar X.$$

Using the same weights, define the cross-covariance tensor

$$C(X,Y):=\sum_{j=1}^N a_j X'_j\otimes Y'_j\in\mathbb R^{m\times n},$$

where $x\otimes y$ is the matrix with entries $(x\otimes y)_{rs}=x_r y_s$. The covariance tensor of $X$ is $C(X):=C(X,X)$. If $D$ is a set and $X_j:D\to\mathbb R^m$, $Y_j:D\to\mathbb R^n$ are functions, apply these formulas pointwise at each $q\in D$ using the same fixed weights. No probability space, limiting operation, or interpretation as an empirical sample is part of this definition.

## Definition references

[Flierl and Ferrari, MIT OCW 12.820, Chapter 3, §3.2 (joint moments and covariance), full lecture notes](https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf)

[Eyink, Johns Hopkins University Turbulence Notes, Chapter VIb, §(B) Reynolds Averaging and kinetic-energy balances, pp. 17–19](https://www.ams.jhu.edu/~eyink/Turbulence/notes/ChapterVIb.pdf)
