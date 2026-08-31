---
id: prop-pullback-of-covariant-tensors-is-smooth-and-functorial
kind: proposition
title: "Pullback of covariant tensors is smooth and functorial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pullback-of-a-covariant-tensor-field,
       prop-linear-pullback-respects-tensor-products-and-permutations,
       thm-chain-rule-for-differentials-of-smooth-maps,
       prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

If $F:M\to N$ is smooth and $T$ is a smooth covariant tensor field on $N$, then
$F^*T$ is a smooth covariant tensor field on $M$. Moreover,

$$
(\operatorname{id}_M)^*T=T,\qquad (G\circ F)^*T=F^*(G^*T)
$$

for every composable smooth map $G$.

## Facts & Assumptions

**Given:** Smooth maps $F:M\to N$ and $G:N\to P$, and a smooth covariant tensor field $T$ on the target.

[F1] Pullback of a covariant tensor field is defined by inserting the differential into every slot ([[def-pullback-of-a-covariant-tensor-field]]).

[L1] Tensor pullback commutes with the corresponding fibrewise linear operations, and tensor products and contractions of smooth tensor fields are smooth ([[prop-linear-pullback-respects-tensor-products-and-permutations]], [[prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth]]).

[L2] Differentials satisfy the chain rule ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

## Proof
**Proof technique:** direct.

1.1 In local coordinates, [F1] expresses each coefficient of $F^*T$ as a finite sum of the coefficients of $T\circ F$ multiplied by partial derivatives of $F$. Those are smooth, so [L1] implies that $F^*T$ is smooth. [F1, L1, given, algebra]
1.2 The identity map has identity differential, so [F1] gives $(\operatorname{id}_M)^*T=T$. [F1, given]
1.3 For $v_1,\ldots,v_k\in T_pM$, [F1] and [L2] give $$ ((G\circ F)^*T)_p(v_1,\ldots,v_k) =T_{G(F(p))}(dG_{F(p)}dF_pv_1,\ldots,dG_{F(p)}dF_pv_k), $$ which is exactly $(F^*(G^*T))_p(v_1,\ldots,v_k)$. [F1, L2, given, algebra]
2.1 Therefore pullback of covariant tensors is smooth and functorial. [step 1.1, step 1.2, step 1.3] ∎
