---
id: ex-left-preconditioned-residual-can-understate-physical-residual
kind: example
title: "A small left-preconditioned residual can hide a large physical residual"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps
  - def-field
  - def-ordered-field
  - def-abs-value
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §9.3.4, printed pp. 285–286"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods, 2nd ed., §3.1.2, printed pp. 35–36"
      url: "https://www.netlib.org/templates/templates.pdf"
dependency_level: 0
---

## Example

For any ordered field $F$ and $0<\epsilon<1$, take the scalar system
$A=[1]$, $M=[\epsilon^{-1}]$, $b=[1]$, and trial value $x=0$. The physical
residual has absolute value $1$, while the left-preconditioned residual has
absolute value $\epsilon$.

## Facts & Assumptions

**Given:** An ordered field $F$, a scalar $0<\epsilon<1$, and the scalar linear
system $Ax=b$ with $A=1$, preconditioner $M=\epsilon^{-1}$, right-hand side
$b=1$, and trial value $x=0$.

[F1] [[prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps]]: for invertible $M$, the left-preconditioned residual is $M^{-1}r$, where $r=b-Ax$.

[F2] [[def-field]]: every nonzero field element has a multiplicative inverse.

[F3] [[def-ordered-field]]: the hypothesis $0<\epsilon<1$ gives $0<\epsilon$ and $0<1-\epsilon$, so $\epsilon$ and $1-\epsilon$ lie in the positive cone; closure under addition gives $1=\epsilon+(1-\epsilon)>0$ as well.

[F4] [[def-abs-value]]: if $z\ge0$ then $|z|=z$.

## Verification

1.1 Since $\epsilon>0$, it is nonzero; [F2] gives its inverse $\epsilon^{-1}$. With $M=\epsilon^{-1}$, commutativity gives $M\epsilon=\epsilon M=1$, so $M^{-1}=\epsilon$. The physical residual is $r=b-Ax=1-1\cdot0=1$. [given, F2, F3, algebra]

2.1 By [F1], the left-preconditioned residual is $M^{-1}r=\epsilon$. Both $1$ and $\epsilon$ are positive by [F3], so [F4] gives absolute values $1$ and $\epsilon$, respectively. [F1, F3, F4, step 1.1, algebra]

3.1 Since $0<\epsilon<1$, the left-preconditioned residual has strictly smaller absolute value than the physical residual. The ratio can be made as small as the chosen $\epsilon$. [given, step 1.1, step 2.1, algebra] ∎
