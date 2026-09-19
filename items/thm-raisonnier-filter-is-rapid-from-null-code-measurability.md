---
id: thm-raisonnier-filter-is-rapid-from-null-code-measurability
kind: theorem
title: Uniform null-code measurability makes the Raisonnier filter rapid
status: draft
origin: pipeline
deps: [lem-raisonnier-family-is-a-sigma-one-three-filter, lem-measurable-null-code-orders-bound-constructible-null-unions, lem-uniform-null-g-delta-capture-functions, def-countable-choice, def-rapid-and-raisonnier-filters, lem-dyadic-coding-coin-measure-and-lebesgue-transfer, def-boldface-sigma-one-three-measurability]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Theorem 3.12, pp. 49-50"}
    - {title: "Spyridon Dialiatsis and Yurii Khomskii, Combinatorial Properties of the Raisonnier Filter", url: "https://arxiv.org/abs/2602.23340", locator: "Theorems 2.5 and 2.8"}
---

## Statement

Assume Countable Choice and $\omega_1^{L[x]}=\omega_1$. Suppose moreover that
for every real $r$, the null-code order $A(x\oplus r)$ is measurable, where
$x\oplus r$ is the usual interleaving join. Then the Raisonnier filter $F(x)$
is rapid. In particular, boldface $\Sigma^1_2$ measurability supplies this
uniform hypothesis.

## Facts & Assumptions

**Given:** Countable Choice, a real $x$ with $\omega_1^{L[x]}=\omega_1$, and measurability of $A(x\oplus r)$ for every real $r$.

[F1] [[lem-measurable-null-code-orders-bound-constructible-null-unions]]: for every real $y$, measurability of $A(y)$ makes the union of all null Borel sets coded in $L[y]$ null in the ambient universe.

[F2] [[lem-uniform-null-g-delta-capture-functions]]: the uniformly assigned null $G_\delta$ sets $N_f$ for $f\in\omega^\omega$ and the finite capture sets $\varphi_U(n)$ of size at most $2^{n+1}$ with $N_f\subseteq U$ implying $f(n)\in\varphi_U(n)$ eventually; codes of $N_f$ lie in any transitive model containing $f$.

[F3] [[def-rapid-and-raisonnier-filters]]: the definition of $F(z)$ by covers of $L[z]\cap2^\omega$, for any real $z$, and the uniform-bounding form of rapidity.

[F4] [[lem-raisonnier-family-is-a-sigma-one-three-filter]]: $F(x)$ is a filter; in particular it is upward closed.

[F5] [[def-countable-choice]] with [[lem-dyadic-coding-coin-measure-and-lebesgue-transfer]]: countable choice and the coin measure, used to pass from the null union to an open cover of measure below one.

## Proof

1.1 Fix an arbitrary strictly increasing sequence $\langle n_i:i<\omega\rangle$ of natural numbers and let $r$ code this sequence. Put $y=x\oplus r$ and $M=L[y]$. Since $L[x]\subseteq M\subseteq V$, the inequalities $\omega_1^{L[x]}\leq\omega_1^M\leq\omega_1$ and the Given equality show that $\omega_1^M=\omega_1$. For $f\in M\cap2^\omega$ put $\bar f(i)=f\upharpoonright n_i$, using the canonical natural-number code for the finite word. Both $f$ and the sequence $\langle n_i\rangle$ belong to $M$, so $\bar f\in M$ and [F2] puts the code of $N_{\bar f}$ in $M$. [given, F2]

1.2 By the uniform measurability hypothesis, $A(y)$ is measurable. Hence [F1]
makes the union of all null Borel sets coded in $M=L[y]$ null, and that union contains every $N_{\bar f}$ from step 1.1. Choose, using [F5], an open $U$ containing the union with $\nu(U)<1$. For every $f\in M\cap2^\omega$ there is $i_f$ such that $$f\upharpoonright n_i=\bar f(i)\in\varphi_U(i)$$ for all $i\geq i_f$, by [F2]'s capture clause. [given, step 1.1, F1, F2, F5]

2.1 Let $\Psi_i$ be the elements of $\varphi_U(i)$ that decode binary strings of length $n_i$. Define $a\subseteq\omega$ by declaring $n\in a$ iff, for $i=\min\{j:n<n_j\}$, there are distinct $s,t\in\Psi_i$ whose first differing coordinate $h(s,t)$ is $n$. The strict inequality assigns every coordinate in the block $[n_{i-1},n_i)$, with $n_{-1}:=0$, to the level whose strings realize it. [F2, F3, step 1.2]

3.1 The values assigned to level $i$ lie in $[n_{i-1},n_i)$ and are the first-difference coordinates realized by pairs from $\Psi_i$. If a finite set of equal-length binary strings has $k\geq1$ members, its prefix tree has at most $k-1$ branching levels; if $k=0$, it realizes no first differences. Thus level $i$ contributes at most $\max\{|\Psi_i|-1,0\}\leq2^{i+1}-1$ values. Therefore $$|a\cap n_i|\leq\sum_{j\leq i}(2^{j+1}-1)\leq2^{i+2}-2.$$ [F2, step 2.1]

3.2 For $k<\omega$ and $s\in2^{n_k}$ put $$ F_{k,s}=\{f\in M\cap2^\omega:f\upharpoonright n_k=s\text{ and } f\upharpoonright n_i\in\Psi_i\text{ for every }i\geq k\}. $$ These countably many sets cover $M\cap2^\omega$ by step 1.2. If distinct $f,g\in F_{k,s}$ and $i$ is least with $f\upharpoonright n_i\ne g\upharpoonright n_i$, then $i>k$, both length-$n_i$ prefixes lie in $\Psi_i$, and their first difference equals $h(f,g)$ and lies in $[n_{i-1},n_i)$. Thus $h(f,g)\in a$ by step 2.1, so $H(F_{k,s})\subseteq a$. The cover therefore witnesses $a\in F(y)$. Since $L[x]\cap2^\omega\subseteq L[y]\cap2^\omega$, the same cover also witnesses $a\in F(x)$. [F3, F4, step 1.2, step 2.1]

4.1 Given the arbitrary strictly increasing sequence $\langle n_i\rangle$, step 3.2 produced $a\in F(x)$ with $|a\cap n_i|\leq2^{i+2}-2<2^{i+2}$ for every $i$. The same conclusion for a merely nondecreasing sequence follows by replacing it with a pointwise larger strictly increasing one. Since $i\mapsto2^{i+2}$ is one fixed bound, the uniform-bounding form of [F3] makes $F(x)$ rapid. [F3, step 3.1, step 3.2]

5.1 The steps above establish the rapidity of $F(x)$ under the stated hypotheses; this is the Statement. [step 4.1] ∎
