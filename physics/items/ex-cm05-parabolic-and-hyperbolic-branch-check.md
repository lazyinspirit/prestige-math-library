---
id: ex-cm05-parabolic-and-hyperbolic-branch-check
kind: example
title: "The parabolic and hyperbolic branches on declared model data: $E=0$ with $e=1$ and periapsis $p/2$, and $E=1.5\\cdot10^{18}\\,$J with $e=2$, periapsis $p/3$ and angular domain $\\lvert\\theta-\\theta_0\\rvert<2\\pi/3$"
status: published
origin: session
domain: physics
dependency_level: 17
deps: [post-cm05-central-model, post-cm05-gravity, pthm-cm05-conic, pthm-cm05-relative-reduction, def-cm-central-force-trajectory, def-interval, def-countable-choice]
dependency_roles:
  post-cm05-central-model: formulation-prerequisite
  post-cm05-gravity: formulation-prerequisite
  pthm-cm05-conic: physical-result
  pthm-cm05-relative-reduction: physical-result
  def-cm-central-force-trajectory: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
physical_scope: "A numerical consistency check of the zero- and positive-energy branches of the gravitational relative orbit on declared model data: the eccentricity-energy correspondence $E=0\\iff e=1$ and $E>0\\iff e>1$, the periapsis distances as positive solutions of $U^{\\mathrm{eff}}_J(\\rho)=E$ (zeros only for the parabolic energy $E=0$), the angular domain of the hyperbolic branch and the barrier bound. Every number is declared model data or an exact consequence of the cited items; no observation, no asymptotics and no scattering cross-section is claimed."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, Eq. (3.65) and the discussion of the $E\\ge0$ cases, chapter pages 14-15 (PDF pages 47-48): the parabolic orbit at $E=0$ and the open hyperbolic branch at $E>0$ with its angular sector"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 4.5, printed p. 81 (PDF p. 84), Figure 4.2: the circular, elliptic, parabolic and hyperbolic cases of the gravity-like potential with $\\varepsilon=1$ and $\\varepsilon>1$"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
---

## Example

Declare the same model data as the companion elliptic check
([[ex-cm05-gravitational-ellipse-and-period-check]]): the gravitational
two-label model of [[post-cm05-gravity]] with
$$m_1=m_2=2\times10^{24}\ \mathrm{kg},\quad \mu=10^{24}\ \mathrm{kg},\quad \kappa=G_{\mathrm N}m_1m_2=10^{24}\ \mathrm{kg\,m^{3}\,s^{-2}},\quad J=10^{27}\ \mathrm{kg\,m^{2}\,s^{-1}},\quad p=\frac{J^{2}}{\mu\kappa}=10^{6}\ \mathrm m,$$
where $G_{\mathrm N}=2.5\times10^{-25}\ \mathrm{m^{3}\,kg^{-1}\,s^{-2}}$ is a
declared datum of the computation and the couplings are identified with the
inertial masses. Assume the Axiom of Countable Choice
([[def-countable-choice]]), as in the cited conic item. On this data the
formulas of [[pthm-cm05-conic]] give:

1. **Parabolic branch.** The energy $E=0$ corresponds to eccentricity
   $e=1$; the conic is $\rho=p/\bigl(1+\cos(\theta-\theta_0)\bigr)$, whose
   denominator ranges over $(0,2]$, and the periapsis is
   $\rho_{\min}(0)=p/2=5\times10^{5}\ \mathrm m$, with
   $U^{\mathrm{eff}}_J(\rho_{\min}(0))=0=E$.
2. **Hyperbolic branch.** With eccentricity $e=2$ the energy is
   $$E=\frac{\mu\kappa^{2}}{2J^{2}}\bigl(e^{2}-1\bigr)=\tfrac32\times10^{18}\ \mathrm J,$$
   the periapsis is $\rho_{\min}(E)=p/(1+e)=10^{6}/3\ \mathrm m$, with
   $U^{\mathrm{eff}}_J\bigl(10^{6}/3\bigr)=E$, and the orbit is the branch
   $$\rho=\frac{p}{1+2\cos(\theta-\theta_0)}$$
   evaluated where $1+2\cos(\theta-\theta_0)>0$, that is
   $\lvert\theta-\theta_0\rvert<2\pi/3$ modulo $2\pi$.
3. **Consistency of the classification.** In both cases $e\ge1$ and the
   corresponding focus-directrix conic loci of [[pthm-cm05-conic]] are
   unbounded; the barrier of clause 2 gives
   $\rho\ge\rho_{\min}(E)>0$ along the motion, so the collision is excluded;
   no claim is made that the motion traverses the entire locus.

## Facts & Assumptions

**Given:** The declared data $\mu=10^{24}$, $\kappa=10^{24}$, $J=10^{27}$, $p=10^{6}$ and the two energies $E=0$ and $E=\frac32\times10^{18}$ with eccentricities $e=1$ and $e=2$.

[A1] The Axiom of Countable Choice is assumed ([[def-countable-choice]]).

[L1] Conic and classification ([[pthm-cm05-conic]] clauses 1-2 and 4, [[post-cm05-gravity]] clause (i), [[post-cm05-central-model]] clauses (i)-(ii), [[def-cm-central-force-trajectory]]): with the identification $m_i^{g}=m_i$, $\kappa=G_{\mathrm N}m_1m_2$; a motion with angular momentum magnitude $J$ has conic data $\rho=p/(1+e\cos(\theta-\theta_0))$ and energy-eccentricity relation $E=(\mu\kappa^{2}/2J^{2})(e^{2}-1)$ with $E=0\iff e=1$, $E>0\iff e>1$; the barrier function is $\rho_{\min}(E)=J^{2}/\bigl(\mu\kappa+\sqrt{\mu^{2}\kappa^{2}+2\mu EJ^{2}}\bigr)$ with $U^{\mathrm{eff}}_J(\rho_{\min}(E))=E$, and in the zero- and positive-energy cases the periapsis is $p/(1+e)$.

[L2] Arithmetic and trigonometry: $\mu\kappa^{2}/(2J^{2})=\tfrac12\times10^{18}\ \mathrm J$, so $E=(\tfrac12\times10^{18})(e^{2}-1)$; $2^{2}-1=3$; the denominator $1+2\cos\psi$ is positive exactly for $\cos\psi>-\tfrac12$, i.e. $\lvert\psi\rvert<2\pi/3$ modulo $2\pi$; and $10^{24}/(10^{6}/3)=3\times10^{18}$ ([[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 Parabolic branch: $e=1$ gives $E=\tfrac12\times10^{18}\cdot(1-1)=0$, and conversely $E=0$ gives $e^{2}-1=0$, hence $e=1$ because $e\ge0$; the denominator $1+\cos(\theta-\theta_0)$ ranges over $(0,2]$, so $\rho\ge p/2$ with equality at $\theta=\theta_0$, and $\rho_{\min}(0)=J^{2}/(2\mu\kappa)=10^{6}/2=5\times10^{5}$ m. Direct substitution gives $U^{\mathrm{eff}}_J(5\times10^{5})=-\tfrac{10^{24}}{5\times10^{5}}+\tfrac{10^{54}}{2\times10^{24}\cdot25\times10^{10}}=-2\times10^{18}+2\times10^{18}=0$. [given, A1, L1, L2, algebra]

2.1 Hyperbolic branch: with $e=2$, $E=\tfrac12\times10^{18}\cdot3=\tfrac32\times10^{18}$ J, and conversely $E>0$ forces $e^{2}-1>0$, hence $e>1$; the periapsis is $p/(1+e)=10^{6}/3$ m, and direct substitution gives $U^{\mathrm{eff}}_J(10^{6}/3)=-\tfrac{3\times10^{24}}{10^{6}}+\tfrac{10^{54}\cdot9}{2\times10^{24}\cdot10^{12}}=-3\times10^{18}+\tfrac92\times10^{18}=\tfrac32\times10^{18}$ J, which is $E$. The condition $\rho>0$ reads $1+2\cos(\theta-\theta_0)>0$, i.e. $\cos(\theta-\theta_0)>-\tfrac12$, which by [L2] is $\lvert\theta-\theta_0\rvert<2\pi/3$ modulo $2\pi$. [step 1.1, L1, L2, algebra]

3.1 Consistency: by [L1] the barrier bound $\rho\ge\rho_{\min}(E)$ holds in both cases with the displayed positive periapsis, so the relative coordinate stays a positive distance from the force centre; both $e=1$ and $e=2$ give $e\ge1$, and [[pthm-cm05-conic]] defines their focus-directrix conic loci as unbounded; the classification $E<0\iff e<1$ of clause 1 excludes an elliptic interpretation of these data. This concerns the loci, not how much of either locus the motion traverses. [step 1.1, step 2.1, L1, algebra] ∎

## Remarks

- **Conditional on the existence of the motions.** As in the companion elliptic check, the computations verify the formulas for any motion with the stated conic data; they do not construct the motions or settle their asymptotics.

- **Declared data only.** The numbers are model data chosen for exact arithmetic; no measured value, observation or scattering measurement is used.
