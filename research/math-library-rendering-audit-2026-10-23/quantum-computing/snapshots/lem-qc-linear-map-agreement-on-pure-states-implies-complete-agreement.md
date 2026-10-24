---
id: lem-qc-linear-map-agreement-on-pure-states-implies-complete-agreement
kind: lemma
title: Agreement on pure states implies complete agreement
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: [def-inner-product-space, def-linear-map, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-tensor-product-basis-from-bases]
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

Let $H,K,R$ be finite-dimensional complex inner-product spaces, with the
library convention that the inner product is linear in its first argument. For
$x\in H$, put $P_x:H\to H$, $P_x(z)=\langle z,x\rangle x$ (rank one when
$x\ne0$). Write $\mathcal B(H)=\operatorname{End}_{\mathbb C}(H)$. If
complex-linear maps
$\Phi,\Psi:\mathcal B(H)\to\mathcal B(K)$ agree on $P_x$ for every unit
$x\in H$, then $\Phi=\Psi$ on $\mathcal B(H)$ and
$\Phi\otimes\operatorname{id}_{\mathcal B(R)}=
\Psi\otimes\operatorname{id}_{\mathcal B(R)}$ on
$\mathcal B(H\otimes R)$, under the canonical matrix-unit identification.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H,K,R$, and
complex-linear maps $\Phi,\Psi$ satisfying the stated rank-one equalities.

[F1] [[def-inner-product-space]]: the inner product is linear in the first
argument and conjugate-linear in the second.

[F2] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]:
$H$ and $R$ have orthonormal bases, including the empty basis in dimension
zero.

[F3] [[thm-tensor-product-basis-from-bases]]: elementary tensors of basis
vectors form a basis of the tensor product.

[F4] [[def-linear-map]]: a complex-linear map preserves sums and complex
scalar multiples.

## Proof


1.1 Put $\Delta=\Phi-\Psi$. By [F4], $\Delta$ is complex-linear. For every nonzero $x\in H$, $P_x=\|x\|^2P_{x/\|x\|}$, and $P_0=0$, so linearity gives $\Delta(P_x)=0$ for every $x\in H$. [given, F1, F4, algebra]

2.1 With $|u\rangle\langle v|$ denoting the map $z\mapsto\langle z,v\rangle u$, the linear-first convention gives $$P_{u+v}-P_{u-v}=2(|u\rangle\langle v|+|v\rangle\langle u|)$$ and $$P_{u+iv}-P_{u-iv}=2i(|v\rangle\langle u|-|u\rangle\langle v|).$$ If $S=P_{u+v}-P_{u-v}$ and $T=P_{u+iv}-P_{u-iv}$, then $|u\rangle\langle v|=(S-T/i)/4$ and $|v\rangle\langle u|=(S+T/i)/4$. Hence $\Delta(|u\rangle\langle v|)=0$ for all $u,v$. [step 1.1, F1, F4, algebra]

3.1 Choose an orthonormal basis $(e_j)$ of $H$ using [F2]. Every $T\in\mathcal B(H)$ has the expansion $T=\sum_{j,k}\langle Te_k,e_j\rangle|e_j\rangle\langle e_k|$, so these matrix units form a basis of $\mathcal B(H)$. Step 2.1 makes $\Delta$ zero on that basis, hence on all of $\mathcal B(H)$; thus $\Phi=\Psi$. [step 2.1, F2, F4, algebra, choose]

4.1 Choose an orthonormal basis $(r_a)$ of $R$. By [F3], $(e_j\otimes r_a)$ is a basis of $H\otimes R$ and the operators $|e_j\otimes r_a\rangle\langle e_k\otimes r_b|$ form a basis of $\mathcal B(H\otimes R)$. Each equals $(|e_j\rangle\langle e_k|)\otimes(|r_a\rangle\langle r_b|)$, on which $(\Delta\otimes\operatorname{id}_{\mathcal B(R)})$ is zero by step 2.1. Therefore the two amplified maps agree on the entire operator space. [step 2.1, step 3.1, F3, F4, algebra, choose] ∎

