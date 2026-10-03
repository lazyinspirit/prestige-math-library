---
id: lem-complete-homogeneous-expansion-in-power-sums
kind: lemma
title: "Complete homogeneous functions expand in power sums with cycle-distribution coefficients"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - def-power-sum-and-complete-homogeneous-symmetric-polynomials
  - prop-power-sums-form-a-rational-not-integral-stable-basis
  - def-partition-young-diagram-and-conjugate-partition
  - cor-power-sums-are-orthogonal-for-the-hall-inner-product
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I (2.14′) and §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "(2.14′) and its proof, printed p. 25; §7.3, printed p. 114"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, §6"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§6, printed pp. 22–26 (fixed-point counts of tabloids)"
---

## Statement

Work in $\Lambda_{\mathbb Q}=\mathbb Q\otimes_{\mathbb Z}\Lambda$. For a
partition $\rho$ write
$m_i(\rho):=\#\{j:\rho_j=i\}$ and
$z_\rho:=\prod_{i\ge1}i^{m_i(\rho)}m_i(\rho)!$
([[def-partition-young-diagram-and-conjugate-partition]],
[[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

For partitions $\lambda$ and $\rho$ of the same integer, let $N(\lambda,\rho)$
be the number of ways to distribute the cycles of a permutation $w$ of cycle
type $\rho$ among the $\ell(\lambda)$ rows, labelled $1,\dots,\ell(\lambda)$,
so that row $j$ receives cycles whose lengths sum to $\lambda_j$. Cycles of
equal length count as **distinct** here, because they are distinct cycles of
$w$; equivalently,

$$N(\lambda,\rho)=\sum_{(m_i^{(j)})}\ \prod_{i\ge1}\frac{m_i(\rho)!}{\prod_j m_i^{(j)}!},$$

the sum over all matrices $(m_i^{(j)})$ of nonnegative integers with
$\sum_j m_i^{(j)}=m_i(\rho)$ for every $i$ and
$\sum_i i\,m_i^{(j)}=\lambda_j$ for every $j$; each summand is the product
over $i$ of the number of ways to assign the $m_i(\rho)$ labelled cycles of
length $i$ to rows with the prescribed multiplicities $m_i^{(j)}$, so
$N(\lambda,\rho)$ is a nonnegative integer. Then

$$h_\lambda=\sum_{\rho\vdash|\lambda|}N(\lambda,\rho)\,\frac{p_\rho}{z_\rho}\qquad\text{in }\Lambda_{\mathbb Q}.$$

In particular $h_d=\sum_{\rho\vdash d}p_\rho/z_\rho$ for every $d\ge0$.

## Facts & Assumptions

**Given:** Partitions $\lambda$ and $\rho$ of the same integer $n$, with $\lambda=(\lambda_1,\dots,\lambda_k)$ and $\rho\vdash n$.

[F1] $\Lambda=\bigoplus_{d\ge0}\Lambda^d$, where an element of $\Lambda^d$ is a compatible sequence of degree-$d$ symmetric polynomials in $N$ variables whose transition maps set the last variables to zero, and multiplication is coordinatewise polynomial multiplication ([[def-stable-graded-ring-of-symmetric-functions]]).

[F2] For every $d\ge0$ the family $\{h_\mu:\mu\vdash d\}$ is a $\mathbb Z$-basis of $\Lambda^d$, where $h_\mu:=\prod_i h_{\mu_i}$ and $h_\varnothing=1$ ([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F3] For $k\ge1$ the stable power sum $p_k\in\Lambda^k$ is the compatible sequence of the finite power sums $p_k(x_1,\dots,x_N)=x_1^k+\cdots+x_N^k$, and for a partition $\mu$ one sets $p_\mu:=\prod_i p_{\mu_i}$, with $p_\varnothing=1$; likewise $h_k(x_1,\dots,x_N)=\sum_{a_1+\cdots+a_N=k}x_1^{a_1}\cdots x_N^{a_N}$ ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F4] For every $d\ge0$ the family $\{p_\mu:\mu\vdash d\}$ is a $\mathbb Q$-basis of $\Lambda_{\mathbb Q}^d=\mathbb Q\otimes_{\mathbb Z}\Lambda^d$ ([[prop-power-sums-form-a-rational-not-integral-stable-basis]]).

[F5] A partition of $n$ is a weakly decreasing finite sequence of positive integers with sum $n$; the empty partition $\varnothing$ is the only partition of $0$, and $m_i(\mu)$ denotes the number of parts of $\mu$ equal to $i$ ([[def-partition-young-diagram-and-conjugate-partition]]).


## Proof

**Proof technique:** direct.

1.1 Fix a rank $N\ge0$, work in $\mathbb Q[x_1,\dots,x_N][\![t]\!]$, and write $h_d^{(N)}:=h_d(x_1,\dots,x_N)$ and $p_k^{(N)}:=p_k(x_1,\dots,x_N)$ for the rank-$N$ specializations. The coefficient of $t^d$ in $\prod_{i=1}^N(1-x_it)^{-1}$ is $\sum_{a_1+\cdots+a_N=d}x_1^{a_1}\cdots x_N^{a_N}=h_d^{(N)}$, so $\sum_{d\ge0}h_d^{(N)}t^d=\prod_{i=1}^N(1-x_it)^{-1}$; taking the formal logarithm gives $\log\prod_{i=1}^N(1-x_it)^{-1}=\sum_{i=1}^N\sum_{k\ge1}x_i^kt^k/k=\sum_{k\ge1}p_k^{(N)}t^k/k$, and applying the formal exponential (with $\exp(\log U)=U$ for $U\in1+t\mathbb Q[x_1,\dots,x_N][\![t]\!]$ and $\exp(A+B)=\exp(A)\exp(B)$ for series $A,B$ with zero constant term) yields $\prod_{i=1}^N(1-x_it)^{-1}=\exp\bigl(\sum_{k\ge1}p_k^{(N)}t^k/k\bigr)$. Expanding, $\exp\bigl(\sum_{k\ge1}p_k^{(N)}t^k/k\bigr)=\prod_{k\ge1}\exp\bigl(p_k^{(N)}t^k/k\bigr)$, and in degree $t^d$ only the factors with $k\le d$ contribute, so $h_d^{(N)}$ equals the sum of $\prod_{k\ge1}\bigl(p_k^{(N)}\bigr)^{m_k}\big/\bigl(k^{m_k}m_k!\bigr)$ over all tuples $(m_k)_{k\ge1}$ of nonnegative integers with $\sum_kkm_k=d$; grouping the tuple by the partition $\rho$ with $m_k(\rho)=m_k$, and using $\prod_kp_k^{m_k}=p_\rho$ and $\prod_kk^{m_k}m_k!=z_\rho$, gives $h_d^{(N)}=\sum_{\rho\vdash d}p_\rho^{(N)}/z_\rho$. [F3, algebra]

2.1 For $M\ge N$ the transition map that sets $x_{N+1},\dots,x_M$ to zero sends $h_d^{(M)}\mapsto h_d^{(N)}$ and $p_k^{(M)}\mapsto p_k^{(N)}$, by their finite-rank definitions; hence the rank-$N$ identities of step 1.1 are the projections of a single compatible sequence of degree-$d$ symmetric polynomials. Therefore $h_d=\sum_{\rho\vdash d}p_\rho/z_\rho$ in $\Lambda_{\mathbb Q}^d$ for every $d\ge0$, since two compatible sequences with equal projections are equal by [F1]. [F1, F3, step 1.1]

3.1 Let $\lambda=(\lambda_1,\dots,\lambda_k)\vdash n$. By definition $h_\lambda=\prod_{j=1}^k h_{\lambda_j}$ [F2], and applying step 2.1 to each part gives $h_{\lambda_j}=\sum_{\rho^{(j)}\vdash\lambda_j}p_{\rho^{(j)}}/z_{\rho^{(j)}}$; multiplying these $k$ finite sums, $h_\lambda=\sum_{(\rho^{(1)},\dots,\rho^{(k)})}\prod_{j=1}^kp_{\rho^{(j)}}/z_{\rho^{(j)}}$, the sum over all $k$-tuples of partitions with $\rho^{(j)}\vdash\lambda_j$. [F2, step 2.1, algebra]

4.1 The monomial $\prod_jp_{\rho^{(j)}}$ equals $p_\rho$ exactly when merging the parts of $\rho^{(1)},\dots,\rho^{(k)}$ gives the multiset of parts of $\rho$, that is, when $\sum_jm_i^{(j)}=m_i(\rho)$ for every $i$, where $m_i^{(j)}:=m_i(\rho^{(j)})$; a $k$-tuple is uniquely recovered from its matrix $(m_i^{(j)})$ by listing $m_i^{(j)}$ copies of each $i$ in decreasing order, and the further condition $\sum_i i\,m_i^{(j)}=\lambda_j$ records that $\rho^{(j)}\vdash\lambda_j$. Hence the coefficient of $p_\rho$ in $h_\lambda$ equals $\sum_{(m_i^{(j)})}\prod_j1/z_{\rho^{(j)}}$, the sum over all matrices with those two properties; and for such a matrix $\sum_jm_i^{(j)}=m_i(\rho)$ gives $\prod_ji^{m_i^{(j)}}=i^{m_i(\rho)}$, so $\prod_j1/z_{\rho^{(j)}}=\bigl(\prod_im_i(\rho)!/\prod_{i,j}m_i^{(j)}!\bigr)\big/z_\rho$. Therefore the coefficient of $p_\rho$ in $h_\lambda$ is $N(\lambda,\rho)/z_\rho$, because the sum displayed in the statement counts, for each $i$ independently, the assignments of the $m_i(\rho)$ distinct cycles of length $i$ of a fixed permutation of cycle type $\rho$ to the $k$ labelled rows with the multiplicities $m_i^{(j)}$. Since $\{p_\rho:\rho\vdash n\}$ is a $\mathbb Q$-basis of $\Lambda_{\mathbb Q}^n$ [F4], the coefficient comparison gives $h_\lambda=\sum_{\rho\vdash n}N(\lambda,\rho)p_\rho/z_\rho$ in $\Lambda_{\mathbb Q}^n$. [F4, F5, step 3.1, algebra]

5.1 For $n=0$ one has $\lambda=\rho=\varnothing$, $k=0$, and the empty product conventions give $h_\varnothing=1=N(\varnothing,\varnothing)\,p_\varnothing/z_\varnothing$, while for $\lambda=(d)$ the single row must receive every cycle, so $N((d),\rho)=1$ for every $\rho\vdash d$ and step 4.1 gives $h_d=\sum_{\rho\vdash d}p_\rho/z_\rho$; combined with step 2.1 this is the stated one-row case for every $d\ge0$, including $d=0$, where both sides equal $1$. The general identity of the statement now follows from step 4.1 in all cases, with the empty partition handled by the computation just given. [F2, F3, step 2.1, step 4.1, algebra] ∎
