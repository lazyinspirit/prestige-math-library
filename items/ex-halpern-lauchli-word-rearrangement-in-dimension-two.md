---
id: ex-halpern-lauchli-word-rearrangement-in-dimension-two
kind: example
title: "A dimension-two Halpern–Läuchli word rearrangement"
status: draft
origin: pipeline
deps: [def-halpern-lauchli-finite-word-calculus, lem-halpern-lauchli-word-calculus-rearrangement]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Halpern–Läuchli, A partition theorem (1966), Lemma 1 specialized to d=2, pp. 364–365"
      url: https://www.cs.umd.edu/~gasarch/BLOGPAPERS/HL-1966.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Example

For $d=2$, the two endpoint words admit the following complete derivation:

$$\forall a_1\forall a_2\exists x_1\exists x_2 \vdash_2 \exists A_1\exists A_2\forall x_1\forall x_2.$$

## Facts & Assumptions

**Given:** Dimension $d=2$ and the endpoint words above.

[F1] The preceding definition gives all legal Rule 1, Rule 2, and Rule 3
moves in $L_2$. [[def-halpern-lauchli-finite-word-calculus]]

[F2] The general endpoint rearrangement holds for every positive dimension.
[[lem-halpern-lauchli-word-calculus-rearrangement]]

## Verification

1.1 Start with $W_0=\forall a_1\forall a_2\exists x_1\exists x_2\in L_2$. [F1, given]

2.1 Commute the universal symbols by Rule 1: $W_0\vdash_2W_1=\forall a_2\forall a_1\exists x_1\exists x_2$. [F1, step 1.1]

3.1 Apply Rule 2 to the adjacent coordinate-1 pair: $W_1\vdash_2W_2=\forall a_2\exists A_1\forall x_1\exists x_2$. [F1, step 2.1]

4.1 Apply Rule 3 with $r=1$ and permutation $\sigma=(2,1)$: $W_2\vdash_2W_3=\exists A_1\forall a_2\forall x_1\exists x_2$. [F1, step 3.1]

5.1 Commute the adjacent universal symbols by Rule 1: $W_3\vdash_2W_4=\exists A_1\forall x_1\forall a_2\exists x_2$. [F1, step 4.1]

6.1 Apply the reverse direction of Rule 2 to coordinate 1: $W_4\vdash_2W_5=\forall a_1\exists x_1\forall a_2\exists x_2$. [F1, step 5.1]

7.1 Apply Rule 2 to coordinate 2: $W_5\vdash_2W_6=\forall a_1\exists x_1\exists A_2\forall x_2$. [F1, step 6.1]

8.1 Commute the adjacent existential symbols by Rule 1: $W_6\vdash_2W_7=\forall a_1\exists A_2\exists x_1\forall x_2$. [F1, step 7.1]

9.1 Apply Rule 3 with $r=1$ and $\sigma=(1,2)$: $W_7\vdash_2W_8=\exists A_2\forall a_1\exists x_1\forall x_2$. [F1, step 8.1]

10.1 Apply Rule 2 to coordinate 1 and then commute the two existential symbols by Rule 1: $W_8\vdash_2\exists A_2\exists A_1\forall x_1\forall x_2\vdash_2\exists A_1\exists A_2\forall x_1\forall x_2$.  Every displayed word contains, for each coordinate, exactly one legal ordered pair, so all lie in $L_2$; this is the $d=2$ instance of F2. [F1, F2, step 9.1] ∎
