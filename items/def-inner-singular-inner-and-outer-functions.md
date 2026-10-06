---
id: def-inner-singular-inner-and-outer-functions
kind: definition
title: "Inner, singular inner and outer functions"
status: published
origin: pipeline
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-03"
    scope: "Cumulative whole-item verification: completed original Step5 full statement/definition and proof read plus the recorded later Step7 local mathematical corrections. Exact recovered original carrier and current post-correction carrier match recorded hashes; every substantive delta is covered by the cited correction reasoning. No independent audit of the local repairs and no new review round is claimed; supplier review is limited to interfaces used."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-20.md"
      - "research/frontier-38-owner-30-alpha-batch-20-5a.md"
      - "research/frontier-38-owner-30-step5-hash-20-post-5a.json"
      - "research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u20.json"
    original_read_raw_sha256: "d0559b74d6228f04b5e48c8e433b46120c3d970593fa5ae809ea73af1df4b83e"
    repair_post_guard_sha256: "e0f2538fabc704e5509d5c8fe6e38125ca8228e9200a827e234d57be387c35ee"
    content_sha256: "fe97ec6e131a49145aed4a96afe8aab6912b080359e01258ea1955668e679a79"
pipeline_run: frontier-38-owner-30
deps: [lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice, def-unit-disc-upper-half-plane-and-blaschke-factor, def-poisson-kernel-on-the-disc, def-poisson-integral-of-finite-boundary-measure, def-analytic-hardy-space-disc, def-blaschke-product, thm-blaschke-product-boundary-values-and-zeros, def-complex-exponential, def-complex-lp-and-euclidean-test-function-conventions, def-the-one-dimensional-torus-and-normalized-haar-integral, def-countable-choice, thm-complex-power-series-converge-locally-uniformly, thm-holomorphic-if-and-only-if-analytic, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-local-maximum-modulus-principle]
justified_by: [lem-outer-function-properties, thm-singular-inner-function-properties]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §5"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "The Nevanlinna class, printed pp. 69-71: the outer function $F(z)=\\exp\\int\\frac{e^{i\\theta}+z}{e^{i\\theta}-z}\\log|f|\\frac{d\\theta}{2\\pi}$ and the singular functions $S_j(z)=\\exp(-\\int\\frac{e^{i\\theta}+z}{e^{i\\theta}-z}d\\mu_j)$ with properties (i)-(iv)."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.10, §6.2"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Theorem 5.27 with the outer function $[f]$ and its properties (i)-(iv), printed pp. 43-45, and Properties of outer functions, printed pp. 60-64."
---

## Definition

Assume [[def-countable-choice|countable choice]]. Let $\mathbb T$ be the
one-dimensional torus with its normalized Haar measure $m$, identified with the
Euclidean unit circle through $\varphi([t])=e^{2\pi it}$
([[def-the-one-dimensional-torus-and-normalized-haar-integral]]), and let
$\mathbb D$ be the unit disc
([[def-unit-disc-upper-half-plane-and-blaschke-factor]]).

**The Cauchy kernel.** For $\zeta\in\mathbb T$ (regarded as a point of the unit
circle) and $z\in\mathbb D$ put
$$K(z,\zeta):=\frac{\zeta+z}{\zeta-z}.$$
For fixed $z$ the function $\zeta\mapsto K(z,\zeta)$ is continuous on the
compact torus with
$$|K(z,\zeta)|\le\frac{1+|z|}{1-|z|},\qquad \operatorname{Re}K(z,\zeta)=\frac{1-|z|^2}{|\zeta-z|^2}=P(z,\zeta)>0,$$
where $P$ is the Poisson kernel of [[def-poisson-kernel-on-the-disc]] under the
identification of [[def-poisson-integral-of-finite-boundary-measure]]; for
fixed $\zeta$ the function $z\mapsto K(z,\zeta)$ is holomorphic on
$\mathbb C\setminus\{\zeta\}$.

**(a) Inner functions.** A holomorphic $\theta:\mathbb D\to\mathbb C$ is
**inner** if $\theta\in H^\infty(\mathbb D)$ and
$|\theta^*(\zeta)|=1$ for $m$-almost every $\zeta\in\mathbb T$, where
$\theta^*$ is its nontangential boundary function
([[def-analytic-hardy-space-disc]]). Every Blaschke product is inner, and a
Blaschke product has $|B|\le1$ on $\mathbb D$
([[thm-blaschke-product-boundary-values-and-zeros]]). An inner function also
satisfies $|\theta|\le1$ on $\mathbb D$; this is the case $p=\infty$ of the
bounded-holomorphic boundary-norm identity under countable choice proved in
[[lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice]], and no inner function is
assumed here to have any particular product form.

**(b) Singular inner functions.** For a finite positive Borel measure $\mu$ on
$\mathbb T$ define
$$S_\mu(z):=\exp\Bigl(-\int_{\mathbb T}K(z,\zeta)\,d\mu(\zeta)\Bigr)\qquad(z\in\mathbb D).$$
If $\mu$ is singular with respect to $m$ (written $\mu\perp m$), $S_\mu$ is
called a **singular inner function**. The function $S_\mu$ is well defined and
holomorphic on $\mathbb D$, has no zeros, satisfies
$|S_\mu(z)|=e^{-P[\mu](z)}\le1$ and $S_\mu(0)=e^{-\mu(\mathbb T)}>0$; these
properties and the boundary behaviour are proved in
[[thm-singular-inner-function-properties]].

**(c) Outer functions.** For a nonnegative measurable
$h:\mathbb T\to[0,+\infty]$ with $\log h\in L^1(\mathbb T,m)$
([[def-complex-lp-and-euclidean-test-function-conventions]]) define the
**outer function**
$$[h](z):=\exp\Bigl(\int_{\mathbb T}K(z,\zeta)\,\log h(\zeta)\,dm(\zeta)\Bigr)\qquad(z\in\mathbb D),$$
where $\log h$ is extended by $-\infty$ where $h=0$. The integral is
absolutely convergent because $|K(z,\zeta)|\le\frac{1+|z|}{1-|z|}$ and
$|\log h|\in L^1$. To see holomorphy without any $L^p$ hypothesis on $h$,
expand $K(z,\zeta)=1+2\sum_{n\ge1}z^n\zeta^{-n}$: its geometric tail is
uniformly bounded on $|z|\le r<1$, so termwise integration against $\log h$
gives a power series whose coefficients have modulus at most
$2\|\log h\|_1$. It is holomorphic on $\mathbb D$
([[thm-complex-power-series-converge-locally-uniformly]],
[[thm-holomorphic-if-and-only-if-analytic]]). Its exponential $[h]$ is
holomorphic and zero-free, with
$$\log|[h](z)|=P[\log h](z),\qquad [h](0)=\exp\Bigl(\int_{\mathbb T}\log h\,dm\Bigr)>0,$$
by [[thm-complex-exponential-is-entire-with-derivative-itself]] and
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], and
depends only on the $m$-class of $h$. If $h\in L^p(\mathbb T,m)$ for some
$0<p\le\infty$, then $[h]\in H^p(\mathbb D)$ and $|[h]^*|=h$
$m$-almost everywhere, with $\log|[h]^*|=\log h$ a.e.; these additional
properties are proved in [[lem-outer-function-properties]].

A holomorphic $f$ on $\mathbb D$ with finite nontangential boundary values
$f^*$ almost everywhere and $\log|f^*|\in L^1(\mathbb T,m)$ is called
**outer** if $f=e^{i\gamma}[\,|f^*|\,]$ for some $\gamma\in\mathbb R$.
Equivalently, $\log|f(z)|=P[\log|f^*|](z)$ for every $z\in\mathbb D$:
the representation implies the equality by the displayed identity; conversely,
the equality makes the holomorphic quotient $f/[\,|f^*|\,]$ have modulus one
throughout the disc, hence it is a unimodular constant by
[[thm-local-maximum-modulus-principle]]. Thus the outer function with the
prescribed modulus and this interior equality is determined up to a unimodular
constant, and $[h](0)>0$ fixes its normalization.
