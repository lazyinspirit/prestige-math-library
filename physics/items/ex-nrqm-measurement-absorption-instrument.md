---
id: ex-nrqm-measurement-absorption-instrument
aliases: [ nrqm-measurement-absorption-instrument ]
kind: example
domain: physics
title: "An absorbing two-outcome instrument: amplitude suppression and a branch
  without an outgoing polarization state"
status: published
origin: pipeline
dependency_level: 10
deps:
  [
    cor-inner-product-induces-a-norm,
    def-bounded-linear-operator,
    def-complex-numbers-and-arithmetic,
    def-countable-choice,
    def-hilbert-space,
    def-inner-product-space,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-complex-conjugation-and-modulus-laws,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-nrqm-composites-finite-effects-and-instruments,
    lem-nrqm-composites-rank-one-operator-calculus,
  ]
dependency_roles:
  cor-inner-product-induces-a-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-finite-effects-and-instruments: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An exact finite model computation for a declared three-level
  system with a declared two-outcome instrument: a polarization-sensitive
  absorbing branch that leaves the absorbed level rather than an outgoing
  polarization state, a non-detection branch with amplitude suppression, and the
  non-repeatability of both branches. The three-level space and its level labels
  are a declared finite idealization of a fixed-mode absorbing detector,
  separately adopting its finite polarization/detector-marker state and
  instrument assignment, with Countable Choice assumed; no real
  detector, photon number, efficiency, dark count or measured rate is described,
  and no claim about photon absorption in nature is made."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter
        3 'Foundations II: Measurement and Evolution' (updated July 2015),
        Section 3.1.2, printed pages 9-11 (generalized measurements, POVM
        effects, and the freedom of the post-measurement state)"
      url: "https://preskill.caltech.edu/ph219/chap3_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        1.3.6, printed pages 14-15 (photons passed or absorbed by an analyser,
        with the transmitted state fixed by the analyser)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Adopt the following finite detector state and instrument assignments as additional assumptions of this example, using the preparation and instrument formulas of P1-P3 on this explicitly declared effective model; their massive-matter formulation alone does not supply this extension. Assume Countable Choice ([[def-countable-choice]]), the hypothesis of the mathematical suppliers. Fix a propagation label $k_0\in\mathbb R^3\setminus\{0\}$ in $\mathrm m^{-1}$ relative to fixed Euclidean spatial coordinates, and a real orthonormal transverse pair $v_1,v_2$ with $k_0\cdot v_1=k_0\cdot v_2=0$. As an additional finite detector-model assumption, assign $H=\mathbb C e_0\oplus V\cong\mathbb C^3$, where $V=\mathbb C v_1\oplus\mathbb C v_2$, with orthonormal coordinates $(e_0,e_1,e_2)$, $e_j\leftrightarrow v_j$ for $j=1,2$, and state space $D(H)$ ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[def-inner-product-space]], [[def-hilbert-space]]). A unit vector $\xi$ represents the preparation $T_{\xi,\xi}$. The level $e_0$ is the declared **absorbed/no-photon marker**, orthogonal to the **polarization plane** $V=\operatorname{span}(e_1,e_2)$; it is a bookkeeping level rather than an assigned Fock vacuum. The extension to $H$ and the instrument rule below are adopted assumptions of this effective detector model, not consequences of the massive-matter state assignment or a full radiation dynamics. Angles and all amplitude coordinates are dimensionless, with angles read in radians. Fix a unit vector
$$v=\cos\gamma\,e_{1}+\sin\gamma\,e_{2},\qquad v^{\perp}:=-\sin\gamma\,e_{1}+\cos\gamma\,e_{2},$$
so that $(e_{0},v,v^{\perp})$ is an orthonormal basis, and fix a detection parameter $p\in(0,1)$, a dimensionless model parameter. Declare the two-outcome instrument with Kraus family ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (d))
$$M_{\mathrm{det}}:=\sqrt p\,T_{e_{0},v},\qquad M_{\mathrm{no}}:=T_{e_{0},e_{0}}+\sqrt{1-p}\,T_{v,v}+T_{v^{\perp},v^{\perp}},$$
where $T_{x,y}z=\langle z,y\rangle x$ ([[lem-nrqm-composites-rank-one-operator-calculus]]), with outcomes $\mathrm{det}$ and $\mathrm{no}$, effects $F_{\mathrm{det}}=M_{\mathrm{det}}^{*}M_{\mathrm{det}}$, $F_{\mathrm{no}}=M_{\mathrm{no}}^{*}M_{\mathrm{no}}$, probabilities $p_{\mathrm{det}}=\operatorname{tr}(\rho F_{\mathrm{det}})$, $p_{\mathrm{no}}=\operatorname{tr}(\rho F_{\mathrm{no}})$ and updates $\rho\mapsto M_{a}\rho M_{a}^{*}/p_{a}$ for positive probabilities. The example considers preparations $\rho=T_{\psi,\psi}$ with
$$\psi=\alpha v+\beta v^{\perp},\qquad |\alpha|^{2}+|\beta|^{2}=1,$$
so that the preparation lies in the polarization plane, and computes:

**(i)** The family is normalized, $M_{\mathrm{det}}^{*}M_{\mathrm{det}}+M_{\mathrm{no}}^{*}M_{\mathrm{no}}=I$, with effects $F_{\mathrm{det}}=p\,T_{v,v}$ and $F_{\mathrm{no}}=T_{e_{0},e_{0}}+(1-p)T_{v,v}+T_{v^{\perp},v^{\perp}}$; hence
$$p_{\mathrm{det}}=p\,|\alpha|^{2},\qquad p_{\mathrm{no}}=1-p\,|\alpha|^{2}.$$

**(ii)** When $\alpha\ne0$, conditioned on the outcome $\mathrm{det}$, the conditional state is $T_{e_{0},e_{0}}$: the branch carries the absorbed/no-photon record and leaves **no outgoing state in the polarization plane**. In particular the model does not produce an outgoing one-photon polarization state for the detected branch.

**(iii)** Conditioned on the outcome $\mathrm{no}$, the conditional state is the pure state of the normalized vector
$$\frac{\sqrt{1-p}\,\alpha\,v+\beta\,v^{\perp}}{\sqrt{(1-p)|\alpha|^{2}+|\beta|^{2}}},$$
that is, the $v$-component is amplitude-suppressed by $\sqrt{1-p}$ rather than projected away. For the fully detectable preparation $\psi=v$ ($\alpha=1$) and $p=\tfrac12$ one has $p_{\mathrm{det}}=p_{\mathrm{no}}=\tfrac12$ and the no-detection conditional state is again $T_{v,v}$; a repetition of the instrument on that branch again detects with probability $\tfrac12$, so the no-detection outcome is not repeatable.

**(iv)** When $\alpha\ne0$, after the detection branch the state is $T_{e_{0},e_{0}}$, and a repetition gives $p_{\mathrm{det}}=\operatorname{tr}(T_{e_{0},e_{0}}F_{\mathrm{det}})=p|\langle e_{0},v\rangle|^{2}=0$: the detection outcome is not repeatable either. The effects $F_{\mathrm{det}}$ and $F_{\mathrm{no}}$ are not projections for $0<p<1$, so the instrument is not a declared ideal sharp measurement; it is a declared general instrument whose update is part of its declaration ([[lem-nrqm-composites-finite-effects-and-instruments]] clause (d), [[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clauses (d)-(f)).

No real detector, efficiency, dark count, dead time, photon number or measured rate is described; the computation is a model computation in the declared three-level space.

## Facts & Assumptions

**Given:** The three-level Hilbert space $H=\mathbb C^{3}$ with orthonormal basis $(e_{0},e_{1},e_{2})$; the unit vector $v$ and $v^{\perp}$; the parameter $p\in(0,1)$; the Kraus family $M_{\mathrm{det}},M_{\mathrm{no}}$ and its outcomes; a pure preparation of $\psi=\alpha v+\beta v^{\perp}$ with $|\alpha|^{2}+|\beta|^{2}=1$.

[F1] **Rank-one calculus in $\mathbb C^{3}$.** $T_{x,y}z=\langle z,y\rangle x$ satisfies $T_{x,y}^{*}=T_{y,x}$, $T_{x,y}T_{u,w}=\langle u,y\rangle T_{x,w}$, and for an orthonormal basis $(b_{1},b_{2},b_{3})$ one has $\sum_{i}T_{b_{i},b_{i}}=I$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (a)-(d), [[def-hilbert-space]]).

[F2] **Declared instruments and adopted premises.** Adopt the separate finite detector-marker state/instrument assignment specified above and assume Countable Choice. For this effective model the following outcome and update rules are adopted with its declared apparatus, using the vocabulary of the measurement definition; their normalization is supplied by the finite instrument mathematics. A normalized finite Kraus family $(M_{a})$ with $\sum_{a}M_{a}^{*}M_{a}=I$ declares an instrument with effects $F_{a}=M_{a}^{*}M_{a}$, outcome probabilities $\operatorname{tr}(\rho F_{a})$ and conditional updates $M_{a}\rho M_{a}^{*}/p_{a}$ for $p_{a}>0$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (d), [[lem-nrqm-composites-finite-effects-and-instruments]] clauses (a)-(b)).

[F3] **States.** $T_{\psi,\psi}$ with $\|\psi\|=1$ is a state, and for a rank-one weight $T_{x,x}$ with $\|x\|=1$ one has $\operatorname{tr}(T_{x,x}S)=\langle Sx,x\rangle$ for bounded $S$ ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a), [F1]).

[F4] **Elementary inner products.** $\langle v,v\rangle=\langle v^{\perp},v^{\perp}\rangle=1$, $\langle v,v^{\perp}\rangle=0$, and $\langle e_{0},v\rangle=0$ ([[cor-inner-product-induces-a-norm]], [[lem-complex-conjugation-and-modulus-laws]]).

## Verification

**Proof technique:** direct; verify normalization of the declared Kraus family and compute the two branches on the explicit three-dimensional data.

1.1 [Normalization and effects] By [F1], $M_{\mathrm{det}}^{*}M_{\mathrm{det}}=p\,T_{v,v}$ and $M_{\mathrm{no}}^{*}M_{\mathrm{no}}=T_{e_{0},e_{0}}+(1-p)T_{v,v}+T_{v^{\perp},v^{\perp}}$, since the cross terms of $M_{\mathrm{no}}$ vanish by the orthogonality relations $\langle e_{0},v\rangle=\langle v,v^{\perp}\rangle=0$ [F4]; summing gives $p\,T_{v,v}+T_{e_{0},e_{0}}+(1-p)T_{v,v}+T_{v^{\perp},v^{\perp}}=T_{e_{0},e_{0}}+T_{v,v}+T_{v^{\perp},v^{\perp}}=I$ by [F1]. Hence the family is normalized with the displayed effects [F2]. [given, F1, F2, F4, algebra]

2.1 [Clause (i)] By [F2] and [F3], $p_{\mathrm{det}}=\operatorname{tr}(T_{\psi,\psi}F_{\mathrm{det}})=\langle F_{\mathrm{det}}\psi,\psi\rangle=p|\langle\psi,v\rangle|^{2}=p|\alpha|^{2}$ and $p_{\mathrm{no}}=1-p_{\mathrm{det}}=1-p|\alpha|^{2}$, using $\langle\psi,v\rangle=\alpha$ [F4]. This is (i). [step 1.1, given, F2, F3, F4, algebra]

3.1 [Clause (ii): the absorbed branch] The non-normalized conditional operator is $M_{\mathrm{det}}\rho M_{\mathrm{det}}^{*}=pT_{e_{0},v}T_{\psi,\psi}T_{v,e_{0}}=p|\langle\psi,v\rangle|^{2}T_{e_{0},e_{0}}=p_{\mathrm{det}}T_{e_{0},e_{0}}$ by [F1]; dividing by $p_{\mathrm{det}}>0$ (for $\alpha\ne0$) gives $T_{e_{0},e_{0}}$, a state with no component in the polarization plane. This is (ii). [step 2.1, given, F1, F3, algebra]

3.2 [Clause (iii): the non-detection branch] Since $M_{\mathrm{no}}\psi=\sqrt{1-p}\alpha v+\beta v^{\perp}$ by [F1] and [F4], the non-normalized conditional operator is $T_{M_{\mathrm{no}}\psi,M_{\mathrm{no}}\psi}$ with trace $\|M_{\mathrm{no}}\psi\|^{2}=(1-p)|\alpha|^{2}+|\beta|^{2}=p_{\mathrm{no}}$; dividing gives the pure state of the displayed normalized vector, in which the $v$-amplitude is scaled by $\sqrt{1-p}$ instead of being removed. The denominator is positive because $p_{\mathrm{no}}=1-p|\alpha|^2\ge1-p>0$. For $\alpha=1$, $\beta=0$ and every admitted $p$, the normalized vector is $v$ and the state is again $T_{v,v}$; applying (i) to this state gives subsequent detection probability $p>0$, so the no-detection outcome does not repeat with certainty. In particular $p=\tfrac12$ gives the stated repeated detection probability $\tfrac12$. This is (iii). [step 2.1, given, F1, F3, F4, algebra]

4.1 [Clause (iv): the detected branch and the idealisation] On the state $T_{e_{0},e_{0}}$ of step 3.1 the detection probability is $\operatorname{tr}(T_{e_{0},e_{0}}F_{\mathrm{det}})=p|\langle e_{0},v\rangle|^{2}=0$ by [F3] and [F4], so the detection outcome does not repeat either; and $F_{\mathrm{det}}=pT_{v,v}$ has the eigenvalues $p,0,0$, so it is not a projection when $0<p<1$, and the instrument is not a declared ideal sharp measurement. The update of the non-detection branch is therefore not the Lueders update of a projection, and its value is part of the declaration [F2], in agreement with the non-determination recorded in [[lem-nrqm-composites-finite-effects-and-instruments]] clause (d). No detector quantity was used. This is (iv). [step 3.2, given, F1, F2, algebra] ∎

## Remarks

- **Interpretation of the marker.** The level $e_{0}$ is a bookkeeping record of the branch in which the model detector has absorbed the excitation of the polarization mode. The example is honest about being a declared three-level idealisation: it asserts no photon-number content, no outgoing vacuum field, no detector dynamics and no real absorption mechanism.
- **Why this is not a projection.** The effects $F_{\mathrm{det}}$ and $F_{\mathrm{no}}$ sum to $I$ and have eigenvalues in $[0,1]$, so they are legitimate effects of a finite-resolution apparatus model; the principal contrast with the projective case is that the update of the no-detection branch suppresses the detected component by the amplitude $\sqrt{1-p}$ rather than projecting it away, and that neither outcome is repeatable.
