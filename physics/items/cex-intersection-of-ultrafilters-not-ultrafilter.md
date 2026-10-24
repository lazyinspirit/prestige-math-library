---
id: cex-intersection-of-ultrafilters-not-ultrafilter
kind: counterexample
title: "The intersection of the two principal ultrafilters on a two-point set is a filter but not an ultrafilter"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-principal-ultrafilter, def-filter, thm-ultrafilter-characterisation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Ultrafilter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_(set_theory)"
    - title: "Ultrafilter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter"
pipeline_run: null
---

## Statement refuted

The intersection of two ultrafilters on the same set is again an ultrafilter.

On $X=\{0,1\}$, the intersection of the principal ultrafilters at $0$ and $1$
is the one-member filter $\{X\}$, which is not an ultrafilter.

## Facts & Assumptions

**Given:** The set $X=\{0,1\}$ and the principal ultrafilters $\mathcal U_0=\{A\subseteq X:0\in A\}$ and $\mathcal U_1=\{A\subseteq X:1\in A\}$.

[L1] The subsets of $X$ containing $x$ form the principal ultrafilter at $x$ ([[ex-principal-ultrafilter]]).

[F1] A filter contains $X$, omits $\emptyset$, and is closed under pairwise intersection and upward inclusion in $X$ ([[def-filter]]).

[L2] A filter is an ultrafilter exactly when it contains one member of every complementary pair; the two alternatives are always exclusive ([[thm-ultrafilter-characterisation]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], $\mathcal U_0$ and $\mathcal U_1$ are ultrafilters on $X$. [given, L1]

1.2 A subset $A\subseteq X$ lies in $\mathcal U_0\cap\mathcal U_1$ exactly when it contains both $0$ and $1$, which on this two-point set holds exactly when $A=X$. Thus $\mathcal U_0\cap\mathcal U_1=\{X\}$. [given]

1.3 The family $\{X\}$ is a filter: it contains $X$, omits $\emptyset$, its only pairwise intersection is $X$, and its only superset inside $X$ is $X$. [F1]

2.1 Neither $\{0\}$ nor its complement $\{1\}$ belongs to $\{X\}$, so [L2] shows that this filter is not an ultrafilter. [step 1.3, L2]

3.1 Hence $\mathcal U_0\cap\mathcal U_1$ is a filter but not an ultrafilter, refuting the claim. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
