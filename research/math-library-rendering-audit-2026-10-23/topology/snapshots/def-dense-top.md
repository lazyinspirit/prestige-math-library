---
id: def-dense-top
kind: definition
title: "Dense, nowhere dense and codense subsets of a topological space, and the criterion by basic open sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interior-closure-boundary-top, thm-closure-characterisation-top, def-topology-basis-subbasis]
justified_by: []
forward_refs: [def-separable-space]
aliases: [def-nowhere-dense-top, def-codense-top]
landmark: false
short: "dense, nowhere dense, codense"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Nowhere dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nowhere_dense_set"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) and let $A \subseteq X$. Interior
and closure are as in [[def-interior-closure-boundary-top]].

- $A$ is **dense** in $X$ if $\overline{A} = X$.
- $A$ is **codense** in $X$ if $X \setminus A$ is dense.
- $A$ is **nowhere dense** in $X$ if $\operatorname{int}(\overline{A}) = \varnothing$.

**Three equivalent forms of density, and the one used in practice.** The
following are equivalent:

1. $\overline{A} = X$;
2. $U \cap A \ne \varnothing$ for every nonempty open $U \subseteq X$;
3. $B \cap A \ne \varnothing$ for every nonempty $B \in \mathcal{B}$.

*Proof.* (1) $\Rightarrow$ (2): if $U$ is open and nonempty, pick $x \in U$; then
$x \in \overline{A}$, so $U \cap A \ne \varnothing$ by clause (c) of
[[thm-closure-characterisation-top]]. (2) $\Rightarrow$ (3): a nonempty member of
$\mathcal{B}$ is a nonempty open set. (3) $\Rightarrow$ (1): let $x \in X$; every
$B \in \mathcal{B}$ with $x \in B$ is nonempty and so meets $A$, hence
$x \in \overline{A}$ by clause (d) of [[thm-closure-characterisation-top]]. Form
3 is what makes density checkable: for the Sorgenfrey line it is a statement
about half-open intervals, and for a metric space a statement about balls.

**Codensity is emptiness of the interior.** $A$ is codense if and only if
$\operatorname{int}(A) = \varnothing$, because
$X \setminus \operatorname{int}(A) = \overline{X \setminus A}$
([[def-interior-closure-boundary-top]]), so $\overline{X \setminus A} = X$ holds
exactly when $\operatorname{int}(A) = \varnothing$.

**Nowhere dense implies codense, and the converse fails.** If
$\operatorname{int}(\overline{A}) = \varnothing$ then
$\operatorname{int}(A) \subseteq \operatorname{int}(\overline{A}) = \varnothing$
by monotonicity of the interior, so $A$ is codense. The two notions can differ
only on sets whose closure is larger than themselves, and there they sometimes
do: a dense set with empty interior, such as the rationals inside the real line,
is codense and is not nowhere dense, its closure being everything. They may also
agree on such a set: $(0,1)$ inside $\mathbb{R}$ has closure $[0,1]$ and is
neither codense nor nowhere dense. A *closed* set is nowhere dense
precisely when it is codense, since then $\overline{A} = A$.

## Remarks

- **Density is a property of the pair, not of the set.** A subset dense in $X$
  need not be dense in a space with a finer topology. In a nonempty indiscrete
  space every nonempty subset is dense, while $\varnothing$ is not; in the empty
  space $\varnothing$ is dense as well. Where a density claim is made below the
  topology is always named.

- **The empty set.** $\varnothing$ is nowhere dense and codense in every space,
  and it is dense only in $X = \varnothing$. $X$ itself is dense in $X$ and is
  nowhere dense only when $X = \varnothing$.

- **What is deliberately not defined here.** Separability, meaning the existence
  of an at most countable dense subset, is a countability axiom not developed at
  this point in the reading order; it is defined later in
  [[def-separable-space]]. Where a space on the companion page has an at most
  countable dense subset, that is what is said in full.
