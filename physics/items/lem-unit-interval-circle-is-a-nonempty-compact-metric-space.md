---
id: lem-unit-interval-circle-is-a-nonempty-compact-metric-space
kind: lemma
title: The unit-interval circle is a nonempty compact metric space
status: published
origin: pipeline
deps: [def-circle-rotation-and-doubling-map, thm-heine-borel-rn, thm-compactness-under-continuous-maps, thm-compactness-agrees-with-metric-compactness]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Stacks Project, Section 5.12 (Tag 0059): Quasi-compact spaces and maps"
      url: "https://stacks.math.columbia.edu/tag/0059"
      locator: "Continuous images of quasi-compact spaces; combined locally with Heine–Borel"
proof_strategy: direct
---

## Statement

The circle $\mathbb T=[0,1)$ with

$$d(x,y)=\min(|x-y|,1-|x-y|)$$

is a nonempty compact metric space.

## Facts & Assumptions

**Given:** The interval model and circle metric of [[def-circle-rotation-and-doubling-map]].

[F1] The ordinary interval $[0,1]$ is compact by Heine–Borel ([[thm-heine-borel-rn]]).

[F2] A continuous image of a compact space is compact ([[thm-compactness-under-continuous-maps]]).

[F3] Topological and metric compactness agree for a metric topology ([[thm-compactness-agrees-with-metric-compactness]]).

## Proof

**Proof technique:** direct continuous-image argument.

1.1 Define $q:[0,1]\to\mathbb T$ by $q(t)=t$ for $t<1$ and $q(1)=0$.  Equivalently $q(t)=\{t\}$.  For $s,t\in[0,1]$, the circle-distance formula gives $$d(q(s),q(t))\leq|s-t|,$$ including when one endpoint is $1$.  Thus $q$ is continuous.  It is surjective because every $x\in[0,1)$ equals $q(x)$. [given, algebra]

2.1 By [F1], $[0,1]$ is compact.  Its continuous image under $q$ is all of $\mathbb T$, so [F2] makes the circle compact; [F3] reads this in the metric sense.  Finally $0\in\mathbb T$, so it is nonempty. [F1, F2, F3, step 1.1] ∎
