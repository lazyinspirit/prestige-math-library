---
id: rem-heine-criterion-choice-cost
kind: remark
title: "The sequence-to-$\\varepsilon$ direction of the Heine criterion uses countable choice for $\\mathbb{R}$, and where this library records that cost"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-sequential-criterion-for-function-limits, def-countable-choice, def-function-limit, lem-sequential-characterisation-of-closure-r]
justified_by: []
aliases: []
landmark: false
short: "choice cost of the Heine criterion"
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
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
pipeline_run: null
---

## What this page spends, and where

[[thm-sequential-criterion-for-function-limits]] is an equivalence, and its two
directions do not cost the same.

- **From the $\varepsilon$-$\delta$ limit to sequences** — if
  $\lim_{x \to c} f(x) = L$ then $f(x_k) \to L$ for every sequence in
  $A \setminus \{c\}$ tending to $c$ — is proved in **ZF**. The sequence is
  handed to the proof; nothing is selected. This is steps 1.1, 2.1 and 3.1 of
  that theorem.

- **From sequences to the $\varepsilon$-$\delta$ limit** is proved there using
  the **Axiom of Countable Choice** ([[def-countable-choice]]), invoked exactly
  once, at step 3.2. The proof assumes the limit fails, obtains for each
  $k \in \mathbb{N}$ a nonempty set
  $X_k = \{\, x \in A : 0 < |x - c| < 1/(k+1) \text{ and } |f(x) - L| \ge \varepsilon_0 \,\}$,
  and needs a single point from each of those countably many sets at once.

**Why no canonical selection is available.** The sets $X_k$ are cut out by an
inequality involving $f$, about which the theorem assumes nothing. There is
therefore no rule in this library that names an element of $X_k$ uniformly in
$k$: they are subsets of $\mathbb{R}$, which carries no well-ordering that ZF
provides, and the sets need not be intervals, need not be closed, and need not
meet $\mathbb{Q}$. That is precisely the situation [[def-countable-choice]]
exists for.

## The same cost, recorded twice

The identical pattern occurs in the prerequisite page: in
[[lem-sequential-characterisation-of-closure-r]] the right-to-left direction is
choice free, while producing a sequence in $A$ converging to a point of
$\overline{A}$ requires selecting one point of $A$ from each of the sets
$N_{1/(k+1)}(x) \cap A$, and that item invokes $\mathrm{AC}_\omega$ explicitly
for it. Both items name the step where the axiom is used, so a reader working in
ZF alone can see exactly which half of each equivalence survives.

## What this library claims, and what it does not

- **Claimed:** the direction from $\varepsilon$-$\delta$ to sequences is a
  theorem of ZF; the converse **as proved here** uses $\mathrm{AC}_\omega$; and
  the use is isolated to one step, so nothing else on this page inherits it.

- **Not claimed:** that the converse *requires* $\mathrm{AC}_\omega$. This
  library proves no independence result and contains neither forcing nor
  permutation models, so it is in no position to assert that some cleverer ZF
  proof does not exist. The systematic study of which such criteria need which
  fragment of choice is a subject in its own right; Herrlich's *Axiom of Choice*
  is the standard reference, and it is cited here as literature, not used.

- **A warning against a tempting slogan.** It is *not* the case that sequential
  criteria in analysis always need choice. Sierpiński proved, in ZF, that a
  function $\mathbb{R} \to \mathbb{R}$ which is sequentially continuous at
  **every** point is continuous. The everywhere-statement and the
  pointwise-statement behave differently, and the cost recorded above is a
  statement about the pointwise criterion as proved here, nothing more.

## The consequence for how this page is organised

Because the criterion carries a choice cost on one side, this page does **not**
route its main results through it. The algebra of limits
([[thm-algebra-of-function-limits]]), order preservation
([[lem-function-limit-preserves-order]]), the squeeze theorem
([[thm-squeeze-for-function-limits]]) and composition
([[thm-composition-of-function-limits]]) are all proved directly from
$\varepsilon$ and $\delta$, and are therefore theorems of ZF. The sequential
machinery is used only where it earns its place: in the criterion itself, and in
[[cor-sequential-criterion-for-nonexistence]], which needs only the choice-free
direction and is the tool by which the companion page shows that various limits
fail to exist.

That organisation is a deliberate choice of proofs, not a mathematical necessity:
each of those four results *could* be deduced from the criterion, at the price of
importing $\mathrm{AC}_\omega$ into statements that do not need it.
