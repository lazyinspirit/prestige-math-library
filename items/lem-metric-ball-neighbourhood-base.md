---
id: lem-metric-ball-neighbourhood-base
kind: lemma
title: "The balls $B(x, 1/n)$, $n \\ge 1$, form a countable neighbourhood base at $x$, so every metric space is first countable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-metric-ball, def-metric-topology, cor-archimedean-reciprocal, thm-of-archimedean,
       lem-of-inverse-positive, def-natural-numbers, def-countable, def-equinumerous,
       lem-countable-iff-surjection-from-n, lem-of-naturals-positive,
       thm-metric-open-set-algebra, def-metric-space, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "metric spaces are first countable"
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
    - title: "First-countable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First-countable_space"
    - title: "Neighbourhood system (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_system"
    - title: "J. Munkres, Topology, 2nd ed., §30"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $x \in X$. For a
natural $n \ge 1$ write $1/n$ for the inverse of the canonical natural
$n \cdot 1_{\mathbb{R}}$, a positive real, and put

$$\beta_n := B\big(x, 1/n\big), \qquad \mathcal{B}_x := \{\, \beta_n : n \in \mathbb{N},\ n \ge 1 \,\}.$$

Then:

1. $\mathcal{B}_x$ is at most countable ([[def-countable]]).
2. Every $\beta_n$ is an open subset of $X$ containing $x$.
3. For every open $U \subseteq X$ with $x \in U$ there is $n \ge 1$ with
   $\beta_n \subseteq U$.

**The two names used in the title are introduced by this statement, not cited
from elsewhere.** A family of open sets each containing $x$, such that every open
set containing $x$ contains a member of the family, is a **neighbourhood base at
$x$**; a space in which every point has an at most countable neighbourhood base
is **first countable**. Claims 1 to 3 say that $\mathcal{B}_x$ is an at most
countable neighbourhood base at $x$, so **every metric space is first
countable**.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a point $x \in X$, and for each natural $n \ge 1$ the ball $\beta_n = B(x, 1/n)$.

[L1] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]), hence $n \cdot 1_{\mathbb{R}}$ is invertible with $1/n > 0$ ([[lem-of-inverse-positive]]); and $\mathbb{N}$ contains $0$, so $j \mapsto j + 1$ runs over exactly the naturals $\ge 1$ as $j$ runs over $\mathbb{N}$ ([[def-natural-numbers]]).

[L2] Balls are open and every ball contains its centre ([[thm-metric-open-set-algebra]], [[def-metric-ball]]); and $B(x,s) \subseteq B(x,t)$ whenever $0 < s \le t$ ([[def-metric-ball]]).

[L3] Open sets: $U$ is open when every point of $U$ has a ball around it inside $U$ ([[def-metric-topology]]).

[L4] Reciprocal Archimedean property: for every real $r > 0$ there is a natural $n \ge 1$ with $1/n < r$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L5] Countability: a nonempty set admitting a surjection from $\mathbb{N}$ is at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 For every natural $n \ge 1$ the real $1/n$ is defined and positive, so $\beta_n$ is a legitimate ball of positive radius. [L1]

1.2 Let $U$ be open with $x \in U$, and fix a real $r > 0$ with $B(x,r) \subseteq U$; then fix a natural $n \ge 1$ with $1/n < r$. [L3, L4, choose]

2.1 Each $\beta_n$ is open and contains $x$, which is claim 2. [step 1.1, L2]

2.2 The map $s : \mathbb{N} \to \mathcal{B}_x$ given by $s(j) := \beta_{j+1}$ is well defined by step 1.1 and is surjective, because every member of $\mathcal{B}_x$ is $\beta_n$ for some $n \ge 1$ and $n = j+1$ for the natural $j$ with $j + 1 = n$; moreover $\mathcal{B}_x$ is nonempty, containing $\beta_1$. [step 1.1, L1]

2.3 By step 1.2 and monotonicity of balls in the radius, $\beta_n = B(x,1/n) \subseteq B(x,r) \subseteq U$, which is claim 3. [step 1.2, L2]

3.1 By [L5] applied to the surjection of step 2.2, the nonempty set $\mathcal{B}_x$ is at most countable, which is claim 1. [step 2.2, L5]

4.1 Claims 1, 2 and 3 hold by steps 3.1, 2.1 and 2.3, so $\mathcal{B}_x$ is an at most countable neighbourhood base at $x$ and $(X,d)$ is first countable. [step 2.1, step 2.3, step 3.1] ∎

## Remarks

- **The family can be finite, and that is not a defect.** In a discrete metric
  space $1/n \le 1$ for every $n \ge 1$, so every $\beta_n$ is the single point
  $\{x\}$ and $\mathcal{B}_x$ is a one-element family. "At most countable" in
  this library includes finite ([[def-countable]]), which is exactly why claim 1
  is stated in that form and not as "countably infinite".
- **Only the reciprocal form of the Archimedean property is used**, in step 1.2,
  and it is the form recorded as [[cor-archimedean-reciprocal]] precisely so that
  the inversion never has to be redone inside a proof.
- **This is what makes sequences sufficient in metric spaces.** First
  countability is the hypothesis under which closure can be described by
  sequences rather than by nets, and it is used in exactly that way by
  [[thm-metric-sequential-closure]].
