---
id: thm-finite-p-groups-are-nilpotent
kind: theorem
title: "Every finite $p$-group is nilpotent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-upper-central-series, def-nilpotent-group-and-nilpotency-class, thm-nontrivial-center-of-a-finite-p-group, thm-lagrange, cor-order-of-a-quotient-group, thm-correspondence-theorem-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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

Every finite $p$-group is nilpotent. The trivial group is included and has nilpotency class zero.

## Facts & Assumptions

**Given:** A prime $p$ and a finite group $G$ of order $p^n$ for some $n\in\mathbb N$.

[F1] $Z_{r+1}(G)$ is the inverse image of $Z(G/Z_r(G))$ under the quotient map ([[def-upper-central-series]]).

[F2] $G$ is nilpotent if $Z_c(G)=G$ for some $c$; the trivial group has class zero ([[def-nilpotent-group-and-nilpotency-class]]).

[L1] Every nontrivial finite $p$-group has nontrivial center ([[thm-nontrivial-center-of-a-finite-p-group]]).

[L2] For $N\trianglelefteq G$, $|G/N|=|G|/|N|$ in the finite case ([[cor-order-of-a-quotient-group]], [[thm-lagrange]]).

[L3] Subgroups of $G/N$ correspond to subgroups of $G$ containing $N$ ([[thm-correspondence-theorem-groups]]).

## Proof

**Proof technique:** induction.

1.1 If $n=0$, then $|G|=1$, so $G=1$ is nilpotent of class zero by [F2]. [base, F2]

1.2 Assume $n>0$ and that every $p$-group of order smaller than $p^n$ is nilpotent. [ih]

2.1 By [L1], $Z(G)$ is nontrivial. Its order is a positive power $p^k$ with $1\le k\le n$, and [L2] gives $|G/Z(G)|=p^{n-k}<p^n$. [step 1.2, L1, L2]

3.1 By induction, $G/Z(G)$ is nilpotent, so its upper central series reaches the whole quotient at some term $c$. [step 2.1, ih, F2]

4.1 Starting with $Z_1(G)=Z(G)$, [F1] shows inductively that the inverse image in $G$ of $Z_r(G/Z(G))$ is $Z_{r+1}(G)$. Since the quotient series reaches $G/Z(G)$ at $r=c$, one has $Z_{c+1}(G)=G$. [step 3.1, F1, L3]

5.1 Thus $G$ is nilpotent by [F2], completing the induction. [step 4.1, F2, discharge-induction] ∎
