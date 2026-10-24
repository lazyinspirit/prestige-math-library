---
id: thm-schanuel-lemma-in-an-abelian-category
kind: theorem
title: "Schanuel's lemma in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-projective-object, thm-projective-object-characterisations, def-pullbacks-and-pushouts, thm-the-pullback-of-an-epimorphism-is-an-epimorphism]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "The Stacks Project, Section 10.109: Rings of finite global dimension"
      url: "https://stacks.math.columbia.edu/tag/00O2"
pipeline_run: frontier-28
---
## Statement

If $$0\to K\to P\to A\to0\qquad\text{and}\qquad0\to K'\to P'\to A\to0$$ are short exact sequences with $P$ and $P'$ projective, then $$K\oplus P'\cong K'\oplus P.$$
## Facts & Assumptions

**Given:** Two projective presentations of the same object $A$ as displayed.

[L1] Pullbacks and pushouts provide the comparison object used in the proof ([[def-pullbacks-and-pushouts]]).

[L2] The pullback of an epimorphism is an epimorphism ([[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]]).

[L3] For a projective object, every epimorphism onto it splits ([[thm-projective-object-characterisations]]).
## Proof

**Proof technique:** direct.

1.1 Form the pullback $X=P\times_AP'$ of the two epimorphisms onto $A$ as in [L1]. By [L2], the projections $X\twoheadrightarrow P$ and $X\twoheadrightarrow P'$ are epimorphisms. Their kernels are $K'$ and $K$ respectively, so there are short exact sequences $$0\to K'\to X\to P\to0,\qquad0\to K\to X\to P'\to0.$$ [L1, L2, construct]

2.1 Since $P$ and $P'$ are projective, [L3] splits both short exact sequences. Therefore $$X\cong K'\oplus P\cong K\oplus P',$$ which yields the claimed isomorphism $$K\oplus P'\cong K'\oplus P.$$ [L3, step 1.1] ∎
