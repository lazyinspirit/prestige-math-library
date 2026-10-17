---
id: thm-arzela-ascoli-for-real-ck
kind: theorem
title: "Arzelà--Ascoli for real $C(K)$ under Countable Choice and Dependent Choice: compact closure iff equicontinuous and pointwise bounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-metric-compactness, thm-c-k-complete-in-the-sup-metric, thm-complete-subspace-iff-closed, thm-metric-compactness-equivalences, def-equicontinuity-and-boundedness-in-ck, thm-heine-cantor-metric, def-countable-choice, def-dependent-choice]
aliases: []
landmark: true
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

[L1] Every open cover of the compact metric space $K$ has a finite subcover ([[def-metric-compactness]]).

[L2] $C(K,\mathbb R)$ is complete in the supremum metric ([[thm-c-k-complete-in-the-sup-metric]]).

[L3] A subspace of a complete metric space is complete exactly when it is closed; assuming Countable Choice and Dependent Choice, in a metric space compactness is equivalent to completeness together with total boundedness ([[thm-complete-subspace-iff-closed]], [[thm-metric-compactness-equivalences]]).

[L4] Equicontinuity and pointwise boundedness are as defined in [[def-equicontinuity-and-boundedness-in-ck]].

[L5] A continuous function on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathcal F=\varnothing$, its closure is empty and compact, while both family properties hold vacuously. Hence assume $\mathcal F\ne\varnothing$. Suppose first that $\mathcal F$ is equicontinuous and pointwise bounded, and fix $\varepsilon>0$. Let $\mathcal U$ contain every ball $B(a,r)$ with $a\in K$, $r>0$, and $|f(x)-f(a)|<\varepsilon/3$ for all $f\in\mathcal F$ whenever $d(x,a)<2r$. Equicontinuity makes $\mathcal U$ an open cover without selecting a radius for every $a$. By [L1] take a finite subcover $B(a_i,r_i)$, $i=1,\ldots,N$. Pointwise boundedness supplies finite bounds $M_i$ for the values $|f(a_i)|$. Partition the bounded box $\prod_{i=1}^N[-M_i,M_i]$ into finitely many boxes of coordinate diameter less than $\varepsilon/3$, and choose one member of $\mathcal F$ from each box met by an evaluation vector $(f(a_i))_i$. For any $f\in\mathcal F$, a chosen $g$ in the same box satisfies $|f(a_i)-g(a_i)|<\varepsilon/3$ for all $i$; if $x\in B(a_i,r_i)$, the two equicontinuity bounds give $|f(x)-g(x)|<\varepsilon$. Thus these finitely many representatives form an $\varepsilon$-net. The closure is totally bounded as well, by using an $\varepsilon/2$-net for $\mathcal F$ and approximating each point of its closure by a member of $\mathcal F$. [L1, L4, algebra]

1.2 Conversely suppose the closure is compact. For $\varepsilon>0$, [L3] supplies a finite $\varepsilon/3$-net $g_1,\ldots,g_N$ in the closure. By [L5], a common positive radius makes every $g_i$ vary by less than $\varepsilon/3$. [L3, L5]

2.1 The closure of $\mathcal F$ is closed in the complete space of [L2], hence complete by [L3]. It is totally bounded by step 1.1, so [L3] makes it compact. [L2, L3, step 1.1]

2.2 For $f\in\mathcal F$, choose $g_i$ within $\varepsilon/3$ in supremum distance. The two uniform-distance bounds and step 1.2 give $|f(x)-f(y)|<\varepsilon$ whenever $d(x,y)$ is below the common radius. [step 1.2, algebra]

2.3 The same finite net bounds $|f(a)|$ at each fixed $a\in K$, so $\mathcal F$ is pointwise bounded. [step 1.2, L4, algebra]

3.1 Step 2.1 proves the forward implication; steps 2.2 and 2.3 give equicontinuity and pointwise boundedness in the converse. [step 2.1, step 2.2, step 2.3, L4] ∎
