---
id: cex-sphere-is-not-the-boundary-of-the-ball
kind: counterexample
title: "In the discrete metric the boundary of $B(p,1)$ is empty while the sphere of radius $1$ is everything but $p$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-discrete-metric, def-metric-ball, def-metric-interior-closure-boundary,
       def-metric-topology, thm-metric-closure-characterisation, def-metric-space]
justified_by: []
aliases: []
landmark: false
short: "$\\partial B(p,1) = \\emptyset \\ne S(p,1)$"
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "Ball (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ball_(mathematics)"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** in every metric space, the boundary of the open ball is the
sphere of the same centre and radius,

$$\partial B(x,r) = S(x,r)$$

([[def-metric-interior-closure-boundary]], [[def-metric-ball]]).

The witness is any set $X$ with at least two points, carrying the discrete metric
$\delta$ ([[ex-discrete-metric]]), together with $x = p \in X$ and $r = 1$. There

$$B(p,1) = \{p\}, \qquad \partial B(p,1) = \emptyset, \qquad S(p,1) = X \setminus \{p\} \ne \emptyset .$$

## Facts & Assumptions

**Given:** A set $X$ with at least two points, the discrete metric $\delta$ on it, a point $p \in X$ and a point $q \in X$ with $q \ne p$.

[L1] The discrete metric: $\delta$ is a metric, $B(p,1) = \{p\}$, $S(p,1) = X \setminus \{p\}$, and every subset of $X$ is both open and closed ([[ex-discrete-metric]], [[def-metric-space]], [[def-metric-ball]], [[def-metric-topology]]).

[L2] Interior, closure, boundary: $\operatorname{int}(A)$ is the largest open subset of $A$, $\overline{A}$ the smallest closed superset of $A$, and $\partial A = \overline{A} \setminus \operatorname{int}(A)$ ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]]).

## Counterexample

**Proof technique:** direct.

1.1 In $(X,\delta)$ the open ball is $B(p,1) = \{p\}$ and the sphere is $S(p,1) = X \setminus \{p\}$, which is nonempty because $q \ne p$ lies in it. [given, L1]

1.2 The set $\{p\}$ is open and closed in $(X,\delta)$, every subset of a discrete metric space being clopen. [L1]

2.1 Hence $\operatorname{int}(\{p\}) = \{p\}$, since $\{p\}$ is an open subset of itself and the interior is the largest one; and $\overline{\{p\}} = \{p\}$, since $\{p\}$ is a closed superset of itself and the closure is the smallest one. [step 1.2, L2]

3.1 Therefore $\partial B(p,1) = \overline{\{p\}} \setminus \operatorname{int}(\{p\}) = \{p\} \setminus \{p\} = \emptyset$, while $S(p,1)$ contains $q$ and is not empty. [step 1.1, step 2.1, L2]

4.1 The two sets differ, so the discrete metric on any set with at least two points refutes the claim. [step 3.1] ∎

## Remarks

- **One inclusion does survive.** In any metric space
  $\partial B(x,r) \subseteq S(x,r)$: the ball $B(x,r)$ is open
  ([[thm-metric-open-set-algebra]]), so it is its own interior and
  $\partial B(x,r) = \overline{B(x,r)} \setminus B(x,r)$, which sits inside
  $\bar B(x,r) \setminus B(x,r) = S(x,r)$ because
  $\overline{B(x,r)} \subseteq \bar B(x,r)$
  ([[fs-closed-ball-is-the-closure-of-the-open-ball]], [[def-metric-ball]]). What
  the witness above shows is that the inclusion can be strict, and as strict as
  possible: empty on the left, everything but the centre on the right.
- **It is the same defect as** [[fs-closed-ball-is-the-closure-of-the-open-ball]]:
  the names *open ball*, *closed ball* and *sphere* are labels for three sets
  defined by three inequalities ([[def-metric-ball]]), and none of the
  topological relations suggested by the words is automatic.
- **Every point of a discrete space is isolated**, so no ball has any boundary at
  all; the post-office metric ([[ex-post-office-metric]]) shows the intermediate
  case, where all but one point is isolated.
