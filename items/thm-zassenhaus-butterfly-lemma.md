---
id: thm-zassenhaus-butterfly-lemma
kind: theorem
title: "The Zassenhaus butterfly lemma"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-dedekind-modular-law-for-subgroups, thm-second-isomorphism-theorem-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

Let $A\trianglelefteq A^*$ and $B\trianglelefteq B^*$ be subgroups of a group $G$. Put
$$X=A(A^*\cap B),\quad X^*=A(A^*\cap B^*),\quad Y=(A\cap B^*)B,\quad Y^*=(A^*\cap B^*)B.$$
Then $X\trianglelefteq X^*$, $Y\trianglelefteq Y^*$, and
$$X^*/X\cong Y^*/Y.$$

## Facts & Assumptions

**Given:** Subgroups $A\trianglelefteq A^*$ and $B\trianglelefteq B^*$ of $G$, with $X,X^*,Y,Y^*$ as in the statement.

[L1] If $H,K,L$ are subgroups with $H\le L$ and $HK$ a subgroup, then $H(K\cap L)=HK\cap L$ ([[lem-dedekind-modular-law-for-subgroups]]).

[L2] If $N\trianglelefteq H$ and $K\le H$, then $KN/N\cong K/(K\cap N)$; equivalently, $(KN)/N$ is isomorphic to $K/(K\cap N)$ ([[thm-second-isomorphism-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 Put $M=A^*\cap B^*$, $U=A\cap B^*$, and $V=A^*\cap B$. Conjugation by elements of $M$ preserves $U$ and $V$, because it preserves $A,A^*,B,B^*$; hence $U,V\trianglelefteq M$ and $D:=UV\trianglelefteq M$. [given, algebra]

2.1 The subgroups $X=A V$ and $X^*=A M$ are well defined. The subgroup $M$ normalizes both $A$ and $V$. Also, for $a\in A$ and $v\in V$, one has $ava^{-1}=(ava^{-1}v^{-1})v\in AV$ because $A\trianglelefteq A^*$; hence $A$ normalizes $AV$ and $X\trianglelefteq X^*$. The symmetric argument gives $Y=UB\trianglelefteq MB=Y^*$. [step 1.1, algebra]

3.1 Apply [L2] inside $X^*=AM$ with normal subgroup $X=AV$: since $X^*=XM$, one has $X^*/X\cong M/(M\cap X)$. [step 2.1, L2]

3.2 Symmetrically, [L2] inside $Y^*=MB$ with normal subgroup $Y=UB$ gives $Y^*/Y\cong M/(M\cap Y)$, and [L1] gives $M\cap UB=U(M\cap B)=UV=D$. [step 1.1, step 2.1, L1, L2]

4.1 By [L1], $M\cap AV=(M\cap A)V=UV=D$, so $X^*/X\cong M/D$. [step 1.1, step 3.1, L1]

5.1 Both quotients are isomorphic to $M/D$, so $X^*/X\cong Y^*/Y$; step 2.1 supplies the two normality assertions. [step 4.1, step 3.2] ∎
