---
id: lem-two-weight-ranges-force-square-zero-monodromy
kind: lemma
title: "Two Frobenius weight ranges force square-zero monodromy"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-top-nilpotent-monodromy-is-equivariant-with-tate-twist
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, SGA 7 I, Exposé I, §6"
      url: "https://grothendiecksga.com/read/sga7/fr/1-6.html"
      locator: "§§6.2–6.6: the weight comparison bounding the top monodromy power."
---

## Statement

Let $\ell$ be prime, let $q>1$ be an integer prime to $\ell$, and fix an embedding of an algebraic closure of $\mathbb Q_\ell$ into $\mathbb C$. Let $V\ne0$ be a finite-dimensional $\mathbb Q_\ell$-vector space with a nilpotent endomorphism $N$ and an automorphism $F$ satisfying $F(1+N)F^{-1}=(1+N)^{q^{-1}}$, with the right-hand side the finite nilpotent binomial polynomial. Suppose that the eigenvalues of $F$ on $V/NV$ have complex absolute values in $\{1,q^{-1/2}\}$, while those on $\ker N$ have absolute values in $\{q^{-1/2},q^{-1}\}$. Then $N^2=0$.

## Facts & Assumptions

**Given:** $\ell,q,V,N,F$ and the two stated eigenvalue ranges.

[F1] The top nilpotent power gives an equivariant nonzero map from the coinvariants twisted by the $r$-th power of the conjugation character to the invariants, where $r$ is its largest nonzero power. [[lem-top-nilpotent-monodromy-is-equivariant-with-tate-twist]]

## Proof

**Proof technique:** a nonzero equivariant map requires a common Frobenius eigenvalue.

1.1 Let $r\ge0$ be maximal with $N^r\ne0$. Apply F1 to an abstract infinite cyclic group whose generator acts by $F$ and whose character takes that generator to $q^{-1}$. It gives a nonzero $F$-equivariant map from $V/NV$, with its Frobenius action multiplied by $q^{-r}$, to $\ker N$. Nonzero follows because its image is $N^rV$. [F1, given]

2.1 If $r\ge2$, every eigenvalue of the source in step 1.1 has absolute value $q^{-r}$ or $q^{-r-1/2}$, both at most $q^{-2}$. Every eigenvalue of the target has absolute value at least $q^{-1}$. Since $q>1$, the two spectra are disjoint. An intertwining map between finite-dimensional spaces with disjoint spectra is zero: their characteristic polynomials are coprime over an algebraic closure, and Bézout's identity together with Cayley–Hamilton annihilates the map. This contradicts step 1.1. Hence $r\le1$, which is exactly $N^2=0$. [step 1.1, given, algebra] ∎
