---
dependency_level: 8
id: alg-effective-divisor-representatives-modulo-units
kind: algorithm
title: "Compute divisor representatives modulo ordinary units"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - alg-compute-units-and-class-group-from-bounded-s-units
  - thm-bounded-s-unit-matrix-computation-correct
  - alg-prime-ideal-decomposition-from-integral-basis
  - thm-prime-ideal-decomposition-algorithm-correct
  - thm-integer-column-hnf-terminates-and-is-canonical
  - thm-number-field-integral-ideal-factorisation-in-zf
  - def-ideal-class-group-of-a-domain
  - def-axiom-of-choice
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Chapter2 integer matrix methods and Chapter8 unit groups"
      url: "https://wstein.org/books/ant/ant.pdf"
---

## Definition

Assume the Axiom of Choice. Input the exact field data of the bounded S-unit matrix algorithm and a nonzero algebraic integer $a\in\mathcal O_K$, specified in its integral basis. Return one representative of each class, under multiplication by $\mathcal O_K^\times$, of elements $x\in\mathcal O_K$ dividing $a$.

1. Run the bounded S-unit matrix algorithm to obtain the full class-group invariant factors $\delta_i$ and representative fractional ideals $\mathfrak c_i$. Enumerate the finite list $\mathcal C=\{\prod_i\mathfrak c_i^{e_i}:0\le e_i<\delta_i\}$. Retain their coordinate labels; its all-zero label represents $\mathcal O_K$ and no other label has trivial class.

2. Factor the positive integer $|N_{K/\mathbb Q}(a)|$ by trial division. For every rational prime dividing it, run the certified integral-basis prime-decomposition algorithm. Compute each valuation of $(a)$ by ideal-power membership, stopping at the rational norm's prime exponent. Enumerate the finite set of all ideal divisors $I$ of $(a)$ by choosing each prime exponent between zero and that valuation.

3. For each such integral ideal $I$, determine its class by the following finite-family dovetail. Enumerate nonzero $z\in K$ by increasing bounds on all rational coordinate numerators and positive denominators. At each stage and for every $\mathfrak c\in\mathcal C$, test whether $(z)\mathfrak c=I$. Use rational integral-basis coordinates: multiply the basis generators of $\mathfrak c$ by $z$, clear a common denominator, and compare HNF lattices exactly. Stop at the first passing pair $(z,\mathfrak c)$.

4. If the label of $\mathfrak c$ is nonzero, discard $I$. If it is zero, retain $z$ as its generator and as one divisor representative. Return all representatives retained in this way. Negative rational integers, general algebraic integers, and units $a$ are included; in the unit case the single ideal divisor is $\mathcal O_K$.

The search in step3 is not a single unbounded search for a generator of a possibly nonprincipal ideal. It searches a finite complete list of ideal classes simultaneously; one of them is guaranteed to succeed. No Baker bound or logarithmic approximation is used.

## Definition references

[[alg-compute-units-and-class-group-from-bounded-s-units]]

[[thm-bounded-s-unit-matrix-computation-correct]]

[[alg-prime-ideal-decomposition-from-integral-basis]]

[[thm-prime-ideal-decomposition-algorithm-correct]]

[[thm-integer-column-hnf-terminates-and-is-canonical]]

[[thm-number-field-integral-ideal-factorisation-in-zf]]

[[def-ideal-class-group-of-a-domain]]

[[def-axiom-of-choice]]

[Lenstra, Algorithms in Algebraic Number Theory, §5, class groups and principal ideals](https://arxiv.org/pdf/math/9204234)
