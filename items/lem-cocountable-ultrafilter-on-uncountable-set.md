---
id: lem-cocountable-ultrafilter-on-uncountable-set
kind: lemma
title: "An ultrafilter containing all cocountable subsets"
status: draft
origin: pipeline
deps: [def-filter, thm-ultrafilter-lemma, thm-countable-union-of-countable, lem-subset-of-countable, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Lemma 16.36 proof, assertion (1), printed p331; proper-filter construction expanded locally"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC, for every uncountable set $X$ there is an ultrafilter $\mathcal U$ on $X$ containing every cocountable subset of $X$. Every member of $\mathcal U$ is uncountable. No countable-completeness assertion is made.

## Facts & Assumptions

**Given:** An uncountable set $X$; assume AC.

[F1] A filter contains $X$, omits $\varnothing$, and is closed upward and under pairwise intersection. [[def-filter]]

[F2] Under AC every filter extends to an ultrafilter. [[thm-ultrafilter-lemma]]

[F3] A countable union of countable sets is countable under countable choice. [[thm-countable-union-of-countable]]

[F4] Subsets of countable sets are countable. [[lem-subset-of-countable]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 Set $\mathcal F=\{A\subseteq X:X\setminus A\text{ is countable}\}$. It contains $X$ because the empty set is countable, and omits $\varnothing$ because $X$ is uncountable. If $A\in\mathcal F$ and $A\subseteq B\subseteq X$, then $X\setminus B\subseteq X\setminus A$, so F4 gives $B\in\mathcal F$. [F4, given]

2.1 If $A,B\in\mathcal F$, then $X\setminus(A\cap B)=(X\setminus A)\cup(X\setminus B)$ is countable: apply F3 to the sequence with these first two terms and empty remaining terms, using the countable choice supplied by A1. Therefore $A\cap B\in\mathcal F$. Together with step 1.1 this verifies every filter axiom in F1. [F1, F3, A1, step 1.1]

3.1 Apply F2 to this proper filter, using A1, to obtain an ultrafilter $\mathcal U\supseteq\mathcal F$. If countable $D\subseteq X$ belonged to $\mathcal U$, its complement would belong to $\mathcal F\subseteq\mathcal U$; F1 would put $D\cap(X\setminus D)=\varnothing$ in $\mathcal U$, contradicting properness. Thus every member of $\mathcal U$ is uncountable. Only pairwise intersections were used. [F1, F2, A1, step 1.1, step 2.1] ∎
