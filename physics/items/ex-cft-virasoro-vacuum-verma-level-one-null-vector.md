---
id: ex-cft-virasoro-vacuum-verma-level-one-null-vector
kind: example
title: The vacuum Verma module has a level-one null vector
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-cft-virasoro-verma-module
  - lem-cft-virasoro-verma-pbw-basis
  - def-virasoro-algebra
dependency_roles:
  def-cft-virasoro-verma-module: mathematical-premise
  lem-cft-virasoro-verma-pbw-basis: mathematical-premise
  def-virasoro-algebra: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras
      url: https://arxiv.org/pdf/1004.1287v2
      locator: "Chapter IV §4, printed pp. 70–72: contravariant form, radical and the level-one norm."
    - title: Paul Ginsparg, Applied Conformal Field Theory
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§4.2, printed pp. 55–60: the level-one Gram determinant (2h) and the level-two matrix."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
generation:
  role: example
---

## Statement

For every $c\in\mathbb C$, the vacuum Verma module $M(c,0)$ has a
nonzero singular vector $L_{-1}v_0$ at grade one. Its Shapovalov norm is
zero, it lies in the radical, and $\det G_1(c,0)=0$. This is an algebraic
null-vector example; it asserts no positivity or Hilbert-space structure.

## Facts & Assumptions

**Given:** The algebraic module $M(c,0)$ and its normalized form.

[F1] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]: $[L_m,L_n]=(m-n)L_{m+n}+
(m^3-m)\delta_{m+n,0}C/12$.

[F2] [[def-cft-virasoro-verma-module]]: $L_nv_0=0$ for $n>0$,
$L_0v_0=0$, and $Cv_0=cv_0$; the normalized form is contravariant
and its radical is the unique maximal proper submodule.

[F3] [[lem-cft-virasoro-verma-pbw-basis]]: each grade has its partition
basis and $L_{-1}v_0$ is the nonzero basis vector for the unique partition
of grade one.

## Proof

1.1 Put $w=L_{-1}v_0$. It is nonzero by [F3] and has grade one because
$[L_0,L_{-1}]=L_{-1}$ by [F1]. For $n=1$,
$L_1w=[L_1,L_{-1}]v_0=2L_0v_0=0$. For every $n\ge2$,
$L_nw=[L_n,L_{-1}]v_0=(n+1)L_{n-1}v_0=0$, since $n-1>0$.
Thus $w$ is singular. Also $L_0w=w$, so it is not a second grade-zero
vector. [F1, F2, F3, algebra]

2.1 Contravariance gives
$\langle w,w\rangle=\langle v_0,L_1L_{-1}v_0\rangle=0$, because
$L_1L_{-1}v_0=2L_0v_0=0$. If $z$ is homogeneous of grade $n$,
then $L_0w=w$, $L_0z=nz$, and contravariance under $L_0$ gives
$(1-n)\langle w,z\rangle=0$. Thus $w$ is orthogonal to every grade
$n\ne1$. Grade one is spanned by $w$ by [F3], and its self-pairing is
zero, so $w$ is orthogonal to the whole algebraic direct sum and lies in
the radical. At general highest weight $h$, the grade-one Gram matrix is
the one-entry matrix $(2h)$, so at $h=0$ its determinant is zero for
every central charge $c$. A zero norm here is a bilinear-form statement
and uses no positivity assumption. [F1, F2, F3, step 1.1, algebra] ∎
