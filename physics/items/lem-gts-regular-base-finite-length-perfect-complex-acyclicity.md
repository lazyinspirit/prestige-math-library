---
id: lem-gts-regular-base-finite-length-perfect-complex-acyclicity
kind: lemma
title: "Regular-base acyclicity for finite-length perfect complexes"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - cor-localisations-of-regular-local-rings-are-regular
  - def-derived-category-of-an-abelian-category
  - def-axiom-of-choice
dependency_roles:
  thm-regular-local-rings-are-domains-and-cohen-macaulay: mathematical-premise
  cor-localisations-of-regular-local-rings-are-regular: mathematical-premise
  def-derived-category-of-an-abelian-category: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Mark Haiman, Hilbert schemes, polygraphs and the Macdonald positivity conjecture, retrieved arXiv math/0010246,
      sections 3.8 and 5.1; explicit local constructions below
    url: https://arxiv.org/pdf/math/0010246
    locator: §3.8, especially Lemma3.8.5 (pp.19–22), and §5.1 (pp.57–58), source context. The regular-base finite-length
      complex criterion is the local Čech proof supplied here.
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-regular-base-finite-length-perfect-complex-acyclicity.md
dependency_level: 0
---

## Statement

Assume AC. Let R be a regular local ring of dimension c and F a bounded finite free complex whose cohomology has finite length. If its free terms are in degrees [a,b] and $c>b−a$, then F is acyclic. If $c=d$, its free terms are in [−d,0], and $H⁰(F)=k_{R}$, then F is quasi-isomorphic to $k_{R}$ in degree zero. On a regular finite-dimensional Noetherian scheme, a perfect complex of cohomological support codimension at least c whose local minimal free models have length less than c is zero. No assertion about a non-Cohen–Macaulay singular local ring is made.

## Statement references

[[thm-regular-local-rings-are-domains-and-cohen-macaulay]]

[[cor-localisations-of-regular-local-rings-are-regular]]

[[def-derived-category-of-an-abelian-category]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] Assume full AC, as defined by [[def-axiom-of-choice]], for selecting parameter systems and free models. No extra coherent/projective supplier and no independent DC premise is used. No Haiman n! or general derived-McKay theorem is assumed.

[F1] The exact mathematical interfaces used are [[thm-regular-local-rings-are-domains-and-cohen-macaulay]], [[cor-localisations-of-regular-local-rings-are-regular]], [[def-derived-category-of-an-abelian-category]], [[def-axiom-of-choice]].

## Proof

**Given:** Exactly the objects and hypotheses of the Statement.

1.1 Let R be a regular local ring of dimension c and let F be a bounded finite free complex, supported only at the closed point. Define the local-cohomology operation explicitly by tensoring with the stable Čech complex $C(x)=⊗_{j=1}^{c}[R→R[x_{j}^{-1}]]$, for a regular parameter system. It is the filtered colimit of the dual Koszul complexes on $x_{1}^{k},…,x_{c}^{k}$. These powers remain a regular sequence, so their Koszul cohomology is only in degree c; exactness of filtered module colimits gives the same for C(x). For a finite-length module all parameter localizations vanish, so $C(x)⊗M=M$ in degree zero. Filtering C(x)⊗F by the cohomology of F therefore gives $C(x)⊗F=F$. Filtering instead by the finite free terms of F shows cohomology only in [a+c,b+c] if its free terms are in [a,b]. The original F has cohomology only in [a,b]. Whenever $c>b−a$, these intervals are disjoint and $F=0$. This supplies the actual local-cohomology argument without an unnamed intersection-theorem input. [given, A1, F1, algebra]

2.1 More generally, let T be a regular finite-dimensional Noetherian scheme. If a perfect complex on T has support codimension≥c and its local minimal free models have length $<c$, it is zero. If not, localize at a minimal prime of its nonzero cohomological support. This is a regular local ring of dimension at least c, and all its homology has finite length. Cancel unit entries in a free model to retain the prescribed length and apply the previous paragraph. This proves the off-diagonal vanishing criterion needed below without an intersection theorem over a singular ring. [given, A1, F1, step 1.1, algebra]

3.1 If the support is a single closed point x of a regular Noetherian scheme and the local ring at x has dimension d, a free model in degrees [−d,0] has cohomology only in degree zero: intersect [−d,0] with [0,d] in the same local-cohomology calculation. If its H⁰ is k, the complex is therefore k. This is the diagonal criterion; it needs known regularity, which the geometric Hilbert supplier supplies. [given, A1, F1, step 2.1, algebra] ∎
