---
id: pthm-nrqm-potentials-delta-point-interaction-bound-state
aliases: [ nrqm-potentials-delta-point-interaction-bound-state ]
kind: physics-theorem
domain: physics
title: "The zero-range (delta) model: self-adjointness and the unique attractive bound-state preparation"
status: draft
origin: session
dependency_level: 12
deps:
  [
    def-nrqm-potentials-interval-and-delta-models,
    def-nrqm-potentials-one-dimensional-line-model,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-autonomous-dynamics-framework-evolution,
    pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation,
    lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues,
    lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators,
    thm-nrqm-intervals-delta-interface-operator,
    thm-nrqm-intervals-delta-unique-bound-state,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-potentials-interval-and-delta-models: formulation-prerequisite
  def-nrqm-potentials-one-dimensional-line-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation: physical-result
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators: mathematical-premise
  thm-nrqm-intervals-delta-interface-operator: mathematical-premise
  thm-nrqm-intervals-delta-unique-bound-state: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The pair's declared zero-range model of the effective
  one-dimensional massive particle with coupling g: the domain and
  self-adjointness of the assigned energy operator defined by the interface
  condition, the absence of negative eigenvalues for non-attractive coupling,
  and the unique normalized bound state with its exact energy and eigenfunction
  for attractive coupling. The statement is conditional on P1, P2, P4, P5, the
  declared interface model and the cited mathematics; it asserts no scattering
  coefficient, no material impurity, no measured spectrum and no empirical
  result."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 2.3.2,
        printed pages 48-49 (PDF pages 51-52): the delta-function potential, the
        derivative jump condition, the single bound state and its energy"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 5.1,
        printed pages 78-79 (PDF pages 86-87): the infinitely narrow well limit
        of a square well and its single bound state"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the postulates P1, P2, P4, P5, the declared line model
[[def-nrqm-potentials-one-dimensional-line-model]] and the declared zero-range
model of [[def-nrqm-potentials-interval-and-delta-models]] clause (d) with
mass parameter $m>0$, spin label $s=0$, coupling $g\in\mathbb R$ (in joule
metres) and $\alpha_{g}=2mg/\hbar^{2}$. Let
$H_{g}=(\hbar^{2}/2m)A_{\alpha_{g}}$ be the assigned energy operator of the
zero-range model on the domain $D(H_{g})=D(A_{\alpha_{g}})$ of the interface
operator. Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Then:

(a) $D(H_{g})$ consists exactly of the classes $u\in H^{1}(\mathbb R)$ whose
restrictions to $(0,\infty)$ and $(-\infty,0)$ are of class $H^{2}$, subject to
the interface condition
$$u'^{*}(0+)-u'^{*}(0-)=\frac{2mg}{\hbar^{2}}\,u^{*}(0),$$
On that domain, $(H_gu)|_{\mathbb R_\pm}=-\frac{\hbar^2}{2m}D^2(u|_{\mathbb R_\pm})$, where $\mathbb R_+=(0,\infty)$, $\mathbb R_-=(-\infty,0)$ and each second weak derivative is taken on its open half-line; these two $L^2$ classes are glued across the null point $0$. The action is not the global weak second derivative of $u$ on $\mathbb R$. $(H_{g},\mathrm J)$ is
an assigned sharp observable: $H_{g}$ is densely defined and self-adjoint on
$D(H_{g})$.

(b) *Repulsive and free couplings.* If $g\ge0$, then $H_{g}$ has no negative
eigenvalue, and for every $g\in\mathbb R$ the value $0$ is not an eigenvalue of
$H_{g}$.

(c) *Attractive coupling.* If $g<0$, then $H_{g}$ has exactly one negative
eigenvalue, namely
$$E_{g}=-\frac{mg^{2}}{2\hbar^{2}}<0,$$
and its eigenspace is one-dimensional, spanned by the unit class
$$\psi_{g}(x)=\sqrt{\frac{m|g|}{\hbar^{2}}}\;\exp\!\Bigl(-\frac{m|g|}{\hbar^{2}}|x|\Bigr).$$
For $g<0$ this is the unique bound-state preparation of the zero-range model: every
eigenvector of $H_{g}$ with negative eigenvalue is a nonzero multiple of
$\psi_{g}$, the preparation $[\psi_{g}]$ is stationary with energy $E_{g}$, and
the energy outcome law assigns probability one to $\{E_{g}\}$.

(d) *Scope.* The statement is conditional on P1, P2, P4, P5, the declared
interface realization and the cited mathematics; the coupling $g$ is a
declared model parameter, not a measured quantity. No scattering coefficient,
no transmission or reflection statement, no material impurity and no measured
spectrum is asserted; the formal writing $g\,\delta(x)$ is not used as a
function and no potential in $L^{2}$ is involved.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5 and the choice hypotheses; $m>0$, $g,\hbar$ real with $\hbar>0$; $\alpha_{g}=2mg/\hbar^{2}$; the interface operator $A_{\alpha_{g}}$ and the assigned energy operator $H_{g}=(\hbar^{2}/2m)A_{\alpha_{g}}$ of the zero-range model.

[F1] **The interface operator.** For every $\alpha\in\mathbb R$, the operator $A_{\alpha}$ with domain $D(A_{\alpha})$ consisting of the classes $u\in H^{1}(\mathbb R)$ whose restrictions to the half-lines are of class $H^{2}$ and which satisfy $u'^{*}(0+)-u'^{*}(0-)=\alpha u^{*}(0)$, and with $A_{\alpha}u$ obtained by gluing $-D^2(u|_{\mathbb R_+})$ and $-D^2(u|_{\mathbb R_-})$, is densely defined, symmetric and self-adjoint ([[thm-nrqm-intervals-delta-interface-operator]] clauses (a)-(c)).

[F2] **Negative eigenvalues of the interface operator.** For $\alpha\ge0$ the operator $A_{\alpha}$ has no negative eigenvalue, and $0$ is not an eigenvalue for any $\alpha\in\mathbb R$; for $\alpha<0$ the number $-\alpha^{2}/4<0$ is an eigenvalue with one-dimensional eigenspace spanned by $\psi_{\alpha}(x)=\sqrt{-\alpha/2}\,e^{\alpha|x|/2}$, which is a unit vector, and it is the unique negative eigenvalue: every eigenvector with negative eigenvalue is a multiple of $\psi_{\alpha}$; moreover for $\hbar,m>0$ and $\alpha<0$ the scaled operator $(\hbar^{2}/2m)A_{\alpha}$ on the same domain is self-adjoint and has $\psi_{\alpha}$ as eigenvector with eigenvalue $-\hbar^{2}\alpha^{2}/(8m)$ ([[thm-nrqm-intervals-delta-unique-bound-state]] clauses (a)-(c)).

[F3] **Positive scaling.** For self-adjoint $A$ and $c=\hbar^{2}/2m>0$, the operator $cA$ on $D(A)$ is self-adjoint, its spectrum is $c\,\sigma(A)$, and its eigenvectors are exactly those of $A$ with eigenvalues scaled by $c$ ([[lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators]] clauses (a)-(d)).

[F4] **Assigned observables and stationary states.** An assigned sharp observable is a densely defined self-adjoint operator with a declared unit; a nonzero $\psi$ gives a stationary preparation of the autonomous model exactly when it is an eigenvector of the assigned energy observable, and the energy law of a unit eigenvector is the point mass at its eigenvalue ([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a), [[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] clause (c), [[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clause (b), [[def-nrqm-autonomous-dynamics-framework-evolution]]).

## Proof

**Proof technique:** direct; instantiate the interface operator at the declared coupling, scale it by $\hbar^{2}/2m$ along the positive-scaling lemma, and translate the eigenvalues to the physical coupling with elementary algebra.

**Given:** The data and hypotheses of the statement and [F1]-[F4].

1.1 [Domain and self-adjointness] By [F1] the operator $A_{\alpha_{g}}$ is self-adjoint on the displayed domain, and $H_{g}=(\hbar^{2}/2m)A_{\alpha_{g}}$ on the same domain; by [F3] with $c=\hbar^{2}/2m>0$, $H_{g}$ is self-adjoint. The domain description is unchanged; the action is the class formed by the two half-line weak second derivatives in [F1], multiplied by $-\hbar^2/(2m)$. These restrictions lie in $L^2$ by the domain condition, so their glued class is in $L^2(\mathbb R)$; no global $L^2$ second derivative is required. This proves (a). [given, F1, F3, algebra]

2.1 [Repulsive and free couplings] Let $g\ge0$, so that $\alpha_{g}=2mg/\hbar^{2}\ge0$. By [F2] $A_{\alpha_{g}}$ has no negative eigenvalue; by [F3] multiplication of eigenvalues by $c>0$ implies that $H_g$ has no negative eigenvalue. Separately, for every real $g$, [F2] excludes zero as an eigenvalue of $A_{\alpha_g}$, and [F3] excludes zero for $H_g$. This proves (b), including $g=0$. [step 1.1, F2, F3, algebra]

3.1 [Attractive coupling] Let $g<0$, so that $\alpha_{g}=2mg/\hbar^{2}<0$. By [F2] the unique negative eigenvalue of $A_{\alpha_{g}}$ is $-\alpha_{g}^{2}/4$ with one-dimensional eigenspace spanned by the unit vector $\psi_{\alpha_{g}}$, and [F3] scales the eigenvalue by $c=\hbar^{2}/2m$ while preserving the eigenvector: $E_{g}=c\,(-\alpha_{g}^{2}/4)=-\frac{\hbar^{2}}{2m}\cdot\frac{1}{4}\bigl(\frac{2mg}{\hbar^{2}}\bigr)^{2}=-\frac{m^{2}g^{2}}{2m\hbar^{2}}=-\frac{mg^{2}}{2\hbar^{2}}$. The eigenfunction is, by [F2], $\psi_{g}(x)=\sqrt{-\alpha_{g}/2}\,e^{\alpha_{g}|x|/2}$ with $-\alpha_{g}/2=m|g|/\hbar^{2}$ and $\alpha_{g}/2=-m|g|/\hbar^{2}$, that is the displayed $\sqrt{m|g|/\hbar^{2}}\,e^{-m|g||x|/\hbar^{2}}$, and it is a unit vector. Since the eigenvectors of $H_{g}$ are exactly those of $A_{\alpha_{g}}$ by [F3], the negative eigenspace of $H_{g}$ is one-dimensional and spanned by $\psi_{g}$; by [F4] the preparation $[\psi_{g}]$ is stationary with energy $E_{g}$ and its energy law is the point mass at $E_{g}$. This is (c). [step 2.1, F2, F3, F4, algebra]

4.1 [Reading and scope] The pair $(H_{g},\mathrm J)$ meets the definition of an assigned sharp observable by steps 1.1 and [F4], with the joule as declared energy unit; the coupling $g$, the interface condition and the absence of an $L^{2}$ potential are the declared model data of clause (d) of [[def-nrqm-potentials-interval-and-delta-models]], and the exclusions of (d) are exactly its recorded scope. [step 1.1, step 3.1, F4] ∎

## Remarks

- **Sign conventions.** The interface condition is
  $u'^{*}(0+)-u'^{*}(0-)=\alpha_{g}u^{*}(0)$ with
  $\alpha_{g}=2mg/\hbar^{2}$, the convention of the cited interface operator;
  with $g<0$ the jump is negative and the single bound state appears. The
  statement makes no claim about any other sign convention or normalization of
  the formal coupling.
- **What is not asserted.** The theorem proves the self-adjointness of the
  declared interface operator and its exact negative spectrum on the line. It
  does not compute transmission or reflection through the interface, does not
  treat the delta interaction on an interval or in higher dimension, and makes
  no empirical claim.
