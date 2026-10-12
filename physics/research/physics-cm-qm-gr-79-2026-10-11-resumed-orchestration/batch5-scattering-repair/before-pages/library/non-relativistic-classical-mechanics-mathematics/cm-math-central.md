---
page: cm-math-central
title: Cm Math Central
status: draft
items: [def-cm-central-force-trajectory, lem-cm-planar-polar-lift, lem-cm-second-order-oscillator-form, lem-cm-cross-product-triple-identity, lem-cm-oriented-orthonormal-triads, thm-cm-central-force-angular-momentum-conservation, thm-cm-central-force-polar-reduction, thm-cm-circular-orbit-and-radial-frequency, thm-cm-kepler-binet-equation, thm-cm-kepler-conic-and-eccentricity, def-cm-one-dimensional-action-variable, thm-cm-kepler-ellipse-geometry, thm-cm-kepler-orbit-period, thm-cm-action-variable-derivative, def-cm-scattering-data, thm-cm-scattering-turning-point-and-global-branches, thm-cm-scattering-asymptotic-velocities-and-impact-parameter, thm-cm-scattering-angle-advance, thm-cm-differential-cross-section-density, thm-cm-coulomb-scattering, thm-cm-rutherford-cross-section]
examples: []
requires: ["cm-math-balances","inverse-and-implicit-function-theorems","product-measures-and-the-fubini-tonelli-theorems","fubini-and-change-of-variables","linear-independence-bases-and-dimension","orthonormal-bases-parseval-and-fourier-series","the-fundamental-theorems-of-calculus","continuity-ivt-evt-and-uniform-continuity","fundamental-trigonometric-identities","inner-product-spaces-and-orthogonality","lebesgue-measure-on-euclidean-space","sine-cosine-and-the-definition-of-pi","the-real-gamma-and-beta-functions","further-trigonometric-identities-and-inverses"]
---

The central-force layer of the non-relativistic classical mechanics collection,
all of it mathematics: the reduction of the non-radial central-force equation to
polar data, the Kepler problem up to the determination of its conic, period and
one-dimensional action variable, and the finite-range and Coulomb scattering
layer with its cross-section densities. Every item on this page carries
`domain: mathematics` and depends only on mathematical suppliers; nothing here
asserts that the equations describe a physical interaction, that incident flux
is realized by counted events, or that any empirical conclusion follows. The
physical reading of masses, forces, energies and scattering measurements
remains with the consuming classical-mechanics pages.

The reduction layer begins with [[def-cm-central-force-trajectory]], which
defines the central-force equation $\mu r''=-(U'(|r|)/|r|)r$ for a curve
$r:I\to\mathbb R^3$ with values in $J_0\subseteq(0,\infty)$, together with the
angular momentum vector $j=\mu\,r\times r'$, the energy and the effective
potential $U^{\mathrm{eff}}_J$. [[lem-cm-planar-polar-lift]] supplies local
polar coordinates $\rho,\sigma$ of a planar curve as a twice differentiable
rotation, and [[thm-cm-central-force-angular-momentum-conservation]] proves
that $j$ is constant and orthogonal to $r$ and $r'$.
[[thm-cm-central-force-polar-reduction]] then derives the polar identities
$\rho^2\theta'=J/\mu$, the radial equation
$\mu\rho''=-(U^{\mathrm{eff}}_J)'(\rho)$ and the conserved energy
$E=\frac12\mu\rho'^2+U^{\mathrm{eff}}_J(\rho)$.
[[thm-cm-circular-orbit-and-radial-frequency]] characterises circular orbits
by $(U^{\mathrm{eff}}_J)'(r_0)=0$, exhibits them explicitly, and reduces the
linearised radial equation to the constant-coefficient oscillator, whose
solutions are classified by [[lem-cm-second-order-oscillator-form]]. The
Kepler specialization proceeds through [[thm-cm-kepler-binet-equation]], which
derives $u''+u=\mu\kappa/J^2$ for $u=1/\rho$ along the angular variable, and
[[thm-cm-kepler-conic-and-eccentricity]], which proves
$u=c(1+e\cos(\varphi-\theta_0))$ and the exact relation
$E=\frac{\mu\kappa^2}{2J^2}(e^2-1)$ connecting the sign of the energy with the
eccentricity. The algebraic prerequisites
[[lem-cm-cross-product-triple-identity]] and
[[lem-cm-oriented-orthonormal-triads]] are proved locally: the first is the
vector triple product identity, the second constructs an oriented orthonormal
triad over any unit vector and proves that no four orthonormal vectors exist
in $\mathbb R^3$, together with the orthonormal expansion.

The Kepler layer proper is [[thm-cm-kepler-ellipse-geometry]], which proves
that the subcritical conic is the ellipse with centre $(-ae,0)$ and semiaxes
$a=p/(1-e^2)$, $b=a\sqrt{1-e^2}$, with area
$\lambda_2(E_{\rm ell})=\pi ab=\frac12\int_0^{2\pi}\varrho(\varphi)^2\,
\mathrm d\varphi$; the item declares the Axiom of Countable Choice used by
its affine change-of-variables and polar-decomposition arguments.
[[thm-cm-kepler-orbit-period]] proves completeness of the negative-energy
orbit, the periodicity of the motion and the exact period value
$T=2\pi\mu ab/J=2\pi\sqrt{\mu/\kappa}\,a^{3/2}$, hence
$T^2=4\pi^2\mu a^3/\kappa$; it also declares the Axiom of Countable Choice.
The one-dimensional action layer is
[[def-cm-one-dimensional-action-variable]], which defines
$J_{\mathrm a}(E)=\frac1\pi\int_{a(E)}^{b(E)}\sqrt{2m(E-U(q))}\,\mathrm dq$
for a two-simple-turning-point family, and
[[thm-cm-action-variable-derivative]], which proves that the action variable
is $C^1$ with $J_{\mathrm a}'(E)=T(E)/(2\pi)$ by the inverse function theorem
at the turning points, a $C^3$ endpoint rescaling and differentiation under
the integral sign.

The scattering layer is built on [[def-cm-scattering-data]], which defines the
finite-range data, the incident flux measure $b\,\mathrm db\,\mathrm d\varphi$,
the solid-angle measure $\sin\theta\,\mathrm d\theta\,\mathrm d\varphi$,
deflection branches and their cross-section density
$b(\theta)/\!\left(\sin\theta\,|\theta'(b(\theta))|\right)$ as abstract
measures and functions; no counting of events and no empirical claim belongs
to the definition. [[thm-cm-scattering-turning-point-and-global-branches]]
proves the existence and uniqueness of the simple outer turning point and the
two global branches with free tails,
[[thm-cm-scattering-asymptotic-velocities-and-impact-parameter]] constructs
the asymptotic velocities $v_\pm$ and the impact-parameter identity
$J=\mu b|v_-|$, and [[thm-cm-scattering-angle-advance]] proves the advance
quadrature $\Delta=\int_{r_*}^\infty J\,\mathrm dr/\bigl(r^2\sqrt{2\mu(E-V(r))}\bigr)$
and the deflection relation modulo whole revolutions.
[[thm-cm-differential-cross-section-density]] performs the one-dimensional
substitution on a branch, giving the outgoing angular measure density
$b|b'|$ and the cross-section density $b|b'|/\sin\theta$, additively over
finitely many disjoint branches. [[thm-cm-coulomb-scattering]] specialises to
the repulsive Coulomb potential, where the effective potential is strictly
decreasing with a single simple turning point and the motion is global and
non-colliding with angle advance
$\Delta=\pi/2-\arctan(\kappa/(2Eb))$; finally
[[thm-cm-rutherford-cross-section]] proves the deflection map
$\theta_{\rm def}(b)=2\arctan(\kappa/(2Eb))$, its inverse
$b(\theta)=\frac{\kappa}{2E}\cot(\theta/2)$, the density
$(\kappa/4E)^2\csc^4(\theta/2)$ and the divergence of the total cross-section
at forward angles together with finiteness over every compact angular
interval. The companion page [[cm-math-central-examples]] records exact
finite checks of the action derivative, of the Kepler ellipse data and of the
Rutherford density, and a zero-angular-momentum collision counterexample that
marks the excluded radial degenerate case.
