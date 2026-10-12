---
id: thm-mixed-hodge-weights-control-proper-cohomological-restriction-images
kind: theorem
title: "Weights control restriction images into proper varieties"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 22
deps: [def-axiom-of-choice, def-rational-mixed-hodge-structure,
       lem-morphisms-of-mixed-hodge-structures-are-strict,
       thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures,
       thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57, (3.2.16)-(3.2.18)"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
      locator: "printed pp. 40-44: the image of the compactification pullback is the weight-n part, and the images of the two pullbacks into a proper variety coincide"
    - title: "Pierre Deligne, Theorie de Hodge III, Publ. Math. IHES 44 (1974) 5-77, (8.2.6)"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
      locator: "printed p. 39: equality of the images for a proper possibly singular Y through a smooth open subvariety"
---

## Statement

Assume AC. Let $U$ be smooth quasiprojective over $\mathbb C$, let
$j:U\hookrightarrow X$ be any smooth projective compactification, and let
$g:Y\to U$ be a morphism with $Y$ proper (possibly singular and reducible).
Then, in every degree $n$,
$$\operatorname{im}(H^n(X,\mathbb Q)\xrightarrow{(jg)^*}H^n(Y,\mathbb Q))=\operatorname{im}(H^n(U,\mathbb Q)\xrightarrow{g^*}H^n(Y,\mathbb Q)).$$
Both images are pure Hodge substructures of weight $n$. This includes the
restriction of a smooth projective total space to a proper singular fiber through
an open subvariety, which is the exact use in de Cataldo-Migliorini
Proposition 8.3.2.

## Facts & Assumptions

**Given:** AC, a smooth quasiprojective $U$ with a smooth projective compactification $j:U\hookrightarrow X$, and a morphism $g:Y\to U$ with $Y$ proper.

[F1] [[thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures]]: the logarithmic mixed Hodge structure on $H^n(U,\mathbb Q)$ has weights at least $n$ and satisfies $W_nH^n(U,\mathbb Q)=\operatorname{im}(j^*:H^n(X,\mathbb Q)\to H^n(U,\mathbb Q))$ for every smooth projective compactification, independently of the chosen $j$; for a non-SNC boundary the logarithmic theorem proves the same actual image formula by SNC domination and its modification-image supplier.

[F2] [[thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree]]: the proper variety $Y$ carries a functorial mixed Hodge structure on each $H^n(Y,\mathbb Q)$ with $W_nH^n(Y,\mathbb Q)=H^n(Y,\mathbb Q)$, and the pullback $g^*:H^n(U)\to H^n(Y)$ for the actual morphism $g:Y\to U$ with proper $Y$ and smooth quasiprojective $U$ is a mixed Hodge morphism for the logarithmic structure on the source.

[F3] [[lem-morphisms-of-mixed-hodge-structures-are-strict]] and [[def-rational-mixed-hodge-structure]]: a mixed Hodge morphism $f$ is $W$-strict, so $f(W_a)=f(H)\cap W_aK$ for every $a$; its image with the induced filtration is a mixed Hodge structure; and a morphism from a structure of weights at least $n$ to a structure of weights at most $n$ has pure image of weight $n$.

[F4] [[def-axiom-of-choice]]: the standing hypothesis, inherited from the two cited theorems.

## Proof

1.1 By [F3] applied to the mixed Hodge morphism $g^*$ and the strictness identity $g^*(W_nH^n(U))=\operatorname{im}g^*\cap W_nH^n(Y)$, the target weight bound $W_nH^n(Y)=H^n(Y)$ of [F2] reduces the right-hand side to $\operatorname{im}g^*$; by [F1] the image of $W_nH^n(U)$ under $g^*$ is $g^*(\operatorname{im}j^*)=\operatorname{im}(g^*j^*)=\operatorname{im}((jg)^*)$. Hence the two asserted images agree as actual subspaces of $H^n(Y,\mathbb Q)$, without choosing a splitting of the weight filtration on $H^n(U,\mathbb Q)$. [F1, F2, F3, given, algebra]

2.1 Put $I=\operatorname{im}g^*$. Strictness gives $W_{n-1}I=g^*(W_{n-1}H^n(U))$, and by [F1] the source has weights at least $n$, so $W_{n-1}I=0$; the target bound gives $W_nI=I$. Hence the induced mixed Hodge structure on $I$ is pure of weight $n$, and by step 1.1 the image of $(jg)^*$ is the same pure substructure. [F1, F2, F3, step 1.1, algebra]

3.1 Boundaries and Choice accounting. If $U=\varnothing$ or $Y=\varnothing$ all groups vanish and the claim is vacuous; the degree $n=0$ case gives weight-zero images by the same strictness argument; the case $U=X$ has $j=\mathrm{id}$ and $W_nH^n(U)=H^n(U)$, so both images are the full image of $g^*$, consistent with the statement; and $Y$ smooth or reduced is not required, the target bound being the only hypothesis on the target. The Axiom of Choice [F4] is inherited from [F1] and [F2]; no selection is made in this argument. [F1, F2, F4, given, cases: empty zero one degenerate endpoints] ∎

## Source notes

Deligne III (8.2.6), proved from II (3.2.17) and III (8.2.4), is the source;
the locally expanded argument avoids the compressed slogan that equality on
associated graded pieces implies equality of images: strictness identifies the
actual image with the intersection of the target weight filtration, and the
target has weights at most $n$ in degrees handled here.
