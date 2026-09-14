---
id: def-countable-model-generic-master-condition-and-proper-poset
kind: definition
title: "Master conditions and proper posets"
status: draft
origin: pipeline
deps: [def-dense-open-sets-and-model-generic-filters, thm-countable-elementary-submodels-and-transitive-collapses, def-hereditary-size-and-h-kappa, def-club-filter-and-nonstationary-ideal]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Definition 8.1"
      url: https://karagila.org/files/Forcing-2023.pdf
    - title: "Cummings, Iterated Forcing and Elementary Embeddings, Definition 24.1"
      url: https://www.math.cmu.edu/users/jcumming/papers/repaper_finished_june_2008.pdf
---

## Definition

Let $P$ be a nonempty preorder, let $\theta$ be a regular cardinal with
$P\in H_\theta$, and let $M$ be a countable elementary submodel of a
structure $(H_\theta,\in,<_{\theta},P,\ldots)$ containing all displayed
parameters, where $<_{\theta}$ is a fixed well-order of $H_\theta$.
A condition $q\in P$ is **$(M,P)$-generic** if, for every dense
$D\subseteq P$ with $D\in M$, the set $D\cap M$ is predense below $q$.
Spelled out in the stronger-is-smaller convention, this means

$$\forall r\leq q\;\exists s\in D\cap M\text{ such that }r\text{ and }s\text{ are compatible in }P.$$

For $p\in P\cap M$, an **$(M,P)$-master condition below $p$** is an
$(M,P)$-generic $q$ satisfying $q\leq p$. Neither genericity nor mastery
requires $q\in M$, and genericity does not require $q$ itself to belong to
every dense set.

The preorder $P$ is **proper** in the master-condition formulation if, for
every sufficiently large regular $\theta$, every such countable elementary
$M$, and every $p\in P\cap M$, there is an $(M,P)$-master condition below
$p$. Here
“sufficiently large” means that some regular $\theta_0$ works for every
regular $\theta\geq\theta_0$. Adding the well-order makes the Skolem-closure
convention explicit. The equivalent club-of-models and
generic-extension formulations are assertions, not definitions, and are
proved in the next item.

This item only fixes predicates and quantifiers, so it makes no selection and
uses no instance of Choice. Existence of the countable elementary models and
of master conditions is invoked only by later theorems under their declared
axiom bases.
