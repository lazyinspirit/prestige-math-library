---
id: thm-burnside-normal-p-complement-theorem
kind: theorem
title: "Burnside normal p complement theorem"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-transfer-homomorphism-for-a-finite-index-subgroup, lem-transfer-is-a-homomorphism, lem-transfer-cycle-decomposition-formula, lem-transfer-is-independent-of-the-transversal, lem-abelian-sylow-fusion-in-its-normalizer, prop-equivalent-forms-of-having-a-normal-p-complement, def-normal-p-complement-and-p-nilpotent-group, def-sylow-p-subgroup, thm-sylow-first-theorem, thm-lagrange, def-center-of-a-group, def-normalizer-of-a-subgroup, def-internal-semidirect-product, lem-order-characterisation, cor-order-of-element-divides-group-order, cor-extended-euclidean-bezout-coefficients, lem-group-power-laws, def-order-in-a-group, def-group-power, lem-group-homomorphism-basic-properties, def-generated-subgroup, def-group-action, thm-orbits-partition-the-set, thm-conjugation-is-an-automorphism]
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
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be a finite group, $p$ a prime and $P\in\operatorname{Syl}_p(G)$. If
$P\le Z(N_G(P))$, that is, if every element of $P$ commutes with every element
of the normalizer $N_G(P)$ ([[def-center-of-a-group]],
[[def-normalizer-of-a-subgroup]]), then $G$ has a normal $p$-complement.

## Facts & Assumptions

**Given:** A finite group $G$, a prime $p$, a Sylow $p$-subgroup $P\le G$ with $P\le Z(N_G(P))$.

[F1] Write $|G|=p^{a}m$ with $p\nmid m$; then $|P|=p^{a}$ and the index $n:=[G:P]=m$ is prime to $p$ ([[def-sylow-p-subgroup]], [[thm-sylow-first-theorem]], [[thm-lagrange]]).

[F2] As $P\le Z(N_G(P))$ and $P\le N_G(P)$, every two elements of $P$ commute: $P$ is abelian ([[def-center-of-a-group]], [[def-normalizer-of-a-subgroup]]).

[F3] The transfer $V=V_{\varphi}$ of the homomorphism $\varphi=\operatorname{id}_P:P\to P$ is a homomorphism $G\to P$, explicitly $V(x)=\prod_{\alpha\in P\backslash G}\varphi(t_{\alpha}xt_{\alpha x}^{-1})$ for any transversal, and it agrees with the cycle formula $V(x)=\prod_{i}\varphi(t_ix^{n_i}t_i^{-1})$ where $n_i$ are the orbit sizes of $\langle x\rangle$ acting on $P\backslash G$ ([[def-transfer-homomorphism-for-a-finite-index-subgroup]], [[lem-transfer-is-a-homomorphism]], [[lem-transfer-cycle-decomposition-formula]], [[lem-transfer-is-independent-of-the-transversal]]).

[F4] The orbits of the action of $\langle x\rangle$ on the finite set $P\backslash G$ partition it, so their sizes $n_1,\dots,n_r$ satisfy $n_1+\cdots+n_r=[G:P]=n$ ([[thm-orbits-partition-the-set]], [[def-group-action]]).

[F5] If $P$ is abelian and $u,v\in P$ are conjugate in $G$, then they are conjugate in $N_G(P)$ ([[lem-abelian-sylow-fusion-in-its-normalizer]]).

[F6] If a finite group $H$ and a natural number $k$ with $\gcd(k,|H|)=1$ are given, the power map $y\mapsto y^{k}$ is a bijection $H\to H$: by Bézout there are $k',t$ with $kk'=1+t|H|$, and $y^{|H|}=e$, so $(y^{k'})^{k}=y^{1+t|H|}=y$ ([[cor-extended-euclidean-bezout-coefficients]], [[cor-order-of-element-divides-group-order]], [[lem-order-characterisation]], [[lem-group-power-laws]], [[def-group-power]]).

[F7] If a finite group has a Sylow $p$-subgroup $Q$ and an epimorphism $\theta:G\to Q$, then it has a normal $p$-complement ([[prop-equivalent-forms-of-having-a-normal-p-complement]]).

[F8] Conjugation is a homomorphism: $(z^{u})^{v}=z^{vu}$, where $z^{u}:=uzu^{-1}$ ([[thm-conjugation-is-an-automorphism]], [[lem-group-homomorphism-basic-properties]], [[def-group-action]]).



## Proof

**Proof technique:** direct.

1.1 By [F2] the group $P$ is abelian, so the identity map $\varphi:P\to P$ is a homomorphism into an abelian group and the transfer $V:G\to P$ of [F3] is defined; fix a transversal and let $n_i$ be the orbit sizes of $\langle x\rangle$ on $P\backslash G$. [F2, F3]

1.2 For $x\in P$, the cycle formula of [F3] gives $V(x)=\prod_{i}\varphi(t_ix^{n_i}t_i^{-1})=\prod_{i}t_ix^{n_i}t_i^{-1}$, each factor lying in $P$; also $x^{n_i}\in P$ and $\sum_i n_i=n$ by [F4]. [F3, F4]

2.1 For each $i$ the element $t_ix^{n_i}t_i^{-1}$ equals $(x^{n_i})^{t_i}$, so it is a $G$-conjugate of $x^{n_i}$, and both lie in $P$; by [F5] there is $u_i\in N_G(P)$ with $t_ix^{n_i}t_i^{-1}=(x^{n_i})^{u_i}$. [F5, F8, step 1.2]

3.1 Since $x^{n_i}\in P\le Z(N_G(P))$ commutes with $u_i\in N_G(P)$, step 2.1 gives $t_ix^{n_i}t_i^{-1}=x^{n_i}$. Hence $V(x)=\prod_{i}x^{n_i}=x^{n_1+\cdots+n_r}=x^{n}$ by [F4], all factors being powers of $x$ ([[lem-group-power-laws]]). [F4, step 1.2, step 2.1, algebra]

4.1 The power map $y\mapsto y^{n}$ is a bijection $P\to P$ by [F6], since $\gcd(n,|P|)=1$ by [F1]; therefore $V(P)=\{x^{n}:x\in P\}=P$ by step 3.1, and $V$ is an epimorphism $G\to P$. [F1, F6, step 3.1]

5.1 Applying [F7] with $Q:=P$ and $\theta:=V$ yields that $G$ has a normal $p$-complement. ∎ [F7, step 4.1]
