---
id: def-jucys-murphy-elements-of-the-symmetric-group-algebra
kind: definition
title: "The Jucys-Murphy elements of the symmetric group algebra"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-group-ring, thm-group-ring-is-a-unital-algebra-with-basis-g, def-symmetric-group, def-partition-young-diagram-and-conjugate-partition, def-restriction-and-extension-of-scalars]
justified_by: []
aliases: []
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Okounkov-Vershik, A New Approach to the Representation Theory of the Symmetric Groups, Selecta Math. (N.S.) 2 (1996) 581-605; complete arXiv repost math/0503040, section 3, printed pp. 12-15"
      url: "https://arxiv.org/pdf/math/0503040"
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), section 3, printed pp. 18-25"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item read and recorded Step 7 mathematical repair review, including the used supplier interfaces; current mathematical content matches the bound evidence. The repair review is local and does not claim an independent audit of the repair."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-19.md
      - research/frontier-38-owner-30-dispatch/reader-reader-19.result.json
      - research/frontier-38-owner-30-step5-hash-19-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-19-5a-decisions.json
      - research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u19.json
      - research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u19.result.json
  precheck: n/a
---

## Definition

Let $n\ge1$ and let $R$ be a commutative ring. In the group ring $R[S_n]$ of
the symmetric group on $\{1,\dots,n\}$
([[def-partition-young-diagram-and-conjugate-partition]],
[[def-symmetric-group]], [[def-group-ring]]), where $(j\ k)$ denotes the
transposition of the distinct entries $j,k\in\{1,\dots,n\}$
([[def-symmetric-group]]), the **Jucys-Murphy elements** are
$$X_1:=0,\qquad X_k:=\sum_{j=1}^{k-1}(j\ k)\in R[S_n]\qquad(2\le k\le n).$$
Each $X_k$ is a finite sum of group elements with coefficient $1$, so the
formula already defines an element of the integral group ring
$\mathbb Z[S_n]$, and its image under the base change
$\mathbb Z[S_n]\to R[S_n]$ is the displayed element
([[def-restriction-and-extension-of-scalars]]); for $1\le k\le m\le n$ the element
$X_k$ of $R[S_m]$, computed in the subgroup
$S_m=\operatorname{Sym}(\{1,\dots,m\})\subseteq S_n$ of permutations fixing
$m+1,\dots,n$, maps to $X_k$ under the inclusion $S_m\hookrightarrow S_n$.
Equivalently $X_k=T_k-T_{k-1}$, where $T_k=\sum_{1\le i<j\le k}(i\ j)$ is the
sum of all transpositions in $S_k$.

## Remarks

- **Well-definedness.** The sum defining $X_k$ has the $k-1$ terms
  $(1\ k),\dots,(k-1\ k)$, each of which is an element of the subgroup
  $S_k\subseteq S_n$, hence a basis element of the free $R$-module
  $R[S_n]$; a finite sum of basis elements is an element of $R[S_n]$
  independent of any ordering of the summands. The formula uses only the
  labels $1,\dots,k$, so it is preserved by the inclusion
  $S_m\hookrightarrow S_n$ for $k\le m\le n$ and by the base change
  $\mathbb Z[S_n]\to R[S_n]$.
  The group-ring multiplication is bilinear and sends basis elements $g,h$
  to $gh$ ([[thm-group-ring-is-a-unital-algebra-with-basis-g]]). Thus the
  subgroup inclusions and the coefficient map
  $\sum_g a_g g\mapsto\sum_g(a_g1_R)g$ preserve products and the identity.

- **The identity $X_k=T_k-T_{k-1}$.** The transpositions of $S_k$ are
  $(i\ j)$ with $1\le i<j\le k$; those with $j<k$ are exactly the
  transpositions of $S_{k-1}$, and the remaining ones are
  $(i\ k)$ with $i<k$. Hence
  $T_k-T_{k-1}=\sum_{j=1}^{k-1}(j\ k)=X_k$. For $k=2$ this reads
  $X_2=(1\ 2)=T_2-T_1$, where $T_1=0$. Since each $T_k$ is a sum of all
  transpositions of the subgroup $S_k$, it is a sum of full conjugacy classes
  of $S_k$.

- **Integral normalization.** Every coefficient in $X_k$ is $1$, not
  $\pm1$ or a fraction; no characteristic is inverted, so $X_k$ is defined
  over $\mathbb Z$ and over every commutative ring. This is the
  normalization used throughout this page; the spectral statements below
  specialize the coefficient ring to $\mathbb C$, but no integral identity of
  this page uses division.

- **Centrality.** The elements $X_k$ need not be central in $R[S_n]$.
  The element $X_1=0$ is always central, and for $n=2$ the algebra $R[S_2]$
  is commutative, so $X_2$ is central as well. For $n\ge3$ and $R\ne0$,
  conjugation by $(2\ 3)$ sends $X_2=(1\ 2)$ to $(1\ 3)\ne X_2$:
  these are distinct basis elements and $1_R\ne0$. Thus $X_2$ is not central
  in this case. Pairwise commutativity of the $X_k$ is proved in
  [[cor-jucys-murphy-elements-commute-pairwise]].
