---
id: ex-the-splitting-lemma-instantiated-at-the-published-module-theorem
kind: example
title: "The splitting lemma instantiated at the published module theorem"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-splitting-lemma-in-an-abelian-category,
       thm-splitting-lemma-for-modules]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.10"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: frontier-23
---

## Example

The categorical splitting lemma
[[thm-splitting-lemma-in-an-abelian-category]] specializes in
$R\text{-}\mathbf{Mod}$ to the published module statement
[[thm-splitting-lemma-for-modules]]. The section, retraction, and direct-sum
identity are literally the same equations.

## Facts & Assumptions

**Given:** A short exact sequence of modules together with either a section of
its quotient map or a retraction of its inclusion.

[L1] From either a section or a retraction, the categorical splitting lemma
produces the unique complementary retraction or section
([[thm-splitting-lemma-in-an-abelian-category]]).

[L2] The published module splitting lemma states the same criterion in the
module category
([[thm-splitting-lemma-for-modules]]).

## Verification

**Proof technique:** direct.

1.1 A short exact sequence of modules is a short exact sequence in an abelian category, and the given section or retraction is exactly the additional datum required by [L1]. [given, L1, L2]

2.1 The complementary map produced by [L1] satisfies $p s = 1$, $r i = 1$, and $i r + s p = 1$, exactly the module equations stated in [L2]. [L1, L2, step 1.1]

3.1 Therefore the module theorem is the concrete $R\text{-}\mathbf{Mod}$ instance of the categorical one. [step 2.1] ∎
