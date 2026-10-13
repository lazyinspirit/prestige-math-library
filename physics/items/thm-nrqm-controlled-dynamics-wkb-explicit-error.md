---
id: thm-nrqm-controlled-dynamics-wkb-explicit-error
aliases: [nrqm-controlled-dynamics-wkb-explicit-error]
kind: theorem
domain: mathematics
title: "WKB explicit error"
status: draft
origin: pipeline
dependency_level: 1
deps: [thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation, def-derivative, def-continuity-real, def-bochner-integrable-function, thm-continuous-implies-integrable, thm-ftc-first-part, thm-newton-leibniz-with-interior-derivative, thm-chain-rule, thm-complex-exponential-is-entire-with-derivative-itself]
dependency_roles:
  thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation: mathematical-premise
  def-derivative: mathematical-premise
  def-continuity-real: mathematical-premise
  def-bochner-integrable-function: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
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

**Given:** the data of [[thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation]], an exact solution $y\in C^2$, its coefficient curve $c\in C^1$, and $x\in[a,b]$.

[F1] $c'=Bc$ with $B$ continuous and $\|B(s)\|_1=h|q(s)|/p(s)$; hence $c(x)-c(a)=\int_a^xB(s)c(s)\,ds$ and $\|c(x)-c(a)\|_1\le\int_a^x\|B(s)\|_1\|c(s)\|_1ds$ ([[thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation]]).

[F2] Continuous scalar integrands on $[a,b]$ are Riemann integrable ([[thm-continuous-implies-integrable]]), their primitives have the integrand as derivative including endpoint derivatives ([[thm-ftc-first-part]]), and a $C^1$ function equals its initial value plus the integral of its derivative ([[thm-newton-leibniz-with-interior-derivative]]). The real chain rule is [[thm-chain-rule]], and $d(e^t)/dt=e^t$ is the real restriction of [[thm-complex-exponential-is-entire-with-derivative-itself]]. These license the integrating factor and its integral evaluation in step 1.1, which proves the needed Gronwall bound locally without citing a separate Gronwall theorem.

[F3] $|w_\pm(x)|=p(x)^{-1/2}$, and for $c=(c_+,c_-)$ one has $|w_+c_++w_-c_-|\le p^{-1/2}\|c\|_1$ ([[thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation]], algebra).

## Proof

1.1 [Gronwall estimate] Put $u(x):=\|c(x)\|_1$ and $v(s):=\|B(s)\|_1=h|q(s)|/p(s)$. By [F1], $u(x)\le u(a)+\int_a^xv(s)u(s)ds$; define $U(x):=u(a)+\int_a^xv(s)u(s)ds$, so $u\le U$, $U'=vu\le vU$, and $\frac{d}{dx}[e^{-\int_a^xv}U(x)]\le0$. Hence $u(x)\le U(x)\le u(a)\exp(\int_a^xv)$, including when $u(a)=0$, which proves (a) directly. For (b), use the separate difference estimate in [F1] and substitute the growth bound just proved: $\|c(x)-c(a)\|_1\le\int_a^xv(s)u(s)ds\le u(a)\int_a^xv(s)\exp(\int_a^sv)ds=u(a)(\exp(\int_a^xv)-1)$, where the last equality is the fundamental theorem of calculus applied to $s\mapsto\exp(\int_a^sv)$. This proves (b) without treating $c-c(a)$ as a homogeneous solution. [F1, F2, algebra]

2.1 [From coefficients to values] $y(x)-\Psi(x)=w_+(x)\bigl(c_+(x)-c_+(a)\bigr)+w_-(x)\bigl(c_-(x)-c_-(a)\bigr)$, so by [F3] $|y(x)-\Psi(x)|\le p(x)^{-1/2}\|c(x)-c(a)\|_1$, and inserting step 1.1 gives (c). [step 1.1, F3, algebra] ∎
