---
id: texp-em-radiation-pressure-example
kind: thought-experiment
title: "Ideal absorber and ideal reflector momentum transfer (radiation pressure)"
status: published
origin: pipeline
domain: physics
dependency_level: 20
deps: [
       pthm-em-wave-energy-average,
       pthm-em-plane-wave-maxwell,
       pthm-em-linear-superposition,
       def-em-vacuum-stress-momentum,
       def-em-plane-wave-definition,
       def-em-si-conventions,
       def-countable-choice,
       lem-em-period-average,
]
dependency_roles:
  pthm-em-wave-energy-average: physical-result
  pthm-em-plane-wave-maxwell: physical-result
  pthm-em-linear-superposition: physical-result
  def-em-vacuum-stress-momentum: formulation-prerequisite
  def-em-plane-wave-definition: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-countable-choice: mathematical-premise
  lem-em-period-average: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Adopted idealisations of a plane beam at normal incidence on an infinite plane ideal absorber or ideal reflector, with the pillbox force law as an explicitly stated model assumption; the conclusion is the conditional pressure $I/c$ or $2I/c$ along the propagation direction. Excluded: oblique incidence, finite beams and pulses, real material response, radiation reaction, measurements, and any empirical claim; $\\mathrm{AC}_\\omega$ is retained as an assumed premise."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.4 pp. 92-94 (the Poynting flux and its period average for the incident wave, $\\bar S=c\\bar u\\hat k$)"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§9.2.3 printed p. 382 (eq. (9.64): radiation pressure on a perfect absorber is $I/c$, the incident momentum flux (energy flux divided by $c$), twice as great on a perfect reflector; the qualitative $qv\\times B$ mechanism)"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$,
[[def-countable-choice]]). Idealised setup: the vacuum region is
$\{x_3<0\}$ and a material body occupies $\{x_3>0\}$ with plane surface
$x_3=0$; an incident plane wave of [[def-em-plane-wave-definition]] with
$k=Ke_3$ ($K>0$, $\omega=cK$), $e=E_0e_1$ ($E_0>0$, unit
$\mathrm V\,\mathrm m^{-1}$) and $b=(E_0/c)e_2$ propagates in the $+e_3$
direction. By [[pthm-em-wave-energy-average]] its period-averaged Poynting
flux is $\langle S\rangle=I\hat k$ with $I=\frac{\varepsilon_0c}{2}E_0^2$, and
its period-averaged normal Maxwell stress is $\langle\sigma_{33}\rangle=-I/c$
([[def-em-vacuum-stress-momentum]] for $\sigma$). All period-averaged
quantities below are independent of time. Let $A>0$ be the area (in
$\mathrm m^2$) of a finite rectangular surface patch, let
$F\in\mathbb R^3$ be its period-averaged force (in N), and let $p\in\mathbb R$
be the signed normal force per unit area (in $\mathrm N\,\mathrm m^{-2}$).
The adopted boundary-force law below sets $F=A p e_3$; these are patch
quantities in the uniform infinite-plane model. Two idealised models of the surface:

(i) [Ideal absorber] Adopt (A1) no reflected vacuum field and a zero back-face
stress for an ideal absorption layer, and (A2) the force on each surface patch
is given by the pillbox limit of the momentum balance, i.e. its signed pressure is the difference
$\langle\sigma_{33}\rangle_{\mathrm{back}}-\langle\sigma_{33}(0^-)\rangle$ of
the back-face and incident-side normal stresses, with the back-face stress set
to zero by (A1). This is an exterior boundary-force model: the incident vacuum
field is not asserted to extend by zero across a sharp interface as a global
Maxwell solution. A real absorption layer must supply a compatible
material-field solution; no such realization is claimed here. The incident-wave average is constant throughout the vacuum region by
[[pthm-em-wave-energy-average]](c), so its one-sided surface limit is
$\langle\sigma_{33}(0^-)\rangle=-I/c$. Then the force per unit area is
$p=I/c$ and $F/A=(I/c)\,\hat k$: the wave pushes the absorber along its direction of
propagation with pressure $I/c$.

(ii) [Ideal reflector] Adopt instead (A1') the field on the material side
vanishes identically while the vacuum field is the sum of the incident wave and
the reflected plane wave with $k'=-k$, $e'=-e$ (so that the tangential
electric field vanishes on $x_3=0$; the sum is a source-free solution by
[[pthm-em-linear-superposition]]), together with the same boundary-force law
(A2) with zero material-side stress. Compute the averaged normal stress of the
standing wave directly: the real fields satisfy
$E=E_0[\cos(Kx_3-\omega t)-\cos(Kx_3+\omega t)]e_1=2E_0\sin(Kx_3)\sin(\omega t)e_1$
and $B=(2E_0/c)\cos(Kx_3)\cos(\omega t)e_2$, whose cross terms cancel
identically in $\sigma_{33}=-(\varepsilon_0/2)|E|^2-(1/(2\mu_0))|B|^2$; with
$\langle\sin^2\rangle=\langle\cos^2\rangle=1/2$ this gives
$\langle\sigma_{33}(0^-)\rangle=-\varepsilon_0E_0^2=-2I/c$ (the incident and
reflected waves contribute $-I/c$ each). Hence $p=2I/c$ and $F/A=(2I/c)\,\hat k$: twice the
absorbing pressure, because the momentum of the reflected wave is reversed.

(iii) [Status] The absorber back-face and reflector vanishing-field
idealisations (A1)/(A1') and the boundary-force law (A2) are adopted model
assumptions of this thought experiment, not derived material laws and not
observations; the deduction from them with the computed averaged stresses is
complete and conditional. The setup idealises an infinite plane beam at normal
incidence on an infinite plane surface; oblique incidence, finite beams, real
absorbers and any magnetisation/current response of a material require a
material model and are excluded. No measured pressure is reported and no
empirical or statistical claim is made.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$; the frame basis $(e_1,e_2,e_3)$; $K>0$, $\omega=cK$, $k=Ke_3$, $E_0>0$ in $\mathrm V\,\mathrm m^{-1}$; the incident amplitude $e=E_0e_1$; the constants $c,\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$; the vacuum region $\{x_3<0\}$ and the surface $x_3=0$; a patch area $A>0$, signed pressure $p$ and force vector $F=A p e_3$.

[F1] Plane waves and their amplitude conditions ([[def-em-plane-wave-definition]], [[pthm-em-plane-wave-maxwell]]): for $j$ indexing the incident and reflected waves, $|k_j|=\omega/c$, $k_j\cdot e_j=0$, $b_j=k_j\times e_j/\omega$ imply that the pair lies in the source-free smooth Maxwell branch with $E_j=\operatorname{Re}(e_j\exp(i(k_j\cdot x-\omega t)))$ and $B_j=\operatorname{Re}(b_j\exp(i(k_j\cdot x-\omega t)))$.

[F2] Plane-wave averages ([[pthm-em-wave-energy-average]]): for a transverse plane wave with amplitude $e$, wavevector $k$ with $|k|=\omega/c$ and $b=k\times e/\omega$, one has $\langle S\rangle=I\hat k$, $I=\frac{\varepsilon_0c}{2}|e|^2$, and componentwise $\langle\sigma_{ij}\rangle=-\langle u\rangle\hat k_i\hat k_j$ with $\langle u\rangle=I/c$, so in particular $\langle\sigma_{33}\rangle=-I/c$ for $k=Ke_3$.


[F4] Momentum density and stress ([[def-em-vacuum-stress-momentum]]): $g=S/c^2$ and $\sigma_{ij}=\varepsilon_0(E_iE_j-\frac12\delta_{ij}|E|^2)+\frac{1}{\mu_0}(B_iB_j-\frac12\delta_{ij}|B|^2)$.

[F5] Linear superposition ([[pthm-em-linear-superposition]]): a finite linear combination with real coefficients of smooth source-free solutions is again a smooth source-free solution on the same region.

[F6] Period averages of squares ([[lem-em-period-average]]): for $T=2\pi/\omega$, $\frac1T\int_0^T\sin^2(\omega s)\,ds=\frac1T\int_0^T\cos^2(\omega s)\,ds=\frac12$.



[F9] SI relation ([[def-em-si-conventions]]): $\varepsilon_0=(\mu_0c^2)^{-1}$, so $\varepsilon_0E_0^2=2I/c$ because $I=\frac{\varepsilon_0c}{2}E_0^2$.

[A1] Adopted ideal-absorber model: no reflected vacuum field and zero back-face stress; the force per unit area on the material is $p=\langle\sigma_{33}\rangle_{\mathrm{back}}-\langle\sigma_{33}(0^-)\rangle$, with $F/A=p e_3$, a pillbox boundary-force law, not a derived material law.

[A2] Adopted ideal-reflector model: the field on the material side vanishes identically, the vacuum field is the sum of the incident wave and the reflected plane wave with $k'=-k$, $e'=-e$, and the same boundary-force law with zero material-side stress applies.


## Proof

**Proof technique:** direct.

1.1 Incident wave data. For the incident wave $k\times e=(Ke_3)\times(E_0e_1)=KE_0e_2$, so $b=(E_0/c)e_2$, and $|k|=\omega/c$, $k\cdot e=0$; hence by [F1] the pair is a smooth source-free solution, with $E=E_0\cos(Kx_3-\omega t)e_1$ and $B=(E_0/c)\cos(Kx_3-\omega t)e_2$, fields independent of $x_1,x_2$ and $T$-periodic in $t$ with $T=2\pi/\omega$. By [F2] the averaged Poynting flux is $\langle S\rangle=I\hat k$ with $I=\frac{\varepsilon_0c}{2}E_0^2$, and the averaged normal stress of the incident wave is the constant $\langle\sigma_{33}\rangle=-\langle u\rangle=-I/c$ everywhere. [given, F1, F2, F4, algebra]

2.1 Absorber: by [A1] the vacuum field is the incident wave alone. Step 1.1 gives $\langle\sigma_{33}(x_3)\rangle=-I/c$ for every $x_3<0$, independently of $x_3$. Its limit as $x_3\uparrow0$ is therefore $\langle\sigma_{33}(0^-)\rangle=-I/c$. [step 1.1, F2, A1]


2.2 Reflector: the standing-wave averaged stress. Adopt [A2]; the reflected data satisfy $k'\cdot e'=(-k)\cdot(-e)=0$, $|k'|=|k|=\omega/c$ and $b'=k'\times e'/\omega=(-Ke_3)\times(-E_0e_1)/\omega=(E_0/c)e_2=b$, so by [F1] the reflected pair is a plane-wave solution and by [F5] the sum $(E,B)=(E_1,B_1)+(E',B')$ is a smooth source-free solution on the vacuum side; explicitly $E=E_0[\cos(Kx_3-\omega t)-\cos(Kx_3+\omega t)]e_1=2E_0\sin(Kx_3)\sin(\omega t)e_1$ and $B=(E_0/c)[\cos(Kx_3-\omega t)+\cos(Kx_3+\omega t)]e_2=(2E_0/c)\cos(Kx_3)\cos(\omega t)e_2$ by the sum-to-product identities, so the tangential electric field vanishes on $x_3=0$. Since $E_3=B_3=0$, [F4] gives $\sigma_{33}=-\frac{\varepsilon_0}{2}|E|^2-\frac{1}{2\mu_0}|B|^2=-\varepsilon_0\cdot2E_0^2\sin^2(Kx_3)\sin^2(\omega t)-\frac{1}{2\mu_0}\cdot\frac{4E_0^2}{c^2}\cos^2(Kx_3)\cos^2(\omega t)$; period-averaging with [F6] and using $\frac{E_0^2}{\mu_0c^2}=\varepsilon_0E_0^2$ gives $\langle\sigma_{33}(x_3)\rangle=-\varepsilon_0E_0^2[\sin^2(Kx_3)+\cos^2(Kx_3)]=-\varepsilon_0E_0^2$, and $\varepsilon_0E_0^2=2I/c$ by [F9]; in particular $\langle\sigma_{33}(0^-)\rangle=-2I/c$. [step 1.1, F1, F4, F5, F6, F9, A2, algebra]

3.1 Absorber force. By [A1] the back-face stress is zero, so the signed pressure is $p=\langle\sigma_{33}\rangle_{\mathrm{back}}-\langle\sigma_{33}(0^-)\rangle=0-(-I/c)=I/c$, so $F/A=(I/c)e_3=(I/c)\hat k$, the propagation direction of the incident beam: the wave pushes the absorber with pressure $I/c$. [step 2.1, A1, algebra]

3.2 Reflector force. By [A2] the material-side stress is zero, so the signed pressure is $p=0-\langle\sigma_{33}(0^-)\rangle=2I/c$, so $F/A=(2I/c)e_3=(2I/c)\hat k$: twice the absorbing pressure; the momentum of the reflected wave being reversed. [step 2.2, A2, algebra]

4.1 Status and scope. The two conclusions are conditional on the adopted idealisations [A1]/[A2]: neither the vanishing of the reflected or transmitted fields nor the pillbox force law is derived from a material model, and the incident vacuum field is not asserted to extend by zero across the sharp interface as a global Maxwell solution; a real absorption layer or reflector would require a compatible material-field solution. The deduction from the adopted assumptions and the computed averaged stresses is complete, the geometry is the ideal infinite plane beam at normal incidence, and oblique incidence, finite beams, material response, radiation reaction and measurements are excluded; no measured pressure, statistical statement or empirical claim is made. [step 3.1, step 3.2, A1, A2, given] ∎

## Source notes

The cited treatments give the momentum flux $I/c$ of the incident beam and state the absorber pressure $I/c$ and reflector pressure $2I/c$ for perfect absorbers and reflectors; the deduction above makes the required boundary assumptions explicit (A1)/(A1')/(A2) and computes both averaged normal stresses from the framework's definitions, so that the textbook statements are the motivation rather than premises. No material law, absorbed or reflected amplitude, or observed force is asserted.
