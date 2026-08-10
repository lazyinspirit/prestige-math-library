# Audit proof-refuter brief — Wave 12, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` Statement or consumer, actively search for a
counterexample or a failure in the witness or cited generated premise. A false
public claim, invalid proof, missing necessary hypothesis, circularity, or
materially inaccurate load-bearing citation is fatal; a quickly closable gap is
nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Selection reasons

- critical risk (10): 23 declared dependencies; 15 cited facts; 8 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language
- top-20 manifest-edge consumer (23 outgoing relationships)

## Target item — `cor-bolzano-weierstrass-in-rn`

Normalized current SHA-256: `fe9f87abc8be3512004dba8cdbf793e27707310a645014f01d093c7faaf6bbff`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cor-bolzano-weierstrass-in-rn
kind: corollary
title: "For $n \\ge 1$ every bounded sequence in $\\mathbb{R}^n$ has a convergent subsequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, thm-heine-borel-rn, thm-compact-implies-the-other-compactness-forms, thm-metric-compactness-equivalences, def-metric-compactness, def-metric-compactness-variants, def-metric-bounded-diameter, def-metric-ball, thm-bolzano-weierstrass, def-dependent-choice, lem-metrics-on-rn, def-metric-convergence, def-sequence, lem-subsequence-inherits-limit, lem-index-map-grows, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-norm-and-normed-space, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-isometry-and-metric-embedding, thm-of-square-roots, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$ and let $\bigl(x^{(j)}\bigr)_{j\in\mathbb{N}}$
be a sequence in $\mathbb{R}^{n}$ whose range
$\{\, x^{(j)} : j \in \mathbb{N} \,\}$ is a bounded subset of
$(\mathbb{R}^{n}, d_2)$ ([[def-metric-bounded-diameter]], [[lem-metrics-on-rn]]).
Then there are a strictly increasing $i : \mathbb{N} \to \mathbb{N}$
([[def-sequence]], [[lem-index-map-grows]]) and a point $p \in \mathbb{R}^{n}$
with

$$x^{(i_j)} \longrightarrow p \quad \text{in } (\mathbb{R}^{n}, d_2)$$

([[def-metric-convergence]]). By [[thm-all-norms-on-rn-are-equivalent]] the same
statement holds with $d_2$ replaced by the metric of any norm on
$\mathbb{R}^{n}$, boundedness and convergence both being unchanged by that
replacement ([[def-equivalent-norms]]).

**This is assembled from published theorems and is not proved again by
bisection.** The bisection is in [[thm-heine-borel-rn]], published at order 120;
what is added here is the passage from compactness to sequential compactness and
the reading of the conclusion in $\mathbb{R}^{n}$.

**Choice cost: none.** [[thm-heine-borel-rn]] is proved by bisection and uses no
choice principle, and "compact implies sequentially compact" is a theorem of ZF
([[thm-compact-implies-the-other-compactness-forms]]). The five-way equivalence
[[thm-metric-compactness-equivalences]] is **not** used, precisely because it is
stated under countable choice and dependent choice ([[def-dependent-choice]]) and
would overcharge this corollary; the arrow-by-arrow account is
[[rem-compactness-choice-ledger-metric]].

## Facts & Assumptions

**Given:** A natural $n \ge 1$; a sequence $\bigl(x^{(j)}\bigr)$ in $\mathbb{R}^{n}$ whose range is bounded in $(\mathbb{R}^{n},d_2)$.

[L1] Boundedness: a nonempty $A \subseteq X$ is bounded when $A \subseteq B(q,r)$ for some $q \in X$ and real $r > 0$ ([[def-metric-bounded-diameter]], [[def-metric-ball]]).

[L2] $d_2(u,v) = \lVert u-v\rVert_2$, $\lVert\cdot\rVert_2$ is a norm, and $|y_k| \le \lVert y\rVert_2$ for every $k<n$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[def-p-norms-on-rn]], [[def-norm-and-normed-space]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3).

[L3] Closed boxes are compact: for reals $a_k \le b_k$ $(k<n)$ the set $Q = \{\, y \in \mathbb{R}^{n} : a_k \le y_k \le b_k \text{ for every } k<n \,\}$ is a compact subset of $(\mathbb{R}^{n},d_2)$ ([[thm-heine-borel-rn]] clause 1, [[def-metric-compactness]]).

[L4] In ZF, a compact metric space is countably compact and limit point compact, and each of those implies sequential compactness ([[thm-compact-implies-the-other-compactness-forms]], [[def-metric-compactness-variants]]): every sequence in it has a subsequence converging to a point of it.

[L5] A compact subset $A$ of $X$ is one for which the metric subspace $(A,d_A)$ is a compact metric space, $d_A$ being the restriction of $d$ ([[def-metric-compactness]], [[def-isometry-and-metric-embedding]]).

[L6] Convergence in a metric space, and inheritance of limits by subsequences ([[def-metric-convergence]], [[lem-subsequence-inherits-limit]], [[lem-index-map-grows]]).

## Proof

**Proof technique:** direct.

1.1 The range of the sequence is nonempty and bounded, so there are $q \in \mathbb{R}^{n}$ and a real $r > 0$ with $d_2(x^{(j)}, q) < r$ for every $j \in \mathbb{N}$. [L1]

2.1 Put $M := r + \lVert q\rVert_2$, a real with $M > 0$. By the triangle inequality for the norm, $\lVert x^{(j)}\rVert_2 \le \lVert x^{(j)} - q\rVert_2 + \lVert q\rVert_2 = d_2(x^{(j)},q) + \lVert q\rVert_2 < M$ for every $j$. [step 1.1, L2]

3.1 For every $j$ and every $k<n$: $|x^{(j)}_k| \le \lVert x^{(j)}\rVert_2 < M$, hence $-M \le x^{(j)}_k \le M$. [step 2.1, L2]

4.1 Let $Q := \{\, y \in \mathbb{R}^{n} : -M \le y_k \le M \text{ for every } k<n \,\}$. Since $-M \le M$, $Q$ is a compact subset of $(\mathbb{R}^{n},d_2)$, and by step 3.1 every term $x^{(j)}$ lies in $Q$. [step 3.1, L3]

5.1 By [L5] the metric subspace $(Q, d_Q)$ is a compact metric space, and by [L4] it is sequentially compact. [step 4.1, L4, L5]

6.1 $\bigl(x^{(j)}\bigr)$ is a sequence in $Q$, so there are a strictly increasing $i : \mathbb{N} \to \mathbb{N}$ and $p \in Q$ with $x^{(i_j)} \to p$ in $(Q, d_Q)$. [step 4.1, step 5.1, L4, L6]

7.1 Since $d_Q$ is the restriction of $d_2$ to $Q \times Q$, the reals $d_Q(x^{(i_j)}, p)$ and $d_2(x^{(i_j)}, p)$ are equal for every $j$, so $x^{(i_j)} \to p$ in $(\mathbb{R}^{n},d_2)$ as well. [step 6.1, L5, L6]

8.1 So the bounded sequence $\bigl(x^{(j)}\bigr)$ has a subsequence converging in $(\mathbb{R}^{n},d_2)$, which is the claim. [step 6.1, step 7.1] ∎

## Remarks

- **The case $n = 1$ and the published one-dimensional theorem.** $\mathbb{R}^{1}$ is the set of functions $1 \to \mathbb{R}$ and is therefore **not literally** $\mathbb{R}$. The map $\theta : \mathbb{R} \to \mathbb{R}^{1}$ sending $t$ to the function with value $t$ at $0$ is a bijection, and $d_2(\theta(s),\theta(t)) = \sqrt{(s-t)^{2}} = |s-t|$ ([[thm-of-square-roots]], [[lem-of-abs-value]]), so $\theta$ is an isometric bijection onto $\mathbb{R}^{1}$ ([[def-isometry-and-metric-embedding]]). Under that identification this corollary at $n = 1$ and the published [[thm-bolzano-weierstrass]] are the same statement, and neither is used to prove the other: the published theorem is proved on the real line, and the corollary above is proved from Heine-Borel in $\mathbb{R}^{n}$.

- **Boundedness of the sequence is boundedness of its range**, a set, and not a condition on each coordinate separately. The two do agree here: step 3.1 gives one direction, while the reverse follows from $\lVert y\rVert_2\le\iota(n)\lVert y\rVert_\infty$ in [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3 after taking the maximum of the finitely many coordinate bounds. What does **not** follow from bounded coordinates is convergence, and the companion page carries that false statement.

- **What sequential compactness gives and what it does not.** It produces a convergent subsequence and says nothing about the original sequence. A bounded sequence need not converge, and a sequence with a convergent subsequence need not be bounded; both remarks are already recorded for the real line in [[thm-bolzano-weierstrass]].
````

## Wave 12 provenance row

```json
{
  "id": "cor-bolzano-weierstrass-in-rn",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html",
    "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
  ],
  "rationale": "For $n \\\\ge 1$ every bounded sequence in $\\\\mathbb{R}^n$ has a convergent subsequence: The literature gives the standard norm definitions and finite-dimensional equivalence, compactness, or coordinate results; the item specializes it to the library’s zero-based function model of R^n, named published metrics, and explicit n-boundary conventions, and sometimes bundles consequences or a refuting witness. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-metric-bounded-diameter",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A, B \\subseteq X$. **Bounded subset.** $A$ is **bounded** if $A = \\emptyset$ or there are $x_0 \\in X$ and a real $r > 0$ with $A \\subseteq B(x_0, r)$ ([[def-metric-ball]]). The space $(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself. **Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and bounded, and put $$D(A) := \\{\\, d(a,b) : a, b \\in A \\,\\} \\subseteq \\mathbb{R}.$$ Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and $r$ with $A \\subseteq B(x_0,r)$, every $a, b \\in A$ satisfy $d(a,b) \\le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry ([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]], [[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$ ([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\\mathbb{R}$ by the least-upper-bound property ([[def-complete-ordered-field]]), and that bound is unique ([[lem-sup-unique]]). Define $$\\operatorname{diam}(A) := \\sup D(A).$$ **Distance from a point to a set, for nonempty $A$ only.** Let $x \\in X$ and let $A$ be nonempty, and put $E(x,A) := \\{\\, d(x,a) : a \\in A \\,\\}$. Then $E(x,A)$ is nonempty and bounded below by $0$, since a metric is nonnegative ([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]]. Define $$d(x,A) := \\inf E(x,A).$$ **Distance between two sets, for nonempty $A$ and $B$ only.** Put $E(A,B) := \\{\\, d(a,b) : a \\in A,\\ b \\in B \\,\\}$, again nonempty and bounded below by $0$, and define $$d(A,B) := \\inf E(A,B).$$ **Every one of the three scope restrictions is load bearing.** In this library $\\sup$ and $\\inf$ denote real numbers and are written only after existence has been established; the extended real line is introduced on a later page and is not used for the suprema and infima taken here, and no convention $\\sup \\emptyset = -\\infty$ is in force in this development ([[rem-sup-conventions]]). Accordingly: - $\\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and** bounded. It is not defined for $A = \\emptyset$, and it is not defined, not even as an infinite value, for an unbounded $A$. - $d(x,A)$ is defined exactly when $A \\ne \\emptyset$, and $d(A,B)$ exactly when both $A$ and $B$ are nonempty. No boundedness is needed for these two, because $0$ is always a lower bound.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-metric-ball",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \\in X$ and let $r \\in \\mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define $$B(x,r) := \\{\\, y \\in X : d(x,y) < r \\,\\}, \\qquad \\bar B(x,r) := \\{\\, y \\in X : d(x,y) \\le r \\,\\}, \\qquad S(x,r) := \\{\\, y \\in X : d(x,y) = r \\,\\}.$$ $B(x,r)$ is the **open ball**, $\\bar B(x,r)$ the **closed ball** and $S(x,r)$ the **sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly positive real; a ball of radius $0$ or of negative radius is never written in this library. **Immediate consequences of the definitions.** For every $x \\in X$ and $r > 0$: - $x \\in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]); in particular open and closed balls are nonempty. - $B(x,r) \\subseteq \\bar B(x,r)$ and $S(x,r) \\subseteq \\bar B(x,r)$, and $\\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of the order of $\\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]): each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$. - If $0 < s \\le r$ then $B(x,s) \\subseteq B(x,r)$ and $\\bar B(x,s) \\subseteq \\bar B(x,r)$, by transitivity of the order. - Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the radius convention, and it forces it for the **open** ball only: if $r \\le 0$ then $B(x,r) = \\{y : d(x,y) < r\\}$ is empty, because $d(x,y) \\ge 0 \\ge r$ for every $y$. The other two sets behave differently at $r = 0$, and the convention $r > 0$ excludes them for uniformity rather than for emptiness: $\\bar B(x,0) = S(x,0) = \\{x\\}$, since $d(x,y) \\le 0$ together with $d(x,y) \\ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all three sets are empty. **A sphere may be empty, and so the three sets are not on a par.** For $r > 0$ the open and closed balls always contain $x$, but nothing in the definition produces a point at distance exactly $r$ from $x$. If a metric takes only the values $0$ and $1$, as the discrete metric on the companion page does, then $S(x,2) = \\emptyset$ while $B(x,2) = \\bar B(x,2)$ is the whole space. So nonemptiness of a sphere is never available by convention: where it is used, it is proved. **The ambient space is part of the notation.** $B(x,r)$ depends on $(X,d)$ and not on $x$ and $r$ alone. When more than one space or more than one metric is in play we write $B_X(x,r)$, or $B_d(x,r)$, and likewise for $\\bar B$ and $S$. This matters as soon as subspaces appear ([[def-isometry-and-metric-embedding]]): a ball of a subspace is the trace on it of a ball of the ambient space, and the two are different sets.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-p-norms-are-norms-and-induce-the-published-metrics",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $p \\in \\mathbb{Q}$ with $p \\ge 1$, with the norms of [[def-p-norms-on-rn]]. Then: 1. $\\lVert\\cdot\\rVert_p$ is a norm on $\\mathbb{R}^{n}$ ([[def-norm-and-normed-space]]). 2. For $n \\ge 1$, $\\lVert\\cdot\\rVert_\\infty$ is a norm on $\\mathbb{R}^{n}$. 3. **The dictionary.** For $n \\ge 1$ and all $x, y \\in \\mathbb{R}^{n}$, $$\\lVert x-y\\rVert_1 = d_1(x,y), \\qquad \\lVert x-y\\rVert_2 = d_2(x,y), \\qquad \\lVert x-y\\rVert_\\infty = d_\\infty(x,y),$$ where $d_1$, $d_2$, $d_\\infty$ are the metrics of the published [[lem-metrics-on-rn]]. So the metric induced by each of these three norms ([[def-norm-and-normed-space]]) **is** the correspondingly named published metric, not merely one equivalent to it. **Consequence, used repeatedly below and stated once here.** By clause 3 at $p = 2$, the metric space $(\\mathbb{R}^{n}, d_2)$ of the published metric-spaces page and the metric space underlying the normed space $(\\mathbb{R}^{n}, \\lVert\\cdot\\rVert_2)$ of this page are the same object. Hence completeness ([[thm-euclidean-space-complete]] clause 2), Heine-Borel ([[thm-heine-borel-rn]] clause 2) and the compactness equivalences ([[thm-metric-compactness-equivalences]]) are statements about this page's normed space, **with their hypothesis $n \\ge 1$ inherited unchanged and not weakened**. Nothing below cites any of those three theorems for $n = 0$. **Why this lemma exists.** Without it the library would hold a norm-induced metric on $\\mathbb{R}^{n}$ and a separately published metric on the same set with no recorded relation, and every later citation would have to guess which was meant. The proof of clause 3 is a comparison of two written expressions; the value is that the comparison is made and recorded.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-p-norms-on-rn",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$ and let $\\mathbb{R}^{n}$ be the function space of [[def-euclidean-inner-product]], with $x_k := x(k)$ for $k < n$. ### The $p$-norm, for a rational exponent $p \\ge 1$ Let $p \\in \\mathbb{Q}$ with $p \\ge 1$. For $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_p \\;:=\\; \\Bigl(\\sum_{k<n} |x_k|^{p}\\Bigr)^{1/p},$$ where $|\\cdot|$ is the absolute value ([[def-abs-value]]), the sum is the finite sum of [[def-finite-sum]], and both powers are the **rational** powers of [[def-rational-power]]. **Every power written here is defined.** Each base $|x_k|$ is a nonnegative real and $p > 0$, so $|x_k|^{p}$ is given by [[def-rational-power]] for $|x_k| > 0$ and by its supplementary clause $0^{p} = 0$ for $|x_k| = 0$; the sum of these nonnegative terms is nonnegative ([[lem-finite-sum-laws]] clause 4), and $1/p$ is a positive rational, so the outer power is defined for the same two reasons. The value does not depend on which representative of $p$ or of $1/p$ is used ([[lem-rational-power-well-defined]]). **The exponent is a rational, and that is not a matter of taste.** [[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational** exponent only; real exponents do not exist at this point in the reading order, and [[rem-real-exponents-deferred]] records exactly why. This is also why the published Minkowski inequality [[thm-minkowski-finite]], which is what makes the triangle inequality work below, is itself stated for rational $p \\ge 1$. **No statement on this page is written for $p$ ranging over a real interval.** ### The maximum norm For $n \\ge 1$ and $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_\\infty \\;:=\\; \\max\\{\\, |x_k| \\;:\\; k < n \\,\\},$$ the maximum of a nonempty finite set of reals, which exists and is one of its elements ([[lem-finite-set-has-max]], [[def-max-min]]). **The hypothesis $n \\ge 1$ is required and propagates.** At $n = 0$ the set $\\{|x_k| : k<n\\}$ is empty and has no maximum ([[def-max-min]]). This is the same restriction the published [[lem-metrics-on-rn]] carries, for the same reason, and **every statement on this page that mentions $\\lVert\\cdot\\rVert_\\infty$ inherits it**. The $p$-norms for rational $p \\ge 1$ carry no such restriction: at $n = 0$ each is the empty sum raised to a positive rational power, hence $0$. ### The three cases the rest of the page uses - $\\lVert x\\rVert_1 = \\sum_{k<n}|x_k|$, since $t^{1} = t$ for $t \\ge 0$ ([[lem-rational-power-laws]], and $0^{1} = 0$ by the supplementary clause). - $\\lVert x\\rVert_2 = \\bigl(\\sum_{k<n}|x_k|^{2}\\bigr)^{1/2} = \\sqrt{\\sum_{k<n}x_k^{2}}$, which is exactly the Euclidean norm of [[def-euclidean-inner-product]]: the exponent $2$ agrees with the integer power, so $|x_k|^{2} = x_k^{2}$ ([[lem-of-abs-value]]), and $t^{1/2}$ is the unique nonnegative square root of $t$, which is $\\sqrt{t}$ ([[def-rational-power]], [[thm-of-square-roots]]). **The two notations denote the same function and no second Euclidean norm is introduced.** - $\\lVert x\\rVert_\\infty$ as above, for $n \\ge 1$. That each of these is a norm in the sense of [[def-norm-and-normed-space]], and that the metrics they induce are exactly the published $d_1$, $d_2$ and $d_\\infty$ of [[lem-metrics-on-rn]], is [[lem-p-norms-are-norms-and-induce-the-published-metrics]]; it is proved there and is not assumed here.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-norm-and-normed-space",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) constructed in this library, in particular a field, so that \"vector space\" below always means vector space over $\\mathbb{R}$ ([[def-vector-space]]). Let $V$ be a vector space over $\\mathbb{R}$, with zero vector $0_V$. A **norm on $V$** is a function $N : V \\to \\mathbb{R}$ such that for all $u, v \\in V$ and all $\\lambda \\in \\mathbb{R}$: - **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$. - **(N2) Absolute homogeneity.** $N(\\lambda v) = |\\lambda|\\,N(v)$, the absolute value being that of [[def-abs-value]]. - **(N3) Triangle inequality.** $N(u + v) \\le N(u) + N(v)$. A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over $\\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write $\\lVert v\\rVert$ for $N(v)$; when several are, the norm is always named. **The values of a norm are real numbers.** The codomain is $\\mathbb{R}$, so $N(v)$ is an honest element of the complete ordered field and no infinite value is permitted. This is the same convention [[rem-metric-axiom-conventions]] records for metrics. ### Nonnegativity is a theorem, not an axiom Many texts add a fourth condition $N(v) \\ge 0$. It is redundant. Applying (N2) with $\\lambda = -1$ gives $N(-v) = |-1|\\,N(v) = N(v)$ ([[lem-of-abs-value]], [[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3) with $u = v$ and $-v$ gives $$0 \\;=\\; N(0_V) \\;=\\; N\\bigl(v + (-v)\\bigr) \\;\\le\\; N(v) + N(-v) \\;=\\; N(v) + N(v),$$ where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \\ge 0$, and if $N(v) < 0$ then $N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids ([[def-complete-ordered-field]]). Hence $N(v) \\ge 0$ for every $v \\in V$. **Consequently the verification of a candidate norm has three things to check and not four**, exactly as the verification of a candidate metric has three and not four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this library assumes nonnegativity of a norm before the argument above. ### The induced metric Let $N$ be a norm on $V$ and define $$d_N(u,v) \\;:=\\; N(u - v) \\qquad (u, v \\in V),$$ where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on $V$** ([[def-metric-space]]), and the three axioms are the three conditions above, in order: - **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$, that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$. - **(M2)** $d_N(v,u) = N(v-u) = N\\bigl((-1)(u-v)\\bigr) = |-1|\\,N(u-v) = d_N(u,v)$, by (N2), [[lem-of-abs-value]] and $(-1)w = -w$ ([[lem-vector-space-elementary-consequences]]). - **(M3)** $d_N(u,w) = N\\bigl((u-v) + (v-w)\\bigr) \\le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$, by (N3). A normed space is therefore a metric space, and every notion defined for metric spaces — open set ([[def-metric-topology]]), convergence, Cauchyness, continuity, compactness — is available in it with no further definition. **This library never introduces a second notion of any of them for normed spaces.** ### Two properties an arbitrary metric need not have The metric $d_N$ satisfies, for all $u, v, w \\in V$ and $\\lambda \\in \\mathbb{R}$: - **translation invariance**, $d_N(u + w, v + w) = N\\bigl((u+w)-(v+w)\\bigr) = N(u-v) = d_N(u,v)$; - **absolute homogeneity**, $d_N(\\lambda u, \\lambda v) = N\\bigl(\\lambda(u-v)\\bigr) = |\\lambda|\\,d_N(u,v)$, by (N2). **Not every metric on a vector space arises from a norm**, and homogeneity is what fails. The published bounded remetrisation [[lem-bounded-remetrisation]] replaces a metric $d$ by $d' = \\min\\{d, 1\\}$, a metric with the same topology whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with $d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute homogeneity would force $d'(\\lambda v, 0_V) = |\\lambda|\\,d'(v, 0_V)$, which is unbounded in $\\lambda$, while $d'$ is bounded by $1$. So the passage from norms to metrics is not reversible, and a statement about a metric on a vector space is strictly weaker than the corresponding statement about a norm.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
      "source_section": "Statement",
      "quote": "**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about $\\mathbb{R}^{n}$ with $n \\ge 1$.** 1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over $\\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every $p \\in \\mathbb{N}$ and every list $u : p \\to V$ ([[def-linear-combination-and-span]]), $$N\\Bigl(\\sum_{j<p} u_j\\Bigr) \\;\\le\\; \\sum_{j<p} N(u_j),$$ and for all $u, w \\in V$, $$\\bigl|N(u) - N(w)\\bigr| \\;\\le\\; N(u - w).$$ Now let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $\\mathbb{R}^{n}$ carry the norms of [[def-p-norms-on-rn]] and write $\\iota$ for the canonical natural ([[def-canonical-natural]]). 2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on $\\mathbb{R}^{n}$ and put $C := \\max\\{\\, N(e_k) : k<n \\,\\}$, a maximum over a nonempty finite set of reals ([[lem-standard-basis-of-f-n]], [[lem-finite-set-has-max]]). Then $C \\ge 0$ and $$N(x) \\;\\le\\; C\\,\\lVert x\\rVert_1 \\qquad \\text{for every } x \\in \\mathbb{R}^{n}.$$ 3. **The comparison chain.** For every $x \\in \\mathbb{R}^{n}$, $$\\lVert x\\rVert_\\infty \\;\\le\\; \\lVert x\\rVert_2 \\;\\le\\; \\lVert x\\rVert_1 \\;\\le\\; \\iota(n)\\,\\lVert x\\rVert_\\infty , \\qquad \\lVert x\\rVert_1 \\;\\le\\; \\sqrt{\\iota(n)}\\;\\lVert x\\rVert_2 .$$ In particular $\\lVert\\cdot\\rVert_1$, $\\lVert\\cdot\\rVert_2$ and $\\lVert\\cdot\\rVert_\\infty$ are pairwise equivalent norms on $\\mathbb{R}^{n}$, with the constants displayed ([[def-equivalent-norms]]). 4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in clause 2, $N : (\\mathbb{R}^{n}, d_2) \\to (\\mathbb{R}, d_{\\mathbb{R}})$ is Lipschitz with constant $C\\sqrt{\\iota(n)}$ ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]], [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]). **Where $n \\ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to exist, and clause 3 mentions $\\lVert\\cdot\\rVert_\\infty$; at $n = 0$ each is a maximum over the empty index set and does not exist, exactly as in [[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis on the dimension and no hypothesis on the space.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-heine-borel-rn",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $\\mathbb{R}^n$ be the set of functions $n \\to \\mathbb{R}$ and let $d_2$ be the Euclidean metric on it ([[lem-metrics-on-rn]]). Then: 1. **Closed boxes are compact.** For reals $a_k \\le b_k$ $(k < n)$ the box $Q = \\{\\, x \\in \\mathbb{R}^n : a_k \\le x_k \\le b_k \\text{ for every } k < n \\,\\}$ is a compact subset of $(\\mathbb{R}^n, d_2)$ ([[def-metric-compactness]]). 2. **Heine-Borel.** A subset $K \\subseteq \\mathbb{R}^n$ is a compact subset of $(\\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\\mathbb{R}^n$ ([[def-metric-topology]]) and bounded ([[def-metric-bounded-diameter]]). 3. **The real line.** A subset $K \\subseteq \\mathbb{R}$ is a compact subset of $(\\mathbb{R}, d_{\\mathbb{R}})$, the usual metric $d_{\\mathbb{R}}(x,y) = |x-y|$ ([[lem-real-line-is-a-metric-space]]), if and only if $K$ is closed in $\\mathbb{R}$ and bounded. **No choice principle is used.** The bisection below halves one coordinate at a time and takes the **left** half whenever the left half still fails to be finitely covered, the right half otherwise: a rule with two outcomes, decided by a property of the box, not a selection. That is the whole reason the theorem is available in ZF, while the general \"complete and totally bounded implies compact\" ([[thm-complete-and-totally-bounded-implies-compact]]) is not. The hypothesis $n \\ge 1$ is inherited from [[lem-metrics-on-rn]], which defines $\\mathbb{R}^n$ and its metrics only there; the last remark below records what happens at $n = 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metric-compactness",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in [[def-metric-topology]] and balls as in [[def-metric-ball]]. - An **open cover** of $(X,d)$ is a family $\\mathcal{U}$ of open subsets of $X$ with $X = \\bigcup \\mathcal{U}$, where $\\bigcup \\mathcal{U} = \\{\\, x \\in X : x \\in U \\text{ for some } U \\in \\mathcal{U} \\,\\}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is itself an open cover. - A family $\\mathcal{V}$ of sets is **finite** when $\\mathcal{V} = \\emptyset$ or there are $n \\in \\mathbb{N}$ and sets $V_0, \\dots, V_n$ with $\\mathcal{V} = \\{V_0, \\dots, V_n\\}$; repetitions in the list are allowed and harmless. - $(X,d)$ is **compact** when every open cover of it has a finite subcover: for every open cover $\\mathcal{U}$, either $X = \\emptyset$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$X = U_0 \\cup \\dots \\cup U_n .$$ - A subset $A \\subseteq X$ is a **compact subset** of $X$ when the metric subspace $(A, d_A)$ is a compact metric space, $d_A$ being the restriction of $d$ to $A \\times A$ ([[def-isometry-and-metric-embedding]]). **Compactness of a subset is defined intrinsically, and only intrinsically.** The last clause speaks about the subspace $(A,d_A)$ and its own open sets, not about families of open subsets of the ambient $X$. The two readings do agree, but that is a theorem and not a convention: it is [[lem-compactness-is-intrinsic]], and no item of this library may use the ambient reading without citing it. Taking the intrinsic reading as the definition is what makes \"compact\" a property of the metric space $(A,d_A)$ alone, so that a set compact in one ambient space is compact in every other one containing it isometrically. **The empty space is compact**, since the empty subfamily of any family covers it; this is the reason the clause above is written with the two cases. The one-point space is compact too, and so is every space listed as $\\{x_0, \\dots, x_n\\}$: given a cover, each $x_i$ lies in some member, and finitely many members chosen in this way already cover. **The finiteness convention, and how it is used both ways.** \"Finite\" above is the listing form, matching the finite lists of [[def-finite-intersection-property]]. It agrees with the definition of finiteness by equinumerosity with a natural number ([[def-countable]]), and both directions of the agreement are available and are used below: - A nonempty finite set $F$ in the sense of [[def-countable]] satisfies $F \\approx m$ for some $m \\ge 1$, and a bijection $m \\to F$ is exactly a listing $F = \\{a_0, \\dots, a_{m-1}\\}$. - Conversely a set listed as $A = \\{a_0, \\dots, a_n\\}$, that is the image of a function $a$ with domain $\\sigma(n)$, is finite in the sense of [[def-countable]]: the map sending $x \\in A$ to the least $i \\le n$ with $a_i = x$ is an injection of $A$ into $\\sigma(n)$, so $A$ is equinumerous with a subset of $\\mathbb{N}$ bounded above, and such a subset is finite ([[lem-subset-of-countable]]). Neither direction uses a choice principle: the second selects nothing, taking a least index instead.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-compact-implies-the-other-compactness-forms",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), with compactness as in [[def-metric-compactness]] and the three variants as in [[def-metric-compactness-variants]]. Then: 1. If $(X,d)$ is compact, it is countably compact. 2. If $(X,d)$ is compact, it is limit point compact. 3. If $(X,d)$ is countably compact, it is sequentially compact. 4. If $(X,d)$ is limit point compact, it is sequentially compact. **Every one of the four is a theorem of ZF.** Where a subsequence is extracted, the index at each stage is the **least** admissible one, which [[thm-well-ordering-principle]] makes canonical and [[thm-recursion]] then assembles into a function; where finitely many indices have to be recovered from finitely many sets, [[lem-finite-choice]] supplies them and is itself a theorem of ZF. Nothing below appeals to countable or to dependent choice.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1",
        "6.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-metric-compactness-variants",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in [[def-metric-topology]] and open covers, subcovers, finiteness and compactness as in [[def-metric-compactness]]. - $(X,d)$ is **countably compact** when every open cover $\\mathcal{U}$ of $X$ that is at most countable ([[def-countable]]) has a finite subcover. - $(X,d)$ is **sequentially compact** when every sequence $(x_k)$ in $X$, that is every function $x : \\mathbb{N} \\to X$ ([[def-sequence]]), has a subsequence $(x_{n_j})$ converging to a point of $X$ ([[def-metric-convergence]]), the index map $n : \\mathbb{N} \\to \\mathbb{N}$ being strictly increasing ([[lem-index-map-grows]]). - $(X,d)$ is **limit point compact** when every infinite subset $A \\subseteq X$ has a limit point in $X$, that is a point $p \\in X$ with $B(p,r) \\cap (A \\setminus \\{p\\}) \\ne \\emptyset$ for every real $r > 0$ ([[def-metric-interior-closure-boundary]]). Here *infinite* means not finite in the sense of [[def-countable]], equivalently not listable as $\\{a_0, \\dots, a_n\\}$ and not empty ([[def-metric-compactness]]). A subset $A \\subseteq X$ is called countably compact, sequentially compact or limit point compact when the metric subspace $(A, d_A)$ is ([[def-isometry-and-metric-embedding]]), exactly as for compactness. **The countable covers may be listed.** A nonempty at most countable family $\\mathcal{U}$ admits a surjection $\\mathbb{N} \\to \\mathcal{U}$ ([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for every sequence $(U_n)_{n \\in \\mathbb{N}}$ of open sets with $X = \\bigcup_{n \\in \\mathbb{N}} U_n$ there are finitely many indices whose sets already cover $X$. That surjection is produced from the countability assumption alone and no choice principle is involved; the empty family covers only the empty space, which is compact anyway. **Limit points are computed where the set lives.** For $S \\subseteq A \\subseteq X$ and $a \\in A$, the identity $B_A(a,r) = B_X(a,r) \\cap A$ ([[def-isometry-and-metric-embedding]]) shows that $a$ is a limit point of $S$ in the subspace $(A,d_A)$ exactly when $a$ is a limit point of $S$ in $X$ and lies in $A$. So \"$A$ is limit point compact\" says that every infinite $S \\subseteq A$ has a limit point **belonging to $A$**; a limit point outside $A$ does not count, and that is what distinguishes the property from a statement about $X$.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1",
        "6.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-metric-compactness",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in [[def-metric-topology]] and balls as in [[def-metric-ball]]. - An **open cover** of $(X,d)$ is a family $\\mathcal{U}$ of open subsets of $X$ with $X = \\bigcup \\mathcal{U}$, where $\\bigcup \\mathcal{U} = \\{\\, x \\in X : x \\in U \\text{ for some } U \\in \\mathcal{U} \\,\\}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is itself an open cover. - A family $\\mathcal{V}$ of sets is **finite** when $\\mathcal{V} = \\emptyset$ or there are $n \\in \\mathbb{N}$ and sets $V_0, \\dots, V_n$ with $\\mathcal{V} = \\{V_0, \\dots, V_n\\}$; repetitions in the list are allowed and harmless. - $(X,d)$ is **compact** when every open cover of it has a finite subcover: for every open cover $\\mathcal{U}$, either $X = \\emptyset$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$X = U_0 \\cup \\dots \\cup U_n .$$ - A subset $A \\subseteq X$ is a **compact subset** of $X$ when the metric subspace $(A, d_A)$ is a compact metric space, $d_A$ being the restriction of $d$ to $A \\times A$ ([[def-isometry-and-metric-embedding]]). **Compactness of a subset is defined intrinsically, and only intrinsically.** The last clause speaks about the subspace $(A,d_A)$ and its own open sets, not about families of open subsets of the ambient $X$. The two readings do agree, but that is a theorem and not a convention: it is [[lem-compactness-is-intrinsic]], and no item of this library may use the ambient reading without citing it. Taking the intrinsic reading as the definition is what makes \"compact\" a property of the metric space $(A,d_A)$ alone, so that a set compact in one ambient space is compact in every other one containing it isometrically. **The empty space is compact**, since the empty subfamily of any family covers it; this is the reason the clause above is written with the two cases. The one-point space is compact too, and so is every space listed as $\\{x_0, \\dots, x_n\\}$: given a cover, each $x_i$ lies in some member, and finitely many members chosen in this way already cover. **The finiteness convention, and how it is used both ways.** \"Finite\" above is the listing form, matching the finite lists of [[def-finite-intersection-property]]. It agrees with the definition of finiteness by equinumerosity with a natural number ([[def-countable]]), and both directions of the agreement are available and are used below: - A nonempty finite set $F$ in the sense of [[def-countable]] satisfies $F \\approx m$ for some $m \\ge 1$, and a bijection $m \\to F$ is exactly a listing $F = \\{a_0, \\dots, a_{m-1}\\}$. - Conversely a set listed as $A = \\{a_0, \\dots, a_n\\}$, that is the image of a function $a$ with domain $\\sigma(n)$, is finite in the sense of [[def-countable]]: the map sending $x \\in A$ to the least $i \\le n$ with $a_i = x$ is an injection of $A$ into $\\sigma(n)$, so $A$ is equinumerous with a subset of $\\mathbb{N}$ bounded above, and such a subset is finite ([[lem-subset-of-countable]]). Neither direction uses a choice principle: the second selects nothing, taking a least index instead.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1",
        "7.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-isometry-and-metric-embedding",
      "source_section": "Definition",
      "quote": "Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]). **Isometric embedding and isometry.** A function $f : X \\to Y$ is an **isometric embedding** if $$d_Y\\big(f(x), f(x')\\big) = d_X(x,x') \\qquad \\text{for all } x, x' \\in X ,$$ and an **isometry** if it is in addition bijective ([[def-injection-surjection-bijection]]). Two metric spaces are **isometric** if some isometry between them exists. **Subspace metric.** Let $A \\subseteq X$ and let $$d_A := d_X \\restriction (A \\times A)$$ be the restriction of $d_X$ to pairs from $A$. Then $d_A$ is a metric on $A$: the three axioms (M1), (M2), (M3) of [[def-metric-space]] are conditions on triples of points, and each holds for points of $A$ because it holds for points of $X$. The pair $(A, d_A)$ is the **metric subspace** $A$ of $X$, and the inclusion $A \\to X$ is an isometric embedding by construction. The metric topology of $d_A$ ([[def-metric-topology]]) is the **subspace topology** of $A$. **Balls of a subspace are traces of balls of the ambient space.** For $a \\in A$ and $r > 0$, $$B_A(a,r) = B_X(a,r) \\cap A ,$$ directly from the definitions: a point $z$ lies in the left side exactly when $z \\in A$ and $d_A(a,z) = d_X(a,z) < r$ ([[def-metric-ball]]). This is why the ambient space is always written into the ball notation, and it is the source of every apparent paradox about balls in subspaces.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1",
        "7.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-metric-convergence",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]). A **sequence in $X$** is a function $x : \\mathbb{N} \\to X$, written $(x_k)$ with $x_k := x(k)$. As everywhere in this library, $\\mathbb{N}$ contains $0$ ([[def-natural-numbers]]) and a sequence is indexed from $0$ ([[def-sequence]]); an index range copied from a text that starts at $1$ must be shifted before it is used here. Let $(x_k)$ be a sequence in $X$ and $p \\in X$. The function $k \\mapsto d(x_k, p)$ is a sequence of reals ([[def-sequence]]), and it is nonnegative ([[lem-metric-nonnegativity]]), so $|d(x_k,p)| = d(x_k,p)$ ([[def-abs-value]]). Define $$x_k \\longrightarrow p \\text{ in } (X,d) \\quad :\\Longleftrightarrow \\quad d(x_k,p) \\longrightarrow 0 \\text{ in } \\mathbb{R},$$ the convergence on the right being that of [[def-real-limit]]. Unwound, this says: for every **rational** $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $d(x_k, p) < \\varepsilon$ for every $k \\ge K$. We then call $p$ a **limit** of $(x_k)$, and say $(x_k)$ **converges** in $(X,d)$ if it has a limit. **Rational and real $\\varepsilon$ agree here, as they do on the real line.** [[def-real-limit]] tests convergence against rational $\\varepsilon$ only, and its own remark, restated for sequences in [[def-sequence]], records that nothing is lost: below any real $\\eta > 0$ lies a positive rational ([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for $\\eta$. So a proof may establish convergence by producing an index for every real $\\varepsilon > 0$, and may use a convergence hypothesis at a real $\\varepsilon$ by first passing to a rational below it. Both moves are used on this page and are always cited. **Subsequences and subsequential limits.** A **subsequence** of $(x_k)$ is the composite $x \\circ n$ for a strictly increasing $n : \\mathbb{N} \\to \\mathbb{N}$, written $(x_{n_j})$, exactly as for sequences of reals ([[def-sequence]]); and $p$ is a **subsequential limit** of $(x_k)$ in $(X,d)$ when some subsequence converges to $p$, which is the metric-space form of [[def-subsequential-limit]].",
      "quote_selection": "full-source-section",
      "uses": [
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-subsequence-inherits-limit",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals converging to $x \\in \\mathbb{R}$ ([[def-sequence]], [[def-real-limit]]), and let $n : \\mathbb{N} \\to \\mathbb{N}$ be strictly increasing. Then the subsequence $(x_{n_k})$ converges to $x$. **Divergence test.** Consequently, if two subsequences of $(x_k)$ converge to different limits, then $(x_k)$ does not converge.",
      "quote_selection": "full-source-section",
      "uses": [
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-index-map-grows",
      "source_section": "Statement",
      "quote": "Let $n : \\mathbb{N} \\to \\mathbb{N}$ be a function, written $k \\mapsto n_k$, and recall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$ ([[def-sequence]], [[def-nat-order]]). 1. **Consecutive comparisons suffice.** If $n_i < n_{\\sigma(i)}$ for every $i \\in \\mathbb{N}$, then $n$ is strictly increasing. 2. **Growth.** If $n$ is strictly increasing then $n_k \\ge k$ for every $k \\in \\mathbb{N}$. Claim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is what every later subsequence argument uses.",
      "quote_selection": "full-source-section",
      "uses": [
        "6.1",
        "7.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The range of the sequence is nonempty and bounded, so there are $q \\in \\mathbb{R}^{n}$ and a real $r > 0$ with $d_2(x^{(j)}, q) < r$ for every $j \\in \\mathbb{N}$.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Put $M := r + \\lVert q\\rVert_2$, a real with $M > 0$. By the triangle inequality for the norm, $\\lVert x^{(j)}\\rVert_2 \\le \\lVert x^{(j)} - q\\rVert_2 + \\lVert q\\rVert_2 = d_2(x^{(j)},q) + \\lVert q\\rVert_2 < M$ for every $j$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "For every $j$ and every $k<n$: $|x^{(j)}_k| \\le \\lVert x^{(j)}\\rVert_2 < M$, hence $-M \\le x^{(j)}_k \\le M$.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Let $Q := \\{\\, y \\in \\mathbb{R}^{n} : -M \\le y_k \\le M \\text{ for every } k<n \\,\\}$. Since $-M \\le M$, $Q$ is a compact subset of $(\\mathbb{R}^{n},d_2)$, and by step 3.1 every term $x^{(j)}$ lies in $Q$.",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "L3"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "By [L5] the metric subspace $(Q, d_Q)$ is a compact metric space, and by [L4] it is sequentially compact.",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "$\\bigl(x^{(j)}\\bigr)$ is a sequence in $Q$, so there are a strictly increasing $i : \\mathbb{N} \\to \\mathbb{N}$ and $p \\in Q$ with $x^{(i_j)} \\to p$ in $(Q, d_Q)$.",
      "step": "6.1",
      "inputs": [
        "step 4.1",
        "step 5.1",
        "L4",
        "L6"
      ]
    },
    {
      "id": "step-7.1",
      "claim": "Since $d_Q$ is the restriction of $d_2$ to $Q \\times Q$, the reals $d_Q(x^{(i_j)}, p)$ and $d_2(x^{(i_j)}, p)$ are equal for every $j$, so $x^{(i_j)} \\to p$ in $(\\mathbb{R}^{n},d_2)$ as well.",
      "step": "7.1",
      "inputs": [
        "step 6.1",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-8.1",
      "claim": "So the bounded sequence $\\bigl(x^{(j)}\\bigr)$ has a subsequence converging in $(\\mathbb{R}^{n},d_2)$, which is the claim.",
      "step": "8.1",
      "inputs": [
        "step 6.1",
        "step 7.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement: The coordinate dimension is explicitly at least one; any interval occurring is nonempty under a<=b or a<b. Let $n \\in \\mathbb{N}$ with $n \\ge 1$ and let $\\bigl(x^{(j)}\\bigr)_{j\\in\\mathbb{N}}$ be a sequence in $\\mathbb{R}^{n}$ whose range $\\{\\, x^{(j)} : j \\in \\mathbb{N} \\,\\}$ is a bound"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "cor-bolzano-weierstrass-in-rn: zero is not a distinguished parameter case in the claim; ordinary zero-valued functions, vectors, or bounds remain covered by its universal hypotheses."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement: The one-dimensional, one-term, or p=1 boundary is within the stated range (or is the explicit minimal witness) and was checked against the proof. Let $n \\in \\mathbb{N}$ with $n \\ge 1$ and let $\\bigl(x^{(j)}\\bigr)_{j\\in\\mathbb{N}}$ be a sequence in $\\mathbb{R}^{n}$ whose range $\\{\\, x^{(j)} : j \\in \\mathbb{N} \\,\\}$ is a bound"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 7.1: Since $d_Q$ is the restriction of $d_2$ to $Q \\times Q$, the reals $d_Q(x^{(i_j)}, p)$ and $d_2(x^{(i_j)}, p)$ are equal for every $j$, so $x^{(i_j)} \\to p$ in $(\\mathbb{R}^{n},d_2)$ as well."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "cor-bolzano-weierstrass-in-rn: no closed-interval endpoint, exponent endpoint, or finite-index endpoint affects the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: The range of the sequence is nonempty and bounded, so there are $q \\in \\mathbb{R}^{n}$ and a real $r > 0$ with $d_2(x^{(j)}, q) < r$ for every $j \\in \\mathbb{N}$."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cor-bolzano-weierstrass-in-rn: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cor-bolzano-weierstrass-in-rn: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the A2 contract. Alpha assigns the independent proof-refuter route at A5/A6."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-all-norms-on-rn-are-equivalent",
    "declared_target": "thm-all-norms-on-rn-are-equivalent",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-equivalent-norms",
    "declared_target": "def-equivalent-norms",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-heine-borel-rn",
    "declared_target": "thm-heine-borel-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-compact-implies-the-other-compactness-forms",
    "declared_target": "thm-compact-implies-the-other-compactness-forms",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-metric-compactness-equivalences",
    "declared_target": "thm-metric-compactness-equivalences",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-compactness",
    "declared_target": "def-metric-compactness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-compactness-variants",
    "declared_target": "def-metric-compactness-variants",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-bounded-diameter",
    "declared_target": "def-metric-bounded-diameter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-ball",
    "declared_target": "def-metric-ball",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-bolzano-weierstrass",
    "declared_target": "thm-bolzano-weierstrass",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-dependent-choice",
    "declared_target": "def-dependent-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-metrics-on-rn",
    "declared_target": "lem-metrics-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-convergence",
    "declared_target": "def-metric-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-sequence",
    "declared_target": "def-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-subsequence-inherits-limit",
    "declared_target": "lem-subsequence-inherits-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-index-map-grows",
    "declared_target": "lem-index-map-grows",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-p-norms-on-rn",
    "declared_target": "def-p-norms-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "declared_target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-norm-and-normed-space",
    "declared_target": "def-norm-and-normed-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "declared_target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-isometry-and-metric-embedding",
    "declared_target": "def-isometry-and-metric-embedding",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-of-square-roots",
    "declared_target": "thm-of-square-roots",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bolzano-weierstrass-in-rn",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (24)

### `def-dependent-choice`

````markdown
---
id: def-dependent-choice
kind: definition
title: "The axiom of dependent choice: a relation in which every element is related to something admits an $\\mathbb{N}$-indexed chain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable-choice, def-sequence, def-natural-numbers]
justified_by: []
aliases: [def-dc]
landmark: true
short: "dependent choice (DC)"
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
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$.
Call $R$ **entire on $X$** when

$$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$

The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following
statement.

> For every nonempty set $X$, every relation $R$ entire on $X$, and every
> $a \in X$, there is a sequence $x : \mathbb{N} \to X$ ([[def-sequence]],
> [[def-natural-numbers]]) with
> $$x_0 = a \qquad \text{and} \qquad x_n \mathbin{R} x_{n+1} \ \text{ for every } n \in \mathbb{N}.$$

As everywhere in this library $\mathbb{N}$ contains $0$, and the sequence is
indexed from $0$; the term $x_0$ is the prescribed starting point $a$ and every
later term is related to its predecessor.

**What DC adds to what came before.** [[def-choice-function]] and
[[def-axiom-of-choice]] select one element from each member of a family that is
fixed in advance, and [[def-countable-choice]] does the same for a family indexed
by $\mathbb{N}$. In both, the family is given before any selection is made. DC is
the principle needed when the $n$-th set to select from is not known until the
first $n$ selections have been made: here the admissible values of $x_{n+1}$ are
exactly the $R$-successors of $x_n$, so the family being chosen from is built
along the choosing. That is precisely the situation $\mathrm{AC}_\omega$ does not
cover, and it is why a construction "pick $x_{n+1}$ depending on $x_n$, for every
$n$ at once" is not licensed by countable choice.

**The starting point may be dropped.** The formally weaker statement obtained by
deleting the clause $x_0 = a$ — for every nonempty $X$ and every entire $R$ there
is a sequence with $x_n \mathbin{R} x_{n+1}$ for all $n$ — is an immediate
consequence of the form above, since $X$ is nonempty and any of its elements may
be taken as $a$. The reverse derivation is standard and is not needed anywhere in
this library, so it is not carried out; every use below prescribes $x_0$.

**$R$ need not be an order and the terms need not be distinct.** What DC delivers
is a sequence, that is a function $\mathbb{N} \to X$, not a chain in the
order-theoretic sense ([[def-chain]]). The relation may be symmetric, and the
sequence may repeat a value or be constant; all that is asserted is
$x_n \mathbin{R} x_{n+1}$ at every index.

## Remarks

**Where DC sits among the choice principles.** It is a standard fact, proved in
the references and **not** in this library, that

$$\mathrm{AC} \;\Longrightarrow\; \mathrm{DC} \;\Longrightarrow\; \mathrm{AC}_\omega ,$$

and that neither implication reverses. The non-reversals are relative-consistency
results: what they establish is that ZF, if consistent, does not prove the
missing implications, never that those implications are false. This library
contains neither forcing nor permutation models and proves no independence
result, so all of that is quoted from the references and used nowhere.

**Nothing in this library proves DC, and nothing assumes it silently.** Like
[[def-axiom-of-choice]] and [[def-countable-choice]], DC is a statement that may
be assumed or not. Every theorem whose proof uses it says so in its own
statement, and the accounting for the compactness page is collected in
[[rem-compactness-choice-ledger-metric]].

**An upper bound, never a lower one.** When a later item records that its proof
uses DC, the claim made is that the argument given here is carried out in
$\mathrm{ZF} + \mathrm{DC}$. No item claims that DC is *necessary* for the
statement proved, because establishing necessity means separating the statement
from ZF, and that is an independence result of exactly the kind this library does
not prove.
````

### `def-equivalent-norms`

````markdown
---
id: def-equivalent-norms
kind: definition
title: "Equivalent norms, and the dictionary with equivalent metrics"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-equivalent-metrics, thm-metric-equivalence-hierarchy, def-metric-topology, def-metric-convergence, def-cauchy-in-metric, def-metric-uniform-continuity, lem-bounded-remetrisation, def-vector-space, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over $\mathbb{R}$ ([[def-vector-space]]) and let $M$
and $N$ be norms on $V$ ([[def-norm-and-normed-space]]). $M$ and $N$ are
**equivalent** when there are reals $c > 0$ and $C > 0$ with

$$c\,M(v) \;\le\; N(v) \;\le\; C\,M(v) \qquad \text{for every } v \in V .$$

The constants are not part of the data and are not unique: any smaller $c$ and
any larger $C$ serve as well.

### This is an equivalence relation on the norms on $V$

- **Reflexive:** take $c = C = 1$.
- **Symmetric:** from $cM \le N \le CM$ and $c, C > 0$ one gets
  $C^{-1}N \le M \le c^{-1}N$, dividing by the positive constants
  ([[lem-of-inverse-positive]]).
- **Transitive:** if $cM \le N \le CM$ and $c'N \le P \le C'N$ then
  $c'c\,M \le P \le C'C\,M$, and $c'c > 0$, $C'C > 0$, a product of positives
  being positive.

### The dictionary with equivalent metrics

Let $d_M(u,v) = M(u-v)$ and $d_N(u,v) = N(u-v)$ be the induced metrics
([[def-norm-and-normed-space]]). Substituting $v := u - w$ in the displayed
condition gives

$$c\,d_M(u,w) \;\le\; d_N(u,w) \;\le\; C\,d_M(u,w) \qquad \text{for all } u, w \in V ,$$

which is **verbatim the Lipschitz equivalence** of $d_M$ and $d_N$ in the sense
of [[def-equivalent-metrics]], with $\alpha = c$ and $\beta = C$. That is the
**strongest** of the three tiers that item distinguishes: by
[[thm-metric-equivalence-hierarchy]], Lipschitz equivalence implies uniform
equivalence, which implies topological equivalence. So equivalent norms give

- the same open sets, hence the same closed sets, closures and interiors
  ([[def-metric-topology]]);
- the same uniformly continuous maps into and out of $V$
  ([[def-metric-uniform-continuity]]);
- the same convergent sequences with the same limits, and the same Cauchy
  sequences ([[def-metric-convergence]], [[def-cauchy-in-metric]]).

The last line deserves its two-line verification, since it is used constantly
below and is not literally a clause of [[thm-metric-equivalence-hierarchy]]. If
$d_M(v_k, v) \to 0$ then $0 \le d_N(v_k,v) \le C\,d_M(v_k,v)$, so given a
rational $\varepsilon > 0$ an index beyond which $d_M(v_k,v) < \varepsilon/C$
serves for $d_N$; the converse uses $d_M \le c^{-1}d_N$ in the same way. The
Cauchy statement is the same estimate applied to $d_N(v_k,v_l)$. In particular
$(V, d_M)$ is complete if and only if $(V,d_N)$ is.

**Naming.** Many texts say *strongly equivalent* for what
[[def-equivalent-metrics]] calls Lipschitz equivalent, and simply *equivalent*
for what it calls topologically equivalent. As there, this library always writes
the qualifier for metrics. For **norms** there is no fork to guard against: the
condition displayed above is the only one anyone calls equivalence of norms, and
it is always the Lipschitz-strength one.

## Remarks

- **The converse of the dictionary fails.** A metric on $V$ that is equivalent to
  a norm metric need not itself come from a norm: [[lem-bounded-remetrisation]]
  turns any metric $d$ into $d' = \min\{d,1\}$, uniformly equivalent to $d$ and
  bounded, and a bounded metric on a nonzero vector space is not induced by any
  norm, since absolute homogeneity would make $d'(\lambda v, 0)$ unbounded in
  $\lambda$ ([[def-norm-and-normed-space]]). So "equivalent to a norm metric" is
  strictly weaker than "induced by an equivalent norm".

- **Equivalence is a statement about a fixed vector space.** Two norms on
  different spaces are never compared. On $\mathbb{R}^{n}$ with $n \ge 1$ the
  norms $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
  $\lVert\cdot\rVert_\infty$ of [[def-p-norms-on-rn]] are equivalent, with
  explicit constants proved in
  [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]; that every
  pair of norms on $\mathbb{R}^{n}$ is equivalent is
  [[thm-all-norms-on-rn-are-equivalent]]. Neither statement survives to spaces
  that are not finite-dimensional, and the companion page carries the witness.

- **Equivalence says nothing about the geometry.** Equivalent norms have the same
  convergent sequences and the same open sets; they may still have quite
  different unit balls, and one of them may come from an inner product while the
  other does not. [[lem-p-norms-are-norms-and-induce-the-published-metrics]]
  records the metric identifications and nothing more.
````

### `def-isometry-and-metric-embedding`

````markdown
---
id: def-isometry-and-metric-embedding
kind: definition
title: "Isometry, isometric embedding, and the subspace metric on a subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-topology, def-injection-surjection-bijection,
       def-metric-ball]
justified_by: []
aliases: [def-subspace-metric, def-isometry]
landmark: false
short: "isometry, subspace metric"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Isometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isometry"
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]).

**Isometric embedding and isometry.** A function $f : X \to Y$ is an
**isometric embedding** if

$$d_Y\big(f(x), f(x')\big) = d_X(x,x') \qquad \text{for all } x, x' \in X ,$$

and an **isometry** if it is in addition bijective
([[def-injection-surjection-bijection]]). Two metric spaces are **isometric** if
some isometry between them exists.

**Subspace metric.** Let $A \subseteq X$ and let

$$d_A := d_X \restriction (A \times A)$$

be the restriction of $d_X$ to pairs from $A$. Then $d_A$ is a metric on $A$:
the three axioms (M1), (M2), (M3) of [[def-metric-space]] are conditions on
triples of points, and each holds for points of $A$ because it holds for points
of $X$. The pair $(A, d_A)$ is the **metric subspace** $A$ of $X$, and the
inclusion $A \to X$ is an isometric embedding by construction. The metric
topology of $d_A$ ([[def-metric-topology]]) is the **subspace topology** of $A$.

**Balls of a subspace are traces of balls of the ambient space.** For $a \in A$
and $r > 0$,

$$B_A(a,r) = B_X(a,r) \cap A ,$$

directly from the definitions: a point $z$ lies in the left side exactly when
$z \in A$ and $d_A(a,z) = d_X(a,z) < r$ ([[def-metric-ball]]). This is why the
ambient space is always written into the ball notation, and it is the source of
every apparent paradox about balls in subspaces.

## Remarks

- **An isometric embedding is automatically injective**, and it identifies $X$
  with the subspace $f[X]$ of $Y$, topology and all; that is
  [[lem-isometry-is-an-embedding]]. The word *embedding* is therefore justified
  rather than merely suggestive.
- **A bijective isometric embedding has an isometric inverse.** If $f$ is an
  isometry then $f^{-1}$ satisfies
  $d_X(f^{-1}(y), f^{-1}(y')) = d_Y(y,y')$, because writing $y = f(x)$ and
  $y' = f(x')$ turns that into the defining identity of $f$. So "isometric" is a
  symmetric relation between metric spaces, and it is transitive because a
  composite of isometries is one.
- **Isometry is much finer than having the same topology.** Isometric spaces are
  homeomorphic, but $\mathbb{R}$ with $d(x,y) = |x-y|$ and $\mathbb{R}$ with
  $\min\{|x-y|, 1\}$ have the same topology and are not isometric, the second
  being bounded and the first not
  ([[lem-bounded-remetrisation]], [[lem-real-line-is-a-metric-space]]).
````

### `def-metric-ball`

````markdown
---
id: def-metric-ball
kind: definition
title: "Open ball, closed ball and sphere in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-real-order, lem-metric-nonnegativity,
       def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [def-open-ball, def-closed-ball, def-sphere]
landmark: true
short: "$B(x,r)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Ball (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ball_(mathematics)"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \in X$ and let
$r \in \mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define

$$B(x,r) := \{\, y \in X : d(x,y) < r \,\}, \qquad \bar B(x,r) := \{\, y \in X : d(x,y) \le r \,\}, \qquad S(x,r) := \{\, y \in X : d(x,y) = r \,\}.$$

$B(x,r)$ is the **open ball**, $\bar B(x,r)$ the **closed ball** and $S(x,r)$ the
**sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly
positive real; a ball of radius $0$ or of negative radius is never written in
this library.

**Immediate consequences of the definitions.** For every $x \in X$ and $r > 0$:

- $x \in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]);
  in particular open and closed balls are nonempty.
- $B(x,r) \subseteq \bar B(x,r)$ and $S(x,r) \subseteq \bar B(x,r)$, and
  $\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of
  the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]):
  each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$.
- If $0 < s \le r$ then $B(x,s) \subseteq B(x,r)$ and
  $\bar B(x,s) \subseteq \bar B(x,r)$, by transitivity of the order.
- Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the
  radius convention, and it forces it for the **open** ball only: if $r \le 0$
  then $B(x,r) = \{y : d(x,y) < r\}$ is empty, because $d(x,y) \ge 0 \ge r$
  for every $y$. The other two sets behave differently at $r = 0$, and the
  convention $r > 0$ excludes them for uniformity rather than for emptiness:
  $\bar B(x,0) = S(x,0) = \{x\}$, since $d(x,y) \le 0$ together with
  $d(x,y) \ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all
  three sets are empty.

**A sphere may be empty, and so the three sets are not on a par.** For $r > 0$
the open and closed balls always contain $x$, but nothing in the definition
produces a point at distance exactly $r$ from $x$. If a metric takes only the
values $0$ and $1$, as the discrete metric on the companion page does, then
$S(x,2) = \emptyset$ while $B(x,2) = \bar B(x,2)$ is the whole space. So
nonemptiness of a sphere is never available by convention: where it is used, it
is proved.

**The ambient space is part of the notation.** $B(x,r)$ depends on $(X,d)$ and
not on $x$ and $r$ alone. When more than one space or more than one metric is in
play we write $B_X(x,r)$, or $B_d(x,r)$, and likewise for $\bar B$ and $S$. This
matters as soon as subspaces appear ([[def-isometry-and-metric-embedding]]): a
ball of a subspace is the trace on it of a ball of the ambient space, and the two
are different sets.

## Remarks

- **The names "open ball" and "closed ball" are justified, not merely
  suggestive.** That $B(x,r)$ is an open set and $\bar B(x,r)$ a closed set in
  the metric topology is proved in [[thm-metric-open-set-algebra]]; the words are
  used here only as names for the three sets displayed above.
- **The closed ball is not in general the closure of the open ball**, and the
  sphere is not in general the boundary of either. Both failures are recorded on
  this page as [[fs-closed-ball-is-the-closure-of-the-open-ball]] and witnessed
  on the companion page. The safe reading of the three names is the displayed
  one and nothing more.
````

### `def-metric-bounded-diameter`

````markdown
---
id: def-metric-bounded-diameter
kind: definition
title: "Bounded subset, diameter, distance from a point to a set, and distance between two sets in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-ball, def-bounded-set, def-infimum,
       thm-infimum-property, lem-sup-unique, def-complete-ordered-field,
       lem-metric-nonnegativity, rem-sup-conventions, lem-of-add-order,
       def-ordered-field]
justified_by: []
aliases: [def-metric-diameter, def-distance-to-set]
landmark: false
short: "bounded, $\\operatorname{diam}$, $d(x,A)$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Bounded set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bounded_set"
    - title: "Diameter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Diameter"
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let
$A, B \subseteq X$.

**Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$
and a real $r > 0$ with $A \subseteq B(x_0, r)$ ([[def-metric-ball]]). The space
$(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself.

**Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and
bounded, and put

$$D(A) := \{\, d(a,b) : a, b \in A \,\} \subseteq \mathbb{R}.$$

Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and
$r$ with $A \subseteq B(x_0,r)$, every $a, b \in A$ satisfy
$d(a,b) \le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry
([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]],
[[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$
([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\mathbb{R}$ by
the least-upper-bound property ([[def-complete-ordered-field]]), and that bound
is unique ([[lem-sup-unique]]). Define

$$\operatorname{diam}(A) := \sup D(A).$$

**Distance from a point to a set, for nonempty $A$ only.** Let $x \in X$ and let
$A$ be nonempty, and put $E(x,A) := \{\, d(x,a) : a \in A \,\}$. Then $E(x,A)$ is
nonempty and bounded below by $0$, since a metric is nonnegative
([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower
bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]].
Define

$$d(x,A) := \inf E(x,A).$$

**Distance between two sets, for nonempty $A$ and $B$ only.** Put
$E(A,B) := \{\, d(a,b) : a \in A,\ b \in B \,\}$, again nonempty and bounded
below by $0$, and define

$$d(A,B) := \inf E(A,B).$$

**Every one of the three scope restrictions is load bearing.** In this library
$\sup$ and $\inf$ denote real numbers and are written only after existence has
been established; the extended real line is introduced on a later page and is
not used for the suprema and infima taken here, and no convention
$\sup \emptyset = -\infty$ is in force in this development
([[rem-sup-conventions]]). Accordingly:

- $\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and**
  bounded. It is not defined for $A = \emptyset$, and it is not defined, not even
  as an infinite value, for an unbounded $A$.
- $d(x,A)$ is defined exactly when $A \ne \emptyset$, and $d(A,B)$ exactly when
  both $A$ and $B$ are nonempty. No boundedness is needed for these two, because
  $0$ is always a lower bound.

## Remarks

- **Diameter and the distance functions are nonnegative.** For nonempty bounded
  $A$ and any $a \in A$ we have $0 = d(a,a) \in D(A)$, so
  $\operatorname{diam}(A) \ge 0$; and $d(x,A) \ge 0$, $d(A,B) \ge 0$ because $0$
  is a lower bound of the sets they are infima of
  ([[lem-metric-nonnegativity]], [[def-infimum]]).
- **$d(A,B)$ is not a metric on the nonempty subsets of $X$.** It is symmetric
  and vanishes on $A = B$, but two distinct disjoint sets can be at distance $0$,
  so the separation axiom (M1) of [[def-metric-space]] fails; the witness is on
  the companion page. The letter $d$ is reused for three different functions
  here, the metric, the point-to-set distance and the set-to-set distance, only
  because the arguments make the intended one unambiguous.
- **$d(x,A)$ is the special case $d(\{x\},A)$**, since
  $E(\{x\},A) = E(x,A)$, and the two infima therefore agree by uniqueness
  ([[lem-sup-unique]]).
````

### `def-metric-compactness`

````markdown
---
id: def-metric-compactness
kind: definition
title: "Open cover, subcover, compact metric space, and compact subset of a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-topology, def-metric-ball, def-isometry-and-metric-embedding, def-countable, lem-subset-of-countable]
justified_by: []
aliases: [def-compact-metric-space]
landmark: true
short: "open cover, compact metric space"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Cover (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cover_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in
[[def-metric-topology]] and balls as in [[def-metric-ball]].

- An **open cover** of $(X,d)$ is a family $\mathcal{U}$ of open subsets of $X$
  with $X = \bigcup \mathcal{U}$, where
  $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily
  $\mathcal{V} \subseteq \mathcal{U}$ that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \emptyset$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,d)$ is **compact** when every open cover of it has a finite subcover: for
  every open cover $\mathcal{U}$, either $X = \emptyset$ and the empty subfamily
  covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the metric
  subspace $(A, d_A)$ is a compact metric space, $d_A$ being the restriction of
  $d$ to $A \times A$ ([[def-isometry-and-metric-embedding]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A,d_A)$ and its own open sets, not
about families of open subsets of the ambient $X$. The two readings do agree,
but that is a theorem and not a convention: it is
[[lem-compactness-is-intrinsic]], and no item of this library may use the
ambient reading without citing it. Taking the intrinsic reading as the
definition is what makes "compact" a property of the metric space $(A,d_A)$
alone, so that a set compact in one ambient space is compact in every other one
containing it isometrically.

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. The
one-point space is compact too, and so is every space listed as
$\{x_0, \dots, x_n\}$: given a cover, each $x_i$ lies in some member, and
finitely many members chosen in this way already cover.

**The finiteness convention, and how it is used both ways.** "Finite" above is
the listing form, matching the finite lists of
[[def-finite-intersection-property]]. It agrees with the definition of
finiteness by equinumerosity with a natural number ([[def-countable]]), and
both directions of the agreement are available and are used below:

- A nonempty finite set $F$ in the sense of [[def-countable]] satisfies
  $F \approx m$ for some $m \ge 1$, and a bijection $m \to F$ is exactly a
  listing $F = \{a_0, \dots, a_{m-1}\}$.
- Conversely a set listed as $A = \{a_0, \dots, a_n\}$, that is the image of a
  function $a$ with domain $\sigma(n)$, is finite in the sense of
  [[def-countable]]: the map sending $x \in A$ to the least $i \le n$ with
  $a_i = x$ is an injection of $A$ into $\sigma(n)$, so $A$ is equinumerous with
  a subset of $\mathbb{N}$ bounded above, and such a subset is finite
  ([[lem-subset-of-countable]]).

Neither direction uses a choice principle: the second selects nothing, taking a
least index instead.

## Remarks

**Why open covers rather than closed ones.** Nothing in the definition would
break if $\mathcal{U}$ were allowed to consist of arbitrary sets, but the
resulting notion would be uninteresting: every space is covered by its
singletons, and only a finite space would survive. Openness of the members is
what makes the condition a genuine restriction, and it is what
[[lem-compactness-is-intrinsic]] has to keep track of when the ambient space
changes.

**A warning about the word "cover".** A family may cover $A \subseteq X$ without
being a family of subsets of $A$: the members are open subsets of $X$ and their
union merely contains $A$. That is the ambient reading, and it is a different
statement from "$\mathcal{U}$ is an open cover of the metric space $(A,d_A)$",
whose members are open subsets of $A$. Which of the two is meant is written out
everywhere on this page.
````

### `def-metric-compactness-variants`

````markdown
---
id: def-metric-compactness-variants
kind: definition
title: "Countably compact, sequentially compact and limit point compact metric spaces"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-compactness, def-metric-space, def-sequence, def-metric-convergence, lem-index-map-grows, def-metric-interior-closure-boundary, def-countable, lem-countable-iff-surjection-from-n, def-metric-topology, def-isometry-and-metric-embedding]
justified_by: []
aliases: [def-sequentially-compact-metric, def-limit-point-compact-metric, def-countably-compact-metric]
landmark: true
short: "countably, sequentially, limit point compact"
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
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "Limit point compact (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point_compact"
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in
[[def-metric-topology]] and open covers, subcovers, finiteness and compactness as
in [[def-metric-compactness]].

- $(X,d)$ is **countably compact** when every open cover $\mathcal{U}$ of $X$
  that is at most countable ([[def-countable]]) has a finite subcover.
- $(X,d)$ is **sequentially compact** when every sequence $(x_k)$ in $X$, that is
  every function $x : \mathbb{N} \to X$ ([[def-sequence]]), has a subsequence
  $(x_{n_j})$ converging to a point of $X$ ([[def-metric-convergence]]), the
  index map $n : \mathbb{N} \to \mathbb{N}$ being strictly increasing
  ([[lem-index-map-grows]]).
- $(X,d)$ is **limit point compact** when every infinite subset $A \subseteq X$
  has a limit point in $X$, that is a point $p \in X$ with
  $B(p,r) \cap (A \setminus \{p\}) \ne \emptyset$ for every real $r > 0$
  ([[def-metric-interior-closure-boundary]]). Here *infinite* means not finite in
  the sense of [[def-countable]], equivalently not listable as
  $\{a_0, \dots, a_n\}$ and not empty ([[def-metric-compactness]]).

A subset $A \subseteq X$ is called countably compact, sequentially compact or
limit point compact when the metric subspace $(A, d_A)$ is
([[def-isometry-and-metric-embedding]]), exactly as for compactness.

**The countable covers may be listed.** A nonempty at most countable family
$\mathcal{U}$ admits a surjection $\mathbb{N} \to \mathcal{U}$
([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for
every sequence $(U_n)_{n \in \mathbb{N}}$ of open sets with
$X = \bigcup_{n \in \mathbb{N}} U_n$ there are finitely many indices whose sets
already cover $X$. That surjection is produced from the countability assumption
alone and no choice principle is involved; the empty family covers only the empty
space, which is compact anyway.

**Limit points are computed where the set lives.** For $S \subseteq A \subseteq X$
and $a \in A$, the identity $B_A(a,r) = B_X(a,r) \cap A$
([[def-isometry-and-metric-embedding]]) shows that $a$ is a limit point of $S$ in
the subspace $(A,d_A)$ exactly when $a$ is a limit point of $S$ in $X$ and lies in
$A$. So "$A$ is limit point compact" says that every infinite $S \subseteq A$ has
a limit point **belonging to $A$**; a limit point outside $A$ does not count, and
that is what distinguishes the property from a statement about $X$.

## Remarks

**Three conditions, and none of them is compactness by definition.** Each of the
three weakens or replaces the open-cover condition of
[[def-metric-compactness]]: countable compactness restricts the covers tested,
sequential compactness speaks about sequences instead of covers, and limit point
compactness speaks about subsets. That the four conditions are not equivalent for
topological spaces in general is standard and is quoted from the references, not
proved here. For metric spaces they do coincide, but the coincidence is a theorem
with a choice cost that varies from implication to implication, and it is proved
on this page one arrow at a time
([[thm-compact-implies-the-other-compactness-forms]],
[[thm-metric-compactness-equivalences]],
[[rem-compactness-choice-ledger-metric]]).

**Indexing starts at $0$.** A sequence here is a function on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-sequence]]), so a subsequence is
$(x_{n_j})_{j \in \mathbb{N}}$ with $n_0 < n_1 < \cdots$ and $n_j \ge j$
([[lem-index-map-grows]]). Every recursive construction of a subsequence on this
page produces $n_0$ first and then $n_{j+1} > n_j$, and every radius written
$1/(j+1)$ is written that way because $1/j$ is undefined at $j = 0$.
````

### `def-metric-convergence`

````markdown
---
id: def-metric-convergence
kind: definition
title: "Convergence of a sequence in a metric space: $x_k \\to x$ iff $d(x_k, x) \\to 0$ in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-sequence, def-real-limit, def-subsequential-limit,
       lem-metric-nonnegativity, lem-rat-embeds-dense, def-natural-numbers,
       def-abs-value]
justified_by: []
aliases: [def-metric-limit]
landmark: true
short: "$x_k \\to x$ in $(X,d)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library, $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here.

Let $(x_k)$ be a sequence in $X$ and $p \in X$. The function
$k \mapsto d(x_k, p)$ is a sequence of reals ([[def-sequence]]), and it is
nonnegative ([[lem-metric-nonnegativity]]), so $|d(x_k,p)| = d(x_k,p)$
([[def-abs-value]]). Define

$$x_k \longrightarrow p \text{ in } (X,d) \quad :\Longleftrightarrow \quad d(x_k,p) \longrightarrow 0 \text{ in } \mathbb{R},$$

the convergence on the right being that of [[def-real-limit]]. Unwound, this
says: for every **rational** $\varepsilon > 0$ there is $K \in \mathbb{N}$ with
$d(x_k, p) < \varepsilon$ for every $k \ge K$. We then call $p$ a **limit** of
$(x_k)$, and say $(x_k)$ **converges** in $(X,d)$ if it has a limit.

**Rational and real $\varepsilon$ agree here, as they do on the real line.**
[[def-real-limit]] tests convergence against rational $\varepsilon$ only, and its
own remark, restated for sequences in [[def-sequence]], records that nothing is
lost: below any real $\eta > 0$ lies a positive rational
([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for
$\eta$. So a proof may establish convergence by producing an index for every
real $\varepsilon > 0$, and may use a convergence hypothesis at a real
$\varepsilon$ by first passing to a rational below it. Both moves are used on
this page and are always cited.

**Subsequences and subsequential limits.** A **subsequence** of $(x_k)$ is the
composite $x \circ n$ for a strictly increasing $n : \mathbb{N} \to \mathbb{N}$,
written $(x_{n_j})$, exactly as for sequences of reals ([[def-sequence]]); and
$p$ is a **subsequential limit** of $(x_k)$ in $(X,d)$ when some subsequence
converges to $p$, which is the metric-space form of [[def-subsequential-limit]].

## Remarks

- **A limit is a point of $X$, and uniqueness is a theorem.** Nothing in the
  definition rules out two limits; that a sequence in a metric space has at most
  one is [[lem-metric-limits-unique]], and its proof is where the separation
  axiom (M1) is spent. Reading the same definition with a pseudometric
  ([[def-metric-space]]) that is not a metric, that is one with $p(a,b) = 0$ for
  some $a \ne b$, limits are genuinely not unique: the constant sequence at $a$
  converges to $b$ as well.
- **Convergence is defined from the metric but determined by the topology.**
  It can be restated as "every open set containing $p$ contains $x_k$ for all
  large $k$", which follows from [[lem-metric-ball-neighbourhood-base]]; so it is
  unchanged by passing to a topologically equivalent metric
  ([[def-equivalent-metrics]]). That restatement is not made part of the
  definition, because the metric form is what every proof on this page uses.
- **The relation between convergence and closure** is
  [[thm-metric-sequential-closure]]: a point lies in the closure of $A$ exactly
  when some sequence in $A$ converges to it.
````

### `def-norm-and-normed-space`

````markdown
---
id: def-norm-and-normed-space
kind: definition
title: "A norm on a real vector space, the induced metric, and the dictionary with the metric axioms"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-function-space, def-linear-map, def-metric-space, lem-metric-nonnegativity, def-metric-topology, lem-bounded-remetrisation, rem-metric-axiom-conventions, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-complete-ordered-field, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Normed vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normed_vector_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) constructed in this library, in particular a
field, so that "vector space" below always means vector space over $\mathbb{R}$
([[def-vector-space]]).

Let $V$ be a vector space over $\mathbb{R}$, with zero vector $0_V$. A **norm on
$V$** is a function $N : V \to \mathbb{R}$ such that for all $u, v \in V$ and all
$\lambda \in \mathbb{R}$:

- **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$.
- **(N2) Absolute homogeneity.** $N(\lambda v) = |\lambda|\,N(v)$, the absolute
  value being that of [[def-abs-value]].
- **(N3) Triangle inequality.** $N(u + v) \le N(u) + N(v)$.

A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over
$\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write
$\lVert v\rVert$ for $N(v)$; when several are, the norm is always named.

**The values of a norm are real numbers.** The codomain is $\mathbb{R}$, so
$N(v)$ is an honest element of the complete ordered field and no infinite value
is permitted. This is the same convention [[rem-metric-axiom-conventions]]
records for metrics.

### Nonnegativity is a theorem, not an axiom

Many texts add a fourth condition $N(v) \ge 0$. It is redundant. Applying (N2)
with $\lambda = -1$ gives $N(-v) = |-1|\,N(v) = N(v)$ ([[lem-of-abs-value]],
[[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3)
with $u = v$ and $-v$ gives

$$0 \;=\; N(0_V) \;=\; N\bigl(v + (-v)\bigr) \;\le\; N(v) + N(-v) \;=\; N(v) + N(v),$$

where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \ge 0$, and if $N(v) < 0$ then
$N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids
([[def-complete-ordered-field]]). Hence $N(v) \ge 0$ for every $v \in V$.

**Consequently the verification of a candidate norm has three things to check and
not four**, exactly as the verification of a candidate metric has three and not
four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this
library assumes nonnegativity of a norm before the argument above.

### The induced metric

Let $N$ be a norm on $V$ and define

$$d_N(u,v) \;:=\; N(u - v) \qquad (u, v \in V),$$

where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on
$V$** ([[def-metric-space]]), and the three axioms are the three conditions
above, in order:

- **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$,
  that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$.
- **(M2)** $d_N(v,u) = N(v-u) = N\bigl((-1)(u-v)\bigr) = |-1|\,N(u-v) = d_N(u,v)$,
  by (N2), [[lem-of-abs-value]] and $(-1)w = -w$
  ([[lem-vector-space-elementary-consequences]]).
- **(M3)** $d_N(u,w) = N\bigl((u-v) + (v-w)\bigr) \le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$,
  by (N3).

A normed space is therefore a metric space, and every notion defined for metric
spaces — open set ([[def-metric-topology]]), convergence, Cauchyness,
continuity, compactness — is available in it with no further definition. **This
library never introduces a second notion of any of them for normed spaces.**

### Two properties an arbitrary metric need not have

The metric $d_N$ satisfies, for all $u, v, w \in V$ and $\lambda \in \mathbb{R}$:

- **translation invariance**, $d_N(u + w, v + w) = N\bigl((u+w)-(v+w)\bigr) = N(u-v) = d_N(u,v)$;
- **absolute homogeneity**, $d_N(\lambda u, \lambda v) = N\bigl(\lambda(u-v)\bigr) = |\lambda|\,d_N(u,v)$, by (N2).

**Not every metric on a vector space arises from a norm**, and homogeneity is
what fails. The published bounded remetrisation [[lem-bounded-remetrisation]]
replaces a metric $d$ by $d' = \min\{d, 1\}$, a metric with the same topology
whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with
$d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute
homogeneity would force $d'(\lambda v, 0_V) = |\lambda|\,d'(v, 0_V)$, which is
unbounded in $\lambda$, while $d'$ is bounded by $1$. So the passage from norms
to metrics is not reversible, and a statement about a metric on a vector space is
strictly weaker than the corresponding statement about a norm.

## Remarks

- **Why (N1) is stated as an equivalence.** The direction $N(0_V) = 0$ is forced
  by (N2) with $\lambda = 0$, since $0\,v = 0_V$
  ([[lem-vector-space-elementary-consequences]]) gives $N(0_V) = |0|\,N(v) = 0$.
  Only the direction "$N(v) = 0$ implies $v = 0_V$" is a genuine assumption, and
  dropping it gives what is usually called a seminorm, a notion this library does
  not use. The situation is exactly the one [[rem-metric-axiom-conventions]]
  describes for (M1) and the pseudometric.

- **The zero space carries exactly one norm.** If $V = \{0_V\}$ then the only
  function $V \to \mathbb{R}$ satisfying (N1) is the one with value $0$, and it
  satisfies (N2) and (N3) trivially. In particular $\mathbb{R}^{0}$, the function
  space on the empty index set ([[def-function-space]]), is a normed space,
  although the metrics of the published metric theory on $\mathbb{R}^n$ are
  defined only for $n \ge 1$.

- **What is not defined here.** This item does not define linear maps; their
  published definition is [[def-linear-map]]. It also does not define operator
  norms, dual spaces, or abstract inner product spaces.
  [[rem-rn-conventions-and-scope]] records the remaining scope boundaries and
  what each later development would license.
````

### `def-p-norms-on-rn`

````markdown
---
id: def-p-norms-on-rn
kind: definition
title: "The $p$-norms $\\lVert x\\rVert_p$ for rational $p \\ge 1$, and $\\lVert x\\rVert_\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-euclidean-inner-product, def-rational-power, lem-rational-power-well-defined, lem-rational-power-laws, lem-rational-power-monotone, rem-real-exponents-deferred, thm-minkowski-finite, def-finite-sum, lem-finite-sum-laws, lem-finite-set-has-max, def-max-min, lem-metrics-on-rn, def-abs-value, lem-of-abs-value, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ and let $\mathbb{R}^{n}$ be the function space of
[[def-euclidean-inner-product]], with $x_k := x(k)$ for $k < n$.

### The $p$-norm, for a rational exponent $p \ge 1$

Let $p \in \mathbb{Q}$ with $p \ge 1$. For $x \in \mathbb{R}^{n}$ put

$$\lVert x\rVert_p \;:=\; \Bigl(\sum_{k<n} |x_k|^{p}\Bigr)^{1/p},$$

where $|\cdot|$ is the absolute value ([[def-abs-value]]), the sum is the finite
sum of [[def-finite-sum]], and both powers are the **rational** powers of
[[def-rational-power]].

**Every power written here is defined.** Each base $|x_k|$ is a nonnegative real
and $p > 0$, so $|x_k|^{p}$ is given by [[def-rational-power]] for $|x_k| > 0$
and by its supplementary clause $0^{p} = 0$ for $|x_k| = 0$; the sum of these
nonnegative terms is nonnegative ([[lem-finite-sum-laws]] clause 4), and
$1/p$ is a positive rational, so the outer power is defined for the same two
reasons. The value does not depend on which representative of $p$ or of $1/p$ is
used ([[lem-rational-power-well-defined]]).

**The exponent is a rational, and that is not a matter of taste.**
[[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational**
exponent only; real exponents do not exist at this point in the reading order,
and [[rem-real-exponents-deferred]] records exactly why. This is also why the
published Minkowski inequality [[thm-minkowski-finite]], which is what makes the
triangle inequality work below, is itself stated for rational $p \ge 1$. **No
statement on this page is written for $p$ ranging over a real interval.**

### The maximum norm

For $n \ge 1$ and $x \in \mathbb{R}^{n}$ put

$$\lVert x\rVert_\infty \;:=\; \max\{\, |x_k| \;:\; k < n \,\},$$

the maximum of a nonempty finite set of reals, which exists and is one of its
elements ([[lem-finite-set-has-max]], [[def-max-min]]).

**The hypothesis $n \ge 1$ is required and propagates.** At $n = 0$ the set
$\{|x_k| : k<n\}$ is empty and has no maximum ([[def-max-min]]). This is the same
restriction the published [[lem-metrics-on-rn]] carries, for the same reason, and
**every statement on this page that mentions $\lVert\cdot\rVert_\infty$ inherits
it**. The $p$-norms for rational $p \ge 1$ carry no such restriction: at $n = 0$
each is the empty sum raised to a positive rational power, hence $0$.

### The three cases the rest of the page uses

- $\lVert x\rVert_1 = \sum_{k<n}|x_k|$, since $t^{1} = t$ for $t \ge 0$
  ([[lem-rational-power-laws]], and $0^{1} = 0$ by the supplementary clause).
- $\lVert x\rVert_2 = \bigl(\sum_{k<n}|x_k|^{2}\bigr)^{1/2} = \sqrt{\sum_{k<n}x_k^{2}}$,
  which is exactly the Euclidean norm of [[def-euclidean-inner-product]]: the
  exponent $2$ agrees with the integer power, so $|x_k|^{2} = x_k^{2}$
  ([[lem-of-abs-value]]), and $t^{1/2}$ is the unique nonnegative square root of
  $t$, which is $\sqrt{t}$ ([[def-rational-power]], [[thm-of-square-roots]]).
  **The two notations denote the same function and no second Euclidean norm is
  introduced.**
- $\lVert x\rVert_\infty$ as above, for $n \ge 1$.

That each of these is a norm in the sense of [[def-norm-and-normed-space]], and
that the metrics they induce are exactly the published $d_1$, $d_2$ and
$d_\infty$ of [[lem-metrics-on-rn]], is
[[lem-p-norms-are-norms-and-induce-the-published-metrics]]; it is proved there
and is not assumed here.

## Remarks

- **Why $p \ge 1$.** The triangle inequality for $\lVert\cdot\rVert_p$ is
  Minkowski's inequality, and [[thm-minkowski-finite]] is stated for rational
  $p \ge 1$. For $0 < p < 1$ the displayed expression is still defined but is not
  a norm on $\mathbb{R}^{n}$ for $n \ge 2$; nothing on this page asserts anything
  about that range, and the expression is never written with such an exponent.

- **Monotonicity in the base is what makes the comparisons below work.** For a
  fixed positive rational $r$ the map $a \mapsto a^{r}$ is strictly increasing on
  the positive reals ([[lem-rational-power-monotone]] clause 2), so an inequality
  between nonnegative sums passes through the outer power. That is the only
  property of rational powers used in the comparison chain of
  [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]].

- **The subscript $\infty$ is a name, not a number.** No arithmetic is performed
  with it, and $\lVert\cdot\rVert_\infty$ is not $\lVert\cdot\rVert_p$ for any
  exponent; it is a separately defined function that happens to sit at the end of
  the family. This is the same refusal to extend $\mathbb{R}$ silently that
  [[def-interval]] records for the interval notation.
````

### `def-sequence`

````markdown
---
id: def-sequence
kind: definition
title: "Sequences of reals: bounded, eventually, frequently, tails, subsequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-natural-numbers, def-nat-order, def-real-limit, def-real-order, def-complete-ordered-field, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "$(x_k)$, bounded, eventually, subsequence"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "Sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],
[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and
$\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],
[[def-nat-order]]).

A **sequence of reals** is a function $x : \mathbb{N} \to \mathbb{R}$. We write
$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or
$(x_k)_{k \in \mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is
the subset $\{\, x_k : k \in \mathbb{N} \,\} \subseteq \mathbb{R}$.

Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices.

- $(x_k)$ is **bounded** if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for
  every $k \in \mathbb{N}$; it is **unbounded** otherwise.
- $P$ holds **eventually** if there is $K \in \mathbb{N}$ such that $P(k)$ holds
  for every $k \ge K$.
- $P$ holds **frequently** if for every $K \in \mathbb{N}$ there is some
  $k \ge K$ for which $P(k)$ holds.
- For $K \in \mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence
  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \in \mathbb{N}$; it is
  again a sequence of reals.
- A function $n : \mathbb{N} \to \mathbb{N}$ is **strictly increasing** if
  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$
  along $n$ is the composite $x \circ n$, written $(x_{n_k})_{k \in \mathbb{N}}$;
  it is again a sequence of reals.

**Convergence and Cauchyness are not defined here.** They are already fixed, for
sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to
$x \in \mathbb{R}$ when for every rational $\varepsilon > 0$ there is
$K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and $(x_k)$
is *Cauchy* when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$
with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$. This page builds the
toolkit for those two notions and does not restate them. A sequence
**converges** if it converges to some real, and **diverges** if it does not.

## Remarks

- **Identification of $\mathbb{Q}$ with its image.** The map $q \mapsto \hat q$
  is an embedding of ordered fields ([[lem-rat-embeds-dense]]), and as is
  standard we write $q$ for $\hat q$, so that a rational may be compared with a
  real without further comment. [[def-real-limit]] is stated with the hat; every
  rational $\varepsilon$ occurring on this page is its image under this
  embedding.

- **Rational and real $\varepsilon$ agree.** [[def-real-limit]] tests convergence
  against every *rational* $\varepsilon > 0$, and its own remark records that
  this loses nothing. Spelled out: suppose that for every rational
  $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all
  $k \ge K$, and let $\eta > 0$ be an arbitrary *real*. Since $0 < \eta$,
  density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) supplies a
  rational $\varepsilon$ with $0 < \varepsilon < \eta$, and the index $K$
  belonging to that $\varepsilon$ satisfies $|x_k - x| < \varepsilon < \eta$ for
  all $k \ge K$. The converse implication is immediate, since every positive
  rational is a positive real. So the two formulations define the same relation,
  and the same two lines apply verbatim to the Cauchy condition and to any
  condition of the shape "for every $\varepsilon > 0$, eventually
  $\cdots < \varepsilon$". Proofs on this page therefore run the test with a real
  $\varepsilon$ wherever that is more convenient, and say so by citing this
  remark; nothing is smuggled in.

- **Constant sequences converge.** For $c \in \mathbb{R}$ the constant sequence
  $x_k := c$ converges to $c$, because $|x_k - c| = |0| = 0 < \varepsilon$ for
  every $\varepsilon > 0$ and every $k$; it is bounded by $|c|$.

- **Eventually and frequently are dual.** $P$ holds frequently exactly when
  $\lnot P$ does not hold eventually, and $P$ holds eventually exactly when
  $\lnot P$ does not hold frequently. So the two quantifier patterns are
  negations of one another applied to the complementary property, and there is no
  third pattern hiding between them.

- **A sequence is not its range.** $(x_k)$ is a function, not a set, and the
  range does not determine the function: the sequence $x_0 = 0$, $x_k = 1$ for
  $k \ge 1$ and the sequence $y_0 = y_1 = 0$, $y_k = 1$ for $k \ge 2$ have the
  same range $\{0, 1\}$, yet they differ at $k = 1$, so they are different
  sequences. Order and repetition are part of the data and the range forgets
  both. Boundedness, on the other hand, depends only on the range.

- **Indexing.** Sequences here start at $k = 0$ because $\mathbb{N}$ contains
  $0$ ([[def-natural-numbers]]). Texts that index from $1$ describe the same
  objects up to a shift, and the shift changes nothing about convergence, by
  [[lem-limit-of-tail]].
````

### `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`

````markdown
---
id: lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
kind: lemma
title: "The finite and reverse triangle inequalities for a norm; and for $n \\ge 1$ every norm $N$ on $\\mathbb{R}^n$ satisfies $N(x) \\le C\\lVert x\\rVert_1$ and is Lipschitz, hence continuous, for $d_2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-equivalent-norms, lem-standard-basis-of-f-n, def-linear-combination-and-span, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-cauchy-schwarz-finite, lem-finite-set-has-max, def-max-min, lem-finite-sum-laws, def-finite-sum, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, def-metric-continuity, def-canonical-natural, lem-of-naturals-positive, thm-induction-principle, lem-of-abs-value, lem-of-square-monotone, thm-of-square-roots, lem-real-line-is-a-metric-space, lem-metrics-on-rn, def-vector-space, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about
$\mathbb{R}^{n}$ with $n \ge 1$.**

1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over
   $\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every
   $p \in \mathbb{N}$ and every list $u : p \to V$
   ([[def-linear-combination-and-span]]),
   $$N\Bigl(\sum_{j<p} u_j\Bigr) \;\le\; \sum_{j<p} N(u_j),$$
   and for all $u, w \in V$,
   $$\bigl|N(u) - N(w)\bigr| \;\le\; N(u - w).$$

Now let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^{n}$ carry the norms of
[[def-p-norms-on-rn]] and write $\iota$ for the canonical natural
([[def-canonical-natural]]).

2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on
   $\mathbb{R}^{n}$ and put $C := \max\{\, N(e_k) : k<n \,\}$, a maximum over a
   nonempty finite set of reals ([[lem-standard-basis-of-f-n]],
   [[lem-finite-set-has-max]]). Then $C \ge 0$ and
   $$N(x) \;\le\; C\,\lVert x\rVert_1 \qquad \text{for every } x \in \mathbb{R}^{n}.$$
3. **The comparison chain.** For every $x \in \mathbb{R}^{n}$,
   $$\lVert x\rVert_\infty \;\le\; \lVert x\rVert_2 \;\le\; \lVert x\rVert_1 \;\le\; \iota(n)\,\lVert x\rVert_\infty , \qquad \lVert x\rVert_1 \;\le\; \sqrt{\iota(n)}\;\lVert x\rVert_2 .$$
   In particular $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
   $\lVert\cdot\rVert_\infty$ are pairwise equivalent norms on $\mathbb{R}^{n}$,
   with the constants displayed ([[def-equivalent-norms]]).
4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in
   clause 2, $N : (\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ is
   Lipschitz with constant $C\sqrt{\iota(n)}$
   ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]],
   [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and
   continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]).

**Where $n \ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to
exist, and clause 3 mentions $\lVert\cdot\rVert_\infty$; at $n = 0$ each is a
maximum over the empty index set and does not exist, exactly as in
[[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis
on the dimension and no hypothesis on the space.

## Facts & Assumptions

**Given:** A vector space $V$ over $\mathbb{R}$ with a norm $N$ ([[def-vector-space]], [[def-norm-and-normed-space]]); and, for clauses 2 to 4, a natural $n \ge 1$, the space $\mathbb{R}^{n}$, a norm $N$ on it, and vectors $x, y \in \mathbb{R}^{n}$.

[L1] The norm axioms: $N(v) = 0$ exactly when $v = 0_V$; $N(\lambda v) = |\lambda|N(v)$; $N(u+w) \le N(u)+N(w)$; and $N(v) \ge 0$ ([[def-norm-and-normed-space]]).

[L2] Finite sums in a vector space: $\sum_{j<0}u_j = 0_V$ and $\sum_{j<p+1}u_j = \bigl(\sum_{j<p}u_j\bigr) + u_p$ ([[def-linear-combination-and-span]]); and $(-1)v = -v$ ([[lem-vector-space-elementary-consequences]]).

[L3] The induction principle ([[thm-induction-principle]]).

[L4] Laws of finite sums of reals ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, $\sum_{k<n}\lambda = \iota(n)\lambda$, a sum of nonnegative terms is nonnegative, and every single term is at most such a sum.

[L5] The standard basis: $e_i \in \mathbb{R}^{n}$ has $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$, $e$ is an ordered basis of $\mathbb{R}^{n}$, and every $x$ satisfies $x = \sum_{i<n}x_i e_i$ with coordinate list $i \mapsto x(i)$ ([[lem-standard-basis-of-f-n]] clauses 1 to 3, [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L6] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, which belongs to the set and bounds it above.

[L7] The three norms ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]): $\lVert x\rVert_1 = \sum_{k<n}|x_k|$, $\lVert x\rVert_2 = \sqrt{\sum_{k<n}x_k^{2}}$, $\lVert x\rVert_\infty = \max\{|x_k| : k<n\}$, and each induces the correspondingly named published metric.

[L8] Cauchy-Schwarz in root form ([[thm-cauchy-schwarz-finite]]): $\bigl|\sum_{k<n}a_kb_k\bigr| \le \sqrt{\sum_{k<n}a_k^{2}}\sqrt{\sum_{k<n}b_k^{2}}$.

[L9] Square roots and squaring ([[thm-of-square-roots]], [[lem-of-square-monotone]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^{2} = c$; for $a,b \ge 0$, $a \le b$ exactly when $a^{2} \le b^{2}$.

[L10] Absolute value ([[lem-of-abs-value]]): $|t| \ge 0$, $|t|^{2} = t^{2}$, $|st| = |s||t|$, $|-t| = |t|$, and $|t|$ equals $t$ or $-t$.

[L11] The canonical natural: $\iota(n) > 0$ for $n \ge 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L12] Lipschitz maps and the regularity hierarchy ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]): a map with $d_Y(f(x),f(y)) \le L\,d_X(x,y)$ and $L \ge 0$ is Lipschitz, hence uniformly continuous, hence continuous; $d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 The finite triangle inequality holds by induction on $p$: at $p = 0$ both sides are $0$, since $\sum_{j<0}u_j = 0_V$ and $N(0_V) = 0$ and the empty real sum is $0$; and if $N(\sum_{j<p}u_j) \le \sum_{j<p}N(u_j)$, then $N(\sum_{j<p+1}u_j) = N(\sum_{j<p}u_j + u_p) \le N(\sum_{j<p}u_j) + N(u_p) \le \sum_{j<p}N(u_j) + N(u_p) = \sum_{j<p+1}N(u_j)$. [L1, L2, L3, L4]

1.2 For $u, w \in V$: $N(u) = N((u-w)+w) \le N(u-w) + N(w)$, so $N(u)-N(w) \le N(u-w)$; and $N(w-u) = N((-1)(u-w)) = |-1|N(u-w) = N(u-w)$, so the same argument with $u$ and $w$ exchanged gives $N(w)-N(u) \le N(u-w)$. Since $|N(u)-N(w)|$ is one of $N(u)-N(w)$ and $N(w)-N(u)$, the reverse triangle inequality follows, completing clause 1. [L1, L2, L10]

1.3 For every $j<n$: $x_j^{2} \le \sum_{k<n}x_k^{2}$, since every single term of a sum of nonnegative terms is at most the sum; taking nonnegative square roots and using $|x_j|^{2} = x_j^{2}$ gives $|x_j| \le \lVert x\rVert_2$. [L4, L7, L9, L10]

1.4 For every $j<n$: $|x_j| \le \sum_{k<n}|x_k| = \lVert x\rVert_1$, again because a single term is at most the sum. [L4, L7, L10]

1.5 $\sum_{k<n}|x_k| \le \sum_{k<n}\lVert x\rVert_\infty = \iota(n)\lVert x\rVert_\infty$, since $|x_k| \le \lVert x\rVert_\infty$ for every $k<n$ and a constant list sums to $\iota(n)$ times its value; so $\lVert x\rVert_1 \le \iota(n)\lVert x\rVert_\infty$. [L4, L6, L7, L11]

1.6 Instantiating [L8] at $a_k := |x_k|$ and $b_k := 1$ gives $\lVert x\rVert_1 = \bigl|\sum_{k<n}|x_k|\cdot 1\bigr| \le \sqrt{\sum_{k<n}|x_k|^{2}}\,\sqrt{\sum_{k<n}1} = \lVert x\rVert_2\sqrt{\iota(n)}$. [L4, L7, L8, L10]

1.7 The set $\{N(e_k) : k<n\}$ is a nonempty finite set of reals because $n \ge 1$, so $C = \max\{N(e_k) : k<n\}$ exists, belongs to the set, satisfies $N(e_k) \le C$ for every $k<n$, and is $\ge 0$ since every value of $N$ is. [L1, L5, L6]

1.8 $x = \sum_{i<n} x_i e_i$, the coordinate list of $x$ with respect to the ordered basis $e$ being $i \mapsto x(i) = x_i$. [L5]

2.1 $\lVert x\rVert_\infty$ is one of the numbers $|x_j|$ with $j<n$, so step 1.3 gives $\lVert x\rVert_\infty \le \lVert x\rVert_2$. [step 1.3, L6, L7]

2.2 $\sum_{k<n}x_k^{2} = \sum_{k<n}|x_k|\,|x_k| \le \sum_{k<n}|x_k|\,\lVert x\rVert_1 = \lVert x\rVert_1\sum_{k<n}|x_k| = \lVert x\rVert_1^{2}$, using step 1.4 termwise, monotonicity and scaling; taking nonnegative square roots gives $\lVert x\rVert_2 \le \lVert x\rVert_1$. [step 1.4, L4, L7, L9, L10]

2.3 Applying step 1.1 to the list $i \mapsto x_i e_i$ and then (N2): $N(x) = N\bigl(\sum_{i<n}x_ie_i\bigr) \le \sum_{i<n}N(x_ie_i) = \sum_{i<n}|x_i|\,N(e_i) \le \sum_{i<n}|x_i|\,C = C\lVert x\rVert_1$, the last inequality by monotonicity from step 1.7. This is clause 2. [step 1.1, step 1.7, step 1.8, L1, L4, L7]

3.1 Steps 2.1, 2.2, 1.5 and 1.6 are the four inequalities of clause 3; since $\iota(n) > 0$ and $\sqrt{\iota(n)} > 0$, they exhibit positive constants in both directions for each of the three pairs, so the three norms are pairwise equivalent. [step 1.5, step 1.6, step 2.1, step 2.2, L11, L9]

3.2 By step 1.2 applied on $\mathbb{R}^{n}$, then step 2.3, then step 1.6: $\bigl|N(x)-N(y)\bigr| \le N(x-y) \le C\lVert x-y\rVert_1 \le C\sqrt{\iota(n)}\;\lVert x-y\rVert_2$. [step 1.2, step 1.6, step 2.3, L4]

4.1 Since $\lVert x-y\rVert_2 = d_2(x,y)$ and $\bigl|N(x)-N(y)\bigr| = d_{\mathbb{R}}(N(x),N(y))$, step 3.2 says exactly that $N$ is Lipschitz with the nonnegative constant $C\sqrt{\iota(n)}$, hence uniformly continuous and continuous; this is clause 4, and with steps 1.2, 2.3 and 3.1 all four clauses are proved. [step 1.2, step 2.3, step 3.1, step 3.2, L7, L12] ∎

## Remarks

- **Clause 2 is the half of norm equivalence that costs no compactness.** It gives an upper bound for an arbitrary norm in terms of $\lVert\cdot\rVert_1$, and hence in terms of $\lVert\cdot\rVert_2$ by clause 3, by a computation with the standard basis alone. The matching **lower** bound is where compactness of the unit sphere enters, and that is [[thm-all-norms-on-rn-are-equivalent]].

- **The constants of clause 3 are best possible, and the companion page shows it.** Nothing here claims sharpness; the attaining vectors are exhibited on the companion page for $\mathbb{R}^{2}$.

- **Clause 1 is stated for a general norm on purpose.** It is used below for the Euclidean norm on $\mathbb{R}^{n}$ inside [[thm-steinitz-polygonal-confinement]] and for an arbitrary $N$ in clause 2, and it is the only statement on this page that needs no hypothesis on the dimension at all.
````

### `lem-index-map-grows`

````markdown
---
id: lem-index-map-grows
kind: lemma
title: "A strictly increasing index map satisfies $n_k \\ge k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence, thm-induction-principle, lem-nat-discrete, def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-successor-neq-self, thm-nat-linear-order, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "$n_k\\ge k$"
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "University of Wisconsin Math 521, Homework 5"
      url: "https://people.math.wisc.edu/~angenent/521.2016s/index.html"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $n : \mathbb{N} \to \mathbb{N}$ be a function, written $k \mapsto n_k$, and
recall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$
([[def-sequence]], [[def-nat-order]]).

1. **Consecutive comparisons suffice.** If $n_i < n_{\sigma(i)}$ for every
   $i \in \mathbb{N}$, then $n$ is strictly increasing.
2. **Growth.** If $n$ is strictly increasing then $n_k \ge k$ for every
   $k \in \mathbb{N}$.

Claim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is
what every later subsequence argument uses.

## Facts & Assumptions

**Given:** A function $n : \mathbb{N} \to \mathbb{N}$, written $k \mapsto n_k$, with $\sigma$ the successor and the order of [[def-nat-order]]; claim 1 is proved under the standing assumption that $n_i < n_{\sigma(i)}$ for every $i$, and claim 2 under the standing assumption that $n$ is strictly increasing ([[def-sequence]]).

[A1] $Q(k)$ denotes the statement: $n_j < n_k$ for every $j < k$.

[A2] $P(k)$ denotes the statement: $n_k \ge k$.

[L1] Order and successor on $\mathbb{N}$: $m \le p$ means $m + i = p$ for some $i$, so $0 \le m$ for every $m$ because $0 + m = m$; and $\sigma(k) = k + 1$ with $\sigma(k) \ne k$, so $k < \sigma(k)$ ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-add-identity]], [[lem-nat-successor-neq-self]]).

[L2] Discreteness: $m < p$ if and only if $\sigma(m) \le p$ ([[lem-nat-discrete]]).

[L3] Induction principle: if $R(0)$ holds and $R(k)$ implies $R(\sigma(k))$ for every $k$, then $R(k)$ holds for every $k \in \mathbb{N}$ ([[thm-induction-principle]]).

[L4] The order on $\mathbb{N}$ is reflexive, antisymmetric, transitive and total, and satisfies trichotomy ([[thm-nat-linear-order]], [[lem-nat-trichotomy]]).

## Proof

**Proof technique:** induction.

1.1 Base case for claim 1: $Q(0)$ holds vacuously, since no $j$ satisfies $j < 0$; indeed $0 \le j$ always holds, and $j < 0$ together with $0 \le j$ would contradict antisymmetry. [base, A1, L1, L4]

1.2 Inductive hypothesis for claim 1: fix $k \in \mathbb{N}$ and assume $Q(k)$, that is $n_j < n_k$ for every $j < k$. [ih, A1]

1.3 Base case for claim 2: $P(0)$ states $n_0 \ge 0$, which holds because $0 \le m$ for every natural $m$. [base, A2, L1]

1.4 Inductive hypothesis for claim 2: fix $k \in \mathbb{N}$ and assume $P(k)$, that is $k \le n_k$. [ih, A2]

2.1 Inductive step for claim 1: let $j < \sigma(k)$. By trichotomy either $k < j$, or $j = k$, or $j < k$. The case $k < j$ is impossible, since it gives $\sigma(k) \le j$ by [L2], which together with $j < \sigma(k)$ contradicts antisymmetry. If $j = k$ then $n_j = n_k < n_{\sigma(k)}$ by the standing assumption. If $j < k$ then $n_j < n_k$ by step 1.2 and $n_k < n_{\sigma(k)}$ by the standing assumption, so $n_j < n_{\sigma(k)}$ by transitivity. In every admissible case $n_j < n_{\sigma(k)}$, so $Q(\sigma(k))$ holds. [step 1.2, A1, L2, L4]

2.2 Inductive step for claim 2: $k < \sigma(k)$ by [L1], so strict increase gives $n_k < n_{\sigma(k)}$; combined with $k \le n_k$ from step 1.4 this yields $k < n_{\sigma(k)}$, hence $\sigma(k) \le n_{\sigma(k)}$ by [L2], which is $P(\sigma(k))$. [step 1.4, A2, L1, L2, L4]

3.1 Both inductions are complete, so by the induction principle $Q(k)$ holds for every $k$, which is claim 1, and $P(k)$ holds for every $k$, which is claim 2. [step 1.1, step 1.3, step 2.1, step 2.2, L3, discharge-induction] ∎

## Remarks

- Claim 2 is sharp: the identity map $n_k = k$ is strictly increasing with $n_k = k$ throughout, so no better bound than $n_k \ge k$ holds for all strictly increasing index maps.

- Claim 2 is exactly what makes a subsequence inherit a limit ([[lem-subsequence-inherits-limit]]): a threshold $K$ that works for the original sequence works unchanged for the subsequence, because $n_k \ge k \ge K$ whenever $k \ge K$.

- Nothing here is about $\mathbb{R}$; both claims are about $(\mathbb{N}, \le, \sigma)$ alone. Both are proved **by induction** ([L3]), and that is the method, not an order property. Claim 2 needs three order facts on top of the induction: that $0$ is least, which is what makes its base case $n_0 \ge 0$ true ([L1], step 1.3); discreteness ([[lem-nat-discrete]], [L2]), which upgrades $k < n_{\sigma(k)}$ to $\sigma(k) \le n_{\sigma(k)}$ (step 2.2); and transitivity in its mixed form, which composes $k \le n_k$ with $n_k < n_{\sigma(k)}$ into $k < n_{\sigma(k)}$ ([L4], step 2.2). Claim 1 additionally uses trichotomy and antisymmetry ([L4]).

- Of those three, neither the least element nor discreteness may be dropped. Discreteness alone is not enough: $(\mathbb{Z}, \le)$ is discrete in the same sense, $m < p$ iff $m + 1 \le p$, yet $k \mapsto k - 1$ is strictly increasing on $\mathbb{Z}$ with $n_k < k$ everywhere. What $\mathbb{Z}$ lacks is a least element to anchor the induction. A least element alone is not enough either, which is what fails over $\mathbb{Q}$: on the nonnegative rationals $x \mapsto x/2$ is strictly increasing and fixes the least element $0$, but $x/2 < x$ at every positive rational.
````

### `lem-metrics-on-rn`

````markdown
---
id: lem-metrics-on-rn
kind: lemma
title: "$\\mathbb{R}^n$ as the set of functions $n \\to \\mathbb{R}$, and $d_1$, $d_2$, $d_\\infty$ are metrics on it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-natural-numbers, def-finite-sum, thm-minkowski-finite,
       thm-cauchy-schwarz-finite, lem-finite-set-has-max, thm-of-square-roots,
       lem-of-abs-value, lem-finite-sum-laws, def-max-min, lem-of-square-monotone,
       lem-of-square-positive, lem-of-triangle-inequality, def-abs-value,
       def-integer-power, def-ordered-field, def-complete-ordered-field,
       lem-of-add-order]
justified_by: []
aliases: [def-euclidean-space]
landmark: true
short: "$\\mathbb{R}^n$ with $d_1, d_2, d_\\infty$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "Taxicab geometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Taxicab_geometry"
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. A von Neumann natural is the set of its
predecessors, $n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so it can be
used directly as an index set. Define

$$\mathbb{R}^n := \{\, x : x \text{ is a function } n \to \mathbb{R} \,\},$$

and write $x_k$ for $x(k)$, $k < n$. Two elements of $\mathbb{R}^n$ are equal
exactly when they agree at every $k < n$, functions being equal when they have
the same values. For $x, y \in \mathbb{R}^n$ put

$$d_1(x,y) := \sum_{k<n} |x_k - y_k|, \qquad d_2(x,y) := \sqrt{\ \sum_{k<n} (x_k - y_k)^2\ }, \qquad d_\infty(x,y) := \max\{\, |x_k - y_k| : k < n \,\}.$$

All three are well defined: the finite sums are those of [[def-finite-sum]]; the
sum of squares is nonnegative ([[lem-finite-sum-laws]], [[lem-of-square-positive]])
so it has a unique nonnegative square root ([[thm-of-square-roots]]); and
$\{|x_k - y_k| : k < n\}$ is a nonempty finite subset of $\mathbb{R}$, because
$n \ge 1$, so it has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]).

**Then $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$**
([[def-metric-space]]).

**Why $n \ge 1$.** For $n = 0$ the set $\mathbb{R}^0$ has exactly one element,
the empty function, and $d_1$ and $d_2$ are the empty sum $0$ and its root; but
$d_\infty$ would be the maximum of the empty set, which does not exist. The
hypothesis $n \ge 1$ is therefore not decoration, and it is carried by every
statement about $d_\infty$ in this library.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; elements $x, y, z \in \mathbb{R}^n$; and the lists $a_k := x_k - y_k$, $b_k := y_k - z_k$ for $k < n$, so that $a_k + b_k = x_k - z_k$. Write $A := \sum_{k<n} a_k^2$, $C := \sum_{k<n} b_k^2$ and $B := \sum_{k<n} a_k b_k$.

[L1] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity; a sum of nonnegative terms is nonnegative, every single term is at most the sum, and a sum of nonnegative terms that vanishes has every term $0$.

[L2] Absolute value ([[lem-of-abs-value]], [[def-abs-value]]): $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and $u \le |u|$.

[L3] Two-term triangle inequality: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L4] Minkowski's inequality at the rational exponent $p = 1$ ([[thm-minkowski-finite]]): $\sum_{k<n}|a_k + b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k|$.

[L5] Cauchy-Schwarz in root form ([[thm-cauchy-schwarz-finite]]): $\big|\sum_{k<n} a_k b_k\big| \le \sqrt{\sum_{k<n} a_k^2}\ \sqrt{\sum_{k<n} b_k^2}$.

[L6] Square roots ([[thm-of-square-roots]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^2 = c$; in particular $\sqrt{c} = 0$ if and only if $c = 0$.

[L7] Squares ([[lem-of-square-positive]], [[def-integer-power]]): $u^2 \ge 0$ always, and $u^2 = 0$ only for $u = 0$; and monotonicity of squaring on the nonnegatives, $s \le t \iff s^2 \le t^2$ for $s, t \ge 0$ ([[lem-of-square-monotone]]).

[L8] Maximum of a nonempty finite set of reals: it exists, it belongs to the set, and it is an upper bound of the set ([[lem-finite-set-has-max]], [[def-max-min]]).

[L9] Order arithmetic in $\mathbb{R}$: inequalities may be added and a constant added to both sides, in the strict form of [[lem-of-add-order]] and, together with the case of equality settled by totality ([[def-ordered-field]], [[def-complete-ordered-field]]), in the nonstrict form used below.

## Proof

**Proof technique:** direct.

1.1 Separation for $d_1$: $d_1(x,y) = \sum_{k<n}|a_k|$ is a sum of nonnegative terms, so it vanishes exactly when every $|a_k|$ vanishes, that is exactly when $x_k = y_k$ for all $k < n$, that is exactly when $x = y$. [L1, L2]

1.2 Separation for $d_2$: $d_2(x,y) = \sqrt{A}$ vanishes exactly when $A = 0$; $A$ is a sum of nonnegative terms, so $A = 0$ exactly when $a_k^2 = 0$ for every $k < n$, which happens exactly when every $a_k = 0$, that is exactly when $x = y$. [L1, L6, L7]

1.3 Separation for $d_\infty$: the maximum $d_\infty(x,y)$ belongs to $\{|a_k| : k < n\}$ and bounds it above, so it is $0$ exactly when every $|a_k| = 0$, that is exactly when $x = y$. [L2, L8]

1.4 Symmetry for all three: $|y_k - x_k| = |-(x_k - y_k)| = |x_k - y_k|$ and $(y_k - x_k)^2 = (x_k - y_k)^2$ for every $k < n$, so the three defining expressions are unchanged when $x$ and $y$ are exchanged. [L2, L7]

1.5 Triangle inequality for $d_1$: applying [L4] to the lists $(a_k)$ and $(b_k)$ gives $d_1(x,z) = \sum_{k<n}|a_k + b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k| = d_1(x,y) + d_1(y,z)$. [L4]

1.6 Expanding with additivity and scaling: $\sum_{k<n}(a_k + b_k)^2 = \sum_{k<n}\big(a_k^2 + 2a_kb_k + b_k^2\big) = A + 2B + C$. [L1, algebra]

1.7 By [L5] and $B \le |B|$: $B \le \sqrt{A}\,\sqrt{C}$, and $A = (\sqrt{A})^2$, $C = (\sqrt{C})^2$ with $\sqrt{A}, \sqrt{C} \ge 0$. [L2, L5, L6]

1.8 Triangle inequality for $d_\infty$: for each $k < n$, $|a_k + b_k| \le |a_k| + |b_k| \le d_\infty(x,y) + d_\infty(y,z)$ because the two maxima bound their sets; so $d_\infty(x,y) + d_\infty(y,z)$ is an upper bound of $\{|a_k + b_k| : k < n\}$, and the maximum $d_\infty(x,z)$ of that set is one of its elements, whence $d_\infty(x,z) \le d_\infty(x,y) + d_\infty(y,z)$. [L3, L8, L9]

2.1 Combining steps 1.6 and 1.7: $\sum_{k<n}(a_k+b_k)^2 = A + 2B + C \le (\sqrt{A})^2 + 2\sqrt{A}\sqrt{C} + (\sqrt{C})^2 = \big(\sqrt{A} + \sqrt{C}\big)^2$. [step 1.6, step 1.7, L9, algebra]

3.1 Both $d_2(x,z) = \sqrt{\sum_{k<n}(a_k+b_k)^2}$ and $\sqrt{A} + \sqrt{C}$ are nonnegative, and by step 2.1 the square of the first is at most the square of the second, so monotonicity of squaring on the nonnegatives gives $d_2(x,z) \le \sqrt{A} + \sqrt{C} = d_2(x,y) + d_2(y,z)$. [step 2.1, L6, L7]

4.1 Each of $d_1$, $d_2$, $d_\infty$ satisfies (M1) by steps 1.1, 1.2 and 1.3, satisfies (M2) by step 1.4, and satisfies (M3) by steps 1.5, 3.1 and 1.8 respectively; hence all three are metrics on $\mathbb{R}^n$. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.8, step 3.1] ∎

## Remarks

- **$\mathbb{R}^n$ is defined ZFC-natively here**, as the set of functions from
  the von Neumann natural $n$ to $\mathbb{R}$, precisely so that its coordinates
  are indexed by $k < n$ and the finite-sum machinery of [[def-finite-sum]],
  [[thm-minkowski-finite]] and [[thm-cauchy-schwarz-finite]], all of which sum
  over $k < n$, applies without any reindexing.
- **No rational power appears anywhere above.** The triangle inequality for
  $d_2$ is obtained from Cauchy-Schwarz and the existence of square roots, not
  from Minkowski at $p = 2$, so this lemma does not depend on the theory of
  rational exponents. Minkowski is used only at $p = 1$, where its statement is
  the termwise sum of the two-term triangle inequality.
- **The three metrics are Lipschitz equivalent, with explicit constants,** and
  in particular have the same topology; that computation is on the companion
  page and is not needed here.
````

### `lem-of-abs-value`

````markdown
---
id: lem-of-abs-value
kind: lemma
title: "Basic properties of the absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abs-value, def-ordered-field, lem-of-mult-neg, lem-of-sign-rules]
aliases: []
landmark: false
short: "|x| properties"
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Absolute value: $|u| = u$ if $u \ge 0$, and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[L2] Ordered-field order: trichotomy holds (for each $u$ exactly one of $u > 0$, $u = 0$, $u < 0$), $a < b$ means $b - a$ is positive, and sums and products of positives are positive ([[def-ordered-field]]).

[L3] Signs in products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L4] Sign rules: a product of two elements of the same sign is positive, and a product of two elements of opposite sign is negative ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Case $x > 0$: by [L1] $|x| = x > 0$, so $|x| \ge 0$ and $|x| \ne 0$; since $-x < 0$ we get $|-x| = -(-x) = x = |x|$ by [L1], and $-|x| = -x < 0 < x = |x|$, so $-|x| \le x \le |x|$. [assume-case pos, L1, L2, algebra]

1.2 Case $x = 0$: then $|x| = |0| = 0$, so $|x| \ge 0$ holds with $|x| = 0$ and $x = 0$, while $|-x| = |0| = |x|$ and $-|x| = 0 \le 0 \le 0 = |x|$. [assume-case zero, L1]

1.3 Case $x < 0$: by [L1] $|x| = -x$, and [L2] gives $-x > 0$, so $|x| > 0$ and $|x| \ne 0$; here $|-x| = -x = |x|$ by [L1], and $-|x| = -(-x) = x \le x$ while $x < 0 < -x = |x|$, so $-|x| \le x \le |x|$. [assume-case neg, L1, L2, algebra]

1.4 Case $x = 0$ or $y = 0$: then $xy = 0$, so $|xy| = 0$, and one of $|x|, |y|$ is $0$, whence $|x|\,|y| = 0 = |xy|$. [assume-case zerofactor, L1]

1.5 Case $x, y$ have the same sign (both positive or both negative): by [L4] $xy > 0$, so $|xy| = xy$, while $|x|\,|y| = xy$ by [L3] (for $x, y < 0$ this is $(-x)(-y) = xy$), hence $|xy| = |x|\,|y|$. [assume-case same, L1, L3, L4]

1.6 Case $x, y$ have opposite signs (one positive, one negative): by [L4] $xy < 0$, so $|xy| = -(xy)$, while $|x|\,|y| = -(xy)$ by [L3] (namely $x(-y)$ or $(-x)y$), hence $|xy| = |x|\,|y|$. [assume-case opposite, L1, L3, L4]

2.1 By trichotomy [L2] each $x$ lies in exactly one of the cases 1.1-1.3, and in each we verified $|x| \ge 0$, that $|x| = 0 \iff x = 0$, that $|-x| = |x|$, and that $-|x| \le x \le |x|$; hence all four hold for every $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

2.2 By trichotomy [L2] each pair $x, y$ lies in exactly one of the cases 1.4-1.6, and in each $|xy| = |x|\,|y|$; hence $|xy| = |x|\,|y|$ for all $x, y$. [step 1.4, step 1.5, step 1.6, cases-exhaustive]

3.1 Let $c > 0$: if $|x| < c$ then $-c < -|x| \le x \le |x| < c$ by [step 2.1] and [L2], so $-c < x < c$; conversely if $-c < x < c$ then both $x < c$ and $-x < c$, and since $|x|$ equals $x$ or $-x$ by [L1], we get $|x| < c$, so $|x| < c \iff -c < x < c$. [step 2.1, L1, L2] ∎
````

### `lem-p-norms-are-norms-and-induce-the-published-metrics`

````markdown
---
id: lem-p-norms-are-norms-and-induce-the-published-metrics
kind: lemma
title: "Each $\\lVert\\cdot\\rVert_p$ is a norm on $\\mathbb{R}^n$, and the induced metrics are exactly $d_1$, $d_2$ and $d_\\infty$ of the published metric-spaces page"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-p-norms-on-rn, def-norm-and-normed-space, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-minkowski-finite, lem-rational-power-laws, lem-rational-power-monotone, lem-finite-sum-laws, def-finite-sum, lem-metrics-on-rn, def-metric-space, def-metric-topology, thm-euclidean-space-complete, thm-heine-borel-rn, thm-metric-compactness-equivalences, lem-finite-set-has-max, def-max-min, def-rational-power, lem-of-abs-value, def-abs-value, lem-of-triangle-inequality, lem-of-sign-rules, def-ordered-field, thm-of-square-roots]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Minkowski inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Minkowski_inequality"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $p \in \mathbb{Q}$ with $p \ge 1$, with the norms
of [[def-p-norms-on-rn]]. Then:

1. $\lVert\cdot\rVert_p$ is a norm on $\mathbb{R}^{n}$
   ([[def-norm-and-normed-space]]).
2. For $n \ge 1$, $\lVert\cdot\rVert_\infty$ is a norm on $\mathbb{R}^{n}$.
3. **The dictionary.** For $n \ge 1$ and all $x, y \in \mathbb{R}^{n}$,
   $$\lVert x-y\rVert_1 = d_1(x,y), \qquad \lVert x-y\rVert_2 = d_2(x,y), \qquad \lVert x-y\rVert_\infty = d_\infty(x,y),$$
   where $d_1$, $d_2$, $d_\infty$ are the metrics of the published
   [[lem-metrics-on-rn]]. So the metric induced by each of these three norms
   ([[def-norm-and-normed-space]]) **is** the correspondingly named published
   metric, not merely one equivalent to it.

**Consequence, used repeatedly below and stated once here.** By clause 3 at
$p = 2$, the metric space $(\mathbb{R}^{n}, d_2)$ of the published metric-spaces
page and the metric space underlying the normed space
$(\mathbb{R}^{n}, \lVert\cdot\rVert_2)$ of this page are the same object. Hence
completeness ([[thm-euclidean-space-complete]] clause 2), Heine-Borel
([[thm-heine-borel-rn]] clause 2) and the compactness equivalences
([[thm-metric-compactness-equivalences]]) are statements about this page's normed
space, **with their hypothesis $n \ge 1$ inherited unchanged and not weakened**.
Nothing below cites any of those three theorems for $n = 0$.

**Why this lemma exists.** Without it the library would hold a norm-induced
metric on $\mathbb{R}^{n}$ and a separately published metric on the same set with
no recorded relation, and every later citation would have to guess which was
meant. The proof of clause 3 is a comparison of two written expressions; the
value is that the comparison is made and recorded.

## Facts & Assumptions

**Given:** A natural number $n$, a rational $p \ge 1$, vectors $x, y \in \mathbb{R}^{n}$ and a real $\lambda$; write $S(x) := \sum_{k<n}|x_k|^{p}$, so that $\lVert x\rVert_p = S(x)^{1/p}$ ([[def-p-norms-on-rn]], [[def-finite-sum]]).

[A1] For clauses 2 and 3, $n \ge 1$, so that $\{|x_k| : k<n\}$ is a nonempty finite set of reals ([[def-p-norms-on-rn]], [[lem-metrics-on-rn]]).

[L1] Rational powers ([[def-rational-power]], [[lem-rational-power-laws]]): for $a, b \ge 0$ and rationals $r, s > 0$ one has $a^{r} \ge 0$, $(ab)^{r} = a^{r}b^{r}$, $0^{r} = 0$, and $a^{r} > 0$ when $a > 0$; and for $a > 0$, $(a^{r})^{s} = a^{rs}$ and $a^{1} = a$.

[L2] Monotonicity in the base ([[lem-rational-power-monotone]] clause 2): for a rational $r > 0$ and reals $0 \le a < b$ one has $a^{r} < b^{r}$; hence $a \le b$ implies $a^{r} \le b^{r}$, the case $a = b$ being trivial, and $a^{r} = 0$ only for $a = 0$.

[L3] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity; a sum of nonnegative terms is nonnegative, each single term is at most such a sum, and a sum of nonnegative terms that vanishes has every term $0$.

[L4] Minkowski's inequality for finite sums at rational $p \ge 1$ ([[thm-minkowski-finite]]): $\bigl(\sum_{k<n}|a_k+b_k|^{p}\bigr)^{1/p} \le \bigl(\sum_{k<n}|a_k|^{p}\bigr)^{1/p} + \bigl(\sum_{k<n}|b_k|^{p}\bigr)^{1/p}$.

[L5] Absolute value ([[lem-of-abs-value]], [[def-abs-value]], [[lem-of-triangle-inequality]]): $|t| \ge 0$; $|t| = 0$ exactly when $t = 0$; $|st| = |s|\,|t|$; $|s+t| \le |s|+|t|$; and $|t|^{2} = t^{2}$.

[L6] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, the maximum belongs to the set and bounds it above, and a set with an upper bound belonging to it has that element as its maximum.

[L7] Order arithmetic: multiplying an inequality by a nonnegative real preserves it ([[lem-of-sign-rules]] in its strict form, together with the case of equality settled by totality), and $\le$ is transitive ([[def-ordered-field]]).

[L8] The norm axioms (N1), (N2), (N3) ([[def-norm-and-normed-space]]); $\lVert\cdot\rVert_2$ agrees with the Euclidean norm of [[def-euclidean-inner-product]], and is a norm by [[thm-cauchy-schwarz-and-the-euclidean-norm]]; square roots are the rational power at exponent $1/2$ ([[thm-of-square-roots]], [[def-p-norms-on-rn]]).

[L9] The published metrics on $\mathbb{R}^{n}$ for $n \ge 1$ are $d_1(x,y) = \sum_{k<n}|x_k-y_k|$, $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^{2}}$ and $d_\infty(x,y) = \max\{|x_k-y_k| : k<n\}$, and each is a metric ([[lem-metrics-on-rn]], [[def-metric-space]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 Every term $|x_k|^{p}$ is nonnegative, so $S(x) \ge 0$ and $\lVert x\rVert_p = S(x)^{1/p}$ is defined and nonnegative. [L1, L3]

1.2 $S(x) = 0$ holds exactly when $|x_k|^{p} = 0$ for every $k<n$, a vanishing sum of nonnegative terms having every term $0$; and $|x_k|^{p} = 0$ exactly when $|x_k| = 0$, that is exactly when $x_k = 0$. [L1, L2, L3, L5]

1.3 For every $k<n$, $|(\lambda x)_k|^{p} = \bigl(|\lambda|\,|x_k|\bigr)^{p} = |\lambda|^{p}|x_k|^{p}$, so $S(\lambda x) = |\lambda|^{p}S(x)$ by scaling of finite sums. [L1, L3, L5]

1.4 Instantiating [L4] at $a_k := x_k$ and $b_k := y_k$, and using $(x+y)_k = x_k+y_k$, gives $\lVert x+y\rVert_p \le \lVert x\rVert_p + \lVert y\rVert_p$, which is axiom (N3) for $\lVert\cdot\rVert_p$. [L4, L8]

1.5 Under [A1] the set $\{|x_k| : k<n\}$ is nonempty and finite, so $\lVert x\rVert_\infty$ exists, is one of the $|x_k|$, and satisfies $|x_k| \le \lVert x\rVert_\infty$ for every $k<n$; in particular $\lVert x\rVert_\infty \ge 0$. [A1, L5, L6]

1.6 Under [A1], $\lVert x-y\rVert_1 = \sum_{k<n}|x_k-y_k|$ by the case $p=1$ of the definition, and that is the written expression for $d_1(x,y)$. [L1, L9]

1.7 Under [A1], $\lVert x-y\rVert_2 = \bigl(\sum_{k<n}|x_k-y_k|^{2}\bigr)^{1/2} = \sqrt{\sum_{k<n}(x_k-y_k)^{2}}$, using $|t|^{2} = t^{2}$ and the identification of the exponent $1/2$ with the nonnegative square root, and that is the written expression for $d_2(x,y)$. [L5, L8, L9]

1.8 Under [A1], $\lVert x-y\rVert_\infty = \max\{|x_k-y_k| : k<n\}$ by definition, and that is the written expression for $d_\infty(x,y)$. [L9]

2.1 $\lVert x\rVert_p = 0$ holds exactly when $S(x) = 0$, since $S(x) > 0$ would give $S(x)^{1/p} > 0$ and $0^{1/p} = 0$. [step 1.1, L1, L2]

2.2 Under [A1]: $\lVert x\rVert_\infty = 0$ forces $|x_k| \le 0$ and $|x_k| \ge 0$ for every $k<n$, hence $x = 0$; and $\lVert 0\rVert_\infty = 0$. This is (N1) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L8]

2.3 Under [A1]: for every $k<n$, $|(\lambda x)_k| = |\lambda|\,|x_k| \le |\lambda|\,\lVert x\rVert_\infty$, and choosing $j<n$ with $|x_j| = \lVert x\rVert_\infty$ gives $|(\lambda x)_j| = |\lambda|\,\lVert x\rVert_\infty$; so $|\lambda|\lVert x\rVert_\infty$ belongs to the set and bounds it above, whence $\lVert \lambda x\rVert_\infty = |\lambda|\lVert x\rVert_\infty$. This is (N2) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L6, L7]

2.4 Under [A1]: for every $k<n$, $|(x+y)_k| = |x_k+y_k| \le |x_k| + |y_k| \le \lVert x\rVert_\infty + \lVert y\rVert_\infty$; choosing $j<n$ with $|(x+y)_j| = \lVert x+y\rVert_\infty$ gives $\lVert x+y\rVert_\infty \le \lVert x\rVert_\infty + \lVert y\rVert_\infty$, which is (N3) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L6, L7]

3.1 By steps 2.1 and 1.2, $\lVert x\rVert_p = 0$ exactly when $x_k = 0$ for every $k<n$, that is exactly when $x = 0$; this is axiom (N1) for $\lVert\cdot\rVert_p$. [step 2.1, step 1.2, L8]

3.2 Steps 2.2, 2.3 and 2.4 are (N1), (N2) and (N3) for $\lVert\cdot\rVert_\infty$ under [A1], so clause 2 holds. [step 2.2, step 2.3, step 2.4, A1, L8]

4.1 If $\lambda = 0$ then $\lambda x = 0$ and both sides of (N2) are $0$ by step 3.1; if $\lambda \ne 0$ then $|\lambda| > 0$, and step 1.3 with the power laws gives $\lVert \lambda x\rVert_p = \bigl(|\lambda|^{p}S(x)\bigr)^{1/p} = \bigl(|\lambda|^{p}\bigr)^{1/p}S(x)^{1/p} = |\lambda|^{p\cdot(1/p)}\lVert x\rVert_p = |\lambda|\,\lVert x\rVert_p$; this is axiom (N2). [step 1.3, step 3.1, L1, L5, L8]

5.1 Steps 3.1, 4.1 and 1.4 are (N1), (N2) and (N3) for $\lVert\cdot\rVert_p$, so clause 1 holds. [step 1.4, step 3.1, step 4.1, L8]

6.1 Steps 1.6, 1.7 and 1.8 give clause 3, and with steps 5.1 and 3.2 all three clauses are proved; in particular the metric induced by $\lVert\cdot\rVert_2$ on $\mathbb{R}^{n}$ for $n \ge 1$ is the published $d_2$, which is the consequence recorded in the Statement. [step 5.1, step 3.2, step 1.6, step 1.7, step 1.8, L9] ∎

## Remarks

- **What the consequence does and does not license.** Because the two metric spaces are literally the same, a published theorem about $(\mathbb{R}^{n}, d_2)$ may be quoted here verbatim. It may **not** be quoted with a weaker hypothesis: [[thm-euclidean-space-complete]], [[thm-heine-borel-rn]] and [[lem-metrics-on-rn]] are all stated for $n \ge 1$ only, because $d_\infty$ is a maximum over an empty index set at $n = 0$, and every item on this page that uses one of them carries $n \ge 1$ in its own statement.

- **Clause 1 holds at $n = 0$ and clause 2 does not apply there.** At $n = 0$ every $\lVert\cdot\rVert_p$ is the zero function on the one-element space $\mathbb{R}^{0}$, which is the unique norm on the zero space ([[def-norm-and-normed-space]]); $\lVert\cdot\rVert_\infty$ is not defined there at all.

- **The route to (N3) differs between the two families, and that is not an accident.** For $\lVert\cdot\rVert_p$ the triangle inequality is Minkowski's inequality, a genuine theorem about rational powers; for $\lVert\cdot\rVert_\infty$ it is the elementary argument of step 2.4, that a maximum of sums is at most the sum of the maxima. The second argument is the one that needs a nonempty index set.
````

### `lem-subsequence-inherits-limit`

````markdown
---
id: lem-subsequence-inherits-limit
kind: lemma
title: "Subsequences inherit the limit"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sequence, def-real-limit, lem-index-map-grows, lem-limit-unique, thm-nat-linear-order, def-nat-order]
justified_by: []
aliases: []
landmark: true
short: "subsequences keep the limit"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]), and let $n : \mathbb{N} \to \mathbb{N}$
be strictly increasing. Then the subsequence $(x_{n_k})$ converges to $x$.

**Divergence test.** Consequently, if two subsequences of $(x_k)$ converge to
different limits, then $(x_k)$ does not converge.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals converging to a real $x$, and a strictly increasing $n : \mathbb{N} \to \mathbb{N}$, so that $(x_{n_k})$ is a subsequence of $(x_k)$ ([[def-sequence]], [[def-real-limit]]).

[L1] $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x| < \hat\varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[L2] Growth of the index map: $n_k \ge k$ for every $k$ ([[lem-index-map-grows]]).

[L3] The order on $\mathbb{N}$ is transitive, so $n_k \ge k \ge K$ gives $n_k \ge K$ ([[thm-nat-linear-order]], [[def-nat-order]]).

[L4] A sequence has at most one limit ([[lem-limit-unique]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be rational. By convergence of $(x_k)$ there is $K \in \mathbb{N}$ with $|x_j - x| < \varepsilon$ for every $j \ge K$. [L1]

2.1 For every $k \ge K$ we have $n_k \ge k \ge K$, so the estimate of step 1.1 applies at the index $j = n_k$ and gives $|x_{n_k} - x| < \varepsilon$. [step 1.1, L2, L3]

3.1 Since the rational $\varepsilon > 0$ was arbitrary, and the same threshold $K$ served, $(x_{n_k})$ converges to $x$. [step 2.1, L1]

4.1 Divergence test: suppose subsequences $(x_{n_k})$ and $(x_{m_k})$ converge to $a$ and $b$ with $a \ne b$. If $(x_k)$ converged, to $x$ say, then by step 3.1 both subsequences would converge to $x$, and uniqueness of limits would force $a = x$ and $b = x$, hence $a = b$, contrary to hypothesis; so $(x_k)$ does not converge. [step 3.1, L4] ∎

## Remarks

- A sequence is a subsequence of itself, via the identity index map $n_k = k$, which is strictly increasing. So "every subsequence converges to $x$" and "the sequence converges to $x$" are equivalent, and the lemma is the non-trivial half of that equivalence.

- The converse of the first claim is false: **one** convergent subsequence says nothing about the sequence ([[fs-subsequence-convergence-implies-convergence]]). It is the divergence test, not the convergence of a single subsequence, that is usable.

- The divergence test is the standard way to show a concrete sequence diverges, and it is how [[fs-bounded-implies-convergent]] is refuted. The opposite direction, extracting a convergent subsequence from a bounded sequence, is Bolzano-Weierstrass; it is **not available at this point in the reading order**, being the subject of the next page of this track, *Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, where it is proved.
````

### `rem-compactness-choice-ledger-metric`

````markdown
---
id: rem-compactness-choice-ledger-metric
kind: remark
title: "What each implication between the compactness properties of a metric space costs: which are theorems of ZF, which use countable choice, and which use dependent choice"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [thm-metric-compactness-equivalences, thm-compact-subset-is-closed-and-bounded, thm-compact-implies-the-other-compactness-forms, thm-compact-implies-complete-and-totally-bounded, thm-complete-and-totally-bounded-implies-compact, thm-sequentially-compact-implies-totally-bounded, lem-sequentially-compact-implies-complete, lem-compact-metric-space-has-a-countable-dense-subset, thm-heine-borel-rn, def-countable-choice, def-dependent-choice]
justified_by: []
aliases: []
landmark: true
short: "the choice ledger for this page"
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
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
pipeline_run: null
---

## What this page spends, implication by implication

[[thm-metric-compactness-equivalences]] states five conditions and asserts that
they are equivalent, under two choice hypotheses. Stated that way the theorem
overcharges almost every arrow it contains, so this remark records the arrows one
at a time. Every entry is a statement about **the proof given in this library**,
and about nothing else.

**Theorems of ZF, using no choice principle at all.**

- A compact subset of a metric space is closed and bounded
  ([[thm-compact-subset-is-closed-and-bounded]]).
- A compact metric space is complete and totally bounded
  ([[thm-compact-implies-complete-and-totally-bounded]]). Completeness is
  obtained there from the finite intersection characterisation applied to the
  closures of the tails of a Cauchy sequence, precisely so that the argument does
  not pass through the extraction of a subsequence.
- Compactness implies countable compactness and limit point compactness, and each
  of those implies sequential compactness
  ([[thm-compact-implies-the-other-compactness-forms]]). The two arrows into
  sequential compactness extract a subsequence by taking, at every stage, the
  **least** admissible index.
- A sequentially compact metric space is complete
  ([[lem-sequentially-compact-implies-complete]]).
- A closed subset of a compact metric space is compact, a continuous image of a
  compact space is compact, the extreme value theorem, the Lebesgue number lemma,
  Heine-Cantor, and the continuity of the inverse of a continuous bijection from
  a compact space.
- Heine-Borel in $\mathbb{R}^n$ ([[thm-heine-borel-rn]]), by a bisection in which
  each step halves one coordinate and keeps the left half when the left half is
  still not finitely covered.

**Using the Axiom of Countable Choice** ([[def-countable-choice]]), spent once and
named at the step that spends it.

- A complete, totally bounded metric space is compact
  ([[thm-complete-and-totally-bounded-implies-compact]]): one finite
  $1/(n+1)$-net, together with a listing of it, is fixed for every $n$ at once.
- A compact metric space has an at most countable dense subset
  ([[lem-compact-metric-space-has-a-countable-dense-subset]]): the same
  selection, and the countable union theorem it then invokes carries the same
  hypothesis and no more.

**Using the Axiom of Dependent Choice** ([[def-dependent-choice]]).

- A sequentially compact metric space is totally bounded
  ([[thm-sequentially-compact-implies-totally-bounded]]). This is the only
  implication on the page with that cost. The construction adds one point at a
  time, each at distance at least $\varepsilon$ from all the points already
  produced, so the set the next point is drawn from is not known until the
  earlier ones are fixed. Countable choice returns one $\varepsilon$-separated
  tuple for each length with no coherence between them, and no diagonal argument
  assembles those into a single separated sequence.

## What is claimed and what is not

**Claimed:** each proof in this library can be carried out in ZF together with
the principle named above, and in no case is more used than is named.

**Not claimed:** that any of these principles is *necessary*. Showing that an
implication cannot be proved in ZF alone is an independence result, obtained by
forcing or by permutation models, and this library contains neither and proves
none. Every cost above is an upper bound. The systematic study of which forms of
compactness need which fragment of choice is a subject in its own right, and
Herrlich's *Axiom of Choice* is the standard reference; it is cited here as
literature and is not used.

**Not claimed either:** that a cost recorded for one proof is a cost of the
statement. Two proofs of the same implication may spend differently, and the
completeness half of
[[thm-compact-implies-complete-and-totally-bounded]] is exactly a case where the
textbook route and the route taken here differ in what they use.

## How to read the equivalence theorem

A cycle of implications transmits the weakest hypothesis around the whole cycle:
once [[thm-metric-compactness-equivalences]] has closed its cycle, every one of
its five conditions implies every other *under both hypotheses*. The individual
arrows do not inherit that. A reader working in ZF alone still has, without any
choice at all, that a compact metric space satisfies all four of the other
conditions, and that a sequentially compact one is complete. What fails in ZF, as
far as this library's proofs go, is the journey back from the weaker conditions to
compactness.

Where these principles sit relative to one another — that the Axiom of Choice
implies dependent choice, which implies countable choice, and that the reverse
implications are relative-consistency results quoted rather than proved — is
recorded in [[def-dependent-choice]] and in the definitions it points to.
````

### `thm-all-norms-on-rn-are-equivalent`

````markdown
---
id: thm-all-norms-on-rn-are-equivalent
kind: theorem
title: "For $n \\ge 1$ all norms on $\\mathbb{R}^n$ are equivalent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-equivalent-norms, def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-heine-borel-rn, thm-extreme-value-metric, thm-metric-continuity-characterisations, def-metric-compactness, def-metric-bounded-diameter, def-metric-topology, def-metric-ball, lem-standard-basis-of-f-n, def-metric-continuity, lem-of-inverse-positive, def-complete-ordered-field, thm-of-square-roots, lem-metrics-on-rn, def-isometry-and-metric-embedding]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. Then any two norms on $\mathbb{R}^{n}$ are
equivalent ([[def-equivalent-norms]], [[def-norm-and-normed-space]]).

More precisely, for every norm $N$ on $\mathbb{R}^{n}$ there are reals
$c > 0$ and $C' > 0$ with

$$c\,\lVert x\rVert_2 \;\le\; N(x) \;\le\; C'\,\lVert x\rVert_2 \qquad \text{for every } x \in \mathbb{R}^{n},$$

and the general statement follows because equivalence of norms is an equivalence
relation.

**Consequently all the metric notions on $\mathbb{R}^{n}$ are norm independent**
for $n \ge 1$: any two norms give the same open sets, the same convergent
sequences with the same limits, the same Cauchy sequences and the same uniformly
continuous maps ([[def-equivalent-norms]]).

**The hypothesis $n \ge 1$ is used twice in the proof and both uses are marked**:
once so that the constant $C$ of
[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] exists, and once
so that the Euclidean unit sphere is **nonempty**, which is what the extreme
value theorem needs. At $n = 0$ the conclusion is true but vacuous, the zero
space carrying exactly one norm ([[def-norm-and-normed-space]]), and it is not
obtained from the argument below.

## Facts & Assumptions

**Given:** A natural $n \ge 1$, the space $\mathbb{R}^{n}$ with the norms of [[def-p-norms-on-rn]] and the published metric $d_2$ ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]), and a norm $N$ on $\mathbb{R}^{n}$; write $S := \{\, x \in \mathbb{R}^{n} : \lVert x\rVert_2 = 1 \,\}$.

[L1] For $n \ge 1$: $C := \max\{N(e_k) : k<n\}$ exists with $C \ge 0$, $N(x) \le C\lVert x\rVert_1$, $\lVert x\rVert_1 \le \sqrt{\iota(n)}\lVert x\rVert_2$, and $N$ is continuous as a map $(\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clauses 2, 3, 4).

[L2] Equivalence of norms is an equivalence relation, and $c M \le N \le C M$ with $c, C > 0$ is what it means ([[def-equivalent-norms]]).

[L3] Heine-Borel in $\mathbb{R}^{n}$ for $n \ge 1$: a subset of $(\mathbb{R}^{n},d_2)$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]] clause 2, [[def-metric-compactness]], [[def-metric-topology]], [[def-metric-bounded-diameter]]).

[L4] Extreme value theorem: a continuous real-valued function on a **nonempty** compact metric space attains a least value ([[thm-extreme-value-metric]]).

[L5] Continuity characterisations: a map of metric spaces continuous at every point has closed preimages of closed sets ([[thm-metric-continuity-characterisations]], clause (c)).

[L6] Balls, openness and boundedness ([[def-metric-ball]], [[def-metric-topology]], [[def-metric-bounded-diameter]]): $U$ is open when every point of $U$ has a ball inside $U$; $A$ is bounded when $A = \emptyset$ or $A \subseteq B(x_0,r)$ for some $x_0$ and real $r>0$.

[L7] The norm axioms (N1) and (N2), and nonnegativity of a norm ([[def-norm-and-normed-space]]).

[L8] The standard basis vector $e_0 \in \mathbb{R}^{n}$ exists for $n \ge 1$, with $e_0(0) = 1$ and $e_0(j) = 0$ for $0 \ne j < n$ ([[lem-standard-basis-of-f-n]]); hence $\lVert e_0\rVert_2 = \sqrt{1} = 1$ ([[def-p-norms-on-rn]], [[thm-of-square-roots]]).

[L9] Inverses: $u > 0$ gives $u^{-1} > 0$, and trichotomy of the order of $\mathbb{R}$ ([[lem-of-inverse-positive]], [[def-complete-ordered-field]]).

[L10] Continuity at a point in the $\varepsilon$-$\delta$ form, and the metric subspace $(A, d_A)$ with $d_A$ the restriction of $d$ ([[def-metric-continuity]], [[def-isometry-and-metric-embedding]], [[def-metric-compactness]]).

## Proof

**Proof technique:** direct.

1.1 The singleton $\{1\} \subseteq \mathbb{R}$ is closed: if $y \ne 1$ then $r := |y-1| > 0$ and the ball $B(y,r)$ omits $1$, so the complement of $\{1\}$ is open. [L6, L9]

1.2 $\lVert\cdot\rVert_2$ is itself a norm on $\mathbb{R}^{n}$, so by [L1] applied to it, $\lVert\cdot\rVert_2 : (\mathbb{R}^{n},d_2) \to (\mathbb{R},d_{\mathbb{R}})$ is continuous. [L1, L7]

1.3 $S \subseteq B(0,2)$, since $x \in S$ gives $d_2(x,0) = \lVert x\rVert_2 = 1 < 2$; so $S$ is bounded. [L6, L7]

1.4 $e_0 \in S$, because $\lVert e_0\rVert_2 = 1$; this is where $n \ge 1$ is used, since for $n = 0$ there is no index $0 < n$ and no such vector. So $S \ne \emptyset$. [L8]

1.5 For every $a \in S$ and every real $\varepsilon > 0$, a $\delta > 0$ witnessing continuity of $N$ at $a$ as a map on $\mathbb{R}^{n}$ also witnesses it for the restriction $N|_S$ on the metric subspace $(S, d_S)$, because $d_S$ is the restriction of $d_2$ and the condition is quantified over fewer points; so $N|_S$ is continuous. [L1, L10]

1.6 Put $C' := C\sqrt{\iota(n)} + 1$, a real $> 0$. By [L1], $N(x) \le C\lVert x\rVert_1 \le C\sqrt{\iota(n)}\lVert x\rVert_2 \le C'\lVert x\rVert_2$, the last step because $\lVert x\rVert_2 \ge 0$. [L1, L7]

2.1 $S$ is the preimage of $\{1\}$ under the continuous $\lVert\cdot\rVert_2$, hence closed in $\mathbb{R}^{n}$. [step 1.1, step 1.2, L5]

3.1 $S$ is a compact subset of $(\mathbb{R}^{n},d_2)$, being closed and bounded. [step 1.3, step 2.1, L3]

4.1 By the extreme value theorem applied to the nonempty compact metric space $(S,d_S)$ and the continuous $N|_S$, there is $x_{\min} \in S$ with $N(x_{\min}) \le N(x)$ for every $x \in S$; put $c := N(x_{\min})$. [step 1.4, step 1.5, step 3.1, L4]

5.1 $c > 0$: from $x_{\min} \in S$ we get $\lVert x_{\min}\rVert_2 = 1 \ne 0$, so $x_{\min} \ne 0$ by (N1) for $\lVert\cdot\rVert_2$, so $N(x_{\min}) \ne 0$ by (N1) for $N$, and $N(x_{\min}) \ge 0$; trichotomy leaves $c > 0$. [step 4.1, L7, L9]

5.2 Let $x \ne 0$. Then $\lVert x\rVert_2 > 0$ by (N1) and nonnegativity, so $t := 1/\lVert x\rVert_2 > 0$ and $u := t\,x$ satisfies $\lVert u\rVert_2 = |t|\,\lVert x\rVert_2 = 1$ by (N2); hence $u \in S$ and $c \le N(u) = |t|\,N(x) = N(x)/\lVert x\rVert_2$, that is $c\,\lVert x\rVert_2 \le N(x)$. [step 4.1, L7, L9]

6.1 For $x = 0$ both $c\lVert x\rVert_2$ and $N(x)$ are $0$ by (N1), so $c\lVert x\rVert_2 \le N(x)$ holds for every $x \in \mathbb{R}^{n}$. [step 5.2, L7]

7.1 Steps 5.1, 6.1 and 1.6 give $c\lVert x\rVert_2 \le N(x) \le C'\lVert x\rVert_2$ with $c, C' > 0$, so every norm $N$ on $\mathbb{R}^{n}$ is equivalent to $\lVert\cdot\rVert_2$. [step 5.1, step 6.1, step 1.6, L2]

8.1 Given two norms $M$ and $N$ on $\mathbb{R}^{n}$, each is equivalent to $\lVert\cdot\rVert_2$ by step 7.1, so $M$ is equivalent to $N$ by symmetry and transitivity of the relation. [step 7.1, L2] ∎

## Remarks

- **What the proof spends, and where it stops.** The only nonelementary ingredients are compactness of the Euclidean unit sphere, obtained from [[thm-heine-borel-rn]], and the extreme value theorem [[thm-extreme-value-metric]]. Heine-Borel in $\mathbb{R}^{n}$ is proved by bisection and uses no choice principle, and the extreme value theorem is a theorem of ZF ([[rem-compactness-choice-ledger-metric]]), so this theorem costs no choice either.

- **The sphere is where the argument is finite-dimensional.** The step that fails outside $\mathbb{R}^{n}$ is step 3.1: closed and bounded gives compact by [[thm-heine-borel-rn]], a theorem about $\mathbb{R}^{n}$ for a natural $n$ and about nothing else. The companion page exhibits a real vector space carrying two inequivalent norms, and the same space with a closed bounded set that is not compact. **This remark is a statement about this proof and about that witness; no claim is made here about normed spaces in general, a theory this library has not built.**

- **The constants are not canonical.** Nothing in the statement fixes $c$ or $C'$, and the proof produces one admissible pair, not the best one. Sharp constants for the three named norms on $\mathbb{R}^{2}$ are computed on the companion page.
````

### `thm-bolzano-weierstrass`

````markdown
---
id: thm-bolzano-weierstrass
kind: theorem
title: "Bolzano-Weierstrass: every bounded real sequence has a convergent subsequence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-peak-monotone-subsequence, cor-monotone-converges-iff-bounded, def-subsequential-limit, def-sequence, def-monotone-sequence]
justified_by: []
forward_refs: [cex-unbounded-with-convergent-subsequence]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.6(b))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6 (Thm 6.6.8)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3 (Thm 2.3.8)"
      url: "https://www.jirka.org/ra/"
---

## Statement

Every bounded sequence of reals has a convergent subsequence: if $(x_k)$ is a
sequence of reals and there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
$k \in \mathbb{N}$ ([[def-sequence]]), then there is a strictly increasing
$n : \mathbb{N} \to \mathbb{N}$ and a real $L$ with $x_{n_j} \to L$.

Equivalently: the subsequential limit set of a bounded sequence is nonempty
([[def-subsequential-limit]]).

The theorem is the exact repair of the false claim that a bounded sequence
converges. A bounded
sequence need not converge, and the alternating sequence is the standing witness;
what boundedness does force is that *some* subsequence converges. The converse of
the theorem is false, and badly so: a sequence with a convergent subsequence need
not be bounded.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals and a real $M$ with $|x_k| \le M$ for every $k \in \mathbb{N}$.

[L1] Every sequence of reals has a monotone subsequence ([[lem-peak-monotone-subsequence]]).

[L2] A monotone sequence of reals converges if and only if it is bounded ([[cor-monotone-converges-iff-bounded]]).

[L3] A subsequence $(x_{n_j})$ of $(x_k)$ along a strictly increasing $n$ is again a sequence of reals, and each of its terms is a term of $(x_k)$; a sequence is bounded when some $M$ satisfies $|{\cdot}| \le M$ at every index ([[def-sequence]]).

[L4] Monotone means nondecreasing or nonincreasing ([[def-monotone-sequence]]).

[L5] $L$ is a subsequential limit of $(x_k)$ when some subsequence of $(x_k)$ converges to $L$ ([[def-subsequential-limit]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] fix a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ such that the subsequence $(x_{n_j})$ is monotone; no hypothesis on $(x_k)$ is needed for this step. [given, L1, L4, choose]

2.1 $(x_{n_j})$ is bounded: each of its terms is a term of $(x_k)$, so $|x_{n_j}| \le M$ for every $j$, with the same $M$. [step 1.1, given, L3]

3.1 Being monotone and bounded, $(x_{n_j})$ converges; write $L$ for its limit. [step 1.1, step 2.1, L2]

4.1 So $(x_k)$ has a convergent subsequence, and $L$ is a subsequential limit of $(x_k)$; in particular the subsequential limit set of a bounded sequence is nonempty. [step 3.1, L5] ∎

## Remarks

- **The proof is two citations, and that is the point of the page order.** All
  the work sits in [[lem-peak-monotone-subsequence]], which needs nothing about
  $\mathbb{R}$ beyond trichotomy, and in [[cor-monotone-converges-iff-bounded]],
  which is where the least-upper-bound property is actually spent. Splitting the
  argument this way isolates the use of completeness in a single place instead of
  burying it in a bisection.

- **Bisection is the other standard proof and is not used here.** Halving the
  interval $[-M, M]$ repeatedly and keeping a half containing infinitely many
  terms produces a nested sequence of intervals whose lengths tend to $0$, and
  [[thm-nested-interval-property]] then yields the limit. That route is
  available in this library, since the nested interval property is proved on this
  page, but it needs an extra argument to choose the terms and to see that the
  chosen indices increase, whereas the monotone-subsequence route needs neither.

- **The limit is not determined by the theorem.** A bounded sequence may have
  many subsequential limits, and the theorem asserts only that there is at least
  one. Which subsequential limits exist, and that there is a largest and a
  smallest, is the subject of the $\limsup$ page.

- **Boundedness is sufficient but not necessary.** The converse fails, by
  [[fs-convergent-subsequence-implies-bounded]] and its witness
  [[cex-unbounded-with-convergent-subsequence]]: a wildly unbounded sequence can
  still have a constant, hence convergent, subsequence.
````

### `thm-compact-implies-the-other-compactness-forms`

````markdown
---
id: thm-compact-implies-the-other-compactness-forms
kind: theorem
title: "In any metric space compactness implies countable compactness and limit point compactness, and each of countable compactness and limit point compactness implies sequential compactness; every implication here is proved without a choice principle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-metric-compactness, def-metric-compactness-variants, thm-metric-closure-characterisation, def-metric-interior-closure-boundary, def-metric-topology, thm-metric-open-set-algebra, def-metric-ball, thm-recursion, def-finite-sum, thm-well-ordering-principle, lem-finite-choice, lem-finite-set-has-max, def-max-min, def-canonical-natural, lem-of-naturals-positive, thm-nat-linear-order, def-metric-convergence, lem-index-map-grows, cor-archimedean-reciprocal, thm-of-archimedean, def-sequence, def-countable, lem-countable-iff-surjection-from-n, lem-subset-of-countable, def-injection-surjection-bijection, def-metric-space]
justified_by: []
aliases: []
landmark: true
short: "the choice-free implications"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "Limit point compact (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point_compact"
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), with compactness as in
[[def-metric-compactness]] and the three variants as in
[[def-metric-compactness-variants]]. Then:

1. If $(X,d)$ is compact, it is countably compact.
2. If $(X,d)$ is compact, it is limit point compact.
3. If $(X,d)$ is countably compact, it is sequentially compact.
4. If $(X,d)$ is limit point compact, it is sequentially compact.

**Every one of the four is a theorem of ZF.** Where a subsequence is extracted,
the index at each stage is the **least** admissible one, which
[[thm-well-ordering-principle]] makes canonical and [[thm-recursion]] then
assembles into a function; where finitely many indices have to be recovered from
finitely many sets, [[lem-finite-choice]] supplies them and is itself a theorem
of ZF. Nothing below appeals to countable or to dependent choice.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, whichever of the four properties is assumed in the claim under proof.

[L1] The definitions: $(X,d)$ is compact when every family of open subsets with union $X$ has a finite subfamily with union $X$; countably compact when every such family that is at most countable does; sequentially compact when every sequence has a subsequence converging in $X$; limit point compact when every infinite subset has a limit point in $X$, where $p$ is a limit point of $A$ when $B(p,r) \cap (A \setminus \{p\}) \ne \emptyset$ for every real $r>0$ ([[def-metric-compactness]], [[def-metric-compactness-variants]], [[def-metric-interior-closure-boundary]], [[def-sequence]]).

[L3] Open balls are open, an arbitrary union of open sets is open, and a set is closed exactly when its complement is open ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[def-metric-ball]]).

[L4] The closure $\overline{S}$ is closed, contains $S$ and is the smallest closed superset of $S$; and $x \in \overline{S}$ exactly when $B(x,r) \cap S \ne \emptyset$ for every real $r > 0$ ([[thm-metric-closure-characterisation]], [[def-metric-interior-closure-boundary]]).

[L5] Recursion: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(n+1) = f(g(n))$; when the recursion rule depends on the stage, it is applied to $A = \mathbb{N} \times Z$ and the first coordinate of $g(n)$ is $n$, by the small induction recorded in [[def-finite-sum]] ([[thm-recursion]]).

[L6] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L7] A finite list $n_0, \dots, n_p$ of natural numbers has a greatest member: the reals $\iota(n_0+1), \dots, \iota(n_p+1)$, with $\iota$ the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]), form a nonempty finite set of reals and so have a maximum, which is one of them, say $\iota(n_j+1)$ ([[lem-finite-set-has-max]], [[def-max-min]]); $m \mapsto \iota(m)$ is strictly increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]) and the order of $\mathbb{N}$ is linear ([[thm-nat-linear-order]]), so $n_i \le n_j$ for every $i \le p$.

[L8] A nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L9] Finiteness: a set listed as $\{a_0, \dots, a_n\}$ is finite, a nonempty finite set can be listed, and a subset of $\mathbb{N}$ bounded above is finite ([[def-metric-compactness]], [[def-countable]], [[lem-subset-of-countable]]); an injection carries a set to a set in bijection with its image ([[def-injection-surjection-bijection]]).

[L10] A family indexed by $\mathbb{N}$ is at most countable, being the image of a surjection from $\mathbb{N}$ ([[def-countable]], [[lem-countable-iff-surjection-from-n]]).

[L11] $x_k \to p$ when for every rational $\varepsilon > 0$ there is $K$ with $d(x_k,p) < \varepsilon$ for $k \ge K$; and for every real $\varepsilon > 0$ there is a natural $N \ge 1$ with $1/N < \varepsilon$ ([[def-metric-convergence]], [[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L12] An index map $n : \mathbb{N} \to \mathbb{N}$ with $n_k < n_{k+1}$ for every $k$ is strictly increasing, and then $n_k \ge k$ ([[lem-index-map-grows]]).

[L13] A function with domain a natural number all of whose values are nonempty sets has a choice function, in ZF ([[lem-finite-choice]]).

[L14] A metric is symmetric and satisfies the triangle inequality, and $d(x,y) = 0$ exactly when $x = y$ ([[def-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is immediate: an at most countable family of open sets with union $X$ is in particular a family of open sets with union $X$, so compactness supplies the finite subfamily that countable compactness asks for. [L1]

2.1 For claim 2, assume $(X,d)$ compact, let $A \subseteq X$ have no limit point in $X$, and put $\mathcal{U} := \{\, U \subseteq X : U \text{ open in } X \text{ and } U \cap A \text{ has at most one element} \,\}$, a family cut out by a property; $\mathcal{U}$ has union $X$, because each $p \in X$ fails to be a limit point of $A$ and so admits $r > 0$ with $B(p,r) \cap (A \setminus \{p\}) = \emptyset$, whence $B(p,r) \in \mathcal{U}$ and $p \in B(p,r)$. [L1, L3, step 1.1]

3.1 Compactness gives $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $X = U_0 \cup \dots \cup U_n$, unless $X = \emptyset$, in which case $A = \emptyset$ is finite. [L1, step 2.1]

4.1 Define $\varphi : A \to \sigma(n)$ by letting $\varphi(a)$ be the least $i \le n$ with $a \in U_i$; this is well defined and canonical, and it is injective, since $\varphi(a) = \varphi(b) = i$ puts both $a$ and $b$ in $U_i \cap A$, a set with at most one element. Hence $A$ is in bijection with $\varphi[A]$, a subset of $\mathbb{N}$ bounded above by $n$, so $A$ is finite. [L6, L9, step 3.1]

5.1 So a subset of $X$ with no limit point in $X$ is finite; contrapositively every infinite subset of $X$ has a limit point in $X$, and $(X,d)$ is limit point compact: claim 2. [L1, step 4.1]

6.1 For claim 3, assume $(X,d)$ countably compact, let $(x_k)$ be a sequence in $X$ and put $T_n := \overline{\{\, x_k : k \ge n \,\}}$ for $n \in \mathbb{N}$. [L1, L4, step 5.1]

7.1 Each $T_n$ is closed and contains $x_n$, and $T_m \subseteq T_n$ whenever $m \ge n$, because $\{x_k : k \ge m\} \subseteq \{x_k : k \ge n\} \subseteq T_n$ and $T_m$ is the smallest closed superset of the first set. [L4, step 6.1]

8.1 Suppose for contradiction that $\bigcap_{n \in \mathbb{N}} T_n = \emptyset$; then $\mathcal{V} := \{\, X \setminus T_n : n \in \mathbb{N} \,\}$ is an at most countable family of open subsets of $X$ whose union is $X \setminus \bigcap_{n} T_n = X$. [L3, L10, step 7.1, assume-contra]

9.1 Countable compactness gives a finite subfamily $V_0, \dots, V_p$ of $\mathcal{V}$ with union $X$; putting $W_i := X \setminus V_i$, each $W_i$ equals $T_n$ for at least one $n$, so finite choice applied to $i \mapsto \{\, n \in \mathbb{N} : T_n = W_i \,\}$ yields indices $n_0, \dots, n_p$ with $W_i = T_{n_i}$, and a greatest member $n_j$ of that list satisfies $T_{n_j} \subseteq T_{n_i}$ for every $i \le p$. [L7, L13, step 8.1]

10.1 Then $T_{n_j} = T_{n_0} \cap \dots \cap T_{n_p} = X \setminus (V_0 \cup \dots \cup V_p) = \emptyset$, contradicting $x_{n_j} \in T_{n_j}$. [step 7.1, step 9.1, discharge-contradiction]

11.1 Hence there is $p \in X$ with $p \in T_n$ for every $n \in \mathbb{N}$. [step 10.1]

12.1 For every $k \in \mathbb{N}$ and every $m \in \mathbb{N}$ the set $\{\, j \in \mathbb{N} : j > m \text{ and } d(x_j,p) < 1/(k+2) \,\}$ is nonempty, since $p \in T_{m+1}$ means that the ball $B(p, 1/(k+2))$ meets $\{x_j : j \ge m+1\}$; so it has a least element, and likewise $\{\, j : d(x_j,p) < 1 \,\}$ is nonempty and has a least element $m_0$. [L4, L6, L11, step 11.1]

13.1 Applying recursion on $\mathbb{N} \times \mathbb{N}$ to the starting value $(0, m_0)$ and the rule $f(k,m) := (k+1,\ \text{the least } j > m \text{ with } d(x_j,p) < 1/(k+2))$ produces $g : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ whose first coordinate at $k$ is $k$; write $n_k$ for its second coordinate. [L5, step 12.1]

14.1 Then $n_k < n_{k+1}$ for every $k$, so $k \mapsto n_k$ is strictly increasing, and $d(x_{n_k},p) < 1/(k+1)$ for every $k$, the case $k = 0$ being the choice of $m_0$. [L12, step 13.1]

15.1 Given a rational $\varepsilon > 0$ take a natural $N \ge 1$ with $1/N < \varepsilon$; for $k \ge N$ one has $k + 1 > N$ and so $d(x_{n_k},p) < 1/(k+1) < 1/N < \varepsilon$. Hence $x_{n_k} \to p$, the sequence $(x_k)$ has a convergent subsequence, and $(X,d)$ is sequentially compact: claim 3. [L1, L11, step 14.1]

16.1 For claim 4, assume $(X,d)$ limit point compact, let $(x_k)$ be a sequence in $X$ and let $R := \{\, x_k : k \in \mathbb{N} \,\}$ be its range, a nonempty subset of $X$. [L1, step 15.1]

17.1 Suppose first that $R$ is finite, and list it as $R = \{v_0, \dots, v_m\}$; putting $S_i := \{\, k \in \mathbb{N} : x_k = v_i \,\}$ for $i \le m$ gives $\mathbb{N} = S_0 \cup \dots \cup S_m$. [L9, step 16.1]

18.1 Some $S_i$ is unbounded in $\mathbb{N}$: otherwise each $S_i$ has an upper bound in $\mathbb{N}$ and hence a least upper bound $N_i$, canonical by well-ordering, and a greatest member $N$ of the list $N_0, \dots, N_m$ would satisfy $N + 1 > N_i$ for every $i$, so that $N+1$ lies in no $S_i$, against $\mathbb{N} = S_0 \cup \dots \cup S_m$. Let $i^{\ast}$ be the least $i \le m$ for which $S_i$ is unbounded. [L6, L7, step 17.1]

19.1 Recursion applied to the starting value $\min S_{i^{\ast}}$ and the rule $f(m) := \min \{\, k \in S_{i^{\ast}} : k > m \,\}$, each of these sets being nonempty because $S_{i^{\ast}}$ is unbounded, produces a strictly increasing $k \mapsto n_k$ with $x_{n_k} = v_{i^{\ast}}$ for every $k$; a constant sequence converges to its value, so $x_{n_k} \to v_{i^{\ast}} \in X$. [L5, L6, L11, L12, L14, step 18.1]

20.1 Suppose instead that $R$ is infinite; limit point compactness then gives a limit point $p \in X$ of $R$. [L1, step 19.1]

21.1 Suppose for contradiction that some real $r > 0$ and some $N \in \mathbb{N}$ satisfy $d(x_k,p) \ge r$ for every $k \ge N$. [step 20.1, assume-contra]

22.1 Let $E$ be the set listed by $r$ together with the $N$ entries $e_k$ for $k < N$, where $e_k := d(x_k,p)$ if $x_k \ne p$ and $e_k := r$ otherwise; every listed entry is a positive real, so $E$ is a nonempty finite set of positive reals and $s := \min E > 0$. Then $B(p,s)$ misses $R \setminus \{p\}$: a point of $R \setminus \{p\}$ is $x_k$ with $x_k \ne p$, and $d(x_k,p) \ge r \ge s$ when $k \ge N$, while $d(x_k,p) = e_k \ge s$ when $k < N$. That contradicts $p$ being a limit point of $R$. [L1, L8, L14, step 21.1, discharge-contradiction]

23.1 Hence for every real $r > 0$ and every $N \in \mathbb{N}$ there is $k \ge N$ with $d(x_k,p) < r$. [step 22.1]

24.1 Consequently, for every $k$ and every $m$ the set $\{\, j > m : d(x_j,p) < 1/(k+2) \,\}$ is nonempty, as is $\{\, j : d(x_j,p) < 1 \,\}$, and the recursion of steps 13.1 and 14.1 applies verbatim, producing a strictly increasing $k \mapsto n_k$ with $d(x_{n_k},p) < 1/(k+1)$; by the estimate of step 15.1, $x_{n_k} \to p$. [L5, L6, L11, L12, step 13.1, step 14.1, step 15.1, step 23.1]

25.1 In both cases $(x_k)$ has a subsequence converging in $X$, so $(X,d)$ is sequentially compact: claim 4. [L1, step 19.1, step 24.1]

26.1 Claims 1, 2, 3 and 4 are proved by steps 1.1, 5.1, 15.1 and 25.1 respectively. [step 1.1, step 5.1, step 15.1, step 25.1] ∎

## Remarks

**Why "least" and not "some".** At every stage of every recursion above, the next index is the least one meeting the requirement. That is what keeps the four implications inside ZF: a rule that says "take some admissible $j$" would be a selection made infinitely often, and one made in terms of the previous stage, which is dependent choice ([[def-dependent-choice]]) rather than countable choice. The same device is what [[thm-sequentially-compact-implies-totally-bounded]] cannot use, and that is exactly why that theorem, alone among the implications between the compactness properties on this page, costs dependent choice. It is not the only implication on the page with a choice cost: [[thm-complete-and-totally-bounded-implies-compact]] spends countable choice, for the different reason that it needs one net for every radius at once. The arrow-by-arrow accounting is [[rem-compactness-choice-ledger-metric]].

**Finite selections are free.** Step 9.1 does select, but only over the finite index set $\{0, \dots, p\}$, and [[lem-finite-choice]] proves that such a selection exists in ZF by induction on the size of the index set. Nothing is being smuggled in: what a choice principle buys is infinitely many selections at once.

**The two routes to sequential compactness are genuinely different.** Claim 3 works with the closures of the tails of the given sequence and needs the countable cover they generate; claim 4 works with the range of the sequence and splits on whether it is finite. Neither argument subsumes the other, and both are needed, because the equivalence proved in [[thm-metric-compactness-equivalences]] passes through both.
````

### `thm-heine-borel-rn`

````markdown
---
id: thm-heine-borel-rn
kind: theorem
title: "Heine-Borel in $\\mathbb{R}^n$: with the Euclidean metric a subset of $\\mathbb{R}^n$ is compact if and only if it is closed and bounded, and the proof by bisection uses no choice principle; the same holds on the real line"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, lem-compactness-is-intrinsic, thm-compact-subset-is-closed-and-bounded, lem-closed-subset-of-a-compact-space-is-compact, lem-metrics-on-rn, lem-real-line-is-a-metric-space, thm-nested-interval-property, thm-recursion, def-finite-sum, def-interval, def-integer-power, lem-geometric-sequence-null, lem-finite-sum-laws, def-metric-ball, def-metric-bounded-diameter, def-metric-topology, def-isometry-and-metric-embedding, lem-finite-set-has-max, def-max-min, cor-archimedean-reciprocal, thm-of-archimedean, thm-of-square-roots, lem-of-square-monotone, def-abs-value, def-canonical-natural, def-real-limit, def-metric-space]
justified_by: []
aliases: [thm-heine-borel-euclidean]
landmark: true
short: "Heine-Borel in $\\mathbb{R}^n$"
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions
$n \to \mathbb{R}$ and let $d_2$ be the Euclidean metric on it
([[lem-metrics-on-rn]]). Then:

1. **Closed boxes are compact.** For reals $a_k \le b_k$ $(k < n)$ the box
   $Q = \{\, x \in \mathbb{R}^n : a_k \le x_k \le b_k \text{ for every } k < n \,\}$
   is a compact subset of $(\mathbb{R}^n, d_2)$ ([[def-metric-compactness]]).
2. **Heine-Borel.** A subset $K \subseteq \mathbb{R}^n$ is a compact subset of
   $(\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\mathbb{R}^n$
   ([[def-metric-topology]]) and bounded
   ([[def-metric-bounded-diameter]]).
3. **The real line.** A subset $K \subseteq \mathbb{R}$ is a compact subset of
   $(\mathbb{R}, d_{\mathbb{R}})$, the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   ([[lem-real-line-is-a-metric-space]]), if and only if $K$ is closed in
   $\mathbb{R}$ and bounded.

**No choice principle is used.** The bisection below halves one coordinate at a
time and takes the **left** half whenever the left half still fails to be finitely
covered, the right half otherwise: a rule with two outcomes, decided by a
property of the box, not a selection. That is the whole reason the theorem is
available in ZF, while the general "complete and totally bounded implies compact"
([[thm-complete-and-totally-bounded-implies-compact]]) is not.

The hypothesis $n \ge 1$ is inherited from [[lem-metrics-on-rn]], which defines
$\mathbb{R}^n$ and its metrics only there; the last remark below records what
happens at $n = 0$.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the metric space $(\mathbb{R}^n, d_2)$, and the notions of open, closed, bounded and compact subset in it.

[L1] $\mathbb{R}^n$ is the set of functions $n \to \mathbb{R}$, and $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^2}$, $d_\infty(x,y) = \max\{|x_k - y_k| : k < n\}$ are metrics on it ([[lem-metrics-on-rn]], [[def-finite-sum]], [[def-metric-space]]).

[L2] Finite sums of nonnegative terms dominate each term and are monotone, and $\sum_{k<n} c = \iota(n)c$ for a constant $c$, $\iota(n)$ being the canonical natural of $\mathbb{R}$ ([[lem-finite-sum-laws]], [[def-finite-sum]], [[def-canonical-natural]]).

[L3] For $a,b \ge 0$: $a \le b$ exactly when $a^2 \le b^2$; every $a \ge 0$ has a unique nonnegative square root; and $\sqrt{c^2} = |c|$ for every real $c$ ([[lem-of-square-monotone]], [[thm-of-square-roots]], [[def-abs-value]]).

[L4] A subset $A$ is compact exactly when every family $(U_i)_{i \in I}$ of open subsets of the ambient space with $A \subseteq \bigcup_{i \in I} U_i$ has finitely many members whose union contains $A$, or $A = \emptyset$; and the sets open in the subspace $A$ are exactly the traces on $A$ of the open subsets of the ambient space, so, taking complements inside $A$, the sets closed in $A$ are exactly the traces on $A$ of the closed subsets of the ambient space ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]], [[def-metric-topology]], [[def-isometry-and-metric-embedding]]).

[L5] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

[L6] A closed subset of a compact metric space is compact ([[lem-closed-subset-of-a-compact-space-is-compact]]).

[L7] Nested closed bounded intervals $I_m = [\alpha_m,\beta_m]$ with $I_{m+1} \subseteq I_m$ have nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$ ([[thm-nested-interval-property]], [[def-interval]], [[def-real-limit]]).

[L8] Recursion: for a set $A$, an element $a \in A$ and $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(m+1) = f(g(m))$; a stage-dependent rule is handled on $A = \mathbb{N} \times Z$, the first coordinate of $g(m)$ then being $m$ ([[thm-recursion]], [[def-finite-sum]]).

[L9] $(1/2)^m \to 0$, integer powers being those of [[def-integer-power]] ([[lem-geometric-sequence-null]], [[def-real-limit]]).

[L10] A nonempty finite set of reals has a maximum, one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L11] $U$ is open exactly when every point of $U$ has a ball inside $U$; a subset is bounded when it is empty or lies in some ball $B(x_0,\rho)$ with $\rho > 0$ ([[def-metric-topology]], [[def-metric-ball]], [[def-metric-bounded-diameter]]).

[L12] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 For $x,y \in \mathbb{R}^n$ and $k < n$ the term $(x_k-y_k)^2$ is one of the nonnegative terms of $\sum_{j<n}(x_j-y_j)^2$, so $(x_k-y_k)^2 \le d_2(x,y)^2$, and taking nonnegative square roots gives $|x_k - y_k| \le d_2(x,y)$; hence $d_\infty(x,y) \le d_2(x,y)$. [L1, L2, L3]

1.2 Conversely each $(x_j-y_j)^2 \le d_\infty(x,y)^2$, so $d_2(x,y)^2 \le \iota(n)\,d_\infty(x,y)^2 \le \big(\iota(n) d_\infty(x,y)\big)^2$, the last step because $\iota(n) \ge 1$; hence $d_2(x,y) \le \iota(n)\, d_\infty(x,y)$. [L1, L2, L3]

2.1 For claim 1 fix reals $a_k \le b_k$ $(k<n)$ and the box $Q$ they determine, let $(U_i)_{i \in I}$ be open subsets of $\mathbb{R}^n$ with $Q \subseteq \bigcup_{i \in I} U_i$, call a set $S \subseteq \mathbb{R}^n$ **finitely covered** when finitely many of the $U_i$ have union containing $S$, and suppose for contradiction that $Q$ is not finitely covered. [L4, step 1.1, step 1.2, assume-contra]

3.1 For a box $P = \{\, x : c_j \le x_j \le e_j \ (j<n) \,\}$ with $c_j \le e_j$ and for $k < n$, let $P^{k,0}$ and $P^{k,1}$ be the boxes obtained by replacing the $k$-th interval $[c_k,e_k]$ by $[c_k, (c_k+e_k)/2]$ and by $[(c_k+e_k)/2, e_k]$; then $P = P^{k,0} \cup P^{k,1}$ by trichotomy applied to $x_k$ against the midpoint, the $k$-th side length of each is $(e_k-c_k)/2$ and the others are unchanged, and if both halves were finitely covered so would $P$ be, the union of two finite subfamilies being finite. Define $H_k(P) := P^{k,0}$ if $P^{k,0}$ is not finitely covered, and $H_k(P) := P^{k,1}$ otherwise; this is a definition by a property, and $H_k(P)$ is not finitely covered whenever $P$ is. [L7, step 2.1]

4.1 Recursion on $\mathbb{N} \times Z$, with $Z$ the set of functions from boxes to boxes, starting value $(0, \mathrm{id})$ and rule $(j, h) \mapsto (j+1,\ H_j \circ h)$ for $j < n$ and $(j,h) \mapsto (j+1,h)$ otherwise, produces $G_j$ for every $j$; put $G := G_n$. By induction on $j \le n$, $G_j(P) \subseteq P$ is a box whose $k$-th side is half that of $P$ for $k < j$ and equal to that of $P$ for $k \ge j$, and $G_j(P)$ is not finitely covered when $P$ is not. So $G(P) \subseteq P$ halves every side and preserves not being finitely covered. [L8, step 3.1]

5.1 Recursion applied to the starting value $Q$ and the rule $G$ produces boxes $P_m$ with $P_0 = Q$ and $P_{m+1} = G(P_m)$; each $P_m$ fails to be finitely covered, $P_{m+1} \subseteq P_m$, and the $k$-th side length of $P_m$ is $\ell_k (1/2)^m$, where $\ell_k := b_k - a_k \ge 0$. [L8, step 4.1]

6.1 For each $k < n$ the $k$-th intervals of the $P_m$ form a nested family of closed bounded intervals whose lengths $\ell_k(1/2)^m$ tend to $0$, so their intersection is a single point $p_k$; the function $p : n \to \mathbb{R}$, $k \mapsto p_k$, is a point of $\mathbb{R}^n$ lying in every $P_m$. [L7, L9, step 5.1]

7.1 Since $p \in P_0 = Q \subseteq \bigcup_{i \in I} U_i$, there is $i^{\ast} \in I$ with $p \in U_{i^{\ast}}$, and openness gives a real $r > 0$ with $B(p,r) \subseteq U_{i^{\ast}}$. [L11, step 6.1]

8.1 Put $L := \max\{\ell_k : k < n\} \ge 0$ and $C := \iota(n) L + 1 > 0$; for $x \in P_m$ each $|x_k - p_k|$ is at most the $k$-th side length of $P_m$, so $d_\infty(x,p) \le L (1/2)^m$ and $d_2(x,p) \le \iota(n) L (1/2)^m \le C (1/2)^m$ by step 1.2. Taking a natural $N \ge 1$ with $1/N < r/C$ and then $m$ with $(1/2)^m < 1/N$ gives $P_m \subseteq B(p,r) \subseteq U_{i^{\ast}}$, so $P_m$ is finitely covered by the single set $U_{i^{\ast}}$, contradicting step 5.1. [L9, L10, L12, step 1.2, step 5.1, step 6.1, step 7.1, discharge-contradiction]

9.1 Therefore every such family has finitely many members covering $Q$, and $Q$ is a compact subset of $(\mathbb{R}^n,d_2)$: claim 1 is proved. [L4, step 2.1, step 8.1]

10.1 For claim 2, a compact $K \subseteq \mathbb{R}^n$ is closed and bounded. [L5, step 9.1]

11.1 Conversely let $K \subseteq \mathbb{R}^n$ be closed and bounded; if $K = \emptyset$ it is compact, and otherwise $K \subseteq B(x_0,\rho)$ for some $x_0$ and real $\rho > 0$, so every $x \in K$ and $k < n$ satisfy $|x_k| \le |(x_0)_k| + |x_k - (x_0)_k| \le |(x_0)_k| + d_2(x,x_0) < |(x_0)_k| + \rho$ by step 1.1; with $M := \max\{|(x_0)_k| : k < n\} + \rho$ the box $Q_M := \{\, x : -M \le x_k \le M \ (k<n) \,\}$ contains $K$. [L10, L11, step 1.1, step 10.1]

12.1 $K$ is the trace on $Q_M$ of a closed subset of $\mathbb{R}^n$, namely of $K$ itself, so $K$ is closed in the metric subspace $Q_M$; that subspace is compact by step 9.1, so $K$ is compact, and claim 2 is proved. [L4, L6, step 9.1, step 11.1]

13.1 For claim 3, let $\psi : \mathbb{R} \to \mathbb{R}^1$ send $t$ to the function $1 \to \mathbb{R}$ with value $t$; it is a bijection and $d_2(\psi(s),\psi(t)) = \sqrt{(s-t)^2} = |s-t| = d_{\mathbb{R}}(s,t)$, so $\psi$ carries each ball onto the corresponding ball, hence open sets onto open sets and open covers onto open covers with matching finite subfamilies, and likewise closed sets onto closed sets and bounded sets onto bounded sets. Applying claim 2 with $n = 1$ to $\psi[K]$ therefore gives claim 3. [L1, L3, L4, L11, step 12.1] ∎

## Remarks

**Why the bisection halves one coordinate at a time.** Halving all $n$ coordinates at once produces $2^n$ sub-boxes, and choosing one of them canonically means enumerating them, which needs a bijection between the functions $n \to \{0,1\}$ and a natural number. Halving a single coordinate produces two sub-boxes, and "the left one if it is still not finitely covered, the right one otherwise" is a definition by cases needing nothing at all. Composing $n$ such halvings, as step 4.1 does, recovers the full halving of every side and keeps the construction canonical, which is what a choice-free proof requires.

**Where each hypothesis is used.** Closedness enters only at step 12.1, through [[lem-closed-subset-of-a-compact-space-is-compact]]; boundedness enters only at step 11.1, to fit $K$ inside a box. Dropping either leaves a non-compact set: the whole of $\mathbb{R}^n$ is closed and unbounded, and an open ball is bounded and not closed, and neither is compact by claim 2.

**The converse direction is what fails in a general metric space.** Claim 2 says that in $\mathbb{R}^n$ closed and bounded is enough; that is special to $\mathbb{R}^n$, and [[fs-closed-and-bounded-implies-compact-in-every-metric-space]] records the false general statement together with a witness. What survives in every metric space is only the direction of step 10.1 ([[thm-compact-subset-is-closed-and-bounded]]).

**The case $n = 0$.** $\mathbb{R}^0$ has exactly one element, the empty function, and [[lem-metrics-on-rn]] does not treat it, because $d_\infty$ would be a maximum over the empty index set. On a one-element set the only metric is the one taking the value $0$, and the resulting space is compact for trivial reasons: it is listed as $\{x_0\}$, and any family of open sets covering it has a member containing $x_0$ ([[def-metric-compactness]]). Nothing above is needed for that case and nothing above claims it.
````

### `thm-metric-compactness-equivalences`

````markdown
---
id: thm-metric-compactness-equivalences
kind: theorem
title: "For a metric space, compact, countably compact, limit point compact, sequentially compact, and complete together with totally bounded are all equivalent, given countable choice and dependent choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-compact-implies-complete-and-totally-bounded, thm-compact-implies-the-other-compactness-forms, lem-sequentially-compact-implies-complete, thm-sequentially-compact-implies-totally-bounded, thm-complete-and-totally-bounded-implies-compact, def-metric-compactness, def-metric-compactness-variants, def-totally-bounded, def-complete-metric-space, def-countable-choice, def-dependent-choice, def-metric-space]
justified_by: []
aliases: [thm-compactness-trichotomy-metric]
landmark: true
short: "the compactness equivalences"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2-3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice ([[def-countable-choice]]) and the Axiom
of Dependent Choice ([[def-dependent-choice]]).** Let $(X,d)$ be a metric space
([[def-metric-space]]). Then the following five conditions are equivalent.

- **(a)** $(X,d)$ is compact ([[def-metric-compactness]]).
- **(b)** $(X,d)$ is countably compact ([[def-metric-compactness-variants]]).
- **(c)** $(X,d)$ is limit point compact.
- **(d)** $(X,d)$ is sequentially compact.
- **(e)** $(X,d)$ is complete ([[def-complete-metric-space]]) and totally bounded
  ([[def-totally-bounded]]).

**The two hypotheses are not needed everywhere, and the statement should not be
read as if they were.** Of the implications assembled below, all but two are
theorems of ZF. Dependent choice is used only for "sequentially compact implies
totally bounded" ([[thm-sequentially-compact-implies-totally-bounded]]), and
countable choice only for "complete and totally bounded implies compact"
([[thm-complete-and-totally-bounded-implies-compact]]). Each is an upper bound on
the cost of the proof given in this library and not a claim of necessity; the
implication-by-implication account is
[[rem-compactness-choice-ledger-metric]].

## Facts & Assumptions

**Given:** A metric space $(X,d)$, the Axiom of Countable Choice, and the Axiom of Dependent Choice.

[L1] In ZF: a compact metric space is countably compact and limit point compact, and each of countable compactness and limit point compactness implies sequential compactness ([[thm-compact-implies-the-other-compactness-forms]]).

[L2] In ZF: a sequentially compact metric space is complete ([[lem-sequentially-compact-implies-complete]]).

[L3] Assuming dependent choice: a sequentially compact metric space is totally bounded ([[thm-sequentially-compact-implies-totally-bounded]]).

[L4] Assuming countable choice: a complete, totally bounded metric space is compact ([[thm-complete-and-totally-bounded-implies-compact]]).

[L5] In ZF: a compact metric space is complete and totally bounded ([[thm-compact-implies-complete-and-totally-bounded]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b), and (a) implies (c). [L1]

1.2 (b) implies (d), and (c) implies (d). [L1]

2.1 (d) implies (e): completeness of a sequentially compact space is a theorem of ZF, and total boundedness follows from dependent choice. [L2, L3, step 1.2]

3.1 (e) implies (a), by countable choice. [L4, step 2.1]

4.1 The cycle (a) $\Rightarrow$ (b) $\Rightarrow$ (d) $\Rightarrow$ (e) $\Rightarrow$ (a) is closed by steps 1.1, 1.2, 2.1 and 3.1, so the four conditions (a), (b), (d) and (e) are equivalent to one another. [step 1.1, step 1.2, step 2.1, step 3.1]

5.1 Condition (c) joins them: (a) implies (c) by step 1.1 and (c) implies (d) by step 1.2, while (d) implies (a) through the cycle of step 4.1. [step 1.1, step 1.2, step 4.1]

6.1 Hence all five conditions are equivalent; and the implication (a) $\Rightarrow$ (e), which the cycle obtains only by going round through (b) and (d), also holds directly and choice-freely. [L5, step 4.1, step 5.1] ∎

## Remarks

**Read the equivalence with the ledger beside it.** The theorem as stated carries two choice hypotheses, and a reader working in ZF alone still keeps a great deal: by [[thm-compact-implies-the-other-compactness-forms]] and [[thm-compact-implies-complete-and-totally-bounded]], compactness implies all four of the other conditions with no choice at all, and by [[lem-sequentially-compact-implies-complete]] sequential compactness implies completeness. What fails without choice is the return journey, from the weaker conditions back to compactness.

**The direct route from (a) to (e) is worth keeping.** Step 6.1 records that [[thm-compact-implies-complete-and-totally-bounded]] proves (a) $\Rightarrow$ (e) in ZF, whereas reading it off the cycle would route it through (b) and (d) and, at the last leg, through dependent choice. A cycle of implications transmits the weakest hypothesis around it; the individual arrows do not, and it is the individual arrows that the ledger records.

**Nothing here is claimed for topological spaces.** All five conditions make sense more generally, and the equivalences above are proved for metric spaces only, every argument using the metric.
````

### `thm-of-square-roots`

````markdown
---
id: thm-of-square-roots
kind: theorem
title: "Square roots exist: a unique $\\sqrt{a} \\ge 0$ with $(\\sqrt{a})^2 = a$; the positives are $\\{x^2 : x \\neq 0\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-sign-rules, lem-of-square-monotone, lem-of-square-positive, prop-of-multiply-inequalities, def-ordered-field]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Colorado analysis notes: The real numbers"
      url: "https://spot.colorado.edu/~baggett/chap1.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every
$a \in F$ with $a \ge 0$ has a **unique** $s \in F$ with $s \ge 0$ and $s^2 = a$;
we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the
nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$.

## Facts & Assumptions

**Given:** A complete ordered field $F$ ([[def-complete-ordered-field]]), that is, an ordered field ([[def-ordered-field]]) with the least-upper-bound property, and an element $a \in F$ with $a \ge 0$.

[L1] Every nonempty subset of $F$ that is bounded above has a least upper bound in $F$ ([[def-complete-ordered-field]]).

[L2] Sign and scaling rules: a product of positives is positive, and for $c > 0$ one has $x < y \iff cx < cy$ ([[lem-of-sign-rules]]).

[L3] Squaring is strictly monotone on the nonnegatives: if $0 \le x < y$ then $x^2 < y^2$; in particular squaring is injective on $\{x : x \ge 0\}$ ([[lem-of-square-monotone]]).

[L4] A nonzero square is positive: if $y \neq 0$ then $y^2 > 0$ ([[lem-of-square-positive]]).

[L5] Multiplying inequalities of positives: if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a = 0$, then $s = 0$ satisfies $s \ge 0$ and $s^2 = 0 = a$, so existence holds; assume henceforth $a > 0$. [given, algebra]

1.2 Uniqueness holds once a root exists: if $u, v \ge 0$ satisfy $u^2 = v^2$, then strict monotonicity of squaring on nonnegatives [L3] rules out both $u < v$ and $u > v$, forcing $u = v$; so at most one $s \ge 0$ has $s^2 = a$. [L3, given]

1.3 Define $S = \{ t \in F : t \ge 0 \text{ and } t^2 \le a \}$; then $0 \in S$ because $0 \ge 0$ and $0^2 = 0 \le a$, so $S \neq \emptyset$. [given, algebra]

1.4 The element $1 + a$ is an upper bound of $S$: since $a > 0$ we have $1 + a > 1$, so any $t > 1 + a$ has $t > 1$ and $t > 0$, whence $t^2 = t \cdot t > 1 \cdot t = t > 1 + a > a$, giving $t \notin S$. [given, L2]

2.1 By completeness [L1], $s := \sup S$ exists in $F$; and since $0 \in S$ we have $s \ge 0$. [L1, step 1.3, step 1.4]

3.1 Assume, for contradiction, that $s^2 \neq a$; by trichotomy either $s^2 < a$ or $s^2 > a$. [assume-contra, step 2.1]

4.1 (Case $s^2 < a$.) Choose $h$ with $0 < h < 1$ and $h < \dfrac{a - s^2}{2s + 1}$, possible since $a - s^2 > 0$ and $2s + 1 \ge 1 > 0$; then $h^2 = h \cdot h < h \cdot 1 = h$ and $h(2s+1) < a - s^2$, so $(s+h)^2 = s^2 + 2sh + h^2 < s^2 + 2sh + h = s^2 + h(2s+1) < a$, whence $s + h \in S$ with $s + h > s$, contradicting that $s$ is an upper bound of $S$. [assume-case low, step 3.1, step 2.1, L2, L5, choose]

4.2 (Case $s^2 > a$.) Here $s > 0$ since $s^2 > a \ge 0$; choose $h$ with $0 < h < s$ and $h < \dfrac{s^2 - a}{2s}$, so $2sh < s^2 - a$ and $(s-h)^2 = s^2 - 2sh + h^2 \ge s^2 - 2sh > a$, hence every $t \in S$ has $t^2 \le a < (s-h)^2$ with $t \ge 0$ and $s - h > 0$, so $t < s - h$ by [L3]; thus $s - h$ is an upper bound of $S$ with $s - h < s$, contradicting that $s$ is the least upper bound. [assume-case high, step 3.1, step 2.1, L3, choose]

5.1 Both cases of the disjunction in step 3.1 give a contradiction, so the assumption fails and $s^2 = a$: a unique (by step 1.2) $s = \sqrt{a} \ge 0$ with $s^2 = a$ exists, and applying this to any $x > 0$ writes $x = (\sqrt{x})^2$ with $\sqrt{x} \neq 0$ while conversely any nonzero square is positive by [L4], so the positive elements of $F$ are exactly the nonzero squares. [step 4.1, step 4.2, step 3.1, step 1.2, L4, cases, discharge-contradiction] ∎
````

