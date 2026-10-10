---
id: ex-em-evanescent-flux-example
kind: example
title: "Total internal reflection: decaying transmitted field, vanishing normal flux and the reflection phase"
status: draft
origin: pipeline
domain: physics
dependency_level: 21
deps: [pthm-em-oblique-fresnel, pthm-em-medium-plane-wave-fields, def-em-medium-wave-parameters, post-em-material-closure, lem-complex-conjugation-and-modulus-laws, def-principal-inverse-tangent, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions, def-tangent-cotangent-secant-cosecant, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-cosine-zero-sets-and-fundamental-period]
dependency_roles:
  pthm-em-oblique-fresnel: physical-result
  pthm-em-medium-plane-wave-fields: physical-result
  def-em-medium-wave-parameters: formulation-prerequisite
  post-em-material-closure: physical-assumption
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  def-principal-inverse-tangent: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  def-tangent-cotangent-secant-cosecant: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Deterministic example of total internal reflection in the lossless interface model for declared indices n_1=3/2, n_2=1 at sin(theta_i)=4/5: the unit-modulus reflection factor with its phase, the evanescent transmitted field with decay factor e^{-beta x_3}, the vanishing normal and positive tangential averaged fluxes. Excluded: measured indices, absorption, information-speed or signal-propagation claims, and every empirical statement."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "\u00a77.4.2 printed pp. 191-193: total internal reflection beyond $\\sin\\theta_C=n_2/n_1$, the imaginary normal component of the transmitted wavevector and the decaying evanescent solution $E_{\\mathrm{trans}}=E_T e^{(ik_T\\cdot\\hat z-\\omega t)}e^{\\mp\\omega\\alpha x/v_2}$; the explicit numbers here are evaluated from those formulas and the interface amplitudes, not copied from the source."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Problem 9.37 printed pp. 413-415 (part (f) on p. 415): the evanescent transmitted field $E_T=E_{0T}e^{-Kz}e^{i(kx-\\omega t)}$ with $k=(\\omega/c)n_1\\sin\\theta_I$, $K=(\\omega/c)\\sqrt{n_1^{2}\\sin^{2}\\theta_I-n_2^{2}}$, the reflection coefficient of magnitude one for both polarisations and the statement that no energy is transmitted into medium 2 on average (part (f)); \u00a79.3.3 printed pp. 388-390 for the amplitude formulas used. Retained scan with OCR noise; the displayed numbers were verified by the local computation in the batch notes."
verification:
  precheck: pass

---

## Example

Adopt the setting of [[pthm-em-oblique-fresnel]] with equal permeabilities $\mu_1=\mu_2=:\mu>0$ and declared indices $n_1=3/2$, $n_2=1$ (declared model parameters, not measurements), choose the tangential wavevector $\kappa=(6\omega/(5c))e_1$, so $\hat\kappa=e_1$ and $\hat y=n\times\hat\kappa=e_2$, and take the transverse-electric polarisation $e_j=E_j\hat y$. Let the incidence angle be given by $\sin\theta_i=4/5$, which exceeds the critical angle $\theta_c$ with $\sin\theta_c=n_2/n_1=2/3$, so $|\kappa|=K_1\sin\theta_i=(6/5)(\omega/c)>(\omega/c)=K_2$. Then with $\beta=\sqrt{|\kappa|^{2}-K_2^{2}}=(\sqrt{11}/5)(\omega/c)$ and $k_{13}=(\omega/c)(3/2)(3/5)=(9/10)(\omega/c)$: (i) [Reflection] $Y^{s}_1=9/(10\mu c)$, $Y^{s}_2=i\sqrt{11}/(5\mu c)$ and $$r_s=\frac{9/10-i\sqrt{11}/5}{9/10+i\sqrt{11}/5},\qquad |r_s|=1,\qquad t_s=\frac{9/5}{9/10+i\sqrt{11}/5},\qquad |t_s|^{2}=\frac{324}{125};$$ the reflection factor is the phase $r_s=e^{-2i\varphi}$ with $\varphi=\arctan\!\bigl(2\sqrt{11}/9\bigr)\approx0.63514703$ (about $36.39124^\circ$), i.e. the reflected wave acquires the phase $-2\varphi\approx-1.27029406$ (about $-72.78249^\circ$); (ii) [Transmitted field] the transmitted field is $E_t(x,t)=e^{-\beta x_3}\operatorname{Re}\bigl(E_t\hat y\,e^{i(|\kappa|x_1-\omega t)}\bigr)$ with $\beta=(\sqrt{11}/5)(\omega/c)$: it decays by the factor $e^{-\sqrt{11}/5}\approx0.51514$ when $x_3$ increases by $c/\omega$, its period-averaged normal flux vanishes identically, $\langle S_t\cdot n\rangle\equiv0$, while its tangential averaged flux is positive, $\langle S_t\cdot\hat\kappa\rangle=e^{-2\beta x_3}\,\frac{(6/5)(\omega/c)|E_t|^{2}}{2\mu\omega}=e^{-2\beta x_3}\frac{3|E_t|^{2}}{5\mu c}$; (iii) [Flux budget] $|r_s|^{2}+(\operatorname{Re}Y^{s}_2/Y^{s}_1)|t_s|^{2}=1+0=1$, so the whole incident normal averaged flux is reflected, while the evanescent field carries a tangential averaged flux only; (iv) [Scope] the example is an exact deterministic computation of the lossless interface model for declared parameters; it reports no measurement, and the presence of a tangential evanescent flux is not a claim about information speed or signal propagation.

## Verification



**Proof technique:** direct substitution in the oblique-incidence and medium plane-wave theorems with exact rational and quadratic-irrational arithmetic, and an explicit phase computation via Euler's form.

**Given:** The lossless two-media setting of [[pthm-em-oblique-fresnel]] with $\mu_1=\mu_2=\mu>0$, $n_1=3/2$, $n_2=1$, the tangential wavevector $\kappa=(6\omega/(5c))e_1$, the transverse-electric data $e_j=E_j\hat y$ with $\hat y=e_2$, and the incidence data $\sin\theta_i=4/5$.

[A1] The oblique-incidence theorem [[pthm-em-oblique-fresnel]]: clause (a) and (d) give $Y^s_1=k_{13}/(\mu_1\omega)$, $Y^s_2=k_{t3}/(\mu_2\omega)$, the amplitude formulas, and in the evanescent branch $|r_s|=1$, $|t_s|^2=4(Y^s_1)^2/((Y^s_1)^2+|Y^s_2|^2)>0$ together with the flux budget; clause (d) also records that the transmitted field decays and its normal averaged flux vanishes.

[A2] The medium plane-wave structure [[pthm-em-medium-plane-wave-fields]]: the transmitted evanescent field of clause (e) with the substitution $n'=n$, $\kappa_0=\kappa$: the exact factorization, the vanishing normal component $\langle S\cdot n'\rangle\equiv0$ and the positive tangential averaged flux $\langle S\cdot\hat\kappa_0\rangle=|\kappa_0||e|^2e^{-2\beta n'\cdot x}/(2\mu\omega)$ for the transverse-electric data $e=E_0(n'\times\hat\kappa_0)$.

[F1] Medium parameters ([[def-em-medium-wave-parameters]]): $K_j=\omega(\varepsilon_j\mu_j)^{1/2}=\omega n_j/c$ and $\varepsilon_j=n_j^2/(c^2\mu)$ for the common permeability. The selected evanescent wavevectors in [[pthm-em-oblique-fresnel]] give $k_{13}^2=K_1^2-|\kappa|^2$, $\beta^2=|\kappa|^2-K_2^2$ and $k_{t3}=i\beta$.

[F2] Complex arithmetic and modulus ([[lem-complex-conjugation-and-modulus-laws]]): $\overline{z+w}=\overline z+\overline w$, $\overline{zw}=\overline z\,\overline w$, $|zw|=|z||w|$, $|z|^2=z\overline z$ and $|z|\ge0$ with $|z|=0$ only for $z=0$; in particular a complex number of modulus one is nonzero and the sum of a complex number and its conjugate is twice its real part.

[F3] Trigonometry and phases: $\arctan$ is the principal inverse tangent with $\tan(\arctan y)=y$ ([[def-principal-inverse-tangent]]); $\tan x=\sin x/\cos x$ ([[def-tangent-cotangent-secant-cosecant]]); $\sin^2x+\cos^2x=1$ and $1+\tan^2x=\sec^2x$ ([[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]); cosine is strictly decreasing on $[0,\pi]$ with $\cos(\pi/2)=0$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]); and for real $y$, $\exp(iy)=\cos y+i\sin y$ with $|\exp(iy)|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

1.1 [The geometry and the evanescent data] With $\kappa=(6\omega/(5c))e_1$ one has $\hat\kappa=e_1$, $|\kappa|=(6/5)(\omega/c)$ and $\hat y=n\times\hat\kappa=e_3\times e_1=e_2$; $K_1=(3/2)(\omega/c)$, $K_2=\omega/c$ by [F1], so $|\kappa|=K_1\sin\theta_i$ with $\sin\theta_i=4/5$, and $|\kappa|>K_2$ because $6/5>1$. Hence the evanescent branch applies: $\beta=\sqrt{|\kappa|^2-K_2^2}=\sqrt{(36/25-1)}(\omega/c)=\sqrt{11/25}\,(\omega/c)=(\sqrt{11}/5)(\omega/c)$ and $k_{13}=\sqrt{K_1^2-|\kappa|^2}=\sqrt{(9/4-36/25)}(\omega/c)=\sqrt{81/100}\,(\omega/c)=(9/10)(\omega/c)$; the critical angle satisfies $\sin\theta_c=n_2/n_1=2/3<4/5=\sin\theta_i$, both angles being in $(0,\pi/2)$. [given, A1, F1, algebra]

2.1 [Admittances and reflection data, clause (i)] By [A1](a) and [F1], $Y^s_1=k_{13}/(\mu_1\omega)=9/(10\mu c)$, $Y^s_2=k_{t3}/(\mu_2\omega)=i\beta/(\mu\omega)=i\sqrt{11}/(5\mu c)$ and $t_s=2Y^s_1/(Y^s_1+Y^s_2)=(9/(5\mu c))/((9/10+i\sqrt{11}/5)/(\mu c))=(9/5)/(9/10+i\sqrt{11}/5)$; the numerator $9/10-i\sqrt{11}/5$ of $r_s=(Y^s_1-Y^s_2)/(Y^s_1+Y^s_2)$ is the complex conjugate of its denominator, so $|r_s|=1$ by [F2] (and [A1](d)). For the transmitted modulus, $|t_s|^2=4(Y^s_1)^2/((Y^s_1)^2+|Y^s_2|^2)$ by [A1](d); computing $(Y^s_1)^2=81/(100\mu^2c^2)$ and $|Y^s_2|^2=11/(25\mu^2c^2)=44/(100\mu^2c^2)$ gives $|t_s|^2=(324/100)/(125/100)=324/125$. [step 1.1, A1, F2, algebra]

2.2 [The transmitted field and its fluxes, clause (ii)] By $|t_s|^2$-normalised data we take the transmitted electric amplitude $E_t\hat y$ with $E_t=t_sE_i$; the evanescent structure of [A2] applied with $n'=n=e_3$, $\kappa_0=\kappa$, $\beta$ as in step 1.1 and $e=E_t\hat y=E_t(n'\times\hat\kappa_0)$ gives exactly $E_t(x,t)=e^{-\beta x_3}\operatorname{Re}\bigl(E_t\hat y\,e^{i(|\kappa|x_1-\omega t)}\bigr)$, the identity $\langle S_t\cdot n\rangle\equiv0$, and the tangential averaged flux $\langle S_t\cdot\hat\kappa\rangle=e^{-2\beta x_3}|\kappa||E_t|^2/(2\mu\omega)$; substituting $|\kappa|=(6/5)(\omega/c)$ gives $\langle S_t\cdot\hat\kappa\rangle=e^{-2\beta x_3}(6/5)(\omega/c)|E_t|^2/(2\mu\omega)=e^{-2\beta x_3}3|E_t|^2/(5\mu c)$. The decay over a distance $c/\omega$ is the factor $e^{-\beta c/\omega}=e^{-\sqrt{11}/5}$, whose decimal display in clause (ii) is the stated rounding. [step 1.1, A1, A2, algebra]

3.1 [The reflection phase, clause (i)] Put $Y_1:=9/10$ and $\beta':=\sqrt{11}/5$ in the units $1/(\mu c)$ and $\alpha:=\beta'/Y_1=2\sqrt{11}/9$, so that $r_s=(1-i\alpha)/(1+i\alpha)$; let $\varphi:=\arctan\alpha\in(0,\pi/2)$ and $w:=1+i\alpha$, $|w|=\sqrt{1+\alpha^2}$. By [F3], $\tan\varphi=\alpha$ and $1+\tan^2\varphi=\sec^2\varphi$, so $\cos^2\varphi=1/(1+\alpha^2)=1/|w|^2$; since $\cos\varphi>0$ (cosine is strictly decreasing on $[0,\pi]$ with $\cos(\pi/2)=0$ and $\varphi\in(0,\pi/2)$), $\cos\varphi=1/|w|$ and $\sin\varphi=\alpha\cos\varphi=\alpha/|w|$. Euler's form of [F3] then gives $w=|w|(\cos\varphi+i\sin\varphi)=|w|e^{i\varphi}$ and $\overline w=|w|e^{-i\varphi}$ by [F2], so $r_s=\overline w/w=e^{-2i\varphi}$. The decimal values displayed in clause (i) are the stated roundings of $\varphi=\arctan(2\sqrt{11}/9)$ and of the reflected phase $-2\varphi$. [step 2.1, F2, F3, algebra]

4.1 [Flux budget and scope, clauses (iii)-(iv)] By [A1](d), $|r_s|^2+(\operatorname{Re}Y^s_2/Y^s_1)|t_s|^2=1$; here $\operatorname{Re}Y^s_2=0$ by step 2.1, so the identity reads $1+0=1$: the whole incident normal averaged flux is reflected, while the tangential averaged flux of step 2.2 is positive and transports no normal flux. All quantities are declared model parameters; the computation is deterministic classical interface algebra, reports no measurement, and neither the tangential evanescent flux nor the reflection phase is a claim about information speed, signal propagation or empirical data. No choice principle is used. [given, step 2.1, step 2.2, A1, F2] ∎
