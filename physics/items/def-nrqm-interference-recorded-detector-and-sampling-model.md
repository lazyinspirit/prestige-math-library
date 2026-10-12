---
id: def-nrqm-interference-recorded-detector-and-sampling-model
aliases: [nrqm-interference-recorded-detector-and-sampling-model]
kind: definition
domain: physics
title: "The declared recorded detector and sampling model of the two-path arrangement"
status: draft
origin: session
dependency_level: 10
deps: [def-nrqm-interference-two-path-preparation-and-detection-model, post-nrqm-framework-observable-and-probability, post-nrqm-framework-preparation-and-apparatus, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-framework-quantities-and-units, def-non-negative-and-positive-operator, def-bounded-linear-operator, def-hilbert-space-adjoint, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-probability-measure, def-independence-of-finite-random-variables, def-countable-choice]
dependency_roles:
  def-nrqm-interference-two-path-preparation-and-detection-model: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-non-negative-and-positive-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-probability-measure: mathematical-premise
  def-independence-of-finite-random-variables: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A declared finite recorded-outcome detector model and a declared sampling model for the two-path arrangement of the pair: bounded measurable recorded weights, their multiplication effects and the completed finite effect family including a no-record channel, the recorded probability reading of the unsharp finite-outcome clause of the observable and probability postulate P2, the conditioned recorded law, and the assumption of finitely many independent and identically distributed trials with a declared fringe criterion. The item asserts no detector realization, no calibration, no measured counts and no statistical-inference conclusion; the recorded-event probabilities are read from the declared effects, and the identification of a concrete apparatus with these effects and of its repetitions with the sampling model is a tested identification with uncertainty under the preparation and apparatus postulate P7."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.4 printed page 15: ideal reproducible measurements, finite-resolution outcomes and the change of state"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 1.1-1.2, printed pages 3-14 (PDF pages 6-17): detection records and the probability law of the wave function"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Definition

Adopt the declared two-path preparation model of
[[def-nrqm-interference-two-path-preparation-and-detection-model]], the
unsharp finite-outcome clause (iv) of the observable and probability postulate
P2, and the preparation and apparatus discipline P7
([[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-preparation-and-apparatus]]). Assume the Axiom of
Countable Choice ([[def-countable-choice]]). The following vocabulary is used
by this page.

**(a) Declared recorded detector.** A **declared recorded detector** of the
arrangement is a finite set $A$ of **recorded outcome labels** with
$0\notin A$, together with measurable **recorded weights**
$w_{a}:\mathbb R^{3}\to[0,1]$ for $a\in A$ such that
$\sum_{a\in A}w_{a}(x)\le1$ for almost every $x\in\mathbb R^{3}$. The
**effect** of the label $a$ is the multiplication operator
$$F_{a}:=M_{w_{a}},\qquad (M_{w}\psi)(x):=w(x)\psi(x),$$
on $H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{r})$, and the **no-record effect** is
$$F_{0}:=I-\sum_{a\in A}F_{a}.$$
Each $F_{a}$ is a bounded self-adjoint operator
([[def-bounded-linear-operator]]) with $0\le F_{a}\le I$ in the
quadratic-form order, and $\sum_{a\in A}F_{a}+F_{0}=I$ with $0\le F_{0}\le I$:
multiplication by a measurable weight $0\le w\le1$ is bounded with
$\|M_{w}\|\le1$ by [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], self-adjoint by
[[def-hilbert-space-adjoint]], and nonnegative with $M_{w}\le I$ by the order
of [[def-non-negative-and-positive-operator]]; the sum
$F_{0}=M_{1-\sum_{a}w_{a}}$ is of the same form because $0\le1-\sum_{a}w_{a}\le1$.
Thus $(F_{a})_{a\in A}\cup\{F_{0}\}$ is a finite family of bounded effects
with nonnegative terms summing to the identity, of the kind of clause (iv) of
P2 ([[post-nrqm-framework-observable-and-probability]]).

**(b) Recorded probabilities.** For a preparation $\rho\in D(H_{s})$ the
**recorded probability** of a label $a\in A$ and the **no-record probability**
are
$$\nu(a):=\operatorname{tr}\bigl(\rho F_{a}\bigr),\qquad \nu(0):=\operatorname{tr}\bigl(\rho F_{0}\bigr)=1-\sum_{a\in A}\nu(a),$$
the outcome reading of clause (iv) of P2 for the declared effects
([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (f)
records the reading; the numbers are nonnegative and sum to one). The
**recorded-event mass** is $\nu(A):=\sum_{a\in A}\nu(a)=1-\nu(0)\in[0,1]$. A
detector is **full-efficiency** when $\sum_{a}w_{a}=1$ almost everywhere, so
that $F_{0}=0$ and $\nu(0)=0$; otherwise the model **loses** events, and the
no-record channel carries the lost mass. A **declared recorded bin** $B$ is
the special case with one label $a$ and $w_{a}=\mathbf 1_{B}$; then
$F_{a}=G(B)$ is the position projection of clause (e) of
[[def-nrqm-interference-two-path-preparation-and-detection-model]], with the
position set $B$ read in the metre unit of
[[def-nrqm-framework-quantities-and-units]], and the recorded probability is
the ideal bin probability.

**(c) Loss conditioning.** When $\nu(A)>0$, the **conditioned recorded law** is
$$\bar\nu(a):=\frac{\nu(a)}{\nu(A)}\qquad(a\in A).$$
It is a probability measure on the finite set $A$
([[def-probability-measure]]); it is the law of the recorded label under the
declared model conditioned on the occurrence of a record. Conditioning is a
statistical operation on the recorded data; it is not a state update, and no
claim of P3 is made here.

**(d) Sampling model.** A **declared $N$-trial sampling model** for a fixed
preparation $\rho$ is a probability space carrying random elements
$O_{1},\dots,O_{N}:\Omega\to A\cup\{0\}$ ($N\ge1$), where $0$ is the no-record
label of clause (b) and is distinct from every recorded label because
$0\notin A$, and that are **mutually independent** in the sense of
[[def-independence-of-finite-random-variables]] and **identically distributed**
with $\mathbb P(O_{k}=a)=\nu(a)$ for every $a\in A$, $\mathbb P(O_{k}=0)=\nu(0)$
and every $k$, where $\nu$ is the recorded law of clause (b); the numbers
$\nu(a)$ and $\nu(0)$ sum to one, so this is a probability law on the finite
set $A\cup\{0\}$. The **empirical frequency** of the label $a$ in the sample is
$$F_{N}(a):=\frac{1}{N}\#\{k:O_{k}=a\}.$$
A **declared fringe criterion** for sample size $N$ is a subset
$C\subseteq(A\cup\{0\})^{N}$; the model **accepts** the sample when
$(O_{1},\dots,O_{N})\in C$ and **fails the criterion** otherwise. The
identification of repetitions of a concrete procedure with the independent
identically distributed model is an additional statistical assumption in the
sense of clause (ii) of P7; it is not a consequence of P1-P6, and correlated
trials, drifting preparation, dead time and selection must be modeled or
recorded as limitations if present ([[post-nrqm-framework-preparation-and-apparatus]]).

**(e) Status.** Clauses (a)-(d) fix the recorded-detector and sampling
vocabulary of the pair and read clause (iv) of P2 and clauses (i)-(iii) of P7.
The recorded weights, the label set, the conditioning convention and the
sampling model are declared apparatus and procedure inputs. The claim "this
apparatus realizes the effect family $F_{a}$" and the claim "its repetitions
are independent and identically distributed draws of $\nu$" are physical
identifications with uncertainty under P7(iii) and P7(ii), can fail, and are
not derived here. No calibration, efficiency, background or resolution value
is asserted, no counts are recorded, and no statistical-inference conclusion
is drawn by this definition.

## Remarks

- **Relations between the detector families.** The ideal detector of clause
  (e) of [[def-nrqm-interference-two-path-preparation-and-detection-model]] is
  the full-efficiency case $w_{a}=\mathbf 1_{B_{a}}$ of a declared recorded
  detector whose labels partition the bin family; a general recorded detector
  with non-indicator weights represents finite resolution, response and
  efficiency through its weights, and its no-record channel represents lost
  events.
- **No state update is declared.** The item declares outcome probabilities
  only. Which post-measurement state, if any, a registration leaves behind is a
  separate instrument-model question and is not part of this page.
