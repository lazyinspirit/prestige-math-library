---
id: rem-nagata-theorem-cp
kind: remark
title: "Nagata's theorem: the topological ring $C_p(X)$ determines $X$"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "C_p(X) as a ring determines X"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "V. V. Tkachuk, A Cp-Theory Problem Book: Topological and Function Spaces, Problem Books in Mathematics, Springer (2011)"
      url: "https://doi.org/10.1007/978-1-4419-7442-6"
    - title: "Topology of pointwise convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topology_of_pointwise_convergence"
    - title: "L. Gillman and M. Jerison, Rings of Continuous Functions, Springer (1960)"
      url: "https://doi.org/10.1007/978-1-4615-7819-2"
pipeline_run: null
---

## Statement

For a Tychonoff space $X$ let $C_p(X)$ be the ring of continuous real functions on $X$ carrying the
topology of pointwise convergence, that is, the subspace topology from the product
$\mathbb{R}^{X}$.

**Nagata's theorem.** For Tychonoff $X$ and $Y$, if $C_p(X)$ and $C_p(Y)$ are isomorphic as
topological rings, then $X$ and $Y$ are homeomorphic.

## Remarks

**Not proved in this library.** Recorded with a citation; $C_p$-theory needs both the function space
topology and the algebra of $C(X)$ to be developed.

**What would prove it.** Recover the points of $X$ inside $C_p(X)$ intrinsically: the evaluation
maps are exactly the ring homomorphisms $C_p(X) \to \mathbb{R}$ that are continuous for the
pointwise topology, and the topology they inherit as a subspace of the dual is the topology of $X$.
Continuity of the ring isomorphism is what pins down $X$ rather than $\beta X$.

**Why it matters here.** It is the sharpest entry in the algebra and topology dictionary, and the
comparison with its neighbours is the point. The ring structure alone recovers only $\beta X$
([[rem-gelfand-kolmogorov]]); a linear homeomorphism of $C_p(X)$ with $C_p(Y)$, so-called
$l$-equivalence, does not recover $X$ at all; but the ring structure **together with** the topology
of pointwise convergence recovers $X$ exactly.
