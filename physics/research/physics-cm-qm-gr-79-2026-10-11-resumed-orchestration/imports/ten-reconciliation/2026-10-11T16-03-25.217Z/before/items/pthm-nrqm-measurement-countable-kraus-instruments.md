---
id: pthm-nrqm-measurement-countable-kraus-instruments
aliases: [nrqm-measurement-countable-kraus-instruments]
kind: physics-theorem
domain: physics
title: "Declared countable instruments: normalization, discarded ensembles and the repeatability criterion"
status: draft
origin: pipeline
dependency_level: 11
deps: [def-bounded-linear-operator, def-countable-choice, def-hilbert-orthogonal-projection, def-non-negative-and-positive-operator, def-nrqm-measurement-framework-declared-measurements-and-instruments, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-trace-class-operator, def-trace-of-a-trace-class-operator, lem-nrqm-composites-countable-kraus-normalization, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-finite-effects-and-instruments, lem-nrqm-composites-general-trace-class-instrument-and-effect-duality, lem-nrqm-composites-nuclear-bounded-cyclicity, lem-nrqm-composites-rank-one-operator-calculus, pthm-nrqm-measurement-instrument-updates-not-determined-by-effects, pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles, post-nrqm-framework-ideal-conditional-measurement, post-nrqm-framework-observable-and-probability, post-nrqm-framework-state-and-composition, thm-cauchy-schwarz-in-an-inner-product-space, thm-trace-class-is-a-two-sided-banach-operator-ideal]
dependency_roles:
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-non-negative-and-positive-operator: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  lem-nrqm-composites-countable-kraus-normalization: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-finite-effects-and-instruments: mathematical-premise
  lem-nrqm-composites-general-trace-class-instrument-and-effect-duality: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  pthm-nrqm-measurement-instrument-updates-not-determined-by-effects: physical-result
  pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles: physical-result
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional statement about declared countable instruments of the framework: a normalized countable Kraus family defines outcome effects and probabilities, a trace-preserving discarded-outcome map and conditional updates, and the instrument is repeatable exactly when the Kraus family satisfies the stated algebraic criterion. The theorem asserts no apparatus realization, no preferred outcome and no empirical result; the non-repeatability of general instruments is recorded by an explicit supplied instance."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 3 'Foundations II: Measurement and Evolution' (updated July 2015), Section 3.1.2, printed pages 9-11 (Kraus operators, POVM (3.29), repeatability condition (3.28))"
      url: "https://preskill.caltech.edu/ph219/chap3_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 1.4 and 6.3, printed pages 15 and 121-126 (ideal measurements, density operators and the trace rule for outcome probabilities)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state postulate P1, the observable and probability postulate P2 and the ideal conditional-measurement postulate P3 ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[post-nrqm-framework-ideal-conditional-measurement]]), and assume the Axiom of Countable Choice, the hypothesis of the cited mathematics. Let $H$ be the nonzero complex Hilbert space assigned to a declared system ([[def-nrqm-state-geometry-framework-state-space]]), and let $(M_{a})_{a\ge1}$ be a declared normalized countable Kraus family on $H$: bounded operators with
$$\sum_{a=1}^{N}M_{a}^{*}M_{a}\longrightarrow I\qquad\text{strongly as }N\to\infty .$$
Declare the countable instrument with outcome set $\{1,2,\dots\}$, effects $F_{a}:=M_{a}^{*}M_{a}$, outcome probabilities $p_{a}:=\operatorname{tr}(\rho F_{a})$, conditional updates $\rho_{a}:=M_{a}\rho M_{a}^{*}/p_{a}$ for $p_{a}>0$, and discarded-outcome map $\Phi(\rho):=\sum_{a\ge1}M_{a}\rho M_{a}^{*}$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (d)). Then:

**(a) POVM and discarded ensemble.** Each $F_{a}$ is an effect, $0\le F_{a}\le I$; for every state $\rho$ one has $p_{a}\ge0$ and $\sum_{a}p_{a}=1$; $\Phi$ is a positive trace-preserving linear map of the trace-class operators and maps states to states; and $\Phi(\rho)=\sum_{a:p_{a}>0}p_{a}\rho_{a}$, a trace-norm convergent mixture of the conditional states.

**(b) Repeatability criterion.** The declared instrument is **repeatable**, i.e. for every state $\rho$ and every $a$ with $p_{a}>0$ an immediate repetition of the same declared instrument returns the outcome $a$ with probability $1$ and every $b\ne a$ with probability $0$, if and only if
$$M_{b}M_{a}=0\quad(b\ne a),\qquad F_{a}^{2}=F_{a}\quad\text{for every }a\text{ with }F_{a}\ne0 .$$

**(c) Projective case.** For a declared ideal sharp measurement $(P_{a})$ the Kraus family $M_{a}=P_{a}$ satisfies the criterion of (b) and is repeatable, in agreement with [[pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles]] clause (b); a general normalized Kraus family need not satisfy it ([[pthm-nrqm-measurement-instrument-updates-not-determined-by-effects]] clause (c)).

**(d) Non-determination.** The effects $(F_{a})$ determine the outcome probabilities but not the conditional updates; the Kraus family is part of the declared instrument (clause (v) of P3, [[pthm-nrqm-measurement-instrument-updates-not-determined-by-effects]] clause (b)).

**(e) Scope.** Clauses (a)-(d) are conditional statements about the declared countable instrument; they assert no apparatus realization, no outcome uniqueness and no empirical fact, and no claim is made that every positive trace-preserving map admits such a Kraus family ([[lem-nrqm-composites-countable-kraus-normalization]] clause (c)).

## Facts & Assumptions

**Given:** The adopted postulates P1, P2, P3; a normalized countable Kraus family $(M_{a})_{a\ge1}$ on $H$; its effects $F_{a}=M_{a}^{*}M_{a}$, probabilities $p_{a}$, updates $\rho_{a}$ and discarded map $\Phi$; a state $\rho$.

[F1] **Countable Kraus normalization.** For a bounded family with $\sum_{a\le N}M_{a}^{*}M_{a}\to I$ strongly: $\sum_{a}\|M_{a}x\|^{2}=\|x\|^{2}$ for every $x$; for every positive trace-class $\rho$ the series $\sum_{a}M_{a}\rho M_{a}^{*}$ converges in trace norm to a positive trace-class operator with trace $\operatorname{tr}\rho$; the map extends uniquely to a linear positive trace-preserving map of the trace-class operators and carries states to states ([[lem-nrqm-composites-countable-kraus-normalization]] clauses (a)-(c)).

[F2] **Density expansions.** A state has an expansion $\rho=\sum_{n}w_{n}T_{u_{n},u_{n}}$ with orthonormal $(u_{n})$, $w_{n}\ge0$, $\sum_{n}w_{n}=1$; then $\operatorname{tr}(\rho B)=\sum_{n}w_{n}\langle Bu_{n},u_{n}\rangle$ for bounded $B$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a), [[lem-nrqm-composites-nuclear-bounded-cyclicity]] clause (b)).

[F3] **Positivity of the Kraus products.** $F_{a}=M_{a}^{*}M_{a}\ge0$ and $F_{a}\le I$: the finite sums $G_{N}:=\sum_{a\le N}F_{a}$ satisfy $0\le G_{N}\le G_{N+1}\le I$ because $G_{N+1}-G_{N}=F_{N+1}\ge0$ and $\langle(I-G_{N})x,x\rangle=\sum_{a>N}\|M_{a}x\|^{2}\to0$ ([[def-non-negative-and-positive-operator]], [[lem-nrqm-composites-finite-effects-and-instruments]] clause (b), [F1]).

[F4] **Zero quadratic form.** If $X$ is a positive bounded operator and $\langle Xu,u\rangle=0$ for every unit vector $u$, then $X=0$: by Cauchy-Schwarz for the positive semidefinite sesquilinear form $(x,y)\mapsto\langle Xx,y\rangle$ one has $|\langle Xx,y\rangle|^{2}\le\langle Xx,x\rangle\langle Xy,y\rangle=0$ for all $x,y$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-non-negative-and-positive-operator]]).

[F5] **Updates and their formulas.** For $p_{a}>0$ one has $\rho_{a}=M_{a}\rho M_{a}^{*}/p_{a}$ with $\operatorname{tr}(M_{a}\rho M_{a}^{*})=\operatorname{tr}(\rho F_{a})=p_{a}$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (d), [[lem-nrqm-composites-rank-one-operator-calculus]] clause (e), [[lem-nrqm-composites-nuclear-bounded-cyclicity]] clause (b)).

## Proof

1.1 [The effects and the probabilities] By [F3] each $F_{a}$ is an effect. For a state $\rho$ with expansion [F2], $\sum_{a}p_{a}=\sum_{a}\sum_{n}w_{n}\|M_{a}u_{n}\|^{2}=\sum_{n}w_{n}\|u_{n}\|^{2}=1$ by [F1] with $x=u_{n}$ and $\sum_{n}w_{n}=1$; all terms are nonnegative, so the interchange of the sums is legitimate and $p_{a}\ge0$ for each $a$. [given, F1, F2, F3, algebra]

2.1 [The discarded map and the mixture identity] By [F1] the series $\sum_{a}M_{a}\rho M_{a}^{*}$ converges in trace norm, its sum $\Phi(\rho)$ is positive trace class with trace $\operatorname{tr}\rho=1$, and $\Phi$ is trace preserving; hence $\Phi(\rho)$ is a state [F1, F2]. For a label with $p_{a}=0$, [F5] gives $\operatorname{tr}(M_{a}\rho M_{a}^{*})=p_{a}=0$, so the positive trace-class summand $M_{a}\rho M_{a}^{*}$ is $0$; therefore the nonzero summands are exactly those with $p_{a}>0$, and $M_{a}\rho M_{a}^{*}=p_{a}\rho_{a}$ for them [F5]. Reindexing the trace-norm convergent series gives $\Phi(\rho)=\sum_{a:p_{a}>0}p_{a}\rho_{a}$. This is (a). [step 1.1, F1, F2, F5, algebra]

3.1 [Sufficiency of the criterion] Assume $M_{b}M_{a}=0$ for $b\ne a$ and $F_{a}^{2}=F_{a}$ whenever $F_{a}\ne0$. Fix a state $\rho$ and $a$ with $p_{a}>0$, and let $\rho_{a}$ be the conditional state. Then $p_{a}=\operatorname{tr}(\rho F_{a})>0$ forces $F_{a}\ne0$, and the probability that the immediate repetition returns $a$ is $\operatorname{tr}(\rho_{a}F_{a})=\operatorname{tr}(M_{a}\rho M_{a}^{*}F_{a})/p_{a}=\operatorname{tr}(\rho M_{a}^{*}F_{a}M_{a})/p_{a}=\operatorname{tr}(\rho F_{a}^{2})/p_{a}=\operatorname{tr}(\rho F_{a})/p_{a}=1$, using $M_{a}^{*}F_{a}M_{a}=M_{a}^{*}M_{a}^{*}M_{a}M_{a}=(F_{a})^{2}$ and [F5]. For $b\ne a$, $\operatorname{tr}(\rho_{a}F_{b})=\operatorname{tr}(\rho M_{a}^{*}M_{b}^{*}M_{b}M_{a})/p_{a}=\operatorname{tr}(\rho (M_{b}M_{a})^{*}(M_{b}M_{a}))/p_{a}=0$ by $M_{b}M_{a}=0$. Hence the instrument is repeatable. [step 2.1, given, F1, F5, algebra]

4.1 [Necessity of the criterion] Conversely assume the instrument repeatable. Fix $a$ with $F_{a}\ne0$; since $\langle F_{a}u,u\rangle=\|M_{a}u\|^{2}$ is not identically zero, there is a unit vector $u$ with $p_{a}(T_{u,u})>0$, so a state $\sigma$ with $p_{a}(\sigma)>0$ exists. For such a $\sigma$ and $b\ne a$, repeatability gives $0=\operatorname{tr}(\sigma_{a}F_{b})=\operatorname{tr}(\sigma\,(M_{b}M_{a})^{*}(M_{b}M_{a}))/p_{a}(\sigma)$, hence $\operatorname{tr}(\sigma X)=0$ for the positive bounded operator $X:=(M_{b}M_{a})^{*}(M_{b}M_{a})$; for an arbitrary state $\rho'$ and $t\in(0,1]$ the convex combination $\rho_{t}=(1-t)\sigma+t\rho'$ again has $p_{a}(\rho_{t})>0$, so $\operatorname{tr}(\rho_{t}X)=0$; subtracting the known identity $\operatorname{tr}(\sigma X)=0$ and dividing by $t$ gives $\operatorname{tr}(\rho'X)=0$ for every state $\rho'$, in particular $\langle Xu,u\rangle=0$ for every unit $u$, so $X=0$ by [F4], that is $M_{b}M_{a}=0$ for all $b\ne a$. Similarly, repeatability for the outcome $a$ itself gives $1=\operatorname{tr}(\sigma_{a}F_{a})=\operatorname{tr}(\sigma F_{a}^{2})/p_{a}(\sigma)$, that is $\operatorname{tr}(\sigma(F_{a}-F_{a}^{2}))=0$; applying the same convex-combination subtraction to the self-adjoint operator $F_{a}-F_{a}^{2}$ gives $\operatorname{tr}(\rho'(F_{a}-F_{a}^{2}))=0$ for every state $\rho'$, and since $0\le F_{a}\le I$ implies $F_{a}-F_{a}^{2}=F_{a}(I-F_{a})\ge0$, [F4] yields $F_{a}-F_{a}^{2}=0$, that is $F_{a}^{2}=F_{a}$. This proves the criterion. [step 3.1, given, F1, F2, F3, F4, F5, algebra]

5.1 [Clauses (c) and (d)] For a declared ideal sharp measurement, $M_{a}=P_{a}$ satisfies $M_{b}M_{a}=P_{b}P_{a}=\delta_{ab}P_{a}$ and $F_{a}=P_{a}^{2}=P_{a}$, so the criterion of (b) holds and the instrument is repeatable, in agreement with [[pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles]] clause (b); the explicit instrument of [[pthm-nrqm-measurement-instrument-updates-not-determined-by-effects]] clause (c) violates repeatability, so the criterion is not automatic. Since the outcome probabilities are functions of the effects alone while distinct normalized Kraus families may share effects, the effects do not determine the update; this is the non-determination recorded in [[pthm-nrqm-measurement-instrument-updates-not-determined-by-effects]] clause (b) and clause (v) of P3. This is (c) and (d). [step 4.1, given, F1, F3, algebra]

6.1 [Scope] Clauses (a)-(d) were derived from the declared Kraus family and the cited mathematics; no step used a claim about an apparatus, and the converse direction of the criterion did not assume that every positive trace-preserving map has a Kraus family, since the family was declared. This is (e). [step 5.1, given, F1, algebra] ∎
