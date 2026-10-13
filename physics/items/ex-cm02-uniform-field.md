---
id: ex-cm02-uniform-field
kind: example
title: "The uniform-force model: explicit global motion of a label under a constant declared field, with uniqueness, dimensions and frame covariance"
status: published
origin: session
domain: physics
dependency_level: 12
deps: [post-cm02-force-superposition, def-cm02-newtonian-flow, pthm-cm02-ivp, pthm-cm02-continuation, post-cm01-worldlines, def-cm01-velocity-acceleration, def-cm01-units, def-locally-lipschitz-in-the-state-variable, def-vector-valued-derivative-and-integral, def-derivative, lem-derivative-of-a-power, thm-algebra-of-derivatives, pthm-cm01-galilean-kinematics]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  pthm-cm02-continuation: physical-result
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  pthm-cm01-galilean-kinematics: physical-result
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked verification inside the framework: for one labeled particle of the model, the force map that assigns to every state the same vector $m\\mathbf g$ (a declared constant field parameter of dimension length per time squared) satisfies the standing hypotheses of the force postulate; the explicit quadratic motion solves the initial-value problem, exists on the whole time window, is the unique maximal motion, and the model is covariant under changes of inertial frame with the parameter transforming as a spatial vector. The item is a computation inside the model: it asserts no measured value of any field strength, no property of the Earth's gravitational field and no empirical law, and the constant-field idealization is recorded as an approximation."
sources:
  references:
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed pages 1-2 (PDF pages 4-5): Newton's second law F_i = d(m_i rdot_i)/dt with initial data r_i(0) and rdot_i(0)"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Dynamics and Relativity, Section 2.1, printed page 12 (PDF page 18): uniform gravitational field F=-mg, potential V=mgz and the quadratic solution; Section 2.3.2, printed page 24 (PDF page 30): the near-surface approximation for height z much smaller than planetary radius R"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.2, chapter page 5 (PDF page 9): the gravity law (1.15) as an additional law beyond the equation of motion"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.2.1, printed page 5 (PDF page 11): under the boost x' = x + v t the acceleration transforms as a spatial vector, a' = R a"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
verification:
  precheck: pass
---

## Example

Work in the force model of [[post-cm02-force-superposition]] with $N$ labels,
time window $I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3N}$, fixed
masses $m_{1},\dots,m_{N}>0$, and fix a vector
$\mathbf g\in\mathbb R^{3}$ with dimension $[\mathbf g]=\ell\tau^{-2}$,
read in metres per second squared ([[def-cm01-units]]); $\mathbf g$ is a
**declared parameter** of the model, not a measured value. The **uniform-force
model** is the force map

$$F_{i}(t,x,v):=m_{i}\,\mathbf g\qquad(i=1,\dots,N),$$

constant in the state, so that every label has the same coordinate
acceleration $\mathbf g$ independently of its mass, position and velocity
([[def-cm02-newtonian-flow]]). Verify the following:

1. $F$ satisfies the standing continuity and state-local-Lipschitz hypotheses
   of clause (iii) of [[post-cm02-force-superposition]], with state-Lipschitz
   constant $0$ on every cylinder.
2. For the initial datum $x(0)=x_{0}$, $\dot x(0)=v_{0}$ the explicit curve,
   defined for every $t\in\mathbb R$,

   $$x_i(t)=x_{0,i}+v_{0,i}t+\tfrac12\mathbf g\,t^{2}\quad(i=1,\dots,N),\qquad x(t):=(x_1(t),\dots,x_N(t)).$$

   is a motion of the model on the whole time window $\mathbb R$ and is the
   unique maximal motion with this datum; its restriction to $[0,\infty)$ is
   therefore also a motion.
3. The dimension bookkeeping of the terms is consistent: the parameter has
   dimension length per time squared, the force components have dimension
   $\mu\ell\tau^{-2}$, and the quadratic term has dimension length.
4. Under a change of inertial frame the model is covariant: in the second
   frame the same interaction is again a uniform-force model with parameter
   $\mathbf g'=R\mathbf g$, $R\in SO(3)$.

## Facts & Assumptions

**Given:** The uniform-force model above, with parameters $m_{i}>0$ and $\mathbf g$, and the initial datum $(0,x_{0},v_{0})$.

[L1] The force model, the associated first-order field $\mathcal F$, motions and maximal motions are [[post-cm02-force-superposition]] and [[def-cm02-newtonian-flow]]; the standing regularity hypothesis is clause (iii) of the postulate, and the local existence, uniqueness, quantitative cylinder and maximal-motion conclusions are [[pthm-cm02-ivp]] clauses 1-4.

[L2] Componentwise differentiation of vector-valued curves ([[def-vector-valued-derivative-and-integral]]): a curve $t\mapsto\xi(t)\in\mathbb R^{3}$ is differentiable exactly when its three components are, and then $\xi'=(\xi_{1}',\xi_{2}',\xi_{3}')$; sums and scalar multiples are differentiated termwise ([[thm-algebra-of-derivatives]]), and $(t^{2})'=2t$, $(t)'=1$, and constants have derivative $0$ ([[lem-derivative-of-a-power]], [[def-derivative]]).

[L3] Under a change of inertial frame with parameters $(b,a_{0},v,R)$ the description $\eta$ of a motion satisfies $\eta''(t')=R\,\ddot x(t'-b)$ ([[pthm-cm01-galilean-kinematics]] clause 2).

[L4] Units and dimensions ([[def-cm01-units]]): $[\mathbf g]=\ell\tau^{-2}$, $[m_{i}\mathbf g]=\mu\ell\tau^{-2}$, and the derivative rule gives $[\dot x]=\ell\tau^{-1}$ and $[\ddot x]=\ell\tau^{-2}$.

## Verification

**Proof technique:** direct; check the standing hypotheses on the constant map, differentiate the displayed curve, apply the existence and uniqueness theorem, and compute the dimension and covariance statements.

1.1 The map $F_{i}(t,x,v)=m_{i}\mathbf g$ is constant on $D=\mathbb R\times\mathbb R^{3N}\times\mathbb R^{3N}$, hence continuous there; and for every pair of states $(t,z),(t,z')$ one has $\lVert F(t,z)-F(t,z')\rVert_{2}=0\le 0\cdot\lVert z-z'\rVert_{2}$, so the local-Lipschitz requirement of clause (iii) of [[post-cm02-force-superposition]] holds on every compact cylinder with constant $L=0$, in particular with a constant not depending on time; this proves claim 1. [given, L1, algebra]

1.2 Differentiate the displayed curve: by [L2] applied to each label's three components, $\dot x_i(t)=v_{0,i}+\mathbf g\,t$ and $\ddot x_i(t)=\mathbf g$ for every $t\in\mathbb R$; hence $m_{i}\ddot x_{i}(t)=m_{i}\mathbf g=F_{i}(t,x(t),\dot x(t))$ for every $i$, and $x(t)\in Q=\mathbb R^{3N}$, $t\in I_{0}=\mathbb R$; the initial values $x(0)=x_{0}$ and $\dot x(0)=v_{0}$ are immediate. By the equivalence of clause (c) of [[def-cm02-newtonian-flow]], $x$ is a motion of the model on $\mathbb R$. [given, L1, L2, algebra]

1.3 Dimensions: $[\mathbf g]=\ell\tau^{-2}$, so $[\tfrac12\mathbf g t^{2}]=\ell\tau^{-2}\cdot\tau^{2}=\ell$, matching the position dimension, and $[m_{i}\mathbf g]=\mu\ell\tau^{-2}$, matching the force dimension of clause (iii) of [[post-cm02-force-superposition]]; $[\dot x]=\ell\tau^{-1}$ and $[\ddot x]=\ell\tau^{-2}$ by the derivative rule of [[def-cm01-units]]; this proves claim 3. [given, L4, algebra]

2.1 The datum $(0,x_{0},v_{0})$ has exactly one maximal motion by [[pthm-cm02-ivp]] clause 4, and every motion with this datum is a restriction of it; since the motion of step 1.2 is defined on all of $\mathbb R=I_{0}$, it is itself maximal (any extension would have to agree with it where both are defined, so no strictly larger interval is possible), and it is the unique maximal motion; this proves claim 2, including existence on the whole time window. The alternatives of [[pthm-cm02-continuation]] are not needed here, but the agreement is consistent with its clause 3: global existence follows from the explicit formula without a compact-trapping assumption; for stationary data ($\mathbf g=0$ and $v_{0}=0$) the state is in fact compactly trapped. [step 1.2, L1]

3.1 Covariance: let a second inertial frame be related to the chosen one by $t'=t+b$, $x'=Rx+vt+a_{0}$ with $R\in SO(3)$, and let $\eta$ be the description of the motion of step 1.2 in that frame; by [L3], $\eta_{i}''(t')=R\,\ddot x_{i}(t'-b)=R\,\mathbf g$ for every $i$, so the second frame sees the same equation of motion with the constant vector $R\mathbf g$ in place of $\mathbf g$; hence the class of uniform-force models is covariant under changes of inertial frame, with the parameter transforming as a spatial vector under the rotation and unaffected by the translation, boost or time shift; this proves claim 4. [step 1.2, L3, algebra] ∎

## Remarks

- **The parameter is model data.** The computation above produces the quadratic motion for every declared $\mathbf g$; no numerical value is asserted and no measurement enters. Using a measured local field strength as $\mathbf g$ is an empirical premise with its own uncertainty and conditions, and the constant field itself is an approximation to any realistic field, as the recorded source material states.

- **No drag.** The model of this Example has no medium and no drag; adding the drag model [[post-cm02-drag]] changes the equation and the motion, and the companion example computes the resulting terminal-velocity approach.
