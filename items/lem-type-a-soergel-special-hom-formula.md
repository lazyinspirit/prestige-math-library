---
id: lem-type-a-soergel-special-hom-formula
kind: lemma
title: "Special Bott–Samelson Hom formula before reflection localization"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-type-a-character-recursion-under-simple-soergel-tensoring, lem-type-a-soergel-frobenius-biadjunction, lem-type-a-support-filtration-multiplicities-are-intrinsic, def-type-a-standard-graph-bimodules-support-filtrations-and-character, lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations, lem-type-a-hecke-standard-basis-for-soergel-comparison]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Soergel, Kazhdan–Lusztig-Polynome und unzerlegbare Bimoduln, Theorem 5.15 and its proof, PDF p.17"
      url: "https://arxiv.org/pdf/math/0403496"
    - title: "Elias–Williamson, Soergel Calculus, §3.5"
      url: "https://arxiv.org/pdf/1309.0865"
verification:
  precheck: pass
---

## Statement

Suppose either that $M\in F_\Delta$ is a graded $R$-bimodule with a
$\Delta$-flag and $N$ is a Bott–Samelson bimodule
$B_{\underline i}=B_{i_1}\otimes_R\cdots\otimes_RB_{i_r}$ (or a finite direct
sum of shifts of such), or that $M$ is such a Bott–Samelson bimodule and
$N\in F_\nabla$. In either case
$\operatorname{Hom}_{R\text{-}R}(M,N)$ is a graded free $R$-module of graded
rank
$$\operatorname{rk}\operatorname{Hom}_{R\text{-}R}(M,N) =\sum_{x\in S_n}\sum_{d,e\in\mathbb Z} (M:\Delta_x(d))\,(N:\nabla_x(e))\,v^{d-e},$$
with the multiplicities and characters of
[[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], which
by [[lem-type-a-support-filtration-multiplicities-are-intrinsic]] depend only on
$M$ and $N$. This is Soergel's Theorem 5.15 restricted to Bott–Samelson targets
and sources; it precedes the reflection-localization statement for arbitrary
direct summands.

## Facts & Assumptions
**Given:** A graded $R$-bimodule $M$ with a $\Delta$-flag (or a Bott–Samelson bimodule), a Bott–Samelson bimodule $N$, simple reflections $s$, and the characters $h_\Delta,h_\nabla$ of [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]].

[F1] $\operatorname{Hom}_{R\text{-}R}(B_s\otimes_RM,N)\cong\operatorname{Hom}_{R\text{-}R}(M,B_s\otimes_RN)$ and $\operatorname{Hom}_{R\text{-}R}(M\otimes_RB_s,N)\cong\operatorname{Hom}_{R\text{-}R}(M,N\otimes_RB_s)$ as graded $R$-modules, naturally in $M,N$ ([[lem-type-a-soergel-frobenius-biadjunction]]).

[F2] Separately on the two flag categories, Soergel Propositions 5.7(2) and 5.9(2) give $h_\Delta(B_s\otimes_RM)=H_sh_\Delta(M)$ for $M\in F_\Delta$ and $h_\nabla(B_s\otimes_RN)=H_sh_\nabla(N)$ for $N\in F_\nabla$, with $H_s=\widetilde T_s+v$. These follow by summing the two respective multiplicity recursions in Remark (d)(1) of [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]] against $v^d\widetilde T_x$ and $v^{-d}\widetilde T_x$. The Hecke identity is $H_s\widetilde T_y=\widetilde T_{sy}+v\widetilde T_y$ for $sy>y$ and $\widetilde T_{sy}+v^{-1}\widetilde T_y$ for $sy<y$, using [[lem-type-a-hecke-standard-basis-for-soergel-comparison]]. Shifting a layer reindexes $d$ and gives $h_\Delta(M\{k\})=v^{-k}h_\Delta(M)$ and $h_\nabla(N\{k\})=v^kh_\nabla(N)$ on their respective domains. Intrinsicness on each category separately follows from the corresponding canonical layers in Remark (d)(7) of the same definition; no simultaneous pair of flags is required.

[F3] The multiplicity pairing $\langle,\rangle$ on the Hecke algebra with $\langle\widetilde T_x,\widetilde T_y\rangle=\delta_{xy}$ is symmetric and $H_s$ is self-adjoint for it: $\langle H_sF,G\rangle=\langle F,H_sG\rangle$, because the standard pairing is the coefficient of $\widetilde T_e$ in $i(F)G$ for the anti-involution $i(v)=v$, $i(\widetilde T_x)=\widetilde T_{x^{-1}}$, and $i(H_s)=H_s$ (Soergel, proof of Theorem 5.15) ([[lem-type-a-hecke-standard-basis-for-soergel-comparison]]).

[F4] $\operatorname{Hom}_{R\text{-}R}(R_v(a),R_w(b))\cong R(b-a)$ for $v=w$ and $0$ for $v\ne w$, where $R(b-a)$ denotes the free module generated in degree $a-b$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F5] Bott–Samelson bimodules lie in $F_\Delta\cap F_\nabla$ and the functors $B_s\otimes_R-$ and $-\otimes_RB_s$ preserve both flag categories and preserve finite freeness ([[lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]]).

[F6] The imported Hom formula of Soergel Theorem 5.15, recorded as result 6 in [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], gives the base case $N=R=B_\emptyset$: for every $M\in F_\Delta$, $\operatorname{Hom}_{R\text{-}R}(M,R)$ is graded free of rank $\sum_d(M:\Delta_e(d))v^d$. Its proof supplies the exactness over a $\Delta$-flag needed for this base case. The same imported result separately gives the dual case of a Bott–Samelson source and $N\in F_\nabla$. The library rank convention sends a generator of degree $a$ to $v^a$ and is the $v\mapsto v^{-1}$ transform of Soergel Notation 5.2.



## Proof

1.1 Reduction step: by [F1] the two hom spaces $\operatorname{Hom}(B_s\otimes_RM,N)$ and $\operatorname{Hom}(M,B_s\otimes_RN)$ are isomorphic as graded $R$-modules, hence have the same graded rank; by [F2] the right hand sides of the claimed formula for the two pairs differ by the factor $H_s$ on the two sides and agree by the self-adjointness of [F3], so the formula holds for the pair $(B_s\otimes_RM,N)$ if and only if it holds for $(M,B_s\otimes_RN)$. [F1, F2, F3]

1.2 Shift step: the same argument with $M$ replaced by $M\{k\}$ uses $\operatorname{Hom}(M\{k\},N)\cong\operatorname{Hom}(M,N\{-k\})$ and the shift rules of [F2] to show that the formula for $(M\{k\},N)$ is equivalent to the formula for $(M,N\{-k\})$. [F2]

1.3 Base case: let $N=R=B_\emptyset$. The first imported case of [F6] applies to $M\in F_\Delta$ and this Bott–Samelson target, so $\operatorname{Hom}_{R\text{-}R}(M,R)$ is graded free with rank $\sum_{x,d,e}(M:\Delta_x(d))(R:\nabla_x(e))v^{d-e}$. The one-graph flag of $R$ has $(R:\nabla_e(0))=1$ and no other quotients, so this reduces to $\sum_d(M:\Delta_e(d))v^d$. The single-layer calculation $\operatorname{Hom}(\Delta_e(d),R)\cong R(-d)$ of [F4] agrees with that grading; the passage from a flag to the full Hom module uses the imported exactness in [F6], not the single-layer vanishing alone. [F4, F6]

1.4 Induction on the word: write a nonempty Bott–Samelson target as $N=B_s\otimes_RN'$ by peeling its leftmost letter. The first biadjunction of [F1] gives $\operatorname{Hom}(M,B_s\otimes_RN')\cong\operatorname{Hom}(B_s\otimes_RM,N')$. By [F5], $B_s\otimes_RM\in F_\Delta$, so the induction hypothesis computes the rank of the latter Hom module as $\langle h_\Delta(B_s\otimes_RM),h_\nabla(N')\rangle$. The **left** recursion of [F2] and self-adjointness in [F3] turn this into $\langle H_sh_\Delta(M),h_\nabla(N')\rangle=\langle h_\Delta(M),H_sh_\nabla(N')\rangle=\langle h_\Delta(M),h_\nabla(B_s\otimes_RN')\rangle$, the claimed rank for $(M,N)$. [F1, F2, F3, F5]

1.5 Dual case: when $M$ is Bott–Samelson and $N\in F_\nabla$, the imported dual assertion [F6] gives freeness and the displayed rank directly. Taking opposites does not exchange the two flag categories, so it is not used for this step. [F6]

2.1 Conclusion: finite direct sums of shifts of words are handled by additivity of Hom and of the canonical support layers, with the shift rule of step 1.2. Thus for every pair $(M,N)$ covered by the statement the graded rank of $\operatorname{Hom}_{R\text{-}R}(M,N)$ is the displayed multiplicity sum, and by the first-case induction together with [F6] the hom space is a free graded $R$-module; the shift and simple-reflection moves of steps 1.1 to 1.5 generate every Bott–Samelson word, so no further hypothesis on $N$ is used and the reflection-localization statement for arbitrary direct summands is not invoked. ∎ [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5]
