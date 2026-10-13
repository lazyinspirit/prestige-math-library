---
id: pthm-nrqm-approximations-turning-point-connection
aliases: [ nrqm-approximations-turning-point-connection ]
kind: physics-theorem
domain: physics
title: "Airy connection across a single simple turning point of the declared
  regime model, with envelope error control"
status: draft
origin: session
dependency_level: 12
deps:
  [
    def-nrqm-approximations-framework-wkb-regime-model,
    lem-nrqm-approximations-scaled-line-model-correspondence,
    thm-nrqm-controlled-dynamics-liouville-turning-point-transformation,
    thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization,
    thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients,
    thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection,
    thm-nrqm-controlled-dynamics-wkb-explicit-error,
    def-countable-choice
  ]
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
physical_scope: "The single-simple-turning-point connection statement for the
  declared WKB regime model with forbidden region on the right of the turning
  point: the two exact solutions matched to the Airy-type decaying and growing
  branches of the transformed equation, their forbidden-side exponential forms,
  their allowed-side sine and cosine forms with the phase pi/4 measured from the
  turning point, the factor two of the decaying-sine connection, and the
  envelope-times-epsilon absolute error control. The statement concerns the
  declared one-dimensional model's exact solutions only; it asserts no
  rectangular walls, no coalescing turning points, no multi-turn resonances, no
  wave packet and no measurement."
empirical_premises: []
sources:
  references:
    - title: "F. W. J. Olver, Asymptotics and Special Functions (1974), Chapter 11
        (connection formulas and error bounds for Airy-type equations; standard
        monograph), consulted through the NIST DLMF survey of Airy asymptotics"
      url: "https://dlmf.nist.gov/9.7"
    - title: "NIST Digital Library of Mathematical Functions, Section 9.7 'Asymptotic
        Expansions' (oscillatory and exponential Airy asymptotics with the phase
        pi/4 and envelope bounds)"
      url: "https://dlmf.nist.gov/9.7"
    - title: "NIST Digital Library of Mathematical Functions, Section 9.2
        'Differential Equation' (Airy's equation and the standard solutions Ai,
        Bi)"
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
point into the allowed and forbidden sides. Let
$$\zeta(\xi):=\operatorname{sign}(\xi-\xi_{0})\Bigl[\frac32\Bigl|\int_{\xi_{0}}^{\xi}\sqrt{|W(\xi')-\lambda|}\,d\xi'\Bigr|\Bigr]^{2/3}$$
be the Liouville coordinate. Write $R$ for the continuous remainder in the
transformed equation $w''=[\zeta/h^{2}+R(\zeta)]w$ and put
$\eta_-:=\zeta(\xi_{0}-r_{0})$, $\eta_+:=\zeta(\xi_{0}+s_{0})$. Define
$$\varepsilon(h):=C_{\mathrm{ker}}h\int_{\eta_-}^{\eta_+}\frac{|R(v)|}{\sqrt{|v|+h^{2/3}}}\,dv,$$
where $C_{\mathrm{ker}}$ is the kernel constant of
[[thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection]];
boundedness of $R$ on the fixed transformed interval gives
$\varepsilon(h)\le C_{1}h$ for some $C_{1}>0$ depending only on the fixed data.
There are constants $0<C_{0}<\infty$ and $0<C_{\mathrm{err}}<\infty$,
depending only on $W,\lambda,\xi_{0},r_{0},s_{0}$ (not on $h$), and $h_0>0$,
such that for every $0<h<h_0$:

(a) *Decaying connection.* There is an exact solution $u_{\mathrm{dec}}$ of
the model equation $u''=(W-\lambda)u/h^{2}$ on
$[\xi_{0}-r_{0},\xi_{0}+s_{0}]$ and a real constant $C\ne0$ with
$$u_{\mathrm{dec}}(\xi)=C\,(W(\xi)-\lambda)^{-1/4} e^{-\Sigma(\xi)}\bigl(1+\delta_{\mathrm{f}}(\xi)\bigr)\qquad(\xi>\xi_{0}),$$
$$u_{\mathrm{dec}}(\xi)=2C\,(\lambda-W(\xi))^{-1/4} \Bigl(\sin\bigl(\theta(\xi)+\tfrac{\pi}{4}\bigr)+\delta_{\mathrm{a}}(\xi)\Bigr) \qquad(\xi<\xi_{0}),$$
where the absolute errors obey, for $\xi\ne\xi_{0}$ away from the turning
point,
$$|\delta_{\mathrm{f}}(\xi)|\le C_{0}\bigl(\varepsilon(h)+h/|\zeta(\xi)|^{3/2}\bigr), \qquad \bigl|\delta_{\mathrm{a}}(\xi)\bigr|\le C_{0}\bigl(\varepsilon(h)+h/|\zeta(\xi)|^{3/2}\bigr),$$

(b) *Growing connection.* There is a second exact solution
$u_{\mathrm{grow}}$, linearly independent of $u_{\mathrm{dec}}$, with
$$u_{\mathrm{grow}}(\xi)=C'\,(W(\xi)-\lambda)^{-1/4} e^{+\Sigma(\xi)}\bigl(1+\delta_{\mathrm{f,grow}}(\xi)\bigr)\qquad(\xi>\xi_{0}),$$
$$u_{\mathrm{grow}}(\xi)=C'\,(\lambda-W(\xi))^{-1/4} \Bigl(\cos\bigl(\theta(\xi)+\tfrac{\pi}{4}\bigr)+\delta_{\mathrm{a,grow}}(\xi)\Bigr) \qquad(\xi<\xi_{0}),$$
for a real constant $C'\ne0$, with
$|\delta_{\mathrm{f,grow}}(\xi)|,|\delta_{\mathrm{a,grow}}(\xi)|
\le C_{0}(\varepsilon(h)+h/|\zeta(\xi)|^{3/2})$ away from $\xi_{0}$;

(c) *Derivative and envelope control.* Let
$A_h(\zeta):=A(\zeta/h^{2/3})$ and $B_h(\zeta):=B(\zeta/h^{2/3})$ be the Airy
functions in [[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]],
let $a(\xi):=(\zeta'(\xi))^{-1/2}$, and put
$$
f_h(\zeta):=(1+|\zeta|/h^{2/3})^{-1/4},\qquad \phi_h(\zeta):=\frac{2(\zeta_+)^{3/2}}{3h}.
$$
Define the decaying and growing envelopes by
$$
e_h^-(\zeta):=f_h(\zeta)e^{-\phi_h(\zeta)},\quad d_h^-(\zeta):=h^{-2/3}f_h(\zeta)^{-1}e^{-\phi_h(\zeta)},\quad e_h^+(\zeta):=f_h(\zeta)e^{\phi_h(\zeta)},\quad d_h^+(\zeta):=h^{-2/3}f_h(\zeta)^{-1}e^{\phi_h(\zeta)}.
$$
For each transformed coordinate $\eta\in\zeta([\xi_0-r_0,\xi_0+s_0])$, define
$w_{\mathrm{dec}}(\eta):=u_{\mathrm{dec}}(\zeta^{-1}(\eta))/a(\zeta^{-1}(\eta))$
and $w_{\mathrm{grow}}(\eta):=u_{\mathrm{grow}}(\zeta^{-1}(\eta))/a(\zeta^{-1}(\eta))$.
For the solutions chosen as in the proof, the following transformed derivative
error bounds hold on the full transformed interval, with an error constant
$C_{\mathrm{err}}$ depending only on the fixed data and not on $h$:
$
|w_{\mathrm{dec}}'-A_h'|\le C_{\mathrm{err}} d_h^-(e^{\varepsilon(h)}-1),\qquad |w_{\mathrm{grow}}'-B_h'|\le C_{\mathrm{err}} d_h^+(e^{\varepsilon(h)}-1).
$
Here
$\varepsilon(h):=\varepsilon_h$ is the control parameter of [F3] and satisfies
$\varepsilon(h)\le C_1h$; the
corresponding value errors are bounded by
$C_{\mathrm{err}}e_h^-(e^{\varepsilon(h)}-1)$ and
$C_{\mathrm{err}}e_h^+(e^{\varepsilon(h)}-1)$.
Here primes on $w_{\mathrm{dec}},w_{\mathrm{grow}},A_h,B_h$ denote
$\eta$-derivatives, and primes on $a,\zeta$ denote $\xi$-derivatives.
Consequently,
$$
|u_{\mathrm{dec}}'(\xi)-a'(\xi)A_h(\zeta(\xi))-a(\xi)\zeta'(\xi)A_h'(\zeta(\xi))|\le C_{\mathrm{err}}\bigl(|a'(\xi)|e_h^-(\zeta(\xi))+|a(\xi)|\zeta'(\xi)d_h^-(\zeta(\xi))\bigr)(e^{\varepsilon(h)}-1),
$$
$$
|u_{\mathrm{grow}}'(\xi)-a'(\xi)B_h(\zeta(\xi))-a(\xi)\zeta'(\xi)B_h'(\zeta(\xi))|\le C_{\mathrm{err}}\bigl(|a'(\xi)|e_h^+(\zeta(\xi))+|a(\xi)|\zeta'(\xi)d_h^+(\zeta(\xi))\bigr)(e^{\varepsilon(h)}-1).
$$
For $\rho(\xi):=W(\xi)-\lambda>0$ on the forbidden side and
$p(\xi):=\sqrt{\lambda-W(\xi)}>0$ on the allowed side, the scaled slope
forms on every compact section bounded away from $\xi_0$ are
$$
h\rho(\xi)^{-1/4}u_{\mathrm{dec}}'(\xi)=C e^{-\Sigma(\xi)}\bigl(-1+\delta_{\mathrm{f,dec}}^{(1)}(\xi)\bigr),\qquad
h\rho(\xi)^{-1/4}u_{\mathrm{grow}}'(\xi)=C'e^{\Sigma(\xi)}\bigl(1+\delta_{\mathrm{f,grow}}^{(1)}(\xi)\bigr),
$$
$$
hp(\xi)^{-1/2}u_{\mathrm{dec}}'(\xi)=2C\bigl(-\cos(\theta(\xi)+\tfrac{\pi}{4})+\delta_{\mathrm{a,dec}}^{(1)}(\xi)\bigr),\qquad
hp(\xi)^{-1/2}u_{\mathrm{grow}}'(\xi)=C'\bigl(\sin(\theta(\xi)+\tfrac{\pi}{4})+\delta_{\mathrm{a,grow}}^{(1)}(\xi)\bigr).
$$
Each new slope error is absolute and satisfies
$|\delta_{\mathrm{f,dec}}^{(1)}|,|\delta_{\mathrm{f,grow}}^{(1)}|,
|\delta_{\mathrm{a,dec}}^{(1)}|,|\delta_{\mathrm{a,grow}}^{(1)}|
\le C_0(\varepsilon(h)+h/|\zeta(\xi)|^{3/2})$; in particular no relative
error at a sine or cosine zero is asserted.

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

[F3] **Stable Volterra connection.** Put $\eta_-:=\zeta(\xi_0-r_0)$ and $\eta_+:=\zeta(\xi_0+s_0)$, and use $A_{h}(\eta)=A(\eta/h^{2/3})$, $B_{h}(\eta)=B(\eta/h^{2/3})$, $f_h(\eta)=(1+|\eta|/h^{2/3})^{-1/4}$ and $\phi_h(\eta)=2(\eta_+)^{3/2}/(3h)$. The decaying envelopes are $e_h^-=f_he^{-\phi_h}$ and $d_h^-=h^{-2/3}f_h^{-1}e^{-\phi_h}$, while the growing envelopes are $e_h^+=f_he^{\phi_h}$ and $d_h^+=h^{-2/3}f_h^{-1}e^{\phi_h}$. The stable control parameter is $\varepsilon_h:=C_{\rm ker}h\int_{\eta_-}^{\eta_+}|R(v)|/\sqrt{|v|+h^{2/3}}\,dv\le C_1h$, with constants depending only on the fixed equation and interval. The solution with terminal Airy data $(A_{h},A_{h}')$ at the right endpoint satisfies $|w-A_{h}|\le C_{A}e_h^-(e^{\varepsilon_{h}}-1)$ and $|w'-A_{h}'|\le C_{A}d_h^-(e^{\varepsilon_{h}}-1)$; the growing branch with Airy data $(B_{h},B_{h}')$ at $\eta=0$ satisfies the analogous value and derivative bounds with $e_h^+,d_h^+$. The connection between the forbidden-side exponential forms and the allowed-side oscillatory forms carries the absolute error bounded by the respective value and derivative envelopes times $C(\varepsilon_{h}+h/|\eta|^{3/2})$ ([[thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection]] clauses (a)-(c), including its Facts & Assumptions (F3)).

[F4] **Allowed-region transfer on the oscillatory side.** On a closed subinterval of the allowed side bounded away from $\xi_{0}$, the exact solutions are compared with their leading WKB waves by [[thm-nrqm-controlled-dynamics-wkb-explicit-error]], with the Gronwall factor of that theorem; the side's local wavenumber is $p=\sqrt{\lambda-W}$ ([[def-nrqm-approximations-framework-wkb-regime-model]] clause (c)).

[F5] **Model identification.** The physical potential and energy are $V(\ell\xi)=E_\star W(\xi)$, $E=E_\star\lambda$, and the model equation is $u''=(W-\lambda)u/h^{2}$, so the equation, turning points and functions $\theta,\Sigma$ have the displayed dimensionless data ([[def-nrqm-approximations-framework-wkb-regime-model]] clauses (b), (c)). For either allowed or forbidden action from $\xi_0$ to a fixed point on the corresponding side, apply [[lem-nrqm-approximations-scaled-line-model-correspondence]] clause (b)(i) or (b)(ii) after removing a $\delta$-neighborhood of $\xi_0$. The square-root integrand extends continuously with value zero at the simple turning point, so letting $\delta\downarrow0$ gives the same physical-to-dimensionless identity for the displayed phase and exponent.

## Proof

**Proof technique:** direct; push the model equation through the Liouville transformation, bound the two Airy-matched exact solutions by the stable Volterra estimates, and read the allowed-side sine and cosine forms from the Airy asymptotics with the same constants.

**Given:** the data of the statement and [F1]-[F5].

1.1 [Transformed equation] By [F1] applied to $q=W-\lambda$ (with $q$ of the sign of $\xi-\xi_{0}$ because $W'(\xi_{0})>0$ and $\xi_{0}$ is the single zero) the model equation is equivalent to $w''=[\zeta/h^{2}+R]w$ under $u=a\,w\circ\zeta$, with $\zeta$ exactly the displayed Liouville variable and $a=(\zeta')^{-1/2}>0$; all constants depend only on the model's data and the interval. [F1, F5, given]

1.2 [Matched solutions and forbidden forms] By [F3], take $w_{\mathrm{dec}}$ with Airy data $(A_h,A_h')$ at the right endpoint and $w_{\mathrm{grow}}$ with Airy data $(B_h,B_h')$ at $\zeta=0$; put $u_{\mathrm{dec}}(\xi)=a(\xi)w_{\mathrm{dec}}(\zeta(\xi))$ and similarly for the growing branch. These are exact solutions by [F1]. On the forbidden side, $2\zeta^{3/2}/(3h)=\Sigma(\xi)$ and $a(\xi)=\zeta^{1/4}(W-\lambda)^{-1/4}$. Thus [F2] and the value bounds of [F3] give the forbidden forms with $C=\tfrac12\pi^{-1/2}h^{1/6}$ and $C'=\pi^{-1/2}h^{1/6}$; the relative forbidden errors are bounded by a constant times $\varepsilon(h)+h/|\zeta|^{3/2}$ on the stated matching sections. These constants are nonzero for each $h>0$, while the error constants depend only on the fixed data. [F1, F2, F3, algebra]

2.1 [Independence for sufficiently small h] At $\zeta=0$, [F3] gives $w_{\mathrm{dec}}-A_h=O(\varepsilon(h))$ and $w_{\mathrm{dec}}'-A_h'=O(h^{-2/3}\varepsilon(h))$, since $e_h(0)=1$ and $d_h(0)=h^{-2/3}$ and $e^{\varepsilon(h)}-1=O(\varepsilon(h))$. The growing data there are exactly $B_h(0),B_h'(0)$, with $B_h(0)=O(1)$ and $B_h'(0)=O(h^{-2/3})$ by [F2]. Consequently their Wronskian at zero is $h^{-2/3}[\pi^{-1}+O(\varepsilon(h))]$, nonzero when $h$ is sufficiently small because $\varepsilon(h)\le C_1h$. Its derivative is zero for the common equation $w''=(\zeta/h^2+R)w$, so it is nonzero throughout. The invertible Liouville transformation preserves independence. Choose $h_0$ small enough for this and the supplied estimates. [F1, F2, F3, step 1.2, algebra]

2.2 [Allowed forms with additive errors] For $\xi<\xi_0$, $2|\zeta|^{3/2}/(3h)=\theta(\xi)$ and $a(\xi)=|\zeta|^{1/4}(\lambda-W)^{-1/4}$. The Airy formulas of [F2] therefore give $aA_h=2C(\lambda-W)^{-1/4}[\sin(\theta+\pi/4)+O(h/|\zeta|^{3/2})]$ and $aB_h=C'(\lambda-W)^{-1/4}[\cos(\theta+\pi/4)+O(h/|\zeta|^{3/2})]$. Adding the envelope-controlled differences of [F3] yields exactly the additive errors $\delta_{\rm a},\delta_{\rm a,grow}$ of (a),(b), including at sine or cosine zeros. If needed [F4] transports the data across any further fixed allowed matching section and adds its controlled error. The amplitudes are $2C$ and $C'$; no relative error at an oscillatory zero is asserted. [step 1.2, F1, F2, F3, F4, algebra]

2.3 [Derivative bounds] For the decaying branch use the envelopes $e_h^-,d_h^-$ of the Statement; for the growing branch use $e_h^+,d_h^+$. The chain rule gives, with $w_0=A_h$ or $B_h$ respectively, $u'-(a\,w_0\circ\zeta)'=a'(w-w_0)\circ\zeta+a\zeta'(w'-w_0')\circ\zeta$. The value and derivative bounds of [F3] therefore yield the two displayed transformed derivative error inequalities. To convert the Airy references to the slopes in the Statement, use $\zeta(\zeta')^{2}=W-\lambda$ and differentiate only the explicit leading amplitudes: on the forbidden side, $h\rho^{-1/4}(\rho^{-1/4}e^{\pm\Sigma})'=e^{\pm\Sigma}\bigl(\pm1-h\rho'/(4\rho^{3/2})\bigr)$; on the allowed side, $hp^{-1/2}(p^{-1/2}\sin(\theta+\pi/4))'=-\cos(\theta+\pi/4)-hp'\sin(\theta+\pi/4)/(2p^{2})$ and $hp^{-1/2}(p^{-1/2}\cos(\theta+\pi/4))'=\sin(\theta+\pi/4)-hp'\cos(\theta+\pi/4)/(2p^{2})$. At each fixed section away from $\xi_0$, $\rho,p,|\zeta|$ are bounded below, so the amplitude-derivative terms are $O(h)$; [F2]'s Airy derivative expansions and the transformed derivative estimates supply the remaining absolute errors $C_0(\varepsilon(h)+h/|\zeta|^{3/2})$, including at oscillatory zeros. No derivative of an unspecified error term is taken. [step 1.2, F1, F2, F3, algebra]

3.1 [Scope and identifications] The only hypotheses used are (W3), the local $C^{5}$ regularity of $W$ and the single simple zero at $\xi_{0}$, which are exactly the hypotheses of [F1]-[F4]; no further turning point, no wall and no resonance condition was used. The physical phase integrals and the correspondence with the line model are those of [F5], and the units are the model's. This proves clause (d). [step 1.1, step 2.2, step 2.3, F5, given] ∎

## Remarks

- **Orientation.** The phase $\theta$ and exponent $\Sigma$ are both measured from the turning point outward into the respective region; with this convention the decaying solution's allowed-side form is the sine with $+\pi/4$, and the growing solution's is the cosine, exactly as in the Airy asymptotics of [F2]. Reversing the orientation of the interval would replace the sine by a cosine and vice versa.
- **Use on this page.** The barrier-transmission theorem of this page uses the decaying connection on both sides of a separated barrier; the error control of clause (c) is what makes the two matching errors comparable.
