---
id: lem-symmetric-gaussian-alternating-sum-vanishes
kind: lemma
title: "A symmetric Gaussian alternating sum vanishes in the Serre range"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-quantum-integers-factorials-and-divided-powers-at-q-i
  - lem-quantum-pascal-recurrence-and-gaussian-integrality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Claus Michael Ringel, The Hall Algebra Approach to Quantum Groups, E.L.A.M. Lectures (1993)"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§4, quantum Serre calculation, printed pp. 40–41: the alternating symmetric Gaussian sum used for the simple-generator relation."
    - title: "Claus Michael Ringel, Hall algebras and quantum groups, Inventiones Mathematicae 101 (1990), 583–591"
      url: "https://noah.nrw/ubbihs/download/pdf/5112433"
      locator: "§2: quantum Serre relations in the Hall realization."
---

## Statement

Let $m\ge1$, and let $d\in\mathbb Z$ satisfy
$1-m\le d\le m-1$ and $d\equiv m-1\pmod2$. With the symmetric Gaussian
binomial $C_{m,n}=\binom{m}{n}_{\nu}$ from
[[def-quantum-integers-factorials-and-divided-powers-at-q-i]],
$$ \sum_{n=0}^{m}(-1)^n\nu^{-dn}C_{m, n}=0 $$
for every real $\nu>1$.

## Facts & Assumptions

**Given:** The integer range and parity above, and the symmetric Gaussian
coefficient convention.

[F1] The Gauss product formula is a Laurent-polynomial identity and remains
valid after substituting $\nu^{-1}$ for its parameter
([[lem-quantum-pascal-recurrence-and-gaussian-integrality]]).

## Proof

**Proof technique:** direct.

1.1 Substituting $\nu^{-1}$ for the parameter in [F1] gives $\prod_{j=0}^{m-1}(1+\nu^{-2j}z) =\sum_{n=0}^{m}\nu^{-n(m-1)}C_{m, n}z^n.$ This identity is valid at the real number $\nu>1$ because both sides are Laurent polynomials. Set $z=-\nu^{m-1-d}$; the right side becomes exactly $\sum_{n=0}^{m}(-1)^n\nu^{-dn}C_{m,n}$. [given, F1, algebra]

2.1 The parity assumption makes $j=(m-1-d)/2$ an integer, and the bounds on $d$ give $0\le j\le m-1$. The factor indexed by this $j$ on the left side of step 1.1 is $1-\nu^{-2j}\nu^{m-1-d}=0$. Therefore the right side, which is the sum in the Statement, is zero. [given, step 1.1, algebra] ∎
