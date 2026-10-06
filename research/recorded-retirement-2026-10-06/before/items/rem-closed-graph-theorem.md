---
id: rem-closed-graph-theorem
kind: remark
title: "Closed graph theorem"
status: draft
origin: session
proved_here: false
deps: [rem-open-mapping-theorem]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "closed graph implies bounded"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Closed graph theorem (functional analysis) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem_(functional_analysis)"
    - title: "P. Howard and E. Tachtsis, On infinite-dimensional Banach spaces and weak forms of the axiom of choice, Math. Log. Quart. 63 (2017) 509-535"
      url: "https://commons.emich.edu/fac_sch2017/127/"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

Let $X$ and $Y$ be Banach spaces and let $T \colon X \to Y$ be linear. Then $T$ is bounded if and
only if its graph $\{(x, Tx) : x \in X\}$ is closed in $X \times Y$.

Concretely, boundedness follows from the apparently weaker hypothesis: whenever $x_n \to x$ in $X$
**and** $T x_n \to y$ in $Y$, one has $y = Tx$. Continuity would demand that $Tx_n$ converge at all;
the closed graph hypothesis lets one assume convergence and only check the limit.

## Remarks

**Not proved in this library.** Recorded and cited, like the open mapping theorem it refines.

**What would prove it.** The graph is a closed subspace of $X \times Y$, hence a Banach space; the
first coordinate projection from the graph onto $X$ is a bounded linear bijection, so its inverse is
bounded by the bounded inverse theorem in [[rem-open-mapping-theorem]], and $T$ is the composite of
that inverse with the second projection. The two theorems are equivalent, and both are consumers of
the Baire category theorem.

**Why it matters here.** It converts a two limit verification into a one limit verification, which
is what makes closedness usable as a practical criterion for boundedness. Its set-theoretic status
is not fully settled: Howard and Tachtsis record it as open whether the closed graph theorem implies
dependent choice.
