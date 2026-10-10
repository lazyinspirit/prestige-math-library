---
id: def-sr-experiment-interface-vocabulary
kind: definition
domain: physics
title: "Operational model, data, calibration and uncertainty vocabulary of the experiment interface"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
deps:
  - def-sr-affine-minkowski-model
  - def-causal-classification-of-lorentz-vectors
  - def-inertial-frame-and-inertial-chart
  - def-sr-si-units-and-coordinate-conventions
  - post-sr-ideal-clocks-and-light
  - def-sr-regular-causal-curve-and-worldline
  - def-sr-proper-time
  - def-sr-chart-tetrad-and-congruence-distinction
  - def-sr-operational-radar-protocol
  - def-sr-affine-phase-and-wave-covector
  - def-sr-null-wave-covector-and-observer-frequency
  - post-sr-ideal-plane-wave-model
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - post-sr-massive-particle-dynamics
  - post-sr-ideal-massless-particle-momentum
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  post-sr-ideal-clocks-and-light: formulation-prerequisite
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-chart-tetrad-and-congruence-distinction: mathematical-premise
  def-sr-operational-radar-protocol: formulation-prerequisite
  def-sr-affine-phase-and-wave-covector: mathematical-premise
  def-sr-null-wave-covector-and-observer-frequency: formulation-prerequisite
  post-sr-ideal-plane-wave-model: formulation-prerequisite
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  post-sr-massive-particle-dynamics: formulation-prerequisite
  post-sr-ideal-massless-particle-momentum: formulation-prerequisite
physical_scope: "Formulation vocabulary inside the flat special-relativity framework: it names run descriptions, operational models, data records, calibration declarations and uncertainty bounds built from the framework's own objects (events, worldlines, clocks, observers, ideal waves, radar readings, observer energies and frequencies) and its SI conventions. It asserts no measurement, no apparatus behaviour, no realized experiment, no sampling law, no statistical inference and no value of any physical constant; in particular it does not claim that any laboratory realizes an operational model."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages; the author's lightandmatter.com page links this Archive upload); signature (+---) converted to (-+++) and c = 1 formulas restored to x^0 = c t; Sections 1.3 'Measurement' and 1.4 'The Lorentz transformation', pp. 23-31 (operational definition of time and the operationalism passage p. 26), Sections 3.2-3.3 pp. 55-59, Section 5.1 pp. 121-123"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special Relativity and Flat Spacetime' printed pp. 1-5: the operational construction of an inertial coordinate system from freely moving rigid rods and a set of synchronized clocks, the definition of an event, the interval and the metric"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
dependency_level: 16
---

## Definition

Adopt the SI conventions of [[def-sr-si-units-and-coordinate-conventions]], the ideal-clock and ideal-light assumptions of [[post-sr-ideal-clocks-and-light]], the ideal plane-wave and frequency-reading model of [[post-sr-ideal-plane-wave-model]], the operational radar protocol of [[def-sr-operational-radar-protocol]], the massive-particle measurement identification of [[post-sr-massive-particle-dynamics]] clause (ii) and the massless-particle measurement identification of [[post-sr-ideal-massless-particle-momentum]] clause (ii). This definition introduces the framework's experimental-interface vocabulary; it selects no experiment, records no value and asserts no comparison.

**(a) Run descriptions.** A *run description* is a finite tuple $D=(d_1,\dots,d_r)$ whose entries are framework objects of the following kinds, each declared with its domain and regularity as specified by the cited item, together with the frame, observer, event or unit convention required for a numerical reading where such a reading is used: a point of the affine Minkowski space $A$ (an event, [[def-sr-affine-minkowski-model]]); a vector of $V$ of declared causal character ([[def-causal-classification-of-lorentz-vectors]]); a future timelike worldline together with its proper-time function ([[def-sr-regular-causal-curve-and-worldline]], [[def-sr-proper-time]]); a future unit timelike vector or a smooth observer congruence ([[def-sr-chart-tetrad-and-congruence-distinction]]); a future null wave covector with its affine phase ([[def-sr-affine-phase-and-wave-covector]]); a radar time or radar distance assigned by the operational radar protocol ([[def-sr-operational-radar-protocol]]); an observer angular frequency ([[def-sr-null-wave-covector-and-observer-frequency]]); an observer energy, spatial momentum, kinetic energy or invariant mass ([[def-sr-observed-energy-momentum-and-kinetic-energy]]); and a real parameter vector in a declared subset of $\mathbb R^m$ with declared units. A run description is a description of a model configuration; the tuple asserts nothing about any apparatus or about nature.

**(b) Operational model.** An *operational model* is a tuple $M=(S,\Theta,\theta,D,F)$ in which: $S$ is a nonempty set, the *preparation index set*; $\Theta\subseteq\mathbb R^m$ is a nonempty *parameter set* and $\theta:S\to\Theta$ is a surjection, the *parameter map*; $D$ assigns to each $s\in S$ a run description $D(s)$ of (a); and for some integer $d\ge1$ the map $F:\Theta\to\mathbb R^d$ is a *prediction map* for $D$, subject to the declared interpretation $(*)$: for every $s\in S$, each component of $F(\theta(s))$ is a number that the framework's definitions, postulates and proved consequences assign to the description $D(s)$, with every intermediate quantity, frame, event, sign and unit declared. An operational model is called an operational model *for the quantity whose values $F$ computes*. Condition $(*)$ is a declared interpretation that reviewers check when the model is used; it is not a consequence of the tuple structure, and no clause of this definition asserts that any apparatus realizes $M$ or that $F(\theta(s))$ is measured.

**(c) Data records.** A *data record* is a tuple $R=(N,z,\varepsilon,a)$ with an integer $N\ge1$; $z=(z_1,\dots,z_N)$ with $z_k\in\mathbb R^d$; $\varepsilon=(\varepsilon_1,\dots,\varepsilon_N)$ with $\varepsilon_k\in[0,\infty)^d$; and $a=(a_1,\dots,a_N)$ a finite tuple of *condition annotations*, each a finite string identifying the declared run condition of the datum and, when the datum is taken from a report, the bibliographic identification of that report. The record declares: for each $k$, the value of the quantity of (b) under the condition annotated by $a_k$ lies in the closed box $\prod_{j=1}^d[z_{k,j}-\varepsilon_{k,j},\,z_{k,j}+\varepsilon_{k,j}]$, in the declared units. A data record contains no probability space, random variable, distribution, sampling law, independence assumption, likelihood or coverage statement; it declares nothing about how the values $z_k$ were produced and nothing about the correctness of any calibration.

**(d) Calibration declarations.** Let $Z$ be a nonempty set of declared *instrument-output values*. A *calibration declaration* is a tuple $C=(Z,c,\delta,h)$ with $c:Z\to\mathbb R^d$, $\delta:Z\to[0,\infty)^d$ and $h$ a condition annotation; it declares that for every $z\in Z$ obtained under the condition annotated by $h$, the value of the declared quantity lies in the closed box $\prod_j[c_j(z)-\delta_j(z),\,c_j(z)+\delta_j(z)]$ in the declared units. A *calibration record* is a data record of (c) whose declared quantity is the value of the calibration map's output. The declaration asserts no accuracy beyond the bound $\delta$ and no statistical property of $c$ or $\delta$.

**(e) Uncertainty vocabulary.** For a data record of (c), the *declared uncertainty* of the $k$-th datum is the vector $\varepsilon_k$; a *source label* is an element of the finite declared set $\{\text{calibration},\ \text{systematic},\ \text{sampling-variability},\ \text{rounding},\ \text{other}\}$ attached to a bound; and a *total declared bound* for a value computed from finitely many recorded values by a declared finite arithmetic expression is any $B\in[0,\infty)$ for which the declaration states: whenever each recorded value lies in its declared closed box, the computed value lies in $[\hat y-B,\hat y+B]$ for the declared number $\hat y$ (for instance, for a sum of recorded scalars the sum of the recorded bounds is such a bound). Every uncertainty entry is a declared constraint of the form in (c) and (d); no probability law, coverage probability, confidence level, p-value or posterior is defined by this vocabulary.

**(f) Comparison claims are separate.** A claim that a data record $R$ and an operational model $M$ are consistent, or that $R$ supports, refutes or fails to distinguish $M$, is not part of (a)-(e): it requires its own statement, an explicitly declared comparison rule and adequate primary-report and analysis prerequisites. For the current stored-lithium-ion optical Doppler report, that research prerequisite, labelled M20 in the source design, is supplied by `exp-sr-stored-lithium-ion-doppler-time-dilation-2014` and `pthm-sr-specified-model-comparison`. The comparison theorem distinguishes hard-bound records of (c) from separately defined source-reported estimates and standard-uncertainty scales; the latter are not hard bounds or coverage guarantees. It permits comparison with specified alternative prediction hypotheses, which are not thereby operational models of the SR framework and are not asserted to satisfy condition $(*)$ in (b). Other primary-report families remain subject to their own retrieval and analysis obligations. These are nonlogical status pointers to the separate empirical record and comparison claim; no clause of this vocabulary licenses a conclusion about the truth of a postulate or of the framework.

**(g) Well-definedness and scope.** All components of (a)-(e) are finite tuples of sets, maps and real numbers with declared domains and units; the constructions use no choice principle and no measurability, integrability, completeness or differentiability beyond the cited items, and clause (b) evaluates a prediction only at parameter values for which the cited items supply its ingredients. The vocabulary asserts no measurement, no apparatus behaviour, no empirical support or refutation, no value of the constant $c$ or of any other physical parameter, and no statistical inference.
