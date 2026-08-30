---
id: fs-chain-homotopic-maps-are-equal-as-chain-maps
kind: false-statement
title: "FALSE: chain-homotopic maps are equal as chain maps"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-chain-homotopy, def-homotopy-category-of-chain-complexes]
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

## Statement

Every pair of chain-homotopic chain maps is equal as chain maps.

## Facts & Assumptions

**Given:** The two-term complex $C_\bullet$ in $\mathbf{Ab}$ with $C_1=C_0=\mathbb Z$, differential $d_1=1_{\mathbb Z}$, and all other terms zero.

[A1] The statement refuted is: every pair of chain-homotopic chain maps is equal as chain maps.

[L1] A chain homotopy satisfies $$f-g=ds+sd$$ ([[def-chain-homotopy]]).

[L2] Passing to the homotopy category remembers only homotopy classes of maps ([[def-homotopy-category-of-chain-complexes]]).

## Refutation

**Proof technique:** direct.

1.1 Let $f=1_C$ and let $g=0:C_\bullet\to C_\bullet$. Define a degree-$1$ map $s$ by $s_0=1_{\mathbb Z}$ and all other components zero. A direct calculation gives $$ds+sd=1_C,$$ so [L1] yields $f\simeq g$. [L1, given, algebra]

2.1 The maps $f$ and $g$ are not equal, because $f_0=1_{\mathbb Z}$ while $g_0=0$. Thus [A1] is false. This is exactly why [L2] passes to homotopy classes instead of identifying homotopic maps inside $\operatorname{Ch}(\mathcal A)$ itself. [A1, L2, step 1.1, algebra] ∎
