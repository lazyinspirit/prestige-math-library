---
id: lem-metric-spaces-have-sigma-locally-finite-bases
kind: lemma
title: 'Under choice, every metric space has a $\sigma$-locally-finite basis'
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-stone-metric-spaces-are-paracompact, def-discrete-family-and-sigma-bases, def-metric-space, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Umeå University, The Smirnov- and Bing–Nagata–Smirnov Metrization Theorems"
      url: "https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A1395113"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every metric space has a $\sigma$-locally-finite open basis.

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and the Axiom of Choice.

[L1] Under choice every metric space is paracompact, so every open cover has a locally finite open refining cover ([[thm-stone-metric-spaces-are-paracompact]]).

[L2] Open balls form a basis for the metric topology ([[def-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 For each $n\in\mathbb N$, let $\mathcal C_n$ be the cover by balls of radius $2^{-n-3}$. By [L1], choose a locally finite open refining cover $\mathcal V_n$ of $\mathcal C_n$. [L1, choose]

2.1 The family $\mathcal B=\bigcup_n\mathcal V_n$ is $\sigma$-locally finite. It is a basis: if $x\in O$ with $O$ open, [L2] gives $\varepsilon>0$ with $B_d(x,\varepsilon)\subseteq O$; choose $n$ with $2^{-n-2}<\varepsilon$, and a member $V\in\mathcal V_n$ containing $x$. As $V$ lies in some $B_d(c,2^{-n-3})$ containing $x$, the triangle inequality gives $V\subseteq B_d(x,2^{-n-2})\subseteq O$. [L2, step 1.1]

3.1 Thus $\mathcal B$ is the asserted $\sigma$-locally-finite basis. [step 2.1] ∎
