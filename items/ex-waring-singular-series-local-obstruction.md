---
id: ex-waring-singular-series-local-obstruction
kind: example
title: "A local congruence obstruction makes a Waring singular series vanish"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-waring-singular-series-and-singular-integral
  - lem-waring-singular-series-well-defined-and-local-densities
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.2, the local-density criterion for positivity, printed pp. 40–41"
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§1, singular-series definition and local solubility discussion, printed pp. 1578–1579"
---

## Example

For $k=4$, $s=9$, and $n=10$, every fourth power modulo $16$ is $0$ or $1$. Therefore a sum of nine fourth powers cannot be congruent to $10$ modulo $16$. The $2$-adic local density for this equation is zero, and hence the absolutely convergent Waring singular series satisfies $\mathfrak S_{9,4}(10)=0$.

## Example references

[Assing, §6.2](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

[Wooley, §1](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

## Facts & Assumptions

**Given:** The equation $x_1^4+\cdots+x_9^4=10$, residues modulo $16$, and the singular series for $s=9>2k=8$.

[F1] For $s>2k$, the singular series is absolutely convergent, factors as the product of its nonnegative local densities, and the $2$-adic density is the limit of normalized counts modulo $2^h$ ([[def-waring-singular-series-and-singular-integral]], [[lem-waring-singular-series-well-defined-and-local-densities]]).

## Proof

**Proof technique:** residue-class obstruction.

1.1 If $x$ is even, $16\mid x^4$. If $x$ is odd, write $x^2=1+8t$ for an integer $t$; then $x^4=(1+8t)^2\equiv1\pmod {16}$. Thus each fourth-power residue modulo $16$ is $0$ or $1$. [given, algebra]

1.2 A sum of nine such residues is congruent modulo $16$ to the number of odd variables, an integer between $0$ and $9$. None of these ten residues is $10\pmod {16}$. Hence the congruence has no solution modulo $16$, and it has no solution modulo $2^h$ for any $h\ge4$, since reduction modulo $16$ would give one. [step 1.1, algebra]

2.1 The normalized solution count modulo $2^h$ is therefore zero for every $h\ge4$. By [F1], its limit, the $2$-adic local density, is $0$. The Euler product in [F1] then has a zero factor, so $\mathfrak S_{9,4}(10)=0$. [F1, step 1.2] ∎
