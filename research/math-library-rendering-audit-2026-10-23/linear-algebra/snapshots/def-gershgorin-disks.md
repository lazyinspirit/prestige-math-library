---
id: def-gershgorin-disks
kind: definition
title: "The Gershgorin disks of an endomorphism with respect to an ordered basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-coordinate-column-and-matrix-of-a-linear-map]
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Definition

Let $V$ be a finite-dimensional complex vector space, let $T:V\to V$ be
linear, and let $\mathcal B=(b_1,\dots,b_n)$ be an ordered basis. Write

$$[T]_{\mathcal B}^{\mathcal B}=(a_{ij}).$$

For each $1\le i\le n$, the **$i$-th Gershgorin disk** of $T$ with respect to
$\mathcal B$ is

$$D_i(T,\mathcal B):=\left\{z\in\mathbb C:\ |z-a_{ii}|\le \sum_{j\ne i}|a_{ij}|\right\}.$$

The union $\bigcup_{i=1}^n D_i(T,\mathcal B)$ is the **Gershgorin region** of
$T$ in the basis $\mathcal B$.
