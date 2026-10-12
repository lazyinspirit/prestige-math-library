---
id: pthm-cm15-central-scattering
kind: physics-theorem
title: "Finite-range central scattering in the model class: the scattering motion on all of time, the asymptotic velocities and impact parameter $b=J/\\sqrt{2\\mu E}$, the advance $\\Delta$ with deflection $\\pi-2\\Delta$, and the cross-section of a deflection branch"
status: draft
origin: session
domain: physics
dependency_level: 17
deps: [def-cm15-asymptotic-data,
       def-cm15-cross-section,
       def-cm-scattering-data,
       thm-cm-scattering-turning-point-and-global-branches,
       thm-cm-scattering-asymptotic-velocities-and-impact-parameter,
       thm-cm-scattering-angle-advance,
       thm-cm-differential-cross-section-density,
       post-cm05-central-model,
       pthm-cm05-relative-reduction,
       def-cm-central-force-trajectory,
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
       def-vector-valued-derivative-and-integral,
       def-vector-valued-functions-limits-and-continuity]
dependency_roles:
  def-cm15-asymptotic-data: formulation-prerequisite
  def-cm15-cross-section: formulation-prerequisite
  def-cm-scattering-data: mathematical-premise
  thm-cm-scattering-turning-point-and-global-branches: mathematical-premise
  thm-cm-scattering-asymptotic-velocities-and-impact-parameter: mathematical-premise
  thm-cm-scattering-angle-advance: mathematical-premise
  thm-cm-differential-cross-section-density: mathematical-premise
  post-cm05-central-model: formulation-prerequisite
  pthm-cm05-relative-reduction: physical-result
  def-cm-central-force-trajectory: mathematical-premise
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
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The scattering prediction of the restricted two-label central model class with a finite-range $C^2$ potential and a simple outer turning point: the relative motion lives on all of time with one apsis and two monotone branches; the asymptotic velocities exist with speed $\\sqrt{2E/\\mu}$; beyond the range the branches are exactly free and the incoming and outgoing lines have perpendicular distance $b=J/\\sqrt{2\\mu E}$; the half-angle advance is the stated quadrature and the asymptotic directions satisfy the deflection relation with angle $\\pi-2\\Delta$ when $0<\\Delta<\\pi/2$; and on a smooth deflection branch that records the model's deflections the outgoing angular measure has cross-section density $b|\\mathrm db/\\mathrm d\\theta|/\\sin\\theta$ and the expected uniform-incident rate is the flux times the truncated cross-section. The result is a conditional deduction inside the adopted model class; it uses the model data $E,J,u$ and no measured value, asserts no monotonicity or completeness of the deflection map, and reports no detection."
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.4, Eqs. (340)-(367): the centre-of-mass scattering geometry, the impact parameter, the turning-point quadrature, the deflection relation, the annular incident area, the solid angle and the differential cross-section"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §3.5, Eqs. (3.66)-(3.74): the impact parameter and scattering angle, the quadrature $\\theta=\\pi-2\\varphi_0$, the uniform beam, the geometric cross-section relation and the caveats on inelastic and quantum modifications"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Adopt a central scattering model of [[def-cm15-asymptotic-data]] clause (i)
with masses $m_1,m_2>0$, reduced mass $\mu=m_1m_2/(m_1+m_2)$, static
central pair potential $u\in C^2((0,\infty))$
([[def-ck-euclidean-maps-and-diffeomorphisms]]), and let $E>0$, $J>0$; write
$$V(r):=u(r)+\frac{J^2}{2\mu r^2}\qquad(r>0).$$
Suppose:

**(H1) finite range:** there is $R>0$ with $u(r)=0$ for every $r\ge R$;

**(H2) simple outer turning point:** there is $r_*>0$ with
$$V(r_*)=E,\qquad V'(r_*)<0,\qquad V(r)<E\quad(r>r_*).$$

Let $r:J_0\to\mathbb R^3$ be the relative coordinate of a motion of the model
on an interval $J_0$ with nonempty interior and with attached angular
momentum $j=\mu\,r\times r'=Je_3\ne0$ and attached energy $E$
([[def-cm-central-force-trajectory]],
[[pthm-cm05-relative-reduction]]), and suppose
$|r(t)|\ge r_*$ for every $t\in J_0$ and $|r(t_*)|=r_*$ for some
$t_*\in J_0$. Then:

1. **(The scattering motion.)** $r$ extends uniquely to a central-force
   trajectory $\bar r:\mathbb R\to\mathbb R^3$ for $(\mu,u)$; the extension is
   the relative coordinate of a motion of the two-label model defined on all
   of $\mathbb R$, whose centre of mass is the affine extension of the
   original one. Along $\bar r$, $\rho:=|\bar r|$ satisfies $\rho\ge r_*$,
   $\rho(t)>r_*$ for $t\ne t_*$, and $\rho$ is strictly decreasing on
   $(-\infty,t_*]$ and strictly increasing on $[t_*,\infty)$; no collision
   occurs. Moreover the time quadrature
   $$\tau(r_0):=\int_{r_*}^{r_0}\frac{\mathrm ds}{\sqrt{(2/\mu)\bigl(E-V(s)\bigr)}}\qquad(r_0\ge r_*)$$
   is finite for every $r_0$ and satisfies $\rho(t_*\pm\tau(r_0))=r_0$.
2. **(Free asymptotes, speed and impact parameter.)** The limits
   $v_\pm=\lim_{t\to\pm\infty}\bar r'(t)$ exist and
   $$|v_+|=|v_-|=\sqrt{2E/\mu}=:v_\infty .$$
   For every $t_1\ge t_*$ with $\rho(t_1)\ge R$ the motion is exactly free
   from $t_1$ on, $\bar r(t)=\bar r(t_1)+(t-t_1)v_+$ for all $t\ge t_1$;
   symmetrically for the incoming branch with $v_-$. The perpendicular
   distance from the force centre of the incoming line and of the outgoing
   line is the same number
   $$b=\frac{J}{\mu v_\infty}=\frac{J}{\sqrt{2\mu E}},\qquad\text{so that}\qquad J=\mu b\,v_\infty .$$
3. **(Polar advance and deflection.)** Let $(\rho,\theta)$ be polar data of
   $r$ in an oriented orthonormal triad with $e_3=j/J$
   ([[thm-cm-central-force-polar-reduction]]). Then
   $$\Delta:=\theta(+\infty)-\theta(t_*)=\theta(t_*)-\theta(-\infty) =\int_{r_*}^{\infty}\frac{J\,\mathrm dr}{r^2\sqrt{2\mu\,\bigl(E-V(r)\bigr)}}$$
   is finite and positive, and the asymptotic directions satisfy
   $$\frac{v_+}{|v_+|}=-R_{2\Delta}\Bigl(\frac{v_-}{|v_-|}\Bigr),\qquad \frac{\langle v_-,v_+\rangle}{|v_-|\,|v_+|}=\cos(\pi-2\Delta),$$
   where $R_\alpha$ is the rotation of the plane
   $\operatorname{span}(e_1,e_2)$ by $\alpha$. The scattering angle of the
   motion is $\theta_{\mathrm s}=\arccos(\cos(\pi-2\Delta))$; if
   $0<\Delta<\pi/2$ then $\theta_{\mathrm s}=\pi-2\Delta\in(0,\pi)$ and the
   signed velocity rotation is $2\Delta-\pi$.
4. **(Cross-section of a deflection branch.)** Let
   $\theta:(a_1,a_2)\to(0,\pi)$ be a deflection branch of the model in the
   sense of [[def-cm15-cross-section]]: $\theta$ is $C^1$ with
   $\theta'(b)\ne0$, and for every $b\in(a_1,a_2)$ the scattering motion of
   the model with impact parameter $b$, energy $E$ and angular momentum
   $Je_3$ has scattering angle $\theta_{\mathrm s}(b)=\theta(b)$, with
   $0<\Delta(b)<\pi/2$. Then, for every continuous
   $2\pi$-periodic $g:(0,\pi)\times\mathbb R\to\mathbb R$,
   $$\int_{a_1}^{a_2}\!\!\int_0^{2\pi} g\bigl(\theta(b),\varphi\bigr)\;b\;\mathrm db\,\mathrm d\varphi =\int_{\theta_1}^{\theta_2}\!\!\int_0^{2\pi} g(\theta,\varphi)\;b(\theta)\,\bigl|b'(\theta)\bigr|\;\mathrm d\theta\,\mathrm d\varphi,$$
   the outgoing angular measure of the branch has density
   $b(\theta)|b'(\theta)|$ with respect to $\mathrm d\theta\,\mathrm d\varphi$,
   and the differential cross-section of the branch is
   $$\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta) =\frac{b(\theta)\,\bigl|b'(\theta)\bigr|}{\sin\theta} =\frac{b(\theta)}{\sin\theta\,\bigl|\theta'(b(\theta))\bigr|}\qquad(\theta_1<\theta<\theta_2).$$
   Under the uniform-incident preparation of
   [[def-cm15-asymptotic-data]] clause (iv) with cutoff
   $b_{\max}\in(a_1,a_2]$ and flux $\Phi$, the model predicts the expected
   scattered rate
   $$\dot N=\Phi\,\sigma\bigl((\theta(a_1),\theta(b_{\max}))\bigr),\qquad \sigma(Y)=\int_Y\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta)\,2\pi\sin\theta\,\mathrm d\theta,$$
   into the corresponding window of scattering angles.
5. **(Scope of the statement.)** The theorem asserts nothing about the
   deflection map outside the recorded branch: it neither asserts that
   $b\mapsto\theta_{\mathrm s}$ is decreasing, injective or free of
   stationary points, nor that the branch images cover $(0,\pi)$; and it
   treats finite-range potentials only. The collisions, long-range
   potentials, velocity-dependent forces and external forces are excluded by
   the model class of [[post-cm05-central-model]] and by (H1).

## Facts & Assumptions

**Given:** The central scattering model with masses $m_1,m_2>0$, reduced mass $\mu$, potential $u$, the data $E>0$, $J>0$, the function $V=u+J^2/(2\mu r^2)$, the number $R$ of (H1), the turning point $r_*$ of (H2), and the relative coordinate $r:J_0\to\mathbb R^3$ with $|r|\ge r_*$ attaining $r_*$ at $t_*$.

[L1] Model and reduction ([[post-cm05-central-model]] clauses (i)-(ii), [[pthm-cm05-relative-reduction]] clauses 2-4, [[def-cm-central-force-trajectory]], [[def-cm01-configuration]], [[def-cm02-newtonian-flow]]): the model has no external forces, its relative coordinate is a $C^2$ central-force trajectory for $(\mu,u)$ with $|r(t)|\in J_0=(0,\infty)$, and the map $x\mapsto(X,r)$ is a bijection from motions of the model onto pairs (affine $X$ with $X''=0$, central-force trajectory $r$ with values in $J_0$), with $x_1=X+\frac{m_2}{M}r$, $x_2=X-\frac{m_1}{M}r$, $M=m_1+m_2$.

[L2] Finite-range scattering theory ([[thm-cm-scattering-turning-point-and-global-branches]] clauses 1-4, [[thm-cm-scattering-asymptotic-velocities-and-impact-parameter]] clauses 1-2, [[thm-cm-scattering-angle-advance]] clauses 1-3): under (H1), (H2) and the stated trajectory hypotheses, the conclusions of those clauses hold verbatim, with $R$, $r_*$, $E$, $J$ as displayed; the angle-advance theorem's clause 3 includes the identity $\cos\theta_{\mathrm s}=\cos(\pi-2\Delta)$ and the statement that $0<\Delta<\pi/2$ makes $\pi-2\Delta$ the angle between the asymptotic directions, the signed rotation being $-( \pi-2\Delta)$ in the orientation $e_3$.

[L3] Branch pushforward ([[thm-cm-differential-cross-section-density]], [[def-cm-scattering-data]], [[def-cm15-cross-section]]): on a deflection branch the stated double-integral identity holds for continuous $g$ periodic in the second variable, the outgoing angular measure has density $b|b'|$, and the cross-section density is $b|b'|/\sin\theta=b/(\sin\theta\,|\theta'(b(\theta))|)$; the branch data and the uniform-incident preparation are those of [[def-cm15-asymptotic-data]] clauses (iii)-(iv).

[L4] Cross-product and norm calculus ([[def-cross-product-in-r3]], [[def-euclidean-inner-product]], [[def-vector-valued-derivative-and-integral]]): for a differentiable curve $t\mapsto\bar r(t)$ with $\mu\,\bar r\times\bar r'=j$ constant, the identity $\mu\,\bar r(t)\times\bar r'(t)=j$ holds at every $t$; on a free piece $\bar r(t)=\bar r(t_1)+(t-t_1)v_+$ one has $\bar r(t)\times v_+=\bar r(t_1)\times v_+$.

[L5] Intervals and regularity ([[def-interval]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-vector-valued-functions-limits-and-continuity]]): the interval $J_0$ has nonempty interior, the affine extension of the centre of mass is defined on all of $\mathbb R$, and the one-sided limits of velocities are those of the cited definitions.

## Proof

**Proof technique:** direct.

1.1 The relative coordinate is a central-force trajectory for $(\mu,u)$ with attached angular momentum $j=Je_3$ and energy $E$ by [L1], of class $C^2$ with values $|r(t)|\in J_0=(0,\infty)$; thus $r$ satisfies all hypotheses of the finite-range scattering theorems [L2] with the data $(\mu,u,R,E,J,r_*)$: $U=u$ is $C^2$ on $(0,\infty)$, $U(r)=0$ for $r\ge R$ by (H1), $V(r_*)=E$ with $V'(r_*)<0$ and $V(r)<E$ for $r>r_*$ by (H2), and the trajectory attains the value $r_*$ at $t_*\in J_0$ while satisfying $|r|\ge r_*$. [given, L1, L2]

2.1 Clause 1: [L2] gives that $r$ extends uniquely to a central-force trajectory $\bar r:\mathbb R\to\mathbb R^3$ with $\rho\ge r_*$, $\rho(t)>r_*$ for $t\ne t_*$, $\rho$ strictly decreasing on $(-\infty,t_*]$ and strictly increasing on $[t_*,\infty)$, and the quadrature identity. For the model statement, let $X$ be the centre of mass of the original motion, affine on $J_0$ with $X''=0$ by [L1] clause 2, and let $\bar X$ be its affine extension to $\mathbb R$; then by [L1] clause 4 the pair $(\bar X,\bar r)$ reconstructs a motion of the model on all of $\mathbb R$ with relative coordinate $\bar r$ and centre of mass $\bar X$, because $|\bar r(t)|\in J_0$ for all $t$ (so the configuration remains admissible) and the force presentation is the same. This is clause 1. [step 1.1, L1, L2, L5, algebra]

2.2 Clause 2, asymptotic velocities: by [L2] the limits $v_\pm=\lim_{t\to\pm\infty}\bar r'(t)$ exist with $|v_+|=|v_-|=\sqrt{2E/\mu}=v_\infty>0$, and for every $t_1\ge t_*$ with $\rho(t_1)\ge R$ one has $\bar r(t)=\bar r(t_1)+(t-t_1)\bar r'(t_1)$ for $t\ge t_1$, with $\bar r'(t_1)=v_+$; the incoming statement is symmetric. [step 1.1, L2]

2.3 Clause 3: by [L2] the half-angle identity $\theta(+\infty)-\theta(t_*)=\Delta=\theta(t_*)-\theta(-\infty)$ holds with $\Delta$ the displayed finite positive quadrature, and the directional identities $v_+/|v_+|=-R_{2\Delta}(v_-/|v_-|)$ and $\langle v_-,v_+\rangle/(|v_-||v_+|)=\cos(\pi-2\Delta)$ hold; hence $\theta_{\mathrm s}=\arccos(\cos(\pi-2\Delta))$ by the definition of $\theta_{\mathrm s}$ in [[def-cm15-asymptotic-data]] clause (iii), and if $0<\Delta<\pi/2$ then $\pi-2\Delta\in(0,\pi)$ is that angle, the signed velocity rotation being $2\Delta-\pi$. This is clause 3. [step 1.1, L2, algebra]

3.1 Clause 2, impact parameter: on the incoming branch choose $t_2\le t_*$ with $\rho(t_2)\ge R$; the incoming line is $\{\bar r(t_2)+s\,v_-:s\in\mathbb R\}$ and its perpendicular distance from the origin is $|\bar r(t_2)\times v_-|/|v_-|=|j|/(\mu|v_-|)=J/(\mu v_\infty)$ by [L2] clause 2 and [L4]. For the outgoing line $\{\bar r(t_1)+s\,v_+:s\in\mathbb R\}$, the same computation with [L4] gives distance $|\bar r(t_1)\times v_+|/|v_+|=|j|/(\mu|v_+|)=J/(\mu v_\infty)$; since $J/(\mu\sqrt{2E/\mu})=J/\sqrt{2\mu E}$, both distances equal $b=J/\sqrt{2\mu E}$ as displayed, and multiplying by $v_\infty$ gives $J=\mu b v_\infty$. [step 2.2, L2, L4, algebra]

3.2 Clause 4: by the branch hypothesis the model's scattering angle at impact parameter $b\in(a_1,a_2)$ equals $\theta(b)$, and $\theta$ is a deflection branch with inverse $b(\theta)$; [L3] then gives the displayed double-integral identity and the density statements, the cross-section density agreeing with the definition of [[def-cm15-cross-section]] clause (i). For the expected rate, the uniform-incident preparation assigns incident flux measure $\nu$ with density $b$ on $(0,b_{\max})\times(0,2\pi)$ and the model predicts the rate $\Phi\,\nu(A)$ of labels with impact-azimuth data in $A$ and, for the branch, the pushforward rate into the window $Y=(\theta(a_1),\theta(b_{\max}))$; expressing that pushforward through the density of [L3] and converting the polar measure $\mathrm d\theta\,\mathrm d\varphi$ into the solid-angle element gives $\Phi\sigma(Y)$ with $\sigma$ as displayed in [[def-cm15-cross-section]] clause (iii). This is clause 4. [step 2.3, L3, algebra]

4.1 Clause 5 is the statement of the scope: the branch hypothesis of clause 4 is an explicit assumption, not a consequence of (H1)-(H2); no monotonicity or nonvanishing of $\theta'$ off the branch is used or claimed; and the exclusions are those of [[post-cm05-central-model]] clause (v) together with (H1). This completes the proof. [given, L1, L2, L3] ∎

## Remarks

- **Units.** $[E]=\mathsf M\ell^2\tau^{-2}$, $[J]=\mathsf M\ell^2\tau^{-1}$, $[v_\infty]=\ell\tau^{-1}$, $[b]=\ell$, $[u]=[V]=[E]$, $[\Delta]=1$, $[\mathrm d\sigma/\mathrm d\Omega]=\ell^2$ ([[def-cm01-units]]); the identity $J=\mu b v_\infty$ is dimensionally consistent.

- **What the theorem does not supply.** The smoothness and invertibility of the deflection map are hypotheses of clause 4, not conclusions; for a specific potential they must be established separately, as is done for the Coulomb potential in [[pthm-cm15-rutherford-model]]. The theorem is also silent about the laboratory-frame angular distribution of either label: the reconstruction $x_1=X+\frac{m_2}{M}r$, $x_2=X-\frac{m_1}{M}r$ shows that label directions generally differ from the relative direction.

- **No measured content.** The data $E$, $J$, $u$, the branch and the flux are model data; clause 4 predicts a model rate under an adopted preparation and reports nothing observed.
