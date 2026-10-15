---
id: ex-hh-type-a-polynomial-module-action
kind: example
title: "The rank-two polynomial-module action"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps: [def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences, def-hh-type-a-rational-skew-group-algebra, lem-hh-demazure-lusztig-operators-satisfy-affine-relations]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

For $n=2$, the polynomial action of the operator from [[lem-hh-demazure-lusztig-operators-satisfy-affine-relations]] satisfies
$$ \mathcal T_1\cdot 1=Q,\qquad \mathcal T_1\cdot X_1=X_2,\qquad \mathcal T_1\cdot X_2=QX_1+(Q-1)X_2. $$

## Facts & Assumptions

**Given:** $A=\mathbb Z[Q,Q^{-1}][X_1^{\pm1},X_2^{\pm1}]$, $s_1$ interchanging $X_1,X_2$, and the polynomial action defined by the operator lemma.

[F1] [[def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences]]: $D_1(f)=(f-s_1(f))/(1-X_1/X_2)$, so $D_1(1)=0$, $D_1(X_1)=-X_2$, and $D_1(X_2)=X_2$.

[F2] [[def-hh-type-a-rational-skew-group-algebra]]: $K\rtimes S_n$ acts on $K$ by $(a[w])\cdot f=a\,w(f)$.

[F3] [[lem-hh-demazure-lusztig-operators-satisfy-affine-relations]]: $\mathcal T_i=Q[s_i]+(Q-1)([1]-[s_i])/(1-X_i/X_{i+1})$ and it preserves $A$.

## Verification

**Given:** The rank-two Laurent algebra, the skew-group action in [F2], and the operator in [F3].

1.1 Under the action of [F2], the operator in [F3] acts by $\mathcal T_1\cdot f=Q s_1(f)+(Q-1)(f-s_1(f))/(1-X_1/X_2)=Q s_1(f)+(Q-1)D_1(f)$. [F1, F2, F3, algebra]

2.1 Since $s_1(1)=1$ and $D_1(1)=0$ by [F1], step 1.1 gives $\mathcal T_1\cdot1=Q$. For $X_1$, [F1] gives $\mathcal T_1\cdot X_1=QX_2-(Q-1)X_2=X_2$; for $X_2$ it gives $\mathcal T_1\cdot X_2=QX_1+(Q-1)X_2$. These outputs lie in $A$, as required. [F1, step 1.1, algebra] ∎

