---
id: ex-the-regular-module-of-cp-in-characteristic-p
kind: example
title: "The regular module of Cp in characteristic p is indecomposable with a unique simple quotient"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-kg-is-local-iff-g-is-a-p-group]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Example

Let $C_p=\langle g\rangle$ and let $k$ have characteristic $p$. Then the
regular $kC_p$-module is indecomposable, and its unique simple quotient is the
trivial module $k$.

## Facts & Assumptions

**Given:** The cyclic group $C_p$ and a field $k$ of characteristic $p$.

[L1] Over every field of characteristic $p$, the group algebra of a finite $p$-group is local
([[thm-kg-is-local-iff-g-is-a-p-group]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the algebra $A:=kC_p$ is local. A nontrivial decomposition of the left regular module would give a nontrivial idempotent projection in $\operatorname{End}_A({}_AA)\cong A^{\mathrm{op}}$, but a local algebra has no nontrivial idempotents. Hence the regular module is indecomposable. [L1, given, algebra]

2.1 The augmentation ideal is maximal because its quotient is $k$, and it is the unique maximal left ideal because $A$ is local. Every simple quotient of the regular module has a maximal left ideal as its kernel, so it is the augmentation quotient $k$, with the trivial $C_p$-action. Thus the regular module has the asserted unique simple quotient. [L1, step 1.1, algebra] ∎
