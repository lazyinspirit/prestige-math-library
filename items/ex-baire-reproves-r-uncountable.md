---
id: ex-baire-reproves-r-uncountable
kind: example
title: "Baire category gives a third proof that $\\mathbb{R}$ is uncountable"
status: published
origin: session
deps: [thm-baire-category-r, def-nowhere-dense-meager, thm-r-uncountable, def-countable, lem-countable-iff-surjection-from-n, def-interval, def-neighbourhood-r, def-open-and-closed-in-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-injection-surjection-bijection, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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
    - title: "Cantor's first set theory article (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_first_set_theory_article"
pipeline_run: null
---

## Example

$\mathbb{R}$ is uncountable ([[def-countable]]), by [[thm-baire-category-r]]: a
singleton is nowhere dense, so a listing of $\mathbb{R}$ would present
$\mathbb{R}$ as a countable union of nowhere dense sets, which the Baire theorem
forbids.

This is the third proof of the fact in this library. The first is Cantor's
nested-interval argument of 1874 ([[thm-r-uncountable]]); the second is the
perfect-set theorem applied to a closed interval
([[thm-perfect-set-uncountable-r]]); this one isolates what the first two have in
common, namely completeness used through nested intervals, and packages it once.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$.

[L1] If $(A_n)_{n \in \mathbb{N}}$ is a sequence of nowhere dense subsets of $\mathbb{R}$ then $\bigcup_n A_n \ne \mathbb{R}$ ([[thm-baire-category-r]]).

[L2] A closed set is nowhere dense exactly when its interior is empty ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L3] $U$ is open when every point of it has a neighbourhood inside it, $F$ is closed when its complement is open, and $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$ contains $x$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L4] A nonempty at most countable set admits a surjection from $\mathbb{N}$, and uncountable means not at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]], [[def-injection-surjection-bijection]]).

[L5] $\mathbb{R}$ is uncountable, by Cantor's nested-interval argument ([[thm-r-uncountable]]).

[L6] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $0 < \varepsilon \cdot 2^{-1} < \varepsilon$ for $\varepsilon > 0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 For $c \in \mathbb{R}$ the singleton $\{c\}$ is nowhere dense: it is closed, since $x \ne c$ gives $N_{|x-c|}(x) \subseteq \mathbb{R} \setminus \{c\}$ by [L3]; and its interior is empty, since for every real $\varepsilon > 0$ the point $c + \varepsilon \cdot 2^{-1}$ lies in $N_\varepsilon(c)$ and differs from $c$ by [L6], so no neighbourhood of $c$ is contained in $\{c\}$. By [L2] it is nowhere dense. [L2, L3, L6]

2.1 Let $s : \mathbb{N} \to \mathbb{R}$ be any function. The sets $A_n := \{s(n)\}$ are nowhere dense by step 1.1, so $\bigcup_n A_n \ne \mathbb{R}$ by [L1]; but $\bigcup_n A_n$ is exactly the image of $s$, so $s$ is not surjective. [step 1.1, L1]

3.1 Hence there is no surjection $\mathbb{N} \to \mathbb{R}$. Since $\mathbb{R}$ is nonempty, [L4] gives that $\mathbb{R}$ is not at most countable, that is, $\mathbb{R}$ is uncountable, which is [L5] reproved along an independent route. [step 2.1, L4, L5] ∎

## Remarks

- **The proof is not circular.** [[thm-baire-category-r]] is proved from the
  nested interval property and an enumeration of $\mathbb{Q}$, and it nowhere uses
  the uncountability of $\mathbb{R}$; nor does it use
  [[thm-perfect-set-uncountable-r]]. What it shares with both is
  [[thm-nested-interval-property]], and that is the one ingredient no proof of
  uncountability here avoids.

- **It proves more than uncountability.** The same argument shows that
  $\mathbb{R}$ is not a countable union of nowhere dense sets, of which "not a
  countable union of singletons" is the weakest case. So it also shows, for
  instance, that $\mathbb{R}$ is not the union of countably many Cantor sets,
  each of which is nowhere dense ([[thm-cantor-set-properties]]).

- **What it does not give.** It gives no cardinality beyond "not at most
  countable", and in particular says nothing about a bijection with
  $\mathcal{P}(\mathbb{N})$. For the Cantor set that stronger information is
  available through the digit description
  ([[thm-cantor-set-ternary-description]]), and it is what makes
  [[fs-cantor-set-countable]] fail so badly.
