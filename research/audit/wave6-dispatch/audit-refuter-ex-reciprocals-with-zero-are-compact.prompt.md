# Audit proof-refuter brief — Wave 6, step A6

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

## Target item — `ex-reciprocals-with-zero-are-compact`

Normalized current SHA-256: `acf7c8d49523da866b0243eb3dd6a5ddb158e05e4986043bc934b2f304c01f1a`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-reciprocals-with-zero-are-compact
kind: example
title: "$\\{1/k : k \\ge 1\\} \\cup \\{0\\}$ is compact while $\\{1/k : k \\ge 1\\}$ is not closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-heine-borel-characterisation-r, def-limit-point-r, thm-closure-characterisations-r, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, def-open-and-closed-in-r, def-neighbourhood-r, def-bounded-set, thm-well-ordering-principle, lem-finite-set-has-max, def-max-min, lem-of-abs-value, def-ordered-field, def-complete-ordered-field]
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Example 2.21(e))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

Put

$$B \;:=\; \{\, 1/k : k \in \mathbb{N},\ k \ge 1 \,\} \qquad \text{and} \qquad A \;:=\; B \cup \{0\} .$$

The index runs over $k \ge 1$ because $1/0$ is undefined. Then $A$ is compact
([[thm-heine-borel-characterisation-r]]) and $B$ is not closed
([[def-open-and-closed-in-r]]). The single point $0$ is the whole difference:
it is a limit point of $B$ ([[def-limit-point-r]]) that $B$ omits, and adjoining
it turns a non-closed bounded set into a compact one.

## Facts & Assumptions

**Given:** The sets $B := \{\, 1/k : k \ge 1 \,\}$ and $A := B \cup \{0\}$, where $1/k$ denotes the inverse of the canonical natural $k \cdot 1_{\mathbb{R}}$, defined and positive for $k \ge 1$.

[L1] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-bounded-set]]).

[L2] A set is closed exactly when it contains all its limit points; a point is a limit point of $S$ when every punctured neighbourhood of it meets $S$ ([[thm-closure-characterisations-r]], [[def-limit-point-r]]).

[L3] $U$ is open when each of its points has a neighbourhood inside it, and $S$ is closed when $\mathbb{R} \setminus S$ is open; $N_\varepsilon(x) = \{\, y : |y-x| < \varepsilon \,\}$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L5] Canonical naturals are positive and increasing for $k \ge 1$, with $1 \cdot 1_{\mathbb{R}} = 1$; reciprocation of positives is positive and reverses the order, so $1 \le m \le n$ gives $0 < 1/n \le 1/m \le 1$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L6] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L7] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] Absolute value: $|z| = z$ for $z \ge 0$ and $|z| = -z$ for $z < 0$; the order is total and transitive ([[lem-of-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 Every element of $A$ lies in $[0,1]$, and $0$ and $1$ belong to $A$: indeed $1 = 1/1 \in B$, and $0 < 1/k \le 1$ for every $k \ge 1$ by [L5]. In particular $A$ is bounded. [L1, L5]

1.2 $0$ is a limit point of $B$ and $0 \notin B$: given a real $\varepsilon > 0$, [L4] supplies $n \ge 1$ with $1/n < \varepsilon$, and $1/n \in B$ with $1/n \ne 0$, so $1/n$ lies in the punctured neighbourhood of $0$ of radius $\varepsilon$ and meets $B$; and $0 \notin B$ because every $1/k$ is positive by [L5]. [L2, L4, L5]

2.1 Let $x \in \mathbb{R} \setminus A$ with $x < 0$ or $x > 1$. Put $\varepsilon := -x$ in the first case and $\varepsilon := x - 1$ in the second; then $\varepsilon > 0$, and $y \in N_\varepsilon(x)$ gives $y < x + \varepsilon = 0$ in the first case and $y > x - \varepsilon = 1$ in the second, so $y \notin A$ by step 1.1. Hence $N_\varepsilon(x) \cap A = \varnothing$. [step 1.1, L3, L8]

2.2 Let $x \in \mathbb{R} \setminus A$ with $0 \le x \le 1$. Then $x \ne 0$ and $x \ne 1$ by step 1.1, so $0 < x < 1$. The set $\{\, k \in \mathbb{N} : k \ge 1 \text{ and } 1/k < x \,\}$ is nonempty by [L4], so it has a least element $k_0$ by [L6], and $k_0 \ne 1$ since $1/1 = 1 > x$; hence $k_0 \ge 2$ and $k_0 - 1 \ge 1$. By minimality $1/(k_0-1) < x$ fails, so $x \le 1/(k_0-1)$, and $x \ne 1/(k_0-1)$ because $x \notin A$, so $x < 1/(k_0-1)$. Put $\varepsilon := \min\{\, x - 1/k_0,\ 1/(k_0-1) - x \,\} > 0$ by [L7]. Then $N_\varepsilon(x) \cap A = \varnothing$: an element of $A$ is $0$ or $1/m$ with $m \ge 1$; for $0$ one has $|0 - x| = x > \varepsilon$ since $\varepsilon \le x - 1/k_0 < x$; for $m \ge k_0$ one has $1/m \le 1/k_0 \le x - \varepsilon$ by [L5]; and for $1 \le m \le k_0 - 1$ one has $1/m \ge 1/(k_0-1) \ge x + \varepsilon$ by [L5]. In each case the element is at distance at least $\varepsilon$ from $x$. [step 1.1, L3, L4, L5, L6, L7, L8]

2.3 $B$ is not closed: by step 1.2 the point $0$ is a limit point of $B$ that does not lie in $B$, so $B$ does not contain all its limit points and [L2] denies that it is closed. [step 1.2, L2]

3.1 $A$ is closed: every $x \in \mathbb{R} \setminus A$ falls under step 2.1 or step 2.2 by totality of the order, and in either case some $N_\varepsilon(x)$ misses $A$, so $\mathbb{R} \setminus A$ is open. With the boundedness of step 1.1 and [L1], $A$ is compact. [step 1.1, step 2.1, step 2.2, L1, L3, L8]

4.1 So $A = \{\, 1/k : k \ge 1 \,\} \cup \{0\}$ is compact by step 3.1 while $B = \{\, 1/k : k \ge 1 \,\}$ is not closed by step 2.3, hence not compact by [L1]. [step 2.3, step 3.1, L1] ∎

## Remarks

- **$B$ is bounded and not compact, and it fails to be closed by a single
  point.** Adjoining $0$ is what the verification above shows to be enough:
  $A = B \cup \{0\}$ is closed. The same computation, run at a point $x \notin A$
  lying between two consecutive reciprocals, is the one that isolates each
  $1/k$ from the rest of $B$.

- **$A$ is compact and has an isolated point.** Every $1/k$ is isolated in $A$,
  so $A$ is not perfect ([[def-perfect-set-r]]); compactness and perfectness are
  independent properties, and this is a compact set that is countable, which is
  possible exactly because it is not perfect
  ([[thm-perfect-set-uncountable-r]]).

- **The index range matters.** The set is indexed from $k = 1$; $1/0$ does not
  exist. Since $\mathbb{N}$ contains $0$ ([[def-sequence]]), a set written
  $\{1/k : k \in \mathbb{N}\}$ without a restriction would be ill formed, and the
  same care is needed at the threshold $K = n-1$ used in the convergence
  arguments on the parent page.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-heine-borel-characterisation-r",
      "source_section": "Statement",
      "quote": "Let $K \\subseteq \\mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and\nonly if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded\n([[def-bounded-set]]).\n\nThis is the Heine-Borel theorem in the form used everywhere below. The forward\nimplication is [[lem-compact-implies-closed-and-bounded-r]] and spends no\ncompleteness, only the Archimedean property and the existence of maxima of\nfinite sets; the backward implication rests on\n[[thm-heine-borel-r]] and therefore on the completeness of $\\mathbb{R}$, and the\nremarks below record where it fails without completeness.",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field\n([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.\n\nThe notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:\n\n- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-closure-characterisations-r",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with closure $\\overline{A}$ as in\n[[def-interior-closure-boundary-r]] and derived set $A'$ as in\n[[def-limit-point-r]]. Write\n\n$$E \\;:=\\; \\{\\, x \\in \\mathbb{R} : N_\\varepsilon(x) \\cap A \\ne \\varnothing \\text{ for every real } \\varepsilon > 0 \\,\\}$$\n\nfor the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then:\n\n1. $\\overline{A} = E$.\n2. $\\overline{A} = A \\cup A'$.\n3. $\\overline{A}$ is the smallest closed superset of $A$: it is closed, it\n   contains $A$, and it is contained in every closed $F$ with $A \\subseteq F$.\n4. $A$ is closed if and only if $A = \\overline{A}$, if and only if\n   $A' \\subseteq A$.\n\nClaim 3 is the content of the definition of $\\overline{A}$ and is restated here\nso that the four descriptions stand together; claims 1, 2 and 4 are the ones\nthat carry work.",
      "uses": [
        "1.2",
        "2.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "1.2",
        "2.3"
      ]
    },
    {
      "fact": "L3",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "Let $U, F \\subseteq \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]].\n\n- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.\n\nThe whole of the topology of $\\mathbb{R}$ developed on this page rests on this\none definition: closedness is *defined* as openness of the complement, and every\nother description of a closed set on this page is a theorem\n([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).\n\n**$\\varnothing$ and $\\mathbb{R}$ are clopen.** The condition defining openness\nquantifies over the elements of the set, so it holds vacuously for\n$\\varnothing$; and for $x \\in \\mathbb{R}$ one has $N_1(x) \\subseteq \\mathbb{R}$,\nso $\\mathbb{R}$ is open. Since each of the two is the complement of the other,\neach is also closed.\n\n**Every neighbourhood is open.** Let $y \\in N_\\varepsilon(x)$ and put\n$\\delta := \\varepsilon - |y - x|$, which is $> 0$ because\n$y \\in N_\\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives\n$N_\\delta(y) \\subseteq N_\\varepsilon(x)$. So every point of $N_\\varepsilon(x)$\nhas a neighbourhood inside it.\n\n**The four open forms of [[def-interval]] are open sets.** Let $a, b \\in\n\\mathbb{R}$.\n\n- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so\n  $\\delta := \\min\\{x - a,\\ b - x\\}$ is a positive real (the minimum of a\n  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).\n  If $|y - x| < \\delta$ then $y > x - \\delta \\ge x - (x - a) = a$ and\n  $y < x + \\delta \\le x + (b - x) = b$, so $y \\in (a,b)$; hence\n  $N_\\delta(x) \\subseteq (a,b)$.\n- $(a,\\infty)$: for $x > a$ take $\\delta := x - a > 0$; then $|y - x| < \\delta$\n  gives $y > x - \\delta = a$.\n- $(-\\infty,b)$: for $x < b$ take $\\delta := b - x > 0$; then $|y - x| < \\delta$\n  gives $y < x + \\delta = b$.\n- $(-\\infty,\\infty) = \\mathbb{R}$: already treated above.\n\n**The four closed forms of [[def-interval]] are closed sets.** In each case the\ncomplement is shown open directly.\n\n- $[a,b]$: if $x \\notin [a,b]$ then $x < a$ or $x > b$ by trichotomy\n  ([[def-ordered-field]]). If $x < a$, take $\\delta := a - x > 0$; every\n  $y \\in N_\\delta(x)$ has $y < x + \\delta = a$, hence $y \\notin [a,b]$. If\n  $x > b$, take $\\delta := x - b > 0$; every $y \\in N_\\delta(x)$ has\n  $y > x - \\delta = b$, hence $y \\notin [a,b]$. So\n  $\\mathbb{R} \\setminus [a,b]$ is open.\n- $[a,\\infty)$: its complement is $(-\\infty,a)$, which is open by the previous\n  paragraph.\n- $(-\\infty,b]$: its complement is $(b,\\infty)$, which is open.\n- $(-\\infty,\\infty) = \\mathbb{R}$: its complement is $\\varnothing$, which is\n  open.",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "1.2",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "1.2",
        "2.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.1",
        "1.2",
        "2.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.1",
        "1.2",
        "2.2"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-well-ordering-principle",
      "source_section": "Statement",
      "quote": "Every nonempty subset $S \\subseteq \\mathbb{N}$ has a least element: there is $\\ell \\in S$ with $\\ell \\le s$ for all $s \\in S$.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the\nset $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]).\n\nWhat is proved below is exactly the displayed statement, by induction on $n$.\n\nThe usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a\nmaximum and a minimum*, follows once one identifies the nonempty finite subsets\nof $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That\nidentification is recorded as a stipulation in the Given below, because this page\nhas no definition of finiteness to prove it against. **It is discharged, not\nmerely assumed**: [[lem-finite-subsets-listable]] proves that the two\ndescriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is\nrecorded in `justified_by` rather than in `deps`, since it is about the sets this\nlemma quantifies over and therefore depends on this one. This is what licenses\nthe notation\n$\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of\n**real** numbers from this page onwards.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L7",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$.\n\n- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.\n\nA set has at most one maximum: if $m_1$ and $m_2$ are both maxima then\n$m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so\n$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy\naxiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).\nThe same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Every element of $A$ lies in $[0,1]$, and $0$ and $1$ belong to $A$: indeed $1 = 1/1 \\in B$, and $0 < 1/k \\le 1$ for every $k \\ge 1$ by [L5]. In particular $A$ is bounded.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L5"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "$0$ is a limit point of $B$ and $0 \\notin B$: given a real $\\varepsilon > 0$, [L4] supplies $n \\ge 1$ with $1/n < \\varepsilon$, and $1/n \\in B$ with $1/n \\ne 0$, so $1/n$ lies in the punctured neighbourhood of $0$ of radius $\\varepsilon$ and meets $B$; and $0 \\notin B$ because every $1/k$ is positive by [L5].",
      "step": "1.2",
      "inputs": [
        "L2",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Let $x \\in \\mathbb{R} \\setminus A$ with $x < 0$ or $x > 1$. Put $\\varepsilon := -x$ in the first case and $\\varepsilon := x - 1$ in the second; then $\\varepsilon > 0$, and $y \\in N_\\varepsilon(x)$ gives $y < x + \\varepsilon = 0$ in the first case and $y > x - \\varepsilon = 1$ in the second, so $y \\notin A$ by step 1.1. Hence $N_\\varepsilon(x) \\cap A = \\varnothing$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L3",
        "L8"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Let $x \\in \\mathbb{R} \\setminus A$ with $0 \\le x \\le 1$. Then $x \\ne 0$ and $x \\ne 1$ by step 1.1, so $0 < x < 1$. The set $\\{\\, k \\in \\mathbb{N} : k \\ge 1 \\text{ and } 1/k < x \\,\\}$ is nonempty by [L4], so it has a least element $k_0$ by [L6], and $k_0 \\ne 1$ since $1/1 = 1 > x$; hence $k_0 \\ge 2$ and $k_0 - 1 \\ge 1$. By minimality $1/(k_0-1) < x$ fails, so $x \\le 1/(k_0-1)$, and $x \\ne 1/(k_0-1)$ because $x \\notin A$, so $x < 1/(k_0-1)$. Put $\\varepsilon := \\min\\{\\, x - 1/k_0,\\ 1/(k_0-1) - x \\,\\} > 0$ by [L7]. Then $N_\\varepsilon(x) \\cap A = \\varnothing$: an element of $A$ is $0$ or $1/m$ with $m \\ge 1$; for $0$ one has $|0 - x| = x > \\varepsilon$ since $\\varepsilon \\le x - 1/k_0 < x$; for $m \\ge k_0$ one has $1/m \\le 1/k_0 \\le x - \\varepsilon$ by [L5]; and for $1 \\le m \\le k_0 - 1$ one has $1/m \\ge 1/(k_0-1) \\ge x + \\varepsilon$ by [L5]. In each case the element is at distance at least $\\varepsilon$ from $x$.",
      "step": "2.2",
      "inputs": [
        "step 1.1",
        "L3",
        "L4",
        "L5",
        "L6",
        "L7",
        "L8"
      ]
    },
    {
      "id": "step-2-3",
      "claim": "$B$ is not closed: by step 1.2 the point $0$ is a limit point of $B$ that does not lie in $B$, so $B$ does not contain all its limit points and [L2] denies that it is closed.",
      "step": "2.3",
      "inputs": [
        "step 1.2",
        "L2"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "$A$ is closed: every $x \\in \\mathbb{R} \\setminus A$ falls under step 2.1 or step 2.2 by totality of the order, and in either case some $N_\\varepsilon(x)$ misses $A$, so $\\mathbb{R} \\setminus A$ is open. With the boundedness of step 1.1 and [L1], $A$ is compact.",
      "step": "3.1",
      "inputs": [
        "step 1.1",
        "step 2.1",
        "step 2.2",
        "L1",
        "L3",
        "L8"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "So $A = \\{\\, 1/k : k \\ge 1 \\,\\} \\cup \\{0\\}$ is compact by step 3.1 while $B = \\{\\, 1/k : k \\ge 1 \\,\\}$ is not closed by step 2.3, hence not compact by [L1].",
      "step": "4.1",
      "inputs": [
        "step 2.3",
        "step 3.1",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The ex-reciprocals-with-zero-are-compact statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The statement and step 2.2 explicitly treat the equality, singleton, constant, or nonempty degeneracy."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The ex-reciprocals-with-zero-are-compact statement has no interval or extended-real endpoint convention."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The ex-reciprocals-with-zero-are-compact proof makes no selection from a set whose nonemptiness needs a separate discharge."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The ex-reciprocals-with-zero-are-compact statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The ex-reciprocals-with-zero-are-compact statement is not a biconditional requiring a reverse implication."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": null,
    "notes": "Reserved for the independent Alpha proof-refuter when risk routing is run after A3."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-heine-borel-characterisation-r",
    "declared_target": "thm-heine-borel-characterisation-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-closure-characterisations-r",
    "declared_target": "thm-closure-characterisations-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-open-and-closed-in-r",
    "declared_target": "def-open-and-closed-in-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-finite-set-has-max",
    "declared_target": "lem-finite-set-has-max",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-reciprocals-with-zero-are-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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

## Full text of every cited or declared item (19)

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

### `def-limit-point-r`

````markdown
---
id: def-limit-point-r
kind: definition
title: "Limit point, isolated point, adherent point, derived set, and dense subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-open-and-closed-in-r, def-interior-closure-boundary-r]
justified_by: []
aliases: [def-accumulation-point-r, def-derived-set-r, def-dense-in-r]
landmark: true
short: "limit point, isolated point, dense"
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
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and $x \in \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]] and closure as in
[[def-interior-closure-boundary-r]].

- $x$ is an **adherent point** of $A$ when $N_\varepsilon(x) \cap A \ne
  \varnothing$ for every real $\varepsilon > 0$.
- $x$ is a **limit point** (or *accumulation point*) of $A$ when
  $N^{*}_\varepsilon(x) \cap A \ne \varnothing$ for every real
  $\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.
- $x$ is an **isolated point** of $A$ when $x \in A$ and there is a real
  $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \{x\}$.
- The **derived set** of $A$ is
  $$A' \;:=\; \{\, x \in \mathbb{R} : x \text{ is a limit point of } A \,\}.$$
- $A$ is **dense in $\mathbb{R}$** when $\overline{A} = \mathbb{R}$.

**A limit point is an adherent point**, since $N^{*}_\varepsilon(x) \subseteq
N_\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since
$x \in N_\varepsilon(x) \cap A$ ([[def-neighbourhood-r]]). So the adherent
points of $A$ are exactly the points of $A \cup A'$, a statement proved as part
of [[thm-closure-characterisations-r]].

**Limit point and isolated point are exact opposites inside $A$.** For
$x \in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point
of $A$. Indeed $N_\varepsilon(x) \cap A = \{x\}$ says precisely that
$N^{*}_\varepsilon(x) \cap A = \varnothing$, because $x$ itself always lies in
$N_\varepsilon(x) \cap A$ when $x \in A$; so the existence of an $\varepsilon$
witnessing isolation is the negation of the condition defining a limit point.
A point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and
never both.

**A limit point need not belong to the set, and a point of the set need not be a
limit point.** Both possibilities occur, and the two examples that matter later
are $0$, which is a limit point of $\{\, 1/k : k \ge 1 \,\}$ without belonging
to it, and $0$ again, which belongs to $\{0\} \cup [1,2]$ as an isolated point.

## Remarks

- **Terminology: *limit point* here is about a set, never about a sequence.**
  This library reserves *subsequential limit* for the sequential notion
  ([[def-subsequential-limit]]), and the two are genuinely different: the
  constant sequence $x_k = 0$ has $0$ as a subsequential limit, while its set of
  values $\{0\}$ has no limit point at all. The distinction is the one
  [[def-subsequential-limit]] records under "Terminology", and it is respected
  throughout this page.

- **Density is defined through the closure, not through intervals.** Saying
  $\overline{A} = \mathbb{R}$ is equivalent to saying that every nonempty open
  subset of $\mathbb{R}$ meets $A$, and also to saying that every neighbourhood
  of every real meets $A$; the equivalences follow from
  [[thm-closure-characterisations-r]] and are used in that form in
  [[lem-q-and-irrationals-dense-r]].

- **The derived set need not be comparable with the set.** It can be strictly
  larger, as for $\mathbb{Q}$: every punctured neighbourhood of any real
  contains a rational, since density supplies one strictly between $x$ and
  $x + \varepsilon$ ([[lem-q-and-irrationals-dense-r]]), so the derived set of
  $\mathbb{Q}$ is all of $\mathbb{R}$. It can be strictly smaller, as for
  $\{0\}$, whose derived set is empty; and it can be neither, as for
  $\{0\} \cup (1,2)$, whose derived set is $[1,2]$, a set containing points
  outside the original and omitting the point $0$ of it. A closed set satisfying
  $A \subseteq A'$ is called perfect ([[def-perfect-set-r]]).
````

### `def-max-min`

````markdown
---
id: def-max-min
kind: definition
title: "Maximum and minimum of a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field]
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
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

## Remarks

- A maximum is precisely an upper bound of $S$ ([[def-complete-ordered-field]])
  that happens to lie in $S$; a minimum is a lower bound of $S$
  ([[def-bounded-set]]) that lies in $S$. In particular a set with a maximum is
  bounded above and a set with a minimum is bounded below.
- The empty set has neither a maximum nor a minimum, because the requirement
  $m \in S$ cannot be met.
- The membership requirement $m \in S$ is exactly what separates a maximum from a
  supremum, and it is the theme of this page. A supremum is a bound on the set
  and is not asked to belong to it; a maximum is an element of the set. The two
  agree exactly when the supremum happens to be attained ([[lem-max-is-sup]]),
  and they genuinely differ in general ([[fs-sup-belongs-to-set]]).
- Every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum
  ([[lem-finite-set-has-max]]), which is what licenses the notation
  $\max\{a_1, \dots, a_n\}$. Infinite sets need not: the failure of attainment is
  an infinitary phenomenon.
````

### `def-neighbourhood-r`

````markdown
---
id: def-neighbourhood-r
kind: definition
title: "The $\\varepsilon$-neighbourhood and the punctured $\\varepsilon$-neighbourhood of a point of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-order, def-interval, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, def-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
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
    - title: "Neighbourhood (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18(a))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.1 and §1.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]) and its absolute value ([[def-abs-value]]).

Let $x \in \mathbb{R}$ and let $\varepsilon \in \mathbb{R}$ with
$\varepsilon > 0$. The **$\varepsilon$-neighbourhood of $x$** is

$$N_\varepsilon(x) \;:=\; \{\, y \in \mathbb{R} : |y - x| < \varepsilon \,\},$$

and the **punctured $\varepsilon$-neighbourhood of $x$** is

$$N^{*}_\varepsilon(x) \;:=\; N_\varepsilon(x) \setminus \{x\} \;=\; \{\, y \in \mathbb{R} : 0 < |y - x| < \varepsilon \,\}.$$

The two descriptions of $N^{*}_\varepsilon(x)$ agree because $|y - x| = 0$ holds
exactly when $y = x$ ([[lem-of-abs-value]]).

**A neighbourhood is an open interval.** For every $x$ and every
$\varepsilon > 0$,

$$N_\varepsilon(x) \;=\; (x - \varepsilon,\ x + \varepsilon),$$

the interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for
$\varepsilon > 0$, the equivalence $|y - x| < \varepsilon \iff -\varepsilon <
y - x < \varepsilon$, and adding $x$ throughout turns the right-hand side into
$x - \varepsilon < y < x + \varepsilon$ ([[def-ordered-field]]).

**The centre lies in its own neighbourhoods.** $x \in N_\varepsilon(x)$, since
$|x - x| = |0| = 0 < \varepsilon$ ([[lem-of-abs-value]]).

**Punctured neighbourhoods are never empty.** The element
$y := x + \varepsilon/2$ satisfies $|y - x| = \varepsilon/2$, which is
$> 0$ and $< \varepsilon$, so $y \in N^{*}_\varepsilon(x)$
([[lem-of-abs-value]], [[def-ordered-field]]).

**Monotonicity in the radius.** If $0 < \delta \le \varepsilon$ then
$N_\delta(x) \subseteq N_\varepsilon(x)$, because $|y - x| < \delta \le
\varepsilon$ ([[def-ordered-field]]).

**Nesting at an interior point.** If $y \in N_\varepsilon(x)$ and
$0 < \delta \le \varepsilon - |y - x|$, then

$$N_\delta(y) \;\subseteq\; N_\varepsilon(x).$$

Indeed for $z \in N_\delta(y)$ the triangle inequality
([[lem-of-triangle-inequality]]) gives
$|z - x| = |(z - y) + (y - x)| \le |z - y| + |y - x| < \delta + |y - x| \le
\varepsilon$. Note that $\varepsilon - |y - x| > 0$ precisely because
$y \in N_\varepsilon(x)$, so such a $\delta$ always exists.

## Remarks

- **The radius is a real number, not a rational.** Nothing on this page tests a
  condition against rational radii only. That convention belongs to
  [[def-real-limit]], where the quantifier is over rational $\varepsilon$ and
  the passage between the rational and the real form is the sanctioned remark of
  [[def-sequence]]. Here $\varepsilon$ ranges over the positive reals
  throughout, and every statement above is proved for an arbitrary positive
  real.

- **Why the punctured version is separated out.** A limit point of a set is a
  point every punctured neighbourhood of which meets the set
  ([[def-limit-point-r]]), and deleting the centre is exactly what stops a point
  of the set from qualifying automatically. The unpunctured condition defines
  the weaker notion of an adherent point, and the difference between the two is
  precisely an isolated point.

- **Nesting is the workhorse.** Almost every openness verification on this page
  has the shape "given $y$ in the set, shrink the radius by the distance
  already travelled", which is the nesting property above. It is recorded here
  once so that no later proof has to redo the triangle inequality in passing.
````

### `def-open-and-closed-in-r`

````markdown
---
id: def-open-and-closed-in-r
kind: definition
title: "Open subset of $\\mathbb{R}$ (every point has a neighbourhood inside it), closed subset (complement open), and clopen"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-interval, def-complete-ordered-field, def-ordered-field, def-real-order, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: true
short: "open, closed, clopen in $\\mathbb{R}$"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $U, F \subseteq \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]].

- $U$ is **open** when for every $x \in U$ there is a real $\varepsilon > 0$
  with $N_\varepsilon(x) \subseteq U$.
- $F$ is **closed** when its complement $\mathbb{R} \setminus F$ is open.
- A set is **clopen** when it is both open and closed.

The whole of the topology of $\mathbb{R}$ developed on this page rests on this
one definition: closedness is *defined* as openness of the complement, and every
other description of a closed set on this page is a theorem
([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).

**$\varnothing$ and $\mathbb{R}$ are clopen.** The condition defining openness
quantifies over the elements of the set, so it holds vacuously for
$\varnothing$; and for $x \in \mathbb{R}$ one has $N_1(x) \subseteq \mathbb{R}$,
so $\mathbb{R}$ is open. Since each of the two is the complement of the other,
each is also closed.

**Every neighbourhood is open.** Let $y \in N_\varepsilon(x)$ and put
$\delta := \varepsilon - |y - x|$, which is $> 0$ because
$y \in N_\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives
$N_\delta(y) \subseteq N_\varepsilon(x)$. So every point of $N_\varepsilon(x)$
has a neighbourhood inside it.

**The four open forms of [[def-interval]] are open sets.** Let $a, b \in
\mathbb{R}$.

- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so
  $\delta := \min\{x - a,\ b - x\}$ is a positive real (the minimum of a
  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).
  If $|y - x| < \delta$ then $y > x - \delta \ge x - (x - a) = a$ and
  $y < x + \delta \le x + (b - x) = b$, so $y \in (a,b)$; hence
  $N_\delta(x) \subseteq (a,b)$.
- $(a,\infty)$: for $x > a$ take $\delta := x - a > 0$; then $|y - x| < \delta$
  gives $y > x - \delta = a$.
- $(-\infty,b)$: for $x < b$ take $\delta := b - x > 0$; then $|y - x| < \delta$
  gives $y < x + \delta = b$.
- $(-\infty,\infty) = \mathbb{R}$: already treated above.

**The four closed forms of [[def-interval]] are closed sets.** In each case the
complement is shown open directly.

- $[a,b]$: if $x \notin [a,b]$ then $x < a$ or $x > b$ by trichotomy
  ([[def-ordered-field]]). If $x < a$, take $\delta := a - x > 0$; every
  $y \in N_\delta(x)$ has $y < x + \delta = a$, hence $y \notin [a,b]$. If
  $x > b$, take $\delta := x - b > 0$; every $y \in N_\delta(x)$ has
  $y > x - \delta = b$, hence $y \notin [a,b]$. So
  $\mathbb{R} \setminus [a,b]$ is open.
- $[a,\infty)$: its complement is $(-\infty,a)$, which is open by the previous
  paragraph.
- $(-\infty,b]$: its complement is $(b,\infty)$, which is open.
- $(-\infty,\infty) = \mathbb{R}$: its complement is $\varnothing$, which is
  open.

## Remarks

- **Open and closed are not opposites, and not exhaustive.** A set may be
  neither: the half-open interval $[0,1)$ is neither open nor closed
  ([[fs-every-set-is-open-or-closed]]). A set may be both: $\varnothing$ and
  $\mathbb{R}$ are clopen. The words are inherited from the interval terminology
  of [[def-interval]], and the agreement between the two usages is exactly the
  two lists verified above: an interval called open there is an open set here,
  and an interval called closed there is a closed set here.

- **A clopen set is a disconnection waiting to happen.** If $A$ is clopen and
  both $A$ and $\mathbb{R} \setminus A$ are nonempty, then each of the two is
  its own closure, so the two are separated in the sense of
  [[def-connected-r]] and $\mathbb{R} = A \cup (\mathbb{R} \setminus A)$ is a
  disconnection. Since $\mathbb{R}$ is order-convex it is connected
  ([[thm-connected-subsets-of-r-are-intervals]]), so no such $A$ exists:
  $\varnothing$ and $\mathbb{R}$ are the only clopen subsets of $\mathbb{R}$.

- **The half-open forms are the ones the two lists omit**, and deliberately so:
  $[a,b)$ and $(a,b]$ with $a < b$ are neither open nor closed as subsets of
  $\mathbb{R}$.

- **The radius depends on the point.** Openness asks for *some* $\varepsilon$
  at each point, and that $\varepsilon$ may shrink to nothing as the point
  approaches the edge of the set, as the computation for $(a,b)$ shows: there
  $\delta = \min\{x - a,\ b - x\}$ tends to $0$ as $x$ tends to either endpoint.
  Asking instead for a single $\varepsilon$ that works simultaneously at every
  point of the set is a strictly stronger condition, and it is not what is
  defined here; nothing on this page uses it.
````

### `def-ordered-field`

````markdown
---
id: def-ordered-field
kind: definition
title: "Ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field]
aliases: []
landmark: true
short: "ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
---

## Definition

An **ordered field** is a field $F$ ([[def-field]]) together with a subset
$P \subseteq F$, the set of **positive** elements (the *positive cone*),
satisfying:

- **(O1) Trichotomy.** For each $x \in F$, exactly one of the following holds:
  $x \in P$, or $x = 0$, or $-x \in P$.
- **(O2) Closure.** If $x, y \in P$ then $x + y \in P$ and $x \cdot y \in P$.

We write $x > 0$ for $x \in P$ (read "$x$ is positive"), and define the order by

$$a < b \;:\Longleftrightarrow\; b - a \in P, \qquad a \le b \;:\Longleftrightarrow\; a < b \text{ or } a = b.$$

Thus $a > b$ means $b < a$, and $a \ge b$ means $b \le a$. An element $x$ with
$-x \in P$ (equivalently $x < 0$) is called **negative**.

## Remarks

- By trichotomy applied to $b - a$, for any $a, b$ exactly one of $a < b$,
  $a = b$, $a > b$ holds; this makes $\le$ a total order.
- (O2) says the positives are closed under addition and multiplication: sums and
  products of positives are positive.
- The rationals ([[thm-rat-ordered-field]]) and both constructions of the reals
  ([[thm-reals-ordered-field]], [[thm-reals-dedekind-ordered-field]]) are ordered
  fields, so every fact proved here from (O1)-(O2) holds in each of them.
````

### `def-perfect-set-r`

````markdown
---
id: def-perfect-set-r
kind: definition
title: "Perfect subset of $\\mathbb{R}$: closed with no isolated points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-point-r, def-open-and-closed-in-r, thm-closure-characterisations-r]
justified_by: []
forward_refs: [cex-closed-set-with-an-isolated-point-is-not-perfect, ex-closed-interval-is-perfect]
aliases: []
landmark: false
short: "perfect set"
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
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18(h))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "A. Erdman, Companion to Real Analysis"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
pipeline_run: null
---

## Definition

A set $P \subseteq \mathbb{R}$ is **perfect** when

- $P$ is closed ([[def-open-and-closed-in-r]]), and
- $P$ has no isolated points ([[def-limit-point-r]]): no $x \in P$ admits a real
  $\varepsilon > 0$ with $N_\varepsilon(x) \cap P = \{x\}$.

**Equivalently, $P$ is closed and $P \subseteq P'$.** By
[[def-limit-point-r]], a point of $P$ is isolated in $P$ exactly when it is not
a limit point of $P$, so "no point of $P$ is isolated in $P$" says precisely
that every point of $P$ is a limit point of $P$, that is, $P \subseteq P'$.
Combined with the characterisation of closedness as $P' \subseteq P$
([[thm-closure-characterisations-r]]), a perfect set is exactly a set with
$P = P'$, though only the two conditions above are used below.

## Remarks

- **Both conditions are needed and neither implies the other.** The set
  $\{0\} \cup [1,2]$ is closed and has the isolated point $0$, so it is not
  perfect ([[cex-closed-set-with-an-isolated-point-is-not-perfect]]); the open
  interval $(0,1)$ has no isolated points and is not closed, so it is not
  perfect either.

- **$\varnothing$ is perfect**, vacuously: it is closed and has no points at
  all, hence no isolated ones. This is why
  [[thm-perfect-set-uncountable-r]] carries the hypothesis that $P$ is nonempty:
  the empty set is perfect and countable.

- **A nonempty perfect set is forced to be large.** It is uncountable
  ([[thm-perfect-set-uncountable-r]]), and the simplest examples are the
  nondegenerate closed intervals ([[ex-closed-interval-is-perfect]]). A perfect
  set need not contain any interval, the Cantor set being the standard example
  of that; it is not constructed anywhere in this library, and the statement is
  recorded here as orientation only, on the references above.
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

### `lem-finite-set-has-max`

````markdown
---
id: lem-finite-set-has-max
kind: lemma
title: "Every nonempty finite set of reals has a maximum and a minimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-max-min, thm-induction-principle, def-nat-addition, def-complete-ordered-field, def-ordered-field]
justified_by: [lem-finite-subsets-listable]
forward_refs: [def-countable]
aliases: []
landmark: false
proof_strategy: induction
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
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

## Facts & Assumptions

**Given:** Real numbers $a_0, a_1, a_2, \dots$; for $n \in \mathbb{N}$ write $F_n := \{a_0, \dots, a_n\}$, so that $F_{n+1} = F_n \cup \{a_{n+1}\}$. A subset of $\mathbb{R}$ is nonempty and finite exactly when it equals $F_n$ for some $n \in \mathbb{N}$ and some choice of $a_0, \dots, a_n$.

[A1] $P(n)$ denotes the statement: for all $a_0, \dots, a_n \in \mathbb{R}$, the set $F_n$ has a maximum and a minimum.

[L1] Maximum and minimum: $m = \max X$ means $m \in X$ and $x \le m$ for all $x \in X$; $m = \min X$ means $m \in X$ and $m \le x$ for all $x \in X$; each is unique when it exists ([[def-max-min]]).

[L2] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L3] The order on $\mathbb{R}$ is reflexive, total and transitive: $a \le a$; for all $a, b$ exactly one of $a < b$, $a = b$, $b < a$ holds, so at least one of $a \le b$ and $b \le a$ holds; and $a \le b$ with $b \le c$ gives $a \le c$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Base case: $F_0 = \{a_0\}$, and $a_0 \in F_0$ with $a_0 \le a_0$ by reflexivity, so $a_0$ is both a maximum and a minimum of $F_0$; hence $P(0)$ holds. [base, A1, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that is, for all reals $a_0, \dots, a_n$ the set $F_n$ has a maximum and a minimum. [ih, A1]

2.1 Let $a_0, \dots, a_{n+1} \in \mathbb{R}$ be arbitrary; by the inductive hypothesis the set $F_n$ has a maximum $M$ and a minimum $m$, and $F_{n+1} = F_n \cup \{a_{n+1}\}$. [step 1.2, L1]

3.1 By totality at least one of $a_{n+1} \le M$ and $M \le a_{n+1}$ holds. If $a_{n+1} \le M$, then $M \in F_n \subseteq F_{n+1}$, every element of $F_n$ is $\le M$ because $M = \max F_n$, and $a_{n+1} \le M$ as well, so $M$ is a maximum of $F_{n+1}$. If $M \le a_{n+1}$, then $a_{n+1} \in F_{n+1}$, every $x \in F_n$ satisfies $x \le M \le a_{n+1}$ hence $x \le a_{n+1}$ by transitivity, and $a_{n+1} \le a_{n+1}$, so $a_{n+1}$ is a maximum of $F_{n+1}$. Either way $F_{n+1}$ has a maximum. [step 2.1, L1, L3]

3.2 Dually, at least one of $m \le a_{n+1}$ and $a_{n+1} \le m$ holds. If $m \le a_{n+1}$, then $m \in F_{n+1}$ and every element of $F_{n+1}$ is $\ge m$, so $m$ is a minimum of $F_{n+1}$. If $a_{n+1} \le m$, then $a_{n+1} \in F_{n+1}$ and every $x \in F_n$ satisfies $a_{n+1} \le m \le x$ hence $a_{n+1} \le x$ by transitivity, so $a_{n+1}$ is a minimum of $F_{n+1}$. Either way $F_{n+1}$ has a minimum. [step 2.1, L1, L3]

4.1 Since $a_0, \dots, a_{n+1}$ were arbitrary, $F_{n+1}$ has a maximum and a minimum for every such list, that is, $P(n)$ implies $P(n+1)$. [step 3.1, step 3.2, A1]

5.1 The base case and the inductive step give $P(n)$ for every $n \in \mathbb{N}$ by the induction principle; since a nonempty finite subset of $\mathbb{R}$ is exactly a set of the form $F_n$, every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum. [step 1.1, step 4.1, given, L2, discharge-induction] ∎

## Remarks

- **Where the stipulation is discharged.** Finiteness itself is defined later, in [[def-countable]], as equinumerosity with a von Neumann natural; with that definition in hand [[lem-finite-subsets-listable]] proves that a subset of $\mathbb{R}$ is nonempty and finite exactly when it is listable as $\{a_0, \dots, a_n\}$, which is the Given below. So nothing on this page rests on an assumption that is never paid for; it is paid for later, and the payment is recorded in `justified_by`.
- **Only the total order is used, never completeness.** The base case needs reflexivity, the inductive step needs totality and transitivity, and the induction itself runs over $\mathbb{N}$. The same induction works in any totally ordered field; what is recorded here is its specialisation to $\mathbb{R}$.
- Nonemptiness is essential: $\emptyset$ is finite and has no maximum ([[def-max-min]]). Finiteness is essential too: $\{x \in \mathbb{R} : 0 < x < 1\}$ is bounded and has no maximum ([[fs-sup-belongs-to-set]]).
- Combined with claim 1 of [[lem-max-is-sup]], this says every nonempty finite subset of $\mathbb{R}$ has a supremum, and that the supremum is attained, because it equals the maximum. The infimum half is *not* part of [[lem-max-is-sup]], which speaks only of maxima and suprema; it follows from the minimum proved here together with the reflection identity $\inf X = -\sup(-X)$ ([[lem-reflection]], [[thm-infimum-property]]).
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

### `lem-of-inverse-positive`

````markdown
---
id: lem-of-inverse-positive
kind: lemma
title: "Inverses of positives are positive, and reciprocation reverses order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordered-field, lem-of-sign-rules, cor-of-one-positive]
aliases: []
landmark: false
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
    - title: "University of Innsbruck notes: Ordered fields"
      url: "https://www.uibk.ac.at/media/filer_public/28/02/280225fd-dde6-4e9c-bff6-baad33ff4a05/ragen.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b \in F$.

[L1] $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and for $x \neq 0$ exactly one of $x \in P$, $-x \in P$ holds ([[def-ordered-field]]).

[L2] Sign rules: a product of a positive and a negative is negative, a product of two positives is positive, and for $c > 0$ one has $a < b \iff ac < bc$ ([[lem-of-sign-rules]]).

[L3] $0 < 1$; in particular $1 \neq 0$ ([[cor-of-one-positive]]).

[L4] $P$ is closed under addition, so $<$ is transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$, so $a \neq 0$ and its inverse $a^{-1}$ exists with $a \cdot a^{-1} = 1$; moreover $a^{-1} \neq 0$, since $a^{-1}$ has $a$ as its inverse while $0$ is non-invertible ($1 \neq 0$ by L3). [assume-hyp, L1, L3]

2.1 By trichotomy $a^{-1} \in P$ or $-a^{-1} \in P$; if $-a^{-1} \in P$, then $a > 0$ and $a^{-1} < 0$ give $a \cdot a^{-1} < 0$ by the sign rules, i.e. $1 < 0$, contradicting $0 < 1$; hence $a^{-1} \in P$, i.e. $a^{-1} > 0$, proving claim 1. [step 1.1, L2, L3, L1]

3.1 Assume $0 < a < b$; then $0 < b$ by transitivity, so by claim 1 both $a^{-1} > 0$ and $b^{-1} > 0$, and the sign rules give $a^{-1} b^{-1} > 0$. [assume-hyp, step 2.1, L4, L2, L1]

4.1 Multiplying $a < b$ by the positive $a^{-1} b^{-1}$ via the sign rules gives $a (a^{-1} b^{-1}) < b (a^{-1} b^{-1})$; since $a a^{-1} = 1$ and $b b^{-1} = 1$, this simplifies to $b^{-1} < a^{-1}$. [step 3.1, L2, algebra]

5.1 Together with $b^{-1} > 0$ from step 3.1, we conclude $0 < b^{-1} < a^{-1}$, proving claim 2. [step 3.1, step 4.1] ∎
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

### `thm-closure-characterisations-r`

````markdown
---
id: thm-closure-characterisations-r
kind: theorem
title: "The closure equals the set together with its limit points, equals the set of points every neighbourhood of which meets it, and is the smallest closed superset; a set is closed iff it contains its limit points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-interior-closure-boundary-r, def-limit-point-r, def-open-and-closed-in-r, thm-open-set-algebra-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "$\\overline{A} = A \\cup A'$"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.27)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, with closure $\overline{A}$ as in
[[def-interior-closure-boundary-r]] and derived set $A'$ as in
[[def-limit-point-r]]. Write

$$E \;:=\; \{\, x \in \mathbb{R} : N_\varepsilon(x) \cap A \ne \varnothing \text{ for every real } \varepsilon > 0 \,\}$$

for the set of adherent points of $A$ ([[def-neighbourhood-r]]). Then:

1. $\overline{A} = E$.
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is the smallest closed superset of $A$: it is closed, it
   contains $A$, and it is contained in every closed $F$ with $A \subseteq F$.
4. $A$ is closed if and only if $A = \overline{A}$, if and only if
   $A' \subseteq A$.

Claim 3 is the content of the definition of $\overline{A}$ and is restated here
so that the four descriptions stand together; claims 1, 2 and 4 are the ones
that carry work.

## Facts & Assumptions

**Given:** A subset $A \subseteq \mathbb{R}$, and the set $E$ of adherent points of $A$ as displayed in the Statement.

[L1] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $F$ is closed when $\mathbb{R} \setminus F$ is open ([[def-open-and-closed-in-r]]).

[L2] $x \in N_\varepsilon(x)$; $N^{*}_\varepsilon(x) = N_\varepsilon(x) \setminus \{x\} \subseteq N_\varepsilon(x)$; and if $y \in N_\varepsilon(x)$ then $\delta := \varepsilon - |y - x| > 0$ and $N_\delta(y) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L3] $\overline{A}$ is the intersection of the nonempty family of closed supersets of $A$; it is closed, it contains $A$, and it is contained in every closed superset of $A$ ([[def-interior-closure-boundary-r]], [[thm-open-set-algebra-r]]).

[L4] $x$ is an adherent point of $A$ when every $N_\varepsilon(x)$ meets $A$, a limit point when every $N^{*}_\varepsilon(x)$ meets $A$, and $A'$ is the set of limit points ([[def-limit-point-r]]).

## Proof

**Proof technique:** direct.

1.1 $A \subseteq E$: for $x \in A$ and any $\varepsilon > 0$ one has $x \in N_\varepsilon(x) \cap A$, so that intersection is nonempty. [L2, L4]

1.2 Let $x \in \mathbb{R} \setminus E$; by the definition of $E$ there is a real $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \varnothing$. [L4, choose]

1.3 Let $F$ be closed with $A \subseteq F$, and let $x \in \mathbb{R} \setminus F$; since $\mathbb{R} \setminus F$ is open there is a real $\eta > 0$ with $N_\eta(x) \subseteq \mathbb{R} \setminus F$. [L1, choose]

2.1 For every $y \in N_\varepsilon(x)$ the radius $\delta := \varepsilon - |y - x|$ is positive and $N_\delta(y) \subseteq N_\varepsilon(x)$, so $N_\delta(y) \cap A = \varnothing$ and $y \notin E$; hence $N_\varepsilon(x) \subseteq \mathbb{R} \setminus E$, and since $x$ was an arbitrary point of $\mathbb{R} \setminus E$ that set is open, that is, $E$ is closed. [step 1.2, L1, L2, L4]

2.2 From $N_\eta(x) \subseteq \mathbb{R} \setminus F \subseteq \mathbb{R} \setminus A$ we get $N_\eta(x) \cap A = \varnothing$, so $x \notin E$; hence $\mathbb{R} \setminus F \subseteq \mathbb{R} \setminus E$, that is, $E \subseteq F$, for every closed $F \supseteq A$. [step 1.3, L4]

3.1 By steps 1.1 and 2.1 the set $E$ is a closed superset of $A$, so $\overline{A} \subseteq E$ by the leastness in [L3]; and $\overline{A}$ is itself a closed superset of $A$ by [L3], so step 2.2 applied to $F = \overline{A}$ gives $E \subseteq \overline{A}$. Hence $\overline{A} = E$, which is claim 1. [step 1.1, step 2.1, step 2.2, L3]

4.1 $E = A \cup A'$: if $x \in E$ and $x \notin A$ then for every $\varepsilon > 0$ some $a \in N_\varepsilon(x) \cap A$ exists, and $a \ne x$ because $x \notin A$, so $a \in N^{*}_\varepsilon(x) \cap A$ and $x \in A'$; conversely $A \subseteq E$ by step 1.1, and $A' \subseteq E$ because $N^{*}_\varepsilon(x) \subseteq N_\varepsilon(x)$. Combining with step 3.1 gives $\overline{A} = A \cup A'$, which is claim 2. [step 1.1, step 3.1, L2, L4]

5.1 Claim 4: if $A$ is closed then $A$ is a closed superset of itself, so $\overline{A} \subseteq A$ by [L3], while $A \subseteq \overline{A}$ by [L3], whence $A = \overline{A}$; conversely if $A = \overline{A}$ then $A$ is closed because $\overline{A}$ is. Finally $A = \overline{A}$ says $A = A \cup A'$ by step 4.1, and $A = A \cup A'$ holds exactly when $A' \subseteq A$. [step 4.1, L3]

6.1 Claim 3 is [L3] restated, and claims 1, 2 and 4 are steps 3.1, 4.1 and 5.1, so all four hold. [step 3.1, step 4.1, step 5.1, L3] ∎

## Remarks

- **Which claim does the work in practice.** Claim 1 is the one used almost
  everywhere below: to show a point lies in $\overline{A}$ one exhibits, for each
  $\varepsilon > 0$, a point of $A$ within $\varepsilon$ of it. Claim 2 is what
  separates the two ways a point can be adherent, by membership or by
  accumulation, and it is what makes the notion of an isolated point visible.

- **No special property of $\mathbb{R}$ is used.** The argument uses the
  definitions of open, closed, neighbourhood and closure, and the order enters
  only through the nesting property of neighbourhoods; neither the
  least-upper-bound property nor the Archimedean property appears at any step.
  The results of this page that do use them are flagged in
  [[rem-r-native-topology-scope]].

- **The sequential form is a separate theorem and costs more.** Replacing
  "every neighbourhood meets $A$" by "some sequence in $A$ converges to $x$" is
  [[lem-sequential-characterisation-of-closure-r]], and the passage from the
  first to the second spends the axiom of countable choice, since it selects one
  point of $A$ from each of infinitely many neighbourhoods. The characterisation
  proved above is choice free.
````

### `thm-heine-borel-characterisation-r`

````markdown
---
id: thm-heine-borel-characterisation-r
kind: theorem
title: "A subset of $\\mathbb{R}$ is compact if and only if it is closed and bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-heine-borel-r, lem-compact-implies-closed-and-bounded-r, def-open-cover-r, def-interval, def-bounded-set, def-open-and-closed-in-r]
justified_by: []
forward_refs: [cex-unbounded-closed-set-not-compact, cex-closed-bounded-in-q-not-compact]
aliases: []
landmark: true
short: "compact $\\iff$ closed and bounded"
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.41)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and
only if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded
([[def-bounded-set]]).

This is the Heine-Borel theorem in the form used everywhere below. The forward
implication is [[lem-compact-implies-closed-and-bounded-r]] and spends no
completeness, only the Archimedean property and the existence of maxima of
finite sets; the backward implication rests on
[[thm-heine-borel-r]] and therefore on the completeness of $\mathbb{R}$, and the
remarks below record where it fails without completeness.

## Facts & Assumptions

**Given:** A subset $K \subseteq \mathbb{R}$.

[L1] Open cover, finite subfamily and compactness; the empty subfamily covers $\varnothing$ ([[def-open-cover-r]]).

[L2] A compact subset of $\mathbb{R}$ is closed and bounded ([[lem-compact-implies-closed-and-bounded-r]]).

[L3] Every closed bounded interval $[\ell,u]$ with $\ell \le u$ is compact ([[thm-heine-borel-r]]).

[L4] $K$ is closed exactly when $\mathbb{R} \setminus K$ is open ([[def-open-and-closed-in-r]]).

[L5] $K$ is bounded exactly when there are $\ell, u \in \mathbb{R}$ with $\ell \le y \le u$ for every $y \in K$ ([[def-bounded-set]]).

[L6] $[\ell,u] = \{\, z \in \mathbb{R} : \ell \le z \le u \,\}$ ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 If $K$ is compact then $K$ is closed and bounded, which is [L2]; this is the forward implication. [L2]

1.2 For the backward implication assume $K$ is closed and bounded. If $K = \varnothing$ then every open cover of $K$ admits the empty subfamily as a finite subcover, so $K$ is compact. [assume-hyp, L1]

1.3 Assume moreover $K \ne \varnothing$; fix $s \in K$ and, by [L5], reals $\ell, u$ with $\ell \le y \le u$ for every $y \in K$. Then $\ell \le s \le u$, so $\ell \le u$, and $K \subseteq [\ell,u]$ by [L6]. [assume-hyp, L5, L6, choose]

2.1 Let $\mathcal{U}$ be an open cover of $K$ and put $\mathcal{W} := \mathcal{U} \cup \{\mathbb{R} \setminus K\}$. Every member of $\mathcal{W}$ is open, since $\mathbb{R} \setminus K$ is open by [L4], and $\mathcal{W}$ covers $[\ell,u]$: a point of $[\ell,u]$ either lies in $K$, hence in some member of $\mathcal{U}$, or lies outside $K$, hence in $\mathbb{R} \setminus K$. [step 1.3, L1, L4]

3.1 By [L3] the interval $[\ell,u]$ is compact, so some finite subfamily $\{W_0, \dots, W_p\}$ of $\mathcal{W}$ covers $[\ell,u]$, where the case of an empty subfamily is possible only when $[\ell,u] = \varnothing$, which is excluded by $\ell \le u$. Put $\mathcal{V} := \{\, W_i : W_i \in \mathcal{U} \,\}$, a finite subfamily of $\mathcal{U}$. Then $K \subseteq \bigcup \mathcal{V}$: a point $y \in K \subseteq [\ell,u]$ lies in some $W_i$, and $W_i$ cannot be a member of $\mathcal{W}$ outside $\mathcal{U}$, because the only such member is $\mathbb{R} \setminus K$ and $y \in K$; so $W_i \in \mathcal{U}$ and $W_i \in \mathcal{V}$. [step 2.1, L1, L3, L6]

4.1 Every open cover of a nonempty closed bounded $K$ therefore has a finite subcover, so such a $K$ is compact; together with the empty case of step 1.2 this proves the backward implication, and step 1.1 is the forward one. [step 1.1, step 1.2, step 3.1, L1] ∎

## Remarks

- **A closed subset of a compact set is compact.** If $C \subseteq K$ with $K$
  compact and $C$ closed, then $C$ is bounded, being a subset of a bounded set,
  and closed by hypothesis, so it is compact by the theorem. The corresponding
  statement for arbitrary subsets is false: $(0,1) \subseteq [0,1]$ is bounded
  and not compact ([[cex-unbounded-closed-set-not-compact]]).

- **Both hypotheses are needed and neither implies the other.**
  [[cex-unbounded-closed-set-not-compact]] exhibits a closed set that is not
  bounded and a bounded set that is not closed, and neither is compact.

- **What the theorem is not.** It characterises compactness *for subsets of
  $\mathbb{R}$*. The two halves are of very different strengths: the forward
  half is elementary and general, while the backward half rests on the
  completeness of $\mathbb{R}$ and fails over $\mathbb{Q}$
  ([[fs-closed-bounded-compact-without-completeness]], witnessed by
  [[cex-closed-bounded-in-q-not-compact]]). Nothing here licenses "closed and
  bounded implies compact" in any other setting.
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

### `thm-perfect-set-uncountable-r`

````markdown
---
id: thm-perfect-set-uncountable-r
kind: theorem
title: "Every nonempty perfect subset of $\\mathbb{R}$ is uncountable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-perfect-set-r, thm-nested-interval-property, def-countable, lem-countable-iff-surjection-from-n, thm-recursion, def-interval, def-neighbourhood-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-limit-point-r, lem-rat-embeds-dense, thm-rationals-countable, thm-well-ordering-principle, cor-archimedean-reciprocal, thm-of-archimedean, def-injection-surjection-bijection, def-equinumerous, def-real-limit, def-sequence, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-abs-value, lem-finite-set-has-max, def-max-min, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [ex-closed-interval-is-perfect, cex-closed-set-with-an-isolated-point-is-not-perfect, ex-reciprocals-with-zero-are-compact]
aliases: []
landmark: true
short: "nonempty perfect $\\Rightarrow$ uncountable"
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "Cantor-Bendixson theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%E2%80%93Bendixson_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.43)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "A. W. Miller, Tameness notes"
      url: "https://people.math.osu.edu/miller.1987/tameness.pdf"
pipeline_run: null
---

## Statement

Let $P \subseteq \mathbb{R}$ be nonempty and perfect ([[def-perfect-set-r]]).
Then $P$ is uncountable ([[def-countable]]).

**The selection is canonical, so that this proof spends no dependent choice.**
The textbook proof shrinks a neighbourhood at every stage by *choosing* a point
of $P$ and then a radius, a choice made infinitely often and each time depending
on the previous one: that is the axiom of dependent choice
([[def-dependent-choice]]), which is not available at this point in the reading
order; only the axiom of countable choice is, and it does not
licence a recursive selection. The construction below therefore fixes an
enumeration $e$ of the rationals once ([[thm-rationals-countable]],
[[lem-rat-embeds-dense]]) and, at every stage, takes the interval with
**least-indexed rational endpoints** meeting the requirements. The requirements
are met by some rational-endpoint interval, which is what step 2.1 proves, and
the least such index is determined by [[thm-well-ordering-principle]], so the
whole recursion is a single application of [[thm-recursion]] to a total map and
no choice principle is used anywhere.

## Facts & Assumptions

**Given:** A nonempty perfect set $P \subseteq \mathbb{R}$. Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under $q \mapsto \hat q$. A pair $(p,q) \in \mathbb{Q}_{\mathbb{R}} \times \mathbb{Q}_{\mathbb{R}}$ is called **good** when $p < q$ and $(p,q) \cap P \ne \varnothing$, and $G$ denotes the set of good pairs.

[L1] $P$ is perfect: $P$ is closed and every $x \in P$ is a limit point of $P$, so every punctured neighbourhood of $x$ meets $P$ ([[def-perfect-set-r]], [[def-limit-point-r]]).

[L2] $\overline{A}$ is the set of points every neighbourhood of which meets $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisations-r]], [[def-open-and-closed-in-r]]).

[L3] $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$; $x \in N_\varepsilon(x)$; $N^{*}_\varepsilon(x) = N_\varepsilon(x) \setminus \{x\}$; and $y \in N_\varepsilon(x)$ with $0 < \delta \le \varepsilon - |y - x|$ gives $N_\delta(y) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L4] Intervals: $(p,q)$ is an open set and $[p,q]$ is a closed bounded interval, nonempty when $p \le q$ ([[def-interval]], [[def-open-and-closed-in-r]]).

[L5] A nonempty at most countable set admits a surjection from $\mathbb{N}$; uncountable means not at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L6] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$ and strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]); a composition of bijections is a bijection ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L7] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L8] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $T : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(\sigma(k)) = T(h(k))$ ([[thm-recursion]]).

[L9] Nested interval property: for nonempty closed bounded intervals $I_k = [a_k,b_k]$ with $I_{k+1} \subseteq I_k$, the intersection is nonempty, and it is a single point exactly when the lengths $b_k - a_k$ tend to $0$ ([[thm-nested-interval-property]]).

[L10] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]); canonical naturals are positive and increasing, and reciprocation of positives reverses the order ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L11] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]); $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; adding a constant and multiplying by a positive preserve inequalities ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L12] Convergence of a sequence of reals to $0$ is tested against rational $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

[L13] Absolute value: $|z| \ge 0$, and $|y - x| \le b - a$ whenever $x, y \in [a,b]$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the nonempty perfect set $P$ is at most countable; by [L5] fix a surjection $f : \mathbb{N} \to P$. [assume-contra, L5, choose]

1.2 By [L6] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$ with $\iota(q) = \hat q$, a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L6, choose]

1.3 Recall the terminology of the Given: a pair $(p,q)$ of elements of $\mathbb{Q}_{\mathbb{R}}$ is good when $p < q$ and $(p,q) \cap P \ne \varnothing$, and $G$ is the set of good pairs. [given, construct]

2.1 **Refinement claim.** For every good $(p,q)$, every $x \in \mathbb{R}$ and every real $\eta > 0$ there is a good $(p',q')$ with $[p',q'] \subseteq (p,q)$, $x \notin [p',q']$ and $q' - p' < \eta$. To see it, fix $y \in (p,q) \cap P$ and, $(p,q)$ being open, a real $\varepsilon > 0$ with $N_\varepsilon(y) \subseteq (p,q)$; since $y \in P$ is not isolated, [L1] gives $z \in N^{*}_\varepsilon(y) \cap P$, so $z \in P \cap (p,q)$ and $z \ne y$. At least one of $y, z$ differs from $x$; let $w$ be $y$ if $y \ne x$ and $z$ otherwise, so $w \in P \cap N_\varepsilon(y)$ and $w \ne x$. Put $\delta := \min\{\, \varepsilon - |w - y|,\ |w - x|,\ \eta \cdot 2^{-1} \,\}$, a positive real by [L11] since each entry is positive, and use [L6] to fix $p', q' \in \mathbb{Q}_{\mathbb{R}}$ with $w - \delta < p' < w < q' < w + \delta$. Then $[p',q'] \subseteq N_\delta(w) \subseteq N_\varepsilon(y) \subseteq (p,q)$ by [L3], the pair $(p',q')$ is good because $w \in (p',q') \cap P$, the point $x$ lies outside $N_\delta(w)$ because $|x - w| \ge \delta$, and $q' - p' < 2\delta \le \eta$. [step 1.3, L1, L3, L4, L6, L11, choose]

3.1 **Successor rule.** For $(k,(p,q)) \in \mathbb{N} \times G$ let $m$ be the least natural for which some natural $n$ makes $(e(m),e(n))$ good with $[e(m),e(n)] \subseteq (p,q)$, $f(k) \notin [e(m),e(n)]$ and $e(n) - e(m) < 1/(k+1)$, and let $n$ be the least natural with those properties for that $m$; put $T(k,(p,q)) := (\sigma(k), (e(m),e(n)))$. The set of eligible $m$ is nonempty by step 2.1 applied with $x = f(k)$ and $\eta = 1/(k+1) > 0$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$, so both minima exist by [L7] and $T : \mathbb{N} \times G \to \mathbb{N} \times G$ is a total function defined without any selection. [step 2.1, L6, L7, L10, construct]

4.1 **The recursion.** $P$ is nonempty, so fix $y_0 \in P$ and, by [L6], elements $p_0 < y_0 < q_0$ of $\mathbb{Q}_{\mathbb{R}}$; then $(p_0,q_0)$ is good. Apply [L8] with $Y = \mathbb{N} \times G$, seed $(0,(p_0,q_0))$ and map $T$ to get $h : \mathbb{N} \to \mathbb{N} \times G$ with $h(0) = (0,(p_0,q_0))$ and $h(\sigma(k)) = T(h(k))$; an induction on $k$ shows the first coordinate of $h(k)$ is $k$, so write $h(k) = (k,(p_k,q_k))$ with every $(p_k,q_k)$ good. [step 1.3, step 3.1, L6, L8, construct]

5.1 Writing $I_k := [p_k,q_k]$ and $\ell_k := q_k - p_k > 0$, the rule of step 3.1 gives, for every $k \in \mathbb{N}$: $I_{k+1} \subseteq (p_k,q_k) \subseteq I_k$, so the intervals are nested and nonempty; $f(k) \notin I_{k+1}$; $\ell_{k+1} < 1/(k+1)$; and $I_k \cap P \ne \varnothing$, because $(p_k,q_k) \cap P \ne \varnothing$. [step 3.1, step 4.1, L4]

6.1 For every real $\varepsilon > 0$ there is $k \ge 1$ with $\ell_k < \varepsilon$, and moreover $\ell_k \to 0$: by step 5.1 one has $\ell_j < 1/j$ for every $j \ge 1$, since $\ell_j = \ell_{(j-1)+1} < 1/((j-1)+1) = 1/j$; given $\varepsilon > 0$, [L10] supplies a natural $n \ge 1$ with $1/n < \varepsilon$, and then every $k \ge n$ satisfies $k \ge 1$ and $|\ell_k - 0| = \ell_k < 1/k \le 1/n < \varepsilon$ by [L10] and [L13], which is both assertions, the second by [L12] since a rational $\varepsilon > 0$ is in particular a real one. [step 5.1, L10, L12, L13]

7.1 By [L9] the nested family $(I_k)$ of nonempty closed bounded intervals has an intersection that is a single point, since its lengths tend to $0$ by step 6.1; write $\{x\}$ for it, so $x \in I_k$ for every $k$. [step 5.1, step 6.1, L9]

8.1 $x \in P$: let $\varepsilon > 0$ be real and use step 6.1 to fix $k \ge 1$ with $\ell_k < \varepsilon$; by step 5.1 there is $y \in I_k \cap P$, and $x \in I_k$ by step 7.1, so $|y - x| \le \ell_k < \varepsilon$ by [L13] and $y \in N_\varepsilon(x) \cap P$. Every neighbourhood of $x$ therefore meets $P$, so $x \in \overline{P} = P$ by [L1] and [L2]. [step 5.1, step 6.1, step 7.1, L1, L2, L3, L13]

9.1 For every $k \in \mathbb{N}$ one has $x \in I_{k+1}$ by step 7.1 while $f(k) \notin I_{k+1}$ by step 5.1, so $x \ne f(k)$; thus the element $x$ of $P$ found in step 8.1 is not a value of $f$, contradicting the surjectivity of the $f$ fixed in step 1.1. The assumption is therefore untenable: a nonempty perfect subset of $\mathbb{R}$ is not at most countable, that is, it is uncountable. [step 1.1, step 5.1, step 7.1, step 8.1, L5, discharge-contradiction] ∎

## Remarks

- **Which hypothesis does what.** Closedness of $P$ is used exactly once, at the
  step that puts the limit point $x$ back into $P$; without it the construction
  still produces a point, but that point may lie outside $P$ and the
  contradiction evaporates. Having no isolated points is used exactly once, in
  the refinement claim, to produce a second point of $P$ inside a neighbourhood,
  which is what allows the excluded point $f(k)$ to be dodged. Nonemptiness is
  used to seed the recursion, and it cannot be dropped: $\varnothing$ is perfect
  and countable ([[def-perfect-set-r]]).

- **Why rational endpoints.** They are what make the construction canonical.
  The requirement "some good rational-endpoint interval inside $(p,q)$ misses
  $f(k)$ and is short" is a property of a pair of natural numbers, so it can be
  minimised by [[thm-well-ordering-principle]]; the same requirement stated for
  arbitrary real endpoints comes with no canonical least witness, and picking one
  would be a choice made afresh at every stage. This is the same device that
  keeps
  [[lem-subset-of-countable]] and [[lem-countable-iff-surjection-from-n]] choice
  free, transplanted from subsets of $\mathbb{N}$ to intervals.

- **The shrinking condition is $\ell_{k+1} < 1/(k+1)$ and not $1/k$.** Sequences
  and recursions here are indexed from $0$ ([[def-sequence]]), so the bound
  available at stage $k$ has to be positive at $k = 0$; $1/k$ is undefined
  there. The consequence, $\ell_j < 1/j$ for $j \ge 1$, is what step 6.1 uses,
  and it says nothing about $\ell_0$, which is not needed.

- **The result is sharp in both directions.** A nondegenerate closed interval is
  perfect and uncountable ([[ex-closed-interval-is-perfect]]), and deleting the
  no-isolated-points clause loses the conclusion: a closed set with an isolated
  point need not be perfect
  ([[cex-closed-set-with-an-isolated-point-is-not-perfect]]) and may be
  countable, as $\{\, 1/k : k \ge 1 \,\} \cup \{0\}$ is
  ([[ex-reciprocals-with-zero-are-compact]]). Applied to a
  nondegenerate closed interval, which [[ex-closed-interval-is-perfect]] shows
  to be perfect, the theorem reproves the uncountability of intervals
  ([[cor-interval-uncountable]]) by a different route; the two proofs share
  nothing but the completeness of $\mathbb{R}$, which
  [[cor-interval-uncountable]] spends as a supremum and the argument above
  spends through [[thm-nested-interval-property]].
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

