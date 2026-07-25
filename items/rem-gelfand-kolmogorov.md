---
id: rem-gelfand-kolmogorov
kind: remark
title: "Gelfand-Kolmogorov theorem: the maximal ideals of $C(X)$ are the points of $\beta X$"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "the ring C(X) recovers beta-X"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. Gillman and M. Jerison, Rings of Continuous Functions, Springer (1960)"
      url: "https://doi.org/10.1007/978-1-4615-7819-2"
    - title: "Gelfand-Kolmogorov theorem (nLab)"
      url: "https://ncatlab.org/nlab/show/Gelfand-Kolmogorov+theorem"
    - title: "Stone-Cech compactification (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stone%E2%80%93%C4%8Cech_compactification"
pipeline_run: null
---

## Statement

Let $X$ be a Tychonoff space and let $C(X)$ be the ring of all continuous real valued functions on
$X$, with no norm and no topology, only the ring structure. Then the maximal ideals of $C(X)$ are in
natural bijection with the points of the Stone-Cech compactification $\beta X$: the maximal ideal
attached to $p \in \beta X$ is
$$M^{p} = \{ f \in C(X) : p \in \operatorname{cl}_{\beta X} Z(f) \},$$
where $Z(f)$ is the zero set of $f$.

Consequently, for Tychonoff $X$ and $Y$, the rings $C(X)$ and $C(Y)$ are isomorphic if and only if
$\beta X$ and $\beta Y$ are homeomorphic; and for compact Hausdorff $X$ and $Y$, $C(X) \cong C(Y)$
as rings if and only if $X$ and $Y$ are homeomorphic.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** The theory of $z$-filters and $z$-ultrafilters on $X$, which is the filter
machinery of the library's foundations pages transplanted to zero sets: maximal ideals of $C(X)$
correspond to $z$-ultrafilters, and $z$-ultrafilters correspond to points of $\beta X$. What is
missing is the Stone-Cech compactification itself, not the filter theory.

**Why it matters here.** It sharpens the dictionary of [[rem-banach-stone]] in the most economical
direction: not the norm, not the topology, only the ring operations, and what is recovered is
$\beta X$ rather than $X$. The distance between $X$ and $\beta X$ is exactly the information a ring
of bounded-behaviour functions cannot see, which is why the compact Hausdorff case is the clean one
and why [[rem-gelfand-naimark-commutative]] is stated there.
