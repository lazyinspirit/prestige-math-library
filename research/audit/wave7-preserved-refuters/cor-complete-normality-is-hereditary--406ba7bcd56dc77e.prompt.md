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

- Wave 7 ai-generated statement seed

## Target item — `cor-complete-normality-is-hereditary`

Normalized current SHA-256: `6b7d22061d7d9ec2623b4cf0ddaf41ee1520d37052f59dd9930344e2684b8a8b`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-complete-normality-is-hereditary
kind: corollary
title: "Complete normality, and hence $T_5$, is hereditary"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [thm-completely-normal-iff-hereditarily-normal, lem-t0-t1-and-hausdorff-are-hereditary, def-completely-normal-and-perfectly-normal-spaces]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Statement

Complete normality is hereditary. Consequently $T_5$ is hereditary.

## Facts & Assumptions

**Given:** A subspace of a completely normal, respectively $T_5$, space.

[L1] A completely normal space is exactly a space all of whose subspaces are normal ([[thm-completely-normal-iff-hereditarily-normal]]).

[L2] $T_1$ is hereditary ([[lem-t0-t1-and-hausdorff-are-hereditary]]).

[F1] $T_5$ means completely normal plus $T_1$ ([[def-completely-normal-and-perfectly-normal-spaces]]).

## Proof

**Proof technique:** direct.

1.1 If $S\subseteq X$ and $X$ is completely normal, every subspace of $S$ is also a subspace of $X$ and hence is normal by [L1]. Therefore [L1] applied to $S$ makes $S$ completely normal. [L1]

2.1 If $X$ is $T_5$, step 1.1 gives complete normality of $S$ and [L2] gives $T_1$ of $S$, so $S$ is $T_5$. [F1, L2, step 1.1] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "cor-complete-normality-is-hereditary",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "Direct verification: if every subspace of X is normal, then every subspace of a fixed S subset X is normal; hereditary T1 gives the T5 clause.",
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
      "source": "thm-completely-normal-iff-hereditarily-normal",
      "source_section": "Statement",
      "quote": "A space is completely normal if and only if every one of its subspaces is normal. Equivalently, complete normality is exactly hereditary normality.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-t0-t1-and-hausdorff-are-hereditary",
      "source_section": "Statement",
      "quote": "The properties $T_0$, $T_1$, and Hausdorffness are hereditary in the sense of [[def-hereditary-property]].",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-completely-normal-and-perfectly-normal-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **completely normal** when any two **separated** sets can be put into\n  disjoint open sets: for all $A, B \\subseteq X$ that are separated\n  ([[def-separated-sets]]) there are $U, V \\in \\mathcal{T}$ with\n  $$A \\subseteq U, \\qquad B \\subseteq V, \\qquad U \\cap V = \\varnothing .$$\n  $X$ is **$T_5$** when it is completely normal and $T_1$\n  ([[def-t0-and-t1-spaces]]).\n- $X$ is **perfectly normal** when $X$ is normal ([[def-normal-and-t4-spaces]])\n  **and** every closed subset of $X$ is a $G_\\delta$\n  ([[def-g-delta-and-f-sigma-in-a-topological-space]]). $X$ is **$T_6$** when it\n  is perfectly normal and $T_1$.\n\nAs with *regular* and *normal*, neither adjective carries a $T_1$ hypothesis in\nthis library, and the numerals name the conjunctions.\n\n**The $G_\\delta$ condition, restated by complementation.** Every closed subset of\n$X$ is a $G_\\delta$ if and only if every open subset of $X$ is an $F_\\sigma$,\nbecause complementation exchanges the two classes and exchanges open with closed\n([[def-g-delta-and-f-sigma-in-a-topological-space]]). Both forms are used below,\nand the second is the one the implication $T_6 \\Rightarrow T_5$ consumes.\n\n**Complete normality really is stronger than normality, on its face.** Disjoint\nclosed sets are separated ([[def-separated-sets]]), so the complete-normality\ncondition applies in particular to them; that is the whole proof of the next\nitem. What complete normality adds is the ability to separate sets that are not\nclosed, for instance the two sets $(0,1)$ and $(1,2)$ of $\\mathbb{R}$, which are\nseparated and neither of which is closed.\n\n**A competing definition of *perfectly normal*, and why this library does not\nuse it.** Some texts define a perfectly normal space to be a normal space in\nwhich every closed set is a **zero set** ([[def-zero-sets-and-cozero-sets]]).\nThat condition is equivalent to the one above, but the equivalence rests on\nUrysohn's lemma, which is not available at this point in the reading order; the\n$G_\\delta$ form is therefore the definition here, and no statement on this page\nasserts the equivalence. What *is* proved here is one direction in the metric\ncase, where the distance function exhibits every closed set simultaneously as a\nzero set and as a $G_\\delta$.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "If $S\\subseteq X$ and $X$ is completely normal, every subspace of $S$ is also a subspace of $X$ and hence is normal by [L1]. Therefore [L1] applied to $S$ makes $S$ completely normal. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "If $X$ is $T_5$, step 1.1 gives complete normality of $S$ and [L2] gives $T_1$ of $S$, so $S$ is $T_5$. [F1, L2, step 1.1] ∎",
      "step": "2.1",
      "inputs": [
        "F1",
        "L2",
        "step 1.1",
        "1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement has no distinguished empty-set or empty-family case parameter or case."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "The statement has no distinguished zero or base-value case parameter or case."
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
      "status": "not_applicable",
      "reason": "The statement has no distinguished nonempty-choice obligations were checked against the stated hypothesis or explicit construction parameter or case."
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
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cor-complete-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-completely-normal-iff-hereditarily-normal",
    "declared_target": "thm-completely-normal-iff-hereditarily-normal",
    "target_statement_provenance": "literature-derived",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-complete-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-t0-t1-and-hausdorff-are-hereditary",
    "declared_target": "lem-t0-t1-and-hausdorff-are-hereditary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-complete-normality-is-hereditary",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-completely-normal-and-perfectly-normal-spaces",
    "declared_target": "def-completely-normal-and-perfectly-normal-spaces",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
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

## Full text of every cited or declared item (3)

### `def-completely-normal-and-perfectly-normal-spaces`

````markdown
---
id: def-completely-normal-and-perfectly-normal-spaces
kind: definition
title: "Completely normal ($T_5$) and perfectly normal ($T_6$) spaces"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normal-and-t4-spaces, def-separated-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-zero-sets-and-cozero-sets,
       def-t0-and-t1-spaces, def-topological-space]
justified_by: []
aliases: [def-completely-normal-space, def-perfectly-normal-space, def-t5-space, def-t6-space]
landmark: true
short: "completely normal, perfectly normal"
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
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **completely normal** when any two **separated** sets can be put into
  disjoint open sets: for all $A, B \subseteq X$ that are separated
  ([[def-separated-sets]]) there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
  $X$ is **$T_5$** when it is completely normal and $T_1$
  ([[def-t0-and-t1-spaces]]).
- $X$ is **perfectly normal** when $X$ is normal ([[def-normal-and-t4-spaces]])
  **and** every closed subset of $X$ is a $G_\delta$
  ([[def-g-delta-and-f-sigma-in-a-topological-space]]). $X$ is **$T_6$** when it
  is perfectly normal and $T_1$.

As with *regular* and *normal*, neither adjective carries a $T_1$ hypothesis in
this library, and the numerals name the conjunctions.

**The $G_\delta$ condition, restated by complementation.** Every closed subset of
$X$ is a $G_\delta$ if and only if every open subset of $X$ is an $F_\sigma$,
because complementation exchanges the two classes and exchanges open with closed
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Both forms are used below,
and the second is the one the implication $T_6 \Rightarrow T_5$ consumes.

**Complete normality really is stronger than normality, on its face.** Disjoint
closed sets are separated ([[def-separated-sets]]), so the complete-normality
condition applies in particular to them; that is the whole proof of the next
item. What complete normality adds is the ability to separate sets that are not
closed, for instance the two sets $(0,1)$ and $(1,2)$ of $\mathbb{R}$, which are
separated and neither of which is closed.

**A competing definition of *perfectly normal*, and why this library does not
use it.** Some texts define a perfectly normal space to be a normal space in
which every closed set is a **zero set** ([[def-zero-sets-and-cozero-sets]]).
That condition is equivalent to the one above, but the equivalence rests on
Urysohn's lemma, which is not available at this point in the reading order; the
$G_\delta$ form is therefore the definition here, and no statement on this page
asserts the equivalence. What *is* proved here is one direction in the metric
case, where the distance function exhibits every closed set simultaneously as a
zero set and as a $G_\delta$.

## Remarks

- **Both axioms are about pairs of sets, not about points.** Neither implies
  $T_0$: the indiscrete topology on a two-point set is completely normal and
  perfectly normal, since its only separated pairs have an empty member and its
  only closed sets are open, and it is not $T_0$. That is why the numerals $T_5$
  and $T_6$ include $T_1$.

- **A frequently quoted equivalent of complete normality is not proved here.** A
  space is completely normal exactly when every subspace of it is normal, which
  is why *hereditarily normal* is the other common name. This page defines and
  uses only the separated-sets form; the hereditary characterisation belongs to a
  later page, and nothing here depends on it.

- **The chain at the top.** Perfectly normal implies completely normal, which
  implies normal; the second implication is immediate and the first is a real
  theorem, proved two items below.
````

### `lem-t0-t1-and-hausdorff-are-hereditary`

````markdown
---
id: lem-t0-t1-and-hausdorff-are-hereditary
kind: lemma
title: "$T_0$, $T_1$, and Hausdorffness are hereditary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-t0-and-t1-spaces, def-hausdorff-space, def-subspace-topology-top, def-hereditary-property]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §§5–6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

The properties $T_0$, $T_1$, and Hausdorffness are hereditary in the sense of [[def-hereditary-property]].

## Facts & Assumptions

**Given:** A subspace $S$ of a space $X$ carrying one of the stated properties.

[F1] An open set of $S$ is $S \cap U$ for an open set $U$ of $X$ ([[def-subspace-topology-top]]).

[F2] $T_0$ distinguishes a distinct pair by one open set, $T_1$ separates each point from the other by an open set, and Hausdorffness separates a distinct pair by disjoint open sets ([[def-t0-and-t1-spaces]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $x,y\in S$ be distinct. If $X$ is $T_0$, choose an open $U\subseteq X$ containing exactly one of $x,y$; then $S\cap U$ does the same in $S$. [F1, F2]

1.2 If $X$ is $T_1$, apply the preceding trace argument separately to the two open sets supplied by the $T_1$ condition, so each of $x,y$ has an open neighbourhood in $S$ missing the other. [F1, F2]

1.3 If $X$ is Hausdorff, choose disjoint open $U,V\subseteq X$ containing $x,y$ respectively; $S\cap U$ and $S\cap V$ are disjoint open neighbourhoods in $S$. [F1, F2]

2.1 Since $S$ was arbitrary, each of the three properties is hereditary. [step 1.1, step 1.2, step 1.3] ∎
````

### `thm-completely-normal-iff-hereditarily-normal`

````markdown
---
id: thm-completely-normal-iff-hereditarily-normal
kind: theorem
title: "A space is completely normal if and only if every subspace is normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-completely-normal-and-perfectly-normal-spaces, def-separated-sets, def-normal-and-t4-spaces, def-subspace-topology-top, def-hereditary-property]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
pipeline_run: null
---

## Statement

A space is completely normal if and only if every one of its subspaces is normal. Equivalently, complete normality is exactly hereditary normality.

## Facts & Assumptions

**Given:** A space $X$ and the definitions of complete normality, normality, separated sets, and subspace topology.

[F1] Completely normal means that separated subsets have disjoint open neighbourhoods; normal means the same assertion for disjoint closed subsets ([[def-completely-normal-and-perfectly-normal-spaces]], [[def-normal-and-t4-spaces]]).

[F2] Disjoint closed subsets are separated, and separation is unchanged on passing to a subspace ([[def-separated-sets]]).

[F3] Open subsets of a subspace are traces of ambient open sets ([[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $X$ is completely normal, let $S\subseteq X$, and let $A,B$ be disjoint closed subsets of $S$. By [F2] they are separated in $X$, so ambient disjoint open sets containing them trace to disjoint open sets of $S$. Thus $S$ is normal. [F1, F2, F3]

1.2 Conversely suppose every subspace of $X$ is normal, and let $A,B\subseteq X$ be separated. Put $Y=X\setminus((\overline A\setminus A)\cup(\overline B\setminus B))$; separation ensures that $A,B\subseteq Y$, and they are disjoint closed subsets of $Y$. [F2]

2.1 Normality of $Y$ gives disjoint open $U,V\subseteq Y$ containing $A,B$. Write $U=G\cap Y$ and $V=H\cap Y$ with $G,H$ open in $X$; then $G\cap H$ is contained in $(\overline A\setminus A)\cup(\overline B\setminus B)$. [F3, step 1.2]

3.1 The open sets $G\setminus\overline B$ and $H\setminus\overline A$ contain $A$ and $B$ respectively, and are disjoint: a point of their intersection would lie in $G\cap H$ but in neither of the two displayed closure differences. [F2, step 2.1]

4.1 Hence every separated pair in $X$ has disjoint open neighbourhoods, so $X$ is completely normal. [F1, step 3.1] ∎
````

