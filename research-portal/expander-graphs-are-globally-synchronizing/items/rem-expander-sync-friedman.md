---
id: rem-expander-sync-friedman
title: Typical regular graphs are almost Ramanujan
kind: remark
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-adjacency-expander
  - def-expander-sync-graph-notation
  - def-expander-sync-random-regular-model
  - def-expander-prereq-asymptotic-quantifiers
  - thm-expander-prereq-uniform-regular-spectral-input
  - lem-author-bcce21321c2a-ordered-centered-spectrum
dependency_roles:
  def-expander-sync-adjacency-expander: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-random-regular-model: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  thm-expander-prereq-uniform-regular-spectral-input: mathematical-premise
  lem-author-bcce21321c2a-ordered-centered-spectrum: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 7, Section 1.3, paragraph citing Friedman [20]
dependency_level: 5
---

## Statement

Fix an integer $d\ge3$ and $\varepsilon>0$. A uniformly chosen labelled simple $d$-regular graph on $n$ vertices is, with high probability, an $(n,d,\alpha)$-expander with $\alpha=(2\sqrt{d-1}+\varepsilon)/d$. The limit is as $n\to\infty$ through orders for which such graphs exist, with $d$ and $\varepsilon$ fixed.

Here simple means without loops or repeated edges, and $d$-regular means that every vertex has $d$ neighbors. Uniformly chosen means that every such graph on $\{1,\ldots,n\}$ has equal probability; with high probability means that the probability tends to one. For adjacency matrix $A$ and all-ones matrix $J$, the expander condition is $\|A-(d/n)J\|_{\mathrm{op}}\le\alpha d$, where the operator norm is induced by the Euclidean norm. This is the almost-Ramanujan assertion attributed to Friedman in the article.

## Statement references

[[def-expander-sync-adjacency-expander]]

[[def-expander-sync-graph-notation]]

[[def-expander-sync-random-regular-model]]

[[def-expander-prereq-asymptotic-quantifiers]]

## Facts & Assumptions

[F1] For fixed integer $d\ge3$ and fixed $\varepsilon>0$, in the uniform labelled simple $d$-regular model, the probability that $\max\{\lambda_2(A),|\lambda_n(A)|\}\ge2\sqrt{d-1}+\varepsilon$ tends to zero along feasible orders. The real adjacency eigenvalues are ordered with multiplicity as $d=\lambda_1\ge\cdots\ge\lambda_n$ ([[thm-expander-prereq-uniform-regular-spectral-input]]).

[F2] For a labelled simple $d$-regular graph with $d>0$ and $n\ge2$, $\|A-(d/n)J\|_{\mathrm{op}}=\max\{\lambda_2(A),|\lambda_n(A)|\}$ ([[lem-author-bcce21321c2a-ordered-centered-spectrum]]).

[F3] In the stated model the expander event is the centered norm inequality above, and high probability is convergence of its probability to one along feasible orders ([[def-expander-sync-adjacency-expander]], [[def-expander-sync-graph-notation]], [[def-expander-sync-random-regular-model]], [[def-expander-prereq-asymptotic-quantifiers]]).

## Proof

**Given:** Fixed integer $d\ge3$ and fixed $\varepsilon>0$, with the uniform simple regular graph law at each feasible order.

**Goal:** Show that the $(n,d,\alpha)$-expander event has probability tending to one for $\alpha=(2\sqrt{d-1}+\varepsilon)/d$.

1.1 By [F1], the event that $\max\{\lambda_2(A),|\lambda_n(A)|\}<2\sqrt{d-1}+\varepsilon$ has probability tending to one. The graph law and feasible-order limit here are exactly those in the statement. [given, F1]

2.1 By [F2], on this event $\|A-(d/n)J\|_{\mathrm{op}}<2\sqrt{d-1}+\varepsilon=\alpha d$. It therefore satisfies the non-strict expander inequality in [F3]. Its probability is at least that of the event in step 1.1 and at most one, so it tends to one. [F2, F3, step 1.1, algebra] ∎
