---
id: lem-fusion-control-gives-a-nontrivial-p-quotient-of-the-p-residual
kind: lemma
title: "Fusion control forces trivial Sylow intersection with the p residual"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-p-residual-of-a-finite-group, lem-p-residual-is-generated-by-p-prime-elements-and-idempotent, def-control-of-fusion-in-a-sylow-p-subgroup, def-sylow-p-subgroup, lem-sylow-subgroups-of-a-normal-subgroup-are-intersections, def-subgroup-commutator-and-lower-central-series, def-commutator-and-commutator-subgroup, lem-normal-p-subgroup-has-proper-commutator-in-a-p-group, thm-quotient-abelian-iff-contains-commutator-subgroup, def-transfer-homomorphism-for-a-finite-index-subgroup, lem-transfer-is-a-homomorphism, lem-transfer-cycle-decomposition-formula, def-quotient-group, def-normal-subgroup, def-group-homomorphism, lem-group-homomorphism-basic-properties, thm-lagrange, cor-order-of-a-quotient-group, def-finite-p-group, lem-subgroups-of-finite-p-groups-are-p-groups, lem-order-characterisation, cor-order-of-element-divides-group-order, lem-divisibility-basic, def-index, def-coset, def-generated-subgroup, def-subgroup, thm-conjugation-is-an-automorphism, def-conjugacy-class-and-centralizer, thm-orbits-partition-the-set, def-orbit-and-stabilizer, def-group-action, lem-group-inverse-laws, lem-transfer-is-independent-of-the-transversal]
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
      locator: "§§2.1–2.5, 3.1–3.8, 4.1–4.3, 5.5–5.10, PDF pp. 1–15"
    - title: "Hans Kurzweil and Bernd Stellmacher, The Theory of Finite Groups, §§7.1–7.2"
      url: "https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf"
      locator: "§§7.1–7.2, printed pp. 163–171"
verification:
  precheck: pass
---

## Statement

Let $G$ be a finite group, $p$ a prime and $P\in\operatorname{Syl}_p(G)$ a Sylow
$p$-subgroup ([[def-sylow-p-subgroup]]), and put $K:=O^{p}(G)$, the $p$-residual
([[def-p-residual-of-a-finite-group]]). Suppose that $P$ controls fusion in $P$
with respect to $G$ ([[def-control-of-fusion-in-a-sylow-p-subgroup]]) and set
$Q:=P\cap K$. Then $Q=\{1\}$: that is, $P\cap O^{p}(G)=\{1\}$.

More precisely, if $Q\ne\{1\}$, then the transfer
$V\colon K\to Q/[Q,P]$ of the quotient map $Q\to Q/[Q,P]$
([[def-transfer-homomorphism-for-a-finite-index-subgroup]],
[[lem-transfer-is-a-homomorphism]],
[[def-subgroup-commutator-and-lower-central-series]]) is a nontrivial
homomorphism onto a nontrivial finite abelian $p$-group, so $O^{p}(K)<K$; since
$O^{p}(O^{p}(G))=O^{p}(G)$ by
[[lem-p-residual-is-generated-by-p-prime-elements-and-idempotent]], this is a
contradiction.

## Facts & Assumptions

**Given:** A finite group $G$, a prime $p$, a Sylow $p$-subgroup $P\le G$ controlling fusion in $P$ with respect to $G$, and $K:=O^{p}(G)$, $Q:=P\cap K\ne\{1\}$.

[F1] $K\mathrel{\trianglelefteq}G$, $G/K$ is a finite $p$-group, $KP=G$, and $Q=P\cap K$ is a Sylow $p$-subgroup of $K$; in particular $K$ is finite and $[K:Q]=|K|/|Q|$ is prime to $p$, since $|Q|$ is the exact power of $p$ dividing $|K|$ ([[def-p-residual-of-a-finite-group]], [[lem-sylow-subgroups-of-a-normal-subgroup-are-intersections]], [[def-sylow-p-subgroup]], [[cor-order-of-a-quotient-group]], [[thm-lagrange]]).

[F2] $Q\mathrel{\trianglelefteq}P$: for $u\in P$ one has $uQu^{-1}=u(P\cap K)u^{-1}=uPu^{-1}\cap uKu^{-1}=P\cap K=Q$, because $uPu^{-1}=P$ and $K\mathrel{\trianglelefteq}G$ ([[def-normal-subgroup]], [[def-subgroup]], [[thm-conjugation-is-an-automorphism]]).

[F3] Commutators: $[a,b]=aba^{-1}b^{-1}$, $[A,B]=\langle[a,b]:a\in A,b\in B\rangle$, and $[P,Q]=[Q,P]$ as subgroups because $[p,q]=[q,p]^{-1}$; if $A\le B$ and $D\le C$ with $A,B\le C$ then $[A,D]\le[B,D]$ ([[def-subgroup-commutator-and-lower-central-series]], [[def-commutator-and-commutator-subgroup]], [[def-generated-subgroup]], [[def-subgroup]], [[lem-group-inverse-laws]]).

[F4] Both $P$ and $Q$ are finite $p$-groups, $Q\ne\{1\}$ and $Q\mathrel{\trianglelefteq}P$; so by [[lem-normal-p-subgroup-has-proper-commutator-in-a-p-group]] the commutator $[Q,P]$ satisfies $[Q,P]<Q$ and $[Q,P]\mathrel{\trianglelefteq}Q$ ([[def-finite-p-group]], [[lem-subgroups-of-finite-p-groups-are-p-groups]]).

[F5] $[Q,Q]\le[Q,P]$ because $Q\le P$ by [F3], so the quotient $A:=Q/[Q,P]$ is a finite abelian group by [[thm-quotient-abelian-iff-contains-commutator-subgroup]] and [[def-quotient-group]]; it is nontrivial by [F4] and a $p$-group because $|A|$ divides $|Q|$ ([[cor-order-of-a-quotient-group]], [[thm-lagrange]], [[def-finite-p-group]]).

[F6] The quotient map $\varphi\colon Q\to A$, $\varphi(q)=q[Q,P]$, is a surjective group homomorphism ([[def-quotient-group]], [[def-group-homomorphism]], [[lem-group-homomorphism-basic-properties]]); $\ker\varphi=[Q,P]$, so $\varphi(q)\ne 1$ exactly when $q\notin[Q,P]$.

[F7] For $q\in Q$ and $u\in P$ one has $q^{u}q^{-1}=[u,q]\in[Q,P]$ and therefore $\varphi(q^{u})=\varphi(q)$ ([[def-conjugacy-class-and-centralizer]], [[def-commutator-and-commutator-subgroup]], [F3], [F6]).

[F8] The transfer of the homomorphism $\varphi\colon Q\to A$ is a group homomorphism $V:=V_{\varphi}\colon K\to A$, independent of the transversal ([[def-transfer-homomorphism-for-a-finite-index-subgroup]], [[lem-transfer-is-a-homomorphism]], [[lem-transfer-is-independent-of-the-transversal]]), and it is computed by the cycle decomposition of [[lem-transfer-cycle-decomposition-formula]]: for $x\in K$ the right cosets $Q\backslash K$ split into orbits $C_1,\dots,C_r$ of right multiplication by $\langle x\rangle$ of lengths $n_i$, with representatives $t_i$, and $V(x)=\prod_{i=1}^{r}\varphi\bigl(t_ix^{n_i}t_i^{-1}\bigr)$, where $t_ix^{n_i}t_i^{-1}\in Q$. The orbits partition the finite set $Q\backslash K$, which has $[K:Q]$ elements, so $n_1+\cdots+n_r=[K:Q]$ ([[def-index]], [[def-coset]], [[def-group-action]], [[thm-orbits-partition-the-set]], [[def-orbit-and-stabilizer]]).

[F9] Order and coprimality: if $a\in A$ and $a^{m}=1$, then $\operatorname{ord}(a)$ divides $m$ and $\operatorname{ord}(a)$ divides $|A|$; and $\gcd\bigl(p^{j},[K:Q]\bigr)=1$ for every $j\ge0$ because $p\nmid[K:Q]$, so an element of $A$ whose order divides both $|A|$ and $[K:Q]$ is trivial ([[lem-order-characterisation]], [[cor-order-of-element-divides-group-order]], [[lem-divisibility-basic]], [[def-finite-p-group]], [F1]).

[F10] Every homomorphism from $K$ to a finite $p$-group has $O^{p}(K)$ in its kernel, and $O^{p}(K)=K$ when $K=O^{p}(G)$ ([[def-p-residual-of-a-finite-group]], [[lem-p-residual-is-generated-by-p-prime-elements-and-idempotent]]).

## Proof

**Proof technique:** direct.

1.1 Q is a nontrivial normal subgroup of the finite $p$-group $P$ by [F1], [F2] and [F5]; so, with the commutator subgroup $[Q,P]$ as in [F3], [[lem-normal-p-subgroup-has-proper-commutator-in-a-p-group]] applies and gives $[Q,P]<Q$ together with $[Q,P]\mathrel{\trianglelefteq}Q$. Hence $A:=Q/[Q,P]$ is a nontrivial finite abelian $p$-group, and the quotient map $\varphi\colon Q\to A$ is a surjective homomorphism with $\ker\varphi=[Q,P]$. [F3, F4, F5, F6]

2.1 Let $V\colon K\to A$ be the transfer of $\varphi$; by [F8] it is a group homomorphism, and for $x\in K$ and each orbit $C_i$ of the cycle decomposition the factor $t_ix^{n_i}t_i^{-1}$ lies in $Q$. [F8, step 1.1]

3.1 Fix $x\in Q$. For each $i$, the element $t_ix^{n_i}t_i^{-1}=(x^{n_i})^{t_i}$ with $t_i\in K$ is $K$-conjugate to $x^{n_i}\in Q$; both lie in $Q\subseteq P$, so the fusion-control hypothesis provides $u_i\in P$ with $t_ix^{n_i}t_i^{-1}=(x^{n_i})^{u_i}$. By [F7] and [F6], $\varphi\bigl(t_ix^{n_i}t_i^{-1}\bigr)=\varphi\bigl(x^{n_i}\bigr)=\varphi(x)^{n_i}$. [F7, F8, given, step 2.1]

4.1 Consequently $V(x)=\prod_{i=1}^{r}\varphi(x)^{n_i}=\varphi(x)^{n_1+\cdots+n_{r}}=\varphi(x)^{[K:Q]}$, the middle step because $A$ is abelian and the last by [F8]. [F5, F8, step 3.1]

5.1 Since $[Q,P]<Q$, choose $x\in Q\setminus[Q,P]$; then $\varphi(x)\ne1$ by [F6]. Put $m:=[K:Q]$, which is prime to $p$ by [F1]. If $\varphi(x)^{m}=1$, then $\operatorname{ord}(\varphi(x))$ divides both $m$ and $|A|$, which is a power of $p$, so by [F9] $\operatorname{ord}(\varphi(x))=1$, that is $\varphi(x)=1$, a contradiction. Hence $V(x)=\varphi(x)^{m}\ne1$, and $V$ is not the trivial homomorphism. Moreover $a\mapsto a^m$ is an endomorphism of the finite abelian group $A$ with trivial kernel by the same order argument, so it is bijective. Since $\varphi:Q\to A$ is onto, step 4.1 gives $V(Q)=A$ and therefore $V:K\to A$ is onto. [F1, F6, F9, step 4.1]

6.1 On the other hand $V$ maps $K$ to the finite $p$-group $A$, so $O^{p}(K)\le\ker V$ by [F10]; since $K=O^{p}(G)$, [F10] also gives $O^{p}(K)=K$, hence $K\le\ker V$ and $V$ is trivial, contradicting step 5.1. Therefore the assumption $Q\ne\{1\}$ is false: $Q=P\cap K=P\cap O^{p}(G)=\{1\}$. ∎ [F10, step 5.1]
