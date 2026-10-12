---
id: pthm-cm03-centre-of-mass-and-kinetic-splitting
kind: physics-theorem
title: "Total momentum equals total mass times centre-of-mass velocity, and the kinetic energy splits into centre-of-mass and relative parts (two-body reduced mass)"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [def-cm03-centre-of-mass-and-momenta, thm-cm-center-of-mass-and-kinetic-splitting, post-cm02-force-superposition, def-cm01-units, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval, lem-finite-sum-laws]
dependency_roles:
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  thm-cm-center-of-mass-and-kinetic-splitting: mathematical-premise
  post-cm02-force-superposition: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The algebraic identities of a curve family of a force model in one inertial frame: the total momentum is the total mass times the centre-of-mass velocity, the mass-weighted relative positions sum to zero together with their derivatives, and the total kinetic energy equals the centre-of-mass kinetic energy plus the mass-weighted relative kinetic energy, with the two-body reduced-mass form. The result is a conditional identity for the model's masses and curves and asserts no conservation law, no force structure and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3, Eqs. (1.15) and (1.22)-(1.23), printed pages 6-8 (PDF pages 12-14): the centre of mass R = sum_i m_i r_i / M and the kinetic-energy decomposition T = (1/2) M Rdot^2 + (1/2) sum_i m_i rtilde_i^2"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, Eqs. (3.30)-(3.35), printed pages 40-42: the centre-of-mass and reduced-mass construction for two bodies"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the force model, the inertial frame and the notation of
[[def-cm03-centre-of-mass-and-momenta]]: masses $m_{1},\dots,m_{N}>0$, a
curve family $x:J\to Q$ of class $C^{2}$ on an interval $J$ with nonempty
interior, coordinate velocities $w_{i}=x_{i}'$, and the quantities
$$M=\sum_{i}m_{i},\qquad P=\sum_{i}m_{i}w_{i},\qquad X=M^{-1}\sum_{i}m_{i}x_{i},\qquad \rho_{i}=x_{i}-X,\qquad V=X',\qquad K=\frac12\sum_{i}m_{i}\lVert w_{i}\rVert_{2}^{2}.$$
Then:

1. $P=MV$ on $J$, that is $X'=M^{-1}P$, and the identities
   $$\sum_{i}m_{i}\rho_{i}=0,\qquad \sum_{i}m_{i}\rho_{i}'=0$$
   hold on $J$;
2. for every $t\in J$,
   $$K(t)=\frac12M\lVert V(t)\rVert_{2}^{2}+\frac12\sum_{i}m_{i}\lVert\rho_{i}'(t)\rVert_{2}^{2};$$
3. if $N=2$, then with $r:=x_{1}-x_{2}$ and $\mu:=m_{1}m_{2}/M$ one has, for
   every $t\in J$,
   $$K(t)=\frac12M\lVert V(t)\rVert_{2}^{2}+\frac12\mu\lVert r'(t)\rVert_{2}^{2}.$$

The statement is an identity for the stated curves and masses in the fixed
frame; it uses no equation of motion, no property of the force map and no
conservation claim. The values are frame-dependent; the transformation laws
are the frame-transformation item of this page.

## Facts & Assumptions

**Given:** A force model of [[post-cm02-force-superposition]], one inertial frame, a $C^{2}$ curve family $x:J\to Q$, and the masses $m_{i}>0$.

[L1] Model and notation ([[def-cm03-centre-of-mass-and-momenta]]): $M$, $P$, $X$, $\rho_{i}$, $V$ and $K$ are defined by the displayed finite sums from $x$ and the masses; $x_{i}$ is $C^{2}$; $w_{i}=x_{i}'$; dimensions are read by [[def-cm01-units]].

[L2] Mathematical supplier ([[thm-cm-center-of-mass-and-kinetic-splitting]]): for $N\ge1$, an interval $I$ with at least two points, masses $m_{i}>0$ and curves $x_{i}:I\to\mathbb R^{3}$ differentiable at every point, the centre $X=M^{-1}\sum_{i}m_{i}x_{i}$ and the relative positions $\rho_{i}=x_{i}-X$ are differentiable with $X'=M^{-1}\sum_{i}m_{i}x_{i}'$ and $\rho_{i}'=x_{i}'-X'$; the identities $\sum_{i}m_{i}\rho_{i}=0$ and $\sum_{i}m_{i}\rho_{i}'=0$ hold; and for every point $$\sum_{i}m_{i}\lVert x_{i}'\rVert_{2}^{2}=M\lVert X'\rVert_{2}^{2}+\sum_{i}m_{i}\lVert\rho_{i}'\rVert_{2}^{2},$$ with the two-body case $\sum_{i}m_{i}\lVert\rho_{i}'\rVert_{2}^{2}=\mu\lVert r'\rVert_{2}^{2}$ for $r=x_{1}-x_{2}$, $\mu=m_{1}m_{2}/M$.

[L3] The Euclidean norm satisfies $\lVert u\rVert_{2}^{2}=\langle u,u\rangle$ and scalar factors pull out of finite sums ([[def-euclidean-inner-product]], [[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct; apply the mathematical supplier to the model's curves and masses and translate its notation through the definition.

1.1 The interval $J$ has nonempty interior, hence at least two points, and each $x_{i}$ is differentiable on $J$ ([[def-interval]], [[def-vector-valued-derivative-and-integral]]); so the hypotheses of [L2] are met with $I:=J$. Its first clause gives differentiability of $X$ and each $\rho_{i}$, the formula $X'=M^{-1}\sum_{i}m_{i}x_{i}'$, the formula $\rho_{i}'=x_{i}'-X'$, and the identities $\sum_{i}m_{i}\rho_{i}=0$ and $\sum_{i}m_{i}\rho_{i}'=0$ on $J$. [given, L2]

2.1 Writing $x_{i}'=w_{i}$ by [L1], the formula of step 1.1 reads $X'=M^{-1}\sum_{i}m_{i}w_{i}=M^{-1}P$, so $P=MV$ and $X'=M^{-1}P$; together with step 1.1 this is clause 1. [step 1.1, L1, algebra]

3.1 Clause 2: multiply the splitting identity of [L2] by $\frac12$ and substitute $x_{i}'=w_{i}$ and $X'=V$; the left side is $K$ by [L1], and the two right-hand terms are $\frac12M\lVert V\rVert_{2}^{2}$ and $\frac12\sum_{i}m_{i}\lVert\rho_{i}'\rVert_{2}^{2}$. [step 2.1, L1, L2, L3, algebra]

4.1 Clause 3: for $N=2$, the two-body clause of [L2] gives $\sum_{i}m_{i}\lVert\rho_{i}'\rVert_{2}^{2}=\mu\lVert r'\rVert_{2}^{2}$ with $r=x_{1}-x_{2}$ and $\mu=m_{1}m_{2}/M$; substituting into step 3.1 gives the displayed two-body splitting. [step 3.1, L2, algebra] ∎

## Remarks

- **The splitting is instantaneous.** Clause 2 is an identity at each time between the kinetic sums, not a decomposition of the motion; the two terms are not separately conserved in general, and no force hypothesis enters.

- **Frame dependence.** The identity holds in every inertial frame with that frame's $X$ and $\rho_{i}$. Under a Galilean change, $V$ gains the boost velocity while each relative velocity $\rho_i'$ is rotated without a boost; thus the centre-of-mass kinetic term generally changes and the relative kinetic term is unchanged. The total kinetic-energy law is [[pthm-cm03-frame-transformations]] clause 2.
