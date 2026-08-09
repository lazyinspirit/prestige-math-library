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

- critical risk (13): 20 declared dependencies; 21 cited facts; 9 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language
- top-20 dependency-cone consumer (20 generated manifest edges)

## Target item — `ex-distance-to-the-integers-is-1-lipschitz`

Normalized current SHA-256: `3cd6e91ca15e1df7556c7984be6ffb9c987a890e0225291c73955dea8422179a`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-distance-to-the-integers-is-1-lipschitz
kind: example
title: "The distance $\\psi(x) = d(x, \\mathbb{Z})$ from a real number to the integers is $1$-Lipschitz, hence uniformly continuous, takes values in $[0,1/2]$, and vanishes exactly on $\\mathbb{Z}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-metric-bounded-diameter, lem-distance-to-set-is-lipschitz, lem-real-line-is-a-metric-space, lem-real-and-metric-notions-agree, thm-metric-regularity-hierarchy, def-lipschitz-holder-contraction, def-uniform-continuity-real, def-continuity-real, lem-integer-part, def-integers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, def-metric-space, def-infimum, def-max-min, lem-finite-set-has-max, def-interval, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [ex-psi-is-1-lipschitz]
landmark: true
short: "$\\psi = d(\\cdot,\\mathbb{Z})$ is $1$-Lipschitz"
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
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
    - title: "Triangle wave (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Triangle_wave"
    - title: "J. Heinonen, Lectures on Lipschitz Analysis"
      url: "https://www.math.uchicago.edu/~shmuel/QuantCourse%20/Metric%20Space/Heinonen%2C%20Lecs%20on%20Lip%20Analysis.pdf"
pipeline_run: null
---

## Example

Take $\mathbb{R}$ with its usual metric $d(x,y) = |x-y|$
([[lem-real-line-is-a-metric-space]]), identify $\mathbb{Z}$ with its canonical
copy inside $\mathbb{R}$ ([[def-integers]], [[lem-nat-embeds-int]],
[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), and let

$$\psi(x) \;:=\; d(x, \mathbb{Z}) \;=\; \inf\{\, |x - n| \ : \ n \in \mathbb{Z} \,\}$$

be the distance from $x$ to the nonempty set $\mathbb{Z}$
([[def-metric-bounded-diameter]]). Then:

1. **$\psi$ is $1$-Lipschitz on $\mathbb{R}$**: $|\psi(x) - \psi(y)| \le |x-y|$
   for all real $x, y$. Consequently $\psi$ is uniformly continuous on
   $\mathbb{R}$ ([[def-uniform-continuity-real]]) and continuous on $\mathbb{R}$
   ([[def-continuity-real]]).
2. **The infimum is attained, and computed.** Writing $m := \lfloor x \rfloor$
   for the integer part of $x$ ([[lem-integer-part]]) and $t := x - m$, so that
   $0 \le t < 1$,
   $$\psi(x) \;=\; \min\{\, t,\ 1-t \,\} \;=\; \min\bigl\{\, |x-m|,\ |x-(m+1)| \,\bigr\} ,$$
   so $\psi(x) = |x - n|$ for $n = m$ or $n = m+1$.
3. **Range.** $0 \le \psi(x) \le 1/2$ for every real $x$
   ([[def-interval]]).
4. **Zero set.** $\psi(x) = 0$ if and only if $x \in \mathbb{Z}$.

**Why this example is here.** It is the standard uniformly continuous function
of this track that is not defined by a formula in the field operations, and it
is obtained from the metric machinery rather than rebuilt: claim 1 is
[[lem-distance-to-set-is-lipschitz]] applied to $A := \mathbb{Z}$ in the metric
space $\mathbb{R}$, transported to a statement about a real function by
[[lem-real-and-metric-notions-agree]], clause 3. Only claims 2 to 4, which
compute the value, need an argument of their own.

**The same function is computed elsewhere, and nothing here depends on that.**
[[ex-distance-to-the-integers]] introduces $\psi$ on the companion page of
[[def-function-limit]] and proves the same computation together with
$1$-periodicity and the value at half-integers. That item lives on an examples
page, which is a leaf of the dependency graph, so no item may rest on it; the
verification below is therefore self-contained, and the duplication is
deliberate rather than an oversight.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the metric $d(x,y) = |x-y|$; the canonical copy of $\mathbb{Z}$ inside $\mathbb{R}$; a real $x$, the integer $m := \lfloor x \rfloor$ and the real $t := x - m$; and $\psi(x) := d(x,\mathbb{Z})$.

[L1] Distance to a nonempty set: for nonempty $A \subseteq X$ in a metric space, $d(x,A) := \inf\{\, d(x,a) : a \in A \,\}$, the infimum existing because the set of distances is nonempty and bounded below by $0$ ([[def-metric-bounded-diameter]], [[def-infimum]], [[def-metric-space]]).

[L2] $|d(x,A) - d(y,A)| \le d(x,y)$: the distance to a fixed nonempty set is $1$-Lipschitz as a map of metric spaces ([[lem-distance-to-set-is-lipschitz]]).

[L3] Dictionary: for $A \subseteq \mathbb{R}$ with $d(x,y) = |x-y|$, a map is Lipschitz with constant $L$ as a map of metric spaces exactly when $|f(x)-f(y)| \le L|x-y|$ for all $x,y$; and a Lipschitz real function is uniformly continuous, hence continuous ([[lem-real-and-metric-notions-agree]], clauses 1, 3 and 6, [[thm-metric-regularity-hierarchy]], [[def-lipschitz-holder-contraction]], [[def-uniform-continuity-real]], [[def-continuity-real]]).

[L4] $\mathbb{R}$ with $d(x,y) = |x-y|$ is a metric space ([[lem-real-line-is-a-metric-space]]), and $\mathbb{Z}$ sits inside $\mathbb{R}$ as a totally ordered subring containing $0$ and $1$ and closed under $n \mapsto n \pm 1$, with no integer strictly between $n$ and $n+1$ ([[def-integers]], [[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]).

[L5] Integer part: for every real $x$ there is exactly one integer $m$ with $m \le x < m+1$ ([[lem-integer-part]]).

[L6] Infimum and minimum: a lower bound of a set that belongs to the set is its infimum and its minimum ([[def-infimum]], [[def-max-min]]); and the minimum of a two-element set of reals exists and is one of the two ([[lem-finite-set-has-max]]).

[L7] Absolute value and order: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$; the order is total; $1/2 > 0$ and $1 - 1/2 = 1/2$ ([[lem-of-abs-value]], [[def-ordered-field]], [[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 $\mathbb{Z}$ is a nonempty subset of the metric space $\mathbb{R}$, since $0 \in \mathbb{Z}$, so $\psi(x) = d(x,\mathbb{Z})$ is defined for every real $x$ by [L1], and $\psi(x) \ge 0$. [L1, L4, L7]

1.2 By [L5] the integer $m = \lfloor x \rfloor$ satisfies $m \le x < m+1$, so $t = x - m$ satisfies $0 \le t < 1$, and $(m+1) - x = 1 - t$ satisfies $0 < 1 - t \le 1$. [L5, L7]

2.1 **Claim 1.** By [L2], $|\psi(x) - \psi(y)| = |d(x,\mathbb{Z}) - d(y,\mathbb{Z})| \le d(x,y) = |x-y|$ for all real $x,y$; by [L3] this says exactly that $\psi$ is Lipschitz with constant $1$ as a real function on $\mathbb{R}$, hence uniformly continuous on $\mathbb{R}$ and continuous on $\mathbb{R}$. [step 1.1, L2, L3]

2.2 **Every distance from $x$ to an integer is at least $\min\{t, 1-t\}$.** Let $n \in \mathbb{Z}$. By [L4] and totality either $n \le m$ or $m < n$, and in the second case $m+1 \le n$. If $n \le m$ then $x - n \ge x - m = t \ge 0$, so $|x-n| = x-n \ge t$. If $m+1 \le n$ then $n - x \ge (m+1) - x = 1-t > 0$, so $|x-n| = n-x \ge 1-t$. Either way $|x-n| \ge \min\{t, 1-t\}$. [step 1.2, L4, L6, L7]

2.3 **Both candidate values occur.** Since $t \ge 0$ we have $t = |x-m|$, and since $1-t > 0$ we have $1-t = |x-(m+1)|$, with $m$ and $m+1$ in $\mathbb{Z}$. [step 1.2, L4, L7]

3.1 **Claim 2.** By steps 2.2 and 2.3 the real $\min\{t,1-t\}$ is a lower bound of $\{\, |x-n| : n \in \mathbb{Z} \,\}$ belonging to that set, so by [L6] it is the infimum and the minimum: $\psi(x) = \min\{t,1-t\} = \min\{|x-m|, |x-(m+1)|\}$, attained at $n = m$ or $n = m+1$. [step 2.2, step 2.3, L1, L6]

4.1 **Claim 3.** $\psi(x) \ge 0$ since $t \ge 0$ and $1-t > 0$. And $\psi(x) \le 1/2$: if $t \le 1/2$ then $\psi(x) \le t \le 1/2$, while if $t > 1/2$ then $1-t < 1-1/2 = 1/2$ and $\psi(x) \le 1-t < 1/2$. So $0 \le \psi(x) \le 1/2$. [step 1.2, step 3.1, L7]

4.2 **Claim 4.** If $\psi(x) = 0$ then $\min\{t,1-t\} = 0$ by step 3.1; since $1-t > 0$ this forces $t = 0$, that is $x = m \in \mathbb{Z}$. Conversely if $x \in \mathbb{Z}$ then $|x-x| = 0$ is a member of the set of distances and $0$ is a lower bound of it by step 1.1, so $\psi(x) = 0$ by [L6]. [step 1.1, step 1.2, step 3.1, L6, L7]

5.1 Claims 1 to 4 are verified: $\psi$ is $1$-Lipschitz and therefore uniformly continuous and continuous on $\mathbb{R}$, its value at $x$ is $\min\{t, 1-t\}$ and is attained at a nearest integer, its values lie in $[0,1/2]$, and it vanishes exactly on $\mathbb{Z}$. [step 2.1, step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **No completeness of $\mathbb{R}$ is spent on the infimum here.** [[def-metric-bounded-diameter]] produces $d(x,\mathbb{Z})$ from the greatest-lower-bound property, but step 3.1 does not need that route: it exhibits an element of the set of distances that is also a lower bound, which is the definition of the infimum read directly ([[def-infimum]]). Completeness does enter once, through [[lem-integer-part]], whose existence half is the Archimedean property.

- **Why "nearest integer" is a theorem and not a phrase.** The words presuppose that a nearest integer exists, and that is exactly what steps 2.2 and 2.3 establish. When $t = 1/2$ there are two nearest integers, $m$ and $m+1$, and the formula $\min\{t,1-t\}$ is indifferent to which is taken, so nothing is selected.

- **What this contributes to the hierarchy.** $\psi$ is Lipschitz, hence uniformly continuous ([[lem-real-and-metric-notions-agree]], clause 6), and it is bounded and not monotone; so it is a uniformly continuous function that is neither a polynomial nor eventually constant, and it is the natural domain-wide example to set beside [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]], where uniform continuity fails.
````

## Wave 8 provenance row for the target

```json
{
  "id": "ex-distance-to-the-integers-is-1-lipschitz",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.math.uchicago.edu/~shmuel/QuantCourse%20/Metric%20Space/Heinonen%2C%20Lecs%20on%20Lip%20Analysis.pdf"
  ],
  "rationale": "Heinonen states that distance to any set is 1-Lipschitz. The local example specializes to the integers and adds the exact range [0,1/2] and zero set.",
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
      "source": "def-metric-bounded-diameter",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A, B \\subseteq X$.",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-infimum",
      "source_section": "Definition",
      "quote": "Then $\\ell$ is a **greatest lower bound**, or **infimum**, of $S$ if both of the following hold: - $\\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\\ell \\le s$ for every $s \\in S$;",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-metric-space",
      "source_section": "Definition",
      "quote": "metric",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-distance-to-set-is-lipschitz",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \\subseteq X$ be nonempty and let $x, y \\in X$. Then $$|d(x,A) - d(y,A)| \\le d(x,y),$$ with $d(\\cdot,A)$ the distance to a nonempty set ([[def-metric-bounded-diameter]]). Thus the real-valued function $u \\mapsto d(u,A)$ changes by at most $d(u,v)$ between $u$ and $v$: it is **$1$-Lipschitz**.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-real-and-metric-notions-agree",
      "source_section": "Statement",
      "quote": "1. **Continuity.** For every $c \\in A$: $f$ is continuous at $c$ in the sense of [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and only if it is continuous as a map of metric spaces. 2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of [[def-uniform-continuity-real]] if and only if it is uniformly continuous as a map of metric spaces ([[def-metric-uniform-continuity]]). 3. **Lipschitz.** For a real $L \\ge 0$: $f$ is Lipschitz with constant $L$ as a map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if $$|f(x) - f(x')| \\le L\\,|x - x'| \\qquad \\text{for all } x, x' \\in A .$$ This displayed condition is what \"$f$ is Lipschitz with constant $L$\" means for a real function on $A$ in this library; no second definition is made. 4. **Hölder.** For a rational $\\alpha$ with $0 < \\alpha \\le 1$ and a real $C \\ge 0$: $f$ is $\\alpha$-Hölder with constant $C$ as a map of metric spaces if and only if $$|f(x) - f(x')| \\le C\\,|x - x'|^{\\alpha} \\qquad \\text{for all } x, x' \\in A ,$$ the power being the rational power of a nonnegative base ([[def-rational-power]]). 5. **Compactness, in both senses used in this library.** For $K \\subseteq \\mathbb{R}$ with the subspace metric $d_K$: - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every family of open subsets of $\\mathbb{R}$ covering $K$ has a finite subfamily covering $K$ — if and only if the metric space $(K, d_K)$ is compact ([[def-metric-compactness]]); - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and only if $(K, d_K)$ is sequentially compact as a metric space ([[def-metric-compactness-variants]]).",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-metric-regularity-hierarchy",
      "source_section": "Statement",
      "quote": "Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let $f : X \\to Y$ be a function, with the three regularity conditions as in [[def-lipschitz-holder-contraction]]. Then: 1. If $f$ is a contraction, it is Lipschitz. 2. If $f$ is Lipschitz, it is uniformly continuous ([[def-metric-uniform-continuity]]). 3. If $f$ is uniformly continuous, it is continuous ([[def-metric-continuity]]). 4. If $f$ is $\\alpha$-Hölder for some rational $\\alpha$ with $0 < \\alpha \\le 1$, it is uniformly continuous. 5. Suppose $X$ is nonempty and bounded, and put $R := \\operatorname{diam}(X) + 1$, a real with $R > 0$ ([[def-metric-bounded-diameter]]). If $f$ is Lipschitz with constant $L$, then for **every** rational $\\alpha$ with $0 < \\alpha \\le 1$ the map $f$ is $\\alpha$-Hölder with constant $L\\,R^{\\,1-\\alpha}$. **Claim 5 carries its boundedness hypothesis for a reason, and no unconditional \"Lipschitz implies Hölder\" is asserted anywhere here.** On an unbounded space the implication is false; the witness and its verification are in the first remark below. **Strictness is not claimed.** The five implications are asserted and nothing more; that none of them reverses is witnessed elsewhere, and those witnesses are not prerequisites of this theorem. See the second remark.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-lipschitz-holder-contraction",
      "source_section": "Definition",
      "quote": "- $f$ is **Lipschitz** with **constant** $L$, where $L \\in \\mathbb{R}$ and $L \\ge 0$, if $$d_Y\\big(f(x), f(x')\\big) \\;\\le\\; L \\, d_X(x,x') \\qquad \\text{for all } x, x' \\in X .$$ $f$ is *Lipschitz* if it is Lipschitz with some such constant. - Let $\\alpha \\in \\mathbb{Q}$ with $0 < \\alpha \\le 1$ ([[def-rat-order]]). $f$ is **$\\alpha$-Hölder** with **constant** $C$, where $C \\in \\mathbb{R}$ and $C \\ge 0$, if $$d_Y\\big(f(x), f(x')\\big) \\;\\le\\; C \\, d_X(x,x')^{\\alpha} \\qquad \\text{for all } x, x' \\in X ,$$ the power being the rational power of a nonnegative base ([[def-rational-power]]). $f$ is *$\\alpha$-Hölder* if it is so with some such constant, and *Hölder* if it is $\\alpha$-Hölder for some rational $\\alpha \\in (0,1]$. - $f$ is a **contraction** with constant $q$ if it is Lipschitz with constant $q$ and $0 \\le q < 1$. The number $q$ is then called a **contraction constant** for $f$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-uniform-continuity-real",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and let $f : A \\to \\mathbb{R}$. Then $f$ is **uniformly continuous on $A$** when",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-real-line-is-a-metric-space",
      "source_section": "Statement",
      "quote": "metric",
      "uses": [
        "1.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "def-integers",
      "source_section": "Definition",
      "quote": "$$(a,b) \\sim (c,d) \\iff a + d = b + c.$$ This is an equivalence relation ([[lem-int-equivalence]]). The **integers** are the quotient $$\\mathbb{Z} := (\\mathbb{N} \\times \\mathbb{N}) / \\sim,$$",
      "uses": [
        "1.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-nat-embeds-int",
      "source_section": "Statement",
      "quote": "Its image is exactly the set of nonnegative integers, so every $x \\ge 0$ in $\\mathbb{Z}$ is $\\iota(k)$ for a unique",
      "uses": [
        "1.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-int-embeds-rat",
      "source_section": "Statement",
      "quote": "The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication, and order. Composing with [[lem-nat-embeds-int]] embeds $\\mathbb{N}$ in $\\mathbb{Q}$; we write $k$ for $j(k)$ throughout.",
      "uses": [
        "1.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered fields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and rational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with $|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two reals lies a rational.",
      "uses": [
        "1.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-integer-part",
      "source_section": "Statement",
      "quote": "Identify $\\mathbb{Z}$ with its canonical copy inside $\\mathbb{R}$, along the embeddings $\\mathbb{N} \\to \\mathbb{Z} \\to \\mathbb{Q} \\to \\mathbb{R}$ ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[def-integers]]). Then for every real $x$ there is **exactly one** integer $m$ with",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-infimum",
      "source_section": "Definition",
      "quote": "**greatest lower bound**, or **infimum**",
      "uses": [
        "2.2",
        "3.1",
        "4.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$ for every $s \\in S$.",
      "uses": [
        "2.2",
        "3.1",
        "4.2"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the set $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]).",
      "uses": [
        "2.2",
        "3.1",
        "4.2"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "2.3",
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L7",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "2.3",
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L7",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]], [[def-ordered-field]]) with its order ([[def-real-order]]).",
      "uses": [
        "1.1",
        "1.2",
        "2.2",
        "2.3",
        "4.1",
        "4.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$\\mathbb{Z}$ is a nonempty subset of the metric space $\\mathbb{R}$, since $0 \\in \\mathbb{Z}$, so $\\psi(x) = d(x,\\mathbb{Z})$ is defined for every real $x$ by [L1], and $\\psi(x) \\ge 0$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L4",
        "L7"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "By [L5] the integer $m = \\lfloor x \\rfloor$ satisfies $m \\le x < m+1$, so $t = x - m$ satisfies $0 \\le t < 1$, and $(m+1) - x = 1 - t$ satisfies $0 < 1 - t \\le 1$.",
      "step": "1.2",
      "inputs": [
        "L5",
        "L7"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "**Claim 1.** By [L2], $|\\psi(x) - \\psi(y)| = |d(x,\\mathbb{Z}) - d(y,\\mathbb{Z})| \\le d(x,y) = |x-y|$ for all real $x,y$; by [L3] this says exactly that $\\psi$ is Lipschitz with constant $1$ as a real function on $\\mathbb{R}$, hence uniformly continuous on $\\ma",
      "step": "2.1",
      "inputs": [
        "L2",
        "L3",
        "1.1"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "**Every distance from $x$ to an integer is at least $\\min\\{t, 1-t\\}$.** Let $n \\in \\mathbb{Z}$. By [L4] and totality either $n \\le m$ or $m < n$, and in the second case $m+1 \\le n$. If $n \\le m$ then $x - n \\ge x - m = t \\ge 0$, so $|x-n| = x-n \\ge t$. If $m+1",
      "step": "2.2",
      "inputs": [
        "L4",
        "1.2",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-2-3",
      "claim": "**Both candidate values occur.** Since $t \\ge 0$ we have $t = |x-m|$, and since $1-t > 0$ we have $1-t = |x-(m+1)|$, with $m$ and $m+1$ in $\\mathbb{Z}$.",
      "step": "2.3",
      "inputs": [
        "1.2",
        "L4",
        "L7"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "**Claim 2.** By steps 2.2 and 2.3 the real $\\min\\{t,1-t\\}$ is a lower bound of $\\{\\, |x-n| : n \\in \\mathbb{Z} \\,\\}$ belonging to that set, so by [L6] it is the infimum and the minimum: $\\psi(x) = \\min\\{t,1-t\\} = \\min\\{|x-m|, |x-(m+1)|\\}$, attained at $n = m$ o",
      "step": "3.1",
      "inputs": [
        "2.2",
        "2.3",
        "L6",
        "L1"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "**Claim 3.** $\\psi(x) \\ge 0$ since $t \\ge 0$ and $1-t > 0$. And $\\psi(x) \\le 1/2$: if $t \\le 1/2$ then $\\psi(x) \\le t \\le 1/2$, while if $t > 1/2$ then $1-t < 1-1/2 = 1/2$ and $\\psi(x) \\le 1-t < 1/2$. So $0 \\le \\psi(x) \\le 1/2$.",
      "step": "4.1",
      "inputs": [
        "1.2",
        "3.1",
        "L7"
      ]
    },
    {
      "id": "step-4-2",
      "claim": "**Claim 4.** If $\\psi(x) = 0$ then $\\min\\{t,1-t\\} = 0$ by step 3.1; since $1-t > 0$ this forces $t = 0$, that is $x = m \\in \\mathbb{Z}$. Conversely if $x \\in \\mathbb{Z}$ then $|x-x| = 0$ is a member of the set of distances and $0$ is a lower bound of it by ste",
      "step": "4.2",
      "inputs": [
        "3.1",
        "1.1",
        "L6",
        "1.2",
        "L7"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Claims 1 to 4 are verified: $\\psi$ is $1$-Lipschitz and therefore uniformly continuous and continuous on $\\mathbb{R}$, its value at $x$ is $\\min\\{t, 1-t\\}$ and is attained at a nearest integer, its values lie in $[0,1/2]$, and it vanishes exactly on $\\mathbb{Z",
      "step": "5.1",
      "inputs": [
        "2.1",
        "3.1",
        "4.1",
        "4.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Step 1.1 proves the reference set Z is nonempty because 0∈Z before defining distance to it."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.1 and 4.2 prove ψ(x)=0 exactly at integers."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.2–3.1 use the adjacent integers m and m+1 and the unit cell 0≤t<1."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 2.1 includes x=y with both sides zero; step 4.2 handles zero distance."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 1.2 and 4.1 treat t=0 and the half-cell boundary t=1/2; the upper unit endpoint is represented by m+1."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The floor m and adjacent integer m+1 are uniquely determined; no selection is made."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Step 4.2 proves ψ(x)=0 implies x∈Z."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Step 4.2 proves x∈Z implies ψ(x)=0."
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
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-metric-bounded-diameter",
    "declared_target": "def-metric-bounded-diameter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-distance-to-set-is-lipschitz",
    "declared_target": "lem-distance-to-set-is-lipschitz",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-real-and-metric-notions-agree",
    "declared_target": "lem-real-and-metric-notions-agree",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-metric-regularity-hierarchy",
    "declared_target": "thm-metric-regularity-hierarchy",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-lipschitz-holder-contraction",
    "declared_target": "def-lipschitz-holder-contraction",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-uniform-continuity-real",
    "declared_target": "def-uniform-continuity-real",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
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
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-metric-space",
    "declared_target": "def-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
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
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "ex-distance-to-the-integers-is-1-lipschitz",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
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

## Full text of every cited or declared item (23)

### `cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval`

````markdown
---
id: cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval
kind: counterexample
title: "$x \\mapsto 1/x$ is continuous on $(0,1)$ and not uniformly continuous there, the pairs $1/(k+2)$ and $1/(k+3)$ defeating every $\\delta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-continuity-implies-uniform-continuity, def-uniform-continuity-real, def-continuity-real, thm-algebra-of-continuous-functions, thm-heine-cantor-r, def-open-cover-r, thm-heine-borel-characterisation-r, def-interval, def-sequence, def-bounded-set, def-open-and-closed-in-r, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$1/x$ not uniformly continuous on $(0,1)$"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the function $f : (0,1) \to \mathbb{R}$, $f(x) := 1/x$, is
uniformly continuous on $(0,1)$ ([[def-uniform-continuity-real]],
[[def-interval]]).

$f$ is continuous on $(0,1)$ ([[def-continuity-real]]) and its domain is
bounded, so this is the sharpest simple instance of
[[fs-continuity-implies-uniform-continuity]]: neither continuity nor
boundedness of the domain implies uniform continuity, and what
[[thm-heine-cantor-r]] actually needs is compactness, which $(0,1)$ does not
have because it is not closed ([[thm-heine-borel-characterisation-r]]).

The refutation exhibits, for every $\delta > 0$, a pair of points of $(0,1)$
closer than $\delta$ whose $f$-values differ by exactly $1$. The pairs are

$$x_k := \frac{1}{k+2}, \qquad y_k := \frac{1}{k+3} \qquad (k \in \mathbb{N}),$$

and the shift by $2$ and $3$ is not cosmetic: $\mathbb{N}$ contains $0$ here
([[def-sequence]] is $0$-indexed), so $1/k$ is undefined at $k = 0$ and
$1/(k+1)$ leaves $(0,1)$ at $k = 0$.

## Facts & Assumptions

**Given:** The interval $A := (0,1)$ and the function $f : A \to \mathbb{R}$, $f(x) := 1/x$. Naturals are identified with their canonical images in $\mathbb{R}$.

[L1] Uniform continuity on $A$ fails as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a pair $x, x' \in A$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$ ([[def-uniform-continuity-real]], [[def-ordered-field]]).

[L2] Algebra of continuous functions: the identity is continuous on $A$, and the reciprocal of a continuous nowhere-vanishing function is continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L3] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < s < t$ implies $0 < 1/t < 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L4] Ordered-field arithmetic: for $k \in \mathbb{N}$ one has $k + 3 > k + 2 \ge 2 > 1 > 0$, so $0 < 1/(k+3) < 1/(k+2) < 1$ and both lie in $(0,1)$; and $(k+2)(k+3) \ge k+2 > 0$ ([[def-ordered-field]], [[def-interval]], [[lem-of-abs-value]]).

[L5] $(0,1)$ is bounded but not closed, hence not compact, so [[thm-heine-cantor-r]] does not apply to it ([[def-bounded-set]], [[def-open-and-closed-in-r]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $f$ is continuous on $A = (0,1)$: the identity is continuous there by [L2] and satisfies $x > 0 \ne 0$ for every $x \in A$, so its reciprocal is continuous on $A$ by [L2]. [L2, L4]

1.2 For $k \in \mathbb{N}$ put $x_k := 1/(k+2)$ and $y_k := 1/(k+3)$. By [L4] both lie in $A$, and $f(x_k) = k+2$, $f(y_k) = k+3$. At the first index, $k = 0$, this reads $x_0 = 1/2$ and $y_0 = 1/3$, both in $(0,1)$. [L4]

2.1 The separation of the arguments is $|x_k - y_k| = \dfrac{1}{k+2} - \dfrac{1}{k+3} = \dfrac{1}{(k+2)(k+3)} \le \dfrac{1}{k+2}$, using $(k+2)(k+3) \ge k+2 > 0$ and [L3]; the separation of the values is $|f(x_k) - f(y_k)| = |(k+2) - (k+3)| = 1$. [step 1.2, L3, L4]

3.1 Put $\varepsilon_0 := 1 > 0$ and let a real $\delta > 0$ be given. By [L3] fix a natural $m \ge 1$ with $1/m < \delta$, and take $k := m$. Then $k + 2 > m > 0$, so $1/(k+2) < 1/m < \delta$ by [L3], and step 2.1 gives $|x_k - y_k| \le 1/(k+2) < \delta$ while $|f(x_k) - f(y_k)| = 1 \ge \varepsilon_0$. [step 2.1, L3, choose]

4.1 So no real $\delta > 0$ serves $\varepsilon_0 = 1$, and by [L1] the function $f$ is not uniformly continuous on $(0,1)$, although by step 1.1 it is continuous there: the refuted claim is false. [step 1.1, step 3.1, L1, L5] ∎

## Remarks

- **What this witnesses in the regularity hierarchy.** [[thm-metric-regularity-hierarchy]], transported to real functions by [[lem-real-and-metric-notions-agree]], gives uniformly continuous $\Rightarrow$ continuous and asserts no converse. This item is the witness that the converse fails, and it is one of the two named in the remarks of [[lem-real-and-metric-notions-agree]]; the other, [[ex-x-to-the-beta-separates-the-holder-classes]], separates the Hölder classes below it.

- **The failure is at the missing endpoint, and it is repaired by restoring it.** On $[a,1]$ with $0 < a < 1$ the same formula is uniformly continuous, by [[thm-heine-cantor-r]], since $[a,1]$ is closed and bounded. It is also repaired by an explicit estimate: on $[a,1]$ one has $|1/x - 1/x'| = |x - x'|/(xx') \le |x-x'|/a^{2}$, so $f$ is even Lipschitz there.

- **A second reading of the same fact.** By [[cor-continuous-extension-from-a-dense-subset-r]], a uniformly continuous function on $(0,1)$ would extend continuously to $[0,1]$ and hence be bounded there ([[cor-boundedness-theorem-r]]); $1/x$ is unbounded on $(0,1)$, so it cannot be uniformly continuous. That route is shorter but rests on more, and the computation above is the elementary one.
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

### `def-lipschitz-holder-contraction`

````markdown
---
id: def-lipschitz-holder-contraction
kind: definition
title: "Lipschitz map, $\\alpha$-Hölder map for rational $0 < \\alpha \\le 1$, and contraction"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-uniform-continuity, def-metric-space, def-rational-power,
       def-rat-order, lem-metric-nonnegativity, def-integer-power]
justified_by: []
forward_refs: [cex-strict-contraction-without-a-fixed-point]
aliases: []
landmark: true
short: "Lipschitz, Hölder, contraction"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 6ba2b991536bc17f37491fe225d5ca0331683968cabffb15013849f789373315
    item_sha256: 7580b1f334d2d1aa4963b16bc10cb18dc484349fdedcdeb64d60dfc5c8999aa1
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Hölder condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder_condition"
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
pipeline_run: null
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function. Recall that a metric takes nonnegative real values
([[lem-metric-nonnegativity]]).

- $f$ is **Lipschitz** with **constant** $L$, where $L \in \mathbb{R}$ and
  $L \ge 0$, if
  $$d_Y\big(f(x), f(x')\big) \;\le\; L \, d_X(x,x') \qquad \text{for all } x, x' \in X .$$
  $f$ is *Lipschitz* if it is Lipschitz with some such constant.
- Let $\alpha \in \mathbb{Q}$ with $0 < \alpha \le 1$ ([[def-rat-order]]). $f$ is
  **$\alpha$-Hölder** with **constant** $C$, where $C \in \mathbb{R}$ and
  $C \ge 0$, if
  $$d_Y\big(f(x), f(x')\big) \;\le\; C \, d_X(x,x')^{\alpha} \qquad \text{for all } x, x' \in X ,$$
  the power being the rational power of a nonnegative base
  ([[def-rational-power]]). $f$ is *$\alpha$-Hölder* if it is so with some such
  constant, and *Hölder* if it is $\alpha$-Hölder for some rational
  $\alpha \in (0,1]$.
- $f$ is a **contraction** with constant $q$ if it is Lipschitz with constant $q$
  and $0 \le q < 1$. The number $q$ is then called a **contraction constant** for
  $f$.

**The power $d_X(x,x')^{\alpha}$ is defined at every pair, including $x = x'$.**
The base $d_X(x,x')$ is a nonnegative real, and [[def-rational-power]] defines
$a^{\alpha}$ for every $a > 0$ and, by its supplementary clause, sets
$0^{\alpha} = 0$ for every rational $\alpha > 0$. Since $\alpha > 0$ is required
here, the displayed inequality at $x = x'$ reads $0 \le C \cdot 0$, which holds;
so no separate clause and no restriction to $x \ne x'$ is needed. Note that this
does not by itself explain the strict inequality $\alpha>0$: if one extended the
formula to $\alpha=0$ using the convention $0^0=1$ of [[def-integer-power]], the
equal-point inequality would still be the automatic $0\le C$. Globally, however,
that extension would reduce to the bounded-diameter condition
$d_Y(f(x),f(x'))\le C$, outside the standard Hölder range adopted here.

**Why the exponent is a rational and why it is at most $1$.** This library has no
real exponents ([[def-rational-power]]), so $\alpha$ ranges over the rationals;
that is a limitation of the ambient toolkit and not of the notion. The upper
bound $\alpha \le 1$ is the standard convention, and it is where the notion is
useful: the classical theory reserves the name for $\alpha \in (0,1]$, and
nothing in this library uses an exponent outside that range. No claim is made
here about what an exponent $\alpha > 1$ would do.

**Constants are not unique and are not part of the data.** If $f$ is Lipschitz
with constant $L$ it is Lipschitz with every constant $L' \ge L$, and likewise
for Hölder constants; the adjectives above are existential statements. A
*contraction*, by contrast, requires a constant strictly below $1$, and that is a
real restriction: exhibiting the constant is part of exhibiting a contraction, and
a map that shrinks every distance without admitting one uniform constant is not a
contraction here.

## Remarks

- **The three conditions are ranked, and the ranking is a theorem.** Contraction
  implies Lipschitz by definition; Lipschitz and Hölder each imply uniform
  continuity ([[def-metric-uniform-continuity]]), and uniform continuity implies
  continuity. That is [[thm-metric-regularity-hierarchy]], where the one
  implication that needs a hypothesis, namely Lipschitz implies Hölder, is stated
  with the boundedness hypothesis it actually needs.
- **A Lipschitz map with constant $0$ is constant** when $X$ is nonempty, since
  $d_Y(f(x),f(x')) \le 0$ forces $f(x) = f(x')$ by the separation axiom (M1)
  ([[def-metric-space]]). So the constant maps are exactly the maps admitting
  every nonnegative constant, and they are contractions with constant $0$.
- **Naming forks.** Many texts call a Lipschitz map with constant $L < 1$ a
  *contraction* and one with $d(fx,fy) < d(x,y)$ for $x \ne y$ a *contractive* or
  *weakly contractive* map. This library uses *contraction* only in the first
  sense; the second condition is strictly weaker and does not force a fixed point
  ([[fs-strict-contraction-has-a-fixed-point]]), witnessed by
  [[cex-strict-contraction-without-a-fixed-point]], which is precisely why the two
  names are kept apart here.
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

### `def-metric-bounded-diameter`

````markdown
---
id: def-metric-bounded-diameter
kind: definition
title: "Bounded subset, diameter, distance from a point to a set, and distance between two sets in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-metric-ball, def-bounded-set, def-infimum,
       thm-infimum-property, lem-sup-unique, def-complete-ordered-field,
       lem-metric-nonnegativity, rem-sup-conventions, lem-of-add-order,
       def-ordered-field]
justified_by: []
aliases: [def-metric-diameter, def-distance-to-set]
landmark: false
short: "bounded, $\\operatorname{diam}$, $d(x,A)$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Bounded set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bounded_set"
    - title: "Diameter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Diameter"
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let
$A, B \subseteq X$.

**Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$
and a real $r > 0$ with $A \subseteq B(x_0, r)$ ([[def-metric-ball]]). The space
$(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself.

**Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and
bounded, and put

$$D(A) := \{\, d(a,b) : a, b \in A \,\} \subseteq \mathbb{R}.$$

Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and
$r$ with $A \subseteq B(x_0,r)$, every $a, b \in A$ satisfy
$d(a,b) \le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry
([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]],
[[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$
([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\mathbb{R}$ by
the least-upper-bound property ([[def-complete-ordered-field]]), and that bound
is unique ([[lem-sup-unique]]). Define

$$\operatorname{diam}(A) := \sup D(A).$$

**Distance from a point to a set, for nonempty $A$ only.** Let $x \in X$ and let
$A$ be nonempty, and put $E(x,A) := \{\, d(x,a) : a \in A \,\}$. Then $E(x,A)$ is
nonempty and bounded below by $0$, since a metric is nonnegative
([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower
bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]].
Define

$$d(x,A) := \inf E(x,A).$$

**Distance between two sets, for nonempty $A$ and $B$ only.** Put
$E(A,B) := \{\, d(a,b) : a \in A,\ b \in B \,\}$, again nonempty and bounded
below by $0$, and define

$$d(A,B) := \inf E(A,B).$$

**Every one of the three scope restrictions is load bearing.** In this library
$\sup$ and $\inf$ denote real numbers and are written only after existence has
been established; the extended real line is introduced on a later page and is
not used for the suprema and infima taken here, and no convention
$\sup \emptyset = -\infty$ is in force in this development
([[rem-sup-conventions]]). Accordingly:

- $\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and**
  bounded. It is not defined for $A = \emptyset$, and it is not defined, not even
  as an infinite value, for an unbounded $A$.
- $d(x,A)$ is defined exactly when $A \ne \emptyset$, and $d(A,B)$ exactly when
  both $A$ and $B$ are nonempty. No boundedness is needed for these two, because
  $0$ is always a lower bound.

## Remarks

- **Diameter and the distance functions are nonnegative.** For nonempty bounded
  $A$ and any $a \in A$ we have $0 = d(a,a) \in D(A)$, so
  $\operatorname{diam}(A) \ge 0$; and $d(x,A) \ge 0$, $d(A,B) \ge 0$ because $0$
  is a lower bound of the sets they are infima of
  ([[lem-metric-nonnegativity]], [[def-infimum]]).
- **$d(A,B)$ is not a metric on the nonempty subsets of $X$.** It is symmetric
  and vanishes on $A = B$, but two distinct disjoint sets can be at distance $0$,
  so the separation axiom (M1) of [[def-metric-space]] fails; the witness is on
  the companion page. The letter $d$ is reused for three different functions
  here, the metric, the point-to-set distance and the set-to-set distance, only
  because the arguments make the intended one unambiguous.
- **$d(x,A)$ is the special case $d(\{x\},A)$**, since
  $E(\{x\},A) = E(x,A)$, and the two infima therefore agree by uniqueness
  ([[lem-sup-unique]]).
````

### `def-metric-space`

````markdown
---
id: def-metric-space
kind: definition
title: "Metric space: $d(x,y) = 0$ iff $x = y$, symmetry, and the triangle inequality; pseudometric and ultrametric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order, def-complete-ordered-field, def-ordered-field,
       def-max-min, lem-finite-set-has-max]
justified_by: []
aliases: [def-metric, def-pseudometric, def-ultrametric]
landmark: true
short: "metric space $(X,d)$"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Ultrametric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrametric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis II, 3rd ed., Ch. 1"
      url: "https://terrytao.wordpress.com/books/analysis-ii/"
    - title: "Pseudometric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pseudometric_space"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this
library ([[def-real-numbers]]) and carrying its order ([[def-real-order]]).

Let $X$ be a set. A **metric** on $X$ is a function
$d : X \times X \to \mathbb{R}$ such that for all $x, y, z \in X$:

- **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$.
- **(M2) Symmetry.** $d(x,y) = d(y,x)$.
- **(M3) Triangle inequality.** $d(x,z) \le d(x,y) + d(y,z)$.

A **metric space** is a pair $(X,d)$ consisting of a set $X$ and a metric $d$ on
it. The elements of $X$ are its **points** and $d(x,y)$ is the **distance** from
$x$ to $y$. When only one metric is in play we write $X$ for $(X,d)$; when
several are, the metric is always named.

**The values of a metric are real numbers.** The codomain is $\mathbb{R}$, so
$d(x,y)$ is an honest element of the complete ordered field and every
inequality above is an inequality there. No infinite value is permitted;
[[rem-metric-axiom-conventions]] records why extended metrics are not treated in
this library.

**Nonnegativity is deliberately absent from the axiom list.** Many texts add a
fourth axiom $d(x,y) \ge 0$. It is redundant: (M1), (M2) and (M3) already force
it, as [[lem-metric-nonnegativity]] proves. Nothing below assumes it before that
lemma is available.

**Pseudometric.** A **pseudometric** on $X$ is a function
$p : X \times X \to \mathbb{R}$ satisfying (M2), (M3) and the weakening

- **(M1') Reflexivity.** $p(x,x) = 0$ for every $x \in X$

of (M1). A pseudometric may therefore assign distance $0$ to two distinct
points. Every metric is a pseudometric, and a pseudometric is a metric exactly
when $p(x,y) = 0$ forces $x = y$.

**Ultrametric.** An **ultrametric** on $X$ is a metric $d$ that in addition
satisfies

- **(M3') Strong triangle inequality.** $d(x,z) \le \max\{d(x,y), d(y,z)\}$

for all $x, y, z \in X$, where the maximum is that of a two-element subset of
$\mathbb{R}$, which exists and is one of the two elements
([[def-max-min]], [[lem-finite-set-has-max]]). An **ultrametric space** is a pair
$(X,d)$ with $d$ an ultrametric.

## Remarks

- **(M3') is a genuine strengthening of (M3), not an independent axiom on top of
  it.** A function satisfying (M1), (M2) and (M3') automatically satisfies (M3):
  by [[lem-metric-nonnegativity]] such a function is nonnegative, and for
  nonnegative reals $a, b$ one has $\max\{a,b\} \le a + b$, since the maximum is
  one of $a, b$ and the other summand is $\ge 0$. So "a metric satisfying (M3')"
  and "a function satisfying (M1), (M2), (M3')" describe the same objects, and
  the definition above may be read either way.

- **Why the biconditional form of (M1).** Splitting (M1) into "$d(x,x) = 0$" and
  "$d(x,y) = 0 \Rightarrow x = y$" gives the same notion; the split form is what
  makes the pseudometric weakening above a matter of deleting one clause. The
  naming fork between *pseudometric* and *semimetric*, which is live in the
  literature, is settled for this library in
  [[rem-metric-axiom-conventions]].

- **The metric is part of the data.** Two different metrics on the same set are
  two different metric spaces, even when they have the same open sets. That is
  why [[def-equivalent-metrics]] compares metrics at three separate strengths
  rather than one, and why a property can be invariant under one of them and not
  under another ([[fs-boundedness-is-a-topological-property]]).
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

### `def-uniform-continuity-real`

````markdown
---
id: def-uniform-continuity-real
kind: definition
title: "Uniform continuity of $f : A \\to \\mathbb{R}$: one $\\delta$ serving every pair of points of $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-continuity-real, def-interval, def-neighbourhood-r, lem-of-abs-value]
justified_by: []
aliases: []
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, cex-x-squared-is-not-uniformly-continuous-on-r]
landmark: true
short: "uniform continuity of a real function"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. Then $f$ is
**uniformly continuous on $A$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x, x' \in A)\ \bigl[\ |x - x'| < \delta \ \Longrightarrow\ |f(x) - f(x')| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the positive reals.

**The whole content is in the order of the quantifiers.** Written out,
continuity on $A$ ([[def-continuity-real]]) is

$$\forall \varepsilon\ \forall c \in A\ \exists \delta\ \forall x \in A ,$$

and uniform continuity is

$$\forall \varepsilon\ \exists \delta\ \forall x' \in A\ \forall x \in A .$$

Moving $\exists \delta$ to the left of the point quantifier is the entire
difference: for continuity the radius may shrink from point to point, for
uniform continuity one radius must serve the whole of $A$ at once. This is the
same distinction, for the same reason, that [[def-metric-uniform-continuity]]
draws for maps of metric spaces.

**Uniform continuity implies continuity.** Given $\varepsilon > 0$, take the
$\delta$ supplied by uniform continuity and, at a point $c \in A$, apply the
condition with $x' := c$: every $x \in A$ with $|x - c| < \delta$ satisfies
$|f(x) - f(c)| < \varepsilon$. So the same $\delta$ witnesses continuity at
every point of $A$ simultaneously. The converse fails, and the failure is not
marginal: [[fs-continuity-implies-uniform-continuity]] refutes it on this page,
and the companion page works two witnesses out in full.

**Uniform continuity is a property of the pair $(f, A)$, not of $f$ alone.** The
same formula may be uniformly continuous on one set and not on another:
$x \mapsto 1/x$ is uniformly continuous on $[1,\infty)$ and not on $(0,1)$, and
$x \mapsto x^{2}$ is uniformly continuous on every bounded interval and not on
$\mathbb{R}$. Restricting the domain therefore never destroys uniform
continuity, since the condition then quantifies over fewer pairs; enlarging it
may.

**The two points are unordered and may coincide.** Nothing above excludes
$x = x'$, at which the implication reads $|f(x) - f(x)| = 0 < \varepsilon$
([[lem-of-abs-value]]) and is automatic, and the condition is symmetric in the
two points because $|x - x'| = |x' - x|$.

## Remarks

- **A single $\delta$, and a picture.** For a uniformly continuous $f$ one may
  slide a rectangle of width $\delta$ and height $2\varepsilon$ along the graph
  and never have the graph leave it through the top or bottom. For a merely
  continuous $f$ the rectangle must be narrowed as one moves, and on
  $x \mapsto 1/x$ over $(0,1)$ it must be narrowed without limit.

- **Neighbourhood form.** The condition says
  $f\bigl(A \cap N_{\delta}(x')\bigr) \subseteq N_{\varepsilon}(f(x'))$ for
  every $x' \in A$, with one $\delta$ ([[def-neighbourhood-r]]). That is
  continuity on $A$ with the radius independent of the centre.

- **On an interval this is the notion the extension theorem needs.** A
  uniformly continuous function on a set $D$ extends to one on the closure of
  $D$ ([[cor-continuous-extension-from-a-dense-subset-r]]); mere continuity does
  not suffice, since $x \mapsto 1/x$ on $(0,1)$ has no continuous extension to
  $[0,1]$ ([[def-interval]]).

- **The two standard witnesses, for orientation.** The converse fails in two
  independent ways, each worked out on the companion page:
  [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] on a
  bounded domain that is not closed, and
  [[cex-x-squared-is-not-uniformly-continuous-on-r]] on a closed domain that is
  not bounded. Both are named here for orientation only; nothing in this
  definition rests on them.

- **Lipschitz and Hölder conditions are stronger still, and are not redefined
  here.** They are [[def-lipschitz-holder-contraction]] instantiated at
  $A \subseteq \mathbb{R}$ with $d(x,y) = |x-y|$; the dictionary that makes that
  instantiation legitimate, and that transports the implications of
  [[thm-metric-regularity-hierarchy]] to real functions, is
  [[lem-real-and-metric-notions-agree]], immediately below.
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

### `lem-distance-to-set-is-lipschitz`

````markdown
---
id: lem-distance-to-set-is-lipschitz
kind: lemma
title: "$|d(x,A) - d(y,A)| \\le d(x,y)$, so the distance to a fixed nonempty set is $1$-Lipschitz"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-bounded-diameter, lem-metric-reverse-triangle, thm-infimum-property,
       def-metric-space, def-infimum, lem-of-abs-value, def-abs-value,
       lem-of-add-order, def-ordered-field, def-complete-ordered-field,
       lem-metric-nonnegativity]
justified_by: []
aliases: []
landmark: false
short: "$d(\\cdot,A)$ is $1$-Lipschitz"
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
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ be
nonempty and let $x, y \in X$. Then

$$|d(x,A) - d(y,A)| \le d(x,y),$$

with $d(\cdot,A)$ the distance to a nonempty set ([[def-metric-bounded-diameter]]).
Thus the real-valued function $u \mapsto d(u,A)$ changes by at most $d(u,v)$
between $u$ and $v$: it is **$1$-Lipschitz**.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a nonempty $A \subseteq X$, and points $x, y \in X$; write $E(u) := \{\, d(u,a) : a \in A \,\}$ for $u \in X$.

[A1] The triangle inequality (M3) of [[def-metric-space]]: $d(u,a) \le d(u,v) + d(v,a)$ for all $u, v \in X$ and $a \in A$.

[L1] For nonempty $A$ the real number $d(u,A) = \inf E(u)$ exists, because $E(u)$ is nonempty and bounded below by $0$ ([[def-metric-bounded-diameter]], [[lem-metric-nonnegativity]], [[thm-infimum-property]]).

[L2] The infimum is a lower bound of its set and is the greatest such: $\inf S \le s$ for every $s \in S$, and $\ell \le \inf S$ for every lower bound $\ell$ of $S$ ([[def-infimum]]).

[L3] Adding a constant to an inequality: if $a \le b$ then $a + c \le b + c$. [[lem-of-add-order]] states the strict form only; the nonstrict form used here is that form together with the case $a = b$, settled by totality of the order ([[def-ordered-field]], [[def-complete-ordered-field]]).

[L4] For every real $u$, $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]], [[def-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Both $d(x,A)$ and $d(y,A)$ are defined real numbers, since $A$ is nonempty. [given, L1]

1.2 For every $a \in A$: $d(x,a) \le d(x,y) + d(y,a)$. [A1]

1.3 For every $a \in A$: $d(y,a) \le d(y,x) + d(x,a)$, and $d(y,x) = d(x,y)$ by symmetry (M2), so $d(y,a) \le d(x,y) + d(x,a)$. [A1]

2.1 For every $a \in A$: $d(x,A) \le d(x,a)$, since $d(x,A)$ is a lower bound of $E(x)$ and $d(x,a) \in E(x)$; combining with step 1.2 gives $d(x,A) \le d(x,y) + d(y,a)$, hence $d(x,A) - d(x,y) \le d(y,a)$. [step 1.1, step 1.2, L2, L3]

2.2 For every $a \in A$: $d(y,A) \le d(y,a) \le d(x,y) + d(x,a)$ by the same reasoning with the roles of $x$ and $y$ exchanged, hence $d(y,A) - d(x,y) \le d(x,a)$. [step 1.1, step 1.3, L2, L3]

3.1 The real number $d(x,A) - d(x,y)$ is therefore a lower bound of $E(y)$, so it is at most the greatest lower bound: $d(x,A) - d(x,y) \le d(y,A)$, that is $d(x,A) - d(y,A) \le d(x,y)$. [step 2.1, L2, L3]

3.2 Symmetrically $d(y,A) - d(x,y)$ is a lower bound of $E(x)$, so $d(y,A) - d(x,A) \le d(x,y)$. [step 2.2, L2, L3]

4.1 By [L4] the value $|d(x,A) - d(y,A)|$ is $d(x,A) - d(y,A)$ or its negative $d(y,A) - d(x,A)$, and steps 3.1 and 3.2 bound both by $d(x,y)$; hence $|d(x,A) - d(y,A)| \le d(x,y)$. [step 3.1, step 3.2, L4] ∎

## Remarks

- **Where the nonemptiness is used.** Twice, and both times essentially: it is
  what makes $d(x,A)$ and $d(y,A)$ exist at all
  ([[def-metric-bounded-diameter]]), and it is what makes $E(x)$ and $E(y)$
  nonempty so that "greatest lower bound" has content. For $A = \emptyset$ the
  statement has no meaning in this library, since $\inf \emptyset$ is undefined.
- **The point case is [[lem-metric-reverse-triangle]]**: taking $A = \{z\}$ gives
  $E(u) = \{d(u,z)\}$, whose infimum is $d(u,z)$, and the conclusion becomes
  $|d(x,z) - d(y,z)| \le d(x,y)$.
- The constant $1$ is best possible in general: on $\mathbb{R}$ with
  $A = \{0\}$ the function is $u \mapsto |u|$, and $\big||x| - |y|\big| = |x-y|$
  whenever $x$ and $y$ have the same sign.
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

### `lem-real-and-metric-notions-agree`

````markdown
---
id: lem-real-and-metric-notions-agree
kind: lemma
title: "Dictionary: for $A \\subseteq \\mathbb{R}$ with the metric $d(x,y) = |x-y|$, continuity and uniform continuity of $f : A \\to \\mathbb{R}$ agree with the metric-space notions, the Lipschitz and Hölder conditions are the metric ones instantiated, and a subset of $\\mathbb{R}$ is compact in the open-cover sense of $\\mathbb{R}$ exactly when it is a compact metric subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuity-real, def-uniform-continuity-real, def-metric-continuity, def-metric-uniform-continuity, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, thm-uniform-continuity-preserves-cauchy, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-metric-space, def-metric-ball, def-metric-topology, def-metric-compactness, lem-compactness-is-intrinsic, def-metric-compactness-variants, def-metric-convergence, def-cauchy-in-metric, def-open-cover-r, def-open-and-closed-in-r, def-real-limit, def-sequence, def-rational-power, lem-of-abs-value, lem-metric-nonnegativity]
justified_by: []
aliases: [lem-metric-dictionary-for-r]
forward_refs: [ex-x-to-the-beta-separates-the-holder-classes, cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]
landmark: true
short: "real and metric notions agree"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ carry the subspace metric of the usual metric
$d_{\mathbb{R}}(x,y) = |x-y|$ of $\mathbb{R}$, that is
$d_A(x,y) = |x - y|$ for $x, y \in A$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]),
and let $f : A \to \mathbb{R}$, regarded also as a map of metric spaces
$(A, d_A) \to (\mathbb{R}, d_{\mathbb{R}})$. Then the $\mathbb{R}$-native
notions of this page and the metric-space notions of the earlier pages are the
**same notions**, in the following five senses.

1. **Continuity.** For every $c \in A$: $f$ is continuous at $c$ in the sense of
   [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense
   of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and
   only if it is continuous as a map of metric spaces.
2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of
   [[def-uniform-continuity-real]] if and only if it is uniformly continuous as
   a map of metric spaces ([[def-metric-uniform-continuity]]).
3. **Lipschitz.** For a real $L \ge 0$: $f$ is Lipschitz with constant $L$ as a
   map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if
   $$|f(x) - f(x')| \le L\,|x - x'| \qquad \text{for all } x, x' \in A .$$
   This displayed condition is what "$f$ is Lipschitz with constant $L$" means
   for a real function on $A$ in this library; no second definition is made.
4. **Hölder.** For a rational $\alpha$ with $0 < \alpha \le 1$ and a real
   $C \ge 0$: $f$ is $\alpha$-Hölder with constant $C$ as a map of metric spaces
   if and only if
   $$|f(x) - f(x')| \le C\,|x - x'|^{\alpha} \qquad \text{for all } x, x' \in A ,$$
   the power being the rational power of a nonnegative base
   ([[def-rational-power]]).
5. **Compactness, in both senses used in this library.** For $K \subseteq
   \mathbb{R}$ with the subspace metric $d_K$:
   - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every
     family of open subsets of $\mathbb{R}$ covering $K$ has a finite subfamily
     covering $K$ — if and only if the metric space $(K, d_K)$ is compact
     ([[def-metric-compactness]]);
   - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and
     only if $(K, d_K)$ is sequentially compact as a metric space
     ([[def-metric-compactness-variants]]).

Two consequences are recorded, since they are the reason the dictionary is
stated as a lemma rather than as a remark.

6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and
   [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \to \mathbb{R}$ is
   uniformly continuous on $A$; an $\alpha$-Hölder $f$ with rational
   $0 < \alpha \le 1$ is uniformly continuous on $A$; a uniformly continuous $f$
   is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is
   $\alpha$-Hölder for every rational $\alpha$ with $0 < \alpha \le 1$. No
   strictness is claimed here, and none is claimed there.
7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy
   in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a
   sequence of reals ([[def-real-limit]]); so by clause 2 and
   [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous
   $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of
   $\mathbb{R}$.

**Why this lemma exists, and why it is a lemma.** Three results of this page —
[[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and
[[thm-heine-cantor-r]] — are stated a second time here, having already been
proved metric-generally as
[[thm-continuous-image-of-a-compact-space-is-compact]],
[[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is
deliberate: the $\mathbb{R}$-native proofs run through
[[thm-heine-borel-characterisation-r]] and
[[thm-compact-iff-sequentially-compact-r]], which are order-based, while the
metric proofs run through the cover machinery of metric spaces. **This item is
the single place in the library where that duplication is acknowledged**, and
clauses 1 and 5 are what make the two families of statements literally the same
statements. It is a lemma, and not a remark, precisely so that later pages can
cite it and move between the two vocabularies.

**Clause 5 closes a second seam.** The phrase *compact subset of $\mathbb{R}$*
is defined twice in this library — metrically, as compactness of the metric
subspace ([[def-metric-compactness]]), and $\mathbb{R}$-natively, by covers by
open subsets of $\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no
item asserted that the two agree.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ with the subspace metric $d_A(x,y) = |x-y|$, a function $f : A \to \mathbb{R}$, and a set $K \subseteq \mathbb{R}$ with the subspace metric $d_K$.

[L1] The usual metric: $d_{\mathbb{R}}(x,y) = |x-y|$ is a metric on $\mathbb{R}$; its open balls are the intervals $B(x,r) = (x-r, x+r)$; and a set $U \subseteq \mathbb{R}$ is open in the metric topology of $d_{\mathbb{R}}$ exactly when it is open in the sense of [[def-open-and-closed-in-r]] ([[lem-real-line-is-a-metric-space]], [[def-metric-space]], [[def-metric-ball]], [[def-metric-topology]]).

[L2] Subspace metric: for $S \subseteq \mathbb{R}$ the restriction $d_S$ of $d_{\mathbb{R}}$ to $S \times S$ is a metric on $S$, so $d_S(x,y) = |x-y|$ for $x, y \in S$ ([[def-isometry-and-metric-embedding]]).

[L3] Metric continuity at $a \in X$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in X$ with $d_X(x,a) < \delta$ satisfies $d_Y(f(x), f(a)) < \varepsilon$ ([[def-metric-continuity]]).

[L4] Metric uniform continuity: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in X$ with $d_X(x,x') < \delta$ satisfy $d_Y(f(x), f(x')) < \varepsilon$ ([[def-metric-uniform-continuity]]).

[L5] Continuity and uniform continuity of a real function on $A$, in the forms of [[def-continuity-real]] and [[def-uniform-continuity-real]].

[L6] Lipschitz and Hölder for a map of metric spaces: $d_Y(f(x),f(x')) \le L\,d_X(x,x')$, respectively $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for a rational $\alpha$ with $0 < \alpha \le 1$, the power being that of [[def-rational-power]] with the convention $0^{\alpha} = 0$ ([[def-lipschitz-holder-contraction]]).

[L7] The regularity hierarchy for maps of metric spaces: Lipschitz implies uniformly continuous, uniformly continuous implies continuous, $\alpha$-Hölder implies uniformly continuous, and on a nonempty bounded space Lipschitz implies $\alpha$-Hölder for every rational $\alpha \in (0,1]$ ([[thm-metric-regularity-hierarchy]]).

[L8] Intrinsic character of compactness: a subset $K$ of a metric space $X$ is a compact metric space in its own right, with the subspace metric, exactly when every family of open subsets of $X$ whose union contains $K$ has a finite subfamily whose union contains $K$ ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L9] Compactness and sequential compactness of $K \subseteq \mathbb{R}$ in the $\mathbb{R}$-native sense ([[def-open-cover-r]]), and sequential compactness of a metric space ([[def-metric-compactness-variants]]).

[L10] Metric convergence: $x_k \to p$ in $(X,d)$ means $d(x_k,p) \to 0$ in $\mathbb{R}$ ([[def-metric-convergence]]); convergence and the Cauchy condition for real sequences are those of [[def-real-limit]] and [[def-sequence]]; a metric is nonnegative ([[lem-metric-nonnegativity]]); and $|u| \ge 0$ with $\bigl||u|\bigr| = |u|$ ([[lem-of-abs-value]]).

[L11] Cauchy in a metric space: $(x_k)$ is Cauchy in $(X,d)$ when for every rational $\varepsilon > 0$ there is $N$ with $d(x_m,x_n) < \varepsilon$ for all $m,n \ge N$ ([[def-cauchy-in-metric]]).

[L12] A uniformly continuous map of metric spaces sends Cauchy sequences to Cauchy sequences ([[thm-uniform-continuity-preserves-cauchy]]).

## Proof

**Proof technique:** direct.

1.1 **The two distances are the two absolute values.** By [L1] and [L2], for $x, x' \in A$ we have $d_A(x,x') = |x - x'|$, and for $u, v \in \mathbb{R}$ we have $d_{\mathbb{R}}(u,v) = |u - v|$; in particular $d_{\mathbb{R}}(f(x), f(x')) = |f(x) - f(x')|$. [L1, L2]

1.2 **Clause 5, the cover half.** Take the ambient metric space to be $(\mathbb{R}, d_{\mathbb{R}})$ and $K \subseteq \mathbb{R}$ with $d_K$. By [L8], $(K,d_K)$ is a compact metric space exactly when every family of sets open in $(\mathbb{R}, d_{\mathbb{R}})$ whose union contains $K$ has a finite subfamily whose union contains $K$. By [L1] the sets open in $(\mathbb{R}, d_{\mathbb{R}})$ are exactly the open subsets of $\mathbb{R}$ in the sense of [[def-open-and-closed-in-r]]. So the displayed condition is word for word the definition of compactness of $K$ in [L9]. [L1, L8, L9]

2.1 **Clause 1.** Fix $c \in A$. Substituting the identities of step 1.1 into [L3], with $X := (A,d_A)$, $Y := (\mathbb{R}, d_{\mathbb{R}})$ and $a := c$, turns metric continuity at $c$ into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$. That is verbatim the condition of [L5] defining continuity of $f$ at $c$ in the sense of [[def-continuity-real]]. The two conditions are therefore the same condition, and each holds at every point of $A$ exactly when the other does. [step 1.1, L3, L5]

2.2 **Clause 2.** The same substitution in [L4] turns metric uniform continuity into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in A$ with $|x - x'| < \delta$ satisfy $|f(x) - f(x')| < \varepsilon$, which is verbatim [[def-uniform-continuity-real]] as recorded in [L5]. [step 1.1, L4, L5]

2.3 **Clauses 3 and 4.** The same substitution in [L6] turns the Lipschitz condition into $|f(x) - f(x')| \le L\,|x-x'|$ for all $x,x' \in A$, and the $\alpha$-Hölder condition into $|f(x) - f(x')| \le C\,|x-x'|^{\alpha}$, the power being that of [[def-rational-power]] and defined at $x = x'$ by the convention $0^{\alpha} = 0$ recorded in [L6]. Since this library gives no other definition of the two conditions for a real function on $A$, the displayed inequalities are what those words mean here. [step 1.1, L6]

2.4 **Clause 5, the sequential half: convergence first.** Let $(x_j)$ be a sequence with terms in $K$ and let $p \in K$. By [L10] and step 1.1, convergence of $(x_j)$ to $p$ in $(K,d_K)$ says $d_K(x_j,p) = |x_j - p| \to 0$ in $\mathbb{R}$; and $|x_j - p| \to 0$ says that for every rational $\varepsilon > 0$ there is $J$ with $\bigl||x_j - p| - 0\bigr| = |x_j - p| < \varepsilon$ for $j \ge J$, which is verbatim the statement $x_j \to p$ of [L10]. So the two convergences are the same relation. [step 1.1, L10]

3.1 **Clause 5, the sequential half.** A sequence in $(K,d_K)$ is exactly a sequence of reals with all terms in $K$, and by step 2.4 a subsequence of it converges to a point of $K$ in $(K,d_K)$ exactly when it converges to that point in $\mathbb{R}$. Hence "every sequence in $K$ has a subsequence converging in $(K,d_K)$ to a point of $K$" and "every sequence of reals with terms in $K$ has a subsequence converging in $\mathbb{R}$ to a point of $K$" are the same statement, which is the assertion of [L9] and [[def-metric-compactness-variants]]. [step 2.4, L9, L10]

3.2 **Clause 6.** By clauses 1 to 4, the four $\mathbb{R}$-native conditions are the corresponding metric conditions for the map $(A,d_A) \to (\mathbb{R},d_{\mathbb{R}})$, so the implications of [L7] hold between them verbatim; the boundedness hypothesis in the last of them is boundedness of the metric space $(A,d_A)$, which for $A \subseteq \mathbb{R}$ is boundedness of $A$ as a set of reals, since $d_A(x,x') = |x-x'|$. [step 2.1, step 2.2, step 2.3, L7]

3.3 **Clause 7.** By step 1.1 and [L11], a sequence $(x_k)$ with terms in $A$ is Cauchy in $(A,d_A)$ exactly when for every rational $\varepsilon > 0$ there is $N$ with $|x_m - x_n| < \varepsilon$ for all $m,n \ge N$, which is verbatim the Cauchy condition of [L10] for a sequence of reals. Combining this with clause 2 and [L12] gives that a uniformly continuous $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of reals. [step 1.1, step 2.2, L10, L11, L12]

4.1 Clauses 1 to 7 are proved, each by rewriting one definition into the other along the identity $d_A(x,x') = |x-x'|$ or, for clause 5, along [L8] and the agreement of the two notions of open subset of $\mathbb{R}$. [step 2.1, step 2.2, step 2.3, step 1.2, step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Nothing here is a new theorem, and that is the point.** Every clause is an identification of two forms of words, and the only clause with any content beyond substitution is 5, which needs [[lem-compactness-is-intrinsic]] to move between covers by relatively open sets and covers by open subsets of $\mathbb{R}$, and needs [[lem-real-line-is-a-metric-space]] to know that the metric topology of $\mathbb{R}$ is the topology of [[def-open-and-closed-in-r]]. A reader who takes those two identifications for granted is taking for granted exactly what this library refuses to leave unsaid.

- **The hierarchy of clause 6 is not strict by fiat, and the witnesses live on the companion page.** [[thm-metric-regularity-hierarchy]] asserts the four implications and claims no converse. That none of them reverses for real functions is witnessed here: [[ex-x-to-the-beta-separates-the-holder-classes]] gives, for rationals $0 < \beta < \alpha \le 1$, a function on $[0,1]$ that is $\beta$-Hölder and not $\alpha$-Hölder, and in particular ($\alpha = 1$) is uniformly continuous and not Lipschitz; and [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] gives a continuous function that is not uniformly continuous. Those two items are links, not dependencies: they are examples on the companion page, and nothing on this page rests on them.

- **What the dictionary does *not* say.** It does not say that the two proofs of a duplicated theorem are the same proof, and they are not: the $\mathbb{R}$-native ones use the order of $\mathbb{R}$ and spend no choice beyond what is named in each item, while the metric ones use covers and, where the equivalence of the compactness variants is invoked, countable or dependent choice. What the dictionary establishes is that the two *statements* coincide, so that a later page may use whichever proof it prefers and cite whichever form it needs.
````

### `lem-real-line-is-a-metric-space`

````markdown
---
id: lem-real-line-is-a-metric-space
kind: lemma
title: "The absolute value makes $\\mathbb{R}$ a metric space: $d(x,y) = |x-y|$ is a metric, its open balls are the intervals $(x-r, x+r)$, and it is unbounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-metric-ball, def-metric-topology, def-metric-bounded-diameter,
       def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-interval,
       thm-of-archimedean, def-complete-ordered-field, def-ordered-field,
       lem-of-add-order, lem-of-naturals-positive]
justified_by: []
aliases: [def-usual-metric-on-r]
landmark: true
short: "$(\\mathbb{R}, |x-y|)$"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Real line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Real_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Define $d_{\mathbb{R}} : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by
$d_{\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:

1. $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ ([[def-metric-space]]); it is
   called the **usual metric** of $\mathbb{R}$.
2. For $x \in \mathbb{R}$ and $r > 0$ the open ball is the bounded open interval
   ([[def-interval]], [[def-metric-ball]])
   $$B(x,r) = (x-r,\ x+r),$$
   and the closed ball is $\bar B(x,r) = [x-r,\ x+r]$.
3. Consequently $U \subseteq \mathbb{R}$ is open in the metric topology of
   $d_{\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \in U$
   there is $r > 0$ with $(x-r, x+r) \subseteq U$. This topology is called the
   **usual topology** of $\mathbb{R}$.
4. $(\mathbb{R}, d_{\mathbb{R}})$ is not a bounded metric space
   ([[def-metric-bounded-diameter]]): no ball contains $\mathbb{R}$, so
   $\operatorname{diam}(\mathbb{R})$ is not defined.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]) with its absolute value ([[def-abs-value]]), and the function $d_{\mathbb{R}}(x,y) = |x-y|$; points $x, y, z \in \mathbb{R}$ and a real $r > 0$.

[L1] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and for $c > 0$ one has $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L2] Triangle inequality in an ordered field: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L3] Intervals: $(a,b) = \{t : a < t < b\}$ and $[a,b] = \{t : a \le t \le b\}$ ([[def-interval]]).

[L4] Archimedean property: for every $w \in \mathbb{R}$ there is a natural $n \ge 1$ with $w < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]).

[L5] Adding a constant to an inequality, in strict and nonstrict form: the strict form is [[lem-of-add-order]] and the nonstrict form is that together with the case of equality, the order being total ([[def-ordered-field]]).

[L6] Trichotomy: for reals $a,b$ exactly one of $a < b$, $a = b$, $b < a$ holds ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Separation (M1): $d_{\mathbb{R}}(x,y) = |x-y| = 0$ holds if and only if $x - y = 0$, that is if and only if $x = y$. [L1]

1.2 Symmetry (M2): $d_{\mathbb{R}}(y,x) = |y-x| = |-(x-y)| = |x-y| = d_{\mathbb{R}}(x,y)$. [L1]

1.3 Triangle inequality (M3): $d_{\mathbb{R}}(x,z) = |x - z| = |(x-y) + (y-z)| \le |x-y| + |y-z| = d_{\mathbb{R}}(x,y) + d_{\mathbb{R}}(y,z)$. [L2]

1.4 For $y \in \mathbb{R}$ and $r > 0$: $y \in B(x,r)$ means $|x - y| < r$, which by [L1] holds if and only if $-r < x - y < r$, and adding $y - r$ respectively $y + r$ to the two halves shows this is equivalent to $x - r < y < x + r$. [L1, L5]

1.5 For $y \in \mathbb{R}$ and $r > 0$: $y \in \bar B(x,r)$ means $|x-y| \le r$, which by the same equivalence read with $\le$ in place of $<$ holds if and only if $x - r \le y \le x + r$. [L1, L5]

1.6 Let $x_0 \in \mathbb{R}$ and $r > 0$ be arbitrary, and use [L4] to fix a natural $n \ge 1$ with $x_0 + r < n \cdot 1_{\mathbb{R}}$; write $w := n \cdot 1_{\mathbb{R}}$. [L4, choose]

2.1 By steps 1.1, 1.2 and 1.3 the function $d_{\mathbb{R}}$ satisfies (M1), (M2) and (M3), so it is a metric on $\mathbb{R}$, which is claim 1. [step 1.1, step 1.2, step 1.3]

2.2 By step 1.4 and [L3] the set $B(x,r)$ has exactly the elements of $(x-r,x+r)$, and by step 1.5 and [L3] the set $\bar B(x,r)$ has exactly the elements of $[x-r,x+r]$; this is claim 2. [step 1.4, step 1.5, L3]

2.3 Since $r > 0$ we have $x_0 < x_0 + r < w$, so $w - x_0 > r > 0$ and hence $d_{\mathbb{R}}(x_0, w) = |x_0 - w| = |-(w - x_0)| = w - x_0 > r$; therefore $w \notin B(x_0,r)$. [step 1.6, L1, L5, L6]

3.1 Substituting claim 2 into the definition of open in the metric topology gives claim 3: $U$ is open exactly when every $x \in U$ admits $r > 0$ with $(x-r,x+r) = B(x,r) \subseteq U$. [step 2.2]

4.1 Since $x_0$ and $r$ were arbitrary, step 2.3 exhibits for every ball $B(x_0,r)$ a real not in it, so no ball contains $\mathbb{R}$; hence $\mathbb{R}$ is not a bounded subset of itself and $\operatorname{diam}(\mathbb{R})$ is not defined, which is claim 4. [step 2.1, step 2.3] ∎

## Remarks

- **This is the metric every later ceiling rests on.** Every real-line example on the companion page, and every subspace of $\mathbb{R}$ used there, takes its metric from $d_{\mathbb{R}}$ through the subspace construction of [[def-isometry-and-metric-embedding]].
- **Unboundedness needs no Archimedean input, and no completeness either.** No ordered field is bounded under $d(u,v) = |u-v|$, and the reason is a single element rather than any cofinality property: given a centre $c$ and a radius $r > 0$, the element $c + r + 1$ satisfies $d(c,\, c + r + 1) = |{-(r+1)}| = r + 1 > r$, because $1 > 0$ and $r + 1 > 0$ ([[lem-of-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]]); so it lies outside $B(c,r)$ and no ball contains the field. Step 1.6 above chooses its witness with [[thm-of-archimedean]] instead, which is a convenience and not a necessity: it delivers a witness that is a canonical natural, and claim 4 needs no such thing. Claim 4 therefore holds verbatim in every ordered field with this $d$, Archimedean or not. Note also that a radius is an element of $\mathbb{R}$, so "a ball of infinite radius" is not something that can be written here.
- **The claim that $\operatorname{diam}(\mathbb{R})$ is "not defined" is a claim about the conventions of this development** ([[rem-sup-conventions]], [[def-metric-bounded-diameter]]): suprema here are real numbers and the extended real line, which is introduced on a later page, is not used for them, so an unbounded set has no diameter at all rather than a diameter $+\infty$.
````

### `thm-metric-regularity-hierarchy`

````markdown
---
id: thm-metric-regularity-hierarchy
kind: theorem
title: "Contraction implies Lipschitz implies uniformly continuous implies continuous; every Hölder map is uniformly continuous, and a Lipschitz map on a bounded space is Hölder for every exponent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-lipschitz-holder-contraction, def-metric-uniform-continuity,
       def-metric-continuity, def-rational-power, lem-rational-power-monotone,
       def-metric-bounded-diameter, lem-rational-power-laws, def-metric-space,
       lem-metric-nonnegativity, lem-of-inverse-positive, lem-of-sign-rules,
       def-rat-order, thm-of-archimedean, def-complete-ordered-field]
justified_by: []
forward_refs: [ex-square-root-is-half-holder, cex-continuous-map-destroying-cauchyness]
aliases: []
landmark: true
short: "contraction $\\Rightarrow$ Lipschitz $\\Rightarrow$ uniform $\\Rightarrow$ continuous"
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
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Hölder condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder_condition"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function, with the three regularity conditions as in
[[def-lipschitz-holder-contraction]]. Then:

1. If $f$ is a contraction, it is Lipschitz.
2. If $f$ is Lipschitz, it is uniformly continuous
   ([[def-metric-uniform-continuity]]).
3. If $f$ is uniformly continuous, it is continuous
   ([[def-metric-continuity]]).
4. If $f$ is $\alpha$-Hölder for some rational $\alpha$ with $0 < \alpha \le 1$,
   it is uniformly continuous.
5. Suppose $X$ is nonempty and bounded, and put
   $R := \operatorname{diam}(X) + 1$, a real with $R > 0$
   ([[def-metric-bounded-diameter]]). If $f$ is Lipschitz with constant $L$, then
   for **every** rational $\alpha$ with $0 < \alpha \le 1$ the map $f$ is
   $\alpha$-Hölder with constant $L\,R^{\,1-\alpha}$.

**Claim 5 carries its boundedness hypothesis for a reason, and no unconditional
"Lipschitz implies Hölder" is asserted anywhere here.** On an unbounded space the
implication is false; the witness and its verification are in the first remark
below.

**Strictness is not claimed.** The five implications are asserted and nothing
more; that none of them reverses is witnessed elsewhere, and those witnesses are
not prerequisites of this theorem. See the second remark.

## Facts & Assumptions

**Given:** Metric spaces $(X,d_X)$, $(Y,d_Y)$, a function $f : X \to Y$, a real $\varepsilon > 0$, and a rational $\alpha$ with $0 < \alpha \le 1$.

[A1] $f$ is a contraction with constant $q$: $f$ is Lipschitz with constant $q$ and $0 \le q < 1$ ([[def-lipschitz-holder-contraction]]).

[A2] $f$ is Lipschitz with constant $L \ge 0$: $d_Y(f(x),f(x')) \le L\,d_X(x,x')$ for all $x,x' \in X$ ([[def-lipschitz-holder-contraction]]).

[A3] $f$ is $\alpha$-Hölder with constant $C \ge 0$: $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for all $x,x' \in X$ ([[def-lipschitz-holder-contraction]]).

[A4] $X$ is nonempty and bounded, so $\operatorname{diam}(X)$ exists and $d_X(x,x') \le \operatorname{diam}(X)$ for all $x,x' \in X$ ([[def-metric-bounded-diameter]], [[def-complete-ordered-field]]).

[L1] Uniform continuity: one $\delta > 0$ per $\varepsilon > 0$ serving every pair ([[def-metric-uniform-continuity]]); continuity at a point allows $\delta$ to depend on the point as well ([[def-metric-continuity]]).

[L2] Rational powers of a positive base, with $a^{1} = a$, $a^{0} = 1$, and the supplementary clause $0^{r} = 0$ for rational $r > 0$ ([[def-rational-power]], [[def-rat-order]]).

[L3] Exponent laws for positive bases: $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, and $a^{r} > 0$ ([[lem-rational-power-laws]]).

[L4] Monotonicity in the base: for rational $r > 0$ and $0 < a < b$ one has $a^{r} < b^{r}$ ([[lem-rational-power-monotone]]).

[L5] A metric is nonnegative, and $d(x,x') = 0$ forces $x = x'$ ([[lem-metric-nonnegativity]], [[def-metric-space]]).

[L6] Positivity of inverses and multiplication of inequalities by positives ([[lem-of-inverse-positive]], [[lem-of-sign-rules]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is immediate from the definitions: a contraction with constant $q$ is Lipschitz with the constant $q$, and $q \ge 0$. [A1, A2]

1.2 Claim 2: assume [A2] and put $\delta := \varepsilon/(L+1)$, a positive real since $L + 1 > 0$. If $d_X(x,x') < \delta$ then, using $d_X(x,x') \ge 0$, $d_Y(f(x),f(x')) \le L\,d_X(x,x') \le (L+1)\,d_X(x,x') < (L+1)\delta = \varepsilon$; the same $\delta$ served every pair, so $f$ is uniformly continuous. [A2, L1, L5, L6]

1.3 Claim 3: assume $f$ uniformly continuous and let $a \in X$; the $\delta$ belonging to $\varepsilon$ satisfies $d_X(x,a) < \delta \Rightarrow d_Y(f(x),f(a)) < \varepsilon$ for all $x$, which is continuity at $a$, and $a$ was arbitrary. [L1]

1.4 Claim 4, the case of equal points: assume [A3]; if $d_X(x,x') = 0$ then $x = x'$, so $d_Y(f(x),f(x')) = 0 < \varepsilon$ whatever $\delta$ is. [A3, L5]

1.5 Claim 4, the main case: put $\eta := \varepsilon/(C+1) > 0$ and $\delta := \eta^{1/\alpha}$, which is a positive real because $1/\alpha$ is a positive rational and $\eta > 0$. [L2, L3, L6, choose]

1.6 Claim 5: assume [A2] and [A4], put $R := \operatorname{diam}(X) + 1$ and $C := L\,R^{\,1-\alpha}$. Since $\operatorname{diam}(X) \ge 0$ we have $R \ge 1 > 0$, so $R^{\,1-\alpha}$ is defined and positive and $C \ge 0$. [A2, A4, L2, L3]

2.1 Let $t := d_X(x,x')$ with $0 < t < \delta$. Then $t^{\alpha} < \delta^{\alpha} = (\eta^{1/\alpha})^{\alpha} = \eta^{(1/\alpha)\alpha} = \eta^{1} = \eta$, so $d_Y(f(x),f(x')) \le C\,t^{\alpha} \le (C+1)\,t^{\alpha} < (C+1)\eta = \varepsilon$. [step 1.5, A3, L2, L3, L4, L6]

2.2 Let $x, x' \in X$ and $t := d_X(x,x')$; then $0 \le t \le \operatorname{diam}(X) < R$. If $t = 0$ then $d_Y(f(x),f(x')) \le L \cdot 0 = 0 = C \cdot 0^{\alpha} = C\,t^{\alpha}$, because $\alpha > 0$. [step 1.6, A2, A4, L2, L5]

2.3 If $t > 0$ then $t = t^{\alpha + (1-\alpha)} = t^{\alpha}\,t^{\,1-\alpha}$ and $t^{\,1-\alpha} \le R^{\,1-\alpha}$: for $\alpha < 1$ the exponent $1-\alpha$ is a positive rational and $0 < t < R$, and for $\alpha = 1$ both sides are $1$. Multiplying by $L\,t^{\alpha} \ge 0$ gives $L t = L\,t^{\alpha}\,t^{\,1-\alpha} \le L\,R^{\,1-\alpha}\,t^{\alpha} = C\,t^{\alpha}$, and hence $d_Y(f(x),f(x')) \le L t \le C\,t^{\alpha}$. [step 1.6, A2, L2, L3, L4, L6]

3.1 Steps 1.4 and 2.1 cover every pair with $d_X(x,x') < \delta$, and $\delta$ did not depend on the pair, so $f$ is uniformly continuous: claim 4 holds. [step 1.4, step 2.1, L1]

4.1 Steps 2.2 and 2.3 give $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for every pair, so $f$ is $\alpha$-Hölder with constant $C = L\,R^{\,1-\alpha}$, which is claim 5; claims 1 to 4 are steps 1.1, 1.2, 1.3 and 3.1. [step 1.1, step 1.2, step 1.3, step 3.1, step 2.2, step 2.3] ∎

## Remarks

- **Boundedness in claim 5 cannot be dropped, and here is the witness.** Take $X = Y = \mathbb{R}$ with the usual metric and $f(x) = x$, which is Lipschitz with constant $1$. Suppose $f$ were $\alpha$-Hölder with constant $C \ge 0$ for some rational $\alpha$ with $0 < \alpha < 1$, so that $|x - y| \le C\,|x-y|^{\alpha}$ for all reals $x,y$. Taking $y = 0$ and $x = t$ with $t > 0$, and writing $t = t^{\alpha} t^{\,1-\alpha}$ ([[lem-rational-power-laws]]), division by $t^{\alpha} > 0$ gives $t^{\,1-\alpha} \le C$ for every real $t > 0$. At $t = 1$ this reads $1 \le C$, so $C > 0$; and then choosing a natural $n$ with $n > C^{1/(1-\alpha)}$, which exists by the Archimedean property ([[thm-of-archimedean]]), and raising to the positive rational power $1-\alpha$ ([[lem-rational-power-monotone]], [[lem-rational-power-laws]]) gives $n^{\,1-\alpha} > \big(C^{1/(1-\alpha)}\big)^{1-\alpha} = C$, contradicting $t^{\,1-\alpha} \le C$ at $t = n$. So the identity of $\mathbb{R}$ is Lipschitz and $\alpha$-Hölder for no exponent $\alpha < 1$. A chain reading "Lipschitz implies Hölder implies uniformly continuous" is therefore false as stated, which is why claims 4 and 5 are separated here and why claim 5 carries a hypothesis.
- **No implication reverses, and two of the witnesses are on the companion page.** The square root on $[0,\infty)$ is $1/2$-Hölder and not Lipschitz ([[ex-square-root-is-half-holder]]), and $x \mapsto 1/x$ on $(0,1)$ is continuous and not uniformly continuous ([[cex-continuous-map-destroying-cauchyness]]). Both are read here as orientation only: this theorem does not depend on them and claims nothing about strictness. That a Lipschitz map need not be a contraction is visible already in the identity map, whose only Lipschitz constants are the reals $\ge 1$.
- **The constant $L+1$ and the constant $C+1$ are there to avoid a case split.** Dividing by $L$ or by $C$ would require them to be nonzero, and a Lipschitz constant or a Hölder constant is allowed to be $0$ ([[def-lipschitz-holder-contraction]]). Enlarging the constant by $1$ is harmless, since the defining inequalities are preserved by enlarging the constant.
- **What claim 5 costs.** The constant it produces, $L\,R^{1-\alpha}$, grows with the diameter of $X$, and that dependence is exactly what the unbounded counterexample above exploits: as $R \to \infty$ no single Hölder constant survives.
````

