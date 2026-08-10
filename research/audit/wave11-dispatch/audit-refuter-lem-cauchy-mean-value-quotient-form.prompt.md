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

- high risk (7): 4 declared dependencies; 2 cited facts; boundary-sensitive language; quotient or equivalence-class construction

## Target item — `lem-cauchy-mean-value-quotient-form`

Normalized current SHA-256: `27986dcaa87f0bdf0e21d03ad0dd58843b9476865cd5079ac053dfcfd1e3c6bc`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: lem-cauchy-mean-value-quotient-form
kind: lemma
title: "Cauchy's mean-value theorem in quotient form when the denominator derivative is nonzero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-cauchy-mean-value, thm-rolle, def-derivative, def-one-sided-limits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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

Let $a<b$. If $f,g$ are continuous on $[a,b]$, differentiable on $(a,b)$, and $g'(x)\ne0$ throughout $(a,b)$, then $g(b)\ne g(a)$ and there is $c\in(a,b)$ such that
$$\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(c)}{g'(c)}.$$

## Facts & Assumptions

**Given:** The functions and hypotheses in the statement.

[L1] Cauchy's mean value theorem gives $(f(b)-f(a))g'(c)=(g(b)-g(a))f'(c)$ for some $c\in(a,b)$ ([[thm-cauchy-mean-value]]).

[L2] Rolle's theorem says equal endpoint values force an interior zero of the derivative ([[thm-rolle]]).

## Proof

**Proof technique:** direct.

1.1 If $g(a)=g(b)$, Rolle gives $d\in(a,b)$ with $g'(d)=0$, contrary to the hypothesis. Hence $g(b)-g(a)\ne0$.  [L2, given]

1.2 Cauchy's theorem supplies $c\in(a,b)$ with the cross-product identity in [L1].  [L1]

2.1 Divide that identity by the two nonzero factors $g(b)-g(a)$ and $g'(c)$ to obtain the quotient formula.  [step 1.1, step 1.2, algebra] ∎
````

## Wave 11 provenance row

```json
{
  "id": "lem-cauchy-mean-value-quotient-form",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_mvt.html",
    "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf"
  ],
  "rationale": "The sources state Cauchy's mean value theorem in quotient form under continuity, differentiability, and nonvanishing g', including the necessary conclusion g(b) not equal to g(a). The short derivation is local.",
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
      "source": "thm-cauchy-mean-value",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a < b$ and let $f, g : [a,b] \\to \\mathbb{R}$ be\ncontinuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) and\ndifferentiable at every point of $(a,b)$ as functions on $[a,b]$\n([[def-derivative]]). Then there is $c \\in (a,b)$ with\n\n$$\\bigl(f(b)-f(a)\\bigr)\\,g'(c) \\;=\\; \\bigl(g(b)-g(a)\\bigr)\\,f'(c) .$$\n\n**The statement is a product identity, and that is deliberate.** The familiar\nquotient form\n\n$$\\frac{f(b)-f(a)}{g(b)-g(a)} \\;=\\; \\frac{f'(c)}{g'(c)}$$\n\nis not asserted here, and it is not equivalent: its left side needs\n$g(b) \\ne g(a)$ and its right side needs $g'(c) \\ne 0$, and neither follows from\nthe hypotheses. The product form above needs neither, holds under exactly the\nhypotheses stated, and specialises to the quotient form whenever both\ndenominators happen to be nonzero. The companion page exhibits an $f$ and a $g$\nfor which the quotient form is meaningless while the product form holds.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-rolle",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a < b$, let $f : [a,b] \\to \\mathbb{R}$ be\ncontinuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) and\ndifferentiable at every point of $(a,b)$ as a function on $[a,b]$\n([[def-derivative]]), and suppose\n\n$$f(a) \\;=\\; f(b) .$$\n\nThen there is $c \\in (a,b)$ with $f'(c) = 0$.\n\n**Three hypotheses, three different jobs.** Continuity on the **closed**\ninterval is what the extreme value theorem consumes; differentiability on the\n**open** interval is what Fermat's theorem consumes, and it is asked for\nnowhere else; and $f(a) = f(b)$ is what forces the extremum inside when neither\nextremum is attained in the interior. Continuity at the two endpoints cannot be\ndropped, and a false statement later on this page records a witness for that.\n\n**Differentiability is meant with respect to the domain $[a,b]$.** For $c$ in\nthe open interval that is the same condition as differentiability of any\nrestriction of $f$ to a subinterval around $c$, since only points near $c$\nenter, but the phrase is fixed here so that the citation of\n[[thm-fermat-interior-extremum]], whose hypothesis is interiority in the\ndomain, is exact.",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "lem-cauchy-mean-value-quotient-form-step-1-1",
      "claim": "If $g(a)=g(b)$, Rolle gives $d\\in(a,b)$ with $g'(d)=0$, contrary to the hypothesis. Hence $g(b)-g(a)\\ne0$. [L2, given]",
      "step": "1.1",
      "inputs": [
        "L2",
        "given"
      ]
    },
    {
      "id": "lem-cauchy-mean-value-quotient-form-step-1-2",
      "claim": "Cauchy's theorem supplies $c\\in(a,b)$ with the cross-product identity in [L1]. [L1]",
      "step": "1.2",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "lem-cauchy-mean-value-quotient-form-step-2-1",
      "claim": "Divide that identity by the two nonzero factors $g(b)-g(a)$ and $g'(c)$ to obtain the quotient formula. [step 1.1, step 1.2, algebra] ∎",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "algebra"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "lem-cauchy-mean-value-quotient-form concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "lem-cauchy-mean-value-quotient-form has no counting, exponent, or value parameter whose zero case changes the proof."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "lem-cauchy-mean-value-quotient-form has no counting, exponent, or unit parameter whose one case changes the proof."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement explicitly assumes distinct ordered endpoints, excluding the degenerate interval before step 1.1."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement specifies the closed or oriented interval convention; step 1.1 handles the endpoint data used by the argument."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.2 establishes or explicitly fixes the object before the proof chooses or extremizes it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of lem-cauchy-mean-value-quotient-form is not a biconditional, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of lem-cauchy-mean-value-quotient-form is not a biconditional, so it has no reverse iff direction."
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
    "source": "lem-cauchy-mean-value-quotient-form",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-cauchy-mean-value",
    "declared_target": "thm-cauchy-mean-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-cauchy-mean-value-quotient-form",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-rolle",
    "declared_target": "thm-rolle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-cauchy-mean-value-quotient-form",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-cauchy-mean-value-quotient-form",
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

## Full exact-current text of every cited or declared item (4)

### `def-derivative`

````markdown
---
id: def-derivative
kind: definition
title: "The derivative $f'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c}$ of $f : A \\to \\mathbb{R}$ at a point $c \\in A$ that is a limit point of $A$, and differentiability on a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-interval, def-neighbourhood-r, def-complete-ordered-field, def-continuity-real, lem-limit-is-local]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: [def-differentiable, def-differentiability]
landmark: true
short: "the derivative at a point"
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
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Def. 5.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §10.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), neighbourhoods are those of
[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}, \qquad q_{f,c}(x) := \frac{f(x) - f(c)}{x - c} .$$

The division is legitimate at every point of the domain, since $x \ne c$ gives
$x - c \ne 0$.

**The point $c$ is a limit point of $A \setminus \{c\}$, not merely of $A$.**
For every real $\varepsilon > 0$ the punctured neighbourhood
$N^{*}_{\varepsilon}(c)$ omits $c$, so

$$N^{*}_{\varepsilon}(c) \cap A \;=\; N^{*}_{\varepsilon}(c) \cap (A \setminus \{c\}) ,$$

and the left-hand side is nonempty because $c$ is a limit point of $A$. So
$q_{f,c}$ is a function on a set having $c$ as a limit point, and
$\lim_{x \to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.

$f$ is **differentiable at $c$** when that limit exists, and then the
**derivative of $f$ at $c$** is

$$f'(c) \;:=\; \lim_{x \to c} q_{f,c}(x) \;=\; \lim_{x \to c} \frac{f(x) - f(c)}{x - c} .$$

**Two obligations are carried by that notation, and both are discharged here.**

1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a
   single real number. That is legitimate: $c$ is a limit point of the domain
   $A \setminus \{c\}$ of $q_{f,c}$, so at most one real can satisfy the
   $\varepsilon$-$\delta$ condition, by [[lem-function-limit-unique]] applied to
   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the
   symbol denotes.
2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not
   decoration. At an **isolated** point of $A$ the punctured condition
   $0 < |x - c| < \delta$ is met by no point of the domain at all, so the
   $\varepsilon$-$\delta$ formula is satisfied vacuously by *every* real at
   once; this is why [[def-function-limit]] leaves the limit undefined there,
   and it is why this library defines $f'(c)$ only at a limit point of $A$. At
   an isolated point of its domain a function is neither differentiable nor
   non-differentiable here: the question is not posed.

**The limit sees only $A \setminus \{c\}$, so how the difference quotient is
extended to $c$ is irrelevant.** Let $Q : A \to \mathbb{R}$ agree with
$q_{f,c}$ at every point of $A \setminus \{c\}$, and let $L \in \mathbb{R}$.
Then $\lim_{x \to c} Q(x) = L$ if and only if $\lim_{x \to c} q_{f,c}(x) = L$.
Both conditions read: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that every point $x$ of the relevant domain with
$0 < |x - c| < \delta$ satisfies $|{\cdot} - L| < \varepsilon$
([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both
quantifiers, so in both cases the points quantified over are exactly the
$x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$, at which $Q$ and
$q_{f,c}$ take the same value. The two conditions are the same condition.

**Differentiability on a set.** For $S \subseteq A$, $f$ is **differentiable on
$S$** when it is differentiable at every $c \in S$; implicit in that phrase is
that every point of $S$ is a limit point of $A$. $f$ is **differentiable** when
it is differentiable on the whole of $A$.

**Restriction of the domain.** Let $B \subseteq A$, let $c \in B$ and suppose
$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the
restriction $f|_B : B \to \mathbb{R}$, and

$$(f|_B)'(c) \;=\; f'(c) .$$

Indeed $B \setminus \{c\} \subseteq A \setminus \{c\}$; the displayed identity
of punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit
point of $B \setminus \{c\}$; the difference quotient $q_{f|_B, c}$ is the
restriction of $q_{f,c}$ to $B \setminus \{c\}$, since $f|_B(c) = f(c)$; and
claim 2 of [[lem-limit-is-local]] carries the limit to that restriction.

**Every point of a nondegenerate interval is a limit point of it.** Let
$J \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) with at least two
elements and let $p \in J$. Choose $q \in J$ with $q \ne p$, and let a real
$\varepsilon > 0$ be given. If $p < q$, put $y := p + \tfrac{1}{2}\min\{\varepsilon,\ q - p\}$;
then $p < y$, and $y - p \le \tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and
order-convexity gives $y \in J$, while $0 < |y - p| < \varepsilon$. If $q < p$,
the point $y := p - \tfrac{1}{2}\min\{\varepsilon,\ p - q\}$ serves in the same
way. So $N^{*}_{\varepsilon}(p) \cap J \ne \varnothing$ for every real
$\varepsilon > 0$, that is, $p$ is a limit point of $J$
([[def-limit-point-r]]).

Consequently, for $f$ defined on a nondegenerate interval $I$, the symbol
$f'(c)$ is meaningful at **every** $c \in I$, endpoints included. At an endpoint
the difference quotient is taken over the points of $I$ lying on the one side
that is available, so what other texts call a one-sided derivative is, here,
simply the derivative of $f$ on $I$.

## Remarks

- **Notation.** $f'(c)$ and $\frac{df}{dx}(c)$ denote the same real number, and
  this library uses the first. Neither is an operation performed on a symbol
  $x$: the variable in the second is a name for the argument and nothing more.

- **Differentiability is a property of the pair $(f, A)$ at $c$, not of $f$
  alone.** The restriction clause above goes in one direction only, and the
  converse fails. Take $A := \mathbb{R}$, $f(x) := |x|$, $B := [0,\infty)$ and
  $c := 0$. Then $f|_B$ is the identity on $B$, whose difference quotient at $0$
  is constantly $1$, so $f|_B$ is differentiable at $0$ with derivative $1$;
  that $f$ itself is not differentiable at $0$ is
  [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page.
  So enlarging the domain can destroy differentiability, and the phrase
  "$f$ is differentiable at $c$" always carries the domain with it.

- **The relation to continuity is not definitional.** [[def-continuity-real]]
  is a condition on $f$ near $c$ that does not mention a quotient, and it is
  defined at every point of $A$, isolated points included, whereas
  differentiability is defined only at limit points of $A$. That
  differentiability implies continuity is a theorem on this page and not a
  reading of the definitions.

- **No second derivative and no one-sided derivative is introduced here.**
  Both are standard, and both are absent from this page on purpose;
  [[rem-derivative-conventions]] records exactly what is fixed and what is left
  open at this point in the reading order.
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

### `thm-cauchy-mean-value`

````markdown
---
id: thm-cauchy-mean-value
kind: theorem
title: "Cauchy's mean value theorem: for $f, g$ continuous on $[a,b]$ with $a<b$ and differentiable on $(a,b)$ there is $c \\in (a,b)$ with $\\bigl(f(b)-f(a)\\bigr)g'(c) = \\bigl(g(b)-g(a)\\bigr)f'(c)$; no hypothesis on $g'$ is needed in this product form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rolle, thm-algebra-of-derivatives, def-derivative, thm-algebra-of-continuous-functions, def-continuity-real, def-interval]
justified_by: []
forward_refs: [cex-cauchy-mean-value-quotient-form-needs-a-nonvanishing-derivative]
aliases: [thm-extended-mean-value-theorem]
landmark: true
short: "Cauchy's mean value theorem"
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
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.9)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a < b$ and let $f, g : [a,b] \to \mathbb{R}$ be
continuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) and
differentiable at every point of $(a,b)$ as functions on $[a,b]$
([[def-derivative]]). Then there is $c \in (a,b)$ with

$$\bigl(f(b)-f(a)\bigr)\,g'(c) \;=\; \bigl(g(b)-g(a)\bigr)\,f'(c) .$$

**The statement is a product identity, and that is deliberate.** The familiar
quotient form

$$\frac{f(b)-f(a)}{g(b)-g(a)} \;=\; \frac{f'(c)}{g'(c)}$$

is not asserted here, and it is not equivalent: its left side needs
$g(b) \ne g(a)$ and its right side needs $g'(c) \ne 0$, and neither follows from
the hypotheses. The product form above needs neither, holds under exactly the
hypotheses stated, and specialises to the quotient form whenever both
denominators happen to be nonzero. The companion page exhibits an $f$ and a $g$
for which the quotient form is meaningless while the product form holds.

## Facts & Assumptions

**Given:** Reals $a < b$ and functions $f, g : [a,b] \to \mathbb{R}$, both continuous on $[a,b]$ and both differentiable at every point of $(a,b)$.

[L1] Rolle's theorem ([[thm-rolle]]): a function continuous on $[a,b]$, differentiable at every point of $(a,b)$ and taking equal values at $a$ and at $b$ has a vanishing derivative at some point of $(a,b)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]], claim 1): sums and scalar multiples of functions continuous on a set are continuous on that set.

[L3] Algebra of derivatives ([[thm-algebra-of-derivatives]], claims 1 and 2): at a limit point of the common domain, a sum of functions differentiable there is differentiable with the sum of the derivatives, and a scalar multiple with the scalar multiple of the derivative.

[L4] Every point of $(a,b)$ lies in $[a,b]$ and is a limit point of $[a,b]$, since $[a,b]$ is order-convex with at least two elements when $a < b$ ([[def-derivative]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Put $\lambda := f(b) - f(a)$ and $\mu := g(b) - g(a)$, two reals, and define $h : [a,b] \to \mathbb{R}$ by $h(x) := \lambda\,g(x) - \mu\,f(x)$. [construct]

2.1 $h$ is continuous on $[a,b]$, being the sum of the scalar multiples $\lambda g$ and $(-\mu) f$ of two functions continuous on $[a,b]$. [step 1.1, L2]

2.2 $h$ is differentiable at every $c \in (a,b)$ with $h'(c) = \lambda\,g'(c) - \mu\,f'(c)$: such a $c$ is a limit point of $[a,b]$ by [L4], and $f$ and $g$ are differentiable there, so the scalar-multiple and sum rules of [L3] apply on the domain $[a,b]$. [step 1.1, L3, L4]

2.3 $h(a) = h(b)$. Expanding, $h(a) = \bigl(f(b)-f(a)\bigr)g(a) - \bigl(g(b)-g(a)\bigr)f(a) = f(b)g(a) - f(a)g(a) - g(b)f(a) + g(a)f(a) = f(b)g(a) - g(b)f(a)$, and $h(b) = \bigl(f(b)-f(a)\bigr)g(b) - \bigl(g(b)-g(a)\bigr)f(b) = f(b)g(b) - f(a)g(b) - g(b)f(b) + g(a)f(b) = g(a)f(b) - f(a)g(b)$. The two expressions are the same. [step 1.1, algebra]

3.1 By steps 2.1, 2.2 and 2.3 the function $h$ satisfies every hypothesis of [L1], so there is $c \in (a,b)$ with $h'(c) = 0$, that is $\lambda\,g'(c) - \mu\,f'(c) = 0$, that is $\bigl(f(b)-f(a)\bigr)g'(c) = \bigl(g(b)-g(a)\bigr)f'(c)$. [step 2.1, step 2.2, step 2.3, L1] ∎

## Remarks

- **Where the auxiliary function comes from.** $h$ is built so that the two cross terms $f(a)g(a)$ and $f(b)g(b)$ cancel against themselves at the two endpoints, leaving the same antisymmetric expression $f(b)g(a) - f(a)g(b)$ at each. Nothing is optimised and nothing is guessed: the two coefficients are forced, up to a common scalar, by the requirement $h(a) = h(b)$.

- **The ordinary mean value theorem is the case $g(x) = x$**, and it is recorded as the next item rather than reproved. Cauchy's theorem is the more general statement and is proved first for that reason, not because it is harder: it costs one application of Rolle either way.

- **What fails in the quotient form.** If $g(a) = g(b)$ the left side is not a real number at all, and the theorem still says something: it says $\bigl(f(b)-f(a)\bigr)g'(c) = 0$ for some $c \in (a,b)$. That is the case worked out in [[cex-cauchy-mean-value-quotient-form-needs-a-nonvanishing-derivative]].
````

### `thm-rolle`

````markdown
---
id: thm-rolle
kind: theorem
title: "Rolle's theorem: if $a < b$, $f$ is continuous on $[a,b]$, differentiable at every point of $(a,b)$, and $f(a) = f(b)$, then $f'(c) = 0$ for some $c \\in (a,b)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-fermat-interior-extremum, def-local-extremum, thm-extreme-value-r, thm-heine-borel-characterisation-r, def-open-cover-r, def-continuity-real, def-interval, def-max-min, def-interior-closure-boundary-r, def-open-and-closed-in-r, def-neighbourhood-r, def-bounded-set, def-function-limit]
justified_by: []
aliases: []
landmark: true
short: "Rolle's theorem"
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
    - title: "Rolle's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rolle%27s_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, Mean Value Theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a < b$, let $f : [a,b] \to \mathbb{R}$ be
continuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) and
differentiable at every point of $(a,b)$ as a function on $[a,b]$
([[def-derivative]]), and suppose

$$f(a) \;=\; f(b) .$$

Then there is $c \in (a,b)$ with $f'(c) = 0$.

**Three hypotheses, three different jobs.** Continuity on the **closed**
interval is what the extreme value theorem consumes; differentiability on the
**open** interval is what Fermat's theorem consumes, and it is asked for
nowhere else; and $f(a) = f(b)$ is what forces the extremum inside when neither
extremum is attained in the interior. Continuity at the two endpoints cannot be
dropped, and a false statement later on this page records a witness for that.

**Differentiability is meant with respect to the domain $[a,b]$.** For $c$ in
the open interval that is the same condition as differentiability of any
restriction of $f$ to a subinterval around $c$, since only points near $c$
enter, but the phrase is fixed here so that the citation of
[[thm-fermat-interior-extremum]], whose hypothesis is interiority in the
domain, is exact.

## Facts & Assumptions

**Given:** Reals $a < b$, a function $f : [a,b] \to \mathbb{R}$ continuous on $[a,b]$ and differentiable at every point of $(a,b)$, with $f(a) = f(b)$.

[L1] $[a,b]$ is closed ([[def-open-and-closed-in-r]]) and bounded ([[def-interval]], [[def-bounded-set]]), hence compact ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]); and it is nonempty, since $a \le a \le b$ gives $a \in [a,b]$.

[L2] Extreme value theorem ([[thm-extreme-value-r]]): for $f$ continuous on $A$ and $K \subseteq A$ nonempty and compact there are $p, q \in K$ with $f(q) \le f(x) \le f(p)$ for every $x \in K$, so that $f(p) = \max f[K]$ and $f(q) = \min f[K]$ ([[def-max-min]]).

[L3] Every point of $(a,b)$ is interior to $[a,b]$: for $c$ with $a < c < b$ put $\varepsilon := \min\{c - a,\ b - c\}$, a positive real; every $y$ with $|y - c| < \varepsilon$ satisfies $y > c - \varepsilon \ge a$ and $y < c + \varepsilon \le b$, so $N_{\varepsilon}(c) \subseteq (a,b) \subseteq [a,b]$ ([[def-neighbourhood-r]], [[def-interval]], [[def-interior-closure-boundary-r]]).

[L4] A value $f(c)$ that is a greatest value of $f$ over the whole of its domain is a local maximum at $c$, and a least value is a local minimum at $c$ ([[def-local-extremum]], claim 4 of its body).

[L5] Fermat's interior extremum theorem ([[thm-fermat-interior-extremum]]): a local extremum at a point interior to the domain, at which the function is differentiable, forces the derivative there to vanish.

[L6] $(a,b)$ is nonempty when $a < b$, since $a < (a+b)/2 < b$ ([[def-interval]]).

[L7] A constant function $h$ on $[a,b]$ is differentiable at every point $c$ of $[a,b]$ with $h'(c) = 0$: every point of the nondegenerate order-convex set $[a,b]$ is a limit point of it, and the difference quotient of $h$ at $c$ is the constant $0$ on $[a,b] \setminus \{c\}$, whose limit at $c$ is $0$ ([[def-derivative]], [[def-function-limit]]).

## Proof

**Proof technique:** direct.

1.1 The set $[a,b]$ is nonempty and compact, and $f$ is continuous on it. [L1]

1.2 Since $a < b$, the open interval $(a,b)$ is nonempty; fix $m := (a+b)/2 \in (a,b)$. [L6, choose]

2.1 By [L2], applied with $A := K := [a,b]$, fix $p, q \in [a,b]$ with $f(q) \le f(x) \le f(p)$ for every $x \in [a,b]$. [step 1.1, L2, choose]

3.1 **Case A: at least one of $p, q$ lies in $(a,b)$.** Fix such a point and call it $c$. By [L3] the point $c$ is interior to $[a,b]$, and $f$ is differentiable at $c$ because $c \in (a,b)$. By step 2.1 and [L4], $f$ has a local maximum at $c$ if $c$ is the point $p$, and a local minimum at $c$ if it is the point $q$; either way a local extremum. So [L5] gives $f'(c) = 0$, and $c \in (a,b)$. [step 2.1, L3, L4, L5]

3.2 **Case B: neither $p$ nor $q$ lies in $(a,b)$.** A point of $[a,b]$ outside $(a,b)$ satisfies $a \le x \le b$ and not $a < x < b$, hence equals $a$ or $b$; so $p, q \in \{a, b\}$ and, since $f(a) = f(b)$, both $f(p)$ and $f(q)$ equal $f(a)$. By step 2.1, every $x \in [a,b]$ satisfies $f(a) = f(q) \le f(x) \le f(p) = f(a)$, so $f(x) = f(a)$. Thus $f$ is the constant function with value $f(a)$ on $[a,b]$. [step 2.1]

4.1 In case B, [L7] gives that $f$ is differentiable at every point of $[a,b]$ with derivative $0$; in particular $f'(m) = 0$, and $m \in (a,b)$ by step 1.2. [step 1.2, step 3.2, L7]

5.1 The two cases are exhaustive, since either at least one of $p, q$ lies in $(a,b)$ or neither does. Case A supplies a point $c \in (a,b)$ with $f'(c) = 0$ by step 3.1, and case B supplies the point $m$ by step 4.1. [step 3.1, step 4.1] ∎

## Remarks

- **The constant case is not a degenerate nuisance, it is the case where the extremum sits on the boundary.** When $f$ is constant the greatest and least values are attained at the endpoints as well as everywhere else, so nothing forces the extreme value theorem to hand back an interior point; the argument has to produce a point of $(a,b)$ by hand, and any point will do.

- **Why compactness enters at all.** Only through [[thm-extreme-value-r]], and only to know that the greatest and least values are **attained**. A supremum that is not attained is useless here: Fermat's theorem is a statement about a point, not about a bound. That is precisely the hypothesis the companion page's witness removes.

- **Nothing is claimed about how many such $c$ there are, or where.** A single $c$ is produced, and the proof gives no way to locate it; the theorem is an existence statement and is used only as one.
````

