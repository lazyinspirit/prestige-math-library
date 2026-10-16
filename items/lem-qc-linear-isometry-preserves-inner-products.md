---
id: lem-qc-linear-isometry-preserves-inner-products
kind: lemma
title: Finite complex linear isometries preserve inner products
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: [def-complex-conjugate-real-imaginary-part-and-modulus, def-linear-isometry-and-orthogonal-or-unitary-operator, def-real-and-complex-inner-product-space]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Sheldon Axler, Linear Algebra Done Right, 4th ed., §7D, Theorem 7.49
      url: https://linear.axler.net/LADR4e.pdf
---

## Statement

Let $V:H\to K$ be a linear isometry between finite-dimensional complex inner-product spaces whose pairings are linear in the first argument. Then $\langle Vx,Vy\rangle_K=\langle x,y\rangle_H$ for all $x,y\in H$.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H,K$ with first-argument-linear pairings and a linear isometry $V:H\to K$.

[F1] [[def-real-and-complex-inner-product-space]]: The complex pairing is linear in its first argument and conjugate-linear in its second, with conjugate symmetry.

[F2] [[def-real-and-complex-inner-product-space]]: The induced norm satisfies $\|x\|^2=\langle x,x\rangle$.

[F3] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: Every complex number has unique real and imaginary parts, and conjugation sends $a+bi$ to $a-bi$.

[L1] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: A linear isometry is linear and preserves the induced norm of every vector.

## Proof


1.1 Put $z=\langle x,y\rangle$. Expanding with [F1] and [F2] gives $\|x\pm y\|^2=\|x\|^2+\|y\|^2\pm z\pm\overline z$, so $\|x+y\|^2-\|x-y\|^2=2(z+\overline z)=4\operatorname{Re}z$ by [F3]. Also $\langle x,iy\rangle=-iz$, $\langle iy,x\rangle=i\overline z$, and $\|iy\|^2=\|y\|^2$; hence $\|x\pm iy\|^2=\|x\|^2+\|y\|^2\pm i(\overline z-z)$ and $\|x+iy\|^2-\|x-iy\|^2=2i(\overline z-z)=4\operatorname{Im}z$ by [F3]. [F1, F2, F3, given, algebra]

2.1 Linearity and norm preservation [L1] give $V(x\pm y)=Vx\pm Vy$ and $V(x\pm iy)=Vx\pm iVy$ and equate the four squared norms for $(Vx,Vy)$ with those for $(x,y)$. Applying step 1.1 in each space shows that $\langle Vx,Vy\rangle$ and $\langle x,y\rangle$ have the same real and imaginary parts; their equality follows from [F3]. [F1, F2, F3, L1, given, step 1.1, algebra] ∎

## Remarks

The proof is a direct finite algebra expansion under the root convention and uses no choice principle.
