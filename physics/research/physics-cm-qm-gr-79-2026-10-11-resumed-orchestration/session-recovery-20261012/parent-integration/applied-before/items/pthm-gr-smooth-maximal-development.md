---
id: pthm-gr-smooth-maximal-development
kind: physics-theorem
title: "Conditional model deduction: the adopted field law and matter model yield a maximal globally hyperbolic development of constraint-satisfying initial data"
status: draft
origin: session
domain: physics
physical_scope: "Conditional smooth classical Einstein-matter Cauchy problem for one fixed admissible covariant coupled model with complete constrained data, actual local and spacelike restart hypotheses, and Countable/Dependent Choice. Includes vacuum, scalar, strict fluid and nonnegative tilted dust with independent zero-density velocity; no empirical conclusion or geodesic-completeness claim."
dependency_level: 40
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-countable-choice, def-dependent-choice, post-gr-einstein-field-law, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, def-gr-development-and-data-fixing-isometry, thm-gr-smooth-maximal-globally-hyperbolic-development, thm-gr-high-regularity-selected-matter-development, thm-gr-local-geometric-development, thm-gr-cauchy-surface-implies-globally-hyperbolic, def-gr-spacelike-initial-data-and-constraints, def-gr-scalar-field-matter-model, def-gr-perfect-fluid-matter-model, def-gr-dust-matter-model, thm-gr-constraint-equations-in-normal-frame]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  post-gr-einstein-field-law: physical-assumption
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  thm-gr-smooth-maximal-globally-hyperbolic-development: mathematical-premise
  thm-gr-high-regularity-selected-matter-development: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  def-gr-scalar-field-matter-model: formulation-prerequisite
  def-gr-perfect-fluid-matter-model: formulation-prerequisite
  def-gr-dust-matter-model: formulation-prerequisite
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Theorems 2.7 and 2.8 (the existence and uniqueness of the maximal globally hyperbolic development of given initial data), printed pp. 12 and 20-24"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "Y. Choquet-Bruhat and R. Geroch, Global aspects of the Cauchy problem in general relativity, Communications in Mathematical Physics 14 (1969), 329-335"
      url: "https://doi.org/10.1007/BF01645389"
    - title: "H. Ringstrom, On the Topology and Future Stability of the Universe, Oxford University Press 2013: the Cauchy problem, geometric uniqueness and the role of the initial data, Chapter 8"
      url: "https://doi.org/10.1093/acprof:oso/9780199680296.001.0001"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]) for the mathematical suppliers.

Adopt the postulates [[post-gr-einstein-field-law]] (the Einstein field law
$G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ for a Lorentzian four-metric $g$ with
cosmological constant $\Lambda$ and coupling $\kappa$),
[[post-gr-spacetime-and-classical-domain]] (the classical smooth Lorentzian
domain, time orientation and the identification of $g$ as the gravitational
field), and [[post-gr-field-and-matter-assumptions]] (the selected matter
sectors, their equations of motion and stress-energy tensors, and the
requirement that the coupled system be treated within the stated
regularity).

Adopt the specified fixed matter equations and stress expression as model premises as well; for any additional model beyond the concrete sectors of the cited postulate, these are additional stipulated premises. Mathematical admissibility does not itself assert a physical matter law.

Let $\Sigma$ be a connected smooth three-manifold, let $h$ be a smooth
Riemannian metric and $K$ a smooth symmetric $2$-tensor on $\Sigma$, and let
complete smooth initial data for one fixed admissible coupled model of [[def-gr-development-and-data-fixing-isometry]] be given, satisfying the constraints of [[thm-gr-constraint-equations-in-normal-frame]]. Assume its actual local existence and uniqueness/restart hypotheses, including complete matter initialization and recovery. The concrete branches of [[thm-gr-high-regularity-selected-matter-development]] include vacuum, scalar, strict fluid and nonnegative tilted geodesic dust with velocity through zero density; any further model must supply the same fixed-model obligations. Then, as a conditional deduction from the
adopted model:

**(a)** there exists a development
$(M_{\mathrm{max}},g_{\mathrm{max}},N_{\mathrm{max}},j_{\mathrm{max}},\psi_{\mathrm{max}})$
of these data in which $g_{\mathrm{max}}$ solves the adopted field law with
the adopted stress-energy tensor and the matter fields solve the adopted
matter equations, and which is maximal among developments of the same data
in the sense of [[def-gr-development-and-data-fixing-isometry]] clause (d);

**(b)** every development of the same data admits a data-fixing development
embedding into $M_{\mathrm{max}}$, and any two maximal developments of the
same data are related by exactly one data-fixing isometry; thus within the
model the maximal development is determined by the initial data up to
isometry fixing the initial surface;

**(c)** $M_{\mathrm{max}}$ is globally hyperbolic with Cauchy surface
$j_{\mathrm{max}}(\Sigma)$, so the deduction yields a deterministic
initial-value formulation inside the model for those complete constrained data that also satisfy the stated admissibility and local/restart hypotheses.

The conclusion is a statement about the adopted model: it asserts that the
postulated equations, together with the mathematical hypotheses on the data
and the regularity requirements of the sector, imply the existence and
uniqueness of the maximal development as a conditional consequence. It makes
no assertion that the model or its data describe any observed system, and
carries no empirical content beyond the model premises.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, the adopted postulates [[post-gr-einstein-field-law]], [[post-gr-spacetime-and-classical-domain]], [[post-gr-field-and-matter-assumptions]], and complete initial data of the fixed admissible model satisfying the constraints and actual local/restart hypotheses.

[F1] Einstein field law: within the model, the gravitational field is a Lorentzian metric $g$ on a four-manifold, time oriented as in [[post-gr-spacetime-and-classical-domain]], and satisfies $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$, where $T$ is the stress-energy tensor built from $g$ and the matter fields of the adopted sector ([[post-gr-einstein-field-law]], [[post-gr-field-and-matter-assumptions]]).

[F2] Matter assumptions: the specified fixed model's full field content, equations and stress expression are adopted as premises. The concrete vacuum, scalar, strict barotropic fluid and geodesic nonnegative tilted dust branches have the explicit definitions and regularity/recovery requirements in [[thm-gr-high-regularity-selected-matter-development]] ([[post-gr-field-and-matter-assumptions]], [[def-gr-scalar-field-matter-model]], [[def-gr-perfect-fluid-matter-model]], [[def-gr-dust-matter-model]]).

[F3] Mathematical existence input: the actual fixed-model hypotheses supply at least one smooth development and geometric uniqueness near the full initial surface. Use [[thm-gr-local-geometric-development]] only when its full harmonic initialization, compatibility recovery, admissibility and conservation hypotheses hold; geodesic nonnegative tilted dust uses its independent common-flow/frame branch, including the prescribed velocity through zero density, in [[thm-gr-high-regularity-selected-matter-development]]. The same model hypotheses must apply to each realized spacelike restart.

[F4] Mathematical closure: assuming at least one such development exists, the data have a maximal development, unique up to a unique data-fixing isometry, and every development embeds into it by a data-fixing development embedding ([[thm-gr-smooth-maximal-globally-hyperbolic-development]]); a development is globally hyperbolic with the initial surface as a Cauchy surface ([[thm-gr-cauchy-surface-implies-globally-hyperbolic]] as used there, [[def-gr-development-and-data-fixing-isometry]]).

[A1] Scope: the constraint equations are conditions on $(h,K)$ and the matter initial data in the model; they are not empirical observations, and the data are model inputs ([[thm-gr-constraint-equations-in-normal-frame]], [[def-gr-spacelike-initial-data-and-constraints]]). No statistical, measurement or apparatus assumptions enter this deduction.

## Proof

**Proof technique:** direct.

1.1 (Relating the postulates to the mathematical model.) By [F1] and [F2] the field law and matter equations are those of the specified fixed model, with its complete data and actual admissibility/local uniqueness obligations; the four concrete sectors of [[thm-gr-high-regularity-selected-matter-development]] are included at their stated branch hypotheses. By [A1] the constraint equations are the model's compatibility conditions on the data. [F1, F2, A1, algebra]

2.1 (Existence of at least one development.) Under the hypotheses on the data the reduction hypotheses hold, so by [F3] the data admit at least one smooth development within the model's equations. [F3, step 1.1, algebra]

3.1 (The maximal development exists and is unique.) Applying [F4] with step 2.1 as the nonemptiness input, the data have a maximal development $(M_{\mathrm{max}},g_{\mathrm{max}},N_{\mathrm{max}},j_{\mathrm{max}},\psi_{\mathrm{max}})$ which is unique up to a unique data-fixing isometry, and every development embeds into it. This is (a) and (b). [step 2.1, F4, algebra]

4.1 (Global hyperbolicity.) By [F4] the maximal development is globally hyperbolic with Cauchy surface $j_{\mathrm{max}}(\Sigma)$; hence the model's initial-value problem restricted to the constraint-satisfying data is deterministic: two iterations of the same data are isometric fixing the initial surface. This is (c). [step 3.1, F4, algebra]

5.1 (Conditional character and scope.) The chain of steps 1.1-4.1 is a conditional deduction: each physical ingredient enters only through the adopted postulates [F1]-[F2], and each mathematical step is a theorem with explicitly stated hypotheses. The deduction establishes no statement about the physical universe and no observational claim; if a sector's regularity assumptions or the constraint equations fail for data of interest, the deduction does not apply. This completes the proof of the conditional assertion. [step 1.1, step 4.1, F1, A1, algebra] ∎

## Remarks

This item records the model-level content of the mathematical theorem [[thm-gr-smooth-maximal-globally-hyperbolic-development]]: postulating the field law and matter models, constraint-satisfying smooth data determine a maximal globally hyperbolic development uniquely up to isometry fixing the data. The physical interpretation of $(M_{\mathrm{max}},g_{\mathrm{max}})$, the status of the idealisation of smoothness and of the specific matter sectors, the absence of any claim of global existence, completeness or genericity, and the boundary between model deduction and observation are recorded in [[rem-gr-mghd-scope]]. The mathematical supplier is a theorem of draft status in this library; if its hypotheses were to fail for data of interest, this conditional deduction would fail with them.
