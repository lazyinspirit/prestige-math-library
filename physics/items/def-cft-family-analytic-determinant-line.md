---
id: def-cft-family-analytic-determinant-line
kind: definition
title: Determinant line of an analytic family of worldsheet operators
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-cft-pointed-analytic-worldsheet
  - thm-cft-family-analytic-determinant-line-stabilization
  - def-fredholm-operator-cokernel-and-index
justified_by: []
domain: mathematics
library: physics
dependency_roles:
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  thm-cft-family-analytic-determinant-line-stabilization: mathematical-premise
  def-fredholm-operator-cokernel-and-index: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aleksey Zinger, The Determinant Line Bundle for Fredholm Operators: Construction, Properties, and Classification, arXiv:1304.6368v4"
      url: https://arxiv.org/pdf/1304.6368v4
      locator: "§§3.1, 3.3, 4.3, and 5.1: stabilization topology, comparison of determinant conventions, Fredholm stabilization, and continuity of transition maps."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $\pi:\mathcal C\to B$ be an analytic family of pointed compact worldsheets in the sense of [[def-cft-pointed-analytic-worldsheet]], with $B$ a complex manifold, and let $E\to\mathcal C$ be a holomorphic vector bundle of finite rank. Fix an integer Sobolev order $s\geq1$. For each $b\in B$, let
$$\mathbb E_b^s=H^s(C_b,E|_{C_b}),\qquad \mathbb F_b^{s-1}=H^{s-1}(C_b,\Lambda^{0,1}T^*C_b\otimes E|_{C_b}).$$
Here $H^k(C_b,G)$ is the completion of smooth sections of $G$ in an integer-order Sobolev norm formed from supplied smooth metrics and a smooth connection on the compact fiber $C_b$. Require these completions to be locally trivial complex Hilbert bundles $\mathbb E^s,\mathbb F^{s-1}\to B$; in the holomorphic case their transition maps are holomorphic in operator norm. This Hilbert-bundle structure, including the local identifications used to compare fibers, is part of the family data.

A continuous, respectively holomorphic, operator family $D:\mathbb E^s\to\mathbb F^{s-1}$ is a bundle map whose local representatives $b\mapsto D_b:\mathbb E_b^s\to\mathbb F_b^{s-1}$ are norm-continuous, respectively holomorphic in operator norm, bounded complex-linear maps. Assume every $D_b$ is Fredholm in the sense of [[def-fredholm-operator-cokernel-and-index]]: it has closed image and finite-dimensional kernel and cokernel $\mathbb F_b^{s-1}/\operatorname{im}D_b$. The determinant-line construction is applied locally on $B$ using [[thm-cft-family-analytic-determinant-line-stabilization]], which proves the Fredholm index is locally constant; no common index is imposed across distinct connected components. Write
$$\operatorname{coker}D_b=\mathbb F_b^{s-1}/\operatorname{im}D_b,\qquad \det(D_b)=\Lambda^{\max}\ker D_b\otimes\bigl(\Lambda^{\max}\operatorname{coker}D_b\bigr)^*.$$

For $b_0\in B$, a finite-dimensional subspace $W\subset\mathbb F_{b_0}^{s-1}$ is a stabilizer if $\operatorname{im}D_{b_0}+W=\mathbb F_{b_0}^{s-1}$. In a local trivialization of $\mathbb F^{s-1}$, regard $W$ as a constant finite-dimensional subbundle and set $K_W(b)=\{u\in\mathbb E_b^s:D_bu\in W\}$. On the neighborhood where $\operatorname{im}D_b+W=\mathbb F_b^{s-1}$, the local stabilization chart is $\Lambda^{\max}K_W(b)\otimes(\Lambda^{\max}W)^*$. A determinant line bundle for this family means the line bundle with fibers $\det(D_b)$ and local charts given by these stabilization lines; the finite-stabilization theorem referenced below proves their canonical, choice-independent gluing.

## Definition references

[[def-cft-pointed-analytic-worldsheet]]

[[thm-cft-family-analytic-determinant-line-stabilization]]

[[def-fredholm-operator-cokernel-and-index]]

[Zinger, *The Determinant Line Bundle for Fredholm Operators*, §§3.1, 3.3, 4.3, 5.1](https://arxiv.org/pdf/1304.6368v4)

## Remarks

This convention is the dual of Quillen's displayed convention $\Lambda^{\max}(\ker D)^*\otimes\Lambda^{\max}(\operatorname{coker}D)$; Zinger §3.3 compares these conventions. The two lines are naturally dual, not silently identified. The usual index-zero determinant section belongs to the dual convention, so this item does not include that section. Kernel and cokernel dimensions may jump while stabilization keeps the line rank one. A Quillen metric, connection, anomaly formula, sewing isomorphism, and identification with a functional-integral determinant are additional structures and are not included in this definition.

In the worldsheet application, the Dolbeault operator $\bar\partial_E$ is the operator encoding the given holomorphic structure on $E$, characterized by $\bar\partial_E(fs)=\bar\partial f\otimes s+f\bar\partial_Es$ in a local holomorphic frame. A Cauchy–Riemann-type operator is a first-order operator with the same principal symbol. For a first-order operator $P$, its principal symbol is the bundle map $\sigma_P(x,\xi)$ determined by $P(fs)-fP(s)=\sigma_P(x,df)s$ for smooth scalar $f$ and section $s$; $P$ is elliptic when $\sigma_P(x,\xi)$ is an isomorphism for every nonzero real cotangent vector $\xi$. The Dolbeault symbol is $s\mapsto \xi^{0,1}\otimes s$, which is an isomorphism on a complex curve for real $\xi\ne0$. This contextual example does not establish that any particular family is bounded or Fredholm on the stated completions; those are explicit hypotheses above.
