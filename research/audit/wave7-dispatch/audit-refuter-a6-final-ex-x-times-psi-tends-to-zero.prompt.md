# Audit proof-refuter brief — Wave 7, step A6

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

- critical risk (11): 12 declared dependencies; 15 cited facts; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; analytic limiting/completeness language
- Wave 7 ai-generated statement seed
- direct-citation consumer of pending genrisk seed cex-psi-of-one-over-x-has-no-limit-at-zero
- pending genrisk seed (cone 4)
- direct-citation consumer of pending genrisk seed rem-classical-oscillator-is-sine-of-one-over-x

## Target item — `ex-x-times-psi-tends-to-zero`

Normalized current SHA-256: `ae21e13f264e0492da3c13cf56fa9ffeaca43524767a44f4955e1c1f1f815632`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-x-times-psi-tends-to-zero
kind: example
title: "$x\\,\\psi(1/x) \\to 0$ as $x \\to 0$, by the squeeze theorem"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [ex-distance-to-the-integers, thm-squeeze-for-function-limits, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, lem-of-sign-rules, lem-of-inverse-positive, lem-of-add-order, cor-of-one-positive, def-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x\\,\\psi(1/x) \\to 0$"
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
    - title: "Squeeze theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Squeeze_theorem"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Example

Let $A := \mathbb{R} \setminus \{0\}$ and define $h : A \to \mathbb{R}$ by

$$h(x) \;:=\; x \cdot \psi(1/x),$$

with $\psi$ as in [[ex-distance-to-the-integers]]. Then $0$ is a limit point of
$A$, the limit of $h$ at $0$ exists, and

$$\lim_{x \to 0} h(x) \;=\; 0 .$$

**The point of the example.** The factor $\psi(1/x)$ has no limit at $0$ at all
([[cex-psi-of-one-over-x-has-no-limit-at-zero]]), so
[[thm-algebra-of-function-limits]] cannot be applied to the product: its product
rule requires both factors to have limits. What is available is that
$\psi(1/x)$ stays inside $[0,1/2]$, and a bounded factor multiplied by one
tending to $0$ is killed. That is exactly what
[[thm-squeeze-for-function-limits]] delivers, and it delivers the *existence* of
the limit, not merely its value.

## Facts & Assumptions

**Given:** The set $A = \mathbb{R} \setminus \{0\}$ and the function $h : A \to \mathbb{R}$, $h(x) = x \cdot \psi(1/x)$, with $\psi$ the function of [[ex-distance-to-the-integers]].

[L1] Range of $\psi$: $0 \le \psi(u) \le 1/2$ for every real $u$ ([[ex-distance-to-the-integers]], claim 2).

[L2] The limit condition ([[def-function-limit]]): $\lim_{x \to c} f(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain with $0 < |x - c| < \delta$ satisfies $|f(x) - P| < \varepsilon$.

[L3] Squeeze theorem: if $f \le g \le k$ on $A \cap N^{*}_{\eta}(c)$ for some real $\eta > 0$, and the limits of $f$ and of $k$ at $c$ exist and are equal to $L$, then the limit of $g$ at $c$ exists and equals $L$ ([[thm-squeeze-for-function-limits]]).

[L4] Absolute value: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|uv| = |u|\,|v|$; $|-u| = |u|$; $|u| = u$ for $u \ge 0$; and $-|u| \le u \le |u|$ ([[lem-of-abs-value]]).

[L5] Order and field arithmetic: $x \ne 0$ has an inverse $1/x$ ([[def-field]]); $0 < 1$, so $2 > 0$ and $1/2 > 0$ with $t/2 < t$ for $t > 0$ ([[cor-of-one-positive]], [[lem-of-inverse-positive]], [[lem-of-sign-rules]]); multiplying an inequality by a non-negative factor, and adding inequalities ([[lem-of-sign-rules]], [[lem-of-add-order]]); the order is total ([[def-ordered-field]]). Those two sources state their moves in their STRICT forms only; the non-strict forms used below follow by adjoining the equality case, in which the two sides coincide ([[def-ordered-field]]).

[L6] Limit point and neighbourhoods ([[def-limit-point-r]], [[def-neighbourhood-r]]).

## Verification

**Proof technique:** direct.

1.1 $0$ is a limit point of $A = \mathbb{R} \setminus \{0\}$: given a real $\varepsilon > 0$, the real $\varepsilon/2$ satisfies $\varepsilon/2 > 0$, so it lies in $A$, and $0 < |\varepsilon/2 - 0| = \varepsilon/2 < \varepsilon$. [L4, L5, L6]

1.2 $h$ is defined on all of $A$, and $|h(x)| \le |x|/2$ there: for $x \in A$ we have $x \ne 0$, so $1/x$ exists, and $|h(x)| = |x| \cdot \psi(1/x)$ by [L4], while $0 \le \psi(1/x) \le 1/2$ by [L1] and $|x| \ge 0$, so multiplying the inequality $\psi(1/x) \le 1/2$ by the non-negative factor $|x|$ gives $|h(x)| \le |x|/2$. [L1, L4, L5]

1.3 The two functions $x \mapsto -|x|/2$ and $x \mapsto |x|/2$ on $A$ each have limit $0$ at $0$: given a real $\varepsilon > 0$, take $\delta := \varepsilon$; every $x \in A$ with $0 < |x - 0| < \delta$ satisfies $\bigl| |x|/2 - 0 \bigr| = |x|/2 < \varepsilon/2 < \varepsilon$, and likewise $\bigl| -|x|/2 - 0 \bigr| = |x|/2 < \varepsilon$. [L2, L4, L5]

2.1 Hence $-|x|/2 \le h(x) \le |x|/2$ for every $x \in A$, by [L4] applied to $|h(x)| \le |x|/2$. [step 1.2, L4]

3.1 The three functions satisfy $-|x|/2 \le h(x) \le |x|/2$ on all of $A$, in particular on $A \cap N^{*}_{1}(0)$, and the two outer ones have limit $0$ at $0$; since $0$ is a limit point of $A$, the squeeze theorem [L3] gives that the limit of $h$ at $0$ exists and equals $0$. [step 1.1, step 1.3, step 2.1, L3] ∎

## Remarks

- **Where the hypotheses of the squeeze theorem are met.** The order hypothesis holds on all of $A$, so any $\eta > 0$ serves and $\eta = 1$ is taken; the two outer limits are computed by hand in step 1.3; and $0$ is a limit point of $A$ by step 1.1, which is what makes every limit here well posed ([[def-function-limit]]).

- **Nothing about $\psi$ beyond its range is used.** Replacing $\psi$ by any function with values in a fixed bounded set would give the same conclusion by the same three steps. What makes the example worth stating is the contrast with [[cex-psi-of-one-over-x-has-no-limit-at-zero]]: the same oscillating factor, multiplied by $x$ or not, is the difference between a limit existing and not.

- **The classical version of this example** is $x \sin(1/x) \to 0$ as $x \to 0$; see [[rem-classical-oscillator-is-sine-of-one-over-x]] for why this library writes $\psi$ and not $\sin$.
````

## Wave 7 provenance row for the target

```json
{
  "id": "ex-x-times-psi-tends-to-zero",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "Positive novelty determination: replacing sin(1/x) by this library’s bespoke distance-to-integers psi and damping it by x is a repository-specific witness. The bound 0<=psi<=1/2 immediately gives |x psi(1/x)|<=|x|/2 and the squeeze proof verifies the limit.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-completeness-limits.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "ex-distance-to-the-integers",
      "source_section": "Example",
      "quote": "Identify $\\mathbb{Z}$ with its canonical copy in $\\mathbb{R}$\n([[def-integers]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]) and for\n$x \\in \\mathbb{R}$ put\n\n$$D(x) \\;:=\\; \\{\\, |x - n| \\ : \\ n \\in \\mathbb{Z} \\,\\}, \\qquad \\psi(x) \\;:=\\; \\inf D(x)$$\n\n([[def-infimum]]). Write $m := \\lfloor x \\rfloor$ for the integer part of $x$\n([[lem-integer-part]]) and $t := x - m$, so $0 \\le t < 1$. Then:\n\n1. **Existence and attainment.** $\\psi(x)$ exists and is **attained**:\n   $$\\psi(x) \\;=\\; \\min\\{\\, t,\\ 1 - t \\,\\} \\;=\\; \\min\\bigl\\{\\, |x - m|,\\ |x - (m+1)| \\,\\bigr\\} ,$$\n   so $\\psi(x) = |x - n|$ for $n = m$ or $n = m + 1$, and $\\psi(x) = \\min D(x)$\n   ([[def-max-min]]).\n2. **Range.** $0 \\le \\psi(x) \\le 1/2$ for every real $x$, and every value in\n   $[0, 1/2]$ occurs: the range of $\\psi$ is exactly the interval $[0, 1/2]$\n   ([[def-interval]]).\n3. **Zero set.** $\\psi(x) = 0$ if and only if $x \\in \\mathbb{Z}$.\n4. **Half-integers.** $\\psi(m + 1/2) = 1/2$ for every $m \\in \\mathbb{Z}$.\n5. **Periodicity.** $\\psi(x + 1) = \\psi(x)$ for every real $x$.\n\n**What this function is for.** It is the elementary, trigonometry-free\nsubstitute for $\\sin$: it is bounded, it oscillates, and on every punctured\nneighbourhood of $0$ the composite $\\psi(1/x)$ attains both the value $0$ and the\nvalue $1/2$. Claims 3 and 4 are exactly what the companion counterexample\n[[cex-psi-of-one-over-x-has-no-limit-at-zero]] evaluates, and claim 2 is what the\nsqueeze argument of [[ex-x-times-psi-tends-to-zero]] uses.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-function-limit",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]) with its order and absolute value\n([[def-real-order]]).\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c \\in \\mathbb{R}$\nbe a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \\in \\mathbb{R}$.\nWe say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write\n\n$$\\lim_{x \\to c} f(x) = L ,$$\n\nwhen\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - L| < \\varepsilon\\ \\bigr],$$\n\nwhere $\\varepsilon$ and $\\delta$ range over the **positive reals**.\n\nIn the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:\nfor every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n\n$$f\\bigl(A \\cap N^{*}_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}(L),$$\n\n$N^{*}_{\\delta}(c) = \\{\\, y : 0 < |y - c| < \\delta \\,\\}$ being the punctured\n$\\delta$-neighbourhood of $c$ and $N_{\\varepsilon}(L) = (L - \\varepsilon,\\ L +\n\\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because\n$|f(x) - L| < \\varepsilon$ says exactly $f(x) \\in N_\\varepsilon(L)$, and\n$0 < |x - c| < \\delta$ says exactly $x \\in N^{*}_\\delta(c)$.\n\n**Three features of this definition are load bearing, not decoration.**\n\n1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that\n   says every punctured neighbourhood of $c$ meets $A$, so for every $\\delta > 0$\n   the set $A \\cap N^{*}_\\delta(c)$ over which the implication quantifies is\n   nonempty. Drop the requirement and the implication can be satisfied\n   vacuously by *every* real $L$ at once, which is exactly what\n   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$\n   that is not a limit point of $A$ — an isolated point — the symbol\n   $\\lim_{x \\to c} f(x)$ is therefore **not defined** in this library.\n\n2. **$c \\in A$ is not required.** A limit point of $A$ need not belong to $A$\n   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This\n   is what allows a limit to be taken at a point where the function is not\n   defined at all, as at $0$ for $x \\mapsto x\\,\\psi(1/x)$.\n\n3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis\n   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the\n   single point $c$ changes nothing. Equality of the limit with the value is an\n   extra condition, not a consequence: [[fs-limit-equals-value]].\n\n**The notation presumes uniqueness.** Writing $\\lim_{x \\to c} f(x) = L$ treats\nthe left-hand side as a name for a single real number, which is legitimate only\nbecause at a limit point at most one $L$ can satisfy the displayed condition.\nThat obligation is discharged by [[lem-function-limit-unique]], recorded in this\nitem's `justified_by`. As with $\\sup S$ ([[rem-sup-conventions]]) and\n$\\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function\nalready known to have a limit at $c$.\n\n**Real and rational $\\varepsilon$ define the same relation.** Above,\n$\\varepsilon$ and $\\delta$ range over the positive reals. Restricting either\nquantifier to the positive rationals gives the same relation: every positive\nrational is a positive real, and below every positive real lies a positive\nrational ([[lem-rat-embeds-dense]]), so an $\\varepsilon$-condition verified for\nall positive rationals is verified for an arbitrary positive real $\\eta$ by\nrunning it at a rational $\\varepsilon$ with $0 < \\varepsilon < \\eta$, and a\n$\\delta$ produced as a real may be shrunk to a rational one below it. This is\nthe passage sanctioned in the remarks of [[def-sequence]], and it is what lets\nthis definition be compared with [[def-real-limit]], whose $\\varepsilon$ is\nrational, in [[thm-sequential-criterion-for-function-limits]].",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-squeeze-for-function-limits",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c$ be a limit point of $A$\n([[def-limit-point-r]]) and let $f, g, h : A \\to \\mathbb{R}$. Suppose there is a\nreal $\\eta > 0$ with\n\n$$f(x) \\le g(x) \\le h(x) \\qquad \\text{for every } x \\in A \\text{ with } 0 < |x - c| < \\eta ,$$\n\nand suppose the limits of $f$ and of $h$ at $c$ exist and are equal, say\n$\\lim_{x \\to c} f(x) = \\lim_{x \\to c} h(x) = L$ ([[def-function-limit]]). Then\nthe limit of $g$ at $c$ **exists**, and\n\n$$\\lim_{x \\to c} g(x) \\;=\\; \\lim_{x \\to c} f(x) \\;=\\; \\lim_{x \\to c} h(x) \\;=\\; L .$$\n\n**This is the one result on this page that produces a limit rather than\ncomputing one.** No hypothesis whatever is placed on $g$ beyond the two\ninequalities: $g$ may be wildly irregular, as $x \\mapsto x\\,\\psi(1/x)$ on the\ncompanion page is, and the theorem still delivers its limit at $c$.\n\nThe proof is a direct $\\varepsilon$-$\\delta$ argument and uses no choice\nprinciple.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-field",
      "source_section": "Definition",
      "quote": "A **field** is a set $F$ equipped with two binary operations $+$ (addition) and\n$\\cdot$ (multiplication) and two distinguished elements $0 \\ne 1$ of $F$,\nsatisfying:\n\n- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is\n  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an\n  additive inverse $-x$ with $x + (-x) = 0$.\n- **(M)** Multiplication is associative and commutative **on all of $F$**, and\n  $x \\cdot 1 = x$ for every $x \\in F$; moreover $(F \\setminus \\{0\\}, \\cdot)$ is an\n  abelian group with identity $1$, so every $x \\ne 0$ has a multiplicative inverse\n  $x^{-1}$ with $x \\cdot x^{-1} = 1$.\n- **(D)** Multiplication distributes over addition: $x \\cdot (y + z) = x\\cdot y + x\\cdot z$.\n\nWe write $x - y := x + (-y)$ and $x/y := x \\cdot y^{-1}$ (for $y \\ne 0$), and\nabbreviate $x \\cdot y$ as $xy$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L5",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
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
        "1.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L5",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L6",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$0$ is a limit point of $A = \\mathbb{R} \\setminus \\{0\\}$: given a real $\\varepsilon > 0$, the real $\\varepsilon/2$ satisfies $\\varepsilon/2 > 0$, so it lies in $A$, and $0 < |\\varepsilon/2 - 0| = \\varepsilon/2 < \\varepsilon$.",
      "step": "1.1",
      "inputs": [
        "L4",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "$h$ is defined on all of $A$, and $|h(x)| \\le |x|/2$ there: for $x \\in A$ we have $x \\ne 0$, so $1/x$ exists, and $|h(x)| = |x| \\cdot \\psi(1/x)$ by [L4], while $0 \\le \\psi(1/x) \\le 1/2$ by [L1] and $|x| \\ge 0$, so multiplying the inequality $\\psi(1/x) \\le 1/2$ by the non-negative factor $|x|$ gives $|h(x)| \\le |x|/2$.",
      "step": "1.2",
      "inputs": [
        "L4",
        "L1",
        "L5"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "The two functions $x \\mapsto -|x|/2$ and $x \\mapsto |x|/2$ on $A$ each have limit $0$ at $0$: given a real $\\varepsilon > 0$, take $\\delta := \\varepsilon$; every $x \\in A$ with $0 < |x - 0| < \\delta$ satisfies $\\bigl| |x|/2 - 0 \\bigr| = |x|/2 < \\varepsilon/2 < \\varepsilon$, and likewise $\\bigl| -|x|/2 - 0 \\bigr| = |x|/2 < \\varepsilon$.",
      "step": "1.3",
      "inputs": [
        "L2",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Hence $-|x|/2 \\le h(x) \\le |x|/2$ for every $x \\in A$, by [L4] applied to $|h(x)| \\le |x|/2$.",
      "step": "2.1",
      "inputs": [
        "L4",
        "1.2"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "The three functions satisfy $-|x|/2 \\le h(x) \\le |x|/2$ on all of $A$, in particular on $A \\cap N^{*}_{1}(0)$, and the two outer ones have limit $0$ at $0$; since $0$ is a limit point of $A$, the squeeze theorem [L3] gives that the limit of $h$ at $0$ exists and equals $0$.",
      "step": "3.1",
      "inputs": [
        "L3",
        "1.1",
        "1.3",
        "2.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement quantifies over fixed nonempty data and introduces no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: $0$ is a limit point of $A = \\mathbb{R} \\setminus \\{0\\}$: given a real $\\varepsilon > 0$, the real $\\varepsilon/2$ satisfies $\\varepsilon/2 > 0$, so it lies in $A$, and $0 < |\\varepsilon/2 - 0| = \\varepsilon/2 < \\varepsilon$."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.2: $h$ is defined on all of $A$, and $|h(x)| \\le |x|/2$ there: for $x \\in A$ we have $x \\ne 0$, so $1/x$ exists, and $|h(x)| = |x| \\cdot \\psi(1/x)$ by [L4], while $0 \\le \\psi(1/x) \\le 1/2$ by [L1] and $|x| \\ge 0$, so multiplying the inequality $\\psi(1/x) \\le 1/2$"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.2: $h$ is defined on all of $A$, and $|h(x)| \\le |x|/2$ there: for $x \\in A$ we have $x \\ne 0$, so $1/x$ exists, and $|h(x)| = |x| \\cdot \\psi(1/x)$ by [L4], while $0 \\le \\psi(1/x) \\le 1/2$ by [L1] and $|x| \\ge 0$, so multiplying the inequality $\\psi(1/x) \\le 1/2$"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement has no interval endpoint or finite-index endpoint boundary."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: the proof begins from named data and uses only explicit witnesses or deterministic constructions; no selection from an unindexed nonempty family is hidden."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement is not a biconditional; it is a one-directional result, example, or refutation."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement is not a biconditional; no reverse implication is asserted."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract after reading every numbered step and every cited target section; independent risk review remains for A5/A6."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-x-times-psi-tends-to-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "ex-distance-to-the-integers",
    "declared_target": "ex-distance-to-the-integers",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions-examples",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-x-times-psi-tends-to-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-squeeze-for-function-limits",
    "declared_target": "thm-squeeze-for-function-limits",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-x-times-psi-tends-to-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-x-times-psi-tends-to-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-x-times-psi-tends-to-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-x-times-psi-tends-to-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-x-times-psi-tends-to-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-x-times-psi-tends-to-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-x-times-psi-tends-to-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-x-times-psi-tends-to-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-x-times-psi-tends-to-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-field",
    "declared_target": "def-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-x-times-psi-tends-to-zero",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[
  {
    "id": "cex-psi-of-one-over-x-has-no-limit-at-zero",
    "file": "items/cex-psi-of-one-over-x-has-no-limit-at-zero.md",
    "source": "provenance",
    "cone_size": 4,
    "logical_consumers": [],
    "direct_citation_consumers": [
      {
        "id": "ex-distance-to-the-integers",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-one-sided-limits-of-the-sign-function",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-x-times-psi-tends-to-zero",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "rem-classical-oscillator-is-sine-of-one-over-x",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  },
  {
    "id": "ex-x-times-psi-tends-to-zero",
    "file": "items/ex-x-times-psi-tends-to-zero.md",
    "source": "provenance",
    "cone_size": 4,
    "logical_consumers": [],
    "direct_citation_consumers": [
      {
        "id": "cex-psi-of-one-over-x-has-no-limit-at-zero",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-distance-to-the-integers",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-x-times-dirichlet-has-a-limit-only-at-zero",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "rem-classical-oscillator-is-sine-of-one-over-x",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  },
  {
    "id": "rem-classical-oscillator-is-sine-of-one-over-x",
    "file": "items/rem-classical-oscillator-is-sine-of-one-over-x.md",
    "source": "provenance",
    "cone_size": 2,
    "logical_consumers": [],
    "direct_citation_consumers": [
      {
        "id": "cex-psi-of-one-over-x-has-no-limit-at-zero",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-x-times-psi-tends-to-zero",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full text of every cited or declared item (15)

### `cex-psi-of-one-over-x-has-no-limit-at-zero`

````markdown
---
id: cex-psi-of-one-over-x-has-no-limit-at-zero
kind: counterexample
title: "$\\psi(1/x)$ has no limit at $0$: two sequences tending to $0$ give values constantly $0$ and constantly $1/2$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [ex-distance-to-the-integers, cor-sequential-criterion-for-nonexistence, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-sequence, def-real-limit, def-natural-numbers, def-integers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, thm-int-comm-ring, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-sign-rules, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, def-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$\\psi(1/x)$ has no limit at $0$"
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
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the function

$$\Phi : \mathbb{R} \setminus \{0\} \to \mathbb{R}, \qquad \Phi(x) := \psi(1/x) ,$$

with $\psi$ the distance to the integers ([[ex-distance-to-the-integers]]), has a
limit at $0$ ([[def-function-limit]]).

$\Phi$ is bounded — $0 \le \Phi(x) \le 1/2$ for every $x \ne 0$, by claim 2 of
[[ex-distance-to-the-integers]] — and $0$ is a limit point of its domain, so
every hypothesis that might plausibly deliver a limit except the limit itself is
present. Boundedness near a point is therefore **not** sufficient for a limit to
exist, and the converse of [[lem-limit-implies-local-boundedness]] fails.

The refutation exhibits two sequences of positive reals tending to $0$ along
which $\Phi$ is constantly $0$ and constantly $1/2$, and applies
[[cor-sequential-criterion-for-nonexistence]].

## Facts & Assumptions

**Given:** The function $\Phi(x) = \psi(1/x)$ on $\mathbb{R} \setminus \{0\}$, and the sequences $x_k := 1/(k+1)$ and $y_k := 2/(2k+1)$ for $k \in \mathbb{N}$. Sequences are functions on $\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]], [[def-natural-numbers]]), so the first terms are $x_0 = 1$ and $y_0 = 2$; the denominators $k+1$ and $2k+1$ are canonical naturals $\ge 1$, never $0$, which is why the sequences are written this way and not as $1/k$.

[L1] The function $\psi$ vanishes exactly on $\mathbb{Z}$, satisfies $\psi(m + 1/2) = 1/2$ for every $m \in \mathbb{Z}$, and takes values in $[0,1/2]$ ([[ex-distance-to-the-integers]], claims 2, 3 and 4).

[L2] Nonexistence criterion: if two sequences with all terms in $A \setminus \{c\}$ converge to $c$ while the image sequences converge to distinct reals, then $f$ has no limit at $c$ ([[cor-sequential-criterion-for-nonexistence]]).

[L3] Sequential convergence, and the fact that a constant sequence converges to its value ([[def-real-limit]], [[def-sequence]]). Testing against every positive real rather than every positive rational defines the same relation ([[lem-rat-embeds-dense]], remarks of [[def-sequence]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]); canonical naturals are positive and strictly increasing in the index ([[lem-of-naturals-positive]]); and $0 < a < b$ gives $0 < 1/b < 1/a$, with the non-strict form following by adjoining equality ([[lem-of-inverse-positive]]).

[L5] Limit point and neighbourhoods ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L6] Absolute value ([[lem-of-abs-value]]); order and field arithmetic: $0 < 1$, so $2 > 0$ and $1/2 > 0$ with $1/2 \ne 0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-field]], [[def-ordered-field]]).

[L7] Integers in $\mathbb{R}$: every canonical natural is an integer, and $\mathbb{Z}$ is closed under adding $1$ ([[def-integers]], [[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[thm-int-comm-ring]]).

## Counterexample

**Proof technique:** direct.

1.1 $0$ is a limit point of $\mathbb{R} \setminus \{0\}$: given a real $\varepsilon > 0$, the real $\varepsilon/2$ is positive, hence lies in $\mathbb{R} \setminus \{0\}$, and $0 < |\varepsilon/2 - 0| = \varepsilon/2 < \varepsilon$. [L5, L6]

1.2 For every $k \in \mathbb{N}$ the terms $x_k = 1/(k+1)$ and $y_k = 2/(2k+1)$ are defined and positive, since $k + 1 \ge 1 > 0$ and $2k + 1 \ge 1 > 0$; in particular $x_k \ne 0$ and $y_k \ne 0$, so both sequences have all their terms in $\mathbb{R} \setminus \{0\}$, which equals $(\mathbb{R} \setminus \{0\}) \setminus \{0\}$. [L4, L6, L7]

1.3 The reals $0$ and $1/2$ are distinct, since $1/2 > 0$. [L6]

2.1 $x_k \to 0$: given a real $\varepsilon > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < \varepsilon$; every $k \ge n$ has $k + 1 > n \ge 1$, hence $|x_k - 0| = 1/(k+1) < 1/n < \varepsilon$. [step 1.2, L3, L4, L6]

2.2 $y_k \to 0$: for every $k \in \mathbb{N}$ we have $2k + 1 \ge k + 1$, since their difference is $k \ge 0$, so $0 < y_k = 2/(2k+1) \le 2/(k+1)$. Given a real $\varepsilon > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < \varepsilon/2$; every $k \ge n$ has $k + 1 > n$, hence $|y_k - 0| \le 2/(k+1) < 2/n < \varepsilon$. [step 1.2, L3, L4, L6]

2.3 $\Phi(x_k) = 0$ for every $k$: $1/x_k = k + 1$, a canonical natural and hence an integer by [L7], so $\psi(1/x_k) = 0$ by [L1]. The image sequence is therefore the constant sequence $0$ and converges to $0$. [step 1.2, L1, L3, L7]

2.4 $\Phi(y_k) = 1/2$ for every $k$: $1/y_k = (2k+1)/2 = k + 1/2$ with $k$ an integer by [L7], so $\psi(1/y_k) = 1/2$ by [L1]. The image sequence is therefore the constant sequence $1/2$ and converges to $1/2$. [step 1.2, L1, L3, L6, L7]

3.1 So $(x_k)$ and $(y_k)$ have all their terms in $(\mathbb{R} \setminus \{0\}) \setminus \{0\}$ and both converge to $0$, which is a limit point of $\mathbb{R} \setminus \{0\}$, while the image sequences converge to the distinct reals $0$ and $1/2$. By [L2], $\Phi$ has no limit at $0$. [step 1.1, step 1.3, step 2.1, step 2.2, step 2.3, step 2.4, L2] ∎

## Remarks

- **Both witnessing sequences have positive terms**, so what is refuted is already the existence of the *right-hand* limit $\lim_{x \to 0^{+}} \Phi(x)$ ([[def-one-sided-limits]]), and the two-sided failure follows. The contrast with the sign function on this page is exact: there both one-sided limits exist and merely disagree.

- **Why $1/(k+1)$ and $2/(2k+1)$.** They are the sequences whose reciprocals are $k+1$ and $k + 1/2$, that is, the integers and the half-integers, which are precisely the two sets on which claims 3 and 4 of [[ex-distance-to-the-integers]] evaluate $\psi$ exactly. Writing $1/k$ instead would be undefined at the index $k = 0$, since $\mathbb{N}$ contains $0$ ([[def-sequence]]).

- **Multiplying by $x$ repairs it.** The function $x \mapsto x\,\psi(1/x)$ does have a limit at $0$, namely $0$, by the squeeze theorem ([[ex-x-times-psi-tends-to-zero]]). The oscillation is unchanged; what changes is that its amplitude is forced to $0$.

- **The classical form of this counterexample** uses $\sin(1/x)$ in place of $\psi(1/x)$; [[rem-classical-oscillator-is-sine-of-one-over-x]] records why this library cannot yet write it.
````

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

### `def-field`

````markdown
---
id: def-field
kind: definition
title: "Field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
justified_by: [lem-of-inverse-unique]
aliases: []
landmark: false
short: "field"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-28
    scope: page
    delegated_by: owner
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
---

## Definition

A **field** is a set $F$ equipped with two binary operations $+$ (addition) and
$\cdot$ (multiplication) and two distinguished elements $0 \ne 1$ of $F$,
satisfying:

- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is
  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an
  additive inverse $-x$ with $x + (-x) = 0$.
- **(M)** Multiplication is associative and commutative **on all of $F$**, and
  $x \cdot 1 = x$ for every $x \in F$; moreover $(F \setminus \{0\}, \cdot)$ is an
  abelian group with identity $1$, so every $x \ne 0$ has a multiplicative inverse
  $x^{-1}$ with $x \cdot x^{-1} = 1$.
- **(D)** Multiplication distributes over addition: $x \cdot (y + z) = x\cdot y + x\cdot z$.

We write $x - y := x + (-y)$ and $x/y := x \cdot y^{-1}$ (for $y \ne 0$), and
abbreviate $x \cdot y$ as $xy$.

## Remarks

- The rationals $\mathbb{Q}$ ([[thm-rat-field]]) and both constructions of the
  reals ([[thm-reals-field]], [[thm-reals-dedekind-field]]) are fields. This
  definition states the field axioms once, abstractly, so that every field fact
  proved from them applies to all of these at once.
- The requirement $0 \ne 1$ excludes the trivial one-element structure.
- **Why (M) quantifies over all of $F$ explicitly** (amended 2026-07-28, owner
  approved). An earlier wording headed (M) with the group
  $(F \setminus \{0\}, \cdot)$ alone, and under that strict reading the axioms
  do not pin down the products $0 \cdot y$: take $\mathbb{F}_2$ and redefine
  $0 \cdot y := y$, which leaves (A) untouched, leaves
  $(F \setminus \{0\}, \cdot)$ the trivial group, and satisfies (D) in all eight
  instances, yet has $0 \cdot 1 = 1$ — making [[lem-of-zero-mult]] false in a
  purported model of the axioms. Associativity, commutativity and
  $x \cdot 1 = x$ are therefore asserted on **all** of $F$, the element $0$
  included. Commutativity on all of $F$ is also what turns (D) into its
  right-hand form $(y + z) \cdot x = y \cdot x + z \cdot x$, which
  [[lem-of-zero-mult]] uses.
- The identities $0, 1$ and the inverses $-x, x^{-1}$ are unique
  ([[lem-of-inverse-unique]]), so writing them as single-valued notation, and
  the abbreviations $x - y := x + (-y)$ and $x/y := x y^{-1}$, are legitimate.
````

### `def-function-limit`

````markdown
---
id: def-function-limit
kind: definition
title: "The $\\varepsilon$-$\\delta$ limit $\\lim_{x \\to c} f(x) = L$ of $f : A \\to \\mathbb{R}$ at a limit point $c$ of $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-point-r, def-neighbourhood-r, def-interval, def-real-order, def-complete-ordered-field, lem-of-abs-value, lem-rat-embeds-dense]
justified_by: [lem-function-limit-unique]
aliases: [def-epsilon-delta-limit, def-limit-of-a-function]
landmark: true
short: "the $\\varepsilon$-$\\delta$ limit of a function"
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
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) with its order and absolute value
([[def-real-order]]).

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c \in \mathbb{R}$
be a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \in \mathbb{R}$.
We say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write

$$\lim_{x \to c} f(x) = L ,$$

when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ 0 < |x - c| < \delta \ \Longrightarrow\ |f(x) - L| < \varepsilon\ \bigr],$$

where $\varepsilon$ and $\delta$ range over the **positive reals**.

In the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:
for every real $\varepsilon > 0$ there is a real $\delta > 0$ with

$$f\bigl(A \cap N^{*}_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}(L),$$

$N^{*}_{\delta}(c) = \{\, y : 0 < |y - c| < \delta \,\}$ being the punctured
$\delta$-neighbourhood of $c$ and $N_{\varepsilon}(L) = (L - \varepsilon,\ L +
\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because
$|f(x) - L| < \varepsilon$ says exactly $f(x) \in N_\varepsilon(L)$, and
$0 < |x - c| < \delta$ says exactly $x \in N^{*}_\delta(c)$.

**Three features of this definition are load bearing, not decoration.**

1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that
   says every punctured neighbourhood of $c$ meets $A$, so for every $\delta > 0$
   the set $A \cap N^{*}_\delta(c)$ over which the implication quantifies is
   nonempty. Drop the requirement and the implication can be satisfied
   vacuously by *every* real $L$ at once, which is exactly what
   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$
   that is not a limit point of $A$ — an isolated point — the symbol
   $\lim_{x \to c} f(x)$ is therefore **not defined** in this library.

2. **$c \in A$ is not required.** A limit point of $A$ need not belong to $A$
   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This
   is what allows a limit to be taken at a point where the function is not
   defined at all, as at $0$ for $x \mapsto x\,\psi(1/x)$.

3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis
   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the
   single point $c$ changes nothing. Equality of the limit with the value is an
   extra condition, not a consequence: [[fs-limit-equals-value]].

**The notation presumes uniqueness.** Writing $\lim_{x \to c} f(x) = L$ treats
the left-hand side as a name for a single real number, which is legitimate only
because at a limit point at most one $L$ can satisfy the displayed condition.
That obligation is discharged by [[lem-function-limit-unique]], recorded in this
item's `justified_by`. As with $\sup S$ ([[rem-sup-conventions]]) and
$\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function
already known to have a limit at $c$.

**Real and rational $\varepsilon$ define the same relation.** Above,
$\varepsilon$ and $\delta$ range over the positive reals. Restricting either
quantifier to the positive rationals gives the same relation: every positive
rational is a positive real, and below every positive real lies a positive
rational ([[lem-rat-embeds-dense]]), so an $\varepsilon$-condition verified for
all positive rationals is verified for an arbitrary positive real $\eta$ by
running it at a rational $\varepsilon$ with $0 < \varepsilon < \eta$, and a
$\delta$ produced as a real may be shrunk to a rational one below it. This is
the passage sanctioned in the remarks of [[def-sequence]], and it is what lets
this definition be compared with [[def-real-limit]], whose $\varepsilon$ is
rational, in [[thm-sequential-criterion-for-function-limits]].

## Remarks

- **Terminology.** *Limit point* here is a property of the set $A$ and the point
  $c$, in the sense of [[def-limit-point-r]]; it has nothing to do with
  subsequential limits ([[def-subsequential-limit]]), and the distinction is the
  one that item records.

- **Why the punctured condition, and not $|x - c| < \delta$.** With the
  unpunctured condition the definition would force $f$ to be defined at $c$ and
  would force $|f(c) - L| < \varepsilon$ for every $\varepsilon$, that is,
  $L = f(c)$. The resulting notion is continuity at $c$, a strictly stronger
  condition, and conflating the two is the error catalogued in
  [[fs-limit-equals-value]].

- **One-sided and infinite variants.** Restricting the domain to one side of $c$
  gives the one-sided limits of [[def-one-sided-limits]]; replacing the
  conditions on $x$ or on $f(x)$ by unboundedness conditions gives the limits at
  and to infinity of [[def-limits-at-infinity]]. Both are built on this
  definition rather than beside it.
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

### `ex-distance-to-the-integers`

````markdown
---
id: ex-distance-to-the-integers
kind: example
title: "The trigonometry-free oscillator $\\psi(x) = \\inf_{n \\in \\mathbb{Z}} |x - n|$ is well defined and attained at a nearest integer, takes values in $[0, 1/2]$, vanishes exactly on $\\mathbb{Z}$, equals $1/2$ at half-integers, and is $1$-periodic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-integer-part, def-infimum, def-max-min, def-bounded-set, def-interval, def-integers, def-natural-numbers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, lem-nat-discrete, thm-int-ordered-ring, thm-int-comm-ring, lem-of-abs-value, def-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field, def-field]
justified_by: []
aliases: [ex-distance-to-nearest-integer, ex-triangle-wave]
landmark: true
short: "$\\psi = $ distance to $\\mathbb{Z}$"
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
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "Triangle wave (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Triangle_wave"
pipeline_run: null
---

## Example

Identify $\mathbb{Z}$ with its canonical copy in $\mathbb{R}$
([[def-integers]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]) and for
$x \in \mathbb{R}$ put

$$D(x) \;:=\; \{\, |x - n| \ : \ n \in \mathbb{Z} \,\}, \qquad \psi(x) \;:=\; \inf D(x)$$

([[def-infimum]]). Write $m := \lfloor x \rfloor$ for the integer part of $x$
([[lem-integer-part]]) and $t := x - m$, so $0 \le t < 1$. Then:

1. **Existence and attainment.** $\psi(x)$ exists and is **attained**:
   $$\psi(x) \;=\; \min\{\, t,\ 1 - t \,\} \;=\; \min\bigl\{\, |x - m|,\ |x - (m+1)| \,\bigr\} ,$$
   so $\psi(x) = |x - n|$ for $n = m$ or $n = m + 1$, and $\psi(x) = \min D(x)$
   ([[def-max-min]]).
2. **Range.** $0 \le \psi(x) \le 1/2$ for every real $x$, and every value in
   $[0, 1/2]$ occurs: the range of $\psi$ is exactly the interval $[0, 1/2]$
   ([[def-interval]]).
3. **Zero set.** $\psi(x) = 0$ if and only if $x \in \mathbb{Z}$.
4. **Half-integers.** $\psi(m + 1/2) = 1/2$ for every $m \in \mathbb{Z}$.
5. **Periodicity.** $\psi(x + 1) = \psi(x)$ for every real $x$.

**What this function is for.** It is the elementary, trigonometry-free
substitute for $\sin$: it is bounded, it oscillates, and on every punctured
neighbourhood of $0$ the composite $\psi(1/x)$ attains both the value $0$ and the
value $1/2$. Claims 3 and 4 are exactly what the companion counterexample
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] evaluates, and claim 2 is what the
squeeze argument of [[ex-x-times-psi-tends-to-zero]] uses.

## Facts & Assumptions

**Given:** A real $x$; the set $D(x) = \{\, |x - n| : n \in \mathbb{Z} \,\}$; the integer $m := \lfloor x \rfloor$ and the real $t := x - m$. Integers are identified with their canonical copies in $\mathbb{R}$.

[L1] Integer part: for every real $x$ there is exactly one integer $m$ with $m \le x < m + 1$ ([[lem-integer-part]]). Hence $0 \le t < 1$ and $0 < 1 - t \le 1$, where $1 - t = (m+1) - x$.

[L2] Integers in $\mathbb{R}$: the embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$ are injective and preserve $0$, $1$, addition and order; $\mathbb{Z}$ is a totally ordered commutative ring, closed under $n \mapsto n + 1$ and $n \mapsto n - 1$; every integer $\ge 0$ is the image of a unique natural; and a natural $j \ne 0$ satisfies $j \ge 1$, so an integer $> 0$ is $\ge 1$ and consequently, for integers $n < n'$, one has $n + 1 \le n'$ ([[def-integers]], [[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[thm-int-ordered-ring]], [[thm-int-comm-ring]], [[lem-nat-discrete]], [[def-natural-numbers]]).

[L3] Infimum: $\ell = \inf S$ when $\ell \le s$ for every $s \in S$ and $\ell' \le \ell$ for every lower bound $\ell'$ of $S$. So a lower bound of $S$ that belongs to $S$ is the infimum, and is then also the minimum of $S$ ([[def-infimum]], [[def-max-min]], [[def-bounded-set]]).

[L4] Absolute value: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L5] Order and field arithmetic in $\mathbb{R}$: the order is total and trichotomy holds; translation invariance and adding inequalities ([[lem-of-add-order]]); $0 < 1$ ([[cor-of-one-positive]]), so $2 > 0$, $1/2 > 0$ ([[lem-of-inverse-positive]]), $1/2 < 1$ and $1 - 1/2 = 1/2$ ([[lem-of-sign-rules]], [[def-field]]); and the minimum of a two-element set of reals ([[def-max-min]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 $D(x)$ is nonempty and $0$ is a lower bound of it: the integer $0$ gives $|x - 0| \in D(x)$, and $|x - n| \ge 0$ for every $n \in \mathbb{Z}$. [L2, L4]

1.2 By [L1] the integer $m = \lfloor x \rfloor$ satisfies $m \le x < m + 1$, so $t = x - m$ satisfies $0 \le t < 1$, and $(m+1) - x = 1 - t$ satisfies $0 < 1 - t \le 1$. [L1, L5]

2.1 Every element of $D(x)$ is at least $\min\{t, 1-t\}$. Let $n \in \mathbb{Z}$. By [L2] and totality either $n \le m$ or $m < n$, and in the second case $m + 1 \le n$. If $n \le m$ then $x - n \ge x - m = t \ge 0$, so $|x - n| = x - n \ge t$. If $m + 1 \le n$ then $n - x \ge (m+1) - x = 1 - t > 0$, so $|x - n| = n - x \ge 1 - t$. In both cases $|x - n| \ge \min\{t, 1-t\}$. [step 1.2, L2, L4, L5]

2.2 Both $t$ and $1 - t$ belong to $D(x)$: since $t \ge 0$ we have $t = |x - m|$, and since $1 - t > 0$ we have $1 - t = |x - (m+1)|$, with $m$ and $m+1$ in $\mathbb{Z}$. [step 1.2, L2, L4]

3.1 Hence $\min\{t, 1-t\}$ is a lower bound of $D(x)$ belonging to $D(x)$, so by [L3] it is the greatest lower bound and also the minimum: $\psi(x) = \min\{t, 1-t\} = \min\{|x - m|, |x - (m+1)|\}$, attained at $n = m$ or at $n = m+1$. This is claim 1. [step 2.1, step 2.2, L3, L5]

4.1 Claim 2, the inclusion. $\psi(x) \ge 0$, since $t \ge 0$ and $1 - t > 0$; and $\psi(x) \le 1/2$: if $t \le 1/2$ then $\psi(x) \le t \le 1/2$, while if $1/2 < t$ then $1 - t < 1 - 1/2 = 1/2$ and $\psi(x) \le 1 - t < 1/2$. So $0 \le \psi(x) \le 1/2$ for every real $x$. [step 1.2, step 3.1, L5]

4.2 Claim 3. If $\psi(x) = 0$ then $\min\{t, 1-t\} = 0$; since $1 - t > 0$ this forces $t = 0$, that is $x = m \in \mathbb{Z}$. Conversely if $x \in \mathbb{Z}$ then $|x - x| = 0$ lies in $D(x)$ and $0$ is a lower bound of $D(x)$ by step 1.1, so $\psi(x) = 0$ by [L3]. [step 1.1, step 1.2, step 3.1, L3, L4, L5]

4.3 Claim 4. Let $m \in \mathbb{Z}$ and $x := m + 1/2$. Since $0 < 1/2 < 1$ we have $m \le x < m + 1$, so the uniqueness in [L1] gives $\lfloor x \rfloor = m$ and $t = 1/2$; then step 3.1 gives $\psi(x) = \min\{1/2,\ 1 - 1/2\} = \min\{1/2, 1/2\} = 1/2$. [step 3.1, L1, L5]

4.4 Claim 5. The map $n \mapsto n + 1$ is a bijection of $\mathbb{Z}$ onto itself, with inverse $n \mapsto n - 1$ [L2]; so, substituting $n = n' + 1$, $$D(x+1) = \{\, |(x+1) - n| : n \in \mathbb{Z} \,\} = \{\, |x - n'| : n' \in \mathbb{Z} \,\} = D(x) .$$ Being infima of the same set, $\psi(x+1)$ and $\psi(x)$ are equal by step 3.1 applied at $x + 1$ and at $x$. [step 3.1, L2, L3]

5.1 Claim 2, the exact range. Every value of $\psi$ lies in $[0,1/2]$ by step 4.1. Conversely let $s$ satisfy $0 \le s \le 1/2$; then $0 \le s < 1$, so $0 \le s < 0 + 1$ and the uniqueness in [L1] gives $\lfloor s \rfloor = 0$ and $t = s$; and $s \le 1/2 \le 1 - s$ because $2s \le 1$, so step 3.1 gives $\psi(s) = \min\{s, 1-s\} = s$. Hence the range of $\psi$ is exactly $[0,1/2]$. [step 3.1, step 4.1, L1, L5]

6.1 So $\psi$ is defined at every real, is attained at a nearest integer, has range exactly $[0,1/2]$, vanishes exactly on $\mathbb{Z}$, takes the value $1/2$ at every half-integer, and is $1$-periodic. [step 3.1, step 4.1, step 4.2, step 4.3, step 4.4, step 5.1] ∎

## Remarks

- **No completeness of $\mathbb{R}$ is needed for the infimum here.** The general existence theorem [[thm-infimum-property]] would supply $\inf D(x)$ from the least-upper-bound property, but step 3.1 does not use it: the infimum is produced by exhibiting an element of $D(x)$ that is also a lower bound, which is [[def-infimum]] read directly. Completeness does enter, once, through [[lem-integer-part]], whose existence half is the Archimedean property.

- **Why $\min\{t, 1-t\}$ and not "the distance to the nearest integer".** The phrase presupposes that a nearest integer exists, which is exactly what step 2.2 establishes and what the picture cannot. When $t = 1/2$ there are two nearest integers, $m$ and $m+1$, and the formula is indifferent to which is chosen, so nothing has to be selected.

- **$\psi$ is the triangle wave** of amplitude $1/2$ and period $1$ — not the sawtooth $x - \lfloor x \rfloor$, which drops discontinuously at every integer: on $[0, 1/2]$ it is $\psi(s) = s$ by step 5.1, and periodicity and the reflection $\psi(-x) = \psi(x)$ — immediate from $D(-x) = \{\, |-x - n| : n \in \mathbb{Z} \,\} = \{\, |x + n| : n \in \mathbb{Z} \,\} = D(x)$, using $|-u| = |u|$ and the bijection $n \mapsto -n$ of $\mathbb{Z}$ — determine it everywhere.
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

### `rem-classical-oscillator-is-sine-of-one-over-x`

````markdown
---
id: rem-classical-oscillator-is-sine-of-one-over-x
kind: remark
title: "The classical form of the oscillator above is $\\sin(1/x)$, which this library can only construct much later"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [ex-distance-to-the-integers, lem-integer-part]
justified_by: []
aliases: []
forward_refs: [cex-sine-of-one-over-x-has-no-limit-at-zero, ex-x-sine-of-one-over-x-tends-to-zero]
landmark: false
short: "why $\\psi$ and not $\\sin$"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Sine and cosine (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sine_and_cosine"
    - title: "Topologist's sine curve (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topologist%27s_sine_curve"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 8 (the trigonometric functions)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Orientation, not a claim of this library

Every analysis course states the two examples of this page in the form

$$\sin(1/x) \quad \text{has no limit at } 0, \qquad x \sin(1/x) \to 0 \text{ as } x \to 0 ,$$

and a reader who has met them before will recognise
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] and
[[ex-x-times-psi-tends-to-zero]] as those examples with $\psi$ in place of
$\sin$. This remark records the correspondence, and it records that the
correspondence is **orientation only**: the two displayed statements are reported
as what the classical treatment proves, not asserted here, and nothing on this
page uses or proves anything about $\sin$.

## The later analytic construction

This library now constructs sine and cosine from their power series, proves
their differential and addition laws, and defines pi from the first positive
zero of cosine. The promised classical examples are
[[cex-sine-of-one-over-x-has-no-limit-at-zero]] and
[[ex-x-sine-of-one-over-x-tends-to-zero]]. They occur later in the reading
order, so both links are orientation-only forward references declared in this
item's `forward_refs`; no proof on this earlier page depends on them.

## What $\psi$ supplies instead

The function $\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ of
[[ex-distance-to-the-integers]] is elementary — it needs only the integer part,
the order and the absolute value — and it has the three properties that make the
classical examples work:

- it is **bounded**, with values exactly in $[0, 1/2]$;
- it is **periodic**, with period $1$, so $\psi(1/x)$ oscillates without damping
  as $x \to 0$;
- it **attains** two distinct values on every punctured neighbourhood of $0$
  after the substitution $x \mapsto 1/x$, namely $0$ at the reciprocals of the
  integers and $1/2$ at the reciprocals of the half-integers.

The third property is what
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] uses. It is not sharper than what
$\sin$ would give — the classical witnessing sequences hit the extreme values of
$\sin$ exactly too — but it is available *here*: the two values $0$ and $1/2$ are
read off from the integer part in one line ([[lem-integer-part]]), with no series
and no $\pi$, whereas the corresponding facts about $\sin$ presuppose the whole
construction described above.

## What is genuinely lost, and what is not

Nothing on this page is weaker for using $\psi$. The two statements proved are
exactly the statements usually proved with $\sin$, and their proofs are shorter.

What is lost is a connection to a different subject. The classical pair
$\sin(1/x)$, $x\sin(1/x)$ also carries information about smoothness, about power
series and about the topologist's sine curve, none of which $\psi$ can carry,
since $\psi$ is assembled from the order, the absolute value and the integer part
alone and none of those notions is defined in this library yet. Those phenomena
are not in scope on this earlier page; the forward-linked analytic examples
state them with $\sin$ on the later page that defines it.
````

### `thm-algebra-of-function-limits`

````markdown
---
id: thm-algebra-of-function-limits
kind: theorem
title: "Sums, scalar multiples, products and quotients of function limits, the quotient under the hypothesis that the denominator limit is nonzero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-neighbourhood-r, lem-limit-is-local, lem-limit-implies-local-boundedness, lem-sign-preservation-near-a-limit, lem-of-triangle-inequality, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field, def-field]
justified_by: []
aliases: [thm-limit-laws-for-functions]
landmark: true
short: "algebra of function limits"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.4)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]), let $f, g : A \to \mathbb{R}$ and let $\alpha \in
\mathbb{R}$. Suppose the limits of $f$ and of $g$ at $c$ exist, and write
$L := \lim_{x \to c} f(x)$ and $M := \lim_{x \to c} g(x)$
([[def-function-limit]]). Then:

1. the limit of $f + g$ at $c$ exists, and
   $$\lim_{x \to c} (f + g)(x) \;=\; \lim_{x \to c} f(x) + \lim_{x \to c} g(x) \;=\; L + M ;$$
2. the limit of $\alpha f$ at $c$ exists, and
   $$\lim_{x \to c} (\alpha f)(x) \;=\; \alpha \lim_{x \to c} f(x) \;=\; \alpha L ;$$
3. the limit of $fg$ at $c$ exists, and
   $$\lim_{x \to c} (fg)(x) \;=\; \Bigl(\lim_{x \to c} f(x)\Bigr)\Bigl(\lim_{x \to c} g(x)\Bigr) \;=\; LM ;$$
4. if $M \ne 0$, then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the point
   $c$ is a limit point of $A_0$, the quotient $f/g$ is defined on $A_0$ by
   $(f/g)(x) = f(x) / g(x)$, the limit of $(f/g)|_{A_0}$ at $c$ exists, and
   $$\lim_{x \to c} (f/g)|_{A_0}(x) \;=\; \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)} \;=\; \frac{L}{M} .$$

Each equation asserts two things at once: that the limit on the left exists, and
that it has the stated value. Both are proved. The symbols denote by
[[lem-function-limit-unique]].

**Everything below is proved directly from $\varepsilon$ and $\delta$.** No
sequence is constructed and no choice principle is used, so all four claims are
theorems of ZF. Passing through
[[thm-sequential-criterion-for-function-limits]] instead would import the
countable choice spent in that theorem's converse direction, for no gain; see
[[rem-heine-criterion-choice-cost]].

**Why the quotient is stated on $A_0$.** The function $f/g$ is simply not defined
where $g$ vanishes, and $g$ may well vanish at points of $A$ arbitrarily far from
$c$; restricting to $A_0$ is therefore forced. That this restriction still has
$c$ as a limit point, so that the limit there means anything at all, is the last
claim of [[lem-sign-preservation-near-a-limit]]. The sequential analogue
[[thm-algebra-of-limits]] needs the corresponding hypothesis in the form "the
denominator sequence is nonzero at every index".

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a limit point $c$ of $A$, functions $f, g : A \to \mathbb{R}$, a real $\alpha$, and reals $L, M$ with $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$; for claim 4 also $M \ne 0$ and $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$ ([[def-function-limit]]).

[L2] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|uv| = |u|\,|v|$; and $|{-u}| = |u|$ ([[lem-of-abs-value]]).

[L3] Triangle inequality: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L4] Order and field arithmetic in $\mathbb{R}$: adding two strict inequalities ([[lem-of-add-order]]); for $t > 0$, $u < v$ is equivalent to $ut < vt$, and $0 \le u \le v$ with $0 \le s \le t$ gives $us \le vt$ ([[lem-of-sign-rules]]); positive elements have positive inverses and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]); $0 < 1$ ([[cor-of-one-positive]]), so $2 > 0$ and $t/2 > 0$ for $t > 0$; inverses and the field identities ([[def-field]]); trichotomy and totality, so of finitely many positive reals the smallest is positive ([[def-ordered-field]]).

[L5] Local boundedness: there are a real $\delta_0 > 0$ and a real $K \ge 0$ with $|f(x)| \le K$ for every $x \in A$ satisfying $0 < |x - c| < \delta_0$ ([[lem-limit-implies-local-boundedness]]).

[L6] Sign preservation: if $M \ne 0$ there is a real $\delta_s > 0$ with $|g(x)| > |M|/2 > 0$ for every $x \in A$ satisfying $0 < |x - c| < \delta_s$, and $c$ is a limit point of $A_0$ ([[lem-sign-preservation-near-a-limit]]).

[L7] Restriction: if $B \subseteq A$ has $c$ as a limit point and $\lim_{x \to c} f(x) = L$, then $\lim_{x \to c} f|_B(x) = L$ (claim 2 of [[lem-limit-is-local]]).

[L8] Neighbourhoods ([[def-neighbourhood-r]]).

## Proof

**Proof technique:** direct.

1.1 **Sum.** Let $\varepsilon > 0$ be an arbitrary real. By [L1] fix reals $\delta_1, \delta_2 > 0$ with $|f(x) - L| < \varepsilon/2$ for every $x \in A$ satisfying $0 < |x - c| < \delta_1$ and $|g(x) - M| < \varepsilon/2$ for every $x \in A$ satisfying $0 < |x - c| < \delta_2$, and let $\delta$ be the smaller of the two, so $\delta > 0$. For $x \in A$ with $0 < |x - c| < \delta$ we get $|(f+g)(x) - (L+M)| = |(f(x) - L) + (g(x) - M)| \le |f(x) - L| + |g(x) - M| < \varepsilon$. As $\varepsilon$ was arbitrary, the limit of $f + g$ at $c$ exists and equals $L + M$: claim 1. [L1, L2, L3, L4, choose]

1.2 **Scalar multiple.** If $\alpha = 0$ then $\alpha f$ is the constant function $0$ and $\alpha L = 0$, so $|(\alpha f)(x) - \alpha L| = 0 < \varepsilon$ for every $x$ and every $\varepsilon > 0$, any $\delta$ serving. If $\alpha \ne 0$ then $|\alpha| > 0$; given a real $\varepsilon > 0$, [L1] supplies $\delta > 0$ with $|f(x) - L| < \varepsilon/|\alpha|$ on $A \cap N^{*}_{\delta}(c)$, and there $|(\alpha f)(x) - \alpha L| = |\alpha|\,|f(x) - L| < \varepsilon$. So the limit of $\alpha f$ at $c$ exists and equals $\alpha L$: claim 2. [L1, L2, L4, L8, choose]

1.3 **A working bound for $f$ near $c$.** By [L5] fix a real $\delta_0 > 0$ and a real $K \ge 0$ with $|f(x)| \le K$ for every $x \in A$ satisfying $0 < |x - c| < \delta_0$, and put $K' := K + 1$, so $K' > 0$ and $|f(x)| \le K'$ for all those $x$. [L4, L5, choose]

1.4 **The denominator near $c$.** Assume $M \ne 0$. By [L6] fix a real $\delta_s > 0$ with $|g(x)| > |M|/2 > 0$ for every $x \in A$ satisfying $0 < |x - c| < \delta_s$; every such $x$ has $g(x) \ne 0$, hence lies in $A_0$, and $c$ is a limit point of $A_0$. [L2, L4, L6]

2.1 **Product.** Let $\varepsilon > 0$ be an arbitrary real. By [L1] fix reals $\delta_1, \delta_2 > 0$ with $|g(x) - M| < \varepsilon/(2K')$ on $A \cap N^{*}_{\delta_1}(c)$ and $|f(x) - L| < \varepsilon / \bigl(2(|M| + 1)\bigr)$ on $A \cap N^{*}_{\delta_2}(c)$, and let $\delta$ be the smallest of $\delta_0, \delta_1, \delta_2$, which is positive. For $x \in A$ with $0 < |x - c| < \delta$, $|f(x)g(x) - LM| = |f(x)(g(x) - M) + M(f(x) - L)| \le |f(x)|\,|g(x) - M| + |M|\,|f(x) - L| \le K'\,|g(x) - M| + (|M|+1)\,|f(x) - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. As $\varepsilon$ was arbitrary, the limit of $fg$ at $c$ exists and equals $LM$: claim 3. [step 1.3, L1, L2, L3, L4, L8, choose]

2.2 **Reciprocal.** Assume $M \ne 0$ and let $\varepsilon > 0$ be an arbitrary real. By [L1] fix a real $\delta_3 > 0$ with $|g(x) - M| < \varepsilon |M|^2 / 2$ on $A \cap N^{*}_{\delta_3}(c)$, and let $\delta$ be the smaller of $\delta_s$ and $\delta_3$. For $x \in A_0$ with $0 < |x - c| < \delta$ we have $|g(x)| > |M|/2 > 0$, hence $|g(x)|\,|M| > |M|^2/2 > 0$ and so $1/(|g(x)|\,|M|) < 2/|M|^2$; therefore $\bigl| 1/g(x) - 1/M \bigr| = |M - g(x)| \big/ \bigl(|g(x)|\,|M|\bigr) < (\varepsilon |M|^2/2)\cdot(2/|M|^2) = \varepsilon$. As $\varepsilon$ was arbitrary, the limit of $(1/g)|_{A_0}$ at $c$ exists and equals $1/M$. [step 1.4, L1, L2, L4, L8, choose]

2.3 **The numerator on the smaller domain.** Assume $M \ne 0$. Since $A_0 \subseteq A$ and $c$ is a limit point of $A_0$ by step 1.4, [L7] gives that the limit of $f|_{A_0}$ at $c$ exists and equals $L$. [step 1.4, L7]

3.1 **Quotient.** Assume $M \ne 0$. On the domain $A_0$, which has $c$ as a limit point, the two functions $f|_{A_0}$ and $(1/g)|_{A_0}$ have limits $L$ and $1/M$ at $c$ by steps 2.3 and 2.2, and their product is $(f/g)|_{A_0}$ by the field identities; so claim 3, applied on the domain $A_0$, gives that the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $L \cdot (1/M) = L/M$. [step 2.1, step 2.2, step 2.3, L2, L4]

4.1 Claims 1 to 4 are proved, each directly from the $\varepsilon$-$\delta$ definition and none of them through a sequence. [step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Remarks

- **The product estimate in one line.** The identity $fg - LM = f\,(g - M) + M\,(f - L)$ turns the problem into two products, one with a factor that is merely bounded near $c$ (that is $f$, and [[lem-limit-implies-local-boundedness]] is what bounds it) and one with a constant factor. The two constants $K'$ and $|M| + 1$ are used in place of $K$ and $|M|$ only so that they are strictly positive and may be divided by; that is the sole reason for adding $1$.

- **The reciprocal estimate in one line.** The identity $1/g - 1/M = (M - g)/(gM)$ turns the problem into a numerator that is small and a denominator that must be kept away from $0$; the lower bound $|g| > |M|/2$ from [[lem-sign-preservation-near-a-limit]] does exactly that, and gives the working factor $2/|M|^2$.

- **Nothing here extends to $\pm\infty$.** The statement is about a finite limit point $c$ and finite values $L, M$; [[def-limits-at-infinity]] introduces limits at and to infinity, but no algebra of such limits is proved in this library, and none may be assumed. The companion page's limit at $+\infty$ is computed by a direct estimate for precisely that reason.

- **The sequential analogue** is [[thm-algebra-of-limits]]. Neither implies the other for free: this theorem is about a function on a subset of $\mathbb{R}$ and is proved from $\varepsilon$ and $\delta$; that one is about sequences.
````

### `thm-squeeze-for-function-limits`

````markdown
---
id: thm-squeeze-for-function-limits
kind: theorem
title: "If $f \\le g \\le h$ near $c$ and $f$ and $h$ have the same limit at $c$, then so does $g$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, lem-of-add-order, def-ordered-field]
justified_by: []
aliases: [thm-sandwich-theorem-for-functions]
landmark: true
short: "squeeze theorem"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Squeeze theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Squeeze_theorem"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]) and let $f, g, h : A \to \mathbb{R}$. Suppose there is a
real $\eta > 0$ with

$$f(x) \le g(x) \le h(x) \qquad \text{for every } x \in A \text{ with } 0 < |x - c| < \eta ,$$

and suppose the limits of $f$ and of $h$ at $c$ exist and are equal, say
$\lim_{x \to c} f(x) = \lim_{x \to c} h(x) = L$ ([[def-function-limit]]). Then
the limit of $g$ at $c$ **exists**, and

$$\lim_{x \to c} g(x) \;=\; \lim_{x \to c} f(x) \;=\; \lim_{x \to c} h(x) \;=\; L .$$

**This is the one result on this page that produces a limit rather than
computing one.** No hypothesis whatever is placed on $g$ beyond the two
inequalities: $g$ may be wildly irregular, as $x \mapsto x\,\psi(1/x)$ on the
companion page is, and the theorem still delivers its limit at $c$.

The proof is a direct $\varepsilon$-$\delta$ argument and uses no choice
principle.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a limit point $c$ of $A$, functions $f, g, h : A \to \mathbb{R}$, a real $\eta > 0$ with $f(x) \le g(x) \le h(x)$ for every $x \in A$ satisfying $0 < |x - c| < \eta$, and a real $L$ with $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} h(x) = L$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$, and likewise for $h$ ([[def-function-limit]]).

[L2] Absolute value: for $t > 0$, $|u| < t$ is equivalent to $-t < u < t$ ([[lem-of-abs-value]]).

[L3] Order arithmetic in $\mathbb{R}$: the order is transitive, and mixed chains compose, so $u < v \le w$ gives $u < w$ and $u \le v < w$ gives $u < w$; adding a constant to an inequality ([[lem-of-add-order]]); of finitely many positive reals the smallest is positive, the order being total ([[def-ordered-field]]). [[lem-of-add-order]] states its moves in their STRICT forms only; the non-strict forms used below follow by adjoining the equality case, in which the two sides coincide, the order being total ([[def-ordered-field]]).

[L4] Neighbourhoods: $N^{*}_{\delta}(c) = \{\, y : 0 < |y - c| < \delta \,\}$, and a smaller radius gives a smaller punctured neighbourhood ([[def-neighbourhood-r]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be an arbitrary real. By [L1] fix reals $\delta_1, \delta_2 > 0$ such that every $x \in A$ with $0 < |x - c| < \delta_1$ satisfies $|f(x) - L| < \varepsilon$ and every $x \in A$ with $0 < |x - c| < \delta_2$ satisfies $|h(x) - L| < \varepsilon$; let $\delta$ be the smallest of $\delta_1$, $\delta_2$ and $\eta$, so $\delta > 0$. [L1, L3, L4, choose]

2.1 Let $x \in A$ with $0 < |x - c| < \delta$. Then $0 < |x - c| < \delta_1$ gives $L - \varepsilon < f(x)$, and $0 < |x - c| < \delta_2$ gives $h(x) < L + \varepsilon$, while $0 < |x - c| < \eta$ gives $f(x) \le g(x) \le h(x)$. [step 1.1, L2, L3, L4]

3.1 Chaining those four inequalities, $L - \varepsilon < f(x) \le g(x) \le h(x) < L + \varepsilon$, hence $L - \varepsilon < g(x) < L + \varepsilon$, that is $-\varepsilon < g(x) - L < \varepsilon$, that is $|g(x) - L| < \varepsilon$. [step 2.1, L2, L3]

4.1 So for every real $\varepsilon > 0$ a real $\delta > 0$ has been produced with $|g(x) - L| < \varepsilon$ for every $x \in A$ satisfying $0 < |x - c| < \delta$: the limit of $g$ at $c$ exists and equals $L$. [step 3.1, L1] ∎

## Remarks

- **Where the three hypotheses are spent.** The inequality $f \le g$ is used only for the lower estimate and $g \le h$ only for the upper one; the equality of the two outer limits is what makes the two estimates close on the same number $L$. Drop it and the argument gives only $\lim f \le \liminf$-style information, which this page does not develop.

- **The order hypothesis is local.** It is imposed only on $A \cap N^{*}_{\eta}(c)$, so the theorem is insensitive to the behaviour of the three functions far from $c$, and to their values at $c$; that is [[lem-limit-is-local]] in action.

- **Typical use.** To prove that a bounded oscillating factor is killed by a factor tending to $0$: if $|u(x)| \le B$ near $c$ then $-B|x - c| \le (x - c)u(x) \le B|x - c|$ near $c$, and both outer functions tend to $0$. That is exactly how $x\,\psi(1/x) \to 0$ is proved on the companion page.

- **The sequential analogue** is [[thm-squeeze]].
````

