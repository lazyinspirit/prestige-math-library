---
id: ex-depth-lemma-three-inequalities
title: Three sharp Depth Lemma inequalities
kind: example
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-depth-lemma, def-depth-with-respect-to-an-ideal, def-regular-sequence-on-a-module]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (ex-depth-lemma-three-inequalities). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R=k\llbracket t\rrbracket$ and $k=R/(t)$. The three Depth Lemma lower bounds are sharp:

1. in $0\to k\to k\oplus R\to R\to0$, the middle bound is
   $0=\min\{0,1\}$;
2. in $0\to R\xrightarrow{t}R\to k\to0$, the left bound is
   $1=\min\{1,0+1\}$;
3. in the same nonsplit sequence, the right bound is
   $0=\min\{1-1,1\}$.

## Facts & Assumptions

**Given:** The Axiom of Choice; The three short exact sequences displayed in the Example; depth and regular sequences use [[def-depth-with-respect-to-an-ideal]] and [[def-regular-sequence-on-a-module]].

## Verification

**Proof technique:** direct.

1.1 The maximal ideal of $R$ is $(t)$. Multiplication by $t$ is injective on $R$, so $(t)$ is an $R$-regular sequence of length one. For any nonzero $r\in(t)$, write $r=t^m u$ with $m\ge1$ and $u$ a unit, using the first nonzero coefficient of the power series. In $R/(r)$, the class of $t^{m-1}$ is nonzero and is annihilated by every element of $(t)$. Thus no regular sequence in $(t)$ has length two, and $\operatorname{depth}R=1$. The same annihilation gives $\operatorname{depth}_R k=0$. [given, algebra]

2.1 The first sequence is split exact. The second and third sequences are exact because $t$ is a nonzerodivisor and its cokernel is $k$. Every element of $(t)$ annihilates the nonzero element $(1,0)$ of $k\oplus R$, so this middle module has depth zero. [step 1.1, algebra]

3.1 Substitution of the depth triples $(0,0,1)$ and $(1,1,0)$ into the three bounds of [[thm-depth-lemma]] gives the displayed equalities, so no lower bound can be increased in general. [step 1.1, step 2.1, algebra] ∎
