---
id: ex-cm05-circular-orbit-frequency-check
kind: example
title: "A gravitational circular relative orbit checked on declared model data: $r_0=2\\cdot10^{6}\\,$m, $\\mu r_0\\omega^2=u'(r_0)=3\\cdot10^{12}\\,$N, $E=-3\\cdot10^{18}\\,$J and $\\omega_{\\rm lin}=\\omega=10^{-9}\\,$s$^{-1}$"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [post-cm05-central-model, post-cm05-gravity, pthm-cm05-relative-reduction, pthm-cm05-circular-orbit, def-cm-central-force-trajectory, def-cm01-units, def-interval]
dependency_roles:
  post-cm05-central-model: formulation-prerequisite
  post-cm05-gravity: formulation-prerequisite
  pthm-cm05-relative-reduction: physical-result
  pthm-cm05-circular-orbit: physical-result
  def-cm-central-force-trajectory: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
physical_scope: "A numerical check of the circular-orbit criterion and the linearised radial frequency on declared model data for the gravitational relative problem: the critical radius, the force-balance identity $\\mu r_0\\omega^2=u'(r_0)$, the energy at the minimum of the effective potential, the equality $\\omega_{\\rm lin}=\\omega$ for the inverse-square potential, and the two labels' circular motions about the centre of mass. Every number is declared model data or an exact consequence of the cited items; no observation is used and no nonlinear stability is claimed."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, Eqs. (3.52)-(3.54): the circular-orbit condition $\\mathrm dU_{\\rm ef}/\\mathrm dr=0$, the identification with the radial force balance and the angular velocity $\\omega=L_z/(mr_0^2)$"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), Section 2.5.4, printed pp. 31-33 (PDF pp. 37-39) and Figure 15: the circular orbit at the minimum of the effective potential"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Example

Declare the gravitational two-label model of [[post-cm05-gravity]] with the
same data as the barycentric check ([[ex-cm05-barycentric-orbits-check]]):
$$m_1=2\times10^{24}\ \mathrm{kg},\qquad m_2=6\times10^{24}\ \mathrm{kg},\qquad \mu=\tfrac32\times10^{24}\ \mathrm{kg},\qquad G_{\mathrm N}=10^{-24}\ \mathrm{m^{3}\,kg^{-1}\,s^{-2}},$$
$$\kappa=G_{\mathrm N}m_1m_2=1.2\times10^{25}\ \mathrm{kg\,m^{3}\,s^{-2}},\qquad J=6\times10^{27}\ \mathrm{kg\,m^{2}\,s^{-1}},$$
with the couplings identified with the inertial masses. Then
[[pthm-cm05-circular-orbit]] gives:

1. the critical radius and angular velocity
   $$r_0=\frac{J^{2}}{\mu\kappa}=2\times10^{6}\ \mathrm m,\qquad \omega=\frac{J}{\mu r_0^{2}}=10^{-9}\ \mathrm{s^{-1}},$$
   and the criterion holds in all three equivalent forms
   $\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0)=0$,
   $u'(r_0)=J^{2}/(\mu r_0^{3})=3\times10^{12}\ \mathrm N$,
   $\mu r_0\omega^{2}=3\times10^{12}\ \mathrm N$;
2. the orbital energy $E=U^{\mathrm{eff}}_J(r_0)=-\mu\kappa^{2}/(2J^{2})=-3\times10^{18}\ \mathrm J$, the minimum of the effective potential;
3. the linearised radial frequency
   $\omega_{\mathrm{lin}}=\sqrt{\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)/\mu}=\sqrt{\kappa/(\mu r_0^{3})}=10^{-9}\ \mathrm{s^{-1}}$,
   equal to the orbital angular velocity $\omega$ for this inverse-square
   potential;
4. both labels move uniformly on circles about the centre of mass with
   angular velocity $\omega=10^{-9}\ \mathrm{s^{-1}}$ and radii
   $\frac{m_2}{M}r_0=1.5\times10^{6}\ \mathrm m$ and
   $\frac{m_1}{M}r_0=5\times10^{5}\ \mathrm m$, each with period
   $2\pi/\omega=2\pi\times10^{9}\ \mathrm s$.

The stated period is relative to the centre of mass, for the coordinates
$x_i-X$. An absolute label trajectory has this period only if the centre of
mass velocity $V$ vanishes; otherwise the centre of mass drifts uniformly.

## Facts & Assumptions

**Given:** The declared data $\mu=\frac32\times10^{24}$, $\kappa=1.2\times10^{25}$, $J=6\times10^{27}$, $m_1=2\times10^{24}$, $m_2=6\times10^{24}$, $M=8\times10^{24}$.

[L1] Circular-orbit theorem ([[pthm-cm05-circular-orbit]] clauses 1-4, [[post-cm05-central-model]] clauses (i)-(ii), [[post-cm05-gravity]] clauses (i)-(ii), [[pthm-cm05-relative-reduction]] clause 4, [[def-cm-central-force-trajectory]]): the equivalences of clause 1 hold with $U^{\mathrm{eff}}_J(\rho)=u(\rho)+J^{2}/(2\mu\rho^{2})$ and $u(\rho)=-\kappa/\rho$; under the condition, the relative motion is the uniform rotation at radius $r_0$ with angular velocity $\omega=J/(\mu r_0^{2})$, energy $E=U^{\mathrm{eff}}_J(r_0)$ and angular momentum $Je_3$; the linearised radial equation at $r_0$ has frequency $\omega_{\mathrm{lin}}=\sqrt{(U^{\mathrm{eff}}_J)''(r_0)/\mu}$ when $(U^{\mathrm{eff}}_J)''(r_0)>0$; and the two labels move uniformly on circles about the centre of mass with radii $\frac{m_j}{M}r_0$ and angular velocity $\omega$.

[L2] Arithmetic: $r_0=3.6\times10^{55}/\bigl(1.8\times10^{49}\bigr)=2\times10^{6}$ m; $\omega=6\times10^{27}/\bigl(1.5\times10^{24}\cdot4\times10^{12}\bigr)=10^{-9}$ s$^{-1}$; $u'(r_0)=\kappa/r_0^{2}=1.2\times10^{25}/4\times10^{12}=3\times10^{12}$ N; $J^{2}/(\mu r_0^{3})=3.6\times10^{55}/\bigl(1.5\times10^{24}\cdot8\times10^{18}\bigr)=3\times10^{12}$ N; $\mu r_0\omega^{2}=1.5\times10^{24}\cdot2\times10^{6}\cdot10^{-18}=3\times10^{12}$ N; and, using $J^{2}=\mu\kappa r_0$, $\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)=\kappa/r_0^{3}=1.5\times10^{6}$ ([[def-interval]], [[def-cm01-units]]).

## Verification

**Proof technique:** direct.

1.1 Critical radius and criterion: substituting the data gives $r_0=J^{2}/(\mu\kappa)=\bigl(36\times10^{54}\bigr)/\bigl(18\times10^{48}\bigr)=2\times10^{6}$ m, which lies in $J_0=(0,\infty)$, and $\bigl(U^{\mathrm{eff}}_J\bigr)'(r_0)=u'(r_0)-J^{2}/(\mu r_0^{3})=3\times10^{12}-3\times10^{12}=0$ by the three arithmetic evaluations of [L2]; since $\mu r_0\omega^{2}=3\times10^{12}$ as well, all three forms of the criterion of [[pthm-cm05-circular-orbit]] clause 1 hold simultaneously. [given, L1, L2, algebra]

2.1 Angular velocity, energy and the labels: $\omega=J/(\mu r_0^{2})=10^{-9}$ s$^{-1}$ by [L2]; the energy is $E=U^{\mathrm{eff}}_J(r_0)=-\kappa/r_0+J^{2}/(2\mu r_0^{2})=-6\times10^{18}+3\times10^{18}=-3\times10^{18}$ J, which also equals $-\mu\kappa^{2}/(2J^{2})=\bigl(\tfrac32\times10^{24}\cdot144\times10^{48}\bigr)/\bigl(2\cdot36\times10^{54}\bigr)\cdot(-1)=-3\times10^{18}$ J; by [L1] the labels' circles have radii $\frac34r_0=\tfrac32\times10^{6}$ m and $\frac14r_0=5\times10^{5}$ m with angular velocity $\omega$, each with period $2\pi\times10^{9}$ s. [step 1.1, L1, L2, algebra]

3.1 Linearised frequency: $\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)=-2\kappa/r_0^{3}+3J^{2}/\bigl(\mu r_0^{4}\bigr)$; with $J^{2}=\mu\kappa r_0$ the two terms are $-2\kappa/r_0^{3}$ and $+3\kappa/r_0^{3}$, giving $\bigl(U^{\mathrm{eff}}_J\bigr)''(r_0)=\kappa/r_0^{3}=\tfrac32\times10^{6}$, so $\omega_{\mathrm{lin}}=\sqrt{\tfrac32\times10^{6}/\bigl(\tfrac32\times10^{24}\bigr)}=\sqrt{10^{-18}}=10^{-9}$ s$^{-1}=\omega$. This is the equality of the linearised radial and orbital frequencies for the inverse-square potential. [step 1.1, step 2.1, L1, L2, algebra] ∎

## Remarks

- **Linearisation only.** The equality $\omega_{\mathrm{lin}}=\omega$ is a statement about the quadratic radial approximation; no nonlinear stability of the circular orbit is claimed.

- **Declared data and the empirical status.** The masses, $J$ and the declared $G_{\mathrm N}$ are model data chosen for exact arithmetic; the measured value and uncertainty of [[post-cm05-gravity]] clause (iii) are not used, and no observation is modelled.
