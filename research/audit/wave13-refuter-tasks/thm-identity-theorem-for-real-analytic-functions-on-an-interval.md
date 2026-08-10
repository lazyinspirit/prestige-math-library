## Selection reasons

- critical risk (8): 5 declared dependencies; 5 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-identity-theorem-for-real-analytic-functions-on-an-interval`

Normalized current SHA-256: `3dc6ddab09b0a9c7f63740285141167dcd0c14849bcd745469490774fb22e6de`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-identity-theorem-for-real-analytic-functions-on-an-interval
kind: theorem
title: "Two real-analytic functions on an open interval that agree on a set with an accumulation point in that interval agree throughout the interval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical, def-real-analytic-function, thm-connected-subsets-of-r-are-intervals, def-connected-r, cor-power-series-sums-are-continuous]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Analytic function, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Analytic_function"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

Let $I\subseteq\mathbb R$ be an open interval and let $f,g:I\to\mathbb R$ be real analytic. If the agreement set $\{x\in I:f(x)=g(x)\}$ has an accumulation point $c$ lying inside $I$, then $f=g$ throughout $I$.

## Facts & Assumptions

**Given:** The interval, functions, agreement set, and interior accumulation point in the statement.

[L1] Subtracting local power-series representations shows directly that $h:=f-g$ is real analytic ([[def-real-analytic-function]]).

[L2] At a zero of a real-analytic function, the zero is isolated unless the function vanishes on a neighbourhood ([[lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical]]).

[L3] Every interval is connected: it has no decomposition into two nonempty separated sets, where each set must avoid the closure of the other ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]]).

[L4] Local power-series sums are continuous ([[cor-power-series-sums-are-continuous]]).

## Proof

**Proof technique:** direct.

1.1 Put $h:=f-g$. By [L1], $h$ is real analytic. The accumulating zeros and [L4] give $h(c)=0$, and this zero is not isolated; hence [L2] makes $h$ identically zero on a neighbourhood of $c$. [given, L1, L2, L4]

2.1 Let $V$ be the set of points of $I$ having a neighbourhood in $I$ on which $h$ vanishes. Step 1.1 makes $V$ nonempty, and its definition makes it relatively open. [step 1.1]

3.1 The complement $I\setminus V$ is also relatively open. Indeed, if $h(x)\ne0$, continuity gives a neighbourhood containing no zero and hence no point of $V$; if $h(x)=0$ but $x\notin V$, [L2] makes $x$ an isolated zero, and a sufficiently small neighbourhood again contains no point of $V$. [step 2.1, L2, L4]

4.1 Steps 2.1 and 3.1 make $V$ and $I\setminus V$ separated: every point of either set has a real neighbourhood disjoint from the other, so neither set meets the closure of the other. If $I\setminus V$ were nonempty, they would therefore disconnect the connected interval $I$, contrary to [L3]. Thus $V=I$ and $h=0$ throughout $I$, so $f=g$. [step 2.1, step 3.1, L3] ∎
````

## Wave 13 provenance row

```json
{
  "id": "thm-identity-theorem-for-real-analytic-functions-on-an-interval",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
  ],
  "rationale": "The sources give uniqueness or identity theorems for analytic functions from an accumulating zero set. The item specializes to an open real interval and propagates local vanishing by connectedness, so it is semantically sourced.",
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
      "source": "def-real-analytic-function",
      "source_section": "Definition",
      "quote": "Let $U\\subseteq\\mathbb R$ be open ([[def-open-and-closed-in-r]]). A function $f:U\\to\\mathbb R$ is **real analytic on $U$** if, for every $c\\in U$, there are a real $r>0$ and real coefficients $(a_n)_{n\\in\\mathbb N}$ such that $N_r(c)\\subseteq U$ and\n\n$$f(x)=\\sum_{n=0}^{\\infty}a_n(x-c)^n\\qquad(x\\in N_r(c)).$$\n\nThe representing series must converge throughout this neighbourhood ([[def-real-power-series-and-radius-of-convergence]], [[def-neighbourhood-r]]). The radius and coefficients may initially depend on $c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical",
      "source_section": "Statement",
      "quote": "Let $f$ be real analytic near $c$ and suppose $f(c)=0$. Exactly one of the following local alternatives holds:\n\n1. every coefficient in a power-series expansion of $f$ about $c$ is zero, so $f$ vanishes on a neighbourhood of $c$;\n2. there is a least $m\\ge1$ with $f^{(m)}(c)\\ne0$, and $c$ is an isolated zero of $f$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-connected-subsets-of-r-are-intervals",
      "source_section": "Statement",
      "quote": "Let $E \\subseteq \\mathbb{R}$. Then $E$ is connected ([[def-connected-r]]) if and\nonly if $E$ is **order-convex** ([[def-interval]]), that is, if and only if\n\n$$x, z \\in E \\text{ and } x \\le w \\le z \\;\\Longrightarrow\\; w \\in E .$$\n\n**On the word \"interval\".** Order-convexity is exactly the defining property\nthat [[def-interval]] proves for each of its nine forms, and in that sense the\ntheorem says that the connected subsets of $\\mathbb{R}$ are the intervals. The\nconverse classification, that every order-convex subset of $\\mathbb{R}$ is empty\nor one of the nine forms, is true and is explicitly **not proved anywhere in\nthis library**; [[def-interval]] records that omission in its own remarks. So\nthe statement proved below is the equivalence with order-convexity, and the\nphrase \"is an interval\" is to be read as \"is order-convex\" throughout this page.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-connected-r",
      "source_section": "Definition",
      "quote": "Let $A, B, E \\subseteq \\mathbb{R}$, with closure as in\n[[def-interior-closure-boundary-r]].\n\n- $A$ and $B$ are **separated** when\n  $$\\overline{A} \\cap B = \\varnothing \\quad \\text{and} \\quad A \\cap \\overline{B} = \\varnothing .$$\n- A **disconnection** of $E$ is a pair $(A,B)$ of nonempty separated sets with\n  $E = A \\cup B$.\n- $E$ is **disconnected** when it admits a disconnection, and **connected** when\n  it does not.\n\n**Separated is strictly stronger than disjoint.** Since $A \\subseteq\n\\overline{A}$ ([[def-interior-closure-boundary-r]]), the first displayed\ncondition already gives $A \\cap B \\subseteq \\overline{A} \\cap B = \\varnothing$,\nso separated sets are disjoint. The converse fails: $(0,1)$ and $[1,2)$ are\ndisjoint, yet every neighbourhood of $1$ meets $(0,1)$, so $1$ is an adherent\npoint of $(0,1)$ and lies in $\\overline{(0,1)}$\n([[thm-closure-characterisations-r]]), while $1 \\in [1,2)$; hence\n$\\overline{(0,1)} \\cap [1,2) \\ne \\varnothing$ and the pair is not separated.\nWhat separation adds to disjointness is exactly this: **neither set of a\nseparated pair may contain a point adherent to the other**, which is what makes\na disconnection a genuine splitting rather than a bookkeeping partition.\n\n**Separation does not ask the two closures to be disjoint.** Each condition\ntests one closure against the *other set*, never closure against closure. The\npair $(0,1)$, $(1,2)$ illustrates the difference and is separated: $[0,1]$ is a\nclosed set containing $(0,1)$, so $\\overline{(0,1)} \\subseteq [0,1]$\n([[def-open-and-closed-in-r]], [[def-interior-closure-boundary-r]]) and\n$\\overline{(0,1)} \\cap (1,2) = \\varnothing$; symmetrically\n$\\overline{(1,2)} \\subseteq [1,2]$ and $(0,1) \\cap \\overline{(1,2)} =\n\\varnothing$. The two closures nevertheless share the point $1$, so a definition\ndemanding $\\overline{A} \\cap \\overline{B} = \\varnothing$ would be a different and\nstrictly stronger condition, and it is not the one used here.",
      "quote_selection": "full-source-section",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-power-series-sums-are-continuous",
      "source_section": "Statement",
      "quote": "If $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ for $|x-c|<R$, then $f$ is continuous at every $x_0$ satisfying $|x_0-c|<R$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Put $h:=f-g$. By [L1], $h$ is real analytic. The accumulating zeros and [L4] give $h(c)=0$, and this zero is not isolated; hence [L2] makes $h$ identically zero on a neighbourhood of $c$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L4",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Let $V$ be the set of points of $I$ having a neighbourhood in $I$ on which $h$ vanishes. Step 1.1 makes $V$ nonempty, and its definition makes it relatively open.",
      "step": "2.1",
      "inputs": [
        "step 1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The complement $I\\setminus V$ is also relatively open. Indeed, if $h(x)\\ne0$, continuity gives a neighbourhood containing no zero and hence no point of $V$; if $h(x)=0$ but $x\\notin V$, [L2] makes $x$ an isolated zero, and a sufficiently small neighbourhood again contains no point of $V$.",
      "step": "3.1",
      "inputs": [
        "L2",
        "step 2.1",
        "L4"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Steps 2.1 and 3.1 make $V$ and $I\\setminus V$ separated: every point of either set has a real neighbourhood disjoint from the other, so neither set meets the closure of the other. If $I\\setminus V$ were nonempty, they would therefore disconnect the connected interval $I$, contrary to [L3]. Thus $V=I$ and $h=0$ throughout $I$, so $f=g$.",
      "step": "4.1",
      "inputs": [
        "step 2.1",
        "step 3.1",
        "L3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-identity-theorem-for-real-analytic-functions-on-an-interval: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Let $I\\subseteq\\mathbb R$ be an open interval and let $f,g:I\\to\\mathbb R$ be real analytic. If the agreement set $\\{x\\in I:f(x)=g(x)\\}$ has an accumulation point $c$ lying inside $I$, then $f=g$ throughout $I$."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 3.1: the proof explicitly handles the zero-valued parameter or zero object used by the statement."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-identity-theorem-for-real-analytic-functions-on-an-interval: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Let $I\\subseteq\\mathbb R$ be an open interval and let $f,g:I\\to\\mathbb R$ be real analytic. If the agreement set $\\{x\\in I:f(x)=g(x)\\}$ has an accumulation point $c$ lying inside $I$, then $f=g$ throughout $I$."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-identity-theorem-for-real-analytic-functions-on-an-interval: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: Let $I\\subseteq\\mathbb R$ be an open interval and let $f,g:I\\to\\mathbb R$ be real analytic. If the agreement set $\\{x\\in I:f(x)=g(x)\\}$ has an accumulation point $c$ lying inside $I$, then $f=g$ throughout $I$."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement: the assertion expressly restricts to the open/interior regime, leaving endpoint behaviour outside its quantifiers: Let $I\\subseteq\\mathbb R$ be an open interval and let $f,g:I\\to\\mathbb R$ be real analytic. If the agreement set $\\{x\\in I:f(x)=g(x)\\}$ has an accumulation point $c$ lying inside $I$, then $f=g$ throughout $I$."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "thm-identity-theorem-for-real-analytic-functions-on-an-interval: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: Let $I\\subseteq\\mathbb R$ be an open interval and let $f,g:I\\to\\mathbb R$ be real analytic. If the agreement set $\\{x\\in I:f(x)=g(x)\\}$ has an accumulation point $c$ lying inside $I$, then $f=g$ throughout $I$."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-identity-theorem-for-real-analytic-functions-on-an-interval: the Statement is not an equivalence, so there is no forward implication obligation: Let $I\\subseteq\\mathbb R$ be an open interval and let $f,g:I\\to\\mathbb R$ be real analytic. If the agreement set $\\{x\\in I:f(x)=g(x)\\}$ has an accumulation point $c$ lying inside $I$, then $f=g$ throughout $I$."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-identity-theorem-for-real-analytic-functions-on-an-interval: the Statement is not an equivalence, so there is no reverse implication obligation: Let $I\\subseteq\\mathbb R$ be an open interval and let $f,g:I\\to\\mathbb R$ be real analytic. If the agreement set $\\{x\\in I:f(x)=g(x)\\}$ has an accumulation point $c$ lying inside $I$, then $f=g$ throughout $I$."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-identity-theorem-for-real-analytic-functions-on-an-interval",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical",
    "declared_target": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-identity-theorem-for-real-analytic-functions-on-an-interval",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-real-analytic-function",
    "declared_target": "def-real-analytic-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-identity-theorem-for-real-analytic-functions-on-an-interval",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-connected-subsets-of-r-are-intervals",
    "declared_target": "thm-connected-subsets-of-r-are-intervals",
    "target_statement_provenance": "literature-derived",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-identity-theorem-for-real-analytic-functions-on-an-interval",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-connected-r",
    "declared_target": "def-connected-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-identity-theorem-for-real-analytic-functions-on-an-interval",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "cor-power-series-sums-are-continuous",
    "declared_target": "cor-power-series-sums-are-continuous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (5)

### `cor-power-series-sums-are-continuous`

````markdown
---
id: cor-power-series-sums-are-continuous
kind: corollary
title: "The sum of a real power series is continuous at every point strictly inside its interval of convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-power-series-uniform-on-compact-subintervals, thm-uniform-limit-continuous-real-functions, thm-algebra-of-continuous-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

If $f(x)=\sum_{n\ge0}a_n(x-c)^n$ for $|x-c|<R$, then $f$ is continuous at every $x_0$ satisfying $|x_0-c|<R$.

## Facts & Assumptions

**Given:** A power-series sum $f$ and a point $x_0$ strictly inside its radius.

[L1] The series converges uniformly on each closed interval strictly inside its radius ([[thm-power-series-uniform-on-compact-subintervals]]).

[L2] Every polynomial partial sum is continuous, since constants, the identity, powers, scalar multiples and finite sums are continuous ([[thm-algebra-of-continuous-functions]]).

[L3] A uniform limit of continuous real-valued functions is continuous ([[thm-uniform-limit-continuous-real-functions]]).

## Proof

**Proof technique:** direct.

1.1 Choose $\delta>0$ so small that $[x_0-\delta,x_0+\delta]$ lies strictly inside $|x-c|<R$. [given, choose]

1.2 The polynomial partial sums are continuous on this interval by [L2] and converge uniformly there to $f$ by [L1]. [L1, L2]

2.1 By [L3], $f$ is continuous on that interval, and in particular at $x_0$. [step 1.2, L3] ∎
````

### `def-connected-r`

````markdown
---
id: def-connected-r
kind: definition
title: "Separated sets, disconnection, and connected subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-interval, def-neighbourhood-r]
justified_by: []
forward_refs: [cex-rationals-in-an-interval-are-disconnected]
aliases: [def-separated-sets-r, def-disconnection-r]
landmark: false
short: "separated, connected"
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.45)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.5"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A, B, E \subseteq \mathbb{R}$, with closure as in
[[def-interior-closure-boundary-r]].

- $A$ and $B$ are **separated** when
  $$\overline{A} \cap B = \varnothing \quad \text{and} \quad A \cap \overline{B} = \varnothing .$$
- A **disconnection** of $E$ is a pair $(A,B)$ of nonempty separated sets with
  $E = A \cup B$.
- $E$ is **disconnected** when it admits a disconnection, and **connected** when
  it does not.

**Separated is strictly stronger than disjoint.** Since $A \subseteq
\overline{A}$ ([[def-interior-closure-boundary-r]]), the first displayed
condition already gives $A \cap B \subseteq \overline{A} \cap B = \varnothing$,
so separated sets are disjoint. The converse fails: $(0,1)$ and $[1,2)$ are
disjoint, yet every neighbourhood of $1$ meets $(0,1)$, so $1$ is an adherent
point of $(0,1)$ and lies in $\overline{(0,1)}$
([[thm-closure-characterisations-r]]), while $1 \in [1,2)$; hence
$\overline{(0,1)} \cap [1,2) \ne \varnothing$ and the pair is not separated.
What separation adds to disjointness is exactly this: **neither set of a
separated pair may contain a point adherent to the other**, which is what makes
a disconnection a genuine splitting rather than a bookkeeping partition.

**Separation does not ask the two closures to be disjoint.** Each condition
tests one closure against the *other set*, never closure against closure. The
pair $(0,1)$, $(1,2)$ illustrates the difference and is separated: $[0,1]$ is a
closed set containing $(0,1)$, so $\overline{(0,1)} \subseteq [0,1]$
([[def-open-and-closed-in-r]], [[def-interior-closure-boundary-r]]) and
$\overline{(0,1)} \cap (1,2) = \varnothing$; symmetrically
$\overline{(1,2)} \subseteq [1,2]$ and $(0,1) \cap \overline{(1,2)} =
\varnothing$. The two closures nevertheless share the point $1$, so a definition
demanding $\overline{A} \cap \overline{B} = \varnothing$ would be a different and
strictly stronger condition, and it is not the one used here.

## Remarks

- **Why separation and not "both pieces open".** For a subset $E$ of
  $\mathbb{R}$ the pieces of a splitting are rarely open as subsets of
  $\mathbb{R}$: in the disconnection of $\mathbb{Q} \cap [0,2]$ used by
  [[cex-rationals-in-an-interval-are-disconnected]] neither piece is open in
  $\mathbb{R}$. Rudin's separated-sets formulation avoids introducing a second
  topology relative to $E$, and it is the only formulation this page uses.
  Nothing below refers to sets open "in $E$".

- **Every one-point set and the empty set are connected.** A disconnection
  requires two nonempty pieces with union $E$, and if $E$ has at most one point
  no two nonempty disjoint sets have union $E$.

- **Connectedness of a subset of $\mathbb{R}$ turns out to be an order
  property**: $E$ is connected exactly when it is order-convex
  ([[thm-connected-subsets-of-r-are-intervals]]). That is a theorem about
  $\mathbb{R}$ and uses its completeness; the definition above mentions no order
  at all.
````

### `def-real-analytic-function`

````markdown
---
id: def-real-analytic-function
kind: definition
title: "A real-analytic function on an open subset of $\\mathbb{R}$ is locally represented by a convergent real power series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-power-series-and-radius-of-convergence, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Analytic function, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Analytic_function"
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R$ be open ([[def-open-and-closed-in-r]]). A function $f:U\to\mathbb R$ is **real analytic on $U$** if, for every $c\in U$, there are a real $r>0$ and real coefficients $(a_n)_{n\in\mathbb N}$ such that $N_r(c)\subseteq U$ and

$$f(x)=\sum_{n=0}^{\infty}a_n(x-c)^n\qquad(x\in N_r(c)).$$

The representing series must converge throughout this neighbourhood ([[def-real-power-series-and-radius-of-convergence]], [[def-neighbourhood-r]]). The radius and coefficients may initially depend on $c$.
````

### `lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical`

````markdown
---
id: lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical
kind: lemma
title: "At a zero of a real-analytic function, either some first nonzero coefficient makes the zero isolated or every local coefficient vanishes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-analytic-function, cor-power-series-convergence-dichotomy, cor-power-series-sums-are-smooth-with-coefficient-formula, cor-power-series-sums-are-continuous, lem-sign-preservation-near-a-limit, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Analytic function, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Analytic_function"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

Let $f$ be real analytic near $c$ and suppose $f(c)=0$. Exactly one of the following local alternatives holds:

1. every coefficient in a power-series expansion of $f$ about $c$ is zero, so $f$ vanishes on a neighbourhood of $c$;
2. there is a least $m\ge1$ with $f^{(m)}(c)\ne0$, and $c$ is an isolated zero of $f$.

## Facts & Assumptions

**Given:** A real-analytic $f$ ([[def-real-analytic-function]]) with $f(c)=0$ and a local expansion $f(x)=\sum_{n\ge0}a_n(x-c)^n$.

[L1] The coefficients are $a_n=f^{(n)}(c)/\iota(n!)$ ([[cor-power-series-sums-are-smooth-with-coefficient-formula]]).

[L2] Every nonempty subset of $\mathbb N$ has a least member ([[thm-well-ordering-principle]]).

[L3] Power-series sums are continuous inside their radius. If a function has a nonzero limit at a limit point, it is nonzero on a sufficiently small punctured neighbourhood of that point ([[cor-power-series-sums-are-continuous]], [[lem-sign-preservation-near-a-limit]]).

[L4] A power series converges absolutely at every point strictly inside its radius ([[cor-power-series-convergence-dichotomy]]).

## Proof

**Proof technique:** cases.

1.1 If every $a_n=0$, the local expansion gives $f=0$ throughout its neighbourhood. [assume-case allzero, given]

1.2 Otherwise, [L2] gives a least $m$ with $a_m\ne0$. Since $a_0=f(c)=0$, one has $m\ge1$. [assume-case nonzero, given, L2, choose]

2.1 In the second case, write $f(x)=(x-c)^m g(x)$, where $g(x):=\sum_{j\ge0}a_{m+j}(x-c)^j$. At every nonzero point strictly inside the original local radius, the absolute series for $g$ is the corresponding absolute tail for $f$ multiplied by $|x-c|^{-m}$; it also converges at $c$. Thus $g$ has positive local radius and $g(c)=a_m\ne0$. [step 1.2, L4, algebra]

3.1 The alternatives in steps 1.1 and 1.2 are exhaustive. In the second, $g$ is continuous at $c$ and therefore has limit $g(c)=a_m\ne0$ there; [L3] makes $g$ nonzero on a smaller punctured neighbourhood, while it is already nonzero at $c$. Hence $f(x)=0$ there only when $x=c$, and the coefficient formula [L1] translates the least nonzero coefficient into the stated least nonzero derivative. [step 1.1, step 1.2, step 2.1, L1, L3, cases-exhaustive] ∎
````

### `thm-connected-subsets-of-r-are-intervals`

````markdown
---
id: thm-connected-subsets-of-r-are-intervals
kind: theorem
title: "A subset of $\\mathbb{R}$ is connected if and only if it is order-convex, that is, an interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-connected-r, def-interval, def-complete-ordered-field, lem-sup-epsilon, lem-sup-unique, def-open-and-closed-in-r, def-bounded-set, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, def-ordered-field, lem-of-add-order, cor-of-one-positive, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-rationals-in-an-interval-are-disconnected]
aliases: []
landmark: true
short: "connected $\\iff$ order-convex"
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.47)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.5"
      url: "https://www.jirka.org/ra/"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $E \subseteq \mathbb{R}$. Then $E$ is connected ([[def-connected-r]]) if and
only if $E$ is **order-convex** ([[def-interval]]), that is, if and only if

$$x, z \in E \text{ and } x \le w \le z \;\Longrightarrow\; w \in E .$$

**On the word "interval".** Order-convexity is exactly the defining property
that [[def-interval]] proves for each of its nine forms, and in that sense the
theorem says that the connected subsets of $\mathbb{R}$ are the intervals. The
converse classification, that every order-convex subset of $\mathbb{R}$ is empty
or one of the nine forms, is true and is explicitly **not proved anywhere in
this library**; [[def-interval]] records that omission in its own remarks. So
the statement proved below is the equivalence with order-convexity, and the
phrase "is an interval" is to be read as "is order-convex" throughout this page.

## Facts & Assumptions

**Given:** A subset $E \subseteq \mathbb{R}$.

[L1] Separated sets, disconnection, connectedness; separated sets are disjoint ([[def-connected-r]]).

[L2] $\overline{A}$ is the smallest closed superset of $A$, so $A \subseteq B$ gives $\overline{A} \subseteq \overline{B}$ and $\overline{A} \subseteq F$ for every closed $F \supseteq A$; and $\overline{A}$ is exactly the set of points every neighbourhood of which meets $A$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]]).

[L3] Order-convexity, and the interval forms: $(-\infty,w]$ and $[w,\infty)$ are closed sets, $(-\infty,w)$ and $(w,\infty)$ are open sets, and the order is total and transitive ([[def-interval]], [[def-open-and-closed-in-r]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L4] Least-upper-bound property: a nonempty subset of $\mathbb{R}$ bounded above has a unique least upper bound ([[def-complete-ordered-field]], [[lem-sup-unique]], [[def-bounded-set]]).

[L5] Epsilon characterisation: for nonempty $S$ bounded above and $c = \sup S$, every $\varepsilon > 0$ admits $s \in S$ with $c - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L6] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-neighbourhood-r]]).

[L7] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] Ordered-field arithmetic: $0 < 1$, so $2 := 1+1 > 0$ and $2^{-1} > 0$; for $d > 0$ one has $0 < d \cdot 2^{-1} < d$; adding a constant preserves an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Suppose $E$ is not order-convex: there are $x, z \in E$ and $w \in \mathbb{R}$ with $x \le w \le z$ and $w \notin E$; then $w \ne x$ and $w \ne z$, so $x < w < z$. Put $A := E \cap (-\infty,w)$ and $B := E \cap (w,\infty)$; then $x \in A$ and $z \in B$, so both are nonempty, and $A \cup B = E$ because no element of $E$ equals $w$. [assume-hyp, L3]

1.2 Suppose instead that $E$ is order-convex and that $(A,B)$ is a disconnection of $E$; fix $p \in A$ and $q \in B$. Separated sets are disjoint by [L1], so $p \ne q$, and interchanging the names $A$ and $B$ if necessary, which is legitimate because the hypotheses on the pair are symmetric, we may assume $p < q$. [assume-hyp, L1, choose]

1.3 For a nonempty $S \subseteq \mathbb{R}$ bounded above, $\sup S \in \overline{S}$: for every real $\varepsilon > 0$ the fact [L5] supplies $s \in S$ with $\sup S - \varepsilon < s \le \sup S$, so $|s - \sup S| < \varepsilon$ and $s \in N_\varepsilon(\sup S) \cap S$; thus every neighbourhood of $\sup S$ meets $S$, and [L2] gives $\sup S \in \overline{S}$. [L2, L4, L5, L6]

2.1 In the situation of step 1.1 the pair $(A,B)$ is a disconnection: $(-\infty,w]$ is a closed set containing $A$, so $\overline{A} \subseteq (-\infty,w]$ by [L2], whence $\overline{A} \cap B \subseteq (-\infty,w] \cap (w,\infty) = \varnothing$; symmetrically $\overline{B} \subseteq [w,\infty)$ and $A \cap \overline{B} = \varnothing$. So $A$ and $B$ are separated, nonempty, and their union is $E$, and $E$ is disconnected. [step 1.1, L1, L2, L3]

2.2 In the situation of step 1.2 put $S := A \cap [p,q]$; it is nonempty because $p \in A$ and $p \le p \le q$, and it is bounded above by $q$, so $c := \sup S$ exists by [L4], and $p \le c \le q$ since $p \in S$ and $q$ is an upper bound. [step 1.2, L3, L4]

3.1 $c \in A$: from $S \subseteq A$ and [L2] we get $\overline{S} \subseteq \overline{A}$, and $c \in \overline{S}$ by step 1.3, so $c \in \overline{A}$ and hence $c \notin B$ because $\overline{A} \cap B = \varnothing$; on the other hand $p \le c \le q$ with $p, q \in E$ and $E$ order-convex gives $c \in E = A \cup B$, so $c \in A$. [step 1.2, step 1.3, step 2.2, L1, L2]

4.1 $c < q$, since $c \in A$ and $q \in B$ are distinct by [L1] while $c \le q$; and every $v$ with $c < v \le q$ lies in $B$: such a $v$ satisfies $p \le c < v \le q$, so $v \in E$ by order-convexity, and $v \notin A$, for otherwise $v \in A \cap [p,q] = S$ would force $v \le c$. [step 1.2, step 2.2, step 3.1, L1, L3]

5.1 $c \in \overline{B}$, which is impossible: given a real $\varepsilon > 0$, put $t := \min\{\varepsilon \cdot 2^{-1},\ (q - c) \cdot 2^{-1}\}$, a positive real by [L7] and [L8] since $q - c > 0$, and $v := c + t$; then $c < v$ and $v \le c + (q-c) \cdot 2^{-1} < q$, so $v \in B$ by step 4.1, while $|v - c| = t \le \varepsilon \cdot 2^{-1} < \varepsilon$, so $v \in N_\varepsilon(c) \cap B$. Hence every neighbourhood of $c$ meets $B$ and $c \in \overline{B}$ by [L2]; but $c \in A$ by step 3.1 and $A \cap \overline{B} = \varnothing$ by [L1]. So the assumed disconnection cannot exist and an order-convex $E$ is connected. [step 3.1, step 4.1, L1, L2, L6, L7, L8]

6.1 Step 2.1 shows that a set which is not order-convex is disconnected, hence a connected set is order-convex; step 5.1 shows that an order-convex set admits no disconnection, hence is connected. The two together are the asserted equivalence. [step 2.1, step 5.1] ∎

## Remarks

- **Where completeness is spent.** Only in step 2.2, which produces
  $\sup(A \cap [p,q])$; no other step uses the least-upper-bound property, and
  the rest is the order, ordered-field arithmetic and the definition of
  separation. The obstruction over an incomplete ordered field is traceable to
  the failure of that supremum to exist, and it is visible in
  [[cex-rationals-in-an-interval-are-disconnected]]: the set
  $\mathbb{Q} \cap [0,2]$ contains all the rationals between its endpoints and is
  nevertheless disconnected as a subset of $\mathbb{R}$, split at an irrational
  point that $\mathbb{Q}$ does not see.

- **The two directions are of different characters.** "Not order-convex implies
  disconnected" is a construction, step 1.1, and needs nothing beyond the order.
  "Order-convex implies connected" is where the work sits, and the supremum
  $c$ produced in step 2.2 is the point at which the two pieces would have to
  meet; the contradiction is that it is adherent to both.

- **The theorem is about subsets of $\mathbb{R}$ and its statement is written in
  order vocabulary**, so it cannot even be stated where no order is present;
  [[rem-r-native-topology-scope]] collects the results on this page with that
  feature.
````

