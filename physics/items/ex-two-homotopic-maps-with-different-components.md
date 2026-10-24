---
id: ex-two-homotopic-maps-with-different-components
kind: example
title: "Two homotopic maps with different components"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-chain-homotopy, thm-chain-homotopic-maps-induce-the-same-map-on-homology, ex-a-contracting-homotopy-for-the-two-term-identity-complex]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Example

On the two-term identity complex
$$0\to\mathbb Z\xrightarrow{1_{\mathbb Z}}\mathbb Z\to0,$$
the identity chain map and the zero chain map are chain homotopic, even though
their degree-$0$ components are different.

## Facts & Assumptions

**Given:** The two-term identity complex $C_\bullet$.

[L1] The previous example supplies a degree-$1$ map $s$ with $$1_C=d s+s d$$ ([[ex-a-contracting-homotopy-for-the-two-term-identity-complex]]).

[L2] A chain homotopy satisfies $f-g=ds+sd$ ([[def-chain-homotopy]]).

[L3] Homotopic maps induce the same map on homology ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

## Verification

**Proof technique:** direct.

1.1 Let $f=1_C$ and $g=0$. By [L1], the chosen $s$ satisfies $$f-g=1_C=ds+sd,$$ so [L2] gives $f\simeq g$. [L1, L2, given, algebra]

2.1 Nevertheless $f_0=1_{\mathbb Z}$ and $g_0=0$, so the degree-$0$ components are different. By [L3], these distinct maps still induce the same homology map. [L3, step 1.1, algebra] ∎
