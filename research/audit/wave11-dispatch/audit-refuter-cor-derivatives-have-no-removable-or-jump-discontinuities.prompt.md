# Audit proof-refuter brief — Wave 11, A6

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
For an `ai-generated` Statement or counterexample, actively search for a
counterexample to the public claim or a failure in the witness. A false public
claim, invalid proof, missing necessary hypothesis, circularity, or materially
inaccurate load-bearing citation is fatal; a quickly closable gap is nonfatal.

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

- high risk (5): 3 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `cor-derivatives-have-no-removable-or-jump-discontinuities`

Normalized current SHA-256: `73d3d7aad23bccf72276f885afcb5fa1885ac801f0e71fc11efcc99b07b5a01e`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cor-derivatives-have-no-removable-or-jump-discontinuities
kind: corollary
title: "A derivative has neither a removable discontinuity nor a jump discontinuity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-darboux-theorem-for-derivatives, def-classification-of-discontinuities, def-one-sided-limits]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "Colgate University MATH 323, Chapter 5 notes"
      url: "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf"
    - title: "University of Pennsylvania, derivatives and discontinuities"
      url: "https://www2.math.upenn.edu/~ancoop/3600/section-25.html"
pipeline_run: null
---

## Statement

A derivative has neither a removable discontinuity nor a jump discontinuity. Any discontinuity of a derivative is therefore essential in the classification of [[def-classification-of-discontinuities]].

## Facts & Assumptions

**Given:** $g=f'$ on an interval and a discontinuity point $c$.

[L1] The derivative $g$ has the intermediate value property ([[thm-darboux-theorem-for-derivatives]]).

[L2] At a removable discontinuity both finite one-sided limits agree, while at a jump they are finite and unequal ([[def-classification-of-discontinuities]], [[def-one-sided-limits]]).

## Proof

**Proof technique:** contradiction.

1.1 Assume $c$ is removable. Choose a value strictly between the common punctured limit and $g(c)$. On a sufficiently small punctured neighbourhood all values of $g$ lie on the limit side of that value, while the endpoint value lies on the other side, contradicting the intermediate value property on a segment ending at $c$.  [assume-contra, L1, L2, choose]

1.2 Assume $c$ is a jump. The open interval between the unequal one-sided limits contains a value different from $g(c)$; choose such a value. Sufficiently close points on the two sides have values on opposite sides of the chosen value, while neither punctured side nor the point $c$ takes it, again contradicting the intermediate value property.  [assume-contra, L1, L2, choose]

2.1 Thus neither kind of discontinuity can occur.  [step 1.1, step 1.2, discharge-contradiction] ∎
````

## Wave 11 provenance row

```json
{
  "id": "cor-derivatives-have-no-removable-or-jump-discontinuities",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf",
    "https://www2.math.upenn.edu/~ancoop/3600/section-25.html"
  ],
  "rationale": "The sources explain that a derivative has Darboux's property and hence cannot have a jump, while giving the standard oscillatory derivative discontinuity. The item translates this into the library's removable/jump/essential classification; the removable case is the same local intermediate-value obstruction.",
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
      "source": "thm-darboux-theorem-for-derivatives",
      "source_section": "Statement",
      "quote": "If $I\\subseteq\\mathbb R$ is an interval and $f:I\\to\\mathbb R$ is differentiable, then $f'$ has the intermediate value property ([[def-intermediate-value-property]]).",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-classification-of-discontinuities",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then\n$f$ is **discontinuous at $c$**, and $c$ is a **discontinuity of $f$**, when $f$\nis not continuous at $c$ ([[def-continuity-real]]). As in\n[[def-one-sided-limits]] write\n\n$$A^{-} := A \\cap (-\\infty, c), \\qquad A^{+} := A \\cap (c, \\infty)$$\n\n([[def-interval]]), and recall that $\\lim_{x \\to c^{-}} f(x)$ is defined only\nwhen $c$ is a limit point of $A^{-}$, and $\\lim_{x \\to c^{+}} f(x)$ only when\n$c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).\n\n**At an isolated point there is nothing to classify.** If $c$ is an isolated\npoint of $A$ ([[def-limit-point-r]]), so that $A \\cap N_{\\rho}(c) = \\{c\\}$ for\nsome real $\\rho > 0$, then $f$ is continuous at $c$: the $\\varepsilon$-$\\delta$\ncondition of [[def-continuity-real]] is satisfied by $\\delta := \\rho$, since the\nonly $x \\in A$ with $|x - c| < \\rho$ is $c$ itself and $|f(c) - f(c)| = 0$. So\nevery discontinuity is a limit point of $A$, and the classification below covers\nevery case that occurs.\n\n### Two-sided points\n\nSuppose $c$ is a limit point of **both** $A^{-}$ and $A^{+}$, so that both\none-sided limits are well posed. Say that $c$ is a discontinuity\n\n- **of the first kind** when both one-sided limits exist;\n- **of the second kind**, also called **essential**, when at least one of the two\n  one-sided limits fails to exist.\n\nA discontinuity of the first kind is further\n\n- **removable** when $\\lim_{x \\to c^{-}} f(x) = \\lim_{x \\to c^{+}} f(x)$; the\n  common value is then different from $f(c)$, for otherwise\n  [[thm-two-sided-limit-iff-both-one-sided]] would give\n  $\\lim_{x \\to c} f(x) = f(c)$ and $f$ would be continuous at $c$\n  ([[def-continuity-real]]);\n- a **jump** when $\\lim_{x \\to c^{-}} f(x) \\ne \\lim_{x \\to c^{+}} f(x)$; the\n  difference $\\lim_{x \\to c^{+}} f(x) - \\lim_{x \\to c^{-}} f(x)$ is then called\n  the **jump of $f$ at $c$**.\n\nThe three cases *removable*, *jump*, *essential* are mutually exclusive and\nexhaust the two-sided discontinuities of $f$: either both one-sided limits\nexist, and then they are equal or not, or one of them does not exist.\n\n**Removable is a name for what can be repaired.** If $c$ is a removable\ndiscontinuity with common one-sided value $L$, then the function agreeing with\n$f$ off $c$ and taking the value $L$ at $c$ is continuous at $c$, again by\n[[thm-two-sided-limit-iff-both-one-sided]] and [[def-continuity-real]]: changing\nthe single value $f(c)$ removes the discontinuity. No such repair is available at\na jump or at an essential discontinuity, since there the two-sided limit does not\nexist at all and no choice of value at $c$ can create it.\n\n### One-sided points\n\nIf $c$ is a limit point of exactly one of $A^{-}$ and $A^{+}$, only that side is\ndefined and only that side is used: $c$ is a discontinuity **of the first kind**\nwhen the one-sided limit on the side in question exists, and **of the second\nkind** otherwise. When it exists it is different from $f(c)$, since on such a\npoint the one-sided condition and the continuity condition are the same\ncondition; and there is no jump case, there being nothing to compare the value\nwith. The endpoints of an interval are the typical instance.\n\n**On the two vocabularies.** *First kind* and *second kind* are Rudin's terms and\nare recorded because the literature uses them; *removable*, *jump* and\n*essential* are the names used in the rest of this library. They name the same\nthree cases and no third classification is introduced.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-one-sided-limits",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in\n\\mathbb{R}$. Put\n\n$$A^{-} := A \\cap (-\\infty, c), \\qquad A^{+} := A \\cap (c, \\infty)$$\n\n([[def-interval]]), and write $f^{-} := f|_{A^{-}}$ and $f^{+} := f|_{A^{+}}$\nfor the restrictions of $f$ to those sets.\n\n**Right limit.** Suppose $c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).\nFor $L \\in \\mathbb{R}$ we write\n\n$$\\lim_{x \\to c^{+}} f(x) = L \\quad :\\Longleftrightarrow \\quad \\lim_{x \\to c} f^{+}(x) = L$$\n\nin the sense of [[def-function-limit]]. Written out: for every real\n$\\varepsilon > 0$ there is a real $\\delta > 0$ such that\n\n$$|f(x) - L| < \\varepsilon \\qquad \\text{for every } x \\in A \\text{ with } c < x < c + \\delta .$$\n\n**Left limit.** Suppose $c$ is a limit point of $A^{-}$. For $L \\in \\mathbb{R}$\nwe write $\\lim_{x \\to c^{-}} f(x) = L$ when $\\lim_{x \\to c} f^{-}(x) = L$; written\nout, for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n$|f(x) - L| < \\varepsilon$ for every $x \\in A$ with $c - \\delta < x < c$.\n\n**The written-out forms agree with the definitions.** For $x \\in A^{+}$ the two\nconditions $0 < |x - c| < \\delta$ and $c < x < c + \\delta$ are the same: $x > c$\ngives $x - c > 0$, so $|x - c| = x - c$ and $0 < |x - c| < \\delta$ reads\n$0 < x - c < \\delta$ ([[lem-of-abs-value]]). Symmetrically on the left, where\n$x < c$ gives $|x - c| = c - x$.\n\n**Well-posedness is inherited, not reproved.** A one-sided limit *is* a limit,\nnamely the limit of a restriction, so:\n\n- **Uniqueness.** At most one $L$ can occur, by [[lem-function-limit-unique]]\n  applied to $f^{+}$ on the domain $A^{+}$ (respectively to $f^{-}$ on\n  $A^{-}$), which is legitimate exactly because $c$ was required to be a limit\n  point of that set. This is what makes the notation $\\lim_{x \\to c^{+}} f(x)$\n  denote a single real.\n- **Locality and restriction.** Both claims of [[lem-limit-is-local]] apply\n  verbatim to $f^{+}$ and $f^{-}$.\n\n**When the symbols are defined.** If $c$ is not a limit point of $A^{+}$ — for\ninstance if $A$ contains no point to the right of $c$, or only points bounded\naway from $c$ on that side — then $\\lim_{x \\to c^{+}} f(x)$ is **not defined**\nhere, for the reason given in [[def-function-limit]]: the\n$\\varepsilon$-$\\delta$ condition would be satisfied vacuously by every real at\nonce. The same applies on the left.",
      "uses": [
        "1.1",
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "cor-derivatives-have-no-removable-or-jump-discontinuities-step-1-1",
      "claim": "Assume $c$ is removable. Choose a value strictly between the common punctured limit and $g(c)$. On a sufficiently small punctured neighbourhood all values of $g$ lie on the limit side of that value, while the endpoint value lies on the other side, contradicting the intermediate value property on a segment ending at $c$. [assume-contra, L1, L2, choose]",
      "step": "1.1",
      "inputs": [
        "assume-contra",
        "L1",
        "L2",
        "choose"
      ]
    },
    {
      "id": "cor-derivatives-have-no-removable-or-jump-discontinuities-step-1-2",
      "claim": "Assume $c$ is a jump. The open interval between the unequal one-sided limits contains a value different from $g(c)$; choose such a value. Sufficiently close points on the two sides have values on opposite sides of the chosen value, while neither punctured side nor the point $c$ takes it, again contradicting the intermediate value property. [assume-contra, L1",
      "step": "1.2",
      "inputs": [
        "assume-contra",
        "L1",
        "L2",
        "choose"
      ]
    },
    {
      "id": "cor-derivatives-have-no-removable-or-jump-discontinuities-step-2-1",
      "claim": "Thus neither kind of discontinuity can occur. [step 1.1, step 1.2, discharge-contradiction] ∎",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "discharge-contradiction"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "cor-derivatives-have-no-removable-or-jump-discontinuities concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "cor-derivatives-have-no-removable-or-jump-discontinuities has no counting, exponent, or value parameter whose zero case changes the proof."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "cor-derivatives-have-no-removable-or-jump-discontinuities has no counting, exponent, or unit parameter whose one case changes the proof."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "cor-derivatives-have-no-removable-or-jump-discontinuities has no interval-length or denominator parameter that may collapse degenerately."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "cor-derivatives-have-no-removable-or-jump-discontinuities contains no interval-endpoint assertion requiring a separate endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 establishes or explicitly fixes the object before the proof chooses or extremizes it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of cor-derivatives-have-no-removable-or-jump-discontinuities is not a biconditional, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of cor-derivatives-have-no-removable-or-jump-discontinuities is not a biconditional, so it has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the published A2 contract; independent risk routing occurs after A3."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cor-derivatives-have-no-removable-or-jump-discontinuities",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-darboux-theorem-for-derivatives",
    "declared_target": "thm-darboux-theorem-for-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-derivatives-have-no-removable-or-jump-discontinuities",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-classification-of-discontinuities",
    "declared_target": "def-classification-of-discontinuities",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-derivatives-have-no-removable-or-jump-discontinuities",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-one-sided-limits",
    "declared_target": "def-one-sided-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
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

## Full exact-current text of every cited or declared item (3)

### `def-classification-of-discontinuities`

````markdown
---
id: def-classification-of-discontinuities
kind: definition
title: "Discontinuity of $f$ at a point of its domain, and its classification: removable discontinuity, jump discontinuity and essential discontinuity, equivalently Rudin's discontinuities of the first and of the second kind"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [def-continuity-real, def-one-sided-limits, def-function-limit, def-limit-point-r, def-interval, thm-two-sided-limit-iff-both-one-sided]
justified_by: []
aliases: [def-discontinuity, def-jump-discontinuity, def-removable-discontinuity, def-essential-discontinuity]
landmark: true
short: "removable, jump, essential discontinuity"
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
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **discontinuous at $c$**, and $c$ is a **discontinuity of $f$**, when $f$
is not continuous at $c$ ([[def-continuity-real]]). As in
[[def-one-sided-limits]] write

$$A^{-} := A \cap (-\infty, c), \qquad A^{+} := A \cap (c, \infty)$$

([[def-interval]]), and recall that $\lim_{x \to c^{-}} f(x)$ is defined only
when $c$ is a limit point of $A^{-}$, and $\lim_{x \to c^{+}} f(x)$ only when
$c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).

**At an isolated point there is nothing to classify.** If $c$ is an isolated
point of $A$ ([[def-limit-point-r]]), so that $A \cap N_{\rho}(c) = \{c\}$ for
some real $\rho > 0$, then $f$ is continuous at $c$: the $\varepsilon$-$\delta$
condition of [[def-continuity-real]] is satisfied by $\delta := \rho$, since the
only $x \in A$ with $|x - c| < \rho$ is $c$ itself and $|f(c) - f(c)| = 0$. So
every discontinuity is a limit point of $A$, and the classification below covers
every case that occurs.

### Two-sided points

Suppose $c$ is a limit point of **both** $A^{-}$ and $A^{+}$, so that both
one-sided limits are well posed. Say that $c$ is a discontinuity

- **of the first kind** when both one-sided limits exist;
- **of the second kind**, also called **essential**, when at least one of the two
  one-sided limits fails to exist.

A discontinuity of the first kind is further

- **removable** when $\lim_{x \to c^{-}} f(x) = \lim_{x \to c^{+}} f(x)$; the
  common value is then different from $f(c)$, for otherwise
  [[thm-two-sided-limit-iff-both-one-sided]] would give
  $\lim_{x \to c} f(x) = f(c)$ and $f$ would be continuous at $c$
  ([[def-continuity-real]]);
- a **jump** when $\lim_{x \to c^{-}} f(x) \ne \lim_{x \to c^{+}} f(x)$; the
  difference $\lim_{x \to c^{+}} f(x) - \lim_{x \to c^{-}} f(x)$ is then called
  the **jump of $f$ at $c$**.

The three cases *removable*, *jump*, *essential* are mutually exclusive and
exhaust the two-sided discontinuities of $f$: either both one-sided limits
exist, and then they are equal or not, or one of them does not exist.

**Removable is a name for what can be repaired.** If $c$ is a removable
discontinuity with common one-sided value $L$, then the function agreeing with
$f$ off $c$ and taking the value $L$ at $c$ is continuous at $c$, again by
[[thm-two-sided-limit-iff-both-one-sided]] and [[def-continuity-real]]: changing
the single value $f(c)$ removes the discontinuity. No such repair is available at
a jump or at an essential discontinuity, since there the two-sided limit does not
exist at all and no choice of value at $c$ can create it.

### One-sided points

If $c$ is a limit point of exactly one of $A^{-}$ and $A^{+}$, only that side is
defined and only that side is used: $c$ is a discontinuity **of the first kind**
when the one-sided limit on the side in question exists, and **of the second
kind** otherwise. When it exists it is different from $f(c)$, since on such a
point the one-sided condition and the continuity condition are the same
condition; and there is no jump case, there being nothing to compare the value
with. The endpoints of an interval are the typical instance.

**On the two vocabularies.** *First kind* and *second kind* are Rudin's terms and
are recorded because the literature uses them; *removable*, *jump* and
*essential* are the names used in the rest of this library. They name the same
three cases and no third classification is introduced.
````

### `def-one-sided-limits`

````markdown
---
id: def-one-sided-limits
kind: definition
title: "The left and right limits of $f$ at $c$, as limits of the restrictions of $f$ to $A \\cap (-\\infty, c)$ and $A \\cap (c, \\infty)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-interval, lem-limit-is-local, lem-function-limit-unique, lem-of-abs-value]
justified_by: []
aliases: [def-left-limit, def-right-limit]
landmark: true
short: "one-sided limits"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "One-sided limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/One-sided_limit"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in
\mathbb{R}$. Put

$$A^{-} := A \cap (-\infty, c), \qquad A^{+} := A \cap (c, \infty)$$

([[def-interval]]), and write $f^{-} := f|_{A^{-}}$ and $f^{+} := f|_{A^{+}}$
for the restrictions of $f$ to those sets.

**Right limit.** Suppose $c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).
For $L \in \mathbb{R}$ we write

$$\lim_{x \to c^{+}} f(x) = L \quad :\Longleftrightarrow \quad \lim_{x \to c} f^{+}(x) = L$$

in the sense of [[def-function-limit]]. Written out: for every real
$\varepsilon > 0$ there is a real $\delta > 0$ such that

$$|f(x) - L| < \varepsilon \qquad \text{for every } x \in A \text{ with } c < x < c + \delta .$$

**Left limit.** Suppose $c$ is a limit point of $A^{-}$. For $L \in \mathbb{R}$
we write $\lim_{x \to c^{-}} f(x) = L$ when $\lim_{x \to c} f^{-}(x) = L$; written
out, for every real $\varepsilon > 0$ there is a real $\delta > 0$ with
$|f(x) - L| < \varepsilon$ for every $x \in A$ with $c - \delta < x < c$.

**The written-out forms agree with the definitions.** For $x \in A^{+}$ the two
conditions $0 < |x - c| < \delta$ and $c < x < c + \delta$ are the same: $x > c$
gives $x - c > 0$, so $|x - c| = x - c$ and $0 < |x - c| < \delta$ reads
$0 < x - c < \delta$ ([[lem-of-abs-value]]). Symmetrically on the left, where
$x < c$ gives $|x - c| = c - x$.

**Well-posedness is inherited, not reproved.** A one-sided limit *is* a limit,
namely the limit of a restriction, so:

- **Uniqueness.** At most one $L$ can occur, by [[lem-function-limit-unique]]
  applied to $f^{+}$ on the domain $A^{+}$ (respectively to $f^{-}$ on
  $A^{-}$), which is legitimate exactly because $c$ was required to be a limit
  point of that set. This is what makes the notation $\lim_{x \to c^{+}} f(x)$
  denote a single real.
- **Locality and restriction.** Both claims of [[lem-limit-is-local]] apply
  verbatim to $f^{+}$ and $f^{-}$.

**When the symbols are defined.** If $c$ is not a limit point of $A^{+}$ — for
instance if $A$ contains no point to the right of $c$, or only points bounded
away from $c$ on that side — then $\lim_{x \to c^{+}} f(x)$ is **not defined**
here, for the reason given in [[def-function-limit]]: the
$\varepsilon$-$\delta$ condition would be satisfied vacuously by every real at
once. The same applies on the left.

## Remarks

- **Neither one-sided limit requires $c \in A$, and neither looks at $f(c)$.**
  Both properties are inherited from [[def-function-limit]], since $c \notin
  A^{-} \cup A^{+}$: the point $c$ belongs to neither $(-\infty, c)$ nor
  $(c, \infty)$.

- **The two one-sided limits and the two-sided limit.** When $c$ is a limit
  point of both $A^{-}$ and $A^{+}$, the two-sided limit exists exactly when
  both one-sided limits exist and agree, and then all three coincide:
  [[thm-two-sided-limit-iff-both-one-sided]]. When $c$ is a limit point of only
  one of the two sets, that one-sided limit and the two-sided limit are the same
  condition, again by claim 2 of [[lem-limit-is-local]] together with the
  observation that $A$ and that one side have the same points in a small enough
  punctured neighbourhood of $c$.

- **Notation.** Some texts write $f(c+)$ and $f(c-)$ for these values. This
  library writes only $\lim_{x \to c^{+}} f(x)$ and $\lim_{x \to c^{-}} f(x)$,
  because the shorter notation looks like an evaluation of $f$ and these
  quantities are not values of $f$: they are defined without reference to
  $f(c)$, which may not even exist.
````

### `thm-darboux-theorem-for-derivatives`

````markdown
---
id: thm-darboux-theorem-for-derivatives
kind: theorem
title: "Darboux's theorem: every derivative has the intermediate-value property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-derivative, cor-differentiable-implies-continuous, thm-heine-borel-r, thm-extreme-value-r, thm-fermat-interior-extremum, thm-algebra-of-derivatives, lem-derivative-of-a-power, def-interval, def-intermediate-value-property]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "J. Lebl, Basic Analysis I, Mean value theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
    - title: "Colgate University MATH 323, Chapter 5 notes"
      url: "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf"
pipeline_run: null
---

## Statement

If $I\subseteq\mathbb R$ is an interval and $f:I\to\mathbb R$ is differentiable, then $f'$ has the intermediate value property ([[def-intermediate-value-property]]).

## Facts & Assumptions

**Given:** $x<y$ in $I$ and a real $\lambda$ between $f'(x)$ and $f'(y)$.

[L1] Differentiability implies continuity; the closed bounded interval $[x,y]$ is compact; and a continuous real function on a nonempty compact set attains its extrema ([[cor-differentiable-implies-continuous]], [[thm-heine-borel-r]], [[thm-extreme-value-r]]).

[L2] An interior extremum of a differentiable function has derivative $0$ ([[thm-fermat-interior-extremum]]).

[L3] Derivatives obey the algebra rules, and the derivative of $t\mapsto t$ is $1$ ([[thm-algebra-of-derivatives]], [[lem-derivative-of-a-power]]).

## Proof

**Proof technique:** cases.

1.1 If $\lambda=f'(x)$ or $\lambda=f'(y)$, choose that endpoint.  [assume-case endpoint, given]

1.2 Suppose $f'(x)<\lambda<f'(y)$, and define $h(t)=f(t)-\lambda t$ on $[x,y]$. Then $h'(x)<0<h'(y)$.  [assume-case increasing, L3, algebra]

1.3 If instead $f'(y)<\lambda<f'(x)$, apply the preceding argument to $-h$, obtaining an interior extremum of $h$.  [assume-case decreasing, L1, L3]

2.1 For sufficiently small positive $s,t$, the derivative inequalities give $h(x+s)<h(x)$ and $h(y-t)<h(y)$. Hence a minimum of $h$ on $[x,y]$ occurs at an interior point $c$.  [step 1.2, L1, choose]

3.1 In either strict-order case, Fermat gives $h'(c)=0$, hence $f'(c)=\lambda$. Together with the endpoint case, every intermediate value is attained.  [step 2.1, step 1.3, L2, L3, cases-exhaustive] ∎
````

