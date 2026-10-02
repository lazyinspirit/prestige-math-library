---
id: def-canonical-green-kernel-riemann-surface
kind: definition
title: "Canonical Green kernel on a Riemann surface"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-harmonic-and-subharmonic-riemann-surface-functions
  - lem-log-modulus-is-harmonic-off-its-centre
  - thm-conformal-invariance-of-plane-harmonicity
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - def-green-function-plane-domain
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF p. 2, the Perron family (a)-(b) and envelope (1); PDF pp. 2-3, Lemma 1 and the disc example; PDF p. 15, Comments 3 and 5"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §5, printed pp. 115-118, and Appendix 1 §10.9, printed pp. 171-172, for the logarithmic-pole normalization of Green kernels"
verification:
  precheck: n/a
---

## Definition

Let $X$ be a Riemann surface ([[def-riemann-surface-and-holomorphic-atlas]])
and let $p\in X$ be a point. Harmonicity and subharmonicity on open subsets of
$X$ are the chartwise notions of
[[def-harmonic-and-subharmonic-riemann-surface-functions]].

**Centred charts.** A **centred chart at $p$** is a chart $z:U\to\mathbb D$ of
the complex structure with $z(p)=0$ and with closure $\overline U$ compact in
$X$. Centred charts exist: a chart about $p$ may be post-composed with a
Möbius automorphism of the disc carrying the image of $p$ to $0$, and the
domain may then be shrunk so that its closure is compact; replacing $z$ by
$z/r$ for $0<r<1$ shrinks the domain around $p$, so one may also arrange
$\overline U\ne X$.

**The Perron family.** Let $\mathcal F_p=\mathcal F_p(X)$ be the set of
functions $v:X\setminus\{p\}\to[0,\infty)$ such that

1. $v$ is subharmonic on $X\setminus\{p\}$;
2. $v$ has compact support: $v=0$ on $X\setminus K$ for some compact set
   $K\subseteq X$;
3. $v$ has **at most a unit logarithmic pole at $p$**: for one, hence every,
   centred chart $z:U\to\mathbb D$ at $p$,
   $$\limsup_{q\to p}\bigl(v(q)+\log|z(q)|\bigr)<\infty .$$

Clause 3 does not depend on the centred chart. Indeed, if $w:V\to\mathbb D$ is
a second centred chart, then $\tau:=w\circ z^{-1}$ is a biholomorphism between
neighbourhoods of $0$ with $\tau(0)=0$ and $\tau'(0)\ne0$, so
$|w(q)|=|\tau'(0)|\,|z(q)|\,(1+o(1))$ and hence
$\log|w(q)|=\log|z(q)|+\log|\tau'(0)|+o(1)$ as $q\to p$; therefore
$v+\log|w|$ and $v+\log|z|$ differ by a quantity that is bounded above and
below near $p$, and the two conditions are equivalent. The family consists of
nonnegative functions by construction; [[def-green-function-plane-domain]]
uses the same unit coefficient $\log|z|$ for its plane candidates, and the two
normalizations are compared in the remarks below.

When $X$ is compact, this definition allows $K=X$. This is an explicit
compact-surface extension of Marshall's Perron family, whose source definition
requires $K\ne X$; allowing the full compact support keeps the candidate family
stable under finite maxima and makes the compact case identically infinite.

**The envelope.** For $q\in X\setminus\{p\}$ set
$$g_X(q,p):=\sup\{\,v(q):v\in\mathcal F_p\,\}\in[0,\infty].$$
The function $g_X(\cdot,p)$ is the **Perron envelope with pole $p$**. It is
well defined because clauses 1-3 are chart-independent, and it is nonnegative
because every member of $\mathcal F_p$ is.

**Canonical kernel and Greenian surfaces.** Suppose $g_X(q,p)<\infty$ for
every $q\in X\setminus\{p\}$. Then the envelope is the **canonical Green
kernel of $X$ with pole $p$**, written $g_X(\cdot,p)$ as well, and one says
that $X$ **admits a finite canonical Green kernel at $p$**. The surface $X$ is
**Greenian** when it admits a finite canonical Green kernel at every point
$p\in X$.

## Remark

**The family is nonempty.** Choose a centred chart $\xi:V\to D(0,R)$ at $p$
and a radius $0<r<R$ whose closed disc lies in $D(0,R)$; set
$U:=\xi^{-1}(D(0,r))$ and $z:=\xi/r$. Put
$$v_0(q)=\begin{cases}-\log|z(q)|,&q\in U\setminus\{p\},\\ \ 0,&q\in X\setminus(U\cup\{p\}).\end{cases}$$
Then $v_0$ vanishes outside the compact set $\overline U$, and
$v_0+\log|z|=0$ on $U\setminus\{p\}$, so clauses 2 and 3 hold. For clause 1,
on $V\setminus\{p\}$ the chart
expression of $v_0$ is $\max\{-\log|\xi/r|,0\}$, the maximum of two
harmonic functions. Outside $\overline U$ it is locally zero, including near
$\partial V$. Thus every chart expression is subharmonic, by the finite
maximum property
([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]])
and conformal invariance of harmonicity
([[thm-conformal-invariance-of-plane-harmonicity]]). Hence $v_0$ is
subharmonic on $X\setminus\{p\}$ and belongs to $\mathcal F_p$; in particular
the envelope is at least $v_0\ge0$ and strictly positive on
$U\setminus\{p\}$.

**Nonnegativity does not change the envelope.** Marshall's family imposes
clauses 1-3 on functions $v:X\setminus\{p\}\to[-\infty,\infty)$ without
requiring $v\ge0$. If such a $v$ satisfies clauses 1-3, then
$v^+:=\max(v,0)$ is subharmonic on $X\setminus\{p\}$ (in each chart this is
the maximum of the two subharmonic functions $v_\varphi$ and $0$,
[[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]),
vanishes on $X\setminus K$, and satisfies
$v^+\le\max\bigl(-\log|z|+C,0\bigr)\le-\log|z|+\max(C,0)$ near $p$ whenever
$v\le-\log|z|+C$ there; hence $v^+\in\mathcal F_p$ and $v^+\ge v$. Taking
suprema, the envelope over the family above equals the envelope over the
family without the nonnegativity requirement. Replacing a candidate by its
positive part is therefore harmless, and by the same chartwise argument
finite maxima of members of $\mathcal F_p$ are again members of
$\mathcal F_p$.

**Promised properties.** The definition above fixes the envelope only. Its
basic properties are *not* assumed here; they are proved in
[[lem-green-envelope-dichotomy-and-logarithmic-pole]] (which assumes
Countable Choice). For a fixed pole $p$:

1. either $g_X(q,p)=+\infty$ for every $q\in X\setminus\{p\}$, or
   $g_X(\cdot,p)$ is finite and strictly positive on $X\setminus\{p\}$;
2. in the finite case $g_X(\cdot,p)$ is harmonic on $X\setminus\{p\}$, and
   $g_X(\cdot,p)+\log|z|$ extends from $U\setminus\{p\}$ to a harmonic
   function on all of $U$;
3. in the finite case $g_X(\cdot,p)$ is least among the positive harmonic
   unit-pole functions: $g_X(\cdot,p)\le H$ for every $H>0$ harmonic on
   $X\setminus\{p\}$ such that $H+\log|z|$ extends harmonically across $p$.

**Normalization and the interface with the plane-domain kernel.** By clause 2
of the promise above, in a centred chart the kernel has the local form
$$g_X(q,p)=-\log|z(q)|+h(q)$$
with $h$ harmonic on $U$, so the coefficient of the logarithmic singularity is
exactly $1$ and the corrector is finite at $p$. This is precisely the
normalization fixed by [[def-green-function-plane-domain]] for plane domains,
whose candidates require $u+\log|z-a|$ to extend harmonically across the pole
$a$; restricted to the chart disc, $g_X(\cdot,p)$ is a logarithmic-pole
candidate at $0$ for the plane domain $z(U)$ in the sense of that definition.
The flux form of the normalization is the one used by the arguments on this
page: with $\nu$ the unit normal of the circle $\{|z|=r\}$ pointing toward
$p$, one has $\partial_\nu(-\log|z|)=1/r$, while a harmonic function has zero
flux through a circle (its mean value over the circle is constant in the
radius), so
$$\int_{|z|=r}\partial_\nu g_X(\cdot,p)\,ds=2\pi$$
for all $0<r<1$. That constant is the unit point-charge normalization recorded
on the plane-domain page in the distributional form $-\Delta g=2\pi\delta_a$.
The arguments below use this flux form of the normalization, and none of them
identifies the surface kernel with a plane-domain Green function.

**Continuous candidates.** The candidate $v_0$ above is continuous, finite
maxima of members of $\mathcal F_p$ are again in $\mathcal F_p$ and are
continuous when their entries are, and the maximum principle applies to such
candidates directly. Marshall records (Comment 3) that the proofs may be
carried out with continuous subharmonic candidates alone, applying the
maximum principle on a punctured region wherever an isolated value $-\infty$
would otherwise appear; the explicit candidate $v_0$ above is continuous.
