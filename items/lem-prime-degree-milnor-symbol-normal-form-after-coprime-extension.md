---
dependency_level: 2
id: lem-prime-degree-milnor-symbol-normal-form-after-coprime-extension
kind: lemma
title: Prime-degree Milnor symbols after a finite coprime extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-milnor-k-group-of-a-field
- lem-milnor-symbol-anticommutativity-and-repeated-entry-identities
justified_by: []
proof_strategy: direct
axiom_use: ZF finite symbol family; finite splitting tower of low-degree entry polynomials;
  no global transfer.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Fesenko–Vostokov, Local Fields and Their Extensions, Chapter IX §§2–3;
      explicit finite reduction and local reconstruction below
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
verification: {}
---

## Statement

Let $E=F(\alpha)/F$ have prime degree $p$. For any finite family of elements of Milnor groups $K_n^M(E)$, $n\ge1$, there is a finite extension $D/F$ of degree prime to $p$ such that the restrictions of all these elements to $ED$ are sums of symbols with all but the last entry in $D^\times$. This assertion makes no claim about canonical transfers and needs no choice axiom.

## Statement references

[[def-milnor-k-group-of-a-field]]

[[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]]

## Facts & Assumptions

**Given:** The objects and assumptions in the Statement.

[F1] Milnor groups are finite sums of multilinear Steinberg symbols. [[def-milnor-k-group-of-a-field]]

[F2] Symbols anticommute and repeated entries reduce by $\{a,a\}=\{a,-1\}$. [[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]]

## Proof

**Given:** The data above.

1.1 Write the finitely many given classes as finite sums of symbols. Each nonzero entry of a symbol is $f(\alpha)$ for a nonzero polynomial $f\in F[X]$ of degree less than $p$, using division by the minimal polynomial. Form a splitting field for this finite list of polynomials by successively adjoining roots of their irreducible remaining factors. At every step such a factor has degree at most the degree of its original polynomial, hence less than $p$. Each root adjunction therefore has degree prime to $p$, including inseparable factors, and the product of these finitely many degrees is prime to $p$. Call the resulting finite extension $D/F$. No algebraic closure or simultaneous infinite choice is required. [F1, given, construct, algebra]

2.1 In $ED$, each original entry becomes a nonzero constant times a product of factors $\alpha-\delta$, with $\delta\in D$. No factor is zero, since the original entry was nonzero in the field $E$. Expand the symbols by multilinearity and reorder constants by [F2]. For distinct $\delta,\delta'\in D$, expansion of the Steinberg relation for $(\alpha-\delta)/(\delta'-\delta)$ gives $$\{\alpha-\delta,\alpha-\delta'\}=\{-1,\alpha-\delta\}+\{\delta'-\delta,\alpha-\delta'\}-\{\delta'-\delta,\alpha-\delta\}.$$ For equal factors use the repeated-entry identity in [F2]. Each resulting term has at most one of this pair outside $D$. Multiplying by the other entries and repeating decreases the number of nonconstant entries in every resulting term, so terminates after finitely many reductions. The resulting sums have at most one entry outside $D$, which can be moved to the last position. A symbol with all entries in $D$ already has the required form; for $n=1$ there is nothing to reduce. [F1, F2, step 1.1, algebra] ∎

