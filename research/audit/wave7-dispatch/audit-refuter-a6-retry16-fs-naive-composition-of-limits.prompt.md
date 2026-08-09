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

- critical risk (14): 8 declared dependencies; 9 cited facts; 7 numbered proof steps; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; quotient or equivalence-class construction; analytic limiting/completeness language

## Target item — `fs-naive-composition-of-limits`

Normalized current SHA-256: `8dab76a082e86517c547178c928af05c58781e7547b846adac0247b2eee033dc`

The complete current item follows, including frontmatter:

````markdown
---
id: fs-naive-composition-of-limits
kind: false-statement
title: "FALSE: $\\lim_{x \\to c} f(g(x)) = M$ whenever $\\lim_{x \\to c} g = L$ and $\\lim_{y \\to L} f = M$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-composition-of-function-limits, def-function-limit, def-limit-point-r, def-neighbourhood-r, fs-limit-equals-value, lem-of-abs-value, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: naive composition"
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
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

**False claim:** let $A, B \subseteq \mathbb{R}$, let $g : A \to \mathbb{R}$ with
$g(A) \subseteq B$ and $f : B \to \mathbb{R}$, let $c$ be a limit point of $A$
and $L$ a limit point of $B$. If

$$\lim_{x \to c} g(x) = L \qquad \text{and} \qquad \lim_{y \to L} f(y) = M ,$$

then the limit of $f \circ g$ at $c$ exists and
$\lim_{x \to c} f\bigl(g(x)\bigr) = M$ ([[def-function-limit]]).

This is the statement of [[thm-composition-of-function-limits]] with **both** of
its extra hypotheses removed, and it is false. It is refuted below by a pair in
which $g$ is constant and $f$ has a removable defect at the value of that
constant.

**Where the naive argument breaks.** The inner limit gives
$|g(x) - L| < \rho$ for $x$ near $c$; the outer limit gives
$|f(y) - M| < \varepsilon$ for $y \in B$ with $0 < |y - L| < \rho$. To combine
them at $y = g(x)$ one needs $|g(x) - L| > 0$, and nothing in the hypotheses
supplies that. Where $g(x) = L$, the only information available about $f$ is its
*value* $f(L)$, and [[def-function-limit]] says nothing whatever about that
value ([[fs-limit-equals-value]]). The two hypotheses of
[[thm-composition-of-function-limits]] are exactly the two ways of closing that
gap.

## Facts & Assumptions

**Given:** The sets $A := \mathbb{R}$ and $B := \mathbb{R}$; the point $c := 0$; the function $f : \mathbb{R} \to \mathbb{R}$ of [[fs-limit-equals-value]], namely $f(y) := 0$ for $y \ne 0$ and $f(0) := 1$; and the constant function $g : \mathbb{R} \to \mathbb{R}$, $g(x) := 0$ for every $x$.

[L1] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$.

[L2] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Absolute value: $|0| = 0$ ([[lem-of-abs-value]]).

[L4] Order in $\mathbb{R}$: trichotomy, and $0 < 1$, so $1 \ne 0$ ([[cor-of-one-positive]], [[def-ordered-field]]).

[L5] The function $f$ above satisfies $f(0) = 1$ and has limit $0$ at $0$: for every real $\varepsilon > 0$ the radius $\delta = 1$ works, since $0 < |y - 0| < 1$ forces $y \ne 0$ and then $|f(y) - 0| = 0 < \varepsilon$; this is the computation carried out in [[fs-limit-equals-value]].

[L6] Composition of limits and its two extra hypotheses (i) and (ii) ([[thm-composition-of-function-limits]]).

## Refutation

**Proof technique:** direct.

1.1 The point $0$ is a limit point of $\mathbb{R}$, and $g(\mathbb{R}) = \{0\} \subseteq \mathbb{R} = B$, so $f \circ g$ is a function on $\mathbb{R}$. [L2]

1.2 By [L5], $\lim_{y \to 0} f(y) = 0$; so the outer hypothesis holds with $L = 0$ and $M = 0$. [L5]

1.3 The reals $0$ and $1$ are distinct. [L4]

2.1 The inner hypothesis holds with $L = 0$: for the constant function $g$ and any real $\varepsilon > 0$, every $\delta > 0$ works, since $|g(x) - 0| = |0| = 0 < \varepsilon$ for every $x$. So $\lim_{x \to 0} g(x) = 0$. [step 1.1, L1, L3]

3.1 But $f \circ g$ is the constant function $1$: for every $x \in \mathbb{R}$, $g(x) = 0$ and hence $f(g(x)) = f(0) = 1$. Therefore, by the same computation as in step 2.1, the limit of $f \circ g$ at $0$ exists and equals $1$. [step 2.1, L1, L3, L5]

3.2 Both extra hypotheses of [[thm-composition-of-function-limits]] fail for this pair: hypothesis (i) fails because $L = 0$ lies in $B = \mathbb{R}$ while $f(L) = f(0) = 1 \ne 0 = M$; and hypothesis (ii) fails because $g(x) = 0 = L$ for every $x$, so no punctured neighbourhood of $0$ avoids the value $L$. [step 2.1, L5, L6]

4.1 So $\lim_{x \to 0} g(x) = 0 = L$ and $\lim_{y \to 0} f(y) = 0 = M$, while $\lim_{x \to 0} f(g(x)) = 1 \ne 0 = M$: the claim is false, and step 3.2 identifies exactly which hypotheses of the true theorem are missing. [step 1.2, step 1.3, step 3.1, step 3.2] ∎

## Remarks

- **The failure is not an artefact of the constant inner function.** What matters is that $g$ takes the value $L$ on every punctured neighbourhood of $c$; a non-constant $g$ that hits $L$ along a sequence tending to $c$ would fail in the same way. Conversely, replacing $g$ by the identity — which avoids the value $0$ off the point $0$ itself — restores the conclusion, and the companion page carries out that comparison.

- **Textbook statements almost always assume continuity of the outer function**, which is hypothesis (i) of [[thm-composition-of-function-limits]] written out. The version with hypothesis (ii) is the one that licenses substitutions such as $y = 1/x$, where the inner function omits the critical value for a structural reason.

- **The same witness refutes nothing else on this page.** In particular it does not bear on [[thm-algebra-of-function-limits]]: sums, products and quotients are formed pointwise from the values of $f$ and $g$ at the *same* argument, and no composition is involved.
````

## Wave 7 provenance row for the target

```json
{
  "id": "fs-naive-composition-of-limits",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_limoffunc.html",
    "https://terrytao.wordpress.com/books/analysis-i/"
  ],
  "rationale": "The sources’ composition theorem requires continuity at the outer limit or an equivalent safeguard. The local false statement deletes both alternatives and gives the standard constant-inner/removable-defect counterexample.",
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
      "source": "def-function-limit",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]) with its order and absolute value\n([[def-real-order]]).\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c \\in \\mathbb{R}$\nbe a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \\in \\mathbb{R}$.\nWe say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write\n\n$$\\lim_{x \\to c} f(x) = L ,$$\n\nwhen\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - L| < \\varepsilon\\ \\bigr],$$\n\nwhere $\\varepsilon$ and $\\delta$ range over the **positive reals**.\n\nIn the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:\nfor every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n\n$$f\\bigl(A \\cap N^{*}_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}(L),$$\n\n$N^{*}_{\\delta}(c) = \\{\\, y : 0 < |y - c| < \\delta \\,\\}$ being the punctured\n$\\delta$-neighbourhood of $c$ and $N_{\\varepsilon}(L) = (L - \\varepsilon,\\ L +\n\\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because\n$|f(x) - L| < \\varepsilon$ says exactly $f(x) \\in N_\\varepsilon(L)$, and\n$0 < |x - c| < \\delta$ says exactly $x \\in N^{*}_\\delta(c)$.\n\n**Three features of this definition are load bearing, not decoration.**\n\n1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that\n   says every punctured neighbourhood of $c$ meets $A$, so for every $\\delta > 0$\n   the set $A \\cap N^{*}_\\delta(c)$ over which the implication quantifies is\n   nonempty. Drop the requirement and the implication can be satisfied\n   vacuously by *every* real $L$ at once, which is exactly what\n   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$\n   that is not a limit point of $A$ — an isolated point — the symbol\n   $\\lim_{x \\to c} f(x)$ is therefore **not defined** in this library.\n\n2. **$c \\in A$ is not required.** A limit point of $A$ need not belong to $A$\n   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This\n   is what allows a limit to be taken at a point where the function is not\n   defined at all, as at $0$ for $x \\mapsto x\\,\\psi(1/x)$.\n\n3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis\n   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the\n   single point $c$ changes nothing. Equality of the limit with the value is an\n   extra condition, not a consequence: [[fs-limit-equals-value]].\n\n**The notation presumes uniqueness.** Writing $\\lim_{x \\to c} f(x) = L$ treats\nthe left-hand side as a name for a single real number, which is legitimate only\nbecause at a limit point at most one $L$ can satisfy the displayed condition.\nThat obligation is discharged by [[lem-function-limit-unique]], recorded in this\nitem's `justified_by`. As with $\\sup S$ ([[rem-sup-conventions]]) and\n$\\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function\nalready known to have a limit at $c$.\n\n**Real and rational $\\varepsilon$ define the same relation.** Above,\n$\\varepsilon$ and $\\delta$ range over the positive reals. Restricting either\nquantifier to the positive rationals gives the same relation: every positive\nrational is a positive real, and below every positive real lies a positive\nrational ([[lem-rat-embeds-dense]]), so an $\\varepsilon$-condition verified for\nall positive rationals is verified for an arbitrary positive real $\\eta$ by\nrunning it at a rational $\\varepsilon$ with $0 < \\varepsilon < \\eta$, and a\n$\\delta$ produced as a real may be shrunk to a rational one below it. This is\nthe passage sanctioned in the remarks of [[def-sequence]], and it is what lets\nthis definition be compared with [[def-real-limit]], whose $\\varepsilon$ is\nrational, in [[thm-sequential-criterion-for-function-limits]].",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L4",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L5",
      "source": "fs-limit-equals-value",
      "source_section": "Statement",
      "quote": "**False claim:** if $A \\subseteq \\mathbb{R}$, if $f : A \\to \\mathbb{R}$, if\n$c \\in A$ is a limit point of $A$ ([[def-limit-point-r]]) and if the limit of $f$\nat $c$ exists ([[def-function-limit]]), then\n\n$$\\lim_{x \\to c} f(x) = f(c) .$$\n\nBoth sides of the asserted equation are defined under the stated hypotheses: the\nleft because the limit is assumed to exist and is single valued\n([[lem-function-limit-unique]]), the right because $c \\in A$. The claim is that\nthey always agree, and that is false.\n\n**Why it is tempting.** The condition $|f(x) - L| < \\varepsilon$ is imposed on\npoints $x$ arbitrarily close to $c$, and it feels as though $x = c$ were the\nlimiting case of that. It is not: [[def-function-limit]] quantifies over\n$0 < |x - c| < \\delta$, and the strict inequality on the left removes $x = c$\nfrom the quantifier entirely. Changing the value of $f$ at the single point $c$\ntherefore changes nothing on the left-hand side and everything on the right.\n\n**What is true.** The equation above is not a theorem but a *condition*, and it\nis the condition the next page of this track takes as the definition of\ncontinuity at $c$. This library states it as a hypothesis and never as a\nconsequence; hypothesis (i) of [[thm-composition-of-function-limits]] is exactly\nthis condition for the outer function.",
      "uses": [
        "1.2",
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-composition-of-function-limits",
      "source_section": "Statement",
      "quote": "Let $A, B \\subseteq \\mathbb{R}$, let $g : A \\to \\mathbb{R}$ with\n$g(A) \\subseteq B$, and let $f : B \\to \\mathbb{R}$, so that the composite\n$f \\circ g : A \\to \\mathbb{R}$ is defined. Let $c$ be a limit point of $A$ and\n$L$ a limit point of $B$ ([[def-limit-point-r]]), and suppose the limits\n\n$$\\lim_{x \\to c} g(x) = L \\qquad \\text{and} \\qquad \\lim_{y \\to L} f(y) = M$$\n\nboth exist, with the stated values ([[def-function-limit]]). Suppose in addition\nthat **at least one** of the following holds:\n\n- **(i)** $L \\in B$ and $f(L) = M$;\n- **(ii)** there is a real $\\eta > 0$ with $g(x) \\ne L$ for every $x \\in A$\n  satisfying $0 < |x - c| < \\eta$.\n\nThen the limit of $f \\circ g$ at $c$ **exists**, and\n\n$$\\lim_{x \\to c} f\\bigl(g(x)\\bigr) \\;=\\; \\lim_{y \\to L} f(y) \\;=\\; M .$$\n\n**At least one extra hypothesis is necessary.** With both omitted the statement is\nfalse, and [[fs-naive-composition-of-limits]] refutes it with a two-line witness\nin which (i) fails because $f(L) \\ne M$ and (ii) fails because $g$ is constantly\nequal to $L$.\n\n**Why an extra hypothesis is needed at all.** The inner limit controls $g(x)$\nonly up to $|g(x) - L| < \\rho$; it does not prevent $g(x)$ from *equalling* $L$.\nBut [[def-function-limit]] says nothing about $f$ at the point $L$, so the outer\nestimate is unavailable exactly at the values $g(x) = L$. Hypothesis (i) supplies\nthe missing value directly; hypothesis (ii) excludes those values.",
      "uses": [
        "3.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "The point $0$ is a limit point of $\\mathbb{R}$, and $g(\\mathbb{R}) = \\{0\\} \\subseteq \\mathbb{R} = B$, so $f \\circ g$ is a function on $\\mathbb{R}$.",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "By [L5], $\\lim_{y \\to 0} f(y) = 0$; so the outer hypothesis holds with $L = 0$ and $M = 0$.",
      "step": "1.2",
      "inputs": [
        "L5"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "The reals $0$ and $1$ are distinct.",
      "step": "1.3",
      "inputs": [
        "L4"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "The inner hypothesis holds with $L = 0$: for the constant function $g$ and any real $\\varepsilon > 0$, every $\\delta > 0$ works, since $|g(x) - 0| = |0| = 0 < \\varepsilon$ for every $x$. So $\\lim_{x \\to 0} g(x) = 0$.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "But $f \\circ g$ is the constant function $1$: for every $x \\in \\mathbb{R}$, $g(x) = 0$ and hence $f(g(x)) = f(0) = 1$. Therefore, by the same computation as in step 2.1, the limit of $f \\circ g$ at $0$ exists and equals $1$.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L1",
        "L3",
        "L5"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "Both extra hypotheses of [[thm-composition-of-function-limits]] fail for this pair: hypothesis (i) fails because $L = 0$ lies in $B = \\mathbb{R}$ while $f(L) = f(0) = 1 \\ne 0 = M$; and hypothesis (ii) fails because $g(x) = 0 = L$ for every $x$, so no punctured neighbourhood of $0$ avoids the value $L$.",
      "step": "3.2",
      "inputs": [
        "2.1",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "So $\\lim_{x \\to 0} g(x) = 0 = L$ and $\\lim_{y \\to 0} f(y) = 0 = M$, while $\\lim_{x \\to 0} f(g(x)) = 1 \\ne 0 = M$: the claim is false, and step 3.2 identifies exactly which hypotheses of the true theorem are missing.",
      "step": "4.1",
      "inputs": [
        "3.2",
        "1.2",
        "1.3",
        "3.1"
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
      "evidence": "step 1.1: The point $0$ is a limit point of $\\mathbb{R}$, and $g(\\mathbb{R}) = \\{0\\} \\subseteq \\mathbb{R} = B$, so $f \\circ g$ is a function on $\\mathbb{R}$."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.3: The reals $0$ and $1$ are distinct."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.3: The reals $0$ and $1$ are distinct."
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
    "notes": "Audit-Beta captured this A2 contract after reading every numbered step and every cited target section; independent risk review remains for A6."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "fs-naive-composition-of-limits",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-composition-of-function-limits",
    "declared_target": "thm-composition-of-function-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-naive-composition-of-limits",
    "sourcePage": "limits-of-real-functions",
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
    "source": "fs-naive-composition-of-limits",
    "sourcePage": "limits-of-real-functions",
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
    "source": "fs-naive-composition-of-limits",
    "sourcePage": "limits-of-real-functions",
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
    "source": "fs-naive-composition-of-limits",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "fs-limit-equals-value",
    "declared_target": "fs-limit-equals-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-naive-composition-of-limits",
    "sourcePage": "limits-of-real-functions",
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
    "source": "fs-naive-composition-of-limits",
    "sourcePage": "limits-of-real-functions",
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
    "source": "fs-naive-composition-of-limits",
    "sourcePage": "limits-of-real-functions",
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
[]
```

## Full text of every cited or declared item (9)

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

### `fs-limit-equals-value`

````markdown
---
id: fs-limit-equals-value
kind: false-statement
title: "FALSE: $\\lim_{x \\to c} f(x) = f(c)$ whenever both sides exist"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: limit equals value"
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
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

**False claim:** if $A \subseteq \mathbb{R}$, if $f : A \to \mathbb{R}$, if
$c \in A$ is a limit point of $A$ ([[def-limit-point-r]]) and if the limit of $f$
at $c$ exists ([[def-function-limit]]), then

$$\lim_{x \to c} f(x) = f(c) .$$

Both sides of the asserted equation are defined under the stated hypotheses: the
left because the limit is assumed to exist and is single valued
([[lem-function-limit-unique]]), the right because $c \in A$. The claim is that
they always agree, and that is false.

**Why it is tempting.** The condition $|f(x) - L| < \varepsilon$ is imposed on
points $x$ arbitrarily close to $c$, and it feels as though $x = c$ were the
limiting case of that. It is not: [[def-function-limit]] quantifies over
$0 < |x - c| < \delta$, and the strict inequality on the left removes $x = c$
from the quantifier entirely. Changing the value of $f$ at the single point $c$
therefore changes nothing on the left-hand side and everything on the right.

**What is true.** The equation above is not a theorem but a *condition*, and it
is the condition the next page of this track takes as the definition of
continuity at $c$. This library states it as a hypothesis and never as a
consequence; hypothesis (i) of [[thm-composition-of-function-limits]] is exactly
this condition for the outer function.

## Facts & Assumptions

**Given:** The set $A := \mathbb{R}$, the point $c := 0$, and the function $f : \mathbb{R} \to \mathbb{R}$ defined by $f(x) := 0$ for $x \ne 0$ and $f(0) := 1$.

[L1] The limit condition: $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Limit point: $c$ is a limit point of $S$ when every punctured neighbourhood $N^{*}_{\varepsilon}(c)$ meets $S$; and punctured neighbourhoods in $\mathbb{R}$ are never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Absolute value: $|0| = 0$, and $|u| \ge 0$ ([[lem-of-abs-value]]).

[L4] Order in $\mathbb{R}$: trichotomy, so every real either equals $0$ or does not, and never both; and $0 < 1$, so $1 \ne 0$ ([[cor-of-one-positive]], [[def-ordered-field]]).

## Refutation

**Proof technique:** direct.

1.1 The point $c = 0$ lies in $A = \mathbb{R}$ and is a limit point of $\mathbb{R}$: for every real $\varepsilon > 0$ the punctured neighbourhood $N^{*}_{\varepsilon}(0)$ is nonempty and is contained in $\mathbb{R}$, so it meets $\mathbb{R}$. [L2]

1.2 $f$ is a well-defined function on $\mathbb{R}$, since by trichotomy every real either equals $0$ or does not, exclusively; and the reals $0$ and $1$ are distinct. [L4]

2.1 The limit of $f$ at $0$ exists and equals $0$: given an arbitrary real $\varepsilon > 0$, take $\delta := 1 > 0$; every $x \in \mathbb{R}$ with $0 < |x - 0| < 1$ has $|x| \ne 0$, hence $x \ne 0$, hence $f(x) = 0$ and $|f(x) - 0| = |0| = 0 < \varepsilon$. [step 1.1, step 1.2, L1, L3, L4]

3.1 Yet $f(0) = 1$, and $1 \ne 0 = \lim_{x \to 0} f(x)$. So at the point $c = 0$ of the domain, which is a limit point of the domain, the limit exists and differs from the value: the claim is false. [step 1.2, step 2.1, L4] ∎

## Remarks

- **The witness is the smallest possible one.** It differs from a constant function at exactly one point, and the limit cannot see that point. Any function agreeing with a constant off $c$ and taking a different value at $c$ would serve equally well; the companion page works this witness out in full, computes its one-sided limits, and shows that redefining the single value repairs the equality.

- **Where the false claim does hold.** Under the extra hypothesis that $\lim_{x \to c} f(x) = f(c)$ — which is what continuity at $c$ will mean — it holds trivially, and that is the only sense in which it is ever true. It is emphatically not a consequence of the limit existing.

- **The consequence for composition.** Because $f(c)$ is invisible to the limit, substituting an inner function that takes the value $c$ is not licensed by the limits alone; that is the content of [[fs-naive-composition-of-limits]], whose witness is built from this one.
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

### `thm-composition-of-function-limits`

````markdown
---
id: thm-composition-of-function-limits
kind: theorem
title: "Composition of limits holds under either hypothesis: $f$ is defined at $L$ with value $M$, or $g$ avoids $L$ on a punctured neighbourhood of $c$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [thm-limit-of-a-composition]
landmark: true
short: "composition of limits"
proof_strategy: cases
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A, B \subseteq \mathbb{R}$, let $g : A \to \mathbb{R}$ with
$g(A) \subseteq B$, and let $f : B \to \mathbb{R}$, so that the composite
$f \circ g : A \to \mathbb{R}$ is defined. Let $c$ be a limit point of $A$ and
$L$ a limit point of $B$ ([[def-limit-point-r]]), and suppose the limits

$$\lim_{x \to c} g(x) = L \qquad \text{and} \qquad \lim_{y \to L} f(y) = M$$

both exist, with the stated values ([[def-function-limit]]). Suppose in addition
that **at least one** of the following holds:

- **(i)** $L \in B$ and $f(L) = M$;
- **(ii)** there is a real $\eta > 0$ with $g(x) \ne L$ for every $x \in A$
  satisfying $0 < |x - c| < \eta$.

Then the limit of $f \circ g$ at $c$ **exists**, and

$$\lim_{x \to c} f\bigl(g(x)\bigr) \;=\; \lim_{y \to L} f(y) \;=\; M .$$

**At least one extra hypothesis is necessary.** With both omitted the statement is
false, and [[fs-naive-composition-of-limits]] refutes it with a two-line witness
in which (i) fails because $f(L) \ne M$ and (ii) fails because $g$ is constantly
equal to $L$.

**Why an extra hypothesis is needed at all.** The inner limit controls $g(x)$
only up to $|g(x) - L| < \rho$; it does not prevent $g(x)$ from *equalling* $L$.
But [[def-function-limit]] says nothing about $f$ at the point $L$, so the outer
estimate is unavailable exactly at the values $g(x) = L$. Hypothesis (i) supplies
the missing value directly; hypothesis (ii) excludes those values.

## Facts & Assumptions

**Given:** Sets $A, B \subseteq \mathbb{R}$, functions $g : A \to \mathbb{R}$ with $g(A) \subseteq B$ and $f : B \to \mathbb{R}$, a limit point $c$ of $A$, a limit point $L$ of $B$, and reals with $\lim_{x \to c} g(x) = L$ and $\lim_{y \to L} f(y) = M$; and the assumption that (i) or (ii) of the statement holds ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$ ([[def-function-limit]]).

[L2] Absolute value: $|u| \ge 0$, and $|u| = 0$ if and only if $u = 0$ ([[lem-of-abs-value]]).

[L3] Order arithmetic: of two positive reals the smaller is positive, the order being total; and trichotomy ([[def-ordered-field]]).

[L4] Limit point, and neighbourhoods ([[def-limit-point-r]], [[def-neighbourhood-r]]).

## Proof

**Proof technique:** cases.

1.1 Let $\varepsilon > 0$ be an arbitrary real. By [L1] applied to $f$ at $L$, fix a real $\rho > 0$ such that every $y \in B$ with $0 < |y - L| < \rho$ satisfies $|f(y) - M| < \varepsilon$; then by [L1] applied to $g$ at $c$, with $\rho$ in the role of the tolerance, fix a real $\delta_1 > 0$ such that every $x \in A$ with $0 < |x - c| < \delta_1$ satisfies $|g(x) - L| < \rho$. [L1, choose]

2.1 Case (i): assume $L \in B$ and $f(L) = M$, and put $\delta := \delta_1 > 0$. Let $x \in A$ with $0 < |x - c| < \delta$ and set $y := g(x)$, an element of $B$ since $g(A) \subseteq B$; then $|y - L| < \rho$. If $y = L$ then $|f(y) - M| = |f(L) - M| = |0| = 0 < \varepsilon$; and if $y \ne L$ then $0 < |y - L| < \rho$, so $|f(y) - M| < \varepsilon$. In both events $|(f \circ g)(x) - M| < \varepsilon$. [step 1.1, assume-case value, L1, L2, L3]

2.2 Case (ii): assume there is a real $\eta > 0$ with $g(x) \ne L$ for every $x \in A$ satisfying $0 < |x - c| < \eta$, and let $\delta$ be the smaller of $\delta_1$ and $\eta$, so $\delta > 0$. Let $x \in A$ with $0 < |x - c| < \delta$ and set $y := g(x) \in B$; then $y \ne L$, so $|y - L| > 0$, and $|y - L| < \rho$, so $0 < |y - L| < \rho$ and $|(f \circ g)(x) - M| = |f(y) - M| < \varepsilon$. [step 1.1, assume-case avoid, L1, L2, L3]

3.1 By hypothesis at least one of (i) and (ii) holds, so in either case a real $\delta > 0$ has been produced with $|(f \circ g)(x) - M| < \varepsilon$ for every $x \in A$ satisfying $0 < |x - c| < \delta$; since $\varepsilon > 0$ was arbitrary and $c$ is a limit point of $A$, the limit of $f \circ g$ at $c$ exists and equals $M$. [step 2.1, step 2.2, L1, L4, cases-exhaustive] ∎

## Remarks

- **The hypothesis that $L$ is a limit point of $B$ is what makes $\lim_{y \to L} f(y)$ meaningful at all** ([[def-function-limit]]); it is not an extra assumption of convenience. Note that it does not follow from $\lim_{x \to c} g(x) = L$: a constant $g$ has that limit while $B$ may be a set for which $L$ is isolated.

- **Hypothesis (i) is the continuity hypothesis in disguise.** Saying $L \in B$ and $f(L) = M = \lim_{y \to L} f(y)$ is exactly saying that $f$ is continuous at $L$ in the sense the next page of this track will define; that is the form in which this theorem is usually quoted, and it is why textbook statements of "the limit of a composition" almost always assume continuity of the outer function.

- **Hypothesis (ii) is the one that survives without continuity**, and it is the hypothesis under which substitutions such as $y = 1/x$ are legitimate: there the inner function omits the critical value on a punctured neighbourhood for a structural reason, not by assumption on $f$.

- **The two hypotheses are genuinely different**, neither implying the other. The companion page exhibits a pair satisfying neither, and the same pair with the inner function replaced by the identity, which satisfies (ii) but not (i).
````

