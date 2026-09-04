---
id: lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects
kind: lemma
title: "Objectwise comparison of two projective resolution data induces an isomorphism on derived objects"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-derived-object-relative-to-projective-resolution-data, def-supplied-projective-resolution-datum, thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object, thm-chain-homotopic-maps-induce-the-same-map-on-homology, prop-homology-respects-identities-and-composition]
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
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $P$ and $Q$ be supplied projective resolution data on the same domain, and
let $F:\mathcal A\to\mathcal B$ be an additive functor between abelian
categories. For every object $A$ in the common domain and every
$n\in\mathbb Z$, there is an isomorphism
$$\theta_{P,Q}(A):L_n^PF(A)\xrightarrow{\ \sim\ }L_n^QF(A)$$
induced by a comparison map between the chosen resolutions of $A$.
## Facts & Assumptions

**Given:** An object $A$ in the common domain and an integer $n$.

[L1] The data $P$ and $Q$ supply specific projective resolutions of $A$
([[def-supplied-projective-resolution-datum]]).

[L2] Any two projective resolutions of the same object are homotopy equivalent
over that object ([[thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object]]).

[L3] Chain-homotopic maps induce the same homology map, and homology respects
composition ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]],
[[prop-homology-respects-identities-and-composition]]).

[L4] The derived objects are the homology objects of the chosen deleted
resolutions after applying $F$
([[def-left-derived-object-relative-to-projective-resolution-data]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], there exist comparison maps $c_\bullet:P_\bullet(A)\to Q_\bullet(A)$ and $d_\bullet:Q_\bullet(A)\to P_\bullet(A)$ whose composites are homotopic to the identity chain maps on the two resolutions. [L1, L2, given, construct]

2.1 Apply $F$ degreewise and pass to homology. By [L3], the induced maps $H_n(F(c_\bullet))$ and $H_n(F(d_\bullet))$ are inverse because their composites equal the homology maps of chain maps homotopic to the identities. Using [L4], this yields the claimed isomorphism $\theta_{P,Q}(A):L_n^PF(A)\xrightarrow{\sim}L_n^QF(A)$. [L3, L4, step 1.1] ∎
