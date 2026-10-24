---
id: ex-walsh-hadamard-encoding-and-testing
kind: example
title: "Four coordinates of a Walsh–Hadamard codeword"
status: published
origin: pipeline
deps:
  - def-walsh-hadamard-encoding-and-relative-distance
  - def-linearity-test
  - lem-walsh-hadamard-code-has-distance-one-half
  - lem-blr-testing-supplies-nearby-linear-decoders
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.1, printed pp. 363–364"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  audited: 2026-09-30
generation:
  role: example
---

## Example

For $u=(1,0)$ and $v=(0,1)$ in $\mathbb F_2^2$, use lexicographic masks
$(00,01,10,11)$. Their Walsh–Hadamard tables are respectively $(0,0,1,1)$ and
$(0,1,0,1)$, so they differ in two of four coordinates. For
$f=\operatorname{WH}_2(u)$, the BLR test accepts the sample $x=10,y=01$.

## Facts & Assumptions

**Given:** The two fixed messages $u=(1,0)$ and $v=(0,1)$, and the fixed BLR
sample $x=10,y=01$.

[F1] A Walsh–Hadamard table evaluates the linear function $r\mapsto a\cdot r$
on masks $r\in\mathbb F_2^n$, indexed lexicographically.
([[def-walsh-hadamard-encoding-and-relative-distance]])

[F2] Distinct messages in dimension $n\ge1$ have Walsh–Hadamard tables at
relative distance exactly $1/2$.
([[lem-walsh-hadamard-code-has-distance-one-half]])

[F3] The BLR test chooses independent uniform $x,y$, queries
$f(x),f(y),f(x+y)$, and accepts exactly when $f(x)+f(y)=f(x+y)$ in
$\mathbb F_2$.
([[def-linearity-test]])

[F4] The nearby-decoder theorem defines $\epsilon$ as the rejection
probability over the full uniform pair $(x,y)$ and assumes $\epsilon<1/2$.
([[lem-blr-testing-supplies-nearby-linear-decoders]])

## Verification

**Proof technique:** direct calculation.

1.1 Using [F1], the dot products of $u=(1,0)$ on masks $(00,01,10,11)$ are $0,0,1,1$, while those of $v=(0,1)$ are $0,1,0,1$. These are exactly the coordinates of the two stated tables. [F1, given, algebra]

2.1 The displayed tables disagree at masks $01$ and $10$, and agree at $00$ and $11$. Thus they differ in exactly $2$ of $4$ positions, so their relative distance is $2/4=1/2$, also as asserted generally by [F2]. [F1, F2, step 1.1, algebra]

2.2 For $f=\operatorname{WH}_2(u)$, the chosen sample has $x+y=10+01=11$. The table in step 1.1 gives $f(10)=1$, $f(01)=0$, and $f(11)=1$; hence $f(x)+f(y)=1+0=1=f(x+y)$ in $\mathbb F_2$, so this BLR sample accepts by [F3]. [F1, F3, step 1.1, algebra]

3.1 Step 2.2 checks one fixed transcript only. It does not calculate the rejection fraction over all uniform pairs for an arbitrary oracle table, which is the $\epsilon$ in [F4]; in particular, this sample alone does not establish the nearby-decoder theorem's global premise. No choice principle is used: all vectors and four masks are explicitly listed. [F3, F4, step 2.2, algebra] ∎
