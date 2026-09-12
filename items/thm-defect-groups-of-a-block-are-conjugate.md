---
id: thm-defect-groups-of-a-block-are-conjugate
kind: theorem
title: Defect groups of a block are conjugate
deps: [def-defect-group-and-numerical-defect-of-a-block, thm-green-vertex-source-existence-and-conjugacy]
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
    - title: Webb, A Course in Finite Group Representation Theory, §§5.2, 11.3, 11.6, 12.3–12.5; especially Lemma 12.4.4 and Theorem 12.4.5, pp.240–241
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

All defect groups of a block $b$ are conjugate in $G$. Every conjugate of a defect group is again a defect group, so the numerical defect is well-defined.

## Facts & Assumptions

**Given:** Defect groups $D,E$ for the same block.

[F1] Defect groups are the components of diagonal vertices. ([[def-defect-group-and-numerical-defect-of-a-block]])

[F2] Vertices of one indecomposable module are conjugate in its ambient group. ([[thm-green-vertex-source-existence-and-conjugacy]])

## Proof

**Proof technique:** direct.

1.1 By [F2], some $(x,y)\in G\times G$ satisfies $(x,y)\Delta D(x,y)^{-1}=\Delta E$. Projecting to the first coordinate gives $xDx^{-1}=E$. Thus the groups have equal orders, proving independence of the numerical defect. [F1, F2]

2.1 Conversely, conjugation by $(x,x)$ takes $\Delta D$ to $\Delta(xDx^{-1})$ and preserves its vertex property. Hence $xDx^{-1}$ is a defect group by [F1]. [F1, F2] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§5.2, 11.3, 11.6, 12.3–12.5; especially Lemma 12.4.4 and Theorem 12.4.5, pp.240–241. Local argument and conventions as displayed above.
