---
id: ex-zero-point-one-zero-one-is-not-normal-in-base-two
kind: example
title: The binary number 0.1010... is not normal
status: draft
origin: pipeline
deps: [def-canonical-base-b-expansion-and-normality]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§11.2, printed pp. 99–101"
proof_strategy: direct
---

## Example

The canonical binary number

$$x=0.101010\ldots{}_2=\frac23$$

is not normal in base two: the word $00$ has frequency $0$, not $1/4$.

## Facts & Assumptions

**Given:** The periodic binary string $0.101010\ldots{}_2$.

[F1] The canonical convention excludes expansions eventually equal to one, and base-two normality requires each length-two word to have frequency $1/4$ ([[def-canonical-base-b-expansion-and-normality]]).

## Verification

**Proof technique:** direct periodic computation.

1.1 The digit-one positions are $1,3,5,\ldots$, so the represented value is $$\sum_{j=0}^{\infty}2^{-(2j+1)}=\frac{1/2}{1-1/4}=\frac23.$$ [algebra]

2.1 The string is not eventually one, so [F1] says it is the canonical binary expansion of $2/3$. [F1, step 1.1]

3.1 Adjacent pairs alternate between $10$ and $01$.  Thus $00$ occurs zero times among every collection of starting positions, and its limiting frequency is $0$. [step 2.1, algebra]

4.1 Since base-two normality would require frequency $2^{-2}=1/4$ by [F1], $2/3$ is not normal in base two. [F1, step 3.1] ∎
