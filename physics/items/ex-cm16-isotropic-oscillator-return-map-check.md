---
id: ex-cm16-isotropic-oscillator-return-map-check
kind: example
title: "The three-dimensional isotropic oscillator: the stroboscopic map at half period is minus the identity, every state is periodic, the periodic points are dense, and the map is neither mixing nor sensitive"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [post-cm02-force-superposition,
       def-cm16-stroboscopic-and-poincare-maps,
       prop-cm-first-return-map-is-a-local-c1-diffeomorphism,
       def-cm16-chaos-list-for-model-maps,
       def-cm-topologically-mixing-dense-periodic-and-sensitive-maps,
       def-cm-mechanical-vector-field-and-energy-in-a-chart,
       pthm-cm02-ivp,
       thm-sine-and-cosine-derivatives,
       thm-algebra-of-derivatives,
       def-euclidean-inner-product,
       def-metric-ball,
       def-cm01-units]
dependency_roles:
  post-cm02-force-superposition: physical-assumption
  def-cm16-stroboscopic-and-poincare-maps: formulation-prerequisite
  prop-cm-first-return-map-is-a-local-c1-diffeomorphism: mathematical-premise
  def-cm16-chaos-list-for-model-maps: formulation-prerequisite
  def-cm-topologically-mixing-dense-periodic-and-sensitive-maps: mathematical-premise
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  pthm-cm02-ivp: physical-result
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A declared-data check of the page's discrete-time vocabulary on a one-label three-dimensional Cartesian force model with mass 1 and isotropic harmonic potential U(r)=||r||^2/2 in dimensionless units: the flow is an explicit rotation of each coordinate plane, the stroboscopic map at period pi is minus the identity, at period 2pi it is the identity, the Poincare first-return map to the section q_y=0, v_y>0 is the identity, every state is periodic, periodic points are dense in the six-dimensional phase space, and the map fails topological mixing and sensitivity, so it is not chaotic in the stated sense. The check is model-data substitution; it reports no measurement."
sources:
  references:
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), §7.2 pp. 157-172: stroboscopic maps and the warning that dense periodic points alone do not make a map chaotic"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §3.3: the isotropic two-dimensional harmonic oscillator and its closed phase-plane orbits"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.3: return maps and the explicit distinction between periodic behaviour and chaos"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Example

**Declared model data.** Take one label with configuration domain
$Q:=\mathbb R^3$, mass $m:=1$ in dimensionless units, and force map
$F:\mathbb R\times Q\times\mathbb R^3\to\mathbb R^3$ given by
$F(T,\mathbf q,\mathbf v):=-\mathbf q$. This is a smooth force map of
[[post-cm02-force-superposition]]. Equivalently, in the chart
$\Omega:=\mathbb R^3$ the constant kinetic metric is $M:=I_3$ and the
potential is $U(\mathbf q):=\tfrac12\lVert\mathbf q\rVert_2^2$ of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]]. The field and
motion through $(\mathbf q_0,\mathbf v_0)$ are
$$G(\mathbf q,\mathbf v)=(\mathbf v,-\mathbf q),\qquad \mathbf q(t)=\mathbf q_0\cos t+\mathbf v_0\sin t,\qquad \mathbf v(t)=-\mathbf q_0\sin t+\mathbf v_0\cos t.$$
Regard the autonomous force model as $P$-periodic for any $P>0$, and let
$\Psi_P$ be its stroboscopic map of
[[def-cm16-stroboscopic-and-poincare-maps]] clause (ii). The complete flow
makes each $\Psi_P$ defined on all of $\mathbb R^6$. Use the section
$\Sigma_+:=\{(\mathbf q,\mathbf v):q_y=0,\ v_y>0\}$; its first-return map
sends each section state to the state at its least positive return time, with
the local $C^1$ construction supplied by
[[def-cm16-stroboscopic-and-poincare-maps]] clause (iii).

**Assertions to check.** (i) The displayed curves are the model's motions;
(ii) $\Psi_\pi=-\mathrm{id}$ and $\Psi_{2\pi}=\mathrm{id}$, so every state of
the model is periodic under the flow with period $2\pi$ and every point is a
periodic point of $\Psi_\pi$ with period dividing $2$; (iii) the first-return
map of $\Sigma_+$ is the identity; (iv) with the Euclidean metric of the
phase chart, $\Psi_\pi$ on $X:=\mathbb R^6$ is continuous and has dense
periodic points, but is not topologically mixing and has no sensitivity
constant, hence is not chaotic in the stated sense of
[[def-cm16-chaos-list-for-model-maps]].

## Facts & Assumptions

**Given:** the declared one-label force model $Q=\mathbb R^3$, $m=1$,
$F(T,\mathbf q,\mathbf v)=-\mathbf q$, its equivalent chart data $M=I_3$,
$U(\mathbf q)=\lVert\mathbf q\rVert_2^2/2$, the field $G$ and the displayed
motion formulas.

[L1] Unique force-model motions ([[pthm-cm02-ivp]]): for the adopted smooth force map, every initial datum has a unique maximal motion, and every other solution through that datum is its restriction.

[L2] Calculus ([[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]]): $(\sin)'=\cos$, $(\cos)'=-\sin$, with the sum and constant-multiple rules, and $\cos(\pi)=-1$, $\sin(\pi)=0$, $\cos(2\pi)=1$, $\sin(2\pi)=0$.

[L3] The chaos list ([[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]]): a map is chaotic in the stated sense exactly when it is continuous, topologically mixing, has dense periodic points and has sensitive dependence with a positive constant; the negation of topological mixing or of sensitivity therefore suffices to fail the list.

[L4] The local first-return proposition ([[prop-cm-first-return-map-is-a-local-c1-diffeomorphism]]): for a $C^1$ autonomous field and a $C^1$ section, two transversal crossings define a local return map, and exclusion of intervening hits from the section closure makes it a first-return map.

## Verification

**Proof technique:** direct.

1.1 Field and motion: with $M=I_3$ and $U(\mathbf q)=\lVert\mathbf q\rVert_2^2/2$ the mechanical field is $G(\mathbf q,\mathbf v)=(\mathbf v,-\mathbf q)$ ([[def-cm-mechanical-vector-field-and-energy-in-a-chart]]), which is also the field of the declared force map. Differentiating the displayed vector formulas gives $\dot{\mathbf q}=\mathbf v$ and $\dot{\mathbf v}=-\mathbf q$, and at $t=0$ they reproduce the initial datum; by [L1] these are the unique maximal model motions. [given, L1, L2, algebra]

2.1 Stroboscopic maps: evaluating step 1.1 at $t=\pi$ uses $\cos\pi=-1$, $\sin\pi=0$ and gives $\Psi_\pi(\mathbf q,\mathbf v)=(-\mathbf q,-\mathbf v)$; at $t=2\pi$ it gives the identity. Thus every state returns after $2\pi$, and $\Psi_\pi$ is an involution, so every point of $X=\mathbb R^6$ is a periodic point of $\Psi_\pi$ with period $1$ or $2$; in particular the periodic points are all of $X$ and are dense. [step 1.1, given, L2, algebra]

2.2 First return to $\Sigma_+$: take the open state neighbourhood $W:=\{(\mathbf q,\mathbf v):v_y>0\}$ and the section function $h:W\to\mathbb R$, $h(\mathbf q,\mathbf v):=q_y$, so $h^{-1}(0)=\Sigma_+$ within $W$. At every point of $\Sigma_+$, $Dh\,G=v_y>0$. A state with $q_{y0}=0$ and $v_{y0}>0$ has $q_y(t)=v_{y0}\sin t$ and $v_y(t)=v_{y0}\cos t$, so the next hit of $\Sigma_+$ is at $t=2\pi$; at that time the full six-dimensional state returns to its initial value by the formulas of step 1.1. The open segment $0<t<2\pi$ avoids $\overline{\Sigma_+}=\{q_y=0,v_y\ge0\}$: its only intermediate zero is at $t=\pi$, where $v_y=-v_{y0}<0$. Applying [L4] at each reference point gives the local first-return map, and the explicit calculation identifies it with the identity on all of $\Sigma_+$. [step 1.1, given, L2, L4, algebra]

3.1 Failure of mixing: let $Z\in X=\mathbb R^6$ be a state with $\lVert Z\rVert_2>1$ and let $U:=B(Z,1)$ be the open Euclidean ball ([[def-metric-ball]]); then $U\cap(-U)=\emptyset$, and step 2.1 gives $\Psi_\pi^n(U)=U$ for even $n$ and $\Psi_\pi^n(U)=-U$ for odd $n$. Taking $V:=U$ in the mixing condition of [L3], the intersection $\Psi_\pi^n(U)\cap V$ is empty for every odd $n$; consequently no integer $N$ has $\Psi_\pi^n(U)\cap V\ne\emptyset$ for all $n\ge N$, and $\Psi_\pi$ is not topologically mixing on $X$. [step 2.1, L3, algebra]

4.1 Failure of sensitivity: for all states $Z,Z'\in\mathbb R^6$ and all $n\ge1$, step 2.1 gives $\lVert\Psi_\pi^n(Z)-\Psi_\pi^n(Z')\rVert_2=\lVert Z-Z'\rVert_2$ because each iterate is $\pm\mathrm{id}$, an isometry; hence for no $\delta>0$ can one find, for every $Z$ and every ball around $Z$, a nearby state whose iterate is $\delta$-separated. The sensitivity condition of [L3] fails, and with it the chaos list; the periodic-point and continuity clauses alone do not make $\Psi_\pi$ chaotic in the stated sense. [step 2.1, step 3.1, L3, algebra]

5.1 Reading: the explicit maps are model-data substitutions in dimensionless units; the section, return time and stroboscopic period are measured in the dimensionless frame time, and no measurement, sampling or empirical comparison is performed. [step 2.2, step 4.1, given, algebra] ∎

## Remarks

- **Why the check matters.** It exhibits a model whose stroboscopic map is continuous with dense periodic points yet fails two of the four clauses of the page's chaos list, showing that the list is a genuine restriction rather than a set of automatic consequences of periodicity. It is the discrete-time companion of the finite-time growth checks: rate zero everywhere ([[ex-cm16-linearization-and-growth-checks]]) and no chaos.

- **The return map.** On the regular section $\{q_y=0,\ v_y\ne0\}$ the first-return time is $\pi$, and its return map sends $(\mathbf q,\mathbf v)$ to $(-\mathbf q,-\mathbf v)$; composing this return map twice gives the identity, including on $\Sigma_+$. The section is transversal because $Dh\,G=v_y\ne0$ on it, in agreement with the hypotheses of [[def-cm16-stroboscopic-and-poincare-maps]] clause (iii). For $\Sigma_+$, its closure is $\{q_y=0,v_y\ge0\}$; the only intermediate zero at time $\pi$ has $v_y=-v_{y0}<0$, so the open reference segment avoids that closure. For the regular two-sided section its closure is $\{q_y=0\}$, and no intermediate zero occurs before $\pi$. These observations also verify the proposition's extra first-return condition.
