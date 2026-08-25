---
id: rem-orientation-and-notation-conventions-for-ends-coends-and-twisted-arrows
kind: remark
title: "Orientation and notation conventions in force on this page"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-end-and-coend, def-twisted-arrow-category, thm-an-end-is-a-limit-over-the-twisted-arrow-category, def-opposite-category]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Notation 1.1.13 and Remarks 1.1.14 and 1.1.16"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), Notation 4.6.1 and Remark 4.6.2"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Three conventions are in force throughout this page, each of which is reversed
by some part of the literature.

**Integral signs.** The subscripted integral denotes the end and the
superscripted integral the coend ([[def-end-and-coend]]): $\int_{c}T(c,c)$ is
the terminal wedge and $\int^{c}T(c,c)$ the initial cowedge. The variable is
bound in both.

**The twisted arrow category.** $\operatorname{Tw}(\mathcal C)$ has the
morphisms of $\mathcal C$ as objects and a morphism $f\to g$ is a pair $(a,b)$
with $bfa=g$, so its projection lands in
$\mathcal C^{\mathrm{op}}\times\mathcal C$
([[def-twisted-arrow-category]], [[def-opposite-category]]).

**Which category computes a coend.** Under those two conventions an end is a
limit over $\operatorname{Tw}(\mathcal C)$ and a coend is a colimit over
$\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$ of the integrand read with the
domain and codomain of each arrow interchanged
([[thm-an-end-is-a-limit-over-the-twisted-arrow-category]]).

## Why each is worth stating

Every one of the three is a choice, and the alternative choice is in print.

The reversal of the integral signs is not hypothetical: Yoneda's 1960 paper
calls integration what is now the coend and writes it with a subscript, and the
opposite convention to the one above is used by some modern authors as well.
Anyone converting a formula from another source must check which convention that
source fixed before comparing it with a formula on this page; the mathematics is
unaffected and only the symbols move.

The orientation of the twisted arrow category is reversed by some sources, so
that what is written $\operatorname{Tw}(\mathcal C)$ there is
$\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$ here. Under the reversed
orientation the projection lands in $\mathcal C\times\mathcal C^{\mathrm{op}}$
and every statement on this page naming $\operatorname{Tw}(\mathcal C)$ has to
be read with the opposite category substituted.

The third convention is a consequence of the first two rather than an
independent choice, and it is the one that is easiest to get wrong, because the
index category for the coend is the opposite of the index category for the end
**and** the integrand is reindexed. Taking only one of the two changes gives a
different object, and a false statement recording exactly that failure is
carried on this page.
