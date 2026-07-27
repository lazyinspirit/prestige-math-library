---
id: rem-baire-in-r-is-choice-free
kind: remark
title: "Why the nested-interval proof of Baire category in $\\mathbb{R}$ needs no choice, while the general complete-metric statement does"
status: published
origin: session
deps: [thm-baire-category-r, rem-baire-category-choice-strength, def-countable-choice, def-dependent-choice, thm-nested-interval-property, thm-rationals-countable, lem-rat-embeds-dense, thm-well-ordering-principle, thm-recursion]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
pipeline_run: null
---

## Remark

**What the proof on this page spends.** The proof of [[thm-baire-category-r]]
uses exactly four things: the recursion theorem ([[thm-recursion]]), the
well-ordering principle for $\mathbb{N}$ ([[thm-well-ordering-principle]]), the
nested interval property ([[thm-nested-interval-property]]), and one fixed
enumeration of the rationals ([[thm-rationals-countable]],
[[lem-rat-embeds-dense]]). None of these is a choice principle. The enumeration
is a single object, fixed once by one instantiation of an existential statement;
the interval used at stage $k$ is the one whose two rational endpoints have least
index among those meeting the requirements, and "least" is determined by
[[thm-well-ordering-principle]]; so the successor rule is a *function*, and the
whole construction is one application of [[thm-recursion]] to it. In particular
the proof does not use countable choice ([[def-countable-choice]]), which the
neighbouring measure-theoretic results on this page do use.

**What the naive proof would spend, and why.** The textbook argument says: given
the interval produced at stage $k$, *choose* an interval inside it meeting
$U_{k+1}$, and repeat. Each choice is made from a nonempty set that depends on
the previous choice, and it is made infinitely often. That pattern is not
countable choice, which selects from a family fixed in advance; it is the axiom
of dependent choice ([[def-dependent-choice]]). Replacing the choice by a canonical rule is the only edit
the argument needs, and fixing an enumeration of a dense set in advance is what
makes a canonical rule available.

**What this does NOT establish.** It establishes nothing about the Baire category
theorem for complete metric spaces in general. That statement is genuinely
stronger, and how much stronger is recorded, with references and without proof,
in [[rem-baire-category-choice-strength]]: over ZF the metric version is
equivalent to dependent choice, whereas its restriction to spaces with a
countable dense subset is a theorem of ZF, "a fixed countable dense set removes
every choice from the construction". The proof of [[thm-baire-category-r]] is
precisely that restricted argument, specialised to $\mathbb{R}$ with the
rationals as the countable dense set. So the correct summary is:

- the statement proved here, for $\mathbb{R}$, needs no choice principle;
- the general metric statement is not proved here at all, and is not a corollary
  of what is proved here;
- the strength of that general statement over ZF is quoted from the literature in
  [[rem-baire-category-choice-strength]], which this library does not prove.

**Why the distinction is worth a separate item.** The two statements are
routinely called by the same name, and a reader who has seen "Baire needs
dependent choice" may reasonably suspect the proof above of hiding an appeal to
it. It does not, and the place to look is the successor rule: it takes a minimum
over $\mathbb{N} \times \mathbb{N}$ rather than picking a witness. The same device
appears in [[thm-perfect-set-uncountable-r]], and in both places it is the
enumeration of $\mathbb{Q}$ that pays for it.

**A note on the surrounding page.** Choice is not avoided everywhere here.
[[thm-countable-union-of-null-is-null]] spends countable choice at one clearly
marked step, and says so; [[lem-countable-sets-are-null]] and
[[thm-cantor-set-properties]] spend none. The page is arranged so that each
appeal is visible where it happens rather than absorbed into a general
convention.
