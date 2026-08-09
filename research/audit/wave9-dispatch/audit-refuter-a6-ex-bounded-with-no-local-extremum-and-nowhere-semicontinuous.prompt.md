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

## Wave 9 target — `ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `91385993437060312930a17645189a14cfbcc90a33715d5eaeb0071c9f719071`

## Complete current target

````markdown
---
id: ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous
kind: example
title: "A bounded function on $\\mathbb{R}$ with no local maximum and no local minimum at any point, upper semicontinuous at no point and lower semicontinuous at no point: compose the Hamel coefficient with a strictly increasing injection of $\\mathbb{R}$ into $(0,1)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [ex-hamel-basis-additive-function, lem-hamel-basis-exists, def-additive-function, lem-additive-is-q-linear, def-semicontinuity, thm-semicontinuity-level-set-characterisation, def-max-min, lem-rat-embeds-dense, def-bounded-set, def-interval, lem-q-and-irrationals-dense-r, def-continuity-real, def-complete-ordered-field, def-neighbourhood-r, lem-of-abs-value, def-axiom-of-choice, thm-zorn]
justified_by: []
aliases: []
landmark: false
short: "no local extremum, nowhere semicontinuous"
proof_strategy: constructive
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
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Example

**Assume the Axiom of Choice** ([[def-axiom-of-choice]], [[thm-zorn]]), which
enters through [[lem-hamel-basis-exists]]. Let
$f = \Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{R}$ be the Hamel coefficient
map of [[ex-hamel-basis-additive-function]], whose values are exactly the
rationals and each of whose nonempty level sets is dense in $\mathbb{R}$. Define

$$\varphi : \mathbb{R} \to \mathbb{R}, \qquad \varphi(u) \;:=\; \frac{1}{2} + \frac{u}{2\,(1 + |u|)}, \qquad g := \varphi \circ f .$$

Say that $x$ is a **local maximum point** of $g$ when there is a real
$\delta > 0$ with $g(y) \le g(x)$ for every $y \in N_\delta(x)$
([[def-neighbourhood-r]]), and a **local minimum point** when there is a real
$\delta > 0$ with $g(y) \ge g(x)$ for every $y \in N_\delta(x)$. Then:

1. $0 < g(x) < 1$ for every real $x$, so $g$ is bounded
   ([[def-bounded-set]]);
2. $g$ has **no** local maximum point and **no** local minimum point;
3. $g$ is upper semicontinuous at no point of $\mathbb{R}$ and lower
   semicontinuous at no point ([[def-semicontinuity]]); in particular it is
   continuous at no point ([[def-continuity-real]]).

**Why $\varphi$ and not a bijection onto $\mathbb{Q} \cap (0,1)$.** All that is
needed of $\varphi$ is that it be strictly increasing, take values in $(0,1)$,
and send rationals to rationals; the explicit formula above does all three and
costs no countability argument.

## Facts & Assumptions

**Given:** The Axiom of Choice; the Hamel coefficient map $f$; the map $\varphi$ above; and $g = \varphi \circ f$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]], [[thm-zorn]]).

[L1] **Assume the Axiom of Choice.** Then there is an additive $f : \mathbb{R} \to \mathbb{R}$ whose range is exactly the canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals and each of whose level sets $f^{-1}(\{r\})$, $r \in \mathbb{Q}$, is dense in $\mathbb{R}$ ([[ex-hamel-basis-additive-function]], claims 1 and 4, [[lem-hamel-basis-exists]], [[def-additive-function]], [[lem-additive-is-q-linear]], [[lem-rat-embeds-dense]]).

[L2] A set $S \subseteq \mathbb{R}$ is dense exactly when $S \cap N_\delta(x) \ne \varnothing$ for every real $x$ and every real $\delta > 0$ ([[lem-q-and-irrationals-dense-r]], [[def-neighbourhood-r]]).

[L3] $g$ is upper semicontinuous at $c$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $g(y) < g(c) + \varepsilon$ for every $y \in N_\delta(c)$, lower semicontinuous at $c$ with $g(y) > g(c) - \varepsilon$, and continuous at $c$ exactly when it is both ([[def-semicontinuity]], [[def-continuity-real]], [[thm-semicontinuity-level-set-characterisation]]).

[L4] $\mathbb{R}$ is an ordered field, and $|u| \ge 0$ with $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$ ([[def-complete-ordered-field]], [[lem-of-abs-value]]).

[L5] $m$ is a maximum of a set when it belongs to it and dominates it, and dually for a minimum ([[def-max-min]]); $N_\delta(x) = (x-\delta, x+\delta)$ is a nondegenerate interval ([[def-neighbourhood-r]], [[def-interval]]).

## Verification

**Proof technique:** constructive.

1.1 Assume the Axiom of Choice and fix $f$ as in [L1]; define $\varphi(u) := 1/2 + u/(2(1+|u|))$ and $g := \varphi \circ f$. [A1, L1, construct]

2.1 $\varphi$ is strictly increasing. For $0 \le u_{1} < u_{2}$: $u_{1}(1+u_{2}) < u_{2}(1+u_{1})$ reduces to $u_{1} < u_{2}$, and dividing by the positive $(1+u_{1})(1+u_{2})$ gives $u_{1}/(1+u_{1}) < u_{2}/(1+u_{2})$. For $u_{1} < u_{2} \le 0$: $u_{1}(1-u_{2}) < u_{2}(1-u_{1})$ reduces to $u_{1} < u_{2}$, and dividing by the positive $(1-u_{1})(1-u_{2})$ gives $u_{1}/(1-u_{1}) < u_{2}/(1-u_{2})$. For $u_{1} < 0 \le u_{2}$ the first quantity is negative and the second is nonnegative. In every case $u_{1}/(1+|u_{1}|) < u_{2}/(1+|u_{2}|)$, and $\varphi$ is an increasing function of that quantity. [step 1.1, L4]

3.1 $0 < \varphi(u) < 1$ for every real $u$, since $|u|/(1+|u|) < 1$ gives $-1 < u/(1+|u|) < 1$; and $\varphi$ takes rationals to rationals, since $|u|$ and $1 + |u| \ne 0$ are rational when $u$ is. Claim 1 follows: $0 < g(x) < 1$ for every real $x$. [step 1.1, step 2.1, L4]

3.2 Let $x$ be real and put $r := f(x)$, a rational, and $v := g(x) = \varphi(r)$. The reals $r - 1$ and $r + 1$ are rational, and $\varphi(r-1) < v < \varphi(r+1)$ by step 2.1. [step 1.1, step 2.1, L1]

4.1 With $r$ and $v$ as in step 3.2, every real $\delta > 0$ gives points $y_{-}, y_{+} \in N_\delta(x)$ with $g(y_{-}) = \varphi(r-1) < v$ and $g(y_{+}) = \varphi(r+1) > v$: the level sets $f^{-1}(\{r-1\})$ and $f^{-1}(\{r+1\})$ are dense in $\mathbb{R}$, hence meet $N_\delta(x)$. [step 3.2, L1, L2]

5.1 Claim 2: $x$ is not a local maximum point, since every $N_\delta(x)$ contains $y_{+}$ with $g(y_{+}) > g(x)$; and $x$ is not a local minimum point, since every $N_\delta(x)$ contains $y_{-}$ with $g(y_{-}) < g(x)$. As $x$ was arbitrary, $g$ has no local maximum point and no local minimum point. [step 4.1, L5]

5.2 Claim 3: put $\varepsilon_{+} := \varphi(r+1) - v > 0$. For every real $\delta > 0$ the point $y_{+}$ of step 4.1 lies in $N_\delta(x)$ and satisfies $g(y_{+}) = v + \varepsilon_{+}$, so the inequality $g(y_{+}) < g(x) + \varepsilon_{+}$ fails; hence no $\delta$ witnesses upper semicontinuity at $x$ for $\varepsilon_{+}$, and $g$ is upper semicontinuous at no point. [step 3.2, step 4.1, L3]

6.1 Symmetrically, with $\varepsilon_{-} := v - \varphi(r-1) > 0$ the point $y_{-}$ satisfies $g(y_{-}) = v - \varepsilon_{-}$, so $g(y_{-}) > g(x) - \varepsilon_{-}$ fails and $g$ is lower semicontinuous at no point; being continuous at a point would require both, so $g$ is continuous at no point. [step 3.2, step 4.1, step 5.2, L3]

7.1 Claims 1, 2 and 3 hold for the function $g$ constructed in step 1.1. [step 3.1, step 5.1, step 5.2, step 6.1, discharge-construct] ∎

## Remarks

- **Boundedness is what makes the example surprising.** A function with no local
  extremum anywhere is easy to arrange if it is allowed to be unbounded; here
  every value lies strictly inside $(0,1)$ and yet no point is even a local
  extremum, because arbitrarily close to any point the function takes both a
  strictly larger and a strictly smaller value.

- **Everything comes from the level sets.** The only property of $f$ used after
  step 1.1 is that its nonempty level sets are dense and indexed by the
  rationals ([[ex-hamel-basis-additive-function]]); $\varphi$ contributes only
  the bounding into $(0,1)$ and the preservation of strict order. Any function
  with countably many dense level sets, relabelled by a strictly increasing
  injection into a bounded interval, would do as well.

- **The additivity of $f$ is not used here.** It was used to prove that the level
  sets are dense, on the companion item; once that is known, $g$ has nothing to
  do with Cauchy's equation. In particular $g$ is not additive: it takes values
  in $(0,1)$ and $g(0) \ne 0$.
````

## Current Wave 9 provenance determination

```json
{
  "id": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Semi-continuity",
    "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
  ],
  "rationale": "The sources supply semicontinuity criteria and dense-level-set pathological additive functions. The bounded transform and simultaneous no-extremum/nowhere-semicontinuous package is a semantic composition of those standard ingredients.",
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
      "source": "def-axiom-of-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Choice** (AC) is the following statement.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "A1",
      "source": "thm-zorn",
      "source_section": "Statement",
      "quote": "Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \\le)$ be a\nnonempty poset in which **every chain has an upper bound**. Then $P$ has a\nmaximal element ([[def-maximal-element]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "ex-hamel-basis-additive-function",
      "source_section": "Example",
      "quote": "**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), which enters through\n[[lem-hamel-basis-exists]] and hence through [[thm-zorn]]. Fix a Hamel basis\n$B$ of $\\mathbb{R}$ over the canonical copy $\\mathbb{Q} \\subseteq \\mathbb{R}$ of\nthe rationals ([[lem-rat-embeds-dense]], [[lem-restriction-of-scalars]],\n[[def-vector-space]]), fix $b_{\\star} \\in B$, and let",
      "uses": [
        "1.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-hamel-basis-exists",
      "source_section": "Statement",
      "quote": "Write $\\mathbb{Q}$ for the canonical copy $\\{\\hat q : q \\in \\mathbb{Q}\\}$ of the\nrationals inside $\\mathbb{R}$ ([[lem-rat-embeds-dense]]). Then $\\mathbb{Q}$ is a\nsubfield of $\\mathbb{R}$ ([[def-subfield]]) and $\\mathbb{R}$ is a vector space\nover $\\mathbb{Q}$ by restriction of scalars ([[lem-restriction-of-scalars]],\n[[def-vector-space]]); all spans, linear independence and bases below are taken\nin that structure. Then:",
      "uses": [
        "1.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-additive-function",
      "source_section": "Definition",
      "quote": "Let $\\mathbb{R}$ be the complete ordered field ([[def-complete-ordered-field]],\n[[def-ordered-field]], [[def-field]]). A function $f : \\mathbb{R} \\to \\mathbb{R}$\nis **additive** when it satisfies **Cauchy's functional equation**",
      "uses": [
        "1.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-additive-is-q-linear",
      "source_section": "Statement",
      "quote": "Let $f : \\mathbb{R} \\to \\mathbb{R}$ be additive ([[def-additive-function]]), and\nidentify $\\mathbb{N} \\subseteq \\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq\n\\mathbb{R}$ along the canonical embeddings ([[lem-nat-embeds-int]],\n[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), writing $\\iota(n)$ for the\ncanonical natural of $n$ in $\\mathbb{R}$ ([[def-canonical-natural]]). Then, for\nevery real $x$:",
      "uses": [
        "1.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "1.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-q-and-irrationals-dense-r",
      "source_section": "Statement",
      "quote": "1. $\\mathbb{Q}_{\\mathbb{R}}$ is dense in $\\mathbb{R}$, that is,\n   $\\overline{\\mathbb{Q}_{\\mathbb{R}}} = \\mathbb{R}$ ([[def-limit-point-r]]);\n2. $X$ is dense in $\\mathbb{R}$;\n3. every nonempty open subset of $\\mathbb{R}$ is uncountable\n   ([[def-countable]]).",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "The two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-semicontinuity",
      "source_section": "Definition",
      "quote": "- $f$ is **upper semicontinuous at $c$** when for every real $\\varepsilon > 0$\n  there is a real $\\delta > 0$ with\n  $$f(x) \\;<\\; f(c) + \\varepsilon \\qquad \\text{for every } x \\in A \\cap N_\\delta(c).$$\n- $f$ is **lower semicontinuous at $c$** when for every real $\\varepsilon > 0$\n  there is a real $\\delta > 0$ with\n  $$f(x) \\;>\\; f(c) - \\varepsilon \\qquad \\text{for every } x \\in A \\cap N_\\delta(c).$$\n- $f$ is **upper semicontinuous on $A$**, respectively **lower semicontinuous on\n  $A$**, when it is so at every point of $A$.",
      "uses": [
        "5.2",
        "6.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "**This is not the raw $\\varepsilon$-$\\delta$ formula of\n[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes\nwrong when the *punctured* formula of [[def-function-limit]] is written down at\nan arbitrary point of the domain: at an isolated point it is satisfied\nvacuously by every real $L$ at once, so it defines nothing, and this library\ntherefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point.\nContinuity at an isolated point is a different matter: the formula above is not\nvacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the\nonly value being compared with itself — and it names a single, well-defined\nproperty. The limit is undefined there; the continuity is defined, and is\nautomatic. Clause 1 is the only place where the two notions meet, and it is\nstated only where the limit exists as a notion.",
      "uses": [
        "5.2",
        "6.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-semicontinuity-level-set-characterisation",
      "source_section": "Statement",
      "quote": "1. $f$ is upper semicontinuous on $A$ ([[def-semicontinuity]]) **if and only if**\n   $\\{\\, x \\in A : f(x) < \\alpha \\,\\}$ is relatively open in $A$ for every real\n   $\\alpha$;\n2. $f$ is lower semicontinuous on $A$ **if and only if**\n   $\\{\\, x \\in A : f(x) > \\alpha \\,\\}$ is relatively open in $A$ for every real\n   $\\alpha$;\n3. $f$ is continuous on $A$ ([[def-continuity-real]]) **if and only if** both\n   families of sets are relatively open.",
      "uses": [
        "5.2",
        "6.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "The two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:",
      "uses": [
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous-step-1-1",
      "claim": "Assume the Axiom of Choice and fix $f$ as in [L1]; define $\\varphi(u) := 1/2 + u/(2(1+|u|))$ and $g := \\varphi \\circ f$. [A1, L1, construct]",
      "step": "1.1",
      "inputs": [
        "L1",
        "A1"
      ]
    },
    {
      "id": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous-step-2-1",
      "claim": "$\\varphi$ is strictly increasing. For $0 \\le u_{1} < u_{2}$: $u_{1}(1+u_{2}) < u_{2}(1+u_{1})$ reduces to $u_{1} < u_{2}$, and dividing by the positive $(1+u_{1})(1+u_{2})$ gives $u_{1}/(1+u_{1}) < u_{2}/(1+u_{2})$. For $u_{1} < u_{2} \\le 0$: $u_{1}(1-u_{2}) < u_{2}(1-u_{1})$ reduces to $u_{1} < u_{2}$, and dividing by the positive $(1-u_{1})(1-u_{2})$ gives $u_{1}/(1-u_{1}) < u_{2}/(1-u_{2})$. For $u_{1} < 0 \\le u_{2}$ the first quantity is negative and the second is nonnegative. In every case $u_{1}/(1+|u_{1}|) < u_{2}/(1+|u_{2}|)$, and $\\varphi$ is an increasing function of that quantity. [step 1.1, L4]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L4"
      ]
    },
    {
      "id": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous-step-3-1",
      "claim": "$0 < \\varphi(u) < 1$ for every real $u$, since $|u|/(1+|u|) < 1$ gives $-1 < u/(1+|u|) < 1$; and $\\varphi$ takes rationals to rationals, since $|u|$ and $1 + |u| \\ne 0$ are rational when $u$ is. Claim 1 follows: $0 < g(x) < 1$ for every real $x$. [step 1.1, step 2.1, L4]",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.1",
        "L4"
      ]
    },
    {
      "id": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous-step-3-2",
      "claim": "Let $x$ be real and put $r := f(x)$, a rational, and $v := g(x) = \\varphi(r)$. The reals $r - 1$ and $r + 1$ are rational, and $\\varphi(r-1) < v < \\varphi(r+1)$ by step 2.1. [step 1.1, step 2.1, L1]",
      "step": "3.2",
      "inputs": [
        "2.1",
        "1.1",
        "L1"
      ]
    },
    {
      "id": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous-step-4-1",
      "claim": "With $r$ and $v$ as in step 3.2, every real $\\delta > 0$ gives points $y_{-}, y_{+} \\in N_\\delta(x)$ with $g(y_{-}) = \\varphi(r-1) < v$ and $g(y_{+}) = \\varphi(r+1) > v$: the level sets $f^{-1}(\\{r-1\\})$ and $f^{-1}(\\{r+1\\})$ are dense in $\\mathbb{R}$, hence meet $N_\\delta(x)$. [step 3.2, L1, L2]",
      "step": "4.1",
      "inputs": [
        "3.2",
        "L1",
        "L2"
      ]
    },
    {
      "id": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous-step-5-1",
      "claim": "Claim 2: $x$ is not a local maximum point, since every $N_\\delta(x)$ contains $y_{+}$ with $g(y_{+}) > g(x)$; and $x$ is not a local minimum point, since every $N_\\delta(x)$ contains $y_{-}$ with $g(y_{-}) < g(x)$. As $x$ was arbitrary, $g$ has no local maximum point and no local minimum point. [step 4.1, L5]",
      "step": "5.1",
      "inputs": [
        "4.1",
        "L5"
      ]
    },
    {
      "id": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous-step-5-2",
      "claim": "Claim 3: put $\\varepsilon_{+} := \\varphi(r+1) - v > 0$. For every real $\\delta > 0$ the point $y_{+}$ of step 4.1 lies in $N_\\delta(x)$ and satisfies $g(y_{+}) = v + \\varepsilon_{+}$, so the inequality $g(y_{+}) < g(x) + \\varepsilon_{+}$ fails; hence no $\\delta$ witnesses upper semicontinuity at $x$ for $\\varepsilon_{+}$, and $g$ is upper semicontinuous at no point. [step 3.2, step 4.1, L3]",
      "step": "5.2",
      "inputs": [
        "4.1",
        "3.2",
        "L3"
      ]
    },
    {
      "id": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous-step-6-1",
      "claim": "Symmetrically, with $\\varepsilon_{-} := v - \\varphi(r-1) > 0$ the point $y_{-}$ satisfies $g(y_{-}) = v - \\varepsilon_{-}$, so $g(y_{-}) > g(x) - \\varepsilon_{-}$ fails and $g$ is lower semicontinuous at no point; being continuous at a point would require both, so $g$ is continuous at no point. [step 3.2, step 4.1, step 5.2, L3]",
      "step": "6.1",
      "inputs": [
        "3.2",
        "4.1",
        "5.2",
        "L3"
      ]
    },
    {
      "id": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous-step-7-1",
      "claim": "Claims 1, 2 and 3 hold for the function $g$ constructed in step 1.1. [step 3.1, step 5.1, step 5.2, step 6.1, discharge-construct] ∎",
      "step": "7.1",
      "inputs": [
        "1.1",
        "3.1",
        "5.1",
        "5.2",
        "6.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 1.1: the empty-object convention or its exclusion is explicit in the statement/proof."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 2.1: the zero-valued or zero-index boundary is handled explicitly, or is included without division by it."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: the unit or first-index boundary is included explicitly in the stated construction."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The claim is not parametrised by an interval, finite range, or object with a degenerate case."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint or one-sided domain boundary occurs in the statement."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: each existential witness used here is supplied by the cited existence result or by the displayed formula/construction."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "ex-hamel-basis-additive-function",
    "declared_target": "ex-hamel-basis-additive-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities-examples",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-hamel-basis-exists",
    "declared_target": "lem-hamel-basis-exists",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-additive-function",
    "declared_target": "def-additive-function",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-additive-is-q-linear",
    "declared_target": "lem-additive-is-q-linear",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-semicontinuity",
    "declared_target": "def-semicontinuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-semicontinuity-level-set-characterisation",
    "declared_target": "thm-semicontinuity-level-set-characterisation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
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
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
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
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
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
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
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
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
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
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
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
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
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
  },
  {
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
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
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
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
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-axiom-of-choice",
    "declared_target": "def-axiom-of-choice",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-zorn",
    "declared_target": "thm-zorn",
    "target_statement_provenance": "literature-derived",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (17)

### `def-additive-function`

````markdown
---
id: def-additive-function
kind: definition
title: "Cauchy's functional equation $f(x+y) = f(x) + f(y)$, and the additive functions $\\mathbb{R} \\to \\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
  evidence: exact-source
deps: [def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: [def-cauchy-functional-equation]
landmark: true
short: "additive function; Cauchy's equation"
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Definition

Let $\mathbb{R}$ be the complete ordered field ([[def-complete-ordered-field]],
[[def-ordered-field]], [[def-field]]). A function $f : \mathbb{R} \to \mathbb{R}$
is **additive** when it satisfies **Cauchy's functional equation**

$$f(x + y) \;=\; f(x) + f(y) \qquad \text{for all } x, y \in \mathbb{R}.$$

Equivalently, $f$ is a homomorphism of the additive group of $\mathbb{R}$ into
itself.

**The linear maps are additive.** For a fixed real $c$ the function
$x \mapsto cx$ satisfies $c(x+y) = cx + cy$ by distributivity, so it is
additive. Cauchy's question is whether these are the only additive functions,
and the answer is a genuine dichotomy: with any one of a short list of
regularity conditions the answer is yes
([[thm-cauchy-functional-equation-regularity]]), and without any of them it is
no ([[fs-additive-implies-linear]]).

**No continuity, no monotonicity and no measurability is part of the
definition.** The equation is purely algebraic, and every regularity hypothesis
below is stated explicitly where it is used.

**A first consequence, recorded here because it is used immediately.** An
additive $f$ satisfies $f(0) = 0$: putting $x = y = 0$ gives
$f(0) = f(0) + f(0)$, and subtracting $f(0)$ gives $f(0) = 0$. The remaining
elementary consequences, including $f(-x) = -f(x)$ and $\mathbb{Q}$-homogeneity,
are collected in [[lem-additive-is-q-linear]].
````

### `def-axiom-of-choice`

````markdown
---
id: def-axiom-of-choice
kind: definition
title: "The Axiom of Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-choice-function]
justified_by: []
forward_refs: [ex-russells-socks, rem-choice-strengths, fs-zorn-provable-in-zf,
               lem-finite-choice, rem-choice-ledger]
external_refs: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent]
aliases: [def-ac]
landmark: true
short: "axiom of choice"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
Here $\prod_{i \in I} X_i$ is the set of functions $f$ with domain $I$ such that
$f(i) \in X_i$ for every $i \in I$; when a family of nonempty sets is indexed by
itself, such an $f$ is precisely a choice function for it.

## Remarks

- **This is an axiom, not a theorem, and it is deliberately not derived here.**
  **Assume ZF is consistent.** Then AC is independent of the axioms of
  Zermelo–Fraenkel set theory: Gödel (1938) showed that ZF, if consistent, cannot
  refute it ([[rem-godel-constructible-universe]]), and Cohen (1963) showed that
  ZF, if consistent, cannot prove it ([[rem-cohen-forcing-ac-independent]]). The
  consistency hypothesis is not decoration and cannot be dropped: an inconsistent
  ZF proves everything, AC included, so both halves of the independence would
  fail. Nor can the hypothesis be discharged inside ZF. Both directions also
  require machinery (the constructible universe and forcing) that this library
  does not yet contain, so both are recorded with references rather than proved.
  [[fs-zorn-provable-in-zf]] carries the same consistency assumption explicitly
  in its Given; [[rem-choice-ledger]] records the weaker choice principles.
- Being an axiom, AC carries no well-definedness obligation, which is why this
  item has no `justified_by`.
- The case of a family listed by a natural number, which is the finite case once
  finiteness is defined, is a theorem of ZF and needs no axiom
  ([[lem-finite-choice]]). AC is exactly the extension of that theorem to
  arbitrary index sets, and the gap between the two is not a matter of degree:
  [[ex-russells-socks]] exhibits the difference concretely.
- "ZFC" abbreviates ZF together with AC. A result that invokes AC should say so
  where it is stated, so that a reader can tell which theorems are choice-free;
  that bookkeeping is the purpose of [[rem-choice-ledger]].
  [[rem-choice-strengths]] carries the narrower question of what the ultrafilter
  lemma costs, and on cited authority, and under the hypothesis that ZF is
  consistent, places that principle strictly between ZF and AC.
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

### `def-semicontinuity`

````markdown
---
id: def-semicontinuity
kind: definition
title: "Upper and lower semicontinuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [def-continuity-real, def-neighbourhood-r, def-complete-ordered-field, lem-of-abs-value]
justified_by: []
aliases: [def-upper-semicontinuous, def-lower-semicontinuous]
landmark: true
short: "upper and lower semicontinuity"
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
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$, with
neighbourhoods as in [[def-neighbourhood-r]].

- $f$ is **upper semicontinuous at $c$** when for every real $\varepsilon > 0$
  there is a real $\delta > 0$ with
  $$f(x) \;<\; f(c) + \varepsilon \qquad \text{for every } x \in A \cap N_\delta(c).$$
- $f$ is **lower semicontinuous at $c$** when for every real $\varepsilon > 0$
  there is a real $\delta > 0$ with
  $$f(x) \;>\; f(c) - \varepsilon \qquad \text{for every } x \in A \cap N_\delta(c).$$
- $f$ is **upper semicontinuous on $A$**, respectively **lower semicontinuous on
  $A$**, when it is so at every point of $A$.

In words: an upper semicontinuous function cannot jump **up** in the limit, and
a lower semicontinuous one cannot jump **down**. Both conditions are pointwise,
both quantify over the same unpunctured neighbourhoods as
[[def-continuity-real]], and at $x = c$ each holds automatically, since
$f(c) < f(c) + \varepsilon$ and $f(c) > f(c) - \varepsilon$.

### Continuity is exactly the conjunction

$f$ is continuous at $c$ **if and only if** it is both upper and lower
semicontinuous at $c$.

*If $f$ is continuous at $c$*, a $\delta$ witnessing $|f(x) - f(c)| < \varepsilon$
on $A \cap N_\delta(c)$ witnesses both displayed conditions, since
$|f(x) - f(c)| < \varepsilon$ gives $-\varepsilon < f(x) - f(c) < \varepsilon$
([[lem-of-abs-value]]).

*Conversely*, given $\varepsilon > 0$ take $\delta_1$ for the upper condition
and $\delta_2$ for the lower one and put $\delta := \min\{\delta_1, \delta_2\} > 0$.
For $x \in A \cap N_\delta(c)$ both $f(x) < f(c) + \varepsilon$ and
$f(x) > f(c) - \varepsilon$ hold, that is $|f(x) - f(c)| < \varepsilon$
([[lem-of-abs-value]]). So $f$ is continuous at $c$.

Consequently $f$ is continuous on $A$ exactly when it is both upper and lower
semicontinuous on $A$.

### Negation exchanges the two

$f$ is upper semicontinuous at $c$ **if and only if** $-f$ is lower
semicontinuous at $c$, since $f(x) < f(c) + \varepsilon$ says the same thing as
$-f(x) > -f(c) - \varepsilon$ ([[def-complete-ordered-field]]). Every statement
about one notion below is therefore proved for one of them and transferred to
the other by this substitution, never proved twice.

**Neither notion implies the other, and neither implies continuity.** The
indicator of a closed set is upper semicontinuous and the indicator of an open
set is lower semicontinuous, and neither is continuous unless the set is clopen;
the companion page uses an upper semicontinuous function on $[0,1]$ that attains
no minimum.
````

### `ex-hamel-basis-additive-function`

````markdown
---
id: ex-hamel-basis-additive-function
kind: example
title: "An additive $f : \\mathbb{R} \\to \\mathbb{R}$ that is not $x \\mapsto cx$: the coefficient of one fixed Hamel basis vector. It is unbounded above and below on every nondegenerate interval, its graph is dense in $\\mathbb{R}^{2}$, and every nonempty level set is dense in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [lem-hamel-basis-exists, fs-additive-implies-linear, def-additive-function, lem-additive-is-q-linear, thm-cauchy-functional-equation-regularity, def-vector-space, lem-restriction-of-scalars, def-linear-combination-and-span, def-linear-subspace, lem-metrics-on-rn, def-metric-interior-closure-boundary, thm-metric-closure-characterisation, def-metric-ball, def-axiom-of-choice, thm-zorn, def-bounded-set, def-interval, lem-rat-embeds-dense, lem-q-and-irrationals-dense-r, def-complete-ordered-field, def-continuity-real, def-monotone-function]
justified_by: []
aliases: []
landmark: false
short: "a Hamel coefficient is additive and wild"
proof_strategy: constructive
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "Hamel basis, in Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "On Functions Whose Graph Is a Hamel Basis"
      url: "https://www.scranton.edu/faculty/plotka/pdfs/5.pdf"
pipeline_run: null
---

## Example

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), which enters through
[[lem-hamel-basis-exists]] and hence through [[thm-zorn]]. Fix a Hamel basis
$B$ of $\mathbb{R}$ over the canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of
the rationals ([[lem-rat-embeds-dense]], [[lem-restriction-of-scalars]],
[[def-vector-space]]), fix $b_{\star} \in B$, and let

$$f \;:=\; \Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{R}$$

be the coefficient map of $b_{\star}$ ([[lem-hamel-basis-exists]], claim 4).
Write $W := W_{b_{\star}} = \operatorname{span}(B \setminus \{b_{\star}\})$
([[def-linear-combination-and-span]]). Then:

1. $f$ is additive ([[def-additive-function]]) and is **not** of the form
   $x \mapsto cx$ for any real $c$ ([[fs-additive-implies-linear]]);
2. $f$ is bounded neither above nor below on any nondegenerate interval
   ([[def-bounded-set]], [[def-interval]]), is monotone on no nondegenerate
   interval ([[def-monotone-function]]), is of constant sign on none, and is
   continuous at no point of $\mathbb{R}$ ([[def-continuity-real]]);
3. the graph $\{(x,f(x)) : x \in \mathbb{R}\}$ is dense in $\mathbb{R}^{2}$ for
   the metric $d_\infty$ ([[lem-metrics-on-rn]],
   [[def-metric-interior-closure-boundary]]);
4. the values of $f$ are exactly the rationals, and for every rational $r$ the
   level set $f^{-1}(\{r\}) = \{\, x \in \mathbb{R} : f(x) = r \,\}$ is **dense
   in $\mathbb{R}$**; for an irrational $v$ the level set $f^{-1}(\{v\})$ is
   empty.

Claim 2 is the contrapositive of [[thm-cauchy-functional-equation-regularity]]
applied to claim 1, clause by clause, and claim 3 is the contrapositive of its
sixth clause.

## Facts & Assumptions

**Given:** The Axiom of Choice; a Hamel basis $B$ of $\mathbb{R}$ over $\mathbb{Q}$; a fixed $b_{\star} \in B$; the coefficient map $f = \Lambda_{b_{\star}}$ and $W = \operatorname{span}(B \setminus \{b_{\star}\})$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]], [[thm-zorn]]).

[L1] **Assume the Axiom of Choice.** Then a Hamel basis $B$ exists; for $b_{\star} \in B$ the coefficient map $\Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{Q}$ is well defined, additive, $\mathbb{Q}$-homogeneous, has range all of $\mathbb{Q}$, has $\{x : \Lambda_{b_{\star}}(x) = 0\} = W$, and $W \ne \{0\}$ ([[lem-hamel-basis-exists]], claims 1, 4 and 5, [[def-linear-combination-and-span]], [[def-linear-subspace]]).

[L2] There is an additive $\mathbb{R} \to \mathbb{R}$ that is not of the form $x \mapsto cx$, namely a coefficient map $\Lambda_{b_{\star}}$: it takes only rational values while $c \ne 0$ would force irrational values ([[fs-additive-implies-linear]], [[lem-q-and-irrationals-dense-r]]).

[L3] If an additive $g : \mathbb{R} \to \mathbb{R}$ is bounded above on a nondegenerate interval, or bounded below on one, or monotone on one, or of constant sign on one, or continuous at a single point, or has non-dense graph in $\mathbb{R}^{2}$, then $g(x) = g(1)x$ for every real $x$ ([[thm-cauchy-functional-equation-regularity]]).

[L4] $d_\infty$ is a metric on $\mathbb{R}^{2}$ and a subset is dense exactly when every open ball meets it ([[lem-metrics-on-rn]], [[def-metric-ball]], [[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]]).

[L5] $W$ is a linear subspace of $\mathbb{R}$ over $\mathbb{Q}$, so $w \in W$ and $q \in \mathbb{Q}$ give $qw \in W$, and $W$ is closed under addition ([[def-linear-subspace]], [[def-linear-combination-and-span]]).

[L6] Strictly between any two distinct reals there lies a rational, and $\mathbb{R}$ is an ordered field ([[lem-rat-embeds-dense]], [[def-complete-ordered-field]]).

[L7] An additive $g$ satisfies $g(qx) = q g(x)$ for rational $q$ ([[lem-additive-is-q-linear]]).

## Verification

**Proof technique:** constructive.

1.1 Assume the Axiom of Choice, fix $B$ and $b_{\star} \in B$, and put $f := \Lambda_{b_{\star}}$ and $W := W_{b_{\star}}$. [A1, L1, construct]

2.1 Claim 1: $f$ is additive, and it is not of the form $x \mapsto cx$ for any real $c$. [step 1.1, L1, L2]

2.2 Claim 4, the range: the range of $f$ is exactly $\mathbb{Q}$, so $f^{-1}(\{v\}) = \varnothing$ for every irrational $v$ and $f^{-1}(\{r\}) \ne \varnothing$ for every rational $r$. [step 1.1, L1]

2.3 $W$ is dense in $\mathbb{R}$: by [L1] there is $w_{0} \in W$ with $w_{0} \ne 0$, and $q w_{0} \in W$ for every rational $q$; given reals $u < v$, the two reals $u/w_{0}$ and $v/w_{0}$ are distinct, so a rational $q$ lies strictly between them, and then $q w_{0}$ lies strictly between $u$ and $v$ if $w_{0} > 0$, and strictly between $v$ and $u$ if $w_{0} < 0$. Either way $W$ meets $(u,v)$. [step 1.1, L1, L5, L6]

3.1 Claim 2, clause by clause. Were $f$ bounded above on a nondegenerate interval, or bounded below on one, or monotone on one, or of constant sign on one, or continuous at a single point, the regularity theorem would give $f(x) = f(1)x$ for every real $x$, contradicting step 2.1. So none of the five holds. [step 2.1, L3]

3.2 Claim 3: were the graph of $f$ not dense in $\mathbb{R}^{2}$, the sixth clause of the regularity theorem would give the same contradiction. So the graph is dense. [step 2.1, L3, L4]

3.3 For a rational $r$ the level set $f^{-1}(\{r\})$ is $x_{r} + W$ for any $x_{r}$ with $f(x_{r}) = r$: indeed $f(y) = r$ holds exactly when $f(y - x_{r}) = f(y) - f(x_{r}) = 0$, that is exactly when $y - x_{r} \in W$. Here $f(-x) = -f(x)$ follows from additivity. [step 1.1, step 2.2, L1, L7]

4.1 Each such level set is dense in $\mathbb{R}$: given reals $u < v$, the interval $(u - x_{r},\ v - x_{r})$ meets $W$ by step 2.3, say in $w$, and then $x_{r} + w \in f^{-1}(\{r\})$ lies in $(u,v)$. Claim 4 is proved, and with steps 2.1, 3.1 and 3.2 so are claims 1, 2 and 3. [step 2.1, step 3.1, step 3.2, step 2.2, step 2.3, step 3.3, discharge-construct] ∎

## Remarks

- **The pathology is entirely a consequence of the two facts in claim 1.** The
  proof uses nothing about $f$ except that it is additive and not linear; every
  other property is read off [[thm-cauchy-functional-equation-regularity]] by
  contraposition. A single such function therefore witnesses the failure of all
  six regularity conditions at once.

- **What the level sets look like.** They are the cosets of the
  $\mathbb{Q}$-subspace $W = \ker f$, one for each rational value, and each is
  dense. So $\mathbb{R}$ is partitioned into countably many dense sets, on each
  of which $f$ is constant. The companion function of
  [[ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous]] is built by
  relabelling those values.

- **No measurability claim is made.** The classical statement that a Hamel
  coefficient map is not Lebesgue measurable is not asserted here: this library
  develops no measure as it stands, so the statement is not expressible, and
  nothing above depends on it.
````

### `lem-additive-is-q-linear`

````markdown
---
id: lem-additive-is-q-linear
kind: lemma
title: "An additive $f : \\mathbb{R} \\to \\mathbb{R}$ satisfies $f(0) = 0$, $f(-x) = -f(x)$ and $f(qx) = q\\,f(x)$ for every rational $q$ and every real $x$; in particular $f(q) = q\\,f(1)$ at every rational $q$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-additive-function, thm-induction-principle, lem-rat-embeds-dense, lem-int-embeds-rat, lem-nat-embeds-int, def-canonical-natural, lem-integer-multiples-agree-with-canonical-natural, def-complete-ordered-field, def-integers, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
short: "additive implies $\\mathbb{Q}$-linear"
proof_strategy: induction
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Statement

Let $f : \mathbb{R} \to \mathbb{R}$ be additive ([[def-additive-function]]), and
identify $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq
\mathbb{R}$ along the canonical embeddings ([[lem-nat-embeds-int]],
[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), writing $\iota(n)$ for the
canonical natural of $n$ in $\mathbb{R}$ ([[def-canonical-natural]]). Then, for
every real $x$:

1. $f(0) = 0$;
2. $f(-x) = -f(x)$;
3. $f(\iota(n)\,x) = \iota(n)\,f(x)$ for every $n \in \mathbb{N}$;
4. $f(m x) = m\,f(x)$ for every integer $m$;
5. $f(q x) = q\,f(x)$ for every rational $q$.

In particular, taking $x = 1$ in claim 5, $f(q) = q\,f(1)$ at every rational $q$:
**an additive function is determined on $\mathbb{Q}$ by its value at $1$.**

**What this does not say.** Claim 5 is $\mathbb{Q}$-homogeneity, not
$\mathbb{R}$-homogeneity: nothing here gives $f(\lambda x) = \lambda f(x)$ for
irrational $\lambda$, and that is exactly the gap that
[[fs-additive-implies-linear]] shows cannot be closed without a regularity
hypothesis.

## Facts & Assumptions

**Given:** An additive $f : \mathbb{R} \to \mathbb{R}$, so $f(x+y) = f(x) + f(y)$ for all reals $x, y$.

[A1] $f(x + y) = f(x) + f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[L1] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] The canonical natural satisfies $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and it agrees with the additive multiple $n \cdot 1_{\mathbb{R}}$ ([[def-canonical-natural]], [[lem-integer-multiples-agree-with-canonical-natural]], [[lem-of-naturals-positive]]).

[L3] Every integer is $\iota(n)$ or $-\iota(n)$ for a natural $n$, and every rational is $m/\iota(n)$ with $m$ an integer and $n$ a natural $\ge 1$; the embeddings preserve sums and products, and $\iota(n) \ne 0$ for $n \ge 1$ ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[def-integers]], [[lem-of-naturals-positive]]).

[L4] $\mathbb{R}$ is a field, so cancellation, distributivity and inverses of nonzero elements are available ([[def-complete-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Claim 1: taking $x = y = 0$ in the functional equation gives $f(0) = f(0) + f(0)$, and adding $-f(0)$ to both sides gives $f(0) = 0$. [A1, L4]

1.2 Claim 3, inductive hypothesis: suppose $f(\iota(n)x) = \iota(n)f(x)$ for a given $n \in \mathbb{N}$ and every real $x$. [ih]

2.1 Claim 2: taking $y = -x$ gives $0 = f(0) = f(x) + f(-x)$, so $f(-x) = -f(x)$. [step 1.1, A1, L4]

2.2 Claim 3, base case $n = 0$: $\iota(0) = 0$, so $f(\iota(0)x) = f(0) = 0 = \iota(0)f(x)$. [step 1.1, L2, base]

2.3 Claim 3, inductive step: $\iota(n+1)x = \iota(n)x + x$, so $f(\iota(n+1)x) = f(\iota(n)x) + f(x) = \iota(n)f(x) + f(x) = (\iota(n)+1)f(x) = \iota(n+1)f(x)$. [step 1.2, A1, L2, L4]

3.1 Claim 3 holds for every $n \in \mathbb{N}$ and every real $x$, by induction on $n$ from steps 2.2 and 2.3. [step 2.2, step 2.3, L1]

4.1 Claim 4: an integer $m$ is $\iota(n)$ or $-\iota(n)$ for some natural $n$. In the first case claim 3 applies directly. In the second, $f(mx) = f(-(\iota(n)x)) = -f(\iota(n)x) = -\iota(n)f(x) = m f(x)$. [step 2.1, step 3.1, L3]

5.1 Claim 5: let $q$ be rational and write $q = m/\iota(n)$ with $m$ an integer and $n$ a natural $\ge 1$, so $\iota(n) \ne 0$. Applying claim 4 with the integer $\iota(n)$ to the real $qx$ gives $\iota(n) f(qx) = f(\iota(n) q x) = f(mx) = m f(x)$, and dividing by $\iota(n)$ gives $f(qx) = (m/\iota(n)) f(x) = q f(x)$. [step 4.1, L3, L4]

6.1 Taking $x = 1$ in claim 5 gives $f(q) = q f(1)$ for every rational $q$, and all five claims are proved. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, discharge-induction] ∎

## Remarks

- **The induction is on $\mathbb{N}$ and everything else is algebra.** Only
  claim 3 needs induction; claims 4 and 5 are obtained from it by the two field
  operations, and claims 1 and 2 are two substitutions into the equation. The
  base case is $n = 0$, where $\iota(0) = 0$ and the identity reads $f(0) = 0$;
  it is a genuine case and not a convention, since $\mathbb{N}$ contains $0$.

- **This is the whole of the algebraic theory.** Every regularity theorem about
  Cauchy's equation ([[thm-cauchy-functional-equation-regularity]]) works by
  combining claim 5 with density of $\mathbb{Q}$ in $\mathbb{R}$: the value of
  $f$ is pinned on a dense set, and a regularity hypothesis is what forbids the
  values off that set from being arbitrary.
````

### `lem-hamel-basis-exists`

````markdown
---
id: lem-hamel-basis-exists
kind: lemma
title: "Assuming the Axiom of Choice, $\\mathbb{R}$ has a Hamel basis over $\\mathbb{Q}$: there is $B \\subseteq \\mathbb{R}$ such that every real is a finite $\\mathbb{Q}$-linear combination of elements of $B$ in exactly one way, and each basis vector carries a well-defined $\\mathbb{Q}$-linear coefficient map"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [def-vector-space, lem-restriction-of-scalars, def-subfield, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, lem-dependent-iff-a-vector-lies-in-the-span-of-the-others, lem-span-monotone-and-idempotent, lem-span-of-a-single-vector, lem-sum-is-span-of-union, def-sum-of-linear-subspaces, def-internal-direct-sum, lem-direct-sum-criterion, def-linear-subspace, def-linear-independence, def-linear-basis, cor-every-vector-space-has-a-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-axiom-of-choice, thm-zorn, lem-rat-embeds-dense, thm-rationals-countable, thm-r-uncountable, lem-countable-iff-surjection-from-n, def-countable, def-field, def-complete-ordered-field, def-injection-surjection-bijection, def-natural-numbers]
justified_by: []
aliases: [lem-hamel-basis]
landmark: true
short: "a Hamel basis of $\\mathbb{R}$ over $\\mathbb{Q}$"
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
    - title: "Hamel basis, in Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Hamel Basis (MathWorld)"
      url: "https://mathworld.wolfram.com/HamelBasis.html"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). The hypothesis is
genuinely used: it enters through [[cor-every-vector-space-has-a-basis]], whose
own Statement begins "Assume the Axiom of Choice", and which rests on
[[thm-zorn]].

Write $\mathbb{Q}$ for the canonical copy $\{\hat q : q \in \mathbb{Q}\}$ of the
rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]). Then $\mathbb{Q}$ is a
subfield of $\mathbb{R}$ ([[def-subfield]]) and $\mathbb{R}$ is a vector space
over $\mathbb{Q}$ by restriction of scalars ([[lem-restriction-of-scalars]],
[[def-vector-space]]); all spans, linear independence and bases below are taken
in that structure. Then:

1. **Existence.** $\mathbb{R}$ has a basis $B$ over $\mathbb{Q}$
   ([[def-linear-basis]]), called a **Hamel basis**.
2. **Representation.** Every real $x$ is
   $x = \sum_{i<n}\lambda_i b_i$ for some $n \in \mathbb{N}$, some **injective**
   list $b : n \to B$ ([[def-injection-surjection-bijection]]) and some
   $\lambda : n \to \mathbb{Q}$ ([[def-linear-combination-and-span]]).
3. **Uniqueness along a list.** For a fixed $n$ and a fixed injective
   $b : n \to B$, if $\lambda, \mu : n \to \mathbb{Q}$ satisfy
   $\sum_{i<n}\lambda_i b_i = \sum_{i<n}\mu_i b_i$, then $\lambda_i = \mu_i$ for
   every $i < n$.
4. **The coefficient map of a basis vector.** Fix $b_{\star} \in B$ and put
   $W_{b_{\star}} := \operatorname{span}(B \setminus \{b_{\star}\})$. Every real
   $x$ is $x = \lambda\, b_{\star} + w$ with $\lambda \in \mathbb{Q}$ and
   $w \in W_{b_{\star}}$ in **exactly one** way. Writing
   $\Lambda_{b_{\star}}(x) := \lambda$ for that unique scalar, the map
   $\Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{Q}$ satisfies
   $$\Lambda_{b_{\star}}(x+y) = \Lambda_{b_{\star}}(x) + \Lambda_{b_{\star}}(y), \qquad \Lambda_{b_{\star}}(qx) = q\,\Lambda_{b_{\star}}(x) \ \ (q \in \mathbb{Q}), \qquad \Lambda_{b_{\star}}(b_{\star}) = 1,$$
   its range is the whole of $\mathbb{Q}$, and
   $\{\, x \in \mathbb{R} : \Lambda_{b_{\star}}(x) = 0 \,\} = W_{b_{\star}}$.
5. **The complement is not trivial.** $W_{b_{\star}} \ne \{0\}$ for every
   $b_{\star} \in B$.

Claim 2 together with claim 4 is the precise content of the phrase "in exactly
one way" in the title: a real is a finite $\mathbb{Q}$-combination of basis
vectors, and the coefficient attached to each single basis vector is determined
by the real alone.

## Facts & Assumptions

**Given:** The field $\mathbb{R}$, the canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals, and the Axiom of Choice.

[A1] The Axiom of Choice, used only through [L4] ([[def-axiom-of-choice]], [[thm-zorn]]).

[L1] The map $q \mapsto \hat q$ is an embedding of ordered fields of $\mathbb{Q}$ into $\mathbb{R}$ ([[lem-rat-embeds-dense]]); a subfield is a subset containing $1$, closed under $a - b$ and $ab$, and containing $x^{-1}$ for each nonzero $x$ in it ([[def-subfield]], [[def-field]], [[def-complete-ordered-field]]).

[L2] A field is a vector space over itself, and an $F$-vector space is a $K$-vector space for every subfield $K \subseteq F$ by restricting the scalars ([[lem-restriction-of-scalars]], [[def-vector-space]]).

[L3] $\operatorname{span}(S)$ is the smallest linear subspace containing $S$; it is extensive, monotone and idempotent; $\operatorname{span}\{v\} = \{\lambda v : \lambda \in F\}$, and for $v \ne 0_V$ the scalar $\lambda$ in $\lambda v$ is determined ([[def-linear-combination-and-span]], [[def-linear-subspace]], [[lem-span-monotone-and-idempotent]], [[lem-span-of-a-single-vector]]).

[L4] **Assume the Axiom of Choice.** Then every vector space over every field has a basis, that is a linearly independent spanning subset ([[cor-every-vector-space-has-a-basis]], [[def-linear-basis]], [[def-linear-independence]]).

[L5] For $S \subseteq V$: $S$ is linearly dependent if and only if some $s \in S$ lies in $\operatorname{span}(S \setminus \{s\})$; and $\operatorname{span}(S)$ is already the set of linear combinations of **injective** finite lists into $S$ ([[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]], claims 1 and 2, [[lem-span-is-the-set-of-linear-combinations]]).

[L6] A finite list $v : n \to V$ is an ordered basis of $V$ if and only if every $x \in V$ is $\sum_{i<n}\lambda_i v_i$ for exactly one $\lambda : n \to F$; an ordered basis is an injective list whose image is a basis; and for a linear subspace $U \subseteq V$ and $A \subseteq U$ the readings of "$A$ is linearly independent" and "$A$ is a basis" computed in $U$ and in $V$ agree ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-basis]], [[def-natural-numbers]]).

[L7] For finitely many linear subspaces, $\sum_{i<n}U_i = \operatorname{span}(\bigcup_{i<n}U_i)$; and $V = \bigoplus_{i<n}U_i$ if and only if every $v \in V$ is $\sum_{i<n}u_i$ with $u_i \in U_i$ in exactly one way, which for $n = 2$ reads $v = u_0 + u_1$ ([[lem-sum-is-span-of-union]], [[def-sum-of-linear-subspaces]], [[def-internal-direct-sum]], [[lem-direct-sum-criterion]]).

[L8] $\mathbb{Q} \approx \mathbb{N}$ and $\mathbb{R}$ is uncountable; a nonempty at most countable set is the image of a surjection from $\mathbb{N}$, and the image of a surjection from $\mathbb{N}$ is at most countable ([[thm-rationals-countable]], [[thm-r-uncountable]], [[lem-countable-iff-surjection-from-n]], [[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 $\mathbb{Q} = \{\hat q : q \in \mathbb{Q}\}$ is a subfield of $\mathbb{R}$: it contains $\hat 1 = 1$; it is closed under differences and products, since $\hat p - \hat q = \widehat{p-q}$ and $\hat p\,\hat q = \widehat{pq}$; and if $\hat q \ne 0$ then $q \ne 0$ and $\hat q^{-1} = \widehat{q^{-1}}$ lies in it. [L1]

2.1 $\mathbb{R}$ is a vector space over itself, so restricting the scalars to the subfield $\mathbb{Q}$ makes $\mathbb{R}$ a vector space over $\mathbb{Q}$, with the field addition as vector addition and the field multiplication restricted to $\mathbb{Q} \times \mathbb{R}$ as scalar multiplication. [step 1.1, L2]

3.1 Claim 1: assuming the Axiom of Choice, that vector space has a basis $B$, a linearly independent subset of $\mathbb{R}$ with $\operatorname{span}(B) = \mathbb{R}$. [step 2.1, A1, L4]

4.1 Claim 2: since $\operatorname{span}(B) = \mathbb{R}$ and the span of a set is already the set of linear combinations of injective finite lists into it, every real $x$ is $\sum_{i<n}\lambda_i b_i$ with $b : n \to B$ injective and $\lambda : n \to \mathbb{Q}$. [step 3.1, L5]

4.2 Claim 3: let $b : n \to B$ be injective and put $U := \operatorname{span}(b[n])$, a linear subspace of $\mathbb{R}$. The list $b$ is linearly independent, since $B$ is a linearly independent subset and $b$ is an injective finite list into $B$; its image $b[n]$ spans $U$ by construction, so $b[n]$ is a basis of $U$ and $b$ is an ordered basis of $U$, independence and spanning being the same conditions read in $U$ as in $\mathbb{R}$. [step 3.1, L3, L6]

4.3 Fix $b_{\star} \in B$ and put $U_{0} := \operatorname{span}\{b_{\star}\} = \{\, \lambda b_{\star} : \lambda \in \mathbb{Q} \,\}$ and $U_{1} := W_{b_{\star}} = \operatorname{span}(B \setminus \{b_{\star}\})$, both linear subspaces of $\mathbb{R}$. [step 3.1, L3, construct]

5.1 With $b$ and $U$ as in step 4.2, the coordinate theorem applied to the vector space $U$ says that every $x \in U$ is $\sum_{i<n}\lambda_i b_i$ for exactly one $\lambda : n \to \mathbb{Q}$; in particular $\sum_{i<n}\lambda_i b_i = \sum_{i<n}\mu_i b_i$ forces $\lambda = \mu$, which is claim 3. [step 4.2, L6]

5.2 $U_{0} + U_{1} = \mathbb{R}$. Indeed $U_{0} + U_{1} = \operatorname{span}(U_{0} \cup U_{1})$; the set $B$ is contained in $U_{0} \cup U_{1}$, since $b_{\star} \in U_{0}$ and $B \setminus \{b_{\star}\} \subseteq U_{1}$ by extensiveness of the span, so $\mathbb{R} = \operatorname{span}(B) \subseteq \operatorname{span}(U_{0} \cup U_{1})$ by monotonicity; and $U_{0} \cup U_{1} \subseteq \operatorname{span}(B)$, again by monotonicity, so $\operatorname{span}(U_{0} \cup U_{1}) \subseteq \operatorname{span}(\operatorname{span}(B)) = \operatorname{span}(B) = \mathbb{R}$ by idempotence. [step 3.1, step 4.3, L3, L7]

5.3 $b_{\star} \ne 0$ and $b_{\star} \notin U_{1}$. If $b_{\star}$ lay in $\operatorname{span}(B \setminus \{b_{\star}\})$ then $B$ would be linearly dependent, contrary to step 3.1; and $0 \in B$ would likewise make $B$ dependent, since $0 \in \operatorname{span}(B \setminus \{0\})$, every span containing the zero vector. [step 3.1, step 4.3, L5]

6.1 $U_{0} \cap U_{1} = \{0\}$. Let $z \in U_{0} \cap U_{1}$ and write $z = \lambda b_{\star}$ with $\lambda \in \mathbb{Q}$. If $\lambda \ne 0$ then $b_{\star} = \lambda^{-1}z \in U_{1}$, because $U_{1}$ is a linear subspace and $\lambda^{-1} \in \mathbb{Q}$, contradicting step 5.3; so $\lambda = 0$ and $z = 0$. [step 4.3, step 5.3, L3]

7.1 Hence $\mathbb{R} = U_{0} \oplus U_{1}$: condition (D1) is step 5.2, and condition (D2) is step 6.1, since for the two-member family the sum of the other summands is $U_{1}$ in the one case and $U_{0}$ in the other. By the direct-sum criterion every real $x$ is $u_{0} + u_{1}$ with $u_{0} \in U_{0}$ and $u_{1} \in U_{1}$ in exactly one way. [step 5.2, step 6.1, L7]

8.1 Writing $u_{0} = \lambda b_{\star}$, the scalar $\lambda \in \mathbb{Q}$ is determined by $u_{0}$, since $b_{\star} \ne 0$; so $\Lambda_{b_{\star}}(x) := \lambda$ is a well-defined map $\mathbb{R} \to \mathbb{Q}$, and $x = \Lambda_{b_{\star}}(x)\,b_{\star} + w$ with $w \in W_{b_{\star}}$ in exactly one way. [step 5.3, step 7.1, L3]

9.1 $\Lambda_{b_{\star}}$ is additive and $\mathbb{Q}$-homogeneous: if $x = \lambda b_{\star} + w$ and $y = \mu b_{\star} + w'$ with $w, w' \in W_{b_{\star}}$, then $x + y = (\lambda + \mu)b_{\star} + (w + w')$ with $w + w' \in W_{b_{\star}}$, and $qx = (q\lambda)b_{\star} + qw$ with $qw \in W_{b_{\star}}$ for $q \in \mathbb{Q}$, both because $W_{b_{\star}}$ is a linear subspace; uniqueness in step 8.1 then identifies the coefficients. [step 8.1, L3]

10.1 $\Lambda_{b_{\star}}(b_{\star}) = 1$, from the representation $b_{\star} = 1\cdot b_{\star} + 0$; the range of $\Lambda_{b_{\star}}$ is all of $\mathbb{Q}$, since $\Lambda_{b_{\star}}(q b_{\star}) = q$ for every $q \in \mathbb{Q}$; and $\Lambda_{b_{\star}}(x) = 0$ holds exactly when $x = 0\cdot b_{\star} + w = w \in W_{b_{\star}}$. Claim 4 is proved. [step 8.1, step 9.1]

11.1 Claim 5: if $W_{b_{\star}} = \{0\}$ then step 8.1 gives $\mathbb{R} = \{\lambda b_{\star} : \lambda \in \mathbb{Q}\}$. That set is the image of $\mathbb{Q}$ under $\lambda \mapsto \lambda b_{\star}$, and $\mathbb{Q}$ is the image of a surjection from $\mathbb{N}$, so composing gives a surjection from $\mathbb{N}$ onto $\mathbb{R}$ and $\mathbb{R}$ would be at most countable, contradicting its uncountability. So $W_{b_{\star}} \ne \{0\}$. [step 8.1, L8] ∎

## Remarks

- **How this differs from [[ex-hamel-basis-of-r-over-q]], exactly.** That item, homed on the examples page of *Linear independence, bases and dimension*, proves three things: that $\mathbb{R}$ is a vector space over the canonical copy of $\mathbb{Q}$, that it has a basis there, and that **every** such basis is infinite, together with the observation that the existence proof exhibits none. The present lemma proves the first two and does **not** prove the third: nothing above says that a Hamel basis is infinite. What it adds instead is claims 2 to 5 — the representation by injective lists, uniqueness of the coefficients along a list, the coefficient map $\Lambda_{b_{\star}}$ of a single basis vector with its kernel, and the fact that $W_{b_{\star}} \ne \{0\}$ — none of which appears there. So neither statement contains the other, and they are **not** the same statement.

The duplication of the two shared clauses is deliberate. An examples page is a leaf of this library and nothing outside it may depend on an item homed there, so a citable Hamel basis had to be built on a page that is not a leaf. The proofs of those clauses are the same proof, and no originality is claimed for them.

- **Where the choice is spent.** Once, in [[cor-every-vector-space-has-a-basis]], which runs through [[thm-zorn]]. Everything after step 3.1 is elementary linear algebra over an arbitrary field, applied to $\mathbb{R}$ over $\mathbb{Q}$. Nothing here exhibits a Hamel basis, and nothing here claims that none can be exhibited; that would be an assertion about definability, and this library has established nothing of the kind.

- **The coefficient map is the source of the pathology.** $\Lambda_{b_{\star}}$ is additive ([[def-additive-function]]) and takes only rational values, so it is not of the form $x \mapsto cx$; that is the whole of [[fs-additive-implies-linear]], and the companion page reads off from it a function unbounded on every interval, with dense graph and dense level sets.
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

### `thm-semicontinuity-level-set-characterisation`

````markdown
---
id: thm-semicontinuity-level-set-characterisation
kind: theorem
title: "$f$ is upper semicontinuous on $A$ if and only if $\\{x \\in A : f(x) < \\alpha\\}$ is relatively open in $A$ for every real $\\alpha$, lower semicontinuous if and only if $\\{x \\in A : f(x) > \\alpha\\}$ is, and continuous if and only if it is both"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-semicontinuity, def-continuity-real, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "semicontinuity by level sets"
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
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
    - title: "Characterization of Lower Semicontinuity (ProofWiki)"
      url: "https://proofwiki.org/wiki/Characterization_of_Lower_Semicontinuity"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. Call $S \subseteq A$
**relatively open in $A$** when $S = U \cap A$ for some open
$U \subseteq \mathbb{R}$ ([[def-open-and-closed-in-r]]). Then:

1. $f$ is upper semicontinuous on $A$ ([[def-semicontinuity]]) **if and only if**
   $\{\, x \in A : f(x) < \alpha \,\}$ is relatively open in $A$ for every real
   $\alpha$;
2. $f$ is lower semicontinuous on $A$ **if and only if**
   $\{\, x \in A : f(x) > \alpha \,\}$ is relatively open in $A$ for every real
   $\alpha$;
3. $f$ is continuous on $A$ ([[def-continuity-real]]) **if and only if** both
   families of sets are relatively open.

**The open set is produced canonically, not chosen.** For each $\alpha$ the
proof exhibits one specific open $U_\alpha \subseteq \mathbb{R}$ with
$U_\alpha \cap A = \{f < \alpha\}$, namely the set of reals $y$ admitting a
radius $\rho$ with $A \cap N_\rho(y) \subseteq \{f < \alpha\}$. No choice of a
radius per point is made, which matters because the level set may be
uncountable.

## Facts & Assumptions

**Given:** $A \subseteq \mathbb{R}$ and a function $f : A \to \mathbb{R}$.

[L1] $f$ is upper semicontinuous at $c \in A$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $f(x) < f(c) + \varepsilon$ for every $x \in A \cap N_\delta(c)$; lower semicontinuity is the same with $f(x) > f(c) - \varepsilon$; and continuity at $c$ is the conjunction of the two ([[def-semicontinuity]], [[def-continuity-real]]).

[L2] $U \subseteq \mathbb{R}$ is open exactly when every $y \in U$ has a real $\rho > 0$ with $N_\rho(y) \subseteq U$; and if $|z - y| < \rho/2$ then $N_{\rho/2}(z) \subseteq N_\rho(y)$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] $-f$ is lower semicontinuous at $c$ exactly when $f$ is upper semicontinuous at $c$, and $\{x \in A : -f(x) < \alpha\} = \{x \in A : f(x) > -\alpha\}$ ([[def-semicontinuity]]).

## Proof

**Proof technique:** direct.

1.1 Fix a real $\alpha$ and put $S_\alpha := \{\, x \in A : f(x) < \alpha \,\}$ and $U_\alpha := \{\, y \in \mathbb{R} : A \cap N_\rho(y) \subseteq S_\alpha \ \text{for some real } \rho > 0 \,\}$. [construct]

1.2 Conversely suppose every $S_\alpha$ is relatively open in $A$, say $S_\alpha = U \cap A$ with $U$ open, and let $c \in A$ and $\varepsilon > 0$ be real. Put $\alpha := f(c) + \varepsilon$; then $f(c) < \alpha$, so $c \in S_\alpha = U \cap A$, and there is a real $\delta > 0$ with $N_\delta(c) \subseteq U$. [L2]

2.1 $U_\alpha$ is open: if $y \in U_\alpha$ with witness $\rho$ and $z \in N_{\rho/2}(y)$, then $A \cap N_{\rho/2}(z) \subseteq A \cap N_\rho(y) \subseteq S_\alpha$, so $z \in U_\alpha$ with witness $\rho/2$; hence $N_{\rho/2}(y) \subseteq U_\alpha$. [step 1.1, L2]

2.2 $U_\alpha \cap A \subseteq S_\alpha$: if $y \in U_\alpha \cap A$ with witness $\rho$ then $y \in A \cap N_\rho(y) \subseteq S_\alpha$. [step 1.1]

2.3 Suppose $f$ is upper semicontinuous on $A$ and let $c \in S_\alpha$. Apply the definition at $c$ with $\varepsilon := \alpha - f(c) > 0$: there is a real $\delta > 0$ with $f(x) < f(c) + \varepsilon = \alpha$ for every $x \in A \cap N_\delta(c)$, that is $A \cap N_\delta(c) \subseteq S_\alpha$; so $c \in U_\alpha$. [step 1.1, L1]

3.1 Hence $S_\alpha \subseteq U_\alpha \cap A$, and with step 2.2 this gives $S_\alpha = U_\alpha \cap A$, a relatively open subset of $A$; since $\alpha$ was arbitrary, one direction of claim 1 holds. [step 2.2, step 2.3]

4.1 With $\delta$ as in step 1.2, every $x \in A \cap N_\delta(c)$ lies in $U \cap A = S_\alpha$, so $f(x) < \alpha = f(c) + \varepsilon$. As $c$ and $\varepsilon$ were arbitrary, $f$ is upper semicontinuous on $A$, which completes claim 1. [step 3.1, step 1.2, L1]

5.1 Claim 2 follows by applying claim 1 to $-f$: $f$ is lower semicontinuous on $A$ exactly when $-f$ is upper semicontinuous on $A$, exactly when $\{x \in A : -f(x) < \beta\}$ is relatively open for every real $\beta$, and that set is $\{x \in A : f(x) > -\beta\}$; as $\beta$ ranges over the reals so does $-\beta$. [step 4.1, L3]

6.1 Claim 3 follows: $f$ is continuous on $A$ exactly when it is both upper and lower semicontinuous on $A$, and by claims 1 and 2 that is exactly the conjunction of the two families of sets being relatively open. [step 4.1, step 5.1, L1] ∎

## Remarks

- **Why "relatively" open and not open.** $S_\alpha$ is a subset of $A$, so it
  cannot be open in $\mathbb{R}$ unless $A$ is; the correct statement is the one
  above, exactly as in [[thm-continuity-preimage-characterisation]], where the
  same phrase is fixed inline for the same reason. For $A = \mathbb{R}$ the
  qualifier disappears and the level sets are open outright.

- **The strict inequalities are not interchangeable with the weak ones.** Upper
  semicontinuity says the strict sublevel sets are relatively open, equivalently
  that the sets $\{f \ge \alpha\}$ are relatively closed. It does **not** say
  that the sets $\{f \le \alpha\}$ are relatively closed; the indicator of a
  closed set is upper semicontinuous while $\{f \le 0\}$ is the complement of
  that closed set, which is relatively open and generally not closed.
````

### `thm-zorn`

````markdown
---
id: thm-zorn
kind: theorem
title: "Zorn's lemma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-bourbaki-witt, def-axiom-of-choice, def-maximal-element, def-upper-bound, def-chain, def-partial-order]
justified_by: []
forward_refs: [cex-zorn-hypothesis-fails]
aliases: [thm-zorns-lemma]
landmark: true
short: "Zorn's lemma"
proof_strategy: contradiction
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
    - title: "Encyclopedia of Mathematics, Zorn lemma"
      url: "https://encyclopediaofmath.org/wiki/Zorn_lemma"
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \le)$ be a
nonempty poset in which **every chain has an upper bound**. Then $P$ has a
maximal element ([[def-maximal-element]]).

Note the hypothesis asks only for an upper bound, not a least upper bound, and
the conclusion asserts only that a maximal element exists, never that a greatest
one does.

## Facts & Assumptions

**Given:** A nonempty poset $(P, \le)$ in which every chain has an upper bound, and the Axiom of Choice.

[A1] $P \ne \emptyset$, and every chain $C \subseteq P$ has an upper bound in $P$.

[A2] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L1] A progressive map on a chain-complete poset has a fixed point ([[thm-bourbaki-witt]]).

[L2] $m$ is maximal when there is no $x$ with $m < x$ ([[def-maximal-element]]).

[L3] $u$ is a strict upper bound of $S$ when $s < u$ for every $s \in S$ ([[def-upper-bound]]).

[L4] The empty set is a chain, and a subset is a chain when any two of its elements are comparable ([[def-chain]]).

[L5] $\le$ is a partial order, in particular transitive ($u \le v$ and $v \le w$ imply $u \le w$) and antisymmetric ($u \le v$ and $v \le u$ imply $u = v$); the strict order $u < v$ means $u \le v$ and $u \ne v$, so $<$ is irreflexive ([[def-partial-order]]).

[L6] Inclusion is a partial order on any collection of sets: $A \subseteq A$; $A \subseteq B$ and $B \subseteq A$ give $A = B$ by extensionality; and $A \subseteq B \subseteq C$ gives $A \subseteq C$ ([[def-partial-order]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $P$ has no maximal element. [assume-contra]

1.2 Let $\mathcal{C}$ be the set of all chains of $P$, a subset of the power set of $P$, partially ordered by inclusion. [L4, L6, construct]

2.1 $(\mathcal{C}, \subseteq)$ is a chain-complete poset: if $\mathcal{D} \subseteq \mathcal{C}$ is a chain under inclusion then $\bigcup \mathcal{D}$ is a chain of $P$, since any two of its elements lie in a common member of $\mathcal{D}$, and it is the least upper bound of $\mathcal{D}$ under inclusion; the empty chain has least upper bound $\bigcup \emptyset = \emptyset$, which is a chain. [step 1.2, L4, L6]

2.2 For $C \in \mathcal{C}$ let $S_C$ be the set of strict upper bounds of $C$ in $P$. [step 1.2, L3, construct]

3.1 Each $S_C$ is nonempty: $C$ has an upper bound $u$ in $P$ by hypothesis, taking any element of the nonempty $P$ when $C = \emptyset$; by assumption $u$ is not maximal, so there is $v$ with $u < v$; then for every $c \in C$ transitivity gives $c \le v$ from $c \le u \le v$, and $c \ne v$, since $c = v$ would give $v \le u$ and $u \le v$, hence $u = v$ by antisymmetry, contradicting $u < v$; so $c < v$ for every $c \in C$ and $v \in S_C$. [step 2.2, step 1.1, A1, L2, L3, L5]

4.1 Apply the Axiom of Choice to the family $\mathcal{S} = \{S_C : C \in \mathcal{C}\}$, every member of which is nonempty, obtaining a choice function $g$ with $g(S) \in S$ for each $S \in \mathcal{S}$; composing with the map $C \mapsto S_C$, which is a function on $\mathcal{C}$, yields a selection $C \mapsto g(S_C) \in S_C$ defined for every chain $C$, and no injectivity of $C \mapsto S_C$ is needed, since two chains with the same set of strict upper bounds simply receive the same chosen element. [step 3.1, A2]

5.1 Define $f(C) = C \cup \{g(S_C)\}$ for $C \in \mathcal{C}$; this is again a chain, because $g(S_C)$ is a strict upper bound of $C$ and so is comparable to every element of $C$. [step 4.1, step 2.2, L3, L4, L5, construct]

6.1 $f$ is progressive for inclusion, since $C \subseteq f(C)$ by construction. [step 5.1]

7.1 By Bourbaki–Witt applied to the chain-complete $\mathcal{C}$ and the progressive $f$, there is $C_0 \in \mathcal{C}$ with $f(C_0) = C_0$, that is $g(S_{C_0}) \in C_0$. [step 2.1, step 6.1, L1]

8.1 But $g(S_{C_0})$ is a strict upper bound of $C_0$, so every element of $C_0$ is strictly below it, giving $g(S_{C_0}) < g(S_{C_0})$, which is impossible because $<$ is irreflexive. [step 7.1, step 4.1, L3, L5, discharge-contradiction] ∎

## Remarks

- **The Axiom of Choice is used exactly once, at step 4.1**, and nowhere else. Everything before it, including Bourbaki–Witt, is a theorem of ZF. That is why the fixed point theorem is kept as a separate item: it marks the boundary between what is free and what is bought.
- The hypothesis is about **all** chains, including the empty one, whose upper bounds are exactly the elements of $P$. So on this library's convention, where $\emptyset$ is a chain ([[def-chain]]), requiring every chain to have an upper bound **already forces** $P \ne \emptyset$, and the nonemptiness hypothesis is stated separately for emphasis rather than as an independent assumption. In particular the empty poset does **not** satisfy the hypothesis: there the empty chain has no upper bound, because there is nothing at all to be one. Under the competing convention, on which chains are required to be nonempty, nonemptiness of $P$ is genuinely independent and cannot be dropped. See [[cex-zorn-hypothesis-fails]] for the failure when unbounded chains exist.
- The conclusion is **maximal, not greatest**, and conflating the two is the most common error in applying the lemma ([[fs-maximal-is-greatest]]).
- The converse holds: Zorn's lemma implies the Axiom of Choice ([[thm-zorn-implies-ac]]), so the two are equivalent over ZF ([[cor-ac-iff-zorn]]).
````

