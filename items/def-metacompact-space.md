---
id: def-metacompact-space
kind: definition
title: "Metacompactness: every open cover has a point-finite open refinement"
status: draft
origin: pipeline
deps: [def-cover-refinement-and-local-finiteness, def-topological-space]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "C. Good, I. J. Tree, and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://web.mat.bham.ac.uk/C.Good/research/pdfs/stone.pdf"
      locator: "Definitions of refinement and effective metacompactness, printed pp. 8-9"
---

## Definition

A topological space $X$ ([[def-topological-space]]) is **metacompact** when every
open cover of $X$ has a point-finite open refinement: for every open cover
$\mathcal{U}$ of $X$ there is a family $\mathcal{V}$ of open sets such that
$\mathcal{V}$ covers $X$, every $V \in \mathcal{V}$ is contained in some
$U \in \mathcal{U}$, and every point of $X$ belongs to only finitely many members
of $\mathcal{V}$ ([[def-cover-refinement-and-local-finiteness]]).

**Point-finiteness is the only new component.** Refinement and covering are those
of [[def-cover-refinement-and-local-finiteness]]; metacompactness weakens
paracompactness ([[def-paracompact-space]]) by asking the refining family to be
point-finite rather than locally finite. Local finiteness implies point
finiteness, so every paracompact space is metacompact, and no separation axiom is
built into the word.

## Remarks

- **Why this item exists on this page.** The ZF countermodel of Stone's theorem
  on this page produces a metrizable space with an open cover that has no
  point-finite open refining cover; that is the precise failure, and it is what
  the relative-consistency theorem and the open-status remark state. (The empty
  family is a point-finite refinement in the bare containment sense, but it does
  not cover a nonempty space.) The word
  *metacompact* is used only as an abbreviation for that covering property.

- **Effectivity is a separate strengthening.** A refinement is called *effective*
  when it comes equipped with a refinement map $a : \mathcal{V} \to \mathcal{U}$
  satisfying $V \subseteq a(V)$; the strengthening that every open cover of every
  discrete metric space has an effective point-finite open refinement is
  equivalent to the Axiom of Choice and is treated as its own theorem below, not
  as part of this definition.
