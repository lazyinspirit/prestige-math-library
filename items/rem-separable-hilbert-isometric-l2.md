---
id: rem-separable-hilbert-isometric-l2
kind: remark
title: "Every separable infinite-dimensional Hilbert space is isometrically isomorphic to $\ell^2$"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "one separable Hilbert space up to isometry"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Hilbert space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hilbert_space"
    - title: "Sequence space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence_space"
pipeline_run: null
---

## Statement

Let $H$ be an infinite-dimensional Hilbert space which is separable as a metric space. Then there is
a linear bijection $U \colon H \to \ell^2$ with $\langle Ux, Uy \rangle = \langle x, y \rangle$ for
all $x, y$; in particular $U$ is an isometry. So up to isometric isomorphism there is exactly one
separable infinite-dimensional Hilbert space over each of $\mathbb{R}$ and $\mathbb{C}$.

More generally, every Hilbert space $H$ has an orthonormal basis $B$ and is isometrically isomorphic
to $\ell^2(B)$, and the cardinality of $B$, the Hilbert dimension, is a complete invariant for
isometric isomorphism.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** For the separable case: fix an enumeration of a countable dense set,
discard the vectors that are in the span of their predecessors, apply the Gram-Schmidt process to
what remains, and check by Bessel's inequality and Parseval's identity that the resulting
orthonormal sequence expands every vector. Note that no choice principle is used, since the
enumeration is fixed in advance and every step is determined. For the general case one needs a
maximal orthonormal set, which is where Zorn's lemma enters.

**Why it matters here.** It is the sharpest kind of classification statement: an entire category of
objects collapses to one. It is also why the phrase "the Hilbert space" is not an abuse of language
in the separable case, and why every concrete separable model, square-summable sequences,
square-integrable functions on an interval, or a Sobolev space, is the same object in different
clothing.
