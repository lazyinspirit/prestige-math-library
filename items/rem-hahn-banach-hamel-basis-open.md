---
id: rem-hahn-banach-hamel-basis-open
kind: remark
title: "Does Hahn-Banach yield a Hamel basis for $\\mathbb{R}$ over $\\mathbb{Q}$? (open)"
status: published
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
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "P. Howard and J. E. Rubin, Consequences of the Axiom of Choice, Mathematical Surveys and Monographs 59, AMS 1998"
      url: "https://www.ams.org/surv/059"
    - title: "P. Larson and S. Shelah, Discontinuous homomorphisms without Hamel bases (arXiv:2606.08384)"
      url: "https://arxiv.org/abs/2606.08384"
    - title: "A. Karagila, Zornian Functional Analysis, or How I Learned to Stop Worrying and Love the Axiom of Choice (arXiv:2010.15632); Theorem 38, Theorem 49 and Corollary 51"
      url: "https://arxiv.org/abs/2010.15632"
    - title: "S. Shelah, Can you take Solovay's inaccessible away?, Israel Journal of Mathematics 48 (1984) 1-47"
      url: "https://link.springer.com/article/10.1007/BF02760522"
    - title: "D. Pincus, The strength of the Hahn-Banach theorem, Victoria Symposium on Nonstandard Analysis, Lecture Notes in Mathematics 369, Springer 1974, 203-248"
      url: "https://link.springer.com/chapter/10.1007/BFb0066014"
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
running through Zorn's lemma ([[thm-zorn]]). In the other direction, **granted
the consistency of ZF**, HB is not a theorem of ZF + DC. The cheapest route to
that, and the one this item relies on, does **not** go through Lebesgue measure.
HB applied to a nonzero element of $\ell^\infty / c_0$ produces a nonzero linear
functional on that space, and from such a functional one gets a set of reals
without the Baire property. Shelah (1984) showed that Solovay's inaccessible can
be dispensed with for the Baire property, so the consistency of ZF alone yields a
model of ZF + DC in which every set of reals has the Baire property; in that
model $(\ell^\infty / c_0)^*$ is trivial, so HB fails there. This is worth
spelling out because the obvious argument is more expensive: HB also implies, in
ZF, the existence of a non-Lebesgue-measurable set (Foreman and Wehrung, 1991)
and indeed the Banach-Tarski paradox (Pawlikowski, 1991), but a model of ZF + DC
in which every set of reals is *measurable* costs an inaccessible cardinal, so
that route would only give the unprovability of HB relative to a large cardinal.

HB is also, granted Con(ZF), strictly weaker than choice: the Boolean prime ideal
theorem implies it outright (Luxemburg, 1969), and BPI does not imply the axiom of
choice (Halpern and Lévy, 1971), so neither does HB. Pincus (1974) proved the
sharper separation that HB does not imply BPI, refuting the prevailing conjecture
of the 1960s. All of these are relative-consistency results and nothing stronger.
A Hamel basis for $\mathbb{R}$ over $\mathbb{Q}$ likewise yields a non-measurable
set. So the two statements sit strictly between ZF and AC, on those cited results
and under the consistency of ZF, and the question is how they are ordered with
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
Howard-Rubin numbering. **These three numbers are unverified.** The Consequences
of the Axiom of Choice project database that hosted the searchable numbering, and
the later mirror of it, both fail to answer as of 2026-07-26, and no other online
source consulted lists the numbering, so they could not be re-checked; the book
remains the reference and the numbers should be treated as a pointer into it
rather than as a verified citation.

**Why it matters here.** This library keeps an explicit ledger of what each result
costs in choice, and the ledger is supposed to be exact. This entry is a place
where exactness is impossible: the cost of one of the most-used theorems in
analysis, measured against one of the most-used pathologies in analysis, is not
known. That is worth stating rather than rounding off to "both need choice".
