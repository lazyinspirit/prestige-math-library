# Audit proof-refuter brief — Wave 9, A6

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
For an `ai-generated` proof, actively search for a counterexample. A false
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

## Wave 9 target — `ex-locally-unbounded-finite-everywhere`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `496029ac1b2910c1e75b73522981ff3e6bdfeb9331621382a5fd21c01c358069`

## Complete current target

````markdown
---
id: ex-locally-unbounded-finite-everywhere
kind: example
title: "The function equal to $q$ at a rational $p/q$ in lowest terms and to $0$ at every irrational is finite at every point and unbounded on every nondegenerate interval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [def-dirichlet-and-thomae-functions, lem-q-and-irrationals-dense-r, lem-rat-embeds-dense, def-bounded-set, def-interval, cor-archimedean-reciprocal, thm-of-archimedean, def-oscillation, def-continuity-real, lem-integer-part, def-canonical-natural, lem-of-naturals-positive, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "finite everywhere, unbounded on every interval"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Elements of Real Analysis (Rutgers University-Camden)"
      url: "https://math.camden.rutgers.edu/files/Real_Analysis.pdf"
pipeline_run: null
---

## Example

Let $q(x)$ be the least denominator of a rational $x$
([[def-dirichlet-and-thomae-functions]]) and define
$h : \mathbb{R} \to \mathbb{R}$ by

$$h(x) := \iota(q(x)) \ \text{ for } x \in \mathbb{Q}, \qquad h(x) := 0 \ \text{ for } x \notin \mathbb{Q},$$

where $\iota(q)$ is the canonical natural ([[def-canonical-natural]]) and
$\mathbb{Q}$ is the canonical copy of the rationals inside $\mathbb{R}$
([[lem-rat-embeds-dense]]). Equivalently $h(x) = 1/t(x)$ at a rational $x$,
where $t$ is Thomae's function. Then:

1. $h(x)$ is a real number for every real $x$: $h$ is finite at every point;
2. $h$ is **unbounded on every nondegenerate interval**
   ([[def-bounded-set]], [[def-interval]]): for all reals $a < b$ and every real
   $M$ there is $x \in (a,b)$ with $h(x) > M$.

So a function may be finite at every single point and yet fail to be bounded on
every interval, however short. In particular $h$ is bounded on no neighbourhood
of any point.

## Facts & Assumptions

**Given:** The function $h$ above, with $q(x) = \min\{\, q \in \mathbb{N} : q \ge 1 \text{ and } \iota(q)x \in \mathbb{Z} \,\}$ for $x \in \mathbb{Q}$.

[A1] $q(x) \ge 1$ is a natural with $\iota(q(x))\,x \in \mathbb{Z}$, and $q(x) \le q$ for every natural $q \ge 1$ with $\iota(q)x \in \mathbb{Z}$ ([[def-dirichlet-and-thomae-functions]]).

[L1] Strictly between any two distinct reals there lies a rational ([[lem-rat-embeds-dense]], [[lem-q-and-irrationals-dense-r]]).

[L2] A nonzero integer has absolute value at least $1$, since no integer lies strictly between $0$ and $1$ ([[lem-integer-part]], [[lem-of-abs-value]]).

[L3] For every real $\eta > 0$ there is a natural $n \ge 1$ with $1/\iota(n) < \eta$, and for every real $x$ a natural $n \ge 1$ with $x < \iota(n)$; $\iota$ is positive and strictly increasing on the naturals $\ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

[L4] $\mathbb{R}$ is an ordered field ([[def-complete-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1: for a rational $x$ the value $h(x) = \iota(q(x))$ is a canonical natural, hence a real number, and for an irrational $x$ the value is $0$. Every real falls under exactly one clause, so $h$ is a function $\mathbb{R} \to \mathbb{R}$. [A1]

1.2 **Separation of rationals by their denominators.** Let $x \ne y$ be rationals. Then $|x - y| \ge 1/(\iota(q(x))\,\iota(q(y)))$. Indeed, put $q_{1} := q(x)$, $q_{2} := q(y)$, $p_{1} := \iota(q_{1})x$ and $p_{2} := \iota(q_{2})y$, all integers; then $x - y = (p_{1}\iota(q_{2}) - p_{2}\iota(q_{1}))/(\iota(q_{1})\iota(q_{2}))$, the numerator is an integer, and it is nonzero because $x \ne y$; so its absolute value is at least $1$. [A1, L2, L4]

2.1 Claim 2: let $a < b$ be reals and let $M$ be real. Take a rational $x_{1}$ with $a < x_{1} < b$ and put $q_{1} := q(x_{1})$. Take a natural $N \ge 1$ with $M < \iota(N)$, and put $$\eta := \min\Bigl\{\, \frac{1}{\iota(q_{1})\,\iota(N)},\ b - x_{1} \,\Bigr\} > 0 .$$ [step 1.2, L1, L3, L4]

3.1 With $x_{1}$, $q_{1}$, $N$ and $\eta$ as in step 2.1, take a rational $y$ with $x_{1} < y < x_{1} + \eta$. Then $a < x_{1} < y < b$, so $y \in (a,b)$; and $y \ne x_{1}$ with $|y - x_{1}| < \eta \le 1/(\iota(q_{1})\iota(N))$. [step 2.1, L1]

4.1 Hence $q(y) > N$. If instead $q(y) \le N$ then $\iota(q(y)) \le \iota(N)$, and step 1.2 would give $|y - x_{1}| \ge 1/(\iota(q_{1})\iota(q(y))) \ge 1/(\iota(q_{1})\iota(N))$, contradicting step 3.1. [step 1.2, step 3.1, L3]

5.1 Therefore $h(y) = \iota(q(y)) > \iota(N) > M$, and $y \in (a,b)$: the values of $h$ on $(a,b)$ exceed every real, so $h$ is unbounded on $(a,b)$, and hence on every set containing it. [step 2.1, step 3.1, step 4.1, L3] ∎

## Remarks

- **Finiteness at a point says nothing about local boundedness.** The two
  notions are often conflated; this example separates them as sharply as
  possible, since $h$ is unbounded on **every** nondegenerate interval and yet
  takes only real values.

- **$h$ is nowhere continuous, and the oscillation is infinite everywhere.**
  Continuity at $c$ would give a neighbourhood on which $|h - h(c)| < 1$, hence
  a neighbourhood on which $h$ is bounded, which claim 2 forbids; equivalently
  $\omega_{h}(c) = +\infty$ at every real $c$ ([[def-oscillation]],
  [[def-continuity-real]]). This is a different pathology from Thomae's
  function, whose values are bounded by $1$ and which is continuous at every
  irrational ([[thm-dirichlet-and-thomae-continuity-sets]]).

- **The separation estimate is the only arithmetic used.** Step 1.2 is the
  standard fact that two distinct rationals with denominators $q_{1}$ and
  $q_{2}$ are at least $1/(q_{1}q_{2})$ apart, and it is proved from nothing more
  than "a nonzero integer has absolute value at least $1$".
````

## Current Wave 9 provenance determination

```json
{
  "id": "ex-locally-unbounded-finite-everywhere",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://math.camden.rutgers.edu/files/Real_Analysis.pdf",
    "https://en.wikipedia.org/wiki/Thomae%27s_function"
  ],
  "rationale": "The open real-analysis text gives the reduced-denominator Thomae construction. The item takes its reciprocal-denominator companion on the rationals, with a finite value on irrationals, and supplies the everywhere-local-unboundedness and denominator-separation proofs.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-dirichlet-and-thomae-functions",
      "source_section": "Definition",
      "quote": "**$Q(x)$ is nonempty.** Every rational is $a/b$ with $a \\in \\mathbb{Z}$ and $b$ a\npositive integer ([[lem-int-embeds-rat]]), and a positive integer is $\\iota(q)$\nfor a unique natural $q \\ge 1$ ([[lem-nat-embeds-int]]); then\n$\\iota(q)\\,x = a \\in \\mathbb{Z}$, so $q \\in Q(x)$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-q-and-irrationals-dense-r",
      "source_section": "Statement",
      "quote": "Claim 2 is not a symmetry of claim 1: the rationals are dense because they are\n*constructed* to approximate, whereas the irrationals are dense because there are\ntoo many points in any interval for a countable set to exhaust it, which is why\nclaim 3 is proved alongside and used for it.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-integer-part",
      "source_section": "Statement",
      "quote": "**Two independent ingredients are needed and neither may be dropped.** Existence\nis the Archimedean property ([[thm-of-archimedean]]) together with the\nwell-ordering of $\\mathbb{N}$ ([[thm-well-ordering-principle]]): the first says\nthat $x$ is caught between two integers at all, the second picks the *least*\ninteger above $x$. Uniqueness is the discreteness of $\\mathbb{Z}$: no integer\nlies strictly between $m$ and $m+1$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that",
      "uses": [
        "2.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "2.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:",
      "uses": [
        "2.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):",
      "uses": [
        "2.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.",
      "uses": [
        "1.2",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "ex-locally-unbounded-finite-everywhere-step-1-1",
      "claim": "Claim 1: for a rational $x$ the value $h(x) = \\iota(q(x))$ is a canonical natural, hence a real number, and for an irrational $x$ the value is $0$. Every real falls under exactly one clause, so $h$ is a function $\\mathbb{R} \\to \\mathbb{R}$. [A1]",
      "step": "1.1",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "ex-locally-unbounded-finite-everywhere-step-1-2",
      "claim": "**Separation of rationals by their denominators.** Let $x \\ne y$ be rationals. Then $|x - y| \\ge 1/(\\iota(q(x))\\,\\iota(q(y)))$. Indeed, put $q_{1} := q(x)$, $q_{2} := q(y)$, $p_{1} := \\iota(q_{1})x$ and $p_{2} := \\iota(q_{2})y$, all integers; then $x - y = (p_{1}\\iota(q_{2}) - p_{2}\\iota(q_{1}))/(\\iota(q_{1})\\iota(q_{2}))$, the numerator is an integer, and it is nonzero because $x \\ne y$; so its absolute value is at least $1$. [A1, L2, L4]",
      "step": "1.2",
      "inputs": [
        "A1",
        "L2",
        "L4"
      ]
    },
    {
      "id": "ex-locally-unbounded-finite-everywhere-step-2-1",
      "claim": "Claim 2: let $a < b$ be reals and let $M$ be real. Take a rational $x_{1}$ with $a < x_{1} < b$ and put $q_{1} := q(x_{1})$. Take a natural $N \\ge 1$ with $M < \\iota(N)$, and put $$\\eta := \\min\\Bigl\\{\\, \\frac{1}{\\iota(q_{1})\\,\\iota(N)},\\ b - x_{1} \\,\\Bigr\\} > 0 .$$ [step 1.2, L1, L3, L4]",
      "step": "2.1",
      "inputs": [
        "1.2",
        "L1",
        "L3",
        "L4"
      ]
    },
    {
      "id": "ex-locally-unbounded-finite-everywhere-step-3-1",
      "claim": "With $x_{1}$, $q_{1}$, $N$ and $\\eta$ as in step 2.1, take a rational $y$ with $x_{1} < y < x_{1} + \\eta$. Then $a < x_{1} < y < b$, so $y \\in (a,b)$; and $y \\ne x_{1}$ with $|y - x_{1}| < \\eta \\le 1/(\\iota(q_{1})\\iota(N))$. [step 2.1, L1]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L1"
      ]
    },
    {
      "id": "ex-locally-unbounded-finite-everywhere-step-4-1",
      "claim": "Hence $q(y) > N$. If instead $q(y) \\le N$ then $\\iota(q(y)) \\le \\iota(N)$, and step 1.2 would give $|y - x_{1}| \\ge 1/(\\iota(q_{1})\\iota(q(y))) \\ge 1/(\\iota(q_{1})\\iota(N))$, contradicting step 3.1. [step 1.2, step 3.1, L3]",
      "step": "4.1",
      "inputs": [
        "1.2",
        "3.1",
        "L3"
      ]
    },
    {
      "id": "ex-locally-unbounded-finite-everywhere-step-5-1",
      "claim": "Therefore $h(y) = \\iota(q(y)) > \\iota(N) > M$, and $y \\in (a,b)$: the values of $h$ on $(a,b)$ exceed every real, so $h$ is unbounded on $(a,b)$, and hence on every set containing it. [step 2.1, step 3.1, step 4.1, L3] ∎",
      "step": "5.1",
      "inputs": [
        "2.1",
        "3.1",
        "4.1",
        "L3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement forms no empty set, empty family, or empty finite sum whose value affects the claim."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: the zero-valued or zero-index boundary is handled explicitly, or is included without division by it."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: the unit or first-index boundary is included explicitly in the stated construction."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement: interval degeneracy is either excluded by a strict endpoint hypothesis or included by the stated weak endpoint convention."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1: domain endpoints and any one-sided interpretation are kept within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof selects no witness from a varying asserted nonempty family."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Statement and steps 1.1-5.1: the numbered proof explicitly establishes the stated forward implication as part of the biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Statement and steps 1.1-5.1: the numbered proof explicitly establishes the converse implication as part of the biconditional."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-dirichlet-and-thomae-functions",
    "declared_target": "def-dirichlet-and-thomae-functions",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-q-and-irrationals-dense-r",
    "declared_target": "lem-q-and-irrationals-dense-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-of-archimedean",
    "declared_target": "thm-of-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-oscillation",
    "declared_target": "def-oscillation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-integer-part",
    "declared_target": "lem-integer-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
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
    "source": "ex-locally-unbounded-finite-everywhere",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (15)

### `cor-archimedean-reciprocal`

````markdown
---
id: cor-archimedean-reciprocal
kind: corollary
title: "For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-of-archimedean, lem-of-inverse-positive, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.20(a) and its corollaries)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4 (Prop. 5.4.12, the Archimedean property)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let
$\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number
$n \ge 1$ such that

$$\frac{1}{n \cdot 1_F} < \varepsilon ,$$

where $n \cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and
$1/(n \cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard
we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$.

This is the **reciprocal form** of the Archimedean property.
[[thm-of-archimedean]] on its own delivers only the assertion that the canonical
naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that
the reciprocals of the naturals get below every positive bound, is the statement
above, and it is recorded separately so that no proof has to reconstruct the
inversion step in passing.

## Facts & Assumptions

**Given:** A complete ordered field $F$ and an element $\varepsilon \in F$ with $\varepsilon > 0$.

[L1] Archimedean property: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L2] Inverses and order: if $a > 0$ then $a^{-1} > 0$, and if $0 < a < b$ then $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L3] Field arithmetic: an element $a$ with $a > 0$ is nonzero by trichotomy, hence has a multiplicative inverse $a^{-1}$, and $(a^{-1})^{-1} = a$ ([[def-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $\varepsilon > 0$, trichotomy gives $\varepsilon \ne 0$, so $\varepsilon^{-1}$ exists, and $\varepsilon^{-1} > 0$. [given, L2, L3]

2.1 Apply [L1] to $x = \varepsilon^{-1}$: fix a natural number $n \ge 1$ with $\varepsilon^{-1} < n \cdot 1_F$. [step 1.1, L1, choose]

3.1 Chaining the two displayed inequalities gives $0 < \varepsilon^{-1} < n \cdot 1_F$; in particular $n \cdot 1_F > 0$, so $n \cdot 1_F \ne 0$ and $1/(n \cdot 1_F)$ is defined. [step 1.1, step 2.1, L3]

4.1 Apply the second claim of [L2] with $a = \varepsilon^{-1}$ and $b = n \cdot 1_F$: $0 < (n \cdot 1_F)^{-1} < (\varepsilon^{-1})^{-1}$. [step 3.1, L2]

5.1 By [L3], $(\varepsilon^{-1})^{-1} = \varepsilon$, so the natural number $n \ge 1$ fixed in step 2.1 satisfies $1/(n \cdot 1_F) < \varepsilon$, which is the assertion. [step 4.1, L3] ∎

## Remarks

- **Monotonicity gives the eventual form for free.** If $m \ge n \ge 1$ then
  $m \cdot 1_F \ge n \cdot 1_F > 0$, because $k \mapsto k \cdot 1_F$ is strictly
  increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]), and so
  $1/(m \cdot 1_F) \le 1/(n \cdot 1_F) < \varepsilon$ by [[lem-of-inverse-positive]]
  again. So the corollary yields not merely one index but a threshold: every
  $m \ge n$ satisfies $1/m < \varepsilon$. That one extra line is what a
  convergence proof needs, and it is left to the caller rather than folded into
  the statement, because the caller usually has a threshold of its own to combine
  it with.

- **Completeness is used only through [[thm-of-archimedean]].** Nothing here
  needs the least-upper-bound property directly. The corollary therefore holds
  verbatim in any Archimedean ordered field, in particular in $\mathbb{Q}$, and
  it fails in a non-Archimedean ordered field, where an infinitesimal
  $\varepsilon > 0$ is below every $1/n$ by construction.

- The equivalence is exact: the reciprocal form implies the cofinal form back
  again, since given $x > 0$ one applies it to $\varepsilon = 1/x$. The two are
  the same property written on the two sides of the inversion, and only the
  direction proved above is used in this library.
````

### `def-bounded-set`

````markdown
---
id: def-bounded-set
kind: definition
title: "Lower bound, bounded below, bounded set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-field]
justified_by: []
aliases: []
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
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

## Remarks

- A bound is an element of $\mathbb{R}$ and is not required to lie in $S$. A
  bound that does lie in $S$ is a maximum or a minimum ([[def-max-min]]), and
  that is a strictly stronger condition ([[fs-sup-belongs-to-set]]).
- Bounds come in half-lines: if $\ell$ is a lower bound of $S$ then so is every
  $\ell'' \le \ell$, and if $u$ is an upper bound then so is every $u'' \ge u$.
  Consequently a set that has one bound of a given kind has infinitely many, and
  the interesting question is whether the collection of them has a best element,
  which is what a supremum ([[def-complete-ordered-field]]) or an infimum
  ([[def-infimum]]) is.
- Bounded above and bounded below are independent conditions. The set
  $A = \{\, n \cdot 1_{\mathbb{R}} : n \ge 1 \,\}$ of canonical naturals of
  $\mathbb{R}$ is bounded below by $0$ ([[lem-of-naturals-positive]]) and is not
  bounded above ([[thm-of-archimedean]]); its reflection $-A$ is bounded above
  and not bounded below ([[lem-reflection]]).
- The empty set is bounded, and vacuously so: every real number is both an upper
  bound and a lower bound of $\emptyset$, since the defining condition quantifies
  over no elements. Having bounds is therefore much weaker than having a least
  upper bound or a greatest lower bound ([[fs-every-set-has-sup]]).
````

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
````

### `def-complete-ordered-field`

````markdown
---
id: def-complete-ordered-field
kind: definition
title: "Complete ordered field (least-upper-bound property)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: [def-dedekind-complete-field]
landmark: true
short: "complete ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

## Remarks

- A least upper bound, if it exists, is unique (two least upper bounds are each
  $\le$ the other, so equal by antisymmetry of the order).
- Applying the property to $\{-s : s \in S\}$ yields the dual **greatest lower
  bound** (infimum) property, so the two are equivalent.
- The Dedekind-cut reals have this property by construction
  ([[thm-dedekind-complete]]); the Cauchy-sequence reals acquire it via
  [[cor-cauchy-reals-lub-complete]]. This definition is the target for the
  uniqueness theorem [[thm-uniqueness-complete-ordered-field]].
````

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, def-interval, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: [def-continuity-at-a-point-r]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "continuity of a real function"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field with its order and
absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and
neighbourhoods are those of [[def-neighbourhood-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **continuous at $c$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ |x - c| < \delta \ \Longrightarrow\ |f(x) - f(c)| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the **positive reals**. In the
language of neighbourhoods: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with

$$f\bigl(A \cap N_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}\bigl(f(c)\bigr).$$

$f$ is **continuous on $A$** when it is continuous at every point of $A$.

**The point $c$ is required to lie in $A$, and the condition is unpunctured.**
Both differ from [[def-function-limit]], and deliberately. There the quantifier
runs over $0 < |x - c| < \delta$, which removes $x = c$; here $x = c$ is allowed,
and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \varepsilon$, which is
automatic. So allowing $x = c$ costs nothing, and it is what lets the definition
be stated at every point of $A$, including the points where no limit exists.

**Three clauses, and all three are part of the definition.**

1. **At a limit point.** Suppose $c \in A$ is a limit point of $A$
   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the
   limit of $f$ at $c$ exists and
   $$\lim_{x \to c} f(x) \;=\; f(c)$$
   ([[def-function-limit]]). Indeed, for a given $\varepsilon > 0$ a $\delta$
   witnessing continuity witnesses the limit condition, because the limit
   condition quantifies over a subset of the points continuity quantifies over;
   and conversely a $\delta$ witnessing $\lim_{x \to c} f(x) = f(c)$ witnesses
   continuity, because the one point it omits, $x = c$, satisfies
   $|f(c) - f(c)| < \varepsilon$ anyway.

2. **At an isolated point.** Suppose $c \in A$ is an isolated point of $A$
   ([[def-limit-point-r]]), so that $N_{\eta}(c) \cap A = \{c\}$ for some real
   $\eta > 0$. Then **every** $f : A \to \mathbb{R}$ is continuous at $c$: take
   $\delta := \eta$, so that the only $x \in A$ with $|x - c| < \delta$ is $c$
   itself, and $|f(c) - f(c)| = 0 < \varepsilon$.

3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and
   nothing more. It is not a condition relating $f$ to points outside $A$.

Every point of $A$ is either a limit point of $A$ or an isolated point of $A$,
and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe
continuity at every point of $A$.

**This is not the raw $\varepsilon$-$\delta$ formula of
[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes
wrong when the *punctured* formula of [[def-function-limit]] is written down at
an arbitrary point of the domain: at an isolated point it is satisfied
vacuously by every real $L$ at once, so it defines nothing, and this library
therefore leaves $\lim_{x \to c} f(x)$ **undefined** at an isolated point.
Continuity at an isolated point is a different matter: the formula above is not
vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the
only value being compared with itself — and it names a single, well-defined
property. The limit is undefined there; the continuity is defined, and is
automatic. Clause 1 is the only place where the two notions meet, and it is
stated only where the limit exists as a notion.

**Where the distinction disappears.** If $A$ is an open subset of $\mathbb{R}$
([[def-open-and-closed-in-r]]), then every $c \in A$ has some
$N_{\eta}(c) \subseteq A$, and a punctured neighbourhood is never empty
([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and
clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate
interval ([[def-interval]]). Isolated points are what force clause 2 to exist at
all, and they occur as soon as $A$ is allowed to be an arbitrary subset of
$\mathbb{R}$, as in $A = \{0\} \cup [1,2]$.

## Remarks

- **Continuity is local.** If $\eta > 0$ and $g : A \to \mathbb{R}$ agrees with
  $f$ on $A \cap N_{\eta}(c)$, then $f$ is continuous at $c$ if and only if $g$
  is: any $\delta$ may be replaced by $\min\{\delta, \eta\}$, after which the
  condition only ever evaluates the two functions where they agree. So
  continuity at $c$ sees only an arbitrarily small neighbourhood of $c$, exactly
  as the limit does ([[lem-limit-is-local]]).

- **Continuity passes to subsets of the domain.** If $B \subseteq A$ and
  $c \in B$, then continuity of $f$ at $c$ gives continuity of the restriction
  $f|_B$ at $c$, with the same $\delta$: the condition on $f|_B$ quantifies over
  fewer points. The converse fails, and the standard witness is the indicator of
  $\mathbb{Q}$ restricted to $\mathbb{Q}$, which is constant and hence
  continuous, while the indicator itself is continuous nowhere
  ([[cex-dirichlet-is-nowhere-continuous]]).

- **The radius is a real number.** As in [[def-neighbourhood-r]], $\varepsilon$
  and $\delta$ range over the positive reals here. Restricting either quantifier
  to the positive rationals defines the same relation, by the passage recorded
  in [[def-function-limit]]: below every positive real lies a positive rational
  ([[lem-rat-embeds-dense]]), and a real $\delta$ may be shrunk to a rational
  one below it.

- **The word *continuous* is used for two things in this library, and they
  agree.** [[def-metric-continuity]] defines continuity of a map between metric
  spaces, and $A \subseteq \mathbb{R}$ carries the metric $d(x,y) = |x-y|$. The
  two notions coincide, and that is proved, not assumed:
  [[lem-real-and-metric-notions-agree]] is the dictionary, and it is stated on
  this page precisely so that no later item has to guess.
````

### `def-dirichlet-and-thomae-functions`

````markdown
---
id: def-dirichlet-and-thomae-functions
kind: definition
title: "The Dirichlet function $1_{\\mathbb{Q}}$, and Thomae's function $t$ with $t(x) = 1/q$ at a rational $x = p/q$ in lowest terms with $q \\ge 1$ and $t(x) = 0$ at every irrational $x$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
  evidence: exact-source
deps: [lem-coprime-divides-product, lem-rat-embeds-dense, lem-int-embeds-rat, lem-nat-embeds-int, def-coprime, cor-gcd-quotients-coprime, lem-gcd-basic-values, def-common-divisor-and-gcd, thm-well-ordering-principle, def-complete-ordered-field, def-canonical-natural, lem-of-naturals-positive, lem-q-and-irrationals-dense-r]
justified_by: []
aliases: [def-thomae-function, def-dirichlet-function, def-popcorn-function]
landmark: true
short: "Dirichlet and Thomae functions"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq
\mathbb{R}$ denotes the chain of canonical embeddings
([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), and
each set is identified with its image in $\mathbb{R}$, as elsewhere in this
library; for a natural $q$ the real $\iota(q) = q \cdot 1_{\mathbb{R}}$ is the
canonical natural ([[def-canonical-natural]]), and $\iota(q) > 0$ for $q \ge 1$
([[lem-of-naturals-positive]]). A real is **rational** when it lies in
$\mathbb{Q}$ and **irrational** otherwise; both sets are dense in $\mathbb{R}$
([[lem-q-and-irrationals-dense-r]]).

### The Dirichlet function

$$\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}, \qquad \mathbf{1}_{\mathbb{Q}}(x) := \begin{cases} 1 & \text{if } x \in \mathbb{Q},\\ 0 & \text{if } x \notin \mathbb{Q}.\end{cases}$$

This is the indicator of the rationals. It is a function because every real
either lies in $\mathbb{Q}$ or does not, and the two clauses are exclusive.

### The least denominator of a rational

Let $x \in \mathbb{Q}$ and put

$$Q(x) \;:=\; \{\, q \in \mathbb{N} \;:\; q \ge 1 \ \text{ and } \ \iota(q)\,x \in \mathbb{Z} \,\}.$$

**$Q(x)$ is nonempty.** Every rational is $a/b$ with $a \in \mathbb{Z}$ and $b$ a
positive integer ([[lem-int-embeds-rat]]), and a positive integer is $\iota(q)$
for a unique natural $q \ge 1$ ([[lem-nat-embeds-int]]); then
$\iota(q)\,x = a \in \mathbb{Z}$, so $q \in Q(x)$.

By the well-ordering principle ([[thm-well-ordering-principle]]) the nonempty
subset $Q(x) \subseteq \mathbb{N}$ has a least element. Write

$$q(x) \;:=\; \min Q(x) \;\ge\; 1,$$

the **least denominator** of $x$, and $p(x) := \iota(q(x))\,x \in \mathbb{Z}$,
so that

$$x \;=\; \frac{p(x)}{\iota(q(x))} .$$

Nothing is selected here: $q(x)$ is the least element of a set determined by
$x$, so it is a function of $x$ alone.

**The least denominator is the denominator in lowest terms.** The integers
$p(x)$ and $q(x)$ are coprime ([[def-coprime]]). Indeed put
$d := \gcd(p(x), q(x))$, which satisfies $d \ge 1$ because $q(x) \ge 1$ makes the
pair different from $(0,0)$ ([[lem-gcd-basic-values]],
[[def-common-divisor-and-gcd]]). Then $d$ divides $q(x)$, so $q(x)/d$ is a
natural number $\ge 1$, and $\iota(q(x)/d) = \iota(q(x))/d$ because $\iota$
carries products of naturals to products ([[lem-of-naturals-positive]]); hence

$$\iota(q(x)/d)\,x \;=\; \frac{\iota(q(x))\,x}{d} \;=\; \frac{p(x)}{d} \;\in\; \mathbb{Z},$$

so $q(x)/d \in Q(x)$ and therefore $q(x)/d \ge q(x)$, which forces $d = 1$.
**Conversely, a lowest-terms denominator is the least one, so the description is
unambiguous.** Suppose $x = p/\iota(q)$ with $q \ge 1$ a natural, $p \in \mathbb{Z}$
and $\gcd(p,q) = 1$. Then $q \in Q(x)$, so $q_{0} := q(x) \le q$; and from
$p/\iota(q) = p(x)/\iota(q_{0})$ we get $q_{0}p = q\,p(x)$ in $\mathbb{Z}$, so
$q \mid q_{0}p$, and $\gcd(p,q) = 1$ gives $q \mid q_{0}$
([[lem-coprime-divides-product]], claim 1), hence $q \le q_{0}$. So $q = q(x)$:
writing $x = p/q$ "in lowest terms with $q \ge 1$" and taking $q = q(x)$ describe
the same integer, and [[cor-gcd-quotients-coprime]] is what produces such a
representation from an arbitrary one.

### Thomae's function

$$t : \mathbb{R} \to \mathbb{R}, \qquad t(x) := \begin{cases} 1/\iota(q(x)) & \text{if } x \in \mathbb{Q},\\ 0 & \text{if } x \notin \mathbb{Q}.\end{cases}$$

It is also called the **popcorn function** or the **ruler function**. The value
is well defined because $q(x)$ is, and $\iota(q(x)) \ge 1 > 0$ is invertible.

**Boundary values, stated rather than left to the reader.**

- $t(0) = 1$. Indeed $\iota(1)\cdot 0 = 0 \in \mathbb{Z}$, so $1 \in Q(0)$ and
  $q(0) = 1$; the representation is $0 = 0/1$.
- $t(m) = 1$ for every integer $m$, by the same computation with $1 \in Q(m)$.
- $0 < t(x) \le 1$ for every rational $x$, since $\iota(q(x)) \ge 1$; and
  $t(x) = 0$ exactly at the irrationals.

**On the range.** The values of $t$ are $0$ and the reciprocals
$1/\iota(q)$ of the canonical naturals $q \ge 1$; every such value is attained,
$1/\iota(q)$ being the value at the rational $1/\iota(q)$ itself, whose least
denominator is $q$ because $\iota(k)/\iota(q) \in \mathbb{Z}$ with
$1 \le k < q$ would give a positive integer smaller than $1$.
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
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
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

### `def-oscillation`

````markdown
---
id: def-oscillation
kind: definition
title: "The oscillation $\\omega_f(S) = \\sup\\{\\,|f(x) - f(y)| : x, y \\in S\\,\\}$ of $f$ on a set and the oscillation $\\omega_f(c) = \\inf_{\\delta > 0} \\omega_f(A \\cap N_\\delta(c))$ at a point, both taken in the extended reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [def-extended-reals, lem-extended-reals-complete, def-neighbourhood-r, def-bounded-set, def-infimum, lem-of-abs-value, lem-of-triangle-inequality, def-complete-ordered-field]
justified_by: []
aliases: [def-oscillation-at-a-point]
landmark: true
short: "oscillation $\\omega_f$"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Oscillation (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Oscillation_(mathematics)"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. All suprema and
infima below are taken in the extended real line
$\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty, +\infty\}$
([[def-extended-reals]]), where **every** subset has a least upper bound and a
greatest lower bound ([[lem-extended-reals-complete]]); no boundedness
hypothesis on $f$ is therefore needed anywhere, and none is imposed.

**Oscillation on a set.** For $S \subseteq A$ put

$$\omega_f(S) \;:=\; \sup\{\, |f(x) - f(y)| \;:\; x, y \in S \,\} \;\in\; \overline{\mathbb{R}} .$$

**Oscillation at a point.** For $c \in A$ put

$$\omega_f(c) \;:=\; \inf\{\, \omega_f(A \cap N_\delta(c)) \;:\; \delta \in \mathbb{R},\ \delta > 0 \,\} \;\in\; \overline{\mathbb{R}},$$

where $N_\delta(c) = (c - \delta, c + \delta)$ is the $\delta$-neighbourhood of
$c$ ([[def-neighbourhood-r]]).

The two uses of the symbol $\omega_f$ are distinguished by their argument: a
subset of $A$ in the first, a point of $A$ in the second. Where confusion is
possible the first is written $\omega_f(S)$ with $S$ named as a set.

### Both values are well posed; point oscillation and nonempty-set oscillation are nonnegative

**The set in the first display is nonempty whenever $S$ is**, since $x = y \in S$
gives the value $|f(x) - f(x)| = 0$; so $\omega_f(S) \ge 0$ for nonempty $S$,
and $\omega_f(S) = \sup \varnothing = -\infty$ for $S = \varnothing$
([[lem-extended-reals-complete]]). Only nonempty $S$ occurs below.

**The set in the second display is nonempty**, since some real $\delta > 0$
exists, and each of its members is $\ge 0$: for $c \in A$ the set
$A \cap N_\delta(c)$ contains $c$ itself, because $|c - c| = 0 < \delta$, so it
is nonempty and $\omega_f(A \cap N_\delta(c)) \ge 0$
([[lem-of-abs-value]]). Hence $0$ is a lower bound of that set and

$$0 \;\le\; \omega_f(c) \;\le\; \omega_f(A \cap N_\delta(c)) \qquad \text{for every real } \delta > 0,$$

the second inequality because $\omega_f(c)$ is a lower bound of the set of which
$\omega_f(A \cap N_\delta(c))$ is a member. In particular $\omega_f(c)$ is never
$-\infty$.

### Monotonicity, and the case of a bounded $f$

**$\omega_f$ is monotone under inclusion.** If $S \subseteq T \subseteq A$ then
every value $|f(x) - f(y)|$ with $x, y \in S$ is also a value with $x, y \in T$,
so the first set of values is contained in the second and
$\omega_f(S) \le \omega_f(T)$: a supremum of a subset is at most the supremum of
the set. Consequently $\delta \mapsto \omega_f(A \cap N_\delta(c))$ is
nondecreasing in $\delta$, since $\delta \le \delta'$ gives
$N_\delta(c) \subseteq N_{\delta'}(c)$ ([[def-neighbourhood-r]]).

**When $f$ is bounded, nonempty-set and point oscillations are real.** Suppose
there is a real $M$ with $|f(x)| \le M$ for every $x \in A$
([[def-bounded-set]]). Then for $x, y \in A$,

$$|f(x) - f(y)| \;\le\; |f(x)| + |f(y)| \;\le\; 2M$$

([[lem-of-triangle-inequality]], [[lem-of-abs-value]]), so $\omega_f(S) \le 2M$
for every $S \subseteq A$. If
$S$ is nonempty, $\omega_f(S)$ is a real number in $[0,2M]$, and every point
oscillation is also a real number in $[0,2M]$: the supremum of a nonempty
subset of $\mathbb{R}$ that is bounded above in $\mathbb{R}$ is the real
supremum ([[lem-extended-reals-complete]], [[def-complete-ordered-field]],
[[def-infimum]]). The convention $\omega_f(\varnothing)=-\infty$ remains the
single empty-set exception. Apart from that exception, an infinite extended
value can occur only when $f$ is unbounded.

**The notation.** The letter is $\omega$ throughout this library, never
"$\operatorname{osc}$", and the function is always in the subscript.
````

### `lem-integer-part`

````markdown
---
id: lem-integer-part
kind: lemma
title: "Integer part: for every real $x$ there is exactly one integer $m$ with $m \\le x < m + 1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integers, def-natural-numbers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, lem-nat-discrete, thm-int-ordered-ring, thm-int-comm-ring, thm-of-archimedean, thm-well-ordering-principle, thm-induction-principle, lem-of-naturals-positive, lem-of-add-order, lem-of-abs-value, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [lem-floor-function, lem-floor-exists]
landmark: true
short: "integer part (floor)"
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
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Identify $\mathbb{Z}$ with its canonical copy inside $\mathbb{R}$, along the
embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$
([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]],
[[def-integers]]). Then for every real $x$ there is **exactly one** integer $m$
with

$$m \;\le\; x \;<\; m + 1 .$$

It is written $\lfloor x \rfloor$ and called the **integer part**, or **floor**,
of $x$.

**Two independent ingredients are needed and neither may be dropped.** Existence
is the Archimedean property ([[thm-of-archimedean]]) together with the
well-ordering of $\mathbb{N}$ ([[thm-well-ordering-principle]]): the first says
that $x$ is caught between two integers at all, the second picks the *least*
integer above $x$. Uniqueness is the discreteness of $\mathbb{Z}$: no integer
lies strictly between $m$ and $m+1$.

This lemma is stated once here and reused. It is what turns "the nearest integer
to $x$" from a picture into an object, and the companion page's oscillator
$\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ is computed from it in one line.

## Facts & Assumptions

**Given:** A real $x$. Naturals, integers and rationals are identified with their canonical copies in $\mathbb{R}$ along $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$.

[L1] The embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$ are injective and preserve $0$, $1$, addition, multiplication and order ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[def-integers]]); $\mathbb{Z}$ is a totally ordered commutative ring ([[thm-int-ordered-ring]], [[thm-int-comm-ring]]); every integer $\ge 0$ is the image of a unique natural, that map being injective and order preserving ([[lem-nat-embeds-int]]); and a natural $j \ne 0$ satisfies $j \ge 1$ ([[lem-nat-discrete]], [[def-natural-numbers]]).

[L2] The image of a natural $n \ge 1$ under the composite $\mathbb{N} \to \mathbb{R}$ is the canonical natural $n \cdot 1_{\mathbb{R}}$ of [[lem-of-naturals-positive]]. Indeed that composite preserves $1$ and addition by [L1], while $n \cdot 1_{\mathbb{R}}$ is defined by $1 \cdot 1_{\mathbb{R}} = 1_{\mathbb{R}}$ and $(n+1) \cdot 1_{\mathbb{R}} = n \cdot 1_{\mathbb{R}} + 1_{\mathbb{R}}$, so the two agree at $1$ and satisfy the same recursion; induction on $n$ ([[thm-induction-principle]]) gives the identification.

[L3] Archimedean property: for every real $t$ there is a natural $n \ge 1$ with $t < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L4] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] Order arithmetic in $\mathbb{R}$: the order is total, so the negation of $t < u$ is $u \le t$; trichotomy, so $t < u$ and $u \le t$ cannot both hold; translation invariance ([[lem-of-add-order]]); $t \le |t|$ and $-t \le |t|$ ([[lem-of-abs-value]]); and transitivity ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [L3] to the real $|x|$: fix a natural $n \ge 1$ with $|x| < n$. Since $x \le |x|$ and $-x \le |x|$, this gives $-n < x < n$. [L2, L3, L5, choose]

2.1 Put $S := \{\, k \in \mathbb{N} \ : \ x < k - n \,\}$, where $k - n$ is formed in $\mathbb{Z}$ and read in $\mathbb{R}$ through [L1]. It is a subset of $\mathbb{N}$, and it is nonempty: the natural $2n$ satisfies $2n - n = n > x$ by step 1.1, so $2n \in S$. [step 1.1, L1, L2, construct]

3.1 By the well-ordering principle [L4] let $k_0$ be the least element of $S$. [step 2.1, L4, choose]

4.1 The index $k_0$ is not $0$: for $k = 0$ the defining condition reads $x < 0 - n = -n$, which trichotomy excludes since $-n < x$ by step 1.1. Hence $k_0 \ne 0$, so $k_0 \ge 1$ by [L1], and $k_0 - 1$ is again a natural number. [step 1.1, step 3.1, L1, L5]

5.1 Set $m := (k_0 - 1) - n$, an integer. Since $k_0 - 1 < k_0$ and $k_0$ is the least element of $S$, the natural $k_0 - 1$ does not lie in $S$, that is, $x < (k_0 - 1) - n$ fails; the order being total, $m = (k_0 - 1) - n \le x$. [step 3.1, step 4.1, L1, L5, construct]

6.1 On the other hand $k_0 \in S$ gives $x < k_0 - n = \bigl((k_0 - 1) - n\bigr) + 1 = m + 1$. So $m \le x < m + 1$, and existence is proved. [step 3.1, step 5.1, L1, L5]

7.1 Uniqueness: suppose an integer $m'$ also satisfies $m' \le x < m' + 1$ and $m' \ne m$. The order of $\mathbb{Z}$ being total, one of $m < m'$ and $m' < m$ holds, and the two cases are the same with the roles of $m$ and $m'$ exchanged; so assume $m < m'$. Then $m' - m$ is an integer $> 0$, hence by [L1] the image of a natural $j \ne 0$, so $j \ge 1$ and $m' - m \ge 1$, that is $m + 1 \le m'$. But then $x < m + 1 \le m' \le x$, which trichotomy forbids. Hence $m' = m$. [step 6.1, L1, L5]

8.1 Therefore exactly one integer $m$ satisfies $m \le x < m + 1$, and we write $m = \lfloor x \rfloor$. [step 6.1, step 7.1, discharge-construct] ∎

## Remarks

- **What the two halves of the proof really use.** Step 1.1 is the only use of the Archimedean property, and it is indispensable: in a non-Archimedean ordered field ([[cex-ordered-field-not-archimedean]]) an element larger than every canonical natural has no integer part at all, since the set $S$ of step 2.1 would be empty. Step 3.1 is the only use of the well-ordering principle, and it is what makes the construction canonical: no choice is made anywhere, and $\lfloor x \rfloor$ is a function of $x$.

- **Immediate consequences, used later.** From $m \le x < m + 1$ one reads off $0 \le x - m < 1$ and $0 < (m+1) - x \le 1$; and $\lfloor x \rfloor = x$ exactly when $x$ is an integer, since an integer $m$ satisfies $m \le m < m + 1$ and uniqueness does the rest. The translation identity $\lfloor x + p \rfloor = \lfloor x \rfloor + p$ for an integer $p$ follows the same way: adding $p$ to $m \le x < m+1$ gives $m + p \le x + p < (m + p) + 1$, and uniqueness identifies $m + p$ as the integer part of $x + p$.

- **The ceiling is not defined here** and is not needed on this page; it would be the least integer $\ge x$, obtained from the same set $S$ without the shift by one.
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

### `lem-of-naturals-positive`

````markdown
---
id: lem-of-naturals-positive
kind: lemma
title: "Canonical naturals are positive and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-of-one-positive, lem-of-add-order, def-field]
aliases: []
landmark: false
short: "n·1 > 0"
proof_strategy: induction
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
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

## Facts & Assumptions

**Given:** An ordered field $F$ whose canonical naturals are defined recursively by $1 \cdot 1_F = 1_F$ and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, with $0 \cdot 1_F = 0$.

[L1] $0 < 1_F$ in every ordered field ([[cor-of-one-positive]]).

[L2] The order is compatible with addition and positives are closed under addition: $a < b$ implies $a + c < b + c$, and $a > 0$, $b > 0$ imply $a + b > 0$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 1$: by definition $1 \cdot 1_F = 1_F$, and $1_F > 0$. [L1, base]

1.2 Inductive hypothesis: assume $n \cdot 1_F > 0$ for some fixed $n \ge 1$. [ih]

1.3 By the recursion, $(n+1) \cdot 1_F - n \cdot 1_F = 1_F > 0$, so $(n+1) \cdot 1_F > n \cdot 1_F$. [given, L1]

1.4 Additive identity: fix $m$ and induct on $n$; at $n = 1$, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F$ by the recursion, and if $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ then $(m+n+1) \cdot 1_F = (m+n) \cdot 1_F + 1_F = m \cdot 1_F + n \cdot 1_F + 1_F = m \cdot 1_F + (n+1) \cdot 1_F$. [given, algebra]

2.1 Inductive step: $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$ is a sum of two positives, by the hypothesis and $1_F > 0$, hence $(n+1) \cdot 1_F > 0$. [step 1.2, L1, L2]

2.2 Iterating 1.3, for $m < n$ one has $m \cdot 1_F < n \cdot 1_F$, so $n \mapsto n \cdot 1_F$ is strictly increasing and therefore injective on $\{1, 2, 3, \dots\}$. [step 1.3, L2]

2.3 Multiplicative identity: fix $m$ and induct on $n$; at $n = 1$, $(m \cdot 1) \cdot 1_F = m \cdot 1_F = (m \cdot 1_F)(1 \cdot 1_F)$, and the step $(m(n+1)) \cdot 1_F = (mn + m) \cdot 1_F = (mn) \cdot 1_F + m \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F) + (m \cdot 1_F)(1_F) = (m \cdot 1_F)((n+1) \cdot 1_F)$ uses 1.4 and distributivity. [step 1.4, algebra]

3.1 By induction on 1.1, 1.2, 2.1, $n \cdot 1_F > 0$ for every $n \ge 1$; with the strict increase 2.2 and the identities 1.4, 2.3, every claim holds. [step 2.1, step 2.2, step 1.4, step 2.3, discharge-induction] ∎
````

### `lem-q-and-irrationals-dense-r`

````markdown
---
id: lem-q-and-irrationals-dense-r
kind: lemma
title: "Both $\\mathbb{Q}$ and $\\mathbb{R} \\setminus \\mathbb{Q}$ are dense in $\\mathbb{R}$, and every nonempty open subset of $\\mathbb{R}$ is uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-rat-embeds-dense, def-limit-point-r, def-open-and-closed-in-r, def-interval, def-neighbourhood-r, thm-closure-characterisations-r, cor-interval-uncountable, lem-subset-of-countable, def-countable, thm-rationals-countable, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
forward_refs: [ex-closure-interior-boundary-of-q]
aliases: []
landmark: false
short: "$\\mathbb{Q}$ and its complement are dense"
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
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$
under the canonical embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), the
set usually written $\mathbb{Q}$ once the identification is made, and put
$X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$, that is,
   $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$ ([[def-limit-point-r]]);
2. $X$ is dense in $\mathbb{R}$;
3. every nonempty open subset of $\mathbb{R}$ is uncountable
   ([[def-countable]]).

Claim 2 is not a symmetry of claim 1: the rationals are dense because they are
*constructed* to approximate, whereas the irrationals are dense because there are
too many points in any interval for a countable set to exhaust it, which is why
claim 3 is proved alongside and used for it.

## Facts & Assumptions

**Given:** The canonical embedding $q \mapsto \hat q$ of $\mathbb{Q}$ into $\mathbb{R}$, its image $\mathbb{Q}_{\mathbb{R}}$, and the complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[L1] $\overline{A}$ is the set of points every neighbourhood of which meets $A$; $A$ is dense in $\mathbb{R}$ when $\overline{A} = \mathbb{R}$ ([[thm-closure-characterisations-r]], [[def-limit-point-r]]).

[L2] $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$ for real $\varepsilon > 0$, and $x - \varepsilon < x + \varepsilon$ ([[def-neighbourhood-r]], [[def-interval]]).

[L3] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$ ([[def-open-and-closed-in-r]]).

[L4] Strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$, and $q \mapsto \hat q$ is injective ([[lem-rat-embeds-dense]]).

[L5] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); an injection is a bijection onto its image, and $\approx$ is symmetric and transitive ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L6] Every subset of an at most countable set is at most countable, and uncountable means not at most countable ([[lem-subset-of-countable]], [[def-countable]]).

[L7] For $a < b$ the interval $(a,b)$ is uncountable ([[cor-interval-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 $\mathbb{Q}_{\mathbb{R}}$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; by [L2] one has $x - \varepsilon < x + \varepsilon$, so [L4] supplies $\hat q$ with $x - \varepsilon < \hat q < x + \varepsilon$, that is $\hat q \in N_\varepsilon(x) \cap \mathbb{Q}_{\mathbb{R}}$. Every real is therefore an adherent point of $\mathbb{Q}_{\mathbb{R}}$ and claim 1 follows from [L1]. [L1, L2, L4]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is at most countable: the embedding is an injection of $\mathbb{Q}$ with image $\mathbb{Q}_{\mathbb{R}}$, hence a bijection onto it, so $\mathbb{Q}_{\mathbb{R}} \approx \mathbb{Q} \approx \mathbb{N}$. [L4, L5]

1.3 For all reals $a < b$ the interval $(a,b)$ is uncountable. [L7]

2.1 For all reals $a < b$ the interval $(a,b)$ contains an irrational: if it did not, then $(a,b) \subseteq \mathbb{Q}_{\mathbb{R}}$, so $(a,b)$ would be a subset of an at most countable set by step 1.2 and hence at most countable by [L6], contradicting step 1.3. So some $z \in (a,b)$ lies in $X$. [step 1.2, step 1.3, L6]

2.2 Every nonempty open $U \subseteq \mathbb{R}$ is uncountable: fix $x \in U$ and, by [L3], a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; by [L2] the set $N_\varepsilon(x)$ is the interval $(x - \varepsilon, x + \varepsilon)$ with $x - \varepsilon < x + \varepsilon$, hence uncountable by step 1.3. Were $U$ at most countable, its subset $N_\varepsilon(x)$ would be at most countable by [L6], which it is not; so $U$ is uncountable, which is claim 3. [step 1.3, L2, L3, L6, choose]

3.1 $X$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; applying step 2.1 with $a = x - \varepsilon$ and $b = x + \varepsilon$ gives $z \in (x - \varepsilon, x + \varepsilon) \cap X$, which is $N_\varepsilon(x) \cap X$ by [L2]. Every real is therefore an adherent point of $X$, so $\overline{X} = \mathbb{R}$ by [L1], which is claim 2. [step 2.1, L1, L2]

4.1 Claims 1, 2 and 3 are steps 1.1, 3.1 and 2.2, so both $\mathbb{Q}_{\mathbb{R}}$ and its complement are dense in $\mathbb{R}$ and every nonempty open subset of $\mathbb{R}$ is uncountable. [step 1.1, step 2.2, step 3.1] ∎

## Remarks

- **Two dense sets can be disjoint.** $\mathbb{Q}_{\mathbb{R}}$ and $X$ partition
  $\mathbb{R}$ and both are dense, so density says nothing about size: one of
  them is countable and the other is not
  ([[cor-irrationals-uncountable]]). What density does say is that neither has
  interior: a set whose complement is dense has empty interior, which is the
  computation carried out for $\mathbb{Q}$ in
  [[ex-closure-interior-boundary-of-q]].

- **Claim 3 is a statement about open sets, not about intervals.** It follows
  from the uncountability of intervals ([[cor-interval-uncountable]]) only
  because openness supplies an interval inside the set at each of its points.
  A nonempty set with empty interior can perfectly well be countable, as
  $\mathbb{Q}_{\mathbb{R}}$ shows.

- **An explicit irrational is not produced here.** Step 2.1 is a counting
  argument and exhibits nothing. The library does exhibit one separately,
  $\sqrt 2$ ([[thm-of-square-roots]], [[fs-sqrt2-rational]]), and an explicit
  irrational in a given interval $(a,b)$ can be built from it as
  $q_1 + (q_2 - q_1)/\sqrt 2$ for suitable rationals $q_1 < q_2$ in the
  interval; that route is longer and is not the one taken above.
````

### `lem-rat-embeds-dense`

````markdown
---
id: lem-rat-embeds-dense
kind: lemma
title: "The rationals embed densely in the reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-numbers, def-real-order, thm-reals-ordered-field, thm-reals-field, def-rational-cauchy-sequence, thm-rat-ordered-field, thm-rat-field]
aliases: []
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
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## Facts & Assumptions

**Given:** A real $x = [(a_n)]$ and a rational $\varepsilon > 0$.

[L1] The orders of $\mathbb{Q}$ and $\mathbb{R}$; ordered-field arithmetic ([[thm-rat-ordered-field]], [[thm-reals-ordered-field]]).

[L2] Field arithmetic in $\mathbb{Q}$: $\varepsilon/2, \delta/4$ are positive rationals, and every nonzero rational $q$ has a reciprocal $1/q$ with $q \cdot (1/q) = 1$ ([[thm-rat-field]]).

[L3] Cauchy definition ([[def-rational-cauchy-sequence]]).

[L4] Real positivity via eventual rational lower bounds ([[def-real-order]]).

[L5] $\mathbb{R} = \mathcal{C}/\mathcal{N}$ is a field ([[thm-reals-field]]), and $0_{\mathbb{R}} = \hat 0$, $1_{\mathbb{R}} = \hat 1$ are the classes of the constant sequences ([[def-real-numbers]]). A multiplicative inverse there is unique: if $ab = 1_{\mathbb{R}} = ac$ then $b = b(ac) = (ba)c = c$.

## Proof

**Proof technique:** direct.

1.1 Embedding: constant sequences are Cauchy; $\hat q = \hat r$ iff the constant $q - r$ is null iff $q = r$; operations match termwise; and $q < r$ gives the constant lower bound $r - q > 0$, so $\hat q < \hat r$ and order is preserved and reflected. [L1, L4]

1.2 Fix $N$ with $|a_m - a_n| < \varepsilon/2$ for all $m, n \ge N$, and set $q = a_N$. [L3, L2]

2.1 The difference $\hat q - x$ has representative $(a_N - a_n)$ with $|a_N - a_n| < \varepsilon/2$ for $n \ge N$; hence both $\hat\varepsilon - (x - \hat q)$ and $\hat\varepsilon - (\hat q - x)$ have representatives eventually $> \varepsilon/2$, so both are positive: $|x - \hat q| < \hat\varepsilon$. [step 1.2, L4, L1]

2.2 Inverses: let $q$ be a nonzero rational. Then $\hat q \ne \hat 0 = 0_{\mathbb{R}}$ by the injectivity of step 1.1, and $1/q$ exists in $\mathbb{Q}$ by [L2]; since the operations match termwise (step 1.1), $\hat q \cdot \widehat{1/q} = \widehat{q \cdot (1/q)} = \hat 1 = 1_{\mathbb{R}}$. Inverses in $\mathbb{R}$ are unique by [L5], so $(\hat q)^{-1} = \widehat{1/q}$: the embedding preserves reciprocals. [step 1.1, L2, L5]

3.1 Density: let $x < y$; pick $\delta > 0$ rational and $N$ with the representative of $y - x$ eventually $> \delta$; set $\varepsilon = \delta/4$ and pick $q$ with $|x - \hat q| < \hat\varepsilon$; then $q' = q + 2\varepsilon$ satisfies $\hat q' - x \ge -\hat\varepsilon + 2\hat\varepsilon = \hat\varepsilon > 0$ and $y - \hat q' \ge \hat\delta - \hat\varepsilon - 2\hat\varepsilon = \hat\delta/4 > 0$, so $x < \hat q' < y$. [step 2.1, L4, L1, L2]

4.1 The rationals embed as an ordered subfield — injectively, preserving the order in both directions, the ring operations, and reciprocals — and they approximate every real arbitrarily well and separate any two reals. [step 1.1, step 2.2, step 3.1] ∎
````

### `thm-dirichlet-and-thomae-continuity-sets`

````markdown
---
id: thm-dirichlet-and-thomae-continuity-sets
kind: theorem
title: "The Dirichlet function is continuous at no point of $\\mathbb{R}$, and Thomae's function is continuous at every irrational and at no rational, so its set of continuity points is exactly the set of irrationals and its oscillation at $c$ equals $t(c)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-dirichlet-and-thomae-functions, def-continuity-real, lem-q-and-irrationals-dense-r, def-oscillation, thm-continuity-iff-oscillation-zero, cor-archimedean-reciprocal, lem-integer-part, def-canonical-natural, lem-of-naturals-positive, lem-finite-set-has-max, def-max-min, lem-of-abs-value, def-neighbourhood-r, thm-closure-characterisations-r, lem-rat-embeds-dense, def-extended-reals, lem-extended-reals-complete]
justified_by: []
aliases: [thm-thomae-continuity-set]
landmark: true
short: "Thomae is continuous exactly at the irrationals"
proof_strategy: cases
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
pipeline_run: null
---

## Statement

Let $\mathbf{1}_{\mathbb{Q}}$ and $t$ be the Dirichlet and Thomae functions
([[def-dirichlet-and-thomae-functions]]), and write $q(x)$ for the least
denominator of a rational $x$, so that $t(x) = 1/\iota(q(x))$ there and
$t(x) = 0$ at every irrational $x$. Then:

1. $\mathbf{1}_{\mathbb{Q}}$ is continuous at **no** point of $\mathbb{R}$
   ([[def-continuity-real]]);
2. $\omega_{t}(c) = t(c)$ for **every** real $c$ ([[def-oscillation]]);
3. $t$ is continuous at every irrational and discontinuous at every rational, so
   its set of continuity points is exactly $\mathbb{R} \setminus \mathbb{Q}$.

**Claim 1 restates, on this page, what
[[cex-dirichlet-is-nowhere-continuous]] already proves.** That item is homed on
the examples page of *Continuity, the intermediate and extreme value theorems,
and uniform continuity*, and an examples page is a leaf of this library: nothing
outside it may depend on an item that lives there. The claim is needed here, and
on later pages, as a citable statement, so it is proved again rather than
quoted. The two statements are the same statement, and neither is stronger than
the other; the proof below is the same argument, and no originality is claimed
for it. This is the pattern
[[ex-distance-to-the-integers-is-1-lipschitz]] follows.

## Facts & Assumptions

**Given:** The Dirichlet function $\mathbf{1}_{\mathbb{Q}}$ and Thomae's function $t$, and a real $c$; $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}$ are the canonical copies and $\iota(q) = q \cdot 1_{\mathbb{R}}$.

[A1] $\mathbf{1}_{\mathbb{Q}}(x) = 1$ for $x \in \mathbb{Q}$ and $0$ otherwise; $t(x) = 1/\iota(q(x)) \in (0,1]$ for $x \in \mathbb{Q}$ and $t(x) = 0$ otherwise, where $q(x) = \min\{q \ge 1 : \iota(q)x \in \mathbb{Z}\}$ ([[def-dirichlet-and-thomae-functions]]).

[L1] Both $\mathbb{Q}$ and $\mathbb{R} \setminus \mathbb{Q}$ are dense in $\mathbb{R}$, so every $N_\delta(y)$ contains a rational and an irrational ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]], [[lem-rat-embeds-dense]]).

[L2] For every real $x$ there is exactly one integer $m$ with $m \le x < m+1$, written $\lfloor x \rfloor$ ([[lem-integer-part]]); consequently no integer lies strictly between two consecutive integers.

[L3] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$; and $\iota$ is positive and strictly increasing on the naturals $\ge 1$, so $1 \le q \le N$ gives $\iota(q) \le \iota(N)$ and $1/\iota(N) \le 1/\iota(q)$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] A nonempty finite set of reals presented as $\{a_{0}, \dots, a_{n}\}$ has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] $\omega_{f}(S) = \sup\{|f(x)-f(y)| : x,y \in S\}$ and $\omega_{f}(c) = \inf\{\omega_{f}(N_\delta(c)) : \delta > 0\}$ for $f$ defined on all of $\mathbb{R}$, both computed in $\overline{\mathbb{R}}$, where every set has a supremum and an infimum; $f$ is continuous at $c$ if and only if $\omega_{f}(c) = 0$ ([[def-oscillation]], [[def-extended-reals]], [[lem-extended-reals-complete]], [[thm-continuity-iff-oscillation-zero]]).

[L6] $|u| \ge 0$, $|u - v| \le |u| + |v|$, and if $0 \le u \le M$ and $0 \le v \le M$ then $|u - v| \le M$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** cases.

1.1 Claim 1. Let $c$ be real and let $\delta > 0$ be real. The neighbourhood $N_\delta(c)$ contains a rational $u$ and an irrational $v$, and $\mathbf{1}_{\mathbb{Q}}(u) - \mathbf{1}_{\mathbb{Q}}(v) = 1 - 0 = 1$; since $\mathbf{1}_{\mathbb{Q}}(c)$ is $0$ or $1$, one of $|\mathbf{1}_{\mathbb{Q}}(u) - \mathbf{1}_{\mathbb{Q}}(c)|$ and $|\mathbf{1}_{\mathbb{Q}}(v) - \mathbf{1}_{\mathbb{Q}}(c)|$ equals $1$. So the continuity condition at $c$ fails for $\varepsilon = 1$, no $\delta$ witnessing it, and $\mathbf{1}_{\mathbb{Q}}$ is continuous at no point. [A1, L1]

1.2 **A separation estimate.** For a real $c$ and a natural $q \ge 1$ put $m := \lfloor \iota(q)c \rfloor$ and define $d_{q}(c) := 1/\iota(q)$ if $\iota(q)c = m$, and $d_{q}(c) := \min\{\iota(q)c - m,\ m + 1 - \iota(q)c\}/\iota(q)$ otherwise. In both cases $d_{q}(c) > 0$. [L2, L3, construct]

1.3 **A lower bound.** For every real $\delta > 0$ the neighbourhood $N_\delta(c)$ contains an irrational $v$, and $c \in N_\delta(c)$, so $\omega_{t}(N_\delta(c)) \ge |t(c) - t(v)| = t(c)$; taking the infimum over $\delta$ gives $\omega_{t}(c) \ge t(c)$. [A1, L1, L5]

2.1 With $d_{q}(c)$ as in step 1.2: for every integer $p$ with $p/\iota(q) \ne c$ one has $|c - p/\iota(q)| \ge d_{q}(c)$. If $\iota(q)c = m$ then $p \ne m$, so $|\iota(q)c - p| = |m - p| \ge 1$; otherwise $m < \iota(q)c < m+1$, and $p \le m$ gives $\iota(q)c - p \ge \iota(q)c - m$ while $p \ge m+1$ gives $p - \iota(q)c \ge m+1-\iota(q)c$. Dividing by $\iota(q) > 0$ gives the claim. [step 1.2, L2, L3]

2.2 For a real $c$ and a natural $N \ge 1$ put $\delta_{N}(c) := \min\{d_{1}(c), \dots, d_{N}(c)\}$, the minimum of a nonempty finite set of positive reals, so $\delta_{N}(c) > 0$. [step 1.2, L4, construct]

3.1 If $x$ is rational with $0 < |x - c| < \delta_{N}(c)$ then $q(x) > N$ and hence $t(x) < 1/\iota(N)$. Indeed $x = p/\iota(q)$ with $q := q(x)$ and $p := \iota(q)x$; if $q \le N$ then $p/\iota(q) = x \ne c$, so step 2.1 gives $|c - x| \ge d_{q}(c) \ge \delta_{N}(c)$, contrary to the hypothesis. So $q(x) > N$, and $t(x) = 1/\iota(q(x)) < 1/\iota(N)$ because $\iota$ is strictly increasing. [step 2.1, step 2.2, A1, L3]

4.1 **An upper bound for $t$ near $c$.** Let $\varepsilon > 0$ be real, take $N \ge 1$ with $1/\iota(N) < \varepsilon$ and put $\delta := \delta_{N}(c)$. Every $x \in N_\delta(c)$ satisfies $0 \le t(x) \le M$ where $M := \max\{t(c), \varepsilon\}$: for $x = c$ this is $t(c) \le M$; for $x \ne c$ rational it is $t(x) < 1/\iota(N) < \varepsilon \le M$ by step 3.1; and for $x$ irrational it is $t(x) = 0$. [step 3.1, A1, L3, L6]

5.1 Hence $\omega_{t}(N_\delta(c)) \le M$ with $\delta$ and $M$ as in step 4.1, since $|t(x) - t(y)| \le M$ for all $x, y \in N_\delta(c)$, so $M$ is an upper bound of the set whose supremum $\omega_{t}(N_\delta(c))$ is; and therefore $\omega_{t}(c) \le M = \max\{t(c), \varepsilon\}$. [step 4.1, L5, L6]

6.1 Claim 2 now follows in the two cases of the value $t(c)$, which are exactly the two cases of the position of $c$. If $c$ is rational then $t(c) > 0$, and applying step 5.1 with the admissible choice $\varepsilon := t(c)$ gives $\omega_{t}(c) \le \max\{t(c), t(c)\} = t(c)$; with step 1.3 this gives $\omega_{t}(c) = t(c)$. [step 5.1, step 1.3, A1, assume-case rat]

6.2 If $c$ is irrational then $t(c) = 0$, and step 5.1 gives $\omega_{t}(c) \le \max\{0, \varepsilon\} = \varepsilon$ for every real $\varepsilon > 0$; since also $\omega_{t}(c) \ge 0$, an extended real that is $\le \varepsilon$ for every positive real $\varepsilon$ and $\ge 0$ must be $0$, so $\omega_{t}(c) = 0 = t(c)$. [step 5.1, step 1.3, A1, L5, assume-case irr]

7.1 Every real is rational or irrational and not both, so steps 6.1 and 6.2 establish claim 2 for every real $c$. [step 6.1, step 6.2, cases-exhaustive]

8.1 Claim 3 follows from claim 2: $t$ is continuous at $c$ exactly when $\omega_{t}(c) = 0$, that is exactly when $t(c) = 0$, that is exactly when $c$ is irrational. So the continuity set of $t$ is $\mathbb{R} \setminus \mathbb{Q}$ and its discontinuity set is $\mathbb{Q}$. [step 7.1, A1, L5] ∎

## Remarks

- **What claim 2 adds beyond claim 3.** Continuity at a point is the vanishing of the oscillation there, so claim 3 is the special case of claim 2 recording where the value is $0$. The value itself is used on the companion page, where the oscillation of $t$ is computed at particular points, and it shows that the failure of continuity at a rational is exactly as large as the value of $t$ there: small denominators are the bad points.

- **The continuity set of $t$ is $G_\delta$, as it must be.** The irrationals form a $G_\delta$ set ([[cor-q-is-meager-and-not-g-delta]]), in agreement with [[thm-discontinuity-set-is-f-sigma]]. The reverse arrangement is impossible: no function is continuous at every rational and discontinuous at every irrational, because $\mathbb{Q}$ is not $G_\delta$ ([[cor-no-function-is-continuous-exactly-on-q]]).

- **No choice principle is spent.** The separation estimate of step 1.2 is written down from $\lfloor \iota(q)c \rfloor$, the minimum of step 2.1 is the minimum of an explicitly listed finite set, and the least denominator $q(x)$ is a least element. Density supplies points, and it is used only in the form "every neighbourhood meets the set", never to build a sequence.
````

### `thm-of-archimedean`

````markdown
---
id: thm-of-archimedean
kind: theorem
title: "Every complete ordered field is Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-naturals-positive, cor-of-one-positive, def-ordered-field]
aliases: []
landmark: true
short: "complete ⇒ Archimedean"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Neil Donaldson, Math 140A notes: Completeness and the Archimedean property"
      url: "https://www.math.uci.edu/~ndonalds/math140a/1complete.html"
pipeline_run: null
---

## Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

## Facts & Assumptions

**Given:** A complete ordered field $F$; write $A = \{\, n \cdot 1_F : n \ge 1 \,\}$ for the set of its canonical naturals.

[L1] Least-upper-bound property: every nonempty $S \subseteq F$ that is bounded above has a least upper bound $\sup S \in F$ ([[def-complete-ordered-field]]).

[L2] Each canonical natural satisfies $n \cdot 1_F > 0$, one has $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, and $(n+1) \cdot 1_F > n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L3] $0 < 1_F$ ([[cor-of-one-positive]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $F$ is not Archimedean: there is some $x \in F$ with $n \cdot 1_F \le x$ for all $n \ge 1$, that is, $x$ is an upper bound of $A$. [assume-contra]

2.1 The set $A$ is nonempty, since $1 \cdot 1_F = 1_F \in A$, and it is bounded above by $x$. [step 1.1, L2]

3.1 By the least-upper-bound property, $A$ has a least upper bound $s = \sup A \in F$. [step 2.1, L1]

4.1 Since $1_F > 0$, we have $s - 1_F < s$; as $s$ is the least upper bound, $s - 1_F$ is not an upper bound of $A$. [step 3.1, L3]

5.1 Hence there is some $m \ge 1$ with $m \cdot 1_F > s - 1_F$. [step 4.1]

6.1 Adding $1_F$ to both sides, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F > s$. [step 5.1, L2]

7.1 But $(m+1) \cdot 1_F \in A$, so $(m+1) \cdot 1_F \le s$ because $s$ is an upper bound of $A$, contradicting 6.1. [step 6.1, step 3.1, L2]

8.1 The assumption is therefore untenable, so $F$ is Archimedean. [step 7.1, discharge-contradiction] ∎
````

