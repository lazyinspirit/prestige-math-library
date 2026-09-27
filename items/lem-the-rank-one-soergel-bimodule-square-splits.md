---
id: lem-the-rank-one-soergel-bimodule-square-splits
kind: lemma
title: "The rank-one Soergel bimodule square splits"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-type-a-soergel-bimodule-for-a-simple-reflection, lem-type-a-soergel-generators-are-finite-free-on-both-sides, def-type-a-reflection-realization-and-polynomial-ring, def-type-a-standard-graph-bimodules-support-filtrations-and-character, def-bott-samelson-bimodule-of-a-word, lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §3.5 equation (3.6), PDF p.28"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §4.3, PDF pp.22–26"
      url: "https://arxiv.org/pdf/1702.00039"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $s=s_i$ be a simple reflection and $B_s=R\otimes_{R^s}R(1)$, so that
$B_s=R\otimes_{R^s}R\{-1\}$ in the internal shift. Then there is an isomorphism
of graded $(R,R)$-bimodules
$$B_s\otimes_RB_s\;\cong\;B_s(1)\oplus B_s(-1),$$
that is $B_s\otimes_RB_s\cong B_s\{-1\}\oplus B_s\{1\}$; the two summands are
the idempotent images of the summands $R\otimes_{R^s}R^s\otimes_{R^s}R$ and
$R\otimes_{R^s}\alpha R^s\otimes_{R^s}R$ of the middle decomposition, and the two
summands are not isomorphic as *graded* bimodules: they differ by the internal
shift $\{2\}$, so each is the shift of the other, but their graded left ranks
$v^{-1+k}+v^{1+k}$ for $k=-1$ and $k=1$, namely $v^{-2}+v^{0}$ and
$v^{0}+v^{2}$, are different, and an isomorphism of graded bimodules preserves
graded ranks.

## Facts & Assumptions

**Given:** A simple reflection $s=s_i$, the invariant ring $R^s$, the element $\alpha=\alpha_i$ with $s(\alpha)=-\alpha$, and the bimodule $B_s=R\otimes_{R^s}R(1)=R\otimes_{R^s}R\{-1\}$.

[F1] $R=R^s\oplus\alpha R^s$ as graded $(R^s,R^s)$-bimodules, and the inclusion $R^s\to R$ is a graded ring map with $2$ invertible in $k$; $\alpha R^s\cong R^s\{2\}$ as $(R^s,R^s)$-bimodules via multiplication by $\alpha$ ([[def-type-a-reflection-realization-and-polynomial-ring]], [[def-type-a-soergel-bimodule-for-a-simple-reflection]]).

[F2] $R\otimes_{R^s}R^s\otimes_{R^s}R\cong R\otimes_{R^s}R$ and shifts move across a balanced tensor product, so that $(R\otimes_{R^s}R)\{k\}=R\otimes_{R^s}(R\{k\})$ ([[def-bott-samelson-bimodule-of-a-word]]).

[F3] $B_s$ is free of rank two on both sides and $B_s\otimes_RB_s$ is free of rank four on both sides, with $\Delta$-flag quotients $R_s\{2\}$, $R\{0\}$ over the piece $R_s\{1\}$ and $R_s\{0\}$, $R\{-2\}$ over the piece $R\{-1\}$; the $\nabla$-flag quotients are $R\{2\}$, $R_s\{0\}$, $R\{0\}$, $R_s\{-2\}$ ([[lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]], [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

## Proof

1.1 Tensoring the middle factor: by [F1] the $(R^s,R^s)$-bimodule $R$ decomposes as $R^s\oplus\alpha R^s$, so applying $R\otimes_{R^s}-\otimes_{R^s}R$ to it gives $R\otimes_{R^s}R\otimes_{R^s}R\cong(R\otimes_{R^s}R)\oplus(R\otimes_{R^s}\alpha R^s\otimes_{R^s}R)$. [F1]

2.1 The second summand: multiplication by $\alpha$ is an $(R^s,R^s)$-bimodule isomorphism $R^s\{2\}\to\alpha R^s$, so $R\otimes_{R^s}\alpha R^s\otimes_{R^s}R\cong(R\otimes_{R^s}R)\{2\}$ by [F2]; the first summand is $R\otimes_{R^s}R\cong(R\otimes_{R^s}R)\{0\}$. [F1, F2, step 1.1]

3.1 Shifts: $B_s=R\otimes_{R^s}R\{-1\}$, so $B_s\otimes_RB_s=(R\otimes_{R^s}R\otimes_{R^s}R)\{-2\}$; applying the decomposition of step 2.1 and distributing the shift gives $B_s\otimes_RB_s\cong(R\otimes_{R^s}R)\{-2\}\oplus(R\otimes_{R^s}R)\{0\}=B_s\{-1\}\oplus B_s\{1\}$. [F2, step 2.1]

4.1 Consistency with the support flags: the two summands $B_s\{-1\}$ and $B_s\{1\}$ have $\Delta$-flag quotients $R_s\{0\},R\{-2\}$ and $R_s\{2\},R\{0\}$ respectively, whose union $R_s\{0\},R_s\{2\},R\{-2\},R\{0\}$ is the multiset in [F3]; hence the abstract decomposition of step 3.1 realizes the flag computation, and the two summands are the $\alpha$-divisible and the $\alpha$-free part of the middle factor. [F3, step 3.1]

5.1 Non-isomorphism and freeness: $B_s\{-1\}$ and $B_s\{1\}$ differ by the shift $\{2\}$, and the graded rank of $B_s\{k\}$ as a left $R$-module is $v^{-1+k}+v^{1+k}$, so the two summands have different graded ranks and are not isomorphic; both are free of rank two on each side while $B_s\otimes_RB_s$ is free of rank four, matching step 3.1. ∎ [F3, step 3.1]
