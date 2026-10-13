---
id: pthm-gr-schwarzschild-circular-orbit-predictions
kind: physics-theorem
title: "Restricted geodesic predictions of the Schwarzschild vacuum model:
  circular free-fall orbits, the stability threshold and the photon sphere"
status: published
origin: session
domain: physics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - pthm-gr-schwarzschild-vacuum-model
  - def-gr-schwarzschild-exterior-model
  - lem-gr-schwarzschild-timelike-geodesic-reduction
  - lem-gr-schwarzschild-circular-orbits-and-photon-sphere
  - lem-gr-schwarzschild-static-congruence-and-clock-rates
  - post-gr-ideal-clocks-and-free-fall
  - def-gr-observer-relative-energy-and-momentum
  - def-gr-observer-and-rest-space
  - def-gr-observer-congruence-and-adapted-charts
  - def-gr-smooth-lorentzian-objects
  - def-gr-metric-selected-connection
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-geodesic-of-an-affine-connection
  - def-gr-timelike-worldline-and-proper-time
  - lem-gr-proper-time-reparametrization-and-four-velocity
  - def-causal-classification-of-lorentz-vectors
  - def-derivative
  - thm-chain-rule
  - def-rational-power
  - pthm-gr-free-fall-worldline-is-determined-by-initial-data
  - thm-gr-local-geodesics-and-exponential-map
dependency_roles:
  pthm-gr-schwarzschild-vacuum-model: physical-result
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-timelike-geodesic-reduction: mathematical-premise
  lem-gr-schwarzschild-circular-orbits-and-photon-sphere: mathematical-premise
  lem-gr-schwarzschild-static-congruence-and-clock-rates: mathematical-premise
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  def-gr-observer-relative-energy-and-momentum: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-rational-power: mathematical-premise
  pthm-gr-free-fall-worldline-is-determined-by-initial-data: physical-result
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
physical_scope: "Conditional model predictions of the adopted Schwarzschild
  exterior vacuum model for ideal test bodies and ideal light rays: for every
  radius r_0 > 3s/2 the model assigns a circular free-fall worldline to an ideal
  freely falling massive test body with coordinate angular velocity (dphi/dt)^2
  = G_N m_*/r_0^3; there is no circular free-fall worldline with s < r_0 <=
  3s/2; the effective radial potential has a strict local minimum at the
  circular-orbit value exactly for r > 3s and a strict local maximum for 3s/2 <
  r < 3s; and the model admits an ideal light ray on the null circular geodesic
  at r = 3s/2. The statements are exact consequences of the model metric and the
  free-fall and light-ray postulates in the test-field idealization; they
  exclude nonlinear stability, radiation reaction, self-force, finite-size
  effects, orbit evolution and any observation or measurement, and the stability
  claim is the sign of the second derivative of the stated potential only."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.47)-(7.50): the effective
        potential for Schwarzschild geodesics, the circular orbits and the
        innermost stable circular orbit at r = 6GM, printed pp. 174-177 (PDF pp.
        181-184)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos,
        Michaelmas 2019), sections 1.3.1-1.3.2: the geodesic equations for
        massive particles in the Schwarzschild background, circular orbits, the
        innermost stable circular orbit at r = 6GM and the photon sphere,
        printed pp. 29-33 (PDF pp. 36-40); section 6.1: the same results in the
        black-hole chapter, printed pp. 232-235 (PDF pp. 239-242)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong\
        /gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the Schwarzschild exterior vacuum model of
[[pthm-gr-schwarzschild-vacuum-model]]: the exterior datum $(M,g,N)$ of mass
parameter $m_*>0$ with Schwarzschild radius $s=2G_Nm_*/c^2$ and $f=1-s/r$
([[def-gr-schwarzschild-exterior-model]]), its metric-selected connection
$\nabla$ ([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), and the
free-fall and light-ray rules of [[post-gr-ideal-clocks-and-free-fall]] (ideal
freely falling massive test bodies follow future timelike geodesics with
$g(U,U)=-c^2$ and proper time as affine parameter; ideal light rays are future
null geodesics). Then:

**(a) Circular free-fall orbits.** For every $r_0>\frac{3s}{2}$ the model
assigns to an ideal freely falling massive test body with the corresponding
initial event and four-velocity a physical history that is a restriction of
the circular timelike geodesic $\gamma:\mathbb R\to M$ of radius $r_0$ in
[[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] clause (a), with
$e,\ell$ as there. This all-real mathematical geodesic is the unique maximal
continuation of that history; the physical domain need not be maximal.
On the physical history, the tangent is future timelike with $g(\gamma',\gamma')=-c^2$
and proper time affine parameter, and its coordinate angular velocity satisfies

$$\Bigl(\frac{d\varphi}{dt}\Bigr)^2=\frac{G_Nm_*}{r_0^3}.$$

**(b) No circular free-fall orbit below the threshold.** If a future timelike
geodesic of the datum, parametrized by proper time, has $r\equiv r_0>s$
constant on an interval of positive length, then $r_0>\frac{3s}{2}$,
regardless of angular orientation; in
particular no ideal freely falling massive test body is assigned a circular
worldline of radius $s<r_0\le\frac{3s}{2}$.

**(c) Stability threshold of the restricted radial potential.** For each
$r>\frac{3s}{2}$ set $\ell_r^2=c^2sr^2/(2r-3s)$. Differentiate
$V_{\ell_r}(x)=\frac12 f(x)(c^2+\ell_r^2/x^2)$ with respect to $x$ while
holding $\ell_r$ fixed, then evaluate at $x=r$. The result is

$$V_{\ell_r}''(r)=\frac{c^2s(r-3s)}{r^3(2r-3s)},\qquad r>\frac{3s}{2},$$

so the potential has a strict local minimum at the circular-orbit value
exactly for $r>3s$ and a strict local maximum exactly for
$\frac{3s}{2}<r<3s$; the radius $r=3s$ is the innermost stable circular orbit
radius of the restricted model in this potential sense.

**(d) Photon sphere as an ideal light orbit.** The null circular geodesic of
[[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] clause (d) at
$r=\frac{3s}{2}$ is the all-real maximal mathematical continuation for an ideal light ray
with the corresponding initial event and future tangent. The ray's physical
history is a restriction to its actual affine-parameter domain; along it

$$\Bigl(\frac{d\varphi}{dt}\Bigr)^2=\frac{4c^2}{27s^2} .$$

**(e) Scope.** All statements are conditional model predictions for ideal
test bodies and ideal rays in the exterior domain: no self-force, radiation
reaction, finite-size coupling, nonlinear orbital stability, orbit decay or
evolution, no interior or horizon region and no observation enters. The
stability claim of (c) is the sign of the second derivative of the stated
potential; the circular worldlines of (a) are geodesics of the model, and the
model assigns their restrictions to freely falling bodies through the adopted
free-fall rule.

## Facts & Assumptions

**Given:** The Schwarzschild exterior datum with $m_*>0$, $s=2G_Nm_*/c^2$ and $f=1-s/r$, its connection $\nabla$, the adopted free-fall and light-ray rules, and the geodesic lemmas of the page.

[A1] An ideal freely falling massive test body has as worldline a future timelike geodesic with $g(U,U)=-c^2$, proper time an affine parameter, and the worldline is determined by its release event and four-velocity; an ideal light ray is a future null geodesic ([[post-gr-ideal-clocks-and-free-fall]] clauses (ii)-(iii), [[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]]).

[A2] The model satisfies the field law with $T=0$ and $\Lambda=0$ and its spacetime is the smooth time-oriented Lorentzian four-manifold of the exterior datum ([[pthm-gr-schwarzschild-vacuum-model]] clause (a), [[def-gr-schwarzschild-exterior-model]], [[def-gr-smooth-lorentzian-objects]]).

[L1] For every $r_0>\frac{3s}{2}$ the curve of clause (a) of [[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] is a future timelike geodesic with $g(\gamma',\gamma')=-c^2$, conserved quantities $e,\ell$ of [[lem-gr-schwarzschild-timelike-geodesic-reduction]], and coordinate angular velocity $(d\varphi/dt)^2=G_Nm_*/r_0^3$; conversely any future timelike geodesic parametrized by proper time with constant radius $r_0>s$ on an interval of positive length satisfies $r_0>\frac{3s}{2}$, and in the equatorial case it also satisfies $\ell^2=c^2sr_0^2/(2r_0-3s)$; and, after differentiating at fixed $\ell$ and evaluating at $r>\frac{3s}{2}$ with $\ell^2=c^2sr^2/(2r-3s)$, one has $V_\ell''(r)=c^2s(r-3s)/(r^3(2r-3s))$ ([[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] clauses (a)-(c)).

[L2] For $\ell\ne0$ the curve with $r=\frac{3s}{2}$ and $x^0_0,\varphi_0$ as in clause (d) is a future null geodesic with conserved quantities $e_0,\ell$ and $(d\varphi/dt)^2=4c^2/(27s^2)$ ([[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] clause (d), [[def-geodesic-of-an-affine-connection]], [[def-causal-classification-of-lorentz-vectors]]).

[L3] The static congruence of the model is $n=f^{-1/2}\partial_0$ with $f=1-s/r>0$, and it is not geodesic; the coordinate $t$ is the coordinate time $x^0/c$ of the datum ([[lem-gr-schwarzschild-static-congruence-and-clock-rates]] clauses (a) and (e), [[def-gr-schwarzschild-exterior-model]] clause (d), [[def-gr-observer-congruence-and-adapted-charts]]).

[L4] The statements of the geodesic lemmas are identities of the smooth exterior datum and involve no matter model, no field equation and no observation ([[lem-gr-schwarzschild-timelike-geodesic-reduction]] clause (d), [[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] clause (e), [[def-rational-power]], [[thm-chain-rule]], [[def-derivative]]).

## Proof

**Proof technique:** apply the free-fall and light-ray rules to the exact geodesic lemmas of the page and read off the angular-velocity and potential statements.

1.1 (Circular free-fall orbits.) By [A2] the adopted model satisfies the field law with $T=0$ and $\Lambda=0$ and its spacetime is the exterior datum. Let $r_0>\frac{3s}{2}$ and let $\gamma$ be the curve of [L1]; by [L1] it is a future timelike geodesic with $g(\gamma',\gamma')=-c^2$, so by [A1] its restriction to the actual domain of an ideal freely falling massive test body with the same initial event and tangent is the body's physical history. The all-real curve is its unique maximal mathematical continuation by [[pthm-gr-free-fall-worldline-is-determined-by-initial-data]]; proper time is an affine parameter, and [L1] gives $(d\varphi/dt)^2=G_Nm_*/r_0^3$ with $t=x^0/c$ as in [L3]. This proves (a). [A1, A2, L1, L3, algebra]

1.2 (No circular orbit below the threshold.) Let $\gamma$ be any future timelike geodesic parametrized by proper time with $r\equiv r_0>s$ on an interval of positive length; by [L1] it satisfies $r_0>\frac{3s}{2}$ without an angular-orientation restriction. Hence no such geodesic exists for $s<r_0\le\frac{3s}{2}$, and by [A1] the model assigns no circular worldline of those radii to an ideal freely falling massive test body. This proves (b). [A1, L1, algebra]

1.3 (Stability threshold.) Fix $r>3s/2$ and $\ell^2=c^2sr^2/(2r-3s)$, held constant during differentiation. By [L1] the second derivative of $V_\ell$ at this circular-orbit value is $V_\ell''(r)=c^2s(r-3s)/(r^3(2r-3s))$ for $r>\frac{3s}{2}$; its sign is the sign of $r-3s$, so $V_\ell''(r)>0$ exactly for $r>3s$ and $V_\ell''(r)<0$ exactly for $\frac{3s}{2}<r<3s$, with $V_\ell''(3s)=0$. The strict-extremum assertions, including the absence of either extremum at $3s$, follow from clause (c) of [[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]] in [L1], whose endpoint proof factors $V_\ell'(x)=c^2s(x-3s)^2/(2x^4)$ at $\ell^2=3c^2s^2$. This proves (c) in its stated radial-potential sense. [L1, algebra]

1.4 (Photon sphere.) The curve of [L2] is an all-real future null geodesic. By [A1] a physical ideal ray with its initial event and tangent is a geodesic on its actual affine-parameter interval. The geodesic uniqueness theorem [[thm-gr-local-geodesics-and-exponential-map]] identifies it with a restriction of the displayed all-real curve, which is therefore its unique maximal mathematical continuation. Along that restriction, [L2] gives $(d\varphi/dt)^2=4c^2/(27s^2)$; this is (d). [A1, L2, algebra]

2.1 (Conclusion and status.) Steps 1.1-1.4 establish (a)-(d) as consequences of the model, the adopted coupling rules and the exact geodesic lemmas; clause (e) records the test-field idealization, the purely radial-potential sense of the stability claim and the exclusion of observations, nonlinear stability and radiation effects. [step 1.1, step 1.2, step 1.3, step 1.4, L4, given] ∎

## Remarks

- **Geodesics versus observed orbits.** A circular geodesic is a property of the smooth model; whether any astronomical body follows one depends on the model's applicability, on matter couplings and on observational modelling, none of which is asserted here. The Kepler-like law (a) uses the model's parameter $m_*$ and is not a statement about a measured mass.

- **What stability means here.** Claim (c) is the sign of $V_\ell''$ at the circular-orbit value, the standard linear potential test; it is not a nonlinear or Lyapunov stability theorem, and the potential itself is a function of the reduced one-dimensional problem, not a physical energy of the model.
