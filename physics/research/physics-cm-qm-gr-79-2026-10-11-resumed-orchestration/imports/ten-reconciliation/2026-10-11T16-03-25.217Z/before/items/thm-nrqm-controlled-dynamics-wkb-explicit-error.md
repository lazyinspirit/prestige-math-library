---
id: thm-nrqm-controlled-dynamics-wkb-explicit-error
aliases: [nrqm-controlled-dynamics-wkb-explicit-error]
kind: theorem
domain: mathematics
title: "WKB explicit error"
status: draft
origin: pipeline
dependency_level: 1
deps: [thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation, def-derivative, def-continuity-real, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-bochner-integrable-function]
dependency_roles:
  thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation: mathematical-premise
  def-derivative: mathematical-premise
  def-continuity-real: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  def-bochner-integrable-function: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), The WKB Approximation pp. 70-73 (validity of the WKB approximation in the classically allowed region)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "F. W. J. Olver, Asymptotics and Special Functions, Chapter 6 (error bounds for the Liouville-Green approximation; survey via DLMF Chapter 2, https://dlmf.nist.gov/2)"
      url: "https://dlmf.nist.gov/2"
---

## Statement

Adopt the hypotheses and notation of
[[thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation]]: $p\in
C^2([a,b])$ positive, $h>0$, $\theta(x)=\int_a^xp$, $w_\pm=p^{-1/2}e^{\pm
i\theta/h}$, $q=\frac{3p'^2}{4p^2}-\frac{p''}{2p}$, $M$ the fundamental matrix
of $(w_+,w_-)$ and $c=M^{-1}(y,y')^{\mathsf T}$ the coefficient curve of an exact
solution $y\in C^2([a,b])$ of $y''+\frac{p^2}{h^2}y=0$. Then for every
$x\in[a,b]$:

(a) *Growth bound.* $\|c(x)\|_1\le\|c(a)\|_1\exp\Bigl(h\displaystyle\int_a^x
\frac{|q(s)|}{p(s)}\,ds\Bigr)$.

(b) *Deviation bound.*
$$\|c(x)-c(a)\|_1\le\|c(a)\|_1\Bigl(\exp\Bigl(h\int_a^x\frac{|q(s)|}{p(s)}\,ds\Bigr)-1\Bigr).$$

(c) *Pointwise wavefunction error.* With $\Psi(x):=c_+(a)w_+(x)+c_-(a)w_-(x)$
the leading WKB wave,
$$|y(x)-\Psi(x)|\le p(x)^{-1/2}\|c(a)\|_1\Bigl(\exp\Bigl(h\int_a^x\frac{|q(s)|}{p(s)}\,ds\Bigr)-1\Bigr).$$

The estimate degenerates as $p\to0$ (turning points are excluded by the
hypotheses) and asserts nothing about connecting asymptotics across a turning
point; it is an explicit finite-interval error bound of Gronwall type.

## Facts & Assumptions

**Given:** the data of
[[thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation]], an
exact solution $y\in C^2$, its coefficient curve $c\in C^1$, and $x\in[a,b]$.

[F1] $c'=Bc$ with $B$ continuous and $\|B(s)\|_1=h|q(s)|/p(s)$; hence $c(x)-c(a)=\int_a^xB(s)c(s)\,ds$ and $\|c(x)-c(a)\|_1\le\int_a^x\|B(s)\|_1\|c(s)\|_1ds$ ([[thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation]], [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

[F2] Gronwall's inequality in integral form: if continuous $u\ge0$, $v\ge0$ satisfy $u(x)\le u(a)+\int_a^xv(s)u(s)ds$ then $u(x)\le u(a)\exp(\int_a^xv)$ ([[def-derivative]], [[def-continuity-real]]).

[F3] $|w_\pm(x)|=p(x)^{-1/2}$, and for $c=(c_+,c_-)$ one has $|w_+c_++w_-c_-|\le p^{-1/2}\|c\|_1$ ([[thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation]], algebra).

## Proof

1.1 [Gronwall estimate] Put $u(x):=\|c(x)\|_1$ and $v(s):=\|B(s)\|_1=h|q(s)|/p(s)$. By [F1], $u(x)\le u(a)+\int_a^xv(s)u(s)ds$; then $u(x)\le u(a)\exp(\int_a^xv)$ by [F2], which is (a). Subtracting $u(a)$ on both sides of the same inequality (or applying the estimate to the function $c(x)-c(a)$, which satisfies the same integral identity by [F1]) gives $\|c(x)-c(a)\|_1\le u(a)(\exp(\int_a^xv)-1)$, which is (b). [F1, F2, algebra]

2.1 [From coefficients to values] $y(x)-\Psi(x)=w_+(x)\bigl(c_+(x)-c_+(a)\bigr)+w_-(x)\bigl(c_-(x)-c_-(a)\bigr)$, so by [F3] $|y(x)-\Psi(x)|\le p(x)^{-1/2}\|c(x)-c(a)\|_1$, and inserting step 1.1 gives (c). [step 1.1, F3, algebra] ∎
