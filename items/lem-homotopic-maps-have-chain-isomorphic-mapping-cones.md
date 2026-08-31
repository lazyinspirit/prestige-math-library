---
id: lem-homotopic-maps-have-chain-isomorphic-mapping-cones
kind: lemma
title: "Homotopic maps have chain-isomorphic mapping cones"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-mapping-cone-of-a-chain-map, def-chain-homotopy]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Statement

If chain maps $f,g:C_\bullet\to D_\bullet$ are chain-homotopic, then
$\operatorname{Cone}(f)$ and $\operatorname{Cone}(g)$ are isomorphic as chain
complexes.

## Facts & Assumptions

**Given:** Chain maps $f,g:C_\bullet\to D_\bullet$ and a chain homotopy
$s:f\simeq g$.

[L1] A chain homotopy satisfies
$$f-g=d^Ds+sd^C$$
([[def-chain-homotopy]]).

[L2] The cone differential is
$$d(y,x)=(d^D(y)+f(x),-d^C(x))$$
([[def-mapping-cone-of-a-chain-map]]).

## Proof

**Proof technique:** direct.

1.1 Define $\Phi_n:\operatorname{Cone}(f)_n\to\operatorname{Cone}(g)_n$ by $$\Phi_n(y,x):=(y+s_{n-1}(x),x).$$ Using [L2], the equality $g-f=-(f-g)$, and then [L1], one checks $$d^{\operatorname{Cone}(g)}\Phi=\Phi d^{\operatorname{Cone}(f)}.$$ [L1, L2, given, construct, algebra]

2.1 Replacing $s$ by $-s$ gives the inverse block map $$\Psi_n(y,x):=(y-s_{n-1}(x),x).$$ Thus $\Phi$ is a chain isomorphism between the two mapping cones. [L1, step 1.1, algebra] ∎
