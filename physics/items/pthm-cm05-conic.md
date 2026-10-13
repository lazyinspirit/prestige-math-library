---
id: pthm-cm05-conic
kind: physics-theorem
title: "The inverse-square gravitational relative trajectory has the Kepler polar form: $\\rho=p/(1+e\\cos(\\theta-\\theta_0))$, $E=(\\mu\\kappa^2/2J^2)(e^2-1)$, elliptic completeness and barycentric scaled ellipses"
status: published
origin: session
domain: physics
dependency_level: 16
deps: [post-cm05-central-model, post-cm05-gravity, pthm-cm05-relative-reduction, def-cm-central-force-trajectory, thm-cm-central-force-polar-reduction, thm-cm-kepler-binet-equation, thm-cm-kepler-conic-and-eccentricity, thm-cm-kepler-ellipse-geometry, thm-cm-kepler-orbit-period, def-countable-choice, lem-cm-oriented-orthonormal-triads, thm-chain-rule, thm-algebra-of-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, def-interval]
dependency_roles:
  post-cm05-central-model: formulation-prerequisite
  post-cm05-gravity: physical-assumption
  pthm-cm05-relative-reduction: physical-result
  def-cm-central-force-trajectory: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  thm-cm-kepler-binet-equation: mathematical-premise
  thm-cm-kepler-conic-and-eccentricity: mathematical-premise
  thm-cm-kepler-ellipse-geometry: mathematical-premise
  thm-cm-kepler-orbit-period: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-cm-oriented-orthonormal-triads: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The Keplerian orbit classification of the two-label gravitational model with non-zero angular momentum: the polar conic with its eccentricity and focus at the force centre, the eccentricity-energy relation and the elliptic, parabolic and hyperbolic branches, the centrifugal barrier that keeps the motion away from the collision, and - in the elliptic case - the completeness of the relative trajectory and reconstruction on the declared model time window, the closed periodic relative orbit with the ellipse geometry, and the scaled barycentric conics of both labels. The parabolic and hyperbolic clauses record only the orbit formula, the periapsis and the domain of the angle on the actual domain of the motion; no asymptotic extent, scattering or observational claim is made."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, Eqs. (3.57)-(3.65), chapter pages 13-15 (PDF pages 46-48): the conic $r=p/(1+e\\cos\\varphi)$, the eccentricity-energy relation, the elliptic parameters $a,b$, the first Kepler law and the parabolic/hyperbolic branches for $E\\ge0$"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), Section 2.5.4, printed pp. 32-33 (PDF pp. 38-39), Eq. (2.90) and Figure 15: the inverse-square potential $V=-Gm_1m_2/r$ with elliptic orbits for $E<0$ and hyperbolic orbits for $E>0$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 4.5, printed pp. 80-81 (PDF pp. 83-84), Eqs. (4.155)-(4.156) and Figure 4.2: the orbit $1/r=(mk/\\ell^2)(1+\\varepsilon\\cos(\\psi-\\psi'))$ with $\\varepsilon=\\sqrt{1+2E\\ell^2/(mk^2)}$ and the circular, elliptic, parabolic and hyperbolic cases"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Adopt the
two-label gravitational model of [[post-cm05-gravity]] clause (i): inertial
masses $m_1,m_2>0$, $M=m_1+m_2$, reduced mass $\mu=m_1m_2/M$, gravitational
couplings $m_1^{g},m_2^{g}>0$, $\kappa=G_{\mathrm N}m_1^{g}m_2^{g}>0$, and
the central pair potential $u(\rho)=-\kappa/\rho$ on $J_0=(0,\infty)$,
and model time window $I_0$. Let
$x:I\to Q$ be a motion on a time interval $I$ with nonempty interior, with
relative coordinate $r$, attached angular momentum $j=\mu\,r\times r'$ and
energy $E=\tfrac12\mu\lVert r'\rVert_2^2-\kappa/\lvert r\rvert$
([[pthm-cm05-relative-reduction]], [[def-cm-central-force-trajectory]]), and
suppose $j=Je_3$, $J>0$, for an oriented orthonormal triad $(e_1,e_2,e_3)$.
Let $(\rho,\theta)$ be polar data for $r$ and put
$$p:=\frac{J^{2}}{\mu\kappa},\qquad U^{\mathrm{eff}}_J(\rho):=-\frac{\kappa}{\rho}+\frac{J^{2}}{2\mu\rho^{2}},\qquad \rho_*:=\frac{J^{2}}{\mu\kappa}=p.$$
Then:

In the orbital plane $\Pi:=\operatorname{span}(e_1,e_2)$, for a point
$F\in\Pi$, a line $D\subseteq\Pi$ with $F\notin D$, and $e>0$, define the
**focus-directrix conic of eccentricity $e$** to be
$$C(F,D,e):=\{y\in\Pi:\lVert y-F\rVert_2=e\,d_\Pi(y,D)\},\qquad d_\Pi(y,D):=\inf_{z\in D}\lVert y-z\rVert_2.$$
Here $F$ is a focus, $D$ is its directrix, and $e$ is the distance ratio in
the definition. The types $0<e<1$, $e=1$, and $e>1$ are called ellipse,
parabola, and hyperbola, respectively. The case $e=0$ is the circle of radius
$p$ centered at $F$, the circular ellipse with coincident foci at its centre.
In this item, an **unbounded conic** is a conic locus that is unbounded, not
an open subset of $\Pi$; the **periapsis distance** is the minimum distance
on the conic to its focus, and any point attaining it is a periapsis.

1. **(Conic and eccentricity.)** There are $e\ge0$ and $\theta_0\in\mathbb R$
   with
   $$\rho=\frac{p}{1+e\cos(\theta-\theta_0)}$$
   on the interior of $I$, and the energy satisfies
   $E=\dfrac{\mu\kappa^{2}}{2J^{2}}\bigl(e^{2}-1\bigr)$; consequently
   $E<0\iff e<1$, $E=0\iff e=1$ and $E>0\iff e>1$. The relative trajectory
   lies on a focus-directrix conic with the force centre as focus when $e>0$: its
   directrix is $D=\{y\in\Pi:\langle y,n_0\rangle=p/e\}$, where
   $n_0:=\cos\theta_0e_1+\sin\theta_0e_2$. When $e=0$, the relative
   trajectory lies on the circle of radius $p$ centered at the force centre.
2. **(Centrifugal barrier.)** $\rho_*$ is the unique critical point of
   $U^{\mathrm{eff}}_J$ in $(0,\infty)$ and the unique minimum, with
   $$U^{\mathrm{eff}}_J(\rho_*)=-\frac{\mu\kappa^{2}}{2J^{2}};$$
   setting
   $$\rho_{\min}(E):=\frac{J^{2}}{\mu\kappa+\sqrt{\mu^{2}\kappa^{2}+2\mu EJ^{2}}}>0,$$
   one has $U^{\mathrm{eff}}_J(\rho_{\min}(E))=E$ and
   $\rho(t)\ge\rho_{\min}(E)$ for every $t\in I$. In particular the relative
   motion never reaches the collision $r=0$, and
   $\rho_{\min}(E)=p/(1+e)$ is the periapsis distance of the conic of
   clause 1.
3. **(Elliptic case.)** If $E<0$, then $e<1$ and:
   (a) the relative trajectory extends uniquely to a central-force
   trajectory for $(\mu,u)$ defined on all of $\mathbb R$. Together with
   the unique affine extension of $X$, this defines global coordinate curves
   $\bar x_1=\bar X+(m_2/M)\bar r$, $\bar x_2=\bar X-(m_1/M)\bar r$
   satisfying the same time-independent force equations; their restriction
   to $I_0$ is the unique extension of the model motion $x$. They are a
   model motion on all of $\mathbb R$ when $I_0=\mathbb R$. The relative
   motion is periodic, with
   $\theta(t+T)=\theta(t)+2\pi$ for one full angular revolution;
   (b) $r$ is an ellipse with focus at the force centre, semiaxes
   $$a=\frac{p}{1-e^{2}}=-\frac{\kappa}{2E},\qquad b=a\sqrt{1-e^{2}},$$
   and $p/(1+e)\le\rho\le p/(1-e)$;
   (c) each label's trajectory relative to the centre of mass is the conic
   of clause 1 scaled by $m_j/M$: with
   $p_1:=\frac{m_2}{M}p$, $p_2:=\frac{m_1}{M}p$ one has
   $$\lvert x_1-X\rvert=\frac{p_1}{1+e\cos(\theta-\theta_0)},\qquad \lvert x_2-X\rvert=\frac{p_2}{1+e\cos(\theta-\theta_0)},$$
   so both labels trace ellipses with the centre of mass at a focus, the
   same eccentricity $e$ and semimajor axes $a_1=\frac{m_2}{M}a$,
   $a_2=\frac{m_1}{M}a$.
4. **(Parabolic and hyperbolic cases on the domain of the motion.)** If
   $E=0$, then $e=1$ and
   $\rho=p/\bigl(1+\cos(\theta-\theta_0)\bigr)$ with periapsis
   $\rho_{\min}(0)=p/2$. If $E>0$, then $e>1$ and the formula of clause 1
   holds at every $t$ with $1+e\cos(\theta-\theta_0)>0$, with periapsis
   $\rho_{\min}(E)=p/(1+e)$. In both cases $e\ge1$ and the corresponding
   conic locus is unbounded;
   the extent of the trajectory, its asymptotes and its scattering
   interpretation are **not** claimed here.

## Facts & Assumptions

**Given:** The gravitational two-label model with the data $\mu,\kappa,J>0$, the motion $x:I\to Q$ on the time interval $I$, the relative coordinate $r$, the polar data $(\rho,\theta)$, and the constants $p$, $\rho_*$, $U^{\mathrm{eff}}_J$ of the statement.

[A1] The Axiom of Countable Choice is assumed ([[def-countable-choice]]).

[L1] Reduction and classification input ([[pthm-cm05-relative-reduction]] clauses 3-4, [[def-cm-central-force-trajectory]], [[post-cm05-central-model]] clauses (i)-(ii), [[post-cm05-gravity]] clause (i)): $r$ is a central-force trajectory for $(\mu,u)$ with $\lvert r(t)\rvert\in(0,\infty)$, constant $j=\mu r\times r'=Je_3$ and constant energy $E$; $x_1-X=\frac{m_2}{M}r$ and $x_2-X=-\frac{m_1}{M}r$ with $X$ affine.

[L2] Mathematical orbit theory ([[thm-cm-kepler-binet-equation]], [[thm-cm-kepler-conic-and-eccentricity]], [[thm-cm-kepler-ellipse-geometry]], [[thm-cm-kepler-orbit-period]], [[thm-cm-central-force-polar-reduction]], [[lem-cm-oriented-orthonormal-triads]]): for the attractive inverse-square central-force trajectory with $j=Je_3$, $J>0$, there are polar data with $\rho^2\theta'=J/\mu$ and a conic representation $\rho=p/(1+e\cos(\theta-\theta_0))$ on $I^\circ$, where $p=J^{2}/(\mu\kappa)$, $E=(\mu\kappa^{2}/2J^{2})(e^{2}-1)$ and the sign classification hold; if $E<0$ then the trajectory extends uniquely to all of $\mathbb R$ with $\rho$ bounded in $[p/(1+e),p/(1-e)]$ and is periodic with $\theta(t+T)=\theta(t)+2\pi$; and the subcritical conic is an ellipse with semiaxes $a=p/(1-e^{2})$, $b=a\sqrt{1-e^{2}}$, focus at the origin, and area $\pi ab$.

[L3] Elementary computations ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-euclidean-inner-product]], [[def-interval]]): derivatives and algebraic identities of the displayed rational and trigonometric expressions; $J,\mu,\kappa>0$ and $E\ge U^{\mathrm{eff}}_J(\rho_*)$.

## Proof

**Proof technique:** direct.

1.1 Clause 1: by [L1] the curve $r$ is a central-force trajectory for $(\mu,u)$ with constant nonzero angular momentum $Je_3$ and constant energy $E$, so the hypotheses of the inverse-square orbit theory [L2] are met and its polar representation and eccentricity-energy relation give the displayed formula and sign equivalences, since $\mu\kappa^{2}/(2J^{2})>0$. To verify the geometric description, for $e>0$ put $n_0:=\cos\theta_0e_1+\sin\theta_0e_2$ and $D:=\{y\in\Pi:\langle y,n_0\rangle=p/e\}$. For $t\in I^\circ$, set $\phi:=\theta(t)-\theta_0$. The formula and its positive denominator give $\rho(t)\cos\phi<p/e$ and $e\,d_\Pi(r(t),D)=e\bigl(p/e-\rho(t)\cos\phi\bigr)=p-e\rho(t)\cos\phi=\rho(t)=\lVert r(t)\rVert_2$, so $r(t)\in C(0,D,e)$ and the force centre is a focus. If $e=0$, the polar formula gives $\rho(t)=p$, so $r(t)$ lies on the stated circle. [given, A1, L1, L2, algebra]

2.1 Clause 2: differentiating $U^{\mathrm{eff}}_J$ gives $\bigl(U^{\mathrm{eff}}_J\bigr)'(\rho)=\bigl(\kappa\rho-J^{2}/\mu\bigr)/\rho^{3}$, which vanishes exactly at $\rho_*$ and is negative for $\rho<\rho_*$ and positive for $\rho>\rho_*$; for $0<\rho<\rho'\le\rho_*$ the difference identity $$U^{\mathrm{eff}}_J(\rho')-U^{\mathrm{eff}}_J(\rho)=\frac{(\rho'-\rho)\bigl[2\mu\kappa\rho\rho'-J^{2}(\rho'+\rho)\bigr]}{2\mu\rho^{2}(\rho')^{2}}$$ has numerator at most $(\rho'-\rho)\bigl[2J^{2}\rho-J^{2}(\rho'+\rho)\bigr]=-J^{2}(\rho'-\rho)^{2}<0$, where the inequality uses $\rho\le\rho'$ and $\rho'\le\rho_*=J^{2}/(\mu\kappa)$; hence $U^{\mathrm{eff}}_J$ is strictly decreasing on $(0,\rho_*]$ and $\rho_*$ is its unique minimum. Direct substitution gives $$-\frac{\kappa}{\rho_{\min}(E)}+\frac{J^{2}}{2\mu\rho_{\min}(E)^{2}}=E,$$ by multiplying by $\rho_{\min}^{2}$, clearing denominators with the definition of $\rho_{\min}$ and using $\bigl(\mu\kappa+\sqrt{\mu^{2}\kappa^{2}+2\mu EJ^{2}}\bigr)\bigl(-\mu\kappa+\sqrt{\mu^{2}\kappa^{2}+2\mu EJ^{2}}\bigr)=2\mu EJ^{2}$. Along the motion, the energy identity of [L2] gives $\tfrac12\mu(\rho')^{2}+U^{\mathrm{eff}}_J(\rho)=E$, so $U^{\mathrm{eff}}_J(\rho(t))\le E=U^{\mathrm{eff}}_J(\rho_{\min}(E))$; if $\rho(t)\le\rho_*$ then strict decrease on $(0,\rho_*]$ forces $\rho(t)\ge\rho_{\min}(E)$, while if $\rho(t)>\rho_*$ then $\rho(t)>\rho_*\ge\rho_{\min}(E)$ because $\rho_{\min}(E)\le\rho_*$ (its defining denominator is at least $\mu\kappa$). Hence $\rho\ge\rho_{\min}(E)>0$ throughout. [step 1.1, L2, L3, algebra]

3.1 Clause 3: assume $E<0$, so $e<1$ by step 1.1. Clause (a) is [L2] for the global relative trajectory $\bar r$. The affine curve $X$ has a unique affine extension $\bar X$ to $\mathbb R$ because $I$ has at least two points. Define $\bar x_1=\bar X+(m_2/M)\bar r$ and $\bar x_2=\bar X-(m_1/M)\bar r$ globally; the calculation in [L1] clause 4 shows that these satisfy the same time-independent equations. Their restriction to $I_0$ is a motion of the original model by that clause, and uniqueness follows from the unique relative and affine extensions. A global coordinate curve is a model motion on all of $\mathbb R$ only when the model time window is $I_0=\mathbb R$. Clause (b) is the ellipse clause of [L2], including $a=p/(1-e^{2})=-\kappa/(2E)$ and the bound on $\rho$. Clause (c): by [L1] and [L2], $\lvert x_1-X\rvert=\frac{m_2}{M}\lvert r\rvert=\frac{m_2}{M}\rho$ and $\lvert x_2-X\rvert=\frac{m_1}{M}\rho$, so substituting the conic of clause 1 gives the two displayed conic formulas; their semimajor axes are $p_j/(1-e^{2})=\frac{m_j}{M}a$ with the same eccentricity and the focus at the origin of $x_i-X$, which is the centre of mass. [step 1.1, step 2.1, L1, L2, algebra]

4.1 Clause 4 and endpoints: [L2] gives $\rho=p/(1+e\cos(\theta-\theta_0))$ on $I^\circ$. Equivalently, the continuous functions $t\mapsto\rho(t)(1+e\cos(\theta(t)-\theta_0))$ and $t\mapsto p$ agree on $I^\circ$, so they agree on its closure in $I$, which is all of $I$; since $\rho(t)>0$ and $p>0$, this identity gives $1+e\cos(\theta(t)-\theta_0)=p/\rho(t)>0$ and the conic formula also holds at every included endpoint of $I$. If $E=0$ then $e=1$ by step 1.1; the periapsis is $p/2=\rho_{\min}(0)$ by step 2.1. The conic locus is unbounded because $1+\cos\phi\downarrow0$ as $\phi\uparrow\pi$ through values below $\pi$. If $E>0$ then $e>1$; the periapsis is $\rho_{\min}(E)=p/(1+e)$ by step 2.1. With $\phi_*:=\arccos(-1/e)\in(0,\pi)$, the denominator $1+e\cos\phi$ is positive for $0\le\phi<\phi_*$ and tends to $0$ as $\phi\uparrow\phi_*$, so this conic locus is unbounded as well. These statements concern the full conic loci; no assertion is made that the actual time domain $I$ covers every point of either locus, or about asymptotic directions or scattering. [step 1.1, step 2.1, L1, L2, algebra] ∎

## Remarks

- **Which items use the elliptic hypotheses.** The completeness, closure and periodicity statements of clause 3(a) and the bounds of clause 3(b) hold only for $E<0$; the conic formula of clause 1 and the barrier of clause 2 hold for every nonzero angular momentum and every energy reached by the trajectory.

- **The force centre and barycentre.** In the reduced coordinate $r$ the focus is $r=0$, the force centre in relative-coordinate space. Clause 3(c) separately shows that each scaled coordinate $x_i-X$ has its focus at the centre of mass $X$.

- **What is deliberately absent.** No claim is made that the parabolic and hyperbolic branches have straight asymptotes, a deflection angle or a scattering cross-section on this page; those belong to the scattering development. No observation, measurement or empirical comparison appears here.
