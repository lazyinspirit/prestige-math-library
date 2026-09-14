---
id: lem-rnp-is-invariant-under-banach-space-isomorphism
kind: lemma
title: "RNP is invariant under Banach-space isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-radon-nikodym-property, def-topological-isomorphism-of-normed-spaces, thm-bounded-linear-maps-commute-with-bochner-integration]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Section 2.1, isomorphic invariance implicit in the RNP formulation, printed pp. 34--36"
pipeline_run: phase-2-next-18
---

## Statement

Let $T:X\to Y$ be a bounded linear bijection between Banach spaces with bounded
inverse. Then $X$ has RNP if and only if $Y$ has RNP.

## Facts & Assumptions

[L1] A Banach-space topological isomorphism and its inverse are bounded linear
maps ([[def-topological-isomorphism-of-normed-spaces]]).

[L2] Over every finite control measure, RNP supplies Bochner densities for
absolutely continuous bounded-variation vector measures
([[def-radon-nikodym-property]]).

[L3] Bounded linear maps preserve Bochner integrability and commute with its
integral ([[thm-bounded-linear-maps-commute-with-bochner-integration]]).

## Proof

**Proof technique:** direct.

**Given:** An isomorphism $T:X\to Y$ as in the Statement.

1.1 Transport a $Y$-valued vector measure to $X$. [given, L1, L2]
Assume $X$ has RNP, let $(\Omega,\mathcal A,\mu)$ be a finite measure space,
and let $\nu$ be a bounded-variation $Y$-valued measure with $\nu\ll\mu$. Put
$\widetilde\nu=T^{-1}\circ\nu$. By [L1], it is
norm-countably additive,
$|\widetilde\nu|(E)\leq\|T^{-1}\||\nu|(E)$, and
$\widetilde\nu\ll\mu$.

2.1 Transport the density back to $Y$. [L2, L3, step 1.1]
By [L2], choose a Bochner density $f$ of $\widetilde\nu$. Then [L3] makes $Tf$
Bochner integrable and gives
$\int_ETf=T(\int_Ef)=T\widetilde\nu(E)=\nu(E)$ for every measurable $E$.
Thus $Y$ has RNP.

3.1 Apply the same implication to the inverse. [L1, step 2.1]
If $Y$ has RNP, apply steps 1.1--2.1 with the bounded isomorphism
$T^{-1}:Y\to X$ to obtain RNP for $X$. Hence the two properties are equivalent.
For zero spaces, zero measures, and empty control spaces, every transported
object and density is zero, so both directions remain valid. [L1, step 1.1, step 2.1] ∎
