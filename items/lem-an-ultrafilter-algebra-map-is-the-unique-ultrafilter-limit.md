---
id: lem-an-ultrafilter-algebra-map-is-the-unique-ultrafilter-limit
kind: lemma
title: "Under the ultrafilter lemma, an ultrafilter algebra maps each ultrafilter to its unique limit"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-closure-in-an-ultrafilter-algebra-topology, def-filter-convergence-and-cluster-point, def-topology-induced-by-an-ultrafilter-algebra, thm-ultrafilter-characterisation, def-the-ultrafilter-endofunctor-unit-and-multiplication, def-ultrafilter-extension-principle]
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
    - title: "J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem, Lemmas B and C"
      url: "https://topology.lmf.cnrs.fr/algebras-of-the-filter-related-monads-i-ultrafilters-and-manes-theorem/"
pipeline_run: null
---

## Statement

Assume UL/BPI. For an ultrafilter algebra $\xi:\beta X\to X$ with its induced topology, every ultrafilter $\mathcal U$ converges to exactly one point, namely $\xi(\mathcal U)$.

## Facts & Assumptions

**Given:** UL/BPI, an ultrafilter algebra $\xi:\beta X\to X$, and an ultrafilter $\mathcal U$ on $X$.

[L1] In the induced topology, the closure of $A$ is $\xi[\widehat A]$ ([[lem-closure-in-an-ultrafilter-algebra-topology]]).

[L2] A filter converges to $p$ when every neighbourhood of $p$ belongs to the filter ([[def-filter-convergence-and-cluster-point]]).

[L3] The ultrafilter extension principle says that every filter on a set is contained in an ultrafilter on that set ([[def-ultrafilter-extension-principle]]).

## Proof

**Proof technique:** direct.

1.1 If an induced-open neighbourhood $O$ contains $\xi(\mathcal U)$, the definition of induced-open gives $O\in\mathcal U$. Thus $\mathcal U$ converges to $\xi(\mathcal U)$ by [L2]. [given, L2]

1.2 Let $x$ be any limit of $\mathcal U$. For each $A\in\mathcal U$, every neighbourhood of $x$ meets $A$, so $x\in\overline A=\xi[\widehat A]$ by [L1]. [L1, L2]

2.1 On $\beta X$, the family $\{\widehat A:A\in\mathcal U\}\cup\{\xi^{-1}[\{x\}]\}$ has the finite-intersection property by step 1.2. Extend it by [L3] to an ultrafilter $\mathbb W$ on $\beta X$. [step 1.2, L3, choose]

3.1 The inclusions forced by step 2.1 and maximality give $\mu_X(\mathbb W)=\mathcal U$ and $\beta(\xi)(\mathbb W)=\eta_X(x)$. The algebra laws therefore give $\xi(\mathcal U)=\xi\mu_X(\mathbb W)=\xi\beta(\xi)(\mathbb W)=\xi\eta_X(x)=x$. [step 2.1, algebra]

4.1 Step 1.1 supplies the limit $\xi(\mathcal U)$ and step 3.1 identifies every other limit with it, proving existence and uniqueness. If $X=\varnothing$, no ultrafilter exists and the assertion is vacuous. [step 1.1, step 3.1] ∎
