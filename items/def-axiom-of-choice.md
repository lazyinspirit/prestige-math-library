---
id: def-axiom-of-choice
kind: definition
title: "The Axiom of Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-choice-function]
justified_by: []
forward_refs: [ex-russells-socks, rem-choice-strengths, lem-finite-choice,
               rem-choice-ledger]
aliases: [def-ac]
landmark: true
short: "axiom of choice"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
Here $\prod_{i \in I} X_i$ is the set of functions $f$ with domain $I$ such that
$f(i) \in X_i$ for every $i \in I$; when a family of nonempty sets is indexed by
itself, such an $f$ is precisely a choice function for it.

## Remarks

- **This is an axiom, not a theorem.** The results on this page prove
  equivalences and consequences from AC; they do not assume an independence
  theorem in order to define or use it. [[rem-choice-ledger]] records only the
  implications and proof costs established by local results.
- Being an axiom, AC carries no well-definedness obligation, which is why this
  item has no `justified_by`.
- The case of a family listed by a natural number, which is the finite case once
  finiteness is defined, is a theorem of ZF and needs no axiom
  ([[lem-finite-choice]]). AC is exactly the extension of that theorem to
  arbitrary index sets, and the gap between the two is not a matter of degree:
  [[ex-russells-socks]] exhibits the difference concretely.
- "ZFC" abbreviates ZF together with AC. A result that invokes AC should say so
  where it is stated, so that a reader can tell which theorems are choice-free;
  that bookkeeping is the purpose of [[rem-choice-ledger]].
  [[rem-choice-strengths]] records the narrower, locally proved upper bound for
  the ultrafilter lemma. Its exact reverse implications wait for the later
  Boolean-algebra and symmetric-model development.
