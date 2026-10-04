---
id: lem-characteristic-of-a-young-permutation-character-is-complete
kind: lemma
title: "The characteristic of a Young permutation character is complete homogeneous"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-frobenius-characteristic-map
  - lem-young-permutation-module-is-induced-from-the-trivial-character
  - thm-character-of-a-permutation-representation-counts-fixed-points
  - def-young-subgroup-tabloid-and-permutation-module
  - lem-complete-homogeneous-expansion-in-power-sums
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "§7.3 and its proof, printed p. 114 (ch of an induced trivial character equals h_λ)"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, §6"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§6, printed pp. 22–26 (fixed tabloids and cycle type)"
---

## Statement

For every $n\ge0$ and $\lambda\vdash n$, let $\varphi^\lambda$ be the character
of the Young permutation module $M^\lambda$, the permutation module on
$\lambda$-tabloids, so that $M^\lambda\cong\operatorname{Ind}_{S_\lambda}^{S_n}\mathbf 1$
([[lem-young-permutation-module-is-induced-from-the-trivial-character]],
[[def-young-subgroup-tabloid-and-permutation-module]]). Then

$$\operatorname{ch}(\varphi^\lambda)=h_\lambda\in\Lambda^n,$$

the product of the complete homogeneous symmetric functions of the parts of
$\lambda$.

## Facts & Assumptions

**Given:** An integer $n\ge0$, a partition $\lambda=(\lambda_1,\dots,\lambda_k)\vdash n$ with standard Young subgroup $S_\lambda\le S_n$, and a permutation $w\in S_n$ of cycle type $\rho\vdash n$.

[F1] $M^\lambda$ is the permutation representation of $S_n$ on the finite set $\Omega_\lambda$ of $\lambda$-tabloids, and $M^\lambda\cong\operatorname{Ind}_{S_\lambda}^{S_n}\mathbf 1$ as complex representations, so $\varphi^\lambda$ is the character of $\operatorname{Ind}_{S_\lambda}^{S_n}\mathbf 1$ ([[lem-young-permutation-module-is-induced-from-the-trivial-character]]).

[F2] The character of a permutation representation on a finite $G$-set $X$ is $\chi_{\mathbb C^{(X)}}(g)=\#\{x\in X:g\cdot x=x\}$ ([[thm-character-of-a-permutation-representation-counts-fixed-points]]).

[F3] A $\lambda$-tabloid is the row equivalence class $\{t\}$ of a $\lambda$-tableau $t$; it records the unordered row sets, and $\sigma\cdot\{t\}:=\{\sigma\cdot t\}$ defines the left action of $S_n$ on $\Omega_\lambda$ ([[def-young-subgroup-tabloid-and-permutation-module]]).

[F4] For partitions $\lambda,\rho$ of the same integer $n$, the number $N(\lambda,\rho)$ counts the distributions of the cycles of a permutation of cycle type $\rho$ among the labelled rows with total row lengths $\lambda_j$, cycles of equal length being distinct; and $h_\lambda=\sum_{\rho\vdash n}N(\lambda,\rho)p_\rho/z_\rho$ in $\Lambda_{\mathbb Q}$, with $z_\rho=\prod_ii^{m_i(\rho)}m_i(\rho)!$ ([[lem-complete-homogeneous-expansion-in-power-sums]]).

[F5] $h_\lambda=\prod_{j=1}^kh_{\lambda_j}$, with $h_\varnothing=1$; the family $\{h_\mu:\mu\vdash n\}$ is a $\mathbb Z$-basis of $\Lambda^n$ ([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F6] For $f\in\mathrm{cf}(S_n)$, $\operatorname{ch}(f)=\sum_{\rho\vdash n}f(\rho)\,p_\rho/z_\rho$, where $f(\rho)$ is the common value of $f$ on elements of cycle type $\rho$ ([[def-frobenius-characteristic-map]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2], $\varphi^\lambda(w)$ is the number of $\lambda$-tabloids fixed by $w$: $\varphi^\lambda(w)=\#\{\{t\}\in\Omega_\lambda:w\cdot\{t\}=\{t\}\}$. [F1, F2, given]

2.1 A $\lambda$-tabloid $\{t\}$ with rows $B_1,\dots,B_k$, where $B_j$ is the set of entries of the $j$-th row of $t$, is a partition of $\{1,\dots,n\}$ into labelled blocks with $|B_j|=\lambda_j$; the tabloid is fixed by $w$ exactly when $w(B_j)=B_j$ for every $j$, because equality of tabloids means equality of the row sets at each row index, even when rows have equal sizes. A subset of $\{1,\dots,n\}$ is $w$-invariant if and only if it is a union of cycles of $w$. [F3, step 1.1, algebra]

3.1 It follows from step 2.1 that $\varphi^\lambda(w)$ is the number of ways to distribute the cycles of $w$ among the $k$ labelled rows with the $j$-th row receiving cycles of total length $\lambda_j$; since the cycles of $w$ are distinct subsets of $\{1,\dots,n\}$, cycles of equal length are distinct, and this number is exactly $N(\lambda,\rho)$ for $w$ of cycle type $\rho$. Hence $\varphi^\lambda(\rho)=N(\lambda,\rho)$ for every $\rho\vdash n$. [F4, step 2.1]

4.1 Substituting $f=\varphi^\lambda$ into the definition of the characteristic and using step 3.1 and [F4], $\operatorname{ch}(\varphi^\lambda)=\sum_{\rho\vdash n}\varphi^\lambda(\rho)p_\rho/z_\rho=\sum_{\rho\vdash n}N(\lambda,\rho)p_\rho/z_\rho=h_\lambda$. [F4, F5, F6, step 3.1, algebra]

5.1 For $n=0$ one has $\lambda=\varnothing$, $M^\varnothing=\mathbb C$ is the trivial representation of the trivial group, $N(\varnothing,\varnothing)=1$, $z_\varnothing=1$ and $h_\varnothing=1$, so $\operatorname{ch}(\varphi^\varnothing)=p_\varnothing/z_\varnothing=1=h_\varnothing$; the identity of step 4.1 therefore holds for every $n\ge0$ and every $\lambda\vdash n$. [F4, F5, F6, step 4.1] ∎
