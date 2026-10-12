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
       thm-heine-borel-rn,
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
  thm-heine-borel-rn: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Poincare recurrence for the Hamiltonian flow of a declared autonomous potential presentation: if a bounded Borel set of phase space with compact closure in the phase domain is invariant under a complete flow on that set, then the flow preserves phase volume on its Borel subsets by a finite local-cover and time-subdivision argument, and almost every state of each such subset returns to it infinitely often at integer multiples of the time unit. The statement assumes the Axiom of Countable Choice inherited from the local phase-volume theorem and asserts nothing about return times, which individual states return, infinite phase volume or incomplete flows outside the invariant set, and nothing empirical."
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
phase-volume form $\Omega=\omega^{\wedge3N}/(3N)!$. Let $A\subseteq W$ be a
bounded Borel set ([[def-borel-sigma-algebra]]) whose closure is contained in
the open phase domain $W$. Let $\Phi_t$ denote the potential-branch flow on
its maximal time-slice domain, and suppose it is defined at every point of $A$
for all real times and maps $A$ onto itself:
$$\Phi_t(A)=A\qquad(t\in\mathbb R),$$
so that $A$ is invariant in the sense of
[[def-cm16-flow-equilibria-and-invariant-sets]] clause (iv). Then
$\lambda_{6N}(A)<\infty$, and the flow preserves $\lambda_{6N}$ on every
Borel subset of $A$, by the finite-cover and time-subdivision argument in the
proof below. For every Borel set $E\subseteq A$ almost every
$x\in E$ with respect to the Lebesgue measure $\lambda_{6N}$ of the chart
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]) has
$$\Phi_n(x)\in E\qquad\text{for infinitely many }n\ge1.$$
The time unit is the frame time $[t]=\tau$ ([[def-cm01-units]]), so
"infinitely many $n$" means infinitely many returns at unit time steps.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the potential presentation and Hamiltonian
data with $d\equiv0$; the invariant bounded Borel set $A$ with compact closure
$K:=\overline A\subset W$; and the potential-branch flow along $A$ for every
real time.

[L1] Local Liouville preservation ([[pthm-cm13-flow-preservation]] and [[pthm-cm13-liouville]] clauses 1, 2 and 4): at each phase point of the autonomous $C^2$ Hamiltonian model there is an open neighborhood $U_i$ and a time $h_i>0$ on which the local flow is a $C^1$ diffeomorphism with unit Jacobian determinant; for every $|s|\le h_i$ and bounded Borel $B\subseteq U_i$ with $\overline B\subseteq U_i$, its image is Borel and $\lambda_{6N}(\Phi_s(B))=\lambda_{6N}(B)$. These are local-in-time statements on actual solution domains.

[L2] Recurrence in finite measure ([[thm-poincare-recurrence-for-finite-measure-preserving-systems]]): in a measure-preserving system $(X,\mathcal A,\mu,T)$ with $\mu(X)<\infty$, for every $E\in\mathcal A$ almost every $x\in E$ has $T^nx\in E$ for infinitely many positive integers $n$.

[L3] Measurability of the time-one map ([[thm-cm-smooth-dependence-and-the-variational-equation]]): the Hamiltonian field is $C^1$ because $H$ is $C^2$; its maximal-flow domain is open and its flow map is $C^1$ there. Every point of $A$ has a complete orbit by hypothesis, so the time-one domain is an open neighborhood of $A$ and $\Phi_1$ is continuous, hence Borel measurable, on that neighborhood.

[L4] Heine-Borel in Euclidean space ([[thm-heine-borel-rn]]): a closed and bounded subset of $\mathbb R^{6N}$ is compact.

## Proof

**Proof technique:** direct.

1.1 Compact phase set and local cover: $K=\overline A$ is closed and bounded in $\mathbb R^{6N}$, so [L4] makes it compact; by hypothesis it lies in the open phase domain $W$. For each $z\in K$, [L1] supplies a local-flow neighborhood $U_z$ and $h_z>0$. Choose an open neighborhood $V_z$ of $z$ with $\overline{V_z}\subset U_z$, and by compactness select finitely many $V_1,\ldots,V_m$ covering $K$, with corresponding local neighborhoods $U_i$ and times $h_i$. Set $h:=\min_i h_i>0$. Since $A$ is bounded, $\lambda_{6N}(A)<\infty$. [given, L1, L4, algebra]

2.1 One short time slice preserves volume on every Borel subset of $A$: fix $|s|\le h$ and a Borel set $B\subseteq A$. Partition $B$ into disjoint Borel pieces $B_i$ by assigning each point to the first $V_i$ containing it. Then $\overline{B_i}\subseteq K\cap\overline{V_i}\subset U_i$, so [L1] applies to each piece and gives a Borel image with $\lambda_{6N}(\Phi_s(B_i))=\lambda_{6N}(B_i)$. The images are pairwise disjoint because $\Phi_s$ is injective on $A$, with inverse $\Phi_{-s}|_A$; they lie in $A$ by invariance. Finite additivity therefore yields $\lambda_{6N}(\Phi_s(B))=\lambda_{6N}(B)$. [step 1.1, given, L1, algebra]

3.1 All-time volume preservation by subdivision: for $t\ne0$, choose an integer $M\ge1$ with $|t|/M\le h$ and put $s:=t/M$. Starting from any Borel $B\subseteq A$, apply step 2.1 successively to $B,\Phi_s(B),\ldots,\Phi_{(M-1)s}(B)$; each is a Borel subset of $A$, so every step preserves measure and the final set is $\Phi_t(B)$. The case $t=0$ is immediate. Thus $\lambda_{6N}(\Phi_t(B))=\lambda_{6N}(B)$ for every real $t$ and every Borel $B\subseteq A$. [step 2.1, given, algebra]

4.1 The measure-preserving system: put $X:=A$, let $\mathcal A$ be the Borel $\sigma$-algebra of $X$ ([[def-borel-sigma-algebra]]), $\mu:=\lambda_{6N}|_{\mathcal A}$ and $T:=\Phi_1|_A$. By step 1.1, $\mu(X)<\infty$. The map $T$ maps $X$ onto itself, is a bijection with inverse $\Phi_{-1}|_A$, and is $\mathcal A$-measurable by [L3]. For every $E\in\mathcal A$, $T^{-1}(E)=\Phi_{-1}(E)$ and step 3.1 gives $\mu(T^{-1}(E))=\mu(E)$; hence $(X,\mathcal A,\mu,T)$ is a measure-preserving system with finite total measure. [step 3.1, given, L3, algebra]

5.1 Conclusion: apply [L2] to the system of step 4.1: for every $E\in\mathcal A$, almost every $x\in E$ satisfies $T^nx\in E$ for infinitely many $n\ge1$, that is $\Phi_n(x)\in E$ for infinitely many $n\ge1$, which is the assertion of the Statement. [step 4.1, L2] ∎

## Remarks

- **What the hypothesis buys.** The finite-volume invariant set is the essential hypothesis: free or unconfined models have infinite phase volume (their energy sublevels are unbounded), and the theorem deliberately says nothing about them. A mechanical realization is a compact energy sublevel of a trapped model, where energy conservation and compact continuation supply the invariance; the page's three-dimensional Cartesian quartic example works this out explicitly.

- **Choice and qualifications.** The countable-choice assumption is inherited from [[pthm-cm13-liouville]]; the recurrence theorem [[thm-poincare-recurrence-for-finite-measure-preserving-systems]] is itself proved without further choice (its proof uses countable subadditivity of the measure). No return-time estimate, no rate and no statement about individual states is asserted: the conclusion is almost-everywhere with respect to the phase volume.

- **No empirical content.** Recurrence is a property of the flow on an invariant finite-measure set; it is not a statement about observed gases, thermalization times or the second law, and it identifies no measured quantity.
