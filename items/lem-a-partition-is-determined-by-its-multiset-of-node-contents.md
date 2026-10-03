---
id: lem-a-partition-is-determined-by-its-multiset-of-node-contents
kind: lemma
title: "A partition is determined by the multiset of its node contents"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-content-vector-of-a-standard-tableau, def-partition-young-diagram-and-conjugate-partition]
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
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), section 3, printed pp. 18-25"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
    - title: "Mathas-Soriano, Seminormal Forms and Gram Determinants for Cellular Algebras, J. reine angew. Math. 619 (2008) 141-173; arXiv:math/0604108, section 2, printed pp. 4-8"
      url: "https://arxiv.org/pdf/math/0604108"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Let $\lambda,\mu\vdash n$. If the multiset of contents
$\{c(x):x\in[\lambda]\}$ equals the multiset $\{c(y):y\in[\mu]\}$, then
$\lambda=\mu$.

## Facts & Assumptions

**Given:** Partitions $\lambda,\mu\vdash n$; for a partition $\nu\vdash n$ we
write $[\nu]$ for its Young diagram, $\nu'$ for its conjugate, and
$\nu'_j=\#\{i:\nu_i\ge j\}$ for the height of column $j$
([[def-partition-young-diagram-and-conjugate-partition]]).

[F1] A node of $[\nu]$ is a pair $(r,c)$ with $r,c\ge1$ and $c\le\nu_r$; its
content is $c(r,c)=c-r$; the rows of $[\nu]$ are weakly decreasing
([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] The content of a node and the content vector are as defined in
[[def-content-vector-of-a-standard-tableau]]; in particular the content map
is $c(r,c)=c-r$ on nodes.

## Proof

**Proof technique:** direct.

1.1 For a partition $\nu\vdash n$ and an integer $t\ge0$ put $n_t(\nu):=\#\{x\in[\nu]:c(x)=t\}$. A node of content $t$ has the form $(i,i+t)$ with $i\ge1$, and it lies in $[\nu]$ exactly when $i+t\le\nu_i$, that is $\nu_i-i\ge t$; hence $n_t(\nu)=\#\{i\ge1:\nu_i-i\ge t\}$ for every $t\ge0$, the count being finite and equal to $0$ for $t>n$. [F1, F2, algebra]

1.2 Similarly, for an integer $s\ge0$ put $n_{-s}(\nu):=\#\{x\in[\nu]:c(x)=-s\}$. A node of content $-s$ is $(j+s,j)$ with $j\ge1$; it lies in $[\nu]$ exactly when $j+s\le\nu'_j$, that is $\nu'_j-j\ge s$. Hence $n_{-s}(\nu)=\#\{j\ge1:\nu'_j-j\ge s\}$ for every $s\ge0$. [F1, F2, algebra]

1.3 The partition $\nu$ is recovered from the pair of strictly decreasing sequences $a_1>a_2>\cdots>a_d$ and $b_1>b_2>\cdots>b_d$ by the formula $\nu_r=(a_r+1)\cdot[r\le d]+\#\{c:1\le c<r,\ b_c\ge r-c\}$ for every row index $r$. Indeed, for each diagonal node $(i,i)\in[\nu]$ with $i\le d$ let $A_i:=\{(i,c):i\le c\le\nu_i\}$ be its arm and $L_i:=\{(r,i):i\le r\le\nu'_i\}$ its leg; arms and legs have sizes $a_i+1$ and $b_i+1$, and the $d$ hooks $A_i\cup L_i$ partition $[\nu]$, because a node $(r,c)$ with $c\ge r$ lies in the arm $A_r$ and a node $(r,c)$ with $c<r$ lies in the leg $L_c$. Counting row $r$ therefore gives $\nu_r=|A_r|+\#\{c<r:(r,c)\in L_c\}=(a_r+1)\cdot[r\le d]+\#\{c<r:b_c\ge r-c\}$, since $(r,c)\in L_c$ means $c\le r\le\nu'_c=c+b_c$. [F1, F2, algebra]

2.1 For each row index $i$ put $a_i:=\nu_i-i$, and for each column index $j$ put $b_j:=\nu'_j-j$. The row lengths are weakly decreasing, so $a_{i+1}<a_i$ for all $i$; the column heights are weakly decreasing as well, so $b_{j+1}<b_j$ for all $j$. Moreover $a_i\ge0$ exactly for the diagonal rows $i$ with $(i,i)\in[\nu]$, and $b_j\ge0$ exactly for the diagonal columns $j$ with $(j,j)\in[\nu]$, so the two multisets $A(\nu):=\{a_i:a_i\ge0\}$ and $B(\nu):=\{b_j:b_j\ge0\}$ have a common cardinality $d(\nu)$, the number of diagonal nodes. By steps 1.1 and 1.2 the numbers $n_t(\nu)$, $t\ge0$, determine the multiplicity of every value $t\ge0$ among the $a_i$, namely $n_t(\nu)-n_{t+1}(\nu)$, and hence determine the multiset $A(\nu)$ together with $d(\nu)$; likewise the numbers $n_{-s}(\nu)$, $s\ge0$, determine $B(\nu)$. [step 1.1, step 1.2, F1, algebra]

3.1 Assume now that the multiset of contents of $[\lambda]$ equals that of $[\mu]$. Then $n_t(\lambda)=n_t(\mu)$ for every integer $t$; by steps 1.1 and 1.2 this forces $A(\lambda)=A(\mu)$ and $B(\lambda)=B(\mu)$, including the common cardinality $d$. Writing both multisets as strictly decreasing sequences $a_1>\cdots>a_d$ and $b_1>\cdots>b_d$, step 1.3 computes the row lengths of $\lambda$ and $\mu$ by the same formula from the same data, so all row lengths agree and $\lambda=\mu$. [step 2.1, step 1.3, given] ∎

## Remarks

- **Why the diagonal data are Frobenius coordinates.** The numbers
  $a_1>\cdots>a_d$ and $b_1>\cdots>b_d$ are the arm and leg lengths of the
  diagonal nodes, the Frobenius coordinates of $\nu$; the formula of step 1.3
  is the usual reconstruction of a partition from them. The lemma says that
  the content multiset, which records the $a_i$ and $b_j$ through the
  diagonal counts of steps 1.1 and 1.2, is equivalent to that data.

- **Sharper statement.** The proof shows the two multisets $A(\nu)$ and
  $B(\nu)$ separately, not merely their union; both are needed, since the
  nonnegative and negative contents determine the arms and the legs
  respectively.
