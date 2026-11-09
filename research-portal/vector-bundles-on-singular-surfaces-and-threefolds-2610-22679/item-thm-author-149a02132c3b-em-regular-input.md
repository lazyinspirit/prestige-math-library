---
title: Exact natural regular motivic-to-cdh comparison
status: draft
research_item: thm-author-149a02132c3b-em-regular-input
dependency_level: 9
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)

## Statement
For a prime field $F$ and $r\geq0$, the actual source comparison $\eta_r:\mathbb Z(r)_{\mathrm{mot},F}\to C_{r,F}=\mathbb Z(r)_{\mathrm{cdh},F}$ is a natural transformation on all qcqs $F$-schemes and is an equivalence on every regular Noetherian $F$-scheme. Therefore on smooth finite-type schemes over any perfect field $k\supset F$, it is an equivalence of diagrams for open restrictions, even when those schemes are not finite type over $F$.

## External input
Import the exact natural transformation on all qcqs prime-field schemes and its regular Noetherian equivalence. This supplies naturality before taking groups or fibers. It does not infer naturality from the pointwise wording of Theorem1.1(9). The smooth arbitrary-field cycle comparison is supplied independently by the next input.

## Facts & Assumptions
**Given:** The hypotheses in the statement, with the Axiom of Choice and fixed universe bounds.

**Goal:** Construct the stated actual maps and prove their consequence.

[F1] The exact source records in External input.

## Proof
1.1 Import the actual transformation (6.1) and Theorem6.1(2). [F1]

2.1 Its hypotheses are regular Noetherian, not smooth finite type over the prime field. Precompose this transformation with the forgetful functor on $k$-schemes; regularity and Noetherianness of the underlying scheme are unchanged. Thus it applies to the stated smooth schemes and their open restrictions. The substantial regular comparison proof is imported, not reconstructed. [F1, step 1.1] ∎
