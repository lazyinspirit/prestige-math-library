---
id: def-sample-partial-correlation
kind: definition
title: "Sample partial correlation by residualization"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-gaussian-partial-correlation
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, §2.2.2"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
verification:
  precheck: n/a
---

## Definition

Let $x^{(1)},\ldots,x^{(n)}\in\mathbb R^p$ be a sample, let $i\ne j$, and
let $S\subseteq\{1,\ldots,p\}\setminus\{i,j\}$. Let $\mathbf x_k\in\mathbb
R^n$ be the sample column for coordinate $k$, and let $\Pi_S$ be the orthogonal
projection onto the span of the all-ones vector and $\{\mathbf x_s:s\in S\}$.
When the sample covariance matrix of coordinates $\{i,j\}\cup S$ is positive
definite, define the residual columns
$$R_{i\mid S}=(I-\Pi_S)\mathbf x_i,\qquad R_{j\mid S}=(I-\Pi_S)\mathbf x_j.$$
The **sample partial correlation** is
$$\widehat\rho_{ij\mid S}=\frac{R_{i\mid S}^{T}R_{j\mid S}}{\|R_{i\mid S}\|_2\,\|R_{j\mid S}\|_2}.$$
For $-1<r<1$, the **Fisher transform** is
$g(r)=\frac12\log\frac{1+r}{1-r}$, and the sample Fisher statistic is
$Z_{ij\mid S}=g(\widehat\rho_{ij\mid S})$. For a test using multiplier
$\sqrt{n-|S|-3}$, require $n-|S|-3>0$ so that this factor is positive. Under independent samples
from a nondegenerate Gaussian law, the stated covariance block is positive
definite almost surely whenever $n-|S|-3>0$.

## Definition references

[[def-gaussian-partial-correlation]]
