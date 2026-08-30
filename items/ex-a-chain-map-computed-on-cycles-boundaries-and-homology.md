---
id: ex-a-chain-map-computed-on-cycles-boundaries-and-homology
kind: example
title: "A chain map computed on cycles, boundaries, and homology"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-chain-map-induces-a-well-defined-map-on-homology,
       thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
  audited: 2026-08-30
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
and let $D_\bullet$ be
$$0\to\mathbb Z\xrightarrow{\times4}\mathbb Z\to0.$$
The maps $f_1=1_{\mathbb Z}$ and $f_0=\times2$ define a chain map $f:C\to D$.
It induces the zero map on $H_1$ and the inclusion
$$\mathbb Z/2\mathbb Z\to\mathbb Z/4\mathbb Z,\qquad \bar x\mapsto \overline{2x},$$
on $H_0$.

## Facts & Assumptions

**Given:** The complexes $C_\bullet,D_\bullet$ and the family $f_1=1_{\mathbb Z}$, $f_0=\times2$.

[L1] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

[L2] A chain map induces a well-defined homology map ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

## Verification

**Proof technique:** direct.

1.1 The chain condition holds because $(\times4)\circ1_{\mathbb Z}=(\times2)\circ(\times2)$. Also $Z_1(C)=Z_1(D)=0$, $B_0(C)=2\mathbb Z$, and $B_0(D)=4\mathbb Z$. Hence $H_1(C)=H_1(D)=0$, $H_0(C)\cong\mathbb Z/2\mathbb Z$, and $H_0(D)\cong\mathbb Z/4\mathbb Z$. [L1, given, algebra]

2.1 By [L2], the induced homology map comes from the degree-$0$ map $f_0=\times2$ on cycles. It sends the boundary subgroup $2\mathbb Z$ into $4\mathbb Z$, so on quotients it is $$\bar x\longmapsto \overline{2x}.$$ In degree $1$ the homology groups are zero, so the induced map there is zero. [L2, step 1.1] ∎
