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
       cor-trigonometric-parity-and-pythagorean-identity,
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
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A declared-data check of two physical one-label Cartesian force models with m0=1 kg, ell0=1 m and t0=1 s: F_1,phys=-(m0/t0^2)X and F_2,phys=(m0/t0^2)X, in newtons. The formulas use normalized q=X/ell0, v=t0 V/ell0 and t=T/t0, mass 1 and potentials U_1(q)=||q||^2/2 and U_2(q)=-||q||^2/2 with energy reference E0=m0 ell0^2/t0^2. In this numerical state metric the harmonic derivative is orthogonal, so all finite-time rates and Lyapunov exponents are zero; the repulsive derivative has exact rates plus and minus 1 along its eigendirections, with positive exponent 1 at equilibrium. The corresponding physical rates divide by t0. All data are declared, with no measurement and no claim of chaos."
sources:
  references:
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), §7.3.1 pp. 164-170: linear fixed-point equations and their exponential solutions; the exact six-dimensional model computations are proved locally"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), §7.6.1 pp. 189-191: contextual discussion of Lyapunov exponents; the distinction between a positive equilibrium exponent and chaos in the stated sense is established locally"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §5.1, equations (5.2)-(5.3): the linear harmonic equation and its sine/cosine solution; the repulsive model and tangent-rate calculations are supplied locally"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Example

**Declared model data and normalization.** Take one label with
$Q:=\mathbb R^3$ and declare physical reference data
$m_0:=1\ \mathrm{kg}$, $\ell_0:=1\ \mathrm m$, $t_0:=1\ \mathrm s$.
For $\sigma_1=-1$, $\sigma_2=1$ define physical force maps
$F_{i,\rm phys}:\mathbb R\times Q\times\mathbb R^3\to\mathbb R^3$ by
$F_{i,\rm phys}(T,\mathbf X,\mathbf V)=\sigma_i(m_0/t_0^2)\mathbf X$,
with $T$ in seconds, $\mathbf X$ in metres, $\mathbf V$ in metres per second,
and outputs in newtons. These are smooth globally state-Lipschitz force
maps of [[post-cm02-force-superposition]] with physical mass $m_0$.
Put $t=T/t_0$, $\mathbf q=\mathbf X/\ell_0$,
$\mathbf v=t_0\mathbf V/\ell_0$ and $E_0=m_0\ell_0^2/t_0^2$. Then
$m_0\ddot{\mathbf X}=F_{i,\rm phys}$ becomes
$\mathbf q''=\sigma_i\mathbf q$, with $\mathbf q'=\mathbf v$, since
$\ddot{\mathbf X}=(\ell_0/t_0^2)\mathbf q''$. The normalized force maps are
$F_i(t,\mathbf q,\mathbf v)=F_{i,\rm phys}(t_0t,\ell_0\mathbf q,(\ell_0/t_0)\mathbf v)/(m_0\ell_0/t_0^2)=\sigma_i\mathbf q$,
with normalized mass $m=1$. The physical potentials are
$U_{i,\rm phys}(\mathbf X)=-\sigma_i m_0\lVert\mathbf X\rVert_2^2/(2t_0^2)$;
normalizing their energies by $E_0$ gives, in the constant-metric chart $\Omega:=\mathbb R^3$ with $M:=I_3$, they have
the potentials $U_1(\mathbf q):=\tfrac12\lVert\mathbf q\rVert_2^2$ and
$U_2(\mathbf q):=-\tfrac12\lVert\mathbf q\rVert_2^2$ of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]]. The associated fields
and complete motion maps are listed below; $\mathbf e_1,\mathbf e_2,\mathbf
e_3$ denote the coordinate basis, explicitly
$\mathbf e_j(k)=1$ for $k=j-1$ and $0$ otherwise, for $k\in\{0,1,2\}$ and
$j\in\{1,2,3\}$. All state and tangent norms below apply to the
 dimensionless numerical coordinates $(\mathbf q,\mathbf v)$.

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

[L1] Uniqueness of force-model motions ([[pthm-cm02-ivp]]): for the adopted physical force maps, every initial datum has a unique maximal model motion; consequently a globally defined curve that solves the equation with the given initial data is the model's maximal motion. The invertible state and time normalization transfers this uniqueness and maximality to the numerical systems.

[L2] calculus ([[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-sine-and-cosine-derivatives]], [[def-natural-logarithm]], [[def-euclidean-inner-product]]): the exponential and trigonometric functions have their standard derivatives, sums and constant multiples differentiate termwise, and $\log$ is the natural logarithm, so that $\log e^{s}=s$ for real $s$.

[L3] Pythagorean identity ([[cor-trigonometric-parity-and-pythagorean-identity]]): for every real $t$, $\sin^2t+\cos^2t=1$.

## Verification

**Proof technique:** direct.

1.1 The two fields: for the constant metric $M=I_3$ the mechanical field of [[def-cm-mechanical-vector-field-and-energy-in-a-chart]] is $G(\mathbf q,\mathbf v)=(\mathbf v,-\nabla U(\mathbf q))$, giving $G_1(\mathbf q,\mathbf v)=(\mathbf v,-\mathbf q)$ and $G_2(\mathbf q,\mathbf v)=(\mathbf v,\mathbf q)$. These are also the normalized force-model fields of the declared physical $F_{1,\rm phys},F_{2,\rm phys}$. [given, algebra]

2.1 Harmonic flow: differentiating the displayed $\Phi_t^1$ with respect to $t$ by [L2] gives $(\dot{\mathbf q},\dot{\mathbf v})=(\mathbf v,-\mathbf q)$; at $t=0$ the map is the identity. By [L1] the displayed map is the force model's maximal flow. [given, step 1.1, L1, L2, algebra]

2.2 Repulsive flow: differentiating the displayed $\Phi_t^2$ gives $\dot{\mathbf q}=\mathbf v(t)$ and $\dot{\mathbf v}=\mathbf q(t)$; at $t=0$ the map is the identity, so by [L1] it is the force model's maximal flow of $G_2$. [given, step 1.1, L1, L2, algebra]

3.1 Harmonic growth rates: $\Phi_t^1$ is linear in $a=(\mathbf q_0,\mathbf v_0)$, with derivative $$D_a\Phi_t^1(a)=\begin{pmatrix}\cos t\,I_3&\sin t\,I_3\\-\sin t\,I_3&\cos t\,I_3\end{pmatrix};$$ writing $c=\cos t$, $s=\sin t$, its transpose times itself has diagonal blocks $(c^2+s^2)I_3=I_3$ by [L3] and off-diagonal blocks $csI_3-scI_3=0$, so it is orthogonal, whence $\lVert D_a\Phi_t^1(a)u\rVert_2=\lVert u\rVert_2$ for every $u\ne0$. The explicit flow exists for every real time, so the forward lifetime is unbounded, as required by the exponent definition. Therefore $r(t,a,u)=t^{-1}\log1=0$ for every $t>0$, and the limit defining the Lyapunov exponent exists and equals $0$; the variational equation of [[pthm-cm16-variational-equation-and-linearization]] is satisfied by this derivative matrix, whose columns solve $\dot Y=DG_1Y$ by step 2.1. [step 2.1, given, L2, L3, algebra]

3.2 Repulsive growth rates: for an initial tangent vector $(\delta\mathbf q,\delta\mathbf v)$ put $\mathbf u:=\delta\mathbf q+\delta\mathbf v$ and $\mathbf w:=\delta\mathbf q-\delta\mathbf v$. The derivative flow satisfies $\delta\mathbf q(t)+\delta\mathbf v(t)=e^t\mathbf u$ and $\delta\mathbf q(t)-\delta\mathbf v(t)=e^{-t}\mathbf w$. For each $j\in\{1,2,3\}$, input $(\mathbf e_j,\mathbf e_j)$ gives output $e^t(\mathbf e_j,\mathbf e_j)$ and rate $+1$, while input $(\mathbf e_j,-\mathbf e_j)$ gives output $e^{-t}(\mathbf e_j,-\mathbf e_j)$ and rate $-1$. The explicit flow exists for every real time, so the lifetime hypothesis holds and these Lyapunov exponents exist. At the equilibrium $a=(\mathbf 0,\mathbf 0)$ this gives a positive exponent along each unstable coordinate eigenvector. [step 2.2, given, L2, algebra]

4.1 Scope check: the chain rule transfers each numerical motion to $\mathbf X(T)=\ell_0\mathbf q(T/t_0)$ satisfying its physical Newton equation. A rate $r$ per numerical time $t$ becomes $r/t_0$ per physical time $T$; thus the physical rates are $0$ and $\pm1/t_0$, and the positive physical exponent is $1/t_0$. All steps substitute declared normalized data into the chart formulas and the finite-time-rate definition; no step produces a chaotic invariant set, a mixing property or a measurement, and the positive exponent of step 3.2 concerns the linear model at its equilibrium, as the page's counterexample discusses. [step 3.1, step 3.2, given, L1, L2, algebra] ∎

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
