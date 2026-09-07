---
id: "lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism"
kind: "lemma"
title: "Left total derived functor is independent up to a unique augmentation-compatible natural isomorphism"
deps: ["def-left-total-derived-functor-on-the-bounded-above-derived-category", "prop-morphisms-from-a-homotopically-projective-complex-need-no-roof"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Two supplied projective replacement systems for the same additive $F$ give a natural isomorphism of left total derived functors, unique among natural comparisons commuting with the augmentations. This is not uniqueness of unrestricted natural automorphisms.

## Facts & Assumptions

**Given:** Two supplied projective replacement systems for the same additive $F$ give a natural isomorphism of left total derived functors, unique among natural comparisons commuting with the augmentations. This is not uniqueness of unrestricted natural automorphisms.

[F1] The replacement construction has augmentation $QF(p_X)$ ([[def-left-total-derived-functor-on-the-bounded-above-derived-category]]).

[F2] Hom out of a K-projective complex needs no roof ([[prop-morphisms-from-a-homotopically-projective-complex-need-no-roof]]).

## Proof

1.1 Write $p_X:P_X\to X$ and $p'_X:P'_X\to X$. The no-roof bijection gives a unique map $c_X:P_X\to P'_X$ in $K$ such that $p'_Xc_X=p_X$ in $K$. The opposite comparison is inverse by the same uniqueness. This works for zero complexes and identity replacements. Applying additive $F$ preserves these homotopy identities. [F1, F2]

2.1 For a derived arrow $u:X\to Y$ the two paths between the chosen projective models have the same localized image, hence coincide in $K$ by the no-roof bijection. Thus $QF(c_X)$ is a natural isomorphism commuting with augmentations. [F2, step 1.1]

3.1 On any projective complex $P$, the augmentation of either construction is invertible: its replacement map is a homotopy equivalence by step 1.1 applied to the identity replacement. Therefore augmentation compatibility forces a comparison at $P$ to be $(\epsilon'_P)^{-1}\epsilon_P$. Naturality along the isomorphism $Q(p_X):QP_X\to QX$ then forces its value at every $X$. This proves precisely the stated uniqueness. [F1, step 1.1, step 2.1, algebra] ∎
