---
id: lem-uniform-null-g-delta-capture-functions
kind: lemma
title: Uniform null G-delta sets capture block functions
status: draft
origin: pipeline
deps: [def-countable-borel-hierarchy, thm-first-borel-cantelli, lem-dyadic-coding-coin-measure-and-lebesgue-transfer, thm-separable-complete-metric-baire-in-zf, thm-complete-subspace-iff-closed, lem-cantor-and-baire-sequence-coding]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Lemma 3.11, pp. 47-50"}
---

## Statement

There are uniformly assigned null $G_\delta$ sets $N_f$ in Cantor space for
$f\in\omega^\omega$ and, for each open $U$ of measure below one, finite capture
sets $\varphi_U(n)$ of size at most $2^{n+1}$, such that $N_f\subseteq U$ implies
$f(n)\in\varphi_U(n)$ for all sufficiently large $n$. If $f$ belongs to a
transitive model, the code for $N_f$ belongs to that model.

## Facts & Assumptions

**Given:** Cantor space $2^\omega$ with its coin measure $\nu$.

[F1] [[lem-dyadic-coding-coin-measure-and-lebesgue-transfer]]: the coin measure, its clopen cylinder values $\nu([s])=2^{-|s|}$, and countable additivity.

[F2] [[lem-cantor-and-baire-sequence-coding]]: the canonical pairing of natural numbers, the cylinder topology, and explicit natural-number codes for finite binary words. Independence of the particular block events used below is proved directly in step 1.1 from [F1], rather than attributed to this coding lemma.

[F3] [[def-countable-borel-hierarchy]]: the $G_\delta$ form of a countable intersection of open sets.

[F4] [[thm-first-borel-cantelli]]: if $\sum_n\nu(E_n)<\infty$ then $\nu(\limsup_n E_n)=0$.

[F5] [[thm-complete-subspace-iff-closed]] and [[lem-cantor-and-baire-sequence-coding]]: a closed subspace of Cantor space is complete; choosing the lexicographically least branch through each nonempty cylinder trace supplies a canonical countable dense subset. Hence [[thm-separable-complete-metric-baire-in-zf]] makes every nonempty closed $K\subseteq2^\omega$ a Baire space in ZF.

## Proof

1.1 Using the canonical pairing from [F2], put $C_{n,m}=\{\langle\langle n,m\rangle,j\rangle:j\le n\}$. These finite coordinate groups are pairwise disjoint and have size $n+1$. Put $B_{n,m}=\{x\in2^\omega:\forall c\in C_{n,m}\ x(c)=1\}$. This is clopen and has measure $2^{-(n+1)}$: after choosing a prefix length above all coordinates in $C_{n,m}$, it is the disjoint union of exactly the compatible prefix cylinders, whose values are given by [F1]. More generally, for every finite set $J$ of pairs, the same finite-prefix count gives $\nu(\bigcap_{(n,m)\in J}B_{n,m})=\prod_{(n,m)\in J}2^{-(n+1)}$ and $\nu(\bigcap_{(n,m)\in J}B_{n,m}^{c})=\prod_{(n,m)\in J}(1-2^{-(n+1)})$: on each disjoint block there is respectively one allowed bit pattern or every pattern except the all-one pattern, and the counts multiply. Thus the precise finite independence formulas used below follow directly from cylinder values. [F1, F2]

1.2 Fix an open $U$ with $\nu(U)<1$ and put $K_0=2^\omega\setminus U$, a closed set of positive measure. Let $Z$ be the union of those cylinder traces $[s]\cap K_0$ having measure zero, using the canonical enumeration of finite words from [F2], and put $K=K_0\setminus Z$. Countable additivity makes $Z$ null. It is relatively open in $K_0$, so $K$ is closed in $K_0$ and hence in Cantor space; moreover $\nu(K)=\nu(K_0)>0$. If $[s]\cap K$ is nonempty, then $[s]\cap K_0$ was not one of the deleted null traces, and subtracting $Z$ does not change its positive measure. Thus every nonempty basic open subset of $K$ has positive measure, and the normalization depends only on $U$. [F1, F2]

2.1 For $f:\omega\to\omega$ put $N_f=\bigcap_{k<\omega}\bigcup_{n\ge k}B_{n,f(n)}$. Each inner union is open and the intersection is a countable intersection of open sets, so $N_f$ is $G_\delta$. It is the limsup of the sets $B_{n,f(n)}$, and $\sum_n\nu(B_{n,f(n)})=\sum_n2^{-(n+1)}<\infty$, so [F4] makes $N_f$ null. The assignment $f\mapsto N_f$ is arithmetic in $f$ and the fixed block system, so its code lies in every transitive model containing $f$. [F1, F3, F4, step 1.1]

2.2 For $s\in T_K=\{s\in2^{<\omega}:[s]\cap K\ne\varnothing\}$ put $A_s(n)=\{m:K\cap[s]\cap B_{n,m}=\varnothing\}$. For every finite $J\subseteq\{(n,m):m\in A_s(n)\}$ we have $K\cap[s]\subseteq\bigcap_{(n,m)\in J}B_{n,m}^{c}$, so step 1.1 gives $0<\nu(K\cap[s])\le\prod_{(n,m)\in J}(1-2^{-(n+1)})\le\exp(-\sum_{(n,m)\in J}2^{-(n+1)})$. Take the finite initial subsets in the canonical pairing order. If $\sum_n|A_s(n)|/2^{n+1}$ were infinite, their exponent sums would be arbitrarily large and the displayed upper bounds arbitrarily small, contradicting the fixed positive left side. Therefore the series converges; in particular every $A_s(n)$ is finite and $|A_s(n)|/2^{n+1}\to0$. [F1, step 1.1, step 1.2]

2.3 Capture. Assume $N_f\subseteq U$, so that $K\cap N_f=\varnothing$; then there are $s\in T_K$ and $m<\omega$ with $K\cap[s]\cap\bigcup_{n\ge m}B_{n,f(n)}=\varnothing$, since otherwise each set $K\cap\bigcup_{n\ge m}B_{n,f(n)}$ would meet every basic open subset of $K$ and hence be dense open in the Polish space $K$, and the Baire argument of [F5] in the closed subspace $K$ would make the intersection $\bigcap_m(K\cap\bigcup_{n\ge m}B_{n,f(n)})=K\cap N_f$ dense in $K$, contradicting $K\ne\varnothing$ and $K\cap N_f=\varnothing$. [F5, step 1.2]

3.1 Let $i:2^{<\omega}\to\omega$ be the canonical bijection, and for $s\in T_K$ let $n(s)$ be the least $n$ such that $|A_s(n')|/2^{n'+1}\le2^{-i(s)-1}$ for all $n'\ge n$, which exists by step 2.2 with a canonical choice; define $\varphi_U(n)=\bigcup\{A_s(n):s\in T_K,\ n(s)\le n\}$, a finite set with $|\varphi_U(n)|/2^{n+1}\le\sum_{s:n(s)\le n}|A_s(n)|/2^{n+1}\le\sum_{s\in T_K}2^{-i(s)-1}\le\sum_{k<\omega}2^{-k-1}=1$ by the injectivity of $i$. [F1, step 2.2]

4.1 With $s,m$ as in step 2.3 and $\ell=\max\{m,n(s)\}$, every $n\ge\ell$ satisfies $K\cap[s]\cap B_{n,f(n)}=\varnothing$ because $B_{n,f(n)}\subseteq\bigcup_{n'\ge m}B_{n',f(n')}$, hence $f(n)\in A_s(n)\subseteq\varphi_U(n)$; together with steps 2.1, 1.2 and 3.1 this proves the capture clause, the size bound, and the model-membership of the codes. [step 3.1, step 2.3]

5.1 The steps above provide the uniformly assigned null $G_\delta$ sets and the capture sets with all stated properties, which is the Statement. [step 2.1, step 4.1] ∎
