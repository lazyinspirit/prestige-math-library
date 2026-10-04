---
id: lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint
kind: lemma
title: "Continuity and smooth local representatives of collapse"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-pontryagin-thom-collapse-of-an-embedded-submanifold", "lem-continuity-is-local-and-pastes"]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford Math 215B notes, Lectures 14–15, Theorems 138–139"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "printed pp.44–46; collapse pullback, compact-support duality and Thom normalization"
    - title: "Lee, Introduction to Smooth Manifolds, tubular neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
      locator: "Tubular Neighborhoods; normal quotient identification"
---

## Statement

The defined collapse is continuous and based, and its restriction over the complement of the Thom basepoint is smooth. It is smooth near the zero section, where zero is a regular value in every normal fiber chart. Radial cutoff models give based homotopic collapses with any prescribed positive linear normal scale near zero.

## Facts & Assumptions

**Given:** Compact $S$, smooth tube $\Phi$, supplied metric and radius as in [[def-pontryagin-thom-collapse-of-an-embedded-submanifold]].

[F1] That definition fixes the quotient topology and the smooth structure away from the basepoint.

[F2] A function that is continuous on each member of a finite closed cover is continuous ([[lem-continuity-is-local-and-pastes]]).

## Proof

1.1 On the closed tube the continuous map $\Phi(s,v)\mapsto[(s,v/\rho)]$ sends its boundary to the basepoint. On the closed complement of its interior the map is constant. These two closed sets cover $X$ and the definitions agree on their intersection, so the closed pasting lemma [F2] proves continuity on $X$; at a disjoint added basepoint continuity is immediate. At the compactification point, the complement of the compact closed tube is a neighborhood mapped constantly to the basepoint; this proves continuity there. [F1, F2, given]

2.1 On the inverse image of the nonbasepoint stratum the formula is a smooth tubular inverse followed by fiber scaling. In a bundle trivialization about zero the map reads $(s,v)\mapsto(s,v/\rho)$, whose derivative in the fibre directions is $\rho^{-1}$ times the identity, so it is a submersion there; identifying the normal quotient of $X$ along $S$ with $E$ by $\alpha^{-1}$, that vertical derivative is $\rho^{-1}\alpha^{-1}$ and its zero fibre is exactly $S$. No smoothness assertion at the Thom basepoint is needed. [F1, step 1.1]

3.1 More generally let $a:[0,\rho]\to[0,1]$ be smooth on $[0,\rho)$, positive off zero, equal to $\lambda t$ near zero for $\lambda>0$, and equal to $1$ on a neighborhood of $\rho$. Map $v\ne0$ to $a(\|v\|)v/\|v\|$ and zero to zero, and then take the quotient; outside the tube use the basepoint. This is continuous by step 1.1 and smooth on its nonbasepoint stratum, including zero because its formula there is $\lambda v$. Convex interpolation between this radius profile and $t/\rho$ stays positive for $t>0$, is linear with positive coefficient near zero, and equals $1$ at the boundary. The same pasting argument on $X\times I$ proves the based homotopy. Thus a cutoff supplies the contracted smooth representative near regular values without assigning a smooth structure at the collapsed point. [F1, step 1.1, step 2.1, construct] ∎
