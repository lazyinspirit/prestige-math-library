---
id: lem-cft-r5-restricted-affine-current-fields-are-local
kind: lemma
title: Restricted affine-current fields are mutually local
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
  - def-positive-energy-affine-module
  - def-untwisted-affine-central-extension
dependency_roles:
  def-positive-energy-affine-module: mathematical-premise
  def-untwisted-affine-central-extension: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988; published 1989), arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§9.1, printed pp. 136–138: affine-current mode bracket and current OPE."
    - title: Lorenz Eberhardt, Wess-Zumino-Witten Models, YRISW PhD School in Vienna (2019)
      url: https://conf.itp.phys.ethz.ch/esi-school/Lecture_notes/WZW%20models.pdf
      locator: "§§3.1–3.4, printed pp. 7–14: the affine-current algebra, formal current OPE, and current-field normalization."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex simple Lie algebra with normalized invariant form $B$, let $k\in\mathbb C$, and let $V$ be a restricted affine-current module of level $k$ as in [[def-positive-energy-affine-module]] for the untwisted central extension of [[def-untwisted-affine-central-extension]]. Write $J_x(n)$ for the current mode of $x\in\mathfrak g$ at $n\in\mathbb Z$, so
$$[J_x(m),J_y(n)]=J_{[x,y]}(m+n)+mkB(x,y)\delta_{m+n,0}I_V.$$
For independent formal variables $z,w$, define
$$J^x(z):=\sum_{n\in\mathbb Z}J_x(n)z^{-n-1},\qquad \delta(z,w):=\sum_{m\in\mathbb Z}z^{-m-1}w^m.$$
Restrictedness makes $J^x(z)$ a field on $V$, meaning that for each $v\in V$, $J^x(z)v$ has only finitely many negative powers of $z$. Coefficientwise on $V$ the commutator is
$$[J^x(z),J^y(w)]=J^{[x,y]}(w)\delta(z,w)+kB(x,y)\partial_w\delta(z,w)I_V.$$
In particular $(z-w)^2[J^x(z),J^y(w)]=0$, so the currents are pairwise local of order at most two. Define the two formal expansions by
$$\iota_{z,w}(z-w)^{-1}:=\sum_{n\ge0}z^{-n-1}w^n,\qquad \iota_{w,z}(z-w)^{-1}:=-\sum_{n\ge0}w^{-n-1}z^n,$$
and define the corresponding expansions of $(z-w)^{-2}$ by differentiating in $w$. The notation $A(z)B(w)\sim C(w)/(z-w)^2+D(w)/(z-w)$ records these singular terms with those two expansions; their first-minus-second difference is $C(w)\partial_w\delta(z,w)+D(w)\delta(z,w)$. In this convention the singular OPE is
$$J^x(z)J^y(w)\sim \frac{kB(x,y)I_V}{(z-w)^2}+\frac{J^{[x,y]}(w)}{z-w}.$$

## Statement references

[[def-positive-energy-affine-module]]

[[def-untwisted-affine-central-extension]]

## Facts & Assumptions

**Given:** The finite-dimensional complex simple Lie algebra, its normalized invariant form, the complex level $k$, and the restricted current module $V$.

[F1] [[def-positive-energy-affine-module]]: for every $v\in V$ and $x\in\mathfrak g$, all sufficiently large positive modes $J_x(n)$ annihilate $v$.

[F2] [[def-untwisted-affine-central-extension]]: the affine bracket is $[J_x(m),J_y(n)]=J_{[x,y]}(m+n)+mkB(x,y)\delta_{m+n,0}I_V$.

## Proof

1.1 For fixed $v$, [F1] gives an integer $N$ such that $J_x(n)v=0$ for $n\ge N$. Hence only finitely many terms of $J^x(z)v$ have negative powers of $z$, so $J^x(z)$ is a field on $V$. [F1, given, algebra]

2.1 Expand the commutator coefficientwise and apply [F2]. In the noncentral sum, reindex by $r=m+n$; then
$$\sum_{m,n}J_{[x,y]}(m+n)z^{-m-1}w^{-n-1}=J^{[x,y]}(w)\sum_m z^{-m-1}w^m=J^{[x,y]}(w)\delta(z,w).$$
The central sum is
$$kB(x,y)\sum_m m z^{-m-1}w^{m-1}=kB(x,y)\partial_w\delta(z,w).$$
Each coefficient in the two-variable distribution is a single mode commutator, so these reindexings are coefficient identities. [F2, step 1.1, algebra]

3.1 Index shifting in the defining series gives $(z-w)\delta(z,w)=0$. Differentiating with respect to $w$ gives $(z-w)\partial_w\delta(z,w)=\delta(z,w)$, and multiplying once more by $z-w$ yields $(z-w)^2\partial_w\delta(z,w)=0$. Substitution in step 2.1 proves $(z-w)^2[J^x(z),J^y(w)]=0$. [step 2.1, algebra]

4.1 The two expansions of $(z-w)^{-1}$ differ by $\delta(z,w)$, and differentiating them in $w$ shows that the two expansions of $(z-w)^{-2}$ differ by $\partial_w\delta(z,w)$. Thus the commutator in step 2.1 is exactly the difference of the two expansions of the displayed singular OPE, with coefficients $J^{[x,y]}(w)$ and $kB(x,y)I_V$. [step 2.1, algebra] ∎
