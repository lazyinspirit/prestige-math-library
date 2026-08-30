---
id: thm-sharp-five-lemma-in-an-abelian-category
kind: theorem
title: "Sharp five lemma in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-four-lemma-in-an-abelian-category]
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
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.20"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Exercise 1.3.3"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
pipeline_run: frontier-24
---

## Statement

In a commutative diagram with exact rows

```tikzcd
A_1 \arrow[r] \arrow[d, "f_1"'] & A_2 \arrow[r] \arrow[d, "f_2"'] & A_3 \arrow[r] \arrow[d, "f_3"'] & A_4 \arrow[r] \arrow[d, "f_4"'] & A_5 \arrow[d, "f_5"'] \\
B_1 \arrow[r] & B_2 \arrow[r] & B_3 \arrow[r] & B_4 \arrow[r] & B_5,
```

the following hold:

1. if $f_1$ is epic and $f_2,f_4$ are monic, then $f_3$ is monic;
2. if $f_2,f_4$ are epic and $f_5$ is monic, then $f_3$ is epic.

## Facts & Assumptions

**Given:** The commutative exact-row diagram in the statement.

[L1] The four lemma gives the monic and epic conclusions on any four-column
window with exact rows ([[thm-four-lemma-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 For the monic clause, apply [L1] to the left four columns $$A_1 \to A_2 \to A_3 \to A_4,$$ $$B_1 \to B_2 \to B_3 \to B_4.$$ The hypotheses there are exactly that $f_1$ is epic and that $f_2$ and $f_4$ are monic, so the four lemma gives that $f_3$ is monic. [L1, assume-hyp]

1.2 For the epic clause, apply [L1] to the right four columns $$A_2 \to A_3 \to A_4 \to A_5,$$ $$B_2 \to B_3 \to B_4 \to B_5.$$ The hypotheses there are exactly that $f_2$ and $f_4$ are epic and that $f_5$ is monic, so the four lemma gives that $f_3$ is epic. [L1, assume-hyp]

2.1 Therefore the sharp five lemma holds in both halves. [step 1.1, step 1.2] ∎
