---
id: cex-cm16-positive-growth-is-not-chaos
kind: counterexample
title: "A positive Lyapunov exponent at a hyperbolic equilibrium does not produce a chaotic invariant set: the repulsive linear model has rate $1$ at its equilibrium and no compact invariant set with more than one point"
status: draft
origin: session
domain: physics
dependency_level: 14
deps: [def-cm16-finite-time-growth-rates,
       def-cm16-chaos-list-for-model-maps,
       def-cm-topologically-mixing-dense-periodic-and-sensitive-maps,
       pthm-cm16-hyperbolic-linearization,
       ex-cm16-linearization-and-growth-checks,
       def-cm16-flow-equilibria-and-invariant-sets,
       def-cm-mechanical-vector-field-and-energy-in-a-chart,
       def-euclidean-inner-product,
       def-metric-ball,
       def-cm01-units]
dependency_roles:
  def-cm16-finite-time-growth-rates: formulation-prerequisite
  def-cm16-chaos-list-for-model-maps: formulation-prerequisite
  def-cm-topologically-mixing-dense-periodic-and-sensitive-maps: mathematical-premise
  pthm-cm16-hyperbolic-linearization: physical-result
  ex-cm16-linearization-and-growth-checks: operational-prerequisite
  def-cm16-flow-equilibria-and-invariant-sets: formulation-prerequisite
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A declared-model counterexample refuting the implication from a positive Lyapunov exponent at an equilibrium to the existence of a chaotic compact invariant set: the dimensionless repulsive linear model U(q)=-q^2/2 has the positive exponent 1 at its equilibrium along the unstable direction, its equilibrium is nonlinearly unstable, and yet every compact invariant set of its flow is the single point {0}, which fails the sensitivity clause of the page's chaos list. The counterexample is a model computation; it reports no measurement."
sources:
  references:
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), Chapter 7 pp. 143-195: the warning that a positive exponent at a hyperbolic equilibrium is not a definition or proof of chaos"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.3 and §7.2: the distinction between exponential divergence of nearby trajectories and chaos, with the explicit warning that a picture is not a proof"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Chapter 9: the qualitative chaos discussion whose equivalence claims are refuted by this model"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement refuted

**False statement.** *If an autonomous stability model has an equilibrium whose
linearisation possesses an eigenvalue with positive real part and the model's
flow has the positive Lyapunov exponent equal to that eigenvalue at the
equilibrium along an unstable direction, then the model's flow possesses a
compact invariant set that is chaotic in the stated sense of
[[def-cm16-chaos-list-for-model-maps]] (continuous, topologically mixing, dense
periodic points, sensitive dependence).*

## Facts & Assumptions

**Given:** the dimensionless one-dimensional chart data $\Omega=\mathbb R$,
$M=1$, $U(q)=-\tfrac12q^2$, the field $G(q,v)=(v,q)$, the equilibrium $(0,0)$,
and the flow $\Phi_t(q,v)=\bigl(\tfrac12(q+v)e^{t}+\tfrac12(q-v)e^{-t},\
\tfrac12(q+v)e^{t}-\tfrac12(q-v)e^{-t}\bigr)$.

[L1] The growth computation ([[ex-cm16-linearization-and-growth-checks]]): for this model $D\Phi_t$ acts as $(u,w)\mapsto(ue^{t},we^{-t})$ in the coordinates $u=q+v$, $w=q-v$; the finite-time rate at the equilibrium along $(1,1)$ is $r(t,0,(1,1))=1$ for every $t>0$ with Lyapunov exponent $1$; and the linearisation $DG(0,0)$ is hyperbolic with the positive eigenvalue $1$.

[L2] The chaos list ([[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]]): sensitivity requires $\delta>0$ such that for every $x$ and every $\varepsilon>0$ there are $y$ and $n\ge1$ with $d(x,y)<\varepsilon$ and $d(f^n(x),f^n(y))\ge\delta$; on a one-point space the only admissible $y$ is $x$, so no positive $\delta$ satisfies the condition.

[L3] Invariance and instability ([[def-cm16-flow-equilibria-and-invariant-sets]] clause (iv), [[pthm-cm16-hyperbolic-linearization]] clause 3): an invariant set $K$ satisfies $\Phi_t(K)=K$ for every $t\in\mathbb R$, hence is bounded and mapped onto itself in both time directions; a hyperbolic equilibrium with a positive-real-part eigenvalue is unstable.

[L4] Norms ([[def-euclidean-inner-product]], [[def-metric-ball]]): in the coordinates $(u,w)$ a state has $\lVert(u,w)\rVert_2=\tfrac1{\sqrt2}\sqrt{u^2+w^2}$, so boundedness can be read in either coordinate system.

## Counterexample

**Proof technique:** direct.

1.1 The antecedent holds: by [L1] the model has the equilibrium $(0,0)$, the linearisation $DG(0,0)$ has the eigenvalue $1>0$, and the Lyapunov exponent at the equilibrium along the direction $(1,1)$ exists and equals $1$. This satisfies the antecedent of the refuted statement. [given, L1]

1.2 Classification of compact invariant sets: let $K$ be compact with $\Phi_t(K)=K$ for all $t\in\mathbb R$, and let a state of $K$ have coordinates $(u,w)$ with $u\ne0$. By [L1], $\lVert\Phi_t(u,w)\rVert_2=\tfrac1{\sqrt2}\sqrt{u^2e^{2t}+w^2e^{-2t}}\ge\tfrac1{\sqrt2}\lvert u\rvert e^{t}$ for $t\ge0$, which is unbounded as $t\to\infty$; this contradicts the boundedness of $K$ required by [L3] and compactness. Hence $u=0$ for every state of $K$; applying the same argument to the reversed flow $\Phi_{-t}$ (which also maps $K$ onto itself by [L3]) gives $w=0$. Therefore every nonempty compact invariant set is the single point $\{(0,0)\}$. [given, L1, L3, L4, algebra]

2.1 The one-point invariant set fails the chaos list: for $X=\{(0,0)\}$ every admissible $y$ in the sensitivity condition of [L2] coincides with the base point, so $d(f^n(x),f^n(y))=0<\delta$ for every $n$ and every $\delta>0$; the sensitivity clause fails, and with it the four-clause list of [[def-cm16-chaos-list-for-model-maps]]. [step 1.2, L2, algebra]

3.1 Conclusion: the antecedent of the refuted statement holds for the declared model (step 1.1), while the flow has no compact invariant set with more than one point (step 1.2) and its only compact invariant set is not chaotic in the stated sense (step 2.1); the implication is therefore false. Nonlinear instability of the equilibrium from [L3] does not repair it: instability of a single state and chaos of a compact invariant set are different properties. [step 1.1, step 1.2, step 2.1, L3] ∎

## Remarks

- **Scope of the refutation.** The counterexample refutes the stated implication
  for the page's precise chaos list; it does not argue that positive exponents
  are irrelevant to chaotic behaviour, only that the value of an exponent at a
  single equilibrium does not by itself produce the listed properties. The
  horseshoe theorem [[pthm-cm16-separatrix-splitting-and-horseshoe]] establishes
  those properties by an explicit conjugacy, not from an exponent.

- **No empirical content.** The computation is a substitution in a dimensionless
  linear model; it involves no measurement, no numerical integration and no
  claim about physical systems exhibiting exponential separation.
