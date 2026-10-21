---
id: lem-ptfa-localization-kills-first-homology-of-betti-one-manifolds
kind: lemma
title: PTFA localized first homology of Betti-one manifolds vanishes
status: draft
origin: pipeline
deps:
  - thm-finite-geometric-complex-chains-dominate-compact-manifold-chains-in-zf
  - lem-choice-free-wall-chain-finiteness-from-explicit-domination
  - lem-ptfa-finite-projective-basechange-preserves-euler-characteristic
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Cochran, Orr and Teichner, Knot concordance, Whitney towers and
        L2-signatures
      url: https://arxiv.org/pdf/math/9908117
      locator: Proposition2.11
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
---

## Statement

Let $N$ be a compact connected Hausdorff topological manifold, with boundary allowed, and let $k$ be a commutative field with $\dim_k H_1(N;k)=1$. Let $\phi:\pi_1(N)\to G$ be nontrivial with $G$ PTFA, and let $K$ be the Ore fraction division ring of $k[G]$. Then $H_0(N;K)=H_1(N;K)=0$. No choice principle or finite CW model for $N$ is assumed.

## Facts & Assumptions

**Given:** The compact connected manifold, coefficient field, nontrivial homomorphism and PTFA fraction division ring.

[F1] Actual singular right-coefficient chains of a compact manifold have explicit finite-free domination, and Wall's finite algebraic construction gives a nonnegative bounded finite-projective chain model. [[thm-finite-geometric-complex-chains-dominate-compact-manifold-chains-in-zf]], [[lem-choice-free-wall-chain-finiteness-from-explicit-domination]]

[F2] For such a projective model the PTFA basechange inequality is $b_1^K\le b_1^k-1$ if $b_0^k=1$ and $b_0^K=0$. [[lem-ptfa-finite-projective-basechange-preserves-euler-characteristic]]

## Proof

1.1 Degree-zero local homology identifies all point fibers with the base fiber by paths. A based loop with image $g\ne1$ imposes $(g-1)K=K$, since $g-1$ is a nonzero element of the embedded group ring and is invertible in $K$. Hence $H_0(N;K)=0$, while ordinary connectedness gives $H_0(N;k)=k$. Only a finite set of paths is needed for any given zero-cycle. [given, construct, algebra]

2.1 Apply [F1] to the actual $k[G]$ coefficient complex. Tensoring its specified chain equivalence and homotopies with $k$ or $K$ preserves their identities; augmentation gives the ordinary complex because every group transport augments to $1$. Thus its two models have the actual $k$ and $K$ homology of $N$. By [F2] and step 1.1, $\dim_K H_1(N;K)\le1-1=0$, so it is zero. The models and every subsequent elimination are bounded finite projective; no arbitrary infinite vector-space splitting or triangulation theorem is used. [F1, F2, step 1.1, construct, algebra] ∎
