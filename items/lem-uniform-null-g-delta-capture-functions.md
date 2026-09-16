---
id: lem-uniform-null-g-delta-capture-functions
kind: lemma
title: Uniform null G-delta sets capture block functions
status: draft
origin: pipeline
deps: [def-product-measure-on-sigma-finite-spaces, def-countable-borel-hierarchy, thm-first-borel-cantelli, lem-dyadic-coding-coin-measure-and-lebesgue-transfer, def-complete-metric-baire-principle-over-zf, lem-cantor-and-baire-sequence-coding]
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

[F2] [[def-product-measure-on-sigma-finite-spaces]] with [[lem-cantor-and-baire-sequence-coding]]: independence of events depending on disjoint finite sets of coordinates, and the coding of finite blocks by natural numbers.

[F3] [[def-countable-borel-hierarchy]]: the $G_\delta$ form of a countable intersection of open sets.

[F4] [[thm-first-borel-cantelli]]: if $\sum_n\nu(E_n)<\infty$ then $\nu(\limsup_n E_n)=0$.

[F5] [[def-complete-metric-baire-principle-over-zf]] with [[lem-cantor-and-baire-sequence-coding]]: the Baire argument for the closed subspace $K\subseteq2^\omega$, carried out over ZF with canonical least choices of extensions; no dependent choice is used.

## Proof

1.1 Fix a canonical partition of $\omega$ into finite coordinate groups $C_{n,m}$ with $|C_{n,m}|=n+1$, indexed bijectively by the pairs $(n,m)$ of natural numbers using the canonical pairing of $\omega$, and put $B_{n,m}=\{x\in2^\omega:\forall c\in C_{n,m}\ x(c)=1\}$: a clopen set of measure $2^{-(n+1)}$, with the family $\{B_{n,m}\}$ independent because the coordinate groups are pairwise disjoint. [F1, F2]

1.2 For $f:\omega\to\omega$ put $N_f=\bigcap_{k<\omega}\bigcup_{n\ge k}B_{n,f(n)}$; each inner union is open and the intersection is a countable intersection of open sets, so $N_f$ is $G_\delta$, and $\nu(N_f)\le\sum_{n\ge k}2^{-(n+1)}=2^{-k}$ for every $k$, so $N_f$ is null by continuity from above, while the assignment $f\mapsto N_f$ is arithmetic in $f$ and the fixed partition, so its code lies in every transitive model containing $f$. [F1, F3, F4]

1.3 Fix an open $U$ with $\nu(U)<1$ and put $K=2^\omega\setminus U$, a nonempty closed set of positive measure; enumerating the cylinders canonically and deleting from $K$ every $[s]\cap K$ of measure zero leaves a nonempty closed subset of $2^\omega\setminus U$, again called $K$, in which every nonempty basic open subset $[s]\cap K$ has positive measure, and the normalization depends only on $U$. [F1, F2]

2.1 For $s\in T_K=\{s\in2^{<\omega}:[s]\cap K\ne\varnothing\}$ put $A_s(n)=\{m:K\cap[s]\cap B_{n,m}=\varnothing\}$; since $K\cap[s]\subseteq B_{n,m}^{c}$ for $m\in A_s(n)$ and the $B_{n,m}$ are independent with $\nu(B_{n,m})=2^{-(n+1)}$, the estimate $1-x\le e^{-x}$ gives $0<\nu(K\cap[s])\le\prod_{n<\omega}(1-2^{-(n+1)})^{|A_s(n)|}\le\exp(-\sum_{n<\omega}|A_s(n)|/2^{n+1})$, so $\sum_n|A_s(n)|/2^{n+1}<\infty$, every $A_s(n)$ is finite, and $|A_s(n)|/2^{n+1}\to0$. [F1, F2, step 1.3]

2.2 Capture. Assume $N_f\subseteq U$, so that $K\cap N_f=\varnothing$; then there are $s\in T_K$ and $m<\omega$ with $K\cap[s]\cap\bigcup_{n\ge m}B_{n,f(n)}=\varnothing$, since otherwise each set $K\cap\bigcup_{n\ge m}B_{n,f(n)}$ would meet every basic open subset of $K$ and hence be dense open in the Polish space $K$, and the Baire argument of [F5] in the closed subspace $K$ would make the intersection $\bigcap_m(K\cap\bigcup_{n\ge m}B_{n,f(n)})=K\cap N_f$ dense in $K$, contradicting $K\ne\varnothing$ and $K\cap N_f=\varnothing$. [F5, step 1.3]

3.1 Let $i:2^{<\omega}\to\omega$ be the canonical bijection, and for $s\in T_K$ let $n(s)$ be the least $n$ such that $|A_s(n')|/2^{n'+1}\le2^{-i(s)-1}$ for all $n'\ge n$, which exists by step 2.1 with a canonical choice; define $\varphi_U(n)=\bigcup\{A_s(n):s\in T_K,\ n(s)\le n\}$, a finite set with $|\varphi_U(n)|/2^{n+1}\le\sum_{s:n(s)\le n}|A_s(n)|/2^{n+1}\le\sum_{s\in T_K}2^{-i(s)-1}\le\sum_{k<\omega}2^{-k-1}=1$ by the injectivity of $i$. [F1, step 2.1]

4.1 With $s,m$ as in step 2.2 and $\ell=\max\{m,n(s)\}$, every $n\ge\ell$ satisfies $K\cap[s]\cap B_{n,f(n)}=\varnothing$ because $B_{n,f(n)}\subseteq\bigcup_{n'\ge m}B_{n',f(n')}$, hence $f(n)\in A_s(n)\subseteq\varphi_U(n)$; together with steps 1.2, 1.3 and 3.1 this proves the capture clause, the size bound, and the model-membership of the codes. [step 3.1, step 2.2]

5.1 The steps above provide the uniformly assigned null $G_\delta$ sets and the capture sets with all stated properties, which is the Statement. [step 1.2, step 4.1] ∎
