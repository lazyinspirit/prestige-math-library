---
id: ex-nrqm-measurement-degenerate-coarse-versus-fine-update
aliases: [ nrqm-measurement-degenerate-coarse-versus-fine-update ]
kind: example
domain: physics
title: "Coarse and fine declared measurements of a degenerate subspace: the
  Lueders update is not eigenvector selection"
status: published
origin: pipeline
dependency_level: 11
deps:
  [
    cor-inner-product-induces-a-norm,
    def-complex-numbers-and-arithmetic,
    def-countable-choice,
    def-hilbert-space,
    def-inner-product-space,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-complex-conjugation-and-modulus-laws,
    lem-nrqm-composites-rank-one-operator-calculus,
    lem-nrqm-measurement-selective-luders-update,
    pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles,
    thm-complex-spectral-theorem-for-normal-endomorphisms
  ]
dependency_roles:
  cor-inner-product-induces-a-norm: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-measurement-selective-luders-update: mathematical-premise
  pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles: physical-result
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An exact finite model computation contrasting two declared
  ideal sharp measurements of a three-level system: a coarse readout of a
  degenerate two-dimensional subspace and a fine readout resolving it. The
  example shows that the Lueders update by the subspace projection retains the
  coherent superposition while the fine measurement selects basis states, and
  that the two declared measurements give different statistics for a suitable
  bounded observable. It asserts no apparatus realization and no empirical
  result."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.3,
        printed pages 76-77 (degenerate spectrum: collapse to the normalized
        superposition inside the degenerate eigenspace)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter
        3 'Foundations II: Measurement and Evolution' (updated July 2015),
        Section 3.1.2, printed pages 9-11 (orthogonal versus generalized
        measurement and non-repeatability)"
      url: "https://preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: pass
---

## Example

Declare a three-level system with assigned Hilbert space $H=\mathbb C^{3}$ and orthonormal basis $(e_{1},e_{2},e_{3})$, and put
$$K:=\operatorname{span}(e_{1},e_{2}),\qquad P:=T_{e_{1},e_{1}}+T_{e_{2},e_{2}},\qquad \psi:=\frac{e_{1}+e_{2}}{\sqrt2},\qquad w':=\frac{e_{1}-e_{2}}{\sqrt2},$$
with $T_{x,y}z=\langle z,y\rangle x$ ([[def-nrqm-state-geometry-framework-state-space]], [[def-inner-product-space]], [[def-hilbert-space]], [[lem-nrqm-composites-rank-one-operator-calculus]]). Declare the two ideal sharp measurements
$$\mathcal C:=(P,\,I-P)\quad\text{(coarse readout of }K\text{)},\qquad \mathcal G:=(T_{e_{1},e_{1}},\,T_{e_{2},e_{2}},\,T_{e_{3},e_{3}})\quad\text{(fine readout)},$$
and consider the pure preparation $\rho=T_{\psi,\psi}$ and the bounded self-adjoint observable, declared dimensionless with spectral unit $1$,
$$W:=T_{\psi,\psi}-T_{w',w'}$$
with spectral projections $T_{\psi,\psi}$ at $+1$, $T_{w',w'}$ at $-1$ and $I-T_{\psi,\psi}-T_{w',w'}$ at $0$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]], [[thm-complex-spectral-theorem-for-normal-endomorphisms]]). Then:

**(i)** In the coarse measurement $\mathcal C$ the outcome $K$ has probability $1$, and the conditional state is again $\rho=T_{\psi,\psi}$: the coarse readout leaves the coherent superposition inside the degenerate subspace intact.

**(ii)** In the fine measurement $\mathcal G$ the outcomes $e_{1}$ and $e_{2}$ have probabilities $\tfrac12$ each (and $e_{3}$ has probability $0$), with conditional states $T_{e_{1},e_{1}}$ and $T_{e_{2},e_{2}}$: the fine readout selects a basis state.

**(iii)** For the observable $W$ the two declared measurements give different model predictions: after the coarse outcome the value $+1$ has probability $1$; the mixture $\tfrac12T_{e_{1},e_{1}}+\tfrac12T_{e_{2},e_{2}}$ (the discarded ensemble of the fine measurement) assigns probability $\tfrac12$ to $+1$ and $\tfrac12$ to $-1$. Hence the coarse Lueders update is not equivalent to selecting one eigenvector of the degenerate subspace with probability $\tfrac12$ and forgetting the other: that replacement destroys the coherence of $\psi$ and changes the statistics of $W$.

**(iv)** The fine measurement refines the coarse outcome structure: grouping outcomes $e_{1},e_{2}$ gives $K$, and outcome $e_{3}$ gives $K^{\perp}$, since $P=T_{e_{1},e_{1}}+T_{e_{2},e_{2}}$ and $I-P=T_{e_{3},e_{3}}$. It is nevertheless a different declared measurement with more detailed outcomes. The coarse outcome "the system is in $K$" does not itself report whether the fine outcome was $e_{1}$ or $e_{2}$; replacing the coarse Lueders update by the discarded fine ensemble is a different model, with the observable consequence exhibited in (iii). No apparatus is asserted to realize either declared measurement, and no empirical comparison is made.

## Facts & Assumptions

**Given:** The three-level Hilbert space $H=\mathbb C^{3}$ with orthonormal basis $(e_{1},e_{2},e_{3})$; the projection $P=T_{e_{1},e_{1}}+T_{e_{2},e_{2}}$; the unit vectors $\psi,w'$; the declared measurements $\mathcal C,\mathcal G$; the preparation $\rho=T_{\psi,\psi}$; the observable $W$.

[F1] **Rank-one calculus.** $T_{x,y}z=\langle z,y\rangle x$ is trace class with $T_{x,y}^{*}=T_{y,x}$; for unit vectors $x,u$ the operator $T_{x,x}$ is an orthogonal projection with $\operatorname{tr}(T_{x,x}S)=\langle Sx,x\rangle$ for bounded $S$, and $\operatorname{tr}(T_{x,x}T_{u,u})=|\langle x,u\rangle|^{2}$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (b)-(d), [[def-hilbert-space]]).

[F2] **Declared measurements and updates.** For a declared ideal sharp measurement $(P_{a})$ the outcome probabilities are $p_{a}=\operatorname{tr}(\rho P_{a})=\|P_{a}\xi\|^{2}$ for a pure preparation of the unit vector $\xi$, and the conditional state after a positive-probability outcome is $P_{a}\rho P_{a}/p_{a}$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clauses (a)-(b), [[pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles]] clauses (a)-(b)).

[F3] **Selective update of a supported pure state.** Under Countable Choice, for an orthogonal projection $P$ and a unit vector $\xi$ with $P\xi\ne0$, the normalized compression of $T_{\xi,\xi}$ is $T_{P\xi,P\xi}/\|P\xi\|^2$ ([[lem-nrqm-measurement-selective-luders-update]] clause (d)). Its physical interpretation as the conditional state of the declared measurement is exactly [F2]. This lemma requires no assigned observable or spectral-eigenspace hypothesis.

[F4] **Spectral projections of $W$.** $\psi$ and $w'$ are orthonormal, and $W=T_{\psi,\psi}-T_{w',w'}$ is bounded and self-adjoint with $W\psi=\psi$, $Ww'=-w'$, so $T_{\psi,\psi}$ and $T_{w',w'}$ are its spectral projections at $+1$ and $-1$ ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [F1]).

[F5] **Elementary overlaps.** $\langle e_{1},\psi\rangle=\langle e_{2},\psi\rangle=1/\sqrt2$, $\langle e_{1},w'\rangle=1/\sqrt2$, $\langle e_{2},w'\rangle=-1/\sqrt2$, and $\langle e_{3},\psi\rangle=\langle e_{3},w'\rangle=0$ ([[cor-inner-product-induces-a-norm]], [[lem-complex-conjugation-and-modulus-laws]]).

## Verification

**Proof technique:** direct; compute the outcome laws and conditional states of the two declared measurements and the induced law of the observable $W$.

1.1 [Clause (i)] $P\psi=\psi$, so [F2] gives $\operatorname{tr}(\rho P)=\|P\psi\|^{2}=1$; by [F3] and [F2] the conditional state after the outcome $K$ is $T_{P\psi,P\psi}/\|P\psi\|^2=T_{\psi,\psi}=\rho$, unchanged. This is (i). [given, F1, F2, F3, algebra]

2.1 [Clause (ii)] By [F2] and [F1], the fine outcome probabilities are $\operatorname{tr}(T_{\psi,\psi}T_{e_{i},e_{i}})=|\langle e_{i},\psi\rangle|^{2}$, equal to $\tfrac12$ for $i=1,2$ and $0$ for $i=3$ by [F5]; the conditional states are $T_{e_{i},e_{i}}$. This is (ii). [step 1.1, given, F1, F2, F5, algebra]

3.1 [Clause (iii)] By [F4] and [F2], in the coarse conditional state $\rho=T_{\psi,\psi}$ the value $+1$ of $W$ has probability $\operatorname{tr}(T_{\psi,\psi}T_{\psi,\psi})=1$. The mixture $\sigma=\tfrac12T_{e_{1},e_{1}}+\tfrac12T_{e_{2},e_{2}}$ gives $\operatorname{tr}(\sigma T_{\psi,\psi})=\tfrac12|\langle e_{1},\psi\rangle|^{2}+\tfrac12|\langle e_{2},\psi\rangle|^{2}=\tfrac12$ and $\operatorname{tr}(\sigma T_{w',w'})=\tfrac12|\langle e_{1},w'\rangle|^{2}+\tfrac12|\langle e_{2},w'\rangle|^{2}=\tfrac12$ by [F1] and [F5], so the mixture assigns probability $\tfrac12$ to each of $+1$ and $-1$. The two laws for $W$ differ; the discarded ensemble of the fine measurement is this mixture, whereas the coarse conditional state is the coherent state $\rho$, so replacing the coarse Lueders update by eigenvector selection is a distinct model with different predictions. This is (iii). [step 2.1, given, F1, F2, F4, F5, algebra]

4.1 [Clause (iv) and scope] By the displayed definitions, the sum of the first two fine projections is $P$ and the third is $I-P$, so grouping the fine outcomes as stated gives the coarse outcome structure; thus $\mathcal G$ refines $\mathcal C$. The instruments are still distinct because the coarse Lueders outcome $K$ leaves $\rho$ unchanged while the fine measurement, when its label is discarded, gives the mixture in step 3.1. The coarse outcome alone supplies no finer label. No apparatus was used and no record is reported. This is (iv). [step 3.1, given, F1, F2, algebra] ∎

## Remarks

- **Degeneracy is a property of the declared measurement, not of the state alone.** The superposition $\psi$ inside $K$ is unchanged by the coarse readout because the update uses the projection onto the whole eigenspace; a fine measurement whose projections lie inside $K$ is a different apparatus model with different outcomes.
- **No preferred basis.** The coarse readout has no rule that selects $e_{1}$ or $e_{2}$; the model contains no such rule, and the example shows that adding one changes predictions for a suitable later observable.
