---
id: ex-depth-lemma-three-inequalities
title: Three sharp Depth Lemma inequalities
kind: example
status: published
origin: pipeline
deps: [thm-depth-lemma, cor-depth-lemma-unequal-depth-equalities]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Example

Let $R=k\llbracket t\rrbracket$ and $k=R/(t)$. The three Depth Lemma lower bounds are sharp:

1. in $0\to k\to k\oplus R\to R\to0$, the middle bound is
   $0=\min\{0,1\}$;
2. in $0\to R\xrightarrow{t}R\to k\to0$, the left bound is
   $1=\min\{1,0+1\}$;
3. in the same nonsplit sequence, the right bound is
   $0=\min\{1-1,1\}$.

## Facts & Assumptions

**Given:** $\operatorname{depth}R=1$ and $\operatorname{depth}k=0$.

## Verification

**Proof technique:** direct.

1.1 The first sequence is split exact. The second and third sequences are exact because $t$ is a nonzerodivisor and its cokernel is $k$. [given]

2.1 Substitution of the depth triples $(0,0,1)$ and $(1,1,0)$ gives the three equalities displayed above, so no lower bound can be increased in general. [step 1.1, algebra] ∎
