---
id: thm-morphisms-into-affine-scheme-global-sections
kind: theorem
title: "Morphisms to an affine scheme and global sections"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morphism-of-schemes, def-affine-scheme, thm-global-sections-affine-scheme, thm-affine-scheme-ring-anti-equivalence]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Section 7.3.F"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
---
## Statement

For a scheme $X$ and a ring $A$, taking global sections induces a natural
bijection
$$\operatorname{Hom}(X,\operatorname{Spec}A)\cong\operatorname{Hom}_{\mathrm{CRing}}(A,\Gamma(X,\mathcal O_X)).$$

## Facts & Assumptions

**Given:** A scheme $X$ and a commutative ring $A$.

## Proof

**Proof technique:** direct.

1.1 A morphism $f:X\to\operatorname{Spec}A$ induces the ring map on global sections $A=\Gamma(\operatorname{Spec}A,\mathcal O)\to\Gamma(X,\mathcal O_X)$. [given]

2.1 Conversely, a ring map $A\to\Gamma(X,\mathcal O_X)$ gives the canonical morphism from $X$ to the affine scheme $\operatorname{Spec}A$, checked on affine opens by the affine anti-equivalence and glued over an affine cover of $X$. [step 1.1, construct]

3.1 On each affine open the two constructions are inverse by the affine anti-equivalence; equality of scheme morphisms is local on the source, hence they are mutually inverse and natural. [step 2.1] ∎
