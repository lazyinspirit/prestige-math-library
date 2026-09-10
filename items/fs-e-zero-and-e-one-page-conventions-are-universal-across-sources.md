---
id: fs-e-zero-and-e-one-page-conventions-are-universal-across-sources
kind: false-statement
title: E zero and e one page conventions are universal across sources
deps: ["prop-e-zero-is-the-associated-graded-complex", "prop-e-one-is-homology-of-the-associated-graded-complex", "def-homological-spectral-sequence", "lem-abelian-group-model-for-spectral-sequence-computations"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
    - title: Raffaele Vitolo, On different geometric formulations of Lagrangian formalism (corrected author version), Appendix B p33; filtered
        normalization pp34–35
      url: https://poincare.unisalento.it/vitolo/vitolo_files/publications/journals/6a_VsComp.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

It is false that the labels $E_0$ and $E_1$ have universal meanings independent of the construction convention. In particular the initial object of a homology exact-couple iteration can be called generic page zero even though its filtration-normalized label is page one.

## Facts & Assumptions

**Given:** The trivially filtered identity complex and the two explicitly cited construction-numbering conventions.

[F1] The library initial page is the associated graded complex ([[prop-e-zero-is-the-associated-graded-complex]]).

[F2] The library first page is its homology ([[prop-e-one-is-homology-of-the-associated-graded-complex]]).

[F3] Spectral-sequence transition isomorphisms include a declared starting-page convention ([[def-homological-spectral-sequence]]).

[F4] Integer complexes use ordinary kernels and cokernels ([[lem-abelian-group-model-for-spectral-sequence-computations]]).

## Refutation

**Proof technique:** direct.

1.1 Let $C_1=C_0=ℤ$ with d=1, all other groups zero, and $F_pC=0$ for p<0, $F_pC=C$ for p≥0. Its associated graded is this nonzero two-term complex in column zero. By [F1], $E^0$ is nonzero, whereas ker(1)=0 and coker(1)=0 give $E^1=0$ by [F2] and [F4]. All subsequent pages are zero by [F3]. [F1, F2, F3, F4]

2.1 Every filtered piece and every graded quotient in this example has zero homology. Thus the triangle of homology groups of the filtration is the zero triangle. Here an exact couple means maps D→D→Q→D with image equal to the next kernel at every vertex; for the zero triangle every image and kernel is zero. Its differential Q→D→Q is zero, and deriving it replaces zero by im(0)=0 and H(0)=0, so every derived triangle is again zero. No general existence theorem for exact couples is used. [F4, step 1.1]

3.1 Vitolo, Appendix B p.33, the iteration immediately before the proposition on generic iteration, labels the input differential object of the generic exact couple $E_0$ and its first homology $E_1$. Applied to the zero triangle of step 2.1, its generic initial page $T_0$ is therefore zero. Weibel’s filtration exact-couple example and construction theorem, pp.155–156, instead label the initial homology couple term $E^1=H(\operatorname{gr}C)$. Thus the dictionary is $T_j=E^{j+1}$ on the common zero tail, while the library $E^0$ in step 1.1 is nonzero. These are actual different page-zero objects under two specified construction labels. [step 1.1, step 2.1]

4.1 Vitolo's separately normalized filtered construction, the theorem on filtered differential objects pp.34–35, also inserts the associated graded at $E_0$ and agrees with the library on that point. The comparison in step 3.1 concerns its generic couple iteration only. For a nonzero homological differential, replacing r by j+1 while retaining coordinates changes its bidegree to $(-(j+1),j)$, not $(-j,j-1)$; the definition [F3] therefore requires the convention and grading translation to be stated together. In the displayed zero tail no degree conflict arises. [F3, step 3.1, algebra] ∎

## Source notes

[Vitolo, corrected author version](https://poincare.unisalento.it/vitolo/vitolo_files/publications/journals/6a_VsComp.pdf), Appendix B pp.31–35, especially the iteration before Proposition 8.2 p.33 and Theorem 8.1 p.35; [Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Example 5.9.3 and Theorem 5.9.4 pp.155–156. Only the numbering conventions are used externally; the zero-couple calculation is proved locally.
