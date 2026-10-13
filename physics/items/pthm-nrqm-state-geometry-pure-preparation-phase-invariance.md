---
id: pthm-nrqm-state-geometry-pure-preparation-phase-invariance
kind: physics-theorem
domain: physics
title: "Pure preparations are well defined by their rays, and phase factors do
  not change their states"
status: published
origin: pipeline
dependency_level: 7
deps:
  [
    post-nrqm-framework-state-and-composition,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-state-vectors-and-rays,
    lem-nrqm-state-geometry-normalization-and-phase-classes,
    lem-nrqm-state-geometry-ray-to-rank-one-projection,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-composites-rank-one-operator-calculus,
    cor-inner-product-induces-a-norm,
    def-countable-choice
  ]
dependency_roles:
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-state-vectors-and-rays: mathematical-premise
  lem-nrqm-state-geometry-normalization-and-phase-classes: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A model-internal well-definedness statement about the state
  assignment of the non-relativistic quantum framework: with the state postulate
  adopted, the pure preparation of a nonzero state vector is independent of the
  chosen representative of its ray, phase-equivalent unit representatives yield
  the same pure state, distinct rays yield distinct pure states, and the zero
  vector is assigned no preparation or state. The item makes no empirical claim,
  asserts no dynamics or probability law, and does not assert that any
  particular laboratory procedure prepares a ray."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter
        2 (updated July 2015), Section 2.1, printed page 4: rays are equivalence
        classes of vectors differing by a nonzero complex scalar, normalized
        representatives give the same state, and |psi> and e^{i alpha}|psi>
        describe the same state"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        1.3.4, printed page 12: normalization of a state and the global phase
        convention"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1 of the framework ([[post-nrqm-framework-state-and-composition]]) and use the state-space vocabulary of [[def-nrqm-state-geometry-framework-state-space]]. Assume the Axiom of Countable Choice ([[def-countable-choice]]), which is the choice hypothesis of the rank-one suppliers cited below. Let $H\ne\{0\}$ be the Hilbert space assigned to a declared system, let $\psi,\varphi\in H^{\times}$ be nonzero state vectors, and let $[\psi],[\varphi]$ be their rays. Then:

(a) **Representative independence.** If $\varphi=z\psi$ for some nonzero $z\in\mathbb C$, then the normalized rank-one operators agree,
$$\frac{T_{\varphi,\varphi}}{\|\varphi\|^{2}}=\frac{T_{\psi,\psi}}{\|\psi\|^{2}}=T_{\nu(\psi),\nu(\psi)},$$
and this operator is a pure state. In particular the density operator associated with a pure preparation depends only on the ray $[\psi]$ and not on the representative used to name it.

(b) **Phase invariance and injectivity.** If $u,w\in S(H)$ are unit representatives of the same ray, then $w=\zeta u$ for a unique $\zeta\in U(1)$ and $T_{w,w}=T_{u,u}$; conversely, if two pure preparations $[\psi]\ne[\varphi]$ are distinct, then their assigned pure states are distinct. Hence the assignment $[\psi]\mapsto T_{\nu(\psi),\nu(\psi)}$ is a bijection from the set of pure preparations onto the set of pure states.

(c) **Exclusion of the zero vector.** The zero vector is not a pure preparation of the model: it has no unit representative, the normalization map is undefined at it, the operator $T_{0,0}=0$ has trace $0$ and is not a density operator, and the state postulate assigns pure preparations only to unit rays of vectors of norm one. Consequently no pure preparation and no state is assigned to $0$.

## Facts & Assumptions

**Given:** The adopted state postulate P1 with its Hilbert-space assignment $H$ to the declared system; nonzero state vectors $\psi,\varphi$ and unit representatives $u,w$; the ray $[\psi]$ and normalization $\nu$ of [[def-nrqm-state-geometry-state-vectors-and-rays]].

[F1] **The state postulate** ([[post-nrqm-framework-state-and-composition]] clauses (i)-(iii)): the model assigns to the system a nonzero separable complex Hilbert space $H$; a pure preparation is a unit ray $[\psi]=\{z\psi:z\ne0\}$ with $\|\psi\|=1$, two nonzero vectors describing the same pure preparation exactly when they differ by a nonzero complex factor; a general preparation is a density operator; the zero vector is not a state and no preparation is assigned to it; and the rank-one operator $T_{\psi,\psi}$ is the density operator associated with the ray of the unit vector $\psi$.

[F2] **State-space vocabulary** ([[def-nrqm-state-geometry-framework-state-space]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]): the state assigned to a nonzero vector is the normalized rank-one operator $T_{\psi,\psi}/\|\psi\|^{2}=T_{\nu(\psi),\nu(\psi)}$, the pure states are the operators $T_{u,u}$ with $u\in S(H)$, and $D(H)$ consists of the density operators of trace one.

[F3] **Rank-one scaling and equality** ([[lem-nrqm-state-geometry-ray-to-rank-one-projection]], [[lem-nrqm-composites-rank-one-operator-calculus]] clauses (a)-(c)): $T_{z\psi,z\psi}=|z|^{2}T_{\psi,\psi}$ for $z\ne0$; $T_{\psi,\psi}=\|\psi\|^{2}T_{\nu(\psi),\nu(\psi)}$; $T_{\psi,\psi}=T_{\varphi,\varphi}$ holds exactly when $\|\psi\|=\|\varphi\|$ and $[\psi]=[\varphi]$; and for unit $u,w$, $T_{u,u}=T_{w,w}$ holds exactly when $w=\zeta u$ for some $\zeta\in U(1)$.

[F4] **Normalization and phases** ([[lem-nrqm-state-geometry-normalization-and-phase-classes]]): $\nu(\psi)\in[\psi]\cap S(H)$, $[\psi]=[\varphi]$ holds exactly when $\nu(\varphi)=\zeta\nu(\psi)$ for a unique $\zeta\in U(1)$, and for unit $u,w$ one has $[u]=[w]$ exactly when $w=\zeta u$ with unique $\zeta\in U(1)$.

[F5] **Norms** ([[cor-inner-product-induces-a-norm]]): $\|z\psi\|=|z|\,\|\psi\|$, $\|\psi\|=0$ exactly for $\psi=0$, and $\|\psi\|\ge0$. In particular $\|0\|=0$, so the scalar $\|\psi\|^{-1}$ used in the normalization is defined only for nonzero $\psi$.

[F6] **Rank-one trace, including zero** ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (b)-(c)): for all $x,y\in H$, including zero, $T_{x,y}$ is trace class and $\operatorname{tr}(T_{x,y})=\langle x,y\rangle$; its defining formula gives $T_{0,0}=0$.

## Proof

1.1 [(a) representative independence] Let $\varphi=z\psi$ with $z\ne0$. By [F3] one has $T_{\varphi,\varphi}=T_{z\psi,z\psi}=|z|^{2}T_{\psi,\psi}$, and by [F5] the squared norms satisfy $\|\varphi\|^{2}=|z|^{2}\|\psi\|^{2}$ with $|z|^{2}\ne0$; dividing the first identity by the second gives $T_{\varphi,\varphi}/\|\varphi\|^{2}=T_{\psi,\psi}/\|\psi\|^{2}$, and the second identity of [F3] identifies the common value as $T_{\nu(\psi),\nu(\psi)}$, which is a pure state by [F2]. Thus the operator depends only on the ray. [given, F1, F2, F3, F5, algebra]

1.2 [(b) phase representatives give the same state] Let $u,w\in S(H)$ lie in the same ray. By [F4] one has $w=\zeta u$ for a unique $\zeta\in U(1)$; then $T_{w,w}=T_{\zeta u,\zeta u}=|\zeta|^{2}T_{u,u}=T_{u,u}$ by [F3]. Hence multiplying a unit representative by a phase factor does not change the assigned pure state, in agreement with clause (ii) of [F1], which identifies the pure preparation only up to a nonzero complex factor. [given, F1, F3, F4, algebra]

2.1 [(b) injectivity of the assignment] Suppose two pure preparations $[\psi],[\varphi]$ have the same assigned pure state, that is $T_{\nu(\psi),\nu(\psi)}=T_{\nu(\varphi),\nu(\varphi)}$. Since $\nu(\psi),\nu(\varphi)\in S(H)$, [F3] gives $\nu(\varphi)=\zeta\nu(\psi)$ for some $\zeta\in U(1)$, and [F4] then gives $[\varphi]=[\psi]$. Hence the assignment is injective, and it is surjective onto the set of pure states by [F2]; so it is a bijection from the pure preparations onto the pure states. [given, step 1.2, F2, F3, F4, algebra]

3.1 [(c) the zero vector] By [F5], $\|0\|=0$, so the normalization map $\nu(\psi)=\|\psi\|^{-1}\psi$ is undefined at $\psi=0$ because the scalar $\|\psi\|^{-1}$ does not exist; the ray of $0$ would be $\{z\cdot 0:z\ne0\}=\{0\}$, which contains no unit vector, so clause (ii) of [F1] assigns no pure preparation to it. Moreover $T_{0,0}=0$ has $\operatorname{tr}(T_{0,0})=\langle0,0\rangle=0$ by [F6], so it is not a density operator of trace one and hence not an element of $D(H)$ by [F2]; clause (iii) of [F1] likewise assigns no general preparation to $0$. This proves (c) and completes (a)-(c). [given, step 1.1, F1, F2, F5, F6, algebra] ∎
