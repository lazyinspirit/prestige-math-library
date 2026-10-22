---
id: lem-ip-euclidean-radon-representation-under-countable-choice
kind: lemma
title: Euclidean real Radon representation under Countable Choice
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-compact-support-c-c-and-c-zero-on-an-lch-space
  - def-radon-measure-on-an-lch-space
  - lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals
  - lem-ip-smooth-compact-support-dense-in-c0
  - lem-ip-distributional-radon-representation-unique
  - thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures
  - thm-caratheodory-outer-measure-theorem
  - thm-total-variation-is-a-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Donald L. Cohn, Measure Theory, second edition, Chapter 7
      url: https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf
dependency_level: 1
---

## Statement

Assume Countable Choice. For every open $U\subseteq\mathbb R^d$, every bounded real linear functional on $C_0(U;\mathbb R)$ is integration against a unique finite signed Radon measure. No Dependent Choice assumption is required.

## Statement references

[[def-compact-support-c-c-and-c-zero-on-an-lch-space|The spaces of continuous functions used here.]]

[[def-radon-measure-on-an-lch-space|The Radon regularity convention.]]

## Facts & Assumptions

**Given:** Countable Choice, an open Euclidean set $U$, and a bounded real functional $L$ on $C_0(U)$.

[A1] Countable Choice permits simultaneous selection from a countable family of nonempty sets. ([[def-countable-choice]])

[F1] A bounded real functional is a difference of two bounded positive functionals, by a positive-cone supremum construction using no choice axiom. ([[lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals]])

[F2] Every metric outer measure measures all Borel sets; its Caratheodory restriction is a countably additive measure. ([[thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures]], [[thm-caratheodory-outer-measure-theorem]])

[F3] Smooth compactly supported functions are uniformly dense in $C_0(U)$, and finite signed Radon measures agreeing on these tests are equal. ([[lem-ip-smooth-compact-support-dense-in-c0]], [[lem-ip-distributional-radon-representation-unique]])

## Proof

**Given:** The objects in the Statement.

1.1 First let $P$ be bounded and positive. For relatively open $G\subseteq U$ put $p(G)=\sup\{P(f):f\in C_c(U),\ 0\le f\le1,\ \operatorname{supp}f\subseteq G\}$. Then $0\le p(G)\le\|P\|$, $p(\varnothing)=0$, and $p$ is monotone. If a compact $K$ is covered by open sets $G_j$, finitely many suffice, and there are continuous nonnegative compactly supported functions $b_1,\ldots,b_N$, each supported in one of these sets, whose sum is positive on $K$. Indeed cover $K$ by finitely many balls with doubled closures compactly contained in the relevant $G_j$ and use distance cutoffs on these balls. On a neighborhood of $K$ normalize the $b_i$ by their sum. Thus any $f$ supported on $K$ with $0\le f\le1$ decomposes into finitely many $f_i\ge0$ with $\sum f_i=f$ and each $f_i\le1$ compactly supported in its assigned $G_j$; combine terms assigned to the same $j$. Consequently $p(\bigcup_jG_j)\le\sum_jp(G_j)$. For pairwise disjoint opens, adding finitely many admissible functions gives the reverse inequality for every finite partial sum, so $p$ is countably additive on disjoint open unions. These compact partitions use only finite choices. [given, construct]

2.1 Define $\mu^*(A)=\inf\{p(G):A\subseteq G\subseteq U,\ G\text{ open}\}$. For a sequence $(A_j)$ and $\varepsilon>0$, [A1] selects open $G_j\supseteq A_j$ with $p(G_j)<\mu^*(A_j)+\varepsilon2^{-j}$; step 1.1 proves countable subadditivity. Zero and monotonicity are immediate, so $\mu^*$ is an outer measure, and $\mu^*(G)=p(G)$ for open $G$. If $\operatorname{dist}(A,B)>0$, they have disjoint open neighborhoods $V,W$ in $U$. Every open $G\supseteq A\cup B$ satisfies $p(G)\ge p(G\cap V)+p(G\cap W)\ge\mu^*(A)+\mu^*(B)$, by step 1.1. Taking the infimum and using subadditivity proves the metric condition. By [F2], restriction to Borel sets is a finite measure $\mu$ with $\mu(U)\le\|P\|$. [A1, F2, step 1.1, construct]

3.1 For an admissible $f$ in the definition of $p(G)$, let $K=\operatorname{supp}f$. Every open $V\supseteq K$ admits $f$, hence $\mu(K)=\inf_{V\supseteq K}p(V)\ge P(f)$. Taking the supremum over $f$ proves $\mu(G)=\sup_{K\subseteq G\text{ compact}}\mu(K)$. Outer regularity on every Borel set is the definition of $\mu^*$. Finiteness gives compact inner regularity on every Borel set as well: given Borel $A$ and $\varepsilon>0$, choose compact $H\subseteq U$ with $\mu(U\setminus H)<\varepsilon$ and open $V\supseteq U\setminus A$ with $\mu(V\setminus(U\setminus A))<\varepsilon$. Then $H\setminus V\subseteq A$ is compact and misses at most $2\varepsilon$ of $\mu(A)$. Thus $\mu$ is finite Radon, including regularity on all Borel sets. [step 2.1, choose]

4.1 If $0\le g\in C_c(U)$ and $g\le\mathbf1_K$ for compact $K$, the argument in step 3.1 gives $P(g)\le\mu(K)$. If instead $g\ge\mathbf1_K$, then for $0<\eta<1$, the open set $G_\eta=\{g>1-\eta\}$ contains $K$ and every admissible $f$ for $p(G_\eta)$ satisfies $f\le g/(1-\eta)$ on all of $U$. Positivity yields $\mu(K)\le p(G_\eta)\le P(g)/(1-\eta)$. Letting $\eta\downarrow0$ gives $\mu(K)\le P(g)$. [step 1.1, step 3.1, algebra]

5.1 Fix $0\le f\in C_c(U)$ and $\varepsilon>0$, take $N$ with $N\varepsilon\ge\|f\|_\infty$, and put $f_j=\min(\varepsilon,(f-(j-1)\varepsilon)_+)$, $K_0=\operatorname{supp}f$, $K_j=\{f\ge j\varepsilon\}$ for $1\le j\le N$. The sum of the $f_j$ is $f$, and $\varepsilon\mathbf1_{K_j}\le f_j\le\varepsilon\mathbf1_{K_{j-1}}$. Step 4.1 gives the same lower and upper bounds $\varepsilon\mu(K_j)$ and $\varepsilon\mu(K_{j-1})$ for $P(f_j)$ as for $\int f_j\,d\mu$. Summing and telescoping gives $|P(f)-\int f\,d\mu|\le\varepsilon\mu(K_0)$. Hence equality holds for $f\ge0$, then for every real $f\in C_c(U)$ by positive and negative parts. Uniform density [F3], boundedness of $P$, and finiteness of $\mu$ extend the identity to $C_0(U)$. [F3, step 4.1, algebra]

6.1 Apply [F1] to $L=P-Q$ and the preceding construction to $P,Q$, obtaining finite positive Radon measures $\alpha,\beta$. Their difference $\sigma=\alpha-\beta$ represents $L$. Its total variation is dominated by $\alpha+\beta$, hence is regular by compact and open approximation with that finite positive Radon measure. Uniqueness follows from [F3]. All countable selections were the open near-minimizers in step 2.1; all other constructions were explicit or involved finitely many choices. [F1, F3, step 3.1, step 5.1, construct] ∎
