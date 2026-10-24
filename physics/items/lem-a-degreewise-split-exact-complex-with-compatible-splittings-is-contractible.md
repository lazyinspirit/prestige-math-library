---
id: lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible
kind: lemma
title: "A degreewise split exact complex with compatible splittings is contractible"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-contractible-complex, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Statement

Let $C_\bullet$ be an acyclic chain complex. Suppose that for every $n$ there
is an isomorphism
$$\phi_n:C_n\xrightarrow{\sim} Z_n(C)\oplus Z_{n-1}(C)$$
such that
$$i_n=\phi_n^{-1}j_1,$$
where $i_n:Z_n(C)\hookrightarrow C_n$ is the cycle inclusion and $j_1$ is the
first summand inclusion, and such that the differential is
$$d_n=i_{n-1}\pi_2\phi_n,$$
where $\pi_2$ is the second projection. Then $C_\bullet$ is contractible.

## Facts & Assumptions

**Given:** An acyclic chain complex $C_\bullet$ and isomorphisms $\phi_n$ as in the statement.

[L1] A contractible complex is one whose identity map is null-homotopic ([[def-contractible-complex]]).

[L2] Acyclic means exact at every degree ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

## Proof

**Proof technique:** direct.

1.1 Define $s_{n-1}:C_{n-1}\to C_n$ by $$s_{n-1}:=\phi_n^{-1}j_2\pi_1\phi_{n-1},$$ where $j_2$ is the second inclusion and $\pi_1$ is the first projection. Then $$d_ns_{n-1}=i_{n-1}\pi_1\phi_{n-1}=\phi_{n-1}^{-1}j_1\pi_1\phi_{n-1}$$ by the formula for $d_n$ and the compatibility of $i_{n-1}$ with $\phi_{n-1}$. [given, algebra]

2.1 Likewise $$s_{n-2}d_{n-1}=\phi_{n-1}^{-1}j_2\pi_2\phi_{n-1},$$ so $$d_ns_{n-1}+s_{n-2}d_{n-1}=\phi_{n-1}^{-1}(j_1\pi_1+j_2\pi_2)\phi_{n-1}=1_{C_{n-1}}.$$ Thus the identity map is null-homotopic, and [L1] makes $C_\bullet$ contractible. [L1, L2, step 1.1, algebra] ∎
