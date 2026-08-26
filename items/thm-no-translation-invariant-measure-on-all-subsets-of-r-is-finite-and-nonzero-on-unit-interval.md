---
id: thm-no-translation-invariant-measure-on-all-subsets-of-r-is-finite-and-nonzero-on-unit-interval
kind: theorem
title: "Assuming the Axiom of Choice, no translation-invariant measure on $\\mathcal{P}(\\mathbb{R})$ is both finite and nonzero on $[0,1]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-vitali-sets-exist-under-choice-on-r-over-q, thm-rationals-countable,
       def-measure, thm-of-archimedean]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Jacek Cichoń, Aleksander Kharazishvili, and Bogdan Węglorz, Subsets of the Real Line, Chapter 8"
      url: "https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. There is no measure $\mu$ on $\mathcal{P}(\mathbb{R})$
such that

1. $\mu(E+q)=\mu(E)$ for every subset $E \subseteq \mathbb{R}$ and every rational
   $q$;
2. $0<\mu([0,1])<+\infty$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a measure $\mu$ on $\mathcal{P}(\mathbb{R})$, rational-translation invariance of $\mu$, and $0<\mu([0,1])<+\infty$.

[L1] Assuming the Axiom of Choice, a Vitali set in $[0,1]$ exists ([[thm-vitali-sets-exist-under-choice-on-r-over-q]]).

[L2] $\mathbb{Q}$ is countably infinite ([[thm-rationals-countable]]).

[L3] A measure vanishes on $\varnothing$ and is countably additive on pairwise disjoint measurable sequences ([[def-measure]]).

[L4] For every real $M$ there is a natural number $n \ge 1$ with $M < n$ ([[thm-of-archimedean]]).

## Proof

**Proof technique:** contradiction.

1.1 By [L1] fix a Vitali set $V \subseteq [0,1]$, and enumerate $\mathbb{Q} \cap [-1,1]$ as $(q_k)_{k \in \mathbb{N}}$ by [L2]. Exactly as in the Vitali argument, the translates $V+q_k$ are pairwise disjoint, they cover $[0,1]$, and they all lie inside $[-1,2]$. [L1, L2, construct]

1.2 Since $[-1,2] \subseteq [-1,0] \cup [0,1] \cup [1,2]$, translation invariance and finite subadditivity from [L3] give $\mu([-1,2]) \le 3\,\mu([0,1]) < +\infty$. [given, L3, algebra]

2.1 If $\mu(V)=0$, then every translate $V+q_k$ has measure $0$ and countable additivity on the disjoint family of step 1.1 gives $\mu([0,1])=0$, contradicting the hypotheses. [step 1.1, L3, assume-contra]

2.2 If $\mu(V)>0$, choose a natural number $m \ge 1$ with $\mu([-1,2]) < m\,\mu(V)$ by [L4]. The first $m$ translates from step 1.1 are pairwise disjoint subsets of $[-1,2]$, so [L3] gives $\mu([-1,2]) \ge \sum_{k<m}\mu(V+q_k)=m\,\mu(V)$, contradicting the choice of $m$. [step 1.1, step 1.2, L3, L4, assume-contra]

3.1 Steps 2.1 and 2.2 rule out both possibilities for $\mu(V)$, so no such translation-invariant measure $\mu$ exists. [step 2.1, step 2.2, discharge-contradiction] ∎
