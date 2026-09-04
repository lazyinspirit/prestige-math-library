---
id: prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws
kind: proposition
title: "Change-of-projective-resolution isomorphisms satisfy identity and cocycle laws"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic, lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects, lem-the-change-of-projective-resolution-isomorphisms-are-natural, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, thm-chain-homotopic-maps-induce-the-same-map-on-homology, prop-homology-respects-identities-and-composition]
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

Let $P,Q,R$ be supplied projective resolution data on the same domain, and let
$F:\mathcal A\to\mathcal B$ be an additive functor between abelian categories.
For each ordered pair $(S,T)$ among these data, let $\theta_{S,T}$ be the
change-of-data natural isomorphism whose component at an object $A$ is induced
by any comparison map $S_\bullet(A)\to T_\bullet(A)$ lifting $1_A$. Then:

1. $\theta_{P,P}=1_{L_n^PF}$ for every $n$.
2. $\theta_{Q,R}\circ\theta_{P,Q}=\theta_{P,R}$ for every $n$.
## Facts & Assumptions

**Given:** An object $A$ in the common domain and an integer $n$.

[L1] A comparison map between two supplied projective resolutions of $A$
induces the isomorphism $\theta_{S,T}(A)$, and these objectwise isomorphisms are
natural in $A$
([[lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects]],
[[lem-the-change-of-projective-resolution-isomorphisms-are-natural]]).

[L2] Two projective comparison maps lifting the same morphism are
chain-homotopic
([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).

[L3] Chain-homotopic maps induce the same homology map, and homology respects
composition ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]],
[[prop-homology-respects-identities-and-composition]]).

## Proof

**Proof technique:** direct.

1.1 For the pair $(P,P)$, one valid comparison map is the identity chain map on $P_\bullet(A)$. Any comparison map used to define $\theta_{P,P}(A)$ also lifts $1_A$, so [L2] makes it homotopic to the identity chain map. By [L3], the induced homology map is therefore the identity on $L_n^PF(A)$. [L1, L2, L3, given]

1.2 For the triple $(P,Q,R)$, the chain map defining $\theta_{Q,R}(A)\circ\theta_{P,Q}(A)$ is the composite of two comparison maps $P_\bullet(A)\to Q_\bullet(A)\to R_\bullet(A)$ lifting $1_A$. The chain map defining $\theta_{P,R}(A)$ is another comparison map lifting $1_A$. By [L2] they are homotopic, so [L3] gives equality of the induced homology maps: $$\theta_{Q,R}(A)\circ\theta_{P,Q}(A)=\theta_{P,R}(A).$$ [L1, L2, L3, algebra]

2.1 Since $A$ was arbitrary, steps 1.1 and 1.2 prove the identity and cocycle laws for the natural isomorphisms. [step 1.1, step 1.2] ∎
