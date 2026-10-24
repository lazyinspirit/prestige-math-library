---
id: lem-nonaffine-purely-inseparable-affine-proper-descent
kind: lemma
title: "Affineness and properness descend under finite purely inseparable scalar extension"
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-nonaffine-global-sections-flat-field-base-change, thm-faithfully-flat-descent-vanishing, def-proper-morphism, thm-morphisms-into-affine-scheme-global-sections]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-24.md
      - research/frontier-38-owner-30-dispatch/reader-reader-24.result.json
      - research/frontier-38-owner-30-step5-hash-24-post-5a.json
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Brion, Some structure theorems for algebraic groups, Lemma 4.3.5 and Theorem 4.3.4"
      url: https://arxiv.org/pdf/1509.03059
    - title: "Stacks Project, Descent, properties of schemes under field extension"
      url: https://stacks.math.columbia.edu/download/descent.pdf
---

## Statement

Assume the Axiom of Choice. Let $K/k$ be finite purely inseparable, and $X$ a separated finite-type $k$-scheme. If $X_K$ is affine, then $X$ is affine. If $X_K$ is proper over $K$, then $X$ is proper over $k$.

## Facts & Assumptions

[F1] Global sections of a quasi-compact separated scheme commute with extension of scalars over a field. ([[lem-nonaffine-global-sections-flat-field-base-change]])

[F2] Faithfully flat tensor extension detects zero modules. Morphisms into affine schemes correspond to maps on global sections. ([[thm-faithfully-flat-descent-vanishing]], [[thm-morphisms-into-affine-scheme-global-sections]])

[F3] Properness is finite type, separatedness, and universal closedness. ([[def-proper-morphism]])

## Proof

**Given:** AC, a finite purely inseparable $K/k$, and $X$ as above.

1.1 The projection $p:X_K\to X$ is finite faithfully flat and a universal homeomorphism. On an affine chart its ring map is finite free; after extending any residue field the spectrum of the purely inseparable tensor extension has exactly one point, since each element of $K$ has some $p$-power in $k$. It is therefore radicial and onto, and a finite onto map is closed, including after every base change. If $R$ is a local $k$-algebra, $R\otimes_kK$ is local: its finite integral extension has a unique prime over the maximal ideal, and every maximal ideal lies over that ideal. Thus the stalk at the unique point above $x\in X$ is $\mathcal O_{X,x}\otimes_kK$. [given, algebra]

2.1 Assume $X_K$ affine and set $A=\Gamma(X,\mathcal O_X)$. By [F1] and [F2], the canonical map $c:X\to\operatorname{Spec}A$ becomes the canonical affine isomorphism $X_K\cong\operatorname{Spec}(A\otimes_kK)$. By step 1.1 the two scalar-extension projections are homeomorphisms, so $c$ is a homeomorphism. On each stalk the map induced by $c$ becomes an isomorphism after tensoring with $K$, by the stalk description in step 1.1. Tensoring is exact and faithfully flat, so its kernel and cokernel vanish by [F2]. Thus $c$ is an isomorphism of locally ringed spaces and of schemes; $X$ is affine. [F1, F2, step 1.1, algebra]

3.1 Assume instead $X_K$ proper. For an arbitrary $k$-scheme $T$ and closed subset $Z\subset X\times_kT$, its inverse image in $X_K\times_KT_K$ is closed. Its image in $T_K$ is closed by properness of $X_K$, and its image under the finite closed surjection $T_K\to T$ is exactly the image of $Z$ in $T$. Thus $X\to\operatorname{Spec}k$ is universally closed. Finite type and separatedness were given, so [F3] proves properness. AC is inherited from the scheme/global-section suppliers; no Galois action is assumed for the inseparable extension. [F3, step 1.1, given] ∎
