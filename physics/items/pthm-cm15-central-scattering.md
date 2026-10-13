---
id: pthm-cm15-central-scattering
kind: physics-theorem
title: "Finite-range central scattering in the model class: the scattering
  motion on all of time, the asymptotic velocities and impact parameter
  $b=J/\\sqrt{2\\mu E}$, the advance $\\Delta$ with principal deflection $\\arccos(\\cos(\\pi-2\\Delta))$,
  and the cross-section of a deflection branch"
status: published
origin: session
domain: physics
dependency_level: 17
deps:
  [
    def-cm15-asymptotic-data,
    def-cm15-cross-section,
    def-cm-scattering-data,
    def-first-order-ode-initial-value-problem-and-solution,
    def-locally-lipschitz-in-the-state-variable,
    thm-picard-lindelof-local-existence-and-uniqueness,
    thm-existence-and-uniqueness-of-a-maximal-ode-solution,
    thm-cm-compact-continuation-for-locally-lipschitz-odes,
    lem-cm05-radial-potential-gradient,
    cor-vector-valued-ftc-and-lipschitz-bound,
    thm-extreme-value-metric,
    thm-cm-differential-cross-section-density,
    post-cm05-central-model,
    pthm-cm05-relative-reduction,
    def-cm-central-force-trajectory,
    thm-cm-central-force-angular-momentum-conservation,
    thm-cm-central-force-polar-reduction,
    post-cm01-worldlines,
    def-cm01-units,
    def-cm01-configuration,
    post-cm02-force-superposition,
    post-cm02-interactions,
    def-cm02-newtonian-flow,
    def-interval,
    def-ck-euclidean-maps-and-diffeomorphisms,
    def-euclidean-inner-product,
    def-cross-product-in-r3,
    thm-cross-product-norm-is-the-two-vector-gram-determinant,
    lem-cross-product-is-bilinear-alternating-and-orthogonal,
    thm-sine-and-cosine-addition-formulas,
    cor-trigonometric-parity-and-pythagorean-identity,
    thm-sine-and-cosine-derivatives,
    thm-quarter-turn-values-and-shift-formulas,
    thm-sine-cosine-signs-monotonicity-and-ranges,
    thm-continuous-inverse,
    thm-substitution,
    thm-chain-rule,
    thm-algebra-of-derivatives,
    thm-ftc-second-part,
    thm-continuous-implies-integrable,
    thm-monotonicity-of-the-integral,
    cor-primitives-of-a-continuous-function,
    def-vector-valued-derivative-and-integral,
    def-vector-valued-functions-limits-and-continuity,
    def-countable-choice
  ]
dependency_roles:
  def-cm15-asymptotic-data: formulation-prerequisite
  def-cm15-cross-section: formulation-prerequisite
  def-cm-scattering-data: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  lem-cm05-radial-potential-gradient: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-cm-differential-cross-section-density: mathematical-premise
  post-cm05-central-model: formulation-prerequisite
  pthm-cm05-relative-reduction: physical-result
  def-cm-central-force-trajectory: mathematical-premise
  thm-cm-central-force-angular-momentum-conservation: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  post-cm02-force-superposition: formulation-prerequisite
  post-cm02-interactions: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-continuous-inverse: mathematical-premise
  thm-substitution: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Assuming countable choice for the branch and preparation
  measures, the scattering prediction of the restricted two-label central model
  class with a finite-range $C^2$ potential and a simple outer turning point:
  the relative motion lives on all of time with one apsis and two monotone
  branches; the asymptotic velocities exist with speed $\\sqrt{2E/\\mu}$; at and
  beyond the range the branches are exactly free and the incoming and outgoing
  lines have perpendicular distance $b=J/\\sqrt{2\\mu E}$; the half-angle
  advance is the stated quadrature and the asymptotic directions satisfy the
  deflection relation with angle $\\pi-2\\Delta$ when $0<\\Delta<\\pi/2$; and on
  a $C^1$ deflection branch that records the model's deflections the outgoing
  angular measure has the branch contribution density $b|\\mathrm db/\\mathrm
  d\\theta|/\\sin\\theta$ and the expected uniform-incident rate is the flux
  times that branch's truncated cross-section. A finite family's total density
  adds its branch contributions where angular images overlap. The result is a
  conditional deduction inside the adopted model class; it uses the model data
  $E,J,u$ and no measured value, asserts no monotonicity or completeness of the
  deflection map, and reports no detection."
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin),
        §6.4, Eqs. (340)-(367): the centre-of-mass scattering geometry, the
        impact parameter, the turning-point quadrature, the deflection relation,
        the annular incident area, the solid angle and the differential
        cross-section"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics
        (title page last edited September 1, 2026), §3.5, Eqs. (3.66)-(3.74):
        the impact parameter and scattering angle, the quadrature
        $\\theta=\\pi-2\\varphi_0$, the uniform beam, the geometric
        cross-section relation and the caveats on inelastic and quantum
        modifications"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for clause 4 and its preparation measures.

Adopt a central scattering model of [[def-cm15-asymptotic-data]] clause (i)
with masses $m_1,m_2>0$, reduced mass $\mu=m_1m_2/(m_1+m_2)$, static
central pair potential $u\in C^2((0,\infty))$
([[def-ck-euclidean-maps-and-diffeomorphisms]]), and let $E>0$, $J>0$; write
$$V(r):=u(r)+\frac{J^2}{2\mu r^2}\qquad(r>0).$$
Suppose:

**(H1) finite range:** there is $R>0$ with $u(r)=0$ for every $r\ge R$;

**(H2) simple outer turning point:** there is $r_*>0$ with
$$V(r_*)=E,\qquad V'(r_*)<0,\qquad V(r)<E\quad(r>r_*).$$

Let $r:I\to\mathbb R^3$ be the relative coordinate of a motion of the model
on an interval $I$ with nonempty interior and with attached angular
momentum $j=\mu\,r\times r'=Je_3\ne0$ and attached energy $E$
([[def-cm-central-force-trajectory]],
[[pthm-cm05-relative-reduction]]), and suppose
$|r(t)|\ge r_*$ for every $t\in I$ and $|r(t_*)|=r_*$ for some
$t_*\in I$. Then:

1. **(The scattering motion.)** $r$ extends uniquely to a central-force
   trajectory $\bar r:\mathbb R\to\mathbb R^3$ for $(\mu,u)$; the extension is
   the relative coordinate of a motion of the two-label model with its autonomous force law extended to time window $\mathbb R$, defined on all
   of $\mathbb R$, whose centre of mass is the affine extension of the
   original one. Along $\bar r$, $\rho:=|\bar r|$ satisfies $\rho\ge r_*$,
   $\rho(t)>r_*$ for $t\ne t_*$, and $\rho$ is strictly decreasing on
   $(-\infty,t_*]$ and strictly increasing on $[t_*,\infty)$; no collision
   occurs. Moreover the time quadrature
   $$\tau(r_0):=\int_{r_*}^{r_0}\frac{\mathrm ds}{\sqrt{(2/\mu)\bigl(E-V(s)\bigr)}}\qquad(r_0\ge r_*)$$
   with the integral at $r_*$ interpreted as an improper integral, is finite
   for every $r_0$ and satisfies $\rho(t_*\pm\tau(r_0))=r_0$.
2. **(Free asymptotes, speed and impact parameter.)** The limits
   $v_\pm=\lim_{t\to\pm\infty}\bar r'(t)$ exist and
   $$|v_+|=|v_-|=\sqrt{2E/\mu}=:v_\infty .$$
   For every $t_1\ge t_*$ with $\rho(t_1)\ge R$ the motion is exactly free
   from $t_1$ on, $\bar r(t)=\bar r(t_1)+(t-t_1)v_+$ for all $t\ge t_1$;
   symmetrically for the incoming branch with $v_-$. The perpendicular
   distance from the force centre of the affine extensions of the incoming and outgoing free tails is the same number
   $$b=\frac{J}{\mu v_\infty}=\frac{J}{\sqrt{2\mu E}},\qquad\text{so that}\qquad J=\mu b\,v_\infty .$$
3. **(Polar advance and deflection.)** Let $(\rho,\theta)$ be polar data of
   $\bar r:\mathbb R\to\mathbb R^3$ from clause 1 in an oriented orthonormal triad with $e_3=j/J$
   ([[thm-cm-central-force-polar-reduction]]). Then
   $$\Delta:=\theta(+\infty)-\theta(t_*)=\theta(t_*)-\theta(-\infty) =\int_{r_*}^{\infty}\frac{J\,\mathrm dr}{r^2\sqrt{2\mu\,\bigl(E-V(r)\bigr)}}$$
   is finite and positive, and the asymptotic directions satisfy
   $$\frac{v_+}{|v_+|}=-R_{2\Delta}\Bigl(\frac{v_-}{|v_-|}\Bigr),\qquad \frac{\langle v_-,v_+\rangle}{|v_-|\,|v_+|}=\cos(\pi-2\Delta),$$
   where for $x\in\operatorname{span}(e_1,e_2)$,
   $R_\alpha x:=\cos\alpha\,x+\sin\alpha\,(e_3\times x)$ is the rotation of
   that plane by $\alpha$. The scattering angle of the
   motion is $\theta_{\mathrm s}=\arccos(\cos(\pi-2\Delta))$; if
   $0<\Delta<\pi/2$ then $\theta_{\mathrm s}=\pi-2\Delta\in(0,\pi)$ and the
   signed velocity rotation is $2\Delta-\pi$.
4. **(Cross-section of a deflection branch.)** Let
   $\theta:(a_1,a_2)\to(0,\pi)$ be a deflection branch of the model in the
   sense of [[def-cm15-cross-section]]: $\theta$ is $C^1$ with
   $\theta'(b)\ne0$, and for every $b\in(a_1,a_2)$ the scattering motion of
   the model with impact parameter $b$, fixed energy $E$ and angular momentum magnitude
   $J(b)=\sqrt{2\mu E}\,b$ has scattering angle $\theta_{\mathrm s}(b)=\theta(b)$, with
   $0<\Delta(b)<\pi/2$. For each member of this family suppose (H2) and the trajectory hypotheses hold with its own $J(b)$ and turning point $r_*(b)$. Then, for every nonnegative Borel test function on the branch image, or real Borel test function absolutely integrable for its outgoing measure,
   $$\int_{(a_1,a_2)\times(0,2\pi)}g(\theta(b),\varphi)b\,d\lambda_2(b,\varphi)=\int_{(\theta_1,\theta_2)\times(0,2\pi)}g(\theta,\varphi)b(\theta)|b'(\theta)|\,d\lambda_2(\theta,\varphi),$$
   the outgoing angular measure of the branch has density
   $b(\theta)|b'(\theta)|$ with respect to $\mathrm d\theta\,\mathrm d\varphi$,
   and the differential cross-section of the branch is
   $$\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta) =\frac{b(\theta)\,\bigl|b'(\theta)\bigr|}{\sin\theta} =\frac{b(\theta)}{\sin\theta\,\bigl|\theta'(b(\theta))\bigr|}\qquad(\theta_1<\theta<\theta_2).$$
   Under the uniform-incident preparation of [[def-cm15-asymptotic-data]] clause (iv), with cutoff $b_{\max}>a_1$ and flux $\Phi$, put $c=\min(a_2,b_{\max})$ and
   $$Y=\theta((a_1,c)),\qquad \sigma_{\mathrm{br}}(Y)=\int_Y\frac{d\sigma}{d\Omega}(\theta)\,2\pi\sin\theta\,d\lambda_1(\theta).$$
   Here $\sigma_{\mathrm{br}}(Y)$ is this branch's contribution as in clause (iii) of [[def-cm15-cross-section]], not the total model cross-section when other branch images overlap $Y$. The window uses the image of the open interval, with one-sided endpoint limits when necessary, and works for either monotonicity. The expected scattered rate from this branch portion is $\Phi\sigma_{\mathrm{br}}(Y)=\Phi\pi(c^2-a_1^2)$, which is finite. Other branch portions, if present, add their own contributions.
5. **(Scope of the statement.)** The theorem asserts nothing about the
   deflection map outside the recorded branch: it neither asserts that
   $b\mapsto\theta_{\mathrm s}$ is decreasing, injective or free of
   stationary points, nor that the branch images cover $(0,\pi)$; and it
   treats finite-range potentials only. The collisions, long-range
   potentials, velocity-dependent forces and external forces are excluded by
   the model class of [[post-cm05-central-model]] and by (H1).

## Facts & Assumptions

**Given:** Countable choice for the measures, and the central scattering model with masses $m_1,m_2>0$, reduced mass $\mu$, potential $u$, the data $E>0$, $J>0$, the function $V=u+J^2/(2\mu r^2)$, the number $R$ of (H1), the turning point $r_*$ of (H2), and the relative coordinate $r:I\to\mathbb R^3$ with $|r|\ge r_*$ attaining $r_*$ at $t_*$.

[L1] Model and reduction ([[post-cm05-central-model]] clauses (i)-(ii), [[pthm-cm05-relative-reduction]] clauses 2-4, [[def-cm-central-force-trajectory]], [[def-cm01-configuration]], [[def-cm02-newtonian-flow]]): the model has no external forces, its relative coordinate is a $C^2$ central-force trajectory for $(\mu,u)$ with $|r(t)|\in J_0=(0,\infty)$, and the map $x\mapsto(X,r)$ is a bijection from motions of the model onto pairs (affine $X$ with $X''=0$, central-force trajectory $r$ with values in $J_0$), with $x_1=X+\frac{m_2}{M}r$, $x_2=X-\frac{m_1}{M}r$, $M=m_1+m_2$.

[L2] Radial energy and turning equations ([[def-cm-central-force-trajectory]], [[thm-cm-central-force-polar-reduction]]): for $\rho=|r|$ and $V=U^{\mathrm{eff}}_J$, the energy identity gives $(\rho')^2=(2/\mu)(E-V(\rho))$ and the radial equation is $\mu\rho''=-V'(\rho)$. At $\rho=r_*$ this gives $\rho'=0$ and $\rho''=-V'(r_*)/\mu>0$; for every $\rho>r_*$, (H2) gives $E-V(\rho)>0$. The global branches are established in step 2.1; the time quadrature, free tails, polar advance and angle relation are proved locally in steps 3.1-4.1.

[L3] Branch pushforward ([[thm-cm-differential-cross-section-density]], [[def-cm-scattering-data]], [[def-cm15-cross-section]]): on a deflection branch the stated double-integral identity holds for nonnegative Borel $g$ or absolutely integrable real Borel $g$, the outgoing angular measure has density $b|b'|$, and this branch's cross-section contribution has density $b|b'|/\sin\theta=b/(\sin\theta\,|\theta'(b(\theta))|)$; a finite model-family density sums such contributions on overlapping angular images. The branch data and the uniform-incident preparation are those of [[def-cm15-asymptotic-data]] clauses (iii)-(iv).

[L4] Angular momentum and line geometry ([[thm-cm-central-force-angular-momentum-conservation]], [[def-cross-product-in-r3]], [[def-euclidean-inner-product]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]], [[def-vector-valued-derivative-and-integral]]): angular momentum $j=\mu\,\bar r\times\bar r'$ is constant on the central-force trajectory; on a free piece $\bar r(t)=\bar r(t_1)+(t-t_1)v$ one has $\bar r(t)\times v=\bar r(t_1)\times v$. For nonzero $x,v$, the perpendicular distance from the origin to the line $\{x+sv:s\in\mathbb R\}$ is $|x\times v|/|v|$, since its closest point is $x-\langle x,v\rangle v/|v|^2$ and the Gram identity gives the squared norm $|x\times v|^2/|v|^2$.

[L5] Intervals and regularity ([[def-interval]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-vector-valued-functions-limits-and-continuity]]): the interval $I$ has nonempty interior, the affine extension of the centre of mass is defined on all of $\mathbb R$, and the one-sided limits of velocities are those of the cited definitions.

[L6] Cartesian uniqueness at the force-range boundary ([[lem-cm05-radial-potential-gradient]], [[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-extreme-value-metric]], [[def-first-order-ode-initial-value-problem-and-solution]], [[def-locally-lipschitz-in-the-state-variable]], [[thm-picard-lindelof-local-existence-and-uniqueness]]): on $\mathbb R^3\setminus\{0\}$ the associated first-order field $(r,v)\mapsto(v,-\nabla(u(|r|))/\mu)$ is $C^1$. At any state with $r\ne0$, choose a closed convex ball inside that open state domain. The derivative of the field is continuous, so the extreme-value theorem bounds its norm on the ball; applying the bounded-derivative Lipschitz corollary to the restriction along each line segment shows that the field is locally Lipschitz in the state. Picard--Lindelöf uniqueness therefore makes any two central-force solutions with the same position and velocity at one time agree on every common interval.

[L7] Maximal existence and continuation ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[thm-cm-compact-continuation-for-locally-lipschitz-odes]]): the locally Lipschitz autonomous first-order field of [L6] has a unique maximal solution on an open interval; if its state stays in a compact subset of the open state domain near a finite endpoint, compact continuation extends that solution past the endpoint.

[L8] Integral calculus on the radial branches ([[thm-substitution]], [[cor-primitives-of-a-continuous-function]], [[thm-chain-rule]], [[thm-continuous-implies-integrable]], [[thm-monotonicity-of-the-integral]]): the integrand defining $\tau$ is continuous on $(r_*,\infty)$; its primitive is differentiable there with derivative equal to the integrand, and the chain rule permits composition with the $C^1$ monotone radial coordinate on compact subintervals away from $t_*$. Nonnegative integral comparison applies to the endpoint bounds.

[L9] The inverse cosine $\arccos:[-1,1]\to[0,\pi]$ is the inverse of the continuous, strictly decreasing bijection $\cos:[0,\pi]\to[-1,1]$. Continuity and the endpoint values $\cos0=1$, $\cos\pi=-1$ follow from [[thm-sine-and-cosine-derivatives]] and [[thm-quarter-turn-values-and-shift-formulas]]; strict decrease and the range follow from [[thm-sine-cosine-signs-monotonicity-and-ranges]]. Its inverse is continuous by [[thm-continuous-inverse]], and $\sin\psi>0$ for $0<\psi<\pi$ by the same trigonometric suppliers.

## Proof

**Proof technique:** direct.

1.1 By [L1], the relative coordinate is a $C^2$ central-force trajectory for $(\mu,u)$ with attached angular momentum $j=Je_3$ and energy $E$, and $|r(t)|\in(0,\infty)$. The potential and turning-point conditions are exactly (H1)-(H2), and the trajectory attains $r_*$ at $t_*$ while satisfying $|r|\ge r_*$. [given, L1]

2.1 Global branches and extension: the first-order Cartesian central-force field of [L6] has a unique maximal solution through $(r(t_*),r'(t_*))$ by [L7], and the given trajectory on $I$ is its restriction; write the maximal curve as $\bar r$ and $\rho=|\bar r|$. By [L2], $\rho'(t_*)=0$ and $\rho''(t_*)=-V'(r_*)/\mu>0$, so $\rho>r_*$ immediately on both sides of $t_*$. Whenever $\rho>r_*$, the energy identity and (H2) give $\rho'\ne0$, hence $\rho'$ has constant sign on each connected interval where $\rho>r_*$. On the outgoing interval adjacent to $t_*$ that sign is positive. If the interval had a finite right endpoint $T$ inside the maximal domain, continuity would give $\rho(T)=r_*$; then the radial equation in [L2] gives $\rho''(T)>0$, so $\rho'<0$ immediately before $T$, contradicting the positive sign on that interval. Thus the outgoing interval reaches the maximal right endpoint, with $\rho>r_*$ and $\rho'>0$ throughout. The symmetric argument gives $\rho>r_*$ and $\rho'<0$ on the incoming interval. In particular $\rho\ge r_*$ throughout the maximal interval. Since $u$ is continuous on $[r_*,R]$ when this interval is nonempty and vanishes for $r\ge R$, it is bounded below on $[r_*,\infty)$; the energy identity therefore bounds $|\bar r'|$. On any finite endpoint, $\bar r$ is bounded by this speed bound and remains at distance at least $r_*>0$ from the origin. Its state consequently lies in a compact subset of $\{(r,v):r\ne0\}$ near that endpoint, so [L7] continues it past every finite endpoint. The maximal interval is therefore all of $\mathbb R$, and uniqueness is from [L6]. The global branches and radial energy identity established here supply the hypotheses for the direct quadrature and angle calculation below. For the model statement, let $X$ be the centre of mass of the original motion, affine on $I$ with $X''=0$ by [L1] clause 2, and let $\bar X$ be its affine extension to $\mathbb R$; then by [L1] clause 4 the pair $(\bar X,\bar r)$ reconstructs a motion of the model with its autonomous force law extended to time window $\mathbb R$, because $|\bar r(t)|\in(0,\infty)$ keeps the configuration admissible. This is clause 1. [step 1.1, L1, L2, L5, L6, L7, algebra]

3.1 Time quadrature in clause 1: for $s>r_*$ the integrand in the displayed $\tau(s)$ is positive and continuous. The derivative definition gives $(E-V(s))/(s-r_*)\to -V'(r_*)>0$ as $s\downarrow r_*$, so near $r_*$ the integrand is bounded by a constant times $(s-r_*)^{-1/2}$, which has a finite integral on every bounded interval starting at $r_*$. Thus $\tau(s)<\infty$ for every finite $s\ge r_*$. Since $V(s)=J^2/(2\mu s^2)\to0$ for $s\ge R$, the integrand tends to $1/\sqrt{2E/\mu}>0$ and $\tau(s)\to\infty$; it is strictly increasing from $\tau(r_*)=0$. On either monotone branch, the fundamental theorem gives $\tau'(s)=1/\sqrt{(2/\mu)(E-V(s))}$ for $s>r_*$. By the chain rule and the radial energy identity, $(\tau\circ\rho)'=1$ on the outgoing branch and $(\tau\circ\rho)'=-1$ on the incoming branch. Taking the limits at $t_*$ gives $\tau(\rho(t))=|t-t_*|$, and strict increase and unboundedness of $\tau$ yield $\rho(t_*\pm\tau(s))=s$ for every $s\ge r_*$. This proves the quadrature assertion and also $\rho(t)\to\infty$ on both tails. [step 2.1, L2, L8, algebra]

3.2 Free tails and asymptotic velocities: on the outgoing branch $\rho$ is increasing. It is unbounded: if it had a finite limit $L>r_*$, the energy identity and (H2) would imply $\rho'(t)\to\sqrt{(2/\mu)(E-V(L))}>0$, contradicting convergence to $L$. Thus $\rho(t)\to\infty$, and after it passes $R$ it remains there; since $u'(r)=0$ for $r\ge R$, the Cartesian equation gives $\bar r''=0$ on that tail. The incoming branch is symmetric. Now let $t_1\ge t_*$ with $\rho(t_1)>R$; the motion is free for all later times and its constant velocity is $v_+:=\lim_{t\to+\infty}\bar r'(t)$. At any such free point $u=0$, so energy gives $|v_+|=\sqrt{2E/\mu}=:v_\infty>0$. If instead $\rho(t_1)=R$, define $q_+(t):=\bar r(t_1)+(t-t_1)\bar r'(t_1)$ for $t\ge t_1$. Differentiating $\rho^2=\langle\bar r,\bar r\rangle$ gives $\langle\bar r,\bar r'\rangle=\rho\rho'$; since $\rho$ is nondecreasing on this branch, $\langle\bar r(t_1),\bar r'(t_1)\rangle=R\rho'(t_1)\ge0$. Also $|\bar r'(t_1)|^2=2E/\mu>0$ because $u(R)=0$, so $|q_+(t)|^2=R^2+2(t-t_1)\langle\bar r(t_1),\bar r'(t_1)\rangle+(t-t_1)^2|\bar r'(t_1)|^2\ge R^2$. Since $u'(r)=0$ for all $r\ge R$, including $R$, $q_+$ and $\bar r$ solve the same Cartesian equation with the same state at $t_1$; [L6] gives $\bar r=q_+$ for all $t\ge t_1$. Thus its constant velocity is again $v_+$ and has norm $v_\infty$. The incoming equality case is identical with $q_-(t):=\bar r(t_2)+(t-t_2)\bar r'(t_2)$ for $t\le t_2$: $\rho'(t_2)\le0$ and $t-t_2\le0$ give $|q_-(t)|\ge R$, so [L6] gives the incoming free formula and $v_-:=\lim_{t\to-\infty}\bar r'(t)$ with $|v_-|=v_\infty$. This proves clause 2's free-motion and velocity claims. [step 2.1, L2, L6, algebra]

4.1 Clause 3, polar advance: apply [[thm-cm-central-force-polar-reduction]] to the global trajectory $\bar r$ of step 2.1, giving polar data $(\rho,\theta)$ on all of $\mathbb R$. Let $n(\varphi)=\cos\varphi\,e_1+\sin\varphi\,e_2$ be its unit radial direction. On the outgoing branch, $\theta'=J/(\mu\rho^2)>0$ and $\rho'=\sqrt{(2/\mu)(E-V(\rho))}$; substitution on compact subintervals away from $t_*$ gives $$\theta(+\infty)-\theta(t_*)=\int_{r_*}^{\infty}\frac{J\,\mathrm dr}{r^2\sqrt{2\mu(E-V(r))}}=:\Delta.$$ The integral converges at $r_*$ because $E-V(r)\sim -V'(r_*)(r-r_*)$ as $r\downarrow r_*$, and at infinity because $V(r)=J^2/(2\mu r^2)$ for $r\ge R$; it is positive. The same substitution on the incoming branch, where $\rho'<0$ and $\theta'>0$, gives $\theta(t_*)-\theta(-\infty)=\Delta$. Thus $\theta_\pm:=\lim_{t\to\pm\infty}\theta(t)$ exist and $\theta_+-\theta_-=2\Delta$. By the free tails of step 3.2, $\bar r(t)/\rho(t)\to v_+/|v_+|$ as $t\to+\infty$ and $\bar r(t)/\rho(t)\to-v_-/|v_-|$ as $t\to-\infty$. Since $\bar r/\rho=n(\theta)$, continuity gives $n(\theta_+)=v_+/|v_+|$ and $n(\theta_-)=-v_-/|v_-|$. The addition formulas imply $n(\theta_+)=R_{2\Delta}n(\theta_-)$, hence $$\frac{v_+}{|v_+|}=-R_{2\Delta}\Bigl(\frac{v_-}{|v_-|}\Bigr).$$ For any unit $q$ in the plane, $\langle q,e_3\times q\rangle=0$, so this identity gives $\langle v_-,v_+\rangle/(|v_-||v_+|)=-\cos(2\Delta)=\cos(\pi-2\Delta)$. Therefore $\theta_{\mathrm s}=\arccos(\cos(\pi-2\Delta))$ by clause (iii) of [[def-cm15-asymptotic-data]]; when $0<\Delta<\pi/2$, $\pi-2\Delta\in(0,\pi)$ is that angle. To identify the continuous signed rotation, differentiate $\bar r=\rho n(\theta)$: $\bar r'=\rho'n(\theta)+J/(\mu\rho)(e_3\times n(\theta))$, whose positive tangential component ensures $|\bar r'|>0$. Put $\psi(t)=\arccos(\rho'(t)/|\bar r'(t)|)\in(0,\pi)$ using [L9]. The Pythagorean identity and positivity give $\bar r'/|\bar r'|=n(\theta+\psi)$, so $\theta+\psi$ is a continuous real angle for the velocity direction. On the free tails, $|\bar r'|=v_\infty$ and the radial energy equation gives $\rho'\to-v_\infty$ incoming and $\rho'\to v_\infty$ outgoing. Thus $\psi\to\pi$ incoming and $\psi\to0$ outgoing; the net continuous rotation is $\theta_+-(\theta_-+\pi)=2\Delta-\pi$. This is clause 3. [step 1.1, step 2.1, step 3.1, step 3.2, L2, L4, L9, algebra]

4.2 Clause 2, impact parameter: on the incoming branch choose $t_2\le t_*$ with $\rho(t_2)\ge R$; the affine extension of the incoming free tail is $\{\bar r(t_2)+s\,v_-:s\in\mathbb R\}$ and its perpendicular distance from the origin is $|\bar r(t_2)\times v_-|/|v_-|=|j|/(\mu|v_-|)=J/(\mu v_\infty)$ by step 3.2 and [L4]. For the outgoing line $\{\bar r(t_1)+s\,v_+:s\in\mathbb R\}$, the same computation with [L4] gives distance $|\bar r(t_1)\times v_+|/|v_+|=|j|/(\mu|v_+|)=J/(\mu v_\infty)$; since $J/(\mu\sqrt{2E/\mu})=J/\sqrt{2\mu E}$, both distances equal $b=J/\sqrt{2\mu E}$ as displayed, and multiplying by $v_\infty$ gives $J=\mu b v_\infty$. [step 3.2, L4, algebra]

5.1 Clause 4: the assumed family uses the same $\mu,u,E$ and varying $J(b)=\sqrt{2\mu E}\,b$, with (H2) and the trajectory conditions for each member. By the branch hypothesis its scattering angle is $\theta(b)$; [L3] gives the measure and test-function identity on the entire open branch with the stated nonnegative or absolute-integrability condition. Under the preparation the probability law is $P=\nu|_{D_{\max}}/(\pi b_{\max}^2)$ and the total arrival rate is $\Phi\pi b_{\max}^2$. Hence the branch portion $(a_1,c)\times(0,2\pi)$ has expected rate $\Phi\nu((a_1,c)\times(0,2\pi))$. Its pushforward is supported in $Y=\theta((a_1,c))$, so [L3] identifies that area with this branch's contribution $\sigma_{\mathrm{br}}(Y)=2\pi\int_{a_1}^c b\,db=\pi(c^2-a_1^2)$. Other branches with overlapping images contribute separately by finite addition as defined in [[def-cm15-cross-section]] clause (ii). This proves the rate regardless of whether the branch increases or decreases. [step 4.1, L3, algebra]

6.1 Clause 5 is the statement of the scope: the branch hypothesis of clause 4 is an explicit assumption, not a consequence of (H1)-(H2); no monotonicity or nonvanishing of $\theta'$ off the branch is used or claimed; and the exclusions are those of [[post-cm05-central-model]] clause (v) together with (H1). This completes the proof. [given, step 4.2, step 5.1, L1, L2, L3] ∎

## Remarks

- **Units.** $[E]=\mu\ell^2\tau^{-2}$, $[J]=\mu\ell^2\tau^{-1}$, $[v_\infty]=\ell\tau^{-1}$, $[b]=\ell$, $[u]=[V]=[E]$, $[\Delta]=1$, $[\mathrm d\sigma/\mathrm d\Omega]=\ell^2$ ([[def-cm01-units]]); the identity $J=\mu b v_\infty$ is dimensionally consistent.

- **What the theorem does not supply.** The $C^1$ regularity and invertibility of the deflection map are hypotheses of clause 4, not conclusions; for a specific potential they must be established separately, as is done for the Coulomb potential in [[pthm-cm15-rutherford-model]]. The theorem does not compute the angular distribution of either individual label: the reconstruction $x_1=X+\frac{m_2}{M}r$, $x_2=X-\frac{m_1}{M}r$ shows that label directions generally differ from the relative direction.

- **No measured content.** The data $E$, $J$, $u$, the branch and the flux are model data; clause 4 predicts a model rate under an adopted preparation and reports nothing observed.
