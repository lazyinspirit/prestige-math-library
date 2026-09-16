---
id: ex-uniform-null-capture-on-a-block-function
kind: example
title: Uniform null capture for a constant block function
status: draft
origin: pipeline
deps: [lem-uniform-null-g-delta-capture-functions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Lemma 3.11, pp. 47-50"}
---

## Example

For the constant function $f(n)=0$, the uniform construction gives $N_f$ as the
intersection of the tail unions of the independent blocks $B_{n,0}$. It is a
null $G_\delta$. Whenever an open $U$ of measure below one contains $N_f$, the
finite capture sets satisfy $0\in\varphi_U(n)$ for all sufficiently large $n$.

## Verification

**Given:** The constant function $f(n)=0$, the independent blocks $B_{n,m}$ of measure $2^{-(n+1)}$ with $B_{n,m}=\{z:\forall c\in C_{n,m}\ z(c)=1\}$, and an open set $U\supseteq N_f$ with coin measure below one.

[F1] [[lem-uniform-null-g-delta-capture-functions]]: the independent blocks, the null sets N_f, the capture sets and the Baire argument.

1.1 By definition $N_f=\bigcap_{k<\omega}\bigcup_{n\ge k}B_{n,0}$: each set $V_k=\bigcup_{n\ge k}B_{n,0}$ is a union of clopen sets and hence open, so $N_f$ is a countable intersection of open sets. The first three tail unions are $V_0=B_{0,0}\cup B_{1,0}\cup\dots$, $V_1=B_{1,0}\cup B_{2,0}\cup\dots$ and $V_2=B_{2,0}\cup B_{3,0}\cup\dots$, each visibly open and each contained in the next. [F1]

2.1 The measures are bounded by the geometric tails: $\nu(V_k)\le\sum_{n\ge k}2^{-(n+1)}=2^{-k}$ by countable subadditivity, so $\nu(V_k)\to0$ and $N_f$ is null, hence a null $G_\delta$. [F1, step 1.1]

3.1 Let $K=2^\omega\setminus U$, a closed set disjoint from $N_f$ with positive measure, normalized as in the uniform construction by deleting its null cylinders. Since $K\cap N_f=\varnothing$, there are $s\in T_K$ and $m$ with $K\cap[s]\cap\bigcup_{n\ge m}B_{n,0}=\varnothing$, by the Baire argument of the construction. [F1, step 2.1]

4.1 For all $n\ge\max\{m,n(s)\}$ we have $K\cap[s]\cap B_{n,0}=\varnothing$, since $B_{n,0}\subseteq\bigcup_{n'\ge m}B_{n',0}$; hence $0\in A_s(n)\subseteq\varphi_U(n)$ for all sufficiently large $n$ by the definition of $\varphi_U$, which is exactly the eventual, not pointwise, capture of the constant function. [F1, step 3.1]

5.1 The steps above verify the nullity of $N_f$ and the eventual membership $0\in\varphi_U(n)$, illustrating that the capture is eventual. [step 2.1, step 4.1] ∎
