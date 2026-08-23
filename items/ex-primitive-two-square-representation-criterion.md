---
id: ex-primitive-two-square-representation-criterion
kind: example
title: "The primitive two-square criterion distinguishes $289$, $34$, and $833$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, thm-primitive-sum-of-two-squares-characterisation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Example E.II.7(a)–(c)"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Example

The integers $289$ and $34$ have primitive representations, whereas $833$ is representable but has no primitive two-square representation:

$$289=8^2+15^2,\qquad34=3^2+5^2,\qquad833=28^2+7^2.$$

## Facts & Assumptions

**Given:** The three displayed integers and coordinate pairs.

[F1] A two-square representation is primitive when its coordinate gcd is $1$ ([[def-sum-of-two-squares-representation]]).

[L1] A positive integer $n$ has a primitive two-square representation if and only if $v_2(n)\le1$ and no prime $q\equiv3\pmod4$ divides $n$ ([[thm-primitive-sum-of-two-squares-characterisation]]).

## Verification

**Proof technique:** direct.

1.1 One has $8^2+15^2=289$ with $\gcd(8,15)=1$, and $3^2+5^2=34$ with $\gcd(3,5)=1$, so both displayed representations are primitive by [F1]. [F1, L1, algebra]

1.2 One has $28^2+7^2=833$, but $\gcd(28,7)=7$, so the displayed representation is not primitive. [F1, algebra]

2.1 Since $833=7^2\cdot17$ and $7\equiv3\pmod4$, [L1] excludes every primitive representation of $833$, not just the displayed one. [step 1.2, L1, algebra] ∎
