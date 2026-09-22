---
id: def-fleissner-hyp-covering-interface
kind: definition
title: "Fleissner's HYP covering interface"
status: draft
origin: pipeline
deps: [def-moore-spaces-and-developments, def-axiom-of-choice, def-cardinal, def-aleph-and-beth-hierarchies, def-cofinality, lem-cofinality-is-well-defined, def-club-subsets-of-ordinals, def-club-filter-and-nonstationary-ideal, def-cofinality-strata-and-stationary-trace]
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

Work in $\mathrm{ZFC}$ ([[def-axiom-of-choice]]). **HYP** is the assertion that there exist an infinite
cardinal $\kappa$, an increasing sequence of cardinals $(\kappa_n)_{n \in \omega}$
cofinal in $\kappa$, and a set $E$ such that

$$(1\mathrm{a})\ \sup_n \kappa_n = \kappa; \qquad (1\mathrm{b})\ 2^{\kappa_n} < \kappa \text{ for every } n; \qquad (2)\ 2^\kappa = \kappa^+;$$
$$(3\mathrm{a})\ E \subseteq \{\, \delta < \kappa^+ : \operatorname{cf}(\delta) = \omega \,\} \text{ and } E \text{ is stationary in } \kappa^+; \qquad (3\mathrm{b})\ E \cap \beta \text{ is not stationary in } \beta \text{ for every } \beta < \kappa^+ \text{ with } \operatorname{cf}(\beta)>\omega.$$

Clause $(1\mathrm{b})$ together with $(1\mathrm{a})$ says that $\kappa$ is a
strong limit cardinal of countable cofinality; $(2)$ is the $\kappa$-continuum
hypothesis; $(3\mathrm{a})$ and $(3\mathrm{b})$ say that $E$ is a nonreflecting
stationary subset of the ordinals below $\kappa^+$ of countable cofinality
([[def-cardinal]], [[def-aleph-and-beth-hierarchies]], [[def-cofinality]], [[lem-cofinality-is-well-defined]], [[def-club-subsets-of-ordinals]], [[def-club-filter-and-nonstationary-ideal]], [[def-cofinality-strata-and-stationary-trace]]).

**Ladders.** In a structure satisfying HYP fix, for each $\delta \in E$, an
increasing sequence $(\delta_i)_{i \in \omega}$ of nonlimit ordinals cofinal in
$\delta$. For each $\delta$, [[lem-cofinality-is-well-defined]] gives a strictly
increasing cofinal sequence $c_i<\delta$; replacing $c_i$ by $c_i+1$
gives successor ordinals still strictly below the limit $\delta$, strictly
increasing and cofinal. The axiom of choice then fixes one such sequence for
every $\delta\in E$ ([[def-axiom-of-choice]]); nothing below depends on which ladders are
chosen beyond the two properties just named.

## Remarks

- **The CH case.** Under $\mathrm{CH}$, take $\kappa=\omega$,
  $\kappa_n=n$ and $E$ the nonzero limit ordinals below $\omega_1$.
  The finite cardinals have supremum $\omega$ and $2^n<\omega$, while CH
  gives $2^\omega=\omega_1$. The set $E$ is stationary: given any club
  $C\subseteq\omega_1$, choose a strictly increasing sequence from $C$.
  Its supremum is a countable nonzero limit ordinal, belongs to $C$ by
  closure, and belongs to $E$. Every nonzero limit $\beta<\omega_1$ has
  cofinality $\omega$, so the successor-sequence club described above
  avoids $E\cap\beta$. In particular, both
  $\{\omega n:1\le n<\omega\}$ and
  $\{\omega n+1:n<\omega\}$ are clubs in $\omega^2$ and are disjoint.
  Containing a club at an ordinal of countable cofinality therefore does not
  imply meeting every club. This is precisely Fleissner's CH instance on
  printed p.367; ladder separation may also be proved directly in that case.

- **The separation function is not recorded here.** Fleissner's Lemma 1 derives,
  from $(3\mathrm{b})$ and the ladders, a function $m_\beta$ separating distinct
  ladders below $\beta$; that derivation is proved locally in
  [[lem-ladder-separation-from-hyp]], and nothing in this definition asserts it.

- **The large-cardinal reading is an input, not a consequence.** That HYP is
  implied by the nonexistence of an inner model with a measurable cardinal is a
  theorem about the Dodd-Jensen core model, recorded in
  [[thm-dodd-jensen-covering-supplies-fleissner-hyp-data]] and not folded into
  this definition.
