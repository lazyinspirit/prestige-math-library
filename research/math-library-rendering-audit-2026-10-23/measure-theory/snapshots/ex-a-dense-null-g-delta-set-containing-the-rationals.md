---
id: ex-a-dense-null-g-delta-set-containing-the-rationals
kind: example
title: "A dense $G_\\delta$ subset of $\\mathbb{R}$ of Lebesgue measure zero containing every rational, and its meager complement of full measure"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls,
       prop-countable-subsets-of-rn-are-lebesgue-null,
       def-g-delta-and-f-sigma-in-a-topological-space,
       def-nowhere-dense-meager,
       thm-lebesgue-measure-of-a-box-of-every-kind,
       thm-lebesgue-measure-is-a-complete-measure,
       def-countable-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Assume the Axiom of Countable Choice. Then there is a dense $G_\delta$ set
$G \subseteq \mathbb{R}$ with $\mathbb{Q} \subseteq G$ and $\lambda_1(G)=0$.
Consequently $\mathbb{R} \setminus G$ is meager and has full measure on every
bounded interval.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice.

[L1] Every subset of $\mathbb{R}^n$ has a $G_\delta$ measurable hull of the same outer measure ([[cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls]]).

[L2] Every at most countable subset of $\mathbb R^n$ is Lebesgue null ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F1] $A$ is a **$G_\delta$ set of $X$** when there is a sequence $(V_n)_{n \in \mathbb{N}}$ of open subsets of $X$ with $A = \bigcap_{n \in \mathbb{N}} V_n$ ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[F2] $A$ is nowhere dense when the interior of its closure is empty, and a set is meager when it is a countable union of nowhere dense sets ([[def-nowhere-dense-meager]]).

[L3] Assuming countable choice, a box in $\mathbb R^n$ with parameters $a_i \le b_i$ is Lebesgue measurable of measure $\prod_{i<n}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L4] Assuming countable choice, $\lambda_n$ is a complete measure on the sigma-algebra $\mathcal{L}(\mathbb{R}^n)$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

## Verification

**Proof technique:** direct.

1.1 The rational line $\mathbb{Q}$ is countable, hence null by [L2]. Applying [L1] to $\mathbb{Q} \subseteq \mathbb{R}$ gives a $G_\delta$ set $G \supseteq \mathbb{Q}$ with $\lambda_1(G)=0$. [L1, L2]

2.1 Because $\mathbb{Q}$ is dense in $\mathbb{R}$ and $\mathbb{Q} \subseteq G$, the set $G$ is dense; and [F1] records that it is $G_\delta$. [step 1.1, F1, algebra]

3.1 Write $G = \bigcap_{n \in \mathbb N} V_n$ with each $V_n$ open, as in [F1]. Since $G$ is dense and $G \subseteq V_n$, every $V_n$ is dense, so each $F_n := \mathbb{R} \setminus V_n$ is closed with empty interior; hence $\mathbb{R} \setminus G = \bigcup_{n \in \mathbb N} F_n$ is meager by [F2]. Now let $I$ be any bounded interval in $\mathbb{R}$. Step 1.1 gives $\lambda_1(I \cap G)=0$ because $I \cap G \subseteq G$, while [L3] makes $I$ Lebesgue measurable with finite measure equal to its length; therefore [L4] applied to the disjoint union $I = (I \cap G) \sqcup (I \setminus G)$ gives $\lambda_1(I \setminus G) = \lambda_1(I)$, so the complement has full measure on every bounded interval. [step 1.1, step 2.1, F1, F2, L3, L4, algebra] ∎
