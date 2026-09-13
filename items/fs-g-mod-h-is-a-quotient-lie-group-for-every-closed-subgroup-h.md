---
id: fs-g-mod-h-is-a-quotient-lie-group-for-every-closed-subgroup-h
kind: false-statement
title: G/H need not be a quotient Lie group
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-quotient-manifold-by-a-closed-lie-subgroup, thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Quotient Group Theorem 21.26 and complete proof, printed pages 555-556
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Theorem 4.1 and Proposition 4.7, printed pages 28-29
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: contradiction
---

## False statement

Assume $\mathrm{AC}_\omega$. For every closed subgroup $H$ of a Lie group
$G$, the homogeneous space $G/H$ has a Lie-group structure making the coset
map $q:G\to G/H$ a homomorphism.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $G=S_3$ with its discrete zero-dimensional
Lie-group structure, and $H=\{e,(12)\}$ with its discrete subgroup structure.

[A1] Under $\mathrm{AC}_\omega$, a closed subgroup gives a smooth homogeneous
space $G/H$. [[def-countable-choice]],
[[thm-quotient-manifold-by-a-closed-lie-subgroup]].

[F1] A closed normal subgroup does give a quotient Lie group; normality is the
extra hypothesis in the quotient-group theorem.
[[thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group]].

## Refutation

**Proof technique:** contradiction from the kernel of the proposed quotient
homomorphism.

1.1 Every finite discrete group is a zero-dimensional Lie group: singleton charts take values in $\mathbb R^0$, and every map between discrete manifolds is smooth. Thus $G$ is a Lie group and its subgroup $H$ is closed. By [A1], the three-element left-coset space $G/H$ has its quotient smooth-manifold structure. [given, A1, algebra]

1.2 The subgroup $H$ is not normal. Indeed, conjugating its nonidentity element by the $3$-cycle gives $(123)(12)(123)^{-1}=(23)\notin H$. [given, algebra]

2.1 Suppose a group law on this set $G/H$ made the usual coset map $q(g)=gH$ a group homomorphism. Its kernel would be exactly $H$, because $q(g)=H$ if and only if $gH=H$, equivalently $g\in H$. Every homomorphism kernel is normal: if $h$ is in the kernel, then $q(ghg^{-1})=q(g)e q(g)^{-1}=e$. Hence $H$ would be normal, contradicting step 1.2. [step 1.1, step 1.2, assume-contra, algebra]

3.1 Therefore the smooth homogeneous space $S_3/H$ admits no group structure for which the coset map is a homomorphism. The quotient theorem [F1] is sharp: closedness supplies the manifold, whereas normality is necessary for the quotient group law. This finite witness has neither endpoint nor positive-dimensional issue, and its algebraic obstruction is choice-free; $\mathrm{AC}_\omega$ is used only to invoke the library's general homogeneous-space supplier [A1]. [A1, F1, step 2.1, discharge-contradiction] ∎
