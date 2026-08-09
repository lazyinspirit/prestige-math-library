## Selection reasons

- high risk (6): 5 declared dependencies; 5 cited facts; boundary-sensitive language

## Target item — `thm-positive-heredity-of-separation-axioms`

Normalized current SHA-256: `74239f0821bed9ddc00a84faef3c24717bef41591aa211843e4e9acdfd5e0f89`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-positive-heredity-of-separation-axioms
kind: theorem
title: "$T_0$, $T_1$, $T_2$, regularity, $T_3$, complete regularity, and Tychonoffness are hereditary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-t0-t1-and-hausdorff-are-hereditary, lem-regularity-is-hereditary, lem-complete-regularity-is-hereditary, def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces]
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

Each of $T_0$, $T_1$, Hausdorffness ($T_2$), regularity, $T_3$, complete regularity, and Tychonoffness is hereditary.

## Facts & Assumptions

**Given:** A subspace of a space with one of the listed separation properties.

[L1] $T_0$, $T_1$, and Hausdorffness are hereditary ([[lem-t0-t1-and-hausdorff-are-hereditary]]).

[L2] Regularity and complete regularity are hereditary ([[lem-regularity-is-hereditary]], [[lem-complete-regularity-is-hereditary]]).

[F1] $T_3$ means regular plus $T_1$, and Tychonoff means completely regular plus $T_1$ ([[def-regular-and-t3-spaces]], [[def-completely-regular-and-tychonoff-spaces]]).

## Proof

**Proof technique:** direct.

1.1 The first three assertions are [L1], and regularity and complete regularity are [L2]. [L1, L2]

1.2 A subspace of a $T_3$ space is regular by [L2] and $T_1$ by [L1], hence is $T_3$. [F1, L1, L2]

1.3 A subspace of a Tychonoff space is completely regular by [L2] and $T_1$ by [L1], hence is Tychonoff. [F1, L1, L2]

2.1 These cover every property named in the statement. [step 1.1, step 1.2, step 1.3] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-positive-heredity-of-separation-axioms",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf",
    "https://en.wikipedia.org/wiki/Separation_axiom"
  ],
  "rationale": "This is a library aggregation of standard hereditary separation properties; May Proposition 6.6 supplies the Hausdorff/regular/completely-regular core, with convention and aggregation changes.",
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
      "source": "lem-t0-t1-and-hausdorff-are-hereditary",
      "source_section": "Statement",
      "quote": "The properties $T_0$, $T_1$, and Hausdorffness are hereditary in the sense of [[def-hereditary-property]].",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-regularity-is-hereditary",
      "source_section": "Statement",
      "quote": "Regularity, with no $T_1$ condition built into its name, is hereditary.",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-complete-regularity-is-hereditary",
      "source_section": "Statement",
      "quote": "Complete regularity, with no $T_1$ condition built into its name, is hereditary.",
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
      "claim": "The first three assertions are [L1], and regularity and complete regularity are [L2]. [L1, L2]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "A subspace of a $T_3$ space is regular by [L2] and $T_1$ by [L1], hence is $T_3$. [F1, L1, L2]",
      "step": "1.2",
      "inputs": [
        "F1",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "A subspace of a Tychonoff space is completely regular by [L2] and $T_1$ by [L1], hence is Tychonoff. [F1, L1, L2]",
      "step": "1.3",
      "inputs": [
        "F1",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "These cover every property named in the statement. [step 1.1, step 1.2, step 1.3] ∎",
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
      "evidence": "statement: zero or base-value case was inspected under the displayed definitions"
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
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "high risk (6): 5 declared dependencies; 5 cited facts; boundary-sensitive language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: Checked empty subspace, singleton subspace, and arbitrary nonempty subspaces; the properties hold vacuously or by the given proofs. No counterexample exists. The proof contract boundary cases (empty, zero, one, degenerate) were reviewed and are consistent. Checked surface: Read the title, the public statement, every numbered step (1.1, 1.2, 1.3, 2.1), and Remarks (none present). Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/thm-positive-heredity-of-separation-axioms--edfb5b33ceebb7f5.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-positive-heredity-of-separation-axioms",
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
    "source": "thm-positive-heredity-of-separation-axioms",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-regularity-is-hereditary",
    "declared_target": "lem-regularity-is-hereditary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-positive-heredity-of-separation-axioms",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-complete-regularity-is-hereditary",
    "declared_target": "lem-complete-regularity-is-hereditary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-positive-heredity-of-separation-axioms",
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
    "source": "thm-positive-heredity-of-separation-axioms",
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

### `lem-complete-regularity-is-hereditary`

````markdown
---
id: lem-complete-regularity-is-hereditary
kind: lemma
title: "Complete regularity is hereditary, without a hidden $T_1$ hypothesis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-completely-regular-and-tychonoff-spaces, def-subspace-topology-top, thm-continuity-characterisations-top, def-hereditary-property]
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

Complete regularity, with no $T_1$ condition built into its name, is hereditary.

## Facts & Assumptions

**Given:** A completely regular space $X$, a subspace $S\subseteq X$, a closed set $F$ of $S$, and $x\in S\setminus F$.

[F1] A closed subset of $S$ has the form $C\cap S$ for a closed $C\subseteq X$ ([[def-subspace-topology-top]]).

[F2] Complete regularity supplies a continuous $f:X\to[0,1]$ with $f(x)=1$ and $f[C]=\{0\}$ when $C$ is closed and misses $x$ ([[def-completely-regular-and-tychonoff-spaces]]).

[L1] A restriction of a continuous map to a subspace is continuous ([[def-subspace-topology-top]], [[thm-continuity-characterisations-top]]).

## Proof

**Proof technique:** direct.

1.1 Choose closed $C\subseteq X$ with $F=C\cap S$; since $x\in S\setminus F$, one has $x\notin C$. [F1]

1.2 Choose $f:X\to[0,1]$ continuous with $f(x)=1$ and $f[C]=\{0\}$. [F2]

2.1 The restriction $f|_S:S\to[0,1]$ is continuous, takes $x$ to $1$, and vanishes on $F\subseteq C$. [L1, step 1.2]

3.1 Thus $S$ is completely regular, and the arbitrariness of $S$ proves heredity. [F2, step 2.1] ∎
````

### `lem-regularity-is-hereditary`

````markdown
---
id: lem-regularity-is-hereditary
kind: lemma
title: "Regularity is hereditary, without a hidden $T_1$ hypothesis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-regularity-via-closed-neighbourhoods, thm-subspace-closure-and-interior, def-hereditary-property]
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

Regularity, with no $T_1$ condition built into its name, is hereditary.

## Facts & Assumptions

**Given:** A regular space $X$, a subspace $S\subseteq X$, a point $x\in S$, and an open set $W$ of $S$ containing $x$.

[L1] In a regular space, $x\in U$ open gives an open $V$ with $x\in V\subseteq\overline V\subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]]).

[L2] Every open set of $S$ is a trace $U\cap S$, and closure in $S$ is the ambient closure intersected with $S$ ([[thm-subspace-closure-and-interior]]).

## Proof

**Proof technique:** direct.

1.1 Write $W=U\cap S$ for an open $U\subseteq X$ containing $x$. [L2]

1.2 Choose open $V\subseteq X$ with $x\in V\subseteq\overline V\subseteq U$. [L1]

2.1 The trace $V\cap S$ is open in $S$, contains $x$, and has $\operatorname{cl}_S(V\cap S)\subseteq\overline V\cap S\subseteq U\cap S=W$. [L2, step 1.2]

3.1 The closed-neighbourhood characterization now makes $S$ regular; as $S$ was arbitrary, regularity is hereditary. [L1, step 2.1] ∎
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

