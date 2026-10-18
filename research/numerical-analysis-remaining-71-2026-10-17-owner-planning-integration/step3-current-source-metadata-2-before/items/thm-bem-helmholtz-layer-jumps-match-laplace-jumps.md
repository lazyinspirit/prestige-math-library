---
id: thm-bem-helmholtz-layer-jumps-match-laplace-jumps
kind: theorem
title: The Helmholtz single-layer and double-layer traces have the Laplace jump signs
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-bem-smooth-helmholtz-combined-field-operator, def-complex-exponential, def-bem-newtonian-kernel-in-three-dimensions, lem-bem-plane-poisson-kernel-fourier-transform, thm-polar-coordinates-formula-for-lebesgue-measure, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-vector-valued-ftc-and-lipschitz-bound]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.2, printed pp. 4–5, and Chapter 2 §2.1, printed pp. 23–25: Laplace jumps. Chapter 1, Project 1.3, printed p. 21 (PDF p. 22): outgoing Helmholtz kernel and the Helmholtz-minus-Laplace comparison; the jump proof is local below."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§§2–4, printed pp. 615–622: the Laplace kernel singularity and its layer jump conventions."
---

## Statement

Let $\Gamma=\partial\Omega^-$ be the connected closed $C^2$ surface from [[def-bem-smooth-helmholtz-combined-field-operator]], with outward normal $n$. For $k>0$ and smooth densities $\lambda,\phi$, the Helmholtz layers in that definition satisfy
$$\gamma^-S_k\lambda=\gamma^+S_k\lambda,\qquad \partial_n^-S_k\lambda-\partial_n^+S_k\lambda=\lambda,$$
$$\gamma^-D_k\phi-\gamma^+D_k\phi=-\phi.$$
The one-sided conormal limits in the single-layer formula and trace limits in the double-layer formula are taken along the fixed normal $n$. The double-layer conormal jump is not asserted in this item.

## Facts & Assumptions

**Given:** The C2 surface, its fixed normal, the outgoing kernel and layer definitions of [[def-bem-smooth-helmholtz-combined-field-operator]], and smooth densities.

[F1] The plane Poisson kernel has mass one, so its half-kernel has one-sided limit $\pm\tfrac12$ for the planar double-layer trace ([[lem-bem-plane-poisson-kernel-fourier-transform]]).

[F2] The outgoing kernel is $G_k(r)=e^{ikr}/(4\pi r)$ and the Laplace kernel is $G_0(r)=1/(4\pi r)$ ([[def-bem-smooth-helmholtz-combined-field-operator]], [[def-bem-newtonian-kernel-in-three-dimensions]]).

[F3] The radial exponential derivative is the one established in [F91].

[F90] Polar integration uses the published radial formula, not a linear substitution: $dx=r^{n-1}dr\,d\sigma(\omega)$. The sphere measure agrees with graph-chart surface measure and scales by $R^{n-1}$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]])

[F91] The complex exponential is entire with derivative itself; composing with the affine parameter $r\mapsto ikr$ gives $\frac d{dr}e^{ikr}=ik e^{ikr}$ (subtract the exponential difference quotient and multiply by $ik$). The finite-dimensional FTC in [[cor-vector-valued-ftc-and-lipschitz-bound]] applies componentwise to these smooth exponential curves. Iteration gives all higher radial derivatives, and $|e^{ikr}|=1$ for real $k,r$ by [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]. ([[thm-complex-exponential-is-entire-with-derivative-itself]])

## Proof

1.1 Write $H_k(r)=G_k(r)-G_0(r)$. The identity $H_k(r)=\frac{ik}{4\pi}\int_0^1e^{ikr\theta}d\theta$ follows by integrating the derivative of the exponential from $0$ to $r$; it implies $H_k$ and its first radial derivative are bounded for $0<r\le r_0$. Its Cartesian first derivatives are bounded as well. Therefore the single-layer trace integrals with kernel $H_k$ and their first normal derivatives have identical limits from both sides, and the double-layer trace integral with kernel $\partial_{n_y}H_k$ also has identical limits: the kernels are bounded near the diagonal and the surface measure of a shrinking disk tends to zero. Thus these remainder terms do not change any of the three stated jumps. [F2, F3, given, algebra, F91]

2.1 Fix $x_0\in\Gamma$ and rotate/translate so $x_0=0$, $n(x_0)=e_3$, and a neighborhood of $\Gamma$ is $y=(z,\psi(z))$ with $\psi(0)=0$, $D\psi(0)=0$, $|\psi(z)|\le C|z|^2$, and $|D\psi(z)|\le C|z|$. For the Laplace kernel, the single-layer trace kernel is locally bounded by $C|z|^{-1}$, which is surface-integrable; dominated convergence gives the same trace from both sides. In the normal derivative, the planar leading term is $-t(4\pi(|z|^2+t^2)^{3/2})^{-1}\lambda(0)$. Its integral over the tangent plane is $-\tfrac12\operatorname{sgn}(t)\lambda(0)$ by polar coordinates. Subtracting this leading term leaves an integrable remainder with a common two-sided limit: the curvature shift $\psi(z)=O(|z|^2)$ changes $s/(|z|^2+s^2)^{3/2}$ by at most $C|z|^{-1}$ because its $s$-derivative is bounded by $C|z|^{-3}$; replacing $\lambda(0)$ by $\lambda(z,\psi(z))J(z)=\lambda(0)+O(|z|)$ contributes at most $C|t||z|/(|z|^2+t^2)^{3/2}$, whose disk integral is $O(|t||\log|t||)$. Hence the interior-minus-exterior conormal jump is $\lambda(0)$. [F1, F2, step 1.1, given, algebra, F90]

3.1 The double-layer trace has planar leading term $t(4\pi(|z|^2+t^2)^{3/2})^{-1}\phi(0)$, whose tangent-plane integral is $\tfrac12\operatorname{sgn}(t)\phi(0)$. The graph normal and area factor satisfy $n(y)J(y)=(-D\psi(z),1)$, so its numerator is $t+O(|z|^2)$. As in step 2.1, subtracting the planar term leaves an integrable $C|z|^{-1}$ curvature remainder plus a density remainder with disk integral $O(|t||\log|t||)$; both have the same limit from either side. Thus $\gamma^-D_0\phi=-\tfrac12\phi+K_0\phi$ and $\gamma^+D_0\phi=\tfrac12\phi+K_0\phi$ for a common remainder $K_0\phi$, giving jump $-\phi$. Step 1.1 shows the Helmholtz-minus-Laplace term has no jump, proving the displayed double-layer relation. [F1, F2, step 1.1, step 2.1, given, algebra, F90] ∎

## Remarks

The local expansions prove the smooth-density trace and single-layer conormal jumps. The separate [[lem-bem-helmholtz-double-layer-conormal-jump]] supplies all four jumps in the weak Sobolev trace convention, using [[lem-bem-smooth-trace-and-helmholtz-layer-extension]].
