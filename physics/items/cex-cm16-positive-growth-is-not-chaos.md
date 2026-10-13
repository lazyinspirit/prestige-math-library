---
id: cex-cm16-positive-growth-is-not-chaos
kind: counterexample
title: "A positive Lyapunov exponent at a hyperbolic equilibrium does not produce a chaotic invariant set of the time-one map: the three-dimensional repulsive model has rate $1$ and no compact invariant set with more than one point"
status: published
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
physical_scope: "A declared-model counterexample in the one-label three-dimensional force branch, refuting the implication from a positive Lyapunov exponent at an equilibrium to a chaotic compact invariant set of the time-one map: the dimensionless repulsive model with potential U(q)=-||q||^2/2 has a complete flow, exponent 1 at its equilibrium along each unstable direction, and a nonlinearly unstable equilibrium, yet every nonempty compact invariant set of its time-one map is {0}; this singleton fails the sensitivity clause of the page's chaos list. The counterexample is a model computation; it reports no measurement."
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

**False statement.** *Let $G:S_0\to\mathbb R^{6N}$ be the $C^1$ associated
field of a complete autonomous stability model in the sense of
[[def-cm16-flow-equilibria-and-invariant-sets]], with flow
$\Phi:\mathbb R\times S_0\to S_0$. If an equilibrium has a positive real
eigenvalue $\lambda$ of $DG$ and Lyapunov exponent $\lambda$ along a
corresponding eigenvector, then the time-one map $f:=\Phi_1:S_0\to S_0$
possesses a compact invariant set with more than one point on
which its restriction is chaotic in the stated sense of
[[def-cm16-chaos-list-for-model-maps]] (continuous, topologically mixing,
dense periodic points, sensitive dependence).*

## Facts & Assumptions

**Given:** the dimensionless one-label Cartesian force model with
$Q=\mathbb R^3$, mass $m=1$, kinetic matrix $M=I_3$, potential
$U(\mathbf q)=-\tfrac12\lVert\mathbf q\rVert_2^2$, force
$\mathbf F(\mathbf q,\mathbf v)=\mathbf q$, field
$G(\mathbf q,\mathbf v)=(\mathbf v,\mathbf q)$, equilibrium $(0,0)$, and
complete flow
$$\Phi_t(\mathbf q,\mathbf v)=\Bigl(\tfrac12(\mathbf q+\mathbf v)e^t+\tfrac12(\mathbf q-\mathbf v)e^{-t},\ \tfrac12(\mathbf q+\mathbf v)e^t-\tfrac12(\mathbf q-\mathbf v)e^{-t}\Bigr).$$

[L1] The growth computation ([[ex-cm16-linearization-and-growth-checks]]): for $\mathbf u:=\mathbf q+\mathbf v$ and $\mathbf w:=\mathbf q-\mathbf v$, the derivative flow acts as $(\mathbf u,\mathbf w)\mapsto(e^t\mathbf u,e^{-t}\mathbf w)$; along $(\mathbf e_1,\mathbf e_1)$ the finite-time rate at the equilibrium is $1$ for every $t>0$, so the Lyapunov exponent is $1$, and the linearisation has positive eigenvalue $1$.

[L2] The chaos list ([[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]]): sensitivity requires $\delta>0$ such that for every $x$ and every $\varepsilon>0$ there are $y$ and $n\ge1$ with $d(x,y)<\varepsilon$ and $d(f^n(x),f^n(y))\ge\delta$; on a one-point space the only admissible $y$ is $x$, so no positive $\delta$ satisfies the condition.

[L3] Time-one invariance and instability ([[def-cm16-flow-equilibria-and-invariant-sets]] clause (iv), [[pthm-cm16-hyperbolic-linearization]] clause 3): for the complete flow, $f=\Phi_1$ is a bijection with inverse $\Phi_{-1}$; a compact invariant set of $f$ satisfies $f(K)=K$, and a hyperbolic equilibrium with a positive-real-part eigenvalue is unstable.

[L4] Norms ([[def-euclidean-inner-product]], [[def-metric-ball]]): $\lVert(\mathbf q,\mathbf v)\rVert_2^2=\tfrac12(\lVert\mathbf u\rVert_2^2+\lVert\mathbf w\rVert_2^2)$, so boundedness in the state chart implies boundedness of both transformed vectors.

## Counterexample

**Proof technique:** direct.

1.1 The antecedent holds: by [L1] the model has equilibrium $(0,0)$, the linearisation has eigenvector $(\mathbf e_1,\mathbf e_1)$ with eigenvalue $1>0$, and the Lyapunov exponent along that direction exists and equals $1$. The explicit flow is defined for every real time. This satisfies the antecedent of the refuted statement. [given, L1]

1.2 Classification of compact invariant sets of $f$: let $K$ be compact with $f(K)=K$, and let a state of $K$ have transformed coordinate $\mathbf u\ne0$. By [L1], $\lVert f^n(\mathbf q,\mathbf v)\rVert_2\ge\tfrac1{\sqrt2}\lVert\mathbf u\rVert_2e^n$ for $n\ge0$, which is unbounded; this contradicts boundedness of $K$. Hence $\mathbf u=0$ on $K$. Since $f$ is a bijection and $f(K)=K$, applying the same argument to $f^{-n}(K)=K$ shows $\mathbf w=0$ on $K$. Therefore every nonempty compact invariant set of $f$ is the singleton $\{(0,0)\}$. [given, L1, L3, L4, algebra]

2.1 The one-point invariant set fails the chaos list: for $X=\{(0,0)\}$ every admissible $y$ in the sensitivity condition of [L2] coincides with the base point, so $d(f^n(x),f^n(y))=0<\delta$ for every $n$ and every $\delta>0$; the sensitivity clause fails, and with it the four-clause list of [[def-cm16-chaos-list-for-model-maps]]. [step 1.2, L2, algebra]

3.1 Conclusion: the antecedent of the refuted statement holds for the declared model (step 1.1), while its time-one map has no compact invariant set with more than one point (step 1.2) and its only compact invariant set is not chaotic in the stated sense (step 2.1); the implication is therefore false. Nonlinear instability of the equilibrium from [L3] does not repair it: instability of a single state and chaos of a compact invariant set are different properties. [step 1.1, step 1.2, step 2.1, L3] ∎

## Remarks

- **Scope of the refutation.** The counterexample refutes the stated implication
  for the time-one map and the page's precise chaos list; it does not argue that positive exponents
  are irrelevant to chaotic behaviour, only that the value of an exponent at a
  single equilibrium does not by itself produce the listed properties. The
  horseshoe theorem [[pthm-cm16-separatrix-splitting-and-horseshoe]] establishes
  those properties by an explicit conjugacy, not from an exponent.

- **No empirical content.** The computation is a substitution in a dimensionless
  linear model; it involves no measurement, no numerical integration and no
  claim about physical systems exhibiting exponential separation.
