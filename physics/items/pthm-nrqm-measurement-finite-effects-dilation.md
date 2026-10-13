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
    def-spectrum-and-resolvent-of-a-bounded-operator,
    def-hilbert-space-adjoint,
    def-hilbert-orthogonal-projection,
    def-self-adjoint-positive-unitary-and-normal-operator,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-composites-bounded-tensor-maps,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-nrqm-composites-hilbert-tensor-construction,
    lem-nrqm-composites-nuclear-bounded-cyclicity,
    lem-nrqm-composites-rank-one-operator-calculus,
    lem-nrqm-composites-separable-partial-trace,
    lem-nrqm-measurement-selective-luders-update,
    lem-spectrum-of-a-self-adjoint-operator-is-real,
    post-nrqm-framework-ideal-conditional-measurement,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-preparation-and-apparatus,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-measurement-instrument-updates-not-determined-by-effects,
    thm-continuous-functional-calculus-for-bounded-self-adjoint-operators,
    thm-trace-class-is-a-two-sided-banach-operator-ideal,
    thm-hilbert-adjoint-properties
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-spectrum-and-resolvent-of-a-bounded-operator: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  lem-nrqm-measurement-selective-luders-update: mathematical-premise
  lem-spectrum-of-a-self-adjoint-operator-is-real: mathematical-premise
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: formulation-prerequisite
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  pthm-nrqm-measurement-instrument-updates-not-determined-by-effects: physical-result
  thm-continuous-functional-calculus-for-bounded-self-adjoint-operators: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
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
        Section 4.1.2, printed pages 9-11 (realising a POVM by entangling the
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

Adopt the state postulate P1, the observable and probability postulate P2 and the ideal conditional-measurement postulate P3 ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[post-nrqm-framework-ideal-conditional-measurement]]), and assume the Axiom of Countable Choice and the Axiom of Choice. Let $H$ be the nonzero complex Hilbert space assigned to a declared system, and let $(F_{a})_{a=1}^{n}$ be a declared finite family of effects on $H$ in the general-H sense of [[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (d): each $F_a$ is bounded and self-adjoint, $0\le\langle F_ax,x\rangle\le\|x\|^{2}$ for every $x\in H$, and $\sum_{a}F_{a}=I$. The outcome probabilities are those of clause (iv) of P2. Let $C=\mathbb C^{n}$ with orthonormal basis $(e_{a})_{a=1}^{n}$, form the completed tensor product $H\widehat\otimes C$ ([[lem-nrqm-composites-hilbert-tensor-construction]]), and define
$$W:H\to H\widehat\otimes C,\qquad W\psi:=\sum_{a=1}^{n}F_{a}^{1/2}\psi\otimes e_{a},\qquad P_{a}:=I_{H}\otimes T_{e_{a},e_{a}},$$
where $F_{a}^{1/2}$ is the positive square root supplied by the continuous functional calculus ([[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]]) and $T_{x,x}$ is the rank-one projection of [[lem-nrqm-composites-rank-one-operator-calculus]]. Then:

**(a) The dilation.** $W$ is a linear isometry, the operators $P_{a}$ are pairwise orthogonal orthogonal projections on $H\widehat\otimes C$ with strong sum $I$, and $W^{*}P_{a}W=F_{a}$ for every $a$.

**(b) Realised outcome probabilities.** For every state $\rho$ on $H$ the operator $\widetilde\rho:=W\rho W^{*}$ is a state on $H\widehat\otimes C$, and the declared ideal sharp measurement $(P_{a})_{a=1}^{n}$ on the composite model space has outcome probabilities
$$\operatorname{tr}\bigl(\widetilde\rho\,P_{a}\bigr)=\operatorname{tr}(\rho F_{a})\qquad(a=1,\dots,n).$$

**(c) The induced instrument.** Let $\Lambda$ be the trace-preserving map $\Lambda(\sigma)=\sum_{b=1}^{n}F_{b}^{1/2}\sigma F_{b}^{1/2}$ (the square-root Kraus map of the effect family). If $p_{a}:=\operatorname{tr}(\rho F_{a})>0$, the conditional composite state after the outcome $a$ is $\widetilde\rho_{a}=P_{a}\widetilde\rho P_{a}/p_{a}$, and its reduction to $H$ is the state
$$\operatorname{Tr}_{C}\widetilde\rho_{a}=\frac{1}{p_{a}}F_{a}^{1/2}\rho F_{a}^{1/2}.$$
The non-selective composite state reduces to $\operatorname{Tr}_{C}\sum_{a}P_{a}\widetilde\rho P_{a}=\sum_{a}F_{a}^{1/2}\rho F_{a}^{1/2}=\Lambda(\rho)$. Thus this dilation induces on $H$ the declared square-root instrument with one Kraus operator $M_{a}=F_{a}^{1/2}$ for each outcome $a$ and effects $F_{a}$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (d)).

**(d) Projective case and scope of the update.** If the effects are pairwise orthogonal projections, $F_{a}=P_{a}^{\circ}$ with $P_{a}^{\circ}P_{b}^{\circ}=0$ for $a\ne b$, then the induced update of clause (c) is the Lueders update $P_{a}^{\circ}\rho P_{a}^{\circ}/p_{a}$. For general effects, clause (c) identifies the update selected by this particular dilation; the effects alone do not determine the update among all declared instruments, as shown by [[pthm-nrqm-measurement-instrument-updates-not-determined-by-effects]].

**(e) Scope.** The ancilla register $C$ and the isometry $W$ are mathematical objects of a declared composite model space; the theorem asserts no physical ancilla, no physical realisation of the dilated projective measurement and no preferred outcome. Whether a laboratory device realises the declared effects or either update is a tested identification with uncertainty under P7.

## Facts & Assumptions

**Given:** The adopted postulates P1, P2, P3; a nonzero complex Hilbert space $H$; a declared finite effect family $(F_{a})_{a=1}^{n}$ with $\sum_{a}F_{a}=I$; the ancilla $C=\mathbb C^{n}$ with orthonormal basis $(e_{a})$; the isometry $W$ and projections $P_{a}$ of the Statement; a state $\rho$ on $H$.

[F1] **Functional calculus, tensor maps and adjoints.** The spectrum $\sigma(F)$ consists of those $z\in\mathbb C$ for which $F-zI$ has no bounded inverse ([[def-spectrum-and-resolvent-of-a-bounded-operator]]); for bounded self-adjoint $F$ it is real ([[lem-spectrum-of-a-self-adjoint-operator-is-real]]). Under AC the continuous functional calculus is an isometric unital star-homomorphism $f\mapsto f(F)$ on the continuous complex functions $C(\sigma(F))$ with the supremum norm, sends the coordinate function to $F$, and has range $C^*(I,F)$, the operator-norm closure of polynomials in $F$ ([[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]]). The positive square root used here is justified in step 1.1. The completed tensor product has $\langle u\otimes c,u'\otimes c'\rangle=\langle u,u'\rangle\langle c,c'\rangle$, and bounded tensor maps act on elementary tensors by $(S\otimes T)(u\otimes c)=Su\otimes Tc$ ([[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-bounded-tensor-maps]]). Every bounded map between Hilbert spaces has a unique bounded Hilbert adjoint satisfying $\langle Tx,y\rangle=\langle x,T^{*}y\rangle$ ([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]). The rank-one formula gives $T_{e_a,e_a}\xi=\langle\xi,e_a\rangle e_a$ ([[lem-nrqm-composites-rank-one-operator-calculus]]).

[F2] **Tensor, trace-ideal and partial-trace rules.** On $H\widehat\otimes C$ the pairing is $\langle u\otimes c,u'\otimes c'\rangle=\langle u,u'\rangle\langle c,c'\rangle$, bounded tensor maps preserve the tensor inner product rules, and $\operatorname{Tr}_{C}$ is the trace-preserving positive linear map with $\operatorname{Tr}_{C}(S\otimes T_{c,c'})=\langle c,c'\rangle S$ ([[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-bounded-tensor-maps]], [[lem-nrqm-composites-separable-partial-trace]]). If $X$ is trace class and $A,B$ are bounded, then $AXB$ is trace class and the trace pairing with bounded operators is trace-norm continuous; for trace-class $X$ and bounded $A$, $\operatorname{tr}(AX)=\operatorname{tr}(XA)$ ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[lem-nrqm-composites-nuclear-bounded-cyclicity]]). In particular, $\operatorname{Tr}_{C}(WXW^{*})=\sum_{b}F_{b}^{1/2}XF_{b}^{1/2}$ for trace-class $X$, since $(I\otimes\langle e_{b}|)W=F_{b}^{1/2}$ and $W^{*}(I\otimes|e_{b}\rangle)=F_{b}^{1/2}$.

[F3] **Density expansions and effects.** A state has a trace-norm expansion $\rho=\sum_n w_nT_{u_n,u_n}$ with $(u_n)$ orthonormal, $w_n\ge0$ and $\sum_nw_n=1$. For effects $0\le F_a\le I$ with $\sum_aF_a=I$, the general-H normalization calculation gives $\operatorname{tr}(\rho F_a)\in[0,1]$ and $\sum_a\operatorname{tr}(\rho F_a)=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a), clause (iv) of [[post-nrqm-framework-observable-and-probability]]).

[F4] **Declared instrument.** A normalized Kraus family $(M_{a,b})$ with $\sum_{a,b}M_{a,b}^{*}M_{a,b}=I$ declares an instrument with effects $F_{a}=\sum_{b}M_{a,b}^{*}M_{a,b}$, outcome probabilities $\operatorname{tr}(\rho F_{a})$ and conditional updates $\rho\mapsto p_{a}^{-1}\sum_{b}M_{a,b}\rho M_{a,b}^{*}$ only when $p_a>0$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (d)).

[F5] **Projective Lueders case.** If the effects are pairwise orthogonal projections, the update $F_{a}^{1/2}\rho F_{a}^{1/2}/p_{a}$ equals the Lueders update $F_{a}\rho F_{a}/p_{a}$ because $F_{a}^{1/2}=F_{a}$ for a projection ([[lem-nrqm-measurement-selective-luders-update]], [[def-hilbert-orthogonal-projection]]).

[F6] **Non-determination by effects.** There are two normalized declared instruments with the same effects and different conditional updates ([[pthm-nrqm-measurement-instrument-updates-not-determined-by-effects]] clauses (a)-(b)).

[F7] **Trace pairing.** For every trace-class $X$ on a Hilbert space and bounded $A$, $\operatorname{tr}(AX)=\operatorname{tr}(XA)$, and the pairing is continuous in trace norm ([[lem-nrqm-composites-nuclear-bounded-cyclicity]] clause (b)).

[F8] **Rank-one trace formula.** For $u\in H$, $T_{u,u}$ is trace class, self-adjoint and positive because $T_{u,u}^{*}=T_{u,u}$ and $\langle T_{u,u}x,x\rangle=|\langle x,u\rangle|^{2}\ge0$; also $\operatorname{tr}(T_{u,u}B)=\operatorname{tr}(BT_{u,u})=\langle Bu,u\rangle$ for bounded $B$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (b)-(d), [[lem-nrqm-composites-nuclear-bounded-cyclicity]] clause (b), [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[F9] **Apparatus identification.** P7(iii) requires physical identifications of preparations, dynamics and detector effects to be tested against apparatus records, with uncertainty and calibration qualifications; P7(v) distinguishes that testing from deductive proof of the framework ([[post-nrqm-framework-preparation-and-apparatus]]).

## Proof

1.1 [Positive square roots] Fix an effect $F=F_a$. For a real $\lambda\notin[0,1]$, the quadratic-form bounds and Cauchy-Schwarz give $\|(F-\lambda I)x\|\ge d\|x\|$, with $d=\operatorname{dist}(\lambda,[0,1])>0$. This bound makes $F-\lambda I$ injective with closed range: a convergent sequence of images has Cauchy preimages, which converge in $H$. Its range is dense, since a vector $y$ orthogonal to it satisfies $(F-\lambda I)^*y=0$, hence $y=0$; the orthogonal-decomposition property implies that the closed range is all of $H$. Its inverse is bounded by $1/d$. Together with the real-spectrum result [F1], this proves $\sigma(F)\subseteq[0,1]$. Apply the calculus to $f(t)=\sqrt t$ and $g(t)=t^{1/4}$ on this spectrum. Star preservation and multiplicativity give $R=f(F)=R^*$, $R^2=F$, and $R=g(F)^*g(F)\ge0$. If $S$ is another bounded positive square root, $S$ commutes with $F=S^2$, hence with $R\in C^*(I,F)$ by norm continuity of multiplication. For $D=S-R$, $(S+R)D=S^2-R^2=0$. Thus $y=Dx$ satisfies $\langle Sy,y\rangle+\langle Ry,y\rangle=0$. Each summand is nonnegative; varying $t\in\mathbb C$ in the nonnegative forms $\langle S(y+tz),y+tz\rangle$ and $\langle R(y+tz),y+tz\rangle$ shows $Sy=Ry=0$. Hence $D^2x=0$ and $\|Dx\|^2=\langle D^2x,x\rangle=0$, proving uniqueness. Write this root as $F_a^{1/2}$. [given, F1, algebra]

2.1 [Clause (a)] Put $R_a:=F_a^{1/2}$. For $\psi\in H$, the tensor inner product and $R_a^{*}R_a=F_a$ give $\|W\psi\|^{2}=\sum_a\|R_a\psi\|^{2}=\sum_a\langle F_a\psi,\psi\rangle=\|\psi\|^{2}$, so $W$ is a linear isometry. On elementary tensors, $P_a(\xi\otimes e_b)=\delta_{ab}\xi\otimes e_a$; boundedness and density therefore show that the $P_a$ are orthogonal projections, pairwise orthogonal, and sum to $I$. Finally, for $\psi,\phi\in H$, $\langle W^{*}P_aW\psi,\phi\rangle=\langle P_aW\psi,W\phi\rangle=\langle R_a\psi,R_a\phi\rangle=\langle F_a\psi,\phi\rangle$, so $W^{*}P_aW=F_a$. These are the claims in (a). [step 1.1, given, F1, algebra]

3.1 [The dilated state and the outcome probabilities] Write $\rho=\sum_n w_nT_{u_n,u_n}$ by [F3]. The rank-one identities give $WT_{u_n,u_n}W^{*}=T_{Wu_n,Wu_n}$; bounded left and right multiplication preserve trace class and trace-norm limits by [F2], so $\widetilde\rho$ is the trace-norm sum of these positive rank-one operators. Its trace is $\sum_nw_n\|Wu_n\|^{2}=\sum_nw_n=1$ because $W$ is an isometry; positivity follows termwise and is preserved by the operator-norm limit, which follows from trace-norm convergence and [F2]. Thus $\widetilde\rho$ is a state. For each $a$, [F1] gives $P_aWu_n=F_a^{1/2}u_n\otimes e_a$, hence $\operatorname{tr}(\widetilde\rho P_a)=\sum_nw_n\operatorname{tr}(T_{Wu_n,Wu_n}P_a)=\sum_nw_n\|F_a^{1/2}u_n\|^{2}=\sum_nw_n\langle F_au_n,u_n\rangle=\operatorname{tr}(\rho F_a)$, using the trace formula and trace-norm continuity in [F2], the density expansion [F3], and [F8]. This proves (b). [step 2.1, given, F1, F2, F3, F8, algebra]

4.1 [The induced conditional state] Assume $p_{a}>0$ and define $J_{a}:H\to H\widehat\otimes C$ by $J_{a}\xi:=\xi\otimes e_{a}$. The tensor-product inner product makes $J_{a}$ an isometry, and the partial-trace rule [F2] gives $\operatorname{Tr}_{C}(J_{a}XJ_{a}^{*})=X$ for every trace-class $X$, since $J_{a}XJ_{a}^{*}=X\otimes T_{e_{a},e_{a}}$. Directly from the definition of $W$, $P_{a}W=J_{a}F_{a}^{1/2}$. Hence $P_{a}\widetilde\rho P_{a}=J_{a}F_{a}^{1/2}\rho F_{a}^{1/2}J_{a}^{*}$, so $\operatorname{Tr}_{C}\widetilde\rho_{a}=F_{a}^{1/2}\rho F_{a}^{1/2}/p_{a}$. This is a state because it is the partial trace of the state $\widetilde\rho_{a}$ [F2, F3]. Summing the same identity over $a$ gives $\operatorname{Tr}_{C}\sum_{a}P_{a}\widetilde\rho P_{a}=\sum_{a}F_{a}^{1/2}\rho F_{a}^{1/2}=\Lambda(\rho)$. The family $M_{a}:=F_{a}^{1/2}$ is normalized because $\sum_{a}M_{a}^{*}M_{a}=\sum_{a}F_{a}=I$; its effects are $F_{a}$ and its conditional updates are exactly the displayed reduced states [F4]. By [F7], $\operatorname{tr}(\Lambda(X))=\sum_a\operatorname{tr}(F_a^{1/2}XF_a^{1/2})=\sum_a\operatorname{tr}(XF_a)=\operatorname{tr}X$ for every trace-class $X$, so $\Lambda$ is trace preserving as stated. This is (c). [step 3.1, F1, F2, F3, F4, F7, algebra]

5.1 [Projective case] If $F_{a}=P_{a}^{\circ}$ is a projection, then $F_{a}^{1/2}=F_{a}$ and $F_{b}^{1/2}F_{a}^{1/2}=P_{b}^{\circ}P_{a}^{\circ}=\delta_{ab}P_{a}^{\circ}$ for the pairwise orthogonal family; hence the induced update of step 4.1 reduces to $P_{a}^{\circ}\rho P_{a}^{\circ}/p_{a}$, the Lueders update [F5]. [step 4.1, given, F5, algebra]

5.2 [Effects do not determine every instrument's update] The update induced by the displayed dilation is the square-root update from step 4.1. This is a particular choice of instrument associated with the effects; [F6] supplies two normalized declared instruments with the same effects and different updates. Thus the effects alone do not prescribe a unique update among all declared instruments. This is the remaining claim of (d). [step 4.1, given, F6, algebra]

6.1 [Scope] The preceding steps were carried out entirely in the declared composite model space $H\widehat\otimes C$ with the mathematical ancilla $C$; no physical ancilla, apparatus or outcome selection was used. The laboratory-identification qualification is precisely the adopted P7 discipline [F9], not a consequence of the dilation. This is (e). [step 5.2, given, F1, F2, F9, algebra] ∎
