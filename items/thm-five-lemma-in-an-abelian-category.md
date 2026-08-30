---
id: thm-five-lemma-in-an-abelian-category
kind: theorem
title: "Five lemma in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-sharp-five-lemma-in-an-abelian-category,
       thm-an-abelian-category-is-balanced]
justified_by: []
landmark: true
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Statement

In a commutative diagram with exact rows

```tikzcd
A_1 \arrow[r] \arrow[d, "f_1"'] & A_2 \arrow[r] \arrow[d, "f_2"'] & A_3 \arrow[r] \arrow[d, "f_3"'] & A_4 \arrow[r] \arrow[d, "f_4"'] & A_5 \arrow[d, "f_5"'] \\
B_1 \arrow[r] & B_2 \arrow[r] & B_3 \arrow[r] & B_4 \arrow[r] & B_5,
```

if $f_1,f_2,f_4,f_5$ are isomorphisms, then $f_3$ is an isomorphism.

## Facts & Assumptions

**Given:** The commutative exact-row diagram in the statement.

[L1] The sharp five lemma makes the middle map monic under one set of
hypotheses and epic under the complementary one
([[thm-sharp-five-lemma-in-an-abelian-category]]).

[L2] In an abelian category, a morphism that is both monic and epic is an
isomorphism ([[thm-an-abelian-category-is-balanced]]).

## Proof

**Proof technique:** direct.

1.1 Because $f_1,f_2,f_4,f_5$ are isomorphisms, they are in particular monic and epic. The first half of [L1] therefore makes $f_3$ monic, and the second half of [L1] makes $f_3$ epic. [L1, given]

2.1 Applying [L2] to $f_3$ now shows that $f_3$ is an isomorphism. [L2, step 1.1]

3.1 Hence the five lemma holds in every abelian category. [step 2.1] ∎
