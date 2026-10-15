---
id: ex-qftmath-x06
kind: example
domain: mathematics
library: mathematics
title: Worked mathematical example B06 — a cutoff coherent soft state
status: draft
origin: pipeline
physical_scope: null
dependency_level: 5
deps:
  - def-qft-example-data
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null
  - thm-qft-example-soft-current-angular-coherent
dependency_roles:
  def-qft-example-data: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
  thm-qft-example-soft-current-angular-coherent: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 2, §2.3
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html
    - title: David Tong, Quantum Field Theory, Chapter 6, §6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
    - title: M. Srednicki, Quantum Field Theory, author-hosted prepublication draft, §§55 and 59
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
---

## Example

Prescribe one unit charge incoming at rest and outgoing with velocity
$v\mathbf e_z$, where $0<v<1$. The QX08 coefficient is
$$ C(v)=\frac{\alpha}{\pi} \left(\frac1v\log\frac{1+v}{1-v}-2\right)>0. $$
At $v=1/2$ this is
$C=(\alpha/\pi)(2\log3-2)>0$. Set the upper energy cutoff $\Lambda>0$ joules
and lower cutoff $\lambda=\Lambda/e$. The exact model then has sector squared
norms $s_m=e^{-C}C^m/m!$, vacuum-sector squared norm $e^{-C}$, sector-index
sum $C$, and free-energy quadratic expectation
$C\Lambda(1-e^{-1})$ joules. Halving $\lambda$ repeatedly adds
$C\log2$ to the cutoff norm squared at each step; QX08's exact coherent
overlap proof shows that this fixed shell overlap prevents a projective-ray
limit, including arbitrary
phase choices. QX08's separate weak-zero and no-strong-limit claims remain
conditional on its escalated Q8 supplier. The squared norms are mathematical
Hilbert-space quantities, not reported photon probabilities or measured
emissions.

## Facts & Assumptions

**Given:** The QX08 current model, $\alpha>0$, $g^2=4\pi\alpha$, $0<v<1$,
and energy cutoffs $\lambda,\Lambda$ in joules.

[F1] [[def-qft-example-data]]: $\alpha=e^2/(4\pi\epsilon_0\hbar c)>0$ and
$g=\sqrt{4\pi\alpha}>0$ is dimensionless; the convention assigns no
probability to an amplitude.

[F2] [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]:
Euclidean chart surface measure on $S^2$ is the measure used for $d\Omega$ in
QX08, and its chart integrals use the induced metric Jacobian.

[F3] [[thm-qft-example-soft-current-angular-coherent]]: for the prescribed
balanced current, $C=g^2\int_{S^2}|K_\perp|^2d\Omega/[2(2\pi)^3]$,
$N_\lambda=C\log(\Lambda/\lambda)$, and the normalized coherent sector
squared norms are $e^{-N_\lambda}N_\lambda^m/m!$. Its local proof proves the
projective-ray nonlimit from the exact coherent overlap; its separate
weak-zero and no-strong-limit claims are conditional on the current Q8 input.

[F4] [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]:
coordinate lines and singletons in $\mathbb R^2$ are Lebesgue null, so the
azimuthal seam and the two poles have zero area in local regular surface
charts.

## Verification

1.1 Put the incoming leg at $p_{\rm in}=E(1,0)$ with
$\eta_{\rm in}=-1,Q_{\rm in}=1$, and the outgoing leg at
$p_{\rm out}=E'(1,v\mathbf e_z)$ with
$\eta_{\rm out}=+1,Q_{\rm out}=1$. The charge balance is
$-1+1=0$. For $x=n_z$, substitution into the definition of $K$ gives
$$ K(n)=\left(\frac{vx}{1-vx},\,0,\,0,\,\frac{v}{1-vx}\right), \qquad K^0=n\cdot\mathbf K. $$
Therefore
$$ |K_\perp(n)|^2=|\mathbf K|^2-(n\cdot\mathbf K)^2 =\frac{v^2(1-x^2)}{(1-vx)^2}. $$
Every denominator is positive because $1-vx\ge1-v>0$. [given, F1, F3,
algebra]

2.1 Use the spherical chart
$n=(\sqrt{1-x^2}\cos\phi,\sqrt{1-x^2}\sin\phi,x)$ for
$-1<x<1$, $0<\phi<2\pi$. Its two tangent vectors are orthogonal and have
squared lengths $(1-x^2)^{-1}$ and $1-x^2$, so the induced area density is
$1$. Away from the poles, the azimuthal seam is the coordinate line $x_2=0$
in the graph chart over $(x_2,x_3)$; at each pole, its graph chart over
$(x_1,x_2)$ maps the pole to a singleton contained in a coordinate line.
These parameter sets are null by [F4]; integrating the measurable chart area
density over a null parameter set gives zero, so the omitted seam and poles
have surface measure zero.
Hence $d\Omega=dx\,d\phi$ in this chart. It follows from step 1.1 that
$$ \int_{S^2}|K_\perp|^2d\Omega =2\pi I(v),\qquad I(v)=\int_{-1}^{1}\frac{v^2(1-x^2)}{(1-vx)^2}\,dx. $$
With $u=1-vx$, reversing the limits gives
$$ I(v)=\frac1v\int_{1-v}^{1+v} \left(\frac{v^2-1}{u^2}+\frac2u-1\right)du =\frac2v\log\frac{1+v}{1-v}-4. $$
The antiderivative is
$v^{-1}((1-v^2)/u+2\log u-u)$, using the derivative and integral formula
for $\log$; evaluation at both endpoints gives the displayed result.
Positivity also follows directly from the integrand, which is strictly
positive for $-1<x<1$. [given, F2, F4, step 1.1, algebra]

3.1 Substituting the angular integral into [F3] gives
$$ C(v)=\frac{g^2}{2(2\pi)^3}\,2\pi I(v) =\frac{g^2}{4\pi^2} \left(\frac1v\log\frac{1+v}{1-v}-2\right) =\frac{\alpha}{\pi} \left(\frac1v\log\frac{1+v}{1-v}-2\right), $$
where [F1] gives $g^2=4\pi\alpha$. At $v=1/2$, the bracket is
$2\log3-2>0$ by the positive integral in step 2.1. For
$\lambda=\Lambda/e$, [F3] gives $N_\lambda=C\log e=C$. The sector formula
then yields $s_0=e^{-C}$ and
$\sum_{m\ge0}m s_m=C$ by the exponential series. [given, F1, F3,
step 2.1, algebra]

4.1 The free-energy quadratic expectation from [F3] at this cutoff is
$C(\Lambda-\lambda)=C\Lambda(1-e^{-1})$. If the lower cutoff is halved,
then
$N_{\lambda/2}-N_\lambda=C\log2>0$. Repeated halving produces the same
positive shell overlap at every step; applying the projective-ray conclusion
in [F3] rules out a projective limit for this $C>0$ model. The
example does not use the QX08 weak-zero or no-strong-limit conclusions. No
Born rule, actual hard-scattering dynamics, detector law, or empirical claim
is part of this calculation. [given, F3, step 3.1, algebra]
∎
