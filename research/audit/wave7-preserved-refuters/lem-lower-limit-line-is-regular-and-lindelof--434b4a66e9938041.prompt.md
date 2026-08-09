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

- critical risk (8): 6 declared dependencies; 6 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `lem-lower-limit-line-is-regular-and-lindelof`

Normalized current SHA-256: `552e6ce8e4e7c1421f8a849f36fb99e02c2118b0f0be5d4e93a6eff51c2f0f7b`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-lower-limit-line-is-regular-and-lindelof
kind: lemma
title: "The lower-limit line has a clopen basis, is regular, and is Lindelöf under countable choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lower-limit-topology, lem-regularity-via-closed-neighbourhoods, def-compactness-variants, thm-rationals-countable, lem-rat-embeds-dense, def-countable-choice]
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
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, Sorgenfrey line"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
pipeline_run: null
---

## Statement

The lower-limit line has a basis of clopen sets and is regular. Assuming the Axiom of Countable Choice, it is Lindelöf.

## Facts & Assumptions

**Given:** The lower-limit line and, for the Lindelöf assertion, the Axiom of Countable Choice.

[F1] Its basic open sets are the intervals $[a,b)$ ([[def-lower-limit-topology]]).

[L1] A clopen neighbourhood basis gives regularity through the closed-neighbourhood characterization ([[lem-regularity-via-closed-neighbourhoods]]).

[L2] $\mathbb Q$ is countably infinite and is dense in $\mathbb R$ ([[thm-rationals-countable]], [[lem-rat-embeds-dense]]).

[A1] The Axiom of Countable Choice ([[def-countable-choice]]).

[F2] Lindelöf means that every open cover has an at most countable subcover ([[def-compactness-variants]]).

## Proof

**Proof technique:** direct.

1.1 Each $[a,b)$ is clopen: its complement is $(-\infty,a)\cup[b,\infty)$, a union of lower-limit basic intervals. Hence the line is regular by [L1]. [F1, L1]

1.2 Let $\mathcal U$ be an open cover and let $O$ be the union of the usual intervals $(a,b)$ for which $[a,b)$ lies in a member of $\mathcal U$. The rational-endpoint intervals $[p,q)$ contained in members of $\mathcal U$ cover $O$; they form an at most countable family by [L2]. [F1, L2]

1.3 Put $D=\mathbb R\setminus O$. For $x\in D$, some $[x,b_x)$ lies in a member of $\mathcal U$, and $[x,b_x)\cap D=\{x\}$. The first rational $q_x\in(x,b_x)$ in a fixed enumeration exists, and the intervals $(x,q_x)$ are pairwise disjoint; their first rationals $r_x$ are therefore distinct. Thus $x\mapsto r_x$ injects $D$ into $\mathbb Q$, so $D$ is at most countable. [F1, L2]

2.1 By [A1], choose one member of $\mathcal U$ covering each point of the at most countable set $D$. Together with one covering member for each rational-endpoint interval used in step 1.2, these form an at most countable subcover of $\mathcal U$. [A1, L2, step 1.2, step 1.3]

3.1 Therefore the lower-limit line is Lindelöf under countable choice. [F2, step 2.1] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-lower-limit-line-is-regular-and-lindelof",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
  ],
  "rationale": "The Encyclopedia states the Sorgenfrey line is perfectly normal and hereditarily Lindelof; the library isolates clopenness/regularity and makes its countable-choice use explicit.",
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
      "fact": "F1",
      "source": "def-lower-limit-topology",
      "source_section": "Definition",
      "quote": "Let $\\mathcal B_\\ell=\\{[a,b):a,b\\in\\mathbb R,\\ a<b\\}$. The **lower-limit topology** $\\mathcal T_\\ell$ on $\\mathbb R$ is the topology having $\\mathcal B_\\ell$ as a basis. The resulting space is the **lower-limit line**.\n\nThis basis is well defined. It covers $\\mathbb R$, because $x\\in[x,x+1)$ for every $x$. If $x\\in[a,b)\\cap[c,d)$, then $x\\in[\\max(a,c),\\min(b,d))$, whose right endpoint exceeds $x$ and which lies inside the intersection. Thus the two basis conditions of [[thm-basis-criterion]] hold, so $\\mathcal B_\\ell$ determines a unique topology.\n\nThe lower-limit topology is finer than the usual topology: if $x\\in(a,b)$, then $[x,(x+b)/2)$ is a lower-limit basic interval containing $x$ and contained in $(a,b)$. No equality with the usual topology is asserted here. The half-open intervals use the interval convention of [[def-interval]], and opens are exactly unions of basis members by [[def-topology-basis-subbasis]].",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-regularity-via-closed-neighbourhoods",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]), with\nclosures as in [[def-interior-closure-boundary-top]] and neighbourhoods as in\n[[def-neighbourhood-top]], so that a neighbourhood need not be open. The\nfollowing three conditions are equivalent.\n\n- **(a)** $X$ is regular ([[def-regular-and-t3-spaces]]).\n- **(b)** For every $x \\in X$ and every open $U$ with $x \\in U$ there is an open\n  $V$ with\n  $$x \\in V \\subseteq \\overline{V} \\subseteq U .$$\n- **(c)** Every point of $X$ has a neighbourhood base consisting of **closed**\n  neighbourhoods: for every $x \\in X$ and every neighbourhood $N$ of $x$ there is\n  a closed neighbourhood $K$ of $x$ with $K \\subseteq N$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-rationals-countable",
      "source_section": "Statement",
      "quote": "$\\mathbb{Q} \\approx \\mathbb{N}$ ([[def-equinumerous]]): the rationals are\ncountably infinite ([[def-countable]]).\n\n**No choice principle is used.** The one place where a reader expects a choice,\n\"pick a representative $a/b$ of each rational\", is exactly where\n[[lem-rat-positive-denominator]] applies: every rational *has* a representative\nwith positive denominator, so the map $(a,b) \\mapsto [(a,b)]$ defined on\n$\\mathbb{Z} \\times \\mathbb{Z}_{>0}$ is already **surjective** onto $\\mathbb{Q}$,\nand countability follows from a surjection without ever selecting a\nrepresentative. The same device handles $\\mathbb{Z}$, which is a surjective image\nof $\\mathbb{N} \\times \\mathbb{N}$ by construction ([[def-integers]]).",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-countable-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Countable Choice**, written $\\mathrm{AC}_\\omega$, is the following\nstatement.\n\n> For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by\n> $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that\n> $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$.\n\nEquivalently, in the vocabulary of [[def-choice-function]]: every at most\ncountable family of nonempty sets ([[def-countable]]) has a choice function.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "F2",
      "source": "def-compactness-variants",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]), with\nopen covers, subcovers, finiteness and compactness as in [[def-compact-space]],\nand *finite*, *at most countable* and *uncountable* as in [[def-countable]].\n\n- $(X, \\mathcal{T})$ is **countably compact** when every open cover of $X$ that\n  is at most countable has a finite subcover.\n- $(X, \\mathcal{T})$ is **Lindel&ouml;f** when every open cover of $X$ has an at\n  most countable subcover.\n- $(X, \\mathcal{T})$ is **sequentially compact** when every sequence $(x_k)$ in\n  $X$, that is every function $x : \\mathbb{N} \\to X$\n  ([[def-sequence-convergence-top]]), has a subsequence $(x_{n_j})$ converging to\n  a point of $X$, the index map $n : \\mathbb{N} \\to \\mathbb{N}$ being strictly\n  increasing ([[def-sequence]], [[lem-index-map-grows]]).\n- $(X, \\mathcal{T})$ is **limit point compact** when every infinite subset\n  $A \\subseteq X$ has a limit point in $X$, that is a point $p \\in X$ every\n  neighbourhood $N$ of which satisfies $N \\cap (A \\setminus \\{p\\}) \\ne \\varnothing$\n  ([[def-interior-closure-boundary-top]]). Here *infinite* means not finite in\n  the sense of [[def-countable]].\n- $(X, \\mathcal{T})$ is **$\\sigma$-compact** when there is an at most countable\n  family $\\mathcal{K}$ of compact subsets of $X$ with $X = \\bigcup \\mathcal{K}$.\n- A subset $A \\subseteq X$ is **relatively compact in $X$** when its closure\n  $\\overline{A}$ ([[def-interior-closure-boundary-top]]) is a compact subset of\n  $X$.\n\nA subset $A \\subseteq X$ is called countably compact, Lindel&ouml;f,\nsequentially compact, limit point compact or $\\sigma$-compact when the subspace\n$(A, \\mathcal{T}_A)$ is ([[def-subspace-topology-top]]), exactly as for\ncompactness. **Relative compactness is the exception and is deliberately not of\nthat form**: it is a statement about $A$ *inside* $X$, since $\\overline{A}$ is\ncomputed in $X$, and a set may be relatively compact in one space and not in\nanother that contains it. Every other notion on this list is intrinsic to the\nsubspace.\n\n**The countable covers may be listed.** A nonempty at most countable family\n$\\mathcal{U}$ admits a surjection $\\mathbb{N} \\to \\mathcal{U}$\n([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for\nevery sequence $(U_n)_{n \\in \\mathbb{N}}$ of open sets with\n$X = \\bigcup_{n \\in \\mathbb{N}} U_n$ there are finitely many indices whose sets\nalready cover $X$. That surjection is produced from the countability assumption\nalone and no choice principle is involved; the empty family covers only the empty\nspace, which is compact anyway.\n\n**Indexing starts at $0$.** A sequence here is a function on $\\mathbb{N}$ and\n$\\mathbb{N}$ contains $0$ ([[def-sequence]]), so a subsequence is\n$(x_{n_j})_{j \\in \\mathbb{N}}$ with $n_0 < n_1 < \\cdots$ and $n_j \\ge j$\n([[lem-index-map-grows]]). An index range taken from a text that starts at $1$\nmust be shifted before it is used here.\n\n**Agreement with the metric definitions.** Let $(X,d)$ be a metric space carrying\nits metric topology $\\mathcal{T}_d$ ([[def-metric-topology]],\n[[def-metrizable-space]]). Then the three notions that\n[[def-metric-compactness-variants]] defines metrically are the three defined\nabove, read in $(X, \\mathcal{T}_d)$:\n\n- *Countably compact.* The open sets used there are the members of\n  $\\mathcal{T}_d$, so the at most countable open covers are the same families and\n  the condition is the same condition, exactly as for compactness itself\n  ([[thm-compactness-agrees-with-metric-compactness]]).\n- *Sequentially compact.* Convergence of a sequence in the metric sense and in\n  the sense of [[def-sequence-convergence-top]] agree on a metric topology,\n  because the balls around a point are a neighbourhood base at it\n  ([[def-metrizable-space]]); the subsequences quantified over are the same.\n- *Limit point compact.* A point $p$ is a limit point of $A$ in the metric sense\n  when every ball around $p$ meets $A \\setminus \\{p\\}$, and in the sense above\n  when every neighbourhood does; the same neighbourhood base makes the two\n  conditions one ([[def-metrizable-space]],\n  [[def-interior-closure-boundary-top]]).\n\nSo no statement below about a metrizable space introduces a second notion, and\nevery theorem of the metric development about these three properties may be\nquoted here once a metric inducing the topology is named. Lindel&ouml;fness,\n$\\sigma$-compactness and relative compactness have no metric counterpart in this\nlibrary and are defined here for the first time.",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Each $[a,b)$ is clopen: its complement is $(-\\infty,a)\\cup[b,\\infty)$, a union of lower-limit basic intervals. Hence the line is regular by [L1]. [F1, L1]",
      "step": "1.1",
      "inputs": [
        "F1",
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Let $\\mathcal U$ be an open cover and let $O$ be the union of the usual intervals $(a,b)$ for which $[a,b)$ lies in a member of $\\mathcal U$. The rational-endpoint intervals $[p,q)$ contained in members of $\\mathcal U$ cover $O$; they form an at most countable family by [L2]. [F1, L2]",
      "step": "1.2",
      "inputs": [
        "F1",
        "L2"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "Put $D=\\mathbb R\\setminus O$. For $x\\in D$, some $[x,b_x)$ lies in a member of $\\mathcal U$, and $[x,b_x)\\cap D=\\{x\\}$. The first rational $q_x\\in(x,b_x)$ in a fixed enumeration exists, and the intervals $(x,q_x)$ are pairwise disjoint; their first rationals $r_x$ are therefore distinct. Thus $x\\mapsto r_x$ injects $D$ into $\\mathbb Q$, so $D$ is at most countable. [F1, L2]",
      "step": "1.3",
      "inputs": [
        "x",
        "b_x)$ lies in a member of $\\mathcal U$",
        "and $[x",
        "b_x)\\cap D=\\{x\\}$. The first rational $q_x\\in(x",
        "b_x)$ in a fixed enumeration exists",
        "and the intervals $(x",
        "q_x)$ are pairwise disjoint; their first rationals $r_x$ are therefore distinct. Thus $x\\mapsto r_x$ injects $D$ into $\\mathbb Q$",
        "so $D$ is at most countable. [F1",
        "L2",
        "F1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [A1], choose one member of $\\mathcal U$ covering each point of the at most countable set $D$. Together with one covering member for each rational-endpoint interval used in step 1.2, these form an at most countable subcover of $\\mathcal U$. [A1, L2, step 1.2, step 1.3]",
      "step": "2.1",
      "inputs": [
        "A1",
        "L2",
        "step 1.2",
        "step 1.3",
        "1.2",
        "1.3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Therefore the lower-limit line is Lindelöf under countable choice. [F2, step 2.1] ∎",
      "step": "3.1",
      "inputs": [
        "F2",
        "step 2.1",
        "2.1"
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
      "status": "checked",
      "evidence": "statement and step 1.1: endpoint and codomain-boundary behavior was inspected"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 2.1: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
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
    "source": "lem-lower-limit-line-is-regular-and-lindelof",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-lower-limit-topology",
    "declared_target": "def-lower-limit-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-lower-limit-line-is-regular-and-lindelof",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-regularity-via-closed-neighbourhoods",
    "declared_target": "lem-regularity-via-closed-neighbourhoods",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-lower-limit-line-is-regular-and-lindelof",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-compactness-variants",
    "declared_target": "def-compactness-variants",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-lower-limit-line-is-regular-and-lindelof",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-rationals-countable",
    "declared_target": "thm-rationals-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-lower-limit-line-is-regular-and-lindelof",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-lower-limit-line-is-regular-and-lindelof",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-countable-choice",
    "declared_target": "def-countable-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
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

### `def-compactness-variants`

````markdown
---
id: def-compactness-variants
kind: definition
title: "Countably compact, Lindel\\\"of, sequentially compact, limit point compact and $\\sigma$-compact spaces, and relatively compact subsets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-compact-space, def-countable, lem-countable-iff-surjection-from-n, def-sequence-convergence-top, def-sequence, def-interior-closure-boundary-top, def-metric-compactness-variants, def-subspace-topology-top, def-topological-space, lem-index-map-grows, def-metrizable-space, def-metric-topology, thm-compactness-agrees-with-metric-compactness]
justified_by: []
aliases: [def-lindelof, def-sigma-compact, def-relatively-compact, def-countably-compact-top, def-sequentially-compact-top, def-limit-point-compact-top]
landmark: true
short: "the compactness variants"
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
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
    - title: "Lindelöf space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lindel%C3%B6f_space"
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "Limit point compact (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point_compact"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
open covers, subcovers, finiteness and compactness as in [[def-compact-space]],
and *finite*, *at most countable* and *uncountable* as in [[def-countable]].

- $(X, \mathcal{T})$ is **countably compact** when every open cover of $X$ that
  is at most countable has a finite subcover.
- $(X, \mathcal{T})$ is **Lindel&ouml;f** when every open cover of $X$ has an at
  most countable subcover.
- $(X, \mathcal{T})$ is **sequentially compact** when every sequence $(x_k)$ in
  $X$, that is every function $x : \mathbb{N} \to X$
  ([[def-sequence-convergence-top]]), has a subsequence $(x_{n_j})$ converging to
  a point of $X$, the index map $n : \mathbb{N} \to \mathbb{N}$ being strictly
  increasing ([[def-sequence]], [[lem-index-map-grows]]).
- $(X, \mathcal{T})$ is **limit point compact** when every infinite subset
  $A \subseteq X$ has a limit point in $X$, that is a point $p \in X$ every
  neighbourhood $N$ of which satisfies $N \cap (A \setminus \{p\}) \ne \varnothing$
  ([[def-interior-closure-boundary-top]]). Here *infinite* means not finite in
  the sense of [[def-countable]].
- $(X, \mathcal{T})$ is **$\sigma$-compact** when there is an at most countable
  family $\mathcal{K}$ of compact subsets of $X$ with $X = \bigcup \mathcal{K}$.
- A subset $A \subseteq X$ is **relatively compact in $X$** when its closure
  $\overline{A}$ ([[def-interior-closure-boundary-top]]) is a compact subset of
  $X$.

A subset $A \subseteq X$ is called countably compact, Lindel&ouml;f,
sequentially compact, limit point compact or $\sigma$-compact when the subspace
$(A, \mathcal{T}_A)$ is ([[def-subspace-topology-top]]), exactly as for
compactness. **Relative compactness is the exception and is deliberately not of
that form**: it is a statement about $A$ *inside* $X$, since $\overline{A}$ is
computed in $X$, and a set may be relatively compact in one space and not in
another that contains it. Every other notion on this list is intrinsic to the
subspace.

**The countable covers may be listed.** A nonempty at most countable family
$\mathcal{U}$ admits a surjection $\mathbb{N} \to \mathcal{U}$
([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for
every sequence $(U_n)_{n \in \mathbb{N}}$ of open sets with
$X = \bigcup_{n \in \mathbb{N}} U_n$ there are finitely many indices whose sets
already cover $X$. That surjection is produced from the countability assumption
alone and no choice principle is involved; the empty family covers only the empty
space, which is compact anyway.

**Indexing starts at $0$.** A sequence here is a function on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-sequence]]), so a subsequence is
$(x_{n_j})_{j \in \mathbb{N}}$ with $n_0 < n_1 < \cdots$ and $n_j \ge j$
([[lem-index-map-grows]]). An index range taken from a text that starts at $1$
must be shifted before it is used here.

**Agreement with the metric definitions.** Let $(X,d)$ be a metric space carrying
its metric topology $\mathcal{T}_d$ ([[def-metric-topology]],
[[def-metrizable-space]]). Then the three notions that
[[def-metric-compactness-variants]] defines metrically are the three defined
above, read in $(X, \mathcal{T}_d)$:

- *Countably compact.* The open sets used there are the members of
  $\mathcal{T}_d$, so the at most countable open covers are the same families and
  the condition is the same condition, exactly as for compactness itself
  ([[thm-compactness-agrees-with-metric-compactness]]).
- *Sequentially compact.* Convergence of a sequence in the metric sense and in
  the sense of [[def-sequence-convergence-top]] agree on a metric topology,
  because the balls around a point are a neighbourhood base at it
  ([[def-metrizable-space]]); the subsequences quantified over are the same.
- *Limit point compact.* A point $p$ is a limit point of $A$ in the metric sense
  when every ball around $p$ meets $A \setminus \{p\}$, and in the sense above
  when every neighbourhood does; the same neighbourhood base makes the two
  conditions one ([[def-metrizable-space]],
  [[def-interior-closure-boundary-top]]).

So no statement below about a metrizable space introduces a second notion, and
every theorem of the metric development about these three properties may be
quoted here once a metric inducing the topology is named. Lindel&ouml;fness,
$\sigma$-compactness and relative compactness have no metric counterpart in this
library and are defined here for the first time.

## Remarks

**None of the conditions listed above is compactness by definition.** Countable
compactness restricts the covers tested; Lindel&ouml;fness weakens the conclusion
from finite to at most countable; sequential compactness speaks about sequences
instead of covers; limit point compactness speaks about subsets;
$\sigma$-compactness asks only that the space be assembled from at most countably
many compact pieces; relative compactness is a condition on a subset of an
ambient space. Which implications hold between them, and which need a choice
principle, is [[thm-compactness-variants-hierarchy]]; that some of them fail
to be equivalent is witnessed by the false statements at the end of this page.

**Why $\sigma$-compactness is not a compactness property at all.** The real line
is $\sigma$-compact, being the union of the compact intervals $[-n, n]$, and it is
not compact; the definition is useful precisely because it names a class of
spaces built out of compact pieces without being compact. The same remark
explains why a $\sigma$-compact space need not be countably compact.

**Limit point compactness is sometimes called the Bolzano-Weierstrass
property**, and *countably compact* is occasionally used for what is called limit
point compact here. This library uses the four names above with the meanings
given, and writes the condition out whenever the risk of confusion is real.
````

### `def-countable-choice`

````markdown
---
id: def-countable-choice
kind: definition
title: "The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable, thm-well-ordering-principle, lem-countable-iff-surjection-from-n]
justified_by: []
external_refs: [rem-feferman-levy-model, rem-cohen-first-model]
aliases: [def-ac-omega, axiom-of-countable-choice]
landmark: false
short: "$\\mathrm{AC}_\\omega$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

## Remarks

- **The two formulations are equivalent, and the passage between them uses no
  choice.** Given an at most countable family $\mathcal{F}$ of nonempty sets,
  either $\mathcal{F} = \varnothing$, where the empty function is a choice
  function, or a surjection $s : \mathbb{N} \to \mathcal{F}$ exists
  ([[lem-countable-iff-surjection-from-n]]); applying the indexed form to
  $X_n := s(n)$ gives $f$ with $f(n) \in s(n)$, and
  $g(S) := f(\min\{\, n : s(n) = S \,\})$ is a choice function for $\mathcal{F}$,
  the minimum being canonical by [[thm-well-ordering-principle]]. Conversely a
  choice function $g$ on the at most countable family $\{\, X_n : n \in \mathbb{N} \,\}$
  gives $f(n) := g(X_n)$.

- **$\mathrm{AC}_\omega$ is strictly weaker than the Axiom of Choice**
  ([[def-axiom-of-choice]]): AC implies it immediately, since AC applies to every
  family, while it is consistent with ZF that $\mathrm{AC}_\omega$ holds and AC
  fails. **It is also strictly stronger than what ZF proves**: it is consistent
  with ZF that $\mathrm{AC}_\omega$ fails, as Cohen's first model shows, since an
  infinite set of reals with no countably infinite subset
  ([[rem-cohen-first-model]]) is already a failure of $\mathrm{AC}_\omega$; the
  Feferman-Levy model ([[rem-feferman-levy-model]]) is a second witness. Both
  statements are conditional on the consistency of ZF and are external results,
  established by forcing and by permutation models; they are recorded here with
  references and are **not** proved in this library, which contains neither
  technique. Of the two, only the failure of $\mathrm{AC}_\omega$ is recorded in
  this library's catalogue of unproved results; the separation of
  $\mathrm{AC}_\omega$ from AC in the other direction is quoted from the
  references alone.

- **Dependent choice sits between them.** The Axiom of Dependent Choice
  (DC) says that if $R$ is a relation on a nonempty set $X$ such that every
  $x \in X$ has some $y$ with $x \mathbin{R} y$, then there is a sequence
  $(x_n)_{n \in \mathbb{N}}$ with $x_n \mathbin{R} x_{n+1}$ for all $n$. In ZF,
  $\mathrm{AC} \Rightarrow \mathrm{DC} \Rightarrow \mathrm{AC}_\omega$; both
  implications are theorems of ZF, and neither is proved here. That neither
  reverses is a pair of relative-consistency results of the same kind as in the
  previous bullet: if ZF is consistent, then so are ZF + DC + (not AC) and
  ZF + $\mathrm{AC}_\omega$ + (not DC). Both are established by forcing and by
  permutation models, are quoted here from the references rather than proved, and
  cannot be stated without the consistency hypothesis; so "DC is *strictly*
  between AC and $\mathrm{AC}_\omega$" is shorthand for those two conditional
  statements and is never used here as a standalone assertion. DC is the
  principle that legitimises "choose $x_0$, then choose $x_1$ depending on
  $x_0$, and so on"; $\mathrm{AC}_\omega$ only legitimises countably many
  *independent* choices made at once.

- **Being an axiom, $\mathrm{AC}_\omega$ carries no well-definedness obligation**,
  which is why this item has no `justified_by`. Its role in this library is
  bookkeeping: [[thm-countable-union-of-countable]] assumes it and flags the exact
  step that spends it, and [[fs-countable-union-theorem-of-zf]] records that the
  assumption cannot be removed.

- Every result *proved* on this page other than
  [[thm-countable-union-of-countable]] is a theorem of ZF alone. In particular
  [[lem-subset-of-countable]], [[lem-countable-iff-surjection-from-n]],
  [[thm-schroder-bernstein]], [[thm-rationals-countable]], [[thm-cantor-powerset]]
  and [[thm-r-uncountable]] are choice free, and each says so. The false
  statements at the end of the page are not all of that kind, and the claim above
  does not cover them: two of the three refute a ZF-provability claim only under
  the hypothesis that ZF is consistent, quoting an external independence result
  rather than proving it, and they say so in their own Facts.
````

### `def-lower-limit-topology`

````markdown
---
id: def-lower-limit-topology
kind: definition
title: "The lower-limit topology on $\\mathbb{R}$, with the half-open intervals $[a,b)$ as a basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-interval, thm-basis-criterion, def-topology-basis-subbasis]
aliases: [def-sorgenfrey-line]
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
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, Sorgenfrey line"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
    - title: "Lower limit topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lower_limit_topology"
pipeline_run: null
---

## Definition

Let $\mathcal B_\ell=\{[a,b):a,b\in\mathbb R,\ a<b\}$. The **lower-limit topology** $\mathcal T_\ell$ on $\mathbb R$ is the topology having $\mathcal B_\ell$ as a basis. The resulting space is the **lower-limit line**.

This basis is well defined. It covers $\mathbb R$, because $x\in[x,x+1)$ for every $x$. If $x\in[a,b)\cap[c,d)$, then $x\in[\max(a,c),\min(b,d))$, whose right endpoint exceeds $x$ and which lies inside the intersection. Thus the two basis conditions of [[thm-basis-criterion]] hold, so $\mathcal B_\ell$ determines a unique topology.

The lower-limit topology is finer than the usual topology: if $x\in(a,b)$, then $[x,(x+b)/2)$ is a lower-limit basic interval containing $x$ and contained in $(a,b)$. No equality with the usual topology is asserted here. The half-open intervals use the interval convention of [[def-interval]], and opens are exactly unions of basis members by [[def-topology-basis-subbasis]].
````

### `lem-rat-embeds-dense`

````markdown
---
id: lem-rat-embeds-dense
kind: lemma
title: "The rationals embed densely in the reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-numbers, def-real-order, thm-reals-ordered-field, thm-reals-field, def-rational-cauchy-sequence, thm-rat-ordered-field, thm-rat-field]
aliases: []
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
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## Facts & Assumptions

**Given:** A real $x = [(a_n)]$ and a rational $\varepsilon > 0$.

[L1] The orders of $\mathbb{Q}$ and $\mathbb{R}$; ordered-field arithmetic ([[thm-rat-ordered-field]], [[thm-reals-ordered-field]]).

[L2] Field arithmetic in $\mathbb{Q}$: $\varepsilon/2, \delta/4$ are positive rationals, and every nonzero rational $q$ has a reciprocal $1/q$ with $q \cdot (1/q) = 1$ ([[thm-rat-field]]).

[L3] Cauchy definition ([[def-rational-cauchy-sequence]]).

[L4] Real positivity via eventual rational lower bounds ([[def-real-order]]).

[L5] $\mathbb{R} = \mathcal{C}/\mathcal{N}$ is a field ([[thm-reals-field]]), and $0_{\mathbb{R}} = \hat 0$, $1_{\mathbb{R}} = \hat 1$ are the classes of the constant sequences ([[def-real-numbers]]). A multiplicative inverse there is unique: if $ab = 1_{\mathbb{R}} = ac$ then $b = b(ac) = (ba)c = c$.

## Proof

**Proof technique:** direct.

1.1 Embedding: constant sequences are Cauchy; $\hat q = \hat r$ iff the constant $q - r$ is null iff $q = r$; operations match termwise; and $q < r$ gives the constant lower bound $r - q > 0$, so $\hat q < \hat r$ and order is preserved and reflected. [L1, L4]

1.2 Fix $N$ with $|a_m - a_n| < \varepsilon/2$ for all $m, n \ge N$, and set $q = a_N$. [L3, L2]

2.1 The difference $\hat q - x$ has representative $(a_N - a_n)$ with $|a_N - a_n| < \varepsilon/2$ for $n \ge N$; hence both $\hat\varepsilon - (x - \hat q)$ and $\hat\varepsilon - (\hat q - x)$ have representatives eventually $> \varepsilon/2$, so both are positive: $|x - \hat q| < \hat\varepsilon$. [step 1.2, L4, L1]

2.2 Inverses: let $q$ be a nonzero rational. Then $\hat q \ne \hat 0 = 0_{\mathbb{R}}$ by the injectivity of step 1.1, and $1/q$ exists in $\mathbb{Q}$ by [L2]; since the operations match termwise (step 1.1), $\hat q \cdot \widehat{1/q} = \widehat{q \cdot (1/q)} = \hat 1 = 1_{\mathbb{R}}$. Inverses in $\mathbb{R}$ are unique by [L5], so $(\hat q)^{-1} = \widehat{1/q}$: the embedding preserves reciprocals. [step 1.1, L2, L5]

3.1 Density: let $x < y$; pick $\delta > 0$ rational and $N$ with the representative of $y - x$ eventually $> \delta$; set $\varepsilon = \delta/4$ and pick $q$ with $|x - \hat q| < \hat\varepsilon$; then $q' = q + 2\varepsilon$ satisfies $\hat q' - x \ge -\hat\varepsilon + 2\hat\varepsilon = \hat\varepsilon > 0$ and $y - \hat q' \ge \hat\delta - \hat\varepsilon - 2\hat\varepsilon = \hat\delta/4 > 0$, so $x < \hat q' < y$. [step 2.1, L4, L1, L2]

4.1 The rationals embed as an ordered subfield — injectively, preserving the order in both directions, the ring operations, and reciprocals — and they approximate every real arbitrarily well and separate any two reals. [step 1.1, step 2.2, step 3.1] ∎
````

### `lem-regularity-via-closed-neighbourhoods`

````markdown
---
id: lem-regularity-via-closed-neighbourhoods
kind: lemma
title: "A space is regular if and only if every point has a neighbourhood base of closed neighbourhoods, if and only if $x \\in U$ open gives an open $V$ with $x \\in V \\subseteq \\overline{V} \\subseteq U$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-regular-and-t3-spaces, def-neighbourhood-top,
       def-interior-closure-boundary-top, thm-closure-characterisation-top,
       def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "regularity by closed neighbourhoods"
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
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
closures as in [[def-interior-closure-boundary-top]] and neighbourhoods as in
[[def-neighbourhood-top]], so that a neighbourhood need not be open. The
following three conditions are equivalent.

- **(a)** $X$ is regular ([[def-regular-and-t3-spaces]]).
- **(b)** For every $x \in X$ and every open $U$ with $x \in U$ there is an open
  $V$ with
  $$x \in V \subseteq \overline{V} \subseteq U .$$
- **(c)** Every point of $X$ has a neighbourhood base consisting of **closed**
  neighbourhoods: for every $x \in X$ and every neighbourhood $N$ of $x$ there is
  a closed neighbourhood $K$ of $x$ with $K \subseteq N$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, a point $x \in X$, an open set $U$ with $x \in U$, a neighbourhood $N$ of $x$, and a closed set $C$ with $x \notin C$.

[A1] $X$ is regular when for every closed $C$ and every $x \notin C$ there are disjoint open $U_0 \ni x$ and $V_0 \supseteq C$ ([[def-regular-and-t3-spaces]]).

[L1] $N$ is a neighbourhood of $x$ exactly when some open $W$ satisfies $x \in W \subseteq N$; a set is open exactly when it is a neighbourhood of each of its points ([[def-neighbourhood-top]]).

[L2] $\overline{V}$ is the smallest closed superset of $V$: it is closed, contains $V$, and is contained in every closed set containing $V$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

[L3] $\operatorname{int}(K)$ is the largest open subset of $K$, and $x \in \operatorname{int}(K)$ exactly when $K$ is a neighbourhood of $x$ ([[def-interior-closure-boundary-top]]).

[L4] A set is closed exactly when its complement is open ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume (a) and let $U$ be open with $x \in U$; then $C := X \setminus U$ is closed by [L4] and $x \notin C$, so [A1] gives disjoint open $V \ni x$ and $W \supseteq C$. [A1, L4, assume-hyp]

1.2 Assume (b) and let $N$ be a neighbourhood of $x$; fix an open $U$ with $x \in U \subseteq N$ by [L1], and let $V$ be as in (b), so $x \in V \subseteq \overline{V} \subseteq U \subseteq N$. [L1, assume-hyp]

1.3 Assume (c) and let $C$ be closed with $x \notin C$; then $X \setminus C$ is open by [L4] and contains $x$, hence is a neighbourhood of $x$ by [L1], so (c) gives a closed neighbourhood $K$ of $x$ with $K \subseteq X \setminus C$. [L1, L4, assume-hyp]

2.1 Under step 1.1: $V \subseteq X \setminus W$, since $V$ and $W$ are disjoint, and $X \setminus W$ is closed by [L4], so $\overline{V} \subseteq X \setminus W$ by [L2]; and $X \setminus W \subseteq X \setminus C = U$ because $C \subseteq W$. [step 1.1, L2, L4]

2.2 Under step 1.2: $\overline{V}$ is a closed set containing the open $V \ni x$, so it is a neighbourhood of $x$ by [L1], and it is a closed neighbourhood of $x$ contained in $N$. [step 1.2, L1, L2]

2.3 Under step 1.3: put $V_0 := \operatorname{int}(K)$, which is open and contains $x$ by [L3] since $K$ is a neighbourhood of $x$; and put $W_0 := X \setminus K$, which is open by [L4] since $K$ is closed. [step 1.3, L3, L4]

3.1 Step 2.1 gives $x \in V \subseteq \overline{V} \subseteq U$ with $V$ open, so (a) implies (b). [step 2.1]

3.2 Step 2.2 gives, for every neighbourhood $N$ of $x$, a closed neighbourhood of $x$ inside $N$, so (b) implies (c). [step 2.2]

3.3 Under step 2.3: $V_0 \cap W_0 = \operatorname{int}(K) \cap (X \setminus K) = \varnothing$ because $\operatorname{int}(K) \subseteq K$ by [L3], and $C \subseteq X \setminus K = W_0$ because $K \subseteq X \setminus C$; so $V_0$ and $W_0$ are disjoint open sets containing $x$ and $C$ respectively, and (c) implies (a). [step 2.3, A1, L3]

4.1 By steps 3.1, 3.2 and 3.3 the three conditions (a), (b) and (c) are equivalent. [step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Clause (b) is the working form.** Every application of regularity below uses it in the shape "shrink an open set around a point so that even its closure stays inside", which is what makes regularity behave like a one-sided version of the normality shrinking lemma proved later on this page.

- **Clause (c) is what makes a clopen basis decisive.** If a space has a basis of clopen sets then the basic sets containing a point are closed neighbourhoods of it and form a neighbourhood base ([[def-neighbourhood-top]]), so (c) holds and the space is regular with no further work. That is exactly the route by which the ordinal spaces later on this page are shown to be regular.

- **No separation hypothesis is used anywhere above.** Points need not be closed, and the lemma is a statement about regularity alone; combining it with $T_1$ is the separate step that produces $T_3$.
````

### `thm-rationals-countable`

````markdown
---
id: thm-rationals-countable
kind: theorem
title: "$\\mathbb{Q}$ is countably infinite"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-n-cross-n-countable, thm-product-of-countable, def-rationals, lem-rat-positive-denominator, def-countable, lem-subset-of-countable, def-integers, lem-countable-iff-surjection-from-n, thm-schroder-bernstein, def-equinumerous, def-injection-surjection-bijection, lem-nat-embeds-int, lem-int-embeds-rat, def-int-order, thm-int-ordered-ring, thm-omega-is-peano-system, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: true
short: "$\\mathbb{Q}\\approx\\mathbb{N}$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Rational number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

$\mathbb{Q} \approx \mathbb{N}$ ([[def-equinumerous]]): the rationals are
countably infinite ([[def-countable]]).

**No choice principle is used.** The one place where a reader expects a choice,
"pick a representative $a/b$ of each rational", is exactly where
[[lem-rat-positive-denominator]] applies: every rational *has* a representative
with positive denominator, so the map $(a,b) \mapsto [(a,b)]$ defined on
$\mathbb{Z} \times \mathbb{Z}_{>0}$ is already **surjective** onto $\mathbb{Q}$,
and countability follows from a surjection without ever selecting a
representative. The same device handles $\mathbb{Z}$, which is a surjective image
of $\mathbb{N} \times \mathbb{N}$ by construction ([[def-integers]]).

## Facts & Assumptions

**Given:** $\mathbb{Z} = (\mathbb{N} \times \mathbb{N})/\sim$ with quotient map $(a,b) \mapsto [(a,b)]$ ([[def-integers]]), and $\mathbb{Q}$ the set of classes $[(a,b)]$ of pairs of integers with $b \ne 0$ ([[def-rationals]]). Write $\mathbb{Z}_{>0} = \{\, b \in \mathbb{Z} : b > 0 \,\}$ ([[def-int-order]]).

[L1] Finite, countably infinite, at most countable, uncountable ([[def-countable]]).

[L2] Bijections, injections, surjections, composition; $\approx$ and $\preceq$ ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L3] A nonempty $X$ is at most countable iff there is a surjection $\mathbb{N} \to X$; and from such a surjection $s$ the map $x \mapsto \min\{\, k : s(k) = x \,\}$ is an injection $X \to \mathbb{N}$ ([[lem-countable-iff-surjection-from-n]]).

[L4] There is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]]).

[L5] A product of two at most countable sets is at most countable ([[thm-product-of-countable]]); a subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L6] Every rational is $[(a,b)]$ for some integers $a$ and $b$ with $b > 0$ ([[lem-rat-positive-denominator]]).

[L7] $\mathbb{N}$ embeds injectively in $\mathbb{Z}$ by $n \mapsto [(n,0)]$ ([[lem-nat-embeds-int]]) and $\mathbb{Z}$ embeds injectively in $\mathbb{Q}$ by $k \mapsto [(k,1)]$ ([[lem-int-embeds-rat]]).

[L8] $\preceq$ in both directions gives $\approx$ ([[thm-schroder-bernstein]]).

[L9] The relation of [[def-int-order]] is a total order on $\mathbb{Z}$ compatible with the ring structure ([[thm-int-ordered-ring]]), and $\mathbb{Z}_{>0} \ne \varnothing$: on representatives $0 < [(a,b)]$ holds exactly when $b < a$ in $\mathbb{N}$ ([[def-int-order]]), and $0 < 1$ in $\mathbb{N}$, since $1 = \sigma(0) \ne 0$ ([[thm-omega-is-peano-system]]) while $0 < n$ for every nonzero natural $n$ (claim 4 of [[lem-nat-order-is-membership]]); so the integer $[(1,0)]$ is positive.

## Proof

**Proof technique:** direct.

1.1 The quotient map $\pi : \mathbb{N} \times \mathbb{N} \to \mathbb{Z}$, $\pi(a,b) = [(a,b)]$, is surjective, since every integer is by definition such a class; hence $\pi \circ \beta : \mathbb{N} \to \mathbb{Z}$ is a surjection, and $\mathbb{Z} \ne \varnothing$, so $\mathbb{Z}$ is at most countable by [L3]. [given, L2, L3, L4]

1.2 The composite $\iota : \mathbb{N} \to \mathbb{Q}$, $n \mapsto [([(n,0)],1)]$, of the two embeddings of [L7] is injective, so $\mathbb{N} \preceq \mathbb{Q}$. [L2, L7]

2.1 $\mathbb{Z}_{>0}$ is a subset of $\mathbb{Z}$, hence at most countable by [L5], and it is nonempty by [L9]; therefore $\mathbb{Z} \times \mathbb{Z}_{>0}$ is at most countable by [L5] and nonempty, so [L3] provides a surjection $u : \mathbb{N} \to \mathbb{Z} \times \mathbb{Z}_{>0}$. [step 1.1, L3, L5, L9]

3.1 The map $\rho : \mathbb{Z} \times \mathbb{Z}_{>0} \to \mathbb{Q}$, $\rho(a,b) = [(a,b)]$, is well defined because $b > 0$ gives $b \ne 0$, and it is surjective by [L6]; hence $\rho \circ u : \mathbb{N} \to \mathbb{Q}$ is a surjection, $\mathbb{Q}$ is at most countable, and [L3] turns that surjection into an injection $j : \mathbb{Q} \to \mathbb{N}$, so $\mathbb{Q} \preceq \mathbb{N}$. [step 2.1, given, L2, L3, L6]

4.1 From $\mathbb{N} \preceq \mathbb{Q}$ and $\mathbb{Q} \preceq \mathbb{N}$, the Schröder-Bernstein theorem [L8] yields a bijection $\mathbb{Q} \to \mathbb{N}$; hence $\mathbb{Q} \approx \mathbb{N}$ and $\mathbb{Q}$ is countably infinite. [step 1.2, step 3.1, L1, L8] ∎

## Remarks

- **Why Schröder-Bernstein rather than a count.** The usual last line is "countable, and infinite because $\mathbb{N}$ injects into it". Turning that into a proof requires knowing that a set containing an injective copy of $\mathbb{N}$ is not finite, which is the pigeonhole principle, [[lem-pigeonhole]], proved earlier on this page. That route is now available, but it is a detour: [[thm-schroder-bernstein]] gets the bijection directly from the two injections already in hand, and it is choice free, so nothing is lost.

- **Lowest terms are not needed and are not available.** A frequent presentation injects $\mathbb{Q}$ into $\mathbb{Z} \times \mathbb{N}$ by sending each rational to its representative in lowest terms. That map needs greatest common divisors, which this library has not developed. Working with a surjection instead of an injection avoids the issue entirely: repetitions in an enumeration are harmless ([[lem-countable-iff-surjection-from-n]]).

- The proof shows in passing that $\mathbb{Z} \approx \mathbb{N}$, by the same two-injection argument applied to [L7] and step 1.1, and that $\mathbb{Q} \times \mathbb{Q}$, $\mathbb{Q}^3$ and so on are countable ([[thm-product-of-countable]]). The contrast with [[thm-r-uncountable]] is the point of the page: adding all limits of rational approximations to $\mathbb{Q}$ changes the size of the set, not merely its arithmetic.
````

