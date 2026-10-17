---
id: pthm-tgr-reduced-horizon-temperature
kind: physics-theorem
title: Reduced quantum horizon temperature calibration
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - def-countable-choice
  - post-tgr-exponential-current-and-spectral-thermometer
  - lem-tgr-thermal-contour-spectrum
  - def-tgr-framework-units
  - post-tgr-stationary-equilibrium
  - lem-tgr-killing-thermal-normalization
  - pthm-tgr-tolman-ehrenfest
  - thm-derivative-of-exponential
  - cor-mean-value-theorem
  - cor-exponential-reciprocal-and-positivity
  - lem-tgr-exponential-current
  - lem-tgr-positive-damping-boundary
dependency_roles:
  def-countable-choice: mathematical-premise
  post-tgr-exponential-current-and-spectral-thermometer: physical-assumption
  lem-tgr-thermal-contour-spectrum: mathematical-premise
  def-tgr-framework-units: formulation-prerequisite
  post-tgr-stationary-equilibrium: physical-assumption
  lem-tgr-killing-thermal-normalization: mathematical-premise
  pthm-tgr-tolman-ehrenfest: physical-result
  thm-derivative-of-exponential: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  lem-tgr-exponential-current: mathematical-premise
  lem-tgr-positive-damping-boundary: mathematical-premise
physical_scope: "Reference temperature calibration in the selected reduced exponential-current and two-state Markov model. A local stationary temperature formula applies only after the stated equilibrium assumption and reference match; no general Hawking or KMS theorem is asserted."
empirical_premises: []
proof_strategy: direct
strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Preskill, Quantum Field Theory in Curved Spacetime, complete Caltech lecture notes"
      url: "https://preskill.caltech.edu/ph236c/Preskill_QFT_curved_spacetime.pdf"
      locator: "Complete 151-page PDF; §4.3, printed pp. 55–58, and §4.7, pp. 71–74. These describe the ideal detector response and Rindler interpretation, not the local rate-model deduction."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §3, printed pp. 11–16. Its general bifurcate-horizon/KMS discussion is context and is not assumed as the local proof."
    - title: "Luís C. B. Crispino, Atsushi Higuchi, and George E. A. Matsas, The Unruh effect and its applications"
      url: "https://arxiv.org/pdf/0710.5373"
      locator: "Complete 53-page review; §III.A.1–2, PDF pp. 19–22. Its point-detector perturbative response is context, not an exact finite-time probability."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$) as defined in [[def-countable-choice]]. Use the reduced branch of [[post-tgr-exponential-current-and-spectral-thermometer]] with $\kappa>0$ in inverse metres. Let $E>0$ be an energy in joules, $\hbar>0$ in joule-seconds, $c>0$ in metres per second, $k_B>0$ in joules per kelvin, and $\gamma_{\rm red}>0$ in metres per second. Put $\nu=E/(\hbar c)$ and use the adopted rates $r_\uparrow=\gamma_{\rm red}S_\kappa(\nu)$ and $r_\downarrow=\gamma_{\rm red}S_\kappa(-\nu)$ in that postulate's two-state model. The unique stationary excited-state probability and its ratio are

$$p_* = \frac{1}{1+e^{2\pi E/(\hbar c\kappa)}},\qquad \frac{p_*}{1-p_*}=e^{-2\pi E/(\hbar c\kappa)}.$$

Define the model's effective reference temperature $T_{\rm red}>0$ by $p_*/(1-p_*)=e^{-E/(k_BT_{\rm red})}$. Then

$$T_{\rm red}=\frac{\hbar c\kappa}{2\pi k_B}.$$

Let $\xi$ be the same selected reference Killing field and $u$ its length flow parameter from [[post-tgr-exponential-current-and-spectral-thermometer]]. For the horizon interpretation, additionally supply a smooth embedded null hypersurface $\mathcal H$ in the domain of $\xi$, require $\chi:=\xi|_{\mathcal H}$ to be a nonzero tangent null generator with the same length-flow normalization, and assume $\nabla_\chi\chi=\kappa\chi$ on $\mathcal H$ in the sense of [[def-tgr-framework-units]]. Under these additional identifications of both generator and constant geometric surface gravity, $T_{\rm red}$ is the reference temperature of that reduced horizon model. If, in addition, $\xi$ is future timelike on a connected open domain $O$, a selected stationary equilibrium of [[post-tgr-stationary-equilibrium]] is adopted there with this same $\xi$, a reference event $x_{\rm ref}\in O$ has Killing lapse $N_\xi(x_{\rm ref})=1$, and its local reference temperature is identified with $T_{\rm red}$, then its local proper-temperature field obeys $T(x)=T_{\rm red}/N_\xi(x)$ on $O$. These are conditional model deductions; the theorem establishes no horizon formation, general Hawking radiation, KMS state, detector thermalization, or empirical reading.

## Facts & Assumptions

**Given:** Countable Choice and the reduced branch and rate equation of [[post-tgr-exponential-current-and-spectral-thermometer]], with $\kappa,E,\hbar,c,k_B,\gamma_{\rm red}>0$ and the units stated above.

[A1] [[post-tgr-exponential-current-and-spectral-thermometer]] adopts $r_\uparrow=\gamma_{\rm red}S_\kappa(E/(\hbar c))$, $r_\downarrow=\gamma_{\rm red}S_\kappa(-E/(\hbar c))$, and the differential equation for $p(t)$; the rates are model inputs.

[A2] [[post-tgr-stationary-equilibrium]] adopts a smooth positive proper-temperature field on a connected domain with a selected future-timelike Killing field $\xi$ and Killing inverse-temperature vector $\beta$. The optional use here additionally identifies that selected field with the reduced branch's reference field.

[A3] For the optional local-temperature clause, additionally take $x_{\rm ref}\in O$, identify the selected bath's proper temperature there with $T_{\rm red}$, and normalize $N_\xi(x_{\rm ref})=1$. This is an explicit model identification, not a deduction from the rate equation.

[F1] [[lem-tgr-thermal-contour-spectrum]] states that for $\nu>0$, $S_\kappa(\nu)>0$ and $S_\kappa(-\nu)=e^{2\pi\nu/\kappa}S_\kappa(\nu)$, with $S_\kappa(0)=\kappa/(4\pi)$ as a continuous value. This mathematical supplier, its prerequisite [[lem-tgr-exponential-current]], and that item's prerequisite [[lem-tgr-positive-damping-boundary]] currently have status `draft`; the exact chiral spectrum input is conditional on these statements and their proofs, with no independent proof acceptance claimed.

[F2] [[def-tgr-framework-units]] fixes $x^0=ct$ length coordinates, $k_B$ in joules per kelvin, $\hbar$ in joule-seconds, $N_\xi=\sqrt{-g(\xi,\xi)}$, and the conditional definition of $\kappa_{\rm geom}$ by $\nabla_\chi\chi=\kappa_{\rm geom}\chi$ on a supplied smooth null hypersurface.

[F3] The current draft [[lem-tgr-killing-thermal-normalization]] states and proves that on the connected stationary carrier, the Killing condition on $\beta$ gives $N_\xi T=T_K$ for one positive constant; this optional use remains conditional on that draft result.

[F4] The current draft [[pthm-tgr-tolman-ehrenfest]] applies that carrier and states $T(x)=T_K/N_\xi(x)$, with the reference value $T_K=N_\xi(x_{\rm ref})T(x_{\rm ref})$ for $x_{\rm ref}\in O$. This optional use remains conditional on that draft result.

[F5] [[thm-derivative-of-exponential]] gives $(e^x)'=e^x$.

[F6] [[cor-mean-value-theorem]] implies that a differentiable function with zero derivative on an interval is constant there.

[F7] [[cor-exponential-reciprocal-and-positivity]] gives $e^x>0$ for every real $x$. Together with [F5], this makes the derivative of $x\mapsto e^x$ positive; [F6] then implies that the exponential is strictly increasing.

[A5] For the horizon interpretation only, supply $\mathcal H$ and identify its generator with $\chi=\xi|_{\mathcal H}$, with the same length-flow normalization and $\nabla_\chi\chi=\kappa\chi$. These are additional model assumptions; equality of surface-gravity values alone does not identify the generators.

[A4] Assume Countable Choice [[def-countable-choice]], retaining the hypothesis of the mathematical spectral and tested-field suppliers used here.

## Proof

1.1 Under the Countable Choice assumption [A4], since $E,\hbar,c,\kappa>0$, $\nu=E/(\hbar c)>0$. By [F1], both $S_\kappa(\nu)$ and $S_\kappa(-\nu)$ are positive and their ratio is $S_\kappa(-\nu)/S_\kappa(\nu)=e^{2\pi\nu/\kappa}$. Multiplying by the same $\gamma_{\rm red}>0$ gives $r_\uparrow,r_\downarrow>0$ and $r_\downarrow/r_\uparrow=e^{2\pi E/(\hbar c\kappa)}$. [A4, A1, F1, given, algebra]

2.1 Put $R=r_\uparrow+r_\downarrow$ and $p_*=r_\uparrow/R$. Then $0<p_*<1$, and $p(t)=p_*+(p(0)-p_*)e^{-Rt}$ satisfies the adopted equation and initial condition by [F5]. Since $R>0$, [F5] and [F7] give $0<e^{-Rt}\le1$ for $t\ge0$; hence $p(t)=e^{-Rt}p(0)+(1-e^{-Rt})p_*$ is a probability. For any other differentiable solution, $q(t)=e^{Rt}(p(t)-p_*)$ has zero derivative by the rate equation and [F5]; [F6] makes $q$ constant on every compact time interval, so the displayed solution is unique. Its stationary value is therefore $p_*$. [A1, F5, F6, F7, step 1.1, algebra]

3.1 From $p_*=r_\uparrow/R$ and $1-p_*=r_\downarrow/R$, we have $p_*/(1-p_*)=r_\uparrow/r_\downarrow=e^{-2\pi E/(\hbar c\kappa)}$ by step 1.1. By [F5] and [F7], the exponential has positive derivative, so [F6] makes it strictly increasing; comparison with the defining Boltzmann ratio gives $E/(k_BT_{\rm red})=2\pi E/(\hbar c\kappa)$. Since $E>0$, solving yields $T_{\rm red}=\hbar c\kappa/(2\pi k_B)$, which has kelvin units. Under [A5], the generator and its constant geometric surface gravity are exactly those of the selected reduced branch, so this reference scale has the stated reduced-horizon interpretation. [A5, F2, F1, step 1.1, step 2.1, F5, F6, F7, algebra]

4.1 Under the optional assumptions [A2]–[A3], [F3]–[F4] give $T(x)=T_K/N_\xi(x)$ on $O$. Evaluating at $x_{\rm ref}$ and using $N_\xi(x_{\rm ref})=1$ and [A3] sets $T_K=T_{\rm red}$. Substitution gives $T(x)=T_{\rm red}/N_\xi(x)$. The result is conditional on the separately adopted bath and reference match. [A2, A3, F2, F3, F4, step 3.1, algebra] ∎

