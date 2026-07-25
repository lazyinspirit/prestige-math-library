---
id: rem-riesz-markov-kakutani
kind: remark
title: "Riesz-Markov-Kakutani representation theorem"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "functionals on C(X) are measures"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Riesz-Markov-Kakutani representation theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riesz%E2%80%93Markov%E2%80%93Kakutani_representation_theorem"
    - title: "Vector measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_measure"
pipeline_run: null
---

## Statement

Let $X$ be a locally compact Hausdorff space and let $C_c(X)$ be the space of continuous real
functions of compact support. For every positive linear functional $I$ on $C_c(X)$, that is, every
linear $I$ with $I(f) \ge 0$ whenever $f \ge 0$, there is a unique Radon measure $\mu$ on the Borel
sets of $X$ with
$$I(f) = \int_X f \, d\mu \quad \text{for all } f \in C_c(X).$$

**Dual form.** For such an $X$, the dual of $C_0(X)$ with the supremum norm is isometrically
isomorphic to the space of regular complex Borel measures on $X$ with the total variation norm; the
pairing is integration. For compact Hausdorff $X$ this identifies $C(X)^{*}$.

## Remarks

**Not proved in this library, and doubly deferred.** It needs the functional analysis track for the
duality statement and the measure and integration track for the measures themselves. Both are
recorded as missing.

**What would prove it.** A Caratheodory style construction: define an outer measure from the
functional by taking infima of $I(f)$ over functions dominating the indicator of an open set, verify
regularity, and check that integration against the resulting measure reproduces the functional on
$C_c(X)$. The regularity hypothesis is not decoration: without it uniqueness fails.

**Why it matters here.** It is the theorem that makes measure theory and functional analysis two
descriptions of one subject, by identifying a purely analytic object, a positive functional on
continuous functions, with a purely measure-theoretic one. It is also the concrete half of the
algebra and topology dictionary: together with the Banach-Stone theorem and the commutative
Gelfand-Naimark theorem it says that the compact Hausdorff space $X$, the Banach space $C(X)$, the
algebra $C(X)$ and the measures on $X$ are four views of the same data.
