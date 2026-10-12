---
id: pthm-cm05-conic
kind: physics-theorem
title: "The gravitational relative orbit is a conic focused at the force centre: $\\rho=p/(1+e\\cos(\\theta-\\theta_0))$, $E=(\\mu\\kappa^2/2J^2)(e^2-1)$, elliptic completeness and barycentric scaled ellipses"
status: draft
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
physical_scope: "The Keplerian orbit classification of the two-label gravitational model with non-zero angular momentum: the polar conic with its eccentricity and focus at the force centre, the eccentricity-energy relation and the elliptic, parabolic and hyperbolic branches, the centrifugal barrier that keeps the motion away from the collision, and - in the elliptic case - the completeness, the closed periodic relative orbit with the ellipse geometry, and the scaled barycentric conics of both labels. The parabolic and hyperbolic clauses record only the orbit formula, the periapsis and the domain of the angle on the actual domain of the motion; no asymptotic extent, scattering or observational claim is made."
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
the central pair potential $u(\rho)=-\kappa/\rho$ on $J_0=(0,\infty)$. Let
$x:J\to Q$ be a motion on an interval $J$ with nonempty interior, with
relative coordinate $r$, attached angular momentum $j=\mu\,r\times r'$ and
energy $E=\tfrac12\mu\lVert r'\rVert_2^2-\kappa/\lvert r\rvert$
([[pthm-cm05-relative-reduction]], [[def-cm-central-force-trajectory]]), and
suppose $j=Je_3$, $J>0$, for an oriented orthonormal triad $(e_1,e_2,e_3)$.
Let $(\rho,\theta)$ be polar data for $r$ and put
$$p:=\frac{J^{2}}{\mu\kappa},\qquad U^{\mathrm{eff}}_J(\rho):=-\frac{\kappa}{\rho}+\frac{J^{2}}{2\mu\rho^{2}},\qquad \rho_*:=\frac{J^{2}}{\mu\kappa}=p.$$
Then:

1. **(Conic and eccentricity.)** There are $e\ge0$ and $\theta_0\in\mathbb R$
   with
   $$\rho=\frac{p}{1+e\cos(\theta-\theta_0)}$$
   on the interior of $J$, and the energy satisfies
   $E=\dfrac{\mu\kappa^{2}}{2J^{2}}\bigl(e^{2}-1\bigr)$; consequently
   $E<0\iff e<1$, $E=0\iff e=1$ and $E>0\iff e>1$. The orbit is therefore a
   conic section with the force centre at a focus.
2. **(Centrifugal barrier.)** $\rho_*$ is the unique critical point of
   $U^{\mathrm{eff}}_J$ in $(0,\infty)$ and the unique minimum, with
   $$U^{\mathrm{eff}}_J(\rho_*)=-\frac{\mu\kappa^{2}}{2J^{2}};$$
   setting
   $$\rho_{\min}(E):=\frac{J^{2}}{\mu\kappa+\sqrt{\mu^{2}\kappa^{2}+2\mu EJ^{2}}}>0,$$
   one has $U^{\mathrm{eff}}_J(\rho_{\min}(E))=E$ and
   $\rho(t)\ge\rho_{\min}(E)$ for every $t\in J$. In particular the relative
   motion never reaches the collision $r=0$, and
   $\rho_{\min}(E)=p/(1+e)$ is the periapsis distance of the conic of
   clause 1.
3. **(Elliptic case.)** If $E<0$, then $e<1$ and:
   (a) the relative trajectory extends uniquely to a central-force
   trajectory for $(\mu,u)$ defined on all of $\mathbb R$, the motion $x$ of
   the two-label model extends uniquely to a motion defined on all of
   $\mathbb R$, and the relative motion is periodic, with
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
   $\rho_{\min}(E)=p/(1+e)$. In both cases $e\ge1$ and the conic is open;
   the extent of the trajectory, its asymptotes and its scattering
   interpretation are **not** claimed here.

## Facts & Assumptions

**Given:** The gravitational two-label model with the data $\mu,\kappa,J>0$, the motion $x:J\to Q$, the relative coordinate $r$, the polar data $(\rho,\theta)$, and the constants $p$, $\rho_*$, $U^{\mathrm{eff}}_J$ of the statement.

[A1] The Axiom of Countable Choice is assumed ([[def-countable-choice]]).

[L1] Reduction and classification input ([[pthm-cm05-relative-reduction]] clauses 3-4, [[def-cm-central-force-trajectory]], [[post-cm05-central-model]] clauses (i)-(ii), [[post-cm05-gravity]] clause (i)): $r$ is a central-force trajectory for $(\mu,u)$ with $\lvert r(t)\rvert\in(0,\infty)$, constant $j=\mu r\times r'=Je_3$ and constant energy $E$; $x_1-X=\frac{m_2}{M}r$ and $x_2-X=-\frac{m_1}{M}r$ with $X$ affine.

[L2] Mathematical orbit theory ([[thm-cm-kepler-binet-equation]], [[thm-cm-kepler-conic-and-eccentricity]], [[thm-cm-kepler-ellipse-geometry]], [[thm-cm-kepler-orbit-period]], [[thm-cm-central-force-polar-reduction]], [[lem-cm-oriented-orthonormal-triads]]): for the attractive inverse-square central-force trajectory with $j=Je_3$, $J>0$, there are polar data with $\rho^2\theta'=J/\mu$ and a conic representation with $\rho=p/(1+e\cos(\theta-\theta_0))$, $p=J^{2}/(\mu\kappa)$, $E=(\mu\kappa^{2}/2J^{2})(e^{2}-1)$ and the sign classification; if $E<0$ then the trajectory extends uniquely to all of $\mathbb R$ with $\rho$ bounded in $[p/(1+e),p/(1-e)]$ and is periodic with $\theta(t+T)=\theta(t)+2\pi$; and the subcritical conic is an ellipse with semiaxes $a=p/(1-e^{2})$, $b=a\sqrt{1-e^{2}}$, focus at the origin, and area $\pi ab$.

[L3] Elementary computations ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-euclidean-inner-product]], [[def-interval]]): derivatives and algebraic identities of the displayed rational and trigonometric expressions; $J,\mu,\kappa>0$ and $E\ge U^{\mathrm{eff}}_J(\rho_*)$.

## Proof

**Proof technique:** direct.

1.1 Clause 1: by [L1] the curve $r$ is a central-force trajectory for $(\mu,u)$ with constant nonzero angular momentum $Je_3$ and constant energy $E$, so the hypotheses of the inverse-square orbit theory [L2] are met and its conic representation and eccentricity-energy relation give exactly clause 1, including the equivalence of the signs of $E$ and $e^{2}-1$ because $\mu\kappa^{2}/(2J^{2})>0$. [given, A1, L1, L2, algebra]

2.1 Clause 2: differentiating $U^{\mathrm{eff}}_J$ gives $\bigl(U^{\mathrm{eff}}_J\bigr)'(\rho)=\bigl(\kappa\rho-J^{2}/\mu\bigr)/\rho^{3}$, which vanishes exactly at $\rho_*$ and is negative for $\rho<\rho_*$ and positive for $\rho>\rho_*$; for $0<\rho<\rho'\le\rho_*$ the difference identity $$U^{\mathrm{eff}}_J(\rho')-U^{\mathrm{eff}}_J(\rho)=\frac{(\rho'-\rho)\bigl[2\mu\kappa\rho\rho'-J^{2}(\rho'+\rho)\bigr]}{2\mu\rho^{2}(\rho')^{2}}$$ has numerator at most $(\rho'-\rho)\bigl[2J^{2}\rho-J^{2}(\rho'+\rho)\bigr]=-J^{2}(\rho'-\rho)^{2}<0$, where the inequality uses $\rho\le\rho'$ and $\rho'\le\rho_*=J^{2}/(\mu\kappa)$; hence $U^{\mathrm{eff}}_J$ is strictly decreasing on $(0,\rho_*]$ and $\rho_*$ is its unique minimum. Direct substitution gives $$-\frac{\kappa}{\rho_{\min}(E)}+\frac{J^{2}}{2\mu\rho_{\min}(E)^{2}}=E,$$ by multiplying by $\rho_{\min}^{2}$, clearing denominators with the definition of $\rho_{\min}$ and using $\bigl(\mu\kappa+\sqrt{\mu^{2}\kappa^{2}+2\mu EJ^{2}}\bigr)\bigl(-\mu\kappa+\sqrt{\mu^{2}\kappa^{2}+2\mu EJ^{2}}\bigr)=2\mu EJ^{2}$. Along the motion, the energy identity of [L2] gives $\tfrac12\mu(\rho')^{2}+U^{\mathrm{eff}}_J(\rho)=E$, so $U^{\mathrm{eff}}_J(\rho(t))\le E=U^{\mathrm{eff}}_J(\rho_{\min}(E))$; if $\rho(t)\le\rho_*$ then strict decrease on $(0,\rho_*]$ forces $\rho(t)\ge\rho_{\min}(E)$, while if $\rho(t)>\rho_*$ then $\rho(t)>\rho_*\ge\rho_{\min}(E)$ because $\rho_{\min}(E)\le\rho_*$ (its defining denominator is at least $\mu\kappa$). Hence $\rho\ge\rho_{\min}(E)>0$ throughout. [step 1.1, L2, L3, algebra]

3.1 Clause 3: assume $E<0$, so $e<1$ by step 1.1. Clause (a) is [L2] for the relative trajectory together with [L1] clause 4, which reconstructs the extension of $x$ to $\mathbb R$ and gives its uniqueness through the uniqueness of the extension of $r$ and the affine $X$. Clause (b) is the ellipse clause of [L2], including $a=p/(1-e^{2})=-\kappa/(2E)$ and the bound on $\rho$. Clause (c): by [L1] and [L2], $\lvert x_1-X\rvert=\frac{m_2}{M}\lvert r\rvert=\frac{m_2}{M}\rho$ and $\lvert x_2-X\rvert=\frac{m_1}{M}\rho$, so substituting the conic of clause 1 gives the two displayed conic formulas; their semimajor axes are $p_j/(1-e^{2})=\frac{m_j}{M}a$ with the same eccentricity and the focus at the origin of $x_i-X$, which is the centre of mass. [step 1.1, step 2.1, L1, L2, algebra]

4.1 Clause 4: if $E=0$ then $e=1$ by step 1.1 and the conic formula reads $\rho=p/(1+\cos(\theta-\theta_0))$; its denominator is at most $2$, so the periapsis is $p/2=\rho_{\min}(0)$ by the formula of step 2.1, and the open conic has the single periapsis at $\theta=\theta_0$. If $E>0$ then $e>1$; the formula of clause 1 holds wherever it is evaluated, and $\rho>0$ forces $1+e\cos(\theta-\theta_0)>0$, so the orbit lies on the branch of the hyperbola through periapsis; the periapsis is $\rho_{\min}(E)=p/(1+e)$ by step 2.1. No assertion is made about the extent of these trajectories, their asymptotic directions or scattering, which are outside this item. [step 1.1, step 2.1, L1, L2, algebra] ∎

## Remarks

- **Which items use the elliptic hypotheses.** The completeness, closure and periodicity statements of clause 3(a) and the bounds of clause 3(b) hold only for $E<0$; the conic formula of clause 1 and the barrier of clause 2 hold for every nonzero angular momentum and every energy reached by the trajectory.

- **The focus is the force centre.** In the reduced coordinate $r$ the focus is the origin, which is the centre of mass of the two-label model; the scaled conics of clause 3(c) inherit that focus, which is the content of the first Kepler law for both labels.

- **What is deliberately absent.** No claim is made that the parabolic and hyperbolic branches have straight asymptotes, a deflection angle or a scattering cross-section on this page; those belong to the scattering development. No observation, measurement or empirical comparison appears here.
