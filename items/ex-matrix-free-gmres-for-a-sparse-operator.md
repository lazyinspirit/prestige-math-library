---
id: ex-matrix-free-gmres-for-a-sparse-operator
kind: example
title: "Matrix-free GMRES accesses the matrix only through applications of the operator to vectors"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-matrix-free-access-model-for-krylov-methods,
       def-restarted-gmres-m]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Yousef Saad, CSCI 8314 Set 13: Krylov subspace methods; Introduction; Krylov subspaces; Gram-Schmidt process (review); The Arnoldi process; FOM and GMRES"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN13.pdf"
---

## Example

Define a linear operator on $\mathbb R^4$ by

$$T(v_1,v_2,v_3,v_4)= (2v_1-v_2,\,-v_1+2v_2-v_3,\,-v_2+2v_3-v_4,\,-v_3+2v_4).$$

Starting from $b=e_1$, the first Krylov vectors are

$$b=e_1,\qquad Tb=(2,-1,0,0),\qquad T^2b=(5,-4,1,0).$$

So Arnoldi and GMRES can begin from repeated calls to the routine
$v\mapsto T(v)$, without ever storing the full tridiagonal matrix of $T$.

## Facts & Assumptions

**Given:** The operator $T$ above and the start vector $b=e_1$.

[F1] In the matrix-free model, Krylov methods need only operator applications,
vector updates, inner products, and norms
([[def-matrix-free-access-model-for-krylov-methods]]).

[F2] Restarted GMRES is built from ordinary GMRES cycles on such Krylov spaces
([[def-restarted-gmres-m]]).

## Verification
**Proof technique:** direct.

1.1 Direct evaluation of the operator routine gives the displayed vectors $Tb$ and $T^2b$. Those are exactly the data from which the first Krylov spaces and the first Arnoldi orthogonalization steps are formed. [F1, algebra]

2.1 No entrywise matrix storage was used in step 1.1: only the map $v\mapsto T(v)$, vector arithmetic, and inner products are needed. Therefore this sparse example fits the matrix-free access model [F1], and restarted cycles [F2] use the same access pattern on each new residual. [F1, F2, step 1.1] ∎
