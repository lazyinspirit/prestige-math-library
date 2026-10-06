---
id: rem-brouwer-fixed-point
kind: remark
title: "Brouwer's fixed point theorem in dimension $n \\geq 2$"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: [rem-brouwer]
landmark: true
short: "Every continuous self-map of a closed ball has a fixed point; borderline, since Stokes or Sperner may reach it"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Brouwer fixed-point theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Brouwer_fixed-point_theorem"
    - title: "Brouwer's fixed point theorem (nLab)"
      url: "https://ncatlab.org/nlab/show/Brouwer+fixed+point+theorem"
    - title: "Sperner's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sperner%27s_lemma"
    - title: "C. C. Pugh, Real Mathematical Analysis, 2nd ed. (Springer UTM)"
      url: "https://link.springer.com/book/10.1007/978-3-319-17771-7"
pipeline_run: null
---

## Statement

Let $B^n = \{ x \in \mathbb{R}^n : \lVert x \rVert \leq 1 \}$ be the closed unit
ball. Every continuous map $f \colon B^n \to B^n$ has a fixed point: there is
$x \in B^n$ with $f(x) = x$. The same holds with $B^n$ replaced by any nonempty
compact convex subset of $\mathbb{R}^n$, and more generally by any space
homeomorphic to $B^n$.

Equivalently, the **no-retraction theorem**: for $n \geq 1$ there is no continuous
$r \colon B^n \to S^{n-1}$ with $r(x) = x$ for every $x \in S^{n-1}$.

**The case $n = 1$ is in scope.** There $B^1 = [-1,1]$ and the statement is the
intermediate value theorem applied to $g(x) = f(x) - x$, which satisfies
$g(-1) \geq 0 \geq g(1)$. Only $n \geq 2$ is recorded here.

## Remarks

**Not proved in this library, and flagged borderline.** DEFERRED.md marks this
result as a candidate for early recovery rather than a genuine casualty of the
missing homotopy track, and that flag is repeated here, because there are at
least three routes to it and only one of them is algebraic topology.

**What would prove it.**

* *The homotopy route.* For $n = 2$, a retraction $r \colon B^2 \to S^1$ would
  make the identity of $S^1$ factor through the contractible $B^2$, forcing
  $\pi_1(S^1)$ to be trivial and contradicting
  [[rem-pi1-circle-is-z]]. For general $n$ the same argument runs with
  $H_{n-1}(S^{n-1}) \cong \mathbb{Z}$ in place of $\pi_1$, see
  [[rem-homology-and-cohomology]], or with the mapping degree.
* *The Stokes route, which is why this entry is borderline.* Pugh derives the
  theorem from the general Stokes theorem: a smooth retraction would carry the
  volume form of $S^{n-1}$ back to an exact form, contradicting
  $\int_{S^{n-1}} \omega \neq 0$; a Stone-Weierstrass smoothing step reduces the
  continuous case to the smooth one. If the library's multivariable track reaches
  a Stokes theorem strong enough for this, see
  [[rem-de-rham-and-stokes-on-manifolds]], the theorem becomes provable here
  without any homotopy theory, and this remark should be replaced by a proof.
* *The combinatorial route.* Sperner's lemma plus a compactness argument gives a
  fully elementary proof needing neither forms nor homotopy. Nothing in this
  library blocks it; it simply has not been developed.

**Why it matters here.** It is the fixed point theorem analysis actually uses:
existence of equilibria, solvability of nonlinear systems, and the standard proofs
of the inverse function theorem's global cousins all lean on it, and its
infinite-dimensional descendants (Schauder, Kakutani) begin from it. Every use of
it in this library must at present be conditional, citing this remark.
