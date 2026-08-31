---
id: thm-finite-torsionfree-modules-over-dedekind-domains
kind: theorem
title: "Finite torsion-free Dedekind modules split into invertible ideal summands"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-invertible-ideals-and-rank-one-projective-modules, lem-finite-torsionfree-modules-over-dedekind-domains-are-projective, lem-rank-one-summand-of-a-finite-projective-dedekind-module]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Lemma 15.22.11"
      url: "https://stacks.math.columbia.edu/tag/0AUW"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $R$ be a Dedekind domain and let $M$ be a finite torsion-free $R$-module. Then there exist invertible fractional ideals $I_1,\ldots,I_r$ such that $M\cong I_1\oplus\cdots\oplus I_r$. In particular, every finite torsion-free module over a Dedekind domain is projective.

## Facts & Assumptions

**Given:** A Dedekind domain $R$, its fraction field $K$, and a finite torsion-free $R$-module $M$.

[L1] Every finite torsion-free module over a Dedekind domain is projective ([[lem-finite-torsionfree-modules-over-dedekind-domains-are-projective]]).

[L2] A nonzero finite projective Dedekind module splits as $N\oplus I$ with $I$ an invertible fractional ideal ([[lem-rank-one-summand-of-a-finite-projective-dedekind-module]]).

[L3] Invertible fractional ideals are exactly the finite rank-one projective modules ([[thm-invertible-ideals-and-rank-one-projective-modules]]).

## Proof

**Proof technique:** direct.

1.1 Let $r:=\dim_K(M\otimes_RK)$. If $r=0$, then $M=0$ because $M$ is torsion-free, so the empty direct sum gives the claim. [given, algebra]

2.1 Suppose $r>0$. By [L1], the module $M$ is projective. If $r=1$, then [L3] identifies $M$ itself with an invertible fractional ideal, and we are done. If $r>1$, apply [L2] to write $M\cong N\oplus I$ with $I$ invertible. Then $N$ is finite torsion-free and satisfies $\dim_K(N\otimes_RK)=r-1$. By induction on $r$, the module $N$ is a finite direct sum of invertible fractional ideals, and adjoining the summand $I$ gives the same conclusion for $M$. [L1, L2, L3, step 1.1, induction]

3.1 Every summand $I_j$ is projective by [L3], so the displayed decomposition also shows that $M$ is projective. [L3, step 2.1] ∎

## Remarks

This draft item deliberately stops at the decomposition into invertible ideal summands. It does **not** claim the stronger Steinitz normal form $R^{r-1}\oplus I$ or uniqueness of the final ideal class, because those extra moves were not rebuilt here from the present dependency budget.
