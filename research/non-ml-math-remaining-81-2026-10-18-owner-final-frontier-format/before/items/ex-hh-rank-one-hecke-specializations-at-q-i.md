---
id: ex-hh-rank-one-hecke-specializations-at-q-i
kind: example
title: "Rank-one Hecke specializations can be semisimple or nonsemisimple"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-hh-universal-coxeter-hecke-parameters-and-presentation, thm-hh-generic-coxeter-hecke-standard-basis]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "Sections 2 and 4.1, PDF pp. 5–7 and 15–16: finite-Coxeter Hecke presentations, generic parameters, and specialization"
---

## Example

Let $W=S_2$ with its one simple reflection, and use the local normalized Hecke parameter $q$ in [[def-hh-universal-coxeter-hecke-parameters-and-presentation]]. The base-change statement of [[thm-hh-generic-coxeter-hecke-standard-basis]] identifies each specialization $H_2(q)$ with the quotient having one generator $T$ and relation $(T-q)(T+q^{-1})=0$. Here an algebra is called semisimple when its left regular module is a direct sum of simple left ideals; a simple module is a nonzero module with no proper nonzero submodule.

For $q=i$, $H_2(i)$ is the dual-number algebra $\mathbb C[\epsilon]/(\epsilon^2)$, so it is not semisimple. For $q=1$ or $q=-1$, $H_2(q)$ is $\mathbb C[T]/(T^2-1)$, which is semisimple. Thus these small root-of-unity specializations already have different behavior; no generic quantum Schur–Weyl centralizer statement is being specialized here.

## Facts & Assumptions

**Given:** The rank-one Coxeter system $W=S_2$, the universal Hecke algebra over its Laurent parameter ring, and the specializations $q=i$, $q=1$, and $q=-1$ over $\mathbb C$.

[F1] [[def-hh-universal-coxeter-hecke-parameters-and-presentation]]: the rank-one quadratic relation is $(T-v)(T+v^{-1})=0$ for a unit parameter $v$.

[F2] [[thm-hh-generic-coxeter-hecke-standard-basis]]: arbitrary scalar extension presents the specialized Hecke algebra by the images of the same quadratic and braid relations, with no flatness assumption.

[A1] $i^2=-1$, so $i^{-1}=-i$ and $i$ is a unit in $\mathbb C$.

[A2] The values $1$ and $-1$ are units in $\mathbb C$ and each has square $1$.

## Verification

1.1 For any unit $q$, expanding [F1] and putting $S=qT$ gives $S^2=(q^2-1)S+q^2$, equivalently $(S-q^2)(S+1)=0$; thus the multiplicative source parameter is $\xi=q^2$, while all calculations below keep the local $T$ generator. Now set $q=i$. Then [F1] gives $(T-i)(T+i^{-1})=(T-i)^2=0$, and [F2] identifies this as the complete specialized presentation. With $\epsilon=T-i$, translation $T=\epsilon+i$ gives mutually inverse homomorphisms between $H_2(i)$ and $\mathbb C[\epsilon]/(\epsilon^2)$. Every class has a unique form $a+b\epsilon$: terms of degree at least two vanish, and a polynomial of degree at most one lying in $(\epsilon^2)$ has both coefficients zero. Hence the algebra has basis $1,\epsilon$ and $\epsilon$ is nonzero. [given, F1, F2, A1, algebra, construct]

1.2 The left ideal $\epsilon H_2(i)$ is one-dimensional, nonzero and proper by step 1.1, so the left regular module is not simple. If it were a direct sum of simple left ideals, its dimension two would force it to be a sum of two one-dimensional simple modules. On any one-dimensional module, left multiplication by $\epsilon$ is a scalar $\lambda$ satisfying $\lambda^2=0$, hence $\lambda=0$. It would then annihilate both summands and therefore all of $H_2(i)$, contradicting $\epsilon\cdot1=\epsilon\ne0$. Thus the regular module is not semisimple. [given, step 1.1, algebra]

2.1 For $q=1$ and $q=-1$, [F1] gives the same relation $T^2-1=0$, using [F2] for the specialization. The elements $e_+=(1+T)/2$ and $e_-=(1-T)/2$ are orthogonal idempotents with sum $1$. The classes $1,T$ are linearly independent because no nonzero polynomial of degree at most one is divisible by $T^2-1$, so $e_+$ and $e_-$ are nonzero and form a basis. Thus $H_2(q)=\mathbb C e_+\oplus\mathbb C e_-$, and each one-dimensional left ideal is simple. The regular module is semisimple. [given, F1, F2, A2, algebra, construct]

3.1 Steps 1.2 and 2.1 establish the two different specialization outcomes under the stated normalized relation. They make no claim about higher ranks, centralizers, positive characteristic, or every root of unity. No choice principle is used: every basis, idempotent, and module complement calculation is explicit and finite. [step 1.2, step 2.1, given] ∎
