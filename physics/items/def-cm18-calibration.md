---
id: def-cm18-calibration
kind: definition
title: "Calibration of a mechanical apparatus against the primitive standards of the framework: reference inputs, deviations, rules and calibrated prediction maps"
status: draft
origin: pipeline
domain: physics
deps: [def-cm18-observable-model, def-cm-calibration-rule, def-cm01-units, post-cm01-spacetime, post-cm01-worldlines, def-random-element-and-real-random-variable]
dependency_roles:
  def-cm18-observable-model: formulation-prerequisite
  def-cm-calibration-rule: mathematical-premise
  def-cm01-units: formulation-prerequisite
  post-cm01-spacetime: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-random-element-and-real-random-variable: mathematical-premise
dependency_level: 12
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Calibration of an apparatus for an operational observable model of the force branch: a family of preparation-sliced prediction maps indexed by apparatus settings with an explicit setting-to-preparation selection, a finite family of reference inputs traced to realizations of the framework's primitive quantities (durations in seconds, lengths in metres, masses in kilograms) with declared deviations, declared reference observations and a calibration rule. The item defines the datum that assigns numerical values in the framework's units to model parameters; it asserts no accuracy, consistency or unbiasedness of any calibration, no realized standard and no measurement."
sources:
  references:
    - title: "JCGM 200:2012, International Vocabulary of Metrology - Basic and General Concepts and Associated Terms (VIM), definition 2.39 'calibration' with its notes on the relation between the indication and the corresponding value of a quantity and on the uncertainty of the reference"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf"
    - title: "JCGM 100:2008, Evaluation of measurement data - Guide to the expression of uncertainty in measurement (BIPM, 2008 corrected version), clause 4.1.3 (input quantities brought in from calibrated standards and reference data) and clauses 4.2-4.3 on the evaluation of standard uncertainty of such inputs"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "B. N. Taylor and C. E. Kuyatt, Guidelines for Evaluating and Expressing the Uncertainty of NIST Measurement Results, NIST Technical Note 1297 (1994), Section 2 and Appendix A on the combination of standard uncertainties including those of reference standards"
      url: "https://physics.nist.gov/cuu/pdf/tn1297.pdf"
verification:
  precheck: n/a
---

## Definition

Fix the force branch and one inertial frame, and fix an operational
observable protocol as in [[def-cm18-observable-model]], with prediction map
$\Phi:\Theta\times Z\to\mathbb R^d$, nonempty
$\Theta\subseteq\mathbb R^p$, $p\ge1$, and its declared observation times,
readout and numerical coordinates. Specify a nonempty set $C$ of
**apparatus settings** and a map $\sigma:C\to Z$ selecting a preparation
setting $z_c:=\sigma(c)$ for every $c\in C$. A **calibration family** is the
family of preparation slices
$$\bigl(\Phi_c\bigr)_{c\in C},\qquad \Phi_c:\Theta\longrightarrow\mathbb R^d,\qquad \Phi_c(\theta):=\Phi(\theta,z_c).$$
Thus the initial datum used in $\Phi_c$ is $\zeta(z_c)$, and the readout
uses $(\theta,z_c)$ and its ordered model states. The preparation selection
is part of the family data; fixing times and readout alone does not select it. The dimensions and units are those of
[[def-cm01-units]]. Coordinate $\theta_j$ is the numerical coefficient of a
quantity in one fixed unit $u_j$ with declared dimension; different coordinates
may use different units. Choose positive numerical scales $s_j$ and define
$\|v\|_s=(\sum_j(v_j/s_j)^2)^{1/2}$. This norm compares normalized
numerical deviations, not sums of different physical dimensions.

A **calibration datum** for this family consists of:

1. a finite family, with $n\ge1$, $\theta^{(r)}_{\mathrm{ref}}\in\Theta$, $r=1,\dots,n$, of **nominal reference inputs** assigned by a reference standard under stated realization conditions. Each coordinate uses its fixed unit $u_j$, and the nominal assignment is traced to declared realizations of the framework's primitive quantities, such as durations, lengths or masses ([[def-cm01-units]], [[post-cm01-spacetime]], [[post-cm01-worldlines]] clause (v)). The nominal value is the standard's assigned value, not an assertion that the actual realization equals it;
2. one description of the **actual reference inputs** for the whole family: either fixed values $\theta^{(r)}_{\mathrm{act}}\in\Theta$ for all $r$, with declared bounds $\|\theta^{(r)}_{\mathrm{act}}-\theta^{(r)}_{\mathrm{ref}}\|_s\le\delta_r$, $\delta_r\ge0$, or a Borel random deviation vector $\eta=(\eta_1,\ldots,\eta_n):\Omega_{\mathrm{ref}}\to(\mathbb R^p)^n$ on one probability space $(\Omega_{\mathrm{ref}},\mathcal F_{\mathrm{ref}},\mathbb P_{\mathrm{ref}})$ with a stated joint law, where $\Theta^{(r)}_{\mathrm{act}}:=\theta^{(r)}_{\mathrm{ref}}+\eta_r$ belongs to $\Theta$ for every outcome and every $r$ ([[def-random-element-and-real-random-variable]]). No independence is imposed. A mixture of fixed and random reference inputs uses this second branch: each fixed input is represented by its constant deviation component, retaining any declared bound on that component. In the random branch declare whether the law describes uncertainty about fixed realizations or physical variation across realizations; a model for one is not automatically a model for the other. Additions are coordinatewise in the fixed units, and deviations need not belong to $\Theta$;
3. a set $Y\subseteq(\mathbb R^{d})^{n}$ of admissible **reference
   observations** and a declared realized vector $y=(y_{1},\dots,y_{n})\in Y$, together with a separate uncertainty specification for these readouts: declared bounds, a joint probability model, or an explicit statement that readout uncertainty is idealized as zero. If a random vector $Y_{\mathrm{ref}}$ models the readings before realization, specify its joint law with the reference-input deviations, including any correlations; $y$ denotes its recorded realization, not the random vector itself;
4. a **calibration rule**, that is, a map
   $$\Gamma:D\longrightarrow C,\qquad (y,\theta_{\mathrm{ref}})\longmapsto c,\qquad D\subseteq Y\times\Theta^n .$$
   Here $\theta_{\mathrm{ref}}=(\theta^{(1)}_{\mathrm{ref}},\ldots,\theta^{(n)}_{\mathrm{ref}})\in\Theta^n$
   and $(y,\theta_{\mathrm{ref}})\in D$; each observation coordinate is read
   in the fixed readout unit of [[def-cm18-observable-model]].

Given the datum, the **calibrated setting** is $c:=\Gamma(y,\theta_{\mathrm{ref}})$ and the
**calibrated prediction map** is $\Phi_{c}$. This is the physical instance of
the calibration structure of [[def-cm-calibration-rule]], with the framework's primitive quantities as reference
realizations. If normalized coordinates $\vartheta_j=\theta_j/s_j$ are
used, the deviation norm is exactly the Euclidean norm of that mathematical
structure. A rule with fixed references is only a slice of this two-input
rule, not a rule that discards reference values.

### Well-definedness and conventions

The sets $\Theta$, $C$, $Y$, the preparation selection $\sigma$ and the maps $\zeta$, $R$ of the underlying
protocol, the reference inputs, the deviations and the rule $\Gamma$ are
data. Nothing in the definition requires $\Gamma$ to be injective,
continuous or measurable, or to return a setting whose prediction map is
accurate; [[def-cm-calibration-rule]] records the same conventions for the
mathematical structure. Clauses 2 and 3 specify reference-input and reference-readout uncertainty separately, and both must be
carried into every quantitative conclusion about $\Phi_{c}$; a calibration with those uncertainty terms dropped supports no quantified uncertainty conclusion. A random calibrated setting $\Gamma(Y_{\mathrm{ref}},\theta_{\mathrm{ref}})$ requires the additional hypothesis that this composite is measurable and is in the rule domain; the deterministic realized rule does not imply that hypothesis.

Calibration is the step at which the framework's units and a standard's
values assign numerical values to model parameters. The framework by itself
fixes no numerical value of any parameter (clause (e) of
[[def-cm01-units]]), and the value $\theta^{(r)}_{\mathrm{ref}}$ is the value
attached by the standard, not a measured value of this item. A calibrated
prediction map is a model object; a claim that an apparatus realizes it
requires separate evidence.
