---
id: lem-field-antisymmetrizer-image-and-dominance
kind: lemma
title: Field antisymmetrizers have rank-one own-shape image and detect dominance
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-integral-specht-lattice-and-base-change
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-young-subgroup-tabloid-and-permutation-module
  - lem-column-collision-causes-antisymmetrizer-cancellation
  - lem-basic-combinatorial-lemma-for-tableaux
  - lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional
  - lem-column-antisymmetrizer-detects-dominance
  - def-dominance-order-on-partitions
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Stacey Law, notes by Leonard Tomczak, Representation Theory of Symmetric Groups, §2.2 Proposition 2.4 and its claim (tableau matching and rank-one antisymmetrizer image over any field), printed pp. 12-13"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Lemma 4.6 and Corollary 4.7, printed pp. 16-17"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $F$ be any field, $n\ge0$, and $\lambda\vdash n$ with $\lambda$-tableau $t$.
Then

$$\kappa_t\,M^\lambda_F=F\,e_t,\qquad e_t\ne0,$$

a rank-one image over $F$. If $\mu\vdash n$ and $\kappa_tM^\mu_F\ne0$, then
$\lambda$ dominates $\mu$. The statements include fields of characteristic two
and the case $n=0$; no division by a group order and no averaging occurs.

## Facts & Assumptions

**Given:** A field $F$, an integer $n\ge0$, partitions $\lambda,\mu\vdash n$, a
$\lambda$-tableau $t$, and the field-valued tabloid modules $M^\lambda_F$,
$M^\mu_F$ obtained by base change from the integral ones.

[F1] $M^\lambda_{\mathbb Z}$ and $M^\mu_{\mathbb Z}$ are the free
$\mathbb Z$-modules on the tabloids and $M^\lambda_F\cong F\otimes_{\mathbb Z}
M^\lambda_{\mathbb Z}$, with the tabloids as $F$-basis
([[def-integral-specht-lattice-and-base-change]]).

[F2] $\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$,
$e_t=\kappa_t\cdot\{t\}$, and $C_t\cap R_t=\{1\}$, so the coefficient of
$\{t\}$ in $e_t$ is $1$ and $e_t\ne0$ over every coefficient ring
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F3] The $\mu$-tabloids form a basis of $M^\mu_F$ and $R_s$ is the stabilizer
of the tabloid $\{s\}$
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F4] If two entries in one row of $\{s\}$ lie in one column of $t$, then
$\kappa_t\cdot\{s\}=0$ ([[lem-column-collision-causes-antisymmetrizer-cancellation]]).

[F5] If every row of a $\mu$-tableau $s$ meets every column of $t$ in at most
one entry, then $\lambda\unrhd\mu$; and if $\lambda=\mu$ there are
$\rho\in R_s$, $\gamma\in C_t$ with $\rho\cdot s=\gamma\cdot t$
([[lem-basic-combinatorial-lemma-for-tableaux]]).

[F6] $\lambda\unrhd\mu$ means that every prefix sum of $\lambda$ is at least
the corresponding prefix sum of $\mu$ ([[def-dominance-order-on-partitions]]).

[F7] Over $\mathbb C$, $\kappa_tM^\lambda_{\mathbb C}=\mathbb C e_t$ with
$e_t\ne0$, and if $\kappa_tM^\mu_{\mathbb C}\ne0$ then
$\lambda\unrhd\mu$
([[lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional]],
[[lem-column-antisymmetrizer-detects-dominance]]).

## Proof

**Proof technique:** direct.

1.1 For $\gamma,\delta\in C_t$ the sign is multiplicative, so in the group algebra over any ring $\kappa_t\gamma=\operatorname{sgn}(\gamma)\kappa_t$ and in particular $\kappa_t^2=|C_t|\kappa_t$; and $\kappa_t$ acts $F$-linearly on $M^\lambda_F$ through the group action. Moreover the coefficient of $\{t\}$ in $e_t$ is $1$ by [F2], so $e_t\ne0$ over $F$. [given, F2, algebra]

1.2 Let $\{s\}$ be a $\mu$-tabloid whose row contains two entries $x,y$ lying in one column of $t$, so that $\tau=(xy)\in C_t$. Writing $Z$ for a set of left coset representatives of $\langle\tau\rangle$ in $C_t$ gives the integral group-algebra identity $\kappa_t=\sum_{z\in Z}\operatorname{sgn}(z)z(1-\tau)$; since $\tau\in R_s$ fixes the tabloid $\{s\}$ by [F3], applying this to $\{s\}$ gives $\kappa_t\{s\}=\sum_{z\in Z}\operatorname{sgn}(z)(z\{s\}-z\tau\{s\})=0$. This is an identity between integral vectors, so it holds in $M^\mu_{\mathbb Z}$ and hence over $F$: the collision criterion of [F4] is field-independent. [given, F3, F4, algebra]

2.1 Suppose $\kappa_t\{s\}\ne0$ for a $\mu$-tabloid $\{s\}$. Then step 1.2 shows no row of $\{s\}$ contains two entries from one column of $t$, i.e. every row of a representing tableau meets every column of $t$ in at most one entry; by [F5] this gives $\lambda\unrhd\mu$, and when $\lambda=\mu$ it gives $\rho\in R_s$, $\gamma\in C_t$ with $\rho\cdot s=\gamma\cdot t$. In the equal-shape case $\kappa_t\{s\}=\kappa_t\{\rho\cdot s\}=\kappa_t\gamma\cdot\{t\}=\operatorname{sgn}(\gamma)\kappa_t\{t\}=\operatorname{sgn}(\gamma)e_t$ by step 1.1. [given, F3, F5, step 1.1, step 1.2, algebra]

3.1 Every element of $M^\lambda_F$ is an $F$-combination of $\lambda$-tabloids, and by step 2.1 each $\kappa_t\{s\}$ is either $0$ or $\pm e_t$; hence $\kappa_tM^\lambda_F\subseteq Fe_t$. Since $e_t=\kappa_t\{t\}\ne0$ lies in the image, $\kappa_tM^\lambda_F=Fe_t$, as asserted. [given, F1, F2, step 2.1, algebra]

3.2 If $\kappa_tM^\mu_F\ne0$, some $\mu$-tabloid $\{s\}$ satisfies $\kappa_t\{s\}\ne0$, so step 2.1 gives $\lambda\unrhd\mu$ in the order of [F6]. [given, F1, F6, step 2.1]

4.1 Over $\mathbb C$ the conclusions of steps 3.1 and 3.2 are exactly the published statements [F7]; the present proof rederives them over an arbitrary field from the integral collision identity of step 1.2 and the combinatorial lemma [F5], both of which involve only coefficients $0,\pm1$, so the argument applies in characteristic two. For $n=0$ the empty tableau has $\kappa_t=1$ and $e_t=\{\varnothing\}\ne0$, the only partition is $\varnothing$ with $\varnothing\unrhd\varnothing$, and the three displayed claims hold. [given, F2, F5, F7, step 3.1, step 3.2] ∎
