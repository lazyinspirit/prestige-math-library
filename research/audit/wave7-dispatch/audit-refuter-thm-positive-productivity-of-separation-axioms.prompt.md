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

- high risk (6): 5 declared dependencies; 5 cited facts; boundary-sensitive language

## Target item — `thm-positive-productivity-of-separation-axioms`

Normalized current SHA-256: `329faff6eb302f3ad8e920ba5e738599d5b4162cb3459d7292e8248388ef150b`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-positive-productivity-of-separation-axioms
kind: theorem
title: "$T_0$, $T_1$, $T_2$, regularity, $T_3$, complete regularity, and Tychonoffness are productive"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-products-preserve-t0-t1-and-hausdorff, lem-products-preserve-regularity, lem-products-preserve-complete-regularity, def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces]
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

Each of $T_0$, $T_1$, Hausdorffness ($T_2$), regularity, $T_3$, complete regularity, and Tychonoffness is productive.

## Facts & Assumptions

**Given:** A family of spaces having one of the listed separation properties.

[L1] Arbitrary products preserve $T_0$, $T_1$, Hausdorffness, regularity, and complete regularity as stated in the three preceding lemmas ([[lem-products-preserve-t0-t1-and-hausdorff]], [[lem-products-preserve-regularity]], [[lem-products-preserve-complete-regularity]]).

[F1] $T_3$ is regular plus $T_1$, and Tychonoff is completely regular plus $T_1$ ([[def-regular-and-t3-spaces]], [[def-completely-regular-and-tychonoff-spaces]]).

## Proof

**Proof technique:** direct.

1.1 The assertions for $T_0$, $T_1$, $T_2$, regularity, and complete regularity are [L1]. [L1]

1.2 A product of $T_3$ spaces is regular and $T_1$ by [L1], hence is $T_3$. [F1, L1]

1.3 A product of Tychonoff spaces is completely regular and $T_1$ by [L1], hence is Tychonoff. [F1, L1]

2.1 Therefore every property in the statement is productive. [step 1.1, step 1.2, step 1.3] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-positive-productivity-of-separation-axioms",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf",
    "https://en.wikipedia.org/wiki/Separation_axiom"
  ],
  "rationale": "This is a combined preservation table assembled from standard product theorems, with the library separation conventions.",
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
      "source": "lem-products-preserve-t0-t1-and-hausdorff",
      "source_section": "Statement",
      "quote": "For any family $(X_i)_{i\\in I}$, if every $X_i$ is $T_0$, respectively $T_1$, respectively Hausdorff, then $\\prod_{i\\in I}X_i$ is respectively $T_0$, $T_1$, respectively Hausdorff. The empty product is included.",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-products-preserve-regularity",
      "source_section": "Statement",
      "quote": "An arbitrary product of regular spaces is regular.",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-products-preserve-complete-regularity",
      "source_section": "Statement",
      "quote": "An arbitrary product of completely regular spaces is completely regular.",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "F1",
      "source": "def-regular-and-t3-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **regular** when a point can be separated from a closed set not\n  containing it: for every closed $C \\subseteq X$ and every\n  $x \\in X \\setminus C$ there are $U, V \\in \\mathcal{T}$ with\n  $$x \\in U, \\qquad C \\subseteq V, \\qquad U \\cap V = \\varnothing .$$\n- $X$ is **$T_3$** when it is regular **and** $T_1$ ([[def-t0-and-t1-spaces]]).\n\nSince an open set containing a point is an open neighbourhood of it\n([[def-neighbourhood-top]]), regularity reads: $x$ and $C$ have disjoint open\nneighbourhoods. The case $C = \\varnothing$ is allowed and is satisfied by\n$U = X$, $V = \\varnothing$, so no nonemptiness is hidden in the condition.\n\n**The convention fork, and this library's side of it.** Textbooks disagree about\nwhether the word *regular* carries a $T_1$ hypothesis. Munkres builds it in,\ndefining a regular space to be one in which points are closed and the separation\ncondition above holds; Kelley, Willard and Engelking do not, and reserve $T_3$\nfor the conjunction. **This library takes the second side**: *regular* names the\nseparation condition alone, $T_3$ names regular plus $T_1$, and every statement\nthat needs points to be closed writes the $T_1$ hypothesis out. The reason is\nthat the two halves are genuinely independent and each is used alone below: the\nindiscrete topology on a two-point set is regular and not $T_0$\n([[def-standard-topologies]]), and the cofinite topology on an infinite set is\n$T_1$ and not regular, both witnessed on the companion page.\n\n**Regularity alone implies no other separation axiom.** It does not imply $T_0$,\n$T_1$ or Hausdorff ([[def-hausdorff-space]]): in the indiscrete topology on a set\n$X$ the only closed sets are $\\varnothing$ and $X$, so the only pair $(C, x)$ to\nbe separated has $C = \\varnothing$, and $U = X$, $V = \\varnothing$ separates it;\nyet no two distinct points are distinguished by any open set. Conversely $T_1$\ndoes not imply regularity. It is the *conjunction* $T_3$ that sits above\nHausdorff in the hierarchy, and the proof of that is three items below.",
      "uses": [
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "F1",
      "source": "def-completely-regular-and-tychonoff-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$[0,1] \\subseteq \\mathbb{R}$ carry the subspace topology of the usual topology of\n$\\mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]],\n[[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).\n\n- $X$ is **completely regular** when a point can be separated from a closed set\n  not containing it *by a continuous function*: for every closed $C \\subseteq X$\n  and every $x_0 \\in X \\setminus C$ there is a continuous\n  $f : X \\to [0,1]$ ([[def-continuous-map-top]]) with\n  $$f(x_0) = 1 \\qquad \\text{and} \\qquad f(y) = 0 \\ \\text{ for every } y \\in C .$$\n- $X$ is **Tychonoff**, also written **$T_{3\\frac{1}{2}}$** and *completely\n  regular Hausdorff*, when it is completely regular **and** $T_1$\n  ([[def-t0-and-t1-spaces]]).\n\nThe case $C = \\varnothing$ is allowed and is satisfied by the constant function\n$1$, which is continuous ([[def-zero-sets-and-cozero-sets]]); so the condition\nhides no nonemptiness hypothesis.\n\n**The same condition in the vocabulary of zero sets.** With $f$ as displayed,\n$C \\subseteq Z(f)$ and $x_0 \\in \\operatorname{coz}(f)$\n([[def-zero-sets-and-cozero-sets]]), so complete regularity says: for every\nclosed $C$ and every $x_0 \\notin C$ there is a continuous $f$ whose zero set\ncontains $C$ and whose cozero set contains $x_0$. In particular\n$\\operatorname{coz}(f)$ is an open set containing $x_0$ and disjoint from $C$;\nthat alone is weaker than regularity, and the passage from the function to two\n*disjoint* open sets is the next item.\n\n**The values $0$ and $1$ are a normalisation, not a restriction.** If\n$g : X \\to \\mathbb{R}$ is continuous with $g(x_0) = a$, $g[C] = \\{b\\}$ and\n$a \\ne b$, then the condition above is met by a function built from $g$ by an\naffine change of variable followed by truncation into $[0,1]$; this page never\nneeds that construction, because every function it builds is already normalised.\nThe *direction* of the normalisation is a genuine convention and is fixed here as\n$f(x_0) = 1$ and $f[C] = \\{0\\}$, following the most common usage; some texts\nwrite the reverse, and a reader must check which is meant before quoting a\nformula.\n\n**The convention fork over $T_1$ is the same one as for regularity.** *Completely\nregular* names the function-separation condition alone, and Tychonoff names the\nconjunction with $T_1$ ([[def-regular-and-t3-spaces]]). The indiscrete topology\non a two-point set ([[def-standard-topologies]]) is completely regular, its only\nclosed set disjoint from a point being $\\varnothing$, and it is not $T_0$; so the\ntwo halves are independent here as well.",
      "uses": [
        "1.2",
        "1.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The assertions for $T_0$, $T_1$, $T_2$, regularity, and complete regularity are [L1]. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "A product of $T_3$ spaces is regular and $T_1$ by [L1], hence is $T_3$. [F1, L1]",
      "step": "1.2",
      "inputs": [
        "F1",
        "L1"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "A product of Tychonoff spaces is completely regular and $T_1$ by [L1], hence is Tychonoff. [F1, L1]",
      "step": "1.3",
      "inputs": [
        "F1",
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Therefore every property in the statement is productive. [step 1.1, step 1.2, step 1.3] ∎",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "step 1.3",
        "1.1",
        "1.2",
        "1.3"
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
    "source": "thm-positive-productivity-of-separation-axioms",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-products-preserve-t0-t1-and-hausdorff",
    "declared_target": "lem-products-preserve-t0-t1-and-hausdorff",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-positive-productivity-of-separation-axioms",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-products-preserve-regularity",
    "declared_target": "lem-products-preserve-regularity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-positive-productivity-of-separation-axioms",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-products-preserve-complete-regularity",
    "declared_target": "lem-products-preserve-complete-regularity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-positive-productivity-of-separation-axioms",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-regular-and-t3-spaces",
    "declared_target": "def-regular-and-t3-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-positive-productivity-of-separation-axioms",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-completely-regular-and-tychonoff-spaces",
    "declared_target": "def-completely-regular-and-tychonoff-spaces",
    "target_statement_provenance": "literature-derived",
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

## Full text of every cited or declared item (5)

### `def-completely-regular-and-tychonoff-spaces`

````markdown
---
id: def-completely-regular-and-tychonoff-spaces
kind: definition
title: "Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-zero-sets-and-cozero-sets, def-regular-and-t3-spaces, def-t0-and-t1-spaces,
       def-continuous-map-top, def-interval, def-subspace-topology-top,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-topological-space,
       def-standard-topologies]
justified_by: []
aliases: [def-completely-regular-space, def-tychonoff-space, def-t3-and-a-half-space]
landmark: true
short: "completely regular, Tychonoff"
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
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 33: The Urysohn Lemma (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-33.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$[0,1] \subseteq \mathbb{R}$ carry the subspace topology of the usual topology of
$\mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]],
[[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

- $X$ is **completely regular** when a point can be separated from a closed set
  not containing it *by a continuous function*: for every closed $C \subseteq X$
  and every $x_0 \in X \setminus C$ there is a continuous
  $f : X \to [0,1]$ ([[def-continuous-map-top]]) with
  $$f(x_0) = 1 \qquad \text{and} \qquad f(y) = 0 \ \text{ for every } y \in C .$$
- $X$ is **Tychonoff**, also written **$T_{3\frac{1}{2}}$** and *completely
  regular Hausdorff*, when it is completely regular **and** $T_1$
  ([[def-t0-and-t1-spaces]]).

The case $C = \varnothing$ is allowed and is satisfied by the constant function
$1$, which is continuous ([[def-zero-sets-and-cozero-sets]]); so the condition
hides no nonemptiness hypothesis.

**The same condition in the vocabulary of zero sets.** With $f$ as displayed,
$C \subseteq Z(f)$ and $x_0 \in \operatorname{coz}(f)$
([[def-zero-sets-and-cozero-sets]]), so complete regularity says: for every
closed $C$ and every $x_0 \notin C$ there is a continuous $f$ whose zero set
contains $C$ and whose cozero set contains $x_0$. In particular
$\operatorname{coz}(f)$ is an open set containing $x_0$ and disjoint from $C$;
that alone is weaker than regularity, and the passage from the function to two
*disjoint* open sets is the next item.

**The values $0$ and $1$ are a normalisation, not a restriction.** If
$g : X \to \mathbb{R}$ is continuous with $g(x_0) = a$, $g[C] = \{b\}$ and
$a \ne b$, then the condition above is met by a function built from $g$ by an
affine change of variable followed by truncation into $[0,1]$; this page never
needs that construction, because every function it builds is already normalised.
The *direction* of the normalisation is a genuine convention and is fixed here as
$f(x_0) = 1$ and $f[C] = \{0\}$, following the most common usage; some texts
write the reverse, and a reader must check which is meant before quoting a
formula.

**The convention fork over $T_1$ is the same one as for regularity.** *Completely
regular* names the function-separation condition alone, and Tychonoff names the
conjunction with $T_1$ ([[def-regular-and-t3-spaces]]). The indiscrete topology
on a two-point set ([[def-standard-topologies]]) is completely regular, its only
closed set disjoint from a point being $\varnothing$, and it is not $T_0$; so the
two halves are independent here as well.

## Remarks

- **Complete regularity is a strong hypothesis in disguise.** It asserts the
  existence of many continuous real-valued functions, and a space may have almost
  none; producing such functions is what Urysohn's lemma does for normal $T_1$
  spaces, and that lemma is not available at this point in the reading order
  ([[rem-separation-axiom-conventions]]).

- **Why the numeral is $3\frac12$.** Complete regularity implies regularity, as
  the next item proves, and every normal $T_1$ space is completely regular, which
  this page does **not** prove; so the axiom sits between $T_3$ and $T_4$, and
  the fractional numeral records that position and nothing more.

- **Both names are in use for the conjunction.** *Tychonoff*, *completely regular
  Hausdorff* and *$T_{3\frac12}$* denote the same class; this library writes
  Tychonoff.
````

### `def-regular-and-t3-spaces`

````markdown
---
id: def-regular-and-t3-spaces
kind: definition
title: "Regular spaces and $T_3$ spaces, with the source disagreement over whether regularity includes $T_1$ stated explicitly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-t0-and-t1-spaces, def-hausdorff-space,
       def-neighbourhood-top, def-standard-topologies]
justified_by: []
aliases: [def-regular-space, def-t3-space]
landmark: true
short: "regular space, $T_3$ space"
verification:
  precheck: n/a
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-06
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **regular** when a point can be separated from a closed set not
  containing it: for every closed $C \subseteq X$ and every
  $x \in X \setminus C$ there are $U, V \in \mathcal{T}$ with
  $$x \in U, \qquad C \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_3$** when it is regular **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), regularity reads: $x$ and $C$ have disjoint open
neighbourhoods. The case $C = \varnothing$ is allowed and is satisfied by
$U = X$, $V = \varnothing$, so no nonemptiness is hidden in the condition.

**The convention fork, and this library's side of it.** Textbooks disagree about
whether the word *regular* carries a $T_1$ hypothesis. Munkres builds it in,
defining a regular space to be one in which points are closed and the separation
condition above holds; Kelley, Willard and Engelking do not, and reserve $T_3$
for the conjunction. **This library takes the second side**: *regular* names the
separation condition alone, $T_3$ names regular plus $T_1$, and every statement
that needs points to be closed writes the $T_1$ hypothesis out. The reason is
that the two halves are genuinely independent and each is used alone below: the
indiscrete topology on a two-point set is regular and not $T_0$
([[def-standard-topologies]]), and the cofinite topology on an infinite set is
$T_1$ and not regular, both witnessed on the companion page.

**Regularity alone implies no other separation axiom.** It does not imply $T_0$,
$T_1$ or Hausdorff ([[def-hausdorff-space]]): in the indiscrete topology on a set
$X$ the only closed sets are $\varnothing$ and $X$, so the only pair $(C, x)$ to
be separated has $C = \varnothing$, and $U = X$, $V = \varnothing$ separates it;
yet no two distinct points are distinguished by any open set. Conversely $T_1$
does not imply regularity. It is the *conjunction* $T_3$ that sits above
Hausdorff in the hierarchy, and the proof of that is three items below.

## Remarks

- **A regular space is not required to separate two closed sets**, which is the
  stronger condition of normality defined later on this page; and a normal space
  is not required to separate a point from a closed set, since a point need not
  be closed. Normality does not imply regularity, and the witness is Sierpinski
  space on the companion page. Whether regularity implies normality is a
  question this page leaves open, and no statement here asserts an answer
  ([[def-normal-and-t4-spaces]]).

- **What regularity is really about.** The reformulation proved next — every
  point has a neighbourhood base of closed neighbourhoods — is the form in which
  regularity is used in practice, and the form in which it is verified for the
  ordinal spaces later on this page, whose basis consists of clopen sets.

- **The numeral.** Because of the fork above, "$T_3$" in the literature may mean
  either what is defined here or the bare separation condition. This library
  always writes the numeral for the conjunction and never uses it to abbreviate
  the separation condition alone ([[rem-separation-axiom-conventions]]).
````

### `lem-products-preserve-complete-regularity`

````markdown
---
id: lem-products-preserve-complete-regularity
kind: lemma
title: "Arbitrary products of completely regular spaces are completely regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-product-topology, thm-product-universal-property, def-completely-regular-and-tychonoff-spaces, lem-finite-minima-of-continuous-unit-interval-maps, lem-finite-choice]
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
pipeline_run: null
---

## Statement

An arbitrary product of completely regular spaces is completely regular.

## Facts & Assumptions

**Given:** A product $P=\prod_{i\in I}X_i$ of completely regular spaces, a closed $C\subseteq P$, and $x\in P\setminus C$.

[F1] A basic product-open set has finite support, and the product universal property makes finite-coordinate maps continuous ([[def-product-topology]], [[thm-product-universal-property]]).

[F2] Complete regularity gives $h_i:X_i\to[0,1]$ with $h_i(x_i)=1$ and $h_i[X_i\setminus U_i]=\{0\}$ when $x_i\in U_i$ is open ([[def-completely-regular-and-tychonoff-spaces]]).

[L1] A finite pointwise minimum of continuous $[0,1]$-valued maps is continuous ([[lem-finite-minima-of-continuous-unit-interval-maps]]).

[L2] A family indexed by a natural number whose members are nonempty has a choice function, without any choice axiom ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite-support basic neighbourhood $B=\bigcap_{i\in J}\pi_i^{-1}[U_i]$ of $x$ contained in $P\setminus C$. [F1]

1.2 The finite-choice result [L2] selects a map $h_i$ as in [F2] for every $i\in J$; put $h=\min_{i\in J}(h_i\circ\pi_i)$. [F2, L1, L2]

2.1 The map $h$ is continuous and $h(x)=1$. If $y\in C$, then $y\notin B$, so $y_i\notin U_i$ for some $i\in J$ and $h(y)=0$. [F1, L1, step 1.1, step 1.2]

3.1 Thus $h$ separates $x$ from $C$ in the defining sense of complete regularity. [F2, step 2.1] ∎
````

### `lem-products-preserve-regularity`

````markdown
---
id: lem-products-preserve-regularity
kind: lemma
title: "Arbitrary products of regular spaces are regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-product-topology, lem-regularity-via-closed-neighbourhoods, lem-finite-choice]
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
pipeline_run: null
---

## Statement

An arbitrary product of regular spaces is regular.

## Facts & Assumptions

**Given:** A point $x$ in a product $P=\prod_{i\in I}X_i$ of regular spaces and an open set $W\subseteq P$ containing $x$.

[F1] A basic product-open neighbourhood of $x$ restricts only finitely many coordinates and lies inside $W$ ([[def-product-topology]]).

[L1] In a regular factor, $x_i\in U_i$ open gives open $V_i$ with $x_i\in V_i\subseteq\overline{V_i}\subseteq U_i$ ([[lem-regularity-via-closed-neighbourhoods]]).

[L2] A family indexed by a natural number whose members are nonempty has a choice function, without any choice axiom ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Choose a basic neighbourhood $B=\bigcap_{i\in J}\pi_i^{-1}[U_i]$ of $x$ inside $W$, where $J$ is finite. [F1]

1.2 Since $J$ is finite, [L2] makes these factorwise choices simultaneously: take open $V_i$ with $x_i\in V_i\subseteq\overline{V_i}\subseteq U_i$ for every $i\in J$. [L1, L2]

2.1 Put $V=\bigcap_{i\in J}\pi_i^{-1}[V_i]$. It is open, contains $x$, and its closure lies in $\bigcap_{i\in J}\pi_i^{-1}[\overline{V_i}]\subseteq B\subseteq W$. [F1, step 1.2]

3.1 The closed-neighbourhood characterization proves $P$ regular. [L1, step 2.1] ∎
````

### `lem-products-preserve-t0-t1-and-hausdorff`

````markdown
---
id: lem-products-preserve-t0-t1-and-hausdorff
kind: lemma
title: "Arbitrary products preserve $T_0$, $T_1$, and Hausdorffness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-product-topology, thm-product-universal-property, def-t0-and-t1-spaces, def-hausdorff-space]
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

For any family $(X_i)_{i\in I}$, if every $X_i$ is $T_0$, respectively $T_1$, respectively Hausdorff, then $\prod_{i\in I}X_i$ is respectively $T_0$, $T_1$, respectively Hausdorff. The empty product is included.

## Facts & Assumptions

**Given:** A family of spaces with the indicated separation property and two distinct points $x,y$ of its product $P$.

[F1] Distinct product points differ at a coordinate, and $\pi_i^{-1}[U]$ is open whenever $U$ is open in $X_i$ ([[def-product-topology]], [[thm-product-universal-property]]).

[F2] The $T_0$, $T_1$, and Hausdorff conditions are respectively the stated one-sided, two-sided, and disjoint-open separations of distinct points ([[def-t0-and-t1-spaces]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 If $I=\varnothing$, the product has one point and all three conditions hold vacuously. [F2]

1.2 Otherwise choose $i\in I$ with $x_i\ne y_i$. For a $T_0$ factor, the inverse image under $\pi_i$ of an open set distinguishing $x_i,y_i$ distinguishes $x,y$. [F1, F2]

1.3 For a $T_1$ factor, pull back the two open sets separating $x_i$ from $y_i$ and $y_i$ from $x_i$. [F1, F2]

1.4 For a Hausdorff factor, pull back disjoint open neighbourhoods of $x_i,y_i$; their inverse images remain disjoint. [F1, F2]

2.1 Thus the product has the relevant property in every case. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
````

