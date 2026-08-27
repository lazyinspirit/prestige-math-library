---
id: thm-morphisms-between-finite-biproducts-correspond-to-matrices
kind: theorem
title: "Morphisms between finite biproducts correspond to matrices"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-additive-category, thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation, prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Merlin Christ, Tobias Dyckerhoff, and Tashi Walde, Lax Additivity, matrix-calculus discussion after Lemma 2.4"
      url: "https://www.edit.fis.uni-hamburg.de/ws/files/59475679/2402.12251v1.pdf"
pipeline_run: frontier-20
---

## Statement

Let $\mathcal C$ be additive, let $A=\bigoplus_{i=1}^m A_i$, and let
$B=\bigoplus_{j=1}^n B_j$. Then

$$\mathcal C(A,B)\cong\prod_{i=1}^m\prod_{j=1}^n\mathcal C(A_i,B_j)$$

by the map sending $f:A\to B$ to the matrix of entries $f_{ji}:=p_jfi_i$. This
is an isomorphism of abelian groups.

## Facts & Assumptions

**Given:** An additive category with finite biproducts $A=\bigoplus_iA_i$ and
$B=\bigoplus_jB_j$.

[L1] An additive category is preadditive, so hom-sets are abelian groups with
finite sums ([[def-additive-category]]).

[L2] On a biproduct, the identity is the sum of injection-projection terms
([[thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation]]).

[L3] Finite biproducts are canonically associative and commutative, so the
bracketing of the finite sums does not matter
([[prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Define $\Phi:\mathcal C(A,B)\to\prod_{i,j}\mathcal C(A_i,B_j)$ by $\Phi(f)=(p_jfi_i)_{j,i}$. This is a group homomorphism because each $p_j(-)i_i$ is additive by bilinearity in [L1]. [L1]

1.2 For a matrix $(u_{ji})$ of morphisms $u_{ji}:A_i\to B_j$, define $\Psi((u_{ji})):=\sum_{i,j}i_ju_{ji}p_i:A\to B$. This finite sum is legitimate by [L1] and [L3]. [L1, L3, construct]

2.1 Using the zero equations and [L2], one gets $p_k\Psi((u_{ji}))i_\ell=\sum_{i,j}p_ki_ju_{ji}p_ii_\ell=u_{k\ell}$. Hence $\Phi\Psi$ is the identity on the matrix product. [L1, L2, step 1.2, algebra]

2.2 For $f:A\to B$, the identity-sum relation on both source and target gives $f=1_Bf1_A=\left(\sum_ji_jp_j\right)f\left(\sum_ii_ip_i\right)=\sum_{i,j}i_j(p_jfi_i)p_i=\Psi(\Phi(f))$. So $\Psi\Phi=1_{\mathcal C(A,B)}$. [L1, L2, step 1.2]

3.1 Thus $\Phi$ and $\Psi$ are inverse group homomorphisms, giving the asserted matrix description of $\mathcal C(A,B)$. [step 1.1, step 2.1, step 2.2] ∎
