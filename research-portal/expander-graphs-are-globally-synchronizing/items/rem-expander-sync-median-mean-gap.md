---
id: rem-expander-sync-median-mean-gap
title: Median–mean gap for convex Lipschitz concentration
kind: remark
domain: mathematics
status: draft
origin: pipeline
deps:
  - thm-expander-sync-thm-6-5
  - thm-expander-prereq-convex-product-concentration
  - prop-expander-prereq-median-tail-integration
  - math:def-countable-choice
  - math:def-independent-random-elements
  - math:cor-continuous-functions-are-borel-measurable
  - math:def-expectation-of-a-nonnegative-or-integrable-random-variable
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:prop-order-and-scalar-rules-for-the-nonnegative-integral
  - math:def-probability-measure
  - math:def-integral-of-a-nonnegative-simple-function
  - math:prop-the-nonnegative-integral-agrees-with-the-simple-integral
dependency_roles:
  thm-expander-sync-thm-6-5: mathematical-premise
  thm-expander-prereq-convex-product-concentration: mathematical-premise
  prop-expander-prereq-median-tail-integration: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-independent-random-elements: mathematical-premise
  math:cor-continuous-functions-are-borel-measurable: mathematical-premise
  math:def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  math:def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  math:prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  math:def-probability-measure: mathematical-premise
  math:def-integral-of-a-nonnegative-simple-function: mathematical-premise
  math:prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 35, paragraph preceding Corollary 6.6
      statement: In the setting of Theorem 6.5, the median and mean of f(X) differ by
        at most 4.
      hypotheses: Independent [0,1]-valued coordinates and a convex Euclidean
        1-Lipschitz function, as in Theorem 6.5.
      reading_limits: The cited paragraph and surrounding theorem were inspected. The
        article is cited for attribution only; its cited Exercise 2.2 was not
        independently read.
dependency_level: 3
---

## Statement

Assume countable choice: every sequence of nonempty sets admits a choice of one element from each set. In the setting of [[thm-expander-sync-thm-6-5]], let $d\ge1$, let $X=(X_1,\ldots,X_d)$ have independent $[0,1]$-valued random coordinates, and let $f:[0,1]^d\to\mathbb R$ be convex and 1-Lipschitz for Euclidean distance. Thus $|f(x)-f(y)|\le\|x-y\|_2$ on the cube. Let $Mf(X)$ be a median: both $\mathbb P(f(X)\le Mf(X))$ and $\mathbb P(f(X)\ge Mf(X))$ are at least $1/2$. Then $f(X)$ is integrable and $|Mf(X)-\mathbb E f(X)|\le4$.

## Facts & Assumptions

[F1] The two-sided convex product concentration theorem gives, for each $t>0$, both $\mathbb P(f(X)>Mf(X)+t)\le2e^{-t^2/4}$ and $\mathbb P(f(X)<Mf(X)-t)\le2e^{-t^2/4}$ under the stated hypotheses ([[thm-expander-prereq-convex-product-concentration]]).

[F2] Under countable choice, the median-to-mean bridge gives $|\mathbb EZ-m|<4L$ for an integrable real random variable $Z$ whose two tails about a median $m$ are bounded by $2e^{-t^2/(4L^2)}$ for all $t>0$ ([[prop-expander-prereq-median-tail-integration]], [[math:def-countable-choice]]).

[F3] Random coordinates are measurable, and continuous maps between Euclidean spaces are Borel measurable under countable choice ([[math:def-independent-random-elements]], [[math:cor-continuous-functions-are-borel-measurable]]). A measurable real function is integrable when the integral of its absolute value is finite; the nonnegative integral is monotone, and expectation is its integral when it is integrable ([[math:def-integrable-real-and-complex-functions-and-their-integrals]], [[math:prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[math:def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[F4] On the probability space $(\Omega,\mathcal F,\mathbb P)$, $\mathbb P(\Omega)=1$ ([[math:def-probability-measure]]). For a nonnegative simple measurable function $s=\sum_j c_j\chi_{E_j}$ on disjoint measurable sets, its simple integral is $\sum_j c_j\mathbb P(E_j)$ ([[math:def-integral-of-a-nonnegative-simple-function]]), and its nonnegative Lebesgue integral equals this simple integral ([[math:prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

## Proof

**Given:** Countable choice, the independent coordinates, the convex Euclidean 1-Lipschitz function and the median in the statement.

**Goal:** Establish integrability and the stated median–mean bound.

1.1 The Lipschitz inequality makes $f$ continuous on the cube and gives $|f(x)|\le |f(0)|+\sqrt d$ there. Coordinatewise clipping $c(u)_i=\min\{1,\max\{0,u_i\}\}$ is continuous and takes $\mathbb R^d$ into the cube, so $f\circ c$ is continuous on $\mathbb R^d$. By [F3] it is Borel measurable. The vector $X$ is measurable: inverse images of open boxes are finite intersections of coordinate inverse images, and every open subset of $\mathbb R^d$ is a countable union of rational open boxes. Therefore $f(X)=(f\circ c)(X)$ is measurable. Put $C=|f(0)|+\sqrt d$. The constant function $C\chi_\Omega$ is nonnegative simple and measurable, since its inverse images of Borel sets are either $\Omega$ or $\varnothing$. By [F4], $\int_\Omega C\chi_\Omega\,d\mathbb P=C\mathbb P(\Omega)=C<\infty$. Since $|f(X)|\le C\chi_\Omega$, monotonicity in [F3] gives $\int_\Omega |f(X)|\,d\mathbb P\le C<\infty$. Thus [F3] establishes integrability. [F3, F4, given, algebra]

2.1 Apply [F1] with the given median and then [F2] with $Z=f(X)$, $m=Mf(X)$ and $L=1$. Step 1.1 supplies integrability, so $|\mathbb E f(X)-Mf(X)|<4$, and hence the asserted weak inequality follows. [F1, F2, step 1.1, algebra] ∎

## Source notes

The article attributes the bound to Boucheron, Lugosi and Massart, Exercise 2.2. The argument above instead uses the separately supplied two-sided concentration and tail-integration results. The article reference records attribution, not a premise of the proof.
