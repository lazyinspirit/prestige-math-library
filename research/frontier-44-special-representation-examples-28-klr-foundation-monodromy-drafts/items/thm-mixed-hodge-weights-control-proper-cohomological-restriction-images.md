---
id: thm-mixed-hodge-weights-control-proper-cohomological-restriction-images
kind: theorem
title: "Weights control restriction images into proper varieties"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures, thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree, lem-morphisms-of-mixed-hodge-structures-are-strict, def-axiom-of-choice]
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Statement

Assume AC. Let $U$ be smooth quasiprojective over $\mathbb C$, let $j:U\hookrightarrow X$ be any smooth projective compactification, and let $g:Y\to U$ be a morphism with $Y$ proper (possibly singular and reducible). Then, in every degree $n$,
$$\operatorname{im}(H^n(X,\mathbb Q)\xrightarrow{(jg)^*}H^n(Y,\mathbb Q))=\operatorname{im}(H^n(U,\mathbb Q)\xrightarrow{g^*}H^n(Y,\mathbb Q)).$$
Both images are pure Hodge substructures of weight $n$. This includes the restriction of a smooth projective total space to a proper singular fiber through an open subvariety, which is the exact use in de Cataldo–Migliorini Proposition 8.3.2.

## Facts & Assumptions

**Given:** $U,X,Y,g,n$ as in the Statement, with the inherited AC convention [[def-axiom-of-choice]].

[F1] Smooth-open logarithmic theory gives $W_{n-1}H^n(U)=0$ and $W_nH^n(U)=\operatorname{im}j^*$, for any smooth projective compactification ([[thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures]]).

[F2] Proper cohomology carries a rational mixed Hodge structure with $W_nH^n(Y)=H^n(Y)$, and pullback by $g$ is a mixed Hodge morphism ([[thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree]]). This supplier must include pullbacks from smooth open varieties into proper varieties, not only maps between proper varieties.

[F3] Every such morphism is $W$-strict and its image has induced mixed Hodge structure ([[lem-morphisms-of-mixed-hodge-structures-are-strict]]).

## Proof

1.1 By [F3], $g^*(W_nH^n(U))=\operatorname{im}g^*\cap W_nH^n(Y)$. The target weight bound [F2] makes this intersection $\operatorname{im}g^*$. By [F1] the left side is $g^*(\operatorname{im}j^*)=\operatorname{im}(g^*j^*)$. Thus the two asserted images agree as actual subspaces, without choosing a splitting of $W$ on $H^n(U)$. [F1, F2, F3, given, algebra]

2.1 Put $I=\operatorname{im}g^*$. Strictness gives $W_{n-1}I=g^*(W_{n-1}H^n(U))=0$, and the target bound gives $W_nI=I$. Hence the induced mixed Hodge structure on $I$ is pure of weight $n$. Both claims follow. [F1, F2, F3, step 1.1] ∎
## Source notes

Deligne III 8.2.6 with proof, read in full; it uses II 3.2.17 and III 8.2.4(iii),(iv). The locally expanded argument above avoids the source's compressed phrase that equality on associated graded implies equality: strictness identifies the actual image directly.
