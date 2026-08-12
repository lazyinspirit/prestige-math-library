---
id: ex-sparse-spikes-ftc-conclusion-at-a-discontinuity
kind: example
title: "The indicator of $\\{1,1/2,1/4,1/8,\\ldots\\}$ is discontinuous at $0$, but its integral function has derivative $0=f(0)$ there"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-riemann-criterion, def-the-integral-function, lem-geometric-sequence-null]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann integral"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

## Example

Define $f:[0,1]\to\mathbb R$ by

$$f(x)=\begin{cases}1,&x=2^{-n}\text{ for some integer }n\ge0,\\0,&\text{otherwise.}\end{cases}$$

Then $f$ is Riemann integrable with integral zero on every subinterval. Its integral function $F(x)=\int_0^x f$ is therefore identically zero, so $F'(0)=0=f(0)$, although $f$ is discontinuous at $0$.

## Facts & Assumptions

**Given:** The sparse-spike function $f$.

[L1] The geometric sequence $2^{-n}$ tends to $0$ ([[lem-geometric-sequence-null]]).

[L2] A bounded function is integrable exactly when, for every $\varepsilon>0$, some partition has upper-minus-lower sum below $\varepsilon$ ([[thm-riemann-criterion]]).

[L3] The integral function is $F(x)=\int_0^x f$ ([[def-the-integral-function]]).

## Verification

**Proof technique:** direct.

1.1 The function is bounded between $0$ and $1$, and every nondegenerate interval contains a point outside the countable spike set, so every lower Darboux sum is $0$. [given, construct]

1.2 Given $\varepsilon>0$, choose $N$ with $2^{-N}<\varepsilon/2$ by [L1]. Put the finitely many spikes $1,2^{-1},\ldots,2^{-(N-1)}$ in partition intervals of total length below $\varepsilon/2$, and put all remaining spikes in $[0,2^{-N}]$. The resulting upper sum is below $\varepsilon$. [given, L1, construct]

2.1 By [L2], $f$ is integrable, and steps 1.1--1.2 force its integral to be $0$. The same construction after restriction gives integral $0$ on every subinterval. [step 1.1, step 1.2, L2]

3.1 By [L3] and step 2.1, $F(x)=0$ for every $x$, so its relative derivative at $0$ is $0$. [step 2.1, L3]

4.1 Along the spike sequence $2^{-n}\to0$, the values are $1$, while $f(0)=0$; thus $f$ is discontinuous at $0$ and $F'(0)=0=f(0)$. [given, step 3.1, L1] ∎
