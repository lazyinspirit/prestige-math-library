---
id: lem-cyclic-coordinate-permutations-preserve-integrals-in-r3
kind: lemma
title: "A cyclic permutation of the coordinates of $\\mathbb R^3$ preserves Jordan measurability and integrals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-change-of-variables-for-compact-jordan-sets, thm-injective-c-one-images-of-compact-jordan-sets-are-jordan, def-jacobian-determinant-of-a-c-one-map, def-riemann-integral-over-a-jordan-set, def-determinant-of-a-square-matrix, def-inversions-inversion-number-and-sign, def-jacobian-matrix-and-gradient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

For $k\in\{x,y,z\}$ let $\sigma_k:\mathbb R^3\to\mathbb R^3$ be given by

$$\sigma_x(p)=(p_y,p_z,p_x),\qquad \sigma_y(p)=(p_z,p_x,p_y),\qquad \sigma_z(p)=(p_x,p_y,p_z).$$

Each $\sigma_k$ is a linear bijection with $\det D\sigma_k=1$ everywhere. Let $E\subseteq\mathbb R^3$ be compact and Jordan measurable. Then $\sigma_k[E]$ is compact and Jordan measurable, and for every bounded $H:\sigma_k[E]\to\mathbb R$ the function $H$ is Riemann integrable over $\sigma_k[E]$ if and only if $H\circ\sigma_k$ is Riemann integrable over $E$; when either holds, the integral over the permuted set equals the integral of the composite with the permutation over the original set,

$$\int_{\sigma_k[E]}H=\int_E H\circ\sigma_k.$$

## Facts & Assumptions

**Given:** The index $k\in\{x,y,z\}$, the map $\sigma_k$ displayed in the Statement, the compact Jordan measurable set $E\subseteq\mathbb R^3$ and the bounded function $H$ on $\sigma_k[E]$.

[F1] For a commutative ring $R$, $n\ge1$ and $A=(a_{ij})\in M_n(R)$, $\det A=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}a_{\sigma(i),i}$, with columns indexed by $i<n$ and rows by $\sigma(i)$ ([[def-determinant-of-a-square-matrix]]).

[F2] An **inversion** of $\sigma\in S_n$ is a pair $(i,j)$ with $i<j<n$ and $\sigma(i)>\sigma(j)$, and $\operatorname{sgn}(\sigma)=(-1)^{\operatorname{inv}(\sigma)}$, where $\operatorname{inv}(\sigma)$ is the number of inversions ([[def-inversions-inversion-number-and-sign]]).

[F3] For a $C^1$ map $g$ of an open subset of $\mathbb R^n$ into $\mathbb R^n$, the **Jacobian determinant** is $\det Dg(x)$, and the change-of-variables scale factor is $\lvert\det Dg(x)\rvert$ ([[def-jacobian-determinant-of-a-c-one-map]]).

[F4] If every partial derivative $\partial_jf_i(a)$ exists, the Jacobian matrix is $Jf(a)=(\partial_jf_i(a))_{i<n,j<m}$ ([[def-jacobian-matrix-and-gradient]]).

[F5] Integration over a bounded Jordan measurable set is integration of the zero extension over a bounding rectangle ([[def-riemann-integral-over-a-jordan-set]]).

[L1] Let $U\subseteq\mathbb R^n$ be open, let $g:U\to\mathbb R^n$ be injective and $C^1$ with $Dg(x)$ invertible for every $x\in U$, and let $K\subseteq U$ be compact and Jordan measurable. For bounded $f:g(K)\to\mathbb R$, integrability of $f$ on $g(K)$ is equivalent to integrability of $x\mapsto f(g(x))\lvert\det Dg(x)\rvert$ on $K$, and when either holds $\int_{g(K)}f(y)\,dy=\int_Kf(g(x))\lvert\det Dg(x)\rvert\,dx$ ([[thm-change-of-variables-for-compact-jordan-sets]]).

[L2] Under those hypotheses, if $K\subseteq U$ is compact and Jordan measurable then $g(K)$ is compact and Jordan measurable ([[thm-injective-c-one-images-of-compact-jordan-sets-are-jordan]]).

## Proof

**Proof technique:** direct.

1.1 Each $\sigma_k$ is linear: writing coordinates as indices $0,1,2$ for $x,y,z$, the map $\sigma_x$ sends $p$ to the point with coordinates $(p_1,p_2,p_0)$, so by [F4] its partial derivatives are the constants $\partial_j(\sigma_x)_i$, and its Jacobian matrix $A_x$ at every point has $(A_x)_{ij}=1$ exactly for $(i,j)\in\{(0,1),(1,2),(2,0)\}$ and $0$ elsewhere. Likewise $\sigma_y$ sends $p$ to $(p_2,p_0,p_1)$, with matrix $A_y$ having entry $1$ exactly at $(0,2),(1,0),(2,1)$, and $\sigma_z$ is the identity with matrix the identity matrix. All three matrices have exactly one entry $1$ in each row and in each column, so each $\sigma_k$ is a bijection of $\mathbb R^3$ with $D\sigma_k$ constant and invertible. [given, F4]

1.2 In the Leibniz sum [F1] for $\det A_x$, a term is nonzero only when $(A_x)_{\sigma(i),i}=1$ for every $i<3$, that is when $\sigma(0)=2$, $\sigma(1)=0$ and $\sigma(2)=1$; exactly one permutation does this. Its inversions are $(0,1)$, since $2>0$, and $(0,2)$, since $2>1$, while $(1,2)$ is not one, since $0<1$; so $\operatorname{inv}(\sigma)=2$ and $\operatorname{sgn}(\sigma)=+1$ by [F2], giving $\det A_x=1$. [F1, F2, algebra]

1.3 In the Leibniz sum for $\det A_y$, the only nonzero term has $\sigma(0)=1$, $\sigma(1)=2$ and $\sigma(2)=0$; its inversions are $(0,2)$, since $1>0$, and $(1,2)$, since $2>0$, while $(0,1)$ is not one, since $1<2$; so again $\operatorname{inv}(\sigma)=2$ and $\det A_y=1$ by [F1] and [F2]. For $A_z$ the identity matrix, the only nonzero term is the identity permutation, with no inversion, so $\det A_z=1$. [F1, F2, algebra]

2.1 By steps 1.1, 1.2 and 1.3 each $\sigma_k$ is a $C^1$ injection of the open set $\mathbb R^3$ into $\mathbb R^3$ whose derivative is invertible at every point, with $\det D\sigma_k=1$ and hence $\lvert\det D\sigma_k\rvert=1$ by [F3]. So [L2] applies with $U=\mathbb R^3$, $g=\sigma_k$ and $K=E$, and $\sigma_k[E]$ is compact and Jordan measurable. [step 1.1, step 1.2, step 1.3, F3, L2]

3.1 With the same data, [L1] gives that $H$ is integrable over $\sigma_k[E]$ if and only if $x\mapsto H(\sigma_k(x))\lvert\det D\sigma_k(x)\rvert=H(\sigma_k(x))$ is integrable over $E$, that is if and only if $H\circ\sigma_k$ is, and that in that case $\int_{\sigma_k[E]}H=\int_EH(\sigma_k(x))\cdot1\,dx=\int_EH\circ\sigma_k$, the integrals being those of [F5]. [step 2.1, L1, F3, F5] ∎

## Remarks

- **Why the cyclic order and not the increasing one.** The three maps above send the coordinate $k$ to the last slot and keep the other two in the cyclic order $x\to y\to z\to x$. Taking instead the two surviving coordinates in increasing order would transpose them in the case $k=y$, and a transposition has one inversion and hence determinant $-1$; every identity on this page that treats the three directions alike depends on the cyclic choice.
