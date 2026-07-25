---
id: rem-gerlits-nagy
kind: remark
title: "Gerlits-Nagy theorem: $C_p(X)$ is Frechet-Urysohn exactly for gamma-spaces"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "Frechet-Urysohn C_p(X) means gamma-space"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Gerlits and Zs. Nagy, Some properties of C(X), I, Topology Appl. 14 (1982) 151-161"
      url: "https://doi.org/10.1016/0166-8641(82)90065-7"
    - title: "V. V. Tkachuk, A Cp-Theory Problem Book: Topological and Function Spaces, Problem Books in Mathematics, Springer (2011)"
      url: "https://doi.org/10.1007/978-1-4419-7442-6"
pipeline_run: null
---

## Statement

Call an open cover $\mathcal{U}$ of a space $X$ an **omega-cover** if $X \notin \mathcal{U}$ and
every finite subset of $X$ is contained in some member of $\mathcal{U}$, and a **gamma-cover** if it
is infinite and every point of $X$ lies in all but finitely many of its members. A Tychonoff space
$X$ has the **gamma-property** if every open omega-cover of $X$ contains a gamma-subcover.

**Gerlits-Nagy theorem.** For a Tychonoff space $X$ the following are equivalent: $C_p(X)$ is
Frechet-Urysohn; $C_p(X)$ is sequential; $C_p(X)$ is a $k$-space; and $X$ has the gamma-property.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** A translation between covering properties of $X$ and convergence properties
at the zero function of $C_p(X)$: a sequence of functions tending to zero pointwise corresponds to a
sequence of sets covering finite subsets, and the gamma-property is exactly what allows a sequence
to be extracted from a cluster point.

**Why it matters here.** It is the model case of a selection principle: three convergence properties
of a function space, which are distinct for general topological spaces, coincide for $C_p(X)$ and
are equivalent to a single combinatorial covering property of $X$. That equivalence is what makes
the whole family of selection principles worth studying, and it is one more instance of the
dictionary that topological information about $X$ is recoverable from a function space over $X$.
