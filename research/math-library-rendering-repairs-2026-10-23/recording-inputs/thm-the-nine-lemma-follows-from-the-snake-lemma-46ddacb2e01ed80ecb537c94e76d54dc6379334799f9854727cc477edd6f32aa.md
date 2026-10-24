---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-the-nine-lemma-follows-from-the-snake-lemma.json
  precheck: pass
id: thm-the-nine-lemma-follows-from-the-snake-lemma
kind: theorem
title: "The nine lemma follows from the snake lemma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-snake-lemma-in-an-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Exercise VIII.4.5(b)"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Statement

The nine lemma can be proved by applying the snake lemma to the standard quotient
diagram attached to a commutative $3 \times 3$ diagram with short exact
columns.

## Facts & Assumptions

**Given:** A commutative $3 \times 3$ diagram with short exact columns and middle row short exact.

[L1] The snake lemma supplies the exact six-term sequence for a morphism of short exact sequences ([[thm-snake-lemma-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Collapse the first two rows of the $3 \times 3$ diagram to their quotient row. The short exact columns identify the needed kernels and cokernels of that quotient diagram with the two outer rows of the original $3 \times 3$ picture. [L1, given, construct]

2.1 Applying [L1] to that quotient diagram yields a snake sequence whose endpoint exactness is exactly the missing exactness of the remaining outer row. Running the same argument in the opposite direction gives the converse implication. [L1, step 1.1]

3.1 Therefore the nine lemma is a direct consequence of the snake lemma. [step 2.1] ∎

## Remarks

The following names the nine objects and maps in the given diagram.

```tikzcd
& 0 \arrow[d] & 0 \arrow[d] & 0 \arrow[d] & \\
& A_1 \arrow[r, "a_1"] \arrow[d, "u_A"'] & B_1 \arrow[r, "b_1"] \arrow[d, "u_B"'] & C_1 \arrow[d, "u_C"] & \\
0 \arrow[r] & A_2 \arrow[r, "a_2"] \arrow[d, "v_A"'] & B_2 \arrow[r, "b_2"] \arrow[d, "v_B"'] & C_2 \arrow[r] \arrow[d, "v_C"] & 0 \\
& A_3 \arrow[r, "a_3"'] \arrow[d] & B_3 \arrow[r, "b_3"'] \arrow[d] & C_3 \arrow[d] & \\
& 0 & 0 & 0 &
```

Each column $0 \to X_1 \xrightarrow{u_X} X_2 \xrightarrow{v_X} X_3 \to 0$, for $X=A,B,C$, and the middle row are short exact, as assumed. The four squares commute: $u_Ba_1=a_2u_A$, $u_Cb_1=b_2u_B$, $v_Ba_2=a_3v_A$, and $v_Cb_2=b_3v_B$. The two outer rows carry no exactness annotations; their exactness is the issue discussed in step 2.1. This picture only fixes notation for the given data; the proof above remains independent of it.
