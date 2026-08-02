---
id: thm-arzela-ascoli-for-real-ck
kind: theorem
title: "Arzelà--Ascoli for real $C(K)$ under Countable Choice and Dependent Choice: compact closure iff equicontinuous and pointwise bounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-equicontinuous-families-have-finite-sup-nets, thm-c-k-complete-in-the-sup-metric, thm-complete-subspace-iff-closed, thm-metric-compactness-equivalences, def-equicontinuity-and-boundedness-in-ck, thm-heine-cantor-metric]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "The Ascoli--Arzelà Theorem (MIT)"
      url: "https://math.mit.edu/~rbm/18.100B/Ascoli-Arzela.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice ([[def-countable-choice]]) and the Axiom of Dependent Choice ([[def-dependent-choice]]).** Let $K$ be a nonempty compact metric space and $\mathcal F\subseteq C(K,\mathbb R)$. Its closure in the supremum metric is compact if and only if $\mathcal F$ is equicontinuous and pointwise bounded.

## Facts & Assumptions
**Given:** The Axiom of Countable Choice, the Axiom of Dependent Choice, and a family $\mathcal F\subseteq C(K,\mathbb R)$.

[L1] An equicontinuous pointwise-bounded family is totally bounded in the supremum metric ([[lem-equicontinuous-families-have-finite-sup-nets]]).

[L2] $C(K,\mathbb R)$ is complete in the supremum metric ([[thm-c-k-complete-in-the-sup-metric]]).

[L3] A subspace of a complete metric space is complete exactly when it is closed; assuming Countable Choice and Dependent Choice, in a metric space compactness is equivalent to completeness together with total boundedness ([[thm-complete-subspace-iff-closed]], [[thm-metric-compactness-equivalences]]).

[L4] Equicontinuity and pointwise boundedness are as defined in [[def-equicontinuity-and-boundedness-in-ck]].

[L5] A continuous function on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\mathcal F$ is equicontinuous and pointwise bounded. By [L1] it is totally bounded, and its closure is totally bounded as well. [L1, algebra]

1.2 Conversely suppose the closure is compact. For a positive $\varepsilon$, choose a finite $\varepsilon/3$-net $g_0,\ldots,g_N$ in the closure; by [L5], a common positive radius makes every $g_i$ vary by less than $\varepsilon/3$. [L3, L5, choose]

2.1 The closure is closed in the complete space of [L2], hence complete by [L3]. Therefore its closure is compact by [L3]. [step 1.1, L2, L3]

2.2 For $f\in\mathcal F$, choose $g_i$ within $\varepsilon/3$ in supremum distance. The two uniform-distance bounds and step 1.2 give $|f(x)-f(y)|<\varepsilon$ whenever $d(x,y)$ is below the common radius. [step 1.2, algebra]

2.3 The same finite net bounds $|f(a)|$ at each fixed $a\in K$, so $\mathcal F$ is pointwise bounded. [step 1.2, L4, algebra]

3.1 Steps 2.2 and 2.3 give equicontinuity and pointwise boundedness, completing the converse. [step 2.2, step 2.3, L4] ∎
