---
id: rem-cohen-first-model
kind: remark
title: "Cohen's first model: an infinite Dedekind-finite set of reals"
status: draft
origin: session
proved_here: false
deps: [rem-cohen-forcing-ac-independent]
justified_by: []
forward_refs: [fs-infinite-has-countable-subset-in-zf, def-countable-choice, def-countable]
aliases: []
landmark: false
short: "infinite but with no countably infinite subset"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. J. Cohen, The independence of the continuum hypothesis, Proc. Nat. Acad. Sci. USA 50 (1963), 1143-1148"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC221287/"
    - title: "T. Jech, The Axiom of Choice, North-Holland (1973), Chapter 5"
      url: "https://archive.org/details/axiomofchoice0000jech"
    - title: "Dedekind-infinite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dedekind-infinite_set"
pipeline_run: null
---

## Statement

**If ZF is consistent, then ZF is consistent with the existence of a set
$A \subseteq \mathbb{R}$ that is infinite and Dedekind-finite**: $A$ is not
equinumerous with any natural number, yet $A$ has no countably infinite subset,
equivalently $A$ is not equinumerous with any proper subset of itself.

This is the model Cohen produced first, in 1963. Adjoin a countable family
$(a_n)_{n \in \mathbb{N}}$ of mutually generic Cohen reals to a countable
transitive model of ZFC, and pass to the symmetric submodel determined by finite
supports and the full permutation group of the indices. In that submodel the
**set** $A = \{a_n : n \in \mathbb{N}\}$ exists, but the **sequence**
$n \mapsto a_n$ does not: any injection $\mathbb{N} \to A$ would be fixed by only
finitely many of the permutations that the symmetry condition requires. So $A$ is
infinite, and no countably infinite subset of it can be enumerated inside the
model.

## Remarks

- **Not proved in this library.** The symmetric-extension construction is not
  developed here; the description above is a statement of what is built, not a
  construction carried out.

- **What would prove it.** Forcing with finite partial functions
  $\mathrm{Fn}(\mathbb{N} \times \mathbb{N}, 2)$, the automorphism action on
  names, and the finite-support symmetric submodel, together with the standard
  genericity argument showing that no name for an injection
  $\mathbb{N} \to A$ is hereditarily symmetric. That is the same forcing track
  named in [[rem-cohen-forcing-ac-independent]].

- **Why it matters here.** It is the external fact that
  [[fs-infinite-has-countable-subset-in-zf]] quotes. Without it, the natural
  argument "$A$ is infinite, so pick $a_0$, then $a_1$, and so on" looks like a
  ZF proof, and the failure is invisible: what the argument uses is a choice
  principle ([[def-countable-choice]]), and this model is the witness that it
  cannot be removed. It is also the reason this library defines finiteness by
  equinumerosity with a natural number rather than by the Dedekind condition
  ([[def-countable]]): the two definitions part company in ZF.

- **Conditional discipline.** As always, the statement is an implication between
  consistency statements. This library never asserts that an infinite
  Dedekind-finite set exists, only that ZF cannot rule one out unless ZF is
  inconsistent.
