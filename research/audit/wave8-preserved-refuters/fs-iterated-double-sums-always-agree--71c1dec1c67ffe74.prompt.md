# Audit proof-refuter brief — Wave 8, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as a
read-only adversarial proof-refuter for the published-page audit. You are
tool-less: you cannot open a file, run a command, browse, edit, or delegate.
Everything you may rely on is reproduced in the `This dispatch` section. Return
evidence only; Audit-Alpha alone adjudicates and edits.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

## Adversarial standard

Read the target's title, Statement/Definition/Example/Statement refuted, Facts &
Assumptions, every numbered proof/refutation/verification step, and Remarks.
Try to falsify the public claim and every load-bearing inference.

1. Compare every cited fact with the supplied source text before alleging that
   it is weak. Check domain, quantifiers, hypotheses, direction, conclusion,
   and whether the source licenses the exact use.
2. Check that the title and public statement assert no more than the proof
   establishes, and that every proof step uses only available premises.
3. Check both directions of biconditionals, uniqueness/existence claims,
   induction and limiting arguments, empty/zero/endpoint/degenerate cases,
   extended-real conventions, index shifts, and hidden division or choice.
4. Re-read Remarks as skeptically as a numbered step. A false mathematical
   remark is a defect even when the proof is sound.
5. When the target is marked `ai-generated`, actively search for a
   counterexample to its claim, witness, or refutation rather than merely
   checking prose consistency.
6. Treat a false public claim, logically invalid proof, missing necessary
   hypothesis, circularity, or materially inaccurate load-bearing citation as
   fatal. Do not inflate an expository omission or a gap closable within thirty
   seconds into a defect.

## Output format

Reply with exactly this structure and no preamble:

```text
VERDICT: CLEAN | DEFECTS
```

If `DEFECTS`, give one block per finding:

```text
FINDING 1
  location: [exact title, section, fact label, or numbered step]
  severity: fatal | nonfatal
  claim:    [the exact mathematical assertion]
  evidence: [counterexample, missing hypothesis, invalid inference, or exact source mismatch]
```

Then always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and their disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm the title, public claim, every numbered step, and Remarks were read]
```


---

# This dispatch

## Selection reasons

- critical risk (11): 6 declared dependencies; 6 cited facts; 7 numbered proof steps; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; analytic limiting/completeness language

## Target item — `fs-iterated-double-sums-always-agree`

Normalized current SHA-256: `4fd61a229346e1561193f7839ca4ae999a9aab0190980ffa9b96351f9476b25b`

The complete current item follows, including frontmatter:

````markdown
---
id: fs-iterated-double-sums-always-agree
kind: false-statement
title: "FALSE: whenever both iterated sums of a double array exist, they are equal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-double-series-fubini, def-absolute-and-conditional-convergence, def-finite-sum, lem-finite-sum-laws, def-series, def-real-limit]
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
    - title: "Fubini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fubini%27s_theorem"
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "R. C. Gunning, Analytic Functions of Several Complex Variables"
      url: "https://web.math.princeton.edu/~gunning/bk.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every array $a : \mathbb{N}\times\mathbb{N} \to \mathbb{R}$
such that every row series $\sum_j a_{ij}$ converges, every column series
$\sum_i a_{ij}$ converges, and both series of those sums converge, one has

$$\sum_{i=0}^{\infty}\Bigl(\sum_{j=0}^{\infty} a_{ij}\Bigr) \;=\; \sum_{j=0}^{\infty}\Bigl(\sum_{i=0}^{\infty} a_{ij}\Bigr) .$$

What is true is [[thm-double-series-fubini]], whose hypothesis is on the
**absolute** values: each row must be absolutely summable and the row totals of
absolute values must themselves be summable. Without that hypothesis both
iterated sums can exist and differ.

The witness is the array

$$a_{ij} := \begin{cases} 1 & \text{if } j = i, \\ -1 & \text{if } j = i-1 \text{ (that is } i = j+1), \\ 0 & \text{otherwise.} \end{cases}$$

Every row and every column has at most two nonzero entries, so every row series
and every column series converges. Row $0$ sums to $1$ and every later row to
$0$, giving iterated sum $1$; every column sums to $0$, giving iterated sum $0$.

## Facts & Assumptions

**Given:** The array $a$ with $a_{ii} = 1$ for every $i$, $a_{i+1,i} = -1$ for every $i$, and $a_{ij} = 0$ for all other pairs.

[A1] The refuted claim: whenever all the row and column series and both series of their sums converge, the two iterated sums are equal.

[L1] Finite sums: the empty sum is $0$ and $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$; a finite sum of zeros is $0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] A series whose partial sums are constant from some index on converges to that constant, directly from the definition of a limit ([[def-series]], [[def-real-limit]]).

[L3] Fubini for double series, whose hypothesis is that each $\sum_j |a_{ij}|$ converges and that the series of those row totals converges ([[thm-double-series-fubini]], [[def-absolute-and-conditional-convergence]]).

## Refutation

**Proof technique:** direct.

1.1 Fix $i$. The only nonzero entries in row $i$ are $a_{ii} = 1$ and, when $i \ge 1$, $a_{i,i-1} = -1$, the latter being the entry $a_{(i-1)+1,\,i-1}$. Both have column index below $i+1$, so the partial sums $\sum_{j<Q} a_{ij}$ are constant for $Q \ge i+1$, every further term being $0$. [given, L1]

1.2 Fix $j$. The only nonzero entries in column $j$ are $a_{jj} = 1$ and $a_{j+1,j} = -1$, so $\sum_{i<P}a_{ij} = 0$ for $P \ge j+2$, and the column series converges with sum $C_j = 0$. [given, L1, L2]

2.1 Hence every row series converges: row $0$ has $\sum_{j<Q}a_{0j} = 1$ for $Q \ge 1$, so $R_0 = 1$; and for $i \ge 1$, $\sum_{j<Q}a_{ij} = -1 + 1 = 0$ for $Q \ge i+1$, so $R_i = 0$. [step 1.1, L1, L2]

2.2 The series $\sum_j C_j$ has all terms $0$, so it converges with sum $0$. [step 1.2, L1, L2]

3.1 The series $\sum_i R_i$ has partial sums equal to $1$ from index $1$ on, so it converges with sum $1$. [step 2.1, L1, L2]

4.1 All four convergence requirements of the claim hold, by step 2.1, step 3.1, step 1.2 and step 2.2, while the two iterated sums are $1$ and $0$, which are different. So the claim [A1] is false. [step 3.1, step 2.2, A1]

5.1 The hypothesis of [L3] is what fails: the row totals of absolute values are $A_0 = 1$ and $A_i = 2$ for $i \ge 1$, so $\sum_i A_i$ has unbounded partial sums and diverges, and Fubini's theorem does not apply. [step 4.1, L1, L3] ∎

## Remarks

- **The array is as small as such an array can be.** Every row and every column has at most two nonzero entries, and every entry is $0$, $1$ or $-1$; nothing is hidden in the size of the numbers. What makes the two iterated sums differ is only that the $-1$ in each column lies one row lower than the $+1$, so the cancellation happens along columns but is deferred along rows.

- **Both iterated sums exist, and that is the whole difficulty.** A claim of this shape is not refuted by an array for which one of the sums fails to exist; the point is that existence of both is not enough, and only an absolute hypothesis makes them agree.

- **The failure has the same shape as rearrangement.** By [[thm-double-series-fubini]] the common value, when the absolute hypothesis holds, is also the sum along any enumeration of $\mathbb{N}\times\mathbb{N}$; an iterated sum is one particular way of exhausting the array, and choosing a different exhaustion is exactly choosing a different order of summation. The companion examples page develops the same array.
````

## Wave 8 provenance row for the target

```json
{
  "id": "fs-iterated-double-sums-always-agree",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://web.math.princeton.edu/~gunning/bk.pdf",
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
  ],
  "rationale": "The false assertion is a standard failed converse or missing-hypothesis misconception, while the item packages a concrete refutation and library citations; it is semantically rather than textually sourced.",
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
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the",
      "uses": [
        "1.1",
        "1.2",
        "2.1",
        "2.2",
        "3.1",
        "5.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and",
      "uses": [
        "1.1",
        "1.2",
        "2.1",
        "2.2",
        "3.1",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "$\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges",
      "uses": [
        "1.2",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for",
      "uses": [
        "1.2",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-double-series-fubini",
      "source_section": "Statement",
      "quote": "> **(H)** for every $i$ the series $\\sum_j |a_{ij}|$ converges, with sum $A_i$;",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-absolute-and-conditional-convergence",
      "source_section": "Definition",
      "quote": "**Absolute convergence.** The series $\\sum a_k$ **converges absolutely** when the",
      "uses": [
        "5.1"
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
      "id": "step-2-2",
      "claim": "Verified the stated inference at step 2.2.",
      "step": "2.2",
      "inputs": [
        "1.2",
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
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Verified the stated inference at step 4.1.",
      "step": "4.1",
      "inputs": [
        "2.1",
        "3.1",
        "1.2",
        "2.2",
        "A1"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Verified the stated inference at step 5.1.",
      "step": "5.1",
      "inputs": [
        "L3",
        "4.1",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and step 1.1 account for the empty-index case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement and step 1.2 include the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement and step 1.1 include the unit boundary."
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
    "source": "fs-iterated-double-sums-always-agree",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-double-series-fubini",
    "declared_target": "thm-double-series-fubini",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-iterated-double-sums-always-agree",
    "sourcePage": "absolute-convergence-and-rearrangement",
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
    "source": "fs-iterated-double-sums-always-agree",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-iterated-double-sums-always-agree",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-iterated-double-sums-always-agree",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-iterated-double-sums-always-agree",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
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

## Full text of every cited or declared item (6)

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

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
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
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
````

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
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

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
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
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `thm-double-series-fubini`

````markdown
---
id: thm-double-series-fubini
kind: theorem
title: "Fubini for double series: if $\\sum_i \\sum_j |a_{ij}|$ converges then both iterated sums and the sum along every bijection $\\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{N}$ converge to one and the same value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dirichlet-rearrangement, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, lem-absolute-convergence-implies-convergence, thm-n-cross-n-countable, def-injection-surjection-bijection, thm-nonnegative-series-bounded-partial-sums, thm-direct-comparison-test, lem-triangle-inequality-finite, lem-of-abs-value, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-limits, lem-limit-preserves-order, def-series, def-real-limit]
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
    - title: "Fubini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fubini%27s_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. C. Gunning, Analytic Functions of Several Complex Variables"
      url: "https://web.math.princeton.edu/~gunning/bk.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

Let $a : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ be a doubly indexed array
of reals, written $a_{ij}$. Assume:

> **(H)** for every $i$ the series $\sum_j |a_{ij}|$ converges, with sum $A_i$;
> and the series $\sum_i A_i$ converges, with sum $L$.

Then, with $J : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ any bijection
([[thm-n-cross-n-countable]], [[def-injection-surjection-bijection]]):

1. $\sum_n a_{J(n)}$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]), and its sum $S$ is the same
   for every such bijection ([[thm-dirichlet-rearrangement]]);
2. for every $i$ the series $\sum_j a_{ij}$ converges, say to $R_i$; the series
   $\sum_i R_i$ converges absolutely; and $\sum_{i=0}^{\infty} R_i = S$;
3. for every $j$ the series $\sum_i |a_{ij}|$ converges and $\sum_i a_{ij}$
   converges, say to $C_j$; the series $\sum_j C_j$ converges absolutely; and
   $\sum_{j=0}^{\infty} C_j = S$.

In particular the two iterated sums exist and agree:

$$\sum_{i=0}^{\infty}\Bigl(\sum_{j=0}^{\infty} a_{ij}\Bigr) \;=\; \sum_{j=0}^{\infty}\Bigl(\sum_{i=0}^{\infty} a_{ij}\Bigr) \;=\; \sum_{n=0}^{\infty} a_{J(n)} .$$

**The hypothesis is on the absolute values, and it is stated as an iterated
condition, not as an unqualified "double sum".** Each row must be absolutely
summable, and the row totals must themselves be summable. Without it the two
iterated sums may both exist and differ, which is
[[fs-iterated-double-sums-always-agree]].

## Facts & Assumptions

**Given:** An array $a : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ satisfying (H), with row totals $A_i$ and $L = \sum_{i=0}^{\infty} A_i$, and a bijection $J : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$.

[L1] Finite sums: the empty sum is $0$, $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$, finite sums are additive, monotone in their terms, and may be split at any intermediate index ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above; then the sum is the supremum of that range, every partial sum is at most the sum, and the partial sums converge to it ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L3] Direct comparison ([[thm-direct-comparison-test]]).

[L4] $\bigl|\sum_{k<n}x_k\bigr| \le \sum_{k<n}|x_k|$ ([[lem-triangle-inequality-finite]]).

[L5] Absolute value: $|x| \ge 0$, $-|x| \le x \le |x|$, and $|x| = 0$ exactly when $x = 0$ ([[lem-of-abs-value]]).

[L6] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L7] A bijection is an injective surjection; $\mathbb{N} \times \mathbb{N}$ admits a bijection with $\mathbb{N}$ ([[def-injection-surjection-bijection]], [[thm-n-cross-n-countable]]).

[L8] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]], [[def-absolute-and-conditional-convergence]]).

[L9] An absolutely convergent series has the same sum along every rearrangement ([[thm-dirichlet-rearrangement]], [[def-rearrangement-and-unconditional-convergence]]).

[L10] Algebra of limits, and limits preserve non-strict inequalities holding eventually ([[thm-algebra-of-limits]], [[lem-limit-preserves-order]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 **Rectangles are bounded by $L$.** For all $P, Q \in \mathbb{N}$ one has $\sum_{i<P}\sum_{j<Q}|a_{ij}| \le \sum_{i<P} A_i \le L$, since each inner sum is a partial sum of the convergent nonnegative series $\sum_j |a_{ij}|$ and so is at most $A_i$, and finite sums are monotone. [given, L1, L2]

1.2 **Single points.** Let $d : \mathbb{N}\times\mathbb{N} \to \mathbb{R}$ vanish except at one pair $(p,q)$, let $N \in \mathbb{N}$ and let $\rho$ be injective on $\{n : n<N\}$ with values in $\mathbb{N}\times\mathbb{N}$. If $(p,q) = \rho(n_0)$ for some (necessarily unique) $n_0 < N$, then $\sum_{n<N} d_{\rho(n)} = d_{pq}$; otherwise $\sum_{n<N} d_{\rho(n)} = 0$. Both follow by splitting the sum at $n_0$ and at $n_0+1$, all remaining terms being $0$. [L1, L7]

1.3 **List dominated by a rectangle.** For every $N \in \mathbb{N}$, every array $(c_{ij})$ of nonnegative reals, all $P, Q \in \mathbb{N}$ and every injective $\rho$ on $\{n : n<N\}$ with values in $\{(i,j) : i<P,\ j<Q\}$, one has $\sum_{n<N} c_{\rho(n)} \le \sum_{i<P}\sum_{j<Q} c_{ij}$. Induction on $N$, everything else universally quantified: at $N = 0$ the left side is $0$ and the right side is nonnegative; and passing from $N$ to $N+1$, put $(p,q) := \rho(N)$ and let $c''$ agree with $c$ except that $c''_{pq} := 0$, so that the induction hypothesis applied to $c''$ and $\rho$ restricted gives $\sum_{n<N} c_{\rho(n)} \le \sum_{i<P}\sum_{j<Q}c_{ij} - c_{pq}$, the subtraction coming from splitting the outer sum at $p$ and the inner one at $q$; adding $c_{pq}$ closes the induction. [L1, L6]

1.4 **Bounding indices.** For every $N$ there are $P, Q$ with $J(n) \in \{(i,j) : i<P,\ j<Q\}$ for all $n < N$; and for all $P, Q$ there is $N$ with $\{(i,j) : i<P,\ j<Q\} \subseteq \{J(n) : n<N\}$. Both are inductions using that the order on $\mathbb{N}$ is total, so that finitely many naturals have a strict upper bound; the second uses surjectivity of $J$ to name, for each pair, the index mapping onto it. [L6, L7]

1.5 For every $i$ the series $\sum_j a_{ij}$ converges, since $\sum_j |a_{ij}|$ does; write $R_i$ for its sum, so $|R_i| \le A_i$ by [L4] and [L10]. Hence $\sum_i |R_i|$ converges by comparison with $\sum_i A_i$, and $\sum_i R_i$ converges absolutely. [given, L2, L3, L4, L8, L10]

1.6 Let $\varepsilon > 0$ be real. Choose $P_0 \ge 1$ with $L - \sum_{i<P_0} A_i < \varepsilon$, possible because the partial sums of $\sum_i A_i$ converge to $L$; then choose, for each $i < P_0$, an index $Q_i$ with $A_i - \sum_{j<Q_i}|a_{ij}| < \varepsilon/P_0$, and let $Q_0$ be an upper bound of the finitely many $Q_i$, so that $A_i - \sum_{j<Q_0}|a_{ij}| < \varepsilon/P_0$ for every $i < P_0$. [given, L2, L6, choose]

2.1 **Rectangle to list.** Let $c$ be an array, let $P, Q, N \in \mathbb{N}$ and let $\rho$ be injective on $\{n : n<N\}$ with $\{(i,j) : i<P,\ j<Q\} \subseteq \{\rho(n) : n<N\}$. Let $c'$ agree with $c$ on that rectangle and vanish off it. Then $\sum_{i<P}\sum_{j<Q} c_{ij} = \sum_{n<N} c'_{\rho(n)}$. This is proved by induction on $P$, with an inner induction on $Q$: enlarging the rectangle by one column adds the single term $c_{PQ}$ to the left side, and changes $c'$ by an array vanishing except at $(P,Q)$, which by step 1.2 adds exactly $c_{PQ}$ to the right side; at $P = 0$ or $Q = 0$ both sides are $0$. [step 1.2, L1, L6]

2.2 By step 1.3 and step 1.4, every partial sum $\sum_{n<N}|a_{J(n)}|$ is at most $\sum_{i<P}\sum_{j<Q}|a_{ij}| \le L$; hence $\sum_n |a_{J(n)}|$ converges, with sum $\Lambda \le L$, and $\sum_n a_{J(n)}$ converges, say to $S$. Any two bijections $\mathbb{N} \to \mathbb{N}\times\mathbb{N}$ differ by a bijection of $\mathbb{N}$, so by [L9] the value $S$ does not depend on $J$; this is claim 1. [step 1.1, step 1.3, step 1.4, L2, L8, L9]

2.3 Write $D := \sum_{i<P_0}\sum_{j<Q_0} a_{ij}$ and $E := \sum_{i<P_0}\sum_{j<Q_0} |a_{ij}|$. By step 1.6 and monotonicity, $E > \sum_{i<P_0}(A_i - \varepsilon/P_0) = \sum_{i<P_0}A_i - \varepsilon > L - 2\varepsilon$, so $L - E < 2\varepsilon$. [step 1.6, L1]

2.4 By step 1.4 fix $N$ with $\{(i,j) : i<P_0,\ j<Q_0\} \subseteq \{J(n) : n<N\}$, and by step 1.4 again fix $P \ge P_0$, $Q \ge Q_0$ with $J(n)$ in the rectangle $\{(i,j) : i<P,\ j<Q\}$ for all $n<N$. [step 1.4, choose]

2.5 The transposed array $a^{\mathsf{T}}_{ij} := a_{ji}$ satisfies (H): its $i$-th row total is $\sum_j |a_{ji}|$, which converges because its partial sums $\sum_{j<Q}|a_{ji}|$ are bounded by $L$ by step 1.1; and the partial sums $\sum_{i<P}\sum_j |a_{ji}|$ are limits of the rectangle sums $\sum_{i<P}\sum_{j<Q}|a_{ji}|$, again bounded by $L$ by step 1.1, so the series of row totals converges. [step 1.1, L1, L2, L10]

3.1 For every $N$, $\bigl|S - \sum_{n<N}a_{J(n)}\bigr| \le \Lambda - \sum_{n<N}|a_{J(n)}|$: for $M > N$ the triangle inequality gives $\bigl|\sum_{n<M}a_{J(n)} - \sum_{n<N}a_{J(n)}\bigr| \le \sum_{n<M}|a_{J(n)}| - \sum_{n<N}|a_{J(n)}| \le \Lambda - \sum_{n<N}|a_{J(n)}|$, and letting $M$ grow, the limit preserves the two non-strict inequalities bounding the left side. [step 2.2, L1, L4, L10]

3.2 Let $a'$ agree with $a$ on the rectangle $\{(i,j) : i<P_0,\ j<Q_0\}$ and vanish off it. By step 2.1, $D = \sum_{n<N} a'_{J(n)}$ and $E = \sum_{n<N} |a'_{J(n)}|$; since $|a'_{J(n)}| \le |a_{J(n)}|$ termwise, monotonicity gives $E \le \sum_{n<N}|a_{J(n)}| \le \Lambda \le L$. [step 2.1, step 2.2, step 2.4, L1, L2]

4.1 By step 3.1 and step 3.2, $\bigl|S - \sum_{n<N} a_{J(n)}\bigr| \le \Lambda - \sum_{n<N}|a_{J(n)}| \le L - E < 2\varepsilon$. [step 3.1, step 2.3, step 3.2]

4.2 Also $\bigl|\sum_{n<N}a_{J(n)} - D\bigr| = \bigl|\sum_{n<N}(a - a')_{J(n)}\bigr| \le \sum_{n<N}|(a-a')_{J(n)}| \le \sum_{i<P}\sum_{j<Q}|(a-a')_{ij}| = \sum_{i<P}\sum_{j<Q}|a_{ij}| - E \le L - E < 2\varepsilon$, the middle inequality by step 1.3 and the following equality by splitting the iterated sum at $P_0$ and at $Q_0$, the array $a - a'$ agreeing with $a$ off the small rectangle and vanishing on it. [step 1.1, step 2.1, step 1.3, step 2.3, step 2.4, step 3.2, L1, L4]

4.3 For each $i < P_0$, $\bigl|R_i - \sum_{j<Q_0}a_{ij}\bigr| \le A_i - \sum_{j<Q_0}|a_{ij}| < \varepsilon/P_0$, by the argument of step 3.1 applied to the row $i$; summing over $i < P_0$ gives $\bigl|\sum_{i<P_0}R_i - D\bigr| < \varepsilon$. [step 3.1, step 1.6, L1, L4]

4.4 Writing $\Sigma R$ for the sum of $\sum_i R_i$, the same argument applied to the series $\sum_i R_i$ and the comparison $|R_i| \le A_i$ gives $\bigl|\Sigma R - \sum_{i<P_0}R_i\bigr| \le \sum_{i=0}^{\infty}|R_i| - \sum_{i<P_0}|R_i| \le L - \sum_{i<P_0}A_i < \varepsilon$. [step 3.1, step 1.5, step 1.6, L1, L2]

5.1 Combining step 4.1, step 4.2, step 4.3 and step 4.4, $|\Sigma R - S| < \varepsilon + \varepsilon + 2\varepsilon + 2\varepsilon = 6\varepsilon$. As $\varepsilon > 0$ was arbitrary and $|\Sigma R - S| \ge 0$, this forces $\Sigma R = S$, which with step 1.5 is claim 2. [step 1.5, step 4.1, step 4.2, step 4.3, step 4.4, L5]

6.1 Applying claims 1 and 2 to $a^{\mathsf{T}}$ and to the bijection $J^{\mathsf{T}}$ obtained by exchanging the coordinates of $J$ gives claim 3, since $a^{\mathsf{T}}_{J^{\mathsf{T}}(n)} = a_{J(n)}$ for every $n$, so the two linear series are the same series and have the same sum $S$. [step 2.2, step 5.1, step 2.5, L7] ∎

## Remarks

- **What the finite bookkeeping of steps 1.2 to 1.5 does, and why it is proved.** Three facts are needed and none of them is among the laws of [[lem-finite-sum-laws]], all of which compare sums term by term over the same index range: that a sum along an injective list picks up an isolated term exactly once; that an iterated sum over a rectangle equals the sum along any injective list containing that rectangle, of the array cut down to it; and that a sum of nonnegative terms along an injective list into a rectangle is at most the iterated sum over the rectangle. Each is proved by zeroing out one entry at a time, which keeps the argument inside those laws.

- **Where the hypothesis is used.** Only through step 1.1, which bounds every rectangle by $L$, and through step 1.6, which makes a single rectangle capture all but $2\varepsilon$ of the total mass. Everything else is bookkeeping. This is why the hypothesis has to be an absolute one: for a signed array no rectangle captures the mass, and the two iterated sums can disagree.

- **The independence of the enumeration is [[thm-dirichlet-rearrangement]] and nothing more.** Two bijections $\mathbb{N} \to \mathbb{N}\times\mathbb{N}$ differ by a bijection of $\mathbb{N}$, and an absolutely convergent series is unconditionally convergent. So the "sum of the array" is a well-defined real number attached to the array itself, and the theorem says the two iterated sums compute it.
````

