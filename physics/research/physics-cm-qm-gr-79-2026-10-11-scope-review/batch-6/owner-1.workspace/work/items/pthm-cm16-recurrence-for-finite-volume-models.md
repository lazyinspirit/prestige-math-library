---
id: pthm-cm16-recurrence-for-finite-volume-models
kind: physics-theorem
title: "Poincare recurrence for the model's Hamiltonian flow on a bounded invariant set of finite phase volume: almost every state of any Borel subset returns to it infinitely often"
status: draft
origin: session
domain: physics
dependency_level: 23
deps: [def-cm16-flow-equilibria-and-invariant-sets,
       pthm-cm13-liouville,
       pthm-cm13-flow-preservation,
       thm-poincare-recurrence-for-finite-measure-preserving-systems,
       def-cm13-two-form,
       thm-cm-smooth-dependence-and-the-variational-equation,
       def-countable-choice,
       def-lebesgue-measure-and-the-lebesgue-sigma-algebra,
       def-borel-sigma-algebra,
       def-cm01-units]
dependency_roles:
  def-cm16-flow-equilibria-and-invariant-sets: formulation-prerequisite
  pthm-cm13-liouville: physical-result
  pthm-cm13-flow-preservation: physical-result
  thm-poincare-recurrence-for-finite-measure-preserving-systems: mathematical-premise
  def-cm13-two-form: formulation-prerequisite
  thm-cm-smooth-dependence-and-the-variational-equation: mathematical-premise
  def-countable-choice: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Poincare recurrence for the Hamiltonian flow of a declared autonomous potential presentation: if a bounded Borel set of phase space with finite Lebesgue measure is invariant under the flow (as happens for the compact energy sublevel sets of a trapped one-dimensional model), then for every Borel subset of it almost every state returns to that subset infinitely often at integer multiples of the time unit. The statement assumes the Axiom of Countable Choice, inherited from the phase-volume preservation theorem, and it asserts nothing about return times, about which states return, about infinite phase volume or incomplete flows, and nothing empirical."
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §4.2.3 pp. 92-93: recurrence and the warning that positivity of energy alone does not make the accessible volume finite"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., Chapter 4: integrable and return-map discussions with the finite-phase-space qualifications"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), Chapter 7: dynamical-systems scope warnings on recurrence, invariant measures and numerical portraits"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), inherited from the phase-volume preservation
theorem [[pthm-cm13-liouville]] (its measure-preservation clause uses the
change-of-variables theorem under that assumption). Adopt the force model with
potential presentation and the Hamiltonian data of [[pthm-cm13-liouville]]:
time-independent potential $U:Q\to\mathbb R$ with residual forces
$d\equiv0$, Cartesian phase domain $W=Q\times\mathbb R^{3N}$
([[def-cm13-two-form]]), Hamiltonian
$$H:I_0\times W\to\mathbb R,\qquad H(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+U(x),$$
phase-volume form $\Omega=\omega^{\wedge3N}/(3N)!$, and local flow
$\Phi_t=\Phi(t,\cdot)$ on the neighbourhood $U_0$ of
[[pthm-cm13-flow-preservation]]. Let $A\subseteq U_0$ be a bounded Borel set
([[def-borel-sigma-algebra]]) with $\overline A\subseteq U_0$, and suppose
that the flow is defined on $A$ for all real times and maps $A$ onto itself:
$$\Phi_t(A)=A\qquad(t\in\mathbb R),$$
so that $A$ is invariant in the sense of
[[def-cm16-flow-equilibria-and-invariant-sets]] clause (iv). Then
$\lambda_{6N}(A)<\infty$, and for every Borel set $E\subseteq A$ almost every
$x\in E$ with respect to the Lebesgue measure $\lambda_{6N}$ of the chart
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]) has
$$\Phi_n(x)\in E\qquad\text{for infinitely many }n\ge1.$$
The time unit is the frame time $[t]=\tau$ ([[def-cm01-units]]), so
"infinitely many $n$" means infinitely many returns at unit time steps.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the potential presentation and Hamiltonian
data with $d\equiv0$; the invariant bounded Borel set $A$ with
$\overline A\subseteq U_0$; the time-one map $\Phi_1$ of the flow.

[L1] Liouville preservation ([[pthm-cm13-liouville]] clause 2 and clause 4): for every time $t$ on the flow's existence interval and every bounded Borel set $B\subseteq U_0$ with $\overline B\subseteq U_0$, the sets $B$ and $\Phi_t(B)$ are Lebesgue measurable and $\lambda_{6N}(\Phi_t(B))=\lambda_{6N}(B)$; on the potential branch the time slices are the momentum-phase maps of the model's motions, so the model's Hamiltonian evolution conserves phase volume on its actual domains.

[L2] Recurrence in finite measure ([[thm-poincare-recurrence-for-finite-measure-preserving-systems]]): in a measure-preserving system $(X,\mathcal A,\mu,T)$ with $\mu(X)<\infty$, for every $E\in\mathcal A$ almost every $x\in E$ has $T^nx\in E$ for infinitely many positive integers $n$.

[L3] Measurability of the time-one map ([[thm-cm-smooth-dependence-and-the-variational-equation]]): the Hamiltonian field of the presentation is $C^1$ (H is $C^2$), so its local flow is $C^1$ on its domain; in particular $\Phi_1$ is continuous, hence Borel measurable, on a neighbourhood of $A$.

## Proof

**Proof technique:** direct.

1.1 Volume invariance on $A$: by [L1], for every $t\in\mathbb R$ and every Borel $B\subseteq A$ (which is bounded with $\overline B\subseteq\overline A\subseteq U_0$) one has $\lambda_{6N}(\Phi_t(B))=\lambda_{6N}(B)$; in particular $\lambda_{6N}(A)<\infty$ because $A$ is bounded. [given, L1, algebra]

2.1 The measure-preserving system: put $X:=A$, let $\mathcal A$ be the Borel $\sigma$-algebra of $X$ ([[def-borel-sigma-algebra]]), $\mu:=\lambda_{6N}|_{\mathcal A}$ and $T:=\Phi_1|_A$. Then $\mu(X)=\lambda_{6N}(A)<\infty$ by step 1.1; $T$ maps $X$ into itself and is a bijection with inverse $\Phi_{-1}|_A$, because $\Phi_1(A)=A$ and $\Phi_{-1}\circ\Phi_1=\mathrm{id}$ where defined; $T$ is $\mathcal A$-measurable by [L3]; and $T$ preserves $\mu$, since for Borel $E\subseteq A$ one has $\mu(T(E))=\lambda_{6N}(\Phi_1(E))=\lambda_{6N}(E)=\mu(E)$ by step 1.1. Hence $(X,\mathcal A,\mu,T)$ is a measure-preserving system with finite total measure. [step 1.1, given, L1, L3, algebra]

3.1 Conclusion: apply [L2] to the system of step 2.1: for every $E\in\mathcal A$, almost every $x\in E$ satisfies $T^nx\in E$ for infinitely many $n\ge1$, that is $\Phi_n(x)\in E$ for infinitely many $n\ge1$, which is the assertion of the Statement. [step 2.1, L2] ∎

## Remarks

- **What the hypothesis buys.** The finite-volume invariant set is the essential hypothesis: free or unconfined models have infinite phase volume (their energy sublevels are unbounded), and the theorem deliberately says nothing about them. The typical mechanical realization is a compact energy sublevel set of a trapped one-dimensional model, where energy conservation and compact continuation supply the invariance; the page's example works this out explicitly.

- **Choice and qualifications.** The countable-choice assumption is inherited from [[pthm-cm13-liouville]]; the recurrence theorem [[thm-poincare-recurrence-for-finite-measure-preserving-systems]] is itself proved without further choice (its proof uses countable subadditivity of the measure). No return-time estimate, no rate and no statement about individual states is asserted: the conclusion is almost-everywhere with respect to the phase volume.

- **No empirical content.** Recurrence is a property of the flow on an invariant finite-measure set; it is not a statement about observed gases, thermalization times or the second law, and it identifies no measured quantity.
