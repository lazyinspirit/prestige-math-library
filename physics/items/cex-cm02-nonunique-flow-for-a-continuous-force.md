---
id: cex-cm02-nonunique-flow-for-a-continuous-force
kind: counterexample
title: "Continuity of the force map alone does not give unique motions: two distinct Newtonian motions through one datum for $F=\\lambda\\sqrt{|x_1|/\\ell_*}\\,e_1$"
status: published
origin: session
domain: physics
dependency_level: 11
deps: [post-cm02-force-superposition, def-cm02-newtonian-flow, pthm-cm02-ivp, post-cm01-worldlines, def-cm01-units, def-locally-lipschitz-in-the-state-variable, def-derivative, def-continuity-real, def-abs-value, def-interval, def-euclidean-inner-product, thm-algebra-of-continuous-functions, thm-composition-of-continuous-functions, thm-continuous-inverse, lem-derivative-of-a-power, thm-algebra-of-derivatives]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
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
physical_scope: "A refutation, inside the framework's equation of motion, of the claim that a merely continuous force map suffices for uniqueness through an initial datum: the unit-mass model in three dimensions with force $F(x)=\\lambda\\sqrt{|x_{1}|/\\ell_{*}}e_{1}$, where $[\\lambda]=\\mu\\ell\\tau^{-2}$ and $[\\ell_*]=\\ell$, is continuous but not state-locally-Lipschitz at the origin and exhibits two distinct $C^{2}$ motions through the rest datum. The item refutes only the weakened variant of the force postulate in which continuity replaces the local-Lipschitz clause; it asserts no motion of any physical body, no measurement and no empirical claim."
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.2, printed pages 36-38, and Section 2.6, printed page 51: the role of the Lipschitz hypothesis in the Picard iteration and standard examples of nonunique solutions of continuous right-hand sides"
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
($m=1\,\mathrm{kg}$, [[post-cm01-worldlines]] clause (v)), time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$, and a force map
$F:\mathbb R\times\mathbb R^{3}\times\mathbb R^{3}\to\mathbb R^{3}$ with
force components of dimension $\mu\ell\tau^{-2}$ ([[def-cm01-units]]) that is
**merely continuous** — that is, the standing hypotheses of clause (iii) of
[[post-cm02-force-superposition]] with the state-local-Lipschitz requirement
dropped. Then for every initial datum $(t_{0},x_{0},v_{0})$ there is at most
one motion of the model through that datum, on every interval containing
$t_{0}$.

## Facts & Assumptions

**Given:** The unit-mass model above and the datum $(t_{0},x_{0},v_{0})=(0\,\mathrm{s},0,0)$.

[L1] A motion of the model on an interval $J$ with nonempty interior is a $C^{2}$ curve $x:J\to\mathbb R^{3}$ with $\ddot x(t)=F(t,x(t),\dot x(t))$ for all $t\in J$ ([[def-cm02-newtonian-flow]] clause (c) with $m=1$ and $N=1$); differentiability and second differentiability are those of [[def-derivative]], and an interval is that of [[def-interval]].

[L2] The map $u\mapsto\lvert u\rvert$ is continuous on $\mathbb R$ ([[def-abs-value]]) and the map $s\mapsto\sqrt{s}$ is continuous on $[0,\infty)$ as the continuous inverse of squaring on that set ([[thm-continuous-inverse]]); compositions, sums, scalar multiples and coordinate projections are continuous ([[thm-composition-of-continuous-functions]], [[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L3] Derivative rules: $(t^{n})'=nt^{n-1}$ on $\mathbb R$ for $n\ge1$ ([[lem-derivative-of-a-power]]); sums and scalar multiples are differentiated termwise ([[thm-algebra-of-derivatives]]); a difference quotient is read through the definition of the derivative ([[def-derivative]]).

[L4] Units ([[def-cm01-units]]): position has dimension $\ell$, time has dimension $\tau$, mass has dimension $\mu$, and force has dimension $\mu\ell\tau^{-2}$; thus $\lambda\sqrt{|x_{1}|/\ell_*}$ has force dimension when $[\lambda]=\mu\ell\tau^{-2}$ and $[\ell_*]=\ell$.

## Counterexample

**Proof technique:** direct; exhibit two distinct $C^2$ motions through the
rest datum for the continuous force map
$$F(t,x,v)=\bigl(\lambda\sqrt{\lvert x_{1}\rvert/\ell_*},0,0\bigr),$$
where $\lambda>0$ is a declared force scale and $\ell_*>0$ is a declared
length ([[def-cm01-units]]).

1.1 The map $F(t,x,v)=\bigl(\lambda\sqrt{|x_{1}|/\ell_*},0,0\bigr)$ is continuous on $\mathbb R\times\mathbb R^{3}\times\mathbb R^{3}$: its first component is the composition of the continuous coordinate map $x\mapsto x_{1}$, absolute value, division by the positive constant $\ell_*$, and the square root on $[0,\infty)$ ([L2]); its other components are constant. By [L4] its force components have dimension $\mu\ell\tau^{-2}$, so it is a dimensionally consistent continuous force map for the weakened model. [given, L2, L4]

1.2 The zero curve $x_{0}(t):=(0,0,0)$ is a motion through the datum on $\mathbb R$: it is $C^{2}$ with $\ddot x_{0}=0$ and $F(t,x_{0}(t),\dot x_{0}(t))=(0,0,0)$. [given, L1, L3]

1.3 Let $t_{1}:=1\,\mathrm{s}$ and $A:=\bigl(\lambda/(12m\sqrt{\ell_*})\bigr)^{2}>0$. Define $x_{1}:\mathbb R\to\mathbb R^{3}$ by $x_{1}(t):=0$ for $t\le t_{1}$ and $x_{1}(t):=\bigl(A(t-t_{1})^{4},0,0\bigr)$ for $t\ge t_{1}$. The coefficient $A$ has dimension $\ell\tau^{-4}$, so $A(t-t_{1})^{4}$ has dimension $\ell$. For $t>t_{1}$ the first component has derivatives $4A(t-t_{1})^{3}$ and $12A(t-t_{1})^{2}$ by [L3]. At $t=t_{1}$ its first difference quotient is $Ah^{3}\to0$ from the right and $0$ from the left; the difference quotient of its first derivative is $4Ah^{2}\to0$ from the right and $0$ from the left. Thus $x_{1}$ is $C^{2}$ on $\mathbb R$, with $x_{1}(0\,\mathrm{s})=0$ and $\dot x_{1}(0\,\mathrm{s})=0$. [given, L1, L3, L4, algebra]

2.1 $x_{1}$ satisfies the equation: for $t<t_{1}$ both sides vanish; for $t>t_{1}$ its first acceleration component is $12A(t-t_{1})^{2}$, while the first component of $F(t,x_{1}(t),\dot x_{1}(t))$ is $\lambda\sqrt{A/\ell_*}(t-t_{1})^{2}$. The definition of $A$ gives $12mA=\lambda\sqrt{A/\ell_*}$, so $m\ddot x_{1}=F$; at $t=t_{1}$ both sides vanish. Hence $x_{1}$ is a motion on $\mathbb R$ through the datum by [L1]. [step 1.3, L1, algebra]

3.1 The two motions differ at $t_{2}:=2\,\mathrm{s}$: since $t_{2}-t_{1}=1\,\mathrm{s}$, $x_{1}(t_{2})=A(1\,\mathrm{s})^{4}e_{1}\ne0=x_{0}(t_{2})$. Thus the initial value problem for the continuous force map $F$ has two distinct solutions on every interval containing $[0\,\mathrm{s},2\,\mathrm{s}]$, and the refuted statement is false. [step 1.2, step 2.1, algebra] ∎

## Remarks

- **Where the Lipschitz clause fails.** For $u\neq0$ the quotient of the force difference by the state difference at the origin is
  $$\frac{\lVert F(t,ue_{1},0)-F(t,0,0)\rVert_{2}}{\lVert(ue_{1},0)-(0,0)\rVert_{2}}=\frac{\lambda\sqrt{|u|/\ell_*}}{|u|}=\frac{\lambda}{\sqrt{\ell_*}\sqrt{|u|}},$$
  which is unbounded as $u\to0$; so $F$ admits no finite state-Lipschitz constant on any cylinder containing the rest datum
  ([[def-locally-lipschitz-in-the-state-variable]]). This is exactly the clause
  that [[post-cm02-force-superposition]] imposes and that the counterexample
  drops.

- **The framework theorem is untouched.** Since $F$ is not a force map of the adopted branch, [[pthm-cm02-ivp]] does not apply to it; the counterexample refutes only the claim that continuity alone suffices for uniqueness, and thereby shows that the local-Lipschitz clause of the force postulate is not redundant.

- **No physical claim.** The counterexample is an abstract computation inside the model's equation of motion; the force map $F$ is not asserted to model any physical interaction.
