---
id: thm-metric-hausdorff-separation
kind: theorem
title: "Distinct points of a metric space have disjoint balls around them"
status: published
origin: session
deps: [def-metric-space, def-metric-ball, def-metric-topology, lem-of-add-order,
       lem-metric-nonnegativity, thm-metric-open-set-algebra, cor-of-one-positive,
       lem-of-inverse-positive, lem-of-sign-rules, def-field, def-ordered-field,
       def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "metric spaces are Hausdorff"
proof_strategy: direct
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
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $p, q \in X$ with
$p \ne q$. Put $r := d(p,q)/2$. Then $r > 0$ and

$$B(p,r) \cap B(q,r) = \emptyset .$$

Both sets are open ([[thm-metric-open-set-algebra]]) and contain $p$
respectively $q$ ([[def-metric-ball]]), so every metric space is **Hausdorff**:
distinct points are separated by disjoint open sets
([[def-metric-topology]]).

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and points $p, q \in X$ with $p \ne q$; write $c := d(p,q)$.

[L1] Separation (M1), symmetry (M2) and the triangle inequality (M3) of a metric ([[def-metric-space]]); and $d \ge 0$ ([[lem-metric-nonnegativity]]).

[L2] Halving. For a real $c > 0$ put $2 := 1 + 1$ and $c/2 := c \cdot 2^{-1}$. Then $2 > 0$, so $2 \ne 0$ and $2^{-1} > 0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]]); hence $c/2 > 0$ ([[lem-of-sign-rules]]); and $c/2 + c/2 = c(2 \cdot 2^{-1}) = c$ ([[def-field]]).

[L3] Adding two strict inequalities: $a < b$ and $a' < b'$ give $a + a' < b + b'$ ([[lem-of-add-order]]).

[L4] Trichotomy of the order of $\mathbb{R}$: $a < a$ is impossible, and $a \ne 0$ together with $a \ge 0$ gives $a > 0$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L5] Membership in a ball: $z \in B(u,t)$ means $d(u,z) < t$; balls are open and contain their centres ([[def-metric-ball]], [[thm-metric-open-set-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Since $p \ne q$, axiom (M1) gives $c = d(p,q) \ne 0$, and $c \ge 0$, so $c > 0$ by trichotomy; hence $r := c/2$ is a positive real with $r + r = c$. [given, L1, L2, L4]

2.1 Suppose some $z \in X$ lay in both $B(p,r)$ and $B(q,r)$, that is $d(p,z) < r$ and $d(q,z) < r$; then symmetry and the triangle inequality give $c = d(p,q) \le d(p,z) + d(z,q) = d(p,z) + d(q,z) < r + r = c$, so $c < c$, which trichotomy forbids. [step 1.1, L1, L3, L4, L5]

3.1 No such $z$ exists, so $B(p,r) \cap B(q,r) = \emptyset$; both sets are open and contain $p$ respectively $q$, so distinct points of $(X,d)$ are separated by disjoint open sets. [step 1.1, step 2.1, L5] ∎

## Remarks

- **This is a strengthening of uniqueness of limits.** A sequence converging to
  two distinct points would eventually be inside both $B(p,r)$ and $B(q,r)$,
  which the theorem forbids; that is a second route to
  [[lem-metric-limits-unique]], and the two proofs use the same halving.
- **Separation (M1) is what the proof spends.** A pseudometric
  ([[def-metric-space]]) with $d(p,q) = 0$ for distinct $p, q$ gives $r = 0$ at
  step 1.1 and there is no ball to speak of; such a space is not Hausdorff, and
  no argument repairs that.
- **The radius $d(p,q)/2$ is not the only choice**, and it is not optimal in
  every space: in an ultrametric space ([[def-metric-space]]) the balls
  $B(p,c)$ and $B(q,c)$ are already disjoint, because a common point would force
  $d(p,q) \le \max\{d(p,z), d(z,q)\} < c$.
