# Audit proof-refuter brief — Wave 6, step A6

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

## Target item — `ex-the-graph-of-a-continuous-real-function-is-closed`

Normalized current SHA-256: `4fe01c8d4499bdbf3f77f1967fceab9b39cda58c39106e9502d8443d6e544269`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-the-graph-of-a-continuous-real-function-is-closed
kind: example
title: "The graph of a continuous $f : \\mathbb{R} \\to \\mathbb{R}$ is closed in $\\mathbb{R}^2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed,
       def-continuity-real, lem-real-and-metric-notions-agree, def-continuous-map-top,
       def-product-topology, lem-product-topology-on-rn, def-hausdorff-space,
       def-metrizable-space, lem-real-line-is-a-metric-space]
justified_by: []
aliases: []
landmark: false
short: "a continuous real function has closed graph"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Closed graph theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Example

Let $f : \mathbb{R} \to \mathbb{R}$ be continuous in the $\varepsilon$-$\delta$
sense of [[def-continuity-real]], give $\mathbb{R}$ its usual topology
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]) and give
$\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$ the product topology
([[def-product-topology]], [[lem-product-topology-on-rn]]). Then the graph

$$G_f \;=\; \{\, (x, f(x)) : x \in \mathbb{R} \,\}$$

is closed in $\mathbb{R}^2$.

Every polynomial function is such an $f$, and so is every function built from
continuous ones by the operations that preserve continuity; no further hypothesis
on $f$ is needed, and in particular $f$ need not be bounded, monotone, or
differentiable.

## Facts & Assumptions

**Given:** A function $f : \mathbb{R} \to \mathbb{R}$ continuous in the sense of [[def-continuity-real]], with $\mathbb{R}$ carrying its usual topology and $\mathbb{R}^2$ the product topology.

[A1] The usual topology of $\mathbb{R}$ is the metric topology of $d_{\mathbb{R}}(x,y) = |x-y|$ ([[lem-real-line-is-a-metric-space]], claim 3, [[def-metrizable-space]]).

[L1] $\mathbb{R}$ with its usual topology is Hausdorff, being metrizable ([[def-metrizable-space]], [[def-hausdorff-space]]).

[L2] For $f : \mathbb{R} \to \mathbb{R}$, continuity in the sense of [[def-continuity-real]] is continuity as a map of metric spaces ([[lem-real-and-metric-notions-agree]], claim 1), and continuity as a map of metric spaces is continuity as a map of topological spaces for the metric topologies ([[def-metrizable-space]], [[def-continuous-map-top]]).

[L3] The graph of a continuous map into a Hausdorff space is closed in the product ([[lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed]]).

## Verification

**Proof technique:** direct.

1.1 $\mathbb{R}$ with its usual topology is Hausdorff. [A1, L1]

1.2 $f$ is continuous as a map of topological spaces from $\mathbb{R}$ to $\mathbb{R}$. [A1, L2]

2.1 By [L3] applied with $X = Y = \mathbb{R}$, the graph $G_f$ is closed in $\mathbb{R} \times \mathbb{R}$. [step 1.1, step 1.2, L3] ∎

## Remarks

- **What the $\varepsilon$-$\delta$ hypothesis becomes.** The dictionary of [[lem-real-and-metric-notions-agree]] and [[def-metrizable-space]] is what lets a hypothesis stated with $\varepsilon$ and $\delta$ be fed to a theorem stated about topological spaces; there is one notion of continuity for a real function here, not two, and step 1.2 is where that is used.

- **The converse fails.** A discontinuous $\mathbb{R} \to \mathbb{R}$ may still have closed graph — the function equal to $1/x$ off $0$ does ([[fs-a-function-with-closed-graph-is-continuous]]) — so "closed graph" is strictly weaker than "continuous" for real functions. What restores the equivalence is a compact codomain ([[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]]).

- **Nothing about $\mathbb{R}$ as a domain is used.** The domain enters the argument only as an arbitrary topological space; the same proof gives a closed graph for a continuous map from any space into $\mathbb{R}$.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "lem-real-line-is-a-metric-space",
      "source_section": "Statement",
      "quote": "1. $d_{\\mathbb{R}}$ is a metric on $\\mathbb{R}$ ([[def-metric-space]]); it is called the **usual metric** of $\\mathbb{R}$. 2. For $x \\in \\mathbb{R}$ and $r > 0$ the open ball is the bounded open interval ([[def-interval]], [[def-metric-ball]]) $$B(x,r) = (x-r,\\ x+r),$$ and the closed ball is $\\bar B(x,r) = [x-r,\\ x+r]$. 3. Consequently $U \\subseteq \\mathbb{R}$ is open in the metric topology of $d_{\\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \\in U$ there is $r > 0$ with $(x-r, x+r) \\subseteq U$. This topology is called the **usual topology** of $\\mathbb{R}$. 4. $(\\mathbb{R}, d_{\\mathbb{R}})$ is not a bounded metric space ([[def-metric-bounded-diameter]]): no ball contains $\\mathbb{R}$, so $\\operatorname{diam}(\\mathbb{R})$ is not defined.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "A1",
      "source": "def-metrizable-space",
      "source_section": "Definition",
      "quote": "**The usual topology of $\\mathbb{R}$.** The absolute value makes $\\mathbb{R}$ a metric space under $d_{\\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded open intervals, and the resulting metric topology is what claim 3 of [[lem-real-line-is-a-metric-space]] names the **usual topology** of $\\mathbb{R}$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-metrizable-space",
      "source_section": "Definition",
      "quote": "**The usual topology of $\\mathbb{R}$.** The absolute value makes $\\mathbb{R}$ a metric space under $d_{\\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded open intervals, and the resulting metric topology is what claim 3 of [[lem-real-line-is-a-metric-space]] names the **usual topology** of $\\mathbb{R}$. That is the topology meant by the phrase throughout these two pages, and $\\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on these two pages is proved from the metric $d_{\\mathbb{R}}$ and the bridge above, and no example re-derives any of it.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is **Hausdorff** when any two distinct points are separated by disjoint open sets: for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Indeed, for a given $\\varepsilon > 0$ a $\\delta$ witnessing continuity witnesses the limit condition, because the limit condition quantifies over a subset of the points continuity quantifies over; and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses continuity, because the one point it omits, $x = c$, satisfies $|f(c) - f(c)| < \\varepsilon$ anyway.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-real-and-metric-notions-agree",
      "source_section": "Statement",
      "quote": "1. **Continuity.** For every $c \\in A$: $f$ is continuous at $c$ in the sense of [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and only if it is continuous as a map of metric spaces. 2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of [[def-uniform-continuity-real]] if and only if it is uniformly continuous as a map of metric spaces ([[def-metric-uniform-continuity]]). 3. **Lipschitz.** For a real $L \\ge 0$: $f$ is Lipschitz with constant $L$ as a map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if $$|f(x) - f(x')| \\le L\\,|x - x'| \\qquad \\text{for all } x, x' \\in A .$$ This displayed condition is what \"$f$ is Lipschitz with constant $L$\" means for a real function on $A$ in this library; no second definition is made. 4. **Hölder.** For a rational $\\alpha$ with $0 < \\alpha \\le 1$ and a real $C \\ge 0$: $f$ is $\\alpha$-Hölder with constant $C$ as a map of metric spaces if and only if $$|f(x) - f(x')| \\le C\\,|x - x'|^{\\alpha} \\qquad \\text{for all } x, x' \\in A ,$$ the power being the rational power of a nonnegative base ([[def-rational-power]]). 5. **Compactness, in both senses used in this library.** For $K \\subseteq \\mathbb{R}$ with the subspace metric $d_K$: - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every family of open subsets of $\\mathbb{R}$ covering $K$ has a finite subfamily covering $K$ — if and only if the metric space $(K, d_K)$ is compact ([[def-metric-compactness]]); - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and only if $(K, d_K)$ is sequentially compact as a metric space ([[def-metric-compactness-variants]]).",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-metrizable-space",
      "source_section": "Definition",
      "quote": "**The usual topology of $\\mathbb{R}$.** The absolute value makes $\\mathbb{R}$ a metric space under $d_{\\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded open intervals, and the resulting metric topology is what claim 3 of [[lem-real-line-is-a-metric-space]] names the **usual topology** of $\\mathbb{R}$. That is the topology meant by the phrase throughout these two pages, and $\\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on these two pages is proved from the metric $d_{\\mathbb{R}}$ and the bridge above, and no example re-derives any of it.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-continuous-map-top",
      "source_section": "Definition",
      "quote": "$f$ is **continuous** if it is continuous at every point of $X$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed",
      "source_section": "Statement",
      "quote": "No hypothesis is placed on $X$. The Hausdorff hypothesis is on the codomain and the continuity hypothesis is on $f$; both are used, and the converse implication — that a closed graph forces continuity — needs a *different* hypothesis on the codomain and is treated separately.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "$\\mathbb{R}$ with its usual topology is Hausdorff. [A1, L1]",
      "step": "1.1",
      "inputs": [
        "A1",
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "$f$ is continuous as a map of topological spaces from $\\mathbb{R}$ to $\\mathbb{R}$. [A1, L2]",
      "step": "1.2",
      "inputs": [
        "A1",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [L3] applied with $X = Y = \\mathbb{R}$, the graph $G_f$ is closed in $\\mathbb{R} \\times \\mathbb{R}$. [step 1.1, step 1.2, L3] ∎",
      "step": "2.1",
      "inputs": [
        "L3",
        "1.1",
        "1.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "the statement fixes or assumes nonempty spaces or named points, so an empty carrier cannot satisfy its hypotheses"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, norm, or scalar parameter has a separate zero case"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, or index has a separate one case"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "the statement has no separate coincident-map, constant-map, singleton, or collapsed-parameter branch"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "no interval endpoint or one-sided boundary enters the statement or proof"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "the proof uses only formula-defined maps, fixed quantified data, and cited implications; it selects from no asserted nonempty family"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-the-graph-of-a-continuous-real-function-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed",
    "declared_target": "lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed",
    "target_statement_provenance": null,
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-graph-of-a-continuous-real-function-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": null,
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-graph-of-a-continuous-real-function-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "lem-real-and-metric-notions-agree",
    "declared_target": "lem-real-and-metric-notions-agree",
    "target_statement_provenance": null,
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-graph-of-a-continuous-real-function-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
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
    "source": "ex-the-graph-of-a-continuous-real-function-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-product-topology",
    "declared_target": "def-product-topology",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-graph-of-a-continuous-real-function-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "lem-product-topology-on-rn",
    "declared_target": "lem-product-topology-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-graph-of-a-continuous-real-function-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "def-hausdorff-space",
    "declared_target": "def-hausdorff-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-the-graph-of-a-continuous-real-function-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
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
    "source": "ex-the-graph-of-a-continuous-real-function-is-closed",
    "sourcePage": "hausdorff-via-the-diagonal-examples",
    "batch": "wave6-topology",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (11)

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
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

### `def-hausdorff-space`

````markdown
---
id: def-hausdorff-space
kind: definition
title: "Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-standard-topologies,
       def-metrizable-space, thm-metric-hausdorff-separation,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-hausdorff, def-t2-space]
landmark: true
short: "Hausdorff space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

## Remarks

- **Hausdorff spaces have closed singletons.** Fix $x \in X$ and take the union
  of all open subsets of $X$ that avoid $x$. Every $y \ne x$ belongs to one of
  them, by Hausdorff separation of $x$ and $y$, while $x$ belongs to none. The
  union is therefore exactly $X \setminus \{x\}$, so $\{x\}$ is closed.
  Thus the Hausdorff property implies the singleton-closed ($T_1$) property.
  The converse fails: closed singletons need not give disjoint neighbourhoods
  of distinct points.

- **What the Hausdorff condition buys, in the one place this page needs it.**
  Separation of distinct points by disjoint open sets is exactly what a quotient
  map can destroy: identifying points of a Hausdorff space can leave two classes
  every pair of whose open neighbourhoods meet, and the companion page exhibits
  such a quotient of a metrizable space. Nothing weaker than an explicit witness
  settles that, since the condition is a statement about all pairs of open sets.

- **The name.** Hausdorff's own 1914 axiom system for a topological space
  included this condition, so "topological space" once meant what is now called a
  Hausdorff space; this library follows the modern convention in which
  [[def-topological-space]] assumes no separation at all and every separation
  hypothesis is stated where it is used.
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

### `def-product-topology`

````markdown
---
id: def-product-topology
kind: definition
title: "The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-initial-and-final-topology, def-topological-space, def-topology-basis-subbasis,
       thm-basis-criterion, def-choice-function, def-axiom-of-choice, lem-finite-choice,
       def-standard-topologies]
justified_by: []
aliases: [def-product-top, def-box-topology, def-projection-top]
landmark: true
short: "product topology, box topology, projections"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Box topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Box_topology"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$.
The **product** is

$$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$

and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the
product are equal exactly when they agree at every index, functions being equal
when they have the same domain and the same values. For $j \in I$ the $j$-th
**projection** is

$$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$

**Notation for a finite product.** For $I = n$ a natural number, which is the set
$\{0, 1, \dots, n-1\}$ of its predecessors, an element of $\prod_{k<n} X_k$ is a
function on $n$ and we write it $(x_0, \dots, x_{n-1})$. In particular $I = 2$
gives the **binary product**, written $X \times Y$ for $\prod_{i<2} X_i$ with
$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function
$0 \mapsto u$, $1 \mapsto v$. This is the only meaning the symbol $X \times Y$
carries on this page.

**Two facts about when the product is nonempty, stated because they are used and
because they cost something.** If some $X_{i_0}$ is empty then the product is
empty, since no function can take a value in $X_{i_0}$. Conversely, suppose every
$X_i$ is nonempty.

- For $I = n$ a natural number, the product is nonempty, and this is a theorem of
  ZF: [[lem-finite-choice]] applied to the function $i \mapsto X_i$ on $n$
  supplies a choice function $g$ for the family of values, and
  $x(i) := g(X_i)$ defines a member of $\prod_{k<n} X_k$.
- For an arbitrary $I$ the assertion "$\prod_{i \in I} X_i \ne \varnothing$
  whenever every $X_i$ is nonempty" **is** the Axiom of Choice: it is the
  formulation recorded in [[def-axiom-of-choice]], and the choice function of
  [[def-choice-function]] is exactly a point of the product of a family by
  itself. Every use of it below is flagged at the step that spends it.

**The box topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). Put

$$\mathcal{R} \;:=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\},$$

the family of **boxes**. $\mathcal{R}$ is a basis for a topology
([[thm-basis-criterion]]): it contains $\prod_i X_i$, so it covers the product,
and it is closed under binary intersections, since

$$\Big(\prod_i U_i\Big) \cap \Big(\prod_i V_i\Big) = \prod_i (U_i \cap V_i)$$

and each $U_i \cap V_i$ is open by (T3). The topology it generates is the **box
topology** $\mathcal{T}^{\square}$, and $\mathcal{R}$ is a basis for it
([[def-topology-basis-subbasis]]).

**The product topology.** The **product topology** $\mathcal{T}^{\Pi}$ on
$\prod_i X_i$ is the initial topology of the family of projections
$(\pi_i)_{i \in I}$ ([[def-initial-and-final-topology]]): the topology generated
by the subbasis

$$\mathcal{G} \;:=\; \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}, \qquad \pi_i^{-1}[U] = \prod_{j \in I} W_j \ \text{ with } W_i = U \text{ and } W_j = X_j \text{ for } j \ne i .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for $\mathcal{T}^{\Pi}$, and those finite intersections are exactly
the boxes with all but finitely many factors unrestricted:

$$\mathcal{R}^{\Pi} \;=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i, \text{ and } U_i = X_i \text{ for all but finitely many } i \,\Big\}.$$

Indeed the intersection of $\pi_{i_1}^{-1}[U_1], \dots, \pi_{i_n}^{-1}[U_n]$ is
the box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and
is $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the
whole product, the box with every factor $X_i$. Conversely a box with
$U_i = X_i$ off a finite set is such an intersection. Members of
$\mathcal{R}^{\Pi}$ are called **basic product-open** sets, and members of
$\mathcal{R}$ **boxes**. So $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, with
equality when $I$ is a natural number.

**The empty product.** For $I = \varnothing$ there is exactly one function with
domain $\varnothing$, the empty function, so $\prod_{i \in \varnothing} X_i$ is a
one-point set. A one-point set carries exactly one topology, namely
$\{\varnothing, \{\varnothing\}\}$, since a topology must contain the empty set
and the whole set and there is nothing else to contain
([[def-topological-space]]); so the box topology and the product topology agree
there, and both equal the discrete topology and the indiscrete topology
([[def-standard-topologies]]), which coincide on a one-point set. There are no
projections to speak of, and the initial topology of the empty family is indeed
the indiscrete one ([[def-initial-and-final-topology]]).

**Convention.** Unless the box topology is named explicitly, $\prod_i X_i$ always
carries the product topology in this library. That is not a matter of taste: the
product topology is the one with the characteristic property of the next item,
and the box topology has no such property.

## Remarks

- **Where the two topologies actually differ.** The box topology is finer than
  the product topology by construction, since $\mathcal{R}^{\Pi} \subseteq
  \mathcal{R}$. They agree whenever $I$ is finite; and, assuming the Axiom of Choice, for a
  family of **nonempty** spaces they differ for infinite $I$ as soon as infinitely
  many factors have a nonempty proper open subset. Nonemptiness is not decoration: if one factor is
  empty then the product is empty and carries exactly one topology, so the two
  agree however the other factors are chosen. Both statements are proved two items
  below, with that hypothesis, and the failure is recorded on this page as a false
  statement.

- **The product set is a set of functions, and that is not a technicality.** The
  factors are indexed by an arbitrary set, so there is no "list" to write down;
  writing $x = (x_i)_{i \in I}$ is notation for the function $x$. The finite case
  recovers the familiar tuple, and the identification of $\prod_{k<n}\mathbb{R}$
  with the $\mathbb{R}^n$ of [[lem-metrics-on-rn]] is literal, that item defining
  $\mathbb{R}^n$ as the set of functions $n \to \mathbb{R}$.

- **The projections carry no hypothesis.** They are defined for every product,
  including the empty one and products with an empty factor; what does need a
  hypothesis is their *surjectivity*, which is the point at which choice enters
  and which is stated separately in the next item.
````

### `fs-a-function-with-closed-graph-is-continuous`

````markdown
---
id: fs-a-function-with-closed-graph-is-continuous
kind: false-statement
title: "FALSE: every function between topological spaces whose graph is closed in the product is continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain,
       def-product-topology, def-topology-basis-subbasis, def-metrizable-space,
       lem-real-line-is-a-metric-space, def-continuity-real,
       thm-algebra-of-continuous-functions, def-continuous-map-top,
       thm-closure-characterisation-top, def-interval, cor-archimedean-reciprocal,
       def-compact-space]
justified_by: []
aliases: []
landmark: false
short: "a closed graph does not imply continuity"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Closed graph theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Analysis 3103, Handout 7 (UCL)"
      url: "https://www.ucl.ac.uk/~ucahad0/2010/3103_handout_7.pdf"
pipeline_run: null
---

## Statement

**False claim:** if $X$ and $Y$ are topological spaces and $f : X \to Y$ is a
function whose graph $G_f$ is closed in $X \times Y$ with the product topology
([[def-product-topology]]), then $f$ is continuous
([[def-continuous-map-top]]).

The refutation is the function $f : \mathbb{R} \to \mathbb{R}$, with $\mathbb{R}$
carrying its usual topology ([[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]), given by

$$f(x) := \frac{1}{x} \ \ (x \ne 0), \qquad f(0) := 0 .$$

Its graph is closed in $\mathbb{R} \times \mathbb{R}$ and it is not continuous at
$0$. Since a map into a **compact** space with closed graph *is* continuous
([[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]], claim 1),
the same witness shows as a by-product that $\mathbb{R}$ with its usual topology
is not compact ([[def-compact-space]]): the compactness hypothesis in that
theorem is what the claim above drops, and it is not redundant.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, the product $\mathbb{R} \times \mathbb{R}$ with the product topology, the function $f$ above, and its graph $G_f = \{\, z \in \mathbb{R} \times \mathbb{R} : z_1 = f(z_0) \,\}$.

[A1] A set $U \subseteq \mathbb{R}$ is open in the usual topology exactly when for every $x \in U$ there is a real $r > 0$ with $(x - r, x + r) \subseteq U$; in particular every bounded open interval is open ([[lem-real-line-is-a-metric-space]], claims 2 and 3, [[def-metrizable-space]], [[def-interval]]).

[A2] The boxes $U \times W$ with $U$ and $W$ open in $\mathbb{R}$ form a basis for the product topology on $\mathbb{R} \times \mathbb{R}$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A3] $f$ is continuous at $x_0$ exactly when for every open $V$ with $f(x_0) \in V$ there is an open $U \ni x_0$ with $f[U] \subseteq V$, and continuous when this holds everywhere ([[def-continuous-map-top]]).

[L1] A point lies in $\overline{A}$ exactly when every basic open set containing it meets $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisation-top]], claims 1(d) and 2).

[L2] The reciprocal $x \mapsto 1/x$ is continuous at every $c \ne 0$ as a function on $\{\, x \in \mathbb{R} : x \ne 0 \,\}$, being the quotient of the constant function $1$ by the identity ([[thm-algebra-of-continuous-functions]], claims 4 and 5); continuity at $c$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that $x \ne 0$ and $|x - c| < \delta$ imply $|1/x - 1/c| < \varepsilon$ ([[def-continuity-real]]).

[L3] For every real $\varepsilon > 0$ there is a natural number $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L4] If the codomain is compact and the graph is closed then the map is continuous ([[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]], claim 1, [[def-compact-space]]).

## Refutation

**Proof technique:** constructive.

1.1 Define $f : \mathbb{R} \to \mathbb{R}$ by $f(x) := 1/x$ for $x \ne 0$ and $f(0) := 0$; this is a function on all of $\mathbb{R}$, every nonzero real having a multiplicative inverse. [construct]

1.2 Let $z = (a,b) \in \mathbb{R} \times \mathbb{R}$ with $z \notin G_f$, so that $b \ne f(a)$. [given]

1.3 $f$ is not continuous at $0$: put $V := (-1,1)$, an open set containing $f(0) = 0$, and let $U$ be any open set with $0 \in U$; by [A1] there is a real $r > 0$ with $(-r, r) \subseteq U$, by [L3] there is a natural $n \ge 1$ with $1/n < \min\{r, 1\}$, and then $1/n \in U$ while $f(1/n) = n > 1$, so $f(1/n) \notin V$ and $f[U] \not\subseteq V$. [A1, A3, L3]

2.1 Suppose $a \ne 0$, so $f(a) = 1/a$ and $\varepsilon := |b - 1/a|/2 > 0$; by [L2] fix a real $\delta_1 > 0$ such that $x \ne 0$ and $|x - a| < \delta_1$ imply $|1/x - 1/a| < \varepsilon$, and put $\delta := \min\{\delta_1, |a|\} > 0$. [step 1.2, L2, choose]

2.2 Suppose $a = 0$, so $f(a) = 0$ and $b \ne 0$, hence $|b| > 0$; put $\rho := 1/(2|b|) > 0$ and $\sigma := |b|/2 > 0$ and $B := (-\rho, \rho) \times (b - \sigma, b + \sigma)$, a basic open set containing $z = (0,b)$. [step 1.2, A1, A2, construct]

3.1 With $a \ne 0$ the box $B := (a - \delta, a + \delta) \times (b - \varepsilon, b + \varepsilon)$ is a basic open set containing $z$ and $B \cap G_f = \varnothing$: for $(x,y) \in B$ one has $|x - a| < \delta \le |a|$, so $x \ne 0$ and $f(x) = 1/x$ with $|1/x - 1/a| < \varepsilon$, whence $|f(x) - b| \ge |b - 1/a| - |1/x - 1/a| > 2\varepsilon - \varepsilon = \varepsilon > |y - b|$ and therefore $y \ne f(x)$. [step 2.1, A1, A2]

3.2 With $a = 0$ the box $B$ of step 2.2 satisfies $B \cap G_f = \varnothing$: let $(x,y) \in B$ with $y = f(x)$; if $x = 0$ then $y = 0$ and $|y - b| = |b| > \sigma$, contradicting $y \in (b - \sigma, b + \sigma)$; and if $x \ne 0$ then $0 < |x| < \rho$ gives $|f(x)| = 1/|x| > 1/\rho = 2|b|$, while $|y| \le |b| + |y - b| < |b| + \sigma = 3|b|/2 < 2|b|$, contradicting $y = f(x)$. [step 2.2]

4.1 Every $z \notin G_f$ has a basic open set containing it and missing $G_f$, by step 3.1 if its first coordinate is nonzero and by step 3.2 if it is zero; so no such $z$ lies in $\overline{G_f}$, whence $\overline{G_f} = G_f$ and $G_f$ is closed in $\mathbb{R} \times \mathbb{R}$. [step 1.2, step 3.1, step 3.2, L1]

5.1 By step 1.3 and [A3] the function $f$ is not continuous, while by step 4.1 its graph is closed; so the claim is false. [step 4.1, step 1.3, A3]

6.1 By [L4] a function into a compact codomain with closed graph is continuous, so steps 4.1 and 1.3 also show that $\mathbb{R}$ with its usual topology is not compact; the witness therefore refutes the claim and locates the missing hypothesis at the same time. [step 4.1, step 1.3, step 5.1, L4, discharge-construct] ∎

## Remarks

- **Which hypothesis was dropped.** The true statements in this neighbourhood are the two halves of [[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]]: a closed graph gives continuity when the codomain is **compact**, and continuity gives a closed graph when the codomain is **Hausdorff** ([[lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed]]). The claim above asks for the first conclusion with neither hypothesis, and the witness has a Hausdorff codomain, so it is compactness and not separation that is missing.

- **Where the closedness of the graph comes from, informally.** Off the vertical axis the graph is closed because the reciprocal is continuous there; on the axis it is closed because the function *escapes*: near $0$ the values are large in absolute value, so a small box around a point $(0,b)$ with $b \ne 0$ cannot meet the graph at all. That escape is exactly what a compact codomain would forbid.

- **The value chosen at $0$ is immaterial.** Replacing $f(0) = 0$ by any fixed real $c$ leaves both conclusions standing. For the graph, a point $(0,b)$ with $b \ne c$ is separated from it by the box $(-\rho, \rho) \times (b - \sigma, b + \sigma)$ with $\sigma := |b - c|/2$ and $\rho := 1/(|b| + \sigma)$: the value at $0$ is $c$, which lies outside the second factor, and for $x \ne 0$ in the first factor $|1/x| > |b| + \sigma$ forces $|1/x - b| > \sigma$. For the discontinuity, step 1.3 uses only that $f(1/n) = n$ exceeds every bound, which does not involve $f(0)$ at all. The value $0$ is chosen above only because it makes the two computations shortest.
````

### `lem-product-topology-on-rn`

````markdown
---
id: lem-product-topology-on-rn
kind: lemma
title: "For $n \\ge 1$ the product topology on $n$ copies of the usual topology of $\\mathbb{R}$ is the metric topology of $d_\\infty$ on $\\mathbb{R}^n$, and hence also of $d_1$ and $d_2$, so $\\mathbb{R}^n$ as a product and $\\mathbb{R}^n$ as a metric space are one space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-product-topology, lem-metrics-on-rn, def-metric-topology, def-metric-ball,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-equivalent-metrics,
       thm-metric-equivalence-hierarchy, thm-of-square-roots, lem-finite-sum-laws,
       def-interval, def-max-min, lem-finite-set-has-max, lem-finite-choice, lem-of-square-monotone,
       lem-of-square-positive, lem-of-abs-value, lem-of-naturals-positive,
       lem-of-sign-rules, lem-metric-nonnegativity, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: true
short: "$\\mathbb{R}^n$ as a product is $\\mathbb{R}^n$ as a metric space"
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
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, and give $\mathbb{R}$ its usual topology,
the metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]). Let

$$\mathbb{R}^n \;=\; \prod_{k < n} \mathbb{R}$$

be the product of $n$ copies of $\mathbb{R}$ ([[def-product-topology]]). As a
**set** this is literally the $\mathbb{R}^n$ of [[lem-metrics-on-rn]], both being
the set of functions $n \to \mathbb{R}$; and $d_1$, $d_2$, $d_\infty$ are the
three metrics defined there. Then:

1. The product topology on $\mathbb{R}^n$ is the metric topology of $d_\infty$
   ([[def-metric-topology]]). The key computation is that a $d_\infty$-ball is a
   box:
   $$B_{d_\infty}(x, r) \;=\; \prod_{k<n} (x_k - r,\ x_k + r) \qquad (r > 0),$$
   a product of bounded open intervals ([[def-interval]]).
2. $d_\infty \le d_1 \le n\, d_\infty$ and $d_\infty \le d_2 \le n\, d_\infty$
   pointwise, so $d_1$ and $d_2$ are each Lipschitz equivalent to $d_\infty$
   ([[def-equivalent-metrics]]); here $n$ denotes the canonical natural
   $n \cdot 1_{\mathbb{R}}$.
3. Consequently all three metrics induce the product topology
   ([[thm-metric-equivalence-hierarchy]]). So $\mathbb{R}^n$ carrying the product
   topology and $\mathbb{R}^n$ carrying the topology of any one of $d_1$, $d_2$,
   $d_\infty$ are **one topological space**, and it is metrizable
   ([[def-metrizable-space]]).

**Why $n \ge 1$.** The metric $d_\infty$ is a maximum over $n$ terms, which does
not exist for $n = 0$; [[lem-metrics-on-rn]] carries the same hypothesis, and it
is carried here for the same reason. For $n = 0$ the product is a one-point space
and there is nothing to compare.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; the set $\mathbb{R}^n$ of functions $n \to \mathbb{R}$; the three metrics $d_1(x,y) = \sum_{k<n}|x_k - y_k|$, $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^2}$ and $d_\infty(x,y) = \max\{|x_k-y_k| : k < n\}$; points $x, y \in \mathbb{R}^n$ and a real $r > 0$. Throughout, $n$ inside a real inequality denotes the canonical natural $n \cdot 1_{\mathbb{R}}$.

[A1] $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$ for $n \ge 1$, and $\mathbb{R}^n$ is the set of functions $n \to \mathbb{R}$ ([[lem-metrics-on-rn]]).

[A2] For $I = n$ a natural number, a basis for the product topology on $\prod_{k<n}\mathbb{R}$ is the family of all boxes $\prod_{k<n} U_k$ with every $U_k$ open in $\mathbb{R}$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[L1] $B_{\mathbb{R}}(t, r) = (t-r,\ t+r)$, and $U \subseteq \mathbb{R}$ is open in the usual topology exactly when every $t \in U$ has some $r > 0$ with $(t-r,t+r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], claims 2 and 3; [[def-metric-ball]], [[def-metric-topology]], [[def-interval]]).

[L2] $U$ is open in a metric space $(X,d)$ exactly when every $u \in U$ has some $\rho > 0$ with $B_d(u,\rho) \subseteq U$ ([[def-metric-topology]], [[def-metric-ball]]); metric values are nonnegative ([[lem-metric-nonnegativity]]).

[L3] $\max S$ belongs to $S$ and is an upper bound for $S$, and likewise $\min S$ ([[def-max-min]]); a nonempty finite set of reals has a maximum, and by reflection a minimum ([[lem-finite-set-has-max]]).

[L4] For finite sums: if $a_k \le b_k$ for all $k<n$ then $\sum_{k<n} a_k \le \sum_{k<n} b_k$; if every $a_k \ge 0$ then every single term satisfies $a_j \le \sum_{k<n} a_k$; and $\sum_{k<n}\lambda = n\lambda$ ([[lem-finite-sum-laws]], claims 2 and 4).

[L5] $\sqrt{a}$ is the unique nonnegative real with $(\sqrt a)^2 = a$, for $a \ge 0$ ([[thm-of-square-roots]]); $t^2 \ge 0$ ([[lem-of-square-positive]]); $|t|^2 = t^2$ and $|t| \ge 0$ ([[lem-of-abs-value]]); and for $a, b \ge 0$ one has $a \le b$ if and only if $a^2 \le b^2$ ([[lem-of-square-monotone]]).

[L6] A function on a natural number $n$ whose values are nonempty sets has a choice function for its family of values ([[lem-finite-choice]]).

[L7] The canonical natural $n \cdot 1_{\mathbb{R}}$ is positive and $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing for $n \ge 1$ ([[lem-of-naturals-positive]]); multiplying an inequality by a positive element preserves it ([[lem-of-sign-rules]], claim 4).

[L8] Lipschitz equivalent metrics are topologically equivalent, that is they have the same metric topology ([[thm-metric-equivalence-hierarchy]], claims 1 and 2; [[def-equivalent-metrics]]).

## Proof

**Proof technique:** direct.

1.1 For $y \in \mathbb{R}^n$: $d_\infty(x,y) < r$ if and only if $|x_k - y_k| < r$ for every $k < n$, since by [L3] the maximum is one of the values $|x_k-y_k|$ and is an upper bound for all of them. [A1, L3]

1.2 For $t \in \mathbb{R}$ and $r > 0$: $|t - y_k| < r$ if and only if $y_k \in (t-r, t+r)$, by [L1]. [L1]

1.3 Write $t_k := |x_k - y_k|$ and $M := d_\infty(x,y) = \max\{t_k : k<n\}$. Then $t_j \le M$ for every $j < n$ and $M = t_{j_0}$ for some $j_0 < n$, by [L3]. [A1, L3]

1.4 $d_2(x,y)^2 = \sum_{k<n}(x_k-y_k)^2$ by [L5], and $(x_k-y_k)^2 = t_k^2 \ge 0$ by [L5]. [L5]

1.5 $n \le n^2$ as reals: for $n \ge 1$ the canonical natural satisfies $\iota(1) = 1 \le \iota(n)$ by [L7], so either $\iota(n) = 1$, in which case $\iota(n) = \iota(n)^2 = 1$, or $1 < \iota(n)$, in which case multiplying that strict inequality by $\iota(n) > 0$ gives $\iota(n) < \iota(n)^2$ by [L7]. [L7]

1.6 Conversely let $B = \prod_{k<n} U_k$ be a box with every $U_k$ open in $\mathbb{R}$ and let $x \in B$. For each $k<n$ the set $\{\, \rho \in \mathbb{R} : \rho > 0,\ (x_k-\rho,\ x_k+\rho) \subseteq U_k \,\}$ is nonempty by [L1], so [L6] supplies $\rho_k$ in it for every $k<n$; put $r := \min\{\rho_k : k<n\}$, which exists and is positive by [L3]. [A2, L1, L3, L6, choose]

2.1 $d_1(x,y) = \sum_{k<n} t_k \le \sum_{k<n} M = n M$, using $t_k \le M$ from step 1.3 and [L4]. [step 1.3, L4]

2.2 $M = t_{j_0} \le \sum_{k<n} t_k = d_1(x,y)$, since every $t_k \ge 0$ by [L5] and a single nonnegative term is at most the sum, by [L4]. [step 1.3, L4, L5]

2.3 $B_{d_\infty}(x,r) = \prod_{k<n}(x_k - r,\ x_k + r)$: by step 1.1 a point $y$ lies in the ball exactly when $|x_k-y_k| < r$ for every $k<n$, and by step 1.2 that says exactly $y_k \in (x_k-r, x_k+r)$ for every $k < n$. [step 1.1, step 1.2]

2.4 $M^2 = t_{j_0}^2 \le \sum_{k<n} t_k^2 = d_2(x,y)^2$ by steps 1.3 and 1.4 with [L4], and both $M$ and $d_2(x,y)$ are nonnegative by [L2] and [L5], so $M \le d_2(x,y)$ by [L5]. [step 1.3, step 1.4, L2, L4, L5]

2.5 $d_2(x,y)^2 = \sum_{k<n} t_k^2 \le \sum_{k<n} M^2 = n M^2 \le n^2 M^2 = (nM)^2$, using $t_k \le M$ with [L5] and [L4], then step 1.5 with $M^2 \ge 0$; since $d_2(x,y) \ge 0$ and $nM \ge 0$, [L5] gives $d_2(x,y) \le n M$. [step 1.3, step 1.4, step 1.5, L4, L5]

3.1 Every $d_\infty$-ball is a box with open factors, by step 2.3 and [L1], hence a basic open set of the product topology by [A2]; so every $d_\infty$-open set is product-open, by [L2] and [A2]. [step 2.3, A2, L1, L2]

3.2 With $r$ as in step 1.6: $B_{d_\infty}(x,r) = \prod_{k<n}(x_k-r, x_k+r) \subseteq \prod_{k<n}(x_k-\rho_k, x_k+\rho_k) \subseteq B$, since $r \le \rho_k$ for every $k$ by [L3]. [step 2.3, step 1.6, L3]

3.3 Steps 2.1, 2.2, 2.4 and 2.5 give $d_\infty \le d_1 \le n\,d_\infty$ and $d_\infty \le d_2 \le n\,d_\infty$ at every pair of points, which is claim 2, the constants $1$ and $n$ being positive by [L7]. [step 2.1, step 2.2, step 2.4, step 2.5, L7]

4.1 By steps 1.6 and 3.2 every basic open set of the product topology is $d_\infty$-open by [L2], hence every product-open set is $d_\infty$-open; with step 3.1 this gives claim 1. [step 3.1, step 1.6, step 3.2, A2, L2]

5.1 By step 3.3 and [L8] the metrics $d_1$, $d_2$ and $d_\infty$ have the same metric topology, which by step 4.1 is the product topology; so all three induce it and $\mathbb{R}^n$ with the product topology is metrizable. This is claim 3, and with steps 4.1 and 3.3 all three claims are proved. [step 3.3, step 4.1, L8] ∎

## Remarks

- **This item exists to stop one symbol meaning two things.** Before it,
  "$\mathbb{R}^2$" could denote the product of two copies of the real line or the
  metric space of [[lem-metrics-on-rn]], and "open in $\mathbb{R}^2$" would have
  had two readings. Claim 3 says they are one space, so every statement about
  open sets, closures, convergence and continuity in $\mathbb{R}^n$ proved on
  either side transfers verbatim to the other.

- **The $d_\infty$-ball is the natural object here and the $d_2$-ball is not.**
  The proof works with $d_\infty$ because its balls *are* the basic boxes; for
  $d_2$ the corresponding computation would need a round ball inscribed in a box
  and a box inscribed in a round ball, which is the content of the inequalities
  of claim 2 read geometrically.

- **Choice is spent only on finitely many radii.** Step 1.6 selects one radius per
  coordinate, and there are $n$ of them, so [[lem-finite-choice]] suffices and no
  form of the Axiom of Choice is used anywhere in this item; step 3.2 only uses the
  radius already built there.
````

### `lem-real-and-metric-notions-agree`

````markdown
---
id: lem-real-and-metric-notions-agree
kind: lemma
title: "Dictionary: for $A \\subseteq \\mathbb{R}$ with the metric $d(x,y) = |x-y|$, continuity and uniform continuity of $f : A \\to \\mathbb{R}$ agree with the metric-space notions, the Lipschitz and Hölder conditions are the metric ones instantiated, and a subset of $\\mathbb{R}$ is compact in the open-cover sense of $\\mathbb{R}$ exactly when it is a compact metric subspace"
status: published
origin: session
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

### `lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed`

````markdown
---
id: lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed
kind: lemma
title: "The graph of a continuous map into a Hausdorff space is closed in the product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed,
       def-the-diagonal-of-a-space, def-product-topology, thm-product-universal-property,
       lem-continuity-is-local-and-pastes, def-hausdorff-space, def-continuous-map-top]
justified_by: []
aliases: [lem-closed-graph-of-a-continuous-map]
landmark: true
short: "a continuous map into a Hausdorff space has closed graph"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Closed graph theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Statement

Let $X$ be a topological space, let $Y$ be Hausdorff
([[def-hausdorff-space]]) and let $f : X \to Y$ be continuous
([[def-continuous-map-top]]). Then the **graph**

$$G_f \;:=\; \{\, z \in X \times Y : z_1 = f(z_0) \,\} \;=\; \{\, (x, f(x)) : x \in X \,\}$$

is closed in $X \times Y$ with the product topology ([[def-product-topology]]).

No hypothesis is placed on $X$. The Hausdorff hypothesis is on the codomain and
the continuity hypothesis is on $f$; both are used, and the converse implication
— that a closed graph forces continuity — needs a *different* hypothesis on the
codomain and is treated separately.

## Facts & Assumptions

**Given:** A topological space $X$, a Hausdorff space $Y$, a continuous map $f : X \to Y$, and the product $X \times Y$ with the product topology and projections $\pi_0, \pi_1$.

[A1] $G_f = \{\, z \in X \times Y : (f \circ \pi_0)(z) = \pi_1(z) \,\}$, since $(f \circ \pi_0)(z) = f(z_0)$ and $\pi_1(z) = z_1$ ([[def-product-topology]], [[def-the-diagonal-of-a-space]]).

[L1] The projections $\pi_0 : X \times Y \to X$ and $\pi_1 : X \times Y \to Y$ are continuous ([[thm-product-universal-property]], claim 1).

[L2] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

[L3] If $Y$ is Hausdorff and $u, v : Z \to Y$ are continuous, then $\{\, z \in Z : u(z) = v(z) \,\}$ is closed in $Z$ ([[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 $\pi_0$ and $\pi_1$ are continuous. [L1]

2.1 $f \circ \pi_0 : X \times Y \to Y$ is continuous, being a composite of the continuous $\pi_0$ with the continuous $f$. [step 1.1, L2]

3.1 By [A1] the graph $G_f$ is the agreement set of the two continuous maps $f \circ \pi_0$ and $\pi_1$ from $X \times Y$ to the Hausdorff space $Y$, so it is closed in $X \times Y$. [step 1.1, step 2.1, A1, L3] ∎

## Remarks

- **The graph is an agreement set, and that is the whole proof.** Writing $G_f$ as the set where $f \circ \pi_0$ and $\pi_1$ agree turns a statement about a map into a statement about two maps out of one space, which is exactly the shape [[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]] handles. Equivalently $G_f = \langle f \circ \pi_0, \pi_1 \rangle^{-1}[\Delta_Y]$, the preimage of the diagonal ([[def-the-diagonal-of-a-space]]).

- **The Hausdorff hypothesis is not removable.** Let $X$ be a one-point space and let $Y = \{a,b\}$ with $a \ne b$ carry the indiscrete topology ([[def-standard-topologies]]). Every function $X \to Y$ is continuous, the only preimages to check being those of $\varnothing$ and $Y$. The product $X \times Y$ has as its open boxes only $\varnothing$ and itself, so its only closed sets are $\varnothing$ and itself; and $G_f$ is a single point, hence neither. The argument above breaks at [L3] and nowhere else.

- **Continuity of $f$ is used, and only through the composite.** Step 2.1 is the only appearance of the hypothesis; everything else is a property of the product.
````

### `thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain`

````markdown
---
id: thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain
kind: theorem
title: "A map into a compact space whose graph is closed is continuous; so for a compact Hausdorff codomain, continuity and closedness of the graph are equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed,
       def-compact-space, thm-closed-subspace-of-a-compact-space-is-compact,
       def-product-topology, def-topology-basis-subbasis, def-subspace-topology-top,
       lem-finite-choice, def-choice-function, def-countable, def-hausdorff-space,
       def-continuous-map-top, def-topological-space]
justified_by: []
aliases: [thm-closed-graph-criterion-top]
landmark: true
short: "closed graph criterion over a compact codomain"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Closed graph theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Introduction to Functional Analysis (MIT 18.102)"
      url: "https://math.mit.edu/~kehle/files/Introduction_to_functional_analysis_18_102.pdf"
pipeline_run: null
---

## Statement

Let $X$ and $Y$ be topological spaces, let $f : X \to Y$ be a function, and give
$X \times Y$ the product topology ([[def-product-topology]]), writing

$$G_f \;=\; \{\, z \in X \times Y : z_1 = f(z_0) \,\}$$

for the graph of $f$. Then:

1. **Closed graph implies continuity, over a compact codomain.** If $Y$ is
   compact ([[def-compact-space]]) and $G_f$ is closed in $X \times Y$, then $f$
   is continuous ([[def-continuous-map-top]]). *No separation hypothesis on $Y$
   is used in this direction.*
2. **Continuity implies closed graph, over a Hausdorff codomain.** If $Y$ is
   Hausdorff ([[def-hausdorff-space]]) and $f$ is continuous, then $G_f$ is
   closed in $X \times Y$.
3. **The equivalence.** If $Y$ is compact **and** Hausdorff then $f$ is
   continuous if and only if $G_f$ is closed in $X \times Y$.

**The two halves carry different hypotheses and the equivalence is stated only
where both hold.** Claim 1 needs compactness and does not need the Hausdorff
condition; claim 2 needs the Hausdorff condition and does not need compactness.
Neither hypothesis may be transplanted to the other half.

## Facts & Assumptions

**Given:** Topological spaces $X$ and $Y$, a function $f : X \to Y$, the product $X \times Y$ with the product topology, and the graph $G_f = \{\, z \in X \times Y : z_1 = f(z_0) \,\}$.

[A1] The boxes $U \times W$ with $U$ open in $X$ and $W$ open in $Y$ form a basis for the product topology on $X \times Y$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A2] $f$ is continuous at $x_0$ exactly when for every open $V \subseteq Y$ with $f(x_0) \in V$ there is an open $U \subseteq X$ with $x_0 \in U$ and $f[U] \subseteq V$, and $f$ is continuous when this holds at every point of $X$ ([[def-continuous-map-top]]).

[A3] A subset of a space is closed exactly when its complement is open; a finite intersection of open sets is open, and $X$ itself is open ([[def-topological-space]]).

[L1] A space is compact when every family of its open sets whose union is the whole space has a finite subfamily whose union is the whole space; a subset is compact when it is compact as a subspace, whose open sets are the traces of the open sets of the ambient space ([[def-compact-space]], [[def-subspace-topology-top]]).

[L2] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[L3] A finite set is equinumerous with some natural number $n$, hence may be listed as $a_0, \dots, a_{n-1}$ ([[def-countable]]).

[L4] If $F$ is a function with domain a natural number $n$ all of whose values are nonempty sets, then the family of its values has a choice function; this is a theorem of ZF ([[lem-finite-choice]], [[def-choice-function]]).

[L5] If $Y$ is Hausdorff and $f$ is continuous then $G_f$ is closed in $X \times Y$ ([[lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $Y$ is compact and $G_f$ is closed, and put $N := (X \times Y) \setminus G_f$, which is open. [A3]

1.2 Fix $x_0 \in X$ and an open $V \subseteq Y$ with $f(x_0) \in V$, and put $C := Y \setminus V$; then $C$ is closed in $Y$, hence a compact subspace. [A3, L2]

1.3 Let $\mathcal{P}$ be the set of all pairs $(U, W)$ such that $U$ is open in $X$, $W$ is open in $Y$, $x_0 \in U$ and $(U \times W) \cap G_f = \varnothing$; this family is specified by a formula and nothing is selected in forming it. [construct]

1.4 If $Y$ is Hausdorff and $f$ is continuous then $G_f$ is closed, which is claim 2. [L5]

2.1 Every $y \in C$ lies in $W$ for some $(U,W) \in \mathcal{P}$: since $f(x_0) \in V$ and $y \notin V$ we have $y \ne f(x_0)$, so $(x_0, y) \in N$, and by [A1] there is a basic box $U \times W$ with $(x_0,y) \in U \times W \subseteq N$, which gives $(U,W) \in \mathcal{P}$. [step 1.1, step 1.2, step 1.3, A1]

3.1 The family $\mathcal{V} := \{\, W \cap C : (U,W) \in \mathcal{P} \text{ for some } U \,\}$ consists of sets open in the subspace $C$ and its union is $C$, by step 2.1. [step 2.1, L1]

4.1 By compactness of $C$ there is a finite subfamily of $\mathcal{V}$ whose union is $C$; being finite it may be listed as $V_0, \dots, V_{n-1}$ for some $n \in \mathbb{N}$, so that $C \subseteq \bigcup_{i<n} V_i$. [step 1.2, step 3.1, L1, L3]

5.1 For each $i < n$ the set $\mathcal{P}_i := \{\, (U,W) \in \mathcal{P} : W \cap C = V_i \,\}$ is nonempty, since $V_i \in \mathcal{V}$; so by [L4] applied to the function $i \mapsto \mathcal{P}_i$ on $n$ there is a choice function on the family of these sets, and it supplies a pair $(U_i, W_i) \in \mathcal{P}_i$ for every $i < n$. [step 4.1, L4, choose]

6.1 Put $U := \{\, x \in X : x \in U_i \text{ for every } i < n \,\}$; this is $X$ when $n = 0$ and a finite intersection of open sets otherwise, hence open in either case, and $x_0 \in U$ since $x_0 \in U_i$ for every $i < n$. [step 5.1, A3, construct]

7.1 $f[U] \subseteq V$: let $x \in U$ and suppose $f(x) \notin V$, that is $f(x) \in C$; then $f(x) \in V_i = W_i \cap C \subseteq W_i$ for some $i < n$ by step 4.1, while $x \in U \subseteq U_i$, so the point $(x, f(x))$ of $G_f$ lies in $U_i \times W_i$, contradicting $(U_i \times W_i) \cap G_f = \varnothing$; hence $f(x) \in V$. [step 4.1, step 5.1, step 6.1]

8.1 By steps 6.1 and 7.1 there is, for the arbitrary $x_0 \in X$ and the arbitrary open $V$ containing $f(x_0)$ fixed in step 1.2, an open $U \ni x_0$ with $f[U] \subseteq V$; so $f$ is continuous by [A2], which is claim 1. [step 1.2, step 6.1, step 7.1, A2]

9.1 If $Y$ is compact and Hausdorff then step 8.1 gives one implication and step 1.4 the other, so continuity of $f$ and closedness of $G_f$ are equivalent, which is claim 3; with steps 8.1 and 1.4 the theorem is proved. [step 8.1, step 1.4] ∎

## Remarks

- **The choice cost is exactly one finite choice, and the family it is made from is defined by a formula.** The textbook phrasing "for each $y \in C$ choose a box around $(x_0,y)$ missing the graph" selects one object for each point of an arbitrary set and is an application of the Axiom of Choice. Step 1.3 avoids it by collecting *all* admissible pairs into one formula-defined family; only after compactness has cut the cover down to finitely many members is anything chosen, and that choice is licensed by [[lem-finite-choice]], a theorem of ZF.

- **Why the empty case is written out.** If $V = Y$ then $C = \varnothing$ and the finite subfamily of step 4.1 may be empty, so $n = 0$; the set $U$ of step 6.1 is then $X$, which is exactly what is wanted. Writing $U$ as a defining condition rather than as an intersection is what makes that reading available, an intersection over no sets not being defined.

- **Compactness of the codomain is doing the work in claim 1, and it is not removable.** Nothing in that direction separates points, and no Hausdorff hypothesis appears; what is used is that the *complement of the target open set* is compact. A discontinuous function with closed graph into a non-compact Hausdorff codomain is recorded on this page as a false statement.
````

