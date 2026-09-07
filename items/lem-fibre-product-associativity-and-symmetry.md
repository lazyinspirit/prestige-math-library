---
id: "lem-fibre-product-associativity-and-symmetry"
kind: "lemma"
title: "Symmetry, associativity and units"
status: "draft"
origin: "pipeline"
deps: ["thm-fibre-products-of-schemes-exist", "lem-fibre-product-unique-canonical-isomorphism"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 10.1.3; proof 10.1.1 Step 1"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

For $S$-schemes $X,Y,Z$ there are natural projection-compatible isomorphisms
$$X\times_S Y\cong Y\times_S X,\qquad (X\times_S Y)\times_S Z\cong X\times_S(Y\times_S Z),\qquad X\times_S S\cong X\cong S\times_S X.$$
Any coherence identity between these identifications holds whenever both sides induce the same ordered projections to the original factors.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] Every diagram $X\to S\leftarrow Y$ of schemes has a fibre product. Given an affine cover $S=\bigcup_i\operatorname{Spec}A_i$ and affine covers $f^{-1}(\operatorname{Spec}A_i)=\bigcup_j\operatorname{Spec}B_{ij}$ and $g^{-1}(\operatorname{Spec}A_i)=\bigcup_k\operatorname{Spec}C_{ik}$, the product has open affine cover $$\operatorname{Spec}(B_{ij}\otimes_{A_i}C_{ik}).$$ ([[thm-fibre-products-of-schemes-exist]])

[F2] If $(P,p,q)$ and $(P',p',q')$ are fibre products of the same pair $X\to S\leftarrow Y$, there is a unique isomorphism $u:P\to P'$ with $p'u=p$ and $q'u=q$. ([[lem-fibre-product-unique-canonical-isomorphism]])

## Proof

1.1 All products exist by F1. For symmetry swap the two projections; applying this operation twice restores them. For either triple product a map from $T$ is exactly three maps to $X,Y,Z$ with the same composite to $S$. Thus the projections construct mutually inverse maps between the two bracketings. [given, F1]

2.1 The pair $(\operatorname{id}_X,f)$ supplies $X\to X\times_S S$ and the first projection supplies the inverse. A pair into $X,S$ over $S$ has its second coordinate forced by the first. Every inverse assertion follows by uniqueness, as in F2. This includes empty factors and identity structure maps. [F2, step 1.1]

3.1 Naturality and all claimed coherence equations are checked after each original projection. Both sides then give exactly the same coordinate maps. Repeated uniqueness in the binary universal property makes the maps equal. This holds for arbitrary test schemes with nilpotents as well as one-point tests. [F1, F2, step 1.1, step 2.1] ∎
