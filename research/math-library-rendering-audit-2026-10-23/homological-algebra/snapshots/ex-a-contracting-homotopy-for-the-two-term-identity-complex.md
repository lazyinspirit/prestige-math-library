---
id: ex-a-contracting-homotopy-for-the-two-term-identity-complex
kind: example
title: "A contracting homotopy for the two-term identity complex"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-chain-homotopy, def-contractible-complex, thm-abelian-groups-form-an-abelian-category]
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

In $\mathbf{Ab}$, consider the chain complex
$$0\to\mathbb Z\xrightarrow{1_{\mathbb Z}}\mathbb Z\to0,$$
with the left copy of $\mathbb Z$ in degree $1$ and the right copy in degree
$0$. It is contractible: a contracting homotopy is given by $s_0=1_{\mathbb Z}$
and $s_n=0$ for $n\neq0$.

## Facts & Assumptions

**Given:** The two-term identity complex $C_\bullet$ in $\mathbf{Ab}$.

[L1] A chain homotopy from $1_C$ to $0$ is a degree-$1$ family $s$ with $$1_C=d s+s d$$ ([[def-chain-homotopy]]).

[L2] A complex is contractible when its identity is null-homotopic ([[def-contractible-complex]]).

[L3] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 Define $s_0=1_{\mathbb Z}:C_0\to C_1$ and $s_n=0$ otherwise. In degree $1$, $$d_2s_1+s_0d_1=0+1_{\mathbb Z}=1_{C_1},$$ and in degree $0$, $$d_1s_0+s_{-1}d_0=1_{\mathbb Z}+0=1_{C_0}.$$ [L1, L3, given, algebra]

2.1 Thus $1_C=ds+sd$, so [L1] makes $1_C$ homotopic to $0$. By [L2], the complex is contractible. [L1, L2, step 1.1, algebra] ∎
