---
id: ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin
kind: example
title: "The inverse-square field is divergence free, and its flux through the sphere bounding the translated unit ball vanishes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-divergence-and-curl-of-a-c1-vector-field, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-real-power-continuity-and-derivatives, lem-algebra-of-continuous-real-maps-on-a-space, thm-continuity-characterisations-top, def-vector-valued-functions-limits-and-continuity, thm-metric-regularity-hierarchy, def-jacobian-matrix-and-gradient, def-euclidean-inner-product, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-admissible-regular-parametrized-surface-patch, def-cross-product-in-r3, thm-continuous-on-a-rectangle-is-riemann-integrable, thm-riemann-fubini-on-product-rectangles, thm-ftc-second-part, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-parametrize-the-unit-circle, thm-quarter-turn-values-and-shift-formulas, def-metric-topology, def-metric-ball, lem-metrics-on-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3, Examples 6.78-6.80"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus, Example 4.4.8"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Example

On $U=\mathbb R^3\setminus\{0\}$ let
$$F(x,y,z)=\frac{(x,y,z)}{(x^2+y^2+z^2)^{3/2}}.$$
Then $\operatorname{div}F=0$ on $U$. Consequently the outward flux of $F$
through the sphere bounding the translated unit ball
$B=\{(x,y,z):(x^2+y^2+(z-2)^2)\le1\}$ is $0$.

## Facts & Assumptions

**Given:** The field $F$ on $U=\mathbb R^3\setminus\{0\}$, and the translated closed unit ball $B=\{(x,y,z):(x^2+y^2+(z-2)^2)\le1\}$.

[F1] The divergence of a field is the sum of its coordinate partial derivatives ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[L3] Products differentiate by the product rule ([[thm-algebra-of-derivatives]]).

[L4] Composites differentiate by the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[L6] For every real $\alpha$, the function $s\mapsto s^\alpha$ is continuous and differentiable on $(0,\infty)$, with derivative $\alpha s^{\alpha-1}$ ([[thm-real-power-continuity-and-derivatives]]).

[F2] The Jacobian matrix records the coordinate partial derivatives ([[def-jacobian-matrix-and-gradient]]).

[F3] $\|x\|_2=\sqrt{\langle x,x\rangle}$ ([[def-euclidean-inner-product]]).

[F4] Flux is computed against the oriented area vector of a patch ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F5] A subset of a metric space is open when every one of its points contains an open metric ball lying in the subset; the Euclidean metric on $\mathbb R^3$ is induced by $\|\cdot\|_2$ ([[def-metric-topology]], [[def-metric-ball]], [[lem-metrics-on-rn]]).

[L7] Each coordinate projection on Euclidean space is $1$-Lipschitz and therefore continuous; finite sums and products of continuous real-valued maps are continuous, as are their composites ([[def-vector-valued-functions-limits-and-continuity]], [[thm-metric-regularity-hierarchy]], [[lem-algebra-of-continuous-real-maps-on-a-space]], [[thm-continuity-characterisations-top]]).

[L8] A regular surface patch may identify parameters only on its boundary; its induced area vector gives the outward flux integral ([[def-admissible-regular-parametrized-surface-patch]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[L9] A continuous function on a closed rectangle is Riemann integrable and has the corresponding iterated integral; the integral of an integrable derivative is its endpoint increment ([[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[thm-riemann-fubini-on-product-rectangles]], [[thm-ftc-second-part]]).

[L10] Sine and cosine have the usual derivatives, $\sin^2u+\cos^2u=1$, $\sin u>0$ for $0<u<\pi$, cosine is strictly decreasing on $[0,\pi]$, and $\cos0=1$, $\cos\pi=-1$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L11] The unit-circle parametrization $\theta\mapsto(\cos\theta,\sin\theta)$ is injective on $[0,2\pi)$ ([[thm-sine-and-cosine-parametrize-the-unit-circle]]); the cross product has its coordinate determinant formula ([[def-cross-product-in-r3]]).

## Verification

**Proof technique:** direct.

1.1 Put $s(x,y,z)=x^2+y^2+z^2$, which is positive and continuous on $U$ by [L7]. The $i$th component of $F$ is $F_i=x_i s^{-3/2}$. By the product and chain rules [L3, L4], the positive-base power rule [L6], and the coordinate interpretation of partial derivatives [F2], every coordinate partial derivative is $$\partial_jF_i=\begin{cases}s^{-3/2}-3x_i^2s^{-5/2},&j=i,\\-3x_ix_js^{-5/2},&j\ne i.\end{cases}$$ The coordinate projections are continuous by [L7], so $s$ is continuous; because $s>0$ on $U$, [L6] and [L7] make every function in the displayed formulas continuous there. Hence $F$ is $C^1$ on $U$. [L3, L4, L6, L7, F2, F3, given]

2.1 Summing the three diagonal formulas of step 1.1 gives $\operatorname{div}F=3s^{-3/2}-3s\,s^{-5/2}=0$ on $U$ by [F1]. [step 1.1, F1]

2.2 Every point of $B$ has distance at least $1$ from the origin, so $B\subseteq U$. The set $U$ is open: if $p\in U$, then $\|p\|_2>0$ and the ball $B(p,\|p\|_2/2)$ cannot contain the deleted origin. Hence $F$ is continuous on a neighbourhood of the sphere. [step 1.1, F3, F5, given]

3.1 Parametrize $\partial B$ by $\psi(\phi,\theta)=(\sin\phi\cos\theta,\sin\phi\sin\theta,2+\cos\phi)$ on $D=[0,\pi]\times[0,2\pi]$. Direct differentiation and the cross-product formula give $\psi_\phi\times\psi_\theta=\sin\phi(\sin\phi\cos\theta,\sin\phi\sin\theta,\cos\phi)$. On $D^\circ$ this is nonzero and points outward. Strict monotonicity of cosine on $[0,\pi]$ and [L11] make the parametrization injective on its interior; its only repeated boundary images lie at the seam or poles. Thus $\psi$ is one regular patch covering the sphere in the sense of [L8]. [L8, L10, L11, step 2.2, construct]

4.1 On this patch, $|\psi|^2=5+4\cos\phi\ge1$ and $\psi\cdot(\psi_\phi\times\psi_\theta)=\sin\phi(1+2\cos\phi)$. Thus [F4] and [L9] give the outward flux as $2\pi\int_0^\pi (1+2\cos\phi)\sin\phi\,(5+4\cos\phi)^{-3/2}\,d\phi$. [F3, F4, L8, L9, L10, step 3.1]

5.1 Put $H(u)=\tfrac14\bigl(\sqrt{5+4u}+3/\sqrt{5+4u}\bigr)$ for $-1\le u\le1$. The power and chain rules give $H'(u)=(1+2u)(5+4u)^{-3/2}$, so the integrand in step 4.1 is $-\frac d{d\phi}H(\cos\phi)$. Since $H(1)=H(-1)=1$, the fundamental theorem in [L9] makes the flux $-2\pi[H(\cos\phi)]_0^\pi=0$. [L3, L4, L6, L9, L10, step 4.1] ∎

## Remarks

- The translation moves the sphere away from the singular origin. The direct patch calculation proves its zero flux without requiring an elementary-solid presentation of the ball.
