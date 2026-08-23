---
id: def-topology-induced-by-an-ultrafilter-algebra
kind: definition
title: "The open-set family induced by an ultrafilter algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-t-algebra-and-algebra-homomorphism, def-the-ultrafilter-endofunctor-unit-and-multiplication, thm-the-ultrafilter-monad-is-a-monad, def-topological-space]
justified_by: [lem-the-open-sets-induced-by-an-ultrafilter-algebra-form-a-topology]
aliases: []
landmark: true
verification:
  precheck: n/a
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

## Definition

Let $\xi:\beta X\to X$ be an algebra ([[def-t-algebra-and-algebra-homomorphism]]) for the ultrafilter monad, that is, for the endofunctor $\beta$ with its principal unit and flattening multiplication, which form a monad on $\mathbf{Set}$ by [[thm-the-ultrafilter-monad-is-a-monad]]. A subset $O\subseteq X$ is **$\xi$-open**, or **induced-open**, when

$$\xi(\mathcal U)\in O\quad\Longrightarrow\quad O\in\mathcal U$$

for every ultrafilter $\mathcal U$ on $X$. Write $\tau_\xi$ for the family of all $\xi$-open subsets.

The **topology induced by $\xi$** is $\tau_\xi$. The fact that this family satisfies the topology axioms is proved in [[lem-the-open-sets-induced-by-an-ultrafilter-algebra-form-a-topology]].
