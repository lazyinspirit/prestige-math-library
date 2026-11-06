---
id: lem-gts-finite-nilpotent-hodge-transfer-and-length-equality
kind: lemma
title: Finite nilpotent transfer and exact cohomology dimension bounds
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
proof_strategy: direct
deps:
  - def-complex-homotopy-and-contractibility-in-an-additive-category
dependency_roles:
  def-complex-homotopy-and-contractibility-in-an-additive-category: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Marius Crainic, On the perturbation lemma, and deformations
      url: https://arxiv.org/pdf/math/0403266v1
      locator: "§§2.1–2.4 and §3.2, PDF/printed pp. 1–4: perturbation lemma and special deformation retracts; the opposite homotopy sign and finite nilpotent specialization are proved locally below"
dependency_level: 0
---

## Statement

Let $(C^\bullet,d)$ be a bounded complex of complex vector spaces. Suppose a finite-dimensional graded complex vector space $H^\bullet$ and maps $i:H\to C$, $p:C\to H$, $h:C^\bullet\to C^{\bullet-1}$ satisfy
$$di=0,\quad pd=0,\quad pi=1,\quad dh+hd=1-ip,\quad h^2=hi=ph=0.$$
Let $A$ be a finite-dimensional commutative local complex Artin algebra with residue field $\mathbb C$, nilpotent maximal ideal $\mathfrak m$, and $\ell=\dim_{\mathbb C}A$. Extend these maps $A$-linearly. Let $\delta$ be an $A$-linear degree-one map with image in $\mathfrak m(C\otimes A)$ such that $D=d+\delta$ obeys $D^2=0$. Put
$$Q=\delta(1+h\delta)^{-1}=(1+\delta h)^{-1}\delta,\qquad d_H=pQi,$$
$$i'=i-hQi,\qquad p'=p-pQh,\qquad h'=h-hQh.$$
Every inverse here is its terminating geometric series. These maps give a chain homotopy equivalence between $(C\otimes A,D)$ and the bounded finite free complex $(H\otimes A,d_H)$, with
$$d_H^2=0,\quad Di'=i'd_H,\quad p'D=d_Hp',\quad p'i'=1,\quad Dh'+h'D=1-i'p'.$$
The induced differential $d_H$ has coefficients in $\mathfrak m$. In every degree $q$,
$$\dim_{\mathbb C}H^q(C\otimes A,D)=\ell\dim_{\mathbb C}H^q-\dim_{\mathbb C}\operatorname{im}d_H^q-\dim_{\mathbb C}\operatorname{im}d_H^{q-1}\le\ell\dim_{\mathbb C}H^q.$$
Equality in all degrees holds if and only if $d_H=0$. In this case the cohomology is $A$-free with its central reduction identified by $p,i$, and its natural base-change map is an isomorphism for every homomorphism to another local complex Artin algebra with residue $\mathbb C$. The construction itself commutes with these base changes even when $d_H$ is not zero.

## Statement references

[[def-complex-homotopy-and-contractibility-in-an-additive-category]]

[Crainic, Sections2–3](https://arxiv.org/pdf/math/0403266v1)

## Facts & Assumptions

**Given:** Exactly the algebraic data and identities in the Statement. The displayed formula uses $H^q$ on the right for the degree-$q$ component of the graded vector space $H$, not a second cohomology operation on it.

[F1] A cochain homotopy from the identity to $ip$ means $1-ip=dh+hd$; mutually inverse chain maps up to homotopy induce inverse cohomology maps. [[def-complex-homotopy-and-contractibility-in-an-additive-category]]

## Proof

1.1 Since each factor $\delta$ increases the $\mathfrak m$-adic order, $(\delta h)^N=(h\delta)^N=0$ for sufficiently large $N$. Both inverse series in the Statement are therefore finite. Multiplying them out gives $Q=\delta-\delta hQ=\delta-Qh\delta$. Since $D^2=0$, $d\delta+\delta d+\delta^2=0$. To obtain the needed cancellation identity, multiply $dQ+Qd+QipQ$ on the left by $1+\delta h$ and on the right by $1+h\delta$. Replacing $(1+\delta h)Q=\delta=Q(1+h\delta)$, the result is $(1+\delta h)d\delta+\delta d(1+h\delta)+\delta ip\delta=d\delta+\delta d+\delta(hd+dh+ip)\delta=d\delta+\delta d+\delta^2=0$. The multipliers are invertible, so $dQ+Qd+QipQ=0$. [given, algebra]

2.1 Apply $p$ on the left and $i$ on the right to the last identity to get $(pQi)^2=0$, using $pd=di=0$. Substituting $i'=i-hQi$ into $Di'-i'd_H$, using $dh=1-ip-hd$ and $\delta-\delta hQ=Q$, leaves $h(dQ+QipQ)i=0$. Substitution in $p'D-d_Hp'$ gives the analogous vanishing using $Q-\delta+Qh\delta=0$. Finally $p'i'=pi-p hQi-pQhi+pQh^2Qi=1$ by the side conditions. [step 1.1, algebra]

3.1 Expand $Dh'+h'D-1+i'p'$ using the formulas in the Statement. Use $dh+hd=1-ip$ to cancel the constant terms, then $\delta hQ=Qh\delta=\delta-Q$ to cancel the terms linear in $\delta$, and group what remains as $h(dQ+Qd+QipQ)h$, which is zero by step1.1. Thus $Dh'+h'D=1-i'p'$. Together with step2.1 and [F1], these are the claimed chain homotopy equivalence identities. All expressions are finite algebraic identities. [F1, step 1.1, step 2.1, algebra]

4.1 The cohomology of the finite complex $H\otimes A$ is that of $C\otimes A$ by step3.1. In degree $q$, elementary kernel-image dimensions give $\dim H^q(H\otimes A,d_H)=\dim(H^q\otimes A)-\dim\operatorname{im}d_H^q-\dim\operatorname{im}d_H^{q-1}$, which is the displayed formula with $\dim(H^q\otimes A)=\ell\dim H^q$. Equality in every degree forces every adjacent image to be zero, hence $d_H=0$, and the converse is immediate. Since $Q$ lies in $\mathfrak m$, all transfer maps reduce to the original $i,p,h$. Every finite formula commutes with base change; when $d_H=0$, the transferred complex and its base change both have zero differential, so their cohomologies are the free modules $H^q\otimes A$ and $H^q\otimes B$, and the natural base-change map is an isomorphism. This does not assert that base change commutes with the cohomology of an arbitrary nonzero transferred differential. [step 2.1, step 3.1, algebra] ∎

## Source convention

The proof uses only the supplied algebraic maps. Crainic uses $ip=1+dh+hd$; replacing his homotopy by $-h$ gives the convention above.
