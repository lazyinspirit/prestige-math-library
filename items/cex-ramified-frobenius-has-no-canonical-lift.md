---
id: cex-ramified-frobenius-has-no-canonical-lift
title: "Ramified frobenius has no canonical lift"
kind: counterexample
status: draft
origin: pipeline
deps: [ex-gaussian-and-eisenstein-frobenius, def-arithmetic-frobenius-coset]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a79.3.2 and \u00a79.4, unramified qualification"
      url: https://wstein.org/books/ant/ant.pdf
proof_strategy: direct argument
---

## Statement refuted

The residue Frobenius congruence does not determine a unique element of D at a ramified prime. At 2 in $\mathbb Q(i)$, with $P=(1+i)$, one has $D=I=C_2$ and $\kappa(P)=\mathbb F_2$. Identity and complex conjugation are distinct lifts of the same arithmetic Frobenius coset in D/I.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[ex-gaussian-and-eisenstein-frobenius]]: In $\mathbb Q(i)$, an odd prime p splits if $p\equiv1\pmod4$ and is inert if $p\equiv3\pmod4$; arithmetic Frobenius sends $i\mapsto i^p$. The prime 2 ramifies. In $\mathbb Q(\zeta_3)$, a prime $p\ne3$ splits if $p\equiv1\pmod3$ and is inert if $p\equiv2\pmod3$; arithmetic Frobenius sends $\zeta_3\mapsto\zeta_3^p$. The prime 3 ramifies.

[F2] [[def-arithmetic-frobenius-coset]]: For finite Galois L/K and nonzero $P\mid p$, the **arithmetic Frobenius coset** is the unique element of $D(P/p)/I(P/p)$ corresponding under the residue isomorphism to $x\mapsto x^{Np}$ on $\kappa(P)$, where $Np=|\kappa(p)|$. It is defined also when P is ramified. Its inverse is called geometric Frobenius. The quotient element is distinguished; a representative in D need not be unique.

## Counterexample

1.1 The Gaussian calculation gives $(2)=P^2$ and residue field F2. There is only one prime above 2, so both automorphisms stabilize it. Modulo P, i=-1=1, and conjugation also sends i to -i=1. As every integral element is a+bi, both automorphisms act identically on every residue. [F1]

2.1 Thus D=I=C2 and D/I is trivial. The arithmetic map on F2 is x squared, which is identity on its two elements 0 and 1. Both identity and conjugation satisfy its congruence, but they differ on i in the number field. This refutes uniqueness from residue data; it does not preclude an additional external convention from selecting a representative. [F2, step 1.1] ∎
