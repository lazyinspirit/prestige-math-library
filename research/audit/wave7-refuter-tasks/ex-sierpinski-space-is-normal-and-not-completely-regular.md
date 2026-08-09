## Selection reasons

- high risk (6): 8 declared dependencies; 2 cited facts; boundary-sensitive language

## Target item — `ex-sierpinski-space-is-normal-and-not-completely-regular`

Normalized current SHA-256: `ce644d645afb9f315bedfdfec1f50c14cd215ade9f9ddb2bea531084c6e036f9`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-sierpinski-space-is-normal-and-not-completely-regular
kind: example
title: "Sierpinski space is normal and not completely regular, so the $T_1$ hypothesis in the Urysohn corollary is not decoration"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-every-normal-space-is-completely-regular, cor-urysohns-lemma-closes-the-separation-chain,
       def-standard-topologies, def-normal-and-t4-spaces, def-completely-regular-and-tychonoff-spaces,
       thm-completely-regular-implies-regular, def-regular-and-t3-spaces, def-t0-and-t1-spaces]
justified_by: []
aliases: []
landmark: false
short: "Sierpinski: normal, not $T_1$, not completely regular"
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
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
pipeline_run: null
---

## Example

Sierpinski space $S = \{a,b\}$, $a \ne b$, with
$\mathcal{T}_{\mathrm{Sier}} = \{\varnothing,\{b\},S\}$
([[def-standard-topologies]]) is normal ([[def-normal-and-t4-spaces]]) but not
completely regular ([[def-completely-regular-and-tychonoff-spaces]]), by
[[fs-every-normal-space-is-completely-regular]]. The refutation there in fact
shows $S$ is not even regular — the only open set containing $a$ is $S$ itself —
and complete regularity then fails because it implies regularity
([[thm-completely-regular-implies-regular]]). And $S$ is not $T_1$: the
singleton $\{b\}$ is not closed in $S$.

This is exactly why [[cor-urysohns-lemma-closes-the-separation-chain]] proves
its arrow for a normal $T_1$ space and not for a bare normal space: $S$ is a
normal space for which the corollary's conclusion — complete regularity —
genuinely fails, and the one hypothesis it lacks is $T_1$.

## Facts & Assumptions

**Given:** Sierpinski space $S$ as above.

[L1] $S$ is normal and not completely regular, with witness argument as in [[fs-every-normal-space-is-completely-regular]].

[L2] $S$ is not $T_1$ ([[def-t0-and-t1-spaces]]): the only closed sets of $S$ are $S, \{a\}, \varnothing$, so the singleton $\{b\}$ is not closed.

## Verification

**Proof technique:** direct.

1.1 By [L1], $S$ is normal and not completely regular. [L1]

1.2 By [L2], $\{b\}$ is not among the closed sets $\{S,\{a\},\varnothing\}$ of $S$, so $S$ fails $T_1$. [L2]

2.1 By steps 1.1 and 1.2: $S$ is a normal space that is not $T_1$ and not completely regular, so it does not meet the hypothesis of [[cor-urysohns-lemma-closes-the-separation-chain]] (normal *and* $T_1$), and indeed its conclusion fails for $S$; dropping $T_1$ from that corollary would make it false, with $S$ as the witness. [step 1.1, step 1.2] ∎

## Remarks

- **This is not a new computation.** Every fact used above is proved in [[fs-every-normal-space-is-completely-regular]]; this item only reads that refutation as the positive example it also is, and connects it to the hypothesis of [[cor-urysohns-lemma-closes-the-separation-chain]] by name.
````

## Wave 7 provenance row for the target

```json
{
  "id": "ex-sierpinski-space-is-normal-and-not-completely-regular",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
  ],
  "rationale": "The source explicitly states that Sierpinski space is normal but neither regular nor completely regular and is not T1; the library relabels its two points and connects it to the page corollary.",
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
      "source": "fs-every-normal-space-is-completely-regular",
      "source_section": "Statement",
      "quote": "**FALSE.** Every normal space is completely regular.\n\nThis is exactly why [[cor-urysohns-lemma-closes-the-separation-chain]] carries\nthe hypothesis $T_1$: normality alone, without $T_1$, gives no separation\nproperty above itself.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-t0-and-t1-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are\n  *topologically distinguishable*: for all $x, y \\in X$ with $x \\ne y$ there is\n  an open set containing exactly one of $x$ and $y$.\n- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points\n  has an open set containing it and missing the other: for all $x, y \\in X$ with\n  $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with\n\n$$x \\in U, \\quad y \\notin U, \\qquad y \\in V, \\quad x \\notin V .$$\n\nNothing is asserted about a pair of equal points, so a space with at most one\npoint satisfies both conditions vacuously.\n\nSince an open set containing a point is an open neighbourhood of it\n([[def-neighbourhood-top]]), both conditions may be read with \"open\nneighbourhood\" in place of \"open set\"; and by the same equivalence recorded in\n[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since\na neighbourhood of $x$ contains an open one and an open neighbourhood is a\nneighbourhood.\n\n**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to\nthe reader, because it is the bottom arrow of the whole hierarchy on this page.\nLet $x \\ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set\ncontaining $x$ and not $y$, so it contains exactly one of the two points, which\nis the $T_0$ condition. Only the first half of the $T_1$ condition is used, so\nthe implication does not reverse formally, and it does not reverse in fact:\nSierpinski space is a witness, recorded on the companion page.\n\n**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set\nthat tells the pair apart, with no control over which of the two it contains;\n$T_1$ asks for *both* separations at once. In Sierpinski space\n$(\\{a,b\\}, \\{\\varnothing, \\{b\\}, \\{a,b\\}\\})$ of [[def-standard-topologies]] the\nopen set $\\{b\\}$ contains $b$ and not $a$, so the space is $T_0$; but the only\nopen set containing $a$ is the whole space, which also contains $b$, so it is\nnot $T_1$.\n\n**Neither condition is a property of a set alone.** Both are properties of the\npair $(X, \\mathcal{T})$, and both are inherited upwards along the comparison\norder of [[def-topological-space]]: if $\\mathcal{T}_1 \\subseteq \\mathcal{T}_2$\nand $(X,\\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is\n$(X,\\mathcal{T}_2)$, since the separating open sets of the coarser topology lie\nin the finer one. In particular the discrete topology satisfies both, and the\nindiscrete topology on a set with at least two points satisfies neither.",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [L1], $S$ is normal and not completely regular. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "By [L2], $\\{b\\}$ is not among the closed sets $\\{S,\\{a\\},\\varnothing\\}$ of $S$, so $S$ fails $T_1$. [L2]",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By steps 1.1 and 1.2: $S$ is a normal space that is not $T_1$ and not completely regular, so it does not meet the hypothesis of [[cor-urysohns-lemma-closes-the-separation-chain]] (normal *and* $T_1$), and indeed its conclusion fails for $S$; dropping $T_1$ from that corollary would make it false, with $S$ as the witness. [step 1.1, step 1.2] ∎",
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
      "evidence": "statement and step 1.2: empty-set or empty-family case was inspected and introduces no illicit witness"
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
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "high risk (6): 8 declared dependencies; 2 cited facts; boundary-sensitive language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The Sierpinski space is a finite two‑point space. Normality is checked for all disjoint closed pairs, including those involving the empty set. The counterexample to complete regularity uses a nonempty closed set $\\{a\\}$ and point $b$; the case $C=\\varnothing$ is not a counterexample but does not rescue complete regularity. Degenerate (one‑point) and empty‑space cases are not applicable to the witness. The boundary checks in the supplied proof contract are consistent. Checked surface: The title, the public claim (the Example section), every numbered verification step (1.1, 1.2, 2.1), and the Remarks were read and verified; no mathematical inaccuracy or logical defect was found. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/ex-sierpinski-space-is-normal-and-not-completely-regular--4821c49df0dab079.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "fs-every-normal-space-is-completely-regular",
    "declared_target": "fs-every-normal-space-is-completely-regular",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "cor-urysohns-lemma-closes-the-separation-chain",
    "declared_target": "cor-urysohns-lemma-closes-the-separation-chain",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-standard-topologies",
    "declared_target": "def-standard-topologies",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-normal-and-t4-spaces",
    "declared_target": "def-normal-and-t4-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-completely-regular-implies-regular",
    "declared_target": "thm-completely-regular-implies-regular",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
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
    "source": "ex-sierpinski-space-is-normal-and-not-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze-examples",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-t0-and-t1-spaces",
    "declared_target": "def-t0-and-t1-spaces",
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

## Full text of every cited or declared item (8)

### `cor-urysohns-lemma-closes-the-separation-chain`

````markdown
---
id: cor-urysohns-lemma-closes-the-separation-chain
kind: corollary
title: "Under dependent choice a normal $T_1$ space is completely regular, so $T_4 \\Rightarrow T_{3\\frac{1}{2}}$, and together with the implications already proved this is the whole classical chain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-urysohn-lemma, def-normal-and-t4-spaces, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, def-completely-regular-and-tychonoff-spaces,
       thm-the-separation-implication-chain, def-dependent-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "$T_4 \\Rightarrow T_{3\\frac12}$ (DC)"
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
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). If
$(X,\mathcal{T})$ is normal and $T_1$, that is $T_4$
([[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]), then $X$ is
completely regular ([[def-completely-regular-and-tychonoff-spaces]]). Since $X$
is also $T_1$, $X$ is Tychonoff, and $T_4 \Rightarrow T_{3\frac12}$.

Combined with [[thm-the-separation-implication-chain]], every arrow of

$$T_6 \Rightarrow T_5 \Rightarrow T_4 \Rightarrow T_{3\frac12} \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0$$

now holds: the first arrow under the Axiom of Countable Choice
([[def-countable-choice]]), the arrow $T_4 \Rightarrow T_{3\frac12}$ proved here
under dependent choice, and every other arrow with no choice principle at all.
No arrow of this chain is asserted to reverse.

## Facts & Assumptions

**Given:** A normal, $T_1$ topological space $(X,\mathcal{T})$, a closed set $C \subseteq X$, and a point $x_0 \in X \setminus C$.

[A1] $X$ is normal ([[def-normal-and-t4-spaces]]) and $T_1$ ([[def-t0-and-t1-spaces]]).

[L1] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b)).

[L2] Urysohn's lemma, clause 1: assuming DC, if $X$ is normal and $P, Q \subseteq X$ are disjoint closed sets, there is a continuous $h : X \to [0,1]$ with $P \subseteq h^{-1}(\{0\})$ and $Q \subseteq h^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L3] $X$ is completely regular when for every closed $C$ and every $x_0 \in X \setminus C$ there is a continuous $f : X \to [0,1]$ with $f(x_0) = 1$ and $f \equiv 0$ on $C$ ([[def-completely-regular-and-tychonoff-spaces]]).

[L4] Clauses 3 and 4 of [[thm-the-separation-implication-chain]]: normal with $T_1$ implies $T_3$; completely regular implies regular, and Tychonoff implies $T_3$; and clauses 1, 2 and 5 give the remaining arrows of the displayed chain, clause 1 — perfectly normal implies completely normal, that is $T_6 \Rightarrow T_5$ — under the Axiom of Countable Choice.

## Proof

**Proof technique:** direct.

1.1 $\{x_0\}$ is closed, since $X$ is $T_1$ by [A1]. [A1, L1]

1.2 $\{x_0\} \cap C = \varnothing$, since $x_0 \notin C$. [given]

2.1 By [A1] $X$ is normal, so [L2] applies to the disjoint closed sets $C$ and $\{x_0\}$: there is a continuous $f : X \to [0,1]$ with $C \subseteq f^{-1}(\{0\})$ and $\{x_0\} \subseteq f^{-1}(\{1\})$, that is $f \equiv 0$ on $C$ and $f(x_0) = 1$. [step 1.1, step 1.2, A1, L2]

3.1 Since $C$ and $x_0 \notin C$ were arbitrary, step 2.1 exhibits, for every closed $C$ and every $x_0 \in X \setminus C$, a continuous $f : X \to [0,1]$ with $f(x_0)=1$ and $f \equiv 0$ on $C$; by [L3] this makes $X$ completely regular. [step 2.1, L3]

4.1 Since $X$ is also $T_1$ by [A1], $X$ is Tychonoff, so $T_4 \Rightarrow T_{3\frac12}$. [step 3.1, A1]

5.1 By [L4], $T_{3\frac12} \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0$ and $T_6 \Rightarrow T_5 \Rightarrow T_4$ all hold, the arrow $T_6 \Rightarrow T_5$ under countable choice; combined with step 4.1, every arrow of the displayed chain holds. [step 4.1, L4] ∎

## Remarks

- **This corollary supplies exactly the one arrow the published `separation-axioms` page could not reach.** That page's own `rem-separation-axiom-conventions` names the missing arrow as *normal $T_1$ implies completely regular* and records that no rearrangement of material already on that page could supply it, since the implication is Urysohn's lemma. Nothing in this corollary revisits or amends that page; it only supplies, at a later point in the reading order, the theorem that page named as absent.

- **The chain above is not asserted to be a theorem of ZF.** Its weakest link is this corollary's own dependent-choice hypothesis, and the first arrow separately costs countable choice; neither cost is removed by combining the arrows, and no clause of [[thm-the-separation-implication-chain]] is reproved here.
````

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

### `def-normal-and-t4-spaces`

````markdown
---
id: def-normal-and-t4-spaces
kind: definition
title: "Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-t0-and-t1-spaces, def-separated-sets,
       def-standard-topologies, def-neighbourhood-top]
justified_by: []
aliases: [def-normal-space, def-t4-space]
landmark: true
short: "normal space, $T_4$ space"
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
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **normal** when any two disjoint closed sets can be separated by
  disjoint open sets: for all closed $A, B \subseteq X$ with
  $A \cap B = \varnothing$ there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Either of $A$, $B$ may be empty, and those cases are met by $U = \varnothing$ or
$V = \varnothing$ together with $X$; so the condition hides no nonemptiness
hypothesis. As with regularity, "disjoint open sets" may equivalently be read as
"disjoint open neighbourhoods of the two sets" ([[def-neighbourhood-top]]).

**Normality is the special case of complete normality at a disjoint closed
pair.** Disjoint closed sets are separated in the sense of
[[def-separated-sets]], since the closure of a closed set is itself; so a space
in which every *separated* pair can be put into disjoint open sets is in
particular normal. That stronger condition is defined later on this page, and the
implication is proved there.

**The convention fork, and this library's side of it.** Exactly as for
regularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.
Munkres builds it in; Kelley, Willard and Engelking do not. **This library takes
the second side**: *normal* names the separation condition alone, $T_4$ names
normal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.
The reason is again that the two halves are independent, and here the point is
sharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The
indiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,
its only closed sets being $\varnothing$ and the whole space, and it is not even
$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on
this page, the first as a false statement and both on the companion page.

## Remarks

- **Normality does not imply regularity**, and the failure is witnessed by
  Sierpinski space on the companion page, which is normal and not regular.
  Whether *regularity* implies normality is a question this page leaves open: any
  witness reachable from the material here would need cardinal arithmetic or the
  hereditary behaviour of regularity. This page's own prerequisites still supply
  neither: cardinal arithmetic and cofinality is now built, but *below* this
  one, and nothing here draws on it; the hereditary and productive behaviour of
  the separation axioms is developed later in the reading order. So nothing above
  asserts an answer and no false statement asserting
  one is planted here ([[rem-separation-axiom-conventions]]).

- **Normality is the axiom that behaves worst**, and the companion page shows
  one symptom: the deleted Tychonoff plank, a subspace of a product of two
  ordinal spaces each of which is $T_3$, is Hausdorff and not normal. Whether
  normality is inherited by subspaces or preserved by products is a question this
  page does not answer, and nothing here asserts an answer; the plank is
  presented only as a Hausdorff space that fails normality.

- **What the definition does *not* say.** It says nothing about separating a
  point from a closed set, because a point need not be closed; that is the
  content of the $T_1$ hypothesis in $T_4$, and the theorem two items below is
  where it is spent.
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

### `def-standard-topologies`

````markdown
---
id: def-standard-topologies
kind: definition
title: "The discrete, indiscrete, cofinite, cocountable, particular-point and Sierpinski topologies"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-countable, lem-subset-of-countable, thm-countable-union-of-countable,
       def-equinumerous, def-injection-surjection-bijection, def-natural-numbers,
       lem-nat-order-is-membership, lem-nat-transitive-irreflexive, thm-induction-principle]
justified_by: []
aliases: [def-discrete-topology, def-indiscrete-topology, def-cofinite-topology,
          def-cocountable-topology, def-particular-point-topology, def-sierpinski-space]
landmark: true
short: "discrete, indiscrete, cofinite, cocountable, particular point, Sierpinski"
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
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Particular point topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Particular_point_topology"
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
pipeline_run: null
---

## Definition

Throughout, a topology is as in [[def-topological-space]], and *finite*,
*at most countable* and *uncountable* are as in [[def-countable]], so that
"countable" always means "at most countable" and every finite set is countable.
Let $X$ be a set. The six families below are topologies on $X$; that each really
satisfies (T1), (T2) and (T3) is discharged in full after the list.

1. **Discrete topology.** $\mathcal{T}_{\mathrm{disc}} := \mathcal{P}(X)$: every
   subset is open, hence every subset is closed, hence every subset is clopen.
2. **Indiscrete topology.** $\mathcal{T}_{\mathrm{ind}} := \{\varnothing, X\}$.
   Its closed sets are again $\varnothing$ and $X$.
3. **Cofinite topology.**
   $\mathcal{T}_{\mathrm{cof}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is finite} \,\}$.
   Its closed sets are $X$ together with the finite subsets of $X$.
4. **Cocountable topology.**
   $\mathcal{T}_{\mathrm{coc}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is at most countable} \,\}$.
   Its closed sets are $X$ together with the at most countable subsets of $X$.
5. **Particular-point topology.** Fix $p \in X$ and put
   $\mathcal{T}_p := \{\varnothing\} \cup \{\, U \subseteq X : p \in U \,\}$: the
   open sets are $\varnothing$ and the sets containing $p$. Its closed sets are
   $X$ together with the sets **not** containing $p$.
6. **Sierpinski topology.** On a two-point set $S = \{a, b\}$ with $a \ne b$,
   $\mathcal{T}_{\mathrm{Sier}} := \{\varnothing, \{b\}, S\}$. The pair
   $(S, \mathcal{T}_{\mathrm{Sier}})$ is **Sierpinski space**; $b$ is its open
   point and $a$ its closed point. This is exactly the particular-point topology
   of item 5 on a two-point set with particular point $b$, listed separately
   because it is quoted so often.

**Two elementary facts about finite sets are used below, and both are proved
here.**

*(i) A subset of a finite set is finite.* Let $F \approx n$ with $n \in \mathbb{N}$
([[def-equinumerous]], [[def-natural-numbers]]), witnessed by a bijection
$\varphi : F \to n$, and let $B \subseteq F$. Then $\varphi$ restricts to a
bijection of $B$ onto $\varphi[B] \subseteq n$
([[def-injection-surjection-bijection]]). Every element of the von Neumann natural
$n$ is a natural number strictly smaller than $n$
([[lem-nat-order-is-membership]]), so $\varphi[B]$ is a subset of $\mathbb{N}$
bounded above by $n$, hence finite by the sharper form of
[[lem-subset-of-countable]] ("a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above"). Since $\approx$ is symmetric and transitive, $B$ is finite.

*(ii) A union of two finite sets is finite.* First, if $H$ is finite and $g$ is
any object then $H \cup \{g\}$ is finite: if $g \in H$ there is nothing to prove,
and otherwise a bijection $u : H \to k$ extends to a bijection
$H \cup \{g\} \to k \cup \{k\} = \sigma(k)$ by setting $u(g) := k$, which is
injective because $k \notin k$ ([[lem-nat-transitive-irreflexive]]). Now fix a
finite set $F$ and argue by induction ([[thm-induction-principle]]) on
$m \in \mathbb{N}$ over the statement "for every $G$ with $G \approx m$, the union
$F \cup G$ is finite". At $m = 0$ we have $G = \varnothing$ and $F \cup G = F$. At
$m = \sigma(j)$, a bijection $\psi : G \to \sigma(j)$ gives $g := \psi^{-1}(j)$
and $G' := G \setminus \{g\} \approx j$ (restrict $\psi$), so
$F \cup G = (F \cup G') \cup \{g\}$ is finite by the induction hypothesis and the
previous sentence.

**Discharge of the topology axioms.**

*Discrete.* Every subset of $X$ lies in $\mathcal{P}(X)$, so (T1), (T2) and (T3)
hold with nothing to check.

*Indiscrete.* (T1) is the definition. For (T2), a subfamily of
$\{\varnothing, X\}$ has union $\varnothing$ (if it is empty or $\{\varnothing\}$)
or $X$ (otherwise). For (T3), $\varnothing \cap A = \varnothing$ and
$X \cap X = X$.

*Cofinite.* (T1): $\varnothing$ is listed, and $X \setminus X = \varnothing$ is
finite. (T2): let $\mathcal{S} \subseteq \mathcal{T}_{\mathrm{cof}}$. If every
member is $\varnothing$ the union is $\varnothing$. Otherwise fix
$U_0 \in \mathcal{S}$ with $U_0 \ne \varnothing$; then
$X \setminus \bigcup \mathcal{S} \subseteq X \setminus U_0$, which is finite, so
the left side is finite by (i). (T3): for nonempty $U, V$ with finite
complements, $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is
finite by (ii); and if either of $U, V$ is empty so is $U \cap V$. The closed sets
are the complements of the open ones, that is $X = X \setminus \varnothing$
together with the finite sets.

*Cocountable.* Identical to the cofinite case with "at most countable" in place of
"finite": (i) is replaced by [[lem-subset-of-countable]] itself, and (ii) by the
statement that a union of two at most countable sets is at most countable, which
is the two-set instance of [[thm-countable-union-of-countable]] applied to the
family $A_0 := U, A_1 := V, A_k := \varnothing$ for $k \ge 2$.

*Particular point.* (T1): $\varnothing$ is listed and $p \in X$. (T2): a
subfamily whose members are all $\varnothing$ has union $\varnothing$; otherwise
some member contains $p$, hence so does the union. (T3): if $U$ and $V$ both
contain $p$ then so does $U \cap V$; and if either is $\varnothing$ then so is the
intersection.

*Sierpinski.* The special case $X = \{a,b\}$, $p = b$ of the previous paragraph:
the sets containing $b$ are $\{b\}$ and $S$, so
$\mathcal{T}_b = \{\varnothing, \{b\}, S\} = \mathcal{T}_{\mathrm{Sier}}$.

## Remarks

- **Two degenerate collapses.** If $X$ is finite then the cofinite topology is
  the discrete one, since every subset then has finite complement by fact (i)
  above; if $X$ is at most countable the cocountable topology is discrete for the
  same reason. Both families are therefore interesting only on an infinite,
  respectively uncountable, set, and every statement made about them below names
  that hypothesis.

- **Where the two extremes sit in the comparison order.** The discrete topology
  is the finest and the indiscrete the coarsest topology on $X$
  ([[def-topological-space]]): every topology is a subfamily of $\mathcal{P}(X)$
  and contains $\varnothing$ and $X$. Every other topology on $X$ lies between
  them, and the cofinite topology is coarser than the cocountable one, because a
  finite set is at most countable.

- **No choice principle is needed for any of the six, despite the citation.**
  The only appeal above that carries a choice hypothesis is
  [[thm-countable-union-of-countable]], whose statement assumes
  $\mathrm{AC}_\omega$, and it is used for a union of **two** sets only, padded
  with copies of $\varnothing$. That instance is provable in ZF alone, by
  interleaving two *given* enumerations, exactly as
  [[cor-irrationals-uncountable]] records for the union of the rationals and the
  irrationals; the general theorem is cited because it is the form in which this
  library states the union result, not because the strength is needed. Nothing
  about the cocountable topology depends on countable choice.

- **The Sierpinski point that is open is a genuine choice of labelling.** Both
  $\{\varnothing,\{b\},S\}$ and $\{\varnothing,\{a\},S\}$ are topologies, and they
  are carried to each other by the transposition of $a$ and $b$; this library
  fixes the first and always names the open point.
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

### `fs-every-normal-space-is-completely-regular`

````markdown
---
id: fs-every-normal-space-is-completely-regular
kind: false-statement
title: "FALSE: Every normal space is completely regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-urysohns-lemma-closes-the-separation-chain,
       def-normal-and-t4-spaces, def-completely-regular-and-tychonoff-spaces,
       thm-completely-regular-implies-regular, def-regular-and-t3-spaces,
       def-standard-topologies, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "normal does not imply completely regular"
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
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
pipeline_run: null
---

## Statement

**FALSE.** Every normal space is completely regular.

This is exactly why [[cor-urysohns-lemma-closes-the-separation-chain]] carries
the hypothesis $T_1$: normality alone, without $T_1$, gives no separation
property above itself.

## Facts & Assumptions

**Given:** Sierpinski space $S = \{a,b\}$, $a \ne b$, with topology $\mathcal{T}_{\mathrm{Sier}} = \{\varnothing, \{b\}, S\}$ ([[def-standard-topologies]]).

[L1] The closed sets of $S$ are the complements of $\mathcal{T}_{\mathrm{Sier}}$: $S \setminus \varnothing = S$, $S \setminus \{b\} = \{a\}$, $S \setminus S = \varnothing$; so the closed sets are $\{S, \{a\}, \varnothing\}$ ([[def-standard-topologies]], [[def-topological-space]]).

[L2] $S$ is normal when disjoint closed subsets of $S$ admit disjoint open supersets ([[def-normal-and-t4-spaces]]).

[L3] $S$ is regular when a point and a closed set not containing it admit disjoint open neighbourhoods ([[def-regular-and-t3-spaces]]).

[L4] Every completely regular space is regular ([[thm-completely-regular-implies-regular]], [[def-completely-regular-and-tychonoff-spaces]]).

## Refutation

**Proof technique:** constructive.

1.1 Let $S = \{a,b\}$ with $a \ne b$ and $\mathcal{T}_{\mathrm{Sier}} = \{\varnothing,\{b\},S\}$; by [L1] its closed sets are $\{S,\{a\},\varnothing\}$. [given, L1, construct]

2.1 $S$ is normal: let $A, B$ be disjoint closed subsets of $S$. The nonempty closed sets are $\{a\}$ and $S$, and $\{a\} \subseteq S$, so any two nonempty closed sets of $S$ meet at $a$; hence disjointness of $A,B$ forces $A=\varnothing$ or $B=\varnothing$. If $A=\varnothing$, take $U:=\varnothing \supseteq A$ and $V:=S \supseteq B$; if $B=\varnothing$, take $U:=S \supseteq A$ and $V:=\varnothing \supseteq B$. Either way $U,V$ are open and $U \cap V = \varnothing$. [step 1.1, L1, L2, algebra]

2.2 $S$ is not regular: $b \notin \{a\}$, since $a \ne b$, and $\{a\}$ is closed by step 1.1. Every open set containing $a$ equals $S$, since among $\varnothing, \{b\}, S$ only $S$ contains $a$; so any open $V \supseteq \{a\}$ has $V=S$, and any open $U \ni b$ then satisfies $U \cap V = U \cap S = U \ne \varnothing$, since $b \in U$. So no disjoint open $U \ni b$, $V \supseteq \{a\}$ exist, and $S$ is not regular. [step 1.1, L1, L3]

3.1 By [L4], complete regularity implies regularity; by step 2.2, $S$ is not regular, so $S$ is not completely regular. With step 2.1, $S$ is a normal space that is not completely regular, refuting the statement. [step 2.1, step 2.2, L4, discharge-construct] ∎

## Remarks

- **The failure is exactly the missing $T_1$.** Sierpinski space is $T_0$ (the open set $\{b\}$ distinguishes $a$ from $b$) but not $T_1$: the singleton $\{b\}$ is not among the closed sets $\{S,\{a\},\varnothing\}$ of step 1.1, so $b$ has no closed singleton. Consequently [[cor-urysohns-lemma-closes-the-separation-chain]] never claims anything about a normal space that is not $T_1$.

- **Every disjoint closed pair in $S$ is separated for a trivial reason.** Step 2.1 never invokes Urysohn's lemma or any function; normality here has nothing to do with continuous functions, because the only disjoint pairs available involve $\varnothing$.
````

### `thm-completely-regular-implies-regular`

````markdown
---
id: thm-completely-regular-implies-regular
kind: theorem
title: "Every completely regular space is regular, and every Tychonoff space is $T_3$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-completely-regular-and-tychonoff-spaces, def-regular-and-t3-spaces,
       def-t0-and-t1-spaces, def-continuous-map-top, thm-continuity-characterisations-top,
       def-interval, def-subspace-topology-top, def-metrizable-space,
       lem-real-line-is-a-metric-space, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "completely regular implies regular"
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
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). If $X$
is completely regular ([[def-completely-regular-and-tychonoff-spaces]]) then $X$
is regular ([[def-regular-and-t3-spaces]]). Consequently every Tychonoff space is
$T_3$, being completely regular and $T_1$ ([[def-t0-and-t1-spaces]]).

This page does not prove the converse and does not assert it: a regular space
that is not completely regular would need a construction this page does not
carry, so whether the implication reverses is left open here.

## Facts & Assumptions

**Given:** A completely regular space $(X,\mathcal{T})$, a closed set $C \subseteq X$ and a point $x_0 \in X \setminus C$.

[A1] Complete regularity supplies a continuous $f : X \to [0,1]$ with $f(x_0) = 1$ and $f(y) = 0$ for every $y \in C$ ([[def-completely-regular-and-tychonoff-spaces]]).

[A2] $X$ is regular when every such pair $(C, x_0)$ admits disjoint open $U \ni x_0$ and $V \supseteq C$ ([[def-regular-and-t3-spaces]]).

[L1] A map into the subspace $[0,1]$ of $\mathbb{R}$ is continuous exactly when it is continuous as a map into $\mathbb{R}$, and the open subsets of $[0,1]$ are the traces on $[0,1]$ of the open subsets of $\mathbb{R}$ ([[def-subspace-topology-top]], [[def-interval]]).

[L2] $f^{-1}[W]$ is open in $X$ for every open $W$ in the target ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]).

[L3] The sets $(1/2, \infty)$ and $(-\infty, 1/2)$ are open in the usual topology of $\mathbb{R}$, they are disjoint, and $0 < 1/2 < 1$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

## Proof

**Proof technique:** direct.

1.1 Fix $f$ as in [A1], and put $W_1 := (1/2,\infty) \cap [0,1]$ and $W_0 := (-\infty,1/2) \cap [0,1]$, which are open in $[0,1]$ and disjoint by [L1] and [L3]. [A1, L1, L3]

1.2 Put $U := f^{-1}[W_1]$ and $V := f^{-1}[W_0]$; both are open in $X$ by [L2]. [A1, L2]

2.1 $x_0 \in U$, since $f(x_0) = 1 > 1/2$ and $1 \in [0,1]$. [step 1.1, step 1.2, A1, L3]

2.2 $C \subseteq V$, since $f(y) = 0 < 1/2$ and $0 \in [0,1]$ for every $y \in C$. [step 1.1, step 1.2, A1, L3]

2.3 $U \cap V = \varnothing$: a point of both would satisfy $f(x) > 1/2$ and $f(x) < 1/2$, which is impossible by trichotomy of the order of $\mathbb{R}$. [step 1.1, step 1.2, L3]

3.1 By steps 1.2, 2.1, 2.2 and 2.3 the pair $(C, x_0)$ is separated by disjoint open sets, and since $C$ and $x_0$ were arbitrary, $X$ is regular by [A2]. [step 1.2, step 2.1, step 2.2, step 2.3, A2]

4.1 If in addition $X$ is $T_1$ then $X$ is regular and $T_1$, that is $T_3$; so every Tychonoff space is $T_3$. [step 3.1, A2] ∎

## Remarks

- **The threshold $1/2$ is arbitrary.** Any $t$ with $0 < t < 1$ works, and the same two-set construction applied to a function with values in $\mathbb{R}$ rather than $[0,1]$ gives the same conclusion; the normalisation of [[def-completely-regular-and-tychonoff-spaces]] is used only to know that $f(x_0)$ and the values on $C$ lie on opposite sides of the threshold.

- **What the theorem does not give.** It says nothing about separating two closed sets, and complete regularity does not imply normality. In the other direction, a normal $T_1$ space *is* completely regular, but that is Urysohn's lemma and is the one arrow of the classical chain this page cannot reach ([[rem-separation-axiom-conventions]]).
````

