---
id: rem-banach-stone
kind: remark
title: "Banach-Stone theorem"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "the norm of C(X) recovers X"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Banach-Stone theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Banach%E2%80%93Stone_theorem"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

Let $X$ and $Y$ be compact Hausdorff spaces and let $C(X)$, $C(Y)$ carry the supremum norm. If there
is a linear isometry of $C(X)$ onto $C(Y)$, then $X$ and $Y$ are homeomorphic.

More precisely, every surjective linear isometry $T \colon C(X) \to C(Y)$ has the form
$$(Tf)(y) = h(y)\, f(\varphi(y))$$
for a homeomorphism $\varphi \colon Y \to X$ and a continuous $h$ with $|h| \equiv 1$.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** Identify the extreme points of the closed unit ball of $C(X)^{*}$: they are
exactly the unimodular scalar multiples of point evaluations $\delta_x$. A surjective isometry
induces a weak-star homeomorphism of dual balls carrying extreme points to extreme points, and the
induced map on the $\delta_x$ is the homeomorphism $\varphi$. The argument therefore consumes
[[rem-banach-alaoglu]] and the Krein-Milman theorem.

**Why it matters here.** It is the first entry in the algebra and topology dictionary: the metric
structure of $C(X)$ alone, with no reference to multiplication, already determines the topology of
$X$. The later entries strengthen the input in different directions, replacing the norm by the ring
structure ([[rem-gelfand-kolmogorov]]), by the $C^{*}$ structure
([[rem-gelfand-naimark-commutative]]), or by the topological ring structure of pointwise convergence
([[rem-nagata-theorem-cp]]).
