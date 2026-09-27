---
id: ex-smoothing-a-continuous-circle-valued-map-through-an-annular-retraction
kind: example
title: "Smoothing a continuous circle-valued map through an annular retraction"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: []
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Smooth Approximation of Maps Between Manifolds"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

Parametrize the circle by $e^{it}$ with $t\in[-\pi,\pi]$ and define
$$ F(e^{it})=e^{i|\sin(t/2)|}. $$
This is continuous on $S^1$ but not smooth at $t=0$. Embedding the target
circle in $\mathbb R^2$, approximating the planar representative smoothly, and
then retracting through the standard annulus produces a smooth circle-valued
map homotopic to $F$.

## Facts & Assumptions

**Given:** The continuous map $F(e^{it})=e^{i|\sin(t/2)|}$ on $S^1$.

## Verification
**Proof technique:** direct.

1.1 The map $F$ is continuous and well defined because the endpoint values and derivatives at $t=\pm\pi$ agree. Near $t=0$, $|\sin(t/2)|$ has an absolute-value cusp, so $F$ fails to be smooth there. [given, algebra]

2.1 Fix $0<\delta<1/2$ and put $g_\delta(t)=\sqrt{\sin^2(t/2)+\delta^2}-\delta$ and $H_\delta(e^{it})=(1-\delta)e^{ig_\delta(t)}$. Because $\sin^2(t/2)=(1-\cos t)/2$, the function $g_\delta$ is smooth and $2\pi$-periodic, so $H_\delta:S^1\to\mathbb R^2$ is smooth. Moreover, for $u=|\sin(t/2)|$ one has $0\le u-g_\delta(t)\le\delta$, giving $|H_\delta(e^{it})-F(e^{it})|\le2\delta$. Thus $H_\delta$ uniformly approximates the planar representative of $F$ as $\delta\downarrow0$. Its image lies in the annulus $1/2<|z|<3/2$. [step 1.1, construct, algebra]

3.1 The radial retraction $R(z)=z/|z|$ is smooth on that annulus, and $\widetilde F=R\circ H_\delta=e^{ig_\delta(t)}$ is a smooth circle-valued map. The formula $\mathcal H(e^{it},u)=\exp\!\left(i\bigl((1-u)|\sin(t/2)|+u g_\delta(t)\bigr)\right)$ for $0\le u\le1$ is continuous and $2\pi$-periodic in $t$, so it defines a homotopy on $S^1$ from $F$ to $\widetilde F$. This constructs the claimed smoothing and annular retraction directly. [step 1.1, step 2.1, construct, algebra] ∎
