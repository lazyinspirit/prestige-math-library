---
id: ex-a-lax-monoidal-functor-that-is-not-strong
kind: example
title: "The power-set functor is lax monoidal but not strong"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-power-set, def-lax-strong-and-strict-monoidal-functor, cor-set-cat-and-every-complete-category-are-cartesian-monoidal]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $\mathcal P:\mathbf{Set}\to\mathbf{Set}$ be the covariant power-set
functor: on a function $f:X\to Y$, it sends $A\subseteq X$ to its direct image
$f(A)\subseteq Y$. For sets $X,Y$, define

$$\mathcal P_2:\mathcal P(X)\times\mathcal P(Y)\longrightarrow\mathcal P(X\times Y),\qquad (A,B)\longmapsto A\times B,$$

and let

$$\mathcal P_0:1\longrightarrow\mathcal P(1)$$

pick the unique subset $\{*\}$ of the singleton set.

## Facts & Assumptions

**Given:** The power-set construction and the cartesian monoidal structure on
$\mathbf{Set}$.

[L1] $\mathcal P(X)$ is the set of all subsets of $X$ ([[def-power-set]]).

[L2] Lax, strong, and strict monoidal functors are distinguished by their structure maps and whether those maps are isomorphisms ([[def-lax-strong-and-strict-monoidal-functor]]).

[L3] $\mathbf{Set}$ is cartesian monoidal ([[cor-set-cat-and-every-complete-category-are-cartesian-monoidal]]).

## Verification

**Proof technique:** direct.

1.1 Direct images preserve identities and composition, so the displayed action on functions makes $\mathcal P$ a functor. By [L1] and [L3], the map $\mathcal P_2$ is well typed: if $A\subseteq X$ and $B\subseteq Y$, then $A\times B\subseteq X\times Y$. For functions $f:X\to X'$ and $g:Y\to Y'$, one has $(f\times g)(A\times B)=f(A)\times g(B)$, so $\mathcal P_2$ is natural. The unit map $\mathcal P_0$ is also well typed because a singleton set has exactly one subset equal to itself. [L1, L3, algebra]

2.1 For subsets $A\subseteq X$, $B\subseteq Y$, and $C\subseteq Z$, both sides of the lax associativity axiom send $((A,B),C)$ to the subset of $X\times(Y\times Z)$ consisting of all $(x,(y,z))$ with $x\in A$, $y\in B$, and $z\in C$. The left and right unit axioms likewise send $(*,A)$ and $(A,*)$ back to $A$. Hence $\mathcal P$ is lax monoidal. [step 1.1, L2, L3]

2.2 Take $X=Y=\{0,1\}$. The diagonal subset $\Delta=\{(0,0),(1,1)\}\subseteq X\times Y$ is not of the form $A\times B$ for subsets $A\subseteq X$ and $B\subseteq Y$. So $\mathcal P_2$ is not surjective, hence not an isomorphism. [L1, step 1.1]

3.1 Therefore the power-set functor is lax monoidal but not strong. [step 2.1, step 2.2, L2] ∎
