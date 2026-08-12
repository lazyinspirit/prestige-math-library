---
id: ex-diagonal-ramsey-lower-bound-by-the-union-bound
kind: example
title: "The random-colouring proof of $R(k,k)>2^{k/2}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-erdos-renyi-random-graph, lem-random-graph-fixed-pattern-probability, lem-finite-probability-basic-laws, thm-finite-union-bound, thm-positive-probability-existence-principle, def-off-diagonal-ramsey-number, thm-diagonal-ramsey-counting-lower-bound, def-binomial-coefficient, thm-binomial-closed-formula, def-factorial-and-falling-factorial, def-rational-power, lem-rational-power-monotone, lem-integer-part]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Section 2.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Example

For every natural $k\ge3$, a uniformly random red-blue colouring of the edges of a suitable complete graph proves the strict diagonal Ramsey bound
$$R(k,k)>2^{k/2}.$$

## Facts & Assumptions

**Given:** A natural $k\ge3$ and $n=\lfloor2^{k/2}\rfloor$.

[L1] A uniform red-blue edge colouring is equivalently $G(n,1/2)$ ([[def-erdos-renyi-random-graph]]).

[L2] Prescribing $r$ edge colours has probability $2^{-r}$ ([[lem-random-graph-fixed-pattern-probability]]).

[L3] Probability of a finite union is at most the sum of its event probabilities, complements have complementary probabilities, and positive probability yields a witness ([[thm-finite-union-bound]], [[lem-finite-probability-basic-laws]], [[thm-positive-probability-existence-principle]]).

[L4] $R(k,k)$ is the least order forcing a monochromatic $k$-clique, and the published theorem states the same strict bound ([[def-off-diagonal-ramsey-number]], [[thm-diagonal-ramsey-counting-lower-bound]]).

[L5] Binomial coefficients have the factorial formula, and $n$ is the integer part of $2^{k/2}$ ([[def-binomial-coefficient]], [[thm-binomial-closed-formula]], [[def-factorial-and-falling-factorial]], [[def-rational-power]], [[lem-rational-power-monotone]], [[lem-integer-part]]).

## Verification

**Proof technique:** constructive.

1.1 Construct the random colouring by colouring every edge independently and uniformly red or blue. A fixed $k$-set is monochromatic with probability $2\cdot2^{-\binom k2}=2^{1-\binom k2}$. [L1, L2, construct]

2.1 The union bound over all $k$-sets gives failure probability at most $2\binom nk2^{-\binom k2}\le2n^k2^{-\binom k2}/k!\le2^{1+k/2}/k!$. [step 1.1, L3, L5, algebra]

3.1 At $k=3$, $3!=6>2^{5/2}$. If $k!>2^{1+k/2}$ for $k\ge3$, then $(k+1)!=(k+1)k!>2^{1+(k+1)/2}$ because $k+1>\sqrt2$. Hence the final bound in step 2.1 is less than $1$ for every $k\ge3$. [step 2.1, algebra]

4.1 By [L3] a colouring with no monochromatic $k$-set exists on $n$ vertices, so $R(k,k)>n$. Since $R(k,k)$ is an integer and $n=\lfloor2^{k/2}\rfloor$, this implies $R(k,k)>2^{k/2}$ and agrees with [L4]. [step 3.1, L3, L4, L5, discharge-construct] ∎
