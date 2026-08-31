---
id: prop-linear-pullback-respects-tensor-products-and-permutations
kind: proposition
title: "Linear pullback respects tensor products and permutations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tensor-product-of-multilinear-tensors,
       def-permutation-action-on-covariant-tensors,
       def-pullback-of-a-covariant-tensor-by-a-linear-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $V$ and $W$ be finite-dimensional real vector spaces, let $A:V\to W$ be
linear, let $S$ and $T$ be covariant tensors on $W$ of degrees $k$ and $\ell$,
respectively, and let $\sigma\in S_\ell$. Then

$$ A^*(S\otimes T)=A^*S\otimes A^*T,\qquad A^*(\sigma\cdot T)=\sigma\cdot(A^*T). $$

## Facts & Assumptions

**Given:** Finite-dimensional real vector spaces $V,W$, a linear map $A:V\to W$, covariant tensors $S,T$ on $W$ of degrees $k,\ell$, and a permutation $\sigma\in S_\ell$.

[F1] Pullback of a covariant tensor substitutes $Av_i$ into every slot ([[def-pullback-of-a-covariant-tensor-by-a-linear-map]]).

[F2] Tensor product multiplies the factor values on concatenated arguments, and the permutation action reorders the arguments ([[def-tensor-product-of-multilinear-tensors]], [[def-permutation-action-on-covariant-tensors]]).

## Proof
**Proof technique:** direct.

1.1 Evaluating on $v_1,\ldots,v_{k+\ell}$ and using [F1] and [F2], $$ A^*(S\otimes T)(v_1,\ldots,v_{k+\ell}) =(S\otimes T)(Av_1,\ldots,Av_{k+\ell}) =S(Av_1,\ldots,Av_k)\,T(Av_{k+1},\ldots,Av_{k+\ell}), $$ which is exactly $(A^*S\otimes A^*T)(v_1,\ldots,v_{k+\ell})$. [F1, F2, given, algebra]
1.2 Likewise, $$ A^*(\sigma\cdot T)(v_1,\ldots,v_\ell) =(\sigma\cdot T)(Av_1,\ldots,Av_\ell) =T(Av_{\sigma(1)},\ldots,Av_{\sigma(\ell)}), $$ which equals $(\sigma\cdot A^*T)(v_1,\ldots,v_\ell)$. [F1, F2, given, algebra]
2.1 Therefore linear pullback respects tensor products and permutations. [step 1.1, step 1.2] ∎
