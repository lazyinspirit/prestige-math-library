---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects.json
  precheck: pass
id: cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects
kind: counterexample
title: Isomorphic associated graded objects need not give isomorphic filtered objects
deps: ["def-associated-graded-object-of-a-filtered-object", "lem-abelian-group-model-for-spectral-sequence-computations"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement refuted

The assertion “isomorphic associated graded objects imply isomorphic filtered objects” is false. Let $A=\mathbb Z/4$ and $B=(\mathbb Z/2)^2$. Set $F_pA=F_pB=0$ for $p<0$, $F_0A=\{0,2\}$, $F_0B=(\mathbb Z/2)\times0$, and $F_pA=A$, $F_pB=B$ for $p\ge1$. These filtered objects have isomorphic graded families and nonisomorphic underlying groups.

## Facts & Assumptions

**Given:** The displayed filtrations on $A=\mathbb Z/4$ and $B=(\mathbb Z/2)^2$.

[F1] The graded pieces are $F_p/F_{p-1}$ ([[def-associated-graded-object-of-a-filtered-object]]).

[F2] The indicated groups exist with ordinary subgroup quotients and explicit residues ([[lem-abelian-group-model-for-spectral-sequence-computations]]).

## Counterexample

**Proof technique:** direct.

1.1 The sets $\{0,2\}$ and $(\mathbb Z/2)\times0$ are subgroups by the additions in [F2], so the specified families are finite increasing filtrations. Their degree-zero pieces are isomorphic via $[k]_2\mapsto[2k]_4$ for $A$ and $[k]_2\mapsto([k]_2,0)$ for $B$. The first map is well defined because $2(k+2l)\equiv2k\pmod4$, and its two images are exactly $0,2$. [F1, F2]

2.1 The degree-one quotient of $A$ maps to $\mathbb Z/2$ by $[a]_4+\{0,2\}\mapsto[a]_2$: the two cosets are $\{0,2\}$ and $\{1,3\}$, so this is an additive bijection. For $B$ the map $(a,b)+F_0B\mapsto b$ is an additive bijection. All other graded pieces are zero, since consecutive filtration pieces agree. Thus the two graded families are isomorphic in each degree. [F1, F2, step 1.1]

3.1 Every element of $B$ is killed by $2$, whereas $[1]_4$ in $A$ is not: $2[1]_4=[2]_4\ne0$. Any additive isomorphism $f:A\to B$ would satisfy $f([2]_4)=2f([1]_4)=0$, contrary to injectivity. Thus no underlying or filtered-group isomorphism exists. [F2, step 2.1] ∎

## Source notes

[Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 bounded abutment and extension interpretation; the two finite-group filtrations and all quotient calculations are supplied explicitly here.
