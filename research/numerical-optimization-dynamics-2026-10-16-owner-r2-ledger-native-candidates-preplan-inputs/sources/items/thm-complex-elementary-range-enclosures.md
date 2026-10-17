---
id: thm-complex-elementary-range-enclosures
kind: theorem
title: Certified complex exponential and principal logarithm enclose their ranges
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [alg-certified-elementary-range-evaluation, thm-real-elementary-range-enclosures, thm-outward-rounded-operations-are-isotone-and-dag-sound, def-outward-rounded-interval-and-ball-operations, def-real-elementary-functions-and-domains, lem-trigonometric-identities-machin-and-range-reduction]
sources:
  references:
    - title: "Rump, Rigorous and Portable Standard Functions, §10"
      url: "https://www.tuhh.de/ti3/paper/rump/Ru01b.pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §§5.1–5.5 and 7"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

For any finite complex rectangle on which the principal branch is defined,
every finite output of [[alg-certified-elementary-range-evaluation]] for
$\exp$ or $\operatorname{Log}$ contains the exact image. For nested rectangles
within the same admissible branch, the canonical quadrant subdivision and
outward operations preserve inclusion. Rectangles meeting zero, the negative
real branch cut, or an unresolved quadrant return the declared domain or
inconclusive status.

## Facts & Assumptions

**Given:** The complex operations in
[[def-outward-rounded-interval-and-ball-operations]], the branch domains in
[[def-real-elementary-functions-and-domains]], the real evaluator in
[[thm-real-elementary-range-enclosures]], and arithmetic soundness in
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]].

[L1] [[def-real-elementary-functions-and-domains]]: for $z=x+iy$,
$\exp z=\exp x(\cos y+i\sin y)$ and
$\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z$ off the nonpositive real
axis, with $\operatorname{Arg}$ given by the listed quadrant and axis
formulas; the defining series make sine odd and cosine even.

[L2] [[thm-real-elementary-range-enclosures]]: finite real enclosures of
$\exp,\ln,\sqrt{\phantom{x}},\sin,\cos,\arctan$ are sound and nested on
their canonical finite branches.

[L3] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: finite
rectangle operations enclose exact complex arithmetic and preserve inclusion.

[L4] [[lem-trigonometric-identities-machin-and-range-reduction]]: for
$A(t)=\arctan t$, $A(t)\in(-\pi/2,\pi/2)$ and $A(t)>0$ for $t>0$,
$\sin(A(t))=t\cos(A(t))$, $\cos(A(t))>0$, and
$\sin^2u+\cos^2u=1$; also
$\sin(\pi-u)=\sin u$, $\cos(\pi-u)=-\cos u$,
$\sin(-\pi+u)=-\sin u$, and $\cos(-\pi+u)=-\cos u$; moreover
$\sin(\pi/2)=1$, $\cos(\pi/2)=0$, and sine is odd while cosine is even.

## Proof

1.1 Let $Z=X+iY$ be a rectangle. By [L1], its exact exponential has real and
imaginary parts $\exp(X)\cos(Y)$ and $\exp(X)\sin(Y)$. The real enclosures in
[L2] contain these three ranges, and rectangle multiplication and addition
preserve their exact component images by [L3]. Therefore the resulting
rectangle contains $\exp(Z)$. [given, L1, L2, L3, algebra]

1.2 For a principal-log branch, subdivide $Z$ into rectangles of fixed signs
of the real and imaginary coordinates, with separate pieces on the coordinate
axes. In a nonzero quadrant, $|z|=\sqrt{x^2+y^2}$ is enclosed by [L2]–[L3],
hence $\ln|z|$ is enclosed by [L2]. The quotient is enclosed by [L3] and
arctangent by [L2]. In quadrant I use $\arctan(y/x)$; in quadrant IV use
$-\arctan((-y)/x)$; in quadrant II use $\pi-\arctan(y/(-x))$; and in
quadrant III use $-\pi+\arctan((-y)/(-x))$. From [L4] and
$\sin^2(A(t))+\cos^2(A(t))=1$, positivity of $\cos(A(t))$ gives
$\cos(A(t))=1/\sqrt{1+t^2}$ and
$\sin(A(t))=t/\sqrt{1+t^2}$ for $t>0$. Substituting $t=y/x$ in quadrant I
gives $(\cos\operatorname{Arg}z,\sin\operatorname{Arg}z)=(x/|z|,y/|z|)$.
In quadrant IV, evenness/oddness from [L1] gives the same coordinate
identity with $y<0$. The addition identities shift the angle in quadrant II
by $\pi-A(t)$, reversing only the cosine sign, and in quadrant III by
$-\pi+A(t)$, reversing both signs; substitution of the positive coordinate
ratios again gives $(x/|z|,y/|z|)$. The range of $A$ in [L4] places these
angles in the respective subintervals of $(-\pi,\pi)$, so they are the
principal arguments. On the
positive real axis the argument is zero, while the imaginary axes use
$\pm\pi/2$. [given, L1, L2, L3, L4, construct]

1.3 Each canonical sign piece intersecting a smaller rectangle is contained
in the corresponding piece for a larger rectangle, so [L2]–[L3] preserve
inclusion on a common admissible branch. If a rectangle meets zero, the
negative real branch cut, or a fixed sign piece cannot be certified, the
algorithm returns a non-finite status; hence it does not assert an invalid
finite enclosure. [step 1.1, step 1.2, L2, L3, L4, algebra] ∎

