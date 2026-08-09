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

- high risk (7): 6 declared dependencies; 5 cited facts; 7 numbered proof steps; boundary-sensitive language

## Target item — `lem-finite-star-refinement-for-compact-hausdorff-spaces`

Normalized current SHA-256: `4cdf1e43668e8400055a89c2e75b41129cabe89d3e6939fb72c48d7f5ea32d9c`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-finite-star-refinement-for-compact-hausdorff-spaces
kind: lemma
title: "Every open cover of a compact Hausdorff space has a finite open star-refinement"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-a-compact-hausdorff-space-is-regular-and-normal, def-compact-space, def-hausdorff-space, def-finite-cardinality, lem-finite-choice, def-interior-closure-boundary-top]
aliases: []
landmark: false
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Statement

Every open cover of a compact Hausdorff space has a finite open star-refinement.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$ and an open cover $\mathcal U$.

[L1] A compact Hausdorff space is regular and normal ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]).

[L2] Compactness supplies finite subcovers ([[def-compact-space]]).

[L3] A finite family is indexed by a natural number ([[def-finite-cardinality]]).

[L4] A finite family of nonempty sets admits simultaneous choices ([[lem-finite-choice]]), and closure is the least closed superset ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** constructive.

1.1 Let $\mathcal V$ be the family of all open sets $V$ such that $\overline V\subseteq U$ for some $U\in\mathcal U$. This family covers $X$. Indeed, for $x\in U\in\mathcal U$, normality separates the closed sets $\{x\}$ and $X\setminus U$ by disjoint open sets; the open set containing $x$ has closure contained in $U$. This definition uses no choices indexed by $X$. [L1, L4, construct]

1.2 We record a finite shrinking construction. Given a finite open cover $A_0,\ldots,A_{m-1}$, recursively put $$ F_i=X\setminus\left(\bigcup_{j<i}B_j\cup\bigcup_{j>i}A_j\right). $$ The earlier covering clauses imply $F_i\subseteq A_i$. Normality separates $F_i$ from $X\setminus A_i$, giving an open $B_i$ with $F_i\subseteq B_i\subseteq\overline{B_i}\subseteq A_i$. At the last stage the $B_i$ cover $X$. Thus every finite open cover has an open shrinking whose closures remain in the original members. [L1, L3, L4, construct]

2.1 Compactness gives a finite subcover $V_0,\ldots,V_{n-1}$ of $\mathcal V$. Finite choice supplies $U_i\in\mathcal U$ with $\overline{V_i}\subseteq U_i$ for each $i<n$. [step 1.1, L2, L4]

2.2 From a finite cover $A_i$ and an open shrinking $B_i$ as in step 1.2, form, for each nonempty $S\subseteq\{0,\ldots,m-1\}$, $$ W_S=\left(\bigcap_{i\in S}A_i\right) \setminus\left(\bigcup_{j\notin S}\overline{B_j}\right), $$ discarding empty members. These finitely many sets are open and cover $X$: at $x$, take $S=\{i:x\in A_i\}$. Moreover, choose $k$ with $x\in B_k$. Every $W_S$ containing $x$ has $k\in S$, so $W_S\subseteq A_k$. Hence the point-star $\operatorname{St}(x,\mathcal W)$ lies in $A_k$. Call this a barycentric refinement of $(A_i)$. [step 1.2, L3, construct]

3.1 Apply step 2.2 to the finite cover $(U_i)$ and its shrinking $(V_i)$ from step 2.1, obtaining a finite open barycentric refinement $\mathcal W$ of $\mathcal U$. Apply steps 1.2 and 2.2 again to $\mathcal W$, obtaining a finite open barycentric refinement $\mathcal Z$ of $\mathcal W$. [step 2.1, step 1.2, step 2.2]

4.1 The cover $\mathcal Z$ star-refines $\mathcal U$. Fix $Z_0\in\mathcal Z$ and $x\in Z_0$. Barycentricity of $\mathcal W$ gives $U\in\mathcal U$ with $\operatorname{St}(x,\mathcal W)\subseteq U$. If $Z\in\mathcal Z$ meets $Z_0$ at $y$, barycentricity of $\mathcal Z$ gives $W_y\in\mathcal W$ containing $\operatorname{St}(y,\mathcal Z)$. Both $Z_0$ and $Z$ lie in $W_y$, and $x\in W_y$, so $Z\subseteq W_y\subseteq\operatorname{St}(x,\mathcal W)\subseteq U$. Thus $\operatorname{St}(Z_0,\mathcal Z)\subseteq U$. [step 3.1]

5.1 The finite open cover $\mathcal Z$ is therefore a star-refinement of the original cover. [step 4.1, discharge-construct] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-finite-star-refinement-for-compact-hausdorff-spaces",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf",
    "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
  ],
  "rationale": "The compact-Hausdorff uniformization proofs in the sources construct finite open refinements with the required star control. The item extracts that standard construction as a named lemma.",
  "alpha_concurred": false,
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
      "source": "thm-a-compact-hausdorff-space-is-regular-and-normal",
      "source_section": "Statement",
      "quote": "**Nothing stronger is claimed.** In particular it is not asserted here that a\ncompact Hausdorff space is completely regular\n([[def-regular-and-t3-spaces]] distinguishes the two conditions), and no\ncontinuous real-valued function is produced anywhere below.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-compact-space",
      "source_section": "Definition",
      "quote": "- An **open cover** of $(X,\\mathcal{T})$ is a family\n  $\\mathcal{U} \\subseteq \\mathcal{T}$ of open sets with $X = \\bigcup \\mathcal{U}$,\n  where $\\bigcup \\mathcal{U} = \\{\\, x \\in X : x \\in U \\text{ for some } U \\in \\mathcal{U} \\,\\}$.\n- A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$\n  that is itself an open cover.\n- A family $\\mathcal{V}$ of sets is **finite** when $\\mathcal{V} = \\varnothing$ or\n  there are $n \\in \\mathbb{N}$ and sets $V_0, \\dots, V_n$ with\n  $\\mathcal{V} = \\{V_0, \\dots, V_n\\}$; repetitions in the list are allowed and\n  harmless.\n- $(X,\\mathcal{T})$ is **compact** when every open cover of it has a finite\n  subcover: for every open cover $\\mathcal{U}$, either $X = \\varnothing$ and the\n  empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and\n  $U_0, \\dots, U_n \\in \\mathcal{U}$ with\n  $$X = U_0 \\cup \\dots \\cup U_n .$$\n- A subset $A \\subseteq X$ is a **compact subset** of $X$ when the subspace\n  $(A, \\mathcal{T}_A)$ is a compact topological space, $\\mathcal{T}_A$ being the\n  subspace topology ([[def-subspace-topology-top]]).",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-finite-cardinality",
      "source_section": "Definition",
      "quote": "**Why exactly one, which is the whole content of the definition.** At least one\nsuch $n$ exists: that is literally what \"$A$ is finite\" says. At most one exists:\nif $A \\approx n$ and $A \\approx m$ with $n, m \\in \\mathbb{N}$, then $n \\approx A$,\nbecause the inverse of a bijection is a bijection, and hence $n \\approx m$,\nbecause a composition of bijections is a bijection\n([[def-injection-surjection-bijection]]); and $n \\approx m$ forces $n = m$ by\nclaim 3 of [[lem-pigeonhole]]. So $\\lvert A\\rvert$ names a single natural number\nand not a family of choices.",
      "uses": [
        "1.2",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-finite-choice",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $F$ be a function with domain $n$ all of whose\nvalues are nonempty sets. Then the family of its values,\n$\\mathcal{F} = F[n] = \\{\\, F(i) : i \\in n \\,\\}$, has a choice function\n([[def-choice-function]]).",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-interior-closure-boundary-top",
      "source_section": "Definition",
      "quote": "**Both operators are well posed, and the two names are justified rather than\nasserted.** The interior is a union of open sets, hence open by (T2), it is\ncontained in $A$, and it contains every open $U \\subseteq A$: so\n$\\operatorname{int}(A)$ is *the largest open subset of $A$*. The family being\nintersected in the definition of $\\overline{A}$ is nonempty, since $X$ is closed\nand contains $A$, so the intersection is a set; it is closed by (C2) of\n[[def-topological-space]], it contains $A$, and it is contained in every closed\n$F \\supseteq A$: so $\\overline{A}$ is *the smallest closed superset of $A$*. In\nparticular",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Let $\\mathcal V$ be the family of all open sets $V$ such that $\\overline V\\subseteq U$ for some $U\\in\\mathcal U$. This family covers $X$. Indeed, for $x\\in U\\in\\mathcal U$, normality separates the closed sets $\\{x\\}$ and $X\\setminus U$ by disjoint open sets; the open set containing $x$ has closure contained in $U$. This definition uses no choices indexed by $X$. [L1, L4, construct]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L4"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "We record a finite shrinking construction. Given a finite open cover $A_0,\\ldots,A_{m-1}$, recursively put $$ F_i=X\\setminus\\left(\\bigcup_{j<i}B_j\\cup\\bigcup_{j>i}A_j\\right). $$ The earlier covering clauses imply $F_i\\subseteq A_i$. Normality separates $F_i$ from $X\\setminus A_i$, giving an open $B_i$ with $F_i\\subseteq B_i\\subseteq\\overline{B_i}\\subseteq A_i$. At the last stage the $B_i$ cover $X$. Thus every finite open cover has an open shrinking whose closures remain in the original members. [L1, L3, L4, construct]",
      "step": "1.2",
      "inputs": [
        "L1",
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Compactness gives a finite subcover $V_0,\\ldots,V_{n-1}$ of $\\mathcal V$. Finite choice supplies $U_i\\in\\mathcal U$ with $\\overline{V_i}\\subseteq U_i$ for each $i<n$. [step 1.1, L2, L4]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "From a finite cover $A_i$ and an open shrinking $B_i$ as in step 1.2, form, for each nonempty $S\\subseteq\\{0,\\ldots,m-1\\}$, $$ W_S=\\left(\\bigcap_{i\\in S}A_i\\right) \\setminus\\left(\\bigcup_{j\\notin S}\\overline{B_j}\\right), $$ discarding empty members. These finitely many sets are open and cover $X$: at $x$, take $S=\\{i:x\\in A_i\\}$. Moreover, choose $k$ with $x\\in B_k$. Every $W_S$ containing $x$ has $k\\in S$, so $W_S\\subseteq A_k$. Hence the point-star $\\operatorname{St}(x,\\mathcal W)$ lies in $A_k$. Call this a barycentric refinement of $(A_i)$. [step 1.2, L3, construct]",
      "step": "2.2",
      "inputs": [
        "1.2",
        "L3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Apply step 2.2 to the finite cover $(U_i)$ and its shrinking $(V_i)$ from step 2.1, obtaining a finite open barycentric refinement $\\mathcal W$ of $\\mathcal U$. Apply steps 1.2 and 2.2 again to $\\mathcal W$, obtaining a finite open barycentric refinement $\\mathcal Z$ of $\\mathcal W$. [step 2.1, step 1.2, step 2.2]",
      "step": "3.1",
      "inputs": [
        "2.2",
        "2.1",
        "1.2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "The cover $\\mathcal Z$ star-refines $\\mathcal U$. Fix $Z_0\\in\\mathcal Z$ and $x\\in Z_0$. Barycentricity of $\\mathcal W$ gives $U\\in\\mathcal U$ with $\\operatorname{St}(x,\\mathcal W)\\subseteq U$. If $Z\\in\\mathcal Z$ meets $Z_0$ at $y$, barycentricity of $\\mathcal Z$ gives $W_y\\in\\mathcal W$ containing $\\operatorname{St}(y,\\mathcal Z)$. Both $Z_0$ and $Z$ lie in $W_y$, and $x\\in W_y$, so $Z\\subseteq W_y\\subseteq\\operatorname{St}(x,\\mathcal W)\\subseteq U$. Thus $\\operatorname{St}(Z_0,\\mathcal Z)\\subseteq U$. [step 3.1]",
      "step": "4.1",
      "inputs": [
        "3.1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "The finite open cover $\\mathcal Z$ is therefore a star-refinement of the original cover. [step 4.1, discharge-construct] ∎",
      "step": "5.1",
      "inputs": [
        "4.1"
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
      "status": "not_applicable",
      "reason": "The statement has no separate coincident-point, constant-map, or collapsed-parameter branch."
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
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no reverse iff direction."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-finite-star-refinement-for-compact-hausdorff-spaces",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "declared_target": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-finite-star-refinement-for-compact-hausdorff-spaces",
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
    "source": "lem-finite-star-refinement-for-compact-hausdorff-spaces",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
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
    "source": "lem-finite-star-refinement-for-compact-hausdorff-spaces",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-finite-cardinality",
    "declared_target": "def-finite-cardinality",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-finite-star-refinement-for-compact-hausdorff-spaces",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-finite-choice",
    "declared_target": "lem-finite-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-finite-star-refinement-for-compact-hausdorff-spaces",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-interior-closure-boundary-top",
    "declared_target": "def-interior-closure-boundary-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
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

### `def-finite-cardinality`

````markdown
---
id: def-finite-cardinality
kind: definition
title: "The cardinality $\\lvert A\\rvert$ of a finite set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable, lem-pigeonhole, def-equinumerous, def-injection-surjection-bijection,
       def-natural-numbers, lem-nat-order-is-membership, def-nat-order]
justified_by: []
forward_refs: [def-cardinal]
aliases: []
landmark: true
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
    - title: "Cardinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "P. Halmos, Naive Set Theory, §13"
      url: "https://en.wikipedia.org/wiki/Naive_Set_Theory_(book)"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{N}$ is the set of von Neumann naturals
([[def-natural-numbers]]): $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$, and
$n = \{\, m \in \mathbb{N} : m < n \,\}$ is itself the set of its predecessors,
the order being the additive order of [[def-nat-order]] identified with
membership in [[lem-nat-order-is-membership]]. Write $A \approx B$ when a
bijection $A \to B$ exists ([[def-equinumerous]],
[[def-injection-surjection-bijection]]). A set $A$ is **finite** when
$A \approx n$ for some $n \in \mathbb{N}$ ([[def-countable]]).

**Definition.** Let $A$ be a finite set. Then there is **exactly one**
$n \in \mathbb{N}$ with $A \approx n$, and we write

$$\lvert A\rvert := \text{that } n,$$

the **cardinality**, or number of elements, of $A$. The notation $\lvert A\rvert$
is defined for finite $A$ only, and its value is a natural number.

**Why exactly one, which is the whole content of the definition.** At least one
such $n$ exists: that is literally what "$A$ is finite" says. At most one exists:
if $A \approx n$ and $A \approx m$ with $n, m \in \mathbb{N}$, then $n \approx A$,
because the inverse of a bijection is a bijection, and hence $n \approx m$,
because a composition of bijections is a bijection
([[def-injection-surjection-bijection]]); and $n \approx m$ forces $n = m$ by
claim 3 of [[lem-pigeonhole]]. So $\lvert A\rvert$ names a single natural number
and not a family of choices.

**Four consequences, proved here because everything on this page uses them.**

**(a) $\lvert n\rvert = n$ for every $n \in \mathbb{N}$.** The identity map
$\mathrm{id}_n$ is a bijection $n \to n$, so $n \approx n$; thus $n$ is finite and
the unique natural equinumerous with it is $n$ itself.

**(b) $\lvert\varnothing\rvert = 0$, and a finite $A$ satisfies
$\lvert A\rvert = 0$ if and only if $A = \varnothing$.** Since $0 = \varnothing$,
part (a) gives $\lvert\varnothing\rvert = 0$. Conversely, if $\lvert A\rvert = 0$
then there is a bijection $f : A \to \varnothing$; were some $a \in A$, the value
$f(a)$ would be an element of $\varnothing$, and $\varnothing$ has none, so
$A = \varnothing$.

**(c) Transport along a bijection.** If $A$ is finite and $f : A \to B$ is a
bijection, then $B$ is finite and $\lvert B\rvert = \lvert A\rvert$. Indeed
$B \approx A$ through $f^{-1}$ and $A \approx \lvert A\rvert$, so
$B \approx \lvert A\rvert$ by transitivity.

**(d) Equality of cardinalities is equinumerosity.** For finite $A$ and $B$:
$\lvert A\rvert = \lvert B\rvert$ if and only if $A \approx B$. If the
cardinalities agree then $A \approx \lvert A\rvert = \lvert B\rvert \approx B$;
conversely $A \approx B$ gives $\lvert B\rvert = \lvert A\rvert$ by (c).

## Remarks

- **$\mathbb{N}$ contains $0$ here, and that is not a detail.** Every index range
  on this page starts at $0$, a one-element set has cardinality
  $1 = \{0\}$, and $\lvert A\rvert$ is never a positive-integer-only object. A
  statement about $\lvert A\rvert$ that is true only for $\lvert A\rvert \ge 1$
  must say so.

- **$\lvert A\rvert$ is a natural number, not a cardinal number.** The theory of
  cardinals ([[def-cardinal]]) is developed much later in the library and nothing
  here uses it, or any cardinal arithmetic: the pointer is orientation only. What
  makes the notation legitimate at this point in the reading order is exactly
  claim 3 of [[lem-pigeonhole]], and nothing more.

- **What the definition does not supply.** It asserts that *some* bijection
  $A \to \lvert A\rvert$ exists; it does not single one out, and nothing in the
  library does. Two sets can have equal cardinality with no distinguished
  bijection between them, which is the point of the counterexample on this page's
  companion.
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

### `def-interior-closure-boundary-top`

````markdown
---
id: def-interior-closure-boundary-top
kind: definition
title: "Interior, closure, boundary, exterior, derived set and isolated point in a topological space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top]
justified_by: []
aliases: [def-closure-top, def-interior-top, def-boundary-top, def-derived-set-top]
landmark: true
short: "interior, closure, boundary, derived set"
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
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$A \subseteq X$ and let $x \in X$. Neighbourhoods are as in
[[def-neighbourhood-top]], so a neighbourhood need not be open.

- The **interior** of $A$ is
  $\operatorname{int}(A) := \bigcup \{\, U \in \mathcal{T} : U \subseteq A \,\}$.
- The **closure** of $A$ is
  $\overline{A} := \bigcap \{\, F \subseteq X : F \text{ closed and } A \subseteq F \,\}$.
- The **exterior** of $A$ is $\operatorname{ext}(A) := \operatorname{int}(X \setminus A)$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $x$ is a **limit point** (accumulation point) of $A$ if every neighbourhood $N$
  of $x$ satisfies $N \cap (A \setminus \{x\}) \ne \varnothing$. The set of limit
  points of $A$ is the **derived set** $A'$.
- $x$ is an **isolated point of $A$** if $x \in A$ and some neighbourhood $N$ of
  $x$ satisfies $N \cap A = \{x\}$.

**Both operators are well posed, and the two names are justified rather than
asserted.** The interior is a union of open sets, hence open by (T2), it is
contained in $A$, and it contains every open $U \subseteq A$: so
$\operatorname{int}(A)$ is *the largest open subset of $A$*. The family being
intersected in the definition of $\overline{A}$ is nonempty, since $X$ is closed
and contains $A$, so the intersection is a set; it is closed by (C2) of
[[def-topological-space]], it contains $A$, and it is contained in every closed
$F \supseteq A$: so $\overline{A}$ is *the smallest closed superset of $A$*. In
particular

$$\operatorname{int}(A) \subseteq A \subseteq \overline{A},$$

and $A$ is open if and only if $A = \operatorname{int}(A)$, and closed if and
only if $A = \overline{A}$, in each case because one inclusion is automatic and
the other says exactly that $A$ belongs to the family in question.

**Interior and closure are exchanged by complementation.** For every
$A \subseteq X$,

$$X \setminus \operatorname{int}(A) = \overline{X \setminus A}, \qquad X \setminus \overline{A} = \operatorname{int}(X \setminus A) = \operatorname{ext}(A).$$

Indeed $U \mapsto X \setminus U$ is a bijection between the open subsets of $A$
and the closed supersets of $X \setminus A$, and it turns unions into
intersections ([[def-topological-space]]); applying complementation to the first
identity gives the second. So $\operatorname{ext}(A) = X \setminus \overline{A}$,
and every statement about interiors has a mirror statement about closures.

**The pointwise description of the interior.** $x \in \operatorname{int}(A)$ if
and only if $A$ is a neighbourhood of $x$. If $x \in \operatorname{int}(A)$ then
$\operatorname{int}(A)$ is an open set with $x \in \operatorname{int}(A) \subseteq A$;
conversely a neighbourhood relation $x \in U \subseteq A$ with $U$ open puts $x$
in the union defining $\operatorname{int}(A)$. The corresponding description of
the closure is proved as the next item, because it is the statement that does the
work in every later proof.

**$X$ is the disjoint union of the three regions.** Since
$\operatorname{int}(A) \subseteq \overline{A}$, the three sets
$\operatorname{int}(A)$, $\partial A = \overline{A} \setminus \operatorname{int}(A)$
and $\operatorname{ext}(A) = X \setminus \overline{A}$ are pairwise disjoint and
their union is $X$. This is recorded again, with the identities for interior and
closure of unions and intersections, in the lemma two items below.

## Remarks

- **The boundary is symmetric in $A$ and its complement**:
  $\partial A = \overline{A} \cap \overline{X \setminus A}$, because
  $\overline{A} \setminus \operatorname{int}(A) = \overline{A} \cap (X \setminus \operatorname{int}(A)) = \overline{A} \cap \overline{X \setminus A}$
  by the complementation identity above. Hence $\partial A = \partial(X \setminus A)$,
  and $\partial A$ is closed, being an intersection of two closed sets.

- **A limit point of $A$ need not lie in $A$, and a point of $A$ need not be a
  limit point of $A$.** The points of $A$ that are not limit points of $A$ are
  exactly its isolated points, directly from the two definitions. The relation
  $\overline{A} = A \cup A'$ is a theorem, proved next, not a restatement.

- **These are the metric notions when the topology is a metric topology.** For a
  metric space the definitions of [[def-metric-interior-closure-boundary]] are
  stated with balls in place of neighbourhoods, and the balls around $x$ are a
  neighbourhood base at $x$; the identification is carried out where metrizable
  spaces are defined, later on this page, and it is what allows metric examples
  to be quoted here without reproof.
````

### `lem-finite-choice`

````markdown
---
id: lem-finite-choice
kind: lemma
title: "Every natural-number-indexed list of nonempty sets has a choice function on its family of values"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-choice-function, thm-induction-principle, def-natural-numbers, def-nat-addition, def-axiom-of-choice]
justified_by: []
forward_refs: [def-countable, ex-finite-choice-by-induction, ex-russells-socks]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $F$ be a function with domain $n$ all of whose
values are nonempty sets. Then the family of its values,
$\mathcal{F} = F[n] = \{\, F(i) : i \in n \,\}$, has a choice function
([[def-choice-function]]).

This is a theorem of ZF: its proof uses no form of the Axiom of Choice
([[def-axiom-of-choice]]).

What is proved below is exactly the displayed statement, by induction on $n$. The
natural number $n$ serves as the index set in the von Neumann sense,
$n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so "$F$ has domain $n$"
says precisely that the members of $\mathcal{F}$ are listed as
$F(0), \dots, F(n-1)$. The listing need not be injective, and $\mathcal{F}$ is the
set of values, so repetitions are harmless and are not counted.

The displayed statement and its proof use only a natural-number-indexed
function. They do not identify an arbitrary finite family with a particular
enumeration.

## Facts & Assumptions

**Given:** A natural number $n$, used as the index set $n = \{0, \dots, n-1\}$, and a function $F$ with domain $n$ such that $F(i) \ne \emptyset$ for every $i \in n$; write $F[n] = \{F(i) : i \in n\}$ for the family of values of $F$.

[A1] $P(n)$ denotes the statement: for every function $F$ with domain $n$ all of whose values are nonempty sets, the family $F[n]$ has a choice function.

[L1] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L2] A choice function for a family $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

[L3] $0=\emptyset$ and $\sigma(n)=n\cup\{n\}$, so $n\subseteq\sigma(n)$ ([[def-natural-numbers]]). Thus a function $F$ with domain $\sigma(n)$ restricts to a function with domain $n$; moreover, directly from the definition of image, $y\in F[\sigma(n)]$ iff $y=F(i)$ for some $i\in n$ or $y=F(n)$, so $F[\sigma(n)]=F[n]\cup\{F(n)\}$.

## Proof

**Proof technique:** induction.

1.1 Base case: $0 = \emptyset$, so the only function with domain $0$ is the empty function, its family of values is $F[0] = \emptyset$, and the empty function has domain $\emptyset$ and satisfies the defining condition vacuously, so it is a choice function for $F[0]$; hence $P(0)$ holds. [base, A1, L2, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that every function with domain $n$ whose values are all nonempty has a choice function for its family of values. [ih, A1]

1.3 Let $F$ be an arbitrary function with domain $\sigma(n) = n \cup \{n\}$ all of whose values are nonempty sets; write $S = F(n)$ and $\mathcal{G} = F[n]$, the family of values of the restriction $F \restriction n$, so that $F[\sigma(n)] = \mathcal{G} \cup \{S\}$. [given, L3]

2.1 The restriction $F \restriction n$ is a function with domain $n$, and every value of it is a value of $F$, hence nonempty; so the inductive hypothesis applies to it and supplies a choice function $h$ for $\mathcal{G}$, a function with domain $\mathcal{G}$ satisfying $h(T) \in T$ for every $T \in \mathcal{G}$. [step 1.3, step 1.2, L2, L3]

2.2 The set $S = F(n)$ is one of the values of $F$, hence nonempty, so there exists an element of $S$; fix one and call it $a$. [step 1.3, choose]

3.1 Define $g = (h \restriction (\mathcal{G} \setminus \{S\})) \cup \{(S, a)\}$; its two pieces are functions with the disjoint domains $\mathcal{G} \setminus \{S\}$ and $\{S\}$, so $g$ is a function, and its domain is $(\mathcal{G} \setminus \{S\}) \cup \{S\} = \mathcal{G} \cup \{S\} = F[\sigma(n)]$. [step 2.1, step 2.2, step 1.3, construct]

4.1 Every $T \in F[\sigma(n)]$ is either $S$ or a member of $\mathcal{G} \setminus \{S\}$; in the first case $g(S) = a \in S$, and in the second $g(T) = h(T) \in T$ because $h$ is a choice function for $\mathcal{G}$. So $g(T) \in T$ throughout. [step 3.1, step 2.1, step 2.2]

5.1 Hence $g$ is a choice function for $F[\sigma(n)]$, and since $F$ was an arbitrary function with domain $\sigma(n)$ with nonempty values, $P(n)$ implies $P(n+1)$. [step 4.1, step 3.1, step 1.3, L2, A1]

6.1 By the induction principle, $P(n)$ holds for every $n \in \mathbb{N}$: the family of values of any function whose domain is a natural number and whose values are nonempty has a choice function. [step 1.1, step 5.1, L1, discharge-induction] ∎

## Remarks

- **Later finiteness terminology.** A finite set is defined later as one
  equinumerous with a natural number ([[def-countable]]). That terminology is
  not used in the proof above, which keeps its exact indexed-family scope.
- **Where the Axiom of Choice would be needed, and why it is not needed here.** Step 2.2 picks one element out of one nonempty set. That is a single existential instantiation, licensed by first-order logic alone. The induction performs one such instantiation per stage, and the stages are indexed by a natural number, so the process terminates. ZF cannot in general turn an arbitrary infinite family of nonempty sets into a simultaneous choice function; that is the gap [[def-axiom-of-choice]] fills. An infinite family with a distinguished element in each member may still have an explicit choice function in ZF, as [[ex-russells-socks]] shows.
- **Why the family is presented as an indexed one.** Stated over "a family of exactly $n$ sets", the successor step would have to assert that deleting one member of a family of $n+1$ sets leaves exactly $n$, which is a claim about cardinality and needs a theory of finiteness this page does not have. Indexed by $n$, the same step is the restriction $F \restriction n$ of a function, which is immediate from $n \subseteq \sigma(n)$ and costs nothing. Nothing else in the argument changes.
- The listing may repeat, and the argument is arranged so that repetition needs no separate treatment: $g$ is built by overwriting rather than by adjoining, so it is a function whether or not $S$ already occurs among $F(0), \dots, F(n-1)$. In particular $\mathcal{F}$ may have strictly fewer than $n$ members.
- The lemma is not a special case of the Axiom of Choice that happens to be provable; it is the precise boundary of what is free. [[ex-russells-socks]] makes the boundary concrete, and [[ex-finite-choice-by-induction]] works this induction out on a small family.
````

### `thm-a-compact-hausdorff-space-is-regular-and-normal`

````markdown
---
id: thm-a-compact-hausdorff-space-is-regular-and-normal
kind: theorem
title: "A compact Hausdorff space is regular and normal, hence $T_3$ and $T_4$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-compact-subset-of-a-hausdorff-space-is-closed, def-compact-space,
       thm-closed-subspace-of-a-compact-space-is-compact, def-regular-and-t3-spaces,
       def-normal-and-t4-spaces, def-t0-and-t1-spaces, def-hausdorff-space,
       lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, def-topological-space]
justified_by: []
aliases: [thm-compact-hausdorff-is-normal]
landmark: true
short: "compact Hausdorff implies regular and normal"
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
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "A. Hatcher, Topology Notes"
      url: "https://pi.math.cornell.edu/~hatcher/Top/TopNotes.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact ([[def-compact-space]]) Hausdorff
([[def-hausdorff-space]]) topological space. Then:

1. $X$ is **regular** ([[def-regular-and-t3-spaces]]);
2. $X$ is **normal** ([[def-normal-and-t4-spaces]]);
3. $X$ is $T_1$ ([[def-t0-and-t1-spaces]]), and hence $X$ is $T_3$ and $T_4$.

Following [[def-regular-and-t3-spaces]] and [[def-normal-and-t4-spaces]],
*regular* and *normal* name the separation conditions alone and the numerals
$T_3$ and $T_4$ name their conjunctions with $T_1$; claim 3 is what supplies the
$T_1$ half, and it is stated separately for that reason.

**Nothing stronger is claimed.** In particular it is not asserted here that a
compact Hausdorff space is completely regular
([[def-regular-and-t3-spaces]] distinguishes the two conditions), and no
continuous real-valued function is produced anywhere below.

## Facts & Assumptions

**Given:** A compact Hausdorff topological space $X$.

[A1] $X$ is regular when for every closed $C \subseteq X$ and every $x \in X \setminus C$ there are disjoint open $U \ni x$ and $V \supseteq C$; the case $C = \varnothing$ is met by $U = X$ and $V = \varnothing$, and $T_3$ is regular together with $T_1$ ([[def-regular-and-t3-spaces]], [[def-t0-and-t1-spaces]]).

[A2] $X$ is normal when for all disjoint closed $A, B \subseteq X$ there are disjoint open $U \supseteq A$ and $V \supseteq B$; the cases $A = \varnothing$ and $B = \varnothing$ are met by $\varnothing$ together with $X$, and $T_4$ is normal together with $T_1$ ([[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]).

[A3] $X$ is a topological space, so a subset is closed exactly when its complement is open ([[def-topological-space]]).

[L1] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[def-compact-space]]).

[L2] In a Hausdorff space, a point and a disjoint compact set have disjoint open neighbourhoods, and two disjoint compact sets have disjoint open neighbourhoods ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-hausdorff-space]], [[def-compact-space]]).

[L3] Every Hausdorff space is $T_1$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], claim 2, [[def-t0-and-t1-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Let $C \subseteq X$ be closed and let $x \in X \setminus C$; since $X$ is compact and $C$ is closed in $X$, the subspace $C$ is compact, and $x$ does not lie in it. [A3, L1]

1.2 Let $A, B \subseteq X$ be closed with $A \cap B = \varnothing$; since $X$ is compact and both are closed in $X$, both subspaces $A$ and $B$ are compact. [A3, L1]

1.3 $X$ is $T_1$, being Hausdorff. [L3]

2.1 By [L2], applied to the point $x$ and the disjoint compact set $C$ of step 1.1, there are disjoint open $U \ni x$ and $V \supseteq C$; as $C$ and $x$ were arbitrary this is exactly the condition of [A1], so $X$ is regular, which is claim 1. [step 1.1, A1, L2]

2.2 By [L2], applied to the two disjoint compact sets $A$ and $B$ of step 1.2, there are disjoint open $U \supseteq A$ and $V \supseteq B$; as $A$ and $B$ were arbitrary this is the condition of [A2], so $X$ is normal, which is claim 2. [step 1.2, A2, L2]

3.1 By step 1.3 the space is $T_1$; with step 2.1 it is regular and $T_1$, hence $T_3$, and with step 2.2 it is normal and $T_1$, hence $T_4$. This is claim 3. [step 1.3, step 2.1, step 2.2, A1, A2]

4.1 Steps 2.1, 2.2 and 3.1 are claims 1, 2 and 3, so a compact Hausdorff space is regular, normal, $T_3$ and $T_4$. [step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The whole content is that "closed" and "compact" coincide here, in the direction that is needed.** Regularity asks a point to be separated from a closed set and normality asks two closed sets to be separated; compactness of the ambient space converts each closed set into a compact one, and the separation of compact sets in a Hausdorff space is what [[thm-compact-subset-of-a-hausdorff-space-is-closed]] supplies. No new separation argument is run.

- **Why compactness of $X$ is needed and not just of the sets separated.** The hypothesis is used only through [L1], to know that an arbitrary closed subset of $X$ is compact. A Hausdorff space in which the sets to be separated happen to be compact is separated by [L2] alone and needs no hypothesis on the ambient space at all; what compactness of $X$ buys is that *every* closed set is such a set.

- **The degenerate cases are not a gap.** If $C$, $A$ or $B$ is empty the required open sets are named outright in [A1] and [A2], so the argument does not depend on any nonemptiness hidden in the compact-separation clauses.
````

