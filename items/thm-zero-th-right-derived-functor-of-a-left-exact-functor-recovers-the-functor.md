---
id: thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor
kind: theorem
title: "The zero-th right derived functor of a left exact functor recovers the functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-right-derived-functors-relative-to-supplied-data-are-additive-functors, def-left-exact-and-right-exact-functor, def-cohomology-object-of-a-cochain-complex, def-injective-resolution-in-an-abelian-category]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $I$ be a supplied injective resolution datum on a class $\mathcal D$, and
let $F:\mathcal A\to\mathcal B$ be an additive left exact functor between
abelian categories. Then for every $A\in\mathcal D$ there is a canonical
isomorphism
$$R_I^0F(A)\xrightarrow{\ \sim\ }F(A),$$
natural in $A$.
## Facts & Assumptions

**Given:** An object $A\in\mathcal D$.

[L1] The chosen injective resolution of $A$ is an exact coaugmented complex
$$0\to A\to I^0(A)\to I^1(A)\to\cdots$$
([[def-injective-resolution-in-an-abelian-category]]).

[L2] The zeroth cohomology object is the quotient of the kernel of
$d^0:F(I^0(A))\to F(I^1(A))$ by the zero-th coboundary, which is $0$
([[def-cohomology-object-of-a-cochain-complex]]).

[L3] Left exactness means that $F$ preserves the kernel at the beginning of the
displayed injective resolution ([[def-left-exact-and-right-exact-functor]]).

[L4] The assignments $A\mapsto R_I^0F(A)$ are already functorial
([[thm-right-derived-functors-relative-to-supplied-data-are-additive-functors]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the morphism $0\to A\to I^0(A)\to I^1(A)$ is exact. Applying $F$ and using [L3] gives an exact sequence $$0\to F(A)\to F(I^0(A))\to F(I^1(A)).$$ Therefore $F(A)=\ker(F(I^0(A))\to F(I^1(A)))$. [L1, L3, given, algebra]

2.1 By [L2], the zeroth cohomology of $F(I(A)_{\mathrm{del}})$ is that kernel, because the zero-th coboundary object is $0$. Hence $R_I^0F(A)=H^0(F(I(A)_{\mathrm{del}}))\cong F(A)$. [L2, step 1.1]

3.1 Step 2.1 is natural in $A$, and [L4] records the functoriality of $R_I^0F$. Therefore the displayed isomorphism is natural. [L4, step 2.1] ∎
