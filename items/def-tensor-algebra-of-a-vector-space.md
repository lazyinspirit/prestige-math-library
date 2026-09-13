---
id: def-tensor-algebra-of-a-vector-space
kind: definition
title: Tensor algebra of a vector space
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-universal-property-of-module-tensor-products, cor-finite-iterated-tensor-products-represent-multilinear-maps, def-direct-sum-of-a-family-of-modules, thm-symmetry-and-associativity-over-a-commutative-ring]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §12.1, printed pp. 69–70"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §5.1, printed pp. 71–72"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Definition

For a vector space $V$ over $k$, set $V^{\otimes0}=k$ and define the
**tensor algebra**

$$T(V)=\bigoplus_{n\geq0}V^{\otimes n}.$$

After fixing the canonical tensor-product associators, multiplication on
homogeneous pure tensors is concatenation:

$$ (v_1\otimes\cdots\otimes v_m)(w_1\otimes\cdots\otimes w_n)=v_1\otimes\cdots\otimes v_m\otimes w_1\otimes\cdots\otimes w_n.$$

Extend this bilinearly. Each element has finite degree support, so products are
finite sums. Tensor associativity makes concatenation associative, and
$1\in k=V^{\otimes0}$ is its unit. Thus $T(V)$ is a graded unital associative
$k$-algebra. The degree-one inclusion is denoted $j:V\to T(V)$.
