---
id: pthm-nrqm-measurement-degenerate-eigenspace-update
aliases: [nrqm-measurement-degenerate-eigenspace-update]
kind: physics-theorem
domain: physics
title: "The Lueders update on a degenerate eigenspace preserves intra-eigenspace coherence"
status: draft
origin: pipeline
dependency_level: 10
deps: [def-axiom-of-choice, def-countable-choice, def-hilbert-orthogonal-projection, def-nrqm-measurement-framework-declared-measurements-and-instruments, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-rank-one-operator-calculus, lem-nrqm-measurement-selective-luders-update, lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues, pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles, post-nrqm-framework-ideal-conditional-measurement, post-nrqm-framework-observable-and-probability, post-nrqm-framework-state-and-composition]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-measurement-selective-luders-update: mathematical-premise
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles: physical-result
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional statement about the declared ideal sharp measurement of a bounded assigned sharp observable at a degenerate eigenvalue: the Lueders update by the eigenspace projection leaves a pure preparation inside that eigenspace unchanged, so no decoherence is induced inside the eigenspace and subsequent laws are those of the unmodified preparation. It asserts no apparatus realization and does not claim that a laboratory eigenvalue readout preserves coherence or that it resolves or fails to resolve the degeneracy in any particular device."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.3, printed pages 76-77 (degenerate spectrum: outcome probability as the sum of |a_n|^2 and collapse to the normalized superposition inside the eigenspace)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.4, printed page 15 (ideal measurement leaves the system in a state certain to yield the recorded value) and Section 7.4.2, printed pages 161-164 (successive measurements and their order dependence)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state postulate P1, the observable and probability postulate P2 and the ideal conditional-measurement postulate P3 ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[post-nrqm-framework-ideal-conditional-measurement]]), and assume the Axiom of Countable Choice and the Axiom of Choice, the hypotheses of the cited spectral mathematics. Let $A$ be a bounded assigned sharp observable of a system with state space $D(H)$ ([[def-nrqm-observables-framework-observable-and-outcome-law]]), with spectral projection-valued measure $E_{A}$ ([[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]]), and let $\lambda$ be an eigenvalue of $A$ with eigenspace $K=\ker(A-\lambda I)$ and $P:=E_{A}(\{\lambda\})$, the orthogonal projection of $H$ onto $K$. Declare the two-outcome ideal sharp measurement $(P,I-P)$, the **$\lambda$-readout** of $A$. Let $\psi\in K$ with $\|\psi\|=1$ and let $\rho=T_{\psi,\psi}$ be the pure state of $\psi$. Then:

**(a) Certainty and trivial update.** $p_{\lambda}=\operatorname{tr}(\rho P)=1$, and the conditional state after the outcome $\lambda$ is $\rho_{\lambda}=\rho$: the $\lambda$-readout leaves this preparation unchanged.

**(b) No disturbance inside the eigenspace.** For every assigned sharp observable $C$ and every Borel set $S\subseteq\mathbb R$, the outcome law of $C$ computed in the conditional state equals its law computed in $\rho$ ([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b)); in particular the $\lambda$-readout induces no decoherence or disturbance within the eigenspace.

**(c) Degenerate case: coherence is retained.** If $\dim K\ge2$ and $\psi=\alpha u+\beta v$ with $u,v$ orthonormal vectors of $K$ and $\alpha,\beta\in\mathbb C\setminus\{0\}$, then the conditional state is the coherent superposition $T_{\psi,\psi}$, not the mixture $|\alpha|^{2}T_{u,u}+|\beta|^{2}T_{v,v}$: for the bounded assigned sharp observable
$$W:=T_{w,w}-T_{w',w'},\qquad w:=\frac{u+v}{\sqrt2},\qquad w'=\frac{u-v}{\sqrt2},$$
the conditional state assigns probability $1$ to the value $+1$ of $W$ whenever $\alpha=\beta=1/\sqrt2$, i.e. whenever $\psi=w$, while the mixture $|\alpha|^{2}T_{u,u}+|\beta|^{2}T_{v,v}$ assigns probability $1/2$ to each of the values $+1$ and $-1$ of $W$.

**(d) Scope.** The update used here is the Lueders update with the eigenspace projection $P$ itself, as adopted in P3; no physical apparatus is asserted to perform the $\lambda$-readout without disturbance, and a declared apparatus that resolves the eigenspace further (a finer family of projections inside $K$) is a different declared measurement, not the coarse $\lambda$-readout.

## Facts & Assumptions

**Given:** The adopted postulates P1, P2, P3; a bounded assigned sharp observable $A$ with spectral PVM $E_{A}$; an eigenvalue $\lambda$ of $A$, its eigenspace $K$, and $P=E_{A}(\{\lambda\})$; a unit vector $\psi\in K$; the pure state $\rho=T_{\psi,\psi}$; unit vectors $u,v\in K$ with $\psi=\alpha u+\beta v$; the observables $W$, $w$, $w'$ of clause (c).

[F1] **Spectral atoms.** The projection $E_{A}(\{\lambda\})$ is the orthogonal projection of $H$ onto the eigenspace $\ker(A-\lambda I)$, and it is nonzero exactly when $\lambda$ is an eigenvalue of $A$ ([[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clause (a)).

[F2] **Lueders update and outcome law.** For a declared ideal sharp measurement $(P_{a})$ the outcome probabilities are $p_{a}=\operatorname{tr}(\rho P_{a})$, the conditional state is $\rho_{a}=P_{a}\rho P_{a}/p_{a}$ when $p_{a}>0$, and the law of a general assigned sharp observable $C$ in a preparation $\sigma$ is $\mu^{C}_{\sigma}(S)=\operatorname{tr}(\sigma E_{C}(S))$, equal to $\|E_{C}(S)\xi\|^{2}$ for $\sigma=T_{\xi,\xi}$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clauses (a)-(b), [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b), [[pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles]] clauses (a)-(b)).

[F3] **Selective update by a projection.** For a density operator $\sigma$, an orthogonal projection $Q$ with $\operatorname{tr}(\sigma Q)>0$, and $\xi$ a unit vector with $Q\xi=\xi$, the update of $T_{\xi,\xi}$ by $Q$ is $T_{\xi,\xi}$ ([[lem-nrqm-measurement-selective-luders-update]] clause (d), applied with $Q\xi=\xi$).

[F4] **Rank-one calculus and spectral projections.** $T_{x,y}$ is trace class with $\operatorname{tr}(T_{x,y})=\langle x,y\rangle$ and $\operatorname{tr}(ST_{x,y})=\langle Sx,y\rangle$ for trace-class $S$; for orthonormal $w,w'$ the operators $T_{w,w}$ and $T_{w',w'}$ are the orthogonal projections onto $\mathbb Cw$ and $\mathbb Cw'$, with $T_{w,w}T_{w',w'}=0$ ([[lem-nrqm-composites-rank-one-operator-calculus]], [[def-hilbert-orthogonal-projection]]).

[F5] **States of the model.** $T_{\psi,\psi}$ for $\|\psi\|=1$ is a state; a convex combination of states is a state ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]] clause (a), [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)).

## Proof

1.1 [Clause (a): certainty] By [F1] the orthogonal projection $P=E_{A}(\{\lambda\})$ has range $K$ and acts as the identity on $K$, so $P\psi=\psi$ and $\|P\psi\|^{2}=1$. The outcome law [F2] gives $p_{\lambda}=\operatorname{tr}(\rho P)=\|P\psi\|^{2}=1>0$, and the conditional state is $\rho_{\lambda}=P\rho P/p_{\lambda}=P T_{\psi,\psi}P=T_{P\psi,P\psi}=T_{\psi,\psi}=\rho$ by [F3] and the rank-one rule $PT_{\psi,\psi}P=T_{P\psi,P\psi}$ [F4]. This is (a). [given, F1, F2, F3, F4, algebra]

2.1 [Clause (b): unchanged laws] Fix an assigned sharp observable $C$ and a Borel set $S$. By [F2] its outcome law in the conditional state is $\mu^{C}_{\rho_{\lambda}}(S)=\operatorname{tr}(\rho_{\lambda}E_{C}(S))$; since $\rho_{\lambda}=\rho$ by step 1.1, this equals $\mu^{C}_{\rho}(S)$ for every $S$ and every $C$. No operation on the state separates the two computations, so the $\lambda$-readout induces no change within the eigenspace. This is (b). [step 1.1, F2, algebra]

2.2 [Clause (c): the coherence witness] Let $\psi=\alpha u+\beta v$ with $u,v$ orthonormal in $K$; then $P\psi=\psi$ and step 1.1 gives $\rho_{\lambda}=T_{\psi,\psi}$. The vectors $w=(u+v)/\sqrt2$ and $w'=(u-v)/\sqrt2$ are orthonormal, and $W=T_{w,w}-T_{w',w'}$ is bounded and self-adjoint with $Ww=w$, $Ww'=-w'$, so $T_{w,w}$ and $T_{w',w'}$ are its spectral projections at $+1$ and $-1$ and the value $0$ has projection $I-T_{w,w}-T_{w',w'}$ [F4]. For $\alpha=\beta=1/\sqrt2$ one has $\psi=w$, so by [F2] the conditional state assigns to the value $+1$ of $W$ the probability $\operatorname{tr}(T_{w,w}T_{w,w})=1$, while the mixture $\sigma=|\alpha|^{2}T_{u,u}+|\beta|^{2}T_{v,v}$ assigns to $+1$ the probability $|\alpha|^{2}\operatorname{tr}(T_{u,u}T_{w,w})+|\beta|^{2}\operatorname{tr}(T_{v,v}T_{w,w})=\tfrac12|\langle u,w\rangle|^{2}+\tfrac12|\langle v,w\rangle|^{2}=\tfrac12(\tfrac12+\tfrac12)=\tfrac12$, and to $-1$ the remaining probability $\tfrac12$; the two preparations therefore have different laws for the assigned sharp observable $W$. This is (c). [step 1.1, given, F2, F4, F5, algebra]

3.1 [Clause (d) and scope] The update used in steps 1.1-3.1 is the adopted Lueders update with $P=E_{A}(\{\lambda\})$ [F1, F2]; declarations with a finer family inside $K$ are different declared measurements and are not evaluated here, and no apparatus that realizes the $\lambda$-readout is asserted. This is (d). [step 2.2, given, F1, F2, algebra] ∎
