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

## Wave 9 target — `thm-semicontinuity-level-set-characterisation`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `6187eb76ab5d7d47e0a1768fb8c2d7553f9c182e4348c0848a97bb56f0e8ccda`

## Complete current target

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

## Current Wave 9 provenance determination

```json
{
  "id": "thm-semicontinuity-level-set-characterisation",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Semi-continuity",
    "https://proofwiki.org/wiki/Characterization_of_Lower_Semicontinuity"
  ],
  "rationale": "The sources give the closed/open level-set characterizations of semicontinuity. The item packages strict and non-strict relative level sets and the continuity-as-both consequence.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-semicontinuity",
      "source_section": "Definition",
      "quote": "- $f$ is **upper semicontinuous at $c$** when for every real $\\varepsilon > 0$\n  there is a real $\\delta > 0$ with\n  $$f(x) \\;<\\; f(c) + \\varepsilon \\qquad \\text{for every } x \\in A \\cap N_\\delta(c).$$\n- $f$ is **lower semicontinuous at $c$** when for every real $\\varepsilon > 0$\n  there is a real $\\delta > 0$ with\n  $$f(x) \\;>\\; f(c) - \\varepsilon \\qquad \\text{for every } x \\in A \\cap N_\\delta(c).$$\n- $f$ is **upper semicontinuous on $A$**, respectively **lower semicontinuous on\n  $A$**, when it is so at every point of $A$.",
      "uses": [
        "2.3",
        "4.1",
        "6.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "**This is not the raw $\\varepsilon$-$\\delta$ formula of\n[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes\nwrong when the *punctured* formula of [[def-function-limit]] is written down at\nan arbitrary point of the domain: at an isolated point it is satisfied\nvacuously by every real $L$ at once, so it defines nothing, and this library\ntherefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point.\nContinuity at an isolated point is a different matter: the formula above is not\nvacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the\nonly value being compared with itself — and it names a single, well-defined\nproperty. The limit is undefined there; the continuity is defined, and is\nautomatic. Clause 1 is the only place where the two notions meet, and it is\nstated only where the limit exists as a notion.",
      "uses": [
        "2.3",
        "4.1",
        "6.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-semicontinuity",
      "source_section": "Definition",
      "quote": "Consequently $f$ is continuous on $A$ exactly when it is both upper and lower\nsemicontinuous on $A$.",
      "uses": [
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-semicontinuity-level-set-characterisation-step-1-1",
      "claim": "Fix a real $\\alpha$ and put $S_\\alpha := \\{\\, x \\in A : f(x) < \\alpha \\,\\}$ and $U_\\alpha := \\{\\, y \\in \\mathbb{R} : A \\cap N_\\rho(y) \\subseteq S_\\alpha \\ \\text{for some real } \\rho > 0 \\,\\}$. [construct]",
      "step": "1.1",
      "inputs": [
        "given hypotheses and local construction"
      ]
    },
    {
      "id": "thm-semicontinuity-level-set-characterisation-step-1-2",
      "claim": "Conversely suppose every $S_\\alpha$ is relatively open in $A$, say $S_\\alpha = U \\cap A$ with $U$ open, and let $c \\in A$ and $\\varepsilon > 0$ be real. Put $\\alpha := f(c) + \\varepsilon$; then $f(c) < \\alpha$, so $c \\in S_\\alpha = U \\cap A$, and there is a real $\\delta > 0$ with $N_\\delta(c) \\subseteq U$. [L2]",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "thm-semicontinuity-level-set-characterisation-step-2-1",
      "claim": "$U_\\alpha$ is open: if $y \\in U_\\alpha$ with witness $\\rho$ and $z \\in N_{\\rho/2}(y)$, then $A \\cap N_{\\rho/2}(z) \\subseteq A \\cap N_\\rho(y) \\subseteq S_\\alpha$, so $z \\in U_\\alpha$ with witness $\\rho/2$; hence $N_{\\rho/2}(y) \\subseteq U_\\alpha$. [step 1.1, L2]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2"
      ]
    },
    {
      "id": "thm-semicontinuity-level-set-characterisation-step-2-2",
      "claim": "$U_\\alpha \\cap A \\subseteq S_\\alpha$: if $y \\in U_\\alpha \\cap A$ with witness $\\rho$ then $y \\in A \\cap N_\\rho(y) \\subseteq S_\\alpha$. [step 1.1]",
      "step": "2.2",
      "inputs": [
        "1.1"
      ]
    },
    {
      "id": "thm-semicontinuity-level-set-characterisation-step-2-3",
      "claim": "Suppose $f$ is upper semicontinuous on $A$ and let $c \\in S_\\alpha$. Apply the definition at $c$ with $\\varepsilon := \\alpha - f(c) > 0$: there is a real $\\delta > 0$ with $f(x) < f(c) + \\varepsilon = \\alpha$ for every $x \\in A \\cap N_\\delta(c)$, that is $A \\cap N_\\delta(c) \\subseteq S_\\alpha$; so $c \\in U_\\alpha$. [step 1.1, L1]",
      "step": "2.3",
      "inputs": [
        "1.1",
        "L1"
      ]
    },
    {
      "id": "thm-semicontinuity-level-set-characterisation-step-3-1",
      "claim": "Hence $S_\\alpha \\subseteq U_\\alpha \\cap A$, and with step 2.2 this gives $S_\\alpha = U_\\alpha \\cap A$, a relatively open subset of $A$; since $\\alpha$ was arbitrary, one direction of claim 1 holds. [step 2.2, step 2.3]",
      "step": "3.1",
      "inputs": [
        "2.2",
        "2.3"
      ]
    },
    {
      "id": "thm-semicontinuity-level-set-characterisation-step-4-1",
      "claim": "With $\\delta$ as in step 1.2, every $x \\in A \\cap N_\\delta(c)$ lies in $U \\cap A = S_\\alpha$, so $f(x) < \\alpha = f(c) + \\varepsilon$. As $c$ and $\\varepsilon$ were arbitrary, $f$ is upper semicontinuous on $A$, which completes claim 1. [step 3.1, step 1.2, L1]",
      "step": "4.1",
      "inputs": [
        "1.2",
        "3.1",
        "L1"
      ]
    },
    {
      "id": "thm-semicontinuity-level-set-characterisation-step-5-1",
      "claim": "Claim 2 follows by applying claim 1 to $-f$: $f$ is lower semicontinuous on $A$ exactly when $-f$ is upper semicontinuous on $A$, exactly when $\\{x \\in A : -f(x) < \\beta\\}$ is relatively open for every real $\\beta$, and that set is $\\{x \\in A : f(x) > -\\beta\\}$; as $\\beta$ ranges over the reals so does $-\\beta$. [step 4.1, L3]",
      "step": "5.1",
      "inputs": [
        "4.1",
        "L3"
      ]
    },
    {
      "id": "thm-semicontinuity-level-set-characterisation-step-6-1",
      "claim": "Claim 3 follows: $f$ is continuous on $A$ exactly when it is both upper and lower semicontinuous on $A$, and by claims 1 and 2 that is exactly the conjunction of the two families of sets being relatively open. [step 4.1, step 5.1, L1] ∎",
      "step": "6.1",
      "inputs": [
        "4.1",
        "5.1",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement forms no empty set, empty family, or empty finite sum whose value affects the claim."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "Zero is not a distinguished parameter or exceptional value in this statement."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 2.1: the unit or first-index boundary is included explicitly in the stated construction."
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
      "status": "checked",
      "evidence": "Statement and steps 1.1-6.1: the numbered proof explicitly establishes the stated forward implication as part of the biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Statement and steps 1.1-6.1: the numbered proof explicitly establishes the converse implication as part of the biconditional."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "thm-semicontinuity-level-set-characterisation",
    "sourcePage": "monotone-functions-and-discontinuities",
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
    "source": "thm-semicontinuity-level-set-characterisation",
    "sourcePage": "monotone-functions-and-discontinuities",
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
    "source": "thm-semicontinuity-level-set-characterisation",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-open-and-closed-in-r",
    "declared_target": "def-open-and-closed-in-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-semicontinuity-level-set-characterisation",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (5)

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

### `thm-continuity-preimage-characterisation`

````markdown
---
id: thm-continuity-preimage-characterisation
kind: theorem
title: "$f : A \\to \\mathbb{R}$ is continuous on $A$ if and only if the preimage of every open subset of $\\mathbb{R}$ is the intersection with $A$ of an open subset of $\\mathbb{R}$, and dually for closed sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, def-open-and-closed-in-r, def-neighbourhood-r, thm-open-set-algebra-r]
justified_by: []
aliases: [thm-continuity-open-preimage-r]
landmark: true
short: "preimage characterisation of continuity"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.8)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "D. Ernst, Continuous Real Functions"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/08%3A_New_Page/8.5%3A_Continuous_Real_Functions"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and $f : A \to \mathbb{R}$. Call a set
$S \subseteq A$ **relatively open in $A$** when $S = U \cap A$ for some open
$U \subseteq \mathbb{R}$, and **relatively closed in $A$** when $S = G \cap A$
for some closed $G \subseteq \mathbb{R}$ ([[def-open-and-closed-in-r]]). For
$V \subseteq \mathbb{R}$ write $f^{-1}(V) := \{\, x \in A : f(x) \in V \,\}$.
Then the following are equivalent.

1. $f$ is continuous on $A$ ([[def-continuity-real]]).
2. $f^{-1}(V)$ is relatively open in $A$ for every open $V \subseteq \mathbb{R}$.
3. $f^{-1}(F)$ is relatively closed in $A$ for every closed $F \subseteq \mathbb{R}$.

**"Relatively open" is defined here inline, and on purpose.** At this point in
the reading order this library has no subspace-topology item for $\mathbb{R}$,
and the metric one ([[def-isometry-and-metric-embedding]]) may not be reached
before [[lem-real-and-metric-notions-agree]] has said that the two vocabularies
agree, which is later on this page. The phrase above is therefore an
abbreviation for the displayed condition and nothing more.

**The preimage is taken inside $A$.** $f^{-1}(V)$ is a subset of $A$, never of
$\mathbb{R}$, so claim 2 does **not** say that preimages of open sets are open.
They are open only when $A$ is itself open: then $U \cap A$ is an intersection
of two open sets, hence open ([[thm-open-set-algebra-r]]). For $A = [0,1]$ and
$f$ the identity, $f^{-1}\bigl((-1,1/2)\bigr) = [0,1/2)$ is not open, and it is
the trace on $A$ of the open set $(-1,1/2)$.

**No choice principle is used.** The open set witnessing claim 2 is not selected
point by point; it is *constructed* as a single union over a family cut out by a
property, which is the device the proof below makes explicit.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ and a function $f : A \to \mathbb{R}$; for $V \subseteq \mathbb{R}$, $f^{-1}(V) = \{\, x \in A : f(x) \in V \,\}$.

[L1] Continuity of $f$ at $c \in A$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in A$ satisfying $|x - c| < \delta$; equivalently $f\bigl(A \cap N_{\delta}(c)\bigr) \subseteq N_{\varepsilon}(f(c))$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Open sets of $\mathbb{R}$: $U$ is open when every $x \in U$ has some $N_{\varepsilon}(x) \subseteq U$; every neighbourhood $N_{\varepsilon}(x)$ is itself open; a set is closed exactly when its complement is open ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] An arbitrary union of open subsets of $\mathbb{R}$ is open ([[thm-open-set-algebra-r]]).

[L4] Set algebra: for $V \subseteq \mathbb{R}$ one has $f^{-1}(\mathbb{R} \setminus V) = A \setminus f^{-1}(V)$; and for $U \subseteq \mathbb{R}$, $A \setminus (U \cap A) = (\mathbb{R} \setminus U) \cap A$.

## Proof

**Proof technique:** direct.

1.1 **From 1 to 2: the canonical witness.** Assume $f$ is continuous on $A$ and let $V \subseteq \mathbb{R}$ be open. Define $$U \;:=\; \bigcup \bigl\{\, N_{\delta}(x) \ : \ x \in f^{-1}(V),\ \delta \in \mathbb{R},\ \delta > 0,\ f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq V \,\bigr\}.$$ The family being united is cut out by a property of the pair $(x,\delta)$, so it is a set and nothing is selected from it. Each of its members is open by [L2], so $U$ is open by [L3]. [L2, L3]

1.2 **$f^{-1}(V) \subseteq U \cap A$.** Let $x \in f^{-1}(V)$, so $x \in A$ and $f(x) \in V$. Since $V$ is open, [L2] gives a real $\varepsilon > 0$ with $N_{\varepsilon}(f(x)) \subseteq V$, and continuity at $x$ gives, by [L1], a real $\delta > 0$ with $f\bigl(A \cap N_{\delta}(x)\bigr) \subseteq N_{\varepsilon}(f(x)) \subseteq V$. So this pair $(x,\delta)$ contributes $N_{\delta}(x)$ to the union, and $x \in N_{\delta}(x)$ by [L2]. Hence $x \in U$, and $x \in A$. [L1, L2]

1.3 **From 2 to 1.** Assume claim 2, let $c \in A$ and let a real $\varepsilon > 0$ be given. The set $V := N_{\varepsilon}(f(c))$ is open by [L2], so $f^{-1}(V) = U \cap A$ for some open $U \subseteq \mathbb{R}$. Since $|f(c) - f(c)| = 0 < \varepsilon$ we have $c \in f^{-1}(V)$, hence $c \in U$, and [L2] gives a real $\delta > 0$ with $N_{\delta}(c) \subseteq U$. Every $x \in A$ with $|x - c| < \delta$ then lies in $U \cap A = f^{-1}(V)$, so $f(x) \in N_{\varepsilon}(f(c))$, that is $|f(x) - f(c)| < \varepsilon$. As $c$ and $\varepsilon$ were arbitrary, $f$ is continuous on $A$. [L1, L2]

2.1 **$U \cap A \subseteq f^{-1}(V)$.** Let $y \in U \cap A$. Then $y \in N_{\delta}(x)$ for some pair $(x,\delta)$ occurring in the union, so $y \in A \cap N_{\delta}(x)$ and therefore $f(y) \in V$ by the defining property of that pair. Hence $y \in f^{-1}(V)$. [step 1.1]

3.1 **Claim 2 holds.** By steps 1.2 and 2.1, $f^{-1}(V) = U \cap A$ with $U$ open, so $f^{-1}(V)$ is relatively open in $A$; and $V$ was an arbitrary open subset of $\mathbb{R}$. [step 1.1, step 1.2, step 2.1]

4.1 **2 and 3 are equivalent.** Let $F \subseteq \mathbb{R}$ be closed and put $V := \mathbb{R} \setminus F$, which is open by [L2]. If claim 2 holds then $f^{-1}(V) = U \cap A$ with $U$ open, and by [L4] $$f^{-1}(F) = A \setminus f^{-1}(V) = A \setminus (U \cap A) = (\mathbb{R} \setminus U) \cap A ,$$ with $\mathbb{R} \setminus U$ closed by [L2]; so $f^{-1}(F)$ is relatively closed. The converse runs the same computation in the other direction, starting from an open $V$, putting $F := \mathbb{R} \setminus V$ and using $f^{-1}(V) = A \setminus f^{-1}(F)$. [step 3.1, L2, L4]

5.1 Statements 1, 2 and 3 are therefore equivalent, and the passage from 1 to 2 selected nothing. [step 3.1, step 1.3, step 4.1] ∎

## Remarks

- **Why the union, and not a choice of $\delta$ at each point.** The textbook proof says "for each $x \in f^{-1}(V)$ pick $\delta_x$", which is a choice function on a subset of $\mathbb{R}$ that may be uncountable. Nothing in this library licenses that. Uniting *all* admissible balls avoids the issue completely: the family is defined by a property, membership of $x$ in $U$ needs only the existence of one admissible $\delta$ for that single $x$, and the reverse inclusion needs only the defining property of whichever pair happens to catch $y$.

- **The dual form is not "preimages of closed sets are closed".** As with claim 2, the preimage lives in $A$, and it is relatively closed. The image direction fails outright: a continuous function may carry a closed set to a set that is not closed, which is [[fs-continuous-image-of-a-closed-set-is-closed]].

- **This is the statement that survives when $\mathbb{R}$ is replaced by a metric space or a topological space.** The metric version at this point in the reading order is [[def-metric-topology]] together with [[def-metric-continuity]], and the agreement of the two vocabularies for $A \subseteq \mathbb{R}$ is [[lem-real-and-metric-notions-agree]], later on this page.
````

