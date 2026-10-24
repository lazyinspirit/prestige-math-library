---
id: lem-hh-langlands-dominant-projection
kind: lemma
title: Dominant projection and strict parabolic weight decrease
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-hh-affine-hecke-weight-temperedness-and-positive-position, lem-root-datum-combinatorics, thm-nearest-point-in-a-nonempty-closed-convex-set, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten Solleveld, On the classification of irreducible representations of affine Hecke algebras with unequal parameters"
      url: "https://arxiv.org/pdf/1008.0177"
      locator: "Section 2.2, Theorem 2.2.4 proof; cone decomposition (2.12) and strict decrease (2.13). The proof here supplies the cone argument using Euclidean projection."
---

## Statement

Use the cones and inner product of [[def-hh-affine-hecke-weight-temperedness-and-positive-position]]. Every $\lambda\in E$ has a unique orthogonal decomposition $\lambda=\nu+\eta$ with $\nu\in C$, $P=\{\beta\in B:\beta(\nu)=0\}$ and $\eta\in K_P$. The vector $\nu=p(\lambda)$ is the nearest point of $C$ to $\lambda$. Let $r(\lambda)=\|p(\lambda)\|$. If $\nu\in C_P^{++}$ and $\eta\in K_P$, then $p(\nu+\eta)=\nu$. For $W^P=\{w\in W:w(P)\subset R_L^+\}$, where $R_L=\Phi^\vee$, one has
$$
r(w(\nu+\eta))<\|\nu\|\quad(w\in W^P\setminus\{1\}).
$$
For any $\eta'\in E_P$, one has $r(\nu+\eta')\ge\|\nu\|$, with equality exactly when $\eta'\in K_P$.

## Facts & Assumptions

**Given:** The finite reduced root system $R_L$ on the dual root-datum convention, the $W$-invariant inner product, and $C,E_P,E^P,K_P$ above.

[F1] Simple roots form a basis of the root span, all positive roots have nonnegative simple-root coordinates, $W$ acts simply transitively on chambers, and length equals positive-root inversion number ([[lem-root-datum-combinatorics]]).

[F2] The displayed cones and orthogonal spaces are those of [[def-hh-affine-hecke-weight-temperedness-and-positive-position]].

[F3] A nonempty closed convex subset of a positive-dimensional Euclidean space has a unique nearest point to any point ([[thm-nearest-point-in-a-nonempty-closed-convex-set]]).

[F4] Cauchy–Schwarz holds in real inner product spaces with equality exactly for linearly dependent vectors ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Given:** These data; write $(\ ,\ )$ for the inner product.

1.1 The cone $C$ is nonempty because it contains zero, closed because it is a finite intersection of closed linear half-spaces, and convex because every defining inequality is linear. For $\dim E>0$, identify the inner product space isometrically with $\mathbb R^{\dim E}$ using a finite orthonormal basis and apply [F3] to obtain a unique nearest point $\nu\in C$. If $E=0$, the unique nearest point is zero. The derivative of squared distance along every segment from $\nu$ to $v\in C$ gives $(\lambda-\nu,v-\nu)\le0$. Taking $v=0,2\nu$ gives $(\lambda-\nu,\nu)=0$, and therefore $(\lambda-\nu,v)\le0$ for all $v\in C$. Conversely these two conditions imply $\|\lambda-v\|^2\ge\|\lambda-\nu\|^2$ for every $v\in C$. [given, F2, F3, algebra]

2.1 The polar cone of $C$ is $K_B$: decompose $E$ into the span of the simple coroots and its orthogonal central space, test both signs of every central vector, and test the fundamental vectors dual to the simple coroots to see that the coroot coefficients of a polar vector are nonpositive. Each $(\nu,\beta^\vee)$ is a positive multiple of $\beta(\nu)$, since $s_\beta$ is orthogonal reflection with normal $\beta^\vee$. Thus a polar vector $\eta=-\sum c_\beta\beta^\vee$, $c_\beta\ge0$, is orthogonal to $\nu\in C$ exactly when $c_\beta=0$ whenever $\beta(\nu)>0$. step 1.1 proves precisely $\lambda=\nu+\eta$, $\eta\in K_P$ for the zero set $P$ of $\nu$; it also proves the stated converse and uniqueness. [F1, F2, step 1.1, algebra]

3.1 The stabilizer of $\nu\in C$ in $W$ is $W_P$ for its zero set $P$. Indeed a positive root vanishes at $\nu$ exactly when its simple-root support lies in $P$. A sufficiently small ball about $\nu$ avoids every root hyperplane not containing $\nu$; the hyperplanes through $\nu$ are exactly the subsystem hyperplanes for $P$. Its local chambers are permuted simply transitively by $W_P$ by [F1] applied to that subsystem. If $w\nu=\nu$, then $wC$ and $C$ meet that ball in local chambers, so some $v\in W_P$ sends the local chamber of $wC$ to that of $C$. These are also chambers of the full arrangement inside the ball, so $vwC=C$; full chamber simple transitivity gives $vw=1$. Conversely every generator of $W_P$ fixes $\nu$. Finally $W^P\cap W_P=\{1\}$: an element of $W_P$ preserving positivity of $P$ preserves its positive roots and hence its positive chamber, and is the identity by [F1]. [F1, step 2.1, algebra]

4.1 For any reduced expression $w=s_1\cdots s_k$, the roots $s_1\cdots s_{j-1}(\beta_j)$ are positive by the inversion-number description of length, and telescoping gives $\nu-w\nu=\sum_j\beta_j(\nu)s_1\cdots s_{j-1}(\beta_j^\vee)$, a nonnegative combination of positive coroots. Consequently if $w\nu$ also belongs to $C$, then $(w\nu,\nu-w\nu)\ge0$ and Cauchy–Schwarz forces $w\nu=\nu$. Now let $w\in W^P\setminus\{1\}$, $\eta\in K_P$, and $u=p(w(\nu+\eta))$. Since $w(P)$ consists of positive roots, $w\eta$ is a nonpositive combination of positive coroots, so $(u,w\eta)\le0$. By step 1.1 and Cauchy–Schwarz, $\|u\|^2=(u,w\nu+w\eta)\le(u,w\nu)\le\|u\|\|\nu\|.$ Hence $\|u\|\le\|\nu\|$. If equality held with nonzero norm, equality in Cauchy–Schwarz would give $u=w\nu\in C$, hence $w\nu=\nu$ by the telescoping argument, contradicting step 3.1. If $\nu=0$, its zero set is $B$, and $W^B=\{1\}$ so there is no such $w$. The same stabilizer argument applies if $\nu$ is purely central. This proves strict decrease. [F1, F4, step 1.1, step 3.1, algebra]

5.1 For any $x\in E$, step 1.1 also gives $\|p(x)\|^2=\max_{v\in C}\bigl(2(x,v)-\|v\|^2\bigr),$ whose unique maximizer is $p(x)$. If $x=\nu+\eta'$ with $\eta'\in E_P$, then $(\nu,\eta')=0$ and evaluation at $v=\nu$ yields $r(x)^2\ge\|\nu\|^2$. Equality forces the unique maximizer to be $\nu$, so step 2.1 forces $\eta'\in K_P$. Conversely $\eta'\in K_P$ gives $p(x)=\nu$ by step 2.1. This proves the last assertion. [F2, step 1.1, step 2.1, algebra] ∎
