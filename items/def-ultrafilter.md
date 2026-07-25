---
id: def-ultrafilter
kind: definition
title: "Ultrafilter"
status: published
origin: session
deps: [def-filter, def-maximal-element, def-partial-order]
justified_by: []
external_refs: [rem-feferman-no-free-ultrafilter-in-zf, rem-blass-model-without-ultrafilters]
aliases: [def-maximal-filter]
landmark: true
short: "maximal filter"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Ultrafilter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter"
    - title: "Ultrafilter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_(set_theory)"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $\mathrm{Filt}(X)$ be the set of all filters on $X$
([[def-filter]]). Since every filter is a subset of $\mathcal{P}(X)$, the family
$\mathrm{Filt}(X)$ is a subset of $\mathcal{P}(\mathcal{P}(X))$ and is therefore a
set, carved out by Separation. Inclusion is a partial order on it
([[def-partial-order]]): $\subseteq$ is reflexive, antisymmetric by
extensionality, and transitive.

An **ultrafilter on $X$** is a filter on $X$ that is a **maximal element** of
$(\mathrm{Filt}(X), \subseteq)$ ([[def-maximal-element]]): a filter $\mathcal{U}$
on $X$ such that no filter on $X$ strictly contains $\mathcal{U}$, equivalently
such that every filter $\mathcal{G}$ on $X$ with $\mathcal{U} \subseteq
\mathcal{G}$ satisfies $\mathcal{G} = \mathcal{U}$.

An ultrafilter is **principal** if it is of the form
$\{\, A \subseteq X : x \in A \,\}$ for some $x \in X$, and **free**, or
**non-principal**, otherwise.

## Remarks

- **Maximal is not greatest, and here the distinction is not academic.** A
  greatest element of $(\mathrm{Filt}(X), \subseteq)$ would be a filter containing
  every filter, and as soon as $X$ has two distinct points $x \neq y$ no such
  filter exists: it would contain the principal filters at $x$ and at $y$, hence
  both $\{x\}$ and $\{y\}$, hence their intersection $\emptyset$, which
  properness forbids ([[def-filter]]). So on such an $X$ there is no **greatest**
  filter, and reading "maximal" as "greatest" is the error recorded in
  [[fs-maximal-is-greatest]]. Note what that argument does and does not deliver.
  It says nothing whatever about which filters are **maximal**, nor that any is:
  the absence of a greatest element is compatible with there being no maximal
  element at all. What does follow, from maximality itself and not from the
  argument above, is that two distinct ultrafilters are never comparable, since
  $\mathcal{U} \subseteq \mathcal{V}$ with $\mathcal{U}$ maximal forces
  $\mathcal{V} = \mathcal{U}$. How many ultrafilters there are is a separate
  question again, which the argument above does not touch and which this library
  does not answer at all: the ultrafilter lemma gives EXISTENCE (every filter
  extends to an ultrafilter), never a count, and [[thm-ultrafilter-lemma]] says so
  in its own remarks. See the existence bullet below.
- **Maximality is a negative condition**, which is what makes it usable: it says
  nothing can be added, not that everything is already there. The positive
  reformulation, that $\mathcal{U}$ decides every subset by containing either $A$
  or its complement, is [[thm-ultrafilter-characterisation]], and it is the form
  used in practice.
- **Existence is free; extension and freeness are not.** Ultrafilters exist on
  every nonempty set with no choice principle at all: the principal filter at a
  point is one, as the next bullet verifies outright. Two stronger existence
  statements are what cost something. That **every** filter is contained in an
  ultrafilter is [[thm-ultrafilter-lemma]], proved here from Zorn's lemma
  ([[thm-zorn]]); and that some ultrafilter is **free** is what the ultrafilter
  lemma buys, since extending the filter of cofinite subsets of $\mathbb{N}$
  produces a non-principal one. Neither is a theorem of ZF alone: if ZF is
  consistent, ZF does not prove that a free ultrafilter on $\mathbb{N}$ exists
  (Feferman 1965, [[rem-feferman-no-free-ultrafilter-in-zf]]), and hence does not
  prove the ultrafilter lemma either. That external result is recorded, not
  proved, in this library, and the strength the lemma costs is set out in
  [[rem-choice-strengths]]. So on $\mathbb{N}$ the principal ultrafilters are the
  only ones ZF alone can be relied on to produce. The same conclusion for
  **every** set at once does not follow from Feferman's model, which concerns
  $\mathbb{N}$; it is the separate and stronger external result
  [[rem-blass-model-without-ultrafilters]], likewise recorded and not proved
  here. By [[fs-every-ultrafilter-principal]] the principal ultrafilters are
  nevertheless not all of them.
- Principal ultrafilters really are ultrafilters: $\{A \subseteq X : x \in A\}$
  is a filter, and if a filter $\mathcal{G}$ contains it then any $B \in
  \mathcal{G}$ must meet $\{x\}$, since otherwise $B \cap \{x\} = \emptyset$ lies
  in $\mathcal{G}$, so $x \in B$ and $\mathcal{G}$ is contained in the principal
  filter at $x$. This is the one family of examples available without any choice
  principle.
