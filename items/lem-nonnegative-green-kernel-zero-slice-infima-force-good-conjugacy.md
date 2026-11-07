---
dependency_level: 8
id: lem-nonnegative-green-kernel-zero-slice-infima-force-good-conjugacy
kind: lemma
title: "Nonnegative Green kernels with zero slice infima have a good conjugacy"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-good-and-potential-good-reduction-rational-map
  - lem-nonnegative-dynamical-green-kernel-has-zero-preperiodic-pair
  - lem-rational-map-two-preperiodic-points-and-normalized-lift
  - lem-local-dynamical-green-conjugacy-and-good-reduction
  - lem-local-homogeneous-dynamical-height-and-filled-julia-set
  - lem-berkovich-projective-line-compactness-and-classical-density
  - lem-berkovich-disc-nested-balls-and-hsia-kernel
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, Lemma3.19 and proof of Theorem3.14"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L$ be a complete algebraically closed nontrivially nonarchimedean valued field and let $\phi$ have degree $d\ge2$. Suppose its classical Green kernel is nonnegative on distinct pairs and, for each classical $P$, satisfies
$$\inf_{Q\in\mathbb P^1(L),\ Q\ne P}g_\phi(P,Q)=0.$$
Then $\phi$ has good reduction after a Möbius conjugacy over $L$. Both the nonnegativity and the zero-infimum hypotheses are explicit; their derivation from a normalized canonical measure is not supplied by this lemma.

## Statement references

[[def-axiom-of-choice]]

[[def-good-and-potential-good-reduction-rational-map]]

## Facts & Assumptions

**Given:** The field, map and two kernel hypotheses in the statement.

[F1] There is a pair of distinct preperiodic points with kernel value zero, and a conjugate lift whose two coordinate basis vectors are preperiodic. Classical Green values and both hypotheses are invariant under this conjugacy. ([[lem-nonnegative-dynamical-green-kernel-has-zero-preperiodic-pair]], [[lem-rational-map-two-preperiodic-points-and-normalized-lift]], [[lem-local-dynamical-green-conjugacy-and-good-reduction]])

[F2] Homogeneous local heights obey logarithmic scaling and $K_F=\{0\}\cup\{H_F\le0\}$; a preperiodic vector has height zero by the functional equation. ([[lem-local-homogeneous-dynamical-height-and-filled-julia-set]])

[F3] The classical unit disc is dense in its seminorm compactification; the Gauss seminorm is $x_{0,1}(\sum c_iT^i)=\max|c_i|$. ([[lem-berkovich-projective-line-compactness-and-classical-density]], [[lem-berkovich-disc-nested-balls-and-hsia-kernel]])

[A1] Full Choice is assumed through the local suppliers; only finite selections are added below. ([[def-axiom-of-choice]])

## Proof

1.1 By [F1] conjugate and choose a lift $F$ so that $e_1=(1,0)$ and $e_2=(0,1)$ are preperiodic and $g_\phi([e_1],[e_2])=0$. By [F2] their heights are zero. The defining wedge formula therefore gives $0=-\log|R_F|/(d(d-1))$, so $|R_F|=1$ and
$$G_F(z,w)=-\log|z\wedge w|+H_F(z)+H_F(w).$$
For $z=(x,y)\in K_F\setminus\{0\}$ with $x\ne0$, nonnegativity against $e_2$ gives $0\le-\log|x|+H_F(z)\le-\log|x|$, hence $|x|\le1$; for $x=0$ the inequality is already true. Comparing with $e_1$ similarly gives $|y|\le1$. Thus $K_F$ is contained in the unit polydisc. [F1, F2, algebra]

1.2 Let $z\ne0$ belong to the unit polydisc and put $P=[z]$. For any $\epsilon>0$ and any classical $Q\ne P$, choose a lift $w$ with $-\epsilon<H_F(w)<0$. Such a lift exists because the nontrivial value group of the algebraically closed field is dense: all rational powers of one nonunit occur, and their logarithms are dense in $\mathbb R$. Logarithmic scaling in [F2] gives the desired height interval. Then $w\in K_F$, so $\|w\|\le1$ by step1.1 and $|z\wedge w|\le1$. Consequently
$$g_\phi(P,Q)=G_F(z,w)\ge H_F(z)-\epsilon.$$
Taking the given infimum over $Q\ne P$ gives $0\ge H_F(z)-\epsilon$, and letting $\epsilon$ decrease to zero gives $H_F(z)\le0$. Thus the unit polydisc is contained in $K_F$, so equality holds. [F2, step 1.1, given, algebra]

2.1 Deleting the first term of a bounded orbit preserves boundedness, so $F(K_F)\subset K_F$. Since $K_F$ is the unit polydisc, both polynomials $F_i(T,1)$ have modulus at most1 at every classical unit point. By continuity of polynomial evaluation and the density in [F3], their values at the Gauss seminorm are at most1. The Gauss formula in [F3] says exactly that all coefficients of $F$ are integral. Together with $|R_F|=1$ from step1.1, this is good reduction of the conjugate lift, as required. [F2, F3, step 1.1, step 1.2, algebra] ∎
