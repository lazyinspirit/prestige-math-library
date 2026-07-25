# Plan amendments forced by the real-analysis sweep, Part III (exp / pi / trig / complex)

Source: research agent Part III. Parts I and II being recovered to
research-realanalysis-part{1,2,3}.md. This file records only what CHANGES my
draft in plan-draft-items-8-13.md.

## A. Corrections to my draft (I had these wrong or missing)

1. **Rudin attribution.** There is no "Prologue" in *Principles of Mathematical
   Analysis*; the Prologue is in *Real and Complex Analysis*. The two books prove
   the existence of a positive zero of cos DIFFERENTLY. Fix every citation.

2. **The pi convention is genuinely split and must be its own item.**
   Rudin/Landau/Bartle-Sherbert: pi := 2 * (smallest positive zero of cos).
   Tao (Def 4.7.4): pi := inf{x>0 : sin x = 0}, no factor of 2.
   They agree because sin 2x = 2 sin x cos x puts the first zero of sin at
   exactly twice the first zero of cos. ADD `lem-first-zero-sin-is-twice-cos`
   and state both conventions in the pi definition's Remarks.

3. **A curve is a MAPPING, not a point set** (Rudin Def 6.26, verbatim: "It
   should be noted that we define a curve to be a mapping, not a point set").
   Two curves with the same range can have different lengths. My arc-length
   definition glossed this. ADD the distinction to `def-curve` + an example item
   (a path traversing a segment twice has twice the length of its range).

4. **Bartle-Sherbert's bound is sqrt(2) < gamma < sqrt(6 - 2 sqrt 3)**, giving
   2.828 < pi < 3.185. (Not the (sqrt2, sqrt3) I would have guessed.)

5. **Abbott never defines pi or the trigonometric functions at all**, and builds
   exp/log only as Exercises 8.4.2-8.4.6. Zorich does not analytically define pi
   in Volume I. Do not cite either as a source for these.

## B. The single most important finding: the circularity is REAL and NAMED

The standard calculus proof that lim_{x->0} sin x / x = 1, via
sin theta < theta < tan theta and the squeeze theorem, **compares areas of
circular sectors and is therefore circular** when pi and arc length are not yet
defined. Identified precisely in arXiv:1302.1167, which surveys the four
rigorous repairs (power series, ODE, arcsin as an integral, rigorous arc length).

ACTION: this becomes a headline `fs-` item on page 9A, and the motivating
paragraph of the page summary. It is the reason the whole analytic program on
that page exists. Hardy's §158 remark is the quotable statement of the same
point: the geometric definition "rests on an unproved assumption" (that angles
admit numerical measure), and arc length is unavailable because "we have not
proved that the arc of a curve, even of a circle, possesses a length."

## C. exp: six definitions becomes TEN

Keep E1-E6 as drafted, and add:
- **E7 Rudin sup-over-rationals**: e^x := sup{e^p : p in Q, p < x}. (This WAS my
  E5.)
- **E8 Tao limit-over-rationals**: x^alpha := lim x^{q_n} for any rationals
  q_n -> alpha. **Distinct from E7**: Tao's supremum appears only at the n-th
  root stage; the real exponent is a LIMIT, not a sup. Two separate items.
- **E9 Bourbaki** (*Topologie Generale* V §4): exp is the unique continuous
  isomorphism of topological groups (R,+) -> (R_{>0},*) normalized at 1.
  NOTE: this definition needs the TOPOLOGY track (topological group), so it is a
  natural cross-category link, and a reason to schedule T2/T3 before 9A if we
  want it proved rather than remarked.
- **E10 Landau** (Def 12): log x := lim 2^n (x^{1/2^n} - 1), then e by log e = 1,
  then e^x by log y = x. **No integrals and no series.** The most elementary
  construction in the literature and absent from every surveyed English text.
- **E11 Bartle-Sherbert Picard/Volterra iteration**: E_1(x) = 1+x,
  E_{n+1}(x) = 1 + integral_0^x E_n. The iterates ARE the partial sums of the
  exponential series, so this is E1 reached from the ODE. Worth an item as the
  bridge, plus it is the concrete application of the Banach fixed point theorem
  from T1.

Also add `thm-e-characterizations` collecting the UG-appropriate members of the
16 known characterizations of the number e: sum 1/n!; lim (1+1/n)^n; the unique
e with integral_1^e dt/t = 1; the unique base a with d/dx a^x at 0 equal to 1;
the unique real with (1+1/x)^x < e < (1+1/x)^{x+1} for all x>0; the maximizer of
x^{1/x}; 1/e = lim (1-1/n)^n (the derangement limit); the continued fraction
[2;1,2,1,1,4,1,1,6,1,1,8,...]. (Primorial, Mobius and Pippenger forms are
number-theoretic: remark with reference, do not prove.)

## D. Equivalence web, not a cycle

Record the specific proof routes: 1<=>2 by binomial expansion of (1+x/n)^n
against the partial sums (t_n <= s_n and s_m <= liminf t_n, so
limsup t_n <= e^x <= liminf t_n; negative x via
(1-r/n)^n (1+r/n)^n = (1-r^2/n^2)^n); 1<=>3 by continuity of ln plus the FTC;
1<=>4 by Euler's method; 2<=>4 by induction; 2=>5 by the Cauchy product;
3<=>4 by the chain rule; 5=>4 via f'(x) = f(x) f'(0) and f(0) = f(0)^2;
5<=>6 by induction giving f(n/m) = f(1)^{n/m}; 5=>6 in the Lebesgue-measurable
case via g(x) = integral_0^x f.

## E. Complex caveats: two excellent false statements for page 10A

- **The integral definition E4 does NOT transfer to C**: integration paths are
  not unique, so it holds only mod 2 pi i. `fs-complex-log-by-integral-well-defined`.
- **The functional-equation definition E6 with f(1)=e plus regularity is NOT
  enough over C.** Counterexample: f(x+iy) = e^x (cos 2y + i sin 2y). Repairs:
  add conformality at a point, or add f(i) = cos 1 + i sin 1.
  `fs-functional-equation-determines-complex-exp`.
- **In a Banach algebra e^{A+B} != e^A e^B when AB != BA.** Remark with pointer.
- **No continuous logarithm exists on all of C\{0}** (winding obstruction,
  witnessed by integral over gamma of dz/z = 2 pi i). Theorem, not just a remark.

## F. Cos has a positive zero: six proofs, pick one, keep the rest as examples

| source | argument |
|---|---|
| Rudin R&CA | alternating-series bound **cos 2 < -1/3**, then IVT |
| Rudin PMA | monotone-S contradiction (if C>0 on (0,inf) then S increases and S(x)(y-x) <= C(x)-C(y) <= 2 fails for large y) |
| Tao | cotangent: cot' <= -1 forces cot(x+s) <= cot x - s |
| Lebl | MVT bound y <= 2/sin a + a |
| Bartle-Sherbert | explicit sqrt(2) < gamma < sqrt(6 - 2 sqrt 3) |
| Landau Thm 262 | MVT + cos 2xi = 2 cos^2 xi - 1 <= -1/2, then IVT |

DECISION: make **Rudin R&CA's cos 2 < -1/3** the main proof (cleanest, reuses the
alternating series estimate from pair 2). Bartle-Sherbert's numeric bounds become
an example item giving 2.828 < pi < 3.185.

## G. sin and cos: eleven definitions, not two

power series; via e^{iz}; Re/Im of e^{it}; the ODE system x'=-y, y'=x (or
y''=-y); **inverse-first** from arcsin x := integral_0^x dt/sqrt(1-t^2) or
arctan x := integral_0^x dt/(1+t^2) (Hardy, Appendix III); **sector-area-first**,
A(x) := x sqrt(1-x^2)/2 + integral_x^1 sqrt(1-t^2) dt with cos x the unique
y in [-1,1] with A(cos x) = x/2 (Spivak Ch 15, Apostol §2.7); **axiomatic**
(Apostol Calculus §2.5 Thm 2.3: four properties, namely domain R; cos 0 =
sin(pi/2) = 1 and cos pi = -1; cos(y-x) = cos y cos x + sin y sin x; and
0 < cos x < sin x / x < 1/cos x on (0, pi/2)); geometric; infinite product;
**Bourbaki topological-group** (*TG* VIII §2, the strict morphism R -> U with
kernel normalized so the period is 2 pi); and tan/cot/sec/csc as quotients.

## H. pi: fourteen definitions becomes SIXTEEN, with attributions

- Definition 1 (2 * first zero of cos) is due to **Richard Baltzer**, popularized
  by **Landau** (Def 61 + Thm 262).
- **Weierstrass (1841)** proposed pi/2 = integral_{-1}^{1} dx/sqrt(1-x^2) as THE
  definition. Record as a named historical position.
- ADD: the **isoperimetric characterization** 4 pi A <= L^2 with equality only
  for circles (Hurwitz's Fourier proof works for merely rectifiable curves;
  Schmidt 1938 via Green + Cauchy-Schwarz).
- ADD: **Archimedes' bounds** 3 + 10/71 < pi < 3 + 1/7 from 96-gons.
- Remark-only (do not prove): Gauss-Legendre/Brent-Salamin AGM, Ramanujan,
  Chudnovsky, and the Hilbert-transform normalization characterization.

Irrationality/transcendence: Lambert 1761 via the continued fraction for tan;
Legendre 1794 for pi^2; **Niven 1947** (prove this one); Lindemann 1882 for
transcendence, hence squaring the circle is impossible (remark). Normality of pi
is OPEN.

## I. Trigonometric identities: 27 categories / 187 items (I had ~40)

Part I supplied ~100 in 24 categories. Part III adds eight categories I would
have missed entirely:
(v) reflection in 3pi/4 (6); (vi) conjugate/reflection in pi (6);
(ix) sums of infinitely many angles (2, for absolutely convergent sums);
(xvi) Hermite's cotangent identity, finite products, roots of unity (8);
(xix) linear fractional transformations (2, and f_alpha o f_beta = f_{alpha+beta});
(xxi) Bernoulli/Euler-number series and Bessel expansions (4);
(xxiii) conditional triangle identities (10+, e.g. tan a + tan b + tan c =
tan a tan b tan c when a+b+c = 180 degrees, the projection formula, the law of
cotangents);
(xxvii) calculus, including the lim sin x / x circularity note in §B above.

SCOPE FLAG: the Bessel expansions and Hermite's cotangent identity are past UG
real analysis. Proposed split: prove categories i-xv and xvii-xx and xxiii and
xxvii; state (xxi) Bessel and (xvi) Hermite with references. This is a decision
to put to the owner.

ALSO add: the Chebyshev material (cos n theta = T_n(cos theta),
sin((n+1) theta) = U_n(cos theta) sin theta, the recurrence, orthogonality with
weight 1/sqrt(1-x^2), and T_n / 2^{n-1} as the minimax monic polynomial on
[-1,1]); and the **cotangent partial-fraction expansion with the Herglotz trick**
(Aigner-Ziegler, *Proofs from THE BOOK*), which is an ELEMENTARY substitute for
Mittag-Leffler and therefore lets us prove the sine product and Basel without
complex analysis. That is a significant scope win.

## J. Arc length additions

- BV <=> rectifiable for vector-valued paths, with total variation = arc length.
- V_a^b(f) = integral |f'| for C^1 / absolutely continuous f, but **strictly
  larger** for merely differentiable or merely continuous f. (Sharp, and a good
  counterexample.)
- Arc-length (unit-speed/natural) reparametrization: s(t) = integral_a^t |gamma'|
  is a C^1 diffeomorphism and the reparametrized curve has speed identically 1.
- The metric-space definition Length(gamma) = sup_P sum d(gamma(t_i),
  gamma(t_{i-1})) **belongs on the TOPOLOGY track (T1)**, not only here.
- Lipschitz curves are automatically rectifiable and admit a metric derivative.
- Polar, spherical, cylindrical and Riemannian length formulas.
- **s = r theta is the DEFINITION of the radian**, and C = 2 pi r "is a
  definition of pi" per the Arc length article. Worth an explicit remark.
- History: Torricelli (log spiral 1645), Wren (cycloid 1658), Neile (semicubical
  parabola 1657), Leibniz (catenary 1691), van Heuraet and Fermat independently
  reducing rectification to quadrature (1659/1660).

Non-rectifiability data: Koch curve has perimeter 3s(4/3)^n -> infinity, finite
area 8/5 of the seed triangle, Hausdorff dimension ln4/ln3 = 1.26186. Weierstrass
function: **minimum odd b is 7**; Hausdorff dimension 2 + log_b a, settled only
in **2018**; predecessors Bolzano 1831 and Cellerier c.1860. **No differentiable
space-filling curve can exist.** There exist continuous curves on which every
non-degenerate arc has infinite length.

**Hahn-Mazurkiewicz**: a nonempty Hausdorff space is a continuous image of [0,1]
iff it is compact, connected, locally connected and second countable. This is a
TOPOLOGY theorem -> route it to T4/T5, and cross-link from 9B.

## K. Confirmations (my design was right)

- The **scaling proof that C/d is circle-independent** is exactly as I designed:
  T(x) = c + r x is a similarity, so Lambda(P, T o gamma) = r Lambda(P, gamma)
  for every partition, hence Lambda(T o gamma) = r Lambda(gamma). Then
  Lambda(S^1) = integral_0^{2 pi} |i E(it)| dt = 2 pi by Rudin 6.27. No geometry
  assumed.
- Area scales as r^2, A(1) = 2 integral_{-1}^{1} sqrt(1-x^2) dx = pi, and
  **A = C r / 2 is what forces the SAME pi into both formulas**. Add that as an
  explicit corollary; I had the two facts but not the link.
- Wikipedia explicitly notes the modern practice of defining pi independently of
  circles "to avoid circular reasoning", and that integration is avoided in a
  first analytic definition because differential calculus precedes integral
  calculus. Both support my ordering.
- FTA from Rudin 8.7(d) by the minimum-modulus argument: confirmed.

## L. Cross-track routing (items that belong elsewhere)

- **Cauchy functional equation regularity list** is richer than I had: continuity
  at a point (Darboux 1875), monotonicity on an interval, boundedness above OR
  below on an interval, Lebesgue measurability, graph not dense in R^2. And
  **Solovay: there are models of ZF+DC in which every set of reals is measurable
  and all solutions are linear**, so the Hamel pathology genuinely requires AC.
  -> route the Solovay remark to **F1 (Ordinals, Cardinals, and Choice)**.
- **Picard-Lindelof failure modes** are ideal Banach-fixed-point examples for
  **T1**: y' = y^{2/3}, y(0)=0 has multiple solutions (Peano gives existence
  without uniqueness under mere continuity); y' = y^2, y(0)=1 gives y = 1/(1-t),
  finite-time blow-up (locally Lipschitz gives only local existence). Both y'=y
  and y''=-y satisfy the hypotheses globally.
- **Group-theoretic layer of Euler's formula** for 10A: t -> e^{it} is a
  surjective morphism of topological groups R -> T = S^1 with kernel 2 pi i Z;
  0 -> Z -> R -> T -> 0 is exact; R is the universal cover of S^1 and
  pi_1(S^1) = Z; T = U(1) = SO(2) = R/Z, compact, connected, 1-dimensional, not
  simply connected. Prove the exactness and the kernel; **remark** the covering
  space and pi_1 statements (algebraic topology, out of scope).
- **Riemann surface of log** as the universal cover of C\{0}, biholomorphic to C:
  remark with pointer.

## M. Scope boundary the sweep drew for us (adopt it)

Typically included in a first rigorous course (Rudin Ch 8 is the canonical
boundary), so PROVE: complex power series with Cauchy-Hadamard and term-by-term
differentiation; E(z) entire; the addition theorem by Cauchy product; C and S
from E(ix); the smallest positive zero and pi; 2 pi i periodicity; the bijection
[0, 2 pi) -> S^1; Lambda(S^1) = 2 pi; and the fundamental theorem of algebra.

Typically deferred, so STATE WITH REFERENCE: the multivalued logarithm, branches
and cuts, the Riemann surface; complex powers z^w; Cauchy's theorem, the integral
formula and residues; Liouville, maximum modulus, argument principle, Rouche;
Mittag-Leffler and Weierstrass factorization; analytic continuation; conformality.

Borderline, and we can take them because elementary routes exist: Euler's sine
product and the cotangent partial fractions (Herglotz trick); Basel (Fourier or
Cauchy's cotangent squeeze, both real); Wallis (real, via integral of sin^n);
Stirling; Gamma (Rudin §8.9ff, Bohr-Mollerup log-convexity); the Gaussian
integral (needs Fubini and polar coordinates, so it lands on pair 12 as planned,
NOT in the complex pair).

## N. Outstanding gap in the sweep

Bishop & Bridges constructive treatment of the elementary functions did not
return. Also unfetched: Keith Conrad's blurbs, Korner's *A Companion to
Analysis*, Gowers/Cambridge Part IA notes (though the Cambridge IA theorem list
was extracted from the Dexter Chua notes in Part I). None of these is
load-bearing; the constructive angle is a nice-to-have, not a requirement.
