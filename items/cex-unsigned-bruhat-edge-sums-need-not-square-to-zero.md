---
id: cex-unsigned-bruhat-edge-sums-need-not-square-to-zero
kind: counterexample
title: Unsigned Bruhat edge sums need not square to zero
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-compatible-signs-exist-on-the-bruhat-graph, lem-bruhat-covers-give-unique-verma-embeddings, lem-bruhat-rank-two-intervals-are-diamonds, def-bgg-differential-from-signed-verma-maps, def-bgg-bruhat-verma-sum-in-degree-k, lem-dominant-integral-dot-translates-embed-in-the-verma-module, def-bgg-category-o, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Direct computation in the A2 Bruhat graph, using the exactly-two-middles lemma and the canonical path-independent inclusions (this row is ai-generated; no dependency may cite it)"
      url: "https://arxiv.org/pdf/1911.00871"
---

## Statement refuted

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In the A2 BGG complex the signs can all be taken equal to $+1$: with $d^{\mathrm{uns}}_k$ defined by using the canonical cover embeddings with coefficient $+1$ on every arrow, the unsigned edge sums satisfy $d^{\mathrm{uns}}_{k-1}\circ d^{\mathrm{uns}}_k=0$ and form a complex.

## Facts & Assumptions

**Given:** The Axiom of Choice, the A2 setting $\mathfrak g=\mathfrak{sl}_3$, simple roots $\alpha_1,\alpha_2$, $W=S_3=\{e,s_1,s_2,s_1s_2,s_2s_1,w_0\}$, a dominant integral weight $\lambda\in\Lambda^+$, and the unsigned edge sums $d^{\mathrm{uns}}_k\colon C_k(\lambda)\to C_{k-1}(\lambda)$ whose $(w,w')$-component is $\iota_{w\to w'}$ for every cover $w\rhd w'$ and $0$ otherwise (every sign $+1$).

[F1] $C_0(\lambda)=M(\lambda)$, $C_1(\lambda)=M(s_1\circ\lambda)\oplus M(s_2\circ\lambda)$, $C_2(\lambda)=M(s_1s_2\circ\lambda)\oplus M(s_2s_1\circ\lambda)$, and the covers of the A2 Bruhat graph are $w_0\rhd s_1s_2$, $w_0\rhd s_2s_1$, $s_1s_2\rhd s_1$, $s_1s_2\rhd s_2$, $s_2s_1\rhd s_2$, $s_2s_1\rhd s_1$, $s_1\rhd e$, $s_2\rhd e$ ([[def-bgg-bruhat-verma-sum-in-degree-k]], [[lem-bruhat-rank-two-intervals-are-diamonds]]).

[F2] For a cover $x\rhd y$ the canonical embedding $\iota_{x\to y}\colon M(x\circ\lambda)\hookrightarrow M(y\circ\lambda)$ is nonzero and injective; for a saturated path $x\rhd m\rhd y$ the composite $\iota_{m\to y}\circ\iota_{x\to m}$ is the canonical inclusion of $M(x\circ\lambda)$ into $M(y\circ\lambda)$ and is independent of the middle element $m$ ([[lem-bruhat-covers-give-unique-verma-embeddings]], [[lem-dominant-integral-dot-translates-embed-in-the-verma-module]]).

[F3] The four nonzero components of $d^{\mathrm{uns}}_2\colon C_2\to C_1$ are the cover embeddings $s_1s_2\to s_1$, $s_1s_2\to s_2$, $s_2s_1\to s_1$, $s_2s_1\to s_2$, all with coefficient $+1$. The two nonzero components of $d^{\mathrm{uns}}_1\colon C_1\to C_0$ are $s_1\to e$ and $s_2\to e$, again with coefficient $+1$. Composition sums the component composites over intermediate summands ([[def-bgg-differential-from-signed-verma-maps]]).

## Counterexample

1.1 The $(s_1s_2,e)$-component of $d^{\mathrm{uns}}_1\circ d^{\mathrm{uns}}_2$ is the sum $\iota_{s_1\to e}\circ\iota_{s_1s_2\to s_1}+\iota_{s_2\to e}\circ\iota_{s_1s_2\to s_2}$. These are exactly the two saturated paths $s_1s_2\rhd s_1\rhd e$ and $s_1s_2\rhd s_2\rhd e$ of the rank-two interval $[e,s_1s_2]$. [F1, F3]

2.1 Both composites are the same canonical inclusion $\iota\colon M(s_1s_2\circ\lambda)\hookrightarrow M(\lambda)$ by [F2]. Their coefficients are both $+1$, so the component equals $2\iota$. [F2, step 1.1]

3.1 The inclusion $\iota$ is nonzero and the base field $\mathbb C$ has characteristic zero, so $2\iota\ne0$. Hence $d^{\mathrm{uns}}_1\circ d^{\mathrm{uns}}_2\ne0$, and the unsigned sums do not form a complex. Compatible signs are needed to make the two equal path maps cancel. [F2, step 2.1] ∎
