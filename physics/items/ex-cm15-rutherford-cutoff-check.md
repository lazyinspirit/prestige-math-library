---
id: ex-cm15-rutherford-cutoff-check
kind: example
title: "A declared-data Rutherford check: $\\alpha=1$, $\\theta=\\pi/2$,
  $(\\mathrm d\\sigma/\\mathrm d\\Omega)=4\\times10^{-24}\\,\\mathrm{m^2}$, the
  band values $\\pi b(\\theta_1)^2$ and the growth of the truncated total as
  $\\theta_1\\downarrow0$"
status: draft
origin: session
domain: physics
dependency_level: 19
deps:
  [
    pthm-cm15-rutherford-model,
    def-cm15-asymptotic-data,
    def-cm15-cross-section,
    thm-cm-rutherford-cross-section,
    def-cm01-units,
    def-interval,
    def-continuity-real,
    def-principal-inverse-tangent,
    def-tangent-cotangent-secant-cosecant,
    thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions,
    thm-sine-cosine-signs-monotonicity-and-ranges,
    def-countable-choice,
    def-derivative,
    thm-sine-and-cosine-derivatives,
    cor-differentiable-implies-continuous,
    thm-algebra-of-function-limits,
    thm-sine-and-cosine-addition-formulas,
    thm-sine-cosine-zero-sets-and-fundamental-period
  ]
dependency_roles:
  pthm-cm15-rutherford-model: physical-result
  def-cm15-asymptotic-data: formulation-prerequisite
  def-cm15-cross-section: formulation-prerequisite
  thm-cm-rutherford-cross-section: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
  def-principal-inverse-tangent: mathematical-premise
  def-tangent-cotangent-secant-cosecant: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  def-countable-choice: mathematical-premise
  def-derivative: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  thm-algebra-of-function-limits: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Assuming countable choice for the scattering measures and
  vocabulary, A numerical check of the repulsive-Coulomb model prediction on
  declared model data in SI units: reduced mass
  $2\\times10^{-26}\\,\\mathrm{kg}$, energy $10^{-18}\\,\\mathrm{J}$, angular
  momentum $4\\times10^{-34}\\,\\mathrm{kg\\,m^2\\,s^{-1}}$ and coupling
  $\\kappa=4\\times10^{-30}\\,\\mathrm{J\\,m}$ give
  $v_\\infty=10^4\\,\\mathrm{m\\,s^{-1}}$, $b=2\\times10^{-12}\\,\\mathrm{m}$,
  $\\alpha=1$, scattering angle $\\pi/2$ and density
  $4\\times10^{-24}\\,\\mathrm{m^2}$; the angular band values
  $\\pi(b(\\theta_1)^2-b(\\theta_2)^2)$ and the small-angle growth
  $\\approx(16\\pi\\times10^{-24}\\,\\mathrm{m^2})/\\theta_1^2$ are checked. All
  numbers are declared model data fed into the model formulas; the example
  asserts no measurement, no uncertainty budget and no comparison with any
  experiment."
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin),
        §6.4, Eqs. (358)-(367): the inverse-square scattering integral, the
        Rutherford angle relation and the divergence of the total cross-section"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics
        (title page last edited September 1, 2026), §3.5, Eqs. (3.69)-(3.74):
        the Coulomb scattering angle, the Rutherford formula and the
        forward-angle divergence"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the cited scattering measures and vocabulary.

**Declared model data.** For a central scattering model of
[[pthm-cm15-rutherford-model]] declare the repulsive Coulomb coupling and
the reduced data
$$\mu=2\times10^{-26}\ \mathrm{kg},\qquad E=10^{-18}\ \mathrm{J},\qquad J=4\times10^{-34}\ \mathrm{kg\,m^2\,s^{-1}},\qquad \kappa=4\times10^{-30}\ \mathrm{J\,m},$$
all read as *model data*, not as measured values of any physical pair.
Abbreviate $\kappa_4:=\kappa/(4E)=10^{-12}\ \mathrm{m}$ and
$\kappa_2:=\kappa/(2E)=2\times10^{-12}\ \mathrm{m}$.

**Assertions to check.** The model quantities of
[[pthm-cm15-rutherford-model]] take the values
$$v_\infty=10^4\ \mathrm{m\,s^{-1}},\qquad b=2\times10^{-12}\ \mathrm{m},\qquad \alpha:=\frac{\kappa}{2Eb}=1,\qquad \theta=\frac{\pi}{2},$$
the branch density at $\theta=\pi/2$ is
$(\mathrm d\sigma/\mathrm d\Omega)(\pi/2)=\kappa_4^2\csc^4(\pi/4)=4\times10^{-24}\ \mathrm{m^2}$,
the angular band $(\theta_1,\theta_2)$ carries the truncated total
$\sigma=\pi\bigl(b(\theta_1)^2-b(\theta_2)^2\bigr)$ with
$b(\theta)=\kappa_2\cot(\theta/2)$, and as $\theta_1\downarrow0$ the band
value $\pi b(\theta_1)^2$ grows like
$(16\pi\times10^{-24}\ \mathrm{m^2})/\theta_1^2$, so no finite ideal total is
assigned.

## Facts & Assumptions

**Given:** Countable choice for the scattering measures. The declared model data $\mu,E,J,\kappa$ and the vocabulary of [[def-cm15-asymptotic-data]] and [[def-cm15-cross-section]].

[L1] Coulomb model predictions ([[pthm-cm15-rutherford-model]] clauses 2-4, [[thm-cm-rutherford-cross-section]] clauses 1-3): for the repulsive $\kappa/r$ potential, $v_\infty=\sqrt{2E/\mu}$, $b=J/\sqrt{2\mu E}$, $\Delta=\pi/2-\arctan(\kappa/(2Eb))$, $\theta=\pi-2\Delta=2\arctan(\kappa/(2Eb))$, $b(\theta)=(\kappa/2E)\cot(\theta/2)$, $\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta)=(\kappa/(4E))^2\csc^4(\theta/2)$, $\sigma((\theta_1,\theta_2))=\pi(b(\theta_1)^2-b(\theta_2)^2)$, and the truncated integral over $(0,\theta_0)$ diverges.

[L2] Trigonometric algebra ([[def-principal-inverse-tangent]], [[def-tangent-cotangent-secant-cosecant]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]], [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]): $\sin^2x+\cos^2x=1$, the addition and parity formulas hold, $\cos(\pi/2)=0$, and sine and cosine are positive on $(0,\pi/2)$. Cotangent is $\cos/\sin$ and cosecant is $1/\sin$ on their nonzero-denominator domains; the principal arctangent inverts tangent on $(-\pi/2,\pi/2)$. The special values used below are derived in step 1.2.

[L3] Limit tools ([[thm-sine-and-cosine-derivatives]], [[def-derivative]], [[cor-differentiable-implies-continuous]], [[thm-algebra-of-function-limits]], [[def-continuity-real]], [[def-interval]], [[def-cm01-units]]): sine and cosine are differentiable on $\mathbb R$, $\sin0=0$, $\cos0=1$, and $\sin'(0)=1$; differentiability implies continuity. Quotients of functions with finite limits converge to the quotient of those limits when the limiting denominator is nonzero. Here $f(x)\sim g(x)$ means $f(x)/g(x)\to1$ in the stated limit, with both expressions defined near the endpoint.

## Verification

**Proof technique:** direct.

1.1 Speed and impact parameter: $2E/\mu=2\times10^{-18}/(2\times10^{-26})=10^{8}\ \mathrm{m^2\,s^{-2}}$, so $v_\infty=\sqrt{10^{8}}=10^4\ \mathrm{m\,s^{-1}}$; then $b=J/(\mu v_\infty)=4\times10^{-34}/(2\times10^{-26}\cdot10^{4})=2\times10^{-12}\ \mathrm{m}$. [given, L1, L2, algebra]

1.2 Special values: at $x=\pi/4$, the double-angle identity gives $0=\cos(\pi/2)=\cos^2x-\sin^2x$; positivity and the Pythagorean identity yield $\sin x=\cos x=1/\sqrt2$, hence $\cot x=1$, $\csc^4x=4$ and $\arctan1=\pi/4$. At $x=\pi/6$, the addition formulas give $0=\cos(3x)=4\cos^3x-3\cos x$. Since $\cos x>0$, $\cos x=\sqrt3/2$ and $\sin x=1/2$, so $\cot x=\sqrt3$. Applying the difference formulas to $\pi/12=\pi/4-\pi/6$ now gives $\cot(\pi/12)=(\sqrt6+\sqrt2)/(\sqrt6-\sqrt2)=2+\sqrt3$. Finally continuity and positivity give $\sin(\pi/2)=1$; thus $\cot(\theta/2)\to0$ as $\theta\uparrow\pi$. [L2, L3, algebra]

2.1 Angle: $\alpha=\kappa/(2Eb)=4\times10^{-30}/(2\times10^{-18}\cdot2\times10^{-12})=1$, so $\arctan\alpha=\pi/4$ and $\Delta=\pi/2-\pi/4=\pi/4$, giving $\theta=2\arctan1=\pi/2\in(0,\pi)$, consistent with $b(\theta)|_{\theta=\pi/2}=\kappa_2\cot(\pi/4)=2\times10^{-12}\ \mathrm{m}=b$. [step 1.2, step 1.1, L1, L2, algebra]

2.2 Band values: using $b(\theta)=\kappa_2\cot(\theta/2)$ and the endpoint limit $\lim_{\theta\uparrow\pi}b(\theta)=0$, for the band $(\pi/2,\pi)$ the value is $\sigma=\pi\bigl(b(\pi/2)^2-0^2\bigr)=\pi(2\times10^{-12})^2=4\pi\times10^{-24}\approx1.257\times10^{-23}\ \mathrm{m^2}$; for $(\pi/3,\pi)$, $b(\pi/3)=2\times10^{-12}\sqrt3$, so $\sigma=12\pi\times10^{-24}\approx3.770\times10^{-23}\ \mathrm{m^2}$; for $(\pi/6,\pi)$, $b(\pi/6)=2\times10^{-12}(2+\sqrt3)$, so $\sigma=\pi\cdot4\times10^{-24}(2+\sqrt3)^2\approx1.750\times10^{-22}\ \mathrm{m^2}$. These are exact expressions in $\pi$ and $\sqrt3$ evaluated to four significant digits; all are finite. [step 1.2, step 1.1, L1, L2, algebra]

3.1 Density at $\pi/2$: $\kappa_4=\kappa/(4E)=10^{-12}\ \mathrm{m}$ and $\csc^4(\pi/4)=(\sqrt2)^4=4$, so $\frac{\mathrm d\sigma}{\mathrm d\Omega}(\pi/2)=\kappa_4^2\cdot4=4\times10^{-24}\ \mathrm{m^2}$, with dimension $\ell^2$ ([[def-cm01-units]]). [step 1.2, step 2.1, L1, L2, algebra]

3.2 Small-angle growth: the derivative definition and [L3] give $\sin x/x=(\sin x-\sin0)/(x-0)\to\sin'(0)=1$ as $x\downarrow0$, and continuity gives $\cos x\to1$. Since $\sin x>0$ on $(0,\pi/2)$, quotient limits yield $x\cot x=\cos x/(\sin x/x)\to1$. With $x=\theta_1/2$, this proves $\cot(\theta_1/2)\sim2/\theta_1$, so $\pi b(\theta_1)^2=\pi\kappa_2^2\cot^2(\theta_1/2)\sim4\pi\kappa_2^2/\theta_1^2=16\pi\times10^{-24}/\theta_1^2$ in $\mathrm{m^2}$. At $\theta_1=10^{-2}$ rad, $b(\theta_1)=2\times10^{-12}\cot(5\times10^{-3})\approx4.000\times10^{-10}\ \mathrm{m}$ and $\sigma\approx5.026\times10^{-19}\ \mathrm{m^2}$. The positive asymptotic coefficient implies unbounded band values as $\theta_1\downarrow0$, agreeing with [[pthm-cm15-rutherford-model]] clause 4. [step 2.2, L1, L2, L3, algebra]

4.1 Reading: every number above was obtained by substituting the declared model data into the model formulas; no measurement, uncertainty, detector acceptance or sampling model is supplied, so the computation is a check of the model's arithmetic and not a comparison with nature. In particular the divergence of the truncated total at forward angles is a feature of the declared idealisation, and any empirical statement would require a separate experiment item with measured inputs and uncertainties. [given, L1, L2] ∎

## Remarks

- **Why the data are round.** The values were chosen so that $\alpha=1$ and $\theta=\pi/2$ exactly, making the check arithmetic rather than numerical; this is a declared convenience of the model computation and carries no empirical meaning.

- **Units.** $[\kappa]=\mathsf M\ell^3\tau^{-2}$ (here $\mathrm{J\,m}$), $[\kappa/(2E)]=\ell$, $[b]=\ell$; the displayed $\sigma$ values have dimension $\ell^2$ ([[def-cm01-units]]).
