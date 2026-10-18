---
id: lem-na-piola-divergence-and-flux-identities
kind: lemma
title: Piola divergence and facet-flux identities
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [ def-na-contravariant-piola-map, thm-chain-rule-for-total-derivatives ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div)
        finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §14.4, equations (14.8)–(14.12): oriented face
        transformation and contravariant Piola identities."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element
        Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.1, equations (2.1.69)–(2.1.74), Piola
        divergence and normal-flux formulas."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $F_K(\widehat x)=A_K\widehat x+b_K$ be as in [[def-na-contravariant-piola-map]], and let $\widehat v\in C^1(\overline{\widehat K};\mathbb R^d)$. Set $v=\mathcal P_K\widehat v$. Then
$$
(\operatorname{div}_x v)(F_K(\widehat x))=J_K^{-1}\operatorname{div}_{\widehat x}\widehat v(\widehat x).
$$
For each facet $\widehat F$ mapped to $F$, with the corresponding oriented normals, the integrated flux is preserved:
$$
\int_F v\cdot n_F\,ds=\int_{\widehat F}\widehat v\cdot\widehat n_{\widehat F}\,d\widehat s.
$$

## Facts & Assumptions

**Given:** An orientation-preserving affine bijection $F_K$ with matrix $A_K$, determinant $J_K>0$, a smooth reference vector field $\widehat v$, and its contravariant Piola push-forward.

[F1] The push-forward is $v(F_K(\widehat x))=J_K^{-1}A_K\widehat v(\widehat x)$. ([[def-na-contravariant-piola-map]])

[F2] The chain rule for total derivatives states $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ for differentiable maps between finite-dimensional real spaces. ([[thm-chain-rule-for-total-derivatives]])

## Proof

1.1 Write $v_i(F_K(\widehat x))=J_K^{-1}\sum_j(A_K)_{ij}\widehat v_j(\widehat x)$. The chain rule [F2] for $F_K^{-1}$ gives $\partial_{x_i}=\sum_k(A_K^{-1})_{ki}\partial_{\widehat x_k}$; since $A_K$ is constant, summing the derivatives gives $(\operatorname{div}_xv)\circ F_K=J_K^{-1}\sum_{i,k,j}(A_K^{-1})_{ki}(A_K)_{ij}\partial_{\widehat x_k}\widehat v_j=J_K^{-1}\sum_j\partial_{\widehat x_j}\widehat v_j.$ The middle equality uses $A_K^{-1}A_K=I$. [F1, F2, algebra]

2.1 Choose oriented tangent vectors $\widehat t_1,\ldots,\widehat t_{d-1}$ on $\widehat F$. Under $F_K$ the tangent vectors are $A_K\widehat t_i$; multilinearity of the determinant gives the oriented area-normal transformation $n_F ds=\operatorname{cof}(A_K)\widehat n_{\widehat F}d\widehat s$. Since $A_K$ is invertible, $\operatorname{cof}(A_K)=J_KA_K^{-T}$. Therefore the Piola flux element satisfies $v\cdot n_F\,ds=(J_K^{-1}A_K\widehat v)\cdot(J_KA_K^{-T}\widehat n_{\widehat F})\,d\widehat s=\widehat v\cdot\widehat n_{\widehat F}\,d\widehat s.$ Integrating over the corresponding facets proves the flux identity. [F1, F2, construct, algebra] ∎

## Commuting diagram

For smooth fields, the proved identity is represented by

```tikzcd
C^1(\overline{\widehat K};\mathbb R^d) \arrow[r,"\operatorname{div}"] \arrow[d,"\mathcal P_K"'] & C(\widehat K) \arrow[d,"J_K^{-1}(\cdot)\circ F_K^{-1}"] \\
C^1(\overline K;\mathbb R^d) \arrow[r,"\operatorname{div}"'] & C(K)
```

The top and bottom arrows are divergence, the left arrow is the contravariant Piola push-forward, and the right arrow is scalar pull-forward with the Jacobian factor. The proof above establishes the commutation algebraically; the diagram is only a record of the identity.
