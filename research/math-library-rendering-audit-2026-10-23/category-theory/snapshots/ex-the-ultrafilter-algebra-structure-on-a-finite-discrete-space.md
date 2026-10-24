---
id: ex-the-ultrafilter-algebra-structure-on-a-finite-discrete-space
kind: example
title: "The ultrafilter algebra on a finite discrete space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-ultrafilter-endofunctor-unit-and-multiplication, thm-the-ultrafilter-monad-is-a-monad, thm-ultrafilter-characterisation, def-standard-topologies, def-compact-space, def-hausdorff-space]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem"
      url: "https://topology.lmf.cnrs.fr/algebras-of-the-filter-related-monads-i-ultrafilters-and-manes-theorem/"
pipeline_run: null
---

## Example

Let $X$ be a finite set with the discrete topology. Every ultrafilter on $X$ is principal at a unique point, so the principal-unit map $\eta_X:X\to\beta X$ is a bijection. Its inverse $\xi_X:\beta X\to X$ is the ultrafilter algebra structure and the unique-limit map of the finite discrete space.

For $X=\{0,1\}$, the only ultrafilters are $\eta_X(0)$ and $\eta_X(1)$, and $\xi_X$ returns the corresponding point.

## Facts & Assumptions

**Given:** A finite set $X$ with the discrete topology.

[L1] An ultrafilter contains exactly one of $A$ and $X\setminus A$ for every $A\subseteq X$ ([[thm-ultrafilter-characterisation]]).

[L2] The principal unit is $\eta_X(x)=\{A\subseteq X:x\in A\}$ ([[def-the-ultrafilter-endofunctor-unit-and-multiplication]]).

[L3] The discrete topology is $\mathcal P(X)$ ([[def-standard-topologies]]).

[L4] The ultrafilter endofunctor $\beta$ with principal unit $\eta$ and multiplication $\mu$ is a monad, so $\mu_X\beta(\eta_X)=1_{\beta X}$ ([[thm-the-ultrafilter-monad-is-a-monad]]).

## Verification

**Proof technique:** direct.

1.1 If an ultrafilter on a nonempty finite set contained no singleton, [L1] would put the complement of every singleton into it; their finite intersection is empty, impossible for a filter. Thus it contains some singleton and is principal. [L1, construct]

2.1 It cannot contain two distinct singletons because their intersection is empty, so the principal point is unique. [step 1.1, L1]

3.1 By [L2], $\eta_X$ is therefore a bijection and $\xi_X=\eta_X^{-1}$. In the discrete topology [L3], an ultrafilter converges precisely to the point whose singleton it contains, so $\xi_X$ is the unique-limit map. [step 2.1, L2, L3]

4.1 The equation $\xi_X\eta_X=1_X$ is immediate. Since $\eta_X$ is bijective by step 3.1, $\beta(\eta_X)$ is bijective with inverse $\beta(\xi_X)$. The monad unit law in [L4] says $\mu_X\beta(\eta_X)=1_{\beta X}$, so uniqueness of the inverse gives $\mu_X=\beta(\xi_X)$. Composing with $\xi_X$ yields $\xi_X\mu_X=\xi_X\beta(\xi_X)$, and $\xi_X$ is an algebra. [step 3.1, L4, algebra]

5.1 If $X=\varnothing$, no ultrafilter exists, so $\beta X=\varnothing$ and the unique empty map is an algebra. For $X=\{0,1\}$, steps 1.1 and 2.1 give exactly $\eta_X(0),\eta_X(1)$ and step 3.1 gives their displayed values. [step 1.1, step 4.1, construct] ∎
