---
id: lem-unbubbled-strip-breaking-and-regular-gluing-preserve-whitney-concatenation
kind: lemma
title: "Actual unbubbled strip breaking and regular gluing preserve Whitney concatenation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-countable-choice-bubbled-transverse-strip-breaking-compactness, lem-divisor-degree-additivity-and-zero-marked-strip-bubble-exclusion, lem-boundary-preserving-local-addition-for-transverse-product-tori, lem-actual-regular-strip-pregluing-and-newton-correction]
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Whitney concatenation and strip compactification in Sections 2–3; actual relative homotopies are constructed below"
---

## Statement

Assume Countable Choice. In the compact transverse geometry with common exact product generator charts, let an actual sequence of strips have the unbubbled breaking conclusion of the strip compactness theorem, with nonconstant levels $v_1,\ldots,v_M$, matched end generators and no additional energy or image diameter on the intermediate necks or outer tails. Each strip determines its continuous Whitney class by filling its two uniform generator ends, with boundary arcs on $L_0,L_1$. Concatenation joins matching constant end neighborhoods, or equivalently the corresponding marked disk ends.

For all sufficiently large $n$, the actual relative classes satisfy
$$[u_n]=[v_1]*\cdots*[v_M].$$
These are classes under continuous homotopies fixing the two marked ends and preserving each boundary arc. The conclusion uses the actual image collapse and smooth core convergence, not just equality of divisor degrees or energy. It applies in particular to the actual zero-marked unbubbled compactness conclusion, without any additional index hypothesis.

For the actual regular-pair pregluing $u_R$ and Newton-corrected strip $g_R$ in the regular-strip gluing lemma, for all sufficiently large $R$ one has
$$[g_R]=[u_R]=[u^-]*[u^+].$$
No converse classification of relative classes, Maslov/domain formula, or gluing for bubbles or degenerating targets is asserted.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual unbubbled breaking sequence or actual regular glued pair, compact target, fixed boundary submanifolds and common exact product generator charts in the statement. A continuous Whitney class means the two-marked disk relative-homotopy class specified there.

[F1] [[thm-countable-choice-bubbled-transverse-strip-breaking-compactness]] gives actual translated component cores, matched generator ends and uniform gap/outer-tail collapse. [[lem-divisor-degree-additivity-and-zero-marked-strip-bubble-exclusion]] proves when its zero-marked limit is genuinely unbubbled.

[F2] [[lem-boundary-preserving-local-addition-for-transverse-product-tori]] gives an actual smooth local addition, boundary preservation of it and its inverse, and exact coordinate addition near generators.

[F3] [[lem-actual-regular-strip-pregluing-and-newton-correction]] gives the actual cutoff pregluing and correction $g_R=\mathcal E(u_R,\xi_R)$, with uniformly small $H^3$ correction, hence uniformly small values and fixed end limits.

## Proof

1.1 We first record an explicit end or neck homotopy. In a star-shaped generator chart the two boundary submanifolds are the two fixed real product planes and the generator is zero. If a portion of a strip has image in that chart, replace its coordinate map $w$ by $\kappa(s)w$, with $0\le\kappa\le1$ smooth and equal to one near every finite boundary of that portion. The formula $(1-h+h\kappa(s))w$, $0\le h\le1$, is an actual homotopy, agrees with the original elsewhere and preserves both boundary planes. On an outer tail choose $\kappa=0$ beyond a further finite coordinate, giving a constant tail. This homotopy remains continuous at the filled end uniformly in $h$, since $w\to0$ uniformly and its scalar multiplier has absolute value at most one. On a long middle neck choose $\kappa=0$ on a small central interval and one outside a slightly larger interval contained in that neck. The result becomes exactly the common generator near its cut. These operations use only source intervals whose entire images are in the chart; [F1] ensures that condition for every required neck and outer tail after large fixed cores have been chosen. They are finite simultaneous operations. [F1, given, construct, algebra]

2.1 Apply step 1.1 to all intermediate necks and the two outer tails of $u_n$. Cut at the resulting constant middle intervals, and extend each of the finitely many resulting pieces by its two constant generators to a full strip $w_{j,n}$. The original modified map is a concatenation of these eventually constant maps, separated by finite constant collars. Joining such collars and reparametrizing their finite lengths gives the usual continuous Whitney concatenation: an increasing smooth reparametrization of the compact longitudinal intervals moves any chosen cut positions to any prescribed ordered ones, and its straight interpolation with the identity is an isotopy fixing the two compactified ends and both boundary edges. Constant portions permit the pieces to be joined with all derivatives equal. The actual homotopies in step 1.1 therefore prove $$[u_n]=[w_{1,n}]*\cdots*[w_{M,n}].$$ No statement about the interiors of the maps being holomorphic after these operations is needed. [F1, step 1.1, construct, algebra]

3.1 Fix one sufficiently large $S$ so each limiting level lies in its respective generator charts for $|s|\ge S$ and, for large $n$, the corresponding translated sequence outside its size-$S$ core lies in those same charts up to its constant cuts. Such a fixed $S$ exists by the uniform tail and gap collapse in [F1], together with smooth convergence on the finitely many bounded remaining tail regions. In component coordinates further flatten $w_{j,n}$ to its generators outside $[-S-1,S+1]$ using cutoffs equal to one on $[-S,S]$. Step 1.1 proves that this changes no relative class. Flatten $v_j$ by exactly those same cutoffs, likewise without changing its class. The flattened maps converge smoothly on their common compact nonconstant interval, and they agree identically on their outer constant tails. They are therefore uniformly close. Use the inverse local addition in [F2] to write the first as $\mathcal E(v'_j,\zeta_{j,n})$ relative to the flattened limit $v'_j$. The section vanishes on the constant tails and is pointwise tangent to the appropriate boundary submanifold along each edge by [F2]. The actual homotopy $\mathcal E(v'_j,h\zeta_{j,n})$ preserves those boundaries and fixed ends. Thus $[w_{j,n}]=[v_j]$ for large $n$, simultaneously for all finitely many levels. Substitution in step 2.1 proves the asserted eventual splitting, including equality of full relative classes rather than only their domains. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 For a regular glued pair, the joining region of the actual pregluing in [F3] lies entirely in the chart of its matching generator for large $R$. Apply step 1.1 to make a central interval constant there. Its two resulting components are cutoffs of the original translated component strips, up to modifications wholly in that contractible chart. Those extra chart portions are straight-line homotopic relative their finite edge values to the corresponding constant-collar pieces; convexity of a smaller chart ball and linearity of both boundary planes preserve all boundary conditions. Equivalently first contract the central interpolation to zero while keeping its finite outer edges, then contract its two remaining generator-chart tails. Thus the two component classes are exactly $[u^-],[u^+]$, and step 2.1 gives $[u_R]=[u^-]*[u^+]$. Finally the actual correction gives the homotopy $h\mapsto\mathcal E(u_R,h\xi_R)$, which is defined by its uniform smallness. Its boundary values remain in the specified tori by [F2], and its uniform limits stay at the same generators, since the correction is $H^3$ and tends uniformly to zero on the ends. The chartwise weak Sobolev bound gives continuity, and both endpoint maps are smooth; only a continuous relative homotopy is required. Therefore $[g_R]=[u_R]$. All constructions were finite and explicit, and added no choice beyond Countable Choice. [F2, F3, step 1.1, step 2.1, step 3.1, construct, algebra] ∎
