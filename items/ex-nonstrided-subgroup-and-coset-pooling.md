---
id: ex-nonstrided-subgroup-and-coset-pooling
kind: example
title: "Non-strided, subgroup, and coset pooling on p4 features"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-pointwise-nonlinearity-and-pooling-on-group-features
  - def-p4-p4m-lattice-symmetry-groups
  - def-subgroup
  - thm-group-convolution-equivariance
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Taco S. Cohen and Max Welling, Group Equivariant Convolutional Networks"
      url: "https://arxiv.org/pdf/1602.07576"
      locator: "§6.3, subgroup and coset pooling, and Appendix A, pooling equivariance."
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning"
      url: "https://www.deeplearningbook.org/contents/convnets.html"
      locator: "Chapter 9 §9.3, non-strided pooling and downsampling."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Let $G=P_{C_4}$ be the p4 group and let $H=\{(0,\rho^j):j=0,1,2,3\}$ be its four-element rotation subgroup. For a scalar group feature map $F:G\to\mathbb R$, max pooling with $U=\{(0,I),(0,\rho)\}$ and no subsampling remains $G$-equivariant. Restricting $F$ to $H$ retains only $H$-equivariance. Left-coset pooling $Q_HF(gH)=\max_{h\in H}F(gh)$ has one value for each translation position: $(t,\rho^r)H=\{(t,\rho^{r+j}):j=0,1,2,3\}$, so the four orientation indices are pooled while the result remains equivariant on $G/H$. In the separate finite case $H=G$, $G/H$ has one element and the pooled value is invariant.

## Example references

[[def-pointwise-nonlinearity-and-pooling-on-group-features|pooling and subgroup operations]]

[[def-p4-p4m-lattice-symmetry-groups|the p4 group and its rotation subgroup]]

[[def-subgroup|subgroup identity and closure conditions]]

[[thm-group-convolution-equivariance|pooling and subgroup equivariance conclusions]]

[Cohen and Welling, “Group Equivariant Convolutional Networks,” §6.3 and Appendix A](https://arxiv.org/pdf/1602.07576)

[Goodfellow, Bengio, and Courville, *Deep Learning*, Chapter 9 §9.3](https://www.deeplearningbook.org/contents/convnets.html)

## Facts & Assumptions

**Given:** The p4 group, its rotation subgroup, and the pooling operators in the Example. Verify their equivariance and the quotient indexing.

[F1] [[def-pointwise-nonlinearity-and-pooling-on-group-features]]: Non-strided pooling is $(P_UF)(g)=\max_{u\in U}F(gu)$, subgroup sampling is restriction, and left-coset pooling is $(Q_HF)(gH)=\max_{h\in H}F(gh)$.

[F2] [[def-p4-p4m-lattice-symmetry-groups]]: p4 elements are pairs $(t,\rho^r)$ with product $(t,\rho^r)(s,\rho^q)=(t+\rho^rs,\rho^{r+q})$.

[F3] [[thm-group-convolution-equivariance]]: Non-strided pooling commutes with the left action, subgroup restriction preserves the subgroup action, and finite coset pooling is equivariant on the coset set.

[F4] [[def-subgroup]]: A subgroup contains the identity and is closed under the group operation and inverses.

## Verification

1.1 The set $U$ is finite and nonempty, so the non-strided max pool is defined; [F3] gives $P_U(L_aF)=L_a(P_UF)$ for every $a\in G$. [given, F1, F3]

1.2 The p4 multiplication in [F2] gives $(0,I)\in H$, $(0,\rho^j)(0,\rho^k)=(0,\rho^{j+k})\in H$, and $(0,\rho^j)^{-1}=(0,\rho^{-j})\in H$, so [F4] confirms $H\le G$. For $a,h\in H$, $a^{-1}h\in H$, and restricting $L_aF$ to $H$ equals applying the left $H$-action to $F|_H$. The theorem therefore retains exactly the subgroup equivariance claimed after restriction. [given, F2, F3, F4, algebra]

1.3 By the p4 pair product in [F2], $(t,\rho^r)H=\{(t,\rho^{r+j}):j=0,1,2,3\}$, so each left coset fixes $t$ and includes all four rotations. [F2, algebra]

2.1 The coset-pooling theorem [F3] makes $Q_HF$ equivariant on $G/H$. If $H=G$ is finite, there is one coset, and the induced left action on this singleton is the identity, so the pooled value is invariant. [given, F1, F3, step 1.3, algebra] ∎
