---
id: lem-type-a-character-recursion-under-simple-soergel-tensoring
kind: lemma
title: "The type-A character recursion under simple Soergel tensoring"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations, lem-type-a-support-filtration-multiplicities-are-intrinsic, def-type-a-hecke-algebra-in-soergel-normalization, lem-type-a-hecke-standard-basis-for-soergel-comparison, def-type-a-standard-graph-bimodules-support-filtrations-and-character, def-type-a-soergel-bimodule-for-a-simple-reflection, lem-type-a-soergel-generators-are-finite-free-on-both-sides]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Soergel, Kazhdan–Lusztig-Polynome und unzerlegbare Bimoduln, Propositions 5.7 and 5.9, PDF pp.13–16"
      url: "https://arxiv.org/pdf/math/0403496"
    - title: "Elias–Williamson, Soergel Calculus, §§2.1, 3.4, PDF pp.13–15, 24–27"
      url: "https://arxiv.org/pdf/1309.0865"
verification:
  precheck: pass
---

## Statement

Let $M$ be a graded $R$-bimodule in $F_\Delta\cap F_\nabla$, so that by
[[lem-type-a-support-filtration-multiplicities-are-intrinsic]] the
multiplicities $(M:\Delta_x(d))$, $(M:\nabla_x(d))$ and the characters
$h_\Delta(M),h_\nabla(M)$ are defined and intrinsic. Then for every simple
reflection $s=s_i$:

1. $B_i\otimes_RM$ and $M\otimes_RB_i$ lie in $F_\Delta\cap F_\nabla$, with
   finitely many flag quotients;
2. $h_\Delta(B_i\otimes_RM)=H_i\,h_\Delta(M)$ and
   $h_\nabla(B_i\otimes_RM)=H_i\,h_\nabla(M)$, where
   $H_i=v(T_i+1)=\widetilde T_i+v$ and $\widetilde T_x=v^{\ell(x)}T_x$ is the
   normalized basis of [[lem-type-a-hecke-standard-basis-for-soergel-comparison]];
3. for the internal shift and all $k\in\mathbb Z$,
   $h_\Delta(M\{k\})=v^{-k}h_\Delta(M)$ and
   $h_\nabla(M\{k\})=v^{k}h_\nabla(M)$; in the Elias–Williamson notation of the
   sources, whose shift $(1)=\{-1\}$ lowers every generating degree by one,
   this says that $(1)$ multiplies $h_\Delta$ by $v$ and $h_\nabla$ by
   $v^{-1}$;
4. on $M=R$ the recursion reads $h_\Delta(B_i)=h_\nabla(B_i)=H_i$.

This is a statement about the action of the generators only: multiplicativity of
$h_\Delta$ and $h_\nabla$ for arbitrary tensor products is proved on this page
only after the categorification theorem.

## Facts & Assumptions

**Given:** A graded $R$-bimodule $M\in F_\Delta\cap F_\nabla$, a simple reflection $s=s_i$, the generator $B_i=R\otimes_{R^{s_i}}R(1)$, and the Hecke algebra $H_n$ with its normalized basis $\widetilde T_x=v^{\ell(x)}T_x$.

[F1] $\Delta_x(d)=R_x\{\ell(x)-d\}$, $\nabla_x(d)=R_x\{-\ell(x)-d\}$, and the characters are $h_\Delta(M)=\sum(M:\Delta_x(d))v^d\widetilde T_x$, $h_\nabla(M)=\sum(M:\nabla_x(d))v^{-d}\widetilde T_x$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F2] The rank-one sequences $0\to R\{1\}\to B_s\to R_s\{-1\}\to0$ and $0\to R_s\{1\}\to B_s\to R\{-1\}\to0$; in particular the $\Delta$-flag of $B_s$ has quotients $R_s\{1\}=\Delta_s(0)$ and $R\{-1\}=\Delta_e(1)$, and the $\nabla$-flag has quotients $R\{1\}=\nabla_e(-1)$ and $R_s\{-1\}=\nabla_s(0)$, all maps of degree zero ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F3] $T_wT_i=T_{ws_i}$ if $\ell(ws_i)=\ell(w)+1$ and $T_wT_i=(q-1)T_w+qT_{ws_i}$ if $\ell(ws_i)=\ell(w)-1$, with $q=v^{-2}$; $\{T_w\}$ is an $A$-basis; and $H_i=v(T_i+1)$ satisfies $H_i^2=(v+v^{-1})H_i$ ([[lem-type-a-hecke-standard-basis-for-soergel-comparison]], [[def-type-a-hecke-algebra-in-soergel-normalization]]).

[F4] Imported from Soergel's Propositions 5.7 and 5.9 together with their
proofs, for $B\in F_\Delta\cap F_\nabla$, a simple $s$ and $x$ with
$\ell(x)>\ell(sx)$: $(B_s\otimes_RB:\Delta_x(d))=(B:\Delta_x(d+1))+(B:\Delta_{sx}(d))$,
$(B_s\otimes_RB:\Delta_{sx}(d))=(B:\Delta_x(d))+(B:\Delta_{sx}(d-1))$, and the
dual pair of recursions for the $\nabla$-multiplicities; the same source matches
these recursions with the two Hecke formulas
$((\widetilde T_s+v)H:v^d\widetilde T_x)=(H:v^{d+1}\widetilde T_x)+(H:v^d\widetilde T_{sx})$
and
$((\widetilde T_s+v)H:v^d\widetilde T_{sx})=(H:v^d\widetilde T_x)+(H:v^{d-1}\widetilde T_{sx})$
([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F5] $B_i$ is finite free of rank two on both sides, so $B_i\otimes_R-$ and $-\otimes_RB_i$ are exact while flag preservation follows from [F4] and the opposite argument; $B_i\cong B_i^{\mathrm{op}}$ ([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]], [[def-type-a-soergel-bimodule-for-a-simple-reflection]]).

## Proof

1.1 Flag membership (1): by [F4] the functor $B_s\otimes_R-$ carries $F_\Delta$ into $F_\Delta$ and $F_\nabla$ into $F_\nabla$ (the closure clause of each of the two imported propositions recorded there), and by [F5] it is exact and preserves finite freeness, so $B_s\otimes_RM\in F_\Delta\cap F_\nabla$ with finitely many flag quotients. For the right tensor, the opposite identification $(M\otimes_RB_s)^{\mathrm{op}}\cong B_s^{\mathrm{op}}\otimes_RM^{\mathrm{op}}$ together with $B_s^{\mathrm{op}}\cong B_s$ expresses $M\otimes_RB_s$ as the opposite of $B_s\otimes_RM^{\mathrm{op}}$; the opposite functor preserves each of the two flag categories, as recorded in [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], and $M^{\mathrm{op}}$ again lies in both with the same shift data, so the left-closure clause applied to $M^{\mathrm{op}}$ gives $M\otimes_RB_s\in F_\Delta\cap F_\nabla$. Exactness and preservation of finite freeness for $-\otimes_RB_s$ hold by [F5] because $B_s$ is free of rank two as a left $R$-module. [F4, F5]

1.2 Multiplicities in the two charts: for $\ell(x)>\ell(sx)$ the imported recursions of [F4] express the $\Delta$-multiplicities of $B_s\otimes_RB$ in terms of those of $B$, and the matching Hecke formulas of [F4] are the expansion of $\widetilde T_s\widetilde T_x$ and $\widetilde T_s\widetilde T_{sx}$ in the standard basis of [F3]: since $\widetilde T_x=v^{\ell(x)}T_x$, the left-multiplication rule is $T_sT_x=T_{sx}$ when $\ell(sx)=\ell(x)+1$ and $T_sT_x=(q-1)T_x+qT_{sx}$ when $\ell(sx)=\ell(x)-1$, so $\widetilde T_s\widetilde T_x=\widetilde T_{sx}$ in the ascent case and $\widetilde T_s\widetilde T_x=\widetilde T_{sx}+(v^{-1}-v)\widetilde T_x$ in the descent case, with coefficient one on $\widetilde T_{sx}$; this coefficient one is exactly what the recursions of [F4] assert, and the diagonal term $(v^{-1}-v)\widetilde T_x$ is the shift by one of the diagonal that the recursion moves. [F3, F4]

1.3 Base case: for $M=R$ the two flags of [F2] give $h_\Delta(B_s)=v^{1}\widetilde T_e+v^{0}\widetilde T_s=v+vT_s$ and $h_\nabla(B_s)=v^{1}\widetilde T_e+v^{0}\widetilde T_s=v+vT_s$, both equal to $H_s\cdot1=H_s$; and $h_\Delta(R)=h_\nabla(R)=\widetilde T_e=1$. [F1, F2, F3]

1.4 Shift rule: $\Delta_x(d)\{k\}=R_x\{\ell(x)-d+k\}=\Delta_x(d-k)$ and $\nabla_x(d)\{k\}=\nabla_x(d-k)$, so the multiplicity of $\Delta_x(d)$ in $M\{k\}$ equals that of $\Delta_x(d+k)$ in $M$, whence $h_\Delta(M\{k\})=\sum_d(M:\Delta_x(d+k))v^d\widetilde T_x=v^{-k}h_\Delta(M)$; the same computation with the weights $v^{-d}$ gives $h_\nabla(M\{k\})=v^{k}h_\nabla(M)$. [F1]

2.1 Comparing coefficients in step 1.2 term by term shows $h_\Delta(B_s\otimes_RB)=\sum_{x,d}(B_s\otimes_RB:\Delta_x(d))v^d\widetilde T_x=(\widetilde T_s+v)h_\Delta(B)=H_sh_\Delta(B)$, so the $\Delta$-recursion of claim (2) holds. [F1, F3, step 1.2]

2.2 The dual chart is the same computation with the weights $v^{-d}$: the $\nabla$-recursions of [F4] give $h_\nabla(B_s\otimes_RB)=H_sh_\nabla(B)$, since the two charts are exchanged by $d\mapsto-d$ in the displayed Hecke formulas of [F4]. [F1, F3, step 1.2]

3.1 Intrinsicness and conclusion: by [[lem-type-a-support-filtration-multiplicities-are-intrinsic]] the multiplicities used in steps 2.1 to 3.1 depend only on the bimodules involved, so the displayed identities are identities between the characters of $M$, $B_i\otimes_RM$ and $M\{k\}$; claims (1) to (4) follow, the case $M=R$ of claim (4) being step 1.3. ∎ [step 1.1, step 2.1, step 2.2, step 1.3, step 1.4]
