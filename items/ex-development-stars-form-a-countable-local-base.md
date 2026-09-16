---
id: ex-development-stars-form-a-countable-local-base
kind: example
title: "Development stars form a countable local base"
status: draft
origin: pipeline
deps: [def-moore-spaces-and-developments, def-metric-space, def-metric-ball, def-metric-topology, def-neighbourhood-top, def-cover-refinement-and-local-finiteness]
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Dennis K. Burke, The Normal Moore Space Problem"
      url: "https://dmitripavlov.org/scans/ttu15.pdf"
      locator: "Definitions 1.1-1.2 and Example 1.1, printed pp. 1-2"
---

## Example

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]). For $n \in \mathbb N$ let
$$\mathcal G_n := \{\, B(x, 2^{-n}) : x \in X \,\},$$
the cover by open balls of radius $2^{-n}$ ([[def-metric-ball]]). The example
computes the stars $\operatorname{St}(x, \mathcal G_n)$ and verifies that
$(\mathcal G_n)$ is a development, so that every metric space is a Moore space
in the sense of [[def-moore-spaces-and-developments]].

## Facts & Assumptions

**Given:** A metric space $(X,d)$, its balls $B(x,r)$, and the covers $\mathcal G_n = \{B(x,2^{-n}) : x \in X\}$.

[F1] Star: $\operatorname{St}(x,\mathcal G_n) = \bigcup \{\, B(z,2^{-n}) : x \in B(z,2^{-n}) \,\}$, and each $\mathcal G_n$ is an open cover because $x \in B(x,2^{-n})$ ([[def-cover-refinement-and-local-finiteness]], [[def-metric-ball]]).

[L1] Metric axioms: $d(x,y) \ge 0$ with $d(x,y) = 0$ only for $x = y$, symmetry, and the triangle inequality $d(x,y) \le d(x,z) + d(z,y)$ ([[def-metric-space]]).

[L2] A set is open in the metric topology exactly when each of its points has a ball inside it, and balls are open ([[def-metric-topology]], [[def-metric-ball]]).

## Verification

**Proof technique:** direct.

1.1 For every $x$ and $n$ one has $B(x,2^{-n}) \subseteq \operatorname{St}(x,\mathcal G_n) \subseteq B(x,2^{1-n})$: the first inclusion holds because $x \in B(x,2^{-n})$; for the second, if $y \in B(z,2^{-n})$ with $x \in B(z,2^{-n})$ then $d(x,y) \le d(x,z) + d(z,y) < 2^{-n} + 2^{-n} = 2^{1-n}$ by [L1]. [given, F1, L1]

2.1 Hence $(\mathcal G_n)$ is a development. Let $U$ be open and $x \in U$ ([[def-neighbourhood-top]]). By [L2] there is $\varepsilon > 0$ with $B(x,\varepsilon) \subseteq U$; choose $n$ with $2^{1-n} < \varepsilon$; then step 1.1 gives $\operatorname{St}(x,\mathcal G_n) \subseteq B(x,2^{1-n}) \subseteq B(x,\varepsilon) \subseteq U$. [step 1.1, L2]

3.1 Consequently every metric space is developable, and since metric spaces are regular $T_1$, every metric space is a Moore space; the star family $\{\operatorname{St}(x,\mathcal G_n) : n \in \mathbb N\}$ is the countable local base at $x$ supplied by step 1.1. [step 1.1, step 2.1] ∎

## Remarks

- **The radii are halved twice.** The lower bound shows the star is not smaller than the ball of radius $2^{-n}$, and the upper bound shows it is contained in the ball of radius $2^{1-n}$; that two-to-one gap is exactly what makes the development property hold with the factor $2$.

- **The same computation works with any null sequence of radii**, the powers $2^{-n}$ being chosen only for definiteness.
