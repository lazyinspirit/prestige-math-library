---
id: post-tgr-exponential-current-and-spectral-thermometer
kind: postulate
title: Reduced exponential current and defined spectral detector adoption
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - post-qft-free-field-model
  - post-qft-constructed-model-and-measurement
  - lem-tgr-exponential-current
  - lem-tgr-thermal-contour-spectrum
  - lem-tgr-timelike-scalar-acceleration
  - lem-tgr-spectral-thermometer
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  post-qft-free-field-model: physical-assumption
  post-qft-constructed-model-and-measurement: formulation-prerequisite
  lem-tgr-exponential-current: formulation-prerequisite
  lem-tgr-thermal-contour-spectrum: formulation-prerequisite
  lem-tgr-timelike-scalar-acceleration: formulation-prerequisite
  lem-tgr-spectral-thermometer: formulation-prerequisite
physical_scope: "Two selected effective models only: a one-dimensional exponential-coordinate chiral current and a massless Minkowski scalar sampled along a uniformly accelerated timelike curve. The adopted two-state rates are model inputs; this is not a general horizon, KMS, detector-transition, or empirical thermometer claim."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Preskill, Quantum Field Theory in Curved Spacetime, complete Caltech lecture notes"
      url: "https://preskill.caltech.edu/ph236c/Preskill_QFT_curved_spacetime.pdf"
      locator: "Complete 151-page PDF; §4.3, printed pp. 55–58, and §4.7, pp. 71–74. The point-detector response and Rindler interpretation are context, not proofs of the local current or Markov model."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §3, printed pp. 11–16, on the boost/KMS formulation and the distinction between the Unruh and Hawking settings."
    - title: "Luís C. B. Crispino, Atsushi Higuchi, and George E. A. Matsas, The Unruh effect and its applications"
      url: "https://arxiv.org/pdf/0710.5373"
      locator: "Complete 53-page review; §III.A.1–2, PDF pp. 19–22, including the uniformly accelerated point-detector response and its perturbative, infinite-duration qualifications."
---

## Postulate

Use the length-coordinate, unit, and reference conventions of [[def-tgr-framework-units]]. Adopt two distinct model branches.

**Reduced exponential-current branch.** Choose a constant $\kappa>0$ in inverse metres and a smooth Killing field $\xi$ on a declared domain in the TGR framework. The real parameter $u$, measured in metres, is the selected flow parameter for $\xi$; the reference event and normalization of this flow are fixed as part of the model. Set the exponential coordinate $U_\kappa(u)=-\kappa^{-1}e^{-\kappa u}$. Adopt the positive-chiral-current vacuum and tested current $j_\kappa$ constructed in [[lem-tgr-exponential-current]]. Its mathematical two-point covariance is the tested boundary $C_\kappa$ there; use its angular-frequency spectrum $S_\kappa$ and detailed-balance convention exactly as stated in [[lem-tgr-thermal-contour-spectrum]]. The exponential ray map and the choice of $\kappa$ are model inputs. If $\xi$ and $\kappa$ are identified with a generator and geometric surface gravity of a particular horizon, that identification is an additional physical assumption; no collapse geometry, four-dimensional horizon restriction, scattering factor, or backreaction is derived here.

**Massless acceleration branch.** Adopt the massless scalar and Minkowski vacuum of [[post-qft-free-field-model]]. Use the actually defined temporal smearing along the smooth proper-time hyperbola and its tested covariance from [[lem-tgr-timelike-scalar-acceleration]]. The curve-smeared field is not a sharp-point field. Its accelerated spectrum and finite-switch coefficient are used only with the conditional hypotheses recorded in that lemma and in [[lem-tgr-spectral-thermometer]].

For either branch, select an energy gap $E>0$ joules and define a two-state, continuous-time rate model with ground state $g$, excited state $e$, and proper-time coordinate $t\ge0$ measured in seconds. In the reduced branch let $\gamma_{\rm red}>0$ have units metres per second and set $r_\uparrow=\gamma_{\rm red}S_\kappa(E/(\hbar c))$ and $r_\downarrow=\gamma_{\rm red}S_\kappa(-E/(\hbar c))$. In the acceleration branch let $\gamma_{\rm acc}>0$ have units square metres per square second and set $r_\uparrow=\gamma_{\rm acc}S_a(E/\hbar)$ and $r_\downarrow=\gamma_{\rm acc}S_a(-E/\hbar)$. Here $c>0$ is metres per second, $\hbar>0$ is joule-seconds, and the frequency arguments have units inverse metres and inverse seconds, respectively. These choices make both rates inverse seconds. The adopted population $p(t)$ of state $e$ is the solution of $p'(t)=r_\uparrow(1-p(t))-r_\downarrow p(t)$ with supplied $p(0)\in[0,1]$. This differential equation is the entire effective two-state model; the rates are adopted inputs, not exact QFT transition probabilities.

Only when a selected construction also supplies a density state and a normalized finite measurement instrument may an outcome be read using [[post-qft-constructed-model-and-measurement]]. No such state, instrument, detector apparatus, or observed outcome is supplied here. The postulate asserts no general thermalization, exact all-order transition probability, KMS state, or experimental temperature reading.

