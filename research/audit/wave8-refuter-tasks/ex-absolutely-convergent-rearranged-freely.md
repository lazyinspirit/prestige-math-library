## Selection reasons

- critical risk (12): 9 declared dependencies; 10 cited facts; biconditional / both-direction claim; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `ex-absolutely-convergent-rearranged-freely`

Normalized current SHA-256: `349f1de7a94bb42192e8669020d13d16f2d8186737c3b160c227651220cad0a5`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-absolutely-convergent-rearranged-freely
kind: example
title: "Every rearrangement of $\\sum_{k \\ge 0} (-1/2)^{k}$ converges to $2/3$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-dirichlet-rearrangement, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, thm-geometric-series, def-integer-power, lem-power-laws, lem-of-abs-value, thm-induction-principle, def-series]
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
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Example

Let $r := -1/2$ and consider $\sum_{k \ge 0} r^{k}$, with $r^k$ the integer power
([[def-integer-power]]), so that the first term is $r^0 = 1$. Then:

$$\sum_{k=0}^{\infty} \Bigl(-\tfrac12\Bigr)^{k} \;=\; \frac{1}{1 - (-1/2)} \;=\; \frac{2}{3},$$

the series converges absolutely
([[def-absolute-and-conditional-convergence]]), and **every** rearrangement of it
along a bijection of $\mathbb{N}$
([[def-rearrangement-and-unconditional-convergence]]) converges, again to $2/3$.

This is the contrast case for the whole page. The alternating harmonic series
([[ex-alternating-harmonic-series]]) has terms with the same alternating sign
pattern, tending to $0$ just as these do, and can be rearranged to any real
whatever; this series cannot be rearranged to anything but $2/3$. The difference
is absolute convergence and nothing else, by
[[cor-unconditional-iff-absolute-in-r]].

## Facts & Assumptions

**Given:** $r = -1/2$ and the sequence $a_k := r^{k}$ ([[def-integer-power]]).

[L1] Geometric series: for $|x| < 1$ the series $\sum x^k$ converges with sum $1/(1-x)$, the series starting at $k = 0$ with first term $x^0 = 1$ ([[thm-geometric-series]], [[def-series]]).

[L2] Absolute value: $|xy| = |x|\,|y|$, $|1| = 1$, and $|-1/2| = 1/2$ ([[lem-of-abs-value]]).

[L3] Powers: $x^0 = 1$ and $x^{n+1} = x^n x$ ([[def-integer-power]], [[lem-power-laws]]).

[L4] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L5] An absolutely convergent series converges unconditionally: every rearrangement converges to the same sum ([[thm-dirichlet-rearrangement]], [[def-rearrangement-and-unconditional-convergence]], [[def-absolute-and-conditional-convergence]]).

## Verification

**Proof technique:** direct.

1.1 An induction gives $|r^{k}| = |r|^{k} = (1/2)^{k}$ for every $k$: at $k = 0$ both sides are $1$, and $|r^{k+1}| = |r^{k} r| = |r^{k}|\,|r| = (1/2)^{k}(1/2)$. [L2, L3, L4]

1.2 Since $|r| = 1/2 < 1$, the series $\sum_k r^{k}$ converges with sum $1/(1-r) = 1/(3/2) = 2/3$. [L1, L2, algebra]

2.1 Since $|1/2| = 1/2 < 1$, the series $\sum_k |r^{k}| = \sum_k (1/2)^{k}$ converges, with sum $1/(1 - 1/2) = 2$; so $\sum_k r^{k}$ converges absolutely. [step 1.1, L1, L2]

3.1 By Dirichlet's rearrangement theorem, for every bijection $\sigma$ of $\mathbb{N}$ the series $\sum_k r^{\sigma(k)}$ converges, with the same sum $2/3$. [step 2.1, L5]

4.1 So the series converges absolutely with sum $2/3$, and every rearrangement of it converges to $2/3$. [step 1.2, step 2.1, step 3.1] ∎

## Remarks

- **The starting index matters and is stated.** The series begins at $k = 0$, and its first term is $r^{0} = 1$; the same series started at $k = 1$ would sum to $2/3 - 1 = -1/3$. [[thm-geometric-series]] makes the same point for $\sum 2^{-k}$, whose sum is $2$ from index $0$ and $1$ from index $1$.

- **Nothing is checked bijection by bijection.** The point of [[thm-dirichlet-rearrangement]] is that no property of $\sigma$ beyond bijectivity is used; the sum of the absolute values, here $2$, is what bounds every partial sum of every rearrangement.

- **The signs are a red herring.** The same conclusion holds for $\sum (1/2)^{k}$, whose terms are all positive; a series of nonnegative terms that converges is absolutely convergent, so no such series has an interesting rearrangement theory. The alternating signs here are chosen only to make the comparison with the alternating harmonic series exact.
````

## Wave 8 provenance row for the target

```json
{
  "id": "ex-absolutely-convergent-rearranged-freely",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf",
    "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
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
      "source": "thm-geometric-series",
      "source_section": "Statement",
      "quote": "1. If $|r| < 1$ then the series $\\sum r^k$ converges ([[def-series]]) and",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "$\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-power-laws",
      "source_section": "Statement",
      "quote": "Let $a, b$ be elements of a field ([[def-field]]) and let integer powers be as in",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-dirichlet-rearrangement",
      "source_section": "Statement",
      "quote": "Consequently an absolutely convergent series converges unconditionally",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-rearrangement-and-unconditional-convergence",
      "source_section": "Definition",
      "quote": "unconditionally** when it converges and, for **every** bijection",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-absolute-and-conditional-convergence",
      "source_section": "Definition",
      "quote": "**Absolute convergence.** The series $\\sum a_k$ **converges absolutely** when the",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Verified the stated inference at step 1.1.",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Verified the stated inference at step 1.2.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Verified the stated inference at step 2.1.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Verified the stated inference at step 3.1.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L5"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Verified the stated inference at step 4.1.",
      "step": "4.1",
      "inputs": [
        "1.2",
        "2.1",
        "3.1"
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
      "evidence": "Statement and step 1.1 include the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement and step 1.2 include the unit boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement and step 1.1 retain all admissible degenerate cases."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement and step 1.2 retain the threshold endpoints."
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
    "source": "ex-absolutely-convergent-rearranged-freely",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-dirichlet-rearrangement",
    "declared_target": "thm-dirichlet-rearrangement",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-absolutely-convergent-rearranged-freely",
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
    "source": "ex-absolutely-convergent-rearranged-freely",
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
    "source": "ex-absolutely-convergent-rearranged-freely",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-absolutely-convergent-rearranged-freely",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-absolutely-convergent-rearranged-freely",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-power-laws",
    "declared_target": "lem-power-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-absolutely-convergent-rearranged-freely",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-absolutely-convergent-rearranged-freely",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-absolutely-convergent-rearranged-freely",
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

## Full text of every cited or declared item (11)

### `cor-unconditional-iff-absolute-in-r`

````markdown
---
id: cor-unconditional-iff-absolute-in-r
kind: corollary
title: "For a series of real numbers, unconditional convergence and absolute convergence are the same property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-series-theorem, thm-dirichlet-rearrangement, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, def-divergence-to-infinity, def-series, def-real-limit]
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
    - title: "Unconditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unconditional_convergence"
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals. The following are equivalent.

1. $\sum a_k$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]).
2. $\sum a_k$ converges unconditionally
   ([[def-rearrangement-and-unconditional-convergence]]).
3. $\sum a_k$ converges and every rearrangement of it converges, with no
   requirement that the sums agree.

So over $\mathbb{R}$ there is nothing between absolute and conditional
convergence: a convergent series either may be reordered freely, sum and all, or
else has a rearrangement that fails to converge at all.

**This is a statement about $\mathbb{R}$, and nothing here says how much of it
survives elsewhere.** Whether the equivalence of 1 and 2 holds for series of
vectors is a question this library cannot pose at this point in the reading
order, since it has no notion of a convergent series of vectors; it is raised,
and left open, in [[rem-rearrangement-in-higher-dimensions]]. No claim about any
space other than $\mathbb{R}$ is made or used here.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals.

[L1] An absolutely convergent series converges unconditionally: every rearrangement converges, to the same sum ([[thm-dirichlet-rearrangement]]).

[L2] If $\sum a_k$ converges conditionally then for every $\alpha \le \beta$ in the extended reals there is a rearrangement whose partial sums have those as limit inferior and limit superior; in particular there is one whose partial sums diverge to $+\infty$ ([[thm-riemann-series-theorem]]).

[L3] Unconditional convergence means: the series converges, and every rearrangement converges to the same sum ([[def-rearrangement-and-unconditional-convergence]]).

[L4] A series converges absolutely when $\sum |a_k|$ converges, and conditionally when it converges while $\sum |a_k|$ does not; a convergent series is exactly one of the two ([[def-absolute-and-conditional-convergence]]).

[L5] A sequence diverging to $+\infty$ does not converge: if $x_n \to +\infty$ and also $x_n \to L$, then eventually $x_n > L + 1$ and eventually $|x_n - L| < 1$, which are incompatible ([[def-divergence-to-infinity]], [[def-real-limit]], [[def-series]]).

## Proof

**Proof technique:** direct.

1.1 Assume 1. Then by [L1] the series converges and every rearrangement converges to the same sum, which is 2. [L1, L3]

1.2 Assume 2. Then in particular the series converges and every rearrangement converges, which is 3. [L3]

1.3 Assume 3, and suppose $\sum a_k$ did not converge absolutely. Since it converges, it would then converge conditionally. [L4]

2.1 In that situation [L2] supplies a bijection $\sigma$ of $\mathbb{N}$ for which the partial sums of $\sum a_{\sigma(k)}$ diverge to $+\infty$, and such a series does not converge; this contradicts the assumption that every rearrangement converges. [step 1.3, L2, L5]

3.1 Hence under 3 the series converges absolutely, which is 1. [step 1.3, step 2.1, L4]

4.1 The implications 1 to 2, 2 to 3 and 3 to 1 close the cycle, so the three statements are equivalent. [step 1.1, step 1.2, step 3.1] ∎

## Remarks

- **Statement 3 is the reason the corollary is worth recording.** It says that merely *asking* every rearrangement to converge already forces absolute convergence, so the apparently weaker demand is not weaker at all. What makes that work is the strength of [[thm-riemann-series-theorem]]: it produces not only rearrangements with prescribed sums but rearrangements with no sum.

- **Two of the three implications are cheap.** The content is in 3 implies 1, and its only ingredient is the Riemann series theorem. The implication 1 implies 2 is [[thm-dirichlet-rearrangement]] verbatim, and 2 implies 3 is a weakening.

- **Where the dividing line sits.** By [[def-absolute-and-conditional-convergence]] a convergent series is absolutely or conditionally convergent and not both, so the corollary may be read as: the conditionally convergent series are exactly the convergent series that are not unconditionally convergent. The alternating harmonic series is the standard inhabitant of that class; see [[fs-rearrangement-preserves-the-sum]].
````

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

### `def-integer-power`

````markdown
---
id: def-integer-power
kind: definition
title: "Integer powers $a^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, def-ordered-field, def-integers, def-field, def-int-operations, lem-nat-embeds-int, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-of-zero-mult, thm-int-ordered-ring]
justified_by: [lem-power-laws]
aliases: [def-power]
landmark: false
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
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered field
([[def-ordered-field]], [[def-field]]).

**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{R}$, the starting element $1$ and the function
$f(x) = x \cdot a$, there is a unique function $\mathbb{N} \to \mathbb{R}$,
written $n \mapsto a^n$, with

$$a^0 = 1, \qquad a^{n+1} = a^n \cdot a \quad (n \in \mathbb{N}).$$

Thus $a^1 = a$, $a^2 = a \cdot a$, and so on. Note that this is defined for
**every** $a$, including $a = 0$.

**Negative exponents.** If $a \ne 0$ and $n \in \mathbb{N}$ with $n \ge 1$, set

$$a^{-n} := (a^n)^{-1}.$$

**Why that is legitimate.** The right-hand side presupposes that $a^n$ is
invertible, that is, that $a^n \ne 0$. This is a proof obligation and not an
observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \ne 0$
in a field, $a^n \ne 0$ for every $n \in \mathbb{N}$, proved there by induction on
$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).
That lemma is a statement *about* the operation introduced here, so it depends on
this definition and is recorded in this item's `justified_by` rather than in its
`deps` (SCHEMA §3). Given $a^n \ne 0$, the value $(a^n)^{-1}$ is a single
well-determined element, because multiplicative inverses in a field are unique
([[lem-of-inverse-unique]]).

**Integer exponents.** Every integer $m$ ([[def-integers]]) is either
$\iota(n)$ or $-\iota(n)$ for a unique natural $n$, where $\iota$ is the
embedding $\mathbb{N} \to \mathbb{Z}$ ([[lem-nat-embeds-int]],
[[def-int-operations]]). This too is a citation and not a slogan: the order on
$\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \ge 0$ or $m < 0$; the
image of $\iota$ is exactly the set of nonnegative integers, and each of them is
$\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then
$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),
so $-m = \iota(n)$ and $m = -\iota(n)$, with $n$ unique because $\iota$ is
injective. The two clauses above therefore define $a^m$ for every
$m \in \mathbb{Z}$ whenever $a \ne 0$, and for every $m \in \mathbb{N}$ for
arbitrary $a$. The clauses are consistent where they overlap: the only overlap is
$m = 0$, where $-\iota(0) = \iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.

## Remarks

- **The convention $0^0 = 1$ is adopted here**, and it is not a matter of taste
  but of agreement with the recursion above: $a^0 = 1$ is the starting value for
  every $a$, exactly as the empty product is $1$ ([[def-finite-sum]]). This is
  the convention that makes the empty product, the binomial theorem, and
  polynomial notation $\sum_k c_k x^k$ work at $x = 0$ without an exception. The
  competing convention "$0^0$ undefined" belongs to contexts where $x^y$ is
  studied as a function of two *real* variables and one wants continuity, which
  is unavailable and irrelevant here: the exponent in $a^m$ is an integer, never
  a real.
- $0^n = 0$ for every $n \ge 1$, since $0^{n} = 0^{n-1} \cdot 0 = 0$, a product
  with a zero factor ([[lem-of-zero-mult]]); and
  $0^{-n}$ is not defined for $n \ge 1$, since $0$ has no inverse.
- The exponent is an integer and stays an integer. Rational exponents are a
  separate construction resting on the existence of roots
  ([[thm-nth-roots-exist]], [[def-rational-power]]), and real exponents do not
  exist in this library yet ([[rem-real-exponents-deferred]]).
- The laws $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$ are
  proved, not assumed, in [[lem-power-laws]]; the order behaviour of $a \mapsto a^n$
  is [[lem-power-monotone]].
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

### `lem-power-laws`

````markdown
---
id: lem-power-laws
kind: lemma
title: "Laws of integer exponents"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, thm-induction-principle, def-field, def-int-operations, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-nat-embeds-int, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b$ be elements of a field ([[def-field]]) and let integer powers be as in
[[def-integer-power]].

1. For all $m, n \in \mathbb{N}$: $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$.
2. If $a \ne 0$ then $a^n \ne 0$ for every $n \in \mathbb{N}$, and $a^{-m} = (a^m)^{-1}$ for every $m \in \mathbb{Z}$ ([[def-int-operations]]).
3. If $a \ne 0$ and $b \ne 0$ then all three identities of claim 1 hold for all $m, n \in \mathbb{Z}$.

## Facts & Assumptions

**Given:** Elements $a, b$ of a field $F$, naturals $m, n, p, q, k$ and integers ranged over by $m, n$ in claims 2 and 3.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{n+1} = a^n a$ for $n \in \mathbb{N}$; and $a^{-n} := (a^n)^{-1}$ for $a \ne 0$ and $n \ge 1$, the two clauses agreeing at $n = 0$.

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Field arithmetic: multiplication is associative and commutative with identity $1$, and every nonzero element has an inverse ([[def-field]]); inverses are unique ([[lem-of-inverse-unique]], which states uniqueness and nothing further), and HENCE, for $x, y \ne 0$, $(xy)^{-1} = x^{-1} y^{-1}$ and $(x^{-1})^{-1} = x$, since $(xy)(x^{-1}y^{-1}) = 1$ and $x^{-1}x = 1$ exhibit inverses that uniqueness then identifies.

[L4] A field has no zero divisors: $xy = 0$ implies $x = 0$ or $y = 0$ ([[lem-of-no-zero-divisors]]).

[L5] $\mathbb{Z}$ is a commutative ring in which every element is $\iota(k)$ or $-\iota(k)$ for a unique natural $k$ ([[thm-int-comm-ring]], [[lem-nat-embeds-int]], [[def-int-operations]]); we write $k$ for $\iota(k)$.

## Proof

**Proof technique:** induction.

1.1 Base cases at $n = 0$ for the addition law, the product law and nonvanishing: $a^{m+0} = a^m = a^m \cdot 1 = a^m a^0$ for every $m \in \mathbb{N}$; $(ab)^0 = 1 = 1 \cdot 1 = a^0 b^0$; and if $a \ne 0$ then $a^0 = 1 \ne 0$. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $a^{m+n} = a^m a^n$ for all $m \in \mathbb{N}$, $(ab)^n = a^n b^n$, and $a^n \ne 0$ whenever $a \ne 0$. The iterated-power law $(a^m)^n = a^{mn}$ is deliberately NOT carried in this hypothesis: its successor step needs the addition law at the exponent pair $(mn, m)$, whose second entry is not the current stage, so that law must be finished first and the iterated law proved afterwards. [ih]

1.3 For $a \ne 0$ and every integer $j$, $a^{-j} = (a^j)^{-1}$: for $j \ge 0$ this is the definition together with the agreement of the two clauses at $j = 0$, and for $j = -k$ with $k \ge 1$ it reads $a^{k} = (a^{-k})^{-1}$, which holds because $a^{-k} = (a^k)^{-1}$ and $(x^{-1})^{-1} = x$ at $x = a^{k}$. That last substitution needs $a^{k} \ne 0$, which is NOT free here and must not be read off the definition, since the definition of the negative clause is what is being justified; it is instead a self-contained induction on $k$, from $a^{0} = 1 \ne 0$ and the fact that $a^{k+1} = a^{k}a$ is a product of two nonzero elements of a field, hence nonzero. [L1, L2, L3, L4, L5]

2.1 Successor step for the addition law, the product law and nonvanishing: $a^{m+(n+1)} = a^{(m+n)+1} = a^{m+n} a = (a^m a^n) a = a^m (a^n a) = a^m a^{n+1}$ for every $m \in \mathbb{N}$; $(ab)^{n+1} = (ab)^n (ab) = (a^n b^n)(ab) = (a^n a)(b^n b) = a^{n+1} b^{n+1}$; and if $a \ne 0$ then $a^{n+1} = a^n a$ is a product of two nonzero elements, hence nonzero. [step 1.2, L1, L3, L4]

3.1 By the induction principle, for all $m, n \in \mathbb{N}$: $a^{m+n} = a^m a^n$ and $(ab)^n = a^n b^n$, and $a^n \ne 0$ whenever $a \ne 0$. The addition law is thereby available at EVERY pair of natural exponents, which is exactly what the iterated-power law needs. [step 1.1, step 2.1, L2]

4.1 The iterated-power law for natural exponents, $(a^m)^n = a^{mn}$, by a second induction on $n$ with $m \in \mathbb{N}$ fixed: at $n = 0$ both sides are $1$, since $(a^m)^0 = 1 = a^0 = a^{m \cdot 0}$; and if $(a^m)^n = a^{mn}$ then $(a^m)^{n+1} = (a^m)^n a^m = a^{mn} a^m = a^{mn+m} = a^{m(n+1)}$, where the third equality is the addition law of step 3.1 at the pair $(mn, m)$, legitimate precisely because that law is by now proved for all pairs of naturals. This completes claim 1. [step 3.1, L1, L2, L3]

4.2 For $a \ne 0$ and every integer $j$, $a^{j+1} = a^j a$: for $j \ge 0$ this is the recursion clause, and for $j = -k$ with $k \ge 1$ we compute $a^{-k} a = (a^k)^{-1} a = (a^{k-1} a)^{-1} a = (a^{k-1})^{-1} a^{-1} a = (a^{k-1})^{-1} = a^{-(k-1)} = a^{-k+1}$. [step 3.1, step 1.3, L1, L3]

4.3 For $a, b \ne 0$ the product law holds for all integers $n$: for $n \ge 0$ it is step 3.1, and for $n = -k$ with $k \ge 1$ we get $(ab)^{-k} = ((ab)^k)^{-1} = (a^k b^k)^{-1} = (a^k)^{-1}(b^k)^{-1} = a^{-k} b^{-k}$. [step 3.1, step 1.3, L3, L5]

5.1 For $a \ne 0$, every integer $j$ and every natural $k$, $a^{j+k} = a^j a^k$, by induction on $k$: the case $k = 0$ is $a^j = a^j \cdot 1$, and if $a^{j+k} = a^j a^k$ then $a^{j+k+1} = a^{j+k} a = a^j a^k a = a^j a^{k+1}$ by step 4.2 applied to the integer $j+k$ and by the recursion clause. [step 4.2, L1, L2, L3]

6.1 For $a \ne 0$ the addition law holds for all integers $m, n$: writing $n = k$ or $n = -k$ with $k \in \mathbb{N}$, the case $n = k$ is step 5.1, while for $n = -k$ step 5.1 applied to the integer $m - k$ gives $a^m = a^{(m-k)+k} = a^{m-k} a^k$, hence $a^{m-k} = a^m (a^k)^{-1} = a^m a^{-k}$. [step 5.1, step 1.3, L3, L5]

7.1 For $a \ne 0$ the iterated-power law holds for all integers $m, n$: for $n \ge 0$ induction on $n$ gives $(a^m)^{n+1} = (a^m)^n a^m = a^{mn} a^m = a^{mn+m} = a^{m(n+1)}$, the third equality by the integer addition law of step 6.1 at the pair $(mn, m)$, with base $(a^m)^0 = 1 = a^0$; and for $n = -q$ with $q \ge 1$, $(a^m)^{-q} = ((a^m)^q)^{-1} = (a^{mq})^{-1} = a^{-mq} = a^{m(-q)}$, using that $a^m \ne 0$ by step 3.1 and step 1.3. [step 6.1, step 3.1, step 1.3, L2, L3, L5]

8.1 Claims 1, 2 and 3 are therefore established: the addition, product and iterated-power laws for natural exponents together with nonvanishing by steps 3.1 and 4.1, the identity $a^{-m} = (a^m)^{-1}$ by step 1.3, and the three integer-exponent laws by steps 6.1, 4.3 and 7.1. [step 3.1, step 4.1, step 1.3, step 6.1, step 4.3, step 7.1, discharge-induction] ∎
````

### `thm-dirichlet-rearrangement`

````markdown
---
id: thm-dirichlet-rearrangement
kind: theorem
title: "Dirichlet's rearrangement theorem: an absolutely convergent series converges unconditionally, and every rearrangement of it has the same sum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, lem-absolute-convergence-implies-convergence, lem-positive-and-negative-parts, thm-nonnegative-series-bounded-partial-sums, lem-series-linearity, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-limit-preserves-order, def-injection-surjection-bijection, def-series, def-real-limit]
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals whose series converges absolutely
([[def-absolute-and-conditional-convergence]]), and let
$\sigma : \mathbb{N} \to \mathbb{N}$ be a bijection
([[def-injection-surjection-bijection]]). Then:

1. $\sum |a_{\sigma(k)}|$ converges, with
   $\sum_{k=0}^{\infty} |a_{\sigma(k)}| = \sum_{k=0}^{\infty} |a_k|$; that is,
   the rearranged series again converges absolutely;
2. $\sum a_{\sigma(k)}$ converges, with
   $$\sum_{k=0}^{\infty} a_{\sigma(k)} \;=\; \sum_{k=0}^{\infty} a_k .$$

Consequently an absolutely convergent series converges unconditionally
([[def-rearrangement-and-unconditional-convergence]]).

The engine of the proof is a single statement about series of **nonnegative**
terms: for those, the sum is the supremum of the partial sums
([[thm-nonnegative-series-bounded-partial-sums]]), a quantity that cannot see the
order of the terms. The general case is reduced to that one through the positive
and negative parts ([[lem-positive-and-negative-parts]]), which is why no
manipulation of signed finite sums over shuffled index sets occurs anywhere below.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $\sum |a_k|$ convergent, and a bijection $\sigma : \mathbb{N} \to \mathbb{N}$.

[L1] Finite sums: $\sum_{k<0} x_k = 0$, $\sum_{k<n+1} x_k = \sum_{k<n} x_k + x_n$, and a finite sum may be split at any intermediate index ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] Monotonicity of finite sums: if $x_k \le y_k$ for all $k < n$ then $\sum_{k<n} x_k \le \sum_{k<n} y_k$; in particular a finite sum of nonnegative terms is nonnegative ([[lem-finite-sum-laws]]).

[L3] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above, and then the sum is the supremum of that range; in particular every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L4] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L5] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] A bijection is injective and surjective; $f[S]$ and $f^{-1}[T]$ denote image and preimage ([[def-injection-surjection-bijection]]).

[L7] Positive and negative parts: $a_k^{+} = (|a_k| + a_k)/2$ and $a_k^{-} = (|a_k| - a_k)/2$ are nonnegative, $a_k = a_k^{+} - a_k^{-}$, $|a_k| = a_k^{+} + a_k^{-}$, and $\sum |a_k|$ converges if and only if both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge ([[lem-positive-and-negative-parts]]).

[L8] Linearity of series ([[lem-series-linearity]]).

[L9] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

[L10] Unconditional convergence means every rearrangement converges to the same sum ([[def-rearrangement-and-unconditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 **Finite domination.** For every $n \in \mathbb{N}$ the following holds: for every sequence $(c_k)$ of nonnegative reals, every $Q \in \mathbb{N}$ and every injective map $\tau$ from $\{k : k < n\}$ into $\{k : k < Q\}$, one has $\sum_{k<n} c_{\tau(k)} \le \sum_{k<Q} c_k$. This is proved by induction on $n$, the sequence, $Q$ and $\tau$ being universally quantified inside the induction statement. At $n = 0$ the left side is the empty sum $0$ and the right side is nonnegative. Assume the statement at $n$, and let $\tau$ be injective from $\{k : k < n+1\}$ into $\{k : k < Q\}$; put $p := \tau(n)$, so $p < Q$, and let $(c'_k)$ agree with $(c_k)$ except that $c'_p := 0$, again a nonnegative sequence. The restriction of $\tau$ to $\{k : k < n\}$ is injective into $\{k : k < Q\}$ and never takes the value $p$, so $c'_{\tau(k)} = c_{\tau(k)}$ for $k < n$, and the induction hypothesis gives $\sum_{k<n} c_{\tau(k)} = \sum_{k<n} c'_{\tau(k)} \le \sum_{k<Q} c'_k$. Splitting the sum $\sum_{k<Q}$ at $p$ and at $p+1$ shows $\sum_{k<Q} c'_k = \sum_{k<Q} c_k - c_p$, so adding $c_p$ to both sides gives $\sum_{k<n+1} c_{\tau(k)} \le \sum_{k<Q} c_k$. [L1, L2, L5, L6]

1.2 **Bounding index.** For every injective $\rho : \mathbb{N} \to \mathbb{N}$ and every $n \in \mathbb{N}$ there is $Q \in \mathbb{N}$ with $\rho(k) < Q$ for all $k < n$: at $n = 0$ take $Q = 0$, and if $Q$ works for $n$ then the greater of $Q$ and $\rho(n)+1$ works for $n+1$, the order on $\mathbb{N}$ being total. [L5, L6]

1.3 Since $\sigma$ is a bijection, for every $j \in \mathbb{N}$ there is exactly one $k$ with $\sigma(k) = j$; write $\sigma^{-1}(j)$ for that $k$. Then $\sigma^{-1}$ is a bijection of $\mathbb{N}$, with $\sigma(\sigma^{-1}(j)) = j$ for every $j$. [L6, choose]

1.4 By [L7] both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge; write $U$ and $V$ for their sums. Since $a_k = a_k^{+} - a_k^{-}$, linearity gives $\sum_{k=0}^{\infty} a_k = U - V$. [given, L7, L8]

1.5 The positive and negative parts are defined pointwise from the value of the term, so the positive part of $a_{\sigma(k)}$ is $a_{\sigma(k)}^{+}$ and its negative part is $a_{\sigma(k)}^{-}$; both are nonnegative sequences in the index $k$. [L7]

2.1 **The nonnegative case, one inequality.** Let $(c_k)$ be a sequence of nonnegative reals with $\sum c_k$ convergent of sum $M$, and let $\rho$ be a bijection of $\mathbb{N}$. For each $n$ pick $Q$ as in step 1.2; then $\rho$ restricted to $\{k : k<n\}$ is injective into $\{k : k<Q\}$, so $\sum_{k<n} c_{\rho(k)} \le \sum_{k<Q} c_k \le M$ by step 1.1 and [L3]. The terms $c_{\rho(k)}$ are nonnegative, so the partial sums of $\sum c_{\rho(k)}$ are bounded above by $M$; hence that series converges, and since each partial sum is at most $M$ its sum is at most $M$. [step 1.1, step 1.2, L2, L3, L4]

3.1 **The nonnegative case, equality.** With $(c_k)$, $M$ and $\rho$ as in step 2.1, write $M'$ for the sum of $\sum c_{\rho(k)}$, so $M' \le M$. The sequence $(c_{\rho(k)})_k$ is nonnegative with convergent series of sum $M'$, and its rearrangement along the bijection $\rho^{-1}$ is $j \mapsto c_{\rho(\rho^{-1}(j))} = c_j$; so step 2.1, applied to that sequence and that bijection, gives $M \le M'$. Hence $M' = M$. [step 1.3, step 2.1]

4.1 Applying step 3.1 to the nonnegative sequence $(|a_k|)$, whose series converges by hypothesis, and to $\sigma$: the series $\sum |a_{\sigma(k)}|$ converges with the same sum as $\sum |a_k|$, which is claim 1. [given, step 3.1]

4.2 Applying step 3.1 to $(a_k^{+})$ and to $(a_k^{-})$, each with the bijection $\sigma$: the series $\sum a_{\sigma(k)}^{+}$ and $\sum a_{\sigma(k)}^{-}$ converge, with sums $U$ and $V$ respectively. [step 3.1, step 1.4, step 1.5]

5.1 Since $a_{\sigma(k)} = a_{\sigma(k)}^{+} - a_{\sigma(k)}^{-}$ for every $k$, linearity gives that $\sum a_{\sigma(k)}$ converges with sum $U - V$, which by step 1.4 equals $\sum_{k=0}^{\infty} a_k$; this is claim 2. [step 1.4, step 1.5, step 4.2, L8]

6.1 The same conclusion is available from claim 1 alone: $\sum |a_{\sigma(k)}|$ converges, so $\sum a_{\sigma(k)}$ converges; step 5.1 is what identifies its sum. [step 4.1, L9]

7.1 Claims 1 and 2 hold for an arbitrary bijection $\sigma$, so $\sum a_k$ converges and every rearrangement of it converges to the same sum, that is, $\sum a_k$ converges unconditionally. [step 4.1, step 5.1, L9, L10] ∎

## Remarks

- **Why the nonnegative case is the whole theorem.** For nonnegative terms the sum is the supremum of the set of partial sums ([[thm-nonnegative-series-bounded-partial-sums]]), and step 2.1 shows that each partial sum of a rearrangement is bounded by the original sum, and conversely. No cancellation can occur, so nothing depends on the order. Everything genuinely signed in the theorem is handled by [[lem-positive-and-negative-parts]], which splits the series into two nonnegative ones.

- **What step 1.1 is, and why it is proved rather than assumed.** It says that a finite sum of nonnegative terms taken along an injective list of indices is at most the sum over an initial segment containing all those indices. This is the one piece of finite combinatorics the theorem needs, and it is not among the laws of [[lem-finite-sum-laws]], all of which compare sums term by term over the same index range. The proof zeroes out one term at a time, which is what keeps it inside those laws.

- **The hypothesis cannot be weakened.** [[thm-riemann-series-theorem]] shows that for a conditionally convergent series every real number, and $\pm\infty$ besides, is the sum of some rearrangement; and [[cor-unconditional-iff-absolute-in-r]] turns the two theorems together into an exact characterisation.
````

### `thm-geometric-series`

````markdown
---
id: thm-geometric-series
kind: theorem
title: "For $|r| < 1$, $\\sum_{k \\ge 0} r^k = 1/(1-r)$, and for $|r| \\ge 1$ the series diverges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, lem-power-difference-factorisation, lem-geometric-sequence-null, lem-nth-term-test, def-integer-power, thm-algebra-of-limits, def-finite-sum, lem-of-abs-value, lem-power-monotone, thm-induction-principle, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
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
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),
so that $r^0 = 1$ for every $r$, including $r = 0$.

1. If $|r| < 1$ then the series $\sum r^k$ converges ([[def-series]]) and
   $$\sum_{k=0}^{\infty} r^{k} \;=\; \frac{1}{1-r} .$$
2. If $|r| \ge 1$ then $\sum r^k$ diverges.

The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular
$\sum_{k=0}^{\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to
$1$. Which starting index is meant has to be said, and it is said here.

## Facts & Assumptions

**Given:** A real number $r$, the integer powers $r^k$ ([[def-integer-power]]), and the partial sums $s_n = \sum_{k<n} r^k$ of $\sum r^k$ ([[def-series]], [[def-finite-sum]]).

[L1] Factorisation of a difference of powers: for $a, b \in \mathbb{R}$ and natural $n \ge 1$, $b^n - a^n = (b-a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}$ ([[lem-power-difference-factorisation]]).

[L2] For $|r| < 1$ the sequence $(r^k)$ is null, that is $r^k \to 0$ ([[lem-geometric-sequence-null]]).

[L3] Algebra of limits: sums, differences and quotients of convergent sequences converge to the corresponding combination, the quotient rule requiring a nonzero limit and nonzero denominators ([[thm-algebra-of-limits]], [[def-real-limit]]).

[L4] Absolute value: $|xy| = |x|\,|y|$, $|x| \ge 0$, and $|x| = 0$ exactly when $x = 0$; also $|1| = 1$, since $1 > 0$ ([[lem-of-abs-value]]).

[L5] Powers and order: $a^0 = 1$ for every $a$; if $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; and $1^n = 1$ for every $n$ ([[lem-power-monotone]], [[def-integer-power]]).

[L6] The principle of induction ([[thm-induction-principle]]).

[L7] If a series converges then its terms tend to $0$ ([[lem-nth-term-test]]).

[L8] Notation of [[def-finite-sum]]: $\sum_{k=0}^{n-1} x_k$ is $\sum_{k<n} x_k$, and the empty sum $\sum_{k<0} x_k$ is $0$.

## Proof

**Proof technique:** cases.

1.1 Assume $|r| < 1$. [assume-case lt]

1.2 Assume instead $|r| \ge 1$. [assume-case ge]

1.3 For every natural $n \ge 1$, applying [L1] with $b = 1$ and $a = r$ gives $1 - r^n = (1-r)\sum_{k=0}^{n-1} r^k \cdot 1^{\,n-1-k} = (1-r)\,s_n$, using $1^m = 1$ and the notation of [L8]. [L1, L5, L8]

1.4 At $n = 0$ the identity $1 - r^n = (1-r)s_n$ also holds, both sides being $0$ because $r^0 = 1$ and $s_0$ is the empty sum. [L5, L8]

2.1 In the case $|r| < 1$ we have $r \ne 1$, since $|1| = 1$ and $|r| < 1$; hence $1 - r \ne 0$. [step 1.1, L4, algebra]

2.2 In the case $|r| \ge 1$, an induction gives $|r^k| = |r|^k$ for every $k \in \mathbb{N}$: at $k = 0$ both sides are $1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k \cdot r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [step 1.2, L4, L5, L6]

2.3 In the case $|r| \ge 1$ we get $|r|^k \ge 1$ for every $k \in \mathbb{N}$: at $k = 0$ this reads $1 \ge 1$, and for $k \ge 1$ it is the comparison $|r|^k \ge |r| \ge 1$. [step 1.2, L5]

3.1 In the case $|r| < 1$, dividing by $1 - r \ne 0$ gives $s_n = (1 - r^n)/(1-r)$ for every $n \in \mathbb{N}$. [step 2.1, step 1.3, step 1.4, algebra]

3.2 In the case $|r| \ge 1$, combining the two previous steps gives $|r^k - 0| = |r^k| = |r|^k \ge 1$ for every $k \in \mathbb{N}$. [step 2.2, step 2.3]

4.1 In the case $|r| < 1$ the sequence $(r^n)$ is null, so $1 - r^n \to 1$ and therefore $s_n \to 1/(1-r)$, the denominator being the nonzero constant $1-r$; hence $\sum r^k$ converges with sum $1/(1-r)$, which is claim 1. [step 1.1, step 3.1, step 2.1, L2, L3]

4.2 In the case $|r| \ge 1$ the sequence $(r^k)$ does not converge to $0$, since the rational tolerance $\varepsilon = 1$ admits no index $K$ with $|r^k - 0| < 1$ for all $k \ge K$; so by the term test $\sum r^k$ diverges, which is claim 2. [step 3.2, L7]

5.1 The two cases $|r| < 1$ and $|r| \ge 1$ exhaust the possibilities, since the order on $\mathbb{R}$ is total, so claims 1 and 2 together cover every real $r$. [step 4.1, step 4.2, cases-exhaustive] ∎

## Remarks

- **The divergence half needs no separate treatment of $r = 1$ and $r = -1$.** Both are covered by $|r| \ge 1$, and the single reason is the same in every case: the terms have absolute value at least $1$, so they cannot tend to $0$. For $r = 1$ the partial sums are $s_n = n$ and run to $+\infty$; for $r = -1$ they oscillate between $0$ and $1$. The theorem says only that neither converges, which is all that "diverges" means here ([[def-series]]).

- **Why the identity is proved at $n = 0$ separately.** [[lem-power-difference-factorisation]] requires $n \ge 1$, since its right-hand side is a sum over $k < n$ of a term involving $b^{\,n-1-k}$, and $n-1$ is not a natural number at $n = 0$. The identity is still true at $n = 0$, but by inspection of two empty objects rather than by that lemma, and step 1.4 says so rather than letting the reader assume the citation covers it.
````

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
proof_strategy: direct
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
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
````

