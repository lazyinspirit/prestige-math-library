---
id: thm-the-type-a-soergel-hom-formula
kind: theorem
title: "The type-A Soergel Hom formula"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-type-a-top-support-layers-are-controlled-by-reflection-localization, lem-type-a-soergel-generators-are-finite-free-on-both-sides, lem-type-a-soergel-special-hom-formula, lem-type-a-soergel-frobenius-biadjunction, def-type-a-hecke-algebra-in-soergel-normalization, def-type-a-standard-graph-bimodules-support-filtrations-and-character, lem-type-a-support-filtration-multiplicities-are-intrinsic, def-the-type-a-soergel-category, lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Soergel, Kazhdan–Lusztig-Polynome und unzerlegbare Bimoduln, Theorem 5.15, Lemma 6.13, Satz 6.14, PDF pp.17–22"
      url: "https://arxiv.org/pdf/math/0403496"
    - title: "Elias–Williamson, Soergel Calculus, §3.5"
      url: "https://arxiv.org/pdf/1309.0865"
verification:
  precheck: pass
  repair: research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/soergel/receipts/thm-the-type-a-soergel-hom-formula.json
---

## Statement

Let $M,N$ be objects of the type-A Soergel category $\mathrm{SBim}_n$, that is,
graded direct summands of finite direct sums of shifts of Bott–Samelson
bimodules $B_{i_1}\otimes_R\cdots\otimes_RB_{i_r}$ (the idempotent completion
of the Bott–Samelson category of [[def-the-type-a-soergel-category]]). Then
$\operatorname{Hom}_{R\text{-}R}(M,N)$ is a graded free $R$-module of graded
rank
$$\operatorname{rk}\operatorname{Hom}_{R\text{-}R}(M,N)=\sum_{x,d,e} (M:\Delta_x(d))\,(N:\nabla_x(e))\,v^{d-e},$$
which under the Hecke normalization $T_x\mapsto$ the standard basis of
[[def-type-a-hecke-algebra-in-soergel-normalization]] is the standard pairing
$\langle h_\Delta(M),h_\nabla(N)\rangle$ of the two characters with
$\langle\widetilde T_x,\widetilde T_y\rangle=\delta_{xy}$. In particular
$\operatorname{Hom}(M,M)$ is free of the same rank, and
$\operatorname{End}_{R\text{-}R}(R)=R$ is generated in degree $0$.

## Facts & Assumptions

**Given:** Objects $M,N$ of $\mathrm{SBim}_n$, graded direct summands of Bott–Samelson bimodules, and the characters $h_\Delta,h_\nabla$ of [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]].

[F1] Special Hom formula: for $M'\in F_\Delta$ and $B$ a Bott–Samelson bimodule, $\operatorname{Hom}_{R\text{-}R}(M',B)$ is graded free of rank $\sum(M':\Delta_x(d))(B:\nabla_x(e))v^{d-e}$, and dually for a Bott–Samelson source and a $\nabla$-flagged target ([[lem-type-a-soergel-special-hom-formula]]).

[F2] For every Soergel summand $N$, evaluation at the graph generator and the two image equalities identify the Hom from a standard graph with its single-graph support module, and give the corresponding multiplicity rank. The four support layers are free on either side, the image equalities commute with summand idempotents, and canonical flag layers of a summand are summands of the word's layers ([[lem-type-a-top-support-layers-are-controlled-by-reflection-localization]]).

[F3] $\mathrm{SBim}_n$ is the idempotent completion of the category of Bott–Samelson bimodules; every object is a direct summand of a finite direct sum of shifts of Bott–Samelson bimodules and hence lies in $\operatorname{add}\mathcal B$, with finite support, in $F_\Delta\cap F_\nabla$, and with intrinsic multiplicities, and finite freeness on both sides is inherited by summands ([[def-the-type-a-soergel-category]], [[lem-type-a-support-filtration-multiplicities-are-intrinsic]], [[lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]], [[lem-type-a-top-support-layers-are-controlled-by-reflection-localization]]).

[F4] The character sums are $h_\Delta(M)=\sum_{x,d}(M:\Delta_x(d))v^d\widetilde T_x$ and $h_\nabla(N)=\sum_{x,e}(N:\nabla_x(e))v^{-e}\widetilde T_x$ with $\widetilde T_x=v^{\ell(x)}T_x$, and $\langle\widetilde T_x,\widetilde T_y\rangle=\delta_{xy}$ defines the standard pairing of the Hecke algebra, bilinear over $\mathbb Z[v,v^{-1}]$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], [[def-type-a-hecke-algebra-in-soergel-normalization]]).





## Proof

1.1 We first prove the stronger flagged-source form with $M\in F_\Delta$ and $N$ a Soergel summand. For $M=\Delta_y(d)$, evaluation at its generator identifies $\operatorname{Hom}(M,N)$ with a shift of $\Gamma_yN$. By [F2] this is free, and the lower-layer image theorem gives rank $\sum_e(N:\nabla_y(e))v^{d-e}$. Thus the claimed formula holds for a single standard source, including arbitrary shifts and finite sums. [F2, F4]

1.2 Let $0\to M_1\to M\to M_2\to0$ be a short exact sequence from the canonical flag, with all three sources $\Delta$-flagged and with their multiplicities additive. For a word sum $B$, the sequence $0\to\operatorname{Hom}(M_2,B)\to\operatorname{Hom}(M,B)\to\operatorname{Hom}(M_1,B)$ is always left exact. The special Hom formula [F1] computes all three modules as free, with graded rank polynomials satisfying the same additive identity. Hence their Hilbert series also satisfy that identity, and left exactness forces surjectivity in each degree: the kernel has the known dimension and the source then has precisely enough remaining dimension to fill the last term. Thus the sequence is short exact. If $N$ is a summand of $B$ with projection idempotent $e$, this sequence splits into its $e$ and $1-e$ parts by postcomposition. Exactness therefore holds with $N$ in place of $B$, including its final surjectivity; no Hom-exactness for arbitrary flagged targets has been assumed. [F1, F3, algebra]

2.1 Induct on the finite length of the $\Delta$ flag of $M$. Peel off the maximal-support first layer $M_1$, a finite sum of shifted standards; the quotient $M_2$ has a shorter flag. Step 1.1 proves the formula for $M_1$, and induction proves it for $M_2$. The short exact Hom sequence of step 1.2 splits as graded right modules, because its last term is free: lift homogeneous basis elements to obtain a homogeneous right-linear section. Thus $\operatorname{Hom}(M,N)$ is free and its rank is the sum of the two multiplicity formulas, giving exactly the displayed expression. This proves the flagged-source form for every summand target. [step 1.1, step 1.2, algebra]

3.1 The dual flagged-target form is proved with the same argument: for a single $\nabla$ target use the second image equality of [F2] and the free quotient $\Gamma^yM$; for a flag extension use the dual special Hom formula [F1] to prove surjectivity for word sources degree by degree, then pass to a source summand by precomposition with its idempotent. Induction on the target flag and a homogeneous splitting of the resulting free Hom sequence give freeness and the same rank sum. In particular [F3] makes step 2.1 applicable to every pair of Soergel objects in the Statement. [F1, F2, F3, step 1.2, step 2.1]

4.1 Expanding the characters of [F4] in their orthonormal standard basis gives $\langle h_\Delta(M),h_\nabla(N)\rangle=\sum_{x,d,e}(M:\Delta_x(d))(N:\nabla_x(e))v^{d-e}$ by bilinearity, which is the established graded rank. For the unit the single graph layer has $d=e=0$; a bimodule endomorphism of $R$ is multiplication by its image of $1$, so $\operatorname{End}_{R\text{-}R}^{\bullet}(R)=R$, freely generated by the identity in degree zero. This proves all assertions. [F4, step 2.1, step 3.1] ∎
