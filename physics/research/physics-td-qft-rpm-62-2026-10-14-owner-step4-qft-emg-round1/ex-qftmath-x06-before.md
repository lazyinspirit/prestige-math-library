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
  - thm-logarithm-derivative-and-integral
  - def-real-exponential-function-and-e
  - def-natural-logarithm
  - thm-exponential-is-strictly-increasing
  - lem-qft-qed-coherent-ir-obstruction
dependency_roles:
  def-qft-example-data: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
  thm-qft-example-soft-current-angular-coherent: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  lem-qft-qed-coherent-ir-obstruction: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
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

Let the two-leg set be $I=\{\mathrm{in},\mathrm{out}\}$, with
$\eta_{\mathrm{in}}=-1$, $\eta_{\mathrm{out}}=+1$ and dimensionless charge
numbers $Q_{\mathrm{in}}=Q_{\mathrm{out}}=1$. Set the incoming dimensionless
velocity to $\mathbf v_{\mathrm{in}}=\mathbf0$ and the outgoing one to
$\mathbf v_{\mathrm{out}}=v\mathbf e_z$, where $\mathbf e_z=(0,0,1)$ and
$0<v<1$; take any positive incoming and outgoing energies. The coefficient
in [[thm-qft-example-soft-current-angular-coherent]] is
$$ C(v)=\frac{\alpha}{\pi} \left(\frac1v\log\frac{1+v}{1-v}-2\right)>0. $$
At $v=1/2$ this is
$C=(\alpha/\pi)(2\log3-2)>0$. Let $\exp$ denote the real exponential of
[[def-real-exponential-function-and-e]] and let $\mathrm e:=\exp(1)$ be its
value at $1$, distinct from the SI charge $e$ in [[def-qft-example-data]].
Set the upper energy cutoff $\Lambda>0$ joules and
the lower cutoff $\lambda=\Lambda/\mathrm e$. The exact model then has sector
squared norms $s_m=\exp(-C)C^m/m!$, vacuum-sector squared norm $\exp(-C)$,
sector-index sum $C$, and free-energy quadratic expectation
$C\Lambda(1-\mathrm e^{-1})$ joules. Halving $\lambda$ repeatedly adds
$C\log2$ to the cutoff norm squared at each step; the exact coherent
overlap proof shows that this fixed shell overlap prevents a projective-ray
limit, including arbitrary
phase choices. The separate weak-zero and no-strong-limit claims in
[[thm-qft-example-soft-current-angular-coherent]] remain conditional on
[[lem-qft-qed-coherent-ir-obstruction]]. The squared norms are mathematical
Hilbert-space quantities, not reported photon probabilities or measured
emissions.

## Facts & Assumptions

**Given:** The current model of [[thm-qft-example-soft-current-angular-coherent]], $\alpha>0$, $g^2=4\pi\alpha$, $0<v<1$, and energy cutoffs $\lambda,\Lambda$ in joules.

[F1] [[def-qft-example-data]]: $\alpha=e^2/(4\pi\epsilon_0\hbar c)>0$ and $g=\sqrt{4\pi\alpha}>0$ is dimensionless; the convention assigns no probability to an amplitude.

[F2] [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]: Euclidean chart surface measure on $S^2$ is the measure used for $d\Omega$ in [[thm-qft-example-soft-current-angular-coherent]], and its chart integrals use the induced metric Jacobian.

[F3] [[thm-qft-example-soft-current-angular-coherent]]: for the prescribed balanced current, $C=g^2\int_{S^2}|K_\perp|^2d\Omega/[2(2\pi)^3]$, $N_\lambda=C\log(\Lambda/\lambda)$, and the normalized coherent sector squared norms are $\exp(-N_\lambda)N_\lambda^m/m!$. Its local proof proves the projective-ray nonlimit from the exact coherent overlap; its separate weak-zero and no-strong-limit claims are conditional on [[lem-qft-qed-coherent-ir-obstruction]].

[F4] [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]: coordinate lines and singletons in $\mathbb R^2$ are Lebesgue null, so the azimuthal seam and the two poles have zero area in local regular surface charts.

[F5] For $u>0$, $\log'(u)=1/u$ and $\log u=\int_1^udu/u$. [[thm-logarithm-derivative-and-integral]]

[F6] The real exponential is defined by its power series with $\mathrm e=\exp(1)$. Since $\exp$ is strictly increasing and $\exp(0)=1$, $\mathrm e>1$; because $\log$ is the inverse of $\exp$ on $(0,\infty)$, $\log\mathrm e=1$. This real $\mathrm e$ is distinct from the SI charge $e$ in [[def-qft-example-data]]. [[def-real-exponential-function-and-e]], [[thm-exponential-is-strictly-increasing]], [[def-natural-logarithm]]

## Verification

1.1 Put the incoming leg at $p_{\rm in}=E(1,\mathbf0)$ with
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
for $\log$ from [F5]; evaluation at both endpoints gives the displayed result.
Positivity also follows directly from the integrand, which is strictly
positive for $-1<x<1$. [given, F2, F4, F5, step 1.1, algebra]

3.1 Substituting the angular integral into [F3] gives
$$ C(v)=\frac{g^2}{2(2\pi)^3}\,2\pi I(v) =\frac{g^2}{4\pi^2} \left(\frac1v\log\frac{1+v}{1-v}-2\right) =\frac{\alpha}{\pi} \left(\frac1v\log\frac{1+v}{1-v}-2\right), $$
where [F1] gives $g^2=4\pi\alpha$. At $v=1/2$, the bracket is
$2\log3-2>0$ by the positive integral in step 2.1. For
$\lambda=\Lambda/\mathrm e$, [F3] and [F6] give
$N_\lambda=C\log\mathrm e=C$. The sector formula then yields
$s_0=\exp(-C)$ and
$\sum_{m\ge0}m s_m=C$ by the exponential series. [given, F1, F3, F6,
step 2.1, algebra]

4.1 The free-energy quadratic expectation from [F3] at this cutoff is $C(\Lambda-\lambda)=C\Lambda(1-\mathrm e^{-1})$. If the lower cutoff is halved, then $N_{\lambda/2}-N_\lambda=C\log2>0$. The substitution $\omega=(\lambda/2)u$ and [F5] give the shell norm $C\int_{\lambda/2}^{\lambda}d\omega/\omega=C\log2$. For each integer $j\ge0$ set $\lambda_j=\lambda2^{-j}$; these are all admissible cutoffs. The exact coherent overlap identity of [F3] gives $|\langle\Psi_{\lambda_j},\Psi_{\lambda_{j+1}}\rangle|=\exp(-C\log2/2)$. For every $|z|=1$, expanding the norm gives $\|\Psi_{\lambda_{j+1}}-z\Psi_{\lambda_j}\|^2\ge2(1-\exp(-C\log2/2))>0$. By the projective distance defined in [F3], adjacent rays are therefore separated by at least $\sqrt{2(1-\exp(-C\log2/2))}>0$. If the ray sequence converged, the triangle inequality for that metric would force the adjacent distances to tend to zero, a contradiction. The example does not use the supplier's weak-zero or no-strong-limit conclusions. No Born rule, actual hard-scattering dynamics, detector law, or empirical claim is part of this calculation. [given, F3, F5, F6, step 3.1, algebra] ∎
