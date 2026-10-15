---
id: lem-rcbd-nested-contrast-model-and-projection
kind: lemma
title: Nested contrast models and projections in a balanced block design
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-randomized-complete-block-design
  - def-orthogonal-projection
  - thm-finite-dimensional-orthogonal-decomposition
  - thm-rank-nullity
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 13 §13.2.2"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Statement

Let $t,b\ge2$, $1\le q\le t-1$, and let $C\in\mathbb R^{q\times t}$ have
rank $q$ and satisfy $C\mathbf 1_t=0$. Give $V=\mathbb R^{t\times b}$ the
Frobenius inner product $\langle u,v\rangle=\sum_{i,j}u_{ij}v_{ij}$. Write
$\operatorname{row}(C)=\operatorname{im}(C^T)$ for the span of the rows of $C$,
and define the full additive mean space
$$W_U=\{(\mu+\tau_i+\beta_j)_{ij}:\mu\in\mathbb R,\ \sum_i\tau_i=0,\ \sum_j\beta_j=0\}$$
and the reduced space $W_R(C)$ by the same formula with the extra restriction
$C\tau=0$. For an array $y$, write
$\bar y_{i\cdot}=b^{-1}\sum_jy_{ij}$,
$\bar y_{\cdot j}=t^{-1}\sum_iy_{ij}$, and
$\bar y_{\cdot\cdot}=(tb)^{-1}\sum_{i,j}y_{ij}$. Let
$RSS_U=\|y-P_{W_U}y\|^2$ and $RSS_R=\|y-P_{W_R(C)}y\|^2$, where $P_W$ is
the orthogonal projection onto $W$ ([[def-orthogonal-projection]]). Then
$$\dim W_U=t+b-1,\qquad \dim W_R(C)=t+b-1-q,$$
$$W_U^\perp=E:=\{r\in\mathbb R^{t\times b}:\sum_jr_{ij}=0\text{ for every }i,\ \sum_ir_{ij}=0\text{ for every }j\},\qquad \dim E=(t-1)(b-1),$$
$$RSS_U=\sum_{i,j}(y_{ij}-\bar y_{i\cdot}-\bar y_{\cdot j}+\bar y_{\cdot\cdot})^2,$$
and
$$RSS_R-RSS_U=b(C\bar y)^T(CC^T)^{-1}(C\bar y),$$
where $\bar y=(\bar y_{1\cdot},\ldots,\bar y_{t\cdot})^T$.

## Facts & Assumptions


**Given:** The balanced cell space and hypotheses on $t,b,q,C$ in the Statement.

[F1] An RCBD has $t$ units and every treatment once in each of its $b$ blocks ([[def-randomized-complete-block-design]]).

[F2] For a linear map on a finite-dimensional domain, domain dimension is kernel dimension plus image dimension ([[thm-rank-nullity]]).

[F3] In a finite-dimensional inner-product space, every subspace has an orthogonal complement, and the space is their direct sum ([[thm-finite-dimensional-orthogonal-decomposition]]); the projection is the unique component in the subspace ([[def-orthogonal-projection]]).

## Proof


1.1 Let $H=\{a\in\mathbb R^t:\mathbf1_t^Ta=0\}$. The map $C|_H$ has image equal to the image of $C$, because $C\mathbf1_t=0$; hence it has rank $q$. By [F2], $\dim(H\cap\ker C)=t-1-q$. The row space of $C$ lies in $H$ and is orthogonal to $H\cap\ker C$; both dimensions add to $\dim H=t-1$, so these are orthogonal complements within $H$. [given, F2, algebra]

2.1 In $V$, the constant arrays form a one-dimensional space $G$, the arrays $(a_i)_{ij}$ for $a\in H$ form a $(t-1)$-dimensional treatment space $T$, and the arrays $(d_j)_{ij}$ for $d\in\mathbb R^b$ with $\sum_jd_j=0$ form a $(b-1)$-dimensional block space $B$. These spaces are pairwise orthogonal: the treatment-block inner product is $\sum_{i,j}a_id_j=(\sum_i a_i)(\sum_jd_j)=0$, and either zero-sum condition also makes the relevant inner product with $G$ zero. Their sum is direct, so $W_U=G\oplus T\oplus B$ and $\dim W_U=t+b-1$. The reduced space replaces $T$ by the arrays from $H\cap\ker C$, hence $\dim W_R(C)=1+(t-1-q)+(b-1)=t+b-1-q$. [given, F1, step 1.1, algebra]

3.1 For any $y$, set $r_{ij}=y_{ij}-\bar y_{i\cdot}-\bar y_{\cdot j}+\bar y_{\cdot\cdot}$. Summing $r$ over any row gives zero because $\sum_j y_{ij}=b\bar y_{i\cdot}$ and $\sum_j\bar y_{\cdot j}=b\bar y_{\cdot\cdot}$; summing over any column likewise gives zero. Conversely, if $v$ is orthogonal to $T$, then its row-sum vector is orthogonal to every $a\in H$, so all row sums are equal; orthogonality to $G$ makes their total zero, so every row sum is zero. The same argument with $B$ gives zero column sums. Thus $W_U^\perp=E$. Also $(y-r)_{ij}=\bar y_{i\cdot}+\bar y_{\cdot j}-\bar y_{\cdot\cdot}$ belongs to $W_U$. By [F3], this is the orthogonal decomposition of $y$ relative to $W_U$, proving the formula for $RSS_U$; its dimension is $tb-(t+b-1)=(t-1)(b-1)$. [F3, step 2.1, algebra]

3.2 Put $P_C=C^T(CC^T)^{-1}C$. The matrix $CC^T$ is invertible since $C$ has full row rank. Direct multiplication gives $P_C^T=P_C$, $P_C^2=P_C$, and image $P_C=\operatorname{row}(C)$. For any $x$ and $a\in\mathbb R^q$, $\langle x-P_Cx,C^Ta\rangle=a^TCx-a^TCC^T(CC^T)^{-1}Cx=0$, so [F3] identifies $P_C$ as the orthogonal projection onto $\operatorname{row}(C)$. Consequently $T$ is the orthogonal direct sum of the reduced treatment space and the treatment arrays formed from $\operatorname{row}(C)$. Therefore $W_U=W_R(C)\oplus D_C$, where $D_C=\{(a_i)_{ij}:a\in\operatorname{row}(C)\}$. [F3, step 1.1, step 2.1, algebra]

4.1 The projection of $y$ onto $D_C$ is the array repeating $P_C\bar y$ across all $b$ blocks: its residual is orthogonal to every repeated $a\in\operatorname{row}(C)$ because the inner product is $b\,a^T(\bar y-P_C\bar y)=0$. Its squared norm is $b\|P_C\bar y\|^2=b(C\bar y)^T(CC^T)^{-1}(C\bar y)$. In the orthogonal direct sum of step 3.2, $y-P_{W_R}y$ is this projection plus $y-P_{W_U}y$, and the two parts are orthogonal; expanding the squared norm gives the claimed residual-sum reduction. [F3, step 3.2, algebra] ∎
