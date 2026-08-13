---
id: cex-free-module-rank-fails-over-an-endomorphism-ring
kind: counterexample
title: "A regular module with bases of sizes one and two"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invariant-basis-number-and-rank-of-a-free-module, def-linear-basis, prop-linear-maps-form-a-vector-space, lem-composition-and-identity-linear-maps, def-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement refuted

Finite free rank need not be invariant over a noncommutative ring. There is a unital ring $R$ for which the regular left module ${}_RR$ is isomorphic to ${}_RR^2$, so it has bases of sizes one and two.

## Facts & Assumptions

**Given:** A field $F$, an $F$-vector space $V$ with basis $(e_k)_{k\in\mathbb N}$, and $R=\operatorname{End}_F(V)$ with multiplication given by composition.

[F1] Invariant basis number would forbid an isomorphism $R\cong R^2$ of regular left modules ([[def-invariant-basis-number-and-rank-of-a-free-module]]).

[F2] Linear maps $V\to V$ form a vector space under pointwise addition and scalar multiplication ([[prop-linear-maps-form-a-vector-space]]).

[F3] Composition of linear maps is associative and has the identity map as identity ([[lem-composition-and-identity-linear-maps]]).

[F4] A unital ring has an abelian-group addition, associative multiplication with an identity, and both distributive laws ([[def-ring]]).

[F5] A basis is a linearly independent subset that spans the vector space ([[def-linear-basis]]).

## Counterexample

**Proof technique:** constructive.

1.1 Define $\alpha_0(e_k)=e_{2k}$ and $\alpha_1(e_k)=e_{2k+1}$. Define $\beta_0(e_{2k})=e_k$, $\beta_0(e_{2k+1})=0$, $\beta_1(e_{2k})=0$, and $\beta_1(e_{2k+1})=e_k$. Extending the formulas across the unique finite basis expressions from [F5] gives four endomorphisms. [F5, construct]

2.1 On every basis vector, $\beta_i\alpha_j$ is the identity when $i=j$ and zero otherwise, while $\alpha_0\beta_0+\alpha_1\beta_1=\operatorname{id}_V$. Unique finite basis expressions from [F5] make these identities hold on all of $V$. [step 1.1, F2, F3, F5]

2.2 The operations from [F2] and [F3] satisfy the ring axioms [F4], so $R=\operatorname{End}_F(V)$ is a unital ring. Define left $R$-linear maps $T:R\to R^2$ and $S:R^2\to R$ by $$T(f)=(f\alpha_0,f\alpha_1),\qquad S(g,h)=g\beta_0+h\beta_1.$$ Associativity and distributivity give left linearity. [step 1.1, F2, F3, F4, construct]

3.1 The identities in step 2.1 give $T(S(g,h))=(g,h)$ and $S(T(f))=f$, so $T$ and $S$ are inverse isomorphisms. [step 2.1, step 2.2, algebra]

4.1 Therefore ${}_RR\cong{}_RR^2$, refuting finite rank invariance in this ring as [F1] records. [step 3.1, F1, discharge-construct] ∎
