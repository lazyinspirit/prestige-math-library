---
id: lem-groups-of-order-pq-have-a-normal-q-subgroup
kind: lemma
title: "If $p<q$ are primes and $|G|=pq$, then $G$ has a normal subgroup of order $q$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchys-theorem-for-finite-groups, thm-left-coset-action-and-its-kernel, lem-core-is-largest-normal-subgroup-contained, lem-order-characterisation, thm-number-of-bijections-of-a-finite-set, def-factorial-and-falling-factorial, thm-lagrange, thm-image-subgroup-and-kernel-normal, thm-first-isomorphism-theorem-groups, thm-euclids-lemma, cor-order-of-a-quotient-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

Let $p<q$ be primes. Every group $G$ of order $pq$ has a normal subgroup of order $q$.

## Facts & Assumptions

**Given:** Primes $p<q$ and a group $G$ with $|G|=pq$.

[L1] If a prime divides the order of a finite group, the group has an element of that prime order ([[thm-cauchys-theorem-for-finite-groups]]).

[L2] The left-coset action of $G$ on $G/Q$ is the homomorphism $\rho:G\to\operatorname{Sym}(G/Q)$ with $\ker\rho=\operatorname{Core}_G(Q)$ ([[thm-left-coset-action-and-its-kernel]]).

[L8] The core $\operatorname{Core}_G(Q)$ is a normal subgroup of $G$ satisfying $\operatorname{Core}_G(Q)\le Q$ ([[lem-core-is-largest-normal-subgroup-contained]]).

[L9] If $g$ has order $q$, the powers $g^0,\ldots,g^{q-1}$ are pairwise distinct and exhaust $\langle g\rangle$, so $|\langle g\rangle|=q$ ([[lem-order-characterisation]]).

[L3] Lagrange's theorem gives $|G|=[G:H]|H|$ for a subgroup $H$ of a finite group ([[thm-lagrange]]).

[L4] A set of $p$ elements has $p!$ bijections, where $p!=1\cdot2\cdots p$ ([[thm-number-of-bijections-of-a-finite-set]], [[def-factorial-and-falling-factorial]]).

[L5] The image of a homomorphism is a subgroup and its kernel is normal; moreover the first isomorphism theorem identifies the quotient by the kernel with the image ([[thm-image-subgroup-and-kernel-normal]], [[thm-first-isomorphism-theorem-groups]]).

[L6] For finite $G$ and normal $K$, $|G/K|=|G|/|K|$ ([[cor-order-of-a-quotient-group]]).

[L7] If a prime divides a product, it divides one of the factors ([[thm-euclids-lemma]]).

## Proof

**Proof technique:** direct.

1.1 Since $q\mid pq=|G|$, [L1] gives an element $g$ of order $q$; by [L9] the subgroup $Q=\langle g\rangle$ has order $q$. Lagrange gives $[G:Q]=p$. Let $\rho:G\to S_p$ be the action on the $p$ left cosets and put $K=\ker\rho=\operatorname{Core}_G(Q)$ by [L2]. Then $K\trianglelefteq G$ and $K\le Q$ by [L8]. [L1, L2, L3, L8, L9]

1.2 The image $\rho(G)$ is a subgroup of $S_p$, so its order divides $p!$ by [L3] and [L4]. Since $q>p$, none of the factors $1,\ldots,p$ is divisible by $q$; repeated use of [L7] shows $q\nmid p!$, hence $q\nmid|\rho(G)|$. [L3, L4, L7]

1.3 By [L5] and [L6],

$$pq=|G|=|K|\,|\rho(G)|.$$

Since $q$ is prime and does not divide the second factor, [L7] gives $q\mid|K|$. But $K\le Q$ and $|Q|=q$, so [L3] forces $K=Q$. [step 1.1, step 1.2, L3, L5, L6, L7]

2.1 Therefore $Q=K$ is normal in $G$ and has order $q$. [step 1.3] ∎
