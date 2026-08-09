## Selection reasons

- critical risk (8): 4 declared dependencies; 4 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `lem-cauchy-filter-with-a-cluster-point-converges`

Normalized current SHA-256: `37ef91139d3f526c94b10c3ea38097b354adbe4a174f7dfbca531813bd8f147e`

The complete current item follows, including frontmatter:

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
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
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

## Wave 7 provenance row for the target

```json
{
  "id": "lem-cauchy-filter-with-a-cluster-point-converges",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"
  ],
  "rationale": "Wodzicki Exercise 45 states that every adherence point of a Cauchy filter is its convergence point. The proof expands this and needs the induced-topology citation recorded at A3.",
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
      "source": "def-filter-convergence-and-cluster-point",
      "source_section": "Definition",
      "quote": "- $\\mathcal F$ **converges to $p$**, written $\\mathcal F\\to p$, if every neighbourhood of $p$ belongs to $\\mathcal F$.\n- $p$ is a **cluster point** of $\\mathcal F$ if $N\\cap A\\ne\\varnothing$ for every neighbourhood $N$ of $p$ and every $A\\in\\mathcal F$.",
      "uses": [
        "1.2",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-cauchy-filter-in-a-uniform-space",
      "source_section": "Definition",
      "quote": "A filter $\\mathcal F$ on a uniform space $(X,\\mathcal U)$ is **Cauchy** if for every entourage $E\\in\\mathcal U$ some $A\\in\\mathcal F$ satisfies $A\\times A\\subseteq E$. Such an $A$ is an $E$-small member of $\\mathcal F$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-symmetric-entourages-form-a-base",
      "source_section": "Statement",
      "quote": "If $\\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\\in\\mathcal U$ there is a symmetric $D\\in\\mathcal U$ with $D\\subseteq E$. More generally, for every entourage $E$ and every integer $n\\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\\circ n}\\subseteq E$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-uniformity-induces-a-topology",
      "source_section": "Statement",
      "quote": "For a uniformity $\\mathcal U$ on $X$, call $O\\subseteq X$ open when every $x\\in O$ has an entourage $E$ with $E[x]\\subseteq O$. These open sets form a topology on $X$. Its neighbourhood filter at $x$ has $\\{E[x]:E\\in\\mathcal U\\}$ as a base.",
      "uses": [
        "1.2",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Let $E$ be an entourage and choose symmetric $D$ with $D\\circ D\\subseteq E$; choose $A\\in\\mathcal F$ with $A\\times A\\subseteq D$. [L2, choose]",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "The ball $D[x]$ is a neighbourhood of $x$, so it meets $A$ because $x$ is a cluster point; fix $a\\in A\\cap D[x]$. [L1, L3, choose]",
      "step": "1.2",
      "inputs": [
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "For every $b\\in A$, symmetry gives $(x,a)\\in D$ and smallness gives $(a,b)\\in D$, hence $(x,b)\\in E$; so $A\\subseteq E[x]$. [step 1.1, step 1.2]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Every entourage ball about $x$ belongs to $\\mathcal F$ by upward closure, and such balls form a neighbourhood base at $x$, so $\\mathcal F$ converges to $x$. [step 2.1, L1, L3] ∎",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L1",
        "L3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: any given uniform space has nonempty carrier under the library's proper-filter convention, and a topological group contains its identity"
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
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (8): 4 declared dependencies; 4 cited facts; boundary-sensitive language; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The empty-carrier case is excluded because a cluster point exists (the hypothesis provides a point). In a one-point space, any proper filter is both Cauchy and convergent to the point, and the proof holds. The nonempty choice in step 1.2 is guaranteed by the cluster‑point definition. Potential counterexamples (e.g., the right‑neighbourhood filter on ℝ) satisfy the lemma; a Cauchy filter on an incomplete space without a cluster point does not meet the hypothesis. The proof does not rely on any hidden separation, metric, or completeness assumptions. Checked surface: The title, public statement, Facts & Assumptions, every numbered proof step (1.1, 1.2, 2.1, 3.1), and the absent Remarks were read. Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/lem-cauchy-filter-with-a-cluster-point-converges--d3370be61c8399b3.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-cauchy-filter-with-a-cluster-point-converges",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-cauchy-filter-in-a-uniform-space",
    "declared_target": "def-cauchy-filter-in-a-uniform-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-cauchy-filter-with-a-cluster-point-converges",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-filter-convergence-and-cluster-point",
    "declared_target": "def-filter-convergence-and-cluster-point",
    "target_statement_provenance": "literature-derived",
    "targetPage": "nets-and-filters",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-cauchy-filter-with-a-cluster-point-converges",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-symmetric-entourages-form-a-base",
    "declared_target": "lem-symmetric-entourages-form-a-base",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-cauchy-filter-with-a-cluster-point-converges",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-uniformity-induces-a-topology",
    "declared_target": "thm-uniformity-induces-a-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
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

### `def-cauchy-filter-in-a-uniform-space`

````markdown
---
id: def-cauchy-filter-in-a-uniform-space
kind: definition
title: "Cauchy filter in a uniform space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-uniform-space-by-entourages, def-filter]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Definition

A filter $\mathcal F$ on a uniform space $(X,\mathcal U)$ is **Cauchy** if for every entourage $E\in\mathcal U$ some $A\in\mathcal F$ satisfies $A\times A\subseteq E$. Such an $A$ is an $E$-small member of $\mathcal F$.
````

### `def-filter-convergence-and-cluster-point`

````markdown
---
id: def-filter-convergence-and-cluster-point
kind: definition
title: "Convergence and cluster points of a filter on a topological space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-filter, def-neighbourhood-top]
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
  references:
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "ultrafilter (nLab)"
      url: "https://ncatlab.org/nlab/show/ultrafilter"
pipeline_run: null
---

## Definition

Let $\mathcal F$ be a filter on a topological space $X$ and let $p\in X$.

- $\mathcal F$ **converges to $p$**, written $\mathcal F\to p$, if every neighbourhood of $p$ belongs to $\mathcal F$.
- $p$ is a **cluster point** of $\mathcal F$ if $N\cap A\ne\varnothing$ for every neighbourhood $N$ of $p$ and every $A\in\mathcal F$.

The second condition says precisely that the neighbourhood filter at $p$ and $\mathcal F$ have no disjoint members.
````

### `lem-symmetric-entourages-form-a-base`

````markdown
---
id: lem-symmetric-entourages-form-a-base
kind: lemma
title: "Every uniformity has a base of symmetric entourages"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-space-by-entourages, def-filter-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

If $\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\in\mathcal U$ there is a symmetric $D\in\mathcal U$ with $D\subseteq E$. More generally, for every entourage $E$ and every integer $n\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\circ n}\subseteq E$.

## Facts & Assumptions

**Given:** A uniformity $\mathcal U$ on $X$, an entourage $E\in\mathcal U$, and an integer $n\ge 1$.

[A1] A uniformity is a filter whose members are closed under inverse and admit square roots ([[def-uniform-space-by-entourages]]).

[L1] A nonempty, proper family that refines every pair of its members is a filter base ([[def-filter-base]]).

## Proof

**Proof technique:** direct.

1.1 Choose $R\in\mathcal U$ with $R\circ R\subseteq E$, and put $S:=R\cap R^{-1}$. [A1, choose]

1.2 Put $E_0:=E$. By finitely iterating the square-root axiom, choose entourages $E_1,\ldots,E_n$ such that $E_{k+1}\circ E_{k+1}\subseteq E_k$ for $0\le k<n$, and put $D:=E_n\cap E_n^{-1}$. [A1, choose]

2.1 The set $S$ is an entourage, since $R,R^{-1}\in\mathcal U$ and a filter is closed under intersections; also $S=S^{-1}$ and $S\subseteq R\circ R\subseteq E$, because every entourage contains the diagonal. [step 1.1, A1]

2.2 The entourage $D$ is symmetric and $D\subseteq E_n$. Induction on $k$ gives $D^{\circ 2^k}\subseteq E_{n-k}$ for $0\le k\le n$, hence $D^{\circ 2^n}\subseteq E$. Since every entourage contains the diagonal and $n\le 2^n$, one may insert diagonal factors to obtain $D^{\circ n}\subseteq D^{\circ 2^n}\subseteq E$. [step 1.2, A1, algebra]

3.1 Thus symmetric entourages refine every entourage; their intersections are symmetric entourages and none is empty because each contains the diagonal, so they form a filter base by [L1]. [step 2.1, L1]

4.1 Therefore symmetric entourages form a base and admit the asserted finite-composite control. [step 3.1, step 2.2] ∎
````

### `thm-uniformity-induces-a-topology`

````markdown
---
id: thm-uniformity-induces-a-topology
kind: theorem
title: "The sets containing an entourage ball about each of their points form a topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-space-by-entourages, lem-symmetric-entourages-form-a-base, def-topological-space, def-neighbourhood-top]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

For a uniformity $\mathcal U$ on $X$, call $O\subseteq X$ open when every $x\in O$ has an entourage $E$ with $E[x]\subseteq O$. These open sets form a topology on $X$. Its neighbourhood filter at $x$ has $\{E[x]:E\in\mathcal U\}$ as a base.

## Facts & Assumptions

**Given:** A uniform space $(X,\mathcal U)$.

[A1] Entourages contain the diagonal, are closed under finite intersection, and have symmetric square roots ([[def-uniform-space-by-entourages]], [[lem-symmetric-entourages-form-a-base]]).

[L1] A topology contains $\varnothing,X$, is closed under arbitrary unions, and under binary intersections ([[def-topological-space]]).

[L2] A neighbourhood base at $x$ refines every neighbourhood of $x$ ([[def-neighbourhood-top]]).

## Proof

**Proof technique:** direct.

1.1 The sets $\varnothing$ and $X$ are open: the first has no points to test, and for $x\in X$ every entourage ball is contained in $X$. [A1]

1.2 An arbitrary union of open sets is open, because a point in the union lies in one member and retains that member's entourage ball. [A1]

1.3 If $x\in O\cap P$, choose entourage balls $E[x]\subseteq O$ and $F[x]\subseteq P$; then $(E\cap F)[x]\subseteq O\cap P$, so binary intersections are open. [A1]

2.1 By steps 1.1 to 1.3, the open sets form a topology by [L1]. [step 1.1, step 1.2, step 1.3, L1]

3.1 Let $E$ be an entourage and define $$ O_E=\{y\in E[x]:F[y]\subseteq E[x]\text{ for some }F\in\mathcal U\}. $$ This set is open. Indeed, given $y\in O_E$, choose $F$ as displayed and then a symmetric $G$ with $G\circ G\subseteq F$. If $z\in G[y]$, symmetry gives $G[z]\subseteq(G\circ G)[y]\subseteq F[y]\subseteq E[x]$, so $z\in O_E$; hence $G[y]\subseteq O_E$. Now choose a symmetric $D$ with $D\circ D\subseteq E$. If $y\in D[x]$, then $D[y]\subseteq E[x]$, so $y\in O_E$. Thus $x\in D[x]\subseteq O_E\subseteq E[x]$, proving that $E[x]$ is a neighbourhood of $x$. [A1, step 2.1]

4.1 Conversely, if $N$ is a neighbourhood of $x$, it contains an open set $O$ with $x\in O$; the definition of the topology supplies an entourage $E$ with $E[x]\subseteq O\subseteq N$. Thus the entourage balls refine every neighbourhood, and by step 3.1 they are themselves neighbourhoods. They form a neighbourhood base by [L2]. [step 2.1, step 3.1, L2] ∎
````

