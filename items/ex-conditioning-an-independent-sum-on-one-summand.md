---
id: ex-conditioning-an-independent-sum-on-one-summand
kind: example
title: "Conditioning an independent sum on one summand"
status: published
origin: pipeline
deps: [lem-conditioning-a-known-variable-and-an-independent-variable, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]
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

Assume AC for conditional classes. If real integrable X,Y are independent, meaning $P(X\in B,Y\in C)=P(X\in B)P(Y\in C)$ for all real Borel B,C, then $E[X+Y\mid\sigma(X)]=X+EY$ almost surely.

## Facts & Assumptions

**Given:** Real integrable independent X,Y on a probability space, with independence defined by the statement Borel rectangle identity; AC is the conditional-class convention.

[F1] The known and independent variable formulas hold under the Borel rectangle hypothesis. ([[lem-conditioning-a-known-variable-and-an-independent-variable]])

[F2] Conditional expectation is linear. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] Finite atom weights summing to one define a probability space. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

## Verification

**Proof technique:** direct.

1.1 The sets $X^{-1}(B)$, B real Borel, form a sigma-algebra because preimages preserve complements and countable unions; by definition this is $\sigma(X)$. Thus the given rectangle identity is precisely independence of Y from every event of $\sigma(X)$. By [F1], $E[Y\mid\sigma(X)]=EY$ and $E[X\mid\sigma(X)]=X$. Linearity [F2] gives the stated sum formula. [F1, F2]

2.1 Take $\Omega=\{0,1\}^2$, each atom of mass $1/4$, and $X(u,v)=u$, $Y(u,v)=2v$. This is a probability space by [F3]. Each coordinate value has mass $1/2$ and each pair mass $1/4=(1/2)(1/2)$; adding atom probabilities proves all Borel rectangle identities. Since $EY=1$, the conditional mean is $u+1$. Directly, on the u=0 fibre the values 0,2 average to 1, and on the u=1 fibre the values 1,3 average to 2. [step 1.1, F3] ∎

## Source notes

Durrett Example 4.1.7, printed pp.209–210, additive special case; Examples 4.1.3–4.1.4 supply the two individual terms.
