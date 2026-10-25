---
id: ex-a-proper-isometric-action-that-is-not-cobounded
kind: example
title: "Horizontal translations of Z on the Euclidean plane are proper but not cobounded"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-isometric-proper-and-cobounded-actions-on-metric-spaces, lem-metrics-on-rn]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 4.4 and 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
pipeline_run: null
---

## Example

Let $\mathbb Z$ act on $\mathbb R^2$ by horizontal translations
$$n \cdot (x,y) := (x+n,\ y).$$
This action is isometric and proper, but it is not cobounded.

## Facts & Assumptions

**Given:** The Euclidean metric on $\mathbb R^2$ and the translation action $n \cdot (x,y) := (x+n,y)$ of $\mathbb Z$.

[L1] The Euclidean distance is a metric on $\mathbb R^2$ ([[lem-metrics-on-rn]]).

[L2] Properness and coboundedness are the conditions of [[def-isometric-proper-and-cobounded-actions-on-metric-spaces]].

## Verification

**Proof technique:** direct.

1.1 Horizontal translation preserves Euclidean distance, so the action is isometric. If bounded sets $B,C \subseteq \mathbb R^2$ meet after translation by $n \in \mathbb Z$, then the $x$-coordinates of points in $B$ and $C$ differ by $n$, so only finitely many integers occur. Thus the action is proper in the sense of [L2]. [L1, L2, algebra]

1.2 Every orbit is a horizontal line $\mathbb Z + x$ at fixed $y$-coordinate. So the distance from $(0,m)$ to every orbit point of $(0,0)$ is at least $|m|$, and these distances are unbounded as $m \to \infty$. Hence no bounded set of translates covers $\mathbb R^2$, so the action is not cobounded. [L2, algebra]

2.1 Therefore the action is proper but not cobounded. [step 1.1, step 1.2] ∎
