---
id: post-r5-cosmology-4d-scalar-eft-model
kind: postulate
title: "Adopted two-derivative multi-scalar cosmology EFT"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 1
deps:
  - def-r5-cosmology-4d-scalar-eft-data
  - def-gr-si-unit-and-coordinate-conventions
  - post-gr-einstein-field-law
  - post-gr-spacetime-and-classical-domain
  - def-gr-hilbert-stress-energy-tensor
dependency_roles:
  def-r5-cosmology-4d-scalar-eft-data: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  post-gr-einstein-field-law: formulation-prerequisite
  post-gr-spacetime-and-classical-domain: formulation-prerequisite
  def-gr-hilbert-stress-energy-tensor: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "An adopted low-energy Einstein-frame model premise for the stated smooth scalar EFT data: the displayed two-derivative scalar action and compactly supported scalar stationarity, together with the direct Einstein equation at zero cosmological constant. It does not derive either premise, establish EFT control or solution existence, or claim a global string realization or empirical truth."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6-luna; native-step3-independent-reader; delegated by /root under owner authorization
sources:
  references:
    - title: "M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "Complete review; §§2.4–2.4.2, PDF pp. 21–25, for multi-field scalar actions and equations; PDF pp. 58–61, for string-inflation ultraviolet and EFT-control qualifications."
    - title: "Daniel Baumann, TASI Lectures on Inflation, arXiv:0907.5424"
      url: "https://arxiv.org/pdf/0907.5424"
      locator: "Complete lecture notes; Lecture 1 §§3.1–3.3 and 6.1–6.2, PDF pp. 15–31, for scalar-field FLRW models and their status as model assumptions."
---

## Postulate

Adopt the following model premise for a datum of
[[def-r5-cosmology-4d-scalar-eft-data]], in the classical low-energy regime and in units $\hbar=c=1$.

**(i) Action and variation class.** On a smooth spacetime region $\mathcal U\subseteq\mathcal X$, use action differences from
$$ S_{\rm EFT}=\int_{\mathcal U}\sqrt{-g}\left[\frac{M_P^2}{2}R-\frac12G_{ij}(\phi)g^{\mu\nu}\partial_\mu\phi^i\partial_\nu\phi^j-V(\phi)+\mathcal L_{\rm other}\right]d^4x $$
only through differences for variations supported in a fixed compact subset of the open region $\mathcal U$. An admissible scalar variation at $\phi$ is a jointly smooth map $\Phi:(-\varepsilon,\varepsilon)\times\mathcal U\to\mathcal T$, $\varepsilon>0$, with $\Phi(0,x)=\phi(x)$ and $\Phi(s,x)=\phi(x)$ for every $x\notin K$ and all $s$, for some compact $K\subset\mathcal U$; hold the metric and other fields fixed. Write $\phi_s(x):=\Phi(s,x)$ and define the action difference by integrating the difference of the displayed Lagrangian volume forms at $\phi_s$ and $\phi$ over $\mathcal U$. Stationarity means that the derivative of this difference at $s=0$ is zero for every such variation. In particular, on any open patch whose field image lies in a target chart, every smooth vector of test functions $\eta^i$ compactly supported in that patch gives the variation $q^i(\phi_s)=q^i(\phi)+s\eta^i$, extended by $\phi$ elsewhere. For sufficiently small $|s|$ it remains in the chart: the image of the compact support is compact inside the open chart image and $\eta$ is bounded. Thus these local variations are admitted. The common compact support and joint smoothness justify differentiating their action difference under the integral. In the matter-free branch $\mathcal L_{\rm other}=0$, the scalar configuration is dynamically admissible only if it is stationary under every compactly supported smooth target-coordinate variation. Stationarity is adopted as a model premise; the field equation obtained from it is derived in [[pthm-r5-multiscalar-flrw-dynamics]].

**(ii) Gravitational field law.** Separately adopt the direct Einstein equation of [[post-gr-einstein-field-law]] with cosmological parameter $\Lambda=0$ and scalar Hilbert stress-energy, with the convention of [[def-gr-hilbert-stress-energy-tensor]], as source:
$$ G_{\mu\nu}=M_P^{-2}T_{\mu\nu}. $$
This is the natural-unit form of the cited law with $M_P^2=(8\pi G_N)^{-1}$. For a matter-free model, $T_{\mu\nu}$ is only the stress tensor of the scalar sector. If $\mathcal L_{\rm other}$ is nonzero, its stress tensor and any direct scalar source terms must be stated and the matter-free deductions on the paired page do not apply without a separate argument. The Einstein equation is adopted directly here; the action display fixes the scalar dynamics and Einstein-frame normalization, and this item does not infer the metric equation by varying the displayed curvature term.

**(iii) Regime and epistemic status.** The premise is restricted to the declared EFT field and energy range. Whenever retained-mode frequencies or spatial momenta are compared with $\Lambda_{\rm EFT}$ or an omitted-mode threshold, their values are defined by the application-specific observer and mode prescription required by clause (d) of [[def-r5-cosmology-4d-scalar-eft-data]], and all scales are expressed in the same named metric frame. The prescribed quantities must lie below the declared cutoff and every omitted-mode threshold. Additional derivative, curvature, string-loop, $\alpha'$, source, or backreaction bounds are application-specific assumptions, not consequences of this postulate. The adopted action and field law are not derived predictions or reported observations. No existence or uniqueness of solutions, observational fit, or global string compactification is asserted.

## Postulate references

[[def-r5-cosmology-4d-scalar-eft-data]], [[def-gr-si-unit-and-coordinate-conventions]], [[post-gr-einstein-field-law]], [[post-gr-spacetime-and-classical-domain]], [[def-gr-hilbert-stress-energy-tensor]]
