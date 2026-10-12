---
id: ex-cm16-linearization-and-growth-checks
kind: example
title: "Two declared linear models worked through: the harmonic flow has zero finite-time growth in every direction, while the repulsive linear model has exact rates $\\pm1$ and the positive Lyapunov exponent $1$ at its equilibrium"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-cm16-flow-equilibria-and-invariant-sets,
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
physical_scope: "A declared-data check of the page's finite-time growth definition and of the variational-equation supplier on two dimensionless linear mechanical models: the harmonic model M=K=1 has the rotation flow, whose derivative is orthogonal, so every finite-time tangent growth rate vanishes identically and every Lyapunov exponent that exists is zero; the repulsive linear model U=-q^2/2 has the hyperbolic flow, with exact rates +1 and -1 along the eigenvectors of the linearisation and Lyapunov exponent 1 at the equilibrium along the unstable direction. The check is model-data substitution, not a measurement and not a statement about chaotic behaviour."
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

**Declared model data.** Work in the one-dimensional chart $\Omega:=\mathbb R$
with the constant kinetic metric $M:=1$ (dimensionless units). Two potentials
are declared:

1. the **harmonic model** $U_1(q):=\tfrac12q^2$, with field
   $G_1(q,v)=(v,-q)$ and motion map
   $\Phi_t^1(q_0,v_0)=(q_0\cos t+v_0\sin t,\,-q_0\sin t+v_0\cos t)$;
2. the **repulsive linear model** $U_2(q):=-\tfrac12q^2$, with field
   $G_2(q,v)=(v,q)$ and motion map
   $\Phi_t^2(q_0,v_0)=\bigl(\tfrac12(q_0+v_0)e^{t}+\tfrac12(q_0-v_0)e^{-t},\,
   \tfrac12(q_0+v_0)e^{t}-\tfrac12(q_0-v_0)e^{-t}\bigr)$.

**Assertions to check.** (i) Both displayed maps are the local flows of their
fields; (ii) for the harmonic model
$D_{a}\Phi_t^1(a)$ is the rotation
$\begin{pmatrix}\cos t&\sin t\\-\sin t&\cos t\end{pmatrix}$, so every
finite-time tangent growth rate vanishes and every existing Lyapunov exponent
is $0$; (iii) for the repulsive model the rates along the directions
$(1,-1)$ and $(1,1)$ are $-1$ and $+1$, so the Lyapunov exponent of the
equilibrium along the unstable eigenvector is $1$.

## Facts & Assumptions

**Given:** the two chart data with $M=1$, the displayed candidate flows and the finite-time growth-rate definition of [[def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent]] as recorded in [[def-cm16-finite-time-growth-rates]].

[L1] Uniqueness of linear motions ([[pthm-cm02-ivp]]): the initial-value problem of a chart mechanical model with continuous state-locally-Lipschitz field has a unique maximal motion through every state; consequently a globally defined curve that solves the equation with the given initial data is the model's maximal motion.

[L2] calculus ([[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-sine-and-cosine-derivatives]], [[def-natural-logarithm]], [[def-euclidean-inner-product]]): the exponential and trigonometric functions have their standard derivatives, sums and constant multiples differentiate termwise, and $\log$ is the natural logarithm, so that $\log e^{s}=s$ for real $s$.

## Verification

**Proof technique:** direct.

1.1 The two fields: for the constant metric $M=1$ the mechanical field of [[def-cm-mechanical-vector-field-and-energy-in-a-chart]] is $G(q,v)=(v,-\nabla U(q))$, giving $G_1(q,v)=(v,-q)$ and $G_2(q,v)=(v,q)$. [given, algebra]

2.1 Harmonic flow: differentiating the displayed $\Phi_t^1$ with respect to $t$ by [L2] gives derivatives $(-q_0\sin t+v_0\cos t,\,-q_0\cos t-v_0\sin t)$, which equal $(v(t),-q(t))$ for $(q(t),v(t)):=\Phi_t^1(q_0,v_0)$; at $t=0$ the map is the identity. By [L1] the displayed map is the local flow of $G_1$. [given, step 1.1, L1, L2, algebra]

2.2 Repulsive flow: differentiating the displayed $\Phi_t^2$ gives $\dot q=\tfrac12(q_0+v_0)e^{t}-\tfrac12(q_0-v_0)e^{-t}=v(t)$ and $\dot v=\tfrac12(q_0+v_0)e^{t}+\tfrac12(q_0-v_0)e^{-t}=q(t)$; at $t=0$ the map is the identity, so by [L1] it is the local flow of $G_2$. [given, step 1.1, L1, L2, algebra]

3.1 Harmonic growth rates: $\Phi_t^1$ is linear in $a=(q_0,v_0)$, so $D_a\Phi_t^1(a)$ is the matrix displayed in the Assertions; it is orthogonal, whence $\lVert D_a\Phi_t^1(a)u\rVert_2=\lVert u\rVert_2$ for every $u\ne0$. The explicit flow exists for every real time, so the forward lifetime is unbounded, as required by the exponent definition. Therefore $r(t,a,u)=t^{-1}\log1=0$ for every $t>0$, and the limit defining the Lyapunov exponent exists and equals $0$; the variational equation of [[pthm-cm16-variational-equation-and-linearization]] is satisfied by this derivative matrix, whose columns solve $\dot Y=DG_1Y$ by step 2.1. [step 2.1, given, L2, algebra]

3.2 Repulsive growth rates: in the coordinates $u:=q+v$, $w:=q-v$ one has $D_a\Phi_t^2(a)(u,w)=(ue^{t},we^{-t})$; for the tangent vector $(1,1)$ (that is $u=2$, $w=0$) this gives $\lVert D_a\Phi_t^2(a)(1,1)\rVert_2=e^{t}\sqrt2$ and rate $r(t,a,(1,1))=t^{-1}\log e^{t}=1$, while for $(1,-1)$ (that is $u=0$, $w=2$) the norm is $e^{-t}\sqrt2$ and the rate is $-1$; the explicit flow exists for every real time, so the lifetime hypothesis holds and the Lyapunov exponent therefore exists and equals $+1$, respectively $-1$, along these directions. At the equilibrium $a=(0,0)$ this exhibits a positive exponent while the equilibrium is a single point. [step 2.2, given, L2, algebra]

4.1 Scope check: all steps substitute declared dimensionless data into the chart formulas and the definition of the finite-time rate; no step produces a chaotic invariant set, a mixing property or a measurement, and the positive exponent of step 3.2 concerns the linear model at its equilibrium, as the page's counterexample discusses. [step 3.1, step 3.2, given] ∎

## Remarks

- **What is genuinely checked.** The example verifies that the variational
  equation holds with the displayed derivative matrices and that the growth
  rate is invariant under multiplication of the deviation by nonzero scalars
  (the logarithm of a positive factor cancels against the norm ratio), so the
  rate is a function of the direction, not of the length of $u$. Both flows
  are complete on the declared chart; no domain-escape phenomenon occurs.

- **The unstable direction.** For the repulsive model the state
  $(q,v)=(t_0, t_0)$-directions are exactly the eigendirections of
  $A=DG_2(0,0)=\begin{pmatrix}0&1\\1&0\end{pmatrix}$: $A(1,1)=(1,1)$ and
  $A(1,-1)=-(1,-1)$, so the rates $\pm1$ are the eigenvalues of the
  linearisation, in agreement with
  [[pthm-cm16-hyperbolic-linearization]] clause 1 with $c=1$.
