---
id: ex-unbounded-derivative-evaluated-by-henstock-kurzweil
kind: example
title: "$F(x)=x^2\\sin(1/x^2)$ has an unbounded derivative whose Henstock–Kurzweil integral is $\\sin 1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-every-derivative-is-henstock-kurzweil-integrable, thm-chain-rule, thm-algebra-of-derivatives, thm-sine-and-cosine-derivatives, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, cor-trigonometric-parity-and-pythagorean-identity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
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

[L1] If $a<b$, $F:[a,b]\to\mathbb R$ is differentiable in the domain-relative sense, including at the endpoints, and $f=F'$, then $f$ is Henstock–Kurzweil integrable and $\int_a^b f=F(b)-F(a)$ ([[thm-every-derivative-is-henstock-kurzweil-integrable]]).

[L2] For every integer $m$, $\sin(\pi/2+2m\pi)=1$, $\sin(2m\pi)=0$, and $\cos(2m\pi)=1$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L3] If $g$ is differentiable at $x$ and $f$ is differentiable at $g(x)$, then the chain rule gives $(f\circ g)'(x)=f'(g(x))g'(x)$ ([[thm-chain-rule]]).

[L4] The product rule holds for differentiable real functions, and the quotient rule holds where the denominator is nonzero ([[thm-algebra-of-derivatives]]).

[L5] Sine and cosine have derivatives $\cos$ and $-\sin$ ([[thm-sine-and-cosine-derivatives]]).

[L6] For every real $u$, $|\sin u|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L3], [L4], and [L5] gives the displayed derivative for $x>0$, while [L6] gives $|F(x)/x|=|x\sin(1/x^2)|\le x\to0$ and hence $F'(0)=0$. For every natural $m\ge1$, at $x_m=1/\sqrt{2\pi m}$ the values in [L2] give $f(x_m)=-2/x_m$, which is unbounded. [given, L2, L3, L4, L5, L6, algebra]

2.1 Applying [L1] gives HK integrability and $\int_0^1f=F(1)-F(0)=\sin1$. [step 1.1, L1] ∎
