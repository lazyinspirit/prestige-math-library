---
id: cex-cm02-nonunique-flow-for-a-continuous-force
kind: counterexample
title: "Continuity of the force map alone does not give unique motions: two distinct Newtonian motions through one datum for $F=m\\sqrt{|x_1|}\\,e_1$"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [post-cm02-force-superposition, def-cm02-newtonian-flow, pthm-cm02-ivp, post-cm01-worldlines, def-locally-lipschitz-in-the-state-variable, def-derivative, def-continuity-real, def-abs-value, def-interval, def-euclidean-inner-product, thm-algebra-of-continuous-functions, thm-composition-of-continuous-functions, thm-continuous-inverse, lem-derivative-of-a-power, thm-algebra-of-derivatives]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  post-cm01-worldlines: formulation-prerequisite
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-derivative: mathematical-premise
  def-continuity-real: mathematical-premise
  def-abs-value: mathematical-premise
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-composition-of-continuous-functions: mathematical-premise
  thm-continuous-inverse: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A refutation, inside the framework's equation of motion, of the claim that a merely continuous force map suffices for uniqueness of the motion through an initial datum: the unit-mass model in three dimensions with force $F(x)=m\\sqrt{|x_1|}e_1$ is continuous but not state-locally-Lipschitz at the origin, and exhibits two distinct $C^2$ motions through the rest datum. The item refutes only the weakened variant of the force postulate in which continuity replaces the local-Lipschitz clause; it asserts no motion of any physical body, no measurement and no empirical claim."
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.2, printed pages 25-32: the role of the Lipschitz hypothesis in the Picard iteration and standard examples of nonunique solutions of continuous right-hand sides"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 7.1.1, printed page 143 (PDF page 146): the existence and uniqueness statement assumes continuous first derivatives of the right-hand side, not mere continuity"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): the force map as model input whose regularity is part of the formulation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement refuted

Consider the framework's equation of motion with one label of unit mass
($m=1$, [[post-cm01-worldlines]] clause (v)), time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$, and a force map
$F:\mathbb R\times\mathbb R^{3}\times\mathbb R^{3}\to\mathbb R^{3}$ that is
**merely continuous** — that is, the standing hypotheses of clause (iii) of
[[post-cm02-force-superposition]] with the state-local-Lipschitz requirement
dropped. Then for every initial datum $(t_{0},x_{0},v_{0})$ there is at most
one motion of the model through that datum, on every interval containing
$t_{0}$.

## Facts & Assumptions

**Given:** The unit-mass model above and the datum $(t_{0},x_{0},v_{0})=(0,0,0)$.

[L1] A motion of the model on an interval $J$ with nonempty interior is a
$C^{2}$ curve $x:J\to\mathbb R^{3}$ with $\ddot x(t)=F(t,x(t),\dot x(t))$ for
all $t\in J$ ([[def-cm02-newtonian-flow]] clause (c) with $m=1$ and
$N=1$); differentiability and second differentiability are those of
[[def-derivative]], and an interval is that of [[def-interval]].

[L2] The map $u\mapsto\lvert u\rvert$ is continuous on $\mathbb R$
([[def-abs-value]]) and the map $s\mapsto\sqrt{s}$ is continuous on
$[0,\infty)$ as the continuous inverse of squaring on that set
([[thm-continuous-inverse]]); compositions, sums, scalar multiples and
coordinate projections are continuous
([[thm-composition-of-continuous-functions]],
[[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L3] Derivative rules: $(t^{n})'=nt^{n-1}$ on $\mathbb R$ for $n\ge1$
([[lem-derivative-of-a-power]]); sums and scalar multiples are differentiated
termwise ([[thm-algebra-of-derivatives]]); a difference quotient is read
through the definition of the derivative ([[def-derivative]]).

## Counterexample

**Proof technique:** direct; exhibit two distinct $C^2$ motions through the
rest datum for the continuous force map
$F(t,x,v)=\bigl(\sqrt{\lvert x_{1}\rvert},0,0\bigr)$.

1.1 The map $F$ is continuous on $\mathbb R\times\mathbb R^{3}\times\mathbb R^{3}$: its first component is the composition of the continuous coordinate map $x\mapsto x_{1}$ (a projection, [L2]), the absolute value and the square root, and its other components are constant; hence $F$ meets the weakened hypothesis of the refuted statement. [given, L2]

1.2 The zero curve $x_{0}(t):=(0,0,0)$ is a motion through the datum on $\mathbb R$: it is $C^{2}$ with $\ddot x_{0}=0$ and $F(t,x_{0}(t),\dot x_{0}(t))=(0,0,0)$. [given, L1, L3]

1.3 Define $x_{1}:\mathbb R\to\mathbb R^{3}$ by $x_{1}(t):=(0,0,0)$ for $t\le1$ and $x_{1}(t):=\bigl(\frac{(t-1)^{4}}{144},0,0\bigr)$ for $t\ge1$. On $(-\infty,1)$ and on $(1,\infty)$ it is given by polynomials and is $C^{\infty}$ there, with first component $\frac{(t-1)^{4}}{144}$, first derivative $\frac{(t-1)^{3}}{36}$ and second derivative $\frac{(t-1)^{2}}{12}$ for $t>1$ by [L3]. At $t=1$ the difference quotient of the first component is $\frac{(1+h-1)^{4}}{144h}=\frac{h^{3}}{144}\to0$ as $h\downarrow0$ and is identically $0$ for $h<0$, so the first derivative exists and equals $0$ there by [L3]; the same computation applied to the first derivative gives second derivative $0$ at $t=1$; hence $x_{1}$ is of class $C^{2}$ on $\mathbb R$ with $x_{1}(0)=0$ and $\dot x_{1}(0)=0$. [given, L1, L3, algebra]

2.1 $x_{1}$ satisfies the equation: for $t<1$ both sides vanish; for $t>1$, $\ddot x_{1}(t)=\bigl(\frac{(t-1)^{2}}{12},0,0\bigr)$ and $F(t,x_{1}(t),\dot x_{1}(t))=\bigl(\sqrt{\frac{(t-1)^{4}}{144}},0,0\bigr)=\bigl(\frac{(t-1)^{2}}{12},0,0\bigr)$; at $t=1$, $\ddot x_{1}(1)=0$ and $F=(0,0,0)$. Hence $x_{1}$ is a motion of the model on $\mathbb R$ through the datum by [L1]. [step 1.3, L1, algebra]

3.1 The two motions differ: $x_{1}(2)=\bigl(\frac{1}{144},0,0\bigr)\neq x_{0}(2)$, so the initial value problem for the continuous force map $F$ has two distinct solutions on every interval containing $[0,2]$; the refuted statement is false. [step 1.2, step 2.1, algebra] ∎

## Remarks

- **Where the Lipschitz clause fails.** For $u\neq0$ the difference quotient of the first component at the origin is $\lvert F_{1}(u,0,0)-F_{1}(0,0,0)\rvert/\lvert u\rvert=\sqrt{\lvert u\rvert}/\lvert u\rvert=1/\sqrt{\lvert u\rvert}$, which is unbounded on every neighbourhood of $0$; so $F$ admits no finite state-Lipschitz constant on any cylinder containing the rest datum
  ([[def-locally-lipschitz-in-the-state-variable]]). This is exactly the clause
  that [[post-cm02-force-superposition]] imposes and that the counterexample
  drops.

- **The framework theorem is untouched.** Since $F$ is not a force map of the
  adopted branch, [[pthm-cm02-ivp]] does not apply to it; the counterexample
  refutes only the claim that continuity alone suffices for uniqueness, and
  thereby shows that the local-Lipschitz clause of the force postulate is not
  redundant.

- **No physical claim.** The counterexample is an abstract computation inside
  the model's equation of motion; the force map $F$ is not asserted to model
  any physical interaction.
