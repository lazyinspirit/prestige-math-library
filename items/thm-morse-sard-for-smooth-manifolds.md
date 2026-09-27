---
id: thm-morse-sard-for-smooth-manifolds
kind: theorem
title: "Morse-Sard for smooth manifolds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-morse-sard-for-euclidean-maps,
       prop-countable-unions-and-subsets-of-manifold-null-sets-are-null,
       prop-a-countable-chart-cover-detects-manifold-null-sets,
       prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains,
       def-countable-choice,
       def-critical-locus-and-critical-value-set,
       def-regular-and-critical-points-and-values,
       def-null-subset-of-a-smooth-manifold]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (thm-morse-sard-for-smooth-manifolds). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $F:M\to N$ be a smooth map between smooth manifolds. Then the critical value
set of $F$ is a null subset of $N$.

## Facts & Assumptions

**Given:** Countable Choice and a smooth map $F:M\to N$.

[F1] The empty fibre case is regular, so if every differential $dF_p$ is surjective then every value of $F$ is regular ([[def-regular-and-critical-points-and-values]]).

[F2] The empty subset of any manifold is null ([[def-null-subset-of-a-smooth-manifold]]).

[F3] The critical value set is the image of the critical locus ([[def-critical-locus-and-critical-value-set]]).

[L1] A countable chart cover detects manifold nullity, and countable unions of manifold null sets are null ([[prop-a-countable-chart-cover-detects-manifold-null-sets]], [[prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]]).

[L2] In Euclidean charts, the critical value set of a smooth map is null ([[thm-morse-sard-for-euclidean-maps]]).

[L3] Under Countable Choice, smooth manifolds admit countable smooth atlases with relatively compact domains ([[prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains]]).

## Proof
**Proof technique:** direct.

1.1 If $\dim N=0$, then every differential $dF_p:T_pM\to T_{F(p)}N=\{0\}$ is surjective, so [F1] makes every value of $F$ regular. Thus the critical value set is empty, which is null by [F2]. Assume henceforth that $\dim N>0$. [F1, F2, given, cases]

1.2 By [L3] under Countable Choice, take countable smooth atlases $\{(U_i,\varphi_i)\}$ on $M$ and $\{(V_j,\psi_j)\}$ on $N$; the latter detects nullity by [L1]. The countable open overlaps $U_{ij}=U_i\cap F^{-1}(V_j)$ cover $M$. [L1, L3, given]

2.1 For each pair $(i,j)$, the coordinate representative $$ f_{ij}:=\psi_j\circ F\circ\varphi_i^{-1} $$ on $\varphi_i(U_{ij})$ is smooth between Euclidean open sets with positive-dimensional target. A point of $U_{ij}$ is critical for $F$ exactly when its coordinate representative is critical for $f_{ij}$, because the chart maps have invertible differentials. By [L2], $\psi_j(F(\operatorname{Crit}(F)\cap U_{ij}))$ is null. [L2, step 1.2, algebra]

3.1 Fix $j$. The chart image of the critical value set inside $V_j$ is the countable union over $i$ of the null sets from step 2.1. By the countable-union clause of [L1] in Euclidean coordinates, this chart image is null. Since this holds for every $j$, [L1] detects the critical value set of $F$ as null in $N$. [F3, L1, step 1.2, step 2.1] ∎
