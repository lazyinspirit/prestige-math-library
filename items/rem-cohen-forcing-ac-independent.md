---
id: rem-cohen-forcing-ac-independent
kind: remark
title: "Cohen 1963: ZF does not prove the Axiom of Choice"
status: published
origin: session
proved_here: false
deps: [rem-godel-constructible-universe]
justified_by: []
forward_refs: [def-axiom-of-choice, cor-ac-iff-zorn, fs-zorn-provable-in-zf, fs-every-set-well-orderable-in-zf, rem-choice-ledger]
aliases: []
landmark: true
short: "Con(ZF) implies Con(ZF + not AC), by forcing"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "P. J. Cohen, The independence of the continuum hypothesis, Proc. Nat. Acad. Sci. USA 50 (1963), 1143-1148"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC221287/"
    - title: "P. J. Cohen, The independence of the continuum hypothesis II, Proc. Nat. Acad. Sci. USA 51 (1964), 105-110"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC300611/"
    - title: "Forcing (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Forcing_(mathematics)"
pipeline_run: null
---

## Statement

**If ZF is consistent, then ZF + (not AC) is consistent.** Equivalently: **if ZF
is consistent, then ZF does not prove the Axiom of Choice.**

Cohen (1963, 1964) proves this by inventing **forcing**. Starting from a
countable transitive model $M$ of ZF, one adjoins a generic object, here a set of
"Cohen reals" indexed by $\mathbb{N}$, and then passes to the **symmetric
submodel** of the resulting extension: the sets kept are those whose names are
invariant under a large group of permutations of the indices, in the sense of a
fixed normal filter of subgroups. The symmetric model satisfies every axiom of
ZF, and it contains the set $A$ of adjoined reals as a set with no well-ordering.
In particular no choice function exists for the family of nonempty subsets of
$A$, so AC fails there.

Together with [[rem-godel-constructible-universe]] this makes the Axiom of Choice
**independent of ZF**, again relative to the consistency of ZF: neither AC nor
its negation is a theorem of ZF, unless ZF is inconsistent, in which case it
proves everything.

## Remarks

- **Not proved in this library.** Neither forcing nor the symmetric-model
  construction is developed here. The description above fixes what the statement
  says; it is not a proof and is not a sketch that could be completed with the
  material in this library.

- **What would prove it.** A forcing track: partial orders and dense sets,
  Boolean-valued models or names and the forcing relation, genericity and the
  truth lemma, then symmetric extensions and normal filters of subgroups. A
  second, older route reaches the same conclusion for ZF with atoms
  (Fraenkel-Mostowski permutation models) and transfers it to ZF by the
  Jech-Sochor embedding theorem. Neither route is in this library.

- **Why it matters here.** This is the result that
  [[fs-zorn-provable-in-zf]] and [[fs-every-set-well-orderable-in-zf]] quote when
  they refuse to accept Zorn's lemma or the well-ordering theorem as theorems of
  ZF: both are equivalent to the Axiom of Choice over ZF ([[cor-ac-iff-zorn]]),
  so a ZF proof of either would be a ZF proof of [[def-axiom-of-choice]]. It is
  also one of the two external facts recorded in [[rem-choice-ledger]].

- **Conditional discipline.** "ZF does not prove AC" always abbreviates the
  implication above. Nothing in this library asserts the unconditional form,
  which is not available: by Gödel's second incompleteness theorem the
  consistency of ZF cannot be proved in ZF.
