---
id: def-cantor-function
kind: definition
title: "The Cantor function on $[0,1]$, defined on the Cantor set through ternary digits and extended constantly across each removed interval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-cantor-set-ternary-description, def-cantor-set, def-series, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, def-complete-ordered-field, def-bounded-set, lem-sup-unique, def-interval, def-injection-surjection-bijection, def-integer-power, lem-power-laws, def-sequence, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: [thm-cantor-function-properties]
aliases: [def-devils-staircase]
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
pipeline_run: null
---

## Definition

Let $C$ be the Cantor set, $D$ the set of sequences with values in $\{0,2\}$ and
$\Phi : D \to C$ the bijection $\Phi(a) = \sum_{k \ge 0} a_k 3^{-k-1}$ of
[[thm-cantor-set-ternary-description]]. Since $\Phi$ is a bijection it has a
two-sided inverse $\Phi^{-1} : C \to D$, and that inverse is a single function,
determined and not selected ([[def-injection-surjection-bijection]]).

**On the Cantor set.** For $x \in C$ write $a := \Phi^{-1}(x)$ and put

$$\gamma(x) \;:=\; \sum_{k=0}^{\infty} \big(a_k \cdot 2^{-1}\big)\, 2^{-k-1} .$$

Each coefficient $a_k \cdot 2^{-1}$ is $0$ or $1$, so all the terms are
nonnegative and every partial sum is at most
$\sum_{k<n} 2^{-k-1} \le \sum_{k=0}^{\infty} 2^{-k-1} = 1$
([[thm-geometric-series]], [[def-integer-power]], [[lem-power-laws]]); hence the
series converges and $\gamma(x) \in [0,1]$
([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]],
[[def-interval]]). In words: $\gamma$ halves each ternary digit of $x$ and reads
the result as a binary expansion.

**On all of $[0,1]$.** The **Cantor function** is
$c : [0,1] \to \mathbb{R}$,

$$c(x) \;:=\; \sup\{\, \gamma(t) : t \in C \text{ and } t \le x \,\} .$$

**The supremum exists and is a single real number.** The set on the right is
nonempty, because $0 \in C$ ([[def-cantor-set]]) and $0 \le x$, and it is bounded
above by $1$, because $\gamma$ takes values in $[0,1]$; so it has a least upper
bound by completeness ([[def-complete-ordered-field]], [[def-bounded-set]]), and
that bound is unique ([[lem-sup-unique]]). Since $0 \le \gamma(0) \le c(x) \le 1$,
the values of $c$ lie in $[0,1]$.

**That $c$ really extends $\gamma$**, that is, $c(t) = \gamma(t)$ for every
$t \in C$, is not an observation but a small theorem: it needs $\gamma$ to be
nondecreasing along $C$. It is claim 1 of [[thm-cantor-function-properties]],
recorded in this item's `justified_by`, and until it is proved the two symbols
are kept apart.

## Remarks

- **Why the extension is a supremum and not a case distinction.** Writing "$c$ is
  constant across each interval removed in the construction of $C$" presupposes a
  description of those intervals; the supremum formula presupposes nothing, is
  defined at every point of $[0,1]$ at once, and yields the constancy as a
  theorem (claim 4 of [[thm-cantor-function-properties]]). It also makes the
  monotonicity of $c$ immediate, since the set whose supremum is taken grows with
  $x$.

- **Nothing is claimed here about continuity.** No definition of continuity for a
  real function of a real variable is available at this point in the reading
  order, so no statement about it is made, in either direction; the properties
  proved on this page are well-definedness, monotonicity in the sense
  $c(x) \le c(y)$ for $x \le y$, surjectivity onto $[0,1]$ and constancy across
  the gaps of $C$.

- **The name.** The function is also called the *devil's staircase*, because it
  climbs from $0$ to $1$ while being constant across every gap of $C$, and the
  gaps fill up all of $[0,1]$ except a set of measure zero
  ([[thm-cantor-set-properties]]).

- **The digits are halved, not truncated.** $\gamma$ sends the ternary digit
  sequence $(a_k)$ with values in $\{0,2\}$ to the binary sequence $(a_k/2)$ with
  values in $\{0,1\}$, which is the bijection $D \to \{0,1\}^{\mathbb{N}}$ of
  claim 3 of [[thm-cantor-set-ternary-description]] read backwards. So $\gamma$ is
  the composition of $\Phi^{-1}$ with that bijection and with the binary
  summation, and its surjectivity onto $[0,1]$ is exactly the statement that
  every real of $[0,1]$ has a binary expansion, proved where it is used.
