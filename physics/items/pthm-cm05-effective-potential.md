---
id: pthm-cm05-effective-potential
kind: physics-theorem
title: "Reduction of the central problem to the effective one-dimensional potential: $\\mu\\rho''=-(U^{\\mathrm{eff}}_J)'(\\rho)$, the energy identity, and the converse reconstruction of the planar trajectory from the radial data"
status: published
origin: session
domain: physics
dependency_level: 15
deps: [post-cm05-central-model, pthm-cm05-relative-reduction, def-cm-central-force-trajectory, thm-cm-central-force-polar-reduction, lem-cm-oriented-orthonormal-triads, lem-cm-derivative-of-pairings-of-curves, thm-chain-rule, thm-algebra-of-derivatives, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, def-vector-valued-derivative-and-integral, def-interval, cor-primitives-of-a-continuous-function]
dependency_roles:
  post-cm05-central-model: formulation-prerequisite
  pthm-cm05-relative-reduction: physical-result
  def-cm-central-force-trajectory: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  lem-cm-oriented-orthonormal-triads: mathematical-premise
  lem-cm-derivative-of-pairings-of-curves: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The one-dimensional reduction of the non-radial central problem in the adopted model class for angular-momentum magnitude J>0: the radial coordinate takes values in the declared open radial interval J_0 and obeys the effective-potential equation with the centrifugal term, its energy is the constant first integral of that one-dimensional problem, and conversely every C^2 radial solution valued in J_0 together with the angular quadrature reconstructs a planar central-force trajectory with the prescribed angular momentum, hence a motion of the two-label model together with a uniform centre-of-mass motion. The result is a conditional deduction; it asserts no observation, no measured value, and no global existence for either side."
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), Section 2.5.4, printed pp. 32-33 (PDF pp. 38-39), Eqs. (2.85)-(2.89): the radial Lagrange equation, the effective potential $V_{\\rm eff}(r)=V(r)+J^2/(2\\mu r^2)$ with its angular-momentum barrier, the conserved energy and the reduction to quadratures"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, Eqs. (3.41)-(3.48), chapter pages 10-11 (PDF pages 43-44): the energy as a one-dimensional radial problem in the effective potential $U_{\\rm ef}(r)=U(r)+L_z^2/(2mr^2)$, with the radial and angular quadratures"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 4.5, printed pp. 79-80 (PDF pp. 82-83), Eqs. (4.149)-(4.154): the effective potential, the constant energy of the reduced problem and the radial and orbital quadratures for the relative coordinate"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
---

## Statement

Adopt the central-force model of [[post-cm05-central-model]] clause (i) with
masses $m_1,m_2>0$, reduced mass $\mu=m_1m_2/M$, $M=m_1+m_2$, static central
pair potential $u\in C^2(J_0)$, and let $x:I\to Q$ be a motion on a time
interval $I$ with relative
coordinate $r$, attached angular momentum $j=\mu\,r\times r'$, and suppose
$j=Je_3$ with $J>0$ for an oriented orthonormal triad $(e_1,e_2,e_3)$
([[pthm-cm05-relative-reduction]], [[lem-cm-oriented-orthonormal-triads]]).
Let $(\rho,\theta)$ be polar data for $r$ in that triad
([[thm-cm-central-force-polar-reduction]]) and put
$$U^{\mathrm{eff}}_J(\rho):=u(\rho)+\frac{J^2}{2\mu\rho^2}\qquad(\rho\in J_0),$$
the **effective potential** of angular momentum $J$, of class $C^2$ on $J_0$
([[def-cm-central-force-trajectory]]). Then:

1. **(Radial problem.)** On $I$: $\rho^2\theta'=J/\mu>0$, the effective
   equation
   $$\mu\,\rho''=-\bigl(U^{\mathrm{eff}}_J\bigr)'(\rho)$$
   holds, and the relative energy
   $E=\tfrac12\mu\lVert r'\rVert_2^2+u(\lvert r\rvert)$ satisfies
   $E=\tfrac12\mu(\rho')^2+U^{\mathrm{eff}}_J(\rho)$ and is constant on $I$;
   equivalently, the radial coordinate solves the one-dimensional mechanical
   initial-value problem of mass $\mu$ on the declared radial interval $J_0$
   (an interval contained in $\rho>0$) in the
   potential $U^{\mathrm{eff}}_J$.
2. **(Reconstruction.)** Conversely, let $\rho^{\circ}:I\to\mathbb R$ be a
   $C^2$ function with $\rho^{\circ}(t)\in J_0$ and
   $\mu(\rho^{\circ})''=-(U^{\mathrm{eff}}_J)'(\rho^{\circ})$ on $I$, and let
   $\theta^{\circ}:I\to\mathbb R$ be a $C^2$ function with
   $(\theta^{\circ})'=J/\bigl(\mu(\rho^{\circ})^2\bigr)$ on $I$ (for instance
   $\theta^{\circ}(t)=\theta_0+\frac{J}{\mu}\int_{t_0}^{t}\rho^{\circ}(s)^{-2}\mathrm ds$).
   Then
   $$r^{\circ}(t):=\rho^{\circ}(t)\bigl(\cos\theta^{\circ}(t)\,e_1+\sin\theta^{\circ}(t)\,e_2\bigr)\qquad(t\in I)$$
   is a central-force trajectory for $(\mu,u)$ with
   $j^{\circ}=\mu\,r^{\circ}\times(r^{\circ})'=Je_3$ and constant energy
   $\tfrac12\mu\bigl((\rho^{\circ})'\bigr)^2+U^{\mathrm{eff}}_J(\rho^{\circ})$.
3. **(Mutual inversion and model reconstruction.)** The assignments of
   clauses 1 and 2 are mutually inverse: reconstructing from the polar data
   of $r$ returns $r$, and the polar data of the reconstructed $r^{\circ}$
   agree with $(\rho^{\circ},\theta^{\circ})$ up to an additive constant of
   the angular coordinate. Consequently, together with an affine
   centre-of-mass curve $X^{\circ}$ with $(X^{\circ})''=0$ on $I$, the datum
   $(\rho^{\circ},\theta^{\circ})$ reconstructs a motion of the two-label
   model with angular momentum $Je_3$, centre of mass $X^{\circ}$ and relative
   coordinate $r^{\circ}$ ([[pthm-cm05-relative-reduction]] clause 4).

## Facts & Assumptions

**Given:** The central-force model of class (i), the motion $x:I\to Q$ on the time interval $I$, its relative coordinate $r$, the nonzero constant angular momentum $j=Je_3$, the oriented orthonormal triad, and the polar data $(\rho,\theta)$; for clause 2, the functions $\rho^{\circ},\theta^{\circ}$ and the curve $r^{\circ}$ of the statement.

[L1] Reduction and attached objects ([[pthm-cm05-relative-reduction]] clauses 3-4, [[def-cm-central-force-trajectory]], [[post-cm05-central-model]] clause (ii)): $r$ is a central-force trajectory for $(\mu,u)$ on $I$ with $j=\mu r\times r'=Je_3$ constant and energy $E=\frac12\mu\lVert r'\rVert_2^2+u(\lvert r\rvert)$; the reduction reconstruction with an affine $X^{\circ}$ is clause 4 of the cited theorem.

[L2] Polar reduction ([[thm-cm-central-force-polar-reduction]], [[lem-cm-oriented-orthonormal-triads]]): for a central-force trajectory with constant $j=Je_3$, $J>0$, there are twice differentiable $\rho:I\to(0,\infty)$, $\theta:I\to\mathbb R$ with $r=\rho(\cos\theta\,e_1+\sin\theta\,e_2)$; for every such pair, $\rho^2\theta'=J/\mu$, $\mu\rho''=-(U^{\mathrm{eff}}_J)'(\rho)$ with $U^{\mathrm{eff}}_J=u+J^2/(2\mu\rho^2)$, and $E=\frac12\mu(\rho')^2+U^{\mathrm{eff}}_J(\rho)$ is constant; the triad identity $x=\sum_i\langle x,e_i\rangle e_i$ holds.

[L3] Differentiation rules ([[lem-cm-derivative-of-pairings-of-curves]], [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-vector-valued-derivative-and-integral]], [[cor-primitives-of-a-continuous-function]]): sums, differences, products, quotients with nonvanishing denominators and compositions of $C^k$ curves are $C^k$ with the usual derivative rules; $(\cos)'=-\sin$, $(\sin)'=\cos$, and $\sin^2+\cos^2=1$; for a continuous $f:I\to\mathbb R$ on an interval with at least two points, the integral from a fixed base point defines a $C^1$ primitive (clause 1 of [[cor-primitives-of-a-continuous-function]]), and any two primitives of $f$ on $I$ differ by a constant (clause 2). The first clause supplies the angular quadrature, and the second supplies angular-phase uniqueness.

[L4] Cross product ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-euclidean-inner-product]]): the cross product is bilinear and alternating, $e_1\times e_2=e_3$ for a positively oriented orthonormal triad, and orthonormality gives $\lvert r^{\circ}\rvert^2=(\rho^{\circ})^2$ for the curve of clause 2.

[L5] The intervals: $I$ has nonempty interior, $J_0\subseteq(0,\infty)$ is open, and $U^{\mathrm{eff}}_J$ is $C^2$ on $J_0$ as a sum of $u$ and a quotient with nonvanishing denominator ([[def-interval]], [[def-cm-central-force-trajectory]], [L3]).

## Proof

**Proof technique:** direct.

1.1 Clause 1: by [L1], $r$ is a central-force trajectory for $(\mu,u)$ with constant $j=Je_3$, so the hypotheses of [L2] hold and its conclusions give $\rho^2\theta'=J/\mu$, $\mu\rho''=-(U^{\mathrm{eff}}_J)'(\rho)$, and $E=\frac12\mu(\rho')^2+U^{\mathrm{eff}}_J(\rho)$ constant on $I$; [L5] makes $U^{\mathrm{eff}}_J$ a $C^2$ function on $J_0$, so the displayed equation is the one-dimensional mechanical equation for the coordinate $\rho$ on the declared radial interval $J_0\subseteq(0,\infty)$. [given, L1, L2, L5, algebra]

1.2 Clause 2, construction and equations: define $n:=\cos\theta^{\circ}e_1+\sin\theta^{\circ}e_2$ and $n_\perp:=-\sin\theta^{\circ}e_1+\cos\theta^{\circ}e_2$, and $r^{\circ}:=\rho^{\circ}n$. By [L3], $r^{\circ}$ is $C^2$ with $n'=(\theta^{\circ})'n_\perp$, $n_\perp'=-(\theta^{\circ})'n$ and $(r^{\circ})'=(\rho^{\circ})'n+\rho^{\circ}(\theta^{\circ})'n_\perp$, hence $(r^{\circ})''=\bigl((\rho^{\circ})''-\rho^{\circ}((\theta^{\circ})')^2\bigr)n+\bigl(2(\rho^{\circ})'(\theta^{\circ})'+\rho^{\circ}(\theta^{\circ})''\bigr)n_\perp$. With $(\theta^{\circ})'=J/(\mu(\rho^{\circ})^2)$ the second coefficient is $\frac{1}{\rho^{\circ}}\bigl((\rho^{\circ})^2(\theta^{\circ})'\bigr)'=0$, and the radial equation gives $\mu\bigl((\rho^{\circ})''-\rho^{\circ}((\theta^{\circ})')^2\bigr)=\mu(\rho^{\circ})''-\frac{J^2}{\mu(\rho^{\circ})^3}=-u'(\rho^{\circ})$, since $-(U^{\mathrm{eff}}_J)'(\rho^{\circ})=-u'(\rho^{\circ})+\frac{J^2}{\mu(\rho^{\circ})^3}$. Therefore $\mu(r^{\circ})''=-u'(\rho^{\circ})n=-\frac{u'(\lvert r^{\circ}\rvert)}{\lvert r^{\circ}\rvert}r^{\circ}$, the last equality by $\lvert r^{\circ}\rvert=\rho^{\circ}$ and $r^{\circ}=\rho^{\circ}n$ from [L4]. [given, L3, L4, algebra]

2.1 Clause 2, consequences: $\lvert r^{\circ}\rvert=\rho^{\circ}$ takes values in $J_0$ and $\rho^{\circ}$ is positive, so step 1.2 exhibits $r^{\circ}$ as a central-force trajectory for $(\mu,u)$ in the sense of the definition, with $r^{\circ}\times(r^{\circ})'=(\rho^{\circ})^2(\theta^{\circ})'\,(n\times n_\perp)=(\rho^{\circ})^2(\theta^{\circ})'e_3=\frac{J}{\mu}e_3$ by [L4] and $n\times n_\perp=e_3$; hence $j^{\circ}=\mu\,r^{\circ}\times(r^{\circ})'=Je_3$. Its energy is $\frac12\mu\lVert(r^{\circ})'\rVert_2^2+u(\rho^{\circ})=\frac12\mu\bigl((\rho^{\circ})'\bigr)^2+\frac{J^2}{2\mu(\rho^{\circ})^2}+u(\rho^{\circ})=\frac12\mu\bigl((\rho^{\circ})'\bigr)^2+U^{\mathrm{eff}}_J(\rho^{\circ})$ by [L3] and orthonormality. Since step 1.2 establishes that $r^{\circ}$ is a central-force trajectory with nonzero constant $j^{\circ}=Je_3$, the energy conservation conclusion of [L2] applies and shows that this displayed energy is constant on $I$. [step 1.2, L2, L3, L4, algebra]

3.1 Clause 3: if $(\rho,\theta)$ are the polar data of a trajectory $r$ as in clause 1, the construction of clause 2 applied to $(\rho,\theta)$ returns $\rho(\cos\theta\,e_1+\sin\theta\,e_2)=r$. Conversely, if $r^{\circ}$ is constructed from $(\rho^{\circ},\theta^{\circ})$ and $(\tilde\rho,\tilde\theta)$ is any polar data of $r^{\circ}$ supplied by [L2], then $\tilde\rho=\lvert r^{\circ}\rvert=\rho^{\circ}$ and $\tilde\rho^2\tilde\theta'=J/\mu=\tilde\rho^2(\theta^{\circ})'$, so $\tilde\theta$ and $\theta^{\circ}$ are primitives of the same continuous function $f(t)=J/(\mu(\rho^{\circ}(t))^2)$ on the nondegenerate interval $I$. By [L3], clause 2 of [[cor-primitives-of-a-continuous-function]], the two angle functions differ by a constant. Combining with [L1] clause 4, the pair $(\rho^{\circ},\theta^{\circ})$ together with any affine $X^{\circ}$ with $(X^{\circ})''=0$ on $I$ reconstructs a motion of the two-label model with relative coordinate $r^{\circ}$ and centre of mass $X^{\circ}$, and by step 2.1 that motion has angular momentum $Je_3$. This completes the proof. [step 1.1, step 1.2, step 2.1, L1, L2, L3, algebra] ∎

## Remarks

- **The barrier is not a force.** $U^{\mathrm{eff}}_J=u+J^2/(2\mu\rho^2)$ collects the potential and the centrifugal term of the angular motion; the term is a bookkeeping device of the reduced one-dimensional problem, and no new interaction is introduced.

- **Energy is the first integral used later.** The page's later orbit statements consume the radial equation and the constancy of $E$ from clause 1; clause 2 is what makes the reduction lossless up to the angular phase.

- **No global existence.** Neither clause asserts that a solution of the radial equation exists for all times or that it avoids $\rho\to0$; those are separate questions examined by the subsequent items and the scope remark.
