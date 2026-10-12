---
id: ex-cm16-linearization-and-growth-checks
kind: example
title: "Two declared linear models worked through: the harmonic flow has zero finite-time growth in every direction, while the repulsive linear model has exact rates $\\pm1$ and the positive Lyapunov exponent $1$ at its equilibrium"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [post-cm02-force-superposition,
       def-cm16-flow-equilibria-and-invariant-sets,
       def-cm16-finite-time-growth-rates,
       pthm-cm16-variational-equation-and-linearization,
       pthm-cm02-ivp,
       def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent,
       def-cm-mechanical-vector-field-and-energy-in-a-chart,
       thm-derivative-of-exponential,
       thm-chain-rule,
       thm-algebra-of-derivatives,
       thm-sine-and-cosine-derivatives,
       def-euclidean-inner-product,
       def-natural-logarithm,
       def-cm01-units]
dependency_roles:
  post-cm02-force-superposition: physical-assumption
  def-cm16-flow-equilibria-and-invariant-sets: formulation-prerequisite
  def-cm16-finite-time-growth-rates: formulation-prerequisite
  pthm-cm16-variational-equation-and-linearization: physical-result
  pthm-cm02-ivp: physical-result
  def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent: mathematical-premise
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A declared-data check of the page's finite-time growth definition and of the variational-equation supplier on two dimensionless one-label Cartesian force models in R^3: the harmonic model with mass matrix M=I_3, potential U_1(q)=||q||^2/2 and force F_1(q)=-q has the rotation flow, whose derivative is orthogonal, so every finite-time tangent growth rate vanishes identically and every Lyapunov exponent that exists is zero; the repulsive linear model with potential U_2(q)=-||q||^2/2 and force F_2(q)=q has the hyperbolic flow, with exact rates +1 and -1 along the eigenvectors of the linearisation and Lyapunov exponent 1 at the equilibrium along each unstable coordinate direction. The check is model-data substitution, not a measurement and not a statement about chaotic behaviour."
sources:
  references:
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), Chapter 5 pp. 60-103: the linearisation of a mechanical system and the growth of infinitesimal deviations"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), Chapter 7 pp. 143-195: Lyapunov exponents and the warning that a positive exponent at a hyperbolic point is not chaos"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §5.2: small oscillations with M=K=1, the harmonic phase rotation and the repulsive case"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Example

**Declared model data.** Take one label with configuration domain
$Q:=\mathbb R^3$, mass $m:=1$ in dimensionless units and force maps
$F_i:\mathbb R\times Q\times\mathbb R^3\to\mathbb R^3$ given by
$F_1(T,\mathbf q,\mathbf v):=-\mathbf q$ and
$F_2(T,\mathbf q,\mathbf v):=\mathbf q$. These are continuous, globally
state-Lipschitz force maps of [[post-cm02-force-superposition]]. Equivalently,
in the constant-metric chart $\Omega:=\mathbb R^3$ with $M:=I_3$, they have
the potentials $U_1(\mathbf q):=\tfrac12\lVert\mathbf q\rVert_2^2$ and
$U_2(\mathbf q):=-\tfrac12\lVert\mathbf q\rVert_2^2$ of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]]. The associated fields
and complete motion maps are listed below; $\mathbf e_1,\mathbf e_2,\mathbf
e_3$ denote the standard coordinate basis of $\mathbb R^3$.

1. The **harmonic model** has field
   $G_1(\mathbf q,\mathbf v)=(\mathbf v,-\mathbf q)$ and motion map
   $$\Phi_t^1(\mathbf q_0,\mathbf v_0)=\bigl(\mathbf q_0\cos t+\mathbf v_0\sin t,\,-\mathbf q_0\sin t+\mathbf v_0\cos t\bigr).$$
2. The **repulsive linear model** has field
   $G_2(\mathbf q,\mathbf v)=(\mathbf v,\mathbf q)$ and motion map
   $$\Phi_t^2(\mathbf q_0,\mathbf v_0)=\bigl(\tfrac12(\mathbf q_0+\mathbf v_0)e^{t}+\tfrac12(\mathbf q_0-\mathbf v_0)e^{-t},\,\tfrac12(\mathbf q_0+\mathbf v_0)e^{t}-\tfrac12(\mathbf q_0-\mathbf v_0)e^{-t}\bigr).$$

For a state $a$ and a nonzero tangent vector $u$ with
$D_a\Phi_t(a)u\ne0$, the **finite-time tangent growth rate** is
$t^{-1}\log(\lVert D_a\Phi_t(a)u\rVert_2/\lVert u\rVert_2)$; when the
forward lifetime is unbounded and its finite limit as $t\to\infty$ exists,
that limit is the **Lyapunov exponent** ([[def-cm16-finite-time-growth-rates]]
clauses (i)-(ii)). Both displayed flows are complete, so this lifetime
condition holds for each state.

**Assertions to check.** (i) Both displayed maps are the local flows of their
fields; (ii) for the harmonic model
$D_{a}\Phi_t^1(a)$ is the orthogonal block rotation
$$\begin{pmatrix}\cos t\,I_3&\sin t\,I_3\\-\sin t\,I_3&\cos t\,I_3\end{pmatrix},$$
so every finite-time tangent growth rate vanishes and every existing
Lyapunov exponent is $0$; (iii) for the repulsive model the rates along the directions
$(\mathbf e_1,-\mathbf e_1)$ and $(\mathbf e_1,\mathbf e_1)$ are $-1$ and
$+1$, so the Lyapunov exponent of the equilibrium along the unstable
eigenvector is $1$.

## Facts & Assumptions

**Given:** the two force maps and their equivalent chart data with $M=I_3$, the displayed candidate flows and the finite-time growth-rate definition of [[def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent]] as recorded in [[def-cm16-finite-time-growth-rates]].

[L1] Uniqueness of force-model motions ([[pthm-cm02-ivp]]): for the adopted force maps, every initial datum has a unique maximal model motion; consequently a globally defined curve that solves the equation with the given initial data is the model's maximal motion.

[L2] calculus ([[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-sine-and-cosine-derivatives]], [[def-natural-logarithm]], [[def-euclidean-inner-product]]): the exponential and trigonometric functions have their standard derivatives, sums and constant multiples differentiate termwise, and $\log$ is the natural logarithm, so that $\log e^{s}=s$ for real $s$.

## Verification

**Proof technique:** direct.

1.1 The two fields: for the constant metric $M=I_3$ the mechanical field of [[def-cm-mechanical-vector-field-and-energy-in-a-chart]] is $G(\mathbf q,\mathbf v)=(\mathbf v,-\nabla U(\mathbf q))$, giving $G_1(\mathbf q,\mathbf v)=(\mathbf v,-\mathbf q)$ and $G_2(\mathbf q,\mathbf v)=(\mathbf v,\mathbf q)$. These are also the force-model fields of the declared $F_1,F_2$. [given, algebra]

2.1 Harmonic flow: differentiating the displayed $\Phi_t^1$ with respect to $t$ by [L2] gives $(\dot{\mathbf q},\dot{\mathbf v})=(\mathbf v,-\mathbf q)$; at $t=0$ the map is the identity. By [L1] the displayed map is the force model's maximal flow. [given, step 1.1, L1, L2, algebra]

2.2 Repulsive flow: differentiating the displayed $\Phi_t^2$ gives $\dot{\mathbf q}=\mathbf v(t)$ and $\dot{\mathbf v}=\mathbf q(t)$; at $t=0$ the map is the identity, so by [L1] it is the force model's maximal flow of $G_2$. [given, step 1.1, L1, L2, algebra]

3.1 Harmonic growth rates: $\Phi_t^1$ is linear in $a=(\mathbf q_0,\mathbf v_0)$, with derivative $$D_a\Phi_t^1(a)=\begin{pmatrix}\cos t\,I_3&\sin t\,I_3\\-\sin t\,I_3&\cos t\,I_3\end{pmatrix};$$ this matrix is orthogonal, whence $\lVert D_a\Phi_t^1(a)u\rVert_2=\lVert u\rVert_2$ for every $u\ne0$. The explicit flow exists for every real time, so the forward lifetime is unbounded, as required by the exponent definition. Therefore $r(t,a,u)=t^{-1}\log1=0$ for every $t>0$, and the limit defining the Lyapunov exponent exists and equals $0$; the variational equation of [[pthm-cm16-variational-equation-and-linearization]] is satisfied by this derivative matrix, whose columns solve $\dot Y=DG_1Y$ by step 2.1. [step 2.1, given, L2, algebra]

3.2 Repulsive growth rates: for an initial tangent vector $(\delta\mathbf q,\delta\mathbf v)$ put $\mathbf u:=\delta\mathbf q+\delta\mathbf v$ and $\mathbf w:=\delta\mathbf q-\delta\mathbf v$. The derivative flow satisfies $\delta\mathbf q(t)+\delta\mathbf v(t)=e^t\mathbf u$ and $\delta\mathbf q(t)-\delta\mathbf v(t)=e^{-t}\mathbf w$. For each $j\in\{1,2,3\}$, input $(\mathbf e_j,\mathbf e_j)$ gives output $e^t(\mathbf e_j,\mathbf e_j)$ and rate $+1$, while input $(\mathbf e_j,-\mathbf e_j)$ gives output $e^{-t}(\mathbf e_j,-\mathbf e_j)$ and rate $-1$. The explicit flow exists for every real time, so the lifetime hypothesis holds and these Lyapunov exponents exist. At the equilibrium $a=(\mathbf 0,\mathbf 0)$ this gives a positive exponent along each unstable coordinate eigenvector. [step 2.2, given, L2, algebra]

4.1 Scope check: all steps substitute declared dimensionless data into the chart formulas and the definition of the finite-time rate; no step produces a chaotic invariant set, a mixing property or a measurement, and the positive exponent of step 3.2 concerns the linear model at its equilibrium, as the page's counterexample discusses. [step 3.1, step 3.2, given] ∎

## Remarks

- **What is genuinely checked.** The example verifies that the variational
  equation holds with the displayed derivative matrices and that the growth
  rate is invariant under multiplication of the deviation by nonzero scalars
  (the logarithm of a positive factor cancels against the norm ratio), so the
  rate is a function of the direction, not of the length of $u$. Both flows
  are complete on the declared chart; no domain-escape phenomenon occurs.

- **The unstable direction.** For the repulsive model the directions
  $(\mathbf e_j,\mathbf e_j)$ and $(\mathbf e_j,-\mathbf e_j)$ are exactly the
  eigendirections of $A=DG_2(\mathbf 0,\mathbf 0)=
  \begin{pmatrix}0&I_3\\I_3&0\end{pmatrix}$, with eigenvalues $+1$ and $-1$,
  respectively, so the rates $\pm1$ are the eigenvalues of the linearisation,
  in agreement with
  [[pthm-cm16-hyperbolic-linearization]] clause 1 with $c=1$.
