---
id: lem-it-finite-marginals-and-conditionals-are-pmfs
kind: lemma
title: "Marginals and positive-mass conditionals of a finite joint law are probability vectors"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-finite-sum-in-a-commutative-monoid, lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; only finite sums and finite reindexing occur."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: "Chapter 2, §§2.2–2.3, printed pp. 18–24; finite joint pmfs and their marginals."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 1, §1.1, printed pp. 9–12; joint and conditional pmfs."
---

## Statement

Let $\mathcal U,\mathcal V$ be finite nonempty alphabets and let $p_{UV}(u,v)\ge0$ satisfy $\sum_{u,v}p_{UV}(u,v)=1$. Define $p_U(u)=\sum_vp_{UV}(u,v)$ and $p_V(v)=\sum_up_{UV}(u,v)$. Then both marginals are probability vectors. For each $v$ with $p_V(v)>0$, the conditional vector $p_{U|v}(u):=p_{UV}(u,v)/p_V(v)$ is a probability vector; likewise for conditioning on positive-mass $u$. Consequently, if $p_{UVW}$ is a finite joint pmf, then for every $w$ with $p_W(w)>0$, $p_{UV|w}$ and its two marginals are probability vectors.

## Facts & Assumptions

**Given:** Finite nonempty alphabets $\mathcal U,\mathcal V$ and a joint pmf $p_{UV}$.

[F1] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: a finite probability vector has nonnegative coordinates whose sum is $1$.

[F2] [[lem-finite-sum-reindexing-and-fubini]]: for finite sets $S,T$ and a real array $a_{s,t}$, the sum over $S\times T$ equals either iterated sum, and finite sums are invariant under bijective reindexing.

## Proof

1.1 Every marginal coordinate is nonnegative because it is a finite sum of nonnegative entries of $p_{UV}$. By [F2], $\sum_up_U(u)=\sum_u\sum_vp_{UV}(u,v)=\sum_{(u,v)}p_{UV}(u,v)=1$, and the same calculation with the order reversed gives $\sum_vp_V(v)=1$. Thus both marginals are probability vectors by [F1]. [given, F1, F2, algebra]

2.1 Fix $v$ with $p_V(v)>0$. Each ratio $p_{UV}(u,v)/p_V(v)$ is nonnegative, and $\sum_up_{U|v}(u)=\bigl(\sum_up_{UV}(u,v)\bigr)/p_V(v)=p_V(v)/p_V(v)=1$. Hence $p_{U|v}$ is a probability vector by [F1]. The same argument with $u$ fixed gives $p_{V|u}$. If $p_{UVW}$ is a joint pmf and $p_W(w)>0$, first apply this argument to the pair of finite alphabets $\mathcal U\times\mathcal V$ and $\mathcal W$; then apply step 1.1 to the resulting conditional pmf on $\mathcal U\times\mathcal V$. This gives the last assertion. [given, F1, step 1.1, algebra] ∎
