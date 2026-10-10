---
id: lem-em-interface-wave-linear-system
kind: lemma
title: "The two-equation interface system at normal incidence"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [lem-em-period-average, def-complex-conjugate-real-imaginary-part-and-modulus, def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field, thm-of-square-roots, def-complete-ordered-field]
dependency_roles:
  lem-em-period-average: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-complete-ordered-field: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Electromagnetism lecture notes (UT Austin), Reflection at a dielectric boundary, Eqs. (1210)-(1232)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node104.html"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $\varepsilon_j,\mu_j>0$ be real for $j=1,2$, put $Z_j:=\sqrt{\mu_j/\varepsilon_j}$ for the nonnegative square root of [[thm-of-square-roots]], and let $E_i,E_r,E_t\in\mathbb C$ with $E_i\ne0$ satisfy the two linear equations

$$E_i+E_r=E_t,\qquad \frac{E_i-E_r}{Z_1}=\frac{E_t}{Z_2}.$$

Then

$$\frac{E_r}{E_i}=\frac{Z_2-Z_1}{Z_2+Z_1},\qquad \frac{E_t}{E_i}=\frac{2Z_2}{Z_1+Z_2},$$

and the real numbers $R:=\bigl\lvert E_r/E_i\bigr\rvert^2$ and $T:=\bigl(Z_1/Z_2\bigr)\bigl\lvert E_t/E_i\bigr\rvert^2$ satisfy

$$R+T=1 .$$

The two displayed equations are assumptions, not derived from any wave or field model; the ratio definitions of $R$ and $T$ are algebraic, and no electromagnetic validity is asserted. Oblique incidence, complex impedance and anisotropic media require further systems and branch conventions and are outside this statement.

## Facts & Assumptions

**Given:** Real numbers $\varepsilon_j,\mu_j>0$ for $j=1,2$, the square roots $Z_j=\sqrt{\mu_j/\varepsilon_j}$, and complex numbers $E_i,E_r,E_t$ with $E_i\ne0$ satisfying $E_i+E_r=E_t$ and $(E_i-E_r)/Z_1=E_t/Z_2$.

[L1] Square roots and positivity: for real $x\ge0$ there is a unique $s\ge0$ with $s^2=x$, written $\sqrt x$, and $x>0$ implies $\sqrt x>0$; also $\sqrt{x^2}=x$ for $x\ge0$ ([[thm-of-square-roots]]). Order and field arithmetic in $\mathbb R$ are those of [[def-complete-ordered-field]]: sums and products of positive reals are positive, a positive real is nonzero, and $\mathbb R\subseteq\mathbb C$ under the embedding of [[def-complex-numbers-and-arithmetic]], on which the field operations of $\mathbb C$ restrict to those of $\mathbb R$ ([[thm-complex-numbers-form-a-field]]).

[L2] For a real $r$, the coordinate definition $|r+0i|=\sqrt{r^2}$ and [L1] give $|r|^2=r^2$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]). This is the only modulus property needed below.

## Proof

**Proof technique:** direct; solve the two linear equations by substitution, then substitute the resulting ratios into the algebraic expressions defining $R$ and $T$.

1.1 Positivity and invertibility. Since $\mu_j>0$ and $\varepsilon_j>0$, the quotients $\mu_j/\varepsilon_j$ are positive by [L1], so $Z_j=\sqrt{\mu_j/\varepsilon_j}>0$ for $j=1,2$; in particular $Z_1,Z_2\ne0$ and $Z_1+Z_2>0$, so $Z_1+Z_2$, $Z_1Z_2$ and $E_i$ are invertible complex numbers. [given, L1, algebra]

2.1 Solving the system. Substituting the first equation $E_t=E_i+E_r$ into the second gives $\dfrac{E_i-E_r}{Z_1}=\dfrac{E_i+E_r}{Z_2}$; multiplying by the nonzero number $Z_1Z_2$ and collecting terms yields $Z_2E_i-Z_2E_r=Z_1E_i+Z_1E_r$, that is, $E_r(Z_1+Z_2)=E_i(Z_2-Z_1)$. Dividing by the nonzero numbers $E_i$ and $Z_1+Z_2$ gives $\dfrac{E_r}{E_i}=\dfrac{Z_2-Z_1}{Z_1+Z_2}$, and then $\dfrac{E_t}{E_i}=1+\dfrac{E_r}{E_i}=\dfrac{Z_1+Z_2+Z_2-Z_1}{Z_1+Z_2}=\dfrac{2Z_2}{Z_1+Z_2}$ by the field arithmetic of [L1]. Both ratios are real numbers, since all $Z_j$ are real. [step 1.1, L1, algebra]

3.1 The balance $R+T=1$. Because the ratios of step 2.1 are real, [L2] gives $\bigl\lvert E_r/E_i\bigr\rvert^2=\bigl(\frac{Z_2-Z_1}{Z_1+Z_2}\bigr)^2$ and $\bigl\lvert E_t/E_i\bigr\rvert^2=\bigl(\frac{2Z_2}{Z_1+Z_2}\bigr)^2$, so $R=\frac{(Z_2-Z_1)^2}{(Z_1+Z_2)^2}$ and $T=\frac{Z_1}{Z_2}\cdot\frac{4Z_2^2}{(Z_1+Z_2)^2}=\frac{4Z_1Z_2}{(Z_1+Z_2)^2}$, and therefore $R+T=\frac{(Z_2-Z_1)^2+4Z_1Z_2}{(Z_1+Z_2)^2}=\frac{Z_2^2-2Z_1Z_2+Z_1^2+4Z_1Z_2}{(Z_1+Z_2)^2}=\frac{(Z_1+Z_2)^2}{(Z_1+Z_2)^2}=1$ by the expansion $(Z_1+Z_2)^2=Z_1^2+2Z_1Z_2+Z_2^2$ and the invertibility of $Z_1+Z_2$ from step 1.1. [step 2.1, L1, L2, algebra] ∎

## Remarks

- In the period-averaged reading of the amplitudes as time-harmonic complex phasors, [[lem-em-period-average]] with $a=d=A$ gives $\frac1{T_0}\int_0^{T_0}\operatorname{Re}(Ae^{-i\omega t})^2\,dt=\frac12|A|^2$ for $\omega>0$ and $T_0=2\pi/\omega$, so $\bigl\lvert E_r/E_i\bigr\rvert^2$ is the ratio of the mean squares of the real reflected and incident fields and $T$ differs from the corresponding transmitted mean-square ratio by the real factor $Z_1/Z_2$; the identity $R+T=1$ itself is the algebraic consequence proved above and does not rest on any field model.
- Neither the system nor the conclusion involves $\mathrm{AC}$ or any choice principle; it is finite algebra in $\mathbb R$ and $\mathbb C$. The equations are satisfied by $E_t=E_i$, $E_r=0$ exactly when $Z_1=Z_2$, in which case $R=0$, $T=1$.
