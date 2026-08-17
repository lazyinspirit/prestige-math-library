---
id: ex-the-ultrafilter-monad-on-a-finite-set
kind: example
title: "On finite sets the ultrafilter monad is naturally isomorphic to the identity; assuming the ultrafilter lemma, its unit is not invertible on the natural numbers"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "The empty finite set and the choice principle behind a nonprincipal ultrafilter on the natural numbers are easy to conflate with the nonempty finite proof."
  counterexample_search: "Checked the empty carrier separately, proved the finite identification from singleton partitions, and reopened the published conditional nonprincipal-ultrafilter refutation; the infinite contrast is asserted only under the ultrafilter lemma."
deps: [def-the-ultrafilter-endofunctor-unit-and-multiplication, thm-the-ultrafilter-monad-is-a-monad, lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural, lem-ultrafilter-prime, def-ultrafilter, def-filter, def-finite-cardinality, thm-ultrafilter-lemma, fs-every-ultrafilter-principal]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

On the full subcategory of finite sets, the principal-unit map $\eta_X:X\to\beta X$ is a natural isomorphism, so the ultrafilter monad restricts to the identity monad up to natural isomorphism. Assuming the ultrafilter lemma, this fails on $\mathbb N$.

## Facts & Assumptions

**Given:** The ultrafilter monad $(\beta,\eta,\mu)$ of [[def-the-ultrafilter-endofunctor-unit-and-multiplication]] and, for the infinite comparison only, the ultrafilter lemma.

[L1] An ultrafilter containing a finite union contains one of its members ([[lem-ultrafilter-prime]]).

[L2] The principal map $\eta_X$ is natural, and the flattening map is the multiplication of the ultrafilter monad ([[lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural]]; [[thm-the-ultrafilter-monad-is-a-monad]]).

[L3] Assuming the Axiom of Choice, every filter on a set is contained in an ultrafilter on that set ([[thm-ultrafilter-lemma]]); a nonprincipal ultrafilter on $\mathbb N$ then exists ([[fs-every-ultrafilter-principal]]).

[L4] A filter contains the whole carrier, excludes the empty set, is upward closed, and is closed under finite intersections ([[def-filter]]).

[L5] A finite set is equinumerous with a natural number ([[def-finite-cardinality]]), and an ultrafilter is in particular a proper filter ([[def-ultrafilter]]).

## Verification

**Proof technique:** direct.

1.1 If $X$ is nonempty and finite, [L5] makes its singleton partition finite, and its union $X$ belongs to every ultrafilter. Repeated use of [L1] selects a singleton $\{x\}$, and no distinct singleton can also belong because their intersection is empty. [L1, L4, L5]

2.1 Upward closure now shows that the ultrafilter consists exactly of the subsets containing $x$, namely $\eta_X(x)$. Thus $\eta_X$ is bijective for nonempty finite $X$. If $X=\varnothing$, no proper filter exists because the whole carrier is also empty, so $\beta X=\varnothing$ and $\eta_X$ is again bijective. [L2, L4, step 1.1]

3.1 Naturality in [L2] makes these bijections a natural isomorphism on finite sets. Under the identification, $\eta_X$ is the identity and $\mu_X$ sends the principal ultrafilter at $\eta_X(x)$ to $\eta_X(x)$, so the restricted monad is naturally isomorphic to the identity monad. [L2, step 2.1]

4.1 Assuming [L3], let $\mathcal U$ be the nonprincipal ultrafilter on $\mathbb N$ supplied there. Every value of $\eta_{\mathbb N}$ is principal, so $\mathcal U$ is outside its image and that unit component is not invertible. [L2, L3, step 3.1] ∎
