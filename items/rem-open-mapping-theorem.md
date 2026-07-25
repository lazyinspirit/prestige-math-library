---
id: rem-open-mapping-theorem
kind: remark
title: "Open mapping theorem and the bounded inverse theorem"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "surjective bounded operators are open"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Open mapping theorem (functional analysis) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_mapping_theorem_(functional_analysis)"
    - title: "Bounded inverse theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bounded_inverse_theorem"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

Let $X$ and $Y$ be Banach spaces and let $T \colon X \to Y$ be a bounded linear map that is onto.
Then $T$ is an open map: the image of every open subset of $X$ is open in $Y$. Equivalently, there
is $c > 0$ with $T(B_X) \supseteq c\,B_Y$ for the open unit balls.

**Bounded inverse theorem.** If in addition $T$ is injective, then $T^{-1}$ is bounded, so a
bounded linear bijection between Banach spaces is a topological isomorphism.

## Remarks

**Not proved in this library.** There is no Banach space track here, so the statement is recorded
and cited.

**What would prove it.** The Baire category theorem for complete metric spaces, applied to
$Y = \bigcup_n \overline{T(nB_X)}$, gives one of the closures an interior point; scaling and
translation turn that into $\overline{T(B_X)} \supseteq c\,B_Y$, and completeness of $X$ upgrades
the closure away by a convergent successive approximation series. The category theorem is available
to this library in the elementary sense already discussed on the topology pages, and it is
equivalent over ZF to dependent choice, so the cost of this theorem is DC and no more. What is
missing is only the normed space vocabulary.

**Why it matters here.** It is the reason that in the Banach setting an algebraic isomorphism which
happens to be continuous is automatically a homeomorphism, so that "isomorphism" needs no separate
continuity hypothesis on the inverse. It is also the engine behind the closed graph theorem stated
next.
