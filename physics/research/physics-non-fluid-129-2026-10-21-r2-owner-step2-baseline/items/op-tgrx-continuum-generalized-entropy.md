---
id: op-tgrx-continuum-generalized-entropy
kind: open-problem
title: "Continuum generalized entropy beyond the regulated model"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 6
deps:
  - post-tgrx-semiclassical-equation
  - def-tgrx-hadamard-stress-contract
  - def-tgr-regulated-generalized-entropy
  - post-tgrx-regulated-horizon-balance
  - pthm-tgrx-regulated-gsl
dependency_roles:
  post-tgrx-semiclassical-equation: formulation-prerequisite
  def-tgrx-hadamard-stress-contract: formulation-prerequisite
  def-tgr-regulated-generalized-entropy: formulation-prerequisite
  post-tgrx-regulated-horizon-balance: formulation-prerequisite
  pthm-tgrx-regulated-gsl: physical-result
justified_by: []
aliases: []
forward_refs: []
physical_scope: >
  A precisely delimited open problem for a selected four-dimensional
  semiclassical Einstein-scalar collapse model, an actually existing smooth
  solution on a stated globally hyperbolic domain, a Hadamard state, and a
  fixed covariant renormalization prescription. It asks for sufficient
  nonperturbative-in-the-scalar-amplitude conditions for finite,
  regulator-independent generalized-entropy differences and their future
  monotonicity. It asserts no solution existence, entropy convergence,
  regulator independence, generalized second law, or empirical result.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices, Physical Review D 85, 104049 (2012), arXiv:1105.3445v6"
      url: "https://arxiv.org/pdf/1105.3445"
      locator: "Complete 44-page article retrieved; §1 and §§2.1–2.8 read in full, especially §2.5, equations (38)–(43), and §2.8, equation (50). Wall proves a conditional result under horizon-algebra and semiclassical hypotheses and states additional renormalized-entropy and commuting-limit assumptions; those are not silently identified with the target model."
    - title: "H. S. Reall, Part III Black Holes, University of Cambridge lecture notes (2024)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
      locator: "Complete 149-page PDF retrieved; §§10.7–10.9 inspected, especially §10.9, printed pp. 146–147, equation (10.113), for the GSL summary and its backreaction qualification."
    - title: "Ted Jacobson, Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect, lecture notes"
      url: "https://physics.umd.edu/grt/taj/776b/lectures.pdf"
      locator: "Complete 40-page PDF retrieved; §§2.2, 3.3.4, and 3.4.4 read for the GSL discussion and its explicit renormalization and proof-status qualifications."
    - title: "Thomas Faulkner and Antony J. Speranza, Gravitational algebras and the generalized second law, arXiv:2405.00847"
      url: "https://arxiv.org/pdf/2405.00847"
      locator: "Complete 83-page PDF retrieved; abstract and §§3.3, 5, and 7 inspected. The crossed-product result concerns specified semiclassical states and Killing-horizon modular flow; it does not establish the full nonstationary collapse interval posed here."
    - title: "Josh Kirklin, Generalised second law beyond the semiclassical regime, arXiv:2412.01903v3"
      url: "https://arxiv.org/pdf/2412.01903"
      locator: "Complete 48-page PDF retrieved; abstract and Introduction, §2.1, §§3.1–3.4, §§4.1–4.3, §§5.2–5.3, and §6 inspected. Sections 4.1–4.3 derive the exact modified inequality for ordered idealized dynamical quantum-reference-frame cuts by relative-entropy monotonicity; §§5.2–5.3 show only an approximate leading-order reduction to the usual semiclassical UV-cutoff GSL under further cut conditions."
    - title: "Jonah Kudler-Flam, Samuel Leutheusser, and Gautam Satishchandran, Generalized black hole entropy is von Neumann entropy, arXiv:2309.15897"
      url: "https://arxiv.org/pdf/2309.15897"
      locator: "Complete 105-page PDF retrieved; abstract, Introduction, and §§9.2–9.3 read. The type-II algebra result is stated for the paper's stationary state and bifurcate Killing-horizon setting."
    - title: "Mohd Ali and Vardarajan Suneeta, A local Generalized second law in crossed product constructions, arXiv:2404.00718"
      url: "https://arxiv.org/pdf/2404.00718"
      locator: "Complete 46-page PDF retrieved; abstract and §I read. The local crossed-product result is for the paper's maximally extended static and Kerr black-hole settings and its gravitational-constraint assumptions."
    - title: "Weizhen Jia, Qiongyu Qi, and Christina Gao, Entanglement entropy and thermodynamics of dynamical black holes, arXiv:2509.05700"
      url: "https://arxiv.org/pdf/2509.05700"
      locator: "Complete 31-page PDF retrieved; abstract, §2.1, and §§4–5 read. The relevant GSL discussion is first-order about stationary backgrounds, uses a generalized apparent horizon, and identifies renormalized generalized entropy only at leading local area-law order."
    - title: "Ahmed Almheiri, Thomas Hartman, Juan Maldacena, Edgar Shaghoulian, and Amirhossein Tajdini, The entropy of Hawking radiation, arXiv:2006.06872"
      url: "https://arxiv.org/pdf/2006.06872"
      locator: "Complete 47-page review retrieved; §11.2 read for the gravitational path-integral contour, saddle, cutoff, and exact-state qualifications relevant to island calculations."
    - title: "Phil Saad, Stephen H. Shenker, and Douglas Stanford, JT gravity as a matrix integral, arXiv:1903.11115"
      url: "https://arxiv.org/pdf/1903.11115"
      locator: "Complete 78-page article retrieved; abstract, Introduction, §5.5, and §6.2 read for the JT disk input, nonunique completion, and ensemble dependence."
empirical_premises: []
---

## Open problem

Fix a fully specified four-dimensional semiclassical Einstein-scalar collapse model: its scalar field equation and couplings with SI units, fixed-coupling semiclassical equation and causal prescription, initial and boundary data, a globally hyperbolic domain, and a covariant renormalization prescription. The prescription fixes one scale $\mu$, the local curvature counterterms, and their finite normalization conditions; the same prescription and its prescribed regulator dependence are used at both cuts and for every regulator sequence compared below. Select an actually existing smooth solution $(g,\phi)$ on this domain and a positive normalized Hadamard state $\omega$ for the specified scalar theory. Here “Hadamard” means that the state's two-point distribution is a bisolution with the positive-frequency Hadamard wavefront set and differs smoothly from the fixed local singular kernel in each convex normal neighborhood. No existence, uniqueness, or stability of such a solution is assumed or claimed. The model remains the adopted effective semiclassical theory below its stated cutoff; “nonperturbative in the scalar field” means that the proposed sufficient conditions and argument use no truncation in the scalar-field amplitude or state correlations, not that they construct exact quantum gravity.

Specify a smooth portion $\mathcal H$ of the future horizon in the chosen solution. If it is an event horizon, the model includes a conformal completion with future null infinity $\mathscr I^+$ and defines $\mathcal H=\partial J^-(\mathscr I^+)\cap M$ on the domain under study; the local semiclassical equation alone does not supply this global structure. Let $k$ be a smooth, nonzero, future-directed null generator field on $\mathcal H$, affinely parametrized. The model fixes the affine parameter's origin, positive normalization, and units. A cut is a nonempty compact smooth spacelike two-surface transverse to $k$, meeting each generator in the specified common generator patch once. Cuts $\Sigma_1$ and $\Sigma_2$ are ordered when their affine cut parameters satisfy $\lambda_2(x)>\lambda_1(x)$ on every generator in that patch; this order is invariant under positive affine rescaling.

At each finite ultraviolet regulator $\Lambda_n$, whose type, units, and ultraviolet-limit convention are specified by the model, use the finite generalized-entropy data specified by the selected finite-regulator definition on each cut, with the same model, state, finite local counterterms, and fixed scheme. Each $S_{\mathrm{gen},n}[\Sigma_i]$ is a finite real entropy with units $\mathrm{J\,K^{-1}}$. For a regulator sequence $\mathcal R=(\Lambda_n,\text{finite-regulator data})$, define

$$\Delta_{\mathcal R,n}(\Sigma_1,\Sigma_2):=S_{\mathrm{gen},n}[\Sigma_2]-S_{\mathrm{gen},n}[\Sigma_1].$$

An admissible sequence has $\Lambda_n\to+\infty$, uses finite-regulator data from this same selected solution and state, and applies the one fixed covariant prescription at both cuts. A sufficient criterion must specify a nonempty admissible class containing at least two regulator constructions; regulator independence means that the finite limit of $\Delta_{\mathcal R,n}$ is identical for every sequence in that class. The target does not require the two absolute sequences $S_{\mathrm{gen},n}[\Sigma_i]$ to converge separately.

Determine checkable sufficient conditions on the specified model, solution, state, ordered cuts, and admissible regulator class under which, for every such pair of later cuts,

$$\Delta_{\mathcal R,n}(\Sigma_1,\Sigma_2)\longrightarrow\Delta(\Sigma_1,\Sigma_2)\in\mathbb R,\qquad \Delta(\Sigma_1,\Sigma_2)\ge 0,$$

with the same finite $\Delta$ for every admissible regulator sequence. The deduction must not assume a finite modular-geometric balance postulate or any other identity equating a modular-energy change to a gravitational-entropy or area change. The existing finite conditional result is a comparison point only: it assumes such a balance and finite-dimensional partial-trace structure and does not itself provide continuum convergence, regulator independence, backreaction, or the requested conditions.

## Open problem references

[[post-tgrx-semiclassical-equation]] supplies the fixed-coupling effective semiclassical equation, specified state, causal prescription, and explicit non-claim of solution existence, uniqueness, or stability.

[[def-tgrx-hadamard-stress-contract]] supplies the positive Hadamard-state and smooth-subtraction-remainder convention used for the renormalized stress tensor.

[[def-tgr-regulated-generalized-entropy]] assigns finite regulated generalized-entropy values and assigns a renormalized value only when the named sequence has a finite limit in its declared scheme; it makes no regulator-independence claim.

[[post-tgrx-regulated-horizon-balance]] adopts the finite modular-geometric balance explicitly excluded as an assumption in this problem; [[pthm-tgrx-regulated-gsl]] proves only its stated finite conditional consequence and finite-limit clause.

[Aron C. Wall, *A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices*](https://arxiv.org/pdf/1105.3445)

[H. S. Reall, *Part III Black Holes* lecture notes](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf)

[Ted Jacobson, *Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect* lecture notes](https://physics.umd.edu/grt/taj/776b/lectures.pdf)

[Thomas Faulkner and Antony J. Speranza, *Gravitational algebras and the generalized second law*](https://arxiv.org/pdf/2405.00847)

[Josh Kirklin, *Generalised second law beyond the semiclassical regime*](https://arxiv.org/pdf/2412.01903)

[Jonah Kudler-Flam, Samuel Leutheusser, and Gautam Satishchandran, *Generalized black hole entropy is von Neumann entropy*](https://arxiv.org/pdf/2309.15897)

[Mohd Ali and Vardarajan Suneeta, *A local Generalized second law in crossed product constructions*](https://arxiv.org/pdf/2404.00718)

[Weizhen Jia, Qiongyu Qi, and Christina Gao, *Entanglement entropy and thermodynamics of dynamical black holes*](https://arxiv.org/pdf/2509.05700)

[Ahmed Almheiri et al., *The entropy of Hawking radiation*](https://arxiv.org/pdf/2006.06872)

[Phil Saad, Stephen H. Shenker, and Douglas Stanford, *JT gravity as a matrix integral*](https://arxiv.org/pdf/1903.11115)

## Status

Status checked on 22 October 2026. This is an open problem, not a theorem or an empirical claim. The review is targeted and non-exhaustive. Wall proves a conditional GSL result with explicit horizon-algebra, semiclassical, and renormalized-entropy hypotheses, including a decomposition/limit qualification; the result is not silently transferred to the fully specified coupled collapse problem above.

A closer result is Kirklin's exact modified GSL for gauge-invariant von Neumann entropies of idealized dynamical quantum-reference-frame cuts in perturbative gravity: the exact inequality includes the free energy of the later cut. In its UV-cutoff semiclassical regime, the paper shows an approximate leading-order reduction to the usual generalized entropy, up to a state-independent constant; the standard GSL follows only when the later-cut free energy is nonnegative under the stated cut conditions, for example for an unentangled cut obeying the null energy condition. This does not establish regulator independence for the finite-regulator definition used here or identify that local fixed-scheme limit with Kirklin's Type II algebra entropy. The paper also uses auxiliary idealized cuts and gauges boost and null translations while leaving other symmetries and realistic cut models for further work.

Reall and Jacobson give broad GSL discussions while recording backreaction, renormalization, and proof-status limits. The crossed-product results of Faulkner–Speranza, Kudler-Flam–Leutheusser–Satishchandran, and Ali–Suneeta concern their specified Killing-horizon or stationary-algebra settings. Jia–Qi–Gao treat a first-order perturbative regime and a leading local area-law identification. Island and JT calculations retain their replica, gravitational-saddle, and ensemble assumptions. The sources reviewed do not establish the exact combined claim posed here; this bounded review does not establish that no other proof exists.
