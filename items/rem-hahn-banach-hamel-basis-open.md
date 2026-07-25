---
id: rem-hahn-banach-hamel-basis-open
kind: remark
title: "Does Hahn-Banach yield a Hamel basis for $\\mathbb{R}$ over $\\mathbb{Q}$? (open)"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [def-axiom-of-choice, thm-zorn]
aliases: []
landmark: false
short: "Open in ZF: whether Hahn-Banach implies a Hamel basis for R over Q"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. Howard and J. E. Rubin, Consequences of the Axiom of Choice, Mathematical Surveys and Monographs 59, AMS 1998"
      url: "https://www.ams.org/surv/059"
    - title: "P. Larson and S. Shelah, Discontinuous homomorphisms without Hamel bases (arXiv:2606.08384)"
      url: "https://arxiv.org/abs/2606.08384"
    - title: "A. Karagila, Zornian Functional Analysis, or How I Learned to Stop Worrying and Love the Axiom of Choice (arXiv:2010.15632)"
      url: "https://arxiv.org/abs/2010.15632"
    - title: "Hahn-Banach theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn%E2%80%93Banach_theorem"
pipeline_run: null
---

## Statement

Work in ZF, without the axiom of choice. Write **HB** for the Hahn-Banach
theorem: if $p$ is a sublinear functional on a real vector space $X$ and $f$ is a
linear functional on a subspace of $X$ dominated by $p$, then $f$ extends to a
linear functional on all of $X$ still dominated by $p$.

**Question.** Does HB imply that $\mathbb{R}$, as a vector space over
$\mathbb{Q}$, has a basis?

**Status: open.** It is recorded as an open question in Howard and Rubin's
catalogue of consequences of the axiom of choice, as the implication from their
form for Hahn-Banach to their form for a Hamel basis of $\mathbb{R}$ over
$\mathbb{Q}$. No proof of the implication and no model of ZF separating the two is
known.

## Remarks

**Not proved in this library, and not proved anywhere.** This library does not
develop functional analysis and does not build models of ZF, so neither half of
the question is reachable here; both belong to deferred tracks. Nothing on any
page depends on the answer.

**What is known, and what would settle it.** The endpoints are well understood.
Full choice gives a Hamel basis, since "every vector space has a basis" is
equivalent to the axiom of choice ([[def-axiom-of-choice]]), the standard proof
running through Zorn's lemma ([[thm-zorn]]). HB is strictly weaker than choice: it
follows from the Boolean prime ideal theorem (Luxemburg), and it does not imply
the axiom of choice (Pincus). HB is nonetheless not a theorem of ZF, since it
already implies the existence of a set of reals that is not Lebesgue measurable,
and indeed the Banach-Tarski paradox. A Hamel basis for $\mathbb{R}$ over
$\mathbb{Q}$ likewise yields a non-measurable set. So the two statements sit
between ZF and AC, both strictly, and the question is how they are ordered with
respect to each other. Settling it means either deriving a Hamel basis from HB in
ZF, or producing a model of ZF in which HB holds and $\mathbb{R}$ has no basis
over $\mathbb{Q}$.

The nearest recent progress is a separation of the two classical consequences of a
Hamel basis from each other: Larson and Shelah (2026) construct a model of
ZF + DC containing a discontinuous additive endomorphism of $\mathbb{R}$ but no
Hamel basis for $\mathbb{R}$. That does not touch HB, but it shows the two
targets in this and the companion question are genuinely different targets and not
notational variants.

**A note on the reference.** The form numbers used for these questions in the
working notes are $52$ for Hahn-Banach, $367$ for a Hamel basis of $\mathbb{R}$
over $\mathbb{Q}$ and $366$ for a discontinuous additive function, taken from the
Howard-Rubin numbering. The Consequences of the Axiom of Choice project database
that hosted the searchable numbering is no longer served, so the numbers could not
be re-verified online; the book remains the reference.

**Why it matters here.** This library keeps an explicit ledger of what each result
costs in choice, and the ledger is supposed to be exact. This entry is a place
where exactness is impossible: the cost of one of the most-used theorems in
analysis, measured against one of the most-used pathologies in analysis, is not
known. That is worth stating rather than rounding off to "both need choice".
