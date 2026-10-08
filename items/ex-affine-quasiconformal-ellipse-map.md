---
id: ex-affine-quasiconformal-ellipse-map
kind: example
title: The affine ellipse map and its Beltrami coefficient
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 8
deps: [def-complex-domain, def-complex-annulus, def-extremal-length-and-curve-family-modulus, def-geometric-quasiconformal-homeomorphism, def-acl-sobolev-quasiconformal-homeomorphism, def-beltrami-coefficient-and-maximal-dilatation, def-wirtinger-derivatives, thm-determinant-sign-detects-orientation-change, thm-modulus-rectangle-and-annulus, lem-analytic-quasiconformality-implies-modulus-distortion, def-axiom-of-choice, lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]
axiom_use: The Axiom of Choice is inherited from the analytic quasiconformality interface; the affine calculations and the geometric modulus inequality use no further selections.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §1, printed pp. 47–51 (especially pp. 49–50): real-linear maps, their singular values, complex dilatation $\\mu=f_{\\bar z}/f_z$, and $D=(1+|\\mu|)/(1-|\\mu|)."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §11.1, printed pp. 175–178: the ellipse field and maximal dilatation of an orientation-preserving real-linear map."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Fix $\mu\in\mathbb C$ with $|\mu|<1$ and define $f:\mathbb C\to\mathbb C$ by $f(z)=z+\mu\overline z$. Verify:

(a) $f$ is a homeomorphism with inverse
$$f^{-1}(w)=\frac{w-\mu\overline w}{1-|\mu|^2},$$
is orientation-preserving, and has $f_z=1$ and $f_{\overline z}=\mu$. Consequently its Beltrami coefficient is $\mu_f\equiv\mu$ and its analytic maximal dilatation is
$$K_f=\frac{1+|\mu|}{1-|\mu|}$$
([[def-beltrami-coefficient-and-maximal-dilatation]], [[def-wirtinger-derivatives]]).

(b) The unit circle maps to an ellipse with semiaxes $1+|\mu|$ and $1-|\mu|$. Their ratio is $K_f$; the map is conformal exactly when $\mu=0$.

(c) For every round annulus $A(r,R)=\{r<|z|<R\}$ with $0\le r<R\le\infty$ ([[def-complex-annulus]]), its image is the ring between homothetic ellipses when $0<r<R<\infty$. When $r=0$ its inner complementary component is the puncture $\{0\}$; when $R=\infty$ its outer complementary component in the sphere is $\{\infty\}$. Let $\Gamma_{r,R}$ join the two annular ends, using the end-path convention of [[lem-analytic-quasiconformality-implies-modulus-distortion]] (equivalently the boundary-joining family for finite positive radii). Then
$$\frac1{K_f}\lambda(\Gamma_{r,R})\le\lambda(f\Gamma_{r,R})\le K_f\lambda(\Gamma_{r,R}),\qquad \frac1{K_f}\mu(\Gamma_{r,R})\le\mu(f\Gamma_{r,R})\le K_f\mu(\Gamma_{r,R})$$
by [[lem-analytic-quasiconformality-implies-modulus-distortion]], where $\mu(\Gamma)=1/\lambda(\Gamma)$ denotes the library's curve-family modulus. In particular, for the Beltrami parameter $\mu=1/3$ and $A(1,e^{2\pi})$, $K_f=2$ and $\lambda(\Gamma_{1,e^{2\pi}})=\mu(\Gamma_{1,e^{2\pi}})=1$, so the guaranteed distortion interval is $[1/2,2]$.

(d) The map and its restriction $f|_\Omega:\Omega\to f(\Omega)$ for every complex domain $\Omega$ are $K_f$-quasiconformal in both the analytic and geometric definitions ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-geometric-quasiconformal-homeomorphism]]).

## Facts & Assumptions

**Given:** Choice, $\mu\in\mathbb C$ with $\kappa:=|\mu|<1$, the displayed real-linear map, and the path-family conventions of [[def-extremal-length-and-curve-family-modulus]].

[F1] Solving $w=z+\mu\overline z$ together with $\overline w=\overline z+\overline\mu z$ gives the stated inverse because $1-\kappa^2>0$. The real determinant is $1-\kappa^2$, so the map is invertible and orientation-preserving ([[thm-determinant-sign-detects-orientation-change]], [[lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]]).

[F2] Direct Wirtinger differentiation gives $f_z=1$ and $f_{\bar z}=\mu$. Thus $\mu_f=\mu$ and the analytic maximal dilatation is $(1+\kappa)/(1-\kappa)$ ([[def-wirtinger-derivatives]], [[def-beltrami-coefficient-and-maximal-dilatation]]).

[F3] Writing $\mu=\kappa e^{i\theta}$ and rotating the output by $e^{-i\theta/2}$ gives
$$e^{-i\theta/2}f(e^{it})=(1+\kappa)\cos(t-\theta/2)+i(1-\kappa)\sin(t-\theta/2).$$
These are the semiaxes of the image ellipse; their ratio equals the value in [F2].

[F4] Analytic $K_f$-quasiconformality gives both quadrilateral and annular inequalities for extremal length and its reciprocal modulus with constant $K_f$ ([[lem-analytic-quasiconformality-implies-modulus-distortion]]). For $0<r<R<\infty$, $\lambda(\Gamma_{r,R})=(2\pi)^{-1}\log(R/r)$ and $\mu(\Gamma_{r,R})=1/\lambda(\Gamma_{r,R})$ ([[thm-modulus-rectangle-and-annulus]]).

[F5] The image of an open connected set under this invertible linear homeomorphism is open and connected, hence a complex domain; the analytic inequality and the geometric quadrilateral bounds restrict to that image ([[def-complex-domain]], [[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-geometric-quasiconformal-homeomorphism]], [F1], [F2], [F4]).

## Proof

**Proof technique:** solve the real-linear inverse system, compute the Wirtinger data and ellipse axes, then apply the exact annular modulus theorem.

1.1 The equations $w=z+\mu\overline z$ and $\overline w=\overline z+\overline\mu z$ imply $w-\mu\overline w=(1-|\mu|^2)z$, so [F1] gives the displayed inverse. Since $1-|\mu|^2>0$, the real determinant is positive; thus $f$ is an orientation-preserving invertible real-linear map and therefore a homeomorphism of $\mathbb C$ onto itself. [F1, given, algebra]

1.2 Write $\mu=\kappa e^{i\theta}$. The parametrization in [F3] identifies the image of the unit circle with an ellipse of semiaxes $1+\kappa$ and $1-\kappa$, so their ratio is $(1+\kappa)/(1-\kappa)=K_f$. Also $f_{\bar z}=\mu$; therefore $f$ is holomorphic exactly when $\mu=0$, in which case it is the identity and conformal. [F2, F3, given]

2.1 Differentiating $f(z)=z+\mu\bar z$ gives $f_z=1$ and $f_{\bar z}=\mu$. Since this smooth map belongs to $W^{1,2}_{\rm loc}$, the inequality $|f_{\bar z}|/|f_z|=\kappa<1$ makes it analytically $K_f$-quasiconformal, and [F2] yields $\mu_f\equiv\mu$ and $K_f=(1+\kappa)/(1-\kappa)$. [F2, step 1.1, algebra]

3.1 For $0<r<R<\infty$, linearity and [F3] send the two boundary circles to homothetic ellipses; homeomorphism sends the region between them onto the region between those ellipses. If $r=0$, the omitted origin remains the origin. The bound $|f(z)|\ge(1-\kappa)|z|$ shows that $f$ extends to infinity with $f(\infty)=\infty$, so $R=\infty$ gives an ellipse exterior, or the punctured plane when also $r=0$. The map transports the two annular ends and their path families, and [F4] gives both distortion bounds in every case with its end-path convention. For $\mu=1/3$, $K_f=2$; the finite radii $r=1$, $R=e^{2\pi}$ give $\lambda=\mu(\Gamma)=1$, so each target quantity lies in $[1/2,2]$. [F1, F3, F4, step 2.1, given, algebra]

4.1 By [F5], the restriction to any complex domain remains a homeomorphism onto a complex domain, retains the same constant Wirtinger derivatives and analytic inequality, and satisfies the geometric quadrilateral bounds for every quadrilateral compactly contained in that domain. Hence both definitions hold with constant $K_f$ on the plane and on every such restriction. [F1, F2, F4, F5, given] ∎
