---
id: lem-cft-pairwise-casimirs-satisfy-infinitesimal-braid-relations
kind: lemma
title: Pairwise Casimirs satisfy infinitesimal braid relations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-cft-wzw-insertion-data
  - def-untwisted-affine-central-extension
dependency_roles:
  def-cft-wzw-insertion-data: mathematical-premise
  def-untwisted-affine-central-extension: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Etingof, Frenkel, and Kirillov, Lectures on Representation Theory and KZ Equations
      url: https://djvu.online/file/elCdJNnaapAuA
      locator: Lecture 3, §3.5, the infinitesimal braid relations for pairwise Casimir operators.
    - title: Tsuchiya, Ueno, and Yamada, Conformal Field Theory on Universal Family of Stable Curves with Gauge Symmetries
      url: https://archive.mpim-bonn.mpg.de/id/eprint/2838/1/preprint_1989_18.pdf
      locator: §5, WZW connection and pairwise Casimir operators.
---

## Statement

Let $\mathfrak g$ be finite-dimensional with a nondegenerate invariant symmetric form $B$, let $V_1,\ldots,V_n$ be finite-dimensional $\mathfrak g$-modules, and define $\Omega_{ij}=\sum_a\rho_i(x_a)^{(i)}\rho_j(x^a)^{(j)}$ for $B$-dual bases. These endomorphisms of the ordinary finite tensor product satisfy $[\Omega_{ij},\Omega_{rs}]=0$ for disjoint pairs and
$
[\Omega_{ij},\Omega_{ik}+\Omega_{jk}]=0
$
for distinct $i,j,k$.

## Facts & Assumptions

**Given:** $\mathfrak g,B$, finite-dimensional modules and the pairwise operators above.

[F1] For the WZW specialization only, [[def-cft-wzw-insertion-data]] supplies the normalized form and finite-dimensional top representations; neither is a premise of the general relation proved here.

[F2] The affine-extension convention [[def-untwisted-affine-central-extension]] is cited only to record the WZW normalization context. The proof uses the nondegenerate invariant symmetric form $B$ already assumed in the Statement.

## Proof

1.1 If $\{i,j\}\cap\{r,s\}=\varnothing$, every summand of $\Omega_{ij}$ acts on tensor factors disjoint from every summand of $\Omega_{rs}$. Operators on distinct factors commute, so their finite sums commute. [given, algebra]

2.1 For $y,z,w\in\mathfrak g$, contraction of $(\operatorname{ad}y\otimes1+1\otimes\operatorname{ad}y)C$ against $B(\cdot,z)\otimes B(\cdot,w)$ is
$
B([y,w],z)+B([y,z],w)=0
$
by invariance and symmetry of the form $B$ in the Statement. Nondegeneracy of $B$ makes this tensor zero. Its specialization $y=x_b$ is
$
\sum_a [x_a,x_b]\otimes x^a+x_a\otimes[x^a,x_b]=0.
$
Multiply the first tensor factor on slot $i$, the second on slot $j$, and sum against $x^b$ acting on slot $k$. Since different slots commute, the first resulting sum is $[\Omega_{ij},\Omega_{ik}]$ and the second is $[\Omega_{ij},\Omega_{jk}]$. Their sum is zero. The inverse Gram tensor is symmetric, so $\Omega_{ij}=\Omega_{ji}$; the relation follows for every ordering of distinct indices. All operators act on finite-dimensional tensor products; no completion is involved. [given, step 1.1, algebra] ∎
