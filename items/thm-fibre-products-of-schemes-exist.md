---
id: "thm-fibre-products-of-schemes-exist"
kind: "theorem"
title: "Existence of all scheme fibre products"
status: "draft"
origin: "pipeline"
deps: ["thm-affine-fibre-product-tensor-ring", "lem-fibre-products-glue-over-open-covers"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil Theorem 10.1.1, complete proof; Stacks 26.17.4"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

Every diagram $X\to S\leftarrow Y$ of schemes has a fibre product. Given an affine cover $S=\bigcup_i\operatorname{Spec}A_i$ and affine covers $f^{-1}(\operatorname{Spec}A_i)=\bigcup_j\operatorname{Spec}B_{ij}$ and $g^{-1}(\operatorname{Spec}A_i)=\bigcup_k\operatorname{Spec}C_{ik}$, the product has open affine cover
$$\operatorname{Spec}(B_{ij}\otimes_{A_i}C_{ik}).$$

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] Let $A\to B$ and $A\to C$ be maps of commutative unital rings, allowing the zero ring. In the category of all schemes, $$\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C).$$ The projections correspond to $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$. ([[thm-affine-fibre-product-tensor-ring]])

[F2] Let $X\to S\leftarrow Y$ be given. If $Y=\bigcup_iY_i$ is an open cover and every $P_i=X\times_S Y_i$ exists, these products glue along their inverse images over $Y_i\cap Y_j$ to a fibre product $X\times_S Y$. There is also a base-cover version: if $S=\bigcup_iS_i$ and $f^{-1}(S_i)\times_{S_i}g^{-1}(S_i)$ exists for every $i$, these products glue to $X\times_S Y$. No overlap is required to be affine. ([[lem-fibre-products-glue-over-open-covers]])

## Proof

1.1 When $X,S$ are affine, cover $Y$ by affines. Each local product exists by F1, so F2 glues them to the desired product, with the displayed affine charts. [given, F1, F2]

2.1 When only $S$ is affine, cover $X$ by affine opens. The preceding construction gives each product of one of these opens with $Y$. Interchanging the roles of the two projections in F2 glues them. This interchange is justified directly by the symmetric compatible-pair condition, without needing a later associativity result. [F2, step 1.1]

3.1 For arbitrary $S$, apply the preceding result over each affine $\operatorname{Spec}A_i$, and then use the base-cover clause of F2. Its overlap construction makes the stated tensor spectra an open cover. Empty schemes and zero tensor rings give empty charts, and the empty-base case forces both factors to be empty. [F1, F2, step 2.1] ∎
