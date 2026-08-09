# Audit proof-refuter brief — Wave 8, step A6

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

- critical risk (8): 4 declared dependencies; 4 cited facts; existence, choice, uniqueness, or well-definedness; boundary-sensitive language

## Target item — `thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces`

Normalized current SHA-256: `ef54a8fc05f7129424051bd2743963968b94281093b1732fe96b7f6c100bfb6b`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces
kind: theorem
title: "For a Hausdorff space, paracompactness is equivalent, under choice and dependent choice, to the existence of a locally finite subordinate partition of unity for every open cover"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-subordinate-partitions-of-unity-exist, def-partition-of-unity-subordinate-to-a-cover, def-zero-sets-and-cozero-sets, def-paracompact-space]
justified_by: []
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
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. For a Hausdorff
space $X$, the following are equivalent: $X$ is paracompact; every open cover of
$X$ admits a locally finite partition of unity subordinate to it.

## Facts & Assumptions

**Given:** A Hausdorff space $X$, choice and dependent choice, and an open cover $\mathcal U$.

[L1] A paracompact Hausdorff space has a locally finite partition of unity subordinate to each open cover ([[thm-subordinate-partitions-of-unity-exist]]).

[F1] In a subordinate partition, cozero sets are open, form a locally finite family, and each support lies in a member of $\mathcal U$ ([[def-partition-of-unity-subordinate-to-a-cover]], [[def-zero-sets-and-cozero-sets]]).

[F2] Paracompactness asks for a locally finite open refining cover ([[def-paracompact-space]]).

## Proof

**Proof technique:** direct.

1.1 If $X$ is paracompact, [L1] supplies the asserted partition for $\mathcal U$. [L1]

1.2 Conversely, suppose every open cover admits such a partition. For the partition subordinate to $\mathcal U$, the cozero sets cover $X$ because their functions sum to one. [F1]

1.3 Each cozero set is open, locally finite among the cozero family, and contained in its support and hence in a member of $\mathcal U$; it is therefore a locally finite open refinement of $\mathcal U$. [F1]

2.1 By [F2], step 1.3 proves that $X$ is paracompact, completing the equivalence. [F2, step 1.1, step 1.3] ∎
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
  ],
  "rationale": "Robbin states that a Hausdorff space admits partitions subordinate to every open cover iff it is paracompact. The item makes the sufficient Choice/DC assumptions explicit and uses the equivalent locally finite cozero convention; its reverse proof extracts the cozero refinement.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-topology.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-subordinate-partitions-of-unity-exist",
      "source_section": "Statement",
      "quote": "Assume the Axiom of Choice and the Axiom of Dependent Choice. Every open cover\nof a paracompact Hausdorff space admits a locally finite partition of unity\nsubordinate to it.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-partition-of-unity-subordinate-to-a-cover",
      "source_section": "Definition",
      "quote": "Let $X$ be a topological space and let $\\mathcal U$ be an open cover of $X$. A\nfamily $\\{\\varphi_s:X\\to[0,1]\\}_{s\\in S}$ is a **partition of unity** when each\n$\\varphi_s$ is continuous, the family of cozero sets\n$\\{\\operatorname{coz}(\\varphi_s)\\}_{s\\in S}$ is locally finite, and\n$$\\sum_{s\\in S}\\varphi_s(x)=1\\quad\\text{for every }x\\in X.$$\nThe sum is unambiguous because local finiteness says that only finitely many\nsummands are nonzero near, and hence at, any fixed point.\n\nIt is **subordinate to $\\mathcal U$** when for every $s\\in S$ some\n$U\\in\\mathcal U$ contains the support\n$$\\operatorname{supp}(\\varphi_s):=\\overline{\\operatorname{coz}(\\varphi_s)}.$$\nHere cozero sets and zero sets have the meanings of\n[[def-zero-sets-and-cozero-sets]].",
      "uses": [
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "F1",
      "source": "def-zero-sets-and-cozero-sets",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$\\mathbb{R}$ carry its usual topology, the metric topology of\n$d_{\\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]],\n[[def-metrizable-space]]). For a continuous $f : X \\to \\mathbb{R}$\n([[def-continuous-map-top]]) put\n\n$$Z(f) \\;:=\\; f^{-1}[\\{0\\}] \\;=\\; \\{\\, x \\in X : f(x) = 0 \\,\\}, \\qquad \\operatorname{coz}(f) \\;:=\\; X \\setminus Z(f) \\;=\\; \\{\\, x \\in X : f(x) \\ne 0 \\,\\} .$$\n\n$Z(f)$ is the **zero set** of $f$ and $\\operatorname{coz}(f)$ its **cozero set**.\nA subset of $X$ is *a zero set of $X$* when it is $Z(f)$ for some continuous\n$f : X \\to \\mathbb{R}$, and *a cozero set of $X$* when it is the complement of\none. Where the target is written $[0,1]$ ([[def-interval]]) with its subspace\ntopology ([[def-subspace-topology-top]]), a continuous map $X \\to [0,1]$ is the\nsame thing as a continuous map $X \\to \\mathbb{R}$ with all values in $[0,1]$, by\nthe characteristic property of a map into a subspace recorded in\n[[def-subspace-topology-top]]; so nothing below depends on which of the two\ntargets is written.\n\n**Every zero set is closed and every cozero set is open.** $\\{0\\}$ is closed in\n$\\mathbb{R}$: its complement $\\mathbb{R} \\setminus \\{0\\}$ is open, since a point\n$t \\ne 0$ has the bounded open interval $(t - |t|,\\ t + |t|)$ around it inside\n$\\mathbb{R} \\setminus \\{0\\}$ ([[def-interval]], [[lem-real-line-is-a-metric-space]],\nclaim 3). The preimage of a closed set under a continuous map is closed\n([[thm-continuity-characterisations-top]], clause (c)).\n\n**Every zero set is a $G_\\delta$ and every cozero set an $F_\\sigma$**\n([[def-g-delta-and-f-sigma-in-a-topological-space]]). Writing $\\iota$ for the\ncanonical natural of $\\mathbb{R}$ ([[def-canonical-natural]]), so that $1/(n+1)$\nabbreviates the inverse of $\\iota(n+1)$, put\n\n$$V_n \\;:=\\; f^{-1}\\big[\\,(-1/(n+1),\\ 1/(n+1))\\,\\big] \\qquad (n \\in \\mathbb{N}).$$\n\nEach $V_n$ is open, being the preimage of an open interval\n([[thm-continuity-characterisations-top]], clause (b)). Clearly\n$Z(f) \\subseteq \\bigcap_n V_n$. Conversely, if $f(x) \\ne 0$ then\n$\\varepsilon := |f(x)| > 0$, and [[cor-archimedean-reciprocal]] gives a natural\n$k \\ge 1$ with $1/k < \\varepsilon$; since $k \\ne 0$ it is a successor,\n$k = n+1$ with $n \\in \\mathbb{N}$ ([[lem-nat-nonzero-is-successor]]), so\n$|f(x)| > 1/(n+1)$ and $x \\notin V_n$. Hence $Z(f) = \\bigcap_{n} V_n$ is a\n$G_\\delta$, and $\\operatorname{coz}(f)$ is an $F_\\sigma$ by complementation.\n\n**Both extremes occur.** The constant maps are continuous, since the preimage of\nany set under a constant map is $\\varnothing$ or $X$\n([[thm-continuity-characterisations-top]], clause (b)); so $X = Z(0)$ and\n$\\varnothing = Z(1)$ are zero sets of every space, where $0$ and $1$ denote the\ncorresponding constant maps.",
      "uses": [
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "F2",
      "source": "def-paracompact-space",
      "source_section": "Definition",
      "quote": "A topological space $X$ is **paracompact** when every open cover $\\mathcal U$\nof $X$ has an open refinement $\\mathcal V$ which covers $X$ and is locally\nfinite. In symbols, for every open cover $\\mathcal U$ there is a locally finite\nopen cover $\\mathcal V$ such that every $V\\in\\mathcal V$ lies in some\n$U\\in\\mathcal U$.\n\nNo separation axiom is included in this definition. Some sources reserve the\nword *paracompact* for the conjunction of this covering property with\nHausdorffness. Here the covering property is named by itself, and any use of\nHausdorffness is stated explicitly.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "If $X$ is paracompact, [L1] supplies the asserted partition for $\\mathcal U$. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Conversely, suppose every open cover admits such a partition. For the partition subordinate to $\\mathcal U$, the cozero sets cover $X$ because their functions sum to one. [F1]",
      "step": "1.2",
      "inputs": [
        "F1"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Each cozero set is open, locally finite among the cozero family, and contained in its support and hence in a member of $\\mathcal U$; it is therefore a locally finite open refinement of $\\mathcal U$. [F1]",
      "step": "1.3",
      "inputs": [
        "F1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "By [F2], step 1.3 proves that $X$ is paracompact, completing the equivalence. [F2, step 1.1, step 1.3]",
      "step": "2.1",
      "inputs": [
        "F2",
        "1.3",
        "1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and steps 1.1--2.1 include X empty and the empty cozero refinement."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.2 and 1.3 use sum one, which rules out all-zero values at a point but permits zero component functions."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.2--1.3 specialize correctly to one component."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Steps 1.2--2.1 allow empty supports and repeated containing cover members."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 1.2 and 1.3 preserve the [0,1] endpoint cases of partition functions."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 invokes the theorem under the stated Choice/DC hypotheses; the reverse implication makes no selection."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Statement and step 1.1 establish paracompact implies subordinate partitions."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Statement and steps 1.2--2.1 establish subordinate partitions imply paracompact."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "thm-subordinate-partitions-of-unity-exist",
    "declared_target": "thm-subordinate-partitions-of-unity-exist",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-partition-of-unity-subordinate-to-a-cover",
    "declared_target": "def-partition-of-unity-subordinate-to-a-cover",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
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
    "source": "thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-paracompact-space",
    "declared_target": "def-paracompact-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (4)

### `def-paracompact-space`

````markdown
---
id: def-paracompact-space
kind: definition
title: "Paracompactness: every open cover has a locally finite open refinement, with no separation axiom built into the word"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cover-refinement-and-local-finiteness, def-compact-space]
justified_by: []
aliases: [def-paracompactness]
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Definition

A topological space $X$ is **paracompact** when every open cover $\mathcal U$
of $X$ has an open refinement $\mathcal V$ which covers $X$ and is locally
finite. In symbols, for every open cover $\mathcal U$ there is a locally finite
open cover $\mathcal V$ such that every $V\in\mathcal V$ lies in some
$U\in\mathcal U$.

No separation axiom is included in this definition. Some sources reserve the
word *paracompact* for the conjunction of this covering property with
Hausdorffness. Here the covering property is named by itself, and any use of
Hausdorffness is stated explicitly.

## Remarks

The finite-subcover condition defining compactness is recalled in
[[def-compact-space]]. A finite family is locally finite, but compactness and
paracompactness remain distinct definitions because their conclusions quantify
over different refinements of a cover.
````

### `def-partition-of-unity-subordinate-to-a-cover`

````markdown
---
id: def-partition-of-unity-subordinate-to-a-cover
kind: definition
title: "Locally finite partitions of unity and subordination to an open cover"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cover-refinement-and-local-finiteness, def-continuous-map-top, def-zero-sets-and-cozero-sets, def-compact-space]
justified_by: []
aliases: [def-partition-of-unity]
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a topological space and let $\mathcal U$ be an open cover of $X$. A
family $\{\varphi_s:X\to[0,1]\}_{s\in S}$ is a **partition of unity** when each
$\varphi_s$ is continuous, the family of cozero sets
$\{\operatorname{coz}(\varphi_s)\}_{s\in S}$ is locally finite, and
$$\sum_{s\in S}\varphi_s(x)=1\quad\text{for every }x\in X.$$
The sum is unambiguous because local finiteness says that only finitely many
summands are nonzero near, and hence at, any fixed point.

It is **subordinate to $\mathcal U$** when for every $s\in S$ some
$U\in\mathcal U$ contains the support
$$\operatorname{supp}(\varphi_s):=\overline{\operatorname{coz}(\varphi_s)}.$$
Here cozero sets and zero sets have the meanings of
[[def-zero-sets-and-cozero-sets]].

## Remarks

The finite case is included: if $S$ is finite, the cozero family is locally
finite automatically. The definition does not require $X$ to be Hausdorff;
Hausdorffness enters the existence theorem through shrinking and Urysohn's lemma.
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

### `thm-subordinate-partitions-of-unity-exist`

````markdown
---
id: thm-subordinate-partitions-of-unity-exist
kind: theorem
title: "Under choice and dependent choice, every open cover of a paracompact Hausdorff space admits a locally finite subordinate partition of unity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-paracompact-hausdorff-cover-shrinking, thm-paracompact-hausdorff-implies-normal, thm-urysohn-lemma, lem-normalizing-a-locally-finite-positive-family, def-axiom-of-choice, def-dependent-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Every open cover
of a paracompact Hausdorff space admits a locally finite partition of unity
subordinate to it.

## Facts & Assumptions

**Given:** Choice, dependent choice, a paracompact Hausdorff space $X$, and an open cover $\mathcal U$.

[L1] There are locally finite covers $\{V_s\}$, $\{W_s\}$ and $U_s\in\mathcal U$ with $\overline{V_s}\subseteq W_s\subseteq\overline{W_s}\subseteq U_s$ ([[lem-paracompact-hausdorff-cover-shrinking]]).

[L2] Every paracompact Hausdorff space is normal ([[thm-paracompact-hausdorff-implies-normal]]).

[L3] Under dependent choice, Urysohn's lemma separates disjoint closed sets in a normal space by a continuous map into $[0,1]$ ([[thm-urysohn-lemma]], clause 1).

[L4] If $\{f_s:X\to[0,\infty)\}_{s\in S}$ is a continuous family with locally finite cozero family and everywhere-positive sum $f=\sum_sf_s$, then the functions $\varphi_s=f_s/f$ form a partition of unity, with the same cozero sets and supports as the corresponding $f_s$ ([[lem-normalizing-a-locally-finite-positive-family]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [L1] to obtain $V_s,W_s,U_s$ as stated. [L1, construct]

2.1 By [L2], $X$ is normal. For each $s$, the closed sets $\overline{V_s}$ and $X\setminus W_s$ are disjoint, so [L3] gives a continuous $f_s:X\to[0,1]$ equal to $1$ on $\overline{V_s}$ and $0$ on $X\setminus W_s$. [step 1.1, L2, L3, choose]

3.1 The cozero set of $f_s$ lies in $W_s$, while its support lies in $\overline{W_s}\subseteq U_s$; since $\{W_s\}$ is locally finite, so is the cozero family. [step 1.1, step 2.1]

3.2 Because $\{V_s\}$ covers $X$ and $f_s=1$ on $V_s$, the pointwise sum $\sum_sf_s$ is positive everywhere. [step 1.1, step 2.1]

4.1 By [L4], the normalized functions $\varphi_s=f_s/(\sum_tf_t)$ form a locally finite partition of unity; their supports equal those of $f_s$, so step 3.1 makes the partition subordinate to $\mathcal U$. [step 3.1, step 3.2, L4, discharge-construct] ∎
````

