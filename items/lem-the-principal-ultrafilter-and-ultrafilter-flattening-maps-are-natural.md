---
id: lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural
kind: lemma
title: "The principal-ultrafilter and ultrafilter-flattening formulas are well-defined and natural"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial, def-ultrafilter, thm-ultrafilter-characterisation, lem-ultrafilter-prime]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Exercise 5.1.ii"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Write $\beta X$ for the set of ultrafilters on $X$ and $\widehat A=\{\mathcal U\in\beta X:A\in\mathcal U\}$ for $A\subseteq X$. The formulas

$$\eta_X(x)=\{A\subseteq X:x\in A\},\qquad \mu_X(\mathbb W)=\{A\subseteq X:\widehat A\in\mathbb W\}$$

define natural transformations $\eta:1_{\mathbf{Set}}\Rightarrow\beta$ and $\mu:\beta^2\Rightarrow\beta$.

## Facts & Assumptions

**Given:** A set $X$, a point $x\in X$, and an ultrafilter $\mathbb W$ on $\beta X$.

[L1] Pushforward makes $X\mapsto\beta X$ functorial ([[lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial]]).

[L2] The complement-decision property characterises ultrafilters ([[thm-ultrafilter-characterisation]]).

[L3] In an ultrafilter, a finite union belongs exactly when one of its members belongs ([[lem-ultrafilter-prime]]).

## Proof

**Proof technique:** direct.

1.1 The subsets containing $x$ form a proper filter and decide every $A\subseteq X$ according as $x\in A$ or $x\in X\setminus A$, so $\eta_X(x)$ is an ultrafilter by [L2]. For $f:X\to Y$, the equivalence $B\in f_*\eta_X(x)\iff x\in f^{-1}[B]\iff f(x)\in B$ proves naturality of $\eta$. [L1, L2]

1.2 The identities $\widehat X=\beta X$, $\widehat\varnothing=\varnothing$, $\widehat{A\cap B}=\widehat A\cap\widehat B$, and $A\subseteq B\Rightarrow\widehat A\subseteq\widehat B$ give the filter axioms for $\mu_X(\mathbb W)$. Inner complement decision gives $\widehat{X\setminus A}=\beta X\setminus\widehat A$; their union belongs to the outer ultrafilter, so [L3] puts one of them in it. By [L2] the resulting filter is an ultrafilter. [L2, L3]

2.1 For $f:X\to Y$ and $B\subseteq Y$, expanding definitions gives $B\in f_*\mu_X(\mathbb W)$ exactly when $\widehat{f^{-1}[B]}\in\mathbb W$. This is equivalent to $\widehat B\in(\beta f)_*\mathbb W$, because $(\beta f)^{-1}[\widehat B]=\widehat{f^{-1}[B]}$ by [L1]. Hence $f_*\mu_X=\mu_Y\,\beta(f_*)$. [L1, step 1.2] ∎
