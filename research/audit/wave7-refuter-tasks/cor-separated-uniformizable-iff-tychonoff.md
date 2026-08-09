## Selection reasons

- critical risk (8): 9 declared dependencies; 8 cited facts; biconditional / both-direction claim

## Target item — `cor-separated-uniformizable-iff-tychonoff`

Normalized current SHA-256: `06aa1e80d51c689d9b1515af020d2f3c952726e4d26fe98c73501fa51c9fa571`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-separated-uniformizable-iff-tychonoff
kind: corollary
title: "Assuming dependent choice, a nonempty topological space is separated-uniformizable if and only if it is Tychonoff"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-uniformizable-iff-completely-regular, thm-separated-uniformity-iff-induced-topology-is-hausdorff, def-completely-regular-and-tychonoff-spaces, def-t0-and-t1-spaces, def-dependent-choice, lem-completely-regular-topologies-come-from-continuous-pseudometrics, def-gauge-of-pseudometrics, lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, thm-t1-iff-singletons-are-closed]
aliases: []
landmark: true
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

**Assuming dependent choice,** a nonempty topological space is separated-uniformizable if and only if it is Tychonoff.

## Facts & Assumptions

**Given:** A nonempty topological space and dependent choice.

[L1] Uniformizable is equivalent to completely regular under dependent choice ([[thm-uniformizable-iff-completely-regular]]).

[L2] A separated compatible uniformity induces a Hausdorff topology ([[thm-separated-uniformity-iff-induced-topology-is-hausdorff]]).

[L3] Tychonoff means completely regular plus $T_1$ ([[def-completely-regular-and-tychonoff-spaces]], [[def-t0-and-t1-spaces]]).

[L4] A completely regular topology is induced by the gauge $p_f(x,y)=|f(x)-f(y)|$ over all continuous $f:X\to[0,1]$ ([[lem-completely-regular-topologies-come-from-continuous-pseudometrics]], [[def-gauge-of-pseudometrics]]).

[L5] Every Hausdorff space is $T_1$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], clause 2).

[L6] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b)).

## Proof

**Proof technique:** direct.

1.1 A separated-uniformizable space is completely regular by [L1] and Hausdorff by [L2], hence $T_1$ by [L5] and therefore Tychonoff by [L3]. [L1, L2, L3, L5]

1.2 Conversely, let $X$ be Tychonoff. For $x\ne y$, the singleton $\{y\}$ is closed by [L6], and complete regularity gives a continuous $f:X\to[0,1]$ with $f(x)=1$ and $f(y)=0$. Thus the gauge in [L4] has an entourage excluding $(x,y)$, so its intersection is the diagonal and it is separated. It induces the original topology by [L4]. [L3, L4, L6]

2.1 Thus it is separated-uniformizable, proving the converse and the equivalence. [step 1.2] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "cor-separated-uniformizable-iff-tychonoff",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "established-knowledge",
  "urls": [
    "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf",
    "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"
  ],
  "rationale": "ESCALATED TO ALPHA. The separated uniformization theorem is standard, but the item exposes DC and the library Tychonoff convention. Empty carrier is currently a counterexample, and T1/Hausdorff bridge citations are incomplete. ALPHA CONCURRENCE: Separated-uniformizable iff Tychonoff is the classical separated form of the uniformization theorem. The repaired nonempty domain, explicit DC, and locally stated T1 convention are recoverable convention and hypothesis adjustments to that standard result.",
  "alpha_concurred": true,
  "at": "2026-08-08",
  "ledger": "wave7-topology-uniform.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-uniformizable-iff-completely-regular",
      "source_section": "Statement",
      "quote": "**Assuming dependent choice,** a nonempty topological space is uniformizable if and only if it is completely regular.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-separated-uniformity-iff-induced-topology-is-hausdorff",
      "source_section": "Statement",
      "quote": "The topology induced by a uniformity $\\mathcal U$ is Hausdorff if and only if $\\mathcal U$ is separated.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-completely-regular-and-tychonoff-spaces",
      "source_section": "Definition",
      "quote": "- $X$ is **completely regular** when a point can be separated from a closed set\n  not containing it *by a continuous function*: for every closed $C \\subseteq X$\n  and every $x_0 \\in X \\setminus C$ there is a continuous\n  $f : X \\to [0,1]$ ([[def-continuous-map-top]]) with\n  $$f(x_0) = 1 \\qquad \\text{and} \\qquad f(y) = 0 \\ \\text{ for every } y \\in C .$$\n- $X$ is **Tychonoff**, also written **$T_{3\\frac{1}{2}}$** and *completely\n  regular Hausdorff*, when it is completely regular **and** $T_1$\n  ([[def-t0-and-t1-spaces]]).",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-t0-and-t1-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
      "source_section": "Statement",
      "quote": "The topology of a nonempty completely regular space is induced by the gauge of pseudometrics $p_f(x,y)=|f(x)-f(y)|$, where $f:X\\to[0,1]$ ranges over continuous maps.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-gauge-of-pseudometrics",
      "source_section": "Definition",
      "quote": "For an already given uniformity $\\mathcal U$ on $X$, a pseudometric $p$ is\n**uniformly continuous for $\\mathcal U$** when\n$$\n\\{(x,y):p(x,y)<\\varepsilon\\}\\in\\mathcal U\n$$\nfor every $\\varepsilon>0$. With this terminology, each member of a gauge is\nuniformly continuous for the uniformity generated by that gauge.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-urysohn-sits-between-hausdorff-and-regular-plus-t1",
      "source_section": "Statement",
      "quote": "2. If $X$ is Hausdorff then $X$ is $T_1$, and hence $T_0$\n   ([[def-t0-and-t1-spaces]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-t1-iff-singletons-are-closed",
      "source_section": "Statement",
      "quote": "- **(b)** $\\{x\\}$ is closed for every $x \\in X$.",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "A separated-uniformizable space is completely regular by [L1] and Hausdorff by [L2], hence $T_1$ by [L5] and therefore Tychonoff by [L3]. [L1, L2, L3, L5]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "L3",
        "L5"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Conversely, let $X$ be Tychonoff. For $x\\ne y$, the singleton $\\{y\\}$ is closed by [L6], and complete regularity gives a continuous $f:X\\to[0,1]$ with $f(x)=1$ and $f(y)=0$. Thus the gauge in [L4] has an entourage excluding $(x,y)$, so its intersection is the diagonal and it is separated. It induces the original topology by [L4]. [L3, L4, L6]",
      "step": "1.2",
      "inputs": [
        "L4",
        "L3",
        "L6"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Thus it is separated-uniformizable, proving the converse and the equivalence. [step 1.2] ∎",
      "step": "2.1",
      "inputs": [
        "1.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement: the repaired hypothesis requires a nonempty carrier, so the empty case is excluded"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.1: zero distance, zero index, or the base-value case was inspected under the displayed inequalities and definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the singleton, identity, finite-one, or unit-scale case was inspected"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "statement and step 1.1: the diagonal, coincident-point, constant, minimal, or equality degeneration was checked"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "statement and step 1.1: strict entourage bounds, interval endpoints, and limiting boundary behavior were checked"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.1: every selection was checked for a stated nonempty source, a canonical definition, or the expressly assumed choice principle"
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "statement and step 1.1: the forward implication was traced through its cited inputs"
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "statement and step 2.1: the reverse implication was traced separately through its cited inputs"
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (8): 9 declared dependencies; 8 cited facts; biconditional / both-direction claim, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: - Empty space: excluded by the explicit nonempty hypothesis; no counterexample arises. - Singleton space: trivially Tychonoff and separated-uniformizable; both directions hold vacuously or via constant functions. - Degenerate / constant-function case: under Tychonoff with more than one point, the separating function ensures the gauge contains a non-constant pseudometric that makes the uniformity separated. If all continuous functions were constant (impossible under T₁+completely regular for distinct points), the gauge uniformity would be trivial and not separated; the hypothesis prevents this. - Entourage radius: the choice ε=1/2 works because |f(x)-f(y)|=1, so the pair is excluded; the entourage is in the uniformity generated by the gauge. - Forward implication (1.1): uses L1 (requires DC) → completely regular; L2 → Hausdorff; L5 → T₁; L3 → Tychonoff. Valid. - Reverse implication (1.2): uses L6 & L3 to make singletons closed; complete regularity gives f; gauge uniformity separated and induces topology by L4. No DC required. - Choice use: step 1.2 obtains f from the complete regularity property, which is a single existence statement, not a choice among a family; no AC/DC is needed. The overall equivalence correctly depends on DC only through the forward direction via L1. - Other boundary cases (zero, one, endpoints) were checked under the standard inequalities and definitions; no hidden failure. Checked surface: The title, the public claim, each numbered proof step (1.1, 1.2, 2.1), and the (absent) Remarks were read and verified for mathematical accuracy and logical consistency. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/cor-separated-uniformizable-iff-tychonoff--0f7961fffa4fae2e.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-uniformizable-iff-completely-regular",
    "declared_target": "thm-uniformizable-iff-completely-regular",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-separated-uniformity-iff-induced-topology-is-hausdorff",
    "declared_target": "thm-separated-uniformity-iff-induced-topology-is-hausdorff",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-completely-regular-and-tychonoff-spaces",
    "declared_target": "def-completely-regular-and-tychonoff-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-t0-and-t1-spaces",
    "declared_target": "def-t0-and-t1-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
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
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
    "declared_target": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-gauge-of-pseudometrics",
    "declared_target": "def-gauge-of-pseudometrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-urysohn-sits-between-hausdorff-and-regular-plus-t1",
    "declared_target": "lem-urysohn-sits-between-hausdorff-and-regular-plus-t1",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-separated-uniformizable-iff-tychonoff",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-t1-iff-singletons-are-closed",
    "declared_target": "thm-t1-iff-singletons-are-closed",
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

## Full text of every cited or declared item (9)

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

### `def-gauge-of-pseudometrics`

````markdown
---
id: def-gauge-of-pseudometrics
kind: definition
title: "A gauge of pseudometrics and, on a nonempty set, the uniformity it generates"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-uniform-space-by-entourages, def-filter-base, lem-filter-base-generates]
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Definition

A **gauge of pseudometrics** on $X$ is a family $\mathcal P$ of pseudometrics ([[def-metric-space]]). For finite $F\subseteq\mathcal P$ and $\varepsilon>0$, put $E(F,\varepsilon)=\{(x,y):p(x,y)<\varepsilon\text{ for every }p\in F\}$. If $X\ne\varnothing$, these sets form a filter base and generate a uniformity ([[def-filter-base]], [[lem-filter-base-generates]]), called the uniformity **generated by $\mathcal P$**.

For an already given uniformity $\mathcal U$ on $X$, a pseudometric $p$ is
**uniformly continuous for $\mathcal U$** when
$$
\{(x,y):p(x,y)<\varepsilon\}\in\mathcal U
$$
for every $\varepsilon>0$. With this terminology, each member of a gauge is
uniformly continuous for the uniformity generated by that gauge.
````

### `def-t0-and-t1-spaces`

````markdown
---
id: def-t0-and-t1-spaces
kind: definition
title: "$T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-neighbourhood-top, def-interior-closure-boundary-top,
       def-standard-topologies]
justified_by: []
aliases: [def-t0-space, def-t1-space, def-kolmogorov-space, def-frechet-space]
landmark: true
short: "$T_0$ and $T_1$ spaces"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Kolmogorov space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Kolmogorov_space"
    - title: "T1 space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/T1_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are
  *topologically distinguishable*: for all $x, y \in X$ with $x \ne y$ there is
  an open set containing exactly one of $x$ and $y$.
- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points
  has an open set containing it and missing the other: for all $x, y \in X$ with
  $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \quad y \notin U, \qquad y \in V, \quad x \notin V .$$

Nothing is asserted about a pair of equal points, so a space with at most one
point satisfies both conditions vacuously.

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), both conditions may be read with "open
neighbourhood" in place of "open set"; and by the same equivalence recorded in
[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since
a neighbourhood of $x$ contains an open one and an open neighbourhood is a
neighbourhood.

**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to
the reader, because it is the bottom arrow of the whole hierarchy on this page.
Let $x \ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set
containing $x$ and not $y$, so it contains exactly one of the two points, which
is the $T_0$ condition. Only the first half of the $T_1$ condition is used, so
the implication does not reverse formally, and it does not reverse in fact:
Sierpinski space is a witness, recorded on the companion page.

**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set
that tells the pair apart, with no control over which of the two it contains;
$T_1$ asks for *both* separations at once. In Sierpinski space
$(\{a,b\}, \{\varnothing, \{b\}, \{a,b\}\})$ of [[def-standard-topologies]] the
open set $\{b\}$ contains $b$ and not $a$, so the space is $T_0$; but the only
open set containing $a$ is the whole space, which also contains $b$, so it is
not $T_1$.

**Neither condition is a property of a set alone.** Both are properties of the
pair $(X, \mathcal{T})$, and both are inherited upwards along the comparison
order of [[def-topological-space]]: if $\mathcal{T}_1 \subseteq \mathcal{T}_2$
and $(X,\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is
$(X,\mathcal{T}_2)$, since the separating open sets of the coarser topology lie
in the finer one. In particular the discrete topology satisfies both, and the
indiscrete topology on a set with at least two points satisfies neither.

## Remarks

- **The names.** The numbering $T_0, T_1, T_2, \dots$ is Alexandroff and Hopf's
  *Trennungsaxiome*; the individual names honour Kolmogorov and Frechet. This
  page fixes each axiom by its condition and treats the numeral as an
  abbreviation, because the numerals above $T_3$ are used inconsistently in the
  literature ([[rem-separation-axiom-conventions]]).

- **What $T_1$ says about closures.** $T_1$ is equivalent to the closedness of
  every singleton, and hence to $\overline{\{x\}} = \{x\}$ for every point
  ([[def-interior-closure-boundary-top]]); that equivalence is the next item and
  is a theorem, not a restatement. The corresponding characterisation of $T_0$,
  that distinct points have distinct closures, is not needed on this page and is
  not proved here.

- **No separation is built into the word *space*.** [[def-topological-space]]
  assumes none; every separation property on this page is a hypothesis written
  out where it is used.
````

### `lem-completely-regular-topologies-come-from-continuous-pseudometrics`

````markdown
---
id: lem-completely-regular-topologies-come-from-continuous-pseudometrics
kind: lemma
title: "The topology of a nonempty completely regular space is induced by the gauge of its continuous $[0,1]$-valued pseudometrics"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-completely-regular-and-tychonoff-spaces, def-gauge-of-pseudometrics, def-continuous-map-top, def-interval, lem-of-abs-value, lem-of-triangle-inequality]
aliases: []
landmark: true
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

The topology of a nonempty completely regular space is induced by the gauge of pseudometrics $p_f(x,y)=|f(x)-f(y)|$, where $f:X\to[0,1]$ ranges over continuous maps.

## Facts & Assumptions

**Given:** A nonempty completely regular space $X$.

[L1] Complete regularity separates a point from a closed set by a continuous $[0,1]$-valued function ([[def-completely-regular-and-tychonoff-spaces]], [[def-interval]]).

[L2] Such functions are continuous in the neighbourhood sense ([[def-continuous-map-top]]).

[L3] A gauge generates a uniformity from finite simultaneous pseudometric balls ([[def-gauge-of-pseudometrics]]).

[L4] Absolute value is nonnegative, vanishes only at zero and is even ([[lem-of-abs-value]]), and it satisfies $|u+v|\le |u|+|v|$ ([[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** constructive.

1.1 For each continuous $f:X\to[0,1]$, direct substitution in [L4] shows that $p_f(x,y)=|f(x)-f(y)|$ is nonnegative, symmetric, zero on the diagonal and satisfies the triangle inequality, so it is a pseudometric; its balls about $x$ are original-open by [L2]. [L2, L4, construct]

1.2 Conversely, if $x\in U$ is original-open, apply [L1] to the closed set $X\setminus U$ to obtain $f$ with $f(x)=1$ and $f[X\setminus U]=\{0\}$; then the $p_f$-ball of radius $1/2$ about $x$ lies in $U$. [L1, L3, choose]

2.1 Hence every gauge-open set is original-open. [step 1.1, L3]

3.1 Thus original-open and gauge-open sets contain one another, so the two topologies agree. [step 2.1, step 1.2, discharge-construct] ∎
````

### `lem-urysohn-sits-between-hausdorff-and-regular-plus-t1`

````markdown
---
id: lem-urysohn-sits-between-hausdorff-and-regular-plus-t1
kind: lemma
title: "Every Urysohn space is Hausdorff, every Hausdorff space is $T_1$ and hence $T_0$, and every regular $T_1$ space is Urysohn"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-urysohn-space, def-hausdorff-space, def-regular-and-t3-spaces,
       lem-regularity-via-closed-neighbourhoods, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, def-interior-closure-boundary-top,
       def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "$T_3 \\Rightarrow T_{2\\frac12} \\Rightarrow T_2 \\Rightarrow T_1 \\Rightarrow T_0$"
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
    - title: "Urysohn and completely Hausdorff spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). Then:

1. If $X$ is Urysohn ([[def-urysohn-space]]) then $X$ is Hausdorff
   ([[def-hausdorff-space]]).
2. If $X$ is Hausdorff then $X$ is $T_1$, and hence $T_0$
   ([[def-t0-and-t1-spaces]]).
3. If $X$ is regular ([[def-regular-and-t3-spaces]]) and $T_1$ — that is, if $X$
   is $T_3$ — then $X$ is Urysohn.

Consequently $T_3$ implies $T_{2\frac12}$, which implies $T_2$, which implies
$T_1$, which implies $T_0$. Nothing here asserts that any of the four
implications reverses; two of the failures are recorded among this page's false
statements.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and points $x, y \in X$ with $x \ne y$.

[A1] $X$ is Urysohn when distinct points have open neighbourhoods with disjoint closures ([[def-urysohn-space]]).

[A2] $X$ is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[A3] $X$ is $T_1$ when for distinct $x, y$ there are open $U \ni x$ with $y \notin U$ and open $V \ni y$ with $x \notin V$; every $T_1$ space is $T_0$ ([[def-t0-and-t1-spaces]]).

[L1] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b)).

[L2] $X$ is regular exactly when for every $x$ and every open $U \ni x$ there is an open $V$ with $x \in V \subseteq \overline{V} \subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]], clause (b)).

[L3] $A \subseteq \overline{A}$ for every $A \subseteq X$, and a set is closed exactly when its complement is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X$ is Urysohn and let $x \ne y$; [A1] gives open $U \ni x$ and $V \ni y$ with $\overline{U} \cap \overline{V} = \varnothing$. [A1, assume-hyp]

1.2 Assume $X$ is Hausdorff and let $x \ne y$; [A2] gives disjoint open $U \ni x$ and $V \ni y$. [A2, assume-hyp]

1.3 Assume $X$ is regular and $T_1$ and let $x \ne y$; by [L1] the set $\{y\}$ is closed, so $U_0 := X \setminus \{y\}$ is open by [L3] and contains $x$. [L1, L3, assume-hyp]

2.1 Under step 1.1: $U \cap V \subseteq \overline{U} \cap \overline{V} = \varnothing$ by [L3], so $U$ and $V$ are disjoint open neighbourhoods of $x$ and $y$ and $X$ is Hausdorff, which is claim 1. [step 1.1, A2, L3]

2.2 Under step 1.2: $y \notin U$ and $x \notin V$, since $U \cap V = \varnothing$ with $y \in V$ and $x \in U$; so $U$ and $V$ witness the $T_1$ condition and $X$ is $T_1$, hence $T_0$, which is claim 2. [step 1.2, A3]

2.3 Under step 1.3: [L2] applied to $x \in U_0$ gives an open $U$ with $x \in U \subseteq \overline{U} \subseteq U_0 = X \setminus \{y\}$, so $y \notin \overline{U}$. [step 1.3, L2]

3.1 Under step 2.3: $X \setminus \overline{U}$ is open by [L3] and contains $y$, so [L2] applied to it gives an open $V$ with $y \in V \subseteq \overline{V} \subseteq X \setminus \overline{U}$. [step 2.3, L2, L3]

4.1 Under step 3.1: $\overline{U} \cap \overline{V} = \varnothing$, since $\overline{V} \subseteq X \setminus \overline{U}$; so $U$ and $V$ witness the Urysohn condition at the pair $x, y$ and $X$ is Urysohn, which is claim 3. [step 3.1, A1]

5.1 Claims 1, 2 and 3 are steps 2.1, 2.2 and 4.1, and composing them gives the chain $T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0$. [step 2.1, step 2.2, step 4.1] ∎

## Remarks

- **Claim 3 is where the $T_1$ hypothesis earns its place.** Regularity separates a point from a *closed* set, and the closed set used in the proof is the singleton $\{y\}$; without $T_1$ that singleton need not be closed and the argument has nothing to start from. The indiscrete topology on two points is regular and not Urysohn, which shows the hypothesis cannot simply be dropped.

- **Regularity is applied twice, and the second application is the whole point.** The first shrink puts $y$ outside $\overline{U}$; the second separates $y$ from the closed set $\overline{U}$, which is what upgrades disjointness of the sets to disjointness of their closures.

- **Claim 2 explains why the Hausdorff condition alone is often quoted as "points are closed".** By [[thm-t1-iff-singletons-are-closed]] the two are not the same condition; $T_1$ is strictly weaker, and the cofinite topology on an infinite set separates them.
````

### `thm-separated-uniformity-iff-induced-topology-is-hausdorff`

````markdown
---
id: thm-separated-uniformity-iff-induced-topology-is-hausdorff
kind: theorem
title: "A uniformity is separated if and only if its induced topology is Hausdorff"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separated-uniform-space, thm-uniformity-induces-a-topology, def-hausdorff-space, lem-symmetric-entourages-form-a-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Statement

The topology induced by a uniformity $\mathcal U$ is Hausdorff if and only if $\mathcal U$ is separated.

## Facts & Assumptions

**Given:** A uniform space $(X,\mathcal U)$ with its induced topology.

[A1] A uniformity is separated exactly when each distinct pair is excluded by an entourage ([[def-separated-uniform-space]]).

[L1] Entourage balls are neighbourhood bases, and symmetric square roots exist ([[thm-uniformity-induces-a-topology]], [[lem-symmetric-entourages-form-a-base]]).

[L2] Hausdorff means that distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\mathcal U$ is separated and $x\ne y$. Choose $E$ with $(x,y)\notin E$, then a symmetric $D$ with $D\circ D\subseteq E$. [A1, L1, choose]

1.2 Conversely, if the induced topology is Hausdorff and $x\ne y$, choose disjoint neighbourhoods of $x,y$ and refine the first by an entourage ball $E[x]$; then $y\notin E[x]$, so $(x,y)\notin E$. [L1, L2, choose]

2.1 The neighbourhoods $D[x]$ and $D[y]$ are disjoint: if $z$ belonged to both, symmetry would give $(x,z),(z,y)\in D$ and hence $(x,y)\in D\circ D\subseteq E$. [step 1.1, L1]

3.1 Thus the induced topology is Hausdorff by [L2]. [step 2.1, L2]

4.1 Every distinct pair is excluded by an entourage, so $\mathcal U$ is separated by [A1]. [step 1.2, A1] ∎
````

### `thm-t1-iff-singletons-are-closed`

````markdown
---
id: thm-t1-iff-singletons-are-closed
kind: theorem
title: "A space is $T_1$ if and only if every singleton is closed, if and only if every finite subset is closed, if and only if its topology contains the cofinite topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-t0-and-t1-spaces, def-topological-space, def-standard-topologies,
       def-neighbourhood-top, def-countable]
justified_by: []
aliases: []
landmark: true
short: "$T_1$ iff points are closed"
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
    - title: "T1 space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/T1_space"
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 17: Closed Sets and Limit Points (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-17.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathcal{T}_{\mathrm{cof}}$ be the cofinite topology on the set $X$
([[def-standard-topologies]]). The following four conditions are equivalent.

- **(a)** $X$ is $T_1$ ([[def-t0-and-t1-spaces]]).
- **(b)** $\{x\}$ is closed for every $x \in X$.
- **(c)** $F$ is closed for every finite $F \subseteq X$ ([[def-countable]]).
- **(d)** $\mathcal{T}_{\mathrm{cof}} \subseteq \mathcal{T}$, that is, the
  topology of $X$ is finer than the cofinite topology on the same set.

Condition (d) says that the cofinite topology is the **coarsest** $T_1$ topology
on any set: it is $T_1$ by the equivalence, and every $T_1$ topology on that set
contains it.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the cofinite topology $\mathcal{T}_{\mathrm{cof}}$ on the same set $X$, points $x, y \in X$ and a finite subset $F \subseteq X$.

[A1] $X$ is $T_1$ when for all $x \ne y$ there are open $U, V$ with $x \in U$, $y \notin U$, $y \in V$ and $x \notin V$ ([[def-t0-and-t1-spaces]]).

[L1] A set is closed exactly when its complement is open; $\varnothing$ and $X$ are open and closed; and a union of two closed sets is closed by (C3), hence so is a union of finitely many by iterating (C3) ([[def-topological-space]]).

[L2] A set is open exactly when it is a neighbourhood of each of its points, that is, exactly when each of its points lies in an open subset of it ([[def-neighbourhood-top]], consequence 4).

[L3] The cofinite topology on $X$ consists of $\varnothing$ together with the sets whose complement in $X$ is finite; its closed sets are $X$ together with the finite subsets of $X$ ([[def-standard-topologies]]).

[L4] A finite set is one equinumerous with a natural number, so a finite $F$ may be listed as $F = \{x_0, \dots, x_{n-1}\}$ for some $n \in \mathbb{N}$, the case $n = 0$ being $F = \varnothing$ ([[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b): fix $x \in X$ and let $y \in X \setminus \{x\}$; then $y \ne x$, so [A1] supplies an open $V$ with $y \in V$ and $x \notin V$, whence $y \in V \subseteq X \setminus \{x\}$. [A1]

1.2 (b) implies (c): let $F \subseteq X$ be finite and list it as $F = \{x_0, \dots, x_{n-1}\}$ by [L4], so that $F = \{x_0\} \cup \dots \cup \{x_{n-1}\}$; for $n = 0$ this reads $F = \varnothing$, which is closed by [L1]. [L1, L4]

1.3 (c) implies (d): let $U \in \mathcal{T}_{\mathrm{cof}}$; if $U = \varnothing$ then $U \in \mathcal{T}$ by [L1], and otherwise $X \setminus U$ is finite by [L3], hence closed by (c), hence $U$ is open. [L1, L3]

1.4 (d) implies (a): let $x \ne y$ in $X$; the sets $X \setminus \{y\}$ and $X \setminus \{x\}$ have finite complements, so they lie in $\mathcal{T}_{\mathrm{cof}}$ by [L3] and hence in $\mathcal{T}$ by (d), and they witness the $T_1$ condition, since $x \in X \setminus \{y\}$, $y \notin X \setminus \{y\}$, $y \in X \setminus \{x\}$ and $x \notin X \setminus \{x\}$. [A1, L3]

2.1 By step 1.1 the set $X \setminus \{x\}$ is a neighbourhood of each of its points, hence open by [L2], so $\{x\}$ is closed by [L1]; this completes the implication (a) implies (b). [step 1.1, L1, L2]

2.2 By step 1.2 and (b) the set $F$ is a union of $n$ closed sets, hence closed by [L1]; this completes the implication (b) implies (c). [step 1.2, L1]

3.1 The four implications of steps 2.1, 2.2, 1.3 and 1.4 close the cycle (a) implies (b) implies (c) implies (d) implies (a), so the four conditions are equivalent. [step 1.3, step 1.4, step 2.1, step 2.2]

4.1 In particular $\mathcal{T}_{\mathrm{cof}}$ itself satisfies (d) with $\mathcal{T} = \mathcal{T}_{\mathrm{cof}}$, so the cofinite topology on any set is $T_1$ by step 3.1, and by (d) it is contained in every $T_1$ topology on that set; this is the final assertion of the statement. [step 3.1, L3] ∎

## Remarks

- **The theorem is the reason $T_1$ is quoted as "points are closed".** Every later use of $T_1$ on this page goes through clause (b): the $T_1$ hypothesis in $T_3$ and $T_4$ is used exactly to turn a point into a closed set so that regularity or normality applies to it.

- **Clause (c) is not a strengthening of clause (b).** It follows from it by a finite union, and the finite union is genuinely finite: an *arbitrary* union of closed sets need not be closed, and in the cofinite topology on an infinite set no infinite proper subset is closed at all, although every singleton is.

- **Clause (d) locates the cofinite topology.** It is the smallest $T_1$ topology on a given set, in the sense of [[def-topological-space]]'s comparison order, and this is why it is the standard witness for a $T_1$ space that fails every stronger separation axiom; the witness is worked on the companion page.
````

### `thm-uniformizable-iff-completely-regular`

````markdown
---
id: thm-uniformizable-iff-completely-regular
kind: theorem
title: "Assuming dependent choice, a nonempty topological space is uniformizable if and only if it is completely regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-uniformizable-spaces-are-completely-regular, lem-completely-regular-topologies-come-from-continuous-pseudometrics, def-uniformizable-space, def-dependent-choice]
aliases: []
landmark: true
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

**Assuming dependent choice,** a nonempty topological space is uniformizable if and only if it is completely regular.

## Facts & Assumptions

**Given:** A nonempty topological space and dependent choice.

[L1] Under dependent choice, uniformizable spaces are completely regular ([[lem-uniformizable-spaces-are-completely-regular]]).

[L2] A completely regular topology is induced by its gauge of continuous pseudometrics ([[lem-completely-regular-topologies-come-from-continuous-pseudometrics]]).

[L3] Uniformizable means induced by some uniformity ([[def-uniformizable-space]]).

## Proof

**Proof technique:** direct.

1.1 The forward implication is [L1]. [L1]

1.2 The gauge supplied by [L2] is a uniformity inducing the given topology, so the reverse implication is [L2] and [L3]. [L2, L3]

2.1 The two implications prove the equivalence under dependent choice. [step 1.1, step 1.2] ∎
````

