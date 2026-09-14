---
id: lem-feferman-tail-complement-automorphism
kind: lemma
title: The tail-complement automorphism fixes finitely supported names
status: published
origin: pipeline
deps: [def-feferman-tail-flip-definability-model, lem-symmetry-lemma-for-forcing-automorphisms]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Solomon Feferman, Some applications of the notions of forcing and generic sets, proof of Theorem 4.12, printed pp. 343–344", url: "https://bibliotekanauki.pl/articles/1381977.pdf"}
    - {title: "Eleftherios Tachtsis, On the Existence of Free Ultrafilters on omega and on Russell-sets in ZF, analogous tail-flip automorphism, pp. 5–7", url: "https://www.impan.pl/shop/publication/transaction/download/product/91097"}
---

## Statement

Let $\dot x$ be an HS name in the tail-flip system, and choose $m<\omega$
with $H_m\subseteq\operatorname{sym}(\dot x)$. Let
$Q\in\operatorname{Add}(\omega,\omega)$ be a finite condition and let
$r\ge m$. There is $k_0<\omega$ such that the automorphism which fixes every
coordinate other than $r$ and flips $S_r(k)$ for every $k\ge k_0$ fixes both
$Q$ and $\dot x$, while sending $S_r$ to its complement modulo the finite
initial segment $k_0$.

## Facts & Assumptions

**Given:** The HS name $\dot x$, support bound $m$, finite condition $Q$, and coordinate $r\ge m$.

[F1] [[def-feferman-tail-flip-definability-model]] defines the ground-model bit-flip group, the subgroups $H_m$, their action on coordinate Cohen reals, and the finite-support property of each HS name.

[F2] [[lem-symmetry-lemma-for-forcing-automorphisms]] transports forced formulas and their names under the constructed automorphism.

## Proof

**Proof technique:** direct construction of a tail flip inside the supporting subgroup.

1.1 The set $D=\{k:(r,k)\in\operatorname{dom}(Q)\}$ is finite. Let $k_0=0$ if $D=\varnothing$, and otherwise let $k_0=1+\max D$. Define $a\in(2^{\omega\times\omega})^V$ by $a(i,k)=1$ exactly when $i=r$ and $k\ge k_0$. By F1, $a$ induces an order automorphism $\pi_a$ of the forcing. [F1, construct]

2.1 No point of $\operatorname{dom}(Q)$ belongs to the support of $a$, so $\pi_aQ=Q$. Because $r\ge m$, the flip $a$ lies in $H_m$. The support hypothesis therefore gives $\pi_a\dot x=\dot x$. F2 then transports any forced formula containing $\dot x$ while leaving both its condition and that name fixed. [F1, F2, step 1.1]

2.2 We have $\pi_aS_i=S_i$ for $i\ne r$, while $\pi_aS_r=S_r\mathbin{\triangle}\{k:k\ge k_0\}$. Thus membership is reversed at every $k\ge k_0$ and preserved below $k_0$, so the following exact symmetric-difference identity holds. [F1, step 1.1]

$$\pi_aS_r\mathbin{\triangle}(\omega\setminus S_r)=k_0.$$

The right side is the finite von Neumann initial segment.

3.1 The flip set is an infinite tail; only its intersection with the finite domain of $Q$ had to be empty. Replacing it by a finite flip would preserve membership in every free ultrafilter under finite modification and would not give step 2.2. The construction takes the maximum of one finite set and uses no Choice. [step 1.1, step 2.2] ∎
