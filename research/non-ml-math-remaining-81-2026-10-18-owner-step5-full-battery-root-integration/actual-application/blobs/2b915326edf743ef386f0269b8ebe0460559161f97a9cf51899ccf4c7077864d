---
id: ex-hh-affine-padic-versus-root-of-unity-parameters
kind: example
title: "A positive p-adic parameter and a finite root-of-unity parameter"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [lem-hh-positive-affine-parameter-has-infinite-quantum-characteristic, def-quantum-characteristic-of-an-invertible-hecke-parameter]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Maarten Solleveld, Affine Hecke Algebras and Their Representations"
      url: "https://arxiv.org/pdf/2009.03007"
      locator: "§1.2 and §3.2, PDF pp. 8 and 27–30: p-adic residue parameters and the positive-real affine-Hecke parameter regime."
---

## Example

Take the unnormalized split p-adic Iwahori parameter $q_F=3$ (for instance, the residue-field cardinality of $\mathbb Q_3$) and the finite type-A Hecke parameter $\xi=i\in\mathbb C^\times$. The first is positive real and greater than $1$; the second is a primitive fourth root of unity. Their quantum characteristics differ, so the parameters belong to different regimes. This calculation does not assert that the resulting affine and finite Hecke algebras are nonisomorphic or non-Morita-equivalent.

## Facts & Assumptions

**Given:** The affine parameter $q_F=3$ and the finite type-A parameter $\xi=i$.

[F1] Every real affine parameter $q>1$ has $e(\mathbb C,q)=\infty$ ([[lem-hh-positive-affine-parameter-has-infinite-quantum-characteristic]]).

[F2] For a field $F$ and $u\in F^\times$, the quantum characteristic is the least $n\ge2$ with $1+u+\cdots+u^{n-1}=0$, or $\infty$ if no such $n$ exists ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]).

## Verification

**Given:** $q_F=3$ and $\xi=i$ as above.

1.1 Since $3>1$, [F1] gives $e(\mathbb C,3)=\infty$. [F1, given, algebra]

1.2 The first candidate geometric sums for $i$ are $1+i\ne0$, $1+i+i^2=i\ne0$, and $1+i+i^2+i^3=0$. By the least-exponent definition [F2], $e(\mathbb C,i)=4$. [F2, given, algebra]

2.1 Thus the p-adic positive-real parameter has infinite quantum characteristic and the finite type-A root-of-unity parameter has finite quantum characteristic $4$. Since $|3|=3$ and $|i|=1$, they are different scalars. These calculations establish only the stated parameter distinction. [step 1.1, step 1.2, algebra] ∎
