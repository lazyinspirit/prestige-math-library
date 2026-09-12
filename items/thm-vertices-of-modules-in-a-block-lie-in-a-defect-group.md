---
id: thm-vertices-of-modules-in-a-block-lie-in-a-defect-group
kind: theorem
title: Vertices of modules in a block lie in a defect group
deps: [lem-block-relative-trace-characterizes-diagonal-projectivity, thm-higman-criterion-for-relative-projectivity, lem-relative-projectivity-mackey-intersections-for-finite-modules]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

If $M$ is a nonzero indecomposable finite-dimensional $kG$-module with $bM=M$ and $D$ is a defect group of $b$, every vertex of $M$ is conjugate into $D$.

## Facts & Assumptions

**Given:** $M,b,D$ as in the statement.

[F1] A defect group supplies $b=\operatorname{Tr}_D^G(a)$ for $a\in(kGb)^D$. ([[lem-block-relative-trace-characterizes-diagonal-projectivity]])

[F2] A trace equal to the identity proves relative projectivity. ([[thm-higman-criterion-for-relative-projectivity]])

[F3] Vertices of a relatively $D$-projective indecomposable module are conjugate into $D$. ([[lem-relative-projectivity-mackey-intersections-for-finite-modules]])

## Proof

**Proof technique:** direct.

1.1 Choose $a$ from [F1]. Its multiplication action on $M$ is $D$-linear because $a$ commutes with $D$. The trace of that endomorphism is multiplication by $\operatorname{Tr}_D^G(a)=b$, hence is $\mathrm{id}_M$ since $bM=M$. [F1]

2.1 Higman makes $M$ relatively $D$-projective. Vertex containment in [F3] then places each vertex in a conjugate of $D$, or equivalently conjugates it into $D$. [F2, F3, step 1.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
