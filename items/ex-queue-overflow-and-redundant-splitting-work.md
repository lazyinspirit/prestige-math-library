---
id: ex-queue-overflow-and-redundant-splitting-work
kind: example
title: Two-stage queue overflow and a redundant split at equal work
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-independent-fixed-level-splitting
  - thm-independent-splitting-product-moments-and-work
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, §8"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
    - title: "Adam M. Johansen, Pierre Del Moral, and Arnaud Doucet, Sequential Monte Carlo Samplers for Rare Events, §§2–3"
      url: "https://people.bordeaux.inria.fr/pierre.delmoral/resim_paper.pdf"
---

## Example

Consider a two-period single-server queue with no service during these two periods and independent Bernoulli arrivals $B_1,B_2$, each with probability $1/2$. Capacity is one, so overflow occurs when both arrivals occur. Let $A_1=\{B_1+B_2\ge1\}$ and $A_2=\{B_1+B_2=2\}$. Then $P(A_1)=3/4$, $P(A_2\mid A_1)=1/3$, and $P(A_2)=1/4$.

Under unit cost per conditional draw, use two draws at each of the two levels for work $4$. Compare with an augmented chain having two repeated $A_1$ levels before $A_2$, and one draw at each of four levels, also work $4$. The added levels have conditional probability one but the estimator has larger relative variance.

## Facts & Assumptions

**Given:** The two independent Bernoulli arrivals, nested events $A_1\supseteq A_2$, unit draw cost, and the two stated independent-splitting designs.

[F1] [[alg-independent-fixed-level-splitting]]: The estimator is a product of independent sample means of level indicators, with $N$ conditional draws per level.

[F2] [[thm-independent-splitting-product-moments-and-work]]: Its relative variance is $\prod_\ell(1+(1-p_\ell)/(Np_\ell))-1$, and unit-cost work for $L$ levels is $NL$.

## Verification

**Proof technique:** direct.

1.1 The four arrival outcomes are equiprobable. Exactly three have at least one arrival and exactly one has two arrivals; hence $P(A_1)=3/4$, $P(A_2)=1/4$, and $p_2=(1/4)/(3/4)=1/3$. [given, algebra]

2.1 The two designs use the product estimator specified in [F1]. With two levels and $N=2$, [F2] gives relative variance $ \left(1+\frac{1/4}{2(3/4)}\right)\left(1+\frac{2/3}{2(1/3)}\right)-1 =\frac76\cdot2-1=\frac43. $ The work is $2\cdot2=4$. [F1, F2, step 1.1, algebra]

2.2 In the augmented chain, the conditional probabilities are $3/4,1,1,1/3$, and $N=1,L=4$. The two unit-probability factors in [F2] equal one, while the other factors are $4/3$ and $3$; the relative variance is $4-1=3$, with work $1\cdot4=4$. [F2, step 1.1, algebra]

3.1 Since $3>4/3$, equal work does not make the redundant-level design equally precise. Its unit-probability stages add cost without reducing the one-draw randomness left in the two nontrivial levels. [step 2.1, step 2.2, algebra] ∎
