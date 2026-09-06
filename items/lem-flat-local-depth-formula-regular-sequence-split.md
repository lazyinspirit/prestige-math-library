---
id: lem-flat-local-depth-formula-regular-sequence-split
title: A flat local map splits regular sequences into base and fibre parts
kind: lemma
status: draft
origin: pipeline
deps: [def-flat-and-faithfully-flat-modules-and-ring-maps, def-regular-sequence-on-a-module, thm-localisation-and-flat-base-change-of-regular-sequences]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/download/algebra.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $(R,\mathfrak m,k)\to(S,\mathfrak n,\ell)$ be a flat local homomorphism
of Noetherian local rings. If $x_1,\ldots,x_r$ is an $R$-regular sequence
and $\bar y_1,\ldots,\bar y_s$ is regular on the closed fibre
$S/\mathfrak mS$, then arbitrary lifts $y_j\in\mathfrak n$ make
$$x_1,\ldots,x_r,y_1,\ldots,y_s$$
an $S$-regular sequence.

## Facts & Assumptions

**Given:** a flat local map is faithfully flat.

## Proof

**Proof technique:** direct.

1.1 Flat base change preserves the injectivity of multiplication by each $x_i$ on the successive source quotients, and faithful flatness preserves their nonzero terminal quotient. Thus the $x_i$ form an $S$-regular sequence. [given]

2.1 After quotienting by the $x_i$, the induced map remains flat and has the same closed fibre. The local flatness criterion applied successively to the lifts $y_j$ promotes injectivity on the fibre quotients to injectivity on the corresponding $S$-quotients. Nakayama preserves the nonzero terminal fibre quotient. Hence the concatenated sequence is regular. [step 1.1, algebra] ∎
