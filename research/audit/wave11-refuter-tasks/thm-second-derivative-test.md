## Selection reasons

- high risk (5): 4 declared dependencies; 2 cited facts; existence, choice, uniqueness, or well-definedness

## Target item — `thm-second-derivative-test`

Normalized current SHA-256: `951b15b1ef3065c6b09a0e45c85ce0c1760f3666174bf5256fc066e8269cc374`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-second-derivative-test
kind: theorem
title: "The second-derivative test for strict local extrema"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-higher-derivatives-and-smoothness, thm-monotonicity-from-the-derivative, def-continuity-real, def-derivative]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
pipeline_run: null
---

## Statement

Suppose $f'(c)=0$ and $f''$ exists and is continuous near $c$. If $f''(c)>0$, then $c$ is a strict local minimum; if $f''(c)<0$, then $c$ is a strict local maximum.

## Facts & Assumptions

**Given:** The hypotheses at $c$.

[L1] Continuity preserves a strict sign on a sufficiently small neighbourhood ([[def-continuity-real]]).

[L2] A positive derivative gives strict increase and a negative derivative gives strict decrease ([[thm-monotonicity-from-the-derivative]]).

## Proof

**Proof technique:** cases.

1.1 If $f''(c)>0$, [L1] gives an interval about $c$ on which $f''>0$. Hence $f'$ is strictly increasing there; since $f'(c)=0$, $f'<0$ to the left and $f'>0$ to the right.  [assume-case positive, L1, L2]

1.2 If $f''(c)<0$, apply the preceding argument to $-f$; this gives a strict local maximum.  [assume-case negative, L1, L2]

2.1 Applying [L2] to $f$, it decreases toward $c$ from the left and increases away from $c$ on the right, so $c$ is a strict local minimum.  [step 1.1, L2]

3.1 The two stated sign cases are exhausted.  [step 2.1, step 1.2, cases-exhaustive] ∎
````

## Wave 11 provenance row

```json
{
  "id": "thm-second-derivative-test",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_taylor.html"
  ],
  "rationale": "The source gives the same pointwise second-derivative test: f'(c)=0 with positive or negative f''(c) yields a strict local minimum or maximum. The item proves it through derivative monotonicity under the same weak pointwise hypothesis.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field with its order and\nabsolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and\nneighbourhoods are those of [[def-neighbourhood-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then\n$f$ is **continuous at $c$** when\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - f(c)| < \\varepsilon\\ \\bigr],$$\n\nwith $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the\nlanguage of neighbourhoods: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ with\n\n$$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$\n\n$f$ is **continuous on $A$** when it is continuous at every point of $A$.\n\n**The point $c$ is required to lie in $A$, and the condition is unpunctured.**\nBoth differ from [[def-function-limit]], and deliberately. There the quantifier\nruns over $0 < |x - c| < \\delta$, which removes $x = c$; here $x = c$ is allowed,\nand at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \\varepsilon$, which is\nautomatic. So allowing $x = c$ costs nothing, and it is what lets the definition\nbe stated at every point of $A$, including the points where no limit exists.\n\n**Three clauses, and all three are part of the definition.**\n\n1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$\n   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the\n   limit of $f$ at $c$ exists and\n   $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$\n   ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$\n   witnessing continuity witnesses the limit condition, because the limit\n   condition quantifies over a subset of the points continuity quantifies over;\n   and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses\n   continuity, because the one point it omits, $x = c$, satisfies\n   $|f(c) - f(c)| < \\varepsilon$ anyway.\n\n2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$\n   ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real\n   $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take\n   $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$\n   itself, and $|f(c) - f(c)| = 0 < \\varepsilon$.\n\n3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and\n   nothing more. It is not a condition relating $f$ to points outside $A$.\n\nEvery point of $A$ is either a limit point of $A$ or an isolated point of $A$,\nand never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe\ncontinuity at every point of $A$.\n\n**This is not the raw $\\varepsilon$-$\\delta$ formula of\n[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes\nwrong when the *punctured* formula of [[def-function-limit]] is written down at\nan arbitrary point of the domain: at an isolated point it is satisfied\nvacuously by every real $L$ at once, so it defines nothing, and this library\ntherefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point.\nContinuity at an isolated point is a different matter: the formula above is not\nvacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the\nonly value being compared with itself — and it names a single, well-defined\nproperty. The limit is undefined there; the continuity is defined, and is\nautomatic. Clause 1 is the only place where the two notions meet, and it is\nstated only where the limit exists as a notion.\n\n**Where the distinction disappears.** If $A$ is an open subset of $\\mathbb{R}$\n([[def-open-and-closed-in-r]]), then every $c \\in A$ has some\n$N_{\\eta}(c) \\subseteq A$, and a punctured neighbourhood is never empty\n([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and\nclause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate\ninterval ([[def-interval]]). Isolated points are what force clause 2 to exist at\nall, and they occur as soon as $A$ is allowed to be an arbitrary subset of\n$\\mathbb{R}$, as in $A = \\{0\\} \\cup [1,2]$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-monotonicity-from-the-derivative",
      "source_section": "Statement",
      "quote": "Let $I \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]), let\n$f : I \\to \\mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and\ndifferentiable at every point of $I$ interior to $I$\n([[def-interior-closure-boundary-r]], [[def-derivative]]). The words\n*nondecreasing*, *increasing*, *nonincreasing* and *decreasing* are those of\n[[def-monotone-function]], in which *increasing* is the strict notion.\n\n1. If $f'(x) \\ge 0$ at every interior point $x$ of $I$, then $f$ is\n   nondecreasing on $I$.\n2. If $f'(x) > 0$ at every interior point $x$ of $I$, then $f$ is increasing on\n   $I$.\n3. If $f'(x) \\le 0$ at every interior point $x$ of $I$, then $f$ is\n   nonincreasing on $I$.\n4. If $f'(x) < 0$ at every interior point $x$ of $I$, then $f$ is decreasing on\n   $I$.\n\nConversely, with no continuity hypothesis and no hypothesis at any other point:\n\n5. If $f : I \\to \\mathbb{R}$ is nondecreasing on $I$ and differentiable at a\n   point $c \\in I$ that is a limit point of $I$, then $f'(c) \\ge 0$; if $f$ is\n   nonincreasing and differentiable at such a $c$, then $f'(c) \\le 0$.\n\n**No strict converse is claimed here, and none is true.** Claim 5 gives the\nweak inequality only, and it cannot be improved: an increasing function may have\na vanishing derivative at a point. That failure is recorded separately, as a\nfalse statement later on this page, with its witness worked out on the companion\npage. Reading claim 2 backwards is the single most common misuse of this\ntheorem, and this statement does not license it.\n\n**Claims 1 to 4 need the interval; claim 5 does not.** The forward direction\nruns through the mean value theorem on a segment joining two points of $I$, so\norder-convexity is essential. Claim 5 is a statement about one point and uses\nonly that the difference quotients have a constant sign.",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-second-derivative-test-step-1-1",
      "claim": "If $f''(c)>0$, [L1] gives an interval about $c$ on which $f''>0$. Hence $f'$ is strictly increasing there; since $f'(c)=0$, $f'<0$ to the left and $f'>0$ to the right. [assume-case positive, L1, L2]",
      "step": "1.1",
      "inputs": [
        "assume-case positive",
        "L1",
        "L2"
      ]
    },
    {
      "id": "thm-second-derivative-test-step-1-2",
      "claim": "If $f''(c)<0$, apply the preceding argument to $-f$; this gives a strict local maximum. [assume-case negative, L1, L2]",
      "step": "1.2",
      "inputs": [
        "assume-case negative",
        "L1",
        "L2"
      ]
    },
    {
      "id": "thm-second-derivative-test-step-2-1",
      "claim": "Applying [L2] to $f$, it decreases toward $c$ from the left and increases away from $c$ on the right, so $c$ is a strict local minimum. [step 1.1, L2]",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L2"
      ]
    },
    {
      "id": "thm-second-derivative-test-step-3-1",
      "claim": "The two stated sign cases are exhausted. [step 2.1, step 1.2, cases-exhaustive] ∎",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "step 1.2",
        "cases-exhaustive"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-second-derivative-test concerns stipulated functions and points; no empty family, empty sum, or empty choice domain changes its assertion."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-second-derivative-test has no counting, exponent, or value parameter whose zero case changes the proof."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-second-derivative-test has no counting, exponent, or unit parameter whose one case changes the proof."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-second-derivative-test has no interval-length or denominator parameter that may collapse degenerately."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "thm-second-derivative-test contains no interval-endpoint assertion requiring a separate endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.2 establishes or explicitly fixes the object before the proof chooses or extremizes it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of thm-second-derivative-test is not a biconditional, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of thm-second-derivative-test is not a biconditional, so it has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the published A2 contract; independent risk routing occurs after A3."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-second-derivative-test",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-higher-derivatives-and-smoothness",
    "declared_target": "def-higher-derivatives-and-smoothness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "darboux-lhopital-and-taylor",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-second-derivative-test",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "thm-monotonicity-from-the-derivative",
    "declared_target": "thm-monotonicity-from-the-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-second-derivative-test",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
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
    "source": "thm-second-derivative-test",
    "sourcePage": "darboux-lhopital-and-taylor",
    "batch": "wave11-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (4)

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

### `def-derivative`

````markdown
---
id: def-derivative
kind: definition
title: "The derivative $f'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c}$ of $f : A \\to \\mathbb{R}$ at a point $c \\in A$ that is a limit point of $A$, and differentiability on a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-interval, def-neighbourhood-r, def-complete-ordered-field, def-continuity-real, lem-limit-is-local]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: [def-differentiable, def-differentiability]
landmark: true
short: "the derivative at a point"
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
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Def. 5.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §10.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), neighbourhoods are those of
[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}, \qquad q_{f,c}(x) := \frac{f(x) - f(c)}{x - c} .$$

The division is legitimate at every point of the domain, since $x \ne c$ gives
$x - c \ne 0$.

**The point $c$ is a limit point of $A \setminus \{c\}$, not merely of $A$.**
For every real $\varepsilon > 0$ the punctured neighbourhood
$N^{*}_{\varepsilon}(c)$ omits $c$, so

$$N^{*}_{\varepsilon}(c) \cap A \;=\; N^{*}_{\varepsilon}(c) \cap (A \setminus \{c\}) ,$$

and the left-hand side is nonempty because $c$ is a limit point of $A$. So
$q_{f,c}$ is a function on a set having $c$ as a limit point, and
$\lim_{x \to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.

$f$ is **differentiable at $c$** when that limit exists, and then the
**derivative of $f$ at $c$** is

$$f'(c) \;:=\; \lim_{x \to c} q_{f,c}(x) \;=\; \lim_{x \to c} \frac{f(x) - f(c)}{x - c} .$$

**Two obligations are carried by that notation, and both are discharged here.**

1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a
   single real number. That is legitimate: $c$ is a limit point of the domain
   $A \setminus \{c\}$ of $q_{f,c}$, so at most one real can satisfy the
   $\varepsilon$-$\delta$ condition, by [[lem-function-limit-unique]] applied to
   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the
   symbol denotes.
2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not
   decoration. At an **isolated** point of $A$ the punctured condition
   $0 < |x - c| < \delta$ is met by no point of the domain at all, so the
   $\varepsilon$-$\delta$ formula is satisfied vacuously by *every* real at
   once; this is why [[def-function-limit]] leaves the limit undefined there,
   and it is why this library defines $f'(c)$ only at a limit point of $A$. At
   an isolated point of its domain a function is neither differentiable nor
   non-differentiable here: the question is not posed.

**The limit sees only $A \setminus \{c\}$, so how the difference quotient is
extended to $c$ is irrelevant.** Let $Q : A \to \mathbb{R}$ agree with
$q_{f,c}$ at every point of $A \setminus \{c\}$, and let $L \in \mathbb{R}$.
Then $\lim_{x \to c} Q(x) = L$ if and only if $\lim_{x \to c} q_{f,c}(x) = L$.
Both conditions read: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that every point $x$ of the relevant domain with
$0 < |x - c| < \delta$ satisfies $|{\cdot} - L| < \varepsilon$
([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both
quantifiers, so in both cases the points quantified over are exactly the
$x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$, at which $Q$ and
$q_{f,c}$ take the same value. The two conditions are the same condition.

**Differentiability on a set.** For $S \subseteq A$, $f$ is **differentiable on
$S$** when it is differentiable at every $c \in S$; implicit in that phrase is
that every point of $S$ is a limit point of $A$. $f$ is **differentiable** when
it is differentiable on the whole of $A$.

**Restriction of the domain.** Let $B \subseteq A$, let $c \in B$ and suppose
$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the
restriction $f|_B : B \to \mathbb{R}$, and

$$(f|_B)'(c) \;=\; f'(c) .$$

Indeed $B \setminus \{c\} \subseteq A \setminus \{c\}$; the displayed identity
of punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit
point of $B \setminus \{c\}$; the difference quotient $q_{f|_B, c}$ is the
restriction of $q_{f,c}$ to $B \setminus \{c\}$, since $f|_B(c) = f(c)$; and
claim 2 of [[lem-limit-is-local]] carries the limit to that restriction.

**Every point of a nondegenerate interval is a limit point of it.** Let
$J \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) with at least two
elements and let $p \in J$. Choose $q \in J$ with $q \ne p$, and let a real
$\varepsilon > 0$ be given. If $p < q$, put $y := p + \tfrac{1}{2}\min\{\varepsilon,\ q - p\}$;
then $p < y$, and $y - p \le \tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and
order-convexity gives $y \in J$, while $0 < |y - p| < \varepsilon$. If $q < p$,
the point $y := p - \tfrac{1}{2}\min\{\varepsilon,\ p - q\}$ serves in the same
way. So $N^{*}_{\varepsilon}(p) \cap J \ne \varnothing$ for every real
$\varepsilon > 0$, that is, $p$ is a limit point of $J$
([[def-limit-point-r]]).

Consequently, for $f$ defined on a nondegenerate interval $I$, the symbol
$f'(c)$ is meaningful at **every** $c \in I$, endpoints included. At an endpoint
the difference quotient is taken over the points of $I$ lying on the one side
that is available, so what other texts call a one-sided derivative is, here,
simply the derivative of $f$ on $I$.

## Remarks

- **Notation.** $f'(c)$ and $\frac{df}{dx}(c)$ denote the same real number, and
  this library uses the first. Neither is an operation performed on a symbol
  $x$: the variable in the second is a name for the argument and nothing more.

- **Differentiability is a property of the pair $(f, A)$ at $c$, not of $f$
  alone.** The restriction clause above goes in one direction only, and the
  converse fails. Take $A := \mathbb{R}$, $f(x) := |x|$, $B := [0,\infty)$ and
  $c := 0$. Then $f|_B$ is the identity on $B$, whose difference quotient at $0$
  is constantly $1$, so $f|_B$ is differentiable at $0$ with derivative $1$;
  that $f$ itself is not differentiable at $0$ is
  [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page.
  So enlarging the domain can destroy differentiability, and the phrase
  "$f$ is differentiable at $c$" always carries the domain with it.

- **The relation to continuity is not definitional.** [[def-continuity-real]]
  is a condition on $f$ near $c$ that does not mention a quotient, and it is
  defined at every point of $A$, isolated points included, whereas
  differentiability is defined only at limit points of $A$. That
  differentiability implies continuity is a theorem on this page and not a
  reading of the definitions.

- **No second derivative and no one-sided derivative is introduced here.**
  Both are standard, and both are absent from this page on purpose;
  [[rem-derivative-conventions]] records exactly what is fixed and what is left
  open at this point in the reading order.
````

### `def-higher-derivatives-and-smoothness`

````markdown
---
id: def-higher-derivatives-and-smoothness
kind: definition
title: "Higher derivatives and the classes $C^k$ and $C^\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-derivative, def-continuity-real, def-one-sided-limits, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Definition

Let $I\subseteq\mathbb R$ be an interval and $f:I\to\mathbb R$. Put $f^{(0)}:=f$. Recursively, wherever $f^{(j)}$ is differentiable, put $f^{(j+1)}:=(f^{(j)})'$, with derivatives at endpoints understood in the one-sided sense fixed by [[def-derivative]] and [[def-one-sided-limits]].

For $k\in\mathbb N$, the function is **$k$-times differentiable** on $I$ if $f^{(j)}$ exists on $I$ for every $j\le k$. It is of class **$C^k$** on $I$ if these derivatives exist and every $f^{(j)}$, $0\le j\le k$, is continuous on $I$ ([[def-continuity-real]]). It is **smooth**, or $C^\infty$, if it is $C^k$ for every $k\in\mathbb N$.

Since $0\in\mathbb N$ ([[def-natural-numbers]]), $C^0$ means continuity. The definitions also give $C^{k+1}\subseteq C^k$. Existence of $f^{(k)}$ alone does not assert that $f^{(k)}$ is continuous.
````

### `thm-monotonicity-from-the-derivative`

````markdown
---
id: thm-monotonicity-from-the-derivative
kind: theorem
title: "On an interval $I$, for $f$ continuous on $I$ and differentiable at every interior point: $f' \\ge 0$ throughout gives $f$ nondecreasing, $f' > 0$ gives $f$ increasing, $f' \\le 0$ and $f' < 0$ give the two decreasing forms; conversely a nondecreasing $f$ has $f' \\ge 0$ and a nonincreasing $f$ has $f' \\le 0$ wherever it is differentiable, and no strict converse is claimed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-mean-value-theorem, def-derivative, def-monotone-function, def-interval, def-continuity-real, lem-function-limit-preserves-order, def-function-limit, def-interior-closure-boundary-r, lem-of-sign-rules, lem-of-inverse-positive, def-ordered-field, def-neighbourhood-r, def-limit-point-r]
justified_by: []
aliases: [thm-derivative-sign-and-monotonicity]
landmark: true
short: "sign of $f'$ and monotonicity"
proof_strategy: direct
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.11)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, Mean Value Theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]), let
$f : I \to \mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and
differentiable at every point of $I$ interior to $I$
([[def-interior-closure-boundary-r]], [[def-derivative]]). The words
*nondecreasing*, *increasing*, *nonincreasing* and *decreasing* are those of
[[def-monotone-function]], in which *increasing* is the strict notion.

1. If $f'(x) \ge 0$ at every interior point $x$ of $I$, then $f$ is
   nondecreasing on $I$.
2. If $f'(x) > 0$ at every interior point $x$ of $I$, then $f$ is increasing on
   $I$.
3. If $f'(x) \le 0$ at every interior point $x$ of $I$, then $f$ is
   nonincreasing on $I$.
4. If $f'(x) < 0$ at every interior point $x$ of $I$, then $f$ is decreasing on
   $I$.

Conversely, with no continuity hypothesis and no hypothesis at any other point:

5. If $f : I \to \mathbb{R}$ is nondecreasing on $I$ and differentiable at a
   point $c \in I$ that is a limit point of $I$, then $f'(c) \ge 0$; if $f$ is
   nonincreasing and differentiable at such a $c$, then $f'(c) \le 0$.

**No strict converse is claimed here, and none is true.** Claim 5 gives the
weak inequality only, and it cannot be improved: an increasing function may have
a vanishing derivative at a point. That failure is recorded separately, as a
false statement later on this page, with its witness worked out on the companion
page. Reading claim 2 backwards is the single most common misuse of this
theorem, and this statement does not license it.

**Claims 1 to 4 need the interval; claim 5 does not.** The forward direction
runs through the mean value theorem on a segment joining two points of $I$, so
order-convexity is essential. Claim 5 is a statement about one point and uses
only that the difference quotients have a constant sign.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ and a function $f : I \to \mathbb{R}$; for claims 1 to 4 also that $f$ is continuous on $I$ and differentiable at every interior point of $I$, with the stated sign condition; for claim 5 that $f$ is monotone on $I$ and differentiable at a limit point $c \in I$ of $I$.

[L1] Mean value theorem ([[cor-mean-value-theorem]]): for $u < v$ and $h : [u,v] \to \mathbb{R}$ continuous on $[u,v]$ and differentiable at every point of $(u,v)$, there is $c \in (u,v)$ with $h(v) - h(u) = h'(c)(v-u)$.

[L2] Order-convexity ([[def-interval]]): $u, v \in I$ with $u \le v$ gives $[u,v] \subseteq I$; and for $u < v$ in $I$ every $x \in (u,v)$ is interior to $I$, since $N_{\varepsilon}(x) \subseteq (u,v) \subseteq I$ for $\varepsilon := \min\{x-u,\ v-x\} > 0$ ([[def-neighbourhood-r]], [[def-interior-closure-boundary-r]]).

[L3] Difference quotient and restriction of the domain ([[def-derivative]]): differentiability of $h$ at $p$ means that $q(x) := (h(x)-h(p))/(x-p)$ on $A \setminus \{p\}$ has limit $h'(p)$; if $B \subseteq A$, if $p \in B$ is a limit point of $B$ and if $h : A \to \mathbb{R}$ is differentiable at $p$, then $h|_B$ is differentiable at $p$ with the same derivative; and every point of an order-convex set with at least two elements is a limit point of it ([[def-limit-point-r]]).

[L4] Continuity passes to a subset of the domain ([[def-continuity-real]]).

[L5] Monotone vocabulary ([[def-monotone-function]]): $f$ is nondecreasing on $I$ when $f(x) \le f(y)$ for all $x, y \in I$ with $x \le y$; increasing when $f(x) < f(y)$ for all $x < y$; nonincreasing and decreasing are the two conditions with the inequalities on the values reversed.

[L6] Order arithmetic ([[lem-of-sign-rules]], [[lem-of-inverse-positive]], [[def-ordered-field]]): for reals $s$ and $t$ with $t > 0$, $s > 0$ gives $st > 0$, $s < 0$ gives $st < 0$ and $s = 0$ gives $st = 0$, so by trichotomy $s \ge 0$ gives $st \ge 0$ and $s \le 0$ gives $st \le 0$; a nonzero real and its inverse have the same sign, so a quotient $s/t$ with $s \ge 0$ and $t > 0$, or with $s \le 0$ and $t < 0$, is $\ge 0$, and a quotient with $s \le 0$ and $t > 0$, or with $s \ge 0$ and $t < 0$, is $\le 0$.

[L7] Limits preserve the non-strict order ([[lem-function-limit-preserves-order]]): if $h_1, h_2$ are functions on a set $D$ having $c$ as a limit point, if both limits at $c$ exist and if $h_1 \le h_2$ at every $x \in D$ with $0 < |x - c| < \eta$ for some real $\eta > 0$, then $\lim_{x \to c} h_1(x) \le \lim_{x \to c} h_2(x)$. The constant function $0$ on $D$ has limit $0$ at $c$ ([[def-function-limit]]).

## Proof

**Proof technique:** direct.

1.1 If $I$ has at most one element then all four of the conditions in [L5] hold on $I$ vacuously or trivially, since there is no pair $x < y$ in $I$, and claims 1 to 4 are immediate. So assume $I$ has at least two elements, and let $u, v \in I$ with $u < v$ be arbitrary. [given, L5]

1.2 **Claim 5.** Let $f$ be nondecreasing on $I$ and differentiable at a limit point $c \in I$ of $I$, and let $q(x) := (f(x)-f(c))/(x-c)$ on $I \setminus \{c\}$, so $\lim_{x \to c} q(x) = f'(c)$ by [L3]. For $x \in I$ with $x > c$ one has $f(x) \ge f(c)$ by [L5], so the numerator is $\ge 0$ while the denominator $x - c$ is $> 0$, and [L6] gives $q(x) \ge 0$. For $x \in I$ with $x < c$ one has $f(x) \le f(c)$, so the numerator is $\le 0$ while $x - c < 0$, and [L6] again gives $q(x) \ge 0$. So the constant function $0$ is $\le q$ at every point of $I \setminus \{c\}$, in particular at every such point with $0 < |x - c| < 1$; both functions have limits at the limit point $c$ of $I \setminus \{c\}$, namely $0$ and $f'(c)$, so [L7] gives $0 \le f'(c)$. The nonincreasing case is the same argument with both inequalities on the values reversed, which makes $q \le 0$ throughout and hence $f'(c) \le 0$. [L3, L5, L6, L7]

2.1 By [L2] the segment $[u,v]$ is contained in $I$ and is nondegenerate. The restriction $f|_{[u,v]}$ is continuous on $[u,v]$ by [L4]; and for $x \in (u,v)$ the point $x$ is interior to $I$ by [L2], so $f$ is differentiable at $x$, while $x$ is a limit point of $[u,v]$ by [L3], so $f|_{[u,v]}$ is differentiable at $x$ with $(f|_{[u,v]})'(x) = f'(x)$. [step 1.1, L2, L3, L4]

3.1 By step 2.1 the function $f|_{[u,v]}$ satisfies the hypotheses of [L1] on $[u,v]$, so fix $c \in (u,v)$ with $f(v) - f(u) = f'(c)\,(v-u)$; and $v - u > 0$ since $u < v$. [step 2.1, L1, choose]

4.1 If $f'(x) \ge 0$ at every interior point of $I$ then in particular $f'(c) \ge 0$, so $f(v)-f(u) = f'(c)(v-u) \ge 0$ by [L6], that is $f(u) \le f(v)$. If $f'(x) > 0$ at every interior point then $f'(c) > 0$ and the same product is $> 0$, that is $f(u) < f(v)$. [step 3.1, L6]

4.2 If $f'(x) \le 0$ at every interior point then $f'(c) \le 0$ and $f(v)-f(u) \le 0$ by [L6], that is $f(u) \ge f(v)$. If $f'(x) < 0$ at every interior point then $f'(c) < 0$ and $f(v)-f(u) < 0$, that is $f(u) > f(v)$. [step 3.1, L6]

5.1 The pair $u < v$ in $I$ was arbitrary, so steps 4.1 and 4.2 establish exactly the four conditions of [L5]: for the two non-strict ones the case $u = v$ is the trivial equality $f(u) = f(u)$, and the two strict ones are conditions on pairs $u < v$ only. Claims 1 to 4 are proved. [step 1.1, step 4.1, step 4.2, L5]

6.1 Claims 1 to 4 are step 5.1 and claim 5 is step 1.2. [step 1.2, step 5.1] ∎

## Remarks

- **The forward direction is one application of the mean value theorem, and nothing more.** The sign of $f'$ at the single point the theorem produces is what decides the sign of the increment; no information about $f'$ anywhere else is used in a given comparison, and the hypothesis is imposed at every interior point only because the point produced cannot be located in advance.

- **Claim 5 is genuinely weaker than the converse of claim 2, and that is not a defect of the proof.** [[lem-function-limit-preserves-order]] destroys strictness in the limit, and no argument can restore it here, because the conclusion is false: an increasing function may have a vanishing derivative. The false statement recording that, and its witness on the companion page, are the honest form of what a reader is tempted to write.

- **What a vanishing derivative at every interior point gives** is the case $f' \ge 0$ and $f' \le 0$ together, hence nondecreasing and nonincreasing, hence constant. That is [[cor-zero-derivative-implies-constant]], proved directly above rather than deduced here, since the direct proof is shorter.
````

