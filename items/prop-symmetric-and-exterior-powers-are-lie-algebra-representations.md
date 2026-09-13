---
id: prop-symmetric-and-exterior-powers-are-lie-algebra-representations
kind: proposition
title: Symmetric and exterior powers are representations
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [prop-direct-sum-dual-hom-and-tensor-representations, def-symmetric-and-exterior-powers-over-an-arbitrary-field, thm-quotient-module-universal-property]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §11.2, printed pp. 62–63"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Statement

If $V$ is a representation of $\mathfrak g$, the diagonal tensor action on
$V^{\otimes n}$ preserves the symmetric and repeated-vector relation
subspaces. It therefore descends to representations on $S^n(V)$ and
$\Lambda^n(V)$ for every $n\geq0$ and over every field.

## Facts & Assumptions

**Given:** A Lie-algebra representation $V$ and an integer $n\geq0$.

[L1] Iterating the tensor-product construction gives the diagonal action
$x(v_1\otimes\cdots\otimes v_n)=\sum_i v_1\otimes\cdots\otimes xv_i\otimes\cdots\otimes v_n$
([[prop-direct-sum-dual-hom-and-tensor-representations]]).

[L2] The two quotient relation subspaces are those in
[[def-symmetric-and-exterior-powers-over-an-arbitrary-field]].

[L3] A linear map killing a quotient relation subspace factors uniquely
through the quotient ([[thm-quotient-module-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 Every diagonal operator $D_x$ commutes with every permutation of tensor positions, because permuting after applying $x$ in one position gives the same summand as applying $x$ in the permuted position. Hence $D_x(t-\pi t)=D_xt-\pi D_xt$ lies in the symmetric relation subspace. [L1, L2, algebra]

1.2 Consider a pure tensor with equal entries $v$ in positions $p\ne q$. Terms of $D_x$ differentiating another position still have equal entries in positions $p,q$. The sum of the two remaining terms, with $xv$ in position $p$ or $q$, equals the tensor having $v+xv$ in both positions minus the tensors having $v$ in both and $xv$ in both; it therefore belongs to the span of repeated-vector tensors in every characteristic. Thus the exterior relation subspace is stable. [L1, L2, algebra]

1.3 Stability makes $D_x$ induce an endomorphism on each quotient by [L3]. Since $[D_x,D_y]=D_{[x,y]}$ on $V^{\otimes n}$, the same equality holds after passing to either quotient, and the induced actions are representations. [L1, L3, algebra]

2.1 For $n=0$ the resulting action on $k$ is zero, and for $n=1$ it is the original action on $V$; the same construction proves the assertion for every $n$ without averaging or dividing by $n!$. [step 1.1, step 1.2, step 1.3] ∎
