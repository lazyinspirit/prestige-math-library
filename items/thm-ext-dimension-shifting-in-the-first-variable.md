---
id: thm-ext-dimension-shifting-in-the-first-variable
kind: theorem
title: "Ext dimension shifting in the first variable"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-balanced-ext-bifunctor, thm-long-exact-ext-sequence-in-the-first-variable, prop-positive-ext-vanishes-on-a-projective-first-variable, def-syzygy-and-cosyzygy-relative-to-a-resolution]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Dependent Choice. Let $\mathcal A$ be abelian with enough
projectives and enough injectives, fix supplied projective and injective
resolution data on all its objects, and let
$$0\longrightarrow\Omega M\xrightarrow{i}P_0\xrightarrow{\varepsilon}M\longrightarrow0$$
be the first stage of a projective resolution. For every object $N$ there is
an exact sequence
$$0\to\operatorname{Hom}(M,N)\to\operatorname{Hom}(P_0,N)\to\operatorname{Hom}(\Omega M,N)\to\operatorname{Ext}^1(M,N)\to0,$$
and for every $q\ge1$ there is a natural isomorphism
$$\operatorname{Ext}^{q}(\Omega M,N)\cong\operatorname{Ext}^{q+1}(M,N).$$

## Facts & Assumptions

**Given:** The displayed first stage and the remaining projective resolution $\cdots\to P_2\to P_1\to P_0\to M\to0$.

[L1] A short exact sequence in the first variable gives the long exact Ext
sequence ([[thm-long-exact-ext-sequence-in-the-first-variable]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $0\to\Omega M\to P_0\to M\to0$. Its relevant terms are $\operatorname{Ext}^{q}(P_0,N)\to\operatorname{Ext}^{q}(\Omega M,N) \to\operatorname{Ext}^{q+1}(M,N)\to\operatorname{Ext}^{q+1}(P_0,N)$. [L1, given, construct]

2.1 Since $P_0$ is projective, the outer groups vanish for $q\ge1$ by [[prop-positive-ext-vanishes-on-a-projective-first-variable]], giving the displayed natural isomorphism. The degree-zero end of the same long exact sequence is exactly the displayed five-term sequence. [step 1.1, algebra] ∎
