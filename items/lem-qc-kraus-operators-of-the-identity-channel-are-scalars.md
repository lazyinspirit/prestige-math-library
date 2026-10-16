---
id: lem-qc-kraus-operators-of-the-identity-channel-are-scalars
kind: lemma
title: Kraus operators in an identity-channel representation are scalar
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
deps: [cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-inner-product-space, def-qc-kraus-representation, def-qc-quantum-channel, thm-adjoint-exists-and-is-unique-in-finite-dimension, thm-finite-dimensional-orthogonal-decomposition]
provenance:
  statement: literature-derived
  proof: ai-altered
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Information, Chapter 7: Quantum Error Correction (working draft, March 2026)"
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: "David W. Kribs, Raymond Laflamme, David Poulin, and Maia Lesosky, Operator Quantum Error Correction"
      url: https://arxiv.org/pdf/quant-ph/0504189
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space with the
library convention linear in the first argument. Let $K_1,\ldots,K_m:H\to H$
be a finite family whose Kraus map is the identity channel, so
$\sum_jK_jXK_j^*=X$ for every $X\in\operatorname{End}(H)$. Then for each $j$
there is a scalar $c_j\in\mathbb C$ such that $K_j=c_jI_H$.

## Facts & Assumptions

**Given:** The finite Kraus family and identity-map equality in the Statement.

[F1] [[def-inner-product-space]] fixes linearity in the first argument and
conjugate-linearity in the second.

[F2] [[def-qc-kraus-representation]]: the displayed finite operator sum
represents the map on every endomorphism.

[F3] [[def-qc-quantum-channel]]: a channel is completely positive and
trace-preserving on the full endomorphism space.

[F4] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]:
$H$ has a finite orthonormal basis.

[F5] [[thm-finite-dimensional-orthogonal-decomposition]]: a finite-dimensional
inner-product space is the orthogonal direct sum of a subspace and its
orthogonal complement.

[F6] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: each finite
linear operator has an adjoint satisfying the defining pairing identity.

## Proof


1.1 For a unit vector $\psi$, define $P_\psi z=\langle z,\psi\rangle\psi$. The adjoint identity [F6] rewrites $K_jP_\psi K_j^*z=\langle z,K_j\psi\rangle K_j\psi$, so the assumed channel identity gives $\sum_jK_jP_\psi K_j^*=P_\psi$. If $u\perp\psi$, then $\langle P_\psi u,u\rangle=0$ and $\langle K_jP_\psi K_j^*u,u\rangle =|\langle u,K_j\psi\rangle|^2$. Thus $\sum_j|\langle u,K_j\psi\rangle|^2=0$, so each inner product vanishes. For a fixed $j$, write $K_j\psi=c\psi+v$ with $v\perp\psi$ using [F5]. The vanishing inner product with $u=v$ gives $0=\langle v,K_j\psi\rangle=\|v\|^2$, so $v=0$ and $K_j\psi\in\operatorname{span}\{\psi\}$. [given, F1, F2, F3, F5, F6, algebra]

2.1 If $\dim H=1$, each linear endomorphism is scalar, so the conclusion holds. If $\dim H\ge2$, choose an orthonormal basis $(e_1,\ldots,e_n)$ by [F4]. Step 1.1 gives $K_je_r=c_{jr}e_r$. For $r\ne s$, applying step 1.1 to $(e_r+e_s)/\sqrt2$ shows $c_{jr}e_r+c_{js}e_s\in\operatorname{span}\{e_r+e_s\}$, hence $c_{jr}=c_{js}$. Thus $c_{jr}$ is independent of $r$ for each $j$. [step 1.1, F4, algebra, choose]

3.1 In either dimension case, each $K_j$ acts by one scalar on a basis of $H$, and therefore $K_j=c_jI_H$ on all of $H$. [step 2.1, algebra] ∎

