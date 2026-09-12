---
id: def-loop-algebra-of-a-simple-lie-algebra
kind: definition
title: Loop algebra of a simple Lie algebra
deps: ["def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Section 7.1
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Section 12.2.1
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
---

## Definition

Let $\mathfrak g$ be a nonzero finite-dimensional complex simple Lie algebra. Here simple means nonabelian with no ideals except $0$ and $\mathfrak g$, using the Lie and ideal conventions of [[def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action]]. Put $\mathbb C[t,t^{-1}]=\{\sum_{m\in\mathbb Z}a_mt^m:a_m\in\mathbb C,\text{ finitely many }a_m\ne0\}$, with multiplication $t^mt^n=t^{m+n}$.

The **algebraic loop algebra** is $L\mathfrak g=\mathfrak g\otimes_{\mathbb C}\mathbb C[t,t^{-1}]$. Write $x_m=x\otimes t^m$ and define
$$[x\otimes f,y\otimes q]=[x,y]\otimes fq.$$
This is well-defined on the tensor product because the displayed operation is complex bilinear in each tensor's two entries and respects scalar balancing. On three pure tensors its cyclic Jacobi sum is $([x,[y,z]]+[y,[z,x]]+[z,[x,y]])\otimes fqr=0$. Antisymmetry follows from that in $\mathfrak g$ and $fq=qf$. Bilinear and trilinear extension give the identities on all finite sums, including zero. Thus this is a Lie algebra. Only Laurent polynomials occur; no topology or analytic completion is part of the definition.
