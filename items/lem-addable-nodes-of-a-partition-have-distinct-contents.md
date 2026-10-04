---
id: lem-addable-nodes-of-a-partition-have-distinct-contents
kind: lemma
title: "Distinct addable nodes of a partition have distinct contents"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-content-vector-of-a-standard-tableau, def-removable-and-addable-nodes-of-a-partition]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), section 3, printed pp. 18-25, addable-cell notation"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
    - title: "Okounkov-Vershik, A New Approach to the Representation Theory of the Symmetric Groups, Selecta Math. (N.S.) 2 (1996) 581-605; complete arXiv repost math/0503040, section 5, printed pp. 19-22"
      url: "https://arxiv.org/pdf/math/0503040"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Let $\lambda$ be a partition. If $x\ne y$ are addable nodes of $[\lambda]$, then
$c(x)\ne c(y)$; equivalently the content map is injective on the set
$\operatorname{Add}(\lambda)$ of addable nodes.

## Facts & Assumptions

**Given:** A partition $\lambda=(\lambda_1,\dots,\lambda_k)$ with Young diagram
$[\lambda]$ and set of addable nodes $\operatorname{Add}(\lambda)$
([[def-removable-and-addable-nodes-of-a-partition]]).

[F1] A node $(i,\lambda_i+1)$ with $1\le i\le k$ is addable if and only if
$i=1$ or $\lambda_{i-1}>\lambda_i$; the node $(k+1,1)$ is always addable; and
these are all addable nodes. With the conventions $\lambda_0:=+\infty$ and
$\lambda_{k+1}:=0$, the addable nodes of $[\lambda]$ are exactly the nodes
$(i,\lambda_i+1)$ for the indices $1\le i\le k+1$ satisfying
$\lambda_{i-1}>\lambda_i$ ([[def-removable-and-addable-nodes-of-a-partition]]).

[F2] The content of a node is $c(r,c)=c-r$; in particular
$c(i,\lambda_i+1)=\lambda_i+1-i$ ([[def-content-vector-of-a-standard-tableau]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] every addable node has the form $(i,\lambda_i+1)$ for a unique index $i\in I:=\{1\le i\le k+1:\lambda_{i-1}>\lambda_i\}$, where we use $\lambda_0=+\infty$ and $\lambda_{k+1}=0$; indeed for $i\le k$ the condition is exactly the addability criterion, and $i=k+1$ is the new-row node $(k+1,1)=(k+1,\lambda_{k+1}+1)$ with $\lambda_k>\lambda_{k+1}=0$. [F1, given]

1.2 For such an index $i$ the content of the addable node is $c(i,\lambda_i+1)=\lambda_i+1-i$ by [F2], and the partition is weakly decreasing, so $\lambda_i\ge\lambda_{i+1}\ge\cdots\ge0$. [F2, given]

2.1 Let $i<i'$ be two indices in $I$. By weak monotonicity $\lambda_i\ge\lambda_{i'}$, and since $i<i'$ we get $\lambda_i-i>\lambda_{i'}-i'$, that is $\lambda_i+1-i>\lambda_{i'}+1-i'$. [step 1.2, algebra]

3.1 Combined with step 1.1, distinct addable nodes $(i,\lambda_i+1)$ and $(i',\lambda_{i'}+1)$ with $i\ne i'$ have contents differing by the strict inequality of step 2.1; hence $c$ is injective on $\operatorname{Add}(\lambda)$. [step 1.1, step 2.1] ∎

## Remarks

- **The content is the addable-node coordinate.** For an addable node
  $(i,\lambda_i+1)$ the content $\lambda_i+1-i$ is the integer at which the
  interpolation factors of the projector recursion of
  [[thm-primitive-tableau-idempotents-by-jucys-murphy-interpolation]] are
  evaluated; the lemma is what makes all their denominators nonzero.

- **Empty partition.** For $\lambda=\varnothing$ the only addable node is
  $(1,1)$, of content $0$, so injectivity is vacuous there; the argument
  above applies with $k=0$ and $I=\{1\}$.
