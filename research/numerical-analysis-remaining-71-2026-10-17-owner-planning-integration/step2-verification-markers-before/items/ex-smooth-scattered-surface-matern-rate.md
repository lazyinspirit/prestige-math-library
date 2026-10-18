---
id: ex-smooth-scattered-surface-matern-rate
kind: example
title: "A smooth scattered surface inherits the Matérn fill-distance rate"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - def-normalized-matern-spectral-kernel
  - def-bessel-potential-space-and-restriction-quotient
  - lem-matern-spectral-integral-and-normalization
  - lem-schwartz-dense-in-fourier-bessel-potential-space
  - def-schwartz-space-and-its-seminorms
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-exponential-beats-every-polynomial
  - thm-matern-interpolation-fill-distance-error
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Narcowich, Ward, and Wendland, Sobolev bounds on functions with scattered zeros, Math. Comp. 74 (2005), Theorem 1.1"
      url: "https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_functions_with_scattered_zeros_with_applications_to_radial_basis_function_surface_fitting"
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 34–36"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
verification:
---

## Example

Assume the Axiom of Choice and Countable Choice as required by the Fourier-space and interpolation suppliers. Fix $d\ge1$, $\nu>0$, $a>0$, and let $\Omega=(0,1)^d$. The smooth graph $\{(x,f(x)):x\in\overline\Omega\}$ with $f(x)=e^{-\pi|x|^2}$ is interpolated from midpoint-grid samples by the normalized Matérn kernel of smoothness $\nu$.

## Facts & Assumptions

**Given:** Full AC, Countable Choice, the fixed $d,\nu,a$, the cube, the function $f$, and midpoint grids
$$X_m=\left\{\left(\frac{i_1+1/2}{m},\ldots,\frac{i_d+1/2}{m}\right):0\le i_j<m\right\},\qquad m\in\mathbb N.$$

[F1] An admitted domain is nonempty, bounded and Lipschitz and has a single cone radius and aperture at every point of the closure; the fill distance is $h_X=\sup_{x\in\Omega}\min_{y\in X}|x-y|$. ([[def-rbf-kernels-sites-and-augmented-interpolation]])

[F2] Every Schwartz function is in the Fourier Bessel-potential space $H^s(\mathbb R^d)$ for every $s>d/2$, and $H^s(\Omega)$ consists of restrictions of whole-space members. ([[lem-schwartz-dense-in-fourier-bessel-potential-space]], [[def-bessel-potential-space-and-restriction-quotient]])

[F3] The real exponential is smooth with derivative itself; repeated coordinatewise chain and product rules show every partial derivative of $f$ is a finite sum of polynomial multiples of $e^{-\pi|x|^2}$. ([[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]])

[F4] The Schwartz seminorms require polynomially weighted derivatives to be bounded. For any degree $M\ge0$, take an integer $n\ge1$ with $2n\ge M$; for $r\ge1$, $r^M\le r^{2n}$ and exponential domination applied with $x=r^2$ gives $r^{2n}e^{-\pi r^2}\to0$. On $|x|\le1$, each polynomial is bounded by the sum of the absolute values of its finitely many coefficients. ([[def-schwartz-space-and-its-seminorms]], [[thm-exponential-beats-every-polynomial]])

[F5] The Matérn interpolation error and power function are bounded by $C h_X^\nu$ on an admitted cone domain for small fill distance. ([[thm-matern-interpolation-fill-distance-error]])



**Proof technique:** verify the domain, regularity, and grid radius, then apply the fill-distance theorem.

## Verification

**Proof technique:** verify the domain, regularity, and grid radius, then apply the fill-distance theorem.

**Given:** The data above.

1.1 The cube is bounded and Lipschitz. At a boundary point $p$, let $I$ be the nonempty set of active coordinates ($p_j=0$ or $1$), with inward signs $\sigma_j=1$ at $0$ and $-1$ at $1$. Put $u_j=\sigma_j/\sqrt{|I|}$ for $j\in I$ and $u_j=0$ otherwise. In the orthogonal coordinates $x=p+y+tu$ with $y\perp u$, a sufficiently small neighborhood has no constraints from inactive coordinates, and the active inequalities reduce to $$t>\max_{j\in I}(-\sqrt{|I|}\,\sigma_j y_j).$$ This is the epigraph of a finite maximum of linear functions, hence a local Lipschitz graph with the cube on one side. The cube also satisfies the uniform cone condition: for $x\in[0,1]^d$, let $\sigma_j=1$ if $x_j\le1/2$ and $\sigma_j=-1$ otherwise, and put $u=(\sigma_1,\ldots,\sigma_d)/\sqrt d$. If $u=e_1$ let $Q_x=I$; otherwise put $v=(e_1-u)/|e_1-u|$ and $Q_x=I-2vv^{\mathsf T}$, which is orthogonal and sends $e_1$ to $u$. Choose $0<\theta<\pi/2$ with $\cos\theta/\sqrt d-\sin\theta>0$, and set $r_0=1/2$. For any cone vector $z$, $z_1>|z|\cos\theta$ and $|z-z_1e_1|<|z|\sin\theta$. Hence for every coordinate, $\sigma_j(Q_xz)_j\ge z_1/\sqrt d-|z-z_1e_1|>|z|(\cos\theta/\sqrt d-\sin\theta)>0$. Each coordinate moves toward the cube's interior by less than $r_0$, so $x+Q_xz\in(0,1)^d$. [F1, given, construct, algebra]

2.1 The sites in $X_m$ are distinct. Each $x\in(0,1)^d$ is at coordinatewise distance at most $1/(2m)$ from a midpoint in each grid interval, so $h_{X_m}\le\sqrt d/(2m)\to0$. By [F3], every partial derivative of $f$ is a finite sum of polynomial multiples of $e^{-\pi|x|^2}$; [F4] makes every polynomially weighted derivative bounded, so $f$ is Schwartz. Then [F2] gives $f|_\Omega\in H^s(\Omega)$ for $s=\nu+d/2$. [F2, F3, F4, step 1.1, algebra]

3.1 For all sufficiently large $m$, step 2.1 gives $h_{X_m}\le h_0$ from [F5]. The Matérn interpolation theorem therefore yields $$\|f-s_{X_m}f\|_{L^\infty(\Omega)}\le C h_{X_m}^\nu\|f\|_{H^s(\Omega)}\le C\left(\frac{\sqrt d}{2m}\right)^\nu\|f\|_{H^s(\Omega)},\qquad \sup_{x\in\Omega}P_{X_m}(x)\le C\left(\frac{\sqrt d}{2m}\right)^\nu.$$ The graph samples are the scattered surface data, and the bound uses fill distance alone; no mesh-ratio condition is needed. [F5, step 2.1, algebra] ∎
