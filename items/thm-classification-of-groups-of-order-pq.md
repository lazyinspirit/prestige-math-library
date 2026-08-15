---
id: thm-classification-of-groups-of-order-pq
kind: theorem
title: "Classification of groups of order $pq$ for primes $p<q$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-groups-of-order-pq-have-a-normal-q-subgroup, lem-order-p-actions-on-a-cyclic-q-group, thm-cauchys-theorem-for-finite-groups, cor-prime-order-group-is-cyclic, thm-internal-external-semidirect-product-equivalence, lem-product-with-normal-subgroup, lem-group-power-laws, lem-order-characterisation, lem-coprime-divides-product, thm-lagrange, thm-classification-of-cyclic-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

Let $p<q$ be primes.

- If $p\nmid(q-1)$, every group of order $pq$ is cyclic.
- If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$.

## Facts & Assumptions

**Given:** Primes $p<q$ and a group $G$ of order $pq$.

[L1] The group $G$ has a normal subgroup $Q$ of order $q$ ([[lem-groups-of-order-pq-have-a-normal-q-subgroup]]).

[L2] Cauchy's theorem supplies a subgroup $P$ of order $p$, and every prime-order group is cyclic ([[thm-cauchys-theorem-for-finite-groups]], [[cor-prime-order-group-is-cyclic]]).

[L3] A normal factor and a complement with trivial intersection realise an external semidirect product ([[thm-internal-external-semidirect-product-equivalence]]).

[L4] Nontrivial actions of $C_p$ on $C_q$ exist exactly when $p\mid(q-1)$ and give a unique semidirect-product type ([[lem-order-p-actions-on-a-cyclic-q-group]]).

[L5] A product with a normal subgroup is a subgroup; group powers obey the addition law; and $x^m=1$ exactly when the order of $x$ divides $m$ ([[lem-product-with-normal-subgroup]], [[lem-group-power-laws]], [[lem-order-characterisation]]).

[L6] If two coprime integers divide an integer, then their product divides it ([[lem-coprime-divides-product]]).

[L7] The order of a subgroup divides the order of a finite group ([[thm-lagrange]]).

[L8] Finite cyclic groups are determined up to isomorphism by their order ([[thm-classification-of-cyclic-groups]]).

## Proof

**Proof technique:** cases.

1.1 Choose $Q$ and $P$ as in [L1] and [L2]. By [L7], the order of $Q\cap P$ divides both primes, so the intersection is trivial. Since $Q$ is normal, $QP$ is a subgroup by [L5]. Its cosets $xP$ for $x\in Q$ are distinct because $xP=x'P$ would give $x'^{-1}x\in Q\cap P$, and each has $p$ elements. Thus $|QP|=pq=|G|$, so $G=QP$. [L1, L2, L5, L7, algebra]

2.1 Both $Q$ and $P$ are cyclic by [L2], and [L3] gives $G\cong C_q\rtimes C_p$. [step 1.1, L2, L3]

3.1 [assume-case first] Suppose the action is trivial. Let $x,y$ generate the commuting factors of orders $q,p$. If $(xy)^m=1$, then $x^m=y^{-m}$ belongs to their trivial intersection, so $q\mid m$ and $p\mid m$ by [L5]. Since $p,q$ are coprime, [L6] gives $pq\mid m$. Hence $xy$ has order $pq$, and $G$ is cyclic. [step 2.1, L5, L6]

3.2 [assume-case second] Suppose the action is nontrivial. Then [L4] says that this is possible exactly when $p\mid(q-1)$ and that all such products are isomorphic. The product is nonabelian because some element of $P$ acts nontrivially on $Q$. [step 2.1, L4]

4.1 [cases-exhaustive] If $p\nmid(q-1)$ only step 3.1 occurs. If $p\mid(q-1)$, steps 3.1 and 3.2 give two types, distinguished by commutativity; [L8] gives uniqueness of the cyclic type and [L4] gives uniqueness of the nonabelian type. [step 3.1, step 3.2, L4, L8] ∎
