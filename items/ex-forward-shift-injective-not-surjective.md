---
id: ex-forward-shift-injective-not-surjective
kind: example
title: 'The forward shift on $F^{\mathbb N}$ is injective but not surjective'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function-space, def-linear-map, def-injection-surjection-bijection,
       def-field, lem-nat-nonzero-is-successor, thm-omega-is-peano-system]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Axler, Linear Algebra Done Right, 4th ed., forward-shift exercise in Chapter 3"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Example

Let $F$ be a field and let $F^{\mathbb N}$ be the vector space of all functions
$x:\mathbb N\to F$ with pointwise operations. Define the **forward shift**
$S:F^{\mathbb N}\to F^{\mathbb N}$ by

$$(Sx)(0):=0_F,\qquad (Sx)(\sigma(n)):=x(n)\quad(n\in\mathbb N).$$

Then $S$ is linear and injective, but it is not surjective. Thus the implication
“injective linear map implies surjective” fails when finite-dimensionality is
removed.

## Facts & Assumptions

**Given:** A field $F$ and the function space $F^{\mathbb N}$.

[L1] Function equality and the vector-space operations on $F^X$ are pointwise ([[def-function-space]]).

[L2] A function $T$ is linear when $T(au+bv)=aT(u)+bT(v)$ for all scalars and vectors ([[def-linear-map]]).

[L3] A function is injective when equal outputs force equal inputs, and it is surjective when every codomain element has a preimage ([[def-injection-surjection-bijection]]).

[L4] A field has distinct elements $0_F\ne1_F$. Every natural is either zero or a successor; zero is not a successor; and the successor map is injective ([[def-field]], [[lem-nat-nonzero-is-successor]], [[thm-omega-is-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 The two displayed clauses define one function $Sx:\mathbb N\to F$ for each $x$: they specify coordinate $0$, and every other natural coordinate is a successor. [L1, L4, construct]

2.1 For $a,b\in F$ and $x,y\in F^{\mathbb N}$, both $S(ax+by)$ and $aSx+bSy$ have coordinate $0_F$ at $0$. At a successor $\sigma(n)$ they both have value $ax(n)+by(n)$. Hence the functions are equal pointwise, and $S$ is linear. [step 1.1, L1, L2]

2.2 If $Sx=Sy$, then for every $n\in\mathbb N$ evaluation at $\sigma(n)$ gives $x(n)=y(n)$. Thus $x=y$ pointwise, so $S$ is injective. [step 1.1, L1, L3]

2.3 Let $e\in F^{\mathbb N}$ have $e(0)=1_F$ and $e(n)=0_F$ for $n\ne0$. Every $Sx$ has value $0_F$ at coordinate $0$, so $Sx\ne e$ by $0_F\ne1_F$. Therefore $e$ has no preimage and $S$ is not surjective. [step 1.1, L1, L3, L4]

3.1 The preceding three steps show that $S$ is a linear injection which is not a surjection. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- The ambient space contains all scalar-valued sequences, not only the eventually zero ones.
- The reverse shift $L(x)(n)=x(\sigma(n))$ satisfies $L\circ S$ equal to the identity, while $S\circ L$ need not be the identity; this is orientation and is not used as a dependency.
