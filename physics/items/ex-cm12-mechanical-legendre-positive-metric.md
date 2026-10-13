---
id: ex-cm12-mechanical-legendre-positive-metric
kind: example
title: "Positive kinetic metric: the fibre map $p = \\mathsf Mv$, the Hamiltonian and Hamilton's equations on explicit one- and two-label data"
status: published
origin: session
domain: physics
dependency_level: 19
deps: [def-cm12-cotangent-momentum, def-cm12-hyperregularity, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, pthm-cm12-hamilton-equivalence, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, pthm-cm02-ivp, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-vector-valued-derivative-and-integral, def-derivative, def-interval]
dependency_roles:
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm12-hyperregularity: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  pthm-cm12-hamilton-equivalence: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check of the Legendre transform on the model class with positive definite kinetic operator: a one-label particle of mass m in a uniform downward potential field, with the explicit momentum p = mv, Hamiltonian H = |p|^2/(2m) + mg x_3, Hamilton equations, and the exact falling solution through a prescribed initial datum; and a two-label free model with unequal masses, where the mass operator is not a scalar and the inverse branch is computed entrywise. All quantities are model values of the declared idealizations; no measurement is reported."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.1.3, printed page 84 (PDF page 90): the particle in a potential with p = m r-dot and H = p^2/(2m) + V(r), whose Hamilton equations recover Newton's equation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.1, chapter pages 2-3 (PDF pages 238-239): the one-degree-of-freedom case p = m_ef qdot, H = p^2/(2m_ef) + U_ef, and qddot = -m_ef^{-1} dU_ef/dq"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed page 8 (PDF page 11): the first Hamilton equation inverts the momentum definition and the second provides the Newtonian dynamics"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 8.2-8.3: the Legendre transform of the standard Lagrangian and Hamilton's equations of motion"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Example

**(a) One label in a uniform field.** Declare the one-label model of the force
branch of [[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time
window $I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$ and potential
$U(t,x):=mgx_{3}$ with constant acceleration magnitude $g>0$, $[g]=\ell\tau^{-2}$, read in $\mathrm{m\,s^{-2}}$, with no residual forces; the force map
is $F=(0,0,-mg)$ and the mechanical Lagrangian is
$L(t,x,v)=\tfrac12m\lvert v\rvert_{2}^{2}-mgx_{3}$
([[def-cm03-potential-and-mechanical-energy]],
[[def-cm07-action-and-mechanical-lagrangian]]). Then:

1. the momentum of the presentation is $p=\mathsf Mv=mv$
   ([[def-cm12-cotangent-momentum]]), the presentation is hyperregular on the
   Cartesian chart with inverse branch $v=p/m$
   ([[pthm-cm12-mechanical-hyperregularity]]), and the Hamiltonian is
   $$H(t,x,p)=\frac{\lvert p\rvert_{2}^{2}}{2m}+mgx_{3}.$$
2. Hamilton's equations $\dot x=H_{p}$, $\dot p=-H_{x}$ read
   $\dot x=p/m$, $\dot p=(0,0,-mg)$, so that $m\ddot x=\dot p=(0,0,-mg)$:
   the system is equivalent to the model's equation of motion and the
   potential is the uniform field ([[pthm-cm12-hamilton-equivalence]]).
3. for every datum $(0,x_{0},v_{0})$, where $x_0\in\mathbb R^3$ is the initial position (metres) and $v_0\in\mathbb R^3$ the initial coordinate velocity (metres per second), the curve
   $$x(t):=x_{0}+v_{0}t-\tfrac12gt^{2}e_{3},\qquad e_{3}=(0,0,1),$$
   is the maximal motion of the model through that datum, defined for all
   real times; its velocity is $v_{0}-gte_{3}$ and its momentum is
   $m\bigl(v_{0}-gte_{3}\bigr)$.

**(b) Two labels with unequal masses.** Declare instead the free two-label
model $N=2$, masses $m_{1},m_{2}>0$, $I_{0}=\mathbb R$, $Q=\mathbb R^{6}$ and
zero force map, so that $U\equiv0$. Then $\mathsf M(v_{1},v_{2})=(m_{1}v_{1},m_{2}v_{2})$,
the Hamiltonian is $H=\lvert p_{1}\rvert_{2}^{2}/(2m_{1})+\lvert p_{2}\rvert_{2}^{2}/(2m_{2})$,
the inverse branch is $v=\mathsf M^{-1}p=(p_{1}/m_{1},p_{2}/m_{2})$, and
Hamilton's equations are $\dot x_{i}=p_{i}/m_{i}$, $\dot p_{i}=0$: each label
moves uniformly in a straight line, and the fibre map is a linear isomorphism
whose inverse is not a scalar multiple of the identity when $m_{1}\neq m_{2}$.

All quantities are model values of the declared idealizations; no measurement
is reported.

## Facts & Assumptions

**Given:** The one-label model of part (a) with its uniform potential and the two-label free model of part (b), together with their mechanical Lagrangians, momenta, Hamiltonians and initial data.

[F1] Model and Lagrangian data ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm01-configuration]]): the mechanical Lagrangian of a declared potential presentation is $L=K-U$ with $K(v)=\tfrac12v\cdot\mathsf Mv$, $\mathsf M$ symmetric positive definite, and for one label $\mathsf Mv=mv$ with $m>0$; dimensions are read by [[def-cm01-units]].

[F2] Momentum, hyperregularity and Hamiltonian ([[def-cm12-cotangent-momentum]], [[def-cm12-hyperregularity]], [[def-cm12-hamiltonian]], [[pthm-cm12-mechanical-hyperregularity]]): the fibre derivative is the momentum $p=\mathsf Mv$, the presentation is hyperregular on the Cartesian chart with $v=\mathsf M^{-1}p$, and the Hamiltonian of the branch is $H(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+U(t,x)$.

[F3] Equivalence theorem ([[pthm-cm12-hamilton-equivalence]]): for the global potential branch a curve is a motion of the model if and only if, with $p=\mathsf Mx'$, the pair satisfies Hamilton's equations of the branch Hamiltonian.

[F4] Initial-value theory ([[def-cm02-newtonian-flow]], [[pthm-cm02-ivp]]): every initial datum of the model has exactly one maximal motion, and a motion defined on all of $\mathbb R$ through the datum is that maximal motion.

[F5] Calculus of the displayed curves ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-interval]], [[def-euclidean-inner-product]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]]): differentiable curves are differentiated componentwise, finite sums and constant multiples obey the usual derivative rules, and the partial derivatives of the displayed quadratic and linear functions are computed by the standard rules.



## Verification

**Proof technique:** direct; compute the momentum, inverse branch and Hamiltonian from the cited general results, read Hamilton's equations on the explicit data, and verify the displayed solutions against the model's equation.

1.1 Part (a), momentum and Hamiltonian: with $K(v)=\tfrac12m\lvert v\rvert_{2}^{2}$ and $U(x)=mgx_{3}$, the fibre derivative is $\mathcal L_{v}(t,x,v)=mv$, so $p=mv$ and $v=p/m$; [F2] gives hyperregularity and $H(t,x,p)=\tfrac12p\cdot(p/m)+mgx_{3}=\lvert p\rvert_{2}^{2}/(2m)+mgx_{3}$. [F1, F2, algebra]

1.2 Part (a), equations: by [F5] the partial derivatives are $H_{p}=p/m$ and $H_{x}=(0,0,mg)$, so Hamilton's equations are $\dot x=p/m$ and $\dot p=(0,0,-mg)$; differentiating the first and substituting the second gives $m\ddot x=\dot p=(0,0,-mg)$, which is the model's equation of motion of the uniform-field potential. [F2, F3, F5, algebra]

1.3 Part (b): with $U\equiv0$ and $\mathsf M(v_{1},v_{2})=(m_{1}v_{1},m_{2}v_{2})$, [F2] gives $v=\mathsf M^{-1}p=(p_{1}/m_{1},p_{2}/m_{2})$ and $H=\tfrac12p\cdot\mathsf M^{-1}p=\lvert p_{1}\rvert_{2}^{2}/(2m_{1})+\lvert p_{2}\rvert_{2}^{2}/(2m_{2})$; [F5] gives $H_{p}=\mathsf M^{-1}p$ and $H_{x}=0$, so Hamilton's equations are $\dot x_{i}=p_{i}/m_{i}$ and $\dot p_{i}=0$, whose solutions are the uniform straight motions $x_{i}(t)=x_{i}(0)+p_{i}(0)t/m_{i}$. [F2, F5, algebra]

2.1 Part (a), solution: the curve $x(t)=x_{0}+v_{0}t-\tfrac12gt^{2}e_{3}$ has $\dot x=v_{0}-gte_{3}$, $\ddot x=-ge_{3}$ and satisfies $m\ddot x=(0,0,-mg)$ with $x(0)=x_{0}$, $\dot x(0)=v_{0}$; by [F4] it is the unique maximal motion through $(0,x_{0},v_{0})$ and is defined for all real times, and its momentum $p=m\dot x=m(v_{0}-gte_{3})$ solves the displayed Hamilton system by [F3]. [F3, F4, step 1.2, algebra]

3.1 Conclusion: parts (a) and (b) exhibit the fibre map, the inverse branch and the branch Hamiltonian on explicit data, and part (a) checks the equivalence with the model's equation and its maximal solution; all claims follow from the cited items without further hypotheses. [step 1.1, step 1.2, step 2.1, step 1.3] ∎

## Remarks

- **The inverse branch is the mass operator's inverse.** In part (a) the
  inverse branch is multiplication by $1/m$, and in part (b) by the two
  scalar factors $1/m_{1}$, $1/m_{2}$; this is the model instance of the
  general formulas $v=\mathsf M^{-1}p$ and $v=G(q)^{-1}p$ of
  [[pthm-cm12-mechanical-hyperregularity]]. The positivity of the masses is
  what makes both inversions global on the fibre.

- **Potential normalisation.** The displayed $H$ uses the representative
  $U=mgx_{3}$; replacing it by $U+c(t)$ shifts $H$ by $c(t)$
  ([[def-cm12-hamiltonian]]), so the numerical value of $H$ at a state is
  convention-dependent while the Hamilton system is unchanged by the shift
  together with the corresponding action convention. No energy value is
  compared with any measurement here.
