---
id: ex-octonions-are-alternative-but-not-associative
kind: example
title: A concrete octonion associator witness
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras-examples
dependency_level: 3
deps: [def-octonion-algebra-by-cayley-dickson, def-quaternions, thm-octonions-are-alternative-but-not-associative]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §8"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "Holger P. Petersson, Albert Algebras, §3.5"
      url: https://www.fieldsinstitute.ca/programs/scientific/11-12/exceptional/Alb.-alg.-Ottawa-2012-Vii-new.pdf
---

## Statement

In the pair convention for $\mathbb O$, the associator
$[i,j,\ell]:=(ij)\ell-i(j\ell)$ is $2k\ell\ne0$. Both alternative laws
still hold, so this is a concrete alternative but nonassociative algebra.

## Facts & Assumptions

**Given:** The named basis units and multiplication on $\mathbb O$.

[F1] The pair formula gives $ij=k$, $(0,k)=k\ell$, and
$i(j\ell)=(0,ji)$ with $ji=-k$
([[def-octonion-algebra-by-cayley-dickson]], [[def-quaternions]]).

[F2] The same algebra satisfies both alternative laws
([[thm-octonions-are-alternative-but-not-associative]]).

## Proof
1.1 From [F1], $(ij)\ell=(0,k)=k\ell$ and $i(j\ell)=(0,-k)=-k\ell$. Thus $[i,j,\ell]=k\ell-(-k\ell)=2k\ell$. This is nonzero because $k\ne0$ in $\mathbb H$ and the real scalar $2$ is nonzero. [given, F1, algebra]

2.1 By [F2], the left and right alternative laws hold for every pair of octonions, while step 1.1 gives a nonzero associator. Hence this example is alternative and not associative. [step 1.1, F2] ∎
