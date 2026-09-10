---
id: prop-principal-block-has-sylow-defect
kind: proposition
title: Principal block has sylow defect
deps: [thm-vertices-of-modules-in-a-block-lie-in-a-defect-group, thm-higman-criterion-for-relative-projectivity, thm-sylow-second-theorem]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

The principal block of $kG$, namely the unique block acting as one on the trivial module $k$, has Sylow $p$-subgroups as its defect groups.

## Facts & Assumptions

**Given:** A finite group in characteristic $p$.

[F1] A module vertex is conjugate into the block defect group. ([[thm-vertices-of-modules-in-a-block-lie-in-a-defect-group]])

[F2] Relative projectivity is equivalent to a trace equal to the identity. ([[thm-higman-criterion-for-relative-projectivity]])

[F3] Every $p$-subgroup lies in a conjugate of a Sylow subgroup. ([[thm-sylow-second-theorem]])

## Proof

**Proof technique:** direct.

1.1 On the one-dimensional trivial module every endomorphism is a scalar. Its trace from $H$ is multiplication by $[G:H]$ times that scalar. Thus Higman says it is relatively $H$-projective exactly when $p\nmid[G:H]$. Among $p$-subgroups this holds exactly for Sylow subgroups, and no proper subgroup of a Sylow has the property. Its vertices are therefore Sylow subgroups. [F2, F3]

2.1 The orthogonal central block idempotents act as orthogonal idempotent scalars summing to one, so exactly one acts as one on $k$; this is the principal block. By [F1] a Sylow vertex is conjugate into a defect group $D$. Since $D$ is a $p$-subgroup, it cannot strictly contain a Sylow subgroup, so it is Sylow. Conversely every Sylow is conjugate to $D$ by [F3], and conjugating the diagonal vertex keeps it a vertex of the same block. [F1, F3, step 1.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
