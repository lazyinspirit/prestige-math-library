---
id: def-filtered-l-infinity-morphism
kind: definition
title: "Filtered L∞-morphism"
status: draft
dependency_level: 6
origin: session
deps:
  - def-complete-filtered-l-infinity-algebra
provenance:
  statement: literature-derived
  proof: not-applicable
verification: {}
sources:
  references:
    - title: "Vasily Dolgushev and Christopher Rogers, A Version of the Goldman–Millson Theorem for Filtered L-infinity-Algebras, §§1–2"
      url: "https://arxiv.org/pdf/1407.6735"
    - title: "Ezra Getzler, Lie theory for nilpotent L-infinity-algebras, §4"
      url: "https://arxiv.org/pdf/math/0404003"
---

## Definition

Let $W=V[1]$ and $Z=U[1]$ be the shifted spaces of two complete filtered L∞-algebras over the same characteristic-zero field, in the convention of [[def-complete-filtered-l-infinity-algebra]]. Write $Q,R$ for their degree-one square-zero coderivations and $q_n,r_n$ for their corestrictions. A **filtered L∞-morphism** from $W$ to $Z$ consists of degree-zero graded symmetric maps $f_n:S^nW\to Z$, $n\ge1$, with

$$f_n(F^{i_1}W,\ldots,F^{i_n}W)\subseteq F^{i_1+\cdots+i_n}Z\qquad(i_j\ge1),$$

whose associated coaugmented coalgebra map $F:k\oplus S^c(W)\to k\oplus S^c(Z)$ satisfies $FQ=RF$, after extending $Q,R$ by $Q(1)=R(1)=0$. There is no constant Taylor coefficient: $F(1)=1$. Explicitly, for homogeneous inputs,

$$F(x_1\cdots x_n)=\sum_{s=1}^n\frac1{s!}\sum_{(B_1,\ldots,B_s)}\epsilon(B_1,\ldots,B_s;x)\,f_{|B_1|}(x_{B_1})\cdots f_{|B_s|}(x_{B_s}).$$

The inner sum runs over ordered partitions of $\{1,\ldots,n\}$ into nonempty blocks. Inside each block retain the original input order; $\epsilon$ is the Koszul sign of the permutation which lists those blocks in the indicated order. The factor $1/s!$ removes ordering of the graded symmetric output blocks. The length-one projection of $F$ on $S^nW$ is $f_n$.

The composite of $f:W\to Z$ and $g:Z\to T$ has associated map $GF$; its Taylor coefficients are the length-one projections of $GF$. The identity has $f_1=\operatorname{id}$ and $f_n=0$ for $n>1$. These definitions do not require $F^1W=W$. The complete positive-filtration subalgebra $P=F^1W$ is the space on which completed exponentials and Maurer–Cartan sums will be used; it need not be an ideal in $W$.
