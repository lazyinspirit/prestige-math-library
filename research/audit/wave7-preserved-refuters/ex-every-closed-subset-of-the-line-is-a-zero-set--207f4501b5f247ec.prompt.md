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

- critical risk (9): 7 declared dependencies; 3 cited facts; biconditional / both-direction claim; boundary-sensitive language
- Wave 7 ai-generated statement seed

## Target item — `ex-every-closed-subset-of-the-line-is-a-zero-set`

Normalized current SHA-256: `f489da2312c513edb45c54cc5491b87724395da444742db83af3b2a72ffcfb3e`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-every-closed-subset-of-the-line-is-a-zero-set
kind: example
title: "Every closed subset of $\\mathbb{R}$ is a zero set and a $G_\\delta$, as the perfect-normality criterion predicts"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set,
       thm-metric-spaces-are-tychonoff-and-perfectly-normal, def-zero-sets-and-cozero-sets,
       def-g-delta-and-f-sigma-in-a-topological-space,
       def-metric-space, def-metrizable-space, lem-real-line-is-a-metric-space]
justified_by: []
aliases: []
landmark: false
short: "closed subsets of $\\mathbb{R}$ are zero sets"
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
    - title: "Zero set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zero_set"
pipeline_run: null
---

## Example

$\mathbb{R}$ with its usual topology is metrizable
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]), hence
perfectly normal by [[thm-metric-spaces-are-tychonoff-and-perfectly-normal]]:
every closed $C \subseteq \mathbb{R}$ is a zero set
([[def-zero-sets-and-cozero-sets]]) and a $G_\delta$
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Taking $C := \{0\}$
makes both witnesses explicit: $C = Z(f)$ for $f(x) := |x|$, and
$C = \bigcap_{n \in \mathbb{N}} \big(-\tfrac{1}{n+1},\ \tfrac{1}{n+1}\big)$.

This is exactly what
[[thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set]]
predicts of a perfectly normal space, illustrated by the metric case that
theorem's own proof does not need to run through, since perfect normality of
$\mathbb{R}$ is already established directly from the metric.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, $C = \{0\}$, and $f(x)=|x|$.

[L1] Every closed subset of a metric space is a zero set and a $G_\delta$: for $C \ne \varnothing$ closed, $C = Z(x \mapsto d(x,C))$ and $C = \bigcap_n \{x : d(x,C) < 1/(n+1)\}$ ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]], clauses 1–2).

[L2] $\{0\}$ is closed in $\mathbb{R}$, and $d(x,\{0\}) = |x-0| = |x|$ ([[def-metric-space]], [[lem-real-line-is-a-metric-space]]).

## Verification

**Proof technique:** direct.

1.1 $C=\{0\}$ is closed and nonempty; by [L1] with $d(x,C)=|x|$ (step following [L2]), $C = Z(f)$ with $f(x)=|x|$, and $C = \bigcap_n \{x : |x| < 1/(n+1)\}$. [given, L1, L2]

1.2 $\{x : |x| < 1/(n+1)\} = \big(-\tfrac{1}{n+1}, \tfrac{1}{n+1}\big)$ for every $n \in \mathbb{N}$, directly unfolding the absolute-value inequality. [given, algebra]

2.1 By steps 1.1 and 1.2, $\{0\} = Z(f)$ with $f(x)=|x|$, and $\{0\} = \bigcap_n \big(-\tfrac{1}{n+1},\tfrac{1}{n+1}\big)$, exhibiting $\{0\}$ as both a zero set and a $G_\delta$. [step 1.1, step 1.2] ∎

## Remarks

- **No general closed subset of $\mathbb{R}$ is exceptional here.** The argument above uses nothing about $\{0\}$ beyond it being closed and nonempty in a metric space; the same two formulas, with $d(x,C)$ in place of $|x|$, exhibit *any* closed $C \subseteq \mathbb{R}$ as a zero set and a $G_\delta$, choice-free.

- **This does not exercise the harder half of [[thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set]].** That theorem's forward direction builds a zero set from a $G_\delta$ presentation via a countable family of Urysohn functions; here the zero set is read off directly from the metric, with no such construction and no dependent choice.
````

## Wave 7 provenance row for the target

```json
{
  "id": "ex-every-closed-subset-of-the-line-is-a-zero-set",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "Direct verification: |x| vanishes exactly at 0 and the shrinking interval intersection is exactly {0}; this is a local specialization of the standard metric result.",
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
      "source": "thm-metric-spaces-are-tychonoff-and-perfectly-normal",
      "source_section": "Statement",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology\n([[def-metric-topology]]), and write $1/(n+1)$ for the inverse of the canonical\nnatural $\\iota(n+1)$ of $\\mathbb{R}$ ([[def-canonical-natural]]). Then:\n\n1. **Every closed set is a zero set.** For closed $C \\subseteq X$ there is a\n   continuous $f : X \\to \\mathbb{R}$ with $C = Z(f)$\n   ([[def-zero-sets-and-cozero-sets]]); for $C \\ne \\varnothing$ one may take\n   $f(x) = d(x,C)$ ([[def-metric-bounded-diameter]]), and for $C = \\varnothing$\n   the constant function $1$.\n2. **Every closed set is a $G_\\delta$**\n   ([[def-g-delta-and-f-sigma-in-a-topological-space]]): for $C \\ne \\varnothing$,\n   $$C \\;=\\; \\bigcap_{n \\in \\mathbb{N}} \\{\\, x \\in X : d(x,C) < 1/(n+1) \\,\\},$$\n   an intersection of open sets, and $\\varnothing$ is open hence a $G_\\delta$.\n3. **$X$ is completely regular** ([[def-completely-regular-and-tychonoff-spaces]]):\n   for closed $C$ and $x_0 \\notin C$ the function\n   $f(x) := \\min\\{1,\\ d(x,C)/r\\}$ with $r := d(x_0,C)$ is continuous, takes the\n   value $1$ at $x_0$ and the value $0$ on $C$, when $C \\ne \\varnothing$; for\n   $C = \\varnothing$ the constant function $1$ serves.\n4. Consequently every metrizable space ([[def-metrizable-space]]) is **Tychonoff**\n   and **perfectly normal**, and hence $T_6$, $T_5$, $T_4$, $T_{3\\frac12}$,\n   $T_3$, $T_{2\\frac12}$, $T_2$, $T_1$ and $T_0$.\n\n**No choice principle is used anywhere below.**",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-metric-space",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this\nlibrary ([[def-real-numbers]]) and carrying its order ([[def-real-order]]).\n\nLet $X$ be a set. A **metric** on $X$ is a function\n$d : X \\times X \\to \\mathbb{R}$ such that for all $x, y, z \\in X$:\n\n- **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$.\n- **(M2) Symmetry.** $d(x,y) = d(y,x)$.\n- **(M3) Triangle inequality.** $d(x,z) \\le d(x,y) + d(y,z)$.\n\nA **metric space** is a pair $(X,d)$ consisting of a set $X$ and a metric $d$ on\nit. The elements of $X$ are its **points** and $d(x,y)$ is the **distance** from\n$x$ to $y$. When only one metric is in play we write $X$ for $(X,d)$; when\nseveral are, the metric is always named.\n\n**The values of a metric are real numbers.** The codomain is $\\mathbb{R}$, so\n$d(x,y)$ is an honest element of the complete ordered field and every\ninequality above is an inequality there. No infinite value is permitted;\n[[rem-metric-axiom-conventions]] records why extended metrics are not treated in\nthis library.\n\n**Nonnegativity is deliberately absent from the axiom list.** Many texts add a\nfourth axiom $d(x,y) \\ge 0$. It is redundant: (M1), (M2) and (M3) already force\nit, as [[lem-metric-nonnegativity]] proves. Nothing below assumes it before that\nlemma is available.\n\n**Pseudometric.** A **pseudometric** on $X$ is a function\n$p : X \\times X \\to \\mathbb{R}$ satisfying (M2), (M3) and the weakening\n\n- **(M1') Reflexivity.** $p(x,x) = 0$ for every $x \\in X$\n\nof (M1). A pseudometric may therefore assign distance $0$ to two distinct\npoints. Every metric is a pseudometric, and a pseudometric is a metric exactly\nwhen $p(x,y) = 0$ forces $x = y$.\n\n**Ultrametric.** An **ultrametric** on $X$ is a metric $d$ that in addition\nsatisfies\n\n- **(M3') Strong triangle inequality.** $d(x,z) \\le \\max\\{d(x,y), d(y,z)\\}$\n\nfor all $x, y, z \\in X$, where the maximum is that of a two-element subset of\n$\\mathbb{R}$, which exists and is one of the two elements\n([[def-max-min]], [[lem-finite-set-has-max]]). An **ultrametric space** is a pair\n$(X,d)$ with $d$ an ultrametric.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-real-line-is-a-metric-space",
      "source_section": "Statement",
      "quote": "Define $d_{\\mathbb{R}} : \\mathbb{R} \\times \\mathbb{R} \\to \\mathbb{R}$ by\n$d_{\\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:\n\n1. $d_{\\mathbb{R}}$ is a metric on $\\mathbb{R}$ ([[def-metric-space]]); it is\n   called the **usual metric** of $\\mathbb{R}$.\n2. For $x \\in \\mathbb{R}$ and $r > 0$ the open ball is the bounded open interval\n   ([[def-interval]], [[def-metric-ball]])\n   $$B(x,r) = (x-r,\\ x+r),$$\n   and the closed ball is $\\bar B(x,r) = [x-r,\\ x+r]$.\n3. Consequently $U \\subseteq \\mathbb{R}$ is open in the metric topology of\n   $d_{\\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \\in U$\n   there is $r > 0$ with $(x-r, x+r) \\subseteq U$. This topology is called the\n   **usual topology** of $\\mathbb{R}$.\n4. $(\\mathbb{R}, d_{\\mathbb{R}})$ is not a bounded metric space\n   ([[def-metric-bounded-diameter]]): no ball contains $\\mathbb{R}$, so\n   $\\operatorname{diam}(\\mathbb{R})$ is not defined.",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "$C=\\{0\\}$ is closed and nonempty; by [L1] with $d(x,C)=|x|$ (step following [L2]), $C = Z(f)$ with $f(x)=|x|$, and $C = \\bigcap_n \\{x : |x| < 1/(n+1)\\}$. [given, L1, L2]",
      "step": "1.1",
      "inputs": [
        "given",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "$\\{x : |x| < 1/(n+1)\\} = \\big(-\\tfrac{1}{n+1}, \\tfrac{1}{n+1}\\big)$ for every $n \\in \\mathbb{N}$, directly unfolding the absolute-value inequality. [given, algebra]",
      "step": "1.2",
      "inputs": [
        "given",
        "algebra"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By steps 1.1 and 1.2, $\\{0\\} = Z(f)$ with $f(x)=|x|$, and $\\{0\\} = \\bigcap_n \\big(-\\tfrac{1}{n+1},\\tfrac{1}{n+1}\\big)$, exhibiting $\\{0\\}$ as both a zero set and a $G_\\delta$. [step 1.1, step 1.2] ∎",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "1.1",
        "1.2"
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
      "status": "not_applicable",
      "reason": "The statement has no distinguished endpoint and codomain-boundary behavior parameter or case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.1: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "statement: the forward implication was followed through its numbered proof steps and its hypotheses were not reversed"
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "statement: the reverse implication was followed independently through its numbered proof steps"
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
    "source": "ex-every-closed-subset-of-the-line-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "declared_target": "thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-every-closed-subset-of-the-line-is-a-zero-set",
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
    "source": "ex-every-closed-subset-of-the-line-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-zero-sets-and-cozero-sets",
    "declared_target": "def-zero-sets-and-cozero-sets",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-every-closed-subset-of-the-line-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-g-delta-and-f-sigma-in-a-topological-space",
    "declared_target": "def-g-delta-and-f-sigma-in-a-topological-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-every-closed-subset-of-the-line-is-a-zero-set",
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
    "source": "ex-every-closed-subset-of-the-line-is-a-zero-set",
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
    "source": "ex-every-closed-subset-of-the-line-is-a-zero-set",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (7)

### `def-g-delta-and-f-sigma-in-a-topological-space`

````markdown
---
id: def-g-delta-and-f-sigma-in-a-topological-space
kind: definition
title: "$G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-countable, def-f-sigma-g-delta,
       def-metrizable-space, def-open-and-closed-in-r, def-neighbourhood-r,
       def-metric-topology, lem-real-line-is-a-metric-space, def-interval,
       def-canonical-natural, cor-archimedean-reciprocal, lem-nat-nonzero-is-successor]
justified_by: []
aliases: [def-g-delta-top, def-f-sigma-top]
landmark: true
short: "$G_\\delta$ and $F_\\sigma$ in a space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
    - title: "Fσ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/F%CF%83_set"
    - title: "J. Munkres, Topology, 2nd ed., §30"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$A \subseteq X$.

- $A$ is a **$G_\delta$ set of $X$** when there is a sequence
  $(V_n)_{n \in \mathbb{N}}$ of open subsets of $X$ with
  $$A \;=\; \bigcap_{n \in \mathbb{N}} V_n .$$
- $A$ is an **$F_\sigma$ set of $X$** when there is a sequence
  $(F_n)_{n \in \mathbb{N}}$ of closed subsets of $X$ with
  $$A \;=\; \bigcup_{n \in \mathbb{N}} F_n .$$

As everywhere in this library $\mathbb{N}$ contains $0$, so both indexings start
at $0$. An at most countable *family* may always be presented as a sequence
([[def-countable]]): a finite list $V_0, \dots, V_m$ is extended by $V_n := V_m$
for $n > m$, which changes neither the intersection nor the union, so nothing is
lost by indexing over $\mathbb{N}$.

**The two classes are exchanged by complementation.** $A$ is $F_\sigma$ in $X$ if
and only if $X \setminus A$ is $G_\delta$ in $X$. If $A = \bigcup_n F_n$ with
each $F_n$ closed then $X \setminus A = \bigcap_n (X \setminus F_n)$ by De Morgan
and each $X \setminus F_n$ is open ([[def-topological-space]]); the converse is
the same computation read backwards.

**Every open set is $G_\delta$ and every closed set is $F_\sigma$**, by the
constant sequence $V_n := A$, respectively $F_n := A$. **Neither converse
holds**, and $\mathbb{R}$ with its usual topology already refutes both. The
singleton $\{0\}$ is a $G_\delta$ that is **not open**: it is
$\bigcap_{n \in \mathbb{N}} (-1/(n+1),\ 1/(n+1))$, since $0$ lies in every one of
those intervals while a real $t \ne 0$ is excluded at some index, the
Archimedean property giving a natural $k \ge 1$ with $1/k < |t|$ and $k$ being a
successor $n+1$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]],
[[def-canonical-natural]]); and $\{0\}$ is not open because every bounded open
interval $(a,b)$ with $a < 0 < b$ contains the point $b/2 \ne 0$
([[def-interval]], [[lem-real-line-is-a-metric-space]], claim 3). Complementing,
$\mathbb{R} \setminus \{0\}$ is an $F_\sigma$ that is **not closed**, its
complement $\{0\}$ not being open.

**The condition that is a real restriction is the other pairing**, namely that
every **closed** set be a $G_\delta$, equivalently that every **open** set be an
$F_\sigma$. That is not automatic in an arbitrary space, and it is exactly the
second conjunct of perfect normality later on this page. It must not be confused
with the two automatic inclusions above: they hold everywhere and say nothing
about a space.

**Agreement with the real-line notion, stated because a second notion of the
same name would be a defect.** [[def-f-sigma-g-delta]] defines $F_\sigma$ and
$G_\delta$ subsets of $\mathbb{R}$ by the same two displayed conditions, with
"open" and "closed" read in the sense of [[def-open-and-closed-in-r]]. Those two
words name the same two collections of subsets of $\mathbb{R}$ as the usual
topology of $\mathbb{R}$ does, and the verification is one line of unfolding.
[[def-open-and-closed-in-r]] calls $U$ open when every $x \in U$ admits
$\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$, where
$N_\varepsilon(x) = (x - \varepsilon,\ x + \varepsilon)$
([[def-neighbourhood-r]]); [[def-metric-topology]] calls $U$ open in
$(\mathbb{R}, d_{\mathbb{R}})$ when every $x \in U$ admits $r > 0$ with
$B(x,r) \subseteq U$, and $B(x,r) = (x-r,\ x+r)$ by claim 2 of
[[lem-real-line-is-a-metric-space]]. The two conditions are therefore the same
condition word for word, so the two collections of open subsets of $\mathbb{R}$
are one collection, and hence so are the two collections of closed subsets, each
being the complements of the other collection. The usual topology of $\mathbb{R}$
is the metric topology of $d_{\mathbb{R}}$ ([[def-metrizable-space]]). Since the
two definitions quantify over one collection of open sets and one collection of
closed sets, a subset of $\mathbb{R}$ is $G_\delta$ in the sense above, for
$\mathbb{R}$ with its usual topology, if and only if it is $G_\delta$ in the
sense of [[def-f-sigma-g-delta]]; and likewise for $F_\sigma$. **There is one
notion here, not two**, and every statement proved about $F_\sigma$ or $G_\delta$
subsets of $\mathbb{R}$ elsewhere in this library may be quoted verbatim as a
statement about the topological space $\mathbb{R}$.

## Remarks

- **The letters.** $F$ for *ferme* with $\sigma$ for *somme*, $G$ for *Gebiet*
  with $\delta$ for *Durchschnitt*, as [[def-f-sigma-g-delta]] records.

- **Neither class is closed under complementation**, which is why both names are
  needed; and neither is a topology, an arbitrary union of $G_\delta$ sets being
  no longer $G_\delta$ in general. What is true, and all that is used on this
  page, is the complementation duality above together with the fact that a finite
  intersection of $G_\delta$ sets and a finite union of $F_\sigma$ sets stay in
  their class, by rearranging a finite array of sequences.

- **In a metric space every closed set is $G_\delta$.** That is proved later on
  this page from the distance function, and it is the reason every metrizable
  space is perfectly normal. In a general space it can fail, so it is a genuine
  hypothesis and not a convenience.
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

### `def-zero-sets-and-cozero-sets`

````markdown
---
id: def-zero-sets-and-cozero-sets
kind: definition
title: "Zero sets and cozero sets of continuous real-valued functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-continuous-map-top, thm-continuity-characterisations-top,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-interval,
       def-subspace-topology-top, def-g-delta-and-f-sigma-in-a-topological-space,
       def-canonical-natural, cor-archimedean-reciprocal, lem-nat-nonzero-is-successor]
justified_by: []
aliases: [def-zero-set-top, def-cozero-set-top]
landmark: false
short: "zero set, cozero set"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Zero set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zero_set"
    - title: "Cozero set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cozero_set"
    - title: "L. Gillman and M. Jerison, Rings of Continuous Functions, Ch. 1"
      url: "https://link.springer.com/book/10.1007/978-1-4615-7819-2"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathbb{R}$ carry its usual topology, the metric topology of
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]). For a continuous $f : X \to \mathbb{R}$
([[def-continuous-map-top]]) put

$$Z(f) \;:=\; f^{-1}[\{0\}] \;=\; \{\, x \in X : f(x) = 0 \,\}, \qquad \operatorname{coz}(f) \;:=\; X \setminus Z(f) \;=\; \{\, x \in X : f(x) \ne 0 \,\} .$$

$Z(f)$ is the **zero set** of $f$ and $\operatorname{coz}(f)$ its **cozero set**.
A subset of $X$ is *a zero set of $X$* when it is $Z(f)$ for some continuous
$f : X \to \mathbb{R}$, and *a cozero set of $X$* when it is the complement of
one. Where the target is written $[0,1]$ ([[def-interval]]) with its subspace
topology ([[def-subspace-topology-top]]), a continuous map $X \to [0,1]$ is the
same thing as a continuous map $X \to \mathbb{R}$ with all values in $[0,1]$, by
the characteristic property of a map into a subspace recorded in
[[def-subspace-topology-top]]; so nothing below depends on which of the two
targets is written.

**Every zero set is closed and every cozero set is open.** $\{0\}$ is closed in
$\mathbb{R}$: its complement $\mathbb{R} \setminus \{0\}$ is open, since a point
$t \ne 0$ has the bounded open interval $(t - |t|,\ t + |t|)$ around it inside
$\mathbb{R} \setminus \{0\}$ ([[def-interval]], [[lem-real-line-is-a-metric-space]],
claim 3). The preimage of a closed set under a continuous map is closed
([[thm-continuity-characterisations-top]], clause (c)).

**Every zero set is a $G_\delta$ and every cozero set an $F_\sigma$**
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Writing $\iota$ for the
canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]), so that $1/(n+1)$
abbreviates the inverse of $\iota(n+1)$, put

$$V_n \;:=\; f^{-1}\big[\,(-1/(n+1),\ 1/(n+1))\,\big] \qquad (n \in \mathbb{N}).$$

Each $V_n$ is open, being the preimage of an open interval
([[thm-continuity-characterisations-top]], clause (b)). Clearly
$Z(f) \subseteq \bigcap_n V_n$. Conversely, if $f(x) \ne 0$ then
$\varepsilon := |f(x)| > 0$, and [[cor-archimedean-reciprocal]] gives a natural
$k \ge 1$ with $1/k < \varepsilon$; since $k \ne 0$ it is a successor,
$k = n+1$ with $n \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]), so
$|f(x)| > 1/(n+1)$ and $x \notin V_n$. Hence $Z(f) = \bigcap_{n} V_n$ is a
$G_\delta$, and $\operatorname{coz}(f)$ is an $F_\sigma$ by complementation.

**Both extremes occur.** The constant maps are continuous, since the preimage of
any set under a constant map is $\varnothing$ or $X$
([[thm-continuity-characterisations-top]], clause (b)); so $X = Z(0)$ and
$\varnothing = Z(1)$ are zero sets of every space, where $0$ and $1$ denote the
corresponding constant maps.

## Remarks

- **A closed set need not be a zero set, and no witness for that is exhibited
  here.** The zero sets of $X$ are exactly the closed sets that a continuous
  real-valued function can see, and a space may have very few continuous
  real-valued functions: in the indiscrete topology on a set with at least two
  points, every continuous map to $\mathbb{R}$ is constant, because a nonconstant
  one would pull back two disjoint intervals to two disjoint nonempty open sets.
  So the only zero sets there are $\varnothing$ and $X$ — which in that space is
  also all of the closed sets and all of the $G_\delta$ sets, the only open sets
  being $\varnothing$ and $X$. That space therefore illustrates the scarcity of
  continuous functions without separating the two classes; a space with a closed
  set that is not a zero set is not constructed on this page.

- **Where zero sets are used on this page.** They are the vocabulary of complete
  regularity: the defining function separating a point from a closed set $C$
  places $C$ inside a zero set and the point in the corresponding cozero set.
  They also give the sharp form of the metric case, where *every* closed set is a
  zero set.

- **The name.** $\operatorname{coz}$ is the standard notation in the theory of
  rings of continuous functions, where the zero sets of $X$ are the closed sets
  the ring can detect; nothing of that theory is used here.
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

### `thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set`

````markdown
---
id: thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set
kind: theorem
title: "Under dependent choice a space is perfectly normal if and only if it is normal and every closed set is a zero set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-urysohn-lemma, lem-a-uniformly-approximable-real-valued-map-is-continuous,
       def-completely-normal-and-perfectly-normal-spaces, def-zero-sets-and-cozero-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-normal-and-t4-spaces,
       def-dependent-choice, def-countable-choice, def-series, thm-geometric-series,
       def-continuous-map-top, thm-continuity-characterisations-top, lem-of-abs-value,
       lem-of-sequence-basics, thm-nonnegative-series-bounded-partial-sums]
justified_by: []
aliases: []
landmark: true
short: "perfectly normal iff normal + closed sets are zero sets (DC)"
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
    - title: "Perfectly normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space#Perfectly_normal_spaces_and_completely_normal_spaces"
    - title: "J. Munkres, Topology, 2nd ed., §33, Exercise 6"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space. Then $X$ is perfectly normal
([[def-completely-normal-and-perfectly-normal-spaces]]) if and only if $X$ is
normal ([[def-normal-and-t4-spaces]]) and every closed subset of $X$ is a zero
set ([[def-zero-sets-and-cozero-sets]]).

**Only the forward direction spends a choice principle beyond the dependent
choice already inside Urysohn's lemma.** Producing a Urysohn function for
every level of a countable presentation $C = \bigcap_n U_n$, all at once, is in
form an application of the Axiom of Countable Choice ([[def-countable-choice]]);
the argument below performs it as a direct instance of dependent choice itself,
using a relation that does not depend on the previous term, so no hypothesis
beyond DC is added and none is hidden. The converse direction uses no choice
principle at all.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice; for the forward direction, $X$ perfectly normal; for the converse, $X$ normal with every closed subset a zero set.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R \subseteq P \times P$ entire on $P$, and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0=a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[A2] $X$ is perfectly normal exactly when $X$ is normal and every closed subset of $X$ is a $G_\delta$ ([[def-completely-normal-and-perfectly-normal-spaces]]).

[L1] $A \subseteq X$ is a $G_\delta$ set when $A = \bigcap_{n \in \mathbb{N}} V_n$ for some open sets $V_n$ ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[L2] Urysohn's lemma, clause 1: assuming DC, if $X$ is normal and $P, Q \subseteq X$ are disjoint closed sets, there is a continuous $h : X \to [0,1]$ with $P \subseteq h^{-1}(\{0\})$ and $Q \subseteq h^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L3] For continuous $k : X \to \mathbb{R}$, $Z(k) := k^{-1}(\{0\})$; every zero set is closed and a $G_\delta$ ([[def-zero-sets-and-cozero-sets]]).

[L4] The geometric series: $\sum_{k \ge 0} r^k = 1/(1-r)$ for real $|r|<1$ ([[thm-geometric-series]]); in particular $\sum_{k=0}^{\infty} 2^{-(k+1)} = \tfrac12 \sum_{k=0}^{\infty} 2^{-k} = \tfrac12 \cdot \dfrac{1}{1-\frac12} = 1$, a convergent series of positive reals ([[def-series]]).

[L5] The $M$-test: if $(g_n)$ are continuous real-valued functions on $X$, $(M_n)$ nonnegative reals with $|g_n(x)| \le M_n$ for every $x$ and $n$, and $\sum M_n$ converges, then $\sum g_n(x)$ converges for every $x \in X$ and $F := \sum_n g_n$ is continuous on $X$ ([[lem-a-uniformly-approximable-real-valued-map-is-continuous]], second clause).

[L6] Scalar multiple of a continuous map is continuous: for continuous $h : X \to \mathbb{R}$ and real $c > 0$, $x \mapsto c\, h(x)$ is continuous — given $x_0 \in X$ and real $\varepsilon>0$, continuity of $h$ at $x_0$ with tolerance $\varepsilon/c$ gives open $U \ni x_0$ with $|h(x)-h(x_0)| < \varepsilon/c$ on $U$, whence $|c\,h(x) - c\,h(x_0)| = c\,|h(x)-h(x_0)| < \varepsilon$ on $U$ ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[lem-of-abs-value]]).

[L7] Limits in $\mathbb{R}$ preserve non-strict order: if $a_k \to a$ and $a_k \ge c$ for all $k$ beyond some index, then $a \ge c$ ([[lem-of-sequence-basics]]).

[L8] For a series of nonnegative terms, the partial sums are nondecreasing ([[thm-nonnegative-series-bounded-partial-sums]]).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is perfectly normal. [assume-hyp]

1.2 Assume instead that $X$ is normal and every closed subset of $X$ is a zero set. [assume-hyp]

2.1 Under step 1.1: by [A2], $X$ is normal and every closed subset of $X$ is a $G_\delta$; in particular $X$ is normal. [step 1.1, A2]

2.2 Under step 1.2: let $C \subseteq X$ be closed; by hypothesis $C$ is a zero set, hence $G_\delta$ by [L3]. Since $C$ was arbitrary, every closed subset of $X$ is $G_\delta$; with $X$ normal by hypothesis, $X$ is perfectly normal by [A2]. [step 1.2, L3, A2]

3.1 Under step 1.1: let $C \subseteq X$ be closed; by step 2.1, $C$ is $G_\delta$, so by [L1] fix open sets $(U_n)_{n \in \mathbb{N}}$ with $C = \bigcap_{n} U_n$. [step 2.1, L1, choose]

4.1 Under step 1.1: put $P := \{\, (n,h) : n \in \mathbb{N},\ h : X \to [0,1] \text{ continuous},\ C \subseteq h^{-1}(\{0\}),\ X \setminus U_n \subseteq h^{-1}(\{1\}) \,\}$, and for $(n,h), (n',h') \in P$ say $(n,h) \mathbin{R} (n',h')$ when $n'=n+1$. Since $C \subseteq U_0$ (step 3.1), $C$ and $X \setminus U_0$ are disjoint closed sets ($X \setminus U_0$ closed, $U_0$ being open); by [L2] and step 2.1, fix $h_0$ with $(0,h_0) \in P$. [step 2.1, step 3.1, L2, choose, construct]

4.2 Under step 1.1: for every $(n,h) \in P$: $C \subseteq U_{n+1}$ (step 3.1), so $C$ and $X \setminus U_{n+1}$ are disjoint closed sets; by [L2] and step 2.1 there is $h'$ with $(n+1,h') \in P$, so $(n,h) \mathbin{R} (n+1,h')$. Hence $R$ is entire on $P$. [step 2.1, step 3.1, L2, choose]

5.1 Under step 1.1: $P$ is nonempty by step 4.1 and $R$ is entire on $P$ by step 4.2; by [A1] applied with $a := (0,h_0)$, there is a sequence $\big((m_k,H_k)\big)_{k \in \mathbb{N}}$ with $(m_0,H_0) = (0,h_0)$ and $(m_k,H_k) \mathbin{R} (m_{k+1},H_{k+1})$ for every $k$. As $(n,h) \mathbin{R} (n',h')$ forces $n'=n+1$, induction gives $m_k = k$ for every $k$; so $H_k : X \to [0,1]$ is continuous with $C \subseteq H_k^{-1}(\{0\})$ and $X \setminus U_k \subseteq H_k^{-1}(\{1\})$, for every $k \in \mathbb{N}$. [step 4.1, step 4.2, A1, construct]

6.1 Under step 1.1: for $k \in \mathbb{N}$ put $g_k := 2^{-(k+1)} H_k$; by [L6] each $g_k$ is continuous, and $|g_k(x)| = 2^{-(k+1)} H_k(x) \le 2^{-(k+1)} =: M_k$ for every $x \in X$, since $H_k(x) \in [0,1]$; and $\sum M_k$ converges by [L4]. [step 5.1, L4, L6, construct]

7.1 Under step 1.1: by [L5] applied to $(g_k)$ and $(M_k)$ of step 6.1: for every $x \in X$ the series $\sum g_k(x)$ converges, and $f := \sum_{k=0}^{\infty} g_k$ is a continuous map $X \to \mathbb{R}$. [step 6.1, L5, construct]

7.2 Under step 1.1: for $x \notin C$: since $C = \bigcap_n U_n$ (step 3.1), there is a natural $m$ with $x \notin U_m$, so $x \in X \setminus U_m \subseteq H_m^{-1}(\{1\})$ (step 5.1), giving $H_m(x)=1$ and $g_m(x) = 2^{-(m+1)}$. [step 3.1, step 5.1, step 6.1, choose]

8.1 Under step 1.1: for $x \in C$: $H_k(x) = 0$ for every $k$ (step 5.1), so $g_k(x)=0$ for every $k$ (step 6.1), and $f(x) = \sum_k 0 = 0$. [step 5.1, step 6.1, step 7.1]

8.2 Under step 1.1, continuing from step 7.2: every term $g_k(x) \ge 0$, since $H_k(x) \in [0,1]$; so by [L8] the partial sums $s_N(x) := \sum_{k<N} g_k(x)$ satisfy $s_N(x) \ge g_m(x) = 2^{-(m+1)}$ for every $N > m$, and $s_N(x) \to f(x)$ by step 7.1; so [L7] gives $f(x) \ge 2^{-(m+1)} > 0$. [step 7.2, step 7.1, L7, L8]

9.1 Under step 1.1: steps 8.1 and 8.2 give $f(x)=0$ for $x \in C$ and $f(x) \ne 0$ for $x \notin C$, so $C = f^{-1}(\{0\}) = Z(f)$, a zero set by [L3]. Since $C$ was an arbitrary closed subset of $X$, every closed subset of $X$ is a zero set. [step 8.1, step 8.2, L3]

10.1 Steps 2.1 and 9.1 show that, under the hypothesis of step 1.1, $X$ is normal and every closed subset of $X$ is a zero set. [step 2.1, step 9.1]

11.1 Steps 10.1 and 2.2 establish the two directions of the stated equivalence. [step 10.1, step 2.2, discharge-construct] ∎

## Remarks

- **The construction of step 4.1–5.1 is exactly the standard proof that dependent choice implies countable choice**, specialised to the family of admissible Urysohn functions at each level: the relation $R$ never looks at the first coordinate's function, only at its index, so any admissible successor is accepted. This is why the theorem needs no hypothesis beyond DC, even though the step it performs — choosing one function per natural number, all at once — is the shape of $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

- **The series $\sum 2^{-(k+1)} H_k$, not $\sum 2^{-k} H_k$, is what starts at value $1$.** Indexing from $k=0$ with weight $2^{-(k+1)}$ makes the total weight exactly $1$ and keeps every weight strictly positive, which is what step 8.2 needs to conclude $f(x) > 0$ off $C$ from a single nonzero term.

- **The converse costs nothing beyond what is already on the separation-axioms page.** "Every zero set is a $G_\delta$" is proved as part of [[def-zero-sets-and-cozero-sets]]; step 2.2 only specialises it to the closed sets that the hypothesis already promises are zero sets.
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

