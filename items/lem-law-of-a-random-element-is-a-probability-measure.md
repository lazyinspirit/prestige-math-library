---
id: lem-law-of-a-random-element-is-a-probability-measure
kind: lemma
title: "The law of a random element is a probability measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-law-or-distribution-of-a-random-element, def-probability-measure, def-random-element-and-real-random-variable]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "S. R. S. Varadhan, Probability Theory, Section 1.6"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch1.pdf"
---

## Statement

Let $X:(\Omega,\mathcal F,\mathbb P)\to(S,\Sigma)$ be a random element. Then
$\mathbb P_X$ is a probability measure on $(S,\Sigma)$.

## Facts & Assumptions

**Given:** A random element $X:(\Omega,\mathcal F,\mathbb P)\to(S,\Sigma)$.

[L1] The law is defined by $\mathbb P_X(B)=\mathbb P(X^{-1}(B))$
([[def-law-or-distribution-of-a-random-element]]).

[L2] A random element is measurable, so measurable target sets have measurable
preimages ([[def-random-element-and-real-random-variable]]).

[L3] A probability measure is a measure with total mass $1$
([[def-probability-measure]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], every $B\in\Sigma$ has $X^{-1}(B)\in\mathcal F$, so [L1] is well defined. Also $X^{-1}(\varnothing)=\varnothing$ and $X^{-1}(S)=\Omega$, so $$\mathbb P_X(\varnothing)=0,\qquad \mathbb P_X(S)=\mathbb P(\Omega)=1.$$ [L1, L2, L3]

1.2 If $(B_n)$ is a pairwise disjoint sequence in $\Sigma$, then the preimages $X^{-1}(B_n)$ are pairwise disjoint and $$X^{-1}\left(\bigcup_n B_n\right)=\bigcup_n X^{-1}(B_n).$$ Therefore $$\mathbb P_X\left(\bigcup_n B_n\right)=\mathbb P\left(\bigcup_n X^{-1}(B_n)\right)=\sum_{n=0}^\infty \mathbb P(X^{-1}(B_n))=\sum_{n=0}^\infty \mathbb P_X(B_n).$$ [L1, L2, L3]

2.1 Steps 1.1 and 1.2 show that $\mathbb P_X$ is a measure of total mass $1$, hence a probability measure by [L3]. [step 1.1, step 1.2, L3] ∎
