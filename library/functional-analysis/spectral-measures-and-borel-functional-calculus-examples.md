---
page: spectral-measures-and-borel-functional-calculus-examples
title: Spectral Measures and Borel Functional Calculus — Examples
status: draft
items: []
examples: [ex-pvm-of-a-diagonal-normal-operator, ex-pvm-of-a-multiplication-operator, ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection, ex-sign-and-positive-negative-parts-of-a-self-adjoint-operator, ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function, cex-continuous-functional-calculus-cannot-produce-every-spectral-projection, cex-a-normal-operator-need-not-have-any-eigenvectors, rem-direct-integrals-and-general-multiplicity-theory]
---

The companion computes the spectral measure in the two basic models and
exhibits the three boundary phenomena the main page must not gloss over.

The diagonal operator $Te_i=\lambda_ie_i$ on $\ell^2(I)$ has spectrum the
closure of its eigenvalue family, spectral projections acting by the pulled-back
indicators $\mathbf 1_B(\lambda_i)$ on the coordinates, and Borel calculus
acting by $f(\lambda_i)$; the construction checks boundedness, normality,
strong additivity and the uniqueness clause of the spectral theorem. The
multiplication operator $M_m$ on $L^2$ of a sigma-finite measure space has
spectrum the essential range of $m$, spectral projections
$E(B)=M_{\mathbf 1_{m^{-1}(B)}}$ and calculus $f(M_m)=M_{f\circ m}$, computed
from the reciprocal criterion off the essential range and from finite-measure
subsets of the inverse images of small discs on it. At an isolated spectral
point $\lambda$ the spectral projection is computed as the Riesz projection
along a positively oriented circle separating $\lambda$ from the rest of the
spectrum: the resolvent is a Borel-calculus value, Bochner commutation pulls the
contour integral inside the calculus, and the scalar Cauchy formula turns the
kernel into the indicator of the enclosed disc, so $E(\{\lambda\})$ equals
$(2\pi i)^{-1}\oint(zI-T)^{-1}dz$ in the repository's resolvent convention.
Finally, for a bounded self-adjoint $T$ the sign and positive-negative parts
$|T|$, $T_+$, $T_-$, $\operatorname{sgn}(T)$ are evaluated from the scalar
identities of the calculus: $T=T_+-T_-$, $|T|=T_++T_-$, $T_+T_-=0$,
$T_\pm=\tfrac12(|T|\pm T)$, $\operatorname{sgn}(T)^2=I-E(\{0\})$ is the
projection onto $(\ker T)^\perp$, and $|T|$ agrees with the earlier positive
square root $(T^*T)^{1/2}$.

The counterexamples mark the limits of the theory. On $L^2([0,1])$ the
characteristic function of $[0,1/2]$ is discontinuous but still a permitted
Borel-calculus input, and it produces the orthogonal projection onto the
classes supported in $[0,1/2]$, with kernel the classes supported in
$(1/2,1]$. Exactly that projection cannot be produced by the continuous
calculus: a continuous $f$ with $f(M_x)=E([0,1/2])$ would have to be $1$ on
$[0,1/2]$ and $0$ on $(1/2,1]$, forcing $f(1/2)=1$ and $f(1/2)=0$. And the
same operator shows that normality does not produce eigenvectors: a nonzero
solution of $xh=\mu h$ in $L^2$ would vanish almost everywhere off the single
point $\mu$, hence be the zero class, so $M_x$ has spectrum $[0,1]$ and no
eigenvectors at all. The closing remark fixes the boundary of the page: the
standard separable direct-integral model and its multiplicity classification
are proved on the main page, while general measurable fields and nonseparable
multiplicity theory are orientation only and are not suppliers.
