---
id: rem-banach-limits
kind: remark
title: "Banach limits"
status: draft
origin: session
proved_here: false
deps: [rem-hahn-banach-theorem]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "shift-invariant extensions of lim"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Banach limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Banach_limit"
    - title: "Sequence space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence_space"
pipeline_run: null
---

## Statement

There is a linear functional $L$ on the space $\ell^\infty$ of bounded real sequences with all of
the following properties:

1. $L(x) = \lim_n x_n$ whenever $x$ converges;
2. $L$ is shift invariant, $L(x_1, x_2, x_3, \dots) = L(x_2, x_3, x_4, \dots)$;
3. $L$ is positive, so $L(x) \ge 0$ whenever every $x_n \ge 0$, and $\lVert L \rVert = 1$;
4. $\liminf_n x_n \le L(x) \le \limsup_n x_n$ for every bounded $x$.

Such an $L$ is a **Banach limit**. There are many of them, and no one of them is canonical.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** The Hahn-Banach theorem in the dominated extension form of
[[rem-hahn-banach-theorem]], applied with the sublinear functional
$$p(x) = \limsup_{n \to \infty} \frac{1}{n} \sum_{k=1}^{n} x_k$$
which dominates $\lim$ on the subspace of convergent sequences and is shift invariant. So the
construction consumes Hahn-Banach and with it the Boolean prime ideal theorem, as recorded in
[[rem-hahn-banach-choice-strength]].

**Why it matters here.** A Banach limit is the standard example of an object that exists but cannot
be exhibited: every property above is checkable, and yet no formula defines a particular $L$. It is
also the most vivid element of the dual of $\ell^\infty$ that does not come from $\ell^1$, which is
the content of the next item.
