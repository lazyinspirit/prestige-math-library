## Selection reasons

- high risk (6): 12 declared dependencies; 3 cited facts; quotient or equivalence-class construction

## Target item — `ex-the-metric-urysohn-function-costs-no-choice`

Normalized current SHA-256: `558496d650f94dc2df75575ceddfd85a224dfff2628ea9f18fab095fea79df17`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-the-metric-urysohn-function-costs-no-choice
kind: example
title: "In a metric space the function $d(x,A)/(d(x,A) + d(x,B))$ separates two disjoint closed sets outright, so the metric case spends no choice principle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-urysohn-lemma, thm-metric-spaces-are-completely-normal,
       thm-metric-spaces-are-tychonoff-and-perfectly-normal, def-metric-space,
       def-metric-topology, def-dependent-choice, def-continuous-map-top,
       def-interval, def-metrizable-space, lem-distance-to-set-is-lipschitz,
       def-metric-bounded-diameter, thm-metric-closure-characterisation]
justified_by: []
aliases: []
landmark: false
short: "an explicit choice-free metric Urysohn function"
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
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "Gabriel Nagy, Real Analysis, Lecture 6: Metric spaces"
      url: "https://www.math.ksu.edu/~nagy/real-an/1-06-top-metric.pdf"
pipeline_run: null
---

## Example

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]), metrizable ([[def-metrizable-space]]) and hence
normal ([[thm-metric-spaces-are-completely-normal]]), and let $A, B \subseteq X$
be disjoint, nonempty and closed. Define $h : X \to [0,1]$ by

$$h(x) \;:=\; \frac{d(x,A)}{d(x,A)+d(x,B)}.$$

Then $h$ is a witness for [[thm-urysohn-lemma]] applied to $A$ and $B$, and it
is written down by a single formula: no choice principle, dependent or
otherwise, is spent in producing it, in contrast with the general
construction inside that theorem.

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and disjoint, nonempty, closed $A, B \subseteq X$.

[L1] For nonempty $S \subseteq X$, $d(\cdot,S)$ is $1$-Lipschitz, hence continuous; $d(x,S)\ge 0$; and $\overline S=\{x:d(x,S)=0\}$ ([[lem-distance-to-set-is-lipschitz]]; [[def-metric-bounded-diameter]]; [[thm-metric-closure-characterisation]], claim 1). In particular, when $S$ is closed, $d(x,S)=0$ exactly when $x\in S$.

## Verification

**Proof technique:** direct.

1.1 For every $x \in X$: $d(x,A) \ge 0$ and $d(x,B) \ge 0$ by [L1], and they are not both $0$, since $d(x,A)=d(x,B)=0$ would give $x \in A \cap B = \varnothing$ by [L1] (A, B closed); so $d(x,A)+d(x,B) > 0$ and $h(x)$ is a well-defined real number. [given, L1, algebra]

2.1 $0 \le h(x) \le 1$ for every $x$, since $0 \le d(x,A) \le d(x,A)+d(x,B)$ by step 1.1. [step 1.1, algebra]

2.2 $h$ is continuous: it is the quotient of the continuous functions $d(\cdot,A)$ and $d(\cdot,A)+d(\cdot,B)$ (both continuous by [L1], the second a sum of continuous functions), and the denominator is nowhere $0$ by step 1.1. [step 1.1, L1]

2.3 For $x \in A$: $d(x,A)=0$ by [L1], so $h(x) = 0/(0+d(x,B)) = 0$. For $x \in B$: $d(x,B)=0$, and $d(x,A) \ne 0$ by step 1.1, so $h(x) = d(x,A)/(d(x,A)+0) = 1$. [step 1.1, L1, algebra]

3.1 By steps 2.1, 2.2 and 2.3, $h : X \to [0,1]$ is continuous with $A \subseteq h^{-1}(\{0\})$ and $B \subseteq h^{-1}(\{1\})$, exactly the conclusion of [[thm-urysohn-lemma]] for the pair $A,B$. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Nothing is selected.** Every value $h(x)$ is computed from $d(x,A)$ and $d(x,B)$, both determined by $x$, $A$, $B$ and $d$ alone; no step above fixes a witness from a nonempty set of alternatives. This is the same observation [[thm-metric-spaces-are-completely-normal]] and [[thm-metric-spaces-are-tychonoff-and-perfectly-normal]] make about their own constructions, and it is why the metric case of every separation theorem on this page needs no choice hypothesis at all.

- **The nonemptiness of $A$ and $B$ is not decoration.** If $A=\varnothing$ then $d(x,A)$ is undefined for every $x$ ([[lem-distance-to-set-is-lipschitz]] presupposes a nonempty set), and the constant function $1$ serves instead; the formula above is written for the case that matters, where both sets carry a point to measure distance from.
````

## Wave 7 provenance row for the target

```json
{
  "id": "ex-the-metric-urysohn-function-costs-no-choice",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.math.ksu.edu/~nagy/real-an/1-06-top-metric.pdf"
  ],
  "rationale": "The distance-ratio Urysohn separator is a standard metric-space construction; the library adds an explicit no-choice ledger and verifies the formula locally.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-separation-urysohn.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-distance-to-set-is-lipschitz",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \\subseteq X$ be\nnonempty and let $x, y \\in X$. Then\n\n$$|d(x,A) - d(y,A)| \\le d(x,y),$$\n\nwith $d(\\cdot,A)$ the distance to a nonempty set ([[def-metric-bounded-diameter]]).\nThus the real-valued function $u \\mapsto d(u,A)$ changes by at most $d(u,v)$\nbetween $u$ and $v$: it is **$1$-Lipschitz**.",
      "uses": [
        "1.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-metric-bounded-diameter",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) and let\n$A, B \\subseteq X$.\n\n**Bounded subset.** $A$ is **bounded** if $A = \\emptyset$ or there are $x_0 \\in X$\nand a real $r > 0$ with $A \\subseteq B(x_0, r)$ ([[def-metric-ball]]). The space\n$(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself.\n\n**Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and\nbounded, and put\n\n$$D(A) := \\{\\, d(a,b) : a, b \\in A \\,\\} \\subseteq \\mathbb{R}.$$\n\nThen $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and\n$r$ with $A \\subseteq B(x_0,r)$, every $a, b \\in A$ satisfy\n$d(a,b) \\le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry\n([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]],\n[[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$\n([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\\mathbb{R}$ by\nthe least-upper-bound property ([[def-complete-ordered-field]]), and that bound\nis unique ([[lem-sup-unique]]). Define\n\n$$\\operatorname{diam}(A) := \\sup D(A).$$\n\n**Distance from a point to a set, for nonempty $A$ only.** Let $x \\in X$ and let\n$A$ be nonempty, and put $E(x,A) := \\{\\, d(x,a) : a \\in A \\,\\}$. Then $E(x,A)$ is\nnonempty and bounded below by $0$, since a metric is nonnegative\n([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower\nbound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]].\nDefine\n\n$$d(x,A) := \\inf E(x,A).$$\n\n**Distance between two sets, for nonempty $A$ and $B$ only.** Put\n$E(A,B) := \\{\\, d(a,b) : a \\in A,\\ b \\in B \\,\\}$, again nonempty and bounded\nbelow by $0$, and define\n\n$$d(A,B) := \\inf E(A,B).$$\n\n**Every one of the three scope restrictions is load bearing.** In this library\n$\\sup$ and $\\inf$ denote real numbers and are written only after existence has\nbeen established; the extended real line is introduced on a later page and is\nnot used for the suprema and infima taken here, and no convention\n$\\sup \\emptyset = -\\infty$ is in force in this development\n([[rem-sup-conventions]]). Accordingly:\n\n- $\\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and**\n  bounded. It is not defined for $A = \\emptyset$, and it is not defined, not even\n  as an infinite value, for an unbounded $A$.\n- $d(x,A)$ is defined exactly when $A \\ne \\emptyset$, and $d(A,B)$ exactly when\n  both $A$ and $B$ are nonempty. No boundedness is needed for these two, because\n  $0$ is always a lower bound.",
      "uses": [
        "1.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-metric-closure-characterisation",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \\subseteq X$,\nwith closure, derived set and limit points as in\n[[def-metric-interior-closure-boundary]]. Then:\n\n1. If $A \\ne \\emptyset$, then $\\overline{A} = \\{\\, x \\in X : d(x,A) = 0 \\,\\}$,\n   where $d(x,A)$ is the distance from a point to a nonempty set\n   ([[def-metric-bounded-diameter]]).\n2. $\\overline{A} = A \\cup A'$.\n3. $\\overline{A}$ is closed, contains $A$, and is contained in every closed\n   $F \\subseteq X$ with $A \\subseteq F$. So $\\overline{A}$ is the smallest closed\n   superset of $A$, and $A$ is closed if and only if $A = \\overline{A}$.\n\nClaims 2 and 3 hold for every $A$, the empty set included: $\\overline{\\emptyset}$\nis empty because no ball meets $\\emptyset$, and $\\emptyset$ is closed because $X$\nis open ([[def-metric-topology]]). Claim 1 carries the hypothesis $A \\ne \\emptyset$\nbecause $d(x,A)$ is defined only for nonempty $A$\n([[def-metric-bounded-diameter]]).",
      "uses": [
        "1.1",
        "2.2",
        "2.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For every $x \\in X$: $d(x,A) \\ge 0$ and $d(x,B) \\ge 0$ by [L1], and they are not both $0$, since $d(x,A)=d(x,B)=0$ would give $x \\in A \\cap B = \\varnothing$ by [L1] (A, B closed); so $d(x,A)+d(x,B) > 0$ and $h(x)$ is a well-defined real number. [given, L1, algebra]",
      "step": "1.1",
      "inputs": [
        "given",
        "L1",
        "algebra"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "$0 \\le h(x) \\le 1$ for every $x$, since $0 \\le d(x,A) \\le d(x,A)+d(x,B)$ by step 1.1. [step 1.1, algebra]",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "algebra",
        "1.1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "$h$ is continuous: it is the quotient of the continuous functions $d(\\cdot,A)$ and $d(\\cdot,A)+d(\\cdot,B)$ (both continuous by [L1], the second a sum of continuous functions), and the denominator is nowhere $0$ by step 1.1. [step 1.1, L1]",
      "step": "2.2",
      "inputs": [
        "step 1.1",
        "L1",
        "1.1"
      ]
    },
    {
      "id": "step-2.3",
      "claim": "For $x \\in A$: $d(x,A)=0$ by [L1], so $h(x) = 0/(0+d(x,B)) = 0$. For $x \\in B$: $d(x,B)=0$, and $d(x,A) \\ne 0$ by step 1.1, so $h(x) = d(x,A)/(d(x,A)+0) = 1$. [step 1.1, L1, algebra]",
      "step": "2.3",
      "inputs": [
        "step 1.1",
        "L1",
        "algebra",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "By steps 2.1, 2.2 and 2.3, $h : X \\to [0,1]$ is continuous with $A \\subseteq h^{-1}(\\{0\\})$ and $B \\subseteq h^{-1}(\\{1\\})$, exactly the conclusion of [[thm-urysohn-lemma]] for the pair $A,B$. [step 2.1, step 2.2, step 2.3] ∎",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "step 2.2",
        "step 2.3",
        "2.1",
        "2.2",
        "2.3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: empty-set or empty-family case was inspected and introduces no illicit witness"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.1: zero or base-value case was inspected under the displayed definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: unit, singleton, or one-term case was inspected"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The statement has no distinguished degenerate or equality case parameter or case."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "statement and step 3.1: endpoint and codomain-boundary behavior was inspected"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "high risk (6): 12 declared dependencies; 3 cited facts; quotient or equivalence-class construction, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: Empty A or B are excluded by the target’s non‑emptiness hypothesis; the remark notes that the constant‑1 function handles the empty case separately. The denominator d(x,A)+d(x,B) never vanishes because A∩B=∅ and A,B are closed (step 1.1). Continuity of d(·,A) follows from the Lipschitz property (no choice required); the quotient of two continuous functions with non‑zero denominator is continuous, so h is continuous. The range is [0,1] and h attains 0 on A and 1 on B. No counterexample or missing hypothesis was found. Checked surface: The title, the public claim (the Example section), every numbered step (1.1, 2.1, 2.2, 2.3, 3.1), and the Remarks section were read and verified. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/ex-the-metric-urysohn-function-costs-no-choice--6cede179eba4a0dd.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-urysohn-lemma",
    "declared_target": "thm-urysohn-lemma",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-metric-spaces-are-completely-normal",
    "declared_target": "thm-metric-spaces-are-completely-normal",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-metric-spaces-are-tychonoff-and-perfectly-normal",
    "declared_target": "thm-metric-spaces-are-tychonoff-and-perfectly-normal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-metric-topology",
    "declared_target": "def-metric-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-dependent-choice",
    "declared_target": "def-dependent-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-continuous-map-top",
    "declared_target": "def-continuous-map-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-metrizable-space",
    "declared_target": "def-metrizable-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "ex-the-metric-urysohn-function-costs-no-choice",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-metric-closure-characterisation",
    "declared_target": "thm-metric-closure-characterisation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
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

## Full text of every cited or declared item (12)

### `def-continuous-map-top`

````markdown
---
id: def-continuous-map-top
kind: definition
title: "Continuity of a map of topological spaces at a point and globally"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-injection-surjection-bijection]
justified_by: []
aliases: [def-continuity-top]
landmark: true
short: "continuous map of spaces"
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
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), let $f : X \to Y$ be a function and let $x \in X$.
Neighbourhoods are as in [[def-neighbourhood-top]].

$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the
preimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.

$f$ is **continuous** if it is continuous at every point of $X$.

**The same condition with open sets only.** $f$ is continuous at $x$ if and only
if for every open $V \subseteq Y$ with $f(x) \in V$ there is an open
$U \subseteq X$ with $x \in U$ and $f[U] \subseteq V$. Indeed, if $f$ is
continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of
$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \ni x$,
which satisfies $f[U] \subseteq V$. Conversely, given the displayed condition and
a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \in V_0 \subseteq V$ and
then open $U \ni x$ with $f[U] \subseteq V_0$; then $x \in U \subseteq f^{-1}[V_0] \subseteq f^{-1}[V]$,
so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the
same statement written twice.

**Preimage, not image.** $f^{-1}[V] = \{\, x \in X : f(x) \in V \,\}$
is the preimage in the sense of [[def-injection-surjection-bijection]] and is
defined for every function, invertible or not; no inverse function is being
asserted to exist. Continuity is a condition on preimages throughout, and the
corresponding conditions on images define the *open* and *closed* maps of a later
item, which are different notions.

## Remarks

- **This is the metric definition when both topologies are metric topologies.**
  For metric spaces, $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, and the balls around a point are a neighbourhood
  base there; the identification is carried out where metrizable spaces are
  defined later on this page. Nothing about a metric survives in the definition
  above: continuity is a relation between two topologies and a function, and it
  is meaningless to ask whether a function between bare sets is continuous.

- **Continuity depends on both topologies, and coarsening the target or refining
  the source only helps.** If $f$ is continuous and $\mathcal{T}_X$ is replaced
  by a finer topology, or $\mathcal{T}_Y$ by a coarser one, $f$ remains
  continuous, since each condition to be verified is weakened and each
  neighbourhood available in the source is still available. In particular every
  map out of a discrete space and every map into an indiscrete space is
  continuous ([[def-standard-topologies]]).

- **Continuity at a point is strictly weaker than continuity.** A function may be
  continuous at exactly one point, and the definition above is deliberately local
  so that the sequential criteria proved later can be stated pointwise.
````

### `def-dependent-choice`

````markdown
---
id: def-dependent-choice
kind: definition
title: "The axiom of dependent choice: a relation in which every element is related to something admits an $\\mathbb{N}$-indexed chain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable-choice, def-sequence, def-natural-numbers]
justified_by: []
aliases: [def-dc]
landmark: true
short: "dependent choice (DC)"
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
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$.
Call $R$ **entire on $X$** when

$$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$

The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following
statement.

> For every nonempty set $X$, every relation $R$ entire on $X$, and every
> $a \in X$, there is a sequence $x : \mathbb{N} \to X$ ([[def-sequence]],
> [[def-natural-numbers]]) with
> $$x_0 = a \qquad \text{and} \qquad x_n \mathbin{R} x_{n+1} \ \text{ for every } n \in \mathbb{N}.$$

As everywhere in this library $\mathbb{N}$ contains $0$, and the sequence is
indexed from $0$; the term $x_0$ is the prescribed starting point $a$ and every
later term is related to its predecessor.

**What DC adds to what came before.** [[def-choice-function]] and
[[def-axiom-of-choice]] select one element from each member of a family that is
fixed in advance, and [[def-countable-choice]] does the same for a family indexed
by $\mathbb{N}$. In both, the family is given before any selection is made. DC is
the principle needed when the $n$-th set to select from is not known until the
first $n$ selections have been made: here the admissible values of $x_{n+1}$ are
exactly the $R$-successors of $x_n$, so the family being chosen from is built
along the choosing. That is precisely the situation $\mathrm{AC}_\omega$ does not
cover, and it is why a construction "pick $x_{n+1}$ depending on $x_n$, for every
$n$ at once" is not licensed by countable choice.

**The starting point may be dropped.** The formally weaker statement obtained by
deleting the clause $x_0 = a$ — for every nonempty $X$ and every entire $R$ there
is a sequence with $x_n \mathbin{R} x_{n+1}$ for all $n$ — is an immediate
consequence of the form above, since $X$ is nonempty and any of its elements may
be taken as $a$. The reverse derivation is standard and is not needed anywhere in
this library, so it is not carried out; every use below prescribes $x_0$.

**$R$ need not be an order and the terms need not be distinct.** What DC delivers
is a sequence, that is a function $\mathbb{N} \to X$, not a chain in the
order-theoretic sense ([[def-chain]]). The relation may be symmetric, and the
sequence may repeat a value or be constant; all that is asserted is
$x_n \mathbin{R} x_{n+1}$ at every index.

## Remarks

**Where DC sits among the choice principles.** It is a standard fact, proved in
the references and **not** in this library, that

$$\mathrm{AC} \;\Longrightarrow\; \mathrm{DC} \;\Longrightarrow\; \mathrm{AC}_\omega ,$$

and that neither implication reverses. The non-reversals are relative-consistency
results: what they establish is that ZF, if consistent, does not prove the
missing implications, never that those implications are false. This library
contains neither forcing nor permutation models and proves no independence
result, so all of that is quoted from the references and used nowhere.

**Nothing in this library proves DC, and nothing assumes it silently.** Like
[[def-axiom-of-choice]] and [[def-countable-choice]], DC is a statement that may
be assumed or not. Every theorem whose proof uses it says so in its own
statement, and the accounting for the compactness page is collected in
[[rem-compactness-choice-ledger-metric]].

**An upper bound, never a lower one.** When a later item records that its proof
uses DC, the claim made is that the argument given here is carried out in
$\mathrm{ZF} + \mathrm{DC}$. No item claims that DC is *necessary* for the
statement proved, because establishing necessity means separating the statement
from ZF, and that is an independence result of exactly the kind this library does
not prove.
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

### `def-metric-topology`

````markdown
---
id: def-metric-topology
kind: definition
title: "The metric topology: a set is open when every one of its points has a ball around it inside the set; closed means open complement"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-ball, def-metric-space]
justified_by: []
aliases: [def-open-set-metric, def-closed-set-metric]
landmark: true
short: "metric topology"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a
real $r > 0$ with $B(x,r) \subseteq U$ ([[def-metric-ball]]). A subset
$F \subseteq X$ is **closed in $(X,d)$** if its complement $X \setminus F$ is
open.

The collection

$$\mathcal{T}_d := \{\, U \subseteq X : U \text{ is open in } (X,d) \,\}$$

of all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$
that is both open and closed is called **clopen**.

**Two sets are open for trivial reasons.** $\emptyset$ is open, because the
defining condition quantifies over no points; and $X$ is open, because
$B(x,r) \subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and
$\emptyset$ are also closed, and both are clopen.

**A neighbourhood of a point $x$** is any open set containing $x$. The condition
above therefore reads: $U$ is open exactly when every point of $U$ has a ball
around it inside $U$, and it is the balls alone that have to be tested.

**The metric, not the set, determines $\mathcal{T}_d$.** Two metrics on the same
set may have different metric topologies, and two different metrics may have the
same one; the systematic comparison is [[def-equivalent-metrics]].

## Remarks

- **What "topology" means here.** $\mathcal{T}_d$ is defined above as a
  collection of subsets of $X$; the abstract notion of a topological space, a
  collection of subsets closed under arbitrary unions and finite intersections
  taken as primitive data, is introduced on a later page and is not used
  here. What is proved
  here is that $\mathcal{T}_d$ has exactly those closure properties
  ([[thm-metric-open-set-algebra]]), which is what licenses the word.
- **Open and closed are not opposites.** A set may be neither ($[0,1)$ inside
  $\mathbb{R}$, once the usual metric is available from
  [[lem-real-line-is-a-metric-space]]) or both ($\emptyset$ and $X$ always, and
  in some spaces every subset at once, as the discrete metric on the companion
  page shows). "Not open" is never a synonym for "closed".
- **Closedness is complementation, and nothing else, at this stage.** The
  description of closed sets by limits of sequences, and the description of the
  closure as an infimum of distances, are theorems proved later on this page
  ([[thm-metric-closure-characterisation]], [[thm-metric-sequential-closure]]),
  not part of the definition.
````

### `def-metrizable-space`

````markdown
---
id: def-metrizable-space
kind: definition
title: "Metrizable space: a topological space whose topology is induced by some metric; metrizability is topological, the metric is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-metric-topology, def-metric-space, thm-metric-open-set-algebra, def-equivalent-metrics,
       def-subspace-topology-top, def-isometry-and-metric-embedding,
       def-metric-ball, def-neighbourhood-top, def-interior-closure-boundary-top, def-continuous-map-top,
       def-sequence-convergence-top, def-homeomorphism-and-open-maps, def-first-countable-top,
       lem-metric-ball-neighbourhood-base, thm-metric-hausdorff-separation, def-metric-convergence,
       def-metric-continuity, thm-metric-closure-characterisation, def-metric-interior-closure-boundary,
       lem-metric-limits-unique, lem-real-line-is-a-metric-space]
justified_by: []
aliases: [def-metrizable, def-usual-topology-of-r]
landmark: true
short: "metrizable space; the usual topology of $\\mathbb{R}$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 481fc46dfb5166d1c7254e753d62020d03b9c022b265f7afd686ea1f9dd7ff0a
    item_sha256: 36f4a57f6ea43198decefdca5ecb7883fa754f6a0fa1ef34d13dc55d3704c788
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**metrizable** if there is a metric $d$ on $X$ ([[def-metric-space]]) whose
metric topology is $\mathcal{T}$, that is $\mathcal{T} = \mathcal{T}_d$
([[def-metric-topology]]). Such a $d$ is said to **induce** or **metrise**
$\mathcal{T}$.

**The definition presupposes that $\mathcal{T}_d$ is a topology in the sense of
[[def-topological-space]], and it is.** By [[def-metric-topology]] both
$\varnothing$ and $X$ are open in $(X,d)$, which is (T1), and by
[[thm-metric-open-set-algebra]] the family $\mathcal{T}_d$ is closed under
arbitrary unions, which is (T2), and under intersections of $n \ge 1$ members,
which contains (T3). So every metric space is a topological space, and the
metric-space development of this library is a special case of the present one.

**The standard local notions in the two developments agree after translating
their neighbourhood conventions.** Let $d$ be a metric on $X$ and give $X$ the
topology $\mathcal{T}_d$.

- *Neighbourhoods and balls.* [[def-metric-topology]] uses "neighbourhood" for
  an open set containing $x$, whereas [[def-neighbourhood-top]] also allows a
  non-open superset of such a set. Thus the two collections are not literally
  equal, but the open metric neighbourhoods are cofinal in the broader
  neighbourhood filter. The balls $B(x,r)$, $r > 0$ ([[def-metric-ball]]), are
  open ([[thm-metric-open-set-algebra]]) and form a neighbourhood base at $x$:
  any neighbourhood $N$ contains an open $U \ni x$, hence a ball around $x$ by
  [[def-metric-topology]]. The balls of radius $1/n$ alone already suffice
  ([[lem-metric-ball-neighbourhood-base]]).
- *Interior, closure, boundary.* [[def-metric-interior-closure-boundary]] defines
  them by the same conditions with balls in place of neighbourhoods, and the
  previous bullet makes the two conditions equivalent; the metric closure is the
  smallest closed superset ([[thm-metric-closure-characterisation]]), which is the
  definition used here ([[def-interior-closure-boundary-top]]). So the two
  closures, the two interiors and the two boundaries are the same three
  operations.
- *Convergence.* $x_k \to p$ in the sense of [[def-sequence-convergence-top]] is
  "eventually in every neighbourhood of $p$", and by the first bullet this is
  "eventually in every ball around $p$", which is [[def-metric-convergence]].
- *Continuity.* $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, which by the first bullet is continuity at $a$ in
  the sense of [[def-continuous-map-top]].

- *Subspaces.* For $A \subseteq X$ the subspace topology
  $\{\, U \cap A : U \in \mathcal{T}_d \,\}$ of [[def-subspace-topology-top]] is
  exactly the metric topology of the subspace metric $d_A$
  ([[def-isometry-and-metric-embedding]]), so the two uses of the phrase
  *subspace topology* in this library name one thing. Indeed
  $B_A(a,r) = B_X(a,r) \cap A$: a trace $U \cap A$ is $d_A$-open, since each of
  its points $a$ has $B_X(a,r) \subseteq U$ and hence $B_A(a,r) \subseteq U \cap A$;
  and a $d_A$-open $W$ is the trace of
  $U := \bigcup \{\, B_X(a,r) : a \in W,\ r > 0,\ B_X(a,r) \cap A \subseteq W \,\}$,
  which is $d_X$-open, satisfies $U \cap A = W$, and involves no choice principle,
  the union being taken over a set of pairs rather than over a selection.

Consequently the metric-space notions of interior, closure, boundary, density,
convergence, continuity and subspace agree with the topological notions here,
and statements about them transfer once a metric is named. For neighbourhoods
the transfer uses the explicit convention change above: a metric-page
neighbourhood is an open topological neighbourhood, while every topological
neighbourhood contains one.

**Metrizability is a topological property; the metric is not part of it.** If
$h : X \to Y$ is a homeomorphism ([[def-homeomorphism-and-open-maps]]) and $d$
metrises $X$, then $d'(y_1,y_2) := d(h^{-1}(y_1), h^{-1}(y_2))$ is a metric on
$Y$ — the three axioms transfer along the bijection $h^{-1}$ — and
$h[B_d(x,r)] = B_{d'}(h(x), r)$, so $h$ carries a basis of $\mathcal{T}_d$ to a
basis of $\mathcal{T}_{d'}$ and $\mathcal{T}_{d'} = h[\mathcal{T}_d] = \mathcal{T}_Y$.
Hence $Y$ is metrizable. The metric itself, however, is **not** determined by the
topology: two metrics on one set may induce the same topology without agreeing,
which is exactly topological equivalence ([[def-equivalent-metrics]]), and
properties of a metric that are not properties of its topology, boundedness among
them, are therefore not properties of a metrizable space.

**Two things every metrizable space has.** It is **Hausdorff**: distinct points
have disjoint open neighbourhoods, by [[thm-metric-hausdorff-separation]] applied
to any metric inducing the topology. And it is **first countable**
([[def-first-countable-top]]), by [[lem-metric-ball-neighbourhood-base]]. Either
failure is therefore an obstruction to metrizability, and this page uses the
first of them to exhibit a topology induced by no metric.

**Sequential limits in a metrizable space are unique, so the notation
$\lim_k x_k$ is available there.** In a metric space a sequence has at most one
limit ([[lem-metric-limits-unique]]), and by the agreement of convergence above
that uniqueness is a statement about the topology alone; so within a metrizable
space, and only there, this page writes $\lim_k x_k$ in the ordinary way. In a
general space the symbol is unavailable ([[def-sequence-convergence-top]]).

**The usual topology of $\mathbb{R}$.** The absolute value makes $\mathbb{R}$ a
metric space under $d_{\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded
open intervals, and the resulting metric topology is what claim 3 of
[[lem-real-line-is-a-metric-space]] names the **usual topology** of $\mathbb{R}$.
That is the topology meant by the phrase throughout these two pages, and
$\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on
these two pages is proved from the metric $d_{\mathbb{R}}$ and the bridge above,
and no example re-derives any of it.

## Remarks

- **The usual topology of $\mathbb{R}$ is not a second notion alongside the
  order-native development built earlier in this library.**
  [[rem-r-native-topology-scope]] records that the two collections of open subsets
  of $\mathbb{R}$ — the one defined from balls and the one defined from
  order-neighbourhoods — are literally the same collection, and hence that
  interior, closure, boundary, limit point, density and sequential convergence
  agree on the two sides. That identification is quoted here for orientation only;
  the order-topology example on the companion page is where the order-native
  description is used.

- **A metrizable space comes with many metrics and no canonical one.** The
  statement "$X$ is metrizable" asserts existence, and every argument that uses a
  metric must name one first. Where two metrics are compared, the vocabulary is
  that of [[def-equivalent-metrics]]: Lipschitz, uniform and topological
  equivalence, of which only the last is visible to the topology.

- **Metrization theorems are not proved here.** Necessary conditions are easy —
  Hausdorff, first countable — and sufficient ones require separation and
  countability axioms that this page does not develop. Nothing below asserts that
  a space *is* metrizable except by exhibiting a metric.

- **Not every topology is metrizable**, and the cheapest witness is the
  indiscrete topology on a two-point set, which is not Hausdorff. That is
  recorded on this page as a false statement and witnessed on the companion page.
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

### `thm-metric-closure-characterisation`

````markdown
---
id: thm-metric-closure-characterisation
kind: theorem
title: "The closure of a nonempty $A$ is $\\{x : d(x,A) = 0\\}$, equals $A$ together with its limit points, and is the smallest closed superset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-interior-closure-boundary, def-metric-bounded-diameter,
       thm-metric-open-set-algebra, lem-inf-epsilon, def-metric-topology,
       def-metric-ball, def-infimum, lem-metric-nonnegativity, def-metric-space,
       thm-infimum-property, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "closure = zero-distance set = smallest closed superset"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$,
with closure, derived set and limit points as in
[[def-metric-interior-closure-boundary]]. Then:

1. If $A \ne \emptyset$, then $\overline{A} = \{\, x \in X : d(x,A) = 0 \,\}$,
   where $d(x,A)$ is the distance from a point to a nonempty set
   ([[def-metric-bounded-diameter]]).
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$. So $\overline{A}$ is the smallest closed
   superset of $A$, and $A$ is closed if and only if $A = \overline{A}$.

Claims 2 and 3 hold for every $A$, the empty set included: $\overline{\emptyset}$
is empty because no ball meets $\emptyset$, and $\emptyset$ is closed because $X$
is open ([[def-metric-topology]]). Claim 1 carries the hypothesis $A \ne \emptyset$
because $d(x,A)$ is defined only for nonempty $A$
([[def-metric-bounded-diameter]]).

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a subset $A \subseteq X$, a point $x \in X$, and a closed set $F \subseteq X$ with $A \subseteq F$; when $A \ne \emptyset$, the set $E(x) := \{\, d(x,a) : a \in A \,\}$, whose infimum is $d(x,A)$.

[A1] Closure and derived set: $x \in \overline{A}$ means $B(x,r) \cap A \ne \emptyset$ for every $r > 0$; $x \in A'$ means $B(x,r) \cap (A \setminus \{x\}) \ne \emptyset$ for every $r > 0$ ([[def-metric-interior-closure-boundary]]).

[A2] Open and closed: $U$ is open when every point of $U$ has a ball around it inside $U$; $F$ is closed when $X \setminus F$ is open ([[def-metric-topology]]).

[L1] For nonempty $A$, the set $E(x)$ is nonempty and bounded below by $0$, so $d(x,A) = \inf E(x)$ exists and is a lower bound of $E(x)$ ([[def-metric-bounded-diameter]], [[lem-metric-nonnegativity]], [[thm-infimum-property]], [[def-infimum]]).

[L2] Epsilon characterisation of the infimum: for a nonempty $S \subseteq \mathbb{R}$ bounded below and a lower bound $\ell$ of $S$, one has $\ell = \inf S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $s < \ell + \varepsilon$ ([[lem-inf-epsilon]]).

[L3] Balls are open, so a point of a ball has a ball around it inside that ball ([[thm-metric-open-set-algebra]], [[def-metric-ball]]).

[L4] Membership in a ball: $a \in B(x,r)$ means $d(x,a) < r$, and $x \in B(x,r)$ always ([[def-metric-ball]]); trichotomy of the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $A \ne \emptyset$ and $x \in \overline{A}$, and let $\varepsilon > 0$ be arbitrary; then $B(x,\varepsilon) \cap A \ne \emptyset$, so there is $a \in A$ with $d(x,a) < \varepsilon = 0 + \varepsilon$, and $0$ is a lower bound of $E(x)$, so $d(x,A) = 0$ by the epsilon characterisation. [A1, L1, L2, L4]

1.2 Conversely suppose $A \ne \emptyset$ and $d(x,A) = 0$, and let $r > 0$ be arbitrary; the epsilon characterisation supplies $a \in A$ with $d(x,a) < 0 + r = r$, that is $a \in B(x,r) \cap A$, so $x \in \overline{A}$. [A1, L1, L2, L4]

1.3 $A \subseteq \overline{A}$ and $A' \subseteq \overline{A}$: a point $a \in A$ lies in $B(a,r) \cap A$ for every $r$, and a ball meeting $A \setminus \{x\}$ meets $A$. [A1, L4]

1.4 If $x \in \overline{A}$ and $x \notin A$, then for every $r$ the nonempty set $B(x,r) \cap A$ equals $B(x,r) \cap (A \setminus \{x\})$, since $x$ is not a member of $A$; hence $x \in A'$. [A1]

1.5 $\overline{A}$ is closed: let $x \in X \setminus \overline{A}$ and fix $r$ with $B(x,r) \cap A = \emptyset$; for $y \in B(x,r)$ there is $s$ with $B(y,s) \subseteq B(x,r)$, so $B(y,s) \cap A = \emptyset$ and $y \notin \overline{A}$, whence $B(x,r) \subseteq X \setminus \overline{A}$ and $X \setminus \overline{A}$ is open. [A1, A2, L3]

1.6 $\overline{A} \subseteq F$ for every closed $F \supseteq A$: if $x \in \overline{A}$ had $x \notin F$, then $X \setminus F$ open would give $r$ with $B(x,r) \subseteq X \setminus F \subseteq X \setminus A$, so $B(x,r) \cap A = \emptyset$, contradicting $x \in \overline{A}$. [A1, A2, given]

2.1 Claim 1 follows: by step 1.1 every adherent point of a nonempty $A$ satisfies $d(x,A) = 0$, and by step 1.2 every $x$ with $d(x,A) = 0$ is adherent. [step 1.1, step 1.2]

2.2 Claim 2 follows: $A \cup A' \subseteq \overline{A}$ by step 1.3, and $\overline{A} \subseteq A \cup A'$ by step 1.4, since a point of $\overline{A}$ either lies in $A$ or, not lying in $A$, lies in $A'$. [step 1.3, step 1.4]

2.3 Claim 3 follows: $\overline{A}$ is closed by step 1.5, contains $A$ by step 1.3, and sits inside every closed superset of $A$ by step 1.6; in particular if $A$ is closed then $\overline{A} \subseteq A \subseteq \overline{A}$, so $A = \overline{A}$, and conversely if $A = \overline{A}$ then $A$ is closed. [step 1.3, step 1.5, step 1.6]

3.1 Claims 1, 2 and 3 are therefore all established. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Claim 1 is where the infimum does the work.** Reading it right to left,
  $d(x,A) = 0$ says that $A$ has points arbitrarily close to $x$ without saying
  that any of them is $x$; reading it left to right, adherence says the same
  thing in the language of balls. The equivalence is exactly the epsilon
  characterisation of the infimum ([[lem-inf-epsilon]]) with the lower bound $0$.
- **The distance function is $1$-Lipschitz** ([[lem-distance-to-set-is-lipschitz]]),
  so claim 1 exhibits $\overline{A}$ as the zero set of a function that does not
  increase distances. That is not used above and is recorded only as
  orientation.
- **Claim 3 is the form that transfers to general topology**, where no metric is
  available and the closure is defined outright as the intersection of all
  closed supersets. Claim 1 is the specifically metric statement, and claim 2
  sits between them.
````

### `thm-metric-spaces-are-completely-normal`

````markdown
---
id: thm-metric-spaces-are-completely-normal
kind: theorem
title: "In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-completely-normal-and-perfectly-normal-spaces, def-normal-and-t4-spaces,
       def-separated-sets, def-metric-space, def-metric-topology, def-metric-ball,
       def-metrizable-space, def-metric-bounded-diameter, thm-metric-closure-characterisation,
       thm-metric-open-set-algebra, def-infimum, thm-infimum-property, def-max-min,
       lem-metric-nonnegativity, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "metric spaces are completely normal"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 32: Normal Spaces (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-32.pdf"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]), and let $A, B \subseteq X$ be separated
([[def-separated-sets]]). Then there are disjoint open sets $U \supseteq A$ and
$V \supseteq B$.

Consequently every metrizable space ([[def-metrizable-space]]) is **completely
normal**, and hence normal
([[def-completely-normal-and-perfectly-normal-spaces]],
[[def-normal-and-t4-spaces]]).

**No choice principle is used.** The two open sets are unions indexed by the
points of $A$ and of $B$, and the radius attached to a point is the number
$d(a,B)/2$, which is determined by $a$, by $B$ and by $d$; nothing is selected.

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and separated sets $A, B \subseteq X$, so that $\overline{A} \cap B = A \cap \overline{B} = \varnothing$, with closures taken in the metric topology.

[A1] $A$ and $B$ are separated: $\overline{A} \cap B = \varnothing$ and $A \cap \overline{B} = \varnothing$ ([[def-separated-sets]]).

[L1] For nonempty $S \subseteq X$ and $x \in X$ the distance $d(x,S) = \inf\{\, d(x,s) : s \in S \,\}$ exists in $\mathbb{R}$, is a lower bound of that set, and satisfies $d(x,S) \ge 0$ ([[def-metric-bounded-diameter]], [[def-infimum]], [[thm-infimum-property]], [[lem-metric-nonnegativity]]).

[L2] For nonempty $S \subseteq X$, $\overline{S} = \{\, x \in X : d(x,S) = 0 \,\}$ ([[thm-metric-closure-characterisation]], claim 1).

[L3] Open balls are open and an arbitrary union of open sets is open; $\varnothing$ and $X$ are open ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[def-topological-space]]).

[L4] $x \in B(x,r)$ for every $r > 0$, and $y \in B(x,r)$ means $d(x,y) < r$ ([[def-metric-ball]]).

[L5] The triangle inequality $d(p,q) \le d(p,x) + d(x,q)$ and symmetry $d(p,q) = d(q,p)$ ([[def-metric-space]]).

[L6] A two-element set of reals has a maximum, which is one of the two and is at least the other ([[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 If $A = \varnothing$ then $U := \varnothing$ and $V := X$ are disjoint open sets with $A \subseteq U$ and $B \subseteq V$; if $B = \varnothing$ then $U := X$ and $V := \varnothing$ do the same. [L3, construct]

1.2 Assume from here that $A$ and $B$ are both nonempty, so that $d(x,A)$ and $d(x,B)$ are defined for every $x \in X$. [L1, assume-hyp]

2.1 For $a \in A$: $a \notin \overline{B}$ by [A1], so $d(a,B) \ne 0$ by [L2], and $d(a,B) \ge 0$ by [L1]; hence $r_a := d(a,B)/2 > 0$. Symmetrically $s_b := d(b,A)/2 > 0$ for $b \in B$. [step 1.2, A1, L1, L2]

3.1 Define $U := \bigcup_{a \in A} B(a, r_a)$ and $V := \bigcup_{b \in B} B(b, s_b)$; both are open by [L3], and $A \subseteq U$ and $B \subseteq V$ by [L4]. [step 2.1, L3, L4, construct]

4.1 Suppose $x \in U \cap V$; then there are $a \in A$ and $b \in B$ with $d(a,x) < r_a$ and $d(b,x) < s_b$. [step 3.1, L4, assume-hyp]

5.1 Under step 4.1: $d(a,b) \le d(a,x) + d(x,b) < r_a + s_b$, using symmetry for $d(x,b) = d(b,x)$. [step 4.1, L5]

5.2 Under step 4.1: $r_a + s_b \le 2\max\{r_a, s_b\} = \max\{d(a,B),\ d(b,A)\}$, by [L6] and the definitions of $r_a$ and $s_b$. [step 2.1, step 4.1, L6]

5.3 $d(a,B) \le d(a,b)$, since $b \in B$ makes $d(a,b)$ a member of the set whose infimum is $d(a,B)$; and $d(b,A) \le d(b,a) = d(a,b)$ for the same reason with the roles exchanged. [step 4.1, L1, L5]

6.1 By steps 5.1, 5.2 and 5.3, $d(a,b) < \max\{d(a,B), d(b,A)\} \le d(a,b)$, which is impossible; so no such $x$ exists and $U \cap V = \varnothing$. [step 5.1, step 5.2, step 5.3]

7.1 By steps 1.1, 3.1 and 6.1 the separated pair $A, B$ has disjoint open supersets in every case. [step 1.1, step 3.1, step 6.1]

8.1 If $(Y,\mathcal{T})$ is metrizable, fix a metric $d$ inducing $\mathcal{T}$; separation of two subsets is a statement about the closure operator, and the topological closure of a metrizable space is the metric closure of any inducing metric, so step 7.1 applies verbatim and $Y$ is completely normal, hence normal. [step 7.1, L2] ∎

## Remarks

- **The halving is what makes the balls miss each other.** Radii $d(a,B)$ and $d(b,A)$ without the factor $2$ would not do: two balls of those radii can meet, and the triangle inequality then gives no contradiction. With the halving the sum of the two radii is at most the larger of the two distances, which is at most $d(a,b)$.

- **Separated, not merely disjoint, is exactly the right hypothesis.** For disjoint sets the radii can fail to be positive: in $\mathbb{R}$ the disjoint sets $(0,1)$ and $[1,2)$ have $d(1, (0,1)) = 0$, and indeed they are not separated. What the hypothesis buys is positivity of every radius, and nothing else.

- **The corresponding statement for $\mathbb{R}$ needs no new proof.** $\mathbb{R}$ with its usual topology is metrizable by the usual metric ([[def-metrizable-space]]), so it is completely normal, and so is every $\mathbb{R}^n$ and every subspace of a metrizable space.
````

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal`

````markdown
---
id: thm-metric-spaces-are-tychonoff-and-perfectly-normal
kind: theorem
title: "In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-metric-spaces-are-completely-normal, def-completely-regular-and-tychonoff-spaces,
       def-completely-normal-and-perfectly-normal-spaces, def-zero-sets-and-cozero-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-metric-bounded-diameter,
       lem-distance-to-set-is-lipschitz, thm-metric-closure-characterisation,
       def-metric-continuity, thm-metric-continuity-characterisations,
       def-metrizable-space, def-metric-space, def-metric-topology,
       def-canonical-natural, cor-archimedean-reciprocal, lem-nat-nonzero-is-successor,
       def-max-min, lem-finite-set-has-max, def-hausdorff-space,
       lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, def-t0-and-t1-spaces,
       def-interval, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "metric spaces are Tychonoff and perfectly normal"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]), and write $1/(n+1)$ for the inverse of the canonical
natural $\iota(n+1)$ of $\mathbb{R}$ ([[def-canonical-natural]]). Then:

1. **Every closed set is a zero set.** For closed $C \subseteq X$ there is a
   continuous $f : X \to \mathbb{R}$ with $C = Z(f)$
   ([[def-zero-sets-and-cozero-sets]]); for $C \ne \varnothing$ one may take
   $f(x) = d(x,C)$ ([[def-metric-bounded-diameter]]), and for $C = \varnothing$
   the constant function $1$.
2. **Every closed set is a $G_\delta$**
   ([[def-g-delta-and-f-sigma-in-a-topological-space]]): for $C \ne \varnothing$,
   $$C \;=\; \bigcap_{n \in \mathbb{N}} \{\, x \in X : d(x,C) < 1/(n+1) \,\},$$
   an intersection of open sets, and $\varnothing$ is open hence a $G_\delta$.
3. **$X$ is completely regular** ([[def-completely-regular-and-tychonoff-spaces]]):
   for closed $C$ and $x_0 \notin C$ the function
   $f(x) := \min\{1,\ d(x,C)/r\}$ with $r := d(x_0,C)$ is continuous, takes the
   value $1$ at $x_0$ and the value $0$ on $C$, when $C \ne \varnothing$; for
   $C = \varnothing$ the constant function $1$ serves.
4. Consequently every metrizable space ([[def-metrizable-space]]) is **Tychonoff**
   and **perfectly normal**, and hence $T_6$, $T_5$, $T_4$, $T_{3\frac12}$,
   $T_3$, $T_{2\frac12}$, $T_2$, $T_1$ and $T_0$.

**No choice principle is used anywhere below.**

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a closed set $C \subseteq X$, a point $x_0 \in X \setminus C$, and $\mathbb{R}$ with its usual topology.

[L1] For nonempty $S \subseteq X$ the distance $d(x,S)$ is defined, is $\ge 0$, and $\overline{S} = \{\, x : d(x,S) = 0 \,\}$ ([[def-metric-bounded-diameter]], [[thm-metric-closure-characterisation]], claim 1).

[L2] $|d(x,S) - d(y,S)| \le d(x,y)$ for nonempty $S$ ([[lem-distance-to-set-is-lipschitz]]).

[L3] A map between metric spaces satisfying an inequality $|g(x) - g(y)| \le L\, d(x,y)$ with $L > 0$ is continuous in the $\varepsilon$-$\delta$ sense, by $\delta := \varepsilon / L$, and is therefore continuous as a map of topological spaces ([[def-metric-continuity]], [[thm-metric-continuity-characterisations]], clause (b), [[def-metrizable-space]]).

[L4] A set is closed exactly when it equals its closure ([[thm-metric-closure-characterisation]], claim 3); $\varnothing$ and $X$ are open ([[def-metric-topology]], [[def-topological-space]]).

[L5] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$, and every nonzero natural is a successor, so $k = n+1$ for some $n \in \mathbb{N}$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]], [[def-canonical-natural]]).

[L6] A two-element set of reals has a maximum and a minimum, each of which is one of the two elements ([[def-max-min]], [[lem-finite-set-has-max]]); and $[0,1]$ is the set of reals $t$ with $0 \le t \le 1$ ([[def-interval]]).

[L7] Every metrizable space is Hausdorff, hence $T_1$ and $T_0$ ([[def-metrizable-space]], [[def-hausdorff-space]], [[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], [[def-t0-and-t1-spaces]]).

[L8] Every metric space is completely normal, hence normal ([[thm-metric-spaces-are-completely-normal]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $C \ne \varnothing$ and put $g(x) := d(x,C)$; then $g$ is continuous by [L2] and [L3] with $L = 1$. [L1, L2, L3, assume-hyp]

1.2 If $C = \varnothing$ then the constant function $1$ is continuous and has zero set $\varnothing = C$, since $1 \ne 0$. [L3, L4]

2.1 Under step 1.1: $Z(g) = \{\, x : d(x,C) = 0 \,\} = \overline{C} = C$, the last equality because $C$ is closed. [step 1.1, L1, L4]

2.2 Under step 1.1: for each $n$ the set $W_n := \{\, x : d(x,C) < 1/(n+1) \,\}$ is open, since for $x \in W_n$ and $t := 1/(n+1) - d(x,C) > 0$ any $y$ with $d(x,y) < t$ has $d(y,C) \le d(x,C) + d(x,y) < 1/(n+1)$ by [L2]. [step 1.1, L2]

3.1 By steps 2.1 and 1.2 every closed subset of $X$ is a zero set, which is claim 1. [step 2.1, step 1.2]

3.2 Under step 1.1: $C \subseteq \bigcap_n W_n$, since $d(x,C) = 0 < 1/(n+1)$ for $x \in C$ by [L1] and step 2.1. [step 2.1, step 2.2, L1]

3.3 Under step 1.1: if $x \notin C$ then $d(x,C) > 0$ by [L1] and step 2.1, so [L5] gives $n$ with $1/(n+1) < d(x,C)$ and hence $x \notin W_n$. [step 2.1, step 2.2, L1, L5]

3.4 Under step 1.1 with $x_0 \notin C$: $r := d(x_0,C) > 0$ by [L1] and step 2.1, and $f(x) := \min\{1,\ d(x,C)/r\}$ takes values in $[0,1]$ by [L1] and [L6]. [step 2.1, L1, L6]

4.1 Steps 3.2 and 3.3 give $C = \bigcap_n W_n$ for nonempty closed $C$, and $\varnothing$ is open hence a $G_\delta$ by [L4]; this is claim 2. [step 3.2, step 3.3, L4]

4.2 Under step 3.4: $|\min\{1,u\} - \min\{1,v\}| \le |u - v|$ for all reals $u,v$, since if both are at most $1$ the two sides are equal, if both exceed $1$ the left side is $0$, and if $u \le 1 < v$ then the left side is $1 - u$, which is at most $v - u$, the remaining case $v \le 1 < u$ being the same with $u$ and $v$ exchanged; hence $|f(x) - f(y)| \le |d(x,C) - d(y,C)|/r \le d(x,y)/r$ and $f$ is continuous by [L3] with $L = 1/r$. [step 3.4, L2, L3, L6]

4.3 Under step 3.4: $f(x_0) = \min\{1, r/r\} = \min\{1,1\} = 1$, and $f(y) = \min\{1, 0\} = 0$ for $y \in C$ since $d(y,C) = 0$. [step 3.4, L1, L6]

5.1 By steps 4.2 and 4.3, and by step 1.2 for the case $C = \varnothing$, the space $X$ is completely regular, which is claim 3. [step 1.2, step 4.2, step 4.3]

6.1 A metrizable space $Y$ is completely regular by step 5.1 applied to any inducing metric, and it is $T_1$ by [L7], so it is Tychonoff; it is normal by [L8] and every closed subset of it is a $G_\delta$ by step 4.1, so it is perfectly normal. [step 4.1, step 5.1, L7, L8]

7.1 Being perfectly normal and $T_1$, such a $Y$ is $T_6$; it is $T_5$ and $T_4$ by [L8] and $T_1$, it is $T_{3\frac12}$ by step 6.1, and it is $T_3$, $T_{2\frac12}$, $T_2$, $T_1$ and $T_0$ by the implications already proved on this page; this is claim 4. [step 6.1, L7, L8] ∎

## Remarks

- **Claim 1 is the sharp form and claim 2 is its shadow.** A zero set is always a $G_\delta$ ([[def-zero-sets-and-cozero-sets]]), so claim 2 follows from claim 1; it is proved separately here because the explicit presentation $\bigcap_n \{x : d(x,C) < 1/(n+1)\}$ is the one quoted later, and because it makes visible that the index runs from $n = 0$, where the radius is $1$.

- **The empty closed set is not a nuisance to be waved away.** $d(x,\varnothing)$ is undefined in this library, there being no infimum of the empty set ([[def-metric-bounded-diameter]]), so each of the three claims is discharged separately at $C = \varnothing$ by a constant function or by openness.

- **What this does *not* prove.** It says nothing about which non-metrizable spaces are perfectly normal, and it gives no metrization theorem in the other direction: exhibiting a metric is the only way a space is shown metrizable here ([[def-metrizable-space]]).
````

### `thm-urysohn-lemma`

````markdown
---
id: thm-urysohn-lemma
kind: theorem
title: "Urysohn's lemma, under the axiom of dependent choice: in a normal space two disjoint closed sets are separated by a continuous function into $[0,1]$, and conversely such a space is normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function,
       def-the-dyadic-rationals-of-the-unit-interval, def-normal-and-t4-spaces,
       lem-normality-via-shrinking, def-dependent-choice, lem-finite-choice,
       def-choice-function, def-continuous-map-top, thm-continuity-characterisations-top,
       def-interior-closure-boundary-top, def-interval, def-topological-space,
       def-subspace-topology-top, lem-real-line-is-a-metric-space]
justified_by: []
external_refs: [rem-urysohn-lemma-not-a-zf-theorem]
aliases: [thm-urysohn]
landmark: true
short: "Urysohn's lemma (DC)"
proof_strategy: constructive
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
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space.

1. If $X$ is normal ([[def-normal-and-t4-spaces]]) and $A, B \subseteq X$ are
   disjoint closed sets, there is a continuous $f : X \to [0,1]$
   ([[def-continuous-map-top]], [[def-interval]]) with
   $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$.
2. Conversely, if every pair of disjoint closed subsets of $X$ admits a
   continuous function into $[0,1]$ separating them in the sense of clause 1,
   then $X$ is normal. **This direction uses no choice principle.**

**Where the choice principle of clause 1 is spent, and why not less.** The
construction below builds, for each $n \in \mathbb{N}$, an assignment of an
open set to every dyadic rational of level $n$, extending the level-$(n-1)$
assignment; at each single level the finitely many new open sets are chosen at
once by [[lem-finite-choice]], a theorem of ZF, but stringing together
infinitely many such levels, each depending on the one before, is exactly the
situation dependent choice is for. The published
[[rem-urysohn-lemma-not-a-zf-theorem]] records, with its sources, that
$\mathrm{ZF}$ and even $\mathrm{ZF}$ together with the Axiom of Countable
Choice do not suffice, and that dependent choice does; nothing here claims
dependent choice is *necessary* for clause 1, only that the construction given
is carried out in $\mathrm{ZF} + \mathrm{DC}$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R \subseteq P \times P$ entire on $P$ (every $p \in P$ has some $q \in P$ with $p \mathbin{R} q$), and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0 = a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[L1] Shrinking: if $X$ is normal, $C \subseteq X$ is closed and $O \subseteq X$ is open with $C \subseteq O$, then there is open $W$ with $C \subseteq W \subseteq \overline{W} \subseteq O$ ([[lem-normality-via-shrinking]]).

[L2] Finite choice: a function $F$ with domain a natural number $n$, all of whose values are nonempty sets, admits a choice function for the family $F[n]$ of its values ([[lem-finite-choice]], [[def-choice-function]]), a theorem of ZF.

[L3] The dyadic rationals $D = \bigcup_{n} D_n$ of $[0,1]$ are an increasing union of finite levels; for $n \in \mathbb{N}$, $D_{n+1} = D_n \cup \{\, t_j : 0 \le j < 2^n \,\}$, where $t_j$ is strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and $s_j := (j+1)/2^n$, the $2^n$ points $t_j$ are pairwise distinct and disjoint from $D_n$, and every two elements of $D$ lie together in some common $D_n$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).

[L4] Chaining: if $V_0, \dots, V_k$ ($k \ge 0$) are subsets of $X$ with $\overline{V_i} \subseteq V_{i+1}$ for every $i < k$, then $\overline{V_0} \subseteq V_k$, since $V_i \subseteq \overline{V_i} \subseteq V_{i+1}$ for each $i$ ([[def-interior-closure-boundary-top]]) makes $\overline{V_0} \subseteq V_1 \subseteq V_2 \subseteq \cdots \subseteq V_k$ a chain of inclusions.

[L5] The generic construction: if $(U_r)_{r \in D}$ is a family of open subsets of $X$ with $\overline{U_r} \subseteq U_s$ whenever $r<s$ in $D$ and $U_1 = X$, then $g(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$ ([[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]]).

[L6] The order rays $(-\infty,\tfrac12)$ and $(\tfrac12,\infty)$ are open in the usual topology of $\mathbb R$ ([[lem-real-line-is-a-metric-space]], clause 3), so their traces $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in the subspace topology of $[0,1]$ ([[def-subspace-topology-top]], [[def-interval]]). They are disjoint and contain $0$ and $1$, respectively.

[L7] Preimages of open sets under a continuous map are open ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]).

[L8] $A \subseteq \overline{A}$ for every $A \subseteq X$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is normal and $A, B \subseteq X$ are disjoint closed sets (the hypothesis of clause 1). [assume-hyp]

1.2 Assume instead that every pair of disjoint closed subsets of $X$ admits a continuous function into $[0,1]$ separating them as in clause 1 (the hypothesis of clause 2). [assume-hyp]

2.1 Under step 1.1: $A \subseteq X \setminus B$, since $A \cap B = \varnothing$, and $X \setminus B$ is open since $B$ is closed; by [L1] applied to the closed set $A$ and the open set $X \setminus B$, fix open $\Phi_0(0)$ with $A \subseteq \Phi_0(0) \subseteq \overline{\Phi_0(0)} \subseteq X \setminus B$, and put $\Phi_0(1) := X \setminus B$, defining $\Phi_0 : D_0 \to \mathcal{T}$ on $D_0 = \{0,1\}$. [step 1.1, L1, choose, construct]

2.2 Under step 1.2: let $C, E \subseteq X$ be disjoint closed sets; fix a continuous $h : X \to [0,1]$ with $C \subseteq h^{-1}(\{0\})$ and $E \subseteq h^{-1}(\{1\})$. [step 1.2, choose]

3.1 Under step 1.1: $A \subseteq \Phi_0(0)$; $\overline{\Phi_0(0)} \subseteq \Phi_0(1)$; and $\Phi_0(1) = X \setminus B$. [step 2.1]

3.2 Under step 1.2, continuing: by [L6], $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in $[0,1]$, disjoint, with $0 \in [0,\tfrac12)$ and $1 \in (\tfrac12,1]$; put $O_1 := h^{-1}(\,[0,\tfrac12)\,)$ and $O_2 := h^{-1}(\,(\tfrac12,1]\,)$, open in $X$ by [L7]. [step 2.2, L6, L7]

4.1 Under step 1.1: for $n \in \mathbb{N}$, call $\Phi : D_n \to \mathcal{T}$ **admissible at level $n$** when (i) $\overline{\Phi(r)} \subseteq \Phi(s)$ for every $r < s$ in $D_n$; (ii) $A \subseteq \Phi(0)$; (iii) $\Phi(1) = X \setminus B$. Put $P := \{\, (n,\Phi) : n \in \mathbb{N},\ \Phi \text{ admissible at level } n \,\}$, and for $(n,\Phi), (n',\Phi') \in P$ say $(n,\Phi) \mathbin{R} (n',\Phi')$ when $n' = n+1$ and $\Phi'|_{D_n} = \Phi$. By step 3.1, $(0,\Phi_0) \in P$. [step 3.1, construct]

4.2 Under step 1.2: $C \subseteq O_1$, since $h \equiv 0 \in [0,\tfrac12)$ on $C$; $E \subseteq O_2$, since $h \equiv 1 \in (\tfrac12,1]$ on $E$; and $O_1 \cap O_2 = h^{-1}\big(\,[0,\tfrac12) \cap (\tfrac12,1]\,\big) = h^{-1}(\varnothing) = \varnothing$. [step 2.2, step 3.2, L6]

5.1 Under step 1.1: let $(n,\Phi) \in P$. For each $j$ with $0 \le j < 2^n$, with $r_j, s_j, t_j$ as in [L3]: since $r_j < s_j$ in $D_n$, admissibility (i) gives $\overline{\Phi(r_j)} \subseteq \Phi(s_j)$, so by [L1] the set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$ is nonempty. [step 4.1, L1, L3]

5.2 Under step 1.2: since $C, E$ were an arbitrary disjoint closed pair, step 4.2 exhibits disjoint open supersets for every such pair, so $X$ is normal by [[def-normal-and-t4-spaces]]; this is clause 2, and no step of it used [A1]. [step 4.2]

6.1 Under step 1.1, continuing under step 5.1: by [L2] applied to the function assigning, to each $j < 2^n$, the nonempty set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$, fix a simultaneous choice, giving open $W_j$ with $\overline{\Phi(r_j)} \subseteq W_j \subseteq \overline{W_j} \subseteq \Phi(s_j)$ for every $0 \le j < 2^n$. [step 5.1, L2, choose]

7.1 Under step 1.1: define $\Phi' : D_{n+1} \to \mathcal{T}$ by $\Phi'|_{D_n} := \Phi$ and $\Phi'(t_j) := W_j$ for $0 \le j < 2^n$; this is well defined since $D_{n+1} = D_n \cup \{t_j : 0 \le j < 2^n\}$ with the $t_j$ pairwise distinct and disjoint from $D_n$ by [L3]. Then $(n,\Phi) \mathbin{R} (n+1,\Phi')$. [step 6.1, L3, construct]

8.1 Under step 1.1, with $\Phi, \Phi'$ as in step 7.1: for the $D_{n+1}$-consecutive pair $(r_j, t_j)$: $\overline{\Phi'(r_j)} = \overline{\Phi(r_j)} \subseteq W_j = \Phi'(t_j)$ by step 6.1; for the pair $(t_j, s_j)$: $\overline{\Phi'(t_j)} = \overline{W_j} \subseteq \Phi(s_j) = \Phi'(s_j)$ by step 6.1. [step 7.1, step 6.1]

9.1 Under step 1.1: for $x < y$ in $D_{n+1}$, the finitely many elements of $D_{n+1} \cap [x,y]$, listed increasingly as $x = u_0 < u_1 < \cdots < u_k = y$, are $D_{n+1}$-consecutive at each step $u_i < u_{i+1}$, and each such pair is one of the pairs of step 8.1 (every $D_{n+1}$-consecutive pair has at least one member among the new points $t_j$, since a new point was inserted into every $D_n$-consecutive gap); so $\overline{\Phi'(u_i)} \subseteq \Phi'(u_{i+1})$ at each step, and [L4] gives $\overline{\Phi'(x)} = \overline{\Phi'(u_0)} \subseteq \Phi'(u_k) = \Phi'(y)$. [step 8.1, L3, L4]

10.1 Under step 1.1: $A \subseteq \Phi'(0) = \Phi(0)$, since $0 \in D_n$ is unaffected by the extension; $\Phi'(1) = \Phi(1) = X \setminus B$, since $1 \in D_n$ is likewise unaffected; with step 9.1 this is admissibility of $\Phi'$ at level $n+1$, so $(n+1,\Phi') \in P$. [step 7.1, step 9.1, L3]

11.1 Under step 1.1: by steps 5.1, 6.1, 7.1 and 10.1, every $(n,\Phi) \in P$ has some $(n+1,\Phi') \in P$ with $(n,\Phi) \mathbin{R} (n+1,\Phi')$; so $R$ is entire on $P$. [step 7.1, step 10.1]

12.1 Under step 1.1: $P$ is nonempty by step 4.1 and $R$ is entire on $P$ by step 11.1; by [A1] applied with $a := (0,\Phi_0)$, there is a sequence $\big((m_k,\Psi_k)\big)_{k \in \mathbb{N}}$ with $(m_0,\Psi_0) = (0,\Phi_0)$ and $(m_k,\Psi_k) \mathbin{R} (m_{k+1},\Psi_{k+1})$ for every $k$. [step 4.1, step 11.1, A1, construct]

13.1 Under step 1.1: since $(n,\Phi) \mathbin{R} (n',\Phi')$ forces $n' = n+1$, and $m_0 = 0$, induction on $k$ gives $m_k = k$ for every $k \in \mathbb{N}$; so each $\Psi_k : D_k \to \mathcal{T}$ is admissible at level $k$, and $\Psi_{k+1}|_{D_k} = \Psi_k$ for every $k$. [step 12.1]

14.1 Under step 1.1: for $r \in D$, fix $n$ with $r \in D_n$ [L3] and define $V_r := \Psi_n(r)$; by step 13.1, for $n \le n'$ with $r \in D_n$, $\Psi_{n'}(r) = \Psi_n(r)$ (chaining $\Psi_{n'}|_{D_n} = \Psi_n$ through the intermediate levels), so $V_r$ does not depend on the level $n$ chosen. [step 13.1, L3, construct]

15.1 Under step 1.1: for $r < s$ in $D$, fix $n$ with $r, s \in D_n$ [L3]; then $\overline{V_r} = \overline{\Psi_n(r)} \subseteq \Psi_n(s) = V_s$ by admissibility (i) of $\Psi_n$. Also $A \subseteq V_0$ and $V_1 = X \setminus B$, by admissibility (ii) and (iii) of $\Psi_n$ for any $n$. [step 14.1, step 13.1, L3]

16.1 Under step 1.1: define $U_r := V_r$ for $r \in D$ with $r < 1$, and $U_1 := X$. For $r < s$ in $D$: if $s < 1$, $\overline{U_r} = \overline{V_r} \subseteq V_s = U_s$ by step 15.1; if $s = 1$, $\overline{U_r} = \overline{V_r} \subseteq V_1 = X \setminus B \subseteq X = U_1$ by step 15.1. So $\overline{U_r} \subseteq U_s$ whenever $r < s$ in $D$, and $U_1 = X$. [step 15.1, construct]

17.1 Under step 1.1: by [L5] applied to $(U_r)_{r \in D}$ of step 16.1, $f(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$. [step 16.1, L5]

17.2 Under step 1.1: for $b \in B$ and $r \in D$ with $r < 1$: fix $n$ with $r \in D_n$ [L3]; since $1 \in D_n$ also, admissibility (i) of $\Psi_n$ applied to $r < 1$ gives $\overline{\Psi_n(r)} \subseteq \Psi_n(1) = X \setminus B$, that is $\overline{V_r} \subseteq X \setminus B$; since $V_r \subseteq \overline{V_r}$ by [L8] and $U_r = V_r$ by step 16.1, $U_r \cap B = \varnothing$, so $b \notin U_r$. [step 14.1, step 13.1, step 16.1, L3, L8]

18.1 Under step 1.1: for $a \in A$: $a \in V_0$ by step 15.1, and $U_0 = V_0$ by step 16.1 (as $0 < 1$), so $a \in U_0$ and $0 \in \{r \in D : a \in U_r\}$; hence $f(a) \le 0$, and $f(a) \ge 0$ since $f$ maps into $[0,1]$ by step 17.1, so $f(a) = 0$. [step 17.1, step 16.1, step 15.1]

18.2 Under step 1.1: for $b \in B$: by step 17.2, $b \notin U_r$ for every $r \in D$ with $r < 1$, and $b \in U_1 = X$ by step 16.1; so $\{r \in D : b \in U_r\} \cup \{1\} = \{1\}$, giving $f(b) = \inf\{1\} = 1$. [step 17.2, step 16.1]

19.1 Steps 17.1, 18.1 and 18.2 show that, under the hypothesis of step 1.1, $f$ is a continuous map $X \to [0,1]$ with $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$, which is clause 1. [step 17.1, step 18.1, step 18.2]

20.1 Steps 19.1 and 5.2 establish clauses 1 and 2 respectively. [step 19.1, step 5.2, discharge-construct] ∎

## Remarks

- **The lemma is stated for a normal space, not a $T_4$ space.** $T_1$ is used nowhere above; it is needed only to turn a *point* into a closed set, which is the extra step the next corollary spends. The published [[rem-urysohn-lemma-not-a-zf-theorem]] states the classical $T_4$ form; the form proved here is the more general one, and the two are not in tension — the $T_4$ form follows by adding the $T_1$ hypothesis, which is not used in this proof at all.

- **Only clause 1 costs a choice principle**, and it is spent at exactly one place: the single application of dependent choice in step 12.1, which strings together the countably many admissible levels built one finite step at a time in steps 5.1–10.1. Every other existential instantiation above (steps 2.1, 2.2 and 6.1) draws from a single nonempty set or, in step 6.1, from a finite family of them via [[lem-finite-choice]], and neither costs anything beyond ZF.

- **Why the construction tracks $X \setminus B$ rather than $X$ at $r=1$.** Recording $\Phi_n(1) := X \setminus B$ throughout the recursion, rather than $X$, is what makes admissibility clause (i) alone carry the whole $B$-avoidance property: since $1 \in D_n$ for every $n$, clause (i) applied to any $r<1$ already gives $\overline{\Phi_n(r)} \subseteq \Phi_n(1) = X \setminus B$, with no separate bookkeeping. Only at the very end, in step 16.1, is the top value widened from $X \setminus B$ to $X$, which is exactly what [[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]] requires.
````

