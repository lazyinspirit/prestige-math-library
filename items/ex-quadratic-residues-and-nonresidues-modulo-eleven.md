---
id: ex-quadratic-residues-and-nonresidues-modulo-eleven
kind: example
title: "Quadratic residues, roots, and the Legendre table modulo $11$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-count-of-quadratic-residues-modulo-prime, def-legendre-symbol]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Stein, Elementary Number Theory, Example 4.2.4"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Example

Modulo $11$, the nonzero quadratic residues are $1,3,4,5,9$, with root pairs

$$1:\{1,10\},\quad3:\{5,6\},\quad4:\{2,9\},\quad5:\{4,7\},\quad9:\{3,8\}.$$

For representatives $a=0,1,\ldots,10$, the Legendre values are

$$0,1,-1,1,1,1,-1,-1,-1,1,-1.$$

## Facts & Assumptions

**Given:** The odd prime modulus $11$.

[L1] For an odd prime $p$, exactly $(p-1)/2$ nonzero classes are quadratic residues, the same number are nonresidues, and every nonzero residue has exactly two square roots ([[thm-count-of-quadratic-residues-modulo-prime]]).

[L2] The Legendre symbol is $0$ on a divisible numerator, $1$ on a quadratic residue, and $-1$ on a quadratic nonresidue ([[def-legendre-symbol]]).

## Verification

**Proof technique:** direct.

1.1 Squaring $1,2,3,4,5$ modulo $11$ gives $1,4,9,5,3$. Their negatives give the same squares, so the displayed pairs are roots of those five distinct classes; [L1] shows that this exhausts all nonzero residues and all roots. [L1, given, algebra]

2.1 The remaining nonzero classes $2,6,7,8,10$ are therefore nonresidues, while the zero class is in the separate divisible branch of [L2]. [L2, step 1.1]

3.1 Assigning $1$ to the five residue classes, $-1$ to the five nonresidue classes, and $0$ to the zero class by [L2] gives the displayed table. [L2, step 1.1, step 2.1] ∎
