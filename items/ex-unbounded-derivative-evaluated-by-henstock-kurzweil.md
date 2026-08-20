---
id: ex-unbounded-derivative-evaluated-by-henstock-kurzweil
kind: example
title: "$F(x)=x^2\\sin(1/x^2)$ has an unbounded derivative whose Henstock–Kurzweil integral is $\\sin 1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-every-derivative-is-henstock-kurzweil-integrable, thm-chain-rule, thm-algebra-of-derivatives, thm-sine-and-cosine-derivatives, thm-quarter-turn-values-and-shift-formulas]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Section 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Example

Define $F(0)=0$ and $F(x)=x^2\sin(1/x^2)$ for $0<x\le1$. Then $F$ is differentiable on $[0,1]$ and

$$f(x)=F'(x)=2x\sin(1/x^2)-\frac{2}{x}\cos(1/x^2)\quad(x>0),\qquad f(0)=0.$$

$F(x)=x^2\sin(1/x^2)$ has an unbounded derivative whose Henstock–Kurzweil integral is $\sin 1$.

The derivative $f$ of $x^2\sin(1/x^2)$ is Henstock–Kurzweil integrable on $[0,1]$.

## Facts & Assumptions

**Given:** The displayed function $F$ and its derivative candidate $f$.

[L1] Every derivative is Henstock–Kurzweil integrable and its integral equals the endpoint increment ([[thm-every-derivative-is-henstock-kurzweil-integrable]]).

[L2] $\sin(\pi/2)=1$, and the quarter-turn identities give the corresponding integer-period values ([[thm-quarter-turn-values-and-shift-formulas]]).

[L3] The chain rule differentiates a composite as $(f\circ g)'=(f'\circ g)g'$ ([[thm-chain-rule]]).

[L4] The product and quotient rules hold for differentiable real functions ([[thm-algebra-of-derivatives]]).

[L5] Sine and cosine have derivatives $\cos$ and $-\sin$ ([[thm-sine-and-cosine-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L3], [L4], and [L5] gives the displayed derivative for $x>0$, while $F(x)/x=x\sin(1/x^2)\to0$ gives $F'(0)=0$; at $x_m=1/\sqrt{2\pi m}$, the shift formulas in [L2] give $f(x_m)=-2/x_m$, which is unbounded. [given, L2, L3, L4, L5, algebra]

2.1 Applying [L1] gives HK integrability and $\int_0^1f=F(1)-F(0)=\sin1$. [step 1.1, L1] ∎
