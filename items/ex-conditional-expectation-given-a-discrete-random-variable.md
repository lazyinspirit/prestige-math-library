---
id: ex-conditional-expectation-given-a-discrete-random-variable
kind: example
title: "Conditional expectation given a discrete random variable"
status: draft
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, def-axiom-of-choice, thm-monotone-convergence-for-the-integral, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

Assume AC for conditional classes. If Y is a countably valued real random variable and X is real integrable, a version of $E[X\mid\sigma(Y)]$ takes value $c_y=\int_{\{Y=y\}}X\,dP/P(Y=y)$ on each positive-mass fibre and zero on all zero-mass fibres.

## Facts & Assumptions

**Given:** A countably valued real random variable Y and real integrable X on a probability space; AC is the conditional-class convention.

[F1] The measurable integrable event-identity characterization defines the conditional class. ([[def-conditional-expectation-as-an-ae-class]])

[F2] Versions are unique almost surely. ([[lem-conditional-expectation-is-unique-almost-surely]])

[F3] Increasing nonnegative partial sums pass through the integral. ([[thm-monotone-convergence-for-the-integral]])

[F4] Finite weights summing to one define a probability space. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

## Verification

**Proof technique:** direct.

1.1 List the at most countably many fibres $A_y=\{Y=y\}$. Every union of fibres is measurable as a countable union, and these unions are exactly $\sigma(Y)$: each fibre is a preimage of a singleton Borel set, and every preimage is a union of fibres. The proposed function T is thus $\sigma(Y)$-measurable. Its absolute integral is $\sum_y |c_y|P(A_y)\le\sum_y\int_{A_y}|X|=E|X|$, where [F3] applies to nonnegative finite partial sums. Null fibres have zero X integral and their countable union is null. [F3]

2.1 On each positive fibre $\int_{A_y}T=c_yP(A_y)=\int_{A_y}X$, and on null fibres both sides are zero. For every union A of fibres, sum these identities; absolute summability follows from step 1.1 and integrability of X, with [F3] applied to positive and negative parts. Thus $\int_A T=\int_A X$. By [F1]–[F2] T is the desired version. [step 1.1, F1, F2, F3]

3.1 For a concrete instance take atoms a,b,c with masses $1/4,1/4,1/2$ by [F4], with Y values (0,0,2) and X values (2,6,10). The zero fibre has mass $1/2$ and X integral $2/4+6/4=2$, so its conditional value is 4. The fibre at 2 has mass $1/2$ and X integral 5, giving value 10. Hence T=(4,4,10), with mean $4/4+4/4+10/2=7=EX$. [step 2.1, F4] ∎

## Source notes

Durrett Example 4.1.5, printed p.208; van der Vaart Example 1.7 and its countable-partition extension, printed p.3. The countable sum is justified using ordinary MCT on positive and negative parts.
