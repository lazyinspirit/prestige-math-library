---
id: ex-affine-group-of-the-real-line
kind: example
title: ' The affine group of the real line is $\mathbb R\rtimes\mathbb R^\times$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-external-semidirect-product-is-a-group, prop-holomorph-as-a-permutation-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter J. Cameron, The Holomorph of a Group"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/MTHM024/gn7.pdf"
pipeline_run: null
---

## Example

The group of affine bijections of the real line is

$$\operatorname{Aff}(\mathbb R)\cong(\mathbb R,+)\rtimes\mathbb R^\times,$$

where $a\in\mathbb R^\times$ acts by $x\mapsto ax$.

## Facts & Assumptions

**Given:** The additive group $N=(\mathbb R,+)$ and multiplicative group $H=\mathbb R^\times$.

[L1] An action by automorphisms makes $N\times H$ a semidirect-product group ([[thm-external-semidirect-product-is-a-group]]).

[L2] A holomorph acts by affine permutations $x\mapsto g\alpha(x)$ ([[prop-holomorph-as-a-permutation-group]]).

## Verification

**Proof technique:** direct.

1.1 Each nonzero $a$ acts on $(\mathbb R,+)$ by the automorphism $x\mapsto ax$, and multiplication of scalars composes these automorphisms. Thus [L1] gives the group law $(b,a)(d,c)=(b+ad,ac)$. [L1, algebra]

2.1 Associate $(b,a)$ with $f_{b,a}(x)=ax+b$. Composition satisfies $f_{b,a}\circ f_{d,c}(x)=acx+(ad+b)$, so the association is a homomorphism by step 1.1. It is bijective because an affine map uniquely determines its slope $a$ and intercept $b$. This is the affine action described in [L2]. [step 1.1, L2, algebra] ∎
