---
id: lem-metric-properness-agrees-with-proper-discontinuity-on-proper-discrete-metric-spaces
kind: lemma
title: "Metric properness agrees with proper discontinuity on proper discrete metric spaces"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-isometric-proper-and-cobounded-actions-on-metric-spaces, def-metric-space]
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

## Statement

Let $G$ act isometrically on a proper discrete metric space $X$. Then the
metric-properness condition of
[[def-isometric-proper-and-cobounded-actions-on-metric-spaces]] is equivalent
to the usual proper-discontinuity condition that for every finite subset
$F \subseteq X$, the set
$$\{\, g \in G : (g \cdot F) \cap F \ne \varnothing \,\}$$
is finite.

Equivalently, it is enough to require that for every $x \in X$ and every
$R \ge 0$, the set
$$\{\, g \in G : d(x,\ g \cdot x) \le R \,\}$$
be finite.

## Facts & Assumptions

**Given:** An isometric action of $G$ on a proper discrete metric space $X$.

[L1] The action is proper when, for every bounded subsets $B,C \subseteq X$, the transporter set $\{\, g \in G : (g \cdot B) \cap C \ne \varnothing \,\}$ is finite ([[def-isometric-proper-and-cobounded-actions-on-metric-spaces]]).

[L2] In a proper discrete metric space, bounded subsets are finite. [given]

## Proof

**Proof technique:** direct.

1.1 If the action is proper in the metric sense, then [L2] turns every finite set into a bounded set. So for every finite $F \subseteq X$, the set $\{\, g \in G : (g \cdot F) \cap F \ne \varnothing \,\}$ is finite by [L1]. [L1, L2]

1.2 Conversely, suppose the finite-set condition holds. Let $B,C \subseteq X$ be bounded. By [L2], the union $F := B \cup C$ is finite. If $(g \cdot B) \cap C \ne \varnothing$, then certainly $(g \cdot F) \cap F \ne \varnothing$, so the transporter of $B$ into $C$ is contained in the finite set supplied for $F$. Hence the action is proper in the metric sense. [L1, L2]

2.1 The finite-set condition implies the pointwise bound by taking $F := \bar B(x,R)$; and the pointwise bound implies the finite-set condition because a finite set lies in some ball $\bar B(x,R)$. Thus all three formulations are equivalent. [step 1.1, step 1.2, algebra] ∎
