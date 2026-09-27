---
id: rem-hahn-banach-hamel-basis-open
kind: remark
title: "Hahn-Banach and a Hamel basis for $\\mathbb{R}$: a recorded question"
status: published
origin: session
proved_here: false
verification:
  precheck: n/a
  sources_checked:
    date: 2026-09-26
    scope: "Current question and verified related facts; no current HB-to-basis status claim; research/frontier-35-ten-categories-recorded-source-audit-20260926.md"
    by: "owner-delegated source audit (GPT-6-Sol xhigh)"
deps: []
justified_by: []
forward_refs: [def-axiom-of-choice, thm-zorn]
aliases: []
landmark: false
short: "Recorded question whether Hahn-Banach implies a Hamel basis for R over Q"
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
    - title: "M. Foreman and F. Wehrung, The Hahn-Banach theorem implies the existence of a non-Lebesgue measurable set, Fund. Math. 138 (1991), 13-19"
      url: "https://eudml.org/doc/211870"
    - title: "J. Pawlikowski, The Hahn-Banach theorem implies the Banach-Tarski paradox, Fund. Math. 138 (1991), 21-22"
      url: "https://doi.org/10.4064/fm-138-1-21-22"
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

This item records the question, without asserting its current status. Howard
and Rubin's catalogue is a historical reference for comparing these choice
principles, but the exact catalogue form and current implication status have
not been independently verified here.

## Remarks

**Proof boundary.** The library develops the AC-based analytic
Hahn–Banach theorem, but it does not derive a Hamel basis from HB in ZF or build
a model separating the two. No proved item here depends on the answer.

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
set. The question asks how HB and that particular basis-existence statement
are ordered over ZF. A proof of the implication, or a model of ZF with HB and
without a basis for $\mathbb{R}$ over $\mathbb{Q}$, would settle it.

The nearest recent progress is a separation of the two classical consequences of a
Hamel basis from each other: Larson and Shelah (2026) construct a model of
ZF + DC containing a discontinuous additive endomorphism of $\mathbb{R}$ but no
Hamel basis for $\mathbb{R}$. That does not touch HB, but it shows the two
targets in this and the companion question are genuinely different targets and not
notational variants.

**A note on the reference.** Howard and Rubin's book remains a historical
pointer to the choice-principle comparison. Its form numbering and any claimed
current resolution of this implication require a separate source check.

**Why it matters here.** This library keeps an explicit ledger of what each result
costs in choice, and the ledger is supposed to be exact. This entry is a place
where exactness requires more than the facts checked above: they do not decide
the HB-to-Hamel-basis implication. The library therefore records the comparison
as a question instead of assigning it an unverified answer.
