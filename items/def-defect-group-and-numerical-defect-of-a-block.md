---
id: def-defect-group-and-numerical-defect-of-a-block
kind: definition
title: Defect group and numerical defect of a block
deps: [thm-block-bimodule-has-a-diagonal-vertex]
provenance:
  statement: literature-derived
  proof: not-applicable
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§5.2, 11.3, 11.6, 12.3–12.5; especially Lemma 12.4.4 and Theorem 12.4.5, pp.240–241
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
---

## Definition

For the block bimodule $kGb$, a **defect group** is a $p$-subgroup $D\le G$ for which $\Delta D$ is a vertex. Such a subgroup exists by [[thm-block-bimodule-has-a-diagonal-vertex]], since conjugating a vertex produces another vertex. Its order is $p^d$ for a unique integer $d\ge0$, called the **numerical defect**. The following conjugacy theorem shows that $d$ is independent of the defect group. Defect zero means $D=1$. This definition uses the residue-field bimodule; it asserts no identification of lattice vertices.

## Sources

Webb, A Course in Finite Group Representation Theory, §§5.2, 11.3, 11.6, 12.3–12.5; especially Lemma 12.4.4 and Theorem 12.4.5, pp.240–241. Local argument and conventions as displayed above.
