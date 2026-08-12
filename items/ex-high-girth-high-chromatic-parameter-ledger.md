---
id: ex-high-girth-high-chromatic-parameter-ledger
kind: example
title: "A parameter ledger for the high-girth, high-chromatic alteration proof"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-exponential-function-and-e, def-natural-logarithm, thm-natural-logarithm-laws, lem-exponential-dominates-one-plus-x, cor-exponential-reciprocal-and-positivity, thm-exponential-is-strictly-increasing, lem-finite-probability-basic-laws, thm-markov-inequality, thm-finite-union-bound, thm-positive-probability-existence-principle, lem-random-graph-short-cycle-expectation, lem-random-graph-independence-number-bound, thm-erdos-high-girth-and-high-chromatic-number]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, proof of Theorem 6.3"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Example

For the targets $k=2$ and $\ell=3$, choose
$$n=2^{60},\qquad p=n^{-5/6}=2^{-50},\qquad s=n/4=2^{58}.$$
These parameters make both failure probabilities in the alteration proof less than $1/2$.

## Facts & Assumptions

**Given:** The explicit parameters in the Example.

[L1] The expected number of cycles of length at most $3$ is at most $n^3p^3/6$ ([[lem-random-graph-short-cycle-expectation]]).

[L2] $\mathbb P(\alpha(G(n,p))\ge s)\le\exp(s\log n-p\binom s2)$ ([[lem-random-graph-independence-number-bound]]).

[L3] The exponential is strictly increasing and positive, $\exp(-x)=1/\exp(x)$, $1+x\le\exp(x)$, and the logarithm is the increasing inverse of the exponential with its product law ([[def-real-exponential-function-and-e]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[lem-exponential-dominates-one-plus-x]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]]).

[L4] Markov bounds nonnegative upper tails; the union bound controls finite unions; complements have complementary probabilities; and positive probability gives a witness ([[thm-markov-inequality]], [[thm-finite-union-bound]], [[lem-finite-probability-basic-laws]], [[thm-positive-probability-existence-principle]]).

[L5] The high-girth alteration deletes one vertex per short cycle and compares the surviving order with the independence number ([[thm-erdos-high-girth-and-high-chromatic-number]]).

## Verification

**Proof technique:** constructive.

1.1 Here $n^3p^3/6=n^{1/2}/6$, so [L4] at the threshold $n/2$ bounds the short-cycle failure probability by $n^{-1/2}/3<1/2$. [L1, L4, algebra]

1.2 Since $p(s-1)/2=2^{-51}(2^{58}-1)>127$, while [L3] gives $\log n=60\log2\le60$, one has $s\log n-p\binom s2=s(\log n-p(s-1)/2)<-67s<-1$. Thus [L2] and [L3] bound the independence failure probability by a number less than $\exp(-1)=1/e\le1/2$. [L2, L3, algebra]

2.1 By [L4], the union of the two failure events has probability less than $1$, so its complement has positive probability and contains a graph with fewer than $n/2$ triangles and independence number below $n/4$. Delete one vertex per triangle. More than $n/2$ vertices survive, no triangle survives, and any two-colouring would have an independent colour class larger than $n/4$. [step 1.1, step 1.2, L4, L5, construct]

3.1 Hence the survivor has girth greater than $3$ and chromatic number greater than $2$, with every integrality and strict inequality explicit. [step 2.1, L5, discharge-construct] ∎
