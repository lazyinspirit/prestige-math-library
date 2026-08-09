## Selection reasons

- critical risk (8): 5 declared dependencies; 4 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-composition-of-continuous-functions`

Normalized current SHA-256: `26057eb404e0c9fdc7b048df8ee3f536336338e5e29fa4c8528a206dbdc74059`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-composition-of-continuous-functions
kind: theorem
title: "A composite of continuous functions is continuous, with no side hypothesis of the kind the composition of limits needs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, thm-composition-of-function-limits, fs-naive-composition-of-limits, def-function-limit, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "composition of continuous functions"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.7)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A, B \subseteq \mathbb{R}$, let $g : A \to \mathbb{R}$ with
$g(A) \subseteq B$, and let $f : B \to \mathbb{R}$, so that the composite
$f \circ g : A \to \mathbb{R}$ is defined. Let $c \in A$. If $g$ is continuous
at $c$ and $f$ is continuous at $g(c) \in B$, then $f \circ g$ is continuous at
$c$ ([[def-continuity-real]]).

Consequently, if $g$ is continuous on $A$ and $f$ is continuous on $B$, then
$f \circ g$ is continuous on $A$.

**No side hypothesis is needed, and that is the whole point.** The composition
theorem for limits, [[thm-composition-of-function-limits]], must assume one of
two extra conditions: either $L \in B$ with $f(L) = M$, or $g \ne L$ on a
punctured neighbourhood of $c$; with both dropped the statement is false, which
is [[fs-naive-composition-of-limits]]. The first of those conditions is exactly
*continuity of $f$ at $L$* written out, so under the hypotheses above it holds
automatically and nothing has to be assumed. The mechanism is visible in the
proof: [[def-continuity-real]] quantifies over $|y - b| < \rho$ rather than over
$0 < |y - b| < \rho$, so the value $y = b$ that the limit version cannot control
is precisely the one the continuity hypothesis does control.

## Facts & Assumptions

**Given:** Sets $A, B \subseteq \mathbb{R}$, functions $g : A \to \mathbb{R}$ with $g(A) \subseteq B$ and $f : B \to \mathbb{R}$, a point $c \in A$ at which $g$ is continuous, and the hypothesis that $f$ is continuous at $b := g(c) \in B$.

[L1] Continuity of $g$ at $c$: for every real $\rho > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|g(x) - g(c)| < \rho$ ([[def-continuity-real]]).

[L2] Continuity of $f$ at $b$: for every real $\varepsilon > 0$ there is a real $\rho > 0$ such that every $y \in B$ with $|y - b| < \rho$ satisfies $|f(y) - f(b)| < \varepsilon$ ([[def-continuity-real]]).

[L3] Neighbourhoods and the unpunctured quantifier: the condition in [L2] is imposed at every $y \in B$ with $|y - b| < \rho$, the value $y = b$ included ([[def-neighbourhood-r]], [[def-continuity-real]]).

## Proof

**Proof technique:** direct.

1.1 Write $b := g(c)$; by hypothesis $b \in B$, since $g(A) \subseteq B$ and $c \in A$. Also $(f \circ g)(c) = f(b)$. [given]

1.2 Let a real $\varepsilon > 0$ be given. By [L2] fix a real $\rho > 0$ such that every $y \in B$ with $|y - b| < \rho$ satisfies $|f(y) - f(b)| < \varepsilon$. [L2, choose]

2.1 By [L1], applied with this $\rho$, fix a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|g(x) - b| < \rho$. [step 1.2, L1, choose]

3.1 Let $x \in A$ with $|x - c| < \delta$. Then $g(x) \in B$ and $|g(x) - b| < \rho$ by step 2.1, so $y := g(x)$ is admissible in step 1.2 and gives $\bigl|f(g(x)) - f(b)\bigr| < \varepsilon$, that is $\bigl|(f \circ g)(x) - (f \circ g)(c)\bigr| < \varepsilon$. Note that the case $g(x) = b$ is included, by [L3]. [step 1.1, step 1.2, step 2.1, L3]

4.1 The real $\varepsilon > 0$ was arbitrary and a $\delta > 0$ was produced for it, so $f \circ g$ is continuous at $c$; applying this at every point of $A$ gives continuity of $f \circ g$ on $A$ whenever $g$ is continuous on $A$ and $f$ on $B$. [step 3.1, L1, L2] ∎

## Remarks

- **The contrast with limits, in one sentence.** [[thm-composition-of-function-limits]] cannot control $f$ at the single value $L$, because [[def-function-limit]] never evaluates $f$ there; continuity of $f$ at that value is exactly the missing information, and it is hypothesis (i) of that theorem. So the present theorem is not a strengthening obtained by cleverness: it is the composition theorem under the hypothesis that makes the obstruction vanish.

- **What is not claimed.** Continuity of $f \circ g$ at $c$ does not follow from continuity of $g$ at $c$ alone together with $f$ merely having a limit at $b$; nor does it follow from continuity of $f$ at $b$ together with $g$ merely having a limit at $c$, since then $g(c)$ need not be $b$ at all. Both hypotheses above are hypotheses about the same two points, $c$ and $g(c)$.
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-composition-of-continuous-functions",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
  ],
  "rationale": "The MIT notes state continuity of composite maps. The local statement has the same domain and pointwise hypotheses and contrasts them with punctured function limits; the proof is the standard epsilon-delta substitution.",
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
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$.",
      "uses": [
        "2.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$.",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Let $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with $\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "In the language of neighbourhoods: for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with $$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$ $f$ is **continuous on $A$** when it is continuous at every point of $A$.",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Write $b := g(c)$; by hypothesis $b \\in B$, since $g(A) \\subseteq B$ and $c \\in A$. Also $(f \\circ g)(c) = f(b)$.",
      "step": "1.1",
      "inputs": [
        "given"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Let a real $\\varepsilon > 0$ be given. By [L2] fix a real $\\rho > 0$ such that every $y \\in B$ with $|y - b| < \\rho$ satisfies $|f(y) - f(b)| < \\varepsilon$.",
      "step": "1.2",
      "inputs": [
        "L2",
        "choose"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "By [L1], applied with this $\\rho$, fix a real $\\delta > 0$ such that every $x \\in A$ with $|x - c| < \\delta$ satisfies $|g(x) - b| < \\rho$.",
      "step": "2.1",
      "inputs": [
        "1.2",
        "L1",
        "choose"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Let $x \\in A$ with $|x - c| < \\delta$. Then $g(x) \\in B$ and $|g(x) - b| < \\rho$ by step 2.1, so $y := g(x)$ is admissible in step 1.2 and gives $\\bigl|f(g(x)) - f(b)\\bigr| < \\varepsilon$, that is $\\bigl|(f \\circ g)(x) - (f \\circ g)(c)\\bigr| < \\varepsilon$. No",
      "step": "3.1",
      "inputs": [
        "1.1",
        "1.2",
        "2.1",
        "L3"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "The real $\\varepsilon > 0$ was arbitrary and a $\\delta > 0$ was produced for it, so $f \\circ g$ is continuous at $c$; applying this at every point of $A$ gives continuity of $f \\circ g$ on $A$ whenever $g$ is continuous on $A$ and $f$ on $B$.",
      "step": "4.1",
      "inputs": [
        "3.1",
        "L1",
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "If A=∅, continuity on A is vacuous; steps 1.1–4.1 are pointwise under c∈A and the final statement remains valid."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 3.1 explicitly includes g(x)=g(c), where the inner distance is 0, because continuity is unpunctured."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "The Statement has no cardinal, exponent, or normalization whose value 1 is a boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 3.1 covers the equality g(x)=g(c) rather than requiring a punctured image point."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The domains A and B are arbitrary subsets, not intervals with endpoints."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Steps 1.2 and 2.1 choose one radius from each of two given continuity statements for a fixed ε; this is finite existential instantiation."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `thm-composition-of-continuous-functions` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `thm-composition-of-continuous-functions` is not an equivalence, so it has no reverse iff direction."
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
    "source": "thm-composition-of-continuous-functions",
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
    "source": "thm-composition-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-composition-of-function-limits",
    "declared_target": "thm-composition-of-function-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-composition-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "fs-naive-composition-of-limits",
    "declared_target": "fs-naive-composition-of-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-composition-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-composition-of-continuous-functions",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (5)

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

### `fs-naive-composition-of-limits`

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

