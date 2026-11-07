---
id: lem-limsup-subsets-of-shrinking-balls-have-same-measure
kind: lemma
title: "Positive-density subsets of shrinking balls preserve limsup measure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-density-theorem
  - thm-lebesgue-measure-under-dilations-and-reflections
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, A note on zero-one laws in metrical Diophantine approximation, Lemma 1"
      url: "https://arxiv.org/pdf/0803.2355v1"
---

## Statement

Assume the Axiom of Countable Choice. Let $B_i$ be Euclidean balls in $\mathbb R^k$ with $|B_i|\to0$, and let $U_i$ be measurable sets with $U_i\subseteq B_i$ and $|U_i|\ge c|B_i|$ for one constant $c>0$ and every $i$. Then

$$\left|\limsup_{i\to\infty}U_i\right|=\left|\limsup_{i\to\infty}B_i\right|,$$

where $\limsup_i A_i:=\bigcap_{j=1}^\infty\bigcup_{i>j}A_i$.

## Statement references

[Beresnevich and Velani, *A note on zero-one laws in metrical Diophantine approximation*, Lemma 1](https://arxiv.org/pdf/0803.2355v1)

## Facts & Assumptions

**Given:** Countable Choice, a sequence of shrinking Euclidean balls, and measurable subsets occupying a fixed positive fraction of each ball.

[A1] Countable Choice supplies the countably additive Lebesgue measure used here. ([[def-countable-choice]])

[F1] Almost every point of a measurable set is a density point; at a density point, the relative measure of the set in shrinking centered balls tends to $1$. ([[thm-lebesgue-density-theorem]])

[F2] Under Countable Choice, Lebesgue measurable sets form a sigma-algebra and Lebesgue measure is countably additive. ([[thm-lebesgue-measure-is-a-complete-measure]])

[F3] A Euclidean ball has positive finite measure, and dilation by a factor $a>0$ multiplies its measure by $a^k$. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[thm-lebesgue-measure-under-dilations-and-reflections]])

## Proof




1.1 Since $U_i\subseteq B_i$ for every $i$, one has $\limsup_iU_i\subseteq\limsup_iB_i$, giving $|\limsup_iU_i|\le|\limsup_iB_i|$. [given, algebra]

2.1 Put $B:=\limsup_iB_i$ and $D:=B\setminus\limsup_iU_i$. For $j\ge1$, let $D_j:=B\cap\bigcap_{i>j}U_i^c$. Then $D=\bigcup_jD_j$. If $|D|>0$, [F2] implies that some $D_j$ has positive measure; choose a density point $x_0$ of that $D_j$ using [F1]. [step 1.1, F1, F2, algebra]

3.1 Since $x_0\in B$, there are infinitely many indices $i_s$ with $x_0\in B_{i_s}$; take $i_s>j$. Write $r_s$ for the radius of $B_{i_s}$. The containment $B_{i_s}\subseteq B(x_0,2r_s)$, density of $D_j$ at $x_0$, and [F3] imply that the ratio below is at most $2^k$ times the relative complement measure in the centered ball: $\displaystyle \frac{|B_{i_s}\setminus D_j|}{|B_{i_s}|}\le\frac{|B(x_0,2r_s)\setminus D_j|}{|B_{i_s}|}\longrightarrow0,$ so $|D_j\cap B_{i_s}|/|B_{i_s}|\to1$. But $D_j\cap U_{i_s}=\varnothing$ by the definition of $D_j$, while $|U_{i_s}|\ge c|B_{i_s}|$. Hence $|D_j\cap B_{i_s}|\le(1-c)|B_{i_s}|$ for every such $i_s$, a contradiction. Therefore $|D|=0$. [given, step 2.1, F1, F3, algebra]

4.1 The nullity of $D$ gives $|\limsup_iB_i|\le|\limsup_iU_i|$; combining with step 1.1 proves equality. [step 1.1, step 3.1, F2] ∎
