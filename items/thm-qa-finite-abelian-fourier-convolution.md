---
id: thm-qa-finite-abelian-fourier-convolution
kind: theorem
title: Fourier transform of unnormalized convolution
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-finite-abelian-convolution, def-qa-normalized-finite-abelian-fourier-transform, def-additive-character-of-a-finite-abelian-group, lem-finite-sum-reindexing-and-fubini, lem-complex-conjugation-and-modulus-laws, lem-rational-power-laws]
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
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

For a finite abelian group $G$, $f,g:G\to\mathbb C$, and $\chi\in\widehat G$, put $N_{\mathbb R}:=\iota_{\mathbb R}(|G|)$. With the transform and unnormalized convolution defined above,
$$F_G(f*g)(\chi)=N_{\mathbb R}^{1/2}(F_Gf)(\chi)(F_Gg)(\chi).$$
Thus the factor is $\sqrt{|G|}$, not $1$ or $|G|$, for this pair of conventions.

## Facts & Assumptions

**Given:** The finite sum definitions of $F_G$ and $f*g$ on the same finite abelian group.

[F1] $(f*g)(z)=\sum_{x\in G}f(x)g(z-x)$ ([[def-qa-finite-abelian-convolution]]).

[F2] $(F_Gf)(\chi)=N_{\mathbb R}^{-1/2}\sum_{x\in G}f(x)\overline{\chi(x)}$ ([[def-qa-normalized-finite-abelian-fourier-transform]]).

[F3] A character satisfies $\chi(x+y)=\chi(x)\chi(y)$ ([[def-additive-character-of-a-finite-abelian-group]]).

[F4] Complex conjugation preserves products, $\overline{zw}=\overline z\,\overline w$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F5] Finite sums may be reindexed by bijections and factored by the finite Fubini rule ([[lem-finite-sum-reindexing-and-fubini]]).

[F6] Positive rational powers satisfy $a^ra^s=a^{r+s}$ and $a^0=1$ ([[lem-rational-power-laws]]).

## Proof

1.1 Substitute [F1] into [F2] and distribute the finite sums; [F5] permits the iterated sum, giving $F_G(f*g)(\chi)=N_{\mathbb R}^{-1/2}\sum_{z\in G}\sum_{x\in G}f(x)g(z-x)\overline{\chi(z)}$. [F1, F2, F5]

2.1 The map $(z,x)\mapsto(x,y)$ with $y=z-x$ is a bijection $G\times G\to G\times G$, with inverse $(x,y)\mapsto(x+y,x)$. Reindexing by this bijection and using [F3] and [F4] gives $F_G(f*g)(\chi)=N_{\mathbb R}^{-1/2}\sum_{x,y}f(x)g(y)\overline{\chi(x)}\,\overline{\chi(y)}=N_{\mathbb R}^{-1/2}(\sum_x f(x)\overline{\chi(x)})(\sum_y g(y)\overline{\chi(y)})$. [F3, F4, F5, step 1.1, construct]

3.1 By [F2], each parenthesized sum in step 2.1 equals $N_{\mathbb R}^{1/2}$ times the corresponding transform value. The coefficient is therefore $N_{\mathbb R}^{-1/2}N_{\mathbb R}^{1/2}N_{\mathbb R}^{1/2}=N_{\mathbb R}^{1/2}$ by [F6], which proves the formula. [F2, F6, step 2.1, algebra] ∎
