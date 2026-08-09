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

- critical risk (9): 4 declared dependencies; 4 cited facts; biconditional / both-direction claim; analytic limiting/completeness language

## Target item — `lem-compact-uniform-spaces-are-complete`

Normalized current SHA-256: `8b62ea37c5baa50af9b9b80397b4a3eee0f9c2a35aa7ff3dbeddb86aaf9fa0e0`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-compact-uniform-spaces-are-complete
kind: lemma
title: "Every compact uniform space is complete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-uniform-space, lem-cauchy-filter-with-a-cluster-point-converges, def-compact-space, thm-compact-iff-fip]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}, {title: "Encyclopedia of Mathematics, Complete uniform space", url: "https://encyclopediaofmath.org/wiki/Complete_uniform_space"}]
pipeline_run: null
---

## Statement

Every compact uniform space is complete.

## Facts & Assumptions

**Given:** A compact uniform space $X$ and a Cauchy filter $\mathcal F$ on it.

[L1] Compactness is equivalent to the finite-intersection property for closed families ([[thm-compact-iff-fip]], [[def-compact-space]]).

[L2] A Cauchy filter with a cluster point converges to that point ([[lem-cauchy-filter-with-a-cluster-point-converges]]).

[L3] Completeness means convergence of every Cauchy filter ([[def-complete-uniform-space]]).

## Proof

**Proof technique:** direct.

1.1 The closures of the members of $\mathcal F$ have the finite-intersection property, because finite intersections of filter members are nonempty and lie in the corresponding intersections of closures. [L1]

2.1 Compactness gives $x\in\bigcap_{A\in\mathcal F}\overline A$; every neighbourhood of $x$ therefore meets every $A\in\mathcal F$, so $x$ is a cluster point of $\mathcal F$. [step 1.1, L1]

3.1 By [L2] the filter converges, and since it was arbitrary $X$ is complete by [L3]. [step 2.1, L2, L3] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-compact-uniform-spaces-are-complete",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "established-knowledge",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Uniform_space",
    "https://encyclopediaofmath.org/wiki/Complete_uniform_space"
  ],
  "rationale": "ESCALATED TO ALPHA. Compact uniform spaces are standardly complete, and the item gives the usual cluster-point proof, but the located Encyclopedia discussion has already imposed separatedness while this item correctly allows nonseparated uniformities. The broader statement is established but not an exact source match. ALPHA CONCURRENCE: Compact uniform spaces are classically complete via the cluster-point argument for Cauchy filters. Separation is needed for uniqueness, not for existence of a limit, so the nonseparated local convention is a standard broadening rather than a novel result.",
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
      "source": "thm-compact-iff-fip",
      "source_section": "Statement",
      "quote": "1. $(X, \\mathcal{T})$ is compact ([[def-compact-space]]) **if and only if** every\n   family $\\mathcal{A}$ of closed subsets of $X$ with the finite intersection\n   property ([[def-finite-intersection-property]]) satisfies\n   $\\bigcap \\mathcal{A} \\ne \\varnothing$.\n2. Equivalently: $(X, \\mathcal{T})$ is compact if and only if every family of\n   closed subsets of $X$ that is contained in some filter on $X$\n   ([[def-filter]]) has nonempty intersection, a family of subsets of $X$ lying\n   in a filter exactly when it has the finite intersection property\n   ([[lem-fip-generates-filter]]).",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-compact-space",
      "source_section": "Definition",
      "quote": "**Compactness of a subset is defined intrinsically, and only intrinsically.**\nThe last clause speaks about the subspace $(A, \\mathcal{T}_A)$ and its own open\nsets, not about families of open subsets of the ambient $X$. The two readings do\nagree, but that is a theorem and not a convention: it is\n[[lem-compactness-of-a-subspace-is-ambient]], and no item of this library may use\nthe ambient reading without citing it. Taking the intrinsic reading makes\ncompactness a property of the topological space $(A, \\mathcal{T}_A)$ alone.\nHence it is preserved when $A$ is embedded homeomorphically as a subspace, or\nwhen another ambient space induces the same topology on $A$; it need not be\npreserved if the induced topology changes. This is exactly the convention already fixed for\nmetric spaces by [[def-metric-compactness]], and the agreement of that\ndefinition with this one is [[thm-compactness-agrees-with-metric-compactness]].",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-cauchy-filter-with-a-cluster-point-converges",
      "source_section": "Statement",
      "quote": "A Cauchy filter on a uniform space with a cluster point $x$ converges to $x$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-complete-uniform-space",
      "source_section": "Definition",
      "quote": "A uniform space is **complete** when every Cauchy filter ([[def-cauchy-filter-in-a-uniform-space]]) converges to at least one point of its induced topology ([[def-filter-convergence-and-cluster-point]]). No separatedness is built into this definition.",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The closures of the members of $\\mathcal F$ have the finite-intersection property, because finite intersections of filter members are nonempty and lie in the corresponding intersections of closures. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Compactness gives $x\\in\\bigcap_{A\\in\\mathcal F}\\overline A$; every neighbourhood of $x$ therefore meets every $A\\in\\mathcal F$, so $x$ is a cluster point of $\\mathcal F$. [step 1.1, L1]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "By [L2] the filter converges, and since it was arbitrary $X$ is complete by [L3]. [step 2.1, L2, L3] ∎",
      "step": "3.1",
      "inputs": [
        "L2",
        "L3",
        "2.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the explicit empty-set or empty-family branch was checked against the displayed definitions"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "No numeric, cardinal, metric, or indexed parameter has a separate zero case."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the singleton, identity, finite-one, or unit-scale case was inspected"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The statement has no separate coincident-point, constant-map, or collapsed-parameter branch."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint, one-sided limit, or strict-versus-weak boundary enters the claim."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.1: every selection was checked for a stated nonempty source, a canonical definition, or the expressly assumed choice principle"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no reverse iff direction."
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
    "source": "lem-compact-uniform-spaces-are-complete",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-complete-uniform-space",
    "declared_target": "def-complete-uniform-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-compact-uniform-spaces-are-complete",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-cauchy-filter-with-a-cluster-point-converges",
    "declared_target": "lem-cauchy-filter-with-a-cluster-point-converges",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-compact-uniform-spaces-are-complete",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
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
    "source": "lem-compact-uniform-spaces-are-complete",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-compact-iff-fip",
    "declared_target": "thm-compact-iff-fip",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
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

## Full text of every cited or declared item (4)

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

### `def-complete-uniform-space`

````markdown
---
id: def-complete-uniform-space
kind: definition
title: "Complete uniform space: every Cauchy filter converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cauchy-filter-in-a-uniform-space, def-filter-convergence-and-cluster-point]
aliases: []
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Complete uniform space", url: "https://encyclopediaofmath.org/wiki/Complete_uniform_space"}]
pipeline_run: null
---

## Definition

A uniform space is **complete** when every Cauchy filter ([[def-cauchy-filter-in-a-uniform-space]]) converges to at least one point of its induced topology ([[def-filter-convergence-and-cluster-point]]). No separatedness is built into this definition.
````

### `lem-cauchy-filter-with-a-cluster-point-converges`

````markdown
---
id: lem-cauchy-filter-with-a-cluster-point-converges
kind: lemma
title: "A Cauchy filter with a cluster point converges to that point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cauchy-filter-in-a-uniform-space, def-filter-convergence-and-cluster-point, lem-symmetric-entourages-form-a-base, thm-uniformity-induces-a-topology]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

A Cauchy filter on a uniform space with a cluster point $x$ converges to $x$.

## Facts & Assumptions

**Given:** A Cauchy filter $\mathcal F$ and one of its cluster points $x$.

[L1] A cluster point meets every filter member in every neighbourhood, while convergence means containment of every neighbourhood ([[def-filter-convergence-and-cluster-point]]).

[L2] Cauchy filters have small members, and symmetric entourages have symmetric square roots ([[def-cauchy-filter-in-a-uniform-space]], [[lem-symmetric-entourages-form-a-base]]).

[L3] For the topology induced by a uniformity, every entourage ball $D[x]$ is a neighbourhood of $x$ ([[thm-uniformity-induces-a-topology]]).

## Proof

**Proof technique:** direct.

1.1 Let $E$ be an entourage and choose symmetric $D$ with $D\circ D\subseteq E$; choose $A\in\mathcal F$ with $A\times A\subseteq D$. [L2, choose]

1.2 The ball $D[x]$ is a neighbourhood of $x$, so it meets $A$ because $x$ is a cluster point; fix $a\in A\cap D[x]$. [L1, L3, choose]

2.1 For every $b\in A$, symmetry gives $(x,a)\in D$ and smallness gives $(a,b)\in D$, hence $(x,b)\in E$; so $A\subseteq E[x]$. [step 1.1, step 1.2]

3.1 Every entourage ball about $x$ belongs to $\mathcal F$ by upward closure, and such balls form a neighbourhood base at $x$, so $\mathcal F$ converges to $x$. [step 2.1, L1, L3] ∎
````

### `thm-compact-iff-fip`

````markdown
---
id: thm-compact-iff-fip
kind: theorem
title: "A space is compact exactly when every family of closed subsets with the finite intersection property has nonempty intersection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-compact-space, def-topological-space, def-finite-intersection-property, def-filter, lem-fip-generates-filter]
justified_by: []
aliases: [thm-compactness-fip-characterisation]
landmark: true
short: "compact iff the FIP condition"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "claude-sonnet-5 + deepseek-v4-pro"
    verdict: pass
    date: 2026-08-05
    scope: published-audit-targeted
    context_sha256: 57fe31f2e7f11f5d665c37210d393d77626e81f5a27ef8abaeaaae585660b180
    item_sha256: 4201165cbda0f675c940e878e76b3a90247f9408ade85442b8c945e75a305911
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Finite intersection property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_intersection_property"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 0059"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). For a
family $\mathcal{A}$ of subsets of $X$ write

$$\bigcap \mathcal{A} \;:=\; \{\, x \in X : x \in A \text{ for every } A \in \mathcal{A} \,\},$$

so that $\bigcap \varnothing = X$, matching the convention for the empty finite
intersection in [[def-finite-intersection-property]]. Then:

1. $(X, \mathcal{T})$ is compact ([[def-compact-space]]) **if and only if** every
   family $\mathcal{A}$ of closed subsets of $X$ with the finite intersection
   property ([[def-finite-intersection-property]]) satisfies
   $\bigcap \mathcal{A} \ne \varnothing$.
2. Equivalently: $(X, \mathcal{T})$ is compact if and only if every family of
   closed subsets of $X$ that is contained in some filter on $X$
   ([[def-filter]]) has nonempty intersection, a family of subsets of $X$ lying
   in a filter exactly when it has the finite intersection property
   ([[lem-fip-generates-filter]]).

No choice principle is used in either direction: complementation is a canonical
bijection, so no member of a family ever has to be selected.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$.

[A1] For a family $\mathcal{A}$ of subsets of $X$ write $\mathcal{A}^{c} := \{\, X \setminus A : A \in \mathcal{A} \,\}$.

[L1] A subset $F \subseteq X$ is closed exactly when $X \setminus F \in \mathcal{T}$, and $X \setminus (X \setminus F) = F$ for every $F \subseteq X$ ([[def-topological-space]]).

[L2] $(X, \mathcal{T})$ is compact exactly when every family $\mathcal{U} \subseteq \mathcal{T}$ with $\bigcup \mathcal{U} = X$ has a finite subfamily with union $X$, a family being finite when it is empty or listable as $\{V_0, \dots, V_n\}$ for some $n \in \mathbb{N}$ ([[def-compact-space]]).

[L3] $\mathcal{A}$ has the finite intersection property when $\bigcap_{i \in n} s(i) \ne \varnothing$ for every $n \in \mathbb{N}$ and every finite list $s : n \to \mathcal{A}$, the intersection over $n = 0$ being $X$ ([[def-finite-intersection-property]]).

[L4] A family of subsets of $X$ is contained in some filter on $X$ if and only if it has the finite intersection property ([[lem-fip-generates-filter]], [[def-filter]]).

## Proof

**Proof technique:** direct.

1.1 The operation $\mathcal{A} \mapsto \mathcal{A}^{c}$ of [A1] carries families of closed subsets of $X$ to families of open subsets of $X$ and back, and satisfies $(\mathcal{A}^{c})^{c} = \mathcal{A}$, so it is a bijection between the two collections. [A1, L1]

1.2 For every family $\mathcal{A}$ of subsets of $X$ one has $X \setminus \bigcap \mathcal{A} = \bigcup \mathcal{A}^{c}$, since a point of $X$ fails to lie in every member of $\mathcal{A}$ exactly when it lies in the complement of some member; with $\bigcap \varnothing = X$ and $\bigcup \varnothing = \varnothing$ the identity also holds at $\mathcal{A} = \varnothing$. Hence $\bigcap \mathcal{A} = \varnothing$ if and only if $\bigcup \mathcal{A}^{c} = X$. [A1, L1, L3]

2.1 The same identity applied to finitely many members: for $n \in \mathbb{N}$ and a finite list $s : n \to \mathcal{A}$ one has $\bigcap_{i \in n} s(i) = \varnothing$ exactly when $\{\, X \setminus s(i) : i \in n \,\}$, a finite subfamily of $\mathcal{A}^{c}$, has union $X$; and every finite subfamily of $\mathcal{A}^{c}$ arises from such a list. So $\mathcal{A}$ has the finite intersection property if and only if no finite subfamily of $\mathcal{A}^{c}$ has union $X$. [L2, L3, step 1.1, step 1.2]

3.1 Assume $(X, \mathcal{T})$ is compact and let $\mathcal{A}$ be a family of closed subsets of $X$ with $\bigcap \mathcal{A} = \varnothing$; then $\mathcal{A}^{c}$ is a family of open sets by step 1.1 and has union $X$ by step 1.2, so it is an open cover, compactness supplies a finite subfamily of it with union $X$, and by step 2.1 the family $\mathcal{A}$ fails the finite intersection property. Contraposing over $\mathcal{A}$: every family of closed subsets of $X$ with the finite intersection property has nonempty intersection. [L2, step 1.1, step 1.2, step 2.1]

3.2 Conversely assume every family of closed subsets of $X$ with the finite intersection property has nonempty intersection, and let $\mathcal{U}$ be an open cover of $X$; then $\mathcal{A} := \mathcal{U}^{c}$ is a family of closed subsets of $X$ with $\mathcal{A}^{c} = \mathcal{U}$ by step 1.1 and $\bigcap \mathcal{A} = \varnothing$ by step 1.2, so $\mathcal{A}$ fails the finite intersection property, and by step 2.1 some finite subfamily of $\mathcal{U}$ has union $X$. So every open cover of $X$ has a finite subcover and $(X, \mathcal{T})$ is compact. [L2, step 1.1, step 1.2, step 2.1]

4.1 Claim 1 is proved by steps 3.1 and 3.2, and claim 2 follows from it by [L4], which replaces the phrase "has the finite intersection property" by "is contained in some filter on $X$" without changing what is being quantified over. [L4, step 3.1, step 3.2] ∎

## Remarks

**What the condition says, and why it is the useful form.** Compactness in the open-cover form is a statement about families that already cover; the closed-set form is a statement about families that already have all their finite intersections nonempty. In practice the second is easier to apply, because a nested family of nonempty closed sets has the finite intersection property for free, and the theorem then produces a point lying in all of them at once. That is how it is used below in [[thm-baire-category-locally-compact-hausdorff]], whose step 7.1 turns a decreasing sequence of nonempty closed sets into a point common to all of them. [[thm-quasicomponents-equal-components-in-a-compact-hausdorff-space]] uses the theorem in the opposite direction: from a family of closed sets whose intersection is empty it extracts a finite subfamily whose intersection is already empty.

**The finite intersection property is not a topological notion.** [[def-finite-intersection-property]] is a condition on an arbitrary family of subsets of a set, and [[lem-fip-generates-filter]] shows it is exactly the condition for the family to sit inside a filter. The topology enters this theorem only through the word "closed"; the theorem is that compactness of the topology is what makes that combinatorial condition detect a common point.

**The metric special case is [[thm-compact-iff-finite-intersection-property]]**, stated there for a metric space and its closed sets. It is not used above, and it is not needed: by [[thm-compactness-agrees-with-metric-compactness]] the metric statement is the present one applied to a metric topology.
````

