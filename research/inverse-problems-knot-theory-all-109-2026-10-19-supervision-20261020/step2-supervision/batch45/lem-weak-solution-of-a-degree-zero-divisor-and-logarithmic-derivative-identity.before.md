---
id: lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity
kind: lemma
title: Weak solutions of a degree-zero divisor and the logarithmic-derivative identity
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
deps:
  - cor-closed-differential-forms-are-locally-exact
  - cor-complex-analytic-functions-have-local-primitives
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - cor-residue-theorem-circle
  - def-axiom-of-choice
  - thm-heine-borel-rn
  - thm-lebesgue-number-lemma
  - lem-finite-choice
  - def-bigraded-complex-differential-forms
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-integral-of-an-oriented-chart-supported-top-form
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
  - def-logarithmic-derivative-meromorphic-function
  - def-meromorphic-differential-on-a-riemann-surface
  - def-meromorphic-function-complex-domain
  - def-smooth-differential-k-form
  - def-wirtinger-derivatives
  - def-wedge-product-of-differential-forms
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
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
  audited: "2026-10-08"
  precheck: pass
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
$f$ on $X$ that is smooth and nowhere zero on $X\setminus|D|$ and extends across $|D|$ with the
local behaviour
$$f=z^{-n_p}h\ \ \text{near a pole }p\ (n_p=-D(p)>0),\qquad f=z^{n_p}h\ \ \text{near a zero }p\ (n_p=D(p)>0),$$
with $h$ smooth and nowhere vanishing near $p$.
2. **Logarithmic-derivative identity.** For every closed smooth complex
$1$-form $\omega$ on $X$,
$$\frac{1}{2\pi i}\int_X\frac{df}{f}\wedge\omega=\int_c\omega .$$
The integral on the left is the absolutely convergent improper integral obtained by deleting small coordinate disks about the support of $D$; its local coefficients have at most an $O(1/|z|)$ singularity. For every holomorphic $\omega\in\Omega(X)$ this is the same as
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

[F1] A closed smooth complex $1$-form has a smooth local primitive. Its integral along a continuous path is the finite sum of primitive endpoint differences on a subdivision into primitive neighborhoods. Two such choices agree after a common refinement because their primitives differ locally by constants; the resulting integral is additive and reverses sign on path reversal. Compactness of the interval and its Lebesgue-number lemma give such finite subdivisions, and only finite choice is needed ([[cor-closed-differential-forms-are-locally-exact]], [[thm-heine-borel-rn]], [[thm-lebesgue-number-lemma]], [[lem-finite-choice]]).

[F2] On the slit plane $\mathbb C\setminus(-\infty,0]$ the principal logarithm $\operatorname{Log}$ is holomorphic with derivative $1/\zeta$ ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]).

[F3] For a compact set inside a bounded open set there is a smooth cutoff $\psi$ with $0\le\psi\le1$ and $\psi=1$ near the compact set, supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]). Its support is closed and bounded, hence compact by [[thm-heine-borel-rn]].

[F4] For a local weak solution $f=z^k u$, with $u$ smooth and nowhere zero, $df/f=k\,dz/z+du/u$. The integral of $dz/z$ on a positively oriented small circle is $2\pi i$, and multiplication by a smooth test function tends to its value at the center in this circle integral ([[cor-residue-theorem-circle]], [[def-logarithmic-derivative-meromorphic-function]], [[lem-logarithmic-derivative-order-residue]]).

[F5] For a smooth complex $1$-form $\eta$ on an oriented surface and a compact regular region with piecewise smooth boundary, Stokes' theorem holds: $\int_R d\eta=\int_{\partial R}\eta$, with the induced boundary orientation ([[lem-stokes-for-piecewise-smooth-surface-regions]], [[def-smooth-differential-k-form]], [[def-integral-of-an-oriented-chart-supported-top-form]]).

[F6] The wedge product, the integral of compactly supported top forms on an oriented manifold, and the sum of integrals over a partition of the domain into finitely many regions are defined as usual ([[def-wedge-product-of-differential-forms]], [[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]], [[def-smooth-differential-k-form]]).

[F7] For a holomorphic differential $\omega$ and a smooth function $f$, the $(1,0)$-part of $df/f$ wedged with $\omega$ vanishes, so $(df/f)\wedge\omega=(\bar\partial f/f)\wedge\omega$; here $df=\partial f+\bar\partial f$ and $\bar\partial f/f$ is smooth where $f\ne0$, hence also across $|D|$ after cancellation of the local powers ([[thm-d-dbar-decomposition-and-identities]], [[def-wirtinger-derivatives]], [[def-bigraded-complex-differential-forms]]).

[F9] Full AC is assumed, hence permits any choice hypothesis inherited by the Stokes supplier. The displayed model uses the smooth cutoff of [F3] and finitely many local selections; the construction itself requires only finite choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For a path contained in a coordinate disk $V$ identified with the unit disk, write its endpoints as $a,b$ and choose $0<r<r'<1$ with the entire compact path image in $\{|z|<r\}$. Choose $\psi$ equal to $1$ on $\{|z|\le r\}$ and supported in $\{|z|<r'\}$ by [F3]. If $a=b$, set $f_0=1$; the integral of a closed form on this path is zero by [F1]. If $a\ne b$, put $R(z)=(z-b)/(z-a)$ and use $L=\operatorname{Log}R$ outside the segment $[a,b]$. Indeed $R(z)$ belongs to the nonpositive real ray only on $[a,b]$, which lies inside $\{|z|<r\}$, so [F2] defines $L$ throughout the annulus $r<|z|<1$. Set $f_0=R$ for $|z|\le r$ and $f_0=\exp(\psi L)$ for $r<|z|<1$. These formulas agree smoothly across $|z|=r$: where $L$ is defined, $f_0=R\exp((\psi-1)L)$, and $\psi-1$ vanishes smoothly on the inner disk. Since $f_0=1$ near $\partial V$, extend it by $1$ off $V$. This gives a weak solution of $Q-P$ with a simple zero at $b$, a simple pole at $a$, and no other zeros or poles. [F1, F2, F3]

1.2 For claim 3, let $f$ and $g$ be weak solutions of $D$. Near a support point both have the local form $z^{n_p}h_f$ and $z^{n_p}h_g$ with the same integer $n_p=D(p)$ and smooth nowhere-vanishing factors, so $g/f=h_g/h_f$ is smooth and nowhere vanishing near $p$; away from $|D|$ both functions are smooth and nowhere vanishing. Hence $g/f$ is smooth and nowhere vanishing on all of $X$. [given]

2.1 The endpoint integral of [F1] is invariant under fixed-endpoint homotopy: subdivide the compact homotopy square into sufficiently small triangles in primitive neighborhoods, where every boundary sum telescopes, and cancel the interior edges. A coordinate disk contracts to a point, so this makes integration from a fixed point path independent on the disk. The resulting function is a local primitive plus a constant near each point, hence a smooth global primitive of any closed form there. Let $\omega=dg$ near the closed disk $|z|\le r'$, and multiply the local primitive by a cutoff supported in $V$ and equal to $1$ near that disk, obtaining a global smooth $g$ without changing $dg$ where $df_0/f_0$ is supported. Put $\alpha=df_0/f_0$ away from $a,b$. It is closed there, since $d(f_0^{-1}df_0)=-f_0^{-2}df_0\wedge df_0=0$. The local form in [F4] shows that $\alpha\wedge dg$ is absolutely integrable: its coefficient is $O(1/|z-a|)+O(1/|z-b|)$. On a compact coordinate disk containing its support with small disks about $a,b$ deleted, $d(g\alpha)=dg\wedge\alpha=-\alpha\wedge dg$. The outer boundary contributes zero since $\alpha=0$ there. On the two inner circles the boundary orientation is clockwise; [F4] therefore gives $\int\alpha\wedge dg=2\pi i(g(b)-g(a))$ as their radii tend to zero. Thus $\frac1{2\pi i}\int_X(df_0/f_0)\wedge\omega=g(b)-g(a)=\int_\gamma\omega$ by [F1]. For $a=b$ both sides vanish. [F1, F3, F4, F5, F6, step 1.1]

2.2 Subdivide each curve into finitely many subpaths contained in coordinate disks, using compactness and the Lebesgue-number argument of [F1], and construct the factor $f_{j\ell}$ for each subpath by step 1.1. Each construction depends only on its subpath and disk, not on $\omega$; every closed form has a primitive on such a disk, since local primitive endpoint integrals are invariant under fixed-endpoint homotopy by subdividing a compact homotopy square into primitive neighborhoods, whose boundary increments telescope. Form the finite product $f=\prod_{j,\ell}f_{j\ell}$. At any endpoint of the subdivided curves, each factor has an integer coordinate power times a smooth unit; changing a centered holomorphic coordinate multiplies that power by a holomorphic unit. Summing the endpoint exponents gives exactly the boundary of the original chain: intermediate endpoint contributions cancel, even when endpoints repeat or a subpath is closed. Therefore $f=z^{D(p)}h$ with $h$ smooth and nowhere zero at support points, and $f$ extends smoothly and nonvanishingly at all canceled intermediate endpoints. Away from the endpoints it is smooth and nonzero. On their complement, the finite product rule gives $df/f=\sum_{j,\ell}df_{j\ell}/f_{j\ell}$. [F1, F4, step 1.1]

3.1 Sum the absolutely convergent model identities from step 2.1 and use the product rule of step 2.2 and finite additivity of the path integral in [F1]. This gives $\frac1{2\pi i}\int_X(df/f)\wedge\omega=\sum_{j,\ell}\int_{\gamma_{j\ell}}\omega=\int_c\omega$ for every closed smooth complex $1$-form. For holomorphic $\omega$, the $(1,0)$ term wedges to zero by [F7], while the local form $f=z^{D(p)}h$ gives $\bar\partial f/f=\bar\partial h/h$, a smooth form across every support point. Hence the displayed holomorphic identity has an ordinary smooth top-form integral. [F1, F6, F7, step 2.1, step 2.2]

4.1 The construction proves the weak-solution and integral claims in steps 2.2 and 3.1, and step 1.2 proves uniqueness up to a smooth nowhere-vanishing factor. The zero chain gives the empty product $f=1$; a nonzero closed chain can instead give a nonconstant nowhere-zero $f$, as its period identity requires. All selections in the construction are finite, and full AC covers the inherited Stokes hypothesis in [F9]. [F9, step 2.2, step 3.1, step 1.2] ∎

## Source notes

The construction and the identity are Forster's §§20.1-20.5 (*Lectures on Riemann Surfaces*, printed pp. 159-163): the local model $\exp(\psi\log\frac{z-b}{z-a})$, the multiplication of local solutions along a subdivision of the curve, and the identity $\int_c\omega=\frac{1}{2\pi i}\int_X\frac{df}{f}\wedge\omega$ via Stokes and the residue of $df/f$ at the zeros and poles. McMullen's Lemmas 15.10 and 15.12 (printed pp. 131-133) give the same statement in the form $\int_X\frac{df}{f}\wedge\omega=2\pi i\int_C\omega$. The item proves the endpoint and jump conventions explicitly and does not invoke any smoothing of the chain.
