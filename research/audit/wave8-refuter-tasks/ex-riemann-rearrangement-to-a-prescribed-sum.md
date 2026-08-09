## Selection reasons

- critical risk (11): 8 declared dependencies; 8 cited facts; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `ex-riemann-rearrangement-to-a-prescribed-sum`

Normalized current SHA-256: `379287653545da6826ea886b0e3ad7506fd6882d8b36a8324686a36b9cf3ad1f`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-riemann-rearrangement-to-a-prescribed-sum
kind: example
title: "An explicit greedy rearrangement of the alternating harmonic series with sum $0$, and the same recipe for any prescribed real"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-riemann-series-theorem, ex-alternating-harmonic-series, lem-positive-and-negative-parts, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, thm-well-ordering-principle, thm-recursion, def-series]
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Example

Let $a_j = (-1)^j/\iota(j+1)$ be the terms of the alternating harmonic series,
which converges conditionally ([[ex-alternating-harmonic-series]]). Fix a real
$c$. The **greedy rearrangement towards $c$** is the bijection $\sigma$ of
$\mathbb{N}$ produced by the following rule, which is exactly the construction of
[[thm-riemann-series-theorem]] with the constant target $c$:

> at each step, if the running sum of the terms already used is at most $c$, take
> the next unused nonnegative term of the series; otherwise take the next unused
> negative term.

By [[thm-riemann-series-theorem]] the resulting rearrangement converges, with

$$\sum_{k=0}^{\infty} a_{\sigma(k)} \;=\; c .$$

For $c = 0$ the rule produces, in order,

$$1,\ -\tfrac12,\ -\tfrac14,\ -\tfrac16,\ -\tfrac18,\ \tfrac13,\ -\tfrac1{10},\ -\tfrac1{12},\ -\tfrac1{14},\ -\tfrac1{16},\ \tfrac15,\ \dots$$

the running sums after the successive terms being
$1,\ \tfrac12,\ \tfrac14,\ \tfrac1{12},\ -\tfrac1{24}$, then $\tfrac7{24}$ after
$\tfrac13$, and so on: one positive term followed by however many negative terms
are needed to bring the running sum below $0$ again.

The same series therefore has rearrangements summing to $0$, to $S$ itself, to
$\tfrac32 S$ ([[ex-alternating-harmonic-rearranged-to-three-halves]]) and to every
other real number, while its terms are never changed.

## Facts & Assumptions

**Given:** The terms $a_j = (-1)^j/\iota(j+1)$ of the alternating harmonic series, and a real number $c$.

[L1] The alternating harmonic series converges and does not converge absolutely, so it converges conditionally ([[ex-alternating-harmonic-series]], [[def-absolute-and-conditional-convergence]]).

[L2] For a conditionally convergent series both part series $\sum a_j^{+}$ and $\sum a_j^{-}$ diverge to $+\infty$, which is what keeps both supplies of terms inexhaustible ([[lem-positive-and-negative-parts]]).

[L3] The Riemann series theorem: for a conditionally convergent series and every real $c$ there is a bijection $\sigma$ of $\mathbb{N}$ with $\sum a_{\sigma(k)}$ convergent of sum $c$; the bijection is the greedy one described above, built by the recursion theorem on a state carrying the two counters and the running sum, with no least crossing index selected and no choice made ([[thm-riemann-series-theorem]], [[thm-recursion]], [[thm-well-ordering-principle]], [[def-rearrangement-and-unconditional-convergence]], [[def-series]]).

## Verification

**Proof technique:** direct.

1.1 The alternating harmonic series converges conditionally. [given, L1]

2.1 Its nonnegative terms are $a_{2i} = 1/\iota(2i+1)$, that is $1, 1/3, 1/5, \dots$, and its negative terms are $a_{2i+1} = -1/\iota(2i+2)$, that is $-1/2, -1/4, -1/6, \dots$; by [L2] the sums of each family are unbounded, so neither supply is exhausted at any stage of the greedy rule. [step 1.1, L2]

3.1 By the Riemann series theorem applied with the constant target $c$, the greedy rule defines a bijection $\sigma$ of $\mathbb{N}$ and $\sum_k a_{\sigma(k)}$ converges with sum $c$. [step 1.1, step 2.1, L3]

4.1 Taking $c = 0$ gives a rearrangement of the alternating harmonic series with sum $0$, and taking $c$ arbitrary gives one with sum $c$; the terms used are the same in every case. [step 3.1, L3] ∎

## Remarks

- **The displayed initial segment is arithmetic, not a further claim.** Starting from a running sum of $0$, which is at most $c = 0$, the rule takes the first nonnegative term $1$; the running sum $1$ then exceeds $0$, so negative terms are taken until it drops below $0$, which the successive values $\tfrac12,\ \tfrac14,\ \tfrac1{12},\ -\tfrac1{24}$ show happens after four of them. The reader may continue the computation indefinitely; nothing in the verification depends on it.

- **Why the greedy rule terminates each phase.** Each phase ends because the relevant part series diverges to $+\infty$ ([[lem-positive-and-negative-parts]]), so however far along the supply one is, enough remains to cross the target. This is the only place conditional convergence is used, and it is the reason the example has no analogue for an absolutely convergent series.

- **The overshoot vanishes, which is why the sum is exactly $c$.** At each crossing the running sum differs from $c$ by at most the term just used, and the terms of a convergent series tend to $0$; since both supplies are consumed in order and both are exhausted, the terms used at successive crossings tend to $0$ as well.
````

## Wave 8 provenance row for the target

```json
{
  "id": "ex-riemann-rearrangement-to-a-prescribed-sum",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf",
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
  ],
  "rationale": "The witness is a standard analysis example or a convention-adapted variant supported by the cited notes; its exact arithmetic and library-facing verification are locally composed.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-real-analysis-absolute-convergence.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "ex-alternating-harmonic-series",
      "source_section": "Example",
      "quote": "**alternating harmonic series** is",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-absolute-and-conditional-convergence",
      "source_section": "Definition",
      "quote": "conditionally** when it converges and does not converge absolutely. By",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-positive-and-negative-parts",
      "source_section": "Statement",
      "quote": "$\\sum a_k^{-}$ converges, and the partial sums of each diverge to $+\\infty$",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-riemann-series-theorem",
      "source_section": "Statement",
      "quote": "there is a bijection $\\sigma : \\mathbb{N} \\to \\mathbb{N}$",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-recursion",
      "source_section": "Statement",
      "quote": "Let $(N,0,\\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \\in A$, and any function $f : A \\to A$, there is a unique function $g : N \\to A$ such that $g(0) = a$ and $g(\\sigma(n)) = f(g(n))$ for all $n \\in N$.",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-well-ordering-principle",
      "source_section": "Statement",
      "quote": "Every nonempty subset $S \\subseteq \\mathbb{N}$ has a least element: there is $\\ell \\in S$ with $\\ell \\le s$ for all $s \\in S$.",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-rearrangement-and-unconditional-convergence",
      "source_section": "Definition",
      "quote": "$\\sigma : \\mathbb{N} \\to \\mathbb{N}$ be a bijection",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "**Series with a general starting index.** Let $m \\in \\mathbb{N}$ and let $a$ be a",
      "uses": [
        "3.1",
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Verified the stated inference at step 1.1.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Verified the stated inference at step 2.1.",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Verified the stated inference at step 3.1.",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.1",
        "L3"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Verified the stated inference at step 4.1.",
      "step": "4.1",
      "inputs": [
        "3.1",
        "L3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "No empty family, sum, or product occurs."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement and step 4.1 include the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement and step 2.1 include the unit boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement and step 1.1 retain all admissible degenerate cases."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval threshold endpoint occurs."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "No potentially empty choice occurs."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The item is not an equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The item is not an equivalence."
    }
  ]
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-riemann-rearrangement-to-a-prescribed-sum",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-riemann-series-theorem",
    "declared_target": "thm-riemann-series-theorem",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-rearrangement-to-a-prescribed-sum",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "ex-alternating-harmonic-series",
    "declared_target": "ex-alternating-harmonic-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement-examples",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-rearrangement-to-a-prescribed-sum",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-positive-and-negative-parts",
    "declared_target": "lem-positive-and-negative-parts",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-rearrangement-to-a-prescribed-sum",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-rearrangement-and-unconditional-convergence",
    "declared_target": "def-rearrangement-and-unconditional-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-rearrangement-to-a-prescribed-sum",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-absolute-and-conditional-convergence",
    "declared_target": "def-absolute-and-conditional-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-rearrangement-to-a-prescribed-sum",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-well-ordering-principle",
    "declared_target": "thm-well-ordering-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-rearrangement-to-a-prescribed-sum",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-recursion",
    "declared_target": "thm-recursion",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-riemann-rearrangement-to-a-prescribed-sum",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (9)

### `def-absolute-and-conditional-convergence`

````markdown
---
id: def-absolute-and-conditional-convergence
kind: definition
title: "Absolutely convergent and conditionally convergent series, and the general starting index"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, lem-absolute-convergence-implies-convergence, def-abs-value, lem-of-abs-value, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Conditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Conditional_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Definition

Let $(a_k)$ be a sequence of reals, with series $\sum a_k$ and partial sums
$s_n = \sum_{k<n} a_k$ as in [[def-series]], and let $|x|$ be the absolute value
([[def-abs-value]]).

**Absolute convergence.** The series $\sum a_k$ **converges absolutely** when the
series $\sum |a_k|$ converges ([[def-series]]). Since $|a_k| \ge 0$ for every $k$
([[lem-of-abs-value]]), this is a statement about a series of nonnegative terms.

**Conditional convergence.** The series $\sum a_k$ **converges conditionally**
when it converges ([[def-series]], [[def-real-limit]]) and does *not* converge
absolutely.

So a convergent series is exactly one of the two: absolutely convergent or
conditionally convergent, according as $\sum |a_k|$ converges or not.

**One implication is already proved, and is not reproved anywhere on this page.**
[[lem-absolute-convergence-implies-convergence]] states that if $\sum |a_k|$
converges then $\sum a_k$ converges. That lemma was coined and proved on the
previous page of this track, where the root and ratio tests need it; this page
names it and builds on it. In particular an absolutely convergent series is a
convergent series, so the two words above really do partition the convergent
series, and "conditionally convergent" is not vacuous by accident: the alternating
harmonic series is a witness, and the witness is exhibited in
[[fs-convergent-implies-absolutely-convergent]].

**General starting index.** Let $m \in \mathbb{N}$ and let $(a_k)_{k \ge m}$ be a
family from $m$ ([[def-series]]). The series $\sum_{k \ge m} a_k$ **converges
absolutely** when $\sum_{k \ge m} |a_k|$ converges, and **converges
conditionally** when it converges and does not converge absolutely. By
[[def-series]] both statements are the corresponding statements for the shifted
sequence $j \mapsto a_{j+m}$, so nothing new is being defined and every result
below transfers to a general starting index in the same way, exactly as
[[lem-absolute-convergence-implies-convergence]] already records for the one
implication it proves.

## Remarks

- **Absolute convergence is a condition on the terms, not on the sum.** It says
  the series of absolute values converges, and it says nothing about the value of
  $\sum_{k=0}^{\infty} a_k$. The two sums are in general different, and no
  statement here identifies them.

- **Why the distinction earns a page.** Every result on this page separates the
  two classes. An absolutely convergent series may be reordered at will
  ([[thm-dirichlet-rearrangement]]) and multiplied by another
  ([[thm-mertens]]); a conditionally convergent one may be reordered to any sum
  whatever ([[thm-riemann-series-theorem]]). The difference is not one of degree.

- **A series of nonnegative terms converges absolutely if it converges at all**,
  since then $|a_k| = a_k$. So the distinction is invisible for the comparison,
  condensation, Raabe, Gauss and Kummer tests of the previous page, all of which
  assume terms of one sign. It is not invisible on that page as a whole: the root
  and ratio tests are stated for terms of arbitrary sign and reach convergence of
  $\sum a_k$ precisely through
  [[lem-absolute-convergence-implies-convergence]], which is where the word
  *absolutely convergent* is first used. What that page does not develop, and this
  one does, is everything that separates the two classes rather than the one
  implication those two tests need.
````

### `def-rearrangement-and-unconditional-convergence`

````markdown
---
id: def-rearrangement-and-unconditional-convergence
kind: definition
title: "Rearrangement of a series along a bijection of $\\mathbb{N}$, and unconditional convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, def-sequence, def-injection-surjection-bijection, def-absolute-and-conditional-convergence]
justified_by: []
aliases: []
landmark: true
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "Unconditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unconditional_convergence"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Definition

Let $(a_k)$ be a sequence of reals ([[def-sequence]]) and let
$\sigma : \mathbb{N} \to \mathbb{N}$ be a bijection
([[def-injection-surjection-bijection]]).

**Rearrangement.** The **rearrangement of $(a_k)$ along $\sigma$** is the
composite sequence $k \mapsto a_{\sigma(k)}$, again a function
$\mathbb{N} \to \mathbb{R}$ and so again a sequence of reals. The
**rearrangement of the series $\sum a_k$ along $\sigma$** is the series
$\sum a_{\sigma(k)}$ of that sequence ([[def-series]]).

A rearrangement uses each term of the original sequence exactly once: injectivity
of $\sigma$ says no term is repeated, surjectivity says none is omitted. That is
the whole content of the word, and it is why the definition is stated with a
bijection rather than with an informal "reordering".

**Unconditional convergence.** The series $\sum a_k$ **converges
unconditionally** when it converges and, for **every** bijection
$\sigma : \mathbb{N} \to \mathbb{N}$, the rearranged series $\sum a_{\sigma(k)}$
converges with

$$\sum_{k=0}^{\infty} a_{\sigma(k)} \;=\; \sum_{k=0}^{\infty} a_k .$$

## Remarks

- **Unconditional convergence implies convergence, by definition and also by
  instance.** The identity map is a bijection of $\mathbb{N}$ and the
  rearrangement along it is the original sequence, so the clause about all
  bijections already contains the clause about the series itself.

- **Rearranging twice is rearranging once.** If $\sigma$ and $\tau$ are bijections
  of $\mathbb{N}$ then so is $\sigma \circ \tau$, and the rearrangement of
  $(a_{\sigma(k)})$ along $\tau$ is $k \mapsto a_{\sigma(\tau(k))}$, the
  rearrangement of $(a_k)$ along $\sigma \circ \tau$. Likewise the inverse
  $\sigma^{-1}$ is a bijection, and rearranging along it undoes $\sigma$. Both
  facts are used in [[thm-dirichlet-rearrangement]].

- **A weaker-looking condition, which turns out to be the same one.** One could
  ask only that every rearrangement *converge*, without requiring the sums to
  agree. Over $\mathbb{R}$ that is not weaker:
  [[cor-unconditional-iff-absolute-in-r]] identifies both conditions with absolute
  convergence ([[def-absolute-and-conditional-convergence]]), because
  [[thm-riemann-series-theorem]] produces, for a series that converges but not
  absolutely, both a rearrangement with a different sum and a rearrangement that
  does not converge at all.

- **The definition says nothing about which series have the property.** That is
  the subject of the two theorems that follow, and the answer over $\mathbb{R}$ is
  exactly the absolutely convergent series.
````

### `def-series`

````markdown
---
id: def-series
kind: definition
title: "Series, partial sums, convergence and the sum, divergence, and the tail series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sum, def-sequence, def-real-limit, def-real-numbers, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and
a **sequence of reals** is a function $a : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), written $(a_k)$; recall that $\mathbb{N}$ contains $0$.

**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial
sums** is

$$s_n \;:=\; \sum_{k < n} a_k \qquad (n \in \mathbb{N}),$$

the finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and
$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses
that define the finite sum. Note that $s_n$ is the sum of the $n$ terms
$a_0, \dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last
one.

**Convergence, the sum, divergence.** The **series** of $(a_k)$, written
$\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges
([[def-real-limit]]), and then the **sum of the series** is

$$\sum_{k=0}^{\infty} a_k \;:=\; \lim_{n} s_n .$$

The series **diverges** when $(s_n)$ does not converge. A convergent sequence of
reals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names
a single real number and nothing further has to be checked for it to be
well defined.

**Series with a general starting index.** Let $m \in \mathbb{N}$ and let $a$ be a
function on $\{\, k \in \mathbb{N} : k \ge m \,\}$, which we call a **family from
$m$** and write $(a_k)_{k \ge m}$. The series

$$\sum_{k \ge m} a_k$$

is by definition the series of the sequence $b_j := a_{j + m}$,
$j \in \mathbb{N}$, which is a genuine sequence of reals; it converges exactly
when that series converges, and its sum is then written
$\sum_{k = m}^{\infty} a_k$. Its partial sums are

$$\sum_{k=m}^{n-1} a_k \;=\; \sum_{j < n-m} a_{m+j} \qquad (n \ge m),$$

in the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum
$0$. A sequence on $\mathbb{N}$ is the case $m = 0$, and the two readings of
$\sum a_k$ agree there, since $b_j = a_j$.

**This clause is not a convenience.** Sequences in this library are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the
classical series are built from expressions that are undefined at the index $0$:
$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \ge 1$. Writing such a series as
$\sum_{k \ge 1} a_k$ names an honest object, whereas writing it as a sequence on
$\mathbb{N}$ would require a value at an index where the defining expression has
none. Every statement on this page says which starting index it uses.

**Tail series.** For $N \in \mathbb{N}$, the **$N$-th tail series** of
$\sum a_k$ is $\sum_{k \ge N} a_k$, that is the series of the $N$-th tail
$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The
$0$-th tail series is the series itself.

## Remarks

- **"Diverges" here means "does not converge", and nothing more.** A divergent
  series may have partial sums that run away to $+\infty$, or to $-\infty$, or
  that oscillate without settling anywhere. The three behaviours are not
  distinguished by the word, and no statement on this page uses "diverges" to
  mean "the partial sums are unbounded" unless it says so.

- **The symbol $\sum_{k=0}^{\infty} a_k$ is defined only for a convergent
  series.** It denotes a real number, not a formal object, and it is illegitimate
  to write it down before convergence has been established. Where a proof needs
  to speak of the series without knowing whether it converges, it speaks of
  $(a_k)$ and of $(s_n)$.

- **Two indices, doing different work.** The index $k$ runs over the terms and is
  bound; the index $n$ runs over the partial sums and is the variable in which the
  limit is taken. Confusing them is the commonest slip in the subject, and it is
  the reason the definition above fixes $s_n = \sum_{k<n} a_k$ rather than
  $\sum_{k \le n} a_k$: with this choice the recursion $s_{n+1} = s_n + a_n$ is
  the one supplied by [[def-finite-sum]], with no shift anywhere.
````

### `ex-alternating-harmonic-rearranged-to-three-halves`

````markdown
---
id: ex-alternating-harmonic-rearranged-to-three-halves
kind: example
title: "Taking two positive terms for each negative one rearranges the alternating harmonic series to $3/2$ times its sum, by the identity $T_{3n} = S_{4n} + \\tfrac12 S_{2n}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-alternating-harmonic-series, def-rearrangement-and-unconditional-convergence, thm-alternating-series-test, lem-alternating-sequence, lem-subsequence-inherits-limit, thm-algebra-of-limits, thm-recursion, thm-well-ordering-principle, thm-induction-principle, def-injection-surjection-bijection, def-monotone-sequence, def-finite-sum, lem-finite-sum-laws, lem-of-naturals-positive, lem-of-inverse-positive, cor-archimedean-reciprocal, def-series, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Example

Let $a_j := (-1)^j/\iota(j+1)$ be the terms of the alternating harmonic series,
whose sum $S$ satisfies $1/2 < S < 1$ ([[ex-alternating-harmonic-series]]), and
let $S_N := \sum_{j<N} a_j$ be its partial sums.

Rearrange it by taking **two positive terms for each negative one**:

$$1 + \tfrac13 - \tfrac12 \;+\; \tfrac15 + \tfrac17 - \tfrac14 \;+\; \tfrac19 + \tfrac1{11} - \tfrac16 \;+\; \cdots$$

Formally, define $\sigma : \mathbb{N} \to \mathbb{N}$ by

$$\sigma(3m) = 4m, \qquad \sigma(3m+1) = 4m+2, \qquad \sigma(3m+2) = 2m+1 \qquad (m \in \mathbb{N}),$$

which is a bijection ([[def-injection-surjection-bijection]]), so that
$\sum_k a_{\sigma(k)}$ is a rearrangement of the alternating harmonic series
([[def-rearrangement-and-unconditional-convergence]]). Writing
$T_n := \sum_{k<n} a_{\sigma(k)}$, the identity

$$T_{3n} \;=\; S_{4n} \;+\; \tfrac12\,S_{2n} \qquad (n \in \mathbb{N})$$

holds, and consequently

$$\sum_{k=0}^{\infty} a_{\sigma(k)} \;=\; \tfrac32\,S .$$

**The value is stated relative to $S$, and deliberately so.** Texts that already
have the logarithm state this example as a multiple of $\log 2$; that expression
is not available at this point in the reading order, and the identity above needs
none
([[rem-sums-proved-to-exist-but-not-evaluated]]). Since $1/2 < S < 1$, the
rearranged sum lies strictly between $3/4$ and $3/2$, and in particular differs
from $S$: a concrete instance of [[thm-riemann-series-theorem]].

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_j)$ with index maps $e_j = 2j$ and $o_j = 2j+1$; the terms $a_j = \varepsilon_j/\iota(j+1)$; the partial sums $S_N = \sum_{j<N}a_j$ of the alternating harmonic series, with sum $S$; and $T_n = \sum_{k<n}a_{\sigma(k)}$.

[L1] The alternating sequence and its index maps: $e_0 = 0$, $e_{j+1} = e_j+2$, $o_0 = 1$, $o_{j+1} = o_j+2$; $\mathbb{N}$ is the disjoint union of the ranges of $e$ and $o$, each element occurring for exactly one index; $\varepsilon_{e_j} = 1$ and $\varepsilon_{o_j} = -1$ ([[lem-alternating-sequence]]).

[L2] The alternating harmonic series converges, with sum $S$ satisfying $1/2 < S < 1$ ([[ex-alternating-harmonic-series]], [[thm-alternating-series-test]], [[def-monotone-sequence]]).

[L3] The canonical naturals are positive for $n \ge 1$ and strictly increasing; reciprocation reverses the order on the positives; and for every real $\varepsilon > 0$ there is $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L4] The recursion theorem and the principle of induction ([[thm-recursion]], [[thm-induction-principle]]); every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] Finite sums: $\sum_{k<0}x_k = 0$, $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$, additivity, scaling and splitting ([[def-finite-sum]], [[lem-finite-sum-laws]], [[def-series]]).

[L6] A subsequence of a convergent sequence converges to the same limit ([[lem-subsequence-inherits-limit]]).

[L7] Algebra of limits ([[thm-algebra-of-limits]], [[def-real-limit]]).

[L8] A rearrangement is the composite of the terms with a bijection of $\mathbb{N}$ ([[def-rearrangement-and-unconditional-convergence]], [[def-injection-surjection-bijection]]).

## Verification

**Proof technique:** direct.

1.1 An induction gives $e_j = 2j$ and $o_j = 2j+1$ for every $j$, from $e_0 = 0$, $o_0 = 1$ and the two recursions; so by [L1] every natural number is $2i$ for exactly one $i$ or $2i+1$ for exactly one $i$. [L1, L4]

1.2 Every natural $n$ is $3m + r$ for exactly one pair $(m, r)$ with $r < 3$: for existence, the set $\{\, m' : 3m' > n \,\}$ is nonempty, containing $n+1$, so it has a least element $m_0$, which is not $0$ since $3 \cdot 0 = 0 \le n$; put $m := m_0 - 1$, so $3m \le n < 3m+3$ and $r := n - 3m$ satisfies $r < 3$. For uniqueness, if $3m + r = 3m' + r'$ with $r, r' < 3$ and $m < m'$, then $3m + r < 3m + 3 \le 3m' \le 3m' + r'$, a contradiction; so $m = m'$ and then $r = r'$. [L4]

1.3 The maps $n \mapsto 4n$ and $n \mapsto 2n$ are strictly increasing, so $(S_{4n})_n$ and $(S_{2n})_n$ are subsequences of $(S_N)$ and both converge to $S$. [L2, L6]

2.1 Applying step 1.1 twice, every natural number is exactly one of $4i$, $4i+2$ or $2i+1$, for exactly one $i$: an even number $2m$ is $4i$ when $m = 2i$ and $4i+2$ when $m = 2i+1$, and these two cases are exclusive and exhaustive by step 1.1 applied to $m$. [step 1.1]

3.1 The map $\sigma$ is therefore a well-defined function on $\mathbb{N}$, given on the unique representation $n = 3m+r$ by the three clauses of the statement; it may equally be produced by the recursion theorem applied to the state set $\mathbb{N} \times \{0,1,2\}$ with the cycle $(m,0) \mapsto (m,1) \mapsto (m,2) \mapsto (m+1,0)$. It is a bijection: by step 1.2 the pairs $(m,r)$ with $r<3$ correspond exactly to the naturals $n = 3m+r$, and by step 2.1 the three clauses send those pairs bijectively onto $\mathbb{N}$. [step 2.1, step 1.2, L4, L8]

4.1 By [L1] and step 1.1, $\varepsilon_{4m} = \varepsilon_{4m+2} = 1$ and $\varepsilon_{2m+1} = -1$, so $a_{\sigma(3m)} = 1/\iota(4m+1)$, $a_{\sigma(3m+1)} = 1/\iota(4m+3)$ and $a_{\sigma(3m+2)} = -1/\iota(2m+2)$. [step 1.1, step 3.1, L1]

5.1 An induction on $n$ gives $T_{3n} = S_{4n} + \tfrac12 S_{2n}$. At $n = 0$ all three sums are empty, hence $0$. For the step, by step 4.1 and [L5], $T_{3(n+1)} - T_{3n} = 1/\iota(4n+1) + 1/\iota(4n+3) - 1/\iota(2n+2)$, while $S_{4(n+1)} - S_{4n} = 1/\iota(4n+1) - 1/\iota(4n+2) + 1/\iota(4n+3) - 1/\iota(4n+4)$ and $\tfrac12\bigl(S_{2(n+1)} - S_{2n}\bigr) = \tfrac12\bigl(1/\iota(2n+1) - 1/\iota(2n+2)\bigr) = 1/\iota(4n+2) - 1/\iota(4n+4)$; adding the last two gives $1/\iota(4n+1) + 1/\iota(4n+3) - 2/\iota(4n+4)$, and $2/\iota(4n+4) = 1/\iota(2n+2)$. [step 4.1, L3, L4, L5]

5.2 For $3n \le m \le 3n+2$ the difference $T_m - T_{3n}$ is a sum of at most the two positive terms $1/\iota(4n+1)$ and $1/\iota(4n+3)$, so $0 \le T_m - T_{3n} \le 2/\iota(4n+1)$. [step 4.1, L3, L5]

6.1 Hence $T_{3n} \to S + \tfrac12 S = \tfrac32 S$ by step 5.1 and the algebra of limits. [step 5.1, step 1.3, L7]

7.1 Let $\varepsilon > 0$ be rational. By step 6.1 fix $N_1$ with $|T_{3n} - \tfrac32 S| < \varepsilon/2$ for $n \ge N_1$, and by [L3] fix $N_2 \ge 1$ with $2/\iota(4N_2+1) < \varepsilon/2$, which then holds with $n$ in place of $N_2$ for every $n \ge N_2$; put $N := \max\{N_1, N_2\}$. [step 6.1, L3, choose]

8.1 Let $m \ge 3N$ and write $m = 3n + r$ with $r < 3$ as in step 1.2; then $3N \le m < 3n+3$, so $N < n+1$ and $n \ge N$. Hence $|T_m - \tfrac32 S| \le |T_m - T_{3n}| + |T_{3n} - \tfrac32 S| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 1.2, step 5.2, step 7.1]

9.1 Therefore $T_m \to \tfrac32 S$: the rearranged series $\sum_k a_{\sigma(k)}$ converges with sum $\tfrac32 S$, and since $1/2 < S < 1$ that sum lies strictly between $3/4$ and $3/2$, so in particular it is not $S$. [step 3.1, step 8.1, L2] ∎

## Remarks

- **Why the identity is the right thing to prove.** It compares the rearranged partial sums with two subsequences of the original partial sums, and both subsequences converge to $S$ for free. No estimate of $S$ is needed anywhere, and no closed form for it; the whole computation is an exact identity between finite sums, checked at $n = 1$ as $1 + 1/3 - 1/2 = 5/6$ against $7/12 + 1/4 = 5/6$.

- **The rearrangement is explicit, unlike the one produced by [[thm-riemann-series-theorem]].** There the bijection is built by a greedy recursion depending on the whole series; here it is given by three formulas. The price is that its sum is whatever the identity says it is, rather than a prescribed target.

- **The three residual index classes are handled, not waved through.** The identity constrains $T_m$ only at multiples of $3$; step 5.2 and step 8.1 close the gap, using that the two intervening terms are positive and tend to $0$. An argument stopping at step 6.1 would have proved convergence of a subsequence only.
````

### `ex-alternating-harmonic-series`

````markdown
---
id: ex-alternating-harmonic-series
kind: example
title: "$\\sum_{j \\ge 0} (-1)^{j}/(j+1)$ converges conditionally, with sum strictly between $1/2$ and $1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-alternating-series-test, def-absolute-and-conditional-convergence, thm-p-series-rational, lem-alternating-sequence, def-monotone-sequence, def-series, def-finite-sum, lem-finite-sum-laws, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, cor-archimedean-reciprocal, def-rational-power, thm-nth-roots-exist, def-integer-power, lem-limit-preserves-order, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Alternating series test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alternating_series_test"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Example

Let $(\varepsilon_j)$ be the alternating sequence ([[lem-alternating-sequence]]),
written $\varepsilon_j = (-1)^j$, and put $b_j := 1/\iota(j+1)$, with $\iota(j+1)$
the canonical natural, positive for every $j$ ([[lem-of-naturals-positive]]). The
**alternating harmonic series** is

$$\sum_{j \ge 0} \frac{(-1)^{j}}{j+1} \;=\; \sum_j \varepsilon_j b_j .$$

It **converges conditionally** ([[def-absolute-and-conditional-convergence]]):
it converges, by the alternating series test, while its series of absolute values
is the harmonic series $\sum_{k\ge1} 1/k$, which diverges
([[thm-p-series-rational]]). Writing $S$ for its sum,

$$\tfrac{1}{2} \;<\; \tfrac{7}{12} \;\le\; S \;\le\; \tfrac{5}{6} \;<\; 1 .$$

**The value of $S$ is not asserted.** The classical evaluation is a logarithm and
is not available at this point in the reading order; what is proved here is that
$S$ exists and where it lies. See
[[rem-sums-proved-to-exist-but-not-evaluated]].

This is the series that gives the whole page its content: it is the standard
witness for [[fs-convergent-implies-absolutely-convergent]] and, through
[[thm-riemann-series-theorem]], the source of every rearrangement example below.

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_j)$ with index maps $e$ and $o$, the sequence $b_j = 1/\iota(j+1)$, and the partial sums $t_n = \sum_{j<n} \varepsilon_j b_j$ ([[def-series]]).

[L1] The alternating sequence: $\varepsilon_0 = 1$, $\varepsilon_{j+1} = -\varepsilon_j$, $|\varepsilon_j| = 1$; $e_0 = 0$, $e_{j+1} = e_j + 2$, $o_0 = 1$, $o_{j+1} = o_j + 2$; $\varepsilon_{e_j} = 1$ and $\varepsilon_{o_j} = -1$ ([[lem-alternating-sequence]]).

[L2] The canonical naturals are positive for $n \ge 1$ and strictly increasing; reciprocation reverses the order on the positives; and for every real $\varepsilon > 0$ there is $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L3] The alternating series test: for $(b_j)$ nonincreasing with $b_j \to 0$, $\sum \varepsilon_j b_j$ converges with sum $L$, and $t_{e_j} \le L \le t_{o_j}$ for every $j$ ([[thm-alternating-series-test]], [[def-monotone-sequence]], [[def-real-limit]]).

[L4] $\sum_{k\ge1} 1/k^{p}$ converges if and only if $p > 1$, with $\iota(k)^{1} = \iota(k)$; and $\sum_{k\ge1}x_k$ is the series of $j \mapsto x_{j+1}$ ([[thm-p-series-rational]], [[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]], [[def-series]]).

[L5] Absolute value: $|xy| = |x|\,|y|$ ([[lem-of-abs-value]]).

[L6] Partial sums: $t_0 = 0$ and $t_{n+1} = t_n + \varepsilon_n b_n$ ([[def-series]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L7] Absolute and conditional convergence ([[def-absolute-and-conditional-convergence]]); limits preserve non-strict inequalities ([[lem-limit-preserves-order]]).

## Verification

**Proof technique:** direct.

1.1 Every $b_j = 1/\iota(j+1)$ is positive, and $(b_j)$ is nonincreasing, since $0 < \iota(j+1) < \iota(j+2)$. [given, L2]

1.2 By [L1], $e_1 = 2$, $e_2 = 4$, $o_1 = 3$; and by [L6] together with $\varepsilon_{e_j} = 1$, $\varepsilon_{o_j} = -1$, the first partial sums are $t_1 = b_0 = 1$, $t_2 = 1 - 1/2 = 1/2$, $t_3 = 1/2 + 1/3 = 5/6$ and $t_4 = 5/6 - 1/4 = 7/12$. [L1, L6, algebra]

2.1 $(b_j)$ converges to $0$: given a rational $\varepsilon > 0$, take $n \ge 1$ with $1/\iota(n) < \varepsilon$; for $j \ge n$ one has $\iota(j+1) \ge \iota(n) > 0$, so $b_j \le 1/\iota(n) < \varepsilon$. [step 1.1, L2]

2.2 For every $j$, $|\varepsilon_j b_j| = |\varepsilon_j|\,b_j = 1/\iota(j+1)$, and $\sum_j 1/\iota(j+1)$ is the $p$-series $\sum_{k\ge1}1/k$ at $p = 1$, which diverges. [step 1.1, L1, L4, L5]

3.1 By the alternating series test the series converges; write $S$ for its sum, and $t_{e_j} \le S \le t_{o_j}$ holds for every $j$. [step 1.1, step 2.1, L3]

4.1 Taking $j = 2$ in the lower bound and $j = 1$ in the upper bound of step 3.1 gives $7/12 = t_4 = t_{e_2} \le S \le t_{o_1} = t_3 = 5/6$. [step 3.1, step 1.2]

5.1 Since $1/2 < 7/12$ and $5/6 < 1$, the sum satisfies $1/2 < S < 1$. [step 4.1, algebra]

6.1 So the series converges while its series of absolute values diverges: it converges conditionally, with sum strictly between $1/2$ and $1$. [step 3.1, step 5.1, step 2.2, L7] ∎

## Remarks

- **The bracketing is exactly the error bound of the test, used twice.** Any pair of an even-index and an odd-index partial sum brackets $S$, and the further out the pair is taken the tighter the bracket becomes; $t_4$ and $t_3$ are simply the first pair whose values separate $S$ strictly from $1/2$ and from $1$. Taking $t_2 = 1/2$ and $t_1 = 1$ would give only the non-strict bounds.

- **Conditional convergence is a statement about cancellation.** The terms have absolute value $1/(j+1)$ and their sum without signs is infinite; the series converges only because consecutive terms nearly cancel. Everything that follows on this page, that the terms may be reordered to sum to anything at all, is a consequence of exactly that.

- **What the bracket does not say.** It gives no rate and no closed form. Better numerical bounds come from later pairs $t_{e_j}, t_{o_j}$ and cost only arithmetic; the closed form costs the logarithm.
````

### `lem-positive-and-negative-parts`

````markdown
---
id: lem-positive-and-negative-parts
kind: lemma
title: "Positive and negative parts: $a_k = a_k^{+} - a_k^{-}$ and $|a_k| = a_k^{+} + a_k^{-}$; a series converges absolutely iff both $\\sum a_k^{+}$ and $\\sum a_k^{-}$ converge, and for a conditionally convergent series both diverge to $+\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-absolute-and-conditional-convergence, def-series, def-max-min, def-abs-value, lem-of-abs-value, thm-nonnegative-series-bounded-partial-sums, lem-series-linearity, thm-direct-comparison-test, def-divergence-to-infinity, def-real-limit]
justified_by: []
aliases: []
landmark: true
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Positive and negative parts (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Positive_and_negative_parts"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals ([[def-series]]) and define its **positive
part** and **negative part** by

$$a_k^{+} \;:=\; \frac{|a_k| + a_k}{2}, \qquad a_k^{-} \;:=\; \frac{|a_k| - a_k}{2} \qquad (k \in \mathbb{N}),$$

with $|x|$ the absolute value ([[def-abs-value]]). Then:

1. $a_k^{+} = \max\{a_k, 0\}$ and $a_k^{-} = \max\{-a_k, 0\}$ ([[def-max-min]]);
   in particular $a_k^{+} \ge 0$ and $a_k^{-} \ge 0$, and
   $$a_k = a_k^{+} - a_k^{-}, \qquad |a_k| = a_k^{+} + a_k^{-} .$$
2. $\sum a_k$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]) **if and only if** both
   $\sum a_k^{+}$ and $\sum a_k^{-}$ converge.
3. If $\sum a_k$ converges conditionally, then neither $\sum a_k^{+}$ nor
   $\sum a_k^{-}$ converges, and the partial sums of each diverge to $+\infty$
   ([[def-divergence-to-infinity]]).

Claim 3 is the engine of the rearrangement theory: a conditionally convergent
series carries an unlimited supply of positive terms and an unlimited supply of
negative ones, and its convergence is nothing but a cancellation between them.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals, its positive and negative parts $a_k^{+}$ and $a_k^{-}$ as displayed above, and the partial sums of the associated series ([[def-series]]).

[L1] Absolute value: $|x| \ge 0$, $-|x| \le x \le |x|$, and $|x| = x$ when $x \ge 0$ while $|x| = -x$ when $x < 0$ ([[def-abs-value]], [[lem-of-abs-value]]).

[L2] A maximum of a subset of $\mathbb{R}$ is its greatest element, and there is at most one ([[def-max-min]]).

[L3] Linearity of series: if $\sum x_k$ and $\sum y_k$ converge then so does $\sum (x_k + y_k)$, and $\sum c\,x_k$ converges for every real $c$ ([[lem-series-linearity]]).

[L4] Direct comparison: if $0 \le x_k \le y_k$ from some index on and $\sum y_k$ converges, then $\sum x_k$ converges ([[thm-direct-comparison-test]]).

[L5] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above; and if that range is not bounded above then the partial sums diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]], [[def-divergence-to-infinity]]).

[L6] $\sum a_k$ converges absolutely means $\sum |a_k|$ converges, and converges conditionally means it converges while $\sum |a_k|$ does not ([[def-absolute-and-conditional-convergence]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 For every $k$, $|a_k| + a_k \ge 0$ and $|a_k| - a_k \ge 0$, since $-|a_k| \le a_k \le |a_k|$; dividing by the positive real $2$ gives $a_k^{+} \ge 0$ and $a_k^{-} \ge 0$. [L1, algebra]

1.2 For every $k$, $a_k^{+} - a_k^{-} = \bigl((|a_k| + a_k) - (|a_k| - a_k)\bigr)/2 = a_k$ and $a_k^{+} + a_k^{-} = \bigl((|a_k| + a_k) + (|a_k| - a_k)\bigr)/2 = |a_k|$. [algebra]

1.3 Assume now that $\sum a_k$ converges conditionally, so $\sum a_k$ converges and $\sum |a_k|$ diverges. [L6]

2.1 If $a_k \ge 0$ then $|a_k| = a_k$, so $a_k^{+} = a_k$ and $a_k^{-} = 0$; if $a_k < 0$ then $|a_k| = -a_k$, so $a_k^{+} = 0$ and $a_k^{-} = -a_k$. In both situations $a_k^{+}$ is the greater of $a_k$ and $0$ and $a_k^{-}$ is the greater of $-a_k$ and $0$, which is claim 1 together with step 1.1 and step 1.2. [L1, L2, step 1.1, step 1.2, algebra]

2.2 From step 1.1 and step 1.2, $0 \le a_k^{+} \le a_k^{+} + a_k^{-} = |a_k|$ and $0 \le a_k^{-} \le |a_k|$ for every $k$. [step 1.1, step 1.2, algebra]

2.3 If both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge, then $\sum |a_k| = \sum (a_k^{+} + a_k^{-})$ converges. [step 1.2, L3]

3.1 If $\sum |a_k|$ converges then, by comparison with $\sum |a_k|$ using step 2.2, both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge. [step 2.2, L4]

3.2 If $\sum a_k^{+}$ converged, then $\sum a_k^{-} = \sum \bigl(a_k^{+} + (-1)a_k\bigr)$ would converge by linearity, whence $\sum |a_k|$ would converge by step 2.3; since $\sum |a_k|$ diverges, $\sum a_k^{+}$ diverges. [step 1.3, step 1.2, step 2.3, L3]

3.3 If $\sum a_k^{-}$ converged, then $\sum a_k^{+} = \sum (a_k^{-} + a_k)$ would converge by linearity, whence again $\sum |a_k|$ would converge; since $\sum |a_k|$ diverges, $\sum a_k^{-}$ diverges. [step 1.3, step 1.2, step 2.3, L3]

4.1 Claim 2 is the conjunction of step 2.3 and step 3.1, read through the definition of absolute convergence. [step 2.3, step 3.1, L6]

5.1 Both $\sum a_k^{+}$ and $\sum a_k^{-}$ are series of nonnegative terms by step 1.1, so each diverges only if the range of its partial sums fails to be bounded above, and then those partial sums diverge to $+\infty$; this is claim 3. [step 1.1, step 3.2, step 3.3, L5] ∎

## Remarks

- **The two parts are determined by the terms, with no choice anywhere.** The displayed formulas define $a^{+}$ and $a^{-}$ outright, and step 2.1 identifies them with the two maxima; nothing in the proof selects one of several candidates.

- **Claim 3 is sharp in both directions.** Absolute convergence makes both part series converge, and then $\sum_{k=0}^{\infty} a_k$ is the difference of their sums. Conditional convergence makes both part series diverge to $+\infty$, and the difference of their partial sums is what converges. There is no third possibility for a convergent series, because claim 2 covers the case where one of them converges: if exactly one converged, $\sum a_k = \sum(a_k^{+} - a_k^{-})$ could not converge, since the sum of a convergent and a divergent series diverges.

- **Why $\max$ is mentioned at all.** The formulas with $|a_k|$ are what the algebra uses, while $\max\{a_k, 0\}$ is what the name "positive part" means and what makes claims about signs immediate. Step 2.1 records that they agree, so either may be used later without further comment.
````

### `thm-recursion`

````markdown
---
id: thm-recursion
kind: theorem
title: "The recursion theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-peano-system, def-natural-numbers, thm-induction-principle]
aliases: [dedekind-recursion, recursion-theorem]
landmark: true
short: "$g(0)=a,\\ g(\\sigma n)=f(g n)$ unique"
proof_strategy: direct
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $(N,0,\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

## Facts & Assumptions

**Given:** a Peano system $(N,0,\sigma)$, a set $A$, an element $a \in A$, and a function $f : A \to A$. Call a set $R \subseteq N \times A$ **closed** when $(0,a) \in R$ and, for all $n \in N$ and $x \in A$, $(n,x) \in R$ implies $(\sigma(n),f(x)) \in R$.

[L1] Induction holds in $N$: any $S \subseteq N$ with $0 \in S$ that is closed under $\sigma$ equals $N$ (axiom P3, [[thm-induction-principle]]).

[L2] In a Peano system $\sigma(n) \ne 0$ (P1) and $\sigma$ is injective (P2) ([[def-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 The set $N \times A$ is closed, so the collection of closed subsets of $N \times A$ is nonempty; let $g := \bigcap \{ R : R \subseteq N \times A \text{ closed} \}$, which is itself closed, since if every closed $R$ contains $(0,a)$ then so does $g$, and if $(n,x) \in g$ then $(n,x) \in R$ for each closed $R$, whence $(\sigma(n),f(x)) \in R$ for each such $R$, so $(\sigma(n),f(x)) \in g$. [given, construct]

2.1 Let $D = \{ n \in N : \exists x \in A,\ (n,x) \in g \}$; then $0 \in D$ since $(0,a) \in g$, and if $n \in D$ with $(n,x) \in g$ then $(\sigma(n),f(x)) \in g$ by closure, so $\sigma(n) \in D$; by induction $D = N$, hence $g$ relates every $n$ to at least one $x$. [L1, step 1.1]

2.2 Suppose $(0,b) \in g$ with $b \ne a$; then $g \setminus \{(0,b)\}$ still contains $(0,a)$ and is closed, since any generated pair $(\sigma(m),f(z))$ has $\sigma(m) \ne 0$ by P1 and so is never equal to $(0,b)$; this contradicts the minimality of $g$, so $a$ is the unique second coordinate paired with $0$. [L2, step 1.1]

3.1 Let $U = \{ n \in N : \text{there is exactly one } x \text{ with } (n,x) \in g \}$; then $0 \in U$ by step 2.2. [step 2.2]

4.1 Assume $n \in U$ with unique value $x$, so $(n,x) \in g$ and $(\sigma(n),f(x)) \in g$ by closure; if $(\sigma(n),c) \in g$ with $c \ne f(x)$, then $g \setminus \{(\sigma(n),c)\}$ contains $(0,a)$ because $\sigma(n) \ne 0$, and is closed, because a generated pair $(\sigma(m),f(z))$ with $(m,z) \in g \setminus \{(\sigma(n),c)\}$ can equal $(\sigma(n),c)$ only if $\sigma(m) = \sigma(n)$ and $f(z) = c$, but $\sigma(m) = \sigma(n)$ forces $m = n$ by injectivity, then $z = x$ by uniqueness at $n$, giving $f(z) = f(x) \ne c$, a contradiction; hence $g \setminus \{(\sigma(n),c)\}$ is closed and smaller than $g$, contradicting minimality, so $f(x)$ is the unique value at $\sigma(n)$ and $\sigma(n) \in U$. [L2, step 3.1, step 1.1]

5.1 By induction $U = N$, so together with the totality from step 2.1 the relation $g$ is a function $g : N \to A$; it satisfies $g(0) = a$, and closure with uniqueness gives $g(\sigma(n)) = f(g(n))$ for all $n$. [L1, step 2.1, step 3.1, step 4.1]

6.1 If $h : N \to A$ also satisfies $h(0) = a$ and $h(\sigma(n)) = f(h(n))$, then the set $\{ n : g(n) = h(n) \}$ contains $0$ and is closed under $\sigma$, since $g(n) = h(n)$ implies $g(\sigma(n)) = f(g(n)) = f(h(n)) = h(\sigma(n))$, so by induction it equals $N$, that is $h = g$. [L1, step 5.1] ∎
````

### `thm-riemann-series-theorem`

````markdown
---
id: thm-riemann-series-theorem
kind: theorem
title: "The Riemann series theorem: a conditionally convergent real series has, for every $c \\in \\mathbb{R}$, a rearrangement with sum $c$, and rearrangements diverging to $+\\infty$, to $-\\infty$, and oscillating with any prescribed $\\liminf \\le \\limsup$ in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-positive-and-negative-parts, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, lem-nth-term-test, thm-recursion, thm-well-ordering-principle, def-injection-surjection-bijection, def-divergence-to-infinity, def-limsup-liminf, def-extended-reals, def-extended-limits, thm-convergence-iff-limsup-equals-liminf, thm-nonnegative-series-bounded-partial-sums, def-series, def-finite-sum, lem-finite-sum-laws, lem-limit-preserves-order, thm-induction-principle, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
    - title: "W. Fisher, Introduction to Analysis"
      url: "https://math.berkeley.edu/~willfisher/teaching/104sm24/main.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals whose series converges conditionally
([[def-absolute-and-conditional-convergence]]). Let $\alpha, \beta \in
\overline{\mathbb{R}}$ ([[def-extended-reals]]) with $\alpha \le \beta$. Then
there is a bijection $\sigma : \mathbb{N} \to \mathbb{N}$
([[def-injection-surjection-bijection]]) such that the partial sums
$T_n = \sum_{k<n} a_{\sigma(k)}$ of the rearranged series
([[def-rearrangement-and-unconditional-convergence]]) satisfy

$$\liminf_{n} T_n = \alpha, \qquad \limsup_{n} T_n = \beta$$

([[def-limsup-liminf]]). In particular:

1. for every $c \in \mathbb{R}$, taking $\alpha = \beta = c$, there is a
   rearrangement of $\sum a_k$ that converges with sum $c$;
2. taking $\alpha = \beta = +\infty$, there is a rearrangement whose partial sums
   diverge to $+\infty$ ([[def-divergence-to-infinity]]), and taking
   $\alpha = \beta = -\infty$, one whose partial sums diverge to $-\infty$;
3. taking $\alpha < \beta$, there is a rearrangement whose partial sums oscillate,
   with limit inferior exactly $\alpha$ and limit superior exactly $\beta$.

So the sum of a conditionally convergent series is an artefact of the order in
which its terms are written, and every prescribed asymptotic behaviour is
attainable. Contrast [[thm-dirichlet-rearrangement]], where absolute convergence
makes the sum independent of the order.

**The construction.** Write $P := \{k : a_k \ge 0\}$ and $N := \{k : a_k < 0\}$,
which partition $\mathbb{N}$, and enumerate each increasingly as $(p_i)$ and
$(q_l)$. Fix real sequences $(u_j)$ and $(v_j)$ with $u_j \le v_j$ and
$u_j \le v_{j+1}$ for every $j$; these are the *targets*. The rearrangement is
produced one index at a time by a greedy rule: **while the running sum is at most
the current upper target, take the next unused nonnegative term; once it exceeds
that target, take negative terms until the running sum falls below the current
lower target; then move to the next pair of targets and repeat.** Both supplies
are inexhaustible, because for a conditionally convergent series both
$\sum a_k^{+}$ and $\sum a_k^{-}$ diverge to $+\infty$
([[lem-positive-and-negative-parts]]); and the overshoot at each turning point is
at most the term just used, which tends to $0$ because $a_k \to 0$
([[lem-nth-term-test]]). Those two facts are the whole theorem.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $\sum a_k$ convergent and $\sum |a_k|$ divergent; the positive and negative parts $a_k^{+}$, $a_k^{-}$; the sets $P = \{k : a_k \ge 0\}$ and $N = \{k : a_k < 0\}$; and extended reals $\alpha \le \beta$.

[A1] $P$ and $N$ are disjoint with union $\mathbb{N}$, since the order on $\mathbb{R}$ is total; $a_k^{+} = a_k$ and $a_k^{-} = 0$ for $k \in P$, while $a_k^{+} = 0$ and $a_k^{-} = -a_k$ for $k \in N$ ([[lem-positive-and-negative-parts]]).

[L1] For a conditionally convergent series, the partial sums of $\sum a_k^{+}$ and of $\sum a_k^{-}$ both diverge to $+\infty$ ([[lem-positive-and-negative-parts]], [[def-divergence-to-infinity]]).

[L2] The terms of a convergent series tend to $0$ ([[lem-nth-term-test]]).

[L3] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] The recursion theorem: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(n+1) = f(g(n))$ ([[thm-recursion]]).

[L5] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] Finite sums: $\sum_{k<0} x_k = 0$, $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$, splitting at an intermediate index, and $\sum_{k<n} 0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L7] Partial sums of a series and their recursion $s_{n+1} = s_n + a_n$ ([[def-series]]).

[L8] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L9] A bijection is an injective surjection ([[def-injection-surjection-bijection]]).

[L10] $\limsup_n x_n = \inf\{\, \sup\{x_m : m \ge n\} : n \in \mathbb{N} \,\}$ and $\liminf_n x_n = \sup\{\, \inf\{x_m : m \ge n\} : n \in \mathbb{N}\,\}$, both taken in $\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]).

[L11] A sequence converges to a real $L$ exactly when its limit inferior and limit superior both equal $L$, and diverges to $\pm\infty$ exactly when both equal $\pm\infty$ ([[thm-convergence-iff-limsup-equals-liminf]], [[def-extended-limits]]).

[L12] For nonnegative terms, a series diverges exactly when the range of its partial sums is unbounded above, and then those partial sums diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]]).

## Proof

**Proof technique:** constructive.

1.1 Since $\sum a_k$ converges, $a_k \to 0$. [given, L2]

1.2 For every $K \in \mathbb{N}$ there is $k \ge K$ with $k \in P$: otherwise $a_k < 0$ for every $k \ge K$, so $a_k^{+} = 0$ for every $k \ge K$, so the partial sums of $\sum a_k^{+}$ are constant from $K$ on and hence bounded, contradicting [L1]. The same argument with $a_k^{-}$ shows that for every $K$ there is $k \ge K$ with $k \in N$. [A1, L1, L6, L12]

2.1 In particular $P$ and $N$ are nonempty, and for every $k$ the sets $\{m \in P : m > k\}$ and $\{m \in N : m > k\}$ are nonempty; so by [L3] each has a least element. [step 1.2, L3]

3.1 Define $p : \mathbb{N} \to \mathbb{N}$ by $p_0 := \min P$ and $p_{i+1} := \min\{m \in P : m > p_i\}$, and $q : \mathbb{N} \to \mathbb{N}$ by $q_0 := \min N$ and $q_{l+1} := \min\{m \in N : m > q_l\}$; both are legitimate applications of the recursion theorem, the "next element" operations being total functions $\mathbb{N} \to \mathbb{N}$ by step 2.1. Both $p$ and $q$ take values in $P$, respectively $N$, and are strictly increasing. [step 2.1, L3, L4, construct]

4.1 An induction gives $p_i \ge i$ and $q_l \ge l$ for every index, since $p_0 \ge 0$ and $p_{i+1} > p_i \ge i$ forces $p_{i+1} \ge i+1$. [step 3.1, L5]

4.2 An induction on $i$ gives $P \cap \{k : k < p_i\} = \{p_{i'} : i' < i\}$: at $i = 0$ both sides are empty because $p_0$ is the least element of $P$; and passing from $i$ to $i+1$ adds exactly $p_i$, since $p_{i+1}$ is the least element of $P$ strictly greater than $p_i$, so no element of $P$ lies strictly between them. The same holds for $q$ and $N$. [step 3.1, L5]

4.3 Fix real sequences $(u_j)$ and $(v_j)$ with $u_j \le v_j$ and $u_j \le v_{j+1}$ for every $j$. Put $A := \mathbb{N} \times \mathbb{N} \times \mathbb{N} \times \mathbb{R} \times \{0,1\}$, whose elements are written $(i, l, j, s, m)$, and define $\mathrm{out} : A \to \mathbb{N}$ and $f : A \to A$ by: if $m = 0$ and $s \le v_j$, then $\mathrm{out} := p_i$ and $f := (i+1, l, j, s + a_{p_i}, 0)$; if $m = 0$ and $s > v_j$, then $\mathrm{out} := q_l$ and $f := (i, l+1, j, s + a_{q_l}, 1)$; if $m = 1$ and $s \ge u_j$, then $\mathrm{out} := q_l$ and $f := (i, l+1, j, s + a_{q_l}, 1)$; if $m = 1$ and $s < u_j$, then $\mathrm{out} := p_i$ and $f := (i+1, l, j+1, s + a_{p_i}, 0)$. The four cases are exhaustive and mutually exclusive, the order on $\mathbb{R}$ being total, so $f$ and $\mathrm{out}$ are functions. [step 3.1, construct]

5.1 Every element of $P$ is some $p_i$, and every element of $N$ is some $q_l$: given $k \in P$, the set $\{i : p_i > k\}$ is nonempty by step 4.1, so it has a least element $i_0$; $i_0 \ne 0$ since $p_0 = \min P \le k$, and $p_{i_0 - 1} \le k < p_{i_0}$, so $k \in P \cap \{m : m < p_{i_0}\} = \{p_{i'} : i' < i_0\}$ by step 4.2. Together with step 3.1 this says that $p$ is a bijection onto $P$ and $q$ a bijection onto $N$; both are injective because they are strictly increasing. [step 3.1, step 4.1, step 4.2, L3, L9]

5.2 An induction on $i$ gives $\sum_{i' < i} a_{p_{i'}} = \sum_{k < p_i} a_k^{+}$: at $i = 0$ every $k < p_0$ lies in $N$, so $a_k^{+} = 0$ and both sides are $0$; and splitting $\sum_{k<p_{i+1}} a_k^{+}$ at $p_i$ and at $p_i + 1$ isolates the single term $a_{p_i}^{+} = a_{p_i}$, all remaining indices $k$ with $p_i < k < p_{i+1}$ lying in $N$ by step 4.2 and contributing $0$. The same argument gives $\sum_{l' < l} a_{q_{l'}} = -\sum_{k<q_l} a_k^{-}$. [A1, step 3.1, step 4.2, L5, L6]

5.3 By the recursion theorem let $g : \mathbb{N} \to A$ satisfy $g(0) = (0,0,0,0,0)$ and $g(n+1) = f(g(n))$, write $g(n) = (i_n, l_n, j_n, s_n, m_n)$, and define $\sigma(n) := \mathrm{out}(g(n))$. [step 4.3, L4, construct]

5.4 For general $\alpha \le \beta$ choose real sequences with $u_j \le v_j$ and $u_j \le v_{j+1}$ as follows: if $\alpha, \beta$ are real, $u_j := \alpha$ and $v_j := \beta$; if $\alpha = -\infty$ and $\beta$ is real, $u_j := \beta - (j+1)$ and $v_j := \beta$; if $\alpha$ is real and $\beta = +\infty$, $u_j := \alpha$ and $v_j := \alpha + (j+1)$; if $\alpha = \beta = +\infty$, $u_j := j$ and $v_j := j+1$; if $\alpha = \beta = -\infty$, $u_j := -(j+2)$ and $v_j := -(j+1)$; and if $\alpha = -\infty$, $\beta = +\infty$, $u_j := -(j+1)$ and $v_j := j+1$. In every case $(u_j)$ tends to $\alpha$ and $(v_j)$ to $\beta$ in $\overline{\mathbb{R}}$, and both conditions of step 4.3 hold. [step 4.3, L11, choose]

6.1 Hence $\sum_{i'<i} a_{p_{i'}} \to +\infty$ as $i \to \infty$ and $\sum_{l'<l} a_{q_{l'}} \to -\infty$ as $l \to \infty$: the left-hand sides are the values of the partial sums of $\sum a_k^{+}$, respectively of $-\sum a_k^{-}$, at the strictly increasing indices $p_i$, respectively $q_l$, and by step 4.1 those indices are at least $i$, respectively $l$. [step 4.1, step 5.2, L1]

6.2 An induction on $n$ gives $i_n + l_n = n$ and $s_n = \sum_{k<n} a_{\sigma(k)}$: both hold at $n = 0$, and each transition increases exactly one of $i, l$ by one and adds to $s$ exactly the term $a_{\sigma(n)}$ indexed by the emitted natural. So $s_n = T_n$, the $n$-th partial sum of the rearranged series. [step 4.3, step 5.3, L5, L7]

7.1 Consequently, for every $i_0 \in \mathbb{N}$ and every real $M$ there is $i > i_0$ with $\sum_{i'=i_0}^{i-1} a_{p_{i'}} > M$, and for every $l_0$ and every real $M$ there is $l > l_0$ with $\sum_{l' = l_0}^{l-1} a_{q_{l'}} < M$; this is step 6.1 together with splitting of finite sums, the omitted initial block being a fixed real. [step 6.1, L6]

7.2 An induction on $n$ gives that $\sigma(n) = p_{i_n}$ at every step that increments $i$, and $\sigma(n) = q_{l_n}$ at every step that increments $l$; since $(i_n)$ and $(l_n)$ are nondecreasing and increase by one exactly at those steps, distinct steps of the first kind carry distinct values of $i_n$ and distinct steps of the second kind distinct values of $l_n$. As $p$ and $q$ are injective with disjoint ranges $P$ and $N$, the map $\sigma$ is injective. [step 4.3, step 6.2, step 5.1, L5]

8.1 There are infinitely many steps of each kind: if from some step $n_0$ on no step increments $l$, then $m_n$ is eventually constantly $0$, because a step with $m = 1$ that does not increment $l$ sets $m$ to $0$ and a step with $m = 0$ that does not increment $l$ leaves $m$ at $0$; then $j_n$ is eventually constant, say $j$, and every subsequent step satisfies $s_n \le v_{j}$, while by step 7.1 the values $s_n$, which from $n_0$ on increase by the successive terms $a_{p_i}$, exceed $v_j$ for some $n$. Symmetrically, if from some step on no step increments $i$, then $m_n$ is eventually constantly $1$, $j_n$ is eventually constant $j$, every subsequent step satisfies $s_n \ge u_j$, and step 7.1 makes $s_n$ fall below $u_j$. [step 7.1, step 4.3, step 6.2, L5]

9.1 Hence $i_n \to \infty$ and $l_n \to \infty$, so every $p_i$ and every $q_l$ occurs as some $\sigma(n)$; since $P \cup N = \mathbb{N}$ and $p, q$ enumerate $P$ and $N$, the map $\sigma$ is surjective, and with step 7.2 it is a bijection of $\mathbb{N}$. [A1, step 5.1, step 7.2, step 8.1, L9]

9.2 Likewise $j_n \to \infty$: if $j_n$ were eventually constant $j$, then from some step on no round is completed, so no step has $m = 1$ and $s < u_j$; by the argument of step 8.1 the mode is then eventually constant, and either it is $0$ forever, whence $s_n \le v_j$ always while $s_n$ increases past $v_j$, or it is $1$ forever, whence $s_n \ge u_j$ always while $s_n$ falls below $u_j$. [step 7.1, step 4.3, step 8.1]

10.1 For each $j \ge 1$ let $\beta_j$ be the step at which the mode of round $j$ changes from $0$ to $1$, that is the unique $n$ with $j_n = j$, $m_n = 0$ and $s_n > v_j$, and let $\alpha_j$ be the step at which round $j$ is completed, the unique $n$ with $j_n = j$, $m_n = 1$ and $s_n < u_j$; both exist by step 8.1 and step 9.2, and $\alpha_{j-1} < \beta_j < \alpha_j$. [step 4.3, step 8.1, step 9.2, choose]

11.1 The step $\beta_j$ is preceded, within round $j$, either by a step that added a term $a_{p_i} \ge 0$ to a value $s \le v_j$, or by the completing step $\alpha_{j-1}$ of the previous round, which added a term $a_{p_i} \ge 0$ to a value $s < u_{j-1} \le v_j$. In both situations $v_j < T_{\beta_j} \le v_j + a_{p_i}$ for the index $i$ used at the immediately preceding step. [step 4.3, step 10.1]

11.2 Likewise the step $\alpha_j$ is preceded within round $j$ by a step that added a term $a_{q_l} < 0$ to a value $s \ge u_j$, that step being either an earlier descent step or the switch $\beta_j$ itself, at which $s > v_j \ge u_j$; so $u_j - |a_{q_l}| \le T_{\alpha_j} < u_j$ for the index $l$ used at that step. [step 4.3, step 10.1]

11.3 For $\alpha_{j-1} \le n \le \beta_j$ the partial sums increase, every step of the climb adding a term $a_{p_i} \ge 0$; for $\beta_j \le n \le \alpha_j$ they decrease, every step of the descent adding a term $a_{q_l} < 0$. Hence for every $n$ with $\alpha_{j-1} \le n \le \alpha_j$ one has $\min\{T_{\alpha_{j-1}}, T_{\alpha_j}\} \le T_n \le T_{\beta_j}$. [A1, step 4.3, step 10.1]

12.1 Put $\delta_j := \max\{a_{p_{i(j)}},\, |a_{q_{l(j)}}|\}$ for the two indices appearing in step 11.1 and step 11.2. As $j \to \infty$ those indices tend to infinity, by step 8.1 and step 9.2, so $p_{i(j)} \to \infty$ and $q_{l(j)} \to \infty$ by step 4.1, and $\delta_j \to 0$ by step 1.1. Thus $v_j < T_{\beta_j} \le v_j + \delta_j$ and $u_j - \delta_j \le T_{\alpha_j} < u_j$ for every $j \ge 1$. [step 1.1, step 4.1, step 8.1, step 9.2, step 11.1, step 11.2]

12.2 Fix $n$ and let $J$ be least with $\alpha_{J-1} \ge n$, which exists because the $\alpha_j$ are strictly increasing. By step 11.3 every $m \ge \alpha_{J-1}$ satisfies $T_m \le \sup\{T_{\beta_j} : j \ge J\}$, and only the finitely many indices $m$ with $n \le m < \alpha_{J-1}$ are unaccounted for; each of those lies in a round of index at most $J-1$ and so is at most $\max\{T_{\beta_j} : 1 \le j \le J-1\}$ together with $T_n$ itself. Hence $\sup\{T_m : m \ge n\}$ is finite or $+\infty$ according as $\sup\{T_{\beta_j} : j \ge J\}$ is, and taking the infimum over $n$, which drives $J$ to infinity, gives $\limsup_n T_n = \limsup_j T_{\beta_j}$. [step 10.1, step 11.3, L10]

13.1 Take $u_j = v_j = c$ for all $j$, which satisfies the two conditions of step 4.3. Then $c < T_{\beta_j} \le c + \delta_j$ and $c - \delta_j \le T_{\alpha_j} < c$, so by step 11.3 every $n$ with $\alpha_{j-1} \le n \le \alpha_j$ has $|T_n - c| \le \max\{\delta_{j-1}, \delta_j\}$. Given a real $\varepsilon > 0$, choose $J \ge 2$ with $\delta_j < \varepsilon$ for all $j \ge J-1$; then $|T_n - c| < \varepsilon$ for all $n \ge \alpha_{J-1}$, so $T_n \to c$ and the rearranged series converges with sum $c$. This is claim 1. [step 12.1, step 11.3, L8]

13.2 Take $v_j = j+1$ and $u_j = j$, which satisfy the two conditions. Then $T_{\alpha_j} \ge u_j - \delta_j = j - \delta_j$, so by step 11.3 every $n$ with $\alpha_{j-1} \le n \le \alpha_j$ has $T_n \ge \min\{j-1-\delta_{j-1},\, j - \delta_j\}$, a quantity that exceeds any prescribed real for all large $j$; hence $T_n \to +\infty$. Taking instead $v_j = -(j+1)$ and $u_j = -(j+2)$, which also satisfy the two conditions, gives $T_n \le T_{\beta_j} \le v_j + \delta_j = -(j+1) + \delta_j$ on the same ranges, hence $T_n \to -\infty$. This is claim 2. [step 12.1, step 11.3, L8]

13.3 By step 12.1 the subsequence $(T_{\beta_j})_{j \ge 1}$ tends to $\beta$ and $(T_{\alpha_j})_{j\ge1}$ tends to $\alpha$, in $\overline{\mathbb{R}}$: when the target sequence is real-valued and convergent the two-sided bound of step 12.1 with $\delta_j \to 0$ gives it, and when the target sequence diverges the one-sided bound does. [step 12.1, step 5.4, L8, L11]

14.1 By step 13.3 and [L11], $\limsup_j T_{\beta_j} = \beta$; so $\limsup_n T_n = \beta$. The same argument applied to infima, with $\alpha_j$ in place of $\beta_j$ and the lower bound of step 11.3 in place of the upper one, gives $\liminf_n T_n = \liminf_j T_{\alpha_j} = \alpha$. [step 13.3, step 12.2, L10, L11]

15.1 The bijection $\sigma$ of step 5.3, built from the targets chosen in step 5.4, is therefore a rearrangement of $\sum a_k$ whose partial sums have limit inferior $\alpha$ and limit superior $\beta$; claims 1 and 2 are the special cases computed directly in step 13.1 and step 13.2, and claim 3 is the case $\alpha < \beta$. [step 9.1, step 13.1, step 13.2, step 14.1, discharge-construct] ∎

## Remarks

- **Only two properties of the series are used.** That both part series diverge to $+\infty$ ([[lem-positive-and-negative-parts]]), which is what keeps the two supplies inexhaustible, and that $a_k \to 0$ ([[lem-nth-term-test]]), which is what makes the overshoot at each turning point vanish. Both hold for every conditionally convergent series and neither holds for an absolutely convergent one, whose part series both converge.

- **Where the well-ordering principle is used, and where it is not.** It appears in step 2.1 and step 3.1, to define the increasing enumerations of $P$ and $N$, and in step 5.1. It does *not* appear in the greedy rule: "take terms until the running sum crosses the target" is implemented as a one-step recursion whose state carries the two counters, the round and the running sum, so no least crossing index is ever selected. No choice principle is used anywhere; every object is determined by the data.

- **Zero terms are not a special case.** They are collected into $P$, so a run of zeros is consumed during a climb without moving the running sum, and the climb still terminates because the tail sums of $\sum_i a_{p_i}$ are unbounded. Had $P$ been defined as $\{k : a_k > 0\}$, the zero-indexed terms would have had to be inserted separately for $\sigma$ to be surjective.

- **The oscillating case is genuinely more than the two divergences.** With $\alpha < \beta$ both finite, the partial sums visit every neighbourhood of $\alpha$ and of $\beta$ infinitely often and are eventually confined to a neighbourhood of $[\alpha, \beta]$; the subsequential limit set of $(T_n)$ is then the whole interval, though nothing on this page needs that refinement.
````

### `thm-well-ordering-principle`

````markdown
---
id: thm-well-ordering-principle
kind: theorem
title: "The well-ordering principle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-induction-principle, lem-nat-discrete, lem-nat-trichotomy, thm-omega-is-peano-system, lem-nat-add-successor-left, lem-nat-add-identity]
aliases: [well-ordering]
landmark: true
short: "every nonempty $S\\subseteq\\mathbb N$ has a least element"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

## Facts & Assumptions

**Given:** A nonempty subset $S \subseteq \mathbb{N}$. Define $T = \{\, n \in \mathbb{N} : \text{every } m \text{ with } m \le n \text{ satisfies } m \notin S \,\}$ (informally, no element of $S$ is $\le n$).

[L1] Induction principle: a subset of $\mathbb{N}$ that contains $0$ and is closed under $\sigma$ equals $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] $m < n \iff \sigma(m) \le n$; consequently no $k$ satisfies $n < k < \sigma(n)$ ([[lem-nat-discrete]]).

[L3] Exactly one of $s < n$, $s = n$, $n < s$ holds ([[lem-nat-trichotomy]]); and $n < s \iff \sigma(n) \le s$ ([[lem-nat-discrete]]).

[L4] $\sigma$ is injective (Peano axiom P2) ([[thm-omega-is-peano-system]]).

[L5] $\sigma(a) + i = \sigma(a + i)$ for all $a, i$ (the left successor law, [[lem-nat-add-successor-left]]).

[L6] $0 + k = k$ for all $k$ ([[lem-nat-add-identity]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $S$ is nonempty but has no least element. [assume-contra]

1.2 If $m < \sigma(n)$ then $m \le n$: by [L2] applied to $m$ and $\sigma(n)$ we get $\sigma(m) \le \sigma(n)$, say $\sigma(m) + i = \sigma(n)$; then $\sigma(m + i) = \sigma(m) + i = \sigma(n)$ [L5], so $m + i = n$ by injectivity [L4], hence $m \le n$. [L2, L4, L5]

2.1 First, $0 \in T$: if $0 \in S$ then $0 \le s$ for all $s \in S$, since $0 + s = s$ [L6], making $0$ a least element, contrary to the assumption; hence $0 \notin S$; moreover $m \le 0$ forces $m = 0$, because $m \ne 0$ would give $0 < m$ (as $0 + m = m$ [L6] with $m \ne 0$) while $m \le 0$ gives $m < 0$, and [L3] admits at most one of these; so every $m \le 0$ lies outside $S$. [step 1.1, L3, L6, given]

2.2 Next, $T$ is closed under $\sigma$: assume $n \in T$; if $\sigma(n) \in S$ then no $s \in S$ satisfies $s < \sigma(n)$ (else $s \le n$ by step 1.2, so $s \notin S$ because $n \in T$, a contradiction), hence $\sigma(n) \le s$ for all $s \in S$ by [L3], making $\sigma(n)$ a least element, contrary to the assumption; therefore $\sigma(n) \notin S$, and any $m$ with $m \le \sigma(n)$ satisfies $m = \sigma(n)$ or $m \ne \sigma(n)$; in the second case $m \le \sigma(n)$ together with $m \ne \sigma(n)$ gives $m < \sigma(n)$ by the definition of the strict order, hence $m \le n$ by step 1.2 and $m \notin S$ because $n \in T$, while in the first case $m = \sigma(n) \notin S$; so every $m \le \sigma(n)$ lies outside $S$, giving $\sigma(n) \in T$. [step 1.1, step 1.2, L3]

3.1 By the induction principle [L1], from $0 \in T$ and closure under $\sigma$, $T = \mathbb{N}$; then for every $n$, taking $m = n \le n$ shows $n \notin S$, so $S = \varnothing$, contradicting nonemptiness; therefore $S$ has a least element. [step 2.1, step 2.2, L1, discharge-contradiction] ∎
````

