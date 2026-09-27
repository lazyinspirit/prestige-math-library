---
id: lem-tableau-stabilizers-transform-by-conjugation
kind: lemma
title: Tableau stabilizers transform by conjugation
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-row-and-column-stabilizers-of-a-tableau]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Lemma 2.8 with its proof, printed p. 8"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David Craven, Groups, Geometries and Representation Theory - Section 1.6, printed pp. 13-14"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge 0$, let $\lambda\vdash n$ and let $t$ be a $\lambda$-tableau. For every
$\sigma\in S_n$,
$$R_{\sigma\cdot t}=\sigma R_t\sigma^{-1},\qquad C_{\sigma\cdot t}=\sigma C_t\sigma^{-1},$$
where $R_t$ and $C_t$ are the row and column stabilizers of $t$ and $\sigma\cdot t$
is the tableau with entries $(\sigma\cdot t)(i,j)=\sigma(t(i,j))$.

## Facts & Assumptions

**Given:** An integer $n\ge 0$, a partition $\lambda\vdash n$, a $\lambda$-tableau $t$, and a permutation $\sigma\in S_n$.

[L1] The row sets $A_i=\{t(i,j):1\le j\le\lambda_i\}$ and the column sets $B_j=\{t(i,j):1\le i\le\lambda'_j\}$ of $t$ each partition $\{1,\dots,n\}$, and $R_t=\{\gamma\in S_n:\gamma(A_i)=A_i\text{ for every }i\}$, $C_t=\{\gamma\in S_n:\gamma(B_j)=B_j\text{ for every }j\}$ ([[def-row-and-column-stabilizers-of-a-tableau]]).

[L2] The left action on tableaux is entrywise, $(\tau\cdot t)(i,j)=\tau(t(i,j))$ for $\tau\in S_n$ ([[def-row-and-column-stabilizers-of-a-tableau]]).

[L3] For $n=0$ there is exactly one tableau, the empty one, with $R_t=C_t=S_0=\{1\}$ ([[def-row-and-column-stabilizers-of-a-tableau]]).

## Proof

**Proof technique:** direct.

1.1 For every row $i$, the row set of $\sigma\cdot t$ is $A_i(\sigma\cdot t)=\{(\sigma\cdot t)(i,j):1\le j\le\lambda_i\}=\{\sigma(t(i,j)):1\le j\le\lambda_i\}=\sigma(A_i)$ by [L2], and likewise the column set of $\sigma\cdot t$ in column $j$ is $B_j(\sigma\cdot t)=\sigma(B_j)$. [given, L1, L2, algebra]

2.1 By [L1] and step 1.1, a permutation $\gamma\in S_n$ lies in $R_{\sigma\cdot t}$ exactly when $\gamma(\sigma(A_i))=\sigma(A_i)$ for every row $i$, which after applying $\sigma^{-1}$ to both sides is equivalent to $\sigma^{-1}\gamma\sigma(A_i)=A_i$ for every $i$, that is to $\sigma^{-1}\gamma\sigma\in R_t$. [step 1.1, L1, algebra]

3.1 The equivalence of step 2.1 read in the forward and the backward direction gives both inclusions $R_{\sigma\cdot t}\subseteq\sigma R_t\sigma^{-1}$ and $\sigma R_t\sigma^{-1}\subseteq R_{\sigma\cdot t}$, hence $R_{\sigma\cdot t}=\sigma R_t\sigma^{-1}$. [step 2.1]

4.1 The identical computation with the column sets of step 1.1 in place of the row sets gives $C_{\sigma\cdot t}=\sigma C_t\sigma^{-1}$: $\gamma\in C_{\sigma\cdot t}$ exactly when $\gamma(\sigma(B_j))=\sigma(B_j)$ for every column $j$, which is equivalent to $\sigma^{-1}\gamma\sigma\in C_t$. [step 1.1, step 3.1, L1]

5.1 Both identities also hold for $n=0$: then $t$ is the empty tableau, $\sigma$ is the identity of $S_0=\{1\}$, and $R_t=C_t=S_0$ by [L3], so conjugation is the identity and $R_{\sigma\cdot t}=R_t=\sigma R_t\sigma^{-1}$, likewise for $C_t$. In all cases, then, the row and column stabilizers of $\sigma\cdot t$ are the conjugates of $R_t$ and $C_t$ by $\sigma$. ∎ [step 2.1, step 4.1, L3]
