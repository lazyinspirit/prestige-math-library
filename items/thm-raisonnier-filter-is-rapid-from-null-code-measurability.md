---
id: thm-raisonnier-filter-is-rapid-from-null-code-measurability
kind: theorem
title: Null-code measurability makes the Raisonnier filter rapid
status: draft
origin: pipeline
deps: [lem-raisonnier-family-is-a-sigma-one-three-filter, lem-measurable-null-code-orders-bound-constructible-null-unions, lem-uniform-null-g-delta-capture-functions, def-countable-choice, def-rapid-and-raisonnier-filters, lem-dyadic-coding-coin-measure-and-lebesgue-transfer]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Theorem 3.12, pp. 49-50"}
---

## Statement

Assume Countable Choice, $\omega_1^{L[x]}=\omega_1$, and measurability of the
$\Sigma^1_2(x)$ null-code order $A(x)$. Then the Raisonnier filter $F(x)$ is
rapid.

## Facts & Assumptions

**Given:** Countable Choice, a real $x$ with $\omega_1^{L[x]}=\omega_1$, and measurability of $A(x)$. Let $M=L[x]$.

[F1] [[lem-measurable-null-code-orders-bound-constructible-null-unions]]: the union $G$ of all null Borel sets coded in $M$ is null in the ambient universe.

[F2] [[lem-uniform-null-g-delta-capture-functions]]: the uniformly assigned null $G_\delta$ sets $N_f$ for $f\in\omega^\omega$ and the finite capture sets $\varphi_U(n)$ of size at most $2^{n+1}$ with $N_f\subseteq U$ implying $f(n)\in\varphi_U(n)$ eventually; codes of $N_f$ lie in any transitive model containing $f$, in particular in $M$.

[F3] [[def-rapid-and-raisonnier-filters]]: the definition of $F(x)$ by covers of $M\cap2^\omega$ and the uniform-bounding form of rapidity.

[F4] [[lem-raisonnier-family-is-a-sigma-one-three-filter]]: $F(x)$ is a filter; in particular it is upward closed.

[F5] [[def-countable-choice]] with [[lem-dyadic-coding-coin-measure-and-lebesgue-transfer]]: countable choice and the coin measure, used to pass from the null union to an open cover of measure below one.

## Proof

1.1 Fix an arbitrary increasing sequence $\langle n_i:i<\omega\rangle$ of natural numbers. For $f\in M\cap2^\omega$ put $\bar f(i)=f\upharpoonright n_i$, a finite binary string, regarded as a natural number through the canonical bijection $2^{<\omega}\cong\omega$. The code of $\bar f$ lies in $M$, so by [F2] the null $G_\delta$ set $N_{\bar f}$ is coded in $M$. [F2]

1.2 The union $\bigcup\{N_{\bar f}:f\in M\cap2^\omega\}$ consists of sets coded in $M$ and is null by [F1]. Choose, using [F5], an open $U$ containing it with $\nu(U)<1$. Then for every $f\in M\cap2^\omega$ there is $i_f$ with $\bar f(i)=f\upharpoonright n_i\in\varphi_U(i)$ for all $i\ge i_f$, by the capture clause of [F2] applied to the function $i\mapsto\bar f(i)$. [F1, F2]

2.1 Define $a\subseteq\omega$ by: $n\in a$ if and only if, for $i=\min\{j:n\le n_j\}$, there are $s,t\in\varphi_U(i)$ with $h(s,t)=n$. Here $h(s,t)$ for distinct strings of equal length is their first difference, in the sense of [F3]. [F3, step 1.2]

3.1 Size bound: the set $a\cap(n_{i-1},n_i]$ consists of first-difference values of pairs from the finite set $\varphi_U(i)$ of strings of equal length $n_i$; a finite binary tree with $k$ leaves has at most $k-1$ branching nodes, and every realized first difference lies in the cylinder of a branching node, so the set of realized values has at most $|\varphi_U(i)|-1$ elements. Hence $|a\cap(n_{i-1},n_i]|\le|\varphi_U(i)|\le2^{i+1}$ and $|a\cap n_i|\le\sum_{j\le i}2^{j+1}=2^{i+2}-2$. [F2, step 2.1]

3.2 Membership in the filter: for $s\in2^{<\omega}$ put $F_s=\{f\in M\cap2^\omega:s\subsetneq f$ and $f\upharpoonright n_i\in\varphi_U(i)$ for all $i\ge\operatorname{lh}(s)\}$. The sets $F_s$ cover $M\cap2^\omega$ by step 1.2. Given distinct $f,g\in F_s$, let $i=\min\{j:f\upharpoonright n_j\ne g\upharpoonright n_j\}$; then $i\ge\operatorname{lh}(s)$ and the strings $t=f\upharpoonright n_i$, $u=g\upharpoonright n_i$ both lie in $\varphi_U(i)$, while $h(f,g)=h(t,u)\le n_i$; since also $h(f,g)>n_{i-1}$ (the two functions agree below $n_{i-1}$), the least index $j$ with $h(f,g)\le n_j$ is exactly $i$, so $h(f,g)\in a$ by step 2.1. Thus $H(F_s)\subseteq a$ for every $s$, and the countably many sets $F_s$ cover $M\cap2^\omega$; hence $a\in F(x)$ by the definition of the Raisonnier family, which is upward closed in the sense of [F4]. [F3, F4, step 2.1]

4.1 Rapidness: given the arbitrary increasing sequence $\langle n_i\rangle$, step 3.2 produced $a\in F(x)$ with $|a\cap n_i|\le2^{i+2}-2<2^{i+2}$ for every $i$. Since $i\mapsto2^{i+2}$ is a fixed strictly increasing bounding function that works uniformly for every increasing sequence, the uniform-bounding form of [F3] yields that $F(x)$ is rapid. [F3, step 3.1, step 3.2]

5.1 The steps above establish the rapidity of $F(x)$ under the stated hypotheses; this is the Statement. [step 4.1] ∎
