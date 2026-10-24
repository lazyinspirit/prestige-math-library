---
id: ex-decomposing-the-square-of-the-two-dimensional-s-three-character
kind: example
title: "The square of the two-dimensional $S_3$ character decomposes as $1+\\operatorname{sgn}+\\chi_2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product, ex-the-character-table-of-s-three, thm-characters-of-direct-sums-tensor-products-and-duals]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Example 3.16"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Example

The tensor square of the two-dimensional irreducible representation of $S_3$
has character $\chi_2^{2}$, and

$$\chi_2^{2}=1+\operatorname{sgn}+\chi_2.$$

## Facts & Assumptions

**Given:** The irreducible characters $1$, $\operatorname{sgn}$, $\chi_2=\chi_{\mathrm{std}}$ of $S_3$.

[F1] The character table of $S_3$ gives the values $\chi_2=(2,0,-1)$ on the classes of $1$, $(12)$, $(123)$ ([[ex-the-character-table-of-s-three]]).

[F2] Characters multiply on tensor products ([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[F3] The multiplicity of an irreducible character in a given character is the inner product with it ([[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]]).

[A1] The inner product is $\langle f,h\rangle=\frac16\sum_{\sigma}f(\sigma) \overline{h(\sigma)}$.

## Verification

**Proof technique:** direct.

1.1 By [F2], the tensor square of the two-dimensional representation has character $\chi_2^{2}$; from [F1] its values are $(2,0,-1)^{2}=(4,0,1)$ on the three classes. [F1, F2, given]

2.1 Using [A1] and the values of step 1.1, the multiplicities are $\langle\chi_2^{2},1\rangle=\frac16(4+0+2)=1$, $\langle\chi_2^{2},\operatorname{sgn}\rangle=\frac16(4+0+2)=1$, and $\langle\chi_2^{2},\chi_2\rangle=\frac16(8+0-2)=1$. By [F3] these are the coefficients of $1$, $\operatorname{sgn}$, and $\chi_2$. [A1, F3, step 1.1, algebra]

3.1 The value at $1$ checks: $\chi_2^{2}(1)=4=1\cdot1+1\cdot1+1\cdot2$, the sum of the degrees with the multiplicities of step 2.1; hence $\chi_2^{2}=1+\operatorname{sgn}+\chi_2$. [F1, step 2.1, algebra] ∎
