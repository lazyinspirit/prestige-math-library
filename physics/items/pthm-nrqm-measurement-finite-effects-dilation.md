---
id: pthm-nrqm-measurement-finite-effects-dilation
aliases: [ nrqm-measurement-finite-effects-dilation ]
kind: physics-theorem
domain: physics
title: "A declared finite effect family is realised by a dilated ideal
  projective measurement"
status: draft
origin: pipeline
dependency_level: 12
deps:
  [
    def-axiom-of-choice,
    def-bounded-linear-operator,
    def-countable-choice,
    def-hilbert-orthogonal-projection,
    def-non-negative-and-positive-operator,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-composites-bounded-tensor-maps,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-nrqm-composites-finite-effects-and-instruments,
    lem-nrqm-composites-finite-naimark-compression,
    lem-nrqm-composites-hilbert-tensor-construction,
    lem-nrqm-composites-rank-one-operator-calculus,
    lem-nrqm-composites-separable-partial-trace,
    lem-nrqm-measurement-selective-luders-update,
    post-nrqm-framework-ideal-conditional-measurement,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-measurement-instrument-updates-not-determined-by-effects,
    thm-continuous-functional-calculus-for-bounded-self-adjoint-operators
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-non-negative-and-positive-operator: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-finite-effects-and-instruments: mathematical-premise
  lem-nrqm-composites-finite-naimark-compression: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  lem-nrqm-measurement-selective-luders-update: mathematical-premise
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  pthm-nrqm-measurement-instrument-updates-not-determined-by-effects: physical-result
  thm-continuous-functional-calculus-for-bounded-self-adjoint-operators: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional model statement: a declared finite family of
  bounded effects on a system is realised as the outcome probabilities of a
  declared ideal sharp measurement on an enlarged model space carrying a finite
  ancilla register, and the induced conditional reduced states are given
  explicitly. The construction is an idealisation within the declared composite
  model space; it asserts no physical apparatus, no physical ancilla and no
  preferred outcome."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter
        3 'Foundations II: Measurement and Evolution' (updated July 2015),
        Section 3.1.2, printed pages 9-11 (realising a POVM by entangling the
        system with a pointer and measuring the pointer; eqs. (3.23)-(3.31))"
      url: "https://preskill.caltech.edu/ph219/chap3_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.4,
        printed page 15 (ideal reproducible measurements and the state they
        leave), with the density-operator trace rule of Section 6.3, printed
        pages 121-124"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state postulate P1, the observable and probability postulate P2 and the ideal conditional-measurement postulate P3 ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[post-nrqm-framework-ideal-conditional-measurement]]), and assume the Axiom of Countable Choice and the Axiom of Choice. Let $H$ be the nonzero complex Hilbert space assigned to a declared system, and let $(F_{a})_{a=1}^{n}$ be a declared finite family of effects on $H$: bounded operators with $0\le F_{a}\le I$ and $\sum_{a}F_{a}=I$ ([[def-non-negative-and-positive-operator]], clause (iv) of P2). Let $C=\mathbb C^{n}$ with orthonormal basis $(e_{a})_{a=1}^{n}$, form the completed tensor product $H\widehat\otimes C$ ([[lem-nrqm-composites-hilbert-tensor-construction]]), and define
$$W:H\to H\widehat\otimes C,\qquad W\psi:=\sum_{a=1}^{n}F_{a}^{1/2}\psi\otimes e_{a},\qquad P_{a}:=I_{H}\otimes T_{e_{a},e_{a}},$$
where $F_{a}^{1/2}$ is the positive square root supplied by the continuous functional calculus ([[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]]) and $T_{x,x}$ is the rank-one projection of [[lem-nrqm-composites-rank-one-operator-calculus]]. Then:

**(a) The dilation.** $W$ is a linear isometry, the operators $P_{a}$ are pairwise orthogonal orthogonal projections on $H\widehat\otimes C$ with strong sum $I$, and $W^{*}P_{a}W=F_{a}$ for every $a$ ([[lem-nrqm-composites-finite-naimark-compression]]).

**(b) Realised outcome probabilities.** For every state $\rho$ on $H$ the operator $\widetilde\rho:=W\rho W^{*}$ is a state on $H\widehat\otimes C$, and the declared ideal sharp measurement $(P_{a})_{a=1}^{n}$ on the composite model space has outcome probabilities
$$\operatorname{tr}\bigl(\widetilde\rho\,P_{a}\bigr)=\operatorname{tr}(\rho F_{a})\qquad(a=1,\dots,n).$$

**(c) The induced instrument.** Let $\Lambda$ be the trace-preserving map $\Lambda(\sigma)=\sum_{b=1}^{n}F_{b}^{1/2}\sigma F_{b}^{1/2}$ (the square-root Kraus map of the effect family). If $p_{a}:=\operatorname{tr}(\rho F_{a})>0$, the conditional composite state after the outcome $a$ is $\widetilde\rho_{a}=P_{a}\widetilde\rho P_{a}/p_{a}$, and its reduction to $H$ is the state
$$\operatorname{Tr}_{C}\widetilde\rho_{a}=\frac{1}{p_{a}}\,\Lambda\bigl(F_{a}^{1/2}\rho F_{a}^{1/2}\bigr)=\frac{1}{p_{a}}\sum_{b=1}^{n}F_{b}^{1/2}F_{a}^{1/2}\rho F_{a}^{1/2}F_{b}^{1/2};$$
the non-selective composite state reduces to $\operatorname{Tr}_{C}\sum_{a}P_{a}\widetilde\rho P_{a}=\sum_{b}F_{b}^{1/2}\bigl(\sum_{a}F_{a}^{1/2}\rho F_{a}^{1/2}\bigr)F_{b}^{1/2}=\Lambda^{2}(\rho)$. The instrument that the dilated measurement induces on $H$ is therefore the declared instrument with Kraus family $\bigl(F_{b}^{1/2}F_{a}^{1/2}\bigr)_{a,b}$ and effects $F_{a}$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (d)).

**(d) Projective case and non-determination.** If the effects are pairwise orthogonal projections, $F_{a}=P_{a}^{\circ}$ with $P_{a}^{\circ}P_{b}^{\circ}=0$ for $a\ne b$, then the induced update of clause (c) is the Lueders update $P_{a}^{\circ}\rho P_{a}^{\circ}/p_{a}$. In general the induced update of clause (c) differs from the square-root Kraus update $F_{a}^{1/2}\rho F_{a}^{1/2}/p_{a}$ of the same effects: for $H=\mathbb C^{2}$ with orthonormal basis $(e_{1},e_{2})$, $F_{1}=\operatorname{diag}(3/4,1/4)$, $F_{2}=I-F_{1}$, $\rho=T_{w,w}$ with $w=(e_{1}+e_{2})/\sqrt2$ and $p_{1}=1/2$, the two conditional states have matrices
$$\frac{1}{p_{1}}\Lambda\bigl(F_{1}^{1/2}\rho F_{1}^{1/2}\bigr)=\begin{pmatrix}3/4&3/8\\3/8&1/4\end{pmatrix},\qquad \frac{1}{p_{1}}F_{1}^{1/2}\rho F_{1}^{1/2}=\begin{pmatrix}3/4&\sqrt3/4\\ \sqrt3/4&1/4\end{pmatrix}.$$
Thus the same effect family is compatible with more than one update, in agreement with [[pthm-nrqm-measurement-instrument-updates-not-determined-by-effects]].

**(e) Scope.** The ancilla register $C$ and the isometry $W$ are mathematical objects of a declared composite model space; the theorem asserts no physical ancilla, no physical realisation of the dilated projective measurement and no preferred outcome. Whether a laboratory device realises the declared effects or either update is a tested identification with uncertainty under P7.

## Facts & Assumptions

**Given:** The adopted postulates P1, P2, P3; a nonzero complex Hilbert space $H$; a declared finite effect family $(F_{a})_{a=1}^{n}$ with $\sum_{a}F_{a}=I$; the ancilla $C=\mathbb C^{n}$ with orthonormal basis $(e_{a})$; the isometry $W$ and projections $P_{a}$ of the Statement; a state $\rho$ on $H$.

[F1] **Finite Naimark compression.** $W\psi=\sum_{a}F_{a}^{1/2}\psi\otimes e_{a}$ is a linear isometry, the operators $P_{a}=I_{H}\otimes T_{e_{a},e_{a}}$ are pairwise orthogonal orthogonal projections with $\sum_{a}P_{a}=I$, and $W^{*}P_{a}W=F_{a}$ ([[lem-nrqm-composites-finite-naimark-compression]]; [[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]] for the square roots).

[F2] **Tensor and partial-trace rules.** On $H\widehat\otimes C$ the pairing is $\langle u\otimes c,u'\otimes c'\rangle=\langle u,u'\rangle\langle c,c'\rangle$, bounded operators act as $S\otimes T$ with $(S\otimes T)^{*}=S^{*}\otimes T^{*}$, and the partial trace $\operatorname{Tr}_{C}$ is the trace-preserving positive linear map with $\operatorname{Tr}_{C}(S\otimes T_{c,c'})=\langle c',c\rangle S$ ([[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-bounded-tensor-maps]], [[lem-nrqm-composites-separable-partial-trace]]); in particular $\operatorname{Tr}_{C}(WXW^{*})=\sum_{b}F_{b}^{1/2}XF_{b}^{1/2}$ for trace-class $X$, because $(I\otimes\langle e_{b}|)W=F_{b}^{1/2}$ and $W^{*}(I\otimes|e_{b}\rangle)=F_{b}^{1/2}$.

[F3] **States and effects.** A density operator is a self-adjoint positive trace-class operator of trace one; for effects $0\le F_{a}\le I$ with $\sum_{a}F_{a}=I$ one has $p_{a}=\operatorname{tr}(\rho F_{a})\in[0,1]$ and $\sum_{a}p_{a}=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a), the general-H trace-norm normalization calculation preceding clause (iv) of [[post-nrqm-framework-observable-and-probability]]).

[F4] **Declared instrument.** A normalized Kraus family $(M_{a,b})$ with $\sum_{a,b}M_{a,b}^{*}M_{a,b}=I$ declares an instrument with effects $F_{a}=\sum_{b}M_{a,b}^{*}M_{a,b}$, outcome probabilities $\operatorname{tr}(\rho F_{a})$ and conditional updates $\rho\mapsto p_{a}^{-1}\sum_{b}M_{a,b}\rho M_{a,b}^{*}$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (d)).

[F5] **Projective Lueders case.** If the effects are pairwise orthogonal projections, the update $F_{a}^{1/2}\rho F_{a}^{1/2}/p_{a}$ equals the Lueders update $F_{a}\rho F_{a}/p_{a}$ because $F_{a}^{1/2}=F_{a}$ for a projection ([[lem-nrqm-measurement-selective-luders-update]], [[def-hilbert-orthogonal-projection]]).

## Proof

1.1 [Clause (a)] The isometry, the projection family and the compression identity $W^{*}P_{a}W=F_{a}$ are exactly the conclusions of [F1] under the present hypotheses (bounded effects, $\sum_{a}F_{a}=I$, finite ancilla). This is (a). [given, F1, algebra]

2.1 [The dilated state and the outcome probabilities] Since $W$ is an isometry, $W^{*}W=I_{H}$ and $\operatorname{tr}(W\rho W^{*})=\operatorname{tr}(\rho W^{*}W)=\operatorname{tr}\rho=1$; $W\rho W^{*}$ is positive because $\rho$ is positive and $W$ is linear, and it is trace class as a product of bounded and trace-class factors [F2]; hence $\widetilde\rho$ is a state [F3]. For each $a$, $\operatorname{tr}(\widetilde\rho P_{a})=\operatorname{tr}(W\rho W^{*}P_{a})=\operatorname{tr}(\rho W^{*}P_{a}W)=\operatorname{tr}(\rho F_{a})$ by [F1] and cyclicity of the trace. This is (b). [step 1.1, given, F1, F2, F3, algebra]

3.1 [The induced conditional state] Assume $p_{a}>0$. The conditional composite state is $\widetilde\rho_{a}=P_{a}\widetilde\rho P_{a}/p_{a}$ by [F4] (with the projections $P_{a}$ as the Kraus family of the composite measurement). Since $P_{a}W=WF_{a}^{1/2}$ by $P_{a}W\psi=(I\otimes T_{e_{a},e_{a}})\sum_{b}F_{b}^{1/2}\psi\otimes e_{b}=F_{a}^{1/2}\psi\otimes e_{a}=WF_{a}^{1/2}\psi$ [F1], one has $P_{a}\widetilde\rho P_{a}=WF_{a}^{1/2}\rho F_{a}^{1/2}W^{*}$, and applying the partial-trace rule of [F2] to $X=F_{a}^{1/2}\rho F_{a}^{1/2}$ gives $\operatorname{Tr}_{C}\widetilde\rho_{a}=\frac{1}{p_{a}}\sum_{b}F_{b}^{1/2}F_{a}^{1/2}\rho F_{a}^{1/2}F_{b}^{1/2}=\Lambda\bigl(F_{a}^{1/2}\rho F_{a}^{1/2}\bigr)/p_{a}$; this is a state because it is the partial trace of the state $\widetilde\rho_{a}$ [F2, F3]. For the non-selective map, $\sum_{a}P_{a}\widetilde\rho P_{a}=W\bigl(\sum_{a}F_{a}^{1/2}\rho F_{a}^{1/2}\bigr)W^{*}$ and another application of the partial-trace rule gives $\sum_{b}F_{b}^{1/2}\bigl(\sum_{a}F_{a}^{1/2}\rho F_{a}^{1/2}\bigr)F_{b}^{1/2}=\Lambda^{2}(\rho)$. The resulting instrument on $H$ has Kraus family $M_{a,b}:=F_{b}^{1/2}F_{a}^{1/2}$: indeed $\sum_{a,b}M_{a,b}^{*}M_{a,b}=\sum_{a,b}F_{a}^{1/2}F_{b}F_{a}^{1/2}=\sum_{a}F_{a}^{1/2}F_{a}^{1/2}=I$, its $a$-th effect is $\sum_{b}F_{a}^{1/2}F_{b}F_{a}^{1/2}=F_{a}$, and its update is the displayed expression, in agreement with [F4]. This is (c). [step 2.1, F1, F2, F3, F4, algebra]

4.1 [Projective case] If $F_{a}=P_{a}^{\circ}$ is a projection, then $F_{a}^{1/2}=F_{a}$ and $F_{b}^{1/2}F_{a}^{1/2}=P_{b}^{\circ}P_{a}^{\circ}=\delta_{ab}P_{a}^{\circ}$ for the pairwise orthogonal family; hence the induced update of step 3.1 reduces to $P_{a}^{\circ}\rho P_{a}^{\circ}/p_{a}$, the Lueders update [F5]. [step 3.1, given, F5, algebra]

4.2 [Explicit non-coincidence of the two updates] Take $H=\mathbb C^{2}$ with orthonormal basis $(e_{1},e_{2})$, $F_{1}=\operatorname{diag}(3/4,1/4)$, $F_{2}=I-F_{1}=\operatorname{diag}(1/4,3/4)$ and $\rho=T_{w,w}$ with $w=(e_{1}+e_{2})/\sqrt2$; then $p_{1}=\operatorname{tr}(\rho F_{1})=\tfrac12$ and, writing $a=\sqrt3/2$ and $b=1/2$ for the diagonal entries of $F_{1}^{1/2}=\operatorname{diag}(a,b)$ and $F_{2}^{1/2}=\operatorname{diag}(b,a)$, a direct matrix computation gives $F_{1}^{1/2}\rho F_{1}^{1/2}=\tfrac12\begin{pmatrix}3/4&\sqrt3/4\\ \sqrt3/4&1/4\end{pmatrix}$ and $\Lambda\bigl(F_{1}^{1/2}\rho F_{1}^{1/2}\bigr)=\tfrac12\begin{pmatrix}3/4&3/8\\3/8&1/4\end{pmatrix}$; after division by $p_{1}=1/2$ the induced conditional state of step 3.1 is $\begin{pmatrix}3/4&3/8\\3/8&1/4\end{pmatrix}$ while the square-root Kraus update is $\begin{pmatrix}3/4&\sqrt3/4\\ \sqrt3/4&1/4\end{pmatrix}$, which are distinct because $3/8\ne\sqrt3/4$ and both are unit-trace positive semidefinite matrices, the second of rank one. Hence the effects $F_{1},F_{2}$ do not determine the update, in agreement with [[pthm-nrqm-measurement-instrument-updates-not-determined-by-effects]]. This is (d). [step 3.1, given, F4, F5, algebra]

5.1 [Scope] The preceding steps were carried out entirely in the declared composite model space $H\widehat\otimes C$ with the mathematical ancilla $C$; no physical ancilla, apparatus or outcome selection was used. This is (e). [step 4.2, given, F1, F2, algebra] ∎
