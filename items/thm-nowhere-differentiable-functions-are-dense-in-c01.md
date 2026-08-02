---
id: thm-nowhere-differentiable-functions-are-dense-in-c01
kind: theorem
title: "Under Dependent Choice, continuous nowhere differentiable functions form a dense subset of $C([0,1],\\mathbb R)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-baire-category-for-complete-metric-spaces, lem-pointwise-lipschitz-sets-in-c01-are-closed, lem-steep-polygonal-functions-are-dense-in-c01, thm-c-k-complete-in-the-sup-metric, def-derivative]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "A generic continuous function is nowhere differentiable"
      url: "https://www.math.harvard.edu/~elkies/M250.07/nowhere.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Dependent Choice ($\mathrm{DC}$). Then the set of continuous functions $[0,1]\to\mathbb R$ having no finite two-sided derivative at an interior point and no finite one-sided derivative at either endpoint is dense in $C([0,1],\mathbb R)$ for the supremum metric.

## Facts & Assumptions
**Given:** The Axiom of Dependent Choice ($\mathrm{DC}$); for $p,q\in\mathbb N_{>0}$, $E_{p,q}$ is the fixed local-Lipschitz set of [[lem-pointwise-lipschitz-sets-in-c01-are-closed]].

[L1] Each $E_{p,q}$ is closed ([[lem-pointwise-lipschitz-sets-in-c01-are-closed]]).

[L2] Polygonal functions whose nonvertex slopes exceed any prescribed bound are dense ([[lem-steep-polygonal-functions-are-dense-in-c01]]).

[L3] $C([0,1],\mathbb R)$ is a nonempty complete metric space in the supremum metric ([[thm-c-k-complete-in-the-sup-metric]]).

[L4] A finite derivative is the limit of its local difference quotients, with the stated one-sided endpoint convention ([[def-derivative]]).

[L5] Assume the Axiom of Dependent Choice ($\mathrm{DC}$). The intersection of countably many open dense subsets of a nonempty complete metric space is dense ([[thm-baire-category-for-complete-metric-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Each $E_{p,q}$ has empty interior. Indeed, every supremum ball contains by [L2] a polygonal $h$ all of whose nonvertex slopes have absolute value greater than $p$; at any point, including a vertex or endpoint, a sufficiently nearby point on an adjacent affine piece violates the defining $p$-bound. [L2, given, algebra]

1.2 If $f\in G$ had a finite derivative at $a$, [L4] would bound its difference quotients by some integer $p$ on a sufficiently small radius $1/q$, placing $f$ in $E_{p,q}$; this contradicts $f\in G$. [L4, given, algebra]

2.1 Hence every $C([0,1])\setminus E_{p,q}$ is open and dense by [L1]. [L1, step 1.1, algebra]

3.1 Apply [L5] to the complete space of [L3]. The intersection $G=\bigcap_{p,q\ge1}(C([0,1])\setminus E_{p,q})$ is dense. [L3, step 2.1, L5]

4.1 Thus $G$ is a dense subset of the continuous nowhere-differentiable functions, which proves the statement. [step 3.1, step 1.2, algebra] ∎
