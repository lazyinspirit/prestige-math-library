---
id: fs-an-additive-functor-commutes-with-homology
kind: false-statement
title: "FALSE: an additive functor commutes with homology"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps,
       thm-an-exact-functor-commutes-with-homology,
       def-additive-functor]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7: Additive functors"
      url: "https://stacks.math.columbia.edu/tag/010N"
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

Every additive functor between abelian categories commutes with homology.

## Facts & Assumptions

**Given:** The additive functor $F:\mathbf{Ab}\to\mathbf{Ab}$ defined by $F(A)=A/2A$, and the complex $$0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\to0.$$

[L1] Additive functors apply degreewise to complexes and chain maps ([[prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps]]).

[L2] Exactness is the hypothesis that makes a functor commute with homology ([[thm-an-exact-functor-commutes-with-homology]]).

[L3] Additivity means preservation of sums on hom-groups ([[def-additive-functor]]).

## Refutation

**Proof technique:** direct.

1.1 The functor $F$ is additive in the sense of [L3], and by [L1] it sends the displayed complex to $$0\to\mathbb Z/2\xrightarrow{0}\mathbb Z/2\to0,$$ because multiplication by $2$ becomes zero after quotienting by $2A$. The original complex has $H_1=0$ and $H_0\cong\mathbb Z/2$, while the new complex has $H_1\cong\mathbb Z/2$. [L1, L3, given, algebra]

2.1 Therefore $$F(H_1(C))=0\qquad\text{but}\qquad H_1(F(C))\cong\mathbb Z/2,$$ so $F$ does not commute with homology. The contrast with [L2] shows that exactness is genuinely load-bearing. [L2, step 1.1] ∎
