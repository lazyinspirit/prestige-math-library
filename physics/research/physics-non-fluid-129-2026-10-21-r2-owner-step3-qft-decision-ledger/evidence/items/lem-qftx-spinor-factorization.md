---
id: lem-qftx-spinor-factorization
kind: lemma
title: Null momenta admit unique spinor-helicity classes
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qftx-spinor-helicity
dependency_roles:
  def-qftx-spinor-helicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Henriette Elvang and Yu-tin Huang, Scattering Amplitudes
      url: https://arxiv.org/pdf/1308.1697
      locator: §2.2, PDF pp. 9–11; null momentum spinors and factor rescaling.
    - title: Andrea Marzolla, The four-dimensional on-shell three-point amplitude in spinor-helicity formalism and BCFW recursion relations
      url: https://arxiv.org/pdf/1705.09678
      locator: §3, PDF pp. 8–10; Pauli-matrix momentum map, determinant norm and complex null spinor factorization.
    - title: Ruth Britto, Freddy Cachazo, Bo Feng, and Edward Witten, Direct Proof of Tree-Level Recursion Relation in Yang-Mills Theory
      url: https://arxiv.org/pdf/hep-th/0501052
      locator: §2, PDF pp. 2–4; four-dimensional null momenta in spinor-bispinor form. The local lemma supplies the complete existence and uniqueness proof.
---

## Statement

For every $p\in\mathbb C^4$, $\det\kappa(p)=h(p,p)$. Thus for every nonzero $p$ with $h(p,p)=0$, $\kappa(p)$ has a spinor factorization. If $\kappa(p)_{a\dot a}=\lambda_a\widetilde\lambda_{\dot a}=\lambda'_a\widetilde\lambda'_{\dot a}$, then there is a unique $t\in\mathbb C^\times$ such that $\lambda'=t\lambda$ and $\widetilde\lambda'=t^{-1}\widetilde\lambda$. Hence the spinor factorizations of each nonzero null momentum form exactly one equivalence class under the stated rescaling.

## Statement references

[[def-qftx-spinor-helicity]]

[Elvang and Huang, *Scattering Amplitudes*, §2.2](https://arxiv.org/pdf/1308.1697)

[Marzolla, *The four-dimensional on-shell three-point amplitude in spinor-helicity formalism and BCFW recursion relations*, §3](https://arxiv.org/pdf/1705.09678)

[Britto, Cachazo, Feng, and Witten, *Direct Proof of Tree-Level Recursion Relation in Yang-Mills Theory*, §2](https://arxiv.org/pdf/hep-th/0501052)

## Facts & Assumptions

**Given:** $p\ne0$, $h(p,p)=0$, and the coordinate-to-matrix map $\kappa$ of the spinor-helicity definition.

[F1] [[def-qftx-spinor-helicity]]: $\kappa(p)=\begin{pmatrix}p^0+p^3&p^1-ip^2\\p^1+ip^2&p^0-p^3\end{pmatrix}$.

[F2] [[def-qftx-spinor-helicity]]: $h(p,q)=p^0q^0-p^1q^1-p^2q^2-p^3q^3$.

[F3] [[def-qftx-spinor-helicity]]: a spinor factorization is a pair of nonzero two-spinors with $M_{a\dot a}=\lambda_a\widetilde\lambda_{\dot a}$.

[F4] [[def-qftx-spinor-helicity]]: the explicit inverse formula for $\kappa$ recovers all four coordinates from its matrix entries.

## Proof

1.1 Direct expansion gives $\det\kappa(p)=(p^0)^2-(p^1)^2-(p^2)^2-(p^3)^2=h(p,p)=0$. The explicit inverse formula in [F4] shows $\kappa(p)\ne0$ because $p\ne0$. A nonzero $2\times2$ matrix with determinant zero has rank one. [given, F1, F2, F4, algebra]

2.1 Choose a nonzero column $v$ of $\kappa(p)$. Rank one means each of its two columns is a scalar multiple $a_{\dot a}v$; setting $\lambda=v$ and $\widetilde\lambda_{\dot a}=a_{\dot a}$ gives the factorization required by [F3]. Both factors are nonzero because their product matrix is nonzero. [given, F1, F3, step 1.1, choose]

3.1 Any second factorization has the same one-dimensional column space, so $\lambda'=t\lambda$ for a unique nonzero scalar $t$. Equality of the outer products then gives $\widetilde\lambda'=t^{-1}\widetilde\lambda$ by comparing a nonzero component of $\lambda$. This proves uniqueness of the class. [given, step 2.1, algebra] ∎
