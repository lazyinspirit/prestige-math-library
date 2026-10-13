---
id: ex-cm16-recurrence-volume-check
kind: example
title: "A trapped one-label model: the compact energy sublevel of the radial quartic potential is invariant with finite phase volume, so the recurrence theorem applies, while the free model's energy sublevels are unbounded and the hypothesis fails"
status: draft
origin: session
domain: physics
dependency_level: 24
deps: [pthm-cm16-recurrence-for-finite-volume-models,
       def-cm16-flow-equilibria-and-invariant-sets,
       def-cm-mechanical-vector-field-and-energy-in-a-chart,
       lem-cm-energy-conservation-for-the-mechanical-system,
       thm-cm-compact-continuation-for-locally-lipschitz-odes,
       def-lebesgue-measure-and-the-lebesgue-sigma-algebra,
       def-borel-sigma-algebra,
       def-cm01-units]
dependency_roles:
  pthm-cm16-recurrence-for-finite-volume-models: physical-result
  def-cm16-flow-equilibria-and-invariant-sets: formulation-prerequisite
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  lem-cm-energy-conservation-for-the-mechanical-system: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A declared-data check in dimensionless normalized coordinates of the page's recurrence theorem on a trapped one-label, three-dimensional Cartesian model: for the unit-mass radial quartic potential U(x)=||x||^4/4 the six-dimensional phase-space energy sublevel {E<=E1}, E1>0, is compact with finite dimensionless coordinate volume bounded by 512 E1^(9/4), invariant under the flow by energy conservation and compact continuation, so the recurrence theorem gives almost-everywhere infinite returns; in contrast the dimensionless free model U=0 has unbounded energy sublevels and each nonzero-velocity trajectory eventually exits every bounded set, showing the finite-volume hypothesis is not automatic. No SI quantity, measurement or empirical comparison is asserted."
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §4.2.3 pp. 92-93: recurrence, the finite-measure requirement and the warning that positivity of energy alone does not bound the accessible volume"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §3.3 and Chapter 9: phase-plane energy curves and the bounded-motion discussion"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), §7.1 pp. 143-157: continuation, trapping in compact invariant sets and the limits of numerical phase portraits"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
---

## Example

**Declared model data.** Use dimensionless normalized position, velocity, mass,
time and energy coordinates; this is a dimensionless model computation and no
SI units are assigned. Take one label in the flat Cartesian presentation of
[[pthm-cm16-recurrence-for-finite-volume-models]] with $N=1$: the configuration
domain is $Q:=\mathbb R^3$, the mass is $m:=1$ so that $\mathsf M=I_3$ and
$W=Q\times\mathbb R^3$ with coordinates $(x,v)$, and the **radial quartic
potential** is
$$U(x):=\tfrac14\lVert x\rVert_2^4,$$
a $C^\infty$ datum of [[def-cm-mechanical-vector-field-and-energy-in-a-chart]]
with field $G(x,v)=(v,-\lVert x\rVert_2^2x)$ and energy
$E(x,v)=\tfrac12\lVert v\rVert_2^2+\tfrac14\lVert x\rVert_2^4$. For $E_1>0$ put
$$A_{E_1}:=\{(x,v)\in W:E(x,v)\le E_1\}.$$

**Assertions to check.** (i) $A_{E_1}$ is a nonempty compact Borel subset of
$W$ with
$\lambda_6(A_{E_1})\le\bigl(2(4E_1)^{1/4}\bigr)^3\bigl(2\sqrt{2E_1}\bigr)^3=512\,E_1^{9/4}<\infty$;
(ii) the flow of the model maps $A_{E_1}$ onto itself for every real time, so
the hypotheses of [[pthm-cm16-recurrence-for-finite-volume-models]] are met
and for every Borel $E\subseteq A_{E_1}$ almost every state of $E$ returns to
$E$ infinitely often; (iii) for the flat model $U\equiv0$ the energy sublevels
are unbounded, the phase measure of $W$ is infinite, and each nonzero-velocity
free motion eventually exits every bounded set (hence visits a fixed bounded
set at only finitely many integer times), so the finite-volume hypothesis is
not automatic.

## Facts & Assumptions

**Given:** the data $N=1$, $\mathsf M=I_3$, $U(x)=\lVert x\rVert_2^4/4$, its field and energy; the sublevel $A_{E_1}$; the flat comparison data $U\equiv0$ with field $G_0(x,v)=(v,0)$.

[L1] Recurrence ([[pthm-cm16-recurrence-for-finite-volume-models]]): for an autonomous potential presentation with a bounded invariant Borel set $A$ whose compact closure lies in the phase domain and whose flow is defined for all real times on $A$, phase volume is preserved on its Borel subsets by finite local covers and time subdivision; almost every state of every Borel $E\subseteq A$ returns to $E$ infinitely often at integer times. The theorem assumes $\mathrm{AC}_\omega$, inherited from the phase-volume result.

[L2] Energy conservation and compact continuation ([[lem-cm-energy-conservation-for-the-mechanical-system]], [[thm-cm-compact-continuation-for-locally-lipschitz-odes]]): the energy of the mechanical system is constant along every maximal solution, and a solution whose graph stays in a compact subset of the state domain cannot reach a finite forward or backward endpoint.

[L3] Borel and Lebesgue vocabulary ([[def-borel-sigma-algebra]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]): closed sets are Borel, and the Lebesgue measure of a box in $\mathbb R^6$ is the product of its side lengths.

## Verification

**Proof technique:** direct.

1.1 Compactness and phase volume: $E$ is continuous and $A_{E_1}=E^{-1}((-\infty,E_1])$ is closed; if $(x,v)\in A_{E_1}$ then $\tfrac14\lVert x\rVert_2^4\le E_1$ and $\tfrac12\lVert v\rVert_2^2\le E_1$, so $\lVert x\rVert_2\le(4E_1)^{1/4}$ and $\lVert v\rVert_2\le\sqrt{2E_1}$; hence $A_{E_1}$ is contained in the box of side lengths $2(4E_1)^{1/4}$ (three position coordinates) and $2\sqrt{2E_1}$ (three velocity coordinates), is bounded and closed, therefore compact, and by [L3] has $\lambda_6(A_{E_1})\le(2(4E_1)^{1/4})^3(2\sqrt{2E_1})^3=512\,E_1^{9/4}<\infty$; it is nonempty because $(0,0)\in A_{E_1}$. [given, L3, algebra]

2.1 Invariance: along a maximal solution of the quartic model the energy is constant by [L2], so the solution stays in $A_{E_1}$; because $A_{E_1}$ is compact and contained in the state domain $W$, [L2] also shows the solution is defined for all times, and applying the same argument to the reversed motion gives $\Phi_t(A_{E_1})\supseteq A_{E_1}$ as well; hence $\Phi_t(A_{E_1})=A_{E_1}$ for every $t\in\mathbb R$. [step 1.1, given, L2, algebra]

3.1 Recurrence conclusion: $A_{E_1}$ is a bounded Borel set of finite measure with closure in the flow domain and is invariant by step 2.1; [L1] therefore gives, for every Borel $E\subseteq A_{E_1}$, that almost every state of $E$ returns to $E$ at infinitely many positive integer times. [step 1.1, step 2.1, L1]

4.1 Failure of the hypothesis for the flat model: for $U\equiv0$, $E_0(x,v)=\tfrac12\lVert v\rVert_2^2$ and the sublevel $\{E_0\le E_1\}=\mathbb R^3\times\{v:\lVert v\rVert_2\le\sqrt{2E_1}\}$ is unbounded, indeed it meets every translate of the velocity ball in the position directions; the phase domain $W=\mathbb R^6$ has infinite Lebesgue measure, so [L1]'s boundedness and finite-measure hypotheses fail. For the motion through $(0,e_1)$, $x(t)=te_1$: if a fixed bounded phase set has $\lVert x\rVert_2\le R$ on it, this trajectory can be in the set only for $0\le t\le R$. It eventually exits and makes only finitely many integer-time visits; this does not claim that no finite return occurs. The finite-volume hypothesis is a genuine restriction. [step 1.1, given, L1, algebra] ∎

## Remarks

- **What the check establishes.** The radial quartic model is trapped: every energy sublevel is compact and invariant, so recurrence applies to every positive energy level in the flat $N=1$ Cartesian presentation for which the theorem is stated. This realizes the hypothesis of [[pthm-cm16-recurrence-for-finite-volume-models]] on declared data and shows that the theorem is not vacuous. The conclusion is almost-everywhere in phase volume, gives no return time and says nothing about the flat model beyond the failure of its hypotheses.

- **Choice assumption.** The check inherits the countable-choice assumption of [L1] through the cited theorem; no further choice is used.

- **Units.** The coordinates and measure here are dimensionless. To give the model a physical-unit interpretation one would have to specify compatible length, mass, time and energy scales and restore them in both the potential and phase-volume bound; this example does not make that identification ([[def-cm01-units]]).
