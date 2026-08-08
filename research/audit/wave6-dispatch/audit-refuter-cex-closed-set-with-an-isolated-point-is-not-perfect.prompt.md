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

## Target item — `cex-closed-set-with-an-isolated-point-is-not-perfect`

Normalized current SHA-256: `01cbdbbb97b8ca8b3bddfdd55dfa8d968123ba44e788d53110c78f0f8eb16dff`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-closed-set-with-an-isolated-point-is-not-perfect
kind: counterexample
title: "$\\{0\\} \\cup [1,2]$ is closed, has an isolated point, and is not perfect"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-perfect-set-r, def-limit-point-r, def-open-and-closed-in-r, def-interval, def-neighbourhood-r, thm-open-set-algebra-r, lem-of-abs-value, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
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
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every closed subset of $\mathbb{R}$ is perfect
([[def-perfect-set-r]]).

The witness is $E := \{0\} \cup [1,2]$. It is closed, being a union of two
closed sets ([[thm-open-set-algebra-r]]), and $0$ is an isolated point of it
([[def-limit-point-r]]), so the second clause of the definition of a perfect set
fails while the first holds.

## Facts & Assumptions

**Given:** The set $E := \{0\} \cup [1,2]$, where $\{0\} = [0,0]$ and $[1,2]$ are closed bounded intervals ([[def-interval]]).

[A1] The refuted claim: every closed subset of $\mathbb{R}$ is perfect.

[L1] A set is perfect when it is closed and no point of it is isolated in it; $x \in P$ is isolated in $P$ when some $N_\varepsilon(x)$ satisfies $N_\varepsilon(x) \cap P = \{x\}$ ([[def-perfect-set-r]], [[def-limit-point-r]]).

[L2] Each interval of the form $[a,b]$ is a closed set, and a union of finitely many closed sets is closed ([[def-open-and-closed-in-r]], [[def-interval]], [[thm-open-set-algebra-r]]).

[L3] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$, and $|y| = y$ for $y \ge 0$ ([[def-neighbourhood-r]], [[lem-of-abs-value]]).

[L4] $0 < 1$, so $2 := 1 + 1 > 0$ and $0 < 1 \cdot 2^{-1} < 1$; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 $E$ is closed: $\{0\} = [0,0]$ and $[1,2]$ are closed sets by [L2], and their union is closed by [L2]. So $E$ is a legitimate instance of the claim [A1]. [A1, L2]

1.2 $0$ is an isolated point of $E$: certainly $0 \in E$; put $\varepsilon := 1 \cdot 2^{-1}$, which is positive and $< 1$ by [L4]. An element $y$ of $E$ is $0$ or lies in $[1,2]$, and in the second case $|y - 0| = y \ge 1 > \varepsilon$ by [L3] and [L4], so $y \notin N_\varepsilon(0)$. Hence $N_\varepsilon(0) \cap E = \{0\}$. [L1, L3, L4]

2.1 By step 1.2 the closed set $E$ of step 1.1 has an isolated point, so it is not perfect by [L1], and the claim [A1] is refuted. [step 1.1, step 1.2, A1, L1] ∎

## Remarks

- **Only the second clause fails, and by one point.** Every point of $[1,2]$ is
  a limit point of $E$, by the computation in
  [[ex-closed-interval-is-perfect]]; the single point $0$ is what stops $E$ from
  being perfect. Deleting it leaves $[1,2]$, which is perfect.

- **Countability is the visible consequence.** A nonempty perfect set is
  uncountable ([[thm-perfect-set-uncountable-r]]). $E$ is uncountable too, since
  it contains $[1,2]$, so this example does not separate the two notions by
  size; what it shows is that closedness alone does not give perfectness. A
  countable closed set with isolated points is
  $\{\, 1/k : k \ge 1 \,\} \cup \{0\}$ ([[ex-reciprocals-with-zero-are-compact]]),
  and it is likewise not perfect.

- **The empty set is the degenerate case on the other side.** It is closed and
  has no isolated points, hence is perfect, and it is countable; that is why
  [[thm-perfect-set-uncountable-r]] assumes its perfect set is nonempty.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-perfect-set-r",
      "source_section": "Definition",
      "quote": "A set $P \\subseteq \\mathbb{R}$ is **perfect** when\n\n- $P$ is closed ([[def-open-and-closed-in-r]]), and\n- $P$ has no isolated points ([[def-limit-point-r]]): no $x \\in P$ admits a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap P = \\{x\\}$.\n\n**Equivalently, $P$ is closed and $P \\subseteq P'$.** By\n[[def-limit-point-r]], a point of $P$ is isolated in $P$ exactly when it is not\na limit point of $P$, so \"no point of $P$ is isolated in $P$\" says precisely\nthat every point of $P$ is a limit point of $P$, that is, $P \\subseteq P'$.\nCombined with the characterisation of closedness as $P' \\subseteq P$\n([[thm-closure-characterisations-r]]), a perfect set is exactly a set with\n$P = P'$, though only the two conditions above are used below.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "Let $U, F \\subseteq \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]].\n\n- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.\n\nThe whole of the topology of $\\mathbb{R}$ developed on this page rests on this\none definition: closedness is *defined* as openness of the complement, and every\nother description of a closed set on this page is a theorem\n([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).\n\n**$\\varnothing$ and $\\mathbb{R}$ are clopen.** The condition defining openness\nquantifies over the elements of the set, so it holds vacuously for\n$\\varnothing$; and for $x \\in \\mathbb{R}$ one has $N_1(x) \\subseteq \\mathbb{R}$,\nso $\\mathbb{R}$ is open. Since each of the two is the complement of the other,\neach is also closed.\n\n**Every neighbourhood is open.** Let $y \\in N_\\varepsilon(x)$ and put\n$\\delta := \\varepsilon - |y - x|$, which is $> 0$ because\n$y \\in N_\\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives\n$N_\\delta(y) \\subseteq N_\\varepsilon(x)$. So every point of $N_\\varepsilon(x)$\nhas a neighbourhood inside it.\n\n**The four open forms of [[def-interval]] are open sets.** Let $a, b \\in\n\\mathbb{R}$.\n\n- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so\n  $\\delta := \\min\\{x - a,\\ b - x\\}$ is a positive real (the minimum of a\n  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).\n  If $|y - x| < \\delta$ then $y > x - \\delta \\ge x - (x - a) = a$ and\n  $y < x + \\delta \\le x + (b - x) = b$, so $y \\in (a,b)$; hence\n  $N_\\delta(x) \\subseteq (a,b)$.\n- $(a,\\infty)$: for $x > a$ take $\\delta := x - a > 0$; then $|y - x| < \\delta$\n  gives $y > x - \\delta = a$.\n- $(-\\infty,b)$: for $x < b$ take $\\delta := b - x > 0$; then $|y - x| < \\delta$\n  gives $y < x + \\delta = b$.\n- $(-\\infty,\\infty) = \\mathbb{R}$: already treated above.\n\n**The four closed forms of [[def-interval]] are closed sets.** In each case the\ncomplement is shown open directly.\n\n- $[a,b]$: if $x \\notin [a,b]$ then $x < a$ or $x > b$ by trichotomy\n  ([[def-ordered-field]]). If $x < a$, take $\\delta := a - x > 0$; every\n  $y \\in N_\\delta(x)$ has $y < x + \\delta = a$, hence $y \\notin [a,b]$. If\n  $x > b$, take $\\delta := x - b > 0$; every $y \\in N_\\delta(x)$ has\n  $y > x - \\delta = b$, hence $y \\notin [a,b]$. So\n  $\\mathbb{R} \\setminus [a,b]$ is open.\n- $[a,\\infty)$: its complement is $(-\\infty,a)$, which is open by the previous\n  paragraph.\n- $(-\\infty,b]$: its complement is $(b,\\infty)$, which is open.\n- $(-\\infty,\\infty) = \\mathbb{R}$: its complement is $\\varnothing$, which is\n  open.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-open-set-algebra-r",
      "source_section": "Statement",
      "quote": "Let open and closed subsets of $\\mathbb{R}$ be as in\n[[def-open-and-closed-in-r]].\n\n1. **Arbitrary unions of open sets are open.** If $\\mathcal{U}$ is any family of\n   open subsets of $\\mathbb{R}$, then $\\bigcup \\mathcal{U}$ is open.\n2. **Finite intersections of open sets are open.** If $n \\in \\mathbb{N}$ and\n   $U_0, \\dots, U_n$ are open, then $U_0 \\cap \\dots \\cap U_n$ is open.\n3. **Arbitrary intersections of closed sets are closed.** If $\\mathcal{F}$ is a\n   nonempty family of closed subsets of $\\mathbb{R}$, then\n   $\\bigcap \\mathcal{F}$ is closed.\n4. **Finite unions of closed sets are closed.** If $n \\in \\mathbb{N}$ and\n   $F_0, \\dots, F_n$ are closed, then $F_0 \\cup \\dots \\cup F_n$ is closed.\n\nThe word *finite* in claims 2 and 4 is not decoration: an arbitrary\nintersection of open sets need not be open, and dually an arbitrary union\nof closed sets need not be closed; the remarks below say where that is settled.\nClaim 3 asks $\\mathcal{F}$ to be nonempty\nonly so that $\\bigcap \\mathcal{F}$ is a subset of $\\mathbb{R}$ without appeal to\na convention about the empty intersection.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$E$ is closed: $\\{0\\} = [0,0]$ and $[1,2]$ are closed sets by [L2], and their union is closed by [L2]. So $E$ is a legitimate instance of the claim [A1].",
      "step": "1.1",
      "inputs": [
        "A1",
        "L2"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "$0$ is an isolated point of $E$: certainly $0 \\in E$; put $\\varepsilon := 1 \\cdot 2^{-1}$, which is positive and $< 1$ by [L4]. An element $y$ of $E$ is $0$ or lies in $[1,2]$, and in the second case $|y - 0| = y \\ge 1 > \\varepsilon$ by [L3] and [L4], so $y \\notin N_\\varepsilon(0)$. Hence $N_\\varepsilon(0) \\cap E = \\{0\\}$.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "By step 1.2 the closed set $E$ of step 1.1 has an isolated point, so it is not perfect by [L1], and the claim [A1] is refuted.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "A1",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The cex-closed-set-with-an-isolated-point-is-not-perfect statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The statement and step 1.2 explicitly treat the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 1.2 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The cex-closed-set-with-an-isolated-point-is-not-perfect statement has no parameter degeneracy that changes the claim."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The cex-closed-set-with-an-isolated-point-is-not-perfect statement has no interval or extended-real endpoint convention."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The cex-closed-set-with-an-isolated-point-is-not-perfect proof makes no selection from a set whose nonemptiness needs a separate discharge."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The cex-closed-set-with-an-isolated-point-is-not-perfect statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The cex-closed-set-with-an-isolated-point-is-not-perfect statement is not a biconditional requiring a reverse implication."
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
    "source": "cex-closed-set-with-an-isolated-point-is-not-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-perfect-set-r",
    "declared_target": "def-perfect-set-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-closed-set-with-an-isolated-point-is-not-perfect",
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
    "source": "cex-closed-set-with-an-isolated-point-is-not-perfect",
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
    "source": "cex-closed-set-with-an-isolated-point-is-not-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-closed-set-with-an-isolated-point-is-not-perfect",
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
    "source": "cex-closed-set-with-an-isolated-point-is-not-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-open-set-algebra-r",
    "declared_target": "thm-open-set-algebra-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-closed-set-with-an-isolated-point-is-not-perfect",
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
    "source": "cex-closed-set-with-an-isolated-point-is-not-perfect",
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
    "source": "cex-closed-set-with-an-isolated-point-is-not-perfect",
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
  },
  {
    "source": "cex-closed-set-with-an-isolated-point-is-not-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "cor-of-one-positive",
    "declared_target": "cor-of-one-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-closed-set-with-an-isolated-point-is-not-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-add-order",
    "declared_target": "lem-of-add-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-closed-set-with-an-isolated-point-is-not-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (15)

### `cor-of-one-positive`

````markdown
---
id: cor-of-one-positive
kind: corollary
title: "The multiplicative identity is positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-of-square-positive, def-field]
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
    - title: "Elias Zakon, Mathematical Analysis: Axioms and Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.01%3A_Axioms_and_Basic_Definitions"
pipeline_run: null
proof_strategy: direct
---

## Statement

In any ordered field $F$ with positive cone $P$, the multiplicative identity
satisfies $0 < 1$; that is, $1 \in P$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$ and multiplicative identity $1$ ([[def-field]]).

[L1] In any field $1 \neq 0$ ([[def-field]]).

[L2] For every $x \neq 0$ the square satisfies $x^2 > 0$ ([[lem-of-square-positive]]).

[L3] The identity axiom gives $1 = 1 \cdot 1 = 1^2$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 By the field axioms $1 \neq 0$, and $1 = 1 \cdot 1 = 1^2$. [L1, L3]

2.1 Since $1 \neq 0$, applying the square lemma with $x = 1$ gives $1^2 > 0$. [step 1.1, L2]

3.1 Because $1 = 1^2$, it follows that $1 > 0$, i.e. $0 < 1$. [step 2.1, step 1.1, L3] ∎
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

### `ex-closed-interval-is-perfect`

````markdown
---
id: ex-closed-interval-is-perfect
kind: example
title: "Every nondegenerate closed interval is perfect, giving a second proof that it is uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-perfect-set-r, thm-perfect-set-uncountable-r, cor-interval-uncountable, def-interval, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, lem-finite-set-has-max, def-max-min, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
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
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.43 and its corollary)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $a, b \in \mathbb{R}$ with $a < b$. Then the closed interval
$E := [a,b]$ ([[def-interval]]) is perfect ([[def-perfect-set-r]]), and
therefore uncountable by [[thm-perfect-set-uncountable-r]].

This is a second proof of the uncountability of a nondegenerate interval. The
first, [[cor-interval-uncountable]], runs a trisection argument directly against
an assumed enumeration; the route here checks two purely local properties,
closedness and the absence of isolated points, and lets the perfect-set theorem
do the counting.

## Facts & Assumptions

**Given:** Reals $a < b$ and the interval $E := [a,b] = \{\, x : a \le x \le b \,\}$.

[L1] A set is perfect when it is closed and no point of it is isolated in it; $x \in P$ is isolated in $P$ when some $N_\varepsilon(x)$ meets $P$ only in $x$ ([[def-perfect-set-r]], [[def-limit-point-r]]).

[L2] Each interval of the form $[a,b]$ is a closed set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L3] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-neighbourhood-r]], [[lem-of-abs-value]]).

[L4] Every nonempty perfect subset of $\mathbb{R}$ is uncountable ([[thm-perfect-set-uncountable-r]]).

[L5] For $a < b$ the intervals $[a,b]$ and $(a,b)$ are uncountable ([[cor-interval-uncountable]]).

[L6] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L7] Ordered-field arithmetic: $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; adding a constant and multiplying by a positive preserve inequalities; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 $E$ is closed by [L2], and nonempty since $a \in E$. [L2]

1.2 No point of $E$ is isolated in $E$: let $x \in E$ and let $\varepsilon > 0$ be real. If $x < b$, put $t := \min\{\varepsilon,\ b - x\} \cdot 2^{-1}$, which is positive by [L6] and [L7], and $y := x + t$; then $y > x$, and $y \le x + (b-x) \cdot 2^{-1} < b$ by [L7], while $y > x \ge a$, so $y \in E$ with $y \ne x$ and $|y - x| = t \le \varepsilon \cdot 2^{-1} < \varepsilon$. If $x = b$, then $x > a$; put $t := \min\{\varepsilon,\ b - a\} \cdot 2^{-1} > 0$ and $y := x - t$; then $y < x \le b$, and $y \ge b - (b-a) \cdot 2^{-1} > a$ by [L7], so $y \in E$ with $y \ne x$ and $|y - x| = t < \varepsilon$. In both cases $N_\varepsilon(x)$ contains a point of $E$ other than $x$, so no $\varepsilon$ isolates $x$. [L1, L3, L6, L7]

2.1 By steps 1.1 and 1.2 the set $E$ is closed with no isolated points, that is, perfect, and it is nonempty. [step 1.1, step 1.2, L1]

3.1 By [L4] the nonempty perfect set $E$ is uncountable, which reproves for $[a,b]$ the first claim of [L5] along an independent route. [step 1.1, step 2.1, L4, L5] ∎

## Remarks

- **Nondegeneracy is exactly what is needed.** For $a = b$ the set $[a,a] =
  \{a\}$ is closed, its single point is isolated, and it is finite; the argument
  of step 1.2 breaks precisely there, since neither $x < b$ nor $x > a$ holds.
  This matches the hypothesis $a < b$ of [[cor-interval-uncountable]].

- **The open interval supplies only half of the definition.** The computation of
  step 1.2 applies verbatim inside $(a,b)$ and shows it has no isolated points,
  but $(a,b)$ is not closed, so it is not perfect. Perfectness needs both halves,
  which is why the example is stated for the closed interval.

- **Two proofs of one fact, sharing one ingredient.** Both routes spend the
  completeness of $\mathbb{R}$ exactly once, [[cor-interval-uncountable]] as a
  supremum and [[thm-perfect-set-uncountable-r]] through
  [[thm-nested-interval-property]]. They differ in everything else: the first
  trisects a given interval against a given enumeration, the second selects
  rational-endpoint intervals by least index. Neither is a corollary of the
  other.
````

### `ex-reciprocals-with-zero-are-compact`

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

### `lem-of-add-order`

````markdown
---
id: lem-of-add-order
kind: lemma
title: "Order is preserved by adding a constant and by adding inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field]
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
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c, d \in F$.

1. **Translation invariance.** If $a < b$ then $a + c < b + c$.
2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c, d \in F$.

[L1] For $x, y \in F$, the relation $x < y$ means $y - x \in P$ ([[def-ordered-field]]).

[L2] $P$ is closed under addition: if $u, v \in P$ then $u + v \in P$ (axiom O2 of [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a < b$; by the definition of the order this means $b - a \in P$. [assume-hyp, L1]

1.2 For every $c \in F$ the field identities give $(b + c) - (a + c) = b - a$. [algebra]

1.3 Assume moreover $c < d$; by the definition of the order this means $d - c \in P$. [assume-hyp, L1]

1.4 The field identities give $(b + d) - (a + c) = (b - a) + (d - c)$. [algebra]

2.1 Hence $(b + c) - (a + c) = b - a \in P$, which is exactly $a + c < b + c$, proving claim 1. [step 1.1, step 1.2, L1]

2.2 Since $b - a \in P$ and $d - c \in P$, closure under addition gives $(b - a) + (d - c) \in P$. [step 1.1, step 1.3, L2]

3.1 Therefore $(b + d) - (a + c) = (b - a) + (d - c) \in P$, which is exactly $a + c < b + d$, proving claim 2. [step 1.4, step 2.2, L1] ∎
````

### `lem-of-sign-rules`

````markdown
---
id: lem-of-sign-rules
kind: lemma
title: "Sign rules for products and monotonicity of multiplication"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-mult-neg, lem-of-zero-mult]
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
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c \in F$.

1. If $a > 0$ and $b > 0$ then $ab > 0$.
2. If $a > 0$ and $b < 0$ then $ab < 0$.
3. If $a < 0$ and $b < 0$ then $ab > 0$.
4. If $c > 0$ then $a < b \iff ac < bc$.
5. If $c < 0$ then $a < b \iff bc < ac$ (multiplication by a negative reverses order).

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c \in F$.

[L1] For $x, y \in F$: $x < y \iff y - x \in P$; $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and (trichotomy) for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$ holds, so $0 \notin P$ and $x \in P \Rightarrow x \neq 0$ ([[def-ordered-field]]).

[L2] $P$ is closed under multiplication: if $u, v \in P$ then $uv \in P$ (axiom O2 of [[def-ordered-field]]).

[L3] In any field, $(-u)v = -(uv)$ and $(-u)(-v) = uv$ ([[lem-of-mult-neg]]).

[L4] In any field, $0 \cdot u = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$ and $b > 0$, i.e. $a \in P$ and $b \in P$; closure gives $ab \in P$, so $ab > 0$, proving claim 1. [assume-hyp, L1, L2]

1.2 Assume $a > 0$ and $b < 0$, i.e. $a \in P$ and $-b \in P$; closure gives $a(-b) \in P$. [assume-hyp, L1, L2]

1.3 Assume $a < 0$ and $b < 0$, i.e. $-a \in P$ and $-b \in P$; closure gives $(-a)(-b) \in P$. [assume-hyp, L1, L2]

1.4 Assume $c > 0$ and $a < b$, i.e. $c \in P$ and $b - a \in P$; closure gives $(b - a)c \in P$. [assume-hyp, L1, L2]

1.5 Assume $c < 0$ and $a < b$, i.e. $-c \in P$ and $b - a \in P$; closure gives $(b - a)(-c) \in P$. [assume-hyp, L1, L2]

2.1 Since $a(-b) = -(ab)$ by L3, step 1.2 gives $-(ab) \in P$, so $ab < 0$, proving claim 2. [step 1.2, L3, L1]

2.2 Since $(-a)(-b) = ab$ by L3, step 1.3 gives $ab \in P$, so $ab > 0$, proving claim 3. [step 1.3, L3, L1]

2.3 By distributivity $(b - a)c = bc - ac$, so step 1.4 gives $bc - ac \in P$, i.e. $ac < bc$: this is the forward direction of claim 4. [step 1.4, algebra, L1]

2.4 By L3 and distributivity $(b - a)(-c) = -((b - a)c) = -(bc - ac) = ac - bc$, so step 1.5 gives $ac - bc \in P$, i.e. $bc < ac$: this is the forward direction of claim 5. [step 1.5, L3, algebra, L1]

3.1 Conversely, assume $c > 0$ and $ac < bc$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $ac < bc$; if $b < a$ then the argument of step 2.3 applied to the pair $b < a$ gives $bc < ac$, so $bc - ac \in P$ (from $ac < bc$) while $ac - bc \in P$ (from $bc < ac$), putting the element $bc - ac$ and its negative $ac - bc$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 4. [assume-hyp, step 2.3, L4, L1, algebra]

4.1 Conversely, assume $c < 0$ and $bc < ac$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $bc < ac$; if $b < a$ then the argument of step 2.4 applied to the pair $b < a$ gives $ac < bc$, so $ac - bc \in P$ (from $bc < ac$) while $bc - ac \in P$ (from $ac < bc$), putting the element $ac - bc$ and its negative $bc - ac$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 5. [assume-hyp, step 2.4, L4, L1, algebra] ∎
````

### `thm-open-set-algebra-r`

````markdown
---
id: thm-open-set-algebra-r
kind: theorem
title: "Arbitrary unions and finite intersections of open subsets of $\\mathbb{R}$ are open, and dually for closed sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-open-and-closed-in-r, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, def-interval, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [cex-intersection-of-shrinking-intervals-not-open]
aliases: []
landmark: true
short: "the algebra of open and closed sets"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.24)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let open and closed subsets of $\mathbb{R}$ be as in
[[def-open-and-closed-in-r]].

1. **Arbitrary unions of open sets are open.** If $\mathcal{U}$ is any family of
   open subsets of $\mathbb{R}$, then $\bigcup \mathcal{U}$ is open.
2. **Finite intersections of open sets are open.** If $n \in \mathbb{N}$ and
   $U_0, \dots, U_n$ are open, then $U_0 \cap \dots \cap U_n$ is open.
3. **Arbitrary intersections of closed sets are closed.** If $\mathcal{F}$ is a
   nonempty family of closed subsets of $\mathbb{R}$, then
   $\bigcap \mathcal{F}$ is closed.
4. **Finite unions of closed sets are closed.** If $n \in \mathbb{N}$ and
   $F_0, \dots, F_n$ are closed, then $F_0 \cup \dots \cup F_n$ is closed.

The word *finite* in claims 2 and 4 is not decoration: an arbitrary
intersection of open sets need not be open, and dually an arbitrary union
of closed sets need not be closed; the remarks below say where that is settled.
Claim 3 asks $\mathcal{F}$ to be nonempty
only so that $\bigcap \mathcal{F}$ is a subset of $\mathbb{R}$ without appeal to
a convention about the empty intersection.

## Facts & Assumptions

**Given:** A family $\mathcal{U}$ of open subsets of $\mathbb{R}$, with $\bigcup \mathcal{U} = \{\, x \in \mathbb{R} : x \in U \text{ for some } U \in \mathcal{U} \,\}$; a natural number $n$ and open sets $U_0, \dots, U_n$; a nonempty family $\mathcal{F}$ of closed subsets of $\mathbb{R}$, with $\bigcap \mathcal{F} = \{\, x \in \mathbb{R} : x \in F \text{ for every } F \in \mathcal{F} \,\}$; and closed sets $F_0, \dots, F_n$.

[A1] De Morgan's laws in the ambient set theory: for a nonempty family $\mathcal{G}$ of subsets of $\mathbb{R}$, $\mathbb{R} \setminus \bigcap \mathcal{G} = \bigcup \{\, \mathbb{R} \setminus G : G \in \mathcal{G} \,\}$, and $\mathbb{R} \setminus (G_0 \cup \dots \cup G_n) = (\mathbb{R} \setminus G_0) \cap \dots \cap (\mathbb{R} \setminus G_n)$. Also $\mathbb{R} \setminus (\mathbb{R} \setminus G) = G$.

[L1] $U$ is open when every $x \in U$ admits a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $F$ is closed when $\mathbb{R} \setminus F$ is open ([[def-open-and-closed-in-r]]).

[L2] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$, and $0 < \delta \le \varepsilon$ gives $N_\delta(x) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L3] Every nonempty finite set of reals has a minimum, so $\min\{\varepsilon, \eta\}$ is defined and equals one of the two entries, and is $\le$ both ([[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 Let $x \in \bigcup \mathcal{U}$. Then $x \in U$ for some $U \in \mathcal{U}$, and $U$ is open, so there is $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U \subseteq \bigcup \mathcal{U}$; as $x$ was arbitrary, $\bigcup \mathcal{U}$ is open, which is claim 1. [given, L1, choose]

1.2 Now let $U$ and $V$ be open and let $x \in U \cap V$; fix $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$ and $\eta > 0$ with $N_\eta(x) \subseteq V$. [given, L1, choose]

2.1 Put $\delta := \min\{\varepsilon, \eta\}$, which is one of $\varepsilon, \eta$ and hence $> 0$, and satisfies $\delta \le \varepsilon$ and $\delta \le \eta$; then $N_\delta(x) \subseteq N_\varepsilon(x) \subseteq U$ and $N_\delta(x) \subseteq N_\eta(x) \subseteq V$, so $N_\delta(x) \subseteq U \cap V$, and as $x$ was arbitrary $U \cap V$ is open. [step 1.2, L2, L3]

2.2 The family $\{\, \mathbb{R} \setminus F : F \in \mathcal{F} \,\}$ consists of open sets by [L1], so its union is open by step 1.1; that union is $\mathbb{R} \setminus \bigcap \mathcal{F}$ by [A1], so $\bigcap \mathcal{F}$ is closed, which is claim 3. [step 1.1, A1, L1]

3.1 Claim 2 now follows by induction on $n$: for $n = 0$ the intersection is $U_0$, which is open by hypothesis; and if $W := U_0 \cap \dots \cap U_n$ is open then $U_0 \cap \dots \cap U_{n+1} = W \cap U_{n+1}$ is an intersection of two open sets, hence open by step 2.1. [step 2.1, given]

4.1 Each $\mathbb{R} \setminus F_i$ is open by [L1], so $(\mathbb{R} \setminus F_0) \cap \dots \cap (\mathbb{R} \setminus F_n)$ is open by step 3.1; that set is $\mathbb{R} \setminus (F_0 \cup \dots \cup F_n)$ by [A1], so $F_0 \cup \dots \cup F_n$ is closed, which is claim 4. [step 3.1, A1, L1]

5.1 Claims 1, 2, 3 and 4 are steps 1.1, 3.1, 2.2 and 4.1 respectively, so arbitrary unions and finite intersections of open sets are open, and arbitrary intersections and finite unions of closed sets are closed. [step 1.1, step 2.2, step 3.1, step 4.1] ∎

## Remarks

- **Completeness plays no part.** Nothing above uses the least-upper-bound
  property, or even the Archimedean property: the only facts about $\mathbb{R}$
  the proof touches are the definition of a neighbourhood, its monotonicity in
  the radius, and the comparison of two positive radii. What needs completeness
  is not the algebra of open sets but the theorems about compactness that come
  later.

- **Why finiteness cannot be dropped in claim 2.** The minimum taken in step 2.1
  is a minimum of finitely many positive radii, and it is positive precisely
  because it is one of them ([[lem-finite-set-has-max]]). An infinite family of
  positive radii has an infimum that may be $0$, and then no positive $\delta$
  survives. That is exactly what happens for the shrinking intervals of
  [[fs-arbitrary-intersection-of-open-is-open]], whose named witness is
  [[cex-intersection-of-shrinking-intervals-not-open]].

- **The four claims are a rewriting of two.** Claims 3 and 4 are claims 1 and 2
  read through complementation, and closedness is *defined* by complementation
  ([[def-open-and-closed-in-r]]), so no separate argument about closed sets is
  possible or needed.
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

