---
id: cor-runge-polynomial-approximation
kind: corollary
title: "Runge polynomial approximation when the complement is connected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-runge-approximation-with-prescribed-poles]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.1 and Corollary 9.2.6"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, Corollary 4.4.5"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $K\subseteq\mathbb C$ be compact and let $\widehat{\mathbb C}\setminus K$ be
connected. If $f$ is holomorphic on a neighbourhood of $K$, then for every
$\varepsilon>0$ there is a polynomial $p$ such that

$$\sup_{z\in K}|f(z)-p(z)|<\varepsilon.$$

## Facts & Assumptions

**Given:** A compact set $K$ with connected complement and a holomorphic
function $f$ on a neighbourhood of $K$.

[L1] Runge approximation holds for every pole set meeting each complementary
component ([[thm-runge-approximation-with-prescribed-poles]]).

## Proof

**Proof technique:** direct.

1.1 Since $\widehat{\mathbb C}\setminus K$ is connected, the singleton $P=\{\infty\}$ meets its unique complementary component. Applying [L1] with that pole set gives rational approximants whose only possible pole is at $\infty$. [given, L1]
2.1 If $r=P/Q$ is such a rational function in lowest terms and $Q$ has positive degree, then a zero of $Q$ would give a finite pole of $r$. Therefore $Q$ is constant, so $r$ is a polynomial. Hence the approximants from step 1.1 are polynomials. [step 1.1, algebra] ∎