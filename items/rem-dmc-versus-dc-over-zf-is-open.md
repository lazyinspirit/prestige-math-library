---
id: rem-dmc-versus-dc-over-zf-is-open
kind: remark
title: "DMC versus DC over ZF remains open"
status: published
origin: pipeline
deps: [def-dependent-multiple-choice-finite-level-tree, thm-dependent-choice-and-finite-multiple-selections, def-dependent-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Marianne Morillon, Axiom of Choice"
      url: "https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf"
      locator: "§2.1, Question 1, p. 6"
    - title: "J. Dodu and M. Morillon, The Hahn-Banach Property and the Axiom of Choice"
      url: "https://lim.univ-reunion.fr/staff/mar/dodu.pdf"
      locator: "§7, printed p. 10"
verification:
  audited: 2026-09-22
---

## Statement

Over $\mathrm{ZF}$: DC implies DMC. Strictness is known in $\mathrm{ZFA}$, but
whether DMC implies DC in $\mathrm{ZF}$ is open; no strictness over
$\mathrm{ZF}$ is asserted.

## Remarks

- **The implication.** DC implies DMC over $\mathrm{ZF}$ by
  [[thm-dependent-choice-and-finite-multiple-selections]], which records the
  equivalence $\mathrm{DC} \leftrightarrow
  (\mathrm{DMC} \wedge \mathrm{AC}_{\omega,\mathrm{fin}})$ and hence gives the
  direction used here. The principles are those of
  [[def-dependent-choice]] and [[def-dependent-multiple-choice-finite-level-tree]];
  the finite-selection form is the one in which the implication is stated, so no
  conversion between the tree and menu presentations is needed.

- **The $\mathrm{ZFA}$ strictness.** Dodu and Morillon record that Fraenkel's
  second model of $\mathrm{ZFA}$ satisfies DMC but does not satisfy DC. Thus the
  model has a DMC menu system for every serial relation while some serial
  relation has no infinite dependent-choice chain. This is the direction needed
  to show that DMC does not imply DC in $\mathrm{ZFA}$. It is not a statement
  about $\mathrm{ZF}$, and no such statement is made here.

- **The open question.** Morillon poses the reversal over $\mathrm{ZF}$ as an
  open question in the same section that records the tree form of DMC. This item
  reports that status and nothing more: absence of a published proof of
  $\mathrm{DMC} \Rightarrow \mathrm{DC}$ in $\mathrm{ZF}$ is not converted into a
  nonimplication theorem, and the separately proved independence results of this
  page, which refute Urysohn's lemma under principles that do not imply DMC, do
  not decide the reversal either.

- **Why the qualification matters for consumers.** The published Baire-category
  ledger on the deferred catalogue asserts strictness of DMC below DC and below
  multiple choice in $\mathrm{ZF}$ and $\mathrm{ZFA}$ alike. That stronger
  wording is not a theorem here: the results proved on this page give the
  implication and the $\mathrm{ZFA}$ separation, and consumers of this item must
  keep the two theories apart.
