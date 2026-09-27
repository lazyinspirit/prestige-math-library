---
id: fs-schur-covering-groups-are-unique-for-all-finite-groups
kind: false-statement
title: "All finite Schur covers are unique"
status: published
origin: pipeline
deps: [def-schur-covering-group-of-a-finite-group, thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square, def-axiom-of-choice, def-supplied-projective-resolution-datum]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-05-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assuming the Axiom of Choice and supplied projective-resolution data for
group homology, every finite group has a unique Schur covering group up to
isomorphism.

## Facts & Assumptions

**Given:** The stated choice and resolution hypotheses. Let
$V=C_2\times C_2$.

## Refutation

**Proof technique:** direct.

1.1 The abelian-multiplier theorem gives $M(V)\cong\bigwedge^2V\cong C_2$. In $D_8=\langle r,s\mid r^4=s^2=1,\ srs=r^{-1}\rangle$, the center and commutator subgroup are both $\langle r^2\rangle\cong C_2$, and the quotient is $V$. In $Q_8=\{\pm1,\pm i,\pm j,\pm k\}$, the center and commutator subgroup are both $\{\pm1\}\cong C_2$, and its quotient is also $V$. Both quotient maps are therefore finite stem extensions with multiplier kernel and hence Schur covers. [given, algebra]

2.1 The group $D_8$ has five nonidentity involutions whereas $Q_8$ has one, so the two covers are not isomorphic. The stated uniqueness claim is false. [step 1.1, contradiction] ∎
