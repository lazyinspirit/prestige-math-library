---
id: prop-an-exact-base-functor-has-the-trivial-universal-delta-functor
kind: proposition
title: "An exact base functor has the trivial universal delta functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-universal-delta-functor, def-exact-functor-between-abelian-categories, thm-derived-functors-are-universal-delta-functors, prop-an-exact-functor-has-vanishing-positive-derived-functors, thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor, thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Statement

Assume the Axiom of Dependent Choice.

Let $F:\mathcal A\to\mathcal B$ be an exact functor between abelian categories.
Then both of the following are universal delta functors:

1. the homological delta functor with degree-zero term $F$, all higher terms
   $0$, and all connecting maps $0$,
2. the cohomological delta functor with degree-zero term $F$, all higher terms
   $0$, and all connecting maps $0$.
## Facts & Assumptions

**Given:** An exact functor $F$.

[L1] An exact functor is additive, left exact, and right exact ([[def-exact-functor-between-abelian-categories]]).

[L2] Universality for delta functors is the unique extension property from degree zero ([[def-universal-delta-functor]]).

## Proof

**Proof technique:** direct.

1.1 Fix a short exact sequence $0\to A\to B\to C\to0$. Because $F$ is exact, [L1] gives an exact sequence $$0\to F(A)\to F(B)\to F(C)\to0.$$ Therefore the homological family with degree zero $F$, higher degrees $0$, and zero connecting maps has the required long exact sequences and naturality squares, so it is a homological delta functor. [L1, given, algebra]

2.1 Let $S=(S_n,\partial^S)$ be any homological delta functor and let $u_0:S_0\Rightarrow F$ be a natural transformation. Define $u_n=0$ for $n>0$. In every connecting square with $n>1$ this is automatic. For $n=1$, exactness of $S$ gives $\operatorname{im}(\partial_1^S)=\ker(S_0(A)\to S_0(B))$, while step 1.1 gives $\ker(F(A)\to F(B))=0$; naturality of $u_0$ therefore implies $u_0(A)\partial_1^S=0$, so the degree-one connecting square also commutes. The extension is unique because there is only one morphism into the zero object in each positive degree. Hence the trivial homological delta functor is universal by [L2]. [L1, L2, step 1.1, given, algebra]

3.1 The cohomological case is dual. Step 1.1 already gives exact sequences $$0\to F(A)\to F(B)\to F(C)\to0,$$ so the family with $T^0=F$, $T^n=0$ for $n>0$, and zero connecting maps is a cohomological delta functor. Given any cohomological delta functor $S=(S^n,\partial_S)$ and any $u^0:F\Rightarrow S^0$, define $u^n=0$ for $n>0$. Exactness of $S$ gives $\ker(\partial_S^0)=\operatorname{im}(S^0(B)\to S^0(C))$, and exactness of $F$ makes $F(B)\to F(C)$ epic, so naturality of $u^0$ implies $\partial_S^0u^0(C)=0$. Thus the connecting squares commute, and uniqueness is again immediate in positive degrees. Therefore the trivial cohomological delta functor is universal by [L2]. [L1, L2, step 1.1, step 2.1, algebra] ∎
