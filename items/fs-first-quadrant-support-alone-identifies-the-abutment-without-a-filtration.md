---
id: fs-first-quadrant-support-alone-identifies-the-abutment-without-a-filtration
kind: false-statement
title: First quadrant support alone identifies the abutment without a filtration
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["def-homological-spectral-sequence", "lem-abelian-group-model-for-spectral-sequence-computations", "cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects", "def-weak-convergence-of-a-spectral-sequence"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement

**False:** First-quadrant support by itself determines a target and its abutment without any target filtration data.

## Facts & Assumptions

[F1] [[def-homological-spectral-sequence]] defines first-quadrant support, page differentials and homology transitions, without target data. [[def-weak-convergence-of-a-spectral-sequence]] requires separate specified graded-target identifications.

[F2] [[lem-abelian-group-model-for-spectral-sequence-computations]] supplies $\mathbb Z/4$, $k=\mathbb Z/2$ and $k^2$ with their explicit additions. [[cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects]] specifies the two finite filtrations with graded pieces $k,k$.

## Refutation

**Given:** A stationary spectral sequence from page $2$ with terms $k$ at $(0,1)$ and $(1,0)$ and zero elsewhere, zero differentials and identity homology transitions.

1.1 These data satisfy [F1]: all differential composites vanish and the homology of each page is that same page. The support is first quadrant. Put $H_1=A=\mathbb Z/4$ with $F_{-1}A=0$, $F_0A=\{0,2\}$, $F_1A=A$, constant beyond these endpoints. The degree-zero graded piece is $k$ by $[a]_2\mapsto[2a]_4$; the degree-one quotient is $k$ by parity of the representative. Alternatively put $\widetilde H_1=B=k^2$ with $F_{-1}B=0$, $F_0B=k\times0$, $F_1B=B$. Its two pieces are $k$ by the first coordinate in the subobject and the second coordinate in the quotient. Take every other target degree zero. Thus the same specified stationary page has finite normalized abutment data to either target. [F1, F2]

2.1 Every element of $B$ is killed by $2$, whereas $2[1]_4=[2]_4\ne0$ in $A$. An additive isomorphism $A\to B$ would send $[2]_4$ to zero, contradicting injectivity. Therefore the two possible targets are not even isomorphic as unfiltered objects. Support alone cannot select between them or supply the missing extension data. The all-zero spectral sequence is also first quadrant but contains no target as part of its definition; the nonzero example above proves underdetermination even after fixing graded identifications. Zero other degrees, both finite endpoints and all four residues have been checked, without AC. [F1, F2, step 1.1] ∎
