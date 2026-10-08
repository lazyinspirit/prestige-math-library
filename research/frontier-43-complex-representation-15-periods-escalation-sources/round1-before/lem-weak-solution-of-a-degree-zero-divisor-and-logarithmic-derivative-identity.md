---
id: lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity
kind: lemma
title: Weak solutions of a degree-zero divisor and the logarithmic-derivative identity
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
deps:
  - cor-closed-differential-forms-are-locally-exact
  - cor-complex-analytic-functions-have-local-primitives
  - cor-holomorphic-logarithm-has-the-logarithmic-derivative
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - cor-residue-theorem-circle
  - def-axiom-of-choice
  - def-bigraded-complex-differential-forms
  - def-complex-contours-reversal-concatenation-and-closedness
  - def-complex-line-integral-over-a-rectifiable-path
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-integral-of-an-oriented-chart-supported-top-form
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
  - def-logarithmic-derivative-meromorphic-function
  - def-meromorphic-differential-on-a-riemann-surface
  - def-meromorphic-function-complex-domain
  - def-smooth-differential-k-form
  - def-wirtinger-derivatives
  - def-wedge-product-of-differential-forms
  - lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff
  - lem-stokes-for-piecewise-smooth-surface-regions
  - lem-logarithmic-derivative-order-residue
  - thm-d-dbar-decomposition-and-identities
  - thm-residue-theorem-compact-riemann-surface
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces, GTM 81, 4th corrected printing"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2, §§20.1-20.5: weak solutions, Lemma 20.3 and Lemma 20.5 with the identity $\\int_c\\omega=\\frac{1}{2\\pi i}\\int_X\\frac{df}{f}\\wedge\\omega$, printed pp. 159-163."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 15, Lemmas 15.10 and 15.12, printed pp. 131-133: smooth solutions of (f)=D and $\\int_X\\frac{df}{f}\\wedge\\omega=2\\pi i\\int_C\\omega$."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
smooth-partition interfaces used to glue the local constructions. Let $X$ be a
compact connected Riemann surface and let
$D=\sum_{j=1}^{k}\bigl(Q_j-P_j\bigr)$ be a divisor of degree zero written as a
sum of point differences
([[def-divisor-principal-and-canonical-divisor-riemann-surface]]); let
$c=\sum_{j=1}^{k}\gamma_j$ be a $1$-chain of continuous curves $\gamma_j$
from $P_j$ to $Q_j$, so that $\partial c=D$ in the sense that the boundary of
$\gamma_j$ is $Q_j-P_j$ as a divisor. Then:

1. **Weak solution.** There exists a **weak solution** of $D$, i.e. a function
$f$ on $X$ that is smooth on $X\setminus|D|$ and extends across $|D|$ with the
local behaviour
$$f=z^{-n_p}h\ \ \text{near a pole }p\ (n_p=-D(p)>0),\qquad f=z^{n_p}h\ \ \text{near a zero }p\ (n_p=D(p)>0),$$
with $h$ smooth and nowhere vanishing near $p$.
2. **Logarithmic-derivative identity.** For every closed smooth complex
$1$-form $\omega$ on $X$,
$$\frac{1}{2\pi i}\int_X\frac{df}{f}\wedge\omega=\int_c\omega .$$
For every holomorphic $\omega\in\Omega(X)$ this is the same as
$\frac{1}{2\pi i}\int_X\frac{\bar\partial f}{f}\wedge\omega=\int_c\omega$,
where $\bar\partial f/f=\bar\partial\log f$ is smooth even at the points of
$|D|$ ([[def-bigraded-complex-differential-forms]],
[[def-wirtinger-derivatives]],
[[thm-d-dbar-decomposition-and-identities]]).
3. **Uniqueness up to a smooth factor.** If $f$ and $g$ are two weak solutions
of the same divisor $D$, then the quotient $g/f$ is smooth and nowhere
vanishing on $X$; the construction therefore produces a weak solution unique up
to multiplication by such a factor.

## Facts & Assumptions

**Given:** Full AC, a compact connected Riemann surface $X$, a degree-zero divisor $D=\sum_j(Q_j-P_j)$ with a chain $c=\sum_j\gamma_j$ of continuous curves from $P_j$ to $Q_j$, and a closed smooth complex $1$-form $\omega$ on $X$.

[F1] Every closed smooth complex $1$-form is locally exact; on a coordinate disk $V$ with coordinate $z$ there is a smooth $g$ on a neighbourhood of the closed disk with $\omega=dg$ there, and for a curve $\gamma$ in that disk, $\int_\gamma dg=g(\gamma(1))-g(\gamma(0))$ ([[cor-closed-differential-forms-are-locally-exact]], [[def-complex-line-integral-over-a-rectifiable-path]], [[def-complex-contours-reversal-concatenation-and-closedness]]).

[F2] On the slit plane $\mathbb C\setminus(-\infty,0]$ the principal logarithm $\operatorname{Log}$ is holomorphic with derivative $1/\zeta$ ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]).

[F3] For a compact set inside a bounded open set there is a smooth cutoff $\psi$ with $0\le\psi\le1$, $\psi=1$ on the compact set and compact support in the open set ([[lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff]]).

[F4] If $f$ is smooth and nowhere vanishing near a point $p$ and $k\in\mathbb Z$, then $f=z^{k}u$ with $u$ smooth and nowhere zero, and $df/f=k\,dz/z+du/u$ in the coordinate $z$; the singular part $k\,dz/z$ has circle integral $2\pi i k$ times the value of a test function, by the residue theorem ([[def-logarithmic-derivative-meromorphic-function]], [[lem-logarithmic-derivative-order-residue]], [[cor-residue-theorem-circle]], [[cor-holomorphic-logarithm-has-the-logarithmic-derivative]]).

[F5] For a smooth complex $1$-form $\eta$ on an oriented surface and a compact regular region with piecewise smooth boundary, Stokes' theorem holds: $\int_R d\eta=\int_{\partial R}\eta$, with the induced boundary orientation ([[lem-stokes-for-piecewise-smooth-surface-regions]], [[def-smooth-differential-k-form]], [[def-integral-of-an-oriented-chart-supported-top-form]]).

[F6] The wedge product, the integral of compactly supported top forms on an oriented manifold, and the sum of integrals over a partition of the domain into finitely many regions are defined as usual ([[def-wedge-product-of-differential-forms]], [[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]], [[def-smooth-differential-k-form]]).

[F7] For a holomorphic differential $\omega$ and a smooth function $f$, the $(1,0)$-part of $df/f$ wedged with $\omega$ vanishes, so $(df/f)\wedge\omega=(\bar\partial f/f)\wedge\omega$; here $df=\partial f+\bar\partial f$ and $\bar\partial f/f$ is smooth where $f\ne0$, hence also across $|D|$ after cancellation of the local powers ([[thm-d-dbar-decomposition-and-identities]], [[def-wirtinger-derivatives]], [[def-bigraded-complex-differential-forms]]).

[F8] On a compact Riemann surface a meromorphic function has finitely many zeros and poles, counted with order; local primitives of a holomorphic function exist on discs ([[def-meromorphic-differential-on-a-riemann-surface]], [[def-meromorphic-function-complex-domain]], [[cor-complex-analytic-functions-have-local-primitives]], [[thm-residue-theorem-compact-riemann-surface]]).

[F9] Full AC is used through the smooth-partition/cutoff interfaces of [F3] and the finitely many chart selections; the identities themselves are then finite computations ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 We first build a model weak solution of the divisor $Q-P$ for two points $P\ne Q$ inside one coordinate disk $V$ with coordinate $z$, $z(P)=a$, $z(Q)=b$. Choose $0<r<r'<1$ with the closed disk of radius $r'$ inside $V$ containing the coordinate image of the whole curve $\gamma$ from $P$ to $Q$ (shrinking $V$ if necessary), and a cutoff $\psi$ with $\psi=1$ on $\{|z|\le r\}$ and support in $\{|z|<r'\}$, which exists by [F3]. Put $L(z):=\operatorname{Log}\frac{z-b}{z-a}$ for $z\notin[a,b]$, which is holomorphic off the slit with $\exp L(z)=\frac{z-b}{z-a}$ by [F2], and define $f_0(z):=\exp(\psi(z)L(z))$ for $z\notin[a,b]$ and $f_0(z):=\frac{z-b}{z-a}$ on the slit inside the disk; the two definitions agree where $\psi=1$, and we extend $f_0$ by $1$ on $X\setminus V$, which is consistent because $\psi=0$ near $\partial V$. Then $f_0$ is smooth on $X\setminus\{P\}$, has a simple zero at $Q$ and a simple pole at $P$, and equals $1$ off $V$. [F2, F3]

1.2 We prove the identity in the model case. Let $\omega=dg$ near the closed disk of radius $r'$, with $g\in C^\infty(X)$ compactly supported: multiply a local primitive of $\omega$ by a cutoff and extend by zero, which does not change $dg$ on the disk by [F1]. Writing $Y:=X\setminus[a,b]$ and $\eta:=\psi L$, a smooth function on $Y$ with $d\eta=df_0/f_0$ there, Stokes [F5] applied to the complement of a thin neighbourhood of the slit and the constant jump $2\pi i$ of $\eta$ across the slit (the slit is exactly the preimage of the negative real axis under $z\mapsto\frac{z-b}{z-a}$, and $\operatorname{Log}$ jumps by $2\pi i$ there) give $\int_X\frac{df_0}{f_0}\wedge\omega=\int_Y d\eta\wedge dg=2\pi i\int_\gamma dg=2\pi i(g(Q)-g(P))$; the boundary terms at the slit ends and at infinity vanish in the limit, as $\eta$ is locally bounded up to a logarithm while $dg$ stays bounded and $g$ is compactly supported. Since $\omega=dg$ near the image of $\gamma$, [F1] gives $\int_\gamma\omega=g(Q)-g(P)$, hence $\frac{1}{2\pi i}\int_X\frac{df_0}{f_0}\wedge\omega=\int_\gamma\omega$. [F1, F4, F5, F6]

1.3 For claim 3, let $f$ and $g$ be weak solutions of $D$. Near a support point both have the local form $z^{n_p}h_f$ and $z^{n_p}h_g$ with the same integer $n_p=D(p)$ and smooth nowhere-vanishing factors, so $g/f=h_g/h_f$ is smooth and nowhere vanishing near $p$; away from $|D|$ both functions are smooth and nowhere vanishing. Hence $g/f$ is smooth and nowhere vanishing on all of $X$. [F8]

2.1 For a general divisor and chain, subdivide every curve $\gamma_j$ into finitely many pieces $\gamma_{j\ell}$ from $P_{j\ell}$ to $Q_{j\ell}$, each contained in a coordinate disk $V_{j\ell}$ meeting $|D|$ in at most one point, and apply step 1.1 to each piece, obtaining weak solutions $f_{j\ell}$ of $Q_{j\ell}-P_{j\ell}$ with $f_{j\ell}=1$ off $V_{j\ell}$. The product $f:=\prod_{j,\ell}f_{j\ell}$ is smooth on $X\setminus|D|$; near a support point $p$ exactly the factors with support point $p$ contribute a local power $z^{\pm1}$, so $f=z^{n_p}h$ with $h$ smooth and nowhere vanishing, while away from $|D|$ the product is smooth and nonzero. Since the logarithmic derivative of a product is the sum, $df/f=\sum_{j,\ell}df_{j\ell}/f_{j\ell}$ where the sum is locally finite because every factor equals $1$ off its own disk. [F4, step 1.1]

3.1 Summing the model identities of step 1.2 over the finitely many pieces and using additivity of the curve integrals over the subdivision gives, for every closed smooth complex $1$-form $\omega$ on $X$, $\frac{1}{2\pi i}\int_X\frac{df}{f}\wedge\omega=\sum_{j,\ell}\frac{1}{2\pi i}\int_X\frac{df_{j\ell}}{f_{j\ell}}\wedge\omega=\sum_{j,\ell}\int_{\gamma_{j\ell}}\omega=\int_c\omega$, which is claim 2 for closed smooth forms. For holomorphic $\omega$, [F7] replaces $df/f$ by $\bar\partial f/f$, which is smooth across $|D|$ because the local powers cancel in the quotient $df/f$; this gives the second displayed identity. [F6, F7, step 1.2, step 2.1]

4.1 Claims 1, 2 and 3 are steps 2.1, 3.1 and 1.3 respectively; the construction is finite, the only non-finite selections are the smooth cutoffs and local primitives covered by the inherited AC of [F9], and no additional arbitrary choice occurs. [F9, step 2.1, step 3.1, step 1.3] ∎

## Source notes

The construction and the identity are Forster's §§20.1-20.5 (*Lectures on
Riemann Surfaces*, printed pp. 159-163): the local model
$\exp(\psi\log\frac{z-b}{z-a})$, the multiplication of local solutions along a
subdivision of the curve, and the identity
$\int_c\omega=\frac{1}{2\pi i}\int_X\frac{df}{f}\wedge\omega$ via Stokes and the
residue of $df/f$ at the zeros and poles. McMullen's Lemmas 15.10 and 15.12
(printed pp. 131-133) give the same statement in the form
$\int_X\frac{df}{f}\wedge\omega=2\pi i\int_C\omega$. The item proves the
endpoint and jump conventions explicitly and does not invoke any smoothing of
the chain.

Unfinished suppliers and exact uses: none of the direct suppliers is an in-run
item of this pair, but `def-divisor-principal-and-canonical-divisor-riemann-surface`
and the residue and Stokes interfaces are published library items whose rows
are recorded in the batch-11 cross-batch input. If those published decisions
change, this item's uses must be reconciled.

The scaffold's edges to `def-smooth-map-between-manifolds-with-boundary`,
`thm-smooth-partitions-of-unity-exist-on-manifolds` and
`thm-stokes-theorem-for-smooth-singular-chains` were replaced by the direct
cutoff and piecewise-smooth Stokes interfaces actually used; the scaffold's
`def-complex-line-integral-over-a-rectifiable-path` edge is retained only for
the primitive-difference computation of [F1], which is a plane-domain
statement.
