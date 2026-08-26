---
id: ex-integers-acting-geometrically-on-the-line
kind: example
title: "The integers act geometrically on the real line"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-geometric-action-on-a-metric-space, lem-real-line-is-a-metric-space, thm-svarc-milnor-lemma]
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

The group $\mathbb Z$ acts geometrically on the real line $\mathbb R$ by
integer translations
$$n \cdot x := x+n.$$
Consequently $\mathbb Z$ is quasi-isometric to $\mathbb R$.

## Facts & Assumptions

**Given:** The usual metric $d(x,y)=|x-y|$ on $\mathbb R$ and the translation action $n \cdot x := x+n$ of $\mathbb Z$ on $\mathbb R$.

[L1] The absolute-value metric makes $\mathbb R$ a metric space ([[lem-real-line-is-a-metric-space]]).

[L2] A geometric action is isometric, proper, and cobounded ([[def-geometric-action-on-a-metric-space]]).

[L3] Under a geometric action on a geodesic metric space, every orbit map is a quasi-isometry ([[thm-svarc-milnor-lemma]]).

## Verification

**Proof technique:** direct.

1.1 Translations preserve absolute-value distance, so the action is isometric. If bounded sets $B,C \subseteq \mathbb R$ are contained in intervals of lengths $M_B,M_C$, then only finitely many integers $n$ can make $(B+n) \cap C \ne \varnothing$. Also every real number lies within distance at most $1$ of some integer, so the action is cobounded. Thus the action is geometric by [L2]. [L1, L2, algebra]

2.1 The real line is geodesic under its usual metric, and step 1.1 gives a geometric action. Hence [L3] makes the orbit map $n \mapsto n \cdot 0 = n$ a quasi-isometry from $\mathbb Z$ to $\mathbb R$. [L1, L3, step 1.1] ∎
