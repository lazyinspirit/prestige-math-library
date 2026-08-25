---
id: lem-complex-linear-real-differential-criterion
kind: lemma
title: "A real-linear functional on $\\mathbb{C}^m$ is complex linear exactly when its antiholomorphic part vanishes"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [rem-complex-euclidean-space-dictionary, def-euclidean-linear-map, def-wirtinger-operators-in-several-complex-variables, def-vector-space, lem-standard-basis-of-f-n, thm-complex-numbers-form-a-field, def-complex-conjugate-real-imaginary-part-and-modulus, def-holomorphic-function-in-several-complex-variables, def-finite-sum-in-a-commutative-monoid]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.3"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Fix $m\ge1$ and let $T:\mathbb C^m\to\mathbb C$ be $\mathbb R$-linear, that is
additive with $T(\lambda h)=\lambda T(h)$ for every real $\lambda$. Then there
are unique $c_0,\dots,c_{m-1}$ and $d_0,\dots,d_{m-1}$ in $\mathbb C$ with

$$T(h)=\sum_{k<m}c_kh_k+\sum_{k<m}d_k\overline{h_k}\qquad(h\in\mathbb C^m),$$

namely $c_k=\tfrac12\bigl(T(e_k)-iT(ie_k)\bigr)$ and
$d_k=\tfrac12\bigl(T(e_k)+iT(ie_k)\bigr)$. Moreover $T$ is $\mathbb C$-linear if
and only if $d_k=0$ for every $k<m$.

## Facts & Assumptions

**Given:** An $\mathbb R$-linear $T:\mathbb C^m\to\mathbb C$, with $\mathbb C^m$ read through [[rem-complex-euclidean-space-dictionary]].

[L1] A map between Euclidean spaces is linear when it preserves real linear combinations ([[def-euclidean-linear-map]]); $\mathbb C$-linear additionally requires $T(\lambda h)=\lambda T(h)$ for every complex $\lambda$ ([[def-holomorphic-function-in-several-complex-variables]]).

[L2] $\mathbb C^m$ is a vector space over $\mathbb C$ ([[def-vector-space]], [[thm-complex-numbers-form-a-field]]) with standard basis $e_0,\dots,e_{m-1}$, and every $h$ satisfies $h=\sum_{k<m}h_ke_k$ ([[lem-standard-basis-of-f-n]]).

[L3] For $z=a+bi$ with $a,b$ real, $\operatorname{Re}z=a$, $\operatorname{Im}z=b$ and $\overline z=a-bi$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[L5] The Wirtinger operators of a real totally differentiable $f$ satisfy $Df(a)h=\sum_{k<m}(\partial_{z_k}f(a))h_k+\sum_{k<m}(\partial_{\bar z_k}f(a))\overline{h_k}$ ([[def-wirtinger-operators-in-several-complex-variables]]).

## Proof

**Proof technique:** direct.

1.1 Write $h_k=\xi_k+i\eta_k$ with $\xi_k,\eta_k$ real, as in [L3]. By [L2] and $\mathbb R$-linearity, $h=\sum_{k<m}\bigl(\xi_ke_k+\eta_k(ie_k)\bigr)$ and hence $T(h)=\sum_{k<m}\bigl(\xi_kT(e_k)+\eta_kT(ie_k)\bigr)$. [given, L1, L2, L3, algebra]

1.2 Put $c_k=\tfrac12(T(e_k)-iT(ie_k))$ and $d_k=\tfrac12(T(e_k)+iT(ie_k))$; then $c_k+d_k=T(e_k)$ and $i(c_k-d_k)=T(ie_k)$. [given, algebra]

2.1 Substituting $\xi_k=\tfrac12(h_k+\overline{h_k})$ and $\eta_k=\tfrac1{2i}(h_k-\overline{h_k})$ from [L3] into step 1.1 and collecting, the coefficient of $h_k$ is $\tfrac12T(e_k)+\tfrac1{2i}T(ie_k)=c_k$ and the coefficient of $\overline{h_k}$ is $\tfrac12T(e_k)-\tfrac1{2i}T(ie_k)=d_k$, so $T(h)=\sum_{k<m}c_kh_k+\sum_{k<m}d_k\overline{h_k}$. [step 1.1, step 1.2, L3, algebra]

2.2 The coefficients are unique: if $\sum_kc'_kh_k+\sum_kd'_k\overline{h_k}$ represents $T$ as well, evaluating at $h=e_k$ gives $c'_k+d'_k=T(e_k)$ and at $h=ie_k$ gives $i(c'_k-d'_k)=T(ie_k)$, a system whose only solution is the pair of step 1.2. [step 1.2, L2, L3, algebra]

3.1 If every $d_k=0$ then $T(h)=\sum_kc_kh_k$, which satisfies $T(\lambda h)=\lambda T(h)$ for every complex $\lambda$, so $T$ is $\mathbb C$-linear in the sense of [L1]. [step 2.1, L1, algebra]

3.2 Conversely, suppose $T$ is $\mathbb C$-linear. Taking $\lambda=i$ in [L1] and using step 2.1 gives $\sum_kc_k(ih_k)+\sum_kd_k\overline{ih_k}=i\sum_kc_kh_k+i\sum_kd_k\overline{h_k}$; since $\overline{ih_k}=-i\overline{h_k}$ by [L3], the left side is $i\sum_kc_kh_k-i\sum_kd_k\overline{h_k}$, so $2i\sum_kd_k\overline{h_k}=0$ for every $h$. Evaluating at $h=e_k$ gives $d_k=0$ for each $k<m$. [step 2.1, L1, L3, algebra]

4.1 Steps 2.1, 2.2, 3.1 and 3.2 prove the representation, its uniqueness, and the stated equivalence; the case $m=1$ and the zero functional, for which every $c_k$ and $d_k$ vanishes, are included with no separate argument. By [L5] the representation applied to $T=Df(a)$ has $c_k=\partial_{z_k}f(a)$ and $d_k=\partial_{\bar z_k}f(a)$, so the criterion reads: the real differential is $\mathbb C$-linear exactly when every $\partial_{\bar z_k}f(a)$ vanishes. [step 2.1, step 2.2, step 3.1, step 3.2, L5] ∎
