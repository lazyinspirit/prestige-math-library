---
id: lem-orthogonal-projection-is-linear-self-adjoint-contractive
kind: lemma
title: Hilbert projections are linear, self-adjoint and contractive
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-orthogonal-projection, lem-pythagorean-theorem-and-finite-orthogonal-sums, def-bounded-linear-operator, def-operator-norm, def-linear-subspace, def-orthogonality-and-orthogonal-complement, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Definition 5.36 and Lemma 5.38, pp.237–238"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Proposition 183"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Countable Choice. Let $M$ be a closed linear subspace of a real or complex Hilbert space $H$ and let $P_M$ be the Hilbert orthogonal projection onto $M$. Then:

1. $P_M$ is linear and idempotent, $\operatorname{ran}P_M=M$ and $\ker P_M=M^\perp$;
2. $\langle P_Mx,y\rangle=\langle x,P_My\rangle$ for all $x,y\in H$, that is $P_M$ is self-adjoint;
3. $\|P_Mx\|\le\|x\|$ for every $x$, so $P_M$ is a bounded linear operator of norm at most $1$; and if $M\ne\{0\}$, then $\|P_M\|=1$.

## Facts & Assumptions

[A1] $P_Mx\in M$ and $x-P_Mx\in M^\perp$, and a vector in $M^\perp$ is orthogonal to every vector of $M$ ([[def-hilbert-orthogonal-projection]], [[def-orthogonality-and-orthogonal-complement]]).

[A2] $M$ and $M^\perp$ are linear subspaces, so they are closed under sums and scalar multiples ([[def-linear-subspace]], [[def-orthogonality-and-orthogonal-complement]]).

[A3] For pairwise orthogonal vectors, $\|u+v\|^2=\|u\|^2+\|v\|^2$ ([[lem-pythagorean-theorem-and-finite-orthogonal-sums]]).

[A4] A bounded linear operator has finite operator norm, and $\|T\|=\sup\{\|Tx\|:\|x\|\le1\}$ with $\|Tx\|\le\|T\|\,\|x\|$ ([[def-bounded-linear-operator]], [[def-operator-norm]]).

[A5] Countable Choice is the assumption under which the projection is defined ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a closed linear subspace $M$ of a Hilbert space $H$ and the projection $P_M$.

1.1 Linearity: for scalars $a,b$ and $x,x'$, the vector $aP_Mx+bP_Mx'$ lies in $M$ and $(ax+bx')-(aP_Mx+bP_Mx')=a(x-P_Mx)+b(x'-P_Mx')$ lies in $M^\perp$, so by the defining property of $P_M$ it equals $P_M(ax+bx')$; idempotence follows because $P_Mx\in M$ has zero orthogonal component, so $P_MP_Mx=P_Mx$. [A1, A2, A5]

2.1 Range and kernel: $P_Mx\in M$ always, $P_Mm=m$ for $m\in M$ because $m-m=0\in M^\perp$, and $P_Mx=0$ exactly when $x=x-0\in M^\perp$; hence $\operatorname{ran}P_M=M$ and $\ker P_M=M^\perp$. [step 1.1, A1, A2]

3.1 Self-adjointness: writing $y=P_My+(y-P_My)$ and using additivity in the second argument together with $y-P_My\in M^\perp$ and $P_Mx\in M$ gives $\langle P_Mx,y\rangle=\langle P_Mx,P_My\rangle$, and symmetrically $\langle x,P_My\rangle=\langle P_Mx,P_My\rangle$; hence the two pairings agree. [step 2.1, A1, A2]

4.1 Contractivity: $x=P_Mx+(x-P_Mx)$ is a sum of orthogonal vectors, so Pythagoras gives $\|x\|^2=\|P_Mx\|^2+\|x-P_Mx\|^2\ge\|P_Mx\|^2$, hence $\|P_Mx\|\le\|x\|$ and $\|P_M\|\le1$ by the definition of the operator norm; if $M\ne\{0\}$ choose $0\ne m\in M$, then $P_Mm=m$ gives $\|P_M\|\ge\|P_Mm\|/\|m\|=1$, so $\|P_M\|=1$. [step 3.1, A3, A4, algebra] ∎
