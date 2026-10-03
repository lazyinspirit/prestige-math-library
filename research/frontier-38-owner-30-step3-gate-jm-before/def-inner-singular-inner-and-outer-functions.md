---
id: def-inner-singular-inner-and-outer-functions
kind: definition
title: "Inner, singular inner and outer functions"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-unit-disc-upper-half-plane-and-blaschke-factor, def-poisson-kernel-on-the-disc, def-poisson-integral-of-finite-boundary-measure, def-analytic-hardy-space-disc, def-blaschke-product, thm-blaschke-product-boundary-values-and-zeros, def-complex-exponential, def-complex-lp-and-euclidean-test-function-conventions, def-the-one-dimensional-torus-and-normalized-haar-integral, def-countable-choice]
justified_by: [lem-outer-function-properties, thm-singular-inner-function-properties, thm-zero-free-inner-functions-are-singular-inner]
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
boundary-norm identity proved in
[[thm-fatou-boundary-theorem-analytic-hardy-spaces]], and no inner function is
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
$|\log h|\in L^1$. The function $[h]$ is holomorphic, has no zeros, satisfies
$[h](0)=\exp\bigl(\int_{\mathbb T}\log h\,dm\bigr)>0$, and depends only on the
$m$-class of $h$; if $h\in L^p(\mathbb T,m)$ then $[h]\in H^p(\mathbb D)$ and
$|[h]^*|=h$ $m$-almost everywhere, with $\log|[h]^*|=\log h$ a.e. These
properties are proved in [[lem-outer-function-properties]]. The outer function
is determined by $h$ only up to a unimodular constant and is normalized here by
the positive value $[h](0)$; a holomorphic $f$ on $\mathbb D$ is called
**outer** if $f=e^{i\gamma}[\,|f^*|\,]$ for some $\gamma\in\mathbb R$,
equivalently (by the cited lemma) if $\log|f^*|\in L^1(\mathbb T,m)$ and
$\log|f(z)|=P[\log|f^*|](z)$ for every $z\in\mathbb D$.
