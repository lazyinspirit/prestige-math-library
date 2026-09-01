---
id: ex-smoothing-a-continuous-circle-valued-map-through-an-annular-retraction
kind: example
title: "Smoothing a continuous circle-valued map through an annular retraction"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-whitney-approximation-for-manifold-valued-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Smooth Approximation of Maps Between Manifolds"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

Parametrize the circle by $e^{it}$ with $t\in[-\pi,\pi]$ and define
$$
F(e^{it})=e^{i|\sin(t/2)|}.
$$
This is continuous on $S^1$ but not smooth at $t=0$. Embedding the target
circle in $\mathbb R^2$, approximating the planar representative smoothly, and
then retracting through the standard annulus produces a smooth circle-valued
map homotopic to $F$.

## Facts & Assumptions

**Given:** The continuous map $F(e^{it})=e^{i|\sin(t/2)|}$ on $S^1$.

## Verification
**Proof technique:** direct.

1.1 The map $F$ is continuous and well defined because the endpoint values and derivatives at $t=\pm\pi$ agree. Near $t=0$, $|\sin(t/2)|$ has an absolute-value cusp, so $F$ fails to be smooth there. [given, algebra]

2.1 The manifold-valued Whitney approximation theorem [[thm-whitney-approximation-for-manifold-valued-maps]] applies with target $S^1$, using the annular tubular neighbourhood from the standard circle example. It therefore produces a smooth map $\widetilde F:S^1\to S^1$ homotopic to $F$. [step 1.1] ∎
