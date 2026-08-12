---
id: fs-matrix-polynomial-substitution-is-a-ring-homomorphism
kind: false-statement
title: 'FALSE: substituting a fixed matrix $A$ for $x$ defines a ring homomorphism $M_n(F[x])\to M_n(F)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cayley-hamilton, def-ring-matrix-product-identity-and-transpose]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'P. Garrett, Cayley-Hamilton notes'
      url: 'https://www-users.cse.umn.edu/~garrett/m/algebra/notes_2023-24/26.pdf'
    - title: 'H. Haber, Notes on the characteristic polynomial'
      url: 'https://scipp.ucsc.edu/~haber/ph116A/charpoly_11.pdf'
pipeline_run: null
---

## Statement refuted

**Refuted claim:** For a fixed $A\in M_n(F)$, the coefficientwise rule $\sum_k C_kx^k\mapsto\sum_k C_kA^k$ is a ring homomorphism $M_n(F[x])\to M_n(F)$.

This is the invalid substitution step in a familiar pseudo-proof of Cayley-Hamilton; the actual theorem [[thm-cayley-hamilton]] requires a coefficient-comparison argument.

## Facts & Assumptions

**Given:** Work over any field $F$ and take $A=\operatorname{diag}(1,0)$ and $B=E_{12}$ in $M_2(F)$.

[L1] Matrix multiplication over a commutative ring is defined by finite row-column sums, and the identity matrix has $1$ on its diagonal and $0$ elsewhere ([[def-ring-matrix-product-identity-and-transpose]]).

## Refutation

**Proof technique:** explicit counterexample.

1.1 In $M_2(F[x])$, the row-column formula [L1] and commutativity of $F[x]$ give $(xI_2)B=B(xI_2)=xB$. [L1, algebra]

2.1 The coefficientwise rule has $E(xI_2)=A$, $E(B)=B$, and $E((xI_2)B)=E(xB)=BA=0$, whereas $E(xI_2)E(B)=AB=B$. [step 1.1, given, algebra]

3.1 Since $B\ne0$, step 2.1 shows $E((xI_2)B)\ne E(xI_2)E(B)$. The coefficientwise substitution rule is therefore not multiplicative and hence is not a ring homomorphism. [step 2.1] ∎
