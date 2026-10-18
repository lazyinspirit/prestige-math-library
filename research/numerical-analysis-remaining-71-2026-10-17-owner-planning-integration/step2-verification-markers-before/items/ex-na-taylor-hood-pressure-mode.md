---
id: ex-na-taylor-hood-pressure-mode
kind: example
title: "A Taylor-Hood local pressure mode on a right triangle"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: constructive
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 54 (complete course notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf
      locator: "Chapter 54, §§54.1–54.2, MINI Fortin map and the P1+bubble/P1 pair."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 8, §§8.4.2, 8.5.5, 8.6.1, 8.7.1 and 8.10."
---

## Statement

On the reference right triangle $K=\{(x,y):x\ge0,y\ge0,x+y\le1\}$, let $q(x,y)=x-1/3$ and $v(x,y)=(x^2,0)$. Then $q$ has zero cell mean and the local Stokes pairing is $-\int_Kq\operatorname{div}v=-1/18$. This is a local mode-detection calculation only; it proves no global Taylor–Hood stability theorem.

## Facts & Assumptions

**Given:** The right triangle, the displayed local polynomials, and $b_K(v,q):=-\int_Kq\operatorname{div}v$.

## Example

The pressure has zero cell mean and its local Stokes pairing is computed exactly.

## Verification

**Proof technique:** direct integration.

1.1 The triangle area is $1/2$, and $\int_Kx=\int_0^1x(1-x)dx=1/6$, so $\int_Kq=1/6-(1/3)(1/2)=0$. Also $\operatorname{div}v=2x$. [given, algebra, construct]

2.1 Direct integration gives $\int_Kx^2=\int_0^1x^2(1-x)dx=1/12$; hence $b_K(v,q)=-2(\int_Kx^2-\frac13\int_Kx)=-2(\frac1{12}-\frac1{18})=-\frac1{18}$. This nonzero local pairing detects that polynomial pressure mode against this polynomial velocity; no boundary condition or global mesh stability is asserted. [given, algebra, discharge-construct, step 1.1] ∎
