---
id: def-vector-valued-derivative-and-integral
kind: definition
title: "The derivative and the Riemann integral of a function $[a,b] \\to \\mathbb{R}^m$, defined componentwise and characterised intrinsically"
status: draft
origin: session
deps: [def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, def-derivative, def-darboux-integral, def-oriented-integral, thm-linearity-of-the-integral, thm-algebra-of-derivatives, lem-metric-limits-unique, def-function-limit, lem-function-limit-unique, def-function-space, lem-standard-basis-of-f-n, def-interval, lem-integrability-on-a-subinterval, thm-additivity-over-subintervals, def-limit-point-r, def-p-norms-on-rn, def-euclidean-inner-product, def-bounded-set]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

## Definition

Throughout, $m \in \mathbb{N}$ with $m \ge 1$, and vector-valued functions, their
components and their limits are as in
[[def-vector-valued-functions-limits-and-continuity]].

### The derivative

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}^{m}$ and let $c \in A$ be
a **limit point of $A$** ([[def-limit-point-r]]). The **difference quotient of
$f$ at $c$** is the vector-valued function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}^{m}, \qquad q_{f,c}(x) \;:=\; \frac{1}{x - c}\,\bigl(f(x) - f(c)\bigr),$$

the scalar multiple being that of the vector space $\mathbb{R}^{m}$
([[def-function-space]]); the division is legitimate because $x \ne c$ gives
$x - c \ne 0$. As in [[def-derivative]], $c$ is a limit point of
$A \setminus \{c\}$ as well, since a punctured neighbourhood of $c$ omits $c$.

$f$ is **differentiable at $c$** when $\lim_{x \to c} q_{f,c}(x)$ exists in
$\mathbb{R}^{m}$, and then the **derivative** is

$$f'(c) \;:=\; \lim_{x\to c} q_{f,c}(x) \;\in\; \mathbb{R}^{m}.$$

**The notation denotes a single vector.** At most one $L \in \mathbb{R}^{m}$
satisfies the limit condition, as proved in
[[def-vector-valued-functions-limits-and-continuity]]; this is the vector-valued
form of the obligation [[lem-function-limit-unique]] discharges for real-valued
functions and [[lem-metric-limits-unique]] for sequences.

**The intrinsic form is the definition; the componentwise form is a theorem.**
For $i < m$ the $i$-th component of $q_{f,c}(x)$ is
$\bigl(f_i(x)-f_i(c)\bigr)/(x-c)$, which is the real difference quotient of
$f_i$ at $c$ ([[def-derivative]]). So by
[[thm-componentwise-limits-and-continuity]] clause 2:

> $f$ is differentiable at $c$ **if and only if** every $f_i$ is differentiable
> at $c$, and then $f'(c)_i = f_i'(c)$ for every $i<m$.

Nothing below reverses this order of presentation: the intrinsic limit is what is
defined, and the coordinates are read off it.

**Algebra of derivatives.** If $f, g : A \to \mathbb{R}^{m}$ are differentiable at
$c$ and $\lambda \in \mathbb{R}$, then $f + g$ and $\lambda f$ are differentiable
at $c$ with $(f+g)'(c) = f'(c)+g'(c)$ and $(\lambda f)'(c) = \lambda f'(c)$: read
componentwise through the displayed equivalence, these are clauses 1 and 2 of the
published [[thm-algebra-of-derivatives]].

### The integral

Let $a, b \in \mathbb{R}$ with $a < b$ and let $f : [a,b] \to \mathbb{R}^{m}$
([[def-interval]]). $f$ is **integrable on $[a,b]$** when every component
$f_i : [a,b] \to \mathbb{R}$ is bounded ([[def-bounded-set]]) and Darboux
integrable in the sense of [[def-darboux-integral]], and then

$$\int_a^b f \;:=\; \text{the function } m \to \mathbb{R} \text{ sending } i \mapsto \int_a^b f_i .$$

**That really is an element of $\mathbb{R}^{m}$.** In this library
$\mathbb{R}^{m}$ is the set of functions $m \to \mathbb{R}$
([[def-function-space]]), not a set of tuples, so the displayed assignment is
literally an element of it; each value $\int_a^b f_i$ is a single real by
[[def-darboux-integral]]. In the standard basis
([[lem-standard-basis-of-f-n]]) the same object is
$\int_a^b f = \sum_{i<m}\bigl(\int_a^b f_i\bigr)e_i$.

**Oriented limits.** Following [[def-oriented-integral]] componentwise, set

$$\int_a^a f \;:=\; 0 \in \mathbb{R}^{m}, \qquad \int_b^a f \;:=\; -\int_a^b f \quad (a < b),$$

so that $\int_u^v f = -\int_v^u f$ for all $u,v$ in an interval on which $f$ is
integrable. The clauses do not overlap with the case $a<b$, so nothing has to be
checked for consistency, exactly as in [[def-oriented-integral]].

**Linearity.** If $f, g : [a,b] \to \mathbb{R}^{m}$ are integrable and
$\lambda,\mu \in \mathbb{R}$ then $\lambda f + \mu g$ is integrable with

$$\int_a^b (\lambda f + \mu g) \;=\; \lambda\int_a^b f + \mu\int_a^b g ,$$

since each side has $i$-th coordinate $\int_a^b(\lambda f_i + \mu g_i)$ and
$\lambda\int_a^b f_i + \mu\int_a^b g_i$ respectively, and those agree by
[[thm-linearity-of-the-integral]].

**Restriction and splitting.** If $f$ is integrable on $[a,b]$ then it is
integrable on every closed subinterval, and for $a<c<b$,
$\int_a^b f = \int_a^c f + \int_c^b f$; both are the componentwise readings of
[[lem-integrability-on-a-subinterval]] and
[[thm-additivity-over-subintervals]], applied to each $f_i$ and reassembled
coordinate by coordinate.

## Remarks

- **The two halves are independent.** The derivative clause needs no integral and
  the integral clause needs no derivative; they are collected in one item because
  they are the two constructions of the one-dimensional theory that transfer to
  $\mathbb{R}^{m}$ by the same move, and because
  [[cor-vector-valued-ftc-and-lipschitz-bound]] is what joins them.

- **Why the intrinsic derivative is stated first.** The componentwise formula is
  the one used in computations, but it is tied to the standard basis, whereas the
  limit of the difference quotient is not. The intrinsic form is the one that
  survives when the domain is enlarged from an interval to a subset of
  $\mathbb{R}^{n}$, which is a later page of this track.

- **No norm appears in either definition.** The derivative is a limit in
  $(\mathbb{R}^{m}, d_2)$, and by [[thm-all-norms-on-rn-are-equivalent]] the same
  limits are obtained from any other norm, so the notion does not depend on the
  choice ([[def-p-norms-on-rn]], [[def-euclidean-inner-product]]). The integral
  is defined coordinatewise and mentions no metric at all.

- **Integrability of $\lVert f\rVert_2$ is a separate matter** and is not part of
  this definition: it is proved, together with the inequality it belongs to, in
  [[thm-norm-inequality-for-the-vector-valued-integral]].
