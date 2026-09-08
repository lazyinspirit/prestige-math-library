---
id: lem-sequential-repetition-amplifies-error
kind: lemma
title: "Sequential repetition amplifies completeness and soundness gaps"
status: published
origin: session
deps: [def-completeness-and-soundness, def-expectation-on-a-finite-probability-space, thm-finite-law-of-total-probability]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local proof and prerequisite repair; not independent review or a whole-closure audit"
    delegated_by: owner
sources:
  references:
    - title: "Goldreich, Foundations of Complexity Theory, Claim 11.2.1"
      url: "https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf"
---

## Statement

If a protocol has completeness $c>1/2$ and soundness $s<1/2$, then for every $\varepsilon>0$ a polynomially bounded odd number of sequential fresh-coin repetitions, accepting by strict majority, has completeness at least $1-\varepsilon$ and soundness at most $\varepsilon$.

## Facts & Assumptions

**Given:** constants $c>1/2>s$, a target $\varepsilon>0$, and sequential independent verifier coins.

[F1] Expectations are finite weighted sums by [[def-expectation-on-a-finite-probability-space]]. Grouping such sums by earlier histories uses [[thm-finite-law-of-total-probability]], with zero-probability histories omitted.

## Proof

1.1 Fix $p$ with $\max\{s,1-c,0\}<p<1/2$. On a yes-input, use one honest strategy afresh in each repetition, ignoring previous copies. Let $Y_i$ indicate rejection in copy $i$. On a no-input, fix any adaptive cheating strategy and instead let $Y_i$ indicate acceptance. In both cases, conditional on the full history of earlier copies, $\Pr(Y_i=1\mid\text{history})\le p$: on yes-inputs this is completeness, and on no-inputs the previous history fixes a legitimate strategy for the next fresh-coin copy, so soundness applies. The verifier is reset between copies. [given, construct]

2.1 Put $t=1/(2p)>1$. If the conditional success probability of $Y_i$ is $u\le p$, then the conditional average of $t^{2Y_i}$ is $1-u+ut^2\le1-p+pt^2$. Grouping finite sums by complete previous-copy histories and inducting on $j$ therefore gives $\mathbb E[t^{2\sum_{i=1}^jY_i}]\le(1-p+pt^2)^j$, starting with expectation one at $j=0$. This argument allows dependence between copies. [F1, step 1.1, algebra]

3.1 On $\sum_{i=1}^kY_i\ge k/2$ one has $t^{2\sum_iY_i}\ge t^k$. Summing this pointwise bound over the finite coin space gives $\Pr(\sum_iY_i\ge k/2)\le q^k$, where $q=(1-p+pt^2)/t=1/2+2p(1-p)=1-2(1/2-p)^2$ satisfies $0<q<1$. For odd $k$, either a majority rejection on a yes-input or a majority acceptance on a no-input is contained in this event. [F1, step 2.1, algebra]

4.1 Write $d=q^{-1}-1>0$. Induction using $(1+d)^{k+1}\ge(1+kd)(1+d)\ge1+(k+1)d$ gives $q^k\le1/(1+kd)$. Choose an odd integer $k$ making this at most $\varepsilon$. For fixed $c,s,\varepsilon$ it is a constant independent of input length, so the repeated verifier retains polynomial time, communication and randomness bounds. The yes-input honest strategy and the uniform bound against every no-input cheating strategy give the two asserted errors. [step 1.1, step 3.1, choose, algebra] ∎
