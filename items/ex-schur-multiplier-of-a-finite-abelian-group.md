---
id: ex-schur-multiplier-of-a-finite-abelian-group
kind: example
title: "Multiplier of a finite abelian group"
status: published
origin: pipeline
deps: [thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square, thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form, def-axiom-of-choice, def-supplied-projective-resolution-datum]
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

## Example

Assume the Axiom of Choice and supplied projective-resolution data for group
homology. For $A\cong C_{n_1}\times\cdots\times C_{n_r}$,
$$M(A)\cong\bigoplus_{1\le i<j\le r} C_{\gcd(n_i,n_j)}.$$

## Facts & Assumptions

**Given:** The stated choice and resolution hypotheses and the invariant-factor
decomposition of $A$.

## Verification

**Proof technique:** direct.

1.1 For two abelian groups $B,C$, the alternating universal property gives $\bigwedge^2(B\oplus C)\cong \bigwedge^2B\oplus(B\otimes C)\oplus \bigwedge^2C$: an alternating pairing on the direct sum is exactly a pairing on each summand plus an arbitrary bilinear cross-pairing. Iterate over the finite summands. Each cyclic summand has zero exterior square, while $C_m\otimes C_n\cong C_{\gcd(m,n)}$ by the relations $m(1\otimes1)=n(1\otimes1)=0$. [given, algebra]

2.1 Applying [[thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square]] gives the displayed formula, including the empty sum $0$ when $r\le1$. [step 1.1, algebra] ∎
