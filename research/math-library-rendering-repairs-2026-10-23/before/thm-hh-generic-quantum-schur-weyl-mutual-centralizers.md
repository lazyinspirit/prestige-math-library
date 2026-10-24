---
id: thm-hh-generic-quantum-schur-weyl-mutual-centralizers
kind: theorem
title: "Generic quantum Schur–Weyl mutual centralizers over Q(q)"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 4
deps: [lem-hh-classical-and-generic-tensor-double-centralizer-suppliers, lem-hh-quantum-and-hecke-tensor-actions-commute, lem-hh-finite-matrix-rank-under-specialization, thm-hh-hecke-symmetry-tensor-power-action, thm-hh-generic-coxeter-hecke-standard-basis, def-hh-universal-coxeter-hecke-parameters-and-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof et al., Introduction to representation theory"
      url: "https://arxiv.org/pdf/0901.0827"
      locator: "§4.18–4.19, pp. 64–65: the classical tensor double-commutant framework"
    - title: "Alexei Davydov and Alexander Molev, A categorical approach to classical and quantum Schur–Weyl duality"
      url: "https://arxiv.org/pdf/1008.3739"
      locator: "§4.1–4.2, pp. 14–16: quantum tensor-space convention; the generic equalities below follow from the locally proved rank bounds"
---

## Statement

Let $F=\mathbb Q(q)$, $N\ge1$, $n\ge0$, $M=(F^N)^{\otimes n}$, and let $A_F,B_F\subseteq\operatorname{End}_F(M)$ be the images of the quantum and normalized Hecke tensor actions defined above. Then
$$A_F=\operatorname{End}_{B_F}(M),\qquad B_F=\operatorname{End}_{A_F}(M).$$
These are equalities for the two matrix-algebra images. If $N<n$, no faithfulness of the abstract Hecke algebra is asserted. If $N\ge n$, the abstract Hecke action is faithful. The theorem is only over the rational function field $\mathbb Q(q)$ and asserts no equality at a root of unity, at an arbitrary specialized parameter, or over a field of positive characteristic.

## Facts & Assumptions

**Given:** $F=\mathbb Q(q)$, integers $N\ge1,n\ge0$, the local commuting inclusion, the rank bounds, and the abstract Hecke standard basis.

[F1] The two images commute: $B_F\subseteq\operatorname{End}_{A_F}(M)$ and $A_F\subseteq\operatorname{End}_{B_F}(M)$ ([[lem-hh-quantum-and-hecke-tensor-actions-commute]]).

[F2] For $N\ge2,n\ge1$, the two generic image lower bounds and commutant upper bounds are those of [[lem-hh-classical-and-generic-tensor-double-centralizer-suppliers]].

[F3] The abstract type-A Hecke algebra has basis $\{t_w:w\in S_n\}$ over $F$, obtained by base change from the universal standard-basis theorem ([[thm-hh-generic-coxeter-hecke-standard-basis]], [[def-hh-universal-coxeter-hecke-parameters-and-presentation]]).

[F4] A nonzero minor of a matrix with entries regular at $q=1$ remains nonzero over $F=\mathbb Q(q)$ ([[lem-hh-finite-matrix-rank-under-specialization]]).

## Proof

**Given:** The data in [F1]–[F4].

1.1 Suppose first $N\ge2$ and $n\ge1$. By [F2] and the commuting inclusions [F1], $\dim_{\mathbb Q}A_0\le\dim_F A_F\le\dim_F\operatorname{End}_{B_F}(M)\le\dim_{\mathbb Q}A_0$, so every inequality is equality and $A_F=\operatorname{End}_{B_F}(M)$ because the included finite-dimensional subspaces have equal dimension. The other sandwich is $\dim_{\mathbb Q}B_0\le\dim_F B_F\le\dim_F\operatorname{End}_{A_F}(M)\le\dim_{\mathbb Q}B_0$, which gives $B_F=\operatorname{End}_{A_F}(M)$ by the same inclusion-and-dimension argument. This establishes both mutual centralizer equalities without generic semisimplicity or a character formula. [given, F1, F2, algebra]

1.2 Assume $N\ge n\ge1$. On $v=e_1\otimes\cdots\otimes e_n$, the orbit vectors $\rho_n(t_w)v$ have entries regular at $q=1$; their specializations are the $n!$ distinct tensors obtained by permuting the distinct basis labels. Their vectorized column matrix therefore has an $n!\times n!$ minor equal to $1$ at $q=1$, which remains nonzero over $F$ by [F4]. Thus the orbit vectors are linearly independent over $F$. If $h=\sum_{w\in S_n}a_wt_w$ lies in the kernel, the standard basis [F3] gives this expansion and $0=\rho_n(h)v=\sum_wa_w\rho_n(t_w)v$ forces every $a_w=0$. Hence the abstract action is faithful. [given, F3, F4, algebra]

2.1 If $n=0$, then $M=F$ and both unital images and both commutants are $F$; the unique unital map from the abstract algebra $H_0=F$ is the identity, so this action is faithful. If $N=1$, $M$ is one-dimensional; the quantum image contains the scalars and every Hecke generator acts by $q$, so both images and both commutants are again $F$. These direct cases cover the parameters excluded from step 1.1. [given, F1, algebra]

3.1 In the range $N<n$ the equalities in step 1.1 remain image equalities and do not identify $B_F$ with the abstract Hecke algebra. The distinction is real: for $N=1,n=2$, the abstract algebra has basis $1,t_1$ by [F3], while its one-dimensional tensor-space action sends $t_1$ to $q$; the nonzero element $t_1-q$ is in the kernel. No claim of faithfulness in the full range $N<n$ is used in either centralizer equality. [step 2.1, step 1.1, F3, algebra] ∎
