---
id: fs-the-mapping-cone-differential-needs-no-minus-sign
kind: false-statement
title: "FALSE: the mapping-cone differential needs no minus sign"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-mapping-cone-of-a-chain-map, lem-the-mapping-cone-differential-squares-to-zero]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Statement

The mapping-cone differential still squares to zero if one removes the minus
sign from the shifted summand.

## Facts & Assumptions

**Given:** The identity map $1_C$ on the two-term complex
$$0\to \mathbb Z\xrightarrow{1}\mathbb Z\to0,$$
placed in degrees $1$ and $0$.

[A1] The statement refuted is: the mapping-cone differential still squares to
zero if one removes the minus sign from the shifted summand.

[L1] With the minus sign present, the mapping-cone differential squares to zero
([[lem-the-mapping-cone-differential-squares-to-zero]]).

[L2] The actual cone differential is
$$d(y,x)=(d(y)+f(x),-d(x))$$
([[def-mapping-cone-of-a-chain-map]]).

## Refutation

**Proof technique:** direct.

1.1 Let $x=1$ be the generator of the copy of $\mathbb Z$ in $C_1$. If the minus sign were removed, then for the displayed identity map the modified square on $(0,x)$ would have first component $$d_C(x)+d_C(x)=2d_C(x)=2\neq0$$ in the copy of $\mathbb Z$ in degree $0$. So the modified differential does not square to zero on this cone. [A1, given, algebra]

2.1 This contradicts the claim in [A1]. The actual definition [L2] and the verified lemma [L1] show that the minus sign is exactly what cancels the mixed terms. [A1, L1, L2, step 1.1, algebra] ∎
