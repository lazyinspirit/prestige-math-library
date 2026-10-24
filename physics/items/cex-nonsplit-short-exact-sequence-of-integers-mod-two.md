---
id: cex-nonsplit-short-exact-sequence-of-integers-mod-two
kind: counterexample
title: "$0\\to\\mathbb Z\\xrightarrow{\\times2}\\mathbb Z\\to\\mathbb Z/2\\mathbb Z\\to0$ does not split"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-split-short-exact-sequence, thm-splitting-lemma-for-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement refuted

The short exact sequence of $\mathbb Z$-modules
$$0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\xrightarrow q\mathbb Z/2\mathbb Z\to0$$
does not split, where $q$ is reduction modulo two.

## Facts & Assumptions

**Given:** The displayed maps.

[F1] A split short exact sequence has a section of its epimorphism, equivalently a retraction of its monomorphism ([[def-split-short-exact-sequence]]).

[L1] Sections, retractions, and compatible direct-sum decompositions are equivalent for a short exact sequence ([[thm-splitting-lemma-for-modules]]).

## Counterexample

**Proof technique:** direct.

1.1 Multiplication by two is injective, $q$ is surjective, and $\ker q=2\mathbb Z$, the image of multiplication by two; hence the sequence is short exact. [given, algebra]

1.2 If $s:\mathbb Z/2\mathbb Z\to\mathbb Z$ were a section, put $x=s(1+2\mathbb Z)$. Then $q(x)=1+2\mathbb Z$, so $x$ is odd, while $2x=s(0)=0$, forcing $x=0$, a contradiction. [assume-hyp, F1, algebra]

2.1 Therefore no section exists, and [F1] and [L1] show that the short exact sequence does not split. Equivalently, a retraction $r$ would satisfy $2r(1)=r(2)=1$. [step 1.1, step 1.2, F1, L1] ∎
