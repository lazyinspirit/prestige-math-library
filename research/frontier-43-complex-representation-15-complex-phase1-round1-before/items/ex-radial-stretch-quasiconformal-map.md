---
id: ex-radial-stretch-quasiconformal-map
kind: example
title: The radial stretch is quasiconformal with K equal to max of alpha and one over alpha
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 6
deps: [def-complex-domain, def-complex-annulus, def-extremal-length-and-curve-family-modulus, def-absolute-continuity-on-almost-every-coordinate-line, thm-acl-characterisation-of-w-one-p, def-acl-sobolev-quasiconformal-homeomorphism, def-geometric-quasiconformal-homeomorphism, def-beltrami-coefficient-and-maximal-dilatation, def-wirtinger-derivatives, thm-euclidean-inverse-function-theorem, lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier, def-r-orientation-of-a-topological-manifold, thm-polar-coordinates-formula-for-lebesgue-measure, thm-lebesgue-measure-of-a-box-of-every-kind, thm-modulus-rectangle-and-annulus, lem-analytic-quasiconformality-implies-modulus-distortion, def-axiom-of-choice]
axiom_use: The Axiom of Choice is carried by the ACL/Sobolev definition and the ACL characterization of W^{1,2}; the explicit polar and annular computations add no further choice.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes, 146 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §1, printed pp. 49–50: real-linear Wirtinger derivatives, ellipse distortion, and $K=(1+|\\mu|)/(1-|\\mu|)."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §§11.1 and 12.1, printed pp. 175–178 and 183–184: Beltrami coefficient/dilatation conventions and annular modulus distortion. The radial formulas below are computed directly."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. For $\alpha>0$ define $f_\alpha(0)=0$ and $f_\alpha(z)=|z|^{\alpha-1}z$ for $z\ne0$. Verify:

(a) $f_\alpha$ is a homeomorphism of $\mathbb C$ onto itself, orientation-preserving, with inverse $f_{1/\alpha}$, and belongs to $W^{1,2}_{\mathrm{loc}}$. For $z\ne0$,
$$(f_\alpha)_z=\frac{\alpha+1}{2}|z|^{\alpha-1},\qquad (f_\alpha)_{\bar z}=\frac{\alpha-1}{2}|z|^{\alpha-1}\frac z{\bar z}.$$
Consequently
$$\mu_{f_\alpha}(z)=\frac{\alpha-1}{\alpha+1}\frac z{\bar z}\quad(z\ne0),\qquad |\mu_{f_\alpha}|=\frac{|\alpha-1|}{\alpha+1},\qquad K_{f_\alpha}=\max\left(\alpha,\frac1\alpha\right),$$
and $f_\alpha$ is analytically and geometrically $K_{f_\alpha}$-quasiconformal.

(b) $f_\alpha$ maps $|z|=r$ onto $|w|=r^\alpha$ and each ray onto itself. It is conformal exactly when $\alpha=1$.

(c) The extremal-length distortion bound is sharp on every annular connecting family. For $A(r,R)$ ([[def-complex-annulus]]) with $0<r<R<\infty$, let $\Gamma_{r,R}$ be the paths joining its boundary circles. Then
$$\lambda(f_\alpha\Gamma_{r,R})=\frac1{2\pi}\log\frac{R^\alpha}{r^\alpha}=\alpha\lambda(\Gamma_{r,R}).$$
If $\alpha\ge1$, then $K_{f_\alpha}=\alpha$ and this attains the upper extremal-length bound; if $0<\alpha<1$, then $K_{f_\alpha}=1/\alpha$ and the ratio $\alpha=1/K_{f_\alpha}$ attains the lower bound. The reciprocal modulus bounds are attained at the corresponding opposite endpoints ([[lem-analytic-quasiconformality-implies-modulus-distortion]]).

## Facts & Assumptions

**Given:** Choice, $\alpha>0$, the ACL/Sobolev convention, and the annulus path-family conventions.

[F1] The map has polar form $f_\alpha(re^{it})=r^\alpha e^{it}$. The function $r\mapsto r^\alpha$ is a strictly increasing homeomorphism of $[0,\infty)$ with inverse $s\mapsto s^{1/\alpha}$, so $f_\alpha$ is a homeomorphism with inverse $f_{1/\alpha}$.

[F2] On $\mathbb C\setminus\{0\}$, direct Wirtinger differentiation gives the derivatives in the Statement. In particular the real Jacobian is
$$J_{f_\alpha}=|(f_\alpha)_z|^2-|(f_\alpha)_{\bar z}|^2=\alpha|z|^{2\alpha-2}>0.$$

[F3] On each horizontal or vertical line not passing through $0$, $f_\alpha$ is smooth. On the two coordinate lines through $0$, its components are constant multiples of $g(t)=\operatorname{sgn}(t)|t|^\alpha$, which is absolutely continuous on compact intervals because $g'(t)=\alpha|t|^{\alpha-1}\in L^1_{\mathrm{loc}}$ for $\alpha>0$.

[F4] The function is locally bounded, and its classical first partial derivatives off $0$ are bounded by $C_\alpha|z|^{\alpha-1}$. Since
$$\int_{|z|<R}|z|^{2\alpha-2}\,dA=2\pi\int_0^R r^{2\alpha-1}\,dr<\infty$$
for $\alpha>0$, they are locally square-integrable ([[thm-polar-coordinates-formula-for-lebesgue-measure]]). The excluded point $0$ is null because it lies in boxes of arbitrarily small area ([[thm-lebesgue-measure-of-a-box-of-every-kind]]). The ACL characterization therefore gives $f_\alpha\in W^{1,2}_{\mathrm{loc}}$ and identifies these almost-everywhere classical derivatives with its weak derivatives ([[def-absolute-continuity-on-almost-every-coordinate-line]], [[thm-acl-characterisation-of-w-one-p]]).

[F5] The ratio $|(f_\alpha)_{\bar z}|/|(f_\alpha)_z|=|\alpha-1|/(\alpha+1)<1$ off $0$, and
$$\frac{1+|\alpha-1|/(\alpha+1)}{1-|\alpha-1|/(\alpha+1)}=\max\left(\alpha,\frac1\alpha\right).$$
The modulus-distortion lemma gives the quadrilateral inequalities for analytic maps; together with orientation preservation this is the geometric definition ([[lem-analytic-quasiconformality-implies-modulus-distortion]], [[def-geometric-quasiconformal-homeomorphism]]).

[F6] For every finite round annulus, $\lambda(\Gamma_{r,R})=(2\pi)^{-1}\log(R/r)$ and $\mu(\Gamma_{r,R})=1/\lambda(\Gamma_{r,R})$ ([[thm-modulus-rectangle-and-annulus]]).

[F7] At a point where the real derivative is invertible, the inverse-function theorem makes the map a local diffeomorphism; for a smooth local diffeomorphism its local-homology orientation multiplier is the sign of its determinant ([[thm-euclidean-inverse-function-theorem]], [[lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]], [[def-r-orientation-of-a-topological-manifold]]).

## Proof

**Proof technique:** use the polar form for the homeomorphism and annulus images, compute the Wirtinger derivatives off the origin, establish local Sobolev regularity by ACL, then compare the resulting constants.

1.1 By [F1], $f_\alpha$ is a homeomorphism with inverse $f_{1/\alpha}$. At every $z\ne0$, [F2] gives a positive Jacobian, so the Euclidean inverse function theorem makes $f_\alpha$ a local diffeomorphism there; the smooth-to-local-homology orientation lemma identifies its local orientation multiplier with this positive determinant sign. The local orientation sign of the homeomorphism is locally constant on connected $\mathbb C$ by [[def-geometric-quasiconformal-homeomorphism]], so the sign at $0$ is positive as well.[F1, F2, F7, given]

1.2 Write $f_\alpha(z)=z|z|^{\alpha-1}$ for $z\ne0$. Using $\partial_z|z|=\bar z/(2|z|)$ and $\partial_{\bar z}|z|=z/(2|z|)$ gives $\displaystyle (f_\alpha)_z=|z|^{\alpha-1}+\frac{\alpha-1}{2}|z|^{\alpha-3}z\bar z=\frac{\alpha+1}{2}|z|^{\alpha-1},$ $\displaystyle (f_\alpha)_{\bar z}=\frac{\alpha-1}{2}|z|^{\alpha-3}z^2=\frac{\alpha-1}{2}|z|^{\alpha-1}\frac z{\bar z}.$ Thus [F2] and [F4] provide the stated almost-everywhere derivatives and $W^{1,2}_{\mathrm{loc}}$ regularity; the point $0$ is a null set. [F2, F4, given, algebra]

2.1 Since $|(f_\alpha)_z|=(\alpha+1)|z|^{\alpha-1}/2$ and $|(f_\alpha)_{\bar z}|=|\alpha-1||z|^{\alpha-1}/2$, the Beltrami coefficient has constant modulus $|\alpha-1|/(\alpha+1)$. If $\alpha\ge1$, the quotient $|\mu|=(\alpha-1)/(\alpha+1)$ gives $K_{f_\alpha}=\alpha$; if $0<\alpha<1$, it gives $K_{f_\alpha}=1/\alpha$. The analytic inequality holds almost everywhere; [F5] and step 1.1 then give geometric $K_{f_\alpha}$-quasiconformality. If $\alpha\ne1$, its $\bar\partial$ derivative is nonzero on $\mathbb C\setminus\{0\}$, so it is not holomorphic; if $\alpha=1$, it is the identity. This proves (a) and the conformality claim in (b). [F4, F5, step 1.1, given, algebra]

3.1 The polar formula in [F1] gives $|f_\alpha(z)|=|z|^\alpha$ and preserves the argument, so $A(r,R)$ maps to $A(r^\alpha,R^\alpha)$ and its connecting family maps onto the target connecting family. By [F6], $\displaystyle \lambda(f_\alpha\Gamma_{r,R})=\frac1{2\pi}\log\frac{R^\alpha}{r^\alpha}=\alpha\frac1{2\pi}\log\frac Rr=\alpha\lambda(\Gamma_{r,R}).$ The two cases in step 2.1 show this is the upper endpoint for $\alpha\ge1$ and the lower endpoint for $0<\alpha<1$. Taking reciprocals shows the corresponding modulus endpoint is also attained. [F1, F6, step 2.1, given, algebra] ∎
