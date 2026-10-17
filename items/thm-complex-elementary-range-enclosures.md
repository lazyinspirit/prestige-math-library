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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Rump, Rigorous and Portable Standard Functions, §10"
      url: "https://www.tuhh.de/ti3/paper/rump/Ru01b.pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §§5.1–5.5 and 7"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

For any finite complex rectangle on which the principal branch is defined,
every finite output for a requested complex node of
[[alg-certified-elementary-range-evaluation]] for $\exp$ or
$\operatorname{Log}$ contains the exact image. For the same typed DAG and
designated complex output node, nested input rectangles on the same admissible
branch, fixed constant enclosures, and the same finite dyadic format and
truncation index give nested finite enclosures whenever both calls return
finite results. Rectangles meeting zero, the negative real
branch cut, or an unresolved quadrant return the declared domain or
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

1.1 Let $Z=X+iY$ be a rectangle. By [L1], its exact exponential has real and imaginary parts $\exp(X)\cos(Y)$ and $\exp(X)\sin(Y)$. The real enclosures in [L2] contain these three ranges, and rectangle multiplication and addition preserve their exact component images by [L3]. Therefore the resulting rectangle contains $\exp(Z)$. [given, L1, L2, L3, algebra]

1.2 For a principal-log branch, subdivide $Z$ into rectangles of fixed signs of the real and imaginary coordinates, with separate pieces on the coordinate axes. In a nonzero quadrant, $|z|=\sqrt{x^2+y^2}$ is enclosed by [L2]–[L3], hence $\ln|z|$ is enclosed by [L2]. The quotient is enclosed by [L3] and arctangent by [L2]. In quadrant I use $\arctan(y/x)$; in quadrant IV use $-\arctan((-y)/x)$; in quadrant II use $\pi-\arctan(y/(-x))$; and in quadrant III use $-\pi+\arctan((-y)/(-x))$. From [L4] and $\sin^2(A(t))+\cos^2(A(t))=1$, positivity of $\cos(A(t))$ gives $\cos(A(t))=1/\sqrt{1+t^2}$ and $\sin(A(t))=t/\sqrt{1+t^2}$ for $t>0$. Substituting $t=y/x$ in quadrant I gives $(\cos\operatorname{Arg}z,\sin\operatorname{Arg}z)=(x/|z|,y/|z|)$. In quadrant IV, evenness/oddness from [L1] gives the same coordinate identity with $y<0$. The addition identities shift the angle in quadrant II by $\pi-A(t)$, reversing only the cosine sign, and in quadrant III by $-\pi+A(t)$, reversing both signs; substitution of the positive coordinate ratios again gives $(x/|z|,y/|z|)$. The range of $A$ in [L4] places these angles in the respective subintervals of $(-\pi,\pi)$, so they are the principal arguments. On the admissible closure of quadrant I the argument lies in $[0,\pi/2]$; on quadrants II, III and IV it lies respectively in $[\pi/2,\pi]$, $[-\pi,-\pi/2]$ and $[-\pi/2,0]$. Since $p_-\le\pi\le p_+$ and $p_->0$, these sets are contained respectively in the algorithm's fixed sectors $S_{\rm I},S_{\rm II},S_{\rm III},S_{\rm IV}$. A finite raw ratio-based argument interval contains each exact argument by [L2]–[L3], so intersecting it with its sector retains every exact argument. Each nonempty quadrant piece has an actual point and hence an argument in that intersection; an empty intersection cannot be used for a success claim and is explicitly rejected. When the denominator reaches zero, the sector alone is a sound enclosure. The common final outward conversion $H$ preserves these containments; an overflow gives no finite claim. On the positive real axis the exact argument is zero, and on the positive and negative imaginary axes it is respectively $\pi/2$ and $-\pi/2$. Thus $H([0,0])$, $H(P_N/2)$ and $H(-P_N/2)$ enclose the axis values. The initial domain test excludes the origin and negative real axis. The strict-sign pieces, their closures and these axis pieces therefore cover every admissible point. The radial enclosure established above and the converted argument enclosure jointly contain its principal logarithm; taking the coordinatewise hull over every finite piece contains the full image. Any failed piece prevents a finite hull return. [given, L1, L2, L3, L4, construct, algebra]

2.1 Fix the DAG, designated output, constant enclosures, format and $N$ in the Statement, so both calls use the same $P_N$, sectors and conversion $H$. Every nonempty strict-sign piece of a smaller input rectangle, after closure, is contained in the corresponding piece of the larger rectangle. Every axis piece likewise has a corresponding containing axis piece, with the same argument interval. The radial expression $\ln\sqrt{X^2+Y^2}$ preserves inclusion on these nested pieces by [L2]–[L3]. For a quadrant whose denominator excludes zero in both calls, outward quotients and the fixed real arctangent evaluator give nested finite raw argument intervals $A\subseteq A'$ by [L2]–[L3]. Exact translations by the same $P_N$ and sign changes in the quadrant formulas preserve this inclusion. Intersection with the same sector gives $A\cap S_q\subseteq A'\cap S_q$. The greatest-lower and least-upper rounding definitions make $H$ inclusion-preserving, hence the converted argument intervals are nested as well. If enlargement changes a ratio branch to a zero-denominator coarse branch, the smaller preconversion interval is $A\cap S_q\subseteq S_q$, and therefore $H(A\cap S_q)\subseteq H(S_q)$. If both branches are coarse they use the same $H(S_q)$. The reverse change under enlargement is impossible: a containing denominator interval cannot exclude zero when the smaller one contains it. These cases exhaust quadrant branch transitions. Axis pieces remain present under enlargement and use the identical converted axis intervals, so their corresponding rectangles are nested too. Taking coordinatewise hulls preserves the inclusions for all corresponding pieces, including any additional pieces in the larger call. Complex exponential preserves inclusion through its fixed real component evaluations and rectangle operations in step 1.1. Together with [L2]–[L3], these primitive results give soundness and inclusion for the same finite typed DAG by induction in its prescribed topological order; fixed input-independent constants start the induction, and every designated output inherits it. A rectangle meeting zero or the negative real branch cut at a Log node returns `domain-error`; a failed piece, empty argument intersection or failed conversion returns its specified non-finite status. Such a branch gives no finite enclosure or nesting claim. [step 1.1, step 1.2, L1, L2, L3, L4, algebra, induction] ∎
