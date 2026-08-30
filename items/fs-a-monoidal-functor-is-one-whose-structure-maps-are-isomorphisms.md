---
id: fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms
kind: false-statement
title: "FALSE: every lax monoidal functor has invertible structure maps"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-lax-strong-and-strict-monoidal-functor, rem-monoidal-functor-means-different-things-in-different-sources, def-power-set, cor-set-cat-and-every-complete-category-are-cartesian-monoidal]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 2.4.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter XI.2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

**False claim:** every lax monoidal functor has invertible structure maps.

## Facts & Assumptions

**Given:** The page's distinction between lax and strong monoidal functors and
the cartesian monoidal category $\mathbf{Set}$.

[L1] A strong monoidal functor is a lax monoidal functor whose binary and unit structure maps are isomorphisms ([[def-lax-strong-and-strict-monoidal-functor]]).

[L2] Different sources use the bare phrase "monoidal functor" differently, so this library avoids the bare phrase precisely to prevent that conflation ([[rem-monoidal-functor-means-different-things-in-different-sources]]).

[L3] The power set $\mathcal P(X)$ consists of all subsets of $X$ ([[def-power-set]]).

[L4] The category $\mathbf{Set}$ is cartesian monoidal ([[cor-set-cat-and-every-complete-category-are-cartesian-monoidal]]).

## Refutation

**Proof technique:** direct.

1.1 Let $\mathcal P:\mathbf{Set}\to\mathbf{Set}$ send a function to its direct-image map on power sets. Define $\mathcal P_2(A,B):=A\times B$ and let $\mathcal P_0:1\to\mathcal P(1)$ select the full singleton. Direct images preserve identities and composition, and $(f\times g)(A\times B)=f(A)\times g(B)$ proves naturality. Both associativity composites send $(A,B,C)$ to $A\times B\times C$ with the indicated bracketing, and the unit composites return $A$. Thus $\mathcal P$ is lax monoidal. [L3, L4, construct, algebra]

2.1 For $X=Y=\{0,1\}$, the diagonal $\{(0,0),(1,1)\}\subseteq X\times Y$ is not $A\times B$ for any $A\subseteq X$ and $B\subseteq Y$. Hence $\mathcal P_2$ is not surjective, so $\mathcal P$ is not strong by [L1]. [L1, step 1.1, algebra]

3.1 The distinction in [L1] is therefore genuine, and the stated universal claim is false. The qualifier "lax" makes the claim source-stable, while [L2] explains why the bare phrase "monoidal functor" would not. [L1, L2, step 1.1, step 2.1] ∎
