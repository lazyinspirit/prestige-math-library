---
id: ex-z-n-acting-geometrically-on-euclidean-n-space
kind: example
title: "Z^n acts geometrically on Euclidean n-space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-geometric-action-on-a-metric-space, lem-metrics-on-rn, thm-svarc-milnor-lemma]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 4.4 and 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Example

For $n \ge 1$, the group $\mathbb Z^n$ acts geometrically on $\mathbb R^n$ by
integer translations
$$m \cdot x := x + m.$$
Hence $\mathbb Z^n$ is quasi-isometric to Euclidean $n$-space.

## Facts & Assumptions

**Given:** The Euclidean metric $d_2$ on $\mathbb R^n$ and the translation action of $\mathbb Z^n$ on $\mathbb R^n$.

[L1] The Euclidean distance $d_2$ is a metric on $\mathbb R^n$ ([[lem-metrics-on-rn]]).

[L2] A geometric action is isometric, proper, and cobounded ([[def-geometric-action-on-a-metric-space]]).

[L3] Under a geometric action on a geodesic metric space, every orbit map is a quasi-isometry ([[thm-svarc-milnor-lemma]]).

## Verification

**Proof technique:** direct.

1.1 Translations preserve Euclidean distance, so the action is isometric. If bounded sets $B,C \subseteq \mathbb R^n$ meet after translation by $m \in \mathbb Z^n$, then each coordinate of $m$ lies in a bounded interval, so only finitely many such integer vectors occur. Also every point of $\mathbb R^n$ lies within Euclidean distance at most $\sqrt n$ of some integer lattice point, so the action is cobounded. Hence the action is geometric by [L2]. [L1, L2, algebra]

2.1 Euclidean space is geodesic, and step 1.1 gives a geometric action. Therefore [L3] makes the orbit map $m \mapsto m \cdot 0 = m$ a quasi-isometry from $\mathbb Z^n$ to $\mathbb R^n$. [L1, L3, step 1.1] ∎
