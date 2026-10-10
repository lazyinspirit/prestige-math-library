---
id: def-sr-regular-causal-curve-and-worldline
kind: definition
title: "Curves, regular causal curves and future timelike worldlines in affine Minkowski space"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 7
deps:
  - def-sr-affine-minkowski-model
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - def-inertial-frame-and-inertial-chart
  - lem-affine-minkowski-charts-form-a-smooth-atlas
  - def-vector-valued-derivative-and-integral
  - def-vector-valued-functions-limits-and-continuity
  - def-interval
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-affine-minkowski-charts-form-a-smooth-atlas: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  def-interval: mathematical-premise
  lem-euclidean-linear-maps-have-matrices-and-are-bounded: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Sections 3.5 and 3.7 pp. 60-68; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 pp. 27-28 and Section 2.3 pp. 28-30 (PDF pp. 28-31); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $(A,V,\eta,C^{+})$ be an oriented time-oriented affine Minkowski space
([[def-sr-affine-minkowski-model]]) and let $I$ be an order-convex subset of
$\mathbb{R}$ with at least two elements ([[def-interval]]); a **curve** of the
model is a map $x : I \to A$.

### Derivative and regularity of the parametrization

For $s \in I$ and $h \ne 0$ with $s+h \in I$ the **difference quotient**
$\bigl(x(s+h)-x(s)\bigr)/h$ is an element of $V$, the displacement from $x(s)$
to $x(s+h)$ divided by the real number $h$
([[def-sr-affine-minkowski-model]]). Convergence in $V$ is understood through
an inertial frame: for the frame isomorphism $E : \mathbb{R}^{4} \to V$ of an
inertial frame ([[def-inertial-frame-and-inertial-chart]]) put
$|v|_{E} := |E^{-1}v|_{2}$, the Euclidean norm transported by $E$. If $E'$ is
the isomorphism of another inertial frame, then $E'^{-1}E$ and its inverse are
linear maps $\mathbb{R}^{4} \to \mathbb{R}^{4}$, so they are bounded with
constants $K, K' \ge 0$ ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]):
$|v|_{E'} \le K'\,|v|_{E}$ and $|v|_{E} \le K\,|v|_{E'}$ for all $v \in V$.
The two transported norms are therefore equivalent, give the same limits, and
give the same notion of differentiability. The curve is **differentiable at
$s$** when the limit of the difference quotients as $h \to 0$ (over
$h \ne 0$, $s+h \in I$; one-sided at the endpoints of $I$) exists in $V$; then
this limit, written $x'(s) \in V$, is the **tangent vector** of $x$ at $s$, and
it does not depend on the inertial frame used to describe the convergence.

If $x_A : A \to \mathbb{R}^{4}$ is the global chart of an inertial frame
([[def-inertial-frame-and-inertial-chart]], [[lem-affine-minkowski-charts-form-a-smooth-atlas]]),
then $x$ is differentiable at $s$ exactly when the $\mathbb{R}^{4}$-valued map
$x_A \circ x$ is differentiable at $s$ in the sense of
[[def-vector-valued-derivative-and-integral]], because $E^{-1}$ is linear and
carries the difference quotients of $x$ to those of $x_A \circ x$; and then

$$x'(s) = E\bigl((x_A \circ x)'(s)\bigr),$$

where $E : \mathbb{R}^{4} \to V$ is the frame isomorphism
$E(u) = \sum_{a} u^{a} e_{a}$. This value does not depend on the inertial chart
used: two inertial charts are related by an affine bijection with an invertible
linear part ([[lem-affine-minkowski-charts-form-a-smooth-atlas]]), the chain
rule transports the coordinate derivative accordingly, and all norms on the
finite-dimensional space $V$ give the same limit.

The curve is **$C^{1}$** when it is differentiable at every point of $I$ and
the derivative map $s \mapsto x'(s)$, $I \to V$, is continuous, meaning that
the $\mathbb{R}^{4}$-valued map $s \mapsto (x_A \circ x)'(s)$ is continuous
([[def-vector-valued-functions-limits-and-continuity]]); by the equivalence of
transported norms this condition is independent of the inertial frame. It is
**$C^{k}$** for $k \ge 1$ when the derivative map is $C^{k-1}$, with the same
transported reading. A curve on a compact interval $[a,b]$ contained
in $I$ is **piecewise $C^{1}$** when there is a finite partition
$a = s_0 < s_1 < \cdots < s_m = b$ such that $x$ is $C^{1}$ on every open
subinterval $(s_{i-1},s_i)$ and the finite one-sided difference-quotient
derivatives at both ends of every piece exist in $V$. These are limits of
$\bigl(x(t+h)-x(t)\bigr)/h$ over the relevant side of the piece, not assertions
that $x'(s)$ has a limit as $s$ approaches a corner; their finiteness implies
continuity of $x$ at the corners (for a one-sided quotient derivative $v$ at $t$
one has $x(t+h)-x(t) = h\,(v+o(1))$ as $h \to 0$ on that side). No continuous
extension of the open-piece derivative is required. Derivatives at the endpoints
of $I$ are the one-sided difference-quotient limits over $I$.

### Causal character

Let $x$ be differentiable at $s \in I$. Then $x$ is **regular at $s$** if
$x'(s) \ne 0$; $x$ is **timelike** (respectively **null**, **spacelike**,
**causal**) **at $s$** if the vector $x'(s)$ is timelike (respectively null,
spacelike, causal) in the sense of
[[def-causal-classification-of-lorentz-vectors]], and $x$ is
**future-directed at $s$** if $x'(s)$ is future timelike or future null in the
sense of [[def-time-orientation-and-future-causal-sets]]. The zero vector has
no causal character, so only a regular curve has a causal character at $s$.

### Worldlines

A **future timelike worldline** (equivalently, a **massive worldline**) is a
$C^{1}$ curve $x : I \to A$ with $x'(s)$ future timelike for every $s \in I$; a
**future causal curve** (respectively a **future null curve**) is a $C^{1}$
curve with $x'(s)$ future causal (respectively future null) for every
$s \in I$. A **piecewise $C^{1}$ worldline** is a piecewise $C^{1}$ curve whose
tangents at every point of each open smooth piece and whose finite one-sided
difference-quotient tangents at both endpoints of every piece are future
timelike; a **$C^{k}$ worldline** is a worldline whose parametrization is
$C^{k}$. $C^{2}$ regularity is what makes the four-acceleration of
[[def-sr-four-velocity-and-four-acceleration]] available.

The parametrization is part of the curve: the image of a future timelike
worldline is also the image of the past-directed curve $s \mapsto x(-s)$, which
is not a worldline of this model, and no worldline or clock claim is attached to
it. The definition asserts the existence of no worldline beyond those given by
an explicit formula.

## Remarks

- **Well-definedness.** The difference quotient is an element of $V$ because
the affine action assigns a displacement to every ordered pair of events. The
limit in $V$ is taken in the transported Euclidean norm $|v|_{E} = |E^{-1}v|_{2}$
of an inertial frame isomorphism $E$, and the choice of frame does not matter:
for inertial frames $E$ and $E'$ the maps $E'^{-1}E$ and its inverse are
Euclidean linear maps, so by
[[lem-euclidean-linear-maps-have-matrices-and-are-bounded]] they are bounded
with constants $K, K' \ge 0$, which gives
$|v|_{E'} \le K'|v|_{E}$ and $|v|_{E} \le K|v|_{E'}$ on $V$; equivalent norms
have the same convergent sequences and the same limits, and hence the same
derivative $x'(s)$. The identification with the coordinate calculus, the value
$x'(s) = E\bigl((x_A \circ x)'(s)\bigr)$, the independence of the class $C^{k}$
and the continuity of $x'$ are then read through the same linear isomorphism,
with the published vector-valued derivative and continuity of
[[def-vector-valued-derivative-and-integral]] and
[[def-vector-valued-functions-limits-and-continuity]] as the coordinate
calculus, and the one-sided endpoint derivatives are the one-sided limits over
the domain $I$ used by that same definition. The affine chart transitions of
[[lem-affine-minkowski-charts-form-a-smooth-atlas]] are consistent with this
dictionary: they are affine with an invertible linear part, so they compose the
coordinate calculus with a bounded linear change of coordinates.
- **Regularity is implicit in every causal character.** Because the zero vector
is excluded from timelike, null and spacelike alike
([[def-causal-classification-of-lorentz-vectors]]), the future timelike
condition $x'(s) \in C^{+}$ already contains $x'(s) \ne 0$, and each side of a
corner in the piecewise clause is required to carry a nonzero future timelike
one-sided tangent. Null and spacelike curves are distinguished from massive
worldlines and are used later only to delimit the proper-time construction,
which is stated for future timelike worldlines alone.
- **No choice principle is used.** All objects are finite-dimensional or
explicitly parametrized; the definition selects nothing from a family.
