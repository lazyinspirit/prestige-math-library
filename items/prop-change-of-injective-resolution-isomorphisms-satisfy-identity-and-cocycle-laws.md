---
id: prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws
kind: proposition
title: "Change-of-injective-resolution isomorphisms satisfy identity and cocycle laws"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic, lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions, thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object, thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy, def-cochain-complex-in-an-abelian-category, thm-chain-homotopic-maps-induce-the-same-map-on-homology, prop-homology-respects-identities-and-composition]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $I,J,K$ be supplied injective resolution data on the same domain, and let
$F:\mathcal A\to\mathcal B$ be an additive functor between abelian categories.
For each ordered pair $(S,T)$ among these data, let $\theta_{S,T}$ be the
change-of-data natural isomorphism whose component at an object $A$ is induced
by any comparison extension $S^\bullet(A)\to T^\bullet(A)$ of $1_A$. Then:

1. $\theta_{I,I}=1_{R_I^nF}$ for every $n$.
2. $\theta_{J,K}\circ\theta_{I,J}=\theta_{I,K}$ for every $n$.
## Facts & Assumptions

**Given:** An object $A$ in the common domain and an integer $n$.

[L1] The chosen injective resolutions of the same object are homotopy
equivalent under that object
([[thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object]]).

[L2] Two injective comparison maps extending the same morphism are
cochain-homotopic
([[thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]]).

[L3] Reindexing turns cochain homotopies into chain homotopies, and homology
then respects both homotopy and composition
([[def-cochain-complex-in-an-abelian-category]],
[[thm-chain-homotopic-maps-induce-the-same-map-on-homology]],
[[prop-homology-respects-identities-and-composition]]).

[L4] Comparison extensions exist for morphisms between objects in the domain
of each supplied injective datum
([[lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions]]).

## Proof

**Proof technique:** direct.

1.1 For any ordered pair $(S,T)$, [L1] gives comparison extensions $c_A:S^\bullet(A)\to T^\bullet(A)$ and $d_A:T^\bullet(A)\to S^\bullet(A)$ of $1_A$. Their composites extend $1_A$, so [L2] and [L3] show that the induced cohomology maps are inverse. Any other choice of $c_A$ extends the same identity and hence induces the same map. For a morphism $u:A\to B$, choose within-data comparison extensions using [L4]. The two composites from $S^\bullet(A)$ to $T^\bullet(B)$ both extend $u$, so [L2] and [L3] give the naturality square. Thus the displayed construction specifies a well-defined natural isomorphism $\theta_{S,T}$. [L1, L2, L3, L4, given, construct]

2.1 For the pair $(I,I)$, the identity cochain map on $I^\bullet(A)$ is a comparison extension of $1_A$. Any comparison extension used in step 1.1 to define $\theta_{I,I}(A)$ extends the same identity morphism, so [L2] makes it cochain-homotopic to the identity. By [L3], the induced map on cohomology is therefore the identity on $R_I^nF(A)$. [L2, L3, step 1.1]

2.2 For the triple $(I,J,K)$, the cochain map defining $\theta_{J,K}(A)\circ\theta_{I,J}(A)$ is the composite of two comparison extensions of $1_A$, while the map defining $\theta_{I,K}(A)$ is another comparison extension of $1_A$. By [L2] these are cochain-homotopic, so [L3] gives $$\theta_{J,K}(A)\circ\theta_{I,J}(A)=\theta_{I,K}(A).$$ [L2, L3, step 1.1, algebra]

3.1 Since $A$ was arbitrary, steps 2.1 and 2.2 prove the identity and cocycle laws for the natural isomorphisms constructed in step 1.1. [step 1.1, step 2.1, step 2.2] ∎
