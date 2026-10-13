---
id: thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection
aliases: [nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection]
kind: theorem
domain: mathematics
title: "Stable weighted Airy Volterra connection"
status: published
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

Assume Countable Choice ([[def-countable-choice]]). Adopt the hypotheses and notation of
[[thm-nrqm-controlled-dynamics-liouville-turning-point-transformation]]: $q\in C^5$
with a single simple zero at $0$, $q'(0)>0$, transformed equation
$w''=[\zeta/h^2+R(\zeta)]w$ on $\zeta([-x_-,x_+])$, $a>0$ the Liouville factor
and $R$ continuous bounded. Put $b:=-\zeta(-x_-)>0$ and $c:=\zeta(x_+)>0$,
so the transformed interval is $[-b,c]$. Let
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

**Given:** Countable Choice, the transformed equation $w''=[\zeta/h^2+R]w$ on $[-b,c]$, the Airy functions and their envelopes, and the terminal point $c$.

[F1] Airy functions satisfy $A''=zA$, $B''=zB$ with Wronskian $AB'-A'B=\pi^{-1}$; the envelope bounds of [[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]] (c) hold with constants independent of $h$ ([[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]]).

[F2] Variation of constants: the integral equation of (a) is equivalent to the differential equation with the stated terminal data, and its kernel is $A_h(\zeta)B_h(v)-B_h(\zeta)A_h(v)$ ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]], [[def-bochner-integrable-function]], algebra).

[F3] **Weighted kernels.** Put $f_h(z):=(1+|z|/h^{2/3})^{-1/4}$, $\phi_h(z):=2(z_+)^{3/2}/(3h)$ and $g_h(z):=f_h(z)e^{\phi_h(z)}$. Thus $e_h=f_he^{-\phi_h}$, while the growing derivative envelope is $\widetilde d_h(z):=h^{-2/3}f_h(z)^{-1}e^{\phi_h(z)}$. For $z\le v$, the Airy bounds [F1] give, with $K_h(z,v):=\pi h^{2/3}[A_h(z)B_h(v)-B_h(z)A_h(v)]$,
$$|K_h(z,v)|\frac{e_h(v)}{e_h(z)}\le C h^{2/3}f_h(v)^2\bigl[1+e^{2(\phi_h(z)-\phi_h(v))}\bigr]\le\frac{Ch}{\sqrt{|v|+h^{2/3}}}.$$
Replacing the Airy factors at $z$ by their derivatives gives likewise $|\partial_zK_h(z,v)|e_h(v)/d_h(z)\le Ch/\sqrt{|v|+h^{2/3}}$. These estimates use monotonicity of $\phi_h$, and do not assert monotonicity of $e_h$. For the growing branch, $0\le v\le z$ gives the same bounds with $g_h(v)/g_h(z)$ and $\widetilde d_h(z)$: the exponential factor is $1+e^{2(\phi_h(v)-\phi_h(z))}\le2$. For $z\le v\le0$ all exponential factors equal one, giving the same growing bounds on the negative side. ([[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]], algebra).

## Proof

1.1 [Convergence of the Volterra series] By [F2] the solution is the sum of the ordered iterates of the kernel $\pi h^{2/3}[A_h(\zeta)B_h(v)-B_h(\zeta)A_h(v)]R(v)$; by [F3] each iterate gains a factor bounded by $Ch\int|R(v)|/\sqrt{|v|+h^{2/3}}dv=\varepsilon_h$ and a factorial denominator, so the series converges and defines the unique solution with the stated terminal data. [F1, F2, F3, algebra]

2.1 [Error bounds] Subtracting the leading term from the series and bounding the remainder by the exponential series give $|w-A_h|\le C_Ae_h(e^{\varepsilon_h}-1)$. To differentiate the integral equation, the boundary term vanishes because $K_h(z,z)=0$; the remaining integral contains $\partial_zK_h$, which obeys the derivative estimate in [F3]. Insert the value bound from step 1.1 under this integral: ordered integration yields $|w'-A_h'|\le C_Ad_h(e^{\varepsilon_h}-1)$. Finally, $\int_{-b}^c(|v|+h^{2/3})^{-1/2}dv\le2(\sqrt b+\sqrt c)$, so boundedness of $R$ implies $\varepsilon_h\le C'h$. This proves (b). [step 1.1, F1, F2, F3, algebra]

3.1 [Growing branch and independence] The solution with data $(B_h(0),B_h'(0))$ satisfies $w_g(z)=B_h(z)-\int_0^zK_h(z,v)R(v)w_g(v)dv$. On $z\ge0$ use ordered forward integrals and on $z\le0$ ordered backward integrals; the growing kernel bounds in [F3] give $|w_g-B_h|\le C_Ag_h(e^{\varepsilon_h}-1)$ and $|w_g'-B_h'|\le C_A\widetilde d_h(e^{\varepsilon_h}-1)$ on the full interval, by the same factorial estimates. At zero the decaying solution obeys $w(0)=A_h(0)+O(h)$ and $w'(0)=A_h'(0)+O(h^{1/3})$, while the growing data are exact. Their Wronskian is consequently $h^{-2/3}[\pi^{-1}+O(h)]$, which is nonzero for small $h$ and constant because both solve the same equation without a first-derivative term. Thus the branches are independent. [step 2.1, F1, F2, F3, algebra]

4.1 [Connection] Write $u=a w$, using the Liouville identity $a=|\zeta|^{1/4}|q|^{-1/4}$ away from zero. The phase $2|\zeta|^{3/2}/(3h)$ equals the action integral divided by $h$. Normalize the decaying branch by $2\sqrt\pi h^{-1/6}$ and the growing branch by $\sqrt\pi h^{-1/6}$. The positive and negative Airy asymptotics of [F1] then give respectively the forbidden amplitudes $q^{-1/4}e^{-\int\sqrt q/h}$ and $q^{-1/4}e^{+\int\sqrt q/h}$, and the allowed amplitudes $2(-q)^{-1/4}\sin(\int\sqrt{-q}/h+\pi/4)$ and $(-q)^{-1/4}\cos(\int\sqrt{-q}/h+\pi/4)$. Steps 2.1 and 3.1 add errors bounded by the respective envelopes times $C\varepsilon_h$, and the Airy asymptotic remainders add $Ch/|\zeta|^{3/2}$ on fixed matching sections. For slopes apply $u'=a'w+a\zeta'w'$ and the derivative bounds; no differentiation of an unspecified asymptotic remainder is needed. Reflection $x\mapsto-x$ handles a turning point with $q'<0$. This proves (c). [step 2.1, step 3.1, F1, algebra] ∎
