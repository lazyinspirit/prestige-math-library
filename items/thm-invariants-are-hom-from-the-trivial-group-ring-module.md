---
id: thm-invariants-are-hom-from-the-trivial-group-ring-module
kind: theorem
title: "Invariants are Hom from the trivial module"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-group-ring-module-and-trivial-module-convention, def-invariants-functor-of-a-group-module]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Lemma 6.1.1"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

For every left $G$-module $M$, evaluation at $1$ is a natural isomorphism $\operatorname{Hom}_{\mathbb Z[G]}(\mathbb Z,M)\cong M^G$.

## Proof

**Given:** A left $G$-module $M$ with the trivial-module convention.

1.1 If $f$ is $\mathbb Z[G]$-linear, then $g f(1)=f(g\cdot1)=f(1)$, so evaluation lands in $M^G$. [given]

2.1 For $m\in M^G$, define $f_m(z)=zm$. Then $f_m(g\cdot z)=zm=g f_m(z)$, hence $f_m$ is $\mathbb Z[G]$-linear; evaluation sends it to $m$, and a homomorphism from $\mathbb Z$ is determined by $1$. The two constructions commute with maps $M\to N$. [step 1.1] ∎
