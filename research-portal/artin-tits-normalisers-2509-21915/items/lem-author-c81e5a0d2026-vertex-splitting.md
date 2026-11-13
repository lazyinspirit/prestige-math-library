---
id: lem-author-c81e5a0d2026-vertex-splitting
kind: lemma
title: Unique conjugator factorization restricts to a normalizer splitting
status: published
domain: mathematics
origin: pipeline
deps:
  - def-small-groupoid-interface-artin-tits-prerequisites
  - math:def-group
  - math:def-subgroup
  - math:def-normalizer-of-a-subgroup
  - math:def-normal-subgroup
  - math:def-internal-semidirect-product
  - math:def-action-by-automorphisms
  - math:def-external-semidirect-product
dependency_roles:
  def-small-groupoid-interface-artin-tits-prerequisites: mathematical-premise
  math:def-group: mathematical-premise
  math:def-subgroup: mathematical-premise
  math:def-normalizer-of-a-subgroup: mathematical-premise
  math:def-normal-subgroup: mathematical-premise
  math:def-internal-semidirect-product: mathematical-premise
  math:def-action-by-automorphisms: mathematical-premise
  math:def-external-semidirect-product: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $A$ be a group with specified subgroups $A_I$. Form the groupoid $\mathcal C$ with arrows $(I,g,J)$ satisfying $g^{-1}A_Ig=A_J$, and product $(I,g,J)(J,h,K)=(I,gh,K)$. Let $\mathcal P$ have only vertex arrows $A_I$, and let $\mathcal R\subseteq\mathcal C$ be a wide subgroupoid. Suppose every arrow $g:I\to J$ has a unique factorization $g=pr$ with $p\in A_I$ and $r\in\mathcal R(I,J)$. Then $\mathcal C=\mathcal P\rtimes\mathcal R$ in the internal sense, and $N_A(A_I)=A_I\rtimes\mathcal R_I$. Explicitly, every normalizer element has a unique such factorization, $A_I\cap\mathcal R_I=\{1\}$ and the action in the usual product coordinates is $\alpha_r(q)=rqr^{-1}$.

## Facts & Assumptions

[F1] The set-sized groupoid axioms, tagged arrows, vertex groups and left-to-right product are specified in [[def-small-groupoid-interface-artin-tits-prerequisites]].

[F2] A wide subgroupoid $\mathcal R\subseteq\mathcal C$ has all the objects of $\mathcal C$, contains their identity arrows, and is closed under composable products and inverses, with these operations inherited from $\mathcal C$. This is an inline definition using the groupoid structure in [F1]. The unique factorization hypothesis is an assumption of this lemma, to be supplied separately in applications. The internal groupoid semidirect notation means unique factorization and $A_Ir=rA_J$ for every $r:I\to J$.

[F3] Groups and subgroups use [[math:def-group]] and [[math:def-subgroup]]. The normalizer is $N_A(H)=\{g\in A:gHg^{-1}=H\}$ as in [[math:def-normalizer-of-a-subgroup]].

[F4] Normality means invariance under every conjugation by the ambient group, as in [[math:def-normal-subgroup]]. The internal group semidirect product $G=N\rtimes H$ means $N\trianglelefteq G$, $G=NH$ and $N\cap H=\{1\}$, as in [[math:def-internal-semidirect-product]].

[F5] An action by automorphisms satisfies $\alpha_{rs}=\alpha_r\circ\alpha_s$ and $\alpha_1=\operatorname{id}$, as in [[math:def-action-by-automorphisms]]. For such an action, the external semidirect product has coordinates $(p,r)$ with multiplication $(p,r)(q,s)=(p\alpha_r(q),rs)$, as in [[math:def-external-semidirect-product]].

## Proof

**Given:** The group, subgroup family, wide subgroupoid and assumed unique factorizations.

**Goal:** Prove the groupoid and normalizer semidirect conclusions.

1.1 If $g:I\to J$ and $h:J\to K$, then $(gh)^{-1}A_I(gh)=h^{-1}(g^{-1}A_Ig)h=A_K$. Identity arrows and inverse labels $g^{-1}$ have the required endpoints. Associativity follows from the group multiplication. Thus the tagged arrows form the groupoid in [F1]. At $I$, the arrow condition $g^{-1}A_Ig=A_I$ is equivalent to $gA_Ig^{-1}=A_I$, so its vertex group is $N_A(A_I)$ under the identification $(I,g,I)\mapsto g$. Also $\mathcal P$ is a subgroupoid because each $A_I$ is a subgroup. [F1, F3, algebra]

2.1 An arrow $r:I\to J$ satisfies $r^{-1}A_Ir=A_J$, equivalently $A_Ir=rA_J$. Along with the assumed unique factorization this is exactly the specified internal groupoid semidirect property. By the closure and identity requirements in [F2], $\mathcal R_I=\mathcal R(I,I)$ is a subgroup of $N_A(A_I)$. At a vertex, factorization gives $N_A(A_I)=A_I\mathcal R_I$. An element common to $A_I$ and $\mathcal R_I$ has the two factorizations $x\cdot1$ and $1\cdot x$, so uniqueness implies $x=1$. Finally $A_I$ is normal in $N_A(A_I)$ by the normalizer definition. Hence these are the internal group semidirect conditions of [F4]. [F2, F3, F4, step 1.1]

3.1 For $r\in\mathcal R_I$, conjugation $\alpha_r:q\mapsto rqr^{-1}$ preserves $A_I$, preserves multiplication, and has inverse conjugation by $r^{-1}$, so is an automorphism. Also $\alpha_{rr'}=\alpha_r\circ\alpha_{r'}$ and $\alpha_1=\operatorname{id}_{A_I}$, giving the action in [F5]. The map $(p,r)\mapsto pr$ is bijective by factorization and satisfies $(pr)(qs)=p(rqr^{-1})rs$, exactly the external semidirect group law of [F5]. This proves all vertex claims. [F3, F5, step 2.1, algebra] ∎
