## Selection reasons

- critical risk (12): 4 declared dependencies; 5 cited facts; 10 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `lem-abel-summation-by-parts`

Normalized current SHA-256: `c32451a0d890552a7d003ffd306c619c9e40e7b3247176f0b0095fc70afd5175`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-abel-summation-by-parts
kind: lemma
title: "Abel summation by parts: with $A_n = \\sum_{k<n} a_k$ one has $\\sum_{k<n} a_k b_k = A_n b_{n-1} - \\sum_{k < n-1} A_{k+1}\\,(b_{k+1} - b_k)$ for every $n \\ge 1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-sum, lem-finite-sum-laws, def-series, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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
    - title: "Summation by parts (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Summation_by_parts"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals and let

$$A_n \;:=\; \sum_{k<n} a_k \qquad (n \in \mathbb{N})$$

be the partial sums of $\sum a_k$ ([[def-series]], [[def-finite-sum]]), so that
$A_0 = 0$ and $a_k = A_{k+1} - A_k$ for every $k$. Then for every natural number
$n \ge 1$

$$\sum_{k<n} a_k b_k \;=\; A_n\, b_{n-1} \;-\; \sum_{k<n-1} A_{k+1}\,(b_{k+1} - b_k) .$$

Both sides are finite sums in the sense of [[def-finite-sum]]; at $n = 1$ the
right-hand sum is empty and the identity reads $a_0 b_0 = A_1 b_0$.

**The hypothesis $n \ge 1$ is what makes the statement legitimate**, not merely
convenient: the index $n-1$ occurs on the right, and $n-1$ is a natural number
exactly when $n \ge 1$. At $n = 0$ there is nothing to state, both the left-hand
side and $A_0$ being $0$.

## Facts & Assumptions

**Given:** Sequences $(a_k)$ and $(b_k)$ of reals and the partial sums $A_n = \sum_{k<n} a_k$ ([[def-series]]).

[L1] Finite sums are defined by the recursion $\sum_{k<0} x_k = 0$ and $\sum_{k<n+1} x_k = \sum_{k<n} x_k + x_n$ ([[def-finite-sum]]).

[L2] The partial sums satisfy $A_0 = 0$ and $A_{n+1} = A_n + a_n$ for every $n$, those being the two clauses of [L1] applied to $(a_k)$ ([[def-series]]).

[L3] Finite sums are additive and may be split at any intermediate index ([[lem-finite-sum-laws]]).

[L4] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 The claim to be proved by induction is the statement $P(m)$: the displayed identity holds at $n = m+1$, that is $\sum_{k<m+1} a_k b_k = A_{m+1} b_m - \sum_{k<m} A_{k+1}(b_{k+1} - b_k)$. Every $n \ge 1$ is $m+1$ for exactly one $m \in \mathbb{N}$, so proving $P(m)$ for all $m$ proves the lemma. [L4]

1.2 $P(0)$ holds: the left-hand side is $\sum_{k<1} a_k b_k = a_0 b_0$ by [L1], while $A_1 = A_0 + a_0 = a_0$ by [L2] and $\sum_{k<0} A_{k+1}(b_{k+1}-b_k) = 0$ by [L1], so the right-hand side is $a_0 b_0 - 0$. [L1, L2, base]

1.3 Assume $P(m)$ for a fixed $m \in \mathbb{N}$. [ih]

1.4 By [L1], $\sum_{k<m+2} a_k b_k = \sum_{k<m+1} a_k b_k + a_{m+1} b_{m+1}$. [L1]

1.5 By [L1], $\sum_{k<m+1} A_{k+1}(b_{k+1} - b_k) = \sum_{k<m} A_{k+1}(b_{k+1} - b_k) + A_{m+1}(b_{m+1} - b_m)$. [L1, L3]

1.6 By [L2], $A_{m+2} = A_{m+1} + a_{m+1}$, so $a_{m+1} = A_{m+2} - A_{m+1}$. [L2]

2.1 Substituting the induction hypothesis into step 1.4 gives $\sum_{k<m+2} a_k b_k = A_{m+1} b_m - \sum_{k<m} A_{k+1}(b_{k+1}-b_k) + a_{m+1} b_{m+1}$. [step 1.3, step 1.4]

2.2 Using step 1.6, $A_{m+1} b_m + a_{m+1} b_{m+1} = A_{m+1} b_m + A_{m+2} b_{m+1} - A_{m+1} b_{m+1} = A_{m+2} b_{m+1} - A_{m+1}(b_{m+1} - b_m)$. [step 1.6, algebra]

3.1 Combining step 2.1 and step 2.2 and then step 1.5 gives $\sum_{k<m+2} a_k b_k = A_{m+2} b_{m+1} - A_{m+1}(b_{m+1}-b_m) - \sum_{k<m} A_{k+1}(b_{k+1}-b_k) = A_{m+2} b_{m+1} - \sum_{k<m+1} A_{k+1}(b_{k+1}-b_k)$, which is $P(m+1)$. [step 2.1, step 2.2, step 1.5, algebra]

4.1 By [L4] applied to step 1.2 and step 3.1, $P(m)$ holds for every $m \in \mathbb{N}$, that is, the displayed identity holds for every $n \ge 1$. [step 1.2, step 3.1, L4, discharge-induction] ∎

## Remarks

- **What the identity is for.** It converts a series $\sum a_k b_k$, about which nothing is assumed, into a boundary term $A_n b_{n-1}$ and a series $\sum A_{k+1}(b_{k+1} - b_k)$ whose terms carry the *differences* of $(b_k)$. If $(A_n)$ is bounded and $(b_k)$ is monotone, those differences have one sign and telescope, which is exactly the situation of [[thm-dirichlet-test]]. The transformation is the discrete analogue of integration by parts, and the boundary term is the analogue of the boundary term there.

- **The block form needs no separate proof.** For $1 \le M \le n$, subtracting the identity at $M$ from the identity at $n$ gives $\sum_{k=M}^{n-1} a_k b_k = A_n b_{n-1} - A_M b_{M-1} - \sum_{k=M-1}^{n-2} A_{k+1}(b_{k+1}-b_k)$, using only splitting of finite sums ([[lem-finite-sum-laws]]). Nothing on this page needs that form, so it is recorded here rather than stated as a result.

- **Two conventions are doing work.** $A_n$ sums the $n$ terms $a_0, \dots, a_{n-1}$, so $A_0 = 0$ and $a_k = A_{k+1} - A_k$ with no shift ([[def-series]]); and the empty sum is $0$ ([[def-finite-sum]]), which is what makes $n = 1$ a genuine instance of the identity rather than a case to be excluded.
````

## Wave 8 provenance row for the target

```json
{
  "id": "lem-abel-summation-by-parts",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
  ],
  "rationale": "Thomson–Bruckner–Bruckner states the same finite summation-by-parts identity with the same hypotheses. The proof follows that sourced telescoping derivation in the library's exclusive-sum notation.",
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
        "1.2",
        "1.4",
        "1.5"
      ]
    },
    {
      "fact": "L2",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses",
      "uses": [
        "1.2",
        "1.6"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and",
      "uses": [
        "1.5"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "1.1",
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
      "id": "step-1-3",
      "claim": "Verified the stated inference at step 1.3.",
      "step": "1.3",
      "inputs": [
        "given"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "Verified the stated inference at step 1.4.",
      "step": "1.4",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1-5",
      "claim": "Verified the stated inference at step 1.5.",
      "step": "1.5",
      "inputs": [
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-1-6",
      "claim": "Verified the stated inference at step 1.6.",
      "step": "1.6",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Verified the stated inference at step 2.1.",
      "step": "2.1",
      "inputs": [
        "1.4",
        "1.3"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Verified the stated inference at step 2.2.",
      "step": "2.2",
      "inputs": [
        "1.6"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Verified the stated inference at step 3.1.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "2.2",
        "1.5"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Verified the stated inference at step 4.1.",
      "step": "4.1",
      "inputs": [
        "L4",
        "1.2",
        "3.1"
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
    "source": "lem-abel-summation-by-parts",
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
    "source": "lem-abel-summation-by-parts",
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
    "source": "lem-abel-summation-by-parts",
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
    "source": "lem-abel-summation-by-parts",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
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

## Full text of every cited or declared item (5)

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

### `thm-dirichlet-test`

````markdown
---
id: thm-dirichlet-test
kind: theorem
title: "Dirichlet's test: if the partial sums of $\\sum a_k$ are bounded and $(b_k)$ is nonincreasing with $b_k \\to 0$, then $\\sum a_k b_k$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-abel-summation-by-parts, def-series, def-monotone-sequence, def-bounded-set, lem-telescoping-series, thm-direct-comparison-test, lem-absolute-convergence-implies-convergence, lem-series-linearity, lem-null-times-bounded, thm-algebra-of-limits, lem-limit-preserves-order, lem-limit-of-tail, lem-of-abs-value, def-real-limit]
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
    - title: "Dirichlet's test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet%27s_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals, and let $A_n = \sum_{k<n} a_k$ be
the partial sums of $\sum a_k$ ([[def-series]]). Suppose that

1. the range $\{\, A_n : n \in \mathbb{N} \,\}$ is bounded ([[def-bounded-set]]),
   that is there is a real $M \ge 0$ with $|A_n| \le M$ for every $n$; and
2. $(b_k)$ is nonincreasing ([[def-monotone-sequence]]) and converges to $0$
   ([[def-real-limit]]).

Then $\sum a_k b_k$ converges.

Under hypothesis 2 the terms $b_k$ are automatically nonnegative, and the proof
says so before using it: a nonincreasing sequence is bounded below by each of its
own later terms, and passing to the limit gives $b_k \ge 0$
([[lem-limit-preserves-order]]).

**Nothing is assumed about $\sum a_k$ itself.** Its partial sums need only stay
bounded; they need not converge. That is what makes this test the source of the
alternating series test ([[thm-alternating-series-test]]) and of examples whose
sign pattern is not alternating at all.

## Facts & Assumptions

**Given:** Sequences $(a_k)$ and $(b_k)$ of reals with $A_n = \sum_{k<n} a_k$ bounded in absolute value, and $(b_k)$ nonincreasing with $b_k \to 0$.

[L1] Abel summation by parts: for every $n \ge 1$, $\sum_{k<n} a_k b_k = A_n b_{n-1} - \sum_{k<n-1} A_{k+1}(b_{k+1} - b_k)$ ([[lem-abel-summation-by-parts]]).

[L2] Nonincreasing means $b_j \ge b_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L3] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L4] Telescoping: with $d_k := b_k - b_{k+1}$, the partial sums of $\sum d_k$ are $b_0 - b_n$, and $\sum d_k$ converges if and only if $(b_k)$ converges, with sum $b_0 - \lim_k b_k$ ([[lem-telescoping-series]]).

[L5] Direct comparison: if $0 \le x_k \le y_k$ from some index on and $\sum y_k$ converges, then $\sum x_k$ converges ([[thm-direct-comparison-test]]).

[L6] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

[L7] Linearity: if $\sum x_k$ converges then so does $\sum c\,x_k$ for every real $c$ ([[lem-series-linearity]]).

[L8] A null sequence times a bounded sequence is null ([[lem-null-times-bounded]]).

[L9] Algebra of limits for differences of convergent sequences ([[thm-algebra-of-limits]]).

[L10] A sequence converges to $x$ if and only if some tail of it converges to $x$ ([[lem-limit-of-tail]]).

[L11] Absolute value: $|xy| = |x||y|$, $|x| \ge 0$, and $|-x| = |x|$ ([[lem-of-abs-value]]).

[L12] A bounded set of reals admits a bound in absolute value ([[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 Fix a real $M \ge 0$ with $|A_n| \le M$ for every $n \in \mathbb{N}$. [given, L12, choose]

1.2 For each fixed $k$ the inequality $b_m \le b_k$ holds for all $m \ge k$, and $(b_m)_m$ converges to $0$ while the constant sequence with value $b_k$ converges to $b_k$; hence $0 \le b_k$. [given, L2, L3]

1.3 Put $d_k := b_k - b_{k+1}$ and $c_k := A_{k+1}(b_{k+1} - b_k)$ for $k \in \mathbb{N}$, and let $s_n := \sum_{k<n} a_k b_k$, $t_n := \sum_{k<n} c_k$ and $u_n := A_{n+1} b_n$. [given]

1.4 Each $d_k \ge 0$, since $(b_k)$ is nonincreasing; and $\sum d_k$ converges, with sum $b_0 - 0 = b_0$, because $(b_k)$ converges to $0$. [given, L2, L4]

2.1 For every $k$, $|c_k| = |A_{k+1}|\,|b_{k+1} - b_k| = |A_{k+1}|\, d_k \le M d_k$, using $b_{k+1} - b_k = -d_k$ and $d_k \ge 0$. [step 1.1, step 1.3, step 1.4, L11]

2.2 The sequence $(A_{n+1})_{n}$ is bounded by $M$ and $(b_n)$ converges to $0$, so $u_n = A_{n+1} b_n$ converges to $0$. [step 1.1, step 1.3, given, L8]

2.3 The series $\sum M d_k$ converges, by step 1.4 and linearity. [step 1.4, L7]

2.4 For every $n \in \mathbb{N}$, applying [L1] at the index $n+1 \ge 1$ gives $s_{n+1} = A_{n+1} b_n - \sum_{k<n} A_{k+1}(b_{k+1}-b_k) = u_n - t_n$. [step 1.3, L1]

3.1 Since $0 \le |c_k| \le M d_k$ for every $k$, the series $\sum |c_k|$ converges by comparison, and therefore $\sum c_k$ converges; write $T$ for its sum, so that $t_n \to T$. [step 2.1, step 2.3, L5, L6]

4.1 By step 2.2, step 3.1 and the algebra of limits, $s_{n+1} \to 0 - T = -T$ as $n \to \infty$. [step 2.2, step 3.1, step 2.4, L9]

5.1 The sequence $(s_{n+1})_{n \in \mathbb{N}}$ is the first tail of $(s_n)$, so $(s_n)$ itself converges to $-T$; that is, $\sum a_k b_k$ converges, with sum $-T$. [step 4.1, L10] ∎

## Remarks

- **Where each hypothesis is used, and none is decorative.** Boundedness of $(A_n)$ is used twice: once to bound $|c_k|$ in step 2.1, and once to kill the boundary term in step 2.2. Monotonicity of $(b_k)$ is what makes $|b_{k+1} - b_k|$ equal to $b_k - b_{k+1}$, so that the bound in step 2.1 telescopes; without it the differences need not sum to anything. And $b_k \to 0$ is used both in the telescoping sum of step 1.4 and in the boundary term of step 2.2.

- **Why *nonincreasing* and not *monotone*, although either would do.** Hypothesis 2 could equally be stated with "monotone", and the theorem would still be true: a nondecreasing $(b_k)$ converging to $0$ is nonpositive, so $(-b_k)$ is nonincreasing and converges to $0$, and applying the theorem to it gives convergence of $\sum a_k(-b_k)$ and hence of $\sum a_k b_k$ ([[lem-series-linearity]]). What "monotone" may not be weakened to is "monotone and bounded": a monotone $(b_k)$ with a nonzero limit is not covered, and for such a factor the conclusion fails in general. The nonincreasing form is chosen here because it is the form the proof uses, and because it makes $b_k \ge 0$ immediate. [[thm-abel-test]] is the result that handles monotone bounded factors, and it has a different hypothesis on $\sum a_k$.

- **The sum is not computed.** The proof produces the limit as $-T$, where $T$ is the sum of a series that the argument only proves convergent. This is a convergence test and nothing more.
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

