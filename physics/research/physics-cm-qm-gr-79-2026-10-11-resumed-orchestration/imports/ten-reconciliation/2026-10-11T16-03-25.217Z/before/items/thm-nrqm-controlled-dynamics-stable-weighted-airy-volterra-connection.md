---
id: thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection
aliases: [nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection]
kind: theorem
domain: mathematics
title: "Stable weighted Airy Volterra connection"
status: draft
origin: pipeline
dependency_level: 3
deps: [thm-nrqm-controlled-dynamics-liouville-turning-point-transformation, thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients, thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-bochner-integrable-function, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-liouville-turning-point-transformation: mathematical-premise
  thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients: mathematical-premise
  thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  def-bochner-integrable-function: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. W. J. Olver, Asymptotics and Special Functions (1974), Chapter 11 (error bounds for Airy-type Volterra equations near turning points) — classical monograph treatment consulted through the DLMF survey of asymptotics and error bounds"
      url: "https://dlmf.nist.gov/9.7"
    - title: "NIST Digital Library of Mathematical Functions, Section 9.7 (connection formulas for Airy functions)"
      url: "https://dlmf.nist.gov/9.7"
---

## Statement

Adopt the hypotheses and notation of
[[thm-nrqm-controlled-dynamics-liouville-turning-point-transformation]]: $q\in C^5$
with a single simple zero at $0$, $q'(0)>0$, transformed equation
$w''=[\zeta/h^2+R(\zeta)]w$ on $\zeta([-x_-,x_+])$, $a>0$ the Liouville factor
and $R$ continuous bounded. Let
$A_h(\zeta):=A(\zeta/h^{2/3})$, $B_h(\zeta):=B(\zeta/h^{2/3})$ for the Airy
functions of
[[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]]
(Wronskian $A_hB_h'-A_h'B_h=h^{-2/3}/\pi$), and define the envelopes
$$e_h(\zeta):=\bigl(1+|\zeta|/h^{2/3}\bigr)^{-1/4}\exp\Bigl(-\frac{2(\zeta_+)^{3/2}}{3h}\Bigr),\qquad d_h(\zeta):=h^{-2/3}\bigl(1+|\zeta|/h^{2/3}\bigr)^{1/4}\exp\Bigl(-\frac{2(\zeta_+)^{3/2}}{3h}\Bigr).$$
Then:

(a) *Volterra representation.* For $h$ small the unique solution with Airy terminal data $w(c)=A_h(c)$, $w'(c)=A_h'(c)$ at the right endpoint $\zeta=c$ satisfies
$$w(\zeta)=A_h(\zeta)+\pi h^{2/3}\int_\zeta^c\bigl[A_h(\zeta)B_h(v)-B_h(\zeta)A_h(v)\bigr]R(v)w(v)\,dv .$$

(b) *Stable weighted estimate.* There is a constant $C_A$ with
$|w(\zeta)-A_h(\zeta)|\le C_Ae_h(\zeta)(e^{\varepsilon_h}-1)$ and
$|w'(\zeta)-A_h'(\zeta)|\le C_Ad_h(\zeta)(e^{\varepsilon_h}-1)$, where
$$\varepsilon_h:=Ch\int_{-b}^c\frac{|R(v)|}{\sqrt{|v|+h^{2/3}}}\,dv\le C'h$$
for constants depending only on $q$ and the interval.

(c) *Growing branch and connection.* The solution with terminal data
$(B_h,B_h')$ at $\zeta=0$ obeys the analogous bound with $e_h$ replaced by its
growing analogue on the full interval; consequently, for fixed $\zeta>0$ and
$\zeta<0$ away from zero, the forbidden-side solution
$q^{-1/4}\exp(-\frac1h\int_0^x\sqrt q)$ corresponds to
$2(-q)^{-1/4}\sin(\frac1h\int_x^0\sqrt{-q}+\pi/4)$ on the allowed side, and the
growing forbidden solution to the corresponding cosine, with absolute errors bounded by the envelopes times $C(\varepsilon_h+h/|\zeta|^{3/2})$.

## Facts & Assumptions

**Given:** the transformed equation $w''=[\zeta/h^2+R]w$, the Airy functions and their envelopes, and the terminal point $c$.

[F1] Airy functions satisfy $A''=zA$, $B''=zB$ with Wronskian $AB'-A'B=\pi^{-1}$; the envelope bounds of [[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]] (c) hold with constants independent of $h$ ([[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]]).

[F2] Variation of constants: the integral equation of (a) is equivalent to the differential equation with the stated terminal data, and its kernel is $A_h(\zeta)B_h(v)-B_h(\zeta)A_h(v)$ ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]], [[def-bochner-integrable-function]], algebra).

[F3] Weighted kernel bound: for $\zeta\le v\le c$ one has $e_h(v)/e_h(\zeta)\le1$ and the product estimate $|A_h(\zeta)B_h(v)|\le Ch\,e_h(\zeta)e_h(v)^{-1}$, together with $e_h(v)\le e_h(\zeta)$, yields an upper bound of the form $Ch/\sqrt{|v|+h^{2/3}}$ for the kernel divided by $e_h(\zeta)$ ([[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]], algebra).

## Proof

1.1 [Convergence of the Volterra series] By [F2] the solution is the sum of the ordered iterates of the kernel $\pi h^{2/3}[A_h(\zeta)B_h(v)-B_h(\zeta)A_h(v)]R(v)$; by [F3] each iterate gains a factor bounded by $Ch\int|R(v)|/\sqrt{|v|+h^{2/3}}dv=\varepsilon_h$ and a factorial denominator, so the series converges and defines the unique solution with the stated terminal data. [F1, F2, F3, algebra]

2.1 [Error bounds] Subtracting the leading term from the series and bounding the remainder by the exponential series give $|w-A_h|\le C_Ae_h(e^{\varepsilon_h}-1)$; differentiating the integral equation (the diagonal value of the differentiated kernel vanishes) and using the derivative envelope gives the bound for $w'$. Since $R$ is bounded and $\int_0^1v^{-1/2}dv<\infty$, one has $\varepsilon_h\le C'h$. [step 1.1, F1, F3, algebra]

3.1 [Connection] Feeding the asymptotic coefficients of [[thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization]] (c)–(d) and of [[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]] (b) into the zeroth-order expressions $w=A_h$, $w=B_h$ gives the displayed connection formulas with errors bounded by the envelopes times $C(\varepsilon_h+h/|\zeta|^{3/2})$, uniformly on the stated matching sections; the reflection $x\mapsto-x$ handles a turning point with $q'<0$. [step 2.1, F1, algebra] ∎
