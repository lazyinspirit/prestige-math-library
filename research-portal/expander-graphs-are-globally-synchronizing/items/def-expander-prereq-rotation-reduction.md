---
id: def-expander-prereq-rotation-reduction
kind: definition
title: Diagonal phase rotations and relative-phase coordinates
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
  - math:def-quotient-topology
  - math:def-product-topology
  - math:def-homeomorphism-and-open-maps
dependency_roles:
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  math:def-quotient-topology: mathematical-premise
  math:def-product-topology: mathematical-premise
  math:def-homeomorphism-and-open-maps: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Definition

Let $V$ be a nonempty finite set and $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ be the phase torus. A phase is a real number modulo $2\pi$; write its addition and subtraction using representatives modulo $2\pi$. For a phase $c$, the diagonal rotation $R_c:T_V\to T_V$ is defined by $(R_c\theta)_x=\theta_x+c$ for every $x\in V$. Two configurations are rotation equivalent, written $\theta\sim\phi$, if $\phi=R_c\theta$ for some phase $c$. Give the set $Q=T_V/{\sim}$ the quotient topology and write $p:T_V\to Q$ for its projection.

Fix $v_0\in V$. The relative-phase map is $r(\theta)=(\theta_x-\theta_{v_0})_{x\in V\setminus\{v_0\}}$. Its induced map $\bar r:Q\to T_{V\setminus\{v_0\}}$ is a homeomorphism. If $V=\{v_0\}$, the target is the one-point empty product. A function of phase differences means a function whose value depends only on the family $(\theta_x-\theta_y)_{x,y\in V}$; it has a unique induced function on $Q$.

The phasor average is $m(\theta)=|V|^{-1}\sum_{x\in V}e^{i\theta_x}$. If $m(\theta)\ne0$, an argument is a phase $a$ with $e^{ia}=m(\theta)/|m(\theta)|$; the rotation $R_{-a}$ makes the average positive real. At zero average no argument or preferred rotation is specified. A rotating coordinate frame with angular velocity $\omega\in\mathbb R$ replaces a time-dependent configuration $\theta(t)$ by $R_{-\omega t}\theta(t)$, where $-\omega t$ is read modulo $2\pi$.

## Facts & Assumptions

[F1] The phase torus is a finite product of circle quotients, with quotient charts obtained from real representatives; the quotient projection is continuous and open ([[def-expander-prereq-phase-torus]]).

[F2] For real angles, $e^{i(u+v)}=e^{iu}e^{iv}$, $|e^{iu}|=1$, and the phasor is unchanged by adding a multiple of $2\pi$ ([[def-expander-prereq-phasor-calculus]]).

[F3] A map from a quotient is continuous exactly when its composite with the quotient projection is continuous. Finite product maps are continuous when their coordinate maps are continuous ([[math:def-quotient-topology]], [[math:def-product-topology]]).

[F4] A homeomorphism is a continuous bijection whose inverse is continuous ([[math:def-homeomorphism-and-open-maps]]).

## Justification

**Given:** A nonempty finite $V$, a vertex $v_0\in V$, and the constructions in the definition.

**Goal:** Verify the rotation relation, relative-coordinate homeomorphism, descent, normalization, and rotating-frame description.

1.1 Addition modulo $2\pi$ is independent of the chosen representatives. It gives $R_0\theta=\theta$ and $R_cR_d\theta=R_{c+d}\theta$, with inverse $R_{-c}$; hence rotation equivalence is an equivalence relation. Each difference $\theta_x-\theta_y$ is unchanged by a common rotation, so $r$ is constant on equivalence classes. It therefore defines $\bar r$ uniquely by $\bar r(p(\theta))=r(\theta)$. [F1, algebra]

2.1 Define $s:T_{V\setminus\{v_0\}}\to T_V$ by $s(z)_{v_0}=0$ and $s(z)_x=z_x$ otherwise. Then $r(s(z))=z$, while $s(r(\theta))=R_{-\theta_{v_0}}\theta$. Consequently $p\circ s$ and $\bar r$ are inverse bijections. When $V$ has one element, the same formulas use the unique empty tuple and show that $Q$ has one point. [step 1.1, construct, algebra]

3.1 In quotient charts, each coordinate of $r$ is represented locally by subtraction of real coordinates followed by the circle quotient projection, so $r$ is continuous; $s$ is continuous by its constant and coordinate components. The quotient criterion makes $\bar r$ continuous, and $p\circ s$ is continuous. Thus the inverse bijections in step 2.1 are homeomorphisms. Any function depending only on differences is constant on each orbit and therefore has a unique set-theoretic factor through $p$; if that function is continuous, its factor is continuous by the same quotient criterion. [F1, F3, F4, step 1.1, step 2.1]

4.1 By the phasor addition law, $m(R_c\theta)=e^{ic}m(\theta)$. For nonzero $m$, the circle parametrization in [F1] supplies a phase $a$ with $e^{ia}=m/|m|$; then $m(R_{-a}\theta)=|m|>0$. Such a phase is unique modulo $2\pi$. If $m=0$, every rotation leaves the average zero, so this normalization selects no rotation. Finally, $R_{-\omega t}$ subtracts the same phase from every coordinate and therefore leaves all relative phases unchanged. [F1, F2, step 1.1, algebra] ∎
