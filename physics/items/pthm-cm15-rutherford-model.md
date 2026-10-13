---
id: pthm-cm15-rutherford-model
kind: physics-theorem
title: "Repulsive Coulomb scattering in the model class: global non-colliding
  motion, the deflection map $\\theta=2\\arctan(\\kappa/(2Eb))$, the Rutherford
  density $(\\kappa/4E)^2\\csc^4(\\theta/2)$, finite angular cutoffs and the
  divergent ideal total"
status: published
origin: session
domain: physics
dependency_level: 18
deps:
  [
    def-cm15-asymptotic-data,
    def-cm15-cross-section,
    def-cm-scattering-data,
    pthm-cm15-central-scattering,
    thm-cm-coulomb-scattering,
    thm-cm-rutherford-cross-section,
    post-cm05-central-model,
    pthm-cm05-relative-reduction,
    def-cm-central-force-trajectory,
    thm-cm-central-force-polar-reduction,
    post-cm01-worldlines,
    def-cm01-units,
    def-interval,
    def-ck-euclidean-maps-and-diffeomorphisms,
    def-continuity-real,
    def-euclidean-inner-product,
    def-cross-product-in-r3,
    def-principal-inverse-tangent,
    def-tangent-cotangent-secant-cosecant,
    thm-tangent-cotangent-secant-cosecant-derivatives-and-periods,
    thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions,
    thm-chain-rule,
    thm-ftc-second-part,
    thm-monotonicity-of-the-integral,
    def-countable-choice
  ]
dependency_roles:
  def-cm15-asymptotic-data: formulation-prerequisite
  def-cm15-cross-section: formulation-prerequisite
  def-cm-scattering-data: mathematical-premise
  pthm-cm15-central-scattering: physical-result
  thm-cm-coulomb-scattering: mathematical-premise
  thm-cm-rutherford-cross-section: mathematical-premise
  post-cm05-central-model: formulation-prerequisite
  pthm-cm05-relative-reduction: physical-result
  def-cm-central-force-trajectory: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-continuity-real: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-principal-inverse-tangent: mathematical-premise
  def-tangent-cotangent-secant-cosecant: mathematical-premise
  thm-tangent-cotangent-secant-cosecant-derivatives-and-periods: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Assuming countable choice for cross-section measures, the
  separate long-range Coulomb scattering theorem, as a model prediction: the
  repulsive $\\kappa/r$ potential has a unique simple outer turning point and
  every relative motion of the stated data extends to all of time without
  collision, with asymptotic velocities of speed $\\sqrt{2E/\\mu}$ and
  asymptotic impact distance $b=J/\\sqrt{2\\mu E}$; the deflection map is the
  $C^1$ decreasing bijection $2\\arctan(\\kappa/(2Eb))$ with a single branch,
  the differential cross-section is the Rutherford density
  $(\\kappa/4E)^2\\csc^4(\\theta/2)$, every angular band has the finite
  truncated cross-section $\\pi(b(\\theta_1)^2-b(\\theta_2)^2)$, and the ideal
  total cross-section diverges at forward angles. The parameter $\\kappa$ is a
  model datum of the mechanical model and is not identified with any
  electromagnetic quantity; the result reports no measurement, no screening law
  and no capture, radiation, relativistic or quantum modification."
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin),
        §6.4, Eqs. (358)-(367): the inverse-square scattering integral,
        $\\tan(\\theta/2)=k/(2Eb)$, the Rutherford cross-section and the
        small-angle divergence of the total cross-section"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics
        (title page last edited September 1, 2026), §3.5, Eqs. (3.68)-(3.74):
        $\\theta=\\pi-2\\varphi_0$ with the Coulomb half-angle, the Rutherford
        formula and the forward-angle divergence, with the caveats on inelastic
        and quantum scattering"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the cross-section measures.

Adopt a central scattering model of [[def-cm15-asymptotic-data]] clause (i)
with masses $m_1,m_2>0$, reduced mass $\mu$, and the **repulsive Coulomb
potential**
$$u(r)=\frac{\kappa}{r}\qquad(r>0),\qquad \kappa>0,$$
where $\kappa$ is a model datum of the mechanical model
([[def-cm01-units]]: $[\kappa]=\mu\ell^3\tau^{-2}$), so that
$$V(r)=\frac{\kappa}{r}+\frac{J^2}{2\mu r^2}\qquad(r>0).$$
Let the data satisfy $E>0$, $J>0$ and put
$$b:=\frac{J}{\sqrt{2\mu E}}>0,\qquad \alpha:=\frac{\kappa}{2Eb}>0.$$
Then:

1. **(Turning data.)** $V$ is strictly decreasing on $(0,\infty)$, with
   $V(r)\to+\infty$ as $r\downarrow0$ and $V(r)\to0$ as $r\to\infty$; the
   equation $V(r)=E$ has exactly one solution $r_*>0$, it is simple
   ($V'(r_*)<0$), one has $V(r)<E$ for every $r>r_*$ and $V(r)>E$ for every
   $0<r<r_*$, and $V=U^{\mathrm{eff}}_J$ is of class $C^2$ with no other
   crossing of the level $E$.
2. **(Global non-colliding scattering motion.)** Let $I\subseteq I_0$ be a time interval with nonempty interior and $r:I\to\mathbb R^3$
   be the relative coordinate of a motion of the model with attached angular
   momentum $j=\mu\,r\times r'=Je_3$ and energy $E$, with $|r(t)|\ge r_*$ for
   every $t\in I$ and $|r(t_*)|=r_*$ for some $t_*\in I$. Then $r$
   extends uniquely to a central-force trajectory $\bar r:\mathbb R\to
   \mathbb R^3$ whose extension is the relative coordinate of a motion of
   the two-label model with its autonomous force law extended to time window $\mathbb R$; $\rho:=|\bar r|$ satisfies
   $\rho\ge r_*>0$ (no collision), $\rho(t)>r_*$ for $t\ne t_*$, and $\rho$
   is strictly decreasing on $(-\infty,t_*]$ and strictly increasing on
   $[t_*,\infty)$; the asymptotic velocities $v_\pm=\lim_{t\to\pm\infty}
   \bar r'(t)$ exist with
   $|v_+|=|v_-|=\sqrt{2E/\mu}=:v_\infty$, and the asymptotic perpendicular
   distance of each branch to its limiting direction equals
   $b=J/(\mu v_\infty)=J/\sqrt{2\mu E}$, so that $J=\mu b\,v_\infty$. Unlike
   the finite-range case, there is no radius beyond which the motion is
   exactly free: the limits above are asymptotic.
3. **(Deflection and its single branch.)** With polar data $(\rho,\theta)$ in
   a triad with $e_3=j/J$, the half-angle of the motion is
   $$\Delta=\frac{\pi}{2}-\arctan\frac{\kappa}{2Eb}\in\Bigl(0,\frac{\pi}{2}\Bigr),$$
   its scattering angle is
   $$\theta_{\mathrm s}=\pi-2\Delta=2\arctan\frac{\kappa}{2Eb}\in(0,\pi),$$
   and its signed velocity rotation is $2\Delta-\pi=-2\arctan(\kappa/(2Eb))$.
   For the family at fixed $\mu,\kappa,E$ and varying $J(b)=\sqrt{2\mu E}\,b$, realised by the apsis initial data of [[thm-cm-coulomb-scattering]] clause 4, the **deflection map**
   $$\theta_{\mathrm{def}}:(0,\infty)\to(0,\pi),\qquad \theta_{\mathrm{def}}(b):=2\arctan\frac{\kappa}{2Eb},$$
   is $C^1$ and strictly decreasing, hence a $C^1$ bijection with inverse
   $b(\theta)=\dfrac{\kappa}{2E}\cot\dfrac{\theta}{2}$; it is a single
   deflection branch of the model on $(0,\infty)$ with
   $\theta_{\mathrm{def}}'(b)\ne0$ everywhere and no wrapping
   ($0<\Delta<\pi/2$ for every $b>0$).
4. **(Cross-section, angular cutoffs and divergence.)** The differential
   cross-section of that branch is
   $$\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta)=\Bigl(\frac{\kappa}{4E}\Bigr)^2\csc^4\frac{\theta}{2}\qquad(0<\theta<\pi),$$
   finite and positive; for $0<\theta_1<\theta_2<\pi$ the truncated total
   cross-section over the angular band is the finite number
   $$\sigma\bigl((\theta_1,\theta_2)\bigr) =\pi\bigl(b(\theta_1)^2-b(\theta_2)^2\bigr),$$
   and by monotonicity the band $\theta\ge\theta_1$ has
   $\sigma\bigl((\theta_1,\pi)\bigr)=\pi b(\theta_1)^2 =\pi\bigl(\frac{\kappa}{2E}\bigr)^2\cot^2\frac{\theta_1}{2}$; whereas the
   truncated integral over $(0,\theta_0)$ diverges for every
   $\theta_0\in(0,\pi)$, so the **model has no finite ideal total cross-section**. Every positive angular cutoff therefore yields a finite
   truncated ideal cross-section. Under the declared uniform-incident
   preparation with $b_{\max}>0$ and flux $\Phi>0$, the cutoff
   cross-section satisfies $\sigma_{b_{\max}}(Y)\le\pi b_{\max}^2$
   for every Borel angular window $Y\subseteq(0,\pi)$, and the expected
   scattered rate is $\Phi\sigma_{b_{\max}}(Y)<\infty$
   ([[def-cm15-cross-section]] clause (iv)). Thus ideal cross-section
   divergence does not imply an infinite rate under the finite incident
   cutoff; comparison with detected rates additionally requires a declared
   apparatus acceptance and its uncertainties.
5. **(Status of the parameter and exclusions.)** The coupling $\kappa$ is a
   parameter of the mechanical model. This item does not identify it with
   $q_1q_2/(4\pi\varepsilon_0)$ or with any electromagnetic quantity, states
   no measured value, and asserts no screening law for a medium of
   scatterers. Attractive Coulomb scattering (for which capture is possible
   for suitable data), inelastic, radiative, relativistic and quantum
   modifications are outside the adopted model and this statement.

## Facts & Assumptions

**Given:** Countable choice for the measures, and the central scattering model with the repulsive Coulomb potential $u=\kappa/r$, the masses $m_1,m_2>0$, the reduced mass $\mu$, the data $E>0$, $J>0$, the numbers $b=J/\sqrt{2\mu E}$ and $\alpha=\kappa/(2Eb)$, the effective potential $V$, and the relative coordinate $r$ with its attached data.

[L1] Coulomb scattering theory ([[thm-cm-coulomb-scattering]] clauses 1-4): under the displayed data, $V$ is strictly decreasing from $+\infty$ to $0$, the equation $V=E$ has the unique simple solution $r_*$, every trajectory with $|r|\ge r_*$ attaining $r_*$ extends uniquely to all of $\mathbb R$ with no collision, its two branches are monotone and its asymptotic velocities exist with $|v_\pm|=\sqrt{2E/\mu}$ and asymptotic perpendicular distance $b=J/\sqrt{2\mu E}$; and the half-angle is $\Delta=\int_0^{u_*}b\,\mathrm du/\sqrt{1-(\kappa/E)u-b^2u^2}=\pi/2-\arctan(\kappa/(2Eb))$.

[L2] Model and reduction ([[post-cm05-central-model]] clauses (i)-(ii), [[pthm-cm05-relative-reduction]] clauses 2-4, [[def-cm-central-force-trajectory]]): the model has no external forces, the relative coordinate is a $C^2$ central-force trajectory for $(\mu,u)$, and an affine centre-of-mass curve together with a central-force trajectory with values in $(0,\infty)$ reconstructs a motion of the model on the same interval.

[L3] Deflection and branch calculus ([[thm-cm-coulomb-scattering]] clause 4, [[thm-cm-rutherford-cross-section]] clauses 1-3, [[def-cm-scattering-data]] as used by [[def-cm15-cross-section]]): the asymptotic directions satisfy $\langle v_-,v_+\rangle/(|v_-||v_+|)=\cos(\pi-2\Delta)$ with the signed rotation $2\Delta-\pi$, and the branch $b(\theta)=(\kappa/2E)\cot(\theta/2)$ is $C^1$ with $b'(\theta)=-(\kappa/4E)\csc^2(\theta/2)$ and cross-section density $b|b'|/\sin\theta=(\kappa/(4E))^2\csc^4(\theta/2)$; the truncated integral over $(0,\theta_0)$ diverges and the integral over a compact angular interval is finite.

[L4] Trigonometric calculus ([[def-principal-inverse-tangent]], [[def-tangent-cotangent-secant-cosecant]], [[thm-tangent-cotangent-secant-cosecant-derivatives-and-periods]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]], [[thm-chain-rule]], [[def-continuity-real]]): $\cot'=-\csc^2$, $\csc^2=1+\cot^2$, $\arctan$ is the inverse of the principal tangent with values in $(-\pi/2,\pi/2)$, and the composition rules for $C^1$ functions apply.

[L5] Integration ([[thm-ftc-second-part]], [[thm-monotonicity-of-the-integral]], [[def-interval]]): a continuous function on an interval has a primitive, differences of primitives give integrals, and a nonnegative integrand has a monotone truncated integral.

## Proof

**Proof technique:** direct.

1.1 Clause 1: [L1] gives that $V$ is strictly decreasing from $+\infty$ to $0$ and that the unique solution $r_*$ of $V=E$ is simple with $V(r)<E$ for $r>r_*$; strict decrease also gives $V(r)>E$ for $0<r<r_*$. This is clause 1. [given, L1]

2.1 Clause 2, motion and asymptotics: by [L2] the relative coordinate is a central-force trajectory for $(\mu,u)$ with the attached data, so the trajectory hypotheses of [L1] hold; [L1] then gives the unique extension to all of $\mathbb R$ with no collision, the monotone branches with unique apsis, and the existence of $v_\pm$ with $|v_\pm|=\sqrt{2E/\mu}$ and asymptotic perpendicular distance $b=J/\sqrt{2\mu E}$ on both branches. The extension is the relative coordinate of a motion of the model with its autonomous force law extended to time window $\mathbb R$ by [L2], since $|\bar r(t)|\in(0,\infty)$ keeps the configuration admissible and the affine centre-of-mass extension is defined on all of $\mathbb R$. Because $u\not\equiv0$ on any outer region, no exact free tail is asserted; this is clause 2. [step 1.1, L1, L2]

3.1 Clause 3: [L1] gives $\Delta=\pi/2-\arctan(\kappa/(2Eb))$ with $\alpha=\kappa/(2Eb)>0$, so $\arctan\alpha\in(0,\pi/2)$ and $\Delta\in(0,\pi/2)$; [L3] then gives the scattering angle $\theta_{\mathrm s}=\pi-2\Delta\in(0,\pi)$ and the signed rotation $2\Delta-\pi$; substituting the arctangent expression gives $\theta_{\mathrm s}=2\arctan(\kappa/(2Eb))$. [L3] further gives that $\theta_{\mathrm{def}}$ is $C^1$ and strictly decreasing with image $(0,\pi)$ and the stated inverse, and $\theta_{\mathrm{def}}'(b)=2\cdot\frac{1}{1+(\kappa/(2Eb))^2}\cdot(-\frac{\kappa}{2Eb^2})<0$, so $\theta_{\mathrm{def}}'\ne0$ everywhere and the single branch covers $(0,\infty)$. For each $b>0$, [L1] supplies the apsis trajectory at $J(b)$ and [L2] reconstructs it into a two-label motion with any affine centre of mass. Thus these are actual model motions throughout the claimed family. Since every $b>0$ gives $0<\Delta<\pi/2$, the branch never wraps. This is clause 3. [step 2.1, L1, L3, L4, algebra]

4.1 Clause 4, density: the cross-section density of the branch is $b(\theta)|b'(\theta)|/\sin\theta$ by [L3], and substituting $b'(\theta)=-(\kappa/4E)\csc^2(\theta/2)$ and $b(\theta)=(\kappa/2E)\cot(\theta/2)$ and using $\sin\theta=2\sin(\theta/2)\cos(\theta/2)$ and $\csc^2=1+\cot^2$ gives $(\kappa/(4E))^2\csc^4(\theta/2)$, finite and positive for $0<\theta<\pi$; this is the displayed density. [step 3.1, L3, L4, algebra]

5.1 Clause 4, band computation: put $F(\theta):=\pi b(\theta)^2$. By [L4] and the chain rule, $F'(\theta)=2\pi b(\theta)b'(\theta) =2\pi\cdot\frac{\kappa}{2E}\cot\frac{\theta}{2}\cdot\bigl(-\frac{\kappa}{4E}\csc^2\frac{\theta}{2}\bigr) =-\frac{\pi\kappa^2}{4E^2}\,\frac{\cos(\theta/2)}{\sin^3(\theta/2)}$, while the solid-angle integrand is $\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta)\,2\pi\sin\theta =\bigl(\frac{\kappa}{4E}\bigr)^2\csc^4\frac{\theta}{2}\cdot 4\pi\sin\frac{\theta}{2}\cos\frac{\theta}{2} =\frac{\pi\kappa^2}{4E^2}\frac{\cos(\theta/2)}{\sin^3(\theta/2)}=-F'(\theta)$, using $\sin\theta=2\sin(\theta/2)\cos(\theta/2)$. Hence by the fundamental theorem [L5], for $0<\theta_1<\theta_2<\pi$ $$\sigma\bigl((\theta_1,\theta_2)\bigr)=\int_{\theta_1}^{\theta_2}\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta)\,2\pi\sin\theta\,\mathrm d\theta =-\bigl(F(\theta_2)-F(\theta_1)\bigr)=\pi\bigl(b(\theta_1)^2-b(\theta_2)^2\bigr),$$ finite because $b$ is continuous on $[\theta_1,\theta_2]$. Since the integrand is nonnegative, the truncated integral over $(\theta_1,\theta_2)$ increases as $\theta_2\uparrow\pi$ and tends to $\pi b(\theta_1)^2$ because $b(\theta_2)^2\to0$; this gives the band value. The divergence of the truncated integral over $(0,\theta_0)$ is the corresponding clause of [L3]. For the single branch, its incident preimage restricted to $0<b<b_{\max}$ is a subset of the disc of incident area $\pi b_{\max}^2$. Clause (iv) of [[def-cm15-cross-section]] therefore gives $\sigma_{b_{\max}}(Y)\le\pi b_{\max}^2$ and the finite expected rate $\Phi\sigma_{b_{\max}}(Y)$ for every Borel angular window, including $Y=(0,\pi)$. These are model expectations; a detected-rate comparison needs the separately specified apparatus and uncertainty. This is clause 4. [step 4.1, L3, L4, L5, algebra]

6.1 Clause 5: the statement records only the mechanical model's parameter $\kappa$, its conditional prediction and the explicit exclusions; no identification, measurement or additional model is used in steps 1.1-5.1, each of which cites only model data and the cited mathematical and physical suppliers. This completes the proof. [given, L1, L2, L3] ∎

## Remarks

- **Dimensions.** $[\kappa]=\mu\ell^3\tau^{-2}$, $\alpha$ and $\Delta$ dimensionless, $[\mathrm d\sigma/\mathrm d\Omega]=\ell^2$; the identity $\sigma=\pi b(\theta_1)^2$ at a cutoff shows that the truncated total is the area of the disk of impact parameters feeding the accepted angles.

- **The divergence is a feature of the ideal model.** The ideal Coulomb branch has no total cross-section because the full-azimuth angular density $2\pi\sin\theta\,\mathrm d\sigma/\mathrm d\Omega$ grows like $\theta^{-3}$ (the solid-angle density grows like $\theta^{-4}$). An angular cutoff gives the displayed truncated ideal value, while the declared finite incident cutoff gives finite predicted rates even for the entire angular interval. Comparing either prediction with observations requires the specified preparation and apparatus model; no experimental acceptance or rate is reported here.

- **What is not claimed.** No attractive branch, no capture, no screening of a medium of scatterers, no radiation loss, no relativistic or quantum correction, and no identification of $\kappa$ with an electromagnetic coupling; those require separate models and, for the identification, a cross-framework item.
