---
id: prop-free-equivalence-is-an-equivalence-and-a-congruence
kind: proposition
title: "Free equivalence is an equivalence relation and concatenation respects it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-alphabet-words-and-reduction, def-equivalence-relation]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-11
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, §1.2"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/reductions.html"
pipeline_run: null
---

## Statement

For words on $X\sqcup X^{-1}$, free equivalence is an equivalence relation in
the sense of [[def-equivalence-relation]]. It is also a congruence for
concatenation: if $w\sim w'$ and $v\sim v'$, then $wv\sim w'v'$.

## Facts & Assumptions

**Given:** A set $X$ and finite words $u,v,w,w',v'$ on $X\sqcup X^{-1}$.

[F1] Words are **freely equivalent** if one can be transformed into the other by finitely many elementary cancellations and their reverse insertions ([[def-alphabet-words-and-reduction]]).

## Proof

**Proof technique:** direct.

1.1 The empty sequence of elementary moves carries every word $w$ to itself, so $w\sim w$. [F1]

1.2 If a finite sequence of elementary moves carries $w$ to $w'$, reversing its order and interchanging every cancellation with the corresponding insertion gives a finite sequence from $w'$ to $w$; hence $w\sim w'$ implies $w'\sim w$. [F1]

1.3 If $w\sim w'$ and $w'\sim w''$, concatenating the two finite move sequences gives a finite move sequence from $w$ to $w''$; hence free equivalence is transitive. [F1]

1.4 If one elementary move changes $w$ to $w'$, then the same adjacent pair can be deleted or inserted inside $uwv$, so the move changes $uwv$ to $uw'v$; applying this to every move in a finite sequence gives $w\sim w'\Rightarrow uwv\sim uw'v$. [F1]

2.1 If $w\sim w'$ and $v\sim v'$, step 1.4 gives $wv\sim w'v$ and $w'v\sim w'v'$; transitivity gives $wv\sim w'v'$. Thus steps 1.1 through 1.3 prove that $\sim$ is an equivalence relation, and this step proves the congruence claim. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
