---
id: rem-complex-euclidean-space-dictionary
kind: remark
title: "Complex $m$-space and its real coordinate dictionary"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [rem-complex-plane-euclidean-dictionary, def-euclidean-inner-product, def-p-norms-on-rn, def-norm-and-normed-space, thm-componentwise-convergence-and-completeness, thm-componentwise-limits-and-continuity, def-vector-valued-functions-limits-and-continuity, thm-heine-borel-rn, lem-standard-basis-of-f-n, def-complex-conjugate-real-imaginary-part-and-modulus, def-vector-space, thm-complex-numbers-form-a-field, def-metric-ball]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Remark

Fix a natural number $m\ge1$. **Complex $m$-space** $\mathbb C^m$ is the set of
functions $m\to\mathbb C$, so a point $z$ has coordinates $z_k$ for $k<m$,
indexed from $0$ exactly as $\mathbb R^n$ is in this library. With coordinatewise
addition and multiplication by complex scalars it is a vector space over the
field $\mathbb C$ ([[def-vector-space]], [[thm-complex-numbers-form-a-field]]),
with the standard basis $e_0,\dots,e_{m-1}$ of [[lem-standard-basis-of-f-n]].

**The coordinate identification.** Writing $z_k=x_k+iy_k$ with $x_k,y_k$ real
([[def-complex-conjugate-real-imaginary-part-and-modulus]]), define

$$\Phi:\mathbb C^m\to\mathbb R^{2m},\qquad \Phi(z)=(x_0,y_0,x_1,y_1,\dots,x_{m-1},y_{m-1}).$$

The interleaved ordering is the one used throughout this page; the ordering that
groups all real parts before all imaginary parts is a **different** bijection,
and nothing below is stated for it. $\Phi$ is a bijection and is
$\mathbb R$-linear.

**Norms agree.** Put $\lVert z\rVert:=\bigl(\sum_{k<m}|z_k|^2\bigr)^{1/2}$. Since
$|z_k|^2=x_k^2+y_k^2$, this is the Euclidean norm $\lVert\Phi(z)\rVert_2$ of
[[def-p-norms-on-rn]] and [[def-euclidean-inner-product]], and it is a norm on
the real vector space underlying $\mathbb C^m$ in the sense of
[[def-norm-and-normed-space]]. Consequently
$\lVert z-w\rVert=\lVert\Phi(z)-\Phi(w)\rVert_2$, so the metric of
$\mathbb C^m$, its balls ([[def-metric-ball]]), its open sets, its convergent
sequences, its Cauchy sequences and its continuous maps are **verbatim** those of
$\mathbb R^{2m}$ under $\Phi$. In particular convergence and continuity are
coordinatewise ([[thm-componentwise-limits-and-continuity]],
[[def-vector-valued-functions-limits-and-continuity]]), $\mathbb C^m$ is complete
([[thm-componentwise-convergence-and-completeness]]), and a subset of
$\mathbb C^m$ is compact exactly when it is closed and bounded
([[thm-heine-borel-rn]]).

**At $m=1$ this is the published plane dictionary.** For $m=1$ the map $\Phi$ is
the bijection of [[rem-complex-plane-euclidean-dictionary]] and every clause
above reduces to a clause recorded there. Openness, connectedness and real total
differentiability on $\mathbb C^m$ are always read through $\Phi$, exactly as
that remark reads them through its own identification.

**What $\Phi$ does not carry.** $\Phi$ respects the additive and the real scalar
structure but not multiplication by $i$ in any way visible to a general
$\mathbb R$-linear map of $\mathbb R^{2m}$: an $\mathbb R$-linear map of
$\mathbb C^m$ need not be $\mathbb C$-linear. That distinction is the whole
content of the criterion the page proves next, and it is why "linear" is always
qualified below.
