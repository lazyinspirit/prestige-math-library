---
id: def-nrqm-composites-framework-composite-systems-and-local-readouts
aliases: [ nrqm-composites-framework-composite-systems-and-local-readouts ]
kind: definition
domain: physics
title: "Composite systems of the framework: product bases, local readouts, local
  effects and local instruments"
status: draft
origin: session
dependency_level: 10
deps:
  [
    def-axiom-of-choice,
    def-bounded-linear-operator,
    def-countable-choice,
    def-hilbert-orthogonal-projection,
    def-hilbert-space,
    def-non-negative-and-positive-operator,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-projection-valued-measure,
    lem-nrqm-composites-bounded-tensor-maps,
    lem-nrqm-composites-hilbert-tensor-construction,
    lem-nrqm-composites-local-pvm-tensor-extension,
    post-nrqm-framework-ideal-conditional-measurement,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    thm-continuous-functional-calculus-for-bounded-self-adjoint-operators,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-non-negative-and-positive-operator: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-projection-valued-measure: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-local-pvm-tensor-extension: mathematical-premise
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  thm-continuous-functional-calculus-for-bounded-self-adjoint-operators: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared reading of the composition clause of P1 for two
  distinguishable subsystems of the non-relativistic massive-matter sector: the
  composite's assigned Hilbert space as the completed tensor product, the
  product basis convention, and the local readouts, local effects and local
  instruments of one factor alone. The definition asserts no interaction, no
  dynamics, no statistics or exchange sector, no disturbance of the other
  factor, no apparatus realization and no empirical fact; in particular the
  composition of identical or indistinguishable species, superselection
  restrictions and any algebraic replacement of the tensor product are separate
  model assumptions, not part of this reading."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1,
        printed pages 105-111 (PDF pages 113-119): composite systems, the tensor
        product of two state spaces and operators acting on one factor alone"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8
        'Multiparticle States and Tensor Products', Section 1, chapter pages
        1-7: two-particle state spaces, the tensor product, and operators acting
        on a single factor"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba\
        2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
verification:
  precheck: n/a
---
## Definition

Adopt the state and composition postulate (P1), the observable and probability
postulate (P2) and the ideal conditional-measurement postulate (P3) of the
framework ([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-ideal-conditional-measurement]]), and assume the Axiom
of Countable Choice and the Axiom of Choice, the choice hypotheses of the cited
mathematical suppliers ([[def-countable-choice]], [[def-axiom-of-choice]]).
The following vocabulary is used by this page for a declared pair of
distinguishable subsystems.

**(a) Declared composite and its state space.** A **declared composite model**
is the assignment of two declared systems $A$ and $B$ of the massive-matter
sector, their assigned nonzero separable complex Hilbert spaces $H$ and $K$
([[post-nrqm-framework-state-and-composition]] clauses (i) and (iv),
[[def-hilbert-space]]), and the **composite assigned space**
$$H\widehat\otimes K,$$
the completed Hilbert tensor product of $H$ and $K$ with inclusion $\kappa$
([[lem-nrqm-composites-hilbert-tensor-construction]], clause (iv) of P1). The
**state space of the declared composite** is $D(H\widehat\otimes K)$, the set of
density operators on $H\widehat\otimes K$
([[def-nrqm-state-geometry-framework-state-space]]). A **preparation of the
composite** is an element of this set; the model's assignment of a state to a
preparation is the assignment of clause (iii) of P1, not a consequence of this
definition.

**(b) Product basis convention.** If $(e_{a})_{a\in\mathbf A}$ is a finite or
countable orthonormal basis of $H$ and $(f_{b})_{b\in\mathbf B}$ one of $K$,
then $(\kappa(e_{a}\otimes f_{b}))_{(a,b)\in\mathbf A\times\mathbf B}$ is an
orthonormal basis of $H\widehat\otimes K$
([[lem-nrqm-composites-hilbert-tensor-construction]] clause (d)); every
$\Psi\in H\widehat\otimes K$ has the expansion
$$\Psi=\sum_{a,b}c_{ab}\,\kappa(e_{a}\otimes f_{b}),\qquad c_{ab}\in\mathbb C,$$
converging in norm. A **product vector** is $\kappa(u\otimes v)$ for
$u\in H$, $v\in K$, and a **product preparation** is a state of the form
$T_{\Psi,\Psi}$ with $\Psi=\kappa(u\otimes v)$, $\|u\|=\|v\|=1$
([[lem-nrqm-composites-hilbert-tensor-construction]]). General composite
preparations are linear superpositions and mixtures of product preparations
and need not factor; this is clause (iv) of P1.

**(c) Local readout of an assigned sharp observable.** Let $(A,u_{A})$ be an
assigned sharp observable of subsystem $A$ with spectral projection valued
measure $E_{A}$ on the Borel $\sigma$-algebra of $\mathbb R$
([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a),
(b), the spectral measure being regular by
[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]). Define
$$F_{A}(B):=E_{A}(B)\otimes I_{K}\qquad(B\subseteq\mathbb R\ \text{Borel}) .$$
By [[lem-nrqm-composites-local-pvm-tensor-extension]] clauses (a) and (d),
$F_{A}$ is a regular projection valued measure on the Borel $\sigma$-algebra
of $\mathbb R$ acting on $H\widehat\otimes K$
([[def-projection-valued-measure]]). Its integral
$A^{\mathrm{loc}}:=\int\lambda\,dF_{A}$ with domain
$\{\Psi:\int\lambda^{2}\,dF_{A,\Psi}(\lambda)<\infty\}$ is self-adjoint with
spectral projection valued measure $F_{A}$ by the converse direction of
[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]. The pair
$$(A^{\mathrm{loc}},u_{A})$$
is therefore an assigned sharp observable of the composite
([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a)); it
is the **local readout of $(A,u_{A})$ on the declared composite**, and the unit
$u_{A}$ is read as before ([[def-nrqm-framework-quantities-and-units]]). Its
outcome law in a preparation $\rho\in D(H\widehat\otimes K)$ is
$$\mu^{A^{\mathrm{loc}}}_{\rho}(B)=\operatorname{tr}\bigl(\rho\,(E_{A}(B)\otimes I_{K})\bigr) .$$
The analogous construction with the roles of $A$ and $B$ exchanged gives the
local readout of an assigned sharp observable of $B$.

**(d) Local effects.** A **local effect** of subsystem $A$ is a bounded
operator of the form $F\otimes I_{K}$ with $0\le F\le I_{H}$ in the
quadratic-form order; the map $F\mapsto F\otimes I_{K}$ is well defined by
[[lem-nrqm-composites-bounded-tensor-maps]] clause (a), and $F\otimes I_{K}$
is an effect on $H\widehat\otimes K$: it is bounded, self-adjoint
$((F\otimes I)^{*}=F^{*}\otimes I=F\otimes I)$, and it factors as
$$F\otimes I_{K}=\bigl(F^{1/2}\otimes I_{K}\bigr)^{*}\bigl(F^{1/2}\otimes I_{K}\bigr),\qquad I_{H}\otimes I_{K}-F\otimes I_{K}=\bigl((I-F)^{1/2}\otimes I_{K}\bigr)^{*}\bigl((I-F)^{1/2}\otimes I_{K}\bigr),$$
with the positive square roots of the continuous functional calculus
([[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]]) and
the product and adjoint rules of
[[lem-nrqm-composites-bounded-tensor-maps]] clauses (b), (c); hence
$0\le F\otimes I_{K}\le I_{H}\otimes I_{K}$ in the quadratic-form order
([[def-non-negative-and-positive-operator]], [[def-bounded-linear-operator]]).
Local effects of subsystem $B$ are defined in the same way.

**(e) Local instruments.** Let $(M_{a,r})_{\substack{a\in A\\r\in R_{a}}}$ be a
declared finite or countable instrument of subsystem $A$ with Kraus family as
in [[def-nrqm-measurement-framework-declared-measurements-and-instruments]]
clause (d), normalized in the strong sense
$\sum_{a,r}M_{a,r}^{*}M_{a,r}=I_{H}$. The **local extension** of the instrument
to the declared composite is the family
$$\bigl(M_{a,r}\otimes I_{K}\bigr)_{\substack{a\in A\\r\in R_{a}}}$$
together with the outcome effects $\sum_{r}(M_{a,r}\otimes I_{K})^{*}(M_{a,r}\otimes I_{K})=\bigl(\sum_{r}M_{a,r}^{*}M_{a,r}\bigr)\otimes I_{K}$
and the conditional updates
$$\rho\longmapsto\frac{1}{p_{a}}\sum_{r}(M_{a,r}\otimes I_{K})\,\rho\,(M_{a,r}\otimes I_{K})^{*},\qquad p_{a}=\operatorname{tr}\bigl(\rho\,F_{a}^{\mathrm{loc}}\bigr).$$
It is normalized: every finite partial sum of
$\sum_{a,r}(M_{a,r}\otimes I_{K})^{*}(M_{a,r}\otimes I_{K})$ equals
$\bigl(\sum_{a\le N,r\le R}M_{a,r}^{*}M_{a,r}\bigr)\otimes I_{K}$ by linearity
of tensoring with $I_{K}$, the finite partial sums
$\sum_{a\le N,r\le R}M_{a,r}^{*}M_{a,r}$ are uniformly bounded by $I_{H}$ and
converge strongly to $I_{H}$, so clause (c) of
[[lem-nrqm-composites-local-pvm-tensor-extension]] gives strong convergence of
the extended partial sums to $I_{H}\otimes I_{K}$; hence the local extension is
a declared finite or countable instrument of the composite in the sense of
clause (d) of
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]. The
same construction applies with the roles of $A$ and $B$ exchanged.

**(f) Scope.** Clauses (a)-(e) fix the reading of clause (iv) of P1 together
with clauses (i), (ii) and (iv) of P2 and clause (v) of P3 for a declared pair
of distinguishable subsystems. They add no physical assumption to those
postulates beyond the readings displayed. In particular: the subsystems are
distinguishable, so no exchange sector, symmetrization or exclusion statement
is introduced (those are separate assumptions of P6); no superselection
restriction or algebraic replacement of the tensor product is adopted; no
interaction, dynamics, disturbance of the other subsystem or correlation is
asserted; and whether a concrete laboratory arrangement realizes a declared
composite, a declared local readout or a declared local instrument is a tested
identification with uncertainty under P7, not a consequence of this
definition.

## Remarks

- **Countable instrument normalization.** In clause (e), write
  $\mathcal I=\{(a,r):a\in A,\ r\in R_a\}$ for the finite or countable
  Kraus index set of the declared instrument and enumerate it. For each
  fixed outcome $a$, enumerate its finite or countable fiber $R_a$ and let
  $S_{a,N}$ be the sum of $M_{a,r}^{*}M_{a,r}$ over its first $N$ indices.
  The declared instrument definition says these partial sums converge
  strongly to $F_a$; they are positive contractions because they are
  sub-sums of the positive normalized total family. For every finite partial
  sum the bounded tensor calculus gives
  $\sum_{r\le N}(M_{a,r}\otimes I_K)^{*}(M_{a,r}\otimes I_K)
  =S_{a,N}\otimes I_K$. Applying clause (c) of
  [[lem-nrqm-composites-local-pvm-tensor-extension]] to
  $S_{a,N}\to F_a$ proves strong convergence of these outcome effects to
  $F_a\otimes I_K$. Applying the same clause to the enumerated total partial
  sums proves that the full extended family has strong sum
  $I_H\otimes I_K$. This verifies both the per-outcome identity and the
  normalization asserted in clause (e).

- **Why the local readout is constructed through the spectral measure.** The
  composite operator $A\otimes I_{K}$ for an unbounded assigned observable $A$
  is not defined by this page directly; the local readout is defined through
  its spectral projection valued measure $E_{A}(\cdot)\otimes I_{K}$, whose
  regularity is supplied by
  [[lem-nrqm-composites-local-pvm-tensor-extension]] clause (d). For a
  bounded $A$, the local readout coincides with the bounded operator
  $A\otimes I_K$ of [[lem-nrqm-composites-bounded-tensor-maps]] clause (a).
  Choose $R>\|A\|$ and the bounded Borel function
  $g_R(\lambda)=\max(-R,\min(\lambda,R))$. The spectral measure $E_A$ is
  supported in $\sigma(A)\subset[-\|A\|,\|A\|]$, and
  $F_A=E_A(\cdot)\otimes I_K$ has the same support. Thus $g_R(\lambda)$
  agrees with $\lambda$ on both spectral supports. The bounded spectral
  calculus and the unbounded spectral theorem identify
  $\Phi_{E_A}(g_R)=A$ and
  $\int\lambda\,dF_A=\Phi_{F_A}(g_R)$. Clause (b) of
  [[lem-nrqm-composites-local-pvm-tensor-extension]] now gives
  $\Phi_{F_A}(g_R)=\Phi_{E_A}(g_R)\otimes I_K=A\otimes I_K$.
- **Choice hypotheses.** The tensor construction uses Countable Choice; the
  spectral measure of an assigned sharp observable and its converse use the
  Axiom of Choice. Both are carried as stated and are inherited by the results
  of this page that invoke the local readout.
