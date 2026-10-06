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
  audited: 2026-09-27
  precheck: pass
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

[F2] Imported from Soergel's Lemma 6.13 with Satz 6.14, in the normalization recorded in the definition: for $M'\in F_\Delta$ and $N'\in\operatorname{add}\mathcal B$ the graded module $\operatorname{Hom}_{R\text{-}R}(M',N')$ is free of rank $\sum_{x,d,e}(M':\Delta_x(d))(N':\nabla_x(e))v^{d-e}$, and the same expression is obtained for $M'\in\operatorname{add}\mathcal B$ and $N'\in F_\nabla$; moreover $\operatorname{add}\mathcal B=\mathcal B$, where $\mathcal B$ consists of the bimodules $B$ for which $B\oplus C\cong D$ with $C,D$ finite sums of shifted Bott–Samelson products; it is this category of special bimodules that is closed under direct summands ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F3] $\mathrm{SBim}_n$ is the idempotent completion of the category of Bott–Samelson bimodules; every object is a direct summand of a finite direct sum of shifts of Bott–Samelson bimodules and hence lies in $\operatorname{add}\mathcal B$, with finite support, in $F_\Delta\cap F_\nabla$, and with intrinsic multiplicities, and finite freeness on both sides is inherited by summands ([[def-the-type-a-soergel-category]], [[lem-type-a-support-filtration-multiplicities-are-intrinsic]], [[lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]], [[lem-type-a-top-support-layers-are-controlled-by-reflection-localization]]).

[F4] The character sums are $h_\Delta(M)=\sum_{x,d}(M:\Delta_x(d))v^d\widetilde T_x$ and $h_\nabla(N)=\sum_{x,e}(N:\nabla_x(e))v^{-e}\widetilde T_x$ with $\widetilde T_x=v^{\ell(x)}T_x$, and $\langle\widetilde T_x,\widetilde T_y\rangle=\delta_{xy}$ defines the standard pairing of the Hecke algebra, bilinear over $\mathbb Z[v,v^{-1}]$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], [[def-type-a-hecke-algebra-in-soergel-normalization]]).



## Proof

1.1 Reduction to the imported instance: by [F3] every object of $\mathrm{SBim}_n$ is a direct summand of a finite direct sum of shifts of Bott–Samelson bimodules, so it lies in the additive closure $\operatorname{add}\mathcal B$ and, by [F3] again, in $F_\Delta\cap F_\nabla$ with intrinsic multiplicities; both sides of the displayed formula are additive in each variable, because the multiplicities are additive over the layers of a support flag and the graded rank is additive over direct sums. It therefore suffices to invoke the imported identity [F2] for the pair $(M,N)$, which is the instance $M\in F_\Delta$, $N\in\operatorname{add}\mathcal B$ (the dual instance $M\in\operatorname{add}\mathcal B$, $N\in F_\nabla$ gives the same displayed expression and the same conclusion). [F2, F3]

1.2 Freeness and rank: [F2] gives that $\operatorname{Hom}_{R\text{-}R}(M,N)$ is a graded free $R$-module of rank $\sum_{x,d,e}(M:\Delta_x(d))(N:\nabla_x(e))v^{d-e}$, the multiplicities being the intrinsic ones of [F3]; in particular $\operatorname{Hom}(M,M)$ is free of the same rank with $M=N$. [F2, F3]

1.3 Consistency with the locally proved special case: for $M$ a Bott–Samelson bimodule the same formula is [F1], and the two agree because [F3] identifies the multiplicities used in [F2] with the multiplicities of the support flags of $M$ and $N$; [F3]'s localization input, the rank identities of [[lem-type-a-top-support-layers-are-controlled-by-reflection-localization]], exhibits the top layer of each flag as the corresponding hom space. [F1, F3]

2.1 Hecke normalization: expanding the two characters by [F4] and using the bilinearity of the standard pairing with $\langle\widetilde T_x,\widetilde T_y\rangle=\delta_{xy}$ gives $\langle h_\Delta(M),h_\nabla(N)\rangle=\sum_{x,d,e}(M:\Delta_x(d))(N:\nabla_x(e))v^{d-e}$, which is the displayed rank, so the graded rank is the standard pairing of the two characters. [F4, step 1.2]

3.1 Unit: for $M=N=R$ the two flags have the single quotient $\Delta_e(0)=\nabla_e(0)=R$, so the formula gives rank $v^0=1$ and $h_\Delta(R)=h_\nabla(R)=\widetilde T_e=1$, and $\operatorname{End}_{R\text{-}R}(R)=R$ is generated in degree $0$; the general case is [F2] together with the identification of step 2.1. ∎ [F2, step 1.2, step 2.1]

