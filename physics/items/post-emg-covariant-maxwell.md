---
id: post-emg-covariant-maxwell
kind: postulate
title: "Smooth curved vacuum Maxwell constitutive adoption"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 1
deps: [def-emg-geometry-units, lem-emg-lorentz-hodge-calculus, post-em-minkowski-physical-model, post-em-vacuum-maxwell, post-sr-inertial-covariance, pthm-em-tensor-maxwell-equivalence]
dependency_roles:
  def-emg-geometry-units: formulation-prerequisite
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  post-em-minkowski-physical-model: formulation-prerequisite
  post-em-vacuum-maxwell: formulation-prerequisite
  post-sr-inertial-covariance: formulation-prerequisite
  pthm-em-tensor-maxwell-equivalence: formulation-prerequisite
physical_scope: "An adopted smooth SI vacuum Maxwell system on an oriented, time-oriented Lorentzian four-manifold. It excludes material excitation laws, magnetic sources, singular point or sheet sources, distributional products, global-potential assumptions, and any claim that the curved continuation follows from flat special relativity or has been established empirically."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
empirical_premises: []
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §§3.1.3 and 3.2.5"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "§3.1.3, equations (3.97)–(3.98), Hodge dual; §3.2.5, Maxwell action and curved-spacetime Maxwell equations, with c=1 and the source's orientation/sign conventions converted locally."
    - title: "H. S. Reall, Part III General Relativity, Cambridge, 12 October 2022 revision, full 125-page lecture notes (Internet Archive copy of the author-hosted PDF)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "§6.2, equations (6.7)–(6.8), curved Maxwell equations with Gaussian-unit normalization; §8.5, equations (8.55)–(8.59), Hodge dual and differential-form Maxwell equations. The local SI sign convention is stated explicitly."
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes, complete 236-page author-hosted PDF"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§1.2, Maxwell equations in SI; §§5.3–5.4, tensor formulation and tensor-to-vector component comparison. The source's index/sign conventions are converted to the selected (-+++) dictionary."
    - title: "BIPM, The International System of Units (SI), 9th edition, version 4.01 (2026 update), complete 214-page brochure"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf"
      locator: "§2.2 and §2.3.1, exact c and current measured status of μ0, with ε0μ0=1/c²."
---

## Postulate

Adopt the following physical field law for this Einstein–Maxwell model. Let $M$ be a smooth, oriented, time-oriented Lorentzian four-manifold with metric $g$ of signature $(-,+,+,+)$ as in [[def-emg-geometry-units]], let $U\subseteq M$ be open, let $F\in\Omega^2(U)$ be a smooth real electromagnetic two-form, and let $j$ be a smooth four-current vector field on $U$. Using the Levi-Civita connection $\nabla^g$ of $g$, the SI constants $\mu_0>0$ and $c>0$, and the field/current conventions of [[def-emg-geometry-units]], postulate

$$dF=0,\qquad \nabla^g_aF^{ab}=-\mu_0j^b.$$

This is the selected smooth vacuum constitutive law. The first equation is the homogeneous field equation; the second is the sourced field equation with the sign fixed by $F_{0i}=-E_i/c$ and $j=(c\rho,J)$ in a positively oriented inertial tetrad. No global potential is assumed: although $F=dA$ implies $dF=0$ when a smooth potential exists, the postulate applies to the two-form itself and does not assert that such an $A$ exists globally.

The postulate adopts one curved-spacetime continuation as a physical model assumption. The flat Minkowski and special-relativity suppliers [[post-em-minkowski-physical-model]], [[post-sr-inertial-covariance]], [[post-em-vacuum-maxwell]], and [[pthm-em-tensor-maxwell-equivalence]] fix the inherited SI, inertial, and flat-limit conventions; they do not impose a globally flat metric on $M$ or deduce this curved field law. General-relativity sources describe covariant Maxwell formulations in their own unit and sign conventions; those treatments motivate the chosen formulation but neither mathematical structure nor source authority proves that this is nature's law. No empirical result is adopted here.

The model has no magnetic-charge term and no material excitation pair such as $D,H$. It applies only to smooth $F$ and $j$ on the stated domain; point and sheet sources, distribution-valued fields, and products of distributions require separate definitions and are outside this postulate.
