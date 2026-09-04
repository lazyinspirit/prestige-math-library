---
id: prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors
kind: proposition
title: "A natural transformation induces natural transformations of left derived functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-left-derived-functors-relative-to-supplied-data-are-additive-functors, def-natural-transformation, prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps, thm-a-chain-map-induces-a-well-defined-map-on-homology, def-left-derived-map-relative-to-resolution-data]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $P$ be a supplied projective resolution datum, let
$F,G:\mathcal A\to\mathcal B$ be additive functors between abelian
categories, and let
$\alpha:F\Rightarrow G$ be a natural transformation. Then for every
$n\in\mathbb Z$ the maps
$$\mathbf L_n^P(\alpha)_A:=H_n\!\bigl(\alpha_{P(A)_{\mathrm{del}}}\bigr):L_n^PF(A)\to L_n^PG(A)$$
define a natural transformation
$$\mathbf L_n^P(\alpha):L_n^PF\Rightarrow L_n^PG.$$
## Facts & Assumptions

**Given:** An integer $n$.

[L1] A natural transformation is a family of components satisfying the naturality equation on every morphism ([[def-natural-transformation]]).

[L2] Additive functors apply degreewise to complexes and chain maps ([[prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps]]).

[L3] Every chain map induces a well-defined map on homology ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

[L4] The left derived maps are the homology maps induced from comparison lifts ([[def-left-derived-map-relative-to-resolution-data]]).

[L5] The source and target assignments are already functors ([[thm-left-derived-functors-relative-to-supplied-data-are-additive-functors]]).

## Proof

**Proof technique:** direct.

1.1 For each object $A$, the components $\alpha_{P_k(A)}$ form a chain map $$\alpha_{P(A)_{\mathrm{del}}}:F(P(A)_{\mathrm{del}})\to G(P(A)_{\mathrm{del}}),$$ because [L1] makes them commute with each differential of the chosen deleted resolution. [L1, L2, given, algebra]

2.1 By [L3], step 1.1 induces a morphism $\mathbf L_n^P(\alpha)_A:L_n^PF(A)\to L_n^PG(A)$ for each $A$. [L3, step 1.1, construct]

3.1 Let $u:A\to B$, and choose a comparison lift $\widetilde u_\bullet:P_\bullet(A)\to P_\bullet(B)$. Naturality in [L1] gives $$G(\widetilde u_k)\,\alpha_{P_k(A)}=\alpha_{P_k(B)}\,F(\widetilde u_k)$$ for every degree $k$, so the square of chain maps commutes. Passing to homology and using [L4] gives $$L_n^PG(u)\circ\mathbf L_n^P(\alpha)_A =\mathbf L_n^P(\alpha)_B\circ L_n^PF(u).$$ Thus the components from step 2.1 are natural. [L1, L4, L5, step 2.1, algebra] ∎
