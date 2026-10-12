---
id: def-cm15-cross-section
kind: definition
title: "The differential and truncated total cross-sections of a deflection branch: densities, units, branch sums and the empirical qualifications of the uniform-incident reading"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [def-cm15-asymptotic-data,
       def-cm-scattering-data,
       thm-cm-differential-cross-section-density,
       def-cm01-units,
       def-interval,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-continuity-real,
       def-improper-integral-at-a-finite-endpoint,
       def-mixed-improper-integral,
       thm-monotonicity-of-the-integral]
dependency_roles:
  def-cm15-asymptotic-data: formulation-prerequisite
  def-cm-scattering-data: mathematical-premise
  thm-cm-differential-cross-section-density: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-continuity-real: mathematical-premise
  def-improper-integral-at-a-finite-endpoint: mathematical-premise
  def-mixed-improper-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The page's cross-section vocabulary for the uniform-incident preparation: the differential cross-section as the area-pushforward density of a deflection branch of a central scattering model, its units, the branch-sum convention, the truncated total cross-section over an angular window with finite or singular endpoints, and the empirical qualifications of the uniform-incident reading (adopted preparation, model rates not detections, finite samples, detector acceptance, no ideal total for a forward-divergent branch). The item defines model quantities; it asserts no observation, no measured value and no counting of detected particles."
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.4, Eqs. (347)-(351): the differential scattering cross-section $(b/\\sin\\theta)|\\mathrm db/\\mathrm d\\theta|$ as an effective target area per unit solid angle, and the total cross-section as its angular integral"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §3.5, Eqs. (3.70)-(3.74): the differential cross-section as an averaged count density per unit incident area, the geometric relation $b|\\mathrm db/\\mathrm d\\theta|/\\sin\\theta$, the total cross-section and its small-angle divergence"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Definition

This item fixes the **cross-section** vocabulary of the central scattering
models of [[def-cm15-asymptotic-data]] relative to the uniform-incident
preparation of that definition.

**(i) The differential cross-section of a branch.** Let a central scattering
model be given, let $\theta:(a_1,a_2)\to(0,\pi)$ be a **deflection branch**
in the sense of [[def-cm-scattering-data]] — an interval $(a_1,a_2)$ of
impact parameters with $\theta$ of class $C^1$ and $\theta'(b)\ne0$ — and
suppose the branch **records the deflection** of the model: for every
$b\in(a_1,a_2)$ the scattering motion of the model with impact parameter $b$,
energy $E$ and angular momentum $J$ has scattering angle
$\theta_{\mathrm{s}}=\theta(b)$. Write
$(a_1,a_2)\ni b\mapsto\theta\in(\theta_1,\theta_2)$ for this bijection and
$b(\theta):=\theta^{-1}(\theta)$ for its inverse
([[def-cm-scattering-data]]). The **differential cross-section of the
branch** is the function
$$\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta):=\frac{b(\theta)\,\bigl|b'(\theta)\bigr|}{\sin\theta} =\frac{b(\theta)}{\sin\theta\,\bigl|\theta'\bigl(b(\theta)\bigr)\bigr|}\qquad(\theta_1<\theta<\theta_2),$$
the cross-section density of [[def-cm-scattering-data]]. Its dimension is
$[\mathrm d\sigma/\mathrm d\Omega]=\ell^2$ (solid angle dimensionless in the
chosen convention, [[def-cm01-units]]), and one says "per steradian" for the
unit of solid angle.

**(ii) Branch sums.** If finitely many deflection branches of the same model
have pairwise disjoint image intervals $(\theta_1^{(j)},\theta_2^{(j)})$ that
do not overlap and each records the model's deflections on its interval, the
**differential cross-section of the model** on the union of the images is the
sum of the branch densities, and it is left undefined at angles belonging to
no branch image. No claim is made that the branch images cover $(0,\pi)$ or
that the branch functions are reverse images of a single function.

**(iii) Truncated total cross-sections.** For an angular window
$Y\subseteq(0,\pi)$ the **solid-angle measure** of the branch is
$$\sigma(Y):=\int_Y\frac{\mathrm d\sigma}{\mathrm d\Omega}(\theta)\,2\pi\sin\theta\,\mathrm d\theta,$$
an ordinary Riemann integral when $Y$ is a compact interval contained in
$(\theta_1,\theta_2)$ and, when $Y$ has an endpoint at $\theta_1$ or
$\theta_2$ where the integrand is unbounded, the improper integral at that
endpoint in the sense of [[def-improper-integral-at-a-finite-endpoint]]
(two-sided improper integrals are those of
[[def-mixed-improper-integral]], with no cancellation between the sides). For
Borel windows the integral is that of [[def-mixed-improper-integral]] applied
to the two one-ended pieces. The **ideal total cross-section** of the branch
is $\sigma_{\mathrm{tot}}:=\sigma\bigl((\theta_1,\theta_2)\bigr)$ when it
converges; when it diverges the model simply has no ideal total on that
branch, and every angular window with a positive inner cutoff defines a
finite **truncated total cross-section**. By
[[thm-monotonicity-of-the-integral]] the truncated integral over
$(\theta_1,\theta)$ is nondecreasing in $\theta$, so a truncation can only be
finite or diverge, and no value is assigned at a divergence.

**(iv) The uniform-incident reading.** Under the uniform-incident preparation
of [[def-cm15-asymptotic-data]] clause (iv) with cutoff $b_{\max}$ and flux
$\Phi$, the model predicts the expected rate of scattered labels into an
angular window $Y$ to be $\Phi\,\sigma(Y)$, where the window is the image of
the interval of impact parameters feeding it. This is a prediction of the
model under the adopted preparation. In particular:

- $\sigma(Y)$ is **not** a probability per incident label, **not** a count of
  detected events, and **not** a property of any apparatus;
- a comparison with data requires a separately specified experiment: an
  apparatus model, a detector with finite angular resolution and acceptance,
  a sampling model and uncertainties, and a statistical analysis, none of
  which is supplied by this page;
- for a branch whose ideal total diverges at a forward angle, only truncated
  windows are defined, and a finite measured rate constrains the model only
  jointly with the apparatus acceptance;
- finite samples fluctuate: an observed angular distribution can miss a
  branch's features with positive probability under ordinary sampling models,
  and agreement is evidence about the model-plus-apparatus assumptions, not a
  proof of the model.

**(v) Status and exclusions.** The branch hypothesis includes
$\theta'\ne0$: the definition excludes angles at which
$\theta'(b)=0$ (rainbow-type stationary deflections) and leaves them to
separate limiting measures. It also excludes, at the level of this page,
friction and tangential contact laws, attractive capture, screening,
radiation, relativistic and quantum modifications, and any identification of
the model parameters with measured electromagnetic quantities; those require
separate models or cross-framework items. The functions $\theta$, $b$ and the
data $E$, $J$, $u$, $b_{\max}$, $\Phi$ are model data
([[def-cm15-asymptotic-data]] clause (vi)).

**Why the objects are defined.** The inverse $b$ is $C^1$ with
$b'(\theta)=1/\theta'(b(\theta))$ because a $C^1$ function on an interval with
nowhere vanishing derivative is strictly monotone and has a differentiable
inverse ([[def-cm-scattering-data]]); $\sin\theta>0$ on $(0,\pi)$; hence the
denominators do not vanish and the density is finite at every interior point
of the branch image. The pushforward identity that justifies the reading
"density carried by the branch" is
[[thm-cm-differential-cross-section-density]], a theorem of this page's
mathematical suppliers.
