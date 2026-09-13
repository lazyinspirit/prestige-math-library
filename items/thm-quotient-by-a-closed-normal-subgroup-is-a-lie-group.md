---
id: thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group
kind: theorem
title: Quotient by a closed normal subgroup is a Lie group
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-quotient-manifold-by-a-closed-lie-subgroup, thm-quotient-universal-property, prop-tangent-space-of-a-homogeneous-quotient, thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism, thm-the-differential-of-adjoint-is-ad]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Quotient Group Theorem 21.26 and complete proof, printed pages 555–556
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Proposition 4.7, printed page 29
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. If $N$ is a closed normal subgroup of a
finite-dimensional real Lie group $G$, the quotient manifold $G/N$ has unique
Lie-group operations making $q:G\to G/N$ a smooth homomorphism, and

$$\operatorname{Lie}(G/N)\cong\mathfrak g/\mathfrak n$$

canonically as Lie algebras.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Lie group $G$, and a closed normal subgroup
$N\trianglelefteq G$.

[A1] The quotient manifold exists, $q$ is a surjective submersion, and
$T_{eN}(G/N)\cong\mathfrak g/\mathfrak n$ linearly.
[[def-countable-choice]], [[thm-quotient-manifold-by-a-closed-lie-subgroup]],
[[prop-tangent-space-of-a-homogeneous-quotient]].

[F1] Maps constant on quotient fibres descend uniquely.
[[thm-quotient-universal-property]].

[F2] The differential of a smooth Lie-group homomorphism preserves brackets
([[thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism]]).
Moreover,
$d(\operatorname{Ad})_e=\operatorname{ad}$.
[[thm-the-differential-of-adjoint-is-ad]].

## Proof

**Proof technique:** descend the group laws and compute their tangent algebra.

1.1 Normality makes $(gN)(hN)=ghN$ and $(gN)^{-1}=g^{-1}N$ independent of representatives. These operations satisfy the group axioms because the operations on $G$ do, and $q$ is algebraically a surjective homomorphism. They are the only possible operations with this property, since every coset has a representative. [given, algebra]

1.2 Normality also gives $\operatorname{Ad}_g(\mathfrak n)=\mathfrak n$ for every $g$: conjugation by $g$ restricts to a diffeomorphism of $N$. For $X\in\mathfrak g$ and $Y\in\mathfrak n$, the curve $t\mapsto\operatorname{Ad}_{\exp(tX)}Y$ lies in $\mathfrak n$; its derivative at zero is $[X,Y]$ by [F2]. Thus $\mathfrak n$ is an ideal. Define $[X+\mathfrak n,Y+\mathfrak n]=[X,Y]+\mathfrak n$; replacing either representative by an element of $\mathfrak n$ changes the bracket by an element of $\mathfrak n$. Bilinearity, antisymmetry, and Jacobi descend, so this is a Lie bracket on $\mathfrak g/\mathfrak n$. [given, F2, algebra]

2.1 The descended inversion is smooth: on a quotient-chart neighborhood choose a smooth local section $s$ of $q$; there it is $x\mapsto q(s(x)^{-1})$. Similarly, near $(x,y)$ choose local sections $s_1,s_2$ and write multiplication as $(x',y')\mapsto q(s_1(x')s_2(y'))$. These formulas are smooth and agree on overlaps by representative independence. Hence $G/N$ is a Lie group and $q$ is smooth. [A1, F1, step 1.1]

2.2 By [F2], $dq_e:\mathfrak g\to\operatorname{Lie}(G/N)$ is a Lie-algebra homomorphism. By [A1] it is surjective with kernel $\mathfrak n$, so its induced linear isomorphism $\mathfrak g/\mathfrak n\to\operatorname{Lie}(G/N)$ preserves brackets and is the claimed canonical Lie-algebra isomorphism. [A1, F2, step 1.2]

3.1 Uniqueness of the smooth manifold structure is in [A1], and uniqueness of the operations is step 1.1. The cases $N=G$, $N=\{e\}$, and disconnected groups are included. Normality, not merely closedness, is used precisely in steps 1.1 and 1.2. Countable choice is inherited through [A1] and [F2]. [A1, F2, step 1.1, step 2.2] ∎
