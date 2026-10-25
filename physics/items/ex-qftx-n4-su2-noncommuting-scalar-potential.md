---
id: ex-qftx-n4-su2-noncommuting-scalar-potential
kind: example
title: Positive $N=4$ scalar potential for two noncommuting SU(2) fields
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 8
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-extended-actions-examples
deps:
  - post-qftx-n4-super-yang-mills-model
  - post-qftx-nonabelian-yang-mills-model
dependency_roles:
  post-qftx-n4-super-yang-mills-model: physical-assumption
  post-qftx-nonabelian-yang-mills-model: physical-assumption
physical_scope: "A finite-dimensional classical field-value calculation in the adopted N=4 SU(2) scalar potential; it is not a field solution or empirical claim."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

For real $a,b\in\mathbb R$ with units $\mathrm m^{-1}$, take canonical adjoint scalar values $X^1_{\mathrm{can}}=aT_1$, $X^2_{\mathrm{can}}=bT_2$, and $X^I_{\mathrm{can}}=0$ for $I=3,4,5,6$, where $T_a=-i\sigma_a/2$ and
$$\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad \sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$
If $a,b\ne0$, the adopted $N=4$ scalar potential is $g^2a^2b^2/2>0$; if either coefficient is zero, it is zero.

## Example references

[[post-qftx-n4-super-yang-mills-model]]

[[post-qftx-nonabelian-yang-mills-model]]

## Facts & Assumptions

**Given:** The $N=4$ canonical scalar potential, the SU(2) basis, and its normalized Lie bracket and invariant form.

[A1] [[post-qftx-n4-super-yang-mills-model]]: $V=\frac{g^2}{2}\sum_{I<J}\kappa([X^I_{\mathrm{can}},X^J_{\mathrm{can}}],[X^I_{\mathrm{can}},X^J_{\mathrm{can}}])$.

[F1] [[post-qftx-nonabelian-yang-mills-model]]: $\kappa(T_3,T_3)=1$.

## Verification

**Given:** [A1], [F1], and $g>0$.

1.1 Direct multiplication gives $\sigma_1\sigma_2=\begin{pmatrix}i&0\\0&-i\end{pmatrix}=i\sigma_3$ and $\sigma_2\sigma_1=-i\sigma_3$. Therefore $[T_1,T_2]=(-i/2)^2(\sigma_1\sigma_2-\sigma_2\sigma_1)=T_3$, so $[X^1_{\mathrm{can}},X^2_{\mathrm{can}}]=abT_3$; every other commutator in the sum contains a zero field. [given, A1, algebra]

2.1 Substitution into [A1] yields $V=\frac{g^2}{2}a^2b^2\kappa(T_3,T_3)=\frac{g^2a^2b^2}{2}$. Since $g>0$, this is positive exactly when both $a$ and $b$ are nonzero, and the formula gives zero on either zero-coefficient boundary. [given, A1, F1, step 1.1, algebra] ∎

