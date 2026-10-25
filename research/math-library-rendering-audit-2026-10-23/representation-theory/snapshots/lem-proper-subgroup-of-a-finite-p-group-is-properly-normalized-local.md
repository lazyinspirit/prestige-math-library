---
id: lem-proper-subgroup-of-a-finite-p-group-is-properly-normalized-local
kind: lemma
title: "Proper subgroup of a finite p group is properly normalized local"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-nontrivial-center-of-a-finite-p-group, def-normalizer-of-a-subgroup, def-quotient-group, def-center-of-a-group, lem-center-is-normal, lem-subgroups-of-finite-p-groups-are-p-groups, def-finite-p-group, def-subgroup, thm-lagrange, cor-order-of-a-quotient-group, thm-strong-induction, lem-centralizers-and-normalizers-are-subgroups, thm-image-subgroup-and-kernel-normal, cor-order-of-element-divides-group-order, lem-product-with-normal-subgroup, def-normal-subgroup, def-group-homomorphism, thm-conjugation-is-an-automorphism]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Paul Flavell, An Introduction to Transfer and Fusion in Finite Groups, §§2–5"
      url: "https://web.mat.bham.ac.uk/P.J.Flavell/fusion.pdf"
      locator: "§§2–5, PDF pp. 1–15"
    - title: "Hans Kurzweil and Bernd Stellmacher, The Theory of Finite Groups, §§7.1–7.2"
      url: "https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf"
      locator: "§§7.1–7.2, printed pp. 163–171"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $P$ be a finite $p$-group and let $S<P$ be a proper subgroup. Then
$S<N_P(S)$: the normalizer of $S$ in $P$ strictly contains $S$.

## Facts & Assumptions

**Given:** A prime $p$, a finite $p$-group $P$, and a proper subgroup $S<P$; the assertion is proved for all finite $p$-groups of order $<|P|$ (induction hypothesis).

[F1] $S<N_P(S)$ means that $N_P(S)$ is a subgroup of $P$ containing $S$ properly, i.e. that there is $x\in P$ with $xSx^{-1}=S$ and $x\notin S$ ([[def-normalizer-of-a-subgroup]], [[def-subgroup]]).

[F2] Every subgroup of $P$ is a finite $p$-group, so $|S|$ is a power of $p$; if $P\ne1$ then $|P|=p^{r}$ with $r\ge1$; $S=P$ if and only if $|S|=|P|$ ([[lem-subgroups-of-finite-p-groups-are-p-groups]], [[def-finite-p-group]], [[thm-lagrange]]).

[F3] If $P\ne1$ then $Z(P)\ne1$; $Z(P)\mathrel{\trianglelefteq}P$; and $Z(P)$ consists of the elements commuting with every element of $P$, so $zSz^{-1}=S$ for every $z\in Z(P)$ ([[thm-nontrivial-center-of-a-finite-p-group]], [[def-center-of-a-group]], [[lem-center-is-normal]], [[def-normal-subgroup]], [[thm-conjugation-is-an-automorphism]]).

[F4] For $Z\mathrel{\trianglelefteq}P$ the quotient $P/Z$ is a finite group with $|P/Z|=[P:Z]=|P|/|Z|$, and $P/Z$ is a $p$-group, of order $<|P|$ whenever $Z\ne1$ ([[def-quotient-group]], [[cor-order-of-a-quotient-group]], [[thm-lagrange]], [[def-finite-p-group]]).

[F5] For $Z\mathrel{\trianglelefteq}P$ and $S\le P$ the image $SZ/Z$ is a subgroup of $P/Z$, and if $Z\le S$ then $SZ/Z=S/Z$ with $|S/Z|=|S|/|Z|$; moreover conjugation $x\mapsto uxu^{-1}$ is an automorphism, so $|xSx^{-1}|=|S|$ and $xSx^{-1}Z$ is the image of $xSx^{-1}$ in $P/Z$ ([[thm-image-subgroup-and-kernel-normal]], [[def-group-homomorphism]], [[lem-product-with-normal-subgroup]], [[cor-order-of-a-quotient-group]], [[thm-conjugation-is-an-automorphism]]).

[F6] Strong induction on the natural number $|P|$: if, for every $N$, truth for all finite $p$-groups of order $<N$ implies truth for all of order $N$, then the statement holds for all finite $p$-groups ([[thm-strong-induction]]).



## Proof

**Proof technique:** direct.

1.1 The case $P=1$ is vacuous, since it has no proper subgroup. Assume the assertion known for every finite $p$-group of order $<|P|$. [F2, F6, given]

1.2 If $S=1$ then every $x\in P$ satisfies $xSx^{-1}=S$, so $N_P(S)=P$; if also $S<P$ then $P\ne1$ and $N_P(S)=P>S$, which is the claim. [F1, F3, given]

1.3 Suppose $Z(P)\nsubseteq S$: choose $z\in Z(P)$ with $z\notin S$. By [F3] $z$ normalizes $S$, so $z\in N_P(S)\setminus S$ and $S<N_P(S)$. [F1, F3, choose]

1.4 It remains to treat the case $Z\le S$ with $Z:=Z(P)$, under $S\ne1$ and $P\ne1$. Then $P/Z$ is a finite $p$-group of order $|P|/|Z|<|P|$ by [F3] and [F4], and $T:=S/Z$ is a subgroup of it by [F5]. If $T=P/Z$ then $S=P$ by [F5], contrary to hypothesis, so $T<P/Z$. [F2, F3, F4, F5, given]

2.1 The induction hypothesis of step 1.1 applies to the finite $p$-group $P/Z$ and its proper subgroup $T$: there is a coset $xZ\in N_{P/Z}(T)$ with $xZ\notin T$. By the definition of the normalizer this means $(xZ)T(xZ)^{-1}=T$ in $P/Z$. [F1, F4, F5, step 1.4, assume-hyp]

3.1 Translating back: $(xSx^{-1})Z/Z=SZ/Z$. Since $Z\le S$, this says $xSx^{-1}Z=S$, so every element of $xSx^{-1}$ lies in $S$; thus $xSx^{-1}\subseteq S$, and since conjugation is injective with $|xSx^{-1}|=|S|$, actually $xSx^{-1}=S$. Hence $x\in N_P(S)$ by [F1]. [F5, step 2.1, algebra]

3.2 Moreover $x\notin S$: otherwise $xZ\in S/Z=T$, contrary to the choice in step 2.1. [F5, step 2.1]

4.1 So in the case $Z(P)\le S$ there is $x\in N_P(S)\setminus S$ as well, and together with steps 1.2 and 1.3 this proves $S<N_P(S)$ in every case, completing the induction. ∎ [F1, step 1.2, step 1.3, step 3.1, step 3.2]
