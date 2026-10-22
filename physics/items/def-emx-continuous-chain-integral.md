---
id: def-emx-continuous-chain-integral
kind: definition
title: Continuous differential-form integrals over smooth singular chains in Euclidean domains
status: draft
origin: session
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-smooth-singular-simplex
  - def-standard-orientation-of-the-affine-simplex
  - def-standard-topological-simplex-and-its-affine-face-maps
  - def-smooth-singular-chain-and-cochain-complexes
  - def-finite-sum
  - def-pullback-of-a-differential-form
  - def-pullback-of-a-covariant-tensor-field
  - def-smooth-differential-k-form
  - def-continuous-map-top
  - prop-topological-spaces-and-continuous-maps-form-category-top
  - def-directional-and-partial-derivatives
  - def-c-one-map-and-local-inverse
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - def-riemann-integral-over-a-jordan-set
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - thm-multidimensional-integral-properties
  - thm-heine-borel-rn
  - thm-graph-of-continuous-function-on-a-compact-set-has-content-zero
  - thm-jordan-boundary-criterion
  - def-null-and-content-zero-in-rn
  - lem-finite-sum-laws
dependency_roles:
  def-smooth-singular-simplex: mathematical-premise
  def-standard-orientation-of-the-affine-simplex: mathematical-premise
  def-standard-topological-simplex-and-its-affine-face-maps: mathematical-premise
  def-smooth-singular-chain-and-cochain-complexes: mathematical-premise
  def-finite-sum: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  def-pullback-of-a-covariant-tensor-field: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-continuous-map-top: mathematical-premise
  prop-topological-spaces-and-continuous-maps-form-category-top: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-c-one-map-and-local-inverse: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-graph-of-continuous-function-on-a-compact-set-has-content-zero: mathematical-premise
  thm-jordan-boundary-criterion: mathematical-premise
  def-null-and-content-zero-in-rn: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
physical_scope: Pure mathematics; no physical premises or physical claim.
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
  - title: Peter S. Park, Proof of de Rham's Theorem
    url: https://people.math.harvard.edu/~pspark/derham.pdf
    locator: 'Indirect source via the actually used local def-integral-of-a-form-over-a-smooth-singular-simplex
      and def-standard-orientation-of-the-affine-simplex: smooth pullback-integral and orientation conventions.
      The extension to continuous coefficients and its well-definedness are constructed locally.'
  - title: J. Lebl, Basic Analysis, Jordan Measurable Sets
    url: https://www.jirka.org/ra/html/sec_jordansets.html
    locator: Indirect source via the actually used local def-riemann-integral-over-a-jordan-set and thm-continuous-functions-on-compact-jordan-sets-are-integrable.
      The compact-simplex continuity and extension-independence argument is supplied here; no independent full-text
      reading is asserted.
---

## Definition

Let $V\subseteq\mathbb R^n$ be open, let $1\le k\le n$, let $\omega$ be a continuous $k$-form on $V$, and let $\sigma:\Delta^k\to V$ be a smooth singular simplex. Here a continuous $k$-form is a field of alternating covariant $k$-tensors with continuous coordinate coefficient functions; for smooth forms this is the usual type of [[def-smooth-differential-k-form]]. No injectivity or immersion is required. Extend pullback to this regularity by the slot formula

$$ (\sigma^*\omega)_u(v_1,\ldots,v_k):=\omega_{\sigma(u)}(D\sigma_u v_1,\ldots,D\sigma_u v_k). $$

In the fixed positive affine coordinates $u_1,\ldots,u_k$ on its standard parameter simplex, write the resulting continuous pullback as $\sigma^*\omega=g_\sigma(u)\,du_1\wedge\cdots\wedge du_k$. Define

$$\int_\sigma\omega:=\int_{\Delta^k}g_\sigma(u)\,du.$$

For a finite real smooth singular $k$-chain $c=\sum_\sigma a_\sigma\sigma$, define $\int_c\omega:=\sum_\sigma a_\sigma\int_\sigma\omega$. The orientation is the fixed standard affine orientation; reversing a chain coefficient reverses its contribution. This definition applies to every continuous form, including forms with continuous first derivatives and their continuous exterior derivatives; $C^1$ means [[def-c-one-map-and-local-inverse]]. For smooth $\omega$, this is the same affine pullback integral used in [[def-integral-of-a-form-over-a-smooth-singular-simplex]].

Each standard parameter simplex is compact Jordan, so every integral in the Definition exists; this is verified below.

## Definition references

[[def-smooth-singular-simplex]]

[[def-standard-topological-simplex-and-its-affine-face-maps]]

[[def-standard-orientation-of-the-affine-simplex]]

[[def-smooth-singular-chain-and-cochain-complexes]]

[[def-finite-sum]]

[[def-pullback-of-a-differential-form]]

[[def-pullback-of-a-covariant-tensor-field]]

[[def-smooth-differential-k-form]]

[[def-continuous-map-top]]

[[prop-topological-spaces-and-continuous-maps-form-category-top]]

[[def-directional-and-partial-derivatives]]

[[def-c-one-map-and-local-inverse]]

[[def-integral-of-a-form-over-a-smooth-singular-simplex]]

[[def-riemann-integral-over-a-jordan-set]]

[[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]

[[thm-multidimensional-integral-properties]]

[[thm-heine-borel-rn]]

[[thm-graph-of-continuous-function-on-a-compact-set-has-content-zero]]

[[thm-jordan-boundary-criterion]]

[[def-null-and-content-zero-in-rn]]

[[lem-finite-sum-laws]]

## Facts & Assumptions

**Given:** An open $V\subseteq\mathbb R^n$, an integer $1\le k\le n$, a continuous $k$-form $\omega$ on $V$, and a finite real smooth singular $k$-chain in $V$.

[F1] [[def-smooth-singular-simplex]] defines $\sigma$ by a smooth extension to an open neighbourhood of the compact standard simplex, so its coordinate functions and first derivatives are continuous on $\Delta^k$.

[F2] [[def-pullback-of-a-differential-form]] and [[def-pullback-of-a-covariant-tensor-field]] use the displayed slot formula in the smooth setting, and [[def-smooth-differential-k-form]] fixes the alternating-tensor type; here the formula extends pointwise to continuous coefficients. Its coordinate coefficient is a finite sum of products of form coefficients composed with $\sigma$ and first partial derivatives of $\sigma$.

[F3] [[def-continuous-map-top]] defines continuity by neighbourhood preimages, and [[prop-topological-spaces-and-continuous-maps-form-category-top]] says composites of continuous maps are continuous.

[F4] [[def-standard-topological-simplex-and-its-affine-face-maps]] defines the standard simplex by barycentric coordinates $t_i\ge0$, $\sum_{i=0}^k t_i=1$. [[def-standard-orientation-of-the-affine-simplex]] identifies its positive affine coordinates with $u_i\ge0$, $\sum_{i=1}^k u_i\le1$, and fixes the signed faces.

[F5] [[thm-heine-borel-rn]] makes each closed bounded simplex and each closed bounded coordinate projection compact.

[F6] [[thm-graph-of-continuous-function-on-a-compact-set-has-content-zero]] makes the graph of a continuous face function over a compact coordinate projection content zero.

[F7] [[def-null-and-content-zero-in-rn]] defines content zero by finite cube covers; [[lem-finite-sum-laws]] lets finitely many such covers combine with summed volume at most the sum of their bounds. [[thm-jordan-boundary-criterion]] characterizes a bounded Jordan set by its content-zero boundary.

[F8] [[def-standard-orientation-of-the-affine-simplex]] fixes the positive affine parameter coordinates and signed faces.

[F9] [[def-riemann-integral-over-a-jordan-set]] defines the Jordan-set integral, and [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]] makes a continuous coefficient on a compact Jordan simplex integrable.

[F10] [[def-smooth-singular-chain-and-cochain-complexes]] defines finite real chains as finitely supported coefficients on smooth simplex maps; [[def-finite-sum]] fixes the empty-sum value. [[thm-multidimensional-integral-properties]] gives linearity of the Riemann integral.

[F11] [[def-integral-of-a-form-over-a-smooth-singular-simplex]] uses the same pullback coefficient and fixed positive affine parameter coordinates when the form is smooth.

[F12] [[def-c-one-map-and-local-inverse]] defines $C^1$ on Euclidean open sets by total differentiability with continuous first derivative.

## Proof

**Given:** The data in the Definition, with the parameter orientation fixed by [F4].

1.1 In coordinates, each pullback coefficient is the finite sum of products described in [F2]. Every form coefficient composed with $\sigma$ is continuous by [F1] and [F3], and each derivative of $\sigma$ is continuous by [F1]. Finite sums of continuous real functions are continuous by the triangle inequality. For a product $fg$ at a point $u_0$, first restrict to a neighbourhood where $|g(u)-g(u_0)|<1$, so $|g(u)|\le |g(u_0)|+1$, then use $|f(u)g(u)-f(u_0)g(u_0)|\le |f(u)-f(u_0)|(|g(u_0)|+1)+|f(u_0)||g(u)-g(u_0)|$. Continuity of $f$ and $g$ makes the right side arbitrarily small. Induction proves continuity for every finite product, hence $g_\sigma$ is continuous on $\Delta^k$. If two smooth extensions of $\sigma$ are chosen, they agree as functions on the relative interior of $\Delta^k$, which is open in its affine span; hence their tangential derivatives and pullback coefficients agree there. For any boundary point $u$, the points $u_s=(1-s)u+s b$, where $b=(1/(k+1),\ldots,1/(k+1))$ and $0<s\le1$, have all coordinates positive and coordinate sum below $1$, so they lie in the relative interior and converge to $u$. Continuity of both coefficient functions makes them equal at $u$ too. Thus $g_\sigma$ is independent of the extension. No immersion is needed; when $D\sigma_u$ has rank below $k$, alternation makes the pullback coefficient zero at $u$. [F1, F2, F3, F4, given]

1.2 The set $\Delta^k$ in [F4] is closed and bounded, hence compact by [F5]. Its boundary consists of its coordinate faces $u_i=0$ and its upper face $\sum_i u_i=1$. If $k=1$, these are the two endpoints $0,1$, covered by two intervals of arbitrarily small total length, so the boundary has content zero by [F7]. If $k\ge2$, each coordinate face is the graph of the constant zero function over its closed bounded coordinate projection, and the upper face is the graph of $u_k=1-\sum_{i<k}u_i$ over the closed bounded simplex $\{u_i\ge0,\sum_{i<k}u_i\le1\}$. These bases are compact by [F5]. The upper-face function is continuous because $|\sum_{i<k}(u_i-v_i)|\le(k-1)\|u-v\|_2$, and the lower-face functions are constant; [F6] therefore makes each face content zero. Given $\varepsilon>0$, cover each of the finitely many faces by a finite cube family with total volume less than $\varepsilon/(k+1)$; their union is a finite cover of the boundary with total volume less than $\varepsilon$ by [F7]. Thus $\partial\Delta^k$ has content zero, and [F7] makes the bounded set $\Delta^k$ Jordan measurable. [F4, F5, F6, F7, given]

2.1 By [F9], the continuous coefficient $g_\sigma$ is Riemann integrable on the compact Jordan simplex from step 1.2, so each simplex integral in the Definition is finite. [F9, step 1.1, step 1.2]

3.1 A finite chain has finitely many nonzero coefficients by [F10]. Its integral is therefore a finite sum of finite real numbers; the zero chain has the empty sum, equal to $0$ by [F10]. If a chain is presented with repeated copies of the same simplex, [F10] and linearity combine their coefficients without changing the result. The positive affine parameter orientation is fixed by [F8]. The Definition covers $C^1$ coefficient forms and the continuous coefficients of their first exterior derivatives by [F12]. For smooth $\omega$, the coefficient and affine parameter integral are exactly those in [F11], so the two integral conventions agree. [F8, F10, F11, F12, step 2.1] ∎
