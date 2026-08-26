---
id: ex-cosets-of-q-in-r-and-the-vitali-translates-on-unit-interval
kind: example
title: "The cosets of $\\mathbb{Q}$ in $\\mathbb{R}$ meet $[0,1]$ in pairwise disjoint classes, and rational translates of a Vitali set count them"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-vitali-set-on-the-unit-interval, thm-rationals-countable]
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Vitali set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vitali_set"
pipeline_run: null
---

## Example

Fix a Vitali set $V \subseteq [0,1]$. The equivalence classes of
$x \sim y \iff x-y \in \mathbb{Q}$ meet $[0,1]$ in pairwise disjoint pieces, and
the rational translates of $V$ count those classes exactly:

$$[0,1] \subseteq \bigcup_{q \in \mathbb{Q} \cap [-1,1]} (V+q) \subseteq [-1,2].$$

## Facts & Assumptions

**Given:** A Vitali set $V \subseteq [0,1]$.

[F1] A Vitali set on $[0,1]$ meets each class of $x \sim y \iff x-y \in \mathbb{Q}$ in exactly one point ([[def-vitali-set-on-the-unit-interval]]).

[L2] $\mathbb{Q}$ is countably infinite ([[thm-rationals-countable]]).

## Verification

**Proof technique:** direct.

1.1 Two points $x,y \in [0,1]$ lie in the same class exactly when they differ by a rational, and [F1] says that $V$ contributes one and only one representative to each such class. Thus the pieces $(x+\mathbb{Q}) \cap [0,1]$ are pairwise disjoint and each is hit once by $V$. [F1]

2.1 If $t \in [0,1]$, let $v \in V$ be the unique representative of its class. Then $t-v \in \mathbb{Q}$ and, because $0 \le t,v \le 1$, also $-1 \le t-v \le 1$; so $t \in V + q$ for some $q \in \mathbb{Q} \cap [-1,1]$. Conversely every $v+q$ with $v \in V$ and $q \in [-1,1]$ lies in $[-1,2]$. [step 1.1, L2, algebra] ∎
