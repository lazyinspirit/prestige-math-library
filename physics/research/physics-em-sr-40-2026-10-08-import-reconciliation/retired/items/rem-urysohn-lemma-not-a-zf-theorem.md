---
id: rem-urysohn-lemma-not-a-zf-theorem
kind: remark
title: "Urysohn's lemma is not a theorem of ZF, nor of ZF plus countable choice"
status: published
origin: session
proved_here: false
deps: [rem-baire-category-choice-strength]
justified_by: []
forward_refs: [def-countable-choice, rem-choice-ledger]
aliases: []
landmark: true
short: "Läuchli 1962, Tachtsis 2019; DMC suffices, BPI does not"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "H. Läuchli, Auswahlaxiom in der Algebra, Comment. Math. Helv. 37 (1962/63), 1-18"
      url: "https://doi.org/10.1007/BF02566957"
    - title: "E. Tachtsis, The Urysohn Lemma is independent of ZF + Countable Choice, Proc. Amer. Math. Soc. 147 (2019), 4029-4038"
      url: "https://doi.org/10.1090/proc/14590"
    - title: "A. Blass, Injectivity, projectivity, and the axiom of choice, Trans. Amer. Math. Soc. 255 (1979), 31-59"
      url: "https://doi.org/10.1090/S0002-9947-1979-0542870-6"
    - title: "N. Brunner, Geordnete Läuchli Kontinuen, Fund. Math. 117 (1983), 67-73"
      url: "https://doi.org/10.4064/fm-117-1-67-73"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
pipeline_run: null
---

## Statement

**Urysohn's lemma (UL).** If $X$ is a $T_4$ space and $A, B \subseteq X$ are
disjoint closed sets, there is a continuous $f : X \to [0,1]$ with
$A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$.

The following are all relative to the consistency of ZF.

**(a) UL is not a theorem of ZF.** Läuchli (1962/63) builds a permutation model
of ZF with atoms in which the set of atoms is densely linearly ordered, of the
order type of the rationals of the ground model, and in which that set with its
order topology is a $T_4$ space on which **every continuous real-valued function
is constant**; UL fails there. Since the negation of UL is a boundable statement,
the Jech-Sochor first embedding theorem transfers the failure to ZF proper.

**(b) UL is not a theorem of ZF + countable choice.** Tachtsis (2019) produces a
model of ZF in which $\mathrm{AC}_\omega$ holds and UL fails, and hence in which
the Tietze extension theorem fails as well.

**(c) What does suffice.** Dependent choice implies UL by the usual dyadic
construction. Blass (1979) proves the stronger statement that **dependent
multiple choice implies UL**. Whether UL implies DMC is open.

**(d) The Boolean prime ideal theorem does not suffice.** Brunner (1983) shows UL
fails in the Mostowski linearly ordered model, where BPI holds; Pincus's transfer
theorems carry this to ZF.

## Remarks

- **Not proved in this library.** None of (a) to (d) is proved here. Even the
  positive direction, that DC implies UL, is not proved here, because the
  library has no topology track yet at the point where this page sits.

- **What would prove it.** For (a), (b) and (d): permutation models of ZF with
  atoms, plus the Jech-Sochor and Pincus transfer theorems, that is, the same
  track named in [[rem-cohen-forcing-ac-independent]]. For (c): the tree
  combinatorics behind DMC, the same principle that appears in
  [[rem-baire-category-choice-strength]].

- **Why it matters here.** Urysohn's lemma is the workhorse of every separation
  and metrisation argument, and it looks like pure point-set topology. It is not:
  the usual proof indexes a family of open sets by the dyadic rationals and
  chooses one at each stage in terms of the previous stage, which is dependent
  choice. Any page in this library that proves Urysohn's lemma, Tietze extension,
  or a metrisation theorem must therefore record a choice principle in
  [[rem-choice-ledger]], and must not claim the argument is free merely because
  it never mentions a well-ordering. Note that the weakest standard principle,
  [[def-countable-choice]], is provably not enough, by (b).

- **Conditional discipline.** Clauses (a), (b) and (d) are relative to the
  consistency of ZF; clause (c) is an ordinary implication over ZF. Nothing here
  asserts that Urysohn's lemma is false.
