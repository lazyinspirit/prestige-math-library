---
id: pthm-nrqm-identical-particles-permutation-invariance
aliases: [nrqm-identical-particles-permutation-invariance]
kind: physics-theorem
domain: physics
title: "Permutation invariance of sector preparations and the indistinguishability of relabelled readouts"
status: draft
origin: pipeline
dependency_level: 9
deps: [def-nrqm-identical-particles-framework-species-sectors-and-preparations, def-nrqm-observables-framework-observable-and-outcome-law, lem-nrqm-oscillator-unitary-transport-of-spectral-pvms, lem-nrqm-composites-permutation-sector-projections, thm-cyclicity-of-the-trace, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-identical-particles-and-spin, thm-nrqm-identical-particles-occupation-number-basis, lem-nrqm-composites-hilbert-tensor-construction, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  lem-nrqm-oscillator-unitary-transport-of-spectral-pvms: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  thm-cyclicity-of-the-trace: mathematical-premise
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  thm-nrqm-identical-particles-occupation-number-basis: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The conditional indistinguishability result of the framework for a declared identical-particle sector: every declared sector preparation is invariant under the permutation unitaries of the labelled space, and the outcome law of any assigned sharp observable of the labelled model equals that of its relabelled conjugate. The result is conditional on the adopted sector of P6 and on P1-P2; it asserts no measured invariance, no dynamics and no spin-statistics theorem."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 10.1 printed pages 226-228 (PDF pages 234-236): exchange symmetry of identical-particle amplitudes and the physical meaning of the two slots"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Skinner, Principles of Quantum Mechanics (Cambridge Part II, Michaelmas 2021), Chapter 7 'Identical Particles', pp. 1-4: the exchange operator, its action and the indistinguishability of the two particles; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
      url: "https://web.archive.org/web/20240801085112id_/https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1
([[post-nrqm-framework-state-and-composition]]), the observable and probability
postulate P2 ([[post-nrqm-framework-observable-and-probability]]) and the
identical-particle and spin postulate P6
([[post-nrqm-framework-identical-particles-and-spin]]) in the readings of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]]
and [[def-nrqm-observables-framework-observable-and-outcome-law]], and assume
the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]), the choice hypotheses of
the cited spectral mathematics. Let a species sector with parameters
$(H,m,s,\sigma)$, integer $n\ge1$, sector space
$\mathfrak H_n^\sigma=\operatorname{ran}P_\sigma^{(n)}$ and permutation
unitaries $(U_\pi)_{\pi\in S_n}$ be declared, and let $\rho$ be a declared
sector preparation. Then:

(a) *invariance of the preparation*: $U_\pi\rho U_\pi^{*}=\rho$ for every
$\pi\in S_n$;

(b) *indistinguishability of relabelled readouts*: for every $\pi$ and every
assigned sharp observable $(A,u_A)$ of the labelled model (a densely defined
self-adjoint operator on $H^{\otimes n}$ with a declared unit), the operator
$A_\pi:=U_\pi AU_\pi^{*}$ with domain $U_\pi D(A)$ is an assigned sharp
observable of the labelled model with the same unit, and for every Borel set
$B\subseteq\mathbb R$
$$\mu^{A_\pi}_\rho(B)=\mu^{A}_\rho(B);$$
for bounded $A$ this reads
$\operatorname{tr}(\rho\,U_\pi AU_\pi^{*})=\operatorname{tr}(\rho A)$;

(c) *sector-preserving quantities*: if $A$ is an assigned sharp observable
that preserves the sector and satisfies $U_\pi AU_\pi^{*}=A$ on its domain for
every $\pi$, then $A$ induces the sector quantity of clause (e) of the sector
definition and its law on sector preparations is the same as that of
$A_\pi=A$.

The theorem is conditional on the adopted sector: it establishes that within
the model no assigned readout of the labelled space can distinguish the labels,
and it asserts nothing about which statistics a physical species realizes.

## Facts & Assumptions

**Given:** A declared species sector $(H,m,s,\sigma)$, $n\ge1$, the sector space and permutation unitaries, a declared sector preparation $\rho$, and an assigned sharp observable $A$.

[F1] **Sector vocabulary.** $\mathfrak H_n^\sigma=\operatorname{ran}P_\sigma^{(n)}$ is a closed subspace of $H^{\otimes n}$, every $U_\pi$ is unitary and preserves $\mathfrak H_n^\sigma$, acting there as the scalar $\operatorname{sgn}_\sigma(\pi)$ with $\operatorname{sgn}_+=1$ and $\operatorname{sgn}_-=\operatorname{sgn}$; a declared sector preparation is a density operator $\rho$ on $\mathfrak H_n^\sigma$, read as a state of the framework ([[def-nrqm-identical-particles-framework-species-sectors-and-preparations]] clauses (c)-(d), [[lem-nrqm-composites-permutation-sector-projections]] clauses (a),(c)).

[F2] **Observable reading.** An assigned sharp observable $(A,u_A)$ has a unique spectral projection-valued measure $E_A$ on the Borel sets of $\mathbb R$, with $D(A)=\{x:\int\lambda^{2}dE_{A,x}<\infty\}$ and $Ax=\int\lambda\,dE_A(\lambda)x$, and the outcome law in the preparation $\rho$ is $\mu^{A}_\rho(B)=\operatorname{tr}(\rho E_A(B))$ ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a),(b), [[post-nrqm-framework-observable-and-probability]]).

[F3] **Unitary transport of spectral measures.** If $U$ is a bijective linear isometry of a Hilbert space and $T$ a self-adjoint operator, then $T':=UTU^{-1}$ with domain $UD(T)$ is self-adjoint and its spectral projection-valued measure is $E_{T'}(B)=UE_T(B)U^{-1}$ ([[lem-nrqm-oscillator-unitary-transport-of-spectral-pvms]] clauses (a),(b), [[def-hilbert-space]]).

[F4] **Cyclicity of the trace.** If $T$ is trace class and $S$ bounded, then $ST$ and $TS$ are trace class with $\operatorname{tr}(ST)=\operatorname{tr}(TS)$ ([[thm-cyclicity-of-the-trace]]).

[F5] **States.** A state on a Hilbert space is a self-adjoint positive trace-class operator of trace one; pure states are the rank-one operators of unit rays ([[def-nrqm-state-geometry-framework-state-space]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]).

## Proof

**Proof technique:** direct; use the scalar action of the permutation unitaries on the sector to prove the invariance of the preparation, transport it through the spectral measure of a relabelled observable by the unitary transport lemma, and compare the outcome laws with the cyclic property of the trace.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Invariance] Let $x,y\in\mathfrak H_n^\sigma$. By [F1] one has $U_\pi^{*}x=\operatorname{sgn}_\sigma(\pi)^{-1}x=\operatorname{sgn}_\sigma(\pi)x$ and likewise for $y$, so $\langle U_\pi\rho U_\pi^{*}x,y\rangle=\langle\rho U_\pi^{*}x,U_\pi^{*}y\rangle=\operatorname{sgn}_\sigma(\pi)^{2}\langle\rho x,y\rangle=\langle\rho x,y\rangle$ by the unitarity of $U_\pi$ and the sesquilinearity of the inner product. Since $x,y$ are arbitrary, $U_\pi\rho U_\pi^{*}=\rho$; multiplying this identity on the left by $U_\pi^{*}$ and on the right by $U_\pi$ and using $U_\pi^{*}U_\pi=I$ gives $U_\pi^{*}\rho U_\pi=\rho$ as well. This proves (a). [F1, F5, algebra]

1.2 [Sector-preserving case] If $A$ preserves the sector and $U_\pi AU_\pi^{*}=A$ on its domain for every $\pi$, then $A_\pi=A$ and clause (b) is vacuous for such $A$; the sector restriction of clause (e) of the sector definition is the quantity read on sector preparations, and its law agrees with the law of $A$ by [F2]. This is (c). [F1, F2, algebra]

2.1 [Relabelled laws] Fix $\pi$ and an assigned sharp observable $(A,u_A)$. Since $U_\pi$ is a bijective linear isometry of $H^{\otimes n}$ and $A$ is self-adjoint, [F3] gives that $A_\pi=U_\pi AU_\pi^{*}$ is self-adjoint on the domain $U_\pi D(A)$ with spectral measure $E_{A_\pi}(B)=U_\pi E_A(B)U_\pi^{*}$. Hence for every preparation $\rho$ and Borel $B$, $\mu^{A_\pi}_\rho(B)=\operatorname{tr}(\rho U_\pi E_A(B)U_\pi^{*})$ by [F2]. Because $\rho$ is trace class and $U_\pi E_A(B)$ is bounded, [F4] applied twice gives $\operatorname{tr}(\rho U_\pi E_A(B)U_\pi^{*})=\operatorname{tr}(U_\pi^{*}\rho U_\pi E_A(B))$; by step 1.1 the middle factor is $\rho$, so $\mu^{A_\pi}_\rho(B)=\operatorname{tr}(\rho E_A(B))=\mu^{A}_\rho(B)$, which is (b) in the general form; for bounded $A$ the same computation with $A$ in place of $E_A(B)$ gives the displayed trace identity. [F2, F3, F4, step 1.1, algebra]

3.1 [Assembly and scope] Step 1.1 proves (a), step 2.1 proves (b) and step 1.2 proves (c). The proof uses only the adopted sector of P6, the readings of P1 and P2, and the cited spectral and trace mathematics under the declared choice hypotheses; no measured invariance, no dynamics and no species assignment is asserted. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

- **What the theorem does and does not say.** The invariance is a property of
  every state the model declares on a sector, and it is what makes the tensor
  labels unobservable inside the model; it does not say that the labels are
  meaningless in intermediate manipulations, and it does not by itself force a
  permutation-invariant preparation into a sector, which is a separate
  question not treated here.
- **Relation to the occupation readout.** Every occupation readout of the
  declared finite-mode model is a sector quantity built from the operators
  $N_j$, which commute with all $U_\pi$ because they are diagonal in the
  product basis and count index occurrences
  ([[thm-nrqm-identical-particles-occupation-number-basis]] clause (d)); the
  exclusion consequences for those readouts are the subject of the next
  theorem of this page.
