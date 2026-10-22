---
id: lem-emx-unit-sphere-radial-flux
kind: lemma
title: Unit-sphere area form and outward radial flux
status: draft
origin: session
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-admissible-regular-parametrized-surface-patch
  - def-oriented-unit-normal-and-flux-of-a-surface-patch
  - def-cross-product-in-r3
  - def-euclidean-inner-product
  - def-smooth-differential-k-form
  - thm-heine-borel-rn
  - prop-integration-over-an-oriented-embedded-submanifold
  - prop-integration-of-top-forms-by-finite-parametrizations
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-sine-and-cosine-derivatives
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-quarter-turn-values-and-shift-formulas
  - thm-jordan-fubini-by-sections
  - thm-ftc-second-part
dependency_roles:
  def-admissible-regular-parametrized-surface-patch: mathematical-premise
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  prop-integration-over-an-oriented-embedded-submanifold: mathematical-premise
  prop-integration-of-top-forms-by-finite-parametrizations: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-jordan-fubini-by-sections: mathematical-premise
  thm-ftc-second-part: mathematical-premise
physical_scope: Pure mathematical surface integral; no physical premise or claim.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: University of Toronto MAT237 notes, Section 5.3, Surface Integrals
      url: https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html
      locator: Section 5.3, “Surface Area and Surface Integrals,” Example 1 and the orientation discussion; the surface-flux parameterization formula and endpoint/seam conventions.
    - title: Michael E. Taylor, Introduction to Analysis in Several Variables (Advanced Calculus), complete text
      url: https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf
      locator: §3.2, printed pp. 122–125 (PDF pp. 134–137), the cross-product surface density and unit-sphere area calculation; the local proof independently computes the oriented radial flux.
proof_strategy: direct
---

## Statement

Let $S^2=\{p\in\mathbb R^3:\|p\|_2=1\}$ have its standard embedded smooth structure and outward orientation, let $X(p)=p$, and let $\omega$ be its outward area form, $\omega_p(v,w)=p\cdot(v\times w)$ for tangent vectors $v,w\in T_pS^2$. Put $D=[0,\pi]\times[0,2\pi]$ and
$$
\Phi(\theta,\phi)=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta).
$$
The map $\Phi$ presents $S^2$ as a regular parametrized surface patch, with boundary seam and poles allowed by the patch convention. The outward flux of $X$ is
$$
\int_D (X\circ\Phi)\cdot(\Phi_\theta\times\Phi_\phi)\,d\theta\,d\phi=4\pi.
$$
Equivalently, the oriented top-form integral is $\int_{S^2}\omega=4\pi$.

## Statement references

[[def-admissible-regular-parametrized-surface-patch]]

[[def-oriented-unit-normal-and-flux-of-a-surface-patch]]

## Facts & Assumptions

**Given:** The Euclidean space $\mathbb R^3$, the rectangle $D$, the map $\Phi$, the unit sphere $S^2$, and the radial vector field $X$ from the Statement.

[F1] [[def-admissible-regular-parametrized-surface-patch]] requires a compact Jordan parameter region, a $C^1$ map on a neighborhood, nonzero parameter cross product in the interior, and no repeated image of distinct interior points; boundary seam identifications and rank failures are allowed.

[F2] [[def-oriented-unit-normal-and-flux-of-a-surface-patch]] defines flux in the induced orientation by $\int_D(X\circ\Phi)\cdot(\Phi_\theta\times\Phi_\phi)\,d\theta\,d\phi$.

[F3] [[def-cross-product-in-r3]] gives the coordinate formula for $u\times v$; [[def-euclidean-inner-product]] fixes the dot product and norm.

[F4] [[def-smooth-differential-k-form]] defines smooth forms; [[thm-heine-borel-rn]] makes $S^2$ compact; and [[prop-integration-over-an-oriented-embedded-submanifold]] defines the integral of a compactly supported form on the oriented sphere through its embedding.

[F5] [[prop-integration-of-top-forms-by-finite-parametrizations]] computes a compactly supported top-form integral from finitely many orientation-preserving charts with disjoint interiors and closures covering the support.

[F6] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]] gives a smooth local inverse where the derivative is invertible.

[F7] [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-and-cosine-parametrize-the-unit-circle]], and [[thm-quarter-turn-values-and-shift-formulas]] give the derivative, identity, range, sign, parametrization, and endpoint facts for sine and cosine used below.

[F8] [[thm-jordan-fubini-by-sections]] evaluates the continuous integrand on the rectangle as an iterated Riemann integral, and [[thm-ftc-second-part]] evaluates the two one-dimensional integrals.

## Proof

1.1 The rectangle $D$ is a compact Jordan parameter region, and $\Phi$ is smooth on all of $\mathbb R^2$. Every point of $S^2$ is in its image: choose $\theta\in[0,\pi]$ with $\cos\theta=p_3$; when $\sin\theta>0$, the pair $(p_1/\sin\theta,p_2/\sin\theta)$ is a unit-circle point and [F7] supplies $\phi\in[0,2\pi]$, while at a pole any $\phi$ works. More precisely, the interior image is $W=S^2\setminus\Phi(\partial D)$: for every point not on the poles or the longitude seam, the latitude is unique by strict decrease of cosine on $(0,\pi)$, and the longitude is unique by the bijection in [F7]. Direct differentiation gives $\Phi_\theta=(\cos\theta\cos\phi,\cos\theta\sin\phi,-\sin\theta)$ and $\Phi_\phi=(-\sin\theta\sin\phi,\sin\theta\cos\phi,0)$; substituting into the coordinate cross-product formula [F3] yields $\Phi_\theta\times\Phi_\phi=(\sin^2\theta\cos\phi,\sin^2\theta\sin\phi,\sin\theta\cos\theta)=\sin\theta\,\Phi$. [F7] makes this nonzero for $0<\theta<\pi$, and its direction is outward because $\Phi$ is the unit radial vector. In any smooth chart on $S^2$, the coordinate derivative of $\Phi$ is therefore invertible; [F6] gives a smooth local inverse. The bijection onto $W$ and these local inverses make $\Phi|_{D^\circ}$ an orientation-preserving diffeomorphism onto the open set $W$. Thus [F1] applies, including the permitted seam and pole degeneracy on $\partial D$. [F1, F3, F6, F7, given, algebra]

2.1 By [F2] and step 1.1, the flux integrand is $\Phi\cdot(\sin\theta\,\Phi)=\sin\theta$. The same coefficient is $\omega(\Phi_\theta,\Phi_\phi)$; [F4] defines its oriented-sphere integral and ensures compact support, and [F5] identifies that integral with the chart integral on $D^\circ=(0,\pi)\times(0,2\pi)$; the boundary contributes zero by [F1]. Therefore [F8] gives $\int_D (X\circ\Phi)\cdot(\Phi_\theta\times\Phi_\phi)\,d\theta\,d\phi=\int_0^{2\pi}\!\int_0^\pi\sin\theta\,d\theta\,d\phi=2\pi\bigl(-\cos\theta\bigr)\big|_0^\pi=4\pi$. The vanishing cross product at the poles and the repeated longitude seam occur only on $\partial D$, which has two-dimensional content zero under [F1]. [F1, F2, F4, F5, F7, F8, step 1.1, algebra] ∎
