---
id: cex-cm16-stability-does-not-imply-attraction
kind: counterexample
title: "Lyapunov stability does not imply attraction: the harmonic model is stable at its equilibrium while every nonzero datum keeps its distance and never converges"
status: draft
origin: session
domain: physics
dependency_level: 17
deps: [pthm-cm16-energy-stability-and-instability,
       def-cm16-stability-and-hyperbolicity-concepts,
       pthm-cm04-harmonic-motion,
       def-cm-mechanical-vector-field-and-energy-in-a-chart,
       def-cm01-units]
dependency_roles:
  pthm-cm16-energy-stability-and-instability: physical-result
  def-cm16-stability-and-hyperbolicity-concepts: formulation-prerequisite
  pthm-cm04-harmonic-motion: physical-result
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A declared-model counterexample refuting the implication from Lyapunov stability to asymptotic stability for the page's mechanical models: the one-dimensional harmonic model with unit mass and unit stiffness has the equilibrium 0, which is Lyapunov stable by the strict-minimum theorem, while the datum (delta,0) has the periodic motion delta cos(t) whose distance from the equilibrium returns to delta at every period, so it never converges. The counterexample is a model computation; it reports no measurement."
sources:
  references:
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), §7.3 pp. 164-172: the corrected definitions of Lyapunov stability and asymptotic stability and the warning that centres are stable without being attracting"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §3.2: equilibrium types, including the stable-without-attraction centre"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), §2.1 pp. 10-13: the harmonic oscillator's periodic motions and conserved energy"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Statement refuted

**False statement.** *Every Lyapunov stable equilibrium of a one-dimensional
mechanical chart model attracts every sufficiently close initial state;
equivalently, Lyapunov stability implies asymptotic stability.*

## Facts & Assumptions

**Given:** the dimensionless harmonic chart data: the one-dimensional model of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]] with constant kinetic
metric $M=1$, potential $U(q)=\tfrac12q^2$, field $G(q,v)=(v,-q)$ and
equilibrium $(0,0)$; the comparison data $(\delta,0)$ for real $\delta>0$.

[L1] Stability of the strict minimum ([[pthm-cm16-energy-stability-and-instability]] clause 1): a strict local minimum of the potential makes the equilibrium Lyapunov stable, with the exact quantifiers of [[def-cm16-stability-and-hyperbolicity-concepts]] clause (i).

[L2] The harmonic motions ([[pthm-cm04-harmonic-motion]] clauses 1-3): for the harmonic model with $m=k=1$ and $\omega=\sqrt{k/m}=1$, every motion is $x(t)=A\cos(t-t_0)+B\sin(t-t_0)$ with $A=x(t_0)$, $B=v(t_0)$; if $R=\sqrt{A^2+B^2}>0$ then $x(t)=R\cos((t-t_0)-\varphi)$ and the least positive period is $2\pi$; the datum $(x(t_0),v(t_0))=(\delta,0)$ has $A=\delta$, $B=0$.

## Counterexample

**Proof technique:** direct.

1.1 The equilibrium is Lyapunov stable: $U(q)=\tfrac12q^2$ has the strict local minimum $q=0$ ($U(q)>U(0)$ for $q\ne0$), so [L1] makes $(0,0)$ Lyapunov stable in the chart model. [given, L1]

1.2 The nonzero datum does not converge: by [L2] the datum $(\delta,0)$ at time $t_0=0$ has the maximal motion $x(t)=\delta\cos t$, with $A=\delta$, $B=0$, $R=\delta>0$; the least positive period is $2\pi$ and $x(2\pi n)=\delta\cos(2\pi n)=x(0)=\delta$ for every integer $n$. Hence the sequence $t_n=2\pi n$ tends to infinity while $\lVert(x(2\pi n),x'(2\pi n))-(0,0)\rVert_2\ge\delta$; the state does not converge to the equilibrium. [given, L2, algebra]

2.1 Conclusion: the equilibrium is Lyapunov stable (step 1.1) but for every $\delta>0$ the datum $(\delta,0)$, arbitrarily close to the equilibrium, fails to converge (step 1.2); the equilibrium is therefore not asymptotically stable, and the implication of the refuted statement is false for the declared model. The stronger statement of [[pthm-cm16-energy-stability-and-instability]] clause 4 explains the failure: the energy $\tfrac12(v^2+q^2)$ is conserved, equals $\delta^2/2$ on this datum, and no state of different energy can converge to the equilibrium. [step 1.1, step 1.2, given] ∎

## Remarks

- **Scope.** The refutation concerns the page's exact definition of asymptotic
  stability (attraction for all data in a neighbourhood, after Lyapunov
  stability). It does not deny that this particular datum has bounded distance
  from the equilibrium, nor that a damped model would converge; damping is a
  different model with its own postulates ([[post-cm04-linear-damping-model]]).

- **No empirical content.** The computation uses dimensionless declared data;
  no measurement, no friction and no apparatus are involved.
