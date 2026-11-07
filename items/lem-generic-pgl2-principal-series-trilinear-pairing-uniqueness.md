---
id: lem-generic-pgl2-principal-series-trilinear-pairing-uniqueness
kind: lemma
title: "Generic Uniqueness of the PGL2 Principal-Series Trilinear Pairing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-full-level-gl2-automorphic-distribution
  - thm-local-finite-order-characterization-of-distributions
  - thm-fejer-uniform-convergence-for-continuous-periodic-functions
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§3, equation (3.21) and the uniqueness assertion following (3.23), printed pp.13–14; the orbit and stabilizer proof is reconstructed here."
---

## Statement

Let $G=PGL_2(\mathbb R)$ and let $V^\infty_{\rho_j,\delta_j}$,
$1\le j\le3$, be its smooth right-equivariant principal-series models with
character $\chi_{\rho_j-1,\delta_j}$. Their topology is the smooth-function
topology on the compact projective line, using the principal-series line
bundle. Suppose, for every integer $k\ge0$, that
$$\rho_i+\rho_j-\rho_\ell\ne1+2k\quad(\{i,j,\ell\}=\{1,2,3\}),\qquad \rho_1+\rho_2+\rho_3\ne1+2k.$$
The vector space of continuous $G$-invariant trilinear functionals on
$V^\infty_{\rho_1,\delta_1}\times V^\infty_{\rho_2,\delta_2}\times V^\infty_{\rho_3,\delta_3}$
has dimension at most one. Restriction of its distribution kernel to the
open orbit of three pairwise distinct projective points is injective.
The hypotheses are sufficient; no assertion about the dimensions at the
excluded parameters is made. No choice principle is assumed.

## Statement references

[[def-full-level-gl2-automorphic-distribution|the right-equivariant principal-series convention]]

## Facts & Assumptions

**Given:** The three principal-series parameters and the displayed exclusions.

[F1] [[def-full-level-gl2-automorphic-distribution]] fixes the character and left-translation convention. In an affine smooth model, $\pi_\rho(a_t)f(x)=e^{(\rho-1)t}f(e^{-2t}x)$ for $a_t=\operatorname{diag}(e^t,e^{-t})$; in the reciprocal chart the multiplier is $e^{-(\rho-1)t}$ and the argument scales by $e^{2t}$.

[F2] [[thm-local-finite-order-characterization-of-distributions]] bounds distributions by finite derivative seminorms on compact supports.

[F3] [[thm-fejer-uniform-convergence-for-continuous-periodic-functions]] supplies smooth Fourier approximation by applying its uniform convergence assertion to each derivative.

## Proof

**Given:** A continuous invariant trilinear functional $\ell$.

1.1 In the compact circle model, continuity and trilinearity give $|\ell(v_1,v_2,v_3)|\le C\prod_j p_m(v_j)$ for some finite derivative order $m$: take a product of three basic zero-neighbourhoods on which $|\ell|\le1$ and scale each input. Its values on the three Fourier bases therefore have growth bounded by $C'\prod_j(1+|n_j|)^m$. For a smooth function on the product of the three circles, its Fourier coefficients have arbitrarily fast separate polynomial decay by repeated integration by parts. Pairing those coefficients with the values of $\ell$ defines a distribution kernel, with absolute convergence bounded by a fixed finite derivative seminorm. This agrees with $\ell$ on separated products. Those products are dense by successive Fourier or Fejér approximation with derivatives, using [F3], so the kernel is unique and inherits $G$-invariance. The construction respects the line-bundle trivializations, since it agrees on separated products in every trivialization. [F1, F3, construct, algebra]

2.1 On the orbit $O$ of three pairwise distinct points, a projective transformation is uniquely determined by the three images, so $O\simeq G$ with trivial stabilizer. Trivialize the tensor bundle by translation from one base point. In these coordinates an invariant distribution is a multiple of left Haar measure. To verify this last assertion directly, convolve it against a compact smooth test of integral one; the resulting smooth function is invariant under every left translation and hence constant. An explicitly shrinking compact approximate identity converges to the distribution in the test topology, so these constants converge after testing against one fixed normalized test; the original distribution is the corresponding constant multiple of Haar measure. Thus restrictions to $O$ span a space of dimension at most one. It remains to exclude invariant kernels supported on its complement. [step 1.1, construct, algebra]

2.2 The complement consists of three double-diagonal orbits (exactly two points equal) and the triple diagonal. A finite-order distribution supported on a smooth submanifold has a finite expansion in normal derivatives of distributions on that submanifold. Locally this follows by Taylor expansion in the normal coordinates: a test whose normal derivatives through the distribution's order vanish on the submanifold is annihilated, because multiplying it by a cutoff of normal radius $\epsilon$ makes its controlling derivative seminorm tend to zero. The coefficient of the highest nonzero normal order is intrinsic and transforms under the stabilizer by the induced normal representation. On a transitive orbit such an equivariant coefficient is a smooth density with values in that finite-dimensional normal-jet space: a compact convolution on the group smooths it, while equivariance makes the convolution a fixed smooth linear combination of its translates and recovers the coefficient by tests of integral one in local group coordinates. Equivalently, locally constant coordinate translations identify its distribution coefficients with constant distributions after transporting the finite-dimensional fibers. Its value at one point must therefore be fixed by that point's stabilizer, including the density Jacobian. [step 1.1, F2, construct, algebra]

3.1 Consider the double-diagonal orbit represented by $(0,0,\infty)$. Its tangent coordinates may be taken as the common affine coordinate of the first two points and the reciprocal coordinate of the third. Under $a_t$, the arguments of a test scale respectively by $e^{-2t}$ and $e^{2t}$, so their joint density Jacobian is one. The normal coordinate, the difference of the first two affine coordinates, scales by $e^{-2t}$. By [F1], the product section multiplier is $e^{(\rho_1+\rho_2-\rho_3-1)t}$. A highest normal derivative of order $k$ therefore requires a stabilizer-fixed density of character $e^{(\rho_1+\rho_2-\rho_3-1-2k)t}$. Such a density must be zero unless $\rho_1+\rho_2-\rho_3=1+2k$. The hypothesis excludes this equality. Descending through the finite normal orders in step 2.2 makes every coefficient zero on this orbit. Permuting the three slots gives the same conclusion on the other two double-diagonal orbits, with precisely the other two displayed exclusions. [F1, step 2.2, given, algebra]

3.2 The remaining support is the triple diagonal. At its representative $(0,0,0)$, all affine arguments scale by $e^{-2t}$ and the product multiplier is $e^{(\rho_1+\rho_2+\rho_3-3)t}$. There is one tangent direction and two normal directions. Integrating along the tangent direction contributes the Jacobian $e^{2t}$; every normal derivative of total order $k$ contributes $e^{-2kt}$. Thus a highest normal-jet coefficient requires character $e^{(\rho_1+\rho_2+\rho_3-1-2k)t}=1$. The last displayed exclusion again forces the coefficient to vanish. Descending through all finite normal orders proves that no nonzero invariant kernel can be supported on the triple diagonal. [F1, step 2.2, given, algebra]

4.1 Steps 3.1 and 3.2 show that an invariant kernel vanishing on $O$ vanishes everywhere. Restriction to $O$ is therefore injective, and step 2.1 bounds the dimension of the space by one. All Fourier approximations and local normal-order arguments are explicitly indexed and use finite charts at each compact support; no simultaneous infinite choice is made. [step 2.1, step 3.1, step 3.2, algebra] ∎
