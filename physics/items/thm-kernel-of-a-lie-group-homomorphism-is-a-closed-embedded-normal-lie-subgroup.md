---
id: thm-kernel-of-a-lie-group-homomorphism-is-a-closed-embedded-normal-lie-subgroup
kind: theorem
title: Kernels are closed embedded normal Lie subgroups
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-lie-group-homomorphisms-have-constant-rank, thm-cartans-closed-subgroup-theorem, thm-constant-rank-theorem-for-manifolds]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Theorem 21.27 and proof, printed page 556
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Corollary 9.5 and proof, printed pages 53–54
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. If $F:G\to H$ is a smooth Lie-group
homomorphism, then $K=\ker F$ is a closed embedded normal Lie subgroup and

$$\operatorname{Lie}(K)=\ker(dF_e).$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth Lie-group homomorphism $F:G\to H$.

[A1] Closed subgroups have unique embedded Lie-subgroup structures under countable choice. [[def-countable-choice]], [[thm-cartans-closed-subgroup-theorem]].

[F1] Lie-group homomorphisms have constant rank, and the constant-rank theorem gives the local form $(u,v)\mapsto(u,0)$. [[thm-lie-group-homomorphisms-have-constant-rank]], [[thm-constant-rank-theorem-for-manifolds]].

## Proof

**Proof technique:** closed subgroup plus the constant-rank normal form.

1.1 The identity singleton in $H$ is closed, so $K=F^{-1}(e_H)$ is closed. The homomorphism law gives $gKg^{-1}\subseteq K$ for every $g\in G$, and applying it to $g^{-1}$ gives equality. Thus $K$ is a closed normal subgroup, and [A1] gives its unique embedded Lie-subgroup structure. [A1, given, algebra]

2.1 Let $r=\operatorname{rank}dF_e$. By [F1], the rank is constant. Choose constant-rank charts at $e$ and $e_H$ that send these points to zero and in which $F$ is $(u,v)\mapsto(u,0)$. In the source chart, the fibre $F^{-1}(e_H)=K$ is locally the slice $u=0$, whose tangent space at the origin is exactly the kernel of the displayed linear map. Because [A1] gives $K$ the embedded subspace structure, this slice tangent is $T_eK$. Hence $T_eK=\ker dF_e$. [A1, F1, step 1.1]

3.1 By definition $\operatorname{Lie}(K)=T_eK$, so step 2.1 proves the formula. The trivial kernel, the constant map, disconnected groups, and ranks zero or full are included. Countable choice is used only through [A1]. [A1, step 2.1] ∎
