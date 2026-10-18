---
id: prop-green-hall-pairing-is-nondegenerate
kind: proposition
title: "The Green Hall pairing is nondegenerate and adjoint to product and coproduct"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-green-hall-completion-and-coproduct
  - lem-hall-sequence-count-equals-aut-weighted-subobject-count
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.6, PDF pp. 17–18: the diagonal Green scalar product and its compatibility with Hall multiplication and coproduct."
    - title: "Claus Michael Ringel, Hall algebras and quantum groups, Inventiones Mathematicae 101 (1990), 583–591"
      url: "https://noah.nrw/ubbihs/download/pdf/5112433"
      locator: "§3: the Hall pairing used for the quantum-group embedding."
verification:
  precheck: pending
---

## Statement

On the direct-sum Hall space define
$$ ([M],[N])_G=\frac{\delta_{[M],[N]}}{a_M}. $$
This bilinear form is nondegenerate over $\mathbb Q(\nu)$ and satisfies
$$ ([M]\star[N],[R])_G =([M]\otimes[N],\Delta'([R]))_{G\otimes G}, $$
where the tensor pairing is the product of the two Green pairings.

## Facts & Assumptions

**Given:** A finite-field hereditary Hall category and the Hall basis.

[F1] $a_M$ is a finite positive integer and the Green coproduct has
coefficient $\nu^{\langle M,N\rangle}P^R_{M,N}/a_R$
([[def-green-hall-completion-and-coproduct]]).

[F2] $P^R_{M,N}=a_Ma_Ng^R_{M,N}$
([[lem-hall-sequence-count-equals-aut-weighted-subobject-count]]).

## Proof



**Proof technique:** evaluate on basis vectors.

1.1 In the Hall basis, the pairing matrix is diagonal with entries $1/a_M$. Each is nonzero in $\mathbb Q(\nu)$ by [F1], so the pairing is nondegenerate: if $x=\sum_M c_M[M]$ pairs to zero with every $[M]$, then $c_M/a_M=0$ for every coefficient, hence every $c_M=0$. [F1, algebra]

2.1 The left side of the adjointness identity is $\nu^{\chi_0(M,N)}g^R_{M,N}/a_R$. The right side is $\nu^{\chi_0(M,N)}P^R_{M,N}/(a_Ra_Ma_N)$, which is the same scalar by [F2]. Thus the identity holds on basis vectors and extends bilinearly. [F1, F2, algebra] ∎

