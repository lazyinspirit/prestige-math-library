---
id: fs-a-functor-preserving-zero-morphisms-is-additive
kind: false-statement
title: "FALSE: preserving zero morphisms is enough for additivity"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-an-additive-functor-preserves-zero-morphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Exercise 2A"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
pipeline_run: frontier-20
---

## Statement

**False claim:** a functor between additive categories is additive whenever it
preserves zero morphisms.

## Facts & Assumptions

**Given:** The functor $T:\mathbf{Ab}\to\mathbf{Ab}$ sending an abelian group
$A$ to the reduced free abelian group $\mathbb Z[U(A)]/\mathbb Z[0]$ on its
underlying pointed set.

[L1] Every additive functor preserves zero morphisms
([[prop-an-additive-functor-preserves-zero-morphisms]]).

## Refutation

**Proof technique:** direct.

1.1 If $0:A\to B$ is the zero homomorphism, then the induced set map on underlying pointed sets sends every element to the basepoint $0\in B$. Therefore $T(0)$ sends every generator to $[0]=0$, so $T$ preserves zero morphisms. [given, L1]

1.2 Let $u=v=1_{\mathbb Z}$. In $T(\mathbb Z)$ write $[n]$ for the class of the generator $n\in\mathbb Z$. Then $T(u+v)([1])=T(2)([1])=[2]$, while $(T(u)+T(v))([1])=[1]+[1]=2[1]$. These are distinct elements of the free abelian group on the nonzero integers, so $T(u+v)\ne T(u)+T(v)$. [given]

2.1 Thus $T$ preserves zero morphisms without being additive, refuting the claim. [step 1.1, step 1.2] ∎
