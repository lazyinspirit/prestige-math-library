---
id: lem-local-sylow-conjugacy-ascent-for-fusion
kind: lemma
title: "Local sylow conjugacy ascent for fusion"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-sylow-first-theorem, thm-sylow-second-theorem, def-sylow-p-subgroup, lem-proper-subgroup-of-a-finite-p-group-is-properly-normalized-local, def-p-local-normalizer-for-normal-complement-theory, def-control-of-fusion-in-a-sylow-p-subgroup, lem-fusion-control-and-centralizer-transitivity, def-centralizer-of-a-subgroup, def-normalizer-of-a-subgroup, lem-centralizers-and-normalizers-are-subgroups, thm-conjugation-is-an-automorphism, thm-strong-induction, thm-lagrange, def-subgroup, def-finite-p-group, lem-subgroups-of-finite-p-groups-are-p-groups, def-conjugacy-class-and-centralizer, lem-group-inverse-laws]
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
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $G$ be a finite group, $p$ a prime and $P\in\operatorname{Syl}_p(G)$. Suppose
that for every nontrivial $p$-subgroup $S\le P$ and every $x\in S$ with
$x\ne e$, the centralizer $C_{N_G(S)}(x)$ acts transitively on the Sylow
$p$-subgroups of $N_G(S)$ containing $x$
([[def-p-local-normalizer-for-normal-complement-theory]]). Then $N_G(P)$ controls
fusion in $P$ with respect to $G$: any two $G$-conjugate elements of $P$ are
conjugate by an element of $N_G(P)$
([[def-control-of-fusion-in-a-sylow-p-subgroup]]).

## Facts & Assumptions

**Given:** A finite group $G$, a prime $p$, a Sylow $p$-subgroup $P\le G$, and the hypothesis that for every nontrivial $p$-subgroup $S\le P$ and every $x\in S\setminus\{e\}$, the centralizer $C_{N_G(S)}(x)$ acts transitively on the Sylow $p$-subgroups of $N_G(S)$ containing $x$.

[F1] Sylow facts in a finite group $X$: Sylow $p$-subgroups exist, every $p$-subgroup lies in one, and any two are conjugate ([[thm-sylow-first-theorem]], [[thm-sylow-second-theorem]], [[def-sylow-p-subgroup]]).

[F2] The local hypothesis says that for every nontrivial $p$-subgroup $S\le P$, every $x\in S\setminus\{e\}$ and all Sylow $p$-subgroups $T_1,T_2$ of $N_G(S)$ containing $x$, there is $c\in C_{N_G(S)}(x)$ with $T_2=T_1^{c}$ ([[def-p-local-normalizer-for-normal-complement-theory]]).

[F3] If $S$ is a proper subgroup of a finite $p$-group $Q$, then $S<N_Q(S)\le Q$ ([[lem-proper-subgroup-of-a-finite-p-group-is-properly-normalized-local]], [[def-normalizer-of-a-subgroup]]).

[F4] Conjugation $z\mapsto gzg^{-1}$ is an automorphism, $(z^{a})^{b}=z^{ba}$, equivalently $z^{ab}=(z^{b})^{a}$; $C_G(x)$ and all normalizers are subgroups; $v\in N_G(T)$ gives $T^{v}=T$, and $v\in C_G(x)$ gives $x^{v}=x$; also $S\le N_G(S)$ ([[thm-conjugation-is-an-automorphism]], [[lem-group-inverse-laws]], [[lem-centralizers-and-normalizers-are-subgroups]], [[def-centralizer-of-a-subgroup]], [[def-conjugacy-class-and-centralizer]], [[def-subgroup]]).

[F5] Orders: all Sylow $p$-subgroups of a finite group $X$ have the same order, equal to the exact power of $p$ dividing $|X|$; a subgroup's order divides the group's order ([[def-sylow-p-subgroup]], [[thm-lagrange]], [[lem-subgroups-of-finite-p-groups-are-p-groups]]).

[F6] Strong induction on the positive integer $m(Q,R):=|P|/|Q\cap R|$, for Sylow $p$-subgroups $Q,R$ of $G$: $|Q\cap R|$ divides $|Q|=|P|$ by [F5], so $m(Q,R)$ is a positive integer, and $m(Q,R)=1$ exactly when $Q=R$ ([[thm-strong-induction]], [[thm-lagrange]]).



## Proof

**Proof technique:** direct.

1.1 Let $x\in P$, $x\ne e$, and let $\Omega$ be the set of Sylow $p$-subgroups of $G$ containing $x$. We prove by strong induction on $m(Q,R)$ that any two members $Q,R\in\Omega$ are conjugate by an element of $C_G(x)$; the case $m(Q,R)=1$, that is $Q=R$, is trivial by [F6]. [F6, given]

1.2 The hypothesis extends to every nontrivial $p$-subgroup of $G$, not only to those inside $P$: let $S\le G$ be a nontrivial $p$-subgroup and choose $d\in G$ with $S^{d}\le P$ by [F1], so that $N_G(S^{d})=N_G(S)^{d}$ and conjugation by $d$ carries Sylow $p$-subgroups of $N_G(S)$ to Sylow $p$-subgroups of $N_G(S^{d})$. If $x\in S\setminus\{e\}$ and $T_1,T_2$ are Sylow $p$-subgroups of $N_G(S)$ containing $x$, then $x^{d}\in S^{d}\setminus\{e\}$ and $T_1^{d},T_2^{d}$ are Sylow $p$-subgroups of $N_G(S^{d})$ containing $x^{d}$, so [F2] applied to the nontrivial $p$-subgroup $S^{d}\le P$ provides $c'\in C_{N_G(S^{d})}(x^{d})$ with $(T_1^{d})^{c'}=T_2^{d}$. Then $c:=c'^{d^{-1}}$ normalizes $S$ and centralizes $x$, so $c\in C_{N_G(S)}(x)$, and conjugating the displayed equality by $d^{-1}$ gives $T_1^{c}=T_2$; hence the form [F2] of the hypothesis holds for $S$. [F1, F2, F4, algebra]

2.1 For the induction step let $Q,R\in\Omega$ with $S:=Q\cap R$ and $m(Q,R)>1$, so that $S<Q$ and $S<R$ by [F6]; note $x\in S$, so $S$ is a nontrivial $p$-subgroup, being a subgroup of the $p$-group $Q$ by [F5]. By [F3] there are $N_Q(S)$ and $N_R(S)$ with $S<N_Q(S)\le Q$ and $S<N_R(S)\le R$. [F3, F5, F6, step 1.1]

3.1 Put $N:=N_G(S)$, which is a $p$-local normalizer; by [F1] there is a Sylow $p$-subgroup $T_Q$ of $N$ with $N_Q(S)\le T_Q$ and a Sylow $p$-subgroup $T_R$ of $N$ with $N_R(S)\le T_R$; then $x\in S<N_Q(S)\le T_Q$ and $x\in S<N_R(S)\le T_R$ by [F4]. By [F2] in the form of step 1.2, applied to the nontrivial $p$-subgroup $S$ of step 2.1, the element $x\in S$ and the Sylows $T_Q,T_R$ of $N_G(S)$ containing $x$, there is $c\in C_{N_G(S)}(x)$ with $T_Q^{c}=T_R$. [F1, F2, F4, step 2.1, step 1.2]

4.1 By [F1] choose Sylow $p$-subgroups $Q^{*},R^{*}$ of $G$ with $T_Q\le Q^{*}$ and $T_R\le R^{*}$. Then $x\in T_Q\le Q^{*}$ and $x\in T_R\le R^{*}$, so $Q^{*},R^{*}\in\Omega$. Moreover $S<N_Q(S)\le Q\cap Q^{*}$ and $S<N_R(S)\le R\cap R^{*}$, and since $T_R=T_Q^{c}\le (Q^{*})^{c}$ also $T_R\le (Q^{*})^{c}\cap R^{*}$ with $|T_R|\ge|N_R(S)|>|S|$. Hence $m(Q,Q^{*})<m(Q,R)$, $m(R,R^{*})<m(Q,R)$ and $m((Q^{*})^{c},R^{*})<m(Q,R)$ by [F5] and [F6]. [F1, F5, F6, step 2.1, step 3.1]

5.1 Also $(Q^{*})^{c}\in\Omega$ because $x^{c}=x$ and $x\in Q^{*}$, and $c\in C_G(x)$, so $(Q^{*})^{c}$ is $C_G(x)$-conjugate to $Q^{*}$. [F4, step 3.1, step 4.1]

6.1 The induction hypothesis of step 1.1 applies to the pairs $(Q,Q^{*})$, $((Q^{*})^{c},R^{*})$ and $(R^{*},R)$, all of whose measures are smaller than $m(Q,R)$: $Q$ is $C_G(x)$-conjugate to $Q^{*}$, $(Q^{*})^{c}$ to $R^{*}$, and $R^{*}$ to $R$. Since $C_G(x)$-conjugacy is an equivalence relation, and since $(Q^{*})^{c}$ is $C_G(x)$-conjugate to $Q^{*}$ by step 5.1, the element $Q$ is $C_G(x)$-conjugate to $R$, completing the induction. [step 1.1, step 4.1, step 5.1, algebra]

7.1 We have shown that for every $x\in P$ with $x\ne e$, $C_G(x)$ acts transitively on the Sylow $p$-subgroups of $G$ containing $x$; by [[lem-fusion-control-and-centralizer-transitivity]] applied with $H:=G$, the normalizer $N_G(P)$ controls fusion in $P$ with respect to $G$. ∎ [step 1.1, step 6.1]
