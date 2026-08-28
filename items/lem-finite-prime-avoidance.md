---
id: lem-finite-prime-avoidance
kind: lemma
title: "An ideal contained in a finite union of prime ideals lies in one of them"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-and-maximal-ideals]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Lemma 10.15.2"
      url: "https://stacks.math.columbia.edu/tag/00DS"
    - title: "B. Totaro, Commutative Algebra (Michaelmas 2011), notes by Z. Norwood, §9"
      url: "https://pi.math.cornell.edu/~zbnorwood/partiii/files/commalgnotes.pdf"
---

## Statement

Let $R$ be a commutative ring, let $I \trianglelefteq R$ be an ideal, and let
$\mathfrak p_1,\dots,\mathfrak p_n$ be prime ideals with $n \ge 1$. If
$$
I\subseteq \mathfrak p_1\cup\cdots\cup \mathfrak p_n,
$$
then $I\subseteq \mathfrak p_i$ for some $i$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I \trianglelefteq R$, a positive integer $n$, and prime ideals $\mathfrak p_1,\dots,\mathfrak p_n$ with $I\subseteq \mathfrak p_1\cup\cdots\cup \mathfrak p_n$.

[L1] A prime ideal is proper and contains one factor whenever it contains a product ([[def-prime-and-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 We argue by induction on $n$. The case $n=1$ is immediate. Assume $n\ge2$ and that the claim is known for smaller families. Suppose, for contradiction, that $I\nsubseteq \mathfrak p_i$ for every $i$. Then for each $k$, the ideal $I$ is not contained in $\bigcup_{i\ne k}\mathfrak p_i$ either, because the induction hypothesis would then force $I\subseteq \mathfrak p_i$ for some $i\ne k$. Hence for each $k$ we may choose $x_k \in I\setminus\bigcup_{i\ne k}\mathfrak p_i$. Since $I\subseteq \bigcup_i \mathfrak p_i$, each $x_k$ must lie in $\mathfrak p_k$. [L1, choose, algebra]

2.1 If $n=2$, then $x_1+x_2 \in I$. It is not in $\mathfrak p_1$, because $x_1 \in \mathfrak p_1$ would then force $x_2=(x_1+x_2)-x_1 \in \mathfrak p_1$, contradicting the choice of $x_2$; the same argument shows $x_1+x_2 \notin \mathfrak p_2$. This contradicts $I\subseteq \mathfrak p_1\cup\mathfrak p_2$. [step 1.1, algebra]

2.2 If $n\ge3$, put $$ z=x_n+x_1x_2\cdots x_{n-1}\in I. $$ For $i<n$, the product term lies in $\mathfrak p_i$ because $x_i \in \mathfrak p_i$, while $x_n \notin \mathfrak p_i$ by the choice in step 1.1; hence $z \notin \mathfrak p_i$. Also each $x_j$ with $j<n$ lies outside $\mathfrak p_n$, so [L1] implies $x_1\cdots x_{n-1}\notin \mathfrak p_n$; since $x_n \in \mathfrak p_n$, one gets $z \notin \mathfrak p_n$ as well. This again contradicts $I\subseteq \mathfrak p_1\cup\cdots\cup\mathfrak p_n$. [L1, step 1.1, algebra]

3.1 The contradictions in steps 2.1 and 2.2 show that the assumption $I\nsubseteq \mathfrak p_i$ for every $i$ is impossible. Therefore $I\subseteq \mathfrak p_i$ for some $i$. [step 1.1, step 2.1, step 2.2] ∎
