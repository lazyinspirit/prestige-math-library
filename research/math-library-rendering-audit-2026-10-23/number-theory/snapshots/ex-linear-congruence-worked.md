---
id: ex-linear-congruence-worked
kind: example
title: "The congruence $14x\\equiv30\\pmod{100}$ has exactly the two solutions $x\\equiv45,95\\pmod{100}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-linear-congruence-solvability-and-solution-count, cor-extended-euclidean-bezout-coefficients, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Linear Congruences"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.02%3A_Linear_Congruences"
    - title: "UPC, Modular Arithmetic notes"
      url: "https://www.cs.upc.edu/~mjserna/docencia/gm-aic/2021/10-AiC-modular.pdf"
pipeline_run: null
---

## Example

The congruence $14x\equiv30\pmod{100}$ has exactly the solution classes

$$[45]_{100}\quad\text{and}\quad[95]_{100}.$$

## Facts & Assumptions

**Given:** The congruence $14x\equiv30\pmod{100}$.

[L1] A linear congruence $ax\equiv b\pmod n$ is solvable exactly when $\gcd(a,n)\mid b$, and then has exactly $\gcd(a,n)$ solution classes modulo $n$ ([[thm-linear-congruence-solvability-and-solution-count]]).

[L2] The extended Euclidean algorithm produces gcds and Bézout coefficients ([[cor-extended-euclidean-bezout-coefficients]]).

[L3] Congruence modulo $n$ means divisibility of a difference by $n$ ([[def-congruence-modulo-an-integer]]).

## Verification

**Proof technique:** direct.

1.1 The Euclidean algorithm gives $\gcd(14,100)=2$, and $2\mid30$. Cancelling the common factor reduces the congruence to $7x\equiv15\pmod{50}$. [L1, L2, L3]

1.2 Since $7\cdot43=301\equiv1\pmod{50}$, multiplication by $43$ gives $x\equiv43\cdot15=645\equiv45\pmod{50}$. [L3]

1.3 The two lifts of this class modulo $100$ are $45$ and $45+50=95$, and both verify the original congruence: $14\cdot45-30=600$ and $14\cdot95-30=1300$ are divisible by $100$. [L3]

2.1 By [L1] there are exactly two solution classes modulo $100$, so the two distinct classes in step 1.3 exhaust them. [step 1.1, step 1.2, step 1.3, L1] ∎
