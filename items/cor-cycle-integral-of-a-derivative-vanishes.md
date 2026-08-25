---
id: cor-cycle-integral-of-a-derivative-vanishes
kind: corollary
title: "The integral of a continuous derivative over a cycle is zero"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-chain-and-cycle, def-integration-and-index-of-complex-chain, thm-fundamental-theorem-for-complex-line-integrals, def-complex-primitive, lem-finite-sum-reindexing-and-fubini, def-finite-sum-in-a-commutative-monoid, thm-complex-numbers-form-a-field, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $\Gamma=\sum_{k<r}m_k\gamma_k$ be a complex chain which is a cycle, let
$V\subseteq\mathbb C$ be open with $\Gamma^\ast\subseteq V$, and let $F$ be a
primitive on $V$ of a continuous $f$, so that $F'=f$ is continuous
([[def-complex-primitive]]). Then

$$\int_\Gamma f(z)\,dz=0.$$

The hypothesis used is that the boundary function of $\Gamma$ vanishes, which is
weaker than requiring every $\gamma_k$ to be closed.

## Facts & Assumptions

**Given:** A cycle $\Gamma=\sum_{k<r}m_k\gamma_k$ with $\gamma_k:[a_k,b_k]\to\mathbb C$, an open $V\supseteq\Gamma^\ast$, and a primitive $F$ on $V$ of a continuous $f$ with $F'=f$ continuous.

[L1] A complex chain is a finite list of pairs $(m_k,\gamma_k)$, its trace is the union of the $\gamma_k^\ast$ with $m_k\ne0$, its boundary is $\partial\Gamma(q)=\sum\{m_k:\gamma_k(b_k)=q\}-\sum\{m_k:\gamma_k(a_k)=q\}$, and it is a cycle when that function vanishes identically ([[def-complex-chain-and-cycle]]).

[L2] $\int_\Gamma f\,dz=\sum_{k<r,\,m_k\ne0}m_k\int_{\gamma_k}f\,dz$ ([[def-integration-and-index-of-complex-chain]]).

[L3] If $F$ is a primitive of a continuous $f$ on an open set containing the trace of a rectifiable contour $\gamma:[a,b]\to\mathbb C$ and $F'=f$ is continuous, then $\int_\gamma f(z)\,dz=F(\gamma(b))-F(\gamma(a))$ ([[thm-fundamental-theorem-for-complex-line-integrals]]).

[L4] Finite sums in the additive commutative monoid of $\mathbb C$ are additive, and complex-field distributivity permits scaling term by term ([[def-finite-sum-in-a-commutative-monoid]], [[thm-complex-numbers-form-a-field]]).

[L5] For disjoint finite index sets $S,T$, $\sum_{u\in S\cup T}a_u=\sum_{s\in S}a_s+\sum_{t\in T}a_t$ ([[lem-finite-sum-reindexing-and-fubini]]); sums over finite index sets are well posed and the empty sum is $0$ ([[def-finite-sum-in-a-commutative-monoid]], [[def-finite-cardinality]]).

[L6] A primitive of $f$ on $V$ is a holomorphic $F$ with $F'=f$ on $V$ ([[def-complex-primitive]]).

## Proof

**Proof technique:** direct.

1.1 Write $K=\{k<r:m_k\ne0\}$ and $Q=\{\gamma_k(a_k):k\in K\}\cup\{\gamma_k(b_k):k\in K\}$, a finite subset of $\Gamma^\ast\subseteq V$ by [L1]; so $F$ is defined at every point of $Q$. [given, L1, L5, L6]

1.2 For every $k\in K$ the trace $\gamma_k^\ast$ lies in the open set $V$ on which $F$ is a primitive of the continuous $f$ with continuous $F'$, so [L3] gives $\int_{\gamma_k}f\,dz=F(\gamma_k(b_k))-F(\gamma_k(a_k))$. [given, L1, L3, L6]

2.1 By [L2] and step 1.2, $\int_\Gamma f\,dz=\sum_{k\in K}m_kF(\gamma_k(b_k))-\sum_{k\in K}m_kF(\gamma_k(a_k))$, using [L4] to split the sum. [step 1.2, L2, L4]

3.1 The index set $K$ is the disjoint union over $q\in Q$ of $\{k\in K:\gamma_k(b_k)=q\}$, so [L5] and [L4] give $\sum_{k\in K}m_kF(\gamma_k(b_k))=\sum_{q\in Q}F(q)\sum\{m_k:k\in K,\ \gamma_k(b_k)=q\}$, and likewise with $a_k$ in place of $b_k$; a term with $m_k=0$ contributes $0$ to the boundary sums of [L1], so subtracting gives $\int_\Gamma f\,dz=\sum_{q\in Q}F(q)\,\partial\Gamma(q)$. [step 1.1, step 2.1, L1, L4, L5]

4.1 Every $\partial\Gamma(q)$ vanishes because $\Gamma$ is a cycle, so the sum of step 3.1 is $0$, whence $\int_\Gamma f\,dz=0$; the same conclusion holds for the empty cycle, whose defining sum is empty and therefore $0$ by [L5]. [step 3.1, L1, L5] ∎
