---
id: lem-order-p-actions-on-a-cyclic-q-group
kind: lemma
title: ' For primes $p<q$, nontrivial actions of $C_p$ on $C_q$ exist exactly when $p\mid(q-1)$ and are unique up to automorphisms'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-automorphisms-of-a-finite-cyclic-group, cor-totient-at-one-and-at-a-prime, def-unit-group-modulo-n-and-euler-totient, thm-cauchys-theorem-for-finite-groups, lem-power-congruence-root-bound-modulo-a-prime, lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products, thm-group-homomorphism-injective-iff-trivial-kernel, thm-lagrange, cor-prime-order-group-is-cyclic]
justified_by: []
aliases: []
landmark: false
proof_strategy: iff
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

Let $p<q$ be primes. A nontrivial action $C_p\to\operatorname{Aut}(C_q)$ exists if and only if $p\mid(q-1)$. When it exists, all nontrivial such actions give isomorphic semidirect products $C_q\rtimes C_p$.

## Facts & Assumptions

**Given:** Primes $p<q$.

[L1] $\operatorname{Aut}(C_q)\cong(\mathbb Z/q)^×$ ([[thm-automorphisms-of-a-finite-cyclic-group]]).

[L2] For prime $q$, $\varphi(q)=q-1$ ([[cor-totient-at-one-and-at-a-prime]]), and $\varphi(n)=\bigl|(\mathbb Z/n)^\times\bigr|$ ([[def-unit-group-modulo-n-and-euler-totient]]); together these give $\bigl|(\mathbb Z/q)^\times\bigr|=q-1$.

[L3] A prime divisor of a finite group order occurs as the order of an element ([[thm-cauchys-theorem-for-finite-groups]]).

[L4] The congruence $x^p\equiv1\pmod q$ has at most $p$ solution classes ([[lem-power-congruence-root-bound-modulo-a-prime]]).

[L5] A homomorphism is injective exactly when its kernel is trivial ([[thm-group-homomorphism-injective-iff-trivial-kernel]]).

[L6] The order of a subgroup divides the order of a finite group ([[thm-lagrange]]).

[L7] Compatible changes by automorphisms of the two factors give isomorphic semidirect products ([[lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products]]).

[L8] Every nonidentity element of a group of prime order generates that group ([[cor-prime-order-group-is-cyclic]]).

## Proof

**Proof technique:** iff.

1.1 [forward] A nontrivial homomorphism $C_p\to\operatorname{Aut}(C_q)$ has a proper kernel. By [L6], its kernel has order dividing $p$, so it is trivial. The homomorphism is therefore injective by [L5] and its image has order $p$. [L5, L6, algebra]

1.2 [reverse] If $p\mid(q-1)$, [L2] and [L3] give an element of order $p$ in $(\mathbb Z/q)^×$. Sending a generator of $C_p$ to this element defines a nontrivial action. [L1, L2, L3]

1.3 Suppose $A$ and $B$ are two distinct subgroups of order $p$ in $(\mathbb Z/q)^\times$. Their intersection is trivial, because [L8] says a nonidentity element in the intersection would generate each prime-order group. Thus $A\cup B$ contains $2p-1>p$ distinct roots of $x^p=1$, contradicting [L4]. There is consequently a unique subgroup of order $p$. [L4, L8, algebra]

2.1 By [L1], the target is $(\mathbb Z/q)^\times$, of order $q-1$ by [L2]. Its image has order $p$ by step 1.1, so [L6] gives $p\mid(q-1)$. [step 1.1, L1, L2, L6]

3.1 Any two nontrivial actions $\alpha,\beta$ are isomorphisms from $C_p$ onto this unique subgroup. Hence $v=\beta^{-1}\alpha$ is an automorphism of $C_p$ and $\beta_{v(h)}=\alpha_h$ for every $h$. Taking the automorphism of $C_q$ to be the identity, the compatibility in [L7] gives isomorphic semidirect products. [step 1.1, step 1.3, L7, algebra] ∎
