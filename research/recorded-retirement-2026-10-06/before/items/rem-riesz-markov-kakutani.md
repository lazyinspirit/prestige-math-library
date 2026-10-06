---
id: rem-riesz-markov-kakutani
kind: remark
title: "Riesz-Markov-Kakutani representation theorem"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "a positive functional on $C_c(X)$ is integration against a unique Radon measure"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Riesz-Markov-Kakutani representation theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riesz%E2%80%93Markov%E2%80%93Kakutani_representation_theorem"
    - title: "Radon measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Radon_measure"
pipeline_run: null
---

## Statement

Let $X$ be a locally compact Hausdorff space and let $C_c(X)$ be the space of
continuous real functions of compact support. For every positive linear
functional $I$ on $C_c(X)$, that is, every linear $I$ with $I(f) \ge 0$ whenever
$f \ge 0$, there is a unique Radon measure $\mu$ on the Borel sets of $X$ with

$$I(f) = \int_X f \, d\mu \quad \text{for all } f \in C_c(X).$$

Here **Radon** means: $\mu(K) < \infty$ for every compact $K$, $\mu$ is outer
regular on all Borel sets, and $\mu$ is inner regular on open sets and on Borel
sets of finite measure.

**Dual form.** For such an $X$, the dual of $C_0(X)$ with the supremum norm is
isometrically isomorphic to the space of regular complex Borel measures on $X$
with the total variation norm; the pairing is integration, and
$\|\psi\| = |\mu|(X)$. For compact Hausdorff $X$ this identifies $C(X)^{*}$.

The two forms are not the same statement and are constantly conflated. The
first is about positive functionals on compactly supported functions and asserts
a positive measure; the second is about all bounded functionals on $C_0(X)$ and
asserts a complex measure of finite total variation. The first needs no
boundedness hypothesis, since positivity already forces local boundedness; the
second needs no positivity.

## Remarks

**Not proved in this library, and doubly deferred.** It needs the functional
analysis track for the duality statement and the measure and integration track
([[rem-lebesgue-measure-and-integral]]) for the measures themselves, and for the
integral in which the conclusion is written. Both tracks are recorded as
missing.

**What would prove it.** A Caratheodory style construction: define an outer
measure from the functional by taking infima of $I(f)$ over functions dominating
the indicator of an open set, verify regularity, and check that integration
against the resulting measure reproduces the functional on $C_c(X)$. The
regularity hypothesis is not decoration: without it uniqueness fails, since on a
badly behaved $X$ distinct Borel measures can integrate every $f \in C_c(X)$ to
the same value.

**Why it matters here.** It is the theorem that makes measure theory and
functional analysis two descriptions of one subject, by identifying a purely
analytic object, a positive functional on continuous functions, with a purely
measure-theoretic one. It belongs beside Lusin's theorem
([[rem-lusin-theorem]]), which is the same fact read in the other direction:
measurable behaviour is continuous behaviour off a small set, and continuous
functions are therefore enough to see the measure. It is also the concrete half
of the algebra and topology dictionary: together with the Banach-Stone theorem
and the commutative Gelfand-Naimark theorem it says that the compact Hausdorff
space $X$, the Banach space $C(X)$, the algebra $C(X)$ and the measures on $X$
are four views of the same data.
