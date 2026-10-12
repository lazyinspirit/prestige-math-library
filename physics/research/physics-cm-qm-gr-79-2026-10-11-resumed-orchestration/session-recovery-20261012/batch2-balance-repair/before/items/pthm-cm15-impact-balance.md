---
id: pthm-cm15-impact-balance
kind: physics-theorem
title: "Consequences of the adopted impact and open-mass models: continuity of total momentum, the smooth-force exclusion, the restitution solution with $\\Delta K=-\\frac{1-e^2}{2}\\mu\\lVert v_2^--v_1^-\\rVert_2^2$, and the open-body and rocket laws"
status: draft
origin: session
domain: physics
dependency_level: 12
deps: [post-cm15-impulse,
       thm-cm-impulse-restitution-and-energy-loss,
       thm-cm-variable-mass-momentum-balance,
       thm-cm-center-of-mass-and-kinetic-splitting,
       def-countable-choice,
       post-cm02-force-superposition,
       def-cm02-newtonian-flow,
       def-cm03-centre-of-mass-and-momenta,
       post-cm01-worldlines,
       def-cm01-units,
       def-cm01-configuration,
       def-interval,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-euclidean-inner-product,
       def-vector-valued-derivative-and-integral,
       def-vector-valued-functions-limits-and-continuity,
       thm-algebra-of-derivatives]
dependency_roles:
  post-cm15-impulse: physical-assumption
  thm-cm-impulse-restitution-and-energy-loss: mathematical-premise
  thm-cm-variable-mass-momentum-balance: mathematical-premise
  thm-cm-center-of-mass-and-kinetic-splitting: mathematical-premise
  def-countable-choice: mathematical-premise
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The conditional consequences of the page's adopted impact and open-mass extensions: total momentum is continuous across an isolated reciprocal impulse with the impulse removed from the second label; a smooth-force motion with continuous force maps cannot carry a nonzero impulse, so the contact model is an extension rather than a smooth-force theorem; a collinear contact with coefficient of restitution $e\\in[0,1]$ has the stated post-impact velocities and kinetic-energy change, is dissipative for $e<1$, and its contact law is an independent assumption not derivable from momentum balance; and the open-body material accounting yields the derived law $mv'=F+r_{\\mathrm{in}}(w_{\\mathrm{in}}-v)-r_{\\mathrm{out}}(w_{\\mathrm{out}}-v)$ with the rocket thrust as the special case. The result is a conditional deduction from adopted model data; it asserts no measured value of $e$, the impulse or the mass rates, and identifies no observed dissipation mechanism."
sources:
  references:
    - title: "Jacob Moore and Contributors, Mechanics Map (Pennsylvania State University, 2nd ed.), Engineering LibreTexts, Chapter 11 'Impulse and Momentum in Particles', §§11.3-11.5: the impulse-momentum principle, momentum conservation for a system free of external impulse, the coefficient of restitution and one-dimensional collision solutions"
      url: "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.04%3A_Surface_Collisions_and_the_Coefficient_of_Restitution"
    - title: "J. Peraire and S. Widnall, 16.07 Dynamics (MIT OpenCourseWare, Fall 2008/2009), Lecture L14 'Variable Mass Systems: The Rocket Equation', Eqs. (9)-(15): the capture/expulsion accounting, the warning that $\\mathrm d(m\\mathbf v)/\\mathrm dt=\\mathbf F$ holds only for zero relative velocity of the transferred matter, and the thrust $T=-c\\dot m$"
      url: "https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/98d19cb2b9983c14c6907052499e7a98_MIT16_07F09_Lec14.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), §1.2, printed p. 2: $\\mathbf F=\\dot{\\mathbf p}$ as the primitive balance and the caution that an open variable-mass body is not described by the closed-system form alone"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]),
inherited from the statement of
[[thm-cm-impulse-restitution-and-energy-loss]], whose distributional jump
lemma uses it; the algebraic clauses used here do not otherwise use choice.
Adopt the impact and open-mass extensions of [[post-cm15-impulse]], with
$m_1,m_2>0$, an interval $I$ with nonempty interior, $t_*\in I$, a motion
$x=(x_1,x_2):I\to Q$ run in the isolated reciprocal impulse model at $t_*$
with impulse $J$ and one-sided velocities $v_i^\pm$, and write
$$M:=m_1+m_2,\qquad \mu:=\frac{m_1m_2}{M},\qquad P(t):=m_1x_1'(t)+m_2x_2'(t).$$
Then:

1. **(Momentum continuity.)** The total momentum is continuous across the
   impact,
   $$P(t_*^+)=P(t_*^-),\qquad\text{equivalently}\qquad \sum_{i=1}^2 m_i\bigl(v_i^+-v_i^-\bigr)=0,$$
   and the impulse delivered to label $1$ is removed from label $2$:
   $J=m_1(v_1^+-v_1^-)=-m_2(v_2^+-v_2^-)$.
2. **(Smooth-force exclusion.)** Let $x$ be a motion of the smooth force
   branch of [[post-cm02-force-superposition]] and
   [[def-cm02-newtonian-flow]] on $I$ along which the force maps are
   continuous. Then the momentum curves $p_i=m_ix_i'$ are of class $C^1$ on
   $I$; in particular
   $$p_i(t_*^+)=p_i(t_*^-)\qquad(i=1,2),$$
   so $J=0$: no motion of that class carries a nonzero isolated impulse. The
   finite-jump model of [[post-cm15-impulse]] clause (i) is therefore a
   genuine extension of the smooth-force branch, not one of its cases.
3. **(Collinear restitution solution.)** Suppose in addition that the
   contact is collinear with contact direction $n$ and coefficient of
   restitution $e\in[0,1]$ ([[post-cm15-impulse]] clause (ii)). Then
   $$J=\mu(1+e)\bigl(v_2^--v_1^-\bigr),$$
   $J$ is parallel to $n$, the centre-of-mass velocity
   $V:=M^{-1}(m_1v_1^-+m_2v_2^-)$ is unchanged across the impact, and the
   post-impact velocities are
   $$v_1^+=V+\frac{m_2}{M}\,e\,\bigl(v_2^--v_1^-\bigr),\qquad v_2^+=V-\frac{m_1}{M}\,e\,\bigl(v_2^--v_1^-\bigr).$$
4. **(Kinetic energy of the impact.)** The kinetic-energy change across the
   impact is
   $$\Delta K:=\frac{m_1\lVert v_1^+\rVert_2^2+m_2\lVert v_2^+\rVert_2^2}{2} -\frac{m_1\lVert v_1^-\rVert_2^2+m_2\lVert v_2^-\rVert_2^2}{2} =-\frac{1-e^2}{2}\,\mu\,\lVert v_2^--v_1^-\rVert_2^2\le0,$$
   with equality if and only if $e=1$ or $v_2^-=v_1^-$. For $0\le e<1$ the
   contact model is dissipative: the total kinetic energy of the two labels
   is not conserved across the impact, and the deficit
   $\frac{1-e^2}{2}\mu\lVert v_2^--v_1^-\rVert_2^2$ is a quantity of the
   adopted contact law. This item identifies it with no measured heat,
   temperature, sound or deformation observable.
5. **(Momentum balance alone does not determine the impact.)** In the
   collinear case with $d^-:=v_2^--v_1^-$ and $d_n:=\langle d^-,n\rangle<0$,
   the impulse equations of clause 1 alone leave the scalar impulse magnitude
   free: for every real $J_n$ with $J_n\le \mu d_n$ (so that the contact is
   separating or grazing) the velocities
   $$v_1^+=v_1^-+\frac{J_n}{m_1}n,\qquad v_2^+=v_2^--\frac{J_n}{m_2}n$$
   satisfy the reciprocal impulse equations with impulse $J=J_nn$ and
   preserve the total momentum, and their kinetic-energy change is
   $$\Delta K(J_n)=-J_n\,d_n+\frac{J_n^2}{2\mu},$$
   whose minimum over the admissible range is
   $\Delta K(\mu d_n)=-\frac{\mu}{2}d_n^2$ at the perfectly inelastic value
   $J_n=\mu d_n$ (that is, $e=0$). The value of
   $J_n$ is fixed only by the contact law of [[post-cm15-impulse]] clause
   (ii), which selects $J_n=\mu(1+e)d_n$; in particular momentum balance
   alone does not determine the post-impact velocities.
6. **(Open-body and rocket laws.)** Under [[post-cm15-impulse]] clause
   (iii), with $m:I\to(0,\infty)$, $v:I\to\mathbb R^3$,
   $F,r_{\mathrm{in}},r_{\mathrm{out}}:I\to\dots$ and
   $w_{\mathrm{in}},w_{\mathrm{out}}:I\to\mathbb R^3$ satisfying the material
   balance identities, one has on $I$
   $$m\,v'=F+r_{\mathrm{in}}\bigl(w_{\mathrm{in}}-v\bigr)-r_{\mathrm{out}}\bigl(w_{\mathrm{out}}-v\bigr).$$
   In particular: (a) if $r_{\mathrm{in}}=r_{\mathrm{out}}=0$ then
   $m\,v'=F$ and $(mv)'=F$; (b) if $r_{\mathrm{in}}=0$ and
   $r_{\mathrm{out}}=-m'>0$ (mass loss) then
   $$m\,v'=F+r_{\mathrm{out}}\bigl(v-w_{\mathrm{out}}\bigr)=F-m'\bigl(v-w_{\mathrm{out}}\bigr),$$
   so the **thrust** is $T:=r_{\mathrm{out}}(v-w_{\mathrm{out}})=-m'(v-w_{\mathrm{out}})$,
   and the closed-system law $(mv)'=F$ fails unless
   $w_{\mathrm{out}}=v$; (c) if $r_{\mathrm{out}}=0$ and $w_{\mathrm{in}}=0$
   then $m\,v'=F-r_{\mathrm{in}}v$, so capturing matter at rest in the
   inertial frame decelerates the body while $(mv)'=F$ still holds.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the adopted extensions of [[post-cm15-impulse]]; the two-label motion run in the isolated reciprocal impulse model at $t_*$ with impulse $J$; for clause 3 the collinear contact direction $n$ and coefficient $e$; for clause 6 the maps $m,v,F,r_{\mathrm{in}},r_{\mathrm{out}},w_{\mathrm{in}},w_{\mathrm{out}}$.

[L1] Impulse algebra ([[thm-cm-impulse-restitution-and-energy-loss]] clauses a-c): under the isolated reciprocal impulse model with the restitution law, $m_1(v_1^+-v_1^-)=J=-m_2(v_2^+-v_2^-)$ and the total momentum is continuous across $t_*$; the post-impact velocities are $v_1^+=V+\frac{m_2}{M}e(v_2^--v_1^-)$, $v_2^+=V-\frac{m_1}{M}e(v_2^--v_1^-)$; and the kinetic-energy change is $-\frac{1-e^2}{2}\mu\lVert v_2^--v_1^-\rVert_2^2$.

[L2] Open-body algebra ([[thm-cm-variable-mass-momentum-balance]]): from $m'=r_{\mathrm{in}}-r_{\mathrm{out}}$ and $(mv)'=F+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}$ follows $mv'=F+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v)$, together with the special cases by substitution.

[L3] Smooth-branch differentiability ([[post-cm02-force-superposition]], [[def-cm02-newtonian-flow]], [[def-cm03-centre-of-mass-and-momenta]], [[def-vector-valued-derivative-and-integral]], [[thm-algebra-of-derivatives]]): a motion of the smooth force branch satisfies $m_ix_i''(t)=F_i(t,x(t),x'(t))$; if the right side is continuous along the motion then $x_i''$ is continuous, so $x_i$ is of class $C^2$ and $p_i=m_ix_i'$ is of class $C^1$ on the interval.

[L4] Two-body kinetic identity ([[thm-cm-center-of-mass-and-kinetic-splitting]], [[def-euclidean-inner-product]]): with $V=M^{-1}(m_1v_1+m_2v_2)$ and $\mu=m_1m_2/M$, $m_1\lVert v_1\rVert_2^2+m_2\lVert v_2\rVert_2^2=M\lVert V\rVert_2^2+\mu\lVert v_2-v_1\rVert_2^2$; hence $v_1=V-\frac{m_2}{M}(v_2-v_1)$ and $v_2=V+\frac{m_1}{M}(v_2-v_1)$.

[L5] Limits and intervals ([[def-vector-valued-functions-limits-and-continuity]], [[def-interval]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[post-cm01-worldlines]], [[def-cm01-units]], [[def-cm01-configuration]]): one-sided limits of the velocity curves are those of [[post-cm15-impulse]]; $I$ has nonempty interior; the masses are fixed data with $[m_1]=[m_2]=\mathsf M$ and $[J]=\mathsf M\ell\tau^{-1}$.

## Proof

**Proof technique:** direct.

1.1 Clause 1: by [[post-cm15-impulse]] clause (i) and [L1], $m_1(v_1^+-v_1^-)=J$ and $m_2(v_2^+-v_2^-)=-J$; adding gives $m_1(v_1^+-v_1^-)+m_2(v_2^+-v_2^-)=0$, which is exactly $P(t_*^+)=P(t_*^-)$. This is clause 1. [given, L1, algebra]

1.2 Clause 2: let $x$ be a smooth-branch motion with continuous force maps along it. By [L3] the curves $x_i''=F_i/m_i$ are continuous, hence $x_i$ is $C^2$ and $p_i=m_ix_i'$ is $C^1$ on $I$; a $C^1$ function on an interval has equal one-sided limits at every interior point, so $p_i(t_*^+)=p_i(t_*^-)$ and therefore $J=0$. Thus the model of clause (i) with $J\ne0$ is outside this class, as asserted. [given, L3, L5, algebra]

1.3 Clause 3: the collinear contact satisfies the hypotheses of [L1] on the relative velocity, so [L1] gives $m_1(v_1^+-v_1^-)=J=-m_2(v_2^+-v_2^-)$ and the displayed velocities with $V$ the centre-of-mass velocity; since $v_2^--v_1^-\parallel n$ and $J=\mu(1+e)(v_2^--v_1^-)$ is a scalar multiple of it, $J\parallel n$. The explicit identity $J=\mu(1+e)(v_2^--v_1^-)$ follows from the two jump equations and the restitution law: subtracting the second from the first, $v_2^+-v_1^+=(v_2^--v_1^-)-\frac{J}{\mu}$, which by the restitution law equals $-e(v_2^--v_1^-)$, so $J=\mu(1+e)(v_2^--v_1^-)$. [given, L1, L4, algebra]

1.4 Clause 4: [L1] gives the kinetic-energy change $-\frac{1-e^2}{2}\mu\lVert v_2^--v_1^-\rVert_2^2$, which is $\le0$ because $0\le e\le1$, and vanishes exactly when $e=1$ or $v_2^-=v_1^-$ (if $e<1$ and $v_2^-\ne v_1^-$ it is strictly negative). The identification statement is a statement of the scope of the model: the deficit is computed from the contact law, and no measured observable of another framework is introduced or equated with it. This is clause 4. [given, L1, algebra]

1.5 Clause 5: fix any real $J_n\le\mu d_n$ and put $v_1^+:=v_1^-+\frac{J_n}{m_1}n$, $v_2^+:=v_2^--\frac{J_n}{m_2}n$; then $m_1(v_1^+-v_1^-)=J_nn$ and $m_2(v_2^+-v_2^-)=-J_nn$, so the reciprocal impulse equations of clause 1 hold with impulse $J=J_nn$, and adding the two equations shows that the total momentum is preserved. The relative velocity becomes $d^+=d^--\frac{J_n}{\mu}n$; hence $d^+\cdot n=d_n-\frac{J_n}{\mu}\ge0$ precisely for $J_n\le\mu d_n$, which is the stated admissibility (the contact separates or grazes). By the kinetic identity [L4], $\Delta K(J_n)=\frac{\mu}{2}\bigl(\lVert d^+\rVert_2^2-\lVert d^-\rVert_2^2\bigr) =\frac{\mu}{2}\bigl(-2\frac{J_n}{\mu}d_n+\frac{J_n^2}{\mu^2}\bigr) =-J_nd_n+\frac{J_n^2}{2\mu}$, a quadratic in $J_n$ with minimum $\frac{\mu}{2}d_n^2$ at $J_n=\mu d_n$; the restitution law selects $J_n=\mu(1+e)d_n$, which lies in the admissible range because $1+e\ge1$ and $d_n<0$, and reproduces clause 3. [given, L1, L4, algebra]

2.1 Clause 6: [L2] gives the derived law from the material balance identities, and the three special cases are its substitutions: (a) $r_{\mathrm{in}}=r_{\mathrm{out}}=0$ leaves $mv'=F$, while $(mv)'=m'v+mv'=F$ because $m'=0$; (b) $r_{\mathrm{in}}=0$, $r_{\mathrm{out}}=-m'$ gives $mv'=F-r_{\mathrm{out}}(w_{\mathrm{out}}-v)=F+r_{\mathrm{out}}(v-w_{\mathrm{out}})$; and $(mv)'=m'v+mv'=F+r_{\mathrm{out}}(v-w_{\mathrm{out}})+m'v=F-r_{\mathrm{out}}w_{\mathrm{out}}+r_{\mathrm{out}}v-r_{\mathrm{out}}v=F-r_{\mathrm{out}}w_{\mathrm{out}}$, which equals $F$ exactly when $w_{\mathrm{out}}=v$ (or $r_{\mathrm{out}}=0$); (c) $r_{\mathrm{out}}=0$, $w_{\mathrm{in}}=0$ gives $mv'=F-r_{\mathrm{in}}v$, while $(mv)'=m'v+mv'=r_{\mathrm{in}}v+F-r_{\mathrm{in}}v=F$. This is clause 6. [given, L2, algebra] ∎

## Remarks

- **Why the two models are kept separate from the smooth branch.** Clause 2 shows that the impulse cannot be obtained as the integral of a bounded continuous force map along a motion; equivalently the force map of an impulse model is not continuous across $t_*$ ([[post-cm02-force-superposition]] clause (iii) restricts the force branch to maps continuous and locally Lipschitz in the state). The contact law of clause (ii) is therefore part of the model's data, exactly as clause (iii) of [[post-cm15-impulse]] is for the open body.

- **Comparison with the mathematically proved supplier.** The velocity and energy clauses are the physical reading of [[thm-cm-impulse-restitution-and-energy-loss]] clauses b-c; the smooth-force exclusion and the momentum-only underdetermination are proved here because they are statements about the framework's model classes rather than about the mathematical impulse model.

- **Units and scale.** $[J]=\mathsf M\ell\tau^{-1}$, $[\Delta K]=\mathsf M\ell^2\tau^{-2}$; both are model quantities. The coefficient $e$ is dimensionless model data; its empirical determination is a separate experimental task and is not asserted here.
