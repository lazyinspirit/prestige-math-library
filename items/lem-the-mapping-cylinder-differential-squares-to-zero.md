---
id: lem-the-mapping-cylinder-differential-squares-to-zero
kind: lemma
title: "The mapping-cylinder differential squares to zero"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-mapping-cylinder-of-a-chain-map, def-chain-map]
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

For every chain map $f:C_\bullet\to D_\bullet$, the differential of
[[def-mapping-cylinder-of-a-chain-map]] satisfies
$$d_{n-1}^{\operatorname{Cyl}(f)}d_n^{\operatorname{Cyl}(f)}=0$$
for every $n$.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$, an integer $n$, and an
element $(x,y,z)\in C_n\oplus D_n\oplus C_{n-1}$.

[L1] The cylinder differential is
$$d_n^{\operatorname{Cyl}(f)}(x,y,z)=(d_n^C(x)+z,d_n^D(y)-f_{n-1}(z),-d_{n-1}^C(z))$$
([[def-mapping-cylinder-of-a-chain-map]]).

[L2] A chain map satisfies
$$d_{n-1}^Df_{n-1}=f_{n-2}d_{n-1}^C$$
([[def-chain-map]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L1] twice gives $$d_{n-1}^{\operatorname{Cyl}(f)}d_n^{\operatorname{Cyl}(f)}(x,y,z)=\bigl(d_{n-1}^Cd_n^C(x)+d_{n-1}^C(z)-d_{n-1}^C(z),d_{n-1}^Dd_n^D(y)-d_{n-1}^Df_{n-1}(z)+f_{n-2}d_{n-1}^C(z),d_{n-2}^Cd_{n-1}^C(z)\bigr).$$ [L1, given, algebra]

2.1 The diagonal terms vanish because $C_\bullet$ and $D_\bullet$ are complexes, and [L2] cancels the mixed terms in the middle coordinate. Hence the displayed triple is zero, so the cylinder differential squares to zero. [L2, step 1.1, algebra] ∎
