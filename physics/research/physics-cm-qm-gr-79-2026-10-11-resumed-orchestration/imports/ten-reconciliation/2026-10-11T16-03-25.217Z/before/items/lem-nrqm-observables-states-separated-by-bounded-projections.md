---
id: lem-nrqm-observables-states-separated-by-bounded-projections
aliases: [nrqm-observables-states-separated-by-bounded-projections]
kind: lemma
domain: mathematics
title: "Distinct density operators are separated by the law of a bounded rank-one projection"
status: draft
origin: pipeline
dependency_level: 3
deps: [def-axiom-of-choice, def-countable-choice, def-hilbert-orthogonal-projection, def-hilbert-space, lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-rank-one-operator-calculus, lem-nrqm-state-geometry-ray-to-rank-one-projection, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-is-absolutely-convergent-and-basis-independent]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-hilbert-space: mathematical-premise
  lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Sections 2.2 and 3.1, printed pages 58-67 and 88-95 (quadratic forms of self-adjoint operators, rank-one operators and their traces)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 (updated July 2015), Sections 2.2.1 and 2.3, printed pages 8-9 and 16-18 (the probability of an outcome as tr(rho P) and the Bloch-vector separation of qubit states)"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]); the Axiom of Choice is used only where the spectral theorem for unbounded self-adjoint operators is invoked ([[def-axiom-of-choice]]). Let $H$ be a nonzero complex Hilbert space ([[def-hilbert-space]]) and let $\rho,\sigma$ be density operators on $H$ with $\rho\ne\sigma$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)). Then:

(a) There is a unit vector $w\in H$ with $\langle\rho w,w\rangle\ne\langle\sigma w,w\rangle$.

(b) For the rank-one orthogonal projection $P:=T_{w,w}$ of [[lem-nrqm-composites-rank-one-operator-calculus]] ([[def-hilbert-orthogonal-projection]]), whose spectral projection-valued measure assigns $P$ to the Borel set $\{1\}$, the two scalar laws of [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (b) satisfy
$$\mu^{P}_{\rho}(\{1\})=\operatorname{tr}(\rho P)=\langle\rho w,w\rangle,\qquad \mu^{P}_{\sigma}(\{1\})=\operatorname{tr}(\sigma P)=\langle\sigma w,w\rangle,$$
so the bounded sharp observable $P$ assigns different outcome probabilities to $\rho$ and $\sigma$.

(c) For every unit vector $w$ and every self-adjoint trace-class $T$ one has $|\operatorname{tr}(TT_{w,w})|\le\|T\|_1$; in particular $|\langle\rho w,w\rangle-\langle\sigma w,w\rangle|\le\|\rho-\sigma\|_1$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and, for the spectral PVM of clause (b), the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]); a nonzero complex Hilbert space $H$; density operators $\rho,\sigma$ on $H$; unit vectors $w\in H$.

[F1] **Rank-one calculus.** $T_{u,v}x=\langle x,v\rangle u$ defines a trace-class operator with $\|T_{u,v}\|_1=\|u\|\,\|v\|$ and $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$; $T_{u,u}$ is self-adjoint and positive with $\langle T_{u,u}x,x\rangle=|\langle x,u\rangle|^{2}$ ([[lem-nrqm-composites-rank-one-operator-calculus]]).

[F2] **One-dimensional projections.** For $u\in S(H)$ the operator $T_{u,u}$ is the Hilbert orthogonal projection onto the one-dimensional subspace $\mathbb Cu$; in particular $T_{u,u}^{2}=T_{u,u}=T_{u,u}^{*}$ ([[lem-nrqm-state-geometry-ray-to-rank-one-projection]], [[def-hilbert-orthogonal-projection]]).

[F3] **Density operators and their law.** A density operator $\tau$ is self-adjoint, positive and trace class with $\operatorname{tr}\tau=1$, and admits an expansion $\tau=\sum_nt_nT_{v_n,v_n}$ with $t_n\ge0$, $\sum_nt_n=1$ and $(v_n)$ orthonormal; for every PVM $E$, $B\mapsto\operatorname{tr}(\tau E(B))$ is a probability measure with $\operatorname{tr}(\tau E(B))=\sum_nt_n\|E(B)v_n\|^{2}$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clauses (a) and (b)).

[F4] **Trace ideal and trace bounds.** Products of a trace-class operator with a bounded operator are trace class and $\|ATB\|_1\le\|A\|\,\|T\|_1\|B\|$; the trace is linear on trace-class operators with $|\operatorname{tr}S|\le\|S\|_1$ ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]] clause 2, [[thm-trace-is-absolutely-convergent-and-basis-independent]] clause 4).

[F5] **Quadratic form and norm.** For a bounded self-adjoint $T$ one has $\|T\|=\sup\{\,|\langle Tx,x\rangle|:\|x\|=1\,\}$, and the value is $0$ exactly when $T=0$ ([[lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form]]).

[F6] **Spectral PVM of a projection.** Every orthogonal projection $P$ is a self-adjoint operator with $0\le P\le I$; by the spectral theorem it has a unique regular PVM $E_P$ on the Borel sets of $\mathbb R$ with $P=\int\lambda\,dE_P(\lambda)$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

## Proof

1.1 [Quadratic forms separate trace-class states] Put $T:=\rho-\sigma$, a nonzero self-adjoint trace-class operator by [F3] and [F4]. Suppose $\langle Tw,w\rangle=0$ for every unit vector $w$; then the supremum of [F5] is $0$, so $\|T\|=0$ and $T=0$, contradicting $\rho\ne\sigma$. Hence there is a unit $w$ with $0\ne\langle(\rho-\sigma)w,w\rangle=\langle\rho w,w\rangle-\langle\sigma w,w\rangle$, proving (a). [given, F3, F4, F5, algebra]

1.2 [The trace pairing of a rank-one projection] Let $\tau=\sum_nt_nT_{v_n,v_n}$ be the expansion of a density operator and let $w$ be a unit vector. For each $n$, the product rule $T_{v_n,v_n}T_{w,w}=T_{v_n,\langle v_n,w\rangle w}$ holds by direct evaluation on any $x$: $T_{v_n,v_n}T_{w,w}x=\langle x,w\rangle\langle w,v_n\rangle v_n=T_{v_n,\langle v_n,w\rangle w}x$; hence by [F1] its trace is $\langle v_n,\langle v_n,w\rangle w\rangle=|\langle v_n,w\rangle|^{2}$. Multiplying by $t_n$, summing and using the trace ideal and trace bound [F4] together with $\sum_nt_n\|v_n\|^{2}\|w\|^{2}=1$ gives the absolutely convergent identity $\operatorname{tr}(\tau T_{w,w})=\sum_nt_n|\langle v_n,w\rangle|^{2}$. On the other hand $\langle\tau w,w\rangle=\sum_nt_n\langle T_{v_n,v_n}w,w\rangle=\sum_nt_n|\langle w,v_n\rangle|^{2}$ by [F1] and continuity of the pairing against the norm convergent series. Since $|\langle w,v_n\rangle|=|\langle v_n,w\rangle|$, the two series agree: $\operatorname{tr}(\tau T_{w,w})=\langle\tau w,w\rangle$ for every density operator $\tau$. [given, F1, F3, F4, algebra]

2.1 [The projection separates the two states] Fix a unit $w$ with $\langle\rho w,w\rangle\ne\langle\sigma w,w\rangle$, furnished by step 1.1, and put $P:=T_{w,w}$, an orthogonal projection by [F2]. The map $E'(B):=\mathbf 1_{1\in B}P+\mathbf 1_{0\in B}(I-P)$ is a regular PVM on the Borel sets of $\mathbb R$ with $\int\lambda\,dE'(\lambda)=1\cdot P+0\cdot(I-P)=P$: the values are orthogonal projections with $E'(\varnothing)=0$ and $E'(\mathbb R)=I$, multiplicativity holds because $P(I-P)=0$, and countable additivity holds on the two-point space $\{0,1\}$. By uniqueness in the spectral theorem [F6], $E'$ is the spectral PVM of $P$, so $E_P(\{1\})=P$ and $\mu^{P}_{\tau}(\{1\})=\operatorname{tr}(\tau P)$ for every density operator $\tau$ by [F3]. Step 1.2 identifies these numbers as $\langle\rho w,w\rangle$ and $\langle\sigma w,w\rangle$, which differ by the choice of $w$; this proves (b). [step 1.1, step 1.2, F2, F3, F6, algebra]

3.1 [The uniform bound] Let $w$ be a unit vector and let $T$ be self-adjoint trace class. By [F2] and [F4], $\|T_{w,w}\|\le\|T_{w,w}\|_1=1$ and $|\operatorname{tr}(TT_{w,w})|\le\|TT_{w,w}\|_1\le\|T\|_1$; applying this to $T=\rho-\sigma$ and using step 1.2 gives $|\langle\rho w,w\rangle-\langle\sigma w,w\rangle|=|\operatorname{tr}((\rho-\sigma)T_{w,w})|\le\|\rho-\sigma\|_1$, which is (c); the existence statement of (a) and the separating probability identity of (b) are steps 1.1 and 2.1. [step 1.1, step 1.2, step 2.1, F2, F4, algebra] ∎
