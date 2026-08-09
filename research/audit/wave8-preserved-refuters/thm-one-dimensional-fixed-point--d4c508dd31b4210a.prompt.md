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

- critical risk (10): 6 declared dependencies; 6 cited facts; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-one-dimensional-fixed-point`

Normalized current SHA-256: `7b58079e7d14f8640f3ac53f4b49e9cace4f858054df738b87b837281216496e`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-one-dimensional-fixed-point
kind: theorem
title: "Every continuous map of a closed bounded interval into itself has a fixed point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-intermediate-value, thm-algebra-of-continuous-functions, def-continuity-real, def-interval, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [thm-fixed-point-interval]
forward_refs: [ex-fixed-point-from-the-ivt]
landmark: true
short: "one-dimensional fixed point theorem"
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
    - title: "Brouwer fixed-point theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Brouwer_fixed-point_theorem"
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "K. Conrad, The Contraction Mapping Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/analysis/contraction.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$ and let $\varphi : [a,b] \to \mathbb{R}$
be continuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) with

$$\varphi(x) \in [a,b] \qquad \text{for every } x \in [a,b] .$$

Then $\varphi$ has a **fixed point**: there is $c \in [a,b]$ with
$\varphi(c) = c$.

**This is the one-dimensional case of Brouwer's theorem, and here it is
elementary.** The whole content is that $\varphi(x) - x$ is $\ge 0$ at the left
endpoint and $\le 0$ at the right, so the intermediate value theorem produces a
zero. Nothing about contraction, and no metric hypothesis, is needed: the map is
not assumed to shrink distances, and the fixed point need not be unique.

**Both hypotheses on the interval are used.** The interval must be closed, or
the fixed point can escape through an endpoint; and it must be bounded, or there
need be no fixed point at all, as $x \mapsto x + 1$ on $[0,\infty)$ shows.

## Facts & Assumptions

**Given:** Reals $a \le b$ and a continuous $\varphi : [a,b] \to \mathbb{R}$ with $\varphi(x) \in [a,b]$ for every $x \in [a,b]$.

[L1] Sums, scalar multiples and the identity: the identity $x \mapsto x$ is continuous on $[a,b]$, and a sum of two functions continuous on $[a,b]$ is continuous on $[a,b]$, as is a scalar multiple ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] Intermediate value theorem: if $g$ is continuous on $[a,b]$ with $a \le b$ and $y$ lies between $g(a)$ and $g(b)$ in either order, then $g(c) = y$ for some $c \in [a,b]$ ([[thm-intermediate-value]]).

[L3] Membership in $[a,b]$ means $a \le x \le b$ ([[def-interval]]).

[L4] Ordered-field arithmetic in $\mathbb{R}$: adding and subtracting preserves order, and $u - v \ge 0$ exactly when $u \ge v$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Define $g : [a,b] \to \mathbb{R}$ by $g(x) := \varphi(x) - x$. By [L1] the function $g$ is continuous on $[a,b]$, being the sum of $\varphi$ and $(-1)$ times the identity. [L1]

1.2 By hypothesis $\varphi(a) \in [a,b]$, so $\varphi(a) \ge a$ and hence $g(a) = \varphi(a) - a \ge 0$ by [L4]. Likewise $\varphi(b) \in [a,b]$ gives $\varphi(b) \le b$ and hence $g(b) = \varphi(b) - b \le 0$. [L3, L4]

2.1 So $g(b) \le 0 \le g(a)$: the value $0$ lies between $g(b)$ and $g(a)$. By [L2], applied to $g$ on $[a,b]$ with $y := 0$, there is $c \in [a,b]$ with $g(c) = 0$. [step 1.1, step 1.2, L2, choose]

3.1 Then $\varphi(c) - c = 0$, that is $\varphi(c) = c$, with $c \in [a,b]$: the map $\varphi$ has a fixed point. [step 2.1, L4] ∎

## Remarks

- **Uniqueness is not claimed and is false in general.** The identity map of $[a,b]$ into itself is continuous and fixes every point. What forces uniqueness is a contraction hypothesis, which is the setting of the Banach fixed point theorem in a complete metric space; that theorem also *produces* the fixed point as a limit of iterates, whereas the argument above only asserts that one exists.

- **The interval may not be replaced by an arbitrary compact set.** The map $x \mapsto -x$ carries the compact set $\{-1, 1\}$ into itself, is continuous, and fixes nothing. Order-convexity, not compactness alone, is what the intermediate value theorem needs.

- **A worked instance** is [[ex-fixed-point-from-the-ivt]] on the companion page, where $\varphi(x) = (x + 2/x)/2$ maps $[1,2]$ into itself and its unique fixed point is $\sqrt{2}$.
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-one-dimensional-fixed-point",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://kconrad.math.uconn.edu/blurbs/analysis/contraction.pdf"
  ],
  "rationale": "Conrad’s introduction states exactly that every continuous self-map of an arbitrary closed interval has a fixed point and proves it by applying IVT to f(x)-x. The local proof is that argument in the reversed sign convention.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-real-analysis-cantor-continuity.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f, g : A \\to \\mathbb{R}$, let $\\alpha \\in \\mathbb{R}$ and let $c \\in A$. Suppose $f$ and $g$ are continuous at $c$ ([[def-continuity-real]]). Then:",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-intermediate-value",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a \\le b$, let $f : [a,b] \\to \\mathbb{R}$ be continuous on the closed bounded interval $[a,b]$ ([[def-interval]], [[def-continuity-real]]), and let $y \\in \\mathbb{R}$ satisfy",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "interval",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "1.2",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.",
      "uses": [
        "1.2",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Define $g : [a,b] \\to \\mathbb{R}$ by $g(x) := \\varphi(x) - x$. By [L1] the function $g$ is continuous on $[a,b]$, being the sum of $\\varphi$ and $(-1)$ times the identity.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "By hypothesis $\\varphi(a) \\in [a,b]$, so $\\varphi(a) \\ge a$ and hence $g(a) = \\varphi(a) - a \\ge 0$ by [L4]. Likewise $\\varphi(b) \\in [a,b]$ gives $\\varphi(b) \\le b$ and hence $g(b) = \\varphi(b) - b \\le 0$.",
      "step": "1.2",
      "inputs": [
        "L4",
        "L3"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "So $g(b) \\le 0 \\le g(a)$: the value $0$ lies between $g(b)$ and $g(a)$. By [L2], applied to $g$ on $[a,b]$ with $y := 0$, there is $c \\in [a,b]$ with $g(c) = 0$.",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.1",
        "1.2"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Then $\\varphi(c) - c = 0$, that is $\\varphi(c) = c$, with $c \\in [a,b]$: the map $\\varphi$ has a fixed point.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The hypothesis a≤b makes [a,b] nonempty."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.2–3.1 apply IVT to the target value 0 and translate g(c)=0 into φ(c)=c."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The identity coefficient in g=φ−id is handled in step 1.1; no normalization excludes unit-length or unit-value intervals."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "If a=b, step 1.2 gives g(a)=0=g(b), and steps 2.1–3.1 return the sole endpoint as the fixed point."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 1.2 checks both closed endpoints and step 2.1 applies IVT including equality at either endpoint."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 2.1 names the fixed-point candidate only after IVT proves that the relevant zero preimage is nonempty."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `thm-one-dimensional-fixed-point` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `thm-one-dimensional-fixed-point` is not an equivalence, so it has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract by reading the item and each cited target from disk. Independent risk review occurs after A3/A4."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-one-dimensional-fixed-point",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-intermediate-value",
    "declared_target": "thm-intermediate-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-one-dimensional-fixed-point",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-one-dimensional-fixed-point",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-one-dimensional-fixed-point",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-one-dimensional-fixed-point",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-one-dimensional-fixed-point",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "thm-one-dimensional-fixed-point",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "ex-fixed-point-from-the-ivt",
    "declared_target": "ex-fixed-point-from-the-ivt",
    "target_statement_provenance": "ai-generated",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (7)

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

### `ex-fixed-point-from-the-ivt`

````markdown
---
id: ex-fixed-point-from-the-ivt
kind: example
title: "A worked fixed point on $[1,2]$ for the map $x \\mapsto (x + 2/x)/2$, from the one-dimensional fixed point theorem"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-one-dimensional-fixed-point, thm-intermediate-value, thm-algebra-of-continuous-functions, thm-nth-roots-exist, def-continuity-real, def-interval, def-integer-power, lem-power-monotone, lem-of-inverse-positive, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "fixed point of $(x+2/x)/2$ on $[1,2]$"
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
    - title: "Fixed point (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fixed_point_(mathematics)"
    - title: "Methods of computing square roots (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Methods_of_computing_square_roots"
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
pipeline_run: null
---

## Example

Let

$$\varphi : [1,2] \to \mathbb{R}, \qquad \varphi(x) := \frac{1}{2}\Bigl(x + \frac{2}{x}\Bigr)$$

([[def-interval]]). Then:

1. $\varphi$ is continuous on $[1,2]$ ([[def-continuity-real]]);
2. $\varphi(x) \in [1,2]$ for every $x \in [1,2]$;
3. by [[thm-one-dimensional-fixed-point]], $\varphi$ has a fixed point in
   $[1,2]$; and
4. that fixed point is **unique** and equals $\sqrt{2} = 2^{1/2}$
   ([[thm-nth-roots-exist]]).

**What the example is for.** It is the smallest nontrivial instance of the
one-dimensional fixed point theorem in which the fixed point can be *named*, and
it shows that the theorem, which asserts existence only, may be combined with an
algebraic identity to pin the point down. The identity is elementary:
$\varphi(c) = c$ says $c + 2/c = 2c$, that is $c^{2} = 2$.

**No derivative is used, and none is available at this point in the reading
order.** The usual argument that $\varphi$ maps $[1,2]$ into itself computes the
minimum of $\varphi$ by differentiation; the two-line order estimate of step 1.2
below replaces it. The same map is treated as a contraction of $[1,2]$ in
[[ex-banach-fixed-point-for-square-roots]], where the Banach fixed point theorem
gives the same point together with an error bound after $n$ iterations; that
route needs completeness of the metric subspace, this one needs only the
intermediate value theorem.

## Facts & Assumptions

**Given:** The interval $[1,2]$ and the function $\varphi(x) = \tfrac{1}{2}(x + 2/x)$ on it.

[L1] Algebra of continuous functions: the identity and constants are continuous, sums and scalar multiples of continuous functions are continuous, and the reciprocal of a continuous nowhere-vanishing function is continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] One-dimensional fixed point theorem: a continuous $\varphi : [a,b] \to \mathbb{R}$ with $a \le b$ and $\varphi(x) \in [a,b]$ for all $x \in [a,b]$ has a fixed point in $[a,b]$ ([[thm-one-dimensional-fixed-point]], [[thm-intermediate-value]]).

[L3] Reciprocals and order: for $1 \le x \le 2$ one has $0 < x$, hence $1/2 \le 1/x \le 1$ and so $1 \le 2/x \le 2$ ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L4] Square roots: for $a \ge 0$ there is a unique $s \ge 0$ with $s^{2} = a$, written $a^{1/2} = \sqrt{a}$; and $t \mapsto t^{2}$ is strictly increasing on the nonnegative reals ([[thm-nth-roots-exist]], [[lem-power-monotone]], [[def-integer-power]]).

[L5] Ordered-field arithmetic: $1 \le 2$; halving preserves order; and $1^{2} = 1 \le 2 \le 4 = 2^{2}$ ([[def-ordered-field]], [[def-complete-ordered-field]], [[def-integer-power]]).

## Verification

**Proof technique:** direct.

1.1 **Claim 1.** On $[1,2]$ the identity is continuous and does not vanish, since $x \ge 1 > 0$; so $x \mapsto 2/x$ is continuous there by [L1], and $\varphi = \tfrac{1}{2}\bigl(\mathrm{id} + 2/\mathrm{id}\bigr)$ is continuous on $[1,2]$ as a scalar multiple of a sum of continuous functions. [L1, L3]

1.2 **Claim 2.** Let $x \in [1,2]$. By [L3] we have $1 \le 2/x \le 2$, and by hypothesis $1 \le x \le 2$; adding, $2 \le x + 2/x \le 4$, and halving gives $1 \le \varphi(x) \le 2$ by [L5]. So $\varphi(x) \in [1,2]$. [L3, L5]

2.1 **Claim 3.** By [L2], applied with $a := 1$, $b := 2$ and the map $\varphi$, which is continuous by step 1.1 and maps $[1,2]$ into itself by step 1.2, there is $c \in [1,2]$ with $\varphi(c) = c$. [step 1.1, step 1.2, L2, choose]

3.1 **Every fixed point squares to $2$.** Let $c \in [1,2]$ satisfy $\varphi(c) = c$. Then $c \ge 1 > 0$, so multiplying $\tfrac{1}{2}(c + 2/c) = c$ by $2c$ gives $c^{2} + 2 = 2c^{2}$, that is $c^{2} = 2$. [step 2.1, L3, L5]

4.1 **Claim 4.** By [L4] there is exactly one nonnegative real whose square is $2$, namely $\sqrt{2}$; since every fixed point $c$ is $\ge 1 > 0$ and satisfies $c^{2} = 2$ by step 3.1, the fixed point is unique and equals $\sqrt{2}$. And $\sqrt{2}$ does lie in $[1,2]$: from $1^{2} = 1 \le 2 \le 4 = 2^{2}$ and the strict monotonicity of $t \mapsto t^{2}$ on the nonnegative reals ([L4], [L5]) one gets $1 \le \sqrt{2} \le 2$. [step 3.1, L4, L5] ∎

## Remarks

- **A sharper bound, from a square.** For $x > 0$ one has $\bigl(\sqrt{x} - \sqrt{2/x}\bigr)^{2} \ge 0$, and expanding gives $x + 2/x \ge 2\sqrt{2}$, so $\varphi(x) \ge \sqrt{2}$ for every $x > 0$. That is the same identity [[ex-banach-fixed-point-for-square-roots]] uses, and it shows that $\varphi$ maps $(0,\infty)$ into $[\sqrt{2}, \infty)$; the crude estimate of step 1.2 is all that claim 2 needs, and it avoids square roots entirely.

- **Existence and identification are separate steps.** [[thm-one-dimensional-fixed-point]] gives claim 3 with no information about where the point is; claim 4 is pure algebra and would be equally valid if no fixed point existed, since it only says *which* number a fixed point must be. It is the combination that names $\sqrt{2}$.

- **The interval matters.** On $[-2,-1]$ the same formula has the fixed point $-\sqrt{2}$, and on an interval straddling $0$ the map is not even defined. Choosing $[1,2]$ is what makes claim 2 true and isolates the positive root.
````

### `thm-algebra-of-continuous-functions`

````markdown
---
id: thm-algebra-of-continuous-functions
kind: theorem
title: "Sums, scalar multiples, products, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants, the identity and every polynomial function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, thm-algebra-of-function-limits, lem-sign-preservation-near-a-limit, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, cor-of-reverse-triangle, def-max-min, lem-finite-set-has-max, def-integer-power, def-ordered-field, def-field]
justified_by: []
aliases: [thm-continuity-algebra]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "algebra of continuous functions"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.4, 4.9)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f, g : A \to \mathbb{R}$, let
$\alpha \in \mathbb{R}$ and let $c \in A$. Suppose $f$ and $g$ are continuous at
$c$ ([[def-continuity-real]]). Then:

1. $f + g$, $\alpha f$ and $fg$ are continuous at $c$;
2. $|f|$, the function $x \mapsto |f(x)|$, is continuous at $c$;
3. $\max\{f,g\}$ and $\min\{f,g\}$, defined pointwise by
   $x \mapsto \max\{f(x), g(x)\}$ and $x \mapsto \min\{f(x), g(x)\}$
   ([[def-max-min]]), are continuous at $c$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is continuous at
   $c$ as a function on $A_0$.

Moreover, with no hypothesis at all:

5. every constant function $A \to \mathbb{R}$ and the identity
   $\mathrm{id} : A \to \mathbb{R}$, $x \mapsto x$, are continuous on $A$; hence
   so is $x \mapsto x^{n}$ for every $n \in \mathbb{N}$
   ([[def-integer-power]]), and hence so is every **polynomial function**
   $x \mapsto a_0 + a_1 x + \dots + a_n x^{n}$ with real coefficients.

Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,
$\alpha f$, $fg$, $|f|$, $\max\{f,g\}$ and $\min\{f,g\}$, and
$(f/g)|_{A_0}$ is continuous on $A_0$.

**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,
and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is
$g(c) \ne 0$, not "$g$ nowhere zero"; what it buys is that $c$ itself lies in
the smaller domain, which is what makes continuity there mean anything.

**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from
[[thm-algebra-of-function-limits]], which is itself proved from $\varepsilon$
and $\delta$, and claims 2, 3 and 5 are proved directly below. So no choice
principle is used anywhere in this item.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, functions $f, g : A \to \mathbb{R}$, a real $\alpha$, a point $c \in A$ at which $f$ and $g$ are continuous, and, for claim 4, the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$ ([[def-continuity-real]]).

[L2] A point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both; at an isolated point of its domain every function is continuous; at a limit point $c$ of $A$, continuity of $f$ at $c$ is exactly the statement that the limit of $f$ at $c$ exists and equals $f(c)$ ([[def-continuity-real]], [[def-limit-point-r]], [[def-neighbourhood-r]], [[def-function-limit]]).

[L3] Algebra of function limits at a limit point $c$ of $A$: if the limits of $f$ and $g$ at $c$ exist with values $L$ and $M$, then the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist with values $L+M$, $\alpha L$ and $LM$; and if $M \ne 0$ then $c$ is a limit point of $A_0$, and the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $L/M$ ([[thm-algebra-of-function-limits]]).

[L4] Sign preservation: if the limit of $g$ at a limit point $c$ of $A$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{\, x \in A : g(x) \ne 0 \,\}$ ([[lem-sign-preservation-near-a-limit]]).

[L5] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$ ([[cor-of-reverse-triangle]]); and $|u| \ge 0$, $|u| = 0$ exactly when $u = 0$, $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L6] Maximum and minimum of a two-element set of reals exist ([[lem-finite-set-has-max]], [[def-max-min]]), and for all reals $u, v$ one has $\max\{u,v\} = \tfrac{1}{2}\bigl(u + v + |u-v|\bigr)$ and $\min\{u,v\} = \tfrac{1}{2}\bigl(u + v - |u-v|\bigr)$.

[L7] Ordered-field arithmetic in $\mathbb{R}$: trichotomy and totality of the order, the field identities, and $0 < 1$ so that $2 \ne 0$ and $t/2$ is defined ([[def-ordered-field]], [[def-field]]).

[L8] Integer powers: $a^{0} = 1$ and $a^{n+1} = a^{n} \cdot a$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 **Justification of the identity in [L6].** Let $u, v \in \mathbb{R}$. By totality either $u \ge v$ or $v \ge u$. If $u \ge v$ then $u - v \ge 0$, so $|u-v| = u-v$ and $\tfrac{1}{2}(u+v+|u-v|) = \tfrac{1}{2}(2u) = u = \max\{u,v\}$, while $\tfrac{1}{2}(u+v-|u-v|) = v = \min\{u,v\}$. If $v \ge u$ the same computation with the roles exchanged applies, since $|u-v| = v-u$ there. [L5, L6, L7]

1.2 **The isolated case.** Suppose $c$ is an isolated point of $A$, say $N_{\eta}(c) \cap A = \{c\}$ with $\eta > 0$ real. Then every function on $A$ is continuous at $c$ by [L2], which gives claims 1, 2 and 3 at once. For claim 4, assume $g(c) \ne 0$; then $c \in A_0$, and $N_{\eta}(c) \cap A_0 \subseteq N_{\eta}(c) \cap A = \{c\}$ with $c$ in the left-hand side, so $c$ is an isolated point of $A_0$ and every function on $A_0$, in particular $(f/g)|_{A_0}$, is continuous at $c$. [L2]

1.3 **Claim 2, at any point of $A$.** Let a real $\varepsilon > 0$ be given and let $\delta > 0$ be as in [L1] for $f$ and this $\varepsilon$. For $x \in A$ with $|x - c| < \delta$ the reverse triangle inequality gives $\bigl||f(x)| - |f(c)|\bigr| \le |f(x) - f(c)| < \varepsilon$. So $|f|$ is continuous at $c$, and no case distinction was needed. [L1, L5]

1.4 **Claim 5, constants and the identity.** If $f$ is constant then $|f(x) - f(c)| = 0 < \varepsilon$ for every $x \in A$ and every real $\varepsilon > 0$, so any $\delta > 0$ serves. For the identity, given a real $\varepsilon > 0$ take $\delta := \varepsilon$: every $x \in A$ with $|x - c| < \delta$ has $|\mathrm{id}(x) - \mathrm{id}(c)| = |x - c| < \varepsilon$. Both are continuous at every point of $A$. [L1, L5, L7]

1.5 **The limit-point case, claim 1.** Suppose $c$ is a limit point of $A$. By [L2] the limits of $f$ and of $g$ at $c$ exist and equal $f(c)$ and $g(c)$. By [L3] the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist and equal $f(c)+g(c)$, $\alpha f(c)$ and $f(c)g(c)$, which are exactly the values of those three functions at $c$; by [L2] again, each of them is continuous at $c$. [L2, L3]

1.6 **The limit-point case, claim 4.** Suppose $c$ is a limit point of $A$ and $g(c) \ne 0$. Then $c \in A_0$, and by [L4] the point $c$ is a limit point of $A_0$. By [L3] the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $f(c)/g(c)$, which is the value of $(f/g)|_{A_0}$ at $c$; by [L2] applied on the domain $A_0$, that function is continuous at $c$. [L2, L3, L4]

2.1 **Claims 1 and 4 in general.** By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$; step 1.2 settles the first case and steps 1.5 and 1.6 the second. So claims 1 and 4 hold as stated. [step 1.2, step 1.5, step 1.6, L2]

3.1 **Claim 3.** By claim 1 the function $f - g = f + (-1)g$ is continuous at $c$, by step 1.3 so is $|f-g|$, and by claim 1 again so are $f + g + |f-g|$ and its scalar multiple by $1/2$. By step 1.1 that scalar multiple is the function $x \mapsto \max\{f(x), g(x)\}$, so the maximum is continuous at $c$; the same argument with $-|f-g|$ gives the minimum. [step 1.1, step 1.3, step 2.1, L6, L7]

3.2 **Claim 5, powers and polynomials.** The map $x \mapsto x^{0}$ is the constant $1$ and $x \mapsto x^{1}$ is the identity, both continuous on $A$ by step 1.4; and if $x \mapsto x^{n}$ is continuous on $A$ then so is $x \mapsto x^{n+1} = x^{n} \cdot x$, being a product of two functions continuous on $A$ by step 2.1. By induction on $n$, $x \mapsto x^{n}$ is continuous on $A$ for every $n \in \mathbb{N}$. A polynomial function $a_0 + a_1x + \dots + a_nx^{n}$ is obtained from these by finitely many scalar multiplications and additions, each of which preserves continuity by step 2.1. [step 1.4, step 2.1, L8]

4.1 Claims 1 to 5 are proved, all of them at an arbitrary point $c$ of $A$ and therefore, applied at every point, on the whole of $A$; and no sequence and no choice principle was used. [step 1.3, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Why the two-case shape, and why it is not an inconvenience.** Continuity is defined at every point of the domain, including isolated points, where no limit exists ([[def-continuity-real]]). The algebra of limits therefore cannot be applied blindly; but at an isolated point every function is continuous, so the case is settled before it is opened. Claims 2 and 5 are proved directly from $\varepsilon$ and $\delta$ and need no case distinction at all.

- **Absolute value, maximum and minimum are not in [[thm-algebra-of-function-limits]]**, and the reason is that they are not needed there. They are needed here: the extreme value theorem and the one-dimensional fixed point theorem both build auxiliary functions out of maxima, minima and differences, and [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]] builds its witnesses out of $|x - x_0|$ and quotients.

- **The converse of claim 2 is false**: $|f|$ may be continuous while $f$ is continuous nowhere. The function equal to $1$ on $\mathbb{Q}$ and to $-1$ elsewhere has constant absolute value; that it is nowhere continuous follows from the argument of [[cex-dirichlet-is-nowhere-continuous]] applied verbatim, since that argument uses only that the two values are distinct.
````

### `thm-intermediate-value`

````markdown
---
id: thm-intermediate-value
kind: theorem
title: "Intermediate value theorem, by bisection with a canonical left-half rule: a continuous function on $[a,b]$ takes every value between $f(a)$ and $f(b)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, thm-algebra-of-continuous-functions, thm-sequential-criterion-for-continuity, thm-nested-interval-property, def-interval, def-complete-ordered-field, thm-recursion, lem-geometric-sequence-null, thm-algebra-of-limits, lem-limit-preserves-order, def-real-limit, def-sequence, def-integer-power, lem-power-laws, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [thm-ivt]
landmark: true
short: "intermediate value theorem"
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
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.23)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.9: The Intermediate Value Property"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.09%3A_The_Intermediate_Value_Property"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$, let $f : [a,b] \to \mathbb{R}$ be
continuous on the closed bounded interval $[a,b]$ ([[def-interval]],
[[def-continuity-real]]), and let $y \in \mathbb{R}$ satisfy

$$f(a) \le y \le f(b) \qquad \text{or} \qquad f(b) \le y \le f(a) .$$

Then there is $c \in [a,b]$ with $f(c) = y$.

**The construction is canonical, so no choice principle is used.** The bisection
below tests the left half first and takes the right half only when the left one
has been ruled out, so the passage from one interval to the next is a *function*
of that interval, and [[thm-recursion]] applies with nothing selected. This is
the same discipline the library uses wherever a sequence is built one term at a
time.

**Completeness of $\mathbb{R}$ is what does the work.** The bisection produces a
nested sequence of closed bounded intervals whose lengths tend to $0$, and it is
[[thm-nested-interval-property]] — hence the least-upper-bound property — that
supplies the point. Over an ordered field that is not complete the theorem
fails; the witness for that, stated for an arbitrary ordered field and worked
over $\mathbb{Q}$, is
[[cex-evt-and-ivt-fail-over-a-non-complete-field]], which states its own
$\varepsilon$-$\delta$ continuity inline and is not an instance of this page's
definition.

## Facts & Assumptions

**Given:** Reals $a \le b$, a function $f : [a,b] \to \mathbb{R}$ continuous on $[a,b]$, and a real $y$ with $f(a) \le y \le f(b)$ or $f(b) \le y \le f(a)$.

[L1] Scalar multiples of continuous functions are continuous, so $(-1)f$ is continuous on $[a,b]$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] Recursion: for a set $X$, an element $x_0 \in X$ and a function $F : X \to X$ there is a unique $g : \mathbb{N} \to X$ with $g(0) = x_0$ and $g(k+1) = F(g(k))$ for every $k$ ([[thm-recursion]]).

[L3] Nested intervals: if $I_k = [a_k,b_k]$ with $a_k \le b_k$ and $I_{k+1} \subseteq I_k$ for every $k \in \mathbb{N}$, then $\bigcap_{k} I_k$ is nonempty, and it is a single point exactly when the lengths $b_k - a_k$ tend to $0$ ([[thm-nested-interval-property]], [[def-interval]], [[def-real-limit]]).

[L4] Null geometric sequences: $|r| < 1$ implies $r^{k} \to 0$; and a constant multiple of a null sequence is null, while a constant sequence converges to that constant ([[lem-geometric-sequence-null]], [[thm-algebra-of-limits]], [[def-integer-power]], [[def-sequence]]).

[L5] Powers: $(2^{-1})^{k} = (2^{k})^{-1}$ for every $k \in \mathbb{N}$ ([[lem-power-laws]], [[def-integer-power]]).

[L6] Sequential criterion, the choice-free direction: if $f$ is continuous at $c$ and $x_k \in [a,b]$ with $x_k \to c$, then $f(x_k) \to f(c)$ ([[thm-sequential-criterion-for-continuity]], [[def-continuity-real]]).

[L7] Limits preserve non-strict inequalities ([[lem-limit-preserves-order]]).

[L8] Order and field arithmetic in $\mathbb{R}$: trichotomy and totality, so exactly one of $f(m) \ge y$ and $f(m) < y$ holds; halving and the ordered-field identities ([[def-ordered-field]], [[def-complete-ordered-field]]); and $|t| \le s$ whenever $-s \le t \le s$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** constructive.

1.1 **Reduction.** It is enough to prove the theorem under the hypothesis $f(a) \le y \le f(b)$. Indeed, in the remaining case $f(b) \le y \le f(a)$, put $h := (-1)f$ and $z := -y$; then $h$ is continuous on $[a,b]$ by [L1] and $h(a) = -f(a) \le -y = z \le -f(b) = h(b)$, so a point $c \in [a,b]$ with $h(c) = z$ is a point with $f(c) = y$. [L1, L8, suffices: assume f(a) le y le f(b)]

1.2 **The bisection map.** Assume $f(a) \le y \le f(b)$ and put $$X \;:=\; \bigl\{\, (u,v) \in \mathbb{R} \times \mathbb{R} \ : \ a \le u \le v \le b,\ f(u) \le y \le f(v) \,\bigr\},$$ so $(a,b) \in X$. For $(u,v) \in X$ write $m := (u+v)/2$, which satisfies $a \le u \le m \le v \le b$ and so lies in $[a,b]$, and define $$F(u,v) \;:=\; \begin{cases} (u,\ m) & \text{if } f(m) \ge y,\\ (m,\ v) & \text{if } f(m) < y. \end{cases}$$ By trichotomy exactly one clause applies, so $F$ is a function on $X$; and $F(u,v) \in X$ in both clauses, since in the first $f(u) \le y \le f(m)$ and in the second $f(m) \le y \le f(v)$. **The left half is tested first and the right half is taken only when the left is excluded, so nothing is selected.** [L8, construct]

2.1 **The nested sequence.** By [L2] applied to $X$, the element $(a,b)$ and the map $F$, there is a unique $g : \mathbb{N} \to X$ with $g(0) = (a,b)$ and $g(k+1) = F(g(k))$. Write $g(k) = (a_k,b_k)$ and $I_k := [a_k,b_k]$. Then for every $k$: $a \le a_k \le b_k \le b$ and $f(a_k) \le y \le f(b_k)$, because $g(k) \in X$; and $I_{k+1} \subseteq I_k$, since in either clause of the definition of $F$ the new endpoints lie in $[a_k,b_k]$ and the new interval is $[a_k,m_k]$ or $[m_k,b_k]$ with $m_k = (a_k+b_k)/2$. [step 1.2, L2, L8]

3.1 **The lengths.** In both clauses the new length is $m_k - a_k = (b_k - a_k)/2$ or $b_k - m_k = (b_k - a_k)/2$, so $b_{k+1} - a_{k+1} = (b_k - a_k)/2$; with $b_0 - a_0 = b - a$ an induction on $k$ gives $b_k - a_k = (b-a)\,(2^{-1})^{k}$ for every $k \in \mathbb{N}$, that is $(b-a)/2^{k}$ by [L5]. Since $|2^{-1}| < 1$, [L4] gives $(2^{-1})^{k} \to 0$ and hence $b_k - a_k \to 0$. [step 2.1, L4, L5, L8]

4.1 **The point.** By [L3] applied to the nested family $(I_k)$, whose lengths tend to $0$ by step 3.1, the intersection $\bigcap_k I_k$ is a single point; call it $c$. Then $c \in I_0 = [a,b]$ and $a_k \le c \le b_k$ for every $k$. [step 2.1, step 3.1, L3, construct]

5.1 **The endpoints converge to $c$.** Let a rational $\varepsilon > 0$ be given. By step 3.1 there is $K$ with $b_k - a_k < \varepsilon$ for all $k \ge K$. For such $k$, from $a_k \le c \le b_k$ we get $-(b_k - a_k) \le a_k - c \le 0$ and $0 \le b_k - c \le b_k - a_k$, so $|a_k - c| \le b_k - a_k < \varepsilon$ and $|b_k - c| \le b_k - a_k < \varepsilon$ by [L8]. Hence $a_k \to c$ and $b_k \to c$. [step 3.1, step 4.1, L8]

6.1 **Passing to the limit.** The point $c$ lies in $[a,b]$, so $f$ is continuous at $c$, and [L6] applied to the two sequences of step 5.1 gives $f(a_k) \to f(c)$ and $f(b_k) \to f(c)$. [step 4.1, step 5.1, L6]

7.1 By step 2.1, $f(a_k) \le y$ for every $k$; the constant sequence with value $y$ converges to $y$ by [L4], so [L7] gives $f(c) \le y$. Likewise $y \le f(b_k)$ for every $k$ gives $y \le f(c)$. Hence $f(c) = y$. [step 2.1, step 6.1, L4, L7, L8]

8.1 A point $c \in [a,b]$ with $f(c) = y$ has therefore been constructed, under the reduction of step 1.1 and hence in both cases of the hypothesis. [step 1.1, step 4.1, step 7.1, discharge-construct: c is the unique point of the nested intersection] ∎

## Remarks

- **Why the left half is tested first.** The bisection has to choose one of two halves at every stage, and if the rule were "choose a half in which the sign change persists" the construction would be a dependent choice, not a recursion. Testing $f(m) \ge y$ and taking the left half in that case makes the successor a function of its predecessor, so [[thm-recursion]] applies verbatim. The same device is used in [[thm-perfect-set-uncountable-r]] and in the bisection proof of Heine-Borel.

- **What the theorem does *not* say.** It does not say that $c$ is unique, and it does not say that the set of solutions is an interval; $f$ may take the value $y$ on a complicated set. It also does not say that a function with the intermediate value property is continuous — that converse is false, and the witness for it needs machinery that is not available at this point in the reading order.

- **Only the choice-free direction of the sequential criterion is used.** Step 6.1 turns a convergent sequence into a convergent image sequence, which is the implication proved in ZF ([[thm-sequential-criterion-for-continuity]]); the converse, which spends countable choice, is never invoked here.
````

