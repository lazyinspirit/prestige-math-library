---
id: ex-rigidity-versus-equality-of-all-height-zero-points
kind: example
title: "Height-zero loci can differ outside their common closure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-one-variable-function-field-dynamical-setting
  - def-polarized-endomorphism-of-projective-variety
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields"
      url: "https://arxiv.org/pdf/1810.06342v2"
      locator: "Theorem 4.6 and §5.2"
verification: {}
proof_strategy: direct
---

## Example

Let $k=\overline{\mathbb Q}$, $K=k(t)$, and $h([p:q])=\max(\deg p,\deg q)$ for coprime $p,q\in k[t]$, with $\deg0=-\infty$. Consider the polarized degree-two maps $f(z)=z^2$ and $g(z)=t z^2$ on $\mathbb P^1_K$, both polarized by $\mathcal O(1)$. For $K$-rational points define each canonical height by $\widehat h_\phi(P)=\lim_{m\to\infty}2^{-m}h(\phi^m(P))$. Then
$$Z_f=\{P\in\mathbb P^1(K):\widehat h_f(P)=0\}=k\cup\{\infty\},\qquad Z_g=\{P\in\mathbb P^1(K):\widehat h_g(P)=0\}=\{0,\infty\}\cup\{a/t:a\in k^\times\}.$$
Thus $Z_f\ne Z_g$, but $Z_f\cap Z_g=\{0,\infty\}$, and both loci agree on the Zariski closure of their intersection.

## Example references

[[def-one-variable-function-field-dynamical-setting]]

[[def-polarized-endomorphism-of-projective-variety]]

## Facts & Assumptions

**Given:** $k=\overline{\mathbb Q}$; $K=k(t)$; the height $h$ specified in the Example; the maps $f(z)=z^2$ and $g(z)=tz^2$; and their canonical heights defined as limits.

[F1] For coprime nonzero $p,q\in k[t]$, the projective function-field height is $\max(\deg p,\deg q)$; $0=[0:1]$ and $\infty=[1:0]$ have height zero by the explicit degree-height convention in the Example.

[F2] Both maps have homogeneous degree two with no common zero in their coordinate pairs, hence both pull back $\mathcal O(1)$ to $\mathcal O(2)$. ([[def-polarized-endomorphism-of-projective-variety]])

## Verification

1.1 Write $P=[p:q]$ with coprime nonzero polynomials. The iterates of $f$ are $f^m(P)=[p^{2^m}:q^{2^m}]$, still coprime, so [F1] gives $2^{-m}h(f^m(P))=\max(\deg p,\deg q)$. Hence $\widehat h_f(P)=\max(\deg p,\deg q)$. The special points $0$ and $\infty$ are fixed and have height zero. [given, F1, F2, algebra]

1.2 If $t\nmid q$, then $g^m(P)=[t^{2^m-1}p^{2^m}:q^{2^m}]$ is reduced, so
$$
2^{-m}h(g^m(P))=\max\bigl(\deg p+1-2^{-m},\deg q\bigr)\longrightarrow\max(\deg p+1,\deg q).
$$
If $t\mid q$, write $q=t^bq_0$ with $b\ge1$ and $t\nmid q_0$; coprimality implies $t\nmid p$. Cancelling the common factor $t^{2^m-1}$ gives the reduced pair $[p^{2^m}:t^{2^m(b-1)+1}q_0^{2^m}]$, so
$$
2^{-m}h(g^m(P))=\max\bigl(\deg p,\deg q-1+2^{-m}\bigr)\longrightarrow\max(\deg p,\deg q-1).
$$
These limits establish the displayed formulas for all finite nonzero $P$. [given, F1, F2, algebra]

2.1 The first formula vanishes exactly when both $p$ and $q$ are constants, together with $0$ and $\infty$; thus $Z_f=k\cup\{\infty\}$. In the second formula, the case $t\nmid q$ has value at least $1$. In the case $t\mid q$, it vanishes exactly when $\deg p=0$ and $\deg q=1$, that is, $P=a/t$ for some $a\in k^\times$. Adding the fixed points $0,\infty$ gives the stated $Z_g$. [given, step 1.1, step 1.2, algebra]

3.1 Therefore $Z_f\cap Z_g=\{0,\infty\}$, a Zariski-closed subset of $\mathbb P^1_k$. Both loci contain these two points, so they agree on the closure of their intersection; they differ globally because $1\in Z_f$ and $1\notin Z_g$. [given, step 2.1, algebra] ∎
