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

- critical risk (8): 6 declared dependencies; 5 cited facts; existence, choice, uniqueness, or well-definedness; boundary-sensitive language

## Target item — `cor-compact-hausdorff-partitions-of-unity`

Normalized current SHA-256: `9735870860bfa5ef63468874fcee64030b5ccf716580a7406348d436fb2ab4c2`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-compact-hausdorff-partitions-of-unity
kind: corollary
title: "Under choice and dependent choice, every open cover of a compact Hausdorff space admits a finite subordinate partition of unity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-compact-spaces-are-paracompact, thm-subordinate-partitions-of-unity-exist, lem-locally-finite-sums-are-continuous, lem-locally-finite-unions-and-closures, def-compact-space, def-hausdorff-space]
justified_by: []
aliases: []
landmark: false
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
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
    - title: "General Topology notes (University of Göttingen)"
      url: "https://www.uni-math.gwdg.de/tammo/GT01.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Every open cover
of a compact Hausdorff space admits a finite partition of unity subordinate to
that cover.

## Facts & Assumptions

**Given:** Choice, dependent choice, a compact Hausdorff space $X$, and an open cover $\mathcal U$.

[L1] A compact space is paracompact ([[prop-compact-spaces-are-paracompact]]).

[L2] A paracompact Hausdorff space has a locally finite partition subordinate to each of its open covers ([[thm-subordinate-partitions-of-unity-exist]]).

[L3] A locally finite sum of continuous nonnegative functions is continuous ([[lem-locally-finite-sums-are-continuous]]).

[L4] Closure commutes with a locally finite union ([[lem-locally-finite-unions-and-closures]]).

[F1] Compactness gives a finite subcover ([[def-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 Compactness gives a finite subcover $\mathcal U_0=\{U_1,\ldots,U_n\}$ of $\mathcal U$. [F1, choose]

2.1 By [L1] and [L2], apply the partition theorem to the finite cover $\mathcal U_0$ and take a locally finite partition $\{\varphi_s\}_{s\in S}$ subordinate to it. [L1, L2, step 1.1, choose]

3.1 Assign each $\varphi_s$ to the first $U_j$ containing its support, and set $h_j$ equal to the corresponding sum. By [L3] the $h_j$ are continuous; by [L4] their supports are contained in $U_j$; and $h_1+\cdots+h_n=1$. [L3, L4, step 2.1, construct]

4.1 Discarding the zero $h_j$ leaves a finite subordinate partition of unity. [step 3.1] ∎
````

## Wave 8 provenance row for the target

```json
{
  "id": "cor-compact-hausdorff-partitions-of-unity",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.csun.edu/~ac53971/research/topology_262.pdf",
    "https://www.uni-math.gwdg.de/tammo/GT01.pdf"
  ],
  "rationale": "The sources give finite-cover partitions on normal spaces and the relabel-and-sum construction that groups a locally finite partition over a finite target cover. Compact Hausdorff implies normal in the standard setting; the item makes Choice/DC explicit and packages the result as a compact-Hausdorff corollary.",
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
      "source": "prop-compact-spaces-are-paracompact",
      "source_section": "Statement",
      "quote": "Every compact topological space is paracompact.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-subordinate-partitions-of-unity-exist",
      "source_section": "Statement",
      "quote": "Assume the Axiom of Choice and the Axiom of Dependent Choice. Every open cover\nof a paracompact Hausdorff space admits a locally finite partition of unity\nsubordinate to it.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-locally-finite-sums-are-continuous",
      "source_section": "Statement",
      "quote": "Let $\\{f_s:X\\to[0,\\infty)\\}_{s\\in S}$ be continuous and suppose that\n$\\{\\operatorname{coz}(f_s)\\}_{s\\in S}$ is locally finite. Then\n$f(x):=\\sum_{s\\in S}f_s(x)$ is a well-defined continuous map $X\\to[0,\\infty)$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-locally-finite-unions-and-closures",
      "source_section": "Statement",
      "quote": "Let $\\{A_i\\}_{i\\in I}$ be a locally finite family of subsets of a topological\nspace $X$. Then $\\{\\overline{A_i}\\}_{i\\in I}$ is locally finite and\n$$\\overline{\\bigcup_{i\\in I}A_i}=\\bigcup_{i\\in I}\\overline{A_i}.$$\nConsequently, a locally finite union of closed subsets of $X$ is closed.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-compact-space",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- An **open cover** of $(X,\\mathcal{T})$ is a family\n  $\\mathcal{U} \\subseteq \\mathcal{T}$ of open sets with $X = \\bigcup \\mathcal{U}$,\n  where $\\bigcup \\mathcal{U} = \\{\\, x \\in X : x \\in U \\text{ for some } U \\in \\mathcal{U} \\,\\}$.\n- A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$\n  that is itself an open cover.\n- A family $\\mathcal{V}$ of sets is **finite** when $\\mathcal{V} = \\varnothing$ or\n  there are $n \\in \\mathbb{N}$ and sets $V_0, \\dots, V_n$ with\n  $\\mathcal{V} = \\{V_0, \\dots, V_n\\}$; repetitions in the list are allowed and\n  harmless.\n- $(X,\\mathcal{T})$ is **compact** when every open cover of it has a finite\n  subcover: for every open cover $\\mathcal{U}$, either $X = \\varnothing$ and the\n  empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and\n  $U_0, \\dots, U_n \\in \\mathcal{U}$ with\n  $$X = U_0 \\cup \\dots \\cup U_n .$$\n- A subset $A \\subseteq X$ is a **compact subset** of $X$ when the subspace\n  $(A, \\mathcal{T}_A)$ is a compact topological space, $\\mathcal{T}_A$ being the\n  subspace topology ([[def-subspace-topology-top]]).\n\n**Compactness of a subset is defined intrinsically, and only intrinsically.**\nThe last clause speaks about the subspace $(A, \\mathcal{T}_A)$ and its own open\nsets, not about families of open subsets of the ambient $X$. The two readings do\nagree, but that is a theorem and not a convention: it is\n[[lem-compactness-of-a-subspace-is-ambient]], and no item of this library may use\nthe ambient reading without citing it. Taking the intrinsic reading makes\ncompactness a property of the topological space $(A, \\mathcal{T}_A)$ alone.\nHence it is preserved when $A$ is embedded homeomorphically as a subspace, or\nwhen another ambient space induces the same topology on $A$; it need not be\npreserved if the induced topology changes. This is exactly the convention already fixed for\nmetric spaces by [[def-metric-compactness]], and the agreement of that\ndefinition with this one is [[thm-compactness-agrees-with-metric-compactness]].\n\n**The empty space is compact**, since the empty subfamily of any family covers\nit; this is the reason the clause above is written with the two cases. Every\nspace listed as $\\{x_0, \\dots, x_n\\}$ is compact too: given a cover, each $x_i$\nlies in some member, and finitely many members named in this way already cover.\nSo every finite space is compact, whatever its topology, and in particular the\ndiscrete topology on a finite set is compact while the discrete topology on an\ninfinite set is not ([[def-standard-topologies]]).\n\n**The finiteness convention.** \"Finite\" above is the listing form. It agrees with\nthe definition of finiteness by equinumerosity with a natural number\n([[def-countable]]), in both directions, and the agreement is the one already\ndischarged in [[def-metric-compactness]]: a nonempty set equinumerous with\n$m \\ge 1$ is listable, and a set listed as $\\{a_0, \\dots, a_n\\}$ injects into\n$\\sigma(n)$ by sending $x$ to the least $i \\le n$ with $a_i = x$. Neither\ndirection uses a choice principle; the second selects nothing, taking a least\nindex instead.\n\n**Quasicompact is not used here.** Some authors, following Bourbaki, reserve\n*compact* for a space that is both compact in the above sense and Hausdorff, and\ncall the open-cover condition alone *quasicompact*. This library follows the more\nwidely adopted convention: **compact** means the open-cover condition and nothing\nmore, and a Hausdorff hypothesis is always written out. The fork is recorded in\n[[rem-compactness-conventions-and-choice-ledger]].",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Compactness gives a finite subcover $\\mathcal U_0=\\{U_1,\\ldots,U_n\\}$ of $\\mathcal U$. [F1, choose]",
      "step": "1.1",
      "inputs": [
        "F1",
        "choose"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "By [L1] and [L2], apply the partition theorem to the finite cover $\\mathcal U_0$ and take a locally finite partition $\\{\\varphi_s\\}_{s\\in S}$ subordinate to it. [L1, L2, step 1.1, choose]",
      "step": "2.1",
      "inputs": [
        "L1",
        "L2",
        "1.1",
        "choose"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Assign each $\\varphi_s$ to the first $U_j$ containing its support, and set $h_j$ equal to the corresponding sum. By [L3] the $h_j$ are continuous; by [L4] their supports are contained in $U_j$; and $h_1+\\cdots+h_n=1$. [L3, L4, step 2.1, construct]",
      "step": "3.1",
      "inputs": [
        "L3",
        "L4",
        "2.1",
        "construct"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Discarding the zero $h_j$ leaves a finite subordinate partition of unity. [step 3.1]",
      "step": "4.1",
      "inputs": [
        "3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and steps 1.1--4.1 include X empty, n=0, and the empty finite partition."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.1 and 4.1 include a zero-member cover only for X empty and discard zero grouped functions."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.1--4.1 specialize to n=1."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Steps 3.1--4.1 allow empty assigned groups, repeated U_j, and identically zero h_j."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 2.1--4.1 retain partition values at 0 and 1."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 uses compactness; step 2.1 uses the partition theorem; step 3.1 takes a first member of a nonempty finite containing set for each nonzero support."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is one directional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is one directional."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cor-compact-hausdorff-partitions-of-unity",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "prop-compact-spaces-are-paracompact",
    "declared_target": "prop-compact-spaces-are-paracompact",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-compact-hausdorff-partitions-of-unity",
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
    "source": "cor-compact-hausdorff-partitions-of-unity",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-locally-finite-sums-are-continuous",
    "declared_target": "lem-locally-finite-sums-are-continuous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-compact-hausdorff-partitions-of-unity",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-locally-finite-unions-and-closures",
    "declared_target": "lem-locally-finite-unions-and-closures",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-compact-hausdorff-partitions-of-unity",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-compact-space",
    "declared_target": "def-compact-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-compact-hausdorff-partitions-of-unity",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-hausdorff-space",
    "declared_target": "def-hausdorff-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
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

## Full text of every cited or declared item (6)

### `def-compact-space`

````markdown
---
id: def-compact-space
kind: definition
title: "Open cover, subcover, and compact topological space; a compact subset is a subspace that is compact in its own right"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-subspace-topology-top, def-standard-topologies, def-countable, def-metric-compactness]
justified_by: []
aliases: [def-compact-topological-space, def-open-cover-top]
landmark: true
short: "open cover, compact space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Cover (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cover_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Section 5.12: Quasi-compact spaces and maps"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- An **open cover** of $(X,\mathcal{T})$ is a family
  $\mathcal{U} \subseteq \mathcal{T}$ of open sets with $X = \bigcup \mathcal{U}$,
  where $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq \mathcal{U}$
  that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \varnothing$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,\mathcal{T})$ is **compact** when every open cover of it has a finite
  subcover: for every open cover $\mathcal{U}$, either $X = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the subspace
  $(A, \mathcal{T}_A)$ is a compact topological space, $\mathcal{T}_A$ being the
  subspace topology ([[def-subspace-topology-top]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A, \mathcal{T}_A)$ and its own open
sets, not about families of open subsets of the ambient $X$. The two readings do
agree, but that is a theorem and not a convention: it is
[[lem-compactness-of-a-subspace-is-ambient]], and no item of this library may use
the ambient reading without citing it. Taking the intrinsic reading makes
compactness a property of the topological space $(A, \mathcal{T}_A)$ alone.
Hence it is preserved when $A$ is embedded homeomorphically as a subspace, or
when another ambient space induces the same topology on $A$; it need not be
preserved if the induced topology changes. This is exactly the convention already fixed for
metric spaces by [[def-metric-compactness]], and the agreement of that
definition with this one is [[thm-compactness-agrees-with-metric-compactness]].

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. Every
space listed as $\{x_0, \dots, x_n\}$ is compact too: given a cover, each $x_i$
lies in some member, and finitely many members named in this way already cover.
So every finite space is compact, whatever its topology, and in particular the
discrete topology on a finite set is compact while the discrete topology on an
infinite set is not ([[def-standard-topologies]]).

**The finiteness convention.** "Finite" above is the listing form. It agrees with
the definition of finiteness by equinumerosity with a natural number
([[def-countable]]), in both directions, and the agreement is the one already
discharged in [[def-metric-compactness]]: a nonempty set equinumerous with
$m \ge 1$ is listable, and a set listed as $\{a_0, \dots, a_n\}$ injects into
$\sigma(n)$ by sending $x$ to the least $i \le n$ with $a_i = x$. Neither
direction uses a choice principle; the second selects nothing, taking a least
index instead.

**Quasicompact is not used here.** Some authors, following Bourbaki, reserve
*compact* for a space that is both compact in the above sense and Hausdorff, and
call the open-cover condition alone *quasicompact*. This library follows the more
widely adopted convention: **compact** means the open-cover condition and nothing
more, and a Hausdorff hypothesis is always written out. The fork is recorded in
[[rem-compactness-conventions-and-choice-ledger]].

## Remarks

**Why open covers rather than covers by arbitrary sets.** Nothing in the
definition would break if $\mathcal{U}$ were allowed to consist of arbitrary
subsets of $X$, but the resulting notion would be uninteresting: every space is
covered by its singletons, and only a finite space would survive. Openness of the
members is what makes the condition a genuine restriction, and it is what
[[lem-compactness-of-a-subspace-is-ambient]] has to keep track of when the
ambient space changes.

**A warning about the word "cover".** A family may cover $A \subseteq X$ without
being a family of subsets of $A$: the members are open subsets of $X$ and their
union merely contains $A$. That is the ambient reading, and it is a different
statement from "$\mathcal{U}$ is an open cover of the space
$(A, \mathcal{T}_A)$", whose members are open subsets of $A$. Which of the two is
meant is written out everywhere on this page.
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

### `lem-locally-finite-sums-are-continuous`

````markdown
---
id: lem-locally-finite-sums-are-continuous
kind: lemma
title: "A locally finite family of continuous nonnegative functions has a continuous pointwise sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-partition-of-unity-subordinate-to-a-cover, lem-algebra-of-continuous-real-maps-on-a-space]
justified_by: []
aliases: []
landmark: false
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
    - title: "S. Semmes, Topology notes, Sections 5.13–5.14 (Rice University)"
      url: "https://math.rice.edu/~semmes/math443b.pdf"
pipeline_run: null
---

## Statement

Let $\{f_s:X\to[0,\infty)\}_{s\in S}$ be continuous and suppose that
$\{\operatorname{coz}(f_s)\}_{s\in S}$ is locally finite. Then
$f(x):=\sum_{s\in S}f_s(x)$ is a well-defined continuous map $X\to[0,\infty)$.

## Facts & Assumptions

**Given:** A locally finite family of cozero sets of continuous nonnegative functions on $X$.

[F1] At every point, a locally finite family has a neighbourhood meeting only finitely many members ([[def-partition-of-unity-subordinate-to-a-cover]]).

[L1] A finite sum of continuous real-valued maps is continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ and a neighbourhood $N$ meeting only $\operatorname{coz}(f_{s_1}),\ldots,\operatorname{coz}(f_{s_n})$; every $f_s$ with $s\notin\{s_1,\ldots,s_n\}$ vanishes on $N$. [F1]

2.1 Thus at every point of $N$ the displayed pointwise sum equals the finite sum $f_{s_1}+\cdots+f_{s_n}$, so it is well defined and agrees on $N$ with a continuous function. [step 1.1, L1]

3.1 Since every point has such a neighbourhood $N$, the pointwise sum is continuous on $X$ and is nonnegative. [step 2.1] ∎
````

### `lem-locally-finite-unions-and-closures`

````markdown
---
id: lem-locally-finite-unions-and-closures
kind: lemma
title: "Locally finite families remain locally finite after taking closures, closure commutes with their union, and a locally finite union of closed sets is closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cover-refinement-and-local-finiteness, thm-closure-characterisation-top, def-topological-space]
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
    - title: "S. Semmes, Topology notes, Sections 5.13–5.14 (Rice University)"
      url: "https://math.rice.edu/~semmes/math443b.pdf"
pipeline_run: null
---

## Statement

Let $\{A_i\}_{i\in I}$ be a locally finite family of subsets of a topological
space $X$. Then $\{\overline{A_i}\}_{i\in I}$ is locally finite and
$$\overline{\bigcup_{i\in I}A_i}=\bigcup_{i\in I}\overline{A_i}.$$
Consequently, a locally finite union of closed subsets of $X$ is closed.

## Facts & Assumptions

**Given:** A locally finite family $\{A_i\}_{i\in I}$ in a topological space $X$.

[F1] Local finiteness says that each point has a neighbourhood meeting only finitely many $A_i$ ([[def-cover-refinement-and-local-finiteness]]).

[L1] A point belongs to $\overline A$ exactly when every neighbourhood of it meets $A$, and $\overline A$ is the smallest closed superset of $A$ ([[thm-closure-characterisation-top]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ and a neighbourhood $N$ of $x$ meeting only $A_{i_1},\ldots,A_{i_n}$. Choose an open neighbourhood $O$ of $x$ with $O\subseteq N$. If $O\cap\overline{A_j}\ne\varnothing$, choose $y\in O\cap\overline{A_j}$; the open neighbourhood $O$ of $y$ then meets $A_j$, so $N$ meets $A_j$ and $j\in\{i_1,\ldots,i_n\}$. [F1, L1]

1.2 The inclusion $\bigcup_i\overline{A_i}\subseteq\overline{\bigcup_iA_i}$ holds because each $\overline{A_i}$ is contained in every closed set containing $A_i$, in particular in $\overline{\bigcup_iA_i}$. [L1]

2.1 Thus $O$ meets only $\overline{A_{i_1}},\ldots,\overline{A_{i_n}}$, so the closed family is locally finite. [step 1.1, F1]

2.2 Let $x\in\overline{\bigcup_iA_i}$ and take $N$ as in step 1.1; if $x\notin\bigcup_i\overline{A_i}$, then for each $i_k$ an open neighbourhood of $x$ misses $A_{i_k}$, and its finite intersection with an open neighbourhood inside $N$ misses every $A_i$, contradicting the closure criterion. [step 1.1, L1]

3.1 Hence $\overline{\bigcup_iA_i}=\bigcup_i\overline{A_i}$ by steps 1.2 and 2.2; if every $A_i$ is closed, the right-hand side is $\bigcup_iA_i$, so that union is closed. [step 1.2, step 2.2, L1] ∎
````

### `prop-compact-spaces-are-paracompact`

````markdown
---
id: prop-compact-spaces-are-paracompact
kind: proposition
title: "Every compact space is paracompact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-paracompact-space, def-compact-space]
justified_by: []
aliases: []
landmark: false
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
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Every compact topological space is paracompact.

## Facts & Assumptions

**Given:** A compact topological space $X$ and an open cover $\mathcal U$ of $X$.

[F1] Compactness means that $\mathcal U$ has a finite subcover ([[def-compact-space]]).

[F2] Paracompactness asks for a locally finite open refinement of each open cover ([[def-paracompact-space]]).

## Proof

**Proof technique:** direct.

1.1 By compactness, fix a finite subfamily $\mathcal V\subseteq\mathcal U$ covering $X$. [F1, choose]

2.1 The family $\mathcal V$ is open, covers $X$, refines $\mathcal U$, and is locally finite because every point has the neighbourhood $X$, which meets only members of the finite family $\mathcal V$. [step 1.1]

3.1 Thus $\mathcal V$ is the refinement required by [F2], and $X$ is paracompact. [F2, step 2.1] ∎
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

