---
id: rem-routes-to-the-catalan-count
kind: remark
title: "Why the Catalan count is proved three times, and how the three statements agree"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-catalan-numbers-by-reflection, thm-catalan-numbers-by-the-cycle-lemma, thm-catalan-numbers-from-the-generating-function, cor-catalan-closed-formula]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics'
      url: "https://arxiv.org/pdf/1503.05930"
    - title: "N. Dershowitz and S. Zaks, The Cycle Lemma and Some Applications"
      url: "https://weizmann.elsevierpure.com/en/publications/the-cycle-lemma-and-some-applications"
pipeline_run: null
---

## Remarks

The reflection route of [[thm-catalan-numbers-by-reflection]] spends only a
path-set bijection: the work is in the first visit to the level $-1$, and the
final count is the path difference absorbed into [[cor-catalan-closed-formula]].

The cycle-lemma route of [[thm-catalan-numbers-by-the-cycle-lemma]] spends a
free cyclic action and trivial stabilisers. Its conclusion is the cleared count
$(2n+1)C_n=\binom{2n+1}{n}$, and the last step of that theorem identifies this
with the closed form of [[cor-catalan-closed-formula]] rather than treating it as
a new sequence.

The formal-power-series route of [[thm-catalan-numbers-from-the-generating-function]]
spends algebra in $\mathbb{Q}\llbracket x\rrbracket$: the recurrence becomes the
quadratic equation for $C(x)$, the closed form comes from
[[thm-catalan-generating-function-closed-form]], and coefficient extraction
returns the same closed formula again. So the three arguments disagree only in
their hypotheses and intermediate objects, not in the count they deliver.
