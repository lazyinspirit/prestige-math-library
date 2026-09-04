---
id: ex-independence-of-two-comparison-lifts-on-homology
kind: example
title: "Independence of two comparison lifts on homology"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [lem-the-induced-homology-map-is-independent-of-the-comparison-lift, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]
proof_strategy: direct
verification:
  audited: 2026-09-04
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
## Example

Assume the Axiom of Dependent Choice. Let $P$ be a supplied projective
resolution datum on a class $\mathcal D$ in an abelian category $\mathcal A$,
let $F:\mathcal A\to\mathcal B$ be an additive functor to an abelian category,
let $u:A\to B$ be a morphism with $A,B\in\mathcal D$, and let
$$\widetilde u_\bullet,\widehat u_\bullet:P_\bullet(A)\to P_\bullet(B)$$
be two comparison lifts between chosen projective resolutions. Then for every
$n$ they induce the same map
$$L_n^PF(A)\to L_n^PF(B).$$
This is what makes the left derived map well defined.
## Facts & Assumptions

**Given:** The supplied datum $P$, additive functor $F$, morphism $u:A\to B$
with $A,B\in\mathcal D$, and two comparison lifts
$\widetilde u_\bullet,\widehat u_\bullet$.

[L1] Two comparison maps lifting the same morphism are chain-homotopic
([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).

[L2] The induced homology map is independent of the chosen comparison lift
([[lem-the-induced-homology-map-is-independent-of-the-comparison-lift]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the two displayed lifts are chain-homotopic. [L1, given]

2.1 Apply [L2] to those two lifts. It follows that they induce the same map on every left derived object $L_n^PF(A)\to L_n^PF(B)$. [L2, step 1.1] ∎
