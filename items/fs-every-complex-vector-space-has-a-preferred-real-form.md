---
id: fs-every-complex-vector-space-has-a-preferred-real-form
kind: false-statement
title: "FALSE: every complex vector space has a preferred real form"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-real-forms-correspond-to-conjugations,
       thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Mikhail Troshkin, Real-complex linear algebra and abelian varieties"
      url: "https://derivedartwork.wordpress.com/2021/06/26/real-complex-linear-algebra-and-abelian-varieties/"
---

## Statement

Every nonzero complex vector space carries a real form singled out by the
complex structure alone, in the precise sense that the real form is invariant
under every complex-linear automorphism.

## Facts & Assumptions

**Given:** A nonzero complex vector space $W$ and a real form $W_0\subseteq W$.

[L1] A real form is the fixed space of a conjugation, and its complexification
recovers $W$; in particular every $w\in W$ has a unique expression
$w=u+iv$ with $u,v\in W_0$
([[cor-real-forms-correspond-to-conjugations]],
[[thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space]]).

## Refutation

**Proof technique:** direct.

1.1 Multiplication by $i$ is a complex-linear automorphism of $W$. If it preserved $W_0$, then $iu\in W_0$ for every $u\in W_0$. [given, algebra]

2.1 Choose $0\ne u\in W_0$. Under the preservation assumption of step 1.1, $iu\in W_0$, so $iu=(iu)+i0=0+i u$ would be two decompositions of the same vector with real and imaginary parts in $W_0$, contradicting uniqueness in [L1]. [L1, step 1.1, contradiction]

3.1 Thus no real form of a nonzero complex vector space is invariant under all complex-linear automorphisms. The complex structure alone therefore singles out no preferred real form, and the claim is false. [step 2.1] ∎
