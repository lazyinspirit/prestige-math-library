---
id: lem-constant-scaling-limsup-neighborhoods-preserves-measure
kind: lemma
title: "Constant radius scaling preserves the measure of a limsup of neighborhoods"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-under-dilations-and-reflections
  - lem-limsup-subsets-of-shrinking-balls-have-same-measure
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, A note on zero-one laws in metrical Diophantine approximation, §2, Lemma 4"
      url: "https://arxiv.org/pdf/0803.2355v1"
---

## Statement

Assume the Axiom of Countable Choice. Let $k\ge1$, let $Q\subset\mathbb R^k$ be bounded, let $S_i\subseteq Q$, and let $\delta_i>0$ tend to $0$. For $S\subseteq\mathbb R^k$ and $r>0$, define $\Delta(S,r):=\{x\in\mathbb R^k:\operatorname{dist}_2(x,S)<r\}$. Then for every constant $C>1$,

$$\left|\limsup_{i\to\infty}\Delta(S_i,\delta_i)\right|=\left|\limsup_{i\to\infty}\Delta(S_i,C\delta_i)\right|.$$

## Statement references

[Beresnevich and Velani, *A note on zero-one laws in metrical Diophantine approximation*, §2, Lemma 4](https://arxiv.org/pdf/0803.2355v1)

## Facts & Assumptions

**Given:** Countable Choice, bounded center sets, radii tending to zero, and a fixed scale factor $C>1$.

[A1] Countable Choice gives the countably additive Lebesgue measure used on $\mathbb R^k$. ([[def-countable-choice]], [[thm-lebesgue-measure-is-a-complete-measure]])

[F1] If measurable subsets occupy a fixed positive fraction of shrinking balls, their limsup has the same measure as the limsup of the balls. ([[lem-limsup-subsets-of-shrinking-balls-have-same-measure]])

[F2] A dilation by $a>0$ multiplies the measure of a Euclidean ball in $\mathbb R^k$ by $a^k$. ([[thm-lebesgue-measure-under-dilations-and-reflections]])

## Proof




1.1 For each $i$, partition a fixed bounded box containing $Q$ into finitely many cells of Euclidean diameter at most $\delta_i/2$. In each cell meeting $S_i$, choose one point of $S_i$; only finitely many choices are involved. The balls of radius $\delta_i$ centered at these representatives form a finite family. Greedily retain a maximal pairwise disjoint subfamily $\mathcal G_i$. Each omitted ball meets a retained ball of the same radius, so its center is within $2\delta_i$ of a retained center. If $z\in\Delta(S_i,C\delta_i)$, a representative in the cell of a point of $S_i$ within $C\delta_i$ of $z$ is within $\delta_i/2$ of that point; hence $z$ lies in $(C+3)B$ for some retained $B\in\mathcal G_i$. Also every retained ball is contained in $\Delta(S_i,\delta_i)$. [given, choose, algebra]

2.1 Flatten the finite families $\mathcal G_i$ in order of their indices to obtain a sequence of balls $B_t$ whose radii tend to zero; if there are only finitely many retained balls, all the limsup sets below are empty. For $\lambda>0$, put $C(\lambda):=\limsup_i\bigcup_{B\in\mathcal G_i}\lambda B$. Since every $\mathcal G_i$ is finite, this is also the limsup of the flattened sequence of individual balls $\lambda B_t$. Given $\lambda_1,\lambda_2>0$, each smaller ball $\min(\lambda_1,\lambda_2)B_t$ is contained in the corresponding larger ball $\max(\lambda_1,\lambda_2)B_t$, and its measure is a fixed positive fraction $(\min/\max)^k$ of the larger ball by [F2]. Applying [F1] to the flattened sequence shows that $|C(\lambda_1)|=|C(\lambda_2)|$. [given, step 1.1, F1, F2]

3.1 Write $A:=\limsup_i\Delta(S_i,\delta_i)$ and $A_C:=\limsup_i\Delta(S_i,C\delta_i)$. Step 1.1 gives $\displaystyle C(1)\subseteq A\subseteq C(4),\qquad A\subseteq A_C\subseteq C(C+3).$ All sets are measurable as countable unions and intersections of open sets. Step 2.1 gives equal measures to the outer sets in each inclusion chain, so $|A|=|A_C|$. [step 1.1, step 2.1, algebra] ∎
