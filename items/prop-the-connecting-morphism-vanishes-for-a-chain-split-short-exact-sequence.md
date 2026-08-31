---
id: prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence
kind: proposition
title: "The connecting morphism vanishes for a chain-split short exact sequence"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-preconnecting-arrow-on-cycles,
       def-connecting-morphism-in-homology,
       def-chain-map,
       thm-long-exact-sequence-in-homology]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-27
---

## Statement

Let
$$0\to A_\bullet\xrightarrow{i}B_\bullet\xrightarrow{p}C_\bullet\to0$$
be a short exact sequence of complexes. If it admits either a chain section
$s:C_\bullet\to B_\bullet$ with $ps=1_C$ or a chain retraction
$r:B_\bullet\to A_\bullet$ with $ri=1_A$, then
$$\partial_n=0:H_n(C)\to H_{n-1}(A)$$
for every $n$.

## Facts & Assumptions

**Given:** A short exact sequence $0\to A_\bullet\xrightarrow{i}B_\bullet\xrightarrow{p}C_\bullet\to0$ of complexes.

[L1] A chain map is a degreewise morphism commuting with the differentials ([[def-chain-map]]).

[L2] The connecting morphism is induced from the preconnecting arrow on cycles ([[def-connecting-morphism-in-homology]], [[def-preconnecting-arrow-on-cycles]]).

[L3] The associated homology sequence is exact ([[thm-long-exact-sequence-in-homology]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that there is a chain section $s$ with $ps=1_C$. Functoriality of homology gives $H_n(p)H_n(s)=1_{H_n(C)}$, so $H_n(p)$ is epic. Exactness in [L3] gives $\ker(\partial_n)=\operatorname{im}(H_n(p))=H_n(C)$, hence $\partial_n=0$. [L1, L3, given, algebra]

2.1 Suppose instead that there is a chain retraction $r$ with $ri=1_A$. Then $H_{n-1}(r)H_{n-1}(i)=1_{H_{n-1}(A)}$, so $H_{n-1}(i)$ is monic. Exactness in [L3] gives $\operatorname{im}(\partial_n)=\ker(H_{n-1}(i))=0$, and a morphism with zero image in an abelian category is zero. Thus the connecting morphism vanishes in either chain-split situation. [L1, L2, L3, given, algebra] ∎
