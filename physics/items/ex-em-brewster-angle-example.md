---
id: ex-em-brewster-angle-example
kind: example
title: "The Brewster angle at an equal-permeability interface and the surviving $s$-reflection"
status: published
origin: pipeline
domain: physics
dependency_level: 21
deps: [pthm-em-oblique-fresnel, def-em-medium-wave-parameters, post-em-material-closure, def-principal-inverse-sine-and-cosine, def-principal-inverse-tangent, def-tangent-cotangent-secant-cosecant, thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas]
dependency_roles:
  pthm-em-oblique-fresnel: physical-result
  def-em-medium-wave-parameters: formulation-prerequisite
  post-em-material-closure: physical-assumption
  def-principal-inverse-sine-and-cosine: mathematical-premise
  def-principal-inverse-tangent: mathematical-premise
  def-tangent-cotangent-secant-cosecant: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Deterministic example of the oblique-incidence interface model for two declared lossless media with equal permeabilities and indices n_1=1, n_2=3/2: the unique Brewster angle tan(theta_B)=n_2/n_1, r_p=0, t_p=1, the surviving s-reflection r_s=-5/13 with R_s+T_s=1 exactly. Excluded: measured refractive indices, absorption, interfaces between unequal permeabilities, unpolarised-beam statistics and every empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "\u00a77.4.1 printed pp. 190-191: Brewster's angle from $n_1\\cos\\theta_T=n_2\\cos\\theta_I$ and $\\theta_I+\\theta_T=\\pi/2$, giving $\\tan\\theta_B=n_2/n_1$ and the statement that in the 'normal' (s) polarisation no such quenching occurs; the numerical instance $n_1=1$, $n_2=3/2$ is evaluated here from the formulas, not copied from the source."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "\u00a79.3.3 printed pp. 390-391, Eqs. (9.109)-(9.112): Fresnel's equations for the parallel polarisation and Brewster's angle $\\tan\\theta_B=n_2/n_1$ for $\\mu_1=\\mu_2$; Problem 9.16 printed p. 392: the perpendicular polarisation has no Brewster angle and its reflected wave is never zero unless the media are optically indistinguishable. Retained scan with OCR noise; the exact rational values were verified by the local computation in the batch notes."
verification:
  precheck: pass
---

## Example

Adopt the setting of [[pthm-em-oblique-fresnel]] with two lossless media at rest, equal permeabilities $\mu_1=\mu_2=:\mu>0$ and declared refractive indices $n_1=1$, $n_2=3/2$ (declared model parameters, not optical measurements), so that $\varepsilon_j=n_j^{2}/(c^{2}\mu)$ and $K_j=n_j\omega/c$ in the notation of [[def-em-medium-wave-parameters]]. Then: (i) [Brewster angle] by [[pthm-em-oblique-fresnel]](c) the TM amplitude vanishes exactly at the unique angle $\theta_B\in(0,\pi/2)$ with $\tan\theta_B=n_2/n_1=3/2$, i.e. $\sin\theta_B=3/\sqrt{13}$, $\cos\theta_B=2/\sqrt{13}$; the transmitted angle satisfies $n_1\sin\theta_B=n_2\sin\theta_t$, hence $\sin\theta_t=2/\sqrt{13}$, and $\theta_B+\theta_t=\pi/2$; (ii) [Amplitudes] at $\theta_i=\theta_B$ one has $Y^{p}_1=Y^{p}_2=\sqrt{13}/(2c\mu)$, hence $r_p=0$ and $t_p=1$; the remaining $s$-amplitudes are $Y^{s}_1=2/(\sqrt{13}c\mu)$, $Y^{s}_2=9/(2\sqrt{13}c\mu)$ and $$r_s=\frac{2/\sqrt{13}-9/(2\sqrt{13})}{2/\sqrt{13}+9/(2\sqrt{13})}=-\frac{5}{13},\qquad t_s=\frac{8}{13};$$ (iii) [Flux budget] with $R_s=|r_s|^{2}=25/169$ and $T_s=(Y^{s}_2/Y^{s}_1)|t_s|^{2}=(9/4)(64/169)=144/169$ one has $R_s+T_s=169/169=1$ exactly, while the TM channel has $R_p=0$, $T_p=1$; (iv) [Scope] the numbers are declared model parameters; the example is a deterministic computation of the classical interface model, reports no measurement, and a pure TM incident wave has zero reflected field at the Brewster angle. For incident data with a nonzero TE component, the surviving reflected field is TE-polarised because $r_p=0$ and $r_s\ne0$; no unpolarised-beam statistics are modelled here.

## Verification

**Proof technique:** direct substitution in the oblique-incidence theorem and the medium parameters, with all numerical values kept exact.

**Given:** The lossless two-media setting of [[pthm-em-oblique-fresnel]] with $\mu_1=\mu_2=\mu>0$, $n_1=1$, $n_2=3/2$, $\varepsilon_j=n_j^2/(c^2\mu)$, and the Brewster angle $\theta_B$ of [A1](c).

[A1] The oblique-incidence theorem [[pthm-em-oblique-fresnel]]: its clause (a) gives the two admittance systems with $Y^s_1=k_{13}/(\mu_1\omega)$, $Y^p_1=\varepsilon_1\omega/k_{13}$, $Y^s_2=k_{t3}/(\mu_2\omega)$, $Y^p_2=\varepsilon_2\omega/k_{t3}$ and the amplitude formulas; clause (b) gives the angle law $n_1\sin\theta_i=n_2\sin\theta_t$, the normal fluxes $Y^\chi_1|E^\chi_i|^2/2$, $-Y^\chi_1|E^\chi_r|^2/2$, $Y^\chi_2|E^\chi_t|^2/2$ and $R_\chi+T_\chi=1$ with $R_\chi=|r_\chi|^2$, $T_\chi=(Y^\chi_2/Y^\chi_1)|t_\chi|^2$; clause (c) gives the unique Brewster angle with $\tan\theta_B=n_2/n_1$ for $n_1\ne n_2$ and the nonzero $s$-reflection there.

[F1] Medium parameters ([[def-em-medium-wave-parameters]]): $K_j=\omega(\varepsilon_j\mu_j)^{1/2}=\omega n_j/c$ and $\varepsilon_j=n_j^2/(c^2\mu)$ for $\mu_j=\mu$. In the propagating interface setting of [[pthm-em-oblique-fresnel]] (Statement and clause (b)), $k_{13}=\sqrt{K_1^2-|\kappa|^2}=K_1\cos\theta_i$ and $k_{t3}=K_2\cos\theta_t$ for $|\kappa|<K_2$; the cosine formulas follow from the stated positive normal roots and the principal angle convention.

[F2] Trigonometry: $\sin(\arcsin y)=y$ with sine strictly increasing on $[-\pi/2,\pi/2]$ ([[def-principal-inverse-sine-and-cosine]]); $\tan:(-\pi/2,\pi/2)\to\mathbb R$ is a continuous strictly increasing bijection whose principal inverse is $\arctan:\mathbb R\to(-\pi/2,\pi/2)$, with $\tan(\arctan y)=y$ for every real $y$ ([[def-principal-inverse-tangent]]); $\tan x=\sin x/\cos x$ ([[def-tangent-cotangent-secant-cosecant]]); $\sin^2x+\cos^2x=1$ and $\cos(-x)=\cos x$ ([[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]); sine strictly increasing on $[0,\pi/2]$ with $\sin 0=0$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]); and $\sin(x+\pi/2)=\cos x$ ([[thm-quarter-turn-values-and-shift-formulas]]).

1.1 [The Brewster angle and its sine and cosine, clause (i)] Since $n_1=1\ne3/2=n_2$ and $\mu_1=\mu_2$, [A1](c) gives a unique Brewster angle $\theta_B\in(0,\pi/2)$ with $\tan\theta_B=n_2/n_1=3/2$. By [F2], $\sin^2\theta_B=\tan^2\theta_B/(1+\tan^2\theta_B)=(9/4)/(13/4)=9/13$; since $\theta_B\in(0,\pi/2)$ and sine is strictly increasing on $[0,\pi/2]$ with $\sin 0=0$, $\sin\theta_B>0$, hence $\sin\theta_B=3/\sqrt{13}$; and $\cos\theta_B=\sin\theta_B/\tan\theta_B=(3/\sqrt{13})/(3/2)=2/\sqrt{13}$. [A1, F2, algebra]

2.1 [Transmitted angle and the right-angle relation, clause (i)] Snell's law $n_1\sin\theta_B=n_2\sin\theta_t$ of [A1](b) gives $\sin\theta_t=(2/3)(3/\sqrt{13})=2/\sqrt{13}$. Since also $\cos\theta_B=2/\sqrt{13}=\sin\theta_t$ and $\sin(\pi/2-\theta_B)=\cos\theta_B$ by [F2], the equality $\sin\theta_t=\sin(\pi/2-\theta_B)$ holds with $\theta_t,\pi/2-\theta_B\in(0,\pi/2)$; sine is strictly increasing on that interval, hence injective, so $\theta_t=\pi/2-\theta_B$, i.e. $\theta_B+\theta_t=\pi/2$. [step 1.1, A1, F2, algebra]

3.1 [The admittances, clause (ii)] By [F1], $K_1=\omega/c$, $K_2=3\omega/(2c)$, $k_{13}=K_1\cos\theta_B=(\omega/c)(2/\sqrt{13})$ and $k_{t3}=K_2\cos\theta_t=K_2\sin\theta_B=(3\omega/(2c))(3/\sqrt{13})=9\omega/(2\sqrt{13}c)$. With $\varepsilon_1=1/(c^2\mu)$ and $\varepsilon_2=9/(4c^2\mu)$, the admittances of [A1](a) are $Y^s_1=k_{13}/(\mu\omega)=2/(\sqrt{13}c\mu)$, $Y^s_2=k_{t3}/(\mu\omega)=9/(2\sqrt{13}c\mu)$, $Y^p_1=\varepsilon_1\omega/k_{13}=\sqrt{13}/(2c\mu)$ and $Y^p_2=\varepsilon_2\omega/k_{t3}=(9/(4c^2\mu))\omega\cdot2\sqrt{13}c/(9\omega)=\sqrt{13}/(2c\mu)$, so $Y^p_1=Y^p_2$ exactly. [step 1.1, step 2.1, A1, F1, algebra]

4.1 [The amplitudes, clause (ii)] By [A1](a) and step 3.1, $r_p=(Y^p_1-Y^p_2)/(Y^p_1+Y^p_2)=0$ and $t_p=2Y^p_1/(Y^p_1+Y^p_2)=1$. For the $s$-channel, factoring the common positive scale $1/(\sqrt{13}c\mu)$ from numerator and denominator, $r_s=(2-9/2)/(2+9/2)=(-5/2)/(13/2)=-5/13$ and $t_s=2\cdot2/(2+9/2)=4/(13/2)=8/13$. [step 3.1, A1, algebra]

5.1 [Flux budget, clause (iii)] By [A1](b), $R_s=|r_s|^2=25/169$ and $T_s=(Y^s_2/Y^s_1)|t_s|^2=(9/4)(64/169)=144/169$, so $R_s+T_s=(25+144)/169=169/169=1$ exactly; and in the TM channel $R_p=|r_p|^2=0$, $T_p=(Y^p_2/Y^p_1)|t_p|^2=1$, so $R_p+T_p=1$ as well. [step 4.1, A1, algebra]

6.1 [Scope, clause (iv)] All quantities are declared model parameters and the computation is exact rational or quadratic-irrational algebra of the interface model; no measured refractive index, no absorption, no unequal-permeability interface, no unpolarised-beam statistics and no empirical claim is used. Since $r_p=0$ and $r_s\ne0$ at $\theta_B$, an incident wave with a nonzero TE component has a surviving reflected TE component; no statement about random or unpolarised beams is made. No choice principle is used. [given, step 5.1, A1] ∎
