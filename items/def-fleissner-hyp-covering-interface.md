---
id: def-fleissner-hyp-covering-interface
kind: definition
title: "Fleissner's HYP covering interface"
status: draft
origin: pipeline
deps: [def-moore-spaces-and-developments, def-axiom-of-choice, def-cardinal, def-aleph-and-beth-hierarchies]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "William G. Fleissner, If all normal Moore spaces are metrizable, then there is an inner model with a measurable cardinal"
      url: "https://kuscholarworks.ku.edu/server/api/core/bitstreams/88062b98-5ab8-4fdc-9548-9e00a9c7507d/content"
      locator: "Definition of HYP, clauses (1a)-(3b), and Lemma 1, printed pp. 366-367"
---

## Definition

Work in $\mathrm{ZFC}$. **HYP** is the assertion that there exist an infinite
cardinal $\kappa$, an increasing sequence of cardinals $(\kappa_n)_{n \in \omega}$
cofinal in $\kappa$, and a set $E$ such that

$$(1\mathrm{a})\ \sup_n \kappa_n = \kappa; \qquad (1\mathrm{b})\ 2^{\kappa_n} < \kappa \text{ for every } n; \qquad (2)\ 2^\kappa = \kappa^+;$$
$$(3\mathrm{a})\ E \subseteq \{\, \delta < \kappa^+ : \operatorname{cf}(\delta) = \omega \,\} \text{ and } E \text{ is stationary in } \kappa^+; \qquad (3\mathrm{b})\ E \cap \beta \text{ is not stationary in } \beta \text{ for every } \beta < \kappa^+.$$

Clause $(1\mathrm{b})$ together with $(1\mathrm{a})$ says that $\kappa$ is a
strong limit cardinal of countable cofinality; $(2)$ is the $\kappa$-continuum
hypothesis; $(3\mathrm{a})$ and $(3\mathrm{b})$ say that $E$ is a nonreflecting
stationary subset of the ordinals below $\kappa^+$ of countable cofinality
([[def-cardinal]], [[def-aleph-and-beth-hierarchies]]).

**Ladders.** In a structure satisfying HYP fix, for each $\delta \in E$, an
increasing sequence $(\delta_i)_{i \in \omega}$ of nonlimit ordinals cofinal in
$\delta$. Such a family exists by the axiom of choice and the definition of
cofinality ([[def-axiom-of-choice]]); nothing below depends on which ladders are
chosen beyond the two properties just named.

## Remarks

- **HYP is met at $\kappa = \omega$ by the continuum hypothesis.** If
  $\mathrm{CH}$ holds, take $\kappa := \omega$, $\kappa_n := n$, and
  $E := \{\, \delta < \omega_1 : \delta \text{ is a limit ordinal} \,\}$; then
  $(1\mathrm{a})$, $(1\mathrm{b})$ hold trivially and $(2)$ is
  $\mathrm{CH}$, while $(3)$ is proved on the companion $\mathrm{CH}$ item.

- **The separation function is not recorded here.** Fleissner's Lemma 1 derives,
  from $(3\mathrm{b})$ and the ladders, a function $m_\beta$ separating distinct
  ladders below $\beta$; that derivation is proved locally in
  [[lem-ladder-separation-from-hyp]], and nothing in this definition asserts it.

- **The large-cardinal reading is an input, not a consequence.** That HYP is
  implied by the nonexistence of an inner model with a measurable cardinal is a
  theorem about the Dodd-Jensen core model, recorded in
  [[thm-dodd-jensen-covering-supplies-fleissner-hyp-data]] and not folded into
  this definition.
