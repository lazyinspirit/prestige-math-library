## Wave 9 target — `cex-upper-semicontinuous-need-not-attain-its-infimum`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `154f45fb6bde58e624e403f8f18379974c3320099411bade4bc56f8d50992ef7`

## Complete current target

````markdown
---
id: cex-upper-semicontinuous-need-not-attain-its-infimum
kind: counterexample
title: "An upper semicontinuous function on $[0,1]$ that is bounded below and attains no minimum, so the semicontinuous extreme value theorem is genuinely one-sided"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [def-semicontinuity, thm-semicontinuous-evt, thm-semicontinuity-level-set-characterisation, def-max-min, def-infimum, thm-infimum-property, def-bounded-set, def-interval, def-continuity-real, cor-archimedean-reciprocal, def-neighbourhood-r, thm-algebra-of-continuous-functions]
justified_by: []
aliases: []
landmark: false
short: "usc but no minimum"
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
pipeline_run: null
---

## Statement refuted

**Refuted claim:** an upper semicontinuous function on a nonempty compact
subset of $\mathbb{R}$ that is bounded below attains a minimum
([[def-semicontinuity]], [[def-max-min]]).

What [[thm-semicontinuous-evt]] proves is the one-sided statement: an **upper**
semicontinuous function on a nonempty compact set attains a **maximum**, and a
**lower** semicontinuous one attains a **minimum**. The refuted claim mixes the
two, and it is false.

## Counterexample

Define $f : [0,1] \to \mathbb{R}$ ([[def-interval]]) by

$$f(0) := 1, \qquad f(x) := x \quad \text{for } 0 < x \le 1 .$$

Then $f$ is upper semicontinuous on $[0,1]$, bounded below by $0$, with
$\inf f[\,[0,1]\,] = 0$ ([[def-infimum]]), and $f(x) > 0$ for every
$x \in [0,1]$: the infimum is not attained, so $f$ has no minimum. It does
attain a maximum, namely $1$ at $x = 0$, as [[thm-semicontinuous-evt]] requires.

## Facts & Assumptions

**Given:** The function $f : [0,1] \to \mathbb{R}$ with $f(0) = 1$ and $f(x) = x$ for $0 < x \le 1$.

[L1] $f$ is upper semicontinuous at $c$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $f(x) < f(c) + \varepsilon$ for every $x \in [0,1] \cap N_\delta(c)$ ([[def-semicontinuity]], [[def-neighbourhood-r]]).

[L2] The identity is continuous, so for $c \ne 0$ the $\varepsilon$-$\delta$ condition for $f$ on a neighbourhood of $c$ avoiding $0$ is that of the identity ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L3] A nonempty set of reals bounded below has a greatest lower bound ([[thm-infimum-property]], [[def-infimum]], [[def-bounded-set]]); $m$ is a minimum of $S$ when $m \in S$ and $m \le s$ for every $s \in S$ ([[def-max-min]]).

[L4] For every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$ ([[cor-archimedean-reciprocal]]).

[L5] An upper semicontinuous function on a nonempty compact set attains a maximum ([[thm-semicontinuous-evt]]); upper semicontinuity is equivalent to the strict sublevel sets being relatively open ([[thm-semicontinuity-level-set-characterisation]]).

## Verification

**Proof technique:** direct.

1.1 $f$ is upper semicontinuous at $0$: $f(0) = 1$ and $f(x) \le 1$ for every $x \in [0,1]$, so $f(x) < f(0) + \varepsilon = 1 + \varepsilon$ for every $x \in [0,1]$ and every real $\varepsilon > 0$; any $\delta$ works. [L1]

1.2 $f$ is upper semicontinuous at every $c \in (0,1]$: taking $\delta := \min\{c, \varepsilon\} > 0$, every $x \in [0,1]$ with $|x - c| < \delta$ satisfies $x > c - \delta \ge 0$, hence $x \ne 0$ and $f(x) = x < c + \varepsilon = f(c) + \varepsilon$. [L1, L2]

1.3 $f$ is bounded below by $0$ and $f(x) > 0$ for every $x \in [0,1]$: for $x = 0$ the value is $1 > 0$, and for $0 < x \le 1$ the value is $x > 0$. [L3]

2.1 $\inf f[\,[0,1]\,] = 0$: the set $f[\,[0,1]\,]$ is nonempty and bounded below by $0$ by step 1.3, so its infimum $\ell$ exists and $\ell \ge 0$; and for every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$, and then $f(1/n) = 1/n < \eta$, so no positive real is a lower bound and $\ell = 0$. [step 1.3, L3, L4]

3.1 $f$ has no minimum: a minimum would be a value $f(x_{0})$ that is a lower bound of $f[\,[0,1]\,]$, hence at most the infimum $0$; but every value of $f$ is strictly positive. [step 1.3, step 2.1, L3]

4.1 So $f$ is upper semicontinuous on the nonempty compact set $[0,1]$, is bounded below, and attains no minimum, which refutes the claim. It does attain a maximum, $f(0) = 1 \ge f(x)$ for every $x \in [0,1]$, in agreement with the semicontinuous extreme value theorem. [step 1.1, step 1.2, step 3.1, L5] ∎

## Remarks

- **The failing hypothesis, named exactly.** $f$ is not lower semicontinuous at
  $0$: taking $\varepsilon := 1/2$, every neighbourhood of $0$ contains points
  $x$ with $f(x) = x < 1/2 = f(0) - \varepsilon$. Lower semicontinuity is
  precisely what [[thm-semicontinuous-evt]] requires for a minimum, and it is
  precisely what is missing.

- **Reflecting the example gives the dual failure.** The function $-f$ is lower
  semicontinuous on $[0,1]$, bounded above, and attains no maximum, by
  [[def-semicontinuity]]; so neither half of the theorem can be strengthened to
  the other extremum.
````

## Current Wave 9 provenance determination

```json
{
  "id": "cex-upper-semicontinuous-need-not-attain-its-infimum",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Semi-continuity"
  ],
  "rationale": "The source states the one-sided compactness theorem: upper semicontinuity guarantees a maximum, not a minimum. The item supplies a simple explicit counterexample to the reversed extremum.",
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
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Let $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "5. every constant function $A \\to \\mathbb{R}$ and the identity\n   $\\mathrm{id} : A \\to \\mathbb{R}$, $x \\mapsto x$, are continuous on $A$; hence\n   so is $x \\mapsto x^{n}$ for every $n \\in \\mathbb{N}$\n   ([[def-integer-power]]), and hence so is every **polynomial function**\n   $x \\mapsto a_0 + a_1 x + \\dots + a_n x^{n}$ with real coefficients.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$\n   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the\n   limit of $f$ at $c$ exists and\n   $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$\n   ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$\n   witnessing continuity witnesses the limit condition, because the limit\n   condition quantifies over a subset of the points continuity quantifies over;\n   and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses\n   continuity, because the one point it omits, $x = c$, satisfies\n   $|f(c) - f(c)| < \\varepsilon$ anyway.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-infimum-property",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded below. Then $S$ has a\ngreatest lower bound in $\\mathbb{R}$ ([[def-infimum]]), and it is given by",
      "uses": [
        "1.3",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-infimum",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $\\ell \\in \\mathbb{R}$. Then $\\ell$ is a\n**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:",
      "uses": [
        "1.3",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "1.3",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.",
      "uses": [
        "1.3",
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-semicontinuous-evt",
      "source_section": "Statement",
      "quote": "**The theorem is genuinely one-sided.** An upper semicontinuous function on a\ncompact set need be neither bounded below nor a function attaining its infimum;\nthe companion page gives such a function on $[0,1]$. Only the maximum is\nasserted in claim 1, and only the minimum in claim 2.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-semicontinuity-level-set-characterisation",
      "source_section": "Statement",
      "quote": "1. $f$ is upper semicontinuous on $A$ ([[def-semicontinuity]]) **if and only if**\n   $\\{\\, x \\in A : f(x) < \\alpha \\,\\}$ is relatively open in $A$ for every real\n   $\\alpha$;\n2. $f$ is lower semicontinuous on $A$ **if and only if**\n   $\\{\\, x \\in A : f(x) > \\alpha \\,\\}$ is relatively open in $A$ for every real\n   $\\alpha$;\n3. $f$ is continuous on $A$ ([[def-continuity-real]]) **if and only if** both\n   families of sets are relatively open.",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "cex-upper-semicontinuous-need-not-attain-its-infimum-step-1-1",
      "claim": "$f$ is upper semicontinuous at $0$: $f(0) = 1$ and $f(x) \\le 1$ for every $x \\in [0,1]$, so $f(x) < f(0) + \\varepsilon = 1 + \\varepsilon$ for every $x \\in [0,1]$ and every real $\\varepsilon > 0$; any $\\delta$ works. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "cex-upper-semicontinuous-need-not-attain-its-infimum-step-1-2",
      "claim": "$f$ is upper semicontinuous at every $c \\in (0,1]$: taking $\\delta := \\min\\{c, \\varepsilon\\} > 0$, every $x \\in [0,1]$ with $|x - c| < \\delta$ satisfies $x > c - \\delta \\ge 0$, hence $x \\ne 0$ and $f(x) = x < c + \\varepsilon = f(c) + \\varepsilon$. [L1, L2]",
      "step": "1.2",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "cex-upper-semicontinuous-need-not-attain-its-infimum-step-1-3",
      "claim": "$f$ is bounded below by $0$ and $f(x) > 0$ for every $x \\in [0,1]$: for $x = 0$ the value is $1 > 0$, and for $0 < x \\le 1$ the value is $x > 0$. [L3]",
      "step": "1.3",
      "inputs": [
        "L3"
      ]
    },
    {
      "id": "cex-upper-semicontinuous-need-not-attain-its-infimum-step-2-1",
      "claim": "$\\inf f[\\,[0,1]\\,] = 0$: the set $f[\\,[0,1]\\,]$ is nonempty and bounded below by $0$ by step 1.3, so its infimum $\\ell$ exists and $\\ell \\ge 0$; and for every real $\\eta > 0$ there is a natural $n \\ge 1$ with $1/n < \\eta$, and then $f(1/n) = 1/n < \\eta$, so no positive real is a lower bound and $\\ell = 0$. [step 1.3, L3, L4]",
      "step": "2.1",
      "inputs": [
        "1.3",
        "L3",
        "L4"
      ]
    },
    {
      "id": "cex-upper-semicontinuous-need-not-attain-its-infimum-step-3-1",
      "claim": "$f$ has no minimum: a minimum would be a value $f(x_{0})$ that is a lower bound of $f[\\,[0,1]\\,]$, hence at most the infimum $0$; but every value of $f$ is strictly positive. [step 1.3, step 2.1, L3]",
      "step": "3.1",
      "inputs": [
        "1.3",
        "2.1",
        "L3"
      ]
    },
    {
      "id": "cex-upper-semicontinuous-need-not-attain-its-infimum-step-4-1",
      "claim": "So $f$ is upper semicontinuous on the nonempty compact set $[0,1]$, is bounded below, and attains no minimum, which refutes the claim. It does attain a maximum, $f(0) = 1 \\ge f(x)$ for every $x \\in [0,1]$, in agreement with the semicontinuous extreme value theorem. [step 1.1, step 1.2, step 3.1, L5] ∎",
      "step": "4.1",
      "inputs": [
        "1.1",
        "1.2",
        "3.1",
        "L5"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 2.1: the empty-object convention or its exclusion is explicit in the statement/proof."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "Zero is not a distinguished parameter or exceptional value in this statement."
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
      "status": "checked",
      "evidence": "step 1.1: domain endpoints and any one-sided interpretation are kept within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 2.1: each existential witness used here is supplied by the cited existence result or by the displayed formula/construction."
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
    "source": "cex-upper-semicontinuous-need-not-attain-its-infimum",
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
    "source": "cex-upper-semicontinuous-need-not-attain-its-infimum",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-semicontinuous-evt",
    "declared_target": "thm-semicontinuous-evt",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-upper-semicontinuous-need-not-attain-its-infimum",
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
    "source": "cex-upper-semicontinuous-need-not-attain-its-infimum",
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
    "source": "cex-upper-semicontinuous-need-not-attain-its-infimum",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
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
    "source": "cex-upper-semicontinuous-need-not-attain-its-infimum",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-infimum-property",
    "declared_target": "thm-infimum-property",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-upper-semicontinuous-need-not-attain-its-infimum",
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
    "source": "cex-upper-semicontinuous-need-not-attain-its-infimum",
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
    "source": "cex-upper-semicontinuous-need-not-attain-its-infimum",
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
    "source": "cex-upper-semicontinuous-need-not-attain-its-infimum",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
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
    "source": "cex-upper-semicontinuous-need-not-attain-its-infimum",
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
    "source": "cex-upper-semicontinuous-need-not-attain-its-infimum",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (12)

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

### `thm-semicontinuous-evt`

````markdown
---
id: thm-semicontinuous-evt
kind: theorem
title: "Semicontinuous extreme value theorem: an upper semicontinuous function on a nonempty compact $K \\subseteq \\mathbb{R}$ is bounded above and attains a maximum, and a lower semicontinuous one is bounded below and attains a minimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-semicontinuity, thm-semicontinuity-level-set-characterisation, def-open-cover-r, def-max-min, def-bounded-set, lem-sup-epsilon, def-complete-ordered-field, cor-archimedean-reciprocal, def-open-and-closed-in-r, lem-finite-set-has-max, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: [thm-usc-attains-maximum]
landmark: true
short: "semicontinuous extreme value theorem"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "Upper Semicontinuous Function on Compact Space Attains Maximum (ProofWiki)"
      url: "https://proofwiki.org/wiki/Real-Valued_Upper_Semicontinuous_Function_on_Compact_Space_attains_Maximum_with_Compact_Set_of_Maximizers"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be nonempty and compact ([[def-open-cover-r]]).

1. If $f : K \to \mathbb{R}$ is upper semicontinuous on $K$
   ([[def-semicontinuity]]) then $f[K]$ is bounded above
   ([[def-bounded-set]]) and $f$ attains a maximum: there is $x_0 \in K$ with
   $f(x) \le f(x_0)$ for every $x \in K$ ([[def-max-min]]).
2. If $f : K \to \mathbb{R}$ is lower semicontinuous on $K$ then $f[K]$ is
   bounded below and $f$ attains a minimum.

**The theorem is genuinely one-sided.** An upper semicontinuous function on a
compact set need be neither bounded below nor a function attaining its infimum;
the companion page gives such a function on $[0,1]$. Only the maximum is
asserted in claim 1, and only the minimum in claim 2.

Taking $f$ continuous, which is upper and lower semicontinuous at once
([[def-semicontinuity]]), recovers the classical extreme value theorem on a
compact subset of $\mathbb{R}$.

## Facts & Assumptions

**Given:** A nonempty compact $K \subseteq \mathbb{R}$ and an upper semicontinuous $f : K \to \mathbb{R}$.

[L1] For every real $\alpha$ there is an open $U_\alpha \subseteq \mathbb{R}$ with $U_\alpha \cap K = \{\, x \in K : f(x) < \alpha \,\}$, namely $U_\alpha = \{y \in \mathbb{R} : K \cap N_\rho(y) \subseteq \{f < \alpha\}$ for some real $\rho > 0\}$ ([[thm-semicontinuity-level-set-characterisation]], [[def-semicontinuity]], [[def-open-and-closed-in-r]]).

[L2] The set $U_\alpha$ of [L1] is monotone in $\alpha$: $\alpha \le \beta$ gives $\{f < \alpha\} \subseteq \{f < \beta\}$ and hence $U_\alpha \subseteq U_\beta$, directly from the displayed description.

[L3] $K$ compact means: every family of open subsets of $\mathbb{R}$ whose union contains $K$ has a finite subfamily whose union contains $K$ ([[def-open-cover-r]]).

[L4] For every real $x$ there is a natural $n \ge 1$ with $x < \iota(n)$, and for every real $\eta > 0$ a natural $n \ge 1$ with $1/\iota(n) < \eta$; $\iota$ is positive and strictly increasing on the naturals $\ge 1$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L5] A nonempty set of reals bounded above has a least upper bound, and for every real $\varepsilon > 0$ some member of the set exceeds $\sup - \varepsilon$ ([[def-complete-ordered-field]], [[lem-sup-epsilon]], [[def-bounded-set]]).

[L6] A nonempty finite set of reals has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L7] For any $h : K \to \mathbb{R}$, $h$ is upper semicontinuous if and only if $-h$ is lower semicontinuous; hence a lower semicontinuous $f$ makes $-f$ upper semicontinuous ([[def-semicontinuity]], section “Negation exchanges the two”).

## Proof

**Proof technique:** direct.

1.1 For each real $\alpha$ let $U_\alpha$ be the open set of [L1], so that $U_\alpha \cap K = \{x \in K : f(x) < \alpha\}$ and $\alpha \le \beta$ implies $U_\alpha \subseteq U_\beta$. [L1, L2, construct]

2.1 The family $\{\, U_{\iota(n)} : n \in \mathbb{N},\ n \ge 1 \,\}$ covers $K$: every $x \in K$ has $f(x) < \iota(n)$ for some natural $n \ge 1$, and then $x \in U_{\iota(n)}$. [step 1.1, L4]

3.1 By compactness finitely many members cover $K$, say $U_{\iota(n_0)}, \dots, U_{\iota(n_j)}$ with each $n_i \ge 1$; let $N$ be the greatest of $\iota(n_0), \dots, \iota(n_j)$, which exists as the maximum of a nonempty finite set of reals. Then each $U_{\iota(n_i)} \subseteq U_{N}$, so $K \subseteq U_{N}$ and hence $K = U_{N} \cap K = \{x \in K : f(x) < N\}$. So $f[K]$ is bounded above by $N$. [step 1.1, step 2.1, L2, L3, L6]

4.1 $f[K]$ is nonempty, since $K$ is, and bounded above, so $M := \sup f[K]$ exists. [step 3.1, L5]

5.1 For each natural $n \ge 1$ put $\alpha_n := M - 1/\iota(n)$. The family $\{\, U_{\alpha_n} : n \ge 1 \,\}$ has **no** finite subfamily covering $K$. Indeed, let $U_{\alpha_{n_0}}, \dots, U_{\alpha_{n_j}}$ be finitely many of them; if the list is empty its union is empty and does not contain the nonempty $K$. Otherwise let $n^{*}$ be a natural among $n_0, \dots, n_j$ with $\alpha_{n^{*}}$ greatest, so that every member of the list is contained in $U_{\alpha_{n^{*}}}$. Since $\alpha_{n^{*}} < M = \sup f[K]$, there is $x \in K$ with $f(x) > \alpha_{n^{*}}$, and such an $x$ lies in $K$ but not in $U_{\alpha_{n^{*}}} \cap K = \{f < \alpha_{n^{*}}\}$, hence in no member of the list. [step 1.1, step 4.1, L2, L4, L5, L6]

6.1 By compactness, a family of open sets with no finite subfamily covering $K$ cannot itself cover $K$. So there is $x_{0} \in K$ with $x_{0} \notin U_{\alpha_n}$ for every natural $n \ge 1$, that is $f(x_{0}) \ge \alpha_n = M - 1/\iota(n)$ for every such $n$. [step 1.1, step 5.1, L3]

7.1 Hence $f(x_{0}) = M$. If $f(x_{0}) < M$ then $M - f(x_{0}) > 0$ and there is a natural $n \ge 1$ with $1/\iota(n) < M - f(x_{0})$, that is $f(x_{0}) < M - 1/\iota(n)$, contradicting step 6.1; and $f(x_{0}) \le M$ because $M$ is an upper bound of $f[K]$. [step 4.1, step 6.1, L4, L5]

8.1 So $f$ is bounded above on $K$ and attains the value $M = \sup f[K]$ at $x_{0} \in K$, which is a maximum of $f[K]$: this is claim 1. [step 3.1, step 4.1, step 7.1, L5]

9.1 Claim 2 follows by applying claim 1 to $-f$, which is upper semicontinuous on $K$ when $f$ is lower semicontinuous; then $-f$ is bounded above and attains a maximum at some $x_{1} \in K$, so $f$ is bounded below and $f(x_{1}) \le f(x)$ for every $x \in K$, a minimum. [step 8.1, L7] ∎

## Remarks

- **Where compactness is spent, and in which form.** Twice, and both times as the open-cover property of [[def-open-cover-r]]: once to bound $f$ above, once to find the point where the supremum is attained. No sequence is extracted and no countable choice is used; the second application is stated as the contrapositive of the covering property, which is why step 5.1 proves that no finite subfamily covers rather than assuming a limit point.

- **Semicontinuity cannot be dropped.** Both applications use only that the sets $\{f < \alpha\}$ are relatively open ([[thm-semicontinuity-level-set-characterisation]]), which is exactly upper semicontinuity, and nothing else about $f$ is used at all. A function whose strict sublevel sets are not relatively open can be unbounded above on a compact set: the function on $[0,1]$ equal to $1/x$ for $x \ne 0$ and to $0$ at $0$ is one.
````

