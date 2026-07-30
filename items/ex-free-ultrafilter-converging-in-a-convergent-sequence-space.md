---
id: ex-free-ultrafilter-converging-in-a-convergent-sequence-space
kind: example
title: "Assuming the ultrafilter lemma, a free ultrafilter on $\\mathbb{N}$ converges to the added point in the one-point convergent-sequence space"
status: published
origin: session
deps: [def-filter, def-filter-convergence-and-cluster-point, thm-ultrafilter-lemma, def-tail-filter-of-a-net, def-ultrafilter, thm-ultrafilter-characterisation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Ultrafilter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_(set_theory)"
pipeline_run: null
---

## Example

**Assume the ultrafilter lemma.** Let $X=\mathbb N\cup\{\infty\}$, make every natural isolated, and give $\infty$ the neighbourhood base $U_N=\{\infty\}\cup\{n:n\ge N\}$. A free ultrafilter on $\mathbb N$, extended along the inclusion $\mathbb N\hookrightarrow X$, converges to $\infty$.

## Facts & Assumptions

**Given:** The identity net $n\mapsto n$ on the directed natural numbers.

[L1] Its tail filter contains every tail $T_N=\{n:n\ge N\}$ ([[def-tail-filter-of-a-net]]).

[L2] The ultrafilter lemma extends that filter to an ultrafilter ([[thm-ultrafilter-lemma]]).

[L3] A filter contains its whole set, omits the empty set, and is closed under intersections and supersets ([[def-filter]]).

[L4] A filter converges to a point exactly when it contains every neighbourhood of that point ([[def-filter-convergence-and-cluster-point]]).

[L5] A filter is an ultrafilter exactly when for every subset it contains that subset or its complement ([[def-ultrafilter]], [[thm-ultrafilter-characterisation]]).


## Verification

**Proof technique:** direct.

1.1 Choose an ultrafilter $\mathcal U$ extending the tail filter. It contains every $T_N$ and contains no singleton, since $\{k\}\cap T_{k+1}=\varnothing$; thus it is free. [L1, L2]

2.1 Put $\mathcal U^X=\{B\subseteq X:B\cap\mathbb N\in\mathcal U\}$. The filter axioms transfer through intersection with $\mathbb N$, so this is a filter on $X$. For every $B\subseteq X$, [L5] applied to $B\cap\mathbb N$ shows that $\mathcal U^X$ contains $B$ or $X\setminus B$; hence $\mathcal U^X$ is an ultrafilter. [step 1.1, L3, L5]

3.1 Every basic neighbourhood $U_N$ has $U_N\cap\mathbb N=T_N\in\mathcal U$, hence $U_N\in\mathcal U^X$. Every neighbourhood of $\infty$ contains some $U_N$, so upward closure gives $\mathcal U^X\to\infty$. [step 2.1, L4]

4.1 It is free: if $\{x\}\in\mathcal U^X$, then either $x=\infty$ and its intersection with $\mathbb N$ is empty, or $x\in\mathbb N$ and $\{x\}\in\mathcal U$, both impossible. Thus this supplies the claimed free ultrafilter and its convergence. [step 1.1, step 2.1, step 3.1, L3] ∎
