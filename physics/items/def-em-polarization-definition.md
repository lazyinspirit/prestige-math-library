---
id: def-em-polarization-definition
kind: definition
title: "Polarization of a transverse plane wave: linear, circular and elliptical traces, and handedness"
status: draft
origin: pipeline
domain: physics
dependency_level: 16
deps: [pthm-em-plane-wave-maxwell,
       def-em-plane-wave-definition,
       def-cross-product-in-r3,
       def-euclidean-inner-product,
       lem-cross-product-is-bilinear-alternating-and-orthogonal,
       def-complex-conjugate-real-imaginary-part-and-modulus,
       def-real-order,
       thm-eulers-formula,
       thm-cross-product-norm-is-the-two-vector-gram-determinant]
dependency_roles:
  pthm-em-plane-wave-maxwell: formulation-prerequisite
  def-em-plane-wave-definition: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-real-order: mathematical-premise
  thm-eulers-formula: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Definition-level classification of the polarization of ideal transverse plane waves satisfying the amplitude conditions of the plane-wave Maxwell theorem, in a named inertial frame with SI units and a fixed nonzero wavevector. It fixes the phase convention, the trace, the linear, circular and elliptical cases and the sign of the helicity $H$. Excluded: partially polarized or stochastic light, finite pulses, material media, non-plane or non-transverse fields, and any empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.3.2 pp. 87-88 ($E_0=\\alpha-i\\beta$ and $E=\\alpha\\cos(k\\cdot x-\\omega t)+\\beta\\sin(k\\cdot x-\\omega t)$; circular case $|\\alpha|=|\\beta|$, $\\alpha\\cdot\\beta=0$; right-handed iff $\\beta=\\hat k\\times\\alpha$; general elliptical trace)"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§9.1.4 and Problem 9.8 printed pp. 373-375 (transverse waves in two independent polarization states; the circular-polarization naming convention)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $k\in\mathbb R^3\setminus\{0\}$ and $\omega>0$, let $e,b\in\mathbb C^3$,
and let $(E,B)$ be the plane-wave pair of [[def-em-plane-wave-definition]] on
the whole-space region $\Omega=\mathbb R^3$, $I=\mathbb R$, with phase
$\theta(x,t)=k\cdot x-\omega t$. Suppose the amplitude conditions of
[[pthm-em-plane-wave-maxwell]] hold, so that $k\cdot e=0$ and
$b=k\times e/\omega$. By that theorem, if the pair is nonzero then it also
satisfies the dispersion relation $|k|=\omega/c$, while the zero pair is
permitted for every $k\ne0$ and $\omega>0$, both on and off this dispersion
relation. This item classifies the polarization of that class of transverse
plane waves; it adds no field-theoretic content.

Write $e=a+id$ with the real vectors $a=\operatorname{Re}e$ and
$d=\operatorname{Im}e$ of [[def-complex-conjugate-real-imaginary-part-and-modulus]],
applied componentwise in $\mathbb C^3$; since $k$ is real and $k\cdot e=0$, the
real and imaginary parts of this complex equation give
$\langle k,a\rangle=\langle k,d\rangle=0$. Put $\hat k=k/|k|$, and let
$\langle\cdot,\cdot\rangle$, $|\cdot|$ and $\times$ be the inner product, norm
and cross product of [[def-euclidean-inner-product]] and
[[def-cross-product-in-r3]]. Then:

(a) [Trace] At every fixed $x$ one has
$E(x,t)=a\cos\theta-d\sin\theta$ with $\theta=\theta(x,t)$. The curve
$\gamma:\mathbb R\to\mathbb R^3$, $\gamma(\theta):=a\cos\theta-d\sin\theta$,
lies in the transverse plane
$k^\perp=\{v\in\mathbb R^3:\langle k,v\rangle=0\}$; it is the image of the unit
circle $S^1=\{(u_1,u_2)\in\mathbb R^2:u_1^2+u_2^2=1\}$ under the $\mathbb R$-linear
map $(u_1,u_2)\mapsto u_1a-u_2d$; it is $2\pi$-periodic in the phase parameter
$\theta$ and satisfies $\gamma(\theta+\pi)=-\gamma(\theta)$, while the map
$t\mapsto E(x,t)$ has time period $T=2\pi/\omega$. The curve $\gamma$ is
called the **polarization trace** at $x$; it does not depend on $x$, so the
classification below is the same at every point.

(b) [Classification] Exactly one of the following three cases holds.

(i) **Linear polarization**: $\dim_{\mathbb R}\operatorname{span}\{a,d\}\le1$.
When $\dim\operatorname{span}\{a,d\}=1$, the trace is a nontrivial closed
segment in that span, traversed twice per period; when $a=d=0$, the trace is
the single point $\{0\}$ and $(E,B)$ is the zero wave.

(ii) **Circular polarization**: $|a|=|d|>0$ and $\langle a,d\rangle=0$. The
trace is the circle of radius $|a|$ in $k^\perp$, and $|E(x,t)|=|a|$ for all
$(x,t)\in\mathbb R^3\times\mathbb R$.

(iii) **Elliptical (nondegenerate, noncircular) polarization**:
$\dim\operatorname{span}\{a,d\}=2$ and not (ii). Here a **nondegenerate ellipse centred at $0$** in a real plane $P$ means
the set $L(S^1)$ for a real-linear isomorphism $L:\mathbb R^2\to P$.
The trace is such an ellipse in $\operatorname{span}\{a,d\}$, and the
origin lies in the relative interior of the enclosed region
$L(\{u\in\mathbb R^2:|u|\le1\})$ in that plane. If in addition $\langle a,d\rangle=0$, the
parametrization is along principal axes and the semiaxis lengths are $|a|$ and
$|d|$; the general principal-axis computation is not asserted by this item.

(c) [Handedness] For $a,d\in k^\perp$, the cross product $a\times d$ is
orthogonal to $a$ and to $d$
([[lem-cross-product-is-bilinear-alternating-and-orthogonal]]), hence parallel
to $k$; define the **helicity sign**
$H:=\langle a\times d,\hat k\rangle\in\mathbb R$, whose sign is taken in the
order of [[def-real-order]]. One has $H=0$ exactly in the linear case (i), and
$H\ne0$ otherwise. This library calls the polarization **right-handed** when
$H<0$ and **left-handed** when $H>0$. Geometrically, $H<0$ means that at fixed
$x$ the electric vector rotates clockwise as seen by an observer facing the
incoming wave (looking along $-\hat k$), and $H>0$ means counterclockwise;
here the screen orientation is fixed by any positive orthonormal triad
$(u,v,\hat k)$, with $u$ to the right and $v$ up for that observer.
Equivalently, $\langle E(x,t)\times\partial_tE(x,t),\hat k\rangle=\omega H$ for
every $(x,t)$. The names "right" and "left" handedness are conventional and
both conventions occur in the literature, so later statements in this library
use only the sign of $H$.

(d) [Status] This is a classification definition. It introduces the trace,
the three cases and the sign $H$, and asserts no field equation, no
propagation, energy or empirical content. The magnetic amplitude enters only
through the two amplitude conditions $k\cdot e=0$ and $b=k\times e/\omega$
recalled above; the definition covers the zero wave, both on and off the
dispersion relation, and no non-plane or non-transverse field is classified.

### Well-definedness and conventions

The real vectors $a,d$ are well defined by the componentwise real and
imaginary parts of $e$; because $k$ is real, taking real and imaginary parts of
$k\cdot e=\sum_jk_j(a_j+id_j)$ gives $\langle k,a\rangle=0$ and
$\langle k,d\rangle=0$, so $a,d\in k^\perp$ and $\gamma$ takes values in
$k^\perp$. The trace formula in (a) is Euler's formula
$\exp(i\theta)=\cos\theta+i\sin\theta$ of [[thm-eulers-formula]] together with
the field arithmetic on the right-hand side of
$E=\operatorname{Re}\bigl((a+id)(\cos\theta+i\sin\theta)\bigr)
=\operatorname{Re}\bigl((a\cos\theta-d\sin\theta)+i(a\sin\theta+d\cos\theta)\bigr)$
and the real-linearity of $\operatorname{Re}$: the real part is
$a\cos\theta-d\sin\theta$, while the imaginary part is not a field. Since
$\theta(x,t)=k\cdot x-\omega t$ and $\omega>0$, at fixed $x$ the map
$t\mapsto\theta$ is a bijection onto $\mathbb R$; hence the set traced by
$E(x,t)$ as $t$ varies is the full image $\gamma(\mathbb R)$, independently of
$x$, and $\gamma$ is $2\pi$-periodic with $\gamma(\theta+\pi)=-\gamma(\theta)$
because $\cos$ and $\sin$ shift by a sign under $\theta\mapsto\theta+\pi$. The
time period is $T=2\pi/\omega$, the least positive $s$ with
$\theta(x,t+s)=\theta(x,t)-2\pi$ for all $(x,t)$; it is distinct from the
phase-parameter period $2\pi$ of $\gamma$.

For the classification, "exactly one of the three cases holds" is checked
case by case: if $\dim\operatorname{span}\{a,d\}\le1$ then (i); otherwise
$\dim=2$, and either $|a|=|d|>0$ with $\langle a,d\rangle=0$, which is (ii),
or not, which is (iii). In case (i) with $\dim=1$, write $d=\lambda a$ with
$a\ne0$ (or symmetrically $a=\mu d$); then
$\gamma(\theta)=(\cos\theta-\lambda\sin\theta)a$, whose image is the segment
$\{sa:|s|\le\sqrt{1+\lambda^2}\}$ in $\mathbb R a$, traversed once in each direction between successive extrema of the scalar
factor (each such phase interval has length $\pi$). In case (ii),
expanding with the bilinearity of the inner product
([[def-euclidean-inner-product]]) gives
$|u_1a-u_2d|^2=u_1^2|a|^2+u_2^2|d|^2-2u_1u_2\langle a,d\rangle=|a|^2$
whenever $|a|=|d|$, $\langle a,d\rangle=0$ and $u_1^2+u_2^2=1$, so the image
of the unit circle under $(u_1,u_2)\mapsto u_1a-u_2d$ is contained in the
circle of radius $|a|$ in the plane $\operatorname{span}\{a,d\}$; conversely,
for every $v$ in that plane with $|v|=|a|$ the coordinates
$u_1=\langle v,a\rangle/|a|^2$ and $u_2=-\langle v,d\rangle/|d|^2$ satisfy
$u_1^2+u_2^2=1$ and $u_1a-u_2d=v$, because $a/|a|$ and $d/|d|$ are orthonormal
and $v=\langle v,a/|a|\rangle(a/|a|)+\langle v,d/|d|\rangle(d/|d|)$; hence the
trace is exactly that circle. In case (iii) the vectors $a,d$
are linearly independent, so $T:(u_1,u_2)\mapsto u_1a-u_2d$ is a linear
isomorphism of $\mathbb R^2$ onto the two-dimensional plane
$\operatorname{span}\{a,d\}$; the image of the closed unit disk under $T$ is a
compact convex subset with nonempty interior in that plane, the image of the
open disk is its nonempty interior, and the image of the unit circle is its
boundary, so the trace is a nondegenerate ellipse centred at
$0=T(0)$ with the origin in the relative interior of that enclosed region.
The trace itself is its boundary and has empty interior in the plane. If moreover
$\langle a,d\rangle=0$, then along the principal axes $a,d$ the parametrization
$u_1a-u_2d$ has the stated axis lengths because the two summands are
orthogonal: $|u_1a-u_2d|^2=u_1^2|a|^2+u_2^2|d|^2$; no computation of
principal axes for general $a,d$ is used or claimed.

For (c), the cross product $a\times d$ is orthogonal to both factors and
alternating ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]]), and the real Gram identity
[[thm-cross-product-norm-is-the-two-vector-gram-determinant]] says
$|a\times d|^2>0$ exactly when $a,d$ are linearly independent. Thus
$a\times d=0$ holds exactly when $a$ and $d$ are linearly dependent, that is,
in case (i); then $H=0$. Otherwise $\dim\operatorname{span}\{a,d\}=2$, and
since $\operatorname{span}\{a,d\}\subseteq k^\perp$ are both two-dimensional,
they are equal; being orthogonal to $a$ and $d$, the vector $a\times d$ is
orthogonal to $k^\perp$, whose orthogonal complement in $\mathbb R^3$ is the
line $\mathbb R k$, so $a\times d=\mu k$ for a real $\mu$ and
$H=\mu|k|\ne0$. For the rotation identity, differentiating
$E=a\cos\theta-d\sin\theta$ along $t$ with $\partial_t\theta=-\omega$ gives
$\partial_tE=\omega(a\sin\theta+d\cos\theta)$, so
$E\times\partial_tE
=\omega(a\cos\theta-d\sin\theta)\times(a\sin\theta+d\cos\theta)
=\omega\bigl((\cos^2\theta+\sin^2\theta)a\times d
+\cos\theta\sin\theta(a\times a-d\times d)\bigr)=\omega\,a\times d$
by bilinearity and alternation, and taking the inner product with $\hat k$
gives the displayed identity. As a concrete check of the convention, take
$\hat k=e_3$ with the positive orthonormal screen triad $(e_1,e_2,e_3)$, so
that $e_1$ points right and $e_2$ up for the observer looking along $-e_3$;
then $e=e_1-ie_2$ has $a=e_1$, $d=-e_2$,
$E(0,t)=\cos(\omega t)e_1-\sin(\omega t)e_2$ (clockwise), and
$H=\langle e_1\times(-e_2),e_3\rangle=-1<0$, consistently with the
right-handed naming. This fixes the sign convention of the cited treatment:
the source writes $E_0=\alpha-i\beta$ and calls the polarization right-handed
if and only if $\beta=\hat k\times\alpha$, which under $a=\alpha$,
$d=-\beta$ is $H=-|\alpha|^2<0$ in the circular case.

Finally, all amplitudes $e,b$ and vectors $k,a,d$ are constant and all
quantities above are computed from them by the operations of the cited items;
no limit, no integral and no field equation is used, and the definition is at
the level of classification only.
