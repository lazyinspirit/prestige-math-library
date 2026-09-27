---
id: ex-tester-size-and-construction-time-are-polynomial
kind: example
title: "Logarithmic gap steps give polynomial tester size"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-tester-size-and-construction-time-are-polynomial, thm-constant-query-assignment-tester, lem-proximity-gap-amplification-preserves-input-coordinates]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §9 Corollary 9.3, printed p. 33."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5, printed pp. 373-375."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

Suppose an initial assignment tester has $M$ constraints and rejection ratio $1/M$, and that one application of the gap-amplification map doubles the ratio until the saturation value $1/t$ and multiplies the number of constraints by at most the fixed constant $C$, exactly as in [[lem-proximity-gap-amplification-preserves-input-coordinates]]. Then after $K=\lceil\log_2M\rceil$ applications the ratio is at least $\min\{2^K/M,t^{-1}\}=t^{-1}$, which is a constant, and the number of constraints is at most
$$C^K M\le C^{1+\log_2M}M=C\,M^{1+\log_2C},$$
so the final size is $M^{1+\log_2C}$ up to the constant factor $C$: logarithmic many steps at a constant factor each keep the output size polynomial in the initial size, which is the mechanism of [[lem-tester-size-and-construction-time-are-polynomial]].

## Facts & Assumptions

**Given:** an initial tester with $M$ constraints and ratio $1/M$, the fixed constant $C\ge1$ of the amplification map, and the saturation value $t^{-1}$ with $t\ge1$.

[F1] The amplification map returns a tester whose rejection ratio is at least $\min\{2\rho,t^{-1}\}$ and whose output size is at most $C$ times the input size, for a constant $C$ that does not depend on the size of the system ([[lem-proximity-gap-amplification-preserves-input-coordinates]]).

[F2] The iterated construction of [[thm-constant-query-assignment-tester]] applies the map $K=\lceil\log_2M\rceil$ times from a balanced base system of $M$ constraints and ratio $1/M$, and [[lem-tester-size-and-construction-time-are-polynomial]] bounds the outcome by $C\,M^{1+\log_2C}$ constraints in deterministic polynomial time.

## Verification

**Proof technique:** direct.

1.1 By [F1] and induction on the number of steps, the ratio after $K$ applications is at least $\min\{2^K/M,t^{-1}\}$; with $K=\lceil\log_2M\rceil$ one has $2^K\ge M$, so $2^K/M\ge1\ge t^{-1}$ and the ratio is at least $t^{-1}$. [F1, algebra]

1.2 By [F1] the size after $K$ applications is at most $C^KM$, and the exponent identity $C^{\log_2M}=M^{\log_2C}$ gives $C^KM\le C\,M^{1+\log_2C}$. [F1, algebra]

2.1 The exponent $1+\log_2C$ is an absolute constant: $C$ depends only on the fixed alphabet, the fixed arity and the fixed inner tester of the map, never on the current system, which is why no factor in the iteration can depend on $M$; so the final size is $M^{O(1)}$, and the saturation at $t^{-1}$ stops the iteration before the ratio could exceed what the constant-step construction guarantees. [F2, step 1.1, step 1.2, algebra] ∎
