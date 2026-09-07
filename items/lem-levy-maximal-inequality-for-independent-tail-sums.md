---
id: lem-levy-maximal-inequality-for-independent-tail-sums
title: "Levy maximal bound from uniform tail bounds"
kind: lemma
status: published
origin: pipeline
deps: ["def-partial-sums-and-sample-means", "def-independent-random-elements", "thm-grouping-independent-sigma-algebras", "thm-arithmetic-and-lattice-operations-preserve-measurability"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lemma 3.8 and proof, pp. 62\u201363"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
proof_strategy: "Partition by first crossing l. On a crossing with |S_n|<=l/2 the remaining tail has magnitude at least l/2; independence bounds that event by delta times the crossing probability. The complementary final-tail event has probability at most delta."
---

## Statement

Let $X_1,\ldots,X_n$ be independent real random variables, $n\ge1$, with $S_k=\sum_{j=1}^kX_j$. Let $l>0$ and $0\le\delta<1$. If
$$\mathbb P\left(\left|\sum_{j=i}^nX_j\right|\ge l/2\right)\le\delta\quad(1\le i\le n),$$
then
$$\mathbb P(\max_{k\le n}|S_k|\ge l)\le\frac\delta{1-\delta}.$$
No centering or moment assumption is required.

## Facts & Assumptions

[F1] [[thm-grouping-independent-sigma-algebras]]: Let $(\mathcal F_i)_{i\in I}$ be an independent family of sigma-algebras on a probability space, and let $J_0,\dots,J_{m-1}\subseteq I$ be pairwise disjoint index sets. For each $r<m$, define $\mathcal G_r:=\sigma\left(\bigcup_{i\in J_r}\mathcal F_i\right).$ Then the sigma-algebras $\mathcal G_0,\dots,\mathcal G_{m-1}$ are independent.

[F2] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: Let $(X,\mathcal{A})$ be a measurable space and let $f,g : X \to \overline{\mathbb{R}}$ be measurable. Then: 1. $cf$ is measurable for every real scalar $c$; 2. $\max(f,g)$, $\min(f,g)$, $|f|$, $f^+$, and $f^-$ are measurable; 3. if $f+g$ is pointwise defined, then $f+g$ is measurable; 4. with the convention of rem-zero-times-infinity-convention-for-pointwise-products, the pointwise product $fg$ is measurable.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Let $A_k=\{|S_j|<l\ (j<k),\ |S_k|\ge l\}$ and $A=\bigcup_kA_k$. These are measurable disjoint first-crossing events. For $k<n$, $A_k$ is independent of the remaining tail $R_k=S_n-S_k$ by grouping. For $k=n$, $R_n=0$, so its probability of magnitude at least $l/2$ is zero. [F2, F1, given]

2.1 On $A_k\cap\{|S_n|\le l/2\}$, the triangle inequality gives $|R_k|\ge l/2$. Thus $\mathbb P(A\cap\{|S_n|\le l/2\})\le\sum_k\mathbb P(A_k)\mathbb P(|R_k|\ge l/2)\le\delta\mathbb P(A)$. The complementary part has probability at most $\mathbb P(|S_n|>l/2)\le\delta$, using the hypothesis at $i=1$. Hence $(1-\delta)\mathbb P(A)\le\delta$, and division by the positive $1-\delta$ proves the assertion. This includes $\delta=0$ and $n=1$. [step 1.1, given, algebra] ∎
