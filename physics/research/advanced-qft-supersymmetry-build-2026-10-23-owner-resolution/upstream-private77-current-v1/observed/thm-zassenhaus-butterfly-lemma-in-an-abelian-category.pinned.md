---
id: thm-zassenhaus-butterfly-lemma-in-an-abelian-category
kind: theorem
title: "Zassenhaus butterfly lemma in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-subobject-lattice-of-an-abelian-category-is-modular, thm-second-isomorphism-theorem-in-an-abelian-category, def-composition-series-and-composition-factors-of-an-object, thm-third-isomorphism-theorem-in-an-abelian-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Statement

Let $A_0\le A_1$ and $B_0\le B_1$ be subobjects of an object $X$ in an abelian
category. Then there is a canonical isomorphism

$$\frac{A_0\vee(A_1\wedge B_1)}{A_0\vee(A_1\wedge B_0)}\;\cong\;\frac{(A_1\wedge B_1)\vee B_0}{(A_0\wedge B_1)\vee B_0}.$$

## Facts & Assumptions

**Given:** Subobjects $A_0\le A_1$ and $B_0\le B_1$ of an object $X$.

[L1] The subobject lattice of $X$ is modular ([[thm-the-subobject-lattice-of-an-abelian-category-is-modular]]).

[L2] For subobjects $U,V$ of a common object, one has $(U\vee V)/V\cong U/(U\wedge V)$ ([[thm-second-isomorphism-theorem-in-an-abelian-category]]).

[L3] Nested quotients satisfy the third isomorphism theorem ([[thm-third-isomorphism-theorem-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Put $M:=A_1\wedge B_1$, $U:=A_1\wedge B_0$, and $V:=A_0\wedge B_1$. Since $U\le M$, the second isomorphism theorem [L2] applied to $A_0$ and $M$ inside $A_0\vee M$ gives $$ \frac{A_0\vee M}{A_0\vee U}\cong \frac{M}{M\wedge(A_0\vee U)}. $$ By modularity [L1] inside the interval below $M$, $$ M\wedge(A_0\vee U)=(M\wedge A_0)\vee U=V\vee U. $$ So the left quotient is canonically isomorphic to $M/(V\vee U)$. [L1, L2, construct]

1.2 Similarly, since $V\le M$, the second isomorphism theorem [L2] applied to $M$ and $B_0$ inside $M\vee B_0$ gives $$ \frac{M\vee B_0}{V\vee B_0}\cong \frac{M}{M\wedge(V\vee B_0)}. $$ Again modularity yields $$ M\wedge(V\vee B_0)=V\vee(M\wedge B_0)=V\vee U. $$ So the right quotient is also canonically isomorphic to $M/(V\vee U)$. [L1, L2, construct]

2.1 The two quotients in steps 1.1 and 1.2 are canonically isomorphic to the same quotient of $M$, hence to each other. The nested-quotient compatibility of [L3] identifies these isomorphisms with the displayed butterfly quotient comparison. [L3, step 1.1, step 1.2] ∎
