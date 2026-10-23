---
id: lem-fd-c1-domain-jordan-integrals
kind: lemma
title: C1 material regions have compatible Jordan volume integrals
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-graphs-of-continuous-functions-have-content-zero
  - def-null-and-content-zero-in-rn
  - thm-jordan-boundary-criterion
  - thm-heine-borel-rn
  - thm-compactness-under-continuous-maps
  - thm-lebesgue-criterion-in-rn
  - thm-jordan-content-and-indicator-integrability
  - thm-multidimensional-integral-properties
  - def-riemann-integral-over-a-jordan-set
  - thm-euclidean-inverse-function-theorem
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  thm-graphs-of-continuous-functions-have-content-zero: mathematical-premise
  def-null-and-content-zero-in-rn: mathematical-premise
  thm-jordan-boundary-criterion: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
  thm-lebesgue-criterion-in-rn: mathematical-premise
  thm-jordan-content-and-indicator-integrability: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: Jiří Lebl, Basic Analysis II, §10.5 Jordan measurable sets
      url: https://www.jirka.org/ra/html/sec_jordansets.html
      locator: Proposition10.5.1 (boundary criterion), Definition10.5.4 and
        Proposition10.5.5 (zero-extension Jordan integral and continuous
        functions), Proposition10.5.6 (linearity/order/a.e. equality),
        Proposition10.5.9 (compact Jordan images under injective C1 maps);
        ingredients adapted in the local proof, not an attribution of the
        complete item verbatim.
    - title: Jiří Lebl, Basic Analysis II, §8.5 Inverse and implicit function theorems
      url: https://www.jirka.org/ra/html/sec_svinvfuncthm.html
      locator: "Theorem8.5.1: local C1 inverse from invertible derivative, used for
        the local graph-coordinate argument. The complete C1-region
        compatibility statement is proved locally from the declared published
        suppliers."
---

## Statement

Let $V\subset\mathbb R^3$ be a bounded open set whose boundary is locally, after a rigid coordinate change, the graph of a $C^1$ function, with $V$ lying locally on one side of that graph. Let $U\subset\mathbb R^3$ be open with $\overline V\subset U$. Let $\phi:U\to\phi(U)$ be a bijection onto an open image with $\phi$ and $\phi^{-1}$ both $C^1$, and let $f:\phi(U)\to\mathbb R$ be continuous. A bounded set is Jordan measurable when its indicator is Riemann integrable by the zero-extension convention; a set has content zero when it has finite cube covers of arbitrarily small total volume. Then $V$ and $\phi(V)$ are bounded open sets with locally $C^1$ graph boundaries, their compact closures are Jordan measurable, $\partial V$ and $\phi(\partial V)$ have content zero, and

$$\int_{\phi(V)}f(x)\,dx=\int_{\phi(\overline V)}f(x)\,dx.$$

Thus a balance integral over an open $C^1$ material region agrees with the compact-Jordan integral on its closure after a $C^1$ diffeomorphic motion.

## Statement references

[[thm-graphs-of-continuous-functions-have-content-zero]]

[[thm-jordan-boundary-criterion]]

[[thm-euclidean-inverse-function-theorem]]

[Jiří Lebl, Basic Analysis II, §10.5 Jordan measurable sets](https://www.jirka.org/ra/html/sec_jordansets.html) — Proposition10.5.1 (boundary criterion), Definition10.5.4 and Proposition10.5.5 (zero-extension Jordan integral and continuous functions), Proposition10.5.6 (linearity/order/a.e. equality), Proposition10.5.9 (compact Jordan images under injective C1 maps); ingredients adapted in the local proof, not an attribution of the complete item verbatim.

[Jiří Lebl, Basic Analysis II, §8.5 Inverse and implicit function theorems](https://www.jirka.org/ra/html/sec_svinvfuncthm.html) — Theorem8.5.1: local C1 inverse from invertible derivative, used for the local graph-coordinate argument. The complete C1-region compatibility statement is proved locally from the declared published suppliers.

## Facts & Assumptions

**Given:** The open set $V$, its local $C^1$ graph-boundary property, the open neighborhood $U$, the map $\phi$, and the continuous function $f$ from the statement.

[F1] [[thm-graphs-of-continuous-functions-have-content-zero]]: the graph of a continuous function on a closed nondegenerate rectangle in $\mathbb R^2$ has content zero in $\mathbb R^3$.

[F2] [[def-null-and-content-zero-in-rn]]: content zero means finite cube covers of arbitrarily small total volume; it passes to subsets and finite unions, and padding such covers with degenerate cubes makes the set null.

[F3] [[thm-jordan-boundary-criterion]]: a bounded subset of Euclidean space is Jordan measurable if and only if its boundary has content zero.

[F4] [[thm-heine-borel-rn]]: closed bounded subsets of $\mathbb R^3$ are compact.

[F5] [[thm-compactness-under-continuous-maps]]: the continuous image of a compact space is compact, and a continuous real-valued function on a compact space is bounded.

[F6] [[thm-lebesgue-criterion-in-rn]]: a bounded function on a rectangle is Riemann integrable when its discontinuity set is null.

[F7] [[thm-jordan-content-and-indicator-integrability]]: the indicator of a Jordan measurable set is Riemann integrable and its integral equals its Jordan content.

[F8] [[thm-multidimensional-integral-properties]]: the Riemann integral is linear, monotone, and bounded in absolute value by the integral of the absolute value.

[F9] [[def-riemann-integral-over-a-jordan-set]]: a bounded function is integrated over a bounded Jordan set by extending it by zero to a containing rectangle.

[F10] [[thm-euclidean-inverse-function-theorem]]: a $C^1$ map with invertible derivative at a point has a $C^1$ local inverse near that point.

[F11] [[thm-chain-rule-for-total-derivatives]]: derivatives of composable totally differentiable Euclidean maps multiply in order.

## Proof

**Given:** [F1]–[F11], the stated local graph condition, and the $C^1$ diffeomorphism $\phi$.

1.1 Put $S=\partial V$. It is closed and bounded, hence compact by [F4]. At each $p\in S$, the local graph condition gives rigid coordinates and an open planar set on which $S$ is the graph of a $C^1$ function. Choose a small closed nondegenerate rectangle inside that planar set so its graph lies within the boundary chart and covers a neighborhood of $p$ in $S$. Compactness gives finitely many such graph patches covering $S$. Each patch has content zero by [F1]. A rigid image of a cube of side $\ell$ lies in an axis-parallel cube of side $\sqrt3\ell$, so rigid coordinate changes enlarge the total covering volume by at most $3\sqrt3$. Thus each patch has content zero in the original coordinates. [F1, F4, algebra]

1.2 Parameterize a local graph patch at $p\in S$ by $\gamma(y)=(y,h(y))$ on an open subset of $\mathbb R^2$; its derivative has rank two because its first two coordinates are $y$. Differentiate $\phi^{-1}\circ\phi=\mathrm{id}$ and use [F11] to see that $D\phi$ is invertible. Thus $D(\phi\circ\gamma)$ has rank two. Choose rigid target coordinates so the first two coordinates of this derivative are invertible. The inverse function theorem [F10] gives a local $C^1$ inverse for those two coordinates, so the third coordinate expresses $\phi(S)$ locally as a $C^1$ graph. The homeomorphism $\phi$ maps the local one-sided region $V$ to one side of that image graph. Hence $\phi(V)$ has locally $C^1$ graph boundary. [F10, F11, given]

2.1 By [F2], the finite union of the source graph patches in step 1.1 shows that $S$ has content zero. [step 1.1, F2]

2.2 The compact image $\phi(S)$ has a finite cover by the local graph patches from step 1.2. By [F1] each patch has content zero in its rigid coordinates, and the cube-cover comparison in step 1.1 transfers that property to the original coordinates. Therefore $\phi(S)$ has content zero. It is closed and bounded by compactness and [F4], so its boundary is a subset of that content-zero set and [F3] makes $\phi(S)$ Jordan measurable. [F1, F2, F3, F4, F5, step 1.1, step 1.2]

3.1 The Jordan boundary criterion [F3] makes the bounded open set $V$ Jordan measurable by step 2.1. The closure $\overline V$ is closed and bounded, and $\partial\overline V\subseteq S$, so [F2]–[F4] make it compact Jordan. The compact image $\phi(\overline V)$ is bounded by [F5], and its boundary is contained in $\phi(S)$; [F2] and [F3] make it Jordan measurable. The open image $\phi(V)$ is bounded as a subset of $\phi(\overline V)$, and its boundary is $\phi(S)$; [F3] makes it Jordan measurable. [F2, F3, F4, F5, step 2.1, step 2.2]

4.1 The function $f$ is bounded by some $M\ge0$ on the compact set $\phi(\overline V)$ by [F5]. In a common containing rectangle, its zero extensions from $\phi(V)$ and $\phi(\overline V)$ differ only on $\phi(S)$, which has content zero by step 2.2. Their bounded difference $g$ has discontinuities only on that content-zero set, so [F6] makes it integrable. Moreover $|g|\le M1_{\phi(S)}$. By [F7], $\int 1_{\phi(S)}=\operatorname{cont}(\phi(S))=0$; monotonicity and the absolute-value estimate [F8] imply $|\int g|\le\int|g|\le M\int1_{\phi(S)}=0$. The zero-extension definition [F9] therefore gives equal integrals:
$$\int_{\phi(V)}f(x)\,dx=\int_{\phi(\overline V)}f(x)\,dx.$$
[F5, F6, F7, F8, F9, step 2.2] ∎
## Source notes


These are source ingredients adapted in the local proof, rather than an attribution of this complete lemma verbatim.

