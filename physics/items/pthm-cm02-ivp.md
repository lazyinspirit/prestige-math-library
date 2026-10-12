---
id: pthm-cm02-ivp
kind: physics-theorem
title: "Local existence and uniqueness for the Newtonian initial-value problem, with the quantitative Picard-Lindelöf cylinder"
status: draft
origin: session
domain: physics
dependency_level: 10
deps: [post-cm02-force-superposition, def-cm02-newtonian-flow, def-cm01-configuration, def-first-order-ode-initial-value-problem-and-solution, def-locally-lipschitz-in-the-state-variable, def-maximal-ode-solution, thm-picard-lindelof-local-existence-and-uniqueness, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-extreme-value-metric]
dependency_roles:
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The local existence, uniqueness and maximal-extension statement for the adopted Newtonian force model of [[post-cm02-force-superposition]] on an open configuration domain: every initial datum with a configuration in the domain and an arbitrary coordinate velocity admits a unique motion through it, locally in time, and there is a unique maximal motion of which every motion with that datum is a restriction. The result is a conditional deduction from the adopted force postulate and the cited mathematical ODE theorems; it gives no global existence, no bound on the interval, no empirical statement and no claim that any physical system realizes the model."
sources:
  references:
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 7.1.1, printed page 143 (PDF page 146): the first-order form of the equations of motion and the local existence and uniqueness theorem stated for continuously differentiable right-hand sides, with deterministic evolution from it"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.1 and Theorem 2.2: the Picard-Lindelöf local existence and uniqueness theorem and the maximal domain of solutions"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): the second-order Newtonian equation of motion in an inertial frame"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the force model of [[post-cm02-force-superposition]]: time window
$I_{0}$, open configuration domain $Q\subseteq\mathbb R^{3N}$, masses
$m_{1},\dots,m_{N}>0$, and a force map $F$ continuous and locally Lipschitz in
the state variable, locally uniformly in time, on
$D=I_{0}\times Q\times(\mathbb R^{3})^{N}$. Let
$\mathcal F(t,x,v)=\bigl(v,\mathsf M^{-1}F(t,x,v)\bigr)$ be the associated
first-order field and let motions and maximal motions be as in
[[def-cm02-newtonian-flow]]. Fix an initial datum
$(t_{0},x_{0},v_{0})\in I_{0}\times Q\times(\mathbb R^{3})^{N}$ and write
$z_{0}=(x_{0},v_{0})$.

1. **Local existence.** There is $h>0$ and there is a motion $x$ of the model
   on $[t_{0}-h,t_{0}+h]$ with $x(t_{0})=x_{0}$ and $\dot x(t_{0})=v_{0}$;
   moreover such a motion is exactly one of class $C^{2}$ satisfying
   $m_{i}\ddot x_{i}(t)=F_{i}(t,x(t),\dot x(t))$ for all $i$ and all
   $t\in[t_{0}-h,t_{0}+h]$.
2. **Uniqueness.** If $x:J\to Q$ and $\tilde x:\tilde J\to Q$ are motions of
   the model with the same initial datum,
   $x(t_{0})=\tilde x(t_{0})=x_{0}$ and $\dot x(t_{0})=\dot{\tilde x}(t_{0})=v_{0}$,
   then $x=\tilde x$ on $J\cap\tilde J$.
3. **Quantitative cylinder.** Let $h,r>0$ satisfy
   $C:=[t_{0}-h,t_{0}+h]\times\overline B(z_{0},r)\subseteq D$, put
   $M:=\sup\{\lVert\mathcal F(t,z)\rVert_{2}:(t,z)\in C\}$ and let $\Lambda$
   be a state-Lipschitz constant of $\mathcal F$ on $C$. If $hM\le r$ and
   $\Lambda h<1$, then there is exactly one motion on $[t_{0}-h,t_{0}+h]$
   through the datum whose state graph $(t,(x(t),\dot x(t)))$ lies in $C$, and
   every motion through the datum agrees with it on the intersection of its
   interval with $[t_{0}-h,t_{0}+h]$.
4. **Maximal motion.** There is exactly one maximal motion with the datum:
   its maximal interval $J_{\max}$ is an open interval containing $t_{0}$ and
   contained in $I_{0}$, and every motion with the datum is its restriction.

The statement is conditional on the adopted force model: clause 1 locates a
solution only near $t_{0}$ and bounds no interval length in terms of the data,
clause 4 asserts no completeness of $J_{\max}$ in $I_{0}$, and no empirical
content is claimed.

## Facts & Assumptions

**Given:** The force model of the statement, its associated field $\mathcal F$
on the open set $D$, the initial datum $(t_{0},x_{0},v_{0})$, and, for
clause 3, the numbers $h,r,M,\Lambda$ of the statement.

[L1] The associated first-order system, motions and their equivalence, initial
data, maximal motions and maximal intervals, and the Newtonian flow are
[[def-cm02-newtonian-flow]]; the state is $z=(x,v)\in D$ and its norm is the
Euclidean norm of the concatenation $(\mathbb R^{3N}\times\mathbb R^{3N})$
([[def-euclidean-inner-product]]), so that
$\lVert z\rVert_{2}^{2}=\lVert x\rVert_{2}^{2}+\lVert v\rVert_{2}^{2}$.

[L2] Force-model hypotheses ([[post-cm02-force-superposition]], clauses (i),
(iii)): $I_{0}$ is an open nondegenerate interval; $Q$ is open; $m_{i}>0$; $F$
is continuous on $D$ and locally Lipschitz in the state variable $(x,v)$,
locally uniformly in time
([[def-locally-lipschitz-in-the-state-variable]]): every compact cylinder
$C\subseteq D$ carries a finite $L$ with
$\lVert F(t,z)-F(t,z')\rVert_{2}\le L\lVert z-z'\rVert_{2}$ whenever
$(t,z),(t,z')\in C$ share a time coordinate.

[L3] Picard–Lindelöf
([[thm-picard-lindelof-local-existence-and-uniqueness]]): if
$[t_{0}-h,t_{0}+h]\times\overline B(z_{0},r)\subseteq D$ for a continuous
field $G$ that is locally Lipschitz in the state variable, if $\lVert G\rVert_{2}\le M$
and $G$ has state-Lipschitz constant $L$ on that cylinder, and if $hM\le r$
and $Lh<1$, then exactly one solution of $z'=G(t,z)$, $z(t_{0})=z_{0}$ exists
on $[t_{0}-h,t_{0}+h]$ whose graph lies in the cylinder; any two solutions
through the same initial data agree on every common subinterval containing
$t_{0}$.

[L4] Maximal solutions
([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]],
[[def-maximal-ode-solution]]): every initial value problem satisfying the
Picard–Lindelöf hypotheses has a unique maximal solution, its domain is an
open interval containing the initial time, and every other solution through
the same data is its restriction.

[L5] The Euclidean norm is a norm on $\mathbb R^{m}$, so it satisfies the
triangle inequality and absolute homogeneity
([[thm-cauchy-schwarz-and-the-euclidean-norm]]); in particular
$\lVert v-v'\rVert_{2}\le\lVert z-z'\rVert_{2}$ for states $z=(x,v)$,
$z'=(x',v')$.

[L6] A continuous real-valued function on a nonempty compact metric space
attains its bounds ([[thm-extreme-value-metric]]), so the supremum $M$ of
clause 3 is finite and is attained.

## Proof

**Proof technique:** direct; verify the Picard–Lindelöf hypotheses for the
associated first-order field, apply the theorem, and translate its solution
back to the second-order motion.

1.1 $\mathcal F$ is continuous on $D$: its first component is the linear map $(x,v)\mapsto v$, and its second is the composition of the continuous map $F$ with the linear map $\mathsf M^{-1}$, so both components are continuous ([L1], [L2], algebra). $\mathcal F$ is locally Lipschitz in the state variable, locally uniformly in time: let $C\subseteq D$ be a compact time-state cylinder and let $L$ be a state-Lipschitz constant of $F$ on $C$ ([L2]); then for $(t,z),(t,z')\in C$ with $z=(x,v)$, $z'=(x',v')$, the identity $\mathcal F(t,z)-\mathcal F(t,z')=\bigl(v-v',\ \mathsf M^{-1}(F(t,z)-F(t,z'))\bigr)$ gives, with $m_{\min}:=\min_{i}m_{i}>0$ and $\lVert\mathsf M^{-1}u\rVert_{2}\le m_{\min}^{-1}\lVert u\rVert_{2}$, $$\lVert\mathcal F(t,z)-\mathcal F(t,z')\rVert_{2}^{2}=\lVert v-v'\rVert_{2}^{2}+\lVert\mathsf M^{-1}(F(t,z)-F(t,z'))\rVert_{2}^{2}\le\lVert v-v'\rVert_{2}^{2}+\frac{L^{2}}{m_{\min}^{2}}\lVert z-z'\rVert_{2}^{2}\le\Bigl(1+\frac{L^{2}}{m_{\min}^{2}}\Bigr)\lVert z-z'\rVert_{2}^{2},$$ so $\mathcal F$ is state-Lipschitz on $C$ with constant $\sqrt{1+L^{2}/m_{\min}^{2}}$, finite and depending on $C$ alone. [L1, L2, L5, algebra]

2.1 Pick $h,r>0$ with $C:=[t_{0}-h,t_{0}+h]\times\overline B(z_{0},r)\subseteq D$: possible because $D$ is open and $(t_{0},z_{0})\in D$ ([L2], algebra). Then $\mathcal F$ satisfies the hypotheses of [L3] on $C$: it is continuous, it is state-Lipschitz there by step 1.1, and $\lVert\mathcal F\rVert_{2}\le M<+\infty$ with $M$ as in clause 3 by [L6]. Applying [L3] to $z'=\mathcal F(t,z)$, $z(t_{0})=z_{0}$, there is exactly one solution $z$ on $[t_{0}-h,t_{0}+h]$ with graph in $C$, and any two solutions of this initial value problem agree on every common subinterval containing $t_{0}$. [step 1.1, L3, L6, choose]

2.2 For clause 3 with its own numbers $h,r,M,\Lambda$: the same application of [L3] gives exactly one solution on $[t_{0}-h,t_{0}+h]$ with graph in $C$, provided $hM\le r$ and $\Lambda h<1$; the agreement clause of [L3] then gives the stated uniqueness on intersections. [step 1.1, L3, given]

3.1 Write the solution of step 2.1 as $z(t)=(x(t),v(t))$. From $z'=\mathcal F(t,z)$ we get $x'=v$ and $v'=\mathsf M^{-1}F(t,x,v)$; hence $v$ is $C^{1}$ and $x$ is $C^{2}$ on $[t_{0}-h,t_{0}+h]$, and multiplying $v'=\mathsf M^{-1}F(t,x,v)$ by the masses returns $m_{i}\ddot x_{i}(t)=F_{i}(t,x(t),\dot x(t))$ for every $i$; moreover $x(t)\in Q$ and $t\in I_{0}$ because $(t,z(t))\in C\subseteq D$, and $x(t_{0})=x_{0}$, $\dot x(t_{0})=v(t_{0})=v_{0}$. By the equivalence of clause (c) of [L1], $x$ is a motion of the model on $[t_{0}-h,t_{0}+h]$; this proves clause 1 and, with clause 3's cylinder hypotheses, the existence half of clause 3. [step 2.1, step 2.2, L1, algebra]

3.2 Uniqueness: let $x:J\to Q$ and $\tilde x:\tilde J\to Q$ be motions with the same datum and let $z=(x,\dot x)$, $\tilde z=(\tilde x,\dot{\tilde x})$ be their state curves; by [L1] both solve $z'=\mathcal F(t,z)$ through $(t_{0},z_{0})$ on their intervals, so the uniqueness clause of [L3] applied on a common cylinder gives $z=\tilde z$ on $J\cap\tilde J$, hence $x=\tilde x$ there; this proves clause 2 and the uniqueness half of clause 3. [step 2.1, L1, L3]

4.1 Clause 4: by step 1.1 the field $\mathcal F$ satisfies the Picard–Lindelöf hypotheses at every point of $D$, so [L4] provides a unique maximal solution $z_{\max}$ of the associated first-order system through $(t_{0},z_{0})$ whose domain is an open interval containing $t_{0}$ and contained in $I_{0}$, every other solution through the datum being its restriction; writing $z_{\max}=(x_{\max},\dot x_{\max})$ with $x_{\max}$ the corresponding motion by [L1], every motion with the datum is a restriction of $x_{\max}$ by step 3.2 and the equivalence of [L1]; this proves clause 4. [step 3.2, L1, L4] ∎

## Remarks

- **What the theorem does not give.** No growth bound, no lower bound on $h$
  uniform over data, and no global existence in time; the interval length in
  clause 1 depends on the local Lipschitz data of $F$ near the datum through
  the cylinder construction of [L3]. Escape from the domain at a finite time
  is the subject of [[pthm-cm02-continuation]].

- **The regularity hypotheses are exactly used.** Clause (iii) of
  [[post-cm02-force-superposition]] supplies continuity and the state-local
  Lipschitz property, which are the two hypotheses of [L3]; neither is
  strengthened nor weakened here, and the companion counterexample on the
  examples page shows that continuity alone does not give clause 2.
