---
id: def-cm15-cross-section
kind: definition
title: "The differential and truncated total cross-sections of a deflection
  branch: densities, units, branch sums and the empirical qualifications of the
  uniform-incident reading"
status: published
origin: session
domain: physics
dependency_level: 16
deps:
  [
    def-cm15-asymptotic-data,
    def-cm-scattering-data,
    thm-cm-differential-cross-section-density,
    def-cm01-units,
    def-interval,
    def-ck-euclidean-maps-and-diffeomorphisms,
    def-continuity-real,
    thm-monotonicity-of-the-integral,
    def-countable-choice,
    def-integral-over-a-measurable-set
  ]
dependency_roles:
  def-cm15-asymptotic-data: formulation-prerequisite
  def-cm-scattering-data: mathematical-premise
  thm-cm-differential-cross-section-density: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-countable-choice: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Assuming countable choice for the Borel cross-section measures,
  The page's cross-section vocabulary for the uniform-incident preparation: the
  differential cross-section as the area-pushforward density of a deflection
  branch of a central scattering model, its units, the branch-sum convention,
  the truncated total cross-section over an angular window with finite or
  singular endpoints, and the empirical qualifications of the uniform-incident
  reading (adopted preparation, model rates not detections, finite samples,
  detector acceptance, no ideal total for a forward-divergent branch). The item
  defines model quantities; it asserts no observation, no measured value and no
  counting of detected particles."
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin),
        §6.4, Eqs. (347)-(351): the differential scattering cross-section
        $(b/\\sin\\theta)|\\mathrm db/\\mathrm d\\theta|$ as an effective target
        area per unit solid angle, and the total cross-section as its angular
        integral"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics
        (title page last edited September 1, 2026), §3.5, Eqs. (3.70)-(3.74):
        the differential cross-section as an averaged count density per unit
        incident area, the geometric relation $b|\\mathrm db/\\mathrm
        d\\theta|/\\sin\\theta$, the total cross-section and its small-angle
        divergence"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the Borel measures.

This item fixes the **cross-section** vocabulary of the central scattering
models of [[def-cm15-asymptotic-data]] relative to the uniform-incident
preparation of that definition.

**(i) The differential cross-section of a branch.** Let a central scattering
model be given, let $\theta:(a_1,a_2)\to(0,\pi)$ be a **deflection branch**
in the sense of [[def-cm-scattering-data]] — an interval $(a_1,a_2)$ of
impact parameters with $\theta$ of class $C^1$ and $\theta'(b)\ne0$ — and
suppose the branch **records the deflection** of the model: for every
$b\in(a_1,a_2)$ the scattering motion of the model with impact parameter $b$,
fixed energy $E$ and angular momentum magnitude $J(b)=\sqrt{2\mu E}\,b$ has scattering angle
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

**(ii) Branch sums.** Let $\mathcal B=\{(a_1^{(j)},a_2^{(j)},\theta_j)\}_{j=1}^N$
be a finite family of deflection branches of the same model whose incident
intervals $(a_1^{(j)},a_2^{(j)})$ are pairwise disjoint, with each branch
recording the model's deflections as in clause (i). Write
$A_j:=\theta_j((a_1^{(j)},a_2^{(j)}))$ for its image and
$b_j:=\theta_j^{-1}$ and
$q_j(\theta):=b_j(\theta)|b_j'(\theta)|/\sin\theta$ for its branch density
from clause (i), defined on $A_j$.
Angular images are not required to be disjoint. The **differential
cross-section of the model for this family** is, for
$\theta\in A:=\bigcup_{j=1}^N A_j$,
$$\frac{\mathrm d\sigma_{\mathcal B}}{\mathrm d\Omega}(\theta) :=\sum_{\{j:\,\theta\in A_j\}}q_j(\theta).$$
Thus $q_j$ is the contribution of branch $j$, and contributions add at every
angle belonging to more than one image. The total density for this family is
left undefined at angles belonging to no branch image. No claim is made that
the branch images cover $(0,\pi)$ or that the family includes every
deflection of the model.

**(iii) Cross-section measure and truncated totals.** For one branch $j$ with image $A_j$, and a Borel angular window $Y\subseteq A_j$, define
$$\sigma_j(Y):=\int_Yq_j(\theta)\,2\pi\sin\theta\,d\lambda_1(\theta)=\int_{Y\times(0,2\pi)}b_j(\theta)|b_j'(\theta)|\,d\lambda_2.$$
When only one branch is under discussion, write $\sigma(Y)$ for this
branch-specific measure.
For the finite family $\mathcal B$ of clause (ii), define
$$\sigma_{\mathcal B}(Y):=\sum_{j=1}^N\sigma_j(Y\cap A_j)=\int_{Y\cap A}\frac{\mathrm d\sigma_{\mathcal B}}{\mathrm d\Omega}(\theta)\,2\pi\sin\theta\,d\lambda_1(\theta)$$
for every Borel $Y\subseteq(0,\pi)$. These are nonnegative Lebesgue integrals over measurable sets in the sense of [[def-integral-over-a-measurable-set]], with extended value $+\infty$ allowed. The measure-level identity of [[thm-cm-differential-cross-section-density]] identifies each branch integral with the area of that branch's incident preimage; finite additivity gives the family formula, including where angular images overlap. On a compact interior interval each branch integral equals the ordinary Riemann integral; on an open interval its value is the monotone limit over compact interior truncations, equivalently the nonnegative improper integral when finite. General Borel windows use the Lebesgue integral, not a two-piece interval improper integral.
The **ideal total cross-section** of a branch is $\sigma_j(A_j)$; for a family it is $\sigma_{\mathcal B}(A)$. If infinite, there is no finite ideal total. Every compact interior angular window in a branch image has finite branch cross-section; more generally a cutoff whose incident preimage is bounded has finite cross-section. An arbitrary positive angular cutoff need not suffice for an arbitrary branch.

**(iv) The uniform-incident reading.** Under the uniform-incident preparation
of [[def-cm15-asymptotic-data]] clause (iv) with cutoff $b_{\max}$ and flux
$\Phi$, the model predicts the expected rate of scattered labels into a
Borel angular window $Y$ from one branch to be the flux times its cutoff
cross-section for the portion of that branch with $b<b_{\max}$. Writing
$T_j(b,\varphi)=(\theta_j(b),\varphi)$ on the branch rectangle and
$D_{\max}=(0,b_{\max})\times(0,2\pi)$, the branch cutoff measure is
$$\sigma_{j,b_{\max}}(Y):=\nu\!\left(T_j^{-1}(Y\times(0,2\pi))\cap ((a_1^{(j)},a_2^{(j)})\times(0,2\pi))\cap D_{\max}\right),$$
and its expected rate is $\Phi\sigma_{j,b_{\max}}(Y)$. For a finite family
with pairwise disjoint incident intervals, define
$\sigma_{\mathcal B,b_{\max}}(Y):=\sum_{j=1}^N\sigma_{j,b_{\max}}(Y)$;
the expected rate is $\Phi\sigma_{\mathcal B,b_{\max}}(Y)$, including when
the angular images overlap. If the entire incident preimage of $Y$ lies
below the cutoff, this sum is $\Phi\sigma_{\mathcal B}(Y)$. This is a
prediction of the model under the adopted preparation. In particular:

- $\sigma_j(Y)$ and $\sigma_{\mathcal B}(Y)$ are **not** probabilities per
  incident label, **not** counts of detected events, and **not** apparatus
  properties;
- a comparison with data requires a separately specified experiment: an
  apparatus model, a detector with finite angular resolution and acceptance,
  a sampling model and uncertainties, and a statistical analysis, none of
  which is supplied by this page;
- an ideal branch cross-section may diverge at a forward angle, while
  the adopted finite incident cutoff gives
  $\sigma_{\mathcal B,b_{\max}}(Y)\le\pi b_{\max}^{2}$ for every
  window $Y$, because the branch incident intervals are disjoint. Thus
  these cutoff rates are finite even if the ideal window cross-section
  is infinite. Without an incident cutoff, the rate $\Phi\sigma_{\mathcal B}(Y)$
  is finite exactly when that ideal window cross-section is finite.
  A finite measured rate constrains the model jointly with its incident
  preparation and apparatus acceptance;
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
