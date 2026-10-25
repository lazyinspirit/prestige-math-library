---
id: thm-an-additive-functor-preserves-finite-biproducts
kind: theorem
title: "An additive functor preserves finite biproducts"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-additive-functor, def-additive-category, thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation, prop-an-additive-functor-preserves-zero-morphisms]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3, Lemma 12.3.7"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

An additive functor between additive categories preserves finite biproducts.

## Facts & Assumptions

**Given:** An additive functor $F:\mathcal C\to\mathcal D$ between additive categories.

[L1] Additive categories are preadditive with finite biproducts ([[def-additive-category]]).

[L2] An additive functor preserves zero morphisms ([[prop-an-additive-functor-preserves-zero-morphisms]]).

[L3] In a semiadditive category, the identity-sum relation characterizes a biproduct from product data and the zero equations ([[thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation]]).

[L4] Additivity means the induced maps on hom-groups preserve sums ([[def-additive-functor]]).

## Proof

**Proof technique:** direct.

1.1 Let $X=A\oplus B$ in $\mathcal C$ with structure maps $i_A,i_B,p_A,p_B$, and let $Y=FA\oplus FB$ in $\mathcal D$ with injections $j_A,j_B$ and projections $q_A,q_B$. By [L1] and [L3], the source maps satisfy the zero equations and the identity-sum relation $i_Ap_A+i_Bp_B=1_X$. Applying $F$ preserves the zero equations by [L2] and the identity-sum relation by [L4], so $F(p_A)F(i_A)=1_{FA}$, $F(p_B)F(i_B)=1_{FB}$, $F(p_A)F(i_B)=0$, $F(p_B)F(i_A)=0$, and $F(i_A)F(p_A)+F(i_B)F(p_B)=1_{F(X)}$. [L1, L2, L3, L4]

1.2 Let $\alpha:F(X)\to Y$ be the unique morphism with $q_A\alpha=F(p_A)$ and $q_B\alpha=F(p_B)$, and let $\beta:Y\to F(X)$ be the unique morphism with $\beta j_A=F(i_A)$ and $\beta j_B=F(i_B)$. These exist because $Y$ is both a product and a coproduct by [L1]. [L1, construct]

1.3 Let $0$ be a zero object of $\mathcal C$. Then $1_0=0_{0,0}$, so [L2] and [L4] give $1_{F(0)}=F(1_0)=F(0_{0,0})=0_{F(0),F(0)}$. For any object $Z$ of $\mathcal D$ and morphisms $u:Z\to F(0)$ and $v:F(0)\to Z$, this implies $u=1_{F(0)}u=0$ and $v=v1_{F(0)}=0$. Since [L1] gives zero morphisms in $\mathcal D$, these are the unique morphisms to and from $F(0)$. Hence $F(0)$ is a zero object. [L1, L2, L4]

2.1 Since $Y$ is a coproduct, the equalities $q_A\alpha\beta j_A=1_{FA}=q_Aj_A$, $q_A\alpha\beta j_B=0=q_Aj_B$, $q_B\alpha\beta j_A=0=q_Bj_A$, and $q_B\alpha\beta j_B=1_{FB}=q_Bj_B$ force $q_A\alpha\beta=q_A$ and $q_B\alpha\beta=q_B$. Because $Y$ is also a product, this implies $\alpha\beta=1_Y$. On the other hand, step 1.1 gives $\beta\alpha=F(i_A)F(p_A)+F(i_B)F(p_B)=F(i_Ap_A+i_Bp_B)=1_{F(X)}$. So $\alpha$ and $\beta$ are inverse isomorphisms, and $F(X)$ is a biproduct of $FA$ and $FB$. [L1, L4, step 1.1, step 1.2]

3.1 Therefore $F$ preserves binary biproducts and the empty biproduct. By the binary-plus-empty characterization in [L1], it preserves all finite biproducts. [L1, step 2.1, step 1.3] ∎
