---
id: thm-qa-finite-abelian-coset-fourier-transform
kind: theorem
title: Fourier transform of a subgroup coset indicator
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-normalized-finite-abelian-fourier-transform, def-qa-finite-abelian-subgroup-annihilator, thm-qa-finite-abelian-subgroup-annihilator-cardinality, lem-additive-character-orthogonality-from-representation-orthogonality, lem-qa-finite-character-values-have-unit-modulus, lem-finite-sum-reindexing-and-fubini, lem-complex-conjugation-and-modulus-laws, def-rational-power, lem-rational-power-well-defined, lem-rational-power-laws]
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---


## Statement

Let $G$ be finite abelian, $H\le G$, $x_0\in G$, and $N:=|G|$. For the indicator $1_{x_0+H}$,
$$F_G1_{x_0+H}(\chi)=\begin{cases}|H|N^{-1/2}\overline{\chi(x_0)},&\chi\in H^\perp,\\0,&\chi\notin H^\perp.\end{cases}$$
Consequently, the normalized uniform-coset function $|H|^{-1/2}1_{x_0+H}$ transforms to the function supported on $H^\perp$ with value $|H|^{1/2}N^{-1/2}\overline{\chi(x_0)}=|H^\perp|^{-1/2}\overline{\chi(x_0)}$ there. The unnormalized indicator amplitude and normalized-state amplitude are distinct.

## Facts & Assumptions

**Given:** A finite abelian group $G$, a subgroup $H\le G$, and a coset $x_0+H$.

[F1] The transform is $F_Gf(\chi)=N^{-1/2}\sum_x f(x)\overline{\chi(x)}$ ([[def-qa-normalized-finite-abelian-fourier-transform]]).

[F2] $H^\perp$ consists exactly of the characters trivial on every element of $H$ ([[def-qa-finite-abelian-subgroup-annihilator]]).

[F3] $|H^\perp|\,|H|=|G|$ ([[thm-qa-finite-abelian-subgroup-annihilator-cardinality]]).

[F4] The normalized row orthogonality relation implies that a nontrivial character $\theta$ of a finite abelian group has $\sum_{h\in H}\theta(h)=0$ ([[lem-additive-character-orthogonality-from-representation-orthogonality]]).

[F5] Every value of a character of a finite group has modulus one ([[lem-qa-finite-character-values-have-unit-modulus]]).

[F6] Translation $h\mapsto x_0+h$ is a bijection from $H$ to $x_0+H$, and finite sums are invariant under bijective reindexing ([[lem-finite-sum-reindexing-and-fubini]]).

[F7] Complex conjugation preserves products ([[lem-complex-conjugation-and-modulus-laws]]).

[F8] For positive real scalars, rational powers obey $(ab)^r=a^rb^r$, $a^r a^s=a^{r+s}$, and $a^{-r}=1/a^r$ ([[lem-rational-power-laws]]).

[F9] Positive rational powers, including inverse square roots of positive integers, are defined and well-defined ([[def-rational-power]], [[lem-rational-power-well-defined]]).

## Proof

1.1 In the sum defining $F_G1_{x_0+H}$, only points of $x_0+H$ contribute; the bijective reindexing [F6] gives $F_G1_{x_0+H}(\chi)=N^{-1/2}\sum_{h\in H}\overline{\chi(x_0+h)}$. [F1, F6]

2.1 The character homomorphism law and conjugation law [F7] factor each summand as $\overline{\chi(x_0)}\,\overline{\chi(h)}$. If $\chi\in H^\perp$, [F2] makes every $\chi(h)=1$, so the sum is $|H|\overline{\chi(x_0)}$. If $\chi\notin H^\perp$, some $h_0\in H$ has $\chi(h_0)\ne1$; hence $\overline\chi|_H$ is a nontrivial character of $H$. Applying [F4] to the finite group $H$ makes its sum zero. Substitution in step 1.1 proves the indicator formula. [F2, F4, F7, step 1.1]

3.1 Multiplying the indicator formula by $|H|^{-1/2}$ gives amplitude $|H|^{1/2}N^{-1/2}\overline{\chi(x_0)}$ on $H^\perp$. From [F3] and positivity, $N=|H||H^\perp|$; [F8] and well-definedness [F9] of positive rational powers therefore give the scalar as $|H^\perp|^{-1/2}$. Since $|\chi(x_0)|=1$ by [F5], its squared norm is $|H^\perp|\cdot |H^\perp|^{-1}=1$. The translation in [F6] also shows the original normalized coset indicator has squared norm $|H|^{-1}|x_0+H|=1$. [F3, F5, F6, F8, F9, step 2.1, algebra]

4.1 If $H=G$, then $H^\perp$ consists only of the trivial character and the normalized amplitude is $1$. If $H=\{0\}$, then $H^\perp=\widehat G$ and the normalized delta function has amplitude $N^{-1/2}\overline{\chi(x_0)}$ at every character, again with squared norm $1$. These boundary cases agree with the formula. [F2, F3, F5, step 3.1] ∎
