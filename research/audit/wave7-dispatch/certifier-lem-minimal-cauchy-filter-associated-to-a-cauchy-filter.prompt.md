# Independent repair certifier brief — Wave 7, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of one Audit-Beta repair.
You did not author it. Your Codex lane has a mechanically read-only shell: use
non-mutating commands such as `rg`, `sed`, and `git diff` to read the current
workspace and use web access where a source check is material. Do not edit,
delegate, escalate, or ask for a shell permission. Shell reads already allowed
inside the read-only sandbox require no owner approval.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned item's **current final text from disk**, not merely its task
summary. Read each dependency relevant to the repaired inference. Check the
title and public statement, every numbered step, Facts & Assumptions, Remarks,
dependency lists, provenance tags, and verification block. Where an exact
external source is material, use web access to check that source. Confirm that
stale pre-repair `verification.judge`/`verification.audited` evidence is absent
and that the stated repair fixes its named defect without introducing a new
one. A passing mechanical gate is supporting evidence, not a mathematical
substitute.

Return exactly:

```text
ITEM: <id>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [provenance/dependencies/stale-verdict disposition]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp. Audit-
Alpha decides whether the independent reading licenses one.


---

# This dispatch

## Assigned repair — `lem-minimal-cauchy-filter-associated-to-a-cauchy-filter`

Item path: `items/lem-minimal-cauchy-filter-associated-to-a-cauchy-filter.md`

Normalized final-text SHA-256 at dispatch: `4f4aa2ca3a5f361dc41d1e9ba248dffbc29ec1d62d06189d619636463a197213`

Split reasons: ["body text"]

Provenance ledger: `wave7-topology-uniform.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
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
    "source": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-filter-base",
    "declared_target": "def-filter-base",
    "target_statement_provenance": "ai-altered",
    "targetPage": "filters-and-ultrafilters",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-filter-base-generates",
    "declared_target": "lem-filter-base-generates",
    "target_statement_provenance": "ai-altered",
    "targetPage": "filters-and-ultrafilters",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
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
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: lem-minimal-cauchy-filter-associated-to-a-cauchy-filter
kind: lemma
title: "Every Cauchy filter canonically determines a unique minimal Cauchy filter coarser than it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cauchy-filter-in-a-uniform-space, def-filter-base, lem-filter-base-generates, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "J. H. V. Hunt, Boletín de la Sociedad Matemática Mexicana 34 (1989), 11–21", url: "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"}]
pipeline_run: null
---

## Statement

Every Cauchy filter $\mathcal F$ canonically determines a unique Cauchy filter $m(\mathcal F)\subseteq\mathcal F$ that has no strictly coarser Cauchy filter. For every $x\in X$, the principal filter $\mathcal P_x:=\{A\subseteq X:x\in A\}$ is Cauchy and therefore has an associated minimal Cauchy filter $m(\mathcal P_x)$.

## Facts & Assumptions

**Given:** A Cauchy filter $\mathcal F$ on a uniform space.

[L1] Cauchyness supplies arbitrarily small members of $\mathcal F$ ([[def-cauchy-filter-in-a-uniform-space]]).

[L2] Filter bases generate the least filter containing them ([[def-filter-base]], [[lem-filter-base-generates]]).

[L3] Symmetric entourages form a base and may be chosen with prescribed finite-composite control ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 Let $\mathcal B$ consist of all $E[A]$ with $A\in\mathcal F$ and symmetric entourage $E$. Every such set contains the nonempty set $A$. Given $E[A],D[B]\in\mathcal B$, the symmetric entourage $E\cap D$ and the member $A\cap B\in\mathcal F$ give $$ (E\cap D)[A\cap B]\subseteq E[A]\cap D[B]. $$ Thus $\mathcal B$ is a proper downward-directed filter base. Let $m(\mathcal F)$ be the filter it generates. [L2, L3, construct]

2.1 Since $A\subseteq E[A]$, every member of $\mathcal B$ belongs to $\mathcal F$, so $m(\mathcal F)\subseteq\mathcal F$. To prove it Cauchy, let $U$ be an entourage and choose a symmetric $E$ with $E^{\circ3}\subseteq U$. Choose $A\in\mathcal F$ with $A\times A\subseteq E$. If $y,z\in E[A]$, take $a,b\in A$ with $aEy$ and $bEz$; symmetry gives $yEaEbEz$, so $(y,z)\in E^{\circ3}\subseteq U$. Hence $E[A]\in m(\mathcal F)$ is $U$-small. [L1, L3, step 1.1]

2.2 Let $\mathcal G\subseteq\mathcal F$ be Cauchy, and fix $E[A]\in\mathcal B$. Choose a symmetric $D$ with $D\subseteq E$, and a $D$-small $B\in\mathcal G$. Since $A,B\in\mathcal F$, choose $c\in A\cap B$. Then $B\subseteq D[c]\subseteq E[A]$, so $E[A]\in\mathcal G$. Thus every Cauchy filter coarser than $\mathcal F$ contains $m(\mathcal F)$. [L1, L3, step 1.1, choose]

3.1 If a Cauchy filter is coarser than $m(\mathcal F)$, step 2.2 places $m(\mathcal F)$ inside it, so equality holds; hence $m(\mathcal F)$ is minimal. Any minimal Cauchy filter coarser than $\mathcal F$ contains $m(\mathcal F)$ by step 2.2 and must equal it by minimality. This proves uniqueness. [step 2.1, step 2.2]

4.1 For $x\in X$, the set $\{x\}$ belongs to $\mathcal P_x$, and $\{x\}\times\{x\}\subseteq\Delta_X\subseteq E$ for every entourage $E$. Thus $\mathcal P_x$ is Cauchy by [L1], and step 3.1 supplies its associated minimal Cauchy filter. [L1, step 3.1, discharge-construct] ∎
````
