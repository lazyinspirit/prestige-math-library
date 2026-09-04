---
id: thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor
kind: theorem
title: "The zero-th left derived functor of a right exact functor recovers the functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-left-derived-functors-relative-to-supplied-data-are-additive-functors, def-left-exact-and-right-exact-functor, def-projective-resolution-in-an-abelian-category, def-homology-object-of-a-chain-complex]
proof_strategy: direct
verification:
  audited: 2026-09-04
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

Let $P$ be a supplied projective resolution datum on a class $\mathcal D$, and
let $F:\mathcal A\to\mathcal B$ be an additive right exact functor between
abelian categories. Then for every $A\in\mathcal D$ there is a canonical
isomorphism
$$L_0^PF(A)\xrightarrow{\ \sim\ }F(A),$$
natural in $A$.
## Facts & Assumptions

**Given:** An object $A\in\mathcal D$.

[L1] The chosen projective resolution of $A$ is an exact augmented complex
$$\cdots\to P_1(A)\to P_0(A)\to A\to0$$
([[def-projective-resolution-in-an-abelian-category]]).

[L2] The zeroth homology of the deleted complex is the cokernel of the boundary
map into degree $0$ ([[def-homology-object-of-a-chain-complex]]).

[L3] Right exactness means that $F$ preserves the cokernel appearing at the end
of the displayed augmented resolution ([[def-left-exact-and-right-exact-functor]]).

[L4] The assignments $A\mapsto L_0^PF(A)$ are already functorial
([[thm-left-derived-functors-relative-to-supplied-data-are-additive-functors]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the morphism $P_1(A)\to P_0(A)\to A\to0$ is exact. Applying $F$ and using [L3] gives an exact sequence $$F(P_1(A))\to F(P_0(A))\to F(A)\to0.$$ Hence $F(A)$ is the cokernel of $F(P_1(A))\to F(P_0(A))$. [L1, L3, given, algebra]

2.1 By [L2], that same cokernel is exactly $H_0(F(P(A)_{\mathrm{del}}))=L_0^PF(A)$. Therefore there is a canonical isomorphism $L_0^PF(A)\xrightarrow{\sim}F(A)$. [L2, step 1.1]

3.1 The construction in steps 1.1 and 2.1 is functorial in $A$, and [L4] already supplies the functoriality of $L_0^PF$. Thus the isomorphism is natural in $A$. [L4, step 2.1] ∎
