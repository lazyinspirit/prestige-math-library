---
id: pthm-nrqm-approximations-turning-point-connection
aliases: [nrqm-approximations-turning-point-connection]
kind: physics-theorem
domain: physics
title: "Airy connection across a single simple turning point of the declared regime model, with envelope error control"
status: draft
origin: session
dependency_level: 11
deps: [def-nrqm-approximations-framework-wkb-regime-model, lem-nrqm-approximations-scaled-line-model-correspondence, thm-nrqm-controlled-dynamics-liouville-turning-point-transformation, thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization, thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients, thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection, thm-nrqm-controlled-dynamics-wkb-explicit-error, def-countable-choice]
dependency_roles:
  def-nrqm-approximations-framework-wkb-regime-model: formulation-prerequisite
  lem-nrqm-approximations-scaled-line-model-correspondence: mathematical-premise
  thm-nrqm-controlled-dynamics-liouville-turning-point-transformation: mathematical-premise
  thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization: mathematical-premise
  thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients: mathematical-premise
  thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection: mathematical-premise
  thm-nrqm-controlled-dynamics-wkb-explicit-error: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The single-simple-turning-point connection statement for the declared WKB regime model with forbidden region on the right of the turning point: the two exact solutions matched to the Airy-type decaying and growing branches of the transformed equation, their forbidden-side exponential forms, their allowed-side sine and cosine forms with the phase pi/4 measured from the turning point, the factor two of the decaying-sine connection, and the envelope-times-epsilon absolute error control. The statement concerns the declared one-dimensional model's exact solutions only; it asserts no rectangular walls, no coalescing turning points, no multi-turn resonances, no wave packet and no measurement."
empirical_premises: []
sources:
  references:
    - title: "F. W. J. Olver, Asymptotics and Special Functions (1974), Chapter 11 (connection formulas and error bounds for Airy-type equations; standard monograph), consulted through the NIST DLMF survey of Airy asymptotics"
      url: "https://dlmf.nist.gov/9.7"
    - title: "NIST Digital Library of Mathematical Functions, Section 9.7 'Asymptotic Expansions' (oscillatory and exponential Airy asymptotics with the phase pi/4 and envelope bounds)"
      url: "https://dlmf.nist.gov/9.7"
    - title: "NIST Digital Library of Mathematical Functions, Section 9.2 'Differential Equation' (Airy's equation and the standard solutions Ai, Bi)"
      url: "https://dlmf.nist.gov/9.2"
verification:
  precheck: pass
---

## Statement

Adopt the declared WKB regime model of
[[def-nrqm-approximations-framework-wkb-regime-model]] with its data
$V,m,\hbar,\ell,E_\star,W,\lambda,h$, and assume hypothesis (W3) at a
turning point $\xi_{0}$ with $W'(\xi_{0})>0$: on an interval
$[\xi_{0}-r_{0},\xi_{0}+s_{0}]$ with $r_{0},s_{0}>0$ the function
$W-\lambda$ has the single zero $\xi_{0}$, is strictly negative on
$[\xi_{0}-r_{0},\xi_{0})$ (allowed side) and strictly positive on
$(\xi_{0},\xi_{0}+s_{0}]$ (forbidden side). Write, for the two sides,
$$\theta(\xi):=\frac1h\int_{\xi}^{\xi_{0}}\sqrt{\lambda-W(\xi')}\,d\xi' \quad(\xi<\xi_{0}),\qquad \Sigma(\xi):=\frac1h\int_{\xi_{0}}^{\xi}\sqrt{W(\xi')-\lambda}\,d\xi' \quad(\xi>\xi_{0}),$$
the nonnegative dimensionless phase and exponent measured from the turning
point into the allowed and forbidden sides. Then there are constants
$0<C_{1}<\infty$ and $C_{0}<\infty$, depending only on
$W,\lambda,\xi_{0},r_{0},s_{0}$ (not on $h$), such that:

(a) *Decaying connection.* There is an exact solution $u_{\mathrm{dec}}$ of
the model equation $u''=(W-\lambda)u/h^{2}$ on
$[\xi_{0}-r_{0},\xi_{0}+s_{0}]$ and a real constant $C\ne0$ with
$$u_{\mathrm{dec}}(\xi)=C\,(W(\xi)-\lambda)^{-1/4} e^{-\Sigma(\xi)}\bigl(1+\delta_{\mathrm{f}}(\xi)\bigr)\qquad(\xi>\xi_{0}),$$
$$u_{\mathrm{dec}}(\xi)=2C\,(\lambda-W(\xi))^{-1/4} \Bigl(\sin\bigl(\theta(\xi)+\tfrac{\pi}{4}\bigr)+\delta_{\mathrm{a}}(\xi)\Bigr) \qquad(\xi<\xi_{0}),$$
where the absolute errors obey, for $\xi\ne\xi_{0}$ away from the turning
point,
$$|\delta_{\mathrm{f}}(\xi)|\le C_{0}\bigl(\varepsilon(h)+h/|\zeta(\xi)|^{3/2}\bigr), \qquad \bigl|\delta_{\mathrm{a}}(\xi)\bigr|\le C_{0}\bigl(\varepsilon(h)+h/|\zeta(\xi)|^{3/2}\bigr),$$
$\zeta$ is the Liouville variable $\zeta(\xi)=\operatorname{sign}
(\xi-\xi_{0})\bigl[\tfrac32\bigl|\int_{\xi_{0}}^{\xi}
\sqrt{|W-\lambda|}\bigr|\bigr]^{2/3}$ of
[[thm-nrqm-controlled-dynamics-liouville-turning-point-transformation]], and
$\varepsilon(h)\le C_{1}h$;

(b) *Growing connection.* There is a second exact solution
$u_{\mathrm{grow}}$, linearly independent of $u_{\mathrm{dec}}$, with
$$u_{\mathrm{grow}}(\xi)=C'\,(W(\xi)-\lambda)^{-1/4} e^{+\Sigma(\xi)}\bigl(1+\delta_{\mathrm{f}}'(\xi)\bigr)\qquad(\xi>\xi_{0}),$$
$$u_{\mathrm{grow}}(\xi)=C'\,(\lambda-W(\xi))^{-1/4} \Bigl(\cos\bigl(\theta(\xi)+\tfrac{\pi}{4}\bigr)+\delta_{\mathrm{a}}'(\xi)\Bigr) \qquad(\xi<\xi_{0}),$$
for a real constant $C'\ne0$, with absolute errors bounded as in (a);

(c) *Derivative and envelope control.* The derivatives
$u_{\mathrm{dec}}',u_{\mathrm{grow}}'$ obey the corresponding bounds with the
derivative envelope $d_{h}$ of
[[thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection]] in
place of the value envelope $e_{h}$, so the displayed statements control the
solutions in value and slope;

(d) *Content of the connection.* The factors $2$ in the decaying allowed-side
form of (a) and $1$ in the growing allowed-side form of (b) are the amplitude
relations of the exact Airy pair: the forbidden-side data determine the
constants $C$ and $C'$, and the allowed-side oscillations are the sine and
cosine forms with phase $\pi/4$ measured from the turning point into the
allowed region. The statement excludes rectangular walls, coalescing or
multiple turning points, multi-turn resonances and barrier-top uniformity; it
asserts no transmission or reflection coefficient (that is a separate
statement requiring hypothesis (W2)), no wave packet, no detector and no
measured value; the errors are absolute and blow up as the turning point is
approached, as displayed by the $h/|\zeta|^{3/2}$ term.

## Facts & Assumptions

**Given:** the WKB regime model with its data; hypothesis (W3) with $W'(\xi_{0})>0$; the functions $\theta,\Sigma,\zeta$; the Axiom of Countable Choice.

[F1] **Liouville transformation.** For $W\in C^{5}$ near $\xi_{0}$ with a single simple zero of $q:=W-\lambda$ at $\xi_{0}$, $q'(\xi_{0})>0$, the substitution $\zeta=\zeta(\xi)$, $a=(\zeta')^{-1/2}$, $u=a\,w(\zeta)$ transforms the model equation into $w''(\zeta)=[\zeta/h^{2}+R(\zeta)]w(\zeta)$ on the transformed interval, with $R$ continuous and bounded, $\zeta\in C^{4}$, $\zeta'>0$ with $\min\zeta'>0$, and constants depending only on $q$ and the interval ([[thm-nrqm-controlled-dynamics-liouville-turning-point-transformation]] clauses (a)-(c)).

[F2] **Airy asymptotics and envelopes.** The entire Airy functions $A,B$ of [[thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization]] and [[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]] satisfy $A(-Z)=\pi^{-1/2}Z^{-1/4}(\sin\Theta+O(Z^{-3/2}))$, $B(-Z)=\pi^{-1/2}Z^{-1/4}(\cos\Theta+O(Z^{-3/2}))$ for $Z\to+\infty$ with $\Theta=2Z^{3/2}/3+\pi/4$, the exponential asymptotics $A(Z)=\tfrac12\pi^{-1/2} Z^{-1/4}e^{-2Z^{3/2}/3}(1+O(Z^{-3/2}))$ and $B(Z)=\pi^{-1/2}Z^{-1/4} e^{2Z^{3/2}/3}(1+O(Z^{-3/2}))$, the Wronskian $AB'-A'B=\pi^{-1}$, and envelope bounds with $p(Z)=1+|Z|$ and $S(Z)=\tfrac23(Z_{+})^{3/2}$ ([[thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization]] clauses (c), (d), [[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]] clauses (a)-(c)).

[F3] **Stable Volterra connection.** With $A_{h}(\zeta)=A(\zeta/h^{2/3})$, $B_{h}(\zeta)=B(\zeta/h^{2/3})$ and the value and derivative envelopes $e_{h},d_{h}$ of [[thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection]]: the solution with terminal Airy data $(A_{h},A_{h}')$ at the right endpoint satisfies $|w-A_{h}|\le C_{A}e_{h}(e^{\varepsilon_{h}}-1)$ and $|w'-A_{h}'|\le C_{A}d_{h}(e^{\varepsilon_{h}}-1)$, with $\varepsilon_{h}=Ch\int|R(v)|/\sqrt{|v|+h^{2/3}}\,dv\le C'h$; the growing terminal data $(B_{h},B_{h}')$ obey the analogous bound with the growing envelope; and the connection between the forbidden-side exponential forms and the allowed-side oscillatory forms carries the absolute error bounded by the envelopes times $C(\varepsilon_{h}+h/|\zeta|^{3/2})$ ([[thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection]] clauses (a)-(c)).

[F4] **Allowed-region transfer on the oscillatory side.** On a closed subinterval of the allowed side bounded away from $\xi_{0}$, the exact solutions are compared with their leading WKB waves by [[thm-nrqm-controlled-dynamics-wkb-explicit-error]], with the Gronwall factor of that theorem; the side's local wavenumber is $p=\sqrt{\lambda-W}$ ([[def-nrqm-approximations-framework-wkb-regime-model]] clause (c)).

[F5] **Model identification.** The physical potential and energy are $V(\ell\xi)=E_\star W(\xi)$, $E=E_\star\lambda$, and the physical phase integrals equal $1/h$ times the dimensionless ones by [[lem-nrqm-approximations-scaled-line-model-correspondence]] clause (b); the model equation is $u''=(W-\lambda)u/h^{2}$, so the equation, the turning points and the functions $\theta,\Sigma$ are exactly the supplier data with $q=W-\lambda$ ([[def-nrqm-approximations-framework-wkb-regime-model]] clauses (b), (c)).

## Proof

**Proof technique:** direct; push the model equation through the Liouville transformation, bound the two Airy-matched exact solutions by the stable Volterra estimates, and read the allowed-side sine and cosine forms from the Airy asymptotics with the same constants.

**Given:** the data of the statement and [F1]-[F5].

1.1 [Transformed equation] By [F1] applied to $q=W-\lambda$ (with $q$ of the sign of $\xi-\xi_{0}$ because $W'(\xi_{0})>0$ and $\xi_{0}$ is the single zero) the model equation is equivalent to $w''=[\zeta/h^{2}+R]w$ under $u=a\,w\circ\zeta$, with $\zeta$ exactly the displayed Liouville variable and $a=(\zeta')^{-1/2}>0$; all constants depend only on the model's data and the interval. [F1, F5, given]

1.2 [The two matched solutions and their forbidden forms] Let $w_{\mathrm{dec}}$ and $w_{\mathrm{grow}}$ be the solutions of the transformed equation with terminal Airy data $(A_{h},A_{h}')$ and $(B_{h},B_{h}')$ at the right endpoint $\zeta(s_{0})=\zeta(\xi_{0}+s_{0})$, and put $u_{\mathrm{dec}}=a\, w_{\mathrm{dec}}\circ\zeta$, $u_{\mathrm{grow}}=a\,w_{\mathrm{grow}}\circ \zeta$; these are exact solutions of the model equation, and they are linearly independent because the terminal Wronskian is $A_{h}B_{h}'-A_{h}'B_{h} =h^{-2/3}\pi^{-1}\ne0$. By [F3] the differences $w_{\mathrm{dec}}-A_{h}$ and $w_{\mathrm{grow}}-B_{h}$ are bounded by the value envelope times $(e^{\varepsilon_{h}}-1)$ and their derivatives by the derivative envelope times the same factor, with $\varepsilon_{h}\le C_{1}h$. On the forbidden side $\xi>\xi_{0}$ one has $\zeta>0$, and [F2] gives $A_{h}(\zeta)=\tfrac12\pi^{-1/2}(\zeta/h^{2/3})^{-1/4} e^{-\Sigma(\xi)}(1+O(h))$ and $B_{h}(\zeta)=\pi^{-1/2}(\zeta/h^{2/3})^{-1/4} e^{+\Sigma(\xi)}(1+O(h))$, because $\tfrac23\zeta^{3/2}=\Sigma(\xi)$ by the definition of $\zeta$ and [F1]; multiplying by $a(\zeta)=\zeta^{1/4}(W-\lambda)^{-1/4}$ (from $\zeta(\zeta')^{2}=W-\lambda$) turns these into the forbidden-side forms of (a) and (b) with the constants $C=\tfrac12\pi^{-1/2}h^{1/6}\ne0$ and $C'=\pi^{-1/2}h^{1/6}\ne0$, up to the displayed errors, which are absorbed into $\delta_{\mathrm{f}}$, $\delta_{\mathrm{f}}'$ with the bound of [F3]. [F1, F2, F3, algebra]

2.1 [Allowed-side forms and amplitude factors] On the allowed side $\xi<\xi_{0}$ one has $\zeta<0$, so [F2] gives $A_{h}(\zeta)=\pi^{-1/2}(|\zeta|/h^{2/3})^{-1/4}(\sin(\theta(\xi)+\pi/4) +O(h))$ and $B_{h}(\zeta)=\pi^{-1/2}(|\zeta|/h^{2/3})^{-1/4} (\cos(\theta(\xi)+\pi/4)+O(h))$, because $\tfrac23|\zeta|^{3/2}=\theta(\xi)$ by the definition of $\zeta$ and [F1]. Multiplying by $a(\zeta)=\zeta^{1/4}(\lambda-W)^{-1/4}$ (from $\zeta(\zeta')^{2}=W-\lambda$ and $\zeta<0$) gives the allowed-side forms $$u_{\mathrm{dec}}=2C(\lambda-W)^{-1/4}\sin(\theta+\pi/4)(1+O(h)), \qquad u_{\mathrm{grow}}=C'(\lambda-W)^{-1/4}\cos(\theta+\pi/4)(1+O(h)),$$ with the constants $C,C'$ of step 1.2 and the factor relations $2$ and $1$ of clause (d); on any closed subinterval of the allowed side bounded away from $\xi_{0}$, the $O(h)$ here combines with the Gronwall factor of [F4] and the $h/|\zeta|^{3/2}$ matching error of [F3], giving the absolute errors $\delta_{\mathrm{a}},\delta_{\mathrm{a}}'$ of the statement. [step 1.2, F2, F3, F4, algebra]

3.1 [Derivative control] Differentiating the representations of steps 2.1 and 3.1 and using the derivative estimate of [F3] and the derivative Airy asymptotics of [F2] yields the derivative bounds of (c) with the envelope $d_{h}$; the smoothness of $a$ and $\zeta$ (class $C^{3}$ and $C^{4}$ by [F1]) justifies the differentiation, the leading derivatives being those of the Airy factors. [step 1.2, step 2.1, F1, F2, F3, algebra]

4.1 [Scope and identifications] The only hypotheses used are (W3), the local $C^{5}$ regularity of $W$ and the single simple zero at $\xi_{0}$, which are exactly the hypotheses of [F1]-[F4]; no further turning point, no wall and no resonance condition was used. The physical phase integrals and the correspondence with the line model are those of [F5], and the units are the model's. This proves clause (d). [step 1.1, step 2.1, step 3.1, F5, given] ∎

## Remarks

- **Orientation.** The phase $\theta$ and exponent $\Sigma$ are both measured from the turning point outward into the respective region; with this convention the decaying solution's allowed-side form is the sine with $+\pi/4$, and the growing solution's is the cosine, exactly as in the Airy asymptotics of [F2]. Reversing the orientation of the interval would replace the sine by a cosine and vice versa.
- **Use on this page.** The barrier-transmission theorem of this page uses the decaying connection on both sides of a separated barrier; the error control of clause (c) is what makes the two matching errors comparable.
