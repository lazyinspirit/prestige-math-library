---
id: ex-em-plane-wave-infinite-energy
kind: example
title: "A nonzero whole-space plane wave has infinite total energy"
status: draft
origin: pipeline
domain: physics
dependency_level: 20
deps: [def-countable-choice, pthm-em-wave-energy-average,
       pthm-em-general-wave-ivp,
       def-em-vacuum-energy-flux,
       def-em-plane-wave-definition,
       def-riemann-integral-over-a-jordan-set,
       def-multidimensional-rectangle-and-volume,
       def-multidimensional-darboux-integral,
       thm-continuous-functions-on-compact-jordan-sets-are-integrable,
       def-euclidean-inner-product,
       pthm-em-plane-wave-maxwell,
       lem-em-period-average]
dependency_roles:
  def-countable-choice: mathematical-premise
  pthm-em-wave-energy-average: physical-result
  pthm-em-general-wave-ivp: physical-result
  def-em-vacuum-energy-flux: formulation-prerequisite
  def-em-plane-wave-definition: formulation-prerequisite
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  def-multidimensional-rectangle-and-volume: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  pthm-em-plane-wave-maxwell: physical-result
  lem-em-period-average: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "An exact computation for one explicit ideal plane-wave configuration on $\\mathbb R^3\\times\\mathbb R$: the positivity and uniformity of the period-averaged energy density, the divergence of the box integrals, and the contrast with compactly supported finite-energy data. No measured quantity, no finite beam and no empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.4 pp. 92-94 (the plane-wave energy density $u=\\epsilon_0E_0^2\\sin^2(k\\cdot x-\\omega t)$ and $\\bar u=\\epsilon_0E_0^2/2$, positive and uniform on average)"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§9.2.2 printed pp. 376-379 and §9.2.3 printed p. 381 (the monochromatic plane wave is an idealisation on all of space; the energy density is $\\frac12\\epsilon_0E_0^2$ on average and never identically zero)"
verification:
  precheck: pass
---

## Example

Assume Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]) for the Lebesgue-energy and compact-source comparison branches (ii), (iii), as required by their measure and wave-Cauchy suppliers. The explicit plane-wave fields of (i) use no choice.

Fix $K>0$, $\omega:=cK$, $k:=Ke_3$, $E_0>0$
(unit $\mathrm V\,\mathrm m^{-1}$), the amplitude $e:=E_0e_1$ and
$b:=k\times e/\omega=(E_0/c)e_2$, and let $(E,B)$ be the corresponding
plane-wave solution of [[pthm-em-plane-wave-maxwell]]
([[def-em-plane-wave-definition]]) on $\mathbb R^3\times\mathbb R$ with energy
density $u$ of [[def-em-vacuum-energy-flux]]; write
$\theta(x,t)=Kx_3-\omega t$. Then:

(i) [Explicit density] $E=E_0\cos\theta\,e_1$,
$B=(E_0/c)\cos\theta\,e_2$ and
$u(x,t)=\varepsilon_0E_0^2\cos^2\theta(x,t)$, a nonnegative function vanishing
exactly on the nodal planes $\cos\theta=0$; the period average at every fixed
$x$ is $\langle u\rangle=\varepsilon_0E_0^2/2>0$, uniformly in $x$ and $t$
([[pthm-em-wave-energy-average]](a)).

(ii) [Unbounded box integrals] Fix $t\in\mathbb R$ and let
$R\ge(\omega|t|+\pi/4)/K$. On the sub-box
$Q_R:=[-R,R]^2\times[(\omega t-\pi/4)/K,\,(\omega t+\pi/4)/K]$ of the box
$[-R,R]^3$ one has $\cos^2\theta\ge1/2$, hence
$u\ge\varepsilon_0E_0^2/2$ there; both boxes are product boxes with finite
volume ([[def-multidimensional-rectangle-and-volume]]), $u$ is continuous on
them and therefore Riemann integrable
([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]), and
monotonicity of the multidimensional Darboux integral
([[def-multidimensional-darboux-integral]],
[[def-riemann-integral-over-a-jordan-set]]) gives
$$\int_{[-R,R]^3}u(x,t)\,dx\;\ge\;\int_{Q_R}u(x,t)\,dx\;\ge\;\frac{\varepsilon_0E_0^2}{2}\,\mathrm{vol}(Q_R)\;=\;\frac{\pi\varepsilon_0E_0^2}{K}\,R^2\;\longrightarrow\;+\infty\quad(R\to\infty).$$
Consequently the box integrals have no finite limit as
$R\to\infty$: the ideal plane wave has infinite total energy in the
box-exhaustion sense, in contrast to the total energy of a single wave 'mode'
being finite on any bounded box.

(iii) [Contrast with compactly supported data] If instead the constrained data
of [[pthm-em-general-wave-ivp]] vanish off a compact set, then by clause (d) of
that theorem the fields have compact spatial support at each time, and the
instantaneous total energy is the integral of the continuous density $u$
over a bounding closed box containing its support, hence finite. So finite total energy is available for
compactly supported data, while the ideal plane wave of (i)-(ii) is not a
finite-energy configuration.

(iv) [Scope] The example is an exact computation for the ideal plane wave; it
reports no measurement, and "infinite total energy" means the divergence
statement (ii), not a claim about any laboratory field or finite beam.

## Facts & Assumptions

**Given:** Countable Choice $\mathrm{AC}_\omega$ for clauses (ii), (iii); The constants $K>0$, $c>0$, $\omega=cK$, $k=Ke_3$, $E_0>0$ in $\mathrm V\,\mathrm m^{-1}$, the amplitude $e=E_0e_1$, the magnetic amplitude $b=k\times e/\omega=(E_0/c)e_2$, the phase $\theta(x,t)=Kx_3-\omega t$, the plane-wave fields $(E,B)$, and the energy density $u$.

[F1] Plane-wave data ([[def-em-plane-wave-definition]], [[pthm-em-plane-wave-maxwell]]): the fields are $E=\operatorname{Re}(e\exp(i\theta))$, $B=\operatorname{Re}(b\exp(i\theta))$, and with $|k|=\omega/c$, $k\cdot e=0$, $b=k\times e/\omega$ the pair lies in the source-free smooth Maxwell branch.

[F2] Energy density ([[def-em-vacuum-energy-flux]]): $u=\frac{\varepsilon_0}{2}|E|^2+\frac{1}{2\mu_0}|B|^2\ge0$ is $C^\infty$ and $\varepsilon_0=(\mu_0c^2)^{-1}$.

[F3] Plane-wave averages ([[pthm-em-wave-energy-average]](a)): for this class of plane waves $\langle u\rangle=\frac{\varepsilon_0}{2}|e|^2$, independent of $x$ and of the starting time, where the average is taken over the period $T=2\pi/\omega$; in particular the real-amplitude identity $\frac1T\int_0^T\cos^2(\phi_0-\omega s)\,ds=\frac12$ is the scalar case of [[lem-em-period-average]].

[F4] Integration over boxes and Jordan sets ([[def-multidimensional-rectangle-and-volume]], [[def-multidimensional-darboux-integral]], [[def-riemann-integral-over-a-jordan-set]], [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]): a product box $[a,b]=\prod_j[a_j,b_j]$ has volume $\prod_j(b_j-a_j)$; a continuous function on a compact Jordan measurable set is Riemann integrable there; and the Darboux integral of a nonnegative function is monotone under inclusion of product boxes.

[F5] Compact-support propagation ([[pthm-em-general-wave-ivp]](d)): for initially constraint-satisfying $C^\infty$ data vanishing off a compact $K\subseteq\mathbb R^3$ with $K\subseteq\overline B_\rho(0)$, the solution fields satisfy $E(x,t)=B(x,t)=0$ whenever $|x|>\rho+c(t-t_0)$.

[F6] Euclidean structure ([[def-euclidean-inner-product]]): the norm and inner product are the Euclidean ones, so for real vectors $v$, $|v|^2=\langle v,v\rangle$.

## Verification

**Proof technique:** direct.

1.1 Explicit fields and density. Since $k\times e=(Ke_3)\times(E_0e_1)=KE_0e_2$, one has $b=(E_0/c)e_2$; by [F1] and Euler's formula in the real-part encoding, $E=\operatorname{Re}(E_0e_1e^{i\theta})=E_0\cos\theta\,e_1$ and $B=\operatorname{Re}((E_0/c)e_2e^{i\theta})=(E_0/c)\cos\theta\,e_2$. By [F2] and [F6], $u=\frac{\varepsilon_0}{2}E_0^2\cos^2\theta+\frac{1}{2\mu_0}\frac{E_0^2}{c^2}\cos^2\theta=\varepsilon_0E_0^2\cos^2\theta$ because $1/(\mu_0c^2)=\varepsilon_0$; the function is nonnegative and vanishes exactly where $\cos\theta=0$, the union of the nodal planes $Kx_3-\omega t=\pi/2+\pi\mathbb Z$. [given, F1, F2, F6, algebra]

2.1 Period average. At fixed $x$, $u(x,\cdot)$ is the $\cos^2$ profile $\varepsilon_0E_0^2\cos^2(\phi_0-\omega s)$ with $\phi_0=Kx_3$; the scalar case of [F3] gives $\langle u\rangle=\varepsilon_0E_0^2\cdot\frac12=\frac{\varepsilon_0}{2}E_0^2$, which equals $\frac{\varepsilon_0}{2}|e|^2$ and is strictly positive, independent of $x$ and of the starting time. [step 1.1, F3, algebra]

2.2 Unbounded box integrals. Fix $t\in\mathbb R$ and $R\ge(\omega|t|+\pi/4)/K$, and let $Q_R$ be the sub-box of $[-R,R]^3$ with $x_3\in[(\omega t-\pi/4)/K,(\omega t+\pi/4)/K]$ and $x_1,x_2\in[-R,R]$. Each point of $Q_R$ satisfies $|Kx_3-\omega t|\le\pi/4$, so $\cos^2\theta\ge1/2$ and $u\ge\varepsilon_0E_0^2/2$ there, while $Q_R\subseteq[-R,R]^3$ because $|(\omega t\pm\pi/4)/K|\le R$; both are product boxes with finite volume by [F4], and $u$ is continuous on the compact boxes, hence Riemann integrable by [F4], so monotonicity of the Darboux integral gives $\int_{[-R,R]^3}u\ge\int_{Q_R}u\ge\frac{\varepsilon_0E_0^2}{2}\mathrm{vol}(Q_R)$. The volume is $\mathrm{vol}(Q_R)=(2R)^2\cdot\frac{\pi}{2K}=\frac{2\pi R^2}{K}$ by [F4], so $\int_{[-R,R]^3}u\ge\frac{\pi\varepsilon_0E_0^2}{K}R^2\to+\infty$ as $R\to\infty$; hence the box integrals are unbounded and the box-exhaustion total energy $\sup_{R>0}\int_{[-R,R]^3}u$ is $+\infty$. [step 1.1, F4, algebra]

3.1 Compactly supported data. Suppose the constrained $C^\infty$ data of [F5] satisfy $\operatorname{div}E_0=\operatorname{div}B_0=0$ and vanish off a compact $K\subseteq\overline B_\rho(0)$, and let $(E,B)$ be the corresponding solution; for fixed $t$ the fields vanish off the closed ball $\overline B_{\rho+c(t-t_0)}(0)$, a compact set, so $u(\cdot,t)$ is a continuous function with compact support there; choose a nondegenerate closed box containing that ball. By [F4] the continuous density is Riemann integrable on the box with a finite integral, and it vanishes outside the box. All larger box integrals have this same finite value. Thus the instantaneous total energy of the compactly supported configuration is finite, in contrast with the divergence of step 2.2 for the ideal plane wave. [step 2.2, F4, F5, algebra]

4.1 Conclusion and scope. Step 1.1 is clause (i) except for the average, which is step 2.1; step 2.2 is clause (ii) including the divergence of the box integrals; step 3.1 is clause (iii); and clause (iv) is a scope qualification: all quantities are exact ideal-field quantities of the specified plane wave, no laboratory measurement or finite beam is described, and the phrase "infinite total energy" refers to the divergence statement of step 2.2 in the box-exhaustion sense, not to any finite measured energy. [step 1.1, step 2.1, step 2.2, step 3.1, given] ∎

## Remarks

- **Idealisation, not evidence.** The computation shows that the ideal whole-space plane wave is not a finite-energy configuration; it makes no claim about any laboratory field, and the compact-support branch of [[pthm-em-general-wave-ivp]] is the source of the finite-energy contrast.
