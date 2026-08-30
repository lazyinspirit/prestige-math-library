---
id: ex-a-subcomplex-and-its-quotient-complex
kind: example
title: "A subcomplex and its quotient complex"
status: draft
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-subcomplex,
       def-quotient-complex,
       thm-modules-over-a-ring-form-an-abelian-category]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Example

Let $C_\bullet$ be the two-term complex
$$0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\to0,$$
and let $S_\bullet$ be the subcomplex with $S_1=0$ and $S_0=2\mathbb Z$. Then
the quotient complex $C/S$ is
$$0\to\mathbb Z\xrightarrow{0}\mathbb Z/2\mathbb Z\to0.$$

## Facts & Assumptions

**Given:** The complexes $C_\bullet$ and $S_\bullet$ just displayed.

[L1] A subcomplex is a degreewise subobject stable under the differentials ([[def-subcomplex]]).

[L2] A quotient complex is obtained by quotienting degreewise and descending the differential ([[def-quotient-complex]]).

[L3] $\mathbf{Ab}$ is an abelian category ([[thm-modules-over-a-ring-form-an-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 The family $S_\bullet$ is a subcomplex: the only nontrivial check is that $d_1(S_1)=0$ lands in $2\mathbb Z=S_0$. Thus [L1] applies. [L1, L3, given, algebra]

2.1 By [L2], the quotient has terms $C_1/S_1\cong\mathbb Z$ and $C_0/S_0\cong\mathbb Z/2\mathbb Z$. The descended differential is zero because $2x$ lies in $2\mathbb Z$ for every representative $x\in\mathbb Z$, so changing representatives does not change the class. Hence the quotient complex is as displayed. [L2, step 1.1, algebra] ∎
