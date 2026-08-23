---
id: lem-the-limit-map-of-a-compact-hausdorff-space-is-an-ultrafilter-algebra
kind: lemma
title: "The ultrafilter-limit map of a compact Hausdorff space is an algebra for the ultrafilter monad"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-given-ultrafilter-on-a-compact-hausdorff-space-has-a-unique-limit, def-the-ultrafilter-endofunctor-unit-and-multiplication, thm-the-ultrafilter-monad-is-a-monad, def-t-algebra-and-algebra-homomorphism]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem"
      url: "https://topology.lmf.cnrs.fr/algebras-of-the-filter-related-monads-i-ultrafilters-and-manes-theorem/"
pipeline_run: null
---

## Statement

Let $X$ be compact Hausdorff, and define $\xi_X:\beta X\to X$ by sending each ultrafilter to its unique limit. Then $\xi_X$ is an algebra for the ultrafilter monad:

$$\xi_X\eta_X=1_X,\qquad \xi_X\mu_X=\xi_X\beta(\xi_X).$$

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$ and its ultrafilter-limit map $\xi_X$.

[L1] Every ultrafilter on a compact Hausdorff space has exactly one limit ([[lem-a-given-ultrafilter-on-a-compact-hausdorff-space-has-a-unique-limit]]).

[L2] The ultrafilter monad has principal unit $\eta_X(x)=\{A\subseteq X:x\in A\}$ and flattening multiplication $\mu_X(\mathbb W)=\{A\subseteq X:\widehat A\in\mathbb W\}$, where $\widehat A=\{\mathcal U:A\in\mathcal U\}$ ([[def-the-ultrafilter-endofunctor-unit-and-multiplication]]).

[L3] A $T$-algebra structure $a$ satisfies $a\eta=1$ and $aT(a)=a\mu$ ([[def-t-algebra-and-algebra-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\xi_X$ is defined on every ultrafilter. When $X=\varnothing$, both $\beta X$ and $X$ are empty and the unique empty map satisfies the equations below. [L1, construct]

2.1 The principal ultrafilter $\eta_X(x)$ contains every neighbourhood of $x$, so it converges to $x$. Uniqueness in [L1] gives $\xi_X\eta_X(x)=x$ for every $x$. [step 1.1, L2, algebra]

2.2 Let $\mathbb W$ be an ultrafilter on $\beta X$. If an open neighbourhood $O$ of a point belongs to the pushforward $\beta(\xi_X)(\mathbb W)$, then $\xi_X^{-1}[O]\in\mathbb W$. Every ultrafilter whose limit lies in $O$ contains $O$, so $\xi_X^{-1}[O]\subseteq\widehat O$; upward closure gives $\widehat O\in\mathbb W$, hence $O\in\mu_X(\mathbb W)$ by [L2]. Thus every limit of the pushforward is a limit of the flattening. [step 1.1, L2, algebra]

3.1 Both ultrafilters in step 2.2 have unique limits by [L1], so their limits coincide: $\xi_X\beta(\xi_X)(\mathbb W)=\xi_X\mu_X(\mathbb W)$. [step 2.2, L1]

4.1 Steps 2.1 and 3.1 are exactly the unit and multiplication equations in [L3], so $\xi_X$ is an ultrafilter algebra. [step 2.1, step 3.1, L3] ∎
