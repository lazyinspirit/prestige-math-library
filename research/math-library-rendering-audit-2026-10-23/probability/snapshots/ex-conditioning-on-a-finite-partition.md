---
id: ex-conditioning-on-a-finite-partition
kind: example
title: "Conditioning on a finite partition"
status: published
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-10
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

Assume AC for the conditional-class convention. Let $(A_i)_{i=1}^m$ be a finite measurable partition of a probability space, $\mathcal G=\sigma(A_1,\ldots,A_m)$, and real $X\in L^1(P)$. A version has value $c_i=P(A_i)^{-1}\int_{A_i}X\,dP$ on each positive-mass cell, and zero on each zero-mass cell.

## Facts & Assumptions

**Given:** A probability space, a finite measurable partition $(A_i)$, $\mathcal G=\sigma(A_i)$, and real integrable X; AC is the conditional-class convention.

[F1] A G-measurable integrable function with the defining event integrals represents the conditional class. ([[def-conditional-expectation-as-an-ae-class]])

[F2] The version is unique as a class. ([[lem-conditional-expectation-is-unique-almost-surely]])

[F3] Nonnegative finite atom weights summing to one define a probability measure. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

## Verification

**Proof technique:** direct.

1.1 Let $T=\sum_i c_i\mathbf1_{A_i}$ with the displayed zero convention. It is G-measurable and $E|T|=\sum_{i:P(A_i)>0}|\int_{A_i}X|\le\sum_i\int_{A_i}|X|=E|X|<\infty$. Each positive-mass cell has $\int_{A_i}T=c_iP(A_i)=\int_{A_i}X$; on a null cell both integrals are zero. Every G-event is a union of cells (these unions form a sigma-algebra), so adding proves every defining identity. Hence [F1]–[F2] identify T as the conditional mean. [F1, F2]

2.1 For a numerical instance take four atoms of weight $1/4$, permitted by [F3], partitioned into $A_1=\{1,2\}$ and $A_2=\{3,4\}$. For X with values $(0,2,4,6)$, the cell integrals are $1/2$ and $5/2$ and their masses are $1/2$, so T has values $(1,1,5,5)$. Its mean is 3, matching $(0+2+4+6)/4=3$. For $X=\mathbf1_B$ the same positive-cell calculation is $c_i=P(B\cap A_i)/P(A_i)$, the finite conditional-probability formula. [step 1.1, F3] ∎

## Source notes

Durrett Example 4.1.5, printed p.208; van der Vaart Example 1.7, printed p.3. Zero-mass cells and a numerical four-atom calculation are included.
