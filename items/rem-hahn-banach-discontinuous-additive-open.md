---
id: rem-hahn-banach-discontinuous-additive-open
kind: remark
title: "Does Hahn-Banach yield a discontinuous additive $f : \\mathbb{R} \\to \\mathbb{R}$? (open)"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [def-axiom-of-choice]
aliases: []
landmark: false
short: "Open in ZF: whether Hahn-Banach implies a discontinuous solution of Cauchy's functional equation"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. Howard and J. E. Rubin, Consequences of the Axiom of Choice, Mathematical Surveys and Monographs 59, AMS 1998"
      url: "https://www.ams.org/surv/059"
    - title: "P. Larson and S. Shelah, Discontinuous homomorphisms without Hamel bases (arXiv:2606.08384)"
      url: "https://arxiv.org/abs/2606.08384"
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "A. Karagila, Zornian Functional Analysis, or How I Learned to Stop Worrying and Love the Axiom of Choice (arXiv:2010.15632)"
      url: "https://arxiv.org/abs/2010.15632"
pipeline_run: null
---

## Statement

Work in ZF, without the axiom of choice, and write **HB** for the Hahn-Banach
theorem.

**Question.** Does HB imply the existence of a discontinuous additive function
$f : \mathbb{R} \to \mathbb{R}$, that is, a solution of Cauchy's functional
equation $f(x + y) = f(x) + f(y)$ that is not of the form $f(x) = cx$?

**Status: open.** Like the companion question about a Hamel basis, this is
recorded as open in Howard and Rubin's catalogue of consequences of the axiom of
choice, as the implication from their form for Hahn-Banach to their form for a
discontinuous additive function on the line.

## Remarks

**Not proved in this library, and not proved anywhere.** No page here depends on
the existence of a pathological solution of Cauchy's equation, and this library
develops neither functional analysis nor ZF model construction.

**What is known, and what would settle it.** For an additive
$f : \mathbb{R} \to \mathbb{R}$, being continuous, being linear over $\mathbb{R}$,
being measurable, being bounded on some set of positive measure and being bounded
on some interval are all the same condition, so a discontinuous additive function
is an extremely wild object: its graph is dense in the plane. The axiom of choice
([[def-axiom-of-choice]]) produces one immediately from a Hamel basis for
$\mathbb{R}$ over $\mathbb{Q}$, by choosing a $\mathbb{Q}$-linear map that is not
$\mathbb{R}$-linear. In the other direction, ZF alone cannot produce one: in
Solovay's model, and in Shelah's strengthening that removes the inaccessible
cardinal, every set of reals has the Baire property, and then every additive
$f : \mathbb{R} \to \mathbb{R}$ is continuous. So the statement sits strictly
between ZF and AC, exactly as HB does, and the question is again how the two are
ordered. Settling it means a ZF derivation from HB, or a model of ZF with HB and
no discontinuous additive function.

Two nearby results sharpen what is at stake. Larson and Shelah (2026) build a
model of ZF + DC with a discontinuous additive endomorphism of $\mathbb{R}$ but no
Hamel basis for $\mathbb{R}$, so this consequence is strictly weaker than the
Hamel basis in that setting and the two open questions are genuinely distinct. And
on an infinite-dimensional *Banach* space, the existence of a discontinuous linear
functional is equivalent to the full axiom of choice, whereas the discontinuous
additive function asked about here is only $\mathbb{Q}$-linear, which is what
leaves room for it to be cheaper.

**Why it matters here.** A discontinuous additive function is the smallest and
most-cited pathology in real analysis whose existence is not a theorem of ZF. Any
statement of the form "the only additive functions are the linear ones" is a
statement about the ambient set theory, not about the reals, and the library's
choice ledger is where that has to be recorded. This item records that the exact
price of the pathology, measured against Hahn-Banach, is unknown.
