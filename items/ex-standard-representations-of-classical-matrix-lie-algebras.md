---
id: ex-standard-representations-of-classical-matrix-lie-algebras
kind: example
title: Standard representations of classical matrix Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-representation-of-a-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, Examples 11.1 and classical groups in §6, printed pp. 38–44 and 62"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §4.1, printed pp. 49–50"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Example

The matrix Lie algebras $\mathfrak{gl}_n$, $\mathfrak{sl}_n$,
$\mathfrak{so}_n$, and $\mathfrak{sp}_{2n}$ act on their defining vector
spaces by matrix multiplication.

## Facts & Assumptions

**Given:** One of the displayed bracket-closed matrix Lie algebras over its
defining field, and its defining vector space $V$.

[L1] A representation is equivalently a bilinear action satisfying
$[X,Y]v=X(Yv)-Y(Xv)$
([[def-representation-of-a-lie-algebra]]).

## Verification

**Proof technique:** direct.

1.1 For all endomorphisms $X,Y$ and $v\in V$, the commutator definition gives $[X,Y]v=(XY-YX)v=X(Yv)-Y(Xv)$. [given, algebra]

2.1 Matrix multiplication is bilinear in the matrix and vector variables. Together with step 1.1, this verifies both conditions in the equivalence [L1], so restriction to each named bracket-closed matrix Lie algebra is a representation. [step 1.1, L1, algebra] ∎
