---
id: def-cm-scattering-data
kind: definition
title: "Scattering data: the incident flux measure, the solid-angle element,
  deflection branches and the cross-section density"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps:
  [
    def-interval,
    def-ck-euclidean-maps-and-diffeomorphisms,
    def-continuity-real,
    def-integral-over-a-measurable-set,
    def-borel-and-lebesgue-measurable-function-on-rn,
    thm-indefinite-integral-of-a-nonnegative-function-is-a-measure,
    thm-sine-and-cosine-derivatives,
    thm-sine-cosine-signs-monotonicity-and-ranges,
    thm-sine-cosine-zero-sets-and-fundamental-period,
    thm-continuous-preimages-of-borel-sets-are-borel,
    def-sine-and-cosine-by-power-series,
    thm-derivative-of-an-inverse,
    def-derivative,
    def-limit-point-r,
    def-countable-choice,
    cor-mean-value-theorem
  ]
dependency_roles:
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-continuity-real: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-borel-and-lebesgue-measurable-function-on-rn: mathematical-premise
  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  def-derivative: mathematical-premise
  def-limit-point-r: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin),
        §6.4 Scattering in the Center of Mass Frame, Eqs. (340)-(367): impact
        parameter, turning-point quadrature, the annular incident area and
        outgoing solid angle"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics,
        §3.5, Eqs. (3.66)-(3.72): impact parameter, scattering angle,
        uniform-beam counting and the geometric cross-section relation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the Borel/Lebesgue measure foundation below.

**Data.** Let $\mu>0$, let $U:(0,\infty)\to\mathbb R$ be of class $C^2$
([[def-ck-euclidean-maps-and-diffeomorphisms]]), let $R>0$ satisfy $U(r)=0$
for every $r\ge R$ (a **finite-range potential**), and let $E>0$ and $J>0$ be
reals. Write

$$V(r):=U(r)+\frac{J^2}{2\mu r^2}\qquad(r>0).$$

**Incident flux measure.** Let $\nu$ be the Borel measure on the open rectangle
$(0,\infty)\times(0,2\pi)$ given by the density $b$ against Lebesgue measure
$\lambda_2$,

$$\nu(A):=\int_A b\,d\lambda_2(b,\varphi)\qquad(A\subseteq(0,\infty)\times(0,2\pi)\ \text{Borel}),$$

the integral being that of [[def-integral-over-a-measurable-set]]; the
nonnegative Borel function $(b,\varphi)\mapsto b$ defines a measure by
[[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]
([[def-borel-and-lebesgue-measurable-function-on-rn]]). In the model this
measure records a uniform incident beam: an annulus of impact parameters
$[b_1,b_2)$ contributes $\pi(b_2^2-b_1^2)$ over the full azimuth range, or
$\tfrac12(b_2^2-b_1^2)$ per unit azimuth.

**Solid-angle element.** Let $\Omega$ be the Borel measure on
$(0,\pi)\times(0,2\pi)$ with density $\sin$ against $\lambda_2$,

$$\Omega(B):=\int_B\sin\theta\,d\lambda_2(\theta,\varphi)\qquad(B\subseteq(0,\pi)\times(0,2\pi)\ \text{Borel}),$$

where $\sin$ is the function of [[def-sine-and-cosine-by-power-series]].
It is continuous, being differentiable by [[thm-sine-and-cosine-derivatives]].
Also $\sin0=\sin\pi=0$ by [[thm-sine-cosine-zero-sets-and-fundamental-period]];
strict increase on $[0,\pi/2]$ and strict decrease on $[\pi/2,\pi]$
([[thm-sine-cosine-signs-monotonicity-and-ranges]]) give $\sin\theta>0$ for
$0<\theta<\pi$. Thus $(\theta,\varphi)\mapsto\sin\theta$ is a nonnegative
Borel function (continuous preimages of Borel sets are Borel,
[[thm-continuous-preimages-of-borel-sets-are-borel]]), and
[[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]
establishes that $\Omega$ is a measure. This
is the standard solid-angle element written $\sin\theta\,d\theta\,d\varphi$
(the surface measure of the unit sphere in spherical coordinates, restricted
to the open chart).

**Deflection branch.** A **deflection branch** is an interval
$(a_1,a_2)\subseteq(0,\infty)$ with at least two points together with a
function $\theta:(a_1,a_2)\to(0,\pi)$ that is of class $C^1$ and satisfies
$\theta'(b)\ne0$ for every $b\in(a_1,a_2)$. Such a $\theta$ is strictly
monotone (the continuous nonvanishing derivative has constant sign, and [[cor-mean-value-theorem]] gives strict monotonicity) and its image is an interval with endpoints $\theta_1<\theta_2$
([[def-interval]]); its inverse $b:(\theta_1,\theta_2)\to(a_1,a_2)$ is
differentiable with $b'(\theta)=1/\theta'(b(\theta))$, by the
derivative-of-an-inverse theorem [[thm-derivative-of-an-inverse]] applied to
the continuous injective $\theta$ (every point of $(a_1,a_2)$ is a limit point
of it, [[def-limit-point-r]], [[def-derivative]]).

**Cross-section density.** The **cross-section density of the branch** is the
function

$$\frac{d\sigma}{d\Omega}(\theta):=\frac{b(\theta)}{\sin\theta\,\bigl|\theta'\bigl(b(\theta)\bigr)\bigr|} \qquad(\theta_1<\theta<\theta_2).$$

**Mathematical status.** The measures, branches and density are abstract data
independent of the finite-range trajectory data $(\mu,U,R,E,J)$. A branch is not asserted to arise from any
trajectory; the scattering theorems of this page identify the deflection
angle computed from the central-force equation with the values of such a
function under their hypotheses, and they compute the pushforward of $\nu$ under the induced map. No counting of
detected particles, and no empirical claim, is part of this definition.
