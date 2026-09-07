---
id: "thm-the-heart-of-the-canonical-t-structure-is-equivalent-to-the-original-abelian-category"
kind: "theorem"
title: "The heart of the canonical t structure is equivalent to the original abelian category"
deps: ["thm-the-canonical-pair-is-a-t-structure", "lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://arxiv.org/pdf/1206.6632v1"
      title: "Proposition 12.4.1, p. 64"
provenance:
  statement: ai-altered
  proof: ai-altered
landmark: true
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The degree-zero functor $\mathcal A\to D(\mathcal A)$ identifies $\mathcal A$ with the heart of the canonical t-structure. The inverse equivalence is $H^0$.

## Facts & Assumptions

**Given:** The degree-zero functor $\mathcal A\to D(\mathcal A)$ identifies $\mathcal A$ with the heart of the canonical t-structure. The inverse equivalence is $H^0$.

[F1] The canonical t-structure has the boundary Hom formula ([[thm-the-canonical-pair-is-a-t-structure]]).

[F2] Canonical truncations have the claimed cohomology and natural maps ([[lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology]]).

## Proof

1.1 For objects $M,N$ in degree zero the boundary Hom formula with $a=b=0$ gives $\operatorname{Hom}_D(M[0],N[0])=\operatorname{Hom}_{\mathcal A}(M,N)$, and the identification takes a map to its degree-zero cohomology map. This proves full faithfulness, including zero objects and identity maps. [F1]

2.1 If $X$ is in the heart, the natural zigzag $X\leftarrow\tau^{\leq0}X\to\tau^{\geq0}\tau^{\leq0}X=H^0(X)[0]$ consists of quasi-isomorphisms. It is functorial, and $H^0(M[0])=M$. These natural isomorphisms give the inverse equivalence and essential surjectivity. [F2, step 1.1] ∎
