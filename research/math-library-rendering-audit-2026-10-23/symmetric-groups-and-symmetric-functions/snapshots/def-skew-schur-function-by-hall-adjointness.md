---
id: def-skew-schur-function-by-hall-adjointness
kind: definition
title: Skew Schur functions by Hall adjointness
status: published
origin: pipeline
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - def-partition-young-diagram-and-conjugate-partition
  - def-hall-inner-product-on-symmetric-functions
  - thm-schur-functions-form-an-orthonormal-integral-basis
  - thm-jacobi-trudi-and-dual-jacobi-trudi-identities
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §5, equations (5.1)–(5.3), printed pp. 69–70
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.9, printed pp. 191–195
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Definition

Let $\lambda,\mu$ be partitions ([[def-partition-young-diagram-and-conjugate-partition]])
and put $d=|\lambda|-|\mu|$. If $d<0$, define $s_{\lambda/\mu}$ to be the
zero element of $\Lambda$. If $d\ge0$, define the **skew Schur function**
$$s_{\lambda/\mu}:=\sum_{\nu\vdash d}\langle s_\lambda,s_\mu s_\nu\rangle_Hs_\nu,$$
using the Hall form ([[def-hall-inner-product-on-symmetric-functions]]) and
stable Schur basis ([[thm-schur-functions-form-an-orthonormal-integral-basis]]).
No containment condition on $\mu$ and $\lambda$ is part of this definition.

## Facts & Assumptions

**Given:** The stable grading and multiplication, finite partition indexing, the graded Hall form, and the integral orthonormal Schur basis.

[F1] Multiplication sends $\Lambda^a\times\Lambda^b$ into $\Lambda^{a+b}$ and $\Lambda=\bigoplus_{d\ge0}\Lambda^d$ ([[def-stable-graded-ring-of-symmetric-functions]]).

[F2] Each partition has nonnegative integer size; each fixed degree has finitely many partitions, and the empty partition is the unique partition of degree zero ([[def-partition-young-diagram-and-conjugate-partition]]).

[F3] The Hall form is graded and $\mathbb Z$-bilinear ([[def-hall-inner-product-on-symmetric-functions]]).

[F4] In each degree the Schur functions form an integral orthonormal basis ([[thm-schur-functions-form-an-orthonormal-integral-basis]]).

[F5] The Jacobi–Trudi convention assigns the empty determinant the value $1$, so $s_\varnothing=1$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $d\ge0$. The index set $\{\nu:\nu\vdash d\}$ is finite by [F2]. For each such $\nu$, [F1] gives $s_\mu s_\nu\in\Lambda^{|\mu|+d}=\Lambda^{|\lambda|}$, so its Hall pairing with $s_\lambda$ is defined and integral by [F3]. The displayed finite sum is therefore a well-defined element of $\Lambda^d$ by [F1] and [F4]. If $d<0$, the separately specified zero is well-defined in $\Lambda$. [F1, F2, F3, F4, algebra]

2.1 Let $\rho$ be any partition. If $d\ge0$ and $|\rho|=d$, orthonormality in [F4] gives $\langle s_{\lambda/\mu},s_\rho\rangle_H=\langle s_\lambda,s_\mu s_\rho\rangle_H$ by extracting the $s_\rho$ coefficient in the defining sum. If $|\rho|\ne d$, the left side is zero by [F1] and [F3], while the right side is zero because $s_\mu s_\rho$ has degree $|\mu|+|\rho|\ne|\lambda|$. If $d<0$, then $|\mu|+|\rho|>|\lambda|$, so both sides again vanish. Thus the adjointness identity holds for every partition $\rho$; it determines the element uniquely because the Schur functions are an orthonormal basis in each degree. For $\mu=\varnothing$, [F5] gives $s_\varnothing=1$, and the definition yields $s_{\lambda/\varnothing}=s_\lambda$; in particular $s_{(1)/\varnothing}=s_{(1)}$. When $|\lambda|=|\mu|$, it gives $s_{\lambda/\mu}=1$ if $\lambda=\mu$ and zero otherwise. [F1, F2, F3, F4, F5, step 1.1, algebra] ∎
