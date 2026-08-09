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

- critical risk (16): 21 declared dependencies; 21 cited facts; 11 numbered proof steps; biconditional / both-direction claim; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; analytic limiting/completeness language

## Target item — `ex-distance-to-the-integers`

Normalized current SHA-256: `d232d3c2a80c1739a4b085fc5a74567e07121774fea27ee0c2336a4795ebec06`

The complete current item follows, including frontmatter:

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

## Wave 7 provenance row for the target

```json
{
  "id": "ex-distance-to-the-integers",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Triangle_wave",
    "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
  ],
  "rationale": "The sources identify the distance-to-nearest-integer triangle wave and the floor convention. The local item packages attainment, range, zero set, half-integer values, and period one in one worked example.",
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
      "source": "lem-integer-part",
      "source_section": "Statement",
      "quote": "Identify $\\mathbb{Z}$ with its canonical copy inside $\\mathbb{R}$, along the\nembeddings $\\mathbb{N} \\to \\mathbb{Z} \\to \\mathbb{Q} \\to \\mathbb{R}$\n([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]],\n[[def-integers]]). Then for every real $x$ there is **exactly one** integer $m$\nwith\n\n$$m \\;\\le\\; x \\;<\\; m + 1 .$$\n\nIt is written $\\lfloor x \\rfloor$ and called the **integer part**, or **floor**,\nof $x$.\n\n**Two independent ingredients are needed and neither may be dropped.** Existence\nis the Archimedean property ([[thm-of-archimedean]]) together with the\nwell-ordering of $\\mathbb{N}$ ([[thm-well-ordering-principle]]): the first says\nthat $x$ is caught between two integers at all, the second picks the *least*\ninteger above $x$. Uniqueness is the discreteness of $\\mathbb{Z}$: no integer\nlies strictly between $m$ and $m+1$.\n\nThis lemma is stated once here and reused. It is what turns \"the nearest integer\nto $x$\" from a picture into an object, and the companion page's oscillator\n$\\psi(x) = \\inf_{n \\in \\mathbb{Z}} |x - n|$ is computed from it in one line.",
      "uses": [
        "1.2",
        "4.3",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-integers",
      "source_section": "Definition",
      "quote": "On the set $\\mathbb{N} \\times \\mathbb{N}$ of pairs of natural numbers, define\n\n$$(a,b) \\sim (c,d) \\iff a + d = b + c.$$\n\nThis is an equivalence relation ([[lem-int-equivalence]]). The **integers** are\nthe quotient\n\n$$\\mathbb{Z} := (\\mathbb{N} \\times \\mathbb{N}) / \\sim,$$\n\nand we write $[(a,b)]$ for the equivalence class of $(a,b)$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.4"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-nat-embeds-int",
      "source_section": "Statement",
      "quote": "The map $\\iota(n) = [(n,0)]$ is injective and preserves addition,\nmultiplication, and order. Its image is exactly the set of nonnegative\nintegers, so every $x \\ge 0$ in $\\mathbb{Z}$ is $\\iota(k)$ for a unique\nnatural $k$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.4"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-int-embeds-rat",
      "source_section": "Statement",
      "quote": "The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication,\nand order. Composing with [[lem-nat-embeds-int]] embeds $\\mathbb{N}$ in\n$\\mathbb{Q}$; we write $k$ for $j(k)$ throughout.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.4"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.4"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-int-ordered-ring",
      "source_section": "Statement",
      "quote": "The relation of [[def-int-order]] is well defined and is a total order on\n$\\mathbb{Z}$; it is compatible with addition ($x \\le y$ implies\n$x + z \\le y + z$) and positives are closed under multiplication\n($0 < x$ and $0 < y$ imply $0 < xy$). Thus $\\mathbb{Z}$ is a totally\nordered commutative ring.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.4"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-int-comm-ring",
      "source_section": "Statement",
      "quote": "$(\\mathbb{Z}, +, \\cdot, 0, 1)$ with the operations of [[def-int-operations]] is\na commutative ring with multiplicative identity, in which every element has the\nadditive inverse $-[(a,b)] = [(b,a)]$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.4"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-nat-discrete",
      "source_section": "Statement",
      "quote": "For all $m, n \\in \\mathbb{N}$: $m < n \\iff \\sigma(m) \\le n$ ([[def-nat-order]]). Consequently there is no $k$ with $n < k < \\sigma(n)$: the successor $\\sigma(n)$ is the immediate successor of $n$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.4"
      ]
    },
    {
      "fact": "L2",
      "source": "def-natural-numbers",
      "source_section": "Definition",
      "quote": "The set of **natural numbers** is the **smallest inductive set**\n([[def-inductive-set]]),\n\n$$\\mathbb{N} = \\omega := \\bigcap\\,\\{\\, I : I \\text{ is inductive} \\,\\},$$\n\nwhich exists and is itself inductive by [[lem-omega-smallest-inductive]] (the\nAxiom of Infinity, [[def-axiom-of-infinity]], supplies one inductive set to\nintersect within, and Separation, [[def-axiom-schema-of-separation]], makes the\nintersection a set). On $\\mathbb{N}$ we take\n\n$$0 := \\varnothing, \\qquad \\sigma(n) := n \\cup \\{n\\},$$\n\nthe distinguished element and the successor function. Thus\n$0 = \\varnothing$, $1 = \\{0\\}$, $2 = \\{0, 1\\}$, $3 = \\{0, 1, 2\\}$, and in general\n$n = \\{0, 1, \\dots, n-1\\}$ is the set of its predecessors.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.4"
      ]
    },
    {
      "fact": "L3",
      "source": "def-infimum",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $\\ell \\in \\mathbb{R}$. Then $\\ell$ is a\n**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:\n\n- $\\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\\ell \\le s$ for\n  every $s \\in S$;\n- $\\ell' \\le \\ell$ for every lower bound $\\ell'$ of $S$.\n\nWritten out in one line:\n\n$$\\ell \\text{ is an infimum of } S \\iff \\big[(\\forall s \\in S)\\, \\ell \\le s\\big] \\text{ and } \\big[(\\forall \\ell' \\in \\mathbb{R})\\, \\big((\\forall s \\in S)\\, \\ell' \\le s\\big) \\Rightarrow \\ell' \\le \\ell\\big].$$\n\nAn infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write\n$\\inf S$ for it.",
      "uses": [
        "3.1",
        "4.2",
        "4.4"
      ]
    },
    {
      "fact": "L3",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$.\n\n- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.\n\nA set has at most one maximum: if $m_1$ and $m_2$ are both maxima then\n$m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so\n$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy\naxiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).\nThe same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "3.1",
        "4.2",
        "4.4"
      ]
    },
    {
      "fact": "L3",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field\n([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.\n\nThe notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:\n\n- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "3.1",
        "4.2",
        "4.4"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-abs-value",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of\n$x \\in F$ is\n\n$$|x| \\;:=\\; \\begin{cases} x & \\text{if } x \\ge 0, \\\\ -x & \\text{if } x < 0. \\end{cases}$$",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "4.1",
        "4.2",
        "4.3",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "4.1",
        "4.2",
        "4.3",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "4.1",
        "4.2",
        "4.3",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "4.1",
        "4.2",
        "4.3",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-field",
      "source_section": "Definition",
      "quote": "A **field** is a set $F$ equipped with two binary operations $+$ (addition) and\n$\\cdot$ (multiplication) and two distinguished elements $0 \\ne 1$ of $F$,\nsatisfying:\n\n- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is\n  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an\n  additive inverse $-x$ with $x + (-x) = 0$.\n- **(M)** Multiplication is associative and commutative **on all of $F$**, and\n  $x \\cdot 1 = x$ for every $x \\in F$; moreover $(F \\setminus \\{0\\}, \\cdot)$ is an\n  abelian group with identity $1$, so every $x \\ne 0$ has a multiplicative inverse\n  $x^{-1}$ with $x \\cdot x^{-1} = 1$.\n- **(D)** Multiplication distributes over addition: $x \\cdot (y + z) = x\\cdot y + x\\cdot z$.\n\nWe write $x - y := x + (-y)$ and $x/y := x \\cdot y^{-1}$ (for $y \\ne 0$), and\nabbreviate $x \\cdot y$ as $xy$.",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "4.1",
        "4.2",
        "4.3",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$.\n\n- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.\n\nA set has at most one maximum: if $m_1$ and $m_2$ are both maxima then\n$m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so\n$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy\naxiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).\nThe same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "4.1",
        "4.2",
        "4.3",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.2",
        "2.1",
        "3.1",
        "4.1",
        "4.2",
        "4.3",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$D(x)$ is nonempty and $0$ is a lower bound of it: the integer $0$ gives $|x - 0| \\in D(x)$, and $|x - n| \\ge 0$ for every $n \\in \\mathbb{Z}$.",
      "step": "1.1",
      "inputs": [
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "By [L1] the integer $m = \\lfloor x \\rfloor$ satisfies $m \\le x < m + 1$, so $t = x - m$ satisfies $0 \\le t < 1$, and $(m+1) - x = 1 - t$ satisfies $0 < 1 - t \\le 1$.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L5"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Every element of $D(x)$ is at least $\\min\\{t, 1-t\\}$. Let $n \\in \\mathbb{Z}$. By [L2] and totality either $n \\le m$ or $m < n$, and in the second case $m + 1 \\le n$. If $n \\le m$ then $x - n \\ge x - m = t \\ge 0$, so $|x - n| = x - n \\ge t$. If $m + 1 \\le n$ then $n - x \\ge (m+1) - x = 1 - t > 0$, so $|x - n| = n - x \\ge 1 - t$. In both cases $|x - n| \\ge \\min\\{t, 1-t\\}$.",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.2",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Both $t$ and $1 - t$ belong to $D(x)$: since $t \\ge 0$ we have $t = |x - m|$, and since $1 - t > 0$ we have $1 - t = |x - (m+1)|$, with $m$ and $m+1$ in $\\mathbb{Z}$.",
      "step": "2.2",
      "inputs": [
        "1.2",
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Hence $\\min\\{t, 1-t\\}$ is a lower bound of $D(x)$ belonging to $D(x)$, so by [L3] it is the greatest lower bound and also the minimum: $\\psi(x) = \\min\\{t, 1-t\\} = \\min\\{|x - m|, |x - (m+1)|\\}$, attained at $n = m$ or at $n = m+1$. This is claim 1.",
      "step": "3.1",
      "inputs": [
        "L3",
        "2.1",
        "2.2",
        "L5"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Claim 2, the inclusion. $\\psi(x) \\ge 0$, since $t \\ge 0$ and $1 - t > 0$; and $\\psi(x) \\le 1/2$: if $t \\le 1/2$ then $\\psi(x) \\le t \\le 1/2$, while if $1/2 < t$ then $1 - t < 1 - 1/2 = 1/2$ and $\\psi(x) \\le 1 - t < 1/2$. So $0 \\le \\psi(x) \\le 1/2$ for every real $x$.",
      "step": "4.1",
      "inputs": [
        "1.2",
        "3.1",
        "L5"
      ]
    },
    {
      "id": "step-4-2",
      "claim": "Claim 3. If $\\psi(x) = 0$ then $\\min\\{t, 1-t\\} = 0$; since $1 - t > 0$ this forces $t = 0$, that is $x = m \\in \\mathbb{Z}$. Conversely if $x \\in \\mathbb{Z}$ then $|x - x| = 0$ lies in $D(x)$ and $0$ is a lower bound of $D(x)$ by step 1.1, so $\\psi(x) = 0$ by [L3].",
      "step": "4.2",
      "inputs": [
        "1.1",
        "L3",
        "1.2",
        "3.1",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-4-3",
      "claim": "Claim 4. Let $m \\in \\mathbb{Z}$ and $x := m + 1/2$. Since $0 < 1/2 < 1$ we have $m \\le x < m + 1$, so the uniqueness in [L1] gives $\\lfloor x \\rfloor = m$ and $t = 1/2$; then step 3.1 gives $\\psi(x) = \\min\\{1/2,\\ 1 - 1/2\\} = \\min\\{1/2, 1/2\\} = 1/2$.",
      "step": "4.3",
      "inputs": [
        "L1",
        "3.1",
        "L5"
      ]
    },
    {
      "id": "step-4-4",
      "claim": "Claim 5. The map $n \\mapsto n + 1$ is a bijection of $\\mathbb{Z}$ onto itself, with inverse $n \\mapsto n - 1$ [L2]; so, substituting $n = n' + 1$, $$D(x+1) = \\{\\, |(x+1) - n| : n \\in \\mathbb{Z} \\,\\} = \\{\\, |x - n'| : n' \\in \\mathbb{Z} \\,\\} = D(x) .$$ Being infima of the same set, $\\psi(x+1)$ and $\\psi(x)$ are equal by step 3.1 applied at $x + 1$ and at $x$.",
      "step": "4.4",
      "inputs": [
        "L2",
        "3.1",
        "L3"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Claim 2, the exact range. Every value of $\\psi$ lies in $[0,1/2]$ by step 4.1. Conversely let $s$ satisfy $0 \\le s \\le 1/2$; then $0 \\le s < 1$, so $0 \\le s < 0 + 1$ and the uniqueness in [L1] gives $\\lfloor s \\rfloor = 0$ and $t = s$; and $s \\le 1/2 \\le 1 - s$ because $2s \\le 1$, so step 3.1 gives $\\psi(s) = \\min\\{s, 1-s\\} = s$. Hence the range of $\\psi$ is exactly $[0,1/2]$.",
      "step": "5.1",
      "inputs": [
        "4.1",
        "L1",
        "3.1",
        "L5"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "So $\\psi$ is defined at every real, is attained at a nearest integer, has range exactly $[0,1/2]$, vanishes exactly on $\\mathbb{Z}$, takes the value $1/2$ at every half-integer, and is $1$-periodic.",
      "step": "6.1",
      "inputs": [
        "3.1",
        "4.1",
        "4.2",
        "4.3",
        "4.4",
        "5.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 1.1: $D(x)$ is nonempty and $0$ is a lower bound of it: the integer $0$ gives $|x - 0| \\in D(x)$, and $|x - n| \\ge 0$ for every $n \\in \\mathbb{Z}$."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: $D(x)$ is nonempty and $0$ is a lower bound of it: the integer $0$ gives $|x - 0| \\in D(x)$, and $|x - n| \\ge 0$ for every $n \\in \\mathbb{Z}$."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.2: By [L1] the integer $m = \\lfloor x \\rfloor$ satisfies $m \\le x < m + 1$, so $t = x - m$ satisfies $0 \\le t < 1$, and $(m+1) - x = 1 - t$ satisfies $0 < 1 - t \\le 1$."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 4.4: Claim 5. The map $n \\mapsto n + 1$ is a bijection of $\\mathbb{Z}$ onto itself, with inverse $n \\mapsto n - 1$ [L2]; so, substituting $n = n' + 1$, $$D(x+1) = \\{\\, |(x+1) - n| : n \\in \\mathbb{Z} \\,\\} = \\{\\, |x - n'| : n' \\in \\mathbb{Z} \\,\\} = D(x) .$$ Being inf"
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
      "status": "checked",
      "evidence": "step 1.1: the forward direction (or first implication in the stated equivalence cycle) starts here and was checked through the subsequent cited steps."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "step 4.2: the converse direction (or closing implication in the stated equivalence cycle) is established here and was checked."
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
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-integer-part",
    "declared_target": "lem-integer-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-infimum",
    "declared_target": "def-infimum",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-integers",
    "declared_target": "def-integers",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-natural-numbers",
    "declared_target": "def-natural-numbers",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-nat-embeds-int",
    "declared_target": "lem-nat-embeds-int",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-int-embeds-rat",
    "declared_target": "lem-int-embeds-rat",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-nat-discrete",
    "declared_target": "lem-nat-discrete",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-int-ordered-ring",
    "declared_target": "thm-int-ordered-ring",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-int-comm-ring",
    "declared_target": "thm-int-comm-ring",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers",
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
    "source": "ex-distance-to-the-integers",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-abs-value",
    "declared_target": "def-abs-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers",
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
    "source": "ex-distance-to-the-integers",
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
    "source": "ex-distance-to-the-integers",
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
    "source": "ex-distance-to-the-integers",
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
    "source": "ex-distance-to-the-integers",
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
  },
  {
    "source": "ex-distance-to-the-integers",
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
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (24)

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

### `def-abs-value`

````markdown
---
id: def-abs-value
kind: definition
title: "Absolute value in an ordered field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: []
landmark: false
short: "|x|"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dartmouth College analysis notes: Absolute value"
      url: "https://math.dartmouth.edu/~m63w21/lecture-m63-02.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of
$x \in F$ is

$$|x| \;:=\; \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}$$

## Remarks

- The distance between $x$ and $y$ is $|x - y|$.
- The basic algebraic properties ($|x| \ge 0$, $|x| = 0 \iff x = 0$,
  $|xy| = |x|\,|y|$, and the characterisation $|x| < c \iff -c < x < c$) are
  established in [[lem-of-abs-value]]; the triangle inequality is
  [[lem-of-triangle-inequality]].
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

### `def-infimum`

````markdown
---
id: def-infimum
kind: definition
title: "Greatest lower bound (infimum)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-set]
justified_by: [lem-sup-unique]
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
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $\ell \in \mathbb{R}$. Then $\ell$ is a
**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:

- $\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\ell \le s$ for
  every $s \in S$;
- $\ell' \le \ell$ for every lower bound $\ell'$ of $S$.

Written out in one line:

$$\ell \text{ is an infimum of } S \iff \big[(\forall s \in S)\, \ell \le s\big] \text{ and } \big[(\forall \ell' \in \mathbb{R})\, \big((\forall s \in S)\, \ell' \le s\big) \Rightarrow \ell' \le \ell\big].$$

An infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write
$\inf S$ for it.

## Remarks

- This is the exact dual of the least upper bound (supremum) of
  [[def-complete-ordered-field]]: reverse every inequality and swap "least" for
  "greatest". The two notions are related by reflection through $0$
  ([[lem-reflection]]).
- Existence is deliberately *not* part of the definition. That every nonempty
  subset of $\mathbb{R}$ which is bounded below actually has an infimum is a
  theorem, [[thm-infimum-property]], derived from the least-upper-bound property;
  it is not an axiom and it is not free.
- As with a supremum, an infimum need not belong to $S$; when it does, it is the
  minimum of $S$ ([[def-max-min]]).
- The usable form of the definition in later arguments is the epsilon
  characterisation [[lem-inf-epsilon]]: $\ell = \inf S$ exactly when $\ell$ is a
  lower bound that cannot be raised by any positive amount without losing that
  property.
````

### `def-integers`

````markdown
---
id: def-integers
kind: definition
title: "The integers as equivalence classes of pairs of naturals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-numbers, def-nat-addition]
justified_by: [lem-int-equivalence]
aliases: []
landmark: true
short: "ℤ"
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://archive.org/details/foundationsofana0000land"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Definition

On the set $\mathbb{N} \times \mathbb{N}$ of pairs of natural numbers, define

$$(a,b) \sim (c,d) \iff a + d = b + c.$$

This is an equivalence relation ([[lem-int-equivalence]]). The **integers** are
the quotient

$$\mathbb{Z} := (\mathbb{N} \times \mathbb{N}) / \sim,$$

and we write $[(a,b)]$ for the equivalence class of $(a,b)$.

## Remarks

- The pair $(a,b)$ encodes the formal difference $a - b$; the defining relation
  $a + d = b + c$ is the equation "$a - b = c - d$" restated using only
  addition, which is all $\mathbb{N}$ has.
- $\mathbb{N}$ and its arithmetic (commutativity, associativity,
  distributivity, cancellation of addition, the order) are taken as given
  background throughout this construction.
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

### `def-natural-numbers`

````markdown
---
id: def-natural-numbers
kind: definition
title: "The natural numbers $\\mathbb{N}$ (von Neumann)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inductive-set, lem-omega-smallest-inductive, def-peano-system,
       def-axiom-of-infinity, def-axiom-schema-of-separation]
aliases: [def-omega, natural-numbers]
landmark: true
short: "$\\mathbb{N}=\\omega$, smallest inductive set"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "Axiom of infinity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_infinity"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Definition

The set of **natural numbers** is the **smallest inductive set**
([[def-inductive-set]]),

$$\mathbb{N} = \omega := \bigcap\,\{\, I : I \text{ is inductive} \,\},$$

which exists and is itself inductive by [[lem-omega-smallest-inductive]] (the
Axiom of Infinity, [[def-axiom-of-infinity]], supplies one inductive set to
intersect within, and Separation, [[def-axiom-schema-of-separation]], makes the
intersection a set). On $\mathbb{N}$ we take

$$0 := \varnothing, \qquad \sigma(n) := n \cup \{n\},$$

the distinguished element and the successor function. Thus
$0 = \varnothing$, $1 = \{0\}$, $2 = \{0, 1\}$, $3 = \{0, 1, 2\}$, and in general
$n = \{0, 1, \dots, n-1\}$ is the set of its predecessors.

## Remarks

"Smallest" means $\omega \subseteq I$ for every inductive set $I$. This minimality
is exactly the **induction principle** ([[thm-induction-principle]]): a subset of
$\mathbb{N}$ that contains $0$ and is closed under $\sigma$ is itself inductive,
hence contains $\omega = \mathbb{N}$, hence equals $\mathbb{N}$.

With $0$ and $\sigma$ so defined, $(\mathbb{N}, 0, \sigma)$ satisfies the Peano
axioms ([[def-peano-system]], proved in [[thm-omega-is-peano-system]]), so it is a
**model** of the abstract natural numbers. By categoricity
([[thm-peano-categoricity]]) any other model is uniquely isomorphic to it, so the
particular set-theoretic encoding chosen here is immaterial to every arithmetic
and order property that follows: those are developed from the Peano axioms, not
from the sets themselves.
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

### `ex-x-times-psi-tends-to-zero`

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

### `lem-int-embeds-rat`

````markdown
---
id: lem-int-embeds-rat
kind: lemma
title: "The integers embed in the rationals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-rat-operations, def-rat-order, def-int-order, def-rationals, thm-int-comm-ring, lem-nat-embeds-int]
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
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Rational number — formal construction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
pipeline_run: null
---

## Statement

The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication,
and order. Composing with [[lem-nat-embeds-int]] embeds $\mathbb{N}$ in
$\mathbb{Q}$; we write $k$ for $j(k)$ throughout.

## Facts & Assumptions

**Given:** The map $j : \mathbb{Z} \to \mathbb{Q}$, $j(k) = [(k,1)]$.

[L1] Ring arithmetic in $\mathbb{Z}$ ([[thm-int-comm-ring]]).

[L2] The order on $\mathbb{Q}$ ([[def-rat-order]]), whose defining inequality is read in the order on $\mathbb{Z}$ ([[def-int-order]]).

[L3] Equality in $\mathbb{Q}$: $[(a,b)] = [(c,d)]$ iff $ad = cb$ ([[def-rationals]]).

## Proof

**Proof technique:** direct.

1.1 Injectivity: $(k,1) \sim (m,1)$ means $k \cdot 1 = m \cdot 1$, i.e. $k = m$. [L3, L1]

1.2 Addition: $j(k) + j(m) = [(k \cdot 1 + m \cdot 1,\; 1)] = j(k+m)$. [L1]

1.3 Multiplication: $j(k)\,j(m) = [(km,\, 1)] = j(km)$. [L1]

1.4 Order: denominators are $1 > 0$, so $j(k) \le j(m)$ reads $k \cdot 1 \le m \cdot 1$, i.e. $k \le m$. [L1, L2]

2.1 $j$ embeds $\mathbb{Z}$ into $\mathbb{Q}$, preserving arithmetic and order. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
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

### `lem-nat-discrete`

````markdown
---
id: lem-nat-discrete
kind: lemma
title: "Discreteness: $\\sigma(n)$ is the immediate successor"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nat-order, def-nat-addition, lem-nat-nonzero-is-successor, lem-nat-add-successor-left, lem-nat-add-cancellative, lem-nat-add-commutative, thm-omega-is-peano-system]
aliases: []
landmark: false
short: "$m<n\\iff\\sigma(m)\\le n$"
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

For all $m, n \in \mathbb{N}$: $m < n \iff \sigma(m) \le n$ ([[def-nat-order]]). Consequently there is no $k$ with $n < k < \sigma(n)$: the successor $\sigma(n)$ is the immediate successor of $n$.

## Facts & Assumptions

**Given:** The order $m \le n \iff \exists j\ (m + j = n)$, with $m < n$ meaning $m \le n$ and $m \ne n$ ([[def-nat-order]]), and addition with $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] Every nonzero natural is a successor: $j \ne 0 \Rightarrow j = \sigma(i)$ ([[lem-nat-nonzero-is-successor]]).

[L2] $\sigma(m) + i = \sigma(m + i)$ (the left successor law, [[lem-nat-add-successor-left]]) and $m + \sigma(i) = \sigma(m + i)$ (the addition recursion).

[L3] Cancellation: $x + k = y + k \Rightarrow x = y$ ([[lem-nat-add-cancellative]]).

[L4] $\sigma(x) \ne 0$ for every $x$ (Peano axiom P1) ([[thm-omega-is-peano-system]]).

[L5] Addition is commutative: $x + y = y + x$ ([[lem-nat-add-commutative]]).

## Proof

**Proof technique:** direct.

1.1 Forward: if $m < n$ then $m \le n$ and $m \ne n$, so $m + j = n$ for some $j$, with $j \ne 0$ since $j = 0$ would give $m = n$; then $j = \sigma(i)$ [L1] and $n = m + \sigma(i) = \sigma(m + i) = \sigma(m) + i$ [L2], hence $\sigma(m) \le n$. [given, L1, L2]

1.2 Backward: if $\sigma(m) \le n$ then $\sigma(m) + i = n$, so $n = \sigma(m) + i = \sigma(m + i) = m + \sigma(i)$ [L2], hence $m \le n$; and $m \ne n$, since $m = n$ would give $m + \sigma(i) = m = m + 0$, so $\sigma(i) + m = 0 + m$ by [L5] and $\sigma(i) = 0$ by [L3], contradicting [L4]; therefore $m < n$. [given, L2, L3, L4, L5]

2.1 No $k$ satisfies $n < k < \sigma(n)$: if $n < k$ then $\sigma(n) \le k$ by the equivalence, so $k \ge \sigma(n)$, contradicting $k < \sigma(n)$; thus $\sigma(n)$ is the immediate successor. [step 1.1, step 1.2] ∎
````

### `lem-nat-embeds-int`

````markdown
---
id: lem-nat-embeds-int
kind: lemma
title: "The naturals embed in the integers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-integers, def-int-operations, def-int-order, def-natural-numbers, def-nat-order, lem-nat-add-identity, lem-nat-mult-identity, thm-nat-linear-order]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Statement

The map $\iota(n) = [(n,0)]$ is injective and preserves addition,
multiplication, and order. Its image is exactly the set of nonnegative
integers, so every $x \ge 0$ in $\mathbb{Z}$ is $\iota(k)$ for a unique
natural $k$.

## Facts & Assumptions

**Given:** The map $\iota : \mathbb{N} \to \mathbb{Z}$, $\iota(n) = [(n,0)]$.

[A1] Arithmetic identities in $\mathbb{N}$: $x + 0 = x$, $0 + x = x$, $x \cdot 0 = 0$, $0 \cdot x = 0$, $x \cdot 1 = x$.

[A2] The order on $\mathbb{N}$, and: $x \le y$ iff $y = x + k$ for some $k$.

## Proof

**Proof technique:** direct.

1.1 Injectivity: $[(m,0)] = [(n,0)]$ means $m + 0 = 0 + n$, i.e. $m = n$. [A1]

1.2 Addition: $\iota(m) + \iota(n) = [(m+n,\, 0+0)] = \iota(m+n)$. [A1]

1.3 Multiplication: $\iota(m)\,\iota(n) = [(mn + 0 \cdot 0,\; m \cdot 0 + 0 \cdot n)] = \iota(mn)$. [A1]

1.4 Order: $\iota(m) \le \iota(n)$ reads $m + 0 \le 0 + n$, i.e. $m \le n$. [A1, A2]

1.5 Image: if $0 \le [(a,b)]$ then $b \le a$, so $a = b + k$ and $(a,b) \sim (k,0)$, giving $[(a,b)] = \iota(k)$; conversely $0 \le \iota(k)$ for every $k$. [A2, algebra]

2.1 $\iota$ embeds $\mathbb{N}$ into $\mathbb{Z}$, preserving arithmetic and order, with image the nonnegative integers. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
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

### `thm-infimum-property`

````markdown
---
id: thm-infimum-property
kind: theorem
title: "Every nonempty set bounded below has an infimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-reflection, def-infimum, lem-sup-unique, def-complete-ordered-field,
       lem-of-add-order, lem-of-inverse-unique, def-field]
justified_by: []
aliases: []
landmark: true
short: "greatest-lower-bound property"
proof_strategy: direct
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "MIT 18.100A, Complete Lecture Notes"
      url: "https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec_full.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below. Then $S$ has a
greatest lower bound in $\mathbb{R}$ ([[def-infimum]]), and it is given by

$$\inf S = -\sup(-S), \qquad \text{where } -S = \{-s : s \in S\}.$$

In particular the complete ordered field $\mathbb{R}$ has the
greatest-lower-bound property, which is therefore not an extra axiom: it is a
consequence of the least-upper-bound property.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded below, and its reflection $-S = \{-s : s \in S\}$.

[L1] The least-upper-bound property of $\mathbb{R}$: every nonempty subset of $\mathbb{R}$ that is bounded above has a least upper bound in $\mathbb{R}$, namely an upper bound that is $\le$ every upper bound ([[def-complete-ordered-field]]).

[L2] Reflection: $-(-S) = S$; $S$ is nonempty exactly when $-S$ is; $u$ is an upper bound of a set $X$ exactly when $-u$ is a lower bound of $-X$; and $\ell$ is a lower bound of $X$ exactly when $-\ell$ is an upper bound of $-X$ ([[lem-reflection]]).

[L3] Greatest lower bound (infimum): $\ell$ is one for $S$ when $\ell$ is a lower bound of $S$ and $\ell' \le \ell$ for every lower bound $\ell'$ of $S$ ([[def-infimum]]).

[L4] A least upper bound and a greatest lower bound are unique when they exist, so the notations $\sup$ and $\inf$ are unambiguous ([[lem-sup-unique]]).

[L5] Negation reverses the order, elementwise: $-(-a) = a$, because $(-a) + a = 0$ and additive inverses are unique ([[def-field]], [[lem-of-inverse-unique]]); and $a \le b$ if and only if $-b \le -a$, because translation invariance applied with the constant $-a - b$ turns $a < b$ into $-b < -a$ and, applied with the constant $a + b$, turns $-b < -a$ back into $a < b$, while $a = b$ holds exactly when $-a = -b$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** direct.

1.1 By hypothesis $S \ne \emptyset$ and $S$ is bounded below; fix a lower bound $\ell_0$ of $S$, so $\ell_0 \le s$ for every $s \in S$. [given, choose]

1.2 Let $\ell'$ be an arbitrary lower bound of $S$; then $-\ell'$ is an upper bound of $-S$. [assume-hyp, L2]

2.1 Since $S$ is nonempty, so is $-S$, and since $\ell_0$ is a lower bound of $S$, its negative $-\ell_0$ is an upper bound of $-S$; hence $-S$ is a nonempty subset of $\mathbb{R}$ that is bounded above. [step 1.1, L2]

3.1 By the least-upper-bound property, $-S$ has a least upper bound in $\mathbb{R}$; write $u := \sup(-S)$, which is well defined by uniqueness. [step 2.1, L1, L4]

4.1 Define $\ell := -u$. [step 3.1, construct]

4.2 The element $u$ is the least of the upper bounds of $-S$ and $-\ell'$ is one of them, hence $u \le -\ell'$. [step 1.2, step 3.1, L1]

5.1 Apply the reflection fact to the set $-S$: since $u$ is an upper bound of $-S$, its negative $-u$ is a lower bound of $-(-S)$, and $-(-S) = S$; so $\ell = -u$ is a lower bound of $S$. [step 4.1, step 3.1, L2]

5.2 Negating the inequality $u \le -\ell'$ reverses it, giving $-(-\ell') \le -u$, that is $\ell' \le \ell$. [step 4.2, step 4.1, L5]

6.1 Thus $\ell$ is a lower bound of $S$ satisfying $\ell' \le \ell$ for every lower bound $\ell'$ of $S$, so $\ell$ is a greatest lower bound of $S$; it is the only one, so $\inf S$ exists and $\inf S = \ell = -\sup(-S)$. [step 5.1, step 5.2, L3, L4] ∎

## Remarks

- The theorem is not a restatement of the least-upper-bound property: it is proved from it, by transporting the problem across the order-reversing bijection $x \mapsto -x$ of [[lem-reflection]]. Nothing about $\mathbb{R}$ beyond the complete-ordered-field axioms is used.
- The hypotheses are both needed. The empty set is bounded below by every real and has no greatest lower bound, and a set unbounded below has no lower bound at all; the dual failures for suprema are recorded in [[fs-every-set-has-sup]].
- The identity $\inf S = -\sup(-S)$ is the standard device for turning any statement about suprema into its dual; [[lem-inf-epsilon]] is the first application on this page.
````

### `thm-int-comm-ring`

````markdown
---
id: thm-int-comm-ring
kind: theorem
title: "The integers form a commutative ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integers, def-int-operations, lem-int-add-well-defined,
       lem-int-mul-well-defined, lem-nat-add-commutative,
       lem-nat-add-associative, lem-nat-add-identity,
       lem-nat-mult-commutative, lem-nat-mult-associative,
       lem-nat-mult-distributive, lem-nat-mult-identity]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://archive.org/details/foundationsofana0000land"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Statement

$(\mathbb{Z}, +, \cdot, 0, 1)$ with the operations of [[def-int-operations]] is
a commutative ring with multiplicative identity, in which every element has the
additive inverse $-[(a,b)] = [(b,a)]$.

## Facts & Assumptions

**Given:** $\mathbb{Z}$ with the operations of [[def-int-operations]].

[L1] Addition on $\mathbb{N}$ is commutative and associative, with zero as a two-sided identity ([[lem-nat-add-commutative]], [[lem-nat-add-associative]], [[lem-nat-add-identity]]).

[L2] Multiplication on $\mathbb{N}$ is commutative and associative, distributes over addition, and has the usual zero and identity laws ([[lem-nat-mult-commutative]], [[lem-nat-mult-associative]], [[lem-nat-mult-distributive]], [[lem-nat-mult-identity]]).

[L3] The integer operations are independent of representatives ([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], each axiom may be verified on arbitrary fixed representatives $(a,b), (c,d), (e,f)$. [L3, suffices]

1.2 Associativity of $+$: $((a,b)+(c,d))+(e,f)$ and $(a,b)+((c,d)+(e,f))$ both equal $(a+c+e,\; b+d+f)$. [L1]

1.3 Commutativity of $+$: $(a+c,\, b+d) = (c+a,\, d+b)$. [L1]

1.4 Additive identity: $(a,b) + (0,0) = (a+0,\, b+0) = (a,b)$. [L1]

1.5 Additive inverses: $(a,b) + (b,a) = (a+b,\, b+a) \sim (0,0)$, since $(a+b) + 0 = (b+a) + 0$. [L1]

1.6 Commutativity of $\cdot$: swapping $(a,b) \leftrightarrow (c,d)$ sends $(ac+bd,\, ad+bc)$ to $(ca+db,\, cb+da)$, the same pair. [L1, L2]

1.7 Multiplicative identity: $(a,b) \cdot (1,0) = (a \cdot 1 + b \cdot 0,\; a \cdot 0 + b \cdot 1) = (a,b)$. [L1, L2]

1.8 Associativity of $\cdot$: expanding, both $((a,b)(c,d))(e,f)$ and $(a,b)((c,d)(e,f))$ equal $(ace+adf+bcf+bde,\; acf+ade+bce+bdf)$. [L1, L2]

1.9 Distributivity: $(a,b) \cdot ((c,d)+(e,f)) = (a(c+e)+b(d+f),\; a(d+f)+b(c+e)) = (ac+bd,\, ad+bc) + (ae+bf,\, af+be) = (a,b)(c,d) + (a,b)(e,f)$. [L1, L2]

2.1 Steps 1.2–1.9 verify all axioms: $(\mathbb{Z}, +, \cdot, 0, 1)$ is a commutative ring with identity and additive inverses. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7, step 1.8, step 1.9] ∎
````

### `thm-int-ordered-ring`

````markdown
---
id: thm-int-ordered-ring
kind: theorem
title: "The integers form a totally ordered ring"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integers, def-int-operations, def-int-order, def-nat-order,
       thm-int-comm-ring, lem-nat-add-commutative,
       lem-nat-add-associative, thm-nat-linear-order,
       lem-nat-order-add-compatible, lem-nat-mult-commutative,
       lem-nat-mult-associative, lem-nat-mult-distributive,
       lem-nat-mult-identity, lem-nat-order-mult-compatible]
aliases: []
landmark: true
short: "ℤ ordered ring"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Statement

The relation of [[def-int-order]] is well defined and is a total order on
$\mathbb{Z}$; it is compatible with addition ($x \le y$ implies
$x + z \le y + z$) and positives are closed under multiplication
($0 < x$ and $0 < y$ imply $0 < xy$). Thus $\mathbb{Z}$ is a totally
ordered commutative ring.

## Facts & Assumptions

**Given:** Integers $x = [(a,b)]$, $y = [(c,d)]$, $z = [(e,f)]$ with the operations of [[def-int-operations]].

[L1] Addition on $\mathbb{N}$ is commutative and associative ([[lem-nat-add-commutative]], [[lem-nat-add-associative]]).

[L2] The order on $\mathbb{N}$ is total, antisymmetric, and transitive ([[thm-nat-linear-order]]).

[L3] Natural order is translation-invariant: $x\le y\iff x+z\le y+z$ ([[lem-nat-order-add-compatible]]).

[L4] By the definition of natural order, $x\le y$ exactly when $y=x+k$ for some natural $k$; if $x<y$, such a gap is nonzero ([[def-nat-order]]).

[L5] Natural multiplication is commutative and associative, distributes over addition, and has the usual zero and identity laws; multiplication by a nonzero natural preserves strict order ([[lem-nat-mult-commutative]], [[lem-nat-mult-associative]], [[lem-nat-mult-distributive]], [[lem-nat-mult-identity]], [[lem-nat-order-mult-compatible]]).

[L6] The integer operations make $\mathbb{Z}$ a commutative ring with multiplicative identity ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(a,b) \sim (a',b')$ and $(c,d) \sim (c',d')$, i.e. $a + b' = b + a'$ and $c + d' = d + c'$. [given]

1.2 Suppose $a + d \le b + c$. [given]

1.3 Totality: in $\mathbb{N}$ either $a + d \le b + c$ or $b + c \le a + d$, so $x \le y$ or $y \le x$. [L2]

1.4 Antisymmetry: $x \le y$ and $y \le x$ give $a + d \le b + c$ and $b + c \le a + d$, hence $a + d = b + c$, which is $x = y$ as classes. [L2]

1.5 Transitivity: from $a + d \le b + c$ and $c + f \le d + e$, adding gives $(a+d)+(c+f) \le (b+c)+(d+e)$; regrouping, $(a+f)+(c+d) \le (b+e)+(c+d)$; cancelling, $a + f \le b + e$, i.e. $x \le z$. [L1, L2, L3]

1.6 Compatibility with addition: $x + z \le y + z$ reads $(a+e)+(d+f) \le (b+f)+(c+e)$, which regroups to $(a+d) + (e+f) \le (b+c) + (e+f)$, equivalent to $a + d \le b + c$, i.e. $x \le y$. [L1, L3]

1.7 Suppose $0 < x$ and $0 < y$, i.e. $b < a$ and $d < c$. [given]

2.1 Adding $(a'+d')$: $(a+d) + (a'+d') \le (b+c) + (a'+d')$. [step 1.2, L3]

2.2 Regrouping with the equations of step 1.1: $(b+c) + (a'+d') = (b+a') + (c+d') = (a+b') + (d+c') = (a+d) + (b'+c')$. [step 1.1, L1]

2.3 Write $a = b + k$ and $c = d + m$ with nonzero naturals $k,m$. [step 1.7, L4]

3.1 So $(a+d) + (a'+d') \le (a+d) + (b'+c')$; cancelling $(a+d)$ gives $a'+d'\le b'+c'$. Applying the same argument with primed and unprimed representatives exchanged proves the converse implication, so the relation is independent of representatives. [step 1.1, step 2.1, step 2.2, L3]

3.2 Expanding both components of $xy = [(ac+bd,\, ad+bc)]$: $ac + bd = (b+k)(d+m) + bd = (bd + bm + kd + bd) + km$ and $ad + bc = (b+k)d + b(d+m) = bd + kd + bd + bm$, so $ac + bd = (ad + bc) + km$. [step 2.3, L1, L5]

4.1 Since $k,m$ are nonzero, $0<k$ and $0<m$ by [L4]. Hence [L5] gives $0=0\cdot m<km$, and step 3.2 yields $ad+bc<ac+bd$, which is $0<xy$. [step 2.3, step 3.2, L2, L4, L5]

5.1 The order is well defined, total, compatible with addition, and positives are closed under multiplication; together with [L6], this makes $\mathbb{Z}$ a totally ordered commutative ring. [step 3.1, step 1.3, step 1.4, step 1.5, step 1.6, step 4.1, L6] ∎
````

