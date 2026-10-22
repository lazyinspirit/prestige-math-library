---
id: thm-asd-deformation-complex-index-formula
kind: theorem
title: Index formula for the sign-fixed self-dual deformation operator
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-asd-moduli-fredholm-index-and-lattice-setup
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: §§I.2 and II.1, printed pp. 282–287; the index-five case for $c_2(P)[X]=-1$ and $b_1=b_-=0$
---

## Statement

Let $X$ be a closed connected oriented smooth Riemannian four-manifold, let $b_1(X)=\dim H^1(X;\mathbb R)$, let $b_-(X)$ be the dimension of the negative subspace of its real intersection form, and let $P\to X$ be a smooth principal $SU(2)$-bundle. Put $k=-\langle c_2(P),[X]\rangle$. For the real Fredholm operator $D_A=d_A^*\oplus d_A^-$ from first Sobolev one-forms with values in $\operatorname{ad}P$ to zeroth Sobolev zero-forms and anti-self-dual two-forms, its Fredholm index is $8k-3(1-b_1(X)+b_-(X))$. In particular, if $\pi_1(X)=0$, the intersection form is positive definite, and $c_2(P)[X]=-1$, then $\operatorname{ind}_{\mathbb R}(D_A)=5$.

## Statement references

[Donaldson, *An Application of Gauge Theory to the Topology of 4-Manifolds*, §§I.2, II.1](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

**Given:** The sign-fixed bundle and deformation operator in the statement.

[F1] The equation convention, bundle charge, Sobolev completion, and operator $D_A$ are fixed by the local setup definition. [[def-asd-moduli-fredholm-index-and-lattice-setup]]

[L1] The exact local supplier needed for the index identity is `thm-atiyah-singer-index-formula-for-asd-deformation-complex`; it is not present in this repository batch. Its placement is the A page immediately before this specialization theorem.

## Proof

**Given:** The sign-fixed setup [F1] and the claimed index formula.

1.1 In the simply connected positive-definite specialization, $b_1(X)=b_-(X)=0$ and $k=-c_2(P)[X]=1$, so the right-hand side of the asserted formula evaluates to $8-3=5$. This checks only the specialization arithmetic. [given, F1, algebra]

1.2 Identifying this integer with the Fredholm index requires the missing Atiyah–Singer symbol/index computation [L1]; neither step 1.1 nor the local setup proves that identity. The proof stops at this unresolved analytic calculation. [L1, step 1.1]

## Unresolved proof obligations

The stated integer is the real index of an elliptic complex and requires the Atiyah–Singer index calculation for this deformation operator, including the sign conversion from $F_A^-=0$ and $k=-c_2(P)[X]$. The current repository dependencies define the operator but do not supply that index theorem or its characteristic-class computation. The source's index-five specialization has been inspected, but it is not a complete local proof. This item is escalated until the index calculation is supplied with these exact sign conventions.
