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
physical_scope: "Calibration of an apparatus for an operational observable model of the force branch: a family of prediction maps indexed by apparatus settings, a finite family of reference inputs traced to realizations of the framework's primitive quantities (durations in seconds, lengths in metres, masses in kilograms) with declared deviations, declared reference observations and a calibration rule. The item defines the datum that assigns numerical values in the framework's units to model parameters; it asserts no accuracy, consistency or unbiasedness of any calibration, no realized standard and no measurement."
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

Fix the force branch and one inertial frame as in
[[def-cm18-observable-model]], and fix the observation times and readout of a
protocol of that definition. A **calibration family** is a family
$$\bigl(\Phi_{c}\bigr)_{c\in C},\qquad \Phi_{c}:\Theta\longrightarrow\mathbb R^{d},$$
of prediction maps on a nonempty parameter set $\Theta$, indexed by a
nonempty set $C$ of **apparatus settings**, each $\Phi_{c}$ arising as the
prediction map of an operational observable model of the force branch as in
[[def-cm18-observable-model]]; the setting $c$ selects the apparatus state in
which the readout is taken. The dimensions and units are those of
[[def-cm01-units]].

A **calibration datum** for this family consists of:

1. a finite family $\bigl(\theta^{(1)},\dots,\theta^{(n)}\bigr)$, $n\ge1$, of
   **reference inputs** $\theta^{(r)}\in\Theta$, together with a **reference
   realization** of each: the parameter value $\theta^{(r)}$ is fixed by
   declared realizations of the primitive quantities of the framework — a
   duration in seconds, a length in metres or a mass in kilograms
   ([[def-cm01-units]], [[post-cm01-spacetime]], [[post-cm01-worldlines]]
   clause (v)) — supplied by a **reference standard** under stated
   conditions;
2. for each $r$ a declared **deviation** of the reference input from its
   nominal value $\theta^{(r)}_{\mathrm{ref}}$ assigned by the standard:
   either a bound $\bigl\lvert\theta^{(r)}-\theta^{(r)}_{\mathrm{ref}}\bigr\rvert\le\delta_{r}$
   for a declared number $\delta_{r}\ge0$ in the unit of the parameter, or a
   random element $\eta_{r}:\Omega\to\Theta$ of deviations with a stated law
   on a stated probability space ([[def-random-element-and-real-random-variable]]),
   so that the reference input is the random value
   $\theta^{(r)}_{\mathrm{ref}}+\eta_{r}$;
3. a set $Y\subseteq(\mathbb R^{d})^{n}$ of admissible **reference
   observations** and a declared vector $y=(y_{1},\dots,y_{n})\in Y$;
4. a **calibration rule**, that is, a map
   $$\Gamma:Y\longrightarrow C,\qquad y\longmapsto c .$$

Given the datum, the **calibrated setting** is $c:=\Gamma(y)$ and the
**calibrated prediction map** is $\Phi_{c}$. This is the physical instance of
the calibration structure of [[def-cm-calibration-rule]], whose clauses 1-4
it reproduces with the framework's primitive quantities as the reference
realizations.

### Well-definedness and conventions

The sets $\Theta$, $C$, $Y$, the maps $\zeta$, $R$ of the underlying
protocols, the reference inputs, the deviations and the rule $\Gamma$ are
data. Nothing in the definition requires $\Gamma$ to be injective,
continuous or measurable, or to return a setting whose prediction map is
accurate; [[def-cm-calibration-rule]] records the same conventions for the
mathematical structure. The deviation clauses 2 are the only interface
through which the reference standard's uncertainty enters, and they must be
carried into every quantitative conclusion about $\Phi_{c}$; a calibration
from which the deviations have been dropped supports no quantitative
statement.

Calibration is the step at which the framework's units and a standard's
values assign numerical values to model parameters. The framework by itself
fixes no numerical value of any parameter (clause (e) of
[[def-cm01-units]]), and the value $\theta^{(r)}_{\mathrm{ref}}$ is the value
attached by the standard, not a measured value of this item. A calibrated
prediction map is a model object; a claim that an apparatus realizes it
requires separate evidence.
