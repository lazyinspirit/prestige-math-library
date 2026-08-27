---
id: thm-subexponential-growth-implies-amenability
kind: theorem
title: "Under the ultrafilter lemma, subexponential growth implies amenability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-growth-function-of-a-finitely-generated-group, def-polynomial-subexponential-exponential-and-intermediate-growth, thm-folner-criterion-for-amenability]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Statement

Assume the ultrafilter lemma. Every finitely generated group of
subexponential growth is amenable.

## Facts & Assumptions

**Given:** A finitely generated group $G$ with a finite generating set $S$, subexponential growth, and the ultrafilter lemma.

[L1] The growth function counts word-metric balls ([[def-growth-function-of-a-finitely-generated-group]]).

[L2] Subexponential growth means that no exponential lower bound occurs ([[def-polynomial-subexponential-exponential-and-intermediate-growth]]).

[L3] Under the ultrafilter lemma, the Folner condition implies amenability ([[thm-folner-criterion-for-amenability]]).

## Proof

**Proof technique:** direct.

1.1 Let $B_n$ be the word-metric ball of radius $n$ about the identity. If some $\delta>0$ satisfied $|SB_n|\ge(1+\delta)|B_n|$ for every $n$, then iterating would give $|B_n|\ge(1+\delta)^n$ up to multiplicative constants, contradicting the subexponential alternative in [L2]. Therefore for every $\varepsilon>0$ there exists $n$ with $|SB_n\setminus B_n|<(\varepsilon/2)|B_n|$. [L1, L2, given, algebra]

2.1 For such an $n$, every $s\in S$ satisfies $|sB_n\setminus B_n|\le|SB_n\setminus B_n|<(\varepsilon/2)|B_n|$, so the boundary formulation of [L3] makes $B_n$ an $(S,\varepsilon)$-Folner set. Hence $G$ satisfies the Folner condition, and [L3] shows that $G$ is amenable. [L3, step 1.1, algebra] ∎
